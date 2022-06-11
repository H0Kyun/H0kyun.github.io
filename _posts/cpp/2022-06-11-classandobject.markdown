---
layout: post
title: 클래스와 객체
subtitle: 클래스와 객체에 대해 알아보자.
categories: [Cpp]
---

C++을 비롯한 객체 지향 프로그래밍 언어(Object oriented programming language)를 활용한 객체 지향 프로그래밍에는 클래스(Class)와 객체(Object)의 개념을 이해하고 있는 것이 중요하다.
> C++은 구조상 다양한 방식의 프로그래밍이 가능해 멀티 패러다임 언어라고 보는 것이 더 적절하다. C++의 구조는 [여기서 확인](https://h0kyun.github.io/cpp/2022/03/31/cppbase.html){: target="_blank"}

<h2 class="section-heading">클래스</h2>
클래스는 특정 객체를 만들기 위한 설계도이다. 객체의 속성을 표현하기 위한 멤버변수, 객체의 행위를 나타내는 메소드와 객체를 생성하는 생성자로 구성된다. C++에서는 아래 예와 같이 클래스를 생성한다.
<pre><code class="cpp">#include&lt;iostream&gt;

using namespace std;

class Chicken //클래스 정의
{
private:
	//멤버변수
    int legs;
    int wings;
    int size;
    float weight;
public:
    Chicken() //기본 생성자
    {
    	legs = 2;
    	wings = 2;
        size = 10;
        weight = float(size * 2);
    }

    float getWeight() //메소드
    {
    	return Chicken::weight;
    }

    void eatFeed(int calorie)
    {
        weight += calorie / 1000.0f;
    }
};

int main(int argc, char** argv)
{
    Chicken chicken;
    chicken.eatFeed(2000);

    cout << chicken.getWeight() << endl;
    return 0;
}</code></pre>
여기서 <code>private:</code>와 <code>public:</code>는 접근 지정자로 외부에서 접근 가능 여부를 지시해준다. 접근 지시자 덕분에 객체 지향 프로그래밍의 특징 중 하나인 캡슐화가 가능해진다. 접근 지정자 관련 내용은 [여기서 확인](https://h0kyun.github.io/cpp/2022/06/11/accesscontrol.html){: target="_blank"}

<h2 class="section-heading">객체</h2>
객체는 실제 존재하는 사물이나 개념, 논리를 추상화하여 속성과 기능들로 만든 소프트웨어 집합이다. 클래스를 통해 객체를 생성하고 생성된 객체가 메모리에 적재되면 그 객체를 인스턴스(Instance)라 부른다. 인스턴스도 객체에 속하고 클래스의 멤버변수와 메소드는 해당 인스턴스의 인스턴스 변수와 인스턴스 메소드가 된다. 앞선 예에서 <code>main</code>함수 내에 <code>Chicken chicken;</code>이 인스턴스 생성에 해당한다.
<pre><code calss="cpp">int main(int argc, char** argv)
{
    Chicken chicken; //인스턴스 생성
    chicken.eatFeed(2000);

    cout << chicken.getWeight() << endl;
    return 0;
}</code></pre>
<br>
>###### 참고 자료
>###### [모두의 코드](https://modoocode.com/172){: target="_blank"}
>###### [위키백과 - 객체 설명글](https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99)){: target="_blank"}
>###### [위키백과 - 클래스 설명글](https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9E%98%EC%8A%A4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)){: target="_blank"}
>###### [해시넷 - 객체 설명글](http://wiki.hash.kr/index.php/%EA%B0%9D%EC%B2%B4){: target="_blank"}
>###### [해시넷 - 클래스 설명글](http://wiki.hash.kr/index.php/%ED%81%B4%EB%9E%98%EC%8A%A4){: target="_blank"}