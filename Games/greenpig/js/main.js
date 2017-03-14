var bounceEase = "easeOutBounce";
var loading_num = 0;
var ice_tickets_arr = [];
var use_code;
var auto;
var _dis;

var HTTP_INFO = "/getinfo.php";
var HTTP_UES = "/use.php";
var HTTP_CHOOSECITY = "/choosecity.php";
var HTTP_USE_CODE = "/isused_code.php";
var HTTP_SHARE = "/share.php";

var SHARE_LINK = 'http://2016mcd.angrybirds.nimads.com';
var SHARE_IMG = 'http://2016mcd.angrybirds.nimads.com/html/mobile/home/img/share.jpg';
var SHARE_TITLE = '麦当劳被绿猪攻占了！';
var SHARE_DESK = "帮愤怒的小鸟击退绿猪，立享1元吃抹茶甜筒！";
var shareType;
var userObj = {};


function get_progress(num) {
	loading_num = num;
	$("#progress").html(loading_num + "%");
}

function onLoading(v) {
	(v == 0) ? $('#loading').show(): $('#loading').hide();
}

$(function() {
	
	if(userAgent().isAndroid && navigator.userAgent.split('QQ').length > 1)
	{
		if(!isWeiXinFun()){
			$('#container').css({'-webkit-transform':'scale('+0.58+')', left:-140, top:-220});
		}
	}

	if (getQueryStringByName("source") == "ooh") {
		$('#oohtips').show();
	}

	$('#oohclosebtn').bind('touchend', function()
	{
		$('#oohtips').hide();
	})
	
	if(isZhifubao()){document.addEventListener('AlipayJSBridgeReady', function () {AlipayJSBridge.call("hideOptionMenu");})}
	
	if(isWeiXinFun())
    {
        $(document).attr("title", ' ');
    }
    else if(isZhifubao())
    {
        $(document).attr("title", ' ');
    }
    else
    {
        $(document).attr("title", SHARE_DESK);
    }

	if(isWeiXinFun() == false && isZhifubao() == false && isWeibo() == false )
	{
		$("#music")[0].pause();
		musicPlayType = false;
		$(".music_on").hide();
		$(".music_off").show();
	}
	

	getInfoFunc();
	shareFunc();

	onLoading(0);
	loading(window, function() {
			init();
			onLoading(1);
		}, function(pre) {
			get_progress(pre);
		})
})

function getInfoFunc() {
	$.ajax({
		url: HTTP_INFO,
		type: "post",
		dataType: 'json',
		data: {},
		success: function(data) {
			if (data.result == 'success') {
				userObj.nickName = data.nickname;
				userObj.userImgSrc = data.imgurl;
				userObj.userTicketsArr = data.prizeArr;
				userObj.userCity = data.city;
				userObj.userId = data.userid;
				userObj.platfrom = data.from;
				
				userObj.viewerSex = data.viewerSex;
				userObj.viewerCity = data.viewerCity;
				userObj.viewerProvince = data.viewerProvince;
				userObj.viewerNickname = data.viewerNickname;

				if (isWeiXinFun()) {
					sendOpenid();
				}

			} else if (data.message == "invalid city ") {
				alert("无效城市");
			}
		},
		error: function(data) {
			console.log(data.message);
		}
	});
}

function shareFunc() {
	wechatSDKObj.initWXShare(SHARE_DESK, SHARE_TITLE, SHARE_LINK + '?state=' + userObj.userId, SHARE_IMG, function(from) {
		var shareType;
		if (from == "pyq") {
			shareType = "circle";
		} else if (from == "py") {
			shareType = "friend";
		}
		$.ajax({
			url: HTTP_SHARE,
			type: "post",
			dataType: "json",
			data: {
				target: shareType
			},
			success: function(data) {
				if (data.result == "success") {
//					alert("share:" + shareType);
//					alert(SHARE_LINK + '?state=' + encodeURIComponent(userObj.userId));
				} else alert(data.message)
			},
			error: function(data) {
				alert(JSON.stringify(data));
			}
		});
	});

}


function init() {

//	if (isQQ()) {
//		$("#tx_btn").show();
//	}

	musicFunc();
	
//	userObj.userTicketsArr = [{"type":1,"code":"164431997006552","isuse":"1","date":"2016.04.13\u81f32016.04.19"},{"type":1,"code":"135560941343992","isuse":"1","date":"2016.04.20\u81f32016.04.30"}];
//	showStartPage();
//	afterRequestShowBagPag();
	
	if (userObj.userCity == "") {
		checkCity();
	} else {
		showStartPage();
	}
}

