// JavaScript Document
//根据系统不同判断字号
//判断客户终端是ios 还是android 控制字号大小
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

//判断是否是ios系统
if(browser.versions.gecko){
   // alert("is huohu");
//	document.getElementById("").style.fontSize=14+'px';
//	document.getElementById("").style.fontSize=14+'px';
}
//判断是否是ios系统
if(browser.versions.ios){
    //alert("is ios");
	document.getElementById("jp").style.fontSize=16+'px';
}

//判断是否安卓系统
if(browser.versions.android){
    //alert("is android");
	
	document.getElementById("jp").style.fontSize=22+'px';
	document.getElementById("error").style.fontSize=22+'px';
	
}

