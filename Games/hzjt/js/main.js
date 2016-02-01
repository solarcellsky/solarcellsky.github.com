
(function(){

window.onload = function()

{
	game.init();
	
};
	
var game = 
{
	res: [
	{id:"begin", size:372, src:"images/0begin.png"},
	 {id:"ends", size:372, src:"images/2end.png"},
    {id:"end", size:372, src:"images/1end.png"},
    {id:"help", size:372, src:"images/2help.png"},
	{id:"btns", size:77, src:"images/btns.png"},
    {id:"endbtns", size:151, src:"images/endbtns.png"},
    {id:"helpbtns", size:151, src:"images/helpbtns.png"},
    {id:"yxgzbtns", size:151, src:"images/yxgzbtns.png"},
	{id:"monkey", size:186, src:"images/monkey.png"},
	{id:"peach", size:151, src:"images/peach.png"},
	{id:"island", size:372, src:"images/island.png"},
	{id:"num1", size:15, src:"images/num1.png"},
	{id:"num2", size:29, src:"images/num2.png"},
	{id:"num3", size:300, src:"images/num3.png"},
	{id:"out", size:29, src:"images/out.png"},
	{id:"btn", size:29, src:"images/btn.png"},
	{id:"ready", size:29, src:"images/d.png"},
	{id:"ready1", size:29, src:"images/n_1.png"},
	{id:"ready2", size:29, src:"images/n_2.png"},
	{id:"ready3", size:29, src:"images/n_3.png"},
	{id:"go", size:29, src:"images/h.png"}
	],
	
	container: null,
	width: 0,
	height: 0,
	params: null,
	frames: 0,
	
	fps: 40,
	timer: null,
	eventTarget: null,
	state: null,
	
	monkey: null,
	peachs: [],
	maxPeachs: 5,
	collidedPeach: null,
	
	time: {total:60, current:60},      //TODO
	score: 0,
	scoreNum: null
};

var STATE = 
{
	MENU: 0,
	MAIN: 1,
	OVER: 2
};

var ns = window.game = game;

game.init = function()
{
	//加载进度信息
	var container = Q.getDOM("container");
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
    
    //隐藏浏览器顶部导航
    setTimeout(game.hideNavBar, 10);    
    if(Q.supportOrient)
    {
        window.onorientationchange = function(e)
        {
            game.hideNavBar();
            game.calcStagePosition();
        };
    }

    //加载图片素材
	var loader = new Q.ImageLoader();
	loader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
	loader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
	loader.load(this.res);
};

//加载进度条
game.onLoadLoaded = function(e)
{
	this.loader.innerHTML = "正在加载资源中，请稍候...<br>";
	this.loader.innerHTML += "(" + Math.round(e.target.getLoadedSize()/e.target.getTotalSize()*100) + "%)";
}

//加载完成
game.onLoadComplete = function(e)
{
	e.target.removeAllEventListeners();
	Q.getDOM("container").removeChild(this.loader);
	this.loader = null;
	
	this.images = e.images;
	//初始化一些类
    //console.log(this.stage);
	ns.Num.init();
	//启动游戏
	this.startup();
}

//获取图片资源
game.getImage = function(id)
{
	return this.images[id].image;
}

//启动游戏
game.startup = function()
{
	//手持设备的特殊webkit设置
	if(Q.isWebKit && Q.supportTouch)
	{
		document.body.style.webkitTouchCallout = "none";
		document.body.style.webkitUserSelect = "none";
		document.body.style.webkitTextSizeAdjust = "none";
		document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
	}
	
	//初始化容器设置
	var colors = ["#00c2eb", "#cbfeff"];
	this.container = Q.getDOM("container");
	this.container.style.overflow = "hidden";
	this.container.style.background = "-moz-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
	this.container.style.background = "-webkit-gradient(linear, 0 0, 0 bottom, from("+ colors[0] +"), to("+ colors[1] +"))";
	this.container.style.background = "-o-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
	this.container.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr="+ colors[0] +", endColorstr="+ colors[1] +")";
	this.width = this.container.clientWidth;
	this.height = this.container.clientHeight;

    //获取URL参数设置
	this.params = Q.getUrlParams();
  //  this.maxPeachs = this.params.peachs || 20;
  //  this.time = this.params.time ? {total:this.params.time, current:this.params.time} : {total:15, current:15};
  //  this.fps = this.params.fps || 40;
	
	//初始化context
	var context = null;
	if(this.params.canvas)
	{
		var canvas = Q.createDOM("canvas", {id:"canvas", width:this.width, height:this.height, style:{position:"absolute"}});
		this.container.appendChild(canvas);
		this.context = new Q.CanvasContext({canvas:canvas});
	}else
	{
		this.context = new Q.DOMContext({canvas:this.container});
	}
	
	//创建舞台
	this.stage = new Q.Stage({width:this.width, height:this.height, context:this.context, update:Q.delegate(this.update, this)});
    ns.Peach.init(this.stage.height);
	
	//初始化定时器
	var timer = new Q.Timer(1000 / this.fps);
	timer.addListener(this.stage);
	timer.addListener(Q.Tween);
	timer.start();
	this.timer = timer;
		
	//预加载背景音乐
   // var audio = new Quark.Audio("images/a.mp3", true, true, true);
   // this.audio = audio;

	//注册事件
	var me = this;
	var em = new Q.EventManager();
	var events = Q.supportTouch ? ["touchstart", "touchmove", "touchend"] : ["mousedown", "mousemove", "mouseup"];
	em.register(this.context.canvas, events, function(e)
	{
		var ne = (e.touches && e.touches.length > 0) ? e.touches[0] : 
			(e.changedTouches && e.changedTouches.length > 0) ? e.changedTouches[0] : e;
		//确保touchend事件的类型正确
        if(Q.supportTouch) ne.type = e.type;

		var x = ne.pageX - me.stage.stageX, y = ne.pageY - me.stage.stageY;
		var obj = me.stage.getObjectUnderPoint(x, y);
		
		//加载音效
	/*	if(me.audio && !me.audio.loading)
        {
            me.audio.loading = true;
            me.audio.load();
        }
	*/
		if(me.eventTarget != null && me.eventTarget != obj)
		{
			if(me.eventTarget.onEvent != null) me.eventTarget.onEvent({type:"mouseout"});
			me.eventTarget = null;
		}
		if(obj != null)
		{
			me.eventTarget = obj;
			if(obj.useHandCursor) me.context.canvas.style.cursor = "pointer";
			if(obj.onEvent != null) obj.onEvent(ne);
		}
		if(me.state == STATE.MAIN)
		{
            if (ne.type == "touchstart" && obj.id == "monkey"){
                me.monkey.mov = true;
            }
			if(ne.type == "touchmove")
			{
                if (me.monkey.mov){
                    me.monkey.x = ne.pageX - me.monkey.getCurrentWidth()/2;
                }
			}
            if (ne.type == "touchend"){
                me.monkey.mov = false;
                //game.audioobj.play();
            }
		}else if(me.state == STATE.OVER && ne.type != "mousemove" && ne.type != "touchmove")
		{
			//me.restart();
		}
	}, true, true);
	
	//按键事件
	em.register(document, ["keydown", "keyup"], function(e)
	{
		var key = e.keyCode;
		if(me.state != STATE.MAIN) return;		
		if(key == Q.KEY.A || key == Q.KEY.LEFT)
		{
			if(e.type == "keydown") me.monkey.move(-1);
			else if(e.type == "keyup") me.monkey.stopMove();
		}else if(key == Q.KEY.D || key == Q.KEY.RIGHT)
		{
			if(e.type == "keydown") me.monkey.move(1);
			else if(e.type == "keyup") me.monkey.stopMove();
		}
	}, false, false);
	
	//显示开始菜单
	this.showMenu();
    var audioobj=$("audio").get(0);
    this.audioobj = audioobj;
	game.audioobj.play();
   // setInterval(function(){game.audioobj.play();}, 3000);
};

//显示开始菜单
game.showMenu = function()
{	
	if(this.begin == null)
	{
		
		//启动画面
		var begin = new Q.Bitmap({id:"begin", image:this.getImage("begin")});
        var sX = this.stage.width/begin.width;
        var sY = this.stage.height/begin.height;
        begin.scaleX = sX;
        begin.scaleY = sY;
        begin.x = 0;
        begin.y = 0;
		this.begin = begin;
		 //TODOBEGIN
		//开始按钮
		var playBtn = new Q.Button({id:"playBtn", image:this.getImage("btn")}); //开始游戏
		playBtn.setUpState({rect:[0,0,229,229]});//0,135,195,70
		playBtn.setOverState({rect:[0,0,229,229]});
        playBtn.scaleX = sX*0.8;
        playBtn.scaleY = sY*0.8;
		playBtn.regX = playBtn.width >> 1;
		playBtn.regY = playBtn.height >> 1;
		playBtn.x = this.width * 0.5;
		playBtn.y = this.height * 0.35;
		this.playBtn = playBtn;
		playBtn.onEvent = function(e)
		{
			Q.Button.prototype.onEvent.call(this, e);
			if(e.type == "mouseup" || e.type == "touchend")
			{
				countImg.style.display="block";
				game.stage.removeAllChildren();
				game.context.canvas.style.cursor = "";
				if(game.state == STATE.MENU)
				{
						
				///looder.style.display="block";
				//bigan();
					trace("game start");
					setTimeout(Q.delegate(game.showMain, game),100);
				}else if(game.state == STATE.OVER)
				{
					trace("game restart");
					game.overlay.parentNode.removeChild(game.overlay);
					game.stage.removeAllChildren();			
					game.score = 0;
					game.time.current = game.time.total;
					game.timer.paused = false;
					// setTimeout(Q.delegate(game.showMain, game), 3000);
				}
			}else if(e.type == "mouseout")
			{
				game.context.canvas.style.cursor = "";
			}
		}
		//帮助提示
         var tip = new Q.Button({id:"yxgzBtn", image:this.getImage("btn")}); //活动规则
         tip.setUpState({rect:[60,310,115,115]});
        tip.scaleX = sX*0.88;
        tip.scaleY = sY*0.88;
        tip.x = 265*sX;
        tip.y =533*sY;
        tip.onEvent = function(e)
        {
            Q.Button.prototype.onEvent.call(this, e);
            if(e.type == "mouseup" || e.type == "touchend")
            {
                game.showHelp();
            }else if(e.type == "mouseout")
            {
                game.context.canvas.style.cursor = "";
            }
        }
		this.tip = tip;
	}
	
	this.state = STATE.MENU;
	this.stage.addChild(this.begin, this.playBtn, this.tip);
}

//游戏主场景
game.showMain = function()
{
	var me = this;
	//设置当前状态
	this.state = STATE.MAIN;
	
	if(this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);
	
	//启动重力感应
	//Q.Orientation.register(function(data){game.acceleration = data;});
	
	if(this.island == null)
	{
		
		//海岛
		var island = new Q.Bitmap({id:"island", image:this.getImage("island")});
        island.scaleX = this.stage.width/island.width;
        island.scaleY = this.stage.height/island.height;
		island.x = 0;
		island.y = 0;
		this.island = island;

		
		//创建猴子
		var monkey = new ns.Monkey({id:"monkey"});
		monkey.scaleX = monkey.scaleY = island.scaleX*0.8;
		this.monkey = monkey;
		//创建下落的球组
		// game.createPeachs();
		
	}
	
	//初始化
	this.monkey.x = this.width - this.monkey.getCurrentWidth() >> 1;
	this.monkey.y = this.height - this.monkey.getCurrentHeight() - 5;
	this.monkey.dirX = 0;
	this.monkey.dirY = 0;
	this.monkey.jumping = false;
	this.monkey.avatar.gotoAndPlay("idle");
	
	//添加所有对象到舞台
	this.stage.addChild(this.island);
	
	this.stage.addChild(this.monkey);

	//等待五秒开始游戏 BY:panel
	game.peachs = [];
	trace(game.peachs);
	this.readyCount()
	setTimeout(function(){
		game.createPeachs();
		for(var i = 0; i < game.peachs.length; i++)
			{
				var peach = game.peachs[i];
				peach.reset(ns.Peach.getRandomType(game.time.current));
				game.stage.addChild(peach);
			};
		//显示倒计时;
		game.showTimer();
		//显示得分
		game.updateScore();
		game.timer.paused = false;
	}, 5000);
	
}

//创建小球
game.createPeachs = function()
{
	var minX = 100, maxX = this.width-100, minY = -500, maxY = 0;
	//for(var i = 0; i < 1; i++)
	for(var i = 0; i < this.maxPeachs; i++)
	{
		var peach = new ns.Peach({id:"peach"+i, type:ns.Peach.getRandomType(this.time.current)});
		peach.scaleX = peach.scaleY = this.stage.width*0.8/this.island.width;
		peach.y=200;
		this.peachs.push(peach);
	}
}

//主更新方法
game.update = function(timeInfo)
{
	this.frames++;
	
	if(this.state == STATE.MENU)
	{
	}else if(this.state == STATE.MAIN)
	{
		this.updatePeachs();
		this.updateMonkey();
	}
}

//更新小球
game.updatePeachs = function()
{
	var me = this, peachs = this.peachs, minBottom = 80;
	for(var i = 0; i < peachs.length; i++)
	{
		var peach = me.peachs[i];
		if(peach.delay > 0)
		{
			peach.delay -= 1;
			continue;
		}
		if(peach.currentSpeedY > 0) peach.currentSpeedY += 0.05;
		else if(peach.currentSpeedY < 0) peach.currentSpeedY += 0.15;
		if(peach.type.score =="-5"){
			 peach.currentSpeedY +=6.5
			};
		peach.y += peach.currentSpeedY;
		peach.x += peach.currentSpeedX;

		if(peach.y > me.height - minBottom && peach.alpha > 0)
		{
			peach.alpha -= 0.1;
			peach.fading = true;
		}
		if(peach.y > me.height)
		{
			peach.reset(ns.Peach.getRandomType(this.time.current));
		}
	}
}

//更新猴子位置
game.updateMonkey = function()
{
	var acc = this.acceleration, dw = this.monkey.getCurrentWidth(), dh = this.monkey.getCurrentHeight();
	if(acc != null)
	{
		//重力感应移动
		var ax = acc.accelerationX, ay = acc.accelerationY, or = window.orientation;
        var av = (or%180) ? ay : ax;
        var dv = (or%180) ? (ax<0?1:-1) : (ay<0?-1:1);
        
		this.monkey.currentSpeedX = this.monkey.jumping ? 0.5*Math.abs(av) : this.monkey.currentSpeedX + 0.08*Math.abs(av);
		if(av*dv > 0.5)
		{
			this.monkey.x -= this.monkey.currentSpeedX*1;
			if(this.monkey.x < 0) this.monkey.x = 0;
		}else if(av*dv < -0.5)
		{
			this.monkey.x += this.monkey.currentSpeedX*1;
			if(this.monkey.x > this.width - dw) this.monkey.x = this.width - dw;
		}else
		{
			this.monkey.currentSpeedX = this.monkey.speedX;
		}
	}else if(this.monkey.dirX != 0)
	{
		//普通移动
		//this.monkey.currentSpeedX += 0.1;
		this.monkey.x += this.monkey.currentSpeedX * this.monkey.dirX;
		if(this.monkey.x < 0) this.monkey.x = 0;
		else if(this.monkey.x > this.width - dw) this.monkey.x = this.width - dw;
	}
    this.checkCollision()
}

var sortPeachFunc = function(a, b){return a.y < b.y;}

//海豚与球的碰撞检测
game.checkCollision = function()
{
	var me = this, peachs = this.peachs, monkey = this.monkey;
	//根据球的Y轴排序
	peachs.sort(sortPeachFunc);
	
	for(var i = 0; i < peachs.length; i++)
	{
		var peach = peachs[i];
		if(peach.fading) continue;
		var gapH = gapV = 0//peach.getCurrentHeight()*0.5; peach.getCurrentWidth()*0.5,
		var dx = peach.x - monkey.x, dy = monkey.y - peach.y;
		//trace(peach, monkey.y, peach.y, gapV, peach.x, monkey.x, gapH);
		
		if(dx <= monkey.getCurrentWidth()+gapH && dx >= 0 && dy <= gapV && dy >= -gapV-100)
		{
			this.addScore(peach, peach.currentScore);
            peach.y += 1000;
			return true;
		}
	}
	return false;
}

//得分
game.addScore = function(peach, score)
{
	//if(this.addNum == null)
	//{
		var container = new Q.DisplayObjectContainer({id:"addNum", width:100, height:65});
		var plus = new ns.Num({id:"plus", type:ns.Num.Type.num1});
		if (score>=0){
            plus.setValue(11);
        }else{
            plus.setValue(10);
        }
		container.addChild(plus);
		var num = new ns.Num({id:"num", type:ns.Num.Type.num1});
		num.x = plus.x + plus.width - 15;
        num.setValue(Math.abs(score))
		container.addChild(num);
	//	this.addNum = container;
	//}
    container.x = peach.x - 50;
    container.y = peach.y - 100;
    container.scaleX = container.scaleY = this.island.scaleY*2;
    this.stage.addChild(container);
    container.alpha = 1;

	this.score += score;
   // console.log(this.score);
    if (this.score <= 0) {this.score = 0}
    if (this.score >= 59) {this.score =this.score}
	this.updateScore();
	
	Q.Tween.to(container, {y:container.y-100, alpha:0}, {time:1000});
}

//更新总得分
game.updateScore = function()
{
	if(this.scoreNum == null)
	{
		var container = new Q.DisplayObjectContainer({id:'score', width:145, height:65}); //开始分数更新
	//	var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
	//	var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
	
        var num$ = new ns.Num({id:"num$", type:ns.Num.Type.num2});
		var num4 = new ns.Num({id:"num4", type:ns.Num.Type.num2});
		var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
		var num3 = new ns.Num({id:"num3", type:ns.Num.Type.num2});
    //    num$.x = 25;
        num$.setValue(11);
		num3.x = 25;
		num4.x = 48;
		num2.x = 70;
		container.addChild(num$,num4,num2, num3);
		container.scaleX = container.scaleY = this.island.scaleY*1.5;
		container.x = this.width - container.getCurrentWidth() - 15 >> 0;
		//container.y = this.stage.height - 50;
        container.y = 15;
		this.scoreNum = container;
	}
    var str = this.score.toString(), len = str.length;
	str = len > 3? str.slice(len-2) : str;
    while(str.length<3) {
    	if(str.length<2){str ="00"+str;}
    	else{str ="0"+str;}
    }
this.scoreNum.getChildAt(3).setValue(Number(str[0]));//掉下来的物品分值
    this.scoreNum.getChildAt(2).setValue(Number(str[2]));//显示的分数
    this.scoreNum.getChildAt(1).setValue(Number(str[1]));
	this.stage.addChild(this.scoreNum);


    console.log(this.scoreNum);
}

//显示倒计时
game.showTimer = function()
{	
	if(this.countdown == null)
	{
		//初始化倒计时
		var countdown = new Q.DisplayObjectContainer({id:'countdown', width:250, height:65});
		var num1 = new ns.Num({id:"min1", type:ns.Num.Type.num2});
		var num2 = new ns.Num({id:"min2", type:ns.Num.Type.num2});
		var sep = new ns.Num({id:"sep", type:ns.Num.Type.num2});
		var sec1 = new ns.Num({id:"sec1", type:ns.Num.Type.num2});
		var sec2 = new ns.Num({id:"sec2", type:ns.Num.Type.num2});
		//倒计时间距调整 BY：panel
		num2.x = 30;
		sep.x = 60;
		sec1.x = 90;
		sec2.x = 120;
		sep.setValue(10);
		countdown.addChild(num1, num2, sep, sec1, sec2);
		countdown.scaleX = countdown.scaleY = this.island.scaleY*1.5;
		countdown.x = 20;
		countdown.y = 15;
		this.countdown = countdown;
	}	
	this.stage.addChild(this.countdown);
	this.time.current = this.time.total;
	this.updateTimer();
	
	//启动倒计时Tween
	Q.Tween.to(this.time, null, {time:1000, loop:true, 
	onComplete:function(tween)
	{
		game.updateTimer();
		if(game.time.current <= 0)
		{
			tween.stop();
			setTimeout(function(){
			game.gameOver();
			
			},1000);
		}

		//游戏结束10秒倒计时 BY:panel
		if(game.time.current<=8 && game.time.current >=0){
			if(game.tendown == null){
				var tendown = new Q.DisplayObjectContainer({id:'tendown', width:150, height:150});
				tendown.scaleX = tendown.scaleY = game.island.scaleY;
				tendown.x = 365;
				tendown.y = 650;
				var tendownnum = new ns.Num({id:"sec2", type:ns.Num.Type.num3});
				tendown.addChild(tendownnum);
				game.tendown = tendown;
			}
			game.stage.addChild(game.tendown);
			game.tendown.getChildAt(0).setValue(game.time.current+1);
		}
	}});
}

//更新倒计时数值
game.updateTimer = function()
{	
	var me = this, time = this.time;
	var min = Math.floor(time.current / 60), sec = time.current % 60;
	me.countdown.getChildAt(0).setValue(min>=10?Math.floor(min/10) : 0);
	me.countdown.getChildAt(1).setValue(min>=10?(min%10) : min);
	me.countdown.getChildAt(3).setValue(sec>=10?Math.floor(sec/10) : 0);
	me.countdown.getChildAt(4).setValue(sec>=10?(sec%10) : sec);
	time.current--;
}

//游戏结束
game.gameOver = function()
{
	trace("game over:", this.score);
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
	this.playBtn.setState(Q.Button.state.OVER);
    game.showEnd();
	this.stage.step();
	
	//保存分数
	this.saveScore(this.score);
}

//重新开始
game.restart = function()
{
	trace("game restart");
	this.overlay.parentNode.removeChild(this.overlay);
	this.stage.removeAllChildren();
	this.timer.paused = false;
	this.showMenu();
	
	this.score = 0;
	this.time.current = this.time.total;
}

//获取保存的分数
game.getScore = function()
{
	var key = "monkey_score";
	if(Q.supportStorage && localStorage.hasOwnProperty(key))
	{
		var score = Number(localStorage.getItem("monkey_score"));
		return score;
	}
	return 0;
}

//保存分数到localStorage
game.saveScore = function(score)
{
	var key = "monkey_score";
	if(Q.supportStorage)
	{
		localStorage.removeItem(key);
		localStorage.setItem(key, score);
	}
}

//显示结束页面
game.showEnd = function(){
    //TODOEND
    //结束画面
    var end = new Q.Bitmap({id:"end", image:this.getImage("end")});
    var sY = end.scaleY = this.stage.height/end.height;
    var sX = end.scaleX = this.stage.width/end.width;
    end.x = 0;
    end.y = 0;
	
	 var ends = new Q.Bitmap({id:"ends", image:this.getImage("ends")});
    var sY = ends.scaleY = this.stage.height/ends.height;
    var sX = ends.scaleX = this.stage.width/ends.width;
    ends.x = 0;
    ends.y = 0;

   /*var getPriceBtn = new Q.Button({id:"gpBtn", image:this.getImage("out")}); //分享好友
    getPriceBtn.scaleX = sX*1.3;
    getPriceBtn.scaleY = sY*1.28;
	 getPriceBtn.setUpState({rect:[512,0,127,127]})
	 getPriceBtn.y = 625 *sY;
    getPriceBtn.x = 400*sX;
    getPriceBtn.onEvent = function(e)
    {
        Q.Button.prototype.onEvent.call(this, e);
        if(e.type == "mouseup" || e.type == "touchend")
        {
            //TODO
	share.style.display="block";
			
        }else if(e.type == "mouseout")
        {
            game.context.canvas.style.cursor = "";
        }
    }*/
/*	
 var getBtn = new Q.Button({id:"gpBtns", image:this.getImage("out")}); //没超过100分得分享好友
    getBtn.scaleX = sX*1.3;
    getBtn.scaleY = sY*1.28;
	 getBtn.setUpState({rect:[512,0,127,127]})
	 getBtn.y =625 *sY;
    getBtn.x = 400*sX;
    getBtn.onEvent = function(e)
    {
        Q.Button.prototype.onEvent.call(this, e);
        if(e.type == "mouseup" || e.type == "touchend")
        {
            //TODO
	share.style.display="block";
			//document.getElementById('hongbao').style.display="none"; 
        }else if(e.type == "mouseout")
        {
            game.context.canvas.style.cursor = "";
        }
    }*/
	  //弹出的框 超过100分
  	var ash_tan = new Q.Button({id:"ash_tan", image:this.getImage("out")}); //游戏结束弹出的文本框加福袋按钮
  	ash_tan.setUpState({rect:[0,0,410,78]});
    ash_tan.scaleX = 1.4*sX;
    ash_tan.scaleY = 1.3*sY;
    ash_tan.x = 32*sX;
    ash_tan.y = 170*sY;

    //没超过100分时的弹框
    var ash_tan2 = new Q.Button({id:"ash_tan2", image:this.getImage("out")}); //游戏结束弹出的文本框
  	ash_tan2.setUpState({rect:[185,385,435,95]});
    ash_tan2.scaleX = 1.2*sX;
    ash_tan2.scaleY =1.2*sY;
    ash_tan2.x = 70*sX;
    ash_tan2.y = 273*sY;
	
	 var lingjiangBtn = new Q.Button({id:"ljBtn", image:this.getImage("out")}); //领奖按钮福袋按钮
  lingjiangBtn.setUpState({rect:[0,80,260,300]});//裁剪后的图片位置
   lingjiangBtn.scaleX = sX*0.8;
   lingjiangBtn.scaleY = sY*0.8;
   lingjiangBtn.x = 230*sX;//x坐标
  lingjiangBtn.y = 280*sY;
   lingjiangBtn.onEvent = function(e)
    {
        Q.Button.prototype.onEvent.call(this, e);
        if(e.type == "mouseup" || e.type == "touchend")
        {
			alert("弹出H5的页面")
        	//弹出手机输入框
			//document.getElementById('ash_tan').style.display="none"; 
			//document.getElementById('end_score').style.display="none"; 
			
        }else if(e.type == "mouseout")
        {
            game.context.canvas.style.cursor = "";
        }
    }

	
    var rePlayBtn = new Q.Button({id:"rpBtn", image:this.getImage("out")});
	 //再来一次
	  rePlayBtn.scaleX = sX*0.7;
    rePlayBtn.scaleY = sY*0.68;
	rePlayBtn.setUpState({rect:[300,90,235,235]});
    rePlayBtn.x = 90*sX;
    rePlayBtn.y = 621 *sY;
   
    rePlayBtn.onEvent = function(e)
    {
        Q.Button.prototype.onEvent.call(this, e);
        if(e.type == "mouseup" || e.type == "touchend")
        {
            game.restart();
        }else if(e.type == "mouseout")
        {
            game.context.canvas.style.cursor = "";
        }
    }
 var rePlayBtns = new Q.Button({id:"rpBtna", image:this.getImage("out")}); //没超过100分再来一次
	
	  rePlayBtns.scaleX = sX*0.7;
    rePlayBtns.scaleY = sY*0.68;
 rePlayBtns.setUpState({rect:[300,90,235,235]});
    rePlayBtns.x = 90*sX;
    rePlayBtns.y = 621 *sY;
    rePlayBtns.onEvent = function(e)
    {
        Q.Button.prototype.onEvent.call(this, e);
        if(e.type == "mouseup" || e.type == "touchend")
        {
            game.restart();
        }else if(e.type == "mouseout")
        {
            game.context.canvas.style.cursor = "";
        }
    }

     var end_num = this.score;   //结束后分数显示
    var end_num_str = end_num.toString(), len = end_num_str.length;
   end_num_str = len > 3 ? end_num_str.slice(len - 2) : end_num_str;
    while(end_num_str.length < 3) {
    	if(end_num_str.length < 2){end_num_str = "00" + end_num_str;}
    	else{end_num_str = "0" + end_num_str;}
    }
    var container = new Q.DisplayObjectContainer({id:'end_score', width:145, height:35});
   // var end_num$ = new ns.Num({id:"end_num$", type:ns.Num.Type.num2});
	 var end_num4 = new ns.Num({id:"end_num4", type:ns.Num.Type.num2});
    var end_num2 = new ns.Num({id:"end_num2", type:ns.Num.Type.num2});
    var end_num3 = new ns.Num({id:"end_num3", type:ns.Num.Type.num2});
    //end_num$.setValue(11);
	end_num4.setValue(Number(end_num_str[0]));
    end_num2.setValue(Number(end_num_str[1]));
    end_num3.setValue(Number(end_num_str[2]));
	end_num4.x = 25;
    end_num2.x = 48;
    end_num3.x = 70;
    container.addChild(end_num4, end_num2, end_num3);
    container.scaleX = sX*3;
    container.scaleY = sY*3;
    container.x = 150 * sX;
    container.y = 515 * sY;
    this.endNum = container;

    this.end = end;
	 this.ends = ends;
   // this.getPriceBtn = getPriceBtn;
    this.rePlayBtn = rePlayBtn;
	this.lingjiangBtn = lingjiangBtn;
	this.ash_tan=ash_tan;
	this.ash_tan2=ash_tan2;
	//this.getBtn=getBtn;
	this.rePlayBtns=rePlayBtns;
    //this.stage.addChild(this.end, this.getPriceBtn, this.rePlayBtn, this.endNum);
 if(end_num>=100){
		
		 this.stage.addChild(this.end, /*this.getPriceBtn,*/ this.rePlayBtn, this.endNum,this.ash_tan,this.lingjiangBtn);
		 
	}
	else{
		
		 this.stage.addChild(this.ends, /*this.getBtn,*/this.ash_tan2, this.rePlayBtns, this.endNum);
		
	}
}
game.showHelp = function(){
    //TODOHELP
    if(this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);

    var help = new Q.Bitmap({id:"help", image:this.getImage("help")});
    var sY = help.scaleY = this.stage.height/help.height;
    var sX = help.scaleX = this.stage.width/help.width;
    help.x = 0;
    help.y = 0;

    var rePlayBtn = new Q.Button({id:"hpBtn", image:this.getImage("helpbtns")});
    rePlayBtn.setUpState({rect:[0,0,80,80]});
    rePlayBtn.scaleX = sX;
    rePlayBtn.scaleY = sY;
    rePlayBtn.x = 450*sX;
    rePlayBtn.y = 105*sY;
    rePlayBtn.onEvent = function(e)
    {
        Q.Button.prototype.onEvent.call(this, e);
        if(e.type == "mouseup" || e.type == "touchend")
        {
            trace("game restart");
            game.stage.removeAllChildren();
            game.showMenu();
        }else if(e.type == "mouseout")
        {
            game.context.canvas.style.cursor = "";
        }
    }

    this.help = help;
    this.rePlayBtn = rePlayBtn;
    this.stage.addChild(this.help, this.rePlayBtn);
}
//显示当前FPS值
game.showFPS = function()
{
	var me = this, fpsContainer = Quark.getDOM("fps");
	setInterval(function()
	{
		fpsContainer.innerHTML = "FPS:" + me.frames;
		me.frames = 0;
	}, 1000);
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
	
//游戏开始倒计时 BY:panel
game.readyCount = function()
{
	
	var countImg = document.getElementById('countImg');
	var sY  = window.height/2;
    var sX;
	if(window.screen.availWidth<=320){
		sX =  window.screen.availWidth/1.1;
		}if(720>=window.screen.availWidth>360){
			sX =window.screen.availWidth/2;
			}
		if(720>window.screen.availWidth){
			sX =  window.screen.availWidth/10;
			}
	countImg.style.display="block";
	// countImg.style.width=sX+"px";
	// countImg.style.height=sY/2+"px";
	//countImg.style.width="10%";
	countImg.style.height = "28%";
	var count = 3;
	countImg.className = 'imgon';
	var countTimer = setInterval(function(){ 
		countImg.className = '';
		if(count==0){
			countImg.src = 'images/d.png';
		}else if(count>0){
			countImg.src = 'images/n_'+count+'.png';
		}else{
			countImg.src = 'images/h.png';
			countImg.style.display="none";
			clearInterval(countTimer);
		}
		count--;
		setTimeout(function(){countImg.className = 'imgon';}, 100)
	}, 1000);
}

})();