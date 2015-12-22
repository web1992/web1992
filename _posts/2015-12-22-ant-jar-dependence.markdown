---
layout: post
title:  "ant jar依赖"
date:  2015-12-22 14:26:00 +0800
categories: ant
tags: ant
keywords: ant,Jekyll,web1992
---


> ant jar 

{% highlight xml %}   
<!--ant_project public define-->
<property name="ant_project.project.name" value="ant_project" />
<property name="ant_project.bin" value="../${ant_project.project.name}/bin" />
<property name="ant_project.jarName" value="ant_project.jar" />

<property name="weblib.dir" value="/data/www/my_site/lib/" />

<target name="makeJar">
	<!-- 把 ${ant_project.bin} 打包到 ${weblib.dir} 目录下，名称是为 ant_project.jar   -->
	<jar destfile="生成jar包" jarfile="${weblib.dir}/${ant_project.jarName}" basedir="${ant_project.bin}"></jar>
</target>
{% endhighlight %}

