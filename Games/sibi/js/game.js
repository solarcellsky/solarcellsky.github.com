(function(e, c) {
	var processIngSubmitScore = false;
	function D(a, b) {
		return 0 == b ? a : D(b, a % b)
	}
	function E(a, b) {
		return 1 == b ? a[0] : D(a[b - 1], E(a, b - 1))
	}
	// 初始化执行，根据概率装载钞票
	function L() {
		var a = APP.currency || [],
			b = a.length,
			g = [],
			c;
		for (c = 0; c < b; c++) g.push(+Math.round(a[c].p)), F.push(+a[c].v);
		var a = E(g, b),
			d = !1;
		for (c = 0; c < b; c++) g[c] /= a, 9 < g[c] && (d = !0);
		//if(g[b - 1] == 0) g[b - 1] = 1;
		//if (d) for (c = 0; c < b; c++) g[c] = Math.round(g[c] / g[b - 1]);
		for (c = 0; c < b; c++) {
			for (a = 0; a < g[c]; a++) B.push(c);
			w += g[c]
		}
	}
	// 初始化执行，游戏主页面图，绑定元素事件
	function M() {
		var a = new c.Shape;
		a.graphics.beginFill("#820002").rect(0, 0, 640, 1E3);
		//d.addChild(a);
		var b = new c.Bitmap(h.getResult("bg"));
		d.addChild(b);
		N();
		var b = new e.PlayerCurrency;
		d.addChild(b);
		//a = new c.Bitmap(h.getResult("currLogo"));
		//a.x = 394;
		//a.y = 344;
		//a.scaleX = 80 / a.getBounds().width;
		//a.scaleY = 80 / a.getBounds().height;
		//d.addChild(a);
		//a = a.clone();
		//a.name = "cloneLogo";
		//a.visible = !1;
		//d.addChild(a);
		var g = new e.SumInfo;
		g.name = "sumInfo";
		g.y = 200;
		d.addChild(g);
		a = new c.Bitmap(h.getResult("starttip"));
		a.name = "arrow";
		a.x = (640 - a.getBounds().width) / 2;
		a.y = 480;
		a.visible = !1;
		d.addChild(a);
		a = new e.StartPage;
		d.addChild(a);
		// 定时执行背景飘落动画
		//setInterval(O, 1E3);
		var p, f = 0;
		b.on("mousedown", function(a) {
			I(!0);
			q ? p = a.localY : (p = 0, l = 3)
		});
		b.on("pressmove", function() {
			1 == l && 0 < p && (P(), l = 2)
		});
		var lastPressTime = new Date().getTime();
		b.on("pressup", function(a) {
			var now = new Date().getTime();
			if((now - lastPressTime) < 100){
				return;
			}
			lastPressTime = now;
			3 != l && 50 < p - a.localY && (f = F[B[x % w]], C || (r += f), x++, b.playAnimation(), c.Sound.play("count", !0));
			var sum = 10 * r.toFixed(1) / 10;
			var highScore = APP.opponentScope;
			var wPersent = (highScore-sum)/highScore;
			if(wPersent < 0) wPersent = 0,$(".progress_bar_part").hide();
			var len = wPersent*192;
			$(".progress_bar_brand").css("width",len+"px");
			$(".progress_bar_part").css("left",len+"px");
			//O();
			backStar(f);
		});
		c.Ticker.addEventListener("tick", function() {
			g.getChildByName("sum").text = "￥" + 10 * r.toFixed(1) / 10;
			b.genCurrency();
		})
	}
	function N() {
		for (var a = 0; a < s; a++) {
			m[a] = [];
			for (var b = 0; 5 > b; b++) {
				var g = new c.Bitmap(h.getResult("d0"));
				g.regX = g.getBounds().width / 2;
				g.regY = g.getBounds().height / 2;
				g.x = n(640);
				g.y = -500 + n(1E3);
				g.visible = !1;
				m[a].push(g);
				d.addChild(m[a][b])
			}
		}
	}
	// 初始化执行，
	function J() {
		var a = d.canvas,
			b = window.innerWidth,
			c = window.innerHeight - 3,
			e = 640 * c / 1E3;
		Q || (b >= e ? (b = e, d.x = 0) : d.x = (b - e) / 2);
		a.width = 640;
		a.height = 1E3;
		a.style.width = Math.min(b, 410) + "px";
		a.style.height = c + "px"
	}
	// 定时执行，背景动画
	function O() {
		for (var a, b = 0; 1 > b; b++) a = m[y][b], a.visible = !0, c.Tween.get(a).to({
			x: n(640),
			y: a.getBounds().height / 2 + 1100,
			rotation: 720 + n(400)
		}, 1E3 + n(800)).to({
			visible: !1
		}, 10).to({
			x: n(640),
			y: -500 + n(500),
			rotation: 0
		}, 10);
		y++;
		y %= s
	}
	
	function backStar(f){
		var bW = 30;
		if(f == 100){
			//c.Sound.play("bigMusic", !0);
		}
		if(f > 50){
			var $s = $("<img class='backStar' src='"+window.www_res_domain+"/image/v2/sheep.png' />");
			bW = 40;
		} else {
			var $s = $("<img class='backStar' src='"+window.www_res_domain+"/image/v2/yen.png' />");
		}
		$s.css({
			"top":(80+n(180))+"px",
			"width":(n(20)+bW)+"px",
			"left":(50+n(180))+"px"
		})
		$(".game-frame").append($s);
		$s.animate({
			"opacity":"1",
			"transform": "rotate(0deg)"
		},400,'ease-out',function(){
			setTimeout(function(){
				$s.animate({
					"opacity":"0",
					"width":"0px",
				},200,'ease-in',function(){
					$s.remove();
				});
			},100);
		});
	}
	/*
	function backStar(f){
		if(f == 100){
			//c.Sound.play("bigMusic", !0);
		}
		sheep_1.visible = 0;
		sheep_2.visible = 0;
		sheep_3.visible = 0;
		if(f < 50){
			sheep_1.visible = 1;
		} else if(f == 50) {
			sheep_2.visible = 1;
		} else if(f == 100) {
			sheep_3.visible = 1;
		} 
	}
	*/
	function I(a) {
		var b = "";
		APP.end ? (b = "亲，好可惜，活动已经结束了，下次早点来哦~", q = !1) : a && (0 >= APP.remainAllTimes ? (b = "亲，好可惜，游戏次数已经用完啦，请关注后续活动吧~", q = !1) : 0 >= APP.remainDayTimes && (b = "亲，好可惜，今天的游戏次数已经用完啦，明天再来挑战吧！", q = !1));
		q || (APP.showTip(b), u("tooltipPage", !0));
		return q
	}
	function n(a) {
		return parseInt(Math.random() * a)
	}
	// 定时执行，更新剩余时间，判断是否结束，提交成绩等
	function P() {
		processIngSubmitScore = false;
		d.getChildByName("arrow").visible = !1;
		if(v != null) return;
		v = setInterval(function() {
			if(0 < t){
				t--;
				if(t==2){
					r += n(100);
				}
				d.getChildByName("sumInfo").getChildByName("time").text = t + '"';
				if(t == 0){
					if(processIngSubmitScore) return;
					C = !0;
					APP.pkResult();
					l = 3;
					processIngSubmitScore = true;
					clearInterval(v);
					v = null;
				}
			}else{
				/*
				if(0 >= APP.uid){
					APP.incrCount();
					u("popupPage", !0);
					clearInterval(v);
					v = null
				}else{
					C = !0;
					APP.getScore(null, !0);
				}
				*/
				clearInterval(v);
				v = null;
			}
		}, 1000)
		
	}
	function z() {
		//d.getChildByName("endPage").visible = !1;
		//d.getChildByName("rulePage").visible = !1;
		//d.getChildByName("rankPage").visible = !1;
		d.getChildByName("arrow").visible = !0;
		x = r = 0;
		t = APP.IIMEOUT;
		d.getChildByName("sumInfo").getChildByName("time").text = t + '"';
		l = 1;
		C = !1
	}
	function u(a, b) {
		var c = d.getChildByName(a),
			f;
		if (c) {
			c.visible = b;
			if (f = c.getChildByName("frame")) f.visible = b, f.htmlElement.style.display = b ? "block" : "none";
			//b && "ticketPage" != a ? e.getChildByName("domBar").htmlElement.style.display = "none" : e.getChildByName("domBar").htmlElement.style.display = "block"
		}
		return c
	}
	var f, d, h, Q = c.Touch.isSupported(),
		w = 0,
		B = [],
		F = [],
		m = [],
		s = APP.currency.length,
		A = s,
		y = 0,
		x = 0,
		r = 0,
		t = APP.IIMEOUT,
		v = null,
		l = 0,
		C = !1,
		q = !0;
	e.Game = function(a, b) {
		d = a;
		h = b || {};
		h.getResult = function(a) {
			return h[a]
		};
		L();
		J();
		M()
	};
	e.Game.prototype.go = function(a, b) {
		u(a, !! b)
	};
	e.Game.prototype.end = function(a) {
		//u("endPage", a);
		if(!a){
			z();
		}
		//a ? (d.getChildByName("rankPage").visible = !1, d.getChildByName("rulePage").visible = !1) : z()
	};
	e.Game.prototype.getSum = function() {
		return 10 * r.toFixed(1) / 10
	};
	e.Game.prototype.isIng = function() {
		return null != v
	};
	e.Game.prototype.abort = function() {
		clearInterval(v);
		z()
	};
	e.Game.prototype.checkPlayable = I;
	window.onresize = J;
	// 生成初始化页面和startTip
	(e.StartPage = function() {
		var a = this;
		a.initialize();
		var b = new c.Bitmap(h.getResult("splash"));
		a.addChild(b);
		var g = new e.StartTip;
		g.x = (640 - g.getBounds().width) / 2;
		g.y = 40;
		//a.addChild(g);
		g = new c.Bitmap(h.getResult("splashtitle"));
		g.x = (640 - g.getBounds().width) / 2;
		g.y = 250;
		a.addChild(g);
		g = new c.Bitmap(h.getResult("splash_hongbao"));
		g.x = (b.getBounds().width - g.getBounds().width) / 2;
		g.y = 725;
		a.addChild(g);
		var f = new c.Bitmap(h.getResult("starttip"));
		f.x = (b.getBounds().width - f.getBounds().width) / 2;
		f.y = 520;
		
		//a.addChild(f);
		var G;
		g.on("mousedown", function(a) {
			G = a.localY
		});
		g.on("pressmove", function(a) {
			var b = a.currentTarget;
			a = a.localY - G;
			700 > b.y + a && (b.y += a)
		});
		a.on("pressup", function(b) {
			c.Sound.play("count", !0);
			//d.getChildByName("bottomBar").getChildByName("domBar").htmlElement.style.display = "block";
			c.Tween.get(g).to({
				y: -1E3
			}, 400).call(function() {
				z();
				clearInterval(tipTimer);
				$(".start_tip").remove();
				a.visible = !1
			});
			$(".talker_cont").show();
		});
		b.on("mousedown", function() {})
	}).prototype = f = new c.Container;
	(e.StartTip = function() {
		this.initialize();
		var a = new c.Text("已经有", "38px Arial", "white");
		this.addChild(a);
		var b = new c.Text((APP.userCount || 0) + "", "bold 40px Arial", "#ffff00");
		b.x = a.getBounds().width;
		b.y = -3;
		this.addChild(b);
		a = new c.Text("人参加了疯狂数钱", "38px Arial", "white");
		a.x = b.x + b.getBounds().width;
		this.addChild(a)
	}).prototype = f = new c.Container;
	f.reload = function(a) {
		this.visible = !0
	};
	// 首次执行，生成待刷钞票
	(e.PlayerCurrency = function() {
		this.initialize();
		var a = new c.Bitmap(h.getResult("mb0"));
		a.regX = a.getBounds().width / 2;
		a.regY = a.getBounds().height / 2;
		a.y = 483;
		this.x = 320;
		this.y = 282;
		this.addChild(a);
		for (var a = null, b = 0; b < s; b++) a = new c.Bitmap(h.getResult("m0")), a.regX = a.getBounds().width / 2, a.regY = a.getBounds().height / 2, a.y = 350, a.visible = !1, this.addChild(a)
	}).prototype = f = new c.Container;
	f.playAnimation = function() {
		var a = this.children[A];
		a.visible = !0;
		c.Tween.get(a).to({
			y: -1E3,
			scaleX: .5,
			scaleY: .5
		}, 300).to({
			y: 350,
			scaleX: 1,
			scaleY: 1,
			visible: !1
		}, 0);
		A--;
		1 > A && (A = s)
	};
	// 定时执行，更新待刷钞票
	f.genCurrency = function() {
		var a = B[x % w],
			b = h.getResult("mb" + a),
			c = h.getResult("m" + a),
			a = h.getResult("d" + a);
		this.children[0].image = b;
		for (b = 1; b <= s; b++) this.children[b].image = c;
		c = 0;
		for (b = m.length; c < b; c++) for (var d = 0, e = m[c].length; d < e; d++) m[c][d].image = a
	};
	(e.SumInfo = function() {
		this.initialize();
		//var a = new c.Bitmap(h.getResult("tmbg"));
		//a.x = (640 - a.getBounds().width) / 2;
		//a.y = 30;
		//a.visible = !1;
		//this.addChild(a);
		var b = new c.Text("￥" + r, "bold 50px Arial", "#fe383a");
		b.name = "sum";
		b.textAlign = "center";
		b.textBaseline = "middle";
		b.x = 320;
		//b.y = a.y + a.getBounds().height / 2;
		b.y = 30;
		b.visible = !1;
		this.addChild(b);
		//b = a.clone();
		//b.scaleX = .7;
		//b.x = (640 - .7 * a.getBounds().width) / 2;
		//b.y = a.y + a.getBounds().height + 15;
		//this.addChild(b);
		//a = new c.Bitmap(h.getResult("tmicon"));
		//a.x = b.x + 14;
		//a.y = b.y + 14;
		//a.visible = !1;
		//this.addChild(a);
		var d = new c.Text(t + '"', "bold 125px Arial", "white");
		d.name = "time";
		d.textAlign = "center";
		d.textBaseline = "middle";
		d.x = 345;
		d.y = b.y + 70;
		this.addChild(d)
	}).prototype = f = new c.Container;
	f.reload = function(a) {
		//APP.getScore(a);
		this.visible = !0
	};
	(e.Mask = function(a) {
		this.initialize();
		var b = new c.Shape;
		b.graphics.beginFill("black").rect(0, 0, 640, 1E3);
		b.alpha = a;
		this.addChild(b)
	}).prototype = f = new c.Container;
})(lib = lib || {}, createjs = createjs || {});
var lib, createjs;