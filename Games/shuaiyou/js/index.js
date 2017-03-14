$(document).ready(function() {
   web.main()
});

var web={
	main : function(){
		web.resize();
		web.getInfo();
		web.setGame();
		web.rank();
		web.rule();
		web.userInfo();
		web.loadBaidu();
		web.weixinMenu();
	},
	data : {
		"weixinId" : "",
		"weixinName" : "",
		"accessToken":"",
		"lastNum" : 0,
		"rankNum" : 0
	},
	getInfo : function(){
		var $menu = $("#menu"),$mainBox = $("#mainBox"),$gameBox = $("#gameBox"),$startBox = $("#startBox"),param=[];
		
		if($.cookie("checkFast")*1==2){
			$.cookie("checkFast",0);
			$menu.hide();
			$mainBox.hide();
			$gameBox.show();
			$startBox.show();
		}
		
		if(web.queryString("id")){
			param = {
				"activitysId":1000010,
				"weiXinId":web.queryString("id"),
				"t":web.getRandom()
			}
			
			web.ajax("", "/weixin/get-weixin-user.json", param, "","", function(data){
				if(data.result.code==0){
					web.showInfo(decodeURIComponent(data.result.weiXinUser.weiXinName),data.result.weiXinUser.gameScore);
					$("#titId").text("看你能甩多少油！玩游戏赢奖品！我甩了"+data.result.weiXinUser.gameScore+"斤！");
				}else{
					web.showInfo("小麦",199)
				}
			})
		}else{
			web.showInfo("小麦",199)
		}
	},
	showInfo : function(name,num){
		var $info = $("#info"),height = $(window).height();;
		
		if(num<101){
			$info.html('<div>呜，<span class="co_or">'+name+'</span>用了30秒才甩了<span class="co_or">'+num+'</span>斤？你这没良心的，连500块都不给我！</div>');
		}else if(num>100&&num<151){
			$info.html('<div>哎呦，还不错噢~<span class="co_or">'+name+'</span>用了30秒甩了<span class="co_or">'+num+'</span>斤？别着急，慢慢来！最重要是快~你懂得！再来一次！</div>');
		}else if(num>150&&num<199){
			$info.html('<div>挺好哒，<span class="co_or">'+name+'</span>用了30秒甩了<span class="co_or">'+num+'</span>斤？马上就可以登上总榜，赢取好轻啦！是不是想想还有点小激动呢？</div>');
		}else if(num>198){
			$info.html('<div class="ta_c">天呐~这不会是真的吧？<br /><span class="co_or">'+name+'</span>居然用了30秒甩了<span class="co_or">'+num+'</span>斤？</div>');
		}
		
		if(height>481){
			$info.css({"padding-top":(153-$info.height())/2})
		}else{
			$info.css({"padding-top":0})	
		}
	},
	resize : function(){
		var $mainBox = $("#mainBox"),$gameBox = $("#gameBox"),width=0,height=0;
		
		$(window).ready(function(){
			res()
		});
		
		$(window).resize(function(){
			res()
		});
		
		function res(){
			height = $(this).height();
			
			$gameBox.css({"height":height});
			
			if(height>560){
				$mainBox.css({"height":height})
			}
		}
	},
	/*
	 * 设置游戏
	 */
	setGame : function(){
		var $box=$("#box"),$mainBox = $("#mainBox"),$gameBox = $("#gameBox"),$mainStartBtn = $("#mainStartBtn"),$startBox = $("#startBox"),$times = $("#times"),$rankBox = $("#rankBox"),$ruleBox = $("#ruleBox"),$finish = $("#finish"),$info = $("#info"),$infoBox = $("#infoBox"),$menu = $("#menu"),$shareBox = $("#shareBox"),$musicBox = $("#musicBox"),$fat_bg = $("#fat_bg"),$music = document.getElementById('music'),startBoxY=0,endBoxY=0,differBox=0,startY=0,endY=0,differ=0,times = 30,fraction=0,swich=false,timesTits="",param=[],touchSwich=true,musicUrl="music/1.mp3",musicNum=0,imgSwich=true,checkUrl="",startSwich=true;

		getWeixin();
		
		$("body").bind({
			touchmove : function(e){
				e.preventDefault();
			}
		})
		
		$box.bind({
			touchstart : function(e){
				startBoxY = e.originalEvent.touches[0].pageY;
			},
			touchmove : function(e){
				endBoxY = e.originalEvent.touches[0].pageY;
				differBox = startBoxY-endBoxY;
				
				if(!swich) return false;
				
				if(differBox>5 && swich && touchSwich && e.originalEvent.touches.length>0 && e.originalEvent.touches.length<3){
					touchSwich=false;
					fraction ++;
					$finish.text(fraction+" 斤");
					
					anis(fraction,musicNum);
					
					document.getElementsByTagName("audio")[musicNum].currentTime=0;
					document.getElementsByTagName("audio")[musicNum].play();
					if(musicNum<2)musicNum++;
					else musicNum=0;
					
					endBoxY=startBoxY;
					differBox=0
				}
			},
			touchend : function(e){
				touchSwich=true;
				endBoxY=startBoxY;
				differBox=0
			}
		})
		
		function anis(id,num){
			var spanId = id,$id="";
			
			if(id%30==0){
				$box.append('<span id="fat_'+spanId+'" class="fat_big bg" style="z-index:'+spanId+'; margin-top:'+(id+20)+'"></span>');
				if(id<270){
					$fat_bg.css({"-webkit-transform":"translate3d(0,"+(id/2)+"px,0)"})
				}
			}else{
				$box.append('<span id="fat_'+spanId+'" class="fat_'+(num+1)+' bg" style="z-index:'+spanId+'; margin-top:'+(id+20)+'"></span>');
			}
			
			$id = $("#fat_"+spanId);
			
			setTimeout(function(){
				$id.css({"-webkit-transform":"translate3d(0,-800px,0)"});
			},1)
			setTimeout(function(){
				$id.remove();
			},901)
		}
		
		$startBox.bind({
			touchstart : function(e){
				startY = e.originalEvent.touches[0].pageY;
			},
			touchmove : function(e){0
				endY = e.originalEvent.touches[0].pageY;
				differ = startY-endY;
			},
			touchend : function(e){
				if(differ>10&&startSwich){
					startSwich = false;
					startGame();
				}
				endY=startY
			}
		})
		
		$mainStartBtn.click(function(){
			setTimeout(function(){
				startBox();
			},50)
		})
		
		$shareBox.click(function(){
			$shareBox.stop().animate({"opacity":0},100,function(){
				$(this).hide();
			})
		})
		
		function startBox(){
			if(web.isCookie($.cookie("weixinName"))){
				$times.text("30 秒");
				$finish.text("0 斤");
				$mainBox.hide();
				$menu.hide();
				$gameBox.show();
				$startBox.show();
			}else{
				checkUrl = "./index.html";
				// window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa080aa62c8caedc9&redirect_uri='+encodeURIComponent(checkUrl)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
				window.location.href = encodeURIComponent(checkUrl);
			}
		}
		
		function startGame(){
			document.getElementsByTagName("audio")[0].play();
			document.getElementsByTagName("audio")[1].play();
			document.getElementsByTagName("audio")[2].play();
			times=30;
			fraction=0;
			$times.text(times+" 秒");
			$finish.text(fraction+" 斤");
			swich=true;
			touchSwich=true;
			$menu.hide();
			$mainBox.hide();
			$gameBox.show();
			$startBox.hide();
			$fat_bg.css({"-webkit-transform":"translate3d(0,0,0)"});
			setTimes();
		}
		
		function setTimes(){
			if(times<31 && times>0){
				setTimeout(function(){
					times--;
					$times.text(times+" 秒");
					setTimes();
				},1000)
			}else{
				swich=false;
				startSwich=true;
				differ=0;
				$menu.show();
				$mainBox.show();
				$gameBox.hide();
				
				$times.text("30 秒");
				$finish.text("0 斤");
				
				postData();
				
				web.showInfo(web.data.weixinName,fraction);
				
				$("#titId").text("看你能甩多少油！玩游戏赢奖品！我甩了"+fraction+"斤！");
				
				if((fraction>web.data.lastNum || web.data.rankNum<10) && fraction>0){
					setTimeout(function(){
						$infoBox.show().stop().animate({"opacity":1},100)
					},300);
				}else{
					$shareBox.show().stop().animate({"opacity":1},100)
				}
				
				$fat_bg.css({"-webkit-transform":"translate3d(0,0,0)"});
			}
		}
		
		function postData(){
			param = {
				"activitysId":1000010,
				"weiXinId":web.data.weixinId,
				"weiXinName":encodeURIComponent(web.data.weixinName),
				"gameScore":fraction
			}
			
			web.ajax("", "/weixin/save.json", param, "","", function(data){})
		}
		
		function getWeixin(){
			if(web.isCookie($.cookie("weixinId"))) web.data.weixinId = $.cookie("weixinId");
			else web.data.weixinId = "";
			
			if(web.isCookie($.cookie("weixinName"))) web.data.weixinName = $.cookie("weixinName");
			else web.data.weixinName = "";
			
			if(web.queryString("code")){
				web.ajax('GET','http://www.iyunmai.com/wx-get-data.json?code='+web.queryString("code")+'&t='+web.getRandom(),'','','',function(data){
					web.data.accessToken = data.access_token;
					setTimeout(function(){
						web.ajax('GET','http://www.iyunmai.com/wx-get-user.json?accessToken='+data.access_token+'&openId='+data.openid+'&t='+web.getRandom(),'','','',function(data){
							web.data.weixinId = data.openid;
							web.data.weixinName = data.nickname;
							
							if(typeof(data.openid)=="undefined"){
								window.location.href = "http://www.iyunmai.com/weixinGame/mairou/index.html";
							}else{
								$.cookie("weixinId",data.openid,{expires: web.setCookieTime(1)});
								$.cookie("weixinName",data.nickname,{expires: web.setCookieTime(1)});
								$.cookie("checkFast",2,{expires: web.setCookieTime(1)});
								window.location.href = "http://www.iyunmai.com/weixinGame/mairou/index.html?id="+data.openid;
							}
						})
					},100)
				})
			}
		}
	},
	/*
	 * 排行榜
	 */
	rank : function(){
		var $mainRankBtn = $("#mainRankBtn"),$rankBox = $("#rankBox"),$rankTab = $("#rankTab"),$closeRank = $("#closeRank"),$tabBox = $("#tabBox"),param=[],len=0,list=[],startBoxY=endBoxY=differBox=count=0,touchSwich=false,page=0;
		
		$mainRankBtn.click(function(){
			$rankBox.show().stop().animate({"opacity":1},100)
			getRank()
		})
		
		$closeRank.click(function(){
			$rankBox.stop().animate({"opacity":0},100,function(){
				$(this).hide()
			})
		})
		
		$tabBox.bind({
			touchstart : function(e){
				startBoxY = e.originalEvent.touches[0].pageY;
			},
			touchmove : function(e){
				endBoxY = e.originalEvent.touches[0].pageY;
				differBox = startBoxY-endBoxY;
				
				if(touchSwich){
					touchSwich=false;
					setTimeout(function(){
						touchSwich=true;
					},301)
					
					if(differBox>5&&page<count-1){
						page++;
						$rankTab.css({"-webkit-transform":"translate3d(0,"+(-page*320)+"px,0)"});
					}else if(differBox<-5&&page>0){
						page--;
						$rankTab.css({"-webkit-transform":"translate3d(0,"+(-page*320)+"px,0)"});
					}
					
					endBoxY=startBoxY;
					differBox=0;
				}
			},
			touchend : function(e){
				endBoxY=startBoxY;
				differBox=0
			}
		})
		
		getRank();
		
		function getRank(){
			param = {
				"activitysId":1000010,
				"rows":200
			};
			
			web.ajax("", "/weixin/get-list.json", param, "","", function(data){
				list = [];
				len = web.data.rankNum = data.activitysWeiXin.length;
				
				count = Math.ceil(len/10);
				
				for(var i=0;i<len;i++){
					list.push('<tr><td width="150">'+decodeURIComponent(data.activitysWeiXin[i].weiXinName)+'</td><td width="70">'+data.activitysWeiXin[i].gameScore+'</td><td width="60">'+(i+1)+'</td></tr>');
					
					if(i==9) web.data.lastNum = data.activitysWeiXin[i].gameScore;
				}
				$rankTab.html(list.join(''));
				touchSwich=true;
			})
		}
	},
	/*
	 * 活动规则
	 */
	rule : function(){
		var $rule = $("#rule"),$ruleBox = $("#ruleBox"),$closeRule = $("#closeRule");
		
		$rule.click(function(){
			$ruleBox.show().stop().animate({"opacity":1},100)
		})
		
		$closeRule.click(function(){
			$ruleBox.stop().animate({"opacity":0},100,function(){
				$(this).hide()
			})
		})
	},
	/*
	 * 提交联系信息
	 */
	userInfo : function(){
		var $infoBox = $("#infoBox"),$postInfoBtn = $("#postInfoBtn"),$tel = $("#tel"),$name = $("#name"),$telBox = $("#telBox"),$nameBox = $("#nameBox"),$closeInfo = $("#closeInfo"),$shareBox = $("#shareBox"),tel="",name="",check=0,param=[];
		
		$closeInfo.click(function(){
			$infoBox.stop().animate({"opacity":0},100,function(){
				$(this).hide();
				$tel.val("");
				$name.val("");
			})
		})
		
		$postInfoBtn.click(function(){
			check=0;
			tel = $.trim($tel.val());
			name = $.trim($name.val());
			
			if(!web.isTel(tel) || !tel){
				$telBox.stop().animate({"margin-left":0},50,function(){
					$(this).stop().animate({"margin-left":30},50,function(){
						$(this).stop().animate({"margin-left":15},50,function(){})
					})
				});
				check++
			}
			
			if(!web.isName(name) || !name){
				$nameBox.stop().animate({"margin-left":0},50,function(){
					$(this).stop().animate({"margin-left":30},50,function(){
						$(this).stop().animate({"margin-left":15},50,function(){})
					})
				});
				check++
			}
			
			if(check==0){
				param = {
					"weiXinId":web.data.weixinId,
					"phoneNum":tel,
					"realName":name
				}
				
				web.ajax("", "/weixin/save-user-info.json", param, "","", function(data){
					$infoBox.stop().animate({"opacity":0},100,function(){
						$(this).hide();
						$tel.val("");
						$name.val("");
						$shareBox.show().stop().animate({"opacity":1},100);
					})
				})
			}
		})
	},
	weixinMenu : function(){
		function onBridgeReady(){
		 	WeixinJSBridge.call('showOptionMenu');
		}
		
		if (typeof WeixinJSBridge == "undefined"){
			if( document.addEventListener ){
				document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			}else if (document.attachEvent){
				document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			}
		}else{
			onBridgeReady();
		}
	},
    ajax : function(type,url,param,dataType,jsonp,callback,error) {
		if (!url)
			return false; 
		$.ajax({
			type : type || 'post',
			url : url,
			traditional : true,
			data : param || '',
			dataType : dataType || 'json',
			jsonp : jsonp,
			success : callback,
			error : error
		});
	},
	loadBaidu : function(){
		$.ajax({
			type: "GET",
			url: "http://hm.baidu.com/h.js?7f65ea8c38ac9004a5e3ce6515716b8a",
			dataType: "script",
			cache: true,
			success: function(){}
		});
	},
	queryString : function(key){
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || [ '', null ])[1];
    },
	isCookie : function(key){
		if(typeof(key)=="undefined" || key==null || key=="" || key=="null") return false;
		else return true;
	},
	/*
	 * 随机数
	 */
	getRandom : function() {
		var Min = 10000,Max = 99999,Range = Max - Min,Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	},
	setCookieTime : function(time){
		var date = new Date();
		date.setTime(date.getTime() + (time * 60 * 1000));
		return date;
	},
	isName : function(va) {
		var patten = new RegExp("^[\u4e00-\u9fa5A-Za-z0-9-_]*$");
		return patten.test(va);
	},
	isTel : function(ta) {
		var patten = new RegExp("^1[2|3|4|5|7|8][0-9]\\d{8,8}$");
		return patten.test(ta);
	}
}