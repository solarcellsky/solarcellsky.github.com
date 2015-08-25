// JavaScript Document

//components
Crafty.c("Animation",{
	animateTo:function(prop,during,callback){
		this.tween(prop,during);
		this.bind("TweenEnd",callback);
		return this;
	},
	stop:function(prop){
		this.clearTimer().cancelTween(prop);
		return this;
	},
	clearTimer:function(index){
		if(typeof(index)=='undefined' || typeof(index)=== undefined || typeof(index)==null){
			for(var i=0;i<this.timeId.length;i++){
				clearTimeout(this.timeId[i]);
			}
		}else{
			clearTimeout(this.timeId[index]);
		}
		return this;
	},
	timeId:[],
	toggle:function(orgprop,tarprop,during,interval){
		var _=this;
		interval= interval || 25;
		_.animateTo(tarprop,during,function(){});
		_.delay(function(){
			_.animateTo(orgprop,during,function(){});
		},during+25);
		_.delay(function(){
			_.toggle(orgprop,tarprop,during,interval);
		},during*2+25+interval);
		return _;
	},
	toggleTimes:function(orgprop,tarprop,during,interval,times){
		var _=this;
		interval= interval || 25;
		_.animateTo(tarprop,during,function(){});
		_.delay(function(){
			_.animateTo(orgprop,during,function(){});
		},during+25);
		var t= (!!times &&times==1) ?( during*2+25+interval ):(during*2+25);
		_.delay(function(){
			_.toggleTimes(orgprop,tarprop,during,interval,times-1);
		},t);
		return _;
	},
	flipTimes:function(type,during,interval,times){
		//type = "X"、"Y"
		var _=this;
		interval= interval || 25;
		_.flip(type)
			.delay(function(){
				_.unflip(type);
			},during+25);
		var t= (!!times && times==1) ?( during*2+25+interval ):(during*2+25);
		_.delay(function(){
			_.flipTimes(type,during,interval,times-1);
		},t);
		return _;
	},
	loop:function(orgprop,tarprop,during,interval){
		var _=this;
		interval= interval || 25;
		_.animateTo(tarprop,during,function(){});
		_.delay(function(){
			_.attr(orgprop);
			_.loop(orgprop,tarprop,during,interval);
		},during+interval);
		return _;
	},
	init:function(){
		this.requires('2D,Canvas,Tween,Delay');
		return this;
	}
});

Crafty.c("clickButton",{
	beClearPause:true,
	clearPause:function(s){
		this.beClearPause=!!s;
		return this;
	},
	mouseClick:function(callback){
		var _=this;
		_.bind("Click",function(){
			if(_.beClearPause && Game.config.isPause){
				Crafty.pause();
				Game.config.isPause=false;
				if(Game.btnObj){
					Game.btnObj.reel("fm1").attr({x:Crafty.viewport.width-160});
				}
			}
		});
		_.bind("Click",callback);
		return _;
	},
	init: function() {
		this.requires('2D,Canvas,Mouse');
		this.bind("MouseOver",function(e){
			Crafty.stage.elem.style.cursor="pointer";
		});
		this.bind("MouseOut",function(e){
			Crafty.stage.elem.style.cursor="default";
		});
		return this;
	},
	remove:function(){
		Crafty.stage.elem.style.cursor="default";
	}
});

