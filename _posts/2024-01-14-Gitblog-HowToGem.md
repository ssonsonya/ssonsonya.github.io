---
layout: post
title: GitBlog-Jekyll 업그레이드 적용
date:   2024-01-14
category: gitblog
tag:
- 5|Ruby
- 5|Gemfile
thumbnail: /style/image/thumbnails/jekyll.png
icon: web
---

* content
{:toc}

## Background

새 PC를 장만하고 기존 작업환경을 새로운 PC에 구축하다보니 여기저기 프로그램들의 버전호환이 필요하단 걸 알게되었다.  
이 깃블로그도 최신버전을 적용하는 과정에 그 동안 생소했던 Ruby사용법과 Gem들에 대해 좀 더 이해할 수 있었다.  

+ <span style="background-color:#E6E6FA">업데이트 된 Jekyll버전(4.3.3) 적용하기</span>  
+ <span style="background-color:#E6E6FA">Gemfile을 통해 기존 깃블로그에 적용된 gem 설치하기</span>  

---

## Setting

깃블로그 환경설치 과정은 이전 포스트 참고!  
> [깃블로그 만들기](2023-05-02-Gitblog-HowToGitBlog)  

|기존|현재|비고|
|:---:|:---:|:---:|
|Ruby 2.7.8|Ruby 3.1.4|오늘자 기준 [Stable Release](https://www.ruby-lang.org/en/downloads/) 된 버전들 중 가장 낮은 버전 선택|
|Bundler 2.1.4|Bundler 2.5.5| gem install bundler를 통해 최신버전으로 업데이트 가능|
|jekyll 3.8.5|jekyll 4.3.3|[3.x to 4.x](https://jekyllrb.com/docs/upgrading/3-to-4/) 개선사항 확인!|

*버전확인 cmd : 
`ruby -v`
`bundler -v`
`jekyll -v`

GitHub의 기존 깃블로그 Repository를 현재 PC에 Clone 한 뒤 평소처럼 cmd창에 `bundle exec jekyll serve`를 했더니 오류 발생!

---

## Error

1. could not find jekyll-3.8.5
입력
```
bundle exec jekyll serve
```
결과
```
Could not find jekyll-3.8.5, minima-2.5.0, jekyll-feed-0.11.0, tzinfo-data-1.2023.3,
addressable-2.6.0, em-websocket-0.5.1, i18n-0.9.5, jekyll-sass-converter-1.5.2, jekyll-watch-2.1.2,
kramdown-1.17.0, liquid-4.0.1, mercenary-0.3.6, rouge-3.3.0, jekyll-seo-tag-2.5.0, public_suffix-3.0.3,
http_parser.rb-0.6.0, concurrent-ruby-1.1.4, sass-3.7.3, listen-3.1.5, sass-listen-4.0.0,
rb-fsevent-0.10.3, rb-inotify-0.10.0, ruby_dep-1.5.0, ffi-1.10.0 in locally installed gems
Run `bundle install` to install missing gems.
```

2. Dependency Error: Yikes!
입력
```
bundle exec jekyll serve
```
결과
```
  Dependency Error: Yikes! It looks like you don't have jekyll-paginate or one of its dependencies
  installed. In order to use Jekyll as currently configured, you'll need to install this gem.
  If you've run Jekyll with `bundle exec`, ensure that you have included the jekyll-paginate gem in your
  Gemfile as well. The full error message from Ruby is: 'cannot load such file -- jekyll-paginate'
  If you run into trouble, you can find helpful resources at https://jekyllrb.com/help/!
                    ------------------------------------------------
      Jekyll 4.3.3   Please append `--trace` to the `serve` command
                     for any additional information or backtrace.
                    ------------------------------------------------
[Ruby경로]Ruby31/lib/ruby/gems/3.1.0/gems/jekyll-4.3.3/lib/jekyll/external.rb:70:
in `rescue in block in require_with_graceful_fail':
jekyll-paginate (Jekyll::Errors::MissingDependencyException)
```

3. Action Build Warning
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ee1859c3-f743-4883-ab3d-3264f842978f)
> Git Commit Push 후 Build 과정에서 발생하는 경고문
```
Warning: the running version of Bundler (2.1.4) is older than the version that created the lockfile (2.5.5). We suggest you to upgrade to the version that created the lockfile by running `gem install bundler:2.5.5`.
```

---

## ✨Solution
### Gemfile 설정

현재 내 깃블로그에 적용되는 Gem들을 Gemfile을 통해 확인할 수 있다.  
<img align="left" src="https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d3e81928-a7ea-4c5b-9597-122a0facbb96">

　→ 요기 Gemfile의 내용에 따라   
`bundle install` 시 명시된 gem들을 설치해 Gemfile.lock이 업데이트 된다!  

*기존과 신규 Gemfile 내용 비교  

+ <span style="background-color:#E6E6FA">깃블로그에 적용할 jekyll버전 상이</span>  
    그에 따른 minima 등등 오류메세지에 나오는 gem들도 상이한 버전으로 작업이 불가하다

+ <span style="background-color:#E6E6FA">내 깃블로그에 필요한 `jekyll-paginate` 누락</span>  
    신규 버전에선 다른 작업으로 대체된것 같지만 이 템플릿의 모든 구조를 따라 바꾸기엔 너무 시간이 오래 걸릴 것 같으니 누락된 gem을 추가해주기로 했다

<details>
<summary> <u>기존 jekyll 3.8.5 Gemfile</u></summary>

<pre>
<code>
source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.8.5"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?


gem "jekyll-paginate", "~> 1.1"
</code>
</pre>
</details>
<br>
<details>
<summary> <u>신규 설치된 jekyll 4.3.3 Gemfile</u></summary>

<pre>
<code>
source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.3.3"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
</code>
</pre>
</details>  
최종 적용된 Gemfile
<pre>
<code>
source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.3.3"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "jekyll-paginate", "~> 1.1"
</code>
</pre>

이후 깃블로그 디렉토리에서 다음 cmd를 입력해주면 Gemfile들에 명시된 필요한 gem들을 알아서 설치해준다
```
bundle install
```

### 로컬버전으로 Set
기존 Gemfile에 적용된 jekyll등의 버전으로 설정 필요한 gem들을 install하는 방식도 있다
(나는 어떤 이유에서인지 성공하지 못했지만 좀 더 살펴보면 활용하기 좋을 것 같다)

> [JekyllTalk](https://talk.jekyllrb.com/t/successfully-installed-jekyll-4-2-0-however-still-it-searches-for-jekyll-3-8-5/6226)에 나와 같은 오류에대한 문의글과 답변을 참고해 시도해 보았다 
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/2259a475-cf26-4a3a-8b9c-0d45bc11487a)

*채택된 답변 내용
+ 전역 jekyll을 통해 gem install 하는 방식을 지양하는 편
+ Gemfile에 Jekyll버전을 명시해 수정 후 bundler를 통해 install
+ <span style="background-color:#E6E6FA">기존의 로컬 Gemfile구성환경으로 설정하기</span>

cmd의 디렉토리를 깃블로그위치로 cd해 주고 아래 명령어 입력
```
bundle config set --local path vendor/bundle
```
```
bundle install
```

*추가로 GitHub Page가 보안관련으로 Jekyll을 3.9로 업그레이드 했다하여 3.8.5 사용을 피하라는 얘기도 있다

### default gem 변경

```
Warning: the running version of Bundler (2.1.4) is older than the version that created the lockfile (2.5.5). We suggest you to upgrade to the version that created the lockfile by running `gem install bundler:2.5.5`.
```
로컬환경의 bundler 버전을 2.5.5로 업데이트 해보았으나 여전히 해결되지 않았다.  
*예상으론 GitHub Pages에서 커밋푸쉬된 내용을 적용할 때 실행하는 Bundler의 버전이 2.1.4가 아닌가 생각이 든다.*  
그래도 로컬환경에서의 버전차는 최소화시키고자 아래 방법을 적용했다.

1. 로컬 Bundler버전과 Gemfile의 Bundler버전 확인
  + 로컬 버전 : git bash로 확인 가능
  ```bash
  [루비경로]/Ruby31-x64/lib/ruby/gems/3.1.0/specifications/default
  $ gem list bundler
  bundler (2.5.5, default: 2.3.26)
  ```
  현재 2.5.5.와 2.3.26버전 두개가 있는 상태이고 default가 2.3.26으로 설정되어있는 상태  
  + Gemfile의 버전 : 보통 Gemfile.lock의 마지막 줄에 명시되어있다
  ```ruby
  BUNDLED WITH
   2.1.4
  ```
  *깃블로그는 2.1.4버전으로 build가 되어있는 상태  

2. 로컬 기존 Bundler uninstall 
  ```bash
  $ gem bundler uninstall
  ```

3. 또는 특정 버전만 삭제
  + gem파일의 설치 디렉토리 확인하기  
    ```bash
    $ gem environment
    RubyGems Environment:
      -RUBYGEMS VERSION: 3.3.26
      -RUBY VERSION: 3.1.4 (2023-03-30 patchlevel 223) [x64-mingw-ucrt]
      -INSTALLATION DIRECTORY: C:/Ruby31-x64/lib/ruby/gems/3.1.0
      -USER INSTALLATION DIRECTORY: C:/Users/hyons/.gem/ruby/3.1.0
    ```  
  + gem파일들의 디폴트 값이 설정된 파일로 디렉토리 변경  
    ```bash
    $ cd [루비경로]/Ruby31-x64/lib/ruby/gems/3.1.0/specifications/default
    ```  
  + 특정 버전 remove  
    ```bash
    $ rm bundler-2.3.26.gemspec
    ```  
default 버전으로 설정된 2.3.26은 uninstall 또는 삭제가 불가하다는 문구가 나온다  
`rm`으론 해결이 되지 않지만 uninstall 시 bundler -v를 하면 조회가 되지 않으면서 제거가 가능하다

4. 최신 버전 defualt로 install 
  ```bash
  $ gem install --default -v2.5.5 bundler
  Successfully installed bundler-2.5.5 as a default gem
  Done installing documentation for bundler after 0 seconds
  ```

5. 깃블로그 다시 Build하기
  cmd 터미널 경로를 깃블로그 디렉토리로 `cd`
  ```cmd
  bundle exec jekyll build
  ``` 

---

## 생각 정리
1. 작업환경이 바뀔 때마다 사전 Setting을 하나하나 해주기 보단 가급적 Gemfile에 필요한 gem들의 버전을 명시해주는게 좋을 것 같다.
2. 깃블로그를 처음 생성할 때만 Ruby를 다뤘기 때문에 기억이 안나는 부분을 다시 공부해야 했다.  
    그래도 이전에 정리한 내용을 다시 보며 금방 기억해낼 수 있었다(역시 블로그 쓰길 잘했다)  
3. 폴더에 줄곧 함께하고 있었던 Gemfile과 Gemfile.lock의 정체를 이 기회에 알 수 있었다.  
4. bundle install을 통해 일괄적으로 적용한 gem들을 구체적으로 뜯어보지 않았는데 이번 기회에 구성을 알게되었다.  


---

## Reference
[Ruby Download](https://www.ruby-lang.org/en/downloads/)  
[Jekyll. JekyllDocs. Deployment](https://jekyllrb.com/docs/upgrading/3-to-4/)  
[MichaelCurrin(Jul.2021). JekyllTalk. Successfully installed jekyll-4.2.0, however still it searches for Jekyll-3.8.5](https://talk.jekyllrb.com/t/successfully-installed-jekyll-4-2-0-however-still-it-searches-for-jekyll-3-8-5/6226)

