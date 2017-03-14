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



(lib._10 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10_1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._106 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.chuizi = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.kuang = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.renwu7 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.红包 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.丑人 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// renwu7.png
	this.instance = new lib.renwu7();
	this.instance.setTransform(42,29);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(2));

	// 4.png
	this.instance_1 = new lib._4();
	this.instance_1.setTransform(37,-15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(2));

	// 3.png
	this.instance_2 = new lib._3();
	this.instance_2.setTransform(33,-16);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({_off:true},1).wait(3));

	// 2.png
	this.instance_3 = new lib._2();
	this.instance_3.setTransform(41,-13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({_off:true},1).wait(4));

	// 1.png
	this.instance_4 = new lib._1();
	this.instance_4.setTransform(23,-14);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true},1).wait(5));

	// 9.png
	this.instance_5 = new lib._9();
	this.instance_5.setTransform(37,-14);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true},1).wait(6));

	// 8.png
	this.instance_6 = new lib._8();
	this.instance_6.setTransform(35,-13);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({_off:true},1).wait(7));

	// 7.png
	this.instance_7 = new lib._7();
	this.instance_7.setTransform(47,-17);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({_off:true},1).wait(8));

	// 6.png
	this.instance_8 = new lib._6();
	this.instance_8.setTransform(26,-19);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},1).wait(9));

	// 5.png
	this.instance_9 = new lib._5();
	this.instance_9.setTransform(47,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,-14,162,268);


(lib.vb = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("Egx/BQdMAAAig6MBj+AAAMAAACg6g");
	this.shape.setTransform(320,515);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.Symbol2dsfsf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.红包();
	this.instance.setTransform(-85.5,-74);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.5,-74,171,148);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loadPic(this,"p2.jpg");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.fenshu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// -10.png
	this.instance = new lib._10_1();
	this.instance.setTransform(6,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// +10.png
	this.instance_1 = new lib._10();
	this.instance_1.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,71,59);


(lib.chuzii = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.chuizi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,178,153);


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