var musicPlayType = true;
function musicFunc() {

	$("#music_con").on("touchend", function() {
		if (musicPlayType) {
			$("#music")[0].pause();
			musicPlayType = false;
			$(".music_on").hide();
			$(".music_off").show();
		} else {
			$("#music")[0].play();
			musicPlayType = true;
			$(".music_on").show();
			$(".music_off").hide();
		}
	})
}

function sendOpenid() {
	var ehClient = new EventHubClient({
		// ----- Change these values! -----
		namespace: "mcdpochubs-ns",
		name: "mcd_pochubs",
		sasKeyName: "mcdsender",
		sasKey: "d1bw1rIcvUlkn7Q3MDa8NbcvwMOpBe5OD9lJ0fJyKkA=",
		timeOut: 10
	});

	function sendMessage(isBatch) {
		
		var eventBody = {
			senderId: decodeURIComponent(getQueryStringByName('state')),
			viewerId: userObj.userId,
			viewerSex: userObj.viewerSex,
			viewerCity: userObj.viewerCity,
			viewerProvince: userObj.viewerProvince,
			viewerNickname: userObj.viewerNickname　
		};
		var msg = new EventData(eventBody);

		ehClient.sendMessage(msg, function(messagingResult) {});
	}
	
	sendMessage(false /*isBatch*/ );
}

function checkCity() {

	if (!userObj.userCity || userObj.userCity == '') {

		$('#chooseCity').fadeIn();

		$('#chooseBtn').click(function() {
			$.ajax({
				url: HTTP_CHOOSECITY,
				type: "post",
				dataType: 'json',
				data: {
					city: $(".select").val()
				},
				success: function(data) {
					if (data.result == 'success') {
//						alert("city:" + data.result);
						$('#chooseCity').fadeOut();

						showStartPage();
					} else alert(data.message)

				},
				error: function(data) {
					console.log(data)
				}
			});
		})
	} else {
		$('#chooseCity').fadeOut();
		setTimeout("showStartPage()", 500);
		$('#chooseBtn').on("touchend", function() {
			$('#chooseCity').fadeOut();
		})
	}

}

function showStartPage() {
	$(".slogan").animate({
		"top": "110px"
	}, 500, bounceEase, function() {
		$("#btn_area").animate({
			"top": "0px"
		}, 500, bounceEase, function() {
			$("#start_btn").on("touchend", function() {
				showPigPage();
			});

			$("#rule_btn").on("touchend", function() {
				showRulePage();
			});

			$("#bag_btn").on("touchend", function() {
				showBagPage();
			});
		});
	});

//	if (userAgent().isIOS) {
//		oriFunc();
//	}

	if (getQueryStringByName("isopenmybag") == "1") {
		showBagPage();
	}
}

function showPigPage() {

	$(".start_page").fadeOut();
	$(".ani_page").fadeIn();
	$("#pig_page").fadeIn(function() {
		$(".pig_big").animate({
			"left": "210",
			"opacity": "1"
		}, 300);
		$(".pig_small").animate({
			"left": "100",
			"opacity": "1"
		}, 300, function() {});
		$(".pig_head").animate({
			"left": "500px"
		}, 500, bounceEase, function() {});
		$(".pig_tips").animate({
			"opacity": "1",
			"left": "120px"
		}, 500, bounceEase);

		setTimeout(function() {
			$("#pig_page").animate({
				"left": "200px",
				"opacity": "0"
			}, 500, function() {
				$("#pig_page").hide();
				showBirdPage();
			});
		}, 1000);
	});
}

function showBirdPage() {
	$("#bird_page").fadeIn(function() {
		$(".bird_role").animate({
			"left": "-200px",
			"opacity": "1"
		}, 500, function() {})
		$(".bird_head").animate({
			"left": "500px"
		}, 500, bounceEase);
		$(".bird_tips").animate({
			"opacity": "1",
			"left": "140px"
		}, 500, bounceEase, function() {

			setTimeout(function() {
				$("#bird_page").fadeOut();
				addcookie('source', 'home');
				if (userAgent().isIOS) {
					window.location.href = './game.html';
				} else if (userAgent().isAndroid) {
					window.location.href = './game.html';
				}
			}, 1000);
		});
	});
}

