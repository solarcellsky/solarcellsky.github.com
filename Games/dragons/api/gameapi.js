// gameapi.js

window.famobi_gameID = window.famobi_gameID || '';
window.famobi_gameJS = window.famobi_gameJS || [];



var detection = (function() {
	var mod = {is:{}},
		d,
		ua = navigator.userAgent;
	mod.detect = {
		html5: function() {
			return document.createElement('canvas').getContext !== undefined;
		},
		touch: function() {
			var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
			return !!supportsTouch;
		},
		android: function() {
			return !!ua.match(/Android/i);
		},
		ios: function() {
			return !!ua.match(/iPhone|iPad|iPod/i);
		},
		ios7: function(){
			return mod.detect.ios && ua.match(/version\/7\./i);
		},
		bb10: function() {
			return !!ua.match(/BB10/i);
		},
		windows: function() {
			return !!ua.match(/Windows/i);
		},
		webkitVersion: function() {
			var regex = new RegExp(/AppleWebKit\/([\d.]+)/),
				result = regex.exec(ua),
				webkitVersion = result === null ? false : parseFloat(result[1]);
			return webkitVersion;
		},
		androidStockBrowser: function() {
			if (mod.is.android && mod.is.webkitVersion && mod.is.webkitVersion < 537) {
				return true;
			}
			return false;
		},
		standalone: function() {
			return !!window.navigator.standalone;
		},
		smartphone: function() {
			return (ua.match(/Android.*Mobile|iPhone|IEMobile|WPDesktop|BB10/i)) ? true : false;
		},
		tablet: function() {
			if(window.self != window.top)
				return false;
			// Android smartphones have the combination Android...Mobile, tablets only Android
			var androidTablet = (mod.is.android && !mod.is.smartphone),
				iPad = ua.match(/iPad/i) ? true : false;
			return (androidTablet || iPad);
		},
		pc: function() {
			return (!mod.is.smartphone && !mod.is.tablet);
		},
		phantom: function() {
			return !!(window.callPhantom || ua.match(/PhantomJS/));
		},
		iframe: function(){
			return window.self != window.top;
		}
	};

	for (d in mod.detect) {
		if (typeof mod.detect[d] === 'function') {
			mod.is[d] = mod.detect[d]();
		}
	}

	return mod;
})();



/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);



// see https://github.com/blai/fashionista/issues/2
;(function ($) {
	$.getScript = function(src, func, error_func) {
		var script = document.createElement('script');
		script.async = "async";
		script.src = src;
		if (func) {
			script.onload = func;
		}
		if (error_func) {
			script.onerror = error_func;
		}
		document.getElementsByTagName("head")[0].appendChild( script );
	}
})(Zepto);



faZepto = Zepto;



