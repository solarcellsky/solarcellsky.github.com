var _$ = ["<label class='name name1'>赛道1：</label>", "<label class='time time1'>计时：0</label>", "<label class='name name2'>赛道2：</label>", "<label class='time time2'>计时：0</label>", "<label class='bestLabel'>最好成绩</label>", "<label class='bestTime'></label>", "<div class='welcome'><h2><a href='http://a.pentv.cn/qm'>游戏</a>《全民快跑》</h2><b>游戏规则：</b><br/>比赛开始后，交替点击屏幕上的脚印快速奔跑到终点！<br/><a href='tz.html?", "link", "24h", "'>查看排行榜</a></div>", "<div class='start'>点击这里开始</div>", "<div class='cheerup'></div>", "<button class='reload'>重来</button>", "<button class='share'>分享</button>", "<button class='rank'>排行榜</button>", "touchmove", ".start", "touchstart click", ".welcome", ".cheerup", ".reload", "touchstart click", ".share", "touchstart click", ".rank", "touchstart click", ".cheerup", "touchstart mousedown", "background-position-y", "ready", ".cheerup", "touchend mouseup", "background-position-y", ".cheerup", ".reload", ".share", ".rank", "finish", "finish", ".name1", "赛道1：", ".name2", "赛道2：", ".time1", "计时：0", ".time2", "计时：0", "left", "left", ".meter1", ".meter2", ".endline", ".meter1", ".meter2", ".endline", "left", "left", ".reload", ".share", ".rank", ".start", ".welcome", ".time1", "计时：", "＂", ".time2", "计时：", "＂", ".bestTime", "＂", ".meter1", "<div class='endline'></div>", "left", "background-position-x", ".meter1", "<div class='endline'></div>", "left", "background-position-x", "left", "left", ".start", ".welcome", ".reload", ".share", ".rank", "<div class='bg'><img class='bg1' src='img/bg.png'><img class='bg2' src='img/bg.png'></div>", "run", "run", "left", "px", "", "left", "<div class='track track", "'><img class='bg1' src='img/track.png'><img class='bg2' src='img/track.png'><label class='meter meter1'>0</label><label class='meter meter2'>10</label></div>", "run", "left", "px", "", ".meter1", ".meter2", "<div class='endline'></div>", "left", ".endline", "left", "background-position-x", "<div class='player player", "'></div>", ".name", "赛道", "：", "background-position", "0 -64px", "ready", "ready", "run", ".time", "计时：", "＂", "finish_before", ".cheerup", ".bestTime", ".bestTime", "＂", "background-position", "0 -32px", "stand", "background-position", "0 0", "run", "finish_before", "finish", ".time", "计时：", "＂", ".debug", "run", "background-position-x", "background-position-x", "finish_before", "left", "px", "", "left", "finish", 'http://a.pentv.cn/qm', "http://i2.tietuku.com/08838046bb10afcd.png", "http://a.pentv.cn/qm", "全民快跑游戏", "敢来挑战百米速度吗？", "#game", "#mode", "#name", "#t", "#uid", "#myName", "#myUid", "", "博尔特", "", "我", "你用了 ", "＂跑赢了", "！\n", "\n要不要把成绩提交到9G？", "你用了 ", "＂跑赢了", "！\n", "你用了 ", "＂跑完了 100 米！\n", "你用了 ", "＂跑完了 100 米！\n", "是否要将成绩提交到9G？", "你和", "持平了呢！\n", "是否要将成绩提交到9G？", "要加油哦！", "还不错哦，加油！加油！", "不错不错！继续努力！！", "太厉害了！这不是一般人能做得到的！", "超级赞！只有极少数人能跑出这么好的成绩！", "神人啊！地球人已经阻止不了你了！你是怎么做到的？！", "", "submit.jsp?type=ajax&uid=", "&t=", "ok", "你的成绩已经成功提交到9G！\n刷新了上一次的最快记录", "＂", "你的成绩已经成功提交到9G！", "在《全民快跑》中跑出了", "秒的成绩，再次超越了自己！还有敢来挑战的吗？", "在《全民快跑》中跑出了", "秒的成绩，完败", "，还有敢来挑战的吗？", "http://a.pentv.cn/qm/index.html?name=", "&uid=", "&t=", "http://a.pentv.cn/qm", "我居然跑不过", "，《全民快跑》Ta的记录是", "秒，谁来替我报仇！", "http://a.pentv.cn/qm/index.html?name=", "&uid=", "&t=", "在《全民快跑》中跑出了", "秒的成绩，还有敢来挑战的吗？", "http://a.pentv.cn/qm/index.html?name=", "&uid=", "&t=", "http://a.pentv.cn/qm", "micromessenger", "tz.html?type=link", "tz.html?type=24h", "http://i1.tietuku.com/8ffdaf13f9592b40.png", "http://i1.tietuku.com/8ffdaf13f9592b40.png", "#share img", "src", "showOptionMenu", "share", "", 'WeixinJSBridgeReady', 'menu:share:appmessage', 'sendAppMessage', 'menu:share:timeline', 'shareTimeline', "640", "640", 'script', 'text/javascript', 'http://game.9g.com/o3.js', 'script'];

