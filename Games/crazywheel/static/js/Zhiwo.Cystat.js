
window.CYSTAT = {
	tailUrl : "/trail/ajax",
	swfId : "cyuen",
	swfUrl : "/static/js/zwuen.swf",
	swfLoad : false,
	swfValue : null,
	callBack : function(ret) {
		if(ret.status == 'loaded') {
			CYSTAT.swfLoad = true;
		} else if(ret.status == 'write') {
			CYSTAT.swfValue = ret.data;
		} else if(ret.status == 'read') {
			CYSTAT.swfValue = ret.data;
		}
	},
	setCache : function(str) {
		document.getElementById(CYSTAT.swfId).setUen(str);
	},
	getCache : function() {
		document.getElementById(CYSTAT.swfId).getUen();
	},
	delCache : function() {
		document.getElementById(CYSTAT.swfId).delUen();
	},
	getFlashVersion : function() {
		var hasFlash = false, version = [];
		if (navigator.plugins != null && navigator.mimeTypes.length) {
			var x = navigator.plugins["Shockwave Flash"];
			if (x && x.description) {
				hasFlash = true;
				version = x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".");
			}
		} else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
			var axo = 1, counter = 3;
			while (axo) {
				try {
					counter++;
					axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + counter);
					hasFlash = true;
					version = [counter, 0, 0];
					} catch (e) {
						axo = null;
				}
			}
		} else {
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				} catch (e) {}
			if (axo != null) {
				hasFlash = true;
				version = axo.GetVariable("$version").split(" ")[1].split(".");
			}
		}
		return {
			supportFlash: hasFlash,
			version: version.join('.')
		}
	},
	insertFlashMovie : function() {
		var fs = CYSTAT.getFlashVersion();
		if (fs.supportFlash == false) {
			return false;
		}
	
		var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
		var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
		var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

		var parent = document.getElementsByTagName('body')[0];
		var div = document.getElementById('swfcontainer');
		if (!div) {
			div = document.createElement("div");
			div.setAttribute('id', 'swfcontainer');
			parent.parentNode.insertBefore(div, parent);
		}
		var str = '';
		if (isIE && isWin && !isOpera) {
			str += '<object width="1" height="1" id="' + CYSTAT.swfId + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0">';
			str += '<param name="allowscriptaccess" value="always" />';
			str += '<param name="movie" value="'+ CYSTAT.swfUrl +'" />';
			str += '<param name="wmode" value="transparent" />';
			str += '<param name="quality" value="low" />';
			str += '</object>';
		} else {
			str += '<embed src="'+ CYSTAT.swfUrl +'" id="' + CYSTAT.swfId + '" width="1" height="1" quality="low" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer_cn" />';
		}
		document.getElementById('swfcontainer').innerHTML = str;
		return true;
	},
	base64: {
		_strKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode: function(input) {
			var self = CYSTAT.base64;
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
			input = self._utf8_encode(input || '');
			while (i < input.length) {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
				output = output + self._strKey.charAt(enc1) + self._strKey.charAt(enc2) + self._strKey.charAt(enc3) + self._strKey.charAt(enc4);
			}
			return output;
		},
		decode: function(input) {
			var self = CYSTAT.base64;
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
			input = (input || '').replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (i < input.length) {
				enc1 = self._strKey.indexOf(input.charAt(i++));
				enc2 = self._strKey.indexOf(input.charAt(i++));
				enc3 = self._strKey.indexOf(input.charAt(i++));
				enc4 = self._strKey.indexOf(input.charAt(i++));
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
				output = output + String.fromCharCode(chr1);
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
			output = self._utf8_decode(output);
			return output;
		},
		_utf8_encode: function(string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				} else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}
			}
			return utftext;
		},
		_utf8_decode: function(utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
			while (i < utftext.length) {
				c = utftext.charCodeAt(i);
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if ((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		}
	},
	setCookie : function(name, value) {
		var times = 5*365*24*3600*1000;
		var exp = new Date(); 
		exp.setTime(exp.getTime() + times);
		document.cookie = name + "="+ encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/";
	},
	getCookie : function (b) {
		var c = document.cookie;
		if (c.length) {
			var a = new RegExp("(?:^|;)\\s*" + b + "=(.*?)(?:;|$)").exec(c);
			if (a && a.length) {
				return decodeURIComponent(a[1]);
			}
		}
		return null;
	},
	getCookie1 : function(name) {
		var a, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(a = document.cookie.match(reg))
			return decodeURIComponent(a[2]);
		else
			return null;
	},
	getQueryString : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return '';
	},
	getRand : function(m,n) {
		var random = Math.floor(Math.random()*n)+m;
		return random;
	},
	createUen : function() {
		var timestamp = new Date().getTime();
		var uen = clientIP + "_" + CYSTAT.getRand(100000,999999) + "|" + timestamp + "|";
		return uen;
	},
	writeUen : function(u, t) {
		var pn = (typeof(page_no) != 'undefined') ? page_no : '';
		var fr = CYSTAT.getQueryString('from');
		var p = document.location.href != null ? CYSTAT.base64.encode(document.location.href) : '';
		var r = document.referrer != null ? CYSTAT.base64.encode(document.referrer) : '';
		setTimeout(function(){
			var _bdhm_tim = new Image(1,1);
			_bdhm_tim.src = CYSTAT.tailUrl + "?u="+u+"&fr="+fr+"&pn="+pn+"&p="+p+"&r="+r+"&t="+t+"&d=" + Math.random();
		},50);
	}
}

var cyuen = CYSTAT.getCookie("cyuen");
if(cyuen == null){
	var flashStatus = CYSTAT.insertFlashMovie();
	if(flashStatus){
		var cyCount = 0;
		var cyId = setInterval(function() {
			if(CYSTAT.swfLoad){
				CYSTAT.getCache();
				if(CYSTAT.swfValue != null){
					clearInterval(cyId);
					CYSTAT.setCookie("cyuen", CYSTAT.swfValue);
					CYSTAT.writeUen(CYSTAT.swfValue, 'getCache');
				}
			}
			if(cyCount > 5){
				clearInterval(cyId);
				cyuen = CYSTAT.createUen();
				cyuen = CYSTAT.base64.encode(cyuen);
				CYSTAT.setCache(cyuen);
				CYSTAT.setCookie("cyuen", cyuen);
				CYSTAT.writeUen(cyuen, 'setCache');
			}
			cyCount++;
		}, 200);
	}else{
		//no supper flash
		cyuen = CYSTAT.createUen();
		cyuen = CYSTAT.base64.encode(cyuen);
		CYSTAT.setCookie("cyuen", cyuen);
		CYSTAT.writeUen(cyuen, 'noSupperFlash');
	}
}else{
	CYSTAT.writeUen(cyuen, 'haveCookie');
}