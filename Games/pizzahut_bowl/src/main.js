var windowW,windowH,mousedown={x:0,y:0};
var maskTimer=3000;//第一次出现的四种特殊元素，出现的蒙蔽停留的时间
var barY=20;//积分的y坐标
var isaction = 0;//是否在动画的时候转屏幕
var sf ;
function _trackEvent(bt,ev,er){
	ga('send', 'event', bt, ev, er);
};
var sh=$(window).height();
var sw=$(window).width();
function hengshuping(){
  if(window.orientation==180||window.orientation==0){
		$(".hp-tips").hide(0); 
		$(".logo").css({"z-index":11});
		//alert("isaction"+isaction);
		if(isaction == 3){
			/*$(".index-btn").show(0);
			$(".top").show(0);
			$(".qq").addClass("moveLR");
			$(".line-1").addClass("swing");
			$(".wan").css({"top":"34%"}).attr("class","wan animated infinite wobbleY7");
			$(".dz-1").hide();
			$(".dz-2").hide();
			$(".dz-3").hide();
			$(".dz-4").hide();*/
			clearInterval(sf);
			indexAction();
			game.init();
			//$('#bg')[0].play();
		}
  }
  if(window.orientation==90||window.orientation==-90){
		$(".hp-tips").show(0);
		$(".logo").css({"z-index":9999});
		isaction = 3;
				   
  }
}
if(sw>sh){
	$(".hp-tips").show(0); 
	isaction = 3;
	$(".logo").css({"z-index":9999});
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

function indexAction(){
	isaction = 4;
	var ww = $(window).width();
	var wh = $(window).height();
	var pw = 1018*wh/1040;
	var st = 0;
	
	$(".index").animate({backgroundPosition:-(pw-ww)/1.1},{duration:5000,complete:function(){
		$(".index-btn").show(0);
		$(".top").show(0);
		$(".qq").addClass("moveLR");
		$(".line-1").addClass("swing");
		$(".wan").css({"top":"34%"}).attr("class","wan animated infinite wobbleY7");
		$(".dz-1").hide();
		$(".dz-2").hide();
		$(".dz-3").hide();
		$(".dz-4").hide();
		clearInterval(sf);
		isaction = 0;
	}});
	var lefts1=0,lefts2=0,lefts3=0,lefts4=0,lefts5=0;
	lefts1 = $(".wan").css("left");
	lefts2 = $(".dz-1").css("left","15%");
	lefts3 = $(".dz-2").css("left","34%");
	lefts4 = $(".dz-3").css("left","84%");
	lefts5 = $(".dz-4").css("left","58%");
	sf = setInterval(function(){
		if(st>=8){
			st=0;
		}
		if(parseInt(lefts1)>100){
			$(".index-btn").show(0);
			$(".top").show(0);
			$(".qq").addClass("moveLR");
			$(".line-1").addClass("swing");
			
		}
		if(parseInt(lefts1)<40){
			lefts1=parseInt(lefts1)+2;
		}
		
		lefts2=parseInt(lefts2)+5;
		lefts3=parseInt(lefts3)+5;
		lefts4=parseInt(lefts4)+5;
		lefts5=parseInt(lefts5)+5;
		$(".wan").css({"left":lefts1});
		$(".dz-1").css({"left":lefts2});
		$(".dz-2").css({"left":lefts3});
		$(".dz-3").css({"left":lefts4});
		$(".dz-4").css({"left":lefts5});
		st++;
	},80);
	
}
var setRandom={
	fruitTypeArr:[],//生成的金币类型都放入该数组中，取完后再生成一次，每次生成都是随机的，但是按照一定比例的
	fruitTypeArrLen:10,//fruitTypeArr这个数组一次生成多少个随机的special金币
	pageConfigIndex:0,//记录读到fruitTypeArr中的第几个金币了
	fruitRatio:[0.1,0.2,0.2,0.3,0.2],//每种金币的比例//饮品4,手指5,南瓜6，巫婆7，pizza8
	topTime:1500,//从游戏开始间隔多久fruitTypeArr中第一个special金币开始下落,
	accelerate:20,//从topTime开始进行递减，即金币越落越快
	bottomTime:1000,//但不会无限制的减下去，有个下限
	SpecialFruitTime:1500,//记录当前special金SSS币下落的时间间隔，初始是topTime
	init:function(){
		//入口，完成所有功能的入口
		setRandom.fruitTypeArr=[];
		setRandom.pageConfigIndex=0;
		var len=setRandom.fruitTypeArrLen;
		for(var i=0;i<setRandom.fruitRatio.length;i++){
			if(setRandom.fruitRatio[i]<1){
				setRandom.fruitRatio[i]=Math.floor(setRandom.fruitRatio[i]*len);
			}
			for(var j=0;j<setRandom.fruitRatio[i];j++){
				var value=i+4;
				var index=Math.floor(Math.random()*len);
				setRandom.putArr(index,value);
			}
		}
		console.log(setRandom.fruitTypeArr);
	},
	putArr:function(index,value){
		var len=setRandom.fruitTypeArrLen;
		if(setRandom.fruitTypeArr[index]){
			index=Math.floor(Math.random()*len);
			setRandom.putArr(index,value);
		}else{
			setRandom.fruitTypeArr[index]=value;
		}
	},
	getSpecialFruit:function(){
		setRandom.pageConfigIndex++;
		
		
		var arr=setRandom.fruitTypeArr;
		
		var index=setRandom.pageConfigIndex;
		var type=arr[index];
		
		var timer=setRandom.getSpecialFruitTime();
		//console.log(type);
		index=index+1;
		if(index>=arr.length){
		//console.log("chongx")
			setRandom.init();
		}
		fruitConfig={
			timer:timer,
			fruitType:type
		};
	},
	getSpecialFruitTime:function(){
		var current=setRandom.SpecialFruitTime;
		if(current<1000){
			setRandom.SpecialFruitTime=1000;
		}else{
			setRandom.SpecialFruitTime=current-setRandom.accelerate;
		}
		return current;
	}
};
setRandom.init();
//初始化金币的类型
var fruitConfig={
	timer:setRandom.topTime,
	fruitType:setRandom.fruitTypeArr[0]
};





(function(){
	
	window.onload = function(){
		if(window.orientation){
			if(window.orientation==180||window.orientation==0){
				game.init();
			}
		}else{
			game.init();
		}
		
	};

var game = {
	//所有需要的图片
	res:[
	{id:"splash",size:149,src:"img/bean3-bg.png"},
	/*{id:"btns",size:70,src:"img/startGame.png"},
	{id:"otherBtn1",size:66,src:"img/rank.png"},
	{id:"otherBtn2",size:61,src:"img/special.png"},*/
	{id:"bg",size:86,src:"img/bean5-bg.jpg"},
	{id:"bar",size:11,src:"img/point-img.png"},
	//{id:"cloud",size:100,src:"img/clouds.png"},
	{id:"Boy_b",size:33,src:"img/bowl-b.png"},
	//{id:"Boy_s",size:12,src:"img/bowl-s.png"},
	{id:"Num",size:43,src:"img/num.png"},
	//{id:"title",size:64,src:"img/bean3-text.png"},
	//{id:"rule",size:3,src:"img/bean3-button4.png"},
	{id:"fruit1",size:20,src:"img/coin/1.png"},
	{id:"fruit2",size:22,src:"img/coin/2.png"},
	{id:"fruit3",size:25,src:"img/coin/3.png"},
	{id:"fruit4",size:23,src:"img/coin/4.png"},
	{id:"fruit5",size:30,src:"img/coin/yp.png"},
	{id:"fruit6",size:31,src:"img/coin/sz.png"},
	{id:"fruit7",size:31,src:"img/coin/ng.png"},
	{id:"fruit8",size:24,src:"img/coin/wp.png"},
	{id:"fruits",size:330,src:"img/coin/allbgs.png"},
	{id:"num1", size:23, src:"img/num1.png"},
	{id:"num2", size:5, src:"img/num2.png"},
	{id:"life",size:100,src:"img/life.png"},
	{id:"btn",size:100,src:"img/btn2.png"},
	{id:"witchLight1",size:23,src:"img/bean7-light.png"},
	{id:"witchLight2",size:28,src:"img/bean6-light.png"}
	/*,
	{id:"gameover",size:162,src:"img/bean9-over-bg.png"}*/
	],
	container:null,
	width:0,
	height:0,
	frames:0,
	params:null,
	
	//fps:40,
	//fps:4000,
	timer: null,
	eventTarget: null,
	state: null,
	
	Boy: null,
	fruits: [],
	maxfruits: 9,
	receivefruit: null,
	
	time: {total:120, current:120},
	score: 0,
	scoreNum: null,
	lifeNum:null
};

var STATE = 
{
	MENU: 0,
	MAIN: 1,
	OVER: 2
};

var ns = window.game = game;
function bindEvent(){
	$(".allFirstTips .tip .close").bind("touchstart",function(){
		isCloseMask=true;
		fruitTime=(new Date()).getTime()-fruitTime;
		//console.log("现在这个计时是当前时间减去多少秒之前:"+fruitTime);
		game.timer.paused=false;
		game.pauseBtn.gotoAndStop(0);
		//game.stage.step();
		$("#outer").show(0);
		$(".allFirstTips").hide(0);
		/*var tip=type+"Tip";
		$(".allFirstTips ."+tip).hide(0);*/
	});
}

game.init = function(){
	windowW=$(window).width();windowH=$(window).height();
	//加载进度信息
	var container = Q.getDOM("container");
	container.style.width=windowW+'px';
	container.style.height=windowH+'px';
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.width = container.clientWidth + "px";
	div.style.left = "0px";
	div.style.top = (container.clientHeight >> 1) + "px";
	div.style.textAlign = "center";
	div.style.color = "#fff";
	div.style.font = Q.isMobile ?  'bold 16px 黑体' : 'bold 16px 宋体';
	div.style.textShadow = Q.isAndroid ? "0 2px 2px #111" : "0 2px 2px #ccc";
	container.appendChild(div);
	this.loader = div;
	//隐藏导航栏
	setTimeout(game.hideNavBar,10);
	if(Q.supportOrient)
    {
        window.onorientationchange = function(e)
        {
            game.hideNavBar();
            game.calcStagePosition();
        };
    }    
	bindEvent();
	//加载图片信息
	var loader = new Q.ImageLoader();
	loader.addEventListener("loaded",Q.delegate(this.onLoadLoaded,this));
	loader.addEventListener("complete",Q.delegate(this.onCompleteLoaded,this));
	loader.load(this.res);
};

//正在加载
game.onLoadLoaded = function(e){
    this.loader.innerHTML = "万圣节将至，必胜客的碗正在……<br>";
	this.loader.innerHTML += "(" + Math.round(e.target.getLoadedSize()/e.target.getTotalSize()*100) + "%)";
	if(getQueryString('bid')!=null && getQueryString('bid')!=""){
		
	}else{
		$("#stu").html('<audio controls="controls" loop="loop" id="bg"><source src="js/mp3.mp3?v=2" type="audio/mpeg"></audio>');
	}
	
		
	//alert("111")
};
//加载完成
game.onCompleteLoaded = function(e){
	e.target.removeAllEventListeners();
	Q.getDOM("container").removeChild(this.loader);
	this.loader = null;
	this.images = e.images;
	//初始化一些类
	ns.Fruit.init();
	ns.Num.init();
	this.StartUp();
	if(getQueryString('bid')!=null && getQueryString('bid')!=""){
		
	}else{
		var sh=$(window).height();
		var sw=$(window).width();
		if(sw>sh){
			//$(".hp-tips").show(0); 
			//$(".logo").css({"z-index":9999});
		}else{
			$(".index").show();
			indexAction();
			$('#bg')[0].play();
		}
		$('#bg')[0].play();
		
	}
	
	
};

//取出对应图片
game.getImage = function(id){
	//console.log(id)
	return this.images[id].image;
};

//移动
function BoyMove(){
	var me=game;
	var x=me.Boy.x;
	var y=me.Boy.y-10;
	var BoyHeight=me.Boy.getCurrentHeight();
	var BoyWidth=me.Boy.getCurrentWidth();;
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
	me.Boy.x=x;
	me.Boy.y=y;
}



//启动游戏
game.StartUp = function(){
//手持设备的特殊webkit设置
	if(Q.isWebKit && Q.supportTouch)
	{
		document.body.style.webkitTouchCallout = "none";
		document.body.style.webkitUserSelect = "none";
		document.body.style.webkitTextSizeAdjust = "none";
		document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
	}
	
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
	this.maxfruits = this.params.fruits || 9;
    this.time = this.params.time ? {total:this.params.time, current:this.params.time} : {total:120, current:120};
    this.fps = this.params.fps || 40;
	//this.fps =4;
	//初始化 context
	this.context = null;
	if(!this.params.canvas){
		var canvas = Quark.createDOM("canvas", {width:this.width, height:this.height, style:{position:"absolute"}});
		this.container.appendChild(canvas);
		this.context = new Quark.CanvasContext({canvas:canvas});
	}else{
		this.context = new Quark.DOMContext({canvas:container});
	}
	
	//创建舞台
	this.stage = new Q.Stage({context:this.context, width:this.width, height:this.height, update:Q.delegate(this.update,this)});
	
	
	
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
		var obj = me.stage.getObjectUnderPoint(x, y);
		
		//if(obj&&obj.id.indexOf("Boy")>-1){
			//console.log(ne)
			if(ne.type=="touchstart"){
				mousedown={
					x:ne.pageX-me.Boy.x,
					y:ne.pageY-me.Boy.y
				};
			}else if(ne.type=="touchmove"){
				var x=ne.pageX-mousedown.x;
				var y=ne.pageY-mousedown.y;
				var BoyHeight=me.Boy.getCurrentHeight();
				var BoyWidth=me.Boy.getCurrentWidth();;
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
				me.Boy.x=x;
				me.Boy.y=y;
			}
			
		//}
		if(obj != null)
		{
			me.eventTarget = obj;
			if(obj.useHandCursor) me.context.canvas.style.cursor = "pointer";
			if(obj.onEvent != null) obj.onEvent(ne);
		}
		
	}, true, true);
	
	
	

	
	
	
	
	
	
	//按键事件
	em.register(document, ["keydown", "keyup"], function(e)
	{
		var key = e.keyCode;
		if(me.state != STATE.MAIN) return;		
		if(key == Q.KEY.LEFT)
		{
			if(e.type == "keydown") me.Boy.leftmove(-1);
			else if(e.type == "keyup") me.Boy.stopMove();
		}else if(key == Q.KEY.RIGHT)
		{
			if(e.type == "keydown") me.Boy.rightmove(1);
			else if(e.type == "keyup") me.Boy.stopMove();
		}else if(key == Q.KEY.UP)
		{
			//console.log("up")
			if(e.type == "keydown") me.Boy.topmove(1);
			else if(e.type == "keyup") me.Boy.stopMove();
		}else if(key == Q.KEY.DOWN)
		{
			//console.log("down")
			if(e.type == "keydown") me.Boy.bottommove(1);
			else if(e.type == "keyup") me.Boy.stopMove();
		}
	}, false, false);
	
	
	//显示开始菜单
	this.showMenu();
	
};

//显示开始菜单
game.showMenu = function(){
	$("#outer").hide();
	$(".index").show();
	$(".index .go")[0].onclick=function(){
		//初始化计时器
		var timer = new Q.Timer(1000/game.fps);
		timer.addListener(game.stage);
		timer.start();
		
		game.timer = timer;
		game.stage.removeAllChildren();
		$("#outer").show();
		$(".index").hide();
		game.context.canvas.style.cursor = "";
		if(game.state == STATE.MENU)
		{				
			trace("game start");
			fruitTime=(new Date()).getTime();
			setTimeout(Q.delegate(game.showMain, game), 100);
		}
		_trackEvent("Go", "click", "HomePage");
	}
	/*if(this.splash == null){
		//启动画面
		var splash = new Q.Bitmap({id:"splash", image:this.getImage("splash"),rect:[0,0,640,1040],targetRect:[0,0,windowW,windowH]});
		//var splash = new Q.Bitmap({id:"splash", image:this.getImage("splash")});
		splash.scaleX = splash.scaleY = 1.0;
		splash.x = 0;
		splash.y = 0;
		this.splash = splash;
		
		
		//title
		var title = new Q.Bitmap({id:"title", image:this.getImage("title"),rect:[0,0,397,283]});
		title.scaleX = title.scaleY = 0.5;
		
		title.x = windowW*0.5-title.width*0.25;
		title.y = windowH*0.1;
		this.title = title;
		//活动规则
		//rule
		var rule = new Q.Button({id:"rule", image:this.getImage("rule")});
		rule.setUpState({rect:[0,0,139,46]});
		//playBtn.setOverState({rect:[0,50,374,97]});
		rule.scaleX = rule.scaleY = 0.5;
		
		rule.x = windowW*0.5-rule.width*0.25;
		rule.y = windowH*0.8;
		this.rule = rule;
		rule.onEvent = function(e){
			Q.Button.prototype.onEvent.call(this, e);
			if(e.type == "mouseup" || e.type == "touchend")
			{
				alert("活动规则")
			}
		}
		
		//开始按钮
		var playBtn = new Q.Button({id:"playBtn", image:this.getImage("btns"),downState:{rect:[0,97,374,97]},overState:{rect:[0,0,374,97]}});
		playBtn.scaleX = playBtn.scaleY = 0.5;
		//playBtn.setUpState({rect:[0,0,374,97]});
		//playBtn.setDownState({rect:[0,97,374,97]});
		playBtn.x = windowW*0.5-playBtn.width*0.25;
		playBtn.y = windowH*0.3+playBtn.height*0.25;
		this.playBtn = playBtn;
		playBtn.onEvent = function(e){
			Q.Button.prototype.onEvent.call(this, e);
			if(e.type == "mouseup" || e.type == "touchend")
			{
				game.stage.removeAllChildren();
				game.context.canvas.style.cursor = "";
				if(game.state == STATE.MENU)
				{				
					trace("game start");
					fruitTime=(new Date()).getTime();
					setTimeout(Q.delegate(game.showMain, game), 100);
					//Q.delegate(game.showMain, game);
				}
			}else if(e.type == "mouseout"){
				game.context.canvas.style.cursor = "";
			}
		}
		

		
		//查看排行
		var otherBtn1 = new Q.Button({id:"otherBtn1", image:this.getImage("otherBtn1"),downState:{rect:[0,97,374,97]},overState:{rect:[0,0,374,97]}});
		otherBtn1.scaleX = otherBtn1.scaleY = 0.5;
		//otherBtn1.setUpState({rect:[0,0,374,96]});
		//otherBtn1.setOverState({rect:[0,0,374,96]});
		otherBtn1.x = windowW*0.5-otherBtn1.width*0.25;
		otherBtn1.y = windowH*0.3+otherBtn1.height*1;
		this.otherBtn1 = otherBtn1;
		otherBtn1.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this,e);
		if(e.type == "mouseup" || e.type == "touchend"){
			//alert("查看排行")
			$(".step").hide(0);
			$(".total-rank-list").show(0);
		}else if(e.type == "mouseout"){
		}
		}
		
		//特权秒杀
		var otherBtn2 = new Q.Button({id:"otherBtn2", image:this.getImage("otherBtn2"),downState:{rect:[0,97,374,97]},overState:{rect:[0,0,374,97]}});
		otherBtn2.scaleX = otherBtn2.scaleY = 0.5;
		//otherBtn2.setUpState({rect:[0,0,374,96]});
		//otherBtn2.setOverState({rect:[0,0,374,96]});
		otherBtn2.x = windowW*0.5-otherBtn2.width*0.25;
		otherBtn2.y = windowH*0.3+otherBtn2.height*1.75;
		this.otherBtn2 = otherBtn2;
		otherBtn2.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this,e);
		if(e.type == "mouseup" || e.type == "touchend"){
			alert("特权秒杀")
		}else if(e.type == "mouseout"){
		}
		}
		
		
	}*/
	this.state = STATE.MENU;
	//this.stage.addChild(this.splash,this.title,this.rule,this.playBtn,this.otherBtn1,this.otherBtn2);
};

//游戏主场景
game.showMain = function(e){
	var me = this;var StartLifeNum = this.StartLifeNum =1;
	this.state = STATE.MAIN;
	//if(this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);
	if(this.bg == null){
	    //新的游戏背景
		var bg = new Q.Bitmap({id:"bg",image:this.getImage("bg"),rect:[0,0,640,1040],targetRect:[0,0,windowW,windowH]});
		//bg.scaleX = bg.scaleY = 1.0;
		bg.x = 0;
		bg.y = 0;
		this.bg = bg;
		
		//游戏bar
		var bar = new Q.Bitmap({id:"bar",image:this.getImage("bar")});
		bar.x = windowW-bar.width*0.8;
		//bar.y = bar.height*1.2;
		bar.y=barY;
		bar.scaleX =0.8;
		bar.scaleY = 0.8;
		this.bar = bar;
		
		//Boy1小碗
		/*var boy = new Boy({id:"Boy_s",rect:[0,0,100,57]});//,targetRect:[0,0,windowW*0.3,windowW*0.3]
		boy.scaleX = boy.scaleY =1;
		this.smallBoy=boy;		
		this.eventTarget=boy;
		this.Boy = boy;*/
		
		//大碗
		var Boy2 = new Boy({id:"Boy_b",rect:[0,0,197,112]});
		Boy2.scaleX = Boy2.scaleY =0.5;
		//Boy2.alpha=0;
		Boy2.alpha=1;
		//this.bigBoy=Boy2;
		this.Boy=Boy2;
		this.Boy.scaleDir="up";
		this.eventTarget=this.Boy;
		
		//创建下落的水果数组
		this.createFruit();
		this.createShine();
		
		//{id:"witchLight2",size:161,src:"img/bean8-light.png"}
	}
	//初始化Boy
	this.Boy.x = windowW*0.5 - this.Boy.getCurrentWidth()*0.5;
	this.Boy.y = windowH - this.Boy.getCurrentHeight() - 10;
	//this.bigBoy.x = this.width - this.bigBoy.getCurrentWidth() >> 1;
	//this.bigBoy.y = this.height - this.bigBoy.getCurrentHeight() - 48;
	mousedown={
		x:this.Boy.x ,
		y:this.Boy.y
	};
	this.Boy.dirX = 0;
	this.Boy.dirY = 0;
	this.Boy.avatar.gotoAndStop("static");
	
	//this.bigBoy.dirX = 0;
	//this.bigBoy.dirY = 0;
	//this.Boy.avatar.gotoAndStop("static");
	//暂停按钮
    var pauseBtn = new Q.Button({id:"pauseBtn", image:this.getImage("btn")});
	pauseBtn.setUpState({rect:[61,0,61,59]});
	pauseBtn.setDownState({rect:[0,0,61,59]});
	pauseBtn.regX = pauseBtn.width >> 1;
	pauseBtn.regY = pauseBtn.height >> 1;
	pauseBtn.x = 25;
	pauseBtn.y = 25;
	this.pauseBtn = pauseBtn;
	pauseBtn.onEvent = function(e){
	Q.Button.prototype.onEvent.call(this, e);
	if(game.state == STATE.OVER) return;
	if(e.type == "mouseup" || e.type == "touchend")
	{
		game.context.canvas.style.cursor = "";
		var paused = game.timer.paused;
		game.timer.paused = !paused;
		pauseBtn.gotoAndStop( paused ? 0 : 1);
		game.stage.step();
	}else if(e.type == "mouseout"){
		game.context.canvas.style.cursor = "";
	}
	}
	
	//初始化得分
	var StartScore = new Q.DisplayObjectContainer({id:"StartScore",width:153,height:37});
	var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
	var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
	var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
	var num3 = new ns.Num({id:"num3", type:ns.Num.Type.num2});
	var num4 = new ns.Num({id:"num4", type:ns.Num.Type.num2});
	var num5 = new ns.Num({id:"num5", type:ns.Num.Type.num2});
	num0.x = 130;
	num1.x = 160;
	num2.x = 190;
	num3.x = 220;
	num4.x = 250;
	num5.x = 280;
	num0.alpha = 0;
	num1.alpha = 0;
	num2.alpha = 0;
	num3.alpha = 0;
	num4.alpha = 0;
	num5.alpha = 0;
	StartScore.addChild(num0, num1, num2, num3,num4,num5);
	StartScore.scaleX =  0.5;
	StartScore.scaleY = 0.5;
	//StartScore.x = 60;
	//StartScore.y = 425;
	StartScore.x = windowW-this.bar.width*0.7-20;
	//StartScore.y = this.bar.height*1.2;
	StartScore.y =barY+3;
	this.StartScore = StartScore
	

	this.stage.addChild(this.bg,this.bar,this.Boy,this.StartScore);//this.Life,this.pauseBtn,,this.StartHighestScore//,this.smallBoy,this.bigBoy,
	this.stage.addChild(this["witchShine0"],this["witchShine1"],this["witchShine2"],this["witchShine3"],this["witchShine4"]);
	this.stage.addChild(this["witchShine5"],this["witchShine6"],this["witchShine7"],this["witchShine8"],this["witchShine9"]);
	this.stage.addChild(this["witchShine10"],this["witchShine11"],this["witchShine12"],this["witchShine13"],this["witchShine14"]);
	this.stage.addChild(this["witchShine15"],this["witchShine16"],this["witchShine17"],this["witchShine18"],this["witchShine19"]);
	//var arr=[];
	for(var i = 0; i < this.fruits.length; i++) 
	{
		var fruit = this.fruits[i];
		fruit.reset(ns.Fruit.getRandomType("custom"));
		//巫婆从大变小
		/*if(fruit.type.tag=="witch"){
			fruit.scaleX=fruit.scaleY=0.5;
			fruit.y=fruit.y-40;
		}*/
		this.stage.addChild(fruit);
	}
};
game.createShine=function(){
	//var shines=[];
	for(var i=0;i<10;i++){
		var witchShine= new Q.Bitmap({id:"witchLight"+i,image:this.getImage("witchLight1")});
		witchShine.alpha=0;
		this["witchShine"+i]=witchShine;
		this["witchShine_Used"+i]=false;
	}
	for(var i=10;i<20;i++){
		var witchShine= new Q.Bitmap({id:"witchLight"+i,image:this.getImage("witchLight2")});
		witchShine.alpha=0;
		this["witchShine"+i]=witchShine;
		this["witchShine_Used"+i]=false;
	}
}
game.shines=[];
//创建下落的水果数组
game.createFruit = function(){
  var minX = 100, maxX = this.width-100, minY = -500, maxY = 0;
  //console.log(this.maxfruits)
  //this.maxfruits=1;
  for(var i = 0; i <this.maxfruits; i++)
	  {
		  var index=i+1;
		  var fruit = new ns.Fruit({id:"fruit"+index, type:ns.Fruit.getRandomType("custom")});
		
		  fruit.bouncing=true;
		  fruit.fading=false;
		  fruit.scaleX = fruit.scaleY = 0.25;
		  this.fruits.push(fruit);
	  }
};
var firstMove=false;
var sortFruitFunc = function(a, b){return a.y < b.y;}
//检测水果和篮子是否碰撞
game.checkCollide = function(){
var me = this, fruits = this.fruits, Boy = this.Boy;
	//根据水果的Y轴排序
	fruits.sort(sortFruitFunc);
	for(var i = 0; i < fruits.length; i++)
	{
		var fruit = fruits[i];
		if(fruit.fading || fruit.bouncing) continue;
		
		var gapH = fruit.getCurrentWidth(), gapV = fruit.getCurrentHeight();
		if(fruit.type.tag == "witch"){
			 gapH = fruit.getCurrentWidth()*0.375;
		}
		
		
		var dx = fruit.x - Boy.x, dy = Boy.y - fruit.y + 20;		
		//console.log("1:"+(dx <= (Boy.getCurrentWidth()-gapH)));
		//console.log("2:"+(dx >= -10));
		//console.log("3:"+ (Boy.y));
		//console.log("4:"+ (fruit.y));
		//console.log("4:"+ (gapV));//37.5
		//console.log("4:"+ (dy >= -gapV-20));
		//console.log("-gapV-20:"+(-gapV-20));
		if(!firstMove){
			BoyMove();
			firstMove=true;
		}
		var isHit=(dx <= (Boy.getCurrentWidth()-gapH)&& dx >= -10 && dy <= gapV && dy >= -gapV-10);
		
		if(isHit)
		{
			
			fruit.getCollide();//判断是否装到红苹果，装一个加一个生命值知道加满生命值
			this.addScore(fruit,fruit.currentScore);
			if(fruit.updatelife){
				this.StartLifeNum += fruit.addLife;
				if(this.StartLifeNum < 0){
			    this.StartLifeNum = 0
				}else if(this.StartLifeNum >5){
				this.StartLifeNum = 5;
				}
			    this.updateLife();
			}
		}
	}
};

//加积分
game.addScore = function(fruit,score){
	if(score!=0){
		var me = this;var str = Math.abs(score).toString(), len = str.length;
		if(this.addNum == null)
		{
			var container = new Q.DisplayObjectContainer({id:"addNum", width:140, height:65});
			var plus = new ns.Num({id:"plus", type:ns.Num.Type.num1});
			if(score < 0){
				plus.setValue(10);
			}else{
				plus.setValue(11);
			}
			plus.x = 25;
			var num = new ns.Num({id:"num", type:ns.Num.Type.num1});
			num.x = 55;
			var num2 = new ns.Num({id:"num2",type:ns.Num.Type.num1});
			num2.x = 85;
			var num3 = new ns.Num({id:"num3",type:ns.Num.Type.num1});
			num3.x = 115;
			container.addChild(plus,num,num2,num3);
			this.addNum = container;
		}	
		this.stage.addChild(this.addNum);
		if(score < 0){
			this.addNum.getChildAt(0).setValue(10);
		}else{
			this.addNum.getChildAt(0).setValue(11);
		}
		if(len > 1){
			this.addNum.getChildAt(1).setValue(Number(str[0]));
			this.addNum.getChildAt(2).setValue(Number(str[1]));
			this.addNum.getChildAt(3).setValue(Number(str[2]));
		}else{
			this.addNum.getChildAt(1).setValue(0);
			this.addNum.getChildAt(2).setValue(Math.abs(score));
		}
		if(fruit.x >= 280){
		this.addNum.x = fruit.x - 120;
		}else{
		this.addNum.x = fruit.x - 60;
		}
		this.addNum.y = fruit.y - 45;
		this.addNum.alpha = 1;
		
		this.score += score;
		//console.log("score:"+this.score);
		this.updateScore();
		
		/*Q.Tween.to(me.addNum, {me.addNum.alpha:0}, {time:500});*/
		setTimeout(function(){me.addNum.alpha = 0;},500);
	}
	
};

//更新总得分
game.updateScore = function()
{
	this.stage.removeChild(this.StartScore);
	if(this.scoreNum == null)
	{
		var container = new Q.DisplayObjectContainer({id:'score', width:153, height:37});
		var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
		var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
		var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
		var num3 = new ns.Num({id:"num3", type:ns.Num.Type.num2});
		var num4 = new ns.Num({id:"num4", type:ns.Num.Type.num2});
		var num5 = new ns.Num({id:"num5", type:ns.Num.Type.num2});
		num0.x = 130;
		num1.x = 160;
		num2.x = 190;
		num3.x = 220;
		num4.x = 250;
		num5.x = 280;
		num0.alpha=0;// = 130;
		num1.alpha = 0;
		num2.alpha = 0;
		num3.alpha = 0;
		num4.alpha = 0;
		num5.alpha = 0;
		container.addChild(num0, num1, num2, num3,num4,num5);
		container.scaleX =  0.5;
		 container.scaleY = 0.5;
		//container.x = 60;
		//container.y = 425;
		container.x = windowW-this.bar.width*0.7-20;
		//container.y = this.bar.height*1.2;
		container.y=barY+3;
		this.scoreNum = container;
	}	
	this.stage.addChild(this.scoreNum);
	var str = this.score.toString(), len = str.length;
	str = len >6 ? str.slice(len - 6) : str;
	var newStr=str;
	while(newStr.length < 6) newStr = "0" + newStr;
	//str = "0" + str;
	//console.log("str:"+str);
	//console.log("newStr.length:"+newStr.length);
	len=str.length;
	//console.log("len:"+len);
	var newLen=newStr.length;
	for(var i = 0; i < newLen; i++)
	{
		if(i>=(newLen-len)){
			//console.log("i,alpha0:"+i);
			this.scoreNum.getChildAt(i).alpha=1
		}else{
			//console.log("i,alpha1:"+i);
			this.scoreNum.getChildAt(i).alpha=0;
		}
		//ame.scoreNum.getChildAt(0).alpha=0
		this.scoreNum.getChildAt(i).setValue(Number(newStr[i]));
	}
	/*****************/
	/****************/
}

//更新生命值
game.updateLife = function()
{
		if(this.StartLifeNum == 0){
			//console.log("生命值0")
			game.gameOver();
		}
}

//游戏结束
game.gameOver = function()
{
	//trace("game over:", this.score);
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
	//console.log("111")
	//保存最高分
	if(this.score<0){
		this.score=0;
	}
	this.SaveHighestScore(this.score);
	$("#outer").hide(0);	
	$(".bean9_result_text").html(this.score);
	$(".gameover").show(0);
	$("#bg")[0].pause();
	//提交当前玩的分数
	$.cookie('score', this.score);
	game.Savescore(this.score,$.cookie('openid'));	
	
}
game.Savescore = function(score,openid,callback){
	var md = $.md5('s2d8-s'+openid+score+'#m1d5*');
	$.post("bsk/index.php/api/dealScore",{"score":score,"openid":openid,"md":md},function(data){
		if(data!=null){
			var datas = JSON.stringify(data);
			//alert(datas);
			if(data.status == 1){
				//提交成功
				//callback();
				$(".gameover .bean9_num").text(data.maxsore);
				$(".lq-gift").attr('data-nid',data.nid);
				$(".lq-gift").attr('data-jid',data.data.id);
				$(".lq-gift").attr('data-code',data.data.code);
				$(".getprize").attr('data-nid',data.nid);
				$(".getprize").attr('data-no',data.no);
				var jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage','hideMenuItems'];
				var share_timeline_data;
				var share_app_data;
				if(data.no < 10000){
					$(".tips-letter img").attr("src","img/letters-tips_04.png");
					share_timeline_data = {
						'title': '求加分，万圣节 | 不可错过的“Trick or Treat”，餐券用车券全在碗里等你，拿碗来接！',
						'link': 'http://halloween.pizzahut.com.cn/index.html?bid='+data.nid,
						'img_url': 'http://halloween.pizzahut.com.cn/img/share1.png',
						'callbackfunc': function(){
							//alert("分享成功!" );
							//_mz_evt('1001058', '100029231');
							$('.share-after').show(0);
							_trackEvent("Share-Success", "click", "Share");
							
						}
					};
					share_app_data = {
						'title': '求加分↓↓↓和我一起拼手速！',
						'desc': '万圣节 | 不可错过的“Trick or Treat”，餐券用车券全在碗里等你，拿碗来接！',
						'link': 'http://halloween.pizzahut.com.cn/index.html?bid='+data.nid,
						'img_url': 'http://halloween.pizzahut.com.cn/img/share1.png',
						'callbackfunc': function(){
							$('.share-after').show(0);
							//alert("分享成功!");
							//_mz_evt('1001058', '100029231');
							_trackEvent("Share-Success", "click", "Share");
						}
					};	
				}else{
					$(".tips-letter img").attr("src","img/letters-tips1.png");
					share_timeline_data = {
						'title': '求加分，万圣节 | 不可错过的“Trick or Treat”，餐券用车券全在碗里等你，拿碗来接！',
						'link': 'http://halloween.pizzahut.com.cn/index.html?bid='+data.nid,
						'img_url': 'http://halloween.pizzahut.com.cn/img/share1.png',
						'callbackfunc': function(){
							//alert("分享成功!" );
							//_mz_evt('1001058', '100029231');
							$('.share-after').show(0);
							_trackEvent("Share-Success", "click", "Share");
							
						}
					};
					share_app_data = {
						'title': '求加分↓↓↓和我一起拼手速！',
						'desc': '万圣节 | 不可错过的“Trick or Treat”，餐券用车券全在碗里等你，拿碗来接！',
						'link': 'http://halloween.pizzahut.com.cn/index.html?bid='+data.nid,
						'img_url': 'http://halloween.pizzahut.com.cn/img/share1.png',
						'callbackfunc': function(){
							$('.share-after').show(0);
							//alert("分享成功!");
							//_mz_evt('1001058', '100029231');
							_trackEvent("Share-Success", "click", "Share");
						}
					};		
				}
				
				
				var hide_menu_list = [];
				construct('wx6173eb6085accfec' , window.location, jsApiList, share_timeline_data, share_app_data,hide_menu_list); 

			}
		}
	},"json");
}

//保存最高分
game.SaveHighestScore = function(score){
    var key = "highestscore";
	if(Q.supportStorage)
	{
		/*if(localStorage.hasOwnProperty(key)){*/
			var oldscore = Number(this.getScore());
			var newscore = Number(score);
			if(oldscore < newscore){
				localStorage.removeItem(key);
				localStorage.setItem(key, score);
		}
		/*}else{
			localStorage.setItem(key, score);
		}*/
		
	}
}

//取得分
game.getScore = function(){
	var key = "highestscore";
	if(Q.supportStorage)
	{
		if(localStorage.getItem("highestscore") == null){
			return 0;
		}else{
			var score = Number(localStorage.getItem("highestscore"));
			return score;
		}
	}
	return 0;
}



//更新舞台
game.update = function(timeInfo)
{
	this.frames++;
	if(this.state == STATE.MAIN){
		this.UpdateBoy();
		this.UpdateFruit();	/*alert(this.fruits[0].type.id+"|"+this.fruits[1].type.id+"|"+this.fruits[2].type.id+"|"+this.fruits[3].type.id+"|"+this.fruits[4].type.id);*/
	}
};

//更新小人的位置
game.UpdateBoy = function(){
	if(this.Boy.dirX != 0){
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
    }
	this.checkCollide();
};

//更新水果
game.UpdateFruit = function()
{
	var me = this, fruits = this.fruits, minBottom = 80;
	for(var i = 0; i < fruits.length; i++)
	{
		var fruit = me.fruits[i];
		if(fruit.delay > 0)
		{
			fruit.delay -=1;//Math.floor(Math.random()*10);
			continue;
		}
		//console.log(fruit.currentSpeedY)
		if(fruit.currentSpeedY > 0) fruit.currentSpeedY +=fruit.accelerateSpeed;
		else if(fruit.currentSpeedY < 0) fruit.currentSpeedY += 0.15;
		fruit.y += fruit.currentSpeedY;
		fruit.x += fruit.currentSpeedX;
		
		if(fruit.bouncing)
		{
			if(fruit.currentSpeedY >= 0)
			{
				fruit.stopBounce();
				return;
			}
		}
		if(fruit.y > me.height - minBottom && fruit.alpha > 0)
		{
			fruit.alpha-=0.1;
			fruit.fading = true;
		}
		if(fruit.y >= me.height*1.2||fruit.alpha==0)
		{
			var i=fruit.shineIndex;
			fruit.shineIndex=undefined;
			game["witchShine_Used"+i]=false;
			game["witchShine_Used"+i].x=game["witchShine_Used"+i].y=-200;
			game["witchShine_Used"+i].alpha=0;
		
			
			//game["witchShine"+i].alpha=0;
			//console.log(((new Date()).getTime()-fruitTime)>=fruitConfig.timer)
			//topTime
			if(((new Date()).getTime()-fruitTime)>=fruitConfig.timer){
				//console.log("时间："+fruitConfig.timer);
				//console.log("类型："+fruitConfig.fruitType)
				var tt=ns.Fruit.getRandomType("special",fruitConfig.fruitType);
				fruitTime=(new Date()).getTime();
				
				setRandom.getSpecialFruit();
			}else{
				var tt=ns.Fruit.getRandomType("custom");
			}
			fruit.reset(tt);
			
			//巫婆从大变小
			/*if(fruit.type.tag=="witch"){
				fruit.scaleX=fruit.scaleY=0.5;
				fruit.y=fruit.y-40;
			}*/
		}
		
	}
}

//隐藏浏览器顶部导航
game.hideNavBar = function()
{
    window.scrollTo(0, 1);
}

//重新计算舞台stage在页面中的偏移
game.calcStagePosition = function()
{
    if(game.stage) 
    {
        var offset = Q.getElementOffset(game.stage.context.canvas);
        game.stage.stageX = offset.left;
        game.stage.stageY = offset.top;
    }
}
})();