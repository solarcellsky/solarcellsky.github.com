!function(a){function b(a){var b=0;return parseFloat(a.replace(/\./g,function(){return 0===b++?".":""}))}var c={},d=a.navigator,e=d&&d.userAgent||"",f={os:void 0,mobile:void 0,android:void 0,ios:void 0,iphone:void 0,ipad:void 0,ipod:void 0},g={platform:"",version:"",isInTaobaoApp:"noRecord",URLInfo:"",UAWindVaneInfo:""};c.depend={android:"3.99",ios:"3.99"},function(){var a;/ Mobile\//.test(e)&&e.match(/iPad|iPod|iPhone/)?(f.mobile="apple",a=e.match(/OS ([^\s]*)/),a&&a[1]&&(f.ios=b(a[1].replace("_","."))),f.os="ios",a=e.match(/iPad|iPod|iPhone/),a&&a[0]&&(f[a[0].toLowerCase()]=f.ios)):/ Android/i.test(e)&&(/Mobile/.test(e)&&(f.os=f.mobile="android"),a=e.match(/Android ([^\s]*);/),a&&a[1]&&(f.android=b(a[1])))}(),c.util={ua:f,isInTaobaoApp:function(){var a,b=this.__hasURLTTIDInfo().hasTaobaoURLTTID,c=this.__hasUAWindVaneInfo().hasUAWindVaneInfo;return a=c?!0:b?!0:!1,g.isInTaobaoApp=a,a},__hasURLTTIDInfo:function(){var a={},c=decodeURIComponent(window.location.href),d=c.match(/(?:\?|&)ttid=(?:.*)@taobao_(iphone|android|ipad)_((?:\d+\.){2,3}\d)/i);return a.hasTaobaoURLTTID=d?!0:!1,a.hasTaobaoURLTTID&&(a.platform=d[1],a.version=b(d[2])),g.URLInfo=a,a},__hasUAWindVaneInfo:function(){var a={},c=d.userAgent,e=c.match(/@taobao_(iphone|android|ipad)_((?:\d+\.){2,3}\d)/i);return a.hasUAWindVaneInfo=e?!0:!1,e&&(a.version=b(e[2]),a.platform=g.platform),g.UAWindVaneInfo=a,a},__hasClientVersion:function(){var a="",b="noRecord"!=g.isInTaobaoApp?g.isInTaobaoApp:this.isInTaobaoApp(),c=g.URLInfo,d=g.UAWindVaneInfo,a="";return b&&(a=d.version||c.version),g.version=a,a},addStyleSheet:function(a){var b=document.createElement("style"),c=document.getElementsByTagName("head")[0];c.appendChild(b),b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))},getUrlParam:function(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b);return null!=c?unescape(c[2]):null}},a.JAE=c}(window),!function(win,undef){function compareVersion(a,b){var c=0,d=0;return a=a.split("."),b=b.split("."),c=parseFloat(1e3*(parseInt(a[0])||0)+parseInt(a[1])+"."+parseInt(a[2]||0)),d=parseFloat(1e3*(parseInt(b[0])||0)+parseInt(b[1])+"."+parseInt(b[2]||0)),c>=d}function callback(a,b){isAndroid&&!compareVersion(osVersion,"2.4.0")?setTimeout(function(){a&&a(b.value||b)},1):a&&a(b.value||b)}var doc=win.document,ua=win.navigator.userAgent,isIOS=/iPhone|iPad|iPod/i.test(ua),isAndroid=/Android/i.test(ua),isWindVane=/WindVane/i.test(ua),osVersion=ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),wvVersion=ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),hasOwnProperty=Object.prototype.hasOwnProperty,WindVane=win.WindVane||(win.WindVane={}),WindVane_Native=win.WindVane_Native,callbackMap={},inc=1,iframePool=[],iframeLimit=3,LOCAL_PROTOCOL="hybrid",WV_PROTOCOL="wv_hybrid",IFRAME_PREFIX="iframe_",SUCCESS_PREFIX="suc_",FAILURE_PREFIX="err_",PARAM_PREFIX="param_";osVersion=osVersion?(osVersion[1]||"0.0.0").replace("_","."):"0.0.0",wvVersion=wvVersion?(wvVersion[1]||"0.0.0").replace("_","."):"0.0.0";var WV_Core={call:function(a,b,c,d,e,f){var g;g=f>0?setTimeout(function(){WV_Core.onFailure(g,{ret:"TIMEOUT"})},f):WV_Private.getSid(),WV_Private.registerCall(g,d,e),isAndroid?compareVersion(wvVersion,"2.7.0")?WV_Private.callMethodByPrompt(a,b,WV_Private.buildParam(c),g+""):WindVane_Native&&WindVane_Native.callMethod&&WindVane_Native.callMethod(a,b,WV_Private.buildParam(c),g+""):isIOS&&WV_Private.callMethodByIframe(a,b,WV_Private.buildParam(c),g+"")},fireEvent:function(a,b){var c=doc.createEvent("HTMLEvents");c.initEvent(a,!1,!0),c.param=WV_Private.parseParam(b),doc.dispatchEvent(c)},getParam:function(a){return WV_Private.params[PARAM_PREFIX+a]||""},onSuccess:function(a,b){clearTimeout(a);var c=WV_Private.unregisterCall(a).success,d=WV_Private.parseParam(b);callback(c,d),WindVane_Native||WV_Private.onComplete(a)},onFailure:function(a,b){clearTimeout(a);var c=WV_Private.unregisterCall(a).failure,d=WV_Private.parseParam(b);callback(c,d),WindVane_Native||WV_Private.onComplete(a)}},WV_Private={params:{},buildParam:function(a){return a&&"object"==typeof a?JSON.stringify(a):a||""},parseParam:function(str){if(str&&"string"==typeof str)try{obj=JSON.parse(str)}catch(e){obj=eval("("+str+")")}else obj=str||{};return obj},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+inc++},registerCall:function(a,b,c){b&&(callbackMap[SUCCESS_PREFIX+a]=b),c&&(callbackMap[FAILURE_PREFIX+a]=c)},unregisterCall:function(a){var b=SUCCESS_PREFIX+a,c=FAILURE_PREFIX+a,d={success:callbackMap[b],failure:callbackMap[c]};return delete callbackMap[b],delete callbackMap[c],d},useIframe:function(a,b){var c=IFRAME_PREFIX+a,d=iframePool.pop();d||(d=doc.createElement("iframe"),d.setAttribute("frameborder","0"),d.style.cssText="width:0;height:0;border:0;display:none;"),d.setAttribute("id",c),d.setAttribute("src",b),d.parentNode||setTimeout(function(){doc.body.appendChild(d)},5)},retrieveIframe:function(a){var b=IFRAME_PREFIX+a,c=doc.querySelector("#"+b);iframePool.length>=iframeLimit?doc.body.removeChild(c):iframePool.push(c)},callMethodByIframe:function(a,b,c,d){var e=LOCAL_PROTOCOL+"://"+a+":"+d+"/"+b+"?"+c;this.params[PARAM_PREFIX+d]=c,this.useIframe(d,e)},callMethodByPrompt:function(a,b,c,d){var e=LOCAL_PROTOCOL+"://"+a+":"+d+"/"+b+"?"+c,f=WV_PROTOCOL+":";this.params[PARAM_PREFIX+d]=c,window.prompt(e,f)},onComplete:function(a){this.retrieveIframe(a),delete this.params[PARAM_PREFIX+a]}};for(var key in WV_Core)hasOwnProperty.call(WindVane,key)||(WindVane[key]=WV_Core[key])}(window),!function(a,b){function c(a,b){return function(c){if("function"==typeof a){if(c.errorCode){switch(parseInt(c.errorCode)){case 1:c.errorMsg="Platform System Error";break;case 11:c.errorMsg="Insufficient isv permissions";break;case 14:c.errorMsg="Network Error";break;case 16:c.errorMsg="Missing UserNick";break;case 21:c.errorMsg="Missing Method";break;case 22:c.errorMsg="Invalid Method";break;case 23:c.errorMsg="Invalid Format";break;case 26:c.errorMsg="Missing Session";break;case 27:c.errorMsg="Invalid Session";break;case 28:c.errorMsg="Missing appKey";break;case 40:c.errorMsg="Missing Required Arguments";break;case 41:c.errorMsg="Invalid Arguments";break;case 46:c.errorMsg="Invoke Timeout";break;case 58:c.errorMsg="Missing SellerNick";break;default:c.errorMsg=""}if(b&&b.jsgateway)switch(b.api){case"camera":switch(parseInt(c.errorCode)){case 101:c.errorMsg="\u7528\u6237\u53d6\u6d88\u3001\u672a\u9009\u62e9\u56fe\u7247\u3001\u672a\u62cd\u7167";break;case 103:c.errorMsg="\u56fe\u7247\u4e0a\u4f20\u9519\u8bef";break;case 104:c.errorMsg="\u7528\u6237\u672a\u767b\u5f55";break;case 105:c.errorMsg="\u62cd\u7167\u7ec4\u4ef6\u5df2\u542f\u52a8\uff0c\u91cd\u590d\u542f\u52a8\u62cd\u7167\u7ec4\u4ef6"}break;case"location":switch(parseInt(c.errorCode)){case 101:c.errorMsg="\u5b9a\u4f4d\u5931\u8d25"}}}a(c)}}}function d(a,b){for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1}if(b){var e=a.document,f=a.JAE||(a.JAE={}),g=f.bridge={},h=a.JAE.util.__hasClientVersion(),i=!h||parseFloat(h)>=4.013,j=function(){var a=document.getElementsByTagName("script"),b=a[a.length-1],c=b.src,d="";return c.indexOf("appkey=")>0&&(d=c.slice(c.indexOf("appkey=")+7)),d}();g.netType=function(a,d,e){if(i){var f={apiName:"taobao.jae.client.context",methodName:"getNetworkStatus",methodParam:"",appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",f,c(a),c(d))}else b.call("TBBase","getNetworkStatus","",c(a),c(d))},g.getEnvironment=function(a,d,e){if(i){var f={apiName:"taobao.jae.client.context",methodName:"getEnvironment",methodParam:"",appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",f,c(a),c(d))}else b.call("TBBase","getEnvironment","",c(a),c(d))},g.vibrate=function(a,d,e){if(i){var f={apiName:"taobao.jae.client.interaction",methodName:"vibrate",methodParam:"",appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",f,c(a),c(d))}else b.call("WVMotion","vibrate","",c(a),c(d))},g.shake=function(){var f,g=[];return e.addEventListener("motion.shake",function(b){g.forEach(function(c){a.clearTimeout(f),c(b)})},!1),{startWatch:function(e,h,k){if(0===g.length){var l={on:!0};if(i){var m={apiName:"taobao.jae.client.interaction",methodName:"listeningShake",methodParam:l,appKey:j,accessToken:k?k.accessToken?k.accessToken:"":""};b.call("JAEJSGateway","invoke",m,c(function(){}),c(h))}else b.call("WVMotion","listeningShake",l,c(function(){}),c(h))}d(g,e)<0&&g.push(e),k&&k.timeout&&0<k.timeout&&(a.clearTimeout(f),f=a.setTimeout(h,k.timeout))},stopWatch:function(a,e,f){var h=null;if(h){var k;(k=d(g,h))>=0&&g.splice(k,1)}else g=[];if(0===g.length){var l={on:!1};if(i){var m={apiName:"taobao.jae.client.interaction",methodName:"listeningShake",methodParam:l,appKey:j,accessToken:f?f.accessToken?f.accessToken:"":""};b.call("JAEJSGateway","invoke",m,c(a),c(e))}else b.call("WVMotion","listeningShake",l,c(a),c(e))}}}}(),g.blow=function(){var a;return{listenBlow:function(d,f,g,h){if(i){var k={apiName:"taobao.jae.client.interaction",methodName:"listenBlow",methodParam:"",appKey:j,accessToken:h?h.accessToken?h.accessToken:"":""};b.call("JAEJSGateway","invoke",k,function(b){d&&d(b),g&&(a=function(a){a&&a.param&&g(a.param)},e.addEventListener("motion.blow",a,!1))},c(f))}else b.call("WVMotion","listenBlow","",function(b){d&&d(b),g&&(a=function(a){a&&a.param&&g(a.param)},e.addEventListener("motion.blow",a,!1))},c(f))},stopListenBlow:function(d,f,g){if(i){var h={apiName:"taobao.jae.client.interaction",methodName:"stopListenBlow",methodParam:"",appKey:j,accessToken:g?g.accessToken?g.accessToken:"":""};b.call("JAEJSGateway","invoke",h,function(b){a&&e.removeEventListener("motion.blow",a,!1),d&&d(b)},c(f))}else b.call("WVMotion","stopListenBlow","",function(b){a&&e.removeEventListener("motion.blow",a,!1),d&&d(b)},c(f))}}}(),g.geolocation=function(){return{get:function(a,d,e){if(i){var f={apiName:"taobao.jae.client.location",methodName:"getLocation",methodParam:e,appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",f,function(b){a(b)},c(d,{api:"location",jsgateway:!0}))}}}}(),g.camera=function(){return{takePhoto:function(a,d,e){if(i){var f={apiName:"taobao.jae.client.camera",methodName:"takePhoto",methodParam:{type:1},appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",f,c(a),c(d,{api:"camera",jsgateway:!0}))}}}}(),g.share=function(a,d,e){if(!(e&&e.title&&e.text&&e.image&&e.url))return alert("\u5206\u4eab\u4fe1\u606f\u4e0d\u5168\uff0c\u65e0\u6cd5\u5206\u4eab\uff01"),void 0;var f={title:e.title,text:e.text,url:e.url.replace("ttid","tt_id"),image:e.image};if(i){var g={apiName:"taobao.jae.client.sharing",methodName:"showSharingMenu",methodParam:f,appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",g,function(b){b.params=f,a(b)},c(function(a){a.params=f,d(a)}))}else b.call("TBSharedModule","showSharedMenu",f,function(b){b.params=f,a(b)},function(a){a.params=f,d(a)})},g.share.openTaobaoAPPNativeShare=function(a,b,c,d,e,f){g.share(e,f,{title:a,text:b,url:c,image:d})},g.weFollow=function(a,d,e){if(i){var f={apiName:"taobao.jae.client.relation",methodName:"showFollowButton",methodParam:e,appKey:j,accessToken:e?e.accessToken?e.accessToken:"":""};b.call("JAEJSGateway","invoke",f,function(b){b.option=e,a(b)},c(function(a){a.option=e,d(a)}))}else b.call("TBBase","showFollowButton",e,function(b){b.option=e,a(b)},function(a){a.option=e,d(a)})}}}(window,window.WindVane),!function(a){if(a){var b=a.util;a.depend[b.ua.os]}}(window.JAE),!function(a){function b(a,b,d){var e=c.createElement("script");e.charset=d||"utf-8",e.async=!0,e.src=a,e.charset=d,e.onload=function(){try{b()}catch(a){}},c.getElementsByTagName("head")[0].appendChild(e)}var c=a.document,d="//g.alicdn.com/mtb/lib-smartbanner/0.3.4/smartbanner.js";if(!a.lib||!a.lib.smartbanner){var e=(!!a.navigator.userAgent.match(/T-UA=/),!!(a.location.href.indexOf("pepsi.we.jaeapp.com")>0)),f=!!(a.location.href.indexOf("spring.we.jaeapp.com")>0);JAE.util.isInTaobaoApp()||e||f||a.addEventListener("load",function(){b(d,function(){localStorage&&(localStorage.setItem("closeDate",""),localStorage.setItem("smpopCloseDate",""));lib.smartbanner({type:"banner",href:encodeURI(location.href.replace(/^http:\/\//,"")),title:"\u4e0a\u6dd8\u5b9d\u770b\u5fae\u6dd8\uff0c\u5404\u79cd\u7cbe\u5f69\uff01",text:"\u7acb\u5373\u6253\u5f00",dpr:1})},"utf-8")},!1)}}(window);