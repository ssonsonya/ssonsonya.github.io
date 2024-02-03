---
layout: post
title: GitBlog-깃블로그 만들기
date:   2023-05-02
category: gitblog
thumbnail: /style/image/thumbnails/Gitblog_Setup.png
icon: web
---

* content
{:toc}

## Background

<span style="background-color:#E6E6FA">블로그를 만드는 이유 Best 3 : </span>
1. PPT로 정리한 학원수업내용을 파일형식으로 가지고 다니기 불편함  
  또한 이미 배운내용을 잊어버려 다시 시간쓰지 않도록 내 공간에 기록할 수 있음
2. (내가 그랬듯) 내가 이해한 내용을 공유해 많은 사람들의 공부에 도움이 될 수 있으면 좋을 것 같다
3. 모두에게 공개되는 글이라 더욱 꼼꼼히 보게되어, 오탈자 개선 및 가독성있는 글을 쓰는 스킬을 기르기 위함  

<span style="background-color:#E6E6FA">GitHub Page를 통해 블로그를 운영하는 이유 : </span>
1. 높은 자유도  
  할 수 있는 모든 방법을 동원해 개성에 맞게 블로그를 꾸밀 수 있는 부분이 마음에 든다.
2. 새로운 코드문법에 대한 도전  
  배운적 없는 `CSS` , `HTML` , `Markdown` 를 직접 뜯어보며 배울 수 있다.

---

## What is 깃블로그?

+ [GitHub Page](https://docs.github.com/ko/pages/quickstart)  
  > GitHub Pages는 GitHub를 통해 호스트되고 게시되는 퍼블릭 웹 페이지입니다. GitHub Pages를 사용하여 일부 오픈 소스 프로젝트를 소개하거나, 블로그를 호스트하거나, 이력서를 공유할 수도 있습니다.
  GitHub Pages는 GitHub의 리포지토리에서 HTML, CSS 및 JavaScript 파일을 직접 가져와서 필요에 따라 빌드 프로세스를 통해 파일을 실행하고 웹 사이트를 게시하는 정적 사이트 호스팅 서비스입니다. 
+ [Jekyll](https://jekyllrb-ko.github.io/docs/)
  > Jekyll은 Ruby로 작성된 평범한 Ruby Gem으로 GitHub Pages를 기본적으로 지원하는 정적 사이트 생성기입니다. Jekyll은 Markdown 및 HTML 파일을 가져와 선택한 레이아웃에 따라 완전한 정적 웹 사이트를 만듭니다. Jekyll은 사이트에 동적 콘텐츠를 로드하는 템플릿 언어인 Markdown 및 Liquid를 지원합니다.  

다시말해,  
GitHub를 통해 무료로 웹사이트를 만들 수 있고, 리포지토리에 입력된 `CSS`, `HTML`, `JavaScript`로 빌드를 한다!  
그리고 Jekyll은 블로그의 기본적인 레이아웃 템플릿을 적용해주는 역할을 한다.  
Jekyll을 적용하지 않아도 기본 GitHub Pages의 템플릿을 활용할 수 있지만, 웹 관련 사전지식이 없는 상태에선 이미 만들어진 레이아웃 템플릿을 적용한 뒤 수정작업을 하는 방법이 빠를 것 같아 Jekyll사용을 추천한다.  
[Windows에서 공식적으로 지원되지 않기 때문에](https://docs.github.com/ko/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#about-jekyll) Ruby 2.4.0 이상의 버전 설치가 필요하다.

---

## Setting
### 설치 프로그램 요약

|작업|내용|
|:---:|:-------------------------------:|
|[Ruby](https://rubyinstaller.org/downloads/)|2.4.0 이상 Devkit이 포함된 버전으로 설치해야 한다|
|[Git](https://git-scm.com/downloads)|cmd로 작업해야 하는 부분이 빈번하게 있다|
|[GitHub Desktop](https://desktop.github.com/)|필수는 아니지만 기본적인 Git작업을 하기에 시각적으로 사용하기 편하다|
|[VS Code](https://code.visualstudio.com/)|깃블로그 작업 관리가 편하다|

### Ruby 설치

나중에선 최신버전에 x64버전을 설치해도 문제없다는 걸 알았지만,  
검색을 통해 무작정 따라하기를 하다보니 아래 버전으로 우선 초기 환경을 구성했다

> Ruby+DevKit 2.7.8-1 (x86)  

![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/2ae3db9e-7c62-4536-813b-f94a5bc636fa)

![Ruby](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/82e4fedb-4be1-4f25-920d-6232709bfe53)


### VS Code 설치
Visual Studio만 사용해본 상태라 VS Code가 매우 낯설었지만  
그것도 잠시, ✨신세계를 맛볼 수 있었다  
설치는 어려움이 없었지만 실행해야 하는 .sln 파일이 없어 당황ㅎㅎ 곧 폴더 째로 열기가 가능하다는 것을 알았다
지속적으로 사용하고, `HTML` `CSS` 관련 영상을 여럿 찾아보다 미리 알았다면 좋았을 Extension들을 더 설치해주었다

![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1db705f8-408a-43bb-88c9-d47d7e1ed7e8)

1. Prettier
 : 경고, 오류를 확인해 원인과 해결조언을 해준다

2. Auto Close Tag
 : Close Tag를 자동으로 입력해준다

3. Live Server
 : 깃블로그는 여러 파일들이 복합적으로 실행되어야 해서인지, 기대한 결과는 없지만,
 한 페이지를 미리보기로 열어 주는 확장자

4. Material Icon Theme
  : 필수는 아니지만, 좌측 탐색창에 파일 확장자를 아이콘으로 보여줘서 보기 좋다

---

## Reference

기초작업 시 참고한 곳
1. 공부하는 식빵맘님의 깃블로그 ([https://ansohxxn.github.io/](https://ansohxxn.github.io/))  
  게임물리 이론 공부할 때 많은 도움을 주신 블로그! 깃블로그에 관심을 갖게해준 블로그이기도 하다
2. Jekyll 공식 문서 ([https://jekyllrb-ko.github.io/](https://jekyllrb-ko.github.io/))
3. GitHubPage 공식 문서 ([https://docs.github.com/ko/pages/quickstart](https://docs.github.com/ko/pages/quickstart))

설치파일 다운로드 링크
1. RubyInstaller for Windows ([https://rubyinstaller.org/downloads/archives/](https://rubyinstaller.org/downloads/archives/))
2. 

Jekyll Theme 모음
1. Jekyll 공식 문서 - 테마 ([https://jekyllrb.com/docs/themes/](https://jekyllrb.com/docs/themes/))
2. Jekyll Theme ([http://jekyllthemes.org/](http://jekyllthemes.org/))
  여기서 나는 Pingshu theme이 맘에들어 적용했다
