


(function(){

var Fruit = game.Fruit = function(props)
{
	props = props || {};
	this.type = props.type;
	Fruit.superClass.constructor.call(this, this.type);
	this.id = props.id || Q.UIDUtil.createUID("fruit");
    this.reset(this.type);
};
Q.inherit(Fruit, Q.MovieClip);

Fruit.prototype.init = function()
{
	
};

Fruit.prototype.update = function(timeInfo)
{
	//console.log("111");
	
};

Fruit.prototype.reset = function(type)
{
	this.setType(type);
	this.currentScore = type.score;
	this.tag =type.tag;
	this.image =type.image;
	this.alpha = 1;
	this.fading = false;
	this.bouncing = false;
	//this.currentSpeedY = Math.random()*5;
	this.currentSpeedY = this.speedY?this.speedY:1;
	this.currentSpeedY = 0.1;
	//var minute=Math.ceil(((new Date()).getTime()-game.timer._startTime)/60000);
	var accelerateSpeed=0;
	this.gotoAndStop("static");
	this.accelerateSpeed =accelerateSpeed,
	this.currentSpeedX =Math.floor(Math.random()*10+5);
	this.delay = Math.floor(Math.random()*100);
	this.setRandomPosition();
}
Fruit.prototype.setRandomPosition = function()
{
	var x=Math.floor(150*Math.random());
	if(x<=100){
		x=150;
	}
	//height=0;
	this.y=Math.floor(game.height*0.1+(game.height*0.5)*Math.random());
	this.x = -x;
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
	var r =0;
	return list[r];
};

Fruit.prototype.getCollide = function()
{
	
	//this.bouncing = true;
	//this.fading = true;
	//this.alpha += -1;
	
}

Fruit.prototype.stopBounce = function()
{
	this.bouncing = false;
}

Fruit.init = function() 
{
	this.Type = {};
	this.Type.fruit1 = {
		image:game.getImage("pangxies"),
		tag:"custom",
		paused:false,
		frames:[
			{rect:[0,178,237,178],label:"static"},
			{rect:[0,0,237,178],label:"gotyo"}
			//{rect:[0,0,229,180],label:"static"},
			//358/2
			]
	};

	this.TypeList = [this.Type.fruit1];
};

})();
/*,this.Type.fruit9,this.Type.fruit10,this.Type.fruit11,this.Type.fruit12,
	this.Type.fruit13,this.Type.fruit14,this.Type.fruit15,this.Type.fruit16,this.Type.fruit17,this.Type.fruit18,
	this.Type.fruit19,this.Type.fruit20,this.Type.fruit21,this.Type.fruit22,this.Type.fruit23,this.Type.fruit24,
	this.Type.fruit25,this.Type.fruit26,this.Type.fruit27,this.Type.fruit28,this.Type.fruit29,
	this.Type.fruit31,this.Type.fruit32,this.Type.fruit33,this.Type.fruit34,this.Type.fruit35,this.Type.fruit36*/