fg_api.prototype.adsModule = function() {
	var self = this,
		M;

	function module() {
		this.callback = function() {};
	}

	module.prototype.init = function() {
		self.config.ads = faZepto.extend({
			"off": (self.config.gameParams.ad_type === "off"),
			"show_initial": false,
			"show_video": false
		}, self.config.ads);

		if (self.config.ads.off) {
			M.provider = "none";
		} else {
			M.provider = self.config.ads.provider;
		}

		if (self.config.aid == 'A1000-1' && window.top !== window.self) {
			M.provider = 'housead';
		}

		M.timeoutActive = null;
		M.adcount = 0;
		M.show_initial = self.config.ads.show_initial && !self.config.ads.off;
		M.show_video = self.config.ads.show_video;

		// halt the loading of the game until showClick2PlayOverlay() callback is fired.
		self.game.setWaiting(M.show_initial);

		switch (M.provider) {
			case 'adsense':
			case 'adx':
				M.provider = 'dfp';
			case 'dfp':
				faZepto.getScript("https://imasdk.googleapis.com/js/sdkloader/ima3.js",
					sdkLoadedCallback,
					function() {
						sdkLoadedCallback();
						self.tracking.trackEvent("AdBlocker event", "DFP", famobi_gameID);
					});

				M.dfp_ad_unit_code = '/37336410/InGameInterstitial//' + self.config.aid + '//d0';
				break;
			case 'none':
				self.config.ads.off = true;
			case 'housead':
			default:
				// no external scripts neccessary
				if (typeof sdkLoadedCallback == "function") {
					sdkLoadedCallback();
				}
				break;
		}

		function sdkLoadedCallback() {
			if (typeof google != "undefined" && google.ima) {
				google.ima.settings.setLocale(self.gametranslation.getUserLang());
				google.ima.AdsRenderingSettings.AUTO_SCALE = true;
				google.ima.AdsRenderingSettings.autoAlign = false;
				google.ima.AdsRenderingSettings.useStyledNonLinearAds = true;
				google.ima.AdsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

				google.ima.settings.setVpaidAllowed(true);
				//google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE);
			}

			if (M.show_initial) {
				M.showAd(function() {
					self.game.setWaiting(false);
					self.game.init();
				});
			} else {
				M.delayNextAdModal(true);
			}
		};
	};

	module.prototype.showClick2PlayOverlay = function(callback, force) {
		if (M.playBtnContainer) {
			M.fireAdCallback();
			return false;
		}

		if (!force && M.delayNextAdModal()) {
			M.fireAdCallback();
			return false;
		}

		// Pause game
		self.game.pause();

		var friendly_name = "";

		switch (window.famobi_gameID) {
	        case "embed-game":
	        case "test-game":
	        case "flash-game":
	            break;
	        default:
	            friendly_name = JSON.parse(self.config.name);
	    }

		M.playBtnContainer = self.createElement("div", {
			"class": "fg-click2play" + (M.adcount > 0 ? " fg-click2play-continue" : "") + (detection.is.smartphone ? " smartphone" : "")
		});

		M.gameIcon = self.createElement("div", {
			"class": "fg-gameicon",
			"title": friendly_name
		});
		if (typeof self.config.thumb !== "undefined") {
			var nImg = document.createElement('img');
			nImg.src = self.config.thumb;
			nImg.onload = function(){
				M.gameIcon.innerHTML = '<img src="' + self.config.thumb + '" alt>';
			}
		}
		M.playBtnStage = self.createElement("div", {
			"class": "fg-click2play-stage"
		});
		if (self.config.gameParams.header_image && self.config.gameParams.header_image != '') {
			faZepto(M.playBtnContainer).css('background', 'center center url(https://img.cdn.famobi.com/portal/html5games/images/tmp/' + self.config.gameParams.header_image + ')')
				.css('background-size', '100% auto')
				.css('background-size', 'cover')
				.css('background-repeat', 'no-repeat');
		}
		M.playBtn = self.createElement("div", {
			"class": "btn-play",
			"title": (M.adcount > 0 ? self.__('api.continue') : self.__('api.play_now'))
		});

		M.gameDetails = self.createElement("div", {
			"class": "fg-gameDetails"
		});

		if(M.adcount < 1) {
			var gameLanguages = [];
			var tmpGameLanguages = famobi.gametranslation.getSupportedLanguages();

			// ignore affiliate specific translations
			for(var i = 0; i < tmpGameLanguages.length; i++){
				if(tmpGameLanguages[i].indexOf(".") > -1) {
					continue;
				}
				gameLanguages.push(tmpGameLanguages[i]);
			}

			if(typeof gameLanguages != 'undefined' && gameLanguages.length > 0) {
				M.gameLanguagesContainer = self.createElement("ul", {
					"class": "fg-gameLanguages"
				});

				var gameLanguageLis = '';
				var currentLanguage = famobi.getCurrentLanguage();

				for(var i = 0; i < gameLanguages.length; i++) {

					var currentLanguageClass = '';
					if(currentLanguage == gameLanguages[i]) currentLanguageClass = 'class="selected"';

					gameLanguageLis += '<li data-switch-lang="'+gameLanguages[i]+'"'+currentLanguageClass+'><a href="javascript:void(0);"><img src="//img.cdn.famobi.com/flags/flag_'+gameLanguages[i]+'.png" alt="'+gameLanguages[i]+'"></a></li>';
				}

				M.gameLanguagesContainer.innerHTML = gameLanguageLis;
			}
		} else {
			M.nextGame = self.createElement("div", {
				"class": "fg-nextGame"
			});

			var svgs = {};
			svgs.left = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-313 429 20 20" style="enable-background:new -313 429 20 20;" xml:space="preserve"><g><path d="M-294.4,434.9l0.1,8.7l-6.8-4.4L-294.4,434.9 M-293.4,433.1l-9.6,6.1l9.6,6.2L-293.4,433.1L-293.4,433.1z"/></g><g><path d="M-304.1,434.9l0.1,8.7l-6.8-4.4L-304.1,434.9 M-303.1,433.1l-9.6,6.1l9.6,6.2L-303.1,433.1L-303.1,433.1z"/></g></svg>';
			svgs.home = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-273 389 100 100" style="enable-background:new -273 389 100 100;" xml:space="preserve"><path d="M-189.2,473.2v-33.7h8.4l-42.2-40.1l-42.2,40.1h8.4v33.7c0,2.5,1.7,4.3,4.2,4.3h59.1C-190.9,477.5-189.2,475.7-189.2,473.2" /></svg>';
			svgs.right = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-313 429 20 20" style="enable-background:new -313 429 20 20;" xml:space="preserve"><polygon points="-312.6,433.1 -303,439.2 -312.6,445.4 "/><polygon points="-302.9,433.1 -293.4,439.2 -303,445.4 "/></svg>';

			// Show back link only if game is part of crosspromtion games array
			if(self.navigation.findActiveGamePosition() > -1) {
				M.nextGame.innerHTML = '<a href="javascript:void(0);" data-famobi-href="previousGame">'+svgs.left+self.__('api.previous')+'</a>';
			} else {
				M.nextGame.innerHTML = '<a href="javascript:void(0);" class="inactive">'+svgs.left+self.__('api.previous')+'</a>';
			}

			M.nextGame.innerHTML = M.nextGame.innerHTML + '<a href="javascript:void(0);" data-famobi-href="moreGames" class="home">'+svgs.home+self.__('api.home')+'</a><a href="javascript:void(0);" data-famobi-href="nextGame">'+svgs.right+self.__('api.next')+'</a>';
		}


		// M.fbShareBtn = self.createElement("div", {
		// 	"class": "fb-share-button",
		// 	"data-href" : self.getShortLink(),
		// 	"data-layout" : "box_count"
		// });
		M.playBtnContainer.appendChild(M.playBtnStage);
		M.playBtnStage.appendChild(M.gameDetails);
		M.gameDetails.appendChild(M.gameIcon);
		M.gameDetails.appendChild(M.playBtn);

		if(typeof M.gameLanguagesContainer !== "undefined" && M.adcount < 1) {
			M.playBtnStage.appendChild(M.gameLanguagesContainer);
		} else if(typeof M.nextGame !== "undefined" && self.config.aid.indexOf("A1") === 0) {
			M.playBtnStage.appendChild(M.nextGame);
		}
		self.rootElement.appendChild(M.playBtnContainer);
		self.navigation.bindEvents();

		var showAppStoreBtns = false;
		if (showAppStoreBtns) {
			switch (window.famobi_gameID) {
				case "smarty-bubbles":
				case "smarty-bubbles-xmas":
					M.android_app_id = 'air.app.smartybubbles';
					// M.android_app_id = 'com.famobi.smartybubblesxmas';
					M.ios_app_id = '687228943';
					break;
				case "penalty-2014":
					M.android_app_id = 'air.app.PenaltyLeague';
					M.ios_app_id = '713998332';
					break;
				case "world-cup-penalty":
					M.android_app_id = 'air.app.game.worldcupsoccer';
					M.ios_app_id = '876368640';
					break;
				case "slacking-school":
					M.android_app_id = 'app.slacking.school';
					M.ios_app_id = '980591339';
					break;
				case "parking-passion":
					M.android_app_id = 'app.parkingpassion';
					M.ios_app_id = '995990296';
					break;
				case "jewelish":
					M.android_app_id = 'air.app.jewelish';
					M.ios_app_id = '1033533840';
					break;
				case "fruita-swipe-2":
					M.android_app_id = 'app.fruita_swipe_2';
					M.ios_app_id = '988691670';
					break;
				case "heavenly-sweet-donuts":
					M.android_app_id = 'app.sweetdonuts';
					M.ios_app_id = '992370173';
					break;
				case "butterfly-chocolate-cake":
					M.android_app_id = 'app.emma.butterflycake';
					M.ios_app_id = '977647789';
					break;
				case "zucchini-spaghetti-bolognese":
					M.android_app_id = 'app.emma.spaghetti';
					M.ios_app_id = '983923650';
					break;
				case "animal-quiz":
					M.android_app_id = 'app.animalquiz';
					M.ios_app_id = '1034728521';
					break;
				case "office-love":
					M.android_app_id = 'app.officelove';
					M.ios_app_id = '990941741';
					break;
				case "fruita-crush":
					M.android_app_id = 'app.fruitacrush';
					M.ios_app_id = '';
					break;
				case "1010-animals":
					M.android_app_id = 'app.animals1010';
					M.ios_app_id = '';
					break;
				case "flow-free":
					M.android_app_id = 'app.flowfree';
					M.ios_app_id = '';
					break;
				case "lovetester":
					M.android_app_id = 'com.famobi.lovetest';
					M.ios_app_id = '863098259';
					break;
				default:
					M.android_app_id = '';
					M.ios_app_id = '';
			}

			M.storeBtn = self.createElement("div", {
				"class": "fg-cross-link-apps",
				"title": (detection.is.android || detection.is.ios) ? friendly_name : ''
			});

			if (detection.is.android) {
				if (M.android_app_id != '') {
					M.storeBtn.innerHTML = '<a class="fg-cross-link-android" href="https://play.google.com/store/apps/details?id=' + M.android_app_id + '&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" title="now available on the Google Play Store"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"></a>';
				} else {
					faZepto(M.storeBtn).addClass('fg-cross-link-generic');
					M.storeBtn.innerHTML = '<a class="fg-cross-link-android" href="https://play.google.com/store/apps/developer?id=Famobi" title="Do you like new cool apps?"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"></a>';
				}
			}
			if (detection.is.ios) {
				if (M.ios_app_id != '') {
					M.storeBtn.innerHTML = '<a class="fg-cross-link-ios" href="https://itunes.apple.com/app/id' + M.ios_app_id + '?mt=8" title="now available on the App Store"><img alt="Download on the App Store" src="https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"></a>';
				} else {
					faZepto(M.storeBtn).addClass('fg-cross-link-generic');
					M.storeBtn.innerHTML = '<a class="fg-cross-link-ios" href="https://itunes.apple.com/de/developer/famobi/id933760663" title="Do you like new cool apps?"><img alt="Download on the App Store" src="https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"></a>';
				}
			}
			// Do not show app store links initially
			if (self.debug || !M.show_initial) {
				M.playBtnContainer.appendChild(M.storeBtn);
			} else {
				// M.playBtnContainer.appendChild(M.fbShareBtn);
				// self.facebook.parse();
				// self.handleClick(faZepto('.fb-share-button span').get(0), function () {
				// 	self.tracking.trackEvent('Target', 'FB Share', window.famobi_gameID);
				// });
			}
		}

		function startVideoCallback() {
			faZepto(M.playBtnContainer).remove();
			M.playBtnContainer = undefined;

			try {
				if (M.show_initial && !detection.is.pc && !detection.is.ios && self.hasFeature('fullscreen')) {
					self.fullscreen.start();
				}
			} catch (error) {
				self.log(error);
			}

			M.showIMA(function() {
			    self.orientation.lock();
				M.fireAdCallback();
			}, force);

			return false;
		};
		self.handleClick(M.playBtnContainer, startVideoCallback);

		if (showAppStoreBtns) {
			self.handleClick(M.storeBtn, function() {
				var url = faZepto(this).find('a').attr('href');

				self.tracking.trackEvent("Target", (detection.is.android ? 'Play Store' : 'App Store'), famobi_gameID);
			});
		}

		// try enabling the overlay on desktop
		if (!M.show_initial && detection.is.pc) {
			// user interaction not required on desktop
			startVideoCallback();
		} else {
			// hide spinner, show play button
			self.spinner.hide();
			// M.playBtnContainer.style.visibility = 'visible';

			setTimeout(function() {
				M.playBtnContainer.style.left = '0%';
			}, 250);
		}
	};

	module.prototype.showAd = function(callback, force) {
		if (self.adapters.run("ads", "show", callback, force)) {
			return false;
		}

		M.closeCallback = callback;

		switch (M.provider) {
			case 'dfp':
				if (false && M.show_initial) {
					return M.showClick2PlayOverlay(callback, force);
				}
				return M.showIMA(callback, force);
			case 'housead':
				return M.showHouseAd(callback, force);
			default:
				return M.fireAdCallback();
		}
	};

	module.prototype.forceAd = function(callback) {
    	self.tracking.trackEvent('Ad Event', 'Force Ad', famobi_gameID);
    	
		if (self.adapters.run("ads", "show", callback, true)) {
			return false;
		}

		return M.showAd(callback, true);
	};

	module.prototype.rewardedAd = function(callback) {
	    self.tracking.trackEvent('Ad Event', 'Rewarded Ad', famobi_gameID);
	    
		if (self.adapters.run("ads", "rewarded", callback)) {
			return false;
		}

		M.closeCallback = callback;

		return M.fireAdCallback();
	};

	module.prototype.showIMA = function(callback, force) {
		if (!M.initAdModal({
				"returnCallback": callback,
				"force": force,
				"iframeAllowed": self.config.ads.dfp_available
			})) {
			return false;
		}

		// @see https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/quickstart
		M.adContainerElement = document.createElement('div');
		M.adContainerElement.className = 'fg-ad-container';
		M.adContainerElement.style.zIndex = '9999990';
		M.adContainerElement.style.margin = '0 auto 0';
		self.rootElement.appendChild(M.adContainerElement);

		M.adMaxWidth = window.innerWidth;
		M.adWidth = Math.min(window.innerWidth, M.adMaxWidth) + "px";
		M.adMaxHeight = window.innerHeight - 65;
		M.adHeight = M.adMaxHeight + "px";

		try {
			M.adDisplayContainer = new google.ima.AdDisplayContainer(M.adContainerElement);

			M.adDisplayContainer.initialize();
			M.adsLoader = new google.ima.AdsLoader(M.adDisplayContainer);

			M.showAdModal({
				"returnCallback": callback,
				"width": parseInt(M.adWidth),
				"height": parseInt(M.adHeight)
			}, M.adContainerElement);
		} catch (reason) {
			self.modal.close();

			if (M.adsLoader)
				M.adsLoader.destroy();
			if (M.adDisplayContainer)
				M.adDisplayContainer.destroy();

			self.rootElement.removeChild(M.adContainerElement);

			return M.showHouseAd(callback, force);
		}
		self.spinner.show();

		module.prototype.onAdsManagerLoaded = function(adsManagerLoadedEvent) {
			//self.log("adsManagerLoadedEvent", adsManagerLoadedEvent);

			// Get the ads manager.
			M.adsManager = adsManagerLoadedEvent.getAdsManager(M.adContainerElement);

			M.adsManager.init(parseInt(M.adWidth), parseInt(M.adHeight), google.ima.ViewMode.FULLSCREEN);

			// Listen to any additional events, if necessary.
			faZepto.each(['LOADED', 'IMPRESSION', 'STARTED',
				'SKIPPABLE_STATE_CHANGED', 'FIRST_QUARTILE', 'MIDPOINT',
				'THIRD_QUARTILE', 'USER_CLOSE', 'SKIPPED', 'COMPLETE',
				'ALL_ADS_COMPLETED', 'DURATION_CHANGE', 'CONTENT_RESUME_REQUESTED',
				'CLICK'
			], function(key, value) {
				M.adsManager.addEventListener(google.ima.AdEvent.Type[value], M.onAdEvent);
			});

			M.adsManager.start();
		};

		module.prototype.onAdEvent = function(adEvent) {
			var ad = adEvent.getAd();
			self.log("adEvent", adEvent);
			self.log("Ad", ad);
			self.log("Ad.isLinear()", ad.isLinear());
			self.log("contentType", ad.getContentType());
			self.log("width", ad.getWidth());
			self.log("height", ad.getHeight());
			self.log("duration", ad.getDuration());
			self.log(adEvent.type);

			switch (adEvent.type) {
				case google.ima.AdEvent.Type.LOADED:
					M.adcount++;
					break;
				case google.ima.AdEvent.Type.STARTED:
					self.spinner.hide();

					if (ad.isLinear() && M.adsManager.getRemainingTime() > 0) {
						self.tracking.trackEvent("Ad event", "DFP Video", adEvent.type);
					} else {
						self.tracking.trackEvent("Ad event", "DFP", adEvent.type);
					}

					self.modal.clearCloseBtnTimer();
					self.modal.activateCloseBtn(false);
					break;
				case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
				case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
				case google.ima.AdEvent.Type.COMPLETE:
				case google.ima.AdEvent.Type.SKIPPED:
				case google.ima.AdEvent.Type.USER_CLOSE:
					self.modal.close();

					if (M.adsLoader)
						M.adsLoader.destroy();
					if (M.adDisplayContainer)
						M.adDisplayContainer.destroy();
					if (M.adsManager)
						M.adsManager.destroy();
					break;
			}

			switch (adEvent.type) {
				case google.ima.AdEvent.Type.STARTED:
					self.adapters.run("adEvent", "displayed");
					break;
				case google.ima.AdEvent.Type.COMPLETE:
					self.adapters.run("adEvent", "completed");
					break;
				case google.ima.AdEvent.Type.SKIPPED:
					self.adapters.run("adEvent", "userSkipped");
					break;
				case google.ima.AdEvent.Type.USER_CLOSE:
					self.adapters.run("adEvent", "displayed");
					break;
			}
		};

		module.prototype.onAdError = function(adErrorEvent) {
			self.tracking.trackEvent("Ad error event", "DFP", adErrorEvent.getError());
			self.log(adErrorEvent.getError());
			self.modal.close();
			    	
			self.adapters.run("adEvent", "errored");

			if (M.adsLoader)
				M.adsLoader.destroy();
			if (M.adDisplayContainer)
				M.adDisplayContainer.destroy();
			if (M.adsManager)
				M.adsManager.destroy();
		};

		// Add event listeners
		M.adsLoader.addEventListener(
			google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
			M.onAdsManagerLoaded,
			false);
		M.adsLoader.addEventListener(
			google.ima.AdErrorEvent.Type.AD_ERROR,
			M.onAdError,
			false);

		var adsRequest = new google.ima.AdsRequest();
		adsRequest.disableCompanionAds = true;
		var myadTagUrl = "";
		var descriptionUrl = encodeURIComponent(self.config.ads.description_url);
		var language = self.gametranslation.getUserLang();

		// request video only once
		M.show_video = self.config.ads.show_video;

		M.dfp_custom_params = {
			"a": "" + self.config.aid,
			"game": "" + window.famobi_gameID,
			"gametype": "html5",
			"uuid": "" + self.config.uuid,
			"v": M.show_video ? "1" : "0",
			"adcount": (M.adcount > 20) ? "gt20"
										: (M.adcount >= 10) ? "" + M.adcount
															: "0" + M.adcount
		};

		// @see https://support.google.com/dfp_premium/answer/1068325?hl=de
		myadTagUrl =
			"https://pubads.g.doubleclick.net/gampad/ads?impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&ciu_szs";

		if (M.dfp_ad_unit_code != "") {
			myadTagUrl = myadTagUrl + "&iu=" + M.dfp_ad_unit_code;
		}

		if (M.show_video) {
			myadTagUrl = myadTagUrl + "&sz=640x480";
		} else if (M.adWidth >= 728) {
			myadTagUrl = myadTagUrl + "&sz=728x480";
		} else if (M.adWidth >= 640) {
			myadTagUrl = myadTagUrl + "&sz=640x480";
		} else if (M.adWidth >= 336) {
			myadTagUrl = myadTagUrl + "&sz=336x280";
		} else {
			myadTagUrl = myadTagUrl + "&sz=300x250";
		}

		if (descriptionUrl != "") {
			myadTagUrl = myadTagUrl + "&description_url=" + descriptionUrl;
		}

		if (M.dfp_custom_params) {
			myadTagUrl = myadTagUrl + "&cust_params=" + encodeURIComponent(faZepto.param(
				M.dfp_custom_params));
		}

		if (language != "") {
			myadTagUrl = myadTagUrl + "&hl=" + language;
		}

		if (self.config.ads.adx_channels && self.config.ads.adx_channels.length) {
			myadTagUrl = myadTagUrl + "&channel=" + self.config.ads.adx_channels[0];
		}

		adsRequest.adTagUrl = myadTagUrl;

		if (self.debug && M.show_video) {
			//adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=';
		}

		// Specify the linear and nonlinear slot sizes. This helps the SDK to
		// select the correct creative if multiple are returned.
		adsRequest.linearAdSlotWidth = 640;
		adsRequest.linearAdSlotHeight = 480;

		// 2015-10-29
		// Force Full-Slot ad rendering
		// Games publishers (mandatory):
		// When using overlay ads with gaming content, you must ensure that all creative sizes are rendered with the Full-Slot interface by manually setting adsrequest.forceNonLinearFullSlot to true. This is required to comply with AdSense and Ad Exchange Policies.
		adsRequest.forceNonLinearFullSlot = true;

		adsRequest.nonLinearAdSlotWidth = parseInt(M.adWidth);
		adsRequest.nonLinearAdSlotHeight = parseInt(M.adHeight);

		M.adsLoader.requestAds(adsRequest);

		M.show_initial = false;
	};

	module.prototype.initAdModal = function(options) {
		var opts = faZepto.extend({
			iframeAllowed: false,
			force: false,
			returnCallback: function() {}
		}, options);

		// check if ad is allowed inside this window / frame
		if (!M.isAdvertisingActive(opts)) {
			M.showHouseAd(opts.returnCallback, opts.force);
			return false;
		}

		// regard timeout between ads
		if (M.delayNextAdModal(opts.force)) {
			self.modal.setCloseCallback(opts.returnCallback);
			return false;
		}

		return true;
	};

	module.prototype.showAdModal = function(options, contentDiv) {
		var opts = faZepto.extend({
			mode: "seamless",
			closeBtnTimer: 20,
			faketime: 10,
			showCloseBtn: true,
			returnCallback: function() {},
			returnCallback2: function() {
		        M.delayNextAdModal(true);
	        }
		}, options);

		M.delayNextAdModal(true);

		self.modal.create(opts);
		self.modal.setHeader(self.translate("api.ad_modal_header2"));
		self.modal.updateCloseBtn(true);
		self.modal.setCloseBtnTimer(opts.closeBtnTimer, {"faketime": opts.faketime});
		self.modal.setDimensions(opts.width, opts.height);
		self.modal.setContent(contentDiv);
		self.modal.setCloseCallback(opts.returnCallback);
		self.modal.setCloseCallback(opts.returnCallback2);

		return self;
	};

	module.prototype.showHouseAd = function(callback, force) {
		var opts = {
			mode: "ad",
			showCloseBtn: false,
			width: 300,
			height: 250,
			min_s_between: (+self.config.ads.min_s_between > 0) ? +self.config.ads.min_s_between : 30000,
			iframeAllowed: true,
			returnCallback: callback || function() {},
			returnCallback2: function() {
		        M.delayNextAdModal(true);
	        },
			force: force
		};

		self.log("show house ad");

		if (!M.isEnabled()) {
			self.log("ads disabled");
			opts.returnCallback();
			return false;
		}

		if (!M.initAdModal(opts)) {
			return false;
		}

		M.delayNextAdModal(true);

		// show house ad
		var url = '/sda/housead/' + window.famobi_gameID + '/' + window.famobi.config
			.aid;
		self.iframe.show(url, opts);
		self.modal.setHeader(self.translate("api.ad_modal_header2"));
		self.modal.setCloseCallback(opts.returnCallback);
		self.modal.setCloseCallback(opts.returnCallback2);
		setTimeout(function() {
			self.modal.showCloseBtn();
			self.modal.clearCloseBtnTimer();
			self.modal.activateCloseOverlay(true);
		}, 2E3);

		M.adcount++;

		return self;
	};

	module.prototype.showTeaser = function(callback) {
		var opts = {
			mode: "ad",
			width: 300,
			height: 300,
			min_s_between: (+self.config.ads.min_s_between > 0) ? +self.config.ads.min_s_between : 30000,
			iframeAllowed: true,
			returnCallback: callback || function() {},
			force: true
		};

		self.log("show teaser ad");

		if (!M.initAdModal(opts)) {
			return false;
		}

		M.delayNextAdModal(true);

		// show banner
		var url = '/sda/teaser/' + window.famobi_gameID + '/' + window.famobi.config
			.aid;
		self.iframe.show(url, opts);
		self.modal.setHeader(self.translate("api.teaser_modal_header"));
		self.modal.setCloseCallback(opts.returnCallback);

		return self;
	};

	module.prototype.clearActiveTimeout = function() {
		if (M.activeTimeout) {
			clearTimeout(M.activeTimeout);
		}
		M.timeoutActive = false;
	};

	module.prototype.delayNextAdModal = function(isSetter) {
		// check if Ads are enabled
		if (!M.isEnabled()) {
			self.log("ads disabled");
			return true;
		}

		// disable all Ads for X seconds
		if (isSetter) {
			var min_s_between = (+self.config.ads.min_s_before > 0) ? +self.config.ads.min_s_before : +self.config.ads.min_s_between;

			M.clearActiveTimeout();

			M.timeoutActive = true;
			M.activeTimeout = setTimeout(function() {
				M.timeoutActive = false;
			}, min_s_between * 1000);

			// Set min_s_before to zero as it takes action only once
			if (!M.show_initial) {
				self.config.ads.min_s_before = 0;
			}
		} else if (M.timeoutActive) {
			self.log("skipped ad");
			return true;
		}

		return false;
	};

	module.prototype.isAdvertisingActive = function(opts) {
		if (!opts.iframeAllowed && window.top !== window.self) {
			self.log("ads disabled in <iframe>");
			return false;
		}
		return true;
	};

	module.prototype.isNthAdvertising = function(n) {
		return (+M.adcount % n) === 0;
	};

	module.prototype.fireAdCallback = function() {
		if (typeof M.closeCallback == "function") {
			M.closeCallback();
		}
		M.closeCallback = function() {};
	};

	module.prototype.isEnabled = function() {
		return self.hasFeature("ads") && !self.config.ads.off;
	};

	M = new module();
	M.init();

	return M;
};

