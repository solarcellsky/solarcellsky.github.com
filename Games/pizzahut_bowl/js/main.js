//var openid = $.cookie('openid');
var bf;
function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
function _trackEvent(bt,ev,er){
	ga('send', 'event', bt, ev, er);
};
$().ready(function(e) {
	var wh = $(window).height();
	$(".cover").height(wh);
	var key = getQueryString('key');
	var backid = getQueryString('bid');
	var type = getQueryString('type');
	var sh=$(window).height();
	var sw=$(window).width();
	
	function GetuserInofor(key){
		if(key!=null){
			//alert(key);
			$.post("bsk/index.php/api/getuserinfo",{"key":key},function(data){
					var datas = JSON.stringify(data);
					//alert(datas);
					if(data!=null){

						if(data.status!=0){
							//alert(2222);
							//var datas = JSON.stringify(data);		
							isLogin = 1;
							$.cookie('openid', data.data.openid);
							$.cookie('name', data.data.name);
							$.cookie('province', data.data.province);
							//alert(333);
							backlink();
						}
						
					}
				},"json");
			
			
		}
		
	}
	//$.cookie('openid',"ooCkDj5Cw0LK5V-kHAwcryEF4_GQ");
	//$.cookie('name',"六合六合六合");
	GetuserInofor(key);
	if($.cookie('openid')!=null){
		//
		//alert(1);
		if(backid!=null){
			backlink();
		}
	}else{
		if(key!=null){
			//alert(2);
			GetuserInofor(key);
		}else{
			//backlink();
			//alert(3);
			if(backid!=null && backid!=""){
				// location.href="http://halloween.pizzahut.com.cn/bsk/index.php/api/oauthbase?bid="+backid;
			}else{
				// location.href="http://halloween.pizzahut.com.cn/bsk/index.php/api/oauthbase";
			}
		}
		
	}
	
	//console.log($.cookie('openid'));
	
	$(".rule .close").bind("click",function(){
		$(".rule").hide(0);
		$(".cover").hide(0);
	});
	
	$(".rule-btn").bind("click",function(){
		$(".rule-1").show(0);
		$(".cover").show(0);
		//活动规则
		_trackEvent("gamerules", "click", "HomePage");
	});
	$(".ms-btn").bind("click",function(){
	//秒杀大奖
		_trackEvent("shopping", "click", "HomePage")
	});
	$(".fp-rule").bind("click",function(){
		$(".rule-2").show(0);
		$(".cover").show(0);
		_trackEvent("fanpai-rules", "click", "Fanpai")
	});
	$(".fp-rule1").bind("click",function(){
		$(".rule-3").show(0);
		$(".cover").show(0);
		_trackEvent("Interaction-rules", "click", "Share");
		//互动与秒杀规则
	});
	
	$(".music").bind("click",function(){
		if($(".music").hasClass("on")){
			$(".music").removeClass("on");
			$("#bg")[0].pause();
			$("#music").attr("src","img/music-off_03.png");
		}else{
			$(".music").addClass("on");
			$("#bg")[0].play();
			$("#music").attr("src","img/music-on_03.png");
		}
	});
    $(".ranking2_my").bind("click",function(){
		$(".step").hide(0);
		$(".my-rank-list").show(0);
		_trackEvent("Week-Score", "click", "Ranking");
	});
	$(".bean10_mobile").focus(function(){
		if($(this).val() == '请输入11位手机号码' || $(this).val() =='手机号码格式错误！'){
			$(this).val('');
		}

	});
	
	$(".ranking1_height").bind("click",function(){
		$(".step").hide(0);
		$(".total-rank-list").show(0);
		//查看排名
		_trackEvent("Ranking", "click", "Ranking");
	});
	$(".list-btn").bind("click",function(){
		$(".step").hide(0);
		$(".total-rank-list").show(0);
	});
	$(".tips .close").bind("click",function(){
		$(".tips").hide(0);
		//$(".total-rank-list").show(0);
	});
	$(".start").bind("click",function(){
		$(".begin").show(0);
		_trackEvent("StartGame", "click", "HomePage");
		//开始游戏
		//$(".total-rank-list").show(0);
	});
	
	$(".ranking2_first,.ranking1_first").bind("click",function(){
		$(".step").hide(0);
		$(".index").show(0);
		_trackEvent("HomePage", "click", "Ranking");
	});
	$(".lq-gift").bind("click",function(){
		//var md = $.md5('s2d8-s'+$(".bean9_result_text").text()+'#m1d5*');
		//nid = $(this).attr('data-nid');
		//getPrise($(".bean9_result_text").text(),md,nid);
		var ssid = $(this).attr("data-jid");
		var sscode = $(this).attr("data-code");
		switch(ssid){
			case "1":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".gift-1").show(0);
					break;
					case "2":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".gift-3").show(0);
						$(".gift-3-code").text(sscode);
						//getCode('2',$.cookie('openid'),nid);
					break;
					case "3":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".gift-2").show(0);
						$(".gift-4-code").text(sscode);
						//getCode('3',$.cookie('openid'),nid);
					break;
					case "4":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-4").show(0);
					break;
					case "5":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-3").show(0);
					break;
					case "6":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-2").show(0);
					
					break;
					case "7":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-1").show(0);
					break;
		}
		_trackEvent("Award", "click", "GameOver");
		//领取惊喜
	});
	/*$(".get-gift .close").bind("click",function(){
		$(".get-gift").hide(0);
	});*/
	$(".one-key-get").bind("click",function(){
		$(".get-gift").hide(0);
		$(".turn-over").show(0);
		var rand = Math.floor(Math.random()*4);
		$(".turn-over .bean3_box").eq(rand).show(0);
		
	});
	$(".go-ms").bind("click",function(){
		/*$(".ranking2_text2").hide(0);
		$(".ranking2_1").show(0);
		$(this).find("img").attr("src","img/go-play_03.png");*/
	});
	$(".share-pop-1").bind("click",function(){
		$(".step").hide(0);
$(".share").show(0);
		$(".share-animite").animate({height:"100%"},{duration:1000});
		_trackEvent("Share-help", "click", "Share");
		
		//求加分
	});
	
	
	$(".getprize").bind("click",function(){
		var ssid = $(this).attr("data-id");
		var nid = $(this).attr("data-nid");
		var openid =$.cookie('openid');
		switch(ssid){
			case "1":
				var rid = 1;
				var md = $.md5('s2d8-s'+rid+openid+nid+'#m1d5*');
				var phoneval = $('.gift-1 .bean10_mobile').val();
				if(phoneval=='请输入11位手机号码'){
					return false;

				}
				if(isMobile(phoneval)){
					$.post("bsk/index.php/api/setecode",{"rid":1,"nid":nid,"openid":openid,"phone":phoneval,"md":md},function(data){
						if(data!=null){
							if(data.status==1){
								alert('领取成功');	
							}
							sharebefor();
						}
					},"json");
					
				}else{
					$('.gift-1 .bean10_mobile').val('手机号码格式错误！');
					return false;
				}
				_trackEvent("YiDao-Submit", "click", "YiDao");
				//易到用车券
			break;
			case "2":
				sharebefor();
				_trackEvent("Award-Nextstep", "click", "Award-Coupon");
				//确认已截屏
			break;
			case "3":
				sharebefor();
				
			break;
			case "4":
				sharebefor();
				_trackEvent("MM-Nextstep", "click", "Award-MM");
				//快到碗里来
			break;
			case "5":
				sharebefor();
				_trackEvent("MM-Nextstep", "click", "Award-MM");
				//快到碗里来
			break;
			case "6":
				sharebefor();
				_trackEvent("MM-Nextstep", "click", "Award-MM");
				//快到碗里来
			break;
			case "7":
				sharebefor();
				_trackEvent("MM-Nextstep", "click", "Award-MM");
				//快到碗里来
			break;
		}
		
	});
	$(".gift-pop .close").bind("click",function(){
		var ssid = $(this).attr("data-id");
		switch(ssid){
			case "1":
				var phoneval = $('.gift-1 .bean10_mobile').val();
				if(phoneval=='请输入11位手机号码'){
					return false;

				}
				if(isMobile(phoneval)){
					sharebefor();
				}else{
					$('.gift-1 .bean10_mobile').val('手机号码格式错误！');
					return false;
				}
			break;
			case "2":
				sharebefor();
			break;
			case "3":
				sharebefor();
			break;
			case "4":
				sharebefor();
			break;
			case "5":
				sharebefor();
			break;
			case "6":
				sharebefor();
			break;
			case "7":
				sharebefor();
			break;
		}
	});
	
	function sharebefor(){
		$(".step").hide(0);
	    $(".share-before").show();
		$(".bean13_1img").animate({width:"52%",left:"24%"},{duration:1000});
	}
	
	function getPrise(score,md,nid){
		$.post("bsk/index.php/api/getecode",{"score":score,"md":md},function(data){
			if(data!=null){
				var datas = JSON.stringify(data);
				//alert(data);
				var type=data.data.id;
				//var nid = nid;
				switch(type){
					case "1":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".gift-1").show(0);
					break;
					case "2":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".gift-3").show(0);
						getCode('2',$.cookie('openid'),nid);
					break;
					case "3":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".gift-2").show(0);
						getCode('3',$.cookie('openid'),nid);
					break;
					case "4":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-4").show(0);
					break;
					case "5":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-3").show(0);
					break;
					case "6":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-2").show(0);
					
					break;
					case "7":
						$(".get-gift").show(0);
						$(".gift-pop").hide(0);
						$(".letter-1").show(0);
					break;
						
				}
			}
		},"json");
	}
	//得到code
	function getCode(rid,openid,nid){
		var md = $.md5('s2d8-s'+rid+openid+nid+'#m1d5*');
		$.post("bsk/index.php/api/setecode",{"rid":rid,"openid":openid,"nid":nid},function(data){
			if(data!=null){
				//alert("data"+data);
				var datas = JSON.stringify(data);
				//alert(data);
			}
		},"json");
	}
	var isLogin = 0;
	/*function login(){
		if(!isLogin){
			
			location.href="http://pizzahut.normcoregroup.com:81/bsk/index.php/api/oauthbase";
			isLogin =1;
		}
	}
	login();*/
	
	//获取排名
	function GetSort(openid){
		var md = $.md5('s2d8-s'+openid+'#m1d5*');
		$.post("bsk/index.php/api/getSortList",{"openid":openid,"md":md},function(data){
			if(data!=null){
				if(data.status == 1){
					//提交成功
					var Llen = data.data.length;
					var Data = data.data;
					var html="";
					html="";
					
					for(var i=0;i<Llen;i++){
						if(Data[i].name){
							var nl = Data[i].name.length;
							var strname="";
							if(nl>5){
								strname = Data[i].name.substr(0,5);
							}else{
								strname = Data[i].name;
							}
						}
						if(i==0){
							html+='<li><img src="img/ranking-bg1.png"><div class="ranking2_text"><img src="img/ranking-first.png"></div><div class="ranking1-name">'+strname+" "+Data[i].score+'</div><div class="ranking1_address">'+Data[i].province+'</div></li>';	
						}
						if(i==1){
							html+='<li><img src="img/ranking-bg1.png"><div class="ranking2_text"><img src="img/ranking-second.png"></div><div class="ranking1-name">'+strname+" "+Data[i].score+'</div><div class="ranking1_address">'+Data[i].province+'</div></li>';	
						}
						if(i==2){
							html+='<li><img src="img/ranking-bg1.png"><div class="ranking2_text"><img src="img/ranking-third.png"></div><div class="ranking1-name">'+strname+" "+Data[i].score+'</div><div class="ranking1_address">'+Data[i].province+'</div></li>';	
						}
						
					}
					if(Llen>=4 ){
						$(".ranking2_myRanking .ranking1_num").text(Data[3].no);
						$(".ranking2_myRanking .ranking1-name").text(Data[3].name+" "+Data[3].score);
						$(".ranking2_myRanking .ranking1_address").text(Data[3].province);
						if(Data[3].no < 30000){
							$(".ranking2_1").hide(0);
							$(".ranking2_text2").show(0);
							$(".go-ms img").attr("src","img/ranking2-button.png");
							$(".go-ms").attr("href","ms.html");
						}else{
							$(".ranking2_1").show(0);
							$(".ranking2_text2").hide(0);
							$(".go-ms img").attr("src","img/again_03.png");
							$(".go-ms").attr("href","index.html");
						}
					}else{
						$(".ranking2_text1").hide();
						$(".ranking2_myRanking").hide();
						$(".ranking2_text2").hide();
					}
					$(".total-rank-list .ranking1").html(html);
					//$(".my-rank-list .ranking1").html(html);
				}
			}
		},"json");
	}
	console.log("openid "+$.cookie('openid'));
	GetSort($.cookie('openid'));
	function GetMyList(openid){
		$.post("bsk/index.php/api/getweeklist",{"openid":openid},function(data){
			if(data!=null){
				if(data.status == 1){
					//提交成功
					var Llen = data.data.length;
					var Data = data.data;
					var html="";
					html="";
					for(var i=0;i<Llen;i++){
						html+='<li><img src="img/ranking-bg2.png"><div class="ranking_text">'+Data[i].ctime.substring(0,16)+'</div><div class="ranking_address">'+Data[i].score+'</div></li>';	
						
					}
					
					
					//$(".total-rank-list .ranking1").html(html);
					$(".my-rank-list .ranking1").html(html);
				}
			}
		},"json");
	}
	GetMyList($.cookie('openid'));
	
	
	////////////////////////////回链//////////////////////////////////
	var backscore = 0;
