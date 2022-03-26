---
layout: post
title: C++의 법을 따르자
subtitle: Effective C++ 1장 내용 정리
categories: [Cpp]
---

<h2 class="section-heading">C++를 언어들의 연합체로 바라보기</h2>
C++를 단일 언어가 아닌 상관관계가 있는 여러 언어의 연합체(federation)로 보고 나서 각 언어에 관한 규칙을 이해하면 더 쉽게 이해할 수 있다.


C++에서 제공하는 네 가지 하위언어(sublanguage)
- C&nbsp;:&nbsp;&nbsp;&nbsp;C++는 C를 기본으로 하고 있고 C++만의 것들을 제외하고 C만 뽑아 사용해도 된다.

- 객체 지향 개념의 C++&nbsp;:&nbsp;&nbsp;&nbsp;'클래스를 쓰는 C'에 관한 것이 모두 해당하고 객체 지향 설계의 규칙들 대부분이 그대로 들어맞는다고 보면 된다.

- 템플릿 C++&nbsp;:&nbsp;&nbsp;&nbsp;템플릿이 C++에 끼치는 영향이 강해 템플릿 메타프로그래밍(template metaprogramming: TMP)이라는 완전히 새로운 프로그래밍 패러다임이 파생되기까지 했다.

- STL&nbsp;:&nbsp;&nbsp;&nbsp;특별한 템플릿 라이브러리이다. STL은 독특한 사용규약이 있어 그 규약을 따라 프로그래밍하면 된다.

C++는 하위 언어의 연합체이기에 C++를 사용한 효과적인 프로그래밍 규칙은 C++의 어떤 부분을 사용하느냐에 따라 달라진다.

<h2 class="section-heading">#define 사용 자제하기</h2>
상수에 <code>#define</code>을 사용하면 선행처리자가 기호식을 밀고 상수로 변경하여 에러 발생 시 에러 메시지에 상수만 표기되어 에러 해결이 힘들다.

<code>#define</code> 대신 <code>const</code>를 사용하면 언어 차원에서 지원하는 상수이기에 컴파일 에러도 기호식으로 나오게 된다.
<script src="https://gist.github.com/H0Kyun/1adef11a9a47e2c75f113eeedf3e8b38.js"></script>  

<code>#define</code>지시자로 자주 사용하는 매크로 함수도 문제가 생긴다. 아래 예는 괄호 처리도 잘 해줬지만 <code>a</code>값의 증가량이 달라진다.
<script src="https://gist.github.com/H0Kyun/34fd7257d070bf34bfc3e8bb78c18af0.js"></script>

이런 문제를 피하면서 기존 매크로의 효율을 그대로 유지하는 방법으로 인라인 함수 템플릿을 준비하는 것이 있다.
<script src="https://gist.github.com/H0Kyun/55c422eff1ffdafb9567a382ed7a0bb2.js"></script>

인라인 함수 템플릿은 아래의 장점들을 가진다.
1. 함수는 템플릿이기에 동일 계열 함수군(family of unctions)을 만들어 낸다.
1. 함수 본문에 괄호를 남발할 필요가 없다.
1. 인자를 여러 번 평가할지 모른다는 걱정이 없다.

<br>
>###### 자료 출처  
>###### Effective C++ - 스콧 마이어슨