define(function(require, exports, module) {
	var proxyid = 0;
	var proxies = [];
	var _GLOBLE_VAR = {
		temp_value: 0,
		isswipeUping: false,
		swipe_timeout: null,
		swipe_timeout_1: null,
		startX: 0,
		startY: 0,
		isSlideUp: false,
		time: [],
		distance: "",
		now_mailer: "",
		prev_mailer: "",
		limitAmount: "200",
		game_over: false,
		real_play_time: 0,
		share_time: 0,
		share_to_play_again: false,
		state: 1,
		mailer_el: $("#mailer")[0],
		totalSlideUpNum: 0,
		touchidentifier: 0,
		best_score: 0,
		share_text_arr: ["捡钱小王子", "红包挖掘机", "拆红包神手指", "人肉点钞机"],
		score_level: ["80%", "90%", "95%", "99%"],
		user_max_bonus: 0,
		has_play_times: 0,
		customer_type: 1,
		new_customer_arr: [0.06, 0.06, 0.06, 0.08, 0.08, 0.08, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.8, 0.9, 1.5, 2],
		old_customer_arr: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5],
		real_random_arr: []
	};
	createjs.Sound.registerSound({
		src: "img/count.mp3",
		id: "sound"
	});
	var URL_PARAM = {};
	var Logic = {
		actid: "20122",
		stat_data: "fm_110_chb_16",
		_bind: function(el, evt, handler) {
			el.listeners = el.listeners || {};
			if (!el.listeners[evt]) {
				el.listeners[evt] = [handler]
			} else {
				el.listeners[evt].push(handler)
			}
			var proxy = function(e) {
				e.originEvent = e;
				for (var p in e.detail) {
					if (p !== "type") {
						e[p] = e.detail[p]
					}
				}
				handler.call(e.target, e)
			};
			handler.proxy = handler.proxy || {};
			if (!handler.proxy[evt]) {
				handler.proxy[evt] = [proxyid++]
			} else {
				handler.proxy[evt].push(proxyid++)
			}
			proxies.push(proxy);
			if (el.addEventListener) {
				el.addEventListener(evt, proxy, false)
			}
		},
		_unbind: function(el, evt, handler) {
			if (!handler) {
				var handlers = el.listeners[evt];
				if (handlers && handlers.length) {
					handlers.forEach(function(handler) {
						el.removeEventListener(evt, handler, false)
					})
				}
			} else {
				var proxyids = handler.proxy[evt];
				if (proxyids && proxyids.length) {
					proxyids.forEach(function(proxyid) {
						if (el.removeEventListener) {
							el.removeEventListener(evt, proxies[proxyid], false)
						}
					})
				}
			}
		},
		touchStartFunc: function(e) {
			e.preventDefault();
			var touch = e.touches[0];
			var y = Number(touch.pageY);
			_GLOBLE_VAR.startY = y;
			$(".time-out-bg").addClass("hide")
		},
		touchMoveFunc: function(e) {
			e.preventDefault();
			var touch = e.touches[0];
			var y = Number(touch.pageY);
			_GLOBLE_VAR.distance = y - _GLOBLE_VAR.startY;
			if (_GLOBLE_VAR.distance < -20 && Logic.getFingers(e) <= 2) {
				_GLOBLE_VAR.isSlideUp = true;
				clearTimeout(_GLOBLE_VAR.swipe_timeout);
				clearTimeout(_GLOBLE_VAR.swipe_timeout_1);
				_GLOBLE_VAR.isswipeUping = true
			}
		},
		getFingers: function(e) {
			return e.touches ? e.touches.length : 1
		},
		touchMoveEndFunc: function(e) {
			e.preventDefault();
			if (_GLOBLE_VAR.isSlideUp && !_GLOBLE_VAR.game_over) {
				_GLOBLE_VAR.totalSlideUpNum++;
				createjs.Sound.play("sound");
				if (!$("body").hasClass("show-mailer-ani")) {
					$("body").addClass("show-mailer-ani")
				}
				if (!$("body").hasClass("show-ani")) {
					$("body").addClass("show-ani")
				}
				setTimeout(function() {
					if (!_GLOBLE_VAR.isswipeUping) {
						$("body").removeClass("show-mailer-ani")
					}
				}, 200);
				_GLOBLE_VAR.isSlideUp = false;
				var random_value = _GLOBLE_VAR.has_play_times < 5 ? _GLOBLE_VAR.real_random_arr[Math.floor(Math.random() * 200)] : $.Amount.fen2Yuan(parseInt(Math.floor(Math.random() * 3)) + 1);
				$(".value em").text(random_value).parent().removeClass("hide");
				if (!_GLOBLE_VAR.game_over) {
					if (parseFloat(random_value) > 0.1) {
						var random0_2 = parseInt(Math.random() * 3);
						$(".boom i").eq(random0_2).addClass("show-boom-ani");
						setTimeout(function() {
							$(".boom i").eq(random0_2).removeClass("show-boom-ani")
						}, 600)
					}
					_GLOBLE_VAR.temp_value = (parseFloat(_GLOBLE_VAR.temp_value) + parseFloat(random_value)).toFixed(2);
					$(".show-money span").text(_GLOBLE_VAR.temp_value)
				}
				_GLOBLE_VAR.swipe_timeout_1 = setTimeout(function() {
					if (!_GLOBLE_VAR.isswipeUping) {
						$(".value").addClass("hide")
					}
				}, 600);
				_GLOBLE_VAR.swipe_timeout = setTimeout(function() {
					_GLOBLE_VAR.isswipeUping = false
				}, 150)
			}
		},
		initTouchEvents: function() {
			this._bind(_GLOBLE_VAR.mailer_el, "touchstart", this.touchStartFunc);
			this._bind(_GLOBLE_VAR.mailer_el, "touchmove", this.touchMoveFunc);
			this._bind(_GLOBLE_VAR.mailer_el, "touchend", this.touchMoveEndFunc)
		},
		bindEvents: function() {
			$(".shareTo").on($.Env.TAP, function(e) {
				e.preventDefault();
				e.stopPropagation();
				$(".pop-share").removeClass("hide");
				$.Stat.clickStat("HYBIRD.FUND.HONGBAO.SHARE");
				if ($(this).hasClass("only-share")) {
					_GLOBLE_VAR.share_to_play_again = false
				}
			});
			$("#use_now").on($.Env.TAP, function(e) {
				e.preventDefault();
				var param = ["showwxpaytitle=1", "channel=money150713", "placeholder=" + _GLOBLE_VAR.limitAmount + "元以上奖励到账", "min_warning_tips=需买入至少" + _GLOBLE_VAR.limitAmount + "元奖励方可到账", "buywayischooseable=0", "defaultbuyway=1", "min_amount=" + _GLOBLE_VAR.limitAmount, "sendmore=" + Math.min(_GLOBLE_VAR.user_max_bonus, _GLOBLE_VAR.best_score), "stat_type=88", "stat_data=" + Logic.stat_data];
				if (URL_PARAM.stat_data) {
					param.push("stat_type=68");
					param.push("stat_data=" + URL_PARAM.stat_data)
				}
				location.href = "/weixin/action/pay/action_charge.shtml?" + param.join("&")
			});
			$(".js_replay").on($.Env.TAP, function(e) {
				e.preventDefault();
				e.stopPropagation();
				$.Stat.clickStat("HYBIRD.FUND.HONGBAO.AGAIN");
				if (!$.localStorage.getItem("money0713_share_time") || $.localStorage.getItem("money0713_share_time") < 1) {
					$(".pop-share").removeClass("hide");
					_GLOBLE_VAR.share_to_play_again = true
				} else {
					location.reload()
				}
			});
			$(".pop-share").on($.Env.TAP, function(e) {
				e.preventDefault();
				e.stopPropagation();
				$(".pop-share").addClass("hide");
			});
			$("body").on($.Env.TAP, function(e) {
				var popShare = $(".pop-share");
				if (!popShare.hasClass("hide") && !popShare.hasClass("pop-share-customer")) {
					popShare.addClass("hide")
				}
			})
		},
		initGameClock: function() {
			var total_sec = 29;
			var secCount = function() {
				if (total_sec > -1) {
					$(".show-time span").text(total_sec);
					total_sec--;
					if (!_GLOBLE_VAR.isswipeUping) {
						$("body").removeClass("show-ani")
					}
				} else {
					Logic._unbind(_GLOBLE_VAR.mailer_el, "touchstart", Logic.touchStartFunc);
					Logic._unbind(_GLOBLE_VAR.mailer_el, "touchmove", Logic.touchMoveFunc);
					Logic._unbind(_GLOBLE_VAR.mailer_el, "touchend", Logic.touchMoveEndFunc);
					_GLOBLE_VAR.game_over = true;
					setTimeout(function() {
						$("body").removeClass("show-ani").removeClass("show-mailer-ani");
						$(".value").addClass("hide")
					}, 100);
					clearInterval(t);
					$("body").addClass("show-pop-loading");
					Logic.updateActiveData()
				}
			};
			var t = setInterval(secCount, 1000)
		},
		initBeginClock: function() {
			var begin_clock_num = 3,
				prev_class = "",
				begin_clock_el = $(".time-out-num");
			var begin_clock = function() {
				begin_clock_num--;
				var now_class = "num-" + begin_clock_num;
				if (prev_class != "") {
					begin_clock_el.removeClass(prev_class)
				}
				begin_clock_el.addClass(now_class);
				prev_class = now_class;
				if (begin_clock_num > 0) {
					setTimeout(begin_clock, 800)
				} else {
					$(".mailer").css({
						opacity: "0",
						zIndex: 2
					}).children().addClass("hide");
					Logic.initGameClock();
					$(".time-out-bg").addClass("hide");
					begin_clock_el.addClass("hide");
					$("body").removeClass("show-timeout");
					Logic.initTouchEvents()
				}
			};
			setTimeout(begin_clock, 800)
		},
		initUserInfo: function() {
			// var cfg = {
			// 	url: "/app/action/lct_action_count_redpack.cgi",
			// 	data: {
			// 		actid: Logic.actid,
			// 		cmd: "inq"
			// 	},
			// 	beforeSend: function() {},
			// 	complete: function() {},
			// 	success: this.initUserInfoCallbk
			// };
			// $.ajax(cfg)
			var data = {
				retcode:0
			}
			this.initUserInfoCallbk(data);
		},
		initUserInfoCallbk: function(data) {
			var retcode = data.retcode;
			var retmsg = data.retmsg;
			if (retcode == 0 && !data.errcode) {
				_GLOBLE_VAR.best_score = $.Amount.fen2Yuan(data.money || 0);
				_GLOBLE_VAR.has_play_times = data.times;
				_GLOBLE_VAR.customer_type = data.user_type;
				_GLOBLE_VAR.user_max_bonus = _GLOBLE_VAR.customer_type == 1 ? 20 : 5;
				_GLOBLE_VAR.state = data.state;
				_GLOBLE_VAR.real_random_arr = _GLOBLE_VAR.customer_type == 1 ? _GLOBLE_VAR.new_customer_arr : _GLOBLE_VAR.old_customer_arr;
				Logic.bindEvents();
				$("body").removeClass("show-body-loading");
				_GLOBLE_VAR.share_time = $.localStorage.getItem("money0713_share_time") ? $.localStorage.getItem("money0713_share_time") : 0;
				_GLOBLE_VAR.real_play_time = $.localStorage.getItem("money0713_play_time") ? $.localStorage.getItem("money0713_play_time") : 0;
				if (_GLOBLE_VAR.share_time > 0 || _GLOBLE_VAR.real_play_time < 1) {
					if (0==fromUser) {
				    	Logic.initBeginClock();
				    	var total = getLuckyNum()-1;
						setLuckyNum(total);
					}
				} else {
					Logic.updateShare();
					$(".pop-share").removeClass("hide");
					setTimeout(function() {
						Logic.showGameResult()
					}, 1000);
					_GLOBLE_VAR.share_to_play_again = true
				}
			} else {
				var str = data.retmsg || "系统出了点小问题，请返回重新进入";
				$.Env.showError(str, retcode)
			}
		},
		showGameResult: function() {
			$("body").removeClass("show-pop-loading");
			var score_level_name = _GLOBLE_VAR.best_score < 10 ? "" : _GLOBLE_VAR.best_score < 12 ? _GLOBLE_VAR.score_level[0] : _GLOBLE_VAR.best_score < 14 ? _GLOBLE_VAR.score_level[1] : _GLOBLE_VAR.best_score < 16 ? _GLOBLE_VAR.score_level[2] : _GLOBLE_VAR.score_level[3];
			if (_GLOBLE_VAR.state != 2) {
				if (Math.max(_GLOBLE_VAR.temp_value, _GLOBLE_VAR.best_score) > _GLOBLE_VAR.user_max_bonus) {
					$("#game_result .score-name").text("您是红包之神，拆出最高限额");
					$("#best_score").text("最高限额：" + _GLOBLE_VAR.user_max_bonus + "元")
				} else {
					$("#game_result .score-name").text("本次成绩: " + _GLOBLE_VAR.totalSlideUpNum + "个,共" + _GLOBLE_VAR.temp_value + "元");
					$("#best_score span").text(Math.max(_GLOBLE_VAR.temp_value, _GLOBLE_VAR.best_score))
				}
				if (score_level_name != "") {
					$("#game_result .label").removeClass("hide").find("em").text(score_level_name)
				}
				$("#game_result").removeClass("hide")
				var curMoney = _GLOBLE_VAR.temp_value;
				setTotalMoney(parseFloat(getTotalMoney())+parseFloat(curMoney));
				$("#best_score span").text(getTotalMoney());
			} else {
				var name = _GLOBLE_VAR.best_score <= 2 ? _GLOBLE_VAR.share_text_arr[0] : _GLOBLE_VAR.best_score <= 3 ? _GLOBLE_VAR.share_text_arr[1] : _GLOBLE_VAR.best_score <= 5 ? _GLOBLE_VAR.share_text_arr[2] : _GLOBLE_VAR.share_text_arr[3];
				$("#game_result_used .score-name").text("你是" + name);
				$("#open").text("获得" + _GLOBLE_VAR.best_score + "元红包已使用");
				if (score_level_name != "") {
					$("#game_result_used .label").removeClass("hide").find("em").text(score_level_name)
				}
				$("#game_result_used").removeClass("hide")
			}
			document.title = "数钱数到手抽筋，一分钱就能取现："+$("#game_result_used .score-name").text() + ",总共获得" +getTotalMoney()+ "元红包";


			Logic.updateShare();
			if (!$.localStorage.getItem("money0713_share_time") || $.localStorage.getItem("money0713_share_time") < 1) {
				//$(".shareTo-text").addClass("hide");
				$(".js_replay").text("分享好友可重玩")
			}
			else {
				$("#num").text($.localStorage.getItem("money0713_share_time"));
				$("#play_now").removeClass("hide")
			}
		},
		playAudio: function(increasePlay) {
			var oAudio = $("#sound_box")[0];
			if (oAudio.paused) {
				oAudio.play()
			} else {
				oAudio.play()
			}
		},
		updateActiveData: function() {
			_GLOBLE_VAR.real_play_time = $.localStorage.getItem("money0713_play_time") ? $.localStorage.getItem("money0713_play_time") : 0;
			_GLOBLE_VAR.real_play_time++;
			$.localStorage.setItem("money0713_play_time", _GLOBLE_VAR.real_play_time);
			if (_GLOBLE_VAR.state !== 2 && parseFloat(_GLOBLE_VAR.temp_value) > parseFloat(_GLOBLE_VAR.best_score)) {
				_GLOBLE_VAR.best_score = parseFloat(_GLOBLE_VAR.temp_value) > parseFloat(_GLOBLE_VAR.best_score) ? _GLOBLE_VAR.temp_value : _GLOBLE_VAR.best_score;
				// var cfg = {
				// 	url: "/app/action/lct_action_count_redpack.cgi",
				// 	beforeSend: function() {},
				// 	complete: function() {},
				// 	data: {
				// 		actid: Logic.actid,
				// 		cmd: "set",
				// 		money: Math.min(_GLOBLE_VAR.user_max_bonus * 100, $.Amount.yuan2Fen(_GLOBLE_VAR.best_score))
				// 	},
				// 	success: Logic.updateActiveDataCallbk
				// };
				// $.ajax(cfg)
				var data = {

				}
				Logic.updateActiveDataCallbk(data);
			} else {
				setTimeout(function() {
					Logic.showGameResult()
				}, 1000)
			}
		},
		updateActiveDataCallbk: function(data) {
			setTimeout(function() {
				Logic.showGameResult()
			}, 1000)
		},
		updateShare: function() {
			_GLOBLE_VAR.temp_value = parseFloat(_GLOBLE_VAR.temp_value);
			var name = _GLOBLE_VAR.temp_value <= 2 ? _GLOBLE_VAR.share_text_arr[0] : _GLOBLE_VAR.temp_value <= 3 ? _GLOBLE_VAR.share_text_arr[1] : _GLOBLE_VAR.temp_value <= 5 ? _GLOBLE_VAR.share_text_arr[2] : _GLOBLE_VAR.share_text_arr[3];
			try {
				if (!$.localStorage.getItem("max_red_bag_num")) {
					$.localStorage.setItem("max_red_bag_num", _GLOBLE_VAR.totalSlideUpNum)
				} else {
					$.localStorage.setItem("max_red_bag_num", _GLOBLE_VAR.totalSlideUpNum > $.localStorage.getItem("max_red_bag_num") ? _GLOBLE_VAR.totalSlideUpNum : $.localStorage.getItem("max_red_bag_num"))
				}
			} catch (e) {}
			var desc = "我是" + name + "，30秒内拆开" + _GLOBLE_VAR.totalSlideUpNum + "个红包，获得" + Math.max(_GLOBLE_VAR.temp_value, _GLOBLE_VAR.best_score) + "元噢！";
			var title = document.title;
			var wx_shareUrl = window.location.href;
    		eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0=\'1://2.3.4/5/6.7?8=\'+0;',9,9,'wx_shareUrl|http|mm|wanggou|com|ad|jump|shtml|curl'.split('|'),0,{}))
			var link = wx_shareUrl;
			var img_url = "http://yyy.witing.cn/static/hb2/img/big.png";
			var callback = function(data) {
				$.Stat.clickStat("HYBIRD.FUND.HONGBAO.SHARESUCC");
				_GLOBLE_VAR.share_time = $.localStorage.getItem("money0713_share_time") ? $.localStorage.getItem("money0713_share_time") : 0;
				_GLOBLE_VAR.share_time++;
				$.localStorage.setItem("money0713_share_time", _GLOBLE_VAR.share_time);
				if (_GLOBLE_VAR.share_to_play_again) {
					location.reload()
				} else {
					$(".pop-share").addClass("hide")
				}
			};
			$.Weixin.share("appmessage", {
				link: link,
				title: title,
				desc: desc,
				img_url: img_url
			}, callback);
			$.Weixin.share("timeline", {
				link: link,
				title: desc,
				desc: desc,
				img_url: img_url
			}, callback)
		},
		init: function() {
			URL_PARAM = $.getParameter();
			Logic.stat_data = URL_PARAM.stat_data || "fm_110_chb_16";
			$("body").bind("touchmove", function(e) {
				e.preventDefault()
			});
			this.initUserInfo()
		}
	};
	return Logic
});