---
layout: post
title: HackerRank Algorithm - 3
date:   2024-10-16
category: cs
tag:
 - 4|WarmUp
thumbnail: /style/image/HR.png
icon: code
related: 
 - /2024-10-14-HR-Algorithm_01
---

HackerRank Warming Up 초보 난이도에서부터 순서대로 쭈-욱 풀어보기  

* content
{:toc}


##  요약

> Prepare/Algorithm/WarmUp

|문제풀이|평균소요시간|난이도|체감난이도|해결못한문제|
|:---:|:---:|:---:|:---:|:---:|
|7개|약20분|easy|지문이 길어지고 실수가많아짐|3개|

***

##  각 문제별 풀이방식 요약

|순번|문제|시간|풀이방식|다른사람들|비고|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1|Subarray Division|19분|2중for문| | |
|2|Divisible Sum Pairs|8분|2중for문과 &&조건| |조건을 잘 읽자|
|3|Migratory Birds|30분초과|`sort()`|id당 갯수 벡터|예외상황 주의하기|
|4|Day of Programmer|30분초과|if 잔뜩!|동일|쉽지만 긴문제|
|5|Bill Division|12분|누적덧셈과 if|동일||
|6|Sales by Match|검색| |해쉬맵,메모이제이션|배웠다!|
|7|Drawing Book|9분|짝수계산|min함수|마지막페이지 주의!|

***
##  해결못한 문제 

### [Migratory Birds](https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true)

+ 마지막 원소까지 신경쓰기  

`sort()`를 진행하며 비교적 빠르게 함수를 만들어냈지만,
내가 만든 수식에서 예외 적용해야하는 부분을 생각하지 못해 틀린 문제  
생각보다 훨씬 크고 많은 숫자들로 테스트해도 정상 작동해야한다는 것을 다시금 깨달았다  

```cpp
int migratoryBirds(vector<int> arr) {
    // sort로 id순 정렬
    sort(arr.begin(),arr.end());

    int check = 1;  // id당 갯수 카운트
    int comp = 1;   // 이전 최대수와 비교
    int id = 0;     // 최대수를 가진 id > 반환
    
    for(int i =1; i<arr.size(); i++)
    {
        // 원소가 바뀌었다면 해당 id의 카운트가 끝났다는 뜻이고,
        // 직전 최대 갯수와 비교를 진행할 수 있다.
        // 단, 마지막 id인 5는 마지막 원소에 도달했을 때 비교
        if(arr[i] != arr[i-1] || i == arr.size()-1)
        {
            if(check > comp)
            {
                id = arr[i-1];
                comp = check;
            }
            check = 1;
        }
        check++;
    }
    return id;
}
```

***  

### [Day of the Programmer](https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true)

+ 날짜계산은 어렵게 수식쓰지말고 상수값으로 쉽게 계산할 방법을 먼저 찾자

```cpp
string dayOfProgrammer(int year) {
    bool leap = false;
    bool julian = false;
    
    if(year < 1918)
        julian = true;
    if(julian && year % 4 == 0)
        leap = true;
    if(!julian && year % 400 == 0)
        leap = true;
    if(!julian && year % 4 == 0 && year % 100 != 0)
        leap = true;
        
    if(year == 1918){
        return "26.09.1918";
    }
    if(leap){
            return "12.09."+to_string(year);
    }
    else{
            return "13.09."+to_string(year);
    }
}
```

***

### [Sales by Match](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true)

+ 해쉬맵 활용하기 좋은 예시!
+ 메모이제이션 활용 사례도 함께 보기

단순히 하나하나 지워나가는 방식을 쓰는건 비효율적이라는 생각이 들었다.  
이런 문제는 어떤 stl을 사용하나 알고싶어 답부터 검색해봤다.

```cpp
// 맵 활용
int sockMerchant(int n, vector<int> ar) {
    map<int,int> map;
    for(size_t i = 0; i<n; i++){
        if(map.find(ar[i]) != map.end())
        {
            map[ar[i]]++;
        }
        else{
            map.insert(make_pair(ar[i],1));
        }
    }
    
    int answer = 0;
    for(auto iter: map){
        answer += iter.second / 2;  // 소숫점을 버린 값만 계산된다
        cout << iter.second << '\n';
    }

    return answer;
}
```

```cpp
// 메모이제이션
int sockMerchant(int n, vector<int> ar) {
    int temp[101] = {}; // 양말색 101가지
    
    for(size_t i = 0; i< ar.size(); i++){
        temp[ar[i]]++;
    }
    
    int answer = 0;
    for(auto iter : temp){
        answer += iter /2;
    }
    return answer;
}
```

<br>