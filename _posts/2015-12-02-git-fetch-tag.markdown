---
layout: post
title:  "git fetch tag 获取远程tag"
date:  2015-12-02 21:52:00 +0800
categories: git
tags: git
keywords: web1992,Java, Linux,Jekyll,git
---


> git fetch tag 获取远程tag

{% highlight sh %}
 获取远程的tag( 远程存在，本地不存在)
 git fetch origin tag 2.4.7
{% endhighlight %}


{% highlight sh %}
 remote: Counting objects: 2, done
 remote: Finding sources: 100% (2/2)
 remote: Total 2 (delta 0), reused 2 (delta 0)
 Unpacking objects: 100% (2/2), done.
 From ssh://project_name
 * [new tag]         2.4.7      -> 2.4.7
 * [new tag]         2.4.6      -> 2.4.6
{% endhighlight %}
