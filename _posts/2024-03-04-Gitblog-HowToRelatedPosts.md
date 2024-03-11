---
layout: post
title: GitBlog-연관 게시글 설정
date: 2024-03-04
category: gitblog
tag:
 - 5|FrontMatter
 - 5|Liquid
thumbnail: /style/image/thumbnails/.png
icon: web
related: 
 - /2023-05-02-Gitblog-HowToGitBlog
 - /2023-08-09-Gitblog-HowToMarkdown
---

FrontMatter를 활용해 연관 게시글 링크기능을 추가해 보자  

* content
{:toc}

## Front Matter

Front Matter는 `YAML` 언어로, Jekyll에서 페이지 구현에 적용시켜주는  `---`와 `---` 사이 명시되는 변수들로 구성되어있다  
페이지의 Layout, title 등 [Jekyll에서 전역변수로 설정된 Front Matter](https://jekyllrb.com/docs/front-matter/) [^11] 로 페이지 양식을 기본적으로 적용시켜주기도 하며,  
특정 정보를 담고 활용하기 위해 변수를 선언할 수 있다  

```markdown
---
layout: post  # 전역변수 : 페이지 양식
title: GitBlog-연관 게시글 설정 # 전역변수 : 페이지 제목 (브라우저 창 또는 탭에 표시)
date: 2024-03-04  # 전역변수 : 작성일 (Jekyll에선 Permalink에 활용)
category: gitblog # Jekyll-Archive변수 : 카테고리
tag:  # Jekyll-Archive변수 : 태그리스트
 - 5|FrontMatter
 - 5|Liquid
thumbnail: /style/image/thumbnails/.png # 커스텀변수(테마) : 썸네일 이미지 링크 활용
icon: web # 커스텀변수(테마) : 게시글 아이콘 활용
---
```  

Front Matter에 명시된 내용은 `liquid`로 조회가 가능하다  
특정 페이지 내에서 해당 페이지의 Front Matter는 `page.title` `page.date`등 으로 get 할 수 있고,  
블로그에 생성된 모든 페이지들의 Front Matter는 `site.posts` `site.tags`등 으로 조회할 수 있다  

이번엔 이 Front Matter를 활용해 연관게시글 링크를 추가할 수 있는 기능을 넣어보았다  


### Why not Plugin?

검색을 통해 연관 게시글을 조회할 수 있는 [다수의 plugin들](https://github.com/toshimaru/jekyll-tagging-related_posts) [^12] 을 알아보았지만, 특정 내용에 대한 연관된 글을 찾아주는 기능이 아닌 최신 업로드된 글들을 몇개까지 리스트하는 기능이었다  

내가 설정하고자 하는 연관 게시물은 다음과 같은 조건으로 보여지고 싶었다  
- 연관 게시글 직접 설정 가능 (의도하지 않은 게시글이 보여지는 걸 방지)
- 하나 이상 또는 아예 설정하지 않을 수 있음

plugin을 사용하면 이러한 특정 조건이 적용되지 않고 일괄 설정되기 때문에 직접 설정이 가능한 Front Matter를 활용했고, 의도치않은 게시글들의 노출로 개연성을 무너뜨리지 않는 연관 게시물 설정 기능을 추가할 수 있게 되었다  

```markdown
related: 
 - /2023-05-02-Gitblog-HowToGitBlog
 - /2023-08-09-Gitblog-HowToMarkdown
```

---

## Post Layout

`_layout/post.html`에 이미 구현되어있는 Contents navbar 밑에 붙여주었다  
Front Matter에 명시한 게시글의 `/파일명`이 있다면 for문으로 각 게시글마다 전 게시글의 url과 일치하는 경우 링크를 나열하도록 하였다  

<pre><code>&#123;% if page.related.size > 0 %}
    &lt;h1>Related Posts</h1>
    &lt;ul class="relatedlist">
        &#123;% for related in page.related %}
        &#123;% for post in site.posts %}
        &#123;% if related == post.url %}
            &lt;li>&lt;a href="&#123;&#123; post.url }}">&#123;&#123; post.title }}</a></li>
        &#123;% endif %}
        &#123;% endfor %}
        &#123;% endfor %}
    &lt;/ul>
&#123;% endif %}
</code></pre>

<img align="left" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/0f6d50c4-906f-4edc-8010-bf2bf5de5fe5">
<br clear="left"/>

---

## Reference

[^11]: [Jekyll. Jekyll Docs. Front Matter](https://jekyllrb.com/docs/front-matter/)
[^12]: [toshimaru. GitHub. jekyll-tagging-related_posts](https://github.com/toshimaru/jekyll-tagging-related_posts)