//得分
Crafty.c("Coins",{
	score:0,
	pos:{x:0,y:0,w:201,h:58},
	entities:{bg:null,numeric:[]},
	setPos:function(opt){
		this.pos=opt;
		return this;
	},
	getScore:function(){
		return this.score;
	},
	coinsImg:[
		"./asset/images/coins/icon_10.png",
		"./asset/images/coins/icon_11.png",
		"./asset/images/coins/icon_12.png",
		"./asset/images/coins/icon_13.png",
		"./asset/images/coins/icon_14.png",
		"./asset/images/coins/icon_15.png",
		"./asset/images/coins/icon_16.png",
		"./asset/images/coins/icon_17.png",
		"./asset/images/coins/icon_18.png",
		"./asset/images/coins/icon_19.png"
	],
	build:function(n){
		if(typeof(n)=='number'){
			if(n>=99999){n=99999;}
			if(n<=0){n=0;}
			for(var j=0;j<this.entities.numeric.length;j++){
				if(!!this.entities.numeric[j]){
					this.entities.numeric[j].destroy();
					this.entities.numeric[j]=null;
				}
			}
			this.score=n;
			var arr=String(this.score).split("").reverse();
			var _x=this.pos.x,_y=this.pos.y;
			for(var i=0;i<arr.length;i++){
				var index=parseInt(arr[i]);
				this.entities.numeric[i]=
					Crafty.e("2D,Canvas,Image")
						.attr({x:_x+137-i*19,y:_y+22,z:6})
						.image(this.coinsImg[index]);
			}
		}
		return this
	},
	buildBg:function(){
		this.entities.bg=Crafty.e("2D,Canvas,Image")
			.attr(this.pos)
			.image("./asset/images/coins/coins.png").attr({z:5});
		return this;
	},
	update:function(n,s){
		if(!!s){
			this.pos=s;
			this.buildBg();
		}
		this.build(n);
		return this;
	},
	init:function(){
		this.requires('2D,Canvas,Image');
		return this;
	},
	remove :function(){
		for(var j=0;j<this.entities.numeric.length;j++){
			if(!!this.entities.numeric[j]){
				this.entities.numeric[j].destroy();
				this.entities.numeric[j]=null;
			}
		}
		if(!!this.entities.bg){
			this.entities.bg.destroy();
			this.entities.bg=null;
		}
	}
});
//计时器
Crafty.c("TimeLine",{
	time:Game.config.time,
	pos:{x:0,y:0,w:380,h:56},
	entities:{bg:null,timebg:null,timeS:null,timeobj:[]},
	getTimeVal:function(){
		return this.time;
	},
	//setPos:function(opt){
	//	this.pos=opt;
	//	return this;
	//},
	
	build:function(n){
		if(typeof(n)=='number'){
			if(n>=Game.config.time){n=Game.config.time;}else if(n<=0){n=0;}
			for(var j=0;j<this.entities.timeobj.length;j++){
				if(!!this.entities.timeobj[j]){
					this.entities.timeobj[j].destroy();
					this.entities.timeobj[j]=null;
				}
			}
			if(!!this.entities.timeS){
				this.entities.timeS.destroy();
				this.entities.timeS=null;
			}
			this.time=n;
			//var arr=String(this.time).split("").reverse();
			//alert(this.time);
			var _w=n/Game.config.time;
			//alert(_w);
			$('.timein').width(timew*_w);
			
		}
		return this;
	},
	update:function(n,s){
		if(!!s){
			this.pos=s;
			//this.buildBg();
		}
		this.build(n);
		return this;
	},
	begin:function(callback){
		var _=this;
		_.delay(function(){
			if(_.time-1<=0){
				if(typeof(callback)=='function'){
					callback(_);
				}
			}else{
				_.begin(callback);
			}
			_.update(_.time-1);
		},1000);
		return _;
	},

	init:function(){
		this.requires('2D,Canvas,Image,Animation,Delay');
		return this;
	},
	remove :function(){
		for(var j=0;j<this.entities.timeobj.length;j++){
			if(!!this.entities.timeobj[j]){
				this.entities.timeobj[j].destroy();
				this.entities.timeobj[j]=null;
			}
		}
		if(!!this.entities.timeS){
			this.entities.timeS.destroy();
			this.entities.timeS=null;
		}
		if(!!this.entities.timebg){
			this.entities.timebg.destroy();
			this.entities.timebg=null;
		}
		if(!!this.entities.bg){
			this.entities.bg.destroy();
			this.entities.bg=null;
		}
	}
});
//气泡 
//此组件还需要优化
// entities 没必要使用，可以用 this.attach 添加为子集
Crafty.c("Qipao",{
	assetItem:[
		"./asset/images/pao1.png",
		"./asset/images/pao2.png",
		"./asset/images/pao3.png",
		"./asset/images/pao4.png"
	],
	entities:[],
	maxItem:10,
	setMax:function(s){
		this.maxItem=s;
	},
	freshTime:10000,
	setFreshTime:function(t){
		this.freshTime=t;
		return this;
	},
	getEntitiesNum:function(clearArray){
		var temp=0;
		var array=this.entities;
		for(var i=0;i<array.length;i++){
			if(!!array[i]){
				temp+=1;
			}else if(clearArray){
				array.splice(i,1);
			}
		}
		return temp
	},
	build:function(){
		var _=this;
		var img=_.assetItem[Math.floor(Math.random()*_.assetItem.length)];
		var duaring=Math.floor(Math.random()*50)+10;
		var _x=Math.floor(Math.random()*(Crafty.viewport.width-Crafty.assets[img].width)),
			_y=Crafty.viewport.height-Math.floor(Math.random()*(Crafty.viewport.height*0.3))-70-Crafty.assets[img].height;
		var index=_.getEntitiesNum(true);
		var temp=Crafty.e("2D,DOM,Image,Delay,Tween")
				.attr({x:_x,y:_y,alpha:0,w:Crafty.assets[img].width,h:Crafty.assets[img].height})
				.image(img)
				//.animateTo({alpha:1},300)
				 .tween({alpha: 1}, 300)
				.delay(function(){
					temp.tween({y: 350,x:_x+(0.5-Math.random())*200}, (_y-350)*duaring)
					
					//temp.animateTo({y:350,x:_x+(0.5-Math.random())*200},(_y-350)*duaring)
						.delay(function(){
							temp.tween({y:330,alpha:0},20*duaring,function(){
								temp.destroy();
								_.entities[index]=null;
							});
						},(_y-350)*duaring);
				},500);
		_.entities[index]=temp;
		return _;
	},
	randomBegin:function(s){
		var _=this;
		s= s || 1;
		if(_.getEntitiesNum()<_.maxItem){
			for(var i=0;i<s;i++){
				_.delay(function(){
					_.build()
				},i*300+10);
			}
		}
		_.delay(function(){
			_.randomBegin(s);
		},_.freshTime);
		return this;
	},
	init:function(){
		this.requires('2D,Canvas,Image,Animation,Delay');
		return this;
	},
	remove :function(){
		for(var i=0;i<this.entities.length;i++){
			if(!!this.entities[i] && typeof(this.entities[i].destroy)=='function'){
				this.entities[i].destroy();
			}
		}
		this.entities=[];
		return this;
	}
});

