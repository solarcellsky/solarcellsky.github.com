//隐藏站长统计
	     $("#cnzz_stat_icon_1253112090").hide();
		 $("#cnzz_stat_icon_1254712307").hide();

		 var preST = "";
		 var is_gongzonghao=0;
window.ISLOADING=false;		 
var re_nickname_score = {nickname:'',score:0,preST:''}

function isMobile(){
	return navigator.userAgent.match(/android|iphone|ipad|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i);
}
function IOSplay68(){
	return navigator.userAgent.match(/IOSplay68/i);
}
function APPplay68(){
	return navigator.userAgent.match(/Play68/i);
}
function isIos() {
	return navigator.userAgent.match(/iphone|ipod|ios|ipad/i);
}
function isAndroid() {
	return navigator.userAgent.match(/android/i);
}
if(typeof window.webkit === "object"){
  window.iosplay68=true;
}else{
  window.iosplay68=false;
}
function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}
function setFlowTips(msg) {
		if( !this.fTips ){
			this.fTips = $("<div class='login_flow_box'></div>").appendTo($(document.body));		
		}
		this.fTips.html(msg).show();
		var self = this;
		setTimeout(function(){self.fTips.html('').hide()}, 2000);
	}
	
//设置默认游戏的分享语句
function re_gameShareState(){
	if(re_nickname_score.preST == ''){
		re_nickname_score.preST = SHARE_TITLE;
	}
}

function re_nickname(nickname){  //记录当前玩家的昵称
	if(arguments.length == 0){
		 re_nickname_score.nickname = '我';
	}else{
		re_nickname_score.nickname = nickname;
	}
	
	return re_nickname_score;
}

function re_score(score){  //记录当前玩家的分数
	if(arguments.length == 0){
		 re_nickname_score.score = 0;
	}else{
		 re_nickname_score.score = score;
	}
	
	return re_nickname_score;
}

//设置微信分享语句
function setShareStatement(){
	if(preST == ''){
		preST = SHARE_TITLE;
	}
	var nickname = re_nickname_score.nickname;
	var score = re_nickname_score.score;
	if(nickname == '我'){
		SHARE_TITLE = nickname+"邀请你来【"+GAMENAME+"】一起玩~";
	}else{
		SHARE_TITLE = nickname+"邀请你来【"+GAMENAME+"】挑战她的成绩:"+score;
	}
}

function getuserplaceinfo(gameid,userid){
	_czc.push(["_trackEvent","按钮事件","玩家信息","玩家头像","",""]);
	showLoading();
	$.ajax({
				url:"/?r=Play/place/gameid/"+gameid+"/userid/"+userid,
				dataType: "html",
			
				success: function(Data){
					
					$(".nav").before(Data);
					hideLoading();
				}
			});

}
function getNewUserPlaceInfo(gameid,userid){
	_czc.push(["_trackEvent","排行榜","玩家信息","","",""]);
	if (ISLOADING) return;
	showLoading();
	$.ajax({
				url:"/?r=Play/place/gameid/"+gameid+"/userid/"+userid,
				dataType: "html",
			
				success: function(Data){
				
					$(".nav").before(Data);
					hideLoading();
				}
			});
}
function getFriendTotalInfo(gameid){
	_czc.push(["_trackEvent","好友总分榜","查看总分榜按钮","","",""]);
	if (ISLOADING) return;
	showLoading();
	$.ajax({
				url:"/?r=Play/friendtotalranking/gameid/"+gameid,
				dataType: "html",
			
				success: function(Data){
					//$('.meiripaix3').css('display','none');
					$(".nav").before(Data);
					hideLoading();
				}
			});
}
function setduang(gameid,duangid,that){
	_czc.push(["_trackEvent","土豆菜单","duang","","",""]);
	if (ISLOADING) return;
	showLoading();
	$.ajax({
			url:"/?r=Play/duang/gameid/"+gameid+"/duangid/"+duangid,
			success: function(ret){ 
				if(ret=='over_duang'){
					setFlowTips('今天DUANG用完咯，明天自动补满~');
					var DUAND_ID='#duang'+duangid+' img';
					$(DUAND_ID).attr('src','./resources/images/meiribisai/duang1.png');
					$(that).find('img').attr('src','./resources/images/meiribisai/duang1.png');
				}else if(ret=='is_duang'){
					setFlowTips('今天已经DUANG过了此用户了！');
				}else if(ret =='duang_over'){
					setFlowTips('今天DUANG用完咯，明天自动补满~');
				}else{
					
					setFlowTips('成功发送，今天还可DUANG '+ret+' 次');
					var DUAND_ID='#duang'+duangid+' img';
					$(DUAND_ID).attr('src','./resources/images/meiribisai/duang1.png');
					$(that).find('img').attr('src','./resources/images/meiribisai/duang1.png');
				}
				hideLoading();
			},
			dataType:''
	});
	
}

function tellfriendplaygame(gameid,friendid,that){
	_czc.push(["_trackEvent","好友总分榜","通知TA按钮","","",""]);
	if (ISLOADING) return;
	showLoading();
	$.ajax({
			url:"/?r=Play/tellfriendplaygame/gameid/"+gameid+"/friendid/"+friendid,
			success: function(ret){ 
				if(ret=='no_tell'){
					setFlowTips('成功通知好友来助威');
					
					$(that).find('img').attr('src','./resources/images/meiribisai/tongzhi2.png');
				}else{
					
					setFlowTips('已经通知过好友了');
					
					$(that).find('img').attr('src','./resources/images/meiribisai/tongzhi2.png');
				}
				hideLoading();
			},
			dataType:''
	});
	
}

function stopBubble(e){  
    // 如果传入了事件对象，那么就是非ie浏览器  
    if(e&&e.stopPropagation){  
        //因此它支持W3C的stopPropagation()方法  
        e.stopPropagation();  
    }else{  
        //否则我们使用ie的方法来取消事件冒泡  
        window.event.cancelBubble = true;  
    }  
}
function jixutiaozhan(){
	$(".xinpai").css('display','none');
}
var is_friend_rank=0;
var yaoqing_friend="ooo"; //邀请好友时分享语句
var set_timer=null;
//分享提示效果
function tjhy(){
	setShareStatement();
	_czc.push(["_trackEvent","排行榜邀请好友按钮",GAMENAME,"","",""]);
	tjhy_tongji();
function tjhy_tongji(i){
	 
	i = i || 0;
	var visVal = i % 2 === 0 ? 'hidden' : 'visible';
	$("#yaoqing").css("visibility",visVal);
	clearTimeout(set_timer);
	if(i>4)
		return;
	i++;
	set_timer = setTimeout(function(){
		tjhy_tongji(i);
	}, 300);
}
}


//排行榜点击分享时关闭排行榜
function close_paix(){
  _czc.push(["_trackEvent","按钮事件","排行榜","分享","",""]);	
  $(".xinpai").css('display','none');	
  show_share_page();	
}

function more_games(){
	_czc.push(["_trackEvent","按钮事件","排行榜","更多游戏","",""]);
	
	if(USERID > 0){
	$.ajax({
   type: "POST",
   url: "/?r=Ranking/checkweixin",
   data: "",
   success: function(msg){
    
     msg=parseInt(msg);
     if(msg === 0){
     
     	window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
     }else if(msg === 1){
     
    	window.location.href='/'; 	
     }
   }
});
	}
	
}

//获取字符串长度
function getBytesCount(str){ 
	var bytesCount = 0; 
	if (str != null){ 
		for (var i = 0; i < str.length; i++){ 
			var c = str.charAt(i); 
			if (/^[\u0000-\u00ff]$/.test(c)){ 
			  bytesCount += 1; 
			}else{ 
			  bytesCount += 2; 
			} 
		} 
	} 
	return bytesCount; 
}

