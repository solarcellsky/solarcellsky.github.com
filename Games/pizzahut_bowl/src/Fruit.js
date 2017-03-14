var arr=[0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8];
var tempTime='';
var shineIndex=0;
var isCloseMask=false;
var fruitTime,witchFirst=true,shouzhiFirst=true,nanguaFirst=true,yinpinFirst=true;
(function(){

var Fruit = game.Fruit = function(props)
{
	props = props || {};
	this.type = props.type;
	Fruit.superClass.constructor.call(this, this.type);
	this.id = props.id || Q.UIDUtil.createUID("fruit");
	//this.setType(this.type);
    this.reset(this.type);
};
Q.inherit(Fruit, Q.MovieClip);

Fruit.prototype.init = function()
{
	
};

Fruit.prototype.update = function(timeInfo)
{
	//console.log("111");
	if(this.alpha!=0){
		if(this.type.tag!="custom"){
			var fruitW=this.getCurrentWidth()*1.5;
			var fruitH=this.getCurrentHeight()*1.5;
			if(this.type.tag=="nangua"){
				var index=this.shineIndex;
				if(index==undefined){
					for(var i=0;i<10;i++){
						if(!game["witchShine_Used"+i]){
							this.shineIndex=i;
							index=i;
							game["witchShine_Used"+i]=true;
							break;
						}
					}
				}
				game["witchShine"+index].x=this.x-fruitW;;
				game["witchShine"+index].y=this.y-fruitH;;
				game["witchShine"+index].alpha=0.1;
				game["witchShine"+index].rotation += 0.5;
			}else if(this.type.tag=="yinpin"||this.type.tag=="shouzhi"||this.type.tag=="pizza"){
				var index=this.shineIndex;
				if(index==undefined){
					for(var i=10;i<20;i++){
						if(!game["witchShine_Used"+i]){
							this.shineIndex=i;
							index=i;
							game["witchShine_Used"+i]=true;
							break;
						}
					}
				}
				game["witchShine"+index].x=this.x-fruitW;
				if(this.type.tag=="pizza"){
					
					game["witchShine"+index].y=this.y-fruitH+10;;
				}else{
					//game["witchShine"+index].x=this.x-fruitW;
					game["witchShine"+index].y=this.y-fruitH;;
				}
				
				game["witchShine"+index].alpha=0.1;
				game["witchShine"+index].rotation += 0.5;
			}else{
				
				
			}
			
		}
		if(game.Boy.scaleDir=="up"&&game.Boy.scaleTime&&game.Boy.scaleTime<=0.2){
			game.Boy.scaleTime=game.Boy.scaleTime+0.01;
			game.Boy.scaleX=game.Boy.scaleY=game.Boy.scaleX+0.01;
		}
		if(game.Boy.scaleDir=="up"&&game.Boy.scaleTime>=0.2){
			game.Boy.scaleDir="down";
			//console.log("开始减小")
		}
		
		if(game.Boy.scaleDir=="down"&&game.Boy.scaleTime&&game.Boy.scaleTime>0.1){
			//console.log("减小")
			game.Boy.scaleTime=game.Boy.scaleTime-0.01;
			game.Boy.scaleX=game.Boy.scaleY=game.Boy.scaleX-0.01;
		}
		if(game.Boy.scaleDir=="down"&&game.Boy.scaleTime<=0.1){
			game.Boy.scaleDir="up";
			game.Boy.scaleTime=0;
		}
		
	}
	
};
function firstTip(type){
	fruitTime=(new Date()).getTime()-fruitTime;
	//console.log("其实已经计时了这么多毫秒了:"+fruitTime);
	game.timer.paused=true;
	game.pauseBtn.gotoAndStop(1);
	//game.stage.step();
	$("#outer").hide(0);
	$(".allFirstTips").show(0);
	$(".allFirstTips .tip").hide(0);
	var tip=type+"Tip";
	$(".allFirstTips ."+tip).show(0);
	var firstType=type+"First";
	window[firstType]=false;
	setTimeout(function(){
		if(!isCloseMask){
			fruitTime=(new Date()).getTime()-fruitTime;
			//console.log("现在这个计时是当前时间减去多少秒之前:"+fruitTime);
			game.timer.paused=false;
			game.pauseBtn.gotoAndStop(0);
			//game.stage.step();
			$("#outer").show(0);
			$(".allFirstTips").hide(0);
			var tip=type+"Tip";
			$(".allFirstTips ."+tip).hide(0);
		}
	},maskTimer);
}
Fruit.prototype.reset = function(type)
{
	this.setType(type);
	/*if(type=="witch"){
		this.scaleX=this.scaleY=3;
	}*/
	this.currentScore = type.score;
	this.addLife =type.tag=="witch"?-1:0;
	this.tag =type.tag;
	
	this.image =type.image;
	this.alpha = 1;
	this.fading = false;
	this.bouncing = false;
	
	/*if(this.tag=="pizza"){
		this.width=this.width*1.5;
		this.height=this.height*1.5;
		console.log(this.width)
	}*/
	//this.currentSpeedY = Math.random()*5;
	this.currentSpeedY = this.speedY?this.speedY:1;
	
	this.currentSpeedY=2+2*Math.random();
	//console.log(this.currentSpeedY );
	/*if((isaction!=3){
		tempTime=;
	}*/
	var minute=Math.ceil(((new Date()).getTime()-game.timer._startTime)/60000);
	var accelerateSpeed=0.25;
	
	switch(minute){
		case 2:accelerateSpeed=0.3;
		//console.log("2")
		break;
		case 3:accelerateSpeed=0.35;
		//console.log("3")
		break;
		case 4:
		accelerateSpeed=0.4;
		//console.log("4")
		break;
		case 5:accelerateSpeed=0.45;
		//console.log("5")
		break;
	}
	this.accelerateSpeed =accelerateSpeed,
	this.currentSpeedX = 0;
	this.delay = Math.floor(Math.random()*100);
	//this.delay =Math.floor(Math.random()*50);
	this.setRandomPosition();
}
Fruit.prototype.setRandomPosition = function()
{
	var minX = 100, maxX = game.width, minY = -100, maxY = 0;
	//this.x = Math.floor(Math.random()*maxX);
	var index=Math.floor(Math.random()*arr.length);
	this.x = arr[index]*maxX;
	//this.y = Math.floor(Math.random()*(maxY-minY)+Math.random()*minY);
	if(this.tag=="custom"){
		var height=Math.floor(50+50*Math.random());
	}else{
		var height=Math.floor(50+100*Math.random());
		if(height<100){
			height=100;
		}
	}
	
	//height=0;
	//this.y=0;
	this.y = -height;
}

Fruit.prototype.setType = function(type)
{
	this.type = type;
	this._frames.length = 0;
	//console.log(type.frames)
	this.addFrame(type.frames);
	this.currentFrame = 0;
}
Fruit.getRandomType = function(type,index)
{
	//special
	var list = this.TypeList;
	//var r = Math.floor(Math.random()*list.length);
	if(type=="custom"){
		//0/1/2
		var r = Math.floor(0+Math.random()*3);
	}else{
		//r=4/5/6/7/8
		if(index!=undefined){
			var r = index-1;
		}else{
			var r = Math.floor(3+Math.random()*5);
		}
		
	}
	//r=0;
	console.log("r:"+r)
	//巫婆从大变小
	//r=7;
	return list[r];
};
Fruit.getType = function(i)
{
	var list = this.TypeList;
	//var r = Math.floor(Math.random()*list.length);
	//console.log("r:"+r)
	//r=5;
	return list[i];
};
Fruit.prototype.getCollide = function()
{
	if(this.type.tag!="custom"){
		var index=this.shineIndex;
		if(this.type.tag!="witch"){
			game["witchShine"+index].alpha=0;
		}
		
		if(this.type.tag == "witch"){//坏的水果 减一个生命值
		//console.log(this.type.tag)
			this.addLife = -1;
			this.updatelife = true;
		}else if(this.type.tag == "shouzhi"){
			if(game.Boy.scaleX<1.5){
				game.Boy.scaleTime=0.01;
				game.Boy.scaleX=game.Boy.scaleY=game.Boy.scaleX+0.01;
			}
		}
	}
	
	//var index=this.shineIndex;
	//game["witchShine"+index].alpha=1;
	this.bouncing = true;
	this.fading = true;
	this.alpha=0;
}

Fruit.prototype.stopBounce = function()
{
	this.bouncing = false;
}

Fruit.init = function() 
{
	this.Type = {};
				/*
精灵南瓜饮（光圈），收集到碗里出现+100的数字
幽灵巫婆指（光圈），收集到碗里，碗会变大
邪恶南瓜（光圈），收集到碗里出现-150的数字
巫婆（光圈），收集到碗里游戏结束

*/
	
	
	this.Type.fruit1 = 
	{
		image:game.getImage("fruits"),
		//regX: 22,
		//regY: 20,
		width: 150,
		height: 150,
		score: 30,
		accelerateSpeed:Math.random()*3,
		speedY: Math.random()*20,
		tag:"custom",
		frames:[
			{rect:[0,600,150,150]}
			]
	};
	
	this.Type.fruit2 = 
	{
		image:game.getImage("fruits"),
		//regX: 21,
		//regY: 21,
		width: 150,
		height: 150,
		score: 30,
		accelerateSpeed:Math.random()*3,
		speedY: Math.random()*20,
		tag:"custom",
		frames:[
			{rect:[0,750,150,150]}
			]
	};
	
	this.Type.fruit3 = 
	{
		image:game.getImage("fruits"),
		//regX: 17,
		//regY: 20,
		width: 150,
		height: 150,
		score:30,
		accelerateSpeed:Math.random()*3,
		speedY:Math.random()*20,
		tag:"custom",
		frames:[
			{rect:[0,900,150,150]}
			]
	};
	
	this.Type.fruit4 = 
	{
		image:game.getImage("fruits"),
		//regX: 20,
		//regY: 21,
		width: 150,
		height: 150,
		score: 100,
		accelerateSpeed:Math.random()*3,
		speedY:Math.random()*17,
		tag:"yinpin",
		frames:[
			{rect:[0,300,150,150]}
			]
	};
	
	this.Type.fruit5 = 
	{
		image:game.getImage("fruits"),
		//regX: 20,
		//regY: 21,
		width: 150,
		height: 150,
		score:0,
		accelerateSpeed:Math.random()*3,
		speedY: Math.random()*17,
		tag:"shouzhi",
		frames:[
			{rect:[0,150,150,150]}
			]
	};
	
	this.Type.fruit6 = 
	{
		image:game.getImage("fruits"),
		//regX: 19,
		//regY: 20,
		width: 150,
		height: 150,
		score:-150,
		accelerateSpeed:Math.random()*3,
		speedY: Math.random()*17,
		tag:"nangua",
		frames:[
			{rect:[0,0,150,150]}
			]
	};
	
	this.Type.fruit7 = 
	{
		image:game.getImage("fruits"),
		width: 400,
		height: 400,
		score:0,
		accelerateSpeed:Math.random()*3,
		speedY:Math.random()*17,
		tag:"witch",
		frames:[
			{rect:[0,1050,400,400]}
			]
	};
	this.Type.fruit8 = 
	{
		image:game.getImage("fruits"),
		//regX: 20,
		//regY: 21,
		width: 150,
		height: 150,
		score: 150,
		accelerateSpeed:Math.random()*3,
		speedY: Math.random()*17,
		tag:"pizza",
		frames:[
			{rect:[0,450,150,150]}
			]
	};
	this.TypeList = [this.Type.fruit1, this.Type.fruit2, this.Type.fruit3,this.Type.fruit4,this.Type.fruit5,this.Type.fruit6,
	this.Type.fruit7,this.Type.fruit8];
};

})();
/*,this.Type.fruit9,this.Type.fruit10,this.Type.fruit11,this.Type.fruit12,
	this.Type.fruit13,this.Type.fruit14,this.Type.fruit15,this.Type.fruit16,this.Type.fruit17,this.Type.fruit18,
	this.Type.fruit19,this.Type.fruit20,this.Type.fruit21,this.Type.fruit22,this.Type.fruit23,this.Type.fruit24,
	this.Type.fruit25,this.Type.fruit26,this.Type.fruit27,this.Type.fruit28,this.Type.fruit29,
	this.Type.fruit31,this.Type.fruit32,this.Type.fruit33,this.Type.fruit34,this.Type.fruit35,this.Type.fruit36*/