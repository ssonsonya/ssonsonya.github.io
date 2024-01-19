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

![1](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/98f494dc-a1de-4ed3-8e06-a0023b24089a)

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
![2](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1e4e45c9-8b7c-4c6d-9701-dc5984d962d0)

### layouts

모든 카테고리들을 모아놓은 페이지를 `categories.html`에, 태그는 `tags.html`에 정의한 포멧으로 만든다.  
`Minimal-mistake`에 적용된 양식을 참고했다 [^4]  
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/3802a40a-b088-45fe-aefc-94127038ecd9)

<pre>
<code>---
layout: default
---
&#123;% assign categories_max = 0 %&#125;
&#123;% for category in site.categories %&#125;
&#123;% if category[1].size > categories_max %&#125;
&#123;% assign categories_max = category[1].size %&#125;
&#123;% endif %&#125;
&#123;% endfor %&#125;

&lt;div class="main-content archive-page clearfix">
    &lt;div class="category-item">
        &lt;div class="post-lists">
            &lt;div class="post-lists-body">
                &lt;ul class="taxonomy_index">
                    &#123;% for category in site.categories %&#125;
                    &lt;a href="#&#123;&#123; category[0] | slugify &#125;&#125;">
                        &lt;div class="category-title">&#123;&#123; category[0] &#125;&#125;
                        &lt;/div>&lt;/a>
                    &#123;% endfor %&#125;
                &lt;/ul>
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div>
</code>
</pre>

### archives

하나의 카테고리 또는 태그와 연관된 post들을 모아놓은 조회 페이지 양식을 `archives.html`에 정의해준다  
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/eca0f2db-f349-4a66-9a13-18d54bc22bf5)

<pre>
<code>---
layout: default
---

&lt;div class="main-content archive-page clearfix">
    &lt;div class="category-item">
        &lt;div class="post-lists">
            &lt;div class="post-lists-body">
                &lt;div class="category-title">&#123;&#123; page.title &#125;&#125;</div>
                &#123;% for post in site.posts %&#125;
                &#123;% capture this_category %&#125;&#123;&#123; post.category &#125;&#125;&#123;% endcapture %&#125;
                &#123;% if this_category == page.title %&#125;
                &lt;div class="post-list-item">
                    &lt;div class="post-list-item-container">
                        &lt;div class="item-label_noThumb">
                            &lt;div class="item-title">&lt;a href="&#123;&#123; post.url &#125;&#125;">&#123;&#123; post.title &#125;&#125;&lt;/a>&lt;/div>
                            &lt;div class="item-meta clearfix">
                                &lt;div class="item-meta-date"> &#123;&#123; post.date | date: "%b %d, %Y" &#125;&#125; &lt;/div>
                            &lt;/div>
                        &lt;/div>
                    &lt;/div>
                &lt;/div>
                &#123;% endif %&#125;
                &#123;% endfor %&#125;
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div>
</code>
</pre>

## sidebar에 활용

<img align="left" width = "300" title="VSCode-Explorer_site" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/7f7bb127-49d7-484b-b86d-d472ec805838">
<br clear="left"/>

<pre>
<code>&lt;h3 class="meta-sublist">Levelling Up</h3>
  &lt;div class="meta-item">
    &lt;div class="taxonomy__index">
      &#123;% for category in site.categories %&#125;
      &lt;li>
        &lt;a href="categories/&#123;&#123; category[0] &#125;&#125;">
        &lt;strong>&#123;&#123; category[0] &#125;&#125;</strong></a>
      &lt;/li>
      &#123;% endfor %&#125;
    &lt;/div>
  &lt;/div>
</code>
</pre>

---

## Reference

[^1]: [Jekyll. Docs Deployment.Your first plugin](https://jekyllrb.com/docs/plugins/your-first-plugin/)  
[^2]: [Jekyll. Jekyll-archives. README.md](https://github.com/jekyll/jekyll-archives)  
[^3]: [Michael Rose. Minimal Mistakes. Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#archive-settings)  
[^4]: [Michael Rose. GitHub. Minimal-mistakes/_layouts/categories](https://github.com/mmistakes/minimal-mistakes/blob/master/_layouts/categories.html)