$(function(){
	//游戏页面登录不跳转开始
	var _loginUi = function(){};
	_loginUi.prototype = {
     
	  
	  //登录用户名验证
      loginFun : function() {
		    var self = this;
			self.name = $('#txtName').val();
			if ( /^[a-zA-Z0-9_]{6,12}$/.test(self.name) ){
				self.validName(function(ret){
					if( ret == 'ok' ){
						self.login();
					}else{		
						$('#txtName').val('帐号不存在!').css('color','red');	
						}
				});
			} else{
			            $('#txtName').val('请输入6-12位字母数字的组合').css('color','red');
			};
		},
      //注册用户名验证
	   registerFun : function() {
		    var self = this;
			self.name = $('.zhuce #txtRegName').val();
			if ( /^[a-zA-Z0-9_]{6,12}$/.test(self.name) ){
				self.validName(function(ret){
					if( ret == 'ok' ){
						setTimeout(function(){self.setFlowTips('帐号已存在!');},500);
						$("#txtRegName").val(self.name);
					}
					else if(ret == 'not_found'){	
						self.register();
						}
				});
			} else{
						setTimeout(function(){self.setFlowTips('请重新输入6-12个字符，由字母或数字组成');},500);
						$("#txtRegName").val(self.name);
				
			};
		},
		//信息提示框
		setFlowTips : function(msg) {
		if( !this.fTips ){
			this.fTips = $("<div class='login_flow_box'></div>").appendTo($(document.body));		
		}
		this.fTips.html(msg).show();
		var self = this;
		setTimeout(function(){self.fTips.html('').hide()}, 2000);
	},	

      //AJAX验证用户名
       validName : function(callback) {
		var self = this;
		if (ISLOADING) return;
		 showLoading();
		$.ajax({
			url: '/?r=login/validname',
			type:'POST',
			data: {username:this.name},
			success: function(ret) {
				hideLoading();
				callback(ret);
			 },
			error: function(XHR, ErrorMsg) {
				//self.setTips('系统错误，请稍后再试');
			}
		  });
	     },
		 loginCallback: null,
        //显示登录页面
		show : function(cbFun){
			this.loginCallback = cbFun;
			
			if(this.isLogin()){
				this.setFlowTips('你已经登录成功！');
				return;
			}
			if( $(".login").length == 0 ){
				this.initUI("loginui");
			}
			$(".login").show();			
		},
		//隐藏登录页面
		hide : function(){
			$(".login").hide();
			$('.login').detach();//清空login
			$(".bottom .userbtn").attr('src','./resources/images/batton_geren.png');
		},
		
		//获取密码
		getPwd : function() {
		   return $("#txtPwd").val();
		},
		//判断登录
		isLogin : function() {
				var isLogin = false;
				if (ISLOADING) return;
				showLoading(); 
				$.ajax({
				   type: "POST",
				   url: "/?r=Login/islogin",
				   async: false,
				   success: function(ret){
					 hideLoading();     
					 isLogin = ret == '1';
				   }
				});
				return isLogin;
		},
		//跳转
		gopersonal:function(){

		window.location.href = "/?r=Personal/personal";
			},
		
		//登录
		login : function() {
		var self = this;
		if (ISLOADING) return;
		showLoading();
		if($("#txtPwd").val()==''){
				hideLoading();
				setTimeout(function(){self.setFlowTips('请输入密码');},500);
				return;
			}
		$.ajax({
			url:'/?r=login/login',
			type:'post',
			data: {username:self.name, pwd:self.getPwd()},
			success: function(ret){
				hideLoading();
				if(ret == 'ok'){
					
					//登录成功跳转
				  if(typeof self.loginCallback == 'function'){
					  try{
							self.loginCallback();
						}catch(e){
							console.log(e);
						}
			  		
				    }
					
						setTimeout(function(){self.hide();},500);
						setTimeout(function(){self.setFlowTips('登录成功');},500);		
				}else if(ret=='not_found'){
					
				        $("#txtPwd").val('');
						self.setFlowTips('密码错误');
						return;
						
					}
					self.loginCallback = null;
			},
			
			dataType:''}
		);
	},
	    //注册
		register : function() {	
		var self = this;
		var pwd1 = $("#txtRegPwd1").val();
		var pwd2 = $("#txtRegPwd2").val();
		if(/^[a-zA-Z0-9_]{6,12}$/.test(pwd1) && /^[a-zA-Z0-9_]{6,12}$/.test(pwd2)){
				if(pwd1==''){
					  self.setFlowTips('请输入密码');
					  return;
				}
				if(pwd2==''){
					  self.setFlowTips('请再输入确认密码');
					  return;
				}
				if(pwd1 != pwd2){
					 self.setFlowTips('两次密码不一致，请重新输入!');
					 $("#txtRegPwd1").val('');
					 $("#txtRegPwd2").val('');
					 return;
				}
				if (pwd1 != "" && pwd2 === pwd1) {
					$(".mm p").text('');
					if (ISLOADING) return;
					showLoading();
					$.ajax({
						url: '/?r=login/register',
						type: 'POST',
						data: {username:this.name, pwd:pwd1},
						success: function(ret){
							console.log(ret);
							 hideLoading();
							if(ret == 'not_found') {
								$("#txtRegPwd1").val('');
								$("#txtRegPwd2").val('');
								self.setFlowTips('用户名已存在');
								return;
							}
							if(ret=='ok'){
								if(typeof self.loginCallback == 'function'){
								  try{
										self.loginCallback();
									}catch(e){
										console.log(e);
									}
								
								}
								setTimeout(function(){self.hidezhuce();},500);
								setTimeout(function(){self.setFlowTips('注册成功');},500);
								
							}
							self.loginCallback = null;
						},
						dataType:''
					});
				}
				else {
					
								setTimeout(function(){self.setFlowTips('两次密码不一致，请重新输入');},500);
					
				}
			}else{
				self.setFlowTips('密码格式不对，请输入6-12位数字字母组合');
				$("#txtRegPwd1").val('');
			    $("#txtRegPwd2").val('');
				return;	
			}
		},
	 
	    //退出
	    logout:function(){
	     var self=this;
		 self.loginout();
		 self.hideloginout();
		 setTimeout(function(){
		 if(document.referrer){
			  window.location.href=document.referrer;
			 }else{
			  window.location.href='/';
			 }
			 
		 },500)
		  },
		  
		  
		loginout:function(){ 
	    	var self = this;
			if (ISLOADING) return;
		showLoading();
		$.ajax({
			url:'/?r=login/loginout',
			type:'post',
			data: '',
			success: function(ret){
				hideLoading();
				if(ret == 'ok'){
					self.setFlowTips('你已退出登录');
					}else{
						return;
						}
			  },
			
			dataType:''}
		  );
		},

		//显示退出框
		showlonginout:function(){
			if( $(".exit").length == 0 ){
				this.personalUI('loginout');
			}
			$(".exit").show();
			
		},
		//隐藏退出框
		hideloginout:function(){
			$(".exit").hide();
			
		},
		
		//隐藏密码框
		hidepwd:function(){
			var self=this;
			
			this.tmpPwd=null;
            $(".possword").hide();
			$(".mm p").text('请输入密码');
		},
		//显示注册框
		showzhuce : function(){
			if( $(".zhuce").length == 0 ){
				this.initUI('zhuce');
			}
			$(".login").hide();	
			$(".zhuce").show();
		},
		//隐藏注册框
		hidezhuce:function(){
		
            $(".zhuce").hide();

		},

		
        //公共页面弹出框初始化
		initUI : function(Action, callback){
			if (ISLOADING) return;
			showLoading();
			$.ajax({
				url:"/?r=login/loginui&action="+Action+"&uri="+window.location.href,
				dataType: "html",
				success: function(Data){
					hideLoading();
					$(".jiangl").before(Data);
					$(".denglu2 li").eq(0).click(function(){window.location.href='/';});
					if(typeof callback == "function")
						callback();
				}
			});
		 	
		},
		//显示支付提示banner下载框
	    pcpaydown : function(){
			if( $(".pcpaydown").length == 0 ){
				this.PcDownUI("pcpaydown");
			}
			$(".pcpaydown").show();
		},
		//显示banner下载框
	    pcdown : function(){
			
			if( $(".out_pcdown").length == 0 ){
				this.PcDownUI("pcdown");
			}
			$(".out_pcdown").show();		
		},
		//banner下载弹出框初始化
		PcDownUI : function(Action,callback){
			if (ISLOADING) return;
			showLoading();
			$.ajax({
				url:"/?r=login/loginui&action="+Action,
				dataType: "html",
				success: function(Data){
					hideLoading();
					$(".nav").before(Data);
					if(typeof callback == "function")
						callback();
				}
			});
		 	
		},
		//联运游戏弹出下载框
		gamedown : function(){
			
			if( $(".youxixiazai").length == 0 ){
				this.gameDownUI("gamedown");
			}
			$(".youxixiazai").show();		
		},
		//联运游戏弹出下载框初始化
		gameDownUI : function(Action,callback){
			if (ISLOADING) return;
			showLoading();
			$.ajax({
				url:"/?r=login/loginui&action="+Action,
				dataType: "html",
				success: function(Data){
					hideLoading();
					$(".pay").before(Data);
					if(typeof callback == "function")
						callback();
				}
			});
		 	
		}	

		
	};
	window.LoginUi = new _loginUi();

	//游戏页面登录不跳转结束

	// 游戏玩法的切换
	$(function(){
	$("#s13").click(function(){
		_czc.push(["_trackEvent","菜单按钮事件","玩法","菜单玩法点击","",""]);
		$(".shuoming").toggleClass("block");
		//$(".xiaz").toggleClass("none");
		// :hidden $content.is(":visible")
		
		if($(".shuoming").is(":visible")){
		
			$(".xiaz").hide();
			}else{
			$(".xiaz").show();
			}
		})
	})
	$("li:not(#s13,#s0,#s1,#s12)").click(function(){
		$(".shuoming").removeClass("block");
		$(".xiaz").hide();

		})
		
		
	$(".guangb").click(function(){
		
		$(".xiaz1").hide();
		})
	$(".pinglu1_a_1 li").click(function(){
		$(".xiaz").show();
		})
		
	$(".xunz1_a li").click(function(){
		$(".xiaz").show();
		})
	$(".paix1_a_1 li").click(function(){
		$(".xiaz").show();
		})

	var dragging = false;
	var gameTime = 0;
    var iX, iY, t1;
	function run (node, attr, val, maxval, fun, flag, offset) {
		offset = parseInt(offset || 0);
		if(val > 90){
			if(flag){
				$(node).hide();
			}
			$(node).removeAttr('moveing');
			return;
		}
		$(node).css(attr, fun(val*Math.PI/180)*maxval+offset).attr('moveing', 'true');
		
		setTimeout(function(){
			run(node, attr, val+45, maxval, fun, flag, offset);
		}, 40);
	}
	function action(action, showType) {
		var posAttr = {
			'lt' : [['left','top','right','bottom'], ['top','left','right','bottom']],
			'rt' : [['right','top','left','bottom'], ['top','right','left','bottom']],
			'lb' : [['left','top','right','bottom'], ['bottom','left','right','top']],
			'rb' : [['right','top','left','bottom'], ['bottom','right','left','top']]
		}[showType];

		var menus = {
			'lt' : [["s14","s12","s11","s13"], ["s21","s22","s23"]],
			'rt' : [["s13","s11","s12","s14"], ["s21","s22","s23"]],
			'lb' : [["s14","s12","s11","s13"], ["s23","s22","s21"]],
			'rb' : [["s13","s11","s12","s14"], ["s23","s22","s21"]]
		}[showType];
		if(action == 'hide') {
			var f = Math.cos;
			var s0 = $('#s0').show();
						setTimeout(function(){
				$('#s0').attr('src', './resources/images/xiangq/batton_shouqi_1.png');
			}, 3000);
			var s1 = $('#s1').hide();
			var shuoming = $('#shuoming').removeClass("block");
			var xiaz = $('#xiaz').hide();
	      	$(".xiaz1").show();
			
		}
		else {
			var f = Math.sin;
			var s0 = $('#s0').hide();
			var s1 = $('#s1').show();
			var xiaz = $('#xiaz').hide();
			setTimeout(function(){
					xiaz.show();
				},200);
			var shuoming = $('#shuoming');
		}
		var flag = action=='hide';
		var w = s1.width() * 1.1;
		s1.css(posAttr[0][0], s0.css(posAttr[0][0]))
				.css(posAttr[0][1], s0.css(posAttr[0][1]))
				.css(posAttr[0][2], s0.css(posAttr[0][2]))
				.css(posAttr[0][3], s0.css(posAttr[0][3]));

		// 纠正s1靠边
		autoPos(s1);
		for(var i=0; i<menus[0].length; i++) {
			var j=i+1;
			var node = $("#"+menus[0][i]).css(posAttr[0][0], s0.css(posAttr[0][0]))
				.css(posAttr[0][1], s0.css(posAttr[0][1]))
				.css(posAttr[0][2], 'auto')
				.css(posAttr[0][3], 'auto').show();
			run(node, posAttr[0][0], 0, j*w, f, flag);
		}
		for(var i=0; i<menus[1].length; i++) {
			var j=i+1;
			var node = $("#"+menus[1][i]).css(posAttr[1][0], s0.css(posAttr[1][0]))
				.css(posAttr[1][1], 0)
				.css(posAttr[1][2], 'auto')
				.css(posAttr[1][3], 'auto').show();
			if(showType=='rb' || showType == 'lb'){
				var t = parseInt(s0.css('top'));
				var dt = $(document).height();
				var offset = dt-t-node.height();
			}
			else{
				var offset = parseInt(s0.css('top'));
			}
			run(node, posAttr[1][0], 0, j*w, f, flag, offset);
		}
		//玩法弹框
		var menusNode0 = $("#"+menus[0][0]);
		function fun_setpos(_node){
			if(showType == 'lb' || showType == 'rb' ){
				_node.css(posAttr[0][0], parseInt(menusNode0.css(posAttr[0][0]))+menusNode0.width())
					.css(posAttr[0][1], parseInt(menusNode0.css(posAttr[0][1]))-_node.height())
					.css(posAttr[0][2], menusNode0.css(posAttr[0][2]))
					.css(posAttr[0][3], menusNode0.css(posAttr[0][3]));
					
			}
			else{
				_node.css(posAttr[0][0], parseInt(menusNode0.css(posAttr[0][0]))+menusNode0.width())
					.css(posAttr[0][1], parseInt(menusNode0.css(posAttr[0][1]))+menusNode0.height())
					.css(posAttr[0][2], menusNode0.css(posAttr[0][2]))
					.css(posAttr[0][3], menusNode0.css(posAttr[0][3]));
			}
		}
		fun_setpos(shuoming);
		fun_setpos(xiaz);
	}
	$("#s0").css('top',50).css('left',0).css('right','auto').css('bottom','auto');
	$("#s1").css('top',50).css('left',0).css('right','auto').css('bottom','auto');
	$("#shuoming").css('top',150).css('left',100).css('right','auto').css('bottom','auto');
	$(".xiaz").css('top',150).css('left',100).css('right','auto').css('bottom','auto');
	function posType () {
		var top = parseInt( $("#s0").css('top') );
		var left = parseInt( $("#s0").css('left') );
		//var right = $("#s0").css('right');
		//var bottom = $("#s0").css('bottom');

		var ch = document.documentElement.clientHeight/2;
		var cw = document.documentElement.clientWidth/2;
		//console.log(top+","+left+","+ch+","+cw);

		if(top < ch){
			return left < cw ? 'lt' : 'rt';
		}
		else{
			return left < cw ? 'lb' : 'rb';
		}

		
		
	}
	function autoPos(node){
		node = node || $("#s0");
		var posT = posType();
        if(posT == 'lt' || posT == 'lb'){
			var maxW = parseInt(node.css('left'));
			run(node, 'left', 0, -maxW, Math.sin, false, parseInt(node.css('left')));
		}
		else{
			var maxW = document.documentElement.clientWidth - parseInt(node.css('left'));
			run(node, 'left', 0, maxW-parseInt(node.width()), Math.sin, false, parseInt(node.css('left')));
		}
	//	setTimeout(function(){$("#s0").css('opacity',1);},1000);//setTimeout(function(){$("#s0").css('opacity',0.5);},1000);
	}
	// 移动设备和不同处理
	if( /ipad|ipod|iphone|android/i.test(navigator.userAgent) ){
		$("#s1").bind('touchend',function(){
			_czc.push(["_trackEvent","土豆菜单点击数","关闭菜单","","",""]);
			action('hide',posType());
		});
		$("#s0").bind('touchstart', function(event){
			_czc.push(['_trackEvent','土豆菜单点击数','打开菜单','','','']);
			t1 = (new Date).getTime();

			
		}).bind('touchend',function(event){
			$("#s0").css('opacity',1);
			$("#s0").removeAttr('dragging');
			if( (new Date).getTime() - t1 > 200) {
				return;
			};

            setTimeout(function(){
				//newShowRanking2();
            	//横屏菜单
            	if (isWeixin()) {
            		horizontalMenuForFriend();
            	} else {
            		horizontalMenuForWorld();
            	}
				if(IS_RANKING == 1){
					
				}else{  //如果不弹排行榜，默认弹社区
					ISLOADING = false;
					//$(".community").trigger("click");
					horizontalMenuForCommentList();
				}   
				if(IOSplay68() || window.iosplay68){
				  window.show_ejam_banner =false;
				}
				if(window.show_ejam_banner){
					_czc.push(["_trackEvent","易简广告展示数","易简广告展示数","","",""]);
					if(window.ranking_num == 0 ){
					  myBanner68(0);
					}else if(window.ranking_num < 4){
					  myBanner68(window.ranking_num);
					}else{
					  myBanner68(4);
					}
				}
			},500);
		}).show();
		$("#s0").bind('touchstart', function(e){
			$("#s0").attr('dragging', 'dragging').css('opacity',1);
			iX = e.originalEvent.targetTouches[0].clientX - $(this)[0].offsetLeft;
	        iY = e.originalEvent.targetTouches[0].clientY - $(this)[0].offsetTop;
			$("#cover").show();
			
		}).bind('touchmove', function(e){
			$("#s0").css('opacity',1);
			var x = e.originalEvent.targetTouches[0].clientX - iX;
			var y = e.originalEvent.targetTouches[0].clientY - iY;
			var nHeight = document.documentElement.clientHeight - parseInt($("#s0").css('height'));
			y = y < 0 ? 0 : y;
			y = y > nHeight ?  nHeight : y;
			$("#s0").css('left', x).css('top', y).css('right','auto').css('bottom','auto');
			if($("#s0").attr('dragging') === 'dragging'){
				e.preventDefault();
			}
		})
		.bind('touchend', function(e){
			$("#cover").hide();
			autoPos();
		});
	}
	else{
		$("#s1").click(function(e){
			_czc.push(["_trackEvent","土豆菜单点击数","关闭菜单","","",""]);
			action('hide',posType());
			e.stopPropagation();
		});
		$("#s0").click(function(e){
		 _czc.push(['_trackEvent','土豆菜单点击数','打开菜单','','','']);
            
			if( (new Date).getTime() - t1 > 200) {
				return;
			};
            //newShowRanking2();
			//横屏菜单
			if (isWeixin()) {
        		horizontalMenuForFriend();
        	} else {
        		horizontalMenuForWorld();
        	}
            if(IS_RANKING == 1){
			   
			}else{  //如果不弹排行榜，默认弹社区
				ISLOADING = false;
				//$(".community").trigger("click");
				horizontalMenuForCommentList();
   			}
			e.stopPropagation();
			if(IOSplay68() || window.iosplay68){
			  window.show_ejam_banner =false;
			}
			if(window.show_ejam_banner){
				_czc.push(["_trackEvent","易简广告展示数","易简广告展示数","","",""]);
				if(window.ranking_num == 0 ){
				  myBanner68(0);
				}else if(window.ranking_num < 4){
				  myBanner68(window.ranking_num);
				}else{
				  myBanner68(4);
				}
			}
		})
		.mousedown(function(e) {
	        dragging = true;
	        $("#cover").show();
	        t1 = (new Date).getTime();
	        iX = e.clientX - this.offsetLeft;
	        iY = e.clientY - this.offsetTop;
	        this.setCapture && this.setCapture();
	        return false;
	    }).show();
		document.onmousemove = function(e) {
			$("#s0").css('opacity',1);
	        if (dragging) {
	        var e = e || window.event;
	        var oX = e.clientX - iX;
	        var oY = e.clientY - iY;
	        var nHeight = document.documentElement.clientHeight - parseInt($("#s0").css('height'));
			oY = oY < 0 ? 0 : oY;
			oY = oY > nHeight ?  nHeight : oY;
	        $("#s0").css({"left":oX + "px", "top":oY + "px"});
	        return false;
	        }
	        e.stopPropagation();
	    };
		document.onmouseout = function(e) {
			setTimeout(function(){
				$("#s0").css('opacity',1);//$("#s0").css('opacity',0.5);
			},1000);
		}
	    $(document).mouseup(function(e) {
			setTimeout(function(){
				$("#s0").css('opacity',1);//$("#s0").css('opacity',0.5);
			},1000);
	        dragging = false;
	        $("#s0")[0].releaseCapture && $("#s0")[0].releaseCapture();
	        autoPos();
	        $("#cover").hide();
	        e.cancelBubble = true;
	    });
	}

	$("#game_window").css('height', $(document).height());


    $("#cover").css('height', $(document).height());

    // 返回
    $("#s14").click(function(e){
		_czc.push(["_trackEvent","菜单按钮事件","退出","菜单退出点击","",""]);
    	if( $(this).attr('moveing') ){
    		return;
    	}
		window.location.href = "/";
		/*
    	if(document.referrer == "" || document.referrer == window.location.href || window.location.host=='www.play68.com'){
    		window.location.href = "/";
    	}
    	else {
    		window.location.href = document.referrer;
    	}
		*/
    });
	 //玩法获取
	 $("#s13").click(function (e) {
    	if( $(this).attr('moveing') ){
    		return;
    	}
	    var METHODS=$("#shuoming p");
		if (ISLOADING) return;
    	showLoading();
		if(METHODS.html()=='小编在拼命编写，客官请稍等~' || METHODS.html()!=''){
			hideLoading();
		}else{
    	 $.ajax({
    		url : '?r=play/getmethods/gameid/'+GAMEID,
    		dataType : 'json',
			type:'POST',
    		success : function(ret){
				hideLoading();
				if(ret.methods !=''){
				METHODS.html(ret.methods);
				}else{
				METHODS.html('小编在拼命编写，客官请稍等~');	
					}		
    		}
    	});
		}
    });
	
    // 重玩
    $("#s21").click(function(e){
		_czc.push(["_trackEvent","菜单按钮事件","重玩","菜单重玩点击","",""]);
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	window.location.href = window.location.href.replace(/#.*$/, '');
    });
    // 分享
    $("#s23").click(function(e){
		_czc.push(["_trackEvent","菜单按钮事件","菜单分享","菜单分享点击","",""]);
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	box_show_share();
    });
    //--------排行榜低调的分割线--------//


    // 排行榜
    $(".paix1_a_1 li img").click(function(e){
    	$(".xinpai").hide();
    });
    $("#s11").click(function(e){
		_czc.push(["_trackEvent","菜单按钮事件","菜单排行榜","菜单排行榜点击","",""]);
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	if(ISROOM){
    		showRoomranking();
    	}
    	else{
    		if (JIERIGAMEID == GAMEID) { //如果是当前游戏是节日游戏弹出节日排行榜
    			festivalgame();
                $("#meiri_kaishi").html("<img src='./resources/images/meiribisai/jieri_jixubisai.png' width='606' height='70' onclick='jieri_kaishibisai()'>");
    		}else if(IS_EVERYDAY_GAME > 0){
    			everyday_game();
    		}else {
    		    //showRanking();
    			//newShowRanking();
    			//newShowRanking2();
    			if (isWeixin()) {
    				horizontalMenuForFriend();
    			} else {
    				horizontalMenuForWorld();
    			}
				
    		} 

    	}


    	
    });
    window.showRoomranking = function(first, unshowloading){
    	if(!unshowloading) 
    		showLoading();
    	$(".xinpiax2").remove();
    	$.ajax({
    		url : "?r=play/room_ranking/roomid/"+ROOMID+"/first/"+first,
    		dataType : 'html',
    		success : function(html){
    			hideLoading();
    			$(document.body).prepend(html);
    		}
    	});
    }
    window.comRanking = function(data) {
    	$('.meiripaix3').remove();
		//$('#cover').after(data);
		$('.myxinxi4').remove();
		$('.myxinxi5').remove();
		$(".shequ2").remove();
		$(".shequ3").remove();
		$('.caidan .beijing').append(data);
		 $('.caidan').css('display','block');
		$('.beijing').addClass('beijing1');
	    $("#s0").css('display','none');
    }
    window.comRanking2 = function(data) {
    	$('.moban1_a').empty();
		$('#content').attr('class','meiripaix3');
		$('.moban1_a').append(data);
		var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
		left3 = w/2-$(".max_64").width()/2;
		$(".moban1_a_3").css("left",left3);
		$('.beijing').addClass('beijing1');
		
    }
    window.newShowRanking = function(flag) {
    	flag = flag || 0;
		if (ISLOADING) return;
    	showLoading();
		var leixing = 2;
		leixing = isWeixin() == true ? 1 : leixing;//微信默认显示好友排行，否则显示全球排行
		$.ajax({
			url: '/index.php?r=play/HtmlRanking',
			type:'POST',
			data: {gameid:GAMEID,leixing:leixing,flag:0},
			success: function(data) {
				hideLoading();
				comRanking(data);
				 
			},
    		complete: function() {
       			hideLoading();
       		}
		  });
    }
    $('#s0').css('z-index','9');
//    $('.moban1').css('visibility','hidden');
//    $('.beijing').css('visibility','hidden');
    $(document).on('click','.moban1_a,.moban1_a_2,.moban1_a_1,.null,.moban1,.contentb,.contenta,.moban1_a_1,.hding,.caidan,.moban1_a_3,.content3,.content1',function(event){
    	 event.stopPropagation();
    }); 

 
    window.ISLOADING = false;
//    $(document).off('click','.moban1');
//    $(document).on('click','.moban1',function(event){
//    	if (ISLOADING) return;
//    	event.stopPropagation();
//    	closeRanking(1);
//    });
    $(document).off('click','.max_64');
    $(document).on('click','.max_64',function(event){
    	if (ISLOADING) return;
    	event.stopPropagation();
    	closeRanking(1);
    });
    $(document).off('click','.guanbianniu');
    $(document).on('click','.guanbianniu',function(event){
    	if (ISLOADING) return;
    	event.stopPropagation();
    	closeRanking(1);
    });
    $(document).off('click','.beijing');
    $(document).on('click','.beijing',function(event){
    	if (ISLOADING) return;
    	event.stopPropagation();
    	closeRanking(1);
    });
    
    var toggle = false;
    var end = false;
    var showRankingEndTime = 0;
    window.newShowRanking2 = function(flag) {
		_czc.push(["_trackEvent","","排行榜弹出（打开）",GAMENAME,"",""]);
    	showRankingEndTime = (new Date).getTime();
    	flag = flag || 0;
    	toggle = toggle || 0;
    	if (flag || toggle) {
			if (ISLOADING) return;
        	showLoading();
    		var leixing = 2;
    		leixing = isWeixin() == true ? 1 : leixing;//微信默认显示好友排行，否则显示全球排行
    		$.ajax({
    			url: '/index.php?r=play/HtmlRanking',
    			type:'POST',
    			data: {gameid:GAMEID,leixing:leixing,flag:leixing},
    			success: function(data) {
    				hideLoading();
	   				$('.moban1_a').empty();
					$('#content').attr('class','meiripaix3');
					$('.moban1_a').append(data);
					openRanking();
    			},
        		complete: function() {
           			hideLoading();
           		}
    		  });
    		
    	} else {
    		openRanking();
    		toggle = true;
    	}
    }
    window.newShowRanking3 = function() {
		_czc.push(["_trackEvent","","排行榜弹出（打开）",GAMENAME,"",""]);
		if (ISLOADING) return;
    	showLoading();
		var leixing = 2;
		leixing = isWeixin() == true ? 1 : leixing;//微信默认显示好友排行，否则显示全球排行
		$.ajax({
			url: '/index.php?r=play/HtmlRanking',
			type:'POST',
			data: {gameid:GAMEID,leixing:leixing,flag:0},
			success: function(data) {
				hideLoading();
   				$('.moban1_a').empty();
				$('#content').attr('class','meiripaix3');
				$('.moban1_a').append(data);
				var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
				left3 = w/2-$(".max_64").width()/2;
				$(".moban1_a_3").css("left",left3);
   				$('.beijing').addClass('beijing1');
				 
			},
    		complete: function() {
       			hideLoading();
       		}
		  });
    }
    window.goHome = function() {
    	window.location.href="/?r=Index/index";
    }
    window.closeRanking = function(flag) {
    	return;
    	if( (new Date).getTime() - showRankingEndTime < 500) {
			return;
		}
    	var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
		var clientH = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
		max_64 = $(".max_64").width();
	    left2 = max_64;
	    $(".max_64").animate({ 
			'left': -left2+'px'
		}, 300 ); 
		$(".moban1_a_3").animate({ 
			'left':-left2+'px'
		}, 300 );
		$(".moban1_a_3").css("left",-left2);
		setTimeout(function(){
		$('#s0').css('visibility','visible');
		$('#content').attr('class','meiripaix3');
		$('.beijing').removeClass('beijing1').css('visibility','hidden');
		//$('.moban1').css('visibility','hidden');
		
		},300);
		flag = flag || 0;
		toggle = flag ? true : toggle;
		end = false;
    }
    window.openRanking = function() {
 		return;
    	$('#content').attr('class','meiripaix3');
 		$('.beijing').css('visibility','visible');
 		$('.caidan').css('width','100%');
 		$(".max_64").css("left",-left2);
 		$(".moban1_a_3").css("left",-left2);

 		$(".max_64").animate({ 
 			'left':left1+'px'
 	    }, 300 );
 		$(".moban1_a_3").animate({
 			 'left':left1+'px'
 		},300 );
 		$('#s0').css('visibility','hidden');
 		$('.beijing').addClass('beijing1');
 		end = true;

    }
    window.showCommentList = function() {
		if (ISLOADING) return;
	 	showLoading();
   		$.ajax({
   			url: '/index.php?r=play/GetCommentList',
   			type:'POST',
   			data: {},
   			success: function(data) {
   				hideLoading();
   				$(".shequ2").remove();
//   				$('#cover').after(data);
   				$(".beijing").append(data);
   				$('.beijing').addClass('beijing1');
   				$(".meiripaix3").remove();
   				$(".myxinxi4").remove();
   				$(".myxinxi5").remove();
   				$(".shequ3").remove();
   			 },
   			complete: function() {
   				hideLoading();
   			}
   		  });
  }
    window.showCommentList2 = function() {
        if (ISLOADING) return;
	 	showLoading();
   		$.ajax({
   			url: '/index.php?r=play/GetCommentList',
   			type:'POST',
   			data: {},
   			success: function(data) {
   				hideLoading();
   				$('.moban1_a').empty();

				$('#content').attr('class','shequ2');
				
				$('.moban1_a').append(data);
				
				 var w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
				left3=w/2-$(".max_64").width()/2;
				
				$(".moban1_a_3").css("left",left3);
   				$('.beijing').addClass('beijing1');
   				
   			 },
   			complete: function() {
   				hideLoading();
   			}
   		  });
  }
	   
	  window.showMessageList = function() {
		  if (ISLOADING) return;
		 	showLoading();
	   		$.ajax({
	   			url: '/index.php?r=Mymessage/MessageList',
	   			type:'POST',
	   			data: {},
	   			success: function(data) {
	   				hideLoading();
	   				$(".myxinxi4").remove();
	   				$(".myxinxi5").remove();
	   				//$('#cover').after(data);
	   				$(".meiripaix3").remove();
	   				$(".beijing").append(data);
	   				$('.beijing').addClass('beijing1');
	   				$(".shequ2").remove();
	   				$(".shequ3").remove();
	   			 },
	    		complete: function() {
	       				hideLoading();
	       		}
	   		  });
	  }
	  window.showMessageList2 = function() {
		    if (ISLOADING) return;
		 	showLoading();
	   		$.ajax({
	   			url: '/index.php?r=Mymessage/MessageList',
	   			type:'POST',
	   			data: {},
	   			success: function(data) {
	   				hideLoading();
	   				$('.moban1_a').empty();
					$('#content').attr('class','myxinxi4');
					$('.moban1_a').append(data);
					 var w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
					left3=w/2-$(".max_64").width()/2;
					$(".moban1_a_3").css("left",left3);
	   				$('.beijing').addClass('beijing1');
	   			 },
	    		complete: function() {
	       				hideLoading();
	       		}
	   		  });
	  }
    // 做出全局的调用函数
    window.showRanking2 = function (){   //点击排行榜按钮弹出
    	var m=1;  //1为好友，2为全球
    	 if(isWeixin() == false){
	      $(".yaoqing").css("display","none");
	      $(".header1").css("padding-top","1%")	;
	     $(".xinpai .guanbi").css("top","5%");
	      m=2;
	      $("#zh_pai").removeClass("anniu_bg");
	      $("#zong_pai").addClass("anniu_bg");
	      }
		if (ISLOADING) return;
    	showLoading();
    	$.ajax({
    		url : "?r=play/ranking/gameid/"+GAMEID+"/leixing/"+m,
    		dataType : 'json',
    		success : function(data){
    			if(data==0){
    				$(".xinpai").show();
    			    $("#zhoupai").html("");
    	            $("#zongpai").html("");
    				hideLoading();
    				return;
    			}
    			hideLoading();
    			showRankingData(data);
    		}
    	});
    }
    if(IS_FROM_SHARE == 1){
    	
//    	showRanking();
    	//newShowRanking();
    }
    var tmpContent = $("#contentTmp").html();
    function showRankingData(data){
    	 $(".xinpai").show();
    	 paihangbang_data(data,1);
    }

//    $("#zh_pai").click(function(){
//    _czc.push(["_trackEvent","按钮事件","排行榜","好友排行","",""]);
//
//    getfriendrankingdata();
//  });
     $(document).off('click','#horizontalMenu #zh_pai');
      $(document).on('click','#horizontalMenu #zh_pai',function(event){
     	 $(this).addClass("anniu_bg").siblings('li').removeClass("anniu_bg");
       
//         getNewFriendRanking();
          //getfriendrankingdata();
          event.stopPropagation();
         //getNewFriendRanking2();
          //横屏菜单
          horizontalMenuForFriend();
        });
     window.getNewFriendRanking = function() {
        
    	$('.meiripaix3').css('display','block');
		if (ISLOADING) return;
    	showLoading();
 		$.ajax({
 			url: '/index.php?r=play/HtmlRanking',
 			type:'POST',
 			data: {gameid:GAMEID,leixing:1,flag:1},
 			success: function(data) {
 				hideLoading();
 				$('.meiripaix3 .paix1_a_2,.meiripaix3 .paix1_a_3').remove();
  				$('.meiripaix3 .paix1_a_1').after(data);
 			},
   			complete: function() {
   				hideLoading();
   			}
 		  });
     }
     window.getNewFriendRanking2 = function() {
         if (ISLOADING) return;
         showLoading();
 		$.ajax({
 			url: '/index.php?r=play/HtmlRanking',
 			type:'POST',
 			data: {gameid:GAMEID,leixing:1,flag:1},
 			success: function(data) {
 				hideLoading();
    			$('.moban1_a').empty();
 				$('#content').attr('class','meiripaix3');
 				$('.moban1_a').append(data);
 				var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
 				left3 = w/2-$(".max_64").width()/2;
 				$(".moban1_a_3").css("left",left3);
    				$('.beijing').addClass('beijing1');
 				 
 			},
     		complete: function() {
        			hideLoading();
        		}
 		  });
     }
     window.getNewWorldRanking = function() {
    	$('.meiripaix3').css('display','block');
		if (ISLOADING) return;
     	showLoading();
  		$.ajax({
  			url: '/index.php?r=play/HtmlRanking',
  			type:'POST',
  			data: {gameid:GAMEID,leixing:2,flag:1},
  			success: function(data) {
  				hideLoading();
  				$('.meiripaix3 .paix1_a_2,.meiripaix3 .paix1_a_3').remove();
  				$('.meiripaix3 .paix1_a_1').after(data);
  			},
   			complete: function() {
   				hideLoading();
   			}
  		  });
      }
     window.getNewWorldRanking2 = function() {
		 if (ISLOADING) return;
    	 showLoading();
  		$.ajax({
  			url: '/index.php?r=play/HtmlRanking',
  			type:'POST',
  			data: {gameid:GAMEID,leixing:2,flag:1},
  			success: function(data) {
  				hideLoading();
     			$('.moban1_a').empty();
  				$('#content').attr('class','meiripaix3');
  				$('.moban1_a').append(data);
  				var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
  				left3 = w/2-$(".max_64").width()/2;
  				$(".moban1_a_3").css("left",left3);
     				$('.beijing').addClass('beijing1');
  				 
  			},
      		complete: function() {
         			hideLoading();
         		}
  		  });
       }

     //获取好友排行榜
    function getfriendrankingdata(){
     $("#zhoupai").css("display","block");
     $("#zongpai").css("display","none");
     $("#zong_pai").removeClass("anniu_bg");
	 $("#zh_pai").addClass("anniu_bg");
     $("#pai_3").html("");
     $.ajax({
    		url : "?r=play/ranking/gameid/"+GAMEID+"/leixing/1",
    		dataType : 'json',
    		success : function(data){
    			if(data==0){
    				$(".xinpai").show();
    			    $("#zhoupai").html("");
    	            $("#zongpai").html("");
    				hideLoading();
    				return;
    			}
    			hideLoading();
    			paihangbang_data(data,1);
				$('.before_100_show').css('display','none');
    		}
     });
     }

//   	$("#zong_pai").click(function(){
//    	getworldranking();
//   	});
    $(document).off('click','#horizontalMenu #zong_pai');
    $(document).on('click','#horizontalMenu #zong_pai',function(event){
    	$(this).addClass("anniu_bg").siblings('li').removeClass("anniu_bg");
//   		getNewWorldRanking();
    	//getworldranking();
    	event.stopPropagation();
    	//getNewWorldRanking2();
    	//横屏菜单
    	horizontalMenuForWorld();
   	});
   	var ranking_cat=1; //弹排行榜的类型，1为好友排行榜，2为全球排行榜
	window.zongRanking = function(myFriendRankingUp){
		
		myFriendRankingUp = myFriendRankingUp || false;
		if(IS_EVERYDAY_GAME > 0){
		 	everyday_game();
		 	return;
		 }

		if(myFriendRankingUp){
			
			if (IS_FROM_SHARE && isWeixin() && USERID != FRIEND  && isNetGame != 1) {
				challengeSuccess();
				return;
			}
			zongRanking1();
		}
		 
		else {
		
			//zongRanking2();
			//gameOverShowRanking();
		if (IS_FROM_SHARE == 1 && isWeixin() && USERID != FRIEND  && isNetGame != 1) {
				
				challengeSuccess();
				return;
			}

			gameOverShowRanking2();
		}
	}

	function zongRanking1(){
		$.ajax({
    		url : "?r=play/friendup",
    		data : {gameid:GAMEID, ranking:MY_FRIEND_RANKING},
    		type : "POST",
    		//dataType : 'html',
    		//async:false,
    		success : function(data){
    			if(data=="showRanking"){
//    				zongRanking2();
    				//gameOverShowRanking();
    			
    				gameOverShowRanking2();
    			}
    			else {
    				$(data).appendTo(document.body);
					gameOverShowRanking2();
    			}
    		}
    	});
	}

	function zongRanking2(){    //玩完弹
        
	    if(isWeixin() == false){
	      $(".yaoqing").css("display","none");
	      $(".header1").css("padding-top","1%")	;
	      $(".guanbi").css("top","5%")	;
	      }

		showLoading();
		var userid=USERID || 0;
		var ranking_data=null;
		var is_update=0; //记录名次是否提升
		var c=0;

	     $.ajax({
    		url : "?r=play/ranking/gameid/"+GAMEID+"/leixing/2",
    		dataType : 'json',
    		async:false,
    		success : function(data){
    			if(data==0){
    				$(".xinpai").show();
    			    $("#zhoupai").html("");
    	            $("#zongpai").html("");
    				hideLoading();
    				return;
    			}
    			ranking_data=data;
    		  
    			for(var i=0;i<ranking_data.length;i++){
    				if(ranking_data[i].userid == userid && i<10){
    					
    					c=1;
    					break;
    				}
    			}
    		}
	    });

	    // alert(ranking_data);
	    if(c==1 || isWeixin()==false){   //当在世界排行前十时
	    	
	    	$(".xinpai").show();
			$("#zhoupai").css("display","none");
	    	$("#zongpai").css("display","block");
	    	$("#zong_pai").addClass("anniu_bg");
	    	$("#zh_pai").removeClass("anniu_bg");
	    	$("#pai_3").html("");
	    	hideLoading();
	    	paihangbang_data(ranking_data,2);
	    }else if(c==0){
	    	//is_friend_rank=1;
	    	//yaoqing_friend="我的";
	    	
	    	$(".xinpai").show();
	    	getfriendrankingdata();
	    }

		
	}
	//新的游戏结束后弹出排行榜
	function gameOverShowRanking() {
      
		var userid=USERID || 0;
		var ranking_data=null;
		var tenthFormer = 0;//是否前十名
		if(IS_EVERYDAY_GAME > 0){
		 	everyday_game();
		 	return;
		 }
		
		showLoading();
		var leixing = 2;
		$.ajax({
			url: '/index.php?r=play/HtmlRanking',
			type:'POST',
			dataType : 'json',
			data: {gameid:GAMEID,leixing:leixing,flag:0,json:1},
			success: function(res) {
				var ranking_data = res.ranking;
				for(var i=0;i<ranking_data.length;i++) {
    				if(ranking_data[i].userid == userid && i<10){
    					tenthFormer	= 1;
    					break;
    				}
    			}
				 if (tenthFormer == 1 || isWeixin() == false){   //当在世界排行前十时
					 $.ajax({
		    			url: '/index.php?r=play/HtmlRanking',
		    			type:'POST',
		    			data: {gameid:GAMEID,leixing:2,flag:0},
		    			success: function(data) {
//		    				hideLoading();
//		    				$('#cover').after(data);
		    				comRanking(data);
		    			 },
		    			 complete: function() {
		    	       			hideLoading();
		    	       		}
			    	});
				   } else if (tenthFormer == 0){
					   $.ajax({
			    			url: '/index.php?r=play/HtmlRanking',
			    			type:'POST',
			    			data: {gameid:GAMEID,leixing:1,flag:0},
			    			success: function(data) {
//			    				hideLoading();
//			    				$('#cover').after(data);
			    				comRanking(data);
			    			 },
			    			 complete: function() {
			    	       			hideLoading();
			    	       		}
				    	});
				   }
			 }
		  });
	}
	function gameOverShowRanking2() {
		if(window.banner_show){//如果有下载banner不弹排行榜
		   return;
		}
       _czc.push(['_trackEvent','土豆菜单弹出数','弹出菜单','','','']);
		var userid=USERID || 0;
		var ranking_data=null;
		var tenthFormer = 0;//是否前十名
		if(IS_EVERYDAY_GAME > 0){
		 	everyday_game();
		 	return;
		 }
		//横屏菜单
		horizontalMenuForWorld();
		return;
		showLoading();
		var leixing = 2;
		$.ajax({
			url: '/index.php?r=play/HtmlRanking',
			type:'POST',
			dataType : 'json',
			data: {gameid:GAMEID,leixing:leixing,flag:0,json:1},
			success: function(res) {
				var ranking_data = res.ranking;
				for(var i=0;i<ranking_data.length;i++) {
    				if(ranking_data[i].userid == userid && i<10){
    					tenthFormer	= 1;
    					break;
    				}
    			}
				 if (tenthFormer == 1 || isWeixin() == false){   //当在世界排行前十时
					 $.ajax({
		    			url: '/index.php?r=play/HtmlRanking',
		    			type:'POST',
		    			data: {gameid:GAMEID,leixing:2,flag:0},
		    			success: function(data) {
		    				hideLoading();
			   				$('.moban1_a').empty();
							$('#content').attr('class','meiripaix3');
							$('.moban1_a').append(data);
							openRanking();
		    			 },
		    			 complete: function() {
		    	       			hideLoading();
		    	       		}
			    	});
				   } else if (tenthFormer == 0){
					   $.ajax({
			    			url: '/index.php?r=play/HtmlRanking',
			    			type:'POST',
			    			data: {gameid:GAMEID,leixing:1,flag:0},
			    			success: function(data) {
			    				hideLoading();
				   				$('.moban1_a').empty();
								$('#content').attr('class','meiripaix3');
								$('.moban1_a').append(data);
								openRanking();
			    			 },
			    			 complete: function() {
			    	       			hideLoading();
			    	       		}
				    	});
				   }
			 }
		  });
	}

//在排行榜层上点击世界排行时
function getworldranking(){
	
	$(".xinpai").show();
		$("#zhoupai").css("display","none");
	    $("#zongpai").css("display","block");
	    $("#zong_pai").addClass("anniu_bg");
	    $("#zh_pai").removeClass("anniu_bg");
	    $("#pai_3").html("");
		if (ISLOADING) return;
	    showLoading();
	    $.ajax({
    		url : "?r=play/ranking/gameid/"+GAMEID+"/leixing/2",
    		dataType : 'json',
    		success : function(data){
    			if(data==0){
    				$(".xinpai").show();
    				$("#zhoupai").html("");
    	            $("#zongpai").html("");
    				hideLoading();
    				return;
    			}
    			hideLoading();
    			paihangbang_data(data,2);
    		}
	    });
}




var myplace=0;   //自己在好友排行榜的名次
var myscore='0';  //自己的分数 
var mynickname='';
//排行榜排名数据
function paihangbang_data(data,n){
    window.is_myinfo=1; //控制排行榜个人信息是否弹出
	var userid=USERID || 0;
	var str_pai="";
    var m=0;
    if(data == null){
    	var data_length=0;
    }else{
    var data_length=data.length;
    }
    //当好友排行榜没有数据时
    if(data_length == 0){
    	var arr=new Array();
    	var newinfo=new Object();
    	newinfo.userid=userid;

    	//查出会员信息与排行榜数据格式
    	$.ajax({
    		url : "?r=ranking/getuserinfo/gameid/"+GAMEID,
    	
    		async:false,
    		success : function(msg){
    			msg=$.parseJSON(msg);
    			newinfo.score=msg.unit;
    			newinfo.nickname=msg.nickname;
    			newinfo.gameid=GAMEID;
    			newinfo.headimg=msg.headimg;
    			
    			arr[0]=newinfo;
    			data=arr;
    			window.is_myinfo=0;
    			data_length=1;
    		}
    	});
    	
    	
    }
   
    if(data.length > 100){
    	data_length=100;
    }
	for(var i=0;i<data_length;i++){
		if(data[i].userid == userid){
			mynickname=data[i].nickname;
			
				
				//alert(myscore);
				if(n==1){
					myscore=data[i].score;
					myplace=i+1;
				}
		}
		


	str_pai+="<div class='content1'  onclick=getuserplaceinfo("+data[i].gameid+","+data[i].userid+")>";
    
    if(i==0){
    str_pai+="<div class='content1_a  '>";                                                                                                         
    str_pai+="<img src='./resources/images/paix/bg_jinhuizhang.png' width='56' height='88'>";
    }else if(i==1){
    str_pai+="<div class='content1_a  '>";
    str_pai+="<img src='./resources/images/paix/bg_yinhuizhang.png' width='56' height='88'>";	
    }else if(i==2){
    str_pai+="<div class='content1_a  '>";
    str_pai+="<img src='./resources/images/paix/bg_tonghuizhang.png' width='56' height='88'>";	
    }else{
    str_pai+="<div class='content1_a  shuzi'>";	
    m=i+1;
    str_pai+=m;	
    }                                                                                                             
    str_pai+="</div>";                                                                                                         
    str_pai+="<div class='content1_b'>";
    if(data[i].headimg != null && data[i].headimg != ''){
		if(!/^http|^[/]/i.test(data[i].headimg)){
			data[i].headimg=data[i].headimg.replace(/^/,'/');
		}
    	str_pai+="<li><img src='"+data[i].headimg+"' width='92' height='92'></li>";
    }else{                                                                                                         
    str_pai+="<li><img src='./resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";
    }                                                                                                             
    str_pai+="<div class='content1_b_1'>";
   // var current = data[i].sex == 0 ? 'huise'  : (data[i].sex == 1 ? 'blue' : 'red');
	var span = '';
	if (data[i].sex == 1) {
		span = '<span><img src="./resources/images/xinpaix2/man.png"></span>';
	} else if (data[i].sex == 2) {
		span = '<span><img src="./resources/images/xinpaix2/woman.png"></span>';
	}
    if(data[i].nickname != null && data[i].nickname != ''){              
    	//排行名称截取字符串
	  if(getBytesCount(data[i].nickname)>12){data[i].nickname= data[i].nickname.substr(0,9)+'...';}                                                                                 
	  str_pai+="<p class='mingc'>"+data[i].nickname+"</p>";
    }else{
    str_pai+="<p class='mingc'>68微游戏玩家"+"</p>";	
    }                                                                                                                 
    str_pai+="<p class='guangshu'>"+data[i].score+"</p>";                                                                                                                   
    str_pai+="</div>"; 
	if(userid>0){
		if(data[i].duang ==0){
	     str_pai+="<div class='content1_c' id='duang"+data[i].userid+"'  onclick='setduang("+data[i].gameid+","+data[i].userid+");stopBubble(event);'>";
		 str_pai+="<img src='./resources/images/meiribisai/duang.png'></div>";   
	    }else if(data[i].duang ==1){
		 str_pai+="<div class='content1_c' id='duang"+data[i].userid+"'  onclick='setduang("+data[i].gameid+","+data[i].userid+");stopBubble(event);'>";
		 str_pai+="<img src='./resources/images/meiribisai/duang1.png'></div>";  
		}
	}
    str_pai+="<p class='clear'></p>";                                                                                                              
    str_pai+="</div>";                                                                                                          
    str_pai+="<p class='clear'></p>";                                                                                                          
    str_pai+="</div>";
    
	}
	if(i>99){
		str_pai+="<div class='before_100_show' style='padding-top:5%; width:90%; margin:auto; color:#d86c12;text-align:center;'>目前只显示前100名玩家哦，想让大家看到你，要努力上榜啊</div></div>";
		if(n==1 && isWeixin()==true){
			setTimeout(function(){
			$('.before_100_show').css('display','none');
			},2000);
		}
	}
	if(n==1 && isWeixin()==true){
	str_pai+="<div class='tianjiahaoyou' onclick='tjhy()'>";
    str_pai+="<div class='tianjiahaoyou1' id='tjhy'>";
    str_pai+="<img src='./resources/images/paix/tianjiahaoyou.png' width='175' height='32' >";
    str_pai+="</div>";
    str_pai+="</div>";
    str_pai+="<div class='haoyou'>注：朋友点击你分享的游戏就会成为好友~</div>";
		setTimeout(function(){
		$('.before_100_show').css('display','none');
		},2000);
	}
	
	
	
   /*
	 if(preST==""){
	 	preST = SHARE_TITLE;
	 }
	// if(mynickname == ''){
		 //SHARE_TITLE = "我邀请你来【"+GAMENAME+"】一起玩~";
		//SHARE_TITLE = "我邀请你来【游戏名称】挑战她的成绩:"+myscore+","+myplace;
	// }else{
	 	// SHARE_TITLE = mynickname+"邀请你来【"+GAMENAME+"】一起玩~";
	 	var ss=myscore.substring(0,1);
	 	ss=parseInt(ss);
	 	if(userid != 0 && myplace > 0 && ss != 0){
            
	 		SHARE_TITLE = mynickname+"邀请你来【"+GAMENAME+"】挑战她的成绩:"+myscore;
	 	}else if(userid != 0 && ss == 0){
	 		if(mynickname==''){
	 			mynickname='我';
	 		}
	 		SHARE_TITLE = mynickname+"邀请你来【"+GAMENAME+"】一起玩~";
	 	}else if(userid == 0){
	 		SHARE_TITLE = "我邀请你来【"+GAMENAME+"】一起玩~";
	 	}
	 //}
	 */
	var ss=myscore.substring(0,1);
	ss=parseInt(ss);
	if(mynickname != '' && ss != 0){ 
		re_nickname(mynickname);
	}else{
		re_nickname();
	}
	re_score(myscore);
	re_gameShareState();
	   			 $(".guanbi img").click(function(){
		  			 
		   			
		   				SHARE_TITLE = re_nickname_score.preST;
		   			
		   		}); 
	            
	if(n==1){
    	$("#zhoupai").html(str_pai);
        getmypaiming(data,1);
       
    }else{
                          
    	$("#zongpai").html(str_pai);
    	getmypaiming(data,2);
    }
	
}



//如果登录获取自己的排名
function getmypaiming(data,n){
        
var userid=USERID || 0; 

        for(var y=0;y<data.length;y++){
            
        	if(data[y].userid==userid && window.is_myinfo==1){
               
               	var s = y + 1;
        		s = s >= 100 ? ">100" : s;
        		var str_pai_2="";
        	    str_pai_2+="<div class='content1' onclick=getuserplaceinfo("+data[y].gameid+","+data[y].userid+")>";
                str_pai_2+="<div class='content1_a shuzi'>";                                                 
                str_pai_2+=s;                                                          
                str_pai_2+="</div>";                                                                
                str_pai_2+="<div class='content1_b'>";
                if(data[y].headimg != null && data[y].headimg != ''){
					if(!/^http|^[/]/i.test(data[y].headimg)){
					data[y].headimg=data[y].headimg.replace(/^/,'/');
			      	}
                str_pai_2+="<li><img src='"+data[y].headimg+"' width='92' height='92'></li>";
                }else{                                                           
                str_pai_2+="<li><img src='./resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";
                }                                                          
                str_pai_2+="<div class='content1_b_1'>";
                if(data[y].nickname != null && data[y].nickname != ''){
				//排行名称截取字符串
	             if(getBytesCount(data[y].nickname)>18){data[y].nickname= data[y].nickname.substr(0,9)+'...';} 	                                   
                str_pai_2+="<p class='mingc'>"+data[y].nickname+"</p>";
                }else{
                str_pai_2+="<p class='mingc'>68微游戏玩家</p>";	
                }                                                                 
                str_pai_2+="<p class='guangshu'>"+data[y].score+"</p>";                                                                       
                str_pai_2+="</div>";                                                                      
                str_pai_2+="<p class='clear'></p>";                                                            
                str_pai_2+="</div>";                                                                  
                str_pai_2+="<p class='clear'></p>";                                                          
                str_pai_2+="</div>";                
                str_pai_2+="<div class='content2' id='content_2'>";
                str_pai_2+="<div class='content2_a'>";
                str_pai_2+="<img src='./resources/images/paix/gengduoyouxi.png' width='312' height='66' onclick='javascript:more_games();'></div>";
                str_pai_2+="<div class='content2_b'>";
                str_pai_2+="<img src='./resources/images/paix/jixutiaozhan.png' width='312' height='66' onclick='jixutiaozhan()'></div>";
                str_pai_2+="<p class='clear'></p></div>";
                                                                        
                $("#pai_3").html(str_pai_2);
               /*
	   			 window.preST = SHARE_TITLE;
	   			 
	   			 SHARE_TITLE = data[y].nickname+"邀请你来【"+GAMENAME+"】一起玩~";
	   			 $(".guanbi").click(function(){
		  			 
		   			if(window.preST){
		   				SHARE_TITLE = window.preST;
		   			}
		   		});
		   		 */                                                                     
                return;   

           	}else{
           		/*
           		 window.preST = SHARE_TITLE;
	   			 //SAHRE_TITLE = "我在"+GAMENAME+"拿到"+data[y].score+",快和我一起玩吧~";
	   			 SHARE_TITLE = "我邀请你来【"+GAMENAME+"】一起玩~";
	   			 $(".guanbi").click(function(){
		  			 
		   			if(window.preST){
		   				SHARE_TITLE = window.preST;

		   			}
		   		});                                                                        
                return;
               */
                
           	}
        }                    
}

    //--------评论低调的分割线--------//
    // 评论
	$( function(){

	 
      $("#input_text").focus(function(){
		  if($('#input_id').attr('value') =='0'){
                if($(this).val()=="点击评论")
                {
                    $(this).val("");
                }
				if($(this).val()!="")
                {
                  
                }else{
					$(this).attr('placeholder','点击评论');
				}
		  }
       }).blur(function(){
			 if($('#input_id').attr('value') =='0'){
	       
				    if($(this).val()=="")
					{
						$(this).val("点击评论");
					}else{
						
				    }			
			 }
       });
	   
	})
    $("#s22").click(function (e) {
		_czc.push(["_trackEvent","菜单按钮事件","菜单评论","菜单评论点击","",""]);
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	showLoading();
        getComent();
    });
   function getComent(){
       var reply_id=$("#input_id").val(); 
	   var sta=0;
	   $.ajax({
    		url : '/?r=play/getcomment/gameid/'+GAMEID+'/reply_id/'+reply_id,
    		dataType : 'json',
    		success : function(data){
				
    			hideLoading();
				$(".xpinglu").css('display','block');
    			showComment(data);
    			getReply();
    		}
    	});
	   
	   function getReply(){
		$.ajax({
    		url : '/?r=play/getcomment_2/gameid/'+GAMEID+'/reply_id/'+reply_id+'/sta/'+sta,
    		dataType : 'json',
    		success : function(data){
				
    			hideLoading();
				$(".xpinglu").css('display','block');
    			showComment_2(data,0);
    		}
    	});
		}
		
	}
     $(".content2_a_4").live("click",function(){
		 var reply_id=$(this).attr('moreid');
		 var M_ID='.M_'+reply_id+' img';
		 var M_ID_STA=$(M_ID).attr('sta'); 
		 if(M_ID_STA ==0){
			var RR_CLASS='.RR_'+reply_id+':gt(1)';	
			$(RR_CLASS).remove();
			var RR_CLASS_LAST='.RR_'+reply_id+' .content2_a_4:last';	
			$(RR_CLASS_LAST).css('display','block');
			
    	   $(M_ID).attr({'sta':'1','src':'./resources/images/xpinglu/10.png'});
		}
		
		if($(M_ID).attr('opened') == 'opened'){
			$(M_ID).removeAttr('opened');
		}
		else {
			 var self = this;
			 var sta=$(".content2_a_4 img").attr('sta');
			 $.ajax({
				url : '/?r=play/getcomment_2/gameid/'+GAMEID+'/reply_id/'+reply_id+'/sta/'+sta,
				dataType : 'json',
				success : function(data){
					$(".content2_1").remove();
					hideLoading();
					$(".xpinglu").css('display','block');
					showComment_2(data,reply_id);
									
					$(M_ID).attr('opened','opened');
					var RR_CLASS='.RR_'+reply_id;
					
					if($(RR_CLASS).size() <= 2){
				      msgBoxShow('没有更多回复');
		         	  $(M_ID).removeAttr('opened');
			        }else{
			          $(M_ID).attr({'sta':'0','src':'./resources/images/xpinglu/11.png'});
			        }
				}
			});
		}
	   
	 });
    var tmpComment = $(".xpinglu1_a_2_1").html();
	
    function showComment(data) {
    	var pingluCon = $(".xpinglu1_a_2_1 ");
    	$(".xpinglu1_a_2_1 div").remove();
    	for (var i in data) {
    		var obj = data[i];
	
    		var name = obj.nickname == "" ? "匿名玩家" : obj.nickname;
            //评论名称截取字符串
			if(getBytesCount(name)>14){name= name.substr(0,7)+'...';}
    		var head = !!obj.headimg ? obj.headimg : "./resources/images/user_head/bg_touxiang.png";
			if(!/^http|^[/]/i.test(head)){ 
			head=head.replace(/^/,'/');
			 }
    		var str = tmpComment.replace('rep_src','src')
    					.replace('{{HEAD}}', head)
						.replace('{{RID}}', obj.id)
						.replace('{{ZAN_ID}}', obj.id)
						.replace('{{CAI_ID}}', obj.id)
						.replace('{{ZAN_NUM}}', obj.id)
						.replace('{{CAI_NUM}}', obj.id)
						.replace('{{Z_NUM}}', obj.id)
						.replace('{{C_NUM}}', obj.id)
						.replace('{{C_CLASS}}', obj.id)
						.replace('{{CC_CLASS}}', obj.id)
    					.replace('{{NAME}}', name)
						.replace('{{RE_NAME}}', name)
    					.replace('{{TIME}}', obj.time)
    					.replace('{{CONTENT}}', obj.comment)
						.replace('{{praise}}', obj.praise)
						.replace('{{unpraise}}', obj.unpraise);
    		$(str).appendTo(pingluCon);
			
    	}
    	$(".xpinglu").show();
    }
	var tmpComment_2 = $(".content2").html();
	 function showComment_2(data,id) {
		 var ID=id;
		 var pingluCon_2;
		 var retimer=[];
		 $(".content2 div").remove();
		 for (var y in data) {
			 var obj = data[y];
			 var reply_id=obj.reply_id;
			  
			 if(retimer[reply_id] && retimer[reply_id]==2) {
				 if(ID ==reply_id ){
					
		
				}else{
			 	  continue;
				}
			 }
			 else {
				retimer[reply_id] = typeof retimer[reply_id] == 'undefined' ? 1 : retimer[reply_id] + 1;

			}	
    		
    		var name = obj.nickname == "" ? "匿名玩家" : obj.nickname;
            //评论名称截取字符串
			if(getBytesCount(name)>14){name= name.substr(0,7)+'...';}
    		var head = obj.headimg == "" ? "./resources/images/user_head/bg_touxiang.png" : obj.headimg;
			if(!/^http|^[/]/i.test(head)){ 
			head=head.replace(/^/,'/');
			 }
		   		var str = tmpComment_2.replace('rep_src','src')
    					.replace('{{HEAD}}', head)
						.replace('{{R_ID}}', obj.id)
						.replace('{{MORE_ID}}', obj.reply_id)
						.replace('{{MOREID}}', obj.reply_id)
						.replace('{{RRID}}', obj.reply_id)
						.replace('{{R_NAME}}',  name)
						.replace('{{R_TIME}}', obj.time)
						.replace('{{R_COMMENT}}', obj.comment);
					var R_NUM='.CCC_'+obj.reply_id;		
					var RR_CLASS='.RR_'+obj.reply_id;	
                   
				$(RR_CLASS).css({'background':'#e8e7e6'});
				var RR_REMOVE=RR_CLASS+' .content2_a_4';
				$(RR_REMOVE).css({'display':'none'});

				pingluCon_2=$(R_NUM);
    		    $(str).appendTo(pingluCon_2);
			
			
    	}
    	
    }
		 
	
	// 提示框
	var msgBox = null;
	function msgBoxShow(msg){
		if(msgBox == null){
			msgBox = $("<div class='flow_box'>"+msg+"</div>")
						.appendTo($(document.body))
						.show();
    	}
    	else {
    		msgBox.html(msg).show();
    	}
		setTimeout(function(){
			msgBox.hide();
		}, 1000);
	}
	//赞、踩
	$(".zan_img").live("click", function(){
		 
		var zan_id=$(this).attr('zan_id');
			
		if($(this).attr('is_zan') =='true'){
			msgBoxShow('你已经赞过');
			return false;
	    }else{
		    
		}
		$.ajax({
				url : '/?r=play/Zan',
				data : {zan_id:zan_id},
				type : 'POST',
				dataType : '',
				success : function(ret){
					if(ret =='ok'){
						var Z_NUM='.Z_'+zan_id;
						var zan_num='.z_num_'+zan_id;
						var zannum=parseInt($(zan_num).text())+1;
						// +1效果
		                 $(Z_NUM).css('display','inline-block');
						//总数+1
						 $(zan_num).text(zannum);
						setTimeout(function(){
						   $(Z_NUM).css('display','none');
						},1000);
					}
				}
		});
		$(this).attr('is_zan','true');
	
    });
	
	$(".cai_img").live("click", function(){
		 
		var cai_id=$(this).attr('cai_id');
		if($(this).attr('is_cai') =='true'){
			msgBoxShow('你已经踩过');
			return false;
	    }else{
		    
		}
			
	    $.ajax({
				url : '/?r=play/Cai',
				data : {cai_id:cai_id},
				type : 'POST',
				dataType : '',
				success : function(ret){
					if(ret =='ok'){							
						var C_NUM='.C_'+cai_id;
						var cai_num='.c_num_'+cai_id;
						var cainum=parseInt($(cai_num).text())+1;
						// +1效果
						$(C_NUM).css('display','inline-block');
						//总数+1
					    $(cai_num).text(cainum);
						setTimeout(function(){
						  $(C_NUM).css('display','none');
						},1000);
					}
					
				}
		});
	    $(this).attr('is_cai','true');
    });
     
	   //回复
	     $(".reply").live("click", function(){
		     
			  var REPLY=$(this).attr('rid');
			  $("#input_id").attr('value',REPLY);
			  var RE_NAME=$(this).attr('re_name');
			  RE_NAME='回复 '+RE_NAME;
			  $("#input_text").val('');
			  $("#input_text").attr('re_name',RE_NAME);
			  $("#input_text").focus();
			   $("#input_text").attr('placeholder',RE_NAME);
			   
			 if($("#input_id").attr('value') != '0'){

			  $("#input_text").focus(function(){
				    
				  }).blur(function(){
					  if( $("#input_text").val()!=''){
				       
					  }else{
						$("#input_text").attr('placeholder','点击评论');
					    $("#input_id").attr('value','0');
					  }
			      })
			  }
	       });
		// 提交评论   
          var commentTime = 0;
           
			$(".xpinglu1_a_3 .bottom .xiaolian").click(function(e){
				var comment = $(".xpinglu1_a_3 .bottom .text input").val().trim();
	
				var reply_id=$("#input_id").val();
                
				if( comment == "" ){
					msgBoxShow("评论内容不能为空");
					return false;
				}
				if( comment == "点击评论" ){
					msgBoxShow("请输入评论内容");
					return false;
				}
				if(getBytesCount(comment)>80){
					msgBoxShow("请不要超过40个中文");
					return false;
				}
				var now = (new Date()).getTime();
				if( now - commentTime < 10000){
					msgBoxShow('评论过于频繁，请稍后再试');
					return false;
				}
				if (ISLOADING) return;
				showLoading();
			
			    if(comment.indexOf("script") > 0){
			    	alert("不能提交！");
			    	hideLoading();
			    	return;	
			    }
				$.ajax({
					url : '/?r=play/comment',
					data : {gameid:GAMEID, comment:comment,reply_id:reply_id},
					type : 'POST',
					dataType : 'json',
					success : function(data){
						commentTime = now;
						hideLoading();
						getComent();
						if(reply_id>0){
						 msgBoxShow('回复成功！');
						}else{
						 msgBoxShow('评论成功！');
						}
						$("#input_id").attr('value','0');
						$("#input_text").attr('value','');
						$("#input_text").attr('re_name','');
						$("#input_text").attr('placeholder','点击评论');
					}
				});
			});
	
    //--------勋章低调的分割线--------//
    //成就
    if( achievement.length == 0 ) {
		//没徽章时显示 上架中
		
		$("#s12 img").attr('src', './resources/images/xiangq/batton_chengjiu_3.png');
		
    }
    else {
	    $("#s12").click(function(e){
	        _czc.push(["_trackEvent","菜单按钮事件","菜单徽章","菜单徽章点击","",""]);
	    	if( $(this).attr('moveing') ){

	    		return;
	    	}
	    	 delgametip();
	    	
			
	    //判断徽章只在PC和APP可获取信息
		    if(isMobile()){
					 if(isIos()){
							  
							 showXunz(achievement);
					 }else{		
					     if(!window.Play68app || isWeixin()){
							 return;
						  }else{
						     showXunz(achievement);
						  }
					 }
			}else{
			 showXunz(achievement);	
			}
	    });
	}
    $(".xunz .xun_bg li img").click(function(e){

    	$(".xunz").hide();
    
    });
    var tmpXunz = $("#tmpXunz").html();
    function showXunz(data){
    
    	$("#focus .a div").remove();
    	$('<div class="b"></div>').appendTo($("#focus .a"));
    	var xunzCon = $("#focus .b");
    	for (var i=0; i<data.length; i++) {
    		var obj = data[i];
            if(obj.achieved==0){
            
               obj.xunz="class='toum'";
            }else if(obj.achieved==1){
              
                obj.xunz="";
            }
    		var str = tmpXunz.replace('pre_src', 'src')
    					.replace('{{IMG}}', obj.img)
    					.replace('{{NAME}}', obj.name)
    					.replace('{{DESC}}', obj.desc)
                        .replace('{{toum}}', obj.xunz);
    		if(i >0 && i%2 == 0){
    			$('<div style="height:1px; width:100%;padding-top:2%; border-bottom:2px dashed #cbcbcb; clear:both;"></div>').appendTo(xunzCon);
    			$('<div style="height:1px; width:100%;padding-bottom:2%; clear:both;"></div>').appendTo(xunzCon);
    		}
    		$(str).appendTo(xunzCon);
    	}
    	$(".xunz").show();
    	TouchSlide({ 
	        slideCell:"#focus",
	        //titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	        mainCell:".bd .a", 
	        effect:"leftLoop", 
	        autoPlay:false,//自动播放
	        //autoPage:true, //自动分页
	        switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	    });
    }
    // 游戏成就完成检查
    window.doRanking = function(rType, level, score){
    	switch(parseInt(rType)){
    		case 1:
    		case 2:
    			checkAchievement(2, score);
    			break;
    		case 3:
    		case 4:
    			checkAchievement(3, level);
    			break;
    		default:
    			console.log("unknow ranking type");
    			return;
    	}
    }
    function checkAchievement(type, val) {
     	for (var i = 0; i < achievement.length; i++) {
    		var obj = achievement[i];
    		if(obj.complete == undefined && type == parseInt(obj.conid) && val >= parseInt(obj.conVal)){
    			obj.complete = true;
    			submitAchi(type, val, obj);
    		}
    	}
    }
    function submitAchi (type, val, conObj) {
    	$.ajax({
    		url : '?r=play/submitAchi',
    		data : {"gameid":GAMEID, "type":type, "val":val},
    		dataType : 'json',
    		success : function (ret) {
    			$(".jiangl .jiangl1_a span").html(conObj.name);
    			$(".jiangl").show();
    			//游戏页内加红点
    			
    			window.didi_gameid=GAMEID;
    			window.didi_type=type;
    			window.didi_val=val;
    		
    			updategametip();
    			hongdian();
    		
    			
    			setTimeout(function(){
    				$(".jiangl").hide();
    			}, 3000);
    		}
    	});
    }
    // 游戏时间
    // 每次调用+5秒
    function submitPlayTime() {
		return;
    	$.ajax({
    		url : '?r=play/submitPlayTime',
    		success : function(ret){
    			
    		}
    	});
    }
    (function runTime(){
    	if(gameTime > 0)
    		submitPlayTime();
    	gameTime+=5;
    	setTimeout(runTime, 5*1000);
    })();
    // 隐藏地址栏
    setTimeout(scrollTo,0,0,0);
});


(function(){
 if(isMobile()){
  
 }else{ 
	if(window.is_activity){
	   
			if(GAMENAME =='画个圆'){
				var matchNode = document.createElement("div");
				matchNode.className='bisaixx';
				matchNode.style.cssText = "position:absolute;z-index:999999;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
				
				matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">基友闺蜜，请助我一臂之力！</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励</div><div class="content1_d_2"><ul><li>好友排行榜的总人数最多便取胜！客服统计出来前十名好友最多的玩家各得抱枕1个！</li></ul></div></div><div class="content1_d"><div class="content1_d_1">活动规则</div><div class="qunhao">打开游戏链接-点击土豆图标-排行，即可查看自己的好友总个数！截图发给微信客服（微信号：68微游戏）递交成绩即可！</div></div><div class="content1_d"><div class="content1_d_1">比赛说明</div><div class="content1_d_2"><ul><li>只有注册或者微信登录68微游戏平台才有及格获得比赛资格。</li><li>好友点击玩家分享的链接登录并随随便便玩游戏即可为你助力！团结就是力量！拼的就是我的基友跟闺蜜！</li><li>比赛时间为：05月18日-05月20日，如超过活动时间提交截图，视为无效。</li><li>本活动最终解释权归68微游戏所有。</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
				
				document.body.appendChild(matchNode);
				$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
			}else if(GAMENAME =='兔子历险记'){
				var matchNode = document.createElement("div");
				matchNode.className='bisaixx';
				matchNode.style.cssText = "position:absolute;z-index:9;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
				
				matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">兔子历险记 拿福利</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励：</div><div class="content1_d_2"><ul><li>全球排行榜第1名的玩家：多啦A梦奇妙之旅名额（1名）；PS：到杭州的路费、饭费住宿费自理</li><li>全球排行榜第2-21名：旅行自拍必备自拍杆（20名）</li><li>全球排行榜第22-26名：暴走个性T恤（5名）</li><li>全球排行榜第27-300名：妙途旅行专用现金劵（10元）暑期出游必备（274名）</li></ul></div></div><div class="content1_d"><div class="content1_d_1">比赛说明：</div><div class="qunhao">1. 排行榜提交分数时间为：周三15点（2015-7-22），届时以客服的全球排行榜排名截图为准；</div><div class="qunhao">2.只有登录到68微游戏平台才能上排行榜；</div><div class="qunhao">3.本活动最终解释权归68微游戏所有。</div></div><div class="content1_d"><div class="content1_d_1">领奖方式：</div><div class="content1_d_2"><ul><li>关注 68微游戏，回复“领奖+联系方式”</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
				
				document.body.appendChild(matchNode);
				$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
			}else if(GAMENAME =='端午土豆连连看'){
				
				festivalgame();
				
			
			}else if(GAMENAME =='小i撑杆拿大奖'){
				festivalgame();
			}else if(GAMENAME =='彩球进洞'){
				var matchNode = document.createElement("div");
				matchNode.className='bisaixx';
				matchNode.style.cssText = "position:absolute;z-index:999999;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
				
				matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">国庆游戏比赛</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励</div><div class="content1_d_2"><ul><li>全球排行榜第1名：小黄人大公仔；</li><li>全球排行榜第2-5名：68微游戏抱枕；</li><li>全球排行榜第6-10名：可爱自拍杆。</li></ul></div></div><div class="content1_d"><div class="content1_d_1">重点提示</div><div class="qunhao">获奖玩家请加入玩家交流群：<span >305225247</span>(长按复制)，找68微游戏客服领取奖励。</div></div><div class="content1_d"><div class="content1_d_1">比赛说明</div><div class="content1_d_2"><ul><li>排行榜提交分数时间为 : 10月08日11点，届时以客服公布的全球排行榜名次为准；</li><li>只有登录到68微游戏平台才能上排行榜；</li><li>本活动最终解释权归68微游戏所有。</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
				
				document.body.appendChild(matchNode);
				$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
			}else{
				var matchNode = document.createElement("div");
				matchNode.className='bisaixx';
				matchNode.style.cssText = "position:absolute;z-index:999999;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
				
				matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">本周游戏比赛</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励</div><div class="content1_d_2"><ul><li>全球排行榜第1名：68微游戏抱枕；</li><li>全球排行榜第68名：68微游戏抱枕；</li><li>全球排行榜前100名尾号为6或8（比如	 6、8、16、18、...）的玩家，10元话费奖励。</li></ul></div></div><div class="content1_d"><div class="content1_d_1">重点提示</div><div class="qunhao">获奖玩家请加入玩家交流群：<span >305225247</span>(长按复制)，找68微游戏客服领取奖励。</div></div><div class="content1_d"><div class="content1_d_1">比赛说明</div><div class="content1_d_2"><ul><li>排行榜提交分数时间为 : 本周日22点，届时以客服公布的全球排行榜名次为准；</li><li>只有登录到68微游戏平台才能上排行榜；</li><li>本活动最终解释权归68微游戏所有。</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
				
				document.body.appendChild(matchNode);
				$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
			}
	  
  }else{
   
  }
	 $("body").bind("click",function(){
			 $(".huageyuan").hide();
	 })

}
})();




(function(){

if(!isMobile()) return;

var COVER_IMG = "cover_play68.png";
var COVER_SIZE = "100%";

/*var coverNode = document.createElement("img");
coverNode.style.cssText = "position:fixed;z-index:1000000;left:0;top:0;width:100%;height:100%;";
coverNode.src = RESOURCE_IMG_PATH+COVER_IMG;*/

//加载loading图片

var COVEHEIGHT=window.innerHeight+"px";
var COVEWIDTH= window.innerWidth+"px";
var coverNode = document.createElement("div");
coverNode.id = 'loading_info';
coverNode.style.cssText = "position:relative;z-index:1000000;width:"+COVEWIDTH+";min-width:320px;height:"+COVEHEIGHT;
coverNode.innerHTML = '<div class="load1" style="z-index:1000000;"><img  src="./resources/images/xijie/londing.png" width="411" height="349" style="z-index:999999999;"></div><div class="load2" style="z-index:1000000;">&copy; 2015 68微游戏</div>'
document.body.appendChild(coverNode);
setTimeout(function(){coverNode.parentNode.removeChild(coverNode)},3000);

if(window.is_activity){
  if(APPplay68() && window.IS_HORIZONTAL ){
	   
  }else{	
	if(GAMENAME =='画个圆'){
		var matchNode = document.createElement("div");
		matchNode.className='bisaixx';
		matchNode.style.cssText = "position:absolute;z-index:999999;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
		setTimeout(function(){
		matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">基友闺蜜，请助我一臂之力！</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励</div><div class="content1_d_2"><ul><li>好友排行榜的总人数最多便取胜！客服统计出来前十名好友最多的玩家各得抱枕1个！</li></ul></div></div><div class="content1_d"><div class="content1_d_1">活动规则</div><div class="qunhao">打开游戏链接-点击土豆图标-排行，即可查看自己的好友总个数！截图发给微信客服（微信号：68微游戏）递交成绩即可！</div></div><div class="content1_d"><div class="content1_d_1">比赛说明</div><div class="content1_d_2"><ul><li>只有注册或者微信登录68微游戏平台才有及格获得比赛资格。</li><li>好友点击玩家分享的链接登录并随随便便玩游戏即可为你助力！团结就是力量！拼的就是我的基友跟闺蜜！</li><li>比赛时间为：05月18日-05月20日，如超过活动时间提交截图，视为无效。</li><li>本活动最终解释权归68微游戏所有。</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
		},3000);
		document.body.appendChild(matchNode);
		$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
	}else if(GAMENAME =='兔子历险记'){
		var matchNode = document.createElement("div");
		matchNode.className='bisaixx';
		matchNode.style.cssText = "position:absolute;z-index:9;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
		setTimeout(function(){
		matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">兔子历险记 拿福利</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励：</div><div class="content1_d_2"><ul><li>全球排行榜第1名的玩家：多啦A梦奇妙之旅名额（1名）；PS：到杭州的路费、饭费住宿费自理</li><li>全球排行榜第2-21名：旅行自拍必备自拍杆（20名）</li><li>全球排行榜第22-26名：暴走个性T恤（5名）</li><li>全球排行榜第27-300名：妙途旅行专用现金劵（10元）暑期出游必备（274名）</li></ul></div></div><div class="content1_d"><div class="content1_d_1">比赛说明：</div><div class="qunhao">1. 排行榜提交分数时间为：周三15点（2015-7-22），届时以客服的全球排行榜排名截图为准；</div><div class="qunhao">2.只有登录到68微游戏平台才能上排行榜；</div><div class="qunhao">3.本活动最终解释权归68微游戏所有。</div></div><div class="content1_d"><div class="content1_d_1">领奖方式：</div><div class="content1_d_2"><ul><li>关注 68微游戏，回复“领奖+联系方式”</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
		},3000);
		document.body.appendChild(matchNode);
		$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
	}else if(GAMENAME =='端午土豆连连看'){
		setTimeout(function(){
		festivalgame();
		},3000);
	
	}else if(GAMENAME =='小i撑杆拿大奖'){
		setTimeout(function(){
		festivalgame();
		},3000);
	}else if(GAMENAME =='彩球进洞'){
	    var matchNode = document.createElement("div");
		matchNode.className='bisaixx';
		matchNode.style.cssText = "position:absolute;z-index:999999;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
		setTimeout(function(){
		matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">国庆游戏比赛</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励</div><div class="content1_d_2"><ul><li>全球排行榜第1名：小黄人大公仔；</li><li>全球排行榜第2-5名：68微游戏抱枕；</li><li>全球排行榜第6-10名：可爱自拍杆。</li></ul></div></div><div class="content1_d"><div class="content1_d_1">重点提示</div><div class="qunhao">获奖玩家请加入玩家交流群：<span >305225247</span>(长按复制)，找68微游戏客服领取奖励。</div></div><div class="content1_d"><div class="content1_d_1">比赛说明</div><div class="content1_d_2"><ul><li>排行榜提交分数时间为 : 10月08日11点，届时以客服公布的全球排行榜名次为准；</li><li>只有登录到68微游戏平台才能上排行榜；</li><li>本活动最终解释权归68微游戏所有。</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
		},3000);
		document.body.appendChild(matchNode);
		$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
	
	}else{
	   
		var matchNode = document.createElement("div");
		matchNode.className='bisaixx';
		matchNode.style.cssText = "position:absolute;z-index:999999;width:100%; top:0px;background:#f7ead4;padding-bottom:10px;height:"+window.Height;
		setTimeout(function(){
		matchNode.innerHTML = '<div class="bisaixxa"><div class="top" ><img src="./resources/images/xiangq/title.png" width="640" height="78"></div><div class="contentt"><img src="./resources/images/xiangq/bg_beijing.png" ><div class="content1"><div class="content1_a">本周游戏比赛</div><div class="content1_b"><img src="'+window.activity_img+'" width="164" height="168"></div><div class="content1_c">'+GAMENAME+'</div><div class="content1_d"><div class="content1_d_1">比赛奖励</div><div class="content1_d_2"><ul><li>全球排行榜第1名：68微游戏抱枕；</li><li>全球排行榜第68名：68微游戏抱枕；</li><li>全球排行榜前100名尾号为6或8（比如	 6、8、16、18、...）的玩家，10元话费奖励。</li></ul></div></div><div class="content1_d"><div class="content1_d_1">重点提示</div><div class="qunhao">获奖玩家请加入玩家交流群：<span >305225247</span>(长按复制)，找68微游戏客服领取奖励。</div></div><div class="content1_d"><div class="content1_d_1">比赛说明</div><div class="content1_d_2"><ul><li>排行榜提交分数时间为 : 本周日22点，届时以客服公布的全球排行榜名次为准；</li><li>只有登录到68微游戏平台才能上排行榜；</li><li>本活动最终解释权归68微游戏所有。</li></ul></div></div><div class="kaishianniu"><img src="./resources/images/xiangq/btn_start.png" width="320" height="70" id="hd_strat"></div></div></div></div>';
		},3000);
		document.body.appendChild(matchNode);
		$(".kaishianniu").live("click", function(){$(".bisaixx").css('display','none')});
	   }
   }
}else{
   
}
/*
if(GAMENAME =='画个圆'){
setTimeout(function(){
	
	$("body").append("<div class='huageyuan' style='position:absolute;max-width:640%; width:100%; background-color:rgba(0,0,0,0.75); height:700px; '><div style=' position:fixed; width:100%; top:0px;'><div style=' width:80%; margin:auto; padding-top:50px;'><img src='./resources/images/xijie/notice.jpg' style=' width:100%; height:aoto;'></div></div></div>");
	
	
},3000);
}
*/
 $("body").bind("click",function(){
	 $(".huageyuan").hide();
 })


/*if(navigator.userAgent.match(/ Play68/)){
     
	//过滤APP横屏不显示图片
}else{*/
	//document.addEventListener("touchmove",function(e){e.preventDefault();},false);
	var noticeNode = document.createElement("div");
	noticeNode.className = "common_notice";
//	noticeNode.style.cssText = "position:absolute;z-index:999999;left:0;top:0;background:#fffefc url("+RESOURCE_IMG_PATH+"rotate_tip.png) no-repeat center center;background-size: 50%;";
	document.body.appendChild(noticeNode);
	
	
	function checkCover(){
		window.scroll(0,0);
		var horizontal;
		if(window.orientation == 0 || window.orientation == 180){
			horizontal = false;closeRanking(1);
		}else if (window.orientation == -90 || window.orientation == 90){
			horizontal = true; closeRanking(1);
		}
		else {
			horizontal = false;
		}
		if(horizontal == HORIZONTAL){
			noticeNode.style.display = "none";
		}else{
		  
		  if(navigator.userAgent.match(/ipad/i)){
			  noticeNode.style.display = "none";
		  }else{
			  
			if(GAMENAME == '二人麻将'){
				//二人麻将特殊处理
				 closeRanking(1);
//				 $('#play68_menu').css('display','none'); 
				  noticeNode.style.display = "none";
						var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");
						var GameFrame = document.getElementById('game_window');
						var islandScapeGame = true;  //是否是横屏游戏			
					
						function iframeTransform(){
							console.log('iframeTransform');
							setTimeout(function(){
								var translateNum = (window.innerHeight-window.innerWidth)/2; 
								GameFrame.style.transform = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
								GameFrame.style.webkitTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
								GameFrame.style.mozTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
								GameFrame.style.msTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
								GameFrame.style.oTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
								GameFrame.style.width = window.innerHeight+"px";	
								GameFrame.style.height = window.innerWidth+"px";
							},100)			
						}
					
						function iframeRecover(){
							console.log('iframeRecover');
							setTimeout(function(){
								GameFrame.style.transform = "none";
								GameFrame.style.webkitTransform  = "none";
								GameFrame.style.mozTransform  = "none";
								GameFrame.style.msTransform  = "none";
								GameFrame.style.oTransform  = "none";
								GameFrame.style.width = window.innerWidth +'px';
								GameFrame.style.height = window.innerHeight +'px';
							},100);
						}
						updateOrientationA = function(){
							var orientation = window.orientation;
							console.log(orientation);
							
							switch (orientation) {
								case 90:
								case -90:
									if(islandScapeGame){
										iframeRecover();
									} 
									break;
								default:
									if(islandScapeGame) iframeTransform();
							}
						};
					
						updateOrientationB = function(){
							var orientation = (window.innerWidth >= window.innerHeight) ? "landscape" : "portrait";
							console.log(orientation);
							orientation == "portrait" && islandScapeGame ? iframeTransform() : iframeRecover();
						}
					
						var init = function() {
							if(supportOrientation && !isWeixin()){
								updateOrientationA();
								console.log('updateOrientationA');
								window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", updateOrientationA , false);
							}else{
								console.log('updateOrientationB');
								updateOrientationB();
								window.addEventListener("resize", updateOrientationB , false);
							}
						};
						window.addEventListener("DOMContentLoaded", init, false);

		    }else{
				if(window.islygame){
				   setTimeout(function(){
				   closeRanking(1);
				   },500);
				   noticeNode.style.display = "none";
				}else{
					setTimeout(function(){
						ajustWidthHeight();
						noticeNode.style.width = window.innerWidth+"px";
						noticeNode.style.display = "block";
					},(isIOS() ? 0 : 600));
				}
			}
		  }
		  }
		
		/*
		if(HORIZONTAL == true && isWeixin() && !isIOS()) {
			WeixinJSBridge.call('hideToolbar');
		}
		*/
		var _h = window.orientation;
		//GameFrame.style.cssText = "transform: rotateX("+_h+"deg);-moz-transform: rotateX("+_h+"deg);-webkit-transform: rotateX("+_h+"deg);";
		// document.getElementById('game_window').contentWindow.postMessage({orientation:window.orientation}, '*');

	}
//}
function ajustWidthHeight(){
	coverNode.style.height=window.innerHeight+"px";
	coverNode.style.width=window.innerWidth+"px";
	noticeNode.style.height=window.innerHeight+"px";
}
window.addEventListener("orientationchange",checkCover);
window.addEventListener("load",checkCover);
window.addEventListener("scroll",ajustWidthHeight);

})();

// loading
function showLoading() {
	
		window.ISLOADING=true;
		var img = $("<img id='loading' src='./resources/images/loding.png' style='width:64px;height:64px;'/>");
		var h = (document.documentElement.clientHeight-64)/2;
		var w = (document.documentElement.clientWidth-64)/2;
		img.css("position","fixed")
			.css("top",h)
			.css("left",w)
			.css("z-index","9999999")
			.appendTo($(document.body));
		var an = 0;
		window.loadTimer = setInterval(function(){
			img.css("transform", "rotate("+an+"deg)");
			an += 15;
		}, 40);
 
}
function hideLoading(){
	
		window.ISLOADING=false;
		$('#loading').remove();
		clearInterval(window.loadTimer);

}

$(function(){

	hongdian();

});
function hongdian(){
 	return;
	$.ajax({
			type:'post',
    		url :'/?r=achievement/gamepagetip',
    		data :'gameid='+GAMEID,
    		async:false,
    		success : function (ret) {
             
    			if(ret != 0){
    				 
    				$("#hhh").addClass("hongdian");
    			}
    		}
    	});
	//检查div的是否有某个class/
	var obj=document.getElementById('hhh');

	if(obj && obj.className=='hongdian'){
		$("#hh").addClass("hongdian");
	}
	
}

//取得徽章的话对game_tip记录游戏id
function updategametip(){
	return;
	$.ajax({
			type:'post',
    		url :'/?r=achievement/updategametip',
    		data :'gameid='+GAMEID,
    		async:false,
    		success : function (ret) {
          
    		}
    	});
}

//去点游戏内页红点
 function delgametip(){
	$.ajax({
			type:'post',
    		url :'/?r=achievement/delgametip',
    		data :'gameid='+GAMEID,
    		
    		success : function (ret) {
          		$("#hhh").removeClass("hongdian");
          		$("#hh").removeClass("hongdian");
    		}
    	});
}


function jixunyouxi(){
	//$(".dede").hide();
   // save_dede_info(window.didi_gameid,window.didi_type,window.didi_val);
}

function gotocenter(){
	showLoading();      
	$.ajax({
			type:'post',
    		url :'/?r=redpacket/checklogin',
    		data:'',
    		async:false,
    		success : function (ret) {
				 hideLoading();   
    			if(ret == 1){
    				window.location.href="/?r=Personal/personal";
    			}else{
    				window.LoginUi.show(window.LoginUi.gopersonal);

    			}
          		
    		}
    	});

}


function addCookie(objName, objValue, objHours) {//添加cookie
	var str = objName + "=" + escape(objValue);
	if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		var ms = objHours * 3600 * 1000;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
		str += ";path=/";
	}
	document.cookie = str;
}