(lib.Symbol233scopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickMc = this;
		
		clickMc.mouseChildren = false;
		
		clickMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			try{
				statTraceEvent('index','tiaozhuantianmao');
			}catch(e)
			{
				
			}
			
			showCmd2();
			//window.location.href="http://shop.m.taobao.com/shop/coupon.htm?activityId=9e5ae22b560a4868b740241af3222e73"; 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.all();
	this.instance.setTransform(-13.9,-17.3,2.342,3.481);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.all(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-17.3,524.6,257.6);


(lib.Symbol233scopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickMc = this;
		
		clickMc.mouseChildren = false;
		
		clickMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			try{
				statTraceEvent('index','tiaozhuantianmao');
			}catch(e)
			{
				
			}
			
			showCmd();
			//window.location.href="http://shop.m.taobao.com/shop/coupon.htm?activityId=9e5ae22b560a4868b740241af3222e73"; 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.all();
	this.instance.setTransform(-13.9,-17.3,2.342,3.481);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.all(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-17.3,524.6,257.6);


(lib.Symbol233s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickMc = this;
		
		clickMc.mouseChildren = false;
		
		clickMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			gameMc.end_mc.gotoAndStop(0);
			loadPage(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.all();
	this.instance.setTransform(-13.9,-11,0.701,0.933);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.all(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-11,157,69.1);


(lib.Symbol23sx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(56));

	// Layer 1
	this.instance = new lib.Symbol2dsfsf();
	this.instance.setTransform(0,80,0.094,0.094);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:0,alpha:1},9).wait(37).to({alpha:0.988},0).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,73.1,16,13.8);


(lib.Symbol2sdfsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.code_txt.text = codeNum;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol233scopy2();
	this.instance.setTransform(134.3,825.1,1,0.751,0,0,0,66.5,26.5);

	this.code_txt = new cjs.Text("", "bold 50px 'Arial'", "#303082");
	this.code_txt.name = "code_txt";
	this.code_txt.textAlign = "center";
	this.code_txt.lineHeight = 52;
	this.code_txt.lineWidth = 426;
	this.code_txt.setTransform(320.9,431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.code_txt},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap63();
	this.instance_1.setTransform(0.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.8,640,1030);


(lib.Symbol2dfwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickMc = this;
		
		
		clickMc.mouseChildren = false;
		
		clickMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			gameMc.end_mc.gotoAndStop(0);
			initGame(gameMc);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.all();
	this.instance.setTransform(-31,-16.1,1.304,1.477);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.all(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-16.1,292.1,109.3);


(lib.fenshukongzhi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// 图层 1
	this.info_mc = new lib.fenshu();
	this.info_mc.setTransform(20,111.7,0.1,0.1,0,0,0,49,33);
	this.info_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.info_mc).wait(1).to({regX:46.5,regY:29.8,scaleX:0.12,scaleY:0.12,x:19.7,y:109.9,alpha:0.018},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:104.6,alpha:0.082},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:19.5,y:93.6,alpha:0.215},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:19.2,y:75.9,alpha:0.428},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:19,y:56.4,alpha:0.663},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:18.8,y:42.1,alpha:0.836},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:18.6,y:33.7,alpha:0.937},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:29.7,alpha:0.986},0).wait(1).to({regX:49,regY:33.2,scaleX:1,scaleY:1,x:21,y:31.7,alpha:1},0).to({scaleX:1.21,scaleY:1.21,y:17.7,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.1,108.5,7.1,5.9);


(lib.eeekddf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.num_txt.text = totalScore;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.num_txt = new cjs.Text("0", "bold 40px 'Arial'", "#F13B4A");
	this.num_txt.name = "num_txt";
	this.num_txt.textAlign = "center";
	this.num_txt.lineHeight = 42;
	this.num_txt.lineWidth = 100;
	this.num_txt.setTransform(331.9,163.7);

	this.instance = new lib.Symbol233scopy();
	this.instance.setTransform(114.3,462.4,1,2.03,0,0,0,66.5,26.5);

	this.instance_1 = new lib.Symbol233s();
	this.instance_1.setTransform(63.7,28.5,1,1,0,0,0,66.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.num_txt}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Bitmap66();
	this.instance_2.setTransform(-16.8,-9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.eee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickMc = this;
		
		
		clickMc.mouseChildren = false;
		
		clickMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			clickMc.parent.parent.gotoAndPlay("out");
			clickMc.removeEventListener("mousedown",onDown);
			
			setTimeout(function(){
				clickMc.addEventListener("mousedown",onDown);
				initGame(gameMc);
			},700);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.all();
	this.instance.setTransform(-19.7,-146.9,2.858,13.919);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.all(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap64();
	this.instance_1.setTransform(-0.9,-103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-146.9,640,1030);


(lib.chuizi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// chuzii
	this.instance = new lib.chuzii();
	this.instance.setTransform(72.4,58.4,1,1,0,0,0,173.1,147.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({rotation:50.7},2).to({regX:173,rotation:-39.2},2).to({regX:173.1,rotation:0},2).wait(1));

	// fenshu
	this.score_mc = new lib.fenshukongzhi();
	this.score_mc.setTransform(-11.7,-118.8,1,1,0,0,0,49,33);

	this.timeline.addTween(cjs.Tween.get(this.score_mc).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-43.4,7.1,5.9);


(lib.tanren = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:30});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		if(isLast)
		{
			this.gotoAndPlay("out");
		}
	}
	this.frame_13 = function() {
		this.gotoAndPlay("out");
	}
	this.frame_37 = function() {
		endMc(this.index);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(2).call(this.frame_13).wait(24).call(this.frame_37).wait(1));

	// Layer 3
	this.li_mc = new lib.Symbol23sx();
	this.li_mc.setTransform(95.1,107.5);

	this.timeline.addTween(cjs.Tween.get(this.li_mc).wait(38));

	// Layer 2
	this.score_mc = new lib.fenshukongzhi();
	this.score_mc.setTransform(140.7,12.9,1,1,0,0,0,49,33);

	this.timeline.addTween(cjs.Tween.get(this.score_mc).wait(38));

	// 图层 1
	this.role_mc = new lib.丑人();
	this.role_mc.setTransform(91.3,201,0.1,0.1,0,0,0,126,253);
	this.role_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.role_mc).to({regX:126.2,scaleX:1.03,scaleY:1.03,x:91.2,alpha:1},7,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98,x:91.3},3).to({scaleX:1,scaleY:1,x:91.2},2).wait(18).to({scaleX:1.03,scaleY:1.03},3).to({regX:126,scaleX:0.1,scaleY:0.1,x:91.3,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// kuang.png
	this.instance = new lib.kuang();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,215);


(lib.Symbol222dfc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.num_txt.text = totalScore;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer 3
	this.instance = new lib.Symbol2dfwe();
	this.instance.setTransform(219.5,578.7,1,1,0,0,0,115,38.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap56();
	this.instance_1.setTransform(336.5,-184.6);

	this.num_txt = new cjs.Text("0", "bold 30px 'Arial'", "#F63A40");
	this.num_txt.name = "num_txt";
	this.num_txt.textAlign = "center";
	this.num_txt.lineHeight = 32;
	this.num_txt.lineWidth = 100;
	this.num_txt.setTransform(282.5,411);

	this.instance_2 = new lib._106();
	this.instance_2.setTransform(-7.3,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.num_txt},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.eee();
	this.instance.setTransform(320.1,512.2,1,1,0,0,0,301,367.5);

	this.instance_1 = new lib.eeekddf();
	this.instance_1.setTransform(326.6,506.9,1,1,0,0,0,300,491.3);

	this.instance_2 = new lib.Symbol222dfc();
	this.instance_2.setTransform(318.9,515.3,1,1,0,0,0,243.5,316.1);

	this.instance_3 = new lib.Symbol2sdfsd();
	this.instance_3.setTransform(320.5,515.5,1,1,0,0,0,320.5,515.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tanchu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.pic_mc.gotoAndStop(0);
	}
	this.frame_2 = function() {
		this.pic_mc.gotoAndStop(endType);
		
		showShare();
	}
	this.frame_14 = function() {
		this.stop()
	}
	this.frame_23 = function() {
		closeShare();
		this.pic_mc.gotoAndStop(0);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(12).call(this.frame_14).wait(9).call(this.frame_23).wait(1));

	// 图层 1
	this.pic_mc = new lib.bg2();
	this.pic_mc.setTransform(320,515,1,1,0,0,0,320,515);
	this.pic_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pic_mc).wait(6).to({alpha:1},8).to({alpha:0},8).to({_off:true},1).wait(1));

	// 图层 2
	this.instance = new lib.vb();
	this.instance.setTransform(320,515,1,1,0,0,0,320,515);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},8).wait(5).to({alpha:0},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.score_txt.text = "0"
	}
	this.frame_2 = function() {
		gameMc = this;
		
		endType = 1;
		gameMc.end_mc.gotoAndPlay(1);
		
		try{
			statTraceEvent('index','kaishitiaojiao');
		}catch(e)
		{
			
			}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// 弹出框
	this.end_mc = new lib.tanchu();
	this.end_mc.setTransform(320,515,1,1,0,0,0,320,515);

	this.timeline.addTween(cjs.Tween.get(this.end_mc).wait(3));

	// 锤子分数
	this.hit_mc = new lib.chuizi_1();
	this.hit_mc.setTransform(388.1,434.6,1,1,0,0,0,89,108);

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(3));

	// renwu
	this.c_9_mc = new lib.tanren();
	this.c_9_mc.setTransform(512,786.1,1,1,0,0,0,86,107.5);

	this.c_8_mc = new lib.tanren();
	this.c_8_mc.setTransform(323,786.1,1,1,0,0,0,86,107.5);

	this.c_7_mc = new lib.tanren();
	this.c_7_mc.setTransform(135,786.1,1,1,0,0,0,86,107.5);

	this.c_6_mc = new lib.tanren();
	this.c_6_mc.setTransform(512,532.1,1,1,0,0,0,86,107.5);

	this.c_5_mc = new lib.tanren();
	this.c_5_mc.setTransform(323,532.1,1,1,0,0,0,86,107.5);

	this.c_4_mc = new lib.tanren();
	this.c_4_mc.setTransform(135,532.1,1,1,0,0,0,86,107.5);

	this.c_3_mc = new lib.tanren();
	this.c_3_mc.setTransform(512,282.1,1,1,0,0,0,86,107.5);

	this.c_2_mc = new lib.tanren();
	this.c_2_mc.setTransform(323,282.1,1,1,0,0,0,86,107.5);

	this.c_1_mc = new lib.tanren();
	this.c_1_mc.setTransform(135,282.1,1,1,0,0,0,86,107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c_1_mc},{t:this.c_2_mc},{t:this.c_3_mc},{t:this.c_4_mc},{t:this.c_5_mc},{t:this.c_6_mc},{t:this.c_7_mc},{t:this.c_8_mc},{t:this.c_9_mc}]}).wait(3));

	// shijian
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(524.6,81.4);

	this.time_txt = new cjs.Text("60", "bold 50px 'Arial'", "#F13B4A");
	this.time_txt.name = "time_txt";
	this.time_txt.textAlign = "right";
	this.time_txt.lineHeight = 52;
	this.time_txt.lineWidth = 57;
	this.time_txt.setTransform(522.7,63.8);

	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(404.6,49.1);

	this.instance_2 = new lib.Bitmap4();
	this.instance_2.setTransform(398.6,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.time_txt},{t:this.instance}]}).wait(3));

	// cishu
	this.instance_3 = new lib.Bitmap70();
	this.instance_3.setTransform(46.3,37.1);

	this.instance_4 = new lib.Bitmap2();
	this.instance_4.setTransform(340.1,72);

	this.score_txt = new cjs.Text("0", "bold 50px 'Arial'", "#F13B4A");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "right";
	this.score_txt.lineHeight = 52;
	this.score_txt.lineWidth = 115;
	this.score_txt.setTransform(327.1,62);

	this.instance_5 = new lib.t1();
	this.instance_5.setTransform(164,52.1);

	this.instance_6 = new lib.Bitmap5();
	this.instance_6.setTransform(151.1,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.score_txt},{t:this.instance_4},{t:this.instance_3}]}).wait(3));

	// bg
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(320,515,1,1,0,0,0,320,515);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.3,37.1,552.9,968.2);


// stage content:
(lib.p2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.mc();
	this.instance.setTransform(320,515,1,1,0,0,0,320,515);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320,515,598,893.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;