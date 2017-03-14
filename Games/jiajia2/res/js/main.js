define("widget/weixin",["widget/tips","widget/wx"],function(require,e,i){var n=require("widget/wx");require("widget/tips");var t={wx:n,version:"",isReady:"undefined"!=typeof WeixinJSBridge,getVersion:function(){var e=/MicroMessenger\/([\d.]+)/i,i=(navigator.wxuserAgent||navigator.userAgent).match(e),n="";n=i?i[1]:navigator.wxuserAgent?-1:-2,this.version=n},ready:function(e){var i=this;this.wx.ready(function(){i.isReady=!0,i.getVersion(),$.isFunction(e)&&e()})},init:function(e){var i=this,n={},t={sale:"/auth/get_wx_signpackage.json",zhaopin:"/m/auth/get_wx_signpackage.json",mobile:"/getwxsignpackage.json"};e.site=e.site?e.site:"mobile";var s=t[e.site];return s?(n.page_url=location.href.split("#")[0],void $.post(s,n,function(n){var t=parseInt(n.retcode,10),s=n.retmsg;0==t?(e.appId=n.appId,e.timestamp=n.timestamp,e.nonceStr=n.nonceStr,e.signature=n.signature,i.config(e)):$.Tips.showError(t,s)},"json")):($.Tips.showError(-1,"站点未定义获取微信配置参数的url"),!1)},config:function(e){this.wx.config(e)},showOptionMenu:function(){this.wx.showOptionMenu()},onMenuShareTimeline:function(e){this.wx.onMenuShareTimeline(e)},onMenuShareAppMessage:function(e){this.wx.onMenuShareAppMessage(e)}};i.exports=t});
//# sourceMappingURL=http://m.fenqile.com/res/mod/widget/weixin.js.map
define("widget/util",function(require,exports,module){var StrTool=require("widget/strtool"),normalizeUrl=function(e){if(!/^http(s)?\:\/\//im.test(e)){var t=location.origin||location.protocol+"//"+location.host;e=t+("/"==e[0]?"":"/")+e}return e},app={diff:100,delay:800,isInstall:!0,defaults:null,later:function(e,t,n){setTimeout($.proxy(e,n||window),t)},goInstall:function(){this.isInstall||$.isFunction(this.defaults.guide)&&this.defaults.guide()},detect:function(e){var t=Date.now();(!e||t-e<this.delay+this.diff)&&(this.isInstall=!1)},tryOpen:function(){var e=this.defaults.cmd,t=$("<iframe></iframe>");t.css("display","none"),t.attr("src",e),$("body").append(t)},guide:function(e){var t={cmd:"",guide:function(){window.location.href="http://m.fenqile.com/app.html"}};$.isPlainObject(e)&&(this.defaults=$.extend({},t,e)),this.later(this.goInstall,this.delay+3*this.diff,this);var n=Date.now();this.later(function(){this.tryOpen()},0,this),this.later(function(){this.detect(n)},this.delay,this)}},jsBridge={cbPrefix:"FQL_JSBridge_Cb_",retPrefix:"FQL_JSBridge_Rt_",invoke:function(e,t){var n;if(this.isIosV2Invok()){$.isPlainObject(t)||(t={});try{t=JSON.stringify(t),window.webkit.messageHandlers.FQL_JSBridge.postMessage({funcName:e,parameter:t})}catch(i){console.error(i.message)}}else"undefined"!=typeof FQL_JSBridge&&"undefined"!=typeof FQL_JSBridge[e]&&("undefined"==typeof t||$.isPlainObject(t)&&1==t.async?n=FQL_JSBridge[e]():($.isPlainObject(t)&&(t=JSON.stringify(t)),n=FQL_JSBridge[e](t)));return n},getReturnName:function(e){return this.retPrefix+e},getCallbackName:function(e,t){return t=t||"",t=t&&t+"_",this.cbPrefix+t+e},setCallback:function(e,t,n){$.isFunction(n)?window[e]=n:window[e]=t},ready:function(e){return $.isFunction(e)?void("undefined"==typeof FQL_JSBridge?window.document.addEventListener("FQL_JSBridgeReady",function(t){e()},!1):e()):!1},checkNotInApp:function(e){return this.isApp()?void 0:($.isFunction(e.onNotInApp)?e.onNotInApp():Util.outsideAppGuid({cmd:"fenqile://app/webview?url="+encodeURIComponent(location.href)}),!0)},setAsyncCall:function(method,options){var callbackName=this.getCallbackName("onReturn",method);"undefined"!=typeof options&&$.isFunction(options.onReturn)&&this.setCallback(callbackName,options.onReturn,function(res){if("object"==typeof res)options.onReturn(res);else{res=res||"",res=res.replace(/\:\"\{/g,":{").replace(/\}\"\,/g,"},");var json=eval("("+res+")");options.onReturn(json)}});var params={callBackName:callbackName,async:1},ret=this.invoke(method,params);return ret&&window[callbackName](ret),ret},getDeviceInfo:function(e){return this.setAsyncCall("getDeviceInfo",e)},captureQR:function(e){if(this.checkNotInApp(e))return!1;var t=this.invoke("captureQR");return t},getPhoneNum:function(e){return this.setAsyncCall("getPhoneNum",e)},getNetInfo:function(e){return this.setAsyncCall("getNetInfo",e)},getLBS:function(options){var callbackName=this.getCallbackName("onLBSReceive");$.isFunction(options.onLBSReceive)&&this.setCallback(callbackName,options.onLBSReceive,function(res){if("object"==typeof res)options.onLBSReceive(res);else{res=res||"",res=res.replace(/\:\"\{/g,":{").replace(/\}\"\,/g,"},");var json=eval("("+res+")");json.data&&json.data.mDLongitude&&(json.data.longitude=json.data.mDLongitude,json.data.latitude=json.data.mDLatitude),options.onLBSReceive(json)}});var params={callBackName:callbackName},ret=this.invoke("getLBS",params);return ret},onLogIn:function(e){var t=this.invoke("onLogIn",e);return t},onLogOut:function(e){var t=this.invoke("onLogOut",e);return t},hideTitle:function(e){var t=this.invoke("hideTitle",e);return t},hideLoading:function(e){var t=this.invoke("hideLoading",e);return t},showTitle:function(e){var t=this.invoke("showTitle",e);return t},isLogin:function(e){var t=this.invoke("isLogin",e);return t},getSessionId:function(e){return this.setAsyncCall("getSessionId",e)},getTokenId:function(e){return this.setAsyncCall("getTokenId",e)},doWxPay:function(e){if(this.checkNotInApp(e))return!1;var t=this.getCallbackName("onWxPayBack");$.isFunction(e.onWxPayBack)&&this.setCallback(t,e.onWxPayBack);var n={appid:e.appid,"package":e["package"],prepayid:e.prepayid,partnerid:e.partnerid,noncestr:e.noncestr,sign:e.sign,timestamp:e.timestamp,callBackName:t},i=this.invoke("doWxPay",n);return i},loadUrl:function(e){var t=this.invoke("loadUrl",e);return t},openUrl:function(e){var t=this.invoke("openUrl",e);return t},setTitle:function(e){e=$.extend({type:1,title:""},e);var t=this.invoke("setTitle",e);return t},setLeftButtonVisible:function(e){e=$.extend({visible:"1"},e);var t=this.invoke("setLeftButtonVisible",e);return t},setTitleRightIcon:function(e){var t=this.getCallbackName("onClick","setTitleRightIcon");$.isFunction(e.onClick)&&this.setCallback(t,e.onClick);var n={visible:e.visible||1,type:e.type||"text",content:e.content||"",callBackName:t},i=this.invoke("setTitleRightIcon",n);return i},setUnReadNumber:function(e){var t=this.invoke("setUnReadNumber",e);return t},startActivity:function(e){var t=this.invoke("startActivity",e);return t},tips:function(e){var t=this.invoke("toast",e);return t},goBack:function(e){var t=this.invoke("goBack",e);return t},showMerchantDetail:function(e){var t=this.invoke("showMerchantDetail",e);return t},setReturnClickListener:function(e){var t=this.getCallbackName("onClick","setReturnClickListener"),n=e.listenerFlag||0;if(1==n){if(!$.isFunction(e.onClick))return;this.setCallback(t,e.onClick)}var i={listenerFlag:n,callBackName:t},o=this.invoke("setReturnClickListener",i);return o},hideProgress:function(e){var t=this.invoke("hideProgress",e);return t},showColumn:function(e){var t=this.invoke("showColumn",e);return t},shareDetails:function(e){if(this.checkNotInApp(e))return!1;var t={title:e.title||document.title,titleUrl:e.titleUrl||location.href,content:e.content||document.title,imgurl:e.imgurl||document.imgurl,imgUrl:e.imgurl||document.imgurl,platform:e.platform||document.platform},n=this.invoke("shareDetails",t);return n},getContacts:function(e){var t=this.getCallbackName("onContactsReceive");$.isFunction(e.onContactsReceive)&&this.setCallback(t,e.onContactsReceive);var n={callBackName:t},i=this.invoke("getContacts",n);return i},onOrderSubmit:function(e){var t=this.invoke("onOrderSubmit",e);return t},getPushToken:function(e){return this.setAsyncCall("getPushToken",e)},onProductDetailOpened:function(e){var t=this.invoke("onProductDetailOpened",e);return t},isAndroid:function(){var e=navigator.userAgent,t=/fenqile_android_(\d{1,}\.\d{1,}\.\d{1,})/i,n=t.exec(e);return n?!0:!1},isIos:function(){var e=navigator.userAgent,t=/fenqile_ios_(\d{1,}\.\d{1,}\.\d{1,})/i,n=t.exec(e);return n?!0:!1},isIosV2Invok:function(){var e=navigator.userAgent,t=/wv_i_v2/i,n=t.exec(e);return n?!0:!1},getVersion:function(){var e=navigator.userAgent,t=/fenqile_(ios|android)_(\d{1,}\.\d{1,}\.\d{1,})/i,n=t.exec(e);return n?n[2]:""},getDeviceId:function(){var e=this.getDeviceInfo();return e?e.deviceId:""},isApp:function(){var e=navigator.userAgent,t=/fenqile_(ios|android)_(\d{1,}\.\d{1,}\.\d{1,})/i,n=t.exec(e);return n?!0:!1}},Util={outsideAppGuid:function(e){app.guide(e)},bridgeCall:function(e,t){jsBridge.isApp()?"function"==typeof e&&e():"function"==typeof t&&t()},jsBridgeReady:function(e){jsBridge.ready(e)},invokeJsBridge:function(e,t){var n=jsBridge[e](t);return n},logout:function(){this.invokeJsBridge("onLogOut"),location.href="/logout"},locationHref:function(e){jsBridge.isApp()&&/^http[s]?:\/\/[^\.]*\.(fenqile|juzilicai)\.com/.test(e)?this.invokeJsBridge("openUrl",{url:normalizeUrl(e)}):location.href=e},substitute:StrTool.substitute};module.exports=Util});
//# sourceMappingURL=http://m.fenqile.com/res/mod/widget/util.js.map
!function(e,t,o,n){var i=e(t);e.fn.lazyload=function(o){function r(){var t=0;l.each(function(){var o=e(this);if(!a.skip_invisible||"none"!==o.css("display"))if(e.abovethetop(this,a)||e.leftofbegin(this,a));else if(e.belowthefold(this,a)||e.rightoffold(this,a)){if(++t>a.failure_limit)return!1}else o.trigger("appear"),t=0})}var f,l=this,a={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return o&&(n!==o.failurelimit&&(o.failure_limit=o.failurelimit,delete o.failurelimit),n!==o.effectspeed&&(o.effect_speed=o.effectspeed,delete o.effectspeed),e.extend(a,o)),f=a.container===n||a.container===t?i:e(a.container),0===a.event.indexOf("scroll")&&f.on(a.event,function(){return r()}),this.each(function(){var t=this,o=e(t);t.loaded=!1,o.one("appear",function(){if(!this.loaded){if(a.appear){var n=l.length;a.appear.call(t,n,a)}e("<img />").on("load",function(){var n,i;o.hide().attr("src",o.data(a.data_attribute))[a.effect](a.effect_speed),t.loaded=!0,n=e.grep(l,function(e){return!e.loaded}),l=e(n),a.load&&(i=l.length,a.load.call(t,i,a))}).attr("src",o.data(a.data_attribute))}}),0!==a.event.indexOf("scroll")&&o.on(a.event,function(){t.loaded||o.trigger("appear")})}),i.on("resize",function(){r()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&i.on("pageshow",function(t){t=t.originalEvent||t,t.persisted&&l.each(function(){e(this).trigger("appear")})}),e(t).on("load",function(){r()}),this},e.belowthefold=function(o,r){var f;return f=r.container===n||r.container===t?i.height()+i.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(o).offset().top-r.threshold},e.rightoffold=function(o,r){var f;return f=r.container===n||r.container===t?i.width()+i[0].scrollX:e(r.container).offset().left+e(r.container).width(),f<=e(o).offset().left-r.threshold},e.abovethetop=function(o,r){var f;return f=r.container===n||r.container===t?i.scrollTop():e(r.container).offset().top,f>=e(o).offset().top+r.threshold+e(o).height()},e.leftofbegin=function(o,r){var f;return f=r.container===n||r.container===t?i[0].scrollX:e(r.container).offset().left,f>=e(o).offset().left+r.threshold+e(o).width()},e.inviewport=function(t,o){return!(e.rightoffold(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.fn,{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}($,window,document),define("/res/js/ex/lazyload.js",function(){});
//# sourceMappingURL=http://m.fenqile.com/res/js/ex/lazyload.js.map
