---
layout: post
title: HackerRank Algorithm - 2
date:   2024-10-15
category: cs
tag:
 - 4|WarmUp
thumbnail: /style/image/HR.png
icon: code
related: 
 - /2024-10-14-HR-Algorithm_03
---

HackerRank Warming Up 초보 난이도에서부터 순서대로 쭈-욱 풀어보기  

* content
{:toc}


##  요약

> Prepare/Algorithm/WarmUp

|문제풀이|평균소요시간|난이도|체감난이도|해결못한문제|
|:---:|:---:|:---:|:---:|:---:|
|4개|약21분|easy|익숙해짐|1개|

***

##  각 문제별 풀이방식 요약

|순번|문제|시간|풀이방식|다른사람들|비고|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1|Apple and Orange|15분|for문 + &&조건 |동일|범위조건 사용불가|
|2|Number Line Jumps|24분|while문 + if조건|if조건안에서 while문|timeout오류 주의|
|3|Between Two Sets|30분 초과|각배열 2중for문|`유클리드호제법`|문제해석 주의|
|4|Breaking the Records|14분|for문 + if조건|동일|결과 출력순서 주의|


***
##  해결못한 문제 

[Between Two Sets](https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true)

+ 계산이 필요한 수 범위 정확히 알기  
    > These numbers are referred to as being between the two arrays.  
    
    두 배열의 원소까지 포함을 뜻한다 (a배열의 마지막 원소값 이상인 줄 알았다)  
+ 조건만족과 진입지점 flag로 구분하면 반복문의 탈출지점 설정을 못하는 실수를 예방할 수 있다  

두 배열의 범위 내 a배열의 배수와 b배열의 약수가 되는 숫자의 갯수 구하기  
배수와 약수 얘기인줄 모르고 또 `%`나머지 연산자를 보며 나락에 빠져버린 생각들..  

```cpp
int getTotalX(vector<int> a, vector<int> b) 
{
    int count = 0;
    
    // 범위는 a배열의 최소원소값 이상 b배열의 최소원소 이하
    for(int i = a[0] ; i<= b[0]; i++) 
    {
        // 두번째 for문 진입조건 flag 
        bool isTrue = true;
        
        // b배열 원소의 약수가 되는 수 구하고 만족 시 탈출
        for(int elm : b )
        {
            if(elm % i != 0)
            {
               isTrue = false;
               break;
            }  
        }
        
        // b배열 원소의 약수조건 만족된 수만 진입
        if(isTrue)
        {
            // 최총 카운트 조건 flag
            bool isCount = true;
            
            // a배열의 배수 조건 만족 시 탈출
            for(int elm : a)
            {
                if(i % elm != 0)
                {
                    isCount = false;
                    break;
                }
            }

            // 최종 카운트 쳌
            if(isCount)
                count++;
        }
    }
    
    return count;
}
```
<br>