// show ad programmatically
fg_api.prototype.showAd = function(callback) {
	this.ads.showAd(callback);
};
fg_api.prototype.forceAd = function(callback) {
	this.ads.forceAd(callback);
};
fg_api.prototype.rewardedAd = function(callback) {
	this.ads.rewardedAd(callback);
};
fg_api.prototype.showTeaser = function(callback) {
	this.ads.showTeaser(callback);
};



fg_api.prototype.adaptersModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.adapters = {
			ads: {
				show: !1,
				rewarded: !1
			},
			adEvent: {
				displayed: !1,
				errored: !1,
				userClosed: !1,
				completed: !1
			},
			game: {
				loaded: !1,
				gameOver: !1,
				levelUp: !1
			},
			highscore: {
				show: !1,
				submit: !1
			},
			screenshot: {
				submit: !1
			}
		};
		this.adapter_templates = {
			ads: {
				show: function(callback, force) { /**/},
				rewarded: function(callback) { /**/}
			},
			adEvent: {
				displayed: function() { /**/},
				errored: function() { /**/},
				userClosed: function() { /**/},
				completed: function() { /**/}
			},
			game: {
				loaded: function() { /**/},
				gameOver: function() { /**/},
				levelUp: function() { /**/}
			},
			highscore: {
				show: function(level) { /**/},
				submit: function(level, score) { /**/}
			},
			screenshot: {
				submit: function(screenshot_url, options) { /**/}
			}
		};
	}

	var adaptersPrototype = module.prototype;

	adaptersPrototype.init = function() {
		var section = "",
			subsection = "";
		if (typeof famobi_adapters !== "undefined") {
			for (section in famobi_adapters) {
				//self.log(section);
				for (subsection in famobi_adapters[section]) {
					//self.log(subsection);
					this.add(section, subsection, famobi_adapters[section][subsection]);
				}
			}
		}
	};

	adaptersPrototype.list = function(){
		self.log("available adapters: ", this.adapters);
		self.log("adapter templates: ", this.adapter_templates);
	};

	adaptersPrototype.add = function(section, subsection, callback){
		self.log("adding adapter: ", section + "." + subsection, callback);
		if (section in this.adapters && subsection in this.adapters[section] && callback) {
			this.adapters[section][subsection] = callback;
		} else {
			self.log("adapters.add: invalid (sub-)section or missing callback");
		}
		return this;
	};

	adaptersPrototype.has = function(section, subsection){
		if (this.adapters[section] && this.adapters[section][subsection]) {
			return typeof this.adapters[section][subsection] === "function";
		}
		return false;
	};

	adaptersPrototype.run = function(section, subsection){
		var args = arguments ? Array.prototype.slice.call(arguments, 2) : [];
		if (this.has(section, subsection)) {
			//self.log("args", args);
			this.adapters[section][subsection].apply(this, args);
			return true;
		}
		// self.log("adapters.run: invalid (sub-)section or missing callback");
		return false;
	};

	M = new module();
	M.init();

	return M;
};




/* http://updates.html5rocks.com/2014/07/Web-Audio-Changes-in-m36 */
//window.AudioContext = window.AudioContext || window.webkitAudioContext;

fg_api.prototype.getVolume = function() {
	return 0.5;
};

fg_api.prototype._muted = true;

fg_api.prototype.getMuted = function() {
	var self = this;
	
	return self._muted;
};

fg_api.prototype.setMuted = function(muted) {
	var self = this;

	self._muted = !!muted;
};



function fg_api(config, queue, debug) {
	config = config || {};
	queue = queue || [];

	var i = 0, j = queue.length, self = this;

	self.config = config;
	self.debug = !!debug;

	/**
	 * create log function with proper line number
	 */
	(function createLogger() {
		self.log = function() {};
		self.error = function() {};
		if (self.debug && window.console) {
			if (Function.prototype.bind) {
				self.log = Function.prototype.bind.call(window.console.log, window.console);
				self.error = Function.prototype.bind.call(window.console.error, window.console);
			} else {
				self.log = function() {
					Function.prototype.apply.call(window.console.log, window.console, arguments);
				};
				self.error = function() {
					Function.prototype.apply.call(window.console.error, window.console, arguments);
				};
			}
		}
	})();


	faZepto(function() {
		self.init();

		while(i < j){
			self.push(queue[i++]);
		}
	});
}

faZepto.fn.preventClick = function() {
	this.each(function() {
		faZepto(this).on("click touchstart touchmove touchcancel touchend", function(e) {
			e.stopPropagation();
			return false;
		});
	});

	return this;
};

fg_api.prototype.hasFeature = function(feature) {
	return feature in this.config.features && this.config.features[feature];
};

fg_api.prototype.createElement = function(type, attributes){
	var element = document.createElement(type);
	for(var key in attributes) {
		if(attributes.hasOwnProperty(key)){
			element.setAttribute(key, attributes[key]);
		}
	}
	return element;
};

fg_api.prototype.handleClick = function(element, callback){
	var eventHandler = function(e){
		callback.call(this, e);
		e.cancelBubble = true;
		e.stopPropagation();
		return false;
	};

	if(typeof callback === 'function'){
		// http://stackoverflow.com/questions/13396297/windows-phone-8-touch-support
		if (window.navigator.msPointerEnabled) {
			element.addEventListener("MSPointerDown", eventHandler, false);
		} else {
			element.addEventListener(!detection.is.touch ? "click" : "touchstart", eventHandler);
		}
	}

	return element;
};

fg_api.prototype.getUrlParams = function(a, b, c) {
	a = /[?&]?([^=]+)=([^&]*)/g, b = document.location && document.location.search ? document.location.search.split("+").join(" ") : "";
	for (var d = {}; c = a.exec(b);) d[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
	return d;
};

fg_api.prototype.str = function(chrs) {
	var str = '';
	function chr(n){return String.fromCharCode(n);}
	for (var i = 0; i < chrs.length; i++) {
		str += chr(Number(chrs[i]));
	}
	return str;
};

fg_api.prototype.guid = function(){
	function s4() {
    	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  	}
  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * create stubs
 */
if (!window.console){
	window.console = {
		log: function() {},
		debug: function() {},
		info: function() {},
		warn: function() {},
		error: function() {}
	};
}

/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013 = WebLinc, David Knight. */

window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===
b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));
k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=
d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),
m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,
media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));function mediahack(a,i){function n(a,i){var n=i.split(" "),l=a.classList;if(l)for(var i,e=0;e<n.length;e++)(i=n[e])&&l.add(i);else{for(var i,t=" "+a.className+" ",r=t,e=0;e<n.length;e++)(i=n[e])&&(i+=" ",~t.indexOf(" "+i)||(t+=i));t!==r&&(a.className=t.slice(1,-1))}}function l(a,i){var n=i.split(" "),l=a.classList;if(l)for(var i,e=0;e<n.length;e++)(i=n[e])&&l.remove(i);else{for(var i,t=" "+a.className+" ",r=t,e=0;e<n.length;e++)(i=n[e])&&(i=" "+i+" ",~t.indexOf(i)&&(t=t.replace(i," ")));t!==r&&(a.className=t.slice(1,-1))}}var i=i||{landscape:"all and (orientation:landscape)",portrait:"all and (orientation:portrait)",small:"all and (max-width:768px)",medium:"all and (min-width:768px) and (max-width:991px)",large:"all and (min-width:992px)"};for(var e in i){var t=window.matchMedia(i[e]);!function(i,e){var t=function(i){i.matches?n(a,e):l(a,e)};t(i),i.addListener(t)}(t,e)}}

fg_api.prototype.sizeOf = function(data) {
	var length = 0;
	var prop;

	if (!data) {
		return length;
	}

	if (typeof data.length != 'undefined') {
		return data.length;
	}

	if (Object.keys) {
		// available since ECMAScript 5 and in some browser 10x faster
		length = Object.keys(data).length;
	} else {
		for (prop in data){
			if (data.hasOwnProperty(prop)) {
				length++;
			}
		}
	}
	return length;
}



fg_api.prototype.getMoreGamesButtonImage = function () {
	return this.__("more_games_image") || "";
};



fg_api.prototype.sdkModule = function() {
	var self = this,
		postMessageListeners = {},
		M;

	function module() {
	};

	module.prototype.init = function() {
		listenForPostMessage();

		module.prototype.subscribePostMessageListener("sdk", "setItems", function (data) {

			self.localStorage.receivingData = true;
			for (var key in data) {
				self.localStorage.setItem(key, data[key], "");
			}
			self.localStorage.receivingData = false;
			self.game.setWaiting(false);
		});

		module.prototype.subscribePostMessageListener("sdk", "game.setWaiting", function (data) {
			self.game.setWaiting(data.setWaiting);
		});

		// check if famobi sdk is loaded
		if(window.top != window.self && !hasLocalStorageKeys()) window.top.postMessage({scope: 'famobi_sdk', method: 'getData', time: +(new Date), package_id: window.famobi_gameID, aid: self.config.aid}, "*");
	}

	module.prototype.subscribePostMessageListener = function(moduleName, actionName, callback) {
		if (!postMessageListeners[moduleName]) {
			postMessageListeners[moduleName] = {};
		}
		postMessageListeners[moduleName][actionName] = callback;
		// method chaining
		return module.prototype;
	};

	function hasPostMessageListener(message) {
		return message.module && postMessageListeners[message.module] && message.action && postMessageListeners[message.module][message.action];
	}

	function notifyPostMessageListener(message) {
		if (hasPostMessageListener(message)) {
			return postMessageListeners[message.module][message.action]((message.data || {}));
		}
		// self.error('Post message listener [' + (message.module || 'undefined') + '] with action [' + (message.action || 'undefined') + '] not found');
		return false;
	}

	function hasLocalStorageKeys(){

		var	aid = self.config.aid,
			package_id = window.famobi_gameID;

		if(typeof window.localStorage === "undefined") return false;

		// get all keys of localstorage and check if they start with aid or package id
		for (var key in window.localStorage) if(key.indexOf(aid) === 0 || key.indexOf(package_id) === 0) return true;

		return false;
	}

	function onPostMessageReceive(e){
		var messageObject = e.data;
		notifyPostMessageListener(messageObject);
	}

	function listenForPostMessage(){
		// Use postMessage API for "secure" cross-domain message-passing
		window.addEventListener("message", onPostMessageReceive, false);
	}

	M = new module();
	M.init();

	return M;
}



fg_api.prototype.storageModule = function(type) {
	var self = this,
		postMessageListeners = {},
		M;

	function module() { // define private vars

	}

	var storagePrototype = module.prototype;

	storagePrototype.init = function(storageType) {
		this.receivingData = false;
		this.localStorage = {};
		this.sessionStorage = {};
		this.storage = {}; // one of the above
		this.length = 0;

		if (storageType == 'localStorage' ||
			storageType == 'sessionStorage') {
				M.setStorageType(storageType);
				M.createStorage(storageType);
		}
	};

	storagePrototype.setStorageType = function(storageType) {
		M.storageType = storageType;
	};

	storagePrototype.getStorageType = function() {
		return M.storageType;
	};

	storagePrototype.createStorage = function(storageType) {
		if (testStorage(storageType)) {
			M.storage = createProxyStorage(storageType);
		} else {
			M.storage = createFallbackStorage(storageType);
		}
	};

	function testStorage(storageType) {
		var storage;
		try {
			storage = window[storageType];
			storage.setItem('test', 1);
			storage.removeItem('test');
			return true;
		} catch (e) {
			return false;
		}
	}

	function getNamespacedKey(key, ns) {
		if (typeof ns === "undefined") {
			ns = famobi_gameID;
		}
		if (ns.length) {
			key = ns + ':' + key;
		}
		return key;
	}

	// Create a storage proxy (same api like local-/sessionStorage) with double the data!
	function createProxyStorage(storageType) {
		return {
			data: {},
			getItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				return window[storageType].getItem(key);
			},
			getProxyItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				return this.data[key];
			},
			setItem: function (key, value, ns) {
				key = getNamespacedKey(key, ns);
				this.data[key] = value;
				this.updateLength();
				window[storageType].setItem(key, value);
			},
			removeItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				try {
					delete this.data[key];
				} catch (e) {
				}
				this.updateLength();
				window[storageType].removeItem(key);
			},
			clear: function () {
				for (var key in window[storageType]) {
					if(key.indexOf(window.famobi_gameID) === 0) this.removeItem(key, "");
				}
			},
			key: function (i) {
				var keys = [];
				for (var key in window[storageType]) {
					if(key.indexOf(window.famobi_gameID) === 0) keys.push(key);
				}
				return typeof keys[i] === "undefined" ? null : keys[i];
			},
			updateLength: function(){
				M.length = self.sizeOf(this.data);
			},
			getKeys: function(){
				var keys = [];
				for (var key in window[storageType]) {
					if(key.indexOf(window.famobi_gameID) === 0) keys.push(key);
				}
				return keys;
			}
		};
	}

	// Create a storage stub (same api like local-/sessionStorage)
	function createFallbackStorage(storageType) {
		return {
			data: {},
			getItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				return this.data[key];
			},
			setItem: function (key, value, ns) {
				key = getNamespacedKey(key, ns);
				this.data[key] = value;
				this.updateLength();
			},
			removeItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				try {
					delete this.data[key];
				} catch (e) {
				}
				this.updateLength();
			},
			clear: function (ns) {
				for (var key in this.data) {
					if(key.indexOf(window.famobi_gameID) === 0) this.removeItem(key, "");
				}
			},
			key: function (i) {
				var keys = [];
				for (var key in this.data) {
					if(key.indexOf(window.famobi_gameID) === 0) keys.push(key);
				}
				return typeof keys[i] === "undefined" ? null : keys[i];
			},
			updateLength: function(){
				M.length = self.sizeOf(this.data);
			},
			getKeys: function(){
				var keys = [];
				for (var key in this.data) {
					keys.push(key);
				}
				return keys;
			}
		};
	}

	storagePrototype.getStorage = function() {
		return M.storage;
	};

	storagePrototype.getItem = function(key, ns) {
		var value = M.getStorage().getItem(key, ns);
		return value;
	};

	storagePrototype.setItem = function(key, value, ns) {

		if(!M.receivingData && window.top != window.self) {
			window.top.postMessage({
				scope: 'famobi_sdk',
				method: 'setItem',
				package_id: window.famobi_gameID,
				aid: self.config.aid,
				data: {
					key: getNamespacedKey(key, ns),
					value: value
				}
			}, "*");
		}

		return M.getStorage().setItem(key, value, ns);
	};

	storagePrototype.setMaxItem = function(key, value, ns) {
		var old_value = parseInt(M.getStorage().getItem(key, ns), 10);

		if(!old_value || parseInt(value, 10) > old_value) {
			M.getStorage().setItem(key, value, ns);
			return true;
		} else {
			return false;
		}
	};

	storagePrototype.removeItem = function(key, ns) {
		if(window.top != window.self) {
			window.top.postMessage({
				scope: 'famobi_sdk',
				method: 'removeItem',
				package_id: window.famobi_gameID,
				aid: self.config.aid,
				data: {
					key: getNamespacedKey(key, ns)
				}
			}, "*");
		}

		return M.getStorage().removeItem(key, ns);
	};

	storagePrototype.clear = function() {
		return M.getStorage().clear();
	};

	storagePrototype.key = function(i) {
		return M.getStorage().key(i);
	};

	storagePrototype.getKeys = function() {
		return M.getStorage().getKeys();
	};

	M = new module();
	M.init(type);

	return M;
};




