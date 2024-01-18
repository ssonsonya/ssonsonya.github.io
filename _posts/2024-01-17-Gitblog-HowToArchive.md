---
layout: post
title: GitBlog-카테고리&태그 페이지
date:   2024-01-17
category: gitblog
tag:
  - GitHubPages
  - Jekyll
  - Jekyll-archives
thumbnail: /style/image/thumbnails/Gitblog_Jekyll-archives.png
icon: web
---

* content
{:toc}

## Abstract

블로그 열람의 편의성을 위해 `jekyll-archives` 플러그인을 설치해 카테고리와 태그 조회 페이지를 만들었다.  

![1](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/534a4c61-020c-42f9-9c30-89ddf8aaaa53)

> 사용하는 Theme에 구현되어있는 플러그인에 따라 다르지만,
카테고리나 태그로 모아보는 페이지를 관리하고자 할 땐 `jekyll-archives` 라는 플러그인을 설치해야 한다 [^1].  

플러그인 없이 카테고리&태그 관리 페이지를 생성 할 수 있는 방법도있지만 잘 알려진 구조를 적용해보기로 했다 

---

## Setting

상세한 기능과 설명은 `jekyll-archives`의 GitHub [^2] 를 참고했고,  
Jekyll테마 `Minimal Mistake`의 GitHub [^3] 를 참고해 아래 내용을 입력했다.

### Gemfile

깃블로그 디렉토리 내부에 있는 `Gemfile`의 plugin 항목에 jekyll-archives 추가  

``` ruby
  # If you have any plugins, put them here!
  group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.12"
    gem "jekyll-paginate", "~> 1.1"
    gem "jekyll-archives" # 추가 입력!
  end
```  

cmd의 디렉토리를 깃블로그 위치로 `cd` 한 뒤 `bundle install`

> 결과
  ```
  Fetching gem metadata from https://rubygems.org/...........
  Resolving dependencies...
  Fetching jekyll-archives 2.2.1
  Installing jekyll-archives 2.2.1
  Bundle complete! 9 Gemfile dependencies, 38 gems now installed.
  Use `bundle info [gemname]` to see where a bundled gem is installed.
  ```

성공적으로 설치가 되면 `Gemfile.lock`파일에 `jekyll-archives`가 추가되어있는 것을 확인할 수 있다.

### config.yml

`config.yml`파일에 `jekyll-archives` 플러그인을 활성화 시키기

```yml
plugins: 
  - jekyll-paginate
  - jekyll-archives   # 추가
```

```yml
category_archive:
  type: jekyll-archives
  path: /categories/
tag_archive:
  type: jekyll-archives
  path: /tags/

jekyll-archives:
  enabled:                                # 구성할 아카이브 항목 - 연도, 월, 일자로도 구분할 수 있음
    - categories
    - tags
  layouts:                                  # 프론트매터와 연결 (ex. post의 category에 입력한 내용을 archives에 저장 후 
    category: archives            # archives layout으로 구분할 수 있음)
    tag: archives
  permalinks:                         # 링크 구성 - 입력한 카테고리 또는 태그명으로 링크가 자동 생성된다
    category: /categories/:name/
    tag: /tags/:name/
```

여기까지 진행 후 cmd창에 `bundle exec jekyll serve` 입력 시 이전 post들에 프론트매터로 입력한 category와 tag들이 _site에 폴더로 자동 생성된다  
<img align="left" width = "250" title="VSCode-Explorer_site" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/021d549c-59d4-4f39-8aed-c7b5aec5acdf">
<img align="left" width = "250" title="_site_categories" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/5fc6a217-001f-414b-826d-9413fba452a2">
<img align="left" width = "250" title="_site_tags" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/8e0549c5-479d-48d5-93c6-7df96d355eaf">
<br clear="left"/>

---

## layouts

최대한 이해한 내용으로 정리하면 이렇다  
![2](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/0059f7a6-ae6e-4fb9-b5d2-834011471a98)

### archives

### layouts

### 결과
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/4c91187d-977a-4e23-93d9-cb02008a5082)  

## sidebar에 활용


---

## Reference

[^1]: [Jekyll. Docs Deployment.Your first plugin](https://jekyllrb.com/docs/plugins/your-first-plugin/)  
[^2]: [Jekyll. Jekyll-archives. README.md](https://github.com/jekyll/jekyll-archives)  
[^3]: [Michael Rose. Minimal Mistakes. Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#archive-settings)  