function showRulePage() {
	$("#rule_page").fadeIn(function() {});
	TweenMax.to($('#opig'), 0, {
		top: 120,
		alpha: 0,
		dealy: 1,
		onComplete: function() {
			TweenMax.to($('#opig'), .2, {
				alpha: 1,
				top: 30,
				ease: Circ.easeOut,
				onComplete: function() {
					TweenMax.to($('#opig'), .5, {
						top: 50,
						ease: Circ.easeOut
					});
				}
			});
		}
	});

	TweenMax.to($('#content'), 0, {
		scaleY: 0,
		alpha: 0,
		dealy: 1,
		onComplete: function() {
			TweenMax.to($('#content'), .3, {
				alpha: 1,
				scaleY: 1.01,
				ease: Circ.easeOut,
				delay: .3
			});
		}
	});

	TweenMax.to($('#rule_bg'), 0, {
		scale: .8,
		alpha: 0,
		onComplete: function() {
			TweenMax.to($('#rule_bg'), .1, {
				scale: 1.5,
				alpha: 1,
				onComplete: function() {
					TweenMax.to($('#rule_bg'), .3, {
						scale: 1.01,
						alpha: 1
					});
				}
			});
		}
	});

	$("#rule_back_btn").on("touchend", function() {
		$("#rule_page").fadeOut();
	})
}

function showBagPage() {
	
	$.ajax({
		url: HTTP_INFO,
		type: "post",
		dataType: 'json',
		data: {},
		success: function(data) {
			if (data.result == 'success') {
				$("#swiper_area").empty();
				
				userObj.userTicketsArr = "";
				userObj.userTicketsArr = data.prizeArr;
				
				afterRequestShowBagPag();
			}
		},
		error: function(data) {
			alert("获取优惠券失败");
		}
	});	
}

function afterRequestShowBagPag (){
	
	$("#bag_page").fadeIn(function() {
		showTickets();
		$("#tickets_area").fadeIn();
	});

	TweenMax.to($('#oburger'), 0, {
		top: 150,
		alpha: 0,
		dealy: 1,
		onComplete: function() {
			TweenMax.to($('#oburger'), .2, {
				alpha: 1,
				top: 80,
				ease: Circ.easeOut,
				onComplete: function() {
					TweenMax.to($('#oburger'), .5, {
						top: 100,
						ease: Circ.easeOut
					});
				}
			});
		}
	});

	TweenMax.to($('#content_2'), 0, {
		scaleY: 0,
		alpha: 0,
		dealy: 1,
		onComplete: function() {
			TweenMax.to($('#content_2'), .3, {
				alpha: 1,
				scaleY: 1.01,
				ease: Circ.easeOut,
				delay: .3
			});
		}
	});

	TweenMax.to($('#bag_bg'), 0, {
		scale: .8,
		alpha: 0,
		onComplete: function() {
			TweenMax.to($('#bag_bg'), .1, {
				scale: 1.5,
				alpha: 1,
				onComplete: function() {
					TweenMax.to($('#bag_bg'), .3, {
						scale: 1.01,
						alpha: 1
					});
				}
			});
		}
	});

	$("#bag_back_btn").one("touchend", function() {
		$("#bag_page").fadeOut();
	})
}

function showTickets() {
	var iceArr = [];
	var burgerArr = [];

	for (i = 0; i < userObj.userTicketsArr.length; i++) {
		if (userObj.userTicketsArr[i].type == 1) {
			iceArr.push(userObj.userTicketsArr[i]);
		} else {
			burgerArr.push(userObj.userTicketsArr[i]);
		}
	}

	if (iceArr.length != 0 || burgerArr.length != 0) {
		$(".xuxian").hide();
	}

	for (j = 0; j < iceArr.length; j++) {
		var img = new Image();
		img.obj = iceArr[j];
		img.src = 'img/ticket_1.png';
		$(img).css({
			left: 175 * j
		});
		if (iceArr[j].isuse == 0) {

			if (userAgent().isAndroid) {
				$(img).attr("src", 'img/ticket_1_used.png');
			} else {
				$(img).addClass("gray_img");
			}
		}
		$("#swiper_area").append(img);

		ice_tickets_arr.push(img);
	}

	var num = iceArr.length * 175;
	var show_num = 0;
	for (k = 0; k < burgerArr.length; k++) {
		var img = new Image();
		img.obj = burgerArr[k];
		img.src = 'img/ticket_' + burgerArr[k].type + '.png';
		$(img).css({
			left: num + 175 * k
		});

		$("#swiper_area").append(img);
	}

	$("#swiper_area").css({
		width: num + show_num * 175,
		height: 300
	});

	var MAX_SWIPE_NUM = (Math.ceil(iceArr.length / 2 + burgerArr.length / 2)) - 1;
	var swiper_num = 0;
	wipeTarget($("#swiper_area"), false, function(type, dis) {

		if (type == "swiper" && dis == "left") {
			if (swiper_num == 0) {
				return;
			}

			swiper_num++;
			if (swiper_num == 0) {
				$("#right_arrow").fadeIn();
				$("#left_arrow").fadeOut();
			} else {
				$("#left_arrow").fadeIn();
				$("#right_arrow").fadeIn();
			}

			$("#swiper_area").animate({
				left: 350 * swiper_num
			}, 200, "easeOutQuad");
		} else if (type == "swiper" && dis == "right") {
			if (swiper_num == -MAX_SWIPE_NUM) {
				return;
			}

			swiper_num--;
			if (swiper_num == -MAX_SWIPE_NUM) {
				$("#left_arrow").fadeIn();
				$("#right_arrow").fadeOut();
			} else {
				$("#left_arrow").fadeIn();
				$("#right_arrow").fadeIn();
			}

			$("#swiper_area").animate({
				left: 350 * swiper_num
			}, 200, "easeOutQuad")
		} else if (type == "click") {
			if (dis.obj.type == 1) {
				console.log(dis.obj);
				if (dis.obj.isuse == 0) {
					return;
				}
				var img = new Ticket(dis.obj.type, dis.obj.code, dis.obj.date, $("#ticket_con"));
				img.show();
				use_code = dis.obj.code;
				useCodeRequest(dis);

				$("#big_ticket_back_btn").one("touchend", function() {
					$("#show_ticket_con").fadeOut();
					if (auto) {
						clearInterval(auto);
						auto = null;
					}
					img.destory();
				})
			} else {
				var burget_img = new Image();
				burget_img.src = 'img/A' + dis.obj.type + '.png';
				burget_img.width = 250;
				burget_img.height = 357;
				$(burget_img).css({
					left: 200,
					top: 365
				});
				$("#burger_con").append(burget_img);
				$("#show_burger_con").fadeIn();
				$("#burger_ticket_back_btn").one("touchend", function() {
					$("#burger_con").children().remove();
					$("#show_burger_con").fadeOut();
				})
			}
		}
	});
}