fg_api.prototype.loginModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var loginPrototype = module.prototype;

	loginPrototype.init = function() {
	};

	loginPrototype.show = function() {
		self.iframe.show("/account/index?ingameMode=true", {mode: "seamless"});
	};

	loginPrototype.setLoginStatus = function(loginStatus){
		self.config.loginStatus = loginStatus;
		return self;
	};

	loginPrototype.isLoggedIn = function(){
		return self.config.loginStatus;
	};

	//create new instace of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};

fg_api.prototype.showLoginScreen = function() {
	return this.login.show();
};

fg_api.prototype.postLogin = function(){
	this.navigation.reload();
	this.navigation.hideAll();
};

fg_api.prototype.setLoginStatus = function(loginStatus){
	this.login.setLoginStatus(loginStatus);
};





fg_api.prototype.highscoresModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var highscoresPrototype = module.prototype;

	highscoresPrototype.init = function () {

	};

	highscoresPrototype.submit = function(level, score) {
		level = (typeof level !== "undefined" && (level.length || level > 0)) ? level : "0";
		score = parseInt(score, 10);

		self.tracking.data({'level': level, 'score': score});

		self.tracking.trackEvent('Highscore event', 'submit', famobi_gameID + ':level:' + level);

		if (!self.hasFeature("highscores")){
			self.showAd();

			return self;
		}

		self.showAd(function() {

			// Run Adapter if possible
			if (self.adapters.run("highscore", "submit", level, score)) {
				return self;
			}

			function doSubmit(score) {
				// POST to iframe
				/*self.iframe.postData("/gameapi/highscore/" + self.config.uuid, {
					"score": score
				});*//* let it be, may use Google Play Services Leadboards in the future */
			}

			if(!self.login.isLoggedIn()){
				// Save local
				self.sessionStorage.setMaxItem("famobi:level", level);
				if (self.sessionStorage.setMaxItem("famobi:score", score)) {
					doSubmit(score);
				}
			}else{
				doSubmit(score);
			}

		});

		return self;
	};

	highscoresPrototype.show = function(level){
		if (self.hasFeature("highscores")){
			// Run Adapter if possible
			if (self.adapters.run("highscore", "show", level)) {
				return self;
			}

			// Business as usual
			/*self.iframe.show("/gameapi/highscore/" + self.config.uuid);*//* nothing to see here */
		}

		return self;
	};

	highscoresPrototype.get = function(){
		return self.sessionStorage.getItem("famobi:score");
	};

	highscoresPrototype.del = function(){
		self.sessionStorage.delItem("famobi:score");
	};

	highscoresPrototype.submitHighscoreCallback = function() {
		M.del();
		faZepto(self.rootElement).trigger("fg_api.submitHighscore");
	};

	M = new module();
	M.init();

	return M;
};

fg_api.prototype.submitHighscore = function(level, score){
	if (this.hasFeature("highscores")){
		this.highscores.submit(level, score);
	}
};

fg_api.prototype.showHighscore = function(){
	this.highscores.show();
};

fg_api.prototype.getHighscore = function(){
	return this.highscores.get();
};

fg_api.prototype.submitHighscoreCallback = function(){
	this.highscores.submitHighscoreCallback();
};



fg_api.prototype.screenshotModule = function() {

	// http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata

	var self = this,
		M;

	function module() {

		this.clipClicked = false;
		this.options = {
			width: 480,
			height: 640
		};

		this.savingTryoutsNum = 5;
		this.savingTryoutsInterval = 3000;
		this.savingLocked = false;
		this.savingInterval = null;
		this.releaseSavingTimeout = null;
		this.releaseTimeout = 20000;
	}

	function getCameraIcon() {
		return '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="CAMERA_1_" enable-background="new    "><g id="CAMERA"><g><path d="M32,22c-6.627,0-12,5.372-12,12c0,6.627,5.373,12,12,12s12-5.373,12-12S38.627,22,32,22z M61,12H48.243l-5.095-5.094l-0.002,0.003C42.602,6.35,41.843,6,41,6H23c-0.976,0-1.835,0.474-2.383,1.196L15.813,12H3c-1.657,0-3,1.343-3,3v40c0,1.657,1.343,3,3,3h58c1.657,0,3-1.343,3-3V15C64,13.343,62.657,12,61,12z M32,52c-9.941,0-18-8.059-18-18c0-9.941,8.059-18,18-18c9.941,0,18,8.059,18,18C50,43.941,41.941,52,32,52z"/></g></g></g></svg>';
	}

	function initClip() {
		var fgFotoshootOverlay = self.createElement("div", {
			id: "fg-fotoshoot-overlay"
		});

		if(self.config.gameParams.screenshot && self.config.gameParams.screenshot.camera) {
			fgFotoshootOverlay.style.top = "auto"; //reset css
			fgFotoshootOverlay.style.right = "auto"; //reset css

			var cameraConfig = self.config.gameParams.screenshot.camera;
			for (var idx in cameraConfig.position) {
				if (cameraConfig.position[idx]) {
					var direction = cameraConfig.position[idx];
					switch (direction) {
						case "top":
						case "bottom":
							fgFotoshootOverlay.style[direction] = cameraConfig.y + '%';
							break;
						case "right":
						case "left":
							fgFotoshootOverlay.style[direction] = cameraConfig.x + '%';
							break;
					}
				}
			}
		}

		fgFotoshootOverlay.innerHTML = getCameraIcon();

		self.rootElement.appendChild(fgFotoshootOverlay);

		self.handleClick(fgFotoshootOverlay, takeScreenshot);
	}

	function getScreenshotParam(name) {
		if (self.config.gameParams.screenshot[name]) {
			return self.config.gameParams.screenshot[name];
		}
	}

	module.prototype.init = function () {

		// is feature disabled
		if (!self.hasFeature("screenshot")) {
			return;
		}

		// hasn't special screenshot settings configured
		// or screenshot feature is disabled (again???)
		// or no screenshot areas defined
		if (!self.config.gameParams.screenshot ||
			!self.config.gameParams.screenshot.active ||
			!Object.keys(self.config.gameParams.screenshot.areas).length
		) {
			return false;
		}

		self.iframe.subscribePostMessageListener("screenshot", "handleScreenshotSave", handleScreenshotSave);

		initClip();
	};

	function discardScreenshotUpload(event) {
		self.tracking.trackEvent('Screenshot event', 'discard', famobi_gameID);
		self.modal.close();
	}

	function releaseUploadLock() {
		M.savingLocked = false;
	}

	function lockUpload() {
		M.savingLocked = true;
	}

	function uploadScreenshot(imageSrc) {
		if (M.savingLocked) {
			return false;
		}

		self.tracking.trackEvent('Screenshot event', 'save', famobi_gameID);

		M.fgSaveScreenshot.classList.add('fg-screenshot-btn-loading');

		lockUpload();
		faZepto.ajax({
			type: 'POST',
			url: self.config.urlRoot + '/services/upload/images',
			data: {
				reference_id: self.config.uuid,
				pingback: 'services/upload',
				file: imageSrc,
				type: 'screenshot'
			},
			dataType: 'json',
			success: function(response) {

				handleScreenshotSave({
					url: response.data.public,
					txid: response.data.reference.id
				});
			}
		});

		return self;
	}

	function handleScreenshotSave(data){
		var countTryouts = 0;
		var image;

		if(!data.url || !data.txid){
			return false; //Unknown error
		}

		// store transaction id from server
		M.txid = data.txid;

		image = new Image();
		image.src = data.url;
		image.onload = function () {
			imageLoaded(true);
		};
		image.onerror = function () {
			countTryouts++;
			if (countTryouts >= M.savingTryoutsNum) {
				imageLoaded(false);
			}
		};

		function imageLoaded(imageHasLoaded) {
			self.tracking.trackEvent('Screenshot event', 'uploaded:' + (imageHasLoaded ? '1':'0'), famobi_gameID);

			clearInterval(M.savingInterval);
			clearTimeout(M.releaseSavingTimeout);
			releaseUploadLock();

			if (imageHasLoaded) {
				self.modal.close();
				M.fgSaveScreenshot.classList.add('fg-screenshot-btn-loading-complete');

				self.showAd(function() {
					// Run Adapter if possible
					self.adapters.run("screenshot", "submit", data.url , {
						width: M.options.width,
						height: M.options.height
					});
				});
			}else{
				self.modal.shake();
				M.fgSaveScreenshot.classList.add('fg-screenshot-btn-loading-fail');
				setTimeout(function(){
					M.fgSaveScreenshot.classList.remove('fg-screenshot-btn-loading-fail');
					M.fgSaveScreenshot.classList.remove('fg-screenshot-btn-loading');
				}, 1500);
			}
		}
	}

	function getCanvas(canvasID) {
		return canvasID ? document.getElementById(canvasID) : document.getElementsByTagName("canvas")[0];
	}

	function createImageFromCanvas(canvas, area) {
		var image = new Image();
		image.src =  canvas.toDataURL('image/jpeg');
		var targetHeight = 0,
			targetWidth = 0;

		// calculate based on percentage configured in screenshot params
		var slicing = {
			width: image.width / 100 * area.width,
			height: image.height / 100 * area.height,
			x: image.width / 100 * area.x,
			y: image.height / 100 * area.y
		};

		slicing.aspectRatio = slicing.width / slicing.height;

		var aspectRatioCanvas = M.options.width / M.options.height;

		// rotate target canvas
		if (Math.floor(slicing.aspectRatio) !== Math.floor(aspectRatioCanvas)) {
			var tmp = M.options.height;
			M.options.height = M.options.width;
			M.options.width = tmp;
			aspectRatioCanvas = M.options.width / M.options.height;
		}

		function byHeight() {
			targetHeight = M.options.height;
			targetWidth = M.options.height * slicing.aspectRatio;
		}
		function byWidth() {
			targetWidth = M.options.width;
			targetHeight = M.options.width / slicing.aspectRatio;
		}

		if(slicing.aspectRatio > 1){
			byHeight();
		} else {
			byWidth();
		}

		if(targetWidth > M.options.width){
			byWidth();
		}
		if(targetHeight > M.options.height){
			byHeight();
		}

		// find center postion of image
		var positionX = (M.options.width - targetWidth) / 2;
		var positionY = (M.options.height - targetHeight) / 2;

		return {
			element: image,
			slicing: slicing,
			positionX: parseInt(positionX),
			positionY: parseInt(positionY),
			targetWidth: parseInt(targetWidth),
			targetHeight: parseInt(targetHeight),
			createTemporaryCanvas: function() {
				return self.createElement('canvas', {'width': M.options.width, 'height': M.options.height});
			}
		};
	}

	function getCanvasContext(canvas) {
		return canvas.getContext('2d');
	}

	function cropImage(canvas, area) {
		var image = createImageFromCanvas(canvas, area);
		var tempCanvas = image.createTemporaryCanvas();
		var ctx = getCanvasContext(tempCanvas);

		ctx.drawImage(
			image.element,
			image.slicing.x,
			image.slicing.y,
			image.slicing.width,
			image.slicing.height,
			image.positionX,
			image.positionY,
			image.targetWidth,
			image.targetHeight
		);
		var imageSrc = canvas.toDataURL('image/jpeg', 0.7);
		image = null;
		tempCanvas = null;
		ctx = null;

		return imageSrc;
	}

	function displayScreenshotOverlay(imageSrc) {
		self.modal.create({
			showCloseBtn: false,
			transparent: true
		});

		// screenshot container
		var fgScreenshot = self.createElement("div", {
			"class": "fg-screenshot"
		});

		// upload screenshot image (link)
		M.fgSaveScreenshot = self.createElement("a", {
			"class": "fg-screenshot-btn-upload"
		});
		M.fgSaveScreenshot.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><polygon id="check-mark-icon" points="398.218,92.985 199.729,291.475 113.754,205.476 50,269.242 199.733,419.015 462,156.726 "/></svg>';
		self.handleClick(M.fgSaveScreenshot, function() {
			uploadScreenshot(imageSrc);
		});
		fgScreenshot.appendChild(M.fgSaveScreenshot);

		// discard screenshot image (link)
		var fgDiscardScreenshot = self.createElement("a", {
			"class": "fg-screenshot-btn-discard"
		});
		fgDiscardScreenshot.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><polygon id="x-mark-icon" points="438.393,374.595 319.757,255.977 438.378,137.348 374.595,73.607 255.995,192.225 137.375,73.622 73.607,137.352 192.246,255.983 73.622,374.625 137.352,438.393 256.002,319.734 374.652,438.378 "/></svg>';
		self.handleClick(fgDiscardScreenshot, discardScreenshotUpload);
		fgScreenshot.appendChild(fgDiscardScreenshot);

		var fgScreenshotImage = self.createElement("img", {"src": imageSrc});
		fgScreenshot.appendChild(fgScreenshotImage);

		self.modal.setContent(faZepto(fgScreenshot).get(0));
		self.modal.setDimensions(M.options.width, M.options.height);
		self.modal.setCloseCallback(function() {
			self.clipClicked = false;
		});
	}

	function takeScreenshot(area) {
		if (self.clipClicked) {
			return false;
		}
		self.clipClicked = true;
		// reset transaction id
		M.txid = null;
		self.tracking.trackEvent('Screenshot event', 'shoot', famobi_gameID);

		if (getScreenshotParam('areas')) {
			if (area && getScreenshotParam('areas')[area]) {
				area = getScreenshotParam('areas')[area];
			} else if(getScreenshotParam('areas')['default']) {
				area = getScreenshotParam('areas')['default'];
			} else {
				area = null;
			}
		}

		if (!area) {
			throw Error('No areas defined');
		}

		var originalCanvas = getCanvas(M.canvasID);
		var imageSrc = cropImage(originalCanvas, area);
		displayScreenshotOverlay(imageSrc);
	}

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.navigationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.crosspromotionGames = [
			'smarty-bubbles',
			'fruita-crush',
			'lovetester',
			'jewelish',
			'gold-rush',
			'jetpack-master',
			'1010-animals',
			'animal-quiz',
			'world-cup-penalty',
			'burnin-rubber',
			'fruita-swipe-2',
			'streetrace-fury',
			'formula-fever',
			'parking-passion',
			'street-ball-star',
			'orange-ranch',
			'back-to-candyland-1',
			'flow-free',
			'wedding-lily',
			'creamy-ice',
			'soccer-star-quiz',
			'puppy-maker',
			'orange-bubbles',
			'nut-rush',
			'french-apple-pie-vegan',
			'mahjong-relax',
			'cannons-and-soldiers',
			'hiddentastic-mansion',
			'treasure-link',
			'back-to-candyland-2',
			'spider-solitaire',
			'civilizations-wars-all-stars',
			'pirates-of-islets',
			'soccertastic',
			'basket-and-ball'
		];
	}

	var navigationPrototype = module.prototype;

	navigationPrototype.init = function(){
		self.fgNavigation = document.createElement("nav");
		self.fgNavigation.style.position = "relative";
		self.fgNavigation.setAttribute("id", "fg-navigation");
		faZepto(self.headElement).append(self.config.style);
		self.fgOverlay.innerHTML = self.config.headerHtml;
		self.fgOverlay.appendChild(self.fgNavigation);
		self.fgOverlay_visible = false;
		self.fgHeader = document.getElementById("fg-header");

		faZepto("#fg-clip, #fg-logo").each(function(){
			self.handleClick(this, toggleOverlay);
		});

		function toggleOverlay(e){
			if(self.fgOverlay_visible){
				M.hideAll();
			}else{
				M.show();
			}
			e.stopPropagation();
			return false;
		}

		// Init Left-Hand-Navigation
		if (self.hasFeature('menu')) {
			M.setHtml(self.config.menuHtml);
		}

		return self;
	};

	navigationPrototype.bindEvents = function() {
		faZepto("[data-switch-lang]").each(function() {
			var $this = faZepto(this),
				lang = faZepto(this).attr("data-switch-lang");

			$this.removeClass('fg-lang-selected');

			if (lang === self.gametranslation.curLangString) {
				$this.addClass('fg-lang-selected');
			}

			self.handleClick(this, function() {
				if (lang.length) {
					M.switchLanguage(lang);
				}
			});
		});

		faZepto("[data-famobi-href]").css("cursor", "pointer").each(function() {
			var callback = function() {
				var link = faZepto(this).attr("data-famobi-href");

				M.hideAll();

				switch (link) {
					case 'moreGames':
						return self.moreGamesLink();
					case 'moreGamesOverlay':
						return self.moreGamesOverlay();
					case 'back':
						return self.backLink();
					case 'nextGame':
						return self.nextGame();
					case 'previousGame':
						return self.previousGame();
				}
			};

			self.handleClick(this, callback);
		});

		faZepto("[data-famobi-fullscreen]").each(function() {
			self.handleClick(this, M.switchFullscreen);
		});

		faZepto("[data-famobi-screenshot]").each(function() {
			self.handleClick(this, M.takeScreenshot);
		});

		faZepto("[data-famobi-payment]").each(function() {
			if (!self.hasFeature("payment") || !self.debug) {
				faZepto(this).remove();
			} else {
				self.handleClick(this, M.showPayment);
			}
		});
	};

	navigationPrototype.switchLanguage = function(lang) {
		var params = self.getUrlParams(),
			qs = '';

		M.hideAll();
		params.locale = lang;
		qs = faZepto.param(params);
		document.location.replace(document.location.pathname + "?" + qs + (document.location.hash ? "#" + document.location.hash : ""));
	};

	navigationPrototype.switchFullscreen = function () {
		M.hideAll();

		self.fullscreen.toggle();

		return true;
	};

	navigationPrototype.takeScreenshot = function() {
		self.screenshot.shoot();
	};

	navigationPrototype.showPayment = function() {
		self.payment.showPayment();
	};

	navigationPrototype.show = function() {
		M.hideAll();

		self.fgOverlay_visible = true;
		faZepto(self.fgOverlay).addClass("navigation-view");
		self.fgNavigation.style.display = "";

		return self;
	};

	navigationPrototype.hide = function() {
		self.fgOverlay_visible = false;
		self.fgNavigation.style.display = "none";

		return self;
	};

	// hide all views (navigation, iframe, maybe more) call before you want to display a new "view"
	navigationPrototype.hideAll = function() {
		$fgOverlay = faZepto(self.fgOverlay);
		$fgOverlay.removeClass("iframe-view navigation-view");
		M.hide(); // hide navigation
		self.modal.close(); // close modals

		return self;
	};

	navigationPrototype.reload = function() {

	};
	
	navigationPrototype._moreGamesLink = function(popup) {
		var moreGamesLink = window.famobi.__("more_games_url");
		if (!moreGamesLink || moreGamesLink == "http://" || moreGamesLink == "javascript:") {
			return false;
		}

		// open link in new window when framed
		if (typeof popup == "undefined" && window.top !== window.self) {
			popup = true;
		}

		if (!popup || !window.open(moreGamesLink, "")) {
			window.location.href = moreGamesLink;
		}
	};

	navigationPrototype.moreGamesLink = function(popup) {
	    self.forceAd(function() {
	        M._moreGamesLink(popup);
	    });
	};

	navigationPrototype.setHtml = function(html) {
		self.fgNavigation.innerHTML = html;

		M.bindEvents();

		self.gametranslation.translateHtml(faZepto(self.fgNavigation));
	};

	navigationPrototype.findActiveGamePosition = function() {
		var findActiveGamePosition = M.crosspromotionGames.indexOf(window.famobi_gameID);

		return findActiveGamePosition;
	};

	M = new module();

	M.init();

	return M;
};

