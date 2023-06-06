---
layout: post
title: 프로그래밍 패러다임
subtitle: 프로그래밍 패러다임 변화를 알아보자
categories: [ProgrammingLanguage]
---

프로그래밍 패러다임은 필요에 의해 모놀리식(Monolithic), 절차지향(Procedural-oriented), 객체지향(Object-oriented)순으로 변화해 왔다. 각 패러다임에 대해 알아보자.

<h2 class="section-heading">모놀리식 프로그래밍</h2>
모놀리식 프로그래밍은 데이터(Data)와 명령(Instruction)을 섞어 하나의 블록 형식으로 코드를 작성한다. 함수가 없었기 때문에 문장 간 이동은 <code>goto</code>문을 이용했고 안전하지 않은 전역(global) 데이터만을 사용했다. 데이터 타입이라는 개념도 없고 흐름 제어를 위한 명령어(<code>if</code>, <code>switch</code>, <code>for</code>, <code>while</code> 등)도 따로 없었다.

하나의 블록 형식으로 작성하기 때문에 코드를 작성할 수 있는 사람은 단 한 명밖에 없고 제작 기간도 매우 길었다. 또 코드에 에러가 있으면 전체 프로그램을 사용하지 못했다. 개발해야 하는 프로그램의 크기는 커지고 팀 단위 프로그래머가 필요해지면서 프로그래밍 패러다임은 절차지향으로 변화했다.

<h2 class="section-heading">절차지향 프로그래밍</h2>
절차지향 프로그래밍에서 함수라는 개념이 나왔다. 프로그램의 기능을 더 작은 기능으로 나누고 함수로 모듈화하여 재사용할 수 있게 했고 모듈 별로 작업을 나누어 여럿이 코드를 작성할 수 있게 되었다. 또 전역 데이터 외 모듈에서 개별적으로 쓰이는 지역(local) 데이터라는 개념도 등장했다. 또 타입이라는 개념이 등장했고 여러 데이터를 묶은 구조체라는 개념도 등장했다.
<pre><code class="c">//C로 작성한 절차지향 예
#include &lt;stdio.h&gt;

struct Dog
{
    int age;
    int weight;
};

void feed(Dog* dog)
{
    dog.weight += 10;
}

int main()
{
    struct Dog dog;
    dog.age = 10;
    dog.weight = 10;

    printf("먹기 전 나이: %d 몸무게: %d\n", dog.age, dog.weight);
    feed(&dog);
    printf("먹은 후 나이: %d 몸무게: %d", dog.age, dog.weight);

    return 0;
}</code></pre>
위 예에서 <code>feed</code> 함수는 구조체 <code>Dog</code>에 대한 함수다. 당시 프로그래머들은 이런 특정 데이터를 위한 함수를 데이터와 함께 다룰 방법을 필요로 했고 객체지향 프로그래밍이라는 새로운 패러다임이 탄생하게 된다.

<h2 class="section-heading">객체지향 프로그래밍</h2>
객체지향 프로그래밍에서 특정 데이터를 위한 함수를 데이터와 함께 다룰 방법으로 나온 것이 클래스(class)였다. 클래스를 통해 데이터와 함수를 함께 다룰 수 있게 됐고 덕분에 함수 단위로 재사용하던 것을 클래스 단위(주요 기능)로 재사용할 수 있게 됐다. 그 밖에도 외부 함수에서 데이터에 접근할 수 없게 데이터를 은닉할 수 있고 추상화, 상속, 오버로딩 등 다양한 개념이 등장했다.
<pre><code class="cpp">//C++로 작성한 객체지향 예
#include &lt;iostream&gt;

class Dog
{
private:
    int age;
    int weight;
public:
    Dog()
    {
        age = 10;
        weight = 10;
    }

    void feed()
    {
        dog.weight += 10;
    }

    int getAge() { return age; }
    int getWeight() { return weight; }
};

int main()
{
    Dog dog;

    std::cout << "먹기 전 나이: " << dog.getAge() << " 몸무게: " << dog.getWeight() << std::endl;
    dog.feed();
    std::cout << "먹은 후 나이: " << dog.getAge() << " 몸무게: " << dog.getWeight();

    return 0;
}</code></pre>
앞서 언급한 모놀리식, 절차지향, 객체지향 모두 명령형 프로그래밍(imperative programming)이다. 명령형 프로그래밍은 **어떻게** 동작해야 하는지를 명시하는 프로그래밍 패러다임이다. 따라서 프로젝트 규모가 커질수록 복잡성이 늘어나고 이를 해결하기 위해 더 추상적인 표현이 필요했다. 이를 해결해 준 것이 선언형 프로그래밍(declarative programming)이다.

## 선언형 프로그래밍

선언형 프로그래밍(declarative programming)은 어떤 방식으로 작동하게 명령하는 것이 아니라 **무엇을** 해야 하는지 기술하는 방식을 말한다. HTML을 생각하면 쉽다. HTML은 어떻게 동작하라는 것을 명시하지 않고 무엇을 보여줘야 하는지만 명시되어 있다. 선언형 프로그래밍에는 대표적으로 함수형 프로그래밍이 있다.

## 함수형 프로그래밍

함수형 프로그래밍(functional programming)은 상태 변경을 최소화하고 자료 처리를 수학적 함수의 계산으로 취급한다. 자료 처리를 수학적 함수로 하니 입력값에 따른 결과값이 명확하고 외부 요인에 의해 변경될 일이 없다. 

---

<br>
>###### 참고 자료
>###### [BSC BTech Smart Class](http://www.btechsmartclass.com/c_plus_plus/theory_tutorials/cplusplus_programming_paradigms.html){: target="_blank"}
>###### [Learn C++ Programming](https://www.udemy.com/course/cpp-deep-dive/){: target="_blank"}
>###### [TechTarget](https://www.techtarget.com/searchapparchitecture/tip/The-basics-of-working-with-declarative-programming-languages){: target="_blank"}
>###### [위키백과: 선언형 프로그래밍](https://ko.wikipedia.org/wiki/%EC%84%A0%EC%96%B8%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D){: target="_blank"}
>###### [위키백과: 함수형 프로그래밍](https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D){: target="_blank"}
