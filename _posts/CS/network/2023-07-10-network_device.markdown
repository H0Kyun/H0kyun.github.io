---
layout: post
title: 네트워크 기기
subtitle: 각 계층 별로 사용되는 대표 네트워크 기기를 알아보자
categories: [네트워크]
---

# 1. 네트워크 기기의 처리 범위

OSI 7계층(TCP/IP 4계층)의 계층 별로 네트워크 기기의 처리 범위를 나눌 수 있다. 상위 계층 기기는 하위 계층을 처리할 수 있지만 그 역은 불가능합니다. 

# 2. 물리(네트워크 액세스) 계층을 처리하는 기기

대표적으로 NIC, 리피터, AP가 있다.

## NIC(Network Interface Card)

흔히 LAN카드라 부르는 네트워크 인터페이스 카드는 네트워크와 빠른 속도로 데이터 송수신을 위해 컴퓨터 내에 설치하는 장치이다.

<p align="center"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ethernet_NIC_100Mbit_PCI.jpg" alt="NIC" /></p>
<span class="caption text-muted">[NIC](https://commons.wikimedia.org/wiki/File:Ethernet_NIC_100Mbit_PCI.jpg){:target="_blank"} by afrnk99 / [CC BY-SA](https://creativecommons.org/licenses/by-sa/2.0/deed.en){:target="_blank"}</span>

비트의 프레임화, 에러 검출, 매체접근제어 프로토콜의 구현 등의 기능을 가진다. 비트의 프레임화 기능 때문에 2계층 장비로 생각하는 사람도 많다. 일반적으로 1 계층, 2 계층 둘다 포함한다고 분류되거나 1계층 장비로 분류된다.

## 중계기(Repeater)

중계기는 신호를 받아 더 높은 수준에 더 높은 힘으로 증폭해준다. 덕분에 신호는 더 먼 거리를 이동할 수 있게 된다. 

## AP(Access Point)

WAP(Wireless Access Point)라고도 불리며, 유선 LAN을 무선 LAN으로 변환해주는 장치이다. 공유기와 같아 보이지만 차이점이 있다. 공유기는 하나의 IP를 가상의 사설 IP 여러 개로 변환하는 장치이고 AP는 유선 LAN을 무선으로 변환해주는 장치이다.

# 3. 데이터링크(네트워크 액세스) 계층을 처리하는 기기

대표적으로 브리지와 L2 스위치가 있다.

## 브리지(Bridge)

두 개의 LAN을 상호 접속할 수 있도록 하는 통신망 연결 장치로 포트와 포트 사이 다리 역할을 한다. MAC 주소를 MAC 주소 테이블로 관리한다. 하나의 통신망을 구축하는데 사용한다.

## L2 스위치

연결된 장치로부터 패킷이 왔을 때 패킷 전송을 담당한다. MAC 주소를 MAC 주소 테이블로 관리한다. MAC 주소가 없으면 모든 포트에 패킷을 전송한다. MAC 주소를 일정 시간이 지나면 삭제하게 할 수 있다.

<p align="center"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Коммутатор_Арлан-3424GE_компании_Полигон.jpg" alt="L2 Switch" /></p>
<span class="caption text-muted">[L2 스위치](https://commons.wikimedia.org/wiki/File:%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D1%82%D0%B0%D1%82%D0%BE%D1%80_%D0%90%D1%80%D0%BB%D0%B0%D0%BD-3424GE_%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8_%D0%9F%D0%BE%D0%BB%D0%B8%D0%B3%D0%BE%D0%BD.jpg){:target="_blank"} by choodo / [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/deed.en){:target="_blank"}</span>


# 4. 네트워크(인터넷) 계층을 처리하는 기기

대표적으로 라우터와 L3 스위치가 있다.

## 라우터(Router)

라우터는 패킷 경로를 최적화하여 최소 경로로 패킷을 포워딩하는 장치이다. 또 여러 장치가 동일한 네트워크 연결을 사용하도록 하는 기능을 가지고 있다. 이 기능 때문에 게이트웨이로 많이 사용된다.

## L3 스위치

L2 스위치에 라우팅 기능을 추가한 스위치이다. 하드웨어 기반 라우터라 생각해도 되지만 라우터와는 차이가 존재한다.

## 라우터 vs L3 스위치

둘다 라우팅 기능을 가지고 있어 같아 보이지만 라우터와 L3 스위치는 크게 3가지 차이를 가진다.

### 1. 주요 기능

라우터는 라우팅과 포워딩이 주요 기능이고 스위치는 데이터 교환이 주요 기능이다.

### 2. 주요 적용 환경

라우터는 라우팅과 포워딩을 주요 기능으로 복잡한 네트워크의 연결을 해결하는 것이 목적이다. 따라서 동일한 LAN 사이 라우팅 뿐 아니라 다른 프로토콜을 사용하는 LAN과 WAN처럼 다른 네트워크 그룹 간 라우팅 기능을 가진다. 스위치는 동일 네트워크 그룹 내에 라우팅 기능을 한다.

### 3. 성능

라우터는 소프트웨어 기반 라우팅이라 느리지만 강력한 성능을 보유하고 있다. 스위치는 하드웨어 기반 라우팅을 수행해 빠르지만 라우터에 비해 성능이 약하다.

# 5. 전송 계층을 처리하는 기기

대표적으로 L4 스위치가 있다. 

## L4 스위치

L4 스위치는 로드밸런싱 장비다. 외부에서 들어온 요청의 IP나 TCP/UDP 포트 정보를 참조해 패킷을 확인하고 해당 패킷을 분석해 서비스 종류 별로 처리한다.

# 6. 응용 계층을 처리하는 기기

대표적으로 L7 스위치가 있다. 해당 스위치가 L5, L6 스위치의 기능을 포함하고 있다.

## L7 스위치

L7 스위치는 서버의 부하를 분산하는 로드밸런서이다. URL, 서버, 캐시, 쿠키 기반으로 트래픽을 분산한다. 또 바이러스나 불필요한 외부 데이터를 거르는 필터링 기능도 보유하고 있다. 응용프로그램 수준의 모니터링도 가능하다.

추가로 정기적으로 서버에 부하가 안 갈 만큼 요청을 보내 헬스체크를 하고 헬스체크 결과 서버에 장애가 발생했다 판단하면 분산 대상에서 제외한다. 

### L4 스위치 vs L7 스위치

L4 스위치의 서비스 종류 별 처리를 극복하기 위해 L7 스위치는 페이로드에 신경을 쓴다.

L7 스위치는 데이터 분석을 통해 보안 기능도 제공하고 HTTP 헤더 값에 따른 부하 분산이 가능해졌다.


<br>
>###### 자료 출처
>###### 면접을 위한 CS 전공지식 노트
>###### [L4 스위치 vs L7 스위치](https://kchanguk.tistory.com/181){:target="_blank"} by ****개발 노트 / [CC BY-ND](https://creativecommons.org/licenses/by-nd/4.0/deed.ko){:target="_blank"}
>###### [레이어 3 스위치와 라우터](https://www.fibermall.com/ko/blog/layer-3-switch-router.htm){:target="_blank"} by fibermall