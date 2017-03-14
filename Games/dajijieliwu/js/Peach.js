
(function(){

var Peach = game.Peach = function(props)
{
	props = props || {};
	this.type = props.type;
	Peach.superClass.constructor.call(this, this.type);
	this.id = props.id || Q.UIDUtil.createUID("Peach");
	
	this.reset(this.type);
};
Q.inherit(Peach, Q.MovieClip);

Peach.prototype.init = function()
{
	
};

Peach.prototype.update = function(timeInfo)
{
	this.rotation += 0.5;
};

Peach.prototype.reset = function(type)
{	
	this.setType(type);
	this.currentScore = this.type.score;
	this.alpha = 1;
	this.fading = false;
	//this.bouncing = false;
	if(game.time.current <=10){
		this.currentSpeedY =70;
		}else{
			this.currentSpeedY =this.speedY-10;
			
			}
	
	this.currentSpeedX =0;
	this.delay = Math.floor(Math.random()*100);
	
	this.setRandomPosition();
}

Peach.prototype.setRandomPosition = function()
{
	var minX = 140, maxX = game.width-380, minY = 50, maxY = 80;
	this.x = Math.floor(Math.random()*(maxX-minX)+minX)+140;
	this.y = Math.floor(Math.random()*(maxY-minY)+minY);
	//this.y = -50;
}

Peach.prototype.setType = function(type)
{
	this.type = type;
	this._frames.length = 0;
	this.addFrame(type.frames);
	this.currentFrame = 0;
}

Peach.getRandomType = function(time)
{
	var list = this.TypeList;
    var tmp = Math.floor(time/20);
	//var r = Math.floor(Math.random()*list.length);
    var r = Math.floor(Math.random()*9) > tmp+3 ?Math.floor(Math.random()*0):Math.floor(Math.random(1)*5)// 0 : 1;
	return list[r];
};

Peach.prototype.getCollide = function()
{
	//this.currentScore += this.type.scoreStep;
	//if(this.currentScore > this.type.maxScore) this.currentScore = this.type.maxScore;
	//this.y += 200;
   // this.x = -500;
	//this.bouncing = true;
}

Peach.prototype.stopBounce = function()
{
	//this.currentSpeedY = this.speedY+100;
	//this.bouncing = false;
}

Peach.init = function(height)
{
	this.Type = {};
		this.Type.minus = //炸弹
	{
		image:game.getImage("peach"),
		regX: 140,
		regY: 148,
		width: 100,
		height: 93,
		score: -5,
		scoreStep: 0,
		maxScore: 5 ,
		speedY:height,
		frames:[
		  {rect:[60,280,100,93]}
           
			]
	};
		this.Type.yifu = //衣服
	{
		image:game.getImage("peach"),
		regX: 160,
		regY: 120,
		width: 188,
		height: 184,
		score: 3,
		scoreStep: 0,
		maxScore:1,
		speedY: height/40,
		frames:[
          {rect:[120,120,120,130]} 
			]
	};
	this.Type.plus = //车
	{
		image:game.getImage("peach"),
		regX: 160,
		regY: 120,
		width: 188,
		height: 184,
		score: 3,
		scoreStep: 0,
		maxScore:1,
		speedY: height/40,
		frames:[
            {rect:[0,120,100,130]}
			]
	};
	
	
	this.Type.logos = //房子
	{
		image:game.getImage("peach"),
		regX: 110,
		regY: 110,
		width: 188,
		height: 184,
		score: 4,
		scoreStep: 1,
		maxScore:1,
		speedY:  height/50,
		frames:[
            {rect:[0,0,110,110]}
			]
	};
this.Type.los = //苹果
	{
		image:game.getImage("peach"),
		regX: 128,
		regY: 150,
		width: 188,
		height: 184,
		score: 1,
		scoreStep: 0,
		maxScore: 5,
		speedY:  height/50,
		frames:[
            {rect:[140,0,70,105]}
			]
	};

	this.TypeList = [this.Type.los,this.Type.minus,this.Type.plus, this.Type.yifu, this.Type.logos,];
	/*this.Type.plus =
	{
		image:game.getImage("peach"),
		regX: 94,
		regY: 92,
		width: 188,
		height: 184,
		score: 1,
		scoreStep: 0,
		maxScore: 3,
		speedY: height/80,
		frames:[
                           //{rect:[0,0,94,96]}
			]
	};
	
	this.Type.minus =
	{
		image:game.getImage("peach"),
		regX: 94,
		regY: 92,
		width: 188,
		height: 184,
		score: -5,
		scoreStep: 0,
		maxScore: 5,
		speedY:  height/35,
		frames:[
            {rect:[94,0,94,96]}
			]
	};


	this.TypeList = [this.Type.minus, this.Type.plus];*/
};

})();