//鱼
Crafty.c("Fish",{
	assetItem:[
		{img:"./asset/images/stage1/f_0.png",spos:"left",mysorce:5},
		{img:"./asset/images/stage1/f_1.png",spos:"right",mysorce:5}
	],
	
	entities:[],
	maxItem:10,
	setMax:function(s){
		this.maxItem=s;
		return this;
	},
	setItem:function(array){
		this.assetItem=array;
		return this;
	},
	freshTime:10000,
	setFreshTime:function(t){
		this.freshTime=t;
		return this;
	},
	getEntitiesNum:function(clearArray){
		var temp=0;
		var array=this.entities;
		for(var i=0;i<array.length;i++){
			if(!!array[i]){
				temp+=1;
			}else if(clearArray){
				array.splice(i,1);
			}
		}
		return temp
	},
	createItem:function(opt,callback){
		var temp=null;
		var img=opt.img,fwd=opt.spos,sorce=opt.mysorce;
		var _x,_y,duaring,dx,dy,$x,$y;
		var iw=Crafty.assets[img].width,ih=Crafty.assets[img].height,vw=Crafty.viewport.width,vh=Crafty.viewport.height;
		switch(fwd){
			case "left":
				_x=Math.floor((0.5-Math.random())*vw)-iw;
				_y=180+Math.floor(Math.random()*(vh-280-70-ih));
				dx=300;//速度
				dy=_y;
				$x=-20;//鱼出来的x坐标
				$y=-100;//鱼出来的y坐标
				break;
			case "right":
				_x=Math.floor((0.5+Math.random())*(vw));
				_y=280+Math.floor(Math.random()*(vh-280-70-ih));
				dx=0;//Math.random()*320-iw;
				dy=_y;
				$x=0;
				$y=-100;
				break;
			case "top":
				_x=Math.floor((Math.random())*(vw-100))+50;
				_y=280+Math.floor(Math.random()*(vh-280-70-ih)/2);
				dx=Math.floor((Math.random())*(vw-100));
				dy=vh-180-70-ih+ Math.floor(Math.random()*180);
				$x=0;
				$y=80;
				break;
			case "bottom":
				_x=Math.floor((Math.random())*(vw-100))+50;
				_y=280+Math.floor((Math.random() +1)*(vh-280-70-ih)/2);
				dx=Math.floor((Math.random())*(vw-100));
				dy=280+Math.floor(Math.random()*100);
				$x=0;
				$y=-80;
				break;
			case "left-top":
				_x=Math.floor((0.5-Math.random())*(vw));
				_y=280+Math.floor(Math.random()*(vh-280-70-ih)/2);
				dx=300;
				dy=_y+Math.floor(Math.random()*(vh-_y));
				$x=-20;
				$y=50;
				break;
			case "left-bottom":
				_x=Math.floor((0.5-Math.random())*(vw));
				_y=200+Math.floor((Math.random() +1)*(vh-280-70-ih)/2);
				dx=200;
				dy=280+Math.floor(Math.random()*(_y-280));
				$x=100;
				$y=-50;
				break;
			case "right-top":
				_x=Math.floor((Math.random()+1)*(vw)/2);
				_y=280+Math.floor(Math.random()*(vh-280-70-ih)/2);
				dx=0;
				dy=_y+Math.floor(Math.random()*(vh-_y));
				$x=0;
				$y=50;
				break;
			case "right-bottom":
				_x=Math.floor((Math.random()+1)*(vw)/2);
				_y=220+Math.floor((Math.random() +1)*(vh-280-70-ih)/2);
				dx=0;
				dy=280+Math.floor(Math.random()*(_y-280));
				$x=-50;
				$y=-50;
				break;
			default:
				_x=Math.floor((Math.random()*2-0.5)*(vw));
				_y=280+Math.floor(Math.random()*(vh-280-70-ih));
				dx=Math.floor(Math.random()*(vw-100))+10;
				dy=280+Math.floor(Math.random()*(vh-280-70-ih));
				$x=0;
				$y=0;
				break;
		}
		//temp=Crafty.e("2D,Canvas,Image,Animation,Delay,Collision")
		//		.attr({x:_x,y:_y,alpha:0,z:2,w:iw,h:ih})
		//		.image(img)
		//		.animateTo({alpha:1},300)
		//		.delay(function(){
		//			temp.animateTo({x:dx,y:dy},Math.floor(3000*(1+Math.random())),function(){
		//				temp.animateTo({alpha:0,x:dx+$x,y:dy+$y},250)
		//					.delay(callback,250);
		//			});
		//		},500);
				
		temp=Crafty.e("2D,DOM,Image,platform,Delay,Tween,SpriteAnimation,Collision")
				.attr({x:_x,y:_y,alpha:1,z:2,w:iw,h:ih})
				.image(img)
				//.animateTo({alpha:1},300)
				.delay(function(){
					temp.tween({x:dx,y:dy},Math.floor(3000*(1+Math.random())),function(){
					//alert('a');
						temp.tween({alpha:0,x:dx+$x,y:dy+$y},250)
							.delay(callback,250);
					});
				},500)
				
				.bind("TweenEnd", function() {
				
				temp.tween({alpha:0,x:dx+$x,y:dy+$y},250)
							.delay(callback,250);
             // tweenMode = !tweenMode;
             // if (tweenMode)
             //  // this.tween({x: 100, y: 200}, 2000);
			 //  alert(a);
             // else
             //   this.tween({x: 450, y: 150}, 2000);
			 //alert('a');
            });
				
		
		temp.mysorce=sorce;
		return temp;
	},
	build:function(callback){
		var _=this;
		var _item=_.assetItem[Math.floor(Math.random()*_.assetItem.length)];
		var index=_.getEntitiesNum(true);
		var temp=_.createItem(_item,function(){
				_.detach(this);
				this.destroy();
			});
		if(temp && typeof(temp.onHit)=='function'){
			temp.onHit('Solid',callback);
		}
		_.attach(temp);
		return _;
	},
	randomBegin:function(callback,s){
		var _=this;
		if(!!s){_.maxItem=s};//s是鱼共存数
		var curTotal=_._children.length;
		if(curTotal<_.maxItem){
			for(var i=0;i<(_.maxItem-curTotal);i++){
				_.delay(function(){
					_.build(callback)
					//alert('a')
				},i*200+10);
			}
		}
		_.delay(function(){
			_.randomBegin(callback,s);
		},_.freshTime);
		return this;
	},
	init:function(){
		this.requires('2D,Canvas,Image,Animation,Delay');
		return this;
	},
	remove :function(){
		for(var i=0;i<this.entities.length;i++){
			if(!!this.entities[i] && typeof(this.entities[i].destroy)=='function'){
				this.entities[i].destroy();
			}
		}
		this.entities=[];
		return this;
	}
});
//水草 、怪物
Crafty.c("Monsters",{
	assetItem:[
		{img:"./asset/images/stage1/cao1.png",prop:"rotate",mysorce:-5}
	],
	maxItem:4,
	freshTime:10000,
	setFreshTime:function(t){
		this.freshTime=t;
		return this;
	},
	setMax:function(s){
		this.maxItem=s;
		return this;
	},
	setItem:function(array){
		this.assetItem=array;
		return this;
	},
	createItem:function(opt,callback){
		var img=opt.img,anType=opt.prop,sorce=opt.mysorce;
		var _x=Math.floor(Math.random()*(Crafty.viewport.width-Crafty.assets[img].width)),
			_y=440+Math.floor(Math.random()*(Crafty.viewport.height-440-135-Crafty.assets[img].height));
		var _t=Math.floor(5000*(1+Math.random()));
		var temp=Crafty.e("2D,Canvas,Image,Animation,Delay,Collision")
					.attr({x:_x,y:_y,alpha:0,z:2,w:Crafty.assets[img].width,h:Crafty.assets[img].height})
					.image(img)
					.animateTo({alpha:1},300)
					.delay(function(){
						temp.origin("center")
							.animateTo({y:290},_t,function(){
								temp.animateTo({alpha:0,y:280},250)
									.delay(callback,250);
							});
					},500);
		temp.mysorce=sorce;
		return temp;
	},
	build:function(callback){
		var _=this;
		var _item=_.assetItem[Math.floor(Math.random()*_.assetItem.length)];
		var temp=_.createItem(_item,function(){
				_.detach(this);
				this.destroy();
			});
		if(temp && typeof(temp.onHit)=='function'){
			temp.onHit('Solid',callback);
		}
		_.attach(temp);
		return _;
	},
	randomBegin:function(callback,s){
		var _=this;
		if(!!s){_.maxItem=s};
		var curTotal=_._children.length;
		if(curTotal<_.maxItem){
			for(var i=0;i<(_.maxItem-curTotal);i++){
				_.delay(function(){
					_.build(callback)
				},i*200+10);
			}
		}
		_.delay(function(){
			_.randomBegin(callback,s);
		},_.freshTime);
		return this;
	},
	init:function(){
		this.requires('2D,Canvas,Image,Animation,Delay,Collision');
		return this;
	},
	remove :function(){
	}
});