function O933d(O9bf9) {
	this.bg;
	this.track1;
	this.track2;
	this.player1;
	this.player2;
	this.timer;
	this.timerCount;
	this.startTime;
	this.DOM = $(O9bf9);
	this.ui()
};
O933d.prototype.ui = function() {
	$(_$[0]).appendTo(this.DOM);
	$(_$[1]).appendTo(this.DOM);
	$(_$[2]).appendTo(this.DOM);
	$(_$[3]).appendTo(this.DOM);
	$(_$[4]).appendTo(this.DOM);
	$(_$[5]).appendTo(this.DOM);
	$(_$[6] + (bca8a() ? _$[7] : _$[8]) + _$[9]).appendTo(this.DOM);
	$(_$[10]).appendTo(this.DOM);
	$(_$[11]).appendTo(this.DOM);
	$(_$[12]).appendTo(this.DOM);
	$(_$[13]).appendTo(this.DOM);
	$(_$[14]).appendTo(this.DOM)
};
O933d.prototype.init = function() {
	this.bg = new e09f1(this);
	this.track1 = new ee1bd(0x1, this.player1, this);
	this.track2 = new ee1bd(0x2, this.player2, this);
	this.player1.ready();
	this.player2.ready();
	var eed89 = this;
	$(document.body).live(_$[15], function(O332a) {
		O332a.preventDefault()
	});
	this.DOM.find(_$[16]).live(_$[17], function(O332a) {
		$(this).hide();
		eed89.DOM.find(_$[18]).hide();
		eed89.DOM.find(_$[19]).show();
		eed89.start();
		eed89.player1.go();
		O332a.preventDefault()
	});
	this.DOM.find(_$[20]).live(_$[21], function(O332a) {
		eed89.reload();
		O332a.preventDefault()
	});
	this.DOM.find(_$[22]).live(_$[23], function(O332a) {
		O3bf7(eed89, true);
		O332a.preventDefault()
	});
	this.DOM.find(_$[24]).live(_$[25], function(O332a) {
		O13fc();
		O332a.preventDefault()
	});
	this.DOM.find(_$[26]).live(_$[27], function(O332a) {
		$(this).css(_$[28], -0x54);
		if (eed89.player2.status == _$[29]) eed89.player2.go();
		eed89.player2.cheerup();
		O332a.preventDefault()
	});
	this.DOM.find(_$[30]).live(_$[31], function(O332a) {
		$(this).css(_$[32], 0x0);
		O332a.preventDefault()
	})
};
O933d.prototype.start = function() {
	this.player1.startTime = new Date();
	this.player2.startTime = new Date();
	var eed89 = this;
	this.timer = true;
	this.startTime = new Date();
	this.timerCount = 0x0;
	setTimeout(function() {
		eed89.enterFrame()
	}, 0x14)
};
O933d.prototype.end = function() {
	this.timer = false;
	this.DOM.find(_$[33]).hide();
	this.DOM.find(_$[34]).show();
	this.DOM.find(_$[35]).show();
	this.DOM.find(_$[36]).show();
	O8eb6(this)
};
O933d.prototype.enterFrame = function() {
	if (this.timer) {
		this.bg.render();
		this.track1.render();
		this.track2.render();
		this.player1.render();
		this.player2.render();
		if (this.player1.status == _$[37] && this.player2.status == _$[38]) this.end();
		this.timerCount++;
		var O4211 = 0x14 * this.timerCount;
		var O67c2 = new Date() - this.startTime;
		var d8481 = O67c2 - O4211;
		var eba33 = 0x14 - d8481;
		if (eba33 < 0x1) eba33 = 0x1;
		var eed89 = this;
		setTimeout(function() {
			eed89.enterFrame()
		}, eba33)
	}
};
O933d.prototype.reload = function() {
	this.DOM.find(_$[39]).text(_$[40] + this.player1.name);
	this.DOM.find(_$[41]).text(_$[42] + this.player2.name);
	this.DOM.find(_$[43]).text(_$[44]);
	this.DOM.find(_$[45]).text(_$[46]);
	this.bg.DOM.css(_$[47], 0x0);
	this.track1.DOM.css(_$[48], 0x0);
	this.track1.DOM.find(_$[49]).text(0x0);
	this.track1.DOM.find(_$[50]).text(0xa);
	this.track1.DOM.find(_$[51]).remove();
	this.track2.DOM.find(_$[52]).text(0x0);
	this.track2.DOM.find(_$[53]).text(0xa);
	this.track2.DOM.find(_$[54]).remove();
	this.player1.DOM.css(_$[55], 0x46);
	this.player2.DOM.css(_$[56], 0x46);
	this.player1.speed = this.player1.oldSpeed;
	this.player2.speed = 0x32;
	this.player2.tap = 0x0;
	this.player2.tapSkip = 0x0;
	this.player1.ready();
	this.player2.ready();
	this.track1.round = 0x0;
	this.track2.round = 0x0;
	this.DOM.find(_$[57]).hide();
	this.DOM.find(_$[58]).hide();
	this.DOM.find(_$[59]).hide();
	this.DOM.find(_$[60]).show();
	this.DOM.find(_$[61]).show()
};
O933d.prototype.showResult = function(O8acf, c6eb6) {
	if (O8acf == -0x1) O8acf = 0x3250;
	this.DOM.find(_$[62]).text(_$[63] + O8acf / 0x3e8 + _$[64]);
	this.DOM.find(_$[65]).text(_$[66] + c6eb6 / 0x3e8 + _$[67]);
	this.DOM.find(_$[68]).text(c6eb6 / 0x3e8 + _$[69]);
	this.track1.DOM.find(_$[70]).text(0x64);
	$(_$[71]).css(_$[72], 0x57).css(_$[73], -0x11).appendTo(this.track1.DOM);
	this.track2.DOM.find(_$[74]).text(0x64);
	$(_$[75]).css(_$[76], 0x57).css(_$[77], -0x11).appendTo(this.track2.DOM);
	this.player1.DOM.css(_$[78], 0xc8);
	this.player1.stand();
	this.player1.useTime = O8acf;
	this.player2.DOM.css(_$[79], 0xc8);
	this.player2.stand();
	this.player2.bestTime = c6eb6;
	this.DOM.find(_$[80]).hide();
	this.DOM.find(_$[81]).hide();
	this.DOM.find(_$[82]).show();
	this.DOM.find(_$[83]).show();
	this.DOM.find(_$[84]).show()
};