function getCookie(objName) {//获取指定名称的cookie的值
	var arrStr = document.cookie.split("; ");
	for ( var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName)
			return unescape(temp[1]);
	}
}

function delCookie(name) {//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
	var date = new Date();
	date.setTime(date.getTime() - 10000);
	document.cookie = name + "=a; expires=" + date.toGMTString()
			+ ";path=/";
}

function succShareCallback(){ 
    
	var GameFrame_2 = document.getElementById('game_window');
	if(GameFrame_2 && typeof GameFrame_2.contentWindow.postMessage === 'function'){
		GameFrame_2.contentWindow.postMessage({op_type:'fn', value:{fn:'wx_share_succ', args:[]}},'*');
	}
    
    if(isWeixin()){
    	//微信投票功能
    	var voteId = GAME_URL;
    	if(voteId.indexOf("voteId") > 0 ){
    		_czc.push(['_trackEvent','投票功能','分享次数','','','']);
    	}
    	
    	if(JIERI_GAME_ID > 0){
    		_czc.push(["_trackEvent","分享","节日比赛","节日比赛","",""]);
		 $.ajax({
			type:'post',
    		url :'/?r=Festivalgame/addmuscle',
    		data:'gameid='+JIERI_GAME_ID,
    		async:false,
    		success : function (ret) {
				jiazaimuscle();
          		
    		}
    	 });
    	 return;
	    }

	    if(IS_EVERYDAY_GAME > 0){
	    	meiri_weixin_share();
	    	return;
	    }

	    if(GAMENAME=='疯狂找你妹'){
			_czc.push(["_trackEvent","分享","疯狂找你妹","疯狂找你妹","",""]);
			var randNum = Math.floor(Math.random()*100);
			if(randNum > 50){
			   window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
			}else{
			   window.location.href ='http://mp.weixin.qq.com/s?__biz=MjM5OTE3NDQ4MA==&mid=206964438&idx=1&sn=bdfc06e85bca31a8867c29c66c7e1c78#rd';	
			}
		}
		if(GAMENAME=='插插插赢大奖'){
			_czc.push(["_trackEvent","分享","插插插赢大奖","插插插赢大奖","",""]);
	
		window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
		
		}
		if(GAMENAME=='《插插插赢大奖》'){
			_czc.push(["_trackEvent","分享","《插插插赢大奖》","《插插插赢大奖》","",""]);
		
		window.location.href='http://mp.weixin.qq.com/s?__biz=MjM5OTE3NDQ4MA==&mid=206964438&idx=1&sn=bdfc06e85bca31a8867c29c66c7e1c78&ptlang=2052&ADUIN=85111087&ADSESSION=1433903650&ADTAG=CLIENT.QQ.5395_.0&ADPUBNO=26467#rd';
		
		}
		
	}
	if(ISROOM){
		_czc.push(["_trackEvent","分享","分享游戏房间",GAMENAME,"",""]);
	}
	_czc.push(["_trackEvent","K游戏分享",GAMENAME,"","",""]);

	if(window.FRIENDUP_CNZZ_PUSH){
		_czc.push(["_trackEvent","好友超越分享",GAMENAME,"","",""]);
		window.FRIENDUP_CNZZ_PUSH = null;
	}

	if(isMobile()){
		if(!window.Play68app){//APP不显示下载引导
			if(isIos()){
				//苹果微信关注
			   	if(isWeixin()){
					if(window.is_gongzhonghao){
                         //已经关注公众号,不弹框
					     _czc.push(["_trackEvent","分享","分享成功","IOS老用户已经关注过","",""]);
					}else{				
						  setTimeout(function(){
								_czc.push(["_trackEvent","分享","分享成功","同意关注公众号IOS","",""]);
								_czc.push(["_trackEvent","K关注",GAMENAME,"","",""]);
								window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
							
						  },500);
					}
				  
				}
			}else{
				if(isWeixin()){
					      
					if(window.is_gongzhonghao){
						   //已经关注公众号，不弹框
						  _czc.push(["_trackEvent","分享","分享成功","Android老用户已经关注过","",""]);
				    }else{
						  
					     //微信关注公众号
						 setTimeout(function(){
								_czc.push(["_trackEvent","分享","分享成功","同意关注公众号Android","",""]);	  
								_czc.push(["_trackEvent","K关注",GAMENAME,"","",""]);
								window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
							
						 },500);
						 
					 }
				}else{
					//安卓机网页下载
				  setTimeout(function(){
					var r=confirm("下载68微游戏，数百款游戏即点即玩");
					if(r==true){
						_czc.push(["_trackEvent","分享","分享成功","同意安卓机网页下载Android APP","",""]);
					 	window.location.href='http://download.play68.com/play68.apk';
					}else{
						_czc.push(["_trackEvent","分享","分享成功","拒绝安卓机网页下载Android","",""]);
					}
				  },500);
				}
			} 
		} 
	}else{
		//PC机直接弹出应用宝
		setTimeout(function(){
			var r=confirm("下载68微游戏，数百款游戏即点即玩");
			if(r==true){
				_czc.push(["_trackEvent","分享","分享成功","同意PC下载APP","",""]);
				window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.play68';
			}else{
				_czc.push(["_trackEvent","分享","分享成功","拒绝PC下载APP","",""]);
			}
	   },500);
	}

	
}

