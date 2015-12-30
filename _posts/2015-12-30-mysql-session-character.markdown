---
layout: post
title:  "mysql session character"
date:  2015-12-30 11:31:00 +0800
categories: mysql
tags: mysql
keywords: mysql,Jekyll,web1992
---


> mysql session character setting (mysql 解决中文乱码的问题)
> 
> 问题：在`shell` 中 用 `source` 执行`sql`脚本倒入的数据时，
> 
> 如果有中文会导致乱码，解决办法如下，
> 
> 在脚本的开始添加如下代码：

{% highlight sql %}   
SET CHARACTER_SET_CLIENT=utf8;
SET CHARACTER_SET_CONNECTION=utf8;
{% endhighlight %}

