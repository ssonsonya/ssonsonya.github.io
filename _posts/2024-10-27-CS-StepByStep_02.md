---
layout: post
title: 배열 Array
date:   2024-10-27
category: cs
tag:
 - 4|BaaarkingDog
 - 4|자료구조
 - 4|배열
 - 4|vector
thumbnail: /style/image/thumbnail.png
icon: code
related: 

---

[바킹독의 실전 알고리즘](https://blog.encrypted.gg/927)  바킹독님의 강의내용과 여러 좋은 자료들을 참고하며 CS 기본지식 하나하나 공부하기

* content
{:toc}

- 코테와 면접 대비
- 기본 이론은 확실히 이해하고 꼬리를 무는 궁금점 지속적으로 추가해나가면서 해결하기  
- 이후에 기억이 안나면 다시와서 보기 편하게 정리하기  

## 개요

메모리상 다수의 데이터를 연속하게 배치한 선형 자료구조 입니다.  
- 원소의 확인/변경이 O(1)에 가능
- Cache hit rate이 높음

***

## Vector

크기를 자유자재로 늘이거나 줄일 수 있는 배열

> [Microsoft Learn - vector class](https://learn.microsoft.com/ko-kr/cpp/standard-library/vector-class?view=msvc-170#members)  

- 마지막 원소의 확인/추가/삭제 O(1)에 가능  
- 임의 원소 삽입/삭제 시 O(N) 필요  
- 배열의 시작과 끝에서의 삽입/삭제 시 Deque가 더 빠름  
- 배열의 모든 위치에서 삽입/삭제 시 List가 더 빠름

***

## 응용문제풀이

|구분|백준|프로그래머스|LeetCode|HackerRank|
|:---:|:---:|:---:|:---:|:---:|
|1|[알파벳개수](https://www.acmicpc.net/problem/10808)|||[Arrays - DS](https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true)|
|2|[두수의 합](https://www.acmicpc.net/problem/3273)|||[2D Array - DS](https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true)|

***
