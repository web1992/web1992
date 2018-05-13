---
layout: post
title:  "git使用命令行push代码到远程仓库"
date:  2015-12-02 09:55:00 +0800
categories: git
tags: git
keywords: web1992,Java, Linux,Jekyll,git
---


> create a new repository on the command line

```sh
  echo  blog >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git remote add origin git@github.com:web1992/blog.git
  git push -u origin master
    
# or push an existing repository from the command line


  git remote add origin git@github.com:web1992/blog.git
  git push -u origin master


# Git把Tag推送到远程仓库

  push 一个单独的tag
  git push origin [tagname]
  push 所有的tag
  git push --tags
  or
  git push origin --tags