//评论
$( function(){
	  var clientH= window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	  
	   var xpinglu1_a_1_H=$(".xpinglu1_a_1").height();
	   var xpinglu1_a_3_H=$(".xpinglu1_a_3").height();
	   var xpinglu1_a_2_H=clientH-xpinglu1_a_1_H;
	  $(".xpinglu1_a_2").height(xpinglu1_a_2_H);
	  
	   $(".anniu li").click(function(){
	       var indexcount=$(this).index();
		   $(".anniu li").removeClass("anniu_bg").eq(indexcount).addClass("anniu_bg");
		   $(".a").removeClass("block").eq(indexcount).addClass("block");
	   })
	   
	   $(".guanbi").click(function(){
		   $(".xpinglu").css("display","none");
		   
		   })
	   
	   $(window).resize(function() {
           var clientH=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	       var xpinglu1_a_1_H=$(".xpinglu1_a_1").height();
	       var xpinglu1_a_3_H=$(".xpinglu1_a_3").height();
	      var xpinglu1_a_2_H=clientH-xpinglu1_a_1_H;
	       $(".xpinglu1_a_2").height(xpinglu1_a_2_H);
        });

	
})

//每日比赛
everyday_game();
function everyday_game(){

	if(USERID == 0 && IS_EVERYDAY_GAME > 0){
		$(function(){
			LoginUi.show(function(){
			window.location.href = window.location.href;
		    })
		});
		return;
	}
    if(IS_EVERYDAY_GAME > 0){
	$.ajax({
				url:"/?r=Everydaygame/meiripaix/gameid/"+GAMEID,
				dataType: "html",
			    async:false,
				success: function(Data){
					
					$(".nav").before(Data);

					
				}
			});
    } 
}

