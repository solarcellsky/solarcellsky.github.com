
var SITE_TITLE = "68微游戏";
var HOME_PATH = "www.play68.com";
var GAME_URL = GAME_URL || window.location.href;
var PLAY_URL = PLAY_URL || "";
var GAME_ICON = PLAY_URL+"icon.png";
var SHARE_TITLE = "最好玩的小游戏就在68微游戏";
var SHARE_DESC = "大量免费在线网页游戏，不用下载，款款精品，快来跟你朋友一起玩吧！";
var EXIT_TIPS_FLAG = true;
var FOLLOW_URL = "";
var RESOURCE_IMG_PATH = RESOURCE_IMG_PATH || "/resources/images/";
var HORIZONTAL = false;
var COVER_SHOW_TIME = 3000;
var LOCATION_HOST='http://'+location.host+'/';
function getCookie(objName) {//获取指定名称的cookie的值
	var arrStr = document.cookie.split('; ');
	for ( var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split('=');
		if (temp[0] == objName)
			return unescape(temp[1]);
	}
}

function changeURLArg(url,arg,arg_val){ 
    var pattern=arg+'=([^&]*)'; 
    var replaceText=arg+'='+arg_val; 
    if(url.match(pattern)){ 
        var tmp='/('+ arg+'=)([^&]*)/gi'; 
        tmp=url.replace(eval(tmp),replaceText); 
        return tmp; 
    }else{ 
        if(url.match('[\?]')){ 
            return url+'&'+replaceText; 
        }else{ 
            return url+'?'+replaceText; 
        } 
    } 
    return url+'\n'+arg+'\n'+arg_val; 
} 

var YQM=parseInt(getCookie('68_yqm_play'));
if(YQM > 0 && USERID > 0){
	if(/68_yqm_play/i.test(GAME_URL)){
			GAME_URL=changeURLArg(GAME_URL,'68_yqm_play',YQM);
	}else{
		if(GAME_URL == LOCATION_HOST){
            GAME_URL=GAME_URL+'?r=index/index/68_yqm_play/'+YQM;
        }else{
		  if(GAME_URL.indexOf('?') > 0){
			GAME_URL=GAME_URL+'/68_yqm_play/'+YQM;
		  }else{
			GAME_URL=GAME_URL+'/68_yqm_play/'+YQM;
		  }
		}
	}
}
// 设置分享内容
/*
setInterval(function(){
	var __wxShareInfo = {
	    title: SHARE_TITLE, // 分享标题
	    desc: SHARE_DESC, // 分享描述
	    link: GAME_URL, // 分享链接
	    imgUrl: GAME_ICON, // 分享图标
	    type: '', // 分享类型,music、video或link，不填默认为link
	    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	    success: function () { 
	        // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	    }
	}
	// 分享好友
	wx.onMenuShareAppMessage(__wxShareInfo);
	// 分享朋友圈
	wx.onMenuShareTimeline(__wxShareInfo);
	// 分享QQ
	wx.onMenuShareQQ(__wxShareInfo);
	// 分享tx微博
	wx.onMenuShareWeibo(__wxShareInfo);
}, 500);*/

function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}
if(typeof window.webkit === "object"){
  window.iosplay68=true;
}else{
  window.iosplay68=false;
}
function toggle(id) {
var el = document.getElementById(id);
var img = document.getElementById("arrow");
var box = el.getAttribute("class");
if(box == "hide"){
	el.setAttribute("class", "show");
	delay(img, RESOURCE_IMG_PATH + "arrowright.png", 400);
}
else{
	el.setAttribute("class", "hide");
	delay(img, RESOURCE_IMG_PATH + "arrowleft.png", 400);
}
}

function delay(elem, src, delayTime){
	window.setTimeout(function() {elem.setAttribute("src", src);}, delayTime);
}

function show_share(){
	show_share_page();	
	//toggle('play68box');
};

function box_show_share(){
	show_share_page();	
	//toggle('play68box');
};

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
function show_share_page(){
	if(APPplay68()){
	//安卓APP应用分享
	 window.Play68app.WXShare(GAME_URL,SHARE_TITLE,SHARE_DESC,GAME_ICON);
	 
	}else{
		if(IOSplay68() ||  window.iosplay68){//苹果应用分享
			 function loadUserInfoView(share_ios){
				window.location.hash="play68://"+share_ios+"&"+EncodeUtf8(GAME_URL)+"&"+EncodeUtf8(SHARE_TITLE)+"&"+EncodeUtf8(SHARE_DESC)+"&"+EncodeUtf8(GAME_ICON); 
			 }
			 loadUserInfoView('para1:para2:para3:para4:');
			 window.location.hash="";
			 function dismiss_share(){
			    var message_share=EncodeUtf8(GAME_URL)+"&"+EncodeUtf8(SHARE_TITLE)+"&"+EncodeUtf8(SHARE_DESC)+"&"+EncodeUtf8(GAME_ICON);	 
				var message = message_share;
				window.webkit.messageHandlers.dismiss_share.postMessage(message);
		 	}
			dismiss_share();
		}else{
			/*
			  wxqrP3.innerHTML = "&quot;" + SHARE_TITLE + "&quot;";
			  wxqrImg.src = GAME_ICON;
			  config_jiathis_config();
			  if(isWeixin() == true) {
				document.getElementById("share-wx").style.display = 'block';
			  }else {		
				document.getElementById("wx-qr").style.display = 'block';
			  }
			*/
			if(isWeixin()) {
				addShareWX_EWM();
				JiaThis_Button();	
			}
			else {
				addWXQR_EWM();
				JiaThis_Button();	
			}
			ewm_getuserinfo();
	    }
	}
}

