---
layout: post
title: namespace
subtitle: C++ namespace를 공부한 내용
categories: [Cpp]
---

네임스페이스(namespace)는 내부 식별자에 범위를 제공하는 선언적 영역이다. 중복되는 객체 명이 있어도 <code>namespace</code>가 다르면 다른 객체로 취급해 오류가 나지 않는다.

<h2 class="section-heading">namespace 선언</h2>
<code>namespace</code>는 아래와 같이 선언할 수 있다.
<pre>
<code class="cpp">//namespaceExample1.h  
namespace Example1
{
    void foo();
    int bar();
}
</code>
</pre>
각 식별자에 대해 정규화된 이름을 사용하여 접근할 수 있다.
<pre>
<code class="cpp">//main.cpp  
#include "namespaceExample1.h"

int main(int argc, char** argv)
{
    Example1::foo(); //Example1의 foo()
    return 0;
}
</code>
</pre>
같은 <code>namespace</code> 내에 식별자는 정규화된 이름 없이 접근할 수 있지만 <code>namespace</code>가 선언된 헤더와 구현 파일이 따로 있으면 구현 파일에는 정규화된 이름을 사용해야 한다.(헤더와 구현파일은 나누어진 경우가 많다.)
<pre>
<code class="cpp">//namespaceExample2.h  
namespace Example2
{
    void foo();
    int bar();
}
</code>
<code class="cpp">//namespaceExample2.cpp  
#include "namespaceExample2.h"  

void Example2::foo()
{
    bar(); //Example2::이 필요하지 않다.
}

int Example2::bar()
{
    return 0;
}
</code>
</pre>
<h2 class="section-heading">using 지시문</h2>
<code>using</code> 지시문을 사용하면 정규화된 이름없이 <code>namespace</code>의 모든 식별자를 사용할 수 있다. <code>namespace</code> 내에 여러 식별자를 자주 사용하는 경우 <code>using</code>지시문을 사용하고 <code>namespace</code>내에 식별자 중 한두 개만 자주 사용한다면 일부 식별자만 가져오는 <code>using</code>선언을 사용한다.  
<pre>
<code class="cpp">//namespaceExample1.h  
namespace Example1
{
    void foo();
    int bar();
}
</code>
<code class="cpp">//namespaceExample2.h  
namespace Example2
{
    void foo();
    void function();
    int bar();
}
</code>
<code class="cpp">//main.cpp  
#include "namespaceExample1.h"
#include "namespaceExample2.h"  

using namespace Example1; //Example1의 모든 식별자를 가져오는 using 선언
using Example2::function; //function()만 가져오는 using 선언

int main(int argc, char** argv)
{
    foo(); //Example1의 foo()
    function(); // Example2의 function()
    return 0;
}
</code>
</pre>
아래처럼 <code>main()</code>을 만들면 <code>foo()</code>가 <code>Example1</code> 소속인지 <code>Exampl2</code>인지 모르기 때문에 에러가 난다.
<pre>
<code class="cpp">//main.cpp  
#include "namespaceExample1.h"
#include "namespaceExample2.h"  

using namespace Example1;
using Example2::foo; 

int main(int argc, char** argv)
{
    foo(); // 에러 발생
    return 0;
}
</code>
</pre>
앞서 언급한 헤더와 구현이 따로 있는 경우에는 <code>using</code>지시문을 사용해도 구현 파일에서 정규화된 이름을 사용해주어야 한다.
<pre>
<code class="cpp">//namespaceExample2.h  
namespace Example2
{
    void foo();
    int bar();
}
</code>
<code class="cpp">//namespaceExample2.cpp  
#include "namespaceExample2.h"  

using namespace Example2; //using 지시문이 있어도 정규화된 표현 필요

void Example2::foo()
{
    bar();
}

int Example2::bar()
{
    return 0;
}
</code>
</pre>
<div style="background-color:#F9CDCE"><h5>주의 사항</h5>헤더 내에 <code>using</code>지시문을 사용하면 해당 헤더를 포함하는 모든 파일이 선언된 <code>namespace</code>의 모든 식별자를 가져와 충돌이 발생할 수 있다. 따라서 헤더 파일에는 정규화된 이름을 사용하는 것이 좋다. <code>namespace</code>의 이름이 너무 길다면 별칭을 이용하여 축약할 수 있다.</div>

<h2 class="section-heading">namespace 별칭</h2>
<code>namespace</code>의 이름이 너무 길어 <code>using</code>지시문을 사용해서 안되는 헤더 파일에 작성하는게 어려울 때 별칭을 만들어 사용할 수 있다.
<pre>
<code class="cpp">namespace veryVeryVeryLongName
{
    voind foo();
    int bar();
}
namespace vvvln = veryVeryVeryLongName; //별칭 생성

int main(int argc, char** argv)
{
    vvvln::foo();
    return 0;
}</code>
</pre>

<h2 class="section-heading">익명(Anonymous/Unnamed) namespace</h2>
이름 없는 <code>namespace</code>는 <code>static</code>키워드를 사용한 것과 같다. 또, 같은 파일이 아닌 변환 단위 외부에서는 이 <code>namespace</code>에 접근할 수 없게된다.
<pre>
<code class="cpp">namespace //Anonymous namespace
{
    voind foo();
    int bar();
}
</code>
</pre>
실제로 <code>namespace</code>에 이름이 없는 것이 아니라 컴파일러가 임의로 지어주기 때문에 어떤 이름이 붙을 지 모른다.
<br>
>###### 참고 자료
>###### [모두의 코드](https://modoocode.com/136){: target="_blank"}
>###### [microsoft docs](https://docs.microsoft.com/ko-kr/cpp/cpp/namespaces-cpp?view=msvc-170){: target="_blank"}