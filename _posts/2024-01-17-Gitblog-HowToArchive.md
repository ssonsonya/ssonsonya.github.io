---
layout: post
title: GitBlog-카테고리&태그 페이지
date:   2024-01-17
category: gitblog
tag:
  - 5|Jekyll-archives
thumbnail: /style/image/thumbnails/Gitblog_Jekyll-archives.png
icon: web
---

* content
{:toc}

## Abstract

블로그 열람의 편의성을 위해 `jekyll-archives` 플러그인을 설치해 카테고리와 태그 조회 페이지를 만들었다.  

![1](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/0fda2d18-aeca-4a08-bbfd-791f5487f872)

> 사용하는 Theme에 구현되어있는 플러그인에 따라 다르지만,
Post의 `FrontMatter`에 입력한 카테고리나 태그들을 관리하고자 할 땐 `jekyll-archives` 라는 플러그인을 활용할 수 있다 [^1].  

단, 아카이브 페이지의 자동생성은 `Jekyll` 블로그에서 가능하지만 GitHub Pages에선 지원되지 않아 <span style="background-color:#ccccff">매뉴얼로 각 페이지의 md파일을 생성해줘야 한다.</span>
플러그인 없이 카테고리&태그 관리 페이지를 생성 할 수 있는 방법도 있지만 [^2] <span style="background-color:#ccccff">구조적인 부분에 우선 익숙해지고자 플러그인을 활용했다.</span>

---

## Setting

상세한 기능과 설명은 `jekyll-archives`의 GitHub [^3] 를 참고했고,  
Jekyll테마 `Minimal Mistake`의 GitHub [^4] 를 참고해 아래 내용을 입력했다.

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
  layout: archive                    # 카테고리&태그 페이지 레이아웃 
  permalinks:                         # 링크 구성 - 입력한 카테고리 또는 태그명으로 링크구조가 자동 생성된다
    category: /category/:name/
    tag: /tag/:name/
```

여기까지 진행 후 cmd창에 `bundle exec jekyll serve` 입력 시 이전 post들에 프론트매터로 입력한 category와 tag들이 _site에 폴더로 자동 생성된다  
<img align="left" width = "250" title="VSCode-Explorer_site" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/f98f34d5-280f-410a-b7e2-a7f2976862fa">
<img align="left" width = "250" title="_site_categories" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/e83f74ce-93df-4548-b418-3c229377a25f">
<img align="left" width = "250" title="_site_tags" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/5142df91-31ad-4721-8b84-27cfecf6e17c">
<br clear="left"/>

---

## layouts

최대한 이해한 내용으로 정리하면 이렇다  
![2](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/62f8d934-7b7e-48d2-9866-66e416a71be0)  
정의한 명칭들 `categories` `tags` `archive` `category` `tag` 에 주의하며 <span style="background-color:#ccccff">Config와 통일된 이름으로 파일구조를 만들어야 제대로 작동한다</span>

### archive.html

하나의 카테고리 또는 태그와 연관된 post들을 모아놓은 조회 페이지 양식을 `archive.html`에 정의해준다  
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/eca0f2db-f349-4a66-9a13-18d54bc22bf5)

<pre>
<code html>---
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

### category1.md

<img align="left" width = "250" title="VSCode-Explorer_site" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/af578888-d97f-4ff2-b718-55eb734a7d13">
<img align="left" width = "250" title="_site_categories" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/be2a4797-0011-450e-8238-1dff75ab3e4a">
<br clear="left"/>

`Jekyll`블로그에선 마크다운 파일 없이도 자동으로 생성된 index.html에 archive레이아웃이 적용되어 생성된다.  
<span style="background-color:#ffffcc">*- localhost로 페이지를 랜더링 하면 추가작업 없이 페이지가 생성되는 모습을 볼 수 있다*</span>  
하지만 GitHub Pages에선 이런 기능이 지원되지 않기 때문에 매뉴얼로 만들어줘야 한다.  
앞으로의 포스트에 입력할 카테고리와 태그들이 커밋과 동시에 자동으로 마크다운 파일을 생성해주는 Action 기능이 있는 것 같지만 우선 Archive구조에 집중해보기로 했다

마크다운 파일명은 `_site`에 자동생성된 각 카테고리, 태그들의 이름과 일치해야 하고
내용은 아래와 같이 입력 후 별도 적용해 줄 내용이 없는 이상 비워주면 된다
```
---
layout: archive
title: gitblog
---
```

### Collections

모든 카테고리들을 모아놓은 페이지를 `categories.html`에, 태그는 `tags.html`에 정의한 포멧으로 만든다.  
`Minimal-mistake`에 적용된 양식을 참고했다 [^5]  
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
      &#123;% for i in (1..categories_max) %&#125;
      &#123;% for category in site.categories %&#125;
      &#123;% if category[1].size == i %&#125;
        &lt;div class="category-title">
        &lt;a href="https://ssonsonya.github.io/category/&#123;&#123; category[0] &#125;&#125;">
        &#123;&#123; category[0] &#125;&#125; _&lt;span class="taxonomy_count">&#123;&#123; i &#125;&#125;&lt;/span>
        &lt;/a>
        &lt;/div>
      &#123;% endif %&#125;
      &#123;% endfor %&#125;
      &#123;% endfor %&#125;
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
        &lt;a href="https://ssonsonya.github.io/category/&#123;&#123; category[0] &#125;&#125;">
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
[^2]: [Kannan Suresh(2020.08.09). Aneejian. Automated Jekyll archives for Github pages](https://aneejian.com/automated-jekyll-archives-github-pages/)
[^3]: [Jekyll. Jekyll-archives. README.md](https://github.com/jekyll/jekyll-archives)  
[^4]: [Michael Rose. Minimal Mistakes. Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#archive-settings)  
[^5]: [Michael Rose. GitHub. Minimal-mistakes/_layouts/categories](https://github.com/mmistakes/minimal-mistakes/blob/master/_layouts/categories.html)