function iosapp_show_share_game_url(){
	return GAME_URL; 
}
function iosapp_show_share_share_title(){
	return SHARE_TITLE; 
}
function iosapp_show_share_share_desc(){
	return SHARE_DESC; 
}
function iosapp_show_share_game_icon(){
	return GAME_ICON; 
}

function iosapp_show_share_info(){
	return EncodeUtf8(GAME_URL)+"&"+EncodeUtf8(SHARE_TITLE)+"&"+EncodeUtf8(SHARE_DESC)+"&"+EncodeUtf8(GAME_ICON);
}

function closeshare(){
	if($('div').is('.chaoyue')){
		$('.chaoyue').css('display','block');
	}
	document.getElementById("share-wx").style.display = 'none';
	if($("#s1").is(":hidden")){
		$("#xiaz").hide();	
	 }else{
		 $("#xiaz").show().removeClass("b");	
		 }

	
}
function closewx(){
	if($('div').is('.chaoyue')){
		$('.chaoyue').css('display','block');
	}
	document.getElementById("wx-qr").style.display = 'none';
	if($("#s1").is(":hidden")){
		$("#xiaz").hide();	
	 }else{
		 $("#xiaz").show();	
		 }
}
//游戏页内
function is_in_game(){
	if(/games|game|\/play\//i.test(location.href)){
	  return true;
	}
}

function is_weixin_url(url){
	if(/weixin/i.test(url)){
	  return true;
	}
}
function ewm_getuserinfo(){ 
   var userid=USERID;
   if(userid>0){
	   showLoading();
	   $.ajax({
	   type: "POST",
	   url: "/?r=personal/getuserinfo/userid/"+userid,
	   data: "",
	   dataType : 'json',
	   success: function(data){
		   if(is_in_game()){//游戏页内
	         
			 $('#ewm_share_headimg img').attr('src',data.headimg);
			 $('#ewm_share_msg').text('扫二维码,进入游戏一起玩哟！');
			 $('#ewm_share_words').text(SHARE_TITLE);
			
			 if(is_weixin_url(GAME_URL)){
			  $('#ewm_share_url img').attr('src','/?r=site/2wm&content='+location.href);
			 }else{
			  $('#ewm_share_url img').attr('src','/?r=site/2wm&content='+GAME_URL+'/ewm_from_sid/'+userid);
			 }
		   }else{
		  
			 SHARE_TITLE='哇！！我发现了个有数百个小游戏的平台啊~啊~啊~，赶紧过来玩下啊~';	 
			 $('#ewm_share_words').text(SHARE_TITLE);
			 $('#ewm_share_headimg img').attr('src',data.headimg);
			 if(isIos()){
		    	 $('#ewm_share_msg').text('hey小伙伴~扫二维码关注68微游戏');
			     $('#ewm_share_url img').attr('src','/?r=site/2wm&content=http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd');
			 }else{
			   $('#ewm_share_msg').text('hey小伙伴~扫二维码下载APP，一起玩哟~');
			   if(isWeixin() == true){ 
			      $('#ewm_share_url img').attr('src','/?r=site/2wm&content= http://a.app.qq.com/o/simple.jsp?pkgname=com.play68'); 
			   }else{
			      $('#ewm_share_url img').attr('src','/?r=site/2wm&content=http://download.play68.com/play68.apk');
			   }
			 }
			  
		   }
		   if(isWeixin() == true){
			   
			   document.getElementById("share-wx").style.display = 'block';
		   }else{
			   document.getElementById("wx-qr").style.display = 'block';
		   }
		    hideLoading();
	   }
	   });
   }else{
            if(is_in_game()){//游戏页内
	        
			 $('#ewm_share_headimg img').attr('src',GAME_ICON);
			 $('#ewm_share_msg').text('扫二维码,进入游戏一起玩哟！');
			 $('#ewm_share_words').text(SHARE_TITLE);
			 if(is_weixin_url(GAME_URL)){
			  $('#ewm_share_url img').attr('src','/?r=site/2wm&content='+location.href);
			 }else{
			  $('#ewm_share_url img').attr('src','/?r=site/2wm&content='+GAME_URL);
			 }
			 
		   }else{
			 SHARE_TITLE='哇！！我发现了个有数百个小游戏的平台啊~啊~啊~，赶紧过来玩下啊~';	 
			 $('#ewm_share_words').text(SHARE_TITLE);
			 $('#ewm_share_headimg img').attr('src','/resources/images/icon.png');
			 if(isIos()){
		    	 $('#ewm_share_msg').text('hey小伙伴~扫二维码关注68微游戏');
			     $('#ewm_share_url img').attr('src','/?r=site/2wm&content=http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd');
			 }else{
				 $('#ewm_share_msg').text('hey小伙伴~扫二维码下载APP，一起玩哟~');
				 if(isWeixin() == true){ 
					 $('#ewm_share_url img').attr('src','/?r=site/2wm&content=http://a.app.qq.com/o/simple.jsp?pkgname=com.play68'); 
				 }else{
					 $('#ewm_share_url img').attr('src','/?r=site/2wm&content=http://download.play68.com/play68.apk');
				 }
			 }
			  
		   }
		   if(isWeixin() == true){
			  
			   document.getElementById("share-wx").style.display = 'block';
		   }else{
			   document.getElementById("wx-qr").style.display = 'block';
		   }
   
   }

}

