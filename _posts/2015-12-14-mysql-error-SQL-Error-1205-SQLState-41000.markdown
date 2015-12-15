---
layout: post
title:  "mysql APPARENT DEADLOCK（SQL Error: 1205, SQLState: 41000）错误"
date:  2015-12-14 19:45:00 +0800
categories: mysql
tags: mysql
keywords: mysql, Linux,Jekyll,web1992,APPARENT DEADLOCK
---

> 今天在使用程序连接 `mysql` 出现如下的错误（上午还可以使用，下午就出问题了）
> 
> 日志：

    ThreadPoolAsynchronousRunner$DeadlockDetector.run - com.mchange.v2.async.ThreadPoolAsynchronousRunner$DeadlockDetector@3a6d6182 -- APPARENT DEADLOCK!!! Complete Status:
    Managed Threads: 3
    Active Threads: 3
    Active Tasks:
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StatementCloseTask@49c293b6 (com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread-#0)
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StatementCloseTask@56fb78f (com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread-#2)
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StatementCloseTask@697c1012 (com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread-#1)
    Pending Tasks:
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StmtAcquireTask@500343d8
    Pool thread stack traces:
    Thread[com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread-#2,5,main]
    com.mysql.jdbc.ServerPreparedStatement.realClose(ServerPreparedStatement.java:1061)
    com.mysql.jdbc.ServerPreparedStatement.close(ServerPreparedStatement.java:601)  
    com.mchange.v1.db.sql.StatementUtils.attemptClose(StatementUtils.java:41)
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StatementCloseTask.run(GooGooStatementCache.java:404)
    com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread.run(ThreadPoolAsynchronousRunner.java:547)
    Thread[com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread-#0,5,main]
    com.mysql.jdbc.ServerPreparedStatement.realClose(ServerPreparedStatement.java:1061)
    com.mysql.jdbc.ServerPreparedStatement.close(ServerPreparedStatement.java:601)  
    com.mchange.v1.db.sql.StatementUtils.attemptClose(StatementUtils.java:41)
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StatementCloseTask.run(GooGooStatementCache.java:404)
    com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread.run(ThreadPoolAsynchronousRunner.java:547)
    Thread[com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread-#1,5,main]
    com.mysql.jdbc.ServerPreparedStatement.realClose(ServerPreparedStatement.java:1061)
    com.mysql.jdbc.ServerPreparedStatement.close(ServerPreparedStatement.java:601)  
    com.mchange.v1.db.sql.StatementUtils.attemptClose(StatementUtils.java:41)
    com.mchange.v2.c3p0.stmt.GooGooStatementCache$1StatementCloseTask.run(GooGooStatementCache.java:404)
    com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread.run(ThreadPoolAsynchronousRunner.java:547)

> 程序出现以下错误：
    
    JDBCExceptionReporter.logExceptions - SQL Error: 1205, SQLState: 41000
    JDBCExceptionReporter.logExceptions - Lock wait timeout exceeded; try restarting transaction
    AbstractFlushingEventListener.performExecutions - Could not synchronize database state with session

> 这里登陆服务器，查找问题，发现 `linux` 的磁盘满了，
>
> 通过下面命令

{% highlight sh linenos %}    
    #显示磁盘信息
    df -h
    #进入 `data` 文件目录下面，查询每个文件夹的大小
    cd /data/
    du -sh *
    
    28M windows
    28K windows_build.xml
    ...
{% endhighlight %}
> 删除无用的过大文件即可





