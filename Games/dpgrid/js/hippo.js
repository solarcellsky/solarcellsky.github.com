!function(){var n="hippo@1.2.13/lib/hippo3.js",t={},e=t;define(n,[],function(n,t,e){!function(){function n(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}function t(n){window.console&&console.log(n)}function o(n,t,e,o,r){var i=new Date;i.setTime(i.getTime()+24*e*60*60*1e3);var a=n+"="+t,c="expires="+i.toUTCString(),r="path="+r,o="domain="+o;document.cookie=[a,c,o,r].join(";")}function r(){var n=document.cookie.match(/_hc.v=([^;]+)/);return n?n[1]:null}function i(){return n()+"."+Math.round(+new Date/1e3)}function a(){for(var n=E.domain.split(".");n.length>2;)n.shift();var e="."+n.join("."),r=i();t("hippo:setHCV",r),o("_hc.v",r,365,e,"/")}function c(n){if(R)return n();if(L)return void x.push(n);L=!0,x.push(n);var e=P.DPApp&&P.DPApp.dequeue,o={callback:function(n,e){t("hippo:callback",n,e);var o=P[this._generateCallbackName(n)];o&&o.call(this,e)},_generateCallbackName:function(n){return"DPApp_callback_"+n},_generateCallbackId:function(){var n=Math.floor(1e3*Math.random()),t=+new Date;return+(t+""+n)},dequeue:function(){e&&e()},getRequestId:function(n){function e(){a.onload=a.onerror=null,a.parentNode&&a.parentNode.removeChild(a)}var o=n.success,r=this._generateCallbackId();P[this._generateCallbackName(r)]=function(n){o&&o(n)},t("hippo:callbackId "+r);var i="js://_?method=getRequestId&args=%7B%7D&callbackId="+r,a=document.createElement("iframe");a.style.display="none",a.onload=a.onerror=e,setTimeout(e,5e3),a.src=i,document.body.appendChild(a)}};if(P.DPApp){if(!P.DPApp.getRequestId)for(var r in o)P.DPApp[r]=o[r]}else P.DPApp=o;I(function(){DPApp.getRequestId({success:function(n){ut.reqid=R=n.requestId,t("reqid:"+n.requestId),x.forEach(function(n){n()}),L=!1}})})}function u(n,t,e,o){if(/com\.dianping/.test(navigator.userAgent)&&!R)return ut.appname="dianping",void c(function(){u(n,t,e,o)});var r=F+et(n,t,e);if(o)return void p(r);var i=setTimeout(function(){N[i]=!1;var n=new Image(1,1);O.push(n),f(n),n.src=r,r=null},0);N[i]=r}function f(n){["onload","onerror","onabort"].forEach(function(t){n[t]=function(){try{n.onload=n.onerror=n.onabort=null}catch(e){}"onabort"===t&&n.src&&p(n.src),s(n,O)}})}function s(n,t){for(var e,o=0,r=t.length;r>o;o++)if(e=t[o],e===n){t.splice(o,1);break}}function d(){return new XMLHttpRequest}function p(n){var t=V();/^evt|h5/.test(location.host)||(n=n.replace(z,"")),t.open("GET",n,!1),t.send()}function l(n){var t,e,o=encodeURIComponent,r=[];for(t in n)e=n[t],Object(e)!==e&&r.push(t+"="+o(e||""));return r.join("&")}function h(n,t,e){var o;if(t){for(o in t)e&&o in n||(n[o]=t[o]);return n}}function v(n,t){return"string"==typeof n&&Object(t)!==t}function _(n){return ct._setPageId(n),_}function m(n,t){ut[n]=t}function g(n){u(Z,[],n||ot),ot={}}function b(n,t){return n>0?n:t}function D(){ft=+new Date}function y(){var n,t=P.performance,e=t&&t.timing,o=ft-st,r=+new Date-st,i={r_pagetiming:1,r_ready:o,r_load:r};e&&h(i,{r_conn:e.connectEnd-e.connectStart,r_recev:e.responseEnd-e.responseStart,r_ready:b(e.domInteractive-e.domLoading,o),r_wait:e.responseStart-e.requestStart,r_load:b(e.loadEventStart-e.domLoading,r)}),((n=rt)||(n=P.DP&&DP.data&&DP.data("hippo_perf_version")))&&(i.test=n),ct.mv(i),dt(P,"load",y)}function I(n){if("complete"===E.readyState)return n();var t=E.documentElement.doScroll,e=t?"readystatechange":"DOMContentLoaded",o=function(){dt(E,e,o),dt(P,"load",o),n()};if(M(E,e,o),M(P,"load",o),t){var r=function(){try{t("left"),o()}catch(n){setTimeout(r,10)}},i=!1;try{i=null==P.frameElement}catch(a){}i&&r()}}var P=window,w=P._hip,E=P.document,q=E.location,C=E.referrer,T=q.href,j=P.screen,k=E.createElement("div"),S="addEventListener",A="removeEventListener",M=k[S]?function(n,t,e,o){n[S](t,e,!!o)}:function(n,t,e){n.attachEvent("on"+t,e)};if(w||(w=P._hip=[]),!w.loaded){w.loaded=!0;var O=[];w.queue=O;var R,L,N={},x=[];r()||a();var V=P.ActiveXObject?function(){if(P.XMLHttpRequest)try{return d()}catch(n){}try{return new P.ActiveXObject("Microsoft.XMLHTTP")}catch(n){}}:d,H=!1;P.onbeforeunload=P.onunload=function(){if(!H){H=!0;var n,t;for(n in N)t=N[n],t&&(clearTimeout(Number(n)),p(t))}};var X=0,G=0,J=0,U="www.dianping.com",B=function(){},z="//hls."+(/51ping/.test(E.domain)?"51ping":"dianping")+".com",F=z+"/hippo.gif?",K="__hsr",Q="__hsc",W="__hlh",Y="__hlr",Z="__pv",$="__mv",nt=function(){return P.JSON&&JSON.stringify||function(n){var t,e,o=[];for(t in n)e=n[t],Object(e)!==e&&o.push('"'+t+'":"'+(""+e).replace(/"/g,'\\"')+'"');return"{"+o.join(",")+"}"}}(),tt=Array.prototype;tt.forEach||(tt.forEach=function(n,t){for(var e=0,o=this.length;o>e;e++)e in this&&n.call(t,this[e],e,this)});var et=function(){var n,t,e,o,r={};return(e=j)&&(n=e.height,t=e.width,n&&t&&(r[K]=t+"x"+n),(o=e.colorDepth)&&(r[Q]=o+"bit")),function(n,t,e){e=e||{},h(e,ut,!1);var o={__hlt:U,__ppp:X,__had:nt(e),force:+new Date};return h(o,r),T&&(o[W]=T),C&&(o[Y]=C),t.push(J+"|"+G),o[n]=t.join("|"),l(o)}}(),ot={};h(_,{ext:function(n,t){var e;if(Object(n)===n)for(e in n)_.ext(e,n[e]);else v(n,t)&&(ot[n]=t);return _},rxt:function(n){return"string"==typeof n?delete ot[n]:arguments.length||(ot={}),_},pv:function(n,t){return ct._setCityId(n),ct._setShopType(t),ct._setPVInitData(ot),_},mv:function(n,t){return v(n,t)&&(ot[n]=t,ct.mv(ot)),_}}),document.hippo=_;var rt,it=!0,at=!0,ct={_setPageId:function(n){X=n>>>0},_setCityId:function(n){J=n>>>0},_setShopType:function(n){G=n>>>0},_setPVInitData:function(n){ct._setPVInitData=B,setTimeout(function(){g(n)},0)},_autoPV:function(n){it=n},_autoPageTiming:function(n){at=n},_setPageTimingVer:function(n){rt=n},_setReferrer:function(n){C=n},_setHref:function(n){T=n},_setRequestId:function(n){m("reqid",n)},_setGuid:function(n){m("serverguid",n)},_setCustomConst:m,mv:function(n,t){u($,["",""],n||ot,t),ot={}},pv:function(n){g(n)}},ut={};w.push=function(n){var t,e;n&&(t=n.shift(),e=ct[t],e&&e.apply(null,n))},w.forEach(function(n){w.push(n)}),it&&w.push(["_setPVInitData"]),w.length=0;var ft,st=P.G_rtop,dt=k[A]?function(n,t,e,o){n[A](t,e,!!o)}:function(n,t,e){n.detachEvent("on"+t,e)};at&&(I(D),M(P,"load",y)),"undefined"!=typeof e&&e.exports&&(e.exports=w)}}()},{main:!0,map:e})}();