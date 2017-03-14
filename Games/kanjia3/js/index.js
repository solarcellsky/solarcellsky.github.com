
$(document).ready(function(){
	//$.cookie("weixinId","oKzA5uENNl5gfLt04bYY_owNEcH0");
	//$.cookie("friWeixinId","oKzA5uAPsQAiMUINX01K1pVPjE7g"); //oKzA5uAPsQAiMUINX01K1pVPjE7g
	web.main();
});

var web={
	main : function(){
		if(com.queryString("resetGame")=="true") $.cookie("checkFastg","",{expires: com.setCookieTime(10)});
		
		if(com.isCookie(com.queryString("friWeixinId")) && com.queryString("friWeixinId")!=$.cookie("weixinId")) $.cookie("friWeixinId",com.queryString("friWeixinId"),{expires: com.setCookieTime(10)});
		else if(com.queryString("friWeixinId")==$.cookie("weixinId")) $.cookie("friWeixinId","");
		
		web.checkWeixinId();
		web.resize();
		web.isMy();
		web.selHq();
		web.getData();
		web.ruleBox();
		web.myPro();
		web.popBox();
		web.getDegree();
		web.helpBox();
		web.postData();
		web.weixinSdk();
		com.loadBaidu();
		
		if($.cookie("checkFastg")*1==2) web.isGuanZhu();
		
		if(com.isMobile().ios || com.isMobile().iPhone || com.isMobile().iPad){
			$("#myFriList").addClass("ios_touch");
		}
	},
	data : {
		weixinId : "",
		degree : 0,
		myLeft : 0,
		friLeft : 0,
		isFirst : false,
		isFriFirst : false,
		isMy : true,
		activitysId : 3,
		hqId : 0,
		friHqId :0,
		buyHq : 0,
		buyColor : 0,
		buyMini :0,
		friDataSwich : false,
		isFriSwich : false,
		shareUrl : "http://www.iyunmai.com/weixinGame/1111/index.html",
		shareImg : "http://www.iyunmai.com/weixinGame/1111/images/share.jpg"
	},
	url : {
		//获取抽奖次数
		getDrawNum : "http://www.iyunmai.com/weixin/draw/get-count.json",
		//抽奖
		draw : "http://www.iyunmai.com/weixin/draw/draw.d",
		//保存砍价价格
		saveNum : "http://www.iyunmai.com/weixin/friend/help/save.d",
		//获取用户数据
		getData : "http://www.iyunmai.com/weixin/friend/help/list.json",
		//保存数据
		save : "http://www.iyunmai.com/weixin/user/save.d",
		//判断是否第一次
		isFirst : "http://www.iyunmai.com/weixin/friend/help/count.json",
		//选择好轻
		selHq : "http://www.iyunmai.com/weixin/target-award-choice/save.d",
		//判断是否选择了好轻
		isSelHq : "http://www.iyunmai.com/weixin/target-award-choice/get.json"
	},
	resize : function(){
		var $homeBox=$("#homeBox"),$main=$("#main"),$sucCutBox=$("#sucCutBox"),$myPro=$("#myProBox"),width=0,ratio=0,ratio_2=0;

		$(window).ready(function(){
			res()
		});
		
		$(window).resize(function(){
			res();
		});
		
		function res(){
			width = $(this).width();
			ratio = width/320;
			ratio_2 = width/340;
			
			$main.css({"transform":"scale("+(width<751?ratio:750/320)+")","transform-origin":"top"});
			$sucCutBox.css({"transform":"scale("+(width<751?ratio:750/320)+")","transform-origin":"top"});
			$myPro.css({"height":(width<751?ratio_2*650:(750/340)*650),"transform":"scale("+(width<751?ratio_2:750/340)+")","transform-origin":"top"});
		}
		
		$homeBox.show();
	},
	/*
	 * 是否自己
	 */
	isMy : function(){
		if(com.isCookie($.cookie("friWeixinId"))){
			web.data.isMy=false;
			web.getIsFirst(false);
			web.getFriData();
			web.isFriSelHq();
			web.loadFriData();
		}else{
			web.data.isMy=true;
			web.getIsFirst(true);
			web.isSelHq();
		}
	},
	/*
	 * 获取数据
	 */
	getData : function(){
		var $surMo = $("#surMo"),$surFri = $("#surFri"),$surPrice=$("#surPrice"),$myFriNum = $("#myFriNum"),$myFriList=$("#myFriList"),$goldBox=$("#goldBox"),$bar=$("#bar"),$postMiniImg=$("#postMiniImg"),$postColorImg=$("#postColorImg"),$postHqImg=$("#postHqImg"),$giftImgHq=$("#giftImgHq"),$giftImgColor=$("#giftImgColor"),$giftImgMini=$("#giftImgMini"),param=[],list=[],alrMo=0,friLen=0,myLeft=0;
		
		if(!com.isCookie($.cookie("weixinId"))) return false;
		
		param = {
			activitysId : web.data.activitysId,
			openid : $.cookie("weixinId"),
			count : 100,
			t : com.getRandom()
		}
		
		com.ajax("GET",web.url.getData,param,"","",function(data){
			if(data.result.code==0){
				web.data.myLeft = data.data.left;
				friLen = data.data.rows.length;
				$myFriNum.text(friLen);
				
				if(web.data.hqId==5){
					myLeft=web.data.myLeft==200?0:(web.data.myLeft==0?199:200-web.data.myLeft);
					
					$surPrice.html('<p>好轻</p><p>'+myLeft+'/199</p>');
					$surFri.text(50-friLen);
					$bar.css({"width":(myLeft/200)*280});
					$goldBox.css({"left":-15+(myLeft/200)*250});
					$postHqImg.show();
					$giftImgHq.show();
				}else if(web.data.hqId==6){
					myLeft=web.data.myLeft==100?0:(web.data.myLeft==0?99:100-web.data.myLeft);
					
					$surPrice.html('<p>好轻Color</p><p>'+myLeft+'/99</p>');
					$surFri.text(25-friLen);
					$bar.css({"width":(myLeft/100)*280});
					$goldBox.css({"left":-15+(myLeft/100)*250});
					$postColorImg.show();
					$giftImgColor.show();
				}else if(web.data.hqId==7){
					myLeft=web.data.myLeft==60?0:(web.data.myLeft==0?59:60-web.data.myLeft);
					
					$surPrice.html('<p>好轻mini</p><p>'+myLeft+'/59</p>');
					$surFri.text(15-friLen);
					$bar.css({"width":(myLeft/60)*280});
					$goldBox.css({"left":-15+(myLeft/60)*250});
					$postMiniImg.show();
					$giftImgMini.show();
				}
				
				if(data.data.rows.length>0){
					$.each(data.data.rows,function(i,datas){
						if(datas.friend){
							list.push('<div class="box_all">');
							list.push('		<div class="box_img"><img src="'+datas.friend.headimgurl+'"></div>');
							list.push('		<p>'+datas.friend.nickname+'砍了'+datas.quantity+'元</p>');
							list.push('</div>');
						}
					})
					
					$myFriList.html(list.join(''));
				}else{
					$myFriList.html("");
				}
				
				web.weixinReady();
			}
		})
	},
	/*
	 * 获取朋友数据
	 */
	getFriData : function(){
		var $surFri=$("#surFri"),param=[],friLen=0;
		
		if(!com.isCookie($.cookie("friWeixinId"))) return false;
		
		param = {
			activitysId : web.data.activitysId,
			openid : $.cookie("friWeixinId"),
			count : 100,
			t : com.getRandom()
		}
		
		com.ajax("GET",web.url.getData,param,"","",function(data){
			if(data.result.code==0){
				web.data.friLeft = data.data.left;
				friLen = data.data.rows.length;
				
				if(web.data.friHqId==5){
					$surFri.text(50-friLen);
				}else if(web.data.friHqId==6){
					$surFri.text(25-friLen);
				}else if(web.data.friHqId==7){
					$surFri.text(15-friLen);
				}
			}
			
			web.data.friDataSwich=true;
		})
	},
	loadFriData : function(){
		
		loads();
		
		function loads(){
			setTimeout(function(){
				if(web.data.isFriSwich && web.data.friDataSwich){
					if(web.data.friLeft==0){
						web.data.isMy=true;
						web.getIsFirst(true);
						web.isSelHq();
					}
				}else{
					loads();
				};
			},100);
		}
	},
	/*
	 * 选择好轻
	 */
	selHq : function(){
		var $selHq=$("#selHq"),$giftBox=$("#giftBox"),param=[],swich=true;
		
		$selHq.children("a").click(function(e){
			e.preventDefault();
			if(!swich) return false;
			swich=false;
			
			param = {
				activitysId : web.data.activitysId,
				openid : $.cookie("weixinId"),
				reachTargetAwardId : $(this).data("num"),
				t : com.getRandom()
			}
			
			com.ajax("",web.url.selHq,param,"","",function(data){
				if(data.result.code==0){
					$selHq.hide();
					$giftBox.show();
					web.getData();
					web.getIsFirst(true);
					web.data.hqId = data.data.reachTargetAwardId;
				};
				
				swich=true;
			})
		})
	},
	isSelHq : function(){
		var $selHq=$("#selHq"),$giftBox=$("#giftBox"),$myProBtn=$("#myProBtn"),param=[];
		
		if(!com.isCookie($.cookie("weixinId"))) return false;
		
		param = {
			activitysId : web.data.activitysId,
			openid : $.cookie("weixinId"),
			t : com.getRandom()
		}
		
		com.ajax("GET",web.url.isSelHq,param,"","",function(data){
			if(data.result.code==0){
				if(data.data.reachTargetAwardId==-1){
					$selHq.show();
					$giftBox.hide();
					$myProBtn.text("砍价进度");
				}else if(data.data.reachTargetAwardId>0){
					$selHq.hide();
					$giftBox.show();
					web.getData();
					web.data.hqId = data.data.reachTargetAwardId;
				}
			}
		})
	},
	isFriSelHq : function(){
		var param=[];
		
		if(!com.isCookie($.cookie("friWeixinId"))) return false;
		
		param = {
			activitysId : web.data.activitysId,
			openid : $.cookie("friWeixinId")
		}
		
		com.ajax("GET",web.url.isSelHq,param,"","",function(data){
			if(data.result.code==0){
				if(data.data.reachTargetAwardId>0){
					web.data.friHqId = data.data.reachTargetAwardId;
				}
			}
		})
	},
	/*
	 * 获取是否第一次
	 */
	getIsFirst : function(isMy){
		var $main=$("#main"),$selHq=$("#selHq"),$giftBox=$("#giftBox"),$friMain=$("#friMain"),$friRaise=$("#friRaise"),$startGiftBtn=$("#startGiftBtn"),$myProBtn=$("#myProBtn"),$goldBox=$("#goldBox"),param=[],openid=$.cookie("weixinId");
		
		if(!com.isCookie($.cookie("weixinId"))) return false;
		
		if(!isMy) openid = $.cookie("friWeixinId");
		
		param = {
			activitysId : web.data.activitysId,
			openid : openid,
			fromOpenid : $.cookie("weixinId"),
			t : com.getRandom()
		}
		
		com.ajax("GET",web.url.isFirst,param,"","",function(data){
			if(data.result.code==0){
				if(isMy){
					if(data.data.count==0){
						web.data.isFirst = true;
						$startGiftBtn.text("我要来砍一刀");
						$myProBtn.text("砍价进度");
						$goldBox.hide();
					}else{
						web.data.isFirst = false;
						$startGiftBtn.text("邀请好友帮砍");
						$myProBtn.text("砍价进度");
						$goldBox.show();
					}
				}else{
					if(data.data.count==0){
						web.data.isFriFirst = true;
						$startGiftBtn.text("帮好友砍一刀");
						$myProBtn.text("我要参与");
						$selHq.hide();
						$giftBox.show();
					}else{
						web.data.isFriFirst = false;
						$startGiftBtn.text("我要来砍一刀");
						$myProBtn.text("砍价进度");
						$selHq.hide();
						$giftBox.show();
						
						web.data.isMy=true;
						web.isSelHq();
						web.getIsFirst(true);
					}
				}
			}
			
			web.data.isFriSwich=true;
		})
	},
	/*
	 * 获取领取状态
	 */
	getDegree : function(){
		var $giftTitle=$("#giftTitle"),$giftTag=$("#giftTag"),param=[];
		
		if(!com.isCookie($.cookie("weixinId"))) return false;
		
		param = {
			activitysId : web.data.activitysId,
			openid : $.cookie("weixinId")
		}
		
		//draw 已经抽奖 sum 总次数  reach 1未领、-1已领、没返回，奖品没了
		com.ajax("GET",web.url.getDrawNum,param,"","",function(data){
			if(data.result.code==0){
				if(data.data.reaches){
					if(data.data.reaches.reach_5){
						web.data.buyHq=data.data.reaches.reach_5;
					}
					if(data.data.reaches.reach_6){
						web.data.buyColor=data.data.reaches.reach_6;
					}  
					if(data.data.reaches.reach_7){
						web.data.buyMini=data.data.reaches.reach_7;
					}  
				}
			}
		})
	},
	/*
	 * 提交
	 */
	postData : function(){
		var $postBtn=$("#postBtn"),$postInput=$("#postInput"),$postSucTit=$("#postSucTit"),$postBox=$("#postBox"),$tel=$("#tel"),$name=$("#name"),$guanZhu=$("#guanZhu"),$buyBox=$("#buyBox"),$tipCon=$("#tipCon"),$tipBox=$("#tipBox"),param=[],html="",postSwich=true,check=0,tel="",name="";
		
		$postBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_get_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				post();
				
				$(this).removeClass("btn_get_active");
			}
		});
		
		function post(){
			if(!postSwich) return false;
			postSwich = false;
			
			check=0;
			tel = $.trim($tel.val());
			name = $.trim($name.val());
			
			if(!com.isTel(tel) || !tel){
				$tel.stop().animate({"margin-left":20},50,function(){
					$(this).stop().animate({"margin-left":-20},50,function(){
						$(this).stop().animate({"margin-left":0},50,function(){})
					})
				});
				check++
			}
			
			if(!com.isName(name) || !name){
				$name.stop().animate({"margin-left":20},50,function(){
					$(this).stop().animate({"margin-left":-20},50,function(){
						$(this).stop().animate({"margin-left":0},50,function(){})
					})
				});
				check++
			}
			
			if(check==0){
				param = {
					"activitysId" : web.data.activitysId,
					"openid" : $.cookie("weixinId"),
					"phone" : tel,
					"realname" : name,
					"type" : 1,
					"reachTargetAwardId" : web.data.hqId
				}
				
				com.ajax("",web.url.save,param,"","",function(data){
					if(data.result.code==0){
						$postInput.hide();
						$postSucTit.show();
						web.getDegree();
					}else if(data.result.code==11002){ //没有奖品了
						$postBox.hide();
						$tipBox.show();
						$tipCon.html('<div class="box_p"><p>哎呀，小伙伴</p><p>该时段好轻被兑换完啦</p><p>下个时段，咱们不见不散~</p></div>');
					}else if(data.result.code==14000){
						$guanZhu.show();
					}
					postSwich = true;
				})
			}else{
				postSwich = true;
			}
		}
	},
	/*
	 * 我的砍价
	 */
	myPro : function(){
		var $myPro=$("#myPro"),$selHq=$("#selHq"),$giftBox=$("#giftBox"),$myProBtn=$("#myProBtn"),$homeBox=$("#homeBox"),$backIndex=$("#backIndex"),$startGiftBtn=$("#startGiftBtn"),$helpBox=$("#helpBox"),$giftImg=$("#giftImg"),$sucGiftTit=$("#sucGiftTit"),$receiveHqBtn=$("#receiveHqBtn"),$postBox=$("#postBox"),$tipCon=$("#tipCon"),$tipBox=$("#tipBox"),$tel=$("#tel"),$name=$("#name"),param=[];
		
		$myProBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_process_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				if(web.data.isMy){
					web.getData();
					web.getDegree();
				
					$myPro.show();
					$homeBox.hide();
				}else{
					web.data.isMy=true;
					web.isSelHq();
					web.getIsFirst(true);
				}
				
				$myProBtn.text("砍价进度");
				
				$(this).removeClass("btn_process_active");
			}
		});
		
		$backIndex.bind({
			touchstart : function(e){
				$(this).addClass("btn_back_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$myPro.hide();
				$homeBox.show();
				
				$(this).removeClass("btn_back_active");
			}
		});
		
		$startGiftBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_help_active");
			},
			touchend : function(e){
				e.preventDefault();
				$(this).removeClass("btn_help_active");
				
				if(web.data.isMy){
					if(web.data.isFirst){
						web.postRaise(true)
					}else{
						$helpBox.show();
						$giftImg.hide();
						$sucGiftTit.show();
					}
				}else{
					web.postRaise(false)	
				}
			}
		});
		
		$receiveHqBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_gethq_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				param = {
					activitysId : web.data.activitysId,
					openid : $.cookie("weixinId")
				}
				
				//draw 已经抽奖 sum 总次数  reach 1未领、-1已领、没返回，奖品没了
				com.ajax("GET",web.url.getDrawNum,param,"","",function(data){
					if(data.result.code==0){
						if(data.data.reaches){
							if(data.data.reaches.reach_5){
								web.data.buyHq=data.data.reaches.reach_5;
							}
							if(data.data.reaches.reach_6){
								web.data.buyColor=data.data.reaches.reach_6;
							}  
							if(data.data.reaches.reach_7){
								web.data.buyMini=data.data.reaches.reach_7;
							}  
						}
						
						if((web.data.hqId==5&&web.data.buyHq==1) || (web.data.hqId==6&&web.data.buyColor==1) || (web.data.hqId==7&&web.data.buyMini==1)){
							$tel.val("");
							$name.val("");
							$postBox.show();
						} 
						if((web.data.hqId==5&&web.data.buyHq==-1) || (web.data.hqId==6&&web.data.buyColor==-1) || (web.data.hqId==7&&web.data.buyMini==-1)){
							$tipBox.show();
							$tipCon.html('<div class="box_p"><p>不能贪心哟！</p><p>你的好轻会在活动结束后</p><p>邮寄给您喔~</p></div>');
						}
						if((web.data.hqId==5&&web.data.myLeft!=0) || (web.data.hqId==6&&web.data.myLeft!=0) || (web.data.hqId==7&&web.data.myLeft!=0)){
							$tipBox.show();
							$tipCon.html('<div class="box_p2"><p>哎呀，你砍价还未完成呢！</p><p>快去邀请好友帮砍价哟~</p></div>');
						}
						
						if((web.data.hqId==5&&web.data.buyHq==-2&&web.data.myLeft==0) || (web.data.hqId==6&&web.data.buyColor==-2&&web.data.myLeft==0) || (web.data.hqId==7&&web.data.buyMini==-2&&web.data.myLeft==0)){
							$tipBox.show();
							$tipCon.html('<div class="box_p"><p>哎呀，小伙伴</p><p>该时段好轻被兑换完啦</p><p>下个时段，咱们不见不散~</p></div>');
						}
						
						if((web.data.hqId==5&&web.data.buyHq==-3&&web.data.myLeft==0) || (web.data.hqId==6&&web.data.buyColor==-3&&web.data.myLeft==0) || (web.data.hqId==7&&web.data.buyMini==-3&&web.data.myLeft==0)){
							$tipBox.show();
							$tipCon.html('<div class="box_p"><p>咦，还未到领取时间哟！</p><p>双11当天 10时-22时</p><p>每逢整点兑换10台</p></div>');
						}
						
						$receiveHqBtn.removeClass("btn_gethq_active");
					}
				})
			}
		});
	},
	/*
	 * 保存砍价的价格
	 */
	postRaise : function(isMy){
		var $homeBox = $("#homeBox"),$sucCut = $("#sucCut"),$myFriNum = $("#myFriNum"),$goldBox = $("#goldBox"),$raiseGold = $("#raiseGold"),$goldBox=$("#goldBox"),$friMain=$("#friMain"),$friRaise=$("#friRaise"),$startGiftBtn=$("#startGiftBtn"),$guanZhu=$("#guanZhu"),$sucHelpBtn=$("#sucHelpBtn"),$mySucCutTit=$("#mySucCutTit"),$friSucCutTit=$("#friSucCutTit"),param=[],quantity=4,openid=$.cookie("weixinId"),nickname=$.cookie("weixinName");
		
		if(!isMy){
			openid = $.cookie("friWeixinId");
			
			if(quantity>web.data.friLeft) quantity = web.data.friLeft;
			
			web.data.isMy=false;
		}else{
			if(quantity>web.data.myLeft) quantity = web.data.myLeft;
			web.data.isMy=true;
		}
		
		if(quantity==0){
			return false;
		}
		
		param = {
			activitysId : web.data.activitysId,
			openid : openid,
			fromOpenid : $.cookie("weixinId"),
			quantity : quantity,
			nickname : nickname,
			fromNickname : $.cookie("weixinName"),
			t : com.getRandom()
		}
		
		com.ajax("",web.url.saveNum,param,"","",function(data){
			if(data.result.code==0){
				
				if(isMy){
					$homeBox.hide();
					$sucCut.show();
					
					web.getData();
					$startGiftBtn.text("邀请好友帮砍");
					$sucHelpBtn.text("邀请好友帮砍");
					$mySucCutTit.show();
					$friSucCutTit.hide();
					web.data.isFirst=false;
				}else{
					$homeBox.hide();
					$sucCut.show()
					$sucHelpBtn.text("返回首页");
					$mySucCutTit.hide();
					$friSucCutTit.show();
					web.data.isFriFirst=false;
					web.getFriData();
				}
			}else if(data.result.code==14000){
				$guanZhu.show();
			}
			
			web.weixinReady();
		},function(XMLHttpRequest,textStatus,errorThrown){
			
		});
	},
	/*
	 * 弹窗
	 */
	popBox : function(){
		var $buyBox=$("#buyBox"),$buyHq=$("#buyHq"),$buyClose=$("#buyClose"),$postClose=$("#postClose"),$postBox=$("#postBox"),$tipBox=$("#tipBox"),$tipClose=$("#tipClose"),$btnTmall=$("#btnTmall"),$btnJd=$("#btnJd"),$btnFree=$("#btnFree");
		
		$buyHq.bind({
			touchstart : function(e){
				$(this).addClass("btn_buy_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$buyBox.show();
				$(this).removeClass("btn_buy_active");
			}
		});
		
		$buyClose.bind({
			touchstart : function(e){
				$(this).addClass("btn_close_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$buyBox.hide();
				$(this).removeClass("btn_close_active");
			}
		});
		
		$postClose.bind({
			touchstart : function(e){
				$(this).addClass("btn_close_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$postBox.hide();
				$(this).removeClass("btn_close_active");
			}
		});
		
		$tipClose.bind({
			touchstart : function(e){
				$(this).addClass("btn_close_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$tipBox.hide();
				$(this).removeClass("btn_close_active");
			}
		});
		
		$btnTmall.bind({
			touchstart : function(e){
				$(this).addClass("btn_tmall_active");
			},
			touchend : function(e){
				e.preventDefault();
				window.location.href = "http://www.iyunmai.com/weixinGame/1111/tmall.html";
				$(this).removeClass("btn_tmall_active");
			}
		});
		
		$btnJd.bind({
			touchstart : function(e){
				$(this).addClass("btn_jd_active");
			},
			touchend : function(e){
				$(this).removeClass("btn_jd_active");
			}
		});
		
		$btnFree.bind({
			touchstart : function(e){
				$(this).addClass("btn_free_active");
			},
			touchend : function(e){
				$(this).removeClass("btn_free_active");
			}
		});
	},
	/*
	 * 规则
	 */
	ruleBox : function(){
		var $ruleGrey=$("#ruleGrey"),$ruleClose=$("#ruleClose"),$ruleBtn = $("a[id*='ruleBtn_']");
		
		$ruleBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_rule_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$ruleGrey.show();
				$(this).removeClass("btn_rule_active");
			}
		});
		
		$ruleClose.bind({
			touchstart : function(e){
				$(this).addClass("btn_close_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$ruleGrey.hide();
				$(this).removeClass("btn_close_active");
			}
		});
	},
	/*
	 * 找人帮忙
	 */
	helpBox : function(){
		var $helpBtn = $("a[id*='helpBtn_']"),$helpBox=$("#helpBox"),$sucCut=$("#sucCut"),$myPro=$("#myPro"),$sucHelpBtn=$("#sucHelpBtn"),$homeBox=$("#homeBox"),$goldBox=$("#goldBox");
		
		$helpBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_int_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				$helpBox.show();
				$(this).removeClass("btn_int_active");
			}
		});
		
		$helpBox.on({
			click : function(e){
				e.preventDefault();
				
				$(this).hide();
			}
		});
		
		$sucHelpBtn.bind({
			touchstart : function(e){
				$(this).addClass("btn_invite_active");
			},
			touchend : function(e){
				e.preventDefault();
				
				if(web.data.isMy){
					$helpBox.show();
					$myPro.show();
					$sucCut.hide();
					$goldBox.show();
					web.getData();
				}else{
					web.data.isMy=true;
					$homeBox.show();
					$sucCut.hide();
					web.isSelHq();
					web.getIsFirst(true);
				}
				$(this).removeClass("btn_invite_active");
			}
		});
	},
	/*
	 * 微信SDK
	 */
	weixinSdk : function(){
		var url = location.href.split('#')[0],param=[];

		param = {
			"url":url
		}
		
		com.ajax('GET','./wx-get-signature.json',param,'','',function(data){
			wx.config({
				debug: false, 
				appId: 'wxa080aa62c8caedc9',
				timestamp: data.timestamp, 
				nonceStr: data.nonceStr, 
				signature: data.signature,
				jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
			});
			
			web.weixinReady();
		})
	},
	/*
	 * 设置微信分享
	 */
	weixinReady : function(){
		var arrs=[],randoms=com.getRandomNum(0,2),hqTit="云麦好轻";
		
		if(web.data.hqId==5){
			hqTit="云麦好轻";
		}else if(web.data.hqId==6){
			hqTit="好轻Color";
		}else if(web.data.hqId==7){
			hqTit="好轻mini";
		}
		
		arrs=["全民砍价，我还差一点就能免费拿"+hqTit+"智能体脂秤啦！就差你帮我了~","双11低价狂欢怎么够？砍价0元拿好轻！"];
		
		wx.ready(function(){
			wx.onMenuShareTimeline({
				title: arrs[randoms],
				link: web.data.shareUrl+"?friWeixinId="+$.cookie("weixinId"),
				imgUrl: web.data.shareImg,
				success: function(){}
			});
			wx.onMenuShareAppMessage({
				title: "我还差1步，就能免费拿"+hqTit+"智能体脂秤啦！快来帮我点~",
				desc: "双11低价狂欢怎么够？不如砍价0元拿好轻！",
				link: web.data.shareUrl+"?friWeixinId="+$.cookie("weixinId"),
				imgUrl: web.data.shareImg, 
				type: '',
				dataUrl: '',
				success: function(){}
			});
		});
	},
	/*
	 * 检测和获取微信ID
	 */
	checkWeixinId : function(){
		if($.cookie("checkFastg")*1!=2){
			$.cookie("checkFastg",2,{expires: com.setCookieTime(14400)});
			web.login();
		}else{
			if(com.queryString("code")){
				com.ajax('GET','http://www.iyunmai.com/wx-get-data.json?code='+com.queryString("code")+'&t='+com.getRandom(),'','','',function(data){
					if(typeof(data.openid)=="undefined"){
						$.cookie("checkFastg","",{expires: com.setCookieTime(10)});
						web.login();
					}else{
						$.cookie("weixinId",data.openid,{expires: com.setCookieTime(14400)});
						$.cookie("checkFastg",2,{expires: com.setCookieTime(14400)});
						
						web.weixinReady();
						web.isMy();
						web.getData();
						web.getDegree();
						web.isGuanZhu();
					}
				})
			}
		}
	},
	/*
	 * 是否关注
	 */
	isGuanZhu : function(){
		var $guanZhu=$("#guanZhu"),$myName=$("#myName"),$myName_2=$("#myName_2"),$myHeadImg=$("#myHeadImg");
		
		com.ajax('GET','./wx-get-userinfo.json?accessToken=&openId='+$.cookie("weixinId")+'&t='+com.getRandom(),'','','',function(datas){
			if(datas.subscribe==0){
				$guanZhu.show();
			}else{
				$.cookie("weixinName",datas.nickname,{expires: com.setCookieTime(14400)});
				$.cookie("weixinHeadImg",datas.headimgurl,{expires: com.setCookieTime(14400)});
				$myName.text(datas.nickname);
				$myName_2.text(datas.nickname);
				$myHeadImg.attr("src",datas.headimgurl);
			} 
		})
	},
	/*
	 * 微信验证
	 */
	login : function(){
		var checkUrl="";
		checkUrl = web.data.shareUrl+"?friWeixinId="+$.cookie("friWeixinId");
		// window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa080aa62c8caedc9&redirect_uri='+encodeURIComponent(checkUrl)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
	}
}