fg_api.prototype.backLink = function() {
	var self = this;

	// Fallback to previous page
	if (history.length > 1) {
		window.history.go(-1);
	} else {
		if (window.opener) {
			try {
				// iOS8 is missing window.close support, thanks AAPL
				window.close();
			} catch (ex) {
				// SecurityError
			}
		}

		// Fallback to more games url
		self.moreGamesLink(false);
	}

	return false;
};

fg_api.prototype.nextGame = function() {
	var self = this;

	var nextGamePosition = 0;
	var findActiveGamePosition = self.navigation.findActiveGamePosition();

	if(findActiveGamePosition + 1 < self.navigation.crosspromotionGames.length) {
		nextGamePosition = findActiveGamePosition + 1;
	}

	self.tracking.trackEvent('Target', 'Next Game', window.famobi_gameID);

	setTimeout(function() {
		window.location.href = self.config.urlRoot+'/'+self.navigation.crosspromotionGames[nextGamePosition]+'/'+self.config.aid;
	}, 250);

	return false;
};

fg_api.prototype.previousGame = function() {
	var self = this;

	var previousGamePosition = 0;
	var findActiveGamePosition = self.navigation.findActiveGamePosition();

	if(findActiveGamePosition - 1 < 0) {
		previousGamePosition = self.navigation.crosspromotionGames.length - 1;
	} else {
		previousGamePosition = findActiveGamePosition - 1;
	}

	self.tracking.trackEvent('Target', 'Previous Game', window.famobi_gameID);

	setTimeout(function() {
		window.location.href = self.config.urlRoot+'/'+self.navigation.crosspromotionGames[previousGamePosition]+'/'+self.config.aid;
	}, 250);

	return false;
};


fg_api.prototype.moreGamesLink = function(popup) {
    var self = this;
    
    self.navigation.moreGamesLink();
};

fg_api.prototype.moreGamesOverlay = function(popup) {
	var urls = [], url = '', len = 0, rand = 0;
	urls.push('//m.games1.com/more-games');
	len = urls.length;
	rand = parseInt(Math.random() * len);
	url = urls[rand];
	this.iframe.show(document.location.protocol + url, { 'title': 'More Games &ndash; powered by Games1.com' });
};

fg_api.prototype.updateMenu = function(html){
	this.navigation.setHtml(html);
};

fg_api.prototype.getShortLink = function() {
	return this.config.short_url;
};