//微信分享
function addShareWX_EWM() {
	var wxqrDiv = document.createElement("div");
	wxqrDiv.style.cssText = "background:rgba(0,0,0,0.8); position:fixed;top:0px; left:0px; width:100%; height:" + document.documentElement.clientHeight + "px; z-index:10000; display:none;"
	wxqrDiv.id = "share-wx";
	wxqrDiv.className = "ewm_fenxiang";
	wxqrDiv.onclick = closeshare;
	document.body.appendChild(wxqrDiv);
	
		wxqrP1 = document.createElement("div");
		wxqrP1.className = "fenxiang1";
		wxqrP1.innerHTML = "<div style='max-width:640px;width:100%; margin:auto;'><div class='yaoqing' ><img src='/resources/images/ewm_share.png'></div><div class='ewm_content'><div class='ewm_content_1'><div class='ewm_content_1_a' id='ewm_share_headimg'><img  width='92' height='92'></div><div class='ewm_content_1_b'><p id='ewm_share_msg'style='color: rgb(255, 255, 255)'></p></div><div class='guanbi1'><img src='/resources/images/xijie/ewm_close.png' width='64' height='64'></div><p class='clear'></p></div><div class='ewm_content_2' id='ewm_share_url'><img  ></div><div  class='ewm_content_3'><p id='ewm_share_words' style='text-align: center;color: rgb(255, 255, 255)'></p></div></div></div>";
		wxqrDiv.appendChild(wxqrP1);

		
		wxqrP4 = document.createElement("div");
		if(!isMobile()) {
			wxqrP4.style.cssText = "text-align:center;width:265px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		else {
			wxqrP4.style.cssText = "text-align:center;width:212px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		wxqrP1.appendChild(wxqrP4);	

}
//微信外分享
function addWXQR_EWM() {
	var wxqrDiv = document.createElement("div");
	wxqrDiv.style.cssText = "background:rgba(0,0,0,0.8); position:fixed;top:0px; left:0px; width:100%; height:" + document.documentElement.clientHeight + "px; z-index:10000; display:none;"
	wxqrDiv.id = "wx-qr";
	wxqrDiv.className = "ewm_fenxiang";
	wxqrDiv.onclick = closewx;
	document.body.appendChild(wxqrDiv);
	
		wxqrP1 = document.createElement("div");
		wxqrP1.className = "fenxiang1";
		wxqrP1.innerHTML = "<div style=' max-width:640px;width:100%; margin:auto;'><div class='yaoqing' style='visibility:hidden;'><img src='/resources/images/ewm_share.png'></div><div class='ewm_content'><div class='ewm_content_1'><div class='ewm_content_1_a' id='ewm_share_headimg'><img  width='92' height='92'></div><div class='ewm_content_1_b'><p id='ewm_share_msg'style='color: rgb(255, 255, 255)'></p></div><div class='guanbi1'><img src='/resources/images/xijie/ewm_close.png' width='64' height='64'></div><p class='clear'></p></div><div class='ewm_content_2' id='ewm_share_url'><img  ></div><div  class='ewm_content_3'><p id='ewm_share_words' style='text-align: center;color: rgb(255, 255, 255)'></p></div></div></div>";
		wxqrDiv.appendChild(wxqrP1);

	
		wxqrP4 = document.createElement("div");
		if(!isMobile()) {
			wxqrP4.style.cssText = "text-align:center;width:265px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		else {
			wxqrP4.style.cssText = "text-align:center;width:212px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		wxqrP1.appendChild(wxqrP4);	
}
var _bingShareAchi = false;
function addShareButtons_ewm(divToAddTo) {
	var wxqrP2 = document.createElement("p");
		wxqrP2.style.cssText = "text-align:center;margin:16px;";
		divToAddTo.appendChild(wxqrP2);

		    wxqrImg = document.createElement("img");
			wxqrImg.src = GAME_ICON;
			wxqrImg.id = "wx-qr-img";
			wxqrImg.style.cssText = "max-width:75px";
			if(!HORIZONTAL || !isMobile()) {
				wxqrP2.appendChild(wxqrImg);
			}
			
		wxqrP3 = document.createElement("p");
		var shareTextWidth = "210px";
		if(HORIZONTAL == true) {
			shareTextWidth = "400px";
		}
		wxqrP3.style.cssText = "text-align:center;width:" + shareTextWidth + ";color:#fff;padding-top:5px;margin:0 auto;font: bold 20px Arial, Helvetica, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif";
		wxqrP3.innerHTML = "&quot;" + SHARE_TITLE + "&quot;";
		divToAddTo.appendChild(wxqrP3);
		
		wxqrP4 = document.createElement("p");
		if(!isMobile()) {
			wxqrP4.style.cssText = "text-align:center;width:265px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		else {
			wxqrP4.style.cssText = "text-align:center;width:212px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		divToAddTo.appendChild(wxqrP4);	
		
}
function JiaThis_Button(){
	    if(window.changeshareimg){
		
		}else{   
			//JiaThis Button BEGIN
			var jiathisDiv = document.createElement("div");
			jiathisDiv.className = "jiathis_style_32x32";		
			wxqrP4.appendChild(jiathisDiv);
			if(!isMobile()) {
				var sharelink1 = document.createElement("a");
				sharelink1.className = "jiathis_button_weixin";
				sharelink1.innerHTML = "&nbsp";
				jiathisDiv.appendChild(sharelink1);
			}
			var sharelink2 = document.createElement("a");
			
			sharelink2.className = "jiathis_button_tsina";
			sharelink2.innerHTML = "&nbsp";
			jiathisDiv.appendChild(sharelink2);
		
			var sharelink3 = document.createElement("a");
			sharelink3.className = "jiathis_button_qzone";
			sharelink3.innerHTML = "&nbsp";
			jiathisDiv.appendChild(sharelink3);
			
			var sharelink4 = document.createElement("a");
			sharelink4.className = "jiathis_button_tqq";
			sharelink4.innerHTML = "&nbsp";
			jiathisDiv.appendChild(sharelink4);
			
			var sharelink5 = document.createElement("a");
			sharelink5.className = "jiathis_button_renren";
			sharelink5.innerHTML = "&nbsp";
			jiathisDiv.appendChild(sharelink5);
			
			
			var jiathisJS = document.createElement("script");
			jiathisJS.type = "text/javascript";
			jiathisJS.src = "http://v3.jiathis.com/code/jia.js?uid=1399105943150378"
			jiathisJS.charset = "utf-8";
			document.body.appendChild(jiathisJS);
		}
		// 分享成就
		if(!_bingShareAchi){
			_bingShareAchi=true;
			$(".jiathis_style_32x32 a").click(function(){
		    	var img = new Image();
				img.src = '?r=shareGame/setshare';
		    });
		}
		
		var f = function(node, imgSrc){
			node.removeClass('jtico');
			node.css({'background':'url('+imgSrc+') no-repeat left','text-align':'left','overflow': 'hidden','display': 'block!important','height': '32px!important','line-height': '32px!important','padding-left': '36px!important','cursor':'pointer','width':'32px','margin-left':'15px'});
		}
		var  browser = navigator.userAgent.toLowerCase();
	    if(browser.match(/Firefox/i)=="firefox") {
		    var CHANGEIMGTIME= 3000;
		}else{
		    var CHANGEIMGTIME= 1000;
		}
		setTimeout(function(){
		
			//修改微信图标
			f($(".jiathis_button_weixin span"),"/resources/images/button_weixin.png");
            //修改新浪图标
			f($(".jiathis_button_tsina span"),"/resources/images/button_tsina.png");
			//修改QQ空间图标
			f($(".jiathis_button_qzone span"),"/resources/images/button_qzone.png");
			//修改腾讯微博图标
			f($(".jiathis_button_tqq span"),"/resources/images/button_tqq.png");
			//修改人人网图标
			f($(".jiathis_button_renren span"),"/resources/images/button_renren.png");
		    window.changeshareimg=true;
		},CHANGEIMGTIME);
		 config_jiathis_config();
		
}

function config_jiathis_config() {
	jiathis_config={
		summary: SHARE_DESC,
		title: SHARE_TITLE + " #"+SITE_TITLE+"#",
		url: GAME_URL,
		pic: GAME_ICON,
		ralateuid:{
			"tsina":"5133079826"
		},
		shortUrl:false,
		hideMore:true
		
	}
}


/*---------------------------- sdk --------------------------*/

// 绑定事件
function addEvent( elm, evType, fn, useCapture ) {
    if ( elm.addEventListener ) {
        elm.addEventListener( evType, fn, useCapture );//DOM2.0
    }
    else if ( elm.attachEvent ) {
        elm.attachEvent( 'on' + evType, fn );//IE5+
    }
    else {
        elm['on' + evType] = fn;//DOM 0
    }
}

addEvent(window, 'load', pageInit, false);

function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}

function isIos() {
	return navigator.userAgent.match(/iphone|ipod|ios|ipad/i);
}

function pageInit() {
	//checkInstallable();
	//disable save page
	//addDisableSavePage();
	checkMobile();
}

function checkMobile() {
    if(isMobile()) {
        displayType = "none";
        var mysheet=document.styleSheets[0];
        var myrules= mysheet.cssRules ? mysheet.cssRules: mysheet.rules;
        for (i=0; i<myrules.length; i++){
            if(myrules[i].selectorText ==".hideMobile"){
                myrules[i].style["display"] = displayType;
                break;
            }
        }
    }
}

function isMobile(){
	return navigator.userAgent.match(/android|iphone|ipad|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i);
}

function setShareInfo(data) {
    SHARE_DESC = data.desc || SHARE_DESC;
    SHARE_TITLE = data.title || SHARE_TITLE;

    if(APPplay68()){
		//安卓APP应用分享
		if(typeof window.Play68app.initShare === 'function') {
			window.Play68app.initShare(GAME_URL,SHARE_TITLE,SHARE_DESC,GAME_ICON);
		}
	 
	}
  
  
	document.title = SHARE_TITLE;
	
	if(SHARE_DESC.indexOf('-68微游戏')>0){
	 
	}else{
	  SHARE_DESC=SHARE_DESC+'-68微游戏';
	}
	

    var _t = Number(data.showShareTime);
    if ( _t != 'NaN' && _t == 0 ) {
        show_share_page();
    }
    else if ( _t != 'NaN' && _t > 0 ) {
        setTimeout(function(){ show_share_page(); }, _t);
    }
}
//本地缓存设置
function getStorage(data){
     var GameFrame_2 = document.getElementById('game_window');
     var json = data;
	if(GameFrame_2 && typeof GameFrame_2.contentWindow.postMessage === 'function'){
		GameFrame_2.contentWindow.postMessage({op_type:'fn', value:{fn:'getStorage', args:[json]}},'*');
	}
}
function putLocalStorage(data){
	encoded = data.kvVal;
	//recordStorage(encoded);
}
// data : {type:类型, level:关数, score:分数}
// type : 1分数类型 2闯关类型 3闯关分数类型 4时间类型
var _ranData = {};
function ranking(data) {
	if(window.islygame){
	}else{
      $("#weibosharetitle").text(SHARE_TITLE);
	  $("#weibosharedesc").text(SHARE_DESC);
	}
	/*if(_ranData.type == data.type && _ranData.level == data.level && _ranData.score == data.score)
		return;
	_ranData = data;
	var _img = new Image();
	if(data.level == 0 && data.score == 0)
		return;
	_img.src = "?r=play/set_ranking/gameid/"+GAMEID+"/type/"+data.type+"/level/"+data.level+"/score/"+data.score;
	_img = null;
	doRanking(data.type, data.level, data.score);*/
	console.log("type:"+data.type+",level:"+data.level+",score:"+data.score+",showRankingType:"+data.showRankingType);
	if(IS_EVERYDAY_GAME <= 0){
		set_weekranking(data);
		switch(data.type){
			case 1: 
				if(data.score <= MY_ZHOU_RANKING_SCORE){
					if (IS_FROM_SHARE == 1 && isWeixin() && USERID != FRIEND  && isNetGame != 1) {
						challengeSuccess();
						return;
					}
					//show_Recommend();
				
					winning_info_show();//比赛活动后关注微信公众号消息
					
					return;
				}
				break;
			case 2:
				if(data.score >= MY_ZHOU_RANKING_SCORE && MY_ZHOU_RANKING_SCORE > 0){
					//show_Recommend();
					if (IS_FROM_SHARE == 1 && isWeixin() && USERID != FRIEND  && isNetGame != 1) {
						challengeSuccess();
						return;
					}
					
					winning_info_show();
					return;
				}
				break;
			case 3:
				if(data.level <= MY_ZHOU_RANKING_LEVEL && data.score <= MY_ZHOU_RANKING_SCORE){
					//show_Recommend();
					if (IS_FROM_SHARE == 1 && isWeixin() && USERID != FRIEND  && isNetGame != 1) {
						challengeSuccess();
						return;
					}
					
					winning_info_show();
					return;
				}
				break;
			case 4:
				if(data.level <= MY_ZHOU_RANKING_LEVEL && data.score >= MY_ZHOU_RANKING_SCORE && MY_ZHOU_RANKING_SCORE > 0){
					//show_Recommend();
					if (IS_FROM_SHARE == 1 && isWeixin() && USERID != FRIEND  && isNetGame != 1) {
						challengeSuccess();
						return;
					}
					
					winning_info_show();
					return;
				}
				break;
			default :
				break
		}
	}
	
	var sign = hex_md5(SIGN+'&'+GAMEID+'&'+data.type+'&'+data.level+'&'+data.score);
	
	$.ajax({
		type : "POST",
		url : "?r=play/set_ranking",
		data : {gameid:GAMEID, type:data.type, level:data.level, score:data.score,friend:FRIEND,sign:sign,share:SHARE},
		dataType : 'json',
		success : function(res) {
//			if(LocalStorageKeys){
//				getStorage(LocalStorageKeys);
//			}
			if(IS_EVERYDAY_GAME > 0){
				everyday_game();
				return;
			}

			MY_ZHOU_RANKING_LEVEL = data.level;
			MY_ZHOU_RANKING_SCORE = data.score;

			var myFriendRankingUp = false;
			if(res && res.myFriendRanking){
				myFriendRankingUp = (MY_FRIEND_RANKING == -1 || res.myFriendRanking < MY_FRIEND_RANKING);
				MY_FRIEND_RANKING = res.myFriendRanking;
				MY_ZONG_RANKING = res.myZongRanking;
			}

			if(data.showRankingType==1){
				if(ISROOM){
					showRoomranking();
				}
				else{
					zongRanking(myFriendRankingUp);
				}
			}
			else if(data.showRankingType==2){
				//
			}
			else{
				if(data.type==1 || data.type==2){
					if(ISROOM){
						showRoomranking();
					}
					else{
						zongRanking(myFriendRankingUp);
					}
				}
			}
			doRanking(data.type, data.level, data.score);
			console.log(res);
		}
	});
}
//弹出获奖信息通知
function winning_info_show(){
	if(window.Play68Menu){
		if(window.is_activity){
			if( window.is_gongzhonghao){
			
			}else{
				if(window.Play68app){
					
				}else{
					if(isWeixin()){
						var is_register_name=getCookie('play68_user_name');
						if(typeof(is_register_name)=='undefined'){
							var is_register_name_lenght=0;
						}else{
							var is_register_name_lenght=getBytesCount(is_register_name);
						}
						if(is_register_name_lenght < 13){
						   $(".censai").css('display','none');
						}else{
							if(GAMENAME=='T走霉运，有多远滚多远！' || GAMENAME=='小i撑杆拿大奖'){
							//过滤游戏不弹通知	
							  $(".censai").css('display','none');
							}else{
							  $(".censai").css('display','block');
							}
						}
					}
				}
			}
		}
	}
}

//不弹出推荐游戏
function close_Recommend(){
 
    window.no_show_Recommend=true;	
 
}
//端午节游戏
function festival_game(){
	 if(window.is_activity){
		festivalgame();
	 }
}
//弹出推荐游戏
function show_Recommend(){
	if(window.is_activity){//活动游戏不参加
	    return;
	}else{
		if(window.Play68app){
			$(".like").css('display','none');
		}else{
			$(".like").css('display','block');
			
			function Timeout_Recommend(t){
				   $("#close_time").html("("+t+")");
				   if(t<1){
					   return;
				   }
				   t--;  
				 clearTimeout(window.closerecomend);
				 window.closerecomend=setTimeout(function(){
						 Timeout_Recommend(t);
				 }, 1000);
				 window.closerecomend;
		
			 }
			Timeout_Recommend(5);
			clearTimeout(window.closerecomend_2);
			window.closerecomend_2=setTimeout(function(){
				$(".like").css('display','none');
				
			},5000);
			window.closerecomend_2;
		}
	}
}
function setachievement(obj){
  var data=JSON.stringify(obj);
	$.ajax({
   type: "POST",
   url: "index.php?r=achievement/achieve",
   data: "data="+data+"&game_id="+GAMEID,
   success: function(msg){
   	alert(msg);
   }
});
}

function MoregameCallback(){
	if(isMobile()){
		if(APPplay68()){//APP不显示下载引导
		    _czc.push(["_trackEvent","更多点击","APP跳首页","","",""]);
			window.Play68app.GotoShouye();
		}else{
			if(isIos()){
				//苹果微信关注
			   	if(isWeixin()){
					   if(window.is_gongzhonghao){
						   //已经关注微信公众号跳转首页
							_czc.push(["_trackEvent","更多点击","苹果已关注跳首页","","",""]);
							window.location.href='/';
					   }else{
					      _czc.push(["_trackEvent","更多点击","同意关注IOS","","",""]);
						  window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
					   }
				
				}else{
					if(IOSplay68() ||  window.iosplay68){
					      window.location.href='/';
					}else{
					      _czc.push(["_trackEvent","更多点击","下载IOS应用","","",""]);
					      window.location.href='https://itunes.apple.com/cn/app/68wei-you-xi/id956700193?l=zh&ls=1&mt=8';
					}
				}
			}else{
				if(isWeixin()){
				      if(window.is_gongzhonghao){
						  //已经关注微信公众号跳转首页
					      _czc.push(["_trackEvent","更多点击","Android已关注跳首页","","",""]);
						  window.location.href='/';
					  }else{
						 //微信关注公众号
						 _czc.push(["_trackEvent","更多点击","同意关注ANDROID","","",""]);
						 window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0#rd';
					  }
				}else{
					//安卓机网页下载
	
						_czc.push(["_trackEvent","更多点击","同意下载APP","","",""]);
					 	window.location.href='http://download.play68.com/play68.apk';

				}
			} 		
		} 
	}else{  
	        _czc.push(["_trackEvent","更多点击","PC跳首页","","",""]);
		    window.location.href='/';
		        /*
				//PC机直接弹出应用宝
				_czc.push(["_trackEvent","更多","更多点击","同意PC下载APP","",""]);
				window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.play68';
				*/
	}
	
}
var flag=0;
function iframeRecover_ios(){
	    var GameFrame = document.getElementById('game_window');
		setTimeout(function(){
    		var translateNum = (window.innerWidth-(flag*0.94))/2;
			GameFrame.style.top = 0;	
    		if(translateNum < 100 && is_weixn()){
				GameFrame.style.transform = "translate("+translateNum+"px)";
		    	GameFrame.style.webkitTransform  = "translate("+translateNum+"px)";
				GameFrame.style.mozTransform  = "translate("+translateNum+"px)";
				GameFrame.style.msTransform  = "translate("+translateNum+"px)";
				GameFrame.style.oTransform  = "translate("+translateNum+"px)";
			}else{
				GameFrame.style.transform = "none";
		    	GameFrame.style.webkitTransform  = "none";
				GameFrame.style.mozTransform  = "none";
				GameFrame.style.msTransform  = "none";
				GameFrame.style.oTransform  = "none";
			}
			if(is_weixn() && flag ){
    			GameFrame.style.width = flag*0.94 +'px';
    		}else{
    			GameFrame.style.width = window.innerWidth +'px';
    		}
    		GameFrame.style.height = window.innerHeight +'px';
		},100)
}
function iframeTransform_ios(){
	    var GameFrame = document.getElementById('game_window');
		setTimeout(function(){
			var translateNum = (window.innerHeight-window.innerWidth)/2; 
			if(is_weixn()){
				GameFrame.style.width = window.innerHeight *0.94 +'px';
			}else{
				GameFrame.style.width = window.innerHeight +'px';
			}
			
			GameFrame.style.height = window.innerWidth +'px';		
			GameFrame.style.transform = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
			GameFrame.style.webkitTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
			GameFrame.style.mozTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
			GameFrame.style.msTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
			GameFrame.style.oTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
			flag = window.innerHeight;
			GameFrame.style.left = 0 +'px' ;
		},100)		
}
function resetView (){
 	var orientation = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
 	if(isIos() && orientation == 'portrait'){
 		iframeTransform_ios();
		
 	}
	window.scrollTo(0, 1); 
	
	

 }

function resetFrame(){
 	if(isIos()){
 		iframeRecover_ios();
 	}	
 }
function ly_set_share(data){
	SHARE_DESC = data.desc || SHARE_DESC;
    SHARE_TITLE = data.title || SHARE_TITLE;
	document.title = SHARE_TITLE;
	
	if(SHARE_DESC.indexOf('-68微游戏')>0){
	 
	}else{
	  SHARE_DESC=SHARE_DESC+'-68微游戏';
	}
	// spec param
	if( data.specParam && /^\w+$/.test(data.specParam) ) {
		window.SHARE_SPEC_PARAM = data.specParam;
    }
}

// 接受sdk回调
function onmessage(e) {
    var _fns = {
    	//'refresh' : function() { window.location.href = window.location.href; },
        'go_home' : function() {MoregameCallback(); } ,
        'share'  : function() { show_share_page(); } ,
        'setShareInfo' : function(args) { setShareInfo(args); },
    	'setHorizontal' : function(args) { HORIZONTAL = args; },
    	'ranking' : function(args) { ranking(args); },
    	'showRanking' : function(args) { showRanking(); },
		'closeRecommend':function(args){close_Recommend();},
		'festivalgame':function(args){festival_game();},
		'ly_set_share':function(args){ ly_set_share(args); },
		'set_share_url':function(args){set_share_url(args); },
		'setCrazycaitu':function(args){ setCrazycaitu(args); },
		'getCrazycaitu':function(args){ getCrazycaitu(args); },
		'getStorage':function(args){ getStorage(args); },
		'set_share_icon':function(args){set_share_icon(args); },
		'resetView':function(){resetView(); },
		'resetFrame':function(){resetFrame(); },
		'apilogin':function(){apilogin(); },
		'putLocalStorage':function(args){ putLocalStorage(args); }
    };
    console.log(e);
    switch( e.data.op_type ) {
    case 'fn':
    	try{
        	(_fns[e.data.value.fn]).apply(window, e.data.value.args);
    	}
    	catch(ex) {
    		console.log(ex);
    	}
        break;
    default:
        console.log(e);
    }
}

addEvent( window, 'message', onmessage, false);

function EncodeUtf8(s1){  
		// escape函数用于对除英文字母外的字符进行编码。如“Visit W3School!”->"Visit%20W3School%21"  
		var s = escape(s1);  
		var sa = s.split("%");//sa[1]=u6211  
		var retV ="";  
		if(sa[0] != "")  
		{  
			retV = sa[0];  
		}  
		for(var i = 1; i < sa.length; i ++)  
		{  
			if(sa[i].substring(0,1) == "u")  
			{  
				retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));  
				if(sa[i].length>=6)  
				{  
					retV += sa[i].substring(5);  
				}  
			}  
			else retV += "%" + sa[i];  
		}  
		return retV;  
}  

