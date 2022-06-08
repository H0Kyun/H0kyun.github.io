---
layout: post
title: 참조자
subtitle: 참조자에 대해 알아보자.
categories: [Cpp]
---

참조자(Reference)는 한 개체에게 또 다른 이름을 붙이는 방법을 말한다.

<h2 class="section-heading">참조자 선언</h2>
참조자는 자료형 뒤에 &선언자를 붙여 선언한다. 선언할 때 주의할 것은 참조자는 반드시 선언과 동시에 초기화가 되어야 한다.
<pre><code class="cpp">int main(int argc, char** argv)
{
    int num = 2;
    int& referenceNum = num; //변수 num의 참조자

    referenceNum++; //num값도 증가
    cout << num << endl;

    return 0;
}
</code>
</pre>
참조자를 변경하면 참조한 변수도 같이 변경되는 점에서 포인터와 유사하지만 몇 가지 차이점이 존재한다.
##### 1. 참조자는 반드시 초기화되어야 한다.
참조자는 아래 경우가 아닐때 초기화를 하지 않을 경우 컴파일 에러가 발생한다. NULL값으로 초기화하는 것도 안된다.
- 명시적 <code>extern</code>선언
- 클래스 멤버의 선언
- 클래스 내의 선언
- 함수의 인수 또는 함수의 반환 선언
<pre>
<code class="cpp">int main(int argc, char** argv)
{
    int* p; //가능하다.
    int& ref; //불가능하다.
    return 0;
}</code>
</pre>
##### 2. 참조자는 참조한 개체를 변경할 수 없다.
참조자는 한 번 초기화 후 다른 개체를 참조할 수 없습니다.
<pre>
<code class="cpp">int main(int argc, char** argv)
{
    int num1 = 1, num2 = 2;
    int* p = &num1;
    int& ref = num1;

    p = &num2; //가리키는 대상이 num1에서 num2로 변경된다.
    ref = num2; //num1 값에 num2 값을 대입한다. num1 = num2;와 동일하다.
    return 0;
}</code>
</pre>
##### 3. 참조자는 메모리 할당이 안될 수 있다.
포인터는 정의되면 메모리를 할당받지만 참조자는 특정 상황을 제외하면 메모리를 할당받지 않다. 하지만 컴파일러가 필요에 의해 저장 공간을 할당하는 경우도 있다고 한다.
<pre>
<code class="cpp">int main(int argc, char** argv)
{
    int num1 = 1;
    int* p = &num1; //8바이트를 할당받는다.
    int& ref = num1; //ref가 쓰이는 자리를 num1으로 대체하면 되므로 메모리 할당이 없다.

    return 0;
}</code>
</pre>

<h2 class="section-heading">상수에 대한 참조자</h2>
기본적으로 참조자는 상수를 참조할 수 없다.
<pre>
<code class="cpp">int main(int argc, char** argv)
{
    int& ref = 1; //컴파일 에러
    
    return 0;
}</code>
</pre>
이는 상수값이 리터럴이기 때문에 참조자를 이용해 상수를 참조할 수 있다면 리터널의 값을 변경할 수 있게되므로 C++문법상 막아둔 것이다. 하지만 <code>const</code>를 사용하여 상수 참조자로 선언하면 리터럴도 참조할 수 있다.
<pre>
<code class="cpp">int main(int argc, char** argv)
{
    const int& ref = 1; //가능
    int num = ref; //num = 1과 동일

    return 0;
}</code>
</pre>

<h2 class="section-heading">함수의 매개변수로 참조자 사용</h2>
크기가 큰 개체를 인자로 전달해야 할 때 매개변수로 참조자를 사용하면 값을 복사하지 않아 더 효율적이다. 물론 포인터를 매개변수로 사용해도 값을 복사하지 않고 주소로 접근해 참조자와 같은 효과를 볼 수 있지만 참조자는 주소값 연산을 이용해 해당 인자의 메모리가 아닌 다른 메모리에 접근할 수 없기에 더 안전하다.
<pre>
<code class="cpp">void function(int& ref)
{
    ref++;

    return;
}

int main(int argc, char** argv)
{
    int num1 = 1;
    function(num1);

    return 0;
}</code>
</pre>
여기서 <code class="cpp">int& ref</code>를 매개변수로 사용가능한 이유는 <code class="cpp">ref</code>가 정의 되는 순간이 함수<code class="cpp">function()</code>이 호출되어 인자로 <code class="cpp">num1</code>을 넘겨받는 순간이기 때문이다.

상수 인자를 전달하기 위해서는 앞서 언급한 상수 참조자를 사용해야 한다. 상수 참조자를 매개변수로 사용하는 함수는 전달받은 인자를 변경하지 않는다는 것을 보장하여 읽기 전용을 인자로 전달 할 수 있게 해준다.
<pre>
<code class="cpp">void function(const int& ref)
{
    ref++; //컴파일 에러

    return;
}

int main(int argc, char** argv)
{
    function(1); //매개변수가 상수 참조자가 아니면 에러가 발생한다.

    return 0;
}</code>
</pre>
포인터를 매개변수로 사용해도 값을 복사하지 않고 주소로 접근해 참조자와 같은 효과를 볼 수 있지만 참조자는 주소값 연산을 이용해 해당 인자의 메모리가 아닌 다른 메모리에 접근할 수 없기에 더 안전하다.

<h2 class="section-heading">함수의 반환으로 참조자 사용</h2>
함수의 반환 형식을 참조자로 하는 것은 큰 개체를 반환할 때 더 효율적일 수 있다.
<pre>
<code class="cpp">int& function(int& ref)
{
    ref++;

    return ref;
}

int main(int argc, char** argv)
{
    int num1 = 1;
    int num2 = function(num1);

    return 0;
}</code>
</pre>
<div style="background-color:#F9CDCE"><h5>주의 사항</h5>지역 범위에서 선언한 개체는 함수가 반환할 때 제거된다. 만약, 함수가 이 개체에 대한 참조를 반환하는 경우 호출자가 NULL 참조를 사용하려고 하면 런타임 에러가 발생한다. 이렇게 참조자는 있지만 참조하고 있는 대상이 없는 참조자를 댕글링 레퍼런스(Dangling reference)라고 부른다.
<pre>
<code class="cpp">int& function()
{
    int num1 = 1;

    return num1;
}

int main(int argc, char** argv)
{
    int num2 = function(); //NULL 참조를 사용해 런타임 에러

    return 0;
}</code>
</pre>
</div>
<br>
>###### 참고 자료
>###### [모두의 코드](https://modoocode.com/141){: target="_blank"}
>###### [microsoft docs](https://docs.microsoft.com/ko-kr/cpp/cpp/references-cpp?view=msvc-170){: target="_blank"}
>###### [hashcode 질문글](https://hashcode.co.kr/questions/5146/%EC%B0%B8%EC%A1%B0%EC%9E%90%EB%8F%84-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B3%B5%EA%B0%84%EC%97%90-%ED%95%A0%EB%8B%B9%EB%90%98%EB%82%98%EC%9A%94){: target="_blank"}
>###### [이지코딩](https://easycoding91.tistory.com/4){: target="_blank"}