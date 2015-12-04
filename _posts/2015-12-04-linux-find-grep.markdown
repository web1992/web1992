---
layout: post
title:  "linux grep cat 查找命令"
date:  2015-12-04 22:37:00 +0800
categories: linux
tags: linux
keywords: web1992,Java, Linux,Jekyll,grep,cat
---


> linux 下面常用的查找命令的总结,备忘
> 
> `grep`查找某一个文件中的关键字，如在a.txt中查找linux单词出现的位置

    {% highlight sh %}
      grep -Hin 'linux' a.txt
      -H 显示文件名
      -i 不区分大小写
      -n 显示行数
    {% endhighlight %}


> `find`查找在某一个目录下面查找文件名是b.txt的文件

    {% highlight sh %}
      -name 按照名字来查找
      find /data/log -name "b.txt"
      查找所有以txt结尾的文件
      find /data/log -name "*.txt" 
      -mtime 按照时间来查找（查找时间大于30天的文件）
      find /data/log -mtime +30
      查找时间大于30天的文件并删除
      find /data/log -name "*.txt" -mtime +30 -exec rm -rf {} \;
    {% endhighlight %}
