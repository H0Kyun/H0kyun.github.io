---
layout: post
title: 프로그램 생성과 실행 과정
subtitle: C++ 프로그램을 만들고 실행하는 과정을 간단히 알아보자
categories: [Cpp]
---

C++ 코드를 프로그램으로 변환하기 위해서는 코드 작성(Editing), 컴파일(Compile), 링킹(Linking) 단계를 거쳐야 한다. 코드 작성은 문자 그대로 C++ 코드를 작성하는 것이다.

<h2 class="section-heading">컴파일</h2>
컴파일 단계는 전처리(Preprocessing), 컴파일(Compile), 어셈블(Assemble) 단계로 세분화할 수 있다.
##### 1. 전처리
전처리 단계는 문자를 해석하고 전처리기를 통해 전처리 지시자의 지시에 따라 코드를 수정하여 전처리기 토큰을 생성한다.
##### 2. 컴파일
컴파일 단계는 고수준 언어를 저수준 언어인 어셈블리 언어로 변환한다.
##### 3. 어셈블
어셈블 단계는 어셈블리어로된 파일을 기계어로 구성된 오브젝트 파일로 변환해준다.

사실 이 세 과정은 8단계로 처리된다. 자세한 내용은 [여기](https://modoocode.com/319#page-heading-1){: target="_blank"}를 참조

<h2 class="section-heading">링킹</h2>
링킹은 오브젝트 파일들과 외부 라이브러리를 모아서 운영체제에 맞는 실행파일을 만드는 단계다. 링킹 단계에서 기계어 내 명령어들의 위치가 정해진다.

컴파일 단계는 컴파일러가 수행하고 링킹 단계는 링커가 수행한다. 그리고 코딩, 컴파일러, 링커를 모두 제공하는 개발 환경이 통합 개발 환경(IDE, Integrated Development Environment)이라 한다.

<h2 class="section-heading">프로그램의 실행</h2>
생성된 실행 파일은 OS가 메인 메모리에 적재한다. 이렇게 적재되는 과정을 로딩이라 부른다. 로딩된 실행 파일 내 명령어를 CPU가 실행하면 프로그램이 실행된다.

<br>
>###### 참고 자료
>###### [모두의 코드](https://modoocode.com/321){: target="_blank"}
>###### [SSIN_0](https://ssinyoung.tistory.com/2){: target="_blank"}
>###### [Information Security](https://leeeeye321.tistory.com/211){: target="_blank"}