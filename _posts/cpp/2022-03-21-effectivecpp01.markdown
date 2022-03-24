---
layout: post
title: C++ 시작하기
subtitle: C++ 공부를 시작할 때 도움되는 내용들
categories: [Cpp]
---

&nbsp;C++을 처음 시작할 때 도움이 되는 근본적인 내용을 정리해두었습니다.
<h2 class="section-heading">C++를 언어들의 연합체로 바라보기</h2>
&nbsp;C++를 이해하기 쉬운 방법으로 C++를 단일 언어가 아닌 상관관계가 있는 여러 언어의 연합체(federation)로 보고 나서 각 언어에 관한 규칙을 이해하는 방법이 있습니다.


&nbsp;C++는 네 가지 하위언어(sublanguage)를 제공하고 있습니다.
- C&nbsp;:&nbsp;&nbsp;&nbsp;C++는 C를 기본으로 하고 있고 C++만의 것들을 제외하고 C만 뽑아 사용해도 됩니다.

- 객체 지향 개념의 C++&nbsp;:&nbsp;&nbsp;&nbsp;'클래스를 쓰는 C'에 관한 것이 모두 해당합니다. 객체 지향 설계의 규칙들 대부분이 그대로 들어맞는다고 보면 됩니다.

- 템플릿 C++&nbsp;:&nbsp;&nbsp;&nbsp;템플릿이 C++에 끼치는 영향이 강해 괜찮다고 하는 프로그래밍 규칙에서는 템플릿 구문 하나쯤은 흔히 볼 수 있는 것을 넘어서 템플릿 메타프로그래밍(template metaprogramming: TMP)이라는 완전히 새로운 프로그래밍 패러다임이 파생되기까지 했습니다.

- STL&nbsp;:&nbsp;&nbsp;&nbsp;특별한 템플릿 라이브러리입니다. STL은 컨테이너(container), 반복자(iterator), 알고리즘(algorithm)과 함수 객체(function object)가 얽혀 돌아가는 것을 규약으로 삼고 있으나 템플릿과 라이브러리는 다른 아이디어를 중심으로 만들어질 수 있습니다. 또 STL은 독특한 사용규약이 있어 그 규약을 따라 프로그래밍하면 됩니다.

&nbsp;C++는 하위 언어의 연합체이기에 C++를 사용한 효과적인 프로그래밍 규칙은 C++의 어떤 부분을 사용하느냐에 따라 달라집니다.

<h2 class="section-heading">#define 보다 const, enum, inline을 먼저 생각하기</h2>
&nbsp;상수를 사용에 #define을 사용하면 선행처리자가 기호식을 밀고 상수로 변경합니다. 그 결과 에러 발생 시 에러 메시지에 상수만 표기되어 에러 해결이 고란해집니다.  

&nbsp;위 같은 상황을 방지하기 위해 #define 대신 const를 사용하면 언어 차원에서 지원하는 상수이기에 컴파일 에러도 기호식으로 나오고 const 상수가 여러 번 쓰여도 #define 상수와 다르게 사본은 하나만 생기므로 메모리 관리 면에서도 이득입니다.
<script src="https://gist.github.com/H0Kyun/1adef11a9a47e2c75f113eeedf3e8b38.js"></script>  

&nbsp;#define 지시자의 또 다른 오용 사례로 매크로 함수를 말할 수 있습니다. 매크로 본문에 들어 있는 인자마다 괄호를 씌워 준다고 해도 아래 예와 같은 문제가 발생할 수 있습니다.
<script src="https://gist.github.com/H0Kyun/34fd7257d070bf34bfc3e8bb78c18af0.js"></script>

&nbsp;이런 문제를 피하면서 기존 매크로의 효율을 그대로 유지하는 방법으로 인라인 함수에 대한 템플릿을 준비하는 것이 있습니다. 아래 함수는 템플릿이기에 동일 계열 함수군(family of unctions)을 만들어 냅니다. 함수 본문에 괄호를 남발할 필요가 없으며 인지를 여러 번 평가할지 모른다는 걱정도 없어집니다. 또한 callWithMax는 진짜 함수이기 때문에 유효범위 및 접근 규칙을 그대로 따라가 임의의 클래스 안에서만 쓸 수 있는 인라인 함수에 관한 이야기가 나오더라도 이상하지 않습니다. 
<script src="https://gist.github.com/H0Kyun/55c422eff1ffdafb9567a382ed7a0bb2.js"></script>

&nbsp;항상 #define을 쓰기 전에 const, enum, inline을 먼저 생각하여 #define을 사용하는 습관을 줄일 수 있도록 합시다.

<br>
>###### 자료 출처  
>###### Effective C++ - 스콧 마이어슨