function e09f1(O8436) {
	this.game = O8436;
	this.DOM = null;
	this.init();
	return this
};
e09f1.prototype.init = function() {
	this.DOM = $(_$[85]);
	this.DOM.appendTo(this.game.DOM)
};
e09f1.prototype.render = function() {
	if (this.game.player1.status == _$[86] || this.game.player2.status == _$[87]) {
		var O55ee = parseFloat(this.DOM.css(_$[88]).replace(_$[89], _$[90])) - 0x1;
		if (O55ee < -0x140) O55ee = 0x0;
		this.DOM.css(_$[91], O55ee)
	}
};

function ee1bd(O84b6, d24fd, O8436) {
	this.id = O84b6;
	this.player = d24fd;
	this.game = O8436;
	this.round = 0x0;
	this.DOM = null;
	this.init();
	return this
};
ee1bd.prototype.init = function() {
	this.DOM = $(_$[92] + this.id + _$[93]);
	this.DOM.appendTo(this.game.DOM)
};
ee1bd.prototype.render = function() {
	if (this.player.status == _$[94]) {
		var O55ee = parseFloat(this.DOM.css(_$[95]).replace(_$[96], _$[97])) - parseFloat(this.player.speed / 0xf);
		if (O55ee < -0x140) {
			O55ee = 0x0;
			this.round++;
			this.DOM.find(_$[98]).text(this.round * 0xa);
			this.DOM.find(_$[99]).text(this.round * 0xa + 0xa);
			if (this.round == 0x9) {
				$(_$[100]).appendTo(this.DOM)
			};
			if (this.player.old && this.round < 0xa) {
				var O8acf = (this.player.oldTime / 0xa) * this.round;
				var c6eb6 = this.player.useTime;
				var O1ee7 = c6eb6 - O8acf;
				if (O1ee7 > 0x0) {
					var b5d4a = (0xc80 / this.player.oldTime) * O1ee7;
					O55ee = -b5d4a
				}
			}
		};
		this.DOM.css(_$[101], O55ee);
		if (this.round == 0xa) {
			this.DOM.find(_$[102]).css(_$[103], 0x57).css(_$[104], -0x11);
			this.player.finish()
		}
	}
};