fg_api.prototype.spinnerModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.spinner = "";
		this.timeout = 15000;
		this.maxTimeout = null;
		this.stateTimeout = null;
	}

	var spinnerPrototype = module.prototype;

	spinnerPrototype.init = function() {
		M.spinner = self.createElement("div", {"class": "fg-spinner"});
		M.spinner.innerHTML = '<div class="fg-dot1"></div><div class="fg-dot2"></div><div class="fg-dot3"></div><div class="fg-dot4"></div><div class="fg-dot5"></div><div class="fg-dot6"></div><div class="fg-dot7"></div>';

		self.rootElement.appendChild(M.spinner);

		return this;
	};

	spinnerPrototype.show = function(timeout){

		M.spinnerState = "new";
		M.spinner.style.visibility = "visible";
		M.spinner.style.left = "50%";
		M.spinner.style.opacity = 1;

		// custom timeout
		if (timeout) {
			M.timeout = timeout;
		}

		M.stateTimeout = setTimeout(function(){
			if(M.spinnerState == "tryhide"){
				M.spinnerState = "closeable";
				M.hide();
			}else{
				M.spinnerState = "closeable";
			}
		}, 1000);

		//show spinner max 15sec
		M.maxTimeout = setTimeout(function(){
			M.hide();
		}, M.timeout);

		return this;
	};

	spinnerPrototype.hide = function(){

		if (M.spinnerState && M.spinnerState == "closeable") {
			M.spinner.style.opacity = 0;

			setTimeout(function(){
				M.spinner.style.visibility = "hidden";
				M.spinner.style.left = "-80px";
			}, 1000);

			clearTimeout(M.maxTimeout);
			clearTimeout(M.stateTimeout);

		} else {
			M.spinnerState = "tryhide";
		}
		return this;
	};

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.modalModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.element = "";
		this.closing = false;
		this.closeCallbacks = [];
	}

	var modalPrototype = module.prototype;

	modalPrototype.init = function() {
		self.iframe
			.subscribePostMessageListener("modal", "showModalCloseBtn", function() {
				M.showCloseBtn();
			})
			.subscribePostMessageListener("modal", "setModalHeader", function(data) {
				M.setHeader(data.title);
			})
			.subscribePostMessageListener("modal", "setModalCloseBtnTimer", function(data) {
				self.spinner.hide();
				M.setCloseBtnTimer(data.sec, data.options);
			});
	};

	modalPrototype.create = function(options){
		var opts = faZepto.extend({
			showCloseBtn: true,
			title: ''
		}, options);

		if (!M.closing) {
			M.close(); // close all other window - it's a MODAL
		}

		self.game.pause();

		var className = "";
		if(opts.mode){
			className = opts.mode + "-mode";
		}

		M.element = self.createElement('div', {'class': 'fg-modal fg-fade fg-show ' + className});

		M.overlay = self.createElement('div', {'class': 'fg-modal-overlay'});
		self.rootElement.appendChild(M.overlay);

		M.header = self.createElement('header', {});
		M.element.appendChild(M.header);

		M.body = self.createElement('div', {'class': 'fg-modal-body'});
		M.element.appendChild(M.body);

		self.rootElement.appendChild(M.element);

		if (opts.showCloseBtn !== false) {
			M.showCloseBtn();
		}

		if (opts.transparent){
			M.body.classList.add('fg-modal-transparent');
		}

		if (opts.title) {
			M.setHeader(opts.title);
		}

		M.closeCallbacks.push(self.game.resume);
	};

	modalPrototype.showCloseBtn = function(){
		M.closeBtn = self.createElement('div', {
			'class': 'fg-modal-close icon-cancel'
		});
		M.element.appendChild(M.closeBtn);

		self.handleClick(M.closeBtn, function(){
			if(!this.getAttribute("data-disable"))
				M.close();
		});

		self.handleClick(M.overlay, function(){
			if(!M.closeBtn.getAttribute("data-disable") && !M.overlay.getAttribute("data-disable"))
				M.close();
		});
	};

	modalPrototype.setCloseCallback = function(callback){
		if(M.element){
			M.closeCallbacks.push(callback);
			return true;
		}else{
			callback();
			return false;
		}
	};

	modalPrototype.updateCloseBtn = function(disable){
		var currentSec = M.closeBtnTimer ? M.closeBtnTimer.current : 0;

		if(disable){
			M.fallbackTimeout = setTimeout(M.updateCloseBtn, 5000);
		}else if(M.fallbackTimeout){
			clearTimeout(M.fallbackTimeout);
		}

		if (!M.closeBtn) {
			return;
		}

		if(currentSec > 0 || disable){
			M.closeBtn.innerHTML = '<span class="counter">' + currentSec + '</span>' || '';
			M.closeBtn.setAttribute("data-disable", "true");
		}else{
			M.closeBtn.innerHTML = "";
			M.closeBtn.removeAttribute("data-disable");
		}
	};

	modalPrototype.setCloseBtnTimer = function(sec, options){
		if(!options)
			options = {};

		M.clearCloseBtnTimer();

		M.closeBtnTimer = {
			autoclose: typeof options.autoclose == "undefined" ? true : options.autoclose,
			sec: sec,
			current: (options.faketime || sec)+1,
			timeout: 0,
			options: options
		};

		M.closeBtnTicker();
	};

	modalPrototype.clearCloseBtnTimer = function(){
		if(M.closeBtnTimer && M.closeBtnTimer.timeout){
			clearTimeout(M.closeBtnTimer.timeout);
		}
	};

	modalPrototype.closeBtnTicker = function(){
		var options = M.closeBtnTimer.options;
		M.closeBtnTimer.current = Math.max(--M.closeBtnTimer.current, 0);

		if (M.closeBtnTimer.current === 0 && M.closeBtnTimer.autoclose) {
			M.close();
		} else {
			M.updateCloseBtn();
		}

		var faketime = parseInt(options.faketime || M.closeBtnTimer.sec, 10);

		M.closeBtnTimer.timeout = setTimeout(M.closeBtnTicker, parseInt((M.closeBtnTimer.sec/faketime)*1000, 10));
	};

	modalPrototype.activateCloseBtn = function(state){

		M.closeBtn.style.display = state ? 'block' : 'none';

		if (state) {
			M.closeBtn.removeAttribute("data-disable");
		}
		else {
			M.closeBtn.setAttribute("data-disable", "true");
		}
	};

	modalPrototype.activateCloseOverlay = function(state){
		if (state) {
			M.overlay.removeAttribute("data-disable");
		}
		else {
			M.overlay.setAttribute("data-disable", "true");
		}
	};

	modalPrototype.setContent = function(contentElement){
		if(contentElement){
			M.body.appendChild(contentElement);
		}
	};

	modalPrototype.setHeader = function(headline){
		headline = headline || '';

		if (!M.header) {
			return;
		}

		M.header.innerHTML = headline.length ? headline + "" : "";
		M.header.style.display = headline.length ? "block" : "none";
	};

	modalPrototype.setDimensions = function(width, height){
		if(!width || width === "")
			width = 480;

		if(!height || height === "")
			height = 500;

		M.element.style.maxHeight = parseInt(height, 10) + 60 + "px";
		M.element.style.maxWidth = parseInt(width, 10) + 20 + "px";
		M.element.style.display = "";
	};

	modalPrototype.close = function(){
		M.closing = true;

		M.clearCloseBtnTimer();

		if(M.element){
			M.element.parentNode.removeChild(M.element);
			delete M.element;
		} else {
			return false;
		}

		if(M.overlay){
			M.overlay.parentNode.removeChild(M.overlay);
			delete M.overlay;
		} else {
			return false;
		}

		faZepto.each(M.closeCallbacks, function(key, callback) {
			if (typeof callback === "function") {
				callback();
			}
		});
		M.closeCallbacks = [];

		self.spinner.hide();

		M.closing = false;
	};

	modalPrototype.shake = function(){
		M.element.classList.add('fg-modal-shake');

		setTimeout(function(){
			M.element.classList.remove('fg-modal-shake');
		}, 2000);
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.iframeModule = function() {
	var self = this,
		postMessageListeners = {},
		M;

	function module(){ // define private vars

	}

	var iframePrototype = module.prototype;

	iframePrototype.init = function() {
		self.comIframe = self.createElement("iframe", {
			"id": "fg-com-iframe",
			"name": "fg-com-iframe",
			"src": ""
		});
		self.fgOverlay.appendChild(self.comIframe);

		listenForPostMessage();

		iframePrototype.subscribePostMessageListener("iframe", "GC", function (data) {
			// garbage collection
			if (data.hasOwnProperty("postCount")) {
				faZepto(self.rootElement).find("#fg-post-form" + data.postCount).remove();
				faZepto(self.fgOverlay).find("#fg-post-iframe" + data.postCount).remove();
			}
		});
	};

	iframePrototype.subscribePostMessageListener = function(moduleName, actionName, callback) {
		if (!postMessageListeners[moduleName]) {
			postMessageListeners[moduleName] = {};
		}
		postMessageListeners[moduleName][actionName] = callback;
		// method chaining
		return iframePrototype;
	};

	function hasPostMessageListener(message) {
		return message.module && postMessageListeners[message.module] && message.action && postMessageListeners[message.module][message.action];
	}

	function notifyPostMessageListener(message) {
		if (hasPostMessageListener(message)) {
			return postMessageListeners[message.module][message.action]((message.data || {}));
		}
		// self.error('Post message listener [' + (message.module || 'undefined') + '] with action [' + (message.action || 'undefined') + '] not found');
		return false;
	}

	function onPostMessageReceive(e){
		if (e.origin !== self.config.urlRoot) {
			return;
		}

		var messageObject = e.data;
		notifyPostMessageListener(messageObject);
	}

	function listenForPostMessage(){
		// Use postMessage API for "secure" cross-domain message-passing
		window.addEventListener("message", onPostMessageReceive, false);
	}

	iframePrototype.create = function(){
		self.iframeContainer = self.createElement("div", {"id": "fg-iframe-container"});

		self.iframeElement = self.createElement("iframe", {
			"id": "fg-iframe",
			"class": "fg-iframe",
			"name": "fg-iframe",
			"src": "",
			"style": "background: transparent none;"
		});
		self.iframeContainer.appendChild(self.iframeElement);

		return self;
	};

	iframePrototype.updateSize = function(){
		if (self.iframeElement){
			self.iframeElement.style.height = "0px";
			self.iframeElement.style.height = "100%";
		}

		return self;
	};

	/**
	 * Set the iframe's src="" attribute
	 */
	iframePrototype.load = function() {
	};

	/**
	 * Displays the iframe with the specified width/height dimensions
	 */
	iframePrototype.show = function(url, options) {
		var opts = faZepto.extend({
			width: "",
			height: ""
		}, options);

		if (!self.iframeContainer){ //create iframe if not exist
			M.create();
		}

		self.navigation.hideAll();

		self.modal.create(options);
		self.log("iframeContainer");
		self.log(self.iframeContainer);

		if (url.length){
			if (url.indexOf('/') === 0) {
				url = self.config.urlRoot + url;
			}
			self.iframeElement.setAttribute("src", url);
			self.spinner.show();

			self.iframeElement.onload = function(){
				self.spinner.hide();
			};
		} else {
			self.log("url not set");
		}

		if (opts.mode && opts.mode == "seamless") {
			self.iframeElement.setAttribute("seamless", "seamless");
			opts.height = "none";
		}

		if (opts.mode && opts.mode == "ad")
			self.iframeElement.setAttribute("scrolling", "no");
		else
			self.iframeElement.setAttribute("scrolling", "yes");

		self.modal.setCloseCallback(function(){
			self.log("closeCallback");
			if (self.iframeElement) {
				self.iframeElement.setAttribute("src", "");
			}
		});

		self.modal.setContent(self.iframeContainer); //insert iframe into modal

		self.modal.setDimensions(opts.width, opts.height);

		self.tracking.trackEvent('IFrame event', 'show', url);

		return self;
	};

	iframePrototype.hide = function() {

		faZepto(self.fgOverlay).css({
			'max-width': '',
			'max-height': ''
		});

		return self;
	};

	iframePrototype.postData = function(url, dataObject) {
		var $formElement,
			k,
			v,
			$postIframe,
			postIframeName;
		self.postIframeCount = self.postIframeCount || 0;
		postIframeName = "fg-post-iframe" + self.postIframeCount;

		// create new iframe for each post
		$postIframe = faZepto("<iframe>", {
			"id": postIframeName,
			"name": postIframeName,
			"class": "fg-post-iframe",
			"src": ""
		});
		faZepto(self.fgOverlay).append($postIframe);
		// add post iframe counter to POST data so the server response is able to give that information back
		dataObject = dataObject || {};
		dataObject = faZepto.extend(dataObject, {
			"post_count": self.postIframeCount
		});

		$formElement = faZepto("<form>", {
			"id": "fg-post-form" + self.postIframeCount,
			"class": "fg-form",
			"action": (url.indexOf('http:') == -1 ? self.config.urlRoot : '') + url,
			"method": "POST",
			"style": "display:none",
			"target": postIframeName
		});
		self.postIframeCount++;
		faZepto(self.rootElement).append($formElement);

		for (k in dataObject){
			if (!dataObject.hasOwnProperty(k)){
				continue;
			}
			v = dataObject[k];

			$formElement.append(faZepto("<input>", {
				type: "hidden",
				name: k,
				value: v
			}));
		}
		$formElement.submit();

		return self;
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.notificationsModule = function() {
	var self = this,
		M;

	function notificationsModule(){ // define private vars
		this.items = [];
	}

	notificationsModule.prototype.init = function() {
		self.notificationArea = self.createElement('div', {'id': 'fg-notifications'});

		self.notificationClose = self.createElement('div', {'class': 'fg-close-notifications'});
		self.notificationClose.innerHTML = self.translate("api.modal_close");
		self.notificationClose.style.display = 'none';

		self.handleClick(self.notificationClose, function(){
			M.closeAll();
		});

		self.notificationArea.appendChild(self.notificationClose);

		self.rootElement.appendChild(self.notificationArea);
	};

	notificationsModule.prototype.add = function(messageObject){
		if (!messageObject.type || !messageObject.text){
			return false;
		}

		M.closeByClass(messageObject.classes);

		var item = new self.notificationItem(messageObject);

		// Add to document
		self.notificationArea.insertBefore(item.element, self.notificationArea.firstChild);

		M.items.push(item);

		M.showClose();

		return self;
	};

	notificationsModule.prototype.removeFromList = function(item){
		var idx = M.items.indexOf(item);
		M.items.splice(idx, 1);
	};

	notificationsModule.prototype.closeAll = function(){
		while(M.items.length > 0){
			M.items[0].close();
		}
	};

	notificationsModule.prototype.showClose = function(){
		if(M.items.length > 1){
			self.notificationClose.style.opacity = 1;
			self.notificationClose.style.display = "block";
		}
	};

	notificationsModule.prototype.hideClose = function(){
		if(M.items.length <= 1){
			self.notificationClose.style.opacity = 0;
			self.notificationClose.style.display = "none";
		}
	};

	notificationsModule.prototype.closeByClass = function(classes){
		for(var i = 0; i < M.items.length; i++){
			if(M.items[i].classes == classes){
				M.items[i].close();
			}
		}
	};

	//create new instace of Module
	M = new notificationsModule();
	//initialize Module
	M.init();

	return M;
};

fg_api.prototype.notificationItem = function(messageObject) {
	var self = window.famobi,
		M;

	function module(){ // define private vars
		this.element = this.message = "";
	}

	var notificationPrototype = module.prototype;

	notificationPrototype.init = function(messageObject) {
		M.message = messageObject.text;
		M.classes = messageObject.classes;

		var ctaClass = "";
		if(messageObject.text.indexOf("btn-cta") > 0) // check if click to action button is inside
			ctaClass = " fg-notification-cta";

		M.element = document.createElement('div');
		M.element.setAttribute('class', 'fg-notification fg-fade fg-show ' + M.classes + ctaClass);

		var newMessage = document.createElement('div');
		newMessage.setAttribute('class', 'fg-message');
		newMessage.innerHTML = M.message;
		M.element.appendChild(newMessage);

		var closeBtn = document.createElement('div');
		closeBtn.setAttribute('class', 'fg-close-notification icon-cancel');
		M.element.appendChild(closeBtn);

		M.timeout = setTimeout(function(){
			M.close();
		}, 7000);

		if (messageObject.action){
			self.handleClick(M.element, function(){
				self[messageObject.action]();
				self.notifications.closeAll();
			});
		}

		self.handleClick(closeBtn, function(){
			M.close();
		});
	};

	notificationPrototype.close = function(){
		M.element.parentNode.removeChild(M.element);
		clearTimeout(M.timeout);
		self.notifications.removeFromList(M);
		self.notifications.hideClose();
	};

	//create new instace of Module
	M = new module();
	//initialize Module
	M.init(messageObject);

	return M;
};




fg_api.prototype.orientationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var orientationPrototype = module.prototype;

	orientationPrototype.init = function(){
		M.update(self.config.gameParams.orientation);

		return self;
	};

	orientationPrototype.update = function(orientation){
		// show rotation screen?
		if (typeof orientation != 'undefined' &&
			!detection.is.pc && !detection.is.tablet && window.screen && window.screen.height !== window.screen.width) {
			self.rootElement.className = self.rootElement.className + ' fg-orientation-' + orientation;

			if (typeof M.fgLandscapeOverlay == "undefined") {
				M.fgLandscapeOverlay = document.createElement("div");
				M.fgLandscapeOverlay.setAttribute("id", "fg-landscape-overlay");

				M.fgLandscapeImage = document.createElement("img");
				M.fgLandscapeImage.setAttribute("src", "css/RotateToLandscape.png");
				M.fgLandscapeImage.setAttribute("class", "fg-orientation-icon");
				M.fgLandscapeImage.setAttribute("alt", "switch to landscape");
				M.fgLandscapeOverlay.appendChild(M.fgLandscapeImage);

				self.rootElement.appendChild(M.fgLandscapeOverlay);
			}

			if (typeof M.fgPortraitOverlay == "undefined") {
				M.fgPortraitOverlay = document.createElement("div");
				M.fgPortraitOverlay.setAttribute("id", "fg-portrait-overlay");

				M.fgPortraitImage = document.createElement("img");
				M.fgPortraitImage.setAttribute("src", "css/RotateToPortrait.png");
				M.fgPortraitImage.setAttribute("class", "fg-orientation-icon");
				M.fgPortraitImage.setAttribute("alt", "switch to portrait");
				M.fgPortraitOverlay.appendChild(M.fgPortraitImage);

				self.rootElement.appendChild(M.fgPortraitOverlay);
			}
		}

		return self;
	};

	orientationPrototype.lock = function () {
		if ('orientation' in screen) {
			// API supported, yeah!
			if (!detection.is.smartphone) {
				// exit here, if desktop, notebook or tablet device is detected. orientation is only valid for smartphones, tablets could use a responsive version of the game in a different orientation mode or just scale accordingly.
				return true;
			}
			switch (self.config.gameParams.orientation) {
				case 'portrait':
					screen.orientation.lock('portrait-primary');
					break;
				case 'landscape':
					screen.orientation.lock('landscape-primary');
					break;
				default:
					//screen.orientation.lock(self.getOrientation() + '-primary');
					break;
			}
		} else {
			// API not supported :(
		}
	};

	orientationPrototype.unlock = function () {
		if ('orientation' in screen) {
			screen.orientation.unlock();
		}
	}

	M = new module();
	M.init().onorientationchange(function() {
		self.log('famobi.onorientationchange: ', self.getOrientation(), window.innerWidth, window.innerHeight);
	});

	return M;
};

fg_api.prototype.getOrientation = function() {
	var orientation = '';
	if (window.innerHeight != window.innerWidth) {
		orientation = window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
	}
	return orientation;
};

fg_api.prototype.onOrientationChange = fg_api.prototype.onorientationchange = function(callback) {
	if (typeof callback !== 'function') {
		this.error('famobi.onorientationchange: no valid callback provided.');
	}
	return faZepto(window).resize(callback);
};





fg_api.prototype.splashModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var splashPrototype = module.prototype;

	splashPrototype.init = function(){
		var fgSplash = document.createElement("div");
		fgSplash.setAttribute("id", "fg-splash-screen");
		fgSplash.setAttribute("style", "background-image: url('"+ self.config.assetsPath +"/images/splashscreen_"+self.config.language+".png');");
		self.rootElement.appendChild(fgSplash);

		faZepto(fgSplash).preventClick();

		setTimeout(function(){
			fgSplash.parentNode.removeChild(fgSplash);
		}, 2500);
		
		return self;
	};

	//create new instace of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};





fg_api.prototype.trackingModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var trackingPrototype = module.prototype;

	trackingPrototype.init = function() {
		famobi_dataLayer = window.famobi_dataLayer || window.dataLayer || [];

		// Use dataLayer variables
		famobi_dataLayer.push({
			'packageId': window.famobi_gameID,
			'affiliateId': self.config.aid,
			'section': 'ingame'
		});

		faZepto(self.rootElement).one('faGame:loaded', function() {
			// Track Gameplay after 30 seconds
			setTimeout(function() {
				M.trackEvent("Target", "Gameplay", famobi_gameID);
			}, 30E3);
		});
	};

	trackingPrototype.data = function(dataObject) {
		famobi_dataLayer.push(dataObject);
	};

	trackingPrototype.trackEvent = function(category, action, label, nonInteraction) {
		if (typeof nonInteraction === 'undefined')
			nonInteraction = false;

		famobi_dataLayer.push({
			'event': 'Ingame event',
			'eventCategory': category,
			'eventAction': action,
			'eventLabel': label,
			'nonInteraction': nonInteraction
		});

		famobi_dataLayer.push({
			'event': undefined,
			'eventCategory': undefined,
			'eventAction': undefined,
			'eventLabel': undefined,
			'nonInteraction': undefined
		});
	};

	trackingPrototype.trackPassiveEvent = function(category, action, label) {
		return M.trackEvent(category, action, label, true);
	};

	trackingPrototype.trackEventData = function(category, data) {

		if (!window.mixpanel) {
			// in case mixpanel is missing in GTM
			window.mixpanel = {
				track: function() {},
				register: function() {},
				register_once: function() {},
				identify: function() {},
				alias: function() {},
				people: {
					'set': function() {},
					increment: function() {},
					track_charge: function() {}
				}
			};
		}

		famobi_dataLayer.push({
			'event': 'Ingame event data',
			'eventCategory': category,
			'eventData': data
		});

		famobi_dataLayer.push({
			'event': undefined,
			'eventCategory': undefined,
			'eventData': undefined
		});
	};

	trackingPrototype.initGameDistribution = function() {
		var gd_gameId = "",
			gd_guid = "";

		if (self.config.gameParams.gd) {
			gd_gameId = self.config.gameParams.gd.gameId;
			gd_guid = self.config.gameParams.gd.guid;
		} else {
			gd_gameId = "74791edf1f8e8b8289a5067737630874";
			gd_guid = "49902FFB-24ED-4E3A-A9D8-87146A33BF88-s1";
		}
		if (typeof window.gd !== "undefined") {
			window.gd.logger.init(gd_gameId, gd_guid);
		}
	};

	trackingPrototype.trackGameDistributionPlay = function() {
		if (typeof window.gd !== "undefined") {
			window.gd.logger.play();
		}
	};

	M = new module();
	M.init();

	return M;
};









/* Signals / Events received from the game */
fg_api.prototype.gameStarted = function() {
	this.log("Received gameStarted signal");
};

fg_api.prototype.gamePaused = function() {
	this.log("Received gamePaused signal");
};

fg_api.prototype.gameResumed = function() {
	this.log("Received gameResumed signal");
};

fg_api.prototype.gameOver = function() {
	var self = this;
	this.ads.showAd(function() {
		// Run Adapter if possible
		self.adapters.run("game", "gameOver");
	});

	this.log("Received gameOver signal");
};

fg_api.prototype.levelUp = function() {
	var self = this;
	this.ads.showAd(function() {
		// Run Adapter if possible
		self.adapters.run("game", "levelUp");
	});

	this.log("Received levelUp signal");
}

fg_api.prototype.setVolume = function(newVolume) {
	this.log("Received volume control signal");
};



fg_api.prototype.gametranslationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var gameTranslationPrototype = module.prototype;

	gameTranslationPrototype.init = function() {
		M.curLangString = M.getUserLang();

		M.translationData = M.getGameTranslations();

		M.translateHtml(faZepto('body'));
	};

	gameTranslationPrototype.getSupportedLanguages = function() {
		return self.config.languages;
	};

	gameTranslationPrototype.getGameTranslations = function() {
		var i18n = self.config.game_i18n,
			lang = M.curLangString;

		if (i18n.current) {
			return i18n.current;
		}

		faZepto.each(i18n, function (language, translations) {
			faZepto.each(translations, function(key, value) {
				if(value == null){
					i18n[language][key] = "";
				} else if(typeof i18n[language][key] === "string") {
					i18n[language][key] = value.replace(/\{lang\}/g, language);
				}
			});
		});

		i18n.current = faZepto.extend(
			i18n["default"],
			i18n[self.config.aid+".default"],
			i18n[lang],
			i18n[self.config.aid+'.'+lang]
		);

		return (self.config.game_i18n.current = i18n.current);
	};

	gameTranslationPrototype.translateString = function(key){
		return M.translationData[key] || null;
	};

	gameTranslationPrototype.getNavigatorLocale = function() {
		var language = "";

		if (navigator.language) {
			language = navigator.language;
		} else if (navigator.userLanguage) {
			language = navigator.userLanguage;
		} else if (navigator.browserLanguage) {
			language = navigator.browserLanguage;
		}

		return language;
	};

	gameTranslationPrototype.getNavigatorLanguage = function() {
		return M.getNavigatorLocale().substr(0, 2);
	};

	gameTranslationPrototype.getUserLang = function() {
		var urlParams = self.getUrlParams(),
			supportedLangs = M.getSupportedLanguages(),
			lang = M.getNavigatorLanguage();

		if (urlParams.locale && faZepto.inArray(urlParams.locale, supportedLangs) > -1){
			return urlParams.locale;
		}

		switch (lang) {
			case "ch":
			case "at":
				return "de";
			case "de":
			case "en":
			case "tr":
				return lang;
			default:
				return faZepto.inArray(lang, supportedLangs) !== -1 ? lang : "en";
		}
	};

	gameTranslationPrototype.translateHtml = function ($selector) {
		$selector.find('[data-i18n]').each(function() {
			var textkey = this.getAttribute('data-i18n');
			this.innerHTML = M.translateString(textkey);
		});
	};

	gameTranslationPrototype.translateXml = function (xml) {
		if (!xml) {
			return xml;
		}

		var $xml = jQuery(jQuery.parseXML(xml)),
			prefix = xml.substr(0, xml.indexOf("\n"));

		self.log($xml);

		$xml.find('[data-i18n]').each(function() {
			var textkey = this.getAttribute('data-i18n');
			jQuery(this).text(M.translateString(textkey));
		});

		var tagName = $xml.get(0).documentElement.tagName;
		try {
			xml = (new XMLSerializer()).serializeToString($xml.get(0));
		} catch (ex) {
			// xml = prefix + "\n" + "<" + tagName + ">" + $xml.get(0).documentElement + "</" + tagName + ">";
		}

		self.log(xml);

		return xml;
	};

	M = new module();

	M.init();

	return M;
};