//节日比赛排行榜
function festivalgame(){

	$.ajax({
				url:"/?r=Festivalgame/festival_game/gameid/"+GAMEID,
				dataType: "html",
			    async:false,
				success: function(Data){
					
					$(".nav").before(Data);

					
				}
			});
}
var meirigame_cookie_time =600; //倒计秒的设置
var fen_tomgji =10; //倒计时的分设置

var JIERI_GAME_ID=0;

window.showRanking = function(flag) {
	showRankingEndTime = (new Date).getTime();
	flag = flag || 0;
	toggle = toggle || 0;
	if (flag || toggle) {
    	showLoading();
		var leixing = 2;
		leixing = isWeixin() == true ? 1 : leixing;//微信默认显示好友排行，否则显示全球排行
		$.ajax({
			url: '/index.php?r=play/HtmlRanking',
			type:'POST',
			data: {gameid:GAMEID,leixing:leixing,flag:leixing},
			success: function(data) {
				hideLoading();
   				$('.moban1_a').empty();
				$('#content').attr('class','meiripaix3');
				$('.moban1_a').append(data);
				openRanking();
			},
    		complete: function() {
       			hideLoading();
       		}
		  });
		
	} else {
		openRanking();
		toggle = true;
	}
}

window.challengeSuccess = function() {

	showLoading();
	$.ajax({
		url: '/index.php?r=Play/challengeSuccess',
		type:'GET',
		data: {gameid:GAMEID,friend:FRIEND,share:SHARE},
		success: function(data) {
			hideLoading();
			$('#cover').after(data);
		},
		complete: function() {
			
   			hideLoading();
   		}
	  });
}
window.isAttention = function() {
	if (! window.is_gongzhonghao) {
		var is_register_name = getCookie('play68_user_name');
		var is_register_name_lenght = 0;
		is_register_name_lenght = typeof(is_register_name) == 'undefined' ? 0 : getBytesCount(is_register_name);
		if (is_register_name_lenght >= 13) {
			return false;
		} else {
			return true;
		}
	}
	return true;
}
if (isWeixin() && IS_FROM_SHARE == 1 && USERID != FRIEND  && isNetGame != 1) {
	challengeSuccess();
}