//捞网
Crafty.c("FishingNet",{
	yuwang:null,
	kuangzi:null,
	ableLao:false,
	timeId:null,
	buildBg:function(callback){
		var _=this;
		var temp=Crafty.e("2D,Canvas,Animation,SpriteAnimation,Wang") //(Crafty.viewport.width-383)/2+90 ,(Crafty.viewport.height-239)/2
				//.attr({x:218,y:300,w:383,h:239,z:1})//
				.attr({x:130,y:300,w:199,h:249,z:1})//
				.reel('Playing',400,0,0,4)
				.bind("AnimationEnd",callback);
				//.animate("Playing",loop);
		_.attach(temp);
		_.yuwang=temp;
		return temp;
	},
	buildBgup:function(callback){
		var _=this;
		var temp=Crafty.e("2D,Canvas,Animation,SpriteAnimation,Wangup") //(Crafty.viewport.width-383)/2+90 ,(Crafty.viewport.height-239)/2
				//.attr({x:218,y:300,w:383,h:239,z:1})//
				.attr({x:130,y:300,w:199,h:249,z:1,alpha:1})//
				.reel('Playing',400,0,0,4)
				.bind("AnimationEnd",callback);
				//.animate("Playing",loop);
		_.attach(temp);
		_.yuwang=temp;
		return temp;
	},
	//渔网的框
	buildKuang:function(){
		var _=this;
		var temp=Crafty.e("2D,Canvas,Color,Solid")
				//.attr({x:267,y:355,w:64,h:40,z:1}).color("transparent");//transparent
				.attr({x:180,y:355,w:64,h:40,z:1}).color("transparent");//transparent
		_.attach(temp);	
		_.kuangzi=temp;
		return _;
	},

	//   		(383 239)   -221;
	//  17,55   (128 80)  238 104

	init:function(){
		this.requires('2D,Canvas,Image,Animation,Delay,Draggable');
		this.attr({x:135,y:355,w:128,h:80,z:1});//
		this.buildBg();
		//this.buildBgup();
		return this;
	},
	remove :function(){
		clearTimeout(this.timeId);
		if(!!this.yuwang && typeof(this.yuwang.destroy)=='function'){
			this.yuwang.destroy();
		}
		if(!!this.kuangzi && typeof(this.kuangzi.destroy)=='function'){
			this.kuangzi.destroy();
		}
		this.kuangzi=null;
		this.yuwang=null;
	},
	
	
});

