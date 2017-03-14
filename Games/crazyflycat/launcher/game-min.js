
var oveT = 0;
 function guanzhu() {
    var d = document.createElement("div");
    var b = document.createElement("a");
    var c = document.createElement("span");
    d.id = "guanzhu";
    b.href = "http://www.liebao.cn/game/gkuwan.apk";
    c.addEventListener("click", function() {
        document.body.removeChild(d);
    });
    d.appendChild(b);
    d.appendChild(c);

    var h = navigator.userAgent;
    if( h.match(/android/gi) != null  && h.match(/MicroMessenger/gi) == null && h.match(/gkuwan/gi) == null ){
        b.href = "http://www.liebao.cn/game/gkuwan.apk";
        b.style.background = "url(resource/guanz03.png) no-repeat";
        b.style.backgroundSize = "contain";
	    document.body.appendChild(d);
    }else{
    	return
    }

}
var egret;
(function(b) {
	var a = function() {
		function c() {
			this._hashCode = c.hashCount++;
		}
		Object.defineProperty(c.prototype, "hashCode", {
			get: function() {
				return this._hashCode;
			},
			enumerable: !0,
			configurable: !0
		});
		c.hashCount = 1;
		return c;
	}();
	b.HashObject = a;
	a.prototype.__class__ = "egret.HashObject";
})(egret || (egret = {}));
var __extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f(c) {
			"undefined" === typeof c && (c = 300);
			e.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > c && (c = 1);
			this.autoDisposeTime = c;
			this.frameCount = 0;
		}
		__extends(f, e);
		f.prototype._checkFrame = function() {
			this.frameCount--;
			0 >= this.frameCount && this.dispose();
		};
		Object.defineProperty(f.prototype, "length", {
			get: function() {
				return this._length;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.push = function(d) {
			var c = this.objectPool; - 1 == c.indexOf(d) && (c.push(d), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, f._callBackList.push(this)));
		};
		f.prototype.pop = function() {
			if (0 == this._length) {
				return null;
			}
			this._length--;
			return this.objectPool.pop();
		};
		f.prototype.dispose = function() {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var d = f._callBackList,
				c = d.indexOf(this); - 1 != c && d.splice(c, 1);
		};
		f._callBackList = [];
		return f;
	}(b.HashObject);
	b.Recycler = a;
	a.prototype.__class__ = "egret.Recycler";
})(egret || (egret = {}));
(function(a) {
	a.__START_TIME;
	a.getTimer = function() {
		return Date.now() - a.__START_TIME;
	};
})(egret || (egret = {}));
(function(a) {
	a.__callLaterFunctionList = [];
	a.__callLaterThisList = [];
	a.__callLaterArgsList = [];
	a.callLater = function(g, d) {
		for (var h = [], b = 0; b < arguments.length - 2; b++) {
			h[b] = arguments[b + 2];
		}
		a.__callLaterFunctionList.push(g);
		a.__callLaterThisList.push(d);
		a.__callLaterArgsList.push(h);
	};
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(e, c, h) {
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof h && (h = !1);
			d.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = e;
			this._bubbles = c;
			this._cancelable = h;
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "type", {
			get: function() {
				return this._type;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "bubbles", {
			get: function() {
				return this._bubbles;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "cancelable", {
			get: function() {
				return this._cancelable;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "eventPhase", {
			get: function() {
				return this._eventPhase;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "currentTarget", {
			get: function() {
				return this._currentTarget;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._setCurrentTarget = function(c) {
			this._currentTarget = c;
		};
		Object.defineProperty(f.prototype, "target", {
			get: function() {
				return this._target;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.isDefaultPrevented = function() {
			return this._isDefaultPrevented;
		};
		f.prototype.preventDefault = function() {
			this._cancelable && (this._isDefaultPrevented = !0);
		};
		f.prototype.stopPropagation = function() {
			this._bubbles && (this._isPropagationStopped = !0);
		};
		f.prototype.stopImmediatePropagation = function() {
			this._bubbles && (this._isPropagationImmediateStopped = !0);
		};
		f.prototype._reset = function() {
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2);
		};
		f._dispatchByTarget = function(s, r, n, q, p, o) {
			"undefined" === typeof p && (p = !1);
			"undefined" === typeof o && (o = !1);
			var j = s.eventRecycler;
			j || (j = s.eventRecycler = new b.Recycler);
			var h = j.pop();
			h ? h._type = n : h = new s(n);
			h._bubbles = p;
			h._cancelable = o;
			if (q) {
				for (var i in q) {
					h[i] = q[i], null !== h[i] && (q[i] = null);
				}
			}
			s = r.dispatchEvent(h);
			j.push(h);
			return s;
		};
		f._getPropertyData = function(e) {
			var c = e._props;
			c || (c = e._props = {});
			return c;
		};
		f.dispatchEvent = function(h, c, i, k) {
			"undefined" === typeof i && (i = !1);
			var j = f._getPropertyData(f);
			k && (j.data = k);
			f._dispatchByTarget(f, h, c, j, i);
		};
		f.ADDED_TO_STAGE = "addedToStage";
		f.REMOVED_FROM_STAGE = "removedFromStage";
		f.ADDED = "added";
		f.REMOVED = "removed";
		f.COMPLETE = "complete";
		f.ENTER_FRAME = "enterFrame";
		f.RENDER = "render";
		f.FINISH_RENDER = "finishRender";
		f.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
		f.LEAVE_STAGE = "leaveStage";
		f.RESIZE = "resize";
		f.CHANGE = "change";
		return f;
	}(b.HashObject);
	b.Event = a;
	a.prototype.__class__ = "egret.Event";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(e, c, h) {
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof h && (h = !1);
			d.call(this, e, c, h);
		}
		__extends(f, d);
		f.dispatchIOErrorEvent = function(c) {
			b.Event._dispatchByTarget(f, c, f.IO_ERROR);
		};
		f.IO_ERROR = "ioError";
		return f;
	}(b.Event);
	b.IOErrorEvent = a;
	a.prototype.__class__ = "egret.IOErrorEvent";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(u, t, q, s, r, p, o, i, j, e) {
			"undefined" === typeof t && (t = !0);
			"undefined" === typeof q && (q = !0);
			"undefined" === typeof s && (s = 0);
			"undefined" === typeof r && (r = 0);
			"undefined" === typeof p && (p = 0);
			"undefined" === typeof o && (o = !1);
			"undefined" === typeof i && (i = !1);
			"undefined" === typeof e && (e = !1);
			d.call(this, u, t, q);
			this._localY = this._localX = this._stageY = this._stageX = 0;
			this.touchPointID = s;
			this._stageX = r;
			this._stageY = p;
			this.ctrlKey = o;
			this.altKey = i;
			this.touchDown = e;
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "stageX", {
			get: function() {
				return this._stageX;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "stageY", {
			get: function() {
				return this._stageY;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "localX", {
			get: function() {
				return this._localX;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "localY", {
			get: function() {
				return this._localY;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._setCurrentTarget = function(c) {
			d.prototype._setCurrentTarget.call(this, c);
			c instanceof b.DisplayObject && (c = c.globalToLocal(this._stageX, this._stageY, b.Point.identity), this._localX = c.x, this._localY = c.y);
		};
		f.dispatchTouchEvent = function(u, t, q, s, r, p, o, i, j) {
			"undefined" === typeof q && (q = 0);
			"undefined" === typeof s && (s = 0);
			"undefined" === typeof r && (r = 0);
			"undefined" === typeof p && (p = !1);
			"undefined" === typeof o && (o = !1);
			"undefined" === typeof i && (i = !1);
			"undefined" === typeof j && (j = !1);
			var c = b.Event._getPropertyData(f);
			c.touchPointID = q;
			c._stageX = s;
			c._stageY = r;
			c.ctrlKey = p;
			c.altKey = o;
			c.shiftKey = i;
			c.touchDown = j;
			b.Event._dispatchByTarget(f, u, t, c, !0, !0);
		};
		f.TOUCH_TAP = "touchTap";
		f.TOUCH_MOVE = "touchMove";
		f.TOUCH_BEGIN = "touchBegin";
		f.TOUCH_END = "touchEnd";
		f.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
		f.TOUCH_ROLL_OUT = "touchRollOut";
		f.TOUCH_ROLL_OVER = "touchRollOver";
		f.TOUCH_OUT = "touchOut";
		f.TOUCH_OVER = "touchOver";
		return f;
	}(b.Event);
	b.TouchEvent = a;
	a.prototype.__class__ = "egret.TouchEvent";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(e, c, h) {
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof h && (h = !1);
			d.call(this, e, c, h);
		}
		__extends(f, d);
		f.dispatchTimerEvent = function(e, c) {
			b.Event._dispatchByTarget(f, e, c);
		};
		f.TIMER = "timer";
		f.TIMER_COMPLETE = "timerComplete";
		return f;
	}(b.Event);
	b.TimerEvent = a;
	a.prototype.__class__ = "egret.TimerEvent";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.CAPTURING_PHASE = 1;
		c.AT_TARGET = 2;
		c.BUBBLING_PHASE = 3;
		return c;
	}();
	b.EventPhase = a;
	a.prototype.__class__ = "egret.EventPhase";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(c) {
			"undefined" === typeof c && (c = null);
			d.call(this);
			this._eventTarget = c ? c : this;
		}
		__extends(f, d);
		f.prototype.addEventListener = function(i, h, j, m, l) {
			"undefined" === typeof m && (m = !1);
			"undefined" === typeof l && (l = 0);
			"undefined" === typeof m && (m = !1);
			"undefined" === typeof l && (l = 0);
			h || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
			m ? (this._captureEventsMap || (this._captureEventsMap = {}), m = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), m = this._eventsMap);
			var k = m[i];
			k || (k = m[i] = []);
			this._insertEventBin(k, h, j, l);
		};
		f.prototype._insertEventBin = function(j, i, k, p) {
			for (var o = -1, n = j.length, l = 0; l < n; l++) {
				var h = j[l];
				if (h.listener === i && h.thisObject === k) {
					return !1;
				} - 1 == o && h.priority < p && (o = l);
			}
			i = {
				listener: i,
				thisObject: k,
				priority: p
			}; - 1 != o ? j.splice(o, 0, i) : j.push(i);
			return !0;
		};
		f.prototype.removeEventListener = function(h, e, i, k) {
			"undefined" === typeof k && (k = !1);
			if (k = k ? this._captureEventsMap : this._eventsMap) {
				var j = k[h];
				j && (this._removeEventBin(j, e, i), 0 == j.length && delete k[h]);
			}
		};
		f.prototype._removeEventBin = function(i, h, j) {
			for (var m = i.length, l = 0; l < m; l++) {
				var k = i[l];
				if (k.listener === h && k.thisObject === j) {
					return i.splice(l, 1), !0;
				}
			}
			return !1;
		};
		f.prototype.hasEventListener = function(c) {
			return this._eventsMap && this._eventsMap[c] || this._captureEventsMap && this._captureEventsMap[c];
		};
		f.prototype.willTrigger = function(c) {
			return this.hasEventListener(c);
		};
		f.prototype.dispatchEvent = function(c) {
			c._reset();
			c._target = this._eventTarget;
			c._setCurrentTarget(this._eventTarget);
			return this._notifyListener(c);
		};
		f.prototype._notifyListener = function(h) {
			var e = 1 == h._eventPhase ? this._captureEventsMap : this._eventsMap;
			if (!e) {
				return !0;
			}
			e = e[h.type];
			if (!e) {
				return !0;
			}
			for (var e = e.concat(), i = e.length, k = 0; k < i; k++) {
				var j = e[k];
				j.listener.call(j.thisObject, h);
				if (h._isPropagationImmediateStopped) {
					break;
				}
			}
			return !h.isDefaultPrevented();
		};
		f.prototype.dispatchEventWith = function(e, c, h) {
			"undefined" === typeof c && (c = !1);
			b.Event.dispatchEvent(this, e, c, h);
		};
		return f;
	}(b.HashObject);
	b.EventDispatcher = a;
	a.prototype.__class__ = "egret.EventDispatcher";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.reuseEvent = new b.Event("");
		}
		__extends(f, d);
		f.prototype.run = function() {
			b.Ticker.getInstance().run();
			b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run();
		};
		f.prototype.renderLoop = function(h) {
			h = this.rendererContext;
			h.clearScreen();
			if (0 < b.__callLaterFunctionList.length) {
				var e = b.__callLaterFunctionList;
				b.__callLaterFunctionList = [];
				var i = b.__callLaterThisList;
				b.__callLaterThisList = [];
				var j = b.__callLaterArgsList;
				b.__callLaterArgsList = [];
			}
			this.dispatchEventWith(b.Event.RENDER);
			b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
			e && this.doCallLaterList(e, i, j);
			this.stage._updateTransform();
			this.dispatchEventWith(b.Event.FINISH_UPDATE_TRANSFORM);
			this.stage._draw(h);
			this.dispatchEventWith(b.Event.FINISH_RENDER);
		};
		f.prototype.broadcastEnterFrame = function(i) {
			i = this.reuseEvent;
			i._type = b.Event.ENTER_FRAME;
			this.dispatchEvent(i);
			for (var h = b.DisplayObject._enterFrameCallBackList.concat(), j = h.length, l = 0; l < j; l++) {
				var k = h[l];
				i._target = k.display;
				i._setCurrentTarget(k.display);
				k.listener.call(k.thisObject, i);
			}
			h = b.Recycler._callBackList;
			for (l = h.length - 1; 0 <= l; l--) {
				h[l]._checkFrame();
			}
		};
		f.prototype.broadcastRender = function() {
			var h = this.reuseEvent;
			h._type = b.Event.RENDER;
			for (var g = b.DisplayObject._renderCallBackList.concat(), k = g.length, j = 0; j < k; j++) {
				var i = g[j];
				h._target = i.display;
				h._setCurrentTarget(i.display);
				i.listener.call(i.thisObject, h);
			}
		};
		f.prototype.doCallLaterList = function(h, g, l) {
			for (var k = h.length, j = 0; j < k; j++) {
				var i = h[j];
				null != i && i.apply(g[j], l[j]);
			}
		};
		f.DEVICE_PC = "web";
		f.DEVICE_MOBILE = "native";
		return f;
	}(b.EventDispatcher);
	b.MainContext = a;
	a.prototype.__class__ = "egret.MainContext";
})(egret || (egret = {}));
var testDeviceType = function() {
	if (!this.hasOwnProperty("navigator")) {
		return !0;
	}
	var a = navigator.userAgent.toLowerCase();
	return -1 != a.indexOf("mobile") || -1 != a.indexOf("android");
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
(function(b) {
	var a = function() {
		function c() {
			this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
			this._maxDeltaTime = 500;
			this._totalDeltaTime = 0;
		}
		c.getInstance = function() {
			null == c.instance && (c.instance = new c);
			return c.instance;
		};
		c.prototype.run = function() {
			b.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, b.MainContext.instance.stage.addChild(this._txt));
			var d = b.MainContext.instance;
			d.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
			d.addEventListener(b.Event.RENDER, this.onStartRender, this);
			d.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
			d.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this);
		};
		c.prototype.onEnterFrame = function(d) {
			this._lastTime = b.getTimer();
		};
		c.prototype.onStartRender = function(d) {
			d = b.getTimer();
			this._logicPerformanceCost = d - this._lastTime;
			this._lastTime = d;
		};
		c.prototype.onFinishUpdateTransform = function(d) {
			d = b.getTimer();
			this._updateTransformPerformanceCost = d - this._lastTime;
			this._lastTime = d;
		};
		c.prototype.onFinishRender = function(d) {
			d = b.getTimer();
			this._renderPerformanceCost = d - this._lastTime;
			this._lastTime = d;
		};
		c.prototype.update = function(e) {
			this._tick++;
			this._totalDeltaTime += e;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				e = (this._preDrawCount - 1).toString();
				var d = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + e + "\ncost:" + d + "\nFPS:" + Math.floor(1000 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0;
			}
			this._preDrawCount = 0;
		};
		c.prototype.onDrawImage = function() {
			this._preDrawCount++;
		};
		return c;
	}();
	b.Profiler = a;
	a.prototype.__class__ = "egret.Profiler";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = [];
		}
		__extends(f, d);
		f.prototype.run = function() {
			b.__START_TIME = (new Date).getTime();
			b.MainContext.instance.deviceContext.executeMainLoop(this.update, this);
		};
		f.prototype.update = function(h) {
			var g = this.callBackList.concat(),
				k = g.length;
			h *= this._timeScale;
			h *= this._timeScale;
			for (var j = 0; j < k; j++) {
				var i = g[j];
				i.listener.call(i.thisObject, h);
			}
		};
		f.prototype.register = function(g, e, h) {
			"undefined" === typeof h && (h = 0);
			this._insertEventBin(this.callBackList, g, e, h);
		};
		f.prototype.unregister = function(e, c) {
			this._removeEventBin(this.callBackList, e, c);
		};
		f.prototype.setTimeout = function(h, g, k) {
			for (var j = [], i = 0; i < arguments.length - 3; i++) {
				j[i] = arguments[i + 3];
			}
			b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
			b.setTimeout.apply(null, [h, g, k].concat(j));
		};
		f.prototype.setTimeScale = function(c) {
			this._timeScale = c;
		};
		f.prototype.getTimeScale = function() {
			return this._timeScale;
		};
		f.prototype.pause = function() {
			this._paused = !0;
		};
		f.prototype.resume = function() {
			this._paused = !1;
		};
		f.getInstance = function() {
			null == f.instance && (f.instance = new f);
			return f.instance;
		};
		return f;
	}(b.EventDispatcher);
	b.Ticker = a;
	a.prototype.__class__ = "egret.Ticker";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.LEFT = "left";
		c.RIGHT = "right";
		c.CENTER = "center";
		c.JUSTIFY = "justify";
		c.CONTENT_JUSTIFY = "contentJustify";
		return c;
	}();
	b.HorizontalAlign = a;
	a.prototype.__class__ = "egret.HorizontalAlign";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.TOP = "top";
		c.BOTTOM = "bottom";
		c.MIDDLE = "middle";
		c.JUSTIFY = "justify";
		c.CONTENT_JUSTIFY = "contentJustify";
		return c;
	}();
	b.VerticalAlign = a;
	a.prototype.__class__ = "egret.VerticalAlign";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(e, c) {
			"undefined" === typeof c && (c = 0);
			d.call(this);
			this._currentCount = 0;
			this.delay = e;
			this.repeatCount = c;
		}
		__extends(f, d);
		f.prototype.currentCount = function() {
			return this._currentCount;
		};
		Object.defineProperty(f.prototype, "running", {
			get: function() {
				return this._running;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.reset = function() {
			this.stop();
			this._currentCount = 0;
		};
		f.prototype.start = function() {
			this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount = 0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0);
		};
		f.prototype.stop = function() {
			this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1);
		};
		f.prototype.onEnterFrame = function(c) {
			c = b.getTimer();
			c - this.lastTime > this.delay && (this.lastTime = c, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)));
		};
		return f;
	}(b.EventDispatcher);
	b.Timer = a;
	a.prototype.__class__ = "egret.Timer";
})(egret || (egret = {}));
(function(a) {
	a.getQualifiedClassName = function(e) {
		e = e.prototype ? e.prototype : e.__proto__;
		if (e.hasOwnProperty("__class__")) {
			return e.__class__;
		}
		var b = e.constructor.toString(),
			g = b.indexOf("("),
			b = b.substring(9, g);
		return e.__class__ = b;
	};
})(egret || (egret = {}));
(function(b) {
	var a = {};
	b.getDefinitionByName = function(i) {
		if (!i) {
			return null;
		}
		var j = a[i];
		if (j) {
			return j;
		}
		for (var f = i.split("."), e = f.length, j = __global, h = 0; h < e; h++) {
			if (j = j[f[h]], !j) {
				return null;
			}
		}
		return a[i] = j;
	};
})(egret || (egret = {}));
var __global = __global || this;
(function(g) {
	function b(e) {
		for (var d in a) {
			var f = a[d];
			f.delay -= e;
			0 >= f.delay && (f.listener.apply(f.thisObject, f.params), delete a[d]);
		}
	}
	var a = {},
		h = 0;
	g.setTimeout = function(d, c, f) {
		for (var e = [], i = 0; i < arguments.length - 3; i++) {
			e[i] = arguments[i + 3];
		}
		e = {
			listener: d,
			thisObject: c,
			delay: f,
			params: e
		};
		0 == h && g.Ticker.getInstance().register(b, null);
		h++;
		a[h] = e;
		return h;
	};
	g.clearTimeout = function(c) {
		delete a[c];
	};
})(egret || (egret = {}));
(function(a) {
	a.hasDefinition = function(b) {
		return a.getDefinitionByName(b) ? !0 : !1;
	};
})(egret || (egret = {}));
(function(a) {
	a.toColorString = function(b) {
		if (isNaN(b) || 0 > b) {
			b = 0;
		}
		16777215 < b && (b = 16777215);
		for (b = b.toString(16).toUpperCase(); 6 > b.length;) {
			b = "0" + b;
		}
		return "#" + b;
	};
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(g, e, l, k, j, i) {
			"undefined" === typeof g && (g = 1);
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof l && (l = 0);
			"undefined" === typeof k && (k = 1);
			"undefined" === typeof j && (j = 0);
			"undefined" === typeof i && (i = 0);
			d.call(this);
			this.a = g;
			this.b = e;
			this.c = l;
			this.d = k;
			this.tx = j;
			this.ty = i;
		}
		__extends(f, d);
		f.prototype.prepend = function(r, q, p, o, n, j) {
			var i = this.tx;
			if (1 != r || 0 != q || 0 != p || 1 != o) {
				var g = this.a,
					h = this.c;
				this.a = g * r + this.b * p;
				this.b = g * q + this.b * o;
				this.c = h * r + this.d * p;
				this.d = h * q + this.d * o;
			}
			this.tx = i * r + this.ty * p + n;
			this.ty = i * q + this.ty * o + j;
			return this;
		};
		f.prototype.append = function(t, s, r, q, p, o) {
			var j = this.a,
				h = this.b,
				i = this.c,
				g = this.d;
			this.a = t * j + s * i;
			this.b = t * h + s * g;
			this.c = r * j + q * i;
			this.d = r * h + q * g;
			this.tx = p * j + o * i + this.tx;
			this.ty = p * h + o * g + this.ty;
			return this;
		};
		f.prototype.prependMatrix = function(c) {
			this.prepend(c.a, c.b, c.c, c.d, c.tx, c.ty);
			return this;
		};
		f.prototype.appendMatrix = function(c) {
			this.append(c.a, c.b, c.c, c.d, c.tx, c.ty);
			return this;
		};
		f.prototype.prependTransform = function(t, s, o, r, q, p, j, h, i) {
			if (q % 360) {
				var c = q * f.DEG_TO_RAD;
				q = Math.cos(c);
				c = Math.sin(c);
			} else {
				q = 1, c = 0;
			} if (h || i) {
				this.tx -= h, this.ty -= i;
			}
			p || j ? (p *= f.DEG_TO_RAD, j *= f.DEG_TO_RAD, this.prepend(q * o, c * o, -c * r, q * r, 0, 0), this.prepend(Math.cos(j), Math.sin(j), -Math.sin(p), Math.cos(p), t, s)) : this.prepend(q * o, c * o, -c * r, q * r, t, s);
			return this;
		};
		f.prototype.appendTransform = function(t, s, o, r, q, p, j, h, i) {
			if (q % 360) {
				var c = q * f.DEG_TO_RAD;
				q = Math.cos(c);
				c = Math.sin(c);
			} else {
				q = 1, c = 0;
			}
			p || j ? (p *= f.DEG_TO_RAD, j *= f.DEG_TO_RAD, this.append(Math.cos(j), Math.sin(j), -Math.sin(p), Math.cos(p), t, s), this.append(q * o, c * o, -c * r, q * r, 0, 0)) : this.append(q * o, c * o, -c * r, q * r, t, s);
			if (h || i) {
				this.tx -= h * this.a + i * this.c, this.ty -= h * this.b + i * this.d;
			}
			return this;
		};
		f.prototype.rotate = function(h) {
			var g = Math.cos(h);
			h = Math.sin(h);
			var k = this.a,
				j = this.c,
				i = this.tx;
			this.a = k * g - this.b * h;
			this.b = k * h + this.b * g;
			this.c = j * g - this.d * h;
			this.d = j * h + this.d * g;
			this.tx = i * g - this.ty * h;
			this.ty = i * h + this.ty * g;
			return this;
		};
		f.prototype.skew = function(e, c) {
			e *= f.DEG_TO_RAD;
			c *= f.DEG_TO_RAD;
			this.append(Math.cos(c), Math.sin(c), -Math.sin(e), Math.cos(e), 0, 0);
			return this;
		};
		f.prototype.scale = function(e, c) {
			this.a *= e;
			this.d *= c;
			this.c *= e;
			this.b *= c;
			this.tx *= e;
			this.ty *= c;
			return this;
		};
		f.prototype.translate = function(e, c) {
			this.tx += e;
			this.ty += c;
			return this;
		};
		f.prototype.identity = function() {
			this.a = this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this;
		};
		f.prototype.invert = function() {
			var h = this.a,
				g = this.b,
				l = this.c,
				k = this.d,
				j = this.tx,
				i = h * k - g * l;
			this.a = k / i;
			this.b = -g / i;
			this.c = -l / i;
			this.d = h / i;
			this.tx = (l * this.ty - k * j) / i;
			this.ty = -(h * this.ty - g * j) / i;
			return this;
		};
		f.transformCoords = function(h, g, j) {
			var i = b.Point.identity;
			i.x = h.a * g + h.c * j + h.tx;
			i.y = h.d * j + h.b * g + h.ty;
			return i;
		};
		f.prototype.toArray = function(c) {
			this.array || (this.array = new Float32Array(9));
			c ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
			this.array[8] = 1;
			return this.array;
		};
		f.identity = new f;
		f.DEG_TO_RAD = Math.PI / 180;
		return f;
	}(b.HashObject);
	b.Matrix = a;
	a.prototype.__class__ = "egret.Matrix";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f(d, c) {
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof c && (c = 0);
			e.call(this);
			this.x = d;
			this.y = c;
		}
		__extends(f, e);
		f.prototype.clone = function() {
			return new f(this.x, this.y);
		};
		f.prototype.equals = function(c) {
			return this.x == c.x && this.y == c.y;
		};
		f.distance = function(d, c) {
			return Math.sqrt((d.x - c.x) * (d.x - c.x) + (d.y - c.y) * (d.y - c.y));
		};
		f.identity = new f(0, 0);
		return f;
	}(b.HashObject);
	b.Point = a;
	a.prototype.__class__ = "egret.Point";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f(g, d, i, h) {
			"undefined" === typeof g && (g = 0);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof i && (i = 0);
			"undefined" === typeof h && (h = 0);
			e.call(this);
			this.x = g;
			this.y = d;
			this.width = i;
			this.height = h;
		}
		__extends(f, e);
		Object.defineProperty(f.prototype, "right", {
			get: function() {
				return this.x + this.width;
			},
			set: function(c) {
				this.width = c - this.x;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "bottom", {
			get: function() {
				return this.y + this.height;
			},
			set: function(c) {
				this.height = c - this.y;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.initialize = function(h, g, j, i) {
			this.x = h;
			this.y = g;
			this.width = j;
			this.height = i;
			return this;
		};
		f.prototype.contains = function(d, c) {
			return this.x <= d && this.x + this.width >= d && this.y <= c && this.y + this.height >= c;
		};
		f.prototype.intersects = function(c) {
			return this.contains(c.x, c.y) || this.contains(c.x, c.bottom) || this.contains(c.right, c.y) || this.contains(c.right, c.bottom) ? !0 : !1;
		};
		f.prototype.clone = function() {
			return new f(this.x, this.y, this.width, this.height);
		};
		f.prototype.containsPoint = function(c) {
			return this.x < c.x && this.x + this.width > c.x && this.y < c.y && this.y + this.height > c.y ? !0 : !1;
		};
		f.identity = new f(0, 0, 0, 0);
		return f;
	}(b.HashObject);
	b.Rectangle = a;
	a.prototype.__class__ = "egret.Rectangle";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.fatal = function(e, d) {
			"undefined" === typeof d && (d = null);
			b.Logger.traceToConsole("Fatal", e, d);
			throw Error(b.Logger.getTraceCode("Fatal", e, d));
		};
		c.info = function(e, d) {
			"undefined" === typeof d && (d = null);
			b.Logger.traceToConsole("Info", e, d);
		};
		c.warning = function(e, d) {
			"undefined" === typeof d && (d = null);
			b.Logger.traceToConsole("Warning", e, d);
		};
		c.traceToConsole = function(f, e, d) {
			console.log(b.Logger.getTraceCode(f, e, d));
		};
		c.getTraceCode = function(f, e, d) {
			return "[" + f + "]" + e + ":" + (null == d ? "" : d);
		};
		return c;
	}();
	b.Logger = a;
	a.prototype.__class__ = "egret.Logger";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(k) {
	var j = function(c) {
		function d() {
			c.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			var b = document.getElementById(d.canvas_name),
				a = b.height;
			this._designWidth = b.width;
			this._designHeight = a;
		}
		__extends(d, c);
		d.getInstance = function() {
			null == d.instance && (l.initialize(), d.instance = new d);
			return d.instance;
		};
		d.prototype.setDesignSize = function(e, f, m) {
			this._designWidth = e;
			this._designHeight = f;
			m && (k.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"), this._setResolutionPolicy(m));
		};
		d.prototype._setResolutionPolicy = function(a) {
			this._resolutionPolicy = a;
			a.init(this);
			a._apply(this, this._designWidth, this._designHeight);
		};
		d.prototype.getScaleX = function() {
			return this._scaleX;
		};
		d.prototype.getScaleY = function() {
			return this._scaleY;
		};
		d.canvas_name = "gameCanvas";
		d.canvas_div_name = "gameDiv";
		return d;
	}(k.HashObject);
	k.StageDelegate = j;
	j.prototype.__class__ = "egret.StageDelegate";
	var i = function() {
		function b(a, d) {
			this.setContainerStrategy(a);
			this.setContentStrategy(d);
		}
		b.prototype.init = function(a) {
			this._containerStrategy.init(a);
			this._contentStrategy.init(a);
		};
		b.prototype._apply = function(d, e, f) {
			this._containerStrategy._apply(d, e, f);
			this._contentStrategy._apply(d, e, f);
		};
		b.prototype.setContainerStrategy = function(a) {
			a instanceof l && (this._containerStrategy = a);
		};
		b.prototype.setContentStrategy = function(c) {
			c instanceof g && (this._contentStrategy = c);
		};
		return b;
	}();
	k.ResolutionPolicy = i;
	i.prototype.__class__ = "egret.ResolutionPolicy";
	var l = function() {
		function a() {}
		a.initialize = function() {
			a.EQUAL_TO_FRAME = new h;
		};
		a.prototype.init = function(c) {};
		a.prototype._apply = function(d, e, f) {};
		a.prototype._setupContainer = function() {
			var c = document.body,
				d;
			c && (d = c.style) && (d.paddingTop = d.paddingTop || "0px", d.paddingRight = d.paddingRight || "0px", d.paddingBottom = d.paddingBottom || "0px", d.paddingLeft = d.paddingLeft || "0px", d.borderTop = d.borderTop || "0px", d.borderRight = d.borderRight || "0px", d.borderBottom = d.borderBottom || "0px", d.borderLeft = d.borderLeft || "0px", d.marginTop = d.marginTop || "0px", d.marginRight = d.marginRight || "0px", d.marginBottom = d.marginBottom || "0px", d.marginLeft = d.marginLeft || "0px");
		};
		return a;
	}();
	k.ContainerStrategy = l;
	l.prototype.__class__ = "egret.ContainerStrategy";
	var h = function(c) {
		function d() {
			c.apply(this, arguments);
		}
		__extends(d, c);
		d.prototype._apply = function(a) {
			this._setupContainer();
		};
		return d;
	}(l);
	k.EqualToFrame = h;
	h.prototype.__class__ = "egret.EqualToFrame";
	var g = function() {
		function a() {}
		a.prototype.init = function(c) {};
		a.prototype._apply = function(d, e, f) {};
		return a;
	}();
	k.ContentStrategy = g;
	g.prototype.__class__ = "egret.ContentStrategy";
	i = function(c) {
		function d(a) {
			"undefined" === typeof a && (a = 0);
			c.call(this);
			this.minWidth = a;
		}
		__extends(d, c);
		d.prototype._apply = function(r, u, q) {
			u = document.getElementById(j.canvas_name);
			var m = document.getElementById(j.canvas_div_name),
				o = document.documentElement.clientWidth,
				w = document.documentElement.clientHeight,
				n = w / q,
				e = o / n,
				v = 1;
			0 != this.minWidth && (v = Math.min(1, e / this.minWidth));
			u.width = e / v;
			u.height = q;
			u.style.width = o + "px";
			u.style.height = w * v + "px";
			m.style.width = o + "px";
			m.style.height = w * v + "px";
			r._scaleX = n * v;
			r._scaleY = n * v;
		};
		return d;
	}(g);
	k.FixedHeight = i;
	i.prototype.__class__ = "egret.FixedHeight";
	i = function(c) {
		function d(a) {
			"undefined" === typeof a && (a = 0);
			c.call(this);
			this.minHeight = a;
		}
		__extends(d, c);
		d.prototype._apply = function(r, u, q) {
			q = document.getElementById(j.canvas_name);
			var m = document.getElementById(j.canvas_div_name),
				o = document.documentElement.clientWidth,
				w = document.documentElement.clientHeight,
				n = o / u,
				e = w / n,
				v = 1;
			0 != this.minHeight && (v = Math.min(1, e / this.minHeight));
			q.width = u;
			q.height = e / v;
			q.style.width = o * v + "px";
			q.style.height = w + "px";
			m.style.width = o * v + "px";
			m.style.height = w + "px";
			r._scaleX = n * v;
			r._scaleY = n * v;
		};
		return d;
	}(g);
	k.FixedWidth = i;
	i.prototype.__class__ = "egret.FixedWidth";
	i = function(c) {
		function d(b, a) {
			c.call(this);
			this.width = b;
			this.height = a;
		}
		__extends(d, c);
		d.prototype._apply = function(e, m, r) {
			r = document.getElementById(j.canvas_name);
			var o = document.getElementById(j.canvas_div_name),
				q = this.width,
				n = this.height,
				p = q / m;
			r.width = m;
			r.height = n / p;
			r.style.width = q + "px";
			r.style.height = n + "px";
			o.style.width = q + "px";
			o.style.height = n + "px";
			e._scaleX = p;
			e._scaleY = p;
		};
		return d;
	}(g);
	k.FixedSize = i;
	i.prototype.__class__ = "egret.FixedSize";
	i = function(c) {
		function d() {
			c.call(this);
		}
		__extends(d, c);
		d.prototype._apply = function(e, f, m) {
			f = document.getElementById(j.canvas_name);
			f.style.width = f.width + "px";
			f.style.height = f.height + "px";
			e._scaleX = 1;
			e._scaleY = 1;
		};
		return d;
	}(g);
	k.NoScale = i;
	i.prototype.__class__ = "egret.NoScale";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._originalData = {};
			this._drawAreaList = [];
		}
		__extends(f, d);
		f.getInstance = function() {
			null == f.instance && (f.instance = new f);
			return f.instance;
		};
		f.prototype.addDrawArea = function(c) {
			this._drawAreaList.push(c);
		};
		f.prototype.clearDrawArea = function() {
			this._drawAreaList = [];
		};
		f.prototype.drawImage = function(K, J, I, H, G, F, D, A, C, z) {
			D = D || 0;
			A = A || 0;
			var s = J._texture_to_render;
			if (null != s && 0 != F && 0 != G && 0 != C && 0 != z) {
				if (J._worldBounds) {
					var v = this._originalData;
					v.sourceX = I;
					v.sourceY = H;
					v.sourceWidth = G;
					v.sourceHeight = F;
					v.destX = D;
					v.destY = A;
					v.destWidth = C;
					v.destHeight = z;
					for (var q = this.getDrawAreaList(), g = 0; g < q.length; g++) {
						var u = q[g];
						if (!this.ignoreRender(J, u, v.destX, v.destY)) {
							if (0 != this._drawAreaList.length) {
								if (0 != J._worldTransform.b || 0 != J._worldTransform.c) {
									if (J._worldBounds.x + v.destX < u.x || J._worldBounds.y + v.destY < u.y || J._worldBounds.x + J._worldBounds.width + v.destX > u.x + u.width || J._worldBounds.y + J._worldBounds.height + v.destY > u.y + u.height) {
										b.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
										break;
									}
								} else {
									var i = J._worldTransform.a,
										o = J._worldTransform.d,
										j;
									J._worldBounds.x + v.destX < u.x && (j = (u.x - J._worldBounds.x) / i - v.destX, I += j / (C / G), G -= j / (C / G), C -= j, D += j);
									J._worldBounds.y + v.destY < u.y && (j = (u.y - J._worldBounds.y) / o - v.destY, H += j / (z / F), F -= j / (z / F), z -= j, A += j);
									J._worldBounds.x + J._worldBounds.width + v.destX > u.x + u.width && (j = (J._worldBounds.x + J._worldBounds.width - u.x - u.width) / i + v.destX, G -= j / (C / G), C -= j);
									J._worldBounds.y + J._worldBounds.height + v.destY > u.y + u.height && (j = (J._worldBounds.y + J._worldBounds.height - u.y - u.height) / o + v.destY, F -= j / (z / F), z -= j);
								}
							}
							K.drawImage(s, I, H, G, F, D, A, C, z);
						}
					}
				} else {
					K.drawImage(s, I, H, G, F, D, A, C, z);
				}
			}
		};
		f.prototype.ignoreRender = function(h, g, k, j) {
			var i = h._worldBounds;
			k *= h._worldTransform.a;
			j *= h._worldTransform.d;
			return i.x + i.width + k <= g.x || i.x + k >= g.x + g.width || i.y + i.height + j <= g.y || i.y + j >= g.y + g.height ? !0 : !1;
		};
		f.prototype.getDrawAreaList = function() {
			var c;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)]), c = this._defaultDrawAreaList) : c = this._drawAreaList;
			return c;
		};
		return f;
	}(b.HashObject);
	b.RenderFilter = a;
	a.prototype.__class__ = "egret.RenderFilter";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.mapClass = function(f, e, d) {
			"undefined" === typeof d && (d = "");
			f = this.getKey(f) + "#" + d;
			this.mapClassDic[f] = e;
		};
		c.getKey = function(d) {
			return "string" == typeof d ? d : b.getQualifiedClassName(d);
		};
		c.mapValue = function(f, e, d) {
			"undefined" === typeof d && (d = "");
			f = this.getKey(f) + "#" + d;
			this.mapValueDic[f] = e;
		};
		c.hasMapRule = function(f, e) {
			"undefined" === typeof e && (e = "");
			var d = this.getKey(f) + "#" + e;
			return this.mapValueDic[d] || this.mapClassDic[d] ? !0 : !1;
		};
		c.getInstance = function(h, e) {
			"undefined" === typeof e && (e = "");
			var d = this.getKey(h) + "#" + e;
			if (this.mapValueDic[d]) {
				return this.mapValueDic[d];
			}
			var f = this.mapClassDic[d];
			if (f) {
				return f = new f, this.mapValueDic[d] = f, delete this.mapClassDic[d], f;
			}
			throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + d + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
		};
		c.mapClassDic = {};
		c.mapValueDic = {};
		return c;
	}();
	b.Injector = a;
	a.prototype.__class__ = "egret.Injector";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.NORMAL = "normal";
		c.ADD = "add";
		c.LAYER = "layer";
		return c;
	}();
	b.BlendMode = a;
	a.prototype.__class__ = "egret.BlendMode";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._sizeDirty = this._normalDirty = !0;
			this._parent = null;
			this._cacheAsBitmap = !1;
			this._y = this._x = 0;
			this._scaleY = this._scaleX = 1;
			this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
			this._visible = !0;
			this._rotation = 0;
			this._alpha = 1;
			this._skewY = this._skewX = 0;
			this._hasHeightSet = this._hasWidthSet = !1;
			this.worldAlpha = 1;
			this._rectH = this._rectW = 0;
			this._worldTransform = new b.Matrix;
			this._cacheBounds = new b.Rectangle(0, 0, 0, 0);
		}
		__extends(f, d);
		f.prototype._setDirty = function() {
			this._normalDirty = !0;
		};
		f.prototype.getDirty = function() {
			return this._normalDirty || this._sizeDirty;
		};
		f.prototype._setParentSizeDirty = function() {
			!this.parent || this.parent._hasWidthSet || this.parent._hasHeightSet || this.parent._setSizeDirty();
		};
		f.prototype._setSizeDirty = function() {
			this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setParentSizeDirty());
		};
		f.prototype._clearDirty = function() {
			this._normalDirty = !1;
		};
		f.prototype._clearSizeDirty = function() {
			this._sizeDirty = !1;
		};
		Object.defineProperty(f.prototype, "parent", {
			get: function() {
				return this._parent;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._parentChanged = function(c) {
			this._parent = c;
		};
		Object.defineProperty(f.prototype, "x", {
			get: function() {
				return this._x;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._x = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "y", {
			get: function() {
				return this._y;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._y = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "scaleX", {
			get: function() {
				return this._scaleX;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._scaleX = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "scaleY", {
			get: function() {
				return this._scaleY;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._scaleY = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "anchorOffsetX", {
			get: function() {
				return this._anchorOffsetX;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._anchorOffsetX = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "anchorOffsetY", {
			get: function() {
				return this._anchorOffsetY;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._anchorOffsetY = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "anchorX", {
			get: function() {
				return this._anchorX;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._anchorX = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "anchorY", {
			get: function() {
				return this._anchorY;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._anchorY = c, this._setDirty(), this._setParentSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "visible", {
			get: function() {
				return this._visible;
			},
			set: function(c) {
				this._visible = c;
				this._setDirty();
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "rotation", {
			get: function() {
				return this._rotation;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._rotation = c, this._setSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "alpha", {
			get: function() {
				return this._alpha;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._alpha = c, this._setDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "skewX", {
			get: function() {
				return this._skewX;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._skewX = c, this._setSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "skewY", {
			get: function() {
				return this._skewY;
			},
			set: function(c) {
				b.NumberUtils.isNumber(c) && (this._skewY = c, this._setSizeDirty());
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "touchEnabled", {
			get: function() {
				return this._touchEnabled;
			},
			set: function(c) {
				this._touchEnabled = c;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "scrollRect", {
			get: function() {
				return this._scrollRect;
			},
			set: function(c) {
				this._scrollRect = c;
				this._setSizeDirty();
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "measuredWidth", {
			get: function() {
				return this._measureBounds().width;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "measuredHeight", {
			get: function() {
				return this._measureBounds().height;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "explicitWidth", {
			get: function() {
				return this._explicitWidth;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "explicitHeight", {
			get: function() {
				return this._explicitHeight;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "width", {
			get: function() {
				return this._getSize(b.Rectangle.identity).width;
			},
			set: function(c) {
				this._setSizeDirty();
				this._setWidth(c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "height", {
			get: function() {
				return this._getSize(b.Rectangle.identity).height;
			},
			set: function(c) {
				this._setSizeDirty();
				this._setHeight(c);
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._setWidth = function(c) {
			this._explicitWidth = c;
			this._hasWidthSet = b.NumberUtils.isNumber(c);
		};
		f.prototype._setHeight = function(c) {
			this._explicitHeight = c;
			this._hasHeightSet = b.NumberUtils.isNumber(c);
		};
		f.prototype._draw = function(e) {
			if (this.visible && !this.drawCacheTexture(e)) {
				e.setAlpha(this.worldAlpha, this.blendMode);
				e.setTransform(this._worldTransform);
				var c = this.mask || this._scrollRect;
				c && e.pushMask(c);
				this._render(e);
				c && e.popMask();
			}
			this.destroyCacheBounds();
		};
		f.prototype.drawCacheTexture = function(i) {
			if (this._cacheAsBitmap) {
				var g = this._texture_to_render,
					m = g._offsetX,
					l = g._offsetY,
					k = g._textureWidth,
					g = g._textureHeight;
				this._updateTransform();
				i.setAlpha(this.worldAlpha, this.blendMode);
				i.setTransform(this._worldTransform);
				var j = b.MainContext.instance.rendererContext.texture_scale_factor;
				b.RenderFilter.getInstance().drawImage(i, this, 0, 0, k * j, g * j, m, l, k, g);
				return !0;
			}
			return !1;
		};
		f.prototype._updateTransform = function() {
			this._worldTransform.identity().appendMatrix(this._parent._worldTransform);
			var c = this._getOffsetPoint();
			this._worldTransform.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, c.x, c.y);
			this._scrollRect && this._worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y);
			this.worldAlpha = this._parent.worldAlpha * this._alpha;
		};
		f.prototype._render = function(c) {};
		f.prototype.getBounds = function(i) {
			var g = this._measureBounds(),
				o = this._hasWidthSet ? this._explicitWidth : g.width,
				n = this._hasHeightSet ? this._explicitHeight : g.height,
				m = g.x,
				g = g.y,
				l, j;
			0 != this._anchorX || 0 != this._anchorY ? (l = o * this._anchorX, j = n * this._anchorY) : (l = this._anchorOffsetX, j = this._anchorOffsetY);
			this._cacheBounds.initialize(m - l, g - j, o, n);
			o = this._cacheBounds;
			i || (i = new b.Rectangle);
			return i.initialize(o.x, o.y, o.width, o.height);
		};
		f.prototype.destroyCacheBounds = function() {
			this._cacheBounds.x = 0;
			this._cacheBounds.y = 0;
			this._cacheBounds.width = 0;
			this._cacheBounds.height = 0;
		};
		f.prototype._getConcatenatedMatrix = function() {
			for (var e = f.identityMatrixForGetConcatenated.identity(), c = this; null != c;) {
				if (0 != c._anchorX || 0 != c._anchorY) {
					var h = c._getSize(b.Rectangle.identity);
					e.prependTransform(c._x, c._y, c._scaleX, c._scaleY, c._rotation, c._skewX, c._skewY, h.width * c._anchorX, h.height * c._anchorY);
				} else {
					e.prependTransform(c._x, c._y, c._scaleX, c._scaleY, c._rotation, c._skewX, c._skewY, c._anchorOffsetX, c._anchorOffsetY);
				}
				c = c._parent;
			}
			return e;
		};
		f.prototype.localToGlobal = function(h, g, j) {
			"undefined" === typeof h && (h = 0);
			"undefined" === typeof g && (g = 0);
			var i = this._getConcatenatedMatrix();
			i.append(1, 0, 0, 1, h, g);
			j || (j = new b.Point);
			j.x = i.tx;
			j.y = i.ty;
			return j;
		};
		f.prototype.globalToLocal = function(h, g, j) {
			"undefined" === typeof h && (h = 0);
			"undefined" === typeof g && (g = 0);
			var i = this._getConcatenatedMatrix();
			i.invert();
			i.append(1, 0, 0, 1, h, g);
			j || (j = new b.Point);
			j.x = i.tx;
			j.y = i.ty;
			return j;
		};
		f.prototype.hitTest = function(g, e, h) {
			"undefined" === typeof h && (h = !1);
			if (!this.visible || !h && !this._touchEnabled) {
				return null;
			}
			h = this._getSize(b.Rectangle.identity);
			return 0 <= g && g < h.width && 0 <= e && e < h.height ? this.mask || this._scrollRect ? this._scrollRect && g < this._scrollRect.width && e < this._scrollRect.height || this.mask && this.mask.x <= g && g < this.mask.x + this.mask.width && this.mask.y <= e && e < this.mask.y + this.mask.height ? this : null : this : null;
		};
		f.prototype.hitTestPoint = function(g, e, h) {
			g = this.globalToLocal(g, e);
			return h ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), h = this._hitTestPointTexture, h.drawToTexture(this), 0 != h.getPixel32(g.x - this._hitTestPointTexture._offsetX, g.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(g.x, g.y, !0);
		};
		f.prototype._getMatrix = function() {
			var e = b.Matrix.identity.identity(),
				c = this._getOffsetPoint();
			e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, c.x, c.y);
			return e;
		};
		f.prototype._getSize = function(c) {
			return this._hasHeightSet && this._hasWidthSet ? c.initialize(NaN, NaN, this._explicitWidth, this._explicitHeight) : this._measureSize(b.Rectangle.identity);
		};
		f.prototype._measureSize = function(c) {
			this._sizeDirty ? (c = this._measureBounds(), this._rectW = c.width, this._rectH = c.height, this._clearSizeDirty()) : (c.width = this._rectW, c.height = this._rectH);
			return c;
		};
		f.prototype._measureBounds = function() {
			return b.Rectangle.identity.initialize(0, 0, 0, 0);
		};
		f.prototype._getOffsetPoint = function() {
			var g = this._anchorOffsetX,
				e = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY) {
				e = this._getSize(b.Rectangle.identity), g = this._anchorX * e.width, e = this._anchorY * e.height;
			}
			var h = b.Point.identity;
			h.x = g;
			h.y = e;
			return h;
		};
		f.prototype._onAddToStage = function() {
			this._stage = b.MainContext.instance.stage;
			b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this);
		};
		f.prototype._onRemoveFromStage = function() {
			this._stage = null;
			b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this);
		};
		Object.defineProperty(f.prototype, "stage", {
			get: function() {
				return this._stage;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.addEventListener = function(e, c, i, h, j) {
			"undefined" === typeof h && (h = !1);
			"undefined" === typeof j && (j = 0);
			d.prototype.addEventListener.call(this, e, c, i, h, j);
			((h = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(h ? f._enterFrameCallBackList : f._renderCallBackList, c, i, j);
		};
		f.prototype.removeEventListener = function(e, c, i, h) {
			"undefined" === typeof h && (h = !1);
			d.prototype.removeEventListener.call(this, e, c, i, h);
			((h = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(h ? f._enterFrameCallBackList : f._renderCallBackList, c, i);
		};
		f.prototype.dispatchEvent = function(g) {
			if (!g._bubbles) {
				return d.prototype.dispatchEvent.call(this, g);
			}
			for (var e = [], i = this; i;) {
				e.unshift(i), i = i.parent;
			}
			for (var h = e.length, i = h - 1, h = h - 2; 0 <= h; h--) {
				e.push(e[h]);
			}
			g._reset();
			this._dispatchPropagationEvent(g, e, i);
			return !g.isDefaultPrevented();
		};
		f.prototype._dispatchPropagationEvent = function(h, g, l) {
			for (var k = g.length, j = 0; j < k; j++) {
				var i = g[j];
				h._setCurrentTarget(i);
				h._target = this;
				h._eventPhase = j < l ? 1 : j == l ? 2 : 3;
				i._notifyListener(h);
				if (h._isPropagationStopped || h._isPropagationImmediateStopped) {
					break;
				}
			}
		};
		f.prototype.willTrigger = function(e) {
			for (var c = this; c;) {
				if (c.hasEventListener(e)) {
					return !0;
				}
				c = c._parent;
			}
			return !1;
		};
		Object.defineProperty(f.prototype, "cacheAsBitmap", {
			get: function() {
				return this._cacheAsBitmap;
			},
			set: function(c) {
				(this._cacheAsBitmap = c) ? (this.renderTexture || (this.renderTexture = new b.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null;
			},
			enumerable: !0,
			configurable: !0
		});
		f.getTransformBounds = function(A, z) {
			var w, v, u = A.width,
				s = A.height,
				q = u * z.a,
				u = u * z.b,
				j = s * z.c,
				s = s * z.d,
				o = z.tx,
				i = z.ty,
				g = o,
				h = o,
				B = i,
				x = i;
			(w = q + o) < g ? g = w : w > h && (h = w);
			(w = q + j + o) < g ? g = w : w > h && (h = w);
			(w = j + o) < g ? g = w : w > h && (h = w);
			(v = u + i) < B ? B = v : v > x && (x = v);
			(v = u + s + i) < B ? B = v : v > x && (x = v);
			(v = s + i) < B ? B = v : v > x && (x = v);
			return A.initialize(g, B, h - g, x - B);
		};
		f.identityMatrixForGetConcatenated = new b.Matrix;
		f._enterFrameCallBackList = [];
		f._renderCallBackList = [];
		return f;
	}(b.EventDispatcher);
	b.DisplayObject = a;
	a.prototype.__class__ = "egret.DisplayObject";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._touchChildren = !0;
			this._children = [];
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "touchChildren", {
			get: function() {
				return this._touchChildren;
			},
			set: function(c) {
				this._touchChildren = c;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "numChildren", {
			get: function() {
				return this._children.length;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.setChildIndex = function(e, c) {
			this.doSetChildIndex(e, c);
		};
		f.prototype.doSetChildIndex = function(g, e) {
			var h = this._children.indexOf(g);
			0 > h && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
			this._children.splice(h, 1);
			0 > e || this._children.length <= e ? this._children.push(g) : this._children.splice(e, 0, g);
		};
		f.prototype.addChild = function(e) {
			var c = this.numChildren;
			e._parent == this && c--;
			return this._doAddChild(e, c);
		};
		f.prototype.addChildAt = function(e, c) {
			return this._doAddChild(e, c);
		};
		f.prototype._doAddChild = function(h, c, i) {
			"undefined" === typeof i && (i = !0);
			if (h == this) {
				return h;
			}
			if (0 > c || c > this._children.length) {
				return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"), h;
			}
			var j = h.parent;
			if (j == this) {
				return this.doSetChildIndex(h, c), h;
			}
			j && j.removeChild(h);
			this._children.splice(c, 0, h);
			h._parentChanged(this);
			i && h.dispatchEventWith(b.Event.ADDED, !0);
			if (this._stage) {
				for (h._onAddToStage(), c = f.__EVENT__ADD_TO_STAGE_LIST; 0 < c.length;) {
					c.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
				}
			}
			h._setDirty();
			this._setSizeDirty();
			return h;
		};
		f.prototype.removeChild = function(c) {
			c = this._children.indexOf(c);
			if (0 <= c) {
				return this._doRemoveChild(c);
			}
			b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
			return null;
		};
		f.prototype.removeChildAt = function(c) {
			if (0 <= c && c < this._children.length) {
				return this._doRemoveChild(c);
			}
			b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null;
		};
		f.prototype._doRemoveChild = function(h, c) {
			"undefined" === typeof c && (c = !0);
			var i = this._children,
				k = i[h];
			c && k.dispatchEventWith(b.Event.REMOVED, !0);
			if (this._stage) {
				k._onRemoveFromStage();
				for (var j = f.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < j.length;) {
					j.shift().dispatchEventWith(b.Event.REMOVED_FROM_STAGE);
				}
			}
			k._parentChanged(null);
			i.splice(h, 1);
			this._setSizeDirty();
			return k;
		};
		f.prototype.getChildAt = function(c) {
			if (0 <= c && c < this._children.length) {
				return this._children[c];
			}
			b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null;
		};
		f.prototype.contains = function(c) {
			for (; c;) {
				if (c == this) {
					return !0;
				}
				c = c._parent;
			}
			return !1;
		};
		f.prototype.swapChildrenAt = function(e, c) {
			0 <= e && e < this._children.length && 0 <= c && c < this._children.length ? this._swapChildrenAt(e, c) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
		};
		f.prototype.swapChildren = function(h, g) {
			var j = this._children.indexOf(h),
				i = this._children.indexOf(g); - 1 == j || -1 == i ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(j, i);
		};
		f.prototype._swapChildrenAt = function(g, e) {
			if (g != e) {
				var i = this._children,
					h = i[g];
				i[g] = i[e];
				i[e] = h;
			}
		};
		f.prototype.getChildIndex = function(c) {
			return this._children.indexOf(c);
		};
		f.prototype.removeChildren = function() {
			for (var c = this._children.length - 1; 0 <= c; c--) {
				this._doRemoveChild(c);
			}
		};
		f.prototype._updateTransform = function() {
			if (this.visible) {
				d.prototype._updateTransform.call(this);
				for (var e = 0, c = this._children.length; e < c; e++) {
					this._children[e]._updateTransform();
				}
			}
		};
		f.prototype._render = function(g) {
			for (var e = 0, h = this._children.length; e < h; e++) {
				this._children[e]._draw(g);
			}
		};
		f.prototype._measureBounds = function() {
			for (var w = 0, v = 0, u = 0, t = 0, s = this._children.length, q = 0; q < s; q++) {
				var p = this._children[q],
					j;
				if (p.visible && (j = b.DisplayObject.getTransformBounds(p._getSize(b.Rectangle.identity), p._getMatrix()))) {
					var p = j.x,
						o = j.y,
						i = j.width + j.x,
						g = j.height + j.y;
					if (p < w || 0 == q) {
						w = p;
					}
					if (i > v || 0 == q) {
						v = i;
					}
					if (o < u || 0 == q) {
						u = o;
					}
					if (g > t || 0 == q) {
						t = g;
					}
				}
			}
			return b.Rectangle.identity.initialize(w, u, v - w, t - u);
		};
		f.prototype.hitTest = function(y, x, w) {
			"undefined" === typeof w && (w = !1);
			var z;
			if (!this.visible) {
				return null;
			}
			if (this._scrollRect) {
				if (y > this._scrollRect.width || x > this._scrollRect.height) {
					return null;
				}
			} else {
				if (this.mask && (this.mask.x > y || y > this.mask.x + this.mask.width || this.mask.y > x || x > this.mask.y + this.mask.height)) {
					return null;
				}
			}
			for (var g = this._children, v = this._touchChildren, u = g.length - 1; 0 <= u; u--) {
				var o = g[u],
					t = o,
					j = t._getOffsetPoint(),
					e = t._x,
					i = t._y;
				this._scrollRect && (e -= this._scrollRect.x, i -= this._scrollRect.y);
				t = b.Matrix.identity.identity().prependTransform(e, i, t._scaleX, t._scaleY, t._rotation, 0, 0, j.x, j.y);
				t.invert();
				t = b.Matrix.transformCoords(t, y, x);
				if (o = o.hitTest(t.x, t.y, !0)) {
					if (o._touchEnabled && v) {
						return o;
					}
					if (this._touchEnabled) {
						return this;
					}
					null == z && (z = o);
				}
			}
			return z ? z : d.prototype.hitTest.call(this, y, x, w);
		};
		f.prototype._onAddToStage = function() {
			d.prototype._onAddToStage.call(this);
			for (var e = this.numChildren, c = 0; c < e; c++) {
				this._children[c]._onAddToStage();
			}
		};
		f.prototype._onRemoveFromStage = function() {
			d.prototype._onRemoveFromStage.call(this);
			for (var e = this.numChildren, c = 0; c < e; c++) {
				this._children[c]._onRemoveFromStage();
			}
		};
		f.prototype.getChildByName = function(h) {
			for (var g = this._children, k = this.numChildren, j, i = 0; i < k; i++) {
				if (j = g[i], j.name == h) {
					return j;
				}
			}
			return null;
		};
		f.__EVENT__ADD_TO_STAGE_LIST = [];
		f.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return f;
	}(b.DisplayObject);
	b.DisplayObjectContainer = a;
	a.prototype.__class__ = "egret.DisplayObjectContainer";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(e, c) {
			"undefined" === typeof e && (e = 480);
			"undefined" === typeof c && (c = 800);
			d.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = e;
			this._stageHeight = c;
		}
		__extends(f, d);
		f.prototype.invalidate = function() {
			f._invalidateRenderFlag = !0;
		};
		Object.defineProperty(f.prototype, "scaleMode", {
			get: function() {
				return this._scaleMode;
			},
			set: function(e) {
				if (this._scaleMode != e) {
					this._scaleMode = e;
					var c = {};
					c[b.StageScaleMode.NO_SCALE] = new b.NoScale;
					c[b.StageScaleMode.SHOW_ALL] = new b.FixedWidth;
					e = c[e];
					if (!e) {
						throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
					}
					c = new b.EqualToFrame;
					e = new b.ResolutionPolicy(c, e);
					b.StageDelegate.getInstance()._setResolutionPolicy(e);
					e = document.getElementById(b.StageDelegate.canvas_name);
					this._stageWidth = e.width;
					this._stageHeight = e.height;
					this.dispatchEventWith(b.Event.RESIZE);
				}
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "stageWidth", {
			get: function() {
				return this._stageWidth;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "stageHeight", {
			get: function() {
				return this._stageHeight;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.hitTest = function(i, g) {
			if (!this.touchEnabled) {
				return null;
			}
			var o;
			if (!this.visible) {
				return this;
			}
			for (var n = this._children, m = n.length - 1; 0 <= m; m--) {
				var l = o = n[m],
					j = l._getOffsetPoint(),
					l = b.Matrix.identity.identity().prependTransform(l.x, l.y, l.scaleX, l.scaleY, l.rotation, 0, 0, j.x, j.y);
				l.invert();
				l = b.Matrix.transformCoords(l, i, g);
				if ((o = o.hitTest(l.x, l.y, !0)) && o.touchEnabled) {
					return o;
				}
			}
			return this;
		};
		f.prototype.getBounds = function(c) {
			c || (c = new b.Rectangle);
			return c.initialize(0, 0, this._stageWidth, this._stageHeight);
		};
		f.prototype._updateTransform = function() {
			for (var e = 0, c = this._children.length; e < c; e++) {
				this._children[e]._updateTransform();
			}
		};
		f._invalidateRenderFlag = !1;
		return f;
	}(b.DisplayObjectContainer);
	b.Stage = a;
	a.prototype.__class__ = "egret.Stage";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.NO_SCALE = "noScale";
		c.SHOW_ALL = "showAll";
		return c;
	}();
	b.StageScaleMode = a;
	a.prototype.__class__ = "egret.StageScaleMode";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.REPEAT = "repeat";
		c.SCALE = "scale";
		return c;
	}();
	b.BitmapFillMode = a;
	a.prototype.__class__ = "egret.BitmapFillMode";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(c) {
			d.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.fillMode = "scale";
			c && (this.texture = c);
		}
		__extends(f, d);
		f.prototype._render = function(e) {
			var c = this.texture;
			c ? (this._texture_to_render = c, f._drawBitmap(e, this._hasWidthSet ? this._explicitWidth : c._textureWidth, this._hasHeightSet ? this._explicitHeight : c._textureHeight, this)) : this._texture_to_render = null;
		};
		f._drawBitmap = function(w, v, s, u) {
			var t = u._texture_to_render;
			if (t) {
				var q = t._textureWidth,
					p = t._textureHeight;
				if ("scale" == u.fillMode) {
					var j = u.scale9Grid || t.scale9Grid;
					if (j && q - j.width < v && p - j.height < s) {
						f.drawScale9GridImage(w, u, j, v, s);
					} else {
						var j = t._offsetX,
							o = t._offsetY,
							i = t._bitmapWidth || q,
							c = t._bitmapHeight || p;
						v /= q;
						j = Math.round(j * v);
						v = Math.round(i * v);
						s /= p;
						o = Math.round(o * s);
						s = Math.round(c * s);
						b.RenderFilter.getInstance().drawImage(w, u, t._bitmapX, t._bitmapY, i, c, j, o, v, s);
					}
				} else {
					f.drawRepeatImage(w, u, v, s);
				}
			}
		};
		f.drawRepeatImage = function(F, D, A, z) {
			var w = D._texture_to_render;
			if (w) {
				for (var v = w._textureWidth, u = w._textureHeight, q = w._bitmapX, s = w._bitmapY, o = w._bitmapWidth || v, g = w._bitmapHeight || u, j = w._offsetX, w = w._offsetY, G = b.RenderFilter.getInstance(); j < A; j += v) {
					for (var C = w; C < z; C += u) {
						var i = Math.min(o, A - j),
							E = Math.min(g, z - C);
						G.drawImage(F, D, q, s, o, g, j, C, i, E);
					}
				}
			}
		};
		f.drawScale9GridImage = function(O, N, M, L, K) {
			var J = N._texture_to_render;
			if (J && M) {
				var I = b.RenderFilter.getInstance(),
					G = J._textureWidth,
					H = J._textureHeight,
					F = J._bitmapX,
					v = J._bitmapY,
					D = J._bitmapWidth || G,
					s = J._bitmapHeight || H,
					g = J._offsetX,
					J = J._offsetY;
				M = b.Rectangle.identity.initialize(M.x - Math.round(g), M.y - Math.round(g), M.width, M.height);
				g = Math.round(g);
				J = Math.round(J);
				L -= G - D;
				K -= H - s;
				M.y == M.bottom && (M.bottom < s ? M.bottom++ : M.y--);
				M.x == M.right && (M.right < D ? M.right++ : M.x--);
				var G = F + M.x,
					H = F + M.right,
					z = D - M.right,
					i = v + M.y,
					q = v + M.bottom,
					j = s - M.bottom,
					C = g + M.x,
					o = J + M.y,
					s = K - (s - M.bottom),
					D = L - (D - M.right);
				I.drawImage(O, N, F, v, M.x, M.y, g, J, M.x, M.y);
				I.drawImage(O, N, G, v, M.width, M.y, C, J, D - M.x, M.y);
				I.drawImage(O, N, H, v, z, M.y, g + D, J, L - D, M.y);
				I.drawImage(O, N, F, i, M.x, M.height, g, o, M.x, s - M.y);
				I.drawImage(O, N, G, i, M.width, M.height, C, o, D - M.x, s - M.y);
				I.drawImage(O, N, H, i, z, M.height, g + D, o, L - D, s - M.y);
				I.drawImage(O, N, F, q, M.x, j, g, J + s, M.x, K - s);
				I.drawImage(O, N, G, q, M.width, j, C, J + s, D - M.x, K - s);
				I.drawImage(O, N, H, q, z, j, g + D, J + s, L - D, K - s);
			}
		};
		f.prototype._measureBounds = function() {
			var c = this.texture;
			return c ? b.Rectangle.identity.initialize(c._offsetX, c._offsetY, c._textureWidth, c._textureHeight) : d.prototype._measureBounds.call(this);
		};
		f.debug = !1;
		return f;
	}(b.DisplayObject);
	b.Bitmap = a;
	a.prototype.__class__ = "egret.Bitmap";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._text = "";
			this._textChanged = !1;
			this._bitmapPool = [];
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "text", {
			get: function() {
				return this._text;
			},
			set: function(c) {
				this._textChanged = !0;
				this._text = c;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._updateTransform = function() {
			this.visible && (this._textChanged && this._renderText(), d.prototype._updateTransform.call(this));
		};
		f.prototype._renderText = function(s) {
			var r = s = 0;
			this._textChanged && this.removeChildren();
			for (var q = 0, p = this.text.length; q < p; q++) {
				var o = this.text.charAt(q),
					n = this.spriteSheet.getTexture(o);
				if (null == n) {
					console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + o);
				} else {
					var o = n._offsetX,
						j = n._offsetY,
						g = n._textureWidth;
					if (this._textChanged) {
						var i = this._bitmapPool[q];
						i || (i = new b.Bitmap, this._bitmapPool.push(i));
						i.texture = n;
						this.addChild(i);
						i.x = s;
					}
					s += g + o;
					j + n._textureHeight > r && (r = j + n._textureHeight);
				}
			}
			this._textChanged = !1;
			return b.Rectangle.identity.initialize(0, 0, s, r);
		};
		f.prototype._measureBounds = function() {
			return this._renderText(!0);
		};
		return f;
	}(b.DisplayObjectContainer);
	b.BitmapText = a;
	a.prototype.__class__ = "egret.BitmapText";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {
			this.commandQueue = [];
		}
		c.prototype.beginFill = function(e, d) {};
		c.prototype._setStyle = function(d) {};
		c.prototype.drawRect = function(h, f, e, g) {};
		c.prototype.drawCircle = function(f, e, d) {};
		c.prototype.lineStyle = function(p, i, g, o, n, m, l, j) {};
		c.prototype.lineTo = function(e, d) {};
		c.prototype.curveTo = function(h, f, e, g) {};
		c.prototype.moveTo = function(e, d) {};
		c.prototype.clear = function() {};
		c.prototype.endFill = function() {};
		c.prototype._draw = function(d) {};
		return c;
	}();
	b.Graphics = a;
	a.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(f, g, e) {
			this.method = f;
			this.thisObject = g;
			this.args = e;
		};
	})().prototype.__class__ = "Command";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new b.Graphics);
				return this._graphics;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._render = function(c) {
			this._graphics && this._graphics._draw(c);
		};
		return f;
	}(b.DisplayObject);
	b.Shape = a;
	a.prototype.__class__ = "egret.Shape";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new b.Graphics);
				return this._graphics;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._render = function(c) {
			this._graphics && this._graphics._draw(c);
			d.prototype._render.call(this, c);
		};
		return f;
	}(b.DisplayObjectContainer);
	b.Sprite = a;
	a.prototype.__class__ = "egret.Sprite";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._fontFamily = "Arial";
			this._size = 30;
			this._textColorString = "#FFFFFF";
			this._textColor = 16777215;
			this._strokeColorString = "#000000";
			this._stroke = this._strokeColor = 0;
			this._textAlign = "left";
			this._verticalAlign = "top";
			this._numLines = this._lineSpacing = 0;
			this.measuredWidths = [];
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "text", {
			get: function() {
				return this._text;
			},
			set: function(c) {
				this._text != c && (this._setTextDirty(), this._text = c);
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._setTextDirty = function() {
			this._setSizeDirty();
		};
		Object.defineProperty(f.prototype, "fontFamily", {
			get: function() {
				return this._fontFamily;
			},
			set: function(c) {
				this._fontFamily != c && (this._setTextDirty(), this._fontFamily = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "size", {
			get: function() {
				return this._size;
			},
			set: function(c) {
				this._size != c && (this._setTextDirty(), this._size = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "italic", {
			get: function() {
				return this._italic;
			},
			set: function(c) {
				this._italic != c && (this._setTextDirty(), this._italic = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "bold", {
			get: function() {
				return this._bold;
			},
			set: function(c) {
				this._bold != c && (this._setTextDirty(), this._bold = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "textColor", {
			get: function() {
				return this._textColor;
			},
			set: function(c) {
				this._textColor != c && (this._setTextDirty(), this._textColor = c, this._textColorString = b.toColorString(c));
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "strokeColor", {
			get: function() {
				return this._strokeColor;
			},
			set: function(c) {
				this._strokeColor != c && (this._setTextDirty(), this._strokeColor = c, this._strokeColorString = b.toColorString(c));
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "stroke", {
			get: function() {
				return this._stroke;
			},
			set: function(c) {
				this._stroke != c && (this._setTextDirty(), this._stroke = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "textAlign", {
			get: function() {
				return this._textAlign;
			},
			set: function(c) {
				this._textAlign != c && (this._setTextDirty(), this._textAlign = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "verticalAlign", {
			get: function() {
				return this._verticalAlign;
			},
			set: function(c) {
				this._verticalAlign != c && (this._setTextDirty(), this._verticalAlign = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "lineSpacing", {
			get: function() {
				return this._lineSpacing;
			},
			set: function(c) {
				this._lineSpacing != c && (this._setTextDirty(), this._lineSpacing = c);
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "numLines", {
			get: function() {
				return this._numLines;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._render = function(c) {
			this.drawText(c, !1);
			this._clearDirty();
		};
		f.prototype._measureBounds = function() {
			return this.drawText(b.MainContext.instance.rendererContext, !0);
		};
		f.prototype.drawText = function(F, D) {
			var A = this.getTextLines(F);
			if (!A) {
				return b.Rectangle.identity.initialize(0, 0, 0, 0);
			}
			var z = A.length,
				w = 0.5 * this._size,
				v = this._size + this._lineSpacing,
				u = z * v - this._lineSpacing;
			this._textHeight = u;
			var q = this._explicitHeight;
			if (this._hasHeightSet && u < q) {
				var s = 0;
				this._verticalAlign == b.VerticalAlign.MIDDLE ? s = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (s = 1);
				w += s * (q - u);
			} else {
				q = Number.POSITIVE_INFINITY;
			}
			var s = w = Math.round(w),
				o = 0;
			this._textAlign == b.HorizontalAlign.CENTER ? o = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (o = 1);
			var g = this.measuredWidths,
				j;
			j = this._hasWidthSet ? this._explicitWidth : this._textWidth;
			for (var G = Number.POSITIVE_INFINITY, C = 0; C < z; C++) {
				var i = A[C],
					E = Math.round((j - g[C]) * o);
				E < G && (G = E);
				!D && w < q && F.drawText(this, i, E, w, j);
				w += v;
			}
			return b.Rectangle.identity.initialize(G, s, j, u);
		};
		f.prototype.getTextLines = function(A) {
			var z = this.text ? this.text.toString() : "";
			if (!z) {
				return null;
			}
			var w = this.measuredWidths;
			w.length = 0;
			A.setupFont(this);
			var z = z.split(/(?:\r\n|\r|\n)/),
				v = z.length,
				u = 0;
			if (this._hasWidthSet) {
				for (var s = this._explicitWidth, q = 0; q < v; q++) {
					var j = z[q],
						o = A.measureText(j);
					if (o > s) {
						for (var i = "", g = 0, h = j.length, B = 0; B < h; B++) {
							var x = j.charAt(B),
								o = A.measureText(x);
							g + o > s && (0 == g ? (z.splice(q, 0, x), w[q] = o, u < o && (u = o), o = 0, x = "") : (z.splice(q, 0, i), w[q] = g, u < g && (u = g), i = "", g = 0), q++, v++);
							g += o;
							i += x;
						}
						z[q] = i;
						w[q] = g;
					} else {
						w[q] = o, u < o && (u = o);
					}
				}
			} else {
				for (q = 0; q < v; q++) {
					j = z[q], o = A.measureText(j), w[q] = o, u < o && (u = o);
				}
			}
			this._textWidth = u;
			return z;
		};
		return f;
	}(b.DisplayObject);
	b.TextField = a;
	a.prototype.__class__ = "egret.TextField";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.DYNAMIC = "dynamic";
		c.INPUT = "input";
		return c;
	}();
	b.TextFieldType = a;
	a.prototype.__class__ = "egret.TextFieldType";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(e) {
			d.call(this);
			var c = e.bitmapData;
			this.bitmapData = c;
			this._textureMap = {};
			this._sourceWidth = c.width;
			this._sourceHeight = c.height;
			this._bitmapX = e._bitmapX - e._offsetX;
			this._bitmapY = e._bitmapY - e._offsetY;
		}
		__extends(f, d);
		f.prototype.getTexture = function(c) {
			return this._textureMap[c];
		};
		f.prototype.createTexture = function(u, t, s, r, q, p, o, i, j) {
			"undefined" === typeof p && (p = 0);
			"undefined" === typeof o && (o = 0);
			"undefined" === typeof i && (i = p + r);
			"undefined" === typeof j && (j = o + q);
			var g = new b.Texture;
			g._bitmapData = this.bitmapData;
			g._bitmapX = this._bitmapX + t;
			g._bitmapY = this._bitmapY + s;
			g._bitmapWidth = r;
			g._bitmapHeight = q;
			g._offsetX = p;
			g._offsetY = o;
			g._textureWidth = i;
			g._textureHeight = j;
			g._sourceWidth = this._sourceWidth;
			g._sourceHeight = this._sourceHeight;
			return this._textureMap[u] = g;
		};
		return f;
	}(b.HashObject);
	b.SpriteSheet = a;
	a.prototype.__class__ = "egret.SpriteSheet";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.apply(this, arguments);
			this._placeholderText = "";
			this._edFontSize = 14;
			this._textColor = 16711680;
			this._placeholderFontSize = 14;
			this._placeholderColor = 16776960;
			this._preY = this._preX = 0;
		}
		__extends(f, d);
		f.prototype._onAddToStage = function() {
			d.prototype._onAddToStage.call(this);
			var e = this.localToGlobal(),
				c = new b.StageText;
			c._open(e.x, e.y, this._explicitWidth, this._explicitHeight);
			this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
			this.stageText = c;
		};
		f.prototype.setText = function(c) {
			this.stageText._setText(c);
		};
		f.prototype.getText = function() {
			return this.stageText._getText();
		};
		f.prototype.setTextType = function(c) {
			this.stageText._setTextType(c);
		};
		f.prototype.getTextType = function() {
			return this.stageText._getTextType();
		};
		f.prototype.onMouseDownHandler = function(c) {};
		f.prototype._onRemoveFromStage = function() {
			this.stageText._remove();
		};
		f.prototype._measureBounds = function() {
			return b.Rectangle.identity;
		};
		f.prototype.hitTest = function(g, e, h) {
			return null;
		};
		return f;
	}(b.DisplayObject);
	b.TextInput = a;
	a.prototype.__class__ = "egret.TextInput";
	a = function() {
		function c() {}
		c.prototype.editBoxEditingDidBegin = function(d) {};
		c.prototype.editBoxEditingDidEnd = function(d) {};
		c.prototype.editBoxTextChanged = function(e, d) {};
		c.prototype.editBoxReturn = function(d) {};
		return c;
	}();
	b.TextInputDegelete = a;
	a.prototype.__class__ = "egret.TextInputDegelete";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f(d, c) {
			e.call(this, d);
			this.charList = this.parseConfig(c);
		}
		__extends(f, e);
		f.prototype.getTexture = function(d) {
			var c = this._textureMap[d];
			if (!c) {
				c = this.charList[d];
				if (!c) {
					return null;
				}
				c = this.createTexture(d, c.x, c.y, c.width, c.height, c.offsetX, c.offsetY);
				this._textureMap[d] = c;
			}
			return c;
		};
		f.prototype.parseConfig = function(h) {
			h = h.split("\r\n").join("\n");
			h = h.split("\n");
			for (var g = this.getConfigByKey(h[3], "count"), n = {}, m = 4; m < 4 + g; m++) {
				var l = h[m],
					j = String.fromCharCode(this.getConfigByKey(l, "id")),
					i = {};
				n[j] = i;
				i.x = this.getConfigByKey(l, "x");
				i.y = this.getConfigByKey(l, "y");
				i.width = this.getConfigByKey(l, "width");
				i.height = this.getConfigByKey(l, "height");
				i.offsetX = this.getConfigByKey(l, "xoffset");
				i.offsetY = this.getConfigByKey(l, "yoffset");
			}
			return n;
		};
		f.prototype.getConfigByKey = function(h, g) {
			for (var l = h.split(" "), k = 0, j = l.length; k < j; k++) {
				var i = l[k];
				if (g == i.substring(0, g.length)) {
					return l = i.substring(g.length + 1), parseInt(l);
				}
			}
			return 0;
		};
		return f;
	}(b.SpriteSheet);
	b.BitmapTextSpriteSheet = a;
	a.prototype.__class__ = "egret.BitmapTextSpriteSheet";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(c) {
	var b = function(e) {
		function d(f, g) {
			e.call(this);
			this.frameRate = 60;
			f instanceof a ? (c.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = f) : this.delegate = new a(f, g);
			this.delegate.setMovieClip(this);
		}
		__extends(d, e);
		d.prototype.gotoAndPlay = function(f) {
			this.delegate.gotoAndPlay(f);
		};
		d.prototype.gotoAndStop = function(f) {
			this.delegate.gotoAndStop(f);
		};
		d.prototype.stop = function() {
			this.delegate.stop();
		};
		d.prototype.dispose = function() {
			this.delegate.dispose();
		};
		d.prototype.release = function() {
			c.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			this.dispose();
		};
		d.prototype.getCurrentFrameIndex = function() {
			c.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._currentFrameIndex;
		};
		d.prototype.getTotalFrame = function() {
			c.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._totalFrame;
		};
		d.prototype.setInterval = function(f) {
			c.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
			this.frameRate = 60 / f;
		};
		d.prototype.getIsPlaying = function() {
			c.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate.isPlaying;
		};
		return d;
	}(c.DisplayObjectContainer);
	c.MovieClip = b;
	b.prototype.__class__ = "egret.MovieClip";
	var a = function() {
		function d(f, e) {
			this.data = f;
			this._currentFrameIndex = this._passTime = this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = f;
			this._spriteSheet = new c.SpriteSheet(e);
		}
		d.prototype.setMovieClip = function(e) {
			this.movieClip = e;
			this.bitmap = new c.Bitmap;
			this.movieClip.addChild(this.bitmap);
		};
		d.prototype.gotoAndPlay = function(e) {
			this.checkHasFrame(e);
			this._isPlaying = !0;
			this._currentFrameIndex = 0;
			this._currentFrameName = e;
			this._totalFrame = this._frameData.frames[e].totalFrame;
			this.playNextFrame();
			this._passTime = 0;
			c.Ticker.getInstance().register(this.update, this);
		};
		d.prototype.gotoAndStop = function(e) {
			this.checkHasFrame(e);
			this.stop();
			this._currentFrameIndex = this._passTime = 0;
			this._currentFrameName = e;
			this._totalFrame = this._frameData.frames[e].totalFrame;
			this.playNextFrame();
		};
		d.prototype.stop = function() {
			this._isPlaying = !1;
			c.Ticker.getInstance().unregister(this.update, this);
		};
		d.prototype.dispose = function() {};
		d.prototype.checkHasFrame = function(e) {
			void 0 == this._frameData.frames[e] && c.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", e);
		};
		d.prototype.update = function(f) {
			for (var e = 1000 / this.movieClip.frameRate, e = Math.floor((this._passTime % e + f) / e); 1 <= e;) {
				1 == e ? this.playNextFrame() : this.playNextFrame(!1), e--;
			}
			this._passTime += f;
		};
		d.prototype.playNextFrame = function(f) {
			"undefined" === typeof f && (f = !0);
			var e = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
			if (f) {
				f = this.getTexture(e.res);
				var g = this.bitmap;
				g.x = e.x;
				g.y = e.y;
				g.texture = f;
			}
			null != e.action && this.movieClip.dispatchEventWith(e.action);
			this._currentFrameIndex++;
			this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0);
		};
		d.prototype.getTexture = function(f) {
			var e = this._frameData.res[f],
				g = this._spriteSheet.getTexture(f);
			g || (g = this._spriteSheet.createTexture(f, e.x, e.y, e.w, e.h));
			return g;
		};
		return d;
	}();
	c.DefaultMovieClipDelegate = a;
	a.prototype.__class__ = "egret.DefaultMovieClipDelegate";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
		}
		__extends(f, d);
		f.prototype._getText = function() {
			return this.inputElement.value;
		};
		f.prototype._setText = function(c) {
			this.inputElement.value = c;
		};
		f.prototype._setTextType = function(c) {
			this.inputElement.type = c;
		};
		f.prototype._getTextType = function() {
			return this.inputElement.type;
		};
		f.prototype._open = function(j, i, q, p) {
			"undefined" === typeof q && (q = 160);
			"undefined" === typeof p && (p = 21);
			var o = b.StageDelegate.getInstance().getScaleX(),
				n = b.StageDelegate.getInstance().getScaleY(),
				l = document.createElement("input");
			l.type = "text";
			l.style.fontSize = "20px";
			l.style.color = "#FFFFFF";
			l.style.borderStyle = "none";
			l.style.background = "none";
			l.style.width = q * o + "px";
			l.style.height = p * n + "px";
			l.style.outline = "medium";
			var g = b.Browser.getInstance().$new("div");
			g.style.position = "absolute";
			g.position.x = j * o;
			g.style.width = q * o + "px";
			g.style.height = p * n + "px";
			g.position.y = i * n;
			g.transforms();
			g.appendChild(l);
			j = b.Browser.getInstance().$("#StageDelegateDiv");
			j || (q = document.getElementById(b.StageDelegate.canvas_div_name), p = q.clientHeight, q = q.clientWidth, j = b.Browser.getInstance().$new("div"), j.id = "StageDelegateDiv", j.style.position = "absolute", j.style.width = q + "px", j.style.maxHeight = p + "px", j.style.margin = "0px", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(j), j.position.y = -p, j.transforms());
			j.appendChild(g);
			this.div = g;
			this.inputElement = l;
		};
		f.prototype._remove = function() {
			var c = this.div;
			c && c.parentNode && c.parentNode.removeChild(c);
		};
		return f;
	}(b.HashObject);
	b.StageText = a;
	a.prototype.__class__ = "egret.StageText";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.GET = "GET";
		c.POST = "POST";
		return c;
	}();
	b.URLRequestMethod = a;
	a.prototype.__class__ = "egret.URLRequestMethod";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.BINARY = "binary";
		c.TEXT = "text";
		c.VARIABLES = "variables";
		c.TEXTURE = "texture";
		c.SOUND = "sound";
		return c;
	}();
	b.URLLoaderDataFormat = a;
	a.prototype.__class__ = "egret.URLLoaderDataFormat";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f(c) {
			"undefined" === typeof c && (c = null);
			e.call(this);
			null !== c && this.decode(c);
		}
		__extends(f, e);
		f.prototype.decode = function(g) {
			this.variables || (this.variables = {});
			g = g.split("+").join(" ");
			for (var d, h = /[?&]?([^=]+)=([^&]*)/g; d = h.exec(g);) {
				this.variables[decodeURIComponent(d[1])] = decodeURIComponent(d[2]);
			}
		};
		f.prototype.toString = function() {
			if (!this.variables) {
				return "";
			}
			var h = this.variables,
				g = "",
				j = !0,
				i;
			for (i in h) {
				j ? j = !1 : g += "&", g += i + "=" + h[i];
			}
			return g;
		};
		return f;
	}(b.HashObject);
	b.URLVariables = a;
	a.prototype.__class__ = "egret.URLVariables";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(c) {
			"undefined" === typeof c && (c = null);
			d.call(this);
			this.method = b.URLRequestMethod.GET;
			this.url = c;
		}
		__extends(f, d);
		return f;
	}(b.HashObject);
	b.URLRequest = a;
	a.prototype.__class__ = "egret.URLRequest";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(c) {
			"undefined" === typeof c && (c = null);
			d.call(this);
			this.dataFormat = b.URLLoaderDataFormat.TEXT;
			c && this.load(c);
		}
		__extends(f, d);
		f.prototype.load = function(c) {
			this._request = c;
			this.data = null;
			b.MainContext.instance.netContext.proceed(this);
		};
		return f;
	}(b.EventDispatcher);
	b.URLLoader = a;
	a.prototype.__class__ = "egret.URLLoader";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0;
		}
		__extends(f, d);
		Object.defineProperty(f.prototype, "textureWidth", {
			get: function() {
				return this._textureWidth;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "textureHeight", {
			get: function() {
				return this._textureHeight;
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(f.prototype, "bitmapData", {
			get: function() {
				return this._bitmapData;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype._setBitmapData = function(e) {
			var c = b.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = e;
			this._sourceWidth = e.width;
			this._sourceHeight = e.height;
			this._textureWidth = this._sourceWidth * c;
			this._textureHeight = this._sourceHeight * c;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0;
		};
		f.prototype.getPixel32 = function(e, c) {
			return this._bitmapData.getContext("2d").getImageData(e, c, 1, 1).data;
		};
		return f;
	}(b.HashObject);
	b.Texture = a;
	a.prototype.__class__ = "egret.Texture";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = b.RendererContext.createRendererContext(this._bitmapData);
		}
		__extends(f, d);
		f.prototype.drawToTexture = function(h) {
			var g = this._bitmapData,
				j = h.getBounds(b.Rectangle.identity);
			g.width = j.width;
			g.height = j.height;
			h._worldTransform.identity();
			h.worldAlpha = 1;
			if (h instanceof b.DisplayObjectContainer) {
				this._offsetX = j.x;
				this._offsetY = j.y;
				h._worldTransform.append(1, 0, 0, 1, -j.x, -j.y);
				for (var g = h._children, j = 0, i = g.length; j < i; j++) {
					g[j]._updateTransform();
				}
			}
			g = b.RenderFilter.getInstance();
			j = g._drawAreaList.concat();
			g._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.webGLTexture = null;
			(i = h.mask || h._scrollRect) && this.renderContext.pushMask(i);
			h._render(this.renderContext);
			i && this.renderContext.popMask();
			g._drawAreaList = j;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight;
		};
		return f;
	}(b.Texture);
	b.RenderTexture = a;
	a.prototype.__class__ = "egret.RenderTexture";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1;
		}
		__extends(f, d);
		f.prototype.clearScreen = function() {};
		f.prototype.clearRect = function(g, e, i, h) {};
		f.prototype.drawImage = function(s, r, q, p, o, n, j, g, i) {
			b.Profiler.getInstance().onDrawImage();
		};
		f.prototype.setTransform = function(c) {};
		f.prototype.setAlpha = function(e, c) {};
		f.prototype.setupFont = function(c) {};
		f.prototype.measureText = function(c) {
			return 0;
		};
		f.prototype.drawText = function(h, g, k, j, i) {
			b.Profiler.getInstance().onDrawImage();
		};
		f.prototype.strokeRect = function(h, g, k, j, i) {};
		f.prototype.pushMask = function(c) {};
		f.prototype.popMask = function() {};
		f.createRendererContext = function(c) {
			return null;
		};
		return f;
	}(b.HashObject);
	b.RendererContext = a;
	a.prototype.__class__ = "egret.RendererContext";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.MOUSE = "mouse";
		c.TOUCH = "touch";
		c.mode = "touch";
		return c;
	}();
	b.InteractionMode = a;
	a.prototype.__class__ = "egret.InteractionMode";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.lastTouchY = this.lastTouchX = -1;
		}
		__extends(f, d);
		f.prototype.run = function() {};
		f.prototype.getTouchData = function(g, e, i) {
			var h = this._currentTouchTarget[g];
			null == h && (h = {}, this._currentTouchTarget[g] = h);
			h.stageX = e;
			h.stageY = i;
			h.identifier = g;
			return h;
		};
		f.prototype.dispatchEvent = function(e, c) {
			b.TouchEvent.dispatchTouchEvent(c.target, e, c.identifier, c.stageX, c.stageY, !1, !1, !1, !0 == this.touchDownTarget[c.identifier]);
		};
		f.prototype.onTouchBegan = function(h, g, j) {
			var i = b.MainContext.instance.stage.hitTest(h, g);
			i && (h = this.getTouchData(j, h, g), this.touchDownTarget[j] = !0, h.target = i, h.beginTarget = i, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, h));
		};
		f.prototype.onTouchMove = function(h, g, j) {
			if (h != this.lastTouchX || g != this.lastTouchY) {
				this.lastTouchX = h;
				this.lastTouchY = g;
				var i = b.MainContext.instance.stage.hitTest(h, g);
				i && (h = this.getTouchData(j, h, g), h.target = i, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, h));
			}
		};
		f.prototype.onTouchEnd = function(h, g, j) {
			var i = b.MainContext.instance.stage.hitTest(h, g);
			i && (h = this.getTouchData(j, h, g), delete this.touchDownTarget[j], j = h.beginTarget, h.target = i, this.dispatchEvent(b.TouchEvent.TOUCH_END, h), j == i ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, h) : h.beginTarget && (h.target = h.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, h)), delete this._currentTouchTarget[h.identifier]);
		};
		return f;
	}(b.HashObject);
	b.TouchContext = a;
	a.prototype.__class__ = "egret.TouchContext";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
		}
		__extends(f, e);
		f.prototype.proceed = function(c) {};
		return f;
	}(b.HashObject);
	b.NetContext = a;
	a.prototype.__class__ = "egret.NetContext";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this.frameRate = 60;
		}
		__extends(f, e);
		f.prototype.executeMainLoop = function(d, c) {};
		return f;
	}(b.HashObject);
	b.DeviceContext = a;
	a.prototype.__class__ = "egret.DeviceContext";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.translate = this.isHD ? function(e) {
				return "translate3d(" + e.x + "px, " + (e.y - b.MainContext.instance.stage.stageHeight) + "px, 0) ";
			} : function(e) {
				return "translate(" + e.x + "px, " + e.y + "px) ";
			};
			this.rotate = this.isHD ? function(e) {
				return "rotateZ(" + e + "deg) ";
			} : function(e) {
				return "rotate(" + e + "deg) ";
			};
			this.ua = navigator.userAgent.toLowerCase();
			var c = this.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || this.ua.match(/chrome|safari/);
			c && 0 < c.length && (c = c[0], "micromessenger" == c && (this.type = "wechat"), this.type = c);
			this.type = "unknow";
			switch (this.type) {
				case "firefox":
					this.pfx = "Moz";
					this.isHD = !0;
					break;
				case "chrome":
				case "safari":
					this.pfx = "webkit";
					this.isHD = !0;
					break;
				case "opera":
					this.pfx = "O";
					this.isHD = !1;
					break;
				case "ie":
					this.pfx = "ms";
					this.isHD = !1;
					break;
				default:
					this.pfx = "webkit", this.isHD = !0;
			}
			this.trans = this.pfx + "Transform";
		}
		__extends(f, d);
		f.getInstance = function() {
			null == f.instance && (f.instance = new f);
			return f.instance;
		};
		Object.defineProperty(f.prototype, "isMobile", {
			get: function() {
				b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
				return b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE;
			},
			enumerable: !0,
			configurable: !0
		});
		f.prototype.$new = function(c) {
			return this.$(document.createElement(c));
		};
		f.prototype.$ = function(e) {
			var c = document;
			if (e = e instanceof HTMLElement ? e : c.querySelector(e)) {
				e.find = e.find || this.$, e.hasClass = e.hasClass || function(g) {
					return this.className.match(new RegExp("(\\s|^)" + g + "(\\s|$)"));
				}, e.addClass = e.addClass || function(g) {
					this.hasClass(g) || (this.className && (this.className += " "), this.className += g);
					return this;
				}, e.removeClass = e.removeClass || function(g) {
					this.hasClass(g) && (this.className = this.className.replace(g, ""));
					return this;
				}, e.remove = e.remove || function() {}, e.appendTo = e.appendTo || function(g) {
					g.appendChild(this);
					return this;
				}, e.prependTo = e.prependTo || function(g) {
					g.childNodes[0] ? g.insertBefore(this, g.childNodes[0]) : g.appendChild(this);
					return this;
				}, e.transforms = e.transforms || function() {
					this.style[f.getInstance().trans] = f.getInstance().translate(this.position) + f.getInstance().rotate(this.rotation) + f.getInstance().scale(this.scale) + f.getInstance().skew(this.skew);
					return this;
				}, e.position = e.position || {
					x: 0,
					y: 0
				}, e.rotation = e.rotation || 0, e.scale = e.scale || {
					x: 1,
					y: 1
				}, e.skew = e.skew || {
					x: 0,
					y: 0
				}, e.translates = function(g, h) {
					this.position.x = g;
					this.position.y = h - b.MainContext.instance.stage.stageHeight;
					this.transforms();
					return this;
				}, e.rotate = function(g) {
					this.rotation = g;
					this.transforms();
					return this;
				}, e.resize = function(g, h) {
					this.scale.x = g;
					this.scale.y = h;
					this.transforms();
					return this;
				}, e.setSkew = function(g, h) {
					this.skew.x = g;
					this.skew.y = h;
					this.transforms();
					return this;
				};
			}
			return e;
		};
		f.prototype.scale = function(c) {
			return "scale(" + c.x + ", " + c.y + ") ";
		};
		f.prototype.skew = function(c) {
			return "skewX(" + -c.x + "deg) skewY(" + c.y + "deg)";
		};
		return f;
	}(b.HashObject);
	b.Browser = a;
	a.prototype.__class__ = "egret.Browser";
})(egret || (egret = {}));
egret.Codec = {
	name: "Jacob__Codec"
};
egret.Utils = {};
egret.Utils.unzip = function() {
	return egret.Codec.GZip.gunzip.apply(egret.Codec.GZip, arguments);
};
egret.Utils.unzipBase64 = function() {
	var a = egret.Codec.Base64.decode.apply(egret.Codec.Base64, arguments);
	return egret.Codec.GZip.gunzip.apply(egret.Codec.GZip, [a]);
};
egret.Utils.unzipBase64AsArray = function(m, l) {
	l = l || 1;
	var k = this.unzipBase64(m),
		n = [],
		i, h, j;
	i = 0;
	for (j = k.length / l; i < j; i++) {
		for (n[i] = 0, h = l - 1; 0 <= h; --h) {
			n[i] += k.charCodeAt(i * l + h) << 8 * h;
		}
	}
	return n;
};
egret.Utils.unzipAsArray = function(m, l) {
	l = l || 1;
	var k = this.unzip(m),
		n = [],
		i, h, j;
	i = 0;
	for (j = k.length / l; i < j; i++) {
		for (n[i] = 0, h = l - 1; 0 <= h; --h) {
			n[i] += k.charCodeAt(i * l + h) << 8 * h;
		}
	}
	return n;
};
egret.Utils.StringToArray = function(c) {
	c = c.split(",");
	var b = [],
		a;
	for (a = 0; a < c.length; a++) {
		b.push(parseInt(c[a]));
	}
	return b;
};
egret.Codec.Base64 = {
	name: "Jacob__Codec__Base64"
};
egret.Codec.Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
egret.Codec.Base64.decode = function(n) {
	var m = [],
		l, o, i, h, k, j = 0;
	for (n = n.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < n.length;) {
		l = this._keyStr.indexOf(n.charAt(j++)), o = this._keyStr.indexOf(n.charAt(j++)), h = this._keyStr.indexOf(n.charAt(j++)), k = this._keyStr.indexOf(n.charAt(j++)), l = l << 2 | o >> 4, o = (o & 15) << 4 | h >> 2, i = (h & 3) << 6 | k, m.push(String.fromCharCode(l)), 64 != h && m.push(String.fromCharCode(o)), 64 != k && m.push(String.fromCharCode(i));
	}
	return m = m.join("");
};
egret.Codec.Base64.decodeAsArray = function(m, l) {
	var k = this.decode(m),
		n = [],
		i, h, j;
	i = 0;
	for (j = k.length / l; i < j; i++) {
		for (n[i] = 0, h = l - 1; 0 <= h;
			--h) {
			n[i] += k.charCodeAt(i * l + h) << 8 * h;
		}
	}
	return n;
};
egret.Utils.uint8ArrayToUint32Array = function(i) {
	if (0 != i.length % 4) {
		return null;
	}
	for (var h = i.length / 4, g = window.Uint32Array ? new Uint32Array(h) : [], j = 0; j < h; j++) {
		var b = 4 * j;
		g[j] = i[b] + 256 * i[b + 1] + 65536 * i[b + 2] + 16777216 * i[b + 3];
	}
	return g;
};
egret.Codec.GZip = function(a) {
	this.data = a;
	this.debug = !1;
	this.gpflags = void 0;
	this.files = 0;
	this.unzipped = [];
	this.buf32k = Array(32768);
	this.bIdx = 0;
	this.modeZIP = !1;
	this.bytepos = 0;
	this.bb = 1;
	this.bits = 0;
	this.nameBuf = [];
	this.fileout = void 0;
	this.literalTree = Array(egret.Codec.GZip.LITERALS);
	this.distanceTree = Array(32);
	this.treepos = 0;
	this.Places = null;
	this.len = 0;
	this.fpos = Array(17);
	this.fpos[0] = 0;
	this.fmax = this.flens = void 0;
};
egret.Codec.GZip.gunzip = function(a) {
	return (new egret.Codec.GZip(a)).gunzip()[0][0];
};
egret.Codec.GZip.HufNode = function() {
	this.b1 = this.b0 = 0;
	this.jump = null;
	this.jumppos = -1;
};
egret.Codec.GZip.LITERALS = 288;
egret.Codec.GZip.NAMEMAX = 256;
egret.Codec.GZip.bitReverse = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255];
egret.Codec.GZip.cplens = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
egret.Codec.GZip.cplext = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99];
egret.Codec.GZip.cpdist = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
egret.Codec.GZip.cpdext = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
egret.Codec.GZip.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
egret.Codec.GZip.prototype.gunzip = function() {
	this.outputArr = [];
	this.nextFile();
	return this.unzipped;
};
egret.Codec.GZip.prototype.readByte = function() {
	this.bits += 8;
	return this.bytepos < this.data.length ? this.data.charCodeAt(this.bytepos++) : -1;
};
egret.Codec.GZip.prototype.byteAlign = function() {
	this.bb = 1;
};
egret.Codec.GZip.prototype.readBit = function() {
	var a;
	this.bits++;
	a = this.bb & 1;
	this.bb >>= 1;
	0 == this.bb && (this.bb = this.readByte(), a = this.bb & 1, this.bb = this.bb >> 1 | 128);
	return a;
};
egret.Codec.GZip.prototype.readBits = function(c) {
	for (var b = 0, a = c; a--;) {
		b = b << 1 | this.readBit();
	}
	c && (b = egret.Codec.GZip.bitReverse[b] >> 8 - c);
	return b;
};
egret.Codec.GZip.prototype.flushBuffer = function() {
	this.bIdx = 0;
};
egret.Codec.GZip.prototype.addBuffer = function(a) {
	this.buf32k[this.bIdx++] = a;
	this.outputArr.push(String.fromCharCode(a));
	32768 == this.bIdx && (this.bIdx = 0);
};
egret.Codec.GZip.prototype.IsPat = function() {
	for (;;) {
		if (this.fpos[this.len] >= this.fmax) {
			return -1;
		}
		if (this.flens[this.fpos[this.len]] == this.len) {
			return this.fpos[this.len]++;
		}
		this.fpos[this.len]++;
	}
};
egret.Codec.GZip.prototype.Rec = function() {
	var b = this.Places[this.treepos],
		a;
	if (17 == this.len) {
		return -1;
	}
	this.treepos++;
	this.len++;
	a = this.IsPat();
	if (0 <= a) {
		b.b0 = a;
	} else {
		if (b.b0 = 32768, this.Rec()) {
			return -1;
		}
	}
	a = this.IsPat();
	if (0 <= a) {
		b.b1 = a, b.jump = null;
	} else {
		if (b.b1 = 32768, b.jump = this.Places[this.treepos], b.jumppos = this.treepos, this.Rec()) {
			return -1;
		}
	}
	this.len--;
	return 0;
};
egret.Codec.GZip.prototype.CreateTree = function(g, b, a, h) {
	this.Places = g;
	this.treepos = 0;
	this.flens = a;
	this.fmax = b;
	for (g = 0; 17 > g; g++) {
		this.fpos[g] = 0;
	}
	this.len = 0;
	return this.Rec() ? -1 : 0;
};
egret.Codec.GZip.prototype.DecodeValue = function(i) {
	for (var h, g, j = 0, b = i[j];;) {
		if (h = this.readBit()) {
			if (!(b.b1 & 32768)) {
				return b.b1;
			}
			b = b.jump;
			h = i.length;
			for (g = 0; g < h; g++) {
				if (i[g] === b) {
					j = g;
					break;
				}
			}
		} else {
			if (!(b.b0 & 32768)) {
				return b.b0;
			}
			j++;
			b = i[j];
		}
	}
	return -1;
};
egret.Codec.GZip.prototype.DeflateLoop = function() {
	var l, k, j, m, o;
	do {
		if (l = this.readBit(), j = this.readBits(2), 0 == j) {
			for (this.byteAlign(), j = this.readByte(), j |= this.readByte() << 8, k = this.readByte(), k |= this.readByte() << 8, (j ^ ~k) & 65535 && document.write("BlockLen checksum mismatch\n"); j--;) {
				k = this.readByte(), this.addBuffer(k);
			}
		} else {
			if (1 == j) {
				for (;;) {
					if (j = egret.Codec.GZip.bitReverse[this.readBits(7)] >> 1, 23 < j ? (j = j << 1 | this.readBit(), 199 < j ? (j -= 128, j = j << 1 | this.readBit()) : (j -= 48, 143 < j && (j += 136))) : j += 256, 256 > j) {
						this.addBuffer(j);
					} else {
						if (256 == j) {
							break;
						} else {
							var n;
							j -= 257;
							o = this.readBits(egret.Codec.GZip.cplext[j]) + egret.Codec.GZip.cplens[j];
							j = egret.Codec.GZip.bitReverse[this.readBits(5)] >> 3;
							8 < egret.Codec.GZip.cpdext[j] ? (n = this.readBits(8), n |= this.readBits(egret.Codec.GZip.cpdext[j] - 8) << 8) : n = this.readBits(egret.Codec.GZip.cpdext[j]);
							n += egret.Codec.GZip.cpdist[j];
							for (j = 0; j < o; j++) {
								k = this.buf32k[this.bIdx - n & 32767], this.addBuffer(k);
							}
						}
					}
				}
			} else {
				if (2 == j) {
					var i = Array(320);
					k = 257 + this.readBits(5);
					n = 1 + this.readBits(5);
					m = 4 + this.readBits(4);
					for (j = 0; 19 > j; j++) {
						i[j] = 0;
					}
					for (j = 0; j < m; j++) {
						i[egret.Codec.GZip.border[j]] = this.readBits(3);
					}
					o = this.distanceTree.length;
					for (m = 0; m < o; m++) {
						this.distanceTree[m] = new egret.Codec.GZip.HufNode;
					}
					if (this.CreateTree(this.distanceTree, 19, i, 0)) {
						return this.flushBuffer(), 1;
					}
					o = k + n;
					m = 0;
					for (var p = -1; m < o;) {
						if (p++, j = this.DecodeValue(this.distanceTree), 16 > j) {
							i[m++] = j;
						} else {
							if (16 == j) {
								var h;
								j = 3 + this.readBits(2);
								if (m + j > o) {
									return this.flushBuffer(), 1;
								}
								for (h = m ? i[m - 1] : 0; j--;) {
									i[m++] = h;
								}
							} else {
								j = 17 == j ? 3 + this.readBits(3) : 11 + this.readBits(7);
								if (m + j > o) {
									return this.flushBuffer(), 1;
								}
								for (; j--;) {
									i[m++] = 0;
								}
							}
						}
					}
					o = this.literalTree.length;
					for (m = 0; m < o; m++) {
						this.literalTree[m] = new egret.Codec.GZip.HufNode;
					}
					if (this.CreateTree(this.literalTree, k, i, 0)) {
						return this.flushBuffer(), 1;
					}
					o = this.literalTree.length;
					for (m = 0; m < o; m++) {
						this.distanceTree[m] = new egret.Codec.GZip.HufNode;
					}
					j = [];
					for (m = k; m < i.length; m++) {
						j[m - k] = i[m];
					}
					if (this.CreateTree(this.distanceTree, n, j, 0)) {
						return this.flushBuffer(), 1;
					}
					for (;;) {
						if (j = this.DecodeValue(this.literalTree), 256 <= j) {
							j -= 256;
							if (0 == j) {
								break;
							}
							j--;
							o = this.readBits(egret.Codec.GZip.cplext[j]) + egret.Codec.GZip.cplens[j];
							j = this.DecodeValue(this.distanceTree);
							8 < egret.Codec.GZip.cpdext[j] ? (n = this.readBits(8), n |= this.readBits(egret.Codec.GZip.cpdext[j] - 8) << 8) : n = this.readBits(egret.Codec.GZip.cpdext[j]);
							for (n += egret.Codec.GZip.cpdist[j]; o--;) {
								k = this.buf32k[this.bIdx - n & 32767], this.addBuffer(k);
							}
						} else {
							this.addBuffer(j);
						}
					}
				}
			}
		}
	} while (!l);
	this.flushBuffer();
	this.byteAlign();
	return 0;
};
egret.Codec.GZip.prototype.unzipFile = function(b) {
	var a;
	this.gunzip();
	for (a = 0; a < this.unzipped.length; a++) {
		if (this.unzipped[a][1] == b) {
			return this.unzipped[a][0];
		}
	}
};
egret.Codec.GZip.prototype.nextFile = function() {
	this.outputArr = [];
	this.modeZIP = !1;
	var i = [];
	i[0] = this.readByte();
	i[1] = this.readByte();
	120 == i[0] && 218 == i[1] && (this.DeflateLoop(), this.unzipped[this.files] = [this.outputArr.join(""), "geonext.gxt"], this.files++);
	31 == i[0] && 139 == i[1] && (this.skipdir(), this.unzipped[this.files] = [this.outputArr.join(""), "file"], this.files++);
	if (80 == i[0] && 75 == i[1] && (this.modeZIP = !0, i[2] = this.readByte(), i[3] = this.readByte(), 3 == i[2] && 4 == i[3])) {
		i[0] = this.readByte();
		i[1] = this.readByte();
		this.gpflags = this.readByte();
		this.gpflags |= this.readByte() << 8;
		i = this.readByte();
		i |= this.readByte() << 8;
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		this.readByte();
		var h = this.readByte(),
			h = h | this.readByte() << 8,
			g = this.readByte(),
			g = g | this.readByte() << 8,
			j = 0;
		for (this.nameBuf = []; h--;) {
			var b = this.readByte();
			"/" == b | ":" == b ? j = 0 : j < egret.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[j++] = String.fromCharCode(b));
		}
		this.fileout || (this.fileout = this.nameBuf);
		for (var j = 0; j < g;) {
			this.readByte(), j++;
		}
		8 == i && (this.DeflateLoop(), this.unzipped[this.files] = [this.outputArr.join(""), this.nameBuf.join("")], this.files++);
		this.skipdir();
	}
};
egret.Codec.GZip.prototype.skipdir = function() {
	var b = [],
		a;
	this.gpflags & 8 && (b[0] = this.readByte(), b[1] = this.readByte(), b[2] = this.readByte(), b[3] = this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte());
	this.modeZIP && this.nextFile();
	b[0] = this.readByte();
	if (8 != b[0]) {
		return 0;
	}
	this.gpflags = this.readByte();
	this.readByte();
	this.readByte();
	this.readByte();
	this.readByte();
	this.readByte();
	this.readByte();
	if (this.gpflags & 4) {
		for (b[0] = this.readByte(), b[2] = this.readByte(), this.len = b[0] + 256 * b[1], b = 0; b < this.len; b++) {
			this.readByte();
		}
	}
	if (this.gpflags & 8) {
		for (b = 0, this.nameBuf = []; a = this.readByte();) {
			if ("7" == a || ":" == a) {
				b = 0;
			}
			b < egret.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[b++] = a);
		}
	}
	if (this.gpflags & 16) {
		for (; this.readByte();) {}
	}
	this.gpflags & 2 && (this.readByte(), this.readByte());
	this.DeflateLoop();
	this.readByte();
	this.readByte();
	this.readByte();
	this.readByte();
	this.modeZIP && this.nextFile();
};
(function() {
	function aF(a) {
		throw a;
	}

	function aE(e, f) {
		var l = e.split("."),
			k = ag;
		l[0] in k || !k.execScript || k.execScript("var " + l[0]);
		for (var h; l.length && (h = l.shift());) {
			l.length || f === aj ? k = k[h] ? k[h] : k[h] = {} : k[h] = f;
		}
	}

	function aD(f) {
		if ("string" === typeof f) {
			f = f.split("");
			var h, n;
			h = 0;
			for (n = f.length; h < n; h++) {
				f[h] = (f[h].charCodeAt(0) & 255) >>> 0;
			}
		}
		h = 1;
		n = 0;
		for (var m = f.length, k, l = 0; 0 < m;) {
			k = 1024 < m ? 1024 : m;
			m -= k;
			do {
				h += f[l++], n += h;
			} while (--k);
			h %= 65521;
			n %= 65521;
		}
		return (n << 16 | h) >>> 0;
	}

	function aG(c, d) {
		this.index = "number" === typeof d ? d : 0;
		this.i = 0;
		this.buffer = c instanceof(ao ? Uint8Array : Array) ? c : new(ao ? Uint8Array : Array)(32768);
		2 * this.buffer.length <= this.index && aF(Error("invalid index"));
		this.buffer.length <= this.index && this.f();
	}

	function aI(a) {
		this.buffer = new(ao ? Uint16Array : Array)(2 * a);
		this.length = 0;
	}

	function aH(A) {
		var B = A.length,
			z = 0,
			y = Number.POSITIVE_INFINITY,
			v, x, w, C, n, u, t, p, r;
		for (p = 0; p < B; ++p) {
			A[p] > z && (z = A[p]), A[p] < y && (y = A[p]);
		}
		v = 1 << z;
		x = new(ao ? Uint32Array : Array)(v);
		w = 1;
		C = 0;
		for (n = 2; w <= z;) {
			for (p = 0; p < B; ++p) {
				if (A[p] === w) {
					u = 0;
					t = C;
					for (r = 0; r < w; ++r) {
						u = u << 1 | t & 1, t >>= 1;
					}
					for (r = u; r < v; r += n) {
						x[r] = w << 16 | p;
					}++C;
				}
			}++w;
			C <<= 1;
			n <<= 1;
		}
		return [x, z, y];
	}

	function aC(c, d) {
		this.h = ad;
		this.w = 0;
		this.input = c;
		this.b = 0;
		d && (d.lazy && (this.w = d.lazy), "number" === typeof d.compressionType && (this.h = d.compressionType), d.outputBuffer && (this.a = ao && d.outputBuffer instanceof Array ? new Uint8Array(d.outputBuffer) : d.outputBuffer), "number" === typeof d.outputIndex && (this.b = d.outputIndex));
		this.a || (this.a = new(ao ? Uint8Array : Array)(32768));
	}

	function at(c, d) {
		this.length = c;
		this.G = d;
	}

	function av() {
		var a = ae;
		switch (an) {
			case 3 === a:
				return [257, a - 3, 0];
			case 4 === a:
				return [258, a - 4, 0];
			case 5 === a:
				return [259, a - 5, 0];
			case 6 === a:
				return [260, a - 6, 0];
			case 7 === a:
				return [261, a - 7, 0];
			case 8 === a:
				return [262, a - 8, 0];
			case 9 === a:
				return [263, a - 9, 0];
			case 10 === a:
				return [264, a - 10, 0];
			case 12 >= a:
				return [265, a - 11, 1];
			case 14 >= a:
				return [266, a - 13, 1];
			case 16 >= a:
				return [267, a - 15, 1];
			case 18 >= a:
				return [268, a - 17, 1];
			case 22 >= a:
				return [269, a - 19, 2];
			case 26 >= a:
				return [270, a - 23, 2];
			case 30 >= a:
				return [271, a - 27, 2];
			case 34 >= a:
				return [272, a - 31, 2];
			case 42 >= a:
				return [273, a - 35, 3];
			case 50 >= a:
				return [274, a - 43, 3];
			case 58 >= a:
				return [275, a - 51, 3];
			case 66 >= a:
				return [276, a - 59, 3];
			case 82 >= a:
				return [277, a - 67, 4];
			case 98 >= a:
				return [278, a - 83, 4];
			case 114 >= a:
				return [279, a - 99, 4];
			case 130 >= a:
				return [280, a - 115, 4];
			case 162 >= a:
				return [281, a - 131, 5];
			case 194 >= a:
				return [282, a - 163, 5];
			case 226 >= a:
				return [283, a - 195, 5];
			case 257 >= a:
				return [284, a - 227, 5];
			case 258 === a:
				return [285, a - 258, 0];
			default:
				aF("invalid length: " + a);
		}
	}

	function aB(T, aJ) {
		function S(c, h) {
			var l = c.G,
				p = [],
				n = 0,
				k;
			k = ab[c.length];
			p[n++] = k & 65535;
			p[n++] = k >> 16 & 255;
			p[n++] = k >> 24;
			var m;
			switch (an) {
				case 1 === l:
					m = [0, l - 1, 0];
					break;
				case 2 === l:
					m = [1, l - 2, 0];
					break;
				case 3 === l:
					m = [2, l - 3, 0];
					break;
				case 4 === l:
					m = [3, l - 4, 0];
					break;
				case 6 >= l:
					m = [4, l - 5, 1];
					break;
				case 8 >= l:
					m = [5, l - 7, 1];
					break;
				case 12 >= l:
					m = [6, l - 9, 2];
					break;
				case 16 >= l:
					m = [7, l - 13, 2];
					break;
				case 24 >= l:
					m = [8, l - 17, 3];
					break;
				case 32 >= l:
					m = [9, l - 25, 3];
					break;
				case 48 >= l:
					m = [10, l - 33, 4];
					break;
				case 64 >= l:
					m = [11, l - 49, 4];
					break;
				case 96 >= l:
					m = [12, l - 65, 5];
					break;
				case 128 >= l:
					m = [13, l - 97, 5];
					break;
				case 192 >= l:
					m = [14, l - 129, 6];
					break;
				case 256 >= l:
					m = [15, l - 193, 6];
					break;
				case 384 >= l:
					m = [16, l - 257, 7];
					break;
				case 512 >= l:
					m = [17, l - 385, 7];
					break;
				case 768 >= l:
					m = [18, l - 513, 8];
					break;
				case 1024 >= l:
					m = [19, l - 769, 8];
					break;
				case 1536 >= l:
					m = [20, l - 1025, 9];
					break;
				case 2048 >= l:
					m = [21, l - 1537, 9];
					break;
				case 3072 >= l:
					m = [22, l - 2049, 10];
					break;
				case 4096 >= l:
					m = [23, l - 3073, 10];
					break;
				case 6144 >= l:
					m = [24, l - 4097, 11];
					break;
				case 8192 >= l:
					m = [25, l - 6145, 11];
					break;
				case 12288 >= l:
					m = [26, l - 8193, 12];
					break;
				case 16384 >= l:
					m = [27, l - 12289, 12];
					break;
				case 24576 >= l:
					m = [28, l - 16385, 13];
					break;
				case 32768 >= l:
					m = [29, l - 24577, 13];
					break;
				default:
					aF("invalid distance");
			}
			k = m;
			p[n++] = k[0];
			p[n++] = k[1];
			p[n++] = k[2];
			l = 0;
			for (n = p.length; l < n; ++l) {
				M[J++] = p[l];
			}
			K[p[0]]++;
			B[p[3]]++;
			H = c.length + h - 1;
			L = null;
		}
		var P, R, Q, I, O, N = {},
			L, M = ao ? new Uint16Array(2 * aJ.length) : [],
			J = 0,
			H = 0,
			K = new(ao ? Uint32Array : Array)(286),
			B = new(ao ? Uint32Array : Array)(30),
			F = T.w,
			x;
		if (!ao) {
			for (Q = 0; 285 >= Q;) {
				K[Q++] = 0;
			}
			for (Q = 0; 29 >= Q;) {
				B[Q++] = 0;
			}
		}
		K[256] = 1;
		P = 0;
		for (R = aJ.length; P < R; ++P) {
			Q = O = 0;
			for (I = 3; Q < I && P + Q !== R; ++Q) {
				O = O << 8 | aJ[P + Q];
			}
			N[O] === aj && (N[O] = []);
			Q = N[O];
			if (!(0 < H--)) {
				for (; 0 < Q.length && 32768 < P - Q[0];) {
					Q.shift();
				}
				if (P + 3 >= R) {
					L && S(L, -1);
					Q = 0;
					for (I = R - P; Q < I; ++Q) {
						x = aJ[P + Q], M[J++] = x, ++K[x];
					}
					break;
				}
				if (0 < Q.length) {
					O = I = aj;
					var s = 0,
						w = aj,
						d = aj,
						G = w = aj,
						A = aJ.length,
						d = 0,
						G = Q.length;
					aJ: for (; d < G; d++) {
						I = Q[G - d - 1];
						w = 3;
						if (3 < s) {
							for (w = s; 3 < w; w--) {
								if (aJ[I + w - 1] !== aJ[P + w - 1]) {
									continue aJ;
								}
							}
							w = s;
						}
						for (; 258 > w && P + w < A && aJ[I + w] === aJ[P + w];) {
							++w;
						}
						w > s && (O = I, s = w);
						if (258 === w) {
							break;
						}
					}
					I = new at(s, P - O);
					L ? L.length < I.length ? (x = aJ[P - 1], M[J++] = x, ++K[x], S(I, 0)) : S(L, -1) : I.length < F ? L = I : S(I, 0);
				} else {
					L ? S(L, -1) : (x = aJ[P], M[J++] = x, ++K[x]);
				}
			}
			Q.push(P);
		}
		M[J++] = 256;
		K[256]++;
		T.L = K;
		T.K = B;
		return ao ? M.subarray(0, J) : M;
	}

	function aA(M, L) {
		function K(c) {
			var d = E[c][A[c]];
			d === F ? (K(c + 1), K(c + 1)) : --C[d];
			++A[c];
		}
		var H = M.length,
			J = new aI(572),
			I = new(ao ? Uint8Array : Array)(H),
			w, z, G;
		if (!ao) {
			for (z = 0; z < H; z++) {
				I[z] = 0;
			}
		}
		for (z = 0; z < H; ++z) {
			0 < M[z] && J.push(z, M[z]);
		}
		H = Array(J.length / 2);
		w = new(ao ? Uint32Array : Array)(J.length / 2);
		if (1 === H.length) {
			return I[J.pop().index] = 1, I;
		}
		z = 0;
		for (G = J.length / 2; z < G; ++z) {
			H[z] = J.pop(), w[z] = H[z].value;
		}
		var F = w.length;
		z = new(ao ? Uint16Array : Array)(L);
		var J = new(ao ? Uint8Array : Array)(L),
			C = new(ao ? Uint8Array : Array)(F);
		G = Array(L);
		var E = Array(L),
			A = Array(L),
			y = (1 << L) - F,
			B = 1 << L - 1,
			v, x, a;
		z[L - 1] = F;
		for (v = 0; v < L; ++v) {
			y < B ? J[v] = 0 : (J[v] = 1, y -= B), y <<= 1, z[L - 2 - v] = (z[L - 1 - v] / 2 | 0) + F;
		}
		z[0] = J[0];
		G[0] = Array(z[0]);
		E[0] = Array(z[0]);
		for (v = 1; v < L; ++v) {
			z[v] > 2 * z[v - 1] + J[v] && (z[v] = 2 * z[v - 1] + J[v]), G[v] = Array(z[v]), E[v] = Array(z[v]);
		}
		for (y = 0; y < F; ++y) {
			C[y] = L;
		}
		for (B = 0; B < z[L - 1]; ++B) {
			G[L - 1][B] = w[B], E[L - 1][B] = B;
		}
		for (y = 0; y < L; ++y) {
			A[y] = 0;
		}
		1 === J[L - 1] && (--C[0], ++A[L - 1]);
		for (v = L - 2; 0 <= v; --v) {
			x = y = 0;
			a = A[v + 1];
			for (B = 0; B < z[v]; B++) {
				x = G[v + 1][a] + G[v + 1][a + 1], x > w[y] ? (G[v][B] = x, E[v][B] = F, a += 2) : (G[v][B] = w[y], E[v][B] = y, ++y);
			}
			A[v] = 0;
			1 === J[v] && K(v);
		}
		w = C;
		z = 0;
		for (G = H.length; z < G; ++z) {
			I[H[z].index] = w[z];
		}
		return I;
	}

	function ay(d) {
		var h = new(ao ? Uint16Array : Array)(d.length),
			r = [],
			l = [],
			p = 0,
			n, k, m;
		n = 0;
		for (k = d.length; n < k; n++) {
			r[d[n]] = (r[d[n]] | 0) + 1;
		}
		n = 1;
		for (k = 16; n <= k; n++) {
			l[n] = p, p += r[n] | 0, p > 1 << n && aF("overcommitted"), p <<= 1;
		}
		65536 > p && aF("undercommitted");
		n = 0;
		for (k = d.length; n < k; n++) {
			for (p = l[d[n]], l[d[n]] += 1, r = h[n] = 0, m = d[n]; r < m; r++) {
				h[n] = h[n] << 1 | p & 1, p >>>= 1;
			}
		}
		return h;
	}

	function az(e, f) {
		this.input = e;
		this.a = new(ao ? Uint8Array : Array)(32768);
		this.h = Z.j;
		var h = {},
			g;
		!f && (f = {}) || "number" !== typeof f.compressionType || (this.h = f.compressionType);
		for (g in f) {
			h[g] = f[g];
		}
		h.outputBuffer = this.a;
		this.z = new aC(this.input, h);
	}

	function ax(c, d) {
		this.k = [];
		this.l = 32768;
		this.e = this.g = this.c = this.q = 0;
		this.input = ao ? new Uint8Array(c) : c;
		this.s = !1;
		this.m = af;
		this.B = !1;
		if (d || !(d = {})) {
			d.index && (this.c = d.index), d.bufferSize && (this.l = d.bufferSize), d.bufferType && (this.m = d.bufferType), d.resize && (this.B = d.resize);
		}
		switch (this.m) {
			case X:
				this.b = 32768;
				this.a = new(ao ? Uint8Array : Array)(32768 + this.l + 258);
				break;
			case af:
				this.b = 0;
				this.a = new(ao ? Uint8Array : Array)(this.l);
				this.f = this.J;
				this.t = this.H;
				this.o = this.I;
				break;
			default:
				aF(Error("invalid inflate mode"));
		}
	}

	function au(d, h) {
		for (var p = d.g, l = d.e, n = d.input, m = d.c, k; l < h;) {
			k = n[m++], k === aj && aF(Error("input buffer is broken")), p |= k << l, l += 8;
		}
		d.g = p >>> h;
		d.e = l - h;
		d.c = m;
		return p & (1 << h) - 1;
	}

	function aw(r, t) {
		for (var p = r.g, l = r.e, n = r.input, m = r.c, u = t[0], d = t[1], k; l < d;) {
			k = n[m++], k === aj && aF(Error("input buffer is broken")), p |= k << l, l += 8;
		}
		n = u[p & (1 << d) - 1];
		u = n >>> 16;
		r.g = p >> u;
		r.e = l - u;
		r.c = m;
		return n & 65535;
	}

	function ar(b) {
		function p(c, q, w) {
			var t, v, u, r;
			for (r = 0; r < c;) {
				switch (t = aw(this, q), t) {
					case 16:
						for (u = 3 + au(this, 2); u--;) {
							w[r++] = v;
						}
						break;
					case 17:
						for (u = 3 + au(this, 3); u--;) {
							w[r++] = 0;
						}
						v = 0;
						break;
					case 18:
						for (u = 11 + au(this, 7); u--;) {
							w[r++] = 0;
						}
						v = 0;
						break;
					default:
						v = w[r++] = t;
				}
			}
			return w;
		}
		var n = au(b, 5) + 257,
			k = au(b, 5) + 1,
			m = au(b, 4) + 4,
			l = new(ao ? Uint8Array : Array)(Y.length),
			h;
		for (h = 0; h < m;
			++h) {
			l[Y[h]] = au(b, 3);
		}
		m = aH(l);
		l = new(ao ? Uint8Array : Array)(n);
		h = new(ao ? Uint8Array : Array)(k);
		b.o(aH(p.call(b, n, m, l)), aH(p.call(b, k, m, h)));
	}

	function am(d, e) {
		var h, f;
		this.input = d;
		this.c = 0;
		if (e || !(e = {})) {
			e.index && (this.c = e.index), e.verify && (this.M = e.verify);
		}
		h = d[this.c++];
		f = d[this.c++];
		switch (h & 15) {
			case W:
				this.method = W;
				break;
			default:
				aF(Error("unsupported compression method"));
		}
		0 !== ((h << 8) + f) % 31 && aF(Error("invalid fcheck flag:" + ((h << 8) + f) % 31));
		f & 32 && aF(Error("fdict flag is not supported"));
		this.A = new ax(d, {
			index: this.c,
			bufferSize: e.bufferSize,
			bufferType: e.bufferType,
			resize: e.resize
		});
	}
	var aj = void 0,
		an = !0,
		ag = this,
		ao = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array;
	aG.prototype.f = function() {
		var e = this.buffer,
			f, h = e.length,
			g = new(ao ? Uint8Array : Array)(h << 1);
		if (ao) {
			g.set(e);
		} else {
			for (f = 0; f < h; ++f) {
				g[f] = e[f];
			}
		}
		return this.buffer = g;
	};
	aG.prototype.d = function(h, k, q) {
		var p = this.buffer,
			l = this.index,
			n = this.i,
			m = p[l];
		q && 1 < k && (h = 8 < k ? (ap[h & 255] << 24 | ap[h >>> 8 & 255] << 16 | ap[h >>> 16 & 255] << 8 | ap[h >>> 24 & 255]) >> 32 - k : ap[h] >> 8 - k);
		if (8 > k + n) {
			m = m << k | h, n += k;
		} else {
			for (q = 0; q < k; ++q) {
				m = m << 1 | h >> k - q - 1 & 1, 8 === ++n && (n = 0, p[l++] = ap[m], m = 0, l === p.length && (p = this.f()));
			}
		}
		p[l] = m;
		this.buffer = p;
		this.i = n;
		this.index = l;
	};
	aG.prototype.finish = function() {
		var d = this.buffer,
			e = this.index,
			f;
		0 < this.i && (d[e] <<= 8 - this.i, d[e] = ap[d[e]], e++);
		ao ? f = d.subarray(0, e) : (d.length = e, f = d);
		return f;
	};
	var ak = new(ao ? Uint8Array : Array)(256),
		aq;
	for (aq = 0; 256 > aq; ++aq) {
		for (var ah = aq, al = ah, ai = 7, ah = ah >>> 1; ah; ah >>>= 1) {
			al <<= 1, al |= ah & 1, --ai;
		}
		ak[aq] = (al << ai & 255) >>> 0;
	}
	var ap = ak,
		ak = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
	ao && new Uint32Array(ak);
	aI.prototype.getParent = function(a) {
		return 2 * ((a - 2) / 4 | 0);
	};
	aI.prototype.push = function(f, h) {
		var n, m, k = this.buffer,
			l;
		n = this.length;
		k[this.length++] = h;
		for (k[this.length++] = f; 0 < n;) {
			if (m = this.getParent(n), k[n] > k[m]) {
				l = k[n], k[n] = k[m], k[m] = l, l = k[n + 1], k[n + 1] = k[m + 1], k[m + 1] = l, n = m;
			} else {
				break;
			}
		}
		return this.length;
	};
	aI.prototype.pop = function() {
		var f, h, n = this.buffer,
			m, k, l;
		h = n[0];
		f = n[1];
		this.length -= 2;
		n[0] = n[this.length];
		n[1] = n[this.length + 1];
		for (l = 0;;) {
			k = 2 * l + 2;
			if (k >= this.length) {
				break;
			}
			k + 2 < this.length && n[k + 2] > n[k] && (k += 2);
			if (n[k] > n[l]) {
				m = n[l], n[l] = n[k], n[k] = m, m = n[l + 1], n[l + 1] = n[k + 1], n[k + 1] = m;
			} else {
				break;
			}
			l = k;
		}
		return {
			index: f,
			value: h,
			length: this.length
		};
	};
	var ad = 2,
		ak = {
			NONE: 0,
			r: 1,
			j: ad,
			N: 3
		},
		aa = [];
	for (aq = 0; 288 > aq; aq++) {
		switch (an) {
			case 143 >= aq:
				aa.push([aq + 48, 8]);
				break;
			case 255 >= aq:
				aa.push([aq - 144 + 400, 9]);
				break;
			case 279 >= aq:
				aa.push([aq - 256 + 0, 7]);
				break;
			case 287 >= aq:
				aa.push([aq - 280 + 192, 8]);
				break;
			default:
				aF("invalid literal: " + aq);
		}
	}
	aC.prototype.n = function() {
		var T, aJ, Q, S, R = this.input;
		switch (this.h) {
			case 0:
				Q = 0;
				for (S = R.length; Q < S;) {
					aJ = ao ? R.subarray(Q, Q + 65535) : R.slice(Q, Q + 65535);
					Q += aJ.length;
					var H = Q === S,
						L = aj,
						P = L = aj,
						P = L = aj,
						K = this.a,
						N = this.b;
					if (ao) {
						for (K = new Uint8Array(this.a.buffer); K.length <= N + aJ.length + 5;) {
							K = new Uint8Array(K.length << 1);
						}
						K.set(this.a);
					}
					L = H ? 1 : 0;
					K[N++] = L | 0;
					L = aJ.length;
					P = ~L + 65536 & 65535;
					K[N++] = L & 255;
					K[N++] = L >>> 8 & 255;
					K[N++] = P & 255;
					K[N++] = P >>> 8 & 255;
					if (ao) {
						K.set(aJ, N), N += aJ.length, K = K.subarray(0, N);
					} else {
						L = 0;
						for (P = aJ.length; L < P; ++L) {
							K[N++] = aJ[L];
						}
						K.length = N;
					}
					this.b = N;
					this.a = K;
				}
				break;
			case 1:
				Q = new aG(new Uint8Array(this.a.buffer), this.b);
				Q.d(1, 1, an);
				Q.d(1, 2, an);
				R = aB(this, R);
				aJ = 0;
				for (H = R.length; aJ < H; aJ++) {
					if (S = R[aJ], aG.prototype.d.apply(Q, aa[S]), 256 < S) {
						Q.d(R[++aJ], R[++aJ], an), Q.d(R[++aJ], 5), Q.d(R[++aJ], R[++aJ], an);
					} else {
						if (256 === S) {
							break;
						}
					}
				}
				this.a = Q.finish();
				this.b = this.a.length;
				break;
			case ad:
				S = new aG(new Uint8Array(this.a), this.b);
				var O, B, I, w = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
					d, k, L = Array(19),
					c, K = ad;
				S.d(1, 1, an);
				S.d(K, 2, an);
				R = aB(this, R);
				P = aA(this.L, 15);
				d = ay(P);
				K = aA(this.K, 7);
				N = ay(K);
				for (O = 286; 257 < O && 0 === P[O - 1]; O--) {}
				for (B = 30; 1 < B && 0 === K[B - 1]; B--) {}
				var J = O,
					x = B;
				T = new(ao ? Uint32Array : Array)(J + x);
				var M = new(ao ? Uint32Array : Array)(316),
					h, m;
				k = new(ao ? Uint8Array : Array)(19);
				for (c = I = 0; c < J; c++) {
					T[I++] = P[c];
				}
				for (c = 0; c < x; c++) {
					T[I++] = K[c];
				}
				if (!ao) {
					for (c = 0, x = k.length; c < x; ++c) {
						k[c] = 0;
					}
				}
				c = h = 0;
				for (x = T.length; c < x; c += I) {
					for (I = 1; c + I < x && T[c + I] === T[c]; ++I) {}
					J = I;
					if (0 === T[c]) {
						if (3 > J) {
							for (; 0 < J--;) {
								M[h++] = 0, k[0]++;
							}
						} else {
							for (; 0 < J;) {
								m = 138 > J ? J : 138, m > J - 3 && m < J && (m = J - 3), 10 >= m ? (M[h++] = 17, M[h++] = m - 3, k[17]++) : (M[h++] = 18, M[h++] = m - 11, k[18]++), J -= m;
							}
						}
					} else {
						if (M[h++] = T[c], k[T[c]]++, J--, 3 > J) {
							for (; 0 < J--;) {
								M[h++] = T[c], k[T[c]]++;
							}
						} else {
							for (; 0 < J;) {
								m = 6 > J ? J : 6, m > J - 3 && m < J && (m = J - 3), M[h++] = 16, M[h++] = m - 3, k[16]++, J -= m;
							}
						}
					}
				}
				T = ao ? M.subarray(0, h) : M.slice(0, h);
				k = aA(k, 7);
				for (c = 0; 19 > c; c++) {
					L[c] = k[w[c]];
				}
				for (I = 19; 4 < I && 0 === L[I - 1]; I--) {}
				w = ay(k);
				S.d(O - 257, 5, an);
				S.d(B - 1, 5, an);
				S.d(I - 4, 4, an);
				for (c = 0; c < I; c++) {
					S.d(L[c], 3, an);
				}
				c = 0;
				for (L = T.length; c < L; c++) {
					if (aJ = T[c], S.d(w[aJ], k[aJ], an), 16 <= aJ) {
						c++;
						switch (aJ) {
							case 16:
								H = 2;
								break;
							case 17:
								H = 3;
								break;
							case 18:
								H = 7;
								break;
							default:
								aF("invalid code: " + aJ);
						}
						S.d(T[c], H, an);
					}
				}
				H = [d, P];
				N = [N, K];
				aJ = H[0];
				H = H[1];
				K = N[0];
				d = N[1];
				N = 0;
				for (L = R.length; N < L; ++N) {
					if (Q = R[N], S.d(aJ[Q], H[Q], an), 256 < Q) {
						S.d(R[++N], R[++N], an), P = R[++N], S.d(K[P], d[P], an), S.d(R[++N], R[++N], an);
					} else {
						if (256 === Q) {
							break;
						}
					}
				}
				this.a = S.finish();
				this.b = this.a.length;
				break;
			default:
				aF("invalid compression type");
		}
		return this.a;
	};
	aq = [];
	var ae;
	for (ae = 3; 258 >= ae; ae++) {
		ah = av(), aq[ae] = ah[2] << 24 | ah[1] << 16 | ah[0];
	}
	var ab = ao ? new Uint32Array(aq) : aq,
		Z = ak;
	az.prototype.n = function() {
		var d, f, l, h, k = 0;
		h = this.a;
		d = W;
		switch (d) {
			case W:
				f = Math.LOG2E * Math.log(32768) - 8;
				break;
			default:
				aF(Error("invalid compression method"));
		}
		f = f << 4 | d;
		h[k++] = f;
		switch (d) {
			case W:
				switch (this.h) {
					case Z.NONE:
						l = 0;
						break;
					case Z.r:
						l = 1;
						break;
					case Z.j:
						l = 2;
						break;
					default:
						aF(Error("unsupported compression type"));
				}
				break;
			default:
				aF(Error("invalid compression method"));
		}
		d = l << 6 | 0;
		h[k++] = d | 31 - (256 * f + d) % 31;
		d = aD(this.input);
		this.z.b = k;
		h = this.z.n();
		k = h.length;
		ao && (h = new Uint8Array(h.buffer), h.length <= k + 4 && (this.a = new Uint8Array(h.length + 4), this.a.set(h), h = this.a), h = h.subarray(0, k + 4));
		h[k++] = d >> 24 & 255;
		h[k++] = d >> 16 & 255;
		h[k++] = d >> 8 & 255;
		h[k++] = d & 255;
		return h;
	};
	aE("Zlib.Deflate", az);
	aE("Zlib.Deflate.compress", function(c, d) {
		return (new az(c, d)).n();
	});
	aE("Zlib.Deflate.CompressionType", Z);
	aE("Zlib.Deflate.CompressionType.NONE", Z.NONE);
	aE("Zlib.Deflate.CompressionType.FIXED", Z.r);
	aE("Zlib.Deflate.CompressionType.DYNAMIC", Z.j);
	var X = 0,
		af = 1,
		ak = {
			D: X,
			C: af
		};
	ax.prototype.p = function() {
		for (; !this.s;) {
			var d = au(this, 3);
			d & 1 && (this.s = an);
			d >>>= 1;
			switch (d) {
				case 0:
					var d = this.input,
						h = this.c,
						r = this.a,
						l = this.b,
						p = aj,
						n = aj,
						k = aj,
						m = r.length,
						p = aj;
					this.e = this.g = 0;
					p = d[h++];
					p === aj && aF(Error("invalid uncompressed block header: LEN (first byte)"));
					n = p;
					p = d[h++];
					p === aj && aF(Error("invalid uncompressed block header: LEN (second byte)"));
					n |= p << 8;
					p = d[h++];
					p === aj && aF(Error("invalid uncompressed block header: NLEN (first byte)"));
					k = p;
					p = d[h++];
					p === aj && aF(Error("invalid uncompressed block header: NLEN (second byte)"));
					k |= p << 8;
					n === ~k && aF(Error("invalid uncompressed block header: length verify"));
					h + n > d.length && aF(Error("input buffer is broken"));
					switch (this.m) {
						case X:
							for (; l + n > r.length;) {
								p = m - l;
								n -= p;
								if (ao) {
									r.set(d.subarray(h, h + p), l), l += p, h += p;
								} else {
									for (; p--;) {
										r[l++] = d[h++];
									}
								}
								this.b = l;
								r = this.f();
								l = this.b;
							}
							break;
						case af:
							for (; l + n > r.length;) {
								r = this.f({
									v: 2
								});
							}
							break;
						default:
							aF(Error("invalid inflate mode"));
					}
					if (ao) {
						r.set(d.subarray(h, h + n), l), l += n, h += n;
					} else {
						for (; n--;) {
							r[l++] = d[h++];
						}
					}
					this.c = h;
					this.b = l;
					this.a = r;
					break;
				case 1:
					this.o(j, i);
					break;
				case 2:
					ar(this);
					break;
				default:
					aF(Error("unknown BTYPE: " + d));
			}
		}
		return this.t();
	};
	aq = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	var Y = ao ? new Uint16Array(aq) : aq;
	aq = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
	var ac = ao ? new Uint16Array(aq) : aq;
	aq = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
	var V = ao ? new Uint8Array(aq) : aq;
	aq = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
	var o = ao ? new Uint16Array(aq) : aq;
	aq = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	var U = ao ? new Uint8Array(aq) : aq;
	aq = new(ao ? Uint8Array : Array)(288);
	ah = 0;
	for (al = aq.length; ah < al; ++ah) {
		aq[ah] = 143 >= ah ? 8 : 255 >= ah ? 9 : 279 >= ah ? 7 : 8;
	}
	var j = aH(aq);
	aq = new(ao ? Uint8Array : Array)(30);
	ah = 0;
	for (al = aq.length; ah < al; ++ah) {
		aq[ah] = 5;
	}
	var i = aH(aq);
	ax.prototype.o = function(h, k) {
		var r = this.a,
			q = this.b;
		this.u = h;
		for (var m = r.length - 258, p, n, l; 256 !== (p = aw(this, h));) {
			if (256 > p) {
				q >= m && (this.b = q, r = this.f(), q = this.b), r[q++] = p;
			} else {
				for (p -= 257, l = ac[p], 0 < V[p] && (l += au(this, V[p])), p = aw(this, k), n = o[p], 0 < U[p] && (n += au(this, U[p])), q >= m && (this.b = q, r = this.f(), q = this.b); l--;) {
					r[q] = r[q++-n];
				}
			}
		}
		for (; 8 <= this.e;) {
			this.e -= 8, this.c--;
		}
		this.b = q;
	};
	ax.prototype.I = function(h, k) {
		var r = this.a,
			q = this.b;
		this.u = h;
		for (var m = r.length, p, n, l; 256 !== (p = aw(this, h));) {
			if (256 > p) {
				q >= m && (r = this.f(), m = r.length), r[q++] = p;
			} else {
				for (p -= 257, l = ac[p], 0 < V[p] && (l += au(this, V[p])), p = aw(this, k), n = o[p], 0 < U[p] && (n += au(this, U[p])), q + l > m && (r = this.f(), m = r.length); l--;) {
					r[q] = r[q++-n];
				}
			}
		}
		for (; 8 <= this.e;) {
			this.e -= 8, this.c--;
		}
		this.b = q;
	};
	ax.prototype.f = function() {
		var e = new(ao ? Uint8Array : Array)(this.b - 32768),
			f = this.b - 32768,
			l, k, h = this.a;
		if (ao) {
			e.set(h.subarray(32768, e.length));
		} else {
			for (l = 0, k = e.length; l < k; ++l) {
				e[l] = h[l + 32768];
			}
		}
		this.k.push(e);
		this.q += e.length;
		if (ao) {
			h.set(h.subarray(f, f + 32768));
		} else {
			for (l = 0; 32768 > l; ++l) {
				h[l] = h[f + l];
			}
		}
		this.b = 32768;
		return h;
	};
	ax.prototype.J = function(h) {
		var k, r = this.input.length / this.c + 1 | 0,
			q, m, p, n = this.input,
			l = this.a;
		h && ("number" === typeof h.v && (r = h.v), "number" === typeof h.F && (r += h.F));
		2 > r ? (q = (n.length - this.c) / this.u[2], p = q / 2 * 258 | 0, m = p < l.length ? l.length + p : l.length << 1) : m = l.length * r;
		ao ? (k = new Uint8Array(m), k.set(l)) : k = l;
		return this.a = k;
	};
	ax.prototype.t = function() {
		var r = 0,
			t = this.a,
			p = this.k,
			n, k = new(ao ? Uint8Array : Array)(this.q + (this.b - 32768)),
			m, l, u, h;
		if (0 === p.length) {
			return ao ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
		}
		m = 0;
		for (l = p.length; m < l; ++m) {
			for (n = p[m], u = 0, h = n.length; u < h; ++u) {
				k[r++] = n[u];
			}
		}
		m = 32768;
		for (l = this.b; m < l; ++m) {
			k[r++] = t[m];
		}
		this.k = [];
		return this.buffer = k;
	};
	ax.prototype.H = function() {
		var c, d = this.b;
		ao ? this.B ? (c = new Uint8Array(d), c.set(this.a.subarray(0, d))) : c = this.a.subarray(0, d) : (this.a.length > d && (this.a.length = d), c = this.a);
		return this.buffer = c;
	};
	am.prototype.p = function() {
		var d = this.input,
			e, f;
		e = this.A.p();
		this.c = this.A.c;
		this.M && (f = (d[this.c++] << 24 | d[this.c++] << 16 | d[this.c++] << 8 | d[this.c++]) >>> 0, f !== aD(e) && aF(Error("invalid adler-32 checksum")));
		return e;
	};
	aE("Zlib.Inflate", am);
	aE("Zlib.Inflate.BufferType", ak);
	ak.ADAPTIVE = ak.C;
	ak.BLOCK = ak.D;
	aE("Zlib.Inflate.prototype.decompress", am.prototype.p);
	ak = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	ao && new Uint16Array(ak);
	ak = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
	ao && new Uint16Array(ak);
	ak = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
	ao && new Uint8Array(ak);
	ak = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
	ao && new Uint16Array(ak);
	ak = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	ao && new Uint8Array(ak);
	ak = new(ao ? Uint8Array : Array)(288);
	aq = 0;
	for (ah = ak.length; aq < ah; ++aq) {
		ak[aq] = 143 >= aq ? 8 : 255 >= aq ? 9 : 279 >= aq ? 7 : 8;
	}
	aH(ak);
	ak = new(ao ? Uint8Array : Array)(30);
	aq = 0;
	for (ah = ak.length; aq < ah; ++aq) {
		ak[aq] = 5;
	}
	aH(ak);
	var W = 8;
}).call(this);
(function(b) {
	var a = function() {
		function c() {}
		c.parse = function(i) {
			i = b.SAXParser.getInstance().parserXML(i);
			if (!i || !i.childNodes) {
				return null;
			}
			for (var e = i.childNodes.length, d = !1, h = 0; h < e; h++) {
				var f = i.childNodes[h];
				if (1 == f.nodeType) {
					d = !0;
					break;
				}
			}
			return d ? c.parseNode(f) : null;
		};
		c.parseNode = function(l) {
			if (!l || 1 != l.nodeType) {
				return null;
			}
			var f = {};
			f.localName = l.localName;
			f.name = l.nodeName;
			l.namespaceURI && (f.namespace = l.namespaceURI);
			l.prefix && (f.prefix = l.prefix);
			for (var e = l.attributes, k = e.length, i = 0; i < k; i++) {
				var j = e[i],
					g = j.name;
				0 != g.indexOf("xmlns:") && (f["$" + g] = j.value);
			}
			e = l.childNodes;
			k = e.length;
			for (i = 0; i < k; i++) {
				if (j = c.parseNode(e[i])) {
					f.children || (f.children = []), j.parent = f, f.children.push(j);
				}
			}!f.children && (l = l.textContent.trim()) && (f.text = l);
			return f;
		};
		c.findChildren = function(f, e, d) {
			d ? d.length = 0 : d = [];
			c.findByPath(f, e, d);
			return d;
		};
		c.findByPath = function(n, f, e) {
			var m = f.indexOf("."),
				j; - 1 == m ? (j = f, m = !0) : (j = f.substring(0, m), f = f.substring(m + 1), m = !1);
			if (n = n.children) {
				for (var l = n.length, i = 0; i < l; i++) {
					var g = n[i];
					g.localName == j && (m ? e.push(g) : c.findByPath(g, f, e));
				}
			}
		};
		c.getAttributes = function(f, e) {
			e ? e.length = 0 : e = [];
			for (var d in f) {
				"$" == d.charAt(0) && e.push(d.substring(1));
			}
			return e;
		};
		return c;
	}();
	b.XML = a;
	a.prototype.__class__ = "egret.XML";
})(egret || (egret = {}));
(function(c) {
	var b = function() {
		function d() {}
		d.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		d.BIG_ENDIAN = "BIG_ENDIAN";
		return d;
	}();
	c.Endian = b;
	b.prototype.__class__ = "egret.Endian";
	var a = function() {
		function d() {
			this.length = this.position = 0;
			this._mode = "";
			this.maxlength = 0;
			this._endian = b.LITTLE_ENDIAN;
			this.isLittleEndian = !1;
			this._mode = "Typed array";
			this.maxlength = 4;
			this.arraybytes = new ArrayBuffer(this.maxlength);
			this.unalignedarraybytestemp = new ArrayBuffer(16);
			this.endian = d.DEFAULT_ENDIAN;
		}
		Object.defineProperty(d.prototype, "endian", {
			get: function() {
				return this._endian;
			},
			set: function(e) {
				this._endian = e;
				this.isLittleEndian = e == b.LITTLE_ENDIAN;
			},
			enumerable: !0,
			configurable: !0
		});
		d.prototype.ensureWriteableSpace = function(e) {
			this.ensureSpace(e + this.position);
		};
		d.prototype.setArrayBuffer = function(e) {
			this.ensureSpace(e.byteLength);
			this.length = e.byteLength;
			e = new Int8Array(e);
			(new Int8Array(this.arraybytes, 0, this.length)).set(e);
			this.position = 0;
		};
		Object.defineProperty(d.prototype, "bytesAvailable", {
			get: function() {
				return this.length - this.position;
			},
			enumerable: !0,
			configurable: !0
		});
		d.prototype.ensureSpace = function(f) {
			if (f > this.maxlength) {
				f = f + 255 & -256;
				var e = new ArrayBuffer(f),
					g = new Uint8Array(this.arraybytes, 0, this.length);
				(new Uint8Array(e, 0, this.length)).set(g);
				this.arraybytes = e;
				this.maxlength = f;
			}
		};
		d.prototype.writeByte = function(e) {
			this.ensureWriteableSpace(1);
			(new Int8Array(this.arraybytes))[this.position++] = ~~e;
			this.position > this.length && (this.length = this.position);
		};
		d.prototype.readByte = function() {
			if (this.position >= this.length) {
				throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			}
			return (new Int8Array(this.arraybytes))[this.position++];
		};
		d.prototype.readBytes = function(g, f, j) {
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof j && (j = 0);
			null == j && (j = g.length);
			g.ensureWriteableSpace(f + j);
			var i = new Int8Array(g.arraybytes),
				h = new Int8Array(this.arraybytes);
			i.set(h.subarray(this.position, this.position + j), f);
			this.position += j;
			j + f > g.length && (g.length += j + f - g.length);
		};
		d.prototype.writeUnsignedByte = function(e) {
			this.ensureWriteableSpace(1);
			(new Uint8Array(this.arraybytes))[this.position++] = ~~e & 255;
			this.position > this.length && (this.length = this.position);
		};
		d.prototype.readUnsignedByte = function() {
			if (this.position >= this.length) {
				throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			}
			return (new Uint8Array(this.arraybytes))[this.position++];
		};
		d.prototype.writeUnsignedShort = function(f) {
			this.ensureWriteableSpace(2);
			if (0 == (this.position & 1)) {
				var e = new Uint16Array(this.arraybytes);
				e[this.position >> 1] = ~~f & 65535;
			} else {
				e = new Uint16Array(this.unalignedarraybytestemp, 0, 1), e[0] = ~~f & 65535, f = new Uint8Array(this.arraybytes, this.position, 2), e = new Uint8Array(this.unalignedarraybytestemp, 0, 2), f.set(e);
			}
			this.position += 2;
			this.position > this.length && (this.length = this.position);
		};
		d.prototype.readUTFBytes = function(h) {
			var g = "";
			h = this.position + h;
			for (var l = new DataView(this.arraybytes); this.position < h;) {
				var k = l.getUint8(this.position++);
				if (128 > k) {
					if (0 == k) {
						break;
					}
					g += String.fromCharCode(k);
				} else {
					if (224 > k) {
						g += String.fromCharCode((k & 63) << 6 | l.getUint8(this.position++) & 127);
					} else {
						if (240 > k) {
							var j = l.getUint8(this.position++),
								g = g + String.fromCharCode((k & 31) << 12 | (j & 127) << 6 | l.getUint8(this.position++) & 127);
						} else {
							var j = l.getUint8(this.position++),
								i = l.getUint8(this.position++),
								g = g + String.fromCharCode((k & 15) << 18 | (j & 127) << 12 | i << 6 & 127 | l.getUint8(this.position++) & 127);
						}
					}
				}
			}
			return g;
		};
		d.prototype.readInt = function() {
			var e = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
			this.position += 4;
			return e;
		};
		d.prototype.readShort = function() {
			var e = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
			this.position += 2;
			return e;
		};
		d.prototype.readDouble = function() {
			var e = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
			this.position += 8;
			return e;
		};
		d.prototype.readUnsignedShort = function() {
			if (this.position > this.length + 2) {
				throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			}
			if (0 == (this.position & 1)) {
				var f = new Uint16Array(this.arraybytes),
					e = this.position >> 1;
				this.position += 2;
				return f[e];
			}
			f = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 2);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(e);
			this.position += 2;
			return f[0];
		};
		d.prototype.writeUnsignedInt = function(f) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var e = new Uint32Array(this.arraybytes);
				e[this.position >> 2] = ~~f & 4294967295;
			} else {
				e = new Uint32Array(this.unalignedarraybytestemp, 0, 1), e[0] = ~~f & 4294967295, f = new Uint8Array(this.arraybytes, this.position, 4), e = new Uint8Array(this.unalignedarraybytestemp, 0, 4), f.set(e);
			}
			this.position += 4;
			this.position > this.length && (this.length = this.position);
		};
		d.prototype.readUnsignedInt = function() {
			if (this.position > this.length + 4) {
				throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			}
			if (0 == (this.position & 3)) {
				var f = new Uint32Array(this.arraybytes),
					e = this.position >> 2;
				this.position += 4;
				return f[e];
			}
			f = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 4);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(e);
			this.position += 4;
			return f[0];
		};
		d.prototype.writeFloat = function(f) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var e = new Float32Array(this.arraybytes);
				e[this.position >> 2] = f;
			} else {
				e = new Float32Array(this.unalignedarraybytestemp, 0, 1), e[0] = f, f = new Uint8Array(this.arraybytes, this.position, 4), e = new Uint8Array(this.unalignedarraybytestemp, 0, 4), f.set(e);
			}
			this.position += 4;
			this.position > this.length && (this.length = this.position);
		};
		d.prototype.readFloat = function() {
			if (this.position > this.length + 4) {
				throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			}
			if (0 == (this.position & 3)) {
				var f = new Float32Array(this.arraybytes),
					e = this.position >> 2;
				this.position += 4;
				return f[e];
			}
			f = new Float32Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 4);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(e);
			this.position += 4;
			return f[0];
		};
		d.DEFAULT_ENDIAN = b.BIG_ENDIAN;
		return d;
	}();
	c.ByteArray = a;
	a.prototype.__class__ = "egret.ByteArray";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(g, e, h) {
			d.call(this);
			this._target = null;
			this.loop = this.ignoreGlobalPause = this._useTicks = !1;
			this._actions = this._steps = this.pluginData = null;
			this.paused = !1;
			this.duration = 0;
			this._prevPos = -1;
			this.position = null;
			this._stepPosition = this._prevPosition = 0;
			this.passive = !1;
			this.initialize(g, e, h);
		}
		__extends(f, d);
		f.get = function(g, c, i, h) {
			"undefined" === typeof c && (c = null);
			"undefined" === typeof i && (i = null);
			"undefined" === typeof h && (h = !1);
			h && f.removeTweens(g);
			return new f(g, c, i);
		};
		f.removeTweens = function(e) {
			if (e.tween_count) {
				for (var c = f._tweens, g = c.length - 1; 0 <= g; g--) {
					c[g]._target == e && (c[g].paused = !0, c.splice(g, 1));
				}
				e.tween_count = 0;
			}
		};
		f.tick = function(g, c) {
			"undefined" === typeof c && (c = !1);
			for (var j = f._tweens.concat(), i = j.length - 1; 0 <= i; i--) {
				var h = j[i];
				c && !h.ignoreGlobalPause || h.paused || h.tick(h._useTicks ? 1 : g);
			}
		};
		f._register = function(h, c) {
			var i = h._target,
				j = f._tweens;
			if (c) {
				i && (i.tween_count = i.tween_count ? i.tween_count + 1 : 1), j.push(h), f._inited || (b.Ticker.getInstance().register(f.tick, null), f._inited = !0);
			} else {
				for (i && i.tween_count--, i = j.length; i--;) {
					if (j[i] == h) {
						j.splice(i, 1);
						break;
					}
				}
			}
		};
		f.removeAllTweens = function() {
			for (var g = f._tweens, c = 0, i = g.length; c < i; c++) {
				var h = g[c];
				h.paused = !0;
				h._target.tweenjs_count = 0;
			}
			g.length = 0;
		};
		f.prototype.initialize = function(e, c, g) {
			this._target = e;
			c && (this._useTicks = c.useTicks, this.ignoreGlobalPause = c.ignoreGlobalPause, this.loop = c.loop, c.onChange && this.addEventListener("change", c.onChange, c.onChangeObj), c.override && f.removeTweens(e));
			this.pluginData = g || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			c && c.paused ? this.paused = !0 : f._register(this, !0);
			c && null != c.position && this.setPosition(c.position, f.NONE);
		};
		f.prototype.setPosition = function(h, g) {
			"undefined" === typeof g && (g = 1);
			0 > h && (h = 0);
			var n = h,
				m = !1;
			n >= this.duration && (this.loop ? n %= this.duration : (n = this.duration, m = !0));
			if (n == this._prevPos) {
				return m;
			}
			var l = this._prevPos;
			this.position = this._prevPos = n;
			this._prevPosition = h;
			if (this._target) {
				if (m) {
					this._updateTargetProps(null, 1);
				} else {
					if (0 < this._steps.length) {
						for (var j = 0, i = this._steps.length; j < i && !(this._steps[j].t > n); j++) {}
						j = this._steps[j - 1];
						this._updateTargetProps(j, (this._stepPosition = n - j.t) / j.d);
					}
				}
			}
			0 != g && 0 < this._actions.length && (this._useTicks ? this._runActions(n, n) : 1 == g && n < l ? (l != this.duration && this._runActions(l, this.duration), this._runActions(0, n, !0)) : this._runActions(l, n));
			m && this.setPaused(!0);
			this.dispatchEventWith("change");
			return m;
		};
		f.prototype._runActions = function(r, q, p) {
			"undefined" === typeof p && (p = !1);
			var o = r,
				n = q,
				j = -1,
				i = this._actions.length,
				g = 1;
			r > q && (o = q, n = r, j = i, i = g = -1);
			for (;
				(j += g) != i;) {
				q = this._actions[j];
				var h = q.t;
				(h == n || h > o && h < n || p && h == r) && q.f.apply(q.o, q.p);
			}
		};
		f.prototype._updateTargetProps = function(v, u) {
			var t, s, q, p;
			if (v || 1 != u) {
				if (this.passive = !!v.v) {
					return;
				}
				v.e && (u = v.e(u, 0, 1, 1));
				t = v.p0;
				s = v.p1;
			} else {
				this.passive = !1, t = s = this._curQueueProps;
			}
			for (var o in this._initQueueProps) {
				null == (q = t[o]) && (t[o] = q = this._initQueueProps[o]);
				null == (p = s[o]) && (s[o] = p = q);
				q = q == p || 0 == u || 1 == u || "number" != typeof q ? 1 == u ? p : q : q + (p - q) * u;
				var i = !1;
				if (p = f._plugins[o]) {
					for (var j = 0, g = p.length; j < g; j++) {
						var c = p[j].tween(this, o, q, t, s, u, !!v && t == s, !v);
						c == f.IGNORE ? i = !0 : q = c;
					}
				}
				i || (this._target[o] = q);
			}
		};
		f.prototype.setPaused = function(c) {
			this.paused = c;
			f._register(this, !c);
			return this;
		};
		f.prototype._cloneProps = function(g) {
			var e = {},
				h;
			for (h in g) {
				e[h] = g[h];
			}
			return e;
		};
		f.prototype._addStep = function(c) {
			0 < c.d && (this._steps.push(c), c.t = this.duration, this.duration += c.d);
			return this;
		};
		f.prototype._appendQueueProps = function(g) {
			var c, n, m, l, j, i;
			for (i in g) {
				if (void 0 === this._initQueueProps[i]) {
					n = this._target[i];
					if (c = f._plugins[i]) {
						for (m = 0, l = c.length; m < l; m++) {
							n = c[m].init(this, i, n);
						}
					}
					this._initQueueProps[i] = this._curQueueProps[i] = void 0 === n ? null : n;
				}
			}
			for (i in g) {
				n = this._curQueueProps[i];
				if (c = f._plugins[i]) {
					for (j = j || {}, m = 0, l = c.length; m < l; m++) {
						c[m].step && c[m].step(this, i, n, g[i], j);
					}
				}
				this._curQueueProps[i] = g[i];
			}
			j && this._appendQueueProps(j);
			return this._curQueueProps;
		};
		f.prototype._addAction = function(c) {
			c.t = this.duration;
			this._actions.push(c);
			return this;
		};
		f.prototype._set = function(g, e) {
			for (var h in g) {
				e[h] = g[h];
			}
		};
		f.prototype.wait = function(g, e) {
			if (null == g || 0 >= g) {
				return this;
			}
			var h = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: g,
				p0: h,
				p1: h,
				v: e
			});
		};
		f.prototype.to = function(g, e, h) {
			"undefined" === typeof h && (h = void 0);
			if (isNaN(e) || 0 > e) {
				e = 0;
			}
			return this._addStep({
				d: e || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: h,
				p1: this._cloneProps(this._appendQueueProps(g))
			});
		};
		f.prototype.call = function(g, e, h) {
			"undefined" === typeof e && (e = void 0);
			"undefined" === typeof h && (h = void 0);
			return this._addAction({
				f: g,
				p: h ? h : [this],
				o: e ? e : this._target
			});
		};
		f.prototype.set = function(e, c) {
			"undefined" === typeof c && (c = null);
			return this._addAction({
				f: this._set,
				o: this,
				p: [e, c ? c : this._target]
			});
		};
		f.prototype.play = function(c) {
			c || (c = this);
			return this.call(c.setPaused, [!1], c);
		};
		f.prototype.pause = function(c) {
			c || (c = this);
			return this.call(c.setPaused, [!0], c);
		};
		f.prototype.tick = function(c) {
			this.paused || this.setPosition(this._prevPosition + c);
		};
		f.NONE = 0;
		f.LOOP = 1;
		f.REVERSE = 2;
		f._tweens = [];
		f.IGNORE = {};
		f._plugins = {};
		f._inited = !1;
		return f;
	}(b.EventDispatcher);
	b.Tween = a;
	a.prototype.__class__ = "egret.Tween";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {
			b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316");
		}
		c.get = function(d) {
			-1 > d && (d = -1);
			1 < d && (d = 1);
			return function(e) {
				return 0 == d ? e : 0 > d ? e * (e * -d + 1 + d) : e * ((2 - e) * d + (1 - d));
			};
		};
		c.getPowIn = function(d) {
			return function(e) {
				return Math.pow(e, d);
			};
		};
		c.getPowOut = function(d) {
			return function(e) {
				return 1 - Math.pow(1 - e, d);
			};
		};
		c.getPowInOut = function(d) {
			return function(e) {
				return 1 > (e *= 2) ? 0.5 * Math.pow(e, d) : 1 - 0.5 * Math.abs(Math.pow(2 - e, d));
			};
		};
		c.sineIn = function(d) {
			return 1 - Math.cos(d * Math.PI / 2);
		};
		c.sineOut = function(d) {
			return Math.sin(d * Math.PI / 2);
		};
		c.sineInOut = function(d) {
			return -0.5 * (Math.cos(Math.PI * d) - 1);
		};
		c.getBackIn = function(d) {
			return function(e) {
				return e * e * ((d + 1) * e - d);
			};
		};
		c.getBackOut = function(d) {
			return function(e) {
				e -= 1;
				return e * e * ((d + 1) * e + d) + 1;
			};
		};
		c.getBackInOut = function(d) {
			d *= 1.525;
			return function(e) {
				return 1 > (e *= 2) ? 0.5 * e * e * ((d + 1) * e - d) : 0.5 * ((e -= 2) * e * ((d + 1) * e + d) + 2);
			};
		};
		c.circIn = function(d) {
			return -(Math.sqrt(1 - d * d) - 1);
		};
		c.circOut = function(d) {
			return Math.sqrt(1 - d * d);
		};
		c.circInOut = function(d) {
			return 1 > (d *= 2) ? -0.5 * (Math.sqrt(1 - d * d) - 1) : 0.5 * (Math.sqrt(1 - (d -= 2) * d) + 1);
		};
		c.bounceIn = function(d) {
			return 1 - c.bounceOut(1 - d);
		};
		c.bounceOut = function(d) {
			return d < 1 / 2.75 ? 7.5625 * d * d : d < 2 / 2.75 ? 7.5625 * (d -= 1.5 / 2.75) * d + 0.75 : d < 2.5 / 2.75 ? 7.5625 * (d -= 2.25 / 2.75) * d + 0.9375 : 7.5625 * (d -= 2.625 / 2.75) * d + 0.984375;
		};
		c.bounceInOut = function(d) {
			return 0.5 > d ? 0.5 * c.bounceIn(2 * d) : 0.5 * c.bounceOut(2 * d - 1) + 0.5;
		};
		c.getElasticIn = function(f, e) {
			var d = 2 * Math.PI;
			return function(h) {
				if (0 == h || 1 == h) {
					return h;
				}
				var g = e / d * Math.asin(1 / f);
				return -(f * Math.pow(2, 10 * (h -= 1)) * Math.sin((h - g) * d / e));
			};
		};
		c.getElasticOut = function(f, e) {
			var d = 2 * Math.PI;
			return function(h) {
				if (0 == h || 1 == h) {
					return h;
				}
				var g = e / d * Math.asin(1 / f);
				return f * Math.pow(2, -10 * h) * Math.sin((h - g) * d / e) + 1;
			};
		};
		c.getElasticInOut = function(f, e) {
			var d = 2 * Math.PI;
			return function(h) {
				var g = e / d * Math.asin(1 / f);
				return 1 > (h *= 2) ? -0.5 * f * Math.pow(2, 10 * (h -= 1)) * Math.sin((h - g) * d / e) : f * Math.pow(2, -10 * (h -= 1)) * Math.sin((h - g) * d / e) * 0.5 + 1;
			};
		};
		c.quadIn = c.getPowIn(2);
		c.quadOut = c.getPowOut(2);
		c.quadInOut = c.getPowInOut(2);
		c.cubicIn = c.getPowIn(3);
		c.cubicOut = c.getPowOut(3);
		c.cubicInOut = c.getPowInOut(3);
		c.quartIn = c.getPowIn(4);
		c.quartOut = c.getPowOut(4);
		c.quartInOut = c.getPowInOut(4);
		c.quintIn = c.getPowIn(5);
		c.quintOut = c.getPowOut(5);
		c.quintInOut = c.getPowInOut(5);
		c.backIn = c.getBackIn(1.7);
		c.backOut = c.getBackOut(1.7);
		c.backInOut = c.getBackInOut(1.7);
		c.elasticIn = c.getElasticIn(1, 0.3);
		c.elasticOut = c.getElasticOut(1, 0.3);
		c.elasticInOut = c.getElasticInOut(1, 0.3 * 1.5);
		return c;
	}();
	b.Ease = a;
	a.prototype.__class__ = "egret.Ease";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.prototype.play = function(e) {
			"undefined" === typeof e && (e = !1);
			var d = this.audio;
			d && (isNaN(d.duration) || (d.currentTime = 0), d.loop = e, d.play());
		};
		c.prototype.pause = function() {
			var d = this.audio;
			d && d.pause();
		};
		c.prototype.load = function() {
			var d = this.audio;
			d && d.load();
		};
		c.prototype.addEventListener = function(e, d) {
			this.audio && this.audio.addEventListener(e, d, !1);
		};
		c.prototype.removeEventListener = function(e, d) {
			this.audio && this.audio.removeEventListener(e, d, !1);
		};
		c.prototype.setVolume = function(e) {
			var d = this.audio;
			d && (d.volume = e);
		};
		c.prototype.getVolume = function() {
			return this.audio ? this.audio.volume : 0;
		};
		return c;
	}();
	b.Sound = a;
	a.prototype.__class__ = "egret.Sound";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f) {
				"undefined" === typeof f && (f = null);
				e.call(this);
				this._source = f ? f : [];
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "source", {
				get: function() {
					return this._source;
				},
				set: function(f) {
					f || (f = []);
					this._source = f;
					this.dispatchCoEvent(c.CollectionEventKind.RESET);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.refresh = function() {
				this.dispatchCoEvent(c.CollectionEventKind.REFRESH);
			};
			d.prototype.contains = function(f) {
				return -1 != this.getItemIndex(f);
			};
			d.prototype.checkIndex = function(f) {
				if (0 > f || f >= this._source.length) {
					throw new RangeError('\u7d22\u5f15:"' + f + '"\u8d85\u51fa\u96c6\u5408\u5143\u7d20\u7d22\u5f15\u8303\u56f4');
				}
			};
			Object.defineProperty(d.prototype, "length", {
				get: function() {
					return this._source.length;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.addItem = function(f) {
				this._source.push(f);
				this.dispatchCoEvent(c.CollectionEventKind.ADD, this._source.length - 1, -1, [f]);
			};
			d.prototype.addItemAt = function(f, g) {
				if (0 > g || g > this._source.length) {
					throw new RangeError('\u7d22\u5f15:"' + g + '"\u8d85\u51fa\u96c6\u5408\u5143\u7d20\u7d22\u5f15\u8303\u56f4');
				}
				this._source.splice(g, 0, f);
				this.dispatchCoEvent(c.CollectionEventKind.ADD, g, -1, [f]);
			};
			d.prototype.getItemAt = function(f) {
				return this._source[f];
			};
			d.prototype.getItemIndex = function(f) {
				for (var g = this._source.length, h = 0; h < g; h++) {
					if (this._source[h] === f) {
						return h;
					}
				}
				return -1;
			};
			d.prototype.itemUpdated = function(f) {
				var g = this.getItemIndex(f); - 1 != g && this.dispatchCoEvent(c.CollectionEventKind.UPDATE, g, -1, [f]);
			};
			d.prototype.removeAll = function() {
				var f = this._source.concat();
				this._source.length = 0;
				this.dispatchCoEvent(c.CollectionEventKind.REMOVE, 0, -1, f);
			};
			d.prototype.removeItemAt = function(f) {
				this.checkIndex(f);
				var g = this._source.splice(f, 1)[0];
				this.dispatchCoEvent(c.CollectionEventKind.REMOVE, f, -1, [g]);
				return g;
			};
			d.prototype.replaceItemAt = function(f, g) {
				this.checkIndex(g);
				var h = this._source.splice(g, 1, f)[0];
				this.dispatchCoEvent(c.CollectionEventKind.REPLACE, g, -1, [f], [h]);
				return h;
			};
			d.prototype.replaceAll = function(f) {
				f || (f = []);
				for (var g = f.length, i = this._source.length, h = g; h < i; h++) {
					this.removeItemAt(g);
				}
				for (h = 0; h < g; h++) {
					h >= i ? this.addItemAt(f[h], h) : this.replaceItemAt(f[h], h);
				}
				this._source = f;
			};
			d.prototype.moveItemAt = function(f, g) {
				this.checkIndex(f);
				this.checkIndex(g);
				var h = this._source.splice(f, 1)[0];
				this._source.splice(g, 0, h);
				this.dispatchCoEvent(c.CollectionEventKind.MOVE, g, f, [h]);
				return h;
			};
			d.prototype.dispatchCoEvent = function(g, h, k, j, i) {
				"undefined" === typeof g && (g = null);
				"undefined" === typeof h && (h = -1);
				"undefined" === typeof k && (k = -1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = null);
				c.CollectionEvent.dispatchCollectionEvent(this, c.CollectionEvent.COLLECTION_CHANGE, g, h, k, j, i);
			};
			return d;
		}(a.EventDispatcher);
		c.ArrayCollection = b;
		b.prototype.__class__ = "egret.gui.ArrayCollection";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f, g) {
				"undefined" === typeof f && (f = "children");
				"undefined" === typeof g && (g = "parent");
				e.call(this);
				this.nodeList = [];
				this._openNodes = [];
				this._showRoot = !1;
				this.childrenKey = f;
				this.parentKey = g;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "source", {
				get: function() {
					return this._source;
				},
				set: function(f) {
					this._source = f;
					this._openNodes = [];
					this.nodeList = [];
					this._source && (this._showRoot ? this.nodeList.push(this._source) : (this._openNodes = [this._source], this.addChildren(this._source, this.nodeList)));
					this.dispatchCoEvent(c.CollectionEventKind.RESET);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "openNodes", {
				get: function() {
					return this._openNodes.concat();
				},
				set: function(f) {
					this._openNodes = f ? f.concat() : [];
					this.refresh();
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "length", {
				get: function() {
					return this.nodeList.length;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getItemAt = function(f) {
				return this.nodeList[f];
			};
			d.prototype.getItemIndex = function(f) {
				for (var g = this.nodeList.length, h = 0; h < g; h++) {
					if (this.nodeList[h] === f) {
						return h;
					}
				}
				return -1;
			};
			d.prototype.itemUpdated = function(f) {
				var g = this.getItemIndex(f); - 1 != g && this.dispatchCoEvent(c.CollectionEventKind.UPDATE, g, -1, [f]);
			};
			d.prototype.removeItem = function(f) {
				this.isItemOpen(f) && this.closeNode(f);
				if (f) {
					var g = f[this.parentKey];
					if (g && (g = g[this.childrenKey])) {
						var h = g.indexOf(f); - 1 != h && g.splice(h, 1);
						f[this.parentKey] = null;
						h = this.nodeList.indexOf(f); - 1 != h && (this.nodeList.splice(h, 1), this.dispatchCoEvent(c.CollectionEventKind.REMOVE, h, -1, [f]));
					}
				}
			};
			Object.defineProperty(d.prototype, "showRoot", {
				get: function() {
					return this._showRoot;
				},
				set: function(f) {
					this._showRoot != f && (this._showRoot = f, this._source && (this._showRoot ? this.nodeList.splice(0, 0, this._source) : (this.nodeList.shift(), -1 == this.openNodes.indexOf(this._source) && this.openNodes.push(this._source)), this.refresh()));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.addChildren = function(g, h) {
				if (g.hasOwnProperty(this.childrenKey) && -1 != this._openNodes.indexOf(g)) {
					for (var l = g[this.childrenKey], k = l.length, j = 0; j < k; j++) {
						var i = l[j];
						h.push(i);
						this.addChildren(i, h);
					}
				}
			};
			d.prototype.hasChildren = function(f) {
				return f.hasOwnProperty(this.childrenKey) ? 0 < f[this.childrenKey].length : !1;
			};
			d.prototype.isItemOpen = function(f) {
				return -1 != this._openNodes.indexOf(f);
			};
			d.prototype.expandItem = function(f, g) {
				"undefined" === typeof g && (g = !0);
				g ? this.openNode(f) : this.closeNode(f);
			};
			d.prototype.openNode = function(g) {
				if (-1 == this._openNodes.indexOf(g)) {
					this._openNodes.push(g);
					var h = this.nodeList.indexOf(g);
					if (-1 != h) {
						var k = [];
						this.addChildren(g, k);
						for (var j = h; k.length;) {
							j++;
							var i = k.shift();
							this.nodeList.splice(j, 0, i);
							this.dispatchCoEvent(c.CollectionEventKind.ADD, j, -1, [i]);
						}
						this.dispatchCoEvent("open", h, h, [g]);
					}
				}
			};
			d.prototype.closeNode = function(f) {
				var g = this._openNodes.indexOf(f);
				if (-1 != g) {
					var i = [];
					this.addChildren(f, i);
					this._openNodes.splice(g, 1);
					g = this.nodeList.indexOf(f);
					if (-1 != g) {
						for (g++; i.length;) {
							var h = this.nodeList.splice(g, 1)[0];
							this.dispatchCoEvent(c.CollectionEventKind.REMOVE, g, -1, [h]);
							i.shift();
						}
						g--;
						this.dispatchCoEvent(c.CollectionEventKind.CLOSE, g, g, [f]);
					}
				}
			};
			d.prototype.getDepth = function(f) {
				var g = 0;
				for (f = f[this.parentKey]; f;) {
					g++, f = f[this.parentKey];
				}
				0 < g && !this._showRoot && g--;
				return g;
			};
			d.prototype.refresh = function() {
				this.nodeList = [];
				this._source && (this._showRoot && this.nodeList.push(this._source), this.addChildren(this._source, this.nodeList));
				this.dispatchCoEvent(c.CollectionEventKind.REFRESH);
			};
			d.prototype.dispatchCoEvent = function(g, h, k, j, i) {
				"undefined" === typeof g && (g = null);
				"undefined" === typeof h && (h = -1);
				"undefined" === typeof k && (k = -1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = null);
				c.CollectionEvent.dispatchCollectionEvent(this, c.CollectionEvent.COLLECTION_CHANGE, g, h, k, j, i);
			};
			d.assignParent = function(h, q, p) {
				"undefined" === typeof q && (q = "children");
				"undefined" === typeof p && (p = "parent");
				if (h.hasOwnProperty(q)) {
					for (var o = h[q], n = o.length, j = 0; j < n; j++) {
						var g = o[j];
						try {
							g[p] = h;
						} catch (i) {}
						d.assignParent(g, q, p);
					}
				}
			};
			return d;
		}(a.EventDispatcher);
		c.ObjectCollection = b;
		b.prototype.__class__ = "egret.gui.ObjectCollection";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.targetLevel = Number.MAX_VALUE;
				this.updateCompleteQueue = new c.DepthQueue;
				this.invalidateClientPropertiesFlag = this.invalidatePropertiesFlag = !1;
				this.invalidatePropertiesQueue = new c.DepthQueue;
				this.invalidateClientSizeFlag = this.invalidateSizeFlag = !1;
				this.invalidateSizeQueue = new c.DepthQueue;
				this.invalidateDisplayListFlag = !1;
				this.invalidateDisplayListQueue = new c.DepthQueue;
				this.listenersAttached = !1;
			}
			__extends(d, e);
			d.prototype.invalidateProperties = function(f) {
				this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.listenersAttached || this.attachListeners());
				this.targetLevel <= f.nestLevel && (this.invalidateClientPropertiesFlag = !0);
				this.invalidatePropertiesQueue.insert(f);
			};
			d.prototype.validateProperties = function() {
				for (var f = this.invalidatePropertiesQueue.shift(); f;) {
					f.parent && (f.validateProperties(), f.updateCompletePendingFlag || (this.updateCompleteQueue.insert(f), f.updateCompletePendingFlag = !0)), f = this.invalidatePropertiesQueue.shift();
				}
				this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1);
			};
			d.prototype.invalidateSize = function(f) {
				this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.listenersAttached || this.attachListeners());
				this.targetLevel <= f.nestLevel && (this.invalidateClientSizeFlag = !0);
				this.invalidateSizeQueue.insert(f);
			};
			d.prototype.validateSize = function() {
				for (var f = this.invalidateSizeQueue.pop(); f;) {
					f.parent && (f.validateSize(), f.updateCompletePendingFlag || (this.updateCompleteQueue.insert(f), f.updateCompletePendingFlag = !0)), f = this.invalidateSizeQueue.pop();
				}
				this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1);
			};
			d.prototype.invalidateDisplayList = function(f) {
				this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.listenersAttached || this.attachListeners());
				this.invalidateDisplayListQueue.insert(f);
			};
			d.prototype.validateDisplayList = function() {
				for (var f = this.invalidateDisplayListQueue.shift(); f;) {
					f.parent && (f.validateDisplayList(), f.updateCompletePendingFlag || (this.updateCompleteQueue.insert(f), f.updateCompletePendingFlag = !0)), f = this.invalidateDisplayListQueue.shift();
				}
				this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1);
			};
			d.prototype.attachListeners = function() {
				c.UIGlobals.stage.addEventListener(a.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
				c.UIGlobals.stage.addEventListener(a.Event.RENDER, this.doPhasedInstantiationCallBack, this);
				c.UIGlobals.stage.invalidate();
				this.listenersAttached = !0;
			};
			d.prototype.doPhasedInstantiationCallBack = function(f) {
				c.UIGlobals.stage.removeEventListener(a.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
				c.UIGlobals.stage.removeEventListener(a.Event.RENDER, this.doPhasedInstantiationCallBack, this);
				this.doPhasedInstantiation();
			};
			d.prototype.doPhasedInstantiation = function() {
				this.invalidatePropertiesFlag && this.validateProperties();
				this.invalidateSizeFlag && this.validateSize();
				this.invalidateDisplayListFlag && this.validateDisplayList();
				if (this.invalidatePropertiesFlag || this.invalidateSizeFlag || this.invalidateDisplayListFlag) {
					this.attachListeners();
				} else {
					this.listenersAttached = !1;
					for (var f = this.updateCompleteQueue.pop(); f;) {
						f.initialized || (f.initialized = !0), f.hasEventListener(c.UIEvent.UPDATE_COMPLETE) && c.UIEvent.dispatchUIEvent(f, c.UIEvent.UPDATE_COMPLETE), f.updateCompletePendingFlag = !1, f = this.updateCompleteQueue.pop();
					}
					c.UIEvent.dispatchUIEvent(this, c.UIEvent.UPDATE_COMPLETE);
				}
			};
			d.prototype.validateNow = function() {
				for (var f = 0; this.listenersAttached && 100 > f++;) {
					this.doPhasedInstantiationCallBack();
				}
			};
			d.prototype.validateClient = function(g, h) {
				"undefined" === typeof h && (h = !1);
				var k, j = !1,
					i = this.targetLevel;
				this.targetLevel == Number.MAX_VALUE && (this.targetLevel = g.nestLevel);
				for (; !j;) {
					j = !0;
					for (k = this.invalidatePropertiesQueue.removeSmallestChild(g); k;) {
						k.parent && (k.validateProperties(), k.updateCompletePendingFlag || (this.updateCompleteQueue.insert(k), k.updateCompletePendingFlag = !0)), k = this.invalidatePropertiesQueue.removeSmallestChild(g);
					}
					this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1);
					this.invalidateClientPropertiesFlag = !1;
					for (k = this.invalidateSizeQueue.removeLargestChild(g); k;) {
						k.parent && (k.validateSize(), k.updateCompletePendingFlag || (this.updateCompleteQueue.insert(k), k.updateCompletePendingFlag = !0));
						if (this.invalidateClientPropertiesFlag && (k = this.invalidatePropertiesQueue.removeSmallestChild(g))) {
							this.invalidatePropertiesQueue.insert(k);
							j = !1;
							break;
						}
						k = this.invalidateSizeQueue.removeLargestChild(g);
					}
					this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1);
					this.invalidateClientSizeFlag = this.invalidateClientPropertiesFlag = !1;
					if (!h) {
						for (k = this.invalidateDisplayListQueue.removeSmallestChild(g); k;) {
							k.parent && (k.validateDisplayList(), k.updateCompletePendingFlag || (this.updateCompleteQueue.insert(k), k.updateCompletePendingFlag = !0));
							if (this.invalidateClientPropertiesFlag && (k = this.invalidatePropertiesQueue.removeSmallestChild(g))) {
								this.invalidatePropertiesQueue.insert(k);
								j = !1;
								break;
							}
							if (this.invalidateClientSizeFlag && (k = this.invalidateSizeQueue.removeLargestChild(g))) {
								this.invalidateSizeQueue.insert(k);
								j = !1;
								break;
							}
							k = this.invalidateDisplayListQueue.removeSmallestChild(g);
						}
						this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1);
					}
				}
				if (i == Number.MAX_VALUE && (this.targetLevel = Number.MAX_VALUE, !h)) {
					for (k = this.updateCompleteQueue.removeLargestChild(g); k;) {
						k.initialized || (k.initialized = !0), k.hasEventListener(c.UIEvent.UPDATE_COMPLETE) && c.UIEvent.dispatchUIEvent(k, c.UIEvent.UPDATE_COMPLETE), k.updateCompletePendingFlag = !1, k = this.updateCompleteQueue.removeLargestChild(g);
					}
				}
			};
			return d;
		}(a.EventDispatcher);
		c.LayoutManager = b;
		b.prototype.__class__ = "egret.gui.LayoutManager";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(d) {
		var b = function() {
			function c() {
				this.depthBins = [];
				this.minDepth = 0;
				this.maxDepth = -1;
			}
			c.prototype.insert = function(f) {
				var h = f.nestLevel,
					j = f.hashCode;
				this.maxDepth < this.minDepth ? this.minDepth = this.maxDepth = h : (h < this.minDepth && (this.minDepth = h), h > this.maxDepth && (this.maxDepth = h));
				var i = this.depthBins[h];
				i ? null == i.items[j] && (i.items[j] = f, i.length++) : (i = new g, this.depthBins[h] = i, i.items[j] = f, i.length++);
			};
			c.prototype.pop = function() {
				var e = null;
				if (this.minDepth <= this.maxDepth) {
					for (var f = this.depthBins[this.maxDepth]; !f || 0 == f.length;) {
						this.maxDepth--;
						if (this.maxDepth < this.minDepth) {
							return null;
						}
						f = this.depthBins[this.maxDepth];
					}
					var i = f.items,
						h;
					for (h in i) {
						e = i[h];
						this.remove(e, this.maxDepth);
						break;
					}
					for (; !f || 0 == f.length;) {
						this.maxDepth--;
						if (this.maxDepth < this.minDepth) {
							break;
						}
						f = this.depthBins[this.maxDepth];
					}
				}
				return e;
			};
			c.prototype.shift = function() {
				var e = null;
				if (this.minDepth <= this.maxDepth) {
					for (var f = this.depthBins[this.minDepth]; !f || 0 == f.length;) {
						this.minDepth++;
						if (this.minDepth > this.maxDepth) {
							return null;
						}
						f = this.depthBins[this.minDepth];
					}
					var i = f.items,
						h;
					for (h in i) {
						e = i[h];
						this.remove(e, this.minDepth);
						break;
					}
					for (; !f || 0 == f.length;) {
						this.minDepth++;
						if (this.minDepth > this.maxDepth) {
							break;
						}
						f = this.depthBins[this.minDepth];
					}
				}
				return e;
			};
			c.prototype.removeLargestChild = function(i) {
				for (var j = this.maxDepth, p = i.nestLevel, o = i.hashCode; p <= j;) {
					var n = this.depthBins[j];
					if (n && 0 < n.length) {
						if (j == i.nestLevel) {
							if (n.items[o]) {
								return this.remove(i, j), i;
							}
						} else {
							var n = n.items,
								l;
							for (l in n) {
								var h = n[l];
								if (h instanceof a.DisplayObject && i instanceof a.DisplayObjectContainer && i.contains(h)) {
									return this.remove(h, j), h;
								}
							}
						}
						j--;
					} else {
						if (j == this.maxDepth && this.maxDepth--, j--, j < p) {
							break;
						}
					}
				}
				return null;
			};
			c.prototype.removeSmallestChild = function(h) {
				for (var i = h.nestLevel, n = h.hashCode; i <= this.maxDepth;) {
					var m = this.depthBins[i];
					if (m && 0 < m.length) {
						if (i == h.nestLevel) {
							if (m.items[n]) {
								return this.remove(h, i), h;
							}
						} else {
							var m = m.items,
								l;
							for (l in m) {
								var j = m[l];
								if (j instanceof a.DisplayObject && h instanceof a.DisplayObjectContainer && h.contains(j)) {
									return this.remove(j, i), j;
								}
							}
						}
						i++;
					} else {
						if (i == this.minDepth && this.minDepth++, i++, i > this.maxDepth) {
							break;
						}
					}
				}
				return null;
			};
			c.prototype.remove = function(e, f) {
				"undefined" === typeof f && (f = -1);
				var i = e.hashCode,
					h = this.depthBins[0 <= f ? f : e.nestLevel];
				return h && null != h.items[i] ? (delete h.items[i], h.length--, e) : null;
			};
			c.prototype.removeAll = function() {
				this.minDepth = this.depthBins.length = 0;
				this.maxDepth = -1;
			};
			c.prototype.isEmpty = function() {
				return this.minDepth > this.maxDepth;
			};
			return c;
		}();
		d.DepthQueue = b;
		b.prototype.__class__ = "egret.gui.DepthQueue";
		var g = function() {
			return function() {
				this.length = 0;
				this.items = [];
			};
		}();
		d.DepthBin = g;
		g.prototype.__class__ = "egret.gui.DepthBin";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			Object.defineProperty(d, "stage", {
				get: function() {
					return d._stage;
				},
				enumerable: !0,
				configurable: !0
			});
			d._initlize = function(e) {
				d.initlized || (d._stage = e, d._layoutManager = new c.LayoutManager, d.initlized = !0);
			};
			Object.defineProperty(d, "uiStage", {
				get: function() {
					return d._uiStage;
				},
				enumerable: !0,
				configurable: !0
			});
			d.initlized = !1;
			return d;
		}();
		c.UIGlobals = b;
		b.prototype.__class__ = "egret.gui.UIGlobals";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.initializeCalled = this._initialized = this._updateCompletePendingFlag = !1;
				this._nestLevel = 0;
				this._enabled = !0;
				this._minWidth = this._height = this._width = 0;
				this._maxWidth = 10000;
				this._minHeight = 0;
				this._maxHeight = 10000;
				this._measuredHeight = this._measuredWidth = 0;
				this._validateNowFlag = this._invalidateDisplayListFlag = this._invalidateSizeFlag = this._invalidatePropertiesFlag = !1;
				this._includeInLayout = !0;
				this._layoutHeightExplicitlySet = this._layoutWidthExplicitlySet = !1;
				this.touchEnabled = !0;
				this.addEventListener(a.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
				this.addEventListener(a.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this);
			}
			__extends(d, e);
			d.prototype.onAddedToStage = function(f) {
				this.removeEventListener(a.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
				this._initialize();
				c.UIGlobals._initlize(this.stage);
				0 < this._nestLevel && this.checkInvalidateFlag();
			};
			Object.defineProperty(d.prototype, "id", {
				get: function() {
					return this._id;
				},
				set: function(f) {
					this._id = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "isPopUp", {
				get: function() {
					return this._isPopUp;
				},
				set: function(f) {
					this._isPopUp = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "owner", {
				get: function() {
					return this._owner ? this._owner : this.parent;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.ownerChanged = function(f) {
				this._owner = f;
			};
			Object.defineProperty(d.prototype, "updateCompletePendingFlag", {
				get: function() {
					return this._updateCompletePendingFlag;
				},
				set: function(f) {
					this._updateCompletePendingFlag = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "initialized", {
				get: function() {
					return this._initialized;
				},
				set: function(f) {
					this._initialized != f && (this._initialized = f) && c.UIEvent.dispatchUIEvent(this, c.UIEvent.CREATION_COMPLETE);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._initialize = function() {
				this.initializeCalled || (c.UIGlobals.stage && this.removeEventListener(a.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this.initializeCalled = !0, c.UIEvent.dispatchUIEvent(this, c.UIEvent.INITIALIZE), this.createChildren(), this.childrenCreated());
			};
			d.prototype.createChildren = function() {};
			d.prototype.childrenCreated = function() {
				this.invalidateProperties();
				this.invalidateSize();
				this.invalidateDisplayList();
			};
			Object.defineProperty(d.prototype, "nestLevel", {
				get: function() {
					return this._nestLevel;
				},
				set: function(f) {
					if (this._nestLevel != f) {
						for (this._nestLevel = f, 0 == this._nestLevel ? this.addEventListener(a.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this) : this.removeEventListener(a.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this), f = this.numChildren - 1; 0 <= f; f--) {
							var g = this.getChildAt(f);
							null != g && (g.nestLevel = this._nestLevel + 1);
						}
					}
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._addToDisplayList = function(f, g) {
				"undefined" === typeof g && (g = !0);
				var h = this.numChildren;
				f.parent == this && h--;
				this._addingChild(f);
				this._doAddChild(f, h, g);
				this._childAdded(f);
				return f;
			};
			d.prototype._addToDisplayListAt = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				this._addingChild(f);
				this._doAddChild(f, g, h);
				this._childAdded(f);
				return f;
			};
			d.prototype._removeFromDisplayList = function(f, g) {
				"undefined" === typeof g && (g = !0);
				var h = this._children.indexOf(f);
				if (0 <= h) {
					return this._doRemoveChild(h, g), this._childRemoved(f), f;
				}
				a.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
				return null;
			};
			d.prototype._removeFromDisplayListAt = function(f, g) {
				"undefined" === typeof g && (g = !0);
				if (0 <= f && f < this._children.length) {
					var h = this._doRemoveChild(f, g);
					this._childRemoved(h);
					return h;
				}
				a.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
				return null;
			};
			d.prototype.addChild = function(f) {
				this._addingChild(f);
				e.prototype.addChild.call(this, f);
				this._childAdded(f);
				return f;
			};
			d.prototype.addChildAt = function(f, g) {
				this._addingChild(f);
				e.prototype.addChildAt.call(this, f, g);
				this._childAdded(f);
				return f;
			};
			d.prototype._addingChild = function(f) {
				f && "nestLevel" in f && (f.nestLevel = this._nestLevel + 1);
			};
			d.prototype._childAdded = function(f) {
				f instanceof d && (f._initialize(), f.checkInvalidateFlag());
			};
			d.prototype.removeChild = function(f) {
				e.prototype.removeChild.call(this, f);
				this._childRemoved(f);
				return f;
			};
			d.prototype.removeChildAt = function(f) {
				f = e.prototype.removeChildAt.call(this, f);
				this._childRemoved(f);
				return f;
			};
			d.prototype._childRemoved = function(f) {
				f && "nestLevel" in f && (f.nestLevel = 0);
			};
			d.prototype.checkInvalidateFlag = function(f) {
				c.UIGlobals._layoutManager && (this._invalidatePropertiesFlag && c.UIGlobals._layoutManager.invalidateProperties(this), this._invalidateSizeFlag && c.UIGlobals._layoutManager.invalidateSize(this), this._invalidateDisplayListFlag && c.UIGlobals._layoutManager.invalidateDisplayList(this), this._validateNowFlag && (c.UIGlobals._layoutManager.validateClient(this), this._validateNowFlag = !1));
			};
			Object.defineProperty(d.prototype, "enabled", {
				get: function() {
					return this._enabled;
				},
				set: function(f) {
					this._enabled = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setWidth = function(f) {
				if (this._width != f || this._explicitWidth != f) {
					e.prototype._setWidth.call(this, f), isNaN(f) ? this.invalidateSize() : this._width = f, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList();
				}
			};
			Object.defineProperty(d.prototype, "width", {
				get: function() {
					return this._width;
				},
				set: function(f) {
					this._setWidth(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setHeight = function(f) {
				if (this._height != f || this._explicitHeight != f) {
					e.prototype._setHeight.call(this, f), isNaN(f) ? this.invalidateSize() : this._height = f, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList();
				}
			};
			Object.defineProperty(d.prototype, "height", {
				get: function() {
					return this._height;
				},
				set: function(f) {
					this._setHeight(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "scaleX", {
				get: function() {
					return this._scaleX;
				},
				set: function(f) {
					this._setScaleX(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setScaleX = function(f) {
				this._scaleX != f && (this._scaleX = f, this.invalidateParentSizeAndDisplayList());
			};
			Object.defineProperty(d.prototype, "scaleY", {
				get: function() {
					return this._scaleY;
				},
				set: function(f) {
					this._setScaleY(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setScaleY = function(f) {
				this._scaleY != f && (this._scaleY = f, this.invalidateParentSizeAndDisplayList());
			};
			Object.defineProperty(d.prototype, "minWidth", {
				get: function() {
					return this._minWidth;
				},
				set: function(f) {
					this._minWidth != f && (this._minWidth = f, this.invalidateSize());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "maxWidth", {
				get: function() {
					return this._maxWidth;
				},
				set: function(f) {
					this._maxWidth != f && (this._maxWidth = f, this.invalidateSize());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "minHeight", {
				get: function() {
					return this._minHeight;
				},
				set: function(f) {
					this._minHeight != f && (this._minHeight = f, this.invalidateSize());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "maxHeight", {
				get: function() {
					return this._maxHeight;
				},
				set: function(f) {
					this._maxHeight != f && (this._maxHeight = f, this.invalidateSize());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "measuredWidth", {
				get: function() {
					return this._measuredWidth;
				},
				set: function(f) {
					this._measuredWidth = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "measuredHeight", {
				get: function() {
					return this._measuredHeight;
				},
				set: function(f) {
					this._measuredHeight = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setActualSize = function(f, g) {
				var h = !1;
				this._width != f && (this._width = f, h = !0);
				this._height != g && (this._height = g, h = !0);
				h && (this.invalidateDisplayList(), this.dispatchResizeEvent());
			};
			Object.defineProperty(d.prototype, "x", {
				get: function() {
					return this._x;
				},
				set: function(f) {
					this._x != f && (this._x = f, this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof d && this.parent._childXYChanged());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "y", {
				get: function() {
					return this._y;
				},
				set: function(f) {
					this._y != f && (this._y = f, this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof d && this.parent._childXYChanged());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.invalidateProperties = function() {
				this._invalidatePropertiesFlag || (this._invalidatePropertiesFlag = !0, this.parent && c.UIGlobals._layoutManager && c.UIGlobals._layoutManager.invalidateProperties(this));
			};
			d.prototype.validateProperties = function() {
				this._invalidatePropertiesFlag && (this.commitProperties(), this._invalidatePropertiesFlag = !1);
			};
			d.prototype.invalidateSize = function() {
				this._invalidateSizeFlag || (this._invalidateSizeFlag = !0, this.parent && c.UIGlobals._layoutManager && c.UIGlobals._layoutManager.invalidateSize(this));
			};
			d.prototype.validateSize = function(f) {
				"undefined" === typeof f && (f = !1);
				if (f) {
					for (f = 0; f < this.numChildren; f++) {
						var g = this.getChildAt(f);
						"validateSize" in g && g.validateSize(!0);
					}
				}
				this._invalidateSizeFlag && (this.measureSizes() && (this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()), this._invalidateSizeFlag = !1);
			};
			d.prototype.measureSizes = function() {
				var f = !1;
				if (!this._invalidateSizeFlag) {
					return f;
				}
				this.canSkipMeasurement() || (this.measure(), this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth), this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth), this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight), this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight));
				if (isNaN(this._oldPreferWidth)) {
					this._oldPreferWidth = this.preferredWidth, this._oldPreferHeight = this.preferredHeight, f = !0;
				} else {
					if (this.preferredWidth != this._oldPreferWidth || this.preferredHeight != this._oldPreferHeight) {
						f = !0;
					}
					this._oldPreferWidth = this.preferredWidth;
					this._oldPreferHeight = this.preferredHeight;
				}
				return f;
			};
			d.prototype.invalidateDisplayList = function() {
				this._invalidateDisplayListFlag || (this._invalidateDisplayListFlag = !0, this.parent && c.UIGlobals._layoutManager && c.UIGlobals._layoutManager.invalidateDisplayList(this));
			};
			d.prototype.validateDisplayList = function() {
				if (this._invalidateDisplayListFlag) {
					var f = 0,
						g = 0,
						f = this._layoutWidthExplicitlySet ? this._width : isNaN(this.explicitWidth) ? this.measuredWidth : this._explicitWidth,
						g = this._layoutHeightExplicitlySet ? this._height : isNaN(this.explicitHeight) ? this.measuredHeight : this._explicitHeight;
					isNaN(f) && (f = 0);
					isNaN(g) && (g = 0);
					this.setActualSize(f, g);
					this.updateDisplayList(f, g);
					this._invalidateDisplayListFlag = !1;
				}
			};
			d.prototype.validateNow = function(f) {
				"undefined" === typeof f && (f = !1);
				this._validateNowFlag || null == c.UIGlobals._layoutManager ? this._validateNowFlag = !0 : c.UIGlobals._layoutManager.validateClient(this, f);
			};
			d.prototype.invalidateParentSizeAndDisplayList = function() {
				if (this.parent && this._includeInLayout && "invalidateSize" in this.parent) {
					var f = this.parent;
					f.invalidateSize();
					f.invalidateDisplayList();
				}
			};
			d.prototype.updateDisplayList = function(f, g) {};
			d.prototype.canSkipMeasurement = function() {
				return !isNaN(this._explicitWidth) && !isNaN(this._explicitHeight);
			};
			d.prototype.commitProperties = function() {
				this.oldWidth == this._width && this.oldHeight == this._height || this.dispatchResizeEvent();
				this.oldX == this.x && this.oldY == this.y || this.dispatchMoveEvent();
			};
			d.prototype.measure = function() {
				this._measuredWidth = this._measuredHeight = 0;
			};
			d.prototype.dispatchMoveEvent = function() {
				this.hasEventListener(c.MoveEvent.MOVE) && c.MoveEvent.dispatchMoveEvent(this, this.oldX, this.oldY);
				this.oldX = this.x;
				this.oldY = this.y;
			};
			d.prototype._childXYChanged = function() {};
			d.prototype.dispatchResizeEvent = function() {
				this.hasEventListener(c.ResizeEvent.RESIZE) && c.ResizeEvent.dispatchResizeEvent(this, this.oldWidth, this.oldHeight);
				this.oldWidth = this._width;
				this.oldHeight = this._height;
			};
			Object.defineProperty(d.prototype, "includeInLayout", {
				get: function() {
					return this._includeInLayout;
				},
				set: function(f) {
					this._includeInLayout != f && (this._includeInLayout = !0, this.invalidateParentSizeAndDisplayList(), this._includeInLayout = f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "left", {
				get: function() {
					return this._left;
				},
				set: function(f) {
					this._left != f && (this._left = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "right", {
				get: function() {
					return this._right;
				},
				set: function(f) {
					this._right != f && (this._right = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "top", {
				get: function() {
					return this._top;
				},
				set: function(f) {
					this._top != f && (this._top = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "bottom", {
				get: function() {
					return this._bottom;
				},
				set: function(f) {
					this._bottom != f && (this._bottom = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "horizontalCenter", {
				get: function() {
					return this._horizontalCenter;
				},
				set: function(f) {
					this._horizontalCenter != f && (this._horizontalCenter = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "verticalCenter", {
				get: function() {
					return this._verticalCenter;
				},
				set: function(f) {
					this._verticalCenter != f && (this._verticalCenter = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "percentWidth", {
				get: function() {
					return this._percentWidth;
				},
				set: function(f) {
					this._percentWidth != f && (this._percentWidth = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "percentHeight", {
				get: function() {
					return this._percentHeight;
				},
				set: function(f) {
					this._percentHeight != f && (this._percentHeight = f, this.invalidateParentSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setLayoutBoundsSize = function(f, g) {
				isNaN(f) ? (this._layoutWidthExplicitlySet = !1, f = this.preferredWidth) : this._layoutWidthExplicitlySet = !0;
				isNaN(g) ? (this._layoutHeightExplicitlySet = !1, g = this.preferredHeight) : this._layoutHeightExplicitlySet = !0;
				this.setActualSize(f / this._scaleX, g / this._scaleY);
			};
			d.prototype.setLayoutBoundsPosition = function(f, g) {
				0 > this._scaleX && (f += this.layoutBoundsWidth);
				0 > this._scaleY && (g += this.layoutBoundsHeight);
				var h = !1;
				this._x != f && (this._x = f, h = !0);
				this._y != g && (this._y = g, h = !0);
				h && this.dispatchMoveEvent();
			};
			Object.defineProperty(d.prototype, "preferredWidth", {
				get: function() {
					var f = this._hasWidthSet ? this._explicitWidth : this._measuredWidth,
						g = this._scaleX;
					0 > g && (g = -g);
					return f * g;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "preferredHeight", {
				get: function() {
					var f = this._hasHeightSet ? this._explicitHeight : this._measuredHeight,
						g = this._scaleY;
					0 > g && (g = -g);
					return f * g;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "preferredX", {
				get: function() {
					return 0 <= this._scaleX ? this._x : this._x - this.preferredWidth;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "preferredY", {
				get: function() {
					return 0 <= this._scaleY ? this._y : this._y - this.preferredHeight;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "layoutBoundsX", {
				get: function() {
					return 0 <= this._scaleX ? this._x : this._x - this.layoutBoundsWidth;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "layoutBoundsY", {
				get: function() {
					return 0 <= this._scaleY ? this._y : this._y - this.layoutBoundsHeight;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "layoutBoundsWidth", {
				get: function() {
					var f = 0,
						f = this._layoutWidthExplicitlySet ? this._width : this._hasWidthSet ? this._explicitWidth : this._measuredWidth,
						g = this._scaleX;
					0 > g && (g = -g);
					return f * g;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "layoutBoundsHeight", {
				get: function() {
					var f = 0,
						f = this._layoutHeightExplicitlySet ? this._height : this._hasHeightSet ? this._explicitHeight : this._measuredHeight,
						g = this.scaleY;
					0 > g && (g = -g);
					return f * g;
				},
				enumerable: !0,
				configurable: !0
			});
			return d;
		}(a.DisplayObjectContainer);
		c.UIComponent = b;
		b.prototype.__class__ = "egret.gui.UIComponent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.ABOVE = "above";
			d.BELOW = "below";
			d.CENTER = "center";
			d.TOP_LEFT = "topLeft";
			d.LEFT = "left";
			d.RIGHT = "right";
			return d;
		}();
		c.PopUpPosition = b;
		b.prototype.__class__ = "egret.gui.PopUpPosition";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.AUTO = "auto";
			d.OFF = "off";
			d.ON = "on";
			return d;
		}();
		c.ScrollPolicy = b;
		b.prototype.__class__ = "egret.gui.ScrollPolicy";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f) {
				"undefined" === typeof f && (f = null);
				e.call(this);
				this.generator = f;
			}
			__extends(d, e);
			d.prototype.newInstance = function() {
				return new this.generator;
			};
			return d;
		}(a.HashObject);
		c.ClassFactory = b;
		b.prototype.__class__ = "egret.gui.ClassFactory";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
			}
			__extends(d, e);
			d.prototype.initialize = function(f) {};
			d.prototype.apply = function(f) {};
			d.prototype.remove = function(f) {};
			d.prototype.initializeFromObject = function(f) {
				for (var g in f) {
					this[g] = f[g];
				}
				return this;
			};
			return d;
		}(a.HashObject);
		c.OverrideBase = b;
		b.prototype.__class__ = "egret.gui.OverrideBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, j, i, h) {
				e.call(this);
				this.propertyName = "";
				this.position = d.LAST;
				this.target = g;
				this.propertyName = j;
				this.position = i;
				this.relativeTo = h;
			}
			__extends(d, e);
			d.prototype.initialize = function(f) {
				if ((f = f[this.target]) && !(f instanceof c.SkinnableComponent) && "_initialize" in f) {
					try {
						f._initialize();
					} catch (g) {}
				}
			};
			d.prototype.apply = function(g) {
				var k, j;
				try {
					j = g[this.relativeTo];
				} catch (i) {}
				var h = g[this.target];
				g = this.propertyName ? g[this.propertyName] : g;
				if (h && g) {
					switch (this.position) {
						case d.FIRST:
							k = 0;
							break;
						case d.LAST:
							k = -1;
							break;
						case d.BEFORE:
							k = g.getElementIndex(j);
							break;
						case d.AFTER:
							k = g.getElementIndex(j) + 1;
					} - 1 == k && (k = g.numElements);
					g.addElementAt(h, k);
				}
			};
			d.prototype.remove = function(f) {
				var g = null == this.propertyName || "" == this.propertyName ? f : f[this.propertyName];
				(f = f[this.target]) && g && -1 != g.getElementIndex(f) && g.removeElement(f);
			};
			d.FIRST = "first";
			d.LAST = "last";
			d.BEFORE = "before";
			d.AFTER = "after";
			return d;
		}(c.OverrideBase);
		c.AddItems = b;
		b.prototype.__class__ = "egret.gui.AddItems";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f, g, h) {
				e.call(this);
				this.target = f;
				this.name = g;
				this.value = h;
			}
			__extends(d, e);
			d.prototype.apply = function(f) {
				f = null == this.target || "" == this.target ? f : f[this.target];
				null != f && (this.oldValue = f[this.name], this.setPropertyValue(f, this.name, this.value, this.oldValue));
			};
			d.prototype.remove = function(f) {
				f = null == this.target || "" == this.target ? f : f[this.target];
				null != f && (this.setPropertyValue(f, this.name, this.oldValue, this.oldValue), this.oldValue = null);
			};
			d.prototype.setPropertyValue = function(f, g, i, h) {
				f[g] = void 0 === i || null === i ? i : "boolean" == typeof h ? this.toBoolean(i) : i;
			};
			d.prototype.toBoolean = function(f) {
				return "string" == typeof f ? "true" == f.toLowerCase() : !1 != f;
			};
			return d;
		}(c.OverrideBase);
		c.SetProperty = b;
		b.prototype.__class__ = "egret.gui.SetProperty";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f, g) {
				e.call(this);
				this.initialized = !1;
				this.name = f;
				this.overrides = g;
			}
			__extends(d, e);
			d.prototype.initialize = function(f) {
				if (!this.initialized) {
					this.initialized = !0;
					for (var g = 0; g < this.overrides.length; g++) {
						this.overrides[g].initialize(f);
					}
				}
			};
			return d;
		}(a.HashObject);
		c.State = b;
		b.prototype.__class__ = "egret.gui.State";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.adjustRelativeByXY = function(i, h) {
				"undefined" === typeof h && (h = null);
				if (i && (h || (h = i.parent), h)) {
					var p = i.x,
						o = i.y,
						n = i.layoutBoundsHeight,
						l = i.layoutBoundsWidth,
						j = h.width,
						g = h.height;
					isNaN(i.left) || (i.left = p);
					isNaN(i.right) || (i.right = j - p - l);
					isNaN(i.horizontalCenter) || (i.horizontalCenter = p + 0.5 * l - 0.5 * j);
					isNaN(i.top) || (i.top = o);
					isNaN(i.bottom) || (i.bottom = g - o - n);
					isNaN(i.verticalCenter) || (i.verticalCenter = 0.5 * n - 0.5 * g + o);
				}
			};
			return d;
		}();
		c.LayoutUtil = b;
		b.prototype.__class__ = "egret.gui.LayoutUtil";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = {};
		c.getScale9Grid = function(e) {
			if (b[e]) {
				return b[e];
			}
			if (!e) {
				return null;
			}
			var d = e.split(","),
				d = new a.Rectangle(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]));
			return b[e] = d;
		};
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f, g) {
				"undefined" === typeof g && (g = !0);
				e.call(this);
				this.fillMode = "scale";
				this.contentReused = this.createChildrenCalled = this.sourceChanged = !1;
				this.autoScale = !0;
				this.touchChildren = !1;
				f && (this.source = f);
				this.autoScale = g;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "source", {
				get: function() {
					return this._source;
				},
				set: function(f) {
					this._source != f && (this._source = f, this.createChildrenCalled ? this.parseSource() : this.sourceChanged = !0);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "content", {
				get: function() {
					return this._content;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.createChildren = function() {
				e.prototype.createChildren.call(this);
				this.sourceChanged && this.parseSource();
				this.createChildrenCalled = !0;
			};
			d.prototype.parseSource = function() {
				this.sourceChanged = !1;
				var f = d.assetAdapter;
				f || (f = this.getAdapter());
				if (this._source) {
					var g = this.contentReused ? null : this._content;
					this.contentReused = !0;
					f.getAsset(this._source, this.contentChanged, this, g);
				} else {
					this.contentChanged(null, null);
				}
			};
			d.prototype.getAdapter = function() {
				var f;
				try {
					f = a.Injector.getInstance("egret.gui.IAssetAdapter");
				} catch (g) {
					f = new c.DefaultAssetAdapter;
				}
				return d.assetAdapter = f;
			};
			d.prototype.contentChanged = function(f, g) {
				if (g === this._source) {
					var h = this._content;
					this._content = f;
					h !== f && (h instanceof a.DisplayObject && this._removeFromDisplayList(h), f instanceof a.DisplayObject && this._addToDisplayListAt(f, 0));
					this.invalidateSize();
					this.invalidateDisplayList();
					this.contentReused = !1;
					this.hasEventListener(c.UIEvent.CONTENT_CHANGED) && c.UIEvent.dispatchUIEvent(this, c.UIEvent.CONTENT_CHANGED);
				}
			};
			d.prototype.measure = function() {
				e.prototype.measure.call(this);
				var f = this._content;
				f instanceof a.DisplayObject ? "preferredWidth" in f ? (this.measuredWidth = f.preferredWidth, this.measuredHeight = f.preferredHeight) : (this.measuredWidth = f.width * f.scaleX, this.measuredHeight = f.height * f.scaleY) : f instanceof a.Texture && (this.measuredWidth = f._textureWidth, this.measuredHeight = f._textureHeight);
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				var h = this._content;
				this.autoScale && h instanceof a.DisplayObject && ("setLayoutBoundsSize" in h ? h.setLayoutBoundsSize(f, g) : (h.width = f / h.scaleX, h.height = g / h.scaleY));
			};
			d.prototype._render = function(f) {
				if (this._content instanceof a.Texture) {
					var g = this._content;
					this._texture_to_render = g;
					var h;
					this.autoScale ? (h = this._width, g = this._height) : (h = g.textureWidth, g = g.textureHeight);
					a.Bitmap._drawBitmap(f, h, g, this);
				} else {
					this._texture_to_render = null;
				}
				e.prototype._render.call(this, f);
			};
			d.prototype._measureBounds = function() {
				var g = e.prototype._measureBounds.call(this);
				if (this._content instanceof a.Texture) {
					var i = this._content,
						l = this.width,
						k = this.height,
						j = Math.floor(i._offsetX * l / i._textureWidth),
						i = Math.floor(i._offsetY * k / i._textureHeight);
					j < g.x && (g.x = j);
					i < g.y && (g.y = i);
					j + l > g.right && (g.right = j + l);
					i + k > g.bottom && (g.bottom = i + k);
				}
				return g;
			};
			d.prototype.addChild = function(f) {
				throw Error("addChild()" + d.errorStr + "addElement()\u4ee3\u66ff");
			};
			d.prototype.addChildAt = function(f, g) {
				throw Error("addChildAt()" + d.errorStr + "addElementAt()\u4ee3\u66ff");
			};
			d.prototype.removeChild = function(f) {
				throw Error("removeChild()" + d.errorStr + "removeElement()\u4ee3\u66ff");
			};
			d.prototype.removeChildAt = function(f) {
				throw Error("removeChildAt()" + d.errorStr + "removeElementAt()\u4ee3\u66ff");
			};
			d.prototype.setChildIndex = function(f, g) {
				throw Error("setChildIndex()" + d.errorStr + "setElementIndex()\u4ee3\u66ff");
			};
			d.prototype.swapChildren = function(f, g) {
				throw Error("swapChildren()" + d.errorStr + "swapElements()\u4ee3\u66ff");
			};
			d.prototype.swapChildrenAt = function(f, g) {
				throw Error("swapChildrenAt()" + d.errorStr + "swapElementsAt()\u4ee3\u66ff");
			};
			d.errorStr = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
			return d;
		}(c.UIComponent);
		c.UIAsset = b;
		b.prototype.__class__ = "egret.gui.UIAsset";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.SkinnableComponent";
				this.stateIsDirty = this.createChildrenCalled = this._skinNameExplicitlySet = !1;
				this.explicitMouseEnabled = this.explicitMouseChildren = this._autoMouseEnabled = !0;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "skinName", {
				get: function() {
					return this._skinName;
				},
				set: function(f) {
					this._skinName != f && (this._skinName = f, this._skinNameExplicitlySet = !0, this.createChildrenCalled && this.parseSkinName());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "skin", {
				get: function() {
					return this._skin;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.createChildren = function() {
				e.prototype.createChildren.call(this);
				this.parseSkinName();
				this.createChildrenCalled = !0;
			};
			d.prototype.parseSkinName = function() {
				var f = d.skinAdapter;
				f || (f = this.getSkinAdapter());
				var f = f.getSkin(this._skinName, this.hostComponentKey),
					g = this._skin;
				this.detachSkin(g);
				g instanceof a.DisplayObject && this._removeFromDisplayList(g);
				this._skin = f;
				f instanceof a.DisplayObject && this._addToDisplayListAt(this._skin, 0);
				this.attachSkin(f);
				this.invalidateSkinState();
				this.invalidateSize();
				this.invalidateDisplayList();
				this.hasEventListener(c.UIEvent.SKIN_CHANGED) && c.UIEvent.dispatchUIEvent(this, c.UIEvent.SKIN_CHANGED);
			};
			d.prototype.getSkinAdapter = function() {
				var f;
				try {
					f = a.Injector.getInstance("egret.gui.ISkinAdapter");
				} catch (g) {
					f = new c.DefaultSkinAdapter;
				}
				return d.skinAdapter = f;
			};
			d.prototype.attachSkin = function(f) {
				f && "hostComponent" in f && (f.hostComponent = this, this.findSkinParts());
				f && "hostComponent" in f && f instanceof a.DisplayObject ? this._setSkinLayoutEnabled(!1) : this._setSkinLayoutEnabled(!0);
			};
			d.prototype.findSkinParts = function() {
				var g = this._skin;
				if (g && "skinParts" in g) {
					for (var h = g.skinParts, l = h.length, k = 0; k < l; k++) {
						var j = h[k];
						if (j in g) {
							try {
								this[j] = g[j], this.partAdded(j, g[j]);
							} catch (i) {}
						}
					}
				}
			};
			d.prototype.detachSkin = function(f) {
				if (f && "skinParts" in f) {
					for (var g = f.skinParts, j = g.length, i = 0; i < j; i++) {
						var h = g[i];
						h in this && (null != this[h] && this.partRemoved(h, this[h]), this[h] = null);
					}
					f.hostComponent = null;
				}
			};
			d.prototype.partAdded = function(f, g) {
				c.SkinPartEvent.dispatchSkinPartEvent(this, c.SkinPartEvent.PART_ADDED, f, g);
			};
			d.prototype.partRemoved = function(f, g) {
				c.SkinPartEvent.dispatchSkinPartEvent(this, c.SkinPartEvent.PART_REMOVED, f, g);
			};
			d.prototype.invalidateSkinState = function() {
				this.stateIsDirty || (this.stateIsDirty = !0, this.invalidateProperties());
			};
			d.prototype.validateSkinState = function() {
				var f = this.getCurrentSkinState(),
					g = this._skin;
				g && "currentState" in g && (g.currentState = f);
				this.hasEventListener("stateChanged") && this.dispatchEventWith("stateChanged");
			};
			Object.defineProperty(d.prototype, "autoTouchEnabled", {
				get: function() {
					return this._autoMouseEnabled;
				},
				set: function(f) {
					this._autoMouseEnabled != f && ((this._autoMouseEnabled = f) ? (this._touchChildren = this.enabled ? this.explicitMouseChildren : !1, this._touchEnabled = this.enabled ? this.explicitMouseEnabled : !1) : (this._touchChildren = this.explicitMouseChildren, this._touchEnabled = this.explicitMouseEnabled));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "touchChildren", {
				get: function() {
					return this._touchChildren;
				},
				set: function(f) {
					this.enabled && (this._touchChildren = f);
					this.explicitMouseChildren = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "touchEnabled", {
				get: function() {
					return this._touchEnabled;
				},
				set: function(f) {
					this.enabled && (this._touchEnabled = f);
					this.explicitMouseEnabled = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "enabled", {
				get: function() {
					return this._enabled;
				},
				set: function(f) {
					this._setEnabled(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setEnabled = function(f) {
				this._enabled != f && (this._enabled = f, this._autoMouseEnabled && (this._touchChildren = f ? this.explicitMouseChildren : !1, this._touchEnabled = f ? this.explicitMouseEnabled : !1), this.invalidateSkinState());
			};
			d.prototype.getCurrentSkinState = function() {
				return this.enabled ? "normal" : "disabled";
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this.stateIsDirty && (this.stateIsDirty = !1, this.validateSkinState());
			};
			d.prototype._setSkinLayoutEnabled = function(f) {
				null != this.skinLayout != f && (f ? (this.skinLayout = new c.SkinBasicLayout, this.skinLayout.target = this) : this.skinLayout = this.skinLayout.target = null, this.invalidateSize(), this.invalidateDisplayList());
			};
			d.prototype._childXYChanged = function() {
				this.skinLayout && (this.invalidateSize(), this.invalidateDisplayList());
			};
			d.prototype.measure = function() {
				e.prototype.measure.call(this);
				var g = this._skin;
				if (g) {
					var h = g instanceof a.DisplayObject;
					h && (g && "preferredWidth" in g ? (this.measuredWidth = g.preferredWidth, this.measuredHeight = g.preferredHeight) : (this.measuredWidth = g.width, this.measuredHeight = g.height));
					this.skinLayout && this.skinLayout.measure();
					if (!h) {
						var h = this.measuredWidth,
							j = this.measuredHeight;
						try {
							isNaN(g.width) || (h = Math.ceil(g.width)), isNaN(g.height) || (j = Math.ceil(g.height)), g.hasOwnProperty("minWidth") && h < g.minWidth && (h = g.minWidth), g.hasOwnProperty("maxWidth") && h > g.maxWidth && (h = g.maxWidth), g.hasOwnProperty("minHeight") && j < g.minHeight && (j = g.minHeight), g.hasOwnProperty("maxHeight") && j > g.maxHeight && (j = g.maxHeight), this.measuredWidth = h, this.measuredHeight = j;
						} catch (i) {}
					}
				}
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				var h = this._skin;
				h && ("setLayoutBoundsSize" in h ? h.setLayoutBoundsSize(f, g) : h instanceof a.DisplayObject && (h.scaleX = 0 == h.width ? 1 : f / h.width, h.scaleY = 0 == h.height ? 1 : g / h.height));
				this.skinLayout && this.skinLayout.updateDisplayList(f, g);
			};
			d.prototype.addChild = function(f) {
				throw Error("addChild()" + d.errorStr + "addElement()\u4ee3\u66ff");
			};
			d.prototype.addChildAt = function(f, g) {
				throw Error("addChildAt()" + d.errorStr + "addElementAt()\u4ee3\u66ff");
			};
			d.prototype.removeChild = function(f) {
				throw Error("removeChild()" + d.errorStr + "removeElement()\u4ee3\u66ff");
			};
			d.prototype.removeChildAt = function(f) {
				throw Error("removeChildAt()" + d.errorStr + "removeElementAt()\u4ee3\u66ff");
			};
			d.prototype.setChildIndex = function(f, g) {
				throw Error("setChildIndex()" + d.errorStr + "setElementIndex()\u4ee3\u66ff");
			};
			d.prototype.swapChildren = function(f, g) {
				throw Error("swapChildren()" + d.errorStr + "swapElements()\u4ee3\u66ff");
			};
			d.prototype.swapChildrenAt = function(f, g) {
				throw Error("swapChildrenAt()" + d.errorStr + "swapElementsAt()\u4ee3\u66ff");
			};
			d.errorStr = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
			return d;
		}(c.UIComponent);
		c.SkinnableComponent = b;
		b.prototype.__class__ = "egret.gui.SkinnableComponent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.prototype.getSkin = function(f, e) {
				if (!f) {
					return null;
				}
				if (f.prototype) {
					return new f;
				}
				if ("string" == typeof f) {
					var g = a.getDefinitionByName(f);
					return g ? new g : null;
				}
				return f;
			};
			return d;
		}();
		c.DefaultSkinAdapter = b;
		b.prototype.__class__ = "egret.gui.DefaultSkinAdapter";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.prototype.getAsset = function(i, g, m, l) {
				var k = i;
				i.prototype && (k = new i);
				if (k instanceof a.DisplayObject || k instanceof a.Texture) {
					g.call(m, k, i);
				} else {
					if ("string" == typeof i) {
						var j = new a.URLLoader;
						j.dataFormat = a.URLLoaderDataFormat.TEXTURE;
						j.addEventListener(a.Event.COMPLETE, function(e) {
							k = j.data;
							g.call(m, k, i);
						}, this);
						j.load(new a.URLRequest(i));
					} else {
						g.call(m, k, i);
					}
				}
			};
			return d;
		}();
		c.DefaultAssetAdapter = b;
		b.prototype.__class__ = "egret.gui.DefaultAssetAdapter";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "target", {
				get: function() {
					return this._target;
				},
				set: function(f) {
					this._target = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.measure = function() {
				if (null != this.target) {
					for (var v = 0, w = 0, u = this._target.skin, s = this.target.numChildren, q = 0; q < s; q++) {
						var o = this.target.getChildAt(q);
						if (o && o != u && o.includeInLayout) {
							var j = o.horizontalCenter,
								k = o.verticalCenter,
								i = o.left,
								g = o.right,
								h = o.top,
								x = o.bottom;
							isNaN(i) || isNaN(g) ? isNaN(j) ? isNaN(i) && isNaN(g) ? j = o.preferredX : (j = isNaN(i) ? 0 : i, j += isNaN(g) ? 0 : g) : j = 2 * Math.abs(j) : j = i + g;
							isNaN(h) || isNaN(x) ? isNaN(k) ? isNaN(h) && isNaN(x) ? k = o.preferredY : (k = isNaN(h) ? 0 : h, k += isNaN(x) ? 0 : x) : k = 2 * Math.abs(k) : k = h + x;
							x = o.preferredHeight;
							v = Math.ceil(Math.max(v, j + o.preferredWidth));
							w = Math.ceil(Math.max(w, k + x));
						}
					}
					this.target.measuredWidth = Math.max(v, this.target.measuredWidth);
					this.target.measuredHeight = Math.max(w, this.target.measuredHeight);
				}
			};
			d.prototype.updateDisplayList = function(z, C) {
				if (null != this.target) {
					for (var v = this.target.numChildren, u = this._target.skin, s = 0; s < v; s++) {
						var q = this.target.getChildAt(s);
						if (null != q && q != u && q.includeInLayout) {
							var k = q.horizontalCenter,
								o = q.verticalCenter,
								j = q.left,
								g = q.right,
								i = q.top,
								D = q.bottom,
								w = q.percentWidth,
								h = q.percentHeight,
								A = NaN,
								F = NaN;
							isNaN(j) || isNaN(g) ? isNaN(w) || (A = Math.round(z * Math.min(0.01 * w, 1))) : A = z - g - j;
							isNaN(i) || isNaN(D) ? isNaN(h) || (F = Math.round(C * Math.min(0.01 * h, 1))) : F = C - D - i;
							q.setLayoutBoundsSize(A, F);
							w = q.layoutBoundsWidth;
							h = q.layoutBoundsHeight;
							F = A = NaN;
							A = isNaN(k) ? isNaN(j) ? isNaN(g) ? q.layoutBoundsX : z - w - g : j : Math.round((z - w) / 2 + k);
							F = isNaN(o) ? isNaN(i) ? isNaN(D) ? q.layoutBoundsY : C - h - D : i : Math.round((C - h) / 2 + o);
							q.setLayoutBoundsPosition(A, F);
						}
					}
				}
			};
			return d;
		}(a.HashObject);
		c.SkinBasicLayout = b;
		b.prototype.__class__ = "egret.gui.SkinBasicLayout";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._autoRepeat = this._downEventFired = !1;
				this._repeatInterval = this._repeatDelay = 35;
				this._keepDown = this._hovered = !1;
				this._label = "";
				this.touchChildren = this._stickyHighlighting = this._mouseCaptured = !1;
				this.addHandlers();
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "autoRepeat", {
				get: function() {
					return this._autoRepeat;
				},
				set: function(f) {
					f != this._autoRepeat && (this._autoRepeat = f, this.checkAutoRepeatTimerConditions(this.isDown()));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "repeatDelay", {
				get: function() {
					return this._repeatDelay;
				},
				set: function(f) {
					this._repeatDelay = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "repeatInterval", {
				get: function() {
					return this._repeatInterval;
				},
				set: function(f) {
					this._repeatInterval = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "hovered", {
				get: function() {
					return this._hovered;
				},
				set: function(f) {
					f != this._hovered && (this._hovered = f, this.invalidateSkinState(), this.checkButtonDownConditions());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setKeepDown = function(f) {
				this._keepDown != f && (this._keepDown = f, this.invalidateSkinState());
			};
			Object.defineProperty(d.prototype, "label", {
				get: function() {
					return this._getLabel();
				},
				set: function(f) {
					this._setLabel(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._getLabel = function() {
				return this.labelDisplay ? this.labelDisplay.text : this._label;
			};
			d.prototype._setLabel = function(f) {
				this._label = f;
				this.labelDisplay && (this.labelDisplay.text = f);
			};
			Object.defineProperty(d.prototype, "mouseCaptured", {
				get: function() {
					return this._mouseCaptured;
				},
				set: function(f) {
					f != this._mouseCaptured && (this._mouseCaptured = f, this.invalidateSkinState(), f || this.removeStageMouseHandlers(), this.checkButtonDownConditions());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "stickyHighlighting", {
				get: function() {
					return this._stickyHighlighting;
				},
				set: function(f) {
					f != this._stickyHighlighting && (this._stickyHighlighting = f, this.invalidateSkinState(), this.checkButtonDownConditions());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.checkButtonDownConditions = function() {
				var f = this.isDown();
				this._downEventFired != f && (f && c.UIEvent.dispatchUIEvent(this, c.UIEvent.BUTTON_DOWN), this._downEventFired = f, this.checkAutoRepeatTimerConditions(f));
			};
			d.prototype.addHandlers = function() {
				this.addEventListener(a.TouchEvent.TOUCH_ROLL_OVER, this.mouseEventHandler, this);
				this.addEventListener(a.TouchEvent.TOUCH_ROLL_OUT, this.mouseEventHandler, this);
				this.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.mouseEventHandler, this);
				this.addEventListener(a.TouchEvent.TOUCH_END, this.mouseEventHandler, this);
				this.addEventListener(a.TouchEvent.TOUCH_TAP, this.mouseEventHandler, this);
			};
			d.prototype.addStageMouseHandlers = function() {
				c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
			};
			d.prototype.removeStageMouseHandlers = function() {
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
			};
			d.prototype.isDown = function() {
				return this.enabled ? this.mouseCaptured && (this.hovered || this.stickyHighlighting) ? !0 : !1 : !1;
			};
			d.prototype.checkAutoRepeatTimerConditions = function(f) {
				f = this.autoRepeat && f;
				f != (null != this.autoRepeatTimer) && (f ? this.startTimer() : this.stopTimer());
			};
			d.prototype.startTimer = function() {
				this.autoRepeatTimer = new a.Timer(1);
				this.autoRepeatTimer.delay = this._repeatDelay;
				this.autoRepeatTimer.addEventListener(a.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this);
				this.autoRepeatTimer.start();
			};
			d.prototype.stopTimer = function() {
				this.autoRepeatTimer.stop();
				this.autoRepeatTimer = null;
			};
			d.prototype.mouseEventHandler = function(f) {
				switch (f.type) {
					case a.TouchEvent.TOUCH_ROLL_OVER:
						if (f.touchDown && !this.mouseCaptured) {
							break;
						}
						this.hovered = !0;
						break;
					case a.TouchEvent.TOUCH_ROLL_OUT:
						this.hovered = !1;
						break;
					case a.TouchEvent.TOUCH_BEGIN:
						this.addStageMouseHandlers();
						a.InteractionMode.mode == a.InteractionMode.TOUCH && (this.hovered = !0);
						this.mouseCaptured = !0;
						break;
					case a.TouchEvent.TOUCH_END:
						f.target == this && (this.hovered = !0, this.mouseCaptured && (this.buttonReleased(), this.mouseCaptured = !1));
						break;
					case a.TouchEvent.TOUCH_TAP:
						this.enabled ? this.clickHandler(f) : f.stopImmediatePropagation();
				}
			};
			d.prototype.buttonReleased = function() {};
			d.prototype.clickHandler = function(f) {};
			d.prototype.stage_mouseUpHandler = function(f) {
				f.target != this && (this.mouseCaptured = !1);
			};
			d.prototype.autoRepeat_timerDelayHandler = function(f) {
				this.autoRepeatTimer.reset();
				this.autoRepeatTimer.removeEventListener(a.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this);
				this.autoRepeatTimer.delay = this._repeatInterval;
				this.autoRepeatTimer.addEventListener(a.TimerEvent.TIMER, this.autoRepeat_timerHandler, this);
				this.autoRepeatTimer.start();
			};
			d.prototype.autoRepeat_timerHandler = function(f) {
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.BUTTON_DOWN);
			};
			d.prototype.getCurrentSkinState = function() {
				return this.enabled ? this.isDown() || this._keepDown ? "down" : a.InteractionMode.mode == a.InteractionMode.MOUSE && (this.hovered || this.mouseCaptured) ? "over" : "up" : e.prototype.getCurrentSkinState.call(this);
			};
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.labelDisplay && (this.labelDisplay.text = this._label);
			};
			return d;
		}(c.SkinnableComponent);
		c.ButtonBase = b;
		b.prototype.__class__ = "egret.gui.ButtonBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._autoSelected = !0;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "selected", {
				get: function() {
					return this._selected;
				},
				set: function(f) {
					this._setSelected(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setSelected = function(f) {
				f != this._selected && (this._selected = f, c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT), this.invalidateSkinState());
			};
			d.prototype.getCurrentSkinState = function() {
				return this.selected ? e.prototype.getCurrentSkinState.call(this) + "AndSelected" : e.prototype.getCurrentSkinState.call(this);
			};
			d.prototype.buttonReleased = function() {
				e.prototype.buttonReleased.call(this);
				this._autoSelected && this.enabled && (this.selected = !this.selected, this.dispatchEventWith(a.Event.CHANGE));
			};
			return d;
		}(c.ButtonBase);
		c.ToggleButtonBase = b;
		b.prototype.__class__ = "egret.gui.ToggleButtonBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._fontFamily = "SimSun";
				this._size = 30;
				this._textAlign = a.HorizontalAlign.LEFT;
				this._verticalAlign = a.VerticalAlign.TOP;
				this._lineSpacing = 0;
				this._textColor = 16777215;
				this._text = "";
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "fontFamily", {
				get: function() {
					return this._fontFamily;
				},
				set: function(f) {
					this._fontFamily != f && (this._fontFamily = f, this.fontFamilyChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "size", {
				get: function() {
					return this._size;
				},
				set: function(f) {
					this._size != f && (this._size = f, this.sizeChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "bold", {
				get: function() {
					return this._bold;
				},
				set: function(f) {
					this._bold != f && (this._bold = f, this.boldChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "italic", {
				get: function() {
					return this._italic;
				},
				set: function(f) {
					this._italic != f && (this._italic = f, this.italicChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "textAlign", {
				get: function() {
					return this._textAlign;
				},
				set: function(f) {
					this._textAlign != f && (this._textAlign = f, this.textAlignChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign;
				},
				set: function(f) {
					this._verticalAlign != f && (this._verticalAlign = f, this.verticalAlignChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "lineSpacing", {
				get: function() {
					return this._lineSpacing;
				},
				set: function(f) {
					this._lineSpacing != f && (this._lineSpacing = f, this.lineSpacingChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "textColor", {
				get: function() {
					return this._textColor;
				},
				set: function(f) {
					this._textColor != f && (this._textColor = f, this.textColorChanged = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "text", {
				get: function() {
					return this._text;
				},
				set: function(f) {
					f != this._text && (this._text = f, this._textChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.createChildren = function() {
				e.prototype.createChildren.call(this);
				this._textField || this.checkTextField();
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this._textField || this.checkTextField();
				this.fontFamilyChanged && (this._textField.fontFamily = this._fontFamily, this.fontFamilyChanged = !1);
				this.sizeChanged && (this._textField.size = this._size, this.sizeChanged = !1);
				this.boldChanged && (this._textField.bold = this._bold, this.boldChanged = !1);
				this.italic && (this._textField.italic = this._italic, this.italicChanged = !1);
				this.textAlignChanged && (this._textField.textAlign = this._textAlign, this.textAlignChanged = !1);
				this.verticalAlignChanged && (this._textField.verticalAlign = this._verticalAlign, this.verticalAlignChanged = !1);
				this.lineSpacingChanged && (this._textField.lineSpacing = this._lineSpacing, this.lineSpacingChanged = !1);
				this.textColorChanged && (this._textField.textColor = this._textColor, this.textColorChanged = !1);
				this._textChanged && (this._textField.text = this._text, this._textChanged = !1);
			};
			d.prototype.checkTextField = function() {
				this._textField || (this.createTextField(), this._textField.text = this._text, this._textChanged = !0, this.invalidateProperties());
			};
			d.prototype.createTextField = function() {
				this._textField = new a.TextField;
				this._textField.fontFamily = this._fontFamily;
				this._textField.size = this._size;
				this._textField.textAlign = this._textAlign;
				this._textField.verticalAlign = this._verticalAlign;
				this._textField.lineSpacing = this._lineSpacing;
				this._textField.textColor = this._textColor;
				this._addToDisplayList(this._textField);
			};
			d.prototype.measure = function() {
				e.prototype.measure.call(this);
				this.measuredWidth = d.DEFAULT_MEASURED_WIDTH;
				this.measuredHeight = d.DEFAULT_MEASURED_HEIGHT;
			};
			d.prototype.$updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				this._textField.width = f;
				this._textField.height = g;
			};
			d.DEFAULT_MEASURED_WIDTH = 160;
			d.DEFAULT_MEASURED_HEIGHT = 22;
			return d;
		}(c.UIComponent);
		c.TextBase = b;
		b.prototype.__class__ = "egret.gui.TextBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._contentHeight = this._contentWidth = 0;
				this._clipAndEnableScrolling = !1;
				this._verticalScrollPosition = this._horizontalScrollPosition = 0;
				this.touchEnabled = this._layoutInvalidateSizeFlag = this._layoutInvalidateDisplayListFlag = !1;
			}
			__extends(d, e);
			d.prototype.createChildren = function() {
				e.prototype.createChildren.call(this);
				this._layout || (this.layout = new c.BasicLayout);
			};
			Object.defineProperty(d.prototype, "contentWidth", {
				get: function() {
					return this._contentWidth;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setContentWidth = function(f) {
				if (f != this._contentWidth) {
					var g = this._contentWidth;
					this._contentWidth = f;
					this.hasEventListener("propertyChange") && c.PropertyChangeEvent.dispatchPropertyChangeEvent(this, c.PropertyChangeEventKind.UPDATE, "contentWidth", g, f, this);
				}
			};
			Object.defineProperty(d.prototype, "contentHeight", {
				get: function() {
					return this._contentHeight;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setContentHeight = function(f) {
				if (f != this._contentHeight) {
					var g = this._contentHeight;
					this._contentHeight = f;
					this.hasEventListener("propertyChange") && c.PropertyChangeEvent.dispatchPropertyChangeEvent(this, c.PropertyChangeEventKind.UPDATE, "contentHeight", g, f, this);
				}
			};
			d.prototype.setContentSize = function(f, g) {
				if (f != this._contentWidth || g != this._contentHeight) {
					this.setContentWidth(f), this.setContentHeight(g);
				}
			};
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return this._layout;
				},
				set: function(f) {
					this._setLayout(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setLayout = function(f) {
				if (this._layout != f) {
					this._layout && (this._layout.target = null);
					if (this._layout = f) {
						this._layout.target = this;
					}
					this.invalidateSize();
					this.invalidateDisplayList();
					this.dispatchEventWith("layoutChanged");
				}
			};
			Object.defineProperty(d.prototype, "clipAndEnableScrolling", {
				get: function() {
					return this._clipAndEnableScrolling;
				},
				set: function(f) {
					f != this._clipAndEnableScrolling && (this.scrollRect = (this._clipAndEnableScrolling = f) ? new a.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, this.width, this.height) : null);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "horizontalScrollPosition", {
				get: function() {
					return this._horizontalScrollPosition;
				},
				set: function(f) {
					if (f != this._horizontalScrollPosition) {
						var g = this._horizontalScrollPosition;
						this._horizontalScrollPosition = f;
						this.scrollPositionChanged();
						c.PropertyChangeEvent.dispatchPropertyChangeEvent(this, c.PropertyChangeEventKind.UPDATE, "horizontalScrollPosition", g, f, this);
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "verticalScrollPosition", {
				get: function() {
					return this._verticalScrollPosition;
				},
				set: function(f) {
					if (f != this._verticalScrollPosition) {
						var g = this._verticalScrollPosition;
						this._verticalScrollPosition = f;
						this.scrollPositionChanged();
						c.PropertyChangeEvent.dispatchPropertyChangeEvent(this, c.PropertyChangeEventKind.UPDATE, "verticalScrollPosition", g, f, this);
					}
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.scrollPositionChanged = function() {
				this._clipAndEnableScrolling && (this.updateScrollRect(this.width, this.height), this._invalidateDisplayListExceptLayout(), this._layout && this._layout.scrollPositionChanged());
			};
			d.prototype.updateScrollRect = function(f, g) {
				var h = this._scrollRect;
				this._clipAndEnableScrolling ? h ? (h.x = this._horizontalScrollPosition, h.y = this._verticalScrollPosition, h.width = f, h.height = g) : this._scrollRect = new a.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, f, g) : h && (this._scrollRect = null);
			};
			d.prototype.measure = function() {
				this._layout && this._layoutInvalidateSizeFlag && (e.prototype.measure.call(this), this._layout.measure());
			};
			d.prototype._invalidateDisplayListExceptLayout = function() {
				e.prototype.invalidateDisplayList.call(this);
			};
			d.prototype.invalidateDisplayList = function() {
				e.prototype.invalidateDisplayList.call(this);
				this._layoutInvalidateDisplayListFlag = !0;
			};
			d.prototype._childXYChanged = function() {
				this.invalidateSize();
				this.invalidateDisplayList();
			};
			d.prototype._invalidateSizeExceptLayout = function() {
				e.prototype.invalidateSize.call(this);
			};
			d.prototype.invalidateSize = function() {
				e.prototype.invalidateSize.call(this);
				this._layoutInvalidateSizeFlag = !0;
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				this._layoutInvalidateDisplayListFlag && this._layout && (this._layoutInvalidateDisplayListFlag = !1, this._layout.updateDisplayList(f, g), this.updateScrollRect(f, g));
			};
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return -1;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getElementAt = function(f) {
				return null;
			};
			d.prototype.getElementIndex = function(f) {
				return -1;
			};
			d.prototype.getElementIndicesInView = function() {
				var f = [],
					g;
				if (this.scrollRect) {
					for (g = 0; g < this.numChildren; g++) {
						var i = this.getChildAt(g);
						if (i) {
							var h = new a.Rectangle;
							h.x = i.layoutBoundsX;
							h.y = i.layoutBoundsY;
							h.width = i.layoutBoundsWidth;
							h.height = i.layoutBoundsHeight;
							this.scrollRect.intersects(h) && f.push(g);
						}
					}
				} else {
					for (g = 0; g < this.numChildren; g++) {
						f.push(g);
					}
				}
				return f;
			};
			d.prototype.setVirtualElementIndicesInView = function(f, g) {};
			d.prototype.getVirtualElementAt = function(f) {
				return this.getElementAt(f);
			};
			return d;
		}(c.UIComponent);
		c.GroupBase = b;
		b.prototype.__class__ = "egret.gui.GroupBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._selected = this.dataChangedFlag = !1;
				this._itemIndex = -1;
				this.touchChildren = !0;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "data", {
				get: function() {
					return this._data;
				},
				set: function(f) {
					this._data = f;
					this.initialized || this.parent ? (this.dataChangedFlag = !1, this.dataChanged()) : (this.dataChangedFlag = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.dataChanged = function() {};
			Object.defineProperty(d.prototype, "selected", {
				get: function() {
					return this._selected;
				},
				set: function(f) {
					this._selected != f && (this._selected = f, this.invalidateSkinState());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "itemIndex", {
				get: function() {
					return this._itemIndex;
				},
				set: function(f) {
					this._itemIndex = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this.dataChangedFlag && (this.dataChangedFlag = !1, this.dataChanged());
			};
			d.prototype.getCurrentSkinState = function() {
				return this._selected ? "down" : e.prototype.getCurrentSkinState.call(this);
			};
			return d;
		}(c.ButtonBase);
		c.ItemRenderer = b;
		b.prototype.__class__ = "egret.gui.ItemRenderer";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._indentation = 17;
				this._depth = 0;
				this._isOpen = this._hasChildren = !1;
				this.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.onItemMouseDown, this, !1, 1000);
			}
			__extends(d, e);
			d.prototype.onItemMouseDown = function(f) {
				f.target == this.disclosureButton && f.stopImmediatePropagation();
			};
			Object.defineProperty(d.prototype, "indentation", {
				get: function() {
					return this._indentation;
				},
				set: function(f) {
					this._indentation = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "iconSkinName", {
				get: function() {
					return this._iconSkinName;
				},
				set: function(f) {
					this._iconSkinName != f && (this._iconSkinName = f, this.iconDisplay && (this.iconDisplay.source = this._iconSkinName));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "depth", {
				get: function() {
					return this._depth;
				},
				set: function(f) {
					f != this._depth && (this._depth = f, this.contentGroup && (this.contentGroup.x = this._depth * this._indentation));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "hasChildren", {
				get: function() {
					return this._hasChildren;
				},
				set: function(f) {
					this._hasChildren != f && (this._hasChildren = f, this.disclosureButton && (this.disclosureButton.visible = this._hasChildren));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "opened", {
				get: function() {
					return this._isOpen;
				},
				set: function(f) {
					this._isOpen != f && (this._isOpen = f, this.disclosureButton && (this.disclosureButton.selected = this._isOpen));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.iconDisplay ? this.iconDisplay.source = this._iconSkinName : g == this.disclosureButton ? (this.disclosureButton.visible = this._hasChildren, this.disclosureButton.selected = this._isOpen, this.disclosureButton._autoSelected = !1, this.disclosureButton.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.disclosureButton_mouseDownHandler, this)) : g == this.contentGroup && (this.contentGroup.x = this._depth * this._indentation);
			};
			d.prototype.partRemoved = function(f, g) {
				e.prototype.partRemoved.call(this, f, g);
				g == this.iconDisplay ? this.iconDisplay.source = null : g == this.disclosureButton && (this.disclosureButton.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.disclosureButton_mouseDownHandler, this), this.disclosureButton._autoSelected = !0, this.disclosureButton.visible = !0);
			};
			d.prototype.disclosureButton_mouseDownHandler = function(f) {
				c.TreeEvent.dispatchTreeEvent(this, c.TreeEvent.ITEM_OPENING, this.itemIndex, this.data, this, !this._isOpen);
			};
			return d;
		}(c.ItemRenderer);
		c.TreeItemRenderer = b;
		b.prototype.__class__ = "egret.gui.TreeItemRenderer";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d(f, e) {
				this.easerFunction = a.Ease.sineInOut;
				this._duration = 500;
				this._startDelay = 0;
				this._repeatCount = 1;
				this._repeatDelay = 0;
				this.motionPaths = [];
				this._currentValue = {};
				this.pauseTime = 0;
				this._isPaused = !1;
				this.startTime = 0;
				this._started = !1;
				this.playedTimes = 0;
				this.updateFunction = f;
				this.thisObject = e;
			}
			Object.defineProperty(d.prototype, "isPlaying", {
				get: function() {
					return this._isPlaying;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "duration", {
				get: function() {
					return this._duration;
				},
				set: function(e) {
					this._duration = e;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "startDelay", {
				get: function() {
					return this._startDelay;
				},
				set: function(e) {
					this._startDelay = e;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "repeatCount", {
				get: function() {
					return this._repeatCount;
				},
				set: function(e) {
					this._repeatCount = e;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "repeatDelay", {
				get: function() {
					return this._repeatDelay;
				},
				set: function(e) {
					this._repeatDelay = e;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "currentValue", {
				get: function() {
					return this._currentValue;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.play = function() {
				this.stopAnimation();
				this.start();
			};
			d.prototype.seek = function(e) {
				e = Math.min(e, this.duration);
				this.caculateCurrentValue(e / this.duration);
				this.startTime = a.getTimer() - e - this._startDelay;
				null != this.updateFunction && this.updateFunction.call(this.thisObject, this);
			};
			d.prototype.start = function() {
				this.playedTimes = 0;
				this._started = !0;
				this._isPlaying = !1;
				this._currentValue = {};
				this.caculateCurrentValue(0);
				this.startTime = a.getTimer();
				d.currentTime = this.startTime;
				this.doInterval();
				d.addAnimation(this);
			};
			d.prototype.end = function() {
				this._started || (this.caculateCurrentValue(0), null != this.startFunction && this.startFunction.call(this.thisObject, this), null != this.updateFunction && this.updateFunction.call(this.thisObject, this));
				this.caculateCurrentValue(1);
				null != this.updateFunction && this.updateFunction.call(this.thisObject, this);
				this.stopAnimation();
				null != this.endFunction && this.endFunction.call(this.thisObject, this);
			};
			d.prototype.stop = function() {
				this.stopAnimation();
				null != this.stopFunction && this.stopFunction.call(this.thisObject, this);
			};
			d.prototype.stopAnimation = function() {
				this.playedTimes = 0;
				this._isPlaying = !1;
				this.startTime = 0;
				this._started = !1;
				d.removeAnimation(this);
			};
			Object.defineProperty(d.prototype, "isPaused", {
				get: function() {
					return this._isPaused;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.pause = function() {
				this._started && (this._isPaused = !0, this.pauseTime = a.getTimer(), this._isPlaying = !1, d.removeAnimation(this));
			};
			d.prototype.resume = function() {
				this._started && this._isPaused && (this._isPaused = !1, this.startTime += a.getTimer() - this.pauseTime, this.pauseTime = -1, d.addAnimation(this));
			};
			Object.defineProperty(d.prototype, "started", {
				get: function() {
					return this._started;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.doInterval = function() {
				var f = d.currentTime - this.startTime - (0 < this.playedTimes ? this._repeatDelay : this._startDelay);
				if (0 > f) {
					return !1;
				}
				this._isPlaying || (this._isPlaying = !0, 0 == this.playedTimes && null != this.startFunction && this.startFunction.call(this.thisObject, this));
				var e = 0 == this._duration ? 1 : Math.min(f, this._duration) / this._duration;
				this.caculateCurrentValue(e);
				null != this.updateFunction && this.updateFunction.call(this.thisObject, this);
				if (f = f >= this._duration) {
					this.playedTimes++, this._isPlaying = !1, this.startTime = d.currentTime, 0 == this._repeatCount || this.playedTimes < this._repeatCount ? f = !1 : (d.removeAnimation(this), this._started = !1, this.playedTimes = 0);
				}
				f && null != this.endFunction && this.endFunction.call(this.thisObject, this);
				return f;
			};
			d.prototype.caculateCurrentValue = function(g) {
				this.easerFunction && (g = this.easerFunction(g));
				for (var f = this.motionPaths, j = f.length, i = 0; i < j; i++) {
					var h = f[i];
					this.currentValue[h.prop] = h.from + (h.to - h.from) * g;
				}
			};
			d.addAnimation = function(e) {
				-1 == d.activeAnimations.indexOf(e) && (d.activeAnimations.push(e), d.registered || (d.registered = !0, a.Ticker.getInstance().register(d.onEnterFrame, null)));
			};
			d.removeAnimation = function(e) {
				e = d.activeAnimations.indexOf(e); - 1 != e && (d.activeAnimations.splice(e, 1), e <= d.currentIntervalIndex && d.currentIntervalIndex--);
				0 == d.activeAnimations.length && d.registered && (d.registered = !1, a.Ticker.getInstance().unregister(d.onEnterFrame, null));
			};
			d.onEnterFrame = function(f, e) {
				d.currentTime = a.getTimer();
				for (d.currentIntervalIndex = 0; d.currentIntervalIndex < d.activeAnimations.length;) {
					d.activeAnimations[d.currentIntervalIndex].doInterval(), d.currentIntervalIndex++;
				}
				d.currentIntervalIndex = -1;
				0 == d.activeAnimations.length && d.registered && (d.registered = !1, a.Ticker.getInstance().unregister(d.onEnterFrame, null));
			};
			d.currentTime = 0;
			d.TIMER_RESOLUTION = 1000 / 60;
			d.activeAnimations = [];
			d.currentIntervalIndex = -1;
			return d;
		}();
		c.Animation = b;
		b.prototype.__class__ = "egret.gui.Animation";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._maximum = 100;
				this.maxChanged = !1;
				this._minimum = 0;
				this.minChanged = !1;
				this._stepSize = 1;
				this.stepSizeChanged = !1;
				this._changedValue = this._value = 0;
				this.valueChanged = !1;
				this._snapInterval = 1;
				this._explicitSnapInterval = this.snapIntervalChanged = !1;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "maximum", {
				get: function() {
					return this._maximum;
				},
				set: function(f) {
					this._setMaximun(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setMaximun = function(f) {
				f != this._maximum && (this._maximum = f, this.maxChanged = !0, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "minimum", {
				get: function() {
					return this._minimum;
				},
				set: function(f) {
					this._setMinimun(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setMinimun = function(f) {
				f != this._minimum && (this._minimum = f, this.minChanged = !0, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "stepSize", {
				get: function() {
					return this._stepSize;
				},
				set: function(f) {
					f != this._stepSize && (this._stepSize = f, this.stepSizeChanged = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "value", {
				get: function() {
					return this._getValue();
				},
				set: function(f) {
					this._setValue(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setValue = function(f) {
				f != this.value && (this._changedValue = f, this.valueChanged = !0, this.invalidateProperties());
			};
			d.prototype._getValue = function() {
				return this.valueChanged ? this._changedValue : this._value;
			};
			Object.defineProperty(d.prototype, "snapInterval", {
				get: function() {
					return this._snapInterval;
				},
				set: function(f) {
					this._explicitSnapInterval = !0;
					f != this._snapInterval && (isNaN(f) ? (this._snapInterval = 1, this._explicitSnapInterval = !1) : this._snapInterval = f, this.stepSizeChanged = this.snapIntervalChanged = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this.minimum > this.maximum && (this.maxChanged ? this._maximum = this._minimum : this._minimum = this._maximum);
				if (this.valueChanged || this.maxChanged || this.minChanged || this.snapIntervalChanged) {
					var f = this.valueChanged ? this._changedValue : this._value;
					this.snapIntervalChanged = this.minChanged = this.maxChanged = this.valueChanged = !1;
					this.setValue(this.nearestValidValue(f, this.snapInterval));
				}
				this.stepSizeChanged && (this._explicitSnapInterval ? this._stepSize = this.nearestValidSize(this._stepSize) : (this._snapInterval = this._stepSize, this.setValue(this.nearestValidValue(this._value, this.snapInterval))), this.stepSizeChanged = !1);
			};
			d.prototype.nearestValidSize = function(f) {
				var g = this.snapInterval;
				if (0 == g) {
					return f;
				}
				f = Math.round(f / g) * g;
				return Math.abs(f) < g ? g : f;
			};
			d.prototype.nearestValidValue = function(f, g) {
				if (0 == g) {
					return Math.max(this.minimum, Math.min(this.maximum, f));
				}
				var j = this.maximum - this.minimum,
					i = 1;
				f -= this.minimum;
				g != Math.round(g) && (i = (1 + g).toString().split("."), i = Math.pow(10, i[1].length), j *= i, f = Math.round(f * i), g = Math.round(g * i));
				var h = Math.max(0, Math.floor(f / g) * g),
					j = Math.min(j, Math.floor((f + g) / g) * g);
				return (f - h >= (j - h) / 2 ? j : h) / i + this.minimum;
			};
			d.prototype.setValue = function(f) {
				this._value != f && (isNaN(f) && (f = 0), !isNaN(this.maximum) && !isNaN(this.minimum) && this.maximum > this.minimum ? this._value = Math.min(this.maximum, Math.max(this.minimum, f)) : this._value = f, this.valueChanged = !1);
			};
			d.prototype.changeValueByStep = function(f) {
				"undefined" === typeof f && (f = !0);
				0 != this.stepSize && this.setValue(this.nearestValidValue(f ? this.value + this.stepSize : this.value - this.stepSize, this.snapInterval));
			};
			return d;
		}(c.SkinnableComponent);
		c.Range = b;
		b.prototype.__class__ = "egret.gui.Range";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._slideDuration = 300;
				this.needUpdateValue = !1;
				this.addEventListener(a.Event.ADDED_TO_STAGE, this.addedToStageHandler, this);
				this.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.mouseDownHandler, this);
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "slideDuration", {
				get: function() {
					return this._slideDuration;
				},
				set: function(f) {
					this._slideDuration = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "maximum", {
				get: function() {
					return this._maximum;
				},
				set: function(f) {
					f != this._maximum && (this._setMaximun(f), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "minimum", {
				get: function() {
					return this._minimum;
				},
				set: function(f) {
					f != this._minimum && (this._setMinimun(f), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "value", {
				get: function() {
					return this._getValue();
				},
				set: function(f) {
					f != this._getValue() && (this._setValue(f), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setValue = function(f) {
				e.prototype.setValue.call(this, f);
				this.invalidateDisplayList();
			};
			d.prototype.pointToValue = function(f, g) {
				return this.minimum;
			};
			d.prototype.changeValueByStep = function(f) {
				"undefined" === typeof f && (f = !0);
				var g = this.value;
				e.prototype.changeValueByStep.call(this, f);
				this.value != g && this.dispatchEventWith(a.Event.CHANGE);
			};
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.thumb ? (this.thumb.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.thumb_mouseDownHandler, this), this.thumb.addEventListener(c.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.addEventListener(c.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this), this.thumb.stickyHighlighting = !0) : g == this.track && (this.track.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.track_mouseDownHandler, this), this.track.addEventListener(c.ResizeEvent.RESIZE, this.track_resizeHandler, this));
			};
			d.prototype.partRemoved = function(f, g) {
				e.prototype.partRemoved.call(this, f, g);
				g == this.thumb ? (this.thumb.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.thumb_mouseDownHandler, this), this.thumb.removeEventListener(c.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.removeEventListener(c.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)) : g == this.track && (this.track.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.track_mouseDownHandler, this), this.track.removeEventListener(c.ResizeEvent.RESIZE, this.track_resizeHandler, this));
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				this.updateSkinDisplayList();
			};
			d.prototype.updateSkinDisplayList = function() {};
			d.prototype.addedToStageHandler = function(f) {
				this.updateSkinDisplayList();
			};
			d.prototype.track_resizeHandler = function(f) {
				this.updateSkinDisplayList();
			};
			d.prototype.thumb_resizeHandler = function(f) {
				this.updateSkinDisplayList();
			};
			d.prototype.thumb_updateCompleteHandler = function(f) {
				this.updateSkinDisplayList();
				this.thumb.removeEventListener(c.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this);
			};
			d.prototype.thumb_mouseDownHandler = function(f) {
				c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
				c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
				this.addEventListener(a.Event.ENTER_FRAME, this.onEnterFrame, this);
				f = this.thumb.globalToLocal(f.stageX, f.stageY, a.Point.identity);
				this._clickOffsetX = f.x;
				this._clickOffsetY = f.y;
				c.TrackBaseEvent.dispatchTrackBaseEvent(this, c.TrackBaseEvent.THUMB_PRESS);
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.CHANGE_START);
			};
			d.prototype.onEnterFrame = function(f) {
				this.needUpdateValue && this.track && (this.updateWhenMouseMove(), this.needUpdateValue = !1);
			};
			d.prototype.updateWhenMouseMove = function() {
				if (this.track) {
					var f = this.track.globalToLocal(this._moveStageX, this._moveStageY, a.Point.identity),
						f = this.pointToValue(f.x - this._clickOffsetX, f.y - this._clickOffsetY),
						f = this.nearestValidValue(f, this.snapInterval);
					f != this.value && (this.setValue(f), this.validateDisplayList(), c.TrackBaseEvent.dispatchTrackBaseEvent(this, c.TrackBaseEvent.THUMB_DRAG), this.dispatchEventWith(a.Event.CHANGE));
				}
			};
			d.prototype.stage_mouseMoveHandler = function(f) {
				this._moveStageX = f.stageX;
				this._moveStageY = f.stageY;
				this.needUpdateValue || (this.needUpdateValue = !0);
			};
			d.prototype.stage_mouseUpHandler = function(f) {
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
				this.removeEventListener(a.Event.ENTER_FRAME, this.updateWhenMouseMove, this);
				this.needUpdateValue && (this.updateWhenMouseMove(), this.needUpdateValue = !1);
				c.TrackBaseEvent.dispatchTrackBaseEvent(this, c.TrackBaseEvent.THUMB_RELEASE);
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.CHANGE_END);
			};
			d.prototype.track_mouseDownHandler = function(f) {};
			d.prototype.mouseDownHandler = function(f) {
				c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpSomewhereHandler, this);
				c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpSomewhereHandler, this);
				this.mouseDownTarget = f.target;
			};
			d.prototype.stage_mouseUpSomewhereHandler = function(f) {
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpSomewhereHandler, this);
				c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpSomewhereHandler, this);
				if (this.mouseDownTarget != f.target && f instanceof a.TouchEvent && this.contains(f.target)) {
					var g = f.target.localToGlobal(f.localX, f.localY);
					a.TouchEvent.dispatchTouchEvent(this, a.TouchEvent.TOUCH_TAP, f.touchPointID, g.x, g.y, f.ctrlKey, f.altKey, f.shiftKey, f.touchDown);
				}
				this.mouseDownTarget = null;
			};
			return d;
		}(c.Range);
		c.TrackBase = b;
		b.prototype.__class__ = "egret.gui.TrackBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._showTrackHighlight = !0;
				this._pendingValue = 0;
				this._liveDragging = !0;
				this.maximum = 10;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "showTrackHighlight", {
				get: function() {
					return this._showTrackHighlight;
				},
				set: function(f) {
					this._showTrackHighlight != f && (this._showTrackHighlight = f, this.trackHighlight && (this.trackHighlight.visible = f), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "pendingValue", {
				get: function() {
					return this._pendingValue;
				},
				set: function(f) {
					f != this._pendingValue && (this._pendingValue = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setValue = function(f) {
				this._pendingValue = f;
				e.prototype.setValue.call(this, f);
			};
			d.prototype.animationUpdateHandler = function(f) {
				this.pendingValue = f.currentValue.value;
			};
			d.prototype.animationEndHandler = function(f) {
				this.setValue(this.slideToValue);
				this.dispatchEventWith(a.Event.CHANGE);
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.CHANGE_END);
			};
			d.prototype.stopAnimation = function() {
				this.animator.stop();
				this.setValue(this.nearestValidValue(this.pendingValue, this.snapInterval));
				this.dispatchEventWith(a.Event.CHANGE);
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.CHANGE_END);
			};
			d.prototype.thumb_mouseDownHandler = function(f) {
				this.animator && this.animator.isPlaying && this.stopAnimation();
				e.prototype.thumb_mouseDownHandler.call(this, f);
			};
			Object.defineProperty(d.prototype, "liveDragging", {
				get: function() {
					return this._liveDragging;
				},
				set: function(f) {
					this._liveDragging = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.updateWhenMouseMove = function() {
				if (this.track) {
					var f = this.track.globalToLocal(this._moveStageX, this._moveStageY, a.Point.identity),
						f = this.pointToValue(f.x - this._clickOffsetX, f.y - this._clickOffsetY),
						f = this.nearestValidValue(f, this.snapInterval);
					f != this.pendingValue && (c.TrackBaseEvent.dispatchTrackBaseEvent(this, c.TrackBaseEvent.THUMB_DRAG), !0 == this.liveDragging ? (this.setValue(f), this.dispatchEventWith(a.Event.CHANGE)) : this.pendingValue = f);
				}
			};
			d.prototype.stage_mouseUpHandler = function(f) {
				e.prototype.stage_mouseUpHandler.call(this, f);
				!1 == this.liveDragging && this.value != this.pendingValue && (this.setValue(this.pendingValue), this.dispatchEventWith(a.Event.CHANGE));
			};
			d.prototype.track_mouseDownHandler = function(f) {
				this.enabled && (f = this.track.globalToLocal(f.stageX - (this.thumb ? this.thumb.width : 0) / 2, f.stageY - (this.thumb ? this.thumb.height : 0) / 2, a.Point.identity), f = this.pointToValue(f.x, f.y), f = this.nearestValidValue(f, this.snapInterval), f != this.pendingValue && (0 != this.slideDuration ? (this.animator || (this.animator = new c.Animation(this.animationUpdateHandler, this), this.animator.endFunction = this.animationEndHandler), this.animator.isPlaying && this.stopAnimation(), this.slideToValue = f, this.animator.duration = this.slideDuration * (Math.abs(this.pendingValue - this.slideToValue) / (this.maximum - this.minimum)), this.animator.motionPaths = [{
					prop: "value",
					from: this.pendingValue,
					to: this.slideToValue
				}], c.UIEvent.dispatchUIEvent(this, c.UIEvent.CHANGE_START), this.animator.play()) : (this.setValue(f), this.dispatchEventWith(a.Event.CHANGE))));
			};
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.trackHighlight && (this.trackHighlight.touchEnabled = !1, this.trackHighlight instanceof a.DisplayObjectContainer && (this.trackHighlight.touchChildren = !1), this.trackHighlight.visible = this._showTrackHighlight);
			};
			return d;
		}(c.TrackBase);
		c.SliderBase = b;
		b.prototype.__class__ = "egret.gui.SliderBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._maxDisplayedLines = 0;
				this.lastUnscaledWidth = NaN;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.addEventListener(c.UIEvent.UPDATE_COMPLETE, this.updateCompleteHandler, this);
			}
			__extends(d, e);
			d.prototype.updateCompleteHandler = function(f) {
				this.lastUnscaledWidth = NaN;
			};
			Object.defineProperty(d.prototype, "maxDisplayedLines", {
				get: function() {
					return this._maxDisplayedLines;
				},
				set: function(f) {
					this._maxDisplayedLines != f && (this._maxDisplayedLines = f, this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "padding", {
				get: function() {
					return this._padding;
				},
				set: function(f) {
					this._padding != f && (this._padding = f, this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft;
				},
				set: function(f) {
					this._paddingLeft != f && (this._paddingLeft = f, this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight;
				},
				set: function(f) {
					this._paddingRight != f && (this._paddingRight = f, this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop;
				},
				set: function(f) {
					this._paddingTop != f && (this._paddingTop = f, this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom;
				},
				set: function(f) {
					this._paddingBottom != f && (this._paddingBottom = f, this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.measure = function() {
				this._invalidatePropertiesFlag && this.validateProperties();
				if (this.isSpecialCase()) {
					if (isNaN(this.lastUnscaledWidth)) {
						this._oldPreferHeight = this._oldPreferWidth = NaN;
					} else {
						this.measureUsingWidth(this.lastUnscaledWidth);
						return;
					}
				}
				var f;
				isNaN(this.explicitWidth) ? 10000 != this.maxWidth && (f = this.maxWidth) : f = this.explicitWidth;
				this.measureUsingWidth(f);
			};
			d.prototype.isSpecialCase = function() {
				return 1 != this._maxDisplayedLines && (!isNaN(this.percentWidth) || !isNaN(this.left) && !isNaN(this.right)) && isNaN(this.explicitHeight) && isNaN(this.percentHeight);
			};
			d.prototype.measureUsingWidth = function(g) {
				var h = this._textField.text;
				this._textChanged && (this._textField.text = this._text);
				var l = isNaN(this._padding) ? 0 : this._padding,
					k = isNaN(this._paddingLeft) ? l : this._paddingLeft,
					j = isNaN(this._paddingRight) ? l : this._paddingRight,
					i = isNaN(this._paddingTop) ? l : this._paddingTop,
					l = isNaN(this._paddingBottom) ? l : this._paddingBottom;
				this._textField.width = NaN;
				this._textField.height = NaN;
				isNaN(g) || (this._textField.width = g - k - j);
				this.measuredWidth = Math.ceil(this._textField.measuredWidth);
				this.measuredHeight = Math.ceil(this._textField.measuredHeight);
				0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (g = this._textField.lineSpacing, this.measuredHeight = (this._textField.size + g) * this._maxDisplayedLines - g);
				this.measuredWidth += k + j;
				this.measuredHeight += i + l;
				this._textField.text = h;
			};
			d.prototype.updateDisplayList = function(h, i) {
				this.$updateDisplayList(h, i);
				var n = isNaN(this._padding) ? 0 : this._padding,
					l = isNaN(this._paddingLeft) ? n : this._paddingLeft,
					k = isNaN(this._paddingRight) ? n : this._paddingRight,
					j = isNaN(this._paddingTop) ? n : this._paddingTop,
					n = isNaN(this._paddingBottom) ? n : this._paddingBottom;
				this._textField.x = l;
				this._textField.y = j;
				if (this.isSpecialCase()) {
					var g = isNaN(this.lastUnscaledWidth) || this.lastUnscaledWidth != h;
					this.lastUnscaledWidth = h;
					if (g) {
						this._oldPreferHeight = this._oldPreferWidth = NaN;
						this.invalidateSize();
						return;
					}
				}
				this._invalidateSizeFlag && this.validateSize();
				this._textField.visible || (this._textField.visible = !0);
				this._textField.width = h - l - k;
				l = i - j - n;
				this._textField.height = l;
				0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (k = this._textField.lineSpacing, this._textField.height = Math.min(l, (this._textField.size + k) * this._maxDisplayedLines - k));
			};
			return d;
		}(c.TextBase);
		c.Label = b;
		b.prototype.__class__ = "egret.gui.Label";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._fillColor = 16777215;
				this._fillAlpha = 1;
				this._strokeColor = 4473924;
				this._strokeAlpha = 0;
				this._strokeWeight = 1;
				this.touchChildren = !1;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new a.Graphics);
					return this._graphics;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._render = function(f) {
				this._graphics && this._graphics._draw(f);
				e.prototype._render.call(this, f);
			};
			Object.defineProperty(d.prototype, "fillColor", {
				get: function() {
					return this._fillColor;
				},
				set: function(f) {
					this._fillColor != f && (this._fillColor = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "fillAlpha", {
				get: function() {
					return this._fillAlpha;
				},
				set: function(f) {
					this._fillAlpha != f && (this._fillAlpha = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "strokeColor", {
				get: function() {
					return this._strokeColor;
				},
				set: function(f) {
					this._strokeColor != f && (this._strokeColor = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "strokeAlpha", {
				get: function() {
					return this._strokeAlpha;
				},
				set: function(f) {
					this._strokeAlpha != f && (this._strokeAlpha = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "strokeWeight", {
				get: function() {
					return this._strokeWeight;
				},
				set: function(f) {
					this._strokeWeight != f && (this._strokeWeight = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._measureBounds = function() {
				var f = e.prototype._measureBounds.call(this),
					g = this.width,
					h = this.height;
				0 < f.x && (f.x = 0);
				0 < f.y && (f.y = 0);
				0 + g > f.right && (f.right = 0 + g);
				0 + h > f.bottom && (f.bottom = 0 + h);
				return f;
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, f);
				var h = this.graphics;
				h.clear();
				h.beginFill(this._fillColor, this._fillAlpha);
				0 < this._strokeAlpha && h.lineStyle(this._strokeWeight, this._strokeColor, this._strokeAlpha, !0, "normal", "square", "miter");
				h.drawRect(0, 0, f, g);
				h.endFill();
			};
			return d;
		}(c.UIComponent);
		c.Rect = b;
		b.prototype.__class__ = "egret.gui.Rect";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.Button";
			}
			__extends(d, e);
			return d;
		}(c.ButtonBase);
		c.Button = b;
		b.prototype.__class__ = "egret.gui.Button";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.ToggleButton";
			}
			__extends(d, e);
			return d;
		}(c.ToggleButtonBase);
		c.ToggleButton = b;
		b.prototype.__class__ = "egret.gui.ToggleButton";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.CheckBox";
			}
			__extends(d, e);
			return d;
		}(c.ToggleButtonBase);
		c.CheckBox = b;
		b.prototype.__class__ = "egret.gui.CheckBox";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.radioButtons = [];
				this._enabled = !0;
				this._name = "_radioButtonGroup" + d.groupCount;
				d.groupCount++;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "enabled", {
				get: function() {
					return this._enabled;
				},
				set: function(f) {
					if (this._enabled != f) {
						for (this._enabled = f, f = 0; f < this.numRadioButtons; f++) {
							this.getRadioButtonAt(f).invalidateSkinState();
						}
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "numRadioButtons", {
				get: function() {
					return this.radioButtons.length;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selectedValue", {
				get: function() {
					return this.selection ? null != this.selection.value ? this.selection.value : this.selection.label : null;
				},
				set: function(f) {
					this._selectedValue = f;
					if (null == f) {
						this._setSelection(null, !1);
					} else {
						for (var g = this.numRadioButtons, i = 0; i < g; i++) {
							var h = this.getRadioButtonAt(i);
							if (h.value == f || h.label == f) {
								this.changeSelection(i, !1);
								this._selectedValue = null;
								c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT);
								break;
							}
						}
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selection", {
				get: function() {
					return this._selection;
				},
				set: function(f) {
					this._selection != f && this._setSelection(f, !1);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getRadioButtonAt = function(f) {
				return 0 <= f && f < this.numRadioButtons ? this.radioButtons[f] : null;
			};
			d.prototype._addInstance = function(f) {
				function g(i, t) {
					var o = i.parent,
						l = t.parent;
					if (!o || !l) {
						return 0;
					}
					var j = i instanceof c.UIComponent ? i.nestLevel : -1,
						q = t instanceof c.UIComponent ? t.nestLevel : -1,
						k = 0,
						m = 0;
					o == l && (k = "getElementIndex" in o && "ownerChanged" in i ? o.getElementIndex(i) : o.getChildIndex(i), m = "getElementIndex" in l && "ownerChanged" in t ? l.getElementIndex(t) : l.getChildIndex(t));
					return j > q || k > m ? 1 : j < q || m > k ? -1 : i == t ? 0 : g(o, l);
				}
				f.addEventListener(a.Event.REMOVED, this.radioButton_removedHandler, this);
				this.radioButtons.push(f);
				this.radioButtons.sort(g);
				for (var h = 0; h < this.radioButtons.length; h++) {
					this.radioButtons[h]._indexNumber = h;
				}
				this._selectedValue && (this.selectedValue = this._selectedValue);
				!0 == f.selected && (this.selection = f);
				f._radioButtonGroup = this;
				f.invalidateSkinState();
				this.dispatchEventWith("numRadioButtonsChanged");
			};
			d.prototype._removeInstance = function(f) {
				this.doRemoveInstance(f, !1);
			};
			d.prototype.doRemoveInstance = function(g, h) {
				"undefined" === typeof h && (h = !0);
				if (g) {
					for (var k = !1, j = 0; j < this.numRadioButtons; j++) {
						var i = this.getRadioButtonAt(j);
						k ? i._indexNumber -= 1 : i == g && (h && g.addEventListener(a.Event.ADDED, this.radioButton_addedHandler, this), g == this._selection && (this._selection = null), g._radioButtonGroup = null, g.invalidateSkinState(), this.radioButtons.splice(j, 1), k = !0, j--);
					}
					k && this.dispatchEventWith("numRadioButtonsChanged");
				}
			};
			d.prototype._setSelection = function(g, h) {
				"undefined" === typeof h && (h = !0);
				if (this._selection != g) {
					if (g) {
						for (var j = this.numRadioButtons, i = 0; i < j; i++) {
							if (g == this.getRadioButtonAt(i)) {
								this.changeSelection(i, h);
								break;
							}
						}
					} else {
						this.selection && (this._selection.selected = !1, this._selection = null, h && this.dispatchEventWith(a.Event.CHANGE));
					}
					c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT);
				}
			};
			d.prototype.changeSelection = function(f, g) {
				"undefined" === typeof g && (g = !0);
				var h = this.getRadioButtonAt(f);
				h && h != this._selection && (this._selection && (this._selection.selected = !1), this._selection = h, this._selection.selected = !0, g && this.dispatchEventWith(a.Event.CHANGE));
			};
			d.prototype.radioButton_addedHandler = function(f) {
				if (f = f.target) {
					f.removeEventListener(a.Event.ADDED, this.radioButton_addedHandler, this), this._addInstance(f);
				}
			};
			d.prototype.radioButton_removedHandler = function(f) {
				if (f = f.target) {
					f.removeEventListener(a.Event.REMOVED, this.radioButton_removedHandler, this), this.doRemoveInstance(f);
				}
			};
			d.groupCount = 0;
			return d;
		}(a.EventDispatcher);
		c.RadioButtonGroup = b;
		b.prototype.__class__ = "egret.gui.RadioButtonGroup";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._indexNumber = 0;
				this._radioButtonGroup = null;
				this.groupChanged = !1;
				this._groupName = "radioGroup";
				this.hostComponentKey = "egret.gui.RadioButton";
				this.groupName = "radioGroup";
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "enabled", {
				get: function() {
					return this._enabled ? !this._radioButtonGroup || this._radioButtonGroup.enabled : !1;
				},
				set: function(f) {
					this._setEnabled(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "group", {
				get: function() {
					if (!this._group && this._groupName) {
						d.automaticRadioButtonGroups || (d.automaticRadioButtonGroups = {});
						var f = d.automaticRadioButtonGroups[this._groupName];
						f || (f = new c.RadioButtonGroup, f._name = this._groupName, d.automaticRadioButtonGroups[this._groupName] = f);
						this._group = f;
					}
					return this._group;
				},
				set: function(f) {
					this._group != f && (this._radioButtonGroup && this._radioButtonGroup._removeInstance(this), this._groupName = (this._group = f) ? this.group._name : "radioGroup", this.groupChanged = !0, this.invalidateProperties(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "groupName", {
				get: function() {
					return this._groupName;
				},
				set: function(f) {
					f && "" != f && (this._groupName = f, this._radioButtonGroup && this._radioButtonGroup._removeInstance(this), this._group = null, this.groupChanged = !0, this.invalidateProperties(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setSelected = function(f) {
				e.prototype._setSelected.call(this, f);
				this.invalidateDisplayList();
			};
			Object.defineProperty(d.prototype, "value", {
				get: function() {
					return this._value;
				},
				set: function(f) {
					this._value != f && (this._value = f, this.selected && this.group && c.UIEvent.dispatchUIEvent(this.group, c.UIEvent.VALUE_COMMIT));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.commitProperties = function() {
				this.groupChanged && (this.addToGroup(), this.groupChanged = !1);
				e.prototype.commitProperties.call(this);
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				this.group && (this.selected ? this._group.selection = this : this.group.selection == this && (this._group.selection = null));
			};
			d.prototype.buttonReleased = function() {
				this.enabled && !this.selected && (this._radioButtonGroup || this.addToGroup(), e.prototype.buttonReleased.call(this), this.group._setSelection(this));
			};
			d.prototype.addToGroup = function() {
				var f = this.group;
				f && f._addInstance(this);
				return f;
			};
			return d;
		}(c.ToggleButtonBase);
		c.RadioButton = b;
		b.prototype.__class__ = "egret.gui.RadioButton";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.elementsContentChanged = this.createChildrenCalled = !1;
				this._elementsContent = [];
			}
			__extends(d, e);
			d.prototype.createChildren = function() {
				e.prototype.createChildren.call(this);
				this.createChildrenCalled = !0;
				this.elementsContentChanged && (this.elementsContentChanged = !1, this.setElementsContent(this._elementsContent));
			};
			d.prototype._getElementsContent = function() {
				return this._elementsContent;
			};
			Object.defineProperty(d.prototype, "elementsContent", {
				set: function(f) {
					null == f && (f = []);
					if (f != this._elementsContent) {
						if (this.createChildrenCalled) {
							this.setElementsContent(f);
						} else {
							this.elementsContentChanged = !0;
							for (var g = this._elementsContent.length - 1; 0 <= g; g--) {
								this._elementRemoved(this._elementsContent[g], g);
							}
							this._elementsContent = f;
						}
					}
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setElementsContent = function(f) {
				var g;
				for (g = this._elementsContent.length - 1; 0 <= g; g--) {
					this._elementRemoved(this._elementsContent[g], g);
				}
				this._elementsContent = f.concat();
				f = this._elementsContent.length;
				for (g = 0; g < f; g++) {
					var h = this._elementsContent[g];
					h.parent && "removeElement" in h.parent ? h.parent.removeElement(h) : h.owner && "removeElement" in h.owner && h.owner.removeElement(h);
					this._elementAdded(h, g);
				}
			};
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return this._elementsContent.length;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getElementAt = function(f) {
				this.checkForRangeError(f);
				return this._elementsContent[f];
			};
			d.prototype.checkForRangeError = function(f, g) {
				"undefined" === typeof g && (g = !1);
				var h = this._elementsContent.length - 1;
				g && h++;
				if (0 > f || f > h) {
					throw new RangeError('\u7d22\u5f15:"' + f + '"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4');
				}
			};
			d.prototype.addElement = function(f) {
				var g = this.numElements;
				f.parent == this && (g = this.numElements - 1);
				return this.addElementAt(f, g);
			};
			d.prototype.addElementAt = function(f, g) {
				if (f == this) {
					return f;
				}
				this.checkForRangeError(g, !0);
				var h = f.owner;
				if (h == this || f.parent == this) {
					return this.setElementIndex(f, g), f;
				}
				h && "removeElement" in h && f.owner.removeElement(f);
				this._elementsContent.splice(g, 0, f);
				this.elementsContentChanged || this._elementAdded(f, g);
				return f;
			};
			d.prototype.removeElement = function(f) {
				return this.removeElementAt(this.getElementIndex(f));
			};
			d.prototype.removeElementAt = function(f) {
				this.checkForRangeError(f);
				var g = this._elementsContent[f];
				this.elementsContentChanged || this._elementRemoved(g, f);
				this._elementsContent.splice(f, 1);
				return g;
			};
			d.prototype.removeAllElements = function() {
				for (var f = this.numElements - 1; 0 <= f; f--) {
					this.removeElementAt(f);
				}
			};
			d.prototype.getElementIndex = function(f) {
				return this._elementsContent.indexOf(f);
			};
			d.prototype.setElementIndex = function(f, g) {
				this.checkForRangeError(g);
				var h = this.getElementIndex(f); - 1 != h && h != g && (this.elementsContentChanged || this._elementRemoved(f, h, !1), this._elementsContent.splice(h, 1), this._elementsContent.splice(g, 0, f), this.elementsContentChanged || this._elementAdded(f, g, !1));
			};
			d.prototype.swapElements = function(f, g) {
				this.swapElementsAt(this.getElementIndex(f), this.getElementIndex(g));
			};
			d.prototype.swapElementsAt = function(f, g) {
				this.checkForRangeError(f);
				this.checkForRangeError(g);
				if (f > g) {
					var j = g;
					g = f;
					f = j;
				} else {
					if (f == g) {
						return;
					}
				}
				var j = this._elementsContent,
					i = j[f],
					h = j[g];
				this.elementsContentChanged || (this._elementRemoved(i, f, !1), this._elementRemoved(h, g, !1));
				j[f] = h;
				j[g] = i;
				this.elementsContentChanged || (this._elementAdded(h, f, !1), this._elementAdded(i, g, !1));
			};
			d.prototype._elementAdded = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				f instanceof a.DisplayObject && this._addToDisplayListAt(f, g, h);
				h && this.hasEventListener(c.ElementExistenceEvent.ELEMENT_ADD) && c.ElementExistenceEvent.dispatchElementExistenceEvent(this, c.ElementExistenceEvent.ELEMENT_ADD, f, g);
				this.invalidateSize();
				this.invalidateDisplayList();
			};
			d.prototype._elementRemoved = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				h && this.hasEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE) && c.ElementExistenceEvent.dispatchElementExistenceEvent(this, c.ElementExistenceEvent.ELEMENT_REMOVE, f, g);
				f instanceof a.DisplayObject && f.parent == this && this._removeFromDisplayList(f, h);
				this.invalidateSize();
				this.invalidateDisplayList();
			};
			d.prototype.addChild = function(f) {
				throw Error("addChild()" + d.errorStr + "addElement()\u4ee3\u66ff");
			};
			d.prototype.addChildAt = function(f, g) {
				throw Error("addChildAt()" + d.errorStr + "addElementAt()\u4ee3\u66ff");
			};
			d.prototype.removeChild = function(f) {
				throw Error("removeChild()" + d.errorStr + "removeElement()\u4ee3\u66ff");
			};
			d.prototype.removeChildAt = function(f) {
				throw Error("removeChildAt()" + d.errorStr + "removeElementAt()\u4ee3\u66ff");
			};
			d.prototype.setChildIndex = function(f, g) {
				throw Error("setChildIndex()" + d.errorStr + "setElementIndex()\u4ee3\u66ff");
			};
			d.prototype.swapChildren = function(f, g) {
				throw Error("swapChildren()" + d.errorStr + "swapElements()\u4ee3\u66ff");
			};
			d.prototype.swapChildrenAt = function(f, g) {
				throw Error("swapChildrenAt()" + d.errorStr + "swapElementsAt()\u4ee3\u66ff");
			};
			d.errorStr = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
			return d;
		}(c.GroupBase);
		c.Group = b;
		b.prototype.__class__ = "egret.gui.Group";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._createAllChildren = !1;
				this.proposedSelectedIndex = d.NO_PROPOSED_SELECTION;
				this._selectedIndex = -1;
				this.childOrderingChanged = this.notifyTabBar = !1;
				this._setLayout(new c.BasicLayout);
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return this._layout;
				},
				set: function(f) {},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "createAllChildren", {
				get: function() {
					return this._createAllChildren;
				},
				set: function(f) {
					if (this._createAllChildren != f && (this._createAllChildren = f)) {
						f = this._getElementsContent();
						for (var g = f.length, i = 0; i < g; i++) {
							var h = f[i];
							h instanceof a.DisplayObject && h.parent != this && (this.childOrderingChanged = !0, this._addToDisplayList(h));
						}
						this.childOrderingChanged && this.invalidateProperties();
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selectedChild", {
				get: function() {
					var f = this.selectedIndex;
					return 0 <= f && f < this.numElements ? this.getElementAt(f) : null;
				},
				set: function(f) {
					f = this.getElementIndex(f);
					0 <= f && f < this.numElements && this._setSelectedIndex(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selectedIndex", {
				get: function() {
					return this.proposedSelectedIndex != d.NO_PROPOSED_SELECTION ? this.proposedSelectedIndex : this._selectedIndex;
				},
				set: function(f) {
					this._setSelectedIndex(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setSelectedIndex = function(f, g) {
				"undefined" === typeof g && (g = !0);
				f != this.selectedIndex && (this.proposedSelectedIndex = f, this.invalidateProperties(), c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT), this.notifyTabBar = this.notifyTabBar || g);
			};
			d.prototype._elementAdded = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				this._createAllChildren && f instanceof a.DisplayObject && this._addToDisplayListAt(f, g, h);
				h && this.hasEventListener(c.ElementExistenceEvent.ELEMENT_ADD) && c.ElementExistenceEvent.dispatchElementExistenceEvent(this, c.ElementExistenceEvent.ELEMENT_ADD, f, g);
				f.visible = !1;
				f.includeInLayout = !1; - 1 == this.selectedIndex ? this._setSelectedIndex(g, !1) : g <= this.selectedIndex && this.initialized && this._setSelectedIndex(this.selectedIndex + 1);
				this.dispatchCoEvent(c.CollectionEventKind.ADD, g, -1, [f.name]);
			};
			d.prototype._elementRemoved = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				e.prototype._elementRemoved.call(this, f, g, h);
				f.visible = !0;
				f.includeInLayout = !0;
				g == this.selectedIndex ? 0 < this.numElements ? 0 == g ? (this.proposedSelectedIndex = 0, this.invalidateProperties()) : this._setSelectedIndex(0, !1) : this._setSelectedIndex(-1) : g < this.selectedIndex && this._setSelectedIndex(this.selectedIndex - 1);
				this.dispatchCoEvent(c.CollectionEventKind.REMOVE, g, -1, [f.name]);
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this.proposedSelectedIndex != d.NO_PROPOSED_SELECTION && (this.commitSelection(this.proposedSelectedIndex), this.proposedSelectedIndex = d.NO_PROPOSED_SELECTION);
				if (this.childOrderingChanged) {
					this.childOrderingChanged = !1;
					for (var g = this._getElementsContent(), j = g.length, i = 0; i < j; i++) {
						var h = g[i];
						h instanceof a.DisplayObject && h.parent == this && this._addToDisplayList(h);
					}
				}
				this.notifyTabBar && (this.notifyTabBar = !0, this.dispatchEventWith("IndexChanged"));
			};
			d.prototype.commitSelection = function(f) {
				0 <= f && f < this.numElements ? (this._selectedIndex = f, this._selectedChild && this._selectedChild.parent == this && (this._selectedChild.visible = !1, this._selectedChild.includeInLayout = !1), this._selectedChild = this.getElementAt(this._selectedIndex), this._selectedChild.visible = !0, this._selectedChild.includeInLayout = !0, this._selectedChild.parent != this && this._selectedChild instanceof a.DisplayObject && (this._addToDisplayList(this._selectedChild), this.childOrderingChanged || (this.childOrderingChanged = !0))) : (this._selectedChild = null, this._selectedIndex = -1);
				this.invalidateSize();
				this.invalidateDisplayList();
			};
			Object.defineProperty(d.prototype, "length", {
				get: function() {
					return this.numElements;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getItemAt = function(f) {
				return (f = this.getElementAt(f)) ? f.name : "";
			};
			d.prototype.getItemIndex = function(f) {
				for (var g = this._getElementsContent(), i = g.length, h = 0; h < i; h++) {
					if (g[h].name === f) {
						return h;
					}
				}
				return -1;
			};
			d.prototype.dispatchCoEvent = function(g, h, k, j, i) {
				"undefined" === typeof g && (g = null);
				"undefined" === typeof h && (h = -1);
				"undefined" === typeof k && (k = -1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = null);
				c.CollectionEvent.dispatchCollectionEvent(this, c.CollectionEvent.COLLECTION_CHANGE, g, h, k, j, i);
			};
			d.NO_PROPOSED_SELECTION = -2;
			return d;
		}(c.Group);
		c.ViewStack = b;
		b.prototype.__class__ = "egret.gui.ViewStack";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.maxWidth = 10000;
				this.minWidth = 0;
				this.maxHeight = 10000;
				this.minHeight = 0;
				this.height = this.width = NaN;
				this._initialized = !1;
				this._elementsContent = [];
				this._states = [];
				this.initialized = !1;
			}
			__extends(d, e);
			d.prototype.createChildren = function() {};
			Object.defineProperty(d.prototype, "hostComponent", {
				get: function() {
					return this._hostComponent;
				},
				set: function(f) {
					this._setHostComponent(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setHostComponent = function(f) {
				if (this._hostComponent != f) {
					var g;
					if (this._hostComponent) {
						for (g = this._elementsContent.length - 1; 0 <= g; g--) {
							this._elementRemoved(this._elementsContent[g], g);
						}
					}
					this._hostComponent = f;
					this._initialized || (this._initialized = !0, this.createChildren());
					if (this._hostComponent) {
						f = this._elementsContent.length;
						for (g = 0; g < f; g++) {
							this._elementAdded(this._elementsContent[g], g);
						}
						this.initializeStates();
						this.currentStateChanged && this.commitCurrentState();
					}
				}
			};
			d.prototype._getElementsContent = function() {
				return this._elementsContent;
			};
			Object.defineProperty(d.prototype, "elementsContent", {
				set: function(f) {
					null == f && (f = []);
					if (f != this._elementsContent) {
						if (this._hostComponent) {
							var g;
							for (g = this._elementsContent.length - 1; 0 <= g; g--) {
								this._elementRemoved(this._elementsContent[g], g);
							}
							this._elementsContent = f.concat();
							f = this._elementsContent.length;
							for (g = 0; g < f; g++) {
								var h = this._elementsContent[g];
								h.parent && "removeElement" in h.parent ? h.parent.removeElement(h) : h.owner && "removeElement" in h.owner && h.owner.removeElement(h);
								this._elementAdded(h, g);
							}
						} else {
							this._elementsContent = f.concat();
						}
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return this._elementsContent.length;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getElementAt = function(f) {
				this.checkForRangeError(f);
				return this._elementsContent[f];
			};
			d.prototype.checkForRangeError = function(f, g) {
				"undefined" === typeof g && (g = !1);
				var h = this._elementsContent.length - 1;
				g && h++;
				if (0 > f || f > h) {
					throw new RangeError('\u7d22\u5f15:"' + f + '"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4');
				}
			};
			d.prototype.addElement = function(f) {
				var g = this.numElements;
				f.owner == this && (g = this.numElements - 1);
				return this.addElementAt(f, g);
			};
			d.prototype.addElementAt = function(f, g) {
				this.checkForRangeError(g, !0);
				var h = f.owner;
				if (h == this) {
					return this.setElementIndex(f, g), f;
				}
				h && "removeElement" in h && h.removeElement(f);
				this._elementsContent.splice(g, 0, f);
				this._hostComponent ? this._elementAdded(f, g) : f.ownerChanged(this);
				return f;
			};
			d.prototype.removeElement = function(f) {
				return this.removeElementAt(this.getElementIndex(f));
			};
			d.prototype.removeElementAt = function(f) {
				this.checkForRangeError(f);
				var g = this._elementsContent[f];
				this._hostComponent ? this._elementRemoved(g, f) : g.ownerChanged(null);
				this._elementsContent.splice(f, 1);
				return g;
			};
			d.prototype.getElementIndex = function(f) {
				return this._elementsContent.indexOf(f);
			};
			d.prototype.setElementIndex = function(f, g) {
				this.checkForRangeError(g);
				var h = this.getElementIndex(f); - 1 != h && h != g && (this._hostComponent && this._elementRemoved(f, h, !1), this._elementsContent.splice(h, 1), this._elementsContent.splice(g, 0, f), this._hostComponent && this._elementAdded(f, g, !1));
			};
			d.prototype._elementAdded = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				f.ownerChanged(this);
				f instanceof a.DisplayObject && this._hostComponent._addToDisplayListAt(f, g, h);
				h && this.hasEventListener(c.ElementExistenceEvent.ELEMENT_ADD) && c.ElementExistenceEvent.dispatchElementExistenceEvent(this, c.ElementExistenceEvent.ELEMENT_ADD, f, g);
				this._hostComponent.invalidateSize();
				this._hostComponent.invalidateDisplayList();
			};
			d.prototype._elementRemoved = function(f, g, h) {
				"undefined" === typeof h && (h = !0);
				h && this.hasEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE) && c.ElementExistenceEvent.dispatchElementExistenceEvent(this, c.ElementExistenceEvent.ELEMENT_REMOVE, f, g);
				f instanceof a.DisplayObject && f.parent == this._hostComponent && this._hostComponent._removeFromDisplayList(f, h);
				f.ownerChanged(null);
				this._hostComponent.invalidateSize();
				this._hostComponent.invalidateDisplayList();
			};
			Object.defineProperty(d.prototype, "states", {
				get: function() {
					return this._states;
				},
				set: function(f) {
					this._setStates(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setStates = function(f) {
				f || (f = []);
				if ("string" == typeof f[0]) {
					for (var g = f.length, i = 0; i < g; i++) {
						var h = new c.State(f[i], []);
						f[i] = h;
					}
				}
				this._states = f;
				this.currentStateChanged = !0;
				this.requestedCurrentState = this._currentState;
				this.hasState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState());
			};
			Object.defineProperty(d.prototype, "currentState", {
				get: function() {
					return this.currentStateChanged ? this.requestedCurrentState : this._currentState ? this._currentState : this.getDefaultState();
				},
				set: function(f) {
					f || (f = this.getDefaultState());
					f != this.currentState && f && this.currentState && (this.requestedCurrentState = f, this.currentStateChanged = !0, this._hostComponent && this.commitCurrentState());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.hasState = function(f) {
				return null != this.getState(f);
			};
			d.prototype.getDefaultState = function() {
				return 0 < this._states.length ? this._states[0].name : null;
			};
			d.prototype.commitCurrentState = function() {
				if (this.currentStateChanged) {
					this.currentStateChanged = !1;
					this.getState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState());
					var f = this._currentState ? this._currentState : "";
					this.hasEventListener(c.StateChangeEvent.CURRENT_STATE_CHANGING) && c.StateChangeEvent.dispatchStateChangeEvent(this, c.StateChangeEvent.CURRENT_STATE_CHANGING, f, this.requestedCurrentState ? this.requestedCurrentState : "");
					this.removeState(this._currentState);
					(this._currentState = this.requestedCurrentState) && this.applyState(this._currentState);
					this.hasEventListener(c.StateChangeEvent.CURRENT_STATE_CHANGE) && c.StateChangeEvent.dispatchStateChangeEvent(this, c.StateChangeEvent.CURRENT_STATE_CHANGE, f, this._currentState ? this._currentState : "");
				}
			};
			d.prototype.getState = function(f) {
				if (!f) {
					return null;
				}
				for (var g = this._states, j = g.length, i = 0; i < j; i++) {
					var h = g[i];
					if (h.name == f) {
						return h;
					}
				}
				return null;
			};
			d.prototype.removeState = function(f) {
				if (f = this.getState(f)) {
					f = f.overrides;
					for (var g = f.length - 1; 0 <= g; g--) {
						f[g].remove(this);
					}
				}
			};
			d.prototype.applyState = function(f) {
				if (f = this.getState(f)) {
					f = f.overrides;
					for (var g = f.length, h = 0; h < g; h++) {
						f[h].apply(this);
					}
				}
			};
			d.prototype.initializeStates = function() {
				if (!this.initialized) {
					this.initialized = !0;
					for (var f = this._states, g = f.length, h = 0; h < g; h++) {
						f[h].initialize(this);
					}
				}
			};
			return d;
		}(a.EventDispatcher);
		c.Skin = b;
		b.prototype.__class__ = "egret.gui.Skin";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.useVirtualLayoutChanged = !1;
				this.rendererToClassMap = [];
				this.freeRenderers = [];
				this.dataProviderChanged = this.createNewRendererFlag = !1;
				this.recyclerDic = [];
				this.typicalItemChanged = this.virtualLayoutUnderway = this.itemRendererSkinNameChange = !1;
				this.indexToRenderer = [];
				this.renderersBeingUpdated = this.cleanFreeRenderer = !1;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return this._layout;
				},
				set: function(f) {
					f != this.layout && (this.layout && (this.layout.typicalLayoutRect = null, this.layout.removeEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)), this.layout && f && this.layout.useVirtualLayout != f.useVirtualLayout && this.changeUseVirtualLayout(), this._setLayout(f), f && (f.typicalLayoutRect = this.typicalLayoutRect, f.addEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.layout_useVirtualLayoutChangedHandler = function(f) {
				this.changeUseVirtualLayout();
			};
			d.prototype.setVirtualElementIndicesInView = function(f, g) {
				if (this.layout && this.layout.useVirtualLayout) {
					this.virtualRendererIndices = [];
					for (var i = f; i <= g; i++) {
						this.virtualRendererIndices.push(i);
					}
					for (var h in this.indexToRenderer) {
						h = parseInt(h), -1 == this.virtualRendererIndices.indexOf(h) && this.freeRendererByIndex(h);
					}
				}
			};
			d.prototype.getVirtualElementAt = function(f) {
				if (0 > f || f >= this.dataProvider.length) {
					return null;
				}
				var g = this.indexToRenderer[f];
				if (!g) {
					var g = this.dataProvider.getItemAt(f),
						h = this.createVirtualRenderer(f);
					this.indexToRenderer[f] = h;
					this.updateRenderer(h, f, g);
					this.createNewRendererFlag && ("validateNow" in h && h.validateNow(), this.createNewRendererFlag = !1, c.RendererExistenceEvent.dispatchRendererExistenceEvent(this, c.RendererExistenceEvent.RENDERER_ADD, h, f, g));
					g = h;
				}
				return g;
			};
			d.prototype.freeRendererByIndex = function(f) {
				if (this.indexToRenderer[f]) {
					var g = this.indexToRenderer[f];
					delete this.indexToRenderer[f];
					g && g instanceof a.DisplayObject && this.doFreeRenderer(g);
				}
			};
			d.prototype.doFreeRenderer = function(f) {
				var g = this.rendererToClassMap[f.hashCode].hashCode;
				this.freeRenderers[g] || (this.freeRenderers[g] = []);
				this.freeRenderers[g].push(f);
				f.visible = !1;
			};
			d.prototype.invalidateSize = function() {
				this.createNewRendererFlag || e.prototype.invalidateSize.call(this);
			};
			d.prototype.createVirtualRenderer = function(f) {
				f = this.dataProvider.getItemAt(f);
				f = this.itemToRendererClass(f);
				var g = f.hashCode,
					h = this.freeRenderers;
				if (h[g] && 0 < h[g].length) {
					return f = h[g].pop(), f.visible = !0, f;
				}
				this.createNewRendererFlag = !0;
				return this.createOneRenderer(f);
			};
			d.prototype.createOneRenderer = function(f) {
				var g, i = f.hashCode,
					h = this.recyclerDic[i];
				h && (g = h.pop(), 0 == h.length && delete this.recyclerDic[i]);
				g || (g = f.newInstance(), this.rendererToClassMap[g.hashCode] = f);
				if (!(g && g instanceof a.DisplayObject)) {
					return null;
				}
				this._itemRendererSkinName && this.setItemRenderSkinName(g);
				this._addToDisplayList(g);
				g.setLayoutBoundsSize(NaN, NaN);
				return g;
			};
			d.prototype.setItemRenderSkinName = function(f) {
				f && (f ? f._skinNameExplicitlySet || (f.skinName = this._itemRendererSkinName) : f && !f.skinName && (f.skinName = this._itemRendererSkinName));
			};
			d.prototype.finishVirtualLayout = function() {
				if (this.virtualLayoutUnderway) {
					var f = this.virtualLayoutUnderway = !1,
						g;
					for (g in this.freeRenderers) {
						if (0 < this.freeRenderers[g].length) {
							f = !0;
							break;
						}
					}
					f && (this.cleanTimer || (this.cleanTimer = new a.Timer(3000, 1), this.cleanTimer.addEventListener(a.TimerEvent.TIMER, this.cleanAllFreeRenderer, this)), this.cleanTimer.reset(), this.cleanTimer.start());
				}
			};
			d.prototype.cleanAllFreeRenderer = function(g) {
				var h = this.freeRenderers,
					l;
				for (l in h) {
					for (var k = h[l], j = k.length, i = 0; i < j; i++) {
						g = k[i], g.visible = !0, this.recycle(g);
					}
				}
				this.freeRenderers = [];
				this.cleanFreeRenderer = !1;
			};
			d.prototype.getElementIndicesInView = function() {
				return this.layout && this.layout.useVirtualLayout ? this.virtualRendererIndices ? this.virtualRendererIndices : [] : e.prototype.getElementIndicesInView.call(this);
			};
			d.prototype.changeUseVirtualLayout = function() {
				this.cleanFreeRenderer = this.useVirtualLayoutChanged = !0;
				this.removeDataProviderListener();
				this.invalidateProperties();
			};
			Object.defineProperty(d.prototype, "dataProvider", {
				get: function() {
					return this._dataProvider;
				},
				set: function(f) {
					this._dataProvider != f && (this.removeDataProviderListener(), this._dataProvider = f, this.cleanFreeRenderer = this.dataProviderChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.removeDataProviderListener = function() {
				this._dataProvider && this._dataProvider.removeEventListener(c.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this);
			};
			d.prototype.onCollectionChange = function(f) {
				switch (f.kind) {
					case c.CollectionEventKind.ADD:
						this.itemAddedHandler(f.items, f.location);
						break;
					case c.CollectionEventKind.MOVE:
						this.itemMovedHandler(f.items[0], f.location, f.oldLocation);
						break;
					case c.CollectionEventKind.REMOVE:
						this.itemRemovedHandler(f.items, f.location);
						break;
					case c.CollectionEventKind.UPDATE:
						this.itemUpdatedHandler(f.items[0], f.location);
						break;
					case c.CollectionEventKind.REPLACE:
						this.itemRemoved(f.oldItems[0], f.location);
						this.itemAdded(f.items[0], f.location);
						break;
					case c.CollectionEventKind.RESET:
					case c.CollectionEventKind.REFRESH:
						if (this.layout && this.layout.useVirtualLayout) {
							for (var g in this.indexToRenderer) {
								g = parseInt(g), this.freeRendererByIndex(g);
							}
						}
						this.dataProviderChanged = !0;
						this.invalidateProperties();
				}
				this.invalidateSize();
				this.invalidateDisplayList();
			};
			d.prototype.itemAddedHandler = function(f, g) {
				for (var i = f.length, h = 0; h < i; h++) {
					this.itemAdded(f[h], g + h);
				}
				this.resetRenderersIndices();
			};
			d.prototype.itemMovedHandler = function(f, g, h) {
				this.itemRemoved(f, h);
				this.itemAdded(f, g);
				this.resetRenderersIndices();
			};
			d.prototype.itemRemovedHandler = function(f, g) {
				for (var h = f.length - 1; 0 <= h; h--) {
					this.itemRemoved(f[h], g + h);
				}
				this.resetRenderersIndices();
			};
			d.prototype.itemAdded = function(g, h) {
				this.layout && this.layout.elementAdded(h);
				if (this.layout && this.layout.useVirtualLayout) {
					var m = this.virtualRendererIndices;
					if (m) {
						for (var l = m.length, j = 0; j < l; j++) {
							var i = m[j];
							i >= h && (m[j] = i + 1);
						}
						this.indexToRenderer.splice(h, 0, null);
					}
				} else {
					m = this.itemToRendererClass(g), m = this.createOneRenderer(m), this.indexToRenderer.splice(h, 0, m), m && (this.updateRenderer(m, h, g), c.RendererExistenceEvent.dispatchRendererExistenceEvent(this, c.RendererExistenceEvent.RENDERER_ADD, m, h, g));
				}
			};
			d.prototype.itemRemoved = function(i, j) {
				this.layout && this.layout.elementRemoved(j);
				var p = this.virtualRendererIndices;
				if (p && 0 < p.length) {
					for (var o = -1, n = p.length, l = 0; l < n; l++) {
						var g = p[l];
						g == j ? o = l : g > j && (p[l] = g - 1);
					} - 1 != o && p.splice(o, 1);
				}
				p = this.indexToRenderer[j];
				this.indexToRenderer.length > j && this.indexToRenderer.splice(j, 1);
				c.RendererExistenceEvent.dispatchRendererExistenceEvent(this, c.RendererExistenceEvent.RENDERER_REMOVE, p, j, i);
				p && p instanceof a.DisplayObject && this.recycle(p);
			};
			d.prototype.recycle = function(f) {
				this._removeFromDisplayList(f);
				"ownerChanged" in f && f.ownerChanged(null);
				var g = this.rendererToClassMap[f.hashCode].hashCode;
				this.recyclerDic[g] || (this.recyclerDic[g] = new a.Recycler);
				this.recyclerDic[g].push(f);
			};
			d.prototype.resetRenderersIndices = function() {
				if (0 != this.indexToRenderer.length) {
					if (this.layout && this.layout.useVirtualLayout) {
						for (var f = this.virtualRendererIndices, g = f.length, i = 0; i < g; i++) {
							var h = f[i];
							this.resetRendererItemIndex(h);
						}
					} else {
						for (f = this.indexToRenderer.length, h = 0; h < f; h++) {
							this.resetRendererItemIndex(h);
						}
					}
				}
			};
			d.prototype.itemUpdatedHandler = function(f, g) {
				if (!this.renderersBeingUpdated) {
					var h = this.indexToRenderer[g];
					h && this.updateRenderer(h, g, f);
				}
			};
			d.prototype.resetRendererItemIndex = function(f) {
				var g = this.indexToRenderer[f];
				g && (g.itemIndex = f);
			};
			Object.defineProperty(d.prototype, "itemRenderer", {
				get: function() {
					return this._itemRenderer;
				},
				set: function(f) {
					this._itemRenderer !== f && (this._itemRenderer = f, this.cleanFreeRenderer = this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "itemRendererSkinName", {
				get: function() {
					return this._itemRendererSkinName;
				},
				set: function(f) {
					this._itemRendererSkinName != f && (this._itemRendererSkinName = f) && this.initialized && (this.itemRendererSkinNameChange = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "itemRendererFunction", {
				get: function() {
					return this._itemRendererFunction;
				},
				set: function(f) {
					this._itemRendererFunction != f && (this._itemRendererFunction = f, this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.itemToRendererClass = function(f) {
				null != this._itemRendererFunction ? (f = this._itemRendererFunction(f), f || (f = this._itemRenderer)) : f = this._itemRenderer;
				return f ? f : d.defaultRendererFactory;
			};
			d.prototype.createChildren = function() {
				if (!this.layout) {
					var f = new c.VerticalLayout;
					f.gap = 0;
					f.horizontalAlign = a.HorizontalAlign.CONTENT_JUSTIFY;
					this.layout = f;
				}
				e.prototype.createChildren.call(this);
			};
			d.prototype.commitProperties = function() {
				if (this.itemRendererChanged || this.dataProviderChanged || this.useVirtualLayoutChanged) {
					this.removeAllRenderers(), this.layout && this.layout.clearVirtualLayoutCache(), this.setTypicalLayoutRect(null), this.itemRendererChanged = this.useVirtualLayoutChanged = !1, this._dataProvider && this._dataProvider.addEventListener(c.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this), this.layout && this.layout.useVirtualLayout ? (this.invalidateSize(), this.invalidateDisplayList()) : this.createRenderers(), this.dataProviderChanged && (this.dataProviderChanged = !1, this.verticalScrollPosition = this.horizontalScrollPosition = 0);
				}
				e.prototype.commitProperties.call(this);
				this.typicalItemChanged && (this.typicalItemChanged = !1, this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize()));
				if (this.itemRendererSkinNameChange) {
					this.itemRendererSkinNameChange = !1;
					for (var g = this.indexToRenderer.length, i = 0; i < g; i++) {
						this.setItemRenderSkinName(this.indexToRenderer[i]);
					}
					var l = this.freeRenderers,
						k;
					for (k in l) {
						var j = l[k];
						if (j) {
							for (g = j.length, i = 0; i < g; i++) {
								this.setItemRenderSkinName(j[i]);
							}
						}
					}
				}
			};
			d.prototype.measure = function() {
				this.layout && this.layout.useVirtualLayout && this.ensureTypicalLayoutElement();
				e.prototype.measure.call(this);
			};
			d.prototype.updateDisplayList = function(f, g) {
				this._layoutInvalidateDisplayListFlag && this.layout && this.layout.useVirtualLayout && (this.virtualLayoutUnderway = !0, this.ensureTypicalLayoutElement());
				e.prototype.updateDisplayList.call(this, f, g);
				this.virtualLayoutUnderway && this.finishVirtualLayout();
			};
			d.prototype.ensureTypicalLayoutElement = function() {
				!this.layout.typicalLayoutRect && this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize());
			};
			d.prototype.measureRendererSize = function() {
				if (this.typicalItem) {
					var f = this.itemToRendererClass(this.typicalItem);
					if (f = this.createOneRenderer(f)) {
						this.createNewRendererFlag = !0;
						this.updateRenderer(f, 0, this.typicalItem);
						"validateNow" in f && f.validateNow();
						var g = new a.Rectangle(0, 0, f.preferredWidth, f.preferredHeight);
						this.recycle(f);
						this.setTypicalLayoutRect(g);
						this.createNewRendererFlag = !1;
					} else {
						this.setTypicalLayoutRect(null);
					}
				} else {
					this.setTypicalLayoutRect(null);
				}
			};
			d.prototype.setTypicalLayoutRect = function(f) {
				this.typicalLayoutRect = f;
				this.layout && (this.layout.typicalLayoutRect = f);
			};
			d.prototype.removeAllRenderers = function() {
				for (var f = this.indexToRenderer.length, g, h = 0; h < f; h++) {
					if (g = this.indexToRenderer[h]) {
						this.recycle(g), c.RendererExistenceEvent.dispatchRendererExistenceEvent(this, c.RendererExistenceEvent.RENDERER_REMOVE, g, g.itemIndex, g.data);
					}
				}
				this.indexToRenderer = [];
				this.virtualRendererIndices = null;
				this.cleanFreeRenderer && this.cleanAllFreeRenderer();
			};
			d.prototype.createRenderers = function() {
				if (this._dataProvider) {
					for (var g = 0, h = this._dataProvider.length, k = 0; k < h; k++) {
						var j = this._dataProvider.getItemAt(k),
							i = this.itemToRendererClass(j);
						if (i = this.createOneRenderer(i)) {
							this.indexToRenderer[g] = i, this.updateRenderer(i, g, j), c.RendererExistenceEvent.dispatchRendererExistenceEvent(this, c.RendererExistenceEvent.RENDERER_ADD, i, g, j), g++;
						}
					}
				}
			};
			d.prototype.updateRenderer = function(f, g, h) {
				this.renderersBeingUpdated = !0;
				this._rendererOwner ? f = this._rendererOwner.updateRenderer(f, g, h) : ("ownerChanged" in f && f.ownerChanged(this), f.itemIndex = g, f.label = this.itemToLabel(h), f.data = h);
				this.renderersBeingUpdated = !1;
				return f;
			};
			d.prototype.itemToLabel = function(f) {
				return f ? f.toString() : " ";
			};
			d.prototype.getElementAt = function(f) {
				return this.indexToRenderer[f];
			};
			d.prototype.getElementIndex = function(f) {
				return f ? this.indexToRenderer.indexOf(f) : -1;
			};
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return this._dataProvider ? this._dataProvider.length : 0;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.addChild = function(f) {
				throw Error("addChild()" + d.errorStr + "addElement()\u4ee3\u66ff");
			};
			d.prototype.addChildAt = function(f, g) {
				throw Error("addChildAt()" + d.errorStr + "addElementAt()\u4ee3\u66ff");
			};
			d.prototype.removeChild = function(f) {
				throw Error("removeChild()" + d.errorStr + "removeElement()\u4ee3\u66ff");
			};
			d.prototype.removeChildAt = function(f) {
				throw Error("removeChildAt()" + d.errorStr + "removeElementAt()\u4ee3\u66ff");
			};
			d.prototype.setChildIndex = function(f, g) {
				throw Error("setChildIndex()" + d.errorStr + "setElementIndex()\u4ee3\u66ff");
			};
			d.prototype.swapChildren = function(f, g) {
				throw Error("swapChildren()" + d.errorStr + "swapElements()\u4ee3\u66ff");
			};
			d.prototype.swapChildrenAt = function(f, g) {
				throw Error("swapChildrenAt()" + d.errorStr + "swapElementsAt()\u4ee3\u66ff");
			};
			d.defaultRendererFactory = new c.ClassFactory(c.ItemRenderer);
			d.errorStr = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
			return d;
		}(c.GroupBase);
		c.DataGroup = b;
		b.prototype.__class__ = "egret.gui.DataGroup";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.contentGroupProperties = {};
				this.hostComponentKey = "egret.gui.SkinnableContainer";
			}
			__extends(d, e);
			d.prototype._getCurrentContentGroup = function() {
				return null == this.contentGroup ? (null == this._placeHolderGroup && (this._placeHolderGroup = new c.Group, this._placeHolderGroup.visible = !1, this._addToDisplayList(this._placeHolderGroup)), this._placeHolderGroup.addEventListener(c.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this), this._placeHolderGroup.addEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this), this._placeHolderGroup) : this.contentGroup;
			};
			Object.defineProperty(d.prototype, "elementsContent", {
				set: function(f) {
					this._getCurrentContentGroup().elementsContent = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return this._getCurrentContentGroup().numElements;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getElementAt = function(f) {
				return this._getCurrentContentGroup().getElementAt(f);
			};
			d.prototype.addElement = function(f) {
				return this._getCurrentContentGroup().addElement(f);
			};
			d.prototype.addElementAt = function(f, g) {
				return this._getCurrentContentGroup().addElementAt(f, g);
			};
			d.prototype.removeElement = function(f) {
				return this._getCurrentContentGroup().removeElement(f);
			};
			d.prototype.removeElementAt = function(f) {
				return this._getCurrentContentGroup().removeElementAt(f);
			};
			d.prototype.removeAllElements = function() {
				this._getCurrentContentGroup().removeAllElements();
			};
			d.prototype.getElementIndex = function(f) {
				return this._getCurrentContentGroup().getElementIndex(f);
			};
			d.prototype.setElementIndex = function(f, g) {
				this._getCurrentContentGroup().setElementIndex(f, g);
			};
			d.prototype.swapElements = function(f, g) {
				this._getCurrentContentGroup().swapElements(f, g);
			};
			d.prototype.swapElementsAt = function(f, g) {
				this._getCurrentContentGroup().swapElementsAt(f, g);
			};
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return null != this.contentGroup ? this.contentGroup.layout : this.contentGroupProperties.layout;
				},
				set: function(f) {
					null != this.contentGroup ? this.contentGroup.layout = f : this.contentGroupProperties.layout = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.partAdded = function(g, i) {
				e.prototype.partAdded.call(this, g, i);
				if (i == this.contentGroup) {
					void 0 !== this.contentGroupProperties.layout && (this.contentGroup.layout = this.contentGroupProperties.layout, this.contentGroupProperties = {});
					if (this._placeHolderGroup) {
						this._placeHolderGroup.removeEventListener(c.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this);
						this._placeHolderGroup.removeEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this);
						for (var l = this._placeHolderGroup._getElementsContent().concat(), k = this._placeHolderGroup.numElements; 0 < k; k--) {
							var j = this._placeHolderGroup.removeElementAt(0);
							j.ownerChanged(null);
						}
						this._removeFromDisplayList(this._placeHolderGroup);
						this.contentGroup.elementsContent = l;
						for (k = l.length - 1; 0 <= k; k--) {
							j = l[k], j.ownerChanged(this);
						}
						this._placeHolderGroup = null;
					}
					this.contentGroup.addEventListener(c.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this);
					this.contentGroup.addEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this);
				}
			};
			d.prototype.partRemoved = function(f, g) {
				e.prototype.partRemoved.call(this, f, g);
				if (g == this.contentGroup && (this.contentGroup.removeEventListener(c.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this), this.contentGroup.removeEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this), this.contentGroupProperties.layout = this.contentGroup.layout, this.contentGroup.layout = null, 0 < this.contentGroup.numElements)) {
					for (this._placeHolderGroup = new c.Group; 0 < this.contentGroup.numElements;) {
						this._placeHolderGroup.addElement(this.contentGroup.getElementAt(0));
					}
					this._placeHolderGroup.addEventListener(c.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this);
					this._placeHolderGroup.addEventListener(c.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this);
				}
			};
			d.prototype._contentGroup_elementAddedHandler = function(f) {
				f.element.ownerChanged(this);
				this.dispatchEvent(f);
			};
			d.prototype._contentGroup_elementRemovedHandler = function(f) {
				f.element.ownerChanged(null);
				this.dispatchEvent(f);
			};
			return d;
		}(c.SkinnableComponent);
		c.SkinnableContainer = b;
		b.prototype.__class__ = "egret.gui.SkinnableContainer";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._dataGroupProperties = {};
				this.hostComponentKey = "egret.gui.SkinnableDataContainer";
			}
			__extends(d, e);
			d.prototype.updateRenderer = function(f, g, h) {
				"ownerChanged" in f && f.ownerChanged(this);
				f.itemIndex = g;
				f.label = this.itemToLabel(h);
				f.data = h;
				return f;
			};
			d.prototype.itemToLabel = function(f) {
				return null !== f ? f.toString() : " ";
			};
			Object.defineProperty(d.prototype, "dataProvider", {
				get: function() {
					return this._getDataProvider();
				},
				set: function(f) {
					this._setDataProvider(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._getDataProvider = function() {
				return null != this.dataGroup ? this.dataGroup.dataProvider : this._dataGroupProperties.dataProvider;
			};
			d.prototype._setDataProvider = function(f) {
				null == this.dataGroup ? this._dataGroupProperties.dataProvider = f : (this.dataGroup.dataProvider = f, this._dataGroupProperties.dataProvider = !0);
			};
			Object.defineProperty(d.prototype, "itemRenderer", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRenderer : this._dataGroupProperties.itemRenderer;
				},
				set: function(f) {
					null == this.dataGroup ? this._dataGroupProperties.itemRenderer = f : (this.dataGroup.itemRenderer = f, this._dataGroupProperties.itemRenderer = !0);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "itemRendererSkinName", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRendererSkinName : this._dataGroupProperties.itemRendererSkinName;
				},
				set: function(f) {
					null == this.dataGroup ? this._dataGroupProperties.itemRendererSkinName = f : (this.dataGroup.itemRendererSkinName = f, this._dataGroupProperties.itemRendererSkinName = !0);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "itemRendererFunction", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRendererFunction : this._dataGroupProperties.itemRendererFunction;
				},
				set: function(f) {
					null == this.dataGroup ? this._dataGroupProperties.itemRendererFunction = f : (this.dataGroup.itemRendererFunction = f, this._dataGroupProperties.itemRendererFunction = !0);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return this.dataGroup ? this.dataGroup.layout : this._dataGroupProperties.layout;
				},
				set: function(f) {
					this._setLayout(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setLayout = function(f) {
				null == this.dataGroup ? this._dataGroupProperties.layout = f : (this.dataGroup.layout = f, this._dataGroupProperties.layout = !0);
			};
			d.prototype.partAdded = function(g, h) {
				e.prototype.partAdded.call(this, g, h);
				if (h == this.dataGroup) {
					var i = {};
					void 0 !== this._dataGroupProperties.layout && (this.dataGroup.layout = this._dataGroupProperties.layout, i.layout = !0);
					void 0 !== this._dataGroupProperties.dataProvider && (this.dataGroup.dataProvider = this._dataGroupProperties.dataProvider, i.dataProvider = !0);
					void 0 !== this._dataGroupProperties.itemRenderer && (this.dataGroup.itemRenderer = this._dataGroupProperties.itemRenderer, i.itemRenderer = !0);
					void 0 !== this._dataGroupProperties.itemRendererSkinName && (this.dataGroup.itemRendererSkinName = this._dataGroupProperties.itemRendererSkinName, i.itemRendererSkinName = !0);
					void 0 !== this._dataGroupProperties.itemRendererFunction && (this.dataGroup.itemRendererFunction = this._dataGroupProperties.itemRendererFunction, i.itemRendererFunction = !0);
					this.dataGroup._rendererOwner = this;
					this._dataGroupProperties = i;
					this.hasEventListener(c.RendererExistenceEvent.RENDERER_ADD) && this.dataGroup.addEventListener(c.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this);
					this.hasEventListener(c.RendererExistenceEvent.RENDERER_REMOVE) && this.dataGroup.addEventListener(c.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this);
				}
			};
			d.prototype.partRemoved = function(g, h) {
				e.prototype.partRemoved.call(this, g, h);
				if (h == this.dataGroup) {
					this.dataGroup.removeEventListener(c.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this);
					this.dataGroup.removeEventListener(c.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this);
					var i = {};
					this._dataGroupProperties.layout && (i.layout = this.dataGroup.layout);
					this._dataGroupProperties.dataProvider && (i.dataProvider = this.dataGroup.dataProvider);
					this._dataGroupProperties.itemRenderer && (i.itemRenderer = this.dataGroup.itemRenderer);
					this._dataGroupProperties.itemRendererSkinName && (i.itemRendererSkinName = this.dataGroup.itemRendererSkinName);
					this._dataGroupProperties.itemRendererFunction && (i.itemRendererFunction = this.dataGroup.itemRendererFunction);
					this._dataGroupProperties = i;
					this.dataGroup._rendererOwner = null;
					this.dataGroup.dataProvider = null;
					this.dataGroup.layout = null;
				}
			};
			d.prototype.addEventListener = function(g, i, l, k, j) {
				"undefined" === typeof k && (k = !1);
				"undefined" === typeof j && (j = 0);
				e.prototype.addEventListener.call(this, g, i, l, k, j);
				g == c.RendererExistenceEvent.RENDERER_ADD && this.dataGroup && this.dataGroup.addEventListener(c.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this);
				g == c.RendererExistenceEvent.RENDERER_REMOVE && this.dataGroup && this.dataGroup.addEventListener(c.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this);
			};
			d.prototype.removeEventListener = function(g, h, j, i) {
				"undefined" === typeof i && (i = !1);
				e.prototype.removeEventListener.call(this, g, h, j, i);
				g == c.RendererExistenceEvent.RENDERER_ADD && this.dataGroup && (this.hasEventListener(c.RendererExistenceEvent.RENDERER_ADD) || this.dataGroup.removeEventListener(c.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this));
				g == c.RendererExistenceEvent.RENDERER_REMOVE && this.dataGroup && (this.hasEventListener(c.RendererExistenceEvent.RENDERER_REMOVE) || this.dataGroup.removeEventListener(c.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this));
			};
			return d;
		}(c.SkinnableComponent);
		c.SkinnableDataContainer = b;
		b.prototype.__class__ = "egret.gui.SkinnableDataContainer";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._doingWholesaleChanges = !1;
				this._labelField = "label";
				this.requireSelectionChanged = this._requireSelection = !1;
				this._proposedSelectedIndex = d.NO_PROPOSED_SELECTION;
				this._selectedIndex = d.NO_SELECTION;
				this.selectedIndexAdjusted = this._useVirtualLayout = this._dispatchChangeAfterSelection = this._allowCustomSelectedItem = !1;
			}
			__extends(d, e);
			d.prototype._setDataProvider = function(f) {
				this.dataProvider && this.dataProvider.removeEventListener(c.CollectionEvent.COLLECTION_CHANGE, this.dataProvider_collectionChangeHandler, this);
				this._doingWholesaleChanges = this.dataProviderChanged = !0;
				f && f.addEventListener(c.CollectionEvent.COLLECTION_CHANGE, this.dataProvider_collectionChangeHandler, this);
				e.prototype._setDataProvider.call(this, f);
				this.invalidateProperties();
			};
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return this.dataGroup ? this.dataGroup.layout : this._dataGroupProperties.layout;
				},
				set: function(f) {
					f && this.useVirtualLayout && (f.useVirtualLayout = !0);
					this._setLayout(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "labelField", {
				get: function() {
					return this._labelField;
				},
				set: function(f) {
					this._setLabelField(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setLabelField = function(f) {
				f != this._labelField && (this._labelField = f, this.labelFieldOrFunctionChanged = !0, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "labelFunction", {
				get: function() {
					return this._labelFunction;
				},
				set: function(f) {
					this._setLabelFunction(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setLabelFunction = function(f) {
				f != this._labelFunction && (this._labelFunction = f, this.labelFieldOrFunctionChanged = !0, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "requireSelection", {
				get: function() {
					return this._requireSelection;
				},
				set: function(f) {
					this._setRequireSelection(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setRequireSelection = function(f) {
				f != this._requireSelection && (this._requireSelection = f) && (this.requireSelectionChanged = !0, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "selectedIndex", {
				get: function() {
					return this._getSelectedIndex();
				},
				set: function(f) {
					this._setSelectedIndex(f, !1);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._getSelectedIndex = function() {
				return this._proposedSelectedIndex != d.NO_PROPOSED_SELECTION ? this._proposedSelectedIndex : this._selectedIndex;
			};
			d.prototype._setSelectedIndex = function(f, g) {
				"undefined" === typeof g && (g = !1);
				f != this.selectedIndex && (g && (this._dispatchChangeAfterSelection = this._dispatchChangeAfterSelection || g), this._proposedSelectedIndex = f, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "selectedItem", {
				get: function() {
					return void 0 !== this._pendingSelectedItem ? this._pendingSelectedItem : this._allowCustomSelectedItem && this.selectedIndex == d.CUSTOM_SELECTED_ITEM ? this._selectedItem : this.selectedIndex == d.NO_SELECTION || null == this.dataProvider ? void 0 : this.dataProvider.length > this.selectedIndex ? this.dataProvider.getItemAt(this.selectedIndex) : void 0;
				},
				set: function(f) {
					this._setSelectedItem(f, !1);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setSelectedItem = function(f, g) {
				"undefined" === typeof g && (g = !1);
				this.selectedItem !== f && (g && (this._dispatchChangeAfterSelection = this._dispatchChangeAfterSelection || g), this._pendingSelectedItem = f, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "useVirtualLayout", {
				get: function() {
					return this._getUseVirtualLayout();
				},
				set: function(f) {
					this._setUseVirtualLayout(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._getUseVirtualLayout = function() {
				return this.layout ? this.layout.useVirtualLayout : this._useVirtualLayout;
			};
			d.prototype._setUseVirtualLayout = function(f) {
				f != this.useVirtualLayout && (this._useVirtualLayout = f, this.layout && (this.layout.useVirtualLayout = f));
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this.dataProviderChanged && (this._doingWholesaleChanges = this.dataProviderChanged = !1, 0 <= this.selectedIndex && this.dataProvider && this.selectedIndex < this.dataProvider.length ? this.itemSelected(this.selectedIndex, !0) : this.requireSelection ? this._proposedSelectedIndex = 0 : this._setSelectedIndex(-1, !1));
				this.requireSelectionChanged && (this.requireSelectionChanged = !1, this.requireSelection && this.selectedIndex == d.NO_SELECTION && this.dataProvider && 0 < this.dataProvider.length && (this._proposedSelectedIndex = 0));
				void 0 !== this._pendingSelectedItem && (this._proposedSelectedIndex = this.dataProvider ? this.dataProvider.getItemIndex(this._pendingSelectedItem) : d.NO_SELECTION, this._allowCustomSelectedItem && -1 == this._proposedSelectedIndex && (this._proposedSelectedIndex = d.CUSTOM_SELECTED_ITEM, this._selectedItem = this._pendingSelectedItem), this._pendingSelectedItem = void 0);
				var g = !1;
				this._proposedSelectedIndex != d.NO_PROPOSED_SELECTION && (g = this.commitSelection());
				this.selectedIndexAdjusted && (this.selectedIndexAdjusted = !1, g || c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT));
				if (this.labelFieldOrFunctionChanged) {
					if (null != this.dataGroup) {
						if (this.layout && this.layout.useVirtualLayout) {
							for (var j = this.dataGroup.getElementIndicesInView(), i = j.length, h = 0; h < i; h++) {
								g = j[h], this.updateRendererLabelProperty(g);
							}
						} else {
							for (j = this.dataGroup.numElements, g = 0; g < j; g++) {
								this.updateRendererLabelProperty(g);
							}
						}
					}
					this.labelFieldOrFunctionChanged = !1;
				}
			};
			d.prototype.updateRendererLabelProperty = function(f) {
				if (f = this.dataGroup.getElementAt(f)) {
					f.label = this.itemToLabel(f.data);
				}
			};
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.dataGroup && (this._useVirtualLayout && this.dataGroup.layout && (this.dataGroup.layout.useVirtualLayout = !0), this.dataGroup.addEventListener(c.RendererExistenceEvent.RENDERER_ADD, this.dataGroup_rendererAddHandler, this), this.dataGroup.addEventListener(c.RendererExistenceEvent.RENDERER_REMOVE, this.dataGroup_rendererRemoveHandler, this));
			};
			d.prototype.partRemoved = function(f, g) {
				e.prototype.partRemoved.call(this, f, g);
				g == this.dataGroup && (this.dataGroup.removeEventListener(c.RendererExistenceEvent.RENDERER_ADD, this.dataGroup_rendererAddHandler, this), this.dataGroup.removeEventListener(c.RendererExistenceEvent.RENDERER_REMOVE, this.dataGroup_rendererRemoveHandler, this));
			};
			d.prototype.updateRenderer = function(f, g, h) {
				this.itemSelected(g, this._isItemIndexSelected(g));
				return e.prototype.updateRenderer.call(this, f, g, h);
			};
			d.prototype.itemToLabel = function(f) {
				if (null != this._labelFunction) {
					return this._labelFunction(f);
				}
				if ("string" == typeof f) {
					return f;
				}
				if (f instanceof a.XML) {
					try {
						0 != f[this.labelField].length() && (f = f[this.labelField]);
					} catch (g) {}
				} else {
					if (f instanceof Object) {
						try {
							null != f[this.labelField] && (f = f[this.labelField]);
						} catch (i) {}
					}
				} if ("string" == typeof f) {
					return f;
				}
				try {
					if (null !== f) {
						return f.toString();
					}
				} catch (h) {}
				return " ";
			};
			d.prototype.itemSelected = function(f, g) {
				if (this.dataGroup) {
					var h = this.dataGroup.getElementAt(f);
					null != h && (h.selected = g);
				}
			};
			d.prototype._isItemIndexSelected = function(f) {
				return f == this.selectedIndex;
			};
			d.prototype.commitSelection = function(f) {
				"undefined" === typeof f && (f = !0);
				var h = this.dataProvider ? this.dataProvider.length - 1 : -1,
					g = this._selectedIndex;
				if (!this._allowCustomSelectedItem || this._proposedSelectedIndex != d.CUSTOM_SELECTED_ITEM) {
					if (this._proposedSelectedIndex < d.NO_SELECTION && (this._proposedSelectedIndex = d.NO_SELECTION), this._proposedSelectedIndex > h && (this._proposedSelectedIndex = h), this.requireSelection && this._proposedSelectedIndex == d.NO_SELECTION && this.dataProvider && 0 < this.dataProvider.length) {
						return this._proposedSelectedIndex = d.NO_PROPOSED_SELECTION, this._dispatchChangeAfterSelection = !1;
					}
				}
				h = this._proposedSelectedIndex;
				if (this._dispatchChangeAfterSelection && !c.IndexChangeEvent.dispatchIndexChangeEvent(this, c.IndexChangeEvent.CHANGING, this._selectedIndex, this._proposedSelectedIndex, !0)) {
					return this.itemSelected(this._proposedSelectedIndex, !1), this._proposedSelectedIndex = d.NO_PROPOSED_SELECTION, this._dispatchChangeAfterSelection = !1;
				}
				this._selectedIndex = h;
				this._proposedSelectedIndex = d.NO_PROPOSED_SELECTION;
				g != d.NO_SELECTION && this.itemSelected(g, !1);
				this._selectedIndex != d.NO_SELECTION && this.itemSelected(this._selectedIndex, !0);
				f && (this._dispatchChangeAfterSelection && (c.IndexChangeEvent.dispatchIndexChangeEvent(this, c.IndexChangeEvent.CHANGE, g, this._selectedIndex), this._dispatchChangeAfterSelection = !1), c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT));
				return !0;
			};
			d.prototype.adjustSelection = function(f, g) {
				this._proposedSelectedIndex != d.NO_PROPOSED_SELECTION ? this._proposedSelectedIndex = f : this._selectedIndex = f;
				this.selectedIndexAdjusted = !0;
				this.invalidateProperties();
			};
			d.prototype.itemAdded = function(f) {
				this._doingWholesaleChanges || (this.selectedIndex == d.NO_SELECTION ? this.requireSelection && this.adjustSelection(f, !0) : f <= this.selectedIndex && this.adjustSelection(this.selectedIndex + 1, !0));
			};
			d.prototype.itemRemoved = function(f) {
				this.selectedIndex == d.NO_SELECTION || this._doingWholesaleChanges || (f == this.selectedIndex ? this.requireSelection && this.dataProvider && 0 < this.dataProvider.length ? 0 == f ? (this._proposedSelectedIndex = 0, this.invalidateProperties()) : this._setSelectedIndex(0, !1) : this.adjustSelection(-1, !1) : f < this.selectedIndex && this.adjustSelection(this.selectedIndex - 1, !1));
			};
			d.prototype.dataGroup_rendererAddHandler = function(f) {
				f = f.renderer;
				null != f && (f.addEventListener(a.TouchEvent.TOUCH_ROLL_OVER, this.item_mouseEventHandler, this), f.addEventListener(a.TouchEvent.TOUCH_ROLL_OUT, this.item_mouseEventHandler, this));
			};
			d.prototype.dataGroup_rendererRemoveHandler = function(f) {
				f = f.renderer;
				null != f && (f.removeEventListener(a.TouchEvent.TOUCH_ROLL_OVER, this.item_mouseEventHandler, this), f.removeEventListener(a.TouchEvent.TOUCH_ROLL_OUT, this.item_mouseEventHandler, this));
			};
			d.prototype.item_mouseEventHandler = function(f) {
				var g = f.type,
					g = d.TYPE_MAP[g];
				this.hasEventListener(g) && this._dispatchListEvent(f, g, f.currentTarget);
			};
			d.prototype._dispatchListEvent = function(g, h, k) {
				var j = -1,
					j = k ? k.itemIndex : this.dataGroup.getElementIndex(g.currentTarget),
					i = this.dataProvider.getItemAt(j);
				c.ListEvent.dispatchListEvent(this, h, g, j, i, k);
			};
			d.prototype.dataProvider_collectionChangeHandler = function(f) {
				var h = f.items;
				if (f.kind == c.CollectionEventKind.ADD) {
					for (var h = h.length, g = 0; g < h; g++) {
						this.itemAdded(f.location + g);
					}
				} else {
					if (f.kind == c.CollectionEventKind.REMOVE) {
						for (h = h.length, g = h - 1; 0 <= g; g--) {
							this.itemRemoved(f.location + g);
						}
					} else {
						f.kind == c.CollectionEventKind.MOVE ? (this.itemRemoved(f.oldLocation), this.itemAdded(f.location)) : f.kind == c.CollectionEventKind.RESET ? 0 == this.dataProvider.length ? this._setSelectedIndex(d.NO_SELECTION, !1) : (this.dataProviderChanged = !0, this.invalidateProperties()) : f.kind == c.CollectionEventKind.REFRESH && this._setSelectedIndex(d.NO_SELECTION, !1);
					}
				}
			};
			d.NO_SELECTION = -1;
			d.NO_PROPOSED_SELECTION = -2;
			d.CUSTOM_SELECTED_ITEM = -3;
			d.TYPE_MAP = {
				rollOver: "itemRollOver",
				rollOut: "itemRollOut"
			};
			return d;
		}(c.SkinnableDataContainer);
		c.ListBase = b;
		b.prototype.__class__ = "egret.gui.ListBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._title = "";
				this.hostComponentKey = "egret.gui.Panel";
				this.touchEnabled = !1;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "title", {
				get: function() {
					return this._title;
				},
				set: function(f) {
					this._title = f;
					this.titleDisplay && (this.titleDisplay.text = this.title);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.titleDisplay && (this.titleDisplay.text = this.title);
			};
			return d;
		}(c.SkinnableContainer);
		c.Panel = b;
		b.prototype.__class__ = "egret.gui.Panel";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._autoBackToStage = this._showCloseButton = !0;
				this.hostComponentKey = "egret.gui.TitleWindow";
				this.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.onWindowMouseDown, this, !0, 100);
			}
			__extends(d, e);
			d.prototype.onWindowMouseDown = function(f) {
				this.enabled && this.isPopUp && f.target != this.closeButton && c.PopUpManager.bringToFront(this);
			};
			Object.defineProperty(d.prototype, "showCloseButton", {
				get: function() {
					return this._showCloseButton;
				},
				set: function(f) {
					this._showCloseButton != f && (this._showCloseButton = f, this.closeButton && (this.closeButton.visible = this._showCloseButton));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "autoBackToStage", {
				get: function() {
					return this._autoBackToStage;
				},
				set: function(f) {
					this._autoBackToStage = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.moveArea ? this.moveArea.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.moveArea_mouseDownHandler, this) : g == this.closeButton && (this.closeButton.addEventListener(a.TouchEvent.TOUCH_TAP, this.closeButton_clickHandler, this), this.closeButton.visible = this._showCloseButton);
			};
			d.prototype.partRemoved = function(f, g) {
				e.prototype.partRemoved.call(this, f, g);
				g == this.moveArea ? this.moveArea.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.moveArea_mouseDownHandler, this) : g == this.closeButton && this.closeButton.removeEventListener(a.TouchEvent.TOUCH_TAP, this.closeButton_clickHandler, this);
			};
			d.prototype.closeButton_clickHandler = function(f) {
				c.CloseEvent.dispatchCloseEvent(this, c.CloseEvent.CLOSE);
			};
			d.prototype.moveArea_mouseDownHandler = function(f) {
				this.enabled && this.isPopUp && (f = this.globalToLocal(f.stageX, f.stageY, a.Point.identity), this._offsetPointX = f.x, this._offsetPointY = f.y, this._includeInLayout = !1, c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_MOVE, this.moveArea_mouseMoveHandler, this), c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.moveArea_mouseUpHandler, this), c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.moveArea_mouseUpHandler, this));
			};
			d.prototype.moveArea_mouseMoveHandler = function(f) {
				f = this.globalToLocal(f.stageX, f.stageY, a.Point.identity);
				this.x += f.x - this._offsetPointX;
				this.y += f.y - this._offsetPointY;
			};
			d.prototype.moveArea_mouseUpHandler = function(f) {
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_MOVE, this.moveArea_mouseMoveHandler, this);
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.moveArea_mouseUpHandler, this);
				c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.moveArea_mouseUpHandler, this);
				this._autoBackToStage && this.adjustPosForStage();
				c.LayoutUtil.adjustRelativeByXY(this);
				this.includeInLayout = !0;
			};
			d.prototype.adjustPosForStage = function() {
				if (this.moveArea && this.stage) {
					var f = this.moveArea.localToGlobal(0, 0),
						g = f.x,
						h = f.y;
					35 > f.x + this.moveArea.width && (g = 35 - this.moveArea.width);
					f.x > this.stage.stageWidth - 20 && (g = this.stage.stageWidth - 20);
					20 > f.y + this.moveArea.height && (h = 20 - this.moveArea.height);
					f.y > this.stage.stageHeight - 20 && (h = this.stage.stageHeight - 20);
					this.x += g - f.x;
					this.y += h - f.y;
				}
			};
			return d;
		}(c.Panel);
		c.TitleWindow = b;
		b.prototype.__class__ = "egret.gui.TitleWindow";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._contentText = this._secondButtonLabel = this._firstButtonLabel = "";
				this.hostComponentKey = "egret.gui.Alert";
			}
			__extends(d, e);
			d.show = function(i, r, q, p, o, n, g) {
				"undefined" === typeof i && (i = "");
				"undefined" === typeof r && (r = "");
				"undefined" === typeof q && (q = null);
				"undefined" === typeof p && (p = "\u786e\u5b9a");
				"undefined" === typeof o && (o = "");
				"undefined" === typeof n && (n = !0);
				"undefined" === typeof g && (g = !0);
				var j = new d;
				j.contentText = i;
				j.title = r;
				j._firstButtonLabel = p;
				j._secondButtonLabel = o;
				j.closeHandler = q;
				c.PopUpManager.addPopUp(j, n, g);
				return j;
			};
			Object.defineProperty(d.prototype, "firstButtonLabel", {
				get: function() {
					return this._firstButtonLabel;
				},
				set: function(f) {
					this._firstButtonLabel != f && (this._firstButtonLabel = f, this.firstButton && (this.firstButton.label = f));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "secondButtonLabel", {
				get: function() {
					return this._secondButtonLabel;
				},
				set: function(f) {
					this._secondButtonLabel != f && (this._secondButtonLabel = f, !this.secondButton || null != f && "" != f || (this.secondButton.includeInLayout = this.secondButton.visible = "" != this._secondButtonLabel && null != this._secondButtonLabel));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "contentText", {
				get: function() {
					return this._contentText;
				},
				set: function(f) {
					this._contentText != f && (this._contentText = f, this.contentDisplay && (this.contentDisplay.text = f));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.onClose = function(f) {
				c.PopUpManager.removePopUp(this);
				if (null != this.closeHandler) {
					var g = new c.CloseEvent(c.CloseEvent.CLOSE);
					switch (f.currentTarget) {
						case this.firstButton:
							g.detail = d.FIRST_BUTTON;
							break;
						case this.secondButton:
							g.detail = d.SECOND_BUTTON;
					}
					this.closeHandler(g);
				}
			};
			d.prototype.closeButton_clickHandler = function(f) {
				e.prototype.closeButton_clickHandler.call(this, f);
				c.PopUpManager.removePopUp(this);
				f = new c.CloseEvent(c.CloseEvent.CLOSE, !1, !1, d.CLOSE_BUTTON);
				null != this.closeHandler && this.closeHandler(f);
			};
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.contentDisplay ? this.contentDisplay.text = this._contentText : g == this.firstButton ? (this.firstButton.label = this._firstButtonLabel, this.firstButton.addEventListener(a.TouchEvent.TOUCH_TAP, this.onClose, this)) : g == this.secondButton && (this.secondButton.label = this._secondButtonLabel, this.secondButton.includeInLayout = this.secondButton.visible = "" != this._secondButtonLabel && null != this._secondButtonLabel, this.secondButton.addEventListener(a.TouchEvent.TOUCH_TAP, this.onClose, this));
			};
			d.prototype.partRemoved = function(f, g) {
				e.prototype.partRemoved.call(this, f, g);
				g == this.firstButton ? this.firstButton.removeEventListener(a.TouchEvent.TOUCH_TAP, this.onClose, this) : g == this.secondButton && this.secondButton.removeEventListener(a.TouchEvent.TOUCH_TAP, this.onClose, this);
			};
			d.FIRST_BUTTON = "firstButton";
			d.SECOND_BUTTON = "secondButton";
			d.CLOSE_BUTTON = "closeButton";
			return d;
		}(c.TitleWindow);
		c.Alert = b;
		b.prototype.__class__ = "egret.gui.Alert";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._slideDuration = 500;
				this._direction = c.ProgressBarDirection.LEFT_TO_RIGHT;
				this.animationValue = 0;
				this.trackResizedOrMoved = !1;
				this.hostComponentKey = "egret.gui.ProgressBar";
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "labelFunction", {
				get: function() {
					return this._labelFunction;
				},
				set: function(f) {
					this._labelFunction != f && (this._labelFunction = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.valueToLabel = function(f, g) {
				return null != this.labelFunction ? this._labelFunction(f, g) : f + " / " + g;
			};
			Object.defineProperty(d.prototype, "slideDuration", {
				get: function() {
					return this._slideDuration;
				},
				set: function(f) {
					this._slideDuration != f && (this._slideDuration = f, this.animator && this.animator.isPlaying && (this.animator.stop(), this._setValue(this.slideToValue)));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "direction", {
				get: function() {
					return this._direction;
				},
				set: function(f) {
					this._direction != f && (this._direction = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "value", {
				get: function() {
					return this._getValue();
				},
				set: function(f) {
					this._getValue() != f && (this._setValue(f), 0 < this._slideDuration && this.stage ? (this.validateProperties(), this.animator || (this.animator = new c.Animation(this.animationUpdateHandler, this)), this.animator.isPlaying && (this.animationValue = this.slideToValue, this.invalidateDisplayList(), this.animator.stop()), this.slideToValue = this.nearestValidValue(f, this.snapInterval), this.slideToValue != this.animationValue && (f = this._slideDuration * (Math.abs(this.animationValue - this.slideToValue) / (this.maximum - this.minimum)), this.animator.duration = Infinity === f ? 0 : f, this.animator.motionPaths = [{
						prop: "value",
						from: this.animationValue,
						to: this.slideToValue
					}], this.animator.play())) : this.animationValue = this._getValue());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.animationUpdateHandler = function(f) {
				f = this.nearestValidValue(f.currentValue.value, this.snapInterval);
				this.animationValue = Math.min(this.maximum, Math.max(this.minimum, f));
				this.invalidateDisplayList();
			};
			d.prototype.setValue = function(f) {
				e.prototype.setValue.call(this, f);
				this.invalidateDisplayList();
			};
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				this.updateSkinDisplayList();
			};
			d.prototype.partAdded = function(f, g) {
				g == this.track && this.track instanceof c.UIComponent && (this.track.addEventListener(c.ResizeEvent.RESIZE, this.onTrackResizeOrMove, this), this.track.addEventListener(c.MoveEvent.MOVE, this.onTrackResizeOrMove, this));
			};
			d.prototype.partRemoved = function(f, g) {
				g == this.track && this.track instanceof c.UIComponent && (this.track.removeEventListener(c.ResizeEvent.RESIZE, this.onTrackResizeOrMove, this), this.track.removeEventListener(c.MoveEvent.MOVE, this.onTrackResizeOrMove, this));
			};
			d.prototype.onTrackResizeOrMove = function(f) {
				this.trackResizedOrMoved = !0;
				this.invalidateProperties();
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this.trackResizedOrMoved && (this.trackResizedOrMoved = !1, this.updateSkinDisplayList());
			};
			d.prototype.updateSkinDisplayList = function() {
				this.trackResizedOrMoved = !1;
				var i = this.value;
				this.animator && this.animator.isPlaying ? i = this.animationValue : (i = this.value, isNaN(i) && (i = 0));
				var n = isNaN(this.maximum) ? 0 : this.maximum;
				if (this.thumb && this.track) {
					var r = isNaN(this.track.width) ? 0 : this.track.width,
						r = r * this.track.scaleX,
						q = isNaN(this.track.height) ? 0 : this.track.height,
						q = q * this.track.scaleY,
						p = Math.round(i / n * r);
					if (isNaN(p) || 0 > p || Infinity === p) {
						p = 0;
					}
					var o = Math.round(i / n * q);
					if (isNaN(o) || 0 > o || Infinity === o) {
						o = 0;
					}
					var g = this.track.localToGlobal(0, 0),
						j = this.globalToLocal(g.x, g.y, a.Point.identity),
						g = j.x,
						j = j.y;
					switch (this._direction) {
						case c.ProgressBarDirection.LEFT_TO_RIGHT:
							this.thumb.width = p;
							this.thumb.height = q;
							this.thumb.x = g;
							break;
						case c.ProgressBarDirection.RIGHT_TO_LEFT:
							this.thumb.width = p;
							this.thumb.height = q;
							this.thumb.x = g + r - p;
							break;
						case c.ProgressBarDirection.TOP_TO_BOTTOM:
							this.thumb.width = r;
							this.thumb.height = o;
							this.thumb.y = j;
							break;
						case c.ProgressBarDirection.BOTTOM_TO_TOP:
							this.thumb.width = r, this.thumb.height = o, this.thumb.y = j + q - o;
					}
				}
				this.labelDisplay && (this.labelDisplay.text = this.valueToLabel(i, n));
			};
			return d;
		}(c.Range);
		c.ProgressBar = b;
		b.prototype.__class__ = "egret.gui.ProgressBar";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.LEFT_TO_RIGHT = "leftToRight";
			d.RIGHT_TO_LEFT = "rightToLeft";
			d.TOP_TO_BOTTOM = "topToBottom";
			d.BOTTOM_TO_TOP = "bottomToTop";
			return d;
		}();
		c.ProgressBarDirection = b;
		b.prototype.__class__ = "egret.gui.ProgressBarDirection";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.HSlider";
			}
			__extends(d, e);
			d.prototype.pointToValue = function(f, g) {
				if (!this.thumb || !this.track) {
					return 0;
				}
				var i = this.maximum - this.minimum,
					h = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth;
				return this.minimum + (0 != h ? f / h * i : 0);
			};
			d.prototype.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var f = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth,
						g = this.maximum - this.minimum,
						f = 0 < g ? (this.pendingValue - this.minimum) / g * f : 0,
						i = this.track.localToGlobal(f, 0),
						g = i.x,
						i = i.y,
						h = this.thumb.parent.globalToLocal(g, i, a.Point.identity).x;
					this.thumb.setLayoutBoundsPosition(Math.round(h), this.thumb.layoutBoundsY);
					this.showTrackHighlight && this.trackHighlight && this.trackHighlight.parent && (g = this.trackHighlight.parent.globalToLocal(g, i, a.Point.identity).x - f, this.trackHighlight.x = Math.round(g), this.trackHighlight.width = Math.round(f));
				}
			};
			return d;
		}(c.SliderBase);
		c.HSlider = b;
		b.prototype.__class__ = "egret.gui.HSlider";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.VSlider";
			}
			__extends(d, e);
			d.prototype.pointToValue = function(f, g) {
				if (!this.thumb || !this.track) {
					return 0;
				}
				var i = this.maximum - this.minimum,
					h = this.track.layoutBoundsHeight - this.thumb.layoutBoundsHeight;
				return this.minimum + (0 != h ? (h - g) / h * i : 0);
			};
			d.prototype.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var g = this.thumb.layoutBoundsHeight,
						h = this.track.layoutBoundsHeight - g,
						k = this.maximum - this.minimum,
						j = this.track.localToGlobal(0, 0 < k ? h - (this.pendingValue - this.minimum) / k * h : 0),
						k = j.x,
						j = j.y,
						i = this.thumb.parent.globalToLocal(k, j, a.Point.identity).y;
					this.thumb.setLayoutBoundsPosition(this.thumb.layoutBoundsX, Math.round(i));
					this.showTrackHighlight && this.trackHighlight && this.trackHighlight._parent && (k = this.trackHighlight._parent.globalToLocal(k, j, a.Point.identity).y, this.trackHighlight.y = Math.round(k + g), this.trackHighlight.height = Math.round(h - k));
				}
			};
			return d;
		}(c.SliderBase);
		c.VSlider = b;
		b.prototype.__class__ = "egret.gui.VSlider";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._allowMultipleSelection = !1;
				this._selectedIndices = [];
				this._captureItemRenderer = !0;
				this.hostComponentKey = "egret.gui.List";
				this.useVirtualLayout = !0;
			}
			__extends(d, e);
			d.prototype.createChildren = function() {
				this.itemRenderer || (this.itemRenderer = c.DataGroup.defaultRendererFactory);
				e.prototype.createChildren.call(this);
			};
			Object.defineProperty(d.prototype, "useVirtualLayout", {
				get: function() {
					return this._getUseVirtualLayout();
				},
				set: function(f) {
					this._setUseVirtualLayout(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "allowMultipleSelection", {
				get: function() {
					return this._allowMultipleSelection;
				},
				set: function(f) {
					this._allowMultipleSelection = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selectedIndices", {
				get: function() {
					return this._proposedSelectedIndices ? this._proposedSelectedIndices : this._selectedIndices;
				},
				set: function(f) {
					this._setSelectedIndices(f, !1);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selectedIndex", {
				get: function() {
					return this._proposedSelectedIndices ? 0 < this._proposedSelectedIndices.length ? this._proposedSelectedIndices[0] : -1 : this._getSelectedIndex();
				},
				set: function(f) {
					this._setSelectedIndex(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "selectedItems", {
				get: function() {
					var f = [],
						g = this.selectedIndices;
					if (g) {
						for (var i = g.length, h = 0; h < i; h++) {
							f[h] = this.dataProvider.getItemAt(g[h]);
						}
					}
					return f;
				},
				set: function(f) {
					var g = [];
					if (f) {
						for (var j = f.length, i = 0; i < j; i++) {
							var h = this.dataProvider.getItemIndex(f[i]); - 1 != h && g.splice(0, 0, h);
							if (-1 == h) {
								g = [];
								break;
							}
						}
					}
					this._setSelectedIndices(g, !1);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setSelectedIndices = function(f, g) {
				"undefined" === typeof g && (g = !1);
				g && (this._dispatchChangeAfterSelection = this._dispatchChangeAfterSelection || g);
				this._proposedSelectedIndices = f ? f : [];
				this.invalidateProperties();
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this._proposedSelectedIndices && this.commitSelection();
			};
			d.prototype.commitSelection = function(f) {
				"undefined" === typeof f && (f = !0);
				var g = this._selectedIndex;
				if (this._proposedSelectedIndices) {
					this._proposedSelectedIndices = this._proposedSelectedIndices.filter(this.isValidIndex);
					if (!this.allowMultipleSelection && 0 < this._proposedSelectedIndices.length) {
						var h = [];
						h.push(this._proposedSelectedIndices[0]);
						this._proposedSelectedIndices = h;
					}
					this._proposedSelectedIndex = 0 < this._proposedSelectedIndices.length ? this._proposedSelectedIndices[0] : -1;
				}
				h = e.prototype.commitSelection.call(this, !1);
				if (!h) {
					return this._proposedSelectedIndices = null, !1;
				}
				this.selectedIndex > c.ListBase.NO_SELECTION && (this._proposedSelectedIndices ? -1 == this._proposedSelectedIndices.indexOf(this.selectedIndex) && this._proposedSelectedIndices.push(this.selectedIndex) : this._proposedSelectedIndices = [this.selectedIndex]);
				this._proposedSelectedIndices && (-1 != this._proposedSelectedIndices.indexOf(g) && this.itemSelected(g, !0), this.commitMultipleSelection());
				f && h && (this._dispatchChangeAfterSelection && (c.IndexChangeEvent.dispatchIndexChangeEvent(this, c.IndexChangeEvent.CHANGE, g, this._selectedIndex), this._dispatchChangeAfterSelection = !1), c.UIEvent.dispatchUIEvent(this, c.UIEvent.VALUE_COMMIT));
				return h;
			};
			d.prototype.isValidIndex = function(f, g, h) {
				return this.dataProvider && 0 <= f && f < this.dataProvider.length;
			};
			d.prototype.commitMultipleSelection = function() {
				var f = [],
					g = [],
					i, h;
				if (0 < this._selectedIndices.length && 0 < this._proposedSelectedIndices.length) {
					h = this._proposedSelectedIndices.length;
					for (i = 0; i < h; i++) {
						-1 == this._selectedIndices.indexOf(this._proposedSelectedIndices[i]) && g.push(this._proposedSelectedIndices[i]);
					}
					h = this._selectedIndices.length;
					for (i = 0; i < h; i++) {
						-1 == this._proposedSelectedIndices.indexOf(this._selectedIndices[i]) && f.push(this._selectedIndices[i]);
					}
				} else {
					0 < this._selectedIndices.length ? f = this._selectedIndices : 0 < this._proposedSelectedIndices.length && (g = this._proposedSelectedIndices);
				}
				this._selectedIndices = this._proposedSelectedIndices;
				if (0 < f.length) {
					for (h = f.length, i = 0; i < h; i++) {
						this.itemSelected(f[i], !1);
					}
				}
				if (0 < g.length) {
					for (h = g.length, i = 0; i < h; i++) {
						this.itemSelected(g[i], !0);
					}
				}
				this._proposedSelectedIndices = null;
			};
			d.prototype._isItemIndexSelected = function(f) {
				return this._allowMultipleSelection ? -1 != this._selectedIndices.indexOf(f) : e.prototype._isItemIndexSelected.call(this, f);
			};
			d.prototype.dataGroup_rendererAddHandler = function(f) {
				e.prototype.dataGroup_rendererAddHandler.call(this, f);
				f = f.renderer;
				null != f && (f.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.item_mouseDownHandler, this), f.addEventListener(a.TouchEvent.TOUCH_END, this.item_mouseUpHandler, this));
			};
			d.prototype.dataGroup_rendererRemoveHandler = function(f) {
				e.prototype.dataGroup_rendererRemoveHandler.call(this, f);
				f = f.renderer;
				null != f && (f.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.item_mouseDownHandler, this), f.removeEventListener(a.TouchEvent.TOUCH_END, this.item_mouseUpHandler, this));
			};
			d.prototype.item_mouseDownHandler = function(f) {
				if (!f.isDefaultPrevented()) {
					var g = f.currentTarget,
						h;
					h = g ? g.itemIndex : this.dataGroup.getElementIndex(f.currentTarget);
					this._allowMultipleSelection ? this._setSelectedIndices(this.calculateSelectedIndices(h, f.shiftKey, f.ctrlKey), !0) : this._setSelectedIndex(h, !0);
					this._captureItemRenderer && (this.mouseDownItemRenderer = g, c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this));
				}
			};
			d.prototype.calculateSelectedIndices = function(f, g, i) {
				var h = [];
				if (g) {
					if (g = 0 < this._selectedIndices.length ? this._selectedIndices[this._selectedIndices.length - 1] : 0, g < f) {
						for (; g <= f; g++) {
							h.splice(0, 0, g);
						}
					} else {
						for (; g >= f; g--) {
							h.splice(0, 0, g);
						}
					}
				} else {
					if (i) {
						if (0 < this._selectedIndices.length) {
							if (1 == this._selectedIndices.length && this._selectedIndices[0] == f) {
								if (!this.requireSelection) {
									return h;
								}
								h.splice(0, 0, this._selectedIndices[0]);
							} else {
								i = !1;
								for (g = 0; g < this._selectedIndices.length; g++) {
									this._selectedIndices[g] == f ? i = !0 : this._selectedIndices[g] != f && h.splice(0, 0, this._selectedIndices[g]);
								}
								i || h.splice(0, 0, f);
							}
						} else {
							h.splice(0, 0, f);
						}
					} else {
						h.splice(0, 0, f);
					}
				}
				return h;
			};
			d.prototype.item_mouseUpHandler = function(f) {
				var g = f.currentTarget;
				g == this.mouseDownItemRenderer && this._dispatchListEvent(f, c.ListEvent.ITEM_CLICK, g);
			};
			d.prototype.stage_mouseUpHandler = function(f) {
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
				this.mouseDownItemRenderer = null;
			};
			return d;
		}(c.ListBase);
		c.List = b;
		b.prototype.__class__ = "egret.gui.List";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._displayPopUp = this._popUpWidthMatchesAnchorWidth = this._popUpHeightMatchesAnchorHeight = this.addedToStage = this.popUpIsDisplayed = !1;
				this._popUpPosition = c.PopUpPosition.TOP_LEFT;
				this.inAnimation = !1;
				this.animator = null;
				this._openDuration = 250;
				this._closeDuration = 150;
				this.valueRange = 1;
				this.addEventListener(a.Event.ADDED_TO_STAGE, this.addedToStageHandler, this);
				this.addEventListener(a.Event.REMOVED_FROM_STAGE, this.removedFromStageHandler, this);
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "popUpHeightMatchesAnchorHeight", {
				get: function() {
					return this._popUpHeightMatchesAnchorHeight;
				},
				set: function(f) {
					this._popUpHeightMatchesAnchorHeight != f && (this._popUpHeightMatchesAnchorHeight = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "popUpWidthMatchesAnchorWidth", {
				get: function() {
					return this._popUpWidthMatchesAnchorWidth;
				},
				set: function(f) {
					this._popUpWidthMatchesAnchorWidth != f && (this._popUpWidthMatchesAnchorWidth = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "displayPopUp", {
				get: function() {
					return this._displayPopUp;
				},
				set: function(f) {
					this._displayPopUp != f && (this._displayPopUp = f, this.addOrRemovePopUp());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "popUp", {
				get: function() {
					return this._popUp;
				},
				set: function(f) {
					this._popUp != f && (this._popUp = f, this.dispatchEventWith("popUpChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "popUpPosition", {
				get: function() {
					return this._popUpPosition;
				},
				set: function(f) {
					this._popUpPosition != f && (this._popUpPosition = f, this.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.updateDisplayList = function(f, g) {
				e.prototype.updateDisplayList.call(this, f, g);
				this.applyPopUpTransform(f, g);
			};
			d.prototype.updatePopUpTransform = function() {
				this.applyPopUpTransform(this.width, this.height);
			};
			d.prototype.calculatePopUpPosition = function() {
				var f = a.Point.identity;
				switch (this._popUpPosition) {
					case c.PopUpPosition.BELOW:
						f.x = 0;
						f.y = this.height;
						break;
					case c.PopUpPosition.ABOVE:
						f.x = 0;
						f.y = -this.popUp.layoutBoundsHeight;
						break;
					case c.PopUpPosition.LEFT:
						f.x = -this.popUp.layoutBoundsWidth;
						f.y = 0;
						break;
					case c.PopUpPosition.RIGHT:
						f.x = this.width;
						f.y = 0;
						break;
					case c.PopUpPosition.CENTER:
						f.x = 0.5 * (this.width - this.popUp.layoutBoundsWidth), f.y = 0.5 * (this.height - this.popUp.layoutBoundsHeight);
				}
				f = this.localToGlobal(f.x, f.y, f);
				return f = this.popUp.parent.globalToLocal(f.x, f.y, f);
			};
			Object.defineProperty(d.prototype, "openDuration", {
				get: function() {
					return this._openDuration;
				},
				set: function(f) {
					this._openDuration = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "closeDuration", {
				get: function() {
					return this._closeDuration;
				},
				set: function(f) {
					this._closeDuration = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.animationStartHandler = function(f) {
				this.inAnimation = !0;
				this.popUp && "enabled" in this.popUp && (this.popUp.enabled = !1);
			};
			d.prototype.animationUpdateHandler = function(f) {
				var g = this.popUp._scrollRect,
					h = Math.round(f.currentValue.x);
				f = Math.round(f.currentValue.y);
				g ? (g.x = h, g.y = f, g.width = this.popUp.width, g.height = this.popUp.height) : this.popUp._scrollRect = new a.Rectangle(h, f, this.popUp.width, this.popUp.height);
			};
			d.prototype.animationEndHandler = function(f) {
				this.inAnimation = !1;
				this.popUp && "enabled" in this.popUp && (this.popUp.enabled = !0);
				this.popUp.scrollRect = null;
				this.popUpIsDisplayed || (c.PopUpManager.removePopUp(this.popUp), this.popUp.ownerChanged(null));
			};
			d.prototype.addOrRemovePopUp = function() {
				this.addedToStage && this.popUp && (null == this.popUp.parent && this.displayPopUp ? (c.PopUpManager.addPopUp(this.popUp, !1, !1), this.popUp.ownerChanged(this), this.popUpIsDisplayed = !0, this.inAnimation && this.animator.end(), this.initialized ? (this.applyPopUpTransform(this.width, this.height), 0 < this._openDuration && this.startAnimation()) : a.callLater(function() {
					0 < this.openDuration && this.startAnimation();
				}, this)) : null == this.popUp.parent || this.displayPopUp || this.removeAndResetPopUp());
			};
			d.prototype.removeAndResetPopUp = function() {
				this.inAnimation && this.animator.end();
				this.popUpIsDisplayed = !1;
				0 < this._closeDuration ? this.startAnimation() : (c.PopUpManager.removePopUp(this.popUp), this.popUp.ownerChanged(null));
			};
			d.prototype.applyPopUpTransform = function(f, g) {
				if (this.popUpIsDisplayed) {
					this.popUpWidthMatchesAnchorWidth && (this.popUp.width = f);
					this.popUpHeightMatchesAnchorHeight && (this.popUp.height = g);
					"validateNow" in this.popUp && this.popUp.validateNow();
					var h = this.calculatePopUpPosition();
					this.popUp.x = h.x;
					this.popUp.y = h.y;
				}
			};
			d.prototype.startAnimation = function() {
				this.animator || (this.animator = new c.Animation(this.animationUpdateHandler, this), this.animator.endFunction = this.animationEndHandler, this.animator.startFunction = this.animationStartHandler);
				this.animator.motionPaths = this.createMotionPath();
				this.animator.duration = this.popUpIsDisplayed ? this._openDuration : this._closeDuration;
				this.animator.play();
			};
			d.prototype.createMotionPath = function() {
				var f = {
						prop: "x"
					},
					g = {
						prop: "y"
					},
					i = [f, g];
				switch (this._popUpPosition) {
					case c.PopUpPosition.TOP_LEFT:
					case c.PopUpPosition.CENTER:
					case c.PopUpPosition.BELOW:
						f.from = f.to = 0;
						g.from = this.popUp.height;
						g.to = 0;
						this.valueRange = this.popUp.height;
						break;
					case c.PopUpPosition.ABOVE:
						f.from = f.to = 0;
						g.from = -this.popUp.height;
						g.to = 0;
						this.valueRange = this.popUp.height;
						break;
					case c.PopUpPosition.LEFT:
						g.from = g.to = 0;
						f.from = -this.popUp.width;
						f.to = 0;
						this.valueRange = this.popUp.width;
						break;
					case c.PopUpPosition.RIGHT:
						g.from = g.to = 0;
						f.from = this.popUp.width;
						f.to = 0;
						this.valueRange = this.popUp.width;
						break;
					default:
						this.valueRange = 1;
				}
				this.valueRange = Math.abs(this.valueRange);
				if (!this.popUpIsDisplayed) {
					var h = f.from;
					f.from = f.to;
					f.to = h;
					h = g.from;
					g.from = g.to;
					g.to = h;
				}
				return i;
			};
			d.prototype.addedToStageHandler = function(f) {
				this.addedToStage = !0;
				a.callLater(this.checkPopUpState, this);
			};
			d.prototype.checkPopUpState = function() {
				this.addedToStage ? this.addOrRemovePopUp() : null != this.popUp && null != this.popUp.parent && this.removeAndResetPopUp();
			};
			d.prototype.removedFromStageHandler = function(f) {
				this.addedToStage = !1;
				a.callLater(this.checkPopUpState, this);
			};
			return d;
		}(c.UIComponent);
		c.PopUpAnchor = b;
		b.prototype.__class__ = "egret.gui.PopUpAnchor";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._isOpen = !1;
				this._closeOnResize = !0;
				this._rollOverOpenDelay = NaN;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "openButton", {
				get: function() {
					return this._openButton;
				},
				set: function(f) {
					this._openButton !== f && (this.removeOpenTriggers(), this._openButton = f, this.addOpenTriggers());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "dropDown", {
				get: function() {
					return this._dropDown;
				},
				set: function(f) {
					this._dropDown !== f && (this._dropDown = f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "isOpen", {
				get: function() {
					return this._isOpen;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "closeOnResize", {
				get: function() {
					return this._closeOnResize;
				},
				set: function(f) {
					this._closeOnResize != f && (this.isOpen && this.removeCloseOnResizeTrigger(), this._closeOnResize = f, this.addCloseOnResizeTrigger());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "rollOverOpenDelay", {
				get: function() {
					return this._rollOverOpenDelay;
				},
				set: function(f) {
					this._rollOverOpenDelay != f && (this.removeOpenTriggers(), this._rollOverOpenDelay = f, this.addOpenTriggers());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.addOpenTriggers = function() {
				this.openButton && (isNaN(this.rollOverOpenDelay) ? this.openButton.addEventListener(c.UIEvent.BUTTON_DOWN, this._openButton_buttonDownHandler, this) : this.openButton.addEventListener(a.TouchEvent.TOUCH_ROLL_OVER, this._openButton_rollOverHandler, this));
			};
			d.prototype.removeOpenTriggers = function() {
				this.openButton && (isNaN(this.rollOverOpenDelay) ? this.openButton.removeEventListener(c.UIEvent.BUTTON_DOWN, this._openButton_buttonDownHandler, this) : this.openButton.removeEventListener(a.TouchEvent.TOUCH_ROLL_OVER, this._openButton_rollOverHandler, this));
			};
			d.prototype.addCloseTriggers = function() {
				c.UIGlobals.stage && (isNaN(this.rollOverOpenDelay) ? (c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.stage_mouseDownHandler, this), c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler_noRollOverOpenDelay, this)) : c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this), this.addCloseOnResizeTrigger());
			};
			d.prototype.removeCloseTriggers = function() {
				c.UIGlobals.stage && (isNaN(this.rollOverOpenDelay) ? (c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.stage_mouseDownHandler, this), c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler_noRollOverOpenDelay, this)) : (c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this), c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)), this.removeCloseOnResizeTrigger());
			};
			d.prototype.addCloseOnResizeTrigger = function() {
				this.closeOnResize && c.UIGlobals.stage.addEventListener(a.Event.RESIZE, this.stage_resizeHandler, this);
			};
			d.prototype.removeCloseOnResizeTrigger = function() {
				this.closeOnResize && c.UIGlobals.stage.removeEventListener(a.Event.RESIZE, this.stage_resizeHandler, this);
			};
			d.prototype.isTargetOverDropDownOrOpenButton = function(f) {
				if (f) {
					if (this.openButton && this.openButton.contains(f)) {
						return !0;
					}
					if (null != this.hitAreaAdditions) {
						for (var g = 0; g < this.hitAreaAdditions.length; g++) {
							if (this.hitAreaAdditions[g] == f || this.hitAreaAdditions[g] instanceof a.DisplayObjectContainer && this.hitAreaAdditions[g].contains(f)) {
								return !0;
							}
						}
					}
					if (this.dropDown instanceof a.DisplayObjectContainer) {
						if (this.dropDown.contains(f)) {
							return !0;
						}
					} else {
						if (f == this.dropDown) {
							return !0;
						}
					}
				}
				return !1;
			};
			d.prototype.openDropDown = function() {
				this.openDropDownHelper();
			};
			d.prototype.openDropDownHelper = function() {
				this.isOpen || (this.addCloseTriggers(), this._isOpen = !0, this.openButton && this.openButton._setKeepDown(!0), c.UIEvent.dispatchUIEvent(this, c.UIEvent.OPEN));
			};
			d.prototype.closeDropDown = function(f) {
				if (this.isOpen) {
					this._isOpen = !1;
					this.openButton && this.openButton._setKeepDown(!1);
					var g = new c.UIEvent(c.UIEvent.CLOSE, !1, !0);
					f || g.preventDefault();
					this.dispatchEvent(g);
					this.removeCloseTriggers();
				}
			};
			d.prototype._openButton_buttonDownHandler = function(f) {
				this.isOpen ? this.closeDropDown(!0) : (this.mouseIsDown = !0, this.openDropDownHelper());
			};
			d.prototype._openButton_rollOverHandler = function(f) {
				0 == this.rollOverOpenDelay ? this.openDropDownHelper() : (this.openButton.addEventListener(a.TouchEvent.TOUCH_ROLL_OUT, this.openButton_rollOutHandler, this), this.rollOverOpenDelayTimer = new a.Timer(this.rollOverOpenDelay, 1), this.rollOverOpenDelayTimer.addEventListener(a.TimerEvent.TIMER_COMPLETE, this.rollOverDelay_timerCompleteHandler, this), this.rollOverOpenDelayTimer.start());
			};
			d.prototype.openButton_rollOutHandler = function(f) {
				this.rollOverOpenDelayTimer && this.rollOverOpenDelayTimer.running && (this.rollOverOpenDelayTimer.stop(), this.rollOverOpenDelayTimer = null);
				this.openButton.removeEventListener(a.TouchEvent.TOUCH_ROLL_OUT, this.openButton_rollOutHandler, this);
			};
			d.prototype.rollOverDelay_timerCompleteHandler = function(f) {
				this.openButton.removeEventListener(a.TouchEvent.TOUCH_ROLL_OUT, this.openButton_rollOutHandler, this);
				this.rollOverOpenDelayTimer = null;
				this.openDropDownHelper();
			};
			d.prototype.stage_mouseDownHandler = function(f) {
				if (this.mouseIsDown) {
					this.mouseIsDown = !1;
				} else {
					if (!this.dropDown || this.dropDown && (f.target == this.dropDown || this.dropDown instanceof a.DisplayObjectContainer && !this.dropDown.contains(f.target))) {
						var g = f.target;
						if (!(this.openButton && g && this.openButton.contains(g))) {
							if (null != this.hitAreaAdditions) {
								for (g = 0; g < this.hitAreaAdditions.length; g++) {
									if (this.hitAreaAdditions[g] == f.target || this.hitAreaAdditions[g] instanceof a.DisplayObjectContainer && this.hitAreaAdditions[g].contains(f.target)) {
										return;
									}
								}
							}
							this.closeDropDown(!0);
						}
					}
				}
			};
			d.prototype.stage_mouseMoveHandler = function(f) {
				this.isTargetOverDropDownOrOpenButton(f.target) || (f instanceof a.TouchEvent && f.touchDown ? (c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)) : this.closeDropDown(!0));
			};
			d.prototype.stage_mouseUpHandler_noRollOverOpenDelay = function(f) {
				this.mouseIsDown && (this.mouseIsDown = !1);
			};
			d.prototype.stage_mouseUpHandler = function(f) {
				this.isTargetOverDropDownOrOpenButton(f.target) ? (c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this), c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)) : this.closeDropDown(!0);
			};
			d.prototype.stage_resizeHandler = function(f) {
				this.closeDropDown(!0);
			};
			d.prototype.stage_mouseWheelHandler = function(f) {
				!this.dropDown || this.dropDown.contains(f.target) && f.isDefaultPrevented() || this.closeDropDown(!1);
			};
			return d;
		}(a.EventDispatcher);
		c.DropDownController = b;
		b.prototype.__class__ = "egret.gui.DropDownController";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._labelChanged = !1;
				this._userProposedSelectedIndex = c.ListBase.NO_SELECTION;
				this._captureItemRenderer = !1;
				this.dropDownController = new c.DropDownController;
			}
			__extends(d, e);
			d.prototype._setDataProvider = function(f) {
				this.dataProvider !== f && (e.prototype._setDataProvider.call(this, f), this._labelChanged = !0, this.invalidateProperties());
			};
			d.prototype._setLabelField = function(f) {
				this.labelField != f && (e.prototype._setLabelField.call(this, f), this._labelChanged = !0, this.invalidateProperties());
			};
			d.prototype._setLabelFunction = function(f) {
				this.labelFunction != f && (e.prototype._setLabelFunction.call(this, f), this._labelChanged = !0, this.invalidateProperties());
			};
			Object.defineProperty(d.prototype, "dropDownController", {
				get: function() {
					return this._dropDownController;
				},
				set: function(f) {
					this._dropDownController != f && (this._dropDownController = f, this._dropDownController.addEventListener(c.UIEvent.OPEN, this._dropDownController_openHandler, this), this._dropDownController.addEventListener(c.UIEvent.CLOSE, this.dropDownController_closeHandler, this), this.openButton && (this._dropDownController.openButton = this.openButton), this.dropDown && (this._dropDownController.dropDown = this.dropDown));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "isDropDownOpen", {
				get: function() {
					return this.dropDownController ? this.dropDownController.isOpen : !1;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				this._labelChanged && (this._labelChanged = !1, this.updateLabelDisplay());
			};
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.openButton ? this.dropDownController && (this.dropDownController.openButton = this.openButton) : g == this.dropDown && this.dropDownController && (this.dropDownController.dropDown = this.dropDown);
			};
			d.prototype.partRemoved = function(f, g) {
				this.dropDownController && (g == this.openButton && (this.dropDownController.openButton = null), g == this.dropDown && (this.dropDownController.dropDown = null));
				e.prototype.partRemoved.call(this, f, g);
			};
			d.prototype.getCurrentSkinState = function() {
				return this.enabled ? this.isDropDownOpen ? "open" : "normal" : "disabled";
			};
			d.prototype.commitSelection = function(f) {
				"undefined" === typeof f && (f = !0);
				f = e.prototype.commitSelection.call(this, f);
				this.updateLabelDisplay();
				return f;
			};
			d.prototype._isItemIndexSelected = function(f) {
				return this._userProposedSelectedIndex == f;
			};
			d.prototype.openDropDown = function() {
				this.dropDownController.openDropDown();
			};
			d.prototype.closeDropDown = function(f) {
				this.dropDownController.closeDropDown(f);
			};
			d.prototype.updateLabelDisplay = function(f) {};
			d.prototype._changeHighlightedSelection = function(f, g) {
				this.itemSelected(this._userProposedSelectedIndex, !1);
				this._userProposedSelectedIndex = f;
				this.itemSelected(this._userProposedSelectedIndex, !0);
			};
			d.prototype.dataProvider_collectionChangeHandler = function(f) {
				e.prototype.dataProvider_collectionChangeHandler.call(this, f);
				this._labelChanged = !0;
				this.invalidateProperties();
			};
			d.prototype.item_mouseDownHandler = function(f) {
				e.prototype.item_mouseDownHandler.call(this, f);
				this._dispatchListEvent(f, c.ListEvent.ITEM_CLICK, f.currentTarget);
				this._userProposedSelectedIndex = this.selectedIndex;
				this.closeDropDown(!0);
			};
			d.prototype._dropDownController_openHandler = function(f) {
				this.addEventListener(c.UIEvent.UPDATE_COMPLETE, this._open_updateCompleteHandler, this);
				this._userProposedSelectedIndex = this.selectedIndex;
				this.invalidateSkinState();
			};
			d.prototype._open_updateCompleteHandler = function(f) {
				this.removeEventListener(c.UIEvent.UPDATE_COMPLETE, this._open_updateCompleteHandler, this);
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.OPEN);
			};
			d.prototype.dropDownController_closeHandler = function(f) {
				this.addEventListener(c.UIEvent.UPDATE_COMPLETE, this.close_updateCompleteHandler, this);
				this.invalidateSkinState();
				f.isDefaultPrevented() ? this._changeHighlightedSelection(this.selectedIndex) : this._setSelectedIndex(this._userProposedSelectedIndex, !0);
			};
			d.prototype.close_updateCompleteHandler = function(f) {
				this.removeEventListener(c.UIEvent.UPDATE_COMPLETE, this.close_updateCompleteHandler, this);
				c.UIEvent.dispatchUIEvent(this, c.UIEvent.CLOSE);
			};
			d.PAGE_SIZE = 5;
			return d;
		}(c.List);
		c.DropDownListBase = b;
		b.prototype.__class__ = "egret.gui.DropDownListBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.iconFieldOrFunctionChanged = !1;
				this.hostComponentKey = "egret.gui.Tree";
			}
			__extends(d, e);
			d.prototype.createChildren = function() {
				this.itemRenderer || (this.itemRenderer = d.defaultTreeRendererFactory);
				e.prototype.createChildren.call(this);
			};
			d.prototype.updateRenderer = function(f, g, i) {
				if ("hasChildren" in f && "hasChildren" in this.dataProvider) {
					var h = this.dataProvider;
					f.hasChildren = h.hasChildren(i);
					f.opened = h.isItemOpen(i);
					f.depth = h.getDepth(i);
					f.iconSkinName = this.itemToIcon(i);
				}
				return e.prototype.updateRenderer.call(this, f, g, i);
			};
			d.prototype.itemToIcon = function(f) {
				if (!f) {
					return null;
				}
				if (null != this._iconFunction) {
					return this._iconFunction(f);
				}
				var g;
				if (f instanceof Object) {
					try {
						f[this.iconField] && (g = f[this.iconField]);
					} catch (h) {}
				}
				return g;
			};
			d.prototype.dataGroup_rendererAddHandler = function(f) {
				e.prototype.dataGroup_rendererAddHandler.call(this, f);
				f.renderer && "hasChildren" in f.renderer && f.renderer.addEventListener(c.TreeEvent.ITEM_OPENING, this.onItemOpening, this);
			};
			d.prototype.onItemOpening = function(g) {
				var h = g.itemRenderer,
					j = g.item,
					i = this._getDataProvider();
				h && i && "hasChildren" in i && this.dispatchEvent(g) && (g = !h.opened, i.expandItem(j, g), c.TreeEvent.dispatchTreeEvent(this, g ? c.TreeEvent.ITEM_OPEN : c.TreeEvent.ITEM_CLOSE, h.itemIndex, j, h));
			};
			d.prototype.dataGroup_rendererRemoveHandler = function(f) {
				e.prototype.dataGroup_rendererRemoveHandler.call(this, f);
				f.renderer && "hasChildren" in f.renderer && f.renderer.removeEventListener(c.TreeEvent.ITEM_OPENING, this.onItemOpening, this);
			};
			Object.defineProperty(d.prototype, "iconField", {
				get: function() {
					return this._iconField;
				},
				set: function(f) {
					this._iconField != f && (this._iconField = f, this.iconFieldOrFunctionChanged = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "iconFunction", {
				get: function() {
					return this._iconFunction;
				},
				set: function(f) {
					this._iconFunction != f && (this._iconFunction = f, this.iconFieldOrFunctionChanged = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.expandItem = function(f, g) {
				"undefined" === typeof g && (g = !0);
				var h = this._getDataProvider();
				h && "hasChildren" in h && h.expandItem(f, g);
			};
			d.prototype.isItemOpen = function(f) {
				var g = this._getDataProvider();
				return g && "hasChildren" in g ? g.isItemOpen(f) : !1;
			};
			d.prototype.dataProvider_collectionChangeHandler = function(f) {
				e.prototype.dataProvider_collectionChangeHandler.call(this, f);
				if (f.kind == c.CollectionEventKind.OPEN || f.kind == c.CollectionEventKind.CLOSE) {
					var g = this.dataGroup ? this.dataGroup.getElementAt(f.location) : null;
					g && (this.updateRenderer(g, f.location, f.items[0]), f.kind == c.CollectionEventKind.CLOSE && this.layout && this.layout.useVirtualLayout && (this.layout.clearVirtualLayoutCache(), this.invalidateSize()));
				}
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				if (this.iconFieldOrFunctionChanged) {
					if (null != this.dataGroup) {
						var f;
						if (this.layout && this.layout.useVirtualLayout) {
							for (var g = this.dataGroup.getElementIndicesInView(), i = g.length, h = 0; h < i; h++) {
								f = g[h], this.updateRendererIconProperty(f);
							}
						} else {
							for (g = this.dataGroup.numElements, f = 0; f < g; f++) {
								this.updateRendererIconProperty(f);
							}
						}
					}
					this.iconFieldOrFunctionChanged = !1;
				}
			};
			d.prototype.updateRendererIconProperty = function(f) {
				if (f = this.dataGroup.getElementAt(f)) {
					f.iconSkinName = this.itemToIcon(f.data);
				}
			};
			d.defaultTreeRendererFactory = new c.ClassFactory(c.TreeItemRenderer);
			return d;
		}(c.List);
		c.Tree = b;
		b.prototype.__class__ = "egret.gui.Tree";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._prompt = "";
				this.hostComponentKey = "egret.gui.DropDownList";
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "prompt", {
				get: function() {
					return this._prompt;
				},
				set: function(f) {
					this._prompt != f && (this._prompt = f, this._labelChanged = !0, this.invalidateProperties());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.partAdded = function(f, g) {
				e.prototype.partAdded.call(this, f, g);
				g == this.labelDisplay && (this._labelChanged = !0, this.invalidateProperties());
			};
			d.prototype.updateLabelDisplay = function(f) {
				"undefined" === typeof f && (f = void 0);
				this.labelDisplay && (void 0 == f && (f = this.selectedItem), this.labelDisplay.text = null != f && void 0 != f ? this.itemToLabel(f) : this._prompt);
			};
			return d;
		}(c.DropDownListBase);
		c.DropDownList = b;
		b.prototype.__class__ = "egret.gui.DropDownList";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._allowDeselection = !0;
				this.hostComponentKey = "egret.gui.TabBarButton";
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "allowDeselection", {
				get: function() {
					return this._allowDeselection;
				},
				set: function(f) {
					this._allowDeselection = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "data", {
				get: function() {
					return this._data;
				},
				set: function(f) {
					this._data = f;
					this.dispatchEventWith("dataChange");
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "itemIndex", {
				get: function() {
					return this._itemIndex;
				},
				set: function(f) {
					this._itemIndex = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype._setLabel = function(f) {
				f != this._getLabel() && (e.prototype._setLabel.call(this, f), this.labelDisplay && (this.labelDisplay.text = this._getLabel()));
			};
			d.prototype.buttonReleased = function() {
				this.selected && !this.allowDeselection || e.prototype.buttonReleased.call(this);
			};
			return d;
		}(c.ToggleButtonBase);
		c.TabBarButton = b;
		b.prototype.__class__ = "egret.gui.TabBarButton";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.hostComponentKey = "egret.gui.TabBar";
				this.requireSelection = !0;
			}
			__extends(d, e);
			d.prototype.c = function(f) {
				f != this._requireSelection && (e.prototype._setRequireSelection.call(this, f), this.requireSelectionChanged_tabBar = !0, this.invalidateProperties());
			};
			d.prototype._setDataProvider = function(f) {
				this.dataProvider instanceof c.ViewStack && (this.dataProvider.removeEventListener("IndexChanged", this.onViewStackIndexChange, this), this.removeEventListener(c.IndexChangeEvent.CHANGE, this.onIndexChanged, this));
				f instanceof c.ViewStack && (f.addEventListener("IndexChanged", this.onViewStackIndexChange, this), this.addEventListener(c.IndexChangeEvent.CHANGE, this.onIndexChanged, this));
				e.prototype._setDataProvider.call(this, f);
			};
			d.prototype.onIndexChanged = function(f) {
				this.dataProvider._setSelectedIndex(f.newIndex, !1);
			};
			d.prototype.onViewStackIndexChange = function(f) {
				this._setSelectedIndex(this.dataProvider.selectedIndex, !1);
			};
			d.prototype.commitProperties = function() {
				e.prototype.commitProperties.call(this);
				if (this.requireSelectionChanged_tabBar && this.dataGroup) {
					this.requireSelectionChanged_tabBar = !1;
					for (var f = this.dataGroup.numElements, g = 0; g < f; g++) {
						var h = this.dataGroup.getElementAt(g);
						h && (h.allowDeselection = !this.requireSelection);
					}
				}
			};
			d.prototype.dataGroup_rendererAddHandler = function(f) {
				e.prototype.dataGroup_rendererAddHandler.call(this, f);
				if (f = f.renderer) {
					f.addEventListener(a.TouchEvent.TOUCH_TAP, this.item_clickHandler, this), f instanceof c.TabBarButton && (f.allowDeselection = !this.requireSelection);
				}
			};
			d.prototype.dataGroup_rendererRemoveHandler = function(f) {
				e.prototype.dataGroup_rendererRemoveHandler.call(this, f);
				(f = f.renderer) && f.removeEventListener(a.TouchEvent.TOUCH_TAP, this.item_clickHandler, this);
			};
			d.prototype.item_clickHandler = function(f) {
				var g = f.currentTarget,
					h;
				h = g ? g.itemIndex : this.dataGroup.getElementIndex(f.currentTarget);
				h == this.selectedIndex ? this.requireSelection || this._setSelectedIndex(c.ListBase.NO_SELECTION, !0) : this._setSelectedIndex(h, !0);
				this._dispatchListEvent(f, c.ListEvent.ITEM_CLICK, g);
			};
			return d;
		}(c.ListBase);
		c.TabBar = b;
		b.prototype.__class__ = "egret.gui.TabBar";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
				this.ignoreTouchBegin = !1;
				this._velocityY = this._velocityX = 0;
				this._previousVelocityX = [];
				this._previousVelocityY = [];
			}
			__extends(d, e);
			d.prototype.measure = function() {
				this._viewport && (this.measuredWidth = this._viewport.preferredWidth, this.measuredHeight = this._viewport.preferredHeight);
			};
			d.prototype.updateDisplayList = function(f, g) {
				this._viewport.setLayoutBoundsSize(f, g);
			};
			Object.defineProperty(d.prototype, "verticalScrollPolicy", {
				get: function() {
					return this._verticalScrollPolicy;
				},
				set: function(f) {
					this._verticalScrollPolicy = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "horizontalScrollPolicy", {
				get: function() {
					return this._horizontalScrollPolicy;
				},
				set: function(f) {
					this._horizontalScrollPolicy = f;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "viewport", {
				get: function() {
					return this._viewport;
				},
				set: function(f) {
					f != this._viewport && (this.uninstallViewport(), this._viewport = f, this.installViewport(), this.dispatchEventWith("viewportChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.installViewport = function() {
				this.viewport && (this.viewport.clipAndEnableScrolling = !0, this.viewport.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.viewport.addEventListener(a.TouchEvent.TOUCH_BEGIN, this.onTouchBeginCapture, this, !0), this.viewport.addEventListener(a.TouchEvent.TOUCH_END, this.onTouchEndCapture, this, !0), this._addToDisplayListAt(this.viewport, 0));
			};
			d.prototype.uninstallViewport = function() {
				this.viewport && (this.viewport.clipAndEnableScrolling = !1, this.viewport.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.viewport.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this.onTouchBeginCapture, this, !0), this.viewport.removeEventListener(a.TouchEvent.TOUCH_END, this.onTouchEndCapture, this, !0), this._removeFromDisplayList(this.viewport));
			};
			d.prototype.onTouchEndCapture = function(f) {
				this.delayTouchBeginEvent && (f.stopPropagation(), this.delayTouchEndEvent = this.cloneTouchEvent(f), this.onTouchBeginTimer(), this.touchEndTimer || (this.touchEndTimer = new a.Timer(100, 1), this.touchEndTimer.addEventListener(a.TimerEvent.TIMER_COMPLETE, this.onTouchEndTimer, this)), this.touchEndTimer.start());
			};
			d.prototype.onTouchEndTimer = function(f) {
				this.touchEndTimer.stop();
				f = this.delayTouchEndEvent;
				this.delayTouchEndEvent = null;
				this.dispatchPropagationEvent(f);
			};
			d.prototype.dispatchPropagationEvent = function(f) {
				for (var g = [], j = f._target; j;) {
					g.push(j), j = j.parent;
				}
				for (var i = this._viewport, h = 1;; h += 2) {
					j = g[h];
					if (!j || j === i) {
						break;
					}
					g.unshift(j);
				}
				j = g.indexOf(f._target);
				this._dispatchPropagationEvent(f, g, j);
			};
			d.prototype.onTouchBeginCapture = function(f) {
				var h = this.checkScrollPolicy();
				if (h) {
					for (var g = f.target; g != this;) {
						if (g instanceof d && (h = g.checkScrollPolicy())) {
							return;
						}
						g = g.parent;
					}
					this.delayTouchEndEvent && (this.delayTouchEndEvent = null, this.touchEndTimer.stop());
					f.stopPropagation();
					this.delayTouchBeginEvent = this.cloneTouchEvent(f);
					this.touchBeginTimer || (this.touchBeginTimer = new a.Timer(100, 1), this.touchBeginTimer.addEventListener(a.TimerEvent.TIMER_COMPLETE, this.onTouchBeginTimer, this));
					this.touchBeginTimer.start();
					this.onTouchBegin(f);
				}
			};
			d.prototype.cloneTouchEvent = function(f) {
				var g = new a.TouchEvent(f._type, f._bubbles, f.cancelable);
				g.touchPointID = f.touchPointID;
				g._stageX = f._stageX;
				g._stageY = f._stageY;
				g.ctrlKey = f.ctrlKey;
				g.altKey = f.altKey;
				g.shiftKey = f.shiftKey;
				g.touchDown = f.touchDown;
				g._isDefaultPrevented = !1;
				g._target = f._target;
				return g;
			};
			d.prototype.onTouchBeginTimer = function(f) {
				this.touchBeginTimer.stop();
				f = this.delayTouchBeginEvent;
				this.delayTouchBeginEvent = null;
				this.dispatchPropagationEvent(f);
			};
			d.prototype.checkScrollPolicy = function() {
				var f = this._viewport,
					g;
				switch (this._horizontalScrollPolicy) {
					case "auto":
						g = f.contentWidth > f.width ? !0 : !1;
						break;
					case "on":
						g = !0;
						break;
					case "off":
						g = !1;
				}
				this._horizontalCanScroll = g;
				var h;
				switch (this._verticalScrollPolicy) {
					case "auto":
						h = f.contentHeight > f.height ? !0 : !1;
						break;
					case "on":
						h = !0;
						break;
					case "off":
						h = !1;
				}
				this._verticalCanScroll = h;
				return g || h;
			};
			d.prototype.onTouchBegin = function(f) {
				if (!f.isDefaultPrevented() && this.checkScrollPolicy()) {
					this.verticalAnimator && this.verticalAnimator.isPlaying && this.verticalAnimator.stop();
					this.horizontalAnimator && this.horizontalAnimator.isPlaying && this.horizontalAnimator.stop();
					var g = this._viewport,
						h = g.horizontalScrollPosition,
						g = g.verticalScrollPosition;
					this._offsetPointX = h + f.stageX;
					this._offsetPointY = g + f.stageY;
					this._velocityY = this._velocityX = 0;
					this._previousVelocityX.length = 0;
					this._previousVelocityY.length = 0;
					this._previousTouchTime = a.getTimer();
					this._previousTouchX = this._startTouchX = this._currentTouchX = f.stageX;
					this._previousTouchY = this._startTouchY = this._currentTouchY = f.stageY;
					this._startHorizontalScrollPosition = h;
					this._startVerticalScrollPosition = g;
					c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
					c.UIGlobals.stage.addEventListener(a.TouchEvent.TOUCH_END, this.onTouchEnd, this);
					c.UIGlobals.stage.addEventListener(a.Event.LEAVE_STAGE, this.onTouchEnd, this);
					this.addEventListener(a.Event.ENTER_FRAME, this.enterFrameHandler, this);
					f.preventDefault();
				}
			};
			d.prototype.onTouchMove = function(f) {
				this._currentTouchX = f.stageX;
				this._currentTouchY = f.stageY;
				this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
				var g = this._viewport;
				if (this._horizontalCanScroll) {
					var h = this._offsetPointX - f.stageX;
					0 > h && (h *= 0.5);
					h > g.contentWidth - g.width && (h = 0.5 * (h + g.contentWidth - g.width));
					g.horizontalScrollPosition = h;
				}
				this._verticalCanScroll && (f = this._offsetPointY - f.stageY, 0 > f && (f *= 0.5), f > g.contentHeight - g.height && (f = 0.5 * (f + g.contentHeight - g.height)), g.verticalScrollPosition = f);
			};
			d.prototype.onTouchEnd = function(f) {
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
				c.UIGlobals.stage.removeEventListener(a.TouchEvent.TOUCH_END, this.onTouchEnd, this);
				c.UIGlobals.stage.removeEventListener(a.Event.LEAVE_STAGE, this.onTouchEnd, this);
				this.removeEventListener(a.Event.ENTER_FRAME, this.enterFrameHandler, this);
				this._horizontalCanScroll && this.checkHorizontalScrollPosition();
				this._verticalCanScroll && this.checkVerticalScrollPosition();
			};
			d.easeOut = function(f) {
				f -= 1;
				return f * f * f + 1;
			};
			d.prototype.enterFrameHandler = function(f) {
				f = a.getTimer();
				var g = f - this._previousTouchTime;
				0 < g && (this._previousVelocityX[this._previousVelocityX.length] = this._velocityX, 4 < this._previousVelocityX.length && this._previousVelocityX.shift(), this._previousVelocityY[this._previousVelocityY.length] = this._velocityY, 4 < this._previousVelocityY.length && this._previousVelocityY.shift(), this._velocityX = (this._currentTouchX - this._previousTouchX) / g, this._velocityY = (this._currentTouchY - this._previousTouchY) / g, this._previousTouchTime = f, this._previousTouchX = this._currentTouchX, this._previousTouchY = this._currentTouchY);
				f = Math.abs(this._currentTouchX - this._startTouchX);
				g = Math.abs(this._currentTouchY - this._startTouchY);
				this._horizontalCanScroll && 0.04 <= f && (this._startTouchX = this._currentTouchX, this._startHorizontalScrollPosition = this._viewport.horizontalScrollPosition);
				this._verticalCanScroll && 0.04 <= g && (this._startTouchY = this._currentTouchY, this._startVerticalScrollPosition = this._viewport.verticalScrollPosition);
			};
			d.prototype.checkHorizontalScrollPosition = function() {
				for (var h = this._viewport, o = h.horizontalScrollPosition, h = h.contentWidth - h.width, h = Math.max(0, h), n = 2.33 * this._velocityX, l = this._previousVelocityX.length, j = 2.33, i = 0; i < l; i++) {
					var g = d.VELOCITY_WEIGHTS[i],
						n = n + this._previousVelocityX.shift() * g,
						j = j + g;
				}
				n /= j;
				0.02 >= Math.abs(n) ? this.finishScrollingHorizontally() : (o = this.getAnimationDatas(n, o, h), this.throwHorizontally(o[0], o[1]));
			};
			d.prototype.checkVerticalScrollPosition = function() {
				for (var h = this._viewport, o = h.verticalScrollPosition, h = h.contentHeight - h.height, n = 2.33 * this._velocityY, l = this._previousVelocityY.length, j = 2.33, i = 0; i < l; i++) {
					var g = d.VELOCITY_WEIGHTS[i],
						n = n + this._previousVelocityY.shift() * g,
						j = j + g;
				}
				n /= j;
				0.02 >= Math.abs(n) ? this.finishScrollingVertically() : (o = this.getAnimationDatas(n, o, h), this.throwVertically(o[0], o[1]));
			};
			d.prototype.getAnimationDatas = function(g, m, l) {
				var j = Math.abs(g),
					i = 0,
					h = m + (g - 0.02) / Math.log(0.998);
				if (0 > h || h > l) {
					for (h = m; 0.02 < Math.abs(g);) {
						h -= g, g = 0 > h || h > l ? 0.998 * g * 0.95 : 0.998 * g, i++;
					}
				} else {
					i = Math.log(0.02 / j) / Math.log(0.998);
				}
				d.animationData || (d.animationData = [0, 0]);
				g = d.animationData;
				g[0] = h;
				g[1] = i;
				return g;
			};
			d.prototype.finishScrollingHorizontally = function(f) {
				var h = this._viewport;
				f = h.horizontalScrollPosition;
				var h = h.contentWidth - h.width,
					g = f;
				0 > f && (g = 0);
				f > h && (g = h);
				this.throwHorizontally(g, 300);
			};
			d.prototype.throwHorizontally = function(f, h) {
				"undefined" === typeof h && (h = 500);
				var g = this._viewport.horizontalScrollPosition;
				g != f && (this.horizontalAnimator || (this.horizontalAnimator = new c.Animation(this.horizontalUpdateHandler, this), this.horizontalAnimator.endFunction = this.finishScrollingHorizontally, this.horizontalAnimator.easerFunction = d.easeOut), this.horizontalAnimator.isPlaying && this.horizontalAnimator.stop(), this.horizontalAnimator.duration = h, this.horizontalAnimator.motionPaths = [{
					prop: "hsp",
					from: g,
					to: f
				}], this.horizontalAnimator.play());
			};
			d.prototype.horizontalUpdateHandler = function(f) {
				this._viewport.horizontalScrollPosition = f.currentValue.hsp;
			};
			d.prototype.finishScrollingVertically = function(f) {
				var h = this._viewport;
				f = h.verticalScrollPosition;
				var h = h.contentHeight - h.height,
					h = Math.max(0, h),
					g = f;
				0 > f && (g = 0);
				f > h && (g = h);
				this.throwVertically(g, 300);
			};
			d.prototype.throwVertically = function(f, h) {
				"undefined" === typeof h && (h = 500);
				var g = this._viewport.verticalScrollPosition;
				g != f && (this.verticalAnimator || (this.verticalAnimator = new c.Animation(this.verticalUpdateHandler, this), this.verticalAnimator.endFunction = this.finishScrollingVertically, this.verticalAnimator.easerFunction = d.easeOut), this.verticalAnimator.isPlaying && this.verticalAnimator.stop(), this.verticalAnimator.duration = h, this.verticalAnimator.motionPaths = [{
					prop: "vsp",
					from: g,
					to: f
				}], this.verticalAnimator.play());
			};
			d.prototype.verticalUpdateHandler = function(f) {
				this._viewport.verticalScrollPosition = f.currentValue.vsp;
			};
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return this.viewport ? 1 : 0;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.throwRangeError = function(f) {
				throw new RangeError('\u7d22\u5f15:"' + f + '"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4');
			};
			d.prototype.getElementAt = function(f) {
				if (this.viewport && 0 == f) {
					return this.viewport;
				}
				this.throwRangeError(f);
				return null;
			};
			d.prototype.getElementIndex = function(f) {
				return null != f && f == this.viewport ? 0 : -1;
			};
			d.prototype.containsElement = function(f) {
				return null != f && f == this.viewport ? !0 : !1;
			};
			d.prototype.throwNotSupportedError = function() {
				throw Error("\u6b64\u65b9\u6cd5\u5728Scroller\u7ec4\u4ef6\u5185\u4e0d\u53ef\u7528!");
			};
			d.prototype.addElement = function(f) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.addElementAt = function(f, g) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.removeElement = function(f) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.removeElementAt = function(f) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.removeAllElements = function() {
				this.throwNotSupportedError();
			};
			d.prototype.setElementIndex = function(f, g) {
				this.throwNotSupportedError();
			};
			d.prototype.swapElements = function(f, g) {
				this.throwNotSupportedError();
			};
			d.prototype.swapElementsAt = function(f, g) {
				this.throwNotSupportedError();
			};
			d.prototype.addChild = function(f) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.addChildAt = function(f, g) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.removeChild = function(f) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.removeChildAt = function(f) {
				this.throwNotSupportedError();
				return null;
			};
			d.prototype.setChildIndex = function(f, g) {
				this.throwNotSupportedError();
			};
			d.prototype.swapChildren = function(f, g) {
				this.throwNotSupportedError();
			};
			d.prototype.swapChildrenAt = function(f, g) {
				this.throwNotSupportedError();
			};
			d.VELOCITY_WEIGHTS = [1, 1.33, 1.66, 2];
			return d;
		}(c.UIComponent);
		c.Scroller = b;
		b.prototype.__class__ = "egret.gui.Scroller";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f, h, g) {
				"undefined" === typeof h && (h = !1);
				"undefined" === typeof g && (g = !1);
				e.call(this, f, h, g);
			}
			__extends(d, e);
			d.dispatchUIEvent = function(f, g) {
				a.Event._dispatchByTarget(d, f, g);
			};
			d.INITIALIZE = "initialize";
			d.CREATION_COMPLETE = "creationComplete";
			d.UPDATE_COMPLETE = "updateComplete";
			d.BUTTON_DOWN = "buttonDown";
			d.CHANGE_END = "changeEnd";
			d.CHANGE_START = "changeStart";
			d.CHANGING = "changing";
			d.VALUE_COMMIT = "valueCommit";
			d.SKIN_CHANGED = "skinChanged";
			d.CONTENT_CHANGED = "contentChanged";
			d.OPEN = "open";
			d.CLOSE = "close";
			d.PLAY_COMPLETE = "playComplete";
			return d;
		}(a.Event);
		c.UIEvent = b;
		b.prototype.__class__ = "egret.gui.UIEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(j, r, q, p, o, n, g, i) {
				"undefined" === typeof r && (r = !1);
				"undefined" === typeof q && (q = !1);
				"undefined" === typeof p && (p = null);
				"undefined" === typeof o && (o = null);
				"undefined" === typeof n && (n = null);
				"undefined" === typeof g && (g = null);
				"undefined" === typeof i && (i = null);
				e.call(this, j, r, q);
				this.kind = p;
				this.property = o;
				this.oldValue = n;
				this.newValue = g;
				this.source = i;
			}
			__extends(d, e);
			d.dispatchPropertyChangeEvent = function(i, p, o, n, l, j) {
				"undefined" === typeof p && (p = null);
				"undefined" === typeof o && (o = null);
				"undefined" === typeof n && (n = null);
				"undefined" === typeof l && (l = null);
				"undefined" === typeof j && (j = null);
				var g = a.Event._getPropertyData(d);
				g.kind = p;
				g.property = o;
				g.oldValue = n;
				g.newValue = l;
				g.source = j;
				a.Event._dispatchByTarget(d, i, d.PROPERTY_CHANGE, g);
			};
			d.PROPERTY_CHANGE = "propertyChange";
			return d;
		}(a.Event);
		c.PropertyChangeEvent = b;
		b.prototype.__class__ = "egret.gui.PropertyChangeEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.UPDATE = "update";
			d.DELETE = "delete";
			return d;
		}();
		c.PropertyChangeEventKind = b;
		b.prototype.__class__ = "egret.gui.PropertyChangeEventKind";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = NaN);
				"undefined" === typeof k && (k = NaN);
				"undefined" === typeof j && (j = !1);
				"undefined" === typeof i && (i = !1);
				e.call(this, g, j, i);
				this.oldX = l;
				this.oldY = k;
			}
			__extends(d, e);
			d.dispatchMoveEvent = function(g, j, i) {
				"undefined" === typeof j && (j = NaN);
				"undefined" === typeof i && (i = NaN);
				var h = a.Event._getPropertyData(d);
				h.oldX = j;
				h.oldY = i;
				a.Event._dispatchByTarget(d, g, d.MOVE, h);
			};
			d.MOVE = "move";
			return d;
		}(a.Event);
		c.MoveEvent = b;
		b.prototype.__class__ = "egret.gui.MoveEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = NaN);
				"undefined" === typeof k && (k = NaN);
				"undefined" === typeof j && (j = !1);
				"undefined" === typeof i && (i = !1);
				e.call(this, g, j, i);
				this.oldWidth = l;
				this.oldHeight = k;
			}
			__extends(d, e);
			d.dispatchResizeEvent = function(g, j, i) {
				"undefined" === typeof j && (j = NaN);
				"undefined" === typeof i && (i = NaN);
				var h = a.Event._getPropertyData(d);
				h.oldWidth = j;
				h.oldHeight = i;
				a.Event._dispatchByTarget(d, g, d.RESIZE, h);
			};
			d.RESIZE = "resize";
			return d;
		}(a.Event);
		c.ResizeEvent = b;
		b.prototype.__class__ = "egret.gui.ResizeEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = !1);
				"undefined" === typeof k && (k = !1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = null);
				e.call(this, g, l, k);
				this.partName = j;
				this.instance = i;
			}
			__extends(d, e);
			d.dispatchSkinPartEvent = function(g, l, k, j) {
				"undefined" === typeof k && (k = null);
				"undefined" === typeof j && (j = null);
				var i = a.Event._getPropertyData(d);
				i.partName = k;
				i.instance = j;
				a.Event._dispatchByTarget(d, g, l, i);
			};
			d.PART_ADDED = "partAdded";
			d.PART_REMOVED = "partRemoved";
			return d;
		}(a.Event);
		c.SkinPartEvent = b;
		b.prototype.__class__ = "egret.gui.SkinPartEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, j, i, h) {
				"undefined" === typeof j && (j = !1);
				"undefined" === typeof i && (i = !1);
				"undefined" === typeof h && (h = -1);
				e.call(this, g, j, i);
				this.detail = h;
			}
			__extends(d, e);
			d.dispatchCloseEvent = function(g, j, i) {
				"undefined" === typeof i && (i = -1);
				var h = a.Event._getPropertyData(d);
				h.detail = i;
				a.Event._dispatchByTarget(d, g, j, h);
			};
			d.CLOSE = "close";
			return d;
		}(a.Event);
		c.CloseEvent = b;
		b.prototype.__class__ = "egret.gui.CloseEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(j, r, q, p, o, n, g, i) {
				"undefined" === typeof r && (r = !1);
				"undefined" === typeof q && (q = !1);
				"undefined" === typeof p && (p = null);
				"undefined" === typeof o && (o = -1);
				"undefined" === typeof n && (n = -1);
				"undefined" === typeof g && (g = null);
				"undefined" === typeof i && (i = null);
				e.call(this, j, r, q);
				this.kind = p;
				this.location = o;
				this.oldLocation = n;
				this.items = g ? g : [];
				this.oldItems = i ? i : [];
			}
			__extends(d, e);
			d.dispatchCollectionEvent = function(i, r, q, p, o, n, g) {
				"undefined" === typeof q && (q = null);
				"undefined" === typeof p && (p = -1);
				"undefined" === typeof o && (o = -1);
				"undefined" === typeof n && (n = null);
				"undefined" === typeof g && (g = null);
				var j = a.Event._getPropertyData(d);
				j.kind = q;
				j.location = p;
				j.oldLocation = o;
				j.items = n;
				j.oldItems = g;
				a.Event._dispatchByTarget(d, i, r, j);
			};
			d.COLLECTION_CHANGE = "collectionChange";
			return d;
		}(a.Event);
		c.CollectionEvent = b;
		b.prototype.__class__ = "egret.gui.CollectionEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.ADD = "add";
			d.MOVE = "move";
			d.REFRESH = "refresh";
			d.REMOVE = "remove";
			d.REPLACE = "replace";
			d.RESET = "reset";
			d.UPDATE = "update";
			d.OPEN = "open";
			d.CLOSE = "close";
			return d;
		}();
		c.CollectionEventKind = b;
		b.prototype.__class__ = "egret.gui.CollectionEventKind";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = !1);
				"undefined" === typeof k && (k = !1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = -1);
				e.call(this, g, l, k);
				this.element = j;
				this.index = i;
			}
			__extends(d, e);
			d.dispatchElementExistenceEvent = function(g, l, k, j) {
				"undefined" === typeof k && (k = null);
				"undefined" === typeof j && (j = -1);
				var i = a.Event._getPropertyData(d);
				i.element = k;
				i.index = j;
				a.Event._dispatchByTarget(d, g, l, i);
			};
			d.ELEMENT_ADD = "elementAdd";
			d.ELEMENT_REMOVE = "elementRemove";
			return d;
		}(a.Event);
		c.ElementExistenceEvent = b;
		b.prototype.__class__ = "egret.gui.ElementExistenceEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = !1);
				"undefined" === typeof k && (k = !1);
				"undefined" === typeof j && (j = -1);
				"undefined" === typeof i && (i = -1);
				e.call(this, g, l, k);
				this.oldIndex = j;
				this.newIndex = i;
			}
			__extends(d, e);
			d.dispatchIndexChangeEvent = function(g, n, m, l, j) {
				"undefined" === typeof m && (m = -1);
				"undefined" === typeof l && (l = -1);
				"undefined" === typeof j && (j = !1);
				var i = a.Event._getPropertyData(d);
				i.oldIndex = m;
				i.newIndex = l;
				return a.Event._dispatchByTarget(d, g, n, i, !1, j);
			};
			d.CHANGE = "change";
			d.CHANGING = "changing";
			return d;
		}(a.Event);
		c.IndexChangeEvent = b;
		b.prototype.__class__ = "egret.gui.IndexChangeEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(A, x, w, v, u, s, o, q, j, g, i, B, z) {
				"undefined" === typeof x && (x = !0);
				"undefined" === typeof w && (w = !0);
				"undefined" === typeof v && (v = 0);
				"undefined" === typeof u && (u = 0);
				"undefined" === typeof s && (s = 0);
				"undefined" === typeof o && (o = !1);
				"undefined" === typeof q && (q = !1);
				"undefined" === typeof j && (j = !1);
				"undefined" === typeof g && (g = !1);
				"undefined" === typeof i && (i = -1);
				"undefined" === typeof B && (B = null);
				"undefined" === typeof z && (z = null);
				e.call(this, A, x, w, v, u, s, o, q, j, g);
				this.itemIndex = i;
				this.item = B;
				this.itemRenderer = z;
			}
			__extends(d, e);
			d.dispatchListEvent = function(i, p, o, n, l, j) {
				"undefined" === typeof o && (o = null);
				"undefined" === typeof n && (n = -1);
				"undefined" === typeof l && (l = null);
				"undefined" === typeof j && (j = null);
				var g = a.Event._getPropertyData(d);
				g.touchPointID = o.touchPointID;
				g._stageX = o.stageX;
				g._stageY = o.stageY;
				g.ctrlKey = o.ctrlKey;
				g.altKey = o.altKey;
				g.shiftKey = o.shiftKey;
				g.touchDown = o.touchDown;
				g.itemIndex = n;
				g.item = l;
				g.itemRenderer = j;
				a.Event._dispatchByTarget(d, i, p, g);
			};
			d.ITEM_ROLL_OUT = "itemRollOut";
			d.ITEM_ROLL_OVER = "itemRollOver";
			d.ITEM_CLICK = "itemClick";
			return d;
		}(a.TouchEvent);
		c.ListEvent = b;
		b.prototype.__class__ = "egret.gui.ListEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = !1);
				"undefined" === typeof k && (k = !1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = !1);
				e.call(this, g, l, k);
				this.popUp = j;
				this.modal = i;
			}
			__extends(d, e);
			d.dispatchPopUpEvent = function(g, l, k, j) {
				"undefined" === typeof k && (k = null);
				"undefined" === typeof j && (j = !1);
				var i = a.Event._getPropertyData(d);
				i.popUp = k;
				i.modal = j;
				a.Event._dispatchByTarget(d, g, l, i);
			};
			d.ADD_POPUP = "addPopUp";
			d.REMOVE_POPUP = "removePopUp";
			d.BRING_TO_FRONT = "bringToFront";
			return d;
		}(a.Event);
		c.PopUpEvent = b;
		b.prototype.__class__ = "egret.gui.PopUpEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, n, m, l, j, i) {
				"undefined" === typeof n && (n = !1);
				"undefined" === typeof m && (m = !1);
				"undefined" === typeof l && (l = null);
				"undefined" === typeof j && (j = -1);
				"undefined" === typeof i && (i = null);
				e.call(this, g, n, m);
				this.renderer = l;
				this.index = j;
				this.data = i;
			}
			__extends(d, e);
			d.dispatchRendererExistenceEvent = function(g, n, m, l, j) {
				"undefined" === typeof m && (m = null);
				"undefined" === typeof l && (l = -1);
				"undefined" === typeof j && (j = null);
				var i = a.Event._getPropertyData(d);
				i.renderer = m;
				i.index = l;
				i.data = j;
				a.Event._dispatchByTarget(d, g, n, i);
			};
			d.RENDERER_ADD = "rendererAdd";
			d.RENDERER_REMOVE = "rendererRemove";
			return d;
		}(a.Event);
		c.RendererExistenceEvent = b;
		b.prototype.__class__ = "egret.gui.RendererExistenceEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, l, k, j, i) {
				"undefined" === typeof l && (l = !1);
				"undefined" === typeof k && (k = !1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = null);
				e.call(this, g, l, k);
				this.oldState = j;
				this.newState = i;
			}
			__extends(d, e);
			d.dispatchStateChangeEvent = function(g, l, k, j) {
				"undefined" === typeof k && (k = null);
				"undefined" === typeof j && (j = null);
				var i = a.Event._getPropertyData(d);
				i.oldState = k;
				i.newState = j;
				a.Event._dispatchByTarget(d, g, l, i);
			};
			d.CURRENT_STATE_CHANGE = "currentStateChange";
			d.CURRENT_STATE_CHANGING = "currentStateChanging";
			return d;
		}(a.Event);
		c.StateChangeEvent = b;
		b.prototype.__class__ = "egret.gui.StateChangeEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(f, h, g) {
				"undefined" === typeof h && (h = !1);
				"undefined" === typeof g && (g = !1);
				e.call(this, f, h, g);
			}
			__extends(d, e);
			d.dispatchTrackBaseEvent = function(f, g) {
				a.Event._dispatchByTarget(d, f, g);
			};
			d.THUMB_DRAG = "thumbDrag";
			d.THUMB_PRESS = "thumbPress";
			d.THUMB_RELEASE = "thumbRelease";
			return d;
		}(a.Event);
		c.TrackBaseEvent = b;
		b.prototype.__class__ = "egret.gui.TrackBaseEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d(g, n, m, l, j, i) {
				"undefined" === typeof n && (n = !1);
				"undefined" === typeof m && (m = !0);
				"undefined" === typeof l && (l = -1);
				"undefined" === typeof j && (j = null);
				"undefined" === typeof i && (i = null);
				e.call(this, g, n, m);
				this.item = j;
				this.itemRenderer = i;
				this.itemIndex = l;
			}
			__extends(d, e);
			d.dispatchTreeEvent = function(i, p, o, n, l, j) {
				"undefined" === typeof o && (o = -1);
				"undefined" === typeof n && (n = null);
				"undefined" === typeof l && (l = null);
				"undefined" === typeof j && (j = !1);
				var g = a.Event._getPropertyData(d);
				g.itemIndex = o;
				g.item = n;
				g.itemRenderer = l;
				g.opening = j;
				a.Event._dispatchByTarget(d, i, p, g);
			};
			d.ITEM_CLOSE = "itemClose";
			d.ITEM_OPEN = "itemOpen";
			d.ITEM_OPENING = "itemOpening";
			return d;
		}(a.Event);
		c.TreeEvent = b;
		b.prototype.__class__ = "egret.gui.TreeEvent";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._useVirtualLayout = !1;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "target", {
				get: function() {
					return this._target;
				},
				set: function(f) {
					this._target != f && (this._target = f, this.clearVirtualLayoutCache());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "useVirtualLayout", {
				get: function() {
					return this._useVirtualLayout;
				},
				set: function(f) {
					this._useVirtualLayout != f && (this._useVirtualLayout = f, this.dispatchEventWith("useVirtualLayoutChanged"), this._useVirtualLayout && !f && this.clearVirtualLayoutCache(), this.target && this.target.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "typicalLayoutRect", {
				get: function() {
					return this._typicalLayoutRect;
				},
				set: function(f) {
					this._typicalLayoutRect != f && (this._typicalLayoutRect = f, this.target && this.target.invalidateSize());
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.scrollPositionChanged = function() {};
			d.prototype.clearVirtualLayoutCache = function() {};
			d.prototype.elementAdded = function(f) {};
			d.prototype.elementRemoved = function(f) {};
			d.prototype.measure = function() {};
			d.prototype.updateDisplayList = function(f, g) {};
			return d;
		}(a.EventDispatcher);
		c.LayoutBase = b;
		b.prototype.__class__ = "egret.gui.LayoutBase";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._mouseWheelSpeed = 20;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "useVirtualLayout", {
				set: function(f) {},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "mouseWheelSpeed", {
				get: function() {
					return this._mouseWheelSpeed;
				},
				set: function(f) {
					0 == f && (f = 1);
					this._mouseWheelSpeed = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getElementBoundsLeftOfScrollRect = function(f) {
				var g = new a.Rectangle;
				g.x = f.x - this._mouseWheelSpeed;
				g.right = f.x;
				return g;
			};
			d.prototype.getElementBoundsRightOfScrollRect = function(f) {
				var g = new a.Rectangle;
				g.x = f.right;
				g.right = f.right + this._mouseWheelSpeed;
				return g;
			};
			d.prototype.getElementBoundsAboveScrollRect = function(f) {
				var g = new a.Rectangle;
				g.y = f.y - this._mouseWheelSpeed;
				g.bottom = f.y;
				return g;
			};
			d.prototype.getElementBoundsBelowScrollRect = function(f) {
				var g = new a.Rectangle;
				g.y = f.bottom;
				g.bottom = f.bottom + this._mouseWheelSpeed;
				return g;
			};
			d.prototype.measure = function() {
				e.prototype.measure.call(this);
				if (null != this.target) {
					for (var x = 0, w = 0, v = this.target.numElements, u = 0; u < v; u++) {
						var t = this.target.getElementAt(u);
						if (t && t.includeInLayout) {
							var s = t.horizontalCenter,
								o = t.verticalCenter,
								q = t.left,
								j = t.right,
								g = t.top,
								i = t.bottom;
							isNaN(q) || isNaN(j) ? isNaN(s) ? isNaN(q) && isNaN(j) ? s = t.preferredX : (s = isNaN(q) ? 0 : q, s += isNaN(j) ? 0 : j) : s = 2 * Math.abs(s) : s = q + j;
							isNaN(g) || isNaN(i) ? isNaN(o) ? isNaN(g) && isNaN(i) ? o = t.preferredY : (o = isNaN(g) ? 0 : g, o += isNaN(i) ? 0 : i) : o = 2 * Math.abs(o) : o = g + i;
							i = t.preferredHeight;
							x = Math.ceil(Math.max(x, s + t.preferredWidth));
							w = Math.ceil(Math.max(w, o + i));
						}
					}
					this.target.measuredWidth = x;
					this.target.measuredHeight = w;
				}
			};
			d.prototype.updateDisplayList = function(G, C) {
				e.prototype.updateDisplayList.call(this, G, C);
				if (null != this.target) {
					for (var A = this.target.numElements, z = 0, v = 0, u = 0; u < A; u++) {
						var q = this.target.getElementAt(u);
						if (null != q && q.includeInLayout) {
							var s = q.horizontalCenter,
								o = q.verticalCenter,
								g = q.left,
								j = q.right,
								I = q.top,
								D = q.bottom,
								i = q.percentWidth,
								F = q.percentHeight,
								J = NaN,
								H = NaN;
							isNaN(g) || isNaN(j) ? isNaN(i) || (J = Math.round(G * Math.min(0.01 * i, 1))) : J = G - j - g;
							isNaN(I) || isNaN(D) ? isNaN(F) || (H = Math.round(C * Math.min(0.01 * F, 1))) : H = C - D - I;
							q.setLayoutBoundsSize(J, H);
							i = q.layoutBoundsWidth;
							F = q.layoutBoundsHeight;
							H = J = NaN;
							J = isNaN(s) ? isNaN(g) ? isNaN(j) ? q.layoutBoundsX : G - i - j : g : Math.round((G - i) / 2 + s);
							H = isNaN(o) ? isNaN(I) ? isNaN(D) ? q.layoutBoundsY : C - F - D : I : Math.round((C - F) / 2 + o);
							q.setLayoutBoundsPosition(J, H);
							z = Math.max(z, J + i);
							v = Math.max(v, H + F);
						}
					}
					this.target.setContentSize(z, v);
				}
			};
			return d;
		}(c.LayoutBase);
		c.BasicLayout = b;
		b.prototype.__class__ = "egret.gui.BasicLayout";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.LEFT = "left";
			d.JUSTIFY_USING_GAP = "justifyUsingGap";
			d.JUSTIFY_USING_WIDTH = "justifyUsingWidth";
			return d;
		}();
		c.ColumnAlign = b;
		b.prototype.__class__ = "egret.gui.ColumnAlign";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.TOP = "top";
			d.JUSTIFY_USING_GAP = "justifyUsingGap";
			d.JUSTIFY_USING_HEIGHT = "justifyUsingHeight";
			return d;
		}();
		c.RowAlign = b;
		b.prototype.__class__ = "egret.gui.RowAlign";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.ROWS = "rows";
			d.COLUMNS = "columns";
			return d;
		}();
		c.TileOrientation = b;
		b.prototype.__class__ = "egret.gui.TileOrientation";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(d) {
		var b = function(e) {
			function c() {
				e.call(this);
				this._horizontalAlign = a.HorizontalAlign.LEFT;
				this._verticalAlign = a.VerticalAlign.TOP;
				this._gap = 6;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.elementSizeTable = [];
				this.endIndex = this.startIndex = -1;
				this.indexInViewCalculated = !1;
				this.maxElementWidth = 0;
			}
			__extends(c, e);
			Object.defineProperty(c.prototype, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign;
				},
				set: function(f) {
					this._horizontalAlign != f && (this._horizontalAlign = f, this.target && this.target.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign;
				},
				set: function(f) {
					this._verticalAlign != f && (this._verticalAlign = f, this.target && this.target.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "gap", {
				get: function() {
					return this._gap;
				},
				set: function(f) {
					this._gap != f && (this._gap = f, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "padding", {
				get: function() {
					return this._padding;
				},
				set: function(f) {
					this._padding != f && (this._padding = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft;
				},
				set: function(f) {
					this._paddingLeft != f && (this._paddingLeft = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight;
				},
				set: function(f) {
					this._paddingRight != f && (this._paddingRight = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop;
				},
				set: function(f) {
					this._paddingTop != f && (this._paddingTop = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom;
				},
				set: function(f) {
					this._paddingBottom != f && (this._paddingBottom = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			c.prototype.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList());
			};
			c.prototype.measure = function() {
				e.prototype.measure.call(this);
				this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal());
			};
			c.prototype.measureVirtual = function() {
				for (var s = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, q = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width : 71), p = this.getElementTotalSize(), o = this.target.getElementIndicesInView(), m = o.length, k = 0; k < m; k++) {
					var j = o[k],
						i = this.target.getElementAt(j);
					if (null != i && i.includeInLayout) {
						var h = i.preferredWidth,
							p = p + i.preferredHeight,
							p = p - (isNaN(this.elementSizeTable[j]) ? s : this.elementSizeTable[j]),
							q = Math.max(q, h);
					}
				}
				k = isNaN(this._padding) ? 0 : this._padding;
				s = isNaN(this._paddingLeft) ? k : this._paddingLeft;
				o = isNaN(this._paddingRight) ? k : this._paddingRight;
				m = isNaN(this._paddingTop) ? k : this._paddingTop;
				k = isNaN(this._paddingBottom) ? k : this._paddingBottom;
				m += k;
				this.target.measuredWidth = Math.ceil(q + (s + o));
				this.target.measuredHeight = Math.ceil(p + m);
			};
			c.prototype.measureReal = function() {
				for (var j = this.target.numElements, h = j, o = 0, n = 0, m = 0; m < j; m++) {
					var k = this.target.getElementAt(m);
					if (k && k.includeInLayout) {
						var i = k.preferredWidth,
							n = n + k.preferredHeight,
							o = Math.max(o, i);
					} else {
						h--;
					}
				}
				j = isNaN(this._gap) ? 0 : this._gap;
				n += (h - 1) * j;
				k = isNaN(this._padding) ? 0 : this._padding;
				h = isNaN(this._paddingLeft) ? k : this._paddingLeft;
				j = isNaN(this._paddingRight) ? k : this._paddingRight;
				m = isNaN(this._paddingTop) ? k : this._paddingTop;
				k = isNaN(this._paddingBottom) ? k : this._paddingBottom;
				m += k;
				this.target.measuredWidth = Math.ceil(o + (h + j));
				this.target.measuredHeight = Math.ceil(n + m);
			};
			c.prototype.updateDisplayList = function(f, h) {
				e.prototype.updateDisplayList.call(this, f, h);
				this.target && (this.useVirtualLayout ? this.updateDisplayListVirtual(f, h) : this.updateDisplayListReal(f, h));
			};
			c.prototype.getStartPosition = function(i) {
				var h = isNaN(this._padding) ? 0 : this._padding,
					m = isNaN(this._paddingTop) ? h : this._paddingTop,
					h = isNaN(this._gap) ? 0 : this._gap;
				if (!this.useVirtualLayout) {
					var l;
					this.target && (l = this.target.getElementAt(i));
					return l ? l.y : m;
				}
				l = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22;
				for (var k = 0; k < i; k++) {
					var j = this.elementSizeTable[k];
					isNaN(j) && (j = l);
					m += j + h;
				}
				return m;
			};
			c.prototype.getElementSize = function(f) {
				return this.useVirtualLayout ? (f = this.elementSizeTable[f], isNaN(f) && (f = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22), f) : this.target ? this.target.getElementAt(f).height : 0;
			};
			c.prototype.getElementTotalSize = function() {
				for (var i = isNaN(this._gap) ? 0 : this._gap, h = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, m = 0, l = this.target.numElements, k = 0; k < l; k++) {
					var j = this.elementSizeTable[k];
					isNaN(j) && (j = h);
					m += j + i;
				}
				return m - i;
			};
			c.prototype.elementAdded = function(f) {
				e.prototype.elementAdded.call(this, f);
				this.elementSizeTable.splice(f, 0, this.typicalLayoutRect ? this.typicalLayoutRect.height : 22);
			};
			c.prototype.elementRemoved = function(f) {
				e.prototype.elementRemoved.call(this, f);
				this.elementSizeTable.splice(f, 1);
			};
			c.prototype.clearVirtualLayoutCache = function() {
				e.prototype.clearVirtualLayoutCache.call(this);
				this.elementSizeTable = [];
				this.maxElementWidth = 0;
			};
			c.prototype.findIndexAt = function(j, h, o) {
				var n = Math.floor(0.5 * (h + o)),
					m = this.getStartPosition(n),
					k = this.getElementSize(n),
					i = isNaN(this._gap) ? 0 : this._gap;
				return j >= m && j < m + k + i ? n : h == o ? -1 : j < m ? this.findIndexAt(j, h, Math.max(h, n - 1)) : this.findIndexAt(j, Math.min(n + 1, o), o);
			};
			c.prototype.scrollPositionChanged = function() {
				e.prototype.scrollPositionChanged.call(this);
				this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList());
			};
			c.prototype.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) {
					return this.startIndex = this.endIndex = -1, !1;
				}
				var h = isNaN(this._padding) ? 0 : this._padding,
					f = isNaN(this._paddingTop) ? h : this._paddingTop,
					k = isNaN(this._paddingBottom) ? h : this._paddingBottom,
					h = this.target.numElements,
					j = this.getStartPosition(h - 1) + this.elementSizeTable[h - 1] + k,
					i = this.target.verticalScrollPosition;
				if (i > j - k) {
					return this.endIndex = this.startIndex = -1, !1;
				}
				k = this.target.verticalScrollPosition + this.target.height;
				if (k < f) {
					return this.endIndex = this.startIndex = -1, !1;
				}
				f = this.startIndex;
				j = this.endIndex;
				this.startIndex = this.findIndexAt(i, 0, h - 1); - 1 == this.startIndex && (this.startIndex = 0);
				this.endIndex = this.findIndexAt(k, 0, h - 1); - 1 == this.endIndex && (this.endIndex = h - 1);
				return f != this.startIndex || j != this.endIndex;
			};
			c.prototype.updateDisplayListVirtual = function(P, O) {
				this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
				var N = isNaN(this._padding) ? 0 : this._padding,
					M = isNaN(this._paddingLeft) ? N : this._paddingLeft,
					L = isNaN(this._paddingRight) ? N : this._paddingRight,
					J = isNaN(this._paddingBottom) ? N : this._paddingBottom,
					K = isNaN(this._gap) ? 0 : this._gap,
					I = this.target.numElements;
				if (-1 == this.startIndex || -1 == this.endIndex) {
					M = this.getStartPosition(I) - K + J, this.target.setContentSize(this.target.contentWidth, Math.ceil(M));
				} else {
					this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
					var C = this._horizontalAlign == a.HorizontalAlign.JUSTIFY || this._horizontalAlign == a.HorizontalAlign.CONTENT_JUSTIFY,
						H = this._horizontalAlign == a.HorizontalAlign.CONTENT_JUSTIFY,
						s = 0;
					C || (this._horizontalAlign == a.HorizontalAlign.CENTER ? s = 0.5 : this._horizontalAlign == a.HorizontalAlign.RIGHT && (s = 1));
					var i = Math.max(0, P - M - L),
						F = Math.ceil(i),
						j, q = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22,
						N = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, this.maxElementWidth);
					if (H) {
						for (var k = this.startIndex; k <= this.endIndex; k++) {
							(j = this.target.getVirtualElementAt(k)) && j.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, j.preferredWidth));
						}
						F = Math.ceil(Math.max(i, this.maxElementWidth));
					}
					for (var G = 0, o = 0, k = 0, v = !1, h = this.startIndex; h <= this.endIndex; h++) {
						if (G = 0, j = this.target.getVirtualElementAt(h)) {
							j.includeInLayout ? (C ? (G = M, j.setLayoutBoundsSize(F, NaN)) : (G = (i - j.layoutBoundsWidth) * s, G = 0 < G ? G : 0, G = M + G), H || (this.maxElementWidth = Math.max(this.maxElementWidth, j.preferredWidth)), k = Math.max(k, j.layoutBoundsWidth), v || (o = isNaN(this.elementSizeTable[h]) ? q : this.elementSizeTable[h], o != j.layoutBoundsHeight && (v = !0)), 0 == h && 0 < this.elementSizeTable.length && this.elementSizeTable[h] != j.layoutBoundsHeight && (this.typicalLayoutRect = null), this.elementSizeTable[h] = j.layoutBoundsHeight, o = this.getStartPosition(h), j.setLayoutBoundsPosition(Math.round(G), Math.round(o))) : this.elementSizeTable[h] = 0;
						}
					}
					k += M + L;
					M = this.getStartPosition(I) - K + J;
					this.target.setContentSize(Math.ceil(k), Math.ceil(M));
					(v || N < this.maxElementWidth) && this.target.invalidateSize();
				}
			};
			c.prototype.updateDisplayListReal = function(ad, ac) {
				var ab = isNaN(this._padding) ? 0 : this._padding,
					aa = isNaN(this._paddingLeft) ? ab : this._paddingLeft,
					Z = isNaN(this._paddingRight) ? ab : this._paddingRight,
					X = isNaN(this._paddingTop) ? ab : this._paddingTop,
					ab = isNaN(this._paddingBottom) ? ab : this._paddingBottom,
					Y = isNaN(this._gap) ? 0 : this._gap,
					W = Math.max(0, ad - aa - Z),
					S = Math.max(0, ac - X - ab),
					V = this._verticalAlign == a.VerticalAlign.JUSTIFY,
					P = this._horizontalAlign == a.HorizontalAlign.JUSTIFY || this._horizontalAlign == a.HorizontalAlign.CONTENT_JUSTIFY,
					q = 0;
				P || (this._horizontalAlign == a.HorizontalAlign.CENTER ? q = 0.5 : this._horizontalAlign == a.HorizontalAlign.RIGHT && (q = 1));
				var T = this.target.numElements,
					s = T,
					O = aa,
					I = X,
					U, N, Q = 0,
					O = 0,
					j = [],
					R, M = S;
				for (U = 0; U < T; U++) {
					(N = this.target.getElementAt(U)) && N.includeInLayout ? (this.maxElementWidth = Math.max(this.maxElementWidth, N.preferredWidth), V ? Q += N.preferredHeight : isNaN(N.percentHeight) ? M -= N.preferredHeight : (O += N.percentHeight, R = new g, R.layoutElement = N, R.percent = N.percentHeight, R.min = N.minHeight, R.max = N.maxHeight, j.push(R))) : s--;
				}
				var M = M - (s - 1) * Y,
					M = 0 < M ? M : 0,
					F = S - Q - Y * (s - 1),
					i, L = s,
					o = [];
				if (V) {
					if (0 > F) {
						i = M / s;
						for (U = 0; U < T; U++) {
							(N = this.target.getElementAt(U)) && N.includeInLayout && (N = N.preferredHeight, N <= i && (M -= N, L--));
						}
						M = 0 < M ? M : 0;
					}
				} else {
					if (0 < O) {
						c.flexChildrenProportionally(S, M, O, j);
						S = 0;
						N = j.length;
						for (U = 0; U < N; U++) {
							R = j[U], O = Math.round(R.size + S), S += R.size - O, o[R.layoutElement.hashCode] = O, M -= O;
						}
						M = 0 < M ? M : 0;
					}
				}
				this._verticalAlign == a.VerticalAlign.MIDDLE ? I = X + 0.5 * M : this._verticalAlign == a.VerticalAlign.BOTTOM && (I = X + M);
				j = aa;
				N = s = 0;
				R = Math.ceil(W);
				this._horizontalAlign == a.HorizontalAlign.CONTENT_JUSTIFY && (R = Math.ceil(Math.max(W, this.maxElementWidth)));
				S = 0;
				s = NaN;
				for (U = 0; U < T; U++) {
					O = 0, (N = this.target.getElementAt(U)) && N.includeInLayout && (s = NaN, V ? (O = NaN, 0 < F ? O = M * N.preferredHeight / Q : 0 > F && N.preferredHeight > i && (O = M / L), isNaN(O) || (s = Math.round(O + S), S += O - s)) : s = o[N.hashCode], P ? (O = aa, N.setLayoutBoundsSize(R, s)) : (O = NaN, isNaN(N.percentWidth) || (O = Math.min(100, N.percentWidth), O = Math.round(W * O * 0.01)), N.setLayoutBoundsSize(O, s), O = (W - N.layoutBoundsWidth) * q, O = 0 < O ? O : 0, O = aa + O), N.setLayoutBoundsPosition(Math.round(O), Math.round(I)), s = Math.ceil(N.layoutBoundsWidth), N = Math.ceil(N.layoutBoundsHeight), j = Math.max(j, O + s), X = Math.max(X, I + N), I += N + Y);
				}
				this.target.setContentSize(Math.ceil(j + Z), Math.ceil(X + ab));
			};
			c.flexChildrenProportionally = function(v, u, s, q) {
				var o = q.length,
					m;
				do {
					m = !0;
					var k = u - v * s / 100;
					0 < k ? u -= k : k = 0;
					for (var j = u / s, h = 0; h < o; h++) {
						var i = q[h],
							w = i.percent * j;
						if (w < i.min) {
							m = i.min;
							i.size = m;
							q[h] = q[--o];
							q[o] = i;
							s -= i.percent;
							k >= m || (u -= m - k);
							m = !1;
							break;
						} else {
							if (w > i.max) {
								m = i.max;
								i.size = m;
								q[h] = q[--o];
								q[o] = i;
								s -= i.percent;
								k >= m || (u -= m - k);
								m = !1;
								break;
							} else {
								i.size = w;
							}
						}
					}
				} while (!m);
			};
			return c;
		}(d.LayoutBase);
		d.VerticalLayout = b;
		b.prototype.__class__ = "egret.gui.VerticalLayout";
		var g = function() {
			return function() {
				this.size = 0;
			};
		}();
		g.prototype.__class__ = "ChildInfo";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(d) {
		var b = function(e) {
			function c() {
				e.call(this);
				this._horizontalAlign = a.HorizontalAlign.LEFT;
				this._verticalAlign = a.VerticalAlign.TOP;
				this._gap = 6;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.elementSizeTable = [];
				this.endIndex = this.startIndex = -1;
				this.indexInViewCalculated = !1;
				this.maxElementHeight = 0;
			}
			__extends(c, e);
			Object.defineProperty(c.prototype, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign;
				},
				set: function(f) {
					this._horizontalAlign != f && (this._horizontalAlign = f, this.target && this.target.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign;
				},
				set: function(f) {
					this._verticalAlign != f && (this._verticalAlign = f, this.target && this.target.invalidateDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "gap", {
				get: function() {
					return this._gap;
				},
				set: function(f) {
					this._gap != f && (this._gap = f, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "padding", {
				get: function() {
					return this._padding;
				},
				set: function(f) {
					this._padding != f && (this._padding = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft;
				},
				set: function(f) {
					this._paddingLeft != f && (this._paddingLeft = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight;
				},
				set: function(f) {
					this._paddingRight != f && (this._paddingRight = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop;
				},
				set: function(f) {
					this._paddingTop != f && (this._paddingTop = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom;
				},
				set: function(f) {
					this._paddingBottom != f && (this._paddingBottom = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			c.prototype.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList());
			};
			c.prototype.measure = function() {
				e.prototype.measure.call(this);
				this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal());
			};
			c.prototype.measureVirtual = function() {
				for (var s = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, q = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, p = this.getElementTotalSize(), s = Math.max(this.maxElementHeight, s), o = this.target.getElementIndicesInView(), m = o.length, k = 0; k < m; k++) {
					var j = o[k],
						i = this.target.getElementAt(j);
					if (null != i && i.includeInLayout) {
						var h = i.preferredHeight,
							p = p + i.preferredWidth,
							p = p - (isNaN(this.elementSizeTable[j]) ? q : this.elementSizeTable[j]),
							s = Math.max(s, h);
					}
				}
				k = isNaN(this._padding) ? 0 : this._padding;
				q = isNaN(this._paddingLeft) ? k : this._paddingLeft;
				o = isNaN(this._paddingRight) ? k : this._paddingRight;
				m = isNaN(this._paddingTop) ? k : this._paddingTop;
				k = isNaN(this._paddingBottom) ? k : this._paddingBottom;
				m += k;
				this.target.measuredWidth = Math.ceil(p + (q + o));
				this.target.measuredHeight = Math.ceil(s + m);
			};
			c.prototype.measureReal = function() {
				for (var j = this.target.numElements, h = j, o = 0, n = 0, m = 0; m < j; m++) {
					var k = this.target.getElementAt(m);
					if (k && k.includeInLayout) {
						var i = k.preferredHeight,
							o = o + k.preferredWidth,
							n = Math.max(n, i);
					} else {
						h--;
					}
				}
				j = isNaN(this._gap) ? 0 : this._gap;
				o += (h - 1) * j;
				k = isNaN(this._padding) ? 0 : this._padding;
				h = isNaN(this._paddingLeft) ? k : this._paddingLeft;
				j = isNaN(this._paddingRight) ? k : this._paddingRight;
				m = isNaN(this._paddingTop) ? k : this._paddingTop;
				k = isNaN(this._paddingBottom) ? k : this._paddingBottom;
				m += k;
				this.target.measuredWidth = Math.ceil(o + (h + j));
				this.target.measuredHeight = Math.ceil(n + m);
			};
			c.prototype.updateDisplayList = function(f, h) {
				e.prototype.updateDisplayList.call(this, f, h);
				this.target && (this.useVirtualLayout ? this.updateDisplayListVirtual(f, h) : this.updateDisplayListReal(f, h));
			};
			c.prototype.getStartPosition = function(i) {
				var h = isNaN(this._padding) ? 0 : this._padding,
					m = isNaN(this._paddingLeft) ? h : this._paddingLeft,
					h = isNaN(this._gap) ? 0 : this._gap;
				if (!this.useVirtualLayout) {
					var l;
					this.target && (l = this.target.getElementAt(i));
					return l ? l.x : m;
				}
				l = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71;
				for (var k = 0; k < i; k++) {
					var j = this.elementSizeTable[k];
					isNaN(j) && (j = l);
					m += j + h;
				}
				return m;
			};
			c.prototype.getElementSize = function(f) {
				return this.useVirtualLayout ? (f = this.elementSizeTable[f], isNaN(f) && (f = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71), f) : this.target ? this.target.getElementAt(f).width : 0;
			};
			c.prototype.getElementTotalSize = function() {
				for (var i = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, h = isNaN(this._gap) ? 0 : this._gap, m = 0, l = this.target.numElements, k = 0; k < l; k++) {
					var j = this.elementSizeTable[k];
					isNaN(j) && (j = i);
					m += j + h;
				}
				return m - h;
			};
			c.prototype.elementAdded = function(f) {
				this.useVirtualLayout && (e.prototype.elementAdded.call(this, f), this.elementSizeTable.splice(f, 0, this.typicalLayoutRect ? this.typicalLayoutRect.width : 71));
			};
			c.prototype.elementRemoved = function(f) {
				this.useVirtualLayout && (e.prototype.elementRemoved.call(this, f), this.elementSizeTable.splice(f, 1));
			};
			c.prototype.clearVirtualLayoutCache = function() {
				this.useVirtualLayout && (e.prototype.clearVirtualLayoutCache.call(this), this.elementSizeTable = [], this.maxElementHeight = 0);
			};
			c.prototype.findIndexAt = function(j, h, o) {
				var n = Math.floor(0.5 * (h + o)),
					m = this.getStartPosition(n),
					k = this.getElementSize(n),
					i = isNaN(this._gap) ? 0 : this._gap;
				return j >= m && j < m + k + i ? n : h == o ? -1 : j < m ? this.findIndexAt(j, h, Math.max(h, n - 1)) : this.findIndexAt(j, Math.min(n + 1, o), o);
			};
			c.prototype.scrollPositionChanged = function() {
				e.prototype.scrollPositionChanged.call(this);
				this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList());
			};
			c.prototype.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) {
					return this.startIndex = this.endIndex = -1, !1;
				}
				var h = isNaN(this._padding) ? 0 : this._padding,
					f = isNaN(this._paddingLeft) ? h : this._paddingLeft,
					k = isNaN(this._paddingRight) ? h : this._paddingRight;
				isNaN(this._paddingTop);
				isNaN(this._paddingBottom);
				var h = this.target.numElements,
					j = this.getStartPosition(h - 1) + this.elementSizeTable[h - 1] + k,
					i = this.target.horizontalScrollPosition;
				if (i > j - k) {
					return this.endIndex = this.startIndex = -1, !1;
				}
				k = this.target.horizontalScrollPosition + this.target.width;
				if (k < f) {
					return this.endIndex = this.startIndex = -1, !1;
				}
				f = this.startIndex;
				j = this.endIndex;
				this.startIndex = this.findIndexAt(i, 0, h - 1); - 1 == this.startIndex && (this.startIndex = 0);
				this.endIndex = this.findIndexAt(k, 0, h - 1); - 1 == this.endIndex && (this.endIndex = h - 1);
				return f != this.startIndex || j != this.endIndex;
			};
			c.prototype.updateDisplayListVirtual = function(P, O) {
				this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
				var N = isNaN(this._padding) ? 0 : this._padding,
					M = isNaN(this._paddingRight) ? N : this._paddingRight,
					L = isNaN(this._paddingTop) ? N : this._paddingTop,
					J = isNaN(this._paddingBottom) ? N : this._paddingBottom,
					K = isNaN(this._gap) ? 0 : this._gap,
					I = this.target.numElements;
				if (-1 == this.startIndex || -1 == this.endIndex) {
					M = this.getStartPosition(I) - K + M, this.target.setContentSize(Math.ceil(M), this.target.contentHeight);
				} else {
					this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
					var C = this._verticalAlign == a.VerticalAlign.JUSTIFY || this._verticalAlign == a.VerticalAlign.CONTENT_JUSTIFY,
						H = this._verticalAlign == a.VerticalAlign.CONTENT_JUSTIFY,
						s = 0;
					C || (this._verticalAlign == a.VerticalAlign.MIDDLE ? s = 0.5 : this._verticalAlign == a.VerticalAlign.BOTTOM && (s = 1));
					var i = Math.max(0, O - L - J),
						F = Math.ceil(i),
						j, q = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71,
						N = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, this.maxElementHeight);
					if (H) {
						for (var k = this.startIndex; k <= this.endIndex; k++) {
							(j = this.target.getVirtualElementAt(k)) && j.includeInLayout && (this.maxElementHeight = Math.max(this.maxElementHeight, j.preferredHeight));
						}
						F = Math.ceil(Math.max(i, this.maxElementHeight));
					}
					for (var G = 0, o = 0, k = 0, v = !1, h = this.startIndex; h <= this.endIndex; h++) {
						if (o = 0, j = this.target.getVirtualElementAt(h)) {
							j.includeInLayout ? (C ? (o = L, j.setLayoutBoundsSize(NaN, F)) : (o = (i - j.layoutBoundsHeight) * s, o = 0 < o ? o : 0, o = L + o), H || (this.maxElementHeight = Math.max(this.maxElementHeight, j.preferredHeight)), k = Math.max(k, j.layoutBoundsHeight), v || (G = isNaN(this.elementSizeTable[h]) ? q : this.elementSizeTable[h], G != j.layoutBoundsWidth && (v = !0)), 0 == h && 0 < this.elementSizeTable.length && this.elementSizeTable[h] != j.layoutBoundsWidth && (this.typicalLayoutRect = null), this.elementSizeTable[h] = j.layoutBoundsWidth, G = this.getStartPosition(h), j.setLayoutBoundsPosition(Math.round(G), Math.round(o))) : this.elementSizeTable[h] = 0;
						}
					}
					k += L + J;
					M = this.getStartPosition(I) - K + M;
					this.target.setContentSize(Math.ceil(M), Math.ceil(k));
					(v || N < this.maxElementHeight) && this.target.invalidateSize();
				}
			};
			c.prototype.updateDisplayListReal = function(ad, ac) {
				var ab = isNaN(this._padding) ? 0 : this._padding,
					aa = isNaN(this._paddingLeft) ? ab : this._paddingLeft,
					Z = isNaN(this._paddingRight) ? ab : this._paddingRight,
					X = isNaN(this._paddingTop) ? ab : this._paddingTop,
					ab = isNaN(this._paddingBottom) ? ab : this._paddingBottom,
					Y = isNaN(this._gap) ? 0 : this._gap,
					W = Math.max(0, ad - aa - Z),
					S = Math.max(0, ac - X - ab),
					V = this._horizontalAlign == a.HorizontalAlign.JUSTIFY,
					P = this._verticalAlign == a.VerticalAlign.JUSTIFY || this._verticalAlign == a.VerticalAlign.CONTENT_JUSTIFY,
					q = 0;
				P || (this._verticalAlign == a.VerticalAlign.MIDDLE ? q = 0.5 : this._verticalAlign == a.VerticalAlign.BOTTOM && (q = 1));
				var T = this.target.numElements,
					s = T,
					O = aa,
					I = X,
					U, N, Q = 0,
					I = 0,
					j = [],
					R, M = W;
				for (U = 0; U < T; U++) {
					(N = this.target.getElementAt(U)) && N.includeInLayout ? (this.maxElementHeight = Math.max(this.maxElementHeight, N.preferredHeight), V ? Q += N.preferredWidth : isNaN(N.percentWidth) ? M -= N.preferredWidth : (I += N.percentWidth, R = new g, R.layoutElement = N, R.percent = N.percentWidth, R.min = N.minWidth, R.max = N.maxWidth, j.push(R))) : s--;
				}
				var M = M - Y * (s - 1),
					M = 0 < M ? M : 0,
					F = W - Q - Y * (s - 1),
					i, L = s,
					o = [];
				if (V) {
					if (0 > F) {
						i = M / s;
						for (U = 0; U < T; U++) {
							(N = this.target.getElementAt(U)) && N.includeInLayout && (N = N.preferredWidth, N <= i && (M -= N, L--));
						}
						M = 0 < M ? M : 0;
					}
				} else {
					if (0 < I) {
						c.flexChildrenProportionally(W, M, I, j);
						W = 0;
						N = j.length;
						for (U = 0; U < N; U++) {
							R = j[U], I = Math.round(R.size + W), W += R.size - I, o[R.layoutElement.hashCode] = I, M -= I;
						}
						M = 0 < M ? M : 0;
					}
				}
				this._horizontalAlign == a.HorizontalAlign.CENTER ? O = aa + 0.5 * M : this._horizontalAlign == a.HorizontalAlign.RIGHT && (O = aa + M);
				j = X;
				N = s = 0;
				R = Math.ceil(S);
				this._verticalAlign == a.VerticalAlign.CONTENT_JUSTIFY && (R = Math.ceil(Math.max(S, this.maxElementHeight)));
				for (U = W = 0; U < T; U++) {
					I = 0, (N = this.target.getElementAt(U)) && N.includeInLayout && (s = NaN, V ? (I = NaN, 0 < F ? I = M * N.preferredWidth / Q : 0 > F && N.preferredWidth > i && (I = M / L), isNaN(I) || (s = Math.round(I + W), W += I - s)) : s = o[N.hashCode], P ? (I = X, N.setLayoutBoundsSize(s, R)) : (I = NaN, isNaN(N.percentHeight) || (I = Math.min(100, N.percentHeight), I = Math.round(S * I * 0.01)), N.setLayoutBoundsSize(s, I), I = (S - N.layoutBoundsHeight) * q, I = 0 < I ? I : 0, I = X + I), N.setLayoutBoundsPosition(Math.round(O), Math.round(I)), s = Math.ceil(N.layoutBoundsWidth), N = Math.ceil(N.layoutBoundsHeight), aa = Math.max(aa, O + s), j = Math.max(j, I + N), O += s + Y);
				}
				this.target.setContentSize(Math.ceil(aa + Z), Math.ceil(j + ab));
			};
			c.flexChildrenProportionally = function(v, u, s, q) {
				var o = q.length,
					m;
				do {
					m = !0;
					var k = u - v * s / 100;
					0 < k ? u -= k : k = 0;
					for (var j = u / s, h = 0; h < o; h++) {
						var i = q[h],
							w = i.percent * j;
						if (w < i.min) {
							m = i.min;
							i.size = m;
							q[h] = q[--o];
							q[o] = i;
							s -= i.percent;
							k >= m || (u -= m - k);
							m = !1;
							break;
						} else {
							if (w > i.max) {
								m = i.max;
								i.size = m;
								q[h] = q[--o];
								q[o] = i;
								s -= i.percent;
								k >= m || (u -= m - k);
								m = !1;
								break;
							} else {
								i.size = w;
							}
						}
					}
				} while (!m);
			};
			return c;
		}(d.LayoutBase);
		d.HorizontalLayout = b;
		b.prototype.__class__ = "egret.gui.HorizontalLayout";
		var g = function() {
			return function() {
				this.size = 0;
			};
		}();
		g.prototype.__class__ = "ChildInfo";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this.explicitHorizontalGap = NaN;
				this._horizontalGap = 6;
				this.explicitVerticalGap = NaN;
				this._verticalGap = 6;
				this._columnCount = -1;
				this._requestedColumnCount = 0;
				this._rowCount = -1;
				this._requestedRowCount = 0;
				this._rowHeight = this.explicitRowHeight = this._columnWidth = this.explicitColumnWidth = NaN;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this._horizontalAlign = a.HorizontalAlign.JUSTIFY;
				this._verticalAlign = a.VerticalAlign.JUSTIFY;
				this._columnAlign = c.ColumnAlign.LEFT;
				this._rowAlign = c.RowAlign.TOP;
				this._orientation = c.TileOrientation.ROWS;
				this.maxElementHeight = this.maxElementWidth = 0;
				this.endIndex = this.startIndex = -1;
				this.indexInViewCalculated = !1;
			}
			__extends(d, e);
			Object.defineProperty(d.prototype, "horizontalGap", {
				get: function() {
					return this._horizontalGap;
				},
				set: function(f) {
					f != this._horizontalGap && (this._horizontalGap = this.explicitHorizontalGap = f, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "verticalGap", {
				get: function() {
					return this._verticalGap;
				},
				set: function(f) {
					f != this._verticalGap && (this._verticalGap = this.explicitVerticalGap = f, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "columnCount", {
				get: function() {
					return this._columnCount;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "requestedColumnCount", {
				get: function() {
					return this._requestedColumnCount;
				},
				set: function(f) {
					this._requestedColumnCount != f && (this._columnCount = this._requestedColumnCount = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "rowCount", {
				get: function() {
					return this._rowCount;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "requestedRowCount", {
				get: function() {
					return this._requestedRowCount;
				},
				set: function(f) {
					this._requestedRowCount != f && (this._rowCount = this._requestedRowCount = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "columnWidth", {
				get: function() {
					return this._columnWidth;
				},
				set: function(f) {
					f != this._columnWidth && (this._columnWidth = this.explicitColumnWidth = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "rowHeight", {
				get: function() {
					return this._rowHeight;
				},
				set: function(f) {
					f != this._rowHeight && (this._rowHeight = this.explicitRowHeight = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "padding", {
				get: function() {
					return this._padding;
				},
				set: function(f) {
					this._padding != f && (this._padding = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingLeft", {
				get: function() {
					return this._paddingLeft;
				},
				set: function(f) {
					this._paddingLeft != f && (this._paddingLeft = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingRight", {
				get: function() {
					return this._paddingRight;
				},
				set: function(f) {
					this._paddingRight != f && (this._paddingRight = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingTop", {
				get: function() {
					return this._paddingTop;
				},
				set: function(f) {
					this._paddingTop != f && (this._paddingTop = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "paddingBottom", {
				get: function() {
					return this._paddingBottom;
				},
				set: function(f) {
					this._paddingBottom != f && (this._paddingBottom = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign;
				},
				set: function(f) {
					this._horizontalAlign != f && (this._horizontalAlign = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign;
				},
				set: function(f) {
					this._verticalAlign != f && (this._verticalAlign = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "columnAlign", {
				get: function() {
					return this._columnAlign;
				},
				set: function(f) {
					this._columnAlign != f && (this._columnAlign = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "rowAlign", {
				get: function() {
					return this._rowAlign;
				},
				set: function(f) {
					this._rowAlign != f && (this._rowAlign = f, this.invalidateTargetSizeAndDisplayList());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "orientation", {
				get: function() {
					return this._orientation;
				},
				set: function(f) {
					this._orientation != f && (this._orientation = f, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("orientationChanged") && this.dispatchEventWith("orientationChanged"));
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList());
			};
			d.prototype.measure = function() {
				if (this.target) {
					var u = this._columnCount,
						t = this._rowCount,
						s = this._columnWidth,
						q = this._rowHeight,
						p = 0,
						o = 0;
					this.calculateRowAndColumn(this.target.explicitWidth, this.target.explicitHeight);
					var i = 0 < this._requestedColumnCount ? this._requestedColumnCount : this._columnCount,
						j = 0 < this._requestedRowCount ? this._requestedRowCount : this._rowCount,
						h = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
						g = isNaN(this._verticalGap) ? 0 : this._verticalGap;
					0 < i && (p = i * (this._columnWidth + h) - h);
					0 < j && (o = j * (this._rowHeight + g) - g);
					g = isNaN(this._padding) ? 0 : this._padding;
					i = isNaN(this._paddingLeft) ? g : this._paddingLeft;
					j = isNaN(this._paddingRight) ? g : this._paddingRight;
					h = isNaN(this._paddingTop) ? g : this._paddingTop;
					g = isNaN(this._paddingBottom) ? g : this._paddingBottom;
					h += g;
					this.target.measuredWidth = Math.ceil(p + (i + j));
					this.target.measuredHeight = Math.ceil(o + h);
					this._columnCount = u;
					this._rowCount = t;
					this._columnWidth = s;
					this._rowHeight = q;
				}
			};
			d.prototype.calculateRowAndColumn = function(C, z) {
				var x = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
					w = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				this._rowCount = this._columnCount = -1;
				for (var v = this.target.numElements, u = v, q = 0; q < u; q++) {
					var s = this.target.getElementAt(q);
					s && !s.includeInLayout && v--;
				}
				if (0 == v) {
					this._rowCount = this._columnCount = 0;
				} else {
					(isNaN(this.explicitColumnWidth) || isNaN(this.explicitRowHeight)) && this.updateMaxElementSize();
					isNaN(this.explicitColumnWidth) ? this._columnWidth = this.maxElementWidth : this._columnWidth = this.explicitColumnWidth;
					isNaN(this.explicitRowHeight) ? this._rowHeight = this.maxElementHeight : this._rowHeight = this.explicitRowHeight;
					u = this._columnWidth + x;
					0 >= u && (u = 1);
					q = this._rowHeight + w;
					0 >= q && (q = 1);
					var s = this.orientation == c.TileOrientation.COLUMNS,
						o = !isNaN(C),
						g = !isNaN(z),
						j = isNaN(this._padding) ? 0 : this._padding,
						D = isNaN(this._paddingLeft) ? j : this._paddingLeft,
						A = isNaN(this._paddingRight) ? j : this._paddingRight,
						i = isNaN(this._paddingTop) ? j : this._paddingTop,
						j = isNaN(this._paddingBottom) ? j : this._paddingBottom;
					0 < this._requestedColumnCount || 0 < this._requestedRowCount ? (0 < this._requestedRowCount && (this._rowCount = Math.min(this._requestedRowCount, v)), 0 < this._requestedColumnCount && (this._columnCount = Math.min(this._requestedColumnCount, v))) : o || g ? !o || g && s ? (x = Math.max(0, z - i - j), this._rowCount = Math.floor((x + w) / q), this._rowCount = Math.max(1, Math.min(this._rowCount, v))) : (w = Math.max(0, C - D - A), this._columnCount = Math.floor((w + x) / u), this._columnCount = Math.max(1, Math.min(this._columnCount, v))) : (x = Math.sqrt(v * u * q), s ? this._rowCount = Math.max(1, Math.round(x / q)) : this._columnCount = Math.max(1, Math.round(x / u))); - 1 == this._rowCount && (this._rowCount = Math.max(1, Math.ceil(v / this._columnCount))); - 1 == this._columnCount && (this._columnCount = Math.max(1, Math.ceil(v / this._rowCount)));
					0 < this._requestedColumnCount && 0 < this._requestedRowCount && (this.orientation == c.TileOrientation.ROWS ? this._rowCount = Math.max(1, Math.ceil(v / this._requestedColumnCount)) : this._columnCount = Math.max(1, Math.ceil(v / this._requestedRowCount)));
				}
			};
			d.prototype.updateMaxElementSize = function() {
				this.target && (this.useVirtualLayout ? this.updateMaxElementSizeVirtual() : this.updateMaxElementSizeReal());
			};
			d.prototype.updateMaxElementSizeVirtual = function() {
				var f = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22;
				this.maxElementWidth = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width : 22);
				this.maxElementHeight = Math.max(this.maxElementHeight, f);
				if (-1 != this.startIndex && -1 != this.endIndex) {
					for (f = this.startIndex; f <= this.endIndex; f++) {
						var g = this.target.getVirtualElementAt(f);
						g && g.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, g.preferredWidth), this.maxElementHeight = Math.max(this.maxElementHeight, g.preferredHeight));
					}
				}
			};
			d.prototype.updateMaxElementSizeReal = function() {
				for (var f = this.target.numElements, h = 0; h < f; h++) {
					var g = this.target.getElementAt(h);
					g && g.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, g.preferredWidth), this.maxElementHeight = Math.max(this.maxElementHeight, g.preferredHeight));
				}
			};
			d.prototype.clearVirtualLayoutCache = function() {
				e.prototype.clearVirtualLayoutCache.call(this);
				this.maxElementHeight = this.maxElementWidth = 0;
			};
			d.prototype.scrollPositionChanged = function() {
				e.prototype.scrollPositionChanged.call(this);
				this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList());
			};
			d.prototype.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements) {
					return this.startIndex = this.endIndex = -1, !1;
				}
				var i = this.target.numElements;
				if (!this.useVirtualLayout) {
					return this.startIndex = 0, this.endIndex = i - 1, !1;
				}
				if (isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) {
					return this.startIndex = this.endIndex = -1, !1;
				}
				var p = this.startIndex,
					o = this.endIndex,
					n = isNaN(this._padding) ? 0 : this._padding,
					l = isNaN(this._paddingLeft) ? n : this._paddingLeft,
					n = isNaN(this._paddingTop) ? n : this._paddingTop,
					j = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
					g = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				if (this.orientation == c.TileOrientation.COLUMNS) {
					j = this._columnWidth + j;
					if (0 >= j) {
						return this.startIndex = 0, this.endIndex = i - 1, !1;
					}
					g = this.target.horizontalScrollPosition + this.target.width;
					n = Math.floor((this.target.horizontalScrollPosition - l) / j);
					0 > n && (n = 0);
					l = Math.ceil((g - l) / j);
					0 > l && (l = 0);
					this.startIndex = Math.min(i - 1, Math.max(0, n * this._rowCount));
					this.endIndex = Math.min(i - 1, Math.max(0, l * this._rowCount - 1));
				} else {
					j = this._rowHeight + g;
					if (0 >= j) {
						return this.startIndex = 0, this.endIndex = i - 1, !1;
					}
					g = this.target.verticalScrollPosition + this.target.height;
					l = Math.floor((this.target.verticalScrollPosition - n) / j);
					0 > l && (l = 0);
					n = Math.ceil((g - n) / j);
					0 > n && (n = 0);
					this.startIndex = Math.min(i - 1, Math.max(0, l * this._columnCount));
					this.endIndex = Math.min(i - 1, Math.max(0, n * this._columnCount - 1));
				}
				return this.startIndex != p || this.endIndex != o;
			};
			d.prototype.updateDisplayList = function(D, A) {
				e.prototype.updateDisplayList.call(this, D, A);
				if (this.target) {
					var z = isNaN(this._padding) ? 0 : this._padding,
						i = isNaN(this._paddingLeft) ? z : this._paddingLeft,
						x = isNaN(this._paddingRight) ? z : this._paddingRight,
						w = isNaN(this._paddingTop) ? z : this._paddingTop,
						u = isNaN(this._paddingBottom) ? z : this._paddingBottom,
						z = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
						v = isNaN(this._verticalGap) ? 0 : this._verticalGap;
					if (this.indexInViewCalculated) {
						this.indexInViewCalculated = !1;
					} else {
						this.calculateRowAndColumn(D, A);
						if (0 == this._rowCount || 0 == this._columnCount) {
							this.target.setContentSize(i + x, w + u);
							return;
						}
						this.adjustForJustify(D, A);
						this.getIndexInView();
					}
					this.useVirtualLayout && (this.calculateRowAndColumn(D, A), this.adjustForJustify(D, A));
					if (-1 == this.startIndex || -1 == this.endIndex) {
						this.target.setContentSize(0, 0);
					} else {
						this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
						for (var s, g, o, E = this.orientation == c.TileOrientation.COLUMNS, C = this.startIndex, j = this.startIndex; j <= this.endIndex; j++) {
							s = this.useVirtualLayout ? this.target.getVirtualElementAt(j) : this.target.getElementAt(j), null != s && s.includeInLayout && (E ? (g = Math.ceil((C + 1) / this._rowCount) - 1, o = Math.ceil((C + 1) % this._rowCount) - 1, -1 == o && (o = this._rowCount - 1)) : (g = Math.ceil((C + 1) % this._columnCount) - 1, -1 == g && (g = this._columnCount - 1), o = Math.ceil((C + 1) / this._columnCount) - 1), g = g * (this._columnWidth + z) + i, o = o * (this._rowHeight + v) + w, this.sizeAndPositionElement(s, g, o, this._columnWidth, this.rowHeight), C++);
						}
						w += u;
						v = (this._rowHeight + v) * this._rowCount - v;
						this.target.setContentSize(Math.ceil((this._columnWidth + z) * this._columnCount - z + (i + x)), Math.ceil(v + w));
					}
				}
			};
			d.prototype.sizeAndPositionElement = function(i, p, o, n, l) {
				var j = NaN,
					g = NaN;
				this.horizontalAlign == a.HorizontalAlign.JUSTIFY ? j = n : isNaN(i.percentWidth) || (j = n * i.percentWidth * 0.01);
				this.verticalAlign == a.VerticalAlign.JUSTIFY ? g = l : isNaN(i.percentHeight) || (g = l * i.percentHeight * 0.01);
				i.setLayoutBoundsSize(Math.round(j), Math.round(g));
				j = p;
				switch (this.horizontalAlign) {
					case a.HorizontalAlign.RIGHT:
						j += n - i.layoutBoundsWidth;
						break;
					case a.HorizontalAlign.CENTER:
						j = p + (n - i.layoutBoundsWidth) / 2;
				}
				p = o;
				switch (this.verticalAlign) {
					case a.VerticalAlign.BOTTOM:
						p += l - i.layoutBoundsHeight;
						break;
					case a.VerticalAlign.MIDDLE:
						p += (l - i.layoutBoundsHeight) / 2;
				}
				i.setLayoutBoundsPosition(Math.round(j), Math.round(p));
			};
			d.prototype.adjustForJustify = function(g, n) {
				var m = isNaN(this._padding) ? 0 : this._padding,
					l = isNaN(this._paddingLeft) ? m : this._paddingLeft,
					j = isNaN(this._paddingRight) ? m : this._paddingRight,
					i = isNaN(this._paddingTop) ? m : this._paddingTop,
					m = isNaN(this._paddingBottom) ? m : this._paddingBottom,
					l = Math.max(0, g - l - j),
					i = Math.max(0, n - i - m);
				isNaN(this.explicitVerticalGap) || (this._verticalGap = this.explicitVerticalGap);
				isNaN(this.explicitHorizontalGap) || (this._horizontalGap = this.explicitHorizontalGap);
				this._verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				this._horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
				i -= this._rowHeight * this._rowCount;
				l -= this._columnWidth * this._columnCount;
				0 < i && (this.rowAlign == c.RowAlign.JUSTIFY_USING_GAP ? (j = Math.max(1, this._rowCount - 1), this._verticalGap = i / j) : this.rowAlign == c.RowAlign.JUSTIFY_USING_HEIGHT && 0 < this._rowCount && (this._rowHeight += (i - (this._rowCount - 1) * this._verticalGap) / this._rowCount));
				0 < l && (this.columnAlign == c.ColumnAlign.JUSTIFY_USING_GAP ? (j = Math.max(1, this._columnCount - 1), this._horizontalGap = l / j) : this.columnAlign == c.ColumnAlign.JUSTIFY_USING_WIDTH && 0 < this._columnCount && (this._columnWidth += (l - (this._columnCount - 1) * this._horizontalGap) / this._columnCount));
			};
			return d;
		}(c.LayoutBase);
		c.TileLayout = b;
		b.prototype.__class__ = "egret.gui.TileLayout";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d(f, e, g) {
				this.raw_getElementAt = "raw_getElementAt";
				this.raw_addElementAt = "raw_addElementAt";
				this.raw_getElementIndex = "raw_getElementIndex";
				this.raw_removeElement = "raw_removeElement";
				this.raw_removeElementAt = "raw_removeElementAt";
				this.raw_setElementIndex = "raw_setElementIndex";
				this.owner = f;
				this.lowerBoundReference = e;
				this.upperBoundReference = g;
			}
			Object.defineProperty(d.prototype, "numElements", {
				get: function() {
					return this.owner[this.upperBoundReference] - this.owner[this.lowerBoundReference];
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.getElementAt = function(e) {
				return this.owner[this.raw_getElementAt](this.owner[this.lowerBoundReference] + e);
			};
			d.prototype.addElement = function(f) {
				var e = this.owner[this.upperBoundReference];
				f.parent === this.owner && e--;
				this.owner[this.upperBoundReference]++;
				this.owner[this.raw_addElementAt](f, e);
				f.ownerChanged(this);
				return f;
			};
			d.prototype.addElementAt = function(f, e) {
				this.owner[this.upperBoundReference]++;
				this.owner[this.raw_addElementAt](f, this.owner[this.lowerBoundReference] + e);
				f.ownerChanged(this);
				return f;
			};
			d.prototype.removeElement = function(f) {
				var e = this.owner[this.raw_getElementIndex](f);
				this.owner[this.lowerBoundReference] <= e && e < this.owner[this.upperBoundReference] && (this.owner[this.raw_removeElement](f), this.owner[this.upperBoundReference]--);
				f.ownerChanged(null);
				return f;
			};
			d.prototype.removeElementAt = function(f) {
				f += this.owner[this.lowerBoundReference];
				var e;
				this.owner[this.lowerBoundReference] <= f && f < this.owner[this.upperBoundReference] && (e = this.owner[this.raw_removeElementAt](f), this.owner[this.upperBoundReference]--);
				e.ownerChanged(null);
				return e;
			};
			d.prototype.getElementIndex = function(e) {
				e = this.owner[this.raw_getElementIndex](e);
				return e -= this.owner[this.lowerBoundReference];
			};
			d.prototype.setElementIndex = function(f, e) {
				this.owner[this.raw_setElementIndex](f, this.owner[this.lowerBoundReference] + e);
			};
			return d;
		}();
		c.UILayer = b;
		b.prototype.__class__ = "egret.gui.UILayer";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(c) {
		var b = function(e) {
			function d() {
				e.call(this);
				this._autoResize = !0;
				this._cursorIndex = this._toolTipIndex = this._topMostIndex = this._noTopMostIndex = 0;
				this.addEventListener(a.Event.ADDED_TO_STAGE, this.onAddToStage, this);
				this.addEventListener(a.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
			}
			__extends(d, e);
			d.prototype.onAddToStage = function(f) {
				if (c.UIGlobals._uiStage) {
					throw Error("UIStage\u662fGUI\u6839\u5bb9\u5668\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u6b64\u5b9e\u4f8b\u5728\u663e\u793a\u5217\u8868\u4e2d\uff01");
				}
				c.UIGlobals._uiStage = this;
				this._autoResize && (this.stage.addEventListener(a.Event.RESIZE, this.onResize, this), this.onResize());
			};
			d.prototype.onRemoveFromStage = function(f) {
				c.UIGlobals._uiStage = null;
				this._autoResize && this.stage.removeEventListener(a.Event.RESIZE, this.onResize, this);
			};
			d.prototype.onResize = function(f) {
				this._setWidth(this.stage.stageWidth);
				this._setHeight(this.stage.stageHeight);
			};
			Object.defineProperty(d.prototype, "autoResize", {
				get: function() {
					return this._autoResize;
				},
				set: function(f) {
					this._autoResize != f && (this._autoResize = f, this.stage && (this._autoResize ? (this.stage.addEventListener(a.Event.RESIZE, this.onResize, this), this.onResize()) : this.stage.removeEventListener(a.Event.RESIZE, this.onResize, this)));
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "x", {
				get: function() {
					return this._x;
				},
				set: function(f) {
					this._autoResize || (this._x = f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "y", {
				get: function() {
					return this._y;
				},
				set: function(f) {
					this._autoResize || (this._y = f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "width", {
				get: function() {
					return this._width;
				},
				set: function(f) {
					this._autoResize || this._setWidth(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "height", {
				get: function() {
					return this._height;
				},
				set: function(f) {
					this._autoResize || this._setHeight(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "scaleX", {
				get: function() {
					return this._scaleX;
				},
				set: function(f) {
					this._autoResize || this._setScaleX(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "scaleY", {
				get: function() {
					return this._scaleY;
				},
				set: function(f) {
					this._autoResize || this._setScaleY(f);
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.setActualSize = function(f, g) {
				this._autoResize || e.prototype.setActualSize.call(this, f, g);
			};
			d.prototype.setLayoutBoundsPosition = function(f, g) {
				this._autoResize || e.prototype.setLayoutBoundsPosition.call(this, f, g);
			};
			d.prototype.setLayoutBoundsSize = function(f, g) {
				this._autoResize || e.prototype.setLayoutBoundsSize.call(this, f, g);
			};
			Object.defineProperty(d.prototype, "layout", {
				get: function() {
					return this._layout;
				},
				set: function(f) {
					f instanceof c.BasicLayout && this._setLayout(f);
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "popUpContainer", {
				get: function() {
					this._popUpContainer || (this._popUpContainer = new c.UILayer(this, "noTopMostIndex", "topMostIndex"));
					return this._popUpContainer;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "toolTipContainer", {
				get: function() {
					this._toolTipContainer || (this._toolTipContainer = new c.UILayer(this, "topMostIndex", "toolTipIndex"));
					return this._toolTipContainer;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "cursorContainer", {
				get: function() {
					this._cursorContainer || (this._cursorContainer = new c.UILayer(this, "toolTipIndex", "cursorIndex"));
					return this._cursorContainer;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "noTopMostIndex", {
				get: function() {
					return this._noTopMostIndex;
				},
				set: function(f) {
					var g = f - this._noTopMostIndex;
					this._noTopMostIndex = f;
					this.topMostIndex += g;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "topMostIndex", {
				get: function() {
					return this._topMostIndex;
				},
				set: function(f) {
					var g = f - this._topMostIndex;
					this._topMostIndex = f;
					this.toolTipIndex += g;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "toolTipIndex", {
				get: function() {
					return this._toolTipIndex;
				},
				set: function(f) {
					var g = f - this._toolTipIndex;
					this._toolTipIndex = f;
					this.cursorIndex += g;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "cursorIndex", {
				get: function() {
					return this._cursorIndex;
				},
				set: function(f) {
					this._cursorIndex = f;
				},
				enumerable: !0,
				configurable: !0
			});
			d.prototype.addElement = function(f) {
				var g = this._noTopMostIndex;
				f.parent == this && g--;
				return this.addElementAt(f, g);
			};
			d.prototype.addElementAt = function(f, h) {
				if (f.parent == this) {
					var g = this.getElementIndex(f);
					g < this._noTopMostIndex ? this.noTopMostIndex-- : g >= this._noTopMostIndex && g < this._topMostIndex ? this.topMostIndex-- : g >= this._topMostIndex && g < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--;
				}
				h <= this._noTopMostIndex ? this.noTopMostIndex++ : h > this._noTopMostIndex && h <= this._topMostIndex ? this.topMostIndex++ : h > this._topMostIndex && h <= this._toolTipIndex ? this.toolTipIndex++ : this.cursorIndex++;
				return e.prototype.addElementAt.call(this, f, h);
			};
			d.prototype.removeElement = function(f) {
				return this.removeElementAt(e.prototype.getElementIndex.call(this, f));
			};
			d.prototype.removeElementAt = function(f) {
				var g = e.prototype.removeElementAt.call(this, f);
				f < this._noTopMostIndex ? this.noTopMostIndex-- : f >= this._noTopMostIndex && f < this._topMostIndex ? this.topMostIndex-- : f >= this._topMostIndex && f < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--;
				return g;
			};
			d.prototype.removeAllElements = function() {
				for (; 0 < this._noTopMostIndex;) {
					e.prototype.removeElementAt.call(this, 0), this.noTopMostIndex--;
				}
			};
			d.prototype._elementRemoved = function(g, i, h) {
				"undefined" === typeof h && (h = !0);
				h && a.Event.dispatchEvent(g, "removeFromUIStage");
				e.prototype._elementRemoved.call(this, g, i, h);
			};
			d.prototype.raw_getElementAt = function(f) {
				return e.prototype.getElementAt.call(this, f);
			};
			d.prototype.raw_addElement = function(f) {
				var g = this.numElements;
				f.parent == this && g--;
				return this.raw_addElementAt(f, g);
			};
			d.prototype.raw_addElementAt = function(f, h) {
				if (f.parent == this) {
					var g = this.getElementIndex(f);
					g < this._noTopMostIndex ? this.noTopMostIndex-- : g >= this._noTopMostIndex && g < this._topMostIndex ? this.topMostIndex-- : g >= this._topMostIndex && g < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--;
				}
				return e.prototype.addElementAt.call(this, f, h);
			};
			d.prototype.raw_removeElement = function(f) {
				return e.prototype.removeElementAt.call(this, e.prototype.getElementIndex.call(this, f));
			};
			d.prototype.raw_removeElementAt = function(f) {
				return e.prototype.removeElementAt.call(this, f);
			};
			d.prototype.raw_removeAllElements = function() {
				for (; 0 < this.numElements;) {
					e.prototype.removeElementAt.call(this, 0);
				}
			};
			d.prototype.raw_getElementIndex = function(f) {
				return e.prototype.getElementIndex.call(this, f);
			};
			d.prototype.raw_setElementIndex = function(f, g) {
				e.prototype.setElementIndex.call(this, f, g);
			};
			d.prototype.raw_swapElements = function(f, g) {
				e.prototype.swapElementsAt.call(this, e.prototype.getElementIndex.call(this, f), e.prototype.getElementIndex.call(this, g));
			};
			d.prototype.raw_swapElementsAt = function(f, g) {
				e.prototype.swapElementsAt.call(this, f, g);
			};
			return d;
		}(c.Group);
		c.UIStage = b;
		b.prototype.__class__ = "egret.gui.UIStage";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(a) {
	(function(d) {
		var b = function(e) {
			function c() {
				e.call(this);
				this._popUpList = [];
				this.popUpDataList = [];
				this._modalColor = 0;
				this._modalAlpha = 0.5;
				this.invalidateModalFlag = !1;
			}
			__extends(c, e);
			Object.defineProperty(c.prototype, "popUpList", {
				get: function() {
					return this._popUpList.concat();
				},
				enumerable: !0,
				configurable: !0
			});
			c.prototype.findPopUpData = function(h) {
				for (var f = this.popUpDataList, k = f.length, j = 0; j < k; j++) {
					var i = f[j];
					if (i.popUp == h) {
						return i;
					}
				}
				return null;
			};
			c.prototype.addPopUp = function(i, n, m) {
				"undefined" === typeof n && (n = !1);
				"undefined" === typeof m && (m = !0);
				var l = d.UIGlobals.uiStage,
					j = this.findPopUpData(i);
				j ? (j.modal = n, i.removeEventListener(c.REMOVE_FROM_UISTAGE, this.onRemoved, this)) : (j = new g(i, n), this.popUpDataList.push(j), this._popUpList.push(i));
				l.popUpContainer.addElement(i);
				m && this.centerPopUp(i);
				"isPopUp" in i && (i.isPopUp = !0);
				n && this.invalidateModal();
				i.addEventListener(c.REMOVE_FROM_UISTAGE, this.onRemoved, this);
			};
			c.prototype.onRemoved = function(i) {
				for (var n = 0, l = this.popUpDataList, k = l.length, j = 0; j < k; j++) {
					var h = l[j];
					if (h.popUp == i.target) {
						"isPopUp" in h.popUp && (h.popUp.isPopUp = !1);
						h.popUp.removeEventListener(c.REMOVE_FROM_UISTAGE, this.onRemoved, this);
						this.popUpDataList.splice(n, 1);
						this._popUpList.splice(n, 1);
						this.invalidateModal();
						break;
					}
					n++;
				}
			};
			Object.defineProperty(c.prototype, "modalColor", {
				get: function() {
					return this._modalColor;
				},
				set: function(f) {
					this._modalColor != f && (this._modalColor = f, this.invalidateModal());
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c.prototype, "modalAlpha", {
				get: function() {
					return this._modalAlpha;
				},
				set: function(f) {
					this._modalAlpha != f && (this._modalAlpha = f, this.invalidateModal());
				},
				enumerable: !0,
				configurable: !0
			});
			c.prototype.invalidateModal = function() {
				this.invalidateModalFlag || (this.invalidateModalFlag = !0, d.UIGlobals.stage.addEventListener(a.Event.ENTER_FRAME, this.validateModal, this), d.UIGlobals.stage.addEventListener(a.Event.RENDER, this.validateModal, this), d.UIGlobals.stage.invalidate());
			};
			c.prototype.validateModal = function(f) {
				this.invalidateModalFlag = !1;
				d.UIGlobals.stage.removeEventListener(a.Event.ENTER_FRAME, this.validateModal, this);
				d.UIGlobals.stage.removeEventListener(a.Event.RENDER, this.validateModal, this);
				this.updateModal(d.UIGlobals.uiStage);
			};
			c.prototype.updateModal = function(i) {
				for (var h = i.popUpContainer, l = !1, k = h.numElements - 1; 0 <= k; k--) {
					var j = h.getElementAt(k);
					if ((j = this.findPopUpData(j)) && j.modal) {
						l = !0;
						break;
					}
				}
				l ? (this.modalMask || (this.modalMask = new d.Rect, this.modalMask.touchEnabled = !0, this.modalMask.top = this.modalMask.left = this.modalMask.right = this.modalMask.bottom = 0), this.modalMask.fillColor = this._modalColor, this.modalMask.alpha = this._modalAlpha, this.modalMask.parent == i ? (h.getElementIndex(this.modalMask) < k && k--, h.setElementIndex(this.modalMask, k)) : h.addElementAt(this.modalMask, k)) : this.modalMask && this.modalMask.parent == i && h.removeElement(this.modalMask);
			};
			c.prototype.removePopUp = function(f) {
				f && f.parent && this.findPopUpData(f) && ("removeElement" in f.parent ? f.parent.removeElement(f) : f.parent instanceof d.UIComponent ? f.parent._removeFromDisplayList(f) : f instanceof a.DisplayObject && f.parent.removeChild(f));
			};
			c.prototype.centerPopUp = function(h) {
				h.top = h.bottom = h.left = h.right = NaN;
				h.verticalCenter = h.horizontalCenter = 0;
				var f = h.parent;
				f && ("validateNow" in h && h.validateNow(), h.x = 0.5 * (f.width - h.layoutBoundsWidth), h.y = 0.5 * (f.height - h.layoutBoundsHeight));
			};
			c.prototype.bringToFront = function(h) {
				if (this.findPopUpData(h) && h.parent && "popUpContainer" in h.parent) {
					var f = h.parent;
					f.popUpContainer.setElementIndex(h, f.popUpContainer.numElements - 1);
					this.invalidateModal();
				}
			};
			c.REMOVE_FROM_UISTAGE = "removeFromUIStage";
			return c;
		}(a.EventDispatcher);
		d.PopUpManagerImpl = b;
		b.prototype.__class__ = "egret.gui.PopUpManagerImpl";
		var g = function() {
			return function(e, c) {
				this.popUp = e;
				this.modal = c;
			};
		}();
		g.prototype.__class__ = "PopUpData";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
(function(a) {
	(function(c) {
		var b = function() {
			function d() {}
			d.getImpl = function() {
				if (!d._impl) {
					try {
						d._impl = a.Injector.getInstance("egret.gui.IPopUpManager");
					} catch (e) {
						d._impl = new c.PopUpManagerImpl;
					}
				}
				return d._impl;
			};
			Object.defineProperty(d.prototype, "modalColor", {
				get: function() {
					return d.getImpl().modalColor;
				},
				set: function(e) {
					d.getImpl().modalColor = e;
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d.prototype, "modalAlpha", {
				get: function() {
					return d.getImpl().modalAlpha;
				},
				set: function(e) {
					d.getImpl().modalAlpha = e;
				},
				enumerable: !0,
				configurable: !0
			});
			d.addPopUp = function(f, e, g) {
				"undefined" === typeof e && (e = !1);
				"undefined" === typeof g && (g = !0);
				d.getImpl().addPopUp(f, e, g);
				c.PopUpEvent.dispatchPopUpEvent(d.getImpl(), c.PopUpEvent.ADD_POPUP, f, e);
			};
			d.removePopUp = function(e) {
				d.getImpl().removePopUp(e);
				c.PopUpEvent.dispatchPopUpEvent(d.getImpl(), c.PopUpEvent.REMOVE_POPUP, e);
			};
			d.centerPopUp = function(e) {
				d.getImpl().centerPopUp(e);
			};
			d.bringToFront = function(e) {
				d.getImpl().bringToFront(e);
				c.PopUpEvent.dispatchPopUpEvent(d.getImpl(), c.PopUpEvent.BRING_TO_FRONT, e);
			};
			Object.defineProperty(d, "popUpList", {
				get: function() {
					return d.getImpl().popUpList;
				},
				enumerable: !0,
				configurable: !0
			});
			d.addEventListener = function(h, g, k, j, i) {
				"undefined" === typeof j && (j = !1);
				"undefined" === typeof i && (i = 0);
				d.getImpl().addEventListener(h, g, this, j, i);
			};
			d.removeEventListener = function(g, f, i, h) {
				"undefined" === typeof h && (h = !1);
				d.getImpl().removeEventListener(g, f, i, h);
			};
			return d;
		}();
		c.PopUpManager = b;
		b.prototype.__class__ = "egret.gui.PopUpManager";
	})(a.gui || (a.gui = {}));
})(egret || (egret = {}));
var __extends = this.__extends || function(g, b) {
		function a() {
			this.constructor = g;
		}
		for (var h in b) {
			b.hasOwnProperty(h) && (g[h] = b[h]);
		}
		a.prototype = b.prototype;
		g.prototype = new a;
	},
	dragonBones;
(function(n) {
	(function(d) {
		var c = function() {
			function b(a, e) {
				"undefined" === typeof a && (a = 0);
				"undefined" === typeof e && (e = 0);
				this.x = a;
				this.y = e;
			}
			b.prototype.toString = function() {
				return "[Point (x=" + this.x + " y=" + this.y + ")]";
			};
			return b;
		}();
		d.Point = c;
		c.prototype.__class__ = "dragonBones.geom.Point";
		c = function() {
			return function(f, e, h, g) {
				"undefined" === typeof f && (f = 0);
				"undefined" === typeof e && (e = 0);
				"undefined" === typeof h && (h = 0);
				"undefined" === typeof g && (g = 0);
				this.x = f;
				this.y = e;
				this.width = h;
				this.height = g;
			};
		}();
		d.Rectangle = c;
		c.prototype.__class__ = "dragonBones.geom.Rectangle";
		c = function() {
			function b() {
				this.a = 1;
				this.c = this.b = 0;
				this.d = 1;
				this.ty = this.tx = 0;
			}
			b.prototype.invert = function() {
				var h = this.a,
					g = this.b,
					v = this.c,
					u = this.d,
					s = this.tx,
					q = h * u - g * v;
				this.a = u / q;
				this.b = -g / q;
				this.c = -v / q;
				this.d = h / q;
				this.tx = (v * this.ty - u * s) / q;
				this.ty = -(h * this.ty - g * s) / q;
			};
			return b;
		}();
		d.Matrix = c;
		c.prototype.__class__ = "dragonBones.geom.Matrix";
		c = function() {
			return function() {
				this.redOffset = this.redMultiplier = this.greenOffset = this.greenMultiplier = this.blueOffset = this.blueMultiplier = this.alphaOffset = this.alphaMultiplier = 0;
			};
		}();
		d.ColorTransform = c;
		c.prototype.__class__ = "dragonBones.geom.ColorTransform";
	})(n.geom || (n.geom = {}));
	var m = n.geom;
	(function(e) {
		var d = function() {
			return function(b) {
				this.type = b;
			};
		}();
		e.Event = d;
		d.prototype.__class__ = "dragonBones.events.Event";
		var f = function(g) {
			function c(a) {
				g.call(this, a);
			}
			__extends(c, g);
			c.FADE_IN = "fadeIn";
			c.FADE_OUT = "fadeOut";
			c.START = "start";
			c.COMPLETE = "complete";
			c.LOOP_COMPLETE = "loopComplete";
			c.FADE_IN_COMPLETE = "fadeInComplete";
			c.FADE_OUT_COMPLETE = "fadeOutComplete";
			return c;
		}(d);
		e.AnimationEvent = f;
		f.prototype.__class__ = "dragonBones.events.AnimationEvent";
		f = function(g) {
			function c(a) {
				g.call(this, a);
			}
			__extends(c, g);
			c.Z_ORDER_UPDATED = "zOrderUpdated";
			return c;
		}(d);
		e.ArmatureEvent = f;
		f.prototype.__class__ = "dragonBones.events.ArmatureEvent";
		f = function(g) {
			function c(a) {
				g.call(this, a);
			}
			__extends(c, g);
			c.ANIMATION_FRAME_EVENT = "animationFrameEvent";
			c.BONE_FRAME_EVENT = "boneFrameEvent";
			return c;
		}(d);
		e.FrameEvent = f;
		f.prototype.__class__ = "dragonBones.events.FrameEvent";
		d = function(g) {
			function c(a) {
				g.call(this, a);
			}
			__extends(c, g);
			c.SOUND = "sound";
			c.BONE_FRAME_EVENT = "boneFrameEvent";
			return c;
		}(d);
		e.SoundEvent = d;
		d.prototype.__class__ = "dragonBones.events.SoundEvent";
		d = function() {
			function b() {}
			b.prototype.hasEventListener = function(c) {
				return this._listenersMap && this._listenersMap[c] ? !0 : !1;
			};
			b.prototype.addEventListener = function(h, g) {
				if (h && g) {
					this._listenersMap || (this._listenersMap = {});
					var q = this._listenersMap[h];
					q && this.removeEventListener(h, g);
					q ? q.push(g) : this._listenersMap[h] = [g];
				}
			};
			b.prototype.removeEventListener = function(h, g) {
				if (this._listenersMap && h && g) {
					var u = this._listenersMap[h];
					if (u) {
						for (var s = u.length, q = 0; q < s; q++) {
							u[q] == g && (1 == s ? (u.length = 0, delete this._listenersMap[h]) : u.splice(q, 1));
						}
					}
				}
			};
			b.prototype.removeAllEventListeners = function(c) {
				c ? delete this._listenersMap[c] : this._listenersMap = null;
			};
			b.prototype.dispatchEvent = function(h) {
				if (h) {
					var g = this._listenersMap[h.type];
					if (g) {
						h.target = this;
						for (var s = g.concat(), g = g.length, q = 0; q < g; q++) {
							s[q](h);
						}
					}
				}
			};
			return b;
		}();
		e.EventDispatcher = d;
		d.prototype.__class__ = "dragonBones.events.EventDispatcher";
		d = function(g) {
			function c() {
				g.call(this);
				if (c._instance) {
					throw Error("Singleton already constructed!");
				}
			}
			__extends(c, g);
			c.getInstance = function() {
				c._instance || (c._instance = new c);
				return c._instance;
			};
			return c;
		}(d);
		e.SoundEventManager = d;
		d.prototype.__class__ = "dragonBones.events.SoundEventManager";
	})(n.events || (n.events = {}));
	var l = n.events;
	(function(f) {
		var e = function() {
			function c() {
				this.timeScale = 1;
				this.time = 0.001 * (new Date).getTime();
				this._animatableList = [];
			}
			c.prototype.contains = function(d) {
				return 0 <= this._animatableList.indexOf(d);
			};
			c.prototype.add = function(d) {
				d && -1 == this._animatableList.indexOf(d) && this._animatableList.push(d);
			};
			c.prototype.remove = function(d) {
				d = this._animatableList.indexOf(d);
				0 <= d && (this._animatableList[d] = null);
			};
			c.prototype.clear = function() {
				this._animatableList.length = 0;
			};
			c.prototype.advanceTime = function(h) {
				if (0 > h) {
					var g = 0.001 * (new Date).getTime();
					h = g - this.time;
					this.time = g;
				}
				h *= this.timeScale;
				g = this._animatableList.length;
				if (0 != g) {
					for (var u = 0, s = 0; s < g; s++) {
						var q = this._animatableList[s];
						q && (u != s && (this._animatableList[u] = q, this._animatableList[s] = null), q.advanceTime(h), u++);
					}
					if (u != s) {
						for (g = this._animatableList.length; s < g;) {
							this._animatableList[u++] = this._animatableList[s++];
						}
						this._animatableList.length = u;
					}
				}
			};
			c.clock = new c;
			return c;
		}();
		f.WorldClock = e;
		e.prototype.__class__ = "dragonBones.animation.WorldClock";
		var b = function() {
			function d() {
				this.transform = new r.DBTransform;
				this.pivot = new m.Point;
				this._durationTransform = new r.DBTransform;
				this._durationPivot = new m.Point;
				this._durationColor = new m.ColorTransform;
			}
			d._borrowObject = function() {
				return 0 == d._pool.length ? new d : d._pool.pop();
			};
			d._returnObject = function(c) {
				0 > d._pool.indexOf(c) && (d._pool[d._pool.length] = c);
				c.clear();
			};
			d._clear = function() {
				for (var c = d._pool.length; c--;) {
					d._pool[c].clear();
				}
				d._pool.length = 0;
			};
			d.getEaseValue = function(g, c) {
				if (1 < c) {
					var h = 0.5 * (1 - Math.cos(g * Math.PI)) - g;
					c -= 1;
				} else {
					0 < c ? h = Math.sin(g * d.HALF_PI) - g : 0 > c && (h = 1 - Math.cos(g * d.HALF_PI) - g, c *= -1);
				}
				return h * c + g;
			};
			d.prototype.fadeIn = function(h, g, q) {
				this._bone = h;
				this._animationState = g;
				this._timeline = q;
				this._originTransform = this._timeline.originTransform;
				this._originPivot = this._timeline.originPivot;
				this._tweenColor = this._tweenTransform = !1;
				this._totalTime = this._animationState.totalTime;
				this.transform.x = 0;
				this.transform.y = 0;
				this.transform.scaleX = 0;
				this.transform.scaleY = 0;
				this.transform.skewX = 0;
				this.transform.skewY = 0;
				this.pivot.x = 0;
				this.pivot.y = 0;
				this._durationTransform.x = 0;
				this._durationTransform.y = 0;
				this._durationTransform.scaleX = 0;
				this._durationTransform.scaleY = 0;
				this._durationTransform.skewX = 0;
				this._durationTransform.skewY = 0;
				this._durationPivot.x = 0;
				this._durationPivot.y = 0;
				this._currentFrame = null;
				switch (this._timeline.getFrameList().length) {
					case 0:
						this._bone._arriveAtFrame(null, this, this._animationState, !1);
						this._updateState = 0;
						break;
					case 1:
						this._updateState = -1;
						break;
					default:
						this._updateState = 1;
				}
			};
			d.prototype.fadeOut = function() {
				this.transform.skewX = p.TransformUtil.formatRadian(this.transform.skewX);
				this.transform.skewY = p.TransformUtil.formatRadian(this.transform.skewY);
			};
			d.prototype.update = function(c) {
				if (this._updateState) {
					if (0 < this._updateState) {
						c = 0 == this._timeline.scale ? 1 : c / this._timeline.scale;
						1 == c && (c = 0.99999999);
						c += this._timeline.offset;
						var u = Math.floor(c);
						c -= u;
						for (var s = this._totalTime * c, q = !1, h; !this._currentFrame || s > this._currentFramePosition + this._currentFrameDuration || s < this._currentFramePosition;) {
							q && this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !0), q = !0, this._currentFrame ? (h = this._timeline.getFrameList().indexOf(this._currentFrame) + 1, h >= this._timeline.getFrameList().length && (h = 0), this._currentFrame = this._timeline.getFrameList()[h]) : (h = 0, this._currentFrame = this._timeline.getFrameList()[0]), this._currentFrameDuration = this._currentFrame.duration, this._currentFramePosition = this._currentFrame.position;
						}
						q && (this.tweenActive = 0 <= this._currentFrame.displayIndex, h++, h >= this._timeline.getFrameList().length && (h = 0), q = this._timeline.getFrameList()[h], 0 == h && this._animationState.loop && this._animationState.loopCount >= Math.abs(this._animationState.loop) - 1 && 0.99999999 < ((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + u - this._timeline.offset) * this._timeline.scale ? (this._updateState = 0, this._tweenEasing = NaN) : 0 > this._currentFrame.displayIndex || 0 > q.displayIndex || !this._animationState.tweenEnabled ? this._tweenEasing = NaN : isNaN(this._animationState.clip.tweenEasing) ? this._tweenEasing = this._currentFrame.tweenEasing : this._tweenEasing = this._animationState.clip.tweenEasing, isNaN(this._tweenEasing) ? this._tweenColor = this._tweenTransform = !1 : (this._durationTransform.x = q.transform.x - this._currentFrame.transform.x, this._durationTransform.y = q.transform.y - this._currentFrame.transform.y, this._durationTransform.skewX = q.transform.skewX - this._currentFrame.transform.skewX, this._durationTransform.skewY = q.transform.skewY - this._currentFrame.transform.skewY, this._durationTransform.scaleX = q.transform.scaleX - this._currentFrame.transform.scaleX, this._durationTransform.scaleY = q.transform.scaleY - this._currentFrame.transform.scaleY, 0 == h && (this._durationTransform.skewX = p.TransformUtil.formatRadian(this._durationTransform.skewX), this._durationTransform.skewY = p.TransformUtil.formatRadian(this._durationTransform.skewY)), this._durationPivot.x = q.pivot.x - this._currentFrame.pivot.x, this._durationPivot.y = q.pivot.y - this._currentFrame.pivot.y, this._tweenTransform = 0 != this._durationTransform.x || 0 != this._durationTransform.y || 0 != this._durationTransform.skewX || 0 != this._durationTransform.skewY || 0 != this._durationTransform.scaleX || 0 != this._durationTransform.scaleY || 0 != this._durationPivot.x || 0 != this._durationPivot.y ? !0 : !1, this._currentFrame.color && q.color ? (this._durationColor.alphaOffset = q.color.alphaOffset - this._currentFrame.color.alphaOffset, this._durationColor.redOffset = q.color.redOffset - this._currentFrame.color.redOffset, this._durationColor.greenOffset = q.color.greenOffset - this._currentFrame.color.greenOffset, this._durationColor.blueOffset = q.color.blueOffset - this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = q.color.alphaMultiplier - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = q.color.redMultiplier - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = q.color.greenMultiplier - this._currentFrame.color.greenMultiplier, this._durationColor.blueMultiplier = q.color.blueMultiplier - this._currentFrame.color.blueMultiplier, this._tweenColor = 0 != this._durationColor.alphaOffset || 0 != this._durationColor.redOffset || 0 != this._durationColor.greenOffset || 0 != this._durationColor.blueOffset || 0 != this._durationColor.alphaMultiplier || 0 != this._durationColor.redMultiplier || 0 != this._durationColor.greenMultiplier || 0 != this._durationColor.blueMultiplier ? !0 : !1) : this._currentFrame.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = -this._currentFrame.color.alphaOffset, this._durationColor.redOffset = -this._currentFrame.color.redOffset, this._durationColor.greenOffset = -this._currentFrame.color.greenOffset, this._durationColor.blueOffset = -this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = 1 - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = 1 - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = 1 - this._currentFrame.color.greenMultiplier, this._durationColor.blueMultiplier = 1 - this._currentFrame.color.blueMultiplier) : q.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = q.color.alphaOffset, this._durationColor.redOffset = q.color.redOffset, this._durationColor.greenOffset = q.color.greenOffset, this._durationColor.blueOffset = q.color.blueOffset, this._durationColor.alphaMultiplier = q.color.alphaMultiplier - 1, this._durationColor.redMultiplier = q.color.redMultiplier - 1, this._durationColor.greenMultiplier = q.color.greenMultiplier - 1, this._durationColor.blueMultiplier = q.color.blueMultiplier - 1) : this._tweenColor = !1), this._tweenTransform || (this._animationState.blend ? (this.transform.x = this._originTransform.x + this._currentFrame.transform.x, this.transform.y = this._originTransform.y + this._currentFrame.transform.y, this.transform.skewX = this._originTransform.skewX + this._currentFrame.transform.skewX, this.transform.skewY = this._originTransform.skewY + this._currentFrame.transform.skewY, this.transform.scaleX = this._originTransform.scaleX + this._currentFrame.transform.scaleX, this.transform.scaleY = this._originTransform.scaleY + this._currentFrame.transform.scaleY, this.pivot.x = this._originPivot.x + this._currentFrame.pivot.x, this.pivot.y = this._originPivot.y + this._currentFrame.pivot.y) : (this.transform.x = this._currentFrame.transform.x, this.transform.y = this._currentFrame.transform.y, this.transform.skewX = this._currentFrame.transform.skewX, this.transform.skewY = this._currentFrame.transform.skewY, this.transform.scaleX = this._currentFrame.transform.scaleX, this.transform.scaleY = this._currentFrame.transform.scaleY, this.pivot.x = this._currentFrame.pivot.x, this.pivot.y = this._currentFrame.pivot.y)), this._tweenColor || (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._isColorChanged && this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1)), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1));
						if (this._tweenTransform || this._tweenColor) {
							c = (s - this._currentFramePosition) / this._currentFrameDuration, this._tweenEasing && (c = d.getEaseValue(c, this._tweenEasing));
						}
						this._tweenTransform && (u = this._currentFrame.transform, s = this._currentFrame.pivot, this._animationState.blend ? (this.transform.x = this._originTransform.x + u.x + this._durationTransform.x * c, this.transform.y = this._originTransform.y + u.y + this._durationTransform.y * c, this.transform.skewX = this._originTransform.skewX + u.skewX + this._durationTransform.skewX * c, this.transform.skewY = this._originTransform.skewY + u.skewY + this._durationTransform.skewY * c, this.transform.scaleX = this._originTransform.scaleX + u.scaleX + this._durationTransform.scaleX * c, this.transform.scaleY = this._originTransform.scaleY + u.scaleY + this._durationTransform.scaleY * c, this.pivot.x = this._originPivot.x + s.x + this._durationPivot.x * c, this.pivot.y = this._originPivot.y + s.y + this._durationPivot.y * c) : (this.transform.x = u.x + this._durationTransform.x * c, this.transform.y = u.y + this._durationTransform.y * c, this.transform.skewX = u.skewX + this._durationTransform.skewX * c, this.transform.skewY = u.skewY + this._durationTransform.skewY * c, this.transform.scaleX = u.scaleX + this._durationTransform.scaleX * c, this.transform.scaleY = u.scaleY + this._durationTransform.scaleY * c, this.pivot.x = s.x + this._durationPivot.x * c, this.pivot.y = s.y + this._durationPivot.y * c));
						this._tweenColor && (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset + this._durationColor.alphaOffset * c, this._currentFrame.color.redOffset + this._durationColor.redOffset * c, this._currentFrame.color.greenOffset + this._durationColor.greenOffset * c, this._currentFrame.color.blueOffset + this._durationColor.blueOffset * c, this._currentFrame.color.alphaMultiplier + this._durationColor.alphaMultiplier * c, this._currentFrame.color.redMultiplier + this._durationColor.redMultiplier * c, this._currentFrame.color.greenMultiplier + this._durationColor.greenMultiplier * c, this._currentFrame.color.blueMultiplier + this._durationColor.blueMultiplier * c, !0) : this._bone._updateColor(this._durationColor.alphaOffset * c, this._durationColor.redOffset * c, this._durationColor.greenOffset * c, this._durationColor.blueOffset * c, 1 + this._durationColor.alphaMultiplier * c, 1 + this._durationColor.redMultiplier * c, 1 + this._durationColor.greenMultiplier * c, 1 + this._durationColor.blueMultiplier * c, !0));
					} else {
						this._updateState = 0, this._animationState.blend ? (this.transform.copy(this._originTransform), this.pivot.x = this._originPivot.x, this.pivot.y = this._originPivot.y) : (this.transform.x = this.transform.y = this.transform.skewX = this.transform.skewY = this.transform.scaleX = this.transform.scaleY = 0, this.pivot.x = 0, this.pivot.y = 0), this._currentFrame = this._timeline.getFrameList()[0], this.tweenActive = 0 <= this._currentFrame.displayIndex, this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1);
					}
				}
			};
			d.prototype.clear = function() {
				this._updateState = 0;
				this._originPivot = this._originTransform = this._currentFrame = this._timeline = this._animationState = this._bone = null;
			};
			d.HALF_PI = 0.5 * Math.PI;
			d._pool = [];
			return d;
		}();
		f.TimelineState = b;
		b.prototype.__class__ = "dragonBones.animation.TimelineState";
		var a = function() {
			function c() {
				this.layer = this.loop = 0;
				this._timelineStates = {};
			}
			c._borrowObject = function() {
				return 0 == c._pool.length ? new c : c._pool.pop();
			};
			c._returnObject = function(d) {
				0 > c._pool.indexOf(d) && (c._pool[c._pool.length] = d);
				d.clear();
			};
			c._clear = function() {
				for (var d = c._pool.length; d--;) {
					c._pool[d].clear();
				}
				c._pool.length = 0;
			};
			c.prototype.fadeIn = function(s, h, y, x, w, v, u, q) {
				this.layer = v;
				this.clip = h;
				this.name = this.clip.name;
				this.totalTime = this.clip.duration;
				this._armature = s;
				2 > Math.round(this.clip.duration * this.clip.frameRate) || Infinity == x ? (this.timeScale = 1, this.currentTime = this.totalTime, this.loop = 0 <= this.loop ? 1 : -1) : (this.timeScale = x, this.currentTime = 0, this.loop = w);
				this._pauseBeforeFadeInComplete = q;
				this._fadeInTime = y * this.timeScale;
				this._fadeState = 1;
				this._fadeOutBeginTime = 0;
				this._fadeOutWeight = -1;
				this._fadeWeight = 0;
				this._fadeIn = !0;
				this._fadeOut = !1;
				this.loopCount = -1;
				this.displayControl = u;
				this.isPlaying = !0;
				this.isComplete = !1;
				this.weight = 1;
				this.tweenEnabled = this.enabled = this.blend = !0;
				this.updateTimelineStates();
			};
			c.prototype.fadeOut = function(g, d) {
				"undefined" === typeof d && (d = !1);
				if (this._armature && !(0 <= this._fadeOutWeight)) {
					this._fadeState = -1;
					this._fadeOutWeight = this._fadeWeight;
					this._fadeOutTime = g * this.timeScale;
					this._fadeOutBeginTime = this.currentTime;
					this._fadeOut = !0;
					this.isPlaying = !d;
					this.displayControl = !1;
					for (var h in this._timelineStates) {
						this._timelineStates[h].fadeOut();
					}
					this.enabled = !0;
				}
			};
			c.prototype.play = function() {
				this.isPlaying = !0;
			};
			c.prototype.stop = function() {
				this.isPlaying = !1;
			};
			c.prototype.getMixingTransform = function(d) {
				return this._mixingTransforms ? Number(this._mixingTransforms[d]) : -1;
			};
			c.prototype.addMixingTransform = function(h, g, u) {
				"undefined" === typeof g && (g = 2);
				"undefined" === typeof u && (u = !0);
				if (this.clip && this.clip.getTimeline(h)) {
					this._mixingTransforms || (this._mixingTransforms = {});
					if (u) {
						u = this._armature._boneList.length;
						for (var s, q; u--;) {
							s = this._armature._boneList[u], s.name == h && (q = s), q && (q == s || q.contains(s)) && (this._mixingTransforms[s.name] = g);
						}
					} else {
						this._mixingTransforms[h] = g;
					}
					this.updateTimelineStates();
				} else {
					throw Error();
				}
			};
			c.prototype.removeMixingTransform = function(q, h) {
				"undefined" === typeof q && (q = null);
				"undefined" === typeof h && (h = !0);
				if (q) {
					if (h) {
						for (var x = this._armature._boneList.length, w, v; x--;) {
							w = this._armature._boneList[x], w.name == q && (v = w), v && (v == w || v.contains(w)) && delete this._mixingTransforms[w.name];
						}
					} else {
						delete this._mixingTransforms[q];
					}
					for (var u in this._mixingTransforms) {
						var s = !0;
						break;
					}
					s || (this._mixingTransforms = null);
				} else {
					this._mixingTransforms = null;
				}
				this.updateTimelineStates();
			};
			c.prototype.advanceTime = function(h) {
				if (!this.enabled) {
					return !1;
				}
				var g, u;
				this._fadeIn && (this._fadeIn = !1, this._armature.hasEventListener(l.AnimationEvent.FADE_IN) && (g = new l.AnimationEvent(l.AnimationEvent.FADE_IN), g.animationState = this, this._armature._eventList.push(g)));
				this._fadeOut && (this._fadeOut = !1, this._armature.hasEventListener(l.AnimationEvent.FADE_OUT) && (g = new l.AnimationEvent(l.AnimationEvent.FADE_OUT), g.animationState = this, this._armature._eventList.push(g)));
				this.currentTime += h * this.timeScale;
				if (this.isPlaying && !this.isComplete) {
					var s;
					if (this._pauseBeforeFadeInComplete) {
						this.isPlaying = this._pauseBeforeFadeInComplete = !1, h = 0, s = Math.floor(h);
					} else {
						if (h = this.currentTime / this.totalTime, s = Math.floor(h), s != this.loopCount && (-1 == this.loopCount && this._armature.hasEventListener(l.AnimationEvent.START) && (g = new l.AnimationEvent(l.AnimationEvent.START), g.animationState = this, this._armature._eventList.push(g)), this.loopCount = s)) {
							this.loop && this.loopCount * this.loopCount >= this.loop * this.loop - 1 ? (u = !0, h = 1, s = 0, this._armature.hasEventListener(l.AnimationEvent.COMPLETE) && (g = new l.AnimationEvent(l.AnimationEvent.COMPLETE), g.animationState = this, this._armature._eventList.push(g))) : this._armature.hasEventListener(l.AnimationEvent.LOOP_COMPLETE) && (g = new l.AnimationEvent(l.AnimationEvent.LOOP_COMPLETE), g.animationState = this, this._armature._eventList.push(g));
						}
					}
					for (var q in this._timelineStates) {
						this._timelineStates[q].update(h);
					}
					g = this.clip.getFrameList();
					if (0 < g.length) {
						h = this.totalTime * (h - s);
						for (s = !1; !this._currentFrame || h > this._currentFrame.position + this._currentFrame.duration || h < this._currentFrame.position;) {
							s && this._armature._arriveAtFrame(this._currentFrame, null, this, !0), s = !0, this._currentFrame ? (q = g.indexOf(this._currentFrame), q++, q >= g.length && (q = 0), this._currentFrame = g[q]) : this._currentFrame = g[0];
						}
						s && this._armature._arriveAtFrame(this._currentFrame, null, this, !1);
					}
				}
				if (0 < this._fadeState) {
					0 == this._fadeInTime ? (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying = !0, this._armature.hasEventListener(l.AnimationEvent.FADE_IN_COMPLETE) && (g = new l.AnimationEvent(l.AnimationEvent.FADE_IN_COMPLETE), g.animationState = this, this._armature._eventList.push(g))) : (this._fadeWeight = this.currentTime / this._fadeInTime, 1 <= this._fadeWeight && (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying || (this.currentTime -= this._fadeInTime), this.isPlaying = !0, this._armature.hasEventListener(l.AnimationEvent.FADE_IN_COMPLETE) && (g = new l.AnimationEvent(l.AnimationEvent.FADE_IN_COMPLETE), g.animationState = this, this._armature._eventList.push(g))));
				} else {
					if (0 > this._fadeState) {
						if (0 == this._fadeOutTime) {
							return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(l.AnimationEvent.FADE_OUT_COMPLETE) && (g = new l.AnimationEvent(l.AnimationEvent.FADE_OUT_COMPLETE), g.animationState = this, this._armature._eventList.push(g)), !0;
						}
						this._fadeWeight = (1 - (this.currentTime - this._fadeOutBeginTime) / this._fadeOutTime) * this._fadeOutWeight;
						if (0 >= this._fadeWeight) {
							return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(l.AnimationEvent.FADE_OUT_COMPLETE) && (g = new l.AnimationEvent(l.AnimationEvent.FADE_OUT_COMPLETE), g.animationState = this, this._armature._eventList.push(g)), !0;
						}
					}
				}
				u && (this.isComplete = !0, 0 > this.loop && this.fadeOut((this._fadeOutWeight || this._fadeInTime) / this.timeScale, !0));
				return !1;
			};
			c.prototype.updateTimelineStates = function() {
				if (this._mixingTransforms) {
					for (var d in this._timelineStates) {
						null == this._mixingTransforms[d] && this.removeTimelineState(d);
					}
					for (d in this._mixingTransforms) {
						this._timelineStates[d] || this.addTimelineState(d);
					}
				} else {
					for (d in this.clip.getTimelines()) {
						this._timelineStates[d] || this.addTimelineState(d);
					}
				}
			};
			c.prototype.addTimelineState = function(h) {
				var g = this._armature.getBone(h);
				if (g) {
					var s = b._borrowObject(),
						q = this.clip.getTimeline(h);
					s.fadeIn(g, this, q);
					this._timelineStates[h] = s;
				}
			};
			c.prototype.removeTimelineState = function(d) {
				b._returnObject(this._timelineStates[d]);
				delete this._timelineStates[d];
			};
			c.prototype.clear = function() {
				this.clip = null;
				this.enabled = !1;
				this._mixingTransforms = this._currentFrame = this._armature = null;
				for (var d in this._timelineStates) {
					this.removeTimelineState(d);
				}
			};
			c._pool = [];
			return c;
		}();
		f.AnimationState = a;
		a.prototype.__class__ = "dragonBones.animation.AnimationState";
		e = function() {
			function c(d) {
				this._armature = d;
				this._animationLayer = [];
				this._isPlaying = !1;
				this.animationNameList = [];
				this.tweenEnabled = !0;
				this.timeScale = 1;
			}
			c.prototype.getLastAnimationName = function() {
				return this._lastAnimationState ? this._lastAnimationState.name : null;
			};
			c.prototype.getLastAnimationState = function() {
				return this._lastAnimationState;
			};
			c.prototype.getAnimationDataList = function() {
				return this._animationDataList;
			};
			c.prototype.setAnimationDataList = function(g) {
				this._animationDataList = g;
				this.animationNameList.length = 0;
				for (var d in this._animationDataList) {
					this.animationNameList[this.animationNameList.length] = this._animationDataList[d].name;
				}
			};
			c.prototype.getIsPlaying = function() {
				return this._isPlaying && !this.getIsComplete();
			};
			c.prototype.getIsComplete = function() {
				if (this._lastAnimationState) {
					if (!this._lastAnimationState.isComplete) {
						return !1;
					}
					for (var g = this._animationLayer.length; g--;) {
						for (var d = this._animationLayer[g], h = d.length; h--;) {
							if (!d[h].isComplete) {
								return !1;
							}
						}
					}
					return !0;
				}
				return !1;
			};
			c.prototype.dispose = function() {
				if (this._armature) {
					this.stop();
					for (var g = this._animationLayer.length; g--;) {
						for (var d = this._animationLayer[g], h = d.length; h--;) {
							a._returnObject(d[h]);
						}
						d.length = 0;
					}
					this._animationLayer.length = 0;
					this.animationNameList.length = 0;
					this.animationNameList = this._animationDataList = this._animationLayer = this._armature = null;
				}
			};
			c.prototype.gotoAndPlay = function(F, E, D, B, A, z, x, y, w, J) {
				"undefined" === typeof E && (E = -1);
				"undefined" === typeof D && (D = -1);
				"undefined" === typeof B && (B = NaN);
				"undefined" === typeof A && (A = 0);
				"undefined" === typeof z && (z = null);
				"undefined" === typeof x && (x = c.SAME_LAYER_AND_GROUP);
				"undefined" === typeof y && (y = !0);
				"undefined" === typeof w && (w = !0);
				"undefined" === typeof J && (J = !0);
				if (!this._animationDataList) {
					return null;
				}
				for (var u = this._animationDataList.length, h; u--;) {
					if (this._animationDataList[u].name == F) {
						h = this._animationDataList[u];
						break;
					}
				}
				if (!h) {
					return null;
				}
				this._isPlaying = !0;
				E = 0 > E ? 0 > h.fadeInTime ? 0.3 : h.fadeInTime : E;
				D = 0 > D ? 0 > h.scale ? 1 : h.scale : D / h.duration;
				B = isNaN(B) ? h.loop : B;
				A = this.addLayer(A);
				var I;
				switch (x) {
					case c.NONE:
						break;
					case c.SAME_LAYER:
						I = this._animationLayer[A];
						for (u = I.length; u--;) {
							x = I[u], x.fadeOut(E, w);
						}
						break;
					case c.SAME_GROUP:
						for (G = this._animationLayer.length; G--;) {
							for (I = this._animationLayer[G], u = I.length; u--;) {
								x = I[u], x.group == z && x.fadeOut(E, w);
							}
						}
						break;
					case c.ALL:
						for (var G = this._animationLayer.length; G--;) {
							for (I = this._animationLayer[G], u = I.length; u--;) {
								x = I[u], x.fadeOut(E, w);
							}
						}
						break;
					default:
						for (I = this._animationLayer[A], u = I.length; u--;) {
							x = I[u], x.group == z && x.fadeOut(E, w);
						}
				}
				this._lastAnimationState = a._borrowObject();
				this._lastAnimationState.group = z;
				this._lastAnimationState.tweenEnabled = this.tweenEnabled;
				this._lastAnimationState.fadeIn(this._armature, h, E, 1 / D, B, A, y, J);
				this.addState(this._lastAnimationState);
				B = this._armature._slotList;
				for (u = B.length; u--;) {
					A = B[u], (A = A.getChildArmature()) && A.animation.gotoAndPlay(F, E);
				}
				return this._lastAnimationState;
			};
			c.prototype.play = function() {
				this._animationDataList && 0 != this._animationDataList.length && (this._lastAnimationState ? this._isPlaying ? this.gotoAndPlay(this._lastAnimationState.name) : this._isPlaying = !0 : this.gotoAndPlay(this._animationDataList[0].name));
			};
			c.prototype.stop = function() {
				this._isPlaying = !1;
			};
			c.prototype.getState = function(h, g) {
				"undefined" === typeof g && (g = 0);
				var s = this._animationLayer.length;
				if (0 == s) {
					return null;
				}
				g >= s && (g = s - 1);
				s = this._animationLayer[g];
				if (!s) {
					return null;
				}
				for (var q = s.length; q--;) {
					if (s[q].name == h) {
						return s[q];
					}
				}
				return null;
			};
			c.prototype.hasAnimation = function(g) {
				for (var d = this._animationDataList.length; d--;) {
					if (this._animationDataList[d].name == g) {
						return !0;
					}
				}
				return !1;
			};
			c.prototype.advanceTime = function(W) {
				if (this._isPlaying) {
					W *= this.timeScale;
					var V = this._armature._boneList.length,
						U, T, S = V,
						R, Q, K, O, P, H, E, B, C, D, z, x, w, u, A, v, y;
					for (V--; S--;) {
						Q = this._armature._boneList[S];
						K = Q.name;
						O = 1;
						x = z = D = C = B = E = H = P = 0;
						for (U = this._animationLayer.length; U--;) {
							w = 0;
							u = this._animationLayer[U];
							R = u.length;
							for (T = 0; T < R; T++) {
								A = u[T], S == V && A.advanceTime(W) ? (this.removeState(A), T--, R--) : (v = A._timelineStates[K]) && v.tweenActive && (A = A._fadeWeight * A.weight * O, y = v.transform, v = v.pivot, P += y.x * A, H += y.y * A, E += y.skewX * A, B += y.skewY * A, C += y.scaleX * A, D += y.scaleY * A, z += v.x * A, x += v.y * A, w += A);
							}
							if (w >= O) {
								break;
							} else {
								O -= w;
							}
						}
						y = Q.tween;
						v = Q._tweenPivot;
						y.x = P;
						y.y = H;
						y.skewX = E;
						y.skewY = B;
						y.scaleX = C;
						y.scaleY = D;
						v.x = z;
						v.y = x;
					}
				}
			};
			c.prototype.addLayer = function(d) {
				d >= this._animationLayer.length && (d = this._animationLayer.length, this._animationLayer[d] = []);
				return d;
			};
			c.prototype.addState = function(d) {
				this._animationLayer[d.layer].push(d);
			};
			c.prototype.removeState = function(g) {
				var d = g.layer,
					h = this._animationLayer[d];
				h.splice(h.indexOf(g), 1);
				a._returnObject(g);
				0 == h.length && d == this._animationLayer.length - 1 && this._animationLayer.length--;
			};
			c.NONE = "none";
			c.SAME_LAYER = "sameLayer";
			c.SAME_GROUP = "sameGroup";
			c.SAME_LAYER_AND_GROUP = "sameLayerAndGroup";
			c.ALL = "all";
			return c;
		}();
		f.Animation = e;
		e.prototype.__class__ = "dragonBones.animation.Animation";
	})(n.animation || (n.animation = {}));
	var o = n.animation;
	(function(G) {
		var D = function() {
			function c() {
				this.skewY = this.skewX = this.y = this.x = 0;
				this.scaleY = this.scaleX = 1;
			}
			c.prototype.getRotation = function() {
				return this.skewX;
			};
			c.prototype.setRotation = function(d) {
				this.skewX = this.skewY = d;
			};
			c.prototype.copy = function(d) {
				this.x = d.x;
				this.y = d.y;
				this.skewX = d.skewX;
				this.skewY = d.skewY;
				this.scaleX = d.scaleX;
				this.scaleY = d.scaleY;
			};
			c.prototype.toString = function() {
				return "[DBTransform (x=" + this.x + " y=" + this.y + " skewX=" + this.skewX + " skewY=" + this.skewY + " scaleX=" + this.scaleX + " scaleY=" + this.scaleY + ")]";
			};
			return c;
		}();
		G.DBTransform = D;
		D.prototype.__class__ = "dragonBones.objects.DBTransform";
		var C = function() {
			function c() {
				this.duration = this.position = 0;
			}
			c.prototype.dispose = function() {};
			return c;
		}();
		G.Frame = C;
		C.prototype.__class__ = "dragonBones.objects.Frame";
		var z = function(d) {
			function c() {
				d.call(this);
				this.displayIndex = this.tweenRotate = this.tweenEasing = 0;
				this.zOrder = NaN;
				this.visible = !0;
				this.global = new D;
				this.transform = new D;
				this.pivot = new m.Point;
			}
			__extends(c, d);
			c.prototype.dispose = function() {
				d.prototype.dispose.call(this);
				this.color = this.pivot = this.transform = this.global = null;
			};
			return c;
		}(C);
		G.TransformFrame = z;
		z.prototype.__class__ = "dragonBones.objects.TransformFrame";
		var y = function() {
			function c() {
				this._frameList = [];
				this.duration = 0;
				this.scale = 1;
			}
			c.prototype.getFrameList = function() {
				return this._frameList;
			};
			c.prototype.dispose = function() {
				for (var d = this._frameList.length; d--;) {
					this._frameList[d].dispose();
				}
				this._frameList.length = 0;
				this._frameList = null;
			};
			c.prototype.addFrame = function(d) {
				if (!d) {
					throw Error();
				}
				if (0 > this._frameList.indexOf(d)) {
					this._frameList[this._frameList.length] = d;
				} else {
					throw Error();
				}
			};
			return c;
		}();
		G.Timeline = y;
		y.prototype.__class__ = "dragonBones.objects.Timeline";
		var v = function(d) {
			function c() {
				d.call(this);
				this.originTransform = new D;
				this.originPivot = new m.Point;
				this.offset = 0;
				this.transformed = !1;
			}
			__extends(c, d);
			c.prototype.dispose = function() {
				this != c.HIDE_TIMELINE && (d.prototype.dispose.call(this), this.originPivot = this.originTransform = null);
			};
			c.HIDE_TIMELINE = new c;
			return c;
		}(y);
		G.TransformTimeline = v;
		v.prototype.__class__ = "dragonBones.objects.TransformTimeline";
		var J = function(d) {
			function c() {
				d.call(this);
				this.loop = this.frameRate = 0;
				this.tweenEasing = NaN;
				this.fadeInTime = 0;
				this._timelines = {};
			}
			__extends(c, d);
			c.prototype.getTimelines = function() {
				return this._timelines;
			};
			c.prototype.dispose = function() {
				d.prototype.dispose.call(this);
				for (var a in this._timelines) {
					this._timelines[a].dispose();
				}
				this._timelines = null;
			};
			c.prototype.getTimeline = function(f) {
				return this._timelines[f];
			};
			c.prototype.addTimeline = function(g, f) {
				if (!g) {
					throw Error();
				}
				this._timelines[f] = g;
			};
			return c;
		}(y);
		G.AnimationData = J;
		J.prototype.__class__ = "dragonBones.objects.AnimationData";
		var b = function() {
			function c() {
				this.transform = new D;
			}
			c.prototype.dispose = function() {
				this.pivot = this.transform = null;
			};
			c.ARMATURE = "armature";
			c.IMAGE = "image";
			return c;
		}();
		G.DisplayData = b;
		b.prototype.__class__ = "dragonBones.objects.DisplayData";
		var e = function() {
			function c() {
				this._displayDataList = [];
				this.zOrder = 0;
				this.blendMode = "normal";
			}
			c.prototype.getDisplayDataList = function() {
				return this._displayDataList;
			};
			c.prototype.dispose = function() {
				for (var d = this._displayDataList.length; d--;) {
					this._displayDataList[d].dispose();
				}
				this._displayDataList.length = 0;
				this._displayDataList = null;
			};
			c.prototype.addDisplayData = function(d) {
				if (!d) {
					throw Error();
				}
				if (0 > this._displayDataList.indexOf(d)) {
					this._displayDataList[this._displayDataList.length] = d;
				} else {
					throw Error();
				}
			};
			c.prototype.getDisplayData = function(f) {
				for (var d = this._displayDataList.length; d--;) {
					if (this._displayDataList[d].name == f) {
						return this._displayDataList[d];
					}
				}
				return null;
			};
			return c;
		}();
		G.SlotData = e;
		e.prototype.__class__ = "dragonBones.objects.SlotData";
		var F = function() {
			function c() {
				this.length = 0;
				this.global = new D;
				this.transform = new D;
				this.scaleMode = 1;
				this.fixedRotation = !1;
			}
			c.prototype.dispose = function() {
				this.transform = this.global = null;
			};
			return c;
		}();
		G.BoneData = F;
		F.prototype.__class__ = "dragonBones.objects.BoneData";
		var I = function() {
			function c() {
				this._slotDataList = [];
			}
			c.prototype.getSlotDataList = function() {
				return this._slotDataList;
			};
			c.prototype.dispose = function() {
				for (var d = this._slotDataList.length; d--;) {
					this._slotDataList[d].dispose();
				}
				this._slotDataList.length = 0;
				this._slotDataList = null;
			};
			c.prototype.getSlotData = function(f) {
				for (var d = this._slotDataList.length; d--;) {
					if (this._slotDataList[d].name == f) {
						return this._slotDataList[d];
					}
				}
				return null;
			};
			c.prototype.addSlotData = function(d) {
				if (!d) {
					throw Error();
				}
				if (0 > this._slotDataList.indexOf(d)) {
					this._slotDataList[this._slotDataList.length] = d;
				} else {
					throw Error();
				}
			};
			return c;
		}();
		G.SkinData = I;
		I.prototype.__class__ = "dragonBones.objects.SkinData";
		var H = function() {
			function c() {
				this._boneDataList = [];
				this._skinDataList = [];
				this._animationDataList = [];
			}
			c.prototype.getBoneDataList = function() {
				return this._boneDataList;
			};
			c.prototype.getSkinDataList = function() {
				return this._skinDataList;
			};
			c.prototype.getAnimationDataList = function() {
				return this._animationDataList;
			};
			c.prototype.dispose = function() {
				for (var d = this._boneDataList.length; d--;) {
					this._boneDataList[d].dispose();
				}
				for (d = this._skinDataList.length; d--;) {
					this._skinDataList[d].dispose();
				}
				for (d = this._animationDataList.length; d--;) {
					this._animationDataList[d].dispose();
				}
				this._boneDataList.length = 0;
				this._skinDataList.length = 0;
				this._animationDataList.length = 0;
				this._animationDataList = this._skinDataList = this._boneDataList = null;
			};
			c.prototype.getBoneData = function(f) {
				for (var d = this._boneDataList.length; d--;) {
					if (this._boneDataList[d].name == f) {
						return this._boneDataList[d];
					}
				}
				return null;
			};
			c.prototype.getSkinData = function(f) {
				if (!f) {
					return this._skinDataList[0];
				}
				for (var d = this._skinDataList.length; d--;) {
					if (this._skinDataList[d].name == f) {
						return this._skinDataList[d];
					}
				}
				return null;
			};
			c.prototype.getAnimationData = function(f) {
				for (var d = this._animationDataList.length; d--;) {
					if (this._animationDataList[d].name == f) {
						return this._animationDataList[d];
					}
				}
				return null;
			};
			c.prototype.addBoneData = function(d) {
				if (!d) {
					throw Error();
				}
				if (0 > this._boneDataList.indexOf(d)) {
					this._boneDataList[this._boneDataList.length] = d;
				} else {
					throw Error();
				}
			};
			c.prototype.addSkinData = function(d) {
				if (!d) {
					throw Error();
				}
				if (0 > this._skinDataList.indexOf(d)) {
					this._skinDataList[this._skinDataList.length] = d;
				} else {
					throw Error();
				}
			};
			c.prototype.addAnimationData = function(d) {
				if (!d) {
					throw Error();
				}
				0 > this._animationDataList.indexOf(d) && (this._animationDataList[this._animationDataList.length] = d);
			};
			c.prototype.sortBoneDataList = function() {
				var g = this._boneDataList.length;
				if (0 != g) {
					for (var f = []; g--;) {
						for (var s = this._boneDataList[g], q = 0, h = s; h && h.parent;) {
							q++, h = this.getBoneData(h.parent);
						}
						f[g] = {
							level: q,
							boneData: s
						};
					}
					f.sort(this.sortBoneData);
					for (g = f.length; g--;) {
						this._boneDataList[g] = f[g].boneData;
					}
				}
			};
			c.prototype.sortBoneData = function(f, d) {
				return f.level > d.level ? 1 : -1;
			};
			return c;
		}();
		G.ArmatureData = H;
		H.prototype.__class__ = "dragonBones.objects.ArmatureData";
		var u = function() {
			function c() {
				this._armatureDataList = [];
				this._subTexturePivots = {};
			}
			c.prototype.getArmatureNames = function() {
				var f = [],
					d;
				for (d in this._armatureDataList) {
					f[f.length] = this._armatureDataList[d].name;
				}
				return f;
			};
			c.prototype.getArmatureDataList = function() {
				return this._armatureDataList;
			};
			c.prototype.dispose = function() {
				for (var d in this._armatureDataList) {
					this._armatureDataList[d].dispose();
				}
				this._armatureDataList.length = 0;
				this._subTexturePivots = this._armatureDataList = null;
			};
			c.prototype.getArmatureData = function(f) {
				for (var d = this._armatureDataList.length; d--;) {
					if (this._armatureDataList[d].name == f) {
						return this._armatureDataList[d];
					}
				}
				return null;
			};
			c.prototype.addArmatureData = function(d) {
				if (!d) {
					throw Error();
				}
				if (0 > this._armatureDataList.indexOf(d)) {
					this._armatureDataList[this._armatureDataList.length] = d;
				} else {
					throw Error();
				}
			};
			c.prototype.removeArmatureData = function(d) {
				d = this._armatureDataList.indexOf(d);
				0 <= d && this._armatureDataList.splice(d, 1);
			};
			c.prototype.removeArmatureDataByName = function(f) {
				for (var d = this._armatureDataList.length; d--;) {
					this._armatureDataList[d].name == f && this._armatureDataList.splice(d, 1);
				}
			};
			c.prototype.getSubTexturePivot = function(d) {
				return this._subTexturePivots[d];
			};
			c.prototype.addSubTexturePivot = function(g, f, q) {
				var h = this._subTexturePivots[q];
				h ? (h.x = g, h.y = f) : this._subTexturePivots[q] = h = new m.Point(g, f);
				return h;
			};
			c.prototype.removeSubTexturePivot = function(d) {
				if (d) {
					delete this._subTexturePivots[d];
				} else {
					for (d in this._subTexturePivots) {
						delete this._subTexturePivots[d];
					}
				}
			};
			return c;
		}();
		G.SkeletonData = u;
		u.prototype.__class__ = "dragonBones.objects.SkeletonData";
		y = function() {
			function c() {}
			c.parseTextureAtlasData = function(s, E) {
				"undefined" === typeof E && (E = 1);
				if (!s) {
					throw Error();
				}
				var B = {};
				B.__name = s[p.ConstValues.A_NAME];
				var A = s[p.ConstValues.SUB_TEXTURE],
					x;
				for (x in A) {
					var q = A[x],
						w = q[p.ConstValues.A_NAME],
						q = new m.Rectangle(Number(q[p.ConstValues.A_X]) / E, Number(q[p.ConstValues.A_Y]) / E, Number(q[p.ConstValues.A_WIDTH]) / E, Number(q[p.ConstValues.A_HEIGHT]) / E);
					B[w] = q;
				}
				return B;
			};
			c.parseSkeletonData = function(q) {
				if (!q) {
					throw Error();
				}
				var h = Number(q[p.ConstValues.A_FRAME_RATE]),
					g = new u;
				g.name = q[p.ConstValues.A_NAME];
				q = q[p.ConstValues.ARMATURE];
				for (var a in q) {
					g.addArmatureData(c.parseArmatureData(q[a], g, h));
				}
				return g;
			};
			c.parseArmatureData = function(x, w, s) {
				var q = new H;
				q.name = x[p.ConstValues.A_NAME];
				var h = x[p.ConstValues.BONE],
					a;
				for (a in h) {
					q.addBoneData(c.parseBoneData(h[a]));
				}
				h = x[p.ConstValues.SKIN];
				for (a in h) {
					q.addSkinData(c.parseSkinData(h[a], w));
				}
				p.DBDataUtil.transformArmatureData(q);
				q.sortBoneDataList();
				x = x[p.ConstValues.ANIMATION];
				for (a in x) {
					q.addAnimationData(c.parseAnimationData(x[a], q, s));
				}
				return q;
			};
			c.parseBoneData = function(g) {
				var f = new F;
				f.name = g[p.ConstValues.A_NAME];
				f.parent = g[p.ConstValues.A_PARENT];
				f.length = Number(g[p.ConstValues.A_LENGTH]) || 0;
				var a = Number(g[p.ConstValues.A_SCALE_MODE]);
				!isNaN(a) && a && (f.scaleMode = a);
				if (a = g[p.ConstValues.A_FIXED_ROTATION]) {
					f.fixedRotation = a;
				}
				c.parseTransform(g[p.ConstValues.TRANSFORM], f.global);
				f.transform.copy(f.global);
				return f;
			};
			c.parseSkinData = function(w, s) {
				var q = new I;
				q.name = w[p.ConstValues.A_NAME];
				var h = w[p.ConstValues.SLOT],
					a;
				for (a in h) {
					q.addSlotData(c.parseSlotData(h[a], s));
				}
				return q;
			};
			c.parseSlotData = function(w, s) {
				var q = new e;
				q.name = w[p.ConstValues.A_NAME];
				q.parent = w[p.ConstValues.A_PARENT];
				q.zOrder = Number(w[p.ConstValues.A_Z_ORDER]);
				q.blendMode = w[p.ConstValues.A_BLENDMODE];
				q.blendMode || (q.blendMode = "normal");
				var h = w[p.ConstValues.DISPLAY],
					a;
				for (a in h) {
					q.addDisplayData(c.parseDisplayData(h[a], s));
				}
				return q;
			};
			c.parseDisplayData = function(g, f) {
				var a = new b;
				a.name = g[p.ConstValues.A_NAME];
				a.type = g[p.ConstValues.A_TYPE];
				a.pivot = f.addSubTexturePivot(0, 0, a.name);
				c.parseTransform(g[p.ConstValues.TRANSFORM], a.transform, a.pivot);
				return a;
			};
			c.parseAnimationData = function(B, A, x) {
				var w = new J;
				w.name = B[p.ConstValues.A_NAME];
				w.frameRate = x;
				w.loop = Number(B[p.ConstValues.A_LOOP]) || 0;
				w.fadeInTime = Number(B[p.ConstValues.A_FADE_IN_TIME]);
				w.duration = Number(B[p.ConstValues.A_DURATION]) / x;
				w.scale = Number(B[p.ConstValues.A_SCALE]);
				if (B.hasOwnProperty(p.ConstValues.A_TWEEN_EASING)) {
					var s = B[p.ConstValues.A_TWEEN_EASING];
					w.tweenEasing = void 0 == s || null == s ? NaN : Number(s);
				} else {
					w.tweenEasing = NaN;
				}
				c.parseTimeline(B, w, c.parseMainFrame, x);
				var a, s = B[p.ConstValues.TIMELINE],
					q;
				for (q in s) {
					a = s[q], B = c.parseTransformTimeline(a, w.duration, x), a = a[p.ConstValues.A_NAME], w.addTimeline(B, a);
				}
				p.DBDataUtil.addHideTimeline(w, A);
				p.DBDataUtil.transformAnimationData(w, A);
				return w;
			};
			c.parseTimeline = function(q, B, A, x) {
				var w = 0,
					s;
				q = q[p.ConstValues.FRAME];
				for (var h in q) {
					s = A(q[h], x), s.position = w, B.addFrame(s), w += s.duration;
				}
				s && (s.duration = B.duration - s.position);
			};
			c.parseTransformTimeline = function(q, h, g) {
				var a = new v;
				a.duration = h;
				c.parseTimeline(q, a, c.parseTransformFrame, g);
				a.scale = Number(q[p.ConstValues.A_SCALE]);
				a.offset = Number(q[p.ConstValues.A_OFFSET]);
				return a;
			};
			c.parseFrame = function(f, h, g) {
				h.duration = Number(f[p.ConstValues.A_DURATION]) / g;
				h.action = f[p.ConstValues.A_ACTION];
				h.event = f[p.ConstValues.A_EVENT];
				h.sound = f[p.ConstValues.A_SOUND];
			};
			c.parseMainFrame = function(a, f) {
				var d = new C;
				c.parseFrame(a, d, f);
				return d;
			};
			c.parseTransformFrame = function(q, h) {
				var f = new z;
				c.parseFrame(q, f, h);
				f.visible = 1 != Number(q[p.ConstValues.A_HIDE]);
				if (q.hasOwnProperty(p.ConstValues.A_TWEEN_EASING)) {
					var a = q[p.ConstValues.A_TWEEN_EASING];
					f.tweenEasing = void 0 == a || null == a ? NaN : Number(a);
				} else {
					f.tweenEasing = 0;
				}
				f.tweenRotate = Number(q[p.ConstValues.A_TWEEN_ROTATE]) || 0;
				f.displayIndex = Number(q[p.ConstValues.A_DISPLAY_INDEX]) || 0;
				f.zOrder = Number(q[p.ConstValues.A_Z_ORDER]) || 0;
				c.parseTransform(q[p.ConstValues.TRANSFORM], f.global, f.pivot);
				f.transform.copy(f.global);
				if (a = q[p.ConstValues.COLOR_TRANSFORM]) {
					f.color = new m.ColorTransform, f.color.alphaOffset = Number(a[p.ConstValues.A_ALPHA_OFFSET]), f.color.redOffset = Number(a[p.ConstValues.A_RED_OFFSET]), f.color.greenOffset = Number(a[p.ConstValues.A_GREEN_OFFSET]), f.color.blueOffset = Number(a[p.ConstValues.A_BLUE_OFFSET]), f.color.alphaMultiplier = 0.01 * Number(a[p.ConstValues.A_ALPHA_MULTIPLIER]), f.color.redMultiplier = 0.01 * Number(a[p.ConstValues.A_RED_MULTIPLIER]), f.color.greenMultiplier = 0.01 * Number(a[p.ConstValues.A_GREEN_MULTIPLIER]), f.color.blueMultiplier = 0.01 * Number(a[p.ConstValues.A_BLUE_MULTIPLIER]);
				}
				return f;
			};
			c.parseTransform = function(f, h, g) {
				"undefined" === typeof g && (g = null);
				f && (h && (h.x = Number(f[p.ConstValues.A_X]), h.y = Number(f[p.ConstValues.A_Y]), h.skewX = Number(f[p.ConstValues.A_SKEW_X]) * p.ConstValues.ANGLE_TO_RADIAN, h.skewY = Number(f[p.ConstValues.A_SKEW_Y]) * p.ConstValues.ANGLE_TO_RADIAN, h.scaleX = Number(f[p.ConstValues.A_SCALE_X]), h.scaleY = Number(f[p.ConstValues.A_SCALE_Y])), g && (g.x = Number(f[p.ConstValues.A_PIVOT_X]), g.y = Number(f[p.ConstValues.A_PIVOT_Y])));
			};
			return c;
		}();
		G.DataParser = y;
		y.prototype.__class__ = "dragonBones.objects.DataParser";
	})(n.objects || (n.objects = {}));
	var r = n.objects;
	(function(a) {
		var d = function(e) {
			function f() {
				e.call(this);
				this._dataDic = {};
				this._textureAtlasDic = {};
				this._textureAtlasLoadingDic = {};
			}
			__extends(f, e);
			f.prototype.getSkeletonData = function(b) {
				return this._dataDic[b];
			};
			f.prototype.addSkeletonData = function(g, c) {
				"undefined" === typeof c && (c = null);
				if (!g) {
					throw Error();
				}
				c = c || g.name;
				if (!c) {
					throw Error("Unnamed data!");
				}
				this._dataDic[c] = g;
			};
			f.prototype.removeSkeletonData = function(b) {
				delete this._dataDic[b];
			};
			f.prototype.getTextureAtlas = function(b) {
				return this._textureAtlasDic[b];
			};
			f.prototype.addTextureAtlas = function(g, c) {
				"undefined" === typeof c && (c = null);
				if (!g) {
					throw Error();
				}
				c = c || g.name;
				if (!c) {
					throw Error("Unnamed data!");
				}
				this._textureAtlasDic[c] = g;
			};
			f.prototype.removeTextureAtlas = function(b) {
				delete this._textureAtlasDic[b];
			};
			f.prototype.dispose = function(g) {
				"undefined" === typeof g && (g = !0);
				if (g) {
					for (var c in this._dataDic) {
						this._dataDic[c].dispose();
					}
					for (c in this._textureAtlasDic) {
						this._textureAtlasDic[c].dispose();
					}
				}
				this._currentTextureAtlasName = this._currentDataName = this._textureAtlasLoadingDic = this._textureAtlasDic = this._dataDic = null;
			};
			f.prototype.buildArmature = function(D, C, B, A, z) {
				if (B) {
					var y = this._dataDic[B];
					if (y) {
						var v = y.getArmatureData(D);
					}
				} else {
					for (B in this._dataDic) {
						if (y = this._dataDic[B], v = y.getArmatureData(D)) {
							break;
						}
					}
				} if (!v) {
					return null;
				}
				this._currentDataName = B;
				this._currentTextureAtlasName = A || B;
				A = this._generateArmature();
				A.name = D;
				var x, w, u = v.getBoneDataList(),
					E;
				for (E in u) {
					w = u[E], x = new i, x.name = w.name, x.fixedRotation = w.fixedRotation, x.scaleMode = w.scaleMode, x.origin.copy(w.transform), v.getBoneData(w.parent) ? A.addChild(x, w.parent) : A.addChild(x, null);
				}
				if (C && C != D) {
					var q = y.getArmatureData(C);
					if (!q) {
						for (B in this._dataDic) {
							if (y = this._dataDic[B], q = y.getArmatureData(C)) {
								break;
							}
						}
					}
				}
				q ? A.animation.setAnimationDataList(q.getAnimationDataList()) : A.animation.setAnimationDataList(v.getAnimationDataList());
				x = v.getSkinData(z);
				if (!x) {
					throw Error();
				}
				D = [];
				B = x.getSlotDataList();
				for (E in B) {
					if (y = B[E], x = A.getBone(y.parent)) {
						z = y.getDisplayDataList();
						C = this._generateSlot();
						C.name = y.name;
						C._blendMode = y.blendMode;
						C._originZOrder = y.zOrder;
						C._dislayDataList = z;
						D.length = 0;
						for (y = z.length; y--;) {
							switch (v = z[y], v.type) {
								case r.DisplayData.ARMATURE:
									(v = this.buildArmature(v.name, null, this._currentDataName, this._currentTextureAtlasName, null)) && (D[y] = v);
									break;
								default:
									D[y] = this._generateDisplay(this._textureAtlasDic[this._currentTextureAtlasName], v.name, v.pivot.x, v.pivot.y);
							}
						}
						C.setDisplayList(D);
						C._changeDisplay(0);
						x.addChild(C);
					}
				}
				A._slotsZOrderChanged = !0;
				A.advanceTime(0);
				return A;
			};
			f.prototype.getTextureDisplay = function(h, g, u, s) {
				if (g) {
					var q = this._textureAtlasDic[g];
				}
				if (!q && !g) {
					for (g in this._textureAtlasDic) {
						q = this._textureAtlasDic[g];
						if (q.getRegion(h)) {
							break;
						}
						q = null;
					}
				}
				if (q) {
					if (isNaN(u) || isNaN(s)) {
						if (g = this._dataDic[g]) {
							if (g = g.getSubTexturePivot(h)) {
								u = g.x, s = g.y;
							}
						}
					}
					return this._generateDisplay(q, h, u, s);
				}
				return null;
			};
			f.prototype._generateArmature = function() {
				return null;
			};
			f.prototype._generateSlot = function() {
				return null;
			};
			f.prototype._generateDisplay = function(h, g, s, q) {
				return null;
			};
			return f;
		}(l.EventDispatcher);
		a.BaseFactory = d;
		d.prototype.__class__ = "dragonBones.factorys.BaseFactory";
	})(n.factorys || (n.factorys = {}));
	(function(a) {
		var e = function() {
			function b() {}
			b.ANGLE_TO_RADIAN = Math.PI / 180;
			b.DRAGON_BONES = "dragonBones";
			b.ARMATURE = "armature";
			b.SKIN = "skin";
			b.BONE = "bone";
			b.SLOT = "slot";
			b.DISPLAY = "display";
			b.ANIMATION = "animation";
			b.TIMELINE = "timeline";
			b.FRAME = "frame";
			b.TRANSFORM = "transform";
			b.COLOR_TRANSFORM = "colorTransform";
			b.TEXTURE_ATLAS = "TextureAtlas";
			b.SUB_TEXTURE = "SubTexture";
			b.A_VERSION = "version";
			b.A_IMAGE_PATH = "imagePath";
			b.A_FRAME_RATE = "frameRate";
			b.A_NAME = "name";
			b.A_PARENT = "parent";
			b.A_LENGTH = "length";
			b.A_TYPE = "type";
			b.A_FADE_IN_TIME = "fadeInTime";
			b.A_DURATION = "duration";
			b.A_SCALE = "scale";
			b.A_OFFSET = "offset";
			b.A_LOOP = "loop";
			b.A_EVENT = "event";
			b.A_SOUND = "sound";
			b.A_ACTION = "action";
			b.A_HIDE = "hide";
			b.A_TWEEN_EASING = "tweenEasing";
			b.A_TWEEN_ROTATE = "tweenRotate";
			b.A_DISPLAY_INDEX = "displayIndex";
			b.A_Z_ORDER = "z";
			b.A_BLENDMODE = "blendMode";
			b.A_WIDTH = "width";
			b.A_HEIGHT = "height";
			b.A_SCALE_MODE = "scaleMode";
			b.A_FIXED_ROTATION = "fixedRotation";
			b.A_X = "x";
			b.A_Y = "y";
			b.A_SKEW_X = "skX";
			b.A_SKEW_Y = "skY";
			b.A_SCALE_X = "scX";
			b.A_SCALE_Y = "scY";
			b.A_PIVOT_X = "pX";
			b.A_PIVOT_Y = "pY";
			b.A_ALPHA_OFFSET = "aO";
			b.A_RED_OFFSET = "rO";
			b.A_GREEN_OFFSET = "gO";
			b.A_BLUE_OFFSET = "bO";
			b.A_ALPHA_MULTIPLIER = "aM";
			b.A_RED_MULTIPLIER = "rM";
			b.A_GREEN_MULTIPLIER = "gM";
			b.A_BLUE_MULTIPLIER = "bM";
			return b;
		}();
		a.ConstValues = e;
		e.prototype.__class__ = "dragonBones.utils.ConstValues";
		var c = function() {
			function b() {}
			b.transformPointWithParent = function(g, u) {
				var s = b._helpMatrix;
				b.transformToMatrix(u, s);
				s.invert();
				var q = g.x,
					h = g.y;
				g.x = s.a * q + s.c * h + s.tx;
				g.y = s.d * h + s.b * q + s.ty;
				g.skewX = b.formatRadian(g.skewX - u.skewX);
				g.skewY = b.formatRadian(g.skewY - u.skewY);
			};
			b.transformToMatrix = function(f, d) {
				d.a = f.scaleX * Math.cos(f.skewY);
				d.b = f.scaleX * Math.sin(f.skewY);
				d.c = -f.scaleY * Math.sin(f.skewX);
				d.d = f.scaleY * Math.cos(f.skewX);
				d.tx = f.x;
				d.ty = f.y;
			};
			b.formatRadian = function(d) {
				d %= b.DOUBLE_PI;
				d > Math.PI && (d -= b.DOUBLE_PI);
				d < -Math.PI && (d += b.DOUBLE_PI);
				return d;
			};
			b.DOUBLE_PI = 2 * Math.PI;
			b._helpMatrix = new m.Matrix;
			return b;
		}();
		a.TransformUtil = c;
		c.prototype.__class__ = "dragonBones.utils.TransformUtil";
		e = function() {
			function d() {}
			d.transformArmatureData = function(g) {
				for (var f = g.getBoneDataList(), s = f.length, q, h; s--;) {
					if (q = f[s], q.parent && (h = g.getBoneData(q.parent))) {
						q.transform.copy(q.global), c.transformPointWithParent(q.transform, h.global);
					}
				}
			};
			d.transformArmatureDataAnimations = function(b) {
				for (var g = b.getAnimationDataList(), f = g.length; f--;) {
					d.transformAnimationData(g[f], b);
				}
			};
			d.transformAnimationData = function(R, Q) {
				for (var P = Q.getSkinData(null), O = Q.getBoneDataList(), P = P.getSlotDataList(), N = O.length, M, L, A, I, F, B, f, E, y, w; N--;) {
					if (M = O[N], L = R.getTimeline(M.name)) {
						A = null;
						for (var b in P) {
							if (A = P[b], A.parent == M.name) {
								break;
							}
						}
						I = M.parent ? R.getTimeline(M.parent) : null;
						F = L.getFrameList();
						E = f = B = null;
						w = F.length;
						for (var x = 0; x < w; x++) {
							y = F[x];
							I ? (d._helpTransform1.copy(y.global), d.getTimelineTransform(I, y.position, d._helpTransform2), c.transformPointWithParent(d._helpTransform1, d._helpTransform2), y.transform.copy(d._helpTransform1)) : y.transform.copy(y.global);
							y.transform.x -= M.transform.x;
							y.transform.y -= M.transform.y;
							y.transform.skewX -= M.transform.skewX;
							y.transform.skewY -= M.transform.skewY;
							y.transform.scaleX -= M.transform.scaleX;
							y.transform.scaleY -= M.transform.scaleY;
							!L.transformed && A && (y.zOrder -= A.zOrder);
							B || (B = L.originTransform, B.copy(y.transform), B.skewX = c.formatRadian(B.skewX), B.skewY = c.formatRadian(B.skewY), f = L.originPivot, f.x = y.pivot.x, f.y = y.pivot.y);
							y.transform.x -= B.x;
							y.transform.y -= B.y;
							y.transform.skewX = c.formatRadian(y.transform.skewX - B.skewX);
							y.transform.skewY = c.formatRadian(y.transform.skewY - B.skewY);
							y.transform.scaleX -= B.scaleX;
							y.transform.scaleY -= B.scaleY;
							L.transformed || (y.pivot.x -= f.x, y.pivot.y -= f.y);
							if (E) {
								var u = y.transform.skewX - E.transform.skewX;
								E.tweenRotate ? 0 < E.tweenRotate ? (0 > u && (y.transform.skewX += 2 * Math.PI, y.transform.skewY += 2 * Math.PI), 1 < E.tweenRotate && (y.transform.skewX += 2 * Math.PI * (E.tweenRotate - 1), y.transform.skewY += 2 * Math.PI * (E.tweenRotate - 1))) : (0 < u && (y.transform.skewX -= 2 * Math.PI, y.transform.skewY -= 2 * Math.PI), 1 > E.tweenRotate && (y.transform.skewX += 2 * Math.PI * (E.tweenRotate + 1), y.transform.skewY += 2 * Math.PI * (E.tweenRotate + 1))) : (y.transform.skewX = E.transform.skewX + c.formatRadian(y.transform.skewX - E.transform.skewX), y.transform.skewY = E.transform.skewY + c.formatRadian(y.transform.skewY - E.transform.skewY));
							}
							E = y;
						}
						L.transformed = !0;
					}
				}
			};
			d.getTimelineTransform = function(q, f, w) {
				for (var v = q.getFrameList(), u = v.length, s; u--;) {
					if (q = v[u], q.position <= f && q.position + q.duration > f) {
						s = q.tweenEasing;
						u == v.length - 1 || isNaN(s) || f == q.position ? w.copy(q.global) : (f = (f - q.position) / q.duration, s && (f = o.TimelineState.getEaseValue(f, s)), v = v[u + 1], w.x = q.global.x + (v.global.x - q.global.x) * f, w.y = q.global.y + (v.global.y - q.global.y) * f, w.skewX = c.formatRadian(q.global.skewX + (v.global.skewX - q.global.skewX) * f), w.skewY = c.formatRadian(q.global.skewY + (v.global.skewY - q.global.skewY) * f), w.scaleX = q.global.scaleX + (v.global.scaleX - q.global.scaleX) * f, w.scaleY = q.global.scaleY + (v.global.scaleY - q.global.scaleY) * f);
						break;
					}
				}
			};
			d.addHideTimeline = function(g, u) {
				for (var s = u.getBoneDataList(), q = s.length, h; q--;) {
					h = s[q], h = h.name, g.getTimeline(h) || g.addTimeline(r.TransformTimeline.HIDE_TIMELINE, h);
				}
			};
			d._helpTransform1 = new r.DBTransform;
			d._helpTransform2 = new r.DBTransform;
			return d;
		}();
		a.DBDataUtil = e;
		e.prototype.__class__ = "dragonBones.utils.DBDataUtil";
	})(n.utils || (n.utils = {}));
	var p = n.utils,
		k = function() {
			function a() {
				this.global = new r.DBTransform;
				this.origin = new r.DBTransform;
				this.offset = new r.DBTransform;
				this.tween = new r.DBTransform;
				this.tween.scaleX = this.tween.scaleY = 0;
				this._globalTransformMatrix = new m.Matrix;
				this._visible = !0;
				this._isDisplayOnStage = this._isColorChanged = !1;
				this._scaleType = 0;
				this.fixedRotation = !1;
			}
			a.prototype.getVisible = function() {
				return this._visible;
			};
			a.prototype.setVisible = function(b) {
				this._visible = b;
			};
			a.prototype._setParent = function(b) {
				this.parent = b;
			};
			a.prototype._setArmature = function(b) {
				this.armature && this.armature._removeDBObject(this);
				(this.armature = b) && this.armature._addDBObject(this);
			};
			a.prototype.dispose = function() {
				this._globalTransformMatrix = this.tween = this.offset = this.origin = this.global = this.armature = this.parent = null;
			};
			a.prototype._update = function() {
				this.global.scaleX = (this.origin.scaleX + this.tween.scaleX) * this.offset.scaleX;
				this.global.scaleY = (this.origin.scaleY + this.tween.scaleY) * this.offset.scaleY;
				if (this.parent) {
					var e = this.origin.x + this.offset.x + this.tween.x,
						d = this.origin.y + this.offset.y + this.tween.y,
						f = this.parent._globalTransformMatrix;
					this._globalTransformMatrix.tx = this.global.x = f.a * e + f.c * d + f.tx;
					this._globalTransformMatrix.ty = this.global.y = f.d * d + f.b * e + f.ty;
					this.fixedRotation ? (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY) : (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX + this.parent.global.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY + this.parent.global.skewY);
					this.parent.scaleMode >= this._scaleType && (this.global.scaleX *= this.parent.global.scaleX, this.global.scaleY *= this.parent.global.scaleY);
				} else {
					this._globalTransformMatrix.tx = this.global.x = this.origin.x + this.offset.x + this.tween.x, this._globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this.tween.y, this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
				}
				this._globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY);
				this._globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY);
				this._globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX);
				this._globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX);
			};
			return a;
		}();
	n.DBObject = k;
	k.prototype.__class__ = "dragonBones.DBObject";
	var t = function(d) {
		function c(a) {
			d.call(this);
			this._displayBridge = a;
			this._displayList = [];
			this._displayIndex = -1;
			this._scaleType = 1;
			this._offsetZOrder = this._tweenZorder = this._originZOrder = 0;
			this._isHideDisplay = this._isDisplayOnStage = !1;
			this._blendMode = "normal";
			this._displayBridge.updateBlendMode(this._blendMode);
		}
		__extends(c, d);
		c.prototype.getZOrder = function() {
			return this._originZOrder + this._tweenZorder + this._offsetZOrder;
		};
		c.prototype.setZOrder = function(b) {
			this.getZOrder() != b && (this._offsetZOrder = b - this._originZOrder - this._tweenZorder, this.armature && (this.armature._slotsZOrderChanged = !0));
		};
		c.prototype.getDisplay = function() {
			var b = this._displayList[this._displayIndex];
			return b instanceof j ? b.getDisplay() : b;
		};
		c.prototype.setDisplay = function(b) {
			this._displayList[this._displayIndex] = b;
			this._setDisplay(b);
		};
		c.prototype.getBlendMode = function() {
			return this._blendMode;
		};
		c.prototype.setBlendMode = function(b) {
			this._blendMode != b && (this._blendMode = b, this._displayBridge.getDisplay() && this._displayBridge.updateBlendMode(this._blendMode));
		};
		c.prototype.getChildArmature = function() {
			var b = this._displayList[this._displayIndex];
			return b instanceof j ? b : null;
		};
		c.prototype.setChildArmature = function(b) {
			(this._displayList[this._displayIndex] = b) && this._setDisplay(b.getDisplay());
		};
		c.prototype.getDisplayList = function() {
			return this._displayList;
		};
		c.prototype.setDisplayList = function(f) {
			if (!f) {
				throw Error();
			}
			for (var e = this._displayList.length = f.length; e--;) {
				this._displayList[e] = f[e];
			}
			0 <= this._displayIndex && (f = this._displayIndex, this._displayIndex = -1, this._changeDisplay(f));
		};
		c.prototype._setDisplay = function(b) {
			this._displayBridge.getDisplay() ? this._displayBridge.setDisplay(b) : (this._displayBridge.setDisplay(b), this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0));
			this.updateChildArmatureAnimation();
			b && this._displayBridge.updateBlendMode(this._blendMode);
			!this._isHideDisplay && this._displayBridge.getDisplay() ? this._isDisplayOnStage = !0 : this._isDisplayOnStage = !1;
		};
		c.prototype._changeDisplay = function(f) {
			if (0 > f) {
				this._isHideDisplay || (this._isHideDisplay = !0, this._displayBridge.removeDisplay(), this.updateChildArmatureAnimation());
			} else {
				if (this._isHideDisplay) {
					this._isHideDisplay = !1;
					var e = !0;
					this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0);
				}
				var g = this._displayList.length;
				f >= g && 0 < g && (f = g - 1);
				this._displayIndex != f ? (this._displayIndex = f, f = this._displayList[this._displayIndex], f instanceof j ? this._setDisplay(f.getDisplay()) : this._setDisplay(f), this._dislayDataList && this._displayIndex <= this._dislayDataList.length && this.origin.copy(this._dislayDataList[this._displayIndex].transform)) : e && this.updateChildArmatureAnimation();
			}!this._isHideDisplay && this._displayBridge.getDisplay() ? this._isDisplayOnStage = !0 : this._isDisplayOnStage = !1;
		};
		c.prototype.setVisible = function(b) {
			b != this._visible && (this._visible = b, this._updateVisible(this._visible));
		};
		c.prototype._setArmature = function(a) {
			d.prototype._setArmature.call(this, a);
			this.armature ? (this.armature._slotsZOrderChanged = !0, this._displayBridge.addDisplay(this.armature.getDisplay(), -1)) : this._displayBridge.removeDisplay();
		};
		c.prototype.dispose = function() {
			this._displayBridge && (d.prototype.dispose.call(this), this._displayBridge.dispose(), this._displayList.length = 0, this._dislayDataList = this._displayList = this._displayBridge = null);
		};
		c.prototype._update = function() {
			d.prototype._update.call(this);
			if (this._isDisplayOnStage) {
				var a = this.parent._tweenPivot.x,
					f = this.parent._tweenPivot.y;
				if (a || f) {
					var e = this.parent._globalTransformMatrix;
					this._globalTransformMatrix.tx += e.a * a + e.c * f;
					this._globalTransformMatrix.ty += e.b * a + e.d * f;
				}
				this._displayBridge.updateTransform(this._globalTransformMatrix, this.global);
			}
		};
		c.prototype._updateVisible = function(b) {
			this._displayBridge.setVisible(this.parent.getVisible() && this._visible && b);
		};
		c.prototype.updateChildArmatureAnimation = function() {
			var f = this.getChildArmature();
			if (f) {
				if (this._isHideDisplay) {
					f.animation.stop(), f.animation._lastAnimationState = null;
				} else {
					var e = this.armature ? this.armature.animation.getLastAnimationName() : null;
					e && f.animation.hasAnimation(e) ? f.animation.gotoAndPlay(e) : f.animation.play();
				}
			}
		};
		return c;
	}(k);
	n.Slot = t;
	t.prototype.__class__ = "dragonBones.Slot";
	var i = function(d) {
		function c() {
			d.call(this);
			this._children = [];
			this._scaleType = 2;
			this._tweenPivot = new m.Point;
			this.scaleMode = 1;
		}
		__extends(c, d);
		c.prototype.setVisible = function(f) {
			if (this._visible != f) {
				for (this._visible = f, f = this._children.length; f--;) {
					var e = this._children[f];
					e instanceof t && e._updateVisible(this._visible);
				}
			}
		};
		c.prototype._setArmature = function(a) {
			d.prototype._setArmature.call(this, a);
			for (a = this._children.length; a--;) {
				this._children[a]._setArmature(this.armature);
			}
		};
		c.prototype.dispose = function() {
			if (this._children) {
				d.prototype.dispose.call(this);
				for (var a = this._children.length; a--;) {
					this._children[a].dispose();
				}
				this._children.length = 0;
				this.slot = this._tweenPivot = this._children = null;
			}
		};
		c.prototype.contains = function(b) {
			if (!b) {
				throw Error();
			}
			if (b == this) {
				return !1;
			}
			for (; b != this && null != b;) {
				b = b.parent;
			}
			return b == this;
		};
		c.prototype.addChild = function(b) {
			if (!b) {
				throw Error();
			}
			if (b == this || b instanceof c && b.contains(this)) {
				throw Error("An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
			}
			b.parent && b.parent.removeChild(b);
			this._children[this._children.length] = b;
			b._setParent(this);
			b._setArmature(this.armature);
			!this.slot && b instanceof t && (this.slot = b);
		};
		c.prototype.removeChild = function(f) {
			if (!f) {
				throw Error();
			}
			var e = this._children.indexOf(f);
			if (0 <= e) {
				this._children.splice(e, 1), f._setParent(null), f._setArmature(null), f == this.slot && (this.slot = null);
			} else {
				throw Error();
			}
		};
		c.prototype.getSlots = function() {
			for (var f = [], e = this._children.length; e--;) {
				this._children[e] instanceof t && f.unshift(this._children[e]);
			}
			return f;
		};
		c.prototype._arriveAtFrame = function(b, s, q, h) {
			if (b) {
				if (s = q.getMixingTransform(this.name), !q.displayControl || 2 != s && -1 != s || this.displayController && this.displayController != q.name || !this.slot || (s = b.displayIndex, 0 <= s && !isNaN(b.zOrder) && b.zOrder != this.slot._tweenZorder && (this.slot._tweenZorder = b.zOrder, this.armature._slotsZOrderChanged = !0), this.slot._changeDisplay(s), this.slot._updateVisible(b.visible)), b.event && this.armature.hasEventListener(l.FrameEvent.BONE_FRAME_EVENT) && (s = new l.FrameEvent(l.FrameEvent.BONE_FRAME_EVENT), s.bone = this, s.animationState = q, s.frameLabel = b.event, this.armature._eventList.push(s)), b.sound && c._soundManager.hasEventListener(l.SoundEvent.SOUND) && (s = new l.SoundEvent(l.SoundEvent.SOUND), s.armature = this.armature, s.animationState = q, s.sound = b.sound, c._soundManager.dispatchEvent(s)), b.action) {
					for (var f in this._children) {
						this._children[f] instanceof t && (q = this._children[f].getChildArmature()) && q.animation.gotoAndPlay(b.action);
					}
				}
			} else {
				this.slot && this.slot._changeDisplay(-1);
			}
		};
		c.prototype._updateColor = function(A, z, y, x, w, v, u, s, q) {
			(q || this._isColorChanged) && this.slot._displayBridge.updateColor(A, z, y, x, w, v, u, s);
			this._isColorChanged = q;
		};
		c._soundManager = l.SoundEventManager.getInstance();
		return c;
	}(k);
	n.Bone = i;
	i.prototype.__class__ = "dragonBones.Bone";
	var j = function(d) {
		function c(a) {
			d.call(this);
			this.animation = new o.Animation(this);
			this._display = a;
			this._slotsZOrderChanged = !1;
			this._slotList = [];
			this._boneList = [];
			this._eventList = [];
		}
		__extends(c, d);
		c.prototype.getDisplay = function() {
			return this._display;
		};
		c.prototype.dispose = function() {
			if (this.animation) {
				this.animation.dispose();
				for (var b = this._slotList.length; b--;) {
					this._slotList[b].dispose();
				}
				for (b = this._boneList.length; b--;) {
					this._boneList[b].dispose();
				}
				this._slotList.length = 0;
				this._boneList.length = 0;
				this._eventList.length = 0;
				this.animation = this._display = this._eventList = this._boneList = this._slotList = null;
			}
		};
		c.prototype.advanceTime = function(f) {
			this.animation.advanceTime(f);
			f *= this.animation.timeScale;
			for (var e = this._boneList.length; e--;) {
				this._boneList[e]._update();
			}
			for (var e = this._slotList.length, g; e--;) {
				g = this._slotList[e], g._update(), g._isDisplayOnStage && (g = g.getChildArmature()) && g.advanceTime(f);
			}
			this._slotsZOrderChanged && (this.updateSlotsZOrder(), this.hasEventListener(l.ArmatureEvent.Z_ORDER_UPDATED) && this.dispatchEvent(new l.ArmatureEvent(l.ArmatureEvent.Z_ORDER_UPDATED)));
			if (this._eventList.length) {
				f = this._eventList.length;
				for (e = 0; e < f; e++) {
					this.dispatchEvent(this._eventList[e]);
				}
				this._eventList.length = 0;
			}
		};
		c.prototype.getSlots = function(b) {
			"undefined" === typeof b && (b = !0);
			return b ? this._slotList.concat() : this._slotList;
		};
		c.prototype.getBones = function(b) {
			"undefined" === typeof b && (b = !0);
			return b ? this._boneList.concat() : this._boneList;
		};
		c.prototype.getSlot = function(f) {
			for (var e = this._slotList.length; e--;) {
				if (this._slotList[e].name == f) {
					return this._slotList[e];
				}
			}
			return null;
		};
		c.prototype.getSlotByDisplay = function(f) {
			if (f) {
				for (var e = this._slotList.length; e--;) {
					if (this._slotList[e].getDisplay() == f) {
						return this._slotList[e];
					}
				}
			}
			return null;
		};
		c.prototype.removeSlot = function(b) {
			if (!b) {
				throw Error();
			}
			if (0 <= this._slotList.indexOf(b)) {
				b.parent.removeChild(b);
			} else {
				throw Error();
			}
		};
		c.prototype.removeSlotByName = function(b) {
			b && (b = this.getSlot(b)) && this.removeSlot(b);
		};
		c.prototype.getBone = function(f) {
			for (var e = this._boneList.length; e--;) {
				if (this._boneList[e].name == f) {
					return this._boneList[e];
				}
			}
			return null;
		};
		c.prototype.getBoneByDisplay = function(b) {
			return (b = this.getSlotByDisplay(b)) ? b.parent : null;
		};
		c.prototype.removeBone = function(b) {
			if (!b) {
				throw Error();
			}
			if (0 <= this._boneList.indexOf(b)) {
				b.parent ? b.parent.removeChild(b) : b._setArmature(null);
			} else {
				throw Error();
			}
		};
		c.prototype.removeBoneByName = function(b) {
			b && (b = this.getBone(b)) && this.removeBone(b);
		};
		c.prototype.addChild = function(f, e) {
			if (!f) {
				throw Error();
			}
			if (e) {
				var g = this.getBone(e);
				if (g) {
					g.addChild(f);
				} else {
					throw Error();
				}
			} else {
				f.parent && f.parent.removeChild(f), f._setArmature(this);
			}
		};
		c.prototype.updateSlotsZOrder = function() {
			this._slotList.sort(this.sortSlot);
			for (var f = this._slotList.length, e; f--;) {
				e = this._slotList[f], e._isDisplayOnStage && e._displayBridge.addDisplay(this._display, -1);
			}
			this._slotsZOrderChanged = !1;
		};
		c.prototype._addDBObject = function(b) {
			b instanceof t ? 0 > this._slotList.indexOf(b) && (this._slotList[this._slotList.length] = b) : b instanceof i && 0 > this._boneList.indexOf(b) && (this._boneList[this._boneList.length] = b, this._sortBoneList());
		};
		c.prototype._removeDBObject = function(b) {
			b instanceof t ? (b = this._slotList.indexOf(b), 0 <= b && this._slotList.splice(b, 1)) : b instanceof i && (b = this._boneList.indexOf(b), 0 <= b && this._boneList.splice(b, 1));
		};
		c.prototype._sortBoneList = function() {
			var g = this._boneList.length;
			if (0 != g) {
				for (var f = [], s, q, h; g--;) {
					s = 0;
					for (h = q = this._boneList[g]; h;) {
						s++, h = h.parent;
					}
					f[g] = {
						level: s,
						bone: q
					};
				}
				f.sort(this.sortBone);
				for (g = f.length; g--;) {
					this._boneList[g] = f[g].bone;
				}
			}
		};
		c.prototype._arriveAtFrame = function(b, h, g, f) {
			b.event && this.hasEventListener(l.FrameEvent.ANIMATION_FRAME_EVENT) && (h = new l.FrameEvent(l.FrameEvent.ANIMATION_FRAME_EVENT), h.animationState = g, h.frameLabel = b.event, this._eventList.push(h));
			b.sound && c._soundManager.hasEventListener(l.SoundEvent.SOUND) && (h = new l.SoundEvent(l.SoundEvent.SOUND), h.armature = this, h.animationState = g, h.sound = b.sound, c._soundManager.dispatchEvent(h));
			b.action && g.isPlaying && this.animation.gotoAndPlay(b.action);
		};
		c.prototype.sortSlot = function(f, e) {
			return f.getZOrder() < e.getZOrder() ? 1 : -1;
		};
		c.prototype.sortBone = function(f, e) {
			return f.level < e.level ? 1 : -1;
		};
		c._soundManager = l.SoundEventManager.getInstance();
		return c;
	}(l.EventDispatcher);
	n.Armature = j;
	j.prototype.__class__ = "dragonBones.Armature";
})(dragonBones || (dragonBones = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	(function(e) {
		var f = function() {
			function c() {}
			c.prototype.getVisible = function() {
				return this._display ? this._display.visible : !1;
			};
			c.prototype.setVisible = function(d) {
				this._display && (this._display.visible = d);
			};
			c.prototype.getDisplay = function() {
				return this._display;
			};
			c.prototype.setDisplay = function(g) {
				if (this._display != g) {
					if (this._display) {
						var i = this._display.parent;
						if (i) {
							var h = i.getChildIndex(this._display);
						}
						this.removeDisplay();
					}
					this._display = g;
					this.addDisplay(i, h);
				}
			};
			c.prototype.dispose = function() {
				this._display = null;
			};
			c.prototype.updateTransform = function(d, g) {
				this._display._x = d.tx;
				this._display._y = d.ty;
				this._display._skewX = g.skewX * c.RADIAN_TO_ANGLE;
				this._display._skewY = g.skewY * c.RADIAN_TO_ANGLE;
				this._display._scaleX = g.scaleX;
				this._display._scaleY = g.scaleY;
				this._display._setSizeDirty();
			};
			c.prototype.updateColor = function(i, q, p, o, n, j, g, h) {
				this._display && (this._display._alpha = n);
			};
			c.prototype.updateBlendMode = function(d) {
				this._display && d && (this._display.blendMode = d);
			};
			c.prototype.addDisplay = function(d, g) {
				d && this._display && (this._display._parent && this._display._parent.removeChild(this._display), 0 > g ? d.addChild(this._display) : d.addChildAt(this._display, Math.min(g, d.numChildren)));
			};
			c.prototype.removeDisplay = function() {
				this._display && this._display._parent && this._display._parent.removeChild(this._display);
			};
			c.RADIAN_TO_ANGLE = 180 / Math.PI;
			return c;
		}();
		e.DragonBonesEgretBridge = f;
		f.prototype.__class__ = "dragonBones.display.DragonBonesEgretBridge";
	})(b.display || (b.display = {}));
	var a = b.display;
	(function(d) {
		var f = function() {
			function c(g, i, h) {
				"undefined" === typeof h && (h = 1);
				this.texture = g;
				this.textureAtlasRawData = i;
				this._textureData = {};
				this.scale = h;
				this.name = i[b.utils.ConstValues.A_NAME];
				this.parseData(i);
				this.spriteSheet = new egret.SpriteSheet(g);
			}
			c.prototype.getTexture = function(e) {
				var g = this.spriteSheet.getTexture(e);
				g || (g = this._textureData[e], g = this.spriteSheet.createTexture(e, g.x, g.y, g.width, g.height));
				return g;
			};
			c.prototype.dispose = function() {
				this.texture = null;
			};
			c.prototype.getRegion = function(e) {
				throw Error("error");
			};
			c.prototype.parseData = function(g) {
				for (var j = g.SubTexture.length, i = 0; i < j; i++) {
					var h = g.SubTexture[i];
					this._textureData[h.name] = h;
				}
			};
			return c;
		}();
		d.EgretTextureAtlas = f;
		f.prototype.__class__ = "dragonBones.textures.EgretTextureAtlas";
	})(b.textures || (b.textures = {}));
	(function(d) {
		var e = function(f) {
			function c() {
				f.call(this);
			}
			__extends(c, f);
			c.prototype._generateArmature = function() {
				return new b.Armature(new egret.DisplayObjectContainer);
			};
			c.prototype._generateSlot = function() {
				return new b.Slot(new a.DragonBonesEgretBridge);
			};
			c.prototype._generateDisplay = function(h, g, k, j) {
				var i = new egret.Bitmap;
				i.texture = h.getTexture(g);
				i.anchorOffsetX = k;
				i.anchorOffsetY = j;
				return i;
			};
			return c;
		}(d.BaseFactory);
		d.EgretFactory = e;
		e.prototype.__class__ = "dragonBones.factorys.EgretFactory";
	})(b.factorys || (b.factorys = {}));
})(dragonBones || (dragonBones = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.TRACE_RENDER_LOOP = function(f) {
			"undefined" === typeof f && (f = 0);
			var e = b.Ticker.getInstance(),
				d = b.MainContext.instance;
			switch (f) {
				case 0:
					e.unregister(d.renderLoop, d);
					break;
				case 1:
					d.renderLoop();
					break;
				case 2:
					e.register(d.renderLoop, d);
			}
		};
		c.DRAW_IMAGE = !0;
		c.ADD_EVENT_LISTENER = !0;
		c.SCALE_BITMAP_SET_SCALE_GRID = !0;
		return c;
	}();
	b.DEBUG = a;
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.isNumber = function(d) {
			return "number" === typeof d && !isNaN(d);
		};
		return c;
	}();
	b.NumberUtils = a;
	a.prototype.__class__ = "egret.NumberUtils";
})(egret || (egret = {}));
var __extends = this.__extends || function(g, b) {
		function a() {
			this.constructor = g;
		}
		for (var h in b) {
			b.hasOwnProperty(h) && (g[h] = b[h]);
		}
		a.prototype = b.prototype;
		g.prototype = new a;
	},
	RES;
(function(b) {
	var a = function(e) {
		function f(g, d, h) {
			"undefined" === typeof d && (d = !1);
			"undefined" === typeof h && (h = !1);
			e.call(this, g, d, h);
			this.itemsTotal = this.itemsLoaded = 0;
		}
		__extends(f, e);
		f.dispatchResourceEvent = function(g, c, n, m, l, j) {
			"undefined" === typeof n && (n = "");
			"undefined" === typeof m && (m = null);
			"undefined" === typeof l && (l = 0);
			"undefined" === typeof j && (j = 0);
			var i = egret.Event._getPropertyData(f);
			i.groupName = n;
			i.resItem = m;
			i.itemsLoaded = l;
			i.itemsTotal = j;
			egret.Event._dispatchByTarget(f, g, c, i);
		};
		f.ITEM_LOAD_ERROR = "itemLoadError";
		f.CONFIG_COMPLETE = "configComplete";
		f.GROUP_PROGRESS = "groupProgress";
		f.GROUP_COMPLETE = "groupComplete";
		return f;
	}(egret.Event);
	b.ResourceEvent = a;
	a.prototype.__class__ = "RES.ResourceEvent";
})(RES || (RES = {}));
(function(b) {
	var a = function() {
		function c(f, e, d) {
			this._loaded = !1;
			this.name = f;
			this.url = e;
			this.type = d;
		}
		Object.defineProperty(c.prototype, "loaded", {
			get: function() {
				return this.data ? this.data.loaded : this._loaded;
			},
			set: function(d) {
				this.data && (this.data.loaded = d);
				this._loaded = d;
			},
			enumerable: !0,
			configurable: !0
		});
		c.prototype.toString = function() {
			return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]';
		};
		c.TYPE_XML = "xml";
		c.TYPE_IMAGE = "image";
		c.TYPE_BIN = "bin";
		c.TYPE_TEXT = "text";
		c.TYPE_JSON = "json";
		c.TYPE_SHEET = "sheet";
		c.TYPE_FONT = "font";
		c.TYPE_SOUND = "sound";
		return c;
	}();
	b.ResourceItem = a;
	a.prototype.__class__ = "RES.ResourceItem";
})(RES || (RES = {}));
(function(b) {
	var a = function() {
		function c() {
			this.keyMap = {};
			this.groupDic = {};
		}
		c.prototype.getGroupByName = function(h) {
			var f = [];
			if (!this.groupDic[h]) {
				return f;
			}
			h = this.groupDic[h];
			for (var e = h.length, g = 0; g < e; g++) {
				f.push(this.parseResourceItem(h[g]));
			}
			return f;
		};
		c.prototype.getRawGroupByName = function(d) {
			return this.groupDic[d] ? this.groupDic[d] : [];
		};
		c.prototype.createGroup = function(r, t, s) {
			"undefined" === typeof s && (s = !1);
			if (!s && this.groupDic[r] || !t || 0 == t.length) {
				return !1;
			}
			s = this.groupDic;
			for (var q = [], p = t.length, o = 0; o < p; o++) {
				var n = t[o],
					j = s[n];
				if (j) {
					for (var n = j.length, g = 0; g < n; g++) {
						var i = j[g]; - 1 == q.indexOf(i) && q.push(i);
					}
				} else {
					(i = this.keyMap[n]) && -1 == q.indexOf(i) && q.push(i);
				}
			}
			if (0 == q.length) {
				return !1;
			}
			this.groupDic[r] = q;
			return !0;
		};
		c.prototype.parseConfig = function(t, v) {
			if (t) {
				var u = t.resources;
				if (u) {
					for (var s = u.length, r = 0; r < s; r++) {
						var q = u[r];
						q.url = v + q.url;
						this.keyMap[q.name] || (this.keyMap[q.name] = q);
					}
				}
				if (u = t.groups) {
					for (s = u.length, r = 0; r < s; r++) {
						for (var p = u[r], o = [], i = p.keys.split(","), j = i.length, g = 0; g < j; g++) {
							q = i[g].trim(), (q = this.keyMap[q]) && -1 == o.indexOf(q) && o.push(q);
						}
						this.groupDic[p.name] = o;
					}
				}
			}
		};
		c.prototype.getType = function(d) {
			return (d = this.keyMap[d]) ? d.type : "";
		};
		c.prototype.getRawResourceItem = function(d) {
			return this.keyMap[d];
		};
		c.prototype.getResourceItem = function(d) {
			return (d = this.keyMap[d]) ? this.parseResourceItem(d) : null;
		};
		c.prototype.parseResourceItem = function(e) {
			var d = new b.ResourceItem(e.name, e.url, e.type);
			d.data = e;
			return d;
		};
		return c;
	}();
	b.ResourceConfig = a;
	a.prototype.__class__ = "RES.ResourceConfig";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.groupTotalDic = {};
			this.numLoadedDic = {};
			this.itemListDic = {};
			this.priorityQueue = {};
			this.lazyLoadList = [];
			this.analyzerDic = {};
			this.queueIndex = 0;
		}
		__extends(f, d);
		f.prototype.isGroupInLoading = function(c) {
			return void 0 !== this.itemListDic[c];
		};
		f.prototype.loadGroup = function(h, g, j) {
			"undefined" === typeof j && (j = 0);
			if (!this.itemListDic[g] && g) {
				if (h && 0 != h.length) {
					this.priorityQueue[j] ? this.priorityQueue[j].push(g) : this.priorityQueue[j] = [g];
					this.itemListDic[g] = h;
					j = h.length;
					for (var i = 0; i < j; i++) {
						h[i].groupName = g;
					}
					this.groupTotalDic[g] = h.length;
					this.numLoadedDic[g] = 0;
					this.next();
				} else {
					h = new b.ResourceEvent(b.ResourceEvent.GROUP_COMPLETE), h.groupName = g, this.dispatchEvent(h);
				}
			}
		};
		f.prototype.loadItem = function(c) {
			this.lazyLoadList.push(c);
			c.groupName = "";
			this.next();
		};
		f.prototype.next = function() {
			var e = this.getOneResourceItem();
			if (e) {
				if (e.loaded) {
					this.onItemComplete(e);
				} else {
					var c = this.analyzerDic[e.type];
					c || (c = this.analyzerDic[e.type] = egret.Injector.getInstance(b.AnalyzerBase, e.type));
					c.loadFile(e, this.onItemComplete, this);
				}
			}
		};
		f.prototype.getOneResourceItem = function() {
			var g = Number.NEGATIVE_INFINITY,
				e;
			for (e in this.priorityQueue) {
				g = Math.max(g, e);
			}
			g = this.priorityQueue[g];
			if (!g || 0 == g.length) {
				return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
			}
			e = g.length;
			for (var i, h = 0; h < e; h++) {
				this.queueIndex >= e && (this.queueIndex = 0);
				i = this.itemListDic[g[this.queueIndex]];
				if (0 < i.length) {
					break;
				}
				this.queueIndex++;
			}
			return 0 == i.length ? null : i.shift();
		};
		f.prototype.onItemComplete = function(h) {
			var g = h.groupName;
			h.loaded || b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, g, h);
			if (g) {
				this.numLoadedDic[g]++;
				var j = this.numLoadedDic[g],
					i = this.groupTotalDic[g];
				b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, g, h, j, i);
				j == i && (this.removeGroupName(g), delete this.groupTotalDic[g], delete this.numLoadedDic[g], delete this.itemListDic[g], b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, g));
			} else {
				this.callBack.call(this.resInstance, h);
			}
			this.next();
		};
		f.prototype.removeGroupName = function(h) {
			for (var g in this.priorityQueue) {
				for (var n = this.priorityQueue[g], m = n.length, l = 0, j = !1, m = n.length, i = 0; i < m; i++) {
					if (n[i] == h) {
						n.splice(l, 1);
						j = !0;
						break;
					}
					l++;
				}
				if (j) {
					0 == n.length && delete this.priorityQueue[g];
					break;
				}
			}
		};
		return f;
	}(egret.EventDispatcher);
	b.ResourceLoader = a;
	a.prototype.__class__ = "RES.ResourceLoader";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
		}
		__extends(f, e);
		f.prototype.loadFile = function(g, d, h) {};
		f.prototype.getRes = function(c) {};
		f.prototype.destroyRes = function(c) {
			return !1;
		};
		f.getStringPrefix = function(d) {
			if (!d) {
				return "";
			}
			var c = d.indexOf(".");
			return -1 != c ? d.substring(0, c) : "";
		};
		f.getStringTail = function(d) {
			if (!d) {
				return "";
			}
			var c = d.indexOf(".");
			return -1 != c ? d.substring(c + 1) : "";
		};
		return f;
	}(egret.HashObject);
	b.AnalyzerBase = a;
	a.prototype.__class__ = "RES.AnalyzerBase";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this.fileDic = {};
			this.resItemDic = [];
			this._dataFormat = egret.URLLoaderDataFormat.BINARY;
			this.recycler = new egret.Recycler;
		}
		__extends(f, e);
		f.prototype.loadFile = function(h, g, j) {
			if (this.fileDic[h.name]) {
				g.call(j, h);
			} else {
				var i = this.getLoader();
				this.resItemDic[i.hashCode] = {
					item: h,
					func: g,
					thisObject: j
				};
				i.load(new egret.URLRequest(h.url));
			}
		};
		f.prototype.getLoader = function() {
			var c = this.recycler.pop();
			c || (c = new egret.URLLoader, c.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), c.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
			c.dataFormat = this._dataFormat;
			return c;
		};
		f.prototype.onLoadFinish = function(h) {
			var g = h.target,
				k = this.resItemDic[g.hashCode];
			delete this.resItemDic[g.hashCode];
			this.recycler.push(g);
			var j = k.item,
				i = k.func;
			j.loaded = h.type == egret.Event.COMPLETE;
			j.loaded && this.analyzeData(j, g.data);
			i.call(k.thisObject, j);
		};
		f.prototype.analyzeData = function(g, d) {
			var h = g.name;
			!this.fileDic[h] && d && (this.fileDic[h] = d);
		};
		f.prototype.getRes = function(c) {
			return this.fileDic[c];
		};
		f.prototype.hasRes = function(c) {
			return null != this.getRes(c);
		};
		f.prototype.destroyRes = function(c) {
			return this.fileDic[c] ? (delete this.fileDic[c], !0) : !1;
		};
		return f;
	}(b.AnalyzerBase);
	b.BinAnalyzer = a;
	a.prototype.__class__ = "RES.BinAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXTURE;
		}
		__extends(f, e);
		f.prototype.analyzeData = function(g, d) {
			var h = g.name;
			!this.fileDic[h] && d && (this.fileDic[h] = d, (h = g.data) && h.scale9grid && (h = h.scale9grid.split(","), d.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3]))));
		};
		return f;
	}(b.BinAnalyzer);
	b.ImageAnalyzer = a;
	a.prototype.__class__ = "RES.ImageAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT;
		}
		__extends(f, e);
		f.prototype.analyzeData = function(h, g) {
			var j = h.name;
			if (!this.fileDic[j] && g) {
				try {
					this.fileDic[j] = JSON.parse(g);
				} catch (i) {
					egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + h.url);
				}
			}
		};
		return f;
	}(b.BinAnalyzer);
	b.JsonAnalyzer = a;
	a.prototype.__class__ = "RES.JsonAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT;
		}
		__extends(f, e);
		return f;
	}(b.BinAnalyzer);
	b.TextAnalyzer = a;
	a.prototype.__class__ = "RES.TextAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.sheetMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT;
		}
		__extends(f, d);
		f.prototype.getRes = function(e) {
			var c = this.fileDic[e];
			!c && (c = b.AnalyzerBase.getStringPrefix(e), c = this.fileDic[c]) && (e = b.AnalyzerBase.getStringTail(e), c = c.getTexture(e));
			return c;
		};
		f.prototype.onLoadFinish = function(h) {
			var g = h.target,
				k = this.resItemDic[g.hashCode];
			delete this.resItemDic[g.hashCode];
			this.recycler.push(g);
			var j = k.item,
				i = k.func;
			j.loaded = h.type == egret.Event.COMPLETE;
			j.loaded && this.analyzeData(j, g.data);
			"string" == typeof g.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(j, i, k.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : i.call(k.thisObject, j);
		};
		f.prototype.analyzeData = function(h, g) {
			var k = h.name;
			if (!this.fileDic[k] && g) {
				var j;
				if ("string" == typeof g) {
					try {
						j = JSON.parse(g);
					} catch (i) {
						egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + h.url);
					}
					j && (this.sheetMap[k] = j, h.loaded = !1, h.url = this.getRelativePath(h.url, j.file));
				} else {
					j = this.sheetMap[k], delete this.sheetMap[k], g && (j = this.parseSpriteSheet(g, j), this.fileDic[k] = j);
				}
			}
		};
		f.prototype.getRelativePath = function(g, e) {
			g = g.split("\\").join("/");
			var h = g.lastIndexOf("/");
			return g = -1 != h ? g.substring(0, h + 1) + e : e;
		};
		f.prototype.parseSpriteSheet = function(h, g) {
			var l = g.frames;
			if (!l) {
				return null;
			}
			var k = new egret.SpriteSheet(h),
				j;
			for (j in l) {
				var i = l[j];
				k.createTexture(j, i.x, i.y, i.w, i.h, i.offX, i.offY, i.sourceW, i.sourceH);
			}
			return k;
		};
		return f;
	}(b.BinAnalyzer);
	b.SheetAnalyzer = a;
	a.prototype.__class__ = "RES.SheetAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
		}
		__extends(f, e);
		f.prototype.analyzeData = function(h, g) {
			var j = h.name;
			if (!this.fileDic[j] && g) {
				var i;
				"string" == typeof g ? (i = g, this.sheetMap[j] = i, h.loaded = !1, h.url = this.getTexturePath(h.url, i)) : (i = this.sheetMap[j], delete this.sheetMap[j], g && (i = new egret.BitmapTextSpriteSheet(g, i), this.fileDic[j] = i));
			}
		};
		f.prototype.getTexturePath = function(h, g) {
			var k = "",
				j = g.split("\n")[2],
				i = j.indexOf('file="'); - 1 != i && (j = j.substring(i + 6), i = j.indexOf('"'), k = j.substring(0, i));
			h = h.split("\\").join("/");
			i = h.lastIndexOf("/");
			return h = -1 != i ? h.substring(0, i + 1) + k : k;
		};
		return f;
	}(b.SheetAnalyzer);
	b.FontAnalyzer = a;
	a.prototype.__class__ = "RES.FontAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND;
		}
		__extends(f, e);
		return f;
	}(b.BinAnalyzer);
	b.SoundAnalyzer = a;
	a.prototype.__class__ = "RES.SoundAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT;
		}
		__extends(f, e);
		f.prototype.analyzeData = function(h, g) {
			var k = h.name;
			if (!this.fileDic[k] && g) {
				try {
					var j = egret.XML.parse(g);
					this.fileDic[k] = j;
				} catch (i) {}
			}
		};
		return f;
	}(b.BinAnalyzer);
	b.XMLAnalyzer = a;
	a.prototype.__class__ = "RES.XMLAnalyzer";
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(c) {
	c.loadConfig = function(e, d) {
		"undefined" === typeof d && (d = "");
		a.loadConfig(e, d);
	};
	c.loadGroup = function(e, d) {
		"undefined" === typeof d && (d = 0);
		a.loadGroup(e, d);
	};
	c.isGroupLoaded = function(d) {
		return a.isGroupLoaded(d);
	};
	c.getGroupByName = function(d) {
		return a.getGroupByName(d);
	};
	c.createGroup = function(f, e, d) {
		"undefined" === typeof d && (d = !1);
		return a.createGroup(f, e, d);
	};
	c.hasRes = function(d) {
		return a.hasRes(d);
	};
	c.getRes = function(d) {
		return a.getRes(d);
	};
	c.getResAsync = function(f, e, d) {
		a.getResAsync(f, e, d);
	};
	c.getResByUrl = function(h, f, e, g) {
		"undefined" === typeof g && (g = "");
		a.getResByUrl(h, f, e, g);
	};
	c.destroyRes = function(d) {
		return a.destroyRes(d);
	};
	c.addEventListener = function(j, g, f, i, h) {
		"undefined" === typeof i && (i = !1);
		"undefined" === typeof h && (h = 0);
		a.addEventListener(j, g, f, i, h);
	};
	c.removeEventListener = function(h, f, e, g) {
		"undefined" === typeof g && (g = !1);
		a.removeEventListener(h, f, e, g);
	};
	var b = function(e) {
		function d() {
			e.call(this);
			this.analyzerDic = {};
			this.configComplete = !1;
			this.loadedGroups = [];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init();
		}
		__extends(d, e);
		d.prototype.getAnalyzerByType = function(f) {
			var g = this.analyzerDic[f];
			g || (g = this.analyzerDic[f] = egret.Injector.getInstance(c.AnalyzerBase, f));
			return g;
		};
		d.prototype.init = function() {
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(c.AnalyzerBase, c.BinAnalyzer, c.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(c.AnalyzerBase, c.ImageAnalyzer, c.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(c.AnalyzerBase, c.TextAnalyzer, c.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(c.AnalyzerBase, c.JsonAnalyzer, c.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(c.AnalyzerBase, c.SheetAnalyzer, c.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(c.AnalyzerBase, c.FontAnalyzer, c.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(c.AnalyzerBase, c.SoundAnalyzer, c.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_XML) || egret.Injector.mapClass(c.AnalyzerBase, c.XMLAnalyzer, c.ResourceItem.TYPE_XML);
			this.resConfig = new c.ResourceConfig;
			this.resLoader = new c.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(c.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
		};
		d.prototype.loadConfig = function(f, h) {
			this.configURL = f;
			this.resourceRoot = h;
			var g = [new c.ResourceItem(f, f, c.ResourceItem.TYPE_JSON)];
			this.resLoader.loadGroup(g, d.GROUP_CONFIG, Number.MAX_VALUE);
		};
		d.prototype.isGroupLoaded = function(f) {
			return -1 != this.loadedGroups.indexOf(f);
		};
		d.prototype.getGroupByName = function(f) {
			return this.resConfig.getGroupByName(f);
		};
		d.prototype.loadGroup = function(f, h) {
			"undefined" === typeof h && (h = 0);
			if (-1 == this.loadedGroups.indexOf(f) && !this.resLoader.isGroupInLoading(f)) {
				if (this.configComplete) {
					var g = this.resConfig.getGroupByName(f);
					this.resLoader.loadGroup(g, f, h);
				} else {
					this.groupNameList.push({
						name: f,
						priority: h
					});
				}
			}
		};
		d.prototype.createGroup = function(f, h, g) {
			"undefined" === typeof g && (g = !1);
			return this.resConfig.createGroup(f, h, g);
		};
		d.prototype.onGroupComp = function(g) {
			if (g.groupName == d.GROUP_CONFIG) {
				g = this.getAnalyzerByType(c.ResourceItem.TYPE_JSON);
				var j = g.getRes(this.configURL);
				g.destroyRes(this.configURL);
				this.resConfig.parseConfig(j, this.resourceRoot);
				this.configComplete = !0;
				c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_COMPLETE);
				g = this.groupNameList;
				for (var j = g.length, i = 0; i < j; i++) {
					var h = g[i];
					this.loadGroup(h.name, h.priority);
				}
				this.groupNameList = [];
			} else {
				this.loadedGroups.push(g.groupName), this.dispatchEvent(g);
			}
		};
		d.prototype.hasRes = function(f) {
			var g = this.resConfig.getType(f);
			return "" == g && (f = c.AnalyzerBase.getStringPrefix(f), g = this.resConfig.getType(f), "" == g) ? !1 : !0;
		};
		d.prototype.getRes = function(f) {
			var g = this.resConfig.getType(f);
			return "" == g && (g = c.AnalyzerBase.getStringPrefix(f), g = this.resConfig.getType(g), "" == g) ? null : this.getAnalyzerByType(g).getRes(f);
		};
		d.prototype.getResAsync = function(g, l, k) {
			var j = this.resConfig.getType(g),
				i = g;
			if ("" == j && (i = c.AnalyzerBase.getStringPrefix(g), j = this.resConfig.getType(i), "" == j)) {
				l.call(k, null);
				return;
			}(j = this.getAnalyzerByType(j).getRes(g)) ? l.call(k, j) : (g = {
				name: g,
				compFunc: l,
				thisObject: k
			}, this.asyncDic[i] ? this.asyncDic[i].push(g) : (this.asyncDic[i] = [g], i = this.resConfig.getResourceItem(i), this.resLoader.loadItem(i)));
		};
		d.prototype.getResByUrl = function(g, l, k, j) {
			"undefined" === typeof j && (j = "");
			if (g) {
				j || (j = this.getTypeByUrl(g));
				var i = this.getAnalyzerByType(j).getRes(g);
				i ? l.call(k, i) : (l = {
					name: g,
					compFunc: l,
					thisObject: k
				}, this.asyncDic[g] ? this.asyncDic[g].push(l) : (this.asyncDic[g] = [l], g = new c.ResourceItem(g, g, j), this.resLoader.loadItem(g)));
			} else {
				l.call(k, null);
			}
		};
		d.prototype.getTypeByUrl = function(f) {
			f = f.substr(f.lastIndexOf(".") + 1);
			switch (f) {
				case c.ResourceItem.TYPE_XML:
				case c.ResourceItem.TYPE_JSON:
				case c.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
					f = c.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					f = c.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					f = c.ResourceItem.TYPE_TEXT;
					break;
				default:
					f = c.ResourceItem.TYPE_BIN;
			}
			return f;
		};
		d.prototype.onResourceItemComp = function(g) {
			var m = this.asyncDic[g.name];
			delete this.asyncDic[g.name];
			g = this.getAnalyzerByType(g.type);
			for (var l = m.length, j = 0; j < l; j++) {
				var i = m[j],
					h = g.getRes(i.name);
				i.compFunc.call(i.thisObject, h);
			}
		};
		d.prototype.destroyRes = function(g) {
			var k = this.resConfig.getRawGroupByName(g);
			if (k) {
				var j = this.loadedGroups.indexOf(g); - 1 != j && this.loadedGroups.splice(j, 1);
				g = k.length;
				for (var i = 0; i < g; i++) {
					j = k[i];
					j.loaded = !1;
					var h = this.getAnalyzerByType(j.type);
					h.destroyRes(j.name);
				}
				return !0;
			}
			k = this.resConfig.getType(g);
			if ("" == k) {
				return !1;
			}
			j = this.resConfig.getRawResourceItem(g);
			j.loaded = !1;
			h = this.getAnalyzerByType(k);
			return h.destroyRes(g);
		};
		d.GROUP_CONFIG = "RES__CONFIG";
		return d;
	}(egret.EventDispatcher);
	b.prototype.__class__ = "Resource";
	var a = new b;
})(RES || (RES = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(c) {
			"undefined" === typeof c && (c = 60);
			d.call(this);
			this.frameRate = c;
			this._time = 0;
			60 == c && (f.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, f.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			f.requestAnimationFrame || (f.requestAnimationFrame = function(e) {
				return window.setTimeout(e, 1000 / c);
			});
			f.cancelAnimationFrame || (f.cancelAnimationFrame = function(e) {
				return window.clearTimeout(e);
			});
			f.instance = this;
			this.registerListener();
		}
		__extends(f, d);
		f.prototype.enterFrame = function() {
			var g = f.instance,
				c = f._thisObject,
				i = f._callback,
				h = b.getTimer();
			i.call(c, h - g._time);
			g._time = h;
			g._requestAnimationId = f.requestAnimationFrame.call(window, f.prototype.enterFrame);
		};
		f.prototype.executeMainLoop = function(e, c) {
			f._callback = e;
			f._thisObject = c;
			this.enterFrame();
		};
		f.prototype.reset = function() {
			var c = f.instance;
			c._requestAnimationId && (c._time = b.getTimer(), f.cancelAnimationFrame.call(window, c._requestAnimationId), c.enterFrame());
		};
		f.prototype.registerListener = function() {
			var g = function() {
					f.instance.reset();
				},
				c = function() {
					document[i] || g();
				};
			window.onfocus = g;
			window.onblur = function() {};
			var i, h;
			"undefined" !== typeof document.hidden ? (i = "hidden", h = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (i = "mozHidden", h = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (i = "msHidden", h = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (i = "webkitHidden", h = "webkitvisibilitychange");
			"onpageshow" in window && "onpagehide" in window && window.addEventListener("pageshow", g, !1);
			i && h && document.addEventListener(h, c, !1);
		};
		return f;
	}(b.DeviceContext);
	b.HTML5DeviceContext = a;
	a.prototype.__class__ = "egret.HTML5DeviceContext";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(g) {
			this.canvas = g;
			this.canvasContext = g.getContext("2d");
			var e = this.canvasContext.setTransform,
				h = this;
			this.canvasContext.setTransform = function(j, o, n, k, c, i) {
				h._matrixA = j;
				h._matrixB = o;
				h._matrixC = n;
				h._matrixD = k;
				h._matrixTx = c;
				h._matrixTy = i;
				e.call(h.canvasContext, j, o, n, k, c, i);
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
			d.call(this);
		}
		__extends(f, d);
		f.prototype.clearScreen = function() {
			this.setTransform(b.Matrix.identity.identity());
			for (var h = b.RenderFilter.getInstance().getDrawAreaList(), g = 0, j = h.length; g < j; g++) {
				var i = h[g];
				this.clearRect(i.x + this._transformTx, i.y + this._transformTy, i.width, i.height);
			}
			this.renderCost = 0;
		};
		f.prototype.clearRect = function(g, e, i, h) {
			this.canvasContext.clearRect(g, e, i, h);
		};
		f.prototype.drawImage = function(u, t, r, v, e, p, o, i, j) {
			t /= b.MainContext.instance.rendererContext.texture_scale_factor;
			r /= b.MainContext.instance.rendererContext.texture_scale_factor;
			v /= b.MainContext.instance.rendererContext.texture_scale_factor;
			e /= b.MainContext.instance.rendererContext.texture_scale_factor;
			u = u._bitmapData;
			p += this._transformTx;
			o += this._transformTy;
			var g = b.getTimer();
			this.canvasContext.drawImage(u, t, r, v, e, p, o, i, j);
			d.prototype.drawImage.call(this, u, t, r, v, e, p, o, i, j);
			this.renderCost += b.getTimer() - g;
		};
		f.prototype.setTransform = function(c) {
			1 == c.a && 0 == c.b && 0 == c.c && 1 == c.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = c.tx - this._matrixTx, this._transformTy = c.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == c.a && this._matrixB == c.b && this._matrixC == c.c && this._matrixD == c.d && this._matrixTx == c.tx && this._matrixTy == c.ty || this.canvasContext.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty));
		};
		f.prototype.setAlpha = function(e, c) {
			e != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = e);
			c ? (this.blendValue = c, this.canvasContext.globalCompositeOperation = c) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = b.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = b.BlendMode.NORMAL);
		};
		f.prototype.setupFont = function(g) {
			var e = this.canvasContext,
				h = g.italic ? "italic " : "normal ",
				h = h + (g.bold ? "bold " : "normal "),
				h = h + (g.size + "px " + g.fontFamily);
			e.font = h;
			e.textAlign = "left";
			e.textBaseline = "middle";
		};
		f.prototype.measureText = function(c) {
			return this.canvasContext.measureText(c).width;
		};
		f.prototype.drawText = function(i, g, p, o, n) {
			var l = i._strokeColorString,
				j = i.stroke,
				e = this.canvasContext;
			e.fillStyle = i._textColorString;
			e.strokeStyle = l;
			j && (e.lineWidth = 2 * j, e.strokeText(g, p + this._transformTx, o + this._transformTy, n || 65535));
			e.fillText(g, p + this._transformTx, o + this._transformTy, n || 65535);
			d.prototype.drawText.call(this, i, g, p, o, n);
		};
		f.prototype.strokeRect = function(h, g, k, j, i) {
			this.canvasContext.strokeStyle = i;
			this.canvasContext.strokeRect(h, g, k, j);
		};
		f.prototype.pushMask = function(c) {
			this.canvasContext.save();
			this.canvasContext.beginPath();
			this.canvasContext.rect(c.x + this._transformTx, c.y + this._transformTy, c.width, c.height);
			this.canvasContext.clip();
			this.canvasContext.closePath();
		};
		f.prototype.popMask = function() {
			this.canvasContext.restore();
			this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
		};
		return f;
	}(b.RendererContext);
	b.HTML5CanvasRenderer = a;
	a.prototype.__class__ = "egret.HTML5CanvasRenderer";
})(egret || (egret = {}));
var egret_h5_graphics;
(function(b) {
	b.beginFill = function(f, g) {
		"undefined" === typeof g && (g = 1);
		var e = "rgba(" + (f >> 16) + "," + ((f & 65280) >> 8) + "," + (f & 255) + "," + g + ")";
		this.fillStyleColor = e;
		this.commandQueue.push(new a(this._setStyle, this, [e]));
	};
	b.drawRect = function(g, h, f, e) {
		this.commandQueue.push(new a(function(j, i, m, l) {
			var k = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(k._transformTx + j, k._transformTy + i, m, l);
			this.canvasContext.closePath();
		}, this, [g, h, f, e]));
		this._fill();
	};
	b.drawCircle = function(f, g, e) {
		this.commandQueue.push(new a(function(h, k, j) {
			var i = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(i._transformTx + h, i._transformTy + k, j, 0, 2 * Math.PI);
			this.canvasContext.closePath();
		}, this, [f, g, e]));
		this._fill();
	};
	b.lineStyle = function(m, n, f, e, k, j, l, i) {
		"undefined" === typeof m && (m = NaN);
		"undefined" === typeof n && (n = 0);
		"undefined" === typeof f && (f = 1);
		"undefined" === typeof e && (e = !1);
		"undefined" === typeof k && (k = "normal");
		"undefined" === typeof j && (j = null);
		"undefined" === typeof l && (l = null);
		"undefined" === typeof i && (i = 3);
		this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = n = "rgba(" + (n >> 16) + "," + ((n & 65280) >> 8) + "," + (n & 255) + "," + f + ")";
		this.commandQueue.push(new a(function(d, c) {
			this.canvasContext.lineWidth = d;
			this.canvasContext.strokeStyle = c;
			this.canvasContext.beginPath();
		}, this, [m, n]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY);
	};
	b.lineTo = function(e, f) {
		this.commandQueue.push(new a(function(g, d) {
			var h = this.renderContext;
			this.canvasContext.lineTo(h._transformTx + g, h._transformTy + d);
		}, this, [e, f]));
		this.lineX = e;
		this.lineY = f;
	};
	b.curveTo = function(g, h, f, e) {
		this.commandQueue.push(new a(function(j, i, m, l) {
			var k = this.renderContext;
			this.canvasContext.quadraticCurveTo(k._transformTx + j, k._transformTy + i, m, l);
		}, this, [g, h, f, e]));
		this.lineX = f;
		this.lineY = e;
	};
	b.moveTo = function(e, f) {
		this.commandQueue.push(new a(function(g, d) {
			var h = this.renderContext;
			this.canvasContext.moveTo(h._transformTx + g, h._transformTy + d);
		}, this, [e, f]));
	};
	b.clear = function() {
		this.lineY = this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null;
	};
	b.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new a(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath();
		}, this, null));
	};
	b.endFill = function() {
		null != this.fillStyleColor && this._fill();
		this.fillStyleColor = null;
	};
	b._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand));
	};
	b.createEndLineCommand = function() {
		this.endLineCommand || (this.endLineCommand = new a(function() {
			this.canvasContext.stroke();
			this.canvasContext.closePath();
		}, this, null));
	};
	b._draw = function(g) {
		this.renderContext = g;
		g = this.canvasContext = this.renderContext.canvasContext;
		g.save();
		var h = this.commandQueue.length;
		this.strokeStyleColor && 0 < h && this.commandQueue[h - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
		for (var f = 0; f < h; f++) {
			var e = this.commandQueue[f];
			e.method.apply(e.thisObject, e.args);
		}
		g.restore();
	};
	var a = function() {
		return function(f, g, e) {
			this.method = f;
			this.thisObject = g;
			this.args = e;
		};
	}();
	a.prototype.__class__ = "Command";
	b._setStyle = function(c) {
		this.canvasContext.fillStyle = c;
		this.canvasContext.beginPath();
	};
	b.init = function() {
		for (var c in b) {
			egret.Graphics.prototype[c] = b[c];
		}
		egret.RendererContext.createRendererContext = function(d) {
			return new egret.HTML5CanvasRenderer(d);
		};
	};
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(g) {
			d.call(this);
			this.size = 2000;
			this.vertSize = 6;
			this.contextLost = !1;
			this.glContextId = 0;
			this.currentBlendMode = "";
			this.currentBaseTexture = null;
			this.currentBatchSize = 0;
			this.maskList = [];
			this.maskDataFreeList = [];
			this.canvasContext = document.createElement("canvas").getContext("2d");
			console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
			this.canvas = g;
			g.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
			g.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
			this.projectionX = g.width / 2;
			this.projectionY = -g.height / 2;
			g = 6 * this.size;
			this.vertices = new Float32Array(4 * this.size * this.vertSize);
			this.indices = new Uint16Array(g);
			for (var e = 0, h = 0; e < g; e += 6, h += 4) {
				this.indices[e + 0] = h + 0, this.indices[e + 1] = h + 1, this.indices[e + 2] = h + 2, this.indices[e + 3] = h + 0, this.indices[e + 4] = h + 2, this.indices[e + 5] = h + 3;
			}
			this.initWebGL();
			this.shaderManager = new b.WebGLShaderManager(this.gl);
			this.worldTransform = new b.Matrix;
			this.initBlendMode();
			b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
			b.TextField.prototype._draw = function(c) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				b.DisplayObject.prototype._draw.call(this, c);
			};
		}
		__extends(f, d);
		f.prototype.handleContextLost = function() {
			this.contextLost = !0;
		};
		f.prototype.handleContextRestored = function() {
			this.initWebGL();
			this.shaderManager.setContext(this.gl);
			this.contextLost = !1;
		};
		f.prototype.initWebGL = function() {
			for (var h = {
				stencil: !0
			}, g, k = ["experimental-webgl", "webgl"], j = 0; j < k.length; j++) {
				try {
					g = this.canvas.getContext(k[j], h);
				} catch (i) {}
				if (g) {
					break;
				}
			}
			if (!g) {
				throw Error("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl");
			}
			this.setContext(g);
		};
		f.prototype.setContext = function(c) {
			this.gl = c;
			c.id = this.glContextId++;
			this.vertexBuffer = c.createBuffer();
			this.indexBuffer = c.createBuffer();
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			c.bufferData(c.ELEMENT_ARRAY_BUFFER, this.indices, c.STATIC_DRAW);
			c.bindBuffer(c.ARRAY_BUFFER, this.vertexBuffer);
			c.bufferData(c.ARRAY_BUFFER, this.vertices, c.DYNAMIC_DRAW);
			c.disable(c.DEPTH_TEST);
			c.disable(c.CULL_FACE);
			c.enable(c.BLEND);
			c.colorMask(!0, !0, !0, !0);
		};
		f.prototype.initBlendMode = function() {
			f.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			f.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.DST_ALPHA];
		};
		f.prototype.start = function() {
			if (!this.contextLost) {
				var g = this.gl;
				g.activeTexture(g.TEXTURE0);
				g.bindBuffer(g.ARRAY_BUFFER, this.vertexBuffer);
				g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				var e = this.shaderManager.defaultShader;
				g.uniform2f(e.projectionVector, this.projectionX, this.projectionY);
				var h = 4 * this.vertSize;
				g.vertexAttribPointer(e.aVertexPosition, 2, g.FLOAT, !1, h, 0);
				g.vertexAttribPointer(e.aTextureCoord, 2, g.FLOAT, !1, h, 8);
				g.vertexAttribPointer(e.colorAttribute, 2, g.FLOAT, !1, h, 16);
				this.setBlendMode(b.BlendMode.NORMAL);
			}
		};
		f.prototype.clearScreen = function() {
			var h = this.gl;
			h.colorMask(!0, !0, !0, !0);
			for (var g = b.RenderFilter.getInstance().getDrawAreaList(), k = 0, j = g.length; k < j; k++) {
				var i = g[k];
				h.viewport(i.x, i.y, i.width, i.height);
				h.bindFramebuffer(h.FRAMEBUFFER, null);
				h.clearColor(0, 0, 0, 0);
				h.clear(h.COLOR_BUFFER_BIT);
			}
			this.renderCost = 0;
		};
		f.prototype.setBlendMode = function(c) {
			this.currentBlendMode != c && (this.currentBlendMode = c, c = f.blendModesWebGL[this.currentBlendMode], this.gl.blendFunc(c[0], c[1]));
		};
		f.prototype.drawImage = function(K, J, I, H, G, F, D, A, C) {
			if (!this.contextLost) {
				var z = b.MainContext.instance.rendererContext.texture_scale_factor;
				J /= z;
				I /= z;
				H /= z;
				G /= z;
				this.createWebGLTexture(K);
				if (K.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) {
					this._draw(), this.currentBaseTexture = K.webGLTexture;
				}
				var s = this.worldTransform,
					v = s.a,
					q = s.b,
					g = s.c,
					u = s.d,
					i = s.tx,
					o = s.ty;
				0 == F && 0 == D || s.append(1, 0, 0, 1, F, D);
				1 == H / A && 1 == G / C || s.append(A / H, 0, 0, C / G, 0, 0);
				F = s.a;
				D = s.b;
				A = s.c;
				C = s.d;
				var z = s.tx,
					j = s.ty;
				s.a = v;
				s.b = q;
				s.c = g;
				s.d = u;
				s.tx = i;
				s.ty = o;
				v = K._sourceWidth;
				q = K._sourceHeight;
				K = H;
				s = G;
				J /= v;
				I /= q;
				H /= v;
				G /= q;
				v = this.vertices;
				q = 4 * this.currentBatchSize * this.vertSize;
				g = this.worldAlpha;
				v[q++] = z;
				v[q++] = j;
				v[q++] = J;
				v[q++] = I;
				v[q++] = g;
				v[q++] = 16777215;
				v[q++] = F * K + z;
				v[q++] = D * K + j;
				v[q++] = H + J;
				v[q++] = I;
				v[q++] = g;
				v[q++] = 16777215;
				v[q++] = F * K + A * s + z;
				v[q++] = C * s + D * K + j;
				v[q++] = H + J;
				v[q++] = G + I;
				v[q++] = g;
				v[q++] = 16777215;
				v[q++] = A * s + z;
				v[q++] = C * s + j;
				v[q++] = J;
				v[q++] = G + I;
				v[q++] = g;
				v[q++] = 16777215;
				this.currentBatchSize++;
			}
		};
		f.prototype._draw = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var g = b.getTimer();
				this.start();
				var e = this.gl;
				e.bindTexture(e.TEXTURE_2D, this.currentBaseTexture);
				var h = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				e.bufferSubData(e.ARRAY_BUFFER, 0, h);
				e.drawElements(e.TRIANGLES, 6 * this.currentBatchSize, e.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += b.getTimer() - g;
				b.Profiler.getInstance().onDrawImage();
			}
		};
		f.prototype.setTransform = function(e) {
			var c = this.worldTransform;
			c.a = e.a;
			c.b = e.b;
			c.c = e.c;
			c.d = e.d;
			c.tx = e.tx;
			c.ty = e.ty;
		};
		f.prototype.setAlpha = function(e, c) {
			this.worldAlpha = e;
			c && this.setBlendMode(c);
		};
		f.prototype.createWebGLTexture = function(e) {
			if (!e.webGLTexture) {
				var c = this.gl;
				e.webGLTexture = c.createTexture();
				c.bindTexture(c.TEXTURE_2D, e.webGLTexture);
				c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
				c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, e._bitmapData);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
				c.bindTexture(c.TEXTURE_2D, null);
			}
		};
		f.prototype.pushMask = function(g) {
			this._draw();
			var e = this.gl;
			0 == this.maskList.length && (e.enable(e.STENCIL_TEST), e.stencilFunc(e.ALWAYS, 1, 1));
			var h = this.maskDataFreeList.pop();
			h ? (h.x = g.x, h.y = g.y, h.w = g.width, h.h = g.height) : h = {
				x: g.x,
				y: g.y,
				w: g.width,
				h: g.height
			};
			this.maskList.push(h);
			e.colorMask(!1, !1, !1, !1);
			e.stencilOp(e.KEEP, e.KEEP, e.INCR);
			this.renderGraphics(h);
			e.colorMask(!0, !0, !0, !0);
			e.stencilFunc(e.NOTEQUAL, 0, this.maskList.length);
			e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
		};
		f.prototype.popMask = function() {
			this._draw();
			var e = this.gl,
				c = this.maskList.pop();
			c && (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), this.renderGraphics(c), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, this.maskList.length), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), this.maskDataFreeList.push(c));
			0 == this.maskList.length && e.disable(e.STENCIL_TEST);
		};
		f.prototype.setupFont = function(g) {
			var e = this.canvasContext,
				h = g.italic ? "italic " : "normal ",
				h = h + (g.bold ? "bold " : "normal "),
				h = h + (g.size + "px " + g.fontFamily);
			e.font = h;
			e.textAlign = "left";
			e.textBaseline = "middle";
		};
		f.prototype.measureText = function(c) {
			return this.canvasContext.measureText(c).width;
		};
		f.prototype.renderGraphics = function(g) {
			var e = this.gl,
				h = this.shaderManager.primitiveShader;
			this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = e.createBuffer(), this.graphicsIndexBuffer = e.createBuffer());
			this.updateGraphics(g);
			this.shaderManager.activateShader(h);
			e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
			e.uniformMatrix3fv(h.translationMatrix, !1, this.worldTransform.toArray(!0));
			e.uniform2f(h.projectionVector, this.projectionX, -this.projectionY);
			e.uniform2f(h.offsetVector, 0, 0);
			e.uniform3fv(h.tintColor, [1, 1, 1]);
			e.uniform1f(h.alpha, this.worldAlpha);
			e.bindBuffer(e.ARRAY_BUFFER, this.graphicsBuffer);
			e.vertexAttribPointer(h.aVertexPosition, 2, e.FLOAT, !1, 24, 0);
			e.vertexAttribPointer(h.colorAttribute, 4, e.FLOAT, !1, 24, 8);
			e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			e.drawElements(e.TRIANGLE_STRIP, this.graphicsIndices.length, e.UNSIGNED_SHORT, 0);
			this.shaderManager.activateShader(this.shaderManager.defaultShader);
		};
		f.prototype.updateGraphics = function(e) {
			var c = this.gl;
			this.buildRectangle(e);
			c.bindBuffer(c.ARRAY_BUFFER, this.graphicsBuffer);
			c.bufferData(c.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), c.STATIC_DRAW);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), c.STATIC_DRAW);
		};
		f.prototype.buildRectangle = function(h) {
			var g = h.x,
				n = h.y,
				m = h.w;
			h = h.h;
			var l = this.graphicsPoints,
				j = this.graphicsIndices,
				i = l.length / 6;
			l.push(g, n);
			l.push(0, 0, 0, 1);
			l.push(g + m, n);
			l.push(0, 0, 0, 1);
			l.push(g, n + h);
			l.push(0, 0, 0, 1);
			l.push(g + m, n + h);
			l.push(0, 0, 0, 1);
			j.push(i, i, i + 1, i + 2, i + 3, i + 3);
		};
		f.blendModesWebGL = {};
		return f;
	}(b.RendererContext);
	b.WebGLRenderer = a;
	a.prototype.__class__ = "egret.WebGLRenderer";
})(egret || (egret = {}));
(function(b) {
	var a = function() {
		function c() {}
		c.compileProgram = function(h, f, d) {
			d = c.compileFragmentShader(h, d);
			f = c.compileVertexShader(h, f);
			var g = h.createProgram();
			h.attachShader(g, f);
			h.attachShader(g, d);
			h.linkProgram(g);
			h.getProgramParameter(g, h.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
			return g;
		};
		c.compileFragmentShader = function(e, d) {
			return c._compileShader(e, d, e.FRAGMENT_SHADER);
		};
		c.compileVertexShader = function(e, d) {
			return c._compileShader(e, d, e.VERTEX_SHADER);
		};
		c._compileShader = function(f, e, d) {
			d = f.createShader(d);
			f.shaderSource(d, e);
			f.compileShader(d);
			return f.getShaderParameter(d, f.COMPILE_STATUS) ? d : (console.log(f.getShaderInfoLog(d)), null);
		};
		c.checkCanUseWebGL = function() {
			if (void 0 == c.canUseWebGL) {
				try {
					var e = document.createElement("canvas");
					c.canUseWebGL = !!window.WebGLRenderingContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"));
				} catch (d) {
					c.canUseWebGL = !1;
				}
			}
			return c.canUseWebGL;
		};
		return c;
	}();
	b.WebGLUtils = a;
	a.prototype.__class__ = "egret.WebGLUtils";
})(egret || (egret = {}));
(function(g) {
	var b = function() {
		function c(d) {
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			for (var e = 0; e < this.maxAttibs; e++) {
				this.attribState[e] = !1;
			}
			this.setContext(d);
		}
		c.prototype.setContext = function(d) {
			this.gl = d;
			this.primitiveShader = new h(d);
			this.defaultShader = new a(d);
			this.activateShader(this.defaultShader);
		};
		c.prototype.activateShader = function(d) {
			this.gl.useProgram(d.program);
			this.setAttribs(d.attributes);
		};
		c.prototype.setAttribs = function(e) {
			var i, f;
			f = this.tempAttribState.length;
			for (i = 0; i < f; i++) {
				this.tempAttribState[i] = !1;
			}
			f = e.length;
			for (i = 0; i < f; i++) {
				this.tempAttribState[e[i]] = !0;
			}
			e = this.gl;
			f = this.attribState.length;
			for (i = 0; i < f; i++) {
				this.attribState[i] !== this.tempAttribState[i] && (this.attribState[i] = this.tempAttribState[i], this.tempAttribState[i] ? e.enableVertexAttribArray(i) : e.disableVertexAttribArray(i));
			}
		};
		return c;
	}();
	g.WebGLShaderManager = b;
	b.prototype.__class__ = "egret.WebGLShaderManager";
	var a = function() {
		function c(d) {
			this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;\n   vColor = vec4(color * aColor.x, aColor.x);\n}";
			this.program = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.gl = d;
			this.init();
		}
		c.prototype.init = function() {
			var d = this.gl,
				e = g.WebGLUtils.compileProgram(d, this.defaultVertexSrc, this.fragmentSrc);
			d.useProgram(e);
			this.uSampler = d.getUniformLocation(e, "uSampler");
			this.projectionVector = d.getUniformLocation(e, "projectionVector");
			this.offsetVector = d.getUniformLocation(e, "offsetVector");
			this.dimensions = d.getUniformLocation(e, "dimensions");
			this.aVertexPosition = d.getAttribLocation(e, "aVertexPosition");
			this.aTextureCoord = d.getAttribLocation(e, "aTextureCoord");
			this.colorAttribute = d.getAttribLocation(e, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			this.program = e;
		};
		return c;
	}();
	g.EgretShader = a;
	a.prototype.__class__ = "egret.EgretShader";
	var h = function() {
		function c(d) {
			this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
			this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
			this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
			this.gl = d;
			this.init();
		}
		c.prototype.init = function() {
			var d = this.gl,
				e = g.WebGLUtils.compileProgram(d, this.vertexSrc, this.fragmentSrc);
			d.useProgram(e);
			this.projectionVector = d.getUniformLocation(e, "projectionVector");
			this.offsetVector = d.getUniformLocation(e, "offsetVector");
			this.tintColor = d.getUniformLocation(e, "tint");
			this.aVertexPosition = d.getAttribLocation(e, "aVertexPosition");
			this.colorAttribute = d.getAttribLocation(e, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix = d.getUniformLocation(e, "translationMatrix");
			this.alpha = d.getUniformLocation(e, "alpha");
			this.program = e;
		};
		return c;
	}();
	g.PrimitiveShader = h;
	h.prototype.__class__ = "egret.PrimitiveShader";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
		}
		__extends(f, d);
		f.prototype.proceed = function(h) {
			function g(c) {
				b.IOErrorEvent.dispatchIOErrorEvent(h);
			}

			function k(c) {
				switch (h.dataFormat) {
					case b.URLLoaderDataFormat.TEXT:
						h.data = i.responseText;
						break;
					case b.URLLoaderDataFormat.VARIABLES:
						h.data = new b.URLVariables(i.responseText);
						break;
					case b.URLLoaderDataFormat.BINARY:
						h.data = i.response;
						break;
					default:
						h.data = i.responseText;
				}
				b.callLater(b.Event.dispatchEvent, b.Event, h, b.Event.COMPLETE);
			}
			if (h.dataFormat == b.URLLoaderDataFormat.TEXTURE) {
				this.loadTexture(h);
			} else {
				if (h.dataFormat == b.URLLoaderDataFormat.SOUND) {
					this.loadSound(h);
				} else {
					var j = h._request,
						i = this.getXHR();
					i.onerror = g;
					i.onload = k;
					i.open(j.method, j.url, !0);
					this.setResponseType(i, h.dataFormat);
					j.method != b.URLRequestMethod.GET && j.data ? j.data instanceof b.URLVariables ? (i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(j.data.toString())) : (i.setRequestHeader("Content-Type", "multipart/form-data"), i.send(j.data)) : i.send();
				}
			}
		};
		f.prototype.loadSound = function(h) {
			function g(c) {
				window.clearTimeout(i.__timeoutId);
				i.removeEventListener("canplaythrough", g, !1);
				i.removeEventListener("error", j, !1);
				c = new b.Sound;
				c.audio = i;
				h.data = c;
				b.callLater(b.Event.dispatchEvent, b.Event, h, b.Event.COMPLETE);
			}

			function j(c) {
				window.clearTimeout(i.__timeoutId);
				i.removeEventListener("canplaythrough", g, !1);
				i.removeEventListener("error", j, !1);
				b.IOErrorEvent.dispatchIOErrorEvent(h);
			}
			var i = new Audio(h._request.url);
			i.__timeoutId = window.setTimeout(g, 100);
			i.addEventListener("canplaythrough", g, !1);
			i.addEventListener("error", j, !1);
			i.load();
		};
		f.prototype.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP");
		};
		f.prototype.setResponseType = function(e, c) {
			switch (c) {
				case b.URLLoaderDataFormat.TEXT:
				case b.URLLoaderDataFormat.VARIABLES:
					e.responseType = b.URLLoaderDataFormat.TEXT;
					break;
				case b.URLLoaderDataFormat.BINARY:
					e.responseType = "arraybuffer";
					break;
				default:
					e.responseType = c;
			}
		};
		f.prototype.loadTexture = function(g) {
			var e = g._request,
				h = new Image;
			h.crossOrigin = "Anonymous";
			h.onload = function(c) {
				h.onerror = null;
				h.onload = null;
				c = new b.Texture;
				c._setBitmapData(h);
				g.data = c;
				b.callLater(b.Event.dispatchEvent, b.Event, g, b.Event.COMPLETE);
			};
			h.onerror = function(c) {
				h.onerror = null;
				h.onload = null;
				b.IOErrorEvent.dispatchIOErrorEvent(g);
			};
			h.src = e.url;
		};
		return f;
	}(b.NetContext);
	b.HTML5NetContext = a;
	a.prototype.__class__ = "egret.HTML5NetContext";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f(c) {
			d.call(this);
			this.canvas = c;
			this._isTouchDown = !1;
		}
		__extends(f, d);
		f.prototype.run = function() {
			var c = this;
			window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(e) {
				c._onTouchBegin(e);
				e.stopPropagation();
				e.preventDefault();
			}, !1), this.canvas.addEventListener("MSPointerMove", function(e) {
				c._onTouchMove(e);
				e.stopPropagation();
				e.preventDefault();
			}, !1), this.canvas.addEventListener("MSPointerUp", function(e) {
				c._onTouchEnd(e);
				e.stopPropagation();
				e.preventDefault();
			}, !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown", function(e) {
				c.inOutOfCanvas(e) ? c.dispatchLeaveStageEvent() : c._isTouchDown = !0;
			});
			window.addEventListener("mouseup", function(e) {
				c._isTouchDown && c.inOutOfCanvas(e) && c.dispatchLeaveStageEvent();
				c._isTouchDown = !1;
			});
		};
		f.prototype.addMouseListener = function() {
			var c = this;
			this.canvas.addEventListener("mousedown", function(e) {
				c._onTouchBegin(e);
			});
			this.canvas.addEventListener("mousemove", function(e) {
				c._onTouchMove(e);
			});
			this.canvas.addEventListener("mouseup", function(e) {
				c._onTouchEnd(e);
			});
		};
		f.prototype.addTouchListener = function() {
			var c = this;
			this.canvas.addEventListener("touchstart", function(e) {
				for (var h = e.changedTouches.length, g = 0; g < h && g < c.maxTouches; g++) {
					c._onTouchBegin(e.changedTouches[g]);
				}
				e.stopPropagation();
				e.preventDefault();
			}, !1);
			this.canvas.addEventListener("touchmove", function(e) {
				for (var h = e.changedTouches.length, g = 0; g < h && g < c.maxTouches; g++) {
					c._onTouchMove(e.changedTouches[g]);
				}
				e.stopPropagation();
				e.preventDefault();
			}, !1);
			this.canvas.addEventListener("touchend", function(e) {
				for (var h = e.changedTouches.length, g = 0; g < h && g < c.maxTouches; g++) {
					c._onTouchEnd(e.changedTouches[g]);
				}
				e.stopPropagation();
				e.preventDefault();
			}, !1);
			this.canvas.addEventListener("touchcancel", function(e) {
				for (var h = e.changedTouches.length, g = 0; g < h && g < c.maxTouches; g++) {
					c._onTouchEnd(e.changedTouches[g]);
				}
				e.stopPropagation();
				e.preventDefault();
			}, !1);
		};
		f.prototype.inOutOfCanvas = function(c) {
			c = this.getLocation(this.canvas, c);
			return 0 > c.x || 0 > c.y || c.x > this.canvas.width || c.y > this.canvas.height ? !0 : !1;
		};
		f.prototype.dispatchLeaveStageEvent = function() {
			b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE);
		};
		f.prototype._onTouchBegin = function(g) {
			var e = this.getLocation(this.canvas, g),
				h = -1;
			g.hasOwnProperty("identifier") && (h = g.identifier);
			this.onTouchBegan(e.x, e.y, h);
		};
		f.prototype._onTouchMove = function(g) {
			var e = this.getLocation(this.canvas, g),
				h = -1;
			g.hasOwnProperty("identifier") && (h = g.identifier);
			this.onTouchMove(e.x, e.y, h);
		};
		f.prototype._onTouchEnd = function(g) {
			var e = this.getLocation(this.canvas, g),
				h = -1;
			g.hasOwnProperty("identifier") && (h = g.identifier);
			this.onTouchEnd(e.x, e.y, h);
		};
		f.prototype.getLocation = function(i, g) {
			var o = document.documentElement,
				n = window,
				m, l;
			"function" === typeof i.getBoundingClientRect ? (l = i.getBoundingClientRect(), m = l.left, l = l.top) : l = m = 0;
			m += n.pageXOffset - o.clientLeft;
			l += n.pageYOffset - o.clientTop;
			null != g.pageX ? (o = g.pageX, n = g.pageY) : (m -= document.body.scrollLeft, l -= document.body.scrollTop, o = g.clientX, n = g.clientY);
			var j = b.Point.identity;
			j.x = (o - m) / b.StageDelegate.getInstance().getScaleX();
			j.y = (n - l) / b.StageDelegate.getInstance().getScaleY();
			return j;
		};
		return f;
	}(b.TouchContext);
	b.HTML5TouchContext = a;
	a.prototype.__class__ = "egret.HTML5TouchContext";
})(egret || (egret = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1;
		}
		__extends(f, d);
		f.getInstance = function() {
			f._instance || (f._instance = new f);
			return f._instance;
		};
		f.prototype.parserXML = function(e) {
			for (var c = 0;
				"\n" == e.charAt(c) || "\t" == e.charAt(c) || "\r" == e.charAt(c) || " " == e.charAt(c);
			) {
				c++;
			}
			0 != c && (e = e.substring(c, e.length));
			this._isSupportDOMParser ? c = this._parser.parseFromString(e, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(e));
			null == c && b.Logger.info("xml not found!");
			return c;
		};
		f._instance = null;
		return f;
	}(b.HashObject);
	b.SAXParser = a;
	a.prototype.__class__ = "egret.SAXParser";
})(egret || (egret = {}));
var __extends = this.__extends || function(g, b) {
		function a() {
			this.constructor = g;
		}
		for (var h in b) {
			b.hasOwnProperty(h) && (g[h] = b[h]);
		}
		a.prototype = b.prototype;
		g.prototype = new a;
	},
	catgame;
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			var e = RES.getRes("bird_json"),
				c = RES.getRes("bird_png");
			this.mc = new egret.MovieClip(e, c);
			this.mc.scaleY = 0.8;
			this.mc.frameRate = 35;
			this.anchorX = 0.5;
			this.anchorY = 1;
			this.addChild(this.mc);
			this.fly();
		}
		__extends(f, d);
		f.prototype.init = function(c) {
			this.energy = c;
			this.speed = 4 + 4 * Math.random();
		};
		f.prototype.fly = function() {
			this.mc.x = 55;
			this.mc.y = 45;
			this.mc.gotoAndPlay("fly");
		};
		f.prototype.grab = function() {
			this.mc.x = 70;
			this.mc.y = 65;
			this.mc.gotoAndPlay("grab");
		};
		f.prototype.onclick = function(c) {
			this.mc.frameRate = c ? 70 : 35;
		};
		f.prototype.land = function() {
			this.mc.x = 55;
			this.mc.y = 65;
			this.mc.gotoAndPlay("birdland");
		};
		f.prototype.tire = function() {
			this.mc.x = 60;
			this.mc.y = 65;
			this.mc.gotoAndPlay("birdstop");
		};
		f.produce = function(c) {
			null == b.Bird.cacheDict[c] && (b.Bird.cacheDict[c] = []);
			c = b.Bird.cacheDict[c];
			return 0 < c.length ? c.pop() : new b.Bird;
		};
		f.reclaim = function(g, e) {
			null == b.Bird.cacheDict[e] && (b.Bird.cacheDict[e] = []);
			var h = b.Bird.cacheDict[e]; - 1 == h.indexOf(g) && h.push(g);
		};
		f.cacheDict = {};
		return f;
	}(egret.DisplayObjectContainer);
	b.Bird = a;
	a.prototype.__class__ = "catgame.Bird";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			this.speedy = this.speedx = 0;
			var d = RES.getRes("stand_json"),
				c = RES.getRes("stand_png");
			this.standmc = new egret.MovieClip(d, c);
			this.standmc.frameRate = 35;
			this.standmc.gotoAndPlay("stay");
			d = RES.getRes("cat_json");
			c = RES.getRes("cat_png");
			this.catmc = new egret.MovieClip(d, c);
			this.catmc.frameRate = 35;
			this.catmc.addEventListener("finish", this.onfinish, this);
			this.anchorX = 0.5;
			this.anchorY = 1;
		}
		__extends(f, e);
		f.prototype.onfinish = function(c) {
			this.dispatchEventWith("finish");
			this.catmc.stop();
		};
		f.prototype.stand = function() {
			this.numChildren && this.removeChildAt(0);
			this.addChild(this.standmc);
		};
		f.prototype.jump = function() {
			this.numChildren && this.removeChildAt(0);
			this.catmc.scaleX = 1;
			this.catmc.scaleY = 1;
			this.catmc.x = 55;
			this.catmc.y = 100;
			this.catmc.gotoAndPlay("fall");
			this.addChild(this.catmc);
		};
		f.prototype.falldown = function() {
			this.catmc.scaleX = 1;
			this.catmc.scaleY = 1;
			this.catmc.x = 60;
			this.catmc.y = 80;
			this.catmc.gotoAndPlay("falldown");
		};
		f.prototype.caught = function() {
			this.catmc.scaleX = 1;
			this.catmc.scaleY = 1;
			this.catmc.x = 40;
			this.catmc.y = 40;
			this.catmc.gotoAndPlay("caught");
		};
		f.prototype.dead = function() {
			this.catmc.scaleX = -0.8;
			this.catmc.scaleY = 0.8;
			this.catmc.x = 60;
			this.catmc.y = 60;
			this.catmc.gotoAndPlay("dead");
		};
		f.prototype.catstop = function() {
			this.catmc.scaleX = -1;
			this.catmc.scaleY = 1;
			this.catmc.x = 60;
			this.catmc.y = 65;
			this.catmc.gotoAndPlay("stop");
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.Cat = a;
	a.prototype.__class__ = "catgame.Cat";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f(c) {
			e.call(this);
			this.texture = RES.getRes(c);
			this.anchorY = this.anchorX = 0.5;
		}
		__extends(f, e);
		f.prototype.sete = function(c) {
			this.energy = c;
		};
		f.prototype.gete = function() {
			return this.energy;
		};
		return f;
	}(egret.Bitmap);
	b.Fruit = a;
	a.prototype.__class__ = "catgame.Fruit";
})(catgame || (catgame = {}));
var __extends = this.__extends || function(g, b) {
		function a() {
			this.constructor = g;
		}
		for (var h in b) {
			b.hasOwnProperty(h) && (g[h] = b[h]);
		}
		a.prototype = b.prototype;
		g.prototype = new a;
	},
	LoadingUI = function(b) {
		function a() {
			b.call(this);
			this.createView();
		}
		__extends(a, b);
		a.prototype.createView = function() {
			this.textField = new egret.TextField;
			this.addChild(this.textField);
			this.textField.y = 300;
			this.textField.width = 480;
			this.textField.height = 100;
			this.textField.textAlign = "center";
		};
		a.prototype.setProgress = function(e, f) {
			this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + e + "/" + f;
		};
		return a;
	}(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(g, b) {
		function a() {
			this.constructor = g;
		}
		for (var h in b) {
			b.hasOwnProperty(h) && (g[h] = b[h]);
		}
		a.prototype = b.prototype;
		g.prototype = new a;
	},
	GameApp = function(b) {
		function a() {
			b.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}
		__extends(a, b);
		a.prototype.onAddToStage = function(c) {
			this.loadingView = new LoadingUI;
			this.stage.addChild(this.loadingView);
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.loadConfig("resource/resource.json", "resource/");
		};
		a.prototype.onConfigComplete = function(c) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.loadGroup("preload");
		};
		a.prototype.onResourceLoadComplete = function(c) {
			"preload" == c.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene());
		};
		a.prototype.onResourceProgress = function(c) {
			"preload" == c.groupName && this.loadingView.setProgress(c.itemsLoaded, c.itemsTotal);
		};
		a.prototype.createGameScene = function() {
			a.stageW = this.stage.stageWidth;
			a.stageH = this.stage.stageHeight;
			var c = new catgame.GameContainer;
			c.y = -40;
			this.addChild(c);
		};
		a.getw = function() {
			return a.stageW;
		};
		a.geth = function() {
			return a.stageH;
		};
		a.getscale = function() {
			return a.ScaleY;
		};
		a.getoffset = function() {
			return a.yoffset;
		};
		a.ScaleY = 53 / 96;
		a.yoffset = -40;
		return a;
	}(egret.DisplayObjectContainer);
GameApp.prototype.__class__ = "GameApp";
var data;
(function(b) {
	var a = function() {
		function c() {
			this.myrank = this.myuid = this.mylast = 0;
			this.friendsList = friendlist();
			this.friendsList.sort(this.sortByScore);
			var d = getMyInfo();
			this.setMyUid(d.uid);
			this.getMyRank();
		}
		c.getInstance = function() {
			null == c.instance && (c.instance = new c);
			return c.instance;
		};
		c.prototype.setMyUid = function(d) {
			this.myuid = d;
		};
		c.prototype.test = function() {
			console.log("this is a test");
		};
		c.prototype.getResult = function(l) {
			var h = "",
				g = [],
				h = this.mylast,
				k = 0,
				j = "",
				g = this.friendsList.length;
			if (l > this.mylast) {
				this.postScore(l);
				this.mylast = l;
				for (var i = 0; i < g; i++) {
					this.friendsList[i].uid == this.myuid && (this.friendsList[i].time = getTime(), this.friendsList[i].score = l), this.friendsList[i].score >= h && this.friendsList[i].score < l && (k++, 3 > k && (j += this.friendsList[i].nick + ","));
				}
				this.friendsList.sort(this.sortByScore);
				this.getMyRank();
				h = "\u5728\u597d\u53cb\u4e2d\u6392\u884c\u7b2c" + this.myrank + "\n" + (1 < k ? "\u8d85\u8fc7\u4e86" + j + "\u7b49" + k + "\u4eba" : "\u5237\u65b0\u4e86\u6700\u597d\u6210\u7ee9!") + "\u679c\u65ad\u901a\u77e5\u597d\u53cb\uff01";
			} else {
				h = "\u6ca1\u6709\u8d85\u8fc7\u81ea\u5df1\u6700\u597d\u6210\u7ee9\n \u6ca1\u6709\u8bb0\u5f55\u4e0b\u8f7d\uff0c\u53ef\u4ee5\u518d\u8bd5\u8bd5\uff01";
			}
			g = 3 >= g ? this.friendsList : 1 == this.myrank ? [this.friendsList[0], this.friendsList[1], this.friendsList[2]] : [this.friendsList[this.myrank - 2], this.friendsList[this.myrank - 1], this.friendsList[this.myrank]];
			return [h, g];
		};
		c.prototype.getMyRank = function() {
			for (var e = this.friendsList.length, d = 0; d < e; d++) {
				this.friendsList[d].idx = d + 1, this.friendsList[d].uid == this.myuid && (this.myrank = d + 1);
			}
		};
		c.prototype.sortByScore = function(e, d) {
			return d.score - e.score;
		};
		c.prototype.postScore = function(d) {};
		return c;
	}();
	b.GameData = a;
	a.prototype.__class__ = "data.GameData";
})(data || (data = {}));
var __extends = this.__extends || function(g, b) {
		function a() {
			this.constructor = g;
		}
		for (var h in b) {
			b.hasOwnProperty(h) && (g[h] = b[h]);
		}
		a.prototype = b.prototype;
		g.prototype = new a;
	},
	ui;
(function(b) {
	var a = function(e) {
		function f(d) {
			e.call(this);
			this.rtxt = new egret.TextField;
			this.rtxt.width = 60;
			this.rtxt.textColor = 16777215;
			this.rtxt.strokeColor = 0;
			this.rtxt.stroke = 2;
			this.rtxt.textAlign = egret.HorizontalAlign.RIGHT;
			this.rtxt.text = d.idx;
			this.rtxt.size = 40;
			this.rtxt.x = 0;
			this.rtxt.y = 5;
			this.urlloader = new egret.URLLoader;
			var c = new egret.URLRequest;
			this.urlloader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
			c.url = d.avatar;
			this.urlloader.addEventListener(egret.Event.COMPLETE, this.onAvatarLoaded, this);
			this.urlloader.load(c);
			this.ntxt = new egret.TextField;
			this.ntxt.width = 300;
			this.ntxt.textColor = 0;
			this.ntxt.textAlign = egret.HorizontalAlign.LEFT;
			this.ntxt.text = d.nick;
			this.ntxt.size = 24;
			this.ntxt.x = 140;
			this.ntxt.y = 5;
			this.stxt = new egret.TextField;
			this.stxt.width = 100;
			this.stxt.textColor = 0;
			this.stxt.textAlign = egret.HorizontalAlign.LEFT;
			this.stxt.text = d.score + "\u7c73";
			this.stxt.size = 24;
			this.stxt.x = 140;
			this.stxt.y = 30;
			this.ttxt = new egret.TextField;
			this.ttxt.width = 150;
			this.ttxt.textColor = 0;
			this.ttxt.textAlign = egret.HorizontalAlign.LEFT;
			this.ttxt.text = d.time;
			this.ttxt.size = 18;
			this.ttxt.x = 250;
			this.ttxt.y = 32;
			d.isme && (d = this.createBitmapByName("myrank"), this.addChild(d));
			this.addChild(this.rtxt);
			this.addChild(this.ntxt);
			this.addChild(this.stxt);
			this.addChild(this.ttxt);
		}
		__extends(f, e);
		f.prototype.onAvatarLoaded = function(c) {
			c = new egret.Bitmap;
			c.texture = this.urlloader.data;
			c.width = 50;
			c.height = 50;
			c.x = 80;
			this.addChild(c);
		};
		f.prototype.createBitmapByName = function(d) {
			var c = new egret.Bitmap;
			d = RES.getRes(d);
			c.texture = d;
			return c;
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.RankItem = a;
	a.prototype.__class__ = "ui.RankItem";
})(ui || (ui = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.width = 480;
			this.height = 960;
			var c = b.createBitmapByName("resultBg");
			c.x = (this.width - c.width) / 2;
			c.y = (GameApp.geth() - 625) / 2 - GameApp.getoffset();
			this.tap_textfeild = new egret.TextField;
			this.tap_textfeild.width = 400;
			this.tap_textfeild.textColor = 16777215;
			this.tap_textfeild.textAlign = egret.HorizontalAlign.CENTER;
			this.tap_textfeild.text = "\u51fb\u6253\u8ddd\u79bb 6542\u7c73";
			this.tap_textfeild.size = 40;
			this.tap_textfeild.strokeColor = 0;
			this.tap_textfeild.stroke = 3;
			this.tap_textfeild.x = (this.width - this.tap_textfeild.width) / 2;
			this.tap_textfeild.y = c.y + 160;
			this.rank_textfeild = new egret.TextField;
			this.rank_textfeild.width = 400;
			this.rank_textfeild.textColor = 3342387;
			this.rank_textfeild.textAlign = egret.HorizontalAlign.CENTER;
			this.rank_textfeild.text = "\u597d\u5389\u5bb3\uff0c\u518d\u6765\u4e00\u6b21\u5427\uff01";
			this.rank_textfeild.size = 24;
			this.rank_textfeild.x = (this.width - this.rank_textfeild.width) / 2;
			this.rank_textfeild.y = this.tap_textfeild.y + 70;
			this.share_btn = b.createBitmapByName("share_btn");
			this.share_btn.x = 240 - this.share_btn.width;
			this.share_btn.y = c.y + c.height + 5;
			this.share_btn.touchEnabled = !0;
			this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doShare, this);
			this.replay_btn = b.createBitmapByName("replay_btn");
			this.replay_btn.x = 250;
			this.replay_btn.y = c.y + c.height + 5;
			this.replay_btn.touchEnabled = !0;
			this.replay_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doRepaly, this);
			this.addChild(c);
			//alert("ffff");
			this.addChild(this.tap_textfeild);
			this.addChild(this.rank_textfeild);
			this.addChild(this.share_btn);
			this.addChild(this.replay_btn);
		}
		__extends(f, d);

		var str0;
		f.prototype.score = function(c) {
			this.tap_textfeild.text = "\u51fb\u6253\u8ddd\u79bb " + c + "\u7c73";
			str0 = "\u51fb\u6253\u8ddd\u79bb " + c + "\u7c73";
			var str = str0;
			//alert(str);
            try{parent.__4399finishgame(str);}catch(e){}
		};
		f.prototype.doShare = function(c) {
			
			var str = str0;
            try{parent.__4399finishgame(str);}catch(e){}
		};
		f.prototype.doRepaly = function(c) {
			this.dispatchEventWith("replayEvent");
		};
		return f;
	}(egret.Sprite);
	b.SuccessPanel = a;
	a.prototype.__class__ = "catgame.SuccessPanel";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.width = 480;
			this.height = 960;
			var c = b.createBitmapByName("resultBg");
			c.x = (this.width - c.width) / 2;
			c.y = (GameApp.geth() - 625) / 2 - GameApp.getoffset();
			this.tap_textfeild = new egret.TextField;
			this.tap_textfeild.width = 400;
			this.tap_textfeild.textColor = 16777215;
			this.tap_textfeild.textAlign = egret.HorizontalAlign.CENTER;
			this.tap_textfeild.text = "\u6ca1\u6709\u6293\u5230\u9e1f\u554a\uff01";
			this.tap_textfeild.size = 40;
			this.tap_textfeild.strokeColor = 0;
			this.tap_textfeild.stroke = 3;
			this.tap_textfeild.x = (this.width - this.tap_textfeild.width) / 2;
			this.tap_textfeild.y = c.y + 160;
			this.rank_textfeild = new egret.TextField;
			this.rank_textfeild.width = 400;
			this.rank_textfeild.textColor = 3342387;
			this.rank_textfeild.textAlign = egret.HorizontalAlign.CENTER;
			this.rank_textfeild.text = "\u522b\u7070\u5fc3\u518d\u6765\u4e00\u6b21\u5427";
			this.rank_textfeild.size = 24;
			this.rank_textfeild.x = (this.width - this.rank_textfeild.width) / 2;
			this.rank_textfeild.y = this.tap_textfeild.y + 70;
			this.share_btn = b.createBitmapByName("share_btn");
			this.share_btn.x = 240 - this.share_btn.width;
			this.share_btn.y = c.y + c.height + 5;
			this.share_btn.touchEnabled = !0;
			this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doShare, this);
			this.replay_btn = b.createBitmapByName("replay_btn");
			this.replay_btn.x = 250;
			this.replay_btn.y = c.y + c.height + 5;
			this.replay_btn.touchEnabled = !0;
			this.replay_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doRepaly, this);
			this.addChild(c);
			//alert("ssss");
			this.addChild(this.tap_textfeild);
			this.addChild(this.rank_textfeild);
			this.addChild(this.share_btn);
			this.addChild(this.replay_btn);
		}
		__extends(f, d);
		f.prototype.doShare = function(c) {
			//this.dispatchEventWith("shareEvent");
		    //	var str = "没有抓到鸟啊";
			//alert("\u6ca1\u6709\u6293\u5230\u9e1f\u554a\uff01" + "\u522b\u7070\u5fc3\u518d\u6765\u4e00\u6b21\u5427");
			var str = "\u6ca1\u6709\u6293\u5230\u9e1f\u554a\uff01";
            try{parent.__4399finishgame(str);}catch(e){}
			
		};
		f.prototype.doRepaly = function(c) {
			this.dispatchEventWith("replayEvent");
		};
		return f;
	}(egret.Sprite);
	b.FailPanel = a;
	a.prototype.__class__ = "catgame.FailPanel";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.draging = !1;
			this.offsetX = this.startX = 0;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}
		__extends(f, d);
		f.prototype.onAddToStage = function(c) {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			this.createGameScene();
		};
		f.prototype.createGameScene = function() {
			this.stageW = this.stage.stageWidth;
			this.stageH = this.stage.stageHeight;
			var c = b.createBitmapByName("bgImage");
			c.touchEnabled = !0;
			c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
			this.addChild(c);
			this.road = new b.Road;
			this.road.addEventListener("fail", this.onfail, this);
			this.road.addEventListener("success", this.onend, this);
			this.road.init();
			this.addChild(this.road);
			this.successPanel = new b.SuccessPanel;
			this.successPanel.addEventListener("shareEvent", this.doShare, this);
			this.successPanel.addEventListener("replayEvent", this.doRestart, this);
			this.failPanel = new b.FailPanel;
			this.failPanel.addEventListener("shareEvent", this.doShare, this);
			this.failPanel.addEventListener("replayEvent", this.doRestart, this);
			this.morebtn = b.createBitmapByName("more_btn");
			this.morebtn.x = (this.stageW - this.morebtn.width) / 2;
			this.morebtn.y = this.stageH - this.morebtn.height - GameApp.getoffset();
			this.morebtn.touchEnabled = !0;
			this.morebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doMore, this);
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		};
		f.prototype.doShare = function(c) {
			var str = str0;
            try{parent.__4399finishgame(str);}catch(e){}
		};
		f.prototype.doRestart = function(c) {
			this.gameStart();
		};
		f.prototype.doMore = function(c) {
			showme();
		};
		f.prototype.gameStart = function() {
			this.successPanel.parent && this.removeChild(this.successPanel);
			this.failPanel.parent && this.removeChild(this.failPanel);
			this.morebtn.parent && this.removeChild(this.morebtn);
			this.road.init();
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		};
		f.prototype.onfail = function(c) {
			this.winstate = 2;
			this.addChild(this.failPanel);
			this.addChild(this.morebtn);
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		};
		f.prototype.onend = function(c) {
			
			oveT++;
	        if (oveT == 2 || oveT == 4) {
	            guanzhu();
	        }
			this.winstate = 1;
			c = this.road.gets();
			this.addChild(this.successPanel);
			this.successPanel.score(c);
			this.addChild(this.morebtn);
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		};
		f.prototype.onTap = function(c) {
			this.road.nextStatus();
		};
		f.prototype.onEnterFrame = function(c) {
			this.road.update();
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.GameContainer = a;
	a.prototype.__class__ = "catgame.GameContainer";
	b.hitTestnew = function(i, j) {
		var g = i.y - 95,
			f = j.y - 16,
			h = j.x;
		if (32 > g - f && Math.abs(i.x - h) < 12 + g - f) {
			return !0;
		}
		h += j.speed;
		g = 0 < i.speedy ? g - 32 : g + 32;
		return 32 > g - f && Math.abs(i.x - h) < 12 + g - f ? !0 : !1;
	};
	b.hitTestfruit = function(j, k, g) {
		var f = j.getBounds(),
			i = k.getBounds(),
			h = g.getBounds();
		f.width -= 20;
		f.height -= 10;
		f.x = j.x - 10;
		f.y = j.y - 10;
		i.width -= 20;
		i.height -= 10;
		f.x = k.x - 10;
		f.y = k.y;
		h.width -= 10;
		h.height -= 10;
		h.x = g.x - 5;
		h.y = g.y - 5;
		return f.intersects(h) || i.intersects(h);
	};
	b.hitTest = function(g, h) {
		var f = g.getBounds(),
			e = h.getBounds();
		f.x = g.x;
		f.y = g.y;
		e.x = h.x;
		e.y = h.y;
		return f.intersects(e);
	};
	b.createBitmapByName = function(e) {
		var f = new egret.Bitmap;
		e = RES.getRes(e);
		f.texture = e;
		return f;
	};
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.max_birds = 4;
			this.offset = -80;
			this.cen_x = 200;
			this.isHit = !1;
			this.gameStatus = 0;
			this.createRoad();
		}
		__extends(f, d);
		f.prototype.createRoad = function() {
			this.bglayer = new b.BgLayer;
			this.addChild(this.bglayer);
			this.frontLayer = new egret.Sprite;
			this.addChild(this.frontLayer);
			this.catLayer = new egret.Sprite;
			this.addChild(this.catLayer);
			var e = b.createBitmapByName("startboard");
			e.x = 470;
			e.y = 462;
			this.banzi = new b.Banzi;
			this.banzi.x = 250;
			this.banzi.y = 700;
			this.friend = new b.Friend;
			this.friend.x = 460;
			this.friend.y = 700;
			this.frontLayer.addChild(e);
			this.frontLayer.addChild(this.banzi);
			this.frontLayer.addChild(this.friend);
			this.bg = new b.Bg;
			this.item = new egret.Bitmap;
			this.sign = new b.Sign;
			this.fruit = new b.Fruit("pg");
			this.cat = new b.Cat;
			this.addChild(this.cat);
			this.shadow = b.createBitmapByName("yingzi");
			this.shadow.visible = !1;
			this.shadow.y = 615;
			this.shadow.scaleX = 0.5;
			this.shadow.scaleY = 0.5;
			this.addChild(this.shadow);
			this.bar = new b.EnergyBar;
			this.bar.x = (480 - this.bar.width) / 2;
			this.bar.y = GameApp.geth() - 10;
			this.addChild(this.bar);
			var e = RES.getRes("effj"),
				c = RES.getRes("eff");
			this.eff_mc = new egret.MovieClip(e, c);
			this.eff_mc.scaleY = 0.6;
			this.eff_mc.scaleX = 0.6;
			this.eff_mc.frameRate = 35;
			this.eff_mc.anchorX = 0.5;
			this.eff_mc.anchorY = 1;
		};
		f.prototype.init = function() {
			this.isHit = this.eff_turn = !1;
			this.item_offset = 220;
			this.sign_offset = -500;
			this.frontLayer.x = 0;
			this.max_birds = 4;
			this.fruit_num = 1;
			this.cat.x = 160;
			this.cat.y = 660;
			this.cat.speedx = 0;
			this.cat.stand();
			this.cat.addEventListener("finish", this.onfinish, this);
			this.shadow.visible = !1;
			this.friend.y = 590;
			this.friend.ready();
			this.banzi.normal();
			this.bar.resetbar();
			this.birds = [];
			this.timer = new egret.Timer(1000);
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.producebird, this);
			this.timer.start();
		};
		f.prototype.testp = function() {};
		f.prototype.producebird = function(e) {
			3 == this.fruit_num % 4 && this.isHit && (this.fruit = this.bg.getfruit(), this.fruit.x = 480, this.fruit.y = 180 + 160 * Math.random(), this.addChildAt(this.fruit, this.numChildren - 3), egret.Tween.get(this.fruit, {
				loop: !0
			}).to({
				rotation: 360
			}, 800));
			this.fruit_num++;
			if (!(this.birds.length >= this.max_birds)) {
				e = b.Bird.produce("bird1");
				var c = 150 + Math.ceil(200 * Math.random());
				e.y = c;
				e.init((660 - c) / 4);
				this.isHit ? 0.5 < Math.random() ? (e.speed = this.bird.speed + Math.ceil(3 * Math.random()), e.x = this.offset) : (e.speed = this.bird.speed - Math.ceil(3 * Math.random()), e.x = 560) : e.x = this.offset;
				this.birds.push(e);
				this.catLayer.addChildAt(e, 0);
			}
		};
		f.prototype.nextStatus = function() {
			switch (this.gameStatus) {
				case 0:
					this.tanqi();
					break;
				case 1:
					console.log("\u8fd8\u6ca1\u6293\u4f4f\u9e1f");
					break;
				case 2:
					this.usePower();
					break;
				case 3:
					console.log("\u6ca1\u6709\u6548\u679c\u4e86");
					break;
				case 4:
					console.log("\u6e38\u620f\u7ed3\u675f");
			}
		};
		f.prototype.update = function() {
			1 == this.gameStatus ? this.updateJump() : 2 == this.gameStatus ? (this.updatecat(), this.updateshadow(), this.bglayer.update()) : 3 == this.gameStatus ? this.slip() : 4 == this.gameStatus && (this.gameStatus = 0, this.clearbirds(), this.isHit || this.cat.falldown());
			4 != this.gameStatus && (this.updatebg(), this.updatebirds());
		};
		f.prototype.tanqi = function() {
			this.friend.readygo();
			this.banzi.tanqi();
			this.cat.jump();
			this.cat.speedx = 10;
			this.cat.speedy = -110;
			this.gameStatus = 1;
		};
		f.prototype.updateJump = function() {
			this.checkhit();
			this.cat.speedy += 10;
			this.cat.y += this.cat.speedy;
			640 <= this.cat.y && (this.gameStatus = 4);
			this.cat.x = this.cat.x < this.cen_x ? this.cat.x + this.cat.speedx : this.cen_x;
		};
		f.prototype.checkhit = function() {
			for (var e = 0; e < this.birds.length; e++) {
				var c = this.birds[e];
				if (b.hitTestnew(this.cat, c)) {
					this.birds.splice(e, 1);
					this.bird = c;
					this.bird.grab();
					this.max_birds -= 1;
					this.catLayer.removeChild(this.bird);
					this.addChild(this.bird);
					this.cat.speedx = c.speed;
					this.cat.speedy = 0 > this.cat.speedy ? -4 : 5;
					this.cat.caught();
					this.cat.x = this.bird.x + 30;
					this.bar.initbar(this.bird.energy);
					this.isHit = this.shadow.visible = !0;
					this.gameStatus = 2;
					break;
				}
			}
		};
		f.prototype.updatecat = function() {
			this.bird.x < this.cen_x && (this.bird.x += 1);
			this.cat.x = this.bird.x + 30;
			this.bird.y += this.cat.speedy;
			this.cat.y = this.bird.y + 155;
			630 < this.cat.y ? (this.cat.dead(), this.bird.land(), this.shadow.visible = !1, this.gameStatus = 3) : (5 > this.cat.speedy && (this.cat.speedy += 0.1), -0.4 < this.cat.speedy && this.eff_turn && (this.bird.onclick(!1), this.cat.speedx = this.bird.speed, this.eff_turn = !1), 0 < this.bird.energy && (this.bird.energy += 0.05, this.bar.change(-0.05)), this.eff_mc.parent && (this.eff_mc.y = this.bird.y + 90), this.fruit.parent && this.fruit.x < this.cen_x + 60 && this.fruit.x > this.cen_x - 60 && this.checkeat());
		};
		f.prototype.checkeat = function() {
			if (b.hitTestfruit(this.cat, this.bird, this.fruit)) {
				var c = this.fruit.gete();
				this.bird.energy += c;
				this.bar.change(0 - c);
				this.removeChild(this.fruit);
				egret.Tween.removeTweens(this.fruit);
				this.eat();
			}
		};
		f.prototype.eat = function() {
			this.eff_mc.x = this.bird.x + 30;
			this.eff_mc.y = this.bird.y + 90;
			this.addChild(this.eff_mc);
			this.eff_mc.addEventListener("finish", this.eatfinish, this);
			this.eff_mc.gotoAndPlay("shuoguo_texiao");
		};
		f.prototype.eatfinish = function(c) {
			this.eff_mc.stop();
			this.eff_mc.removeEventListener("finish", this.onfinish, this);
			this.removeChild(this.eff_mc);
		};
		f.prototype.updateshadow = function() {
			this.shadow.x = this.cat.x - 40;
			this.shadow.scaleX = this.cat.y / this.shadow.y;
			this.shadow.scaleY = this.cat.y / this.shadow.y;
		};
		f.prototype.updatebg = function() {
			this.frontLayer.x -= 2 * this.cat.speedx;
			this.frontLayer.x < this.item_offset - 475 && (this.item_offset -= 970, this.item.parent && (this.frontLayer.removeChild(this.item), this.bg.backitem(this.item)), this.item = this.bg.getitem(), this.item.x = 0 - this.item_offset, this.frontLayer.addChildAt(this.item, 0));
			this.frontLayer.x < this.sign_offset - 100 && (this.sign_offset -= 600, this.sign.parent && (this.frontLayer.removeChild(this.sign), this.bg.backsign(this.sign)), this.sign = this.bg.getsign(), this.sign.settxt((0 - this.sign_offset - 500) / 6), this.sign.x = 0 - this.sign_offset, this.frontLayer.addChild(this.sign));
			this.fruit.parent && (this.fruit.x -= 2 * this.cat.speedx, this.fruit.x < 0 - this.fruit.width && (this.removeChild(this.fruit), egret.Tween.removeTweens(this.fruit)));
		};
		f.prototype.updatebirds = function() {
			for (var e = this.birds.length; 0 < e; e--) {
				var c = this.birds[e - 1];
				c.x += c.speed - this.cat.speedx;
				c.x < this.offset ? (this.birds.splice(e - 1, 1), this.catLayer.removeChild(c), b.Bird.reclaim(c, "bird1")) : 560 < c.x && (this.birds.splice(e - 1, 1), this.catLayer.removeChild(c), b.Bird.reclaim(c, "bird1"));
			}
		};
		f.prototype.slip = function() {
			570 > this.bird.y ? this.bird.y += this.cat.speedy : (this.bird.speed -= 0.32, this.bird.x -= this.bird.speed, 0 >= this.bird.speed && this.bird.tire());
			0 >= this.cat.speedx ? (this.cat.speedx = 0, this.cat.catstop(), this.gameStatus = 4) : this.cat.speedx -= 0.16;
		};
		f.prototype.onfinish = function(c) {
			this.isHit ? (this.bird.parent.removeChild(this.bird), this.dispatchEventWith("success")) : this.dispatchEventWith("fail");
			this.cat.removeEventListener("finish", this.onfinish, this);
		};
		f.prototype.clearbirds = function() {
			for (var e = this.birds.length; 0 < e; e--) {
				var c = this.birds[e - 1];
				this.birds.splice(e - 1, 1);
				this.catLayer.removeChild(c);
				b.Bird.reclaim(c, "bird1");
			}
			this.fruit.parent && (this.removeChild(this.fruit), egret.Tween.removeTweens(this.fruit));
			this.eff_mc.parent && this.removeChild(this.eff_mc);
			this.timer.removeEventListener(egret.TimerEvent.TIMER, this.producebird, this);
			this.timer.stop();
		};
		f.prototype.usePower = function() {
			var c;
			0 < this.bird.energy && (c = 15 > this.bird.energy ? this.bird.energy : 15, this.bird.energy -= c, this.bird.onclick(!0), this.cat.speedx = this.bird.speed + 2, this.cat.speedy = -4 * c / 15, this.eff_turn = !0, this.bar.change(c));
		};
		f.prototype.gets = function() {
			var c = Math.ceil((-295 - this.frontLayer.x) / 6 * 100);
			return c = c / 100 + Math.floor((this.cat.x - this.cen_x) / 6);
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.Road = a;
	a.prototype.__class__ = "catgame.Road";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			var c = b.createBitmapByName("board");
			this.addChild(c);
			this.txt = new egret.TextField;
			this.txt.y = 30;
			this.txt.x = 2;
			this.txt.width = 95;
			this.txt.height = 50;
			this.txt.size = 20;
			this.txt.textColor = 16777215;
			this.txt.textAlign = "center";
			this.txt.strokeColor = 0;
			this.txt.stroke = 2;
			this.txt.text = "M";
			this.addChild(this.txt);
		}
		__extends(f, d);
		f.prototype.settxt = function(c) {
			this.txt.text = c + "M";
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.Sign = a;
	a.prototype.__class__ = "catgame.Sign";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			var d = RES.getRes("banzi_json"),
				c = RES.getRes("banzi_png");
			this.mc = new egret.MovieClip(d, c);
			this.mc.frameRate = 35;
			this.anchorX = 0.5;
			this.anchorY = 1;
			this.addChild(this.mc);
			this.normal();
		}
		__extends(f, e);
		f.prototype.normal = function() {
			this.mc.gotoAndPlay("normal");
		};
		f.prototype.tanqi = function() {
			this.mc.gotoAndPlay("tanqi");
			this.mc.addEventListener("finish", this.tanend, this);
		};
		f.prototype.tanend = function(c) {
			this.mc.removeEventListener("finish", this.tanend, this);
			this.mc.gotoAndPlay("tan");
			this.mc.stop();
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.Banzi = a;
	a.prototype.__class__ = "catgame.Banzi";
})(catgame || (catgame = {}));
(function(b) {
	var a = function() {
		function c() {
			this.bgitem1 = [];
			this.bgitem2 = [];
			this.bgsigns = [];
			this.fruits = [];
			this.isone = !0;
			this.init();
		}
		c.prototype.init = function() {
			var d = new b.Sign;
			d.y = 482;
			this.bgsigns.push(d);
			d = b.createBitmapByName("grass");
			d.y = 500;
			this.bgitem1.push(d);
			d = b.createBitmapByName("tree");
			d.y = 429;
			this.bgitem1.push(d);
			d = b.createBitmapByName("tree2");
			d.y = 326;
			this.bgitem1.push(d);
			d = b.createBitmapByName("trash1");
			d.y = 520;
			this.bgitem1.push(d);
			d = b.createBitmapByName("trash2");
			d.y = 520;
			this.bgitem1.push(d);
			this.maxitem = this.bgitem1.length;
			d = new b.Fruit("pg");
			d.sete(5);
			this.fruits.push(d);
			d = new b.Fruit("xj");
			d.sete(8);
			d.scaleX = 0.8;
			d.scaleY = 0.8;
			this.fruits.push(d);
			d = new b.Fruit("xg");
			d.sete(10);
			d.scaleX = 0.8;
			d.scaleY = 0.8;
			this.fruits.push(d);
			d = new b.Fruit("cz");
			d.sete(6);
			this.fruits.push(d);
		};
		c.prototype.getitem = function() {
			var e, d;
			this.isone ? (d = Math.floor(Math.random() * this.bgitem1.length), e = this.bgitem1[d], this.bgitem1.splice(d, 1), 0 == this.bgitem1.length && (this.isone = !1)) : (d = Math.floor(Math.random() * this.bgitem2.length), e = this.bgitem2[d], this.bgitem2.splice(d, 1), 0 == this.bgitem2.length && (this.isone = !0));
			return e;
		};
		c.prototype.backitem = function(d) {
			this.isone ? this.bgitem2.push(d) : this.bgitem1.push(d);
		};
		c.prototype.getsign = function() {
			return this.bgsigns.pop();
		};
		c.prototype.backsign = function(d) {
			this.bgsigns.push(d);
		};
		c.prototype.getfruit = function() {
			var d = Math.floor(Math.random() * this.fruits.length);
			return this.fruits[d];
		};
		return c;
	}();
	b.Bg = a;
	a.prototype.__class__ = "catgame.Bg";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.offsetX = -255;
			this.offsetY = 280;
			this.farhill = b.createBitmapByName("farHill");
			this.farhill.x = this.offsetX;
			this.farhill.y = this.offsetY;
			this.addChild(this.farhill);
			this.hill = b.createBitmapByName("hill");
			this.hill.y = 165 + this.offsetY;
			this.hill.x = 150 + this.offsetX;
			this.addChild(this.hill);
			this.cloud1 = b.createBitmapByName("cloud1");
			this.cloud1.x = 100;
			this.cloud1.y = 100;
			this.addChild(this.cloud1);
			this.cloud2 = b.createBitmapByName("cloud2");
			this.cloud2.x = 300;
			this.cloud2.y = 120;
			this.addChild(this.cloud2);
		}
		__extends(f, d);
		f.prototype.update = function() {
			this.cloud1.x -= 0.4;
			this.cloud2.x -= 0.4;
			this.hill.x -= 0.2;
			this.farhill.x -= 0.1;
			this.cloud1.x < 0 - this.cloud1.width && (this.cloud1.x = 480, this.cloud1.y = 40 * Math.random() + 10 - GameApp.getoffset());
			this.cloud2.x < 0 - this.cloud2.width && (this.cloud2.x = 480, this.cloud2.y = 40 * Math.random() + 10 - GameApp.getoffset());
			this.hill.x < 0 - this.hill.width && (this.hill.x = 480);
			this.farhill.x < 0 - this.farhill.width && (this.farhill.x = 480);
		};
		return f;
	}(egret.Sprite);
	b.BgLayer = a;
	a.prototype.__class__ = "catgame.BgLayer";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(d) {
		function f() {
			d.call(this);
			this.curr_num = 1;
			var c = b.createBitmapByName("pwbg");
			this.addChild(c);
			this.energybar = b.createBitmapByName("pwu");
			this.addChild(this.energybar);
		}
		__extends(f, d);
		f.prototype.initbar = function(c) {
			this.max_num = c;
		};
		f.prototype.resetbar = function() {
			this.curr_num = this.energybar.scaleX = 1;
		};
		f.prototype.change = function(c) {
			this.curr_num -= c / this.max_num;
			this.curr_num = 1 < this.curr_num ? 1 : this.curr_num;
			this.curr_num = 0 > this.curr_num ? 0 : this.curr_num;
			this.changebar();
		};
		f.prototype.changebar = function() {
			this.energybar.scaleX = this.curr_num;
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.EnergyBar = a;
	a.prototype.__class__ = "catgame.EnergyBar";
})(catgame || (catgame = {}));
__extends = this.__extends || function(g, b) {
	function a() {
		this.constructor = g;
	}
	for (var h in b) {
		b.hasOwnProperty(h) && (g[h] = b[h]);
	}
	a.prototype = b.prototype;
	g.prototype = new a;
};
(function(b) {
	var a = function(e) {
		function f() {
			e.call(this);
			var d = RES.getRes("friend_json"),
				c = RES.getRes("friend_png");
			this.friendmc = new egret.MovieClip(d, c);
			this.friendmc.frameRate = 35;
			this.friendmc.y = 110;
			this.addChild(this.friendmc);
			this.anchorX = 0.5;
			this.anchorY = 1;
		}
		__extends(f, e);
		f.prototype.stand = function() {
			this.friendmc.y = 0;
			this.friendmc.gotoAndPlay("stand");
		};
		f.prototype.ready = function() {
			this.friendmc.gotoAndPlay("ready");
			this.friendmc.addEventListener("finish", this.readyEnd, this);
		};
		f.prototype.readyEnd = function(c) {
			this.friendmc.removeEventListener("finish", this.readyEnd, this);
			this.friendmc.gotoAndPlay("up");
			this.friendmc.stop();
		};
		f.prototype.readygo = function() {
			this.friendmc.gotoAndPlay("go");
			this.friendmc.addEventListener("finish", this.goend, this);
		};
		f.prototype.goend = function(c) {
			this.friendmc.removeEventListener("finish", this.goend, this);
			this.friendmc.gotoAndPlay("end");
			this.friendmc.stop();
		};
		return f;
	}(egret.DisplayObjectContainer);
	b.Friend = a;
	a.prototype.__class__ = "catgame.Friend";
})(catgame || (catgame = {}));