function Str2Hex(s){  
		var c = "";  
		var n;  
		var ss = "0123456789ABCDEF";  
		var digS = "";  
		for(var i = 0; i < s.length; i ++)  
		{  
			c = s.charAt(i);  
			n = ss.indexOf(c);  
			digS += Dec2Dig(eval(n));    
		}  
		return digS;  
} 
 
function Dec2Dig(n1){  
		var s = "";  
		var n2 = 0;  
		for(var i = 0; i < 4; i++)  
		{  
			n2 = Math.pow(2,3 - i);  
			if(n1 >= n2)  
			{  
				s += '1';  
				n1 = n1 - n2;  
			}  
			else  
			s += '0';  
			  
		}  
		return s;                   
}  

function Dig2Dec(s){  
		var retV = 0;  
		if(s.length == 4)  
		{  
			for(var i = 0; i < 4; i ++)  
			{  
				retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);  
			}  
			return retV;  
		}  
		return -1;  
}
  
function Hex2Utf8(s){  
		var retS = "";  
		var tempS = "";  
		var ss = "";  
		if(s.length == 16)  
		{  
			tempS = "1110" + s.substring(0, 4);  
			tempS += "10" +  s.substring(4, 10);  
			tempS += "10" + s.substring(10,16);   
			var sss = "0123456789ABCDEF";   
			for(var i = 0; i < 3; i ++)   
			{   
				retS += "%";   
				ss = tempS.substring(i * 8, (eval(i)+1)*8);   
				retS += sss.charAt(Dig2Dec(ss.substring(0,4)));   
				retS += sss.charAt(Dig2Dec(ss.substring(4,8)));   
			}   
			return retS;   
		}   
		return "";
}