fg_api.prototype.__ = function (key) {
	return this.gametranslation.translateString(key);
};

// Alias for __()
fg_api.prototype.translate = function(key) {
	return this.__(key);
};

fg_api.prototype.translateHtml = function() {
	return this.gametranslation.translateHtml.apply(this, arguments);
};

fg_api.prototype.translateXml = function() {
	return this.gametranslation.translateXml.apply(this, arguments);
};

fg_api.prototype.getCurrentLanguage = function () {
	return this.gametranslation.curLangString;
};



fg_api.prototype.gameModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.waitingCounter = 0;
	}

	var gamePrototype = module.prototype;

	gamePrototype.prepare = function() {
		M.linkCanonical().changeOpacity().changeMetaViewport();
		faZepto(self.rootElement).on('faGame:loaded', M.changeMetaViewport);
		faZepto(self.rootElement).on('faGame:loaded', M.hideCanvasBodyOverflow);

		return M;
	};

	gamePrototype.setWaiting = function(newVal) {
		newVal ? M.waitingCounter++ : M.waitingCounter > 0 ? M.waitingCounter-- : M.waitingCounter = 0;
		return M;
	};

	gamePrototype.isWaiting = function() {
		return M.waitingCounter > 0;
	};

	gamePrototype.init = function() {
		self.spinner.show();

		(function next() {
			// is the game waiting for an Ad to finish loading/displaying (DFP Video)?
			if (M.isWaiting()) {
				return;
			}

			if (!window.famobi_gameJS.length) {
				faZepto(self.rootElement).trigger('faGame:loaded');
				self.spinner.hide();
				// Run Adapter if possible
				self.adapters.run("game", "loaded");
				return;
			}
			var currentScript = window.famobi_gameJS.shift();

			if (typeof currentScript === "function") {
				currentScript();
				next();
			} else {
				var scriptEl = document.createElement("script");
				scriptEl.onload = next;
				scriptEl.onerror = next;
				scriptEl.src = currentScript;
				self.bodyElement.appendChild(scriptEl);
			}
		})();
	};

	gamePrototype.pause = function() {

		try {
			if (typeof window.famobi_onPauseRequested == 'function') {
				return window.famobi_onPauseRequested();
			}
			// Phaser
			if (window.game && typeof window.game.paused !== "undefined") {
				window.game.paused = true;
				return true;
			}
			// Construct 2
			if (typeof window.cr_setSuspended !== "undefined") {
				cr_setSuspended(true);
				return true;
			}
			// CreateJS <3
			if (typeof window.createjs !== "undefined") {
				//window.createjs.old_FPS = window.createjs.Ticker.getFPS();
				//window.createjs.Ticker.setFPS(0);
				//window.createjs.Ticker.paused = true;
				window.createjs.Sound.setMute(true);
			}
		} catch(e) {
			self.log("Pausing game failed: "+e);
		}

		return false;
	};

	gamePrototype.resume = function() {

		try {
			if (typeof window.famobi_onResumeRequested == 'function') {
				return window.famobi_onResumeRequested();
			}
			// Phaser
			if (window.game && typeof window.game.paused !== "undefined") {
				window.game.paused = false;
				return true;
			}
			// Construct 2
			if (typeof window.cr_setSuspended !== "undefined") {
				cr_setSuspended(false);
				return true;
			}
			// CreateJS <3
			if (typeof window.createjs !== "undefined") {
				//window.createjs.Ticker.setFPS(window.createjs.old_FPS || window.createjs.Ticker.getFPS() || 60);
				//window.createjs.Ticker.paused = false;
				window.createjs.Sound.setMute(false);
			}
		} catch(e) {
			self.log("Resuming game failed: "+e);
		}

		return false;
	};

	gamePrototype.linkCanonical = function() {
		var link = faZepto('<link rel="canonical" href="' + self.getShortLink() + '">');

		link.appendTo(self.headElement);

		return M;
	};

	gamePrototype.changeOpacity = function() {
		var opac = self.bodyElement.style.opacity+"";

		if (opac !== "" && parseInt(opac) < 1) {
			self.bodyElement.style.opacity = "1.0";
		}

		return M;
	};

	gamePrototype.changeMetaViewport = function() {
		// change meta viewport content if its attribute 'data-original' exists
		var $metaviewport = document.querySelector("meta[name=viewport]"),
			ua = navigator.userAgent,
			metaViewPortSetting = $metaviewport ? $metaviewport.getAttribute("data-original") : undefined;
		if ($metaviewport && metaViewPortSetting){
			if(!!ua.match(/iPhone|iPod|Tizen/i))
				metaViewPortSetting = 'width=device-width, user-scalable=0, minimum-scale=1.0, initial-scale=0.5, maximum-scale=0.5, minimal-ui';
			else if(!!ua.match(/iPad/i))
				metaViewPortSetting = 'width=device-width, user-scalable=0, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, minimal-ui';
		  	else if(!!ua.match(/Android/i))
				metaViewPortSetting = 'width=device-width, initial-scale=1, maximum-scale=1.01';

			$metaviewport.setAttribute('content', metaViewPortSetting);
		}
	};

	gamePrototype.hideCanvasBodyOverflow = function() {
		var canvas = document.querySelector("canvas");
		if (canvas) {
			self.bodyElement.style.overflow = 'hidden';
		}
	};

	M = new module();

	return M;
};