function O164b(O84b6, e505d, O8436) {
	this.id = O84b6;
	this.name = e505d;
	this.game = O8436;
	this.old = false;
	this.oldTime = 0x0;
	this.oldSpeed = 0x0;
	this.speed = 0x32;
	this.tap = 0x0;
	this.tapSkip = 0x0;
	this.status;
	this.startTime;
	this.useTime;
	this.bestTime;
	this.frameName;
	this.frameIndex;
	this.skip = 0x0;
	this.DOM = null;
	this.init();
	return this
};
O164b.prototype.init = function() {
	this.DOM = $(_$[105] + this.id + _$[106]);
	this.DOM.appendTo(this.game.DOM);
	this.game.DOM.find(_$[107] + this.id).text(_$[108] + this.id + _$[109] + this.name)
};
O164b.prototype.loadSpeedFromUseTime = function(O8acf) {
	this.old = true;
	this.oldTime = O8acf;
	this.speed = parseFloat(0xc80 * 0xf * 0x14 / O8acf)
};
O164b.prototype.ready = function() {
	this.DOM.css(_$[110], _$[111]);
	this.oldSpeed = this.speed;
	this.frameName = _$[112];
	this.status = _$[113]
};
O164b.prototype.go = function() {
	this.run();
	this.status = _$[114]
};
O164b.prototype.cheerup = function() {
	this.tap++
};
O164b.prototype.finish = function() {
	if (this.old) {
		this.useTime = this.oldTime;
		this.game.DOM.find(_$[115] + this.id).text(_$[116] + this.oldTime / 0x3e8 + _$[117])
	};
	this.speed = 0x32;
	this.status = _$[118];
	if (this.id == 0x2) {
		this.game.DOM.find(_$[119]).hide();
		if (!this.bestTime) {
			this.bestTime = this.useTime
		} else {
			if (this.useTime < this.bestTime) {
				this.bestTime = this.useTime;
				this.game.DOM.find(_$[120]).fadeOut(0x64).fadeIn(0x64).fadeOut(0x64).fadeIn(0x64).fadeOut(0x64).fadeIn(0x64).fadeOut(0x64).fadeIn(0x64).fadeOut(0x64).fadeIn(0x64)
			}
		};
		this.game.DOM.find(_$[121]).text(this.bestTime / 0x3e8 + _$[122])
	}
};
O164b.prototype.stand = function() {
	this.DOM.css(_$[123], _$[124]);
	this.frameName = _$[125]
};
O164b.prototype.run = function() {
	this.DOM.css(_$[126], _$[127]);
	this.frameName = _$[128];
	this.frameIndex = 0x1
};
O164b.prototype.render = function() {
	if (this.status != _$[129] && this.status != _$[130]) {
		this.useTime = new Date() - this.startTime;
		if (this.old && this.useTime > this.oldTime) this.useTime = this.oldTime;
		this.game.DOM.find(_$[131] + this.id).text(_$[132] + this.useTime / 0x3e8 + _$[133]);
		if (this.id == 0x2) {
			this.tapSkip++;
			if (this.tapSkip >= 0x19) {
				this.speed = this.tap * 0x16;
				if (this.speed < 0x14) this.speed = 0x14;
				if (this.speed > 0x96) this.speed = 0x96;
				this.game.DOM.find(_$[134]).text(parseInt(this.speed));
				this.tap = 0x0;
				this.tapSkip = 0x0
			}
		}
	};
	this.skip++;
	if (this.skip >= parseFloat(0x96 / this.speed)) {
		this.frameIndex++;
		if (this.frameName == _$[135]) {
			if (this.frameIndex > 0x6) this.frameIndex = 0x1;
			this.DOM.css(_$[136], -(this.frameIndex - 0x1) * 0x1b)
		} else {
			this.DOM.css(_$[137], 0x0)
		};
		this.skip = 0x0
	};
	if (this.status == _$[138]) {
		var O55ee = parseFloat(this.DOM.css(_$[139]).replace(_$[140], _$[141]));
		O55ee += 1.2;
		this.DOM.css(_$[142], ++O55ee);
		if (O55ee >= 0xc8) {
			this.stand();
			this.status = _$[143]
		}
	}
};
$.ajaxSetup({
	async: true,
	cache: false
});
var ccb04, ad347, f060f, O51cd, O1b45, O345d, eb54c, f29ad;
var O1966 = _$[144];
var O23fc = {
	"imgUrl": _$[145],
	"timeLineLink": _$[146],
	"tTitle": _$[147],
	"tContent": _$[148]
};
(function() {
	ccb04 = new O933d(_$[149]);
	ad347 = $(_$[150]).val();
	f060f = $(_$[151]).val();
	O51cd = $(_$[152]).val();
	O1b45 = $(_$[153]).val();
	O345d = $(_$[154]).val();
	eb54c = $(_$[155]).val();
	f29ad = (O345d != _$[156]);
	if (ad347 == 0x1) {
		ccb04.player1 = new O164b(0x1, _$[157], ccb04);
		ccb04.player1.speed = 0x50
	};
	if (ad347 == 0x2) {
		f060f = decodeURIComponent(f060f);
		ccb04.player1 = new O164b(0x1, f060f, ccb04);
		ccb04.player1.loadSpeedFromUseTime(O51cd)
	};
	ccb04.player2 = new O164b(0x2, (O345d != _$[158] ? O345d : _$[159]), ccb04);
	ccb04.player2.speed = 0x32;
	ccb04.init()
})();

