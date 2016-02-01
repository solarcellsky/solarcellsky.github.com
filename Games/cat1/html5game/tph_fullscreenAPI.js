/*!function(a,b){"use strict";var c="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,d=function(){for(var a,c,d=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],e=0,f=d.length,g={};f>e;e++)if(a=d[e],a&&a[1]in b){for(e=0,c=a.length;c>e;e++)g[d[0][e]]=a[e];return g}return!1}(),e={request:function(a){var e=d.requestFullscreen;a=a||b.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[e]():a[e](c&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){b[d.exitFullscreen]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){},onerror:function(){},raw:d};return d?(Object.defineProperties(e,{isFullscreen:{get:function(){return!!b[d.fullscreenElement]}},element:{enumerable:!0,get:function(){return b[d.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!b[d.fullscreenEnabled]}}}),b.addEventListener(d.fullscreenchange,function(a){e.onchange.call(e,a)}),b.addEventListener(d.fullscreenerror,function(a){e.onerror.call(e,a)}),a.screenfull=e,void 0):(a.screenfull=!1,void 0)}(window,document);
*/
(function () {
'use strict';

var isCommonjs = typeof module !== 'undefined' && module.exports;
var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

var fn = (function () {
var val;
var valLength;

var fnMap = [
[
'requestFullscreen',
'exitFullscreen',
'fullscreenElement',
'fullscreenEnabled',
'fullscreenchange',
'fullscreenerror'
],
// new WebKit
[
'webkitRequestFullscreen',
'webkitExitFullscreen',
'webkitFullscreenElement',
'webkitFullscreenEnabled',
'webkitfullscreenchange',
'webkitfullscreenerror'

],
// old WebKit (Safari 5.1)
[
'webkitRequestFullScreen',
'webkitCancelFullScreen',
'webkitCurrentFullScreenElement',
'webkitCancelFullScreen',
'webkitfullscreenchange',
'webkitfullscreenerror'

],
[
'mozRequestFullScreen',
'mozCancelFullScreen',
'mozFullScreenElement',
'mozFullScreenEnabled',
'mozfullscreenchange',
'mozfullscreenerror'
],
[
'msRequestFullscreen',
'msExitFullscreen',
'msFullscreenElement',
'msFullscreenEnabled',
'MSFullscreenChange',
'MSFullscreenError'
]
];

var i = 0;
var l = fnMap.length;
var ret = {};

for (; i < l; i++) {
val = fnMap[i];
if (val && val[1] in document) {
for (i = 0, valLength = val.length; i < valLength; i++) {
ret[fnMap[0][i]] = val[i];
}
return ret;
}
}

return false;
})();

var screenfull = {
request: function (elem) {
var request = fn.requestFullscreen;

elem = elem || document.documentElement;

// Work around Safari 5.1 bug: reports support for
// keyboard in fullscreen even though it doesn't.
// Browser sniffing, since the alternative with
// setTimeout is even worse.
if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
elem[request]();
} else {
elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
}
},
exit: function () {
document[fn.exitFullscreen]();
},
toggle: function (elem) {
if (this.isFullscreen) {
this.exit();
} else {
this.request(elem);
}
},
onchange: function () {},
onerror: function () {},
raw: fn
};

if (!fn) {
if (isCommonjs) {
module.exports = false;
} else {
window.screenfull = false;
}

return;
}

Object.defineProperties(screenfull, {
isFullscreen: {
get: function () {
return !!document[fn.fullscreenElement];
}
},
element: {
enumerable: true,
get: function () {
return document[fn.fullscreenElement];
}
},
enabled: {
enumerable: true,
get: function () {
// Coerce to boolean in case of old WebKit
return !!document[fn.fullscreenEnabled];
}
}
});

document.addEventListener(fn.fullscreenchange, function (e) {
screenfull.onchange.call(screenfull, e);
});

document.addEventListener(fn.fullscreenerror, function (e) {
screenfull.onerror.call(screenfull, e);
});

if (isCommonjs) {
module.exports = screenfull;
} else {
window.screenfull = screenfull;
}
})();

var canToggle     = false; // флаг определяет можно ли нам переключаться в фулл. Устанавливается когда польз-ль нажимает кнопку тоггла в игре.
var toggleButton  = document.getElementById('toggle_fullscreen_button');
var _canvas        = document.getElementById("gm4html5_div_id");
var _canvas2        = document.getElementById("canvas");


var GAME_WIDTH    = 480;
var GAME_HEIGHT   = 720;

function js_step()
{
  var dx = 0;
  var dy = 0;
  var scaleW = 1;
  var scaleH = 1;

  if (screenfull.isFullscreen)
  if (GAME_WIDTH < GAME_HEIGHT)
  {


    _canvas.style.left  = "0px";
    _canvas.style.top     = "0px";
    _canvas.style.width = window.innerWidth - dx + "px";
    _canvas.style.height = window.innerHeight - dy + "px";
  }
}

// Установить параметры кнопки переключения в фулскрин
// х, у           - позиция центра кнопки в пикселях
// width, height  - размер кнопки в пикселях

function js_setTogglerParams( _x, _y, _width, _height )
{
  //toggleButton.style.left =  parseInt(_canvas.style.left) + _x - _width * 0.5 + "px";
  //toggleButton.style.top =  parseInt(_canvas.style.top) + _y - _height * 0.5 + "px";
  toggleButton.style.left = _x - _width * 0.5 + "px";
  toggleButton.style.top = _y - _height * 0.5 + "px";
  toggleButton.style.width = _width + "px";
  toggleButton.style.height = _height + "px";
  toggleButton.style.pointerEvents = "auto";
}

function js_disableToggler( )
{
  toggleButton.style.pointerEvents = 'none';
}

function js_initToggler()
{
      js_disableToggler( );

      toggleButton.addEventListener('click', function () 
      {
        // код работы кнопки тоггла

        if (screenfull.enabled) 
        {
           screenfull.toggle(document.getElementById("gm4html5_div_id"));
        }
      }, 
    true);
}

function js_isFullscreenEnabled( )
{
  return screenfull.isFullscreen;
}

function js_isFullscreenAvaliable( )
{
  return screenfull.enabled;
}