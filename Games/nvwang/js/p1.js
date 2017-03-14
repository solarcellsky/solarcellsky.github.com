(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1030,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.juan = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ren = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.手 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.按钮 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.锤子 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.键盘 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.鸡毛 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.鸡毛_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.鸡毛();
	this.instance.setTransform(1,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-10,134,106);


(lib.标题 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.t1();
	this.instance.setTransform(7,31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,31,567,327);


(lib.按钮_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.按钮();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231,76);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.键盘();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,117);


(lib.元件3 = function() {
	this.initialize();

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkvD1IAAnpIJgAAIAAHpg");
	mask.setTransform(168.1,17.4);

	// 图层 1
	this.instance = new lib.锤子();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(137.6,0,56.4,42);


(lib.元件2 = function() {
	this.initialize();

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AurNYQhThWB8iHQF5maBJgaQBJgZBIhpQAYgiASgjQAQgcgDgBQAJgoAEgoQAHhPgogBQgnAAhniHQhgiGgCgBQgCAAEfjwQEZjsACgEQACADC3B6IC5B9QgCAAEQEOQEQEPgCgBQAxBAqbH1QqaH2gmgiQgmgjjWAsIjqAuIgBABQgVAAhPhUgAA8urIAAAAIAAAAg");
	mask.setTransform(97.4,101);

	// 锤子.png
	this.instance = new lib.锤子();
	this.instance.setTransform(8.9,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.9,7,186,183.1);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.手();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,223,252);


(lib.zi01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(6.7,3.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.7,3.7,189,306);


(lib.ren_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.ren();
	this.instance.setTransform(-7,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,0,361,446);


(lib.juan_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.juan();
	this.instance.setTransform(2,-11);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,-11,172,339);


(lib.b1 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(-128.1,28);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.1,28,434,113);


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxeFyIAAriMAi9AAAIAALig");
	this.shape.setTransform(112,37);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.键盘_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件4();
	this.instance.setTransform(77.5,6.5,1,1,-9.5,0,0,77.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:18.2},19).to({rotation:-9.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.7,160.4,139);


(lib.锤子_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件3();
	this.instance.setTransform(28,97,1,1,180,0,0,169,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19.9,rotation:164.8,y:97.1},4).to({regY:20,rotation:180,y:97},4).wait(1));

	// 锤子.png
	this.instance_1 = new lib.元件3();
	this.instance_1.setTransform(169,20,1,1,0,0,0,169,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15.2},4).to({rotation:0},4).wait(1));

	// 锤子.png
	this.instance_2 = new lib.元件2();
	this.instance_2.setTransform(8.6,181.5,1,1,0,0,0,17.4,181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:10.7},4).to({rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-73,208,268);


(lib.按钮_mc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.按钮_1();
	this.instance.setTransform(114.5,23,1,1,0,0,0,115.5,38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-15,231,76);


(lib.手_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.setTransform(111.5,126,1,1,0,0,0,111.5,126);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:105.5,y:120},3).to({x:111.5,y:126},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,252);


(lib.zi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zi01();
	this.instance.setTransform(63.5,65,1,1,0,0,0,62.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:62.6,scaleX:1.03,scaleY:1.03,x:62.6,y:78},7).to({regX:62.5,scaleX:1,scaleY:1,x:62.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,-9.3,189,306);


(lib.ren_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren_1();
	this.instance.setTransform(92.5,434.6,1,1,0,0,0,92.5,434.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3},7).to({rotation:0},7).wait(1).to({regX:171.6,regY:435.6,x:171.6,y:435.6},0).to({rotation:3},7).to({rotation:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,0,361,446);


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		var clickMc = this;
		
		
		clickMc.mouseChildren = false;
		
		clickMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			loadPage(2);
		}
	}
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(20).call(this.frame_58).wait(1));

	// Layer 2
	this.instance = new lib.all();
	this.instance.setTransform(0,0,2.858,13.919);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.all(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(21));

	// 图层 6
	this.instance_1 = new lib.b1();
	this.instance_1.setTransform(342.6,108,1,1,0,0,0,118.5,77.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(37));

	// 图层 5
	this.instance_2 = new lib.zi();
	this.instance_2.setTransform(412,667.3,0.176,0.176,0,0,0,59.6,76);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({regX:59.5,scaleX:1.04,scaleY:1.04,x:432},5,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(22));

	// 图层 8
	this.instance_3 = new lib.juan_1();
	this.instance_3.setTransform(99.5,640.6,0.375,0.375,-168.8,0,0,86,169.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:99.4},12,cjs.Ease.get(1)).wait(22));

	// 图层 2
	this.instance_4 = new lib.键盘_1();
	this.instance_4.setTransform(454.1,350.7,0.712,0.712,0,0,0,79.5,-1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regY:-1.6,scaleX:1,scaleY:1,y:387.6},5,cjs.Ease.get(1)).to({y:384.6},3,cjs.Ease.get(1)).to({y:390.6},3,cjs.Ease.get(1)).wait(37));

	// 图层 9
	this.instance_5 = new lib.按钮_mc();
	this.instance_5.setTransform(320,950.1,1,1,0,0,0,115.5,38);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({alpha:1},7).wait(41));

	// 图层 4
	this.instance_6 = new lib.标题();
	this.instance_6.setTransform(324.4,297.2,0.11,0.11,0,0,0,287.8,182);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:288.1,scaleX:1.02,scaleY:1.02,x:324.5},5,cjs.Ease.get(1)).to({regX:288,scaleX:0.96,scaleY:0.96,x:324.4},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(47));

	// 图层 7
	this.instance_7 = new lib.锤子_1();
	this.instance_7.setTransform(423.2,373.3,0.136,0.136,0,0,0,9.9,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10,scaleX:0.93,scaleY:0.93,x:436.2,y:353.8},5,cjs.Ease.get(1)).to({regY:180.1,x:432.5,y:357.6},3,cjs.Ease.get(1)).to({regY:180,x:434.4,y:355.6},3,cjs.Ease.get(1)).wait(40));

	// 图层 10
	this.instance_8 = new lib.手_1();
	this.instance_8.setTransform(237.9,391.1,0.335,0.335,0,0,0,199.6,236);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({regX:199.5,scaleX:1.02,scaleY:1.02},5,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(38));

	// 图层 3
	this.instance_9 = new lib.鸡毛_1();
	this.instance_9.setTransform(535.6,546.2,0.17,0.17,0,0,0,67.2,53);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).to({regX:67,scaleX:1.08,scaleY:1.08},6,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(25));

	// 图层 1
	this.instance_10 = new lib.ren_mc();
	this.instance_10.setTransform(291.6,555.6,1,1,0,0,0,136.5,438.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({scaleY:0.94,y:895.7},6,cjs.Ease.get(1)).to({scaleY:1.02},3,cjs.Ease.get(1)).to({scaleY:1},4,cjs.Ease.get(1)).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.Symbol1 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.mc();
	this.instance.setTransform(497.2,235.2,1,1,0,0,0,497.2,235.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


// stage content:
(lib.p1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(320,515,1,1,0,0,0,320,515);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(613.6,795.6,62.1,35.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;