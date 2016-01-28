---
layout: post
title:  "apache 通配符的使用"
date:  2015-12-18 20:09:00 +0800
categories: apache
tags: apache
keywords: apache, Linux,Jekyll,web1992
---

> apache 通配符的使用
> 
> 用法 http://127.0.0.1/server1/action1
> 
> 那么在 下面的配置中 
> 
> %0 就是 server1
> 
> %1 就是 action1

> 配置如下:

{% highlight xml linenos %}    

NameVirtualHost 127.0.0.1
	<VirtualHost *:81>
	        ServerName  %0
	        UseCanonicalName Off
	        VirtualDocumentRoot /data/www//%0/
	        DirectoryIndex index.html
	        #ErrorLog "/data/www_log/"%1"-error_log"
	        #CustomLog "/data/www_log/"%1"-access_log" common
	</VirtualHost>
{% endhighlight %}






