---
layout: post
title: GitBlog-iconfont 사용하기
date:   2024-02-04
category: gitblog
tag:
  - GitHubPages
  - Iconfont
  - Fontello
thumbnail: /style/image/thumbnails/iconfont.png
icon: web
---

footer에 이력서 링크도 추가하고 싶어 드디어 나도 iconfont를 만져보는 기회를 갖게 되었다

* content
{:toc}

## Icon Font

> [Icon Font(아이콘폰트)란 문자형식이 아닌 아이콘 그래픽형식의 표기(glyph)단위를 가진 폰트를 말한다](https://fonts.google.com/knowledge/glossary/icon_font) [^1]  

영문이면 알파벳, 한글은 글자 단위 또는 숫자나 기호를 하나의 단위로 가지는 것과 같이 icon font는 아이콘 이미지를 글자단위로 표기할 수 있다.  
흔히 사용되는 부호에는 없는 모양이면서, 이모티콘과 달리 색상, 크기 등 커스터마이징이 가능한 벡터파일로 `CSS`에 호환이 되어 활용도가 높다고 한다.  

기존에 이 Pinghsu-jekyll 테마에 사용되는 iconfont는 총 3개였으며 하단 footer를 장식해주고 있었다.  
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/064f5582-3480-4053-aabe-d10c8f7c951b)

`_style/iconfont` 경로에 위치해있었고, ttf파일 외 각종 폰트파일 확장자들과 적용을 위한 `CSS`파일에 @font-face로 테마에 적용을 해주고 있다
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/b43e7a0d-f2fd-421e-9b25-9073579c9f2c)

```css
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1547905446251'); /* IE9 */
  src: url('iconfont.eot?t=1547905446251#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQQAAsAAAAACDgAAAPEAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDfIMoATYCJAMQCwoABCAFhG0HPRsPB1FULrJkPyRJihTwRuABFQAAADhOSrAHgPMwAIgHar/07f69CzC6pJWAoAgUILuOJ4s2wpRshQkacf+31ubEX0fso9rc0qn/2fVZZgdrJinRuFSuIR5pVMZs7ip6pBPuOhJGEfG/x3zsRrrR/7kc311ZAvPbWS5jbR2bxqKjXoDRBAp07I0BF1DOmTSMXXkR0wko1WmEY9XGXpT4JUa9gHBWkUrEn9JJNZFBsSBf0jUJb+QUx6fxF+K1//mwYCr4iXIZo+m24+tVsjQtPzOa3SlkOeQaTI1nAetFhnFEIpwstR3mCn3jXEqV77gtRhQrFpmWn66aGS1woWAvsmLTTuz944U8I7wcTEJ/xrS8jROZrsLJmBkV3MBUCRQjj/f4CzCl3j8LomxVYwuPv3g+9ek7ij3E+hsJe55Qw8QG78gg3/w62Mb6WycFEIp34mMNaCIb231a6oTjZPqufhjruLuL1o+L+Z7WK+BPCfRrKy/ZVI3t63qQlD2qAPuHhYhwcVOCFBAP2Rsla4LAf6REMfaha31/LAG/wE8qoz0Be3fQja0+xLt70AGA/cTg4y8FHz8p/+n/kqSUd7KkZHpwjm6SPuhKF6DwhCr79cHRZQQdLfldz+wT0g3iUhClNIFUwWi1vQ+iOfRkNn7H0X95Vw47UJNkM+rUs8IXCJAqy+ID09MiEZTBgnSL7iYpjpL/gyQrjvdChHP3Zid7Ygk2rHoWWK6Sy5Yk2US3/Odwr5+ivtO7Qpb1WU0j9muqdf+Ble0P/cwmms3/7Pj6ZWZuW7cuR7EV2/zT/aiaOk0sFvm0Rm1M3m+8VEugv/74E2rMr1ZWIgEAAHBLyEgCBKxIHJfAf60GBv9nvSKqTP/o8MJy7pOcP6IUrpUuWXaHn8Nvzf+L/JZpSRUa+pRkkc3TWiWruEBEqWnk34Wo9TOGowGJLUEx50OIinRAplg/ksjjkFNmEvKKLYVSYzZ7l6nDuYRUglFXAIJqjxBVmoJMtTqSyN+Q0+gP8qqDC0rtCXVDlhkMSnAlx5LAKpRPQKkwk1pGEQwiwygd6CWeFPrUOHJbccKkumY2uIkm8jFa2IfSlBAUKGcGbIDZUNcZWJypWBFjshDWzLhGfNmFxirMIEErcahEQFWg7ARQVDAm6mYXgrn3hyHJAV0JryFUWOMQZ1PKB5PGTLRANmVmK8K17GI7JJkiCBSgOMYANoAF6aaPAVZ5JRWqEMbIPTyWGeMoE20rG5tfYTzhEihlrJVCDFlIISd/QhHyQdl9khnoOmfbhAA=') format('woff2'),
  url('iconfont.woff?t=1547905446251') format('woff'),
  url('iconfont.ttf?t=1547905446251') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1547905446251#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-github:before {
  content: "\e7ab";
}

.icon-home:before {
  content: "\e626";
}

.icon-rss:before {
  content: "\e690";
}
```

