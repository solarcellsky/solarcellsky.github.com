---
layout: post
category : lessons
tagline: ""
tags : [AngualarJS,javascript]
---
{% include JB/setup %}

##下载对应版本的MongoDB

##Manually Create a Windows Service for MongoDB

	echo logpath=D:\Program Files\MongoDB 2.6\data\log\mongod.log> "D:\Program Files\MongoDB 2.6\mongod.cfg"
	echo dbpath=D:\Program Files\MongoDB 2.6\data\db>> "D:\Program Files\MongoDB 2.6\mongod.cfg"

	sc.exe create MongoDB binPath= "\"D:\Program Files\MongoDB 2.6\bin\mongod.exe\" --service --config=\"D:\Program Files\MongoDB 2.6\mongod.cfg\"" DisplayName= "MongoDB 2.6 Standard" start= "auto"