window.playingMethod = function() {
	showLoading();
	$.ajax({
		url: '/index.php?r=Play/PlayingMethod',
		type:'POST',
		data: {gameid:GAMEID},
		success: function(data) {
			hideLoading();
			$('#cover').after(data);
		},
		complete: function() {
   			hideLoading();
   		}
	  });
};

window.closePlayingMethod = function() {
	$('#wanfa').remove();
};

$(document).off('click','.wanfa');
$(document).on('click','.wanfa',function(event){
	   event.stopPropagation();
	   playingMethod();
});
$(document).on('click','.wanfa_4_1,.wanfa_4_2,.wanfa_4_2_1,.wanfa_4_2_2,.wanfa_1,.wanfa_3',function(event){
	 event.stopPropagation();
});
function getmessage_menu(){

   $.ajax({
   type: "POST",
   url: "/index.php?r=Mymessage/check_mess",
   data: "",
   success: function(msg){
    if(msg == 1){
	  $("#message_menu").html(" <span class='hongdian' style='position:absolute; top:-5px; right:10%'></span>");
     }
   }
 });
}
window.recordStorage = function() {
	 $.ajax({
	 		url : "?r=play/recordLocalStorage",
	 		type:'POST',
	 		data:{encoded:encoded,gameid:GAMEID,userid:USERID},
	 		success : function(data){
	 			hideLoading();
	 		}
    });
	
}
function setLocalStorage(gameid) { 
   var GameFrame_2 = document.getElementById('game_window');
   var json = storageJson;
	if(GameFrame_2 && typeof GameFrame_2.contentWindow.postMessage === 'function'){
		GameFrame_2.contentWindow.postMessage({op_type:'fn', value:{fn:'setStorage', args:[json,gameid]}},'*');
	}
}
//$('#game_window').load(function(){
//	setLocalStorage(GAMEID);
//});
function go_back(){
  window.location.href=document.referrer;	
}
function ejam_banner_close(){
	_czc.push(["_trackEvent","易简广告关闭次数","易简广告关闭次数","","",""]); 
}
function ejam_banner_click(){
	_czc.push(["_trackEvent","易简广告点击次数","易简广告点击次数","","",""]); 
}

$(function(){
	$('#close_flower').click(function(){
		$('#flower_jieshou').hide();
		$('#flower_fasong').hide();
	});
})