function setCrazycaitu(data){
	
  var linkid=0;
    
    if(data.linkid == undefined){
    	
    	linkid=-1;
    }else{
    	linkid=data.linkid;
    }
 
	res_level(data.id,linkid);
	
}

function getCrazycaitu(){
	
	var level=init_level();
	return level;
}



//记录《疯狂猜图之美剧》玩的关数,每进一关调用一次

function res_level(id,linkid){

	var level_id = id;
	if(linkid != -1){
		id=linkid;
	}
	var game_url_crazy =GAME_URL.indexOf('?');
	if(game_url_crazy > 0){
		GAME_URL=GAME_URL.substr(0,game_url_crazy);
		GAME_URL=GAME_URL+"?crazy_id="+id+"&from_fri="+USERID+"&gameid="+GAMEID;
	}else{
		
		GAME_URL=GAME_URL+"?crazy_id="+id+"&from_fri="+USERID+"&gameid="+GAMEID;
	}

	$.ajax({
   		type: "POST",
  	    url: "?r=crazy_caitu/setlevel",
   		data:"gameid="+GAMEID+"&level="+level_id,
   		async:false,
   			success: function(msg){
   			
     			
   			}
	});
	
} 


// 进入《疯狂猜图之美剧》时调用一次
/*
function init_level(){
	var url_info=window.location.search;
   
	if(url_info == ''){
		
		return 0;
	}
	url_info=url_info.substr(1);
    var id=0;
	$.ajax({
   		type: "POST",
  	    url: "?r=crazy_caitu/getCrazycaitu",
   		data: url_info,
   		async:false,
   			success: function(msg){
   				id=msg;
     			
   			}
	});

	return id;
	
}*/