function useCodeRequest(dis) {

	_dis = dis;
	
	if (auto){
		clearInterval(auto);
		auto = null;
	}
	
	auto = setInterval(function() {
		
		$.ajax({
			url: HTTP_USE_CODE,
			type: "post",
			dataType: 'json',
			data: {
				code: dis.obj.code,
				date: new Date()
			},
			success: function(data) {
				if (data.result == 'success') {
					if (data.isused == 0) {
						clearInterval(auto);
						auto = null;
						backBagPage(_dis);
					}
				} else alert(data.message)
			},
			error: function(data) {
//				alert("error:" + JSON.stringify(data));
				clearInterval(auto);
				auto = null;
			}
		});
	}, 1000);
}

function backBagPage(dis) {
	if (use_code == dis.obj.code) {
		dis.obj.isuse = 0;

		if (userAgent().isAndroid) {
			$(dis).attr("src", 'img/ticket_1_used.png');
		} else {
			$(dis).addClass("gray_img");
		}

		$("#show_ticket_con").fadeOut();
	}
}

//var BG_GROUND_POSITION = -300;
//var BG_TREE_POSITION = -320;
//var BG_BUILDING_POSITION = -300;
//var BG_HILL_POSITION = -335;

//function oriFunc() {
//	var ori = new Orientation(function(con) {
//		$(".bg_hill").css({
//			"left": BG_HILL_POSITION + BG_HILL_POSITION * con[0] * con[2] * 0.6 + "px"
//		});
//		$(".bg_building").css({
//			"left": BG_BUILDING_POSITION + BG_BUILDING_POSITION * con[0] * con[2] * 0.7 + "px"
//		});
//		$(".bg_ground").css({
//			"left": BG_GROUND_POSITION + BG_GROUND_POSITION * con[0] * con[2] * 0.7 + "px"
//		});
//		$(".bg_tree").css({
//			"left": BG_TREE_POSITION + BG_TREE_POSITION * con[0] * con[2] * 0.4 + "px"
//		});
//	}, 'mat');
//}

/**
 * 侦听滑动对象方法
 *
 * 
 * @param   target   	滑动对象
 * @param	remove_type	是否移除该事情侦听
 * @param   callback 	侦听滑动后调用方法
 *
 */
function wipeTarget(target, remove_type, callback) {

	var def_x, end_x;
	var index = 0;

	target.on("touchstart", function(e) {
		e.preventDefault();
		def_x = e.originalEvent.touches[0].pageX;
	});

	target.on("touchend", function(e) {
		e.preventDefault();

		end_x = e.originalEvent.changedTouches[0].pageX;

		if (end_x - def_x > 100) {
			callback("swiper", 'left', end_x);
		} else if (end_x - def_x < -100) {
			callback("swiper", 'right');
		} else callback("click", e.target);

	});

	if (remove_type) {
		target.off("touchend");
		target.off("touchstart");
		target.off("touchmove");
	}
}