fg_api.prototype.fullscreenModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.isSupported = false;
	}

	var fullscreenPrototype = module.prototype;

	fullscreenPrototype.init = function() {
		var elem = document.documentElement;

		try {
			if (!elem) {
				throw('documentElement not supported');
			}

			if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) {
				throw('Fullscreen mode not supported');
			}

			if (elem.requestFullscreen) {
				this.requestFullscreen = 'requestFullscreen';
			} else if (elem.requestFullScreen) {
				this.requestFullscreen = 'requestFullScreen';
			} else if (elem.webkitRequestFullScreen) {
				this.requestFullscreen = 'webkitRequestFullscreen';
			} else if (elem.webkitRequestFullScreen) {
				this.requestFullscreen = 'webkitRequestFullScreen';
			} else if (elem.mozRequestFullScreen) {
				this.requestFullscreen = 'mozRequestFullScreen';
			} else if (elem.msRequestFullscreen) {
				this.requestFullscreen = 'msRequestFullscreen';
			} else {
				throw('Fullscreen API not supported');
			}

			this.isSupported = this.requestFullscreen;
		} catch (ex) {
			this.isSupported = false;
		}
		
		if (!this.isSupported) {
			faZepto("[data-famobi-fullscreen]").remove();
		}
	};

	fullscreenPrototype.isSupported = function() {
		return this.isSupported;
	}

	fullscreenPrototype.start = function() {
		var elem = document.documentElement;

		if (self.fullscreen.isSupported) {
			elem[this.requestFullscreen]();
		} else {
			return false;
		}
		
		return true;
	}

	fullscreenPrototype.stop = function() {
		self.orientation.unlock();
		
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		
		return true;
	}

	fullscreenPrototype.toggle = function() {
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
			M.start();
			setTimeout(function() {
				self.orientation.lock();
			}, 1E3);
			return true;
		} else {
			return M.stop();
		}
	}

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.paymentModule = function() {
	var self = this,
		user = {
			id: null
		},
		currentHash = null,
		M,
		callbacks = {},
		newWindow,
		postData;

	function module() {

	}

	var TrxManager = {
		KEY: 'payment:trx',
		setTrx: function(id) {
			self.localStorage.setItem(TrxManager.KEY, id);
		},
		getTrx: function() {
			return self.localStorage.getItem(TrxManager.KEY);
		},
		hasTrx: function() {
			return !!TrxManager.getTrx();
		},
		removeTrx: function() {
			self.localStorage.removeItem(TrxManager.KEY);
		}
	};

	var paymentProt = module.prototype;

	paymentProt.init = function () {
		setUpPayment();
	};

	function getProvider() {
		return self.config.gameParams.payment ? self.config.gameParams.payment.provider : 'paymentwall';
	}

	function setUpPayment() {
		faZepto(window).on('hashchange', function() {
			var hash = document.location.hash.substr(1).split('&');
			var action = hash[0];
			var trxID = hash[1];
			switch (action) {
				case 'payment-success':
					onPaymentSuccess(trxID);
					break;
			}
		});

		self.iframe
			.subscribePostMessageListener('payment', 'displayWidget', function(data){
				if (data.error) {
					self.error('Payment widget error occured', data.message);
					return;
				}

				if (!data.trx) {
					self.error('No payment trx received');
					return;
				} else {
					// store trx
					TrxManager.setTrx(data.trx);
				}

				if (data.user) {
					self.user.update(data.user);
				}

				// remember old hash
				currentHash = document.location.hash;

				self.tracking.trackEventData("Payment event", {
					"action": "Open Widget",
					"provider": getProvider(),
					"detection": detection.is,
					"itemID": postData.itemID,
					"gameID": postData.gameID,
					"userID": self.user.get('id'),
					"customId": postData.customId,
					"trxID": data.trx
				});

				var iframe = faZepto(data.html);
				self.modal.create({
					showCloseBtn: false,
					transparent: true,
					mode: 'payment'
				});
				self.modal.setContent(iframe.get(0));
				iframe.on('load', function() {
					self.modal.showCloseBtn();
					self.modal.activateCloseOverlay(0);
					self.spinner.hide();
				});
				//self.modal.setDimensions(480, 640);
				self.modal.setCloseCallback(function() {
					// TODO: onWidgetCancel();
				});
				self.spinner.show();

			})
			.subscribePostMessageListener('payment', 'purchase', function(data){
				var content = '';
				var closecallback = function() {};
				var provider = getProvider();

				self.modal.close();

				function trackSuccess(data) {
					self.tracking.trackEvent("Payment event", "Payment success", provider);
					self.tracking.trackEventData("Payment event", {
						"action": "Payment success",
						"provider": provider,
						"detection": detection.is,
						"userID": self.user.get('id'),
						"trxID": data.trx
					});
				}

				if (data.action == 'listsilent') {
					if (callbacks.listsilent) {
						callbacks.listsilent(data.purchase ? data.purchase : {});
						if (data.purchase) {
							trackSuccess(data);
						}
					}
					return;
				} else if (data.action === 'success') {
					if (callbacks.success) {
						TrxManager.removeTrx();
						callbacks.success(data);
						trackSuccess(data);
						return;
					}
					content = '<div><h2>' + self.translate("api.payment_list") + '</h2>';
				} else if (data.action == 'list') {
					content = '<div><h2>' + self.translate("api.payment_list") + '</h2>';
					self.tracking.trackEvent("Payment event", "Payment List");
				}

				content+= self.translate("api.payment_items") + ':';
				content+= '<ul>';
				for (var itm in data.purchase) {
					content += '<li>' + itm +  ': ' + data.purchase[itm] + '</li>';
				}
				content+= '</ul>';
				self.modal.create({
					showCloseBtn: true,
					transparent: false,
					mode: 'payment'
				});
				self.modal.setDimensions();
				self.modal.setCloseCallback(closecallback);
				self.modal.setContent(faZepto(content).get(0));
			});

	}

	function onPaymentSuccess(trxID, provider) {
		provider = provider || getProvider();
		self.spinner.show();
		self.iframe.postData("/payment/purchase/success/" + getProvider(), {
			user: self.user.get('id'),
			trx: trxID
		});
		if (currentHash != document.location.hash) {
			window.history.back(1);
		}
	}

	function onWidgetCancel(provider) {
		self.iframe.postData("/payment/trx/cancel/" + getProvider(), {
			userId: self.user.get('id')
		});
	}

	paymentProt.isAvailable = function() {
		if (!self.hasFeature("payment")){
			self.log('Payment feature disabled');
			return false;
		}
		if (!self.config.gameParams.payment || !famobi.config.gameParams.payment.active){
			self.log('Payment feature disabled for game');
			return false;
		}
		return true;
	};

	function openWidget(itemID, callback, gameData, provider) {
		provider = provider || getProvider();
		if (!paymentProt.isAvailable()) {
			return;
		}
		if (!itemID) {
			self.log('Missing Payment parameters');
			return false;
		}
		if (!window.famobi_gameID) {
			self.log('Missing gameID for Payment');
			return false;
		}
		if (typeof callback == 'function') {
			callbacks.success = callback;
		}
		postData = {
			gameID: window.famobi_gameID,
			itemID: itemID
		};
		if (gameData && gameData.customId) {
			postData.customId = gameData.customId;
		}
		if (self.user.exists()) {
			postData.user = self.user.get('id');
		}
		postData.location = document.location.href.split('#')[0];
		self.iframe.postData("/payment/trx/start/" + provider, postData);

		self.tracking.trackEvent("Payment event", "Open Widget", provider);
		return true;
	}

	paymentProt.showPayment = function(itemID, callback, gameData) {
		openWidget(itemID, callback, gameData);
	};

	paymentProt.getPurchase = function(cb, provider) {
		provider = provider || getProvider();
		var action;
		if (typeof cb == 'function') {
			callbacks.listsilent = cb;
			action = 'listsilent';
		} else {
			//self.spinner.show();
			//action = 'list';
			action = 'listsilent';
		}

		if (TrxManager.hasTrx()) {
			var trx = TrxManager.getTrx();
			TrxManager.removeTrx();
			self.log('Get purchase for trx ' + trx);
			self.iframe.postData("/payment/purchase/" + action + "/" + provider, {
				user: self.user.get('id'),
				trx: trx
			});
		}
	};

	paymentProt.consumed = function(item, amount, provider) {
		provider = provider || getProvider();
		self.tracking.trackEvent("Payment event", "Payment consumed", item);
		self.iframe.postData("/payment/purchase/consumed/" + provider, {
			itemId: item,
			amount: amount,
			user: self.user.get('id')
		});
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.userModule = function() {
	var self = this,
		userKey = 'famobi_user',
		userData = {
			id: !1
		},
		M;

	function module() {
	}

	module.prototype = {
		init: function() {
			var json = self.localStorage.getItem(userKey);
			if (json) {
				try {
					userData = JSON.parse(json+"");
				} catch (e) {}
			}
		},
		exists: function() {
			var self = this;
			return !!self.get('id');
		},
		'get': function(attr) {
			if (attr) {
				if (userData.hasOwnProperty(attr)) {
					return userData[attr];
				}
			} else {
				return userData;
			}
		},
		update: function(data) {
			userData = data;
			var userDataJson = JSON.stringify(userData);
			self.localStorage.setItem(userKey, userDataJson);
		}
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.flashModule = function() {
	var self = this,
		M;

	function module() { // define private vars

		this.offsetWidth	= 0; // px
		this.offsetHeight	= 0; // px

		// swfobject
		this.swfUrl 		= window.famobi_gameID+".swf";
		this.replaceElemId 	= "myContent";
		this.width			= parseInt(window.innerWidth)-this.offsetWidth;
		this.height			= parseInt(window.innerHeight)-this.offsetHeight;
		this.swfVersion		= "9.0.0";
		this.xiSwfUrl		= "expressInstall.swf";
		this.flashvars 		= {
								fg_aid : window.famobi.config.aid,
								fg_uid : window.famobi.config.uuid,
								fg_game : window.famobi_gameID
							};
		this.params 		= {
								allowscriptaccess : "always"
							};
		this.attributes 	= {};
		this.callbackFn 	= function() {};
	}

	var flashPrototype = module.prototype;

	flashPrototype.init = function() {

		var fgFlash = null, // flash replacing container
			fgGetFlashLink = null, // get flash link
			arr = ['flashvars', 'params', 'attributes'];
			fgGetFlash = null; // get flash image

		self.log("Ready, ...");
		if (!self.config.gameParams.flash) return false;

		self.log("Set, ...");
		M.replaceElemId 	= self.config.gameParams.flash.replaceElemId || M.replaceElemId;
		M.swfUrl 			= self.config.gameParams.flash.swfUrl || M.swfUrl;
		M.width				= self.config.gameParams.flash.width || M.width;
		M.height			= self.config.gameParams.flash.height || M.height;
		M.swfVersion		= self.config.gameParams.flash.swfVersion || M.swfVersion;
		M.xiSwfUrl			= self.config.gameParams.flash.xiSwfUrl || M.xiSwfUrl;

		// create div container for swfobject to replace
		fgFlash = document.createElement("div");
		fgFlash.setAttribute("id", M.replaceElemId);
		fgFlash.setAttribute("style", "display: none");
		self.bodyElement.appendChild(fgFlash);

		// disable ads
		self.config.ads.off = true;

		// callback
		if(self.config.gameParams.flash.callbackFn) {
			M.callbackFn = new Function(self.config.gameParams.flash.callbackFn);
		} else {
			M.callbackFn = function() {
				if(swfobject.getFlashPlayerVersion().major === 0) {
					fgFlash.style.display = "block";

					fgGetFlashLink = self.createElement("a", {
						"href": "http://www.adobe.com/go/getflashplayer",
						"target": "_blank"
					});
					fgGetFlash = self.createElement("img", {
						"src": "/flashgames/swfobject/getFlash.png",
						"alt": "Get Adobe Flash player",
						"title": "Get Adobe Flash player"
					});
					fgGetFlashLink.appendChild(fgGetFlash);
					fgFlash.appendChild(fgGetFlashLink);

					self.modal.create({'title': 'Get Adobe Flash player'});
					self.modal.setContent(fgFlash);
				};
			};
		}

		// merge flashvars, params and attributes
		for(var key in arr) {
			if(!self.config.gameParams.flash[arr[key]]) break;
			for (var attrName in self.config.gameParams.flash[arr[key]]) { M[arr[key]][attrName] =  self.config.gameParams.flash[arr[key]][attrName]; }
		}

		self.log("Go!");
		window.famobi_gameJS = window.famobi_gameJS || [];
		window.famobi_gameJS.unshift(
			"/flashgames/swfobject/swfobject.js",
			function() {
				swfobject.embedSWF(M.swfUrl, M.replaceElemId, M.width, M.height, M.swfVersion, M.xiSwfUrl, M.flashvars, M.params, M.attributes, M.callbackFn);
			}
		);

		return self;
	};

	//create new instace of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};





fg_api.prototype.facebookModule = function() {
	var self = this,
		M;

	function module() { // define private vars
	}

	var facebookPrototype = module.prototype;

	facebookPrototype.init = function() {
		window.fbAsyncInit = function() {
			FB.init({
				xfbml      : true,
				version    : 'v2.5'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		return self;
	};

	facebookPrototype.parse = function() {
		FB.XFBML.parse(self.rootElement);
	};

	//create new instance of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};



fg_api.prototype.init = function() {
	var self = this;
	self.rootElement = document.getElementById("fg-root");
	self.bodyElement = document.getElementsByTagName("body")[0];
	self.headElement = document.getElementsByTagName("head")[0];

	if (!self.rootElement){
		self.log("could not find fg-root node (insert <div id=\"fg-root\"></div> before script tag)");
		self.rootElement = self.createElement("div", {
			"id": "fg-root",
			"class": "fg-root"
		});
		document.body.insertBefore(self.rootElement,document.body.firstChild);
	}

	// self.fgOverlay = self.createElement("div", {"id": "fg-overlay"});

	// if(self.config.gameParams.overlay_position)
	// 	self.fgOverlay.className = 'overlay-' + self.config.gameParams.overlay_position + ' clip-' + self.config.gameParams.overlay_position;

	// if(self.config.gameParams.overlay_distance && self.config.gameParams.overlay_distance !== ''){
	// 	if(self.config.gameParams.overlay_position && self.config.gameParams.overlay_position == "bottom")
	// 		self.fgOverlay.style.bottom = self.config.gameParams.overlay_distance + "px";
	// 	else
	// 		self.fgOverlay.style.top = self.config.gameParams.overlay_distance + "px";
	// }

	self.rootElement.appendChild(self.fgOverlay);

	document.title = JSON.parse(self.config.name);

	function require(module) {
		return self[module + "Module"] && self[module + "Module"].call(self, Array.prototype.slice.call(arguments, 1));
	}
		self.game 			= require("game").prepare(); // init after all modules have been loaded
		self.localStorage 	= require("storage", "localStorage");
		self.sessionStorage = require("storage", "sessionStorage");
		self.sdk			= require("sdk");
		self.gametranslation= require("gametranslation");
		//self.facebook		= require("facebook");

	function onloadCallback(){
		// keep order
		// navigation first, because event handlers and language switches otherwise don't work
		self.navigation 	= require("navigation");
		// spinner first, used by ads
		self.spinner 		= require("spinner").show();
		self.adapters 		= require("adapters");
		self.tracking 		= require("tracking");
		self.iframe 		= require("iframe");
		self.modal          = require("modal");
		self.login 			= require("login");
		self.highscores 	= require("highscores");
		self.screenshot 	= require("screenshot");
		self.user			= require("user");
		self.notifications 	= require("notifications");
		self.ads 			= require("ads");
		self.fullscreen		= require("fullscreen");
		self.orientation	= require("orientation");
		self.payment		= require("payment");
		self.flash			= require("flash");

		self.game.init();


		if (detection.is.pc && window.console) {
			console.log("%c ", "background: #fff; border-right: 20px solid #fff; border-left: 50px double #0092c3;");
			console.log("%c ", "background: #fff; border-right: 20px solid #fff; border-left: 50px double #f08119;");
			console.log("%c famobi.com ", "background: #fff; color: #333; border-right: 20px solid #fff; border-left: 50px double #333;");
		}
	}
	
	// Favicon
	if (!faZepto('link[rel="icon"]').get(0)) {
    	if (self.config.favicon_32 != '') {
    	    self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="32x32" href="' + self.config.favicon_32 + '">').get(0));
    	}
    	if (self.config.favicon_64 != '') {
    	    self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="64x64" href="' + self.config.favicon_64 + '">').get(0));
    	}
    	if (self.config.favicon_96 != '') {
    	    self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="96x96" href="' + self.config.favicon_96 + '">').get(0));
    	}
    	if (self.config.favicon_192 != '') {
    	    self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="192x192" href="' + self.config.favicon_192 + '">').get(0));
    	}
    }

	// Hack! Detect if more-games-button can be loaded, otherwise fall back to a transparent png
	var moreGamesBtn = self.getMoreGamesButtonImage();
	var moreGamesImg = new Image();

	moreGamesImg.onload = advance;
	moreGamesImg.onerror = function() {
		if (self.config.game_i18n.current) {
			self.config.game_i18n.current.more_games_image = "/html5games/branding/default/More_Games600x253_transparent.png";
		}
		advance();
	};

	moreGamesImg.src = moreGamesBtn;

    function advance() {
		var newStylesheet = document.createElement("link");
		newStylesheet.setAttribute("rel", "stylesheet");
		newStylesheet.setAttribute("type", "text/css");
		newStylesheet.setAttribute("href", self.config.assetsPath + "/css/play.css");
 		// newStylesheet.onload = onloadCallback;
 		self.onloadTimer = setTimeout(onloadCallback, 750);
 		self.headElement.appendChild(newStylesheet);
	}

	return self;
};