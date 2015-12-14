---
layout: post
title:  "Linux 批量处理文件"
date:  2015-12-14 13:00:00 +0800
categories: linux
tags: linux
keywords: Java, Linux,Jekyll,sh,web1992
---

> `linux` 一条命令匹配 `/data/` 目录下的所有文件，查找已 insert 开头的文件，并保存内容到 `旧文件名+.txt` 的文件

    {% highlight sh %}
		for i in `ls -l |awk -F' ' '{print $9}'` ; do echo $i; sleep 1; grep -i ^insert $i  > $i'.txt';  done; 
    {% endhighlight %}


