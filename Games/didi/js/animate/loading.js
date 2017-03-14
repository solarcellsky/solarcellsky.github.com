(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1040,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.car = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mt = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.road = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,25);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,47);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,15);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.road();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,13);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(120.7,12.5,1,1,0,0,0,10,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.3},36).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.7,0,20,25);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(41.5,20.5,1,1,0,0,0,41.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:19.8},6).to({y:20.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,47);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(173.6,2,1,1,0,0,0,18.5,2);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(121.9,2,1,1,0,0,0,18.5,2);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(70.2,2,1,1,0,0,0,18.5,2);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(18.5,2,1,1,0,0,0,18.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.1,4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(18.5,2,1,1,0,0,0,18.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-29.2},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.1,4);


// stage content:



(lib.loading = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol8();
	this.instance.setTransform(513.8,300.5,1,1,0,0,0,41.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(531.4,332.2,1,1,0,0,0,96,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(498.9,332.2,1,1,0,0,0,69,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 4
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(455.1,315.5,1,1,0,0,0,10,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(508,320.6,1,1,0,0,0,73,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 6
	this.loadingtxt = new cjs.Text("0%", "22px 'Arial'", "#FA8F06");
	this.loadingtxt.name = "loadingtxt";
	this.loadingtxt.textAlign = "center";
	this.loadingtxt.lineHeight = 27;
	this.loadingtxt.lineWidth = 76;
	this.loadingtxt.setTransform(503.2,250.1);

	this.timeline.addTween(cjs.Tween.get(this.loadingtxt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(949.9,570.1,197.6,88.6);

})(lib_loading = lib_loading||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib_loading, images, createjs, ss;