webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, createjs, App) {'use strict';

	var _componentLoading = __webpack_require__(3);

	var _componentLoading2 = _interopRequireDefault(_componentLoading);

	var _Data = __webpack_require__(4);

	var _Data2 = _interopRequireDefault(_Data);

	var _buzz = __webpack_require__(106);

	var _buzz2 = _interopRequireDefault(_buzz);

	var _res = __webpack_require__(48);

	var _res2 = _interopRequireDefault(_res);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(107);
	var Weixin = __webpack_require__(79);
	var shareData = {
	    title: "粒粒冰感咬出趣", // 分享标题
	    desc: "我拍了一张粒粒百奇冰感趣味照片，你也一起玩转夏日冰感体验吧", //分享内容
	    link: _Data2.default.serverPath, // 分享链接
	    imgUrl: _Data2.default.serverPath + "201605/images/share.png" };

	// 分享图标
	var Wexin = __webpack_require__(79);
	Wexin.init().done(function () {
	    Weixin.share(shareData, shareData);
	});

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = /android/.test(ua);
	if (!isAndroid) {
	    $(".wrapper").addClass("animation");
	}

	var mySound = new _buzz2.default.sound("./mp3/bg", {
	    formats: ["mp3"]
	});
	mySound.play().loop();

	var stage = new createjs.Stage(document.getElementById('canvas'));
	createjs.Ticker.setFPS(30);
	createjs.Touch.enable(stage);
	createjs.Ticker.addEventListener("tick", stage);

	var indexMC;
	var mainMC;
	var loadingMC;
	var ruleMC;
	var productMC;
	_res2.default.loadScene({ name: "loading", jsonNum: 1 }).done(function (val) {
	    loadingMC = val;
	    stage.addChild(loadingMC);
	    setTimeout(loadGame, 300);
	});

	function loadGame() {
	    _res2.default.loadScene([{ name: "index", jsonNum: 3 }, { name: "main", jsonNum: 5 }]).progress(function (per1, per2) {
	        if (!loadingMC) {
	            return;
	        }
	        per1 = per1 ? per1 : 0;
	        per2 = per2 ? per2 : 0;
	        var per = Math.floor((per1 + per2) / 2);
	        if (per >= 100) {
	            per = 99;
	        }
	        loadingMC.setLoading(per);
	    }).then(function (val1, val2) {

	        $(".logo").show();

	        indexMC = val1;
	        mainMC = val2;
	        // stage.removeChild(loadingMC);
	        // stage.addChild(indexMC);
	        setTimeout(init, 300);
	        // init();
	    });
	}

	//初始化
	function init() {
	    $(".logo").show();

	    stage.removeChild(loadingMC);
	    stage.addChild(indexMC);
	    App.globalDispatcher.addEventListener("startGame", startGameHandler);
	    App.globalDispatcher.addEventListener("rule", showRuleHandler);
	    App.globalDispatcher.addEventListener("product", showProductHandler);
	}
	function startGameHandler(e) {
	    stage.removeAllChildren();
	    stage.addChild(mainMC);
	}
	function showRuleHandler(e) {
	    _componentLoading2.default.show();
	    _res2.default.loadScene({ name: "rule", jsonNum: 1 }).done(function (v) {
	        _componentLoading2.default.hide();
	        ruleMC = v;
	        stage.removeAllChildren();
	        stage.addChild(ruleMC);
	    });
	}
	function showProductHandler(e) {
	    _componentLoading2.default.show();
	    _res2.default.loadScene({ name: "product", jsonNum: 1 }).done(function (v) {
	        _componentLoading2.default.hide();
	        productMC = v;
	        stage.removeAllChildren();
	        stage.addChild(productMC);
	    });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(49), __webpack_require__(68)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	var createjs = __webpack_require__(49);

	function Loader(cls, totalNum, loaderNum) {
	    var link = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	    var self = this;
	    var canvas;
	    var images = images || {};
	    var ss = ss || {};
	    var lib = lib || {};
	    var canvasCls = cls;
	    var dtd;
	    var progress = 0;
	    var resArr = [];
	    var totalJson = totalNum || 0;
	    var preloadNum = loaderNum || 10;
	    var totalStep = 0;
	    var curStep = 0;
	    var resLength;
	    var curLoadNum = 0;
	    var isComplete = false;
	    var mc;
	    this.display = null;
	    this.progress = function () {
	        return progress;
	    };
	    this.init = function () {
	        dtd = $.Deferred();
	        canvas = __webpack_require__(51)("./" + canvasCls + ".js");
	        if (!link) {
	            lib = __webpack_require__(66)("./" + canvasCls + ".js");
	        }
	        var ssName;
	        var json;
	        for (var i = 0; i < totalJson; i++) {
	            ssName = i == 0 ? "_atlas_" : "_atlas_" + (i + 1);
	            json = __webpack_require__(88)("./" + canvasCls + "/" + canvasCls + ssName + ".json");
	            for (var j = 0; j < json.images.length; j++) {
	                var imgSplit = json.images[j].split("../");
	                json.images[j] = imgSplit.length > 1 ? imgSplit[1] : imgSplit[0];
	                resArr.push({ "id": "json", "src": json.images[j], "json": json });
	                json.images[j] = "flash/" + json.images[j];
	            }
	            ss[canvasCls + ssName] = new createjs.SpriteSheet(json);
	        }
	        canvas(lib, images, createjs, ss);
	        lib.properties.manifest = lib.properties.manifest.map(function (obj) {
	            var imgSplit = obj.src.split("../");
	            obj.src = imgSplit.length > 1 ? imgSplit[1] : imgSplit[0];
	            return obj;
	        });
	        resArr = resArr.concat(lib.properties.manifest);
	        loadInt();
	        return dtd.promise();
	    };
	    function loadInt() {
	        resLength = resArr.length;
	        totalStep = Math.ceil(resLength / preloadNum);
	        curStep = 1;
	        curLoadNum = 0;
	        startLoad(0);
	    }
	    function startLoad(id) {
	        var loadStepCount = 0;
	        for (var i = id; i < resLength && i < id + preloadNum; i++) {
	            var imgObj = new Image();
	            // console.log(i,resLength);
	            imgObj.onload = function () {
	                curLoadNum++;
	                loadStepCount++;
	                if (this.id != "json") {
	                    images[this.id] = this;
	                }
	                progress = parseInt(curLoadNum / resLength * 100);
	                dtd.notify(progress);
	                if (curLoadNum >= resLength) {
	                    if (!isComplete) {
	                        handleComplete();
	                    }
	                } else if (loadStepCount >= preloadNum) {
	                    startLoad(curLoadNum);
	                    // setTimeout(startLoad,400,curLoadNum);
	                }
	            };
	            // console.log(resArr[i]['src'])
	            imgObj.id = resArr[i]['id'];
	            var tempURL = resArr[i]['src'].split("images/")[1];
	            // console.log(tempURL,resArr[i]['src'])
	            // imgObj.src=require("file!../../flash/images/"+tempURL);
	            imgObj.src = "flash/" + resArr[i]['src'];
	        }
	    }
	    function handleComplete() {
	        isComplete = true;
	        // console.log('complete  '+ cls)
	        // var exportRoot = new lib[canvasCls]();
	        // self.display=exportRoot;
	        var mc = new lib[canvasCls]();
	        if (lib['construct']) {
	            lib.construct(mc);
	        }
	        // createjs.extend(mc,lib[canvasCls];
	        dtd.resolve(mc);
	    }
	}
	var isArray = function isArray(obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]';
	};
	var loadScene = function loadScene(scene) {

	    if (!isArray(scene)) {
	        return new Loader(scene['name'], scene['jsonNum'], scene['preloadNum'], scene['link']).init();
	    }
	    var tempArr = [];
	    for (var i = 0; i < scene.length; i++) {
	        var loader = new Loader(scene[i]['name'], scene[i]['jsonNum'], scene[i]['preloadNum'], scene[i]['link']);

	        tempArr.push(loader.init());
	    }

	    return $.when.apply(this, tempArr);
	};
	module.exports.loadScene = loadScene;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{};
	var createjs=this.createjs;
	createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=c,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a){f.onload=function(){a._handleImageLoad()}}(this))}if(null==a.frames);else if(a.frames instanceof Array)for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(k instanceof Array)if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null
	}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);
	var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,frequency:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.1",a.buildDate="Thu, 21 May 2015 16:17:39 GMT"}();
	/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.MovieClip=createjs.MovieClip||{};a.version="0.8.1",a.buildDate="Thu, 21 May 2015 16:17:39 GMT"}();
	/*!
	* @license TweenJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a){if("string"==typeof a){var b=this._listeners;if(!b||!b[a])return!1;a=new createjs.Event(a)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(c){}if(a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function Ticker(){throw"Ticker cannot be instantiated."}Ticker.RAF_SYNCHED="synched",Ticker.RAF="raf",Ticker.TIMEOUT="timeout",Ticker.useRAF=!1,Ticker.timingMode=null,Ticker.maxDelta=0,Ticker.paused=!1,Ticker.removeEventListener=null,Ticker.removeAllEventListeners=null,Ticker.dispatchEvent=null,Ticker.hasEventListener=null,Ticker._listeners=null,createjs.EventDispatcher.initialize(Ticker),Ticker._addEventListener=Ticker.addEventListener,Ticker.addEventListener=function(){return!Ticker._inited&&Ticker.init(),Ticker._addEventListener.apply(Ticker,arguments)},Ticker._inited=!1,Ticker._startTime=0,Ticker._pausedTime=0,Ticker._ticks=0,Ticker._pausedTicks=0,Ticker._interval=50,Ticker._lastTime=0,Ticker._times=null,Ticker._tickTimes=null,Ticker._timerId=null,Ticker._raf=!0,Ticker.setInterval=function(a){Ticker._interval=a,Ticker._inited&&Ticker._setupTick()},Ticker.getInterval=function(){return Ticker._interval},Ticker.setFPS=function(a){Ticker.setInterval(1e3/a)},Ticker.getFPS=function(){return 1e3/Ticker._interval};try{Object.defineProperties(Ticker,{interval:{get:Ticker.getInterval,set:Ticker.setInterval},framerate:{get:Ticker.getFPS,set:Ticker.setFPS}})}catch(a){console.log(a)}Ticker.init=function(){Ticker._inited||(Ticker._inited=!0,Ticker._times=[],Ticker._tickTimes=[],Ticker._startTime=Ticker._getTime(),Ticker._times.push(Ticker._lastTime=0),Ticker.interval=Ticker._interval)},Ticker.reset=function(){if(Ticker._raf){var a=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;a&&a(Ticker._timerId)}else clearTimeout(Ticker._timerId);Ticker.removeAllEventListeners("tick"),Ticker._timerId=Ticker._times=Ticker._tickTimes=null,Ticker._startTime=Ticker._lastTime=Ticker._ticks=0,Ticker._inited=!1},Ticker.getMeasuredTickTime=function(a){var b=0,c=Ticker._tickTimes;if(!c||c.length<1)return-1;a=Math.min(c.length,a||0|Ticker.getFPS());for(var d=0;a>d;d++)b+=c[d];return b/a},Ticker.getMeasuredFPS=function(a){var b=Ticker._times;return!b||b.length<2?-1:(a=Math.min(b.length-1,a||0|Ticker.getFPS()),1e3/((b[0]-b[a])/a))},Ticker.setPaused=function(a){Ticker.paused=a},Ticker.getPaused=function(){return Ticker.paused},Ticker.getTime=function(a){return Ticker._startTime?Ticker._getTime()-(a?Ticker._pausedTime:0):-1},Ticker.getEventTime=function(a){return Ticker._startTime?(Ticker._lastTime||Ticker._startTime)-(a?Ticker._pausedTime:0):-1},Ticker.getTicks=function(a){return Ticker._ticks-(a?Ticker._pausedTicks:0)},Ticker._handleSynch=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._getTime()-Ticker._lastTime>=.97*(Ticker._interval-1)&&Ticker._tick()},Ticker._handleRAF=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._handleTimeout=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._setupTick=function(){if(null==Ticker._timerId){var a=Ticker.timingMode||Ticker.useRAF&&Ticker.RAF_SYNCHED;if(a==Ticker.RAF_SYNCHED||a==Ticker.RAF){var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(b)return Ticker._timerId=b(a==Ticker.RAF?Ticker._handleRAF:Ticker._handleSynch),void(Ticker._raf=!0)}Ticker._raf=!1,Ticker._timerId=setTimeout(Ticker._handleTimeout,Ticker._interval)}},Ticker._tick=function(){var a=Ticker.paused,b=Ticker._getTime(),c=b-Ticker._lastTime;if(Ticker._lastTime=b,Ticker._ticks++,a&&(Ticker._pausedTicks++,Ticker._pausedTime+=c),Ticker.hasEventListener("tick")){var d=new createjs.Event("tick"),e=Ticker.maxDelta;d.delta=e&&c>e?e:c,d.paused=a,d.time=b,d.runTime=b-Ticker._pausedTime,Ticker.dispatchEvent(d)}for(Ticker._tickTimes.unshift(Ticker._getTime()-b);Ticker._tickTimes.length>100;)Ticker._tickTimes.pop();for(Ticker._times.unshift(b);Ticker._times.length>100;)Ticker._times.pop()};var b=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);Ticker._getTime=function(){return(b&&b.call(performance)||(new Date).getTime())-Ticker._startTime},createjs.Ticker=Ticker}(),this.createjs=this.createjs||{},function(){"use strict";function Tween(a,b,c){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=c||{},this.target=a,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=a,this._useTicks=!1,this._inited=!1,this._registered=!1,b&&(this._useTicks=b.useTicks,this.ignoreGlobalPause=b.ignoreGlobalPause,this.loop=b.loop,b.onChange&&this.addEventListener("change",b.onChange),b.override&&Tween.removeTweens(a)),b&&b.paused?this._paused=!0:createjs.Tween._register(this,!0),b&&null!=b.position&&this.setPosition(b.position,Tween.NONE)}var a=createjs.extend(Tween,createjs.EventDispatcher);Tween.NONE=0,Tween.LOOP=1,Tween.REVERSE=2,Tween.IGNORE={},Tween._tweens=[],Tween._plugins={},Tween.get=function(a,b,c,d){return d&&Tween.removeTweens(a),new Tween(a,b,c)},Tween.tick=function(a,b){for(var c=Tween._tweens.slice(),d=c.length-1;d>=0;d--){var e=c[d];b&&!e.ignoreGlobalPause||e._paused||e.tick(e._useTicks?1:a)}},Tween.handleEvent=function(a){"tick"==a.type&&this.tick(a.delta,a.paused)},Tween.removeTweens=function(a){if(a.tweenjs_count){for(var b=Tween._tweens,c=b.length-1;c>=0;c--){var d=b[c];d._target==a&&(d._paused=!0,b.splice(c,1))}a.tweenjs_count=0}},Tween.removeAllTweens=function(){for(var a=Tween._tweens,b=0,c=a.length;c>b;b++){var d=a[b];d._paused=!0,d.target&&(d.target.tweenjs_count=0)}a.length=0},Tween.hasActiveTweens=function(a){return a?null!=a.tweenjs_count&&!!a.tweenjs_count:Tween._tweens&&!!Tween._tweens.length},Tween.installPlugin=function(a,b){var c=a.priority;null==c&&(a.priority=c=0);for(var d=0,e=b.length,f=Tween._plugins;e>d;d++){var g=b[d];if(f[g]){for(var h=f[g],i=0,j=h.length;j>i&&!(c<h[i].priority);i++);f[g].splice(i,0,a)}else f[g]=[a]}},Tween._register=function(a,b){var c=a._target,d=Tween._tweens;if(b&&!a._registered)c&&(c.tweenjs_count=c.tweenjs_count?c.tweenjs_count+1:1),d.push(a),!Tween._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",Tween),Tween._inited=!0);else if(!b&&a._registered){c&&c.tweenjs_count--;for(var e=d.length;e--;)if(d[e]==a){d.splice(e,1);break}}a._registered=b},a.wait=function(a,b){if(null==a||0>=a)return this;var c=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:c,e:this._linearEase,p1:c,v:b})},a.to=function(a,b,c){return(isNaN(b)||0>b)&&(b=0),this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(a))})},a.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})},a.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})},a.play=function(a){return a||(a=this),this.call(a.setPaused,[!1],a)},a.pause=function(a){return a||(a=this),this.call(a.setPaused,[!0],a)},a.setPosition=function(a,b){0>a&&(a=0),null==b&&(b=1);var c=a,d=!1;if(c>=this.duration&&(this.loop?c%=this.duration:(c=this.duration,d=!0)),c==this._prevPos)return d;var e=this._prevPos;if(this.position=this._prevPos=c,this._prevPosition=a,this._target)if(d)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;g>f&&!(this._steps[f].t>c);f++);var h=this._steps[f-1];this._updateTargetProps(h,(this._stepPosition=c-h.t)/h.d)}return 0!=b&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):1==b&&e>c?(e!=this.duration&&this._runActions(e,this.duration),this._runActions(0,c,!0)):this._runActions(e,c)),d&&this.setPaused(!0),this.dispatchEvent("change"),d},a.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)},a.setPaused=function(a){return this._paused===!!a?this:(this._paused=!!a,Tween._register(this,!a),this)},a.w=a.wait,a.t=a.to,a.c=a.call,a.s=a.set,a.toString=function(){return"[Tween]"},a.clone=function(){throw"Tween can not be cloned."},a._updateTargetProps=function(a,b){var c,d,e,f,g,h;if(a||1!=b){if(this.passive=!!a.v,this.passive)return;a.e&&(b=a.e(b,0,1,1)),c=a.p0,d=a.p1}else this.passive=!1,c=d=this._curQueueProps;for(var i in this._initQueueProps){null==(f=c[i])&&(c[i]=f=this._initQueueProps[i]),null==(g=d[i])&&(d[i]=g=f),e=f==g||0==b||1==b||"number"!=typeof f?1==b?g:f:f+(g-f)*b;var j=!1;if(h=Tween._plugins[i])for(var k=0,l=h.length;l>k;k++){var m=h[k].tween(this,i,e,c,d,b,!!a&&c==d,!a);m==Tween.IGNORE?j=!0:e=m}j||(this._target[i]=e)}},a._runActions=function(a,b,c){var d=a,e=b,f=-1,g=this._actions.length,h=1;for(a>b&&(d=b,e=a,f=g,g=h=-1);(f+=h)!=g;){var i=this._actions[f],j=i.t;(j==e||j>d&&e>j||c&&j==a)&&i.f.apply(i.o,i.p)}},a._appendQueueProps=function(a){var b,c,d,e,f;for(var g in a)if(void 0===this._initQueueProps[g]){if(c=this._target[g],b=Tween._plugins[g])for(d=0,e=b.length;e>d;d++)c=b[d].init(this,g,c);this._initQueueProps[g]=this._curQueueProps[g]=void 0===c?null:c}else c=this._curQueueProps[g];for(var g in a){if(c=this._curQueueProps[g],b=Tween._plugins[g])for(f=f||{},d=0,e=b.length;e>d;d++)b[d].step&&b[d].step(this,g,c,a[g],f);this._curQueueProps[g]=a[g]}return f&&this._appendQueueProps(f),this._curQueueProps},a._cloneProps=function(a){var b={};for(var c in a)b[c]=a[c];return b},a._addStep=function(a){return a.d>0&&(this._steps.push(a),a.t=this.duration,this.duration+=a.d),this},a._addAction=function(a){return a.t=this.duration,this._actions.push(a),this},a._set=function(a,b){for(var c in a)b[c]=a[c]},createjs.Tween=createjs.promote(Tween,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function Timeline(a,b,c){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,c.onChange&&this.addEventListener("change",c.onChange)),a&&this.addTween.apply(this,a),this.setLabels(b),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,createjs.Tween.NONE)}var a=createjs.extend(Timeline,createjs.EventDispatcher);a.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addTween(arguments[c]);return arguments[0]}return 0==b?null:(this.removeTween(a),this._tweens.push(a),a.setPaused(!0),a._paused=!1,a._useTicks=this._useTicks,a.duration>this.duration&&(this.duration=a.duration),this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE),a)},a.removeTween=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeTween(arguments[d]);return c}if(0==b)return!1;for(var e=this._tweens,d=e.length;d--;)if(e[d]==a)return e.splice(d,1),a.duration>=this.duration&&this.updateDuration(),!0;return!1},a.addLabel=function(a,b){this._labels[a]=b;var c=this._labelList;if(c){for(var d=0,e=c.length;e>d&&!(b<c[d].position);d++);c.splice(d,0,{label:a,position:b})}},a.setLabels=function(a){this._labels=a?a:{}},a.getLabels=function(){var a=this._labelList;if(!a){a=this._labelList=[];var b=this._labels;for(var c in b)a.push({label:c,position:b[c]});a.sort(function(a,b){return a.position-b.position})}return a},a.getCurrentLabel=function(){var a=this.getLabels(),b=this.position,c=a.length;if(c){for(var d=0;c>d&&!(b<a[d].position);d++);return 0==d?null:a[d-1].label}return null},a.gotoAndPlay=function(a){this.setPaused(!1),this._goto(a)},a.gotoAndStop=function(a){this.setPaused(!0),this._goto(a)},a.setPosition=function(a,b){var c=this._calcPosition(a),d=!this.loop&&a>=this.duration;if(c==this._prevPos)return d;this._prevPosition=a,this.position=this._prevPos=c;for(var e=0,f=this._tweens.length;f>e;e++)if(this._tweens[e].setPosition(c,b),c!=this._prevPos)return!1;return d&&this.setPaused(!0),this.dispatchEvent("change"),d},a.setPaused=function(a){this._paused=!!a,createjs.Tween._register(this,!a)},a.updateDuration=function(){this.duration=0;for(var a=0,b=this._tweens.length;b>a;a++){var c=this._tweens[a];c.duration>this.duration&&(this.duration=c.duration)}},a.tick=function(a){this.setPosition(this._prevPosition+a)},a.resolve=function(a){var b=Number(a);return isNaN(b)&&(b=this._labels[a]),b},a.toString=function(){return"[Timeline]"},a.clone=function(){throw"Timeline can not be cloned."},a._goto=function(a){var b=this.resolve(a);null!=b&&this.setPosition(b)},a._calcPosition=function(a){return 0>a?0:a<this.duration?a:this.loop?a%this.duration:this.duration},createjs.Timeline=createjs.promote(Timeline,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function Ease(){throw"Ease cannot be instantiated."}Ease.linear=function(a){return a},Ease.none=Ease.linear,Ease.get=function(a){return-1>a&&(a=-1),a>1&&(a=1),function(b){return 0==a?b:0>a?b*(b*-a+1+a):b*((2-b)*a+(1-a))}},Ease.getPowIn=function(a){return function(b){return Math.pow(b,a)}},Ease.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}},Ease.getPowInOut=function(a){return function(b){return(b*=2)<1?.5*Math.pow(b,a):1-.5*Math.abs(Math.pow(2-b,a))}},Ease.quadIn=Ease.getPowIn(2),Ease.quadOut=Ease.getPowOut(2),Ease.quadInOut=Ease.getPowInOut(2),Ease.cubicIn=Ease.getPowIn(3),Ease.cubicOut=Ease.getPowOut(3),Ease.cubicInOut=Ease.getPowInOut(3),Ease.quartIn=Ease.getPowIn(4),Ease.quartOut=Ease.getPowOut(4),Ease.quartInOut=Ease.getPowInOut(4),Ease.quintIn=Ease.getPowIn(5),Ease.quintOut=Ease.getPowOut(5),Ease.quintInOut=Ease.getPowInOut(5),Ease.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)},Ease.sineOut=function(a){return Math.sin(a*Math.PI/2)},Ease.sineInOut=function(a){return-.5*(Math.cos(Math.PI*a)-1)},Ease.getBackIn=function(a){return function(b){return b*b*((a+1)*b-a)}},Ease.backIn=Ease.getBackIn(1.7),Ease.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}},Ease.backOut=Ease.getBackOut(1.7),Ease.getBackInOut=function(a){return a*=1.525,function(b){return(b*=2)<1?.5*b*b*((a+1)*b-a):.5*((b-=2)*b*((a+1)*b+a)+2)}},Ease.backInOut=Ease.getBackInOut(1.7),Ease.circIn=function(a){return-(Math.sqrt(1-a*a)-1)},Ease.circOut=function(a){return Math.sqrt(1- --a*a)},Ease.circInOut=function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},Ease.bounceIn=function(a){return 1-Ease.bounceOut(1-a)},Ease.bounceOut=function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},Ease.bounceInOut=function(a){return.5>a?.5*Ease.bounceIn(2*a):.5*Ease.bounceOut(2*a-1)+.5},Ease.getElasticIn=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return-(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b))}},Ease.elasticIn=Ease.getElasticIn(1,.3),Ease.getElasticOut=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},Ease.elasticOut=Ease.getElasticOut(1,.3),Ease.getElasticInOut=function(a,b){var c=2*Math.PI;return function(d){var e=b/c*Math.asin(1/a);return(d*=2)<1?-.5*a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b):a*Math.pow(2,-10*(d-=1))*Math.sin((d-e)*c/b)*.5+1}},Ease.elasticInOut=Ease.getElasticInOut(1,.3*1.5),createjs.Ease=Ease}(),this.createjs=this.createjs||{},function(){"use strict";function MotionGuidePlugin(){throw"MotionGuidePlugin cannot be instantiated."}MotionGuidePlugin.priority=0,MotionGuidePlugin._rotOffS,MotionGuidePlugin._rotOffE,MotionGuidePlugin._rotNormS,MotionGuidePlugin._rotNormE,MotionGuidePlugin.install=function(){return createjs.Tween.installPlugin(MotionGuidePlugin,["guide","x","y","rotation"]),createjs.Tween.IGNORE},MotionGuidePlugin.init=function(a,b,c){var d=a.target;return d.hasOwnProperty("x")||(d.x=0),d.hasOwnProperty("y")||(d.y=0),d.hasOwnProperty("rotation")||(d.rotation=0),"rotation"==b&&(a.__needsRot=!0),"guide"==b?null:c},MotionGuidePlugin.step=function(a,b,c,d,e){if("rotation"==b&&(a.__rotGlobalS=c,a.__rotGlobalE=d,MotionGuidePlugin.testRotData(a,e)),"guide"!=b)return d;var f,g=d;g.hasOwnProperty("path")||(g.path=[]);var h=g.path;if(g.hasOwnProperty("end")||(g.end=1),g.hasOwnProperty("start")||(g.start=c&&c.hasOwnProperty("end")&&c.path===h?c.end:0),g.hasOwnProperty("_segments")&&g._length)return d;var i=h.length,j=10;if(!(i>=6&&(i-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";g._segments=[],g._length=0;for(var k=2;i>k;k+=4){for(var l,m,n=h[k-2],o=h[k-1],p=h[k+0],q=h[k+1],r=h[k+2],s=h[k+3],t=n,u=o,v=0,w=[],x=1;j>=x;x++){var y=x/j,z=1-y;l=z*z*n+2*z*y*p+y*y*r,m=z*z*o+2*z*y*q+y*y*s,v+=w[w.push(Math.sqrt((f=l-t)*f+(f=m-u)*f))-1],t=l,u=m}g._segments.push(v),g._segments.push(w),g._length+=v}f=g.orient,g.orient=!0;var A={};return MotionGuidePlugin.calc(g,g.start,A),a.__rotPathS=Number(A.rotation.toFixed(5)),MotionGuidePlugin.calc(g,g.end,A),a.__rotPathE=Number(A.rotation.toFixed(5)),g.orient=!1,MotionGuidePlugin.calc(g,g.end,e),g.orient=f,g.orient?(a.__guideData=g,MotionGuidePlugin.testRotData(a,e),d):d},MotionGuidePlugin.testRotData=function(a,b){if(void 0===a.__rotGlobalS||void 0===a.__rotGlobalE){if(a.__needsRot)return;a.__rotGlobalS=a.__rotGlobalE=void 0!==a._curQueueProps.rotation?a._curQueueProps.rotation:b.rotation=a.target.rotation||0}if(void 0!==a.__guideData){var c=a.__guideData,d=a.__rotGlobalE-a.__rotGlobalS,e=a.__rotPathE-a.__rotPathS,f=d-e;if("auto"==c.orient)f>180?f-=360:-180>f&&(f+=360);else if("cw"==c.orient){for(;0>f;)f+=360;0==f&&d>0&&180!=d&&(f+=360)}else if("ccw"==c.orient){for(f=d-(e>180?360-e:e);f>0;)f-=360;0==f&&0>d&&-180!=d&&(f-=360)}c.rotDelta=f,c.rotOffS=a.__rotGlobalS-a.__rotPathS,a.__rotGlobalS=a.__rotGlobalE=a.__guideData=a.__needsRot=void 0}},MotionGuidePlugin.tween=function(a,b,c,d,e,f,g){var h=e.guide;if(void 0==h||h===d.guide)return c;if(h.lastRatio!=f){var i=(h.end-h.start)*(g?h.end:f)+h.start;switch(MotionGuidePlugin.calc(h,i,a.target),h.orient){case"cw":case"ccw":case"auto":a.target.rotation+=h.rotOffS+h.rotDelta*f;break;case"fixed":default:a.target.rotation+=h.rotOffS}h.lastRatio=f}return"rotation"!=b||h.orient&&"false"!=h.orient?a.target[b]:c},MotionGuidePlugin.calc=function(a,b,c){void 0==a._segments&&MotionGuidePlugin.validate(a),void 0==c&&(c={x:0,y:0,rotation:0});for(var d=a._segments,e=a.path,f=a._length*b,g=d.length-2,h=0;f>d[h]&&g>h;)f-=d[h],h+=2;var i=d[h+1],j=0;for(g=i.length-1;f>i[j]&&g>j;)f-=i[j],j++;var k=j/++g+f/(g*i[j]);h=2*h+2;var l=1-k;return c.x=l*l*e[h-2]+2*l*k*e[h+0]+k*k*e[h+2],c.y=l*l*e[h-1]+2*l*k*e[h+1]+k*k*e[h+3],a.orient&&(c.rotation=57.2957795*Math.atan2((e[h+1]-e[h-1])*l+(e[h+3]-e[h+1])*k,(e[h+0]-e[h-2])*l+(e[h+2]-e[h+0])*k)),c},createjs.MotionGuidePlugin=MotionGuidePlugin}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.TweenJS=createjs.TweenJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}();
	/*!
	* @license PreloadJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}(),this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function BrowserDetect(){throw"BrowserDetect cannot be instantiated"}var a=BrowserDetect.agent=window.navigator.userAgent;BrowserDetect.isWindowPhone=a.indexOf("IEMobile")>-1||a.indexOf("Windows Phone")>-1,BrowserDetect.isFirefox=a.indexOf("Firefox")>-1,BrowserDetect.isOpera=null!=window.opera,BrowserDetect.isChrome=a.indexOf("Chrome")>-1,BrowserDetect.isIOS=(a.indexOf("iPod")>-1||a.indexOf("iPhone")>-1||a.indexOf("iPad")>-1)&&!BrowserDetect.isWindowPhone,BrowserDetect.isAndroid=a.indexOf("Android")>-1&&!BrowserDetect.isWindowPhone,BrowserDetect.isBlackberry=a.indexOf("Blackberry")>-1,createjs.BrowserDetect=BrowserDetect}(),this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function ErrorEvent(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var a=createjs.extend(ErrorEvent,createjs.Event);a.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(ErrorEvent,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a){if("string"==typeof a){var b=this._listeners;if(!b||!b[a])return!1;a=new createjs.Event(a)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(c){}if(a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function ProgressEvent(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var a=createjs.extend(ProgressEvent,createjs.Event);a.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(ProgressEvent,"Event")}(window),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"=="function"&&__webpack_require__(2),c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return j}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}.call(this),function(){var a={};a.appendToHead=function(b){a.getHead().appendChild(b)},a.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},a.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},createjs.DomUtils=a}(),function(){var a={};a.parseXML=function(a,b){var c=null;try{if(window.DOMParser){var d=new DOMParser;c=d.parseFromString(a,b)}}catch(e){}if(!c)try{c=new ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.loadXML(a)}catch(e){c=null}return c},a.parseJSON=function(a){if(null==a)return null;try{return JSON.parse(a)}catch(b){throw b}},createjs.DataUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function LoadItem(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=b.LOAD_TIMEOUT_DEFAULT}var a=LoadItem.prototype={},b=LoadItem;b.LOAD_TIMEOUT_DEFAULT=8e3,b.create=function(a){if("string"==typeof a){var c=new LoadItem;return c.src=a,c}if(a instanceof b)return a;if(a instanceof Object&&a.src)return null==a.loadTimeout&&(a.loadTimeout=b.LOAD_TIMEOUT_DEFAULT),a;throw new Error("Type not recognized.")},a.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=b}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[./]*?\//i,a.EXTENSION_PATT=/\/?[^/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,relative:!1};if(null==b)return c;var d=b.indexOf("?");d>-1&&(b=b.substr(0,d));var e;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(e=b.match(a.EXTENSION_PATT))&&(c.extension=e[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildPath=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this._formatQueryString(b,c):a+"?"+this._formatQueryString(b,c)},a.isCrossDomain=function(a){var b=document.createElement("a");b.href=a.src;var c=document.createElement("a");c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=document.createElement("a");return b.href=a.src,""==b.hostname&&"file:"==b.protocol},a.isBinary=function(a){switch(a){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:!1},a.isText=function(a){switch(a){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.AbstractLoader.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractLoader(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,this._item=a?createjs.LoadItem.create(a):null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var a=createjs.extend(AbstractLoader,createjs.EventDispatcher),b=AbstractLoader;b.POST="POST",b.GET="GET",b.BINARY="binary",b.CSS="css",b.IMAGE="image",b.JAVASCRIPT="javascript",b.JSON="json",b.JSONP="jsonp",b.MANIFEST="manifest",b.SOUND="sound",b.VIDEO="video",b.SPRITESHEET="spritesheet",b.SVG="svg",b.TEXT="text",b.XML="xml",a.getItem=function(){return this._item},a.getResult=function(a){return a?this._rawResult:this._result},a.getTag=function(){return this._tag},a.setTag=function(a){this._tag=a},a.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},a.cancel=function(){this.canceled=!0,this.destroy()},a.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},a.getLoadedItems=function(){return this._loadedItems},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._createTag=function(){return null},a._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},a._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},a._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},a._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},a._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},a.resultFormatter=null,a.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this),c=this;b instanceof Function?b(function(a){c._result=a,c._sendComplete()}):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(a.type)}},a.buildPath=function(a,b){return createjs.RequestUtils.buildPath(a,b)},a.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(AbstractLoader,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractMediaLoader(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src"}var a=createjs.extend(AbstractMediaLoader,createjs.AbstractLoader);a.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},a._createTag=function(){},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._formatResult=function(a){return this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR&&(a.getTag().src=a.getResult(!0)),a.getTag()},createjs.AbstractMediaLoader=createjs.promote(AbstractMediaLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var AbstractRequest=function(a){this._item=a},a=createjs.extend(AbstractRequest,createjs.EventDispatcher);a.load=function(){},a.destroy=function(){},a.cancel=function(){},createjs.AbstractRequest=createjs.promote(AbstractRequest,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function TagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var a=createjs.extend(TagRequest,createjs.AbstractRequest);a.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(window.document.body.appendChild(this._tag),this._addedToDOM=!0)},a.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleError=function(){this._clean(),this.dispatchEvent("error")},a._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},a._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},a._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},a._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},a._showTag=function(){this._tag.style.visibility=this._startTagVisibility},a._handleStalled=function(){},createjs.TagRequest=createjs.promote(TagRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function MediaTagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var a=createjs.extend(MediaTagRequest,createjs.TagRequest);a.load=function(){var a=createjs.proxy(this._handleStalled,this);this._stalledCallback=a;var b=createjs.proxy(this._handleProgress,this);this._handleProgress=b,this._tag.addEventListener("stalled",a),this._tag.addEventListener("progress",b),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleStalled=function(){},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(MediaTagRequest,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function XHRRequest(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var a=createjs.extend(XHRRequest,createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],a.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},a.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},a.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values&&this._item.method!=createjs.AbstractLoader.GET?this._item.method==createjs.AbstractLoader.POST&&this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},a.setResponseType=function(a){"blob"===a&&(a=window.URL?"blob":"arraybuffer",this._responseType=a),this._request.responseType=a},a.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},a.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._handleLoadStart=function(){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},a._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},a._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},a._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},a._handleLoad=function(){if(!this.loaded){this.loaded=!0;var a=this._checkError();if(a)return void this._handleError(a);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(b){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===b.name&&window.BlobBuilder){var c=new BlobBuilder;c.append(this._response),this._response=c.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},a._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},a._checkError=function(){var a=parseInt(this._request.status);switch(a){case 404:case 0:return new Error(a)}return null},a._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},a._createXHR=function(a){var b=createjs.RequestUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){var g=s.ACTIVEX_VERSIONS[e];try{d=new ActiveXObject(g);break}catch(h){}}if(null==d)return!1}null==a.mimeType&&createjs.RequestUtils.isText(a.type)&&(a.mimeType="text/plain; charset=utf-8"),a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var i=null;if(i=a.method==createjs.AbstractLoader.GET?createjs.RequestUtils.buildPath(a.src,a.values):a.src,d.open(a.method||createjs.AbstractLoader.GET,i,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.AbstractLoader.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var j in a.headers)c[j]=a.headers[j];for(j in c)d.setRequestHeader(j,c[j]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},a._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},a.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(XHRRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function LoadQueue(a,b,c){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(a,b,c)
	}var a=createjs.extend(LoadQueue,createjs.AbstractLoader),b=LoadQueue;a.init=function(a,b,c){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(a),this._paused=!1,this._basePath=b,this._crossOrigin=c,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=0/0},b.loadTimeout=8e3,b.LOAD_TIMEOUT=0,b.BINARY=createjs.AbstractLoader.BINARY,b.CSS=createjs.AbstractLoader.CSS,b.IMAGE=createjs.AbstractLoader.IMAGE,b.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,b.JSON=createjs.AbstractLoader.JSON,b.JSONP=createjs.AbstractLoader.JSONP,b.MANIFEST=createjs.AbstractLoader.MANIFEST,b.SOUND=createjs.AbstractLoader.SOUND,b.VIDEO=createjs.AbstractLoader.VIDEO,b.SVG=createjs.AbstractLoader.SVG,b.TEXT=createjs.AbstractLoader.TEXT,b.XML=createjs.AbstractLoader.XML,b.POST=createjs.AbstractLoader.POST,b.GET=createjs.AbstractLoader.GET,a.registerLoader=function(a){if(!a||!a.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(a))throw new Error("loader already exists.");this._availableLoaders.unshift(a)},a.unregisterLoader=function(a){var b=this._availableLoaders.indexOf(a);-1!=b&&b<this._defaultLoaderLength-1&&this._availableLoaders.splice(b,1)},a.setUseXHR=function(a){return this.setPreferXHR(a)},a.setPreferXHR=function(a){return this.preferXHR=0!=a&&null!=window.XMLHttpRequest,this.preferXHR},a.removeAll=function(){this.remove()},a.remove=function(a){var b=null;if(!a||a instanceof Array){if(a)b=a;else if(arguments.length>0)return}else b=[a];var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)this._disposeItem(this.getItem(d));else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.preferXHR,this._basePath)}},a.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},a.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){this._plugins.push(a);var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},a.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},a.loadFile=function(a,b,c){if(null==a){var d=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d)}this._addItem(a,null,c),this.setPaused(b!==!1?!1:!0)},a.loadManifest=function(a,c,d){var e=null,f=null;if(a instanceof Array){if(0==a.length){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g)}e=a}else if("string"==typeof a)e=[{src:a,type:b.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g)}if(void 0!==a.src){if(null==a.type)a.type=b.MANIFEST;else if(a.type!=b.MANIFEST){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);this.setPaused(c!==!1?!1:!0)},a.load=function(){this.setPaused(!1)},a.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},a.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},a.getItems=function(a){var b=[];for(var c in this._loadItemsById){var d=this._loadItemsById[c],e=this.getResult(c);(a!==!0||null!=e)&&b.push({item:d,result:e,rawResult:this.getResult(c,!0)})}return b},a.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},a.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=0/0},a._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&("plugins"in e&&(e.plugins=this._plugins),d._loader=e,this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&d.type==createjs.LoadQueue.JAVASCRIPT||d.maintainOrder===!0)&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},a._createLoadItem=function(a,b,c){var d=createjs.LoadItem.create(a);if(null==d)return null;var e="",f=c||this._basePath;if(d.src instanceof Object){if(!d.type)return null;if(b){e=b;var g=createjs.RequestUtils.parseURI(b);null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f)}else{var h=createjs.RequestUtils.parseURI(d.src);h.extension&&(d.ext=h.extension),null==d.type&&(d.type=createjs.RequestUtils.getTypeByExtension(d.ext));var i=d.src;if(!h.absolute&&!h.relative)if(b){e=b;var g=createjs.RequestUtils.parseURI(b);i=b+i,null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f);d.src=e+d.src}d.path=e,(void 0===d.id||null===d.id||""===d.id)&&(d.id=i);var j=this._typeCallbacks[d.type]||this._extensionCallbacks[d.ext];if(j){var k=j.callback.call(j.scope,d,this);if(k===!1)return null;k===!0||null!=k&&(d._loader=k),h=createjs.RequestUtils.parseURI(d.src),null!=h.extension&&(d.ext=h.extension)}return this._loadItemsById[d.id]=d,this._loadItemsBySrc[d.src]=d,null==d.crossOrigin&&(d.crossOrigin=this._crossOrigin),d},a._createLoader=function(a){if(null!=a._loader)return a._loader;for(var b=this.preferXHR,c=0;c<this._availableLoaders.length;c++){var d=this._availableLoaders[c];if(d&&d.canLoadItem(a))return new d(a,b)}return null},a._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];this._canStartLoad(b)&&(this._loadQueue.splice(a,1),a--,this._loadItem(b))}}},a._loadItem=function(a){a.on("fileload",this._handleFileLoad,this),a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleError,this),a.on("fileerror",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},a._handleFileLoad=function(a){a.target=null,this.dispatchEvent(a)},a._handleFileError=function(a){var b=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,a.item);this._sendError(b)},a._handleError=function(a){var b=a.target;this._numItemsLoaded++,this._finishOrderedItem(b,!0),this._updateProgress();var c=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,b.getItem());this._sendError(c),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(b),this._cleanLoadItem(b),this._loadNext())},a._handleFileComplete=function(a){var b=a.target,c=b.getItem(),d=b.getResult();this._loadedResults[c.id]=d;var e=b.getResult(!0);null!=e&&e!==d&&(this._loadedRawResults[c.id]=e),this._saveLoadedItems(b),this._removeLoadItem(b),this._finishOrderedItem(b)||this._processFinishedLoad(c,b),this._cleanLoadItem(b)},a._saveLoadedItems=function(a){var b=a.getLoadedItems();if(null!==b)for(var c=0;c<b.length;c++){var d=b[c].item;this._loadItemsBySrc[d.src]=d,this._loadItemsById[d.id]=d,this._loadedResults[d.id]=b[c].result,this._loadedRawResults[d.id]=b[c].rawResult}},a._finishOrderedItem=function(a,b){var c=a.getItem();if(this.maintainScriptOrder&&c.type==createjs.LoadQueue.JAVASCRIPT||c.maintainOrder){a instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var d=createjs.indexOf(this._scriptOrder,c);return-1==d?!1:(this._loadedScripts[d]=b===!0?!0:c,this._checkScriptLoadOrder(),!0)}return!1},a._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];c.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(d);var e=c._loader;this._processFinishedLoad(c,e),this._loadedScripts[b]=!0}}},a._processFinishedLoad=function(a,b){this._numItemsLoaded++,this.maintainScriptOrder||a.type!=createjs.LoadQueue.JAVASCRIPT||createjs.DomUtils.appendToHead(a.result),this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},a._canStartLoad=function(a){if(!this.maintainScriptOrder||a.preferXHR)return!0;var b=a.getItem();if(b.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var c=this._scriptOrder.indexOf(b),d=0;c>d;){var e=this._loadedScripts[d];if(null==e)return!1;d++}return this._currentlyLoadingScript=!0,!0},a._removeLoadItem=function(a){for(var b=this._currentLoads.length,c=0;b>c;c++)if(this._currentLoads[c]==a){this._currentLoads.splice(c,1);break}},a._cleanLoadItem=function(a){var b=a.getItem();b&&delete b._loader},a._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},a._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._lastProgress!=a&&(this._sendProgress(a),this._lastProgress=a)},a._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},a._sendFileProgress=function(a,b){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},a._sendFileComplete=function(a,b){if(!this._isCanceled()&&!this._paused){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},a._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},a.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(LoadQueue,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function TextLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.TEXT)}var a=(createjs.extend(TextLoader,createjs.AbstractLoader),TextLoader);a.canLoadItem=function(a){return a.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(TextLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function BinaryLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var a=createjs.extend(BinaryLoader,createjs.AbstractLoader),b=BinaryLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.BINARY},a._updateXHR=function(a){a.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(BinaryLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function CSSLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",this._tag=document.createElement(b?"style":"link"),this._tag.rel="stylesheet",this._tag.type="text/css"}var a=createjs.extend(CSSLoader,createjs.AbstractLoader),b=CSSLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.CSS},a._formatResult=function(a){if(this._preferXHR){var b=a.getTag();if(b.styleSheet)b.styleSheet.cssText=a.getResult(!0);else{var c=document.createTextNode(a.getResult(!0));b.appendChild(c)}}else b=this._tag;return createjs.DomUtils.appendToHead(b),b},createjs.CSSLoader=createjs.promote(CSSLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function ImageLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.RequestUtils.isImageTag(a)?this._tag=a:createjs.RequestUtils.isImageTag(a.src)?this._tag=a.src:createjs.RequestUtils.isImageTag(a.tag)&&(this._tag=a.tag),null!=this._tag?this._preferXHR=!1:this._tag=document.createElement("img"),this.on("initialize",this._updateXHR,this)}var a=createjs.extend(ImageLoader,createjs.AbstractLoader),b=ImageLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.IMAGE},a.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var a=this._item.crossOrigin;1==a&&(a="Anonymous"),null==a||createjs.RequestUtils.isLocal(this._item.src)||(this._tag.crossOrigin=a),this.AbstractLoader_load()},a._updateXHR=function(a){a.loader.mimeType="text/plain; charset=x-user-defined-binary",a.loader.setResponseType&&a.loader.setResponseType("blob")},a._formatResult=function(a){var b=this;return function(c){var d=b._tag,e=window.URL||window.webkitURL;if(b._preferXHR)if(e){var f=e.createObjectURL(a.getResult(!0));d.src=f,d.onload=function(){e.revokeObjectURL(b.src)}}else d.src=a.getItem().src;else;d.complete?c(d):d.onload=function(){c(this)}}},createjs.ImageLoader=createjs.promote(ImageLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JavaScriptLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(document.createElement("script"))}var a=createjs.extend(JavaScriptLoader,createjs.AbstractLoader),b=JavaScriptLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JAVASCRIPT},a._formatResult=function(a){var b=a.getTag();return this._preferXHR&&(b.text=a.getResult(!0)),b},createjs.JavaScriptLoader=createjs.promote(JavaScriptLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JSONLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var a=createjs.extend(JSONLoader,createjs.AbstractLoader),b=JSONLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSON&&!a._loadAsJSONP},a._formatResult=function(a){var b=null;try{b=createjs.DataUtils.parseJSON(a.getResult(!0))}catch(c){var d=new createjs.ErrorEvent("JSON_FORMAT",null,c);return this._sendError(d),c}return b},createjs.JSONLoader=createjs.promote(JSONLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JSONPLoader(a){this.AbstractLoader_constructor(a,!1,createjs.AbstractLoader.JSONP),this.setTag(document.createElement("script")),this.getTag().type="text/javascript"}var a=createjs.extend(JSONPLoader,createjs.AbstractLoader),b=JSONPLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSONP||a._loadAsJSONP},a.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},a.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),window.document.body.appendChild(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},a._handleLoad=function(a){this._result=this._rawResult=a,this._sendComplete(),this._dispose()},a._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},a._dispose=function(){window.document.body.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(JSONPLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function ManifestLoader(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var a=createjs.extend(ManifestLoader,createjs.AbstractLoader),b=ManifestLoader;b.MANIFEST_PROGRESS=.25,b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.MANIFEST},a.load=function(){this.AbstractLoader_load()},a._createRequest=function(){var a=this._item.callback;this._request=null!=a?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},a.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(b.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=b.MANIFEST_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},a.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},a._loadManifest=function(a){if(a&&a.manifest){var b=this._manifestQueue=new createjs.LoadQueue;b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("complete",this._handleManifestComplete,this,!0),b.on("error",this._handleManifestError,this,!0);for(var c=0,d=this.plugins.length;d>c;c++)b.installPlugin(this.plugins[c]);b.loadManifest(a)}else this._sendComplete()},a._handleManifestFileLoad=function(a){a.target=null,this.dispatchEvent(a)},a._handleManifestComplete=function(){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},a._handleManifestProgress=function(a){this.progress=a.progress*(1-b.MANIFEST_PROGRESS)+b.MANIFEST_PROGRESS,this._sendProgress(this.progress)},a._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.ManifestLoader=createjs.promote(ManifestLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SoundLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.SOUND),createjs.RequestUtils.isAudioTag(a)?this._tag=a:createjs.RequestUtils.isAudioTag(a.src)?this._tag=a:createjs.RequestUtils.isAudioTag(a.tag)&&(this._tag=createjs.RequestUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)}var a=createjs.extend(SoundLoader,createjs.AbstractMediaLoader),b=SoundLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SOUND},a._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(SoundLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function VideoLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.VIDEO),createjs.RequestUtils.isVideoTag(a)||createjs.RequestUtils.isVideoTag(a.src)?(this.setTag(createjs.RequestUtils.isVideoTag(a)?a:a.src),this._preferXHR=!1):this.setTag(this._createTag())}var a=createjs.extend(VideoLoader,createjs.AbstractMediaLoader),b=VideoLoader;a._createTag=function(){return document.createElement("video")},b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(VideoLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SpriteSheetLoader(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var a=createjs.extend(SpriteSheetLoader,createjs.AbstractLoader),b=SpriteSheetLoader;b.SPRITESHEET_PROGRESS=.25,b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SPRITESHEET},a.destroy=function(){this.AbstractLoader_destroy,this._manifestQueue.close()},a._createRequest=function(){var a=this._item.callback;this._request=null!=a&&a instanceof Function?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},a.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(b.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=b.SPRITESHEET_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},a._loadManifest=function(a){if(a&&a.images){var b=this._manifestQueue=new createjs.LoadQueue;b.on("complete",this._handleManifestComplete,this,!0),b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a.images)}},a._handleManifestFileLoad=function(a){var b=a.result;if(null!=b){var c=this.getResult().images,d=c.indexOf(a.item.src);c[d]=b}},a._handleManifestComplete=function(){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},a._handleManifestProgress=function(a){this.progress=a.progress*(1-b.SPRITESHEET_PROGRESS)+b.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},a._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.SpriteSheetLoader=createjs.promote(SpriteSheetLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SVGLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",b?this.setTag(document.createElement("svg")):(this.setTag(document.createElement("object")),this.getTag().type="image/svg+xml")}var a=createjs.extend(SVGLoader,createjs.AbstractLoader),b=SVGLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SVG},a._formatResult=function(a){var b=createjs.DataUtils.parseXML(a.getResult(!0),"text/xml"),c=a.getTag();return!this._preferXHR&&document.body.contains(c)&&document.body.removeChild(c),null!=b.documentElement?(c.appendChild(b.documentElement),c.style.visibility="visible",c):b},createjs.SVGLoader=createjs.promote(SVGLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function XMLLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var a=createjs.extend(XMLLoader,createjs.AbstractLoader),b=XMLLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.XML},a._formatResult=function(a){return createjs.DataUtils.parseXML(a.getResult(!0),"text/xml")},createjs.XMLLoader=createjs.promote(XMLLoader,"AbstractLoader")}();
	module.exports=createjs;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module), (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index.js": 52,
		"./loading.js": 53,
		"./loadingloading.js": 54,
		"./main.js": 55,
		"./me.js": 56,
		"./muban1.js": 57,
		"./muban2.js": 58,
		"./muban3.js": 59,
		"./muban4.js": 60,
		"./muban5.js": 61,
		"./muban6.js": 62,
		"./product.js": 63,
		"./rule.js": 64,
		"./show.js": 65
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 51;


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/index/happy_082_1462012300256.png", id:"happy_082_1462012300256"}
		]
	};



	// symbols:



	(lib.happy_003_1462012300160 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_005_1462012300314 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_013_1462012300174 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_025_1462012300224 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_029_1462012300241 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_033_1462012300160 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_033_1462012300295 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_038_1462012300167 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_039_1462012300231 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_041_1462012300196 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_054_1462012300146 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_073_1462012300245 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_076_1462012300171 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_082_1462012300256 = function() {
		this.initialize(img.happy_082_1462012300256);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


	(lib.happy_097_1462012300306 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_104_1462012300250 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_117_1462012300152 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_135_1462012300193 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_136_1462012300176 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_137_1462012300323 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_142_1462012300184 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_145_1462012300158 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_149_1462012300277 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_150_1462012300207 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_152_1462012300213 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_153_1462012300144 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_167_1462012300149 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_169_1462012300172 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_178_1462012300162 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_195_1462012300153 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_208_1462012300182 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_210_1462012300182 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_222_1462012300219 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_254_1462012300363 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_262_1462012300206 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_279_1462012300288 = function() {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_297_1462012300186 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_304_1462012300172 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_314_1462012300351 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_334_1462012300187 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_341_1462012300222 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_362_1462012300216 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_368_1462012300262 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_370_1462012300239 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_398_1462012300190 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_411_1462012300170 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_423_1462012300235 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_448_1462012300144 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_451_1462012300151 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_456_1462012300395 = function() {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_458_1462012300148 = function() {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_459_1462012300253 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_464_1462012300209 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_468_1462012300202 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_469_1462012300166 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_499_1462012300374 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_509_1462012300229 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_513_1462012300150 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_514_1462012300237 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_518_1462012300282 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_523_1462012300156 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_528_1462012300269 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_531_1462012300260 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_534_1462012300157 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_535_1462012300163 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_539_1462012300188 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_552_1462012300201 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_556_1462012300210 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_568_1462012300358 = function() {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_569_1462012300188 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_584_1462012300221 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(59);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_584_1462012300336 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(60);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_587_1462012300195 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(61);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_592_1462012300262 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(62);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_603_1462012300347 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(63);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_604_1462012300274 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_606_1462012300187 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(64);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_618_1462012300145 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(65);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_623_1462012300384 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(66);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_653_1462012300293 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(67);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_669_1462012300177 = function() {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_670_1462012300302 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(68);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_673_1462012300181 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(69);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_674_1462012300173 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(70);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_679_1462012300286 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(71);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_681_1462012300340 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(72);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_695_1462012300389 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_696_1462012300269 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(73);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_706_1462012300285 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(74);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_707_1462012300235 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(75);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_710_1462012300169 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(76);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_716_1462012300217 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(77);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_734_1462012300273 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(78);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_742_1462012300230 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(79);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_748_1462012300211 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_754_1462012300381 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(80);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_759_1462012300192 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(81);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_770_1462012300276 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(82);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_776_1462012300168 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(83);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_785_1462012300183 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(84);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_787_1462012300343 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(85);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_792_1462012300304 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(86);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_815_1462012300204 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(87);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_825_1462012300175 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_828_1462012300372 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(88);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_835_1462012300147 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(89);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_835_1462012300200 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(90);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_842_1462012300203 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(91);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_846_1462012300305 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(92);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_847_1462012300249 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_847_1462012300301 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(93);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_848_1462012300276 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(94);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_870_1462012300180 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(95);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_876_1462012300140 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(96);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_879_1462012300158 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(97);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_879_1462012300362 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(98);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_880_1462012300155 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(99);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_880_1462012300393 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(100);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_886_1462012300153 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(101);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_888_1462012300305 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(102);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_890_1462012300274 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(103);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_896_1462012300165 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(104);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_899_1462012300287 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(105);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_913_1462012300255 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(106);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_913_1462012300371 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(107);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_918_1462012300218 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(108);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_929_1462012300178 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(109);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_943_1462012300210 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(110);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_955_1462012300212 = function() {
		this.spriteSheet = ss["index_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_958_1462012300185 = function() {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_958_1462012300223 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(111);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_964_1462012300268 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(112);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_976_1462012300330 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(113);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_980_1462012300189 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(114);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_988_1462012300228 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(115);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_990_1462012300164 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(116);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_991_1462012300142 = function() {
		this.spriteSheet = ss["index_atlas_3"];
		this.gotoAndStop(117);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_994_1462012300054 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_815_1462012300204();
		this.instance.setTransform(-8.5,-13);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-8.5,-13,17,26);


	(lib.happy_972_1462012300123 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_528_1462012300269();
		this.instance.setTransform(-85.9,-74.9,1,1,5.7);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-99.1,-74.9,198.2,149.9);


	(lib.happy_895_1462012299938 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_039_1462012300231();
		this.instance.setTransform(-36.6,-44.5,1,1,-5.7);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-36.6,-50.9,73.3,101.9);


	(lib.happy_881_1462012300133 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_137_1462012300323();
		this.instance.setTransform(-28.5,-20);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-28.5,-20,57,40);


	(lib.happy_971_1462012300104 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_167_1462012300149();
		this.instance.setTransform(151.5,106.8,1,1,0,56,-124);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.1,-35,149.5,178.1);


	(lib.happy_911_1462012300099 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_464_1462012300209();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,105,103);


	(lib.happy_904_1462012300098 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_879_1462012300362();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,38,62);


	(lib.happy_877_1462012300066 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_929_1462012300178();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_875_1462012300086 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_828_1462012300372();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_844_1462012300097 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_025_1462012300224();
		this.instance.setTransform(121.4,53.9,1,1,0,45,-135);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.9,-16.1,151.3,151.3);


	(lib.happy_825_1462012300058 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_943_1462012300210();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_817_1462012300108 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_005_1462012300314();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,18);


	(lib.happy_794_1462012300070 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_195_1462012300153();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,82);


	(lib.happy_761_1462012300057 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_041_1462012300196();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,13);


	(lib.happy_745_1462012300062 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_870_1462012300180();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,42);


	(lib.happy_715_1462012300115 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_208_1462012300182();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,29);


	(lib.happy_656_1462012300092 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_913_1462012300371();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,55);


	(lib.happy_655_1462012300082 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_913_1462012300371();
		this.instance.setTransform(38.9,46.7,1,1,159.2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-4.9,-4.8,43.8,60.7);


	(lib.happy_645_1462012300090 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_848_1462012300276();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,44);


	(lib.happy_632_1462012300094 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_670_1462012300302();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,59);


	(lib.happy_614_1462012300109 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_988_1462012300228();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,38);


	(lib.happy_614_1462012300093 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_464_1462012300209();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_611_1462012300089 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_054_1462012300146();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,94);


	(lib.happy_604_1462012300117 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_208_1462012300182();
		this.instance.setTransform(1.2,50.8,1,1,0,159,-21);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-9.2,0,72,50.8);


	(lib.happy_595_1462012300061 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_785_1462012300183();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,31);


	(lib.happy_587_1462012300068 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_153_1462012300144();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,42);


	(lib.happy_533_1462012300074 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_167_1462012300149();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,171,65);


	(lib.happy_501_1462012300075 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_847_1462012300301();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_485_1462012300100 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_880_1462012300393();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,54);


	(lib.happy_468_1462012300055 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_368_1462012300262();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_454_1462012300067 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_918_1462012300218();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,24);


	(lib.happy_435_1462012300113 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_152_1462012300213();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_402_1462012300088 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_469_1462012300166();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42,58);


	(lib.happy_389_1462012300081 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_710_1462012300169();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,34,91);


	(lib.happy_372_1462012300077 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_673_1462012300181();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,39,55);


	(lib.happy_331_1462012300119 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_135_1462012300193();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,85,43);


	(lib.happy_268_1462012300096 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_587_1462012300195();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_264_1462012300069 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_888_1462012300305();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_259_1462012300078 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_679_1462012300286();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,49);


	(lib.happy_240_1462012300076 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_025_1462012300224();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,99,115);


	(lib.happy_203_1462012300060 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_076_1462012300171();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,95);


	(lib.happy_199_1462012300080 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_653_1462012300293();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,93,21);


	(lib.happy_184_1462012300064 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_958_1462012300223();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,29);


	(lib.happy_173_1462012300084 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_531_1462012300260();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,46);


	(lib.happy_169_1462012300114 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_787_1462012300343();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,15,21);


	(lib.happy_166_1462012300116 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_539_1462012300188();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,13);


	(lib.happy_142_1462012300111 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_846_1462012300305();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,16);


	(lib.happy_142_1462012300063 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_976_1462012300330();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,41);


	(lib.happy_108_1462012300101 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_592_1462012300262();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,93,21);


	(lib.happy_106_1462012300107 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_038_1462012300167();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,47);


	(lib.happy_079_1462012300083 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_150_1462012300207();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,13);


	(lib.happy_065_1462012300105 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_696_1462012300269();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,84);


	(lib.happy_061_1462012300091 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_913_1462012300255();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,35,36);


	(lib.happy_055_1462012300112 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_509_1462012300229();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_793_1462012300129 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_341_1462012300222();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,40,45);


	(lib.happy_427_1462012300127 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_254_1462012300363();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,14);


	(lib.happy_063_1462012300128 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_776_1462012300168();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,46);


	(lib.happy_646_1462012299937 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_770_1462012300276();
		this.instance.setTransform(-29,-23.7,1,1,-4.6);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29,-28,58,56.2);


	(lib.happy_642_1462012300124 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_169_1462012300172();
		this.instance.setTransform(-20.5,-20.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


	(lib.happy_938_1462012299977 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_835_1462012300200();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_904_1462012300007 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_082_1462012300256();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


	(lib.happy_874_1462012299978 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_334_1462012300187();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,96,263);


	(lib.happy_819_1462012299975 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_552_1462012300201();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,52,88);


	(lib.happy_816_1462012299968 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_955_1462012300212();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,249,127);


	(lib.happy_815_1462012299986 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_842_1462012300203();
		this.instance.setTransform(72,-2.7,1,1,30);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-61,-2.7,204,271.3);


	(lib.happy_808_1462012300012 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_136_1462012300176();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,44);


	(lib.happy_712_1462012299950 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_569_1462012300188();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,76,39);


	(lib.happy_868_1462012299962 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_398_1462012300190();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,113,112);


	(lib.happy_777_1462012299960 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_964_1462012300268();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,23);


	(lib.happy_751_1462012299967 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_149_1462012300277();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_723_1462012299958 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_603_1462012300347();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,45,19);


	(lib.happy_659_1462012299953 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_792_1462012300304();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,34);


	(lib.happy_582_1462012299964 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_556_1462012300210();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,25);


	(lib.happy_496_1462012299955 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_513_1462012300150();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,32,32);


	(lib.happy_345_1462012299965 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_980_1462012300189();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,63,31);


	(lib.happy_190_1462012299961 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_706_1462012300285();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,68,28);


	(lib.happy_162_1462012299957 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_033_1462012300295();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,29);


	(lib.happy_042_1462012299959 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_742_1462012300230();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,107,106);


	(lib.happy_013_1462012299966 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_013_1462012300174();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,69,23);


	(lib.happy_703_1462012299976 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_411_1462012300170();
		this.instance.setTransform(-27,-29.4,1,1,4);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-30.8,-29.4,61.7,58.9);


	(lib.happy_772_1462012299974 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_145_1462012300158();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,60);


	(lib.happy_396_1462012299972 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_210_1462012300182();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,21);


	(lib.happy_601_1462012299985 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_370_1462012300239();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,62,56);


	(lib.happy_596_1462012299951 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_534_1462012300157();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,74,78);


	(lib.happy_445_1462012299984 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_880_1462012300155();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,19,29);


	(lib.happy_437_1462012300017 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_514_1462012300237();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,15);


	(lib.happy_379_1462012300009 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_104_1462012300250();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,51);


	(lib.happy_985_1462012300003 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_073_1462012300245();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_791_1462012299999 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_423_1462012300235();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,71);


	(lib.happy_525_1462012299998 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_459_1462012300253();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,106);


	(lib.happy_464_1462012299996 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_362_1462012300216();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_457_1462012300004 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_584_1462012300221();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,59,40);


	(lib.happy_224_1462012300000 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_754_1462012300381();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,67,72);


	(lib.happy_059_1462012300001 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_606_1462012300187();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,64,53);


	(lib.happy_233_1462012299989 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_990_1462012300164();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,121);


	(lib.happy_203_1462012299949 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_886_1462012300153();
		this.instance.setTransform(-42.2,-48.1,1,1,2.2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-45.7,-48.1,91.5,96.3);


	(lib.happy_137_1462012299980 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_262_1462012300206();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,188,134);


	(lib.happy_534_1462012300122 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_674_1462012300173();
		this.instance.setTransform(-40.7,-39.7,0.946,0.946);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-40.7,-39.7,80.4,80.4);


	(lib.happy_530_1462012300121 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_033_1462012300160();
		this.instance.setTransform(-54.5,-30.5);

		this.instance_1 = new lib.happy_896_1462012300165();
		this.instance_1.setTransform(-54.5,-30.5);

		this.instance_2 = new lib.happy_523_1462012300156();
		this.instance_2.setTransform(-54.5,-30.5);

		this.instance_3 = new lib.happy_448_1462012300144();
		this.instance_3.setTransform(-54.5,-30.5);

		this.instance_4 = new lib.happy_759_1462012300192();
		this.instance_4.setTransform(-54.5,-30.5);

		this.instance_5 = new lib.happy_899_1462012300287();
		this.instance_5.setTransform(-54.5,-30.5);

		this.instance_6 = new lib.happy_734_1462012300273();
		this.instance_6.setTransform(-54.5,-30.5);

		this.instance_7 = new lib.happy_623_1462012300384();
		this.instance_7.setTransform(-54.5,-30.5);

		this.instance_8 = new lib.happy_314_1462012300351();
		this.instance_8.setTransform(-54.5,-30.5);

		this.instance_9 = new lib.happy_097_1462012300306();
		this.instance_9.setTransform(-54.5,-30.5);

		this.instance_10 = new lib.happy_468_1462012300202();
		this.instance_10.setTransform(-54.5,-30.5);

		this.instance_11 = new lib.happy_518_1462012300282();
		this.instance_11.setTransform(-54.5,-30.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).wait(20));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-54.5,-30.5,109,61);


	(lib.happy_982_1462012300137 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_456_1462012300395();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,269,272);


	(lib.happy_609_1462012300139 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_991_1462012300142();
		this.instance.setTransform(-52,-106);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-52,-106,104,212);


	(lib.happy_407_1462012300131 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_707_1462012300235();
		this.instance.setTransform(-24,-25);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-24,-25,48,50);


	(lib.happy_338_1462012300047 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_879_1462012300158();
		this.instance.setTransform(-52,-65.3,1,1,7.9);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-67.9,-65.3,135.8,130.6);


	(lib.happy_966_1462012300051 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_584_1462012300336();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,275);


	(lib.happy_610_1462012300050 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_304_1462012300172();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,275);


	(lib.happy_297_1462012300052 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_222_1462012300219();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28,274);


	(lib.happy_209_1462012299924 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_876_1462012300140();
		this.instance.setTransform(-120,-39);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-120,-39,240,78);


	(lib.happy_196_1462012300130 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_029_1462012300241();
		this.instance.setTransform(-11.5,-32);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11.5,-32,23,64);


	(lib.happy_853_1462012300035 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_178_1462012300162();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,144,400);


	(lib.happy_834_1462012300031 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_681_1462012300340();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,53,68);


	(lib.happy_812_1462012300027 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_535_1462012300163();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,261,224);


	(lib.happy_714_1462012300030 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_458_1462012300148();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,198,361);


	(lib.happy_702_1462012300029 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_297_1462012300186();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,69);


	(lib.happy_678_1462012300039 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_825_1462012300175();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,142,316);


	(lib.happy_608_1462012300037 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_499_1462012300374();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,233,113);


	(lib.happy_591_1462012300028 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_847_1462012300249();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,169,255);


	(lib.happy_502_1462012300038 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_279_1462012300288();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,208,372);


	(lib.happy_495_1462012300026 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_142_1462012300184();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,157,401);


	(lib.happy_447_1462012300041 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_451_1462012300151();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,158,94);


	(lib.happy_383_1462012300034 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_568_1462012300358();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,343,190);


	(lib.happy_369_1462012300036 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_669_1462012300177();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,383,246);


	(lib.happy_356_1462012300023 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_748_1462012300211();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,193,305);


	(lib.happy_329_1462012300042 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_958_1462012300185();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,267,295);


	(lib.happy_318_1462012300032 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_604_1462012300274();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,101,346);


	(lib.happy_308_1462012300024 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_117_1462012300152();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,97,332);


	(lib.happy_290_1462012300022 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_695_1462012300389();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,183,268);


	(lib.happy_066_1462012300043 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_003_1462012300160();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14,14);


	(lib.happy_977_1462012299925 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_618_1462012300145();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,16);


	(lib.happy_995_1462012300120 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_972_1462012300123();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:-1},2).to({x:-1,y:1},2).to({x:0,y:-1},2).to({x:1,y:0},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-99.1,-74.9,198.2,149.9);


	(lib.happy_967_1462012299933 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_338_1462012300047();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:-1},2).to({x:-1,y:1},2).to({x:0,y:-1},2).to({x:1,y:0},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-67.9,-65.3,135.8,130.6);


	(lib.happy_901_1462012299936 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_966_1462012300051();
		this.instance.setTransform(0,0,1,1,0,0,0,12.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-137.5,25,275);


	(lib.happy_859_1462012300125 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_646_1462012299937();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:-1},2).to({x:-1,y:1},2).to({x:0,y:-1},2).to({x:1,y:0},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-29,-28,58,56.2);


	(lib.happy_775_1462012299939 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_196_1462012300130("synched",0);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11.5,-32,23,64);


	(lib.happy_511_1462012300073 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_877_1462012300066();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},7).to({regX:9,rotation:5.3,x:9,y:158},7).wait(1));

		// S1--
		this.instance_1 = new lib.happy_501_1462012300075();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},7).to({y:134},7).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_614_1462012300093();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},7).to({y:176},7).wait(1));

		// S2
		this.instance_3 = new lib.happy_435_1462012300113();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},7).to({rotation:23.5,x:80.8,y:122.6},7).wait(1));

		// t1-
		this.instance_4 = new lib.happy_875_1462012300086();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},3).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},4).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},3).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},4).wait(1));

		// t1--
		this.instance_5 = new lib.happy_268_1462012300096();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},7).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},7).wait(1));

		// t1---
		this.instance_6 = new lib.happy_264_1462012300069();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

		// t2--
		this.instance_7 = new lib.happy_468_1462012300055();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},3).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},4).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},3).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},4).wait(1));

		// t2-
		this.instance_8 = new lib.happy_055_1462012300112();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},7).to({rotation:48.3,x:97,y:188.6},7).wait(1));

		// t2---
		this.instance_9 = new lib.happy_825_1462012300058();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_416_1462012300103 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s3
		this.instance = new lib.happy_108_1462012300101();
		this.instance.setTransform(51.6,51.6,1,1,15,0,0,10.6,10.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:10.5,rotation:-15,x:60.4,y:50.1},7).to({regY:10.6,rotation:15,x:51.6,y:51.6},7).wait(1));

		// t3
		this.instance_1 = new lib.happy_656_1462012300092();
		this.instance_1.setTransform(60,75,1,1,0,0,0,13,8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.1,rotation:11,x:63.1,y:73.9},7).to({regX:13,rotation:0,x:60,y:75},7).wait(1));

		// t4
		this.instance_2 = new lib.happy_715_1462012300115();
		this.instance_2.setTransform(59.1,115,1,1,23.2,0,0,58,22);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:58,y:114},7).to({rotation:23.2,x:59.1,y:115},7).wait(1));

		// cmg
		this.instance_3 = new lib.happy_240_1462012300076();
		this.instance_3.setTransform(69.7,85.7,1,1,0,0,0,60,94.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5.2},7).to({rotation:0},7).wait(1));

		// t5
		this.instance_4 = new lib.happy_485_1462012300100();
		this.instance_4.setTransform(59,66.5,1,1,0,0,0,13,5.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

		// t6
		this.instance_5 = new lib.happy_184_1462012300064();
		this.instance_5.setTransform(59.9,110,1,1,-24.7,0,0,59.9,23);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:21},7).to({rotation:-24.7},7).wait(1));

		// s4
		this.instance_6 = new lib.happy_199_1462012300080();
		this.instance_6.setTransform(50.5,44.5,1,1,0,0,0,7.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:10.6,rotation:22.4,x:55.6,y:47.1},7).to({regY:10.5,rotation:0,x:50.5,y:44.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.1,-8.8,140.1,149.3);


	(lib.happy_401_1462012300106 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s1
		this.instance = new lib.happy_203_1462012300060();
		this.instance.setTransform(11.5,87,1,1,4,0,0,11.5,87);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6,y:82},7).to({rotation:4,y:87},7).wait(1));

		// t1
		this.instance_1 = new lib.happy_065_1462012300105();
		this.instance_1.setTransform(40.6,134.5,1,1,-3.2,0,0,13.6,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.5,rotation:5,x:40.5,y:129.5},7).to({regX:13.6,rotation:-3.2,x:40.6,y:134.5},7).wait(1));

		// cmg
		this.instance_2 = new lib.happy_240_1462012300076();
		this.instance_2.setTransform(53.5,98.5,1,1,0,0,0,49.5,57.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:88.5},7).to({y:98.5},7).wait(1));

		// s2
		this.instance_3 = new lib.happy_611_1462012300089();
		this.instance_3.setTransform(73.5,86,1,1,-4.2,0,0,13.5,85);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:8.2,y:81.1},7).to({rotation:-4.2,y:86},7).wait(1));

		// t2
		this.instance_4 = new lib.happy_794_1462012300070();
		this.instance_4.setTransform(64.6,132.5,1,1,3.2,0,0,14.6,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-5.4,y:127.5},7).to({rotation:3.2,y:132.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,103.5,209.3);


	(lib.happy_336_1462012300059 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s1-
		this.instance = new lib.happy_259_1462012300078();
		this.instance.setTransform(68.5,57,1,1,0,0,0,17.5,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.6,regY:9.1,rotation:-5,x:66.9,y:49.4},7).to({regX:17.5,regY:9,rotation:0,x:68.5,y:57},7).wait(1));

		// s1--
		this.instance_1 = new lib.happy_645_1462012300090();
		this.instance_1.setTransform(60,84.5,1,1,0,0,0,18,8.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.9,regY:8.6,rotation:-5,x:60.6,y:77.6},7).to({regX:18,regY:8.5,rotation:0,x:60,y:84.5},7).wait(1));

		// s1---
		this.instance_2 = new lib.happy_142_1462012300111();
		this.instance_2.setTransform(46.5,115.5,1,1,0,0,0,15.5,2.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5,x:50,y:109.5},7).to({rotation:0,x:46.5,y:115.5},7).wait(1));

		// t1
		this.instance_3 = new lib.happy_173_1462012300084();
		this.instance_3.setTransform(88.5,97.7,1,1,0,0,0,7.5,9);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-15,x:84,y:92.1},7).to({rotation:0,x:88.5,y:97.7},7).wait(1));

		// t1-
		this.instance_4 = new lib.happy_587_1462012300068();
		this.instance_4.setTransform(97.5,128.2,1,1,0,0,0,16.5,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.6,rotation:-34.7,x:102.5,y:120.4},7).to({regX:16.5,rotation:0,x:97.5,y:128.2},7).wait(1));

		// t1--
		this.instance_5 = new lib.happy_454_1462012300067();
		this.instance_5.setTransform(84.5,162.2,1,1,0,0,0,6.5,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-79.7,x:111.1,y:155.8},7).to({rotation:0,x:84.5,y:162.2},7).wait(1));

		// lanmei
		this.instance_6 = new lib.happy_911_1462012300099();
		this.instance_6.setTransform(88.5,99,1,1,0,0,0,55.5,91);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:82.7,y:88.4},7).to({x:88.5,y:99},7).wait(1));

		// ss1
		this.instance_7 = new lib.happy_745_1462012300062();
		this.instance_7.setTransform(151.7,143.6,1,1,69.5,0,0,5.5,12);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:12.1,rotation:3,x:138.7,y:123.3},7).to({regY:12,rotation:69.5,x:151.7,y:143.6},7).wait(1));

		// ss2
		this.instance_8 = new lib.happy_142_1462012300063();
		this.instance_8.setTransform(129.6,158.8,1,1,-30,0,0,5.5,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:5.4,regY:7.1,rotation:4.7,x:144.5,y:150.6},7).to({regX:5.5,regY:7,rotation:-30,x:129.6,y:158.8},7).wait(1));

		// ss3
		this.instance_9 = new lib.happy_761_1462012300057();
		this.instance_9.setTransform(155.5,181.5,1,1,0,0,0,6.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

		// tt-
		this.instance_10 = new lib.happy_372_1462012300077();
		this.instance_10.setTransform(29.5,142.5,1,1,0,0,0,11.5,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

		// tt--
		this.instance_11 = new lib.happy_817_1462012300108();
		this.instance_11.setTransform(48.5,175,1,1,0,0,0,48.5,9);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

		// tt---
		this.instance_12 = new lib.happy_169_1462012300114();
		this.instance_12.setTransform(3.8,168.5,1,1,0,0,0,3.8,2.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

		// xiangjiao
		this.instance_13 = new lib.happy_533_1462012300074();
		this.instance_13.setTransform(23.8,144.6,1,1,5.7,0,0,11.7,47.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-4},7).to({rotation:5.7},7).wait(1));

		// 图层 6
		this.instance_14 = new lib.happy_716_1462012300217();
		this.instance_14.setTransform(46.7,144.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

		// s12
		this.instance_15 = new lib.happy_063_1462012300128();
		this.instance_15.setTransform(131.7,162.5,1,1,64.4,0,0,13.6,40.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:0,x:150,y:151.6},7).to({rotation:64.4,x:131.7,y:162.5},7).wait(1));

		// s13
		this.instance_16 = new lib.happy_793_1462012300129();
		this.instance_16.setTransform(157.5,180.2,1,1,-26.8,0,0,16.1,41.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_16).to({rotation:0,y:179.6},7).to({rotation:-26.8,y:180.2},7).wait(1));

		// s14
		this.instance_17 = new lib.happy_427_1462012300127();
		this.instance_17.setTransform(166.4,180,1,1,0,0,0,15,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15));

		// lt
		this.instance_18 = new lib.happy_389_1462012300081();
		this.instance_18.setTransform(99.3,98.6,1,1,6.7,0,0,10.2,12);

		this.timeline.addTween(cjs.Tween.get(this.instance_18).to({rotation:-21.2,x:92.9,y:88.7},7).to({rotation:6.7,x:99.3,y:98.6},7).wait(1));

		// ls
		this.instance_19 = new lib.happy_331_1462012300119();
		this.instance_19.setTransform(89.5,51.2,1,1,0,0,0,5.5,31.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).to({rotation:9.5},7).to({rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,8,187,183.1);


	(lib.happy_033_1462012300071 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// t1-
		this.instance = new lib.happy_655_1462012300082();
		this.instance.setTransform(62,100,1,1,0,0,0,22,40);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-16,x:62.1},7).to({scaleX:1,scaleY:1,rotation:0,x:62},7).wait(1));

		// t1--
		this.instance_1 = new lib.happy_604_1462012300117();
		this.instance_1.setTransform(47.1,68.3,1,1,15,0,0,47.1,8.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47,regY:8.3,rotation:-17.4,x:37.1,y:75.8},7).to({regX:47.1,regY:8.2,rotation:15,x:47.1,y:68.3},7).wait(1));

		// 图层 2
		this.instance_2 = new lib.happy_645_1462012300090();
		this.instance_2.setTransform(124.4,119.4,1,1,-13.8,0,0,6.2,39.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-34,y:119.5},7).to({rotation:-13.8,y:119.4},7).wait(1));

		// s1---
		this.instance_3 = new lib.happy_142_1462012300111();
		this.instance_3.setTransform(122.8,116.9,1,1,0,-15,165,15.5,2.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

		// s1--
		this.instance_4 = new lib.happy_106_1462012300107();
		this.instance_4.setTransform(119.5,63.8,1,1,0.1,0,0,12.5,10);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:9.9,rotation:13.9,x:115.5,y:57.3},7).to({regY:10,rotation:0.1,x:119.5,y:63.8},7).wait(1));

		// cm
		this.instance_5 = new lib.happy_844_1462012300097();
		this.instance_5.setTransform(60.8,96.8,1,1,0,0,0,17.8,81.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.7,y:96.9},7).to({rotation:0,y:96.8},7).wait(1));

		// SSSS
		this.instance_6 = new lib.happy_166_1462012300116();
		this.instance_6.setTransform(25.8,19.5,1,1,0,0,0,20.8,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:33.2,y:4},7).to({x:25.8,y:19.5},7).wait(1));

		// s2
		this.instance_7 = new lib.happy_632_1462012300094();
		this.instance_7.setTransform(48,40.8,1,1,-9.3,0,0,20,24.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:19.9,rotation:3.2,x:47.3,y:27.4},7).to({regX:20,rotation:-9.3,x:48,y:40.8},7).wait(1));

		// SSSSSSS
		this.instance_8 = new lib.happy_595_1462012300061();
		this.instance_8.setTransform(64.2,47.5,1,1,-30,0,0,16.4,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:19.6,regY:24,rotation:1,x:60.3,y:44.9},7).to({regX:16.4,regY:20.5,rotation:-30,x:64.2,y:47.5},7).wait(1));

		// t2-
		this.instance_9 = new lib.happy_904_1462012300098();
		this.instance_9.setTransform(50,81.3,1,1,0,0,0,19,41.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:47.5,y:78.8},7).to({x:50,y:81.3},7).wait(1));

		// t2--
		this.instance_10 = new lib.happy_402_1462012300088();
		this.instance_10.setTransform(41.5,49,1,1,-22.2,0,0,29.5,49);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:39,y:46.5},7).to({rotation:-22.2,x:41.5,y:49},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-18.4,-1.1,182.8,151.3);


	(lib.happy_660_1462012300021 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_297_1462012300052();
		this.instance.setTransform(0,0,1,1,0,0,0,14,137);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-14,-137,28,274);


	(lib.happy_982_1462012300015 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d3
		this.instance = new lib.happy_601_1462012299985();
		this.instance.setTransform(211,28,1,1,0,0,0,31,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:209.9,y:26.9},2).to({x:212.1,y:29.1},2).to({x:211,y:26.9},2).to({y:29.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(180,0,62,56);


	(lib.happy_819_1462012300008 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_660_1462012300021();

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-14,-137,28,274);


	(lib.happy_770_1462012299952 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_203_1462012299949();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:-1},2).to({x:-1,y:1},2).to({x:0,y:-1},2).to({x:1,y:0},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-45.7,-48.1,91.5,96.3);


	(lib.happy_735_1462012300005 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d14
		this.instance = new lib.happy_712_1462012299950();
		this.instance.setTransform(208,195.5,1,1,0,0,0,38,19.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:206.9,y:196.6},2).to({x:209.1},2).to({x:208,y:194.4},2).to({y:196.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(170,176,76,39);


	(lib.happy_751_1462012299954 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s8
		this.instance = new lib.happy_582_1462012299964();
		this.instance.setTransform(47.9,70.7,1,1,0,0,0,28.9,18.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.8,rotation:14.2,x:51,y:66},7).to({regY:18.7,rotation:0,x:47.9,y:70.7},7).wait(1));

		// s9
		this.instance_1 = new lib.happy_723_1462012299958();
		this.instance_1.setTransform(80,79.1,1,1,0,0,0,41,15.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.5,y:77.2},7).to({rotation:0,y:79.1},7).wait(1));

		// s10
		this.instance_2 = new lib.happy_751_1462012299967();
		this.instance_2.setTransform(150.1,66.2,1,1,0,0,0,43.1,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:45,x:149.1,y:77.3},7).to({rotation:0,x:150.1,y:66.2},7).wait(1));

		// s11
		this.instance_3 = new lib.happy_777_1462012299960();
		this.instance_3.setTransform(190.5,55.5,1,1,0,0,0,51.5,3.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-11.2},7).to({rotation:0},7).wait(1));

		// t7
		this.instance_4 = new lib.happy_659_1462012299953();
		this.instance_4.setTransform(155.1,100,1,1,0,0,0,49.1,9);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-10.5,x:151,y:82.5},7).to({rotation:0,x:155.1,y:100},7).wait(1));

		// t8
		this.instance_5 = new lib.happy_013_1462012299966();
		this.instance_5.setTransform(205.5,90.9,1,1,0,0,0,60.5,2.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:60.4,regY:2.8,rotation:21.7,x:205.4},7).to({regX:60.5,regY:2.9,rotation:0,x:205.5},7).wait(1));

		// lm2
		this.instance_6 = new lib.happy_042_1462012299959();
		this.instance_6.setTransform(126.1,122.2,1,1,0,0,0,67.1,97.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:67,rotation:7,x:124.6,y:110.1},7).to({regX:67.1,rotation:0,x:126.1,y:122.2},7).wait(1));

		// lm3
		this.instance_7 = new lib.happy_868_1462012299962();
		this.instance_7.setTransform(56.5,97.4,1,1,0,0,0,56.5,97.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:56.6,regY:97.5,rotation:5,x:61.9,y:87.1},7).to({regX:56.5,regY:97.4,rotation:0,x:56.5,y:97.4},7).wait(1));

		// t9
		this.instance_8 = new lib.happy_345_1462012299965();
		this.instance_8.setTransform(154.4,120.8,1,1,0,0,0,53.4,19.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:19.7,rotation:4.7,x:154.5,y:109.1},7).to({regY:19.8,rotation:0,x:154.4,y:120.8},7).wait(1));

		// t10
		this.instance_9 = new lib.happy_190_1462012299961();
		this.instance_9.setTransform(202,132.9,1,1,0,0,0,60,23.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:59.9,rotation:15,x:201.9,y:133},7).to({regX:60,rotation:0,x:202,y:132.9},7).wait(1));

		// t11
		this.instance_10 = new lib.happy_496_1462012299955();
		this.instance_10.setTransform(50.5,107,1,1,0,0,0,13.5,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:94.6},7).to({y:107},7).wait(1));

		// t12
		this.instance_11 = new lib.happy_162_1462012299957();
		this.instance_11.setTransform(63.5,129.2,1,1,-34.7,0,0,31.5,22.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:0,y:116.8},7).to({rotation:-34.7,y:129.2},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,214,152.8);


	(lib.happy_361_1462012299973 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// p2
		this.instance = new lib.happy_224_1462012300000();
		this.instance.setTransform(86.8,82,1,1,0,24.9,-155.1,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleY:1,skewX:12,skewY:-164.2,x:86.9,y:80.6},7).to({regY:11.2,scaleY:1,skewX:24.9,skewY:-155.1,x:86.8,y:82},7).wait(1));

		// p1
		this.instance_1 = new lib.happy_457_1462012300004();
		this.instance_1.setTransform(109.4,80.2,1,1,0,24.9,-155.1,48.7,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.8,skewX:14.7,skewY:-165.3,y:80.3},7).to({regX:48.7,skewX:24.9,skewY:-155.1,y:80.2},7).wait(1));

		// p
		this.instance_2 = new lib.happy_791_1462012299999();
		this.instance_2.setTransform(52.8,104,1,1,0,24.9,-155.1,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

		// p3
		this.instance_3 = new lib.happy_059_1462012300001();
		this.instance_3.setTransform(60.3,88.5,1,1,0,19.2,-160.8,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.8,skewX:35.2,skewY:-144.8},7).to({regX:6.7,skewX:16.2,skewY:-163.8},7).wait(1));

		// s7
		this.instance_4 = new lib.happy_772_1462012299974();
		this.instance_4.setTransform(110.2,69.8,1,1,15,0,0,12.2,49.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,regY:49.7,rotation:0,x:110.1,y:69.7},7).to({regX:12.2,regY:49.8,rotation:15,x:110.2,y:69.8},7).wait(1));

		// rou
		this.instance_5 = new lib.happy_525_1462012299998();
		this.instance_5.setTransform(88,57,1,1,0,24.9,-155.1,29.9,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

		// s5
		this.instance_6 = new lib.happy_985_1462012300003();
		this.instance_6.setTransform(83.3,66.3,1,1,0,18.1,-161.9,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:56.5,skewX:2.9,skewY:-177.1,x:83.4,y:66.4},7).to({regX:10.2,regY:56.4,skewX:18.1,skewY:-161.9,x:83.3,y:66.3},7).wait(1));

		// s6
		this.instance_7 = new lib.happy_396_1462012299972();
		this.instance_7.setTransform(147.5,34.2,1,1,20,0,0,48,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:137,y:30.5},7).to({rotation:20,x:147.5,y:34.2},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-4.7,163.7,161.9);


	(lib.happy_644_1462012299993 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d12
		this.instance = new lib.happy_596_1462012299951();
		this.instance.setTransform(65,159,1,1,0,0,0,37,39);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:63.9,y:160.1},2).to({x:66.1},2).to({x:65,y:157.9},2).to({y:160.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(28,120,74,78);


	(lib.happy_569_1462012299991 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d15
		this.instance = new lib.happy_137_1462012299980();
		this.instance.setTransform(202,283,1,1,0,0,0,94,67);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:200.9,y:284.1},2).to({x:203.1},2).to({x:202,y:281.9},2).to({y:284.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(108,216,188,134);


	(lib.happy_519_1462012299994 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d1
		this.instance = new lib.happy_233_1462012299989();
		this.instance.setTransform(61,68.5,1,1,0,0,0,58,60.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:62.1,y:69.6},2).to({x:61,y:67.4},2).to({y:68.5},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(3,8,116,121);


	(lib.happy_492_1462012299947 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_642_1462012300124();
		this.instance.setTransform(20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},129).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_421_1462012300006 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// cmb
		this.instance = new lib.happy_815_1462012299986();
		this.instance.setTransform(45.4,16.4,1,1,-45.2,0,0,-296.2,-202);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

		// lmb
		this.instance_1 = new lib.happy_874_1462012299978();
		this.instance_1.setTransform(518.9,22.4,1,1,17.5,0,0,48,131.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

		// xjb 
		this.instance_2 = new lib.happy_816_1462012299968();
		this.instance_2.setTransform(519,16.5,1,1,-65.2,0,0,124.5,63.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(352.6,-155,336.2,335.9);


	(lib.happy_352_1462012299990 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d7
		this.instance = new lib.happy_379_1462012300009();
		this.instance.setTransform(272,89.5,1,1,0,0,0,30,25.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:270.9,y:88.4},2).to({x:273.1,y:90.6},2).to({x:272,y:88.4},2).to({y:90.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(242,64,60,51);


	(lib.happy_329_1462012300020 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_445_1462012299984();
		this.instance.setTransform(22,24.5,1,1,0,0,0,9.5,14.5);

		this.instance_1 = new lib.happy_437_1462012300017();
		this.instance_1.setTransform(-19.5,-31.5,1,1,0,0,0,12,7.5);

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-31.5,-39,63,78);


	(lib.happy_282_1462012299992 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_703_1462012299976();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:-1},2).to({x:-1,y:1},2).to({x:0,y:-1},2).to({x:1,y:0},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-30.8,-29.4,61.7,58.9);


	(lib.happy_262_1462012299970 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d5
		this.instance = new lib.happy_808_1462012300012();
		this.instance.setTransform(278.5,30,1,1,0,0,0,25.5,22);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:277.4,y:28.9},2).to({x:279.6,y:31.1},2).to({x:278.5,y:28.9},2).to({y:31.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(253,8,51,44);


	(lib.happy_903_1462012299997 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s4
		this.instance = new lib.happy_464_1462012299996();
		this.instance.setTransform(62.3,63.9,1,1,0,0,0,59.3,59.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:64},7).to({rotation:0,y:63.9},7).wait(1));

		// p2
		this.instance_1 = new lib.happy_224_1462012300000();
		this.instance_1.setTransform(68.5,76.2,1,1,0,0,0,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47.6,regY:11.3,scaleY:0.83,skewX:16.1,skewY:5.2,x:68.6,y:75.6},7).to({regX:47.5,regY:11.2,scaleY:1,skewX:0,skewY:0,x:68.5,y:76.2},7).wait(1));

		// p1
		this.instance_2 = new lib.happy_457_1462012300004();
		this.instance_2.setTransform(48.6,65.1,1,1,0,0,0,48.6,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15},7).to({rotation:0},7).wait(1));

		// p
		this.instance_3 = new lib.happy_791_1462012299999();
		this.instance_3.setTransform(90,110.5,1,1,0,0,0,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

		// p3
		this.instance_4 = new lib.happy_059_1462012300001();
		this.instance_4.setTransform(89.7,93.2,1,1,0,0,0,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15},7).to({rotation:0},7).wait(1));

		// rou
		this.instance_5 = new lib.happy_525_1462012299998();
		this.instance_5.setTransform(78,53,1,1,0,0,0,30,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

		// s5
		this.instance_6 = new lib.happy_985_1462012300003();
		this.instance_6.setTransform(78.2,63.4,1,1,0,0,0,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-9.9},7).to({rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,147,146);


	(lib.happy_492_1462012300053 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_903_1462012299997();
		this.instance.setTransform(37.8,54.5,0.9,0.9,0,0,0,115.5,133.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:133.3,scaleY:0.96,y:54.3},7).to({regY:133.5,scaleY:0.9,y:54.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-66.1,-65.7,132.3,131.4);


	(lib.happy_782_1462012300138 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_609_1462012300139();
		this.instance.setTransform(52,0,1,1,0,0,0,0,-106);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10.4},14).to({rotation:8.9,y:0.1},15).to({rotation:0,y:0},16).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,104,212);


	(lib.happy_442_1462012300045 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_361_1462012299973();
		this.instance.setTransform(-54.2,35.2,0.9,0.9,0,0,0,18.6,115.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.7,regY:115.8,rotation:-5.4},7).to({regX:18.6,regY:115.7,rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-71.2,-73.2,147.3,145.7);


	(lib.happy_427_1462012300049 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_38 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(2));

		// 图层 1
		this.instance = new lib.happy_066_1462012300043();
		this.instance.setTransform(-8,-258.5,1,1,0,0,0,7,7);

		this.instance_1 = new lib.happy_834_1462012300031();
		this.instance_1.setTransform(11.5,-235.5,1,1,0,0,0,26.5,34);

		this.instance_2 = new lib.happy_447_1462012300041();
		this.instance_2.setTransform(43,-215.5,1,1,0,0,0,79,47);

		this.instance_3 = new lib.happy_608_1462012300037();
		this.instance_3.setTransform(104.5,-190,1,1,0,0,0,116.5,56.5);

		this.instance_4 = new lib.happy_812_1462012300027();
		this.instance_4.setTransform(116.5,-140.5,1,1,0,0,0,130.5,112);

		this.instance_5 = new lib.happy_714_1462012300030();
		this.instance_5.setTransform(148,-71,1,1,0,0,0,99,180.5);

		this.instance_6 = new lib.happy_853_1462012300035();
		this.instance_6.setTransform(181,-20.5,1,1,0,0,0,72,200);

		this.instance_7 = new lib.happy_495_1462012300026();
		this.instance_7.setTransform(159.5,9,1,1,0,0,0,78.5,200.5);

		this.instance_8 = new lib.happy_502_1462012300038();
		this.instance_8.setTransform(139,51.5,1,1,0,0,0,104,186);

		this.instance_9 = new lib.happy_329_1462012300042();
		this.instance_9.setTransform(101.5,122,1,1,0,0,0,133.5,147.5);

		this.instance_10 = new lib.happy_369_1462012300036();
		this.instance_10.setTransform(24.5,118.5,1,1,0,0,0,191.5,123);

		this.instance_11 = new lib.happy_383_1462012300034();
		this.instance_11.setTransform(-42.5,143.5,1,1,0,0,0,171.5,95);

		this.instance_12 = new lib.happy_591_1462012300028();
		this.instance_12.setTransform(-157.5,74,1,1,0,0,0,84.5,127.5);

		this.instance_13 = new lib.happy_356_1462012300023();
		this.instance_13.setTransform(-156.5,46,1,1,0,0,0,96.5,152.5);

		this.instance_14 = new lib.happy_308_1462012300024();
		this.instance_14.setTransform(-182.2,-13.4,1,1,0,0,0,48.5,166);

		this.instance_15 = new lib.happy_318_1462012300032();
		this.instance_15.setTransform(-171.9,-37.4,1,1,0,0,0,50.5,173);

		this.instance_16 = new lib.happy_678_1462012300039();
		this.instance_16.setTransform(-160.6,-105.5,1,1,15,0,0,71,158);

		this.instance_17 = new lib.happy_290_1462012300022();
		this.instance_17.setTransform(-125,-107.4,1,1,5.2,0,0,91.5,134);

		this.instance_18 = new lib.happy_702_1462012300029();
		this.instance_18.setTransform(-82.3,-216.3,1,1,0,0,0,39,34.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15,-265.5,14,14);


	(lib.happy_241_1462012299942 = function() {
		this.initialize();

		// Layer 2
		this.btn_0 = new lib.happy_209_1462012299924();
		this.btn_0.setTransform(23.1,17,0.392,0.846);

		// 图层 1
		this.instance = new lib.happy_835_1462012300147();

		this.addChild(this.instance,this.btn_0);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-23.9,-16,94,66);


	(lib.happy_453_1462012300136 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_982_1462012300137();
		this.instance.setTransform(0,-234,1,1,0,0,0,134.5,0);

		// cmm
		this.instance_1 = new lib.happy_782_1462012300138();
		this.instance_1.setTransform(20.5,22,1,1,0,0,0,52,0);

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-134.5,-234,269,468);


	(lib.happy_295_1462012299945 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_610_1462012300050();
		this.instance.setTransform(0,0,1,1,0,0,0,13.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13.5,-137.5,27,275);


	(lib.happy_176_1462012299934 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_614_1462012300109();
		this.instance.setTransform(-2.2,-28.4,1,1,-42.4,0,0,24.1,8);

		this.instance_1 = new lib.happy_061_1462012300091();
		this.instance_1.setTransform(-0.6,27.8,1,1,-42.4,0,0,8.3,26.5);

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-25.4,-40.3,50.8,80.7);


	(lib.happy_144_1462012300132 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_407_1462012300131();
		this.instance.setTransform(33.5,18,1,1,4);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.8,x:34.7,y:16.9},2).to({x:32.5,y:19.1},2).to({x:33.6,y:16.9},2).to({rotation:4,x:33.5,y:19.1},2).wait(1));

		// 图层 3
		this.instance_1 = new lib.happy_534_1462012300122();
		this.instance_1.setTransform(-29.5,-6.7,1,1,-3.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.6,x:-30.6,y:-5.6},2).to({rotation:-3.5,x:-28.4,y:-5.5},2).to({x:-29.5},2).to({rotation:-3.7,y:-7.8},2).wait(1));

		// 图层 2
		this.instance_2 = new lib.happy_890_1462012300274();
		this.instance_2.setTransform(-64,-65,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-72.7,-65,137.7,129);


	(lib.happy_101_1462012299944 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// zb
		this.instance = new lib.happy_819_1462012299975();
		this.instance.setTransform(13,-0.1,1,1,5.5,0,0,25.9,43.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26,rotation:5.3,x:14.3,y:-1},2).to({regX:25.9,scaleX:1,scaleY:1,x:11.8,y:1},2).to({x:12.8,y:1.1},2).to({scaleX:1,scaleY:1,rotation:5.5,x:13.1,y:-1.2},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-17,-46.2,60.2,92.6);


	(lib.happy_096_1462012300046 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_895_1462012299938();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:-1},2).to({x:-1,y:1},2).to({x:0,y:-1},2).to({x:1,y:0},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.6,-50.9,73.3,101.9);


	(lib.happy_685_1462012299931 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_881_1462012300133();
		this.instance.setTransform(28.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.09,scaleY:0.09},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,57,40);


	(lib.happy_836_1462012299929 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_994_1462012300054();
		this.instance.setTransform(8.5,13);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.25,scaleY:0.25},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,17,26);


	(lib.happy_389_1462012299926 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_775_1462012299939();
		this.instance.setTransform(11.5,32);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.2,scaleY:0.2,rotation:15,mode:"synched",startPosition:0},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,64);


	(lib.happy_322_1462012299928 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝
		this.instance = new lib.happy_977_1462012299925("synched",0);
		this.instance.setTransform(71,71.5,0.188,0.188,0,0,0,8,8);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.47,scaleY:0.47,x:87.8,y:52.7},7,cjs.Ease.get(-0.49)).to({scaleX:0.19,scaleY:0.19,x:104.5,y:33.8},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(21));

		// y1
		this.instance_1 = new lib.happy_977_1462012299925("synched",0);
		this.instance_1.setTransform(35,49.8,0.219,0.219,0,0,0,8,8);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:32.8,y:17.7},7,cjs.Ease.get(-0.48)).to({scaleX:0.22,scaleY:0.22,x:30.5,y:-14.5},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(22));

		// ss2
		this.instance_2 = new lib.happy_836_1462012299929("synched",0);
		this.instance_2.setTransform(59.3,93.5,0.133,0.088,0,0,0,2.2,22.8);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({regX:2.3,scaleX:1,scaleY:1,x:60.6,y:63.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:2.2,x:70,y:30.5,startPosition:14},7,cjs.Ease.get(0.52)).to({_off:true},1).wait(23));

		// 图层 19 拷贝 2
		this.instance_3 = new lib.happy_389_1462012299926("synched",0);
		this.instance_3.setTransform(49.9,89.1,0.08,0.086,0,-49.1,130.8,17.4,63.1);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:17.6,scaleX:0.78,scaleY:0.78,skewX:-49.2,x:41.3,y:66.7,startPosition:7},7,cjs.Ease.get(-0.5)).to({scaleX:0.7,scaleY:0.7,x:18,y:41.9,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// ss1
		this.instance_4 = new lib.happy_389_1462012299926("synched",0);
		this.instance_4.setTransform(56.5,95.3,0.164,0.156,0,0,0,17.4,63.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.6,regY:62.9,scaleX:1.21,scaleY:1.21,x:60.2,y:85.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.5,regY:63,scaleX:1,scaleY:1,rotation:15,x:62.2,y:32,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(53.7,85.4,3.8,10);


	(lib.happy_175_1462012300085 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s1
		this.instance = new lib.happy_176_1462012299934();
		this.instance.setTransform(60.7,9.9,1,1,40,0,0,0.1,-30.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:25,x:47.4,y:1.9},7).to({rotation:40,x:60.7,y:9.9},7).wait(1));

		// s3
		this.instance_1 = new lib.happy_079_1462012300083();
		this.instance_1.setTransform(17.1,57.7,1,1,-25.7,0,0,16.9,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

		// xj
		this.instance_2 = new lib.happy_971_1462012300104();
		this.instance_2.setTransform(114.5,109.8,1,1,0,0,0,102.5,109.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-3.8,x:104.1,y:103},7).to({scaleY:1,skewX:0,x:114.5,y:109.8},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.9,-35,164.5,178.1);


	(lib.happy_974_1462012300013 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_15 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

		// Layer 4
		this.btn_2 = new lib.happy_209_1462012299924();
		this.btn_2.setTransform(512.1,217.1);

		this.btn_1 = new lib.happy_209_1462012299924();
		this.btn_1.setTransform(508.1,129.1);

		this.btn_0 = new lib.happy_209_1462012299924();
		this.btn_0.setTransform(512.1,43);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_0},{t:this.btn_1},{t:this.btn_2}]},15).wait(1));

		// cmm
		this.instance = new lib.happy_453_1462012300136();
		this.instance.setTransform(505.5,-492.1,1,1,0,0,0,0,-234);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleY:1.05,y:0},8,cjs.Ease.get(1)).to({scaleY:1},5).wait(2));

		// di
		this.bgMC = new lib.happy_904_1462012300007();
		this.bgMC.setTransform(320,520,1,1,0,0,0,320,520);
		this.bgMC.alpha = 0;
		this.bgMC._off = true;

		this.timeline.addTween(cjs.Tween.get(this.bgMC).wait(1).to({_off:false},0).to({alpha:1},9).wait(6));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = null;


	(lib.happy_617_1462012299969 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// d9
		this.instance = new lib.happy_329_1462012300020();
		this.instance.setTransform(138.5,157);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:137.4,y:158.1},2).to({x:139.6},2).to({x:138.5,y:155.9},2).to({y:158.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(107,118,63,78);


	(lib.happy_531_1462012299946 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_144_1462012300132();
		this.instance.setTransform(65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-7.7,0,137.7,129);


	(lib.happy_502_1462012300135 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 2
		this.instance = new lib.happy_819_1462012300008();
		this.instance.setTransform(-0.3,0.1,1,1,40.5,0,0,-477.1,0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,rotation:-360,x:-0.2,y:0},496).wait(190));

		// 图层 3
		this.instance_1 = new lib.happy_295_1462012299945();
		this.instance_1.setTransform(-0.2,0.1,1,1,175.9,0,0,-477.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-477.2,regY:0,rotation:-360,x:-0.3,y:0},496).to({_off:true},158).wait(32));

		// 图层 4
		this.instance_2 = new lib.happy_901_1462012299936();
		this.instance_2.setTransform(-0.3,0.1,1,1,-64.7,0,0,-479.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0,rotation:-720,y:0},496).to({_off:true},78).wait(112));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.4,-502.9,961.7,926);


	(lib.happy_471_1462012300044 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_31 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

		// 图层 17
		this.instance = new lib.happy_569_1462012299991();
		this.instance.setTransform(47.3,215.9,1,1,0,0,0,202,283);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(10));

		// 图层 16
		this.instance_1 = new lib.happy_735_1462012300005();
		this.instance_1.setTransform(55.8,132.7,1,1,0,0,0,208,195.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(12));

		// 图层 15
		this.instance_2 = new lib.happy_644_1462012299993();
		this.instance_2.setTransform(-89.2,93.9,1,1,0,0,0,65,159);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(12));

		// 图层 14
		this.instance_3 = new lib.happy_617_1462012299969();
		this.instance_3.setTransform(-15.4,91,1,1,0,0,0,138.5,157);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(14));

		// 图层 13
		this.instance_4 = new lib.happy_352_1462012299990();
		this.instance_4.setTransform(118.8,23.1,1,1,0,0,0,272,89.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(16));

		// 图层 12
		this.instance_5 = new lib.happy_262_1462012299970();
		this.instance_5.setTransform(126.2,-34.8,1,1,0,0,0,278.5,30);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(18));

		// 图层 11
		this.instance_6 = new lib.happy_982_1462012300015();
		this.instance_6.setTransform(60,-37.2,1,1,0,0,0,211,28);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(20));

		// 图层 10
		this.instance_7 = new lib.happy_519_1462012299994();
		this.instance_7.setTransform(-91.6,2,1,1,0,0,0,61,68.5);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(22));

		// qu
		this.instance_8 = new lib.happy_995_1462012300120();
		this.instance_8.setTransform(44.2,223.1,0.031,0.031,24.3);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:-9.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-5.8},5).wait(4));

		// chu
		this.instance_9 = new lib.happy_770_1462012299952();
		this.instance_9.setTransform(67.3,100.1,0.079,0.079,-2.7);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:-2.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-2.7},5).wait(6));

		// yao
		this.instance_10 = new lib.happy_096_1462012300046();
		this.instance_10.setTransform(-14.1,102.1,0.08,0.08,-9.1);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:5.8},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:5.9},5).wait(8));

		// 图层 19
		this.instance_11 = new lib.happy_530_1462012300121();
		this.instance_11.setTransform(-80.8,105.7,1,1,3.5);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).wait(19));

		// 图层 18
		this.instance_12 = new lib.happy_101_1462012299944();
		this.instance_12.setTransform(-68.6,106.5,0.206,0.062,-21,0,0,13,0.1);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1.07,rotation:-5.8,x:-68.5,y:106.6},9,cjs.Ease.get(1)).to({regY:0,scaleY:1,rotation:-6,y:106.4},5).wait(10));

		// gan
		this.instance_13 = new lib.happy_859_1462012300125();
		this.instance_13.setTransform(116.4,25.2,0.053,0.053,0.5);
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:0.3},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0.5},5).wait(12));

		// bing
		this.instance_14 = new lib.happy_282_1462012299992();
		this.instance_14.setTransform(118.4,-28.8,0.094,0.094,12);
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:-3},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(14));

		// li
		this.instance_15 = new lib.happy_967_1462012299933();
		this.instance_15.setTransform(31.8,-5.3,0.062,0.062,-14.3);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,rotation:0.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0.7},5).wait(16));

		// li
		this.instance_16 = new lib.happy_967_1462012299933();
		this.instance_16.setTransform(-99.4,0.5,0.129,0.129,8,0,0,-11.9,-1.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:-12,scaleX:1.1,scaleY:1.1,rotation:-6.8,x:-99.5,y:0.6},9,cjs.Ease.get(1)).to({regY:-1.5,scaleX:1,scaleY:1,rotation:-7,y:0.5},5).wait(18));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-107.8,-8.7,19.8,19.2);


	(lib.happy_483_1462012299932 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝 2
		this.instance = new lib.happy_977_1462012299925("synched",0);
		this.instance.setTransform(29.3,63.2,0.12,0.12,0,0,0,7.9,7.9);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:8.2,scaleX:0.58,scaleY:0.58,x:45.2,y:53},7,cjs.Ease.get(-0.5)).to({regY:7.8,scaleX:0.14,scaleY:0.14,x:56.6,y:52.9},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(22));

		// 图层 19 拷贝 4
		this.instance_1 = new lib.happy_389_1462012299926("synched",0);
		this.instance_1.setTransform(13.6,69.2,0.09,0.09,108.8,0,0,17.7,17.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:17.6,scaleX:0.63,scaleY:0.63,rotation:101.3,x:36.3,y:69.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.9,scaleX:0.7,scaleY:0.7,rotation:93.8,x:59.1,y:70.4,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(23));

		// ss4
		this.instance_2 = new lib.happy_389_1462012299926("synched",0);
		this.instance_2.setTransform(6.4,57.6,0.09,0.09,0,22.8,-157.2,18,17.2);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regY:17.4,scaleX:0.64,scaleY:0.64,skewX:44.8,skewY:-135.2,x:25.5,y:27.1,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.9,regY:17.7,scaleX:0.5,scaleY:0.5,skewX:37.8,skewY:-142.2,x:36.7,y:10.6,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// ss3
		this.instance_3 = new lib.happy_685_1462012299931("synched",0);
		this.instance_3.setTransform(5,64.6,0.087,0.087,0,0,0,28.6,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:28.4,regY:19.9,scaleX:1,scaleY:1,rotation:-14.8,x:26.8,y:38.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:28.6,regY:20,rotation:-15,x:44.6,y:22.7,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(2.5,62.9,5,3.5);


	(lib.happy_255_1462012299930 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝 3
		this.instance = new lib.happy_977_1462012299925();
		this.instance.setTransform(23.8,1.3,0.189,0.189,0,0,0,8,8);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:8.1,regY:7.7,scaleX:0.66,scaleY:0.66,x:9,y:15.7},7,cjs.Ease.get(-0.5)).to({regX:7.7,scaleX:0.05,scaleY:0.05,x:-5.7,y:29.9},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(23));

		// 图层 19 拷贝 6
		this.instance_1 = new lib.happy_389_1462012299926("synched",0);
		this.instance_1.setTransform(43.5,4,0.145,0.145,0,-165.5,14.5,11.7,32.2);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,skewX:-173.2,skewY:6.8,x:42,y:23.8,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:11.6,regY:31.9,scaleX:0.15,scaleY:0.15,skewX:-180.5,skewY:-0.5,x:40.5,y:43.5,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// 图层 19 拷贝 5
		this.instance_2 = new lib.happy_389_1462012299926("synched",0);
		this.instance_2.setTransform(40.8,0.7,0.22,0.22,0,-143,37,11.6,32.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:32.2,scaleX:0.61,scaleY:0.61,skewX:-154.7,skewY:25.3,x:28.6,y:26,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:11.2,regY:32,scaleX:0.13,scaleY:0.13,skewX:-166.4,skewY:13.6,x:16.2,y:51.2,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(34.5,-6.3,12.5,14.3);


	(lib.happy_857_1462012299940 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_45 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

		// cx15
		this.instance = new lib.happy_427_1462012300049();
		this.instance.setTransform(-3.1,20.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

		// cm1
		this.instance_1 = new lib.happy_401_1462012300106();
		this.instance_1.setTransform(-100.8,-108.6,0.22,0.22,-20.3,0,0,51.4,204.1);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({regX:51.6,regY:204,scaleX:1,scaleY:1,x:-79.8,y:-60.9},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:-85.2,y:-70.7},5).wait(2));

		// cm2
		this.instance_2 = new lib.happy_416_1462012300103();
		this.instance_2.setTransform(-182.6,-73.8,0.22,0.22,8.8,0,0,68.1,61.3);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({regX:68,regY:60.9,scaleX:0.9,scaleY:0.9,y:-73.9},9,cjs.Ease.get(1)).wait(9));

		// xj2
		this.instance_3 = new lib.happy_492_1462012300053();
		this.instance_3.setTransform(-186.1,50.8,0.28,0.28);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(12));

		// xj3
		this.instance_4 = new lib.happy_442_1462012300045();
		this.instance_4.setTransform(155.8,-134.8,0.43,0.43);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(31));

		// lm1
		this.instance_5 = new lib.happy_751_1462012299954();
		this.instance_5.setTransform(-113.1,183.6,0.36,0.36,0,0,0,107,68.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},5).wait(11));

		// caomei2
		this.instance_6 = new lib.happy_033_1462012300071();
		this.instance_6.setTransform(163.2,174.3,0.42,0.42,0,0,0,75,57.6);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({regY:57.5,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},5).wait(19));

		// lanmei1
		this.instance_7 = new lib.happy_511_1462012300073();
		this.instance_7.setTransform(212.9,-4.9,0.32,0.32,0,0,0,57.5,108.3);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({regX:57,regY:109,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},5).wait(23));

		// xiangjiao3
		this.instance_8 = new lib.happy_175_1462012300085();
		this.instance_8.setTransform(180.9,130.7,0.3,0.3,0,0,0,65.3,71.4);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({regX:65.5,regY:71.5,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},5).wait(20));

		// XJ+LM
		this.instance_9 = new lib.happy_336_1462012300059();
		this.instance_9.setTransform(7.5,-164.6,0.3,0.3,0,0,0,91.2,93.9);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({regX:91.5,regY:94,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},5).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-18.1,-245.3,14,14);


	// stage content:



	(lib.index = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_47 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

		// cd
		this.menuMC = new lib.happy_974_1462012300013();
		this.menuMC.setTransform(320,520,1,1,0,0,0,320,520);

		this.timeline.addTween(cjs.Tween.get(this.menuMC).wait(48));

		// ks
		this.startBtn = new lib.happy_531_1462012299946();
		this.startBtn.setTransform(320,834,0.201,0.201,0,0,0,65,65);
		this.startBtn._off = true;

		this.timeline.addTween(cjs.Tween.get(this.startBtn).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(4));

		// 菜单
		this.menuBtn = new lib.happy_241_1462012299942();
		this.menuBtn.setTransform(597.5,34.5,1,1,0,0,0,27.5,16.5);

		this.timeline.addTween(cjs.Tween.get(this.menuBtn).wait(48));

		// cmb
		this.instance = new lib.happy_502_1462012300135();
		this.instance.setTransform(320,520);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

		// zi
		this.instance_1 = new lib.happy_471_1462012300044();
		this.instance_1.setTransform(319.6,391.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

		// cm1
		this.instance_2 = new lib.happy_857_1462012299940();
		this.instance_2.setTransform(309.4,400.6,1,1,0,0,0,-1.3,-2.6);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(42));

		// sh1
		this.instance_3 = new lib.happy_322_1462012299928();
		this.instance_3.setTransform(224.9,147.6,1,1,0,0,0,47,41.5);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(26));

		// sh2
		this.instance_4 = new lib.happy_483_1462012299932();
		this.instance_4.setTransform(320,520,1,1,0,0,0,-209,274);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

		// sh3
		this.instance_5 = new lib.happy_255_1462012299930();
		this.instance_5.setTransform(320,520,1,1,0,0,0,109,-139);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

		// cmb
		this.instance_6 = new lib.happy_421_1462012300006();
		this.instance_6.setTransform(277,473.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48));

		// Vector Smart Object copy 2
		this.instance_7 = new lib.happy_492_1462012299947();
		this.instance_7.setTransform(501.5,100.5,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48));

		// xh
		this.instance_8 = new lib.happy_492_1462012299947();
		this.instance_8.setTransform(249.5,45.2,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48));

		// Vector Smart Object copy 4
		this.instance_9 = new lib.happy_938_1462012299977();
		this.instance_9.setTransform(447.5,1123.5,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48));

		// Vector Smart Object copy 6
		this.instance_10 = new lib.happy_492_1462012299947();
		this.instance_10.setTransform(590.5,643.5,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(48));

		// Vector Smart Object copy 3
		this.instance_11 = new lib.happy_492_1462012299947();
		this.instance_11.setTransform(187.5,849.9,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48));

		// Vector Smart Object copy
		this.instance_12 = new lib.happy_492_1462012299947();
		this.instance_12.setTransform(132.3,740.3,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(48));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(140.6,520,1145.3,1144);

	});

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: []
	};



	// symbols:



	(lib.happy_023_1461771705930 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_048_1461771705920 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_051_1461771705913 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_051_1461771705939 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_057_1461771705944 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_067_1461771705932 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_095_1461771705955 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_107_1461771705918 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_119_1461771705962 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_121_1461771705937 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_124_1461771705926 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_145_1461771705921 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_150_1461771705935 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_201_1461771705946 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_205_1461771705925 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_217_1461771705923 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_227_1461771705923 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_227_1461771705947 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_239_1461771705914 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_245_1461771705918 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_253_1461771705929 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_297_1461771705915 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_304_1461771705917 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_366_1461771705928 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_394_1461771705941 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_410_1461771705960 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_442_1461771705951 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_443_1461771705964 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_474_1461771705950 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_482_1461771705954 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_495_1461771705936 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_509_1461771705926 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_521_1461771705917 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_526_1461771705915 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_529_1461771705916 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_558_1461771705929 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_560_1461771705949 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_561_1461771705943 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_562_1461771705916 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_572_1461771705942 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_573_1461771705953 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_582_1461771705934 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_606_1461771705958 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_620_1461771705920 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_625_1461771705914 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_634_1461771705957 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_646_1461771705966 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_663_1461771705933 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_668_1461771705917 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_672_1461771705915 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_691_1461771705944 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_692_1461771705933 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_713_1461771705919 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_780_1461771705960 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_816_1461771705922 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_847_1461771705959 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_856_1461771705924 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_862_1461771705950 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_915_1461771705957 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_951_1461771705920 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(59);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_955_1461771705939 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(60);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_969_1461771705938 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(61);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_990_1461771705921 = function() {
		this.spriteSheet = ss["loading_atlas_"];
		this.gotoAndStop(62);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_339_1461771705857 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_969_1461771705938();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,60);


	(lib.happy_278_1461771705856 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_121_1461771705937();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,21);


	(lib.happy_527_1461771705837 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_410_1461771705960();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,242);


	(lib.happy_949_1461771705852 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_150_1461771705935();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_916_1461771705850 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_205_1461771705925();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,106);


	(lib.happy_748_1461771705845 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_816_1461771705922();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,71);


	(lib.happy_573_1461771705853 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_495_1461771705936();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_467_1461771705848 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_217_1461771705923();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,67,72);


	(lib.happy_284_1461771705849 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_856_1461771705924();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,64,53);


	(lib.happy_094_1461771705846 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_227_1461771705923();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,59,40);


	(lib.happy_395_1461771705841 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_646_1461771705966();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,17,97);


	(lib.happy_330_1461771705813 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_145_1461771705921();
		this.instance.setTransform(10.6,-8.9,0.364,0.364,15);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-4.4,-8.9,55.8,66.9);


	(lib.happy_970_1461771705824 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_606_1461771705958();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,34);


	(lib.happy_767_1461771705822 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_067_1461771705932();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,23);


	(lib.happy_726_1461771705830 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_560_1461771705949();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,29);


	(lib.happy_715_1461771705828 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_201_1461771705946();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,68,28);


	(lib.happy_666_1461771705829 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_227_1461771705947();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,32,32);


	(lib.happy_585_1461771705825 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_847_1461771705959();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,69,23);


	(lib.happy_567_1461771705818 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_955_1461771705939();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,25);


	(lib.happy_515_1461771705816 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_951_1461771705920();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,107,106);


	(lib.happy_485_1461771705817 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_048_1461771705920();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,113,112);


	(lib.happy_194_1461771705821 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_023_1461771705930();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_124_1461771705820 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_051_1461771705939();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,45,19);


	(lib.happy_071_1461771705826 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_780_1461771705960();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,63,31);


	(lib.happy_164_1461771705836 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_572_1461771705942();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,147,185);


	(lib.happy_123_1461771705840 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_443_1461771705964();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,160);


	(lib.happy_083_1461771705839 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_119_1461771705962();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,201);


	(lib.happy_981_1461771705907 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_442_1461771705951();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,38,62);


	(lib.happy_923_1461771705898 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_990_1461771705921();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_880_1461771705894 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_582_1461771705934();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,59);


	(lib.happy_853_1461771705887 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_124_1461771705926();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,44);


	(lib.happy_832_1461771705909 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_482_1461771705954();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42,58);


	(lib.happy_821_1461771705903 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_057_1461771705944();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_807_1461771705880 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_713_1461771705919();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,99,115);


	(lib.happy_736_1461771705889 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_366_1461771705928();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,47);


	(lib.happy_712_1461771705897 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_561_1461771705943();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,84);


	(lib.happy_706_1461771705883 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_620_1461771705920();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_628_1461771705891 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_558_1461771705929();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,16);


	(lib.happy_609_1461771705904 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_862_1461771705950();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,82);


	(lib.happy_608_1461771705892 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_692_1461771705933();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,94);


	(lib.happy_531_1461771705908 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_573_1461771705953();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_522_1461771705875 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_239_1461771705914();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,31);


	(lib.happy_457_1461771705888 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_253_1461771705929();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_406_1461771705893 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_663_1461771705933();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_318_1461771705884 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_509_1461771705926();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,95);


	(lib.happy_277_1461771705901 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_634_1461771705957();
		this.instance.setTransform(1.2,50.8,1,1,0,159,-21);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-9.2,0,72,50.8);


	(lib.happy_186_1461771705885 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_672_1461771705915();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_143_1461771705896 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_394_1461771705941();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,13);


	(lib.happy_117_1461771705900 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_691_1461771705944();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_058_1461771705912 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_915_1461771705957();
		this.instance.setTransform(38.9,46.7,1,1,159.2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-4.9,-4.8,43.8,60.7);


	(lib.happy_050_1461771705905 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_474_1461771705950();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_038_1461771705877 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_713_1461771705919();
		this.instance.setTransform(121.4,53.9,1,1,0,45,-135);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.9,-16.1,151.3,151.3);


	(lib.happy_005_1461771705911 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_095_1461771705955();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_993_1461771705861 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_625_1461771705914();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,32);


	(lib.happy_935_1461771705870 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_668_1461771705917();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,34);


	(lib.happy_717_1461771705866 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_529_1461771705916();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,33);


	(lib.happy_678_1461771705865 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_562_1461771705916();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,34);


	(lib.happy_585_1461771705872 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_107_1461771705918();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,34);


	(lib.happy_558_1461771705862 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_297_1461771705915();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,34);


	(lib.happy_550_1461771705868 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_521_1461771705917();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,34);


	(lib.happy_338_1461771705874 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_245_1461771705918();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,34);


	(lib.happy_146_1461771705871 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_304_1461771705917();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,34);


	(lib.happy_144_1461771705860 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_051_1461771705913();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,33);


	(lib.happy_007_1461771705864 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_526_1461771705915();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,34);


	(lib.happy_673_1461771705811 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			/* stop()*/
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

		// 图层 6
		this.instance = new lib.happy_164_1461771705836();
		this.instance.setTransform(5,-146,1,1,0,0,0,73.5,92.5);

		this.instance_1 = new lib.happy_164_1461771705836();
		this.instance_1.setTransform(5,-71.5,1,1,0,0,0,73.5,92.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,y:-146,scaleX:1,scaleY:1,x:5}}]}).to({state:[{t:this.instance_1,p:{y:-71.5,scaleX:1,scaleY:1,x:5}},{t:this.instance,p:{rotation:60,y:-71.5,scaleX:1,scaleY:1,x:5}}]},24).to({state:[{t:this.instance_1,p:{y:-51.6,scaleX:1,scaleY:1,x:5}},{t:this.instance,p:{rotation:60,y:11.1,scaleX:1,scaleY:1,x:5}}]},25).to({state:[{t:this.instance_1,p:{y:26.3,scaleX:0.678,scaleY:0.678,x:5.4}},{t:this.instance,p:{rotation:60,y:28.5,scaleX:1.091,scaleY:1.091,x:1}}]},25).wait(26));

		// xj 4
		this.instance_2 = new lib.happy_395_1461771705841();
		this.instance_2.setTransform(1,72.5,1,1,0,0,0,8.5,48.5);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).wait(26));

		// xj 3
		this.instance_3 = new lib.happy_123_1461771705840();
		this.instance_3.setTransform(0,41,1,1,0,0,0,10.5,80);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({_off:true},25).wait(26));

		// xj 2
		this.instance_4 = new lib.happy_083_1461771705839();
		this.instance_4.setTransform(0,20.5,1,1,0,0,0,10.5,100.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({_off:true},25).wait(51));

		// xj
		this.instance_5 = new lib.happy_527_1461771705837();
		this.instance_5.setTransform(0,0,1,1,0,0,0,10.5,121);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},24).wait(76));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-68.5,-238.5,147,359.6);


	(lib.happy_847_1461771705858 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// p2
		this.instance = new lib.happy_467_1461771705848();
		this.instance.setTransform(86.8,82,1,1,0,24.9,-155.1,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleY:1,skewX:12,skewY:-164.2,x:86.9,y:80.6},7).to({regY:11.2,scaleY:1,skewX:24.9,skewY:-155.1,x:86.8,y:82},7).wait(1));

		// p1
		this.instance_1 = new lib.happy_094_1461771705846();
		this.instance_1.setTransform(109.4,80.2,1,1,0,24.9,-155.1,48.7,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.8,skewX:14.7,skewY:-165.3,y:80.3},7).to({regX:48.7,skewX:24.9,skewY:-155.1,y:80.2},7).wait(1));

		// p
		this.instance_2 = new lib.happy_748_1461771705845();
		this.instance_2.setTransform(52.8,104,1,1,0,24.9,-155.1,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

		// p3
		this.instance_3 = new lib.happy_284_1461771705849();
		this.instance_3.setTransform(60.3,88.5,1,1,0,19.2,-160.8,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.8,skewX:35.2,skewY:-144.8},7).to({regX:6.7,skewX:16.2,skewY:-163.8},7).wait(1));

		// s7
		this.instance_4 = new lib.happy_339_1461771705857();
		this.instance_4.setTransform(110.2,69.8,1,1,15,0,0,12.2,49.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,regY:49.7,rotation:0,x:110.1,y:69.7},7).to({regX:12.2,regY:49.8,rotation:15,x:110.2,y:69.8},7).wait(1));

		// rou
		this.instance_5 = new lib.happy_916_1461771705850();
		this.instance_5.setTransform(88,57,1,1,0,24.9,-155.1,29.9,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

		// s5
		this.instance_6 = new lib.happy_573_1461771705853();
		this.instance_6.setTransform(83.3,66.3,1,1,0,18.1,-161.9,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:56.5,skewX:2.9,skewY:-177.1,x:83.4,y:66.4},7).to({regX:10.2,regY:56.4,skewX:18.1,skewY:-161.9,x:83.3,y:66.3},7).wait(1));

		// s6
		this.instance_7 = new lib.happy_278_1461771705856();
		this.instance_7.setTransform(147.5,34.2,1,1,20,0,0,48,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:137,y:30.5},7).to({rotation:20,x:147.5,y:34.2},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-4.7,163.7,161.9);


	(lib.happy_580_1461771705854 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s4
		this.instance = new lib.happy_949_1461771705852();
		this.instance.setTransform(62.3,63.9,1,1,0,0,0,59.3,59.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:64},7).to({rotation:0,y:63.9},7).wait(1));

		// p2
		this.instance_1 = new lib.happy_467_1461771705848();
		this.instance_1.setTransform(68.5,76.2,1,1,0,0,0,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47.6,regY:11.3,scaleY:0.83,skewX:16.1,skewY:5.2,x:68.6,y:75.6},7).to({regX:47.5,regY:11.2,scaleY:1,skewX:0,skewY:0,x:68.5,y:76.2},7).wait(1));

		// p1
		this.instance_2 = new lib.happy_094_1461771705846();
		this.instance_2.setTransform(48.6,65.1,1,1,0,0,0,48.6,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15},7).to({rotation:0},7).wait(1));

		// p
		this.instance_3 = new lib.happy_748_1461771705845();
		this.instance_3.setTransform(90,110.5,1,1,0,0,0,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

		// p3
		this.instance_4 = new lib.happy_284_1461771705849();
		this.instance_4.setTransform(89.7,93.2,1,1,0,0,0,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15},7).to({rotation:0},7).wait(1));

		// rou
		this.instance_5 = new lib.happy_916_1461771705850();
		this.instance_5.setTransform(78,53,1,1,0,0,0,30,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

		// s5
		this.instance_6 = new lib.happy_573_1461771705853();
		this.instance_6.setTransform(78.2,63.4,1,1,0,0,0,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-9.9},7).to({rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,147,146);


	(lib.happy_360_1461771705833 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop()
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

		// 9
		this.instance = new lib.happy_338_1461771705874();
		this.instance.setTransform(0,0,1,1,0,0,0,11.5,17);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1));

		// 8
		this.instance_1 = new lib.happy_585_1461771705872();
		this.instance_1.setTransform(0,0,1,1,0,0,0,11,17);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},1).wait(1));

		// 7
		this.instance_2 = new lib.happy_146_1461771705871();
		this.instance_2.setTransform(0,0,1,1,0,0,0,11,17);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},1).wait(2));

		// 6
		this.instance_3 = new lib.happy_935_1461771705870();
		this.instance_3.setTransform(0,0,1,1,0,0,0,10.5,17);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(3));

		// 5
		this.instance_4 = new lib.happy_550_1461771705868();
		this.instance_4.setTransform(0,0,1,1,0,0,0,11,17);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},1).wait(4));

		// 4
		this.instance_5 = new lib.happy_717_1461771705866();
		this.instance_5.setTransform(0,0,1,1,0,0,0,12,16.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},1).wait(5));

		// 3
		this.instance_6 = new lib.happy_678_1461771705865();
		this.instance_6.setTransform(0,0,1,1,0,0,0,10.5,17);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},1).wait(6));

		// 2
		this.instance_7 = new lib.happy_007_1461771705864();
		this.instance_7.setTransform(0,0,1,1,0,0,0,10,17);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

		// 1
		this.instance_8 = new lib.happy_558_1461771705862();
		this.instance_8.setTransform(0,0,1,1,0,0,0,6.5,17);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

		// 0
		this.instance_9 = new lib.happy_993_1461771705861();
		this.instance_9.setTransform(0,0,1,1,0,0,0,11.5,16);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11.5,-16,23,32);


	(lib.happy_012_1461771705814 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s8
		this.instance = new lib.happy_567_1461771705818();
		this.instance.setTransform(47.9,70.7,1,1,0,0,0,28.9,18.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.8,rotation:14.2,x:51,y:66},7).to({regY:18.7,rotation:0,x:47.9,y:70.7},7).wait(1));

		// s9
		this.instance_1 = new lib.happy_124_1461771705820();
		this.instance_1.setTransform(80,79.1,1,1,0,0,0,41,15.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.5,y:77.2},7).to({rotation:0,y:79.1},7).wait(1));

		// s10
		this.instance_2 = new lib.happy_194_1461771705821();
		this.instance_2.setTransform(150.1,66.2,1,1,0,0,0,43.1,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:45,x:149.1,y:77.3},7).to({rotation:0,x:150.1,y:66.2},7).wait(1));

		// s11
		this.instance_3 = new lib.happy_767_1461771705822();
		this.instance_3.setTransform(190.5,55.5,1,1,0,0,0,51.5,3.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-11.2},7).to({rotation:0},7).wait(1));

		// t7
		this.instance_4 = new lib.happy_970_1461771705824();
		this.instance_4.setTransform(155.1,100,1,1,0,0,0,49.1,9);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-10.5,x:151,y:82.5},7).to({rotation:0,x:155.1,y:100},7).wait(1));

		// t8
		this.instance_5 = new lib.happy_585_1461771705825();
		this.instance_5.setTransform(205.5,90.9,1,1,0,0,0,60.5,2.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:60.4,regY:2.8,rotation:21.7,x:205.4},7).to({regX:60.5,regY:2.9,rotation:0,x:205.5},7).wait(1));

		// lm2
		this.instance_6 = new lib.happy_515_1461771705816();
		this.instance_6.setTransform(126.1,122.2,1,1,0,0,0,67.1,97.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:67,rotation:7,x:124.6,y:110.1},7).to({regX:67.1,rotation:0,x:126.1,y:122.2},7).wait(1));

		// lm3
		this.instance_7 = new lib.happy_485_1461771705817();
		this.instance_7.setTransform(56.5,97.4,1,1,0,0,0,56.5,97.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:56.6,regY:97.5,rotation:5,x:61.9,y:87.1},7).to({regX:56.5,regY:97.4,rotation:0,x:56.5,y:97.4},7).wait(1));

		// t9
		this.instance_8 = new lib.happy_071_1461771705826();
		this.instance_8.setTransform(154.4,120.8,1,1,0,0,0,53.4,19.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:19.7,rotation:4.7,x:154.5,y:109.1},7).to({regY:19.8,rotation:0,x:154.4,y:120.8},7).wait(1));

		// t10
		this.instance_9 = new lib.happy_715_1461771705828();
		this.instance_9.setTransform(202,132.9,1,1,0,0,0,60,23.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:59.9,rotation:15,x:201.9,y:133},7).to({regX:60,rotation:0,x:202,y:132.9},7).wait(1));

		// t11
		this.instance_10 = new lib.happy_666_1461771705829();
		this.instance_10.setTransform(50.5,107,1,1,0,0,0,13.5,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:94.6},7).to({y:107},7).wait(1));

		// t12
		this.instance_11 = new lib.happy_726_1461771705830();
		this.instance_11.setTransform(63.5,129.2,1,1,-34.7,0,0,31.5,22.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:0,y:116.8},7).to({rotation:-34.7,y:129.2},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,214,152.8);


	(lib.happy_865_1461771705881 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_186_1461771705885();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},7).to({regX:9,rotation:5.3,x:9,y:158},7).wait(1));

		// S1--
		this.instance_1 = new lib.happy_457_1461771705888();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},7).to({y:134},7).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_706_1461771705883();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},7).to({y:176},7).wait(1));

		// S2
		this.instance_3 = new lib.happy_406_1461771705893();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},7).to({rotation:23.5,x:80.8,y:122.6},7).wait(1));

		// t1-
		this.instance_4 = new lib.happy_923_1461771705898();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},3).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},4).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},3).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},4).wait(1));

		// t1--
		this.instance_5 = new lib.happy_117_1461771705900();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},7).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},7).wait(1));

		// t1---
		this.instance_6 = new lib.happy_821_1461771705903();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

		// t2--
		this.instance_7 = new lib.happy_531_1461771705908();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},3).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},4).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},3).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},4).wait(1));

		// t2-
		this.instance_8 = new lib.happy_050_1461771705905();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},7).to({rotation:48.3,x:97,y:188.6},7).wait(1));

		// t2---
		this.instance_9 = new lib.happy_005_1461771705911();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_531_1461771705876 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// t1-
		this.instance = new lib.happy_058_1461771705912();
		this.instance.setTransform(62,100,1,1,0,0,0,22,40);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-16,x:62.1},7).to({scaleX:1,scaleY:1,rotation:0,x:62},7).wait(1));

		// t1--
		this.instance_1 = new lib.happy_277_1461771705901();
		this.instance_1.setTransform(47.1,68.3,1,1,15,0,0,47.1,8.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47,regY:8.3,rotation:-17.4,x:37.1,y:75.8},7).to({regX:47.1,regY:8.2,rotation:15,x:47.1,y:68.3},7).wait(1));

		// 图层 2
		this.instance_2 = new lib.happy_853_1461771705887();
		this.instance_2.setTransform(124.4,119.4,1,1,-13.8,0,0,6.2,39.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-34,y:119.5},7).to({rotation:-13.8,y:119.4},7).wait(1));

		// s1---
		this.instance_3 = new lib.happy_628_1461771705891();
		this.instance_3.setTransform(122.8,116.9,1,1,0,-15,165,15.5,2.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

		// s1--
		this.instance_4 = new lib.happy_736_1461771705889();
		this.instance_4.setTransform(119.5,63.8,1,1,0.1,0,0,12.5,10);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:9.9,rotation:13.9,x:115.5,y:57.3},7).to({regY:10,rotation:0.1,x:119.5,y:63.8},7).wait(1));

		// cm
		this.instance_5 = new lib.happy_038_1461771705877();
		this.instance_5.setTransform(60.8,96.8,1,1,0,0,0,17.8,81.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.7,y:96.9},7).to({rotation:0,y:96.8},7).wait(1));

		// SSSS
		this.instance_6 = new lib.happy_143_1461771705896();
		this.instance_6.setTransform(25.8,19.5,1,1,0,0,0,20.8,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:33.2,y:4},7).to({x:25.8,y:19.5},7).wait(1));

		// s2
		this.instance_7 = new lib.happy_880_1461771705894();
		this.instance_7.setTransform(48,40.8,1,1,-9.3,0,0,20,24.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:19.9,rotation:3.2,x:47.3,y:27.4},7).to({regX:20,rotation:-9.3,x:48,y:40.8},7).wait(1));

		// SSSSSSS
		this.instance_8 = new lib.happy_522_1461771705875();
		this.instance_8.setTransform(64.2,47.5,1,1,-30,0,0,16.4,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:19.6,regY:24,rotation:1,x:60.3,y:44.9},7).to({regX:16.4,regY:20.5,rotation:-30,x:64.2,y:47.5},7).wait(1));

		// t2-
		this.instance_9 = new lib.happy_981_1461771705907();
		this.instance_9.setTransform(50,81.3,1,1,0,0,0,19,41.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:47.5,y:78.8},7).to({x:50,y:81.3},7).wait(1));

		// t2--
		this.instance_10 = new lib.happy_832_1461771705909();
		this.instance_10.setTransform(41.5,49,1,1,-22.2,0,0,29.5,49);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:39,y:46.5},7).to({rotation:-22.2,x:41.5,y:49},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-18.4,-1.1,182.8,151.3);


	(lib.happy_408_1461771705879 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s1
		this.instance = new lib.happy_318_1461771705884();
		this.instance.setTransform(11.5,87,1,1,4,0,0,11.5,87);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6,y:82},7).to({rotation:4,y:87},7).wait(1));

		// t1
		this.instance_1 = new lib.happy_712_1461771705897();
		this.instance_1.setTransform(40.6,134.5,1,1,-3.2,0,0,13.6,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.5,rotation:5,x:40.5,y:129.5},7).to({regX:13.6,rotation:-3.2,x:40.6,y:134.5},7).wait(1));

		// cmg
		this.instance_2 = new lib.happy_807_1461771705880();
		this.instance_2.setTransform(53.5,98.5,1,1,0,0,0,49.5,57.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:88.5},7).to({y:98.5},7).wait(1));

		// s2
		this.instance_3 = new lib.happy_608_1461771705892();
		this.instance_3.setTransform(73.5,86,1,1,-4.2,0,0,13.5,85);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:8.2,y:81.1},7).to({rotation:-4.2,y:86},7).wait(1));

		// t2
		this.instance_4 = new lib.happy_609_1461771705904();
		this.instance_4.setTransform(64.6,132.5,1,1,3.2,0,0,14.6,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-5.4,y:127.5},7).to({rotation:3.2,y:132.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,103.5,209.3);


	(lib.happy_870_1461771705844 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_847_1461771705858("synched",0);
		this.instance.setTransform(-54.2,35.2,0.9,0.9,0,0,0,18.6,115.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.4,x:-54.3,startPosition:7},7).to({rotation:0,x:-54.2,startPosition:14},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-71.2,-73.2,147.3,145.7);


	(lib.happy_671_1461771705842 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_580_1461771705854("synched",0);
		this.instance.setTransform(37.8,54.5,0.9,0.9,0,0,0,115.5,133.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:133.3,scaleY:0.96,y:54.3,startPosition:7},7).to({regY:133.5,scaleY:0.9,y:54.5,startPosition:14},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-66.1,-65.7,132.3,131.4);


	(lib.happy_677_1461771705834 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// lanmei1
		this.instance = new lib.happy_865_1461771705881("synched",6);
		this.instance.setTransform(-15.4,70.4,0.4,0.4,-30,0,0,57,109.1);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({regX:57.1,regY:108.9,x:-97.1,y:-60.8},15,cjs.Ease.get(1)).wait(1));

		// caomei2
		this.instance_1 = new lib.happy_531_1461771705876("synched",14);
		this.instance_1.setTransform(31.3,80.8,0.4,0.4,0,0,0,74.9,57.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regY:57.6,x:165.3,y:-58.5},15,cjs.Ease.get(1)).to({_off:true},1).wait(10));

		// cm1
		this.instance_2 = new lib.happy_408_1461771705879("synched",14);
		this.instance_2.setTransform(-4.6,72,0.39,0.39,-14,0,0,52,104.8);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({regX:51.9,regY:105,x:-45.6,y:-80.6},15,cjs.Ease.get(1)).to({_off:true},1).wait(12));

		// lm1
		this.instance_3 = new lib.happy_012_1461771705814("synched",9);
		this.instance_3.setTransform(41.1,78.9,0.33,0.33,15,0,0,107,68.8);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:82.5,y:-174.7},15,cjs.Ease.get(1)).to({_off:true},1).wait(3));

		// xj3
		this.instance_4 = new lib.happy_870_1461771705844("synched",14);
		this.instance_4.setTransform(-12.4,93.2,0.45,0.45,-89.8);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({x:-146.5,y:18.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(8));

		// 图层 24
		this.instance_5 = new lib.happy_330_1461771705813();
		this.instance_5.setTransform(27.4,111.2,1,1,0,0,0,23.5,24.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({regY:24.6,rotation:30,x:162,y:32.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(14));

		// xj2
		this.instance_6 = new lib.happy_671_1461771705842("synched",11);
		this.instance_6.setTransform(-10.7,74.9,0.385,0.385,-30);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,rotation:-29.9,x:-131.8,y:-42.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(22));

		// lanmei1
		this.instance_7 = new lib.happy_865_1461771705881("synched",6);
		this.instance_7.setTransform(24.6,70.4,0.4,0.4,30,0,0,57,109);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({x:88.9,y:-20.8},15,cjs.Ease.get(1)).to({_off:true},1).wait(19));

		// caomei2
		this.instance_8 = new lib.happy_531_1461771705876("synched",14);
		this.instance_8.setTransform(-1.7,64.8,0.4,0.4,-30,0,0,74.9,57.6);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({regX:74.8,rotation:-15,x:-19.8,y:-84.5},15,cjs.Ease.get(1)).to({_off:true},1).wait(26));

		// cm1
		this.instance_9 = new lib.happy_408_1461771705879("synched",14);
		this.instance_9.setTransform(-26.6,98.1,0.39,0.39,-59,0,0,52,104.9);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({x:-145.6,y:34.4},15,cjs.Ease.get(1)).to({_off:true},1).wait(28));

		// lm1
		this.instance_10 = new lib.happy_012_1461771705814("synched",9);
		this.instance_10.setTransform(-11.1,78.8,0.33,0.33,-15,0,0,107.1,68.7);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({x:-83.7,y:-131.7},15,cjs.Ease.get(1)).to({_off:true},1).wait(24));

		// xj3
		this.instance_11 = new lib.happy_870_1461771705844("synched",14);
		this.instance_11.setTransform(24.6,72.2,0.45,0.45,-14.8);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({x:83.3,y:-82.5},15,cjs.Ease.get(1)).to({_off:true},1).wait(16));

		// 图层 24
		this.instance_12 = new lib.happy_330_1461771705813();
		this.instance_12.setTransform(27.4,111.2,1,1,0,0,0,23.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:24.6,rotation:30,x:162,y:32.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.5,77.8,55.8,66.9);


	(lib.happy_364_1461771705831 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop()
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

		// 图层 44
		this.instance = new lib.happy_677_1461771705834();
		this.instance.setTransform(-10.5,-210.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4,y:-42.4},99).wait(1));

		// xj 4
		this.instance_1 = new lib.happy_673_1461771705811("synched",0,false);
		this.instance_1.setTransform(0.5,56);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-320,-520,640,1040);


	// stage content:
	(lib.loading = function() {
		this.initialize();

		// nm
		this.instance = new lib.happy_144_1461771705860();
		this.instance.setTransform(354.3,725.1,1,1,0,0,0,13,16.5);

		this.num_1 = new lib.happy_360_1461771705833();
		this.num_1.setTransform(307.3,725.1);

		this.num_0 = new lib.happy_360_1461771705833();
		this.num_0.setTransform(330.6,725.1);

		this.loadMC = new lib.happy_364_1461771705831();
		this.loadMC.setTransform(320,520);

		this.addChild(this.loadMC,this.num_0,this.num_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(572,857.5,147,404.2);

	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(createjs) {(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: []
	};



	// symbols:



	(lib.Bitmap = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib._0 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib._1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib._1_1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib._2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib._22 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib._3 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib._4 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib._5 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib._6 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib._7 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib._8 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib._9 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.cmg = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.lanmei = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.lm2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.lm3 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.lmt = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.lx = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.p = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.p1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.p2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.p3 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.rou = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.s1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.s1_1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.s144 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.S16666 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.s1_2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.s10 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.s11 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.s2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.S266 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.s2666 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.s4 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.s5 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.s6 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.s7 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.s8 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.s9 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.SSSS = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.sui = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.t1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.t144 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();



	(lib.t1_1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();



	(lib.t10 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();



	(lib.t11 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();



	(lib.t12 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();



	(lib.t2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();



	(lib.t2_1 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();



	(lib.t266 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();



	(lib.t2_2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();



	(lib.t277 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();



	(lib.t2_3 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();



	(lib.t3 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();



	(lib.t4 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();



	(lib.t7 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();



	(lib.t8 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();



	(lib.t9 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();



	(lib.xj = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(59);
	}).prototype = p = new cjs.Sprite();



	(lib.xj2 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(60);
	}).prototype = p = new cjs.Sprite();



	(lib.xj3 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(61);
	}).prototype = p = new cjs.Sprite();



	(lib.xj4 = function() {
		this.spriteSheet = ss["loadingloading_atlas_"];
		this.gotoAndStop(62);
	}).prototype = p = new cjs.Sprite();



	(lib.tttt = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t3();
		this.instance.setTransform(38.9,46.7,1,1,159.2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-4.9,-4.8,43.8,60.7);


	(lib.t2_4 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t2_3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.t215 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t277();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42,58);


	(lib.t2_5 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t2_2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.t214 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t266();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,38,62);


	(lib.t2_6 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t2_1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.t2_7 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,82);


	(lib.t1_2 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t1_1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.t113 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t4();
		this.instance.setTransform(1.2,50.8,1,1,0,159,-21);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-9.2,0,72,50.8);


	(lib.t112 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t144();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.t1100 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.lmt();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.t1_3 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,84);


	(lib.SSSS_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.SSSS();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,13);


	(lib.s2777 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s2666();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,59);


	(lib.S266_1 = function() {
		this.initialize();

		// S2
		this.instance = new lib.S266();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.s2_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,94);


	(lib.s1_3 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s1_2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,16);


	(lib.s155 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s144();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,47);


	(lib.S144 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.S16666();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.s1_4 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s1_1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,26,44);


	(lib.S122 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._22();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.s1_5 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,95);


	(lib.LMM = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.lanmei();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.cmg_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.cmg();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,99,115);


	(lib.cm = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.cmg();
		this.instance.setTransform(121.4,53.9,1,1,0,45,-135);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.9,-16.1,151.3,151.3);


	(lib._1_2 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,31);


	(lib._9_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._9();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,34);


	(lib._8_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._8();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,34);


	(lib._7_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._7();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,34);


	(lib._6_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._6();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,34);


	(lib._5_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._5();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,34);


	(lib._4_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,33);


	(lib._3_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,34);


	(lib._2_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,34);


	(lib._1_3 = function() {
		this.initialize();

		// 图层 1
		this.instance_1 = new lib._1_1();

		this.addChild(this.instance_1);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,34);


	(lib._0_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib._0();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,32);


	(lib.s7_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s7();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,60);


	(lib.s6_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s6();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,21);


	(lib.s5_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s5();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.s4_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.rou_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.rou();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,106);


	(lib.p3_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.p3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,64,53);


	(lib.p2_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.p2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,67,72);


	(lib.p1_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.p1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,59,40);


	(lib.p_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.p();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,71);


	(lib.xj4_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.xj4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,17,97);


	(lib.xj3_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.xj3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,160);


	(lib.xj2_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.xj2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,201);


	(lib.xj_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.xj();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,21,242);


	(lib.sui_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.sui();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,147,185);


	(lib.t12_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t12();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,29);


	(lib.t11_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t11();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,32,32);


	(lib.t10_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t10();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,68,28);


	(lib.t9_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t9();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,63,31);


	(lib.t8_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t8();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,69,23);


	(lib.t7_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.t7();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,34);


	(lib.s11_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s11();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,23);


	(lib.s10_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s10();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.s9_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s9();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,45,19);


	(lib.s8_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.s8();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,25);


	(lib.lm3_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.lm3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,113,112);


	(lib.lm2_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.lm2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,107,106);


	(lib.jjj = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.lx();
		this.instance.setTransform(10.6,-8.9,0.364,0.364,15);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-4.4,-8.9,55.8,66.9);


	(lib.lanmei1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.S122();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},7).to({regX:9,rotation:5.3,x:9,y:158},7).wait(1));

		// S1--
		this.instance_1 = new lib.S144();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},7).to({y:134},7).wait(1));

		// LANMEI
		this.instance_2 = new lib.LMM();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},7).to({y:176},7).wait(1));

		// S2
		this.instance_3 = new lib.S266_1();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},7).to({rotation:23.5,x:80.8,y:122.6},7).wait(1));

		// t1-
		this.instance_4 = new lib.t1100();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},3).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},4).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},3).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},4).wait(1));

		// t1--
		this.instance_5 = new lib.t112();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},7).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},7).wait(1));

		// t1---
		this.instance_6 = new lib.t1_2();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

		// t2--
		this.instance_7 = new lib.t2_5();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},3).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},4).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},3).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},4).wait(1));

		// t2-
		this.instance_8 = new lib.t2_6();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},7).to({rotation:48.3,x:97,y:188.6},7).wait(1));

		// t2---
		this.instance_9 = new lib.t2_4();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.cm1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s1
		this.instance = new lib.s1_5();
		this.instance.setTransform(11.5,87,1,1,4,0,0,11.5,87);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6,y:82},7).to({rotation:4,y:87},7).wait(1));

		// t1
		this.instance_1 = new lib.t1_3();
		this.instance_1.setTransform(40.6,134.5,1,1,-3.2,0,0,13.6,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.5,rotation:5,x:40.5,y:129.5},7).to({regX:13.6,rotation:-3.2,x:40.6,y:134.5},7).wait(1));

		// cmg
		this.instance_2 = new lib.cmg_1();
		this.instance_2.setTransform(53.5,98.5,1,1,0,0,0,49.5,57.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:88.5},7).to({y:98.5},7).wait(1));

		// s2
		this.instance_3 = new lib.s2_1();
		this.instance_3.setTransform(73.5,86,1,1,-4.2,0,0,13.5,85);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:8.2,y:81.1},7).to({rotation:-4.2,y:86},7).wait(1));

		// t2
		this.instance_4 = new lib.t2_7();
		this.instance_4.setTransform(64.6,132.5,1,1,3.2,0,0,14.6,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-5.4,y:127.5},7).to({rotation:3.2,y:132.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,103.5,209.3);


	(lib.caomei2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// t1-
		this.instance = new lib.tttt();
		this.instance.setTransform(62,100,1,1,0,0,0,22,40);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-16,x:62.1},7).to({scaleX:1,scaleY:1,rotation:0,x:62},7).wait(1));

		// t1--
		this.instance_1 = new lib.t113();
		this.instance_1.setTransform(47.1,68.3,1,1,15,0,0,47.1,8.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47,regY:8.3,rotation:-17.4,x:37.1,y:75.8},7).to({regX:47.1,regY:8.2,rotation:15,x:47.1,y:68.3},7).wait(1));

		// 图层 2
		this.instance_2 = new lib.s1_4();
		this.instance_2.setTransform(124.4,119.4,1,1,-13.8,0,0,6.2,39.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-34,y:119.5},7).to({rotation:-13.8,y:119.4},7).wait(1));

		// s1---
		this.instance_3 = new lib.s1_3();
		this.instance_3.setTransform(122.8,116.9,1,1,0,-15,165,15.5,2.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

		// s1--
		this.instance_4 = new lib.s155();
		this.instance_4.setTransform(119.5,63.8,1,1,0.1,0,0,12.5,10);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:9.9,rotation:13.9,x:115.5,y:57.3},7).to({regY:10,rotation:0.1,x:119.5,y:63.8},7).wait(1));

		// cm
		this.instance_5 = new lib.cm();
		this.instance_5.setTransform(60.8,96.8,1,1,0,0,0,17.8,81.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.7,y:96.9},7).to({rotation:0,y:96.8},7).wait(1));

		// SSSS
		this.instance_6 = new lib.SSSS_1();
		this.instance_6.setTransform(25.8,19.5,1,1,0,0,0,20.8,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:33.2,y:4},7).to({x:25.8,y:19.5},7).wait(1));

		// s2
		this.instance_7 = new lib.s2777();
		this.instance_7.setTransform(48,40.8,1,1,-9.3,0,0,20,24.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:19.9,rotation:3.2,x:47.3,y:27.4},7).to({regX:20,rotation:-9.3,x:48,y:40.8},7).wait(1));

		// SSSSSSS
		this.instance_8 = new lib._1_2();
		this.instance_8.setTransform(64.2,47.5,1,1,-30,0,0,16.4,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:19.6,regY:24,rotation:1,x:60.3,y:44.9},7).to({regX:16.4,regY:20.5,rotation:-30,x:64.2,y:47.5},7).wait(1));

		// t2-
		this.instance_9 = new lib.t214();
		this.instance_9.setTransform(50,81.3,1,1,0,0,0,19,41.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:47.5,y:78.8},7).to({x:50,y:81.3},7).wait(1));

		// t2--
		this.instance_10 = new lib.t215();
		this.instance_10.setTransform(41.5,49,1,1,-22.2,0,0,29.5,49);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:39,y:46.5},7).to({rotation:-22.2,x:41.5,y:49},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-18.4,-1.1,182.8,151.3);


	(lib.xj2_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// p2
		this.instance = new lib.p2_1();
		this.instance.setTransform(86.8,82,1,1,0,24.9,-155.1,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleY:1,skewX:12,skewY:-164.2,x:86.9,y:80.6},7).to({regY:11.2,scaleY:1,skewX:24.9,skewY:-155.1,x:86.8,y:82},7).wait(1));

		// p1
		this.instance_1 = new lib.p1_1();
		this.instance_1.setTransform(109.4,80.2,1,1,0,24.9,-155.1,48.7,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.8,skewX:14.7,skewY:-165.3,y:80.3},7).to({regX:48.7,skewX:24.9,skewY:-155.1,y:80.2},7).wait(1));

		// p
		this.instance_2 = new lib.p_1();
		this.instance_2.setTransform(52.8,104,1,1,0,24.9,-155.1,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

		// p3
		this.instance_3 = new lib.p3_1();
		this.instance_3.setTransform(60.3,88.5,1,1,0,19.2,-160.8,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.8,skewX:35.2,skewY:-144.8},7).to({regX:6.7,skewX:16.2,skewY:-163.8},7).wait(1));

		// s7
		this.instance_4 = new lib.s7_1();
		this.instance_4.setTransform(110.2,69.8,1,1,15,0,0,12.2,49.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,regY:49.7,rotation:0,x:110.1,y:69.7},7).to({regX:12.2,regY:49.8,rotation:15,x:110.2,y:69.8},7).wait(1));

		// rou
		this.instance_5 = new lib.rou_1();
		this.instance_5.setTransform(88,57,1,1,0,24.9,-155.1,29.9,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

		// s5
		this.instance_6 = new lib.s5_1();
		this.instance_6.setTransform(83.3,66.3,1,1,0,18.1,-161.9,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:56.5,skewX:2.9,skewY:-177.1,x:83.4,y:66.4},7).to({regX:10.2,regY:56.4,skewX:18.1,skewY:-161.9,x:83.3,y:66.3},7).wait(1));

		// s6
		this.instance_7 = new lib.s6_1();
		this.instance_7.setTransform(147.5,34.2,1,1,20,0,0,48,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:137,y:30.5},7).to({rotation:20,x:147.5,y:34.2},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-4.7,163.7,161.9);


	(lib.xj1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s4
		this.instance = new lib.s4_1();
		this.instance.setTransform(62.3,63.9,1,1,0,0,0,59.3,59.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:64},7).to({rotation:0,y:63.9},7).wait(1));

		// p2
		this.instance_1 = new lib.p2_1();
		this.instance_1.setTransform(68.5,76.2,1,1,0,0,0,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47.6,regY:11.3,scaleY:0.83,skewX:16.1,skewY:5.2,x:68.6,y:75.6},7).to({regX:47.5,regY:11.2,scaleY:1,skewX:0,skewY:0,x:68.5,y:76.2},7).wait(1));

		// p1
		this.instance_2 = new lib.p1_1();
		this.instance_2.setTransform(48.6,65.1,1,1,0,0,0,48.6,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15},7).to({rotation:0},7).wait(1));

		// p
		this.instance_3 = new lib.p_1();
		this.instance_3.setTransform(90,110.5,1,1,0,0,0,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

		// p3
		this.instance_4 = new lib.p3_1();
		this.instance_4.setTransform(89.7,93.2,1,1,0,0,0,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15},7).to({rotation:0},7).wait(1));

		// rou
		this.instance_5 = new lib.rou_1();
		this.instance_5.setTransform(78,53,1,1,0,0,0,30,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

		// s5
		this.instance_6 = new lib.s5_1();
		this.instance_6.setTransform(78.2,63.4,1,1,0,0,0,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-9.9},7).to({rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,147,146);


	(lib.xj3_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.xj2_2("synched",0);
		this.instance.setTransform(-54.2,35.2,0.9,0.9,0,0,0,18.6,115.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.4,x:-54.3,startPosition:7},7).to({rotation:0,x:-54.2,startPosition:14},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-71.2,-73.2,147.3,145.7);


	(lib.xj2_3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance_8 = new lib.xj1("synched",0);
		this.instance_8.setTransform(37.8,54.5,0.9,0.9,0,0,0,115.5,133.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:133.3,scaleY:0.96,y:54.3,startPosition:7},7).to({regY:133.5,scaleY:0.9,y:54.5,startPosition:14},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-66.1,-65.7,132.3,131.4);


	(lib.nm1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			/* stop()*/
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

		// 9
		this.instance = new lib._9_1();
		this.instance.setTransform(0,0,1,1,0,0,0,11.5,17);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1));

		// 8
		this.instance_1 = new lib._8_1();
		this.instance_1.setTransform(0,0,1,1,0,0,0,11,17);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},1).wait(1));

		// 7
		this.instance_2 = new lib._7_1();
		this.instance_2.setTransform(0,0,1,1,0,0,0,11,17);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},1).wait(2));

		// 6
		this.instance_3 = new lib._6_1();
		this.instance_3.setTransform(0,0,1,1,0,0,0,10.5,17);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(3));

		// 5
		this.instance_4 = new lib._5_1();
		this.instance_4.setTransform(0,0,1,1,0,0,0,11,17);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},1).wait(4));

		// 4
		this.instance_5 = new lib._4_1();
		this.instance_5.setTransform(0,0,1,1,0,0,0,12,16.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},1).wait(5));

		// 3
		this.instance_6 = new lib._3_1();
		this.instance_6.setTransform(0,0,1,1,0,0,0,10.5,17);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},1).wait(6));

		// 2
		this.instance_7 = new lib._2_1();
		this.instance_7.setTransform(0,0,1,1,0,0,0,10,17);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

		// 1
		this.instance_8 = new lib._1_3();
		this.instance_8.setTransform(0,0,1,1,0,0,0,6.5,17);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

		// 0
		this.instance_9 = new lib._0_1();
		this.instance_9.setTransform(0,0,1,1,0,0,0,11.5,16);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11.5,-16,23,32);


	(lib.lm1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s8
		this.instance = new lib.s8_1();
		this.instance.setTransform(47.9,70.7,1,1,0,0,0,28.9,18.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.8,rotation:14.2,x:51,y:66},7).to({regY:18.7,rotation:0,x:47.9,y:70.7},7).wait(1));

		// s9
		this.instance_1 = new lib.s9_1();
		this.instance_1.setTransform(80,79.1,1,1,0,0,0,41,15.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.5,y:77.2},7).to({rotation:0,y:79.1},7).wait(1));

		// s10
		this.instance_2 = new lib.s10_1();
		this.instance_2.setTransform(150.1,66.2,1,1,0,0,0,43.1,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:45,x:149.1,y:77.3},7).to({rotation:0,x:150.1,y:66.2},7).wait(1));

		// s11
		this.instance_3 = new lib.s11_1();
		this.instance_3.setTransform(190.5,55.5,1,1,0,0,0,51.5,3.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-11.2},7).to({rotation:0},7).wait(1));

		// t7
		this.instance_4 = new lib.t7_1();
		this.instance_4.setTransform(155.1,100,1,1,0,0,0,49.1,9);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-10.5,x:151,y:82.5},7).to({rotation:0,x:155.1,y:100},7).wait(1));

		// t8
		this.instance_5 = new lib.t8_1();
		this.instance_5.setTransform(205.5,90.9,1,1,0,0,0,60.5,2.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:60.4,regY:2.8,rotation:21.7,x:205.4},7).to({regX:60.5,regY:2.9,rotation:0,x:205.5},7).wait(1));

		// lm2
		this.instance_6 = new lib.lm2_1();
		this.instance_6.setTransform(126.1,122.2,1,1,0,0,0,67.1,97.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:67,rotation:7,x:124.6,y:110.1},7).to({regX:67.1,rotation:0,x:126.1,y:122.2},7).wait(1));

		// lm3
		this.instance_7 = new lib.lm3_1();
		this.instance_7.setTransform(56.5,97.4,1,1,0,0,0,56.5,97.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:56.6,regY:97.5,rotation:5,x:61.9,y:87.1},7).to({regX:56.5,regY:97.4,rotation:0,x:56.5,y:97.4},7).wait(1));

		// t9
		this.instance_8 = new lib.t9_1();
		this.instance_8.setTransform(154.4,120.8,1,1,0,0,0,53.4,19.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:19.7,rotation:4.7,x:154.5,y:109.1},7).to({regY:19.8,rotation:0,x:154.4,y:120.8},7).wait(1));

		// t10
		this.instance_9 = new lib.t10_1();
		this.instance_9.setTransform(202,132.9,1,1,0,0,0,60,23.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:59.9,rotation:15,x:201.9,y:133},7).to({regX:60,rotation:0,x:202,y:132.9},7).wait(1));

		// t11
		this.instance_10 = new lib.t11_1();
		this.instance_10.setTransform(50.5,107,1,1,0,0,0,13.5,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:94.6},7).to({y:107},7).wait(1));

		// t12
		this.instance_11 = new lib.t12_1();
		this.instance_11.setTransform(63.5,129.2,1,1,-34.7,0,0,31.5,22.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:0,y:116.8},7).to({rotation:-34.7,y:129.2},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,214,152.8);


	(lib.bzi = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			/* stop()*/
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

		// 图层 6
		this.instance = new lib.sui_1();
		this.instance.setTransform(5,-146,1,1,0,0,0,73.5,92.5);

		this.instance_1 = new lib.sui_1();
		this.instance_1.setTransform(5,-71.5,1,1,0,0,0,73.5,92.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,y:-146,scaleX:1,scaleY:1,x:5}}]}).to({state:[{t:this.instance_1,p:{y:-71.5,scaleX:1,scaleY:1,x:5}},{t:this.instance,p:{rotation:60,y:-71.5,scaleX:1,scaleY:1,x:5}}]},24).to({state:[{t:this.instance_1,p:{y:-51.6,scaleX:1,scaleY:1,x:5}},{t:this.instance,p:{rotation:60,y:11.1,scaleX:1,scaleY:1,x:5}}]},25).to({state:[{t:this.instance_1,p:{y:26.3,scaleX:0.678,scaleY:0.678,x:5.4}},{t:this.instance,p:{rotation:60,y:28.5,scaleX:1.091,scaleY:1.091,x:1}}]},25).wait(26));

		// xj 4
		this.instance_2 = new lib.xj4_1();
		this.instance_2.setTransform(1,72.5,1,1,0,0,0,8.5,48.5);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).wait(26));

		// xj 3
		this.instance_3 = new lib.xj3_1();
		this.instance_3.setTransform(0,41,1,1,0,0,0,10.5,80);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({_off:true},25).wait(26));

		// xj 2
		this.instance_4 = new lib.xj2_1();
		this.instance_4.setTransform(0,20.5,1,1,0,0,0,10.5,100.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({_off:true},25).wait(51));

		// xj
		this.instance_5 = new lib.xj_1();
		this.instance_5.setTransform(0,0,1,1,0,0,0,10.5,121);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},24).wait(76));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-68.5,-238.5,147,359.6);


	(lib.sg = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// lanmei1
		this.instance = new lib.lanmei1("synched",6);
		this.instance.setTransform(-15.4,70.4,0.4,0.4,-30,0,0,57,109.1);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({regX:57.1,regY:108.9,x:-97.1,y:-60.8},15,cjs.Ease.get(1)).wait(1));

		// caomei2
		this.instance_1 = new lib.caomei2("synched",14);
		this.instance_1.setTransform(31.3,80.8,0.4,0.4,0,0,0,74.9,57.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regY:57.6,x:165.3,y:-58.5},15,cjs.Ease.get(1)).to({_off:true},1).wait(10));

		// cm1
		this.instance_2 = new lib.cm1("synched",14);
		this.instance_2.setTransform(-4.6,72,0.39,0.39,-14,0,0,52,104.8);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({regX:51.9,regY:105,x:-45.6,y:-80.6},15,cjs.Ease.get(1)).to({_off:true},1).wait(12));

		// lm1
		this.instance_3 = new lib.lm1("synched",9);
		this.instance_3.setTransform(41.1,78.9,0.33,0.33,15,0,0,107,68.8);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:82.5,y:-174.7},15,cjs.Ease.get(1)).to({_off:true},1).wait(3));

		// xj3
		this.instance_4 = new lib.xj3_2("synched",14);
		this.instance_4.setTransform(-12.4,93.2,0.45,0.45,-89.8);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({x:-146.5,y:18.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(8));

		// 图层 24
		this.instance_5 = new lib.jjj();
		this.instance_5.setTransform(27.4,111.2,1,1,0,0,0,23.5,24.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({regY:24.6,rotation:30,x:162,y:32.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(14));

		// xj2
		this.instance_6 = new lib.xj2_3("synched",11);
		this.instance_6.setTransform(-10.7,74.9,0.385,0.385,-30);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,rotation:-29.9,x:-131.8,y:-42.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(22));

		// lanmei1
		this.instance_7 = new lib.lanmei1("synched",6);
		this.instance_7.setTransform(24.6,70.4,0.4,0.4,30,0,0,57,109);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({x:88.9,y:-20.8},15,cjs.Ease.get(1)).to({_off:true},1).wait(19));

		// caomei2
		this.instance_8 = new lib.caomei2("synched",14);
		this.instance_8.setTransform(-1.7,64.8,0.4,0.4,-30,0,0,74.9,57.6);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({regX:74.8,rotation:-15,x:-19.8,y:-84.5},15,cjs.Ease.get(1)).to({_off:true},1).wait(26));

		// cm1
		this.instance_9 = new lib.cm1("synched",14);
		this.instance_9.setTransform(-26.6,98.1,0.39,0.39,-59,0,0,52,104.9);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({x:-145.6,y:34.4},15,cjs.Ease.get(1)).to({_off:true},1).wait(28));

		// lm1
		this.instance_10 = new lib.lm1("synched",9);
		this.instance_10.setTransform(-11.1,78.8,0.33,0.33,-15,0,0,107.1,68.7);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({x:-83.7,y:-131.7},15,cjs.Ease.get(1)).to({_off:true},1).wait(24));

		// xj3
		this.instance_11 = new lib.xj3_2("synched",14);
		this.instance_11.setTransform(24.6,72.2,0.45,0.45,-14.8);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({x:83.3,y:-82.5},15,cjs.Ease.get(1)).to({_off:true},1).wait(16));

		// 图层 24
		this.instance_12 = new lib.jjj();
		this.instance_12.setTransform(27.4,111.2,1,1,0,0,0,23.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:24.6,rotation:30,x:162,y:32.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.5,77.8,55.8,66.9);


	(lib.loading_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			/* stop()*/
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

		// 图层 44
		this.instance = new lib.sg();
		this.instance.setTransform(-10.5,-210.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4,y:-42.4},99).wait(1));

		// xj 4
		this.instance_1 = new lib.bzi("synched",0,false);
		this.instance_1.setTransform(0.5,56);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-320,-520,640,1040);


	// stage content:
	(lib.loading = function() {
		this.initialize();

		// nm
		this.num_1 = new lib.nm1();
		this.num_1.setTransform(307.3,725.1);

		this.num_0 = new lib.nm1();
		this.num_0.setTransform(330.6,725.1);

		this.loadMC = new lib.loading_1();
		this.loadMC.setTransform(320,520);

		this.addChild(this.loadMC,this.num_0,this.num_1);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(572,857.5,147,404.2);

	})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
	var lib, images, createjs, ss;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 24,
		color: "#666666",
		manifest: [
			{src:"images/main/happy_487_1462246882863.png", id:"happy_487_1462246882863"}
		]
	};



	// symbols:



	(lib.happy_003_1462246882863 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_008_1462246882869 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_013_1462246882908 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_026_1462246882851 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_031_1462246882820 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_032_1462246883025 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_034_1462246883085 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_038_1462246882782 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_040_1462246882812 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_046_1462246883132 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_048_1462246882963 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_049_1462246882731 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_057_1462246882726 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_073_1462246882757 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_090_1462246882916 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_094_1462246882886 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_101_1462246882830 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_119_1462246882799 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_121_1462246882785 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_136_1462246882945 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_140_1462246882894 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_158_1462246882816 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_160_1462246882801 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_160_1462246882804 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_176_1462246882857 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_181_1462246882880 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_191_1462246882786 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_236_1462246882754 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_240_1462246882995 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_259_1462246882790 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_265_1462246882987 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_269_1462246882749 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_273_1462246882797 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_280_1462246882846 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_292_1462246883054 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_296_1462246882792 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_297_1462246882795 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_301_1462246882743 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_312_1462246882834 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_318_1462246882754 = function() {
		this.spriteSheet = ss["main_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_326_1462246882904 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_333_1462246882784 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_334_1462246882824 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_336_1462246883004 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_344_1462246882731 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_344_1462246882876 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_345_1462246882769 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_357_1462246882759 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_358_1462246882738 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_393_1462246882797 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_399_1462246882790 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_408_1462246882826 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_420_1462246883017 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_421_1462246882755 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_431_1462246882761 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_436_1462246883152 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_442_1462246883124 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_445_1462246882843 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_461_1462246882830 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_462_1462246882774 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_487_1462246882863 = function() {
		this.initialize(img.happy_487_1462246882863);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


	(lib.happy_497_1462246882879 = function() {
		this.spriteSheet = ss["main_atlas_4"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_500_1462246883063 = function() {
		this.spriteSheet = ss["main_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_509_1462246883069 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(59);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_521_1462246882765 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(60);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_522_1462246882928 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(61);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_522_1462246883077 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(62);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_529_1462246882875 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(63);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_548_1462246882777 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(64);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_551_1462246882825 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(65);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_559_1462246882766 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(66);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_563_1462246882838 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(67);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_572_1462246882862 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(68);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_587_1462246882894 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(69);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_592_1462246882763 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(70);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_599_1462246882737 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(71);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_602_1462246882841 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(72);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_605_1462246882747 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(73);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_616_1462246882960 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(74);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_619_1462246883119 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(75);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_637_1462246883010 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(76);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_647_1462246882856 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(77);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_652_1462246882775 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(78);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_673_1462246882819 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(79);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_675_1462246882781 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(80);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_678_1462246882958 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(81);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_688_1462246883015 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(82);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_695_1462246882885 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(83);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_700_1462246882778 = function() {
		this.spriteSheet = ss["main_atlas_4"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_718_1462246883148 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(84);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_751_1462246883082 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(85);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_759_1462246883116 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(86);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_767_1462246883099 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(87);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_770_1462246883074 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(88);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_775_1462246882741 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(89);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_791_1462246883037 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(90);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_794_1462246882944 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(91);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_806_1462246882773 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(92);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_811_1462246882842 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(93);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_824_1462246882739 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(94);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_833_1462246882836 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(95);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_833_1462246883013 = function() {
		this.spriteSheet = ss["main_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_845_1462246882732 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(96);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_861_1462246882788 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(97);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_861_1462246883053 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(98);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_865_1462246883013 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(99);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_879_1462246882962 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(100);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_894_1462246882893 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(101);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_902_1462246882745 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(102);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_913_1462246882892 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(103);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_941_1462246882839 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(104);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_941_1462246882959 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(105);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_943_1462246882727 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(106);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_979_1462246882762 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(107);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_995_1462246882750 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(108);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_998_1462246882767 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(109);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_998_1462246882927 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(110);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_999_1462246882844 = function() {
		this.spriteSheet = ss["main_atlas_5"];
		this.gotoAndStop(111);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_865_1462246882684 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolH0IAAvnIRLAAIAAPng");

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-55,-50,110.1,100);


	(lib.happy_957_1462246882678 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_637_1462246883010();
		this.instance.setTransform(-26.4,-38.4,0.935,0.935,9.2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-37.2,-38.4,74.5,76.8);


	(lib.happy_351_1462246882697 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_292_1462246883054();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_801_1462246882700 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_678_1462246882958();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_450_1462246882700 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_031_1462246882820();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_974_1462246882699 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_572_1462246882862();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,133);


	(lib.happy_868_1462246882716 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_509_1462246883069();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14,15);


	(lib.happy_794_1462246882716 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_013_1462246882908();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,34,42);


	(lib.happy_749_1462246882714 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_240_1462246882995();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,57);


	(lib.happy_643_1462246882714 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_913_1462246882892();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,50);


	(lib.happy_541_1462246882717 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_902_1462246882745();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,95,29);


	(lib.happy_443_1462246882715 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_032_1462246883025();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,30);


	(lib.happy_344_1462246882715 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_176_1462246882857();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,46,25);


	(lib.happy_337_1462246882717 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_160_1462246882804();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,48);


	(lib.happy_297_1462246882716 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_038_1462246882782();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,31);


	(lib.happy_266_1462246882714 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_345_1462246882769();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86,272);


	(lib.happy_109_1462246882715 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_999_1462246882844();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,11);


	(lib.happy_902_1462246882711 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_049_1462246882731();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42,52);


	(lib.happy_876_1462246882713 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_034_1462246883085();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,117,30);


	(lib.happy_652_1462246882712 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_559_1462246882766();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,10);


	(lib.happy_488_1462246882712 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_879_1462246882962();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28,41);


	(lib.happy_458_1462246882712 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_941_1462246882839();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,40,43);


	(lib.happy_199_1462246882711 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_824_1462246882739();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,40);


	(lib.happy_085_1462246882711 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_673_1462246882819();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28,12);


	(lib.happy_053_1462246882713 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_998_1462246882767();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,117,115);


	(lib.happy_771_1462246882720 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_236_1462246882754();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,41);


	(lib.happy_737_1462246882720 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_865_1462246883013();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,12,25);


	(lib.happy_722_1462246882721 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_442_1462246883124();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,19,44);


	(lib.happy_670_1462246882719 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_941_1462246882959();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,52,46);


	(lib.happy_650_1462246882719 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_616_1462246882960();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,55,44);


	(lib.happy_605_1462246882717 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_647_1462246882856();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,57,17);


	(lib.happy_584_1462246882720 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_675_1462246882781();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,45,102);


	(lib.happy_463_1462246882719 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_431_1462246882761();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,50);


	(lib.happy_096_1462246882718 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_522_1462246882928();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,15,31);


	(lib.happy_061_1462246882718 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_301_1462246882743();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,97,191);


	(lib.happy_001_1462246882718 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_794_1462246882944();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,29);


	(lib.happy_533_1462246882710 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_811_1462246882842();
		this.instance.setTransform(-32.3,-25.2,1,1,-7);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-32.3,-32.3,64.6,64.6);


	(lib.happy_976_1462246882706 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_605_1462246882747();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,275);


	(lib.happy_904_1462246882680 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_833_1462246883013();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,508,567);


	(lib.happy_575_1462246882681 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_500_1462246883063();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,585,591);


	(lib.happy_463_1462246882709 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_521_1462246882765();
		this.instance.setTransform(-20.5,-20.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


	(lib.happy_679_1462246882709 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_046_1462246883132();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,21);


	(lib.happy_141_1462246882709 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_767_1462246883099();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,60);


	(lib.happy_835_1462246882707 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_393_1462246882797();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,106);


	(lib.happy_832_1462246882707 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_265_1462246882987();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_533_1462246882708 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_181_1462246882880();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,67,72);


	(lib.happy_411_1462246882706 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_759_1462246883116();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,59,40);


	(lib.happy_103_1462246882707 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_048_1462246882963();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,64,53);


	(lib.happy_043_1462246882706 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_326_1462246882904();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,71);


	(lib.happy_116_1462246882710 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_695_1462246882885();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,275);


	(lib.happy_970_1462246882648 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_436_1462246883152();
		this.instance.setTransform(5.5,-5.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(5.5,-5.5,34,34);


	(lib.happy_909_1462246882648 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_770_1462246883074();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,24);


	(lib.happy_878_1462246882649 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_357_1462246882759();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,29);


	(lib.happy_749_1462246882647 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_273_1462246882797();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);


	(lib.happy_678_1462246882648 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_160_1462246882801();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,29);


	(lib.happy_474_1462246882647 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_529_1462246882875();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,105,3);


	(lib.happy_290_1462246882647 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_420_1462246883017();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,16);


	(lib.happy_226_1462246882649 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_861_1462246882788();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,38,38);


	(lib.happy_244_1462246882660 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_573_1462246882690 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_592_1462246882763();
		this.instance.setTransform(-28.5,-20);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-28.5,-20,57,40);


	(lib.happy_519_1462246882688 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_280_1462246882846();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_286_1462246882687 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_563_1462246882838();
		this.instance.setTransform(-11.5,-32);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11.5,-32,23,64);


	(lib.happy_234_1462246882689 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_894_1462246882893();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,16);


	(lib.happy_949_1462246882690 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_008_1462246882869();
		this.instance.setTransform(-61.5,-66);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-61.5,-66,123,132);


	(lib.happy_941_1462246882696 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_751_1462246883082();
		this.instance.setTransform(-66,-68);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-66,-68,132,136);


	(lib.happy_806_1462246882695 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_119_1462246882799();
		this.instance.setTransform(-70.5,-70);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-70.5,-70,141,140);


	(lib.happy_739_1462246882695 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_688_1462246883015();
		this.instance.setTransform(-139.5,-143.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-139.5,-143.5,279,287);


	(lib.happy_644_1462246882695 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_269_1462246882749();
		this.instance.setTransform(-38,-48.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-38,-48.5,76,97);


	(lib.happy_308_1462246882699 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_718_1462246883148();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,87,176);


	(lib.happy_539_1462246882691 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_421_1462246882755();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,359,56);


	(lib.happy_999_1462246882696 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_399_1462246882790();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,65);


	(lib.happy_785_1462246882698 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_121_1462246882785();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,27);


	(lib.happy_712_1462246882698 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_806_1462246882773();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,135,134);


	(lib.happy_035_1462246882694 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_487_1462246882863();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


	(lib.happy_425_1462246882697 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_461_1462246882830();
		this.instance.setTransform(-12.5,-7);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-7,25,14);


	(lib.happy_126_1462246882687 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_551_1462246882825();
		this.instance.setTransform(19.9,-22.5,1,1,60);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.4,-22.5,58.9,45);


	(lib.happy_023_1462246882696 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_073_1462246882757();
		this.instance.setTransform(-62.5,-68);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-62.5,-68,125,136);


	(lib.happy_793_1462246882681 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_026_1462246882851();
		this.instance.setTransform(-27.2,-36.1,0.84,0.84,4.3);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-32.2,-36.1,64.5,72.3);


	(lib.happy_311_1462246882677 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_497_1462246882879();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,436,435);


	(lib.happy_021_1462246882674 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_336_1462246883004();
		this.instance.setTransform(-33.1,-23,1,1,-8.2);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-33.1,-31.4,66.3,62.9);


	(lib.happy_485_1462246882659 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_318_1462246882754();
		this.instance.setTransform(-292.5,-295.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-292.5,-295.5,585,591);


	(lib.happy_991_1462246882682 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_094_1462246882886();
		this.instance.setTransform(-23.5,-24.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-23.5,-24.5,47,49);


	(lib.happy_919_1462246882682 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_158_1462246882816();
		this.instance.setTransform(-25,-26);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-25,-26,50,52);


	(lib.happy_398_1462246882686 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_548_1462246882777();
		this.instance.setTransform(-6,-6);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


	(lib.happy_042_1462246882682 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_334_1462246882824();
		this.instance.setTransform(-27,-25.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-27,-25.5,54,51);


	(lib.happy_745_1462246882700 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_057_1462246882726();
		this.instance.setTransform(-27.7,-23.1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-27.7,-23.1,53,53);


	(lib.happy_609_1462246882701 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_791_1462246883037();
		this.instance.setTransform(-30.5,-28);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-30.5,-28,56,56);


	(lib.happy_066_1462246882701 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_602_1462246882841();
		this.instance.setTransform(-26,-26.6);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-26,-26.6,56,56);


	(lib.happy_149_1462246882660 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_871_1462246882675 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_333_1462246882784();
		this.instance.setTransform(-30.5,-28);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-30.5,-28,56,56);


	(lib.happy_847_1462246882683 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_040_1462246882812();
		this.instance.setTransform(-25.5,-26.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-25.5,-26.5,51,53);


	(lib.happy_694_1462246882686 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_700_1462246882778();
		this.instance.setTransform(-246,-256.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-246,-256.5,492,513);


	(lib.happy_680_1462246882676 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_101_1462246882830();
		this.instance.setTransform(-27.7,-23.1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-27.7,-23.1,53,53);


	(lib.happy_660_1462246882654 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_995_1462246882750();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,312,26);


	(lib.happy_476_1462246882683 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_003_1462246882863();
		this.instance.setTransform(-25.5,-7.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-25.5,-7.5,51,15);


	(lib.happy_427_1462246882675 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_943_1462246882727();
		this.instance.setTransform(-26,-26.6);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-26,-26.6,56,56);


	(lib.happy_365_1462246882683 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_445_1462246882843();
		this.instance.setTransform(-26,-26.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-26,-26.5,52,53);


	(lib.happy_606_1462246882685 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_599_1462246882737();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,15,17);


	(lib.happy_356_1462246882685 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_090_1462246882916();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,18,14);


	(lib.happy_292_1462246882684 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_833_1462246882836();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,45,79);


	(lib.happy_522_1462246882726 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_652_1462246882775();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,52,52);


	(lib.happy_500_1462246882725 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_979_1462246882762();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,55,55);


	(lib.happy_248_1462246882726 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_522_1462246883077();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,51);


	(lib.happy_157_1462246882725 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_191_1462246882786();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,52);


	(lib.happy_948_1462246882703 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_775_1462246882741();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_842_1462246882702 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_344_1462246882731();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_764_1462246882702 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_297_1462246882795();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_531_1462246882704 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_344_1462246882876();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_402_1462246882704 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_845_1462246882732();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_265_1462246882701 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_998_1462246882927();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_249_1462246882703 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_462_1462246882774();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_110_1462246882703 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_312_1462246882834();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_109_1462246882705 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_587_1462246882894();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_080_1462246882702 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_140_1462246882894();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_555_1462246882659 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// cs1
		this.instance = new lib.happy_443_1462246882715();
		this.instance.setTransform(58.5,83.2,1,1,0,0,0,9.5,10.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,x:44.9,y:86.9},10).to({rotation:0,x:58.5,y:83.2},10).wait(1));

		// cs1_1
		this.instance_1 = new lib.happy_344_1462246882715();
		this.instance_1.setTransform(93.5,95.2,1,1,0,0,0,7.5,7.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:81.2,y:101.2},10).to({rotation:0,x:93.5,y:95.2},10).wait(1));

		// cs3
		this.instance_2 = new lib.happy_109_1462246882715();
		this.instance_2.setTransform(128.5,107.5,1,1,0,0,0,5.5,5.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:121,y:105},10).to({rotation:0,x:128.5,y:107.5},10).wait(1));

		// ct1
		this.instance_3 = new lib.happy_749_1462246882714();
		this.instance_3.setTransform(60.2,127.8,1,1,0,0,0,13.2,12.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-75,x:60.3},10).to({rotation:0,x:60.2},10).wait(1));

		// ct2
		this.instance_4 = new lib.happy_794_1462246882716();
		this.instance_4.setTransform(86.5,165.5,1,1,0,0,0,10.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:30,x:103.9,y:114.3},10).to({rotation:0,x:86.5,y:165.5},10).wait(1));

		// ct3
		this.instance_5 = new lib.happy_297_1462246882716();
		this.instance_5.setTransform(104,195.3,1,1,0,0,0,7.5,4.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15,x:104.8,y:148.1},10).to({rotation:0,x:104,y:195.3},10).wait(1));

		// caomei
		this.instance_6 = new lib.happy_974_1462246882699();
		this.instance_6.setTransform(77.2,141.5,1,1,0,0,0,77.2,112.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,y:136.5},10).to({rotation:0,y:141.5},10).wait(1));

		// css2
		this.instance_7 = new lib.happy_868_1462246882716();
		this.instance_7.setTransform(144.2,81.5,1,1,0,0,0,9.2,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:139.2,y:91.5},10).to({x:144.2,y:81.5},10).wait(1));

		// ctt2
		this.instance_8 = new lib.happy_643_1462246882714();
		this.instance_8.setTransform(125.2,159.3,1,1,-8.7,0,0,46.1,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:46,rotation:0,x:127,y:148},10).to({regX:46.1,rotation:-8.7,x:125.2,y:159.3},10).wait(1));

		// caomeiganzi
		this.instance_9 = new lib.happy_266_1462246882714();
		this.instance_9.setTransform(120,136,1,1,0,0,0,43,136);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// css1
		this.instance_10 = new lib.happy_541_1462246882717();
		this.instance_10.setTransform(59,69.5,1,1,0,0,0,14,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:14.6,rotation:7,x:59.1,y:74.6},10).to({regY:14.5,rotation:0,x:59,y:69.5},10).wait(1));

		// ctt1
		this.instance_11 = new lib.happy_337_1462246882717();
		this.instance_11.setTransform(87,127.6,1,1,9.8,0,0,13.1,14.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:13,regY:14,rotation:0,y:125},10).to({regX:13.1,regY:14.1,rotation:9.8,y:127.6},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,163,272);


	(lib.happy_829_1462246882680 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// lt1
		this.instance = new lib.happy_902_1462246882711();
		this.instance.setTransform(83.5,100.8,1,1,0,0,0,13.5,39.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.6,regY:39.9,rotation:58.4,y:100.9},10).to({regX:13.5,regY:39.8,rotation:0,y:100.8},10).wait(1));

		// lt2
		this.instance_1 = new lib.happy_458_1462246882712();
		this.instance_1.setTransform(106,71.2,1,1,0,0,0,9,8.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-49,x:128.5,y:101.2},10).to({rotation:0,x:106,y:71.2},10).wait(1));

		// lt3
		this.instance_2 = new lib.happy_085_1462246882711();
		this.instance_2.setTransform(132,106,1,1,0,0,0,6,6);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:162,y:102.3},10).to({x:132,y:106},10).wait(1));

		// ls1
		this.instance_3 = new lib.happy_488_1462246882712();
		this.instance_3.setTransform(45.8,48.5,1,1,0,0,0,19.8,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.3,x:57.2,y:51},10).to({rotation:0,x:45.8,y:48.5},10).wait(1));

		// ls2
		this.instance_4 = new lib.happy_199_1462246882711();
		this.instance_4.setTransform(33.2,74.8,1,1,0,0,0,16.2,7.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.3,rotation:7.3,x:37.8,y:79.5},10).to({regX:16.2,rotation:0,x:33.2,y:74.8},10).wait(1));

		// ls3
		this.instance_5 = new lib.happy_652_1462246882712();
		this.instance_5.setTransform(19.5,106,1,1,0,0,0,19.5,5);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

		// lanmei
		this.instance_6 = new lib.happy_053_1462246882713();
		this.instance_6.setTransform(71,100.8,1,1,0,0,0,54,100.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:54.1,regY:100.9,rotation:6.8,y:100.9},10).to({regX:54,regY:100.8,rotation:0,y:100.8},10).wait(1));

		// ltt
		this.instance_7 = new lib.happy_876_1462246882713();
		this.instance_7.setTransform(81.7,95.5,1,1,0,0,0,9.2,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,189.5,115);


	(lib.happy_696_1462246882680 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// xt1
		this.instance = new lib.happy_650_1462246882719();
		this.instance.setTransform(71.8,183,1,1,0,0,0,11.8,12);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.8,y:170.5},10).to({x:71.8,y:183},10).wait(1));

		// xt2
		this.instance_1 = new lib.happy_670_1462246882719();
		this.instance_1.setTransform(103.4,204.5,1,1,-22.2,0,0,38.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:38.6,rotation:15,x:100.6,y:194.1},10).to({regX:38.5,rotation:-22.2,x:103.4,y:204.5},10).wait(1));

		// xt3
		this.instance_2 = new lib.happy_001_1462246882718();
		this.instance_2.setTransform(86.1,246.7,1,1,-22.2,0,0,9.5,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:9.6,rotation:30,x:63.6,y:216.5},10).to({regX:9.5,rotation:-22.2,x:86.1,y:246.7},10).wait(1));

		// xs1
		this.instance_3 = new lib.happy_605_1462246882717();
		this.instance_3.setTransform(8.2,162.5,1,1,0,0,0,7.2,8.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:7.2,y:147.5},10).to({x:8.2,y:162.5},10).wait(1));

		// xs2
		this.instance_4 = new lib.happy_771_1462246882720();
		this.instance_4.setTransform(36.8,137.5,1,1,0,0,0,35.8,9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:35.8,y:122.5},10).to({x:36.8,y:137.5},10).wait(1));

		// xiangjiao
		this.instance_5 = new lib.happy_061_1462246882718();
		this.instance_5.setTransform(105,214,1,1,0,0,0,76,171);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:104,y:196},10).to({x:105,y:214},10).wait(1));

		// xtt1
		this.instance_6 = new lib.happy_584_1462246882720();
		this.instance_6.setTransform(82.5,194.5,1,1,0,0,0,13.5,19.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:79.5,y:177.5},10).to({x:82.5,y:194.5},10).wait(1));

		// xtt2
		this.instance_7 = new lib.happy_096_1462246882718();
		this.instance_7.setTransform(123.4,277.7,1,1,-67.7,0,0,10,24.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:107.7,y:278.2},10).to({rotation:-67.7,x:123.4,y:277.7},10).wait(1));

		// xss1
		this.instance_8 = new lib.happy_737_1462246882720();
		this.instance_8.setTransform(87.3,49.3,1,1,15,0,0,6,17.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-15,x:81.6,y:7},10).to({rotation:15,x:87.3,y:49.3},10).wait(1));

		// xss2
		this.instance_9 = new lib.happy_722_1462246882721();
		this.instance_9.setTransform(70.9,75.5,1,1,15,0,0,7,31);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:0,x:74,y:36.5},10).to({rotation:15,x:70.9,y:75.5},10).wait(1));

		// xss3
		this.instance_10 = new lib.happy_463_1462246882719();
		this.instance_10.setTransform(48.9,113.3,1,1,15,0,0,10.5,40.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:62.5,y:78.7},10).to({rotation:15,x:48.9,y:113.3},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(1,30.9,130,258.5);


	(lib.happy_887_1462246882658 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_463_1462246882709();
		this.instance.setTransform(20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},247).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_547_1462246882710 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_116_1462246882710();
		this.instance.setTransform(0,0,1,1,0,0,0,12.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-137.5,25,275);


	(lib.happy_652_1462246882708 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// p2
		this.instance = new lib.happy_533_1462246882708();
		this.instance.setTransform(86.8,82,1,1,0,24.9,-155.1,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleY:1,skewX:12,skewY:-164.2,x:86.9,y:80.6},10).to({regY:11.2,scaleY:1,skewX:24.9,skewY:-155.1,x:86.8,y:82},10).wait(1));

		// p1
		this.instance_1 = new lib.happy_411_1462246882706();
		this.instance_1.setTransform(109.4,80.2,1,1,0,24.9,-155.1,48.7,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.8,skewX:14.7,skewY:-165.3,y:80.3},10).to({regX:48.7,skewX:24.9,skewY:-155.1,y:80.2},10).wait(1));

		// p
		this.instance_2 = new lib.happy_043_1462246882706();
		this.instance_2.setTransform(52.8,104,1,1,0,24.9,-155.1,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

		// p3
		this.instance_3 = new lib.happy_103_1462246882707();
		this.instance_3.setTransform(60.3,88.5,1,1,0,19.2,-160.8,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.8,skewX:35.2,skewY:-144.8},10).to({regX:6.7,skewX:16.2,skewY:-163.8},10).wait(1));

		// s7
		this.instance_4 = new lib.happy_141_1462246882709();
		this.instance_4.setTransform(110.2,69.8,1,1,15,0,0,12.2,49.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,regY:49.7,rotation:0,x:110.1,y:69.7},10).to({regX:12.2,regY:49.8,rotation:15,x:110.2,y:69.8},10).wait(1));

		// rou
		this.instance_5 = new lib.happy_835_1462246882707();
		this.instance_5.setTransform(88,57,1,1,0,24.9,-155.1,29.9,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

		// s5
		this.instance_6 = new lib.happy_832_1462246882707();
		this.instance_6.setTransform(83.3,66.3,1,1,0,18.1,-161.9,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:56.5,skewX:2.9,skewY:-177.1,x:83.4,y:66.4},10).to({regX:10.2,regY:56.4,skewX:18.1,skewY:-161.9,x:83.3,y:66.3},10).wait(1));

		// s6
		this.instance_7 = new lib.happy_679_1462246882709();
		this.instance_7.setTransform(147.5,34.2,1,1,20,0,0,48,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:137,y:30.5},10).to({rotation:20,x:147.5,y:34.2},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-4.7,163.7,161.9);


	(lib.happy_178_1462246882708 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_976_1462246882706();
		this.instance.setTransform(0,0,1,1,0,0,0,13.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13.5,-137.5,27,275);


	(lib.happy_034_1462246882658 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_652_1462246882708();
		this.instance.setTransform(-54.2,35.2,0.9,0.9,0,0,0,18.6,115.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.7,regY:115.8,rotation:-5.4},10).to({regX:18.6,regY:115.7,rotation:0},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-71.2,-73.2,147.3,145.7);


	(lib.happy_457_1462246882678 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_533_1462246882710();
		this.instance.setTransform(50.8,-111.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.7,y:-112.6},2).to({x:49.9,y:-110.8},2).to({x:50.8},2).to({y:-112.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(18.5,-144,64.6,64.6);


	(lib.happy_604_1462246882642 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_865_1462246882684();
		this.instance.setTransform(38.6,20.2);

		// 图层 1
		this.instance_1 = new lib.happy_259_1462246882790();

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-16.4,-29.8,110.1,100);


	(lib.happy_692_1462246882673 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

		// Layer 1
		this.instance = new lib.happy_290_1462246882647();
		this.instance.setTransform(0,0,1,1,0,0,0,8,8);

		this.instance_1 = new lib.happy_909_1462246882648();
		this.instance_1.setTransform(0,0,1,1,0,0,0,12,12);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


	(lib.happy_526_1462246882689 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_286_1462246882687();
		this.instance.setTransform(11.5,32);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.2,scaleY:0.2,rotation:15,mode:"synched",startPosition:0},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,64);


	(lib.happy_246_1462246882688 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_573_1462246882690();
		this.instance.setTransform(28.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.09,scaleY:0.09},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,57,40);


	(lib.happy_078_1462246882689 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝 3
		this.instance = new lib.happy_234_1462246882689();
		this.instance.setTransform(23.8,1.3,0.189,0.189,0,0,0,8,8);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:8.1,regY:7.7,scaleX:0.66,scaleY:0.66,x:9,y:15.7},7,cjs.Ease.get(-0.5)).to({regX:7.7,scaleX:0.05,scaleY:0.05,x:-5.7,y:29.9},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(23));

		// 图层 19 拷贝 6
		this.instance_1 = new lib.happy_526_1462246882689("synched",0);
		this.instance_1.setTransform(43.5,4,0.145,0.145,0,-165.5,14.5,11.7,32.2);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,skewX:-173.2,skewY:6.8,x:42,y:23.8,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:11.6,regY:31.9,scaleX:0.15,scaleY:0.15,skewX:-180.5,skewY:-0.5,x:40.5,y:43.5,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// 图层 19 拷贝 5
		this.instance_2 = new lib.happy_526_1462246882689("synched",0);
		this.instance_2.setTransform(40.8,0.7,0.22,0.22,0,-143,37,11.6,32.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:32.2,scaleX:0.61,scaleY:0.61,skewX:-154.7,skewY:25.3,x:28.6,y:26,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:11.2,regY:32,scaleX:0.13,scaleY:0.13,skewX:-166.4,skewY:13.6,x:16.2,y:51.2,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(34.5,-6.3,12.5,14.3);


	(lib.happy_733_1462246882697 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_450_1462246882700();
		this.instance.setTransform(-16.8,11.6,1,1,44,0,0,9.1,9);

		this.instance_1 = new lib.happy_801_1462246882700();
		this.instance_1.setTransform(5.6,-13.9,1,1,0,0,0,30,8.8);

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.6,-22.7,47.8,68.6);


	(lib.happy_960_1462246882690 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_739_1462246882695();
		this.instance.setTransform(139.5,143.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:140.6,y:142.4},2).to({x:138.4,y:144.6},2).to({x:139.5,y:142.4},2).to({y:144.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,279,287);


	(lib.happy_808_1462246882692 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_941_1462246882696();
		this.instance.setTransform(66,68);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:66.9},2).to({y:69.1},2).to({x:67.1,y:66.9},2).to({x:64.9,y:69.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,132,136);


	(lib.happy_474_1462246882691 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_644_1462246882695();
		this.instance.setTransform(38,48.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:39.1,y:47.4},2).to({x:36.9,y:49.6},2).to({x:38,y:47.4},2).to({y:49.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,76,97);


	(lib.happy_272_1462246882691 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_023_1462246882696();
		this.instance.setTransform(62.5,68);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:61.4,y:69.1},2).to({x:63.6},2).to({x:62.5,y:66.9},2).to({y:69.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,125,136);


	(lib.happy_116_1462246882692 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_949_1462246882690();
		this.instance.setTransform(61.5,66);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:60.4,y:64.9},2).to({x:62.6,y:67.1},2).to({x:61.5,y:64.9},2).to({y:67.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,123,132);


	(lib.happy_018_1462246882692 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_806_1462246882695();
		this.instance.setTransform(70.5,70);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:68.9},2).to({x:69.4,y:71.1},2).to({x:70.5},2).to({y:68.9},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,141,140);


	(lib.happy_141_1462246882687 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// xiaotui.png
		this.instance = new lib.happy_126_1462246882687();
		this.instance.setTransform(-7.1,-14.4,1,1,-45,0,0,19.3,-10.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.2,rotation:-15,x:-4.2,y:-2.7},4,cjs.Ease.get(-0.5)).to({regX:19.3,rotation:-45,x:-7.1,y:-14.4},4,cjs.Ease.get(0.5)).to({regX:19.2,rotation:-15,x:-4.2,y:-2.7},4,cjs.Ease.get(-0.5)).to({regX:19.3,rotation:-45,x:-7.1,y:-14.4},4,cjs.Ease.get(0.5)).wait(1));

		// jyz.png
		this.instance_1 = new lib.happy_425_1462246882697();
		this.instance_1.setTransform(-31.4,24.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:-41.2,y:20.2},4,cjs.Ease.get(-0.5)).to({rotation:0,x:-31.4,y:24.1},4,cjs.Ease.get(0.5)).to({rotation:15,x:-41.2,y:20.2},4,cjs.Ease.get(-0.5)).to({rotation:0,x:-31.4,y:24.1},4,cjs.Ease.get(0.5)).wait(1));

		// t1- 100
		this.instance_2 = new lib.happy_351_1462246882697();
		this.instance_2.setTransform(27.4,-22.8,1,1,79.5,0,0,12,14.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:14.7,scaleX:1,scaleY:1,rotation:60.9,x:27.2,y:-22.7},4,cjs.Ease.get(-0.5)).to({regY:14.6,scaleX:1,scaleY:1,rotation:79.5,x:27.4,y:-22.8},4,cjs.Ease.get(0.5)).to({regY:14.7,scaleX:1,scaleY:1,rotation:60.9,x:27.2,y:-22.7},4,cjs.Ease.get(-0.5)).to({regY:14.6,scaleX:1,scaleY:1,rotation:79.5,x:27.4,y:-22.8},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-49.9,-37.1,93.9,80.5);


	(lib.happy_951_1462246882674 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_957_1462246882678();
		this.instance.setTransform(-1.8,1.8,1,1,-3.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.3,x:-0.8,y:1},2).to({x:-2.8,y:2.6},2).to({x:-1.7,y:0.9},2).to({rotation:-3.5,x:-1.9,y:2.7},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-41.3,-38.8,78.9,81.2);


	(lib.happy_620_1462246882677 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_021_1462246882674();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.1,y:1.1},2).to({x:1.1,y:-1.1},2).to({x:0,y:1.1},2).to({y:-1.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-33.1,-31.4,66.3,62.9);


	(lib.happy_413_1462246882675 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_427_1462246882675();
		this.instance.setTransform(35.1,37.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:36.2,y:36.7},2).to({x:34,y:38.9},2).to({x:35.1,y:36.7},2).to({y:38.9},2).wait(1));

		// yi1
		this.instance_1 = new lib.happy_871_1462246882675();
		this.instance_1.setTransform(96.5,42);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:43.1},2).to({y:40.9},2).to({x:95.4},2).to({x:97.6,y:43.1},2).wait(1));

		// bu1
		this.instance_2 = new lib.happy_680_1462246882676();
		this.instance_2.setTransform(68.6,91);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:67.5,y:92.1},2).to({x:69.7,y:89.9},2).to({x:68.6,y:92.1},2).to({y:89.9},2).wait(1));

		// quan
		this.instance_3 = new lib.happy_861_1462246883053();
		this.instance_3.setTransform(0,0,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,129,129);


	(lib.happy_412_1462246882676 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 2
		this.instance = new lib.happy_042_1462246882682();
		this.instance.setTransform(37.4,40.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38.3,y:39.9},2).to({x:36.5,y:41.7},2).to({x:37.4,y:39.9},2).to({y:41.7},2).wait(1));

		// shi2
		this.instance_1 = new lib.happy_919_1462246882682();
		this.instance_1.setTransform(94.4,42.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:43.7},2).to({y:41.9},2).to({x:95.3,y:43.7},2).to({x:93.5,y:41.9},2).wait(1));

		// ta2
		this.instance_2 = new lib.happy_991_1462246882682();
		this.instance_2.setTransform(65.6,94.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:64.7,y:95.8},2).to({x:66.5,y:94},2).to({x:65.6,y:95.8},2).to({y:94},2).wait(1));

		// quan
		this.instance_3 = new lib.happy_861_1462246883053();
		this.instance_3.setTransform(0,0,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,129,129);


	(lib.happy_317_1462246882674 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_793_1462246882681();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.2,y:-1},2).to({x:-1.2,y:1},2).to({x:0.1,y:-1.1},2).to({x:-0.1,y:1.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-32.2,-36.1,64.5,72.3);


	(lib.happy_076_1462246882673 = function() {
		this.initialize();

		// 图层 2
		this.instance = new lib.happy_951_1462246882674();
		this.instance.setTransform(34,56.1,1.045,1.045,-5.4);

		// laiba
		this.instance_1 = new lib.happy_457_1462246882678();
		this.instance_1.setTransform(94.2,75.8,1,1,7.2,0,0,50.7,-111.8);

		// quan
		this.instance_2 = new lib.happy_861_1462246883053();
		this.instance_2.setTransform(0,0,0.86,0.86);

		this.addChild(this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.4,0,142.8,129);


	(lib.happy_073_1462246882678 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_365_1462246882683();
		this.instance.setTransform(35.1,37.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:36.2,y:36.7},2).to({x:34,y:38.9},2).to({x:35.1,y:36.7},2).to({y:38.9},2).wait(1));

		// bu1
		this.instance_1 = new lib.happy_847_1462246882683();
		this.instance_1.setTransform(68.6,91);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:67.5,y:92.1},2).to({x:69.7,y:89.9},2).to({x:68.6,y:92.1},2).to({y:89.9},2).wait(1));

		// yi1
		this.instance_2 = new lib.happy_476_1462246882683();
		this.instance_2.setTransform(96.5,42);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:97.6,y:40.9},2).to({x:95.4,y:43.1},2).to({x:96.5,y:40.9},2).to({y:43.1},2).wait(1));

		// quan
		this.instance_3 = new lib.happy_861_1462246883053();
		this.instance_3.setTransform(0,0,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,129,129);


	(lib.happy_321_1462246882705 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_066_1462246882701();
		this.instance.setTransform(35.1,37.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:36.2,y:36.7},2).to({x:34,y:38.9},2).to({x:35.1,y:36.7},2).to({y:38.9},2).wait(1));

		// yi1
		this.instance_1 = new lib.happy_609_1462246882701();
		this.instance_1.setTransform(96.5,42);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:43.1},2).to({y:40.9},2).to({x:95.4},2).to({x:97.6,y:43.1},2).wait(1));

		// bu1
		this.instance_2 = new lib.happy_745_1462246882700();
		this.instance_2.setTransform(68.6,91);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:67.5,y:92.1},2).to({x:69.7,y:89.9},2).to({x:68.6,y:92.1},2).to({y:89.9},2).wait(1));

		// quan
		this.instance_3 = new lib.happy_619_1462246883119();
		this.instance_3.setTransform(0,0,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,129,129);


	(lib.happy_923_1462246882655 = function() {
		this.initialize();

		// dian1
		this.dot_0 = new lib.happy_398_1462246882686();
		this.dot_0.setTransform(6,6);

		// dian2
		this.dot_1 = new lib.happy_398_1462246882686();
		this.dot_1.setTransform(30.4,6);
		this.dot_1.alpha = 0.5;

		// 椭圆 3 拷贝 5
		this.dot_5 = new lib.happy_398_1462246882686();
		this.dot_5.setTransform(127.8,6);
		this.dot_5.alpha = 0.5;

		this.dot_4 = new lib.happy_398_1462246882686();
		this.dot_4.setTransform(103.5,6);
		this.dot_4.alpha = 0.5;

		this.dot_3 = new lib.happy_398_1462246882686();
		this.dot_3.setTransform(79.1,6);
		this.dot_3.alpha = 0.5;

		this.dot_2 = new lib.happy_398_1462246882686();
		this.dot_2.setTransform(54.7,6);
		this.dot_2.alpha = 0.5;

		this.addChild(this.dot_2,this.dot_3,this.dot_4,this.dot_5,this.dot_1,this.dot_0);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,133.9,12);


	(lib.happy_216_1462246882686 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

		// Layer 1
		this.instance = new lib.happy_749_1462246882647();
		this.instance.setTransform(0,0,1,1,0,0,0,15,15);

		this.instance_1 = new lib.happy_226_1462246882649();
		this.instance_1.setTransform(0,0,1,1,0,0,0,19,19);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


	(lib.happy_437_1462246882656 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_694_1462246882686();
		this.instance.setTransform(246,256.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10).to({alpha:1},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,492,513);


	(lib.happy_098_1462246882642 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

		// Layer 1
		this.instance = new lib.happy_678_1462246882648();
		this.instance.setTransform(0,0,1,1,0,0,0,14.5,14.5);

		this.instance_1 = new lib.happy_878_1462246882649();
		this.instance_1.setTransform(0,0,1,1,0,0,0,14.5,14.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29,29);


	(lib.happy_406_1462246882685 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_606_1462246882685();
		this.instance.setTransform(25.5,-40.5,1,1,0,0,0,7.5,8.5);

		this.instance_1 = new lib.happy_356_1462246882685();
		this.instance_1.setTransform(-24,42,1,1,0,0,0,9,7);

		this.instance_2 = new lib.happy_292_1462246882684();
		this.instance_2.setTransform(1.5,0.5,1,1,0,0,0,22.5,39.5);

		this.addChild(this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-33,-49,66,98);


	(lib.happy_194_1462246882705 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// wo
		this.instance = new lib.happy_248_1462246882726();
		this.instance.setTransform(-27,-27.5,1,1,0,0,0,23.5,25.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-28.1,y:-28.6},2).to({x:-25.9,y:-26.4},2).to({x:-27,y:-28.6},2).to({y:-26.4},2).wait(1));

		// yao
		this.instance_1 = new lib.happy_522_1462246882726();
		this.instance_1.setTransform(22.5,-22,1,1,0,0,0,26,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:23.6,y:-23.1},2).to({x:21.4,y:-20.9},2).to({x:23.6,y:-22},2).to({x:21.4},2).wait(1));

		// xuan
		this.instance_2 = new lib.happy_500_1462246882725();
		this.instance_2.setTransform(-26,28.5,1,1,0,0,0,27.5,27.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-24.9,y:29.6},2).to({x:-27.1,y:27.4},2).to({x:-26,y:29.6},2).to({y:27.4},2).wait(1));

		// yaoy
		this.instance_3 = new lib.happy_157_1462246882725();
		this.instance_3.setTransform(26.5,28,1,1,0,0,0,28,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:26,y:27.5},2).to({x:27.1,y:28.6},2).to({x:26.5,y:27.5},2).to({x:27.1,y:28},2).wait(1));

		// ddd
		this.instance_4 = new lib.happy_619_1462246883119();
		this.instance_4.setTransform(-64.5,-64.5,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


	(lib.happy_586_1462246882659 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_948_1462246882703();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},10).to({regX:9,rotation:5.3,x:9,y:158},10).wait(1));

		// S1--
		this.instance_1 = new lib.happy_764_1462246882702();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},10).to({y:134},10).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_402_1462246882704();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},10).to({y:176},10).wait(1));

		// S2
		this.instance_3 = new lib.happy_531_1462246882704();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},10).to({rotation:23.5,x:80.8,y:122.6},10).wait(1));

		// t1-
		this.instance_4 = new lib.happy_249_1462246882703();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},5).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},5).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},5).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},5).wait(1));

		// t1--
		this.instance_5 = new lib.happy_842_1462246882702();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},10).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},10).wait(1));

		// t1---
		this.instance_6 = new lib.happy_110_1462246882703();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

		// t2--
		this.instance_7 = new lib.happy_265_1462246882701();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},5).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},5).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},5).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},5).wait(1));

		// t2-
		this.instance_8 = new lib.happy_109_1462246882705();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},10).to({rotation:48.3,x:97,y:188.6},10).wait(1));

		// t2---
		this.instance_9 = new lib.happy_080_1462246882702();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_943_1462246882657 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_970_1462246882648();
		this.instance.setTransform(-149.8,5.1,1,1,0,0,0,21.5,10);

		this.size_2 = new lib.happy_216_1462246882686();
		this.size_2.setTransform(3.7,4.8);

		this.size_1 = new lib.happy_098_1462246882642();
		this.size_1.setTransform(-50.8,5.3);

		this.size_0 = new lib.happy_692_1462246882673();
		this.size_0.setTransform(-98.3,4.8);

		this.instance_1 = new lib.happy_474_1462246882647();
		this.instance_1.setTransform(-66.4,5.3,1.355,1,0,0,0,52.5,1.5);

		this.resetBtn = new lib.happy_604_1462246882642();
		this.resetBtn.setTransform(107.7,10.8,1,1,0,0,0,30,31);

		this.addChild(this.resetBtn,this.instance_1,this.size_0,this.size_1,this.size_2,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-165.8,-50,337.1,100);


	(lib.happy_514_1462246882660 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_178_1462246882708();
		this.instance.setTransform(-0.2,0.1,1,1,175.9,0,0,-477.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-477.2,regY:0,rotation:-360,x:-0.3,y:0},496).wait(158));

		// 图层 4
		this.instance_1 = new lib.happy_547_1462246882710();
		this.instance_1.setTransform(-0.3,0.1,1,1,-64.7,0,0,-479.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,rotation:-720,y:0},496).to({_off:true},78).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.4,-502.9,834,675.1);


	(lib.happy_370_1462246882688 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝 2
		this.instance = new lib.happy_234_1462246882689("synched",0);
		this.instance.setTransform(29.3,63.2,0.12,0.12,0,0,0,7.9,7.9);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:8.2,scaleX:0.58,scaleY:0.58,x:45.2,y:53},7,cjs.Ease.get(-0.5)).to({regY:7.8,scaleX:0.14,scaleY:0.14,x:56.6,y:52.9},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(22));

		// 图层 19 拷贝 4
		this.instance_1 = new lib.happy_526_1462246882689("synched",0);
		this.instance_1.setTransform(13.6,69.2,0.09,0.09,108.8,0,0,17.7,17.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:17.6,scaleX:0.63,scaleY:0.63,rotation:101.3,x:36.3,y:69.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.9,scaleX:0.7,scaleY:0.7,rotation:93.8,x:59.1,y:70.4,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(23));

		// ss4
		this.instance_2 = new lib.happy_526_1462246882689("synched",0);
		this.instance_2.setTransform(6.4,57.6,0.09,0.09,0,22.8,-157.2,18,17.2);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regY:17.4,scaleX:0.64,scaleY:0.64,skewX:44.8,skewY:-135.2,x:25.5,y:27.1,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.9,regY:17.7,scaleX:0.5,scaleY:0.5,skewX:37.8,skewY:-142.2,x:36.7,y:10.6,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// ss3
		this.instance_3 = new lib.happy_246_1462246882688("synched",0);
		this.instance_3.setTransform(5,64.6,0.087,0.087,0,0,0,28.6,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:28.4,regY:19.9,scaleX:1,scaleY:1,rotation:-14.8,x:26.8,y:38.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:28.6,regY:20,rotation:-15,x:44.6,y:22.7,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(2.5,62.9,5,3.5);


	(lib.happy_862_1462246882699 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 2
		this.instance = new lib.happy_785_1462246882698();
		this.instance.setTransform(-46.7,-47.1,1,1,0,0,0,11.5,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(2));

		// 图层 1
		this.instance_1 = new lib.happy_999_1462246882696();
		this.instance_1.setTransform(-14.5,-18.1,1,1,0,0,0,28,32.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17));

		// sbi
		this.instance_2 = new lib.happy_733_1462246882697();
		this.instance_2.setTransform(29.4,21,1,1,0,90,-90,0,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-58.2,-60.6,100.8,111.3);


	(lib.happy_651_1462246882694 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_141_1462246882687("synched",0);
		this.instance.setTransform(74.3,149.8,1,1,7.4,0,0,28.9,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,startPosition:4},4,cjs.Ease.get(-0.49)).to({rotation:-142.6,x:74,startPosition:8},4,cjs.Ease.get(0.5)).to({rotation:-60,x:74.3,startPosition:12},4,cjs.Ease.get(-0.49)).to({rotation:7.4,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 3
		this.instance_1 = new lib.happy_519_1462246882688("synched",0);
		this.instance_1.setTransform(87.7,83.5,1,1,0,17.7,-162.3,59.4,60);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,skewX:2.6,skewY:-177.4,x:87.8},4,cjs.Ease.get(-0.49)).to({scaleX:1,scaleY:1,skewX:17.7,skewY:-162.3,x:87.7},4,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,skewX:2.6,skewY:-177.4,x:87.8},4,cjs.Ease.get(-0.49)).to({scaleX:1,scaleY:1,skewX:17.7,skewY:-162.3,x:87.7},4,cjs.Ease.get(0.5)).wait(1));

		// xjh
		this.instance_2 = new lib.happy_308_1462246882699();
		this.instance_2.setTransform(95.5,90,1,1,0,0,0,43.5,88);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

		// 图层 2
		this.instance_3 = new lib.happy_519_1462246882688("synched",0);
		this.instance_3.setTransform(82.1,75,1,1,21.6,0,0,59.3,60);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:59.2,scaleX:1,scaleY:1,rotation:36.5,x:82,y:74.9},4,cjs.Ease.get(-0.49)).to({regX:59.3,scaleX:1,scaleY:1,rotation:21.6,x:82.1,y:75},4,cjs.Ease.get(0.5)).to({regX:59.2,scaleX:1,scaleY:1,rotation:36.5,x:82,y:74.9},4,cjs.Ease.get(-0.49)).to({regX:59.3,scaleX:1,scaleY:1,rotation:21.6,x:82.1,y:75},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 29 拷贝 8
		this.instance_4 = new lib.happy_141_1462246882687("synched",0);
		this.instance_4.setTransform(74.2,149.9,1,1,-137.2,0,0,28.8,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.4,scaleX:1,scaleY:1,rotation:-69.4,x:74.4,y:150,startPosition:4},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:12.8,x:74.1,startPosition:8},4,cjs.Ease.get(0.5)).to({regY:-20.4,scaleX:1,scaleY:1,rotation:-69.4,x:74.4,startPosition:12},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:-137.2,x:74.2,y:149.9,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.6,-2.6,167.3,204.1);


	(lib.happy_830_1462246882694 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_141_1462246882687("synched",0);
		this.instance.setTransform(89.8,157.1,1,1,7.4,0,0,28.9,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,startPosition:4},4,cjs.Ease.get(-0.49)).to({rotation:-124.8,startPosition:8},4,cjs.Ease.get(0.5)).to({rotation:-60,startPosition:12},4,cjs.Ease.get(-0.49)).to({rotation:7.4,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 2
		this.instance_1 = new lib.happy_733_1462246882697();
		this.instance_1.setTransform(136.1,107.9,1,1,0,-30,150,-0.1,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:90,skewY:270,x:136.2,y:108.1},8,cjs.Ease.get(-0.5)).to({skewX:-30,skewY:150,x:136.1,y:107.9},8,cjs.Ease.get(0.5)).wait(1));

		// Vector Smart Object
		this.instance_2 = new lib.happy_712_1462246882698();
		this.instance_2.setTransform(103.3,112.5,1,1,0,0,0,67.5,67);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

		// 图层 4
		this.instance_3 = new lib.happy_733_1462246882697();
		this.instance_3.setTransform(72.4,108,1,1,0,141,-39,0,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,skewX:90,skewY:-90,x:136.2,y:108.1},8,cjs.Ease.get(-0.5)).to({regX:0,skewX:141,skewY:-39,x:72.4,y:108},8,cjs.Ease.get(0.5)).wait(1));

		// 图层 29 拷贝 8
		this.instance_4 = new lib.happy_141_1462246882687("synched",0);
		this.instance_4.setTransform(100.9,159.4,1,1,-137.2,0,0,28.8,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:4},4,cjs.Ease.get(-0.49)).to({regX:28.9,regY:-20.6,scaleX:1,scaleY:1,rotation:22.1,x:100.9,startPosition:8},4,cjs.Ease.get(0.5)).to({regX:28.8,regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:12},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:-137.2,x:100.9,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(11,45.5,178.4,163.3);


	(lib.happy_596_1462246882698 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_141_1462246882687("synched",0);
		this.instance.setTransform(89.8,157.1,1,1,7.4,0,0,28.9,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,startPosition:4},4,cjs.Ease.get(-0.49)).to({rotation:-124.8,startPosition:8},4,cjs.Ease.get(0.5)).to({rotation:-60,startPosition:12},4,cjs.Ease.get(-0.49)).to({rotation:7.4,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 2
		this.instance_1 = new lib.happy_733_1462246882697();
		this.instance_1.setTransform(136.1,107.9,1,1,0,-30,150,-0.1,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:90,skewY:270,x:136.2,y:108.1},8,cjs.Ease.get(-0.5)).to({skewX:-30,skewY:150,x:136.1,y:107.9},8,cjs.Ease.get(0.5)).wait(1));

		// Vector Smart Object
		this.instance_2 = new lib.happy_974_1462246882699();
		this.instance_2.setTransform(81.8,163,1.049,1.049,0,14.8,-165.2,78.5,121.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05,x:81.9},8).to({scaleX:1.05,scaleY:1.05,x:81.8},8).wait(1));

		// laba
		this.instance_3 = new lib.happy_862_1462246882699();
		this.instance_3.setTransform(85.3,93,1,1,0,0,0,31.7,25.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-13.4},4,cjs.Ease.get(-0.5)).to({rotation:0},4,cjs.Ease.get(0.5)).to({rotation:-13.4},4,cjs.Ease.get(-0.49)).to({rotation:0},4,cjs.Ease.get(0.48)).wait(1));

		// 图层 29 拷贝 8
		this.instance_4 = new lib.happy_141_1462246882687("synched",0);
		this.instance_4.setTransform(100.9,159.4,1,1,-137.2,0,0,28.8,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:4},4,cjs.Ease.get(-0.49)).to({regX:28.9,regY:-20.6,scaleX:1,scaleY:1,rotation:22.1,x:100.9,startPosition:8},4,cjs.Ease.get(0.5)).to({regX:28.8,regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:12},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:-137.2,x:100.9,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.6,7,198.7,201.8);


	(lib.happy_412_1462246882693 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_596_1462246882698("synched",0);
		this.instance.setTransform(0,12.7,1,1,0,0,0,97,110.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.09,y:-4.9,startPosition:4},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:8},4,cjs.Ease.get(0.51)).to({scaleY:1.09,y:-4.9,startPosition:12},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:16},4,cjs.Ease.get(0.51)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-101.6,-90.9,198.7,201.8);


	(lib.happy_214_1462246882693 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_830_1462246882694("synched",0);
		this.instance.setTransform(0,12.7,1,1,0,0,0,97,110.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.09,y:-4.9,startPosition:4},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:8},4,cjs.Ease.get(0.51)).to({scaleY:1.09,y:-4.9,startPosition:12},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:16},4,cjs.Ease.get(0.51)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-86,-52.4,178.4,163.3);


	(lib.happy_071_1462246882693 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_651_1462246882694("synched",0);
		this.instance.setTransform(-4.7,100.7,1,1,0,0,0,78.5,207.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:207.5,scaleY:1.05,y:74.7,startPosition:4},4,cjs.Ease.get(-0.5)).to({regY:207.6,scaleY:1,y:100.7,startPosition:8},4,cjs.Ease.get(0.5)).to({regY:207.5,scaleY:1.05,y:74.7,startPosition:12},4,cjs.Ease.get(-0.5)).to({regY:207.6,scaleY:1,y:100.7,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-87.8,-109.6,167.3,204.1);


	(lib.happy_980_1462246882679 = function() {
		this.initialize();

		// 图层 2
		this.instance = new lib.happy_317_1462246882674();
		this.instance.setTransform(33.1,53,1,1,-5.4);

		// laiba
		this.instance_1 = new lib.happy_620_1462246882677();
		this.instance_1.setTransform(98.2,70.3);

		// quan
		this.instance_2 = new lib.happy_861_1462246883053();
		this.instance_2.setTransform(0,0,0.86,0.86);

		this.addChild(this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-2.5,0,133.9,129);


	(lib.happy_939_1462246882657 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_073_1462246882678();
		this.instance.setTransform(0.6,0.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.4,-64.5,129,129);


	(lib.happy_805_1462246882655 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_413_1462246882675();
		this.instance.setTransform(0.6,0.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.4,-64.5,129,129);


	(lib.happy_725_1462246882655 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_412_1462246882676();
		this.instance.setTransform(0.6,0.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.4,-64.5,129,129);


	(lib.happy_546_1462246882657 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_076_1462246882673();
		this.instance.setTransform(0.6,0.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-76.8,-64.5,142.8,129);


	(lib.happy_048_1462246882677 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_980_1462246882679();
		this.instance.setTransform(0.6,0.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-66.9,-64.5,133.9,129);


	(lib.happy_178_1462246882656 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_194_1462246882705();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


	(lib.happy_479_1462246882656 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_321_1462246882705();
		this.instance.setTransform(0.6,0.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.4,-64.5,129,129);


	(lib.happy_297_1462246882654 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// xian2
		this.instance = new lib.happy_406_1462246882685();
		this.instance.setTransform(33,49,1,1,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:3.4,x:32.9},3).to({scaleX:1,scaleY:1,rotation:20.5,x:33},3).to({scaleX:1,scaleY:1,rotation:3.4,x:32.9},3).to({scaleX:1,scaleY:1,rotation:20.5,x:33},3).wait(8));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15,5.1,96.1,89.8);


	(lib.happy_716_1462246882652 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop()
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

		// 图层 1
		this.instance = new lib.happy_660_1462246882654();
		this.instance.setTransform(0,0,1,1,0,0,0,156,13);

		this.instance_1 = new lib.happy_136_1462246882945();
		this.instance_1.setTransform(-143,-13);

		this.instance_2 = new lib.happy_297_1462246882654();
		this.instance_2.setTransform(177.6,-4,1,1,0,0,0,33,49);

		this.instance_3 = new lib.happy_296_1462246882792();
		this.instance_3.setTransform(-129.5,-29);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-156,-13,312,26);


	(lib.happy_954_1462246882653 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_20 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

		// dx
		this.instance = new lib.happy_960_1462246882690("synched",8,false);
		this.instance.setTransform(-2.5,-194.5,1,1,0,0,0,139.5,143.5);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(15));

		// jtt
		this.instance_1 = new lib.happy_474_1462246882691();
		this.instance_1.setTransform(176,-401.5,1,1,0,0,0,38,48.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

		// w9
		this.instance_2 = new lib.happy_539_1462246882691();
		this.instance_2.setTransform(-8.5,229,1,1,0,0,0,179.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

		// 图层 14
		this.instance_3 = new lib.happy_078_1462246882689();
		this.instance_3.setTransform(158.4,-129.3,1.922,1.922,80.7,0,0,109.2,-139.1);

		this.instance_4 = new lib.happy_370_1462246882688();
		this.instance_4.setTransform(-237.9,179.9,1.695,1.695,0,0,0,-209,274);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(21));

		// ben
		this.instance_5 = new lib.happy_272_1462246882691();
		this.instance_5.setTransform(-67.5,-277,0.134,0.134,0,0,0,62.4,68);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:62.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(7));

		// zou
		this.instance_6 = new lib.happy_808_1462246882692();
		this.instance_6.setTransform(56,-261,0.065,0.065,0,0,0,65.7,68);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({regX:66,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(5));

		// xiang
		this.instance_7 = new lib.happy_018_1462246882692();
		this.instance_7.setTransform(-62.5,-140,0.159,0.159,0,0,0,70.7,70);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({regX:70.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(3));

		// gao
		this.instance_8 = new lib.happy_116_1462246882692();
		this.instance_8.setTransform(73.5,-120,0.108,0.108,0,0,0,61.4,66);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:61.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(1));

		// cma
		this.instance_9 = new lib.happy_412_1462246882693();
		this.instance_9.setTransform(-138,52.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// xja
		this.instance_10 = new lib.happy_071_1462246882693();
		this.instance_10.setTransform(-8.7,179.4,1,1,0,0,0,0,103.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

		// lamm
		this.instance_11 = new lib.happy_214_1462246882693();
		this.instance_11.setTransform(120.7,56.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

		// dise
		this.instance_12 = new lib.happy_035_1462246882694();
		this.instance_12.setTransform(0,0,1,1,0,0,0,320,520);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-320,-520,640,1040);


	(lib.step_1 = function() {
		this.initialize();

		// button
		this.uploadBtn = new lib.happy_048_1462246882677();
		this.uploadBtn.setTransform(0,326.5);

		// lanmei
		this.instance = new lib.happy_829_1462246882680();
		this.instance.setTransform(-145.5,153.5,1,1,0,0,0,88.5,57.5);

		// xiangjiao
		this.instance_1 = new lib.happy_696_1462246882680();
		this.instance_1.setTransform(-250.8,43.7,1,1,0,0,0,62.5,143);

		// snow1
		this.instance_2 = new lib.happy_904_1462246882680();
		this.instance_2.setTransform(16.9,-103.1,0.8,0.8,0,0,0,254.2,283.6);

		// wanfa
		this.instance_3 = new lib.happy_311_1462246882677();
		this.instance_3.setTransform(-1,-100.5,1,1,0,0,0,218,217.5);

		// pic
		this.instance_4 = new lib.happy_575_1462246882681();
		this.instance_4.setTransform(0,-101,0.8,0.8,0,0,0,292.5,295.5);

		// caomei
		this.instance_5 = new lib.happy_555_1462246882659();
		this.instance_5.setTransform(203.5,344,1,1,0,0,0,81.5,136);

		// xj
		this.instance_6 = new lib.happy_034_1462246882658();
		this.instance_6.setTransform(224.9,-327.2,1.1,1.1,-7.3);

		// 图层 12
		this.instance_7 = new lib.happy_514_1462246882660();
		this.instance_7.setTransform(0.3,0.1);

		this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.uploadBtn);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-499.2,-520,834,1040);


	(lib.step_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

		// 分享
		this.shareMC = new lib.happy_954_1462246882653();

		this.timeline.addTween(cjs.Tween.get(this.shareMC).wait(3));

		// Layer 7
		this.againBtn = new lib.happy_805_1462246882655();
		this.againBtn.setTransform(-93.2,368.5);

		this.titleMC = new lib.happy_716_1462246882652();
		this.titleMC.setTransform(143,-403,1,1,0,0,0,143,13);

		this.instance = new lib.happy_358_1462246882738();
		this.instance.setTransform(-159,-420);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titleMC},{t:this.againBtn}]}).to({state:[{t:this.instance}]},2).wait(1));

		// Layer 5
		this.dotList = new lib.happy_923_1462246882655();
		this.dotList.setTransform(0,0,1,1,0,0,0,67,-233);

		this.getBtn = new lib.happy_725_1462246882655();
		this.getBtn.setTransform(83.5,367.5);

		this.instance_1 = new lib.happy_408_1462246882826();
		this.instance_1.setTransform(-78,235);

		this.againBtn2 = new lib.happy_479_1462246882656();
		this.againBtn2.setTransform(-86.5,367.5);

		this.shareBtn = new lib.happy_178_1462246882656();
		this.shareBtn.setTransform(83.5,370);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.getBtn},{t:this.dotList}]},1).to({state:[{t:this.shareBtn},{t:this.againBtn2},{t:this.instance_1}]},1).wait(1));

		// 虚框
		this.showTipMC = new lib.happy_437_1462246882656();
		this.showTipMC.setTransform(-6.5,-73.5,1,1,0,0,0,246,256.5);

		this.timeline.addTween(cjs.Tween.get(this.showTipMC).wait(3));

		// w
		this.toolMC = new lib.happy_943_1462246882657();
		this.toolMC.setTransform(16.3,256.2);

		this.uploadBtn = new lib.happy_546_1462246882657();
		this.uploadBtn.setTransform(-92.9,368.5);

		this.nextBtn = new lib.happy_939_1462246882657();
		this.nextBtn.setTransform(83.5,367.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextBtn},{t:this.uploadBtn},{t:this.toolMC}]}).to({state:[]},1).wait(2));

		// xj
		this.instance_2 = new lib.happy_887_1462246882658();
		this.instance_2.setTransform(62.9,-471.8,1,1,0,0,0,20.5,20.5);

		this.instance_3 = new lib.happy_887_1462246882658();
		this.instance_3.setTransform(-216.8,259.2,1,1,0,0,0,20.5,20.5);

		this.instance_4 = new lib.happy_887_1462246882658("synched",52);
		this.instance_4.setTransform(152.5,463.5,1,1,0,0,0,20.5,20.5);

		this.instance_5 = new lib.happy_034_1462246882658();
		this.instance_5.setTransform(249.5,-373.2,1.1,1.1,-7.3);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(3));

		// 外框
		this.instance_6 = new lib.happy_485_1462246882659();
		this.instance_6.setTransform(0.5,-73.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

		// lanm
		this.instance_7 = new lib.happy_586_1462246882659();
		this.instance_7.setTransform(-217.5,382.1,0.85,0.85,0,0,0,57,109);

		this.instance_8 = new lib.happy_555_1462246882659();
		this.instance_8.setTransform(236.5,401.9,1,1,0,0,0,81.5,136);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(3));

		// 模板
		this.motionMC = new lib.happy_149_1462246882660();
		this.motionMC.setTransform(-272,-347);

		this.timeline.addTween(cjs.Tween.get(this.motionMC).wait(3));

		// Layer 3 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("Egq8Aq+MAAAhV6MBV6AAAMAAABV6g");
		mask.setTransform(-1.5,-79);

		// ren
		this.imgMC = new lib.happy_244_1462246882660();
		this.imgMC.setTransform(-65.5,-116.5,1,1,0,0,0,206.5,230.5);

		this.imgMC.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.imgMC).wait(3));

		// 图层 14
		this.instance_9 = new lib.happy_514_1462246882660();
		this.instance_9.setTransform(0.3,0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.2,-520,834,1057.9);


	// stage content:
	(lib.main = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop()
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

		// Layer 1
		this.step_1 = new lib.step_1();
		this.step_1.setTransform(321.1,520);

		this.step_2 = new lib.step_2();
		this.step_2.setTransform(319,535,1,1,0,0,0,-1.5,15);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.step_1}]}).to({state:[{t:this.step_2}]},1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(141.9,537.1,834,982.9);

	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 24,
		color: "#666666",
		manifest: []
	};



	// symbols:



	(lib.happy_005_1462075347435 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_013_1462075347448 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_017_1462075347447 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_087_1462075347458 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_090_1462075347435 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_115_1462092472703 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_131_1462092473021 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_132_1462092472982 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_180_1462092472814 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_182_1462092472793 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_207_1462075347456 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_240_1462092472756 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_248_1462092472856 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_252_1462075347452 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_299_1462092472769 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_312_1462092472750 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_315_1462075347453 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_333_1462092472936 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_370_1462075347450 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_379_1462092472911 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_426_1462075347462 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_438_1462075347440 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_440_1462092473061 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_447_1462092472737 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_455_1462075347437 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_478_1462092472753 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_497_1462092472715 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_520_1462075347437 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_522_1462092472741 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_527_1462075347444 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_544_1462092472706 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_545_1462092473098 = function() {
		this.spriteSheet = ss["me_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_557_1462092472808 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_565_1462075347445 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_600_1462092472758 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_647_1462075347434 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_688_1462075347440 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_729_1462092472903 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_807_1462075347436 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_824_1462075347446 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_849_1462075347454 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_858_1462075347449 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_871_1462092472802 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_882_1462075347438 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_911_1462075347435 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_923_1462092472749 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_938_1462075347452 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_946_1462075347457 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_950_1462092472970 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_952_1462075347463 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_957_1462092472701 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_988_1462092472849 = function() {
		this.spriteSheet = ss["me_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_997_1462092472747 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.w7 = function() {
		this.spriteSheet = ss["me_atlas_3"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_303_1462092472589 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_248_1462092472856();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,52,52);


	(lib.happy_194_1462092472588 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_950_1462092472970();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,51);


	(lib.happy_114_1462092472586 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_180_1462092472814();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,55,55);


	(lib.happy_097_1462092472585 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_312_1462092472750();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,52);


	(lib.happy_855_1462092472508 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_729_1462092472903();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_698_1462092472509 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_440_1462092473061();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_641_1462092472510 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_923_1462092472749();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_948_1462092472478 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_544_1462092472706();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,133);


	(lib.happy_636_1462075347338 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_981_1462075347389 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_207_1462075347456();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,34,42);


	(lib.happy_928_1462075347397 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_952_1462075347463();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86,272);


	(lib.happy_841_1462075347398 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_647_1462075347434();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,95,29);


	(lib.happy_759_1462075347391 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_858_1462075347449();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,31);


	(lib.happy_721_1462075347385 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_688_1462075347440();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,46,25);


	(lib.happy_680_1462075347388 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_824_1462075347446();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,57);


	(lib.happy_483_1462075347394 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_882_1462075347438();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14,15);


	(lib.happy_465_1462075347396 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_911_1462075347435();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,50);


	(lib.happy_453_1462075347400 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_849_1462075347454();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,48);


	(lib.happy_413_1462075347386 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_087_1462075347458();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,11);


	(lib.happy_250_1462075347392 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_252_1462075347452();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,133);


	(lib.happy_237_1462075347383 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_005_1462075347435();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,30);


	(lib.happy_956_1462075347404 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_455_1462075347437();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_825_1462075347408 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_527_1462075347444();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_817_1462075347415 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_090_1462075347435();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_780_1462075347413 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_520_1462075347437();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_350_1462075347411 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_017_1462075347447();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_296_1462075347416 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_426_1462075347462();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_209_1462075347410 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_370_1462075347450();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_197_1462075347418 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_807_1462075347436();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_125_1462075347403 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_565_1462075347445();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_002_1462075347407 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_946_1462075347457();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_931_1462075347422 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_315_1462075347453();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,275);


	(lib.happy_584_1462075347426 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_438_1462075347440();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,275);


	(lib.happy_238_1462075347429 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_938_1462075347452();
		this.instance.setTransform(-20.5,-20.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


	(lib.happy_973_1462092472574 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_379_1462092472911();
		this.instance.setTransform(-70.5,-70);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-70.5,-70,141,140);


	(lib.happy_861_1462092472575 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_957_1462092472701();
		this.instance.setTransform(-66,-68);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-66,-68,132,136);


	(lib.happy_815_1462092472572 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_132_1462092472982();
		this.instance.setTransform(-62.5,-68);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-62.5,-68,125,136);


	(lib.happy_766_1462092472547 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_115_1462092472703();
		this.instance.setTransform(-38,-48.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-38,-48.5,76,97);


	(lib.happy_530_1462092472554 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_871_1462092472802();
		this.instance.setTransform(-139.5,-143.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-139.5,-143.5,279,287);


	(lib.happy_385_1462092472550 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_478_1462092472753();
		this.instance.setTransform(-12.5,-7);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-7,25,14);


	(lib.happy_741_1462092472562 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_997_1462092472747();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,87,176);


	(lib.happy_862_1462092472559 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_240_1462092472756();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,135,134);


	(lib.happy_776_1462092472558 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_545_1462092473098();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


	(lib.happy_641_1462092472561 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_131_1462092473021();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,359,56);


	(lib.happy_898_1462092472567 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_299_1462092472769();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,27);


	(lib.happy_534_1462092472570 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_333_1462092472936();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,65);


	(lib.happy_152_1462092472548 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_557_1462092472808();
		this.instance.setTransform(-61.5,-66);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-61.5,-66,123,132);


	(lib.happy_905_1462092472542 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_182_1462092472793();
		this.instance.setTransform(-28.5,-20);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-28.5,-20,57,40);


	(lib.happy_447_1462092472546 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_600_1462092472758();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,16);


	(lib.happy_472_1462092472543 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_522_1462092472741();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_084_1462092472543 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_497_1462092472715();
		this.instance.setTransform(-11.5,-32);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11.5,-32,23,64);


	(lib.happy_015_1462092472555 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_447_1462092472737();
		this.instance.setTransform(19.9,-22.5,1,1,60);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.4,-22.5,58.9,45);


	(lib.happy_322_1462075347432 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_013_1462075347448();
		this.instance.setTransform(-292.5,-295.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-292.5,-295.5,585,591);


	(lib.happy_458_1462092472587 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// wo
		this.instance = new lib.happy_194_1462092472588();
		this.instance.setTransform(-27,-27.5,1,1,0,0,0,23.5,25.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-28.1,y:-28.6},2).to({x:-25.9,y:-26.4},2).to({x:-27,y:-28.6},2).to({y:-26.4},2).wait(1));

		// yao
		this.instance_1 = new lib.happy_303_1462092472589();
		this.instance_1.setTransform(22.5,-22,1,1,0,0,0,26,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:23.6,y:-23.1},2).to({x:21.4,y:-20.9},2).to({x:23.6,y:-22},2).to({x:21.4},2).wait(1));

		// xuan
		this.instance_2 = new lib.happy_114_1462092472586();
		this.instance_2.setTransform(-26,28.5,1,1,0,0,0,27.5,27.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-24.9,y:29.6},2).to({x:-27.1,y:27.4},2).to({x:-26,y:29.6},2).to({y:27.4},2).wait(1));

		// yaoy
		this.instance_3 = new lib.happy_097_1462092472585();
		this.instance_3.setTransform(26.5,28,1,1,0,0,0,28,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:26,y:27.5},2).to({x:27.1,y:28.6},2).to({x:26.5,y:27.5},2).to({x:27.1,y:28},2).wait(1));

		// ddd
		this.instance_4 = new lib.happy_988_1462092472849();
		this.instance_4.setTransform(-64.5,-64.5,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


	(lib.happy_051_1462092472582 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_458_1462092472587();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


	(lib.happy_893_1462075347381 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// cs1
		this.instance = new lib.happy_237_1462075347383();
		this.instance.setTransform(58.5,83.2,1,1,0,0,0,9.5,10.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,x:44.9,y:86.9},10).to({rotation:0,x:58.5,y:83.2},10).wait(1));

		// cs1_1
		this.instance_1 = new lib.happy_721_1462075347385();
		this.instance_1.setTransform(93.5,95.2,1,1,0,0,0,7.5,7.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:81.2,y:101.2},10).to({rotation:0,x:93.5,y:95.2},10).wait(1));

		// cs3
		this.instance_2 = new lib.happy_413_1462075347386();
		this.instance_2.setTransform(128.5,107.5,1,1,0,0,0,5.5,5.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:121,y:105},10).to({rotation:0,x:128.5,y:107.5},10).wait(1));

		// ct1
		this.instance_3 = new lib.happy_680_1462075347388();
		this.instance_3.setTransform(60.2,127.8,1,1,0,0,0,13.2,12.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-75,x:60.3},10).to({rotation:0,x:60.2},10).wait(1));

		// ct2
		this.instance_4 = new lib.happy_981_1462075347389();
		this.instance_4.setTransform(86.5,165.5,1,1,0,0,0,10.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:30,x:103.9,y:114.3},10).to({rotation:0,x:86.5,y:165.5},10).wait(1));

		// ct3
		this.instance_5 = new lib.happy_759_1462075347391();
		this.instance_5.setTransform(104,195.3,1,1,0,0,0,7.5,4.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15,x:104.8,y:148.1},10).to({rotation:0,x:104,y:195.3},10).wait(1));

		// caomei
		this.instance_6 = new lib.happy_250_1462075347392();
		this.instance_6.setTransform(77.2,141.5,1,1,0,0,0,77.2,112.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,y:136.5},10).to({rotation:0,y:141.5},10).wait(1));

		// css2
		this.instance_7 = new lib.happy_483_1462075347394();
		this.instance_7.setTransform(144.2,81.5,1,1,0,0,0,9.2,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:139.2,y:91.5},10).to({x:144.2,y:81.5},10).wait(1));

		// ctt2
		this.instance_8 = new lib.happy_465_1462075347396();
		this.instance_8.setTransform(125.2,159.3,1,1,-8.7,0,0,46.1,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:46,rotation:0,x:127,y:148},10).to({regX:46.1,rotation:-8.7,x:125.2,y:159.3},10).wait(1));

		// caomeiganzi
		this.instance_9 = new lib.happy_928_1462075347397();
		this.instance_9.setTransform(120,136,1,1,0,0,0,43,136);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// css1
		this.instance_10 = new lib.happy_841_1462075347398();
		this.instance_10.setTransform(59,69.5,1,1,0,0,0,14,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:14.6,rotation:7,x:59.1,y:74.6},10).to({regY:14.5,rotation:0,x:59,y:69.5},10).wait(1));

		// ctt1
		this.instance_11 = new lib.happy_453_1462075347400();
		this.instance_11.setTransform(87,127.6,1,1,9.8,0,0,13.1,14.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:13,regY:14,rotation:0,y:125},10).to({regX:13.1,regY:14.1,rotation:9.8,y:127.6},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,163,272);


	(lib.happy_883_1462075347402 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_125_1462075347403();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},10).to({regX:9,rotation:5.3,x:9,y:158},10).wait(1));

		// S1--
		this.instance_1 = new lib.happy_956_1462075347404();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},10).to({y:134},10).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_002_1462075347407();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},10).to({y:176},10).wait(1));

		// S2
		this.instance_3 = new lib.happy_825_1462075347408();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},10).to({rotation:23.5,x:80.8,y:122.6},10).wait(1));

		// t1-
		this.instance_4 = new lib.happy_209_1462075347410();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},5).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},5).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},5).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},5).wait(1));

		// t1--
		this.instance_5 = new lib.happy_350_1462075347411();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},10).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},10).wait(1));

		// t1---
		this.instance_6 = new lib.happy_780_1462075347413();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

		// t2--
		this.instance_7 = new lib.happy_817_1462075347415();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},5).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},5).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},5).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},5).wait(1));

		// t2-
		this.instance_8 = new lib.happy_296_1462075347416();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},10).to({rotation:48.3,x:97,y:188.6},10).wait(1));

		// t2---
		this.instance_9 = new lib.happy_197_1462075347418();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_433_1462075347421 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_931_1462075347422();
		this.instance.setTransform(0,0,1,1,0,0,0,13.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13.5,-137.5,27,275);


	(lib.happy_328_1462075347427 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_238_1462075347429();
		this.instance.setTransform(20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},129).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_110_1462075347424 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_584_1462075347426();
		this.instance.setTransform(0,0,1,1,0,0,0,12.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-137.5,25,275);


	(lib.happy_013_1462075347419 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_433_1462075347421();
		this.instance.setTransform(-0.2,0.1,1,1,175.9,0,0,-477.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-477.2,regY:0,rotation:-360,x:-0.3,y:0},496).wait(158));

		// 图层 4
		this.instance_1 = new lib.happy_110_1462075347424();
		this.instance_1.setTransform(-0.3,0.1,1,1,-64.7,0,0,-479.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,rotation:-720,y:0},496).to({_off:true},78).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.4,-502.9,834,675.1);


	(lib.happy_386_1462092472556 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_698_1462092472509();
		this.instance.setTransform(-16.8,11.6,1,1,44,0,0,9.1,9);

		this.instance_1 = new lib.happy_855_1462092472508();
		this.instance_1.setTransform(5.6,-13.9,1,1,0,0,0,30,8.8);

		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-29.6,-22.7,47.8,68.6);


	(lib.happy_915_1462092472560 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_152_1462092472548();
		this.instance.setTransform(61.5,66);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:60.4,y:64.9},2).to({x:62.6,y:67.1},2).to({x:61.5,y:64.9},2).to({y:67.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,123,132);


	(lib.happy_164_1462092472557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_861_1462092472575();
		this.instance.setTransform(66,68);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:66.9},2).to({y:69.1},2).to({x:67.1,y:66.9},2).to({x:64.9,y:69.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,132,136);


	(lib.happy_153_1462092472565 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_815_1462092472572();
		this.instance.setTransform(62.5,68);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:61.4,y:69.1},2).to({x:63.6},2).to({x:62.5,y:66.9},2).to({y:69.1},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,125,136);


	(lib.happy_122_1462092472566 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_973_1462092472574();
		this.instance.setTransform(70.5,70);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:68.9},2).to({x:69.4,y:71.1},2).to({x:70.5},2).to({y:68.9},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,141,140);


	(lib.happy_100_1462092472564 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_530_1462092472554();
		this.instance.setTransform(139.5,143.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:140.6,y:142.4},2).to({x:138.4,y:144.6},2).to({x:139.5,y:142.4},2).to({y:144.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,279,287);


	(lib.happy_007_1462092472562 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_766_1462092472547();
		this.instance.setTransform(38,48.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:39.1,y:47.4},2).to({x:36.9,y:49.6},2).to({x:38,y:47.4},2).to({y:49.6},2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,76,97);


	(lib.happy_807_1462092472541 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_084_1462092472543();
		this.instance.setTransform(11.5,32);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.2,scaleY:0.2,rotation:15,mode:"synched",startPosition:0},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,64);


	(lib.happy_399_1462092472540 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝 3
		this.instance = new lib.happy_447_1462092472546();
		this.instance.setTransform(23.8,1.3,0.189,0.189,0,0,0,8,8);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:8.1,regY:7.7,scaleX:0.66,scaleY:0.66,x:9,y:15.7},7,cjs.Ease.get(-0.5)).to({regX:7.7,scaleX:0.05,scaleY:0.05,x:-5.7,y:29.9},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(23));

		// 图层 19 拷贝 6
		this.instance_1 = new lib.happy_807_1462092472541("synched",0);
		this.instance_1.setTransform(43.5,4,0.145,0.145,0,-165.5,14.5,11.7,32.2);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,skewX:-173.2,skewY:6.8,x:42,y:23.8,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:11.6,regY:31.9,scaleX:0.15,scaleY:0.15,skewX:-180.5,skewY:-0.5,x:40.5,y:43.5,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// 图层 19 拷贝 5
		this.instance_2 = new lib.happy_807_1462092472541("synched",0);
		this.instance_2.setTransform(40.8,0.7,0.22,0.22,0,-143,37,11.6,32.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:32.2,scaleX:0.61,scaleY:0.61,skewX:-154.7,skewY:25.3,x:28.6,y:26,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:11.2,regY:32,scaleX:0.13,scaleY:0.13,skewX:-166.4,skewY:13.6,x:16.2,y:51.2,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(34.5,-6.3,12.5,14.3);


	(lib.happy_244_1462092472544 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_905_1462092472542();
		this.instance.setTransform(28.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.09,scaleY:0.09},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,57,40);


	(lib.happy_238_1462092472545 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 椭圆 1 拷贝 2
		this.instance = new lib.happy_447_1462092472546("synched",0);
		this.instance.setTransform(29.3,63.2,0.12,0.12,0,0,0,7.9,7.9);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:8.2,scaleX:0.58,scaleY:0.58,x:45.2,y:53},7,cjs.Ease.get(-0.5)).to({regY:7.8,scaleX:0.14,scaleY:0.14,x:56.6,y:52.9},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(22));

		// 图层 19 拷贝 4
		this.instance_1 = new lib.happy_807_1462092472541("synched",0);
		this.instance_1.setTransform(13.6,69.2,0.09,0.09,108.8,0,0,17.7,17.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:17.6,scaleX:0.63,scaleY:0.63,rotation:101.3,x:36.3,y:69.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.9,scaleX:0.7,scaleY:0.7,rotation:93.8,x:59.1,y:70.4,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(23));

		// ss4
		this.instance_2 = new lib.happy_807_1462092472541("synched",0);
		this.instance_2.setTransform(6.4,57.6,0.09,0.09,0,22.8,-157.2,18,17.2);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regY:17.4,scaleX:0.64,scaleY:0.64,skewX:44.8,skewY:-135.2,x:25.5,y:27.1,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:17.9,regY:17.7,scaleX:0.5,scaleY:0.5,skewX:37.8,skewY:-142.2,x:36.7,y:10.6,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(24));

		// ss3
		this.instance_3 = new lib.happy_244_1462092472544("synched",0);
		this.instance_3.setTransform(5,64.6,0.087,0.087,0,0,0,28.6,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:28.4,regY:19.9,scaleX:1,scaleY:1,rotation:-14.8,x:26.8,y:38.9,startPosition:7},7,cjs.Ease.get(-0.5)).to({regX:28.6,regY:20,rotation:-15,x:44.6,y:22.7,startPosition:14},7,cjs.Ease.get(0.5)).to({_off:true},1).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(2.5,62.9,5,3.5);


	(lib.happy_045_1462092472552 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// xiaotui.png
		this.instance = new lib.happy_015_1462092472555();
		this.instance.setTransform(-7.1,-14.4,1,1,-45,0,0,19.3,-10.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.2,rotation:-15,x:-4.2,y:-2.7},4,cjs.Ease.get(-0.5)).to({regX:19.3,rotation:-45,x:-7.1,y:-14.4},4,cjs.Ease.get(0.5)).to({regX:19.2,rotation:-15,x:-4.2,y:-2.7},4,cjs.Ease.get(-0.5)).to({regX:19.3,rotation:-45,x:-7.1,y:-14.4},4,cjs.Ease.get(0.5)).wait(1));

		// jyz.png
		this.instance_1 = new lib.happy_385_1462092472550();
		this.instance_1.setTransform(-31.4,24.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:-41.2,y:20.2},4,cjs.Ease.get(-0.5)).to({rotation:0,x:-31.4,y:24.1},4,cjs.Ease.get(0.5)).to({rotation:15,x:-41.2,y:20.2},4,cjs.Ease.get(-0.5)).to({rotation:0,x:-31.4,y:24.1},4,cjs.Ease.get(0.5)).wait(1));

		// t1- 100
		this.instance_2 = new lib.happy_641_1462092472510();
		this.instance_2.setTransform(27.4,-22.8,1,1,79.5,0,0,12,14.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:14.7,scaleX:1,scaleY:1,rotation:60.9,x:27.2,y:-22.7},4,cjs.Ease.get(-0.5)).to({regY:14.6,scaleX:1,scaleY:1,rotation:79.5,x:27.4,y:-22.8},4,cjs.Ease.get(0.5)).to({regY:14.7,scaleX:1,scaleY:1,rotation:60.9,x:27.2,y:-22.7},4,cjs.Ease.get(-0.5)).to({regY:14.6,scaleX:1,scaleY:1,rotation:79.5,x:27.4,y:-22.8},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-49.9,-37.1,93.9,80.5);


	(lib.happy_961_1462092472571 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 2
		this.instance = new lib.happy_898_1462092472567();
		this.instance.setTransform(-46.7,-47.1,1,1,0,0,0,11.5,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(2));

		// 图层 1
		this.instance_1 = new lib.happy_534_1462092472570();
		this.instance_1.setTransform(-14.5,-18.1,1,1,0,0,0,28,32.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17));

		// sbi
		this.instance_2 = new lib.happy_386_1462092472556();
		this.instance_2.setTransform(29.4,21,1,1,0,90,-90,0,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-58.2,-60.6,100.8,111.3);


	(lib.happy_190_1462092472563 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_045_1462092472552("synched",0);
		this.instance.setTransform(74.3,149.8,1,1,7.4,0,0,28.9,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,startPosition:4},4,cjs.Ease.get(-0.49)).to({rotation:-142.6,x:74,startPosition:8},4,cjs.Ease.get(0.5)).to({rotation:-60,x:74.3,startPosition:12},4,cjs.Ease.get(-0.49)).to({rotation:7.4,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 3
		this.instance_1 = new lib.happy_472_1462092472543("synched",0);
		this.instance_1.setTransform(87.7,83.5,1,1,0,17.7,-162.3,59.4,60);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,skewX:2.6,skewY:-177.4,x:87.8},4,cjs.Ease.get(-0.49)).to({scaleX:1,scaleY:1,skewX:17.7,skewY:-162.3,x:87.7},4,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,skewX:2.6,skewY:-177.4,x:87.8},4,cjs.Ease.get(-0.49)).to({scaleX:1,scaleY:1,skewX:17.7,skewY:-162.3,x:87.7},4,cjs.Ease.get(0.5)).wait(1));

		// xjh
		this.instance_2 = new lib.happy_741_1462092472562();
		this.instance_2.setTransform(95.5,90,1,1,0,0,0,43.5,88);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

		// 图层 2
		this.instance_3 = new lib.happy_472_1462092472543("synched",0);
		this.instance_3.setTransform(82.1,75,1,1,21.6,0,0,59.3,60);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:59.2,scaleX:1,scaleY:1,rotation:36.5,x:82,y:74.9},4,cjs.Ease.get(-0.49)).to({regX:59.3,scaleX:1,scaleY:1,rotation:21.6,x:82.1,y:75},4,cjs.Ease.get(0.5)).to({regX:59.2,scaleX:1,scaleY:1,rotation:36.5,x:82,y:74.9},4,cjs.Ease.get(-0.49)).to({regX:59.3,scaleX:1,scaleY:1,rotation:21.6,x:82.1,y:75},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 29 拷贝 8
		this.instance_4 = new lib.happy_045_1462092472552("synched",0);
		this.instance_4.setTransform(74.2,149.9,1,1,-137.2,0,0,28.8,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.4,scaleX:1,scaleY:1,rotation:-69.4,x:74.4,y:150,startPosition:4},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:12.8,x:74.1,startPosition:8},4,cjs.Ease.get(0.5)).to({regY:-20.4,scaleX:1,scaleY:1,rotation:-69.4,x:74.4,startPosition:12},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:-137.2,x:74.2,y:149.9,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.6,-2.6,167.3,204.1);


	(lib.happy_940_1462092472568 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_045_1462092472552("synched",0);
		this.instance.setTransform(89.8,157.1,1,1,7.4,0,0,28.9,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,startPosition:4},4,cjs.Ease.get(-0.49)).to({rotation:-124.8,startPosition:8},4,cjs.Ease.get(0.5)).to({rotation:-60,startPosition:12},4,cjs.Ease.get(-0.49)).to({rotation:7.4,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 2
		this.instance_1 = new lib.happy_386_1462092472556();
		this.instance_1.setTransform(136.1,107.9,1,1,0,-30,150,-0.1,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:90,skewY:270,x:136.2,y:108.1},8,cjs.Ease.get(-0.5)).to({skewX:-30,skewY:150,x:136.1,y:107.9},8,cjs.Ease.get(0.5)).wait(1));

		// Vector Smart Object
		this.instance_2 = new lib.happy_948_1462092472478();
		this.instance_2.setTransform(81.8,163,1.049,1.049,0,14.8,-165.2,78.5,121.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05,x:81.9},8).to({scaleX:1.05,scaleY:1.05,x:81.8},8).wait(1));

		// laba
		this.instance_3 = new lib.happy_961_1462092472571();
		this.instance_3.setTransform(85.3,93,1,1,0,0,0,31.7,25.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-13.4},4,cjs.Ease.get(-0.5)).to({rotation:0},4,cjs.Ease.get(0.5)).to({rotation:-13.4},4,cjs.Ease.get(-0.49)).to({rotation:0},4,cjs.Ease.get(0.48)).wait(1));

		// 图层 29 拷贝 8
		this.instance_4 = new lib.happy_045_1462092472552("synched",0);
		this.instance_4.setTransform(100.9,159.4,1,1,-137.2,0,0,28.8,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:4},4,cjs.Ease.get(-0.49)).to({regX:28.9,regY:-20.6,scaleX:1,scaleY:1,rotation:22.1,x:100.9,startPosition:8},4,cjs.Ease.get(0.5)).to({regX:28.8,regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:12},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:-137.2,x:100.9,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.6,7,198.7,201.8);


	(lib.happy_601_1462092472569 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_045_1462092472552("synched",0);
		this.instance.setTransform(89.8,157.1,1,1,7.4,0,0,28.9,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,startPosition:4},4,cjs.Ease.get(-0.49)).to({rotation:-124.8,startPosition:8},4,cjs.Ease.get(0.5)).to({rotation:-60,startPosition:12},4,cjs.Ease.get(-0.49)).to({rotation:7.4,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

		// 图层 2
		this.instance_1 = new lib.happy_386_1462092472556();
		this.instance_1.setTransform(136.1,107.9,1,1,0,-30,150,-0.1,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:90,skewY:270,x:136.2,y:108.1},8,cjs.Ease.get(-0.5)).to({skewX:-30,skewY:150,x:136.1,y:107.9},8,cjs.Ease.get(0.5)).wait(1));

		// Vector Smart Object
		this.instance_2 = new lib.happy_862_1462092472559();
		this.instance_2.setTransform(103.3,112.5,1,1,0,0,0,67.5,67);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

		// 图层 4
		this.instance_3 = new lib.happy_386_1462092472556();
		this.instance_3.setTransform(72.4,108,1,1,0,141,-39,0,-9.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,skewX:90,skewY:-90,x:136.2,y:108.1},8,cjs.Ease.get(-0.5)).to({regX:0,skewX:141,skewY:-39,x:72.4,y:108},8,cjs.Ease.get(0.5)).wait(1));

		// 图层 29 拷贝 8
		this.instance_4 = new lib.happy_045_1462092472552("synched",0);
		this.instance_4.setTransform(100.9,159.4,1,1,-137.2,0,0,28.8,-20.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:4},4,cjs.Ease.get(-0.49)).to({regX:28.9,regY:-20.6,scaleX:1,scaleY:1,rotation:22.1,x:100.9,startPosition:8},4,cjs.Ease.get(0.5)).to({regX:28.8,regY:-20.5,scaleX:1,scaleY:1,rotation:-54.4,x:101,startPosition:12},4,cjs.Ease.get(-0.49)).to({regY:-20.6,scaleX:1,scaleY:1,rotation:-137.2,x:100.9,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(11,45.5,178.4,163.3);


	(lib.happy_282_1462092472549 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_601_1462092472569("synched",0);
		this.instance.setTransform(0,12.7,1,1,0,0,0,97,110.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.09,y:-4.9,startPosition:4},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:8},4,cjs.Ease.get(0.51)).to({scaleY:1.09,y:-4.9,startPosition:12},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:16},4,cjs.Ease.get(0.51)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-86,-52.4,178.4,163.3);


	(lib.happy_272_1462092472551 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_190_1462092472563("synched",0);
		this.instance.setTransform(-4.7,100.7,1,1,0,0,0,78.5,207.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:207.5,scaleY:1.05,y:74.7,startPosition:4},4,cjs.Ease.get(-0.5)).to({regY:207.6,scaleY:1,y:100.7,startPosition:8},4,cjs.Ease.get(0.5)).to({regY:207.5,scaleY:1.05,y:74.7,startPosition:12},4,cjs.Ease.get(-0.5)).to({regY:207.6,scaleY:1,y:100.7,startPosition:16},4,cjs.Ease.get(0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-87.8,-109.6,167.3,204.1);


	(lib.happy_378_1462092472573 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_940_1462092472568("synched",0);
		this.instance.setTransform(0,12.7,1,1,0,0,0,97,110.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.09,y:-4.9,startPosition:4},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:8},4,cjs.Ease.get(0.51)).to({scaleY:1.09,y:-4.9,startPosition:12},4,cjs.Ease.get(-0.51)).to({scaleY:1,y:12.7,startPosition:16},4,cjs.Ease.get(0.51)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-101.6,-90.9,198.7,201.8);


	(lib.happy_220_1462092472553 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_20 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

		// dx
		this.instance = new lib.happy_100_1462092472564("synched",8,false);
		this.instance.setTransform(-2.5,-194.5,1,1,0,0,0,139.5,143.5);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(15));

		// jtt
		this.instance_1 = new lib.happy_007_1462092472562();
		this.instance_1.setTransform(176,-401.5,1,1,0,0,0,38,48.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

		// w9
		this.instance_2 = new lib.happy_641_1462092472561();
		this.instance_2.setTransform(-8.5,229,1,1,0,0,0,179.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

		// 图层 14
		this.instance_3 = new lib.happy_399_1462092472540();
		this.instance_3.setTransform(158.4,-129.3,1.922,1.922,80.7,0,0,109.2,-139.1);

		this.instance_4 = new lib.happy_238_1462092472545();
		this.instance_4.setTransform(-237.9,179.9,1.695,1.695,0,0,0,-209,274);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(21));

		// ben
		this.instance_5 = new lib.happy_153_1462092472565();
		this.instance_5.setTransform(-67.5,-277,0.134,0.134,0,0,0,62.4,68);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:62.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(7));

		// zou
		this.instance_6 = new lib.happy_164_1462092472557();
		this.instance_6.setTransform(56,-261,0.065,0.065,0,0,0,65.7,68);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({regX:66,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(5));

		// xiang
		this.instance_7 = new lib.happy_122_1462092472566();
		this.instance_7.setTransform(-62.5,-140,0.159,0.159,0,0,0,70.7,70);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({regX:70.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(3));

		// gao
		this.instance_8 = new lib.happy_915_1462092472560();
		this.instance_8.setTransform(73.5,-120,0.108,0.108,0,0,0,61.4,66);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:61.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(1));

		// cma
		this.instance_9 = new lib.happy_378_1462092472573();
		this.instance_9.setTransform(-138,52.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// xja
		this.instance_10 = new lib.happy_272_1462092472551();
		this.instance_10.setTransform(-8.7,179.4,1,1,0,0,0,0,103.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

		// lamm
		this.instance_11 = new lib.happy_282_1462092472549();
		this.instance_11.setTransform(120.7,56.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

		// dise
		this.instance_12 = new lib.happy_776_1462092472558();
		this.instance_12.setTransform(0,0,1,1,0,0,0,320,520);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-320,-520,640,1040);


	// stage content:
	(lib.me = function() {
		this.initialize();

		// Layer 2
		this.shareMC = new lib.happy_220_1462092472553();
		this.shareMC.setTransform(320,520);

		// Layer 1
		this.shareBtn = new lib.happy_051_1462092472582();
		this.shareBtn.setTransform(320,878.1);

		this.instance = new lib.w7();
		this.instance.setTransform(151.5,93);

		this.instance_1 = new lib.happy_322_1462075347432();
		this.instance_1.setTransform(320.5,446.5);

		this.motionMC = new lib.happy_636_1462075347338();
		this.motionMC.setTransform(320,444,1,1,0,0,0,270,270);

		this.instance_2 = new lib.happy_893_1462075347381();
		this.instance_2.setTransform(556.5,921.9,1,1,0,0,0,81.5,136);

		this.instance_3 = new lib.happy_883_1462075347402();
		this.instance_3.setTransform(102.5,902.1,0.85,0.85,0,0,0,57,109);

		this.instance_4 = new lib.happy_013_1462075347419();
		this.instance_4.setTransform(320.3,520.1);

		this.instance_5 = new lib.happy_328_1462075347427();
		this.instance_5.setTransform(382.9,48.2,1,1,0,0,0,20.5,20.5);

		this.instance_6 = new lib.happy_328_1462075347427();
		this.instance_6.setTransform(103.2,779.2,1,1,0,0,0,20.5,20.5);

		this.instance_7 = new lib.happy_328_1462075347427();
		this.instance_7.setTransform(472.5,983.5,1,1,0,0,0,20.5,20.5);

		this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.motionMC,this.instance_1,this.instance,this.shareBtn,this.shareMC);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(140.8,520,834,1057.9);

	});

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/muban1/happy_110_1461851171443.png", id:"happy_110_1461851171443"},
			{src:"images/muban1/happy_138_1461851171445.png", id:"happy_138_1461851171445"},
			{src:"images/muban1/happy_186_1461851171441.png", id:"happy_186_1461851171441"},
			{src:"images/muban1/happy_262_1461851171445.png", id:"happy_262_1461851171445"},
			{src:"images/muban1/happy_311_1461851171442.png", id:"happy_311_1461851171442"},
			{src:"images/muban1/happy_355_1461851171443.png", id:"happy_355_1461851171443"},
			{src:"images/muban1/happy_373_1461851171445.png", id:"happy_373_1461851171445"},
			{src:"images/muban1/happy_397_1461851171441.png", id:"happy_397_1461851171441"},
			{src:"images/muban1/happy_459_1461851171446.png", id:"happy_459_1461851171446"},
			{src:"images/muban1/happy_508_1461851171444.png", id:"happy_508_1461851171444"},
			{src:"images/muban1/happy_540_1461851171446.png", id:"happy_540_1461851171446"},
			{src:"images/muban1/happy_577_1461851171446.png", id:"happy_577_1461851171446"},
			{src:"images/muban1/happy_586_1461851171444.png", id:"happy_586_1461851171444"},
			{src:"images/muban1/happy_595_1461851171444.png", id:"happy_595_1461851171444"},
			{src:"images/muban1/happy_604_1461851171443.png", id:"happy_604_1461851171443"},
			{src:"images/muban1/happy_625_1461851171441.png", id:"happy_625_1461851171441"},
			{src:"images/muban1/happy_666_1461851171442.png", id:"happy_666_1461851171442"},
			{src:"images/muban1/happy_717_1461851171443.png", id:"happy_717_1461851171443"},
			{src:"images/muban1/happy_752_1461851171442.png", id:"happy_752_1461851171442"},
			{src:"images/muban1/happy_789_1461851171445.png", id:"happy_789_1461851171445"}
		]
	};



	// symbols:



	(lib.happy_110_1461851171443 = function() {
		this.initialize(img.happy_110_1461851171443);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_138_1461851171445 = function() {
		this.initialize(img.happy_138_1461851171445);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_186_1461851171441 = function() {
		this.initialize(img.happy_186_1461851171441);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_262_1461851171445 = function() {
		this.initialize(img.happy_262_1461851171445);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_311_1461851171442 = function() {
		this.initialize(img.happy_311_1461851171442);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_355_1461851171443 = function() {
		this.initialize(img.happy_355_1461851171443);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_373_1461851171445 = function() {
		this.initialize(img.happy_373_1461851171445);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_397_1461851171441 = function() {
		this.initialize(img.happy_397_1461851171441);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_459_1461851171446 = function() {
		this.initialize(img.happy_459_1461851171446);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_508_1461851171444 = function() {
		this.initialize(img.happy_508_1461851171444);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_540_1461851171446 = function() {
		this.initialize(img.happy_540_1461851171446);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_577_1461851171446 = function() {
		this.initialize(img.happy_577_1461851171446);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_586_1461851171444 = function() {
		this.initialize(img.happy_586_1461851171444);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_595_1461851171444 = function() {
		this.initialize(img.happy_595_1461851171444);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_604_1461851171443 = function() {
		this.initialize(img.happy_604_1461851171443);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_625_1461851171441 = function() {
		this.initialize(img.happy_625_1461851171441);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_666_1461851171442 = function() {
		this.initialize(img.happy_666_1461851171442);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_717_1461851171443 = function() {
		this.initialize(img.happy_717_1461851171443);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_752_1461851171442 = function() {
		this.initialize(img.happy_752_1461851171442);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_789_1461851171445 = function() {
		this.initialize(img.happy_789_1461851171445);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_979_1461851171421 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_355_1461851171443();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_939_1461851171435 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_577_1461851171446();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_878_1461851171436 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_459_1461851171446();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_843_1461851171438 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_586_1461851171444();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_740_1461851171412 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_311_1461851171442();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_731_1461851171427 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_262_1461851171445();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_712_1461851171433 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_540_1461851171446();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_681_1461851171432 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_138_1461851171445();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_603_1461851171420 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_604_1461851171443();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_596_1461851171431 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_789_1461851171445();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_489_1461851171423 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_397_1461851171441();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_417_1461851171415 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_752_1461851171442();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_407_1461851171425 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_595_1461851171444();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_376_1461851171411 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_625_1461851171441();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_354_1461851171409 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_186_1461851171441();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_330_1461851171439 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_328_1461851171414 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_666_1461851171442();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_106_1461851171418 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_717_1461851171443();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_051_1461851171428 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_373_1461851171445();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_033_1461851171417 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_110_1461851171443();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_019_1461851171424 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_508_1461851171444();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	// stage content:
	(lib.muban1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// F10
		this.instance = new lib.happy_843_1461851171438();
		this.instance.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(3));

		// F9
		this.instance_1 = new lib.happy_878_1461851171436();
		this.instance_1.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// F8
		this.instance_2 = new lib.happy_939_1461851171435();
		this.instance_2.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// F7
		this.instance_3 = new lib.happy_712_1461851171433();
		this.instance_3.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// F6
		this.instance_4 = new lib.happy_681_1461851171432();
		this.instance_4.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// F5
		this.instance_5 = new lib.happy_596_1461851171431();
		this.instance_5.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// F4
		this.instance_6 = new lib.happy_051_1461851171428();
		this.instance_6.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// F3
		this.instance_7 = new lib.happy_731_1461851171427();
		this.instance_7.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// F2
		this.instance_8 = new lib.happy_407_1461851171425();
		this.instance_8.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// F1
		this.instance_9 = new lib.happy_019_1461851171424();
		this.instance_9.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},3).wait(27));

		// ren
		this.renMC = new lib.happy_330_1461851171439();
		this.renMC.setTransform(189.5,211.5,1,1,0,0,0,189.5,211.5);

		this.timeline.addTween(cjs.Tween.get(this.renMC).wait(30));

		// 1010
		this.instance_10 = new lib.happy_489_1461851171423();
		this.instance_10.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).wait(3));

		// 99
		this.instance_11 = new lib.happy_979_1461851171421();
		this.instance_11.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// 88
		this.instance_12 = new lib.happy_603_1461851171420();
		this.instance_12.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// 77
		this.instance_13 = new lib.happy_106_1461851171418();
		this.instance_13.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// 66
		this.instance_14 = new lib.happy_033_1461851171417();
		this.instance_14.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// 55
		this.instance_15 = new lib.happy_417_1461851171415();
		this.instance_15.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// 44
		this.instance_16 = new lib.happy_328_1461851171414();
		this.instance_16.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_16._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// 33
		this.instance_17 = new lib.happy_740_1461851171412();
		this.instance_17.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_17._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// 22
		this.instance_18 = new lib.happy_376_1461851171411();
		this.instance_18.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// 11
		this.instance_19 = new lib.happy_354_1461851171409();
		this.instance_19.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},3).wait(27));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,540,540);

	});

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/muban2/happy_013_1461853347618.png", id:"happy_013_1461853347618"},
			{src:"images/muban2/happy_030_1461853347615.jpg", id:"happy_030_1461853347615"},
			{src:"images/muban2/happy_042_1461853347617.png", id:"happy_042_1461853347617"},
			{src:"images/muban2/happy_072_1461853347616.png", id:"happy_072_1461853347616"},
			{src:"images/muban2/happy_111_1461853347614.jpg", id:"happy_111_1461853347614"},
			{src:"images/muban2/happy_159_1461853347613.jpg", id:"happy_159_1461853347613"},
			{src:"images/muban2/happy_165_1461853347617.png", id:"happy_165_1461853347617"},
			{src:"images/muban2/happy_180_1461853347617.png", id:"happy_180_1461853347617"},
			{src:"images/muban2/happy_245_1461853347614.jpg", id:"happy_245_1461853347614"},
			{src:"images/muban2/happy_304_1461853347616.jpg", id:"happy_304_1461853347616"},
			{src:"images/muban2/happy_319_1461853347615.jpg", id:"happy_319_1461853347615"},
			{src:"images/muban2/happy_356_1461853347615.jpg", id:"happy_356_1461853347615"},
			{src:"images/muban2/happy_463_1461853347616.png", id:"happy_463_1461853347616"},
			{src:"images/muban2/happy_488_1461853347616.png", id:"happy_488_1461853347616"},
			{src:"images/muban2/happy_582_1461853347618.png", id:"happy_582_1461853347618"},
			{src:"images/muban2/happy_625_1461853347618.png", id:"happy_625_1461853347618"},
			{src:"images/muban2/happy_765_1461853347615.jpg", id:"happy_765_1461853347615"},
			{src:"images/muban2/happy_856_1461853347614.jpg", id:"happy_856_1461853347614"},
			{src:"images/muban2/happy_900_1461853347618.png", id:"happy_900_1461853347618"},
			{src:"images/muban2/happy_915_1461853347613.jpg", id:"happy_915_1461853347613"}
		]
	};



	// symbols:



	(lib.happy_013_1461853347618 = function() {
		this.initialize(img.happy_013_1461853347618);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,515);


	(lib.happy_030_1461853347615 = function() {
		this.initialize(img.happy_030_1461853347615);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_042_1461853347617 = function() {
		this.initialize(img.happy_042_1461853347617);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_072_1461853347616 = function() {
		this.initialize(img.happy_072_1461853347616);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,498);


	(lib.happy_111_1461853347614 = function() {
		this.initialize(img.happy_111_1461853347614);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_159_1461853347613 = function() {
		this.initialize(img.happy_159_1461853347613);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_165_1461853347617 = function() {
		this.initialize(img.happy_165_1461853347617);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,537);


	(lib.happy_180_1461853347617 = function() {
		this.initialize(img.happy_180_1461853347617);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,526);


	(lib.happy_245_1461853347614 = function() {
		this.initialize(img.happy_245_1461853347614);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_304_1461853347616 = function() {
		this.initialize(img.happy_304_1461853347616);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_319_1461853347615 = function() {
		this.initialize(img.happy_319_1461853347615);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_356_1461853347615 = function() {
		this.initialize(img.happy_356_1461853347615);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_463_1461853347616 = function() {
		this.initialize(img.happy_463_1461853347616);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_488_1461853347616 = function() {
		this.initialize(img.happy_488_1461853347616);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_582_1461853347618 = function() {
		this.initialize(img.happy_582_1461853347618);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,496);


	(lib.happy_625_1461853347618 = function() {
		this.initialize(img.happy_625_1461853347618);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,497);


	(lib.happy_765_1461853347615 = function() {
		this.initialize(img.happy_765_1461853347615);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_856_1461853347614 = function() {
		this.initialize(img.happy_856_1461853347614);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_900_1461853347618 = function() {
		this.initialize(img.happy_900_1461853347618);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,502);


	(lib.happy_915_1461853347613 = function() {
		this.initialize(img.happy_915_1461853347613);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_857_1461853347608 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_625_1461853347618();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,497);


	(lib.happy_784_1461853347610 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_072_1461853347616();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,498);


	(lib.happy_772_1461853347583 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_856_1461853347614();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_744_1461853347589 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_319_1461853347615();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_743_1461853347595 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_488_1461853347616();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_741_1461853347590 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_304_1461853347616();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_672_1461853347606 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_582_1461853347618();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,496);


	(lib.happy_650_1461853347597 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_165_1461853347617();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,537);


	(lib.happy_631_1461853347592 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_915_1461853347613();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_538_1461853347584 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_030_1461853347615();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_467_1461853347579 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_111_1461853347614();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_461_1461853347599 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_180_1461853347617();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,526);


	(lib.happy_421_1461853347581 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_245_1461853347614();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_413_1461853347611 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_359_1461853347604 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_900_1461853347618();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,502);


	(lib.happy_340_1461853347587 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_356_1461853347615();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_325_1461853347578 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_159_1461853347613();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_283_1461853347593 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_463_1461853347616();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_140_1461853347586 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_765_1461853347615();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_137_1461853347596 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_042_1461853347617();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_009_1461853347601 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_013_1461853347618();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,515);


	// stage content:
	(lib.muban2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 2
		this.instance = new lib.happy_784_1461853347610();
		this.instance.setTransform(270,291,1,1,0,0,0,270,249);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(2));

		// FG9
		this.instance_1 = new lib.happy_857_1461853347608();
		this.instance_1.setTransform(270,291.5,1,1,0,0,0,270,248.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({_off:true},2).wait(2));

		// FG8
		this.instance_2 = new lib.happy_672_1461853347606();
		this.instance_2.setTransform(270,292,1,1,0,0,0,270,248);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true},2).wait(4));

		// FG7
		this.instance_3 = new lib.happy_359_1461853347604();
		this.instance_3.setTransform(270,289,1,1,0,0,0,270,251);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({_off:true},2).wait(6));

		// FG6
		this.instance_4 = new lib.happy_009_1461853347601();
		this.instance_4.setTransform(270,282.5,1,1,0,0,0,270,257.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({_off:true},2).wait(8));

		// FG5
		this.instance_5 = new lib.happy_461_1461853347599();
		this.instance_5.setTransform(270,277,1,1,0,0,0,270,263);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({_off:true},2).wait(10));

		// FG4
		this.instance_6 = new lib.happy_650_1461853347597();
		this.instance_6.setTransform(270,271.5,1,1,0,0,0,270,268.5);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},2).wait(12));

		// FG3
		this.instance_7 = new lib.happy_137_1461853347596();
		this.instance_7.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({_off:true},2).wait(14));

		// FG2
		this.instance_8 = new lib.happy_743_1461853347595();
		this.instance_8.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},2).wait(16));

		// FG1
		this.instance_9 = new lib.happy_283_1461853347593();
		this.instance_9.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},2).wait(18));

		// ren
		this.renMC = new lib.happy_413_1461853347611();

		this.timeline.addTween(cjs.Tween.get(this.renMC).wait(20));

		// BG10
		this.instance_10 = new lib.happy_631_1461853347592();
		this.instance_10.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).wait(2));

		// BG9
		this.instance_11 = new lib.happy_741_1461853347590();
		this.instance_11.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({_off:true},2).wait(2));

		// BG8
		this.instance_12 = new lib.happy_744_1461853347589();
		this.instance_12.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({_off:true},2).wait(4));

		// BG7
		this.instance_13 = new lib.happy_340_1461853347587();
		this.instance_13.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).to({_off:true},2).wait(6));

		// BG6
		this.instance_14 = new lib.happy_140_1461853347586();
		this.instance_14.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({_off:true},2).wait(8));

		// BG5
		this.instance_15 = new lib.happy_538_1461853347584();
		this.instance_15.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({_off:true},2).wait(10));

		// BG4
		this.instance_16 = new lib.happy_772_1461853347583();
		this.instance_16.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_16._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).to({_off:true},2).wait(12));

		// BG3
		this.instance_17 = new lib.happy_421_1461853347581();
		this.instance_17.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_17._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({_off:true},2).wait(14));

		// BG2
		this.instance_18 = new lib.happy_467_1461853347579();
		this.instance_18.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({_off:false},0).to({_off:true},2).wait(16));

		// BG1
		this.instance_19 = new lib.happy_325_1461853347578();
		this.instance_19.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},2).wait(18));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,540,540);

	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/muban3/happy_049_1461853309536.png", id:"happy_049_1461853309536"},
			{src:"images/muban3/happy_163_1461853309537.png", id:"happy_163_1461853309537"},
			{src:"images/muban3/happy_226_1461853309536.png", id:"happy_226_1461853309536"},
			{src:"images/muban3/happy_234_1461853309536.png", id:"happy_234_1461853309536"},
			{src:"images/muban3/happy_244_1461853309537.png", id:"happy_244_1461853309537"},
			{src:"images/muban3/happy_255_1461853309535.jpg", id:"happy_255_1461853309535"},
			{src:"images/muban3/happy_382_1461853309537.png", id:"happy_382_1461853309537"},
			{src:"images/muban3/happy_472_1461853309537.png", id:"happy_472_1461853309537"},
			{src:"images/muban3/happy_479_1461853309537.png", id:"happy_479_1461853309537"},
			{src:"images/muban3/happy_629_1461853309535.png", id:"happy_629_1461853309535"},
			{src:"images/muban3/happy_990_1461853309536.png", id:"happy_990_1461853309536"}
		]
	};



	// symbols:



	(lib.happy_049_1461853309536 = function() {
		this.initialize(img.happy_049_1461853309536);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_163_1461853309537 = function() {
		this.initialize(img.happy_163_1461853309537);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_226_1461853309536 = function() {
		this.initialize(img.happy_226_1461853309536);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_234_1461853309536 = function() {
		this.initialize(img.happy_234_1461853309536);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_244_1461853309537 = function() {
		this.initialize(img.happy_244_1461853309537);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_255_1461853309535 = function() {
		this.initialize(img.happy_255_1461853309535);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_382_1461853309537 = function() {
		this.initialize(img.happy_382_1461853309537);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_472_1461853309537 = function() {
		this.initialize(img.happy_472_1461853309537);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_479_1461853309537 = function() {
		this.initialize(img.happy_479_1461853309537);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_629_1461853309535 = function() {
		this.initialize(img.happy_629_1461853309535);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_990_1461853309536 = function() {
		this.initialize(img.happy_990_1461853309536);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_930_1461853309534 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_849_1461853309517 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_629_1461853309535();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_842_1461853309520 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_226_1461853309536();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_758_1461853309527 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_163_1461853309537();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_714_1461853309521 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_990_1461853309536();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_710_1461853309515 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_255_1461853309535();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_679_1461853309523 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_472_1461853309537();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_577_1461853309528 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_382_1461853309537();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_391_1461853309518 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_234_1461853309536();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_362_1461853309529 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_479_1461853309537();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_157_1461853309531 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_049_1461853309536();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_108_1461853309525 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_244_1461853309537();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	// stage content:
	(lib.muban3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_157_1461853309531();
		this.instance.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(3));

		// FG9
		this.instance_1 = new lib.happy_362_1461853309529();
		this.instance_1.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// FG8
		this.instance_2 = new lib.happy_577_1461853309528();
		this.instance_2.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// FG7
		this.instance_3 = new lib.happy_758_1461853309527();
		this.instance_3.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// FG6
		this.instance_4 = new lib.happy_108_1461853309525();
		this.instance_4.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// FG5
		this.instance_5 = new lib.happy_679_1461853309523();
		this.instance_5.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// FG4
		this.instance_6 = new lib.happy_714_1461853309521();
		this.instance_6.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// FG3
		this.instance_7 = new lib.happy_842_1461853309520();
		this.instance_7.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// FG2
		this.instance_8 = new lib.happy_391_1461853309518();
		this.instance_8.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// FG1
		this.instance_9 = new lib.happy_849_1461853309517();
		this.instance_9.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},3).wait(27));

		// ren
		this.renMC = new lib.happy_930_1461853309534();
		this.renMC.setTransform(189.5,211.5,1,1,0,0,0,189.5,211.5);

		this.timeline.addTween(cjs.Tween.get(this.renMC).wait(30));

		// BG-ALL
		this.instance_10 = new lib.happy_710_1461853309515();

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,540,540);

	});

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/muban4/happy_030_1461853297319.jpg", id:"happy_030_1461853297319"},
			{src:"images/muban4/happy_032_1461853297320.jpg", id:"happy_032_1461853297320"},
			{src:"images/muban4/happy_147_1461853297320.jpg", id:"happy_147_1461853297320"},
			{src:"images/muban4/happy_182_1461853297322.png", id:"happy_182_1461853297322"},
			{src:"images/muban4/happy_186_1461853297319.jpg", id:"happy_186_1461853297319"},
			{src:"images/muban4/happy_218_1461853297319.jpg", id:"happy_218_1461853297319"},
			{src:"images/muban4/happy_302_1461853297321.png", id:"happy_302_1461853297321"},
			{src:"images/muban4/happy_304_1461853297320.jpg", id:"happy_304_1461853297320"},
			{src:"images/muban4/happy_391_1461853297320.jpg", id:"happy_391_1461853297320"},
			{src:"images/muban4/happy_512_1461853297321.png", id:"happy_512_1461853297321"},
			{src:"images/muban4/happy_552_1461853297322.png", id:"happy_552_1461853297322"},
			{src:"images/muban4/happy_749_1461853297318.jpg", id:"happy_749_1461853297318"},
			{src:"images/muban4/happy_834_1461853297321.jpg", id:"happy_834_1461853297321"},
			{src:"images/muban4/happy_920_1461853297319.jpg", id:"happy_920_1461853297319"},
			{src:"images/muban4/happy_934_1461853297321.png", id:"happy_934_1461853297321"}
		]
	};



	// symbols:



	(lib.happy_030_1461853297319 = function() {
		this.initialize(img.happy_030_1461853297319);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_032_1461853297320 = function() {
		this.initialize(img.happy_032_1461853297320);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_147_1461853297320 = function() {
		this.initialize(img.happy_147_1461853297320);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_182_1461853297322 = function() {
		this.initialize(img.happy_182_1461853297322);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,349,223);


	(lib.happy_186_1461853297319 = function() {
		this.initialize(img.happy_186_1461853297319);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_218_1461853297319 = function() {
		this.initialize(img.happy_218_1461853297319);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_302_1461853297321 = function() {
		this.initialize(img.happy_302_1461853297321);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,109,67);


	(lib.happy_304_1461853297320 = function() {
		this.initialize(img.happy_304_1461853297320);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_391_1461853297320 = function() {
		this.initialize(img.happy_391_1461853297320);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_512_1461853297321 = function() {
		this.initialize(img.happy_512_1461853297321);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,333,372);


	(lib.happy_552_1461853297322 = function() {
		this.initialize(img.happy_552_1461853297322);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,371,360);


	(lib.happy_749_1461853297318 = function() {
		this.initialize(img.happy_749_1461853297318);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_834_1461853297321 = function() {
		this.initialize(img.happy_834_1461853297321);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_920_1461853297319 = function() {
		this.initialize(img.happy_920_1461853297319);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_934_1461853297321 = function() {
		this.initialize(img.happy_934_1461853297321);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,210,156);


	(lib.happy_940_1461853297307 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_834_1461853297321();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_906_1461853297302 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_304_1461853297320();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_841_1461853297297 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_218_1461853297319();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_822_1461853297314 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_552_1461853297322();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,371,360);


	(lib.happy_785_1461853297295 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_749_1461853297318();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_711_1461853297311 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_302_1461853297321();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,109,67);


	(lib.happy_689_1461853297301 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_391_1461853297320();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_612_1461853297300 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_186_1461853297319();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_574_1461853297317 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_546_1461853297298 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_920_1461853297319();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_514_1461853297310 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_934_1461853297321();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,210,156);


	(lib.happy_504_1461853297316 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_512_1461853297321();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,333,372);


	(lib.happy_451_1461853297305 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_147_1461853297320();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_443_1461853297308 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_030_1461853297319();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_429_1461853297313 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_182_1461853297322();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,349,223);


	(lib.happy_081_1461853297304 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_032_1461853297320();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	// stage content:
	(lib.muban4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 4
		this.instance = new lib.happy_504_1461853297316();
		this.instance.setTransform(358.5,354,1,1,0,0,0,166.5,186);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(3));

		// FG9
		this.instance_1 = new lib.happy_822_1461853297314();
		this.instance_1.setTransform(354.5,360,1,1,0,0,0,185.5,180);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// FG7
		this.instance_2 = new lib.happy_429_1461853297313();
		this.instance_2.setTransform(358.5,428.5,1,1,0,0,0,174.5,111.5);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// FG5
		this.instance_3 = new lib.happy_514_1461853297310();
		this.instance_3.setTransform(423,462,1,1,0,0,0,105,78);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// FG6
		this.instance_4 = new lib.happy_711_1461853297311();
		this.instance_4.setTransform(388.5,506.5,1,1,0,0,0,54.5,33.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// ren
		this.renMC = new lib.happy_574_1461853297317();

		this.timeline.addTween(cjs.Tween.get(this.renMC).wait(30));

		// BG10
		this.instance_5 = new lib.happy_443_1461853297308();
		this.instance_5.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).wait(3));

		// BG9
		this.instance_6 = new lib.happy_940_1461853297307();
		this.instance_6.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// BG8
		this.instance_7 = new lib.happy_451_1461853297305();
		this.instance_7.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// BG7
		this.instance_8 = new lib.happy_081_1461853297304();
		this.instance_8.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// BG6
		this.instance_9 = new lib.happy_906_1461853297302();
		this.instance_9.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// BG5
		this.instance_10 = new lib.happy_689_1461853297301();
		this.instance_10.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// BG4
		this.instance_11 = new lib.happy_612_1461853297300();
		this.instance_11.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// BG3
		this.instance_12 = new lib.happy_546_1461853297298();
		this.instance_12.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// BG2
		this.instance_13 = new lib.happy_841_1461853297297();
		this.instance_13.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// BG1
		this.instance_14 = new lib.happy_785_1461853297295();
		this.instance_14.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},3).wait(27));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,540,540);

	});

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/muban5/FG1.png", id:"FG1"},
			{src:"images/muban5/FG10.png", id:"FG10"},
			{src:"images/muban5/FG2.png", id:"FG2"},
			{src:"images/muban5/FG3.png", id:"FG3"},
			{src:"images/muban5/FG4.png", id:"FG4"},
			{src:"images/muban5/FG5.png", id:"FG5"},
			{src:"images/muban5/FG6.png", id:"FG6"},
			{src:"images/muban5/FG7.png", id:"FG7"},
			{src:"images/muban5/FG8.png", id:"FG8"},
			{src:"images/muban5/FG9.png", id:"FG9"},
			{src:"images/muban5/pocky040901.jpg", id:"pocky040901"},
			{src:"images/muban5/pocky040902.jpg", id:"pocky040902"},
			{src:"images/muban5/pocky040903.jpg", id:"pocky040903"},
			{src:"images/muban5/pocky040904.jpg", id:"pocky040904"},
			{src:"images/muban5/pocky040905.jpg", id:"pocky040905"},
			{src:"images/muban5/pocky040906.jpg", id:"pocky040906"},
			{src:"images/muban5/pocky040907.jpg", id:"pocky040907"},
			{src:"images/muban5/pocky040908.jpg", id:"pocky040908"},
			{src:"images/muban5/pocky040909.jpg", id:"pocky040909"},
			{src:"images/muban5/pocky040910.jpg", id:"pocky040910"}
		]
	};



	// symbols:



	(lib.FG1 = function() {
		this.initialize(img.FG1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,394);


	(lib.FG10 = function() {
		this.initialize(img.FG10);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,393);


	(lib.FG2 = function() {
		this.initialize(img.FG2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,404);


	(lib.FG3 = function() {
		this.initialize(img.FG3);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,277);


	(lib.FG4 = function() {
		this.initialize(img.FG4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,392);


	(lib.FG5 = function() {
		this.initialize(img.FG5);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,404);


	(lib.FG6 = function() {
		this.initialize(img.FG6);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,277);


	(lib.FG7 = function() {
		this.initialize(img.FG7);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,392);


	(lib.FG8 = function() {
		this.initialize(img.FG8);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,402);


	(lib.FG9 = function() {
		this.initialize(img.FG9);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,308);


	(lib.pocky040901 = function() {
		this.initialize(img.pocky040901);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040902 = function() {
		this.initialize(img.pocky040902);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040903 = function() {
		this.initialize(img.pocky040903);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040904 = function() {
		this.initialize(img.pocky040904);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040905 = function() {
		this.initialize(img.pocky040905);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040906 = function() {
		this.initialize(img.pocky040906);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040907 = function() {
		this.initialize(img.pocky040907);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040908 = function() {
		this.initialize(img.pocky040908);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040909 = function() {
		this.initialize(img.pocky040909);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040910 = function() {
		this.initialize(img.pocky040910);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.ren = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.pocky040910_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040910();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040909_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040909();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040908_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040908();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040907_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040907();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040906_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040906();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040905_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040905();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040904_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040904();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040903_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040903();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040902_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040902();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.pocky040901_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.pocky040901();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.FG10_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG10();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,393);


	(lib.FG9_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG9();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,308);


	(lib.FG8_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG8();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,402);


	(lib.FG7_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG7();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,392);


	(lib.FG6_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG6();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,277);


	(lib.FG5_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG5();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,404);


	(lib.FG4_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,392);


	(lib.FG3_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,277);


	(lib.FG2_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,404);


	(lib.FG1_1 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.FG1();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,394);


	// stage content:
	(lib.muban5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.FG10_1();
		this.instance.setTransform(249.5,343.5,1,1,0,0,0,249.5,196.5);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(3));

		// FG9
		this.instance_1 = new lib.FG9_1();
		this.instance_1.setTransform(249.5,386,1,1,0,0,0,249.5,154);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// FG8
		this.instance_2 = new lib.FG8_1();
		this.instance_2.setTransform(249.5,339,1,1,0,0,0,249.5,201);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// FG7
		this.instance_3 = new lib.FG7_1();
		this.instance_3.setTransform(249.5,344,1,1,0,0,0,249.5,196);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// FG6
		this.instance_4 = new lib.FG6_1();
		this.instance_4.setTransform(249.5,401.5,1,1,0,0,0,249.5,138.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// FG5
		this.instance_5 = new lib.FG5_1();
		this.instance_5.setTransform(249.5,338,1,1,0,0,0,249.5,202);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// FG4
		this.instance_6 = new lib.FG4_1();
		this.instance_6.setTransform(249.5,344,1,1,0,0,0,249.5,196);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// FG3
		this.instance_7 = new lib.FG3_1();
		this.instance_7.setTransform(249.5,401.5,1,1,0,0,0,249.5,138.5);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// FG2
		this.instance_8 = new lib.FG2_1();
		this.instance_8.setTransform(249.5,338,1,1,0,0,0,249.5,202);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// FG1
		this.instance_9 = new lib.FG1_1();
		this.instance_9.setTransform(249.5,343,1,1,0,0,0,249.5,197);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},3).wait(27));

		// ren
		this.renMC = new lib.ren();
		this.renMC.setTransform(0.5,0.9,1,1,0,0,0,0.5,0.9);

		this.timeline.addTween(cjs.Tween.get(this.renMC).wait(30));

		// pocky0409-10
		this.instance_10 = new lib.pocky040910_1();
		this.instance_10.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).wait(3));

		// pocky0409-09
		this.instance_11 = new lib.pocky040909_1();
		this.instance_11.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// pocky0409-08
		this.instance_12 = new lib.pocky040908_1();
		this.instance_12.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// pocky0409-07
		this.instance_13 = new lib.pocky040907_1();
		this.instance_13.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// pocky0409-06
		this.instance_14 = new lib.pocky040906_1();
		this.instance_14.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// pocky0409-05
		this.instance_15 = new lib.pocky040905_1();
		this.instance_15.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// pocky0409-04
		this.instance_16 = new lib.pocky040904_1();
		this.instance_16.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_16._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// pocky0409-03
		this.instance_17 = new lib.pocky040903_1();
		this.instance_17.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_17._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// pocky0409-02
		this.instance_18 = new lib.pocky040902_1();
		this.instance_18.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// pocky0409-01
		this.instance_19 = new lib.pocky040901_1();
		this.instance_19.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},3).wait(27));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,540,540);

	});

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#666666",
		manifest: [
			{src:"images/muban6/happy_076_1461853281315.png", id:"happy_076_1461853281315"},
			{src:"images/muban6/happy_094_1461853281311.png", id:"happy_094_1461853281311"},
			{src:"images/muban6/happy_233_1461853281312.png", id:"happy_233_1461853281312"},
			{src:"images/muban6/happy_258_1461853281316.png", id:"happy_258_1461853281316"},
			{src:"images/muban6/happy_287_1461853281310.png", id:"happy_287_1461853281310"},
			{src:"images/muban6/happy_290_1461853281315.png", id:"happy_290_1461853281315"},
			{src:"images/muban6/happy_301_1461853281315.png", id:"happy_301_1461853281315"},
			{src:"images/muban6/happy_400_1461853281312.png", id:"happy_400_1461853281312"},
			{src:"images/muban6/happy_450_1461853281314.png", id:"happy_450_1461853281314"},
			{src:"images/muban6/happy_548_1461853281316.png", id:"happy_548_1461853281316"},
			{src:"images/muban6/happy_557_1461853281313.png", id:"happy_557_1461853281313"},
			{src:"images/muban6/happy_628_1461853281313.png", id:"happy_628_1461853281313"},
			{src:"images/muban6/happy_702_1461853281311.png", id:"happy_702_1461853281311"},
			{src:"images/muban6/happy_709_1461853281313.png", id:"happy_709_1461853281313"},
			{src:"images/muban6/happy_756_1461853281314.png", id:"happy_756_1461853281314"},
			{src:"images/muban6/happy_792_1461853281315.png", id:"happy_792_1461853281315"},
			{src:"images/muban6/happy_808_1461853281311.png", id:"happy_808_1461853281311"},
			{src:"images/muban6/happy_953_1461853281312.png", id:"happy_953_1461853281312"},
			{src:"images/muban6/happy_975_1461853281315.png", id:"happy_975_1461853281315"},
			{src:"images/muban6/happy_990_1461853281314.png", id:"happy_990_1461853281314"}
		]
	};



	// symbols:



	(lib.happy_076_1461853281315 = function() {
		this.initialize(img.happy_076_1461853281315);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,449);


	(lib.happy_094_1461853281311 = function() {
		this.initialize(img.happy_094_1461853281311);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_233_1461853281312 = function() {
		this.initialize(img.happy_233_1461853281312);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_258_1461853281316 = function() {
		this.initialize(img.happy_258_1461853281316);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,499);


	(lib.happy_287_1461853281310 = function() {
		this.initialize(img.happy_287_1461853281310);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_290_1461853281315 = function() {
		this.initialize(img.happy_290_1461853281315);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,499);


	(lib.happy_301_1461853281315 = function() {
		this.initialize(img.happy_301_1461853281315);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,530);


	(lib.happy_400_1461853281312 = function() {
		this.initialize(img.happy_400_1461853281312);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_450_1461853281314 = function() {
		this.initialize(img.happy_450_1461853281314);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,530);


	(lib.happy_548_1461853281316 = function() {
		this.initialize(img.happy_548_1461853281316);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,491);


	(lib.happy_557_1461853281313 = function() {
		this.initialize(img.happy_557_1461853281313);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_628_1461853281313 = function() {
		this.initialize(img.happy_628_1461853281313);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_702_1461853281311 = function() {
		this.initialize(img.happy_702_1461853281311);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_709_1461853281313 = function() {
		this.initialize(img.happy_709_1461853281313);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_756_1461853281314 = function() {
		this.initialize(img.happy_756_1461853281314);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_792_1461853281315 = function() {
		this.initialize(img.happy_792_1461853281315);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,491);


	(lib.happy_808_1461853281311 = function() {
		this.initialize(img.happy_808_1461853281311);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_953_1461853281312 = function() {
		this.initialize(img.happy_953_1461853281312);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_975_1461853281315 = function() {
		this.initialize(img.happy_975_1461853281315);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,499);


	(lib.happy_990_1461853281314 = function() {
		this.initialize(img.happy_990_1461853281314);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,540,518);


	(lib.happy_968_1461853281286 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_557_1461853281313();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_959_1461853281283 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_953_1461853281312();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_824_1461853281293 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_756_1461853281314();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_806_1461853281287 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_709_1461853281313();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_777_1461853281303 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_076_1461853281315();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,449);


	(lib.happy_750_1461853281299 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_290_1461853281315();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,499);


	(lib.happy_725_1461853281279 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_702_1461853281311();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_691_1461853281276 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_287_1461853281310();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_685_1461853281307 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_450_1461853281314();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,530);


	(lib.happy_654_1461853281298 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_301_1461853281315();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,530);


	(lib.happy_646_1461853281301 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_792_1461853281315();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,491);


	(lib.happy_539_1461853281304 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_548_1461853281316();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,491);


	(lib.happy_482_1461853281296 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_975_1461853281315();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,499);


	(lib.happy_425_1461853281289 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_628_1461853281313();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_346_1461853281306 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_258_1461853281316();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,499);


	(lib.happy_265_1461853281291 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_094_1461853281311();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_217_1461853281309 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_089_1461853281284 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_233_1461853281312();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_050_1461853281295 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_990_1461853281314();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,518);


	(lib.happy_048_1461853281277 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_808_1461853281311();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	(lib.happy_022_1461853281281 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_400_1461853281312();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,540,540);


	// stage content:
	(lib.muban6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// FG10
		this.instance = new lib.happy_685_1461853281307();
		this.instance.setTransform(270,275,1,1,0,0,0,270,265);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(3));

		// FG9
		this.instance_1 = new lib.happy_346_1461853281306();
		this.instance_1.setTransform(270,290.5,1,1,0,0,0,270,249.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// FG8
		this.instance_2 = new lib.happy_539_1461853281304();
		this.instance_2.setTransform(270,294.5,1,1,0,0,0,270,245.5);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// FG7
		this.instance_3 = new lib.happy_777_1461853281303();
		this.instance_3.setTransform(270,315.5,1,1,0,0,0,270,224.5);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// FG6
		this.instance_4 = new lib.happy_646_1461853281301();
		this.instance_4.setTransform(270,294.5,1,1,0,0,0,270,245.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// FG5
		this.instance_5 = new lib.happy_750_1461853281299();
		this.instance_5.setTransform(270,290.5,1,1,0,0,0,270,249.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// FG4
		this.instance_6 = new lib.happy_654_1461853281298();
		this.instance_6.setTransform(270,275,1,1,0,0,0,270,265);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// FG3
		this.instance_7 = new lib.happy_482_1461853281296();
		this.instance_7.setTransform(270,290.5,1,1,0,0,0,270,249.5);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// FG2
		this.instance_8 = new lib.happy_050_1461853281295();
		this.instance_8.setTransform(270,281,1,1,0,0,0,270,259);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// FG1
		this.instance_9 = new lib.happy_824_1461853281293();
		this.instance_9.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},3).wait(27));

		// ren
		this.renMC = new lib.happy_217_1461853281309();

		this.timeline.addTween(cjs.Tween.get(this.renMC).wait(30));

		// BG10
		this.instance_10 = new lib.happy_265_1461853281291();
		this.instance_10.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).wait(3));

		// BG9
		this.instance_11 = new lib.happy_425_1461853281289();
		this.instance_11.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_11._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({_off:true},3).wait(3));

		// BG8
		this.instance_12 = new lib.happy_806_1461853281287();
		this.instance_12.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({_off:false},0).to({_off:true},3).wait(6));

		// BG7
		this.instance_13 = new lib.happy_968_1461853281286();
		this.instance_13.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_13._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).to({_off:true},3).wait(9));

		// BG6
		this.instance_14 = new lib.happy_089_1461853281284();
		this.instance_14.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).to({_off:true},3).wait(12));

		// BG5
		this.instance_15 = new lib.happy_959_1461853281283();
		this.instance_15.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).to({_off:true},3).wait(15));

		// BG4
		this.instance_16 = new lib.happy_022_1461853281281();
		this.instance_16.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_16._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({_off:true},3).wait(18));

		// BG3
		this.instance_17 = new lib.happy_725_1461853281279();
		this.instance_17.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_17._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({_off:true},3).wait(21));

		// BG2
		this.instance_18 = new lib.happy_048_1461853281277();
		this.instance_18.setTransform(270,270,1,1,0,0,0,270,270);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({_off:false},0).to({_off:true},3).wait(24));

		// BG1
		this.instance_19 = new lib.happy_691_1461853281276();
		this.instance_19.setTransform(270,270,1,1,0,0,0,270,270);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},3).wait(27));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,540,540);

	});

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1039,
		fps: 24,
		color: "#FFFFFF",
		manifest: []
	};



	// symbols:



	(lib.happy_004_1462011875696 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_014_1462011875620 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_016_1462011875615 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_030_1462011875632 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_042_1462011875641 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_048_1462011875625 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_049_1462011875618 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_067_1462011875684 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_093_1462011875616 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_097_1462011875630 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_100_1462011875615 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_116_1462011875665 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_120_1462011875653 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_140_1462011875688 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_192_1462011875619 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_205_1462011875674 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_233_1462011875623 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_240_1462011875646 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_244_1462011875681 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_251_1462011875609 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_253_1462011875692 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_260_1462011875637 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_262_1462011875611 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_306_1462011875619 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_322_1462011875629 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_324_1462011875621 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_325_1462011875668 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_338_1462011875658 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_347_1462011875639 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_367_1462011875627 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_436_1462011875635 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_475_1462011875618 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_489_1462011875672 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_555_1462011875650 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_565_1462011875644 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_590_1462011875678 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_617_1462011875614 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_695_1462011875607 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_726_1462011875656 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_741_1462011875607 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_742_1462011875617 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_745_1462011875663 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_760_1462011875648 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_763_1462011875704 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_780_1462011875617 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_790_1462011875701 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_814_1462011875661 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_838_1462011875634 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_873_1462011875608 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_876_1462011875612 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_880_1462011875610 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_898_1462011875613 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_930_1462011875643 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_935_1462011875652 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_992_1462011875622 = function() {
		this.spriteSheet = ss["product_atlas_"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_734_1462011875577 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_763_1462011875704();
		this.instance.setTransform(-40.7,-39.7,0.946,0.946);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-40.7,-39.7,80.4,80.4);


	(lib.happy_088_1462011875575 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_253_1462011875692();
		this.instance.setTransform(-24,-25);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-24,-25,48,50);


	(lib.happy_694_1462011875540 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_120_1462011875653();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_822_1462011875535 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_251_1462011875609();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,191,301);


	(lib.happy_810_1462011875493 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_140_1462011875688();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,362,122);


	(lib.happy_785_1462011875537 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_695_1462011875607();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,189,299);


	(lib.happy_273_1462011875542 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_790_1462011875701();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,165,186);


	(lib.happy_192_1462011875543 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_741_1462011875607();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,163,289);


	(lib.happy_736_1462011875526 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_048_1462011875625();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28,41);


	(lib.happy_720_1462011875533 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_436_1462011875635();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,117,30);


	(lib.happy_647_1462011875531 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_324_1462011875621();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,117,115);


	(lib.happy_580_1462011875523 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_030_1462011875632();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,40,43);


	(lib.happy_439_1462011875530 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_322_1462011875629();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,10);


	(lib.happy_266_1462011875525 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_838_1462011875634();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28,12);


	(lib.happy_247_1462011875528 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_367_1462011875627();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,40);


	(lib.happy_047_1462011875521 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_097_1462011875630();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42,52);


	(lib.happy_975_1462011875518 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_049_1462011875618();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,48);


	(lib.happy_951_1462011875515 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_262_1462011875611();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86,272);


	(lib.happy_628_1462011875501 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_617_1462011875614();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,46,25);


	(lib.happy_445_1462011875510 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_880_1462011875610();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,133);


	(lib.happy_429_1462011875500 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_898_1462011875613();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,30);


	(lib.happy_409_1462011875506 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_742_1462011875617();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,34,42);


	(lib.happy_379_1462011875516 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_100_1462011875615();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,95,29);


	(lib.happy_316_1462011875511 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_093_1462011875616();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14,15);


	(lib.happy_291_1462011875513 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_306_1462011875619();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,50);


	(lib.happy_197_1462011875505 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_780_1462011875617();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,57);


	(lib.happy_139_1462011875503 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_016_1462011875615();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,11);


	(lib.happy_061_1462011875508 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_475_1462011875618();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,31);


	(lib.happy_992_1462011875548 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_745_1462011875663();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,84);


	(lib.happy_937_1462011875588 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_116_1462011875665();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_853_1462011875582 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_760_1462011875648();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_651_1462011875585 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_935_1462011875652();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_344_1462011875595 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_244_1462011875681();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_241_1462011875587 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_233_1462011875623();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_190_1462011875580 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_873_1462011875608();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_126_1462011875592 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_590_1462011875678();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_124_1462011875590 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_325_1462011875668();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_107_1462011875593 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_205_1462011875674();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_103_1462011875583 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_014_1462011875620();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_946_1462011875547 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_240_1462011875646();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,95);


	(lib.happy_781_1462011875550 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_876_1462011875612();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,99,115);


	(lib.happy_629_1462011875553 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_489_1462011875672();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,82);


	(lib.happy_315_1462011875552 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_555_1462011875650();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,94);


	(lib.happy_432_1462011875565 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_814_1462011875661();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,60);


	(lib.happy_373_1462011875570 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_338_1462011875658();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,21);


	(lib.happy_851_1462011875562 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_260_1462011875637();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,71);


	(lib.happy_585_1462011875567 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_565_1462011875644();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,106);


	(lib.happy_429_1462011875560 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_347_1462011875639();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,59,40);


	(lib.happy_326_1462011875563 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_930_1462011875643();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,64,53);


	(lib.happy_143_1462011875568 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_726_1462011875656();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_123_1462011875558 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_042_1462011875641();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,67,72);


	(lib.happy_484_1462011875496 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_067_1462011875684();
		this.instance.setTransform(-20.5,-20.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


	(lib.happy_233_1462011875600 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_992_1462011875622();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,275);


	(lib.happy_114_1462011875603 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_004_1462011875696();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,275);


	(lib.happy_544_1462011875573 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_088_1462011875575();
		this.instance.setTransform(33.5,18,1,1,4);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.8,x:34.7,y:16.9},2).to({x:32.5,y:19.1},2).to({x:33.6,y:16.9},2).to({rotation:4,x:33.5,y:19.1},2).wait(1));

		// 图层 3
		this.instance_1 = new lib.happy_734_1462011875577();
		this.instance_1.setTransform(-29.5,-6.7,1,1,-3.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.6,x:-30.6,y:-5.6},2).to({rotation:-3.5,x:-28.4,y:-5.5},2).to({x:-29.5},2).to({rotation:-3.7,y:-7.8},2).wait(1));

		// 图层 2
		this.instance_2 = new lib.happy_192_1462011875619();
		this.instance_2.setTransform(-64,-65,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-72.7,-65,137.7,129);


	(lib.happy_332_1462011875572 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_544_1462011875573("synched",0);
		this.instance.setTransform(65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,startPosition:8},8).to({scaleX:1,scaleY:1,startPosition:7},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-7.7,0,137.7,129);


	(lib.happy_092_1462011875538 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s4
		this.instance = new lib.happy_694_1462011875540("synched",0);
		this.instance.setTransform(-38.4,-38.1,1,1,0.4,0,0,59.4,60);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.7,x:-38.5},7).to({rotation:0.4,x:-38.4},7).wait(1));

		// xjjj
		this.instance_1 = new lib.happy_273_1462011875542();
		this.instance_1.setTransform(15.4,5.5,1,1,0,0,0,82.5,93);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

		// s4
		this.instance_2 = new lib.happy_694_1462011875540("synched",0);
		this.instance_2.setTransform(-0.5,-31.6,1,1,0,-7.1,172.9,59.4,60);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:-16.2,skewY:163.8,x:-0.4,y:-31.7},7).to({skewX:-7.1,skewY:172.9,x:-0.5,y:-31.6},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-97.9,-98.5,195.8,197.1);


	(lib.happy_294_1462011875520 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// lt1
		this.instance = new lib.happy_047_1462011875521();
		this.instance.setTransform(83.5,100.8,1,1,0,0,0,13.5,39.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.6,regY:39.9,rotation:58.4,y:100.9},10).to({regX:13.5,regY:39.8,rotation:0,y:100.8},10).wait(1));

		// lt2
		this.instance_1 = new lib.happy_580_1462011875523();
		this.instance_1.setTransform(106,71.2,1,1,0,0,0,9,8.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-49,x:128.5,y:101.2},10).to({rotation:0,x:106,y:71.2},10).wait(1));

		// lt3
		this.instance_2 = new lib.happy_266_1462011875525();
		this.instance_2.setTransform(132,106,1,1,0,0,0,6,6);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:162,y:102.3},10).to({x:132,y:106},10).wait(1));

		// ls1
		this.instance_3 = new lib.happy_736_1462011875526();
		this.instance_3.setTransform(45.8,48.5,1,1,0,0,0,19.8,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.3,x:57.2,y:51},10).to({rotation:0,x:45.8,y:48.5},10).wait(1));

		// ls2
		this.instance_4 = new lib.happy_247_1462011875528();
		this.instance_4.setTransform(33.2,74.8,1,1,0,0,0,16.2,7.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.3,rotation:7.3,x:37.8,y:79.5},10).to({regX:16.2,rotation:0,x:33.2,y:74.8},10).wait(1));

		// ls3
		this.instance_5 = new lib.happy_439_1462011875530();
		this.instance_5.setTransform(19.5,106,1,1,0,0,0,19.5,5);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

		// lanmei
		this.instance_6 = new lib.happy_647_1462011875531();
		this.instance_6.setTransform(71,100.8,1,1,0,0,0,54,100.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:54.1,regY:100.9,rotation:6.8,y:100.9},10).to({regX:54,regY:100.8,rotation:0,y:100.8},10).wait(1));

		// ltt
		this.instance_7 = new lib.happy_720_1462011875533();
		this.instance_7.setTransform(81.7,95.5,1,1,0,0,0,9.2,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,189.5,115);


	(lib.happy_756_1462011875498 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// cs1
		this.instance = new lib.happy_429_1462011875500();
		this.instance.setTransform(58.5,83.2,1,1,0,0,0,9.5,10.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,x:44.9,y:86.9},10).to({rotation:0,x:58.5,y:83.2},10).wait(1));

		// cs1_1
		this.instance_1 = new lib.happy_628_1462011875501();
		this.instance_1.setTransform(93.5,95.2,1,1,0,0,0,7.5,7.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:81.2,y:101.2},10).to({rotation:0,x:93.5,y:95.2},10).wait(1));

		// cs3
		this.instance_2 = new lib.happy_139_1462011875503();
		this.instance_2.setTransform(128.5,107.5,1,1,0,0,0,5.5,5.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:121,y:105},10).to({rotation:0,x:128.5,y:107.5},10).wait(1));

		// ct1
		this.instance_3 = new lib.happy_197_1462011875505();
		this.instance_3.setTransform(60.2,127.8,1,1,0,0,0,13.2,12.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-75,x:60.3},10).to({rotation:0,x:60.2},10).wait(1));

		// ct2
		this.instance_4 = new lib.happy_409_1462011875506();
		this.instance_4.setTransform(86.5,165.5,1,1,0,0,0,10.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:30,x:103.9,y:114.3},10).to({rotation:0,x:86.5,y:165.5},10).wait(1));

		// ct3
		this.instance_5 = new lib.happy_061_1462011875508();
		this.instance_5.setTransform(104,195.3,1,1,0,0,0,7.5,4.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15,x:104.8,y:148.1},10).to({rotation:0,x:104,y:195.3},10).wait(1));

		// caomei
		this.instance_6 = new lib.happy_445_1462011875510();
		this.instance_6.setTransform(77.2,141.5,1,1,0,0,0,77.2,112.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,y:136.5},10).to({rotation:0,y:141.5},10).wait(1));

		// css2
		this.instance_7 = new lib.happy_316_1462011875511();
		this.instance_7.setTransform(144.2,81.5,1,1,0,0,0,9.2,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:139.2,y:91.5},10).to({x:144.2,y:81.5},10).wait(1));

		// ctt2
		this.instance_8 = new lib.happy_291_1462011875513();
		this.instance_8.setTransform(125.2,159.3,1,1,-8.7,0,0,46.1,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:46,rotation:0,x:127,y:148},10).to({regX:46.1,rotation:-8.7,x:125.2,y:159.3},10).wait(1));

		// caomeiganzi
		this.instance_9 = new lib.happy_951_1462011875515();
		this.instance_9.setTransform(120,136,1,1,0,0,0,43,136);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// css1
		this.instance_10 = new lib.happy_379_1462011875516();
		this.instance_10.setTransform(59,69.5,1,1,0,0,0,14,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:14.6,rotation:7,x:59.1,y:74.6},10).to({regY:14.5,rotation:0,x:59,y:69.5},10).wait(1));

		// ctt1
		this.instance_11 = new lib.happy_975_1462011875518();
		this.instance_11.setTransform(87,127.6,1,1,9.8,0,0,13.1,14.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:13,regY:14,rotation:0,y:125},10).to({regX:13.1,regY:14.1,rotation:9.8,y:127.6},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,163,272);


	(lib.happy_704_1462011875578 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_190_1462011875580();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},10).to({regX:9,rotation:5.3,x:9,y:158},10).wait(1));

		// S1--
		this.instance_1 = new lib.happy_853_1462011875582();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},10).to({y:134},10).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_103_1462011875583();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},10).to({y:176},10).wait(1));

		// S2
		this.instance_3 = new lib.happy_651_1462011875585();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},10).to({rotation:23.5,x:80.8,y:122.6},10).wait(1));

		// t1-
		this.instance_4 = new lib.happy_241_1462011875587();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},5).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},5).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},5).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},5).wait(1));

		// t1--
		this.instance_5 = new lib.happy_937_1462011875588();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},10).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},10).wait(1));

		// t1---
		this.instance_6 = new lib.happy_124_1462011875590();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

		// t2--
		this.instance_7 = new lib.happy_126_1462011875592();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},5).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},5).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},5).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},5).wait(1));

		// t2-
		this.instance_8 = new lib.happy_107_1462011875593();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},10).to({rotation:48.3,x:97,y:188.6},10).wait(1));

		// t2---
		this.instance_9 = new lib.happy_344_1462011875595();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_379_1462011875545 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// s1
		this.instance = new lib.happy_946_1462011875547();
		this.instance.setTransform(11.5,87,1,1,4,0,0,11.5,87);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6,y:82},7).to({rotation:4,y:87},7).wait(1));

		// t1
		this.instance_1 = new lib.happy_992_1462011875548();
		this.instance_1.setTransform(40.6,134.5,1,1,-3.2,0,0,13.6,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.5,rotation:5,x:40.5,y:129.5},7).to({regX:13.6,rotation:-3.2,x:40.6,y:134.5},7).wait(1));

		// cmg
		this.instance_2 = new lib.happy_781_1462011875550();
		this.instance_2.setTransform(53.5,98.5,1,1,0,0,0,49.5,57.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:88.5},7).to({y:98.5},7).wait(1));

		// s2
		this.instance_3 = new lib.happy_315_1462011875552();
		this.instance_3.setTransform(73.5,86,1,1,-4.2,0,0,13.5,85);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:8.2,y:81.1},7).to({rotation:-4.2,y:86},7).wait(1));

		// t2
		this.instance_4 = new lib.happy_629_1462011875553();
		this.instance_4.setTransform(64.6,132.5,1,1,3.2,0,0,14.6,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-5.4,y:127.5},7).to({rotation:3.2,y:132.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,103.5,209.3);


	(lib.happy_921_1462011875495 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_484_1462011875496();
		this.instance.setTransform(20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},129).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_818_1462011875602 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_114_1462011875603();
		this.instance.setTransform(0,0,1,1,0,0,0,12.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-137.5,25,275);


	(lib.happy_819_1462011875557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// p2
		this.instance = new lib.happy_123_1462011875558();
		this.instance.setTransform(86.8,82,1,1,0,24.9,-155.1,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleY:1,skewX:12,skewY:-164.2,x:86.9,y:80.6},10).to({regY:11.2,scaleY:1,skewX:24.9,skewY:-155.1,x:86.8,y:82},10).wait(1));

		// p1
		this.instance_1 = new lib.happy_429_1462011875560();
		this.instance_1.setTransform(109.4,80.2,1,1,0,24.9,-155.1,48.7,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.8,skewX:14.7,skewY:-165.3,y:80.3},10).to({regX:48.7,skewX:24.9,skewY:-155.1,y:80.2},10).wait(1));

		// p
		this.instance_2 = new lib.happy_851_1462011875562();
		this.instance_2.setTransform(52.8,104,1,1,0,24.9,-155.1,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

		// p3
		this.instance_3 = new lib.happy_326_1462011875563();
		this.instance_3.setTransform(60.3,88.5,1,1,0,19.2,-160.8,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.8,skewX:35.2,skewY:-144.8},10).to({regX:6.7,skewX:16.2,skewY:-163.8},10).wait(1));

		// s7
		this.instance_4 = new lib.happy_432_1462011875565();
		this.instance_4.setTransform(110.2,69.8,1,1,15,0,0,12.2,49.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,regY:49.7,rotation:0,x:110.1,y:69.7},10).to({regX:12.2,regY:49.8,rotation:15,x:110.2,y:69.8},10).wait(1));

		// rou
		this.instance_5 = new lib.happy_585_1462011875567();
		this.instance_5.setTransform(88,57,1,1,0,24.9,-155.1,29.9,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

		// s5
		this.instance_6 = new lib.happy_143_1462011875568();
		this.instance_6.setTransform(83.3,66.3,1,1,0,18.1,-161.9,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:56.5,skewX:2.9,skewY:-177.1,x:83.4,y:66.4},10).to({regX:10.2,regY:56.4,skewX:18.1,skewY:-161.9,x:83.3,y:66.3},10).wait(1));

		// s6
		this.instance_7 = new lib.happy_373_1462011875570();
		this.instance_7.setTransform(147.5,34.2,1,1,20,0,0,48,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:137,y:30.5},10).to({rotation:20,x:147.5,y:34.2},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-4.7,163.7,161.9);


	(lib.happy_069_1462011875598 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_233_1462011875600();
		this.instance.setTransform(0,0,1,1,0,0,0,13.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13.5,-137.5,27,275);


	(lib.happy_066_1462011875597 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_069_1462011875598();
		this.instance.setTransform(-0.2,0.1,1,1,175.9,0,0,-477.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-477.2,regY:0,rotation:-360,x:-0.3,y:0},496).wait(158));

		// 图层 4
		this.instance_1 = new lib.happy_818_1462011875602();
		this.instance_1.setTransform(-0.3,0.1,1,1,-64.7,0,0,-479.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,rotation:-720,y:0},496).to({_off:true},78).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.4,-502.9,834,675.1);


	(lib.happy_825_1462011875555 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_819_1462011875557("synched",0);
		this.instance.setTransform(-54.2,35.2,0.9,0.9,0,0,0,18.6,115.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.4,x:-54.3,startPosition:10},10).to({rotation:0,x:-54.2,startPosition:20},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-71.2,-73.2,147.3,145.7);


	// stage content:



	(lib.product = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_34 = function() {
			this.stop();
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

		// w15
		this.instance = new lib.happy_810_1462011875493();
		this.instance.setTransform(320,153.5,1,1,0,0,0,181,61);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

		// 草莓
		this.instance_1 = new lib.happy_921_1462011875495();
		this.instance_1.setTransform(472.5,983,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

		// caomei
		this.instance_2 = new lib.happy_756_1462011875498();
		this.instance_2.setTransform(544.5,879.5,1,1,0,0,0,81.5,136);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

		// lanmei2
		this.instance_3 = new lib.happy_294_1462011875520();
		this.instance_3.setTransform(-116.2,729.8,1,1,0,0,0,88.5,57.5);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({x:105.3},14,cjs.Ease.get(1)).wait(8));

		// 3
		this.instance_4 = new lib.happy_822_1462011875535();
		this.instance_4.setTransform(421.5,682,0.089,0.089,0,0,0,95.7,150.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:95.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(17));

		// 1
		this.instance_5 = new lib.happy_785_1462011875537();
		this.instance_5.setTransform(187.5,575,0.084,0.084,0,0,0,94.4,149.5);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({regX:94.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(19));

		// 图层 35 拷贝 2
		this.instance_6 = new lib.happy_092_1462011875538();
		this.instance_6.setTransform(199.2,489.7,0.491,0.491);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:216.2,y:404},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(6));

		// 2
		this.instance_7 = new lib.happy_192_1462011875543();
		this.instance_7.setTransform(348.5,382,0.111,0.111,0,0,0,81.7,144.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:81.5,scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(21));

		// Layer 11
		this.instance_8 = new lib.happy_379_1462011875545();
		this.instance_8.setTransform(411.7,727.8,0.71,0.71,0,21.1,-158.9,51.5,204);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({regX:51.4,scaleX:1.1,scaleY:1.1,skewX:21,skewY:-159,x:469.6,y:637.3},9,cjs.Ease.get(1)).to({regX:51.5,regY:204.1,scaleX:0.99,scaleY:0.99,skewX:21.1,skewY:-158.9,y:637.4},5).wait(4));

		// Vector Smart Object
		this.instance_9 = new lib.happy_825_1462011875555();
		this.instance_9.setTransform(328.9,383,0.664,0.664,15.7,0,0,-54.2,50.4);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({regX:-54.4,scaleX:1.19,scaleY:1.19,x:379.4,y:360.7},9,cjs.Ease.get(1)).to({regX:-54.2,scaleX:1.15,scaleY:1.15,x:379.7},5).wait(11));

		// button
		this.startBtn = new lib.happy_332_1462011875572();
		this.startBtn.setTransform(320,895.5,1,1,0,0,0,65,65);

		this.timeline.addTween(cjs.Tween.get(this.startBtn).wait(35));

		// lanmei
		this.instance_10 = new lib.happy_704_1462011875578();
		this.instance_10.setTransform(567.1,99.9,0.819,0.819,24,0,0,57.1,109);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35));

		// zw
		this.instance_11 = new lib.happy_066_1462011875597();
		this.instance_11.setTransform(320.3,519.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35));

		// LOGO
		this.instance_12 = new lib.happy_921_1462011875495();
		this.instance_12.setTransform(382.9,47.7,1,1,0,0,0,20.5,20.5);

		this.instance_13 = new lib.happy_921_1462011875495();
		this.instance_13.setTransform(58.6,386.4,1,1,0,0,0,20.5,20.5);

		this.instance_14 = new lib.happy_921_1462011875495();
		this.instance_14.setTransform(579.4,680.3,1,1,0,0,0,20.5,20.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(35));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(140.8,536.1,834,998.9);

	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 24,
		color: "#666666",
		manifest: []
	};



	// symbols:



	(lib.happy_007_1462011689132 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_013_1462011689134 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_021_1462011689130 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_031_1462011689131 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_042_1462011689142 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_099_1462011689136 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_140_1462011689138 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_153_1462011689136 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_154_1462011689141 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_155_1462011689144 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_305_1462011689139 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_321_1462011689137 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_325_1462011689145 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_369_1462011689128 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_394_1462011689130 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_395_1462011689143 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_407_1462011689133 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_510_1462011689132 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_584_1462011689140 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_592_1462011689135 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_646_1462011689131 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_674_1462011689142 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_693_1462011689137 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_721_1462011689134 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_748_1462011689132 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_758_1462011689133 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_792_1462011689140 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_836_1462011689130 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_836_1462011689131 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_853_1462011689132 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_892_1462011689133 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_895_1462011689146 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_897_1462011689140 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_907_1462011689129 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_977_1462011689139 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_992_1462011689129 = function() {
		this.spriteSheet = ss["rule_atlas_"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_971_1462011689111 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_992_1462011689129();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86,272);


	(lib.happy_841_1462011689105 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_510_1462011689132();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,31);


	(lib.happy_781_1462011689107 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_907_1462011689129();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,133);


	(lib.happy_731_1462011689114 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_007_1462011689132();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,48);


	(lib.happy_611_1462011689100 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_836_1462011689130();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,11);


	(lib.happy_602_1462011689099 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_394_1462011689130();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,46,25);


	(lib.happy_572_1462011689110 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_748_1462011689132();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,50);


	(lib.happy_487_1462011689113 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_031_1462011689131();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,95,29);


	(lib.happy_441_1462011689103 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_853_1462011689132();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,34,42);


	(lib.happy_384_1462011689097 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_021_1462011689130();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,30);


	(lib.happy_337_1462011689102 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_646_1462011689131();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,57);


	(lib.happy_118_1462011689108 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_836_1462011689131();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14,15);


	(lib.happy_901_1462011689076 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_674_1462011689142();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_492_1462011689073 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_584_1462011689140();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_475_1462011689068 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_758_1462011689133();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_453_1462011689074 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_897_1462011689140();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_433_1462011689071 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_721_1462011689134();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_320_1462011689065 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_369_1462011689128();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_214_1462011689067 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_693_1462011689137();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_152_1462011689070 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_140_1462011689138();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_082_1462011689079 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_042_1462011689142();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_082_1462011689077 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_154_1462011689141();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_930_1462011689122 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_325_1462011689145();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,275);


	(lib.happy_825_1462011689119 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_892_1462011689133();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,275);


	(lib.happy_480_1462011689125 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_395_1462011689143();
		this.instance.setTransform(-20.5,-20.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


	(lib.happy_793_1462011689088 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_099_1462011689136();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,64,53);


	(lib.happy_576_1462011689093 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_977_1462011689139();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66,66);


	(lib.happy_365_1462011689091 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_321_1462011689137();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,106);


	(lib.happy_197_1462011689083 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_153_1462011689136();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,67,72);


	(lib.happy_118_1462011689086 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_013_1462011689134();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,71);


	(lib.happy_003_1462011689085 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_592_1462011689135();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,59,40);


	(lib.happy_140_1462011689090 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_792_1462011689140();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,60);


	(lib.happy_116_1462011689094 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_305_1462011689139();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,21);


	(lib.happy_968_1462011689060 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_895_1462011689146();
		this.instance.setTransform(-40.7,-39.7,0.946,0.946);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-40.7,-39.7,80.4,80.4);


	(lib.happy_397_1462011689059 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_155_1462011689144();
		this.instance.setTransform(-24,-25);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-24,-25,48,50);


	(lib.happy_324_1462011689096 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// cs1
		this.instance = new lib.happy_384_1462011689097();
		this.instance.setTransform(58.5,83.2,1,1,0,0,0,9.5,10.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,x:44.9,y:86.9},10).to({rotation:0,x:58.5,y:83.2},10).wait(1));

		// cs1_1
		this.instance_1 = new lib.happy_602_1462011689099();
		this.instance_1.setTransform(93.5,95.2,1,1,0,0,0,7.5,7.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:81.2,y:101.2},10).to({rotation:0,x:93.5,y:95.2},10).wait(1));

		// cs3
		this.instance_2 = new lib.happy_611_1462011689100();
		this.instance_2.setTransform(128.5,107.5,1,1,0,0,0,5.5,5.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:121,y:105},10).to({rotation:0,x:128.5,y:107.5},10).wait(1));

		// ct1
		this.instance_3 = new lib.happy_337_1462011689102();
		this.instance_3.setTransform(60.2,127.8,1,1,0,0,0,13.2,12.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-75,x:60.3},10).to({rotation:0,x:60.2},10).wait(1));

		// ct2
		this.instance_4 = new lib.happy_441_1462011689103();
		this.instance_4.setTransform(86.5,165.5,1,1,0,0,0,10.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:30,x:103.9,y:114.3},10).to({rotation:0,x:86.5,y:165.5},10).wait(1));

		// ct3
		this.instance_5 = new lib.happy_841_1462011689105();
		this.instance_5.setTransform(104,195.3,1,1,0,0,0,7.5,4.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15,x:104.8,y:148.1},10).to({rotation:0,x:104,y:195.3},10).wait(1));

		// caomei
		this.instance_6 = new lib.happy_781_1462011689107();
		this.instance_6.setTransform(77.2,141.5,1,1,0,0,0,77.2,112.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,y:136.5},10).to({rotation:0,y:141.5},10).wait(1));

		// css2
		this.instance_7 = new lib.happy_118_1462011689108();
		this.instance_7.setTransform(144.2,81.5,1,1,0,0,0,9.2,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:139.2,y:91.5},10).to({x:144.2,y:81.5},10).wait(1));

		// ctt2
		this.instance_8 = new lib.happy_572_1462011689110();
		this.instance_8.setTransform(125.2,159.3,1,1,-8.7,0,0,46.1,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:46,rotation:0,x:127,y:148},10).to({regX:46.1,rotation:-8.7,x:125.2,y:159.3},10).wait(1));

		// caomeiganzi
		this.instance_9 = new lib.happy_971_1462011689111();
		this.instance_9.setTransform(120,136,1,1,0,0,0,43,136);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// css1
		this.instance_10 = new lib.happy_487_1462011689113();
		this.instance_10.setTransform(59,69.5,1,1,0,0,0,14,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:14.6,rotation:7,x:59.1,y:74.6},10).to({regY:14.5,rotation:0,x:59,y:69.5},10).wait(1));

		// ctt1
		this.instance_11 = new lib.happy_731_1462011689114();
		this.instance_11.setTransform(87,127.6,1,1,9.8,0,0,13.1,14.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:13,regY:14,rotation:0,y:125},10).to({regX:13.1,regY:14.1,rotation:9.8,y:127.6},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,163,272);


	(lib.happy_042_1462011689063 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_320_1462011689065();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},10).to({regX:9,rotation:5.3,x:9,y:158},10).wait(1));

		// S1--
		this.instance_1 = new lib.happy_214_1462011689067();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},10).to({y:134},10).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_475_1462011689068();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},10).to({y:176},10).wait(1));

		// S2
		this.instance_3 = new lib.happy_152_1462011689070();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},10).to({rotation:23.5,x:80.8,y:122.6},10).wait(1));

		// t1-
		this.instance_4 = new lib.happy_433_1462011689071();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},5).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},5).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},5).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},5).wait(1));

		// t1--
		this.instance_5 = new lib.happy_492_1462011689073();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},10).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},10).wait(1));

		// t1---
		this.instance_6 = new lib.happy_453_1462011689074();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

		// t2--
		this.instance_7 = new lib.happy_901_1462011689076();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},5).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},5).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},5).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},5).wait(1));

		// t2-
		this.instance_8 = new lib.happy_082_1462011689077();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},10).to({rotation:48.3,x:97,y:188.6},10).wait(1));

		// t2---
		this.instance_9 = new lib.happy_082_1462011689079();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_669_1462011689120 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_930_1462011689122();
		this.instance.setTransform(0,0,1,1,0,0,0,12.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-137.5,25,275);


	(lib.happy_388_1462011689123 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_480_1462011689125();
		this.instance.setTransform(20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},129).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_345_1462011689117 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_825_1462011689119();
		this.instance.setTransform(0,0,1,1,0,0,0,13.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13.5,-137.5,27,275);


	(lib.happy_324_1462011689116 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_345_1462011689117();
		this.instance.setTransform(-0.2,0.1,1,1,175.9,0,0,-477.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-477.2,regY:0,rotation:-360,x:-0.3,y:0},496).wait(158));

		// 图层 4
		this.instance_1 = new lib.happy_669_1462011689120();
		this.instance_1.setTransform(-0.3,0.1,1,1,-64.7,0,0,-479.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,rotation:-720,y:0},496).to({_off:true},78).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.4,-502.9,834,675.1);


	(lib.happy_549_1462011689082 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// p2
		this.instance = new lib.happy_197_1462011689083();
		this.instance.setTransform(86.8,82,1,1,0,24.9,-155.1,47.5,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleY:1,skewX:12,skewY:-164.2,x:86.9,y:80.6},10).to({regY:11.2,scaleY:1,skewX:24.9,skewY:-155.1,x:86.8,y:82},10).wait(1));

		// p1
		this.instance_1 = new lib.happy_003_1462011689085();
		this.instance_1.setTransform(109.4,80.2,1,1,0,24.9,-155.1,48.7,10.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.8,skewX:14.7,skewY:-165.3,y:80.3},10).to({regX:48.7,skewX:24.9,skewY:-155.1,y:80.2},10).wait(1));

		// p
		this.instance_2 = new lib.happy_118_1462011689086();
		this.instance_2.setTransform(52.8,104,1,1,0,24.9,-155.1,39,35.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

		// p3
		this.instance_3 = new lib.happy_793_1462011689088();
		this.instance_3.setTransform(60.3,88.5,1,1,0,19.2,-160.8,6.7,33.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.8,skewX:35.2,skewY:-144.8},10).to({regX:6.7,skewX:16.2,skewY:-163.8},10).wait(1));

		// s7
		this.instance_4 = new lib.happy_140_1462011689090();
		this.instance_4.setTransform(110.2,69.8,1,1,15,0,0,12.2,49.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,regY:49.7,rotation:0,x:110.1,y:69.7},10).to({regX:12.2,regY:49.8,rotation:15,x:110.2,y:69.8},10).wait(1));

		// rou
		this.instance_5 = new lib.happy_365_1462011689091();
		this.instance_5.setTransform(88,57,1,1,0,24.9,-155.1,29.9,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

		// s5
		this.instance_6 = new lib.happy_576_1462011689093();
		this.instance_6.setTransform(83.3,66.3,1,1,0,18.1,-161.9,10.2,56.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:56.5,skewX:2.9,skewY:-177.1,x:83.4,y:66.4},10).to({regX:10.2,regY:56.4,skewX:18.1,skewY:-161.9,x:83.3,y:66.3},10).wait(1));

		// s6
		this.instance_7 = new lib.happy_116_1462011689094();
		this.instance_7.setTransform(147.5,34.2,1,1,20,0,0,48,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:137,y:30.5},10).to({rotation:20,x:147.5,y:34.2},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.3,-4.7,163.7,161.9);


	(lib.happy_128_1462011689080 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_549_1462011689082("synched",0);
		this.instance.setTransform(-54.2,35.2,0.9,0.9,0,0,0,18.6,115.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.4,x:-54.3,startPosition:10},10).to({rotation:0,x:-54.2,startPosition:20},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-71.2,-73.2,147.3,145.7);


	(lib.happy_945_1462011689057 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_397_1462011689059();
		this.instance.setTransform(33.5,18,1,1,4);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.8,x:34.7,y:16.9},2).to({x:32.5,y:19.1},2).to({x:33.6,y:16.9},2).to({rotation:4,x:33.5,y:19.1},2).wait(1));

		// 图层 3
		this.instance_1 = new lib.happy_968_1462011689060();
		this.instance_1.setTransform(-29.5,-6.7,1,1,-3.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.6,x:-30.6,y:-5.6},2).to({rotation:-3.5,x:-28.4,y:-5.5},2).to({x:-29.5},2).to({rotation:-3.7,y:-7.8},2).wait(1));

		// 图层 2
		this.instance_2 = new lib.happy_407_1462011689133();
		this.instance_2.setTransform(-64,-65,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-72.7,-65,137.7,129);


	(lib.happy_325_1462011689055 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_945_1462011689057("synched",0);
		this.instance.setTransform(65,65);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,startPosition:8},8).to({scaleX:1,scaleY:1,startPosition:7},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-7.7,0,137.7,129);


	// stage content:



	(lib.rule = function() {
		this.initialize();

		// Layer 1
		this.startBtn = new lib.happy_325_1462011689055();
		this.startBtn.setTransform(318.3,846.5,1,1,0,0,0,65,65);

		this.instance = new lib.happy_324_1462011689096();
		this.instance.setTransform(523.5,864,1,1,0,0,0,81.5,136);

		this.instance_1 = new lib.happy_128_1462011689080();
		this.instance_1.setTransform(11,412.8,1.149,1.149,0,14.3,-165.7);

		this.instance_2 = new lib.happy_042_1462011689063();
		this.instance_2.setTransform(567.1,100.4,0.819,0.819,24,0,0,57.1,109);

		this.instance_3 = new lib.happy_324_1462011689116();
		this.instance_3.setTransform(320.2,520.1);

		this.instance_4 = new lib.happy_388_1462011689123();
		this.instance_4.setTransform(103.1,779.2,1,1,0,0,0,20.5,20.5);

		this.instance_5 = new lib.happy_388_1462011689123();
		this.instance_5.setTransform(382.8,48.2,1,1,0,0,0,20.5,20.5);

		this.instance_6 = new lib.happy_388_1462011689123();
		this.instance_6.setTransform(472.5,983.5,1,1,0,0,0,20.5,20.5);

		this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.startBtn);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(140.8,537.1,834,986.9);

	});

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 24,
		color: "#666666",
		manifest: []
	};



	// symbols:



	(lib.happy_005_1462075347435 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_013_1462075347448 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_017_1462075347447 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_087_1462075347458 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_090_1462075347435 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_090_1462075347450 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_207_1462075347456 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_252_1462075347452 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_315_1462075347453 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_350_1462075347444 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_370_1462075347450 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_426_1462075347462 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_438_1462075347440 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_455_1462075347437 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_520_1462075347437 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_527_1462075347444 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_565_1462075347445 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_621_1462075347454 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_647_1462075347434 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_688_1462075347440 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_782_1462075347434 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_807_1462075347436 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_824_1462075347446 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_849_1462075347454 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_858_1462075347449 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_882_1462075347438 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_911_1462075347435 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_938_1462075347452 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_946_1462075347457 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_952_1462075347463 = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.yao = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.yy = function() {
		this.spriteSheet = ss["show_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_636_1462075347338 = function() {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;


	(lib.happy_419_1462075347379 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_782_1462075347434();
		this.instance.setTransform(2.6,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.6,1,53,47);


	(lib.happy_328_1462075347372 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_350_1462075347444();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,51);


	(lib.happy_323_1462075347377 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.yao();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,52,52);


	(lib.happy_127_1462075347375 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.yy();
		this.instance.setTransform(5,0,0.586,0.586);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(5,0,42.8,44.5);


	(lib.happy_981_1462075347389 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_207_1462075347456();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,34,42);


	(lib.happy_928_1462075347397 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_952_1462075347463();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86,272);


	(lib.happy_841_1462075347398 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_647_1462075347434();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,95,29);


	(lib.happy_759_1462075347391 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_858_1462075347449();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,20,31);


	(lib.happy_721_1462075347385 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_688_1462075347440();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,46,25);


	(lib.happy_680_1462075347388 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_824_1462075347446();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,57);


	(lib.happy_483_1462075347394 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_882_1462075347438();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14,15);


	(lib.happy_465_1462075347396 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_911_1462075347435();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,50);


	(lib.happy_453_1462075347400 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_849_1462075347454();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,48);


	(lib.happy_413_1462075347386 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_087_1462075347458();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16,11);


	(lib.happy_250_1462075347392 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_252_1462075347452();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,116,133);


	(lib.happy_237_1462075347383 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_005_1462075347435();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50,30);


	(lib.happy_956_1462075347404 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_455_1462075347437();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,39);


	(lib.happy_825_1462075347408 = function() {
		this.initialize();

		// S2
		this.instance = new lib.happy_527_1462075347444();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,83);


	(lib.happy_817_1462075347415 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_090_1462075347435();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,29,58);


	(lib.happy_780_1462075347413 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_520_1462075347437();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,27);


	(lib.happy_350_1462075347411 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_017_1462075347447();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,50);


	(lib.happy_296_1462075347416 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_426_1462075347462();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,48);


	(lib.happy_209_1462075347410 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_370_1462075347450();
		this.instance.setTransform(0,0.8);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0.8,29,58);


	(lib.happy_197_1462075347418 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_807_1462075347436();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,26);


	(lib.happy_125_1462075347403 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_565_1462075347445();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,49,18);


	(lib.happy_002_1462075347407 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_946_1462075347457();
		this.instance.setTransform(2.3,1);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.3,1,105,103);


	(lib.happy_931_1462075347422 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_315_1462075347453();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,275);


	(lib.happy_584_1462075347426 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_438_1462075347440();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,275);


	(lib.happy_238_1462075347429 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_938_1462075347452();
		this.instance.setTransform(-20.5,-20.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


	(lib.happy_322_1462075347432 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_013_1462075347448();
		this.instance.setTransform(-292.5,-295.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-292.5,-295.5,585,591);


	(lib.happy_894_1462075347370 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// wo
		this.instance = new lib.happy_328_1462075347372();
		this.instance.setTransform(-27,-27.5,1,1,0,0,0,23.5,25.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-28.1,y:-28.6},2).to({x:-25.9,y:-26.4},2).to({x:-27,y:-28.6},2).to({y:-26.4},2).wait(1));

		// yao
		this.instance_1 = new lib.happy_127_1462075347375();
		this.instance_1.setTransform(22.5,-22,1,1,0,0,0,26,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:23.6,y:-23.1},2).to({x:21.4,y:-20.9},2).to({x:23.6,y:-22},2).to({x:21.4},2).wait(1));

		// xuan
		this.instance_2 = new lib.happy_323_1462075347377();
		this.instance_2.setTransform(-26,28.5,1,1,0,0,0,27.5,27.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-24.9,y:29.6},2).to({x:-27.1,y:27.4},2).to({x:-26,y:29.6},2).to({y:27.4},2).wait(1));

		// yaoy
		this.instance_3 = new lib.happy_419_1462075347379();
		this.instance_3.setTransform(26.5,28,1,1,0,0,0,28,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:26,y:27.5},2).to({x:27.1,y:28.6},2).to({x:26.5,y:27.5},2).to({x:27.1,y:28},2).wait(1));

		// ddd
		this.instance_4 = new lib.happy_090_1462075347450();
		this.instance_4.setTransform(-64.5,-64.5,0.86,0.86);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


	(lib.happy_893_1462075347381 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// cs1
		this.instance = new lib.happy_237_1462075347383();
		this.instance.setTransform(58.5,83.2,1,1,0,0,0,9.5,10.2);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,x:44.9,y:86.9},10).to({rotation:0,x:58.5,y:83.2},10).wait(1));

		// cs1_1
		this.instance_1 = new lib.happy_721_1462075347385();
		this.instance_1.setTransform(93.5,95.2,1,1,0,0,0,7.5,7.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:81.2,y:101.2},10).to({rotation:0,x:93.5,y:95.2},10).wait(1));

		// cs3
		this.instance_2 = new lib.happy_413_1462075347386();
		this.instance_2.setTransform(128.5,107.5,1,1,0,0,0,5.5,5.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:121,y:105},10).to({rotation:0,x:128.5,y:107.5},10).wait(1));

		// ct1
		this.instance_3 = new lib.happy_680_1462075347388();
		this.instance_3.setTransform(60.2,127.8,1,1,0,0,0,13.2,12.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-75,x:60.3},10).to({rotation:0,x:60.2},10).wait(1));

		// ct2
		this.instance_4 = new lib.happy_981_1462075347389();
		this.instance_4.setTransform(86.5,165.5,1,1,0,0,0,10.5,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:30,x:103.9,y:114.3},10).to({rotation:0,x:86.5,y:165.5},10).wait(1));

		// ct3
		this.instance_5 = new lib.happy_759_1462075347391();
		this.instance_5.setTransform(104,195.3,1,1,0,0,0,7.5,4.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15,x:104.8,y:148.1},10).to({rotation:0,x:104,y:195.3},10).wait(1));

		// caomei
		this.instance_6 = new lib.happy_250_1462075347392();
		this.instance_6.setTransform(77.2,141.5,1,1,0,0,0,77.2,112.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,y:136.5},10).to({rotation:0,y:141.5},10).wait(1));

		// css2
		this.instance_7 = new lib.happy_483_1462075347394();
		this.instance_7.setTransform(144.2,81.5,1,1,0,0,0,9.2,7.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:139.2,y:91.5},10).to({x:144.2,y:81.5},10).wait(1));

		// ctt2
		this.instance_8 = new lib.happy_465_1462075347396();
		this.instance_8.setTransform(125.2,159.3,1,1,-8.7,0,0,46.1,7);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:46,rotation:0,x:127,y:148},10).to({regX:46.1,rotation:-8.7,x:125.2,y:159.3},10).wait(1));

		// caomeiganzi
		this.instance_9 = new lib.happy_928_1462075347397();
		this.instance_9.setTransform(120,136,1,1,0,0,0,43,136);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

		// css1
		this.instance_10 = new lib.happy_841_1462075347398();
		this.instance_10.setTransform(59,69.5,1,1,0,0,0,14,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:14.6,rotation:7,x:59.1,y:74.6},10).to({regY:14.5,rotation:0,x:59,y:69.5},10).wait(1));

		// ctt1
		this.instance_11 = new lib.happy_453_1462075347400();
		this.instance_11.setTransform(87,127.6,1,1,9.8,0,0,13.1,14.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:13,regY:14,rotation:0,y:125},10).to({regX:13.1,regY:14.1,rotation:9.8,y:127.6},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,163,272);


	(lib.happy_883_1462075347402 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// S1-
		this.instance = new lib.happy_125_1462075347403();
		this.instance.setTransform(9,158,1,1,5.3,0,0,9,9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.1,rotation:24.2,x:9.1,y:122},10).to({regX:9,rotation:5.3,x:9,y:158},10).wait(1));

		// S1--
		this.instance_1 = new lib.happy_956_1462075347404();
		this.instance_1.setTransform(30,134,1,1,0,0,0,30,8.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98},10).to({y:134},10).wait(1));

		// LANMEI
		this.instance_2 = new lib.happy_002_1462075347407();
		this.instance_2.setTransform(60.5,176,1,1,0,0,0,53.5,98);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:141},10).to({y:176},10).wait(1));

		// S2
		this.instance_3 = new lib.happy_825_1462075347408();
		this.instance_3.setTransform(80.8,122.6,1,1,23.5,0,0,33.5,70.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:81.2,y:77},10).to({rotation:23.5,x:80.8,y:122.6},10).wait(1));

		// t1-
		this.instance_4 = new lib.happy_209_1462075347410();
		this.instance_4.setTransform(58.5,169.2,1,1,64.5,0,0,12.1,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:32.3,x:58.2,y:151},5).to({regX:12,scaleX:1,scaleY:1,rotation:-10.5,x:51.1,y:133.6},5).to({regY:14.6,scaleX:1,scaleY:1,rotation:21.6,x:56,y:144},5).to({regX:12.1,regY:14.5,scaleX:1,scaleY:1,rotation:64.5,x:58.5,y:169.2},5).wait(1));

		// t1--
		this.instance_5 = new lib.happy_350_1462075347411();
		this.instance_5.setTransform(26.5,188.9,1,1,-71.5,0,0,11,5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:5.8,rotation:-11.5,x:59.7,y:166},10).to({regY:5.7,rotation:-71.5,x:26.5,y:188.9},10).wait(1));

		// t1---
		this.instance_6 = new lib.happy_780_1462075347413();
		this.instance_6.setTransform(68.1,205.6,1,1,0,90,-90,7,4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

		// t2--
		this.instance_7 = new lib.happy_817_1462075347415();
		this.instance_7.setTransform(62.2,177.8,1,1,-68.1,0,0,10.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-38.9,x:63.6,y:156.2},5).to({scaleX:1,scaleY:1,rotation:0,x:68.5,y:129.7},5).to({scaleX:1,scaleY:1,rotation:-29.1,x:63.8,y:147.4},5).to({scaleX:1,scaleY:1,rotation:-68.1,x:62.2,y:177.8},5).wait(1));

		// t2-
		this.instance_8 = new lib.happy_296_1462075347416();
		this.instance_8.setTransform(97,188.6,1,1,48.3,0,0,14.5,10.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-9,x:71.2,y:168.1},10).to({rotation:48.3,x:97,y:188.6},10).wait(1));

		// t2---
		this.instance_9 = new lib.happy_197_1462075347418();
		this.instance_9.setTransform(68.1,205.7,1,1,-90.7,0,0,6.5,6.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-0.8,44.3,123.1,176.3);


	(lib.happy_433_1462075347421 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_931_1462075347422();
		this.instance.setTransform(0,0,1,1,0,0,0,13.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13.5,-137.5,27,275);


	(lib.happy_328_1462075347427 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_238_1462075347429();
		this.instance.setTransform(20.5,20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},129).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,41,41);


	(lib.happy_110_1462075347424 = function() {
		this.initialize();

		// 图层 1
		this.instance = new lib.happy_584_1462075347426();
		this.instance.setTransform(0,0,1,1,0,0,0,12.5,137.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12.5,-137.5,25,275);


	(lib.happy_013_1462075347419 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 3
		this.instance = new lib.happy_433_1462075347421();
		this.instance.setTransform(-0.2,0.1,1,1,175.9,0,0,-477.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-477.2,regY:0,rotation:-360,x:-0.3,y:0},496).wait(158));

		// 图层 4
		this.instance_1 = new lib.happy_110_1462075347424();
		this.instance_1.setTransform(-0.3,0.1,1,1,-64.7,0,0,-479.1,-0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,rotation:-720,y:0},496).to({_off:true},78).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-499.4,-502.9,834,675.1);


	(lib.happy_954_1462075347368 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_894_1462075347370();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},8).to({scaleX:1,scaleY:1},8).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


	// stage content:



	(lib.show = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_621_1462075347454();
		this.instance.setTransform(162.5,80.9);

		this.instance_1 = new lib.happy_322_1462075347432();
		this.instance_1.setTransform(320.5,446.5);

		this.motionMC = new lib.happy_636_1462075347338();
		this.motionMC.setTransform(320,444,1,1,0,0,0,270,270);

		this.startBtn = new lib.happy_954_1462075347368();
		this.startBtn.setTransform(320,846.1);

		this.instance_2 = new lib.happy_893_1462075347381();
		this.instance_2.setTransform(556.5,921.9,1,1,0,0,0,81.5,136);

		this.instance_3 = new lib.happy_883_1462075347402();
		this.instance_3.setTransform(102.5,902.1,0.85,0.85,0,0,0,57,109);

		this.instance_4 = new lib.happy_013_1462075347419();
		this.instance_4.setTransform(320.3,520.1);

		this.instance_5 = new lib.happy_328_1462075347427();
		this.instance_5.setTransform(382.9,48.2,1,1,0,0,0,20.5,20.5);

		this.instance_6 = new lib.happy_328_1462075347427();
		this.instance_6.setTransform(103.2,779.2,1,1,0,0,0,20.5,20.5);

		this.instance_7 = new lib.happy_328_1462075347427();
		this.instance_7.setTransform(472.5,983.5,1,1,0,0,0,20.5,20.5);

		this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.startBtn,this.motionMC,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(140.8,537.1,834,1040.8);

	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index.js": 67,
		"./index/Menu.js": 69,
		"./loading.js": 70,
		"./main.js": 71,
		"./main/Step_1.js": 72,
		"./main/Step_2.js": 78,
		"./me.js": 84,
		"./product.js": 85,
		"./res.js": 48,
		"./rule.js": 86,
		"./show.js": 87
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 66;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, App, createjs) {"use strict";

	var _Menu = __webpack_require__(69);

	var Menu = _interopRequireWildcard(_Menu);

	var _Baidu = __webpack_require__(5);

	var _Baidu2 = _interopRequireDefault(_Baidu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _self = function _self() {};
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {
		Menu.init(_self.menuMC);
		_self.startBtn.addEventListener("click", startClickHandler);
		_self.menuBtn.addEventListener("click", menuClickHandler);

		$("#case .start-btn").on("click", function () {
			$("#case").hide();
			_Baidu2.default.trackEvent("Homepage_start_1 case");
			App.globalDispatcher.dispatchEvent(new createjs.Event("startGame"));
		});
	}
	function startClickHandler(e) {
		_Baidu2.default.trackEvent("Homepage_start_1");
		App.globalDispatcher.dispatchEvent(new createjs.Event("startGame"));
	}
	function menuClickHandler(e) {
		_self.menuMC.gotoAndPlay(1);
	}
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(68), __webpack_require__(49)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(createjs) {"use strict";

	var App = {};
	App.globalDispatcher = new createjs.EventDispatcher();
	module.exports = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, App, createjs) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.init = init;

	var _Baidu = __webpack_require__(5);

	var _Baidu2 = _interopRequireDefault(_Baidu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _self;
	function init(display) {
		_self = display;
		eventInit();
	}

	function eventInit() {
		_self.bgMC.addEventListener("click", bgClickHandler);
		for (var i = 0; i < 3; i++) {
			_self['btn_' + i].Id = i;
			_self['btn_' + i].addEventListener("click", btnClickHandler);
		}
	}
	function bgClickHandler(e) {

		_self.addEventListener("tick", tickHandler);
	}
	function btnClickHandler(e) {
		var mc = e.currentTarget;
		switch (mc.Id) {
			case 0:
				_Baidu2.default.trackEvent("首页 右上角 菜单");
				$("#case").show();
				break;
			case 1:
				App.globalDispatcher.dispatchEvent(new createjs.Event("rule"));
				break;
			case 2:
				App.globalDispatcher.dispatchEvent(new createjs.Event("product"));
				break;
		}
	}
	function tickHandler(e) {
		_self.gotoAndStop(_self.currentFrame - 1);
		if (_self.currentFrame == 0) {
			_self.removeEventListener("tick", tickHandler);
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(68), __webpack_require__(49)))

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	var _self = function _self() {};
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {
		_self.setLoading = function (num) {
			if (num < 10) {
				_self.num_0.gotoAndStop(num);
				_self.num_1.gotoAndStop(0);
			} else {
				_self.num_0.gotoAndStop(num % 10);
				_self.num_1.gotoAndStop(Math.floor(num / 10));
			}
			console.log(num);
			_self.loadMC.gotoAndStop(num);
		};
	}

	module.exports.construct = construct;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(App) {"use strict";

	var _Step_ = __webpack_require__(72);

	var Step_1 = _interopRequireWildcard(_Step_);

	var _Step_2 = __webpack_require__(78);

	var Step_2 = _interopRequireWildcard(_Step_2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _self = function _self() {};
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {
		Step_1.init(_self.step_1);
		Step_2.init(_self.step_2);

		App.globalDispatcher.addEventListener("gotoStep", gotoStepHandler);
	}
	function gotoStepHandler(e) {
		_self.gotoAndStop(e.frame);
	}

	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.init = init;

	var _Data = __webpack_require__(4);

	var _Data2 = _interopRequireDefault(_Data);

	var _Baidu = __webpack_require__(5);

	var _Baidu2 = _interopRequireDefault(_Baidu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loadImage = __webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(77);

	var _self;
	function init(display) {
		_self = display;
		_self.uploadBtn.addEventListener("click", uploadClickHandler);

		// $("#upload-file").on("change.step1",function (e) {
		// 	var file=e.target.files[0];

		// 	loadImage.parseMetaData(file, function(data){
		// 		var orientation=0;
		//            if (data.exif) {
		//              orientation = data.exif[0x0112];
		//            }
		//            var loadingImage=loadImage(file,function(img){

		//                },
		//                {maxWidth: 1000,canvas:false,orientation:orientation} // Options
		//            );
		//            loadingImage.onload  = function(e){
		// 		 	loadImg(e.target);
		// 		 };
		//        });
		// })
	}
	function uploadClickHandler(e) {
		_Baidu2.default.trackEvent("Homepage_start_2");
		$("#upload-file").click();
	}
	function loadImg(img) {
		// $("#upload-file").off("change.step1");
		// var event=new createjs.Event("gotoStep");
		// event.frame=1;
		// Data.img=img;
		// App.globalDispatcher.dispatchEvent(event);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Load Image 1.10.0
	 * https://github.com/blueimp/JavaScript-Load-Image
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */

	/*jslint nomen: true */
	/*global define, window, document, URL, webkitURL, Blob, File, FileReader */

	(function ($) {
	    'use strict';

	    // Loads an image for a given File object.
	    // Invokes the callback with an img or optional canvas
	    // element (if supported by the browser) as parameter:
	    var loadImage = function (file, callback, options) {
	            var img = document.createElement('img'),
	                url,
	                oUrl;
	            img.onerror = callback;
	            img.onload = function () {
	                if (oUrl && !(options && options.noRevoke)) {
	                    loadImage.revokeObjectURL(oUrl);
	                }
	                if (callback) {
	                    callback(loadImage.scale(img, options));
	                }
	            };
	            if (loadImage.isInstanceOf('Blob', file) ||
	                    // Files are also Blob instances, but some browsers
	                    // (Firefox 3.6) support the File API but not Blobs:
	                    loadImage.isInstanceOf('File', file)) {
	                url = oUrl = loadImage.createObjectURL(file);
	                // Store the file type for resize processing:
	                img._type = file.type;
	            } else if (typeof file === 'string') {
	                url = file;
	                if (options && options.crossOrigin) {
	                    img.crossOrigin = options.crossOrigin;
	                }
	            } else {
	                return false;
	            }
	            if (url) {
	                img.src = url;
	                return img;
	            }
	            return loadImage.readFile(file, function (e) {
	                var target = e.target;
	                if (target && target.result) {
	                    img.src = target.result;
	                } else {
	                    if (callback) {
	                        callback(e);
	                    }
	                }
	            });
	        },
	        // The check for URL.revokeObjectURL fixes an issue with Opera 12,
	        // which provides URL.createObjectURL but doesn't properly implement it:
	        urlAPI = (window.createObjectURL && window) ||
	            (window.URL && URL.revokeObjectURL && URL) ||
	            (window.webkitURL && webkitURL);

	    loadImage.isInstanceOf = function (type, obj) {
	        // Cross-frame instanceof check
	        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
	    };

	    // Transform image coordinates, allows to override e.g.
	    // the canvas orientation based on the orientation option,
	    // gets canvas, options passed as arguments:
	    loadImage.transformCoordinates = function () {
	        return;
	    };

	    // Returns transformed options, allows to override e.g.
	    // maxWidth, maxHeight and crop options based on the aspectRatio.
	    // gets img, options passed as arguments:
	    loadImage.getTransformedOptions = function (img, options) {
	        var aspectRatio = options.aspectRatio,
	            newOptions,
	            i,
	            width,
	            height;
	        if (!aspectRatio) {
	            return options;
	        }
	        newOptions = {};
	        for (i in options) {
	            if (options.hasOwnProperty(i)) {
	                newOptions[i] = options[i];
	            }
	        }
	        newOptions.crop = true;
	        width = img.naturalWidth || img.width;
	        height = img.naturalHeight || img.height;
	        if (width / height > aspectRatio) {
	            newOptions.maxWidth = height * aspectRatio;
	            newOptions.maxHeight = height;
	        } else {
	            newOptions.maxWidth = width;
	            newOptions.maxHeight = width / aspectRatio;
	        }
	        return newOptions;
	    };

	    // Canvas render method, allows to override the
	    // rendering e.g. to work around issues on iOS:
	    loadImage.renderImageToCanvas = function (
	        canvas,
	        img,
	        sourceX,
	        sourceY,
	        sourceWidth,
	        sourceHeight,
	        destX,
	        destY,
	        destWidth,
	        destHeight
	    ) {
	        canvas.getContext('2d').drawImage(
	            img,
	            sourceX,
	            sourceY,
	            sourceWidth,
	            sourceHeight,
	            destX,
	            destY,
	            destWidth,
	            destHeight
	        );
	        return canvas;
	    };

	    // This method is used to determine if the target image
	    // should be a canvas element:
	    loadImage.hasCanvasOption = function (options) {
	        return options.canvas || options.crop || options.aspectRatio;
	    };

	    // Scales and/or crops the given image (img or canvas HTML element)
	    // using the given options.
	    // Returns a canvas object if the browser supports canvas
	    // and the hasCanvasOption method returns true or a canvas
	    // object is passed as image, else the scaled image:
	    loadImage.scale = function (img, options) {
	        options = options || {};
	        var canvas = document.createElement('canvas'),
	            useCanvas = img.getContext ||
	                (loadImage.hasCanvasOption(options) && canvas.getContext),
	            width = img.naturalWidth || img.width,
	            height = img.naturalHeight || img.height,
	            destWidth = width,
	            destHeight = height,
	            maxWidth,
	            maxHeight,
	            minWidth,
	            minHeight,
	            sourceWidth,
	            sourceHeight,
	            sourceX,
	            sourceY,
	            tmp,
	            scaleUp = function () {
	                var scale = Math.max(
	                    (minWidth || destWidth) / destWidth,
	                    (minHeight || destHeight) / destHeight
	                );
	                if (scale > 1) {
	                    destWidth = destWidth * scale;
	                    destHeight = destHeight * scale;
	                }
	            },
	            scaleDown = function () {
	                var scale = Math.min(
	                    (maxWidth || destWidth) / destWidth,
	                    (maxHeight || destHeight) / destHeight
	                );
	                if (scale < 1) {
	                    destWidth = destWidth * scale;
	                    destHeight = destHeight * scale;
	                }
	            };
	        if (useCanvas) {
	            options = loadImage.getTransformedOptions(img, options);
	            sourceX = options.left || 0;
	            sourceY = options.top || 0;
	            if (options.sourceWidth) {
	                sourceWidth = options.sourceWidth;
	                if (options.right !== undefined && options.left === undefined) {
	                    sourceX = width - sourceWidth - options.right;
	                }
	            } else {
	                sourceWidth = width - sourceX - (options.right || 0);
	            }
	            if (options.sourceHeight) {
	                sourceHeight = options.sourceHeight;
	                if (options.bottom !== undefined && options.top === undefined) {
	                    sourceY = height - sourceHeight - options.bottom;
	                }
	            } else {
	                sourceHeight = height - sourceY - (options.bottom || 0);
	            }
	            destWidth = sourceWidth;
	            destHeight = sourceHeight;
	        }
	        maxWidth = options.maxWidth;
	        maxHeight = options.maxHeight;
	        minWidth = options.minWidth;
	        minHeight = options.minHeight;
	        if (useCanvas && maxWidth && maxHeight && options.crop) {
	            destWidth = maxWidth;
	            destHeight = maxHeight;
	            tmp = sourceWidth / sourceHeight - maxWidth / maxHeight;
	            if (tmp < 0) {
	                sourceHeight = maxHeight * sourceWidth / maxWidth;
	                if (options.top === undefined && options.bottom === undefined) {
	                    sourceY = (height - sourceHeight) / 2;
	                }
	            } else if (tmp > 0) {
	                sourceWidth = maxWidth * sourceHeight / maxHeight;
	                if (options.left === undefined && options.right === undefined) {
	                    sourceX = (width - sourceWidth) / 2;
	                }
	            }
	        } else {
	            if (options.contain || options.cover) {
	                minWidth = maxWidth = maxWidth || minWidth;
	                minHeight = maxHeight = maxHeight || minHeight;
	            }
	            if (options.cover) {
	                scaleDown();
	                scaleUp();
	            } else {
	                scaleUp();
	                scaleDown();
	            }
	        }
	        if (useCanvas) {
	            canvas.width = destWidth;
	            canvas.height = destHeight;
	            loadImage.transformCoordinates(
	                canvas,
	                options
	            );
	            return loadImage.renderImageToCanvas(
	                canvas,
	                img,
	                sourceX,
	                sourceY,
	                sourceWidth,
	                sourceHeight,
	                0,
	                0,
	                destWidth,
	                destHeight
	            );
	        }
	        img.width = destWidth;
	        img.height = destHeight;
	        return img;
	    };

	    loadImage.createObjectURL = function (file) {
	        return urlAPI ? urlAPI.createObjectURL(file) : false;
	    };

	    loadImage.revokeObjectURL = function (url) {
	        return urlAPI ? urlAPI.revokeObjectURL(url) : false;
	    };

	    // Loads a given File object via FileReader interface,
	    // invokes the callback with the event object (load or error).
	    // The result can be read via event.target.result:
	    loadImage.readFile = function (file, callback, method) {
	        if (window.FileReader) {
	            var fileReader = new FileReader();
	            fileReader.onload = fileReader.onerror = callback;
	            method = method || 'readAsDataURL';
	            if (fileReader[method]) {
	                fileReader[method](file);
	                return fileReader;
	            }
	        }
	        return false;
	    };

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return loadImage;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        $.loadImage = loadImage;
	    }
	}(window));


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Load Image Orientation 1.1.0
	 * https://github.com/blueimp/JavaScript-Load-Image
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */

	/*global define, window */

	(function (factory) {
	    'use strict';
	    if (true) {
	        // Register as an anonymous AMD module:
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(73)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals:
	        factory(window.loadImage);
	    }
	}(function (loadImage) {
	    'use strict';

	    var originalHasCanvasOption = loadImage.hasCanvasOption,
	        originalTransformCoordinates = loadImage.transformCoordinates,
	        originalGetTransformedOptions = loadImage.getTransformedOptions;

	    // This method is used to determine if the target image
	    // should be a canvas element:
	    loadImage.hasCanvasOption = function (options) {
	        return originalHasCanvasOption.call(loadImage, options) ||
	            options.orientation;
	    };

	    // Transform image orientation based on
	    // the given EXIF orientation option:
	    loadImage.transformCoordinates = function (canvas, options) {
	        originalTransformCoordinates.call(loadImage, canvas, options);
	        var ctx = canvas.getContext('2d'),
	            width = canvas.width,
	            height = canvas.height,
	            orientation = options.orientation;
	        if (!orientation || orientation > 8) {
	            return;
	        }
	        if (orientation > 4) {
	            canvas.width = height;
	            canvas.height = width;
	        }
	        switch (orientation) {
	        case 2:
	            // horizontal flip
	            ctx.translate(width, 0);
	            ctx.scale(-1, 1);
	            break;
	        case 3:
	            // 180° rotate left
	            ctx.translate(width, height);
	            ctx.rotate(Math.PI);
	            break;
	        case 4:
	            // vertical flip
	            ctx.translate(0, height);
	            ctx.scale(1, -1);
	            break;
	        case 5:
	            // vertical flip + 90 rotate right
	            ctx.rotate(0.5 * Math.PI);
	            ctx.scale(1, -1);
	            break;
	        case 6:
	            // 90° rotate right
	            ctx.rotate(0.5 * Math.PI);
	            ctx.translate(0, -height);
	            break;
	        case 7:
	            // horizontal flip + 90 rotate right
	            ctx.rotate(0.5 * Math.PI);
	            ctx.translate(width, -height);
	            ctx.scale(-1, 1);
	            break;
	        case 8:
	            // 90° rotate left
	            ctx.rotate(-0.5 * Math.PI);
	            ctx.translate(-width, 0);
	            break;
	        }
	    };

	    // Transforms coordinate and dimension options
	    // based on the given orientation option:
	    loadImage.getTransformedOptions = function (img, opts) {
	        var options = originalGetTransformedOptions.call(loadImage, img, opts),
	            orientation = options.orientation,
	            newOptions,
	            i;
	        if (!orientation || orientation > 8 || orientation === 1) {
	            return options;
	        }
	        newOptions = {};
	        for (i in options) {
	            if (options.hasOwnProperty(i)) {
	                newOptions[i] = options[i];
	            }
	        }
	        switch (options.orientation) {
	        case 2:
	            // horizontal flip
	            newOptions.left = options.right;
	            newOptions.right = options.left;
	            break;
	        case 3:
	            // 180° rotate left
	            newOptions.left = options.right;
	            newOptions.top = options.bottom;
	            newOptions.right = options.left;
	            newOptions.bottom = options.top;
	            break;
	        case 4:
	            // vertical flip
	            newOptions.top = options.bottom;
	            newOptions.bottom = options.top;
	            break;
	        case 5:
	            // vertical flip + 90 rotate right
	            newOptions.left = options.top;
	            newOptions.top = options.left;
	            newOptions.right = options.bottom;
	            newOptions.bottom = options.right;
	            break;
	        case 6:
	            // 90° rotate right
	            newOptions.left = options.top;
	            newOptions.top = options.right;
	            newOptions.right = options.bottom;
	            newOptions.bottom = options.left;
	            break;
	        case 7:
	            // horizontal flip + 90 rotate right
	            newOptions.left = options.bottom;
	            newOptions.top = options.right;
	            newOptions.right = options.top;
	            newOptions.bottom = options.left;
	            break;
	        case 8:
	            // 90° rotate left
	            newOptions.left = options.bottom;
	            newOptions.top = options.left;
	            newOptions.right = options.top;
	            newOptions.bottom = options.right;
	            break;
	        }
	        if (options.orientation > 4) {
	            newOptions.maxWidth = options.maxHeight;
	            newOptions.maxHeight = options.maxWidth;
	            newOptions.minWidth = options.minHeight;
	            newOptions.minHeight = options.minWidth;
	            newOptions.sourceWidth = options.sourceHeight;
	            newOptions.sourceHeight = options.sourceWidth;
	        }
	        return newOptions;
	    };

	}));


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Load Image Exif Parser 1.0.0
	 * https://github.com/blueimp/JavaScript-Load-Image
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */

	/*jslint unparam: true */
	/*global define, window, console */

	(function (factory) {
	    'use strict';
	    if (true) {
	        // Register as an anonymous AMD module:
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(73), __webpack_require__(76)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals:
	        factory(window.loadImage);
	    }
	}(function (loadImage) {
	    'use strict';

	    loadImage.ExifMap = function () {
	        return this;
	    };

	    loadImage.ExifMap.prototype.map = {
	        'Orientation': 0x0112
	    };

	    loadImage.ExifMap.prototype.get = function (id) {
	        return this[id] || this[this.map[id]];
	    };

	    loadImage.getExifThumbnail = function (dataView, offset, length) {
	        var hexData,
	            i,
	            b;
	        if (!length || offset + length > dataView.byteLength) {
	            console.log('Invalid Exif data: Invalid thumbnail data.');
	            return;
	        }
	        hexData = [];
	        for (i = 0; i < length; i += 1) {
	            b = dataView.getUint8(offset + i);
	            hexData.push((b < 16 ? '0' : '') + b.toString(16));
	        }
	        return 'data:image/jpeg,%' + hexData.join('%');
	    };

	    loadImage.exifTagTypes = {
	        // byte, 8-bit unsigned int:
	        1: {
	            getValue: function (dataView, dataOffset) {
	                return dataView.getUint8(dataOffset);
	            },
	            size: 1
	        },
	        // ascii, 8-bit byte:
	        2: {
	            getValue: function (dataView, dataOffset) {
	                return String.fromCharCode(dataView.getUint8(dataOffset));
	            },
	            size: 1,
	            ascii: true
	        },
	        // short, 16 bit int:
	        3: {
	            getValue: function (dataView, dataOffset, littleEndian) {
	                return dataView.getUint16(dataOffset, littleEndian);
	            },
	            size: 2
	        },
	        // long, 32 bit int:
	        4: {
	            getValue: function (dataView, dataOffset, littleEndian) {
	                return dataView.getUint32(dataOffset, littleEndian);
	            },
	            size: 4
	        },
	        // rational = two long values, first is numerator, second is denominator:
	        5: {
	            getValue: function (dataView, dataOffset, littleEndian) {
	                return dataView.getUint32(dataOffset, littleEndian) /
	                    dataView.getUint32(dataOffset + 4, littleEndian);
	            },
	            size: 8
	        },
	        // slong, 32 bit signed int:
	        9: {
	            getValue: function (dataView, dataOffset, littleEndian) {
	                return dataView.getInt32(dataOffset, littleEndian);
	            },
	            size: 4
	        },
	        // srational, two slongs, first is numerator, second is denominator:
	        10: {
	            getValue: function (dataView, dataOffset, littleEndian) {
	                return dataView.getInt32(dataOffset, littleEndian) /
	                    dataView.getInt32(dataOffset + 4, littleEndian);
	            },
	            size: 8
	        }
	    };
	    // undefined, 8-bit byte, value depending on field:
	    loadImage.exifTagTypes[7] = loadImage.exifTagTypes[1];

	    loadImage.getExifValue = function (dataView, tiffOffset, offset, type, length, littleEndian) {
	        var tagType = loadImage.exifTagTypes[type],
	            tagSize,
	            dataOffset,
	            values,
	            i,
	            str,
	            c;
	        if (!tagType) {
	            console.log('Invalid Exif data: Invalid tag type.');
	            return;
	        }
	        tagSize = tagType.size * length;
	        // Determine if the value is contained in the dataOffset bytes,
	        // or if the value at the dataOffset is a pointer to the actual data:
	        dataOffset = tagSize > 4 ?
	                tiffOffset + dataView.getUint32(offset + 8, littleEndian) : (offset + 8);
	        if (dataOffset + tagSize > dataView.byteLength) {
	            console.log('Invalid Exif data: Invalid data offset.');
	            return;
	        }
	        if (length === 1) {
	            return tagType.getValue(dataView, dataOffset, littleEndian);
	        }
	        values = [];
	        for (i = 0; i < length; i += 1) {
	            values[i] = tagType.getValue(dataView, dataOffset + i * tagType.size, littleEndian);
	        }
	        if (tagType.ascii) {
	            str = '';
	            // Concatenate the chars:
	            for (i = 0; i < values.length; i += 1) {
	                c = values[i];
	                // Ignore the terminating NULL byte(s):
	                if (c === '\u0000') {
	                    break;
	                }
	                str += c;
	            }
	            return str;
	        }
	        return values;
	    };

	    loadImage.parseExifTag = function (dataView, tiffOffset, offset, littleEndian, data) {
	        var tag = dataView.getUint16(offset, littleEndian);
	        data.exif[tag] = loadImage.getExifValue(
	            dataView,
	            tiffOffset,
	            offset,
	            dataView.getUint16(offset + 2, littleEndian), // tag type
	            dataView.getUint32(offset + 4, littleEndian), // tag length
	            littleEndian
	        );
	    };

	    loadImage.parseExifTags = function (dataView, tiffOffset, dirOffset, littleEndian, data) {
	        var tagsNumber,
	            dirEndOffset,
	            i;
	        if (dirOffset + 6 > dataView.byteLength) {
	            console.log('Invalid Exif data: Invalid directory offset.');
	            return;
	        }
	        tagsNumber = dataView.getUint16(dirOffset, littleEndian);
	        dirEndOffset = dirOffset + 2 + 12 * tagsNumber;
	        if (dirEndOffset + 4 > dataView.byteLength) {
	            console.log('Invalid Exif data: Invalid directory size.');
	            return;
	        }
	        for (i = 0; i < tagsNumber; i += 1) {
	            this.parseExifTag(
	                dataView,
	                tiffOffset,
	                dirOffset + 2 + 12 * i, // tag offset
	                littleEndian,
	                data
	            );
	        }
	        // Return the offset to the next directory:
	        return dataView.getUint32(dirEndOffset, littleEndian);
	    };

	    loadImage.parseExifData = function (dataView, offset, length, data, options) {
	        if (options.disableExif) {
	            return;
	        }
	        var tiffOffset = offset + 10,
	            littleEndian,
	            dirOffset,
	            thumbnailData;
	        // Check for the ASCII code for "Exif" (0x45786966):
	        if (dataView.getUint32(offset + 4) !== 0x45786966) {
	            // No Exif data, might be XMP data instead
	            return;
	        }
	        if (tiffOffset + 8 > dataView.byteLength) {
	            console.log('Invalid Exif data: Invalid segment size.');
	            return;
	        }
	        // Check for the two null bytes:
	        if (dataView.getUint16(offset + 8) !== 0x0000) {
	            console.log('Invalid Exif data: Missing byte alignment offset.');
	            return;
	        }
	        // Check the byte alignment:
	        switch (dataView.getUint16(tiffOffset)) {
	        case 0x4949:
	            littleEndian = true;
	            break;
	        case 0x4D4D:
	            littleEndian = false;
	            break;
	        default:
	            console.log('Invalid Exif data: Invalid byte alignment marker.');
	            return;
	        }
	        // Check for the TIFF tag marker (0x002A):
	        if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002A) {
	            console.log('Invalid Exif data: Missing TIFF marker.');
	            return;
	        }
	        // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
	        dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
	        // Create the exif object to store the tags:
	        data.exif = new loadImage.ExifMap();
	        // Parse the tags of the main image directory and retrieve the
	        // offset to the next directory, usually the thumbnail directory:
	        dirOffset = loadImage.parseExifTags(
	            dataView,
	            tiffOffset,
	            tiffOffset + dirOffset,
	            littleEndian,
	            data
	        );
	        if (dirOffset && !options.disableExifThumbnail) {
	            thumbnailData = {exif: {}};
	            dirOffset = loadImage.parseExifTags(
	                dataView,
	                tiffOffset,
	                tiffOffset + dirOffset,
	                littleEndian,
	                thumbnailData
	            );
	            // Check for JPEG Thumbnail offset:
	            if (thumbnailData.exif[0x0201]) {
	                data.exif.Thumbnail = loadImage.getExifThumbnail(
	                    dataView,
	                    tiffOffset + thumbnailData.exif[0x0201],
	                    thumbnailData.exif[0x0202] // Thumbnail data length
	                );
	            }
	        }
	        // Check for Exif Sub IFD Pointer:
	        if (data.exif[0x8769] && !options.disableExifSub) {
	            loadImage.parseExifTags(
	                dataView,
	                tiffOffset,
	                tiffOffset + data.exif[0x8769], // directory offset
	                littleEndian,
	                data
	            );
	        }
	        // Check for GPS Info IFD Pointer:
	        if (data.exif[0x8825] && !options.disableExifGps) {
	            loadImage.parseExifTags(
	                dataView,
	                tiffOffset,
	                tiffOffset + data.exif[0x8825], // directory offset
	                littleEndian,
	                data
	            );
	        }
	    };

	    // Registers the Exif parser for the APP1 JPEG meta data segment:
	    loadImage.metaDataParsers.jpeg[0xffe1].push(loadImage.parseExifData);

	    // Adds the following properties to the parseMetaData callback data:
	    // * exif: The exif tags, parsed by the parseExifData method

	    // Adds the following options to the parseMetaData method:
	    // * disableExif: Disables Exif parsing.
	    // * disableExifThumbnail: Disables parsing of the Exif Thumbnail.
	    // * disableExifSub: Disables parsing of the Exif Sub IFD.
	    // * disableExifGps: Disables parsing of the Exif GPS Info IFD.

	}));


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Load Image Meta 1.0.2
	 * https://github.com/blueimp/JavaScript-Load-Image
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Image meta data handling implementation
	 * based on the help and contribution of
	 * Achim Stöhr.
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */

	/*jslint continue:true */
	/*global define, window, DataView, Blob, Uint8Array, console */

	(function (factory) {
	    'use strict';
	    if (true) {
	        // Register as an anonymous AMD module:
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(73)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals:
	        factory(window.loadImage);
	    }
	}(function (loadImage) {
	    'use strict';

	    var hasblobSlice = window.Blob && (Blob.prototype.slice ||
	            Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

	    loadImage.blobSlice = hasblobSlice && function () {
	        var slice = this.slice || this.webkitSlice || this.mozSlice;
	        return slice.apply(this, arguments);
	    };

	    loadImage.metaDataParsers = {
	        jpeg: {
	            0xffe1: [] // APP1 marker
	        }
	    };

	    // Parses image meta data and calls the callback with an object argument
	    // with the following properties:
	    // * imageHead: The complete image head as ArrayBuffer (Uint8Array for IE10)
	    // The options arguments accepts an object and supports the following properties:
	    // * maxMetaDataSize: Defines the maximum number of bytes to parse.
	    // * disableImageHead: Disables creating the imageHead property.
	    loadImage.parseMetaData = function (file, callback, options) {
	        options = options || {};
	        var that = this,
	            // 256 KiB should contain all EXIF/ICC/IPTC segments:
	            maxMetaDataSize = options.maxMetaDataSize || 262144,
	            data = {},
	            noMetaData = !(window.DataView  && file && file.size >= 12 &&
	                file.type === 'image/jpeg' && loadImage.blobSlice);
	        if (noMetaData || !loadImage.readFile(
	                loadImage.blobSlice.call(file, 0, maxMetaDataSize),
	                function (e) {
	                    if (e.target.error) {
	                        // FileReader error
	                        console.log(e.target.error);
	                        callback(data);
	                        return;
	                    }
	                    // Note on endianness:
	                    // Since the marker and length bytes in JPEG files are always
	                    // stored in big endian order, we can leave the endian parameter
	                    // of the DataView methods undefined, defaulting to big endian.
	                    var buffer = e.target.result,
	                        dataView = new DataView(buffer),
	                        offset = 2,
	                        maxOffset = dataView.byteLength - 4,
	                        headLength = offset,
	                        markerBytes,
	                        markerLength,
	                        parsers,
	                        i;
	                    // Check for the JPEG marker (0xffd8):
	                    if (dataView.getUint16(0) === 0xffd8) {
	                        while (offset < maxOffset) {
	                            markerBytes = dataView.getUint16(offset);
	                            // Search for APPn (0xffeN) and COM (0xfffe) markers,
	                            // which contain application-specific meta-data like
	                            // Exif, ICC and IPTC data and text comments:
	                            if ((markerBytes >= 0xffe0 && markerBytes <= 0xffef) ||
	                                    markerBytes === 0xfffe) {
	                                // The marker bytes (2) are always followed by
	                                // the length bytes (2), indicating the length of the
	                                // marker segment, which includes the length bytes,
	                                // but not the marker bytes, so we add 2:
	                                markerLength = dataView.getUint16(offset + 2) + 2;
	                                if (offset + markerLength > dataView.byteLength) {
	                                    console.log('Invalid meta data: Invalid segment size.');
	                                    break;
	                                }
	                                parsers = loadImage.metaDataParsers.jpeg[markerBytes];
	                                if (parsers) {
	                                    for (i = 0; i < parsers.length; i += 1) {
	                                        parsers[i].call(
	                                            that,
	                                            dataView,
	                                            offset,
	                                            markerLength,
	                                            data,
	                                            options
	                                        );
	                                    }
	                                }
	                                offset += markerLength;
	                                headLength = offset;
	                            } else {
	                                // Not an APPn or COM marker, probably safe to
	                                // assume that this is the end of the meta data
	                                break;
	                            }
	                        }
	                        // Meta length must be longer than JPEG marker (2)
	                        // plus APPn marker (2), followed by length bytes (2):
	                        if (!options.disableImageHead && headLength > 6) {
	                            if (buffer.slice) {
	                                data.imageHead = buffer.slice(0, headLength);
	                            } else {
	                                // Workaround for IE10, which does not yet
	                                // support ArrayBuffer.slice:
	                                data.imageHead = new Uint8Array(buffer)
	                                    .subarray(0, headLength);
	                            }
	                        }
	                    } else {
	                        console.log('Invalid JPEG file: Missing JPEG marker.');
	                    }
	                    callback(data);
	                },
	                'readAsArrayBuffer'
	            )) {
	            callback(data);
	        }
	    };

	}));


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Load Image Exif Map 1.0.2
	 * https://github.com/blueimp/JavaScript-Load-Image
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Exif tags mapping based on
	 * https://github.com/jseidelin/exif-js
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */

	/*global define, window */

	(function (factory) {
	    'use strict';
	    if (true) {
	        // Register as an anonymous AMD module:
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(73), __webpack_require__(75)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals:
	        factory(window.loadImage);
	    }
	}(function (loadImage) {
	    'use strict';

	    loadImage.ExifMap.prototype.tags = {
	        // =================
	        // TIFF tags (IFD0):
	        // =================
	        0x0100: 'ImageWidth',
	        0x0101: 'ImageHeight',
	        0x8769: 'ExifIFDPointer',
	        0x8825: 'GPSInfoIFDPointer',
	        0xA005: 'InteroperabilityIFDPointer',
	        0x0102: 'BitsPerSample',
	        0x0103: 'Compression',
	        0x0106: 'PhotometricInterpretation',
	        0x0112: 'Orientation',
	        0x0115: 'SamplesPerPixel',
	        0x011C: 'PlanarConfiguration',
	        0x0212: 'YCbCrSubSampling',
	        0x0213: 'YCbCrPositioning',
	        0x011A: 'XResolution',
	        0x011B: 'YResolution',
	        0x0128: 'ResolutionUnit',
	        0x0111: 'StripOffsets',
	        0x0116: 'RowsPerStrip',
	        0x0117: 'StripByteCounts',
	        0x0201: 'JPEGInterchangeFormat',
	        0x0202: 'JPEGInterchangeFormatLength',
	        0x012D: 'TransferFunction',
	        0x013E: 'WhitePoint',
	        0x013F: 'PrimaryChromaticities',
	        0x0211: 'YCbCrCoefficients',
	        0x0214: 'ReferenceBlackWhite',
	        0x0132: 'DateTime',
	        0x010E: 'ImageDescription',
	        0x010F: 'Make',
	        0x0110: 'Model',
	        0x0131: 'Software',
	        0x013B: 'Artist',
	        0x8298: 'Copyright',
	        // ==================
	        // Exif Sub IFD tags:
	        // ==================
	        0x9000: 'ExifVersion',                  // EXIF version
	        0xA000: 'FlashpixVersion',              // Flashpix format version
	        0xA001: 'ColorSpace',                   // Color space information tag
	        0xA002: 'PixelXDimension',              // Valid width of meaningful image
	        0xA003: 'PixelYDimension',              // Valid height of meaningful image
	        0xA500: 'Gamma',
	        0x9101: 'ComponentsConfiguration',      // Information about channels
	        0x9102: 'CompressedBitsPerPixel',       // Compressed bits per pixel
	        0x927C: 'MakerNote',                    // Any desired information written by the manufacturer
	        0x9286: 'UserComment',                  // Comments by user
	        0xA004: 'RelatedSoundFile',             // Name of related sound file
	        0x9003: 'DateTimeOriginal',             // Date and time when the original image was generated
	        0x9004: 'DateTimeDigitized',            // Date and time when the image was stored digitally
	        0x9290: 'SubSecTime',                   // Fractions of seconds for DateTime
	        0x9291: 'SubSecTimeOriginal',           // Fractions of seconds for DateTimeOriginal
	        0x9292: 'SubSecTimeDigitized',          // Fractions of seconds for DateTimeDigitized
	        0x829A: 'ExposureTime',                 // Exposure time (in seconds)
	        0x829D: 'FNumber',
	        0x8822: 'ExposureProgram',              // Exposure program
	        0x8824: 'SpectralSensitivity',          // Spectral sensitivity
	        0x8827: 'PhotographicSensitivity',      // EXIF 2.3, ISOSpeedRatings in EXIF 2.2
	        0x8828: 'OECF',                         // Optoelectric conversion factor
	        0x8830: 'SensitivityType',
	        0x8831: 'StandardOutputSensitivity',
	        0x8832: 'RecommendedExposureIndex',
	        0x8833: 'ISOSpeed',
	        0x8834: 'ISOSpeedLatitudeyyy',
	        0x8835: 'ISOSpeedLatitudezzz',
	        0x9201: 'ShutterSpeedValue',            // Shutter speed
	        0x9202: 'ApertureValue',                // Lens aperture
	        0x9203: 'BrightnessValue',              // Value of brightness
	        0x9204: 'ExposureBias',                 // Exposure bias
	        0x9205: 'MaxApertureValue',             // Smallest F number of lens
	        0x9206: 'SubjectDistance',              // Distance to subject in meters
	        0x9207: 'MeteringMode',                 // Metering mode
	        0x9208: 'LightSource',                  // Kind of light source
	        0x9209: 'Flash',                        // Flash status
	        0x9214: 'SubjectArea',                  // Location and area of main subject
	        0x920A: 'FocalLength',                  // Focal length of the lens in mm
	        0xA20B: 'FlashEnergy',                  // Strobe energy in BCPS
	        0xA20C: 'SpatialFrequencyResponse',
	        0xA20E: 'FocalPlaneXResolution',        // Number of pixels in width direction per FPRUnit
	        0xA20F: 'FocalPlaneYResolution',        // Number of pixels in height direction per FPRUnit
	        0xA210: 'FocalPlaneResolutionUnit',     // Unit for measuring the focal plane resolution
	        0xA214: 'SubjectLocation',              // Location of subject in image
	        0xA215: 'ExposureIndex',                // Exposure index selected on camera
	        0xA217: 'SensingMethod',                // Image sensor type
	        0xA300: 'FileSource',                   // Image source (3 == DSC)
	        0xA301: 'SceneType',                    // Scene type (1 == directly photographed)
	        0xA302: 'CFAPattern',                   // Color filter array geometric pattern
	        0xA401: 'CustomRendered',               // Special processing
	        0xA402: 'ExposureMode',                 // Exposure mode
	        0xA403: 'WhiteBalance',                 // 1 = auto white balance, 2 = manual
	        0xA404: 'DigitalZoomRatio',             // Digital zoom ratio
	        0xA405: 'FocalLengthIn35mmFilm',
	        0xA406: 'SceneCaptureType',             // Type of scene
	        0xA407: 'GainControl',                  // Degree of overall image gain adjustment
	        0xA408: 'Contrast',                     // Direction of contrast processing applied by camera
	        0xA409: 'Saturation',                   // Direction of saturation processing applied by camera
	        0xA40A: 'Sharpness',                    // Direction of sharpness processing applied by camera
	        0xA40B: 'DeviceSettingDescription',
	        0xA40C: 'SubjectDistanceRange',         // Distance to subject
	        0xA420: 'ImageUniqueID',                // Identifier assigned uniquely to each image
	        0xA430: 'CameraOwnerName',
	        0xA431: 'BodySerialNumber',
	        0xA432: 'LensSpecification',
	        0xA433: 'LensMake',
	        0xA434: 'LensModel',
	        0xA435: 'LensSerialNumber',
	        // ==============
	        // GPS Info tags:
	        // ==============
	        0x0000: 'GPSVersionID',
	        0x0001: 'GPSLatitudeRef',
	        0x0002: 'GPSLatitude',
	        0x0003: 'GPSLongitudeRef',
	        0x0004: 'GPSLongitude',
	        0x0005: 'GPSAltitudeRef',
	        0x0006: 'GPSAltitude',
	        0x0007: 'GPSTimeStamp',
	        0x0008: 'GPSSatellites',
	        0x0009: 'GPSStatus',
	        0x000A: 'GPSMeasureMode',
	        0x000B: 'GPSDOP',
	        0x000C: 'GPSSpeedRef',
	        0x000D: 'GPSSpeed',
	        0x000E: 'GPSTrackRef',
	        0x000F: 'GPSTrack',
	        0x0010: 'GPSImgDirectionRef',
	        0x0011: 'GPSImgDirection',
	        0x0012: 'GPSMapDatum',
	        0x0013: 'GPSDestLatitudeRef',
	        0x0014: 'GPSDestLatitude',
	        0x0015: 'GPSDestLongitudeRef',
	        0x0016: 'GPSDestLongitude',
	        0x0017: 'GPSDestBearingRef',
	        0x0018: 'GPSDestBearing',
	        0x0019: 'GPSDestDistanceRef',
	        0x001A: 'GPSDestDistance',
	        0x001B: 'GPSProcessingMethod',
	        0x001C: 'GPSAreaInformation',
	        0x001D: 'GPSDateStamp',
	        0x001E: 'GPSDifferential',
	        0x001F: 'GPSHPositioningError'
	    };

	    loadImage.ExifMap.prototype.stringValues = {
	        ExposureProgram: {
	            0: 'Undefined',
	            1: 'Manual',
	            2: 'Normal program',
	            3: 'Aperture priority',
	            4: 'Shutter priority',
	            5: 'Creative program',
	            6: 'Action program',
	            7: 'Portrait mode',
	            8: 'Landscape mode'
	        },
	        MeteringMode: {
	            0: 'Unknown',
	            1: 'Average',
	            2: 'CenterWeightedAverage',
	            3: 'Spot',
	            4: 'MultiSpot',
	            5: 'Pattern',
	            6: 'Partial',
	            255: 'Other'
	        },
	        LightSource: {
	            0: 'Unknown',
	            1: 'Daylight',
	            2: 'Fluorescent',
	            3: 'Tungsten (incandescent light)',
	            4: 'Flash',
	            9: 'Fine weather',
	            10: 'Cloudy weather',
	            11: 'Shade',
	            12: 'Daylight fluorescent (D 5700 - 7100K)',
	            13: 'Day white fluorescent (N 4600 - 5400K)',
	            14: 'Cool white fluorescent (W 3900 - 4500K)',
	            15: 'White fluorescent (WW 3200 - 3700K)',
	            17: 'Standard light A',
	            18: 'Standard light B',
	            19: 'Standard light C',
	            20: 'D55',
	            21: 'D65',
	            22: 'D75',
	            23: 'D50',
	            24: 'ISO studio tungsten',
	            255: 'Other'
	        },
	        Flash: {
	            0x0000: 'Flash did not fire',
	            0x0001: 'Flash fired',
	            0x0005: 'Strobe return light not detected',
	            0x0007: 'Strobe return light detected',
	            0x0009: 'Flash fired, compulsory flash mode',
	            0x000D: 'Flash fired, compulsory flash mode, return light not detected',
	            0x000F: 'Flash fired, compulsory flash mode, return light detected',
	            0x0010: 'Flash did not fire, compulsory flash mode',
	            0x0018: 'Flash did not fire, auto mode',
	            0x0019: 'Flash fired, auto mode',
	            0x001D: 'Flash fired, auto mode, return light not detected',
	            0x001F: 'Flash fired, auto mode, return light detected',
	            0x0020: 'No flash function',
	            0x0041: 'Flash fired, red-eye reduction mode',
	            0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
	            0x0047: 'Flash fired, red-eye reduction mode, return light detected',
	            0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
	            0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
	            0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
	            0x0059: 'Flash fired, auto mode, red-eye reduction mode',
	            0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
	            0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
	        },
	        SensingMethod: {
	            1: 'Undefined',
	            2: 'One-chip color area sensor',
	            3: 'Two-chip color area sensor',
	            4: 'Three-chip color area sensor',
	            5: 'Color sequential area sensor',
	            7: 'Trilinear sensor',
	            8: 'Color sequential linear sensor'
	        },
	        SceneCaptureType: {
	            0: 'Standard',
	            1: 'Landscape',
	            2: 'Portrait',
	            3: 'Night scene'
	        },
	        SceneType: {
	            1: 'Directly photographed'
	        },
	        CustomRendered: {
	            0: 'Normal process',
	            1: 'Custom process'
	        },
	        WhiteBalance: {
	            0: 'Auto white balance',
	            1: 'Manual white balance'
	        },
	        GainControl: {
	            0: 'None',
	            1: 'Low gain up',
	            2: 'High gain up',
	            3: 'Low gain down',
	            4: 'High gain down'
	        },
	        Contrast: {
	            0: 'Normal',
	            1: 'Soft',
	            2: 'Hard'
	        },
	        Saturation: {
	            0: 'Normal',
	            1: 'Low saturation',
	            2: 'High saturation'
	        },
	        Sharpness: {
	            0: 'Normal',
	            1: 'Soft',
	            2: 'Hard'
	        },
	        SubjectDistanceRange: {
	            0: 'Unknown',
	            1: 'Macro',
	            2: 'Close view',
	            3: 'Distant view'
	        },
	        FileSource: {
	            3: 'DSC'
	        },
	        ComponentsConfiguration: {
	            0: '',
	            1: 'Y',
	            2: 'Cb',
	            3: 'Cr',
	            4: 'R',
	            5: 'G',
	            6: 'B'
	        },
	        Orientation: {
	            1: 'top-left',
	            2: 'top-right',
	            3: 'bottom-right',
	            4: 'bottom-left',
	            5: 'left-top',
	            6: 'right-top',
	            7: 'right-bottom',
	            8: 'left-bottom'
	        }
	    };

	    loadImage.ExifMap.prototype.getText = function (id) {
	        var value = this.get(id);
	        switch (id) {
	        case 'LightSource':
	        case 'Flash':
	        case 'MeteringMode':
	        case 'ExposureProgram':
	        case 'SensingMethod':
	        case 'SceneCaptureType':
	        case 'SceneType':
	        case 'CustomRendered':
	        case 'WhiteBalance':
	        case 'GainControl':
	        case 'Contrast':
	        case 'Saturation':
	        case 'Sharpness':
	        case 'SubjectDistanceRange':
	        case 'FileSource':
	        case 'Orientation':
	            return this.stringValues[id][value];
	        case 'ExifVersion':
	        case 'FlashpixVersion':
	            return String.fromCharCode(value[0], value[1], value[2], value[3]);
	        case 'ComponentsConfiguration':
	            return this.stringValues[id][value[0]] +
	                this.stringValues[id][value[1]] +
	                this.stringValues[id][value[2]] +
	                this.stringValues[id][value[3]];
	        case 'GPSVersionID':
	            return value[0] + '.' + value[1]  + '.' + value[2]  + '.' + value[3];
	        }
	        return String(value);
	    };

	    (function (exifMapPrototype) {
	        var tags = exifMapPrototype.tags,
	            map = exifMapPrototype.map,
	            prop;

	        // Map the tag names to tags:
	        for (prop in tags) {
	            if (tags.hasOwnProperty(prop)) {
	                map[tags[prop]] = prop;
	            }
	        }
	    }(loadImage.ExifMap.prototype));

	    loadImage.ExifMap.prototype.getAll = function () {
	        var map = {},
	            prop,
	            id;
	        for (prop in this) {
	            if (this.hasOwnProperty(prop)) {
	                id = this.tags[prop];
	                if (id) {
	                    map[id] = this.getText(id);
	                }
	            }
	        }
	        return map;
	    };

	}));


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(createjs, $, App) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.init = init;

	var _Baidu = __webpack_require__(5);

	var _Baidu2 = _interopRequireDefault(_Baidu);

	var _Data = __webpack_require__(4);

	var _Data2 = _interopRequireDefault(_Data);

	var _res = __webpack_require__(48);

	var _res2 = _interopRequireDefault(_res);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Weixin = __webpack_require__(79);
	var Yao = __webpack_require__(81);
	var loadImage = __webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(77);
	var cookie = __webpack_require__(82);
	var Hammer = __webpack_require__(83);
	var Loading = __webpack_require__(3);
	var _self;
	var picMC;
	var isStart = false;
	var startX;
	var startY;
	var rotation;
	var scale;
	var loadingImage;
	var isTu = false;
	var pathArr = [];
	var curPathID = 0;
	var hammertime;
	var bitmap;
	var drawIntervalID;
	var maskFilter;
	var shape;
	var imgWidth;
	var imgHeight;
	var oldPt;
	var oldMidPt;
	var size = 80;
	var finalBmp;

	var mubanMC_1;
	var mubanMC_2;
	var mubanMC_3;
	var mubanMC_4;
	var mubanMC_5;
	var mubanMC_6;
	var curMuban;

	var pathArr = [];
	var lastPathLine = [];
	var finalBase64;
	var motionBase64;

	function sizeClickHandler(e) {
		var mc = e.currentTarget;

		if (mc.Id == 0) {
			size = 30;
		} else if (mc.Id == 1) {
			size = 60;
		} else {
			size = 80;
		}
		for (var i = 0; i < 3; i++) {
			_self.toolMC['size_' + i].gotoAndStop(0);
		}
		mc.gotoAndStop(1);
	}
	function nextClickHandler(e) {
		if (isTu) {
			isTu = false;
			_self.titleMC.gotoAndStop(2);
			selectMuban();
			_self.gotoAndStop(1);
			Yao.open();
			return;
		}

		_Baidu2.default.trackEvent("Edge out");

		_self.uploadBtn.visible = false;
		_self.againBtn.visible = true;
		isTu = true;
		_self.toolMC.visible = true;
		_self.showTipMC.visible = false;
		_self.titleMC.gotoAndStop(1);
	}
	function getImg() {
		if (!finalBmp) {
			// _self.imgMC.cache(0,0,550,550);
			finalBase64 = _self.imgMC.getCacheDataURL();
			finalBmp = new createjs.Bitmap(finalBase64);
			// _self.imgMC.uncache();
		}

		_self.stage.addChild(finalBmp);

		curMuban.renMC.removeAllChildren();
		curMuban.renMC.addChild(finalBmp);
		_self.motionMC.removeAllChildren();
		_self.motionMC.addChild(curMuban);
	}
	/**
	 * 选择模板
	 */
	var mubanObj = {};
	var mubanID = 1;
	Yao.callback = function () {
		mubanID = Math.floor(Math.random() * 6) + 1;
		selectMuban();
	};
	function selectMuban() {
		for (var i = 0; i < 6; i++) {
			_self.dotList['dot_' + i].alpha = .5;
		}
		_self.dotList['dot_' + (mubanID - 1)].alpha = 1;

		if (mubanObj['muban' + mubanID].state() == "pending") {
			Loading.show();
		} else {
			curMuban = mubanObj['mubanMC_' + mubanID];
			getImg();
		}
		mubanObj['muban' + mubanID].done(function (v) {
			console.log(v);
			mubanObj['mubanMC_' + mubanID] = v;
			Loading.hide();
			curMuban = mubanObj['mubanMC_' + mubanID];
			getImg();
		});

		hammertime.get('pinch').set({ enable: false });
		hammertime.get('rotate').set({ enable: false });
		hammertime.get('pan').set({ enable: false });
	}

	function picMouseDownHandler(e) {
		if (_self.currentFrame != 0) {
			return;
		}
		startX = picMC.x;
		startY = picMC.y;
		rotation = picMC.rotation;
		scale = picMC.scaleX;
		oldPt = new createjs.Point(e.localX, e.localY);
		oldMidPt = oldPt;
		if (isTu) {
			lastPathLine = [];
			picMC.addEventListener("pressmove", mouseMoveHandler);
			return;
		}
		hammertime.get('pinch').set({ enable: true });
		hammertime.get('rotate').set({ enable: true });
		hammertime.get('pan').set({ enable: true });

		isStart = true;
	}
	function startDraw() {
		// shape.graphics.clear()
		shape.graphics.setStrokeStyle(30, "round");
		for (var i = 0; i < pathArr.length; i++) {
			if (i == 0) {
				shape.graphics.moveTo(pathArr[i].x, pathArr[i].y);
			} else {
				shape.graphics.lineTo(pathArr[i].x, pathArr[i].y);
			}
		}
	}
	function mouseMoveHandler(e) {
		// var midPt = new createjs.Point(oldPt.x + e.localX >> 1, oldPt.y + e.localY >> 1);
		var midPt = new createjs.Point((oldPt.x + e.localX) / 2, (oldPt.y + e.localY) / 2);
		shape.graphics.setStrokeStyle(size, 'round', 'round').beginStroke("rgba(0,0,0,1)").moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

		lastPathLine.push({ size: size, midPt: { x: midPt.x, y: midPt.y }, oldPt: { x: oldPt.x, y: oldPt.y }, oldMidPt: { x: oldMidPt.x, y: oldMidPt.y } });

		oldPt.x = e.localX;
		oldPt.y = e.localY;
		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;

		shape.updateCache();
		_self.imgMC.updateCache();
	}
	function picMouseUpHandler(e) {
		pathArr.push(lastPathLine);
		// console.log(pathArr)
		shape.updateCache();
		_self.imgMC.updateCache();

		isStart = false;
		picMC.removeEventListener("pressmove", mouseMoveHandler);
		hammertime.get('pinch').set({ enable: false });
		hammertime.get('rotate').set({ enable: false });
		hammertime.get('pan').set({ enable: false });
	}

	function uploadClickHandler(e) {
		$("#upload-file").click();
	}
	function loadImg() {
		console.log("loadimg");
		_self.gotoAndStop(0);
		_self.showTipMC.visible = true;
		_self.toolMC.visible = false;
		picMC.scaleX = picMC.scaleY = 1;

		shape.graphics.clear();
		isTu = false;
		addImg();
	}

	function addImg() {
		picMC.removeAllChildren();
		bitmap = new createjs.Bitmap(_Data2.default.img);
		if (_Data2.default.img.width < _Data2.default.img.height) {
			var scale = 550 / _Data2.default.img.width;
		} else {
			var scale = 550 / _Data2.default.img.height;
		}
		var container = new createjs.Container();
		bitmap.x = -_Data2.default.img.width / 2;
		bitmap.y = -_Data2.default.img.height / 2;
		imgWidth = _Data2.default.img.width;
		imgHeight = _Data2.default.img.height;

		shape.cache(-imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);

		picMC.addChild(bitmap);
		picMC.addChild(shape);
		picMC.scaleX = picMC.scaleY = scale;
		picMC.x = 275;
		picMC.y = 275;
		picMC.rotation = 0;
		_self.titleMC.gotoAndStop(0);
		container.addChild(picMC);
		_self.imgMC.addChild(container);
		_self.imgMC.updateCache();

		Yao.close();
		$(".pic-bg").show();
		// createjs.Ticker.removeAllChildren();
		// createjs.Ticker.addEventListener("tick", handleTick);
	}
	function addStageHandler(e) {

		addImg();
	}
	/**
	 * 下载模板
	 */
	function loadMotion() {
		mubanObj['muban1'] = _res2.default.loadScene({ name: "muban1", link: true }).done(function (v) {
			mubanObj.mubanMC_1 = v;
		});
		mubanObj['muban2'] = _res2.default.loadScene({ name: "muban2", link: true }).done(function (v) {
			mubanObj.mubanMC_2 = v;
		});
		mubanObj['muban3'] = _res2.default.loadScene({ name: "muban3", link: true }).done(function (v) {
			mubanObj.mubanMC_3 = v;
		});
		mubanObj['muban4'] = _res2.default.loadScene({ name: "muban4", link: true }).done(function (v) {
			mubanObj.mubanMC_4 = v;
		});
		mubanObj['muban5'] = _res2.default.loadScene({ name: "muban5", link: true }).done(function (v) {
			mubanObj.mubanMC_5 = v;
		});
		mubanObj['muban6'] = _res2.default.loadScene({ name: "muban6", link: true }).done(function (v) {
			mubanObj.mubanMC_6 = v;
		});
	}
	function againClickHandler(e) {
		_Baidu2.default.trackEvent("adjust");

		if (curMuban) {
			curMuban.renMC.removeAllChildren();
			_self.motionMC.removeAllChildren();
			finalBmp = null;
		}
		Yao.close();
		picMC.removeEventListener("pressmove");
		_self.uploadBtn.visible = true;
		_self.againBtn.visible = false;
		_self.showTipMC.visible = true;
		_self.toolMC.visible = false;
		_self.titleMC.gotoAndStop(0);
		_self.gotoAndStop(0);
		$(".result-img").hide();
		isTu = false;
	}
	function getClickHandler(e) {
		Yao.close();
		isTu = false;
		Loading.show();
		Loading.hide();
		_self.motionMC.cache(0, 0, 540, 540);
		motionBase64 = _self.motionMC.getCacheDataURL();
		$(".result-img img").attr("src", motionBase64);
		$(".result-img").show();
		_self.motionMC.uncache();

		_Baidu2.default.trackEvent("gif");

		upload();
		// _self.shareMC.visible=true;
	}

	var shareData = {
		title: "粒粒冰感咬出趣", // 分享标题
		desc: "我拍了一张粒粒百奇冰感趣味照片，你也一起玩转夏日冰感体验吧", //分享内容
		link: _Data2.default.serverPath, // 分享链接
		imgUrl: _Data2.default.serverPath + "201605/images/share.png" };

	// 分享图标
	/**
	 * 上传图片
	 */
	function upload() {
		Loading.show();
		var request = $.ajax({
			url: _Data2.default.serverPath + "luckydraw0504/default/upload",
			method: "post",
			data: { pic: finalBase64, motionPic: motionBase64, mubanID: mubanID },
			dataType: "json"
		});

		request.done(function (res) {
			Loading.hide();
			cookie.set("id", res.id);
			// alert(res.id)
			shareData.imgUrl = _Data2.default.serverPath + res.share;
			shareData.link = _Data2.default.serverPath + "luckydraw0504/default/show?id=" + res.id;
			Weixin.changeShare(shareData, shareData, function () {
				window.location.href = _Data2.default.serverPath + "luckydraw0504/lottery/index";
			});

			_self.gotoAndStop(2);
		});

		request.fail(function () {
			Loading.hide();
			alert("系统忙,请重试!");
		});
	}

	function shareClickHandler(e) {
		_Baidu2.default.trackEvent("share");
		_self.shareMC.visible = true;
		_self.shareMC.gotoAndPlay(1);
	}
	function shareMCCLickHandler(e) {
		_self.shareMC.visible = false;
	}
	function clearShapeHandler(e) {

		shape.graphics.clear();

		pathArr.pop();

		for (var i = 0; i < pathArr.length; i++) {
			for (var j = 0; j < pathArr[i].length; j++) {
				var item = pathArr[i][j];
				shape.graphics.setStrokeStyle(item.size, 'round', 'round').beginStroke("rgba(0,0,0,1)").moveTo(item.midPt.x, item.midPt.y).curveTo(item.oldPt.x, item.oldPt.y, item.oldMidPt.x, item.oldMidPt.y);
			}
		}

		shape.updateCache();
		_self.imgMC.updateCache();
	}

	$("#upload-file").on("change.step2", function (e) {

		var file = e.target.files[0];
		loadImage.parseMetaData(file, function (data) {

			if (data.exif) {
				var orientation = data.exif[0x0112];
			} else {
				var orientation = 1;
			}
			loadingImage = loadImage(file, function (canvas) {
				// console.log(img)
				var event = new createjs.Event("gotoStep");
				event.frame = 1;
				_Data2.default.img = canvas;
				App.globalDispatcher.dispatchEvent(event);

				loadImg(e.target);
			}, { maxWidth: 600, minHeight: 600, canvas: true, orientation: orientation } // Options
			);
			//      loadingImage.onload  = function(e){
			//      	$("#upload-file").off("change.step1");
			// var event=new createjs.Event("gotoStep");
			// event.frame=1;
			// Data.img=e.target;
			// App.globalDispatcher.dispatchEvent(event);

			// 	loadImg(e.target);
			// };
		});
	});

	hammertime = new Hammer($("body")[0]);
	hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 1, velocity: .1 });
	hammertime.on('pan', function (e) {
		if (isStart) {
			picMC.x = startX + e.deltaX;
			picMC.y = startY + e.deltaY;
			shape.updateCache();
			_self.imgMC.updateCache();
		}
	});
	hammertime.on('rotate', function (e) {
		if (isStart) {
			picMC.rotation = rotation + e.rotation;
			shape.updateCache();
			_self.imgMC.updateCache();
		}
	});
	hammertime.on('swipe', function (e) {
		if (_self.currentFrame == 1) {
			if (e.velocityX < 0) {
				mubanID--;
			} else if (e.velocityX > 0) {
				mubanID++;
			}
			if (mubanID < 1) {
				mubanID = 6;
			} else if (mubanID > 6) {
				mubanID = 1;
			}
			selectMuban();
		}
	});
	hammertime.on('pinch', function (e) {
		if (isStart) {
			if (e.scale < 1) {
				var temp = scale + (e.scale - 1) / 2;
			} else {
				var temp = scale + (e.scale - 1) / 10;
			}
			if (temp < .02) {
				temp = .02;
			} else if (temp > 5) {
				temp = 5;
			}
			picMC.scaleY = temp;
			picMC.scaleX = picMC.scaleY;
			shape.updateCache();
			_self.imgMC.updateCache();
		}
	});

	function handleTick(event) {
		shape.updateCache();
		_self.imgMC.updateCache();
		stage.update();
	}

	function init(display) {

		_self = display;
		_self.toolMC.visible = false;
		_self.againBtn.visible = false;
		_self.shareMC.visible = false;
		_self.shareMC.gotoAndStop(0);

		_self.uploadBtn.addEventListener("click", uploadClickHandler);
		_self.nextBtn.addEventListener("click", nextClickHandler);
		_self.againBtn.addEventListener("click", againClickHandler);
		_self.againBtn2.addEventListener("click", againClickHandler);
		_self.getBtn.addEventListener("click", getClickHandler);
		_self.shareBtn.addEventListener("click", shareClickHandler);
		_self.shareMC.addEventListener("click", shareMCCLickHandler);

		for (var i = 0; i < 3; i++) {
			_self.toolMC['size_' + i].Id = i;
			_self.toolMC['size_' + i].gotoAndStop(0);
			_self.toolMC['size_' + i].addEventListener("click", sizeClickHandler);
		}
		_self.toolMC['size_' + 2].gotoAndStop(1);
		_self.toolMC.resetBtn.addEventListener("click", clearShapeHandler);
		_self.titleMC.gotoAndStop(0);

		picMC = new createjs.Container();
		picMC.addEventListener("mousedown", picMouseDownHandler);
		picMC.addEventListener("pressup", picMouseUpHandler);
		shape = new createjs.Shape();
		shape.compositeOperation = "destination-out";

		_self.imgMC.cache(0, 0, 550, 550);

		isTu = false;

		loadMotion();
		_self.addEventListener("added", addStageHandler);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49), __webpack_require__(1), __webpack_require__(68)))

/***/ },
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports) {

	var SHAKE_THRESHOLD = 2000;
	var last_update;
	var x, y, z, last_x, last_y, last_z;
	var isYao;

	init();

	var exports = {};

	function init() {
	    isYao = false;
	    last_update = x = y = z = last_x = last_y = last_z = 0;
	    addListener();
	}

	exports.open = function () {
	    isYao = true;
	}

	exports.close = function () {
	    isYao = false;
	}

	exports.callback = function () {

	}

	function addListener() {
	    if (window.DeviceMotionEvent) {
	        window.addEventListener("devicemotion", deviceMotionHandler, false);
	    }
	}

	function deviceMotionHandler(eventData) {
	    var acceleration = eventData.accelerationIncludingGravity;
	    var curTime = new Date().getTime();
	    if (curTime - last_update > 100 && isYao) {
	        var diffTime = curTime - last_update;
	        last_update = curTime;
	        x = acceleration.x;
	        y = acceleration.y;
	        z = acceleration.z;
	        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
	        if (speed > SHAKE_THRESHOLD) {
	            if (typeof exports.callback === "function") {
	                exports.callback(eventData);
	            }
	        }
	        last_x = x;
	        last_y = y;
	        last_z = z;
	    }
	}

	module.exports = exports;

/***/ },
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.4 - 2014-09-28
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2014 Jorik Tangelder;
	 * Licensed under the MIT license */
	!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),"function"==kb&&__webpack_require__(2)?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return eb}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Menu = __webpack_require__(69);

	var Menu = _interopRequireWildcard(_Menu);

	var _Data = __webpack_require__(4);

	var _Data2 = _interopRequireDefault(_Data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _self;
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {

		_self.shareMC.visible = false;
		// _self.shareMC.alpha=0

		_self.shareBtn.addEventListener("click", startClickHandler);
		_self.shareMC.addEventListener("click", shareClickHandler);
	}
	function startClickHandler(e) {
		_self.shareMC.visible = true;
		_self.shareMC.gotoAndPlay(1);
		// window.location.href=Data.serverPath;
	}
	function shareClickHandler(e) {
		_self.shareMC.visible = false;
	}
	module.exports.construct = construct;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(App, createjs) {"use strict";

	var _self;
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {
		_self.startBtn.addEventListener("click", startClickHandler);
	}
	function startClickHandler(e) {
		App.globalDispatcher.dispatchEvent(new createjs.Event("startGame"));
	}

	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68), __webpack_require__(49)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, App, createjs) {"use strict";

	var _self;
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {
		$("#rule").show();
		_self.startBtn.addEventListener("click", startClickHandler);
	}
	function startClickHandler(e) {
		$("#rule").hide();
		App.globalDispatcher.dispatchEvent(new createjs.Event("startGame"));
	}

	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(68), __webpack_require__(49)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Menu = __webpack_require__(69);

	var Menu = _interopRequireWildcard(_Menu);

	var _Data = __webpack_require__(4);

	var _Data2 = _interopRequireDefault(_Data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _self;
	var libs = undefined;
	function construct(display) {
		_self = display;
		init();
	}
	function init() {

		_self.startBtn.addEventListener("click", startClickHandler);
	}
	function startClickHandler(e) {
		window.location.href = _Data2.default.serverPath;
	}

	module.exports.construct = construct;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index/index_atlas_.json": 89,
		"./index/index_atlas_2.json": 90,
		"./index/index_atlas_3.json": 91,
		"./loading/loading_atlas_.json": 92,
		"./main/main_atlas_.json": 93,
		"./main/main_atlas_2.json": 94,
		"./main/main_atlas_3.json": 95,
		"./main/main_atlas_4.json": 96,
		"./main/main_atlas_5.json": 97,
		"./me/me_atlas_.json": 98,
		"./me/me_atlas_2.json": 99,
		"./me/me_atlas_3.json": 100,
		"./product/product_atlas_.json": 101,
		"./rule/rule_atlas_.json": 102,
		"./show/show_atlas_.json": 103
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 88;


/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/index/index_atlas_.png"
		],
		"frames": [
			[
				385,
				0,
				208,
				372
			],
			[
				269,
				374,
				269,
				272
			],
			[
				0,
				648,
				198,
				361
			],
			[
				200,
				648,
				343,
				190
			],
			[
				0,
				0,
				383,
				246
			],
			[
				0,
				248,
				267,
				295
			]
		]
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/index/index_atlas_2.png"
		],
		"frames": [
			[
				483,
				483,
				97,
				332
			],
			[
				0,
				0,
				157,
				401
			],
			[
				195,
				226,
				144,
				400
			],
			[
				512,
				0,
				96,
				263
			],
			[
				144,
				898,
				233,
				113
			],
			[
				159,
				0,
				261,
				224
			],
			[
				380,
				483,
				101,
				346
			],
			[
				195,
				628,
				183,
				268
			],
			[
				0,
				403,
				193,
				305
			],
			[
				0,
				710,
				142,
				316
			],
			[
				341,
				226,
				169,
				255
			],
			[
				380,
				831,
				249,
				127
			]
		]
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/index/index_atlas_3.png"
		],
		"frames": [
			[
				579,
				471,
				14,
				14
			],
			[
				330,
				875,
				56,
				18
			],
			[
				416,
				839,
				69,
				23
			],
			[
				389,
				232,
				99,
				115
			],
			[
				604,
				828,
				23,
				64
			],
			[
				340,
				571,
				109,
				61
			],
			[
				180,
				679,
				37,
				29
			],
			[
				487,
				839,
				30,
				47
			],
			[
				562,
				613,
				64,
				96
			],
			[
				515,
				490,
				25,
				13
			],
			[
				160,
				136,
				27,
				94
			],
			[
				309,
				697,
				66,
				66
			],
			[
				490,
				232,
				23,
				95
			],
			[
				451,
				571,
				109,
				61
			],
			[
				562,
				711,
				60,
				51
			],
			[
				492,
				445,
				85,
				43
			],
			[
				177,
				773,
				51,
				44
			],
			[
				346,
				767,
				57,
				40
			],
			[
				180,
				711,
				54,
				60
			],
			[
				554,
				859,
				48,
				26
			],
			[
				200,
				879,
				24,
				13
			],
			[
				111,
				586,
				48,
				83
			],
			[
				128,
				878,
				23,
				42
			],
			[
				0,
				349,
				171,
				65
			],
			[
				330,
				832,
				41,
				41
			],
			[
				146,
				753,
				29,
				82
			],
			[
				536,
				828,
				66,
				29
			],
			[
				68,
				860,
				58,
				21
			],
			[
				599,
				337,
				28,
				274
			],
			[
				274,
				134,
				30,
				14
			],
			[
				0,
				0,
				188,
				134
			],
			[
				229,
				640,
				78,
				69
			],
			[
				173,
				402,
				27,
				275
			],
			[
				381,
				445,
				109,
				61
			],
			[
				229,
				402,
				40,
				45
			],
			[
				0,
				692,
				66,
				66
			],
			[
				531,
				634,
				29,
				58
			],
			[
				432,
				707,
				62,
				56
			],
			[
				274,
				232,
				113,
				112
			],
			[
				236,
				711,
				58,
				55
			],
			[
				451,
				634,
				78,
				71
			],
			[
				229,
				451,
				109,
				61
			],
			[
				0,
				136,
				158,
				94
			],
			[
				123,
				232,
				60,
				106
			],
			[
				274,
				346,
				105,
				103
			],
			[
				229,
				577,
				109,
				61
			],
			[
				552,
				764,
				42,
				58
			],
			[
				0,
				861,
				24,
				48
			],
			[
				440,
				864,
				32,
				32
			],
			[
				306,
				134,
				24,
				15
			],
			[
				0,
				629,
				109,
				61
			],
			[
				340,
				634,
				109,
				61
			],
			[
				190,
				0,
				186,
				132
			],
			[
				265,
				768,
				25,
				46
			],
			[
				87,
				416,
				74,
				78
			],
			[
				332,
				134,
				26,
				13
			],
			[
				111,
				496,
				52,
				88
			],
			[
				562,
				583,
				33,
				25
			],
			[
				68,
				753,
				76,
				39
			],
			[
				432,
				765,
				59,
				40
			],
			[
				202,
				402,
				25,
				275
			],
			[
				416,
				864,
				22,
				50
			],
			[
				346,
				809,
				93,
				21
			],
			[
				554,
				887,
				45,
				19
			],
			[
				496,
				707,
				64,
				53
			],
			[
				360,
				134,
				16,
				16
			],
			[
				0,
				503,
				109,
				61
			],
			[
				441,
				816,
				93,
				21
			],
			[
				0,
				760,
				50,
				59
			],
			[
				340,
				451,
				39,
				55
			],
			[
				0,
				416,
				85,
				85
			],
			[
				235,
				854,
				25,
				49
			],
			[
				377,
				697,
				53,
				68
			],
			[
				236,
				768,
				27,
				84
			],
			[
				68,
				830,
				68,
				28
			],
			[
				296,
				765,
				48,
				50
			],
			[
				562,
				490,
				34,
				91
			],
			[
				173,
				340,
				15,
				37
			],
			[
				340,
				508,
				109,
				61
			],
			[
				490,
				337,
				107,
				106
			],
			[
				111,
				679,
				67,
				72
			],
			[
				451,
				508,
				109,
				61
			],
			[
				496,
				762,
				54,
				52
			],
			[
				388,
				875,
				21,
				46
			],
			[
				405,
				767,
				24,
				31
			],
			[
				173,
				379,
				15,
				21
			],
			[
				52,
				794,
				60,
				34
			],
			[
				471,
				349,
				17,
				26
			],
			[
				68,
				692,
				29,
				58
			],
			[
				177,
				819,
				55,
				33
			],
			[
				373,
				832,
				41,
				41
			],
			[
				190,
				134,
				82,
				266
			],
			[
				492,
				490,
				21,
				16
			],
			[
				138,
				837,
				37,
				39
			],
			[
				26,
				861,
				26,
				44
			],
			[
				177,
				879,
				21,
				42
			],
			[
				274,
				152,
				240,
				78
			],
			[
				0,
				232,
				121,
				115
			],
			[
				596,
				764,
				38,
				62
			],
			[
				114,
				794,
				19,
				29
			],
			[
				265,
				850,
				26,
				54
			],
			[
				381,
				349,
				88,
				93
			],
			[
				471,
				377,
				13,
				27
			],
			[
				378,
				0,
				150,
				150
			],
			[
				229,
				514,
				109,
				61
			],
			[
				0,
				566,
				109,
				61
			],
			[
				293,
				850,
				35,
				36
			],
			[
				309,
				640,
				26,
				55
			],
			[
				579,
				445,
				13,
				24
			],
			[
				54,
				883,
				49,
				18
			],
			[
				471,
				406,
				13,
				26
			],
			[
				0,
				830,
				66,
				29
			],
			[
				177,
				854,
				56,
				23
			],
			[
				153,
				878,
				22,
				41
			],
			[
				265,
				817,
				63,
				31
			],
			[
				519,
				859,
				33,
				38
			],
			[
				516,
				214,
				116,
				121
			],
			[
				530,
				0,
				104,
				212
			]
		]
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/loading/loading_atlas_.png"
		],
		"frames": [
			[
				370,
				307,
				48,
				26
			],
			[
				267,
				0,
				113,
				112
			],
			[
				281,
				387,
				26,
				33
			],
			[
				160,
				269,
				45,
				19
			],
			[
				469,
				376,
				13,
				27
			],
			[
				50,
				384,
				56,
				23
			],
			[
				493,
				406,
				13,
				26
			],
			[
				469,
				406,
				22,
				34
			],
			[
				347,
				222,
				21,
				201
			],
			[
				108,
				384,
				58,
				21
			],
			[
				441,
				376,
				26,
				44
			],
			[
				149,
				0,
				116,
				159
			],
			[
				279,
				222,
				66,
				66
			],
			[
				153,
				354,
				68,
				28
			],
			[
				149,
				161,
				60,
				106
			],
			[
				80,
				187,
				67,
				72
			],
			[
				160,
				290,
				59,
				40
			],
			[
				168,
				384,
				32,
				32
			],
			[
				108,
				407,
				24,
				31
			],
			[
				396,
				393,
				23,
				34
			],
			[
				441,
				335,
				37,
				39
			],
			[
				421,
				393,
				13,
				34
			],
			[
				226,
				403,
				22,
				34
			],
			[
				223,
				354,
				30,
				47
			],
			[
				160,
				332,
				26,
				13
			],
			[
				483,
				0,
				21,
				242
			],
			[
				221,
				290,
				38,
				62
			],
			[
				486,
				244,
				21,
				160
			],
			[
				255,
				376,
				24,
				48
			],
			[
				85,
				261,
				42,
				58
			],
			[
				211,
				222,
				66,
				66
			],
			[
				290,
				290,
				23,
				95
			],
			[
				202,
				403,
				22,
				34
			],
			[
				73,
				409,
				20,
				34
			],
			[
				370,
				393,
				24,
				33
			],
			[
				188,
				332,
				21,
				16
			],
			[
				85,
				321,
				37,
				29
			],
			[
				261,
				290,
				27,
				84
			],
			[
				50,
				409,
				21,
				34
			],
			[
				0,
				0,
				147,
				185
			],
			[
				315,
				290,
				29,
				58
			],
			[
				211,
				161,
				50,
				59
			],
			[
				420,
				299,
				60,
				34
			],
			[
				376,
				117,
				105,
				103
			],
			[
				134,
				407,
				23,
				32
			],
			[
				85,
				353,
				66,
				29
			],
			[
				31,
				322,
				17,
				97
			],
			[
				370,
				222,
				48,
				83
			],
			[
				309,
				407,
				21,
				34
			],
			[
				420,
				222,
				49,
				18
			],
			[
				0,
				382,
				22,
				50
			],
			[
				56,
				261,
				27,
				94
			],
			[
				382,
				0,
				99,
				115
			],
			[
				370,
				335,
				63,
				31
			],
			[
				0,
				187,
				78,
				71
			],
			[
				370,
				368,
				69,
				23
			],
			[
				420,
				244,
				64,
				53
			],
			[
				129,
				269,
				29,
				82
			],
			[
				315,
				350,
				26,
				55
			],
			[
				267,
				114,
				107,
				106
			],
			[
				50,
				357,
				33,
				25
			],
			[
				0,
				260,
				54,
				60
			],
			[
				0,
				322,
				29,
				58
			]
		]
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/main/main_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				585,
				591
			]
		]
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/main/main_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				585,
				591
			]
		]
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/main/main_atlas_3.png"
		],
		"frames": [
			[
				0,
				0,
				508,
				567
			]
		]
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/main/main_atlas_4.png"
		],
		"frames": [
			[
				0,
				515,
				436,
				435
			],
			[
				0,
				0,
				492,
				513
			]
		]
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/main/main_atlas_5.png"
		],
		"frames": [
			[
				0,
				662,
				51,
				15
			],
			[
				504,
				442,
				123,
				132
			],
			[
				427,
				930,
				34,
				42
			],
			[
				288,
				680,
				71,
				81
			],
			[
				568,
				972,
				49,
				18
			],
			[
				199,
				545,
				50,
				30
			],
			[
				186,
				772,
				117,
				30
			],
			[
				620,
				0,
				20,
				31
			],
			[
				584,
				867,
				51,
				53
			],
			[
				49,
				936,
				58,
				21
			],
			[
				527,
				758,
				64,
				53
			],
			[
				596,
				680,
				42,
				52
			],
			[
				60,
				833,
				53,
				53
			],
			[
				137,
				347,
				125,
				136
			],
			[
				80,
				662,
				18,
				14
			],
			[
				0,
				891,
				47,
				49
			],
			[
				0,
				836,
				53,
				53
			],
			[
				361,
				304,
				141,
				140
			],
			[
				357,
				581,
				23,
				27
			],
			[
				0,
				680,
				286,
				26
			],
			[
				620,
				126,
				13,
				26
			],
			[
				275,
				875,
				50,
				52
			],
			[
				168,
				966,
				29,
				29
			],
			[
				295,
				825,
				61,
				48
			],
			[
				0,
				942,
				46,
				25
			],
			[
				527,
				684,
				67,
				72
			],
			[
				584,
				813,
				56,
				52
			],
			[
				221,
				916,
				47,
				41
			],
			[
				171,
				862,
				48,
				57
			],
			[
				186,
				708,
				60,
				62
			],
			[
				68,
				708,
				66,
				66
			],
			[
				264,
				347,
				76,
				97
			],
			[
				136,
				946,
				30,
				30
			],
			[
				0,
				708,
				66,
				66
			],
			[
				248,
				708,
				29,
				58
			],
			[
				0,
				485,
				259,
				58
			],
			[
				270,
				929,
				37,
				39
			],
			[
				521,
				0,
				97,
				191
			],
			[
				620,
				97,
				13,
				27
			],
			[
				119,
				545,
				78,
				71
			],
			[
				121,
				793,
				56,
				56
			],
			[
				115,
				851,
				54,
				51
			],
			[
				60,
				776,
				59,
				55
			],
			[
				339,
				945,
				22,
				50
			],
			[
				136,
				708,
				48,
				83
			],
			[
				281,
				0,
				86,
				272
			],
			[
				463,
				965,
				29,
				29
			],
			[
				119,
				624,
				337,
				26
			],
			[
				527,
				576,
				60,
				106
			],
			[
				432,
				723,
				56,
				65
			],
			[
				199,
				581,
				156,
				26
			],
			[
				342,
				347,
				16,
				16
			],
			[
				0,
				289,
				359,
				56
			],
			[
				537,
				922,
				29,
				50
			],
			[
				469,
				884,
				34,
				34
			],
			[
				0,
				969,
				19,
				44
			],
			[
				358,
				848,
				52,
				53
			],
			[
				53,
				662,
				25,
				14
			],
			[
				433,
				652,
				29,
				58
			],
			[
				342,
				402,
				14,
				15
			],
			[
				469,
				922,
				41,
				41
			],
			[
				620,
				33,
				15,
				31
			],
			[
				593,
				758,
				47,
				51
			],
			[
				521,
				298,
				105,
				3
			],
			[
				628,
				181,
				12,
				12
			],
			[
				363,
				945,
				19,
				57
			],
			[
				311,
				274,
				24,
				10
			],
			[
				512,
				922,
				23,
				64
			],
			[
				264,
				446,
				116,
				133
			],
			[
				608,
				922,
				24,
				48
			],
			[
				109,
				904,
				57,
				40
			],
			[
				342,
				383,
				15,
				17
			],
			[
				237,
				804,
				56,
				56
			],
			[
				471,
				446,
				27,
				275
			],
			[
				412,
				884,
				55,
				44
			],
			[
				369,
				152,
				150,
				150
			],
			[
				361,
				680,
				69,
				72
			],
			[
				48,
				959,
				57,
				17
			],
			[
				221,
				862,
				52,
				52
			],
			[
				281,
				274,
				28,
				12
			],
			[
				589,
				576,
				45,
				102
			],
			[
				388,
				930,
				37,
				39
			],
			[
				0,
				0,
				279,
				287
			],
			[
				500,
				576,
				25,
				275
			],
			[
				382,
				446,
				87,
				176
			],
			[
				504,
				304,
				132,
				136
			],
			[
				327,
				903,
				59,
				40
			],
			[
				305,
				763,
				54,
				60
			],
			[
				327,
				875,
				24,
				24
			],
			[
				210,
				959,
				49,
				18
			],
			[
				179,
				804,
				56,
				56
			],
			[
				620,
				66,
				13,
				29
			],
			[
				0,
				347,
				135,
				134
			],
			[
				0,
				776,
				58,
				58
			],
			[
				109,
				946,
				25,
				40
			],
			[
				361,
				754,
				45,
				79
			],
			[
				521,
				193,
				105,
				103
			],
			[
				568,
				922,
				38,
				38
			],
			[
				369,
				0,
				150,
				150
			],
			[
				620,
				154,
				12,
				25
			],
			[
				309,
				945,
				28,
				41
			],
			[
				342,
				365,
				16,
				16
			],
			[
				412,
				853,
				95,
				29
			],
			[
				509,
				870,
				54,
				50
			],
			[
				168,
				921,
				40,
				43
			],
			[
				55,
				888,
				52,
				46
			],
			[
				408,
				790,
				56,
				56
			],
			[
				527,
				813,
				55,
				55
			],
			[
				119,
				652,
				312,
				26
			],
			[
				0,
				545,
				117,
				115
			],
			[
				466,
				790,
				29,
				58
			],
			[
				337,
				274,
				16,
				11
			]
		]
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/me/me_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/me/me_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				585,
				591
			],
			[
				152,
				882,
				359,
				56
			],
			[
				513,
				873,
				125,
				136
			],
			[
				369,
				735,
				135,
				134
			],
			[
				369,
				593,
				141,
				140
			],
			[
				512,
				593,
				123,
				132
			],
			[
				0,
				593,
				279,
				287
			],
			[
				281,
				593,
				86,
				272
			],
			[
				506,
				735,
				132,
				136
			],
			[
				0,
				882,
				150,
				150
			]
		]
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/me/me_atlas_3.png"
		],
		"frames": [
			[
				368,
				272,
				50,
				30
			],
			[
				488,
				50,
				22,
				50
			],
			[
				199,
				164,
				16,
				11
			],
			[
				337,
				272,
				29,
				58
			],
			[
				339,
				105,
				76,
				97
			],
			[
				108,
				206,
				55,
				55
			],
			[
				97,
				135,
				57,
				40
			],
			[
				459,
				277,
				34,
				42
			],
			[
				165,
				256,
				52,
				52
			],
			[
				0,
				0,
				116,
				133
			],
			[
				199,
				135,
				23,
				27
			],
			[
				228,
				206,
				56,
				52
			],
			[
				432,
				0,
				27,
				275
			],
			[
				50,
				206,
				56,
				65
			],
			[
				306,
				265,
				29,
				58
			],
			[
				488,
				0,
				24,
				48
			],
			[
				461,
				0,
				25,
				275
			],
			[
				368,
				304,
				49,
				18
			],
			[
				488,
				102,
				19,
				57
			],
			[
				50,
				273,
				37,
				39
			],
			[
				208,
				312,
				25,
				14
			],
			[
				407,
				204,
				23,
				64
			],
			[
				417,
				105,
				13,
				27
			],
			[
				339,
				204,
				66,
				66
			],
			[
				0,
				206,
				48,
				83
			],
			[
				118,
				0,
				116,
				133
			],
			[
				157,
				310,
				49,
				18
			],
			[
				488,
				194,
				16,
				16
			],
			[
				0,
				135,
				95,
				29
			],
			[
				0,
				291,
				46,
				25
			],
			[
				420,
				277,
				37,
				39
			],
			[
				417,
				134,
				13,
				26
			],
			[
				286,
				206,
				48,
				57
			],
			[
				165,
				206,
				61,
				48
			],
			[
				488,
				161,
				20,
				31
			],
			[
				488,
				212,
				14,
				15
			],
			[
				219,
				260,
				54,
				50
			],
			[
				275,
				265,
				29,
				58
			],
			[
				156,
				135,
				41,
				41
			],
			[
				325,
				0,
				105,
				103
			],
			[
				108,
				263,
				47,
				51
			],
			[
				236,
				0,
				87,
				176
			],
			[
				0,
				178,
				337,
				26
			]
		]
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/product/product_atlas_.png"
		],
		"frames": [
			[
				483,
				453,
				25,
				275
			],
			[
				0,
				716,
				105,
				103
			],
			[
				26,
				578,
				16,
				11
			],
			[
				399,
				872,
				40,
				43
			],
			[
				169,
				716,
				67,
				72
			],
			[
				204,
				904,
				28,
				41
			],
			[
				425,
				822,
				61,
				48
			],
			[
				0,
				883,
				41,
				41
			],
			[
				495,
				277,
				14,
				15
			],
			[
				85,
				855,
				42,
				52
			],
			[
				56,
				824,
				95,
				29
			],
			[
				167,
				450,
				22,
				50
			],
			[
				238,
				784,
				66,
				66
			],
			[
				0,
				592,
				362,
				122
			],
			[
				358,
				301,
				150,
				150
			],
			[
				167,
				400,
				24,
				48
			],
			[
				472,
				872,
				29,
				58
			],
			[
				167,
				303,
				23,
				95
			],
			[
				135,
				564,
				13,
				26
			],
			[
				0,
				0,
				191,
				301
			],
			[
				288,
				854,
				48,
				50
			],
			[
				87,
				491,
				78,
				71
			],
			[
				384,
				0,
				86,
				272
			],
			[
				203,
				852,
				54,
				50
			],
			[
				0,
				578,
				24,
				10
			],
			[
				364,
				588,
				117,
				115
			],
			[
				167,
				535,
				13,
				27
			],
			[
				384,
				274,
				58,
				21
			],
			[
				338,
				854,
				59,
				40
			],
			[
				288,
				906,
				25,
				40
			],
			[
				306,
				822,
				117,
				30
			],
			[
				167,
				502,
				20,
				31
			],
			[
				465,
				730,
				29,
				82
			],
			[
				259,
				852,
				27,
				94
			],
			[
				107,
				716,
				60,
				106
			],
			[
				441,
				872,
				29,
				58
			],
			[
				87,
				564,
				46,
				25
			],
			[
				193,
				0,
				189,
				299
			],
			[
				238,
				716,
				66,
				66
			],
			[
				193,
				301,
				163,
				289
			],
			[
				168,
				904,
				34,
				42
			],
			[
				56,
				855,
				27,
				84
			],
			[
				129,
				904,
				37,
				39
			],
			[
				0,
				491,
				85,
				85
			],
			[
				153,
				845,
				48,
				57
			],
			[
				0,
				303,
				165,
				186
			],
			[
				0,
				821,
				54,
				60
			],
			[
				150,
				564,
				28,
				12
			],
			[
				444,
				277,
				49,
				18
			],
			[
				364,
				705,
				99,
				115
			],
			[
				358,
				453,
				116,
				133
			],
			[
				338,
				896,
				50,
				30
			],
			[
				169,
				790,
				64,
				53
			],
			[
				306,
				716,
				48,
				83
			],
			[
				472,
				0,
				27,
				275
			]
		]
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/rule/rule_atlas_.png"
		],
		"frames": [
			[
				305,
				453,
				61,
				48
			],
			[
				0,
				426,
				78,
				71
			],
			[
				286,
				293,
				50,
				30
			],
			[
				88,
				240,
				95,
				29
			],
			[
				322,
				410,
				13,
				26
			],
			[
				239,
				453,
				64,
				53
			],
			[
				251,
				0,
				48,
				83
			],
			[
				80,
				426,
				67,
				72
			],
			[
				351,
				0,
				24,
				48
			],
			[
				251,
				199,
				48,
				50
			],
			[
				301,
				59,
				58,
				21
			],
			[
				224,
				277,
				60,
				106
			],
			[
				224,
				0,
				25,
				275
			],
			[
				338,
				293,
				49,
				18
			],
			[
				325,
				325,
				46,
				25
			],
			[
				301,
				199,
				41,
				41
			],
			[
				0,
				274,
				150,
				150
			],
			[
				343,
				404,
				20,
				31
			],
			[
				343,
				352,
				22,
				50
			],
			[
				286,
				251,
				59,
				40
			],
			[
				301,
				0,
				48,
				57
			],
			[
				152,
				331,
				29,
				58
			],
			[
				286,
				325,
				37,
				39
			],
			[
				152,
				271,
				29,
				58
			],
			[
				251,
				147,
				54,
				50
			],
			[
				88,
				135,
				105,
				103
			],
			[
				251,
				85,
				54,
				60
			],
			[
				325,
				352,
				16,
				11
			],
			[
				286,
				366,
				14,
				15
			],
			[
				307,
				366,
				34,
				42
			],
			[
				195,
				135,
				27,
				275
			],
			[
				152,
				412,
				85,
				85
			],
			[
				307,
				410,
				13,
				27
			],
			[
				88,
				0,
				116,
				133
			],
			[
				239,
				385,
				66,
				66
			],
			[
				0,
				0,
				86,
				272
			]
		]
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/show/show_atlas_.png"
		],
		"frames": [
			[
				587,
				554,
				50,
				30
			],
			[
				0,
				0,
				585,
				591
			],
			[
				616,
				50,
				22,
				50
			],
			[
				616,
				209,
				16,
				11
			],
			[
				564,
				752,
				29,
				58
			],
			[
				88,
				593,
				150,
				150
			],
			[
				397,
				760,
				34,
				42
			],
			[
				240,
				655,
				116,
				133
			],
			[
				587,
				0,
				27,
				275
			],
			[
				515,
				752,
				47,
				51
			],
			[
				198,
				745,
				29,
				58
			],
			[
				616,
				0,
				24,
				48
			],
			[
				587,
				277,
				25,
				275
			],
			[
				358,
				760,
				37,
				39
			],
			[
				616,
				135,
				13,
				27
			],
			[
				465,
				655,
				48,
				83
			],
			[
				277,
				790,
				49,
				18
			],
			[
				240,
				593,
				315,
				60
			],
			[
				515,
				721,
				95,
				29
			],
			[
				229,
				790,
				46,
				25
			],
			[
				578,
				671,
				53,
				47
			],
			[
				616,
				164,
				13,
				26
			],
			[
				465,
				740,
				48,
				57
			],
			[
				515,
				671,
				61,
				48
			],
			[
				616,
				102,
				20,
				31
			],
			[
				616,
				192,
				14,
				15
			],
			[
				142,
				745,
				54,
				50
			],
			[
				595,
				752,
				41,
				41
			],
			[
				358,
				655,
				105,
				103
			],
			[
				0,
				593,
				86,
				272
			],
			[
				88,
				745,
				52,
				52
			],
			[
				557,
				593,
				73,
				76
			]
		]
	};

/***/ },
/* 104 */,
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {// ----------------------------------------------------------------------------
	// Buzz, a Javascript HTML5 Audio library
	// Licensed under the MIT license.
	// http://buzz.jaysalvat.com/
	// ----------------------------------------------------------------------------
	// Copyright (C) Jay Salvat
	// http://jaysalvat.com/
	// ----------------------------------------------------------------------------

	(function (context, factory) {
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = factory();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        context.buzz = factory();
	    }
	})(this, function () {

	    window.AudioContext = window.AudioContext || window.webkitAudioContext;

	    var buzz = {
	        audioCtx: window.AudioContext ? new AudioContext() : null,
	        defaults: {
	            autoplay: false,
	            duration: 5000,
	            formats: [],
	            loop: false,
	            placeholder: '--',
	            preload: 'metadata',
	            volume: 80,
	            webAudioApi: true,
	            document: window.document // iframe support
	        },
	        types: {
	            'mp3': 'audio/mpeg',
	            'ogg': 'audio/ogg',
	            'wav': 'audio/wav',
	            'aac': 'audio/aac',
	            'm4a': 'audio/x-m4a'
	        },
	        sounds: [],
	        el: document.createElement('audio'),

	        sound: function (src, options) {
	            options = options || {};

	            var doc = options.document || buzz.defaults.document;

	            var pid = 0,
	                events = [],
	                eventsOnce = {},
	                supported = buzz.isSupported();

	            // publics
	            this.load = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.load();

	                return this;
	            };

	            this.play = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.play();

	                return this;
	            };

	            this.togglePlay = function () {
	                if (!supported) {
	                    return this;
	                }

	                if (this.sound.paused) {
	                    this.sound.play();
	                } else {
	                    this.sound.pause();
	                }

	                return this;
	            };

	            this.pause = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.pause();

	                return this;
	            };

	            this.isPaused = function () {
	                if (!supported) {
	                    return null;
	                }

	                return this.sound.paused;
	            };

	            this.stop = function () {
	                if (!supported ) {
	                    return this;
	                }

	                this.setTime(0);
	                this.sound.pause();

	                return this;
	            };

	            this.isEnded = function () {
	                if (!supported) {
	                    return null;
	                }

	                return this.sound.ended;
	            };

	            this.loop = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.loop = 'loop';
	                this.bind('ended.buzzloop', function () {
	                    this.currentTime = 0;
	                    this.play();
	                });

	                return this;
	            };

	            this.unloop = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.removeAttribute('loop');
	                this.unbind('ended.buzzloop');

	                return this;
	            };

	            this.mute = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.muted = true;

	                return this;
	            };

	            this.unmute = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.muted = false;

	                return this;
	            };

	            this.toggleMute = function () {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.muted = !this.sound.muted;

	                return this;
	            };

	            this.isMuted = function () {
	                if (!supported) {
	                    return null;
	                }

	                return this.sound.muted;
	            };

	            this.setVolume = function (volume) {
	                if (!supported) {
	                    return this;
	                }

	                if (volume < 0) {
	                    volume = 0;
	                }
	                if (volume > 100) {
	                    volume = 100;
	                }

	                this.volume = volume;
	                this.sound.volume = volume / 100;

	                return this;
	            };

	            this.getVolume = function () {
	                if (!supported) {
	                    return this;
	                }

	                return this.volume;
	            };

	            this.increaseVolume = function (value) {
	                return this.setVolume(this.volume + (value || 1));
	            };

	            this.decreaseVolume = function (value) {
	                return this.setVolume(this.volume - (value || 1));
	            };

	            this.setTime = function (time) {
	                if (!supported) {
	                    return this;
	                }

	                var set = true;
	                this.whenReady(function () {
	                    if (set === true) {
	                        set = false;
	                        this.sound.currentTime = time;
	                   }
	                });

	                return this;
	            };

	            this.getTime = function () {
	                if (!supported) {
	                    return null;
	                }

	                var time = Math.round(this.sound.currentTime * 100) / 100;

	                return isNaN(time) ? buzz.defaults.placeholder : time;
	            };

	            this.setPercent = function (percent) {
	                if (!supported) {
	                    return this;
	                }

	                return this.setTime(buzz.fromPercent(percent, this.sound.duration));
	            };

	            this.getPercent = function () {
	                if (!supported) {
	                    return null;
	                }

	                var percent = Math.round(buzz.toPercent(this.sound.currentTime, this.sound.duration));

	                return isNaN(percent) ? buzz.defaults.placeholder : percent;
	            };

	            this.setSpeed = function (duration) {
	                if (!supported) {
	                    return this;
	                }

	                this.sound.playbackRate = duration;

	                return this;
	            };

	            this.getSpeed = function () {
	                if (!supported) {
	                    return null;
	                }

	                return this.sound.playbackRate;
	            };

	            this.getDuration = function () {
	                if (!supported) {
	                    return null;
	                }

	                var duration = Math.round(this.sound.duration * 100) / 100;

	                return isNaN(duration) ? buzz.defaults.placeholder : duration;
	            };

	            this.getPlayed = function () {
	                if (!supported) {
	                    return null;
	                }

	                return timerangeToArray(this.sound.played);
	            };

	            this.getBuffered = function () {
	                if (!supported) {
	                    return null;
	                }

	                return timerangeToArray(this.sound.buffered);
	            };

	            this.getSeekable = function () {
	                if (!supported) {
	                    return null;
	                }

	                return timerangeToArray(this.sound.seekable);
	            };

	            this.getErrorCode = function () {
	                if (supported && this.sound.error) {
	                    return this.sound.error.code;
	                }

	                return 0;
	            };

	            this.getErrorMessage = function () {
	                if (!supported) {
	                    return null;
	                }

	                switch(this.getErrorCode()) {
	                    case 1:
	                        return 'MEDIA_ERR_ABORTED';
	                    case 2:
	                        return 'MEDIA_ERR_NETWORK';
	                    case 3:
	                        return 'MEDIA_ERR_DECODE';
	                    case 4:
	                        return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
	                    default:
	                        return null;
	                }
	            };

	            this.getStateCode = function () {
	                if (!supported) {
	                    return null;
	                }

	                return this.sound.readyState;
	            };

	            this.getStateMessage = function () {
	                if (!supported) {
	                    return null;
	                }

	                switch(this.getStateCode()) {
	                    case 0:
	                        return 'HAVE_NOTHING';
	                    case 1:
	                        return 'HAVE_METADATA';
	                    case 2:
	                        return 'HAVE_CURRENT_DATA';
	                    case 3:
	                        return 'HAVE_FUTURE_DATA';
	                    case 4:
	                        return 'HAVE_ENOUGH_DATA';
	                    default:
	                        return null;
	                }
	            };

	            this.getNetworkStateCode = function () {
	                if (!supported) {
	                    return null;
	                }

	                return this.sound.networkState;
	            };

	            this.getNetworkStateMessage = function () {
	                if (!supported) {
	                    return null;
	                }

	                switch(this.getNetworkStateCode()) {
	                    case 0:
	                        return 'NETWORK_EMPTY';
	                    case 1:
	                        return 'NETWORK_IDLE';
	                    case 2:
	                        return 'NETWORK_LOADING';
	                    case 3:
	                        return 'NETWORK_NO_SOURCE';
	                    default:
	                        return null;
	                }
	            };

	            this.set = function (key, value) {
	                if (!supported) {
	                    return this;
	                }

	                this.sound[key] = value;

	                return this;
	            };

	            this.get = function (key) {
	                if (!supported) {
	                  return null;
	                }

	                return key ? this.sound[key] : this.sound;
	            };

	            this.bind = function (types, func) {
	                if (!supported) {
	                    return this;
	                }

	                types = types.split(' ');

	                var self = this,
	                    efunc = function (e) { func.call(self, e); };

	                for (var t = 0; t < types.length; t++) {
	                    var type = types[t],
	                        idx = type;
	                        type = idx.split('.')[0];

	                        events.push({ idx: idx, func: efunc });
	                        this.sound.addEventListener(type, efunc, true);
	                }

	                return this;
	            };

	            this.unbind = function (types) {
	                if (!supported) {
	                    return this;
	                }

	                types = types.split(' ');

	                for (var t = 0; t < types.length; t++) {
	                    var idx = types[t],
	                        type = idx.split('.')[0];

	                    for (var i = 0; i < events.length; i++) {
	                        var namespace = events[i].idx.split('.');
	                        if (events[i].idx == idx || (namespace[1] && namespace[1] == idx.replace('.', ''))) {
	                            this.sound.removeEventListener(type, events[i].func, true);
	                            // remove event
	                            events.splice(i, 1);
	                        }
	                    }
	                }

	                return this;
	            };

	            this.bindOnce = function (type, func) {
	                if (!supported) {
	                    return this;
	                }

	                var self = this;

	                eventsOnce[pid++] = false;
	                this.bind(type + '.' + pid, function () {
	                   if (!eventsOnce[pid]) {
	                       eventsOnce[pid] = true;
	                       func.call(self);
	                   }
	                   self.unbind(type + '.' + pid);
	                });

	                return this;
	            };

	            this.trigger = function (types) {
	                if (!supported) {
	                    return this;
	                }

	                types = types.split(' ');

	                for (var t = 0; t < types.length; t++) {
	                    var idx = types[t];

	                    for (var i = 0; i < events.length; i++) {
	                        var eventType = events[i].idx.split('.');

	                        if (events[i].idx == idx || (eventType[0] && eventType[0] == idx.replace('.', ''))) {
	                            var evt = doc.createEvent('HTMLEvents');

	                            evt.initEvent(eventType[0], false, true);

	                            this.sound.dispatchEvent(evt);
	                        }
	                    }
	                }

	                return this;
	            };

	            this.fadeTo = function (to, duration, callback) {
	                if (!supported) {
	                    return this;
	                }

	                if (duration instanceof Function) {
	                    callback = duration;
	                    duration = buzz.defaults.duration;
	                } else {
	                    duration = duration || buzz.defaults.duration;
	                }

	                var from = this.volume,
	                    delay = duration / Math.abs(from - to),
	                    self = this;

	                this.play();

	                function doFade() {
	                    setTimeout(function () {
	                        if (from < to && self.volume < to) {
	                            self.setVolume(self.volume += 1);
	                            doFade();
	                        } else if (from > to && self.volume > to) {
	                            self.setVolume(self.volume -= 1);
	                            doFade();
	                        } else if (callback instanceof Function) {
	                            callback.apply(self);
	                        }
	                    }, delay);
	                }

	                this.whenReady(function () {
	                    doFade();
	                });

	                return this;
	            };

	            this.fadeIn = function (duration, callback) {
	                if (!supported) {
	                    return this;
	                }

	                return this.setVolume(0).fadeTo(100, duration, callback);
	            };

	            this.fadeOut = function (duration, callback) {
	                if (!supported) {
	                    return this;
	                }

	                return this.fadeTo(0, duration, callback);
	            };

	            this.fadeWith = function (sound, duration) {
	                if (!supported) {
	                    return this;
	                }

	                this.fadeOut(duration, function () {
	                    this.stop();
	                });

	                sound.play().fadeIn(duration);

	                return this;
	            };

	            this.whenReady = function (func) {
	                if (!supported) {
	                    return null;
	                }

	                var self = this;

	                if (this.sound.readyState === 0) {
	                    this.bind('canplay.buzzwhenready', function () {
	                        func.call(self);
	                    });
	                } else {
	                    func.call(self);
	                }
	            };

	            // privates
	            function timerangeToArray(timeRange) {
	                var array = [],
	                    length = timeRange.length - 1;

	                for (var i = 0; i <= length; i++) {
	                    array.push({
	                        start: timeRange.start(i),
	                        end: timeRange.end(i)
	                    });
	                }

	                return array;
	            }

	            function getExt(filename) {
	                return filename.split('.').pop();
	            }

	            function addSource(sound, src) {
	                var source = doc.createElement('source');

	                source.src = src;

	                if (buzz.types[getExt(src)]) {
	                    source.type = buzz.types[getExt(src)];
	                }

	                sound.appendChild(source);
	              
	            }
	            this.changeSrc=function($src){
	                $(this.sound).children().remove();
	                src=$src;
	                if (src instanceof Array) {
	                        for (var j in src) {
	                            if (src.hasOwnProperty(j)) {
	                                addSource(this.sound, src[j]);
	                            }
	                        }
	                    } else if (options.formats.length) {
	                        for (var k in options.formats) {
	                            if (options.formats.hasOwnProperty(k)) {
	                                addSource(this.sound, src + '.' + options.formats[k]);
	                            }
	                        }
	                    } else {
	                        addSource(this.sound, src);
	                    }
	                this.load();
	            }
	            this.src=function(){
	                // init
	                    for (var i in buzz.defaults) {
	                        if (buzz.defaults.hasOwnProperty(i)) {
	                            if (options[i] === undefined)
	                                options[i] = buzz.defaults[i];
	                        }
	                    }

	                    this.sound = doc.createElement('audio');
	                    //$('body').append($(this.sound ));
	                    // Use web audio if possible to improve performance.
	                    if (options.webAudioApi && buzz.audioCtx) {
	                        this.source = buzz.audioCtx.createMediaElementSource(this.sound);
	                        this.source.connect(buzz.audioCtx.destination);
	                    }

	                    if (src instanceof Array) {
	                        for (var j in src) {
	                            if (src.hasOwnProperty(j)) {
	                                addSource(this.sound, src[j]);
	                            }
	                        }
	                    } else if (options.formats.length) {
	                        for (var k in options.formats) {
	                            if (options.formats.hasOwnProperty(k)) {
	                                addSource(this.sound, src + '.' + options.formats[k]);
	                            }
	                        }
	                    } else {
	                        addSource(this.sound, src);
	                    }

	                    if (options.loop) {
	                        this.loop();
	                    }

	                    if (options.autoplay) {
	                        this.sound.autoplay = 'autoplay';
	                    }

	                    if (options.preload === true) {
	                        this.sound.preload = 'auto';
	                    } else if (options.preload === false) {
	                        this.sound.preload = 'none';
	                    } else {
	                        this.sound.preload = options.preload;
	                    }

	                    this.setVolume(options.volume);
	                   // buzz.sounds.push(this);
	            }
	            if (supported && src) {
	                this.src();
	                buzz.sounds.push(this);
	            }
	            
	            
	            
	        },

	        group: function (sounds) {
	            sounds = argsToArray(sounds, arguments);

	            // publics
	            this.getSounds = function () {
	                return sounds;
	            };

	            this.add = function (soundArray) {
	                soundArray = argsToArray(soundArray, arguments);

	                for (var a = 0; a < soundArray.length; a++) {
	                    sounds.push(soundArray[a]);
	                }
	            };

	            this.remove = function (soundArray) {
	                soundArray = argsToArray(soundArray, arguments);

	                for (var a = 0; a < soundArray.length; a++) {
	                    for (var i = 0; i < sounds.length; i++) {
	                        if (sounds[i] == soundArray[a]) {
	                            sounds.splice(i, 1);
	                            break;
	                        }
	                    }
	                }
	            };

	            this.load = function () {
	                fn('load');

	                return this;
	            };

	            this.play = function () {
	                fn('play');

	                return this;
	            };

	            this.togglePlay = function () {
	                fn('togglePlay');

	                return this;
	            };

	            this.pause = function (time) {
	                fn('pause', time);

	                return this;
	            };

	            this.stop = function () {
	                fn('stop');

	                return this;
	            };

	            this.mute = function () {
	                fn('mute');

	                return this;
	            };

	            this.unmute = function () {
	                fn('unmute');

	                return this;
	            };

	            this.toggleMute = function () {
	                fn('toggleMute');

	                return this;
	            };

	            this.setVolume = function (volume) {
	                fn('setVolume', volume);

	                return this;
	            };

	            this.increaseVolume = function (value) {
	                fn('increaseVolume', value);

	                return this;
	            };

	            this.decreaseVolume = function (value) {
	                fn('decreaseVolume', value);

	                return this;
	            };

	            this.loop = function () {
	                fn('loop');

	                return this;
	            };

	            this.unloop = function () {
	                fn('unloop');

	                return this;
	            };

	            this.setSpeed = function (speed) {
	                fn('setSpeed', speed);

	                return this;
	            };

	            this.setTime = function (time) {
	                fn('setTime', time);

	                return this;
	            };

	            this.set = function (key, value) {
	                fn('set', key, value);

	                return this;
	            };

	            this.bind = function (type, func) {
	                fn('bind', type, func);

	                return this;
	            };

	            this.unbind = function (type) {
	                fn('unbind', type);

	                return this;
	            };

	            this.bindOnce = function (type, func) {
	                fn('bindOnce', type, func);

	                return this;
	            };

	            this.trigger = function (type) {
	                fn('trigger', type);

	                return this;
	            };

	            this.fade = function (from, to, duration, callback) {
	                fn('fade', from, to, duration, callback);

	                return this;
	            };

	            this.fadeIn = function (duration, callback) {
	                fn('fadeIn', duration, callback);

	                return this;
	            };

	            this.fadeOut = function (duration, callback) {
	                fn('fadeOut', duration, callback);

	                return this;
	            };

	            // privates
	            function fn() {
	                var args = argsToArray(null, arguments),
	                    func = args.shift();

	                for (var i = 0; i < sounds.length; i++) {
	                    sounds[i][func].apply(sounds[i], args);
	                }
	            }

	            function argsToArray(array, args) {
	                return (array instanceof Array) ? array : Array.prototype.slice.call(args);
	            }
	        },

	        all: function () {
	            return new buzz.group(buzz.sounds);
	        },

	        isSupported: function () {
	            return !!buzz.el.canPlayType;
	        },

	        isOGGSupported: function () {
	            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/ogg; codecs="vorbis"');
	        },

	        isWAVSupported: function () {
	            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/wav; codecs="1"');
	        },

	        isMP3Supported: function () {
	            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/mpeg;');
	        },

	        isAACSupported: function () {
	            return !!buzz.el.canPlayType && (buzz.el.canPlayType('audio/x-m4a;') || buzz.el.canPlayType('audio/aac;'));
	        },

	        toTimer: function (time, withHours) {
	            var h, m, s;

	            h = Math.floor(time / 3600);
	            h = isNaN(h) ? '--' : (h >= 10) ? h : '0' + h;
	            m = withHours ? Math.floor(time / 60 % 60) : Math.floor(time / 60);
	            m = isNaN(m) ? '--' : (m >= 10) ? m : '0' + m;
	            s = Math.floor(time % 60);
	            s = isNaN(s) ? '--' : (s >= 10) ? s : '0' + s;

	            return withHours ? h + ':' + m + ':' + s : m + ':' + s;
	        },

	        fromTimer: function (time) {
	            var splits = time.toString().split(':');

	            if (splits && splits.length == 3) {
	                time = (parseInt(splits[0], 10) * 3600) + (parseInt(splits[1], 10) * 60) + parseInt(splits[2], 10);
	            }

	            if (splits && splits.length == 2) {
	                time = (parseInt(splits[0], 10) * 60) + parseInt(splits[1], 10);
	            }

	            return time;
	        },

	        toPercent: function (value, total, decimal) {
	            var r = Math.pow(10, decimal || 0);

	            return Math.round(((value * 100) / total) * r) / r;
	        },

	        fromPercent: function (percent, total, decimal) {
	            var r = Math.pow(10, decimal || 0);

	            return  Math.round(((total / 100) * percent) * r) / r;
	        }
	    };

	    return buzz;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 107 */
/***/ function(module, exports) {

	
		var browserName=navigator.userAgent.toLowerCase(); 
		if(/webkit/i.test(browserName)){
			var b = "-webkit-";
		}else{
			var b = window.WebKitCSSKeyframesRule?"-webkit-":"";
		}
		c = function() {
			a = function() {
				var a = document.getElementsByTagName("head")[0],
				b = document.createElement("style");
				return b.type = "text/css",
				a.appendChild(b),
				document.styleSheets[document.styleSheets.length - 1]
			} ();
			function stylesheet(b) {
				for (var c = a,d = b.split("\r\n"), e = c.cssRules ? c.cssRules.length: 0, f = 0; f < d.length; ++f){
					console.log(c)
					window.dd=c;
					console.log(d[f])
					c.insertRule(d[f], e++);
				} 
				return e;
			}
			var c = document.createElement("div"),
			d = document.createElement("i"),
			e = document.createElement("div"),
			f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAADbCAYAAABp7qMUAAAQuklEQVR4Xu2dD4gVxx3H3yEEhJQEwZLQYqgkFJQES8WgGBpSBCWSoEQqisViSPCwRFIalEpKSkqEQrFUPCJKpUFJaVAihgaPlgZFUSoRQySlUokQlEolQlEiyPX7vdu9PN+99+Y3u7Nzb3a/A8Op95vZme/v4+z836GWZxgbG3sASZYhLkWchzgLcQ7ibM+sZD44ClxHUa4g3kC8iHgScXRoaOimTxGHrMaAaAFstyGuQrzPmk52ySpwByU/grgTUJ231MIJEyBiq/Mm4gZLhrKppQLvoFY7ABVbr56hL0wAaRNS7lFLVEtAfCvFlmoYQO3vlbArTIBoBhLsQtzi+0TZ116B3ajhVkB1t7OmU2DKQDoGw+W1l0UVLKrAKBKu6ASqG0x8rW0u+hSla4wCI4BpuL2298CEVokQESYFKWBRgH2okdxwEiaA9Cj+8VN1ti0ayiZTgJ3y+QDqEv/eDtNB/H1dojIdQLnZMUwxcKDDCeBUwyHAtH4SJrRKi/CXM6nWBuXmxNr2FMsP7Y+j3FxRSDkshP7nxlsmVOgwfnBmO9WQMkwnEm+ZyMwRwLR6CCBxbe0qYspLJCnD9DG051JVyoF9p4cJE/tJ7C+lHFKG6QKEfzxl8bOyrydM+/AXLpukHFKG6XMIz/XP1MNewnQKtViceE1SholdjIcS15/FP02Y6lCZlGH6Eo7gHrHUwzXCdAu1mJl4TVKG6Ston/LgJ0fnNmEaSxwkFv8a4heJ1uP7iZZ7SrHrAlNd/JF0PQRT0u4brMILpsHyR9KlEUxJu2+wCi+YBssfSZdGMCXtvsEqvGAaLH8kXRrBlLT7BqvwRWHi2amzg1UVlSagAt9CXq/75lcUpvXYDHXI92GyT0MBLIpwSwy3xngFweQlVzOMBVMz/BylloIpiszNeIhgaoafo9RSMEWRuRkPEUzN8HOUWgqmKDI34yGCqRl+jlJLwRRF5mY8RDA1w89RaimYosjcjIcIpmb4OUotBVMUmZvxEMHUDD9HqWVsmFZjCwpvr1eooQKxYVoJmD6ooY6qEhQQTMIgmAKCKZiUykgwiYFgCgimYFIqI8EkBoIpIJiCSamMBJMYCKaAYAompTISTGIgmAKCKZiUykgwiYFgCgimYFIqI8EkBoIpIJiCSamMBJMYCKaAYAompTISTGIgmAKCKZiUykgwiYFgCgimYFIqI8EkBoIpIJiCSamMBJMYCKaAYAompTISTDVjAA7l51Y3IB7AgdfzMasnmEqoDfFmIPlixHmIvJ3/O4j55+H5MebZiPk3gOnYu4j/RDwJRwf/7AfKsw15v5VV6T08Y02J6nknFUyekkEwfv59GeKPsp9FPwd/G+lPI45mrQg/Pl04dIDEfAjsU4UzLJBQMBlEywDiq+PZDCC2SKHDOFSIbFHu+GSO8hHuvyC2l0sw+YhYtS2cNAvPeBVxC2LRFsi3mHwt7kTca4EKZZwD238g8pXaHgSTr/JV2MNB7O8Qol8g3l/FMwx5EqodAIqtVdeQlfMUfslOd2cQTAaRKzWBg36AB+xBZKd6EMJJFOJlQHWxszAo6z7826YehRRM0+W9bGTGD+95f3wvQpnZh9oOoH6bPwvlJUSEqVcQTBEcM+URcAyH839GXDodz/d4Ji9KW4vIaYi/I/J13CucBXxPeuRd2rTxozkI8ChUPI7IOaIUwicoJAcG/IRpv/AJYHoiZoUaDVM2W8whdedIKKYPqnqWYKpK2c58s/9Ffw0EEme1P0LkT04+8mceZuIPeWeerQlbQs6aV90SCqYYMAEkOvWM4VXRrzgf4pfvIR7F6+S6b7mz+aEXkG4VYhV9NcHk6xRfeziRLQVBYie2SCBAv+w2VC+SGdNkr1uOIp8rmkeXdIIpoJhds4Lj/oBfbCzwHC53cHh+rkBaUxKUjet9byOGmG0XTCbVCxrBWYSIMPkEzvFsBUQjPomK2mav4HeRvuyrTzAVdYIrXbbO9i/YcVhtDexMrwFInIWOFlDW7+JhFxD7zSO5yiOYXAoV/T0cdBBp13mk5/6j5wHSFY80pU1RzkXI5H3EfF9U0Twvo+xziyYukq4R80yZg9jptgYusj4JZ+Qb26zpStmhnBzd/RGRg4Sy4QrK/0jZTHzSNwWmYxCFe5EsgZvWnq5iJ2S/h8MR7bskLeV02dQephVwEudnooVs2M39PtawFmX8k9W4rF22jYQjuI1l8+pIX3uYnpqGzixHRhxyWwI34f/EYhjCJhsUHEZe3PYSOgimkIrCWZyvuYpo6YPcgN1jgIk/Kw9Z/4KvX+6UrCIIppCqwmEvIT++QiyBs9q/shiWtUG5FiCPE4hV7uIUTGUd1Z4eTuNC7jOGPP8Hm28DppsG21ImKBN3KHyM6NpCUuo5SCyYyiqYp8/W4P6Lv1tecfsB0ouhnt0vH5TrDfw+xm7Om6jTgzHq1KY51zs52eoVhiDKmFeKCeNoHXAUjy0SWyZL4FQAt5BUHlAuLpNwUtJnJr5IuaIOJljA2PNMMWGytgDscH8TMPG0bfIhm2qYHXvCte4wWacEPoDwK5OnaAAqUOeWiZ1cjppcgWfTfu0yGtTfZ3NV47s2q9weY6l/nWH6CgJYVt2jznhbnGKxyfY+sSPffr6PS0FHEV+LvUBd29dcNpK7ZXEKbBZO9/9oYzknzVA/Lgbz7oNegQvUT8SagM0LUcuWKZvL+Y/RSY9Mx/9iY9mmmKFuPIzAI+GuwF2hvLMgWqgrTDwBwo1wlvBgjMlKS0EsNnDYRthZdotGmzure8vENTlOWLquvuHMN2FKZloAMPFGlt8bwNuNev3UYBfMpJYtE9VBxSw7K3ltzcvB1IyQkce+p52o2/YIRZp8RJ1h4iIq55q6bYpjS8RLILi4yxFQMgEO24XCvmIosPpMBpG8TCA+7y7izWr5CVru7f4QEF32ymhAjFEfHmdfbihO9CmP2rZMBrGTNIHDuD/Lctjge/gPU+vbdqOtzSVJiqPQAImt67+NdfsGYOIAI1qoZcuESnEUtzl7HVR5wuQcHLY3lrc8RnIXUa75scqVP6euMPHsmc/RpjK6c6aZdyZVHuAsTlZy0tIVRlCmYZdR6N/XFSbuGeK22KoDD2jOj/E6gaN4yvczY4VWo0xHjLbBzARTcSl5BwH7gMG/NNCtSHBUv8tQ25NwqoNbkKMcjGh/cF1h4nSAz1k5X6S4V5xD7yhnAOEknmDh8pBlF0T0z1zk4tUVpkJ7kY1EXYIdD5PyZ5QAJ/mcSF6JsvEi1ehBMPlJzn3i7I9Ee4XAQbx/gDcBWwL7cHOna61RMFlcNGFzAJGXu3t918Se/VRLOIc7RTmCs5ywYQbDKF+Ue6S61Usw2bw9HetcnOVmv896vo7zaWyVosHeKZ1g6g8TR0Y/hoN4j2W0AKdwkZrHtDhfZg1sNaNNoKplsrplwo63xvGyryhD/7xoAIkb+3iuzufbLdE/bSGY/GBiZ5Yjoyiz2ywaQOJuAO7D8jmgydcaLyaLuqgrmPxgojVfczwKNfkBHP8s3CkAEXeG8rKvnyO6dod2Zjjtr7e2VrXQlMxAHw/PJvk+d7vRbMHJSd642/7lAXPiXoYoJ0dp3IZLkHxaozzL6Ftz+1W6rh1wzhiHhCnXkB3x/YijZeZyIDpHaLyslR9ItOxN6uZD3kvOydOB2b8umIq1L1xOYWvFK5350eZLcGrP63iyTjU71lyA5i1xZe/4ZgvJflLlVwD5yCOYfNSy2eafnKc1+0KEKGTgd1qWxFzOsRa+6TBxJGRZPLXqWbUdR5g/HESQWPEmw0SQliBy7Ysd4EEPbPHYR+L810CGJsP0IhzDzjT/RxEo7hcK8QGcKhzNmW2OJgf6WFZTYZqyrTWbTiBQPBY1KIEdbM4jRbuXvEzF6woTLyHtdXEFR1+8drDrgigE4Z3hPOhYdMhexh/taQ/gL7wax/vDiKEK4JtPXWHi6+rLLmLQMTxP1vfESrbQyslEzkgXmUz09UO7/d/wF866E/qkQpNg4uQeR0Lmi1AzqHiXOMGq8pu67AtxdyTvB6js44hVk9kkmH5WZo0NQnGykbPWfA2G6KizlSRAPEXCGfWB7lxbQKwrTFzzar85LuhtJxCNBxY4i80zbIyWT1bw1cp943x98a4DcwtpceQg2NQSJgqLinFzGc+a8aaT8SmAKgOex9X+Xhey8oRt8i2PS7/YMEW/TMElgH4fToHYMEU7Sh1OIuVkVUAwWZWSnVMBweSUSAZWBQSTVSnZORUQTE6JZGBVQDBZlZKdUwHB5JRIBlYFBJNVKdk5FRBMTolkYFVAMFmVkp1TAcHklEgGVgUEk1Up2TkVEExOiWRgVUAwWZWSnVMBweSUSAZWBQSTVSnZORUQTE6JZGBVQDBZlZKdUwHB5JRIBlYFBJNVKdk5FRBMTolkYFVAMFmVkp1TAcHklEgGVgUEk1Up2TkVEExOiWRgVUAwWZWSnVMBweSUSAZWBQSTVSnZORUQTE6JZGBVQDBZlZKdUwHB5JRIBlYFBJNVKdk5FRBMTolkYFVAMFmVkp1TAcHklEgGVgUEk1Up2TkVEExOiWRgVUAwWZWSnVMBweSUSAZWBWLDtBYF4y39CvVUgJ+Qfde3akU/Re/7HNk3QAHB1AAnx6qiYIqldAOeI5ga4ORYVRRMsZRuwHMEUwOcHKuKgimW0g14jmBqgJNjVVEwxVK6Ac8RTA1wcqwqCqbuSl/DPx9AHEW8iXgZkZ+w57eCX0B8FvG+WE5K5TmC6V5P8WPOOxB348POd3o5EQuhXLvalUGViq8rL6dg+lri6/jjSkB01qo6oHoDtq9b7etuJ5gmPMwW6WkfkHIwABRbqFfqDoqlfoJpQqXtAGmnRbBOG8A0A/92AXFekfR1SiOYWi12tucCJrZOhQKAeg4J3y+UuEaJBFOr9RuA9FoZn2at01XkMbtMPqmnFUyt1vOA6WhZRwKow8hjVdl8Uk4vmFqthYDpXFknqiPeagmmVusxwFR6PztgegtAbisLZcrpBVOrtQQwnS7rRMD0NvJ4qWw+KacXTCWmBdodD5g4PfB4yjCULbtgarVOo2VaUkZIgMQ1u8/K5FGHtIJpwouc/f6oqEMB00GkXVc0fV3SEaZbqMzMulSoYD0uIh1Hdd4Tl9DvGaQ9jsiZ8CaH24SJk20PNVmFrO6ca1rTb7dAp0bQjksoJxBnSb/WNcJ0CkIslhjjCpxEXAugvnDpkS2h8PV2v8u2Ib8/TZj2obKbGlJhSzX5qtuN+LtOqKAVN8QtQ3wVka83ha8V2EuY2HHk/zCFqQpwh+WNLPJVxlGbWqLupKwnTBSJ/SZtQ9V/p6IKcFfqw0NMrUXKohoqXabAEXQJVucwLcI/npE0UqCgAuOL5eMwZa2TJt4KKtnwZIcA0npq0A4TT1x8qr5Tw9Hwqz77SvPzXReTMGWt02b83OOXn6wbrMAwQBrJ638PTBlQhIlQKUiBfgqMAKThdoNuMHGN6RjicmkpBXoowJPOKwDT3b4wZa0TgeJ5sC2SUwp0KMDVga2dINFmSsvUnhDzT1xm4WtPE5piip1t9pH295KiL0xZKzUHP99E3CA9G6vAO6j5DoB0pZ8CTpjyxGilFuDP3DDP4zxqqerPFVuiI4g7AdF5S3XNMLVB9QD+zJXzpYjcz8O1PV43oz09FsUH04aL2fmiNjcKcivOKCDidULm8H8L1NuzPBucLAAAAABJRU5ErkJggg==";
			e.style.cssText = "position:absolute; width:100%; height:100%; overflow:hidden; left:0; top:0; z-index:9999; background-color:#6f91d6; display:none;",
			c.style.cssText = "position:absolute; left:50%; top:50%; width:250px; height:150px; margin:-75px 0 0 -125px; text-align:center; color:#ffffff;",
			d.style.cssText = "position:relative; display:block; width:74px; height:110px; background:url(" + f + ") 0 0 no-repeat; background-size:100%; margin:0 auto; " + b + "transform:rotate(-90deg); " + b + "animation:TOUCH_DRAG_IPHONE 1.6s ease-in infinite;",
			stylesheet("@" + b + "keyframes TOUCH_DRAG_IPHONE{0%{" + b + "transform:rotate(-90deg);}25%{" + b + "transform:rotate(0deg);}50%{" + b + "transform:rotate(0deg);}75%{" + b + "transform:rotate(-90deg);}100%{" + b + "transform:rotate(-90deg);}}"),
			document.body.appendChild(e),
			e.appendChild(c),
			c.appendChild(d);
			
			var g = document.createTextNode(decodeURIComponent("%E4%B8%BA%E4%BA%86%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BD%93%E9%AA%8C%EF%BC%8C%E8%AF%B7%E4%BD%BF%E7%94%A8%E7%AB%96%E5%B1%8F%E6%B5%8F%E8%A7%88"));
			c.appendChild(document.createElement("br")),
			c.appendChild(g);
			var h = function(a, b, c) {
				"string" == typeof a && (e.style.background = a),
				"string" == typeof b && (d.style.backgroundImage = b),
				"string" == typeof c && (g.nodeValue = c)
			},
			i = function() {
				e.style.display = "block",
				k.onshow && k.onshow()
			},
			j = function() {
				k.onhide && k.onhide(),
				e.style.display = "none"
			},
			k = {
				show: i,
				hide: j,
				set: h
			};
			return k
		} (),
		d = "onorientationchange" in window,
		e = document.documentElement.clientHeight,
		f = document.documentElement.clientWidth;
		d ? ("0" != window.orientation && c.show(), window.addEventListener("orientationchange",
		function() {
			"0" != window.orientation ? c.show() : c.hide()
		},
		!1)) : f > e && c.show(),
		window.addEventListener("resize",
		function() {
			e = document.documentElement.clientHeight,
			f = document.documentElement.clientWidth,
			d || (f > e ? c.show() : c.hide())
		},
		!1)


/***/ }
]);