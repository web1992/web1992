---
layout: post
title:  "Linux 批量处理文件"
date:  2015-12-14 13:00:00 +0800
categories: linux
tags: linux
keywords: Java, Linux,Jekyll,sh,web1992
---

> `linux` 一条命令匹配 `/data/` 目录下的所有文件，查找文件中以 insert 开头的行，并保存内容到 `旧文件名+.txt` 文件中

{% highlight sh %}
# 列出 `/data/` 目录下的所有文件
for i in `ls -l /data/ |awk -F' ' '{print $9}'` ; do echo $i; done; 

for i in `ls -l /data/ |awk -F' ' '{print $9}'` ; do echo $i; sleep 1; grep -i ^insert $i  > $i'.txt';  done; 
{% endhighlight %}