function O8eb6(O8436) {
	if (O8436.player2.useTime == O8436.player2.bestTime) {
		if (O8436.player2.useTime < O8436.player1.useTime) {
			if (f29ad) {
				if (confirm(_$[160] + O8436.player2.useTime / 0x3e8 + _$[161] + O8436.player1.name + _$[162] + d4111(O8436.player2.useTime) + _$[163])) {
					O2f47(O8436.player2.useTime)
				}
			} else {
				alert(_$[164] + O8436.player2.useTime / 0x3e8 + _$[165] + O8436.player1.name + _$[166] + d4111(O8436.player2.useTime))
			}
		}
	} else {
		if (O8436.player2.useTime < O8436.player1.useTime) {
			alert(_$[167] + O8436.player2.useTime / 0x3e8 + _$[168] + d4111(O8436.player2.useTime))
		}
	};
	if (O8436.player2.useTime > O8436.player1.useTime) {
		alert(_$[169] + O8436.player2.useTime / 0x3e8 + _$[170] + d4111(O8436.player2.useTime));
		if (f29ad && O8436.player2.useTime < 0x1f40) {
			if (confirm(_$[171])) {
				O2f47(O8436.player2.useTime)
			}
		}
	};
	if (O8436.player2.useTime == O8436.player1.useTime) {
		alert(_$[172] + O8436.player1.name + _$[173] + d4111(O8436.player2.useTime));
		if (f29ad && O8436.player2.useTime < 0x1f40) {
			if (confirm(_$[174])) {
				O2f47(O8436.player2.useTime)
			}
		}
	};
	O3bf7(O8436, false)
};

function d4111(O8acf) {
	if (O8acf >= 0x3a98) {
		return _$[175]
	} else if (0x2ee0 <= O8acf && O8acf < 0x3a98) {
		return _$[176]
	} else if (0x2710 <= O8acf && O8acf < 0x2ee0) {
		return _$[177]
	} else if (0x1f40 <= O8acf && O8acf < 0x2710) {
		return _$[178]
	} else if (0x1b58 <= O8acf && O8acf < 0x1f40) {
		return _$[179]
	} else if (O8acf < 0x1b58) {
		return _$[180]
	} else {
		return _$[181]
	}
};

