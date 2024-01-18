---
layout: post
title: GitBlog-카테고리&테그 페이지
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

블로그 열람의 편의성을 위해 `Jekyll-archives` 플러그인을 설치해 카테고리와 태그 조회 페이지를 만들었다.  

![1](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/be2c6a8d-a815-419f-86e9-d902a9523d04)

> 사용하는 Theme에 구현되어있는 플러그인에 따라 다르지만,
카테고리나 태그로 모아보는 페이지를 관리하고자 할 땐 `Jekyll-archives` 라는 플러그인을 설치해야 한다 [^1].  
(플러그인 없이도 관리페이지를 생성 할 수 있는 방법이 있는것 같지만 조금 더 잘 알려진 구조를 적용해보기로 했다) 

---

## Gemfile

깃블로그 디렉토리 내부에 있는 `Gemfile`의 plugin 항목에 jekyll-archives 입력  

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

성공적으로 설치가 되면 `Gemfile.lock`파일에 jekyll-archives가 추가되어있는 것을 확인할 수 있다.

## config.yml

`config.yml`파일에 jekyll-archives 플러그인을 활성화 시키기

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
  enabled:                        # 구성할 아카이브 항목 - 연도, 월, 일자로도 구분할 수 있음
    - categories
    - tags
  layouts:                        # 프론트매터와 연결 (ex. post의 category에 입력한 내용을 archives에 저장 후 
    category: archives            # categories.html에서 layout: categories로 입력하며 페이지 구성)
    tag: archives
  permalinks:                     # 링크 구성 - 입력한 카테고리 또는 태그명으로 링크가 자동 생성된다
    category: /categories/:name/
    tag: /tags/:name/
```

여기까지 진행 후 cmd창에 `bundle exec jekyll serve` 입력 시 이전 post들에 프론트매터로 입력한 category와 tag들이 _site에 폴더로 자동 생성된다  
<img align="left" title="VSCode-Explorer_site" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/021d549c-59d4-4f39-8aed-c7b5aec5acdf">
<br clear="left"/>

## archives.html



---

## Reference

[^1]: [Jekyll. Docs Deployment.Your first plugin](https://jekyllrb.com/docs/plugins/your-first-plugin/)  
[GitHub. GitHub Docs. GitHub Pages 및 Jekyll 정보](https://docs.github.com/ko/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#plugins)  

[Jekyll. Jekyll-archives. README.md](https://github.com/jekyll/jekyll-archives)  
[Michael Rose. Minimal Mistakes. Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#archive-settings)  