(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),l=(t(0),t(140)),u={id:"ScheduledThreadPoolExecutor",title:"ScheduledThreadPoolExecutor",author:"web1992",author_url:"https://github.com/web1992",author_image_url:"https://avatars3.githubusercontent.com/u/6828647?s=60&v=4",tags:["java"]},i={permalink:"/blog/ScheduledThreadPoolExecutor",editUrl:"https://github.com/web1992/blog/tree/master/blog/scheduled-thread-pool-executor.md",source:"@site/blog/scheduled-thread-pool-executor.md",description:"ScheduledThreadPoolExecutor",date:"2020-07-22T14:16:34.609Z",tags:[{label:"java",permalink:"/blog/tags/java"}],title:"ScheduledThreadPoolExecutor",readingTime:7.32,truncated:!0,prevItem:{title:"Java \u4e4b SelectionKey \u5b9e\u73b0\u6280\u5de7",permalink:"/blog/nio-selection-key"},nextItem:{title:"ThreadPoolExecutor \u4e4b\u6784\u9020\u53c2\u6570",permalink:"/blog/thread-pool-executor-constructor"}},c=[{value:"ScheduledThreadPoolExecutor",id:"scheduledthreadpoolexecutor",children:[]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"java doc",id:"java-doc",children:[]},{value:"scheduleAtFixedRate",id:"scheduleatfixedrate",children:[]},{value:"scheduleWithFixedDelay",id:"schedulewithfixeddelay",children:[]},{value:"ScheduledFutureTask",id:"scheduledfuturetask",children:[{value:"ScheduledFutureTask \u4e2d\u7684\u53d8\u91cf",id:"scheduledfuturetask-\u4e2d\u7684\u53d8\u91cf",children:[]},{value:"run",id:"run",children:[]},{value:"getDelay",id:"getdelay",children:[]}]},{value:"DelayedWorkQueue",id:"delayedworkqueue",children:[{value:"offer",id:"offer",children:[]}]},{value:"siftUp",id:"siftup",children:[]},{value:"ScheduledFutureTask-compareTo",id:"scheduledfuturetask-compareto",children:[{value:"poll",id:"poll",children:[]},{value:"take",id:"take",children:[]}]},{value:"siftDown",id:"siftdown",children:[]},{value:"Demo for ScheduledThreadPoolExecutor",id:"demo-for-scheduledthreadpoolexecutor",children:[]}],o={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"scheduledthreadpoolexecutor"},"ScheduledThreadPoolExecutor"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#scheduledthreadpoolexecutor"}),"ScheduledThreadPoolExecutor")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#%E7%AE%80%E4%BB%8B"}),"\u7b80\u4ecb")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#java-doc"}),"java doc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#scheduleatfixedrate"}),"scheduleAtFixedRate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#schedulewithfixeddelay"}),"scheduleWithFixedDelay")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#scheduledfuturetask"}),"ScheduledFutureTask"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#scheduledfuturetask-%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F"}),"ScheduledFutureTask \u4e2d\u7684\u53d8\u91cf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#run"}),"run")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#getdelay"}),"getDelay")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#delayedworkqueue"}),"DelayedWorkQueue"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#offer"}),"offer")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#siftup"}),"siftUp")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#scheduledfuturetask-compareto"}),"ScheduledFutureTask-compareTo"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#poll"}),"poll")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#take"}),"take")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#siftdown"}),"siftDown")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#demo-for-scheduledthreadpoolexecutor"}),"Demo for ScheduledThreadPoolExecutor"))),Object(l.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"ScheduledThreadPoolExecutor")," \u652f\u6301\u5468\u671f\u6027\u6267\u884c\u4efb\u52a1"),Object(l.b)("li",{parentName:"ol"},"\u5305\u88c5 ",Object(l.b)("inlineCode",{parentName:"li"},"Runnable")," ",Object(l.b)("inlineCode",{parentName:"li"},"Callable")," \u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"ScheduledFutureTask")),Object(l.b)("li",{parentName:"ol"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"DelayedWorkQueue")," \u7ef4\u62a4\u4efb\u52a1,\u540c\u65f6\u5b9e\u73b0\u4e86\u4f18\u5148\u7ea7\u6392\u5e8f\u7684\u529f\u80fd"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"ScheduledThreadPoolExecutor")," = ",Object(l.b)("inlineCode",{parentName:"li"},"ThreadPoolExecutor")," + ",Object(l.b)("inlineCode",{parentName:"li"},"ScheduledExecutorService"))),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"images/ScheduledThreadPoolExecutor.png",alt:"ScheduledThreadPoolExecutor"}))),Object(l.b)("h2",{id:"java-doc"},"java doc"),Object(l.b)("p",null," This class specializes ",Object(l.b)("inlineCode",{parentName:"p"},"ThreadPoolExecutor")," implementation by"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Using a custom task type, ",Object(l.b)("inlineCode",{parentName:"p"},"ScheduledFutureTask")," for\ntasks, even those that don't require scheduling (i.e.,\nthose submitted using ",Object(l.b)("inlineCode",{parentName:"p"},"ExecutorService")," execute, not\n",Object(l.b)("inlineCode",{parentName:"p"},"ScheduledExecutorService")," methods) which are treated as\ndelayed tasks with a delay of zero.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Using a custom queue (",Object(l.b)("inlineCode",{parentName:"p"},"DelayedWorkQueue"),"), a variant of\nunbounded DelayQueue. The lack of capacity constraint and\nthe fact that corePoolSize and ",Object(l.b)("inlineCode",{parentName:"p"},"maximumPoolSize")," are\neffectively identical simplifies some execution mechanics\n(see ",Object(l.b)("inlineCode",{parentName:"p"},"delayedExecute"),") compared to ThreadPoolExecutor.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Supporting optional run-after-shutdown parameters, which\nleads to overrides of shutdown methods to remove and cancel\ntasks that should NOT be run after shutdown, as well as\ndifferent recheck logic when task (re)submission overlaps\nwith a shutdown.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Task decoration methods to allow interception and\ninstrumentation, which are needed because subclasses cannot\notherwise override submit methods to get this effect. These\ndon't have any impact on pool control logic though."))),Object(l.b)("h2",{id:"scheduleatfixedrate"},"scheduleAtFixedRate"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public ScheduledFuture<?> scheduleAtFixedRate(Runnable command,\n                                              long initialDelay,\n                                              long period,\n                                              TimeUnit unit) {\n    if (command == null || unit == null)\n        throw new NullPointerException();\n    if (period <= 0)\n        throw new IllegalArgumentException();\n    ScheduledFutureTask<Void> sft =\n        new ScheduledFutureTask<Void>(command,\n                                      null,\n                                      triggerTime(initialDelay, unit),\n                                      unit.toNanos(period));// \u4e0d\u540c\u70b9\n    RunnableScheduledFuture<Void> t = decorateTask(command, sft);\n    sft.outerTask = t;\n    delayedExecute(t);\n    return t;\n}\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"scheduleAtFixedRate")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"scheduleWithFixedDelay")," \u4e0d\u540c\u70b9\u5728\u8fd9\u4e2a\u65b9\u6cd5"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"unit.toNanos(period));// scheduleAtFixedRate\nunit.toNanos(-delay));// scheduleWithFixedDelay\n\n// \u8fd9\u4e2a\u503c\u4f1a\u88ab\u5f53\u505a ScheduledFutureTask \u7684\u6210\u5458\u53d8\u91cf period\n// \u7528\u6765\u533a\u5206 scheduleAtFixedRate scheduleWithFixedDelay\n// \u7528 setNextRunTime \u8ba1\u7b97\u4e0b\u6b21\u6267\u884c\u7684\u65f6\u95f4\n")),Object(l.b)("h2",{id:"schedulewithfixeddelay"},"scheduleWithFixedDelay"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public ScheduledFuture<?> scheduleWithFixedDelay(Runnable command,\n                                                 long initialDelay,\n                                                 long delay,\n                                                 TimeUnit unit) {\n    if (command == null || unit == null)\n        throw new NullPointerException();\n    if (delay <= 0)\n        throw new IllegalArgumentException();\n    ScheduledFutureTask<Void> sft =\n        new ScheduledFutureTask<Void>(command,\n                                      null,\n                                      triggerTime(initialDelay, unit),\n                                      unit.toNanos(-delay));// \u4e0d\u540c\u70b9\n    RunnableScheduledFuture<Void> t = decorateTask(command, sft);\n    sft.outerTask = t;\n    delayedExecute(t);\n    return t;\n}\n")),Object(l.b)("h2",{id:"scheduledfuturetask"},"ScheduledFutureTask"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"images/ScheduledFutureTask.png",alt:"ScheduledFutureTask"}))),Object(l.b)("h3",{id:"scheduledfuturetask-\u4e2d\u7684\u53d8\u91cf"},"ScheduledFutureTask \u4e2d\u7684\u53d8\u91cf"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/** Sequence number to break ties FIFO */\nprivate final long sequenceNumber;\n/** The time the task is enabled to execute in nanoTime units */\nprivate long time;// \u4efb\u52a1\u6267\u884c\u7684\u65f6\u95f4\n/**\n * Period in nanoseconds for repeating tasks.  A positive\n * value indicates fixed-rate execution.  A negative value\n * indicates fixed-delay execution.  A value of 0 indicates a\n * non-repeating task.\n */\n // period > 0 fixed-rate\n // period < 0 fixed-delay\nprivate final long period;\n/** The actual task to be re-enqueued by reExecutePeriodic */\nRunnableScheduledFuture<V> outerTask = this;\n/**\n * Index into delay queue, to support faster cancellation.\n */\nint heapIndex;\n")),Object(l.b)("h3",{id:"run"},"run"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public void run() {\n    boolean periodic = isPeriodic();\n    if (!canRunInCurrentRunState(periodic))\n        cancel(false);\n    else if (!periodic)\n        ScheduledFutureTask.super.run();// \u4e0d\u662f\u5468\u671f\u6027\u7684\u4efb\u52a1\uff0c\u76f4\u63a5\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\n    else if (ScheduledFutureTask.super.runAndReset()) {\n        // \u66f4\u65b0\u4e0b\u6b21\u8981\u6267\u884c\u65f6\u95f4\n        setNextRunTime();\n        // \u628a\u4efb\u52a1\u4ece\u65b0\u6dfb\u52a0\u5230 queue \u961f\u5217\u4e2d\uff0c\u4ece\u800c\u53ef\u4ee5\u5468\u671f\u6027\u7684\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\n        reExecutePeriodic(outerTask);\n    }\n}\n\npublic boolean isPeriodic() {\n    return period != 0;\n}\n\n// \u5982\u679c period > 0 \u8ba4\u4e3a\u662f scheduleAtFixedRate \u7c7b\u578b\u7684\u4efb\u52a1 time = time + period\n// \u800c period < 0 \u8ba4\u4e3a\u662f scheduleWithFixedDelay \u7c7b\u578b\u7684\u4efb\u52a1 time = now() + period\n// \u5728\u8fd9\u4e9b\u65b9\u6cd5\u6267\u884c\u5df2\u7ecf\u6267\u884c\u4e86 isPeriodic \u65b9\u6cd5 \u56e0\u6b64 period !=0\nprivate void setNextRunTime() {\n    long p = period;\n    if (p > 0)// scheduleAtFixedRate\n        time += p;\n    else\n        // (\u5f53\u524d\u65f6\u95f4+p,\u56e0\u6b64\u4f1a\u628a\u4efb\u52a1\u6267\u884c\u6d88\u8017\u7684\u65f6\u95f4\u4e5f\u8ba1\u7b97\u5728\u5185)\n        time = triggerTime(-p);// scheduleWithFixedDelay\n}\n\nlong triggerTime(long delay) {\n    return now() +\n        ((delay < (Long.MAX_VALUE >> 1)) ? delay : overflowFree(delay));\n}\n\n// \u4efb\u52a1\u6267\u884c\u4e4b\u540e\uff0c\u88ab\u91cd\u65b0\u653e\u8fdb\u4e86\u961f\u5217\u4e2d\nvoid reExecutePeriodic(RunnableScheduledFuture<?> task) {\n    if (canRunInCurrentRunState(true)) {\n        super.getQueue().add(task);\n        if (!canRunInCurrentRunState(true) && remove(task))\n            task.cancel(false);\n        else\n            ensurePrestart();\n    }\n}\n")),Object(l.b)("h3",{id:"getdelay"},"getDelay"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// getDelay \u83b7\u53d6\u8fd8\u9700\u8981\u7b49\u5f85\u7684\u65f6\u95f4\n// getDelay \u65b9\u6cd5 \u5728 DelayedWorkQueue#take \u548c DelayedWorkQueue#poll \u4e2d\u8c03\u7528\n// \u5982\u679c\u8fd4\u56de\u7684\u503c\u5927\u4e8e0\uff0c\u5c31\u4f1a\u6267\u884c available.awaitNanos(nanos); \u963b\u585e nanos \u7eb3\u79d2\npublic long getDelay(TimeUnit unit) {\n    return unit.convert(time - now(), NANOSECONDS);\n}\n")),Object(l.b)("h2",{id:"delayedworkqueue"},"DelayedWorkQueue"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"images/DelayedWorkQueue.png",alt:"DelayedWorkQueue"}))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"DelayedWorkQueue")," \u662f\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u7684\u4e00\u4e2a\u961f\u5217,\u521d\u59cb\u5927\u5c0f\u662f 16"),Object(l.b)("p",null,"\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"ReentrantLock")," \u63a7\u5236\u5e76\u53d1,\u91cd\u5199\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"offer"),",",Object(l.b)("inlineCode",{parentName:"p"},"take"),",",Object(l.b)("inlineCode",{parentName:"p"},"poll")," \u65b9\u6cd5"),Object(l.b)("h3",{id:"offer"},"offer"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// offer \u5411 DelayedWorkQueue \u7ef4\u62a4\u7684\u6570\u7ec4\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u4efb\u52a1\n// \u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\u5c31\u6269\u5bb9\npublic boolean offer(Runnable x) {\n    if (x == null)\n        throw new NullPointerException();\n    RunnableScheduledFuture<?> e = (RunnableScheduledFuture<?>)x;\n    final ReentrantLock lock = this.lock;\n    lock.lock();\n    try {\n        int i = size;\n        if (i >= queue.length)\n            grow();// \u6269\u5bb9\n        size = i + 1;\n        if (i == 0) {\n            queue[0] = e;\n            setIndex(e, 0);\n        } else {\n            siftUp(i, e);// \u89c1\u4e0b\u9762\u7684\u89e3\u91ca\n        }\n        if (queue[0] == e) {// \u5982\u679c\u662f\u7b2c\u4e00\u6b21\u63d2\u5165\u6570\u636e\n            leader = null;\n            // \u8fd9\u91cc\u53bb\u5524\u9192\u8c03\u7528 take \u65b9\u6cd5\n            // take \u65b9\u6cd5\u53ef\u80fd\u5728 offer \u65b9\u6cd5\u4e4b\u524d\u6267\u884c\n            // \u6b64\u65f6 queue \u4e3a\u7a7a ,take \u65b9\u6cd5\u4f1a\u6267\u884c available.await(); \u8fdb\u884c\u963b\u585e\u7b49\u5f85\n            // \u8fd9\u91cc\u7684\u76ee\u7684\u5c31\u662f\u5524\u9192\u963b\u585e\u7684\u7ebf\u7a0b(\u8fd9\u4e2a\u7ebf\u7a0b\u5176\u5b9e\u5c31\u662f\u7ebf\u7a0b\u6c60\u4e2d\u7684 worker \u7ebf\u7a0b)\n            available.signal();\n        }\n    } finally {\n        lock.unlock();\n    }\n    return true;\n}\n")),Object(l.b)("h2",{id:"siftup"},"siftUp"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n * Sifts element added at bottom up to its heap-ordered spot.\n * Call only when holding lock.\n */\n// siftUp -> \u5411\u4e0a\u7b5b\u9009\n// k \u662f\u5f53\u524d\u5143\u7d20\u63d2\u5165\u7684\u4f4d\u7f6e,key \u662f\u5f53\u524d\u63d2\u5165\u7684\u5143\u7d20\n// \u6bcf\u6b21\u5411 queue \u4e2d\u63d2\u5165\u5143\u7d20\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u4e0e queue \u7684\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\n// \u628a\u6bd4\u8f83\u5c0f\u7684\u5143\u7d20\u79fb\u52a8\u5230queue\u7684\u5934\u90e8(\u8fdb\u884c\u4f4d\u7f6e\u7684\u4ea4\u6362)\n// \u8fd9\u91cc\u5e76\u4e0d\u4f1a\u5bf9\u6bcf\u4e2a\u5143\u7d20\u90fd\u8fdb\u884c\u6bd4\u8f83\uff0c\u800c\u662f\u9664 2 \u8fdb\u884c\u8df3\u8dc3\u7684\u6570\u636e\u5bf9\u6bd4\uff08\u4ea4\u6362\u4f4d\u7f6e\uff09\nprivate void siftUp(int k, RunnableScheduledFuture<?> key) {\n    while (k > 0) {\n        // \u8fd9\u4e2a\u516c\u5f0f\u53ef\u4ee5\u8f6c\u5316\u6210 parent = (k - 1) / 2;\n        // \u4f7f\u7528 >>> \u4ee3\u66ff / \u662f\u56e0\u4e3a\u4f4d\u64cd\u7eb5\u8f83\u5feb\n        int parent = (k - 1) >>> 1;\n        RunnableScheduledFuture<?> e = queue[parent];\n        if (key.compareTo(e) >= 0)// \u5982\u679c\u63d2\u5165\u7684\u6570\u636e\u6bd4\u4e4b\u524d\u7684\u6570\u636e\u5927\uff0c\u5c31\u5e94\u8be5\u6392\u5728 queue \u7684\u672b\u5c3e\uff0c\u7ed3\u675f\u5faa\u73af\n            break;\n        queue[k] = e;\n        setIndex(e, k);\n        k = parent;\n    }\n    queue[k] = key;// \u628a\u65b0\u7684key \u79fb\u52a8\u5230\u5408\u9002\u7684\u4f4d\u7f6e(\u5176\u5b9e\u7531\u4e8ek\u8f83\u5c0f\uff0c\u6240\u4ee5\u653e\u5728queue \u7684\u5934\u90e8)\n    setIndex(key, k);\n}\n")),Object(l.b)("h2",{id:"scheduledfuturetask-compareto"},"ScheduledFutureTask-compareTo"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// ScheduledFutureTask\n// \u6bcf\u4e2a\u88ab\u63d0\u4ea4\u5230\u7ebf\u7a0b\u6c60\u4e2d\u7684\u4efb\u52a1\uff0c\u90fd\u4f1a\u88ab\u5305\u88c5\u6210 ScheduledFutureTask\n// \u8fd9\u91cc\u91cd\u5199\u4e86compareTo\npublic int compareTo(Delayed other) {\n    if (other == this) // compare zero if same object\n        return 0;\n    if (other instanceof ScheduledFutureTask) {\n        ScheduledFutureTask<?> x = (ScheduledFutureTask<?>)other;\n        // time \u662ftask \u7684\u6267\u884c\u65f6\u95f4\uff0c\u662f\u901a\u8fc7 triggerTime \u8ba1\u7b97\u51fa\u6765\u7684\n        long diff = time - x.time;\n        if (diff < 0)// \u65f6\u95f4\u8f83\u5c0f\u7684\uff0c\u5411queue\u7684\u5934\u90e8\u9760\u8fd1\n            return -1;\n        else if (diff > 0)\n            return 1;\n        else if (sequenceNumber < x.sequenceNumber)\n            // \u5982\u679c\u65f6\u95f4\u76f8\u7b49\uff0c\u5bf9\u6bd4 \u8fdb\u5165queue\u7684\u987a\u5e8f\uff0c\u5148\u8fdb\u5165queue\u7684\uff0c\u5411queue\u7684\u5934\u90e8\u9760\u8fd1\n            return -1;\n        else\n            return 1;\n    }\n    // \u5ef6\u8fdf\u65f6\u95f4\u5c0f\u7684\uff0c\u6392\u5728\u524d\u9762\n    long diff = getDelay(NANOSECONDS) - other.getDelay(NANOSECONDS);\n    return (diff < 0) ? -1 : (diff > 0) ? 1 : 0;\n}\n")),Object(l.b)("h3",{id:"poll"},"poll"),Object(l.b)("p",null,"\u53ef\u53c2\u8003 ",Object(l.b)("inlineCode",{parentName:"p"},"take")," \u65b9\u6cd5\u7684\u5b9e\u73b0"),Object(l.b)("h3",{id:"take"},"take"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public RunnableScheduledFuture<?> take() throws InterruptedException {\n    final ReentrantLock lock = this.lock;\n    lock.lockInterruptibly();\n    try {\n        for (;;) {\n            RunnableScheduledFuture<?> first = queue[0];\n            // \u5982\u679c\u6ca1\u6709\u6570\u636e\u5219\u7b49\u5f85,\u5982\u679c\u5176\u4ed6\u7ebf\u7a0b\u6267\u884c\u4e86 offer \u63d0\u4ea4\u4e86\u4efb\u52a1\n            // \u4f1a\u6267\u884c available.signal(); \u5524\u9192 take \uff08\u4e5f\u5c31\u662f\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\uff09\n            if (first == null)\n                available.await();\n            else {\n                // \u8ba1\u7b97\u5ef6\u8fdf\u7684\u65f6\u95f4 delay = time - now()\n                long delay = first.getDelay(NANOSECONDS);\n                if (delay <= 0)// \u5c0f\u4e8e 0 \u8bf4\u660e\u65f6\u95f4\u5230\u4e86,\u8fd4\u56de\u8fd9\u4e2a Runnable\n                    return finishPoll(first);// \u8fd9\u91cc\u4fdd\u8bc1\u4e86 queue \u4e00\u5b9a\u662f\u6709\u4e00\u4e2a\u4efb\u52a1\u7684\n                first = null; // don't retain ref while waiting\n                // worker \u7ebf\u7a0b\u53ef\u80fd\u6709\u591a\u4e2a\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u5176\u4ed6\u7ebf\u7a0b\u7ade\u4e89\uff0c\u5219\u963b\u585e\n                // \u4f1a\u5728 finally \u4e2d\u8fdb\u884c\u5524\u9192\n                // \u6216\u8bb8\u4f60\u8ba4\u4e3a\u4e0a\u9762\u4e0d\u662f\u4f7f\u7528 lock \u8fdb\u884c\u52a0\u9501\u4e86\u4e3a\u4ec0\u4e48\u8fd8\u6709\u5176\u4ed6\u7ebf\u7a0b\u7ade\u4e89\u5462\uff1f\n                // \u8fd9\u662f\u56e0\u4e3a\u540e\u9762\u4f1a\u6267\u884c available.awaitNanos(delay) \u662f\u4f1a\u91ca\u653e\u9501\u7684\uff0c\u56e0\u6b64\u5176\u4ed6\u7ebf\u7a0b\u4e5f\u53ef\u83b7\u53d6\u9501\n                if (leader != nul)\n                    available.await();\n                else {\n                    Thread thisThread = Thread.currentThread();\n                    leader = thisThread;\n                    try {\n                        // \u7b49\u5f85 delay \u7eb3\u79d2\u65f6\u95f4\uff0c\u5176\u5b9e\u5c31\u662f\u5728 delay \u7eb3\u79d2\u4e4b\u540e\u8fd4\u56de Runnable\n                        // \u7136\u540e\u63d0\u4ea4\u7ed9 queue \u6267\u884c\u4efb\u52a1\n                        // \u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86 \u5468\u671f\u6027\u4efb\u52a1 \u7684\u6267\u884c\n                        // awaitNlanos \u65b9\u6cd5\u4f1a\u4f7f\u5f53\u524d\u7ebf\u7a0b\u963b\u585e\uff0c\u7b49\u5f85\u5524\u9192\uff08\u4e0d\u4f1a\u5360\u7528CPU\uff09\n                        available.awaitNanos(delay);\n                    } finally {\n                        if (leader == thisThread)\n                            leader = null;// \u8fd9\u91cc\u8bbe\u7f6e\u4e3a null,\u540e\u7eed\u5728 finally \u4e2d\u5524\u9192\u5176\u4ed6\u7ebf\u7a0b\n                    }\n                }\n            }\n        }\n    } finally {\n        if (leader == null && queue[0] != null)\n            available.signal();// \u8fd9\u91cc\u5524\u9192\u963b\u585e\u7684\u7ebf\u7a0b\n        lock.unlock();\n    }\n}\n\n// time \u662f\u4efb\u52a1\u8981\u6267\u884c\u7684\u65f6\u95f4\u70b9\n// time - now() < 0 \u8bf4\u660e\u5df2\u7ecf\u8d85\u8fc7\u4e86\u5f53\u524d\u65f6\u95f4\n// \u7acb\u5373\u6267\u884c\npublic long getDelay(TimeUnit unit) {\n    return unit.convert(time - now(), NANOSECONDS);\n}\n\n/**\n* Performs common bookkeeping for poll and take: Replaces\n* first element with last and sifts it down.  Call only when\n* holding lock.\n* @param f the task to remove and return\n*/\n// \u8fd9\u91cc\u662f\u4ece\u6570\u636e\u4e2d\u62ff\u5230\u4e0b\u4e00\u4e2a\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\nprivate RunnableScheduledFuture<?> finishPoll(RunnableScheduledFuture<?> f) {\n    int s = --size;// \u4e0b\u4e00\u4e2a\n    RunnableScheduledFuture<?> x = queue[s];\n    queue[s] = null;\n    if (s != 0)\n        siftDown(0, x);\n    setIndex(f, -1);// \u66f4\u65b0 heapIndex \u65b9\u4fbf\u540e\u7eed\u6392\u5e8f\u4f7f\u7528\n    return f;\n}\n")),Object(l.b)("h2",{id:"siftdown"},"siftDown"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n * Sifts element added at top down to its heap-ordered spot.\n * Call only when holding lock.\n */\nprivate void siftDown(int k, RunnableScheduledFuture<?> key) {\n    int half = size >>> 1;\n    while (k < half) {\n        int child = (k << 1) + 1;\n        RunnableScheduledFuture<?> c = queue[child];\n        int right = child + 1;\n        if (right < size && c.compareTo(queue[right]) > 0)\n            c = queue[child = right];\n        if (key.compareTo(c) <= 0)\n            break;\n        queue[k] = c;\n        setIndex(c, k);\n        k = child;\n    }\n    queue[k] = key;\n    setIndex(key, k);\n}\n")),Object(l.b)("h2",{id:"demo-for-scheduledthreadpoolexecutor"},"Demo for ScheduledThreadPoolExecutor"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    ScheduledThreadPoolExecutor scheduledThreadPoolExecutor = new ScheduledThreadPoolExecutor(1);\n    long start = System.currentTimeMillis();\n    scheduledThreadPoolExecutor.execute(() -> {\n        System.out.println(Thread.currentThread().getName() + " execute run ...");\n    });\n    // \u7b2c\u4e00\u4e2a\u4efb\u52a1\u5982\u679c\u5728 1\u79d2\u5185\u6ca1\u6709\u5b8c\u6210\n    // \u4f1a\u7b49\u5f85\u7b2c\u4e8c\u4e2a\u4efb\u52a1\uff0c\u76f4\u5230\u7b2c\u4e8c\u4e2a\u4efb\u52a1\u5b8c\u6210\n    // \u540c\u65f6\u6267\u884c\u7684\u4efb\u52a1\u53ea\u6709\u4e00\u4e2a\n    // \u5982\u679c\u6267\u884c\u7684\u4efb\u52a1\u65f6\uff0c\u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u8be5\u4efb\u52a1\u4f1a\u7ec8\u6b62\n    scheduledThreadPoolExecutor.scheduleWithFixedDelay(() -> {\n        System.out.println(Thread.currentThread().getName() + " scheduleWithFixedDelay task 1 run ... " + getSecond(start));\n        try {\n            TimeUnit.SECONDS.sleep(2);\n            //throw new RuntimeException("error");\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }, 0, 1, TimeUnit.SECONDS);\n    // ScheduledThreadPoolExecutor scheduledThreadPoolExecutor2 = new ScheduledThreadPoolExecutor(1);\n    // scheduledThreadPoolExecutor2.scheduleWithFixedDelay(() -> {\n    // \u5982\u679c\u4f7f\u7528\u540c\u4e00\u4e2a ScheduledThreadPoolExecutor \u6267\u884c\u4e8c\u4e2a scheduleWithFixedDelay \u4efb\u52a1\n    // \u7b2c\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u8fc7\u957f\uff0c\u4e5f\u4f1a\u5f71\u54cd\u7b2c\u4e8c\u4e2a\u4efb\u52a1\u7684\u6267\u884c\u5468\u671f\n    scheduledThreadPoolExecutor.scheduleWithFixedDelay(() -> {\n        System.out.println(Thread.currentThread().getName() + " scheduleWithFixedDelay task 2 run ... " + getSecond(start));\n        try {\n            TimeUnit.SECONDS.sleep(1);\n            //throw new RuntimeException("error");\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }, 0, 1, TimeUnit.SECONDS);\n    // \u7b2c\u4e00\u4e2a\u4efb\u52a1\u5982\u679c\u5728 1\u79d2\u5185\u6ca1\u6709\u5b8c\u6210\n    // \u4e0b\u4e00\u4e2a\u4efb\u52a1\uff0c\u4f1a\u7ee7\u7eed\u6267\u884c\n    // \u540c\u65f6\u6267\u884c\u7684\u4efb\u52a1\u4f1a\u8d85\u8fc72\u4e2a\n    // \u5982\u679c\u6267\u884c\u7684\u4efb\u52a1\u65f6\uff0c\u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u8be5\u4efb\u52a1\u4f1a\u7ec8\u6b62\n    scheduledThreadPoolExecutor.scheduleAtFixedRate(() -> {\n        try {\n            TimeUnit.SECONDS.sleep(1);\n            //throw new RuntimeException("error");\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println(Thread.currentThread().getName() + " scheduleAtFixedRate task run ...");\n    }, 0, 1, TimeUnit.SECONDS);\n}\nprivate static long getSecond(long start) {\n    return TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis() - start);\n}\n')))}d.isMDXComponent=!0},140:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),d=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(t),h=a,p=b["".concat(u,".").concat(h)]||b[h]||s[h]||l;return t?r.a.createElement(p,i(i({ref:n},o),{},{components:t})):r.a.createElement(p,i({ref:n},o))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<l;o++)u[o]=t[o];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);