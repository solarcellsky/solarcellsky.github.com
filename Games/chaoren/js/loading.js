(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1030,
	fps: 30,
	color: "#35CBD9",
	manifest: []
};



// symbols:



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.loading2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.loading3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.loading4 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.loading4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,501,10);


(lib.Symbol1dsfsd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(100,-130,1,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,-130,251,253);


(lib.lo2 = function() {
	this.initialize();

	// 100
	this.num_txt = new cjs.Text("0%", "bold 20px 'Arial'", "#5e3622");
	this.num_txt.name = "num_txt";
	this.num_txt.textAlign = "center";
	this.num_txt.lineHeight = 17;
	this.num_txt.lineWidth = 50;
	this.num_txt.setTransform(-23,33.7,0.875,0.875);

	// loading2.png
	this.instance = new lib.loading2();
	this.instance.setTransform(-45.4,22.3,0.543,0.543);

	this.addChild(this.instance,this.num_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.4,22.3,47.9,42.9);


(lib.Symbolsdfdf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1dsfsd();
	this.instance.setTransform(72.5,70.4,1,1,0,0,0,72.5,70.4);

	this.addChild(this.instance);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.1,76.9,133.3);


(lib.lo = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Symbolsdfdf();
	this.instance.setTransform(185,165,1,1,0,0,0,72.5,70.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(77.8,76.4,145.3,150.6);


(lib._123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// loading2.png
	this.num_mc = new lib.lo2();
	this.num_mc.setTransform(65,190,1,1,0,0,0,42,39.5);

	this.timeline.addTween(cjs.Tween.get(this.num_mc).to({x:590.7},99).wait(1));

	// loading1.png
	this.instance = new lib.lo();
	this.instance.setTransform(26.6,80,1,1,0,0,0,142.5,155.5);

	// this.timeline.addTween(cjs.Tween.get(this.instance).to({x:486.6},99).wait(1));
	this.addChild(this.instance);
	

	// loading4.png (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_40 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_41 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_42 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_43 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_44 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_45 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_46 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_47 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_48 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_49 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_50 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_53 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_54 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_59 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_64 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_68 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_76 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_78 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_79 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_80 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_82 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_84 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_87 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_90 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_91 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_92 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_93 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_95 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");
	var mask_graphics_99 = new cjs.Graphics().p("EgnIANKMBORAAAIAABkMhORAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-220.5,y:94.3}).wait(1).to({graphics:mask_graphics_1,x:-214.8,y:94.3}).wait(1).to({graphics:mask_graphics_2,x:-210,y:94.3}).wait(1).to({graphics:mask_graphics_3,x:-205.3,y:94.3}).wait(1).to({graphics:mask_graphics_4,x:-200.5,y:94.3}).wait(1).to({graphics:mask_graphics_5,x:-195.8,y:94.3}).wait(1).to({graphics:mask_graphics_6,x:-191,y:94.3}).wait(1).to({graphics:mask_graphics_7,x:-186.3,y:94.3}).wait(1).to({graphics:mask_graphics_8,x:-181.5,y:94.3}).wait(1).to({graphics:mask_graphics_9,x:-176.8,y:94.3}).wait(1).to({graphics:mask_graphics_10,x:-172,y:94.3}).wait(1).to({graphics:mask_graphics_11,x:-167.3,y:94.3}).wait(1).to({graphics:mask_graphics_12,x:-162.5,y:94.3}).wait(1).to({graphics:mask_graphics_13,x:-157.8,y:94.3}).wait(1).to({graphics:mask_graphics_14,x:-153,y:94.3}).wait(1).to({graphics:mask_graphics_15,x:-148.3,y:94.3}).wait(1).to({graphics:mask_graphics_16,x:-143.5,y:94.3}).wait(1).to({graphics:mask_graphics_17,x:-138.8,y:94.3}).wait(1).to({graphics:mask_graphics_18,x:-134,y:94.3}).wait(1).to({graphics:mask_graphics_19,x:-129.3,y:94.3}).wait(1).to({graphics:mask_graphics_20,x:-124.6,y:94.3}).wait(1).to({graphics:mask_graphics_21,x:-119.8,y:94.3}).wait(1).to({graphics:mask_graphics_22,x:-115.1,y:94.3}).wait(1).to({graphics:mask_graphics_23,x:-110.3,y:94.3}).wait(1).to({graphics:mask_graphics_24,x:-105.6,y:94.3}).wait(1).to({graphics:mask_graphics_25,x:-100.8,y:94.3}).wait(1).to({graphics:mask_graphics_26,x:-96.1,y:94.3}).wait(1).to({graphics:mask_graphics_27,x:-91.3,y:94.3}).wait(1).to({graphics:mask_graphics_28,x:-86.6,y:94.3}).wait(1).to({graphics:mask_graphics_29,x:-81.8,y:94.3}).wait(1).to({graphics:mask_graphics_30,x:-77.1,y:94.3}).wait(1).to({graphics:mask_graphics_31,x:-72.3,y:94.3}).wait(1).to({graphics:mask_graphics_32,x:-67.6,y:94.3}).wait(1).to({graphics:mask_graphics_33,x:-62.8,y:94.3}).wait(1).to({graphics:mask_graphics_34,x:-58.1,y:94.3}).wait(1).to({graphics:mask_graphics_35,x:-53.3,y:94.3}).wait(1).to({graphics:mask_graphics_36,x:-48.6,y:94.3}).wait(1).to({graphics:mask_graphics_37,x:-43.8,y:94.3}).wait(1).to({graphics:mask_graphics_38,x:-39.1,y:94.3}).wait(1).to({graphics:mask_graphics_39,x:-34.3,y:94.3}).wait(1).to({graphics:mask_graphics_40,x:-29.6,y:94.3}).wait(1).to({graphics:mask_graphics_41,x:-24.9,y:94.3}).wait(1).to({graphics:mask_graphics_42,x:-20.1,y:94.3}).wait(1).to({graphics:mask_graphics_43,x:-15.4,y:94.3}).wait(1).to({graphics:mask_graphics_44,x:-10.6,y:94.3}).wait(1).to({graphics:mask_graphics_45,x:-5.9,y:94.3}).wait(1).to({graphics:mask_graphics_46,x:-1.1,y:94.3}).wait(1).to({graphics:mask_graphics_47,x:3.6,y:94.3}).wait(1).to({graphics:mask_graphics_48,x:8.4,y:94.3}).wait(1).to({graphics:mask_graphics_49,x:13.1,y:94.3}).wait(1).to({graphics:mask_graphics_50,x:17.9,y:94.3}).wait(1).to({graphics:mask_graphics_51,x:22.6,y:94.3}).wait(1).to({graphics:mask_graphics_52,x:27.4,y:94.3}).wait(1).to({graphics:mask_graphics_53,x:32.1,y:94.3}).wait(1).to({graphics:mask_graphics_54,x:36.9,y:94.3}).wait(1).to({graphics:mask_graphics_55,x:41.6,y:94.3}).wait(1).to({graphics:mask_graphics_56,x:46.4,y:94.3}).wait(1).to({graphics:mask_graphics_57,x:51.1,y:94.3}).wait(1).to({graphics:mask_graphics_58,x:55.9,y:94.3}).wait(1).to({graphics:mask_graphics_59,x:60.6,y:94.3}).wait(1).to({graphics:mask_graphics_60,x:65.3,y:94.3}).wait(1).to({graphics:mask_graphics_61,x:70.1,y:94.3}).wait(1).to({graphics:mask_graphics_62,x:74.8,y:94.3}).wait(1).to({graphics:mask_graphics_63,x:79.6,y:94.3}).wait(1).to({graphics:mask_graphics_64,x:84.3,y:94.3}).wait(1).to({graphics:mask_graphics_65,x:89.1,y:94.3}).wait(1).to({graphics:mask_graphics_66,x:93.8,y:94.3}).wait(1).to({graphics:mask_graphics_67,x:98.6,y:94.3}).wait(1).to({graphics:mask_graphics_68,x:103.3,y:94.3}).wait(1).to({graphics:mask_graphics_69,x:108.1,y:94.3}).wait(1).to({graphics:mask_graphics_70,x:112.8,y:94.3}).wait(1).to({graphics:mask_graphics_71,x:117.6,y:94.3}).wait(1).to({graphics:mask_graphics_72,x:122.3,y:94.3}).wait(1).to({graphics:mask_graphics_73,x:127.1,y:94.3}).wait(1).to({graphics:mask_graphics_74,x:131.8,y:94.3}).wait(1).to({graphics:mask_graphics_75,x:136.6,y:94.3}).wait(1).to({graphics:mask_graphics_76,x:141.3,y:94.3}).wait(1).to({graphics:mask_graphics_77,x:146.1,y:94.3}).wait(1).to({graphics:mask_graphics_78,x:150.8,y:94.3}).wait(1).to({graphics:mask_graphics_79,x:155.6,y:94.3}).wait(1).to({graphics:mask_graphics_80,x:160.3,y:94.3}).wait(1).to({graphics:mask_graphics_81,x:165,y:94.3}).wait(1).to({graphics:mask_graphics_82,x:169.8,y:94.3}).wait(1).to({graphics:mask_graphics_83,x:174.5,y:94.3}).wait(1).to({graphics:mask_graphics_84,x:179.3,y:94.3}).wait(1).to({graphics:mask_graphics_85,x:184,y:94.3}).wait(1).to({graphics:mask_graphics_86,x:188.8,y:94.3}).wait(1).to({graphics:mask_graphics_87,x:193.5,y:94.3}).wait(1).to({graphics:mask_graphics_88,x:198.3,y:94.3}).wait(1).to({graphics:mask_graphics_89,x:203,y:94.3}).wait(1).to({graphics:mask_graphics_90,x:207.8,y:94.3}).wait(1).to({graphics:mask_graphics_91,x:212.5,y:94.3}).wait(1).to({graphics:mask_graphics_92,x:217.3,y:94.3}).wait(1).to({graphics:mask_graphics_93,x:222,y:94.3}).wait(1).to({graphics:mask_graphics_94,x:226.8,y:94.3}).wait(1).to({graphics:mask_graphics_95,x:231.5,y:94.3}).wait(1).to({graphics:mask_graphics_96,x:236.3,y:94.3}).wait(1).to({graphics:mask_graphics_97,x:241,y:94.3}).wait(1).to({graphics:mask_graphics_98,x:245.8,y:94.3}).wait(1).to({graphics:mask_graphics_99,x:250.5,y:94.3}).wait(1));

	// loading4.png
	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(238,183.6,1,1,0,0,0,250.5,5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,93.8,129.4,133.3);


(lib.loading_1 = function() {
	this.initialize();

	// loading1.png
	this.man_mc = new lib._123();
	this.man_mc.setTransform(335.8,479.1,1,1,0,0,0,266.3,155.5);

	// loading3.png
	this.instance = new lib.loading3();
	this.instance.setTransform(57.1,493.2);

	this.addChild(this.instance,this.man_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400.5,417.4,979.6,133.3);


// stage content:
(lib.loading = function() {
	this.initialize();

	// 图层 1
	this.loading_mc = new lib.loading_1();
	this.loading_mc.setTransform(340.5,515.5,1,1,0,0,0,320.5,515.5);

	this.addChild(this.loading_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.5,932.4,979.6,133.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;