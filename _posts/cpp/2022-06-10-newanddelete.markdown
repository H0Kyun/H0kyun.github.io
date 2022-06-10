---
layout: post
title: 동적 할당
subtitle: new와 delete에 대해 알아보자.
categories: [Cpp]
---

C++에서는 <code>new</code>연산자와 <code>delete</code>연산자를 이용해 객체의 동적 할당을 지원한다. <code>new</code>연산자를 사용하면 heap 영역에 메모리를 할당해준다. <code>delete</code>연산자를 통해 heap 영역에 할당되지 않은 객체를 해제하려 한다면 에러가 발생한다. 

<h2 class="section-heading">new 연산자 사용</h2>
<code>new</code>연산자의 첫 인수는 <code>size_t</code>형식이어야 하고 <code>new</code>연산자는 해당 형식을 이용해 객체를 만들고 할당된 메모리의 주소가 포함된 <code>void*</code>를 반환한다. 아래 예처럼 반환된 포인터를 자체 포인터에 할당하여 <code>new</code>연산자를 통해 할당한 메모리에 접근할 수 있도록 한다.
<pre><code class="cpp">//T는 자료형
T* pointer = new T;
T* pointer = new T[arraySize]; //배열</code></pre>
<code>new</code>연산자 사용할 때 주의해야 할 점으로 <code>new</code>연산자를 class 내에 함수로 정의해뒀다면 글로벌 <code>new</code>연산자는 숨겨져 아래와 같은 상황에서 에러가 발생할 수 있다.
<pre><code class="cpp">class NewInClass{
public:
    NewInClass(){}
    void* operator new(size_t allocate, char chInit);
};

void* NewInClass::operator new(size_t allocate, char chInit)
{
    //...
}

int main(int argc, char** argv)
{
    NewInClass *some = new NewInClass //에러 발생
    return 0;
}</code></pre>

<h2 class="section-heading">할당 실패 처리</h2>
<code>new</code>연산자는 메모리 부족으로 할당 실패했을 때 <code>std::bad_alloc</code>가 발생한다. <code>std::bad_alloc</code>는 아래와 같이 처리할 수 있다.
<pre><code class="cpp">#include &lt;iostream&gt;
#include &lt;new&gt;

using namespace std;

#define BIG_NUMBER 10000000000LL

int main(int argc, char** argv)
{
    try
    {
        int *pI = new int[BIG_NUMBER];
    }
    catch(bad_alloc& exception)
    {
        cout << "bad_alloc: " << ex.what() << endl;
        return -1;
    }
}</code></pre>
<code>nothrow</code>형식을 사용하면 <code>std::bad_alloc</code>대신 <code>nullptr</code>를 반환하게 할 수도 있다. <code>nothrow</code>형식은 아래처럼 사용하면 된다.
<pre><code class="cpp">#include &lt;iostream&gt;
#include &lt;new&gt;

using namespace std;

#define BIG_NUMBER 10000000000LL

int main(int argc, char** argv)
{
    int *pI = new(nothrow) int[BIG_NUMBER];
    
    if ( pI == nullptr )
    {
        cout << "Insufficient memory" << endl;
        return -1;
    }
}</code></pre>

<h2 class="section-heading">delete 연산자 사용</h2>
<code>delete</code>연산자를 사용하여 <code>new</code>연산자로 동적 할당한 메모리를 해제할 수 있다. 그리고 <code>delete</code>연산자도 <code>new</code>연산자와 마찬가지로 class 내에 <code>delete</code>연산자가 정의되어 있으면 전역 <code>delete</code>연산자가 가려진다. <code>delete</code>연산자는 아래처럼 사용한다.
<pre><code class="cpp">delete pointer;
delete[] pointer; //배열</code></pre>
<div style="background-color:#F9CDCE;padding: 5%"><h5>주의 사항</h5><code>delete</code>연산자는 단순히 메모리를 다시 운영체제로 반환만 한다. 이 말은 메모리가 할당 해제된 메모리를 가리키는 포인터가 생긴다는 뜻이다. 이런 포인터를 댕글링 포인터(Dangling pointer)라 한다. 댕글링 포인터를 사용하면 미정의 행동(Undefined behavior)가 발생한다.
<pre><code class="cpp">#include&lt;iostream&gt;

int main(int argc, char** argv)
{
    int *p = new int;
    *p = 1;

    delete p; //p가 댕글링포인터가 된다.

    std::cout << *p; //문제 발생

    return 0;
}</code>
</pre>
이를 방지하기 위해서는 포인터를 <code>nullptr</code>로 설정해주는 것이 좋다.
<pre><code class="cpp">#include&lt;iostream&gt;

int main(int argc, char** argv)
{
    int *p = new int;
    
    delete p;

    p = nullptr;

    return 0;
}</code></pre>
</div>
<br>
>###### 참고 자료
>###### [모두의 코드](https://modoocode.com/169){: target="_blank"}
>###### [microsoft docs](https://docs.microsoft.com/en-us/cpp/cpp/new-and-delete-operators?view=msvc-170){: target="_blank"}
>###### [소년코딩](https://boycoding.tistory.com/204){: target="_blank"}