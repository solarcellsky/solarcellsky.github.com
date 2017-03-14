//SHA1算法导入
var hexcase=0;var b64pad="";var chrsz=8;function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length*chrsz))}function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length*chrsz))}function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length*chrsz))}function hex_hmac_sha1(key,data){return binb2hex(core_hmac_sha1(key,data))}function b64_hmac_sha1(key,data){return binb2b64(core_hmac_sha1(key,data))}function str_hmac_sha1(key,data){return binb2str(core_hmac_sha1(key,data))}function sha1_vm_test(){return hex_sha1("abc")=="a9993e364706816aba3e25717850c26c9cd0d89d"}function core_sha1(x,len){x[len>>5]|=128<<(24-len%32);x[((len+64>>9)<<4)+15]=len;var w=Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j<80;j++){if(j<16){w[j]=x[i+j]}else{w[j]=rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1)}var t=safe_add(safe_add(rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t}a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);e=safe_add(e,olde)}return Array(a,b,c,d,e)}function sha1_ft(t,b,c,d){if(t<20){return(b&c)|((~b)&d)}if(t<40){return b^c^d}if(t<60){return(b&c)|(b&d)|(c&d)}return b^c^d}function sha1_kt(t){return(t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514}function core_hmac_sha1(key,data){var bkey=str2binb(key);if(bkey.length>16){bkey=core_sha1(bkey,key.length*chrsz)}var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^909522486;opad[i]=bkey[i]^1549556828}var hash=core_sha1(ipad.concat(str2binb(data)),512+data.length*chrsz);return core_sha1(opad.concat(hash),512+160)}function safe_add(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&65535)}function rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binb(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz){bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(32-chrsz-i%32)}return bin}function binb2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz){str+=String.fromCharCode((bin[i>>5]>>>(32-chrsz-i%32))&mask)}return str}function binb2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((3-i%4)*8+4))&15)+hex_tab.charAt((binarray[i>>2]>>((3-i%4)*8))&15)}return str}function binb2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(3-i%4))&255)<<16)|(((binarray[i+1>>2]>>8*(3-(i+1)%4))&255)<<8)|((binarray[i+2>>2]>>8*(3-(i+2)%4))&255);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32){str+=b64pad}else{str+=tab.charAt((triplet>>6*(3-j))&63)}}}return str};

//定义全局分享变量
var share_title;
var share_content;
var share_img_url;
var share_url;
var newVersionInitFinish=false; //新版授权是否就绪
   
//初始化新版分享授权
function initNewVersionShare(successCallback){
	// 发送请求获取appId和jsApiTicket
	$.ajax({
        url: 'api/jsShare.json?accountappid=' + window.accountappid,
        type: 'GET',
        dataType: "json",
        success: function (data) {
        	var appId=data.appId;//在jsp页面定义
        	var jsApiTicket=data.japiTicket;//在jsp页面定义
        	var timestamp=new Date().getTime()+'';
        	var nonceStr=timestamp+parseInt(Math.random()*100000)+'';
        	var strSHA1=hex_sha1("jsapi_ticket="+jsApiTicket+"&noncestr="+nonceStr+"&timestamp="+timestamp+"&url="+share_url);//SHA1加密
        	wx.config({
        		debug: false,
        	    appId: appId,
        	    timestamp: timestamp,
        	    nonceStr: nonceStr,
        	    signature: strSHA1,
        	    jsApiList: [
        	      'checkJsApi',
        	      'onMenuShareTimeline',
        	      'onMenuShareAppMessage',
        	      'onMenuShareQQ',
        	      'onMenuShareWeibo',
        	      'hideMenuItems',
        	      'showMenuItems'
        	    ]
        	});
        	wx.ready(function () {
        		/*
        		//判断当前版本是否支持指定 JS 接口
        		wx.checkJsApi({
        			jsApiList: [
        			'getNetworkType',
        			'previewImage'
        		],
        		success: function (res) {
        			alert(JSON.stringify(res));
        			}
        		});*/
        		
        		//初始化新版分享接口
        		newVersionInitFinish=true;
        		initShareInfoNew(successCallback);
        	});
        }
	});	
}

//新版initShareInfo方法
function initShareInfoNew(successCallback){
	wx.onMenuShareAppMessage({
	    title: share_title,
	    desc: share_content,
	    link: share_url,
	    imgUrl: share_img_url,
	    success: function (res) {
	    	 if(typeof successCallback=="function")
        		 successCallback();
	    },
	    cancel: function (res) {},
	    fail: function (res) {}
	});
	wx.onMenuShareTimeline({
	    title: share_title,
	    link: share_url,
	    imgUrl: share_img_url,
	    success: function (res) {
	    	 if(typeof successCallback=="function")
        		 successCallback();
	    },
	    cancel: function (res) {},
	    fail: function (res) {}
	});
	wx.onMenuShareQQ({
	    title: share_title,
	    desc:share_content,
	    link: share_url,
	    imgUrl: share_img_url,
	    complete: function (res) {},
	    success: function (res) {
	    	 if(typeof successCallback=="function")
        		 successCallback();
	    },
	    cancel: function (res) {},
	    fail: function (res) {}
	});
	wx.onMenuShareWeibo({
	    title: share_title,
	    desc: share_content,
	    link: share_url,
	    imgUrl: share_img_url,
	    complete: function (res) {},
	    success: function (res) {
	    	 if(typeof successCallback=="function")
        		 successCallback();
	    },
	    cancel: function (res) {},
	    fail: function (res) {}
	});
}


//全局initShareInfo方法（本js入口）
function initShareInfo(shareTitle, shareSummary, shareImgUrl, shareUrl,successCallback){
   
	share_title = shareTitle;
    share_content = shareSummary;
    share_img_url = shareImgUrl;
    share_url = shareUrl?shareUrl:window.location.href;
    
    //旧版分享信息
    var shareData = {
        img_url: share_img_url,
        img_width: '64',
        img_height: '64',
        link: share_url,
        desc: share_content,
        title: share_title,
        content: share_content,
        url: share_url
    };    
    function shareTimeline() {
         var title = shareData.title;
         if (title.indexOf(shareData.desc) == -1) {
             title += ":" + shareData.desc;
         }
         WeixinJSBridge.invoke("shareTimeline", {
             img_url: shareData.img_url,
             img_width: shareData.img_width,
             img_height: shareData.img_height,
             link: shareData.link,
             desc: shareData.desc,
             title: title
         },
         function(a) {
        	 if(typeof successCallback=="function")
        		 successCallback();
         });
     }    
     function shareFriend() {
         WeixinJSBridge.invoke("sendAppMessage", {
             img_url: shareData.img_url,
             img_width: shareData.img_width,
             img_height: shareData.img_height,
             link: shareData.link,
             desc: shareData.desc,
             title: shareData.title
         },
         function(a) {
        	 if(typeof successCallback=="function")
        		 successCallback();
         });
     }    
    document.addEventListener('WeixinJSBridgeReady',
       function onBridgeReady() {           
           WeixinJSBridge.on('menu:share:appmessage',
           function(argv) {
               shareFriend();
           });
           WeixinJSBridge.on('menu:share:timeline',
           function(argv) {
               shareTimeline();
           });
    },false); 
    
    try{
    	//判断新版分享授权是否就绪
        if(newVersionInitFinish){
        	initShareInfoNew(successCallback);
        }else{
        	initNewVersionShare(successCallback);
        }
    }catch(e){
    	//do nothing
    }    
    
};