function O2f47(O8acf) {
	if (f29ad) {
		var O8375 = _$[182] + eb54c + _$[183] + O8acf;
		$.getJSON(O8375, function(O5298) {
			if (O5298.submit == _$[184]) {
				if (O5298.refreshRankScore) {
					alert(_$[185] + O5298.lastRankScore / 0x3e8 + _$[186])
				} else {
					alert(_$[187])
				}
			}
		})
	}
};

function O3bf7(O8436, c9c4c) {
	var a8a71, O2635;
	if (O8436.player2.bestTime < O8436.player1.useTime) {
		if (O8436.player1.name == O8436.player2.name) {
			a8a71 = O8436.player2.name + _$[188] + O8436.player2.bestTime / 0x3e8 + _$[189]
		} else {
			a8a71 = O8436.player2.name + _$[190] + O8436.player2.bestTime / 0x3e8 + _$[191] + O8436.player1.name + _$[192]
		};
		if (f29ad) {
			O2635 = _$[193] + encodeURIComponent(O8436.player2.name) + _$[194] + eb54c + _$[195] + O8436.player2.bestTime
		} else {
			O2635 = _$[196]
		};
		e3c32(a8a71, O2635, c9c4c, true)
	};
	if (O8436.player2.bestTime > O8436.player1.useTime) {
		a8a71 = _$[197] + O8436.player1.name + _$[198] + O8436.player1.useTime / 0x3e8 + _$[199];
		O2635 = _$[200] + encodeURIComponent(O8436.player1.name) + _$[201] + O1b45 + _$[202] + O8436.player1.useTime;
		e3c32(a8a71, O2635, c9c4c, false)
	};
	if (O8436.player2.bestTime == O8436.player1.useTime) {
		a8a71 = O8436.player2.name + _$[203] + O8436.player2.bestTime / 0x3e8 + _$[204];
		if (f29ad) {
			O2635 = _$[205] + encodeURIComponent(O8436.player2.name) + _$[206] + eb54c + _$[207] + O8436.player2.bestTime
		} else {
			O2635 = _$[208]
		};
		e3c32(a8a71, O2635, c9c4c, true)
	}
};

function bca8a() {
	var O332a = navigator.userAgent.toLowerCase();
	if (O332a.match(/MicroMessenger/i) == _$[209]) {
		return true
	} else {
		return false
	}
};

function O13fc() {
	if (bca8a()) {
		location.href = _$[210]
	} else {
		location.href = _$[211]
	}
};

function e3c32(a8a71, O2635, c9c4c, O2942) {
	imgUrl = O2942 ? _$[212] : _$[213];
	$(_$[214]).attr(_$[215], imgUrl);
	O23fc.tTitle = a8a71;
	O23fc.timeLineLink = O2635;
	if (c9c4c) {
		try {
			WeixinJSBridge.call(_$[216])
		} catch (e) {}
		document.getElementById(_$[217]).style.display = _$[218]
	}
};
document.addEventListener(_$[219], function O5b4b() {
	WeixinJSBridge.on(_$[220], function(fd205) {
		WeixinJSBridge.invoke(_$[221], {
			"img_url": O23fc.imgUrl,
			"link": O23fc.timeLineLink,
			"desc": O23fc.tContent,
			"title": O23fc.tTitle
		}, function(O2657) {
			document.location.href = O1966
		})
	});
	WeixinJSBridge.on(_$[222], function(fd205) {
		WeixinJSBridge.invoke(_$[223], {
			"img_url": O23fc.imgUrl,
			"img_width": _$[224],
			"img_height": _$[225],
			"link": O23fc.timeLineLink,
			"desc": O23fc.tContent,
			"title": O23fc.tTitle
		}, function(O2657) {
			document.location.href = O1966
		})
	})
}, false);
(function() {
	var O9fe2 = document.createElement(_$[226]);
	O9fe2.type = _$[227];
	O9fe2.async = true;
	O9fe2.src = _$[228];
	var O362b = document.getElementsByTagName(_$[229])[0x0];
	O362b.parentNode.insertBefore(O9fe2, O362b);
	O9fe2.onload = function() {
		O9fe2.parentNode.removeChild(O9fe2)
	}
})();