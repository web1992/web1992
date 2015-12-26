---
layout: post
title:  "maven repository config (maven 的仓库配置)"
date:  2015-12-26 23:41:00 +0800
categories: maven
tags: maven
keywords: maven,Jekyll,web1992
---


> maven repository config (maven 的仓库配置)

{% highlight xml %}   
<?xml version="1.0" encoding="UTF-8"?>
<!--0 仓库的配置在 profiles 标签下进行配置-->
<!--1 需要指定仓库的ID-->
<!--2 仓库发布地址-->
<!--3 仓库依赖地址-->
<!--4 插件仓库地址-->
<!--5 激活仓库的配置-->
<profiles>
    <profile>
        <id>nexus</id>
        <!-- 仓库发布地址 -->
        <distributionManagement>
            <repository>
                <id>nexus-releases</id>
                <name>User Project Release</name>
                <url>http://nurl/public</url>
            </repository>

            <snapshotRepository>
                <id>nexus-snapshots</id>
                <name>User Project SNAPSHOTS</name>
                <url>http://url/publicSnapshots/</url>
            </snapshotRepository>
        </distributionManagement>
        <!-- 仓库依赖地址 -->
        <repositories>
            <repository>
                <id>nexus</id>
                <name>nexus</name>
                <url>http://url/public/</url>
                <releases>
                    <enabled>true</enabled>
                </releases>
                <snapshots>
                    <enabled>true</enabled>
                </snapshots>
            </repository>
        </repositories>
        <!--  插件仓库地址 -->
        <pluginRepositories>
            <pluginRepository>
                <id>nexus</id>
                <name>nexus</name>
                <url>http://url/public/</url>
                <releases>
                    <enabled>true</enabled>
                </releases>
                <snapshots>
                    <enabled>true</enabled>
                </snapshots>
            </pluginRepository>
        </pluginRepositories>
    </profile>
</profiles>

<!--  激活仓库的配置 -->
<activeProfiles>
<!-- <activeProfile>nexus</activeProfile>
 -->
</activeProfiles>

{% endhighlight %}

