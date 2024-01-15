---
layout: post
title: GitBlog-자주 검색하는 마크다운
date:   2023-08-09
category: gitBlog
thumbnail: /style/image/thumbnails/GitBlog_Markdown.png
icon: web
---

* content
{:toc}

## 마크다운 기본

[Markdown Guid - Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)에서 기본적인 문법구조를 참고했다.  
다양한 서식을 사용하고 싶을 땐 HTML을 병행하는 방식이 좋다.
<pre><code>기본적인 텍스트는 입력한 그대로 보여진다.
</code></pre>
기본적인 텍스트는 입력한 그대로 보여진다.  

<pre><code>개행  
띄어쓰기 두번 후 줄바꿈
</code></pre>
개행  
띄어쓰기 두번 후 줄바꿈

### 문장 구분

#### 글머리 단계
<pre><code># H1
## H2
### H3
#### H4
</code></pre>

#### 순차적 나열
<pre><code>1. 첫 번째
2. 두 번째
3. 세 번째
</code></pre>
1. 첫 번째
2. 두 번째
3. 세 번째  

#### 임의적 나열
<pre><code>+ 첫 번째
- 첫 번째
* 첫 번째
</code></pre>
+ 첫 번째
- 첫 번째
* 첫 번째  

#### 수직적 나열
<pre><code>+ 첫 번째
  - 첫 번째의 첫 번째
    + 첫 번째의 첫 번째의 첫 번째
  - 두 번째
    * 두 번째의 첫 번째
</code></pre>
+ 첫 번째
  - 첫 번째의 첫 번째
    + 첫 번째의 첫 번째의 첫 번째
- 두 번째
  * 두 번째의 첫 번째 

#### 가로줄
<pre><code> ---
</code></pre>

---

## 강조

### 글꼴 변환

#### Bold
<pre><code>기본 굵기 **Bold 굵기**
</code></pre>
기본 굵기 **Bold 굵기** - 이 템플릿에 적용된 서식이 기본적으로 Bold체 여서 차이가 없다

#### Italic
<pre><code>기본 서식 *Italic 서식*
</code></pre>
기본 서식 *Italic 서식*

#### 취소선
<pre><code>기본 서식 ~~취소선 서식~~
</code></pre>
기본 서식 ~~취소선 서식~~

<pre><code>~~*취소된 Italic 서식*~~
</code></pre>
~~*취소된 Italic 서식*~~

### 색상 활용

#### 글자색
```html
<span style="color:red"> RED </span>
<span style="color:green"> GREEN </span>
<span style="color:blue"> BLUE </span>
```
<span style="color:red"> RED </span>
<span style="color:green"> GREEN </span>
<span style="color:blue"> BLUE </span>

#### 글자 배경색
```html
<span style="background-color:#ffcccc"> 연빨강 </span>
<span style="background-color:#ffe5cc"> 연주황 </span>
<span style="background-color:#ffffcc"> 연노랑 </span>
<span style="background-color:#e5ffcc"> 연두 </span>
<span style="background-color:#ccffcc"> 연초록 </span>
<span style="background-color:#ccffe5"> 연청록 </span>
<span style="background-color:#ccffff"> 하늘색 </span>
<span style="background-color:#cce5ff"> 연파랑 </span>
<span style="background-color:#ccccff"> 연보라 </span>
```
<span style="background-color:#ffcccc"> 연빨강 </span> 
<span style="background-color:#ffe5cc"> 연주황 </span> 
<span style="background-color:#ffffcc"> 연노랑 </span> 
<span style="background-color:#e5ffcc"> 연두 </span> 
<span style="background-color:#ccffcc"> 연초록 </span> 
<span style="background-color:#ccffe5"> 연청록 </span> 
<span style="background-color:#ccffff"> 하늘색 </span> 
<span style="background-color:#cce5ff"> 연파랑 </span> 
<span style="background-color:#ccccff"> 연보라 </span> 

색상표 참고 사이트: [(https://www.rapidtables.com/web/color/RGB_Color.html)](https://www.rapidtables.com/web/color/RGB_Color.html)

### 코드블럭
````
```cpp
int main() {
printf("Hello World");
return 0;
}
```
````
```cpp
int main() {
printf("Hello World");
return 0;
}
```
명시된 언어의 Syntax 강조기능이 있어 매우 좋지만, 인덴트가 잘못되어있거나 간혹 알 수 없는 오류로 적용이 안되는 사례가 많다.
Syntax강조기능은 없지만 복잡한 구조일 땐 `HTML`의 코드블럭 사용하기.
```html
<pre><code>내용
</code></pre>
```
<pre><code>내용
</code></pre>

## 인용

### 인용문
<pre><code>&gt; 내용

</code></pre>

> 내용

벗어나고자 할 땐 개행을 두번 해줘야 한다.

### 텍스트 링크

<pre><code>[GitBlog-자주 검색하는 마크다운](https://ssonsonya.github.io/2023-08-09-Gitblog-HowToMarkdown#%EC%9D%B8%EC%9A%A9%EB%AC%B8)
</code></pre>
[GitBlog-자주 검색하는 마크다운](urlhttps://ssonsonya.github.io/2023-08-09-Gitblog-HowToMarkdown#%EC%9D%B8%EC%9A%A9%EB%AC%B8)

## 개체 활용

### 이미지 삽입
1. 이미지 파일 복사
2. 깃블로그의 Repository -> Issues -> New Issue 진행
3. description 칸에 이미지 붙여넣기 후 기다리면 이미지파일이 마크다운 형식으로 변환 됨
4. 삽입할 post에 복붙  
<pre><code>![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/6c17296d-fa31-4a5a-8f85-898a2edc5ec9)
</code></pre>
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/6c17296d-fa31-4a5a-8f85-898a2edc5ec9)

### 표 생성
[AnyWayData](https://anywaydata.com/app#)로 통해 복잡한 표를 대신 만들어주는 사이트를 활용할 수 있다.  

```
| 정렬방식 | 내용 |
| --- | ----------- |
| 기본값 | --- |
| 왼쪽 | :--- |
| 오른쪽 | ---: |
| 중앙 | :---: |
```

| 정렬방식 | 내용 |
| --- | ----------- |
| 기본값 | &#45;&#45;&#45; |
| 왼쪽 | &#58;&#45;&#45;&#45; |
| 오른쪽 | &#45;&#45;&#45;&#58; |
| 중앙 | &#58;&#45;&#45;&#45;&#58; |

### Emoji
`window` + `.` 을 통해 입력한 그대로 보여진다  

😊🥰🤔🥹😭💀  
⭐✨🔥  
💖💕  
➡️🎁

## Reference

[Mattcone. Markdown Guide. Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)  
[용씨(2023.02.03). im-shung.log. 마크다운 글 색상/형광펜](https://velog.io/@im-shung/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EA%B8%80-%EC%83%89%EC%83%81%ED%98%95%EA%B4%91%ED%8E%9C)  
[RapidTables. RapidTables. RGB color](https://www.rapidtables.com/web/color/RGB_Color.html)  
[Alan Richardson(2022). AnyWayData. Table Editor and Data Generator](https://anywaydata.com/app.html)