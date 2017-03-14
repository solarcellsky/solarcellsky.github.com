(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"i/ldImg.png", id:"ldImg"},
		{src:"i/ldNum.png", id:"ldNum"}
	]
};



// symbols:



(lib.ldImg = function() {
	this.initialize(img.ldImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,538,102);


(lib.ldNum = function() {
	this.initialize(img.ldNum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,22);


(lib.num = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-9.8,-11)).s().p("AhhBtIAAjaIDDAAIAADag");
	this.shape.setTransform(9.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-27.2,-11)).s().p("AhJBtIAAjaICTAAIAADag");
	this.shape_1.setTransform(7.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-45.6,-11)).s().p("AhsBtIAAjaIDZAAIAADag");
	this.shape_2.setTransform(11,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-66.6,-11)).s().p("AhiBtIAAjaIDFAAIAADag");
	this.shape_3.setTransform(10,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-86.5,-11)).s().p("AhiBtIAAjaIDFAAIAADag");
	this.shape_4.setTransform(10,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-106.6,-11)).s().p("AhkBtIAAjaIDIAAIAADag");
	this.shape_5.setTransform(10.1,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-126.4,-11)).s().p("AhgBtIAAjaIDBAAIAADag");
	this.shape_6.setTransform(9.7,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-146.5,-11)).s().p("AhmBtIAAjaIDNAAIAADag");
	this.shape_7.setTransform(10.4,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-166.7,-11)).s().p("AhhBtIAAjaIDDAAIAADag");
	this.shape_8.setTransform(9.9,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.ldNum, null, new cjs.Matrix2D(1,0,0,1,-186.3,-11)).s().p("AhgBtIAAjaIDBAAIAADag");
	this.shape_9.setTransform(9.7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,22);


(lib.ldMc = function() {
	this.initialize();

	// 图层 1
	this.s = new lib.num();
	this.s.setTransform(458.1,74,1.2,1.2);

	this.g = new lib.num();
	this.g.setTransform(481.8,74,1.2,1.2);

	// 图层 3
	this.instance = new lib.ldImg();
	this.instance.setTransform(0,6.5);

	this.addChild(this.instance,this.g,this.s);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,6.5,538,102);


// stage content:
(lib.s0 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var S=this
		S.stop()
		
		function reset()
		{
			S.ldMc.txt.text="0%";
			S.ldMc.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.ldMc = new lib.ldMc();
	this.ldMc.setTransform(49,396);
	this.ldMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ldMc).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib0 = lib0||{}, img0 = img0||{}, createjs = createjs||{}, ss = ss||{});
var lib0, img0, createjs, ss;