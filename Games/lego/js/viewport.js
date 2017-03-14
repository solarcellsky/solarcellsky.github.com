	var phoneWidth = parseInt(window.screen.width);
	var phoneScale = phoneWidth / 640;
	var ua = navigator.userAgent;
	if(/Android (\d+\.\d+)/.test(ua)) {
		var version = parseFloat(RegExp.$1);
		if(version > 2.3) {
			document.write('<meta name="viewport" id="vie" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
		} else {
			document.write('<meta name="viewport" id="vie" content="width=640, target-densitydpi=device-dpi">');
		}
	} else {
		document.write('<meta id="vie" name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi, minimal-ui">');
	}




var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?f346267d8fceb4fd79cc0444680d719a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();