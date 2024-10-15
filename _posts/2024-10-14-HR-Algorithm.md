---
layout: post
title: HackerRank Algorithm - 1
date:   2024-10-14
category: cs
thumbnail: /style/image/thumbnail.png
icon: code
---

HackerRank 초보난이도에서부터 순서대로 쭈-욱 풀어보기  

* content
{:toc}


##  요약

> Prepare/Algorithm/WarmUp

|문제풀이|평균소요시간|난이도|체감난이도|해결못한문제|
|:---:|:---:|:---:|:---:|:---:|
|11개|약32분|easy|대부분 쉽지만 어색함|1개|

***

##  각 문제별 풀이방식 요약

|구분|문제|풀이방식|다른사람들|비고|
|:---:|:---:|:---:|:---:|:---:|
|1|Solve Me First|단순계산|동일|기본예시문제|
|2|Simple Array Sum|for문|입력과 동시에 연산| |
|3|Compare the Triplets|for문 + if조건|동일| |
|4|A Very Big Sum|long자료형|동일|Overflow 주의|
|5|Diagonal Difference|2중for문 + if조건|하나의 for문으로도 가능|인덱스의 특징 활용하기|
|6|Plus Minus|for문 + if조건|동일|출력값의 자료형 주의하기|
|7|Staircase|for문 + if조건 + OR연산|`a[n-i]`에서 #찍기|간단하게 가능하네!|
|8|Mini-Max Sum|2중for문 + if조건|`sort()` 정렬|함수기능 적시에 사용할 줄 알기|
|9|Birthday Cake Candles|`sort()` + for문 + if문|max를 찾는 함수 실행||
|10|Time Conversion|`substr()`<br>`stoi()``to_string()`|string의 인덱스로 조회|string 복습필요!|
|11|Grading Students|for문 + if조건|동일|!해결못함!|


***
##  해결못한 문제 

[Grading Students](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)

문제 이해는 생각보다 빠르게 했지만,
나머지 연산 계산에 생각이 꼬여버린 탓에 풀지 못한 문제.  
하나하나 써내려가며 각 숫자마다 계산을 반복하고서야 이해를 할 수 있었다.   

```cpp
vector<int> gradingStudents(vector<int> grades) {
    vector<int> result(grades.size());
    
    for(int i = 0; i<grades.size(); i++)
    {
        if(grades[i] >= 38)
        {
            int remain = grades[i] % 5;
        
            if(remain >= 3)				// 나머지가 3보다 초과냐 이상이냐 헷갈림
                result[i] = grades[i] + (5 - remain);	// 5-remain 을 생각하지 못함
            else
                result[i] = grades[i];
        }
        else
            result[i] = grades[i];			// 앞서 적용한 else로 생략 가능하다고 착오함
    }
    
    return result;
}
```
<br>