## Fontello.com

기존 구성엔 사용중인 3개의 icon font만 정보가 나와있는 듯 하여 추가하고 싶은 iconfont를 동일한 출처인 [Fontello](https://fontello.com/) [^2] 에서 내려받았다 
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d7493acd-6ad6-4aeb-95bc-fa11fe2ba350)

프로그래밍을 사랑하며 수익보다 더 좋은 퀄리티로의 발전에 우선순위를 둔 제작팀 덕분에 이 곳의 icon font들은 모두 무료이며 open source라고 한다 [^3].  
원문 멘트를 읽으니 사용하면서 더 기분이 좋아지는 것 같았다ㅎㅎ

> [Why fontello is open source and free](https://github.com/fontello/fontello/wiki/Introduction#why-fontello-is-open-source-and-free)
Fontello is a pet-project, sponsored by RC Design. We do it just because we love programming and doing something interesting.
Please, note, that fontello is non-commercial project. It is intentional choice to have more time for development. We prefer to spend time for reaching highest quality, instead of making money. That's the main reason, when we select priorities for new features.


검색을 통해 사용하고 싶은 아이콘을 여러개 담은 뒤 Download를 하면 `CSS`와 각종 확장자의 폰트파일들, License관련 글이 포함된 `zip`파일을 받을 수 있다  

---

## Apply
`zip`파일에 포함되어있는 `README.txt`파일을 읽어보면 어떻게 적용할 수 있는지 상세히 나와있다  

### 라이센스

```
- If your project is open-source, usually, it will be ok to make LICENSE.txt
  file publicly available in your repository.
```
GitHub Pages로 Repository를 Public으로 해두어 오픈소스인 깃블로그라 LICENSE.txt파일 추가로 충분하다  

### 사용

```
- basic file, <your_font_name>.css - is usually enough, it contains @font-face
  and character code definitions
```
이미 `@font-face`로 `CSS`에 적용될 수 있도록 파일이 구성되어있으므로 파일명만 원하는 이름으로 바꿔주면 된다  
기존에 있던 iconfont로 파일명과 내용중 파일경로, 파일명이 명시된 내용을 바꿔주었다  

```css
@font-face {
  font-family: 'iconfont';
  src: url('iconfont.eot?63301349');
  src: url('iconfont.eot?63301349#iefix') format('embedded-opentype'),
       url('iconfont.woff2?63301349') format('woff2'),
       url('iconfont.woff?63301349') format('woff'),
       url('iconfont.ttf?63301349') format('truetype'),
       url('iconfont.svg?63301349#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?63301349#fontello') format('svg');
  }
}
*/
[class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "iconfont";
  font-style: normal;
  font-weight: normal;
  speak: never;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.icon-home:before { content: '\e800'; } /* '' */
.icon-rss:before { content: '\f09e'; } /* '' */
.icon-github:before { content: '\f113'; } /* '' */
.icon-file-pdf:before { content: '\f1c1'; } /* '' */
```

이제 블로그내에서 `class='iconfont [아이콘명(ex. icon-home)]`을 통해 iconfont를 사용할 수 있다

![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/82c0f4f5-ac63-4bed-95cc-f58f6d6f4bfd)


---

## 생각정리
- 아이콘 하나를 추가하고 싶지만 폰트파일을 전부 바꿔줘야해서 기존 icon font도 다시 받아야 하는 부분이 비효율적이었던 것 같다  

하지만 윈도우에 기본적으로 제공되는 기호나 이모티콘보다 직관적인 아이콘을 어떠한 변형에도 깨지지 않는 글자처럼 활용이 가능한 폰트를 이해할 수 있었던 좋은 기회였다

---

## Reference

[^1]: [Google. Google Fonts. Icon font](https://fonts.google.com/knowledge/glossary/icon_font)
[^2]: [Fontello. Fontello icon-fonts generator](https://fontello.com/)
[^3]: [Fontello. GitHub. Introduction](https://github.com/fontello/fontello/wiki/Introduction#why-fontello-is-open-source-and-free)