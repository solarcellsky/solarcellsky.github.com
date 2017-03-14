

var Boy = function(props)
{
	props = props || {};
	Boy.superClass.constructor.call(this, props);
	this.id = props.id || Q.UIDUtil.createUID("baskets");
	
	this.avatar = null;	
	this.bottommoving = false;
	this.leftmoving = false;
	this.rightmoving = false;
	this.topmoving = false;
	this.init(this.id);
};
Q.inherit(Boy, Q.DisplayObjectContainer);

Boy.prototype.init = function(id)
{
	var avatar = new Q.MovieClip({id:id, image:game.getImage(id)});
	avatar.addFrame([
	{rect:[0,410,265,300],label:"more"},
	{rect:[0,205,265,205],label:"static"},
	{rect:[0,0,265,205],label:"one"},
	
	]);
	
	//this.scaleX=this.scaleY=1;// = 262;
	//this.height = 182;
	
	this.dirX = 0;
	this.dirY = 0;
	this.oldY = 0;
	
	this.avatar = avatar;
	this.addChild(avatar);
};

Boy.prototype.leftmove = function(dir)
{
	if(this.leftmoving) return;
	this.dirX = dir;
	this.currentSpeedX = this.speedX;
	this.bottommoving = false;
	this.leftmoving = true;
	this.rightmoving = false;
	this.topmoving = false;
	this.avatar.gotoAndStop("left");
}

Boy.prototype.rightmove = function(dir)
{
	if(this.rightmoving) return;
	this.dirX = dir;
	this.currentSpeedX = this.speedX;
	this.bottommoving = false;
	this.leftmoving = false;
	this.rightmoving = true;
	this.topmoving = false;
	this.avatar.gotoAndStop("right");
}

Boy.prototype.topmove = function(dir)
{
	if(this.topmoving) return;
	this.dirY = -1*dir;
	//this.currentSpeedX = this.speedX;
	this.currentSpeedY = this.speedY;
	this.bottommoving = false;
	this.leftmoving = false;
	this.rightmoving = false;
	this.topmoving = true;
	this.avatar.gotoAndStop("top");
}

Boy.prototype.bottommove = function(dir)
{
	
	if(this.bottommoving) return;
	this.dirY = dir;
	this.currentSpeedY = this.speedY;
	this.bottommoving = true;
	this.leftmoving = false;
	this.rightmoving = false;
	this.topmoving = false;
	this.avatar.gotoAndStop("bottom");
}

Boy.prototype.stopMove = function()
{
	this.dirX = 0;
	this.dirY=0;
	console.log("stop")
	this.currentSpeedX = this.speedX;
	this.currentSpeedY = this.speedY;
	this.bottommoving = false;
	this.leftmoving = false;
	this.rightmoving = false;
	this.topmoving = false;
	this.avatar.gotoAndStop("static");
}

