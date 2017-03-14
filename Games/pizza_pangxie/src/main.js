//全局变量
//gotPangxieCount:被抓到的螃蟹的数量
//pangxieIndex:螃蟹的计数
var windowW,windowH,gotPangxieCount=0,pangxieIndex=0;

(function(){
	window.onload = function(){
		//daojishiMask
		game.init();
	};
	var STATE ={
		MENU: 0,
		MAIN: 1,
		OVER: 2
	};
	var game = {
		res:[
			{id:"bg",size:345,src:"img/gameBg.jpg"},
			{id:"pangxie1",size:28,src:"img/pangxie1.png"},
			{id:"pangxies",size:28,src:"img/allbgs1.png"},
			{id:"pangxie2",size:33,src:"img/pangxie1.png"},
			{id:"baskets",size:157,src:"img/allbgs2.png"},
			{id:"timeBar",size:3,src:"img/game_04.png"},
			{id:"scoreBar",size:2,src:"img/game_09.png"},
			{id:"num2",size:23,src:"img/num2.png"}
		],
		container:null,
		width:0,
		height:0,
		frames:0,
		timer: null,
		eventTarget: null,
		state: null,
		Boy: null,
		fruits: [],
		maxfruits:1,
		score: 0,
		scoreNum: null
	};
	var ns = window.game = game;
	game.init = function(){
		windowW=$(window).width();windowH=$(window).height();
		var container = Q.getDOM("container");
		container.style.width=windowW+'px';
		container.style.height=windowH+'px';
		var div = document.createElement("div");
		div.style.position = "absolute";
		div.style.width = container.clientWidth + "px";
		div.style.left = "0px";
		div.style.top = "0px";
		div.style.textAlign = "center";
		div.style.color = "#fff";
		div.style.font ='bold 16px 宋体';
		div.style.textShadow ="0 2px 2px #ccc";
		container.appendChild(div);
		this.loader = div;
		$(".star-buton")[0].onclick=function(){
			$(".daojishiMask").show(0);
			$(".pop").hide(0);
			$(".inter-img-1").show(0);
			$(".firstPage").hide(0);
			$("#outer").hide(0);
			/*setTimeout(function(){
				$(".pop").hide(0);
				$(".inter-img-2").show(0);
				countDown();
			},3000);*/
			if (window._tag) { 
			_tag.dcsMultiTrack('wt.event','nb1_pizza_start'); 
			} 

			
		};
		//加载图片信息
		var loader = new Q.ImageLoader();
		loader.addEventListener("loaded",Q.delegate(this.onLoadLoaded,this));
		loader.addEventListener("complete",Q.delegate(this.onCompleteLoaded,this));
		loader.load(this.res);
	};
	$(".sure").bind("click",function(){
		$(".pop").hide(0);
		$(".inter-img-2").show(0);
		countDown();
	});
	game.onLoadLoaded = function(e){
		this.loader.innerHTML = "正在加载资源中，请稍候...<br>";
		this.loader.innerHTML += "(" + Math.round(e.target.getLoadedSize()/e.target.getTotalSize()*100) + "%)";
	};
	game.onCompleteLoaded = function(e){
		e.target.removeAllEventListeners();
		Q.getDOM("container").removeChild(this.loader);
		this.loader = null;
		this.images = e.images;
		ns.Fruit.init();
		//$(".timeCount").hide();
		//ns.Num.init();
		this.StartUp();	
	};
	game.getImage = function(id){
		return this.images[id].image;
	};
	game.StartUp = function(){
		//初始化容器设置
		var colors = ["#000", "#000"];
		this.container = Q.getDOM("container");
		
		this.container.style.overflow = "hidden";
		this.container.style.background = "-moz-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
		this.container.style.background = "-webkit-gradient(linear, 0 0, 0 bottom, from("+ colors[0] +"), to("+ colors[1] +"))";
		this.container.style.background = "-o-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
		this.container.style.background = "-ms-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
		this.container.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr="+ colors[0] +", endColorstr="+ colors[1] +")";
		this.width=windowW;
		this.height=windowH;
		
		this.params = Q.getUrlParams();
		this.maxfruits = this.params.maxfruits || 7;
		this.time = this.params.time ? {total:this.params.time, current:this.params.time} : {total:120, current:120};
		this.fps = this.params.fps || 40;
		this.context = null;
		if(!this.params.canvas){
			var canvas = Quark.createDOM("canvas", {width:this.width, height:this.height, style:{position:"absolute",top:"0px",left:"0px"}});
			this.container.appendChild(canvas);
			this.context = new Quark.CanvasContext({canvas:canvas});
		}else{
			this.context = new Quark.DOMContext({canvas:container});
		}
		//创建舞台
		this.stage = new Q.Stage({context:this.context, width:this.width, height:this.height, update:Q.delegate(this.update,this)});
		//初始化计时器
		var timer = new Q.Timer(1000/this.fps);
		timer.addListener(this.stage);
		timer.start();
		this.timer = timer;
		
		//注册事件
		var me = this;
		var em = new Q.EventManager();
		var events = Q.supportTouch ? ["touchstart", "touchmove", "touchend"] : ["mousedown", "mousemove", "mouseup"];
		
		//鼠标事件
		em.register(this.context.canvas, events, function(e)
		{
			var ne = (e.touches && e.touches.length > 0) ? e.touches[0] : 
				(e.changedTouches && e.changedTouches.length > 0) ? e.changedTouches[0] : e;
			//确保touchend事件的类型正确
			if(Q.supportTouch) ne.type = e.type;

			var x = ne.pageX - me.stage.stageX, y = ne.pageY - me.stage.stageY;
			var obj = me.stage.getObjectUnderPoint(x, y,false,true);
			if(ne.type=="touchstart"){
				for(var i=0;i<obj.length;i++){
					if(obj[i].id.indexOf("pangxie")>-1){
						obj[i].mousedown={
							x:ne.pageX-obj[i].x,
							y:ne.pageY-obj[i].y
						};
						obj[i].touchStart=true;
					}
				}
				
			}else if(ne.type=="touchmove"){
				for(var i=0;i<obj.length;i++){
					if(obj[i].touchStart&&obj[i].id.indexOf("pangxie")>-1){
						obj[i].move=true;
					}
				}
				for(var i = 0; i < game.fruits.length; i++){
					var fruit = game.fruits[i];
					if(fruit.fading || fruit.bouncing) continue;
					if(fruit.move){
						var x=ne.pageX-fruit.mousedown.x;
						var y=ne.pageY-fruit.mousedown.y;
						var BoyHeight=fruit.getCurrentHeight();
						var BoyWidth=fruit.getCurrentWidth();;
						var bottom=y+BoyHeight;
						var right=x+BoyWidth;
						if(x<0){
							x=0;
						}
						if(y<0){
							y=0
						}
						if(bottom>windowH){
							y=windowH-BoyHeight;
						}
						if(right>windowW){
							x=windowW-BoyWidth;
						}
						fruit.gotoAndStop("gotyo");
						//obj.anzhe=true;
						if(fruit.currentSpeedX){
							fruit.speedX=fruit.currentSpeedX;
							fruit.speedY=fruit.currentSpeedY;
						}
						fruit.currentSpeedX=0;
						fruit.currentSpeedY=0;
						fruit.x=x;
						fruit.y=y;
					}else if(!fruit.hit&&fruit.speedX){
						console.log("木有按住螃蟹");
						fruit.move=false;
						fruit.gotoAndStop("static");
						fruit.currentSpeedX=fruit.speedX;
						fruit.currentSpeedY=fruit.speedY;
					}
				}
			}else if(ne.type=="touchend"){
				for(var i = 0; i < game.fruits.length; i++){
					var fruit = game.fruits[i];
					if(fruit.fading || fruit.bouncing) continue;
					fruit.move=false;
					fruit.touchStart=false;
					if(!fruit.hit&&fruit.speedX){
						console.log("木有按住螃蟹");
						
						fruit.gotoAndStop("static");
						fruit.currentSpeedX=fruit.speedX;
						fruit.currentSpeedY=fruit.speedY;
					}
				}
			}
			if(obj != null)
			{
				me.eventTarget = obj;
				if(obj.useHandCursor) me.context.canvas.style.cursor = "pointer";
				if(obj.onEvent != null) obj.onEvent(ne);
			}			
		}, true, true);
		
		//显示开始菜单
		this.showMenu();
		
	};
	
	//显示开始菜单
	game.showMenu = function(){
		this.state = STATE.MENU;
	};
	
	//游戏主场景
	game.showMain = function(e){
		$(".bg").hide();
		
		var me = this;
		this.state = STATE.MAIN;
		var bg = new Q.Bitmap({id:"bg",image:this.getImage("bg"),rect:[0,0,640,1040],targetRect:[0,0,windowW,windowH]});
		bg.x = 0;
		bg.y = 0;
		this.bg = bg;
		
		
		var boy1 = new Boy({id:"baskets",image:this.getImage("baskets"),rect:[0,0,762,182]});		
		this.Boy=boy1;
		//this.Boy.scaleX = this.Boy.scaleY =0.5;
		this.Boy.alpha=1;
		this.eventTarget=this.Boy;
		

		
		
		//抓住螃蟹的数量的容器bar
		/*var scoreBar = new Q.Bitmap({id:"scoreBar",image:this.getImage("scoreBar")});
		scoreBar.scaleX=scoreBar.scaleY=0.5;
		scoreBar.x = windowW-scoreBar.getCurrentWidth();
		scoreBar.y = windowH*0.1;
		this.scoreBar = scoreBar;
		//游戏bar
		var timeBar = new Q.Bitmap({id:"timeBar",image:this.getImage("timeBar")});
		timeBar.scaleX=timeBar.scaleY=0.5;
		timeBar.x = windowW-scoreBar.getCurrentWidth()-timeBar.getCurrentWidth();
		timeBar.y = windowH*0.1;
		this.timeBar = timeBar;
		
		//初始化计时器
		var timeContainer = new Q.DisplayObjectContainer({id:"timeContainer",width:200,height:48});
		var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
		var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
		var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
		num0.x=0;
		num1.x = 50;
		num2.x = 100;
		timeContainer.addChild(num0, num1, num2);
		timeContainer.scaleX = timeContainer.scaleY = 0.35;
		timeContainer.x = 60;
		timeContainer.y = 425;
		this.timeContainer = timeContainer
		
		//初始化抓到的螃蟹数
		var countContainer = new Q.DisplayObjectContainer({id:"countContainer",width:200,height:48});
		var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
		var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
		var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
		var num3 = new ns.Num({id:"num3", type:ns.Num.Type.num2});
		num1.x = 50;
		num2.x = 100;
		num3.x = 150;
		countContainer.addChild(num0, num1, num2, num3);
		countContainer.scaleX = countContainer.scaleY = 0.35;
		countContainer.x = 60;
		countContainer.y = 425;
		this.countContainer = countContainer;*/
		
		
		//创建下落的水果数组
		this.createFruit();
		//初始化Boy
		
		mousedown={
			x:this.Boy.x ,
			y:this.Boy.y
		};
		//this.Boy.dirX = 0;
		//this.Boy.dirY = 0;
		this.Boy.avatar.gotoAndStop("static");
		//this.Boy.scaleX=this.Boy.scaleY=1//=200;
		this.Boy.x = windowW*0.16;// - this.Boy.getCurrentWidth()*0.5;
		this.Boy.y = windowH*0.7;// - this.Boy.getCurrentHeight() - 10;
		this.Boy.width=265;
		this.Boy.height=182;
		//,this.timeBar,this.scoreBar,this.timeContainer,this.countContainer
		this.stage.addChild(this.bg,this.Boy);//,this.StartScorethis.bar,this.Life,this.pauseBtn,,this.StartHighestScore//,this.smallBoy,this.bigBoy,

		for(var i = 0; i < this.fruits.length; i++){
			var fruit = this.fruits[i];
			fruit.reset(ns.Fruit.getRandomType("custom"));
			this.stage.addChild(fruit);
		}
	};
	game.createFruit = function(){
		//pangxieIndex
		if(pangxieIndex==0){
			//this.maxfruits=1;
			for(var i = 0; i <this.maxfruits; i++){
				pangxieIndex=i+1;
				var fruit = new ns.Fruit({id:"pangxie"+pangxieIndex, type:ns.Fruit.getRandomType("custom")});
				fruit.bouncing=false;
				fruit.fading=false;
				fruit.scaleX = fruit.scaleY = 0.5;
				this.fruits.push(fruit);
			}
		}else{
			pangxieIndex=pangxieIndex+1;
			var fruit = new ns.Fruit({id:"pangxie"+pangxieIndex, type:ns.Fruit.getRandomType("custom")});
			fruit.bouncing=false;
			fruit.fading=false;
			fruit.scaleX = fruit.scaleY = 0.5;
			this.fruits.push(fruit);
			fruit.reset(ns.Fruit.getRandomType("custom"));
			this.stage.addChild(fruit);
		}
		
	};
	var sortFruitFunc = function(a, b){return a.y < b.y;}
	//检测水果和篮子是否碰撞
	game.checkCollide = function(){
		var me = this, fruits = this.fruits, Boy = this.Boy;
		fruits.sort(sortFruitFunc);
		for(var i = 0; i < fruits.length; i++)
		{
			var fruit = fruits[i];
			if(fruit.fading || fruit.bouncing||fruit.hit) continue;
			
			var gapH = fruit.getCurrentWidth(), gapV = fruit.getCurrentHeight();
			
			var dx = fruit.x - Boy.x, dy = Boy.y - fruit.y + 20;
			var isHit=(dx <= (Boy.getCurrentWidth()-gapH)&& dx >= -10 && dy <= gapV && dy >= -gapV-10);
			
			if(isHit)
			{
				
				//Boy.avatar.gotoAndPlay("one");
				fruit.getCollide();
				fruit.gotoAndStop("gotyo");
				fruit.hit=true;
				fruit.move=false;
				fruit.touchStart=false;
				console.log("hit")
				//fruit.dead=true;
				//fruit.fading=true;
				fruit.alpha += -1;
				//fruit.x=game.Boy.x+Math.random()*Boy.getCurrentWidth()*0.5;
				//fruit.y=game.Boy.y+Math.random()*Boy.getCurrentWidth()*0.5;
				gotPangxieCount++;
				$(".timeCount .gameScore .game-num").html(gotPangxieCount)
				if(gotPangxieCount>1){
					game.Boy.avatar.gotoAndStop("more");
				}else{
					game.Boy.avatar.gotoAndStop("one");
				}
				
				//console.log("dead")
				//3
				game.createFruit();
				//this.addScore(fruit,fruit.currentScore);
			}else{
				fruit.hit=false;
			}
		}
	};
	//更新舞台
	game.update = function(timeInfo){
		this.frames++;
		if(this.state == STATE.MAIN){
			this.UpdateBoy();
			this.UpdateFruit();
		}
	};
	//更新小人的位置
	game.UpdateBoy = function(){
		/*if(this.Boy.dirX != 0){
			this.Boy.x += this.Boy.currentSpeedX * this.Boy.dirX;
			
			if(this.Boy.x < 0) this.Boy.x = 0;
			else if(this.Boy.x > this.width - 100 ) this.Boy.x = this.width - 100;
			
		}
		if(this.Boy.dirY != 0){
			if(this.Boy.currentSpeedY){
				this.Boy.y += this.Boy.currentSpeedY * this.Boy.dirY;
			}
			if(this.Boy.y < 0) this.Boy.y = 0;
			else if(this.Boy.y > this.height - 100 ) this.Boy.y = this.height - 100;
		}*/
		this.checkCollide();
	};
	//更新水果
	game.UpdateFruit = function(){
		var me = this, fruits = this.fruits, minBottom = 80;
		for(var i = 0; i < fruits.length; i++){
			var fruit = me.fruits[i];
			if(fruit.delay > 0){
				fruit.delay -= 1;
				continue;
			}
			//console.log(fruit.currentSpeedY)
			if(fruit.currentSpeedX > 0){
				fruit.currentSpeedX +=fruit.accelerateSpeed;
			}else if(fruit.currentSpeedX < 0){
				fruit.currentSpeedX += 0.15;
			} 
			//fruit.y += fruit.currentSpeedY;
			fruit.x += fruit.currentSpeedX;
			if(fruit.bouncing){
				if(fruit.currentSpeedY >= 0){
					fruit.stopBounce();
					return;
				}
			}
			if(fruit.x > me.width && fruit.alpha > 0){
				fruit.alpha -= 0.1;
				fruit.fading = true;
			}
			if(fruit.x >= me.width){				
				var tt=ns.Fruit.getRandomType("custom");
				fruit.reset(tt);
			}
		}
	};
	
	
	//游戏结束
	game.gameOver = function(){
		trace("game over:", gotPangxieCount);
		this.timer.pause();
		if(this.context.context == null)
		{
			if(this.overlay == null)
			{
				this.overlay = Q.createDOM("div", {id:"overlay", style:
				{
					position: "absolute",
					width: this.width + "px",
					height: this.height + "px",
					background: "#000",
					opacity: 0.4
				}});
			}
			this.container.lastChild.appendChild(this.overlay);
		}
		this.state = STATE.OVER;
		//this.gameoverBtn.setState(Q.Button.state.OVER);
		//this.gameoverPng.setState(Q.Button.state.OVER);
		//this.stage.addChild(this.gameoverBtn,this.gameoverPng);
		//this.stage.step();
		//保存最高分
		//this.SaveHighestScore(this.score);
	}
	
	
	//3秒倒计时
	var count=3,countTimer=null;
	function countDown(){
		countTimer=setInterval(function(){
			if(count>1){
				count--;
				$(".daojishiMask .daojishi").html(count);
			}else{
				clearInterval(countTimer);
				$("#outer").show();
				$(".timeCount").show();
				$(".daojishiMask").hide();
				game.stage.removeAllChildren();
				game.context.canvas.style.cursor = "";
				if(game.state == STATE.MENU)
				{				
					trace("game start");
					fruitTime=(new Date()).getTime();
					gameCountDown();
					setTimeout(Q.delegate(game.showMain, game), 100);
				}
			}
		},1000);
	}
	
	
	var gametime=30,gameTimer=null;
	function gameCountDown(){
		gameTimer=setInterval(function(){
			if(gametime>=1){
				gametime--;
				$(".timeCount .gameCountDown .game-ms").html(gametime+"s");
				//.timeCount .gameScore .game-num
				//$(".daojishiMask .daojishi").html(count);
			}else{
				clearInterval(gameTimer);
				for(var i = 0; i < game.fruits.length; i++){
					var fruit = game.fruits[i];
					fruit.alpha+=-1;
				}
				$(".daojishiMask").show(0);
				$(".pop").hide(0);
				$(".inter-img-3").show(0);
				//$(".timeCount .timeOut").show();
				game.Boy.x=windowW*0.5-game.Boy.getCurrentWidth()*0.5;
				game.Boy.y=windowH*0.5-game.Boy.getCurrentHeight()*0.5;
				setTimeout(function(){
					$(".inter-img-3").animate({opacity:0},{duration:500,complete:function(){
						$(".music").removeClass("on");
						$("#bg")[0].pause();
						clearInterval(sf);
						$("#music").attr("src","img/music_off.png");
						game.gameOver();
						$(".daojishiMask").hide(0);
						$(".pizzhut").show(0);
						$("#outer").hide(0);
						setTimeout(function(){
							$(".racb-6").hide(0);
							$(".pizzh").show(0).addClass("cicle-1");
							setTimeout(function(){
								$(".pizzhut").hide(0);
								$(".result").show(0);
								$(".result .point").text(gotPangxieCount);
							},900);
						},1500);
						var jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage','hideMenuItems'];
						var share_timeline_data = {
							'title': '拼手速  烹美味  我是'+gotPangxieCount+'只战绩的捕蟹达人 不服来战！',
							'link': 'http://e.pizzahut.com.cn/bestpizzar/pizza/',
							'img_url': 'http://e.pizzahut.com.cn/bestpizzar/pizza/img/share.jpg',
							'callbackfunc': function(){
								//alert("分享成功!" );
								//_mz_evt('1001058', '100029231');
							}
						};
						var share_app_data = {
							'title': '鱼籽蟹肉比萨',
							'desc': '拼手速  烹美味  我是'+gotPangxieCount+'只战绩的捕蟹达人 不服来战！',
							'link': 'http://e.pizzahut.com.cn/bestpizzar/pizza/',
							'img_url': 'http://e.pizzahut.com.cn/bestpizzar/pizza/img/share.jpg',
							'callbackfunc': function(){
								//alert("分享成功!");
								//_mz_evt('1001058', '100029231');
							}
						};
						var hide_menu_list = [];
						construct('wx6173eb6085accfec' , window.location, jsApiList, share_timeline_data, share_app_data,hide_menu_list); 
						
					}});
					
				},1000);
			}
		},1000);
	}
})();





