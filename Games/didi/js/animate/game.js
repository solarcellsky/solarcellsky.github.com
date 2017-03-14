(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1040,
	height: 640,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/_1black.png", id:"_1black"},
		{src:"images/_40black.png", id:"_40black"},
		{src:"images/_80black.png", id:"_80black"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/btn2.png", id:"btn2"},
		{src:"images/btn3.png", id:"btn3"},
		{src:"images/car.png", id:"car"},
		{src:"images/ch.png", id:"ch"},
		{src:"images/chihuo_1.png", id:"chihuo_1"},
		{src:"images/chihuo_2.png", id:"chihuo_2"},
		{src:"images/chihuo_3.png", id:"chihuo_3"},
		{src:"images/dialog.png", id:"dialog"},
		{src:"images/energy.png", id:"energy"},
		{src:"images/energy100.png", id:"energy100"},
		{src:"images/fcbg.png", id:"fcbg"},
		{src:"images/fcbg2.png", id:"fcbg2"},
		{src:"images/jy.png", id:"jy"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/movenote.png", id:"movenote"},
		{src:"images/musicicon1.png", id:"musicicon1"},
		{src:"images/musicicon2.png", id:"musicicon2"},
		{src:"images/newbtn.png", id:"newbtn"},
		{src:"images/okbg2.png", id:"okbg2"},
		{src:"images/paonan_1.png", id:"paonan_1"},
		{src:"images/paonan_2.png", id:"paonan_2"},
		{src:"images/paonan_3.png", id:"paonan_3"},
		{src:"images/phbtitle.png", id:"phbtitle"},
		{src:"images/pn.png", id:"pn"},
		{src:"images/refreshbtn.png", id:"refreshbtn"},
		{src:"images/returnbtn.png", id:"returnbtn"},
		{src:"images/roadbg.png", id:"roadbg"},
		{src:"images/scjbtn.png", id:"scjbtn"},
		{src:"images/sharepop.png", id:"sharepop"},
		{src:"images/shoyebg.png", id:"shoyebg"},
		{src:"images/shuoming_icon.png", id:"shuoming_icon"},
		{src:"images/siji.png", id:"siji"},
		{src:"images/title333.png", id:"title333"},
		{src:"images/uu.png", id:"uu"},
		{src:"images/wanka_1.png", id:"wanka_1"},
		{src:"images/wanka_2.png", id:"wanka_2"},
		{src:"images/wanka_3.png", id:"wanka_3"},
		{src:"images/wenqing_1.png", id:"wenqing_1"},
		{src:"images/wenqing_2.png", id:"wenqing_2"},
		{src:"images/wenqing_3.png", id:"wenqing_3"},
		{src:"images/wk.png", id:"wk"},
		{src:"images/wq.png", id:"wq"},
		{src:"images/xs.png", id:"xs"},
		{src:"images/youxishuomingtxt.png", id:"youxishuomingtxt"},
		{src:"images/yxsmtitle.png", id:"yxsmtitle"},
		{src:"images/zhongjiangguizepoptxt.png", id:"zhongjiangguizepoptxt"},
		{src:"images/zhongjiangguizetxt.png", id:"zhongjiangguizetxt"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._1black = function() {
	this.initialize(img._1black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib._40black = function() {
	this.initialize(img._40black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib._80black = function() {
	this.initialize(img._80black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.btn3 = function() {
	this.initialize(img.btn3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,94);


(lib.ch = function() {
	this.initialize(img.ch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.chihuo_1 = function() {
	this.initialize(img.chihuo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,165);


(lib.chihuo_2 = function() {
	this.initialize(img.chihuo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,293);


(lib.chihuo_3 = function() {
	this.initialize(img.chihuo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,215);


(lib.dialog = function() {
	this.initialize(img.dialog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,185);


(lib.energy = function() {
	this.initialize(img.energy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,277);


(lib.energy100 = function() {
	this.initialize(img.energy100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,260);


(lib.fcbg = function() {
	this.initialize(img.fcbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,804,478);


(lib.fcbg2 = function() {
	this.initialize(img.fcbg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,493);


(lib.jy = function() {
	this.initialize(img.jy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,30);


(lib.movenote = function() {
	this.initialize(img.movenote);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,89);


(lib.musicicon1 = function() {
	this.initialize(img.musicicon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.musicicon2 = function() {
	this.initialize(img.musicicon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.newbtn = function() {
	this.initialize(img.newbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,48);


(lib.okbg2 = function() {
	this.initialize(img.okbg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,162);


(lib.paonan_1 = function() {
	this.initialize(img.paonan_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,274);


(lib.paonan_2 = function() {
	this.initialize(img.paonan_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,306);


(lib.paonan_3 = function() {
	this.initialize(img.paonan_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,388,128);


(lib.phbtitle = function() {
	this.initialize(img.phbtitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,79);


(lib.pn = function() {
	this.initialize(img.pn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.refreshbtn = function() {
	this.initialize(img.refreshbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,112);


(lib.returnbtn = function() {
	this.initialize(img.returnbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,112);


(lib.roadbg = function() {
	this.initialize(img.roadbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.scjbtn = function() {
	this.initialize(img.scjbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,48);


(lib.sharepop = function() {
	this.initialize(img.sharepop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.shoyebg = function() {
	this.initialize(img.shoyebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.shuoming_icon = function() {
	this.initialize(img.shuoming_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,616,117);


(lib.siji = function() {
	this.initialize(img.siji);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,247);


(lib.title333 = function() {
	this.initialize(img.title333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,132);


(lib.uu = function() {
	this.initialize(img.uu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,111);


(lib.wanka_1 = function() {
	this.initialize(img.wanka_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,221);


(lib.wanka_2 = function() {
	this.initialize(img.wanka_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,193);


(lib.wanka_3 = function() {
	this.initialize(img.wanka_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,306);


(lib.wenqing_1 = function() {
	this.initialize(img.wenqing_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,161);


(lib.wenqing_2 = function() {
	this.initialize(img.wenqing_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,210);


(lib.wenqing_3 = function() {
	this.initialize(img.wenqing_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,184);


(lib.wk = function() {
	this.initialize(img.wk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.wq = function() {
	this.initialize(img.wq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.xs = function() {
	this.initialize(img.xs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,138);


(lib.youxishuomingtxt = function() {
	this.initialize(img.youxishuomingtxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,28);


(lib.yxsmtitle = function() {
	this.initialize(img.yxsmtitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,79);


(lib.zhongjiangguizepoptxt = function() {
	this.initialize(img.zhongjiangguizepoptxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,286);


(lib.zhongjiangguizetxt = function() {
	this.initialize(img.zhongjiangguizetxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,28);


(lib.xulibtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.wenqing_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("文青", "bold 28px 'Microsoft YaHei'", "#F2EBD9");
	this.text.lineHeight = 39;
	this.text.setTransform(62,204.2);

	this.instance = new lib.wq();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,245.2);


(lib.weidaoda_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.wq();

	this.instance_1 = new lib.pn();

	this.instance_2 = new lib.wk();

	this.instance_3 = new lib.ch();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.wanka_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("玩咖", "bold 28px 'Microsoft YaHei'", "#F2EBD9");
	this.text.lineHeight = 39;
	this.text.setTransform(64,204.2);

	this.instance = new lib.wk();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,245.2);


(lib.sharepop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sharepop();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.sharebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scjbtn();

	this.instance_1 = new lib.scjbtn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,48);


(lib.roadbgmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roadbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.restartbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.refreshbtn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,112);


(lib.paonan_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("跑男", "bold 28px 'Microsoft YaHei'", "#F2EBD9");
	this.text.lineHeight = 39;
	this.text.setTransform(63,204.2);

	this.instance = new lib.pn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,245.2);


(lib.notebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youxishuomingtxt();
	this.instance.setTransform(0,71.3);

	this.instance_1 = new lib.btn3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,99.3);


(lib.nengliang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.energy100();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,260);


(lib.musicicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.musicicon1();

	this.instance_1 = new lib.musicicon2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.movenote_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.movenote();

	this.instance_1 = new lib.movenote();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,89);


(lib.jb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.gamestart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.daoda_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer 1
	this.instance = new lib.wenqing_1();
	this.instance.setTransform(56,72.5);

	this.instance_1 = new lib.wenqing_2();
	this.instance_1.setTransform(9,48);

	this.instance_2 = new lib.wenqing_3();
	this.instance_2.setTransform(59.5,61);

	this.instance_3 = new lib.paonan_1();
	this.instance_3.setTransform(151.5,16);

	this.instance_4 = new lib.paonan_2();
	this.instance_4.setTransform(149.5,0);

	this.instance_5 = new lib.paonan_3();
	this.instance_5.setTransform(0,89);

	this.instance_6 = new lib.wanka_1();
	this.instance_6.setTransform(91,42.5);

	this.instance_7 = new lib.wanka_2();
	this.instance_7.setTransform(30,56.5);

	this.instance_8 = new lib.wanka_3();
	this.instance_8.setTransform(132.5,0);

	this.instance_9 = new lib.chihuo_1();
	this.instance_9.setTransform(27,70.5);

	this.instance_10 = new lib.chihuo_2();
	this.instance_10.setTransform(63,6.5);

	this.instance_11 = new lib.chihuo_3();
	this.instance_11.setTransform(60,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56,72.5,276,161);


(lib.closebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.returnbtn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,112);


(lib.chongxuanbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.newbtn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,48);


(lib.chihuo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("吃货", "bold 28px 'Microsoft YaHei'", "#F2EBD9");
	this.text.lineHeight = 39;
	this.text.setTransform(65,204.2);

	this.instance = new lib.ch();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,245.2);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,94);


(lib._80blackbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._80black();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib._40blackbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._40black();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib._1blackbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1black();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.scorebtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层 2
	this.instance = new lib.jb();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(10));

	// Layer 1
	this.instance_1 = new lib.zhongjiangguizetxt();
	this.instance_1.setTransform(0,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,100.1);


(lib.popomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.title = new cjs.Text("", "bold 20px 'Microsoft YaHei'", "#FF0000");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 24;
	this.title.lineWidth = 302;
	this.title.setTransform(77,-35);

	this.jianzhu = new lib.daoda_head();
	this.jianzhu.setTransform(159.9,54.6,0.36,0.36,0,0,0,410,98.9);

	this.instance = new lib.siji();
	this.instance.setTransform(102,191.4,0.8,0.8);

	this.instance_1 = new lib.dialog();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.jianzhu},{t:this.title}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-35,306.1,424);


(lib.fuzeng1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gamestart = new lib.gamestart();
	this.gamestart.setTransform(824.5,467,1,1,0,0,0,71,71);

	this.timeline.addTween(cjs.Tween.get(this.gamestart).wait(1));

	// Layer 3
	this.instance = new lib.shoyebg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.fuceng1bg = new lib._1blackbg();
	this.fuceng1bg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng1bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.fuceng6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egj7AV4MAAAgrvMBH3AAAMAAAArvg");
	mask.setTransform(582.1,412.1);

	// Layer 5
	this.instance = new lib.uu();
	this.instance.setTransform(529.2,422.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.siji();
	this.instance_1.setTransform(68,336);

	this.instance_2 = new lib.xs();
	this.instance_2.setTransform(817,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 6
	this.instance_3 = new lib.zhongjiangguizepoptxt();
	this.instance_3.setTransform(220.8,263.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 3
	this.instance_4 = new lib.phbtitle();
	this.instance_4.setTransform(139,147.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.close = new lib.closebtn();
	this.close.setTransform(834,513,1,1,0,0,0,48,56);

	this.instance_5 = new lib.fcbg();
	this.instance_5.setTransform(87,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.close}]}).wait(1));

	// Layer 2
	this.fuceng6bg = new lib._40blackbg();
	this.fuceng6bg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng6bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.fuceng5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.siji();
	this.instance.setTransform(213,334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.title333();
	this.instance_1.setTransform(188,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.jianzhu = new lib.daoda_head();
	this.jianzhu.setTransform(589.6,177.6,0.36,0.36,0,0,0,410,98.9);

	this.instance_2 = new lib.okbg2();
	this.instance_2.setTransform(430,116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.jianzhu}]}).wait(1));

	// Layer 1
	this.chongxuanbtn = new lib.chongxuanbtn();
	this.chongxuanbtn.setTransform(414,524,1,1,0,0,0,90,24);

	this.sharebtn = new lib.sharebtn();
	this.sharebtn.setTransform(630,524,1,1,0,0,0,110,24);

	this.mudi = new cjs.Text("", "bold 30px 'Microsoft YaHei'", "#F2EBD9");
	this.mudi.name = "mudi";
	this.mudi.textAlign = "center";
	this.mudi.lineHeight = 42;
	this.mudi.lineWidth = 444;
	this.mudi.setTransform(522.1,334.4);

	this.restartbtn = new lib.restartbtn();
	this.restartbtn.setTransform(712.4,139.4,1,1,0,0,0,48,56);

	this.content = new cjs.Text("", "20px 'Microsoft YaHei'", "#F2EBD9");
	this.content.name = "content";
	this.content.textAlign = "center";
	this.content.lineHeight = 28;
	this.content.lineWidth = 340;
	this.content.setTransform(520.1,380);

	this.title = new cjs.Text("", "bold 30px 'Microsoft YaHei'", "#F2EBD9");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 42;
	this.title.lineWidth = 444;
	this.title.setTransform(522.1,288.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.content},{t:this.restartbtn},{t:this.mudi},{t:this.sharebtn},{t:this.chongxuanbtn}]}).wait(1));

	// Layer 4
	this.instance_3 = new lib.fcbg2();
	this.instance_3.setTransform(257.4,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 5
	this.fuceng5bg = new lib._40blackbg();
	this.fuceng5bg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng5bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.fuceng4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.siji();
	this.instance.setTransform(213,334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.chongxuanbtn = new lib.chongxuanbtn();
	this.chongxuanbtn.setTransform(414,484,1,1,0,0,0,90,24);

	this.instance_1 = new lib.title333();
	this.instance_1.setTransform(188,52);

	this.sharebtn = new lib.sharebtn();
	this.sharebtn.setTransform(630,484,1,1,0,0,0,110,24);

	this.restartbtn = new lib.restartbtn();
	this.restartbtn.setTransform(712.4,139.4,1,1,0,0,0,48,56);

	this.content = new cjs.Text("", "22px 'Microsoft YaHei'", "#F2EBD9");
	this.content.name = "content";
	this.content.textAlign = "center";
	this.content.lineHeight = 31;
	this.content.lineWidth = 340;
	this.content.setTransform(520.1,348);

	this.title = new cjs.Text("", "bold 30px 'Microsoft YaHei'", "#F2EBD9");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 42;
	this.title.lineWidth = 444;
	this.title.setTransform(522.1,298.4);

	this.head = new lib.weidaoda_head();
	this.head.setTransform(769,210.2,0.8,0.8,0,0,0,410,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.head},{t:this.title},{t:this.content},{t:this.restartbtn},{t:this.sharebtn},{t:this.instance_1},{t:this.chongxuanbtn}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.fcbg2();
	this.instance_2.setTransform(257.4,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.fuceng4bg = new lib._40blackbg();
	this.fuceng4bg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng4bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.fuceng3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.chihuo_btn = new lib.chihuo_btn();
	this.chihuo_btn.setTransform(836.1,343.7,1,1,0,0,0,95,122.6);

	this.wanka_btn = new lib.wanka_btn();
	this.wanka_btn.setTransform(624.1,343.7,1,1,0,0,0,95,122.6);

	this.paonan_btn = new lib.paonan_btn();
	this.paonan_btn.setTransform(414.1,343.7,1,1,0,0,0,95,122.6);

	this.wenqing_btn = new lib.wenqing_btn();
	this.wenqing_btn.setTransform(204.1,343.7,1,1,0,0,0,95,122.6);

	this.text = new cjs.Text("身份选择", "bold 50px 'Microsoft YaHei'", "#F2EBD9");
	this.text.lineHeight = 68;
	this.text.setTransform(411.6,112.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.wenqing_btn},{t:this.paonan_btn},{t:this.wanka_btn},{t:this.chihuo_btn}]}).wait(1));

	// Layer 2
	this.fuceng3bg = new lib._80blackbg();
	this.fuceng3bg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng3bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.fuceng2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.siji();
	this.instance.setTransform(68,336);

	this.text = new cjs.Text("3/成功到达目的地\n的乘客即为成功", "20px 'Microsoft YaHei'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.setTransform(682.8,408);

	this.text_1 = new cjs.Text("2/松开后出租车\n开向指定范围", "20px 'Microsoft YaHei'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.setTransform(471.2,408);

	this.text_2 = new cjs.Text("1/给老滴哥的\n出租车加油蓄力", "20px 'Microsoft YaHei'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 23;
	this.text_2.setTransform(268.2,408);

	this.instance_1 = new lib.shuoming_icon();
	this.instance_1.setTransform(191.3,280.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_2 = new lib.yxsmtitle();
	this.instance_2.setTransform(131,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.close = new lib.closebtn();
	this.close.setTransform(834,513,1,1,0,0,0,48,56);

	this.instance_3 = new lib.fcbg();
	this.instance_3.setTransform(87,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.close}]}).wait(1));

	// Layer 2
	this.fuceng2bg = new lib._40blackbg();
	this.fuceng2bg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng2bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,640);


(lib.energymc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.xulibtn = new lib.xulibtn();
	this.xulibtn.setTransform(71.5,358.5,1,1,0,0,0,71.5,71.5);

	this.nengliang = new lib.nengliang();
	this.nengliang.setTransform(71.5,138.5,1,1,0,0,0,13.5,130);

	this.instance = new lib.energy();
	this.instance.setTransform(48.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.nengliang},{t:this.xulibtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,429);


// stage content:
(lib.game = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// sharepop
	this.sharepop = new lib.sharepop_1();
	this.sharepop.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.sharepop).wait(1));

	// paihang
	this.fuceng6 = new lib.fuceng6();
	this.fuceng6.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng6).wait(1));

	// shenfen
	this.fuceng3 = new lib.fuceng3();
	this.fuceng3.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng3).wait(1));

	// gamenote
	this.fuceng2 = new lib.fuceng2();
	this.fuceng2.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng2).wait(1));

	// gamebtn
	this.musicicon = new lib.musicicon();
	this.musicicon.setTransform(996.2,37,1,1,0,0,0,25,25);

	this.notebtn = new lib.notebtn();
	this.notebtn.setTransform(981.1,144.5,1,1,0,0,0,38.1,49.5);

	this.scorebtn = new lib.scorebtn();
	this.scorebtn.setTransform(981,253.9,1,1,0,0,0,38,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scorebtn},{t:this.notebtn},{t:this.musicicon}]}).wait(1));

	// daoda
	this.fuceng5 = new lib.fuceng5();
	this.fuceng5.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng5).wait(1));

	// weidaoda
	this.fuceng4 = new lib.fuceng4();
	this.fuceng4.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng4).wait(1));

	// gamestart
	this.fuceng1 = new lib.fuzeng1();
	this.fuceng1.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.fuceng1).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(16,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// movenote
	this.movenote = new lib.movenote_1();
	this.movenote.setTransform(560,280,1,1,0,0,0,133.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.movenote).wait(1));

	// energy
	this.energy = new lib.energymc();
	this.energy.setTransform(120,360.7,1,1,0,0,0,71.5,215);

	this.timeline.addTween(cjs.Tween.get(this.energy).wait(1));

	// popo
	this.popomc = new lib.popomc();
	this.popomc.setTransform(291.4,338.5,1,1,0,0,0,99.4,194.5);

	this.timeline.addTween(cjs.Tween.get(this.popomc).wait(1));

	// car
	this.car = new lib.car_1();
	this.car.setTransform(417,447,1,1,0,0,0,67,47);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// roadbg
	this.roadbg = new lib.roadbgmc();
	this.roadbg.setTransform(520,320,1,1,0,0,0,520,320);

	this.timeline.addTween(cjs.Tween.get(this.roadbg).wait(1));

	// bg
	this.instance_1 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(520,320,1040,640);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;