function set_share_icon(data){
   
   if(data.share_icon == undefined){
    	
    }else{
     GAME_ICON=data.share_icon;
    }
}
function set_share_url(data){
   if(IOSplay68() ||  window.iosplay68){
   		return;
   }
   if(data.share_url == undefined){
    	
    }else{
     GAME_URL=data.share_url;
    }
}


//提交分数到周排行榜

function set_weekranking(data){
	
		switch(data.type){
			case 1: 
				if(data.score <= WEEK_RANKING_SCORE){
					
					
					return;
				}
				break;
			case 2:
				if(data.score >= WEEK_RANKING_SCORE && WEEK_RANKING_SCORE > 0){
				
				
					return;
				}
				break;
			case 3:
				if(data.level <= WEEK_RANKING_LEVEL && data.score <= WEEK_RANKING_SCORE){
				
					return;
				}
				break;
			case 4:
				if(data.level <= WEEK_RANKING_LEVEL && data.score >= WEEK_RANKING_SCORE && WEEK_RANKING_SCORE > 0){
				
					return;
				}
				break;
			default :
				break;
		}

		var sign = hex_md5(SIGN+'&'+GAMEID+'&'+data.type+'&'+data.level+'&'+data.score);
	
	$.ajax({
		type : "POST",
		url : "?r=weekranking/set_weekranking",
		data : {gameid:GAMEID, type:data.type, level:data.level, score:data.score,sign:sign,share:SHARE,is_netgame:IS_NETGAME},
		dataType : 'json',
		success : function(res) {
			//if(IS_EVERYDAY_GAME > 0){
				//everyday_game();
				//return;
			//}
			WEEK_RANKING_LEVEL = data.level;
			WEEK_RANKING_SCORE = data.score;
	
		}
	});

}

function apilogin(){
	$.ajax({
		type : "POST",
		url : "?r=api/Signin",
		//data :,
		dataType : 'html',
		success : function(Data) {
			$(".jiangl").before(Data);
			
		}
	});
}