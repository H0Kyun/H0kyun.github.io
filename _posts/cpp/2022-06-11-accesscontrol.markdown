---
layout: post
title: 접근 지정자
subtitle: public, private, protected에 대해 알아보자
categories: [Cpp]
---

접근 지정자(Access modifiers)는 정보의 은닉 정도를 알려준다. 접근 지정자로 제한된 멤버들은 컴파일러에 의해 판단되어 이를 위반하는 접근이 있으면 컴파일 에러가 발생한다. C++에는 <code>private</code>, <code>protected</code>, <code>public</code> 이렇게 세 가지 접근 지정자를 제공한다. 그리고 <code>friend</code> 지정자를 이용해 접근 권한을 추가할 수도 있다.

<h2 class="section-heading">friend</h2>
클래스 정의에서 <code>friend</code> 지정자를 사용하여 내 클래스 멤버가 아닌 함수나 다른 클래스를 선언하면 해당 함수나 클래스에게 내 클래스 내에 모든 멤버에 접근할 수 있는 권한을 부여한다. 한 클래스 멤버 목록 내에 <code>friend</code> 지정자와 함께 정의된 함수를 그 클래스의 friend functions라 부르고 한 클래스 멤버 목록 내에 <code>friend</code> 지정자와 함께 정의된 클래스를 그 클래스의 friend classes라 부른다.

주의할 점은 미리 정의된 멤버만이 다른 클래스에서 friend로 선언될 수 있다.
<pre><code class="cpp">#include&lt;iostream&gt;
using namespace std;

class FriendClass
{
    int addPoint(MyClass& myClass); //미리 정의한다.
};

class MyClass
{
public:
    MyClass() { myPoint = 10; }
    int getMyPoint() { return myPoint; }
    friend int FriendClass::addPoint(MyClass& myClass); //FriendClass의 addPoint함수에게 MyClass 멤버 접근 권한을 준다.
private:
    int myPoint;
};

int FriendClass::addPoint(MyClass& myClass)
{
    return myClass.myPoint += 10; // MyClass의 private 멤버도 접근 가능하다.
}

int main(int argc, char** argv)
{
    FriendClass friendClass;
    MyClass myClass;

    cout << myClass.getMyPoint() << endl;
    cout << friendClass.addPoint(myClass) << endl;
    return 0;
}</code></pre>
C++11 이후에는 클래스를 friend 선언하는 방식은 아래 두 가지가 있다.
<pre><code class="cpp">//F는 클래스 명
friend class F;
friend F;</code></pre>
첫 방식은 가장 안쪽을 둘러싼 네임스페이스에 F라는 이름의 클래스가 없으면 새로 그 클래스를 소개한다. 두 번째 방법은 클래스가 이미 선언됐을 때 사용할 수 있다. 
<pre><code class="cpp">namespace MyNamespace
{    
    class MyClass
    {
    public:
        MyClass() { myPoint = 10; }
        int getMyPoint() { return myPoint; }
        friend FriendClass; //컴파일 에러
        friend class FriendClass; //정상 작동
    private:
        int myPoint;
    };
}</code></pre>

<h2 class="section-heading">private</h2>
<code>private</code> 지정자는 멤버 함수와 friend 함수나 클래스만 접근할 수 있다. 클래스의 기본 지정자가 <code>private</code> 지정자이다. <code>private</code> 지정자의 범위는 다음 지정자를 만나거나 클래스 정의가 끝날 때까지이다.
<pre><code class="cpp">#include&lt;iostream&gt;
using namespace std;

class MyClass
{
public:
    MyClass() { myPoint = 10; }
    int getMyPoint() { return myPoint; }
private:
    int myPoint; //여기까지만 private
};

int main(int argc, char** argv)
{
	
    MyClass myClass;
    int myClassPoint1 = myClass.getMyPoint(); //멤버 함수를 사용해 접근할 수 있다.
    int myClassPoint2 = myClass.myPoint; //접근할 수 없다.
    return 0;
}</code></pre>

<h2 class="section-heading">protected</h2>
<code>protected</code> 지정자는 멤버 함수와 friend 함수나 클래스 그리고 파생된 클래스에서 접근할 수 있다.<code>protected</code> 지정자의 범위는 다음 지정자를 만나거나 클래스 정의가 끝날 때까지이다.
<pre><code class="cpp">#include&lt;iostream&gt;
using namespace std;

class MyClass
{
public:
    MyClass()
    {
        myPoint = 10;
        isAccessible = false;
    }
    int getMyPoint() { return myPoint; }
    void printThatItIsAccessible() { protectedFunc(); } //멤버 함수는 접근 가능
protected:
    bool isAccessible;
    void protectedFunc()
    {
        if(isAccessible)
            cout << "Can access";
        else
            cout << "Can't access";
        cout << endl;
    } // 여기까지만 protected
private:
    int myPoint;
};

class ChildClass : public MyClass
{
public:
    bool canAccess() { isAccessible = true; } //파생된 클래스의 멤버함수도 접근 가능
    void useProtectedFunc() { protectedFunc(); }
};

int main(int argc, char** argv)
{
	
    MyClass myClass;
    ChildClass childClass;

    myClass.printThatItIsAccessible();
    childClass.canAccess();
    childClass.useProtectedFunc();

    bool protectedAccess = myClass.isAccesible //접근할 수 없다.
    int privateAccess = childClass.myPoint; //접근할 수 없다.
    return 0;
}</code></pre>

<h2 class="section-heading">public</h2>
<code>prublic</code> 지정자는 어떤 함수든 접근할 수 있다. 구조체의 기본 지정자가 <code>public</code> 지정자이다. <code>public</code> 지정자의 범위는 다음 지정자를 만나거나 클래스 정의가 끝날 때까지이다.
<pre><code class="cpp">#include&lt;iostream&gt;
using namespace std;

class MyClass
{
public:
    int myPoint;
    MyClass() { myPoint = 10; }
    int getMyPoint() { return myPoint; } //여기까지만 public
};

class TestClass
{
public:
    int addPoint(MyClass& myClass) { return ++myClass.myPoint; } //별개의 클래스에서도 접근 가능하다.
};

int main(int argc, char** argv)
{
    MyClass myClass;
    TestClass testClass;

    cout << myClass.getMyPoint() << " "; //멤버 함수를 사용해 접근할 수 있다.
    int myClassPoint = myClass.myPoint; //접근 가능하다.
    testClass.addPoint(myClass);
    cout << myClassPoint << " " << myClass.myPoint;

    return 0;
}</code></pre>
<br>
>###### 참고 자료
>###### [위키백과 - 캡슐화](https://ko.wikipedia.org/wiki/%EC%BA%A1%EC%8A%90%ED%99%94){: target="_blank"}
>###### [microsoft docs](https://docs.microsoft.com/en-us/cpp/cpp/member-access-control-cpp?view=msvc-170){: target="_blank"}
>###### [IBM docs](https://www.ibm.com/docs/en/i/7.5?topic=only-friends-c){: target="_blank"}
>###### [프로그래머의 블로그](https://genesis8.tistory.com/98){: target="_blank"}