function backlink(){
	//alert('backid'+backid);
	if(backid!=null && backid!=""){
		///$("#stu").html('');
		//alert(33);
		//$(".step").hide(0);
		//$(".back-1").show(0);
		$.post("bsk/index.php/api/getRecordinfo",{"nid":backid},function(data){
			var datas = JSON.stringify(data);
			//alert(datas);
			if(data!=null){
				if(data.status == 1){
				//提交成功
				//alert(123);
				var sscore = data.data.score;
				backscore = data.data.score;
				$.cookie('score',data.data.score);
				var sname  = data.data.name;
				$('.bean17_name').text(sname);
				$('.bean17_number').text(sscore);
				$(".step").hide(0);
				$(".back-1").show(0);
				//bf=setInterval(function(){
					//$(".bean17_redimg").css({"width":"5%","left":"10%","top":"50%"});
					//$(".bean17_orangeimg").css({"width":"5%","right":"25%","top":"50%"});
					//$(".bean17_blueimg").css({"width":"5%","left":"30%","top":"75%"});
					//$(".bean17_yellowimg").css({"width":"5%","left":"50%","top":"86%"});
					
					$(".bean17_redimg").animate({width:"21.5625%",left:0,top:"45.096%"},{duration:1000,complete:function(){
						$(".bean17_redimg").attr("class","bean17_redimg animated infinite wobbleY7");
					}});
					$(".bean17_orangeimg").animate({width:"21.5625%",right:"29.218%",top:"43.096%"},{duration:1000,complete:function(){
						$(".bean17_orangeimg").attr("class","bean17_orangeimg animated infinite wobbleY7");
					}});
					$(".bean17_blueimg").animate({width:"21.5625%",left:"30.3125%",top:"70.385%"},{duration:1000,complete:function(){
						$(".bean17_blueimg").attr("class","bean17_blueimg animated infinite wobbleY7");
					}});
					$(".bean17_yellowimg").animate({width:"21.5625%",left:"40.41%",top:"84.846%"},{duration:1000,complete:function(){
						$(".bean17_yellowimg").attr("class","bean17_yellowimg animated infinite wobbleY7");
						
					}});
				//},1100);
				
					
					
				}else if(data.status == 0){
					location.href="index.html";
				}
			}else{
				location.href="index.html";
			}
		},"json");
		
	}

}

	function sendWxMessage(type,callbackurl){
		//发送微信模板消息
		var score,gscore,sorts;
		if($.cookie('score')!=null && $.cookie('score')!=""){
			gscore = $.cookie('score');
		}else{
			gscore = 0;
		}
		switch(type){
			case 1:
				score=-3000;
				if(score<=0)score=0;
				sorts=2;
			break;
			case 2:
				//*2
				score=gscore;
				sorts=1;
			break;
			case 3:
			//除2
				score=gscore/2;
				sorts=2;
			break;
			case 4:
				score=3000;
				sorts=1;
			break;
		}
		//alert("openid "+$.cookie('openid'));
		//alert("sort "+sorts);
		//alert("username "+$.cookie('name'));
		//alert("gscore "+score);
		//alert("nid "+backid);
		$.post("bsk/index.php/api/sendSoreMess",{"openid":$.cookie('openid'),"sort":sorts,"username":$.cookie('name'),"gscore":score,"nid":backid},function(data){
			var datas = JSON.stringify(data);
			//alert("send datas "+datas);
			if(data!=null){
				
				if(data.status == 1){
					//提交成功
					
					
				}
			}
		},"json");
	}
	$(".turn-1").bind("click",function(){
		var type;
		var openid = $.cookie('openid');
		var nid = backid;
		clearInterval(bf);
		$(this).rotate3Di(180, 600);
		$(".fp").hide(0);
		var arr = ['3','3','3','3','3','3','3','3','3','3','3','3','0','0','1','1','1','2','2','2',];
		var rnd = arr[Math.floor(Math.random()*20)];
		
		if(rnd==0){
			type=2;
			//Frendback(2,$.cookie('openid'),backid,2);
			//sendWxMessage(2,"halloween.pizzahut.com.cn");
		}else if(rnd==1){
			type=1;
			//Frendback(1,$.cookie('openid'),backid,1);
			//sendWxMessage(1,"halloween.pizzahut.com.cn");
		}else if(rnd==2){
			type=3;
			//Frendback(3,$.cookie('openid'),backid,3);
			//sendWxMessage(3,"halloween.pizzahut.com.cn");
		}else if(rnd==3){
			type=4;
			//Frendback(4,$.cookie('openid'),backid,4);
			//sendWxMessage(4,"halloween.pizzahut.com.cn");
		}
		var md = $.md5('s2d8-s'+type+openid+'#m1d5*');
		$.post("bsk/index.php/api/shareres",{"type":type,"openid":openid,"md":md,"nid":nid},function(data){
			var datas = JSON.stringify(data);
			//alert("fb "+datas);
			if(data!=null){
				if(data.status == 1){
					//提交成功
					$(".fp").eq(rnd).show(0);
					sendWxMessage(type,"http://halloween.pizzahut.com.cn/index.html");
					
				}else{
					alert('您已经帮助好友了');
					location.href='index.html';
				}
			}
		},"json");
		
		
		setTimeout(function(){
			
			
			
			
		},600);
		
		_trackEvent("MMS-Click", "click", "Fanpai")
	});
	if(type!=null && type!=""){
		Frendback(type,openid);
	}
	
	var txt = '[{%22id%22:2,%22icon%22:%22xxx%22},{%22id%22:1,%22icon%22:%22yyy%22}]';
	//sendWxMessage(txt,"http://www.baidu.com");
	//userback 好友点击回链进来
	function Frendback(type,openid,nid,sendtype){
		//type 2翻倍 3.减半 4.增3000
		var md = $.md5('s2d8-s'+type+openid+'#m1d5*');
		$.post("bsk/index.php/api/shareres",{"type":type,"openid":openid,"md":md,"nid":nid},function(data){
			var datas = JSON.stringify(data);
			//alert("fb "+datas);
			if(data!=null){
				if(data.status == 1){
					//提交成功
					sendWxMessage(sendtype,"http://halloween.pizzahut.com.cn/index.html");
					
				}else{
					alert('您已经帮助好友了');
					location.href='index.html';
				}
			}
		},"json");
	}
	$(".fp-1 .play-again").bind("click",function(){
		_trackEvent("Play", "click", "Fanpai-Result");
		setTimeout(function(){
			
			location.href="index.html";
		},300);
		
		//
	});
	$(".fp-2 .play-again").bind("click",function(){
		_trackEvent("Play", "click", "Fanpai-Result")
		setTimeout(function(){
			location.href="index.html";
		},300);
		//
	});
	$(".fp-3 .play-again").bind("click",function(){
		_trackEvent("Play", "click", "Fanpai-Result")
		setTimeout(function(){
			location.href="index.html";
		},300);
		//
	});
	$(".fp-4 .play-again").bind("click",function(){
		_trackEvent("Play", "click", "Fanpai-Result")
		setTimeout(function(){
			location.href="index.html";
		},300);
		//
	});
	
	//Frendback();
	
});
function isMobile(phone){
	var ab=/^(1[0-9])\d{9}$/;
	if(ab.test(phone) == false){
		return false;
	}else{
		return true;
	}
}
function isEmail(str){
   var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
   return reg.test(str);
}
