---
layout: page
title:  "data updater"
date:   2015-11-19 19:55:06 +0800
categories: java code
tag: java
---

DataUpdater类图
-----------
![](http://i.imgur.com/F3Aenag.png)
![](http://i.imgur.com/Pcg9Rof.png)
![](http://i.imgur.com/5KUQHTc.png)
程序实例
----------
	1. `private Map<Object, UpdateEntry> changedObjects = new LinkedHashMap<Object, UpdateEntry>();`
	2. human.setModified(); -> addUpdate(final LifeCycle lifeCycle)
	3. update() -> 把玩家数据持久化（保存）到数据库 
	4. private volatile boolean isUpdating = false;
	

error log
----------
	{% highlight java %}
	[root@web errorlogs]# grep -H -n  "The update operation is running,can't add new update" ./*
	./game_server_1.log.2015-11-11:6217:java.lang.IllegalStateException: The update operation is running,can't add new update
	./game_server_1.log.2015-11-17:625:java.lang.IllegalStateException: The update operation is running,can't add new update
	{% endhighlight %}
问题分析
----------
问题1
----------
	1,出现 The update operation is running,can't add new update 错误的原因分析：
	 此处存在多线程访问问题，多线程同时更新同一集合也就是 changedObjects，一个线程在对 changedObjects 迭代更新时，
	  另一个线程执行了addUpdate 操作，向changedObjects添加要被更新的对象，所以出现了上述的错误。
问题2
----------	
	2,经日志分析，上述的错误是一直存在的，可以确定是数据的"更新机制有问题"，为了理解以前使用 isUpdating 来阻止二个线程
	  同时更新一个集合的原因，注释了与 isUpdating 有关的代码。进行测试后出现了如下错误：
	{% highlight java %}
		java.util.ConcurrentModificationException
		at java.util.LinkedHashMap$LinkedHashIterator.nextEntry(LinkedHashMap.java:373)
		at java.util.LinkedHashMap$ValueIterator.next(LinkedHashMap.java:388)
		at com.imop.ceo.core.persistance.AbstractDataUpdater2.update(AbstractDataUpdater2.java:121)
	{% endhighlight %}
	经分析可知错误出现在下面这一行
		for (UpdateEntry _entry : this.changedObjects.values()) {

	此处出现 ConcurrentModificationException 错误的原因在是：一个线程在对 changedObjects 进行 for 循环迭代时，
	另一个线程执行了 addUpdate 操作，导致 changedObjects 大小发生变化。

问题3
----------

	3,此处又发现另外一个问题：如果次数的更新机制有问题，那么就应该存在玩家数据丢失的问题，应该会有很多玩家来反馈，但是却没有。
	  没有出现数据丢失的原因分析：
	  a.程序在进行 human.setModified() 操作时，只是把内存中玩家的数据对象，提交给一个队列（也就是上面的 changedObjects），
	    让心跳任务取队列中的数据，进行数据的持久化操作。问题一的出现，只是在进行内存数据存储在DB中失败了，玩家的数据依然保持在内存中，玩家进行其他更新操作
	    就会再次更新该数据，次数异常不在发送，那就玩家的数据就保存成功了。
	  b.玩家在退出游戏时，会把玩家内存中的数据，再次保存到DB中，就算玩家某次数据更新保存失败了，只要在玩家退出游戏时，保存操作是成功的，那么玩家的数据就
	    不会丢失
	

问题解决
----------
	1,问题总结:多线程读/写同一集合。
	2,解决方案：
			  a.使用 锁 ReentrantLock
			  b.使用 LinkedBlockingQueue 进行封装HashMap(LinkedHashMap)，实现线程安全。
      这里采用锁，使用锁的好处：简单；缺点：多线程下，会产生大量的锁竞争,性能不高。
	  
