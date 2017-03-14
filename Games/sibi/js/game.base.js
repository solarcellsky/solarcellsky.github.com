$(function() {
	var getScoreIng = false;
	function p(a) {
		var b = !0;
		$("#" + a).find("input[required]").each(function() {
			var a = $(this);
			if ("" == a.val()) return alert(a.attr("placeholder") + "不能为空！"), b = !1;
			if ("J_Mobile" == a.attr("id") && !/^\d{11}$/.test(a.val())) return alert("请输入正确的手机号！"), b = !1
		});
		return b
	}
	function s(a) {
		if (!e) {
			e = !0;
			var username = encodeURI($("input[name='username']").val());
			var telephone = $("input[name='telephone']").val();
			$.post(APP.URL_USER, {"username":username,"telephone":telephone}, function(b) {
				b.success ? (APP.uid = b.uid | 0, APP.REG_FIRST ? game.go("popupPage"):(a && a(null,1,1)), e = !1) : alert(b.error)
			}, "json")
		}
	}
	function f() {
		game.go("popupPage")
	}
	function q() {
		var a = !1;
		0 < APP.remainAllTimes ? ($("#J_Get").text("再玩一次").attr({
			role: "play"
		}).parent().show(), a = !0) : $("#J_Get").parent().hide();
		return a
	}
	function u() {
		game.end(!1);
	}
	function r() {
		var a = stage.getChildByName("ticketPage"),
			b = stage.getChildByName("rankPage"),
			d = game.getSum() || 0;
		a.isVisible() ? 0 < a.sum ? (shareData.title = "数钱啦！我参加疯狂数钱抢到了" + a.sum + "元！", shareData.desc = shareData.titleDefault) : (shareData.title = shareData.titleDefault, shareData.desc = shareData.descDefault) : b.isVisible() ? (shareData.title = 0 < APP.uMax ? APP.IIMEOUT + "秒就抢到了" + APP.uMax + "元，轻轻松松挤进富豪榜第" + APP.uRank + "位，你行吗？" : "富豪榜的首富竟然不是我，要不你来试试？", shareData.desc = shareData.descDefault) : game.isIng() ? (shareData.title = "疯狂数钱ing，赶紧加入我们！", shareData.desc = "我在" + APP.customer + "参加了疯狂数钱活动，心动不如行动，赶紧加入我们！") : 0 < d ? (shareData.title = APP.IIMEOUT + "秒就抢到了" + d + "元，你能超过我吗？", shareData.desc = "作为宇宙无敌超级黄金点钞手，郑重向你发出挑战，敢不敢和我一较高下！") : (shareData.title = shareData.titleDefault, shareData.desc = shareData.descDefault)
	}
	var t, e = !1,
		k = !1,
		l = !1,
		m = !1,
		n = !1;
	$.ajaxSettings.timeout = 3E4;
	$("#J_RegClose").click(function() {
		f()
	});
	$("#J_Go").click(function() {
		p("regFrame") && s(f)
	});
	$("#J_CancelScore").click(function() {
		f();
		APP.getScore()
	});
	$("#J_SaveScore").click(function() {
		p("regFrame") && s(APP.getScore)
	});
	APP.timestamp = "";
	APP.incrCount = function(){
		if(getScoreIng) return;
		var d = game.getSum() || 0;
		$.post(APP.URL_INCRCOUNT, {
				score: d
			}, function(a) {
				getScoreIng = false;
				if (a.success) {
				APP.remainAllTimes = a.remainAllTimes;
				APP.remainDayTimes = a.remainDayTimes;
				$("#J_UsedAllTimes").text(a.playTotal);
				$("#J_UsedDayTimes").text(a.playPerday);
				}
			}
		, "json");
	};
	APP.getScore = function(a, b, getScoreOnly) {
		if(getScoreIng) return;
		getScoreIng = true;
		var d = game.getSum() || 0,
			c = 3,
			g = !0,
			h = "";
		a = a || (+new Date + "").substr(3);
		getScoreOnly = getScoreOnly || 0;
		$("#J_UserSum").text("￥" + d);
		$.post(APP.URL_SCORE, {
			score: d,
			_t: a,
			_scoreFirst: !! b,
			getScoreOnly: getScoreOnly
		}, function(a) {
			getScoreIng = false;
			if (a.success) {
				h = "<p>人类已经无法阻止你成为土豪了！</p>";
				0 < a.max_sum && d > a.max_sum ? ($("#J_UserSum").text("￥" + d), h = (window.isChangShaZhaoHang?"哇塞你也太快了，赶紧邀请小伙伴们来赢取新年好礼吧！":"哇塞，也太快了吧！你的点钞速度已经打破了最快记录")) : $("#J_UserSum").text("￥" + d);
				APP.remainAllTimes = a.remainAllTimes;
				APP.remainDayTimes = a.remainDayTimes;
				//APP.IIMEOUT = a.timeout;
				//APP.customer = a.customer;
				//APP.end = a.end;
				//APP.MAX_SUM = a.max_sum;
				$("#J_UsedAllTimes").text(a.playTotal);
				$("#J_UsedDayTimes").text(a.playPerday);
				g = game.checkPlayable();
				if (!g) {
					game.end(!1);
					return
				}
				0 < a.max ? ($("#J_UserMax").text("￥" + a.max), $("#J_UserRank").text(a.rank + "位"), $("#getFrame").find(".get-score").show()) : $("#getFrame").find(".get-score").hide();
				if(APP.remainDayTimes <= 0) $("#J_Get").parent().hide();
				/*
				APP.followed ? ($("#J_Follow").parent().hide(), c--) : $("#J_Follow").parent().show();
				0 < a.total_remain ? 0 < a.remain || -1 == a.remain ? $("#J_Get").text("领取").attr({
					role: "get"
				}).parent().show() : (h = "<div>亲，您的现金券已经领完了！</div><div>赶紧玩游戏刷榜吧！</div>", q() || c--) : (h = "<div>亲，好可惜！现金券已经被抢完了！</div><div>赶紧玩游戏刷榜吧！</div>", q() || c--, 0 >= APP.uid && (h = "亲，您不需要记录游戏成绩哦~想要领取现金券，赶紧再玩一次记录成绩吧！"));
				d < a.min_sum && (h = "<div>亲，达到" + a.min_sum + "元才能领取哦！</div><div>赶紧【再玩一次】，数钱数到手软！</div>", q() || c--);
				*/
				$("#getFrame").find(".get-txt").html(h);
				3 == c ? $("#J_BottomBtn").addClass("bottom-btn3") : $("#J_BottomBtn").removeClass("bottom-btn3");
				f();
				game.end(!0)
			} else alert(a.error);
			APP.timestamp = a._t
		}, "json")
	};
	APP.pkResult = function() {
		var d = game.getSum() || 0;
		if(getScoreIng) return;
		getScoreIng = true;
		//var goldCoin = parseInt(APP.opponentBalance*0.1);
		//var goldCoin = Math.floor(Math.random()*30)+80;
		$.post(APP.URL_PK, {
			myScope: d,
			opponentOpenId : APP.opponentOpenId,
			opponentScope : APP.opponentScope
		}, function(a) {
			getScoreIng = false;
			if (a.success) {
				//game.end(!0);
				window.location.href=APP.URL_RESULT + "&goldCoin="+a.goldCoin+"&myScope="+d+"&opponentScope="+APP.opponentScope+"&forwardTime="+a.forwardTime;
			} else {
				alert(a.error);
				window.location.href = APP.URL_DETAIL;
			}
			APP.timestamp = a._t
		}, "json")
	};
	$("#J_GetClose").click(function() {
		game.end(!1)
	});
	$("#J_Follow").click(function() {
		game.showGuide("follow", "endPage")
	});
	$("#J_Share").click(function() {
		game.showGuide("share", "endPage")
	});
	$("#J_Get").click(function() {
		var a = $(this).attr("role");
		"get" == a ? u() : "play" == a && game.end(!1)
	});
	$("#J_ExchangeNo").click(function() {
		game.go("exchangePage");
		game.go("ticketPage", !0)
	});
	$("#J_ExchangeYes").click(function() {
		if (p("exchangeFrame")) {
			var a = $("#exchangeFrame").attr("data-id"),
				b = $("#J_SN").val();
			$.post(APP.URL_EXCHANGE, {
				uid: APP.uid,
				snid: a,
				sn: b
			}, function(b) {
				if (b.success) {
					game.go("exchangePage");
					var c = $("#J_TicketList").children("[data-id='" + a + "']");
					c.find(".exchange").hide();
					c.find(".status").text(b.status);
					game.go("ticketPage", !0)
				} else alert(b.error)
			}, "json")
		}
	});
	$("#J_TipYes").click(function() {
		game.go("tooltipPage")
	});
	APP.showTip = function(a) {
		$("#J_TipTitle").text(a)
	};
	$(".ticket-list").delegate("li", "click", function(a) {
		a = a.target;
		var b = $(a).attr("seed");
		if (b) switch (b) {
		case "arrow":
			$(this).find(".detail-wrap").toggle();
			$(a).toggleClass("arrow-btn-on");
			break;
		case "exchange":
			a = $(this).attr("data-id");
			game.abort();
			game.go("ticketPage");
			$("#J_SN").val("");
			game.go("exchangePage", !0);
			$("#exchangeFrame").attr("data-id", a);
			break;
		case "use":
			(a = $(a).attr("data-url")) && window.open(a)
		}
	});
	$(".tab-wrap").scroll(function(a) {
		a = $(this).scrollTop() + $(this).height();
		var b = $(this).children(".tab-inner").height();
		b < a || b <= a + 100 && $(".tab-frame[data-role]").each(function() {
			var a;
			if ("hidden" != $(this).css("visibility")) return a = $(this).attr("data-role"), a = stage.getChildByName(a), APP.loadMore(a), !1
		})
	});
	APP.loadMore = function(a, b) {
		if (a) {
			b = void 0 == b ? a.page : b;
			b = 0 < b ? b : 0;
			var d = a.name,
				c, g;
			"ticketPage" == d ? (c = APP.URL_TICKET, g = "ticketFrame", m ? c = "" : m = !0) : "rankPage" == d && (c = APP.URL_RANK, g = "rankFrame", l ? c = "" : l = !0);
			c && $.get(c, {
				pageSize: 10,
				page: ++b
			}, function(c) {
				c.success ? (a.reload(c), a.page = (c.result || []).length ? b : --b) : alert(c.error);
				"ticketPage" == d ? m = !1 : "rankPage" == d && (l = !1);
				var e = $("#" + g).find(".tab-wrap");
				c = $("#" + g).find(".tab-inner");
				var e = e.height(),
					f = c.height();
				e > f && c.css("paddingBottom", e - f + 20)
			}, "json")
		}
	};
	$(document).on("ajaxError", function(a, b, d) {
		404 != b.status && (n = m = l = k = e = !1, alert("网络不给力啊，请重试一下。"), -1 < (d.data || "").indexOf("_scoreFirst=true") && game.end(!1))
	});
	$(document).on("ajaxStart", function() {
		$("#J_Loading").show()
		//$("#t_loading").show();
	});
	$(document).on("ajaxComplete", function() {
		$("#J_Loading").hide()
		//$("#t_loading").hide();
	});
});