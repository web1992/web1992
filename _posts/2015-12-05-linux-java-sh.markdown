---
layout: post
title:  "java sh启动脚本"
date:  2015-12-05 18:23:00 +0800
categories: java
tags: java
keywords: web1992,Java, Linux,Jekyll,sh
---

> `java` sh启动脚本

    {% highlight sh %}
    #!/bin/bash
    export LANG=en_US.UTF8
    start(){
    ulimit -n 65535
    #find the jars
    jar_lib=`ls -1 lib/*.jar`
    jar_lib=`echo $jar_lib | sed 's/ /:/g'`
    #init logs
    if [ ! -d 'logs' ] ; then  mkdir logs ; fi
    /usr/local/java -Dserver.name=my_server -server -Xmx1024M -Xms1024M -Xss160K -XX:NewRatio=2 -XX:PermSize=128m -XX:MaxPermSize=128m -XX:+UseConcMarkSweepGC  -cp resources:config:${jar_lib}  com.web.Main 1>>logs/stdout 2>>logs/stderr &
    pid=$!
    echo "$pid" > pid
    echo "GameServer1 Process Id:$pid"
    }
     
    stop(){
    #pid=`cat pid`
    pid=`ps aux |grep java |awk '{if($12=="-Dserver.name=my_server") print $2}'`
    echo "Stop my_server Process Id:$pid"
    kill $pid
    rm -f pid
    }
     
    case "$1" in
      start)
    stop
    start
    ;;
      stop)
    stop
    ;;
      *)
    echo $"Usage: {start|stop}"
    exit 1
    esac
    {% endhighlight %}


