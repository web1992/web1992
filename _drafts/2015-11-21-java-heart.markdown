---
layout: post
title:  "java heart"
date:  2015-11-19 19:55:06 +0800
categories: java thread
---

## 游戏场景概念 ##
	什么是场景:   1，玩家在每次进入一个新的系统功能时，就是进入了一个新的场景
				  （前端通知后端，程序会进行场景的切换）

	场景的作用:   1，定时检查场景中的活动状态，通知场景玩家参加活动.
			     2，进行玩家数据的更新
    场景的好处:
			     1，游戏的玩家众多，每个玩家所在的场景不同，而游戏中的活动是
					在某一个特定的场景中的，这个场景中的活动开始了，不用更新
					通知在其他场景的玩家，可以提高程序的吞吐量，提高性能。

			     2，游戏中的每个场景，都拥有一个数据更新器，用来进行数据的保
					持操作。游戏使用多个场景的原因，是为了把不同场景的数据更
					新保存操作，分发到不同的场景更新器中，可以减少程序压力数
					据更新器涉及到多线程，可减少线程之间的竞争，提高并发效率

## 场景的实现原理 ##
0，`Globals` 初始化时，进行会初始化一个 `SceneService`

1，`SceneService` 游戏启动时，初始化一个 `HeartbeatThread` 用来管理场景&心跳

2，HeartbeatThread 中有多个 `ExecutorService`（如:summitPKWarPool,ceoWarPool）
   一个线程池，维护每个场景的心跳这里有有一个 `while(true){// doSomething...}`

3，`SceneRunner` 用来封装`Scene`，提交给`ExecutorService`进行心跳

4，具体的实现：`Scene`，接口抽象

`ArenaScene` 具体实现

`ArenaDataUpdater` 负责数据更新

`ArenaDataUpdater` 具体实现
`LifeCycle` 封装了 `PersistanceObject`），
(`POUpdater` 封装了 `BaseDao`)

`AbstractDataUpdater` 抽象
`addUpdate(LifeCycle lifeCycle)`
`addDelete(LifeCycle lifeCycle) update()`

	
![](http://i.imgur.com/HHKs6cz.png)

## 场景的知识的总结 ##
0，线程知识 创建可提交的，有结果集的 `Callable` 线程任务

1，线程知识 `Future` 可以知道`Callable` 任务的完成状态，已经完成了，还是未完成

2，线程知识 `ExecutorService` 执行提交的线程任务

3，线程知识 如何正确的关闭一个正在运行的心跳任务，以及实现策略，
   区分： `executorService.shutdown() executorService.shutdownNow()` 的区别
	

