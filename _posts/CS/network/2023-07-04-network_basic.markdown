---
layout: post
title: 네트워크 기초
subtitle: 네트워크 기초 내용
categories: [네트워크]
---

<aside>
💡 보완이 필요한 페이지

</aside>

네트워크란 노드(컴퓨터, 라우터, 스위치 등 장비) 간 데이터 링크로 서로 연결되어 있으며 리소스를 공유하는 집합을 의미한다.

## 네트워크 처리량과 지연 시간

### 트래픽

특정 시점에 링크 내에 ‘흐르는’ 데이터의 양을 말한다.

트래픽 = (개별 용량 * 개수) * 사용자 수 

### 처리량

링크 내에서 성공적으로 전달된 데이터의 양, 얼마만큼의 트래픽을 처리했는지를 나타낸다.

### 대역폭

주어진 시간 동안 네트워크 연결을 통해 흐를 수 있는 최대 비트 수

### 지연시간

요청이 처리되는 시간, 두 장치 사이를 왕복하는 데 걸린 시간을 말한다.

## 네트워크 토폴로지와 병목 현상

### 네트워크 토폴리지

노드와 링크가 어떻게 배치되어 있는지에 대한 방식이자 연결 형태, 병목 현상을 찾을 때 중요하다.

**병목현상**

하나의 구성 요소로 인해 전체 시스템이나 용량이 제한받는 현상

**버스 토폴리지**

중앙 회선 하나에 여러 노드가 공유하는 네트워크, 설치 비용이 적고 신뢰성이 우수하다.

**스타 토폴리지**

중앙에 허브를 두고 해당 허브에 다른 노드를 연결한 형태이다. 중앙 허브가 고장이 나면 모든 노드가 장애를 겪지만 허브가 아닌 다른 노드가 고장이 나면 해당 노드만 관리하면 돼서 좋다.

**링형 토폴리지**

노드의 연결이 링형태인 토폴리지, 노드 수가 증가하여도 네트워크상의 손실이 없고 충돌이 발생하는 가능성이 작지만, 회선에 장애가 발생하면 전체 네트워크에 영향을 받는다.

**메시 토폴리지**

모든 단말 장치가 1 대 1 관계를 맺고 있는 토폴리지 장애에 강하지만 구축 비용이 많이 든다.

**트리 토폴리지**

노드 추가 삭제하기가 쉬우며 특정 노드에 트래픽이 몰리면 하위 노드에도 영향을 준다.

<p align="center"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Topology.gif" alt="네트워크 토폴리지" /></p>
<span class="caption text-muted">[네트워크 토폴리지](https://commons.wikimedia.org/wiki/File:Topology.gif){:target="_blank"} by अरविंद धरेप्पा बगले / [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/){:target="_blank"}</span>

**하이브리드**

두 토폴리지의 장점을 사용하기 위해 만들어진 토폴리지

**(성형 - 버스형)**

허브끼리 버스형 연결을 해둔다.

**(성형 - 버스형)**

허브를 링형으로 연결해 둔다.

<p align="center"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/হাইব্রিড_টপোলজি.png" alt="하이브리드 토폴리지" />
<span class="caption text-muted">[하이브리드 토폴리지](https://commons.wikimedia.org/wiki/File:%E0%A6%B9%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%A1_%E0%A6%9F%E0%A6%AA%E0%A7%8B%E0%A6%B2%E0%A6%9C%E0%A6%BF.png){:target="_blank"}  by ব্যবহারকারী:Nafiur14 / [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en){:target="_blank"}</span></p>

## 네트워크 분류

크게 LAN, MAN, WAN으로 나뉘어진다.

### LAN

근거리 통신망을 의미하며 같은 건물이나 캠퍼스 같은 좁은 공간에서 운영된다.

<p align="center"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Red_LAN.gif" alt="LAN" /></p>
<span class="caption text-muted">[LAN](https://commons.wikimedia.org/wiki/File:Red_LAN.gif){:target="_blank"} by Enh lepree / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0/deed.en){:target="_blank"}</span>

### MAN

대도시 지역 네트워크를 나타내며 도시 같은 넓은 지역에서 운영된다.

<p align="center"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/1/15/3shabake.jpg" alt="LAN" /></p>
<span class="caption text-muted">[MAN](https://commons.wikimedia.org/wiki/File:3shabake.jpg){:target="_blank"} by زهرا برزنونی / [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/deed.en){:target="_blank"}</span>

### WAN

광역 네트워크를 의미하며 국가 또는 대륙 같은 더 넓은 지역에서 운영된다.

## 네트워크 프로토콜 표준화

다른 장치들끼리 데이터를 주고받기 위해 설정된 공통된 인터페이스를 말한다. IEEE, IETF란 단체에서 정의한다.

>###### 참고 자료

>###### 면접을 위한 CS 전공지식 노트 by 주홍철