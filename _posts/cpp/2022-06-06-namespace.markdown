---
layout: post
title: namespace
subtitle: C++ namespace를 공부한 내용
categories: [Cpp]
---

네임스페이스(namespace)는 내부 식별자에 범위를 제공하는 선언적 영역이다. 중복되는 객체 명이 있어도 namespace가 다르면 다른 객체로 취급해 오류가 나지 않는다.

<h2 class="section-heading">namespace 선언</h2>
namespace는 아래와 같이 선언할 수 있다.
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
같은 namespace 내에 식별자는 정규화된 이름 없이 접근할 수 있지만 namespace가 선언된 헤더와 구현 파일이 따로 있으면 구현 파일에는 정규화된 이름을 사용해야 한다.(헤더와 구현파일은 나누어진 경우가 많다.)
<pre>
<code class="cpp">//namespaceExample2.h  
namespace Example2
{
    void foo();
    int bar();
}
</code>
<code class="cpp">//namespaceExample2.cpp  
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
<br>
>###### 참고 자료 출처
>###### [모두의 코드](https://modoocode.com/136){: target="_blank"}
>###### [microsoft docs](https://docs.microsoft.com/ko-kr/cpp/cpp/namespaces-cpp?view=msvc-170){: target="_blank"}