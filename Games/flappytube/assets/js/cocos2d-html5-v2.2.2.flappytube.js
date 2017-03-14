function ClassManager() {
    return arguments.callee.name || arguments.callee.toString().match(/^function ([^(]+)/)[1]
}
var cc = cc || {};
ClassManager.id = 0 | 998 * Math.random(),
ClassManager.instanceId = 0 | 998 * Math.random(),
ClassManager.compileSuper = function(e, t, n) {
    for (var r = e.toString(), i = r.indexOf("("), s = r.indexOf(")"), i = r.substring(i + 1, s), i = i.trim(), s = r.indexOf("{"), o = r.lastIndexOf("}"), r = r.substring(s + 1, o); - 1 != r.indexOf("this._super");) var s = r.indexOf("this._super"),
    o = r.indexOf("(", s),
    u = r.indexOf(")", o),
    u = r.substring(o + 1, u),
    u = (u = u.trim()) ? ",": "",
    a = arguments.callee.ClassManager(),
    r = r.substring(0, s) + a + "[" + n + "]." + t + ".call(this" + u + r.substring(o + 1);
    return Function(i, r)
},
ClassManager.compileSuper.ClassManager = ClassManager,
ClassManager.getNewID = function() {
    return this.id++
},
ClassManager.getNewInstanceId = function() {
    return this.instanceId++
},
function() {
    var e = /\b_super\b/,
    t = document.ccConfig && document.ccConfig.CLASS_RELEASE_MODE ? document.ccConfig.CLASS_RELEASE_MODE: null;
    t && console.log("release Mode"),
    cc.Class = function() {},
    cc.Class.extend = function(n) {
        function r() {
            this.__instanceId = ClassManager.getNewInstanceId(),
            this.ctor && this.ctor.apply(this, arguments)
        }
        var i = this.prototype,
        s = Object.create(i),
        o = ClassManager.getNewID();
        ClassManager[o] = i;
        var u = {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        a;
        for (a in n) t && "function" == typeof n[a] && "function" == typeof i[a] && e.test(n[a]) ? (u.value = ClassManager.compileSuper(n[a], a, o), Object.defineProperty(s, a, u)) : "function" == typeof n[a] && "function" == typeof i[a] && e.test(n[a]) ? (u.value = function(e, t) {
            return function() {
                var n = this._super;
                this._super = i[e];
                var r = t.apply(this, arguments);
                return this._super = n,
                r
            }
        } (a, n[a]), Object.defineProperty(s, a, u)) : "function" == typeof n[a] ? (u.value = n[a], Object.defineProperty(s, a, u)) : s[a] = n[a];
        return s.__instanceId = null,
        r.id = o,
        u.value = o,
        Object.defineProperty(s, "__pid", u),
        r.prototype = s,
        u.value = r,
        Object.defineProperty(r.prototype, "constructor", u),
        r.extend = arguments.callee,
        r.implement = function(e) {
            for (var t in e) s[t] = e[t]
        },
        r
    },
    Function.prototype.bind = Function.prototype.bind ||
    function(e) {
        var t = this;
        return function() {
            var n = Array.prototype.slice.call(arguments);
            return t.apply(e || null, n)
        }
    }
} (),
cc.inherits = function(e, t) {
    function n() {}
    n.prototype = t.prototype,
    e.superClass_ = t.prototype,
    e.prototype = new n,
    e.prototype.constructor = e
},
cc.base = function(e, t, n) {
    var r = arguments.callee.caller;
    if (r.superClass_) return ret = r.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1));
    for (var i = Array.prototype.slice.call(arguments, 2), s = !1, o = e.constructor; o; o = o.superClass_ && o.superClass_.constructor) if (o.prototype[t] === r) s = !0;
    else if (s) return o.prototype[t].apply(e, i);
    if (e[t] === r) return e.constructor.prototype[t].apply(e, i);
    throw Error("cc.base called from a method of one name to a method of a different name")
},
cc.concatObjectProperties = function(e, t) {
    e || (e = {});
    for (var n in t) e[n] = t[n];
    return e
},
cc.Point = function(e, t) {
    this.x = e || 0,
    this.y = t || 0
},
cc._PointConst = function(e, t) {
    this._x = e || 0,
    this._y = t || 0,
    this.setX = function(e) {
        this._x = e
    },
    this.setY = function(e) {
        this._y = e
    }
},
cc._pConst = function(e, t) {
    return new cc._PointConst(e, t)
},
Object.defineProperties(cc._PointConst.prototype, {
    x: {
        get: function() {
            return this._x
        },
        set: function() {
            console.warn("Warning of _PointConst: Modification to const or private property is forbidden")
        },
        enumerable: !0
    },
    y: {
        get: function() {
            return this._y
        },
        set: function() {
            console.warn("Warning of _PointConst: Modification to const or private property is forbidden")
        },
        enumerable: !0
    }
}),
cc.PointMake = function(e, t) {
    return cc.log("cc.PointMake will be deprecated sooner or later. Use cc.p instead."),
    new cc.Point(e, t)
},
cc.p = function(e, t) {
    return {
        x: e,
        y: t
    }
},
cc._p = cc.p,
cc.PointZero = function() {
    return cc.p(0, 0)
},
cc.pointEqualToPoint = function(e, t) {
    return e && t ? e.x === t.x && e.y === t.y: !1
},
cc.Size = function(e, t) {
    this.width = e || 0,
    this.height = t || 0
},
cc._SizeConst = function(e, t) {
    this._width = e || 0,
    this._height = t || 0,
    this.setWidth = function(e) {
        this._width = e
    },
    this.setHeight = function(e) {
        this._height = e
    }
},
cc._sizeConst = function(e, t) {
    return new cc._SizeConst(e, t)
},
Object.defineProperties(cc._SizeConst.prototype, {
    width: {
        get: function() {
            return this._width
        },
        set: function() {
            console.warn("Warning of _SizeConst: Modification to const or private property is forbidden")
        },
        enumerable: !0
    },
    height: {
        get: function() {
            return this._height
        },
        set: function() {
            console.warn("Warning of _SizeConst: Modification to const or private property is forbidden")
        },
        enumerable: !0
    }
}),
cc.SizeMake = function(e, t) {
    return cc.log("cc.SizeMake will be deprecated sooner or later. Use cc.size instead."),
    cc.size(e, t)
},
cc.size = function(e, t) {
    return {
        width: e,
        height: t
    }
},
cc._size = cc.size,
cc.SizeZero = function() {
    return cc.size(0, 0)
},
cc._zeroConsts = {
    pointZero: cc._pConst(0, 0),
    sizeZero: cc._sizeConst(0, 0)
},
Object.defineProperties(cc, {
    POINT_ZERO: {
        get: function() {
            return cc._zeroConsts.pointZero
        }
    },
    SIZE_ZERO: {
        get: function() {
            return cc._zeroConsts.sizeZero
        }
    },
    RECT_ZERO: {
        get: function() {
            return cc.rect(0, 0, 0, 0)
        }
    }
}),
cc.sizeEqualToSize = function(e, t) {
    return e && t ? e.width == t.width && e.height == t.height: !1
},
cc.Rect = function(e, t, n, r) {
    var i = arguments.length;
    if (4 === i) this._origin = new cc.Point(e || 0, t || 0),
    this._size = new cc.Size(n || 0, r || 0);
    else if (1 === i) this._origin = new cc.Point(e._origin.x, e._origin.y),
    this._size = new cc.Size(e._size.width, e._size.height);
    else if (0 === i) this._origin = new cc.Point(0, 0),
    this._size = new cc.Size(0, 0);
    else {
        if (2 !== i) throw "unknown argument type";
        this._origin = new cc.Point(e.x, e.y),
        this._size = new cc.Size(t.width, t.height)
    }
},
cc.RectMake = function(e, t, n, r) {
    return cc.log("cc.RectMake will be deprecated sooner or later. Use cc.rect instead."),
    cc.rect(e, t, n, r)
},
cc.rect = function(e, t, n, r) {
    var i = arguments.length;
    if (0 === i) return new cc.Rect(0, 0, 0, 0);
    if (1 === i) return new cc.Rect(e.x, e.y, e.width, e.height);
    if (2 === i) return new cc.Rect(e.x, e.y, t.width, t.height);
    if (4 === i) return new cc.Rect(e, t, n, r);
    throw "unknown argument type"
},
cc._rect = cc.rect,
cc.RectZero = function() {
    return cc.rect(0, 0, 0, 0)
},
cc.rectEqualToRect = function(e, t) {
    return e && t ? cc.pointEqualToPoint(e._origin, t._origin) && cc.sizeEqualToSize(e._size, t._size) : !1
},
cc._rectEqualToZero = function(e) {
    return e ? 0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height: !1
},
cc.rectContainsRect = function(e, t) {
    return e && t ? !(e.x >= t.x || e.y >= t.y || e.x + e.width <= t.x + t.width || e.y + e.height <= t.y + t.height) : !1
},
cc.rectGetMaxX = function(e) {
    return e.x + e.width
},
cc.rectGetMidX = function(e) {
    return e.x + e.width / 2
},
cc.rectGetMinX = function(e) {
    return e.x
},
cc.rectGetMaxY = function(e) {
    return e.y + e.height
},
cc.rectGetMidY = function(e) {
    return e.y + e.height / 2
},
cc.rectGetMinY = function(e) {
    return e.y
},
cc.rectContainsPoint = function(e, t) {
    return t.x >= cc.rectGetMinX(e) && t.x <= cc.rectGetMaxX(e) && t.y >= cc.rectGetMinY(e) && t.y <= cc.rectGetMaxY(e)
},
cc.rectIntersectsRect = function(e, t) {
    return ! (cc.rectGetMaxX(e) < cc.rectGetMinX(t) || cc.rectGetMaxX(t) < cc.rectGetMinX(e) || cc.rectGetMaxY(e) < cc.rectGetMinY(t) || cc.rectGetMaxY(t) < cc.rectGetMinY(e))
},
cc.rectOverlapsRect = function(e, t) {
    return ! (e.x + e.width < t.x || t.x + t.width < e.x || e.y + e.height < t.y || t.y + t.height < e.y)
},
cc.rectUnion = function(e, t) {
    var n = cc.rect(0, 0, 0, 0);
    return n.x = Math.min(e.x, t.x),
    n.y = Math.min(e.y, t.y),
    n.width = Math.max(e.x + e.width, t.x + t.width) - n.x,
    n.height = Math.max(e.y + e.height, t.y + t.height) - n.y,
    n
},
cc.rectIntersection = function(e, t) {
    var n = cc.rect(Math.max(cc.rectGetMinX(e), cc.rectGetMinX(t)), Math.max(cc.rectGetMinY(e), cc.rectGetMinY(t)), 0, 0);
    return n.width = Math.min(cc.rectGetMaxX(e), cc.rectGetMaxX(t)) - cc.rectGetMinX(n),
    n.height = Math.min(cc.rectGetMaxY(e), cc.rectGetMaxY(t)) - cc.rectGetMinY(n),
    n
},
cc.Rect.prototype.getX = function() {
    return this._origin.x
},
cc.Rect.prototype.setX = function(e) {
    this._origin.x = e
},
cc.Rect.prototype.getY = function() {
    return this._origin.y
},
cc.Rect.prototype.setY = function(e) {
    this._origin.y = e
},
cc.Rect.prototype.getWidth = function() {
    return this._size.width
},
cc.Rect.prototype.setWidth = function(e) {
    this._size.width = e
},
cc.Rect.prototype.getHeight = function() {
    return this._size.height
},
cc.Rect.prototype.setHeight = function(e) {
    this._size.height = e
},
Object.defineProperties(cc.Rect.prototype, {
    x: {
        get: function() {
            return this.getX()
        },
        set: function(e) {
            this.setX(e)
        },
        enumerable: !0,
        configurable: !0
    },
    y: {
        get: function() {
            return this.getY()
        },
        set: function(e) {
            this.setY(e)
        },
        enumerable: !0,
        configurable: !0
    },
    width: {
        get: function() {
            return this.getWidth()
        },
        set: function(e) {
            this.setWidth(e)
        },
        enumerable: !0,
        configurable: !0
    },
    height: {
        get: function() {
            return this.getHeight()
        },
        set: function(e) {
            this.setHeight(e)
        },
        enumerable: !0,
        configurable: !0
    }
});
var sys = sys || {};
try {
    sys.localStorage = window.localStorage,
    window.localStorage.setItem("storage", ""),
    window.localStorage.removeItem("storage")
} catch(e$$12) {
    "SECURITY_ERR" !== e$$12.name && "QuotaExceededError" !== e$$12.name || console.log("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"),
    sys.localStorage = function() {}
}
Object.defineProperties(sys, {
    capabilities: {
        get: function() {
            var e = {
                canvas: !0
            };
            cc.Browser.supportWebGL && (e.opengl = !0),
            "ontouchstart" in document.documentElement || window.navigator.msPointerEnabled ? e.touches = !0 : "onmouseup" in document.documentElement && (e.mouse = !0),
            "onkeyup" in document.documentElement && (e.keyboard = !0);
            if (window.DeviceMotionEvent || window.DeviceOrientationEvent) e.accelerometer = !0;
            return e
        },
        enumerable: !0,
        configurable: !0
    },
    os: {
        get: function() {
            var e = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? !0 : !1,
            t = navigator.userAgent.match(/android/i) || navigator.platform.match(/android/i) ? !0 : !1,
            n = navigator.appVersion;
            return - 1 != navigator.appVersion.indexOf("Win") ? n = "Windows": -1 != navigator.appVersion.indexOf("Mac") ? n = "OS X": -1 != navigator.appVersion.indexOf("X11") ? n = "UNIX": -1 != navigator.appVersion.indexOf("Linux") ? n = "Linux": e ? n = "iOS": t && (n = "Android"),
            n
        },
        enumerable: !0,
        configurable: !0
    },
    platform: {
        get: function() {
            return "browser"
        },
        enumerable: !0,
        configurable: !0
    },
    version: {
        get: function() {
            return cc.ENGINE_VERSION
        },
        enumerable: !0,
        configurable: !0
    }
}),
sys.garbageCollect = function() {},
sys.dumpRoot = function() {},
sys.restartVM = function() {},
cc.ENGINE_VERSION = "Cocos2d-html5-v2.2.2",
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0,
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0),
cc.DIRECTOR_FPS_INTERVAL = .5,
cc.COCOSNODE_RENDER_SUBPIXEL = 1,
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1,
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0,
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0,
cc.TEXTURE_ATLAS_USE_VAO = 0,
cc.TEXTURE_NPOT_SUPPORT = 0,
cc.RETINA_DISPLAY_SUPPORT = 1,
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd",
cc.USE_LA88_LABELS = 1,
cc.SPRITE_DEBUG_DRAW = 0,
cc.SPRITEBATCHNODE_DEBUG_DRAW = 0,
cc.LABELBMFONT_DEBUG_DRAW = 0,
cc.LABELATLAS_DEBUG_DRAW = 0,
cc.IS_RETINA_DISPLAY_SUPPORTED = 1,
cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas",
cc.config = {
    platform: sys.platform
},
cc.dumpConfig = function() {
    for (var e in sys) cc.log(e + " = " + sys[e])
},
cc.ENABLE_STACKABLE_ACTIONS = 1,
cc.ENABLE_GL_STATE_CACHE = 1,
cc.create3DContext = function(e, t) {
    for (var n = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], r = null, i = 0; i < n.length; ++i) {
        try {
            r = e.getContext(n[i], t)
        } catch(s) {}
        if (r) break
    }
    return r
},
cc.Browser = {},
cc.Browser.webglWhiteList = ["baidubrowser", "opera", "firefox", "chrome", "safari"],
function() {
    cc.Browser.ua = navigator.userAgent.toLowerCase(),
    cc.Browser.platform = navigator.platform.toLowerCase(),
    cc.Browser.isMobile = -1 != cc.Browser.ua.indexOf("mobile") || -1 != cc.Browser.ua.indexOf("android"),
    cc.Browser.type = function() {
        var e = cc.Browser.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || cc.Browser.ua.match(/chrome|safari/);
        return e && 0 < e.length ? (e = e[0], "micromessenger" == e ? "wechat": e) : "unknow"
    } (),
    cc.Browser.mode = "ie" == cc.Browser.type && document.documentMode,
    document.ccConfig || (document.ccConfig = {}),
    cc._userRenderMode = parseInt(document.ccConfig.renderMode) || 0;
    var e = -1 == cc.Browser.webglWhiteList.indexOf(cc.Browser.type);
    1 === cc._userRenderMode || 0 === cc._userRenderMode && (cc.Browser.isMobile || e) ? cc.Browser.supportWebGL = !1 : (cc.Browser.supportWebGL = null != window.WebGLRenderingContext, e = document.createElement("Canvas"), e = cc.create3DContext(e, {
        stencil: !0,
        preserveDrawingBuffer: !0
    }), cc.Browser.supportWebGL = null != e),
    2 !== cc._userRenderMode || cc.Browser.supportWebGL || (cc.__renderDoesnotSupport = !0);
    var e = cc.Browser,
    t;
    try {
        t = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext) ? !0 : !1
    } catch(n) {
        t = !1
    }
    e.supportWebAudio = t,
    cc.Browser.openURL = function(e) {
        if (this.isMobile) {
            var t = cc.Director.getInstance().getWinSize(),
            n = t.width + "px",
            t = t.height + "px",
            r = cc.$new("div");
            r.style.backgroundColor = "#ffffff",
            r.style.width = n,
            r.style.height = t,
            r.style.zindex = 1e3,
            r.style.position = "absolute",
            r.style.top = "0px",
            r.style.left = "0px",
            r.id = "cocos2d-browser";
            var i = cc.$new("iframe");
            i.src = e,
            i.style.width = n,
            i.style.height = t,
            i.setAttribute("frameborder", "no"),
            i.setAttribute("scrolling", "no"),
            r.appendChild(i),
            i.onload = function() {
                var e = document.createElement("img");
                e.src = "",
                r.appendChild(e),
                e.style.zindex = 1e3,
                e.style.position = "absolute",
                e.style.bottom = "10px",
                e.style.right = "10px",
                e.onclick = function() {
                    r.remove()
                }
            },
            (e = document.getElementById(document.ccConfig.tag).parentNode) && e.appendChild(r)
        } else window.open(e)
    }
} (),
cc.RenderDoesnotSupport = function() {
    return "undefined" === cc.__renderDoesnotSupport ? !1 : cc.__renderDoesnotSupport
},
cc.$ = function(e) {
    var t = this == cc ? document: this;
    if (e = e instanceof HTMLElement ? e: t.querySelector(e)) e.find = e.find || cc.$,
    e.hasClass = e.hasClass ||
    function(e) {
        return this.className.match(RegExp("(\\s|^)" + e + "(\\s|$)"))
    },
    e.addClass = e.addClass ||
    function(e) {
        return this.hasClass(e) || (this.className && (this.className += " "), this.className += e),
        this
    },
    e.removeClass = e.removeClass ||
    function(e) {
        return this.hasClass(e) && (this.className = this.className.replace(e, "")),
        this
    },
    e.remove = e.remove ||
    function() {
        return this.parentNode && this.parentNode.removeChild(this),
        this
    },
    e.appendTo = e.appendTo ||
    function(e) {
        return e.appendChild(this),
        this
    },
    e.prependTo = e.prependTo ||
    function(e) {
        return e.childNodes[0] ? e.insertBefore(this, e.childNodes[0]) : e.appendChild(this),
        this
    },
    e.transforms = e.transforms ||
    function() {
        return this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew),
        this
    },
    e.position = e.position || {
        x: 0,
        y: 0
    },
    e.rotation = e.rotation || 0,
    e.scale = e.scale || {
        x: 1,
        y: 1
    },
    e.skew = e.skew || {
        x: 0,
        y: 0
    },
    e.translates = function(e, t) {
        return this.position.x = e,
        this.position.y = t,
        this.transforms(),
        this
    },
    e.rotate = function(e) {
        return this.rotation = e,
        this.transforms(),
        this
    },
    e.resize = function(e, t) {
        return this.scale.x = e,
        this.scale.y = t,
        this.transforms(),
        this
    },
    e.setSkew = function(e, t) {
        return this.skew.x = e,
        this.skew.y = t,
        this.transforms(),
        this
    };
    return e
};
switch (cc.Browser.type) {
case "firefox":
    cc.$.pfx = "Moz",
    cc.$.hd = !0;
    break;
case "chrome":
case "safari":
    cc.$.pfx = "webkit",
    cc.$.hd = !0;
    break;
case "opera":
    cc.$.pfx = "O",
    cc.$.hd = !1;
    break;
case "ie":
    cc.$.pfx = "ms",
    cc.$.hd = !1;
    break;
default:
    cc.$.pfx = "webkit",
    cc.$.hd = !0
}
cc.$.trans = cc.$.pfx + "Transform",
cc.$.translate = cc.$.hd ?
function(e) {
    return "translate3d(" + e.x + "px, " + e.y + "px, 0) "
}: function(e) {
    return "translate(" + e.x + "px, " + e.y + "px) "
},
cc.$.rotate = cc.$.hd ?
function(e) {
    return "rotateZ(" + e + "deg) "
}: function(e) {
    return "rotate(" + e + "deg) "
},
cc.$.scale = function(e) {
    return "scale(" + e.x + ", " + e.y + ") "
},
cc.$.skew = function(e) {
    return "skewX(" + -e.x + "deg) skewY(" + e.y + "deg)"
},
cc.$new = function(e) {
    return cc.$(document.createElement(e))
},
cc.$.findpos = function(e) {
    var t = 0,
    n = 0;
    do t += e.offsetLeft,
    n += e.offsetTop;
    while (e = e.offsetParent);
    return {
        x: t,
        y: n
    }
},
cc.clone = function(e) {
    var t = e.constructor ? new e.constructor: {},
    n;
    for (n in e) {
        var r = e[n];
        t[n] = "object" != typeof r || !r || r instanceof cc.Node || r instanceof HTMLElement ? r: cc.clone(r)
    }
    return t
},
cc.associateWithNative = function(e, t) {},
cc.IS_SHOW_DEBUG_ON_PAGE = cc.IS_SHOW_DEBUG_ON_PAGE || !1,
cc._logToWebPage = function(e) {
    var t = document.getElementById("logInfoList");
    if (!t) {
        var n = document.createElement("Div");
        n.setAttribute("id", "logInfoDiv"),
        cc.canvas.parentNode.appendChild(n),
        n.setAttribute("width", "200"),
        n.setAttribute("height", cc.canvas.height),
        n.style.zIndex = "99999",
        n.style.position = "absolute",
        n.style.top = "0",
        n.style.left = "0",
        t = document.createElement("ul"),
        n.appendChild(t),
        t.setAttribute("id", "logInfoList"),
        t.style.height = cc.canvas.height + "px",
        t.style.color = "#fff",
        t.style.textAlign = "left",
        t.style.listStyle = "disc outside",
        t.style.fontSize = "12px",
        t.style.fontFamily = "arial",
        t.style.padding = "0 0 0 20px",
        t.style.margin = "0",
        t.style.textShadow = "0 0 3px #000",
        t.style.zIndex = "99998",
        t.style.position = "absolute",
        t.style.top = "0",
        t.style.left = "0",
        t.style.overflowY = "hidden";
        var r = document.createElement("Div");
        n.appendChild(r),
        r.style.width = "200px",
        r.style.height = cc.canvas.height + "px",
        r.style.opacity = "0.1",
        r.style.background = "#fff",
        r.style.border = "1px solid #dfdfdf",
        r.style.borderRadius = "8px"
    }
    n = document.createElement("li"),
    n.innerHTML = e,
    0 == t.childNodes.length ? t.appendChild(n) : t.insertBefore(n, t.childNodes[0])
},
cc.log = function(e) {
    cc.IS_SHOW_DEBUG_ON_PAGE ? cc._logToWebPage(e) : console.log.apply(console, arguments)
},
cc.MessageBox = function(e) {
    console.log(e)
},
cc.Assert = function(e, t) {
    console.assert ? console.assert(e, t) : e || t && alert(t)
},
cc.initDebugSetting = function() {
    0 == cc.COCOS2D_DEBUG ? (cc.log = function() {},
    cc.logINFO = function() {},
    cc.logERROR = function() {},
    cc.Assert = function() {}) : 1 == cc.COCOS2D_DEBUG ? (cc.logINFO = cc.log, cc.logERROR = function() {}) : 1 < cc.COCOS2D_DEBUG && (cc.logINFO = cc.log, cc.logERROR = cc.log)
},
cc.LANGUAGE_ENGLISH = 0,
cc.LANGUAGE_CHINESE = 1,
cc.LANGUAGE_FRENCH = 2,
cc.LANGUAGE_ITALIAN = 3,
cc.LANGUAGE_GERMAN = 4,
cc.LANGUAGE_SPANISH = 5,
cc.LANGUAGE_RUSSIAN = 6,
cc.LANGUAGE_KOREAN = 7,
cc.LANGUAGE_JAPANESE = 8,
cc.LANGUAGE_HUNGARIAN = 9,
cc.LANGUAGE_PORTUGUESE = 10,
cc.LANGUAGE_ARABIC = 11,
cc.LANGUAGE_NORWEGIAN = 12,
cc.LANGUAGE_POLISH = 13,
cc.KEY = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    Delete: 46,
    0 : 48,
    1 : 49,
    2 : 50,
    3 : 51,
    4 : 52,
    5 : 53,
    6 : 54,
    7 : 55,
    8 : 56,
    9 : 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    num0: 96,
    num1: 97,
    num2: 98,
    num3: 99,
    num4: 100,
    num5: 101,
    num6: 102,
    num7: 103,
    num8: 104,
    num9: 105,
    "*": 106,
    "+": 107,
    "-": 109,
    numdel: 110,
    "/": 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    ",": 186,
    equal: 187,
    "=": 187,
    ";": 188,
    comma: 188,
    dash: 189,
    ".": 190,
    period: 190,
    forwardslash: 191,
    grave: 192,
    "[": 219,
    openbracket: 219,
    "]": 221,
    closebracket: 221,
    backslash: 220,
    quote: 222,
    space: 32
},
cc.INVALID_INDEX = -1,
cc.PI = Math.PI,
cc.FLT_MAX = parseFloat("3.402823466e+38F"),
cc.RAD = cc.PI / 180,
cc.DEG = 180 / cc.PI,
cc.UINT_MAX = 4294967295,
cc.SWAP = function(e, t, n) {
    if ("object" == typeof n && "undefined" != typeof n.x && "undefined" != typeof n.y) {
        var r = n[e];
        n[e] = n[t],
        n[t] = r
    } else cc.log("cc.SWAP is being modified from original macro, please check usage")
},
cc.lerp = function(e, t, n) {
    return e + (t - e) * n
},
cc.RANDOM_MINUS1_1 = function() {
    return 2 * (Math.random() - .5)
},
cc.RANDOM_0_1 = function() {
    return Math.random()
},
cc.DEGREES_TO_RADIANS = function(e) {
    return e * cc.RAD
},
cc.RADIANS_TO_DEGREES = function(e) {
    return e * cc.DEG
},
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1,
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770,
cc.BLEND_DST = 771,
cc.NODE_DRAW_SETUP = function(e) {
    e._shaderProgram && (e._shaderProgram.use(), e._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4())
},
cc.ENABLE_DEFAULT_GL_STATES = function() {},
cc.DISABLE_DEFAULT_GL_STATES = function() {},
cc.INCREMENT_GL_DRAWS = function(e) {
    cc.g_NumberOfDraws += e
},
cc.FLT_EPSILON = 1.192092896e-7,
cc.CONTENT_SCALE_FACTOR = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function() {
    return cc.Director.getInstance().getContentScaleFactor()
}: function() {
    return 1
},
cc.POINT_POINTS_TO_PIXELS = function(e) {
    var t = cc.CONTENT_SCALE_FACTOR();
    return cc.p(e.x * t, e.y * t)
},
cc._POINT_POINTS_TO_PIXELS_OUT = function(e, t) {
    var n = cc.CONTENT_SCALE_FACTOR();
    t._x = e.x * n,
    t._y = e.y * n
},
cc.SIZE_POINTS_TO_PIXELS = function(e) {
    var t = cc.CONTENT_SCALE_FACTOR();
    return cc.size(e.width * t, e.height * t)
},
cc.SIZE_PIXELS_TO_POINTS = function(e) {
    var t = cc.CONTENT_SCALE_FACTOR();
    return cc.size(e.width / t, e.height / t)
},
cc._SIZE_PIXELS_TO_POINTS_OUT = function(e, t) {
    var n = cc.CONTENT_SCALE_FACTOR();
    t._width = e.width / n,
    t._height = e.height / n
},
cc.POINT_PIXELS_TO_POINTS = function(e) {
    var t = cc.CONTENT_SCALE_FACTOR();
    return cc.p(e.x / t, e.y / t)
},
cc._POINT_PIXELS_TO_POINTS_OUT = function(e, t) {
    var n = cc.CONTENT_SCALE_FACTOR();
    t._x = e.x / n,
    t._y = e.y / n
},
cc.RECT_PIXELS_TO_POINTS = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function(e) {
    var t = cc.CONTENT_SCALE_FACTOR();
    return cc.rect(e.x / t, e.y / t, e.width / t, e.height / t)
}: function(e) {
    return e
},
cc.RECT_POINTS_TO_PIXELS = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function(e) {
    var t = cc.CONTENT_SCALE_FACTOR();
    return cc.rect(e.x * t, e.y * t, e.width * t, e.height * t)
}: function(e) {
    return e
};
if (!cc.Browser.supportWebGL) {
    var gl = gl || {};
    gl.ONE = 1,
    gl.ZERO = 0,
    gl.SRC_ALPHA = 770,
    gl.ONE_MINUS_SRC_ALPHA = 771,
    gl.ONE_MINUS_DST_COLOR = 775
}
cc.CHECK_GL_ERROR_DEBUG = function() {
    if (cc.renderMode == cc.WEBGL) {
        var e = cc.renderContext.getError();
        e && cc.log("WebGL error " + e)
    }
},
cc.SAX_NONE = 0,
cc.SAX_KEY = 1,
cc.SAX_DICT = 2,
cc.SAX_INT = 3,
cc.SAX_REAL = 4,
cc.SAX_STRING = 5,
cc.SAX_ARRAY = 6;
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var IEBinaryToArray_ByteStr_Script = '<!-- IEBinaryToArray_ByteStr -->\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = ""\r\n   End If\r\nEnd Function\r\n',
    myVBScript = document.createElement("script");
    myVBScript.type = "text/vbscript",
    myVBScript.textContent = IEBinaryToArray_ByteStr_Script,
    document.body.appendChild(myVBScript),
    cc._convertResponseBodyToText = function(e) {
        for (var t = {},
        n = 0; 256 > n; n++) for (var r = 0; 256 > r; r++) t[String.fromCharCode(n + 256 * r)] = String.fromCharCode(n) + String.fromCharCode(r);
        return n = IEBinaryToArray_ByteStr(e),
        e = IEBinaryToArray_ByteStr_Last(e),
        n.replace(/[\s\S]/g,
        function(e) {
            return t[e]
        }) + e
    }
}
cc.FileUtils = cc.Class.extend({
    _fileDataCache: null,
    _textFileCache: null,
    _directory: null,
    _filenameLookupDict: null,
    _searchResolutionsOrderArray: null,
    _searchPathArray: null,
    _defaultResRootPath: "",
    ctor: function() {
        this._fileDataCache = {},
        this._textFileCache = {},
        this._searchPathArray = [],
        this._searchPathArray.push(this._defaultResRootPath),
        this._searchResolutionsOrderArray = [],
        this._searchResolutionsOrderArray.push("")
    },
    purgeCachedEntries: function() {
        this._searchPathArray = []
    },
    getByteArrayFromFile: function(e, t, n) {
        return e = this.fullPathForFilename(e),
        this._fileDataCache.hasOwnProperty(e) ? this._fileDataCache[e] : this._loadBinaryFileData(e)
    },
    _getXMLHttpRequest: function() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
    },
    unloadBinaryFileData: function(e) {
        this._fileDataCache.hasOwnProperty(e) && delete this._fileDataCache[e]
    },
    preloadBinaryFileData: function(e) {
        e = this.fullPathForFilename(e);
        var t = this,
        n = this._getXMLHttpRequest();
        n.open("GET", e, !0),
        /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (n.setRequestHeader("Accept-Charset", "x-user-defined"), n.onreadystatechange = function(r) {
            4 == n.readyState && (200 == n.status ? (r = cc._convertResponseBodyToText(n.responseBody)) && (t._fileDataCache[e] = t._stringConvertToArray(r)) : cc.Loader.getInstance().onResLoadingErr(e), cc.Loader.getInstance().onResLoaded())
        }) : (n.overrideMimeType && n.overrideMimeType("text/plain; charset=x-user-defined"), n.onload = function(r) { (r = n.responseText) ? t._fileDataCache[e] = t._stringConvertToArray(r) : cc.Loader.getInstance().onResLoadingErr(e),
            cc.Loader.getInstance().onResLoaded()
        }),
        n.send(null)
    },
    _loadBinaryFileData: function(e) {
        var t = this._getXMLHttpRequest();
        t.open("GET", e, !1);
        var n = null;
        if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
            t.setRequestHeader("Accept-Charset", "x-user-defined"),
            t.send(null);
            if (200 != t.status) return null;
            if (t = cc._convertResponseBodyToText(t.responseBody)) n = this._stringConvertToArray(t),
            this._fileDataCache[e] = n
        } else {
            t.overrideMimeType && t.overrideMimeType("text/plain; charset=x-user-defined"),
            t.send(null);
            if (200 != t.status) return null;
            n = this._stringConvertToArray(t.responseText),
            this._fileDataCache[e] = n
        }
        return n
    },
    _stringConvertToArray: function(e) {
        if (!e) return null;
        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n) & 255;
        return t
    },
    unloadTextFileData: function(e) {
        e = this.fullPathForFilename(e),
        this._textFileCache.hasOwnProperty(e) && delete this._textFileCache[e]
    },
    preloadTextFileData: function(e) {
        e = this.fullPathForFilename(e);
        var t = this,
        n = this._getXMLHttpRequest();
        n.open("GET", e, !0),
        /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (n.setRequestHeader("Accept-Charset", "utf-8"), n.onreadystatechange = function(r) {
            4 == n.readyState && (200 == n.status ? (r = n.responseText) && (t._textFileCache[e] = r) : cc.Loader.getInstance().onResLoadingErr(e), cc.Loader.getInstance().onResLoaded())
        }) : (n.overrideMimeType && n.overrideMimeType("text/plain; charset=utf-8"), n.onload = function(r) {
            n.responseText ? t._textFileCache[e] = n.responseText: cc.Loader.getInstance().onResLoadingErr(e),
            cc.Loader.getInstance().onResLoaded()
        }),
        n.send(null)
    },
    _loadTextFileData: function(e) {
        var t = this._getXMLHttpRequest();
        t.open("GET", e, !1);
        var n = null;
        return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? t.setRequestHeader("Accept-Charset", "utf-8") : t.overrideMimeType && t.overrideMimeType("text/plain; charset=utf-8"),
        t.send(null),
        200 != t.status ? null: ((n = t.responseText) && (this._textFileCache[e] = n), n)
    },
    getTextFileData: function(e) {
        return e = this.fullPathForFilename(e),
        this._textFileCache.hasOwnProperty(e) ? this._textFileCache[e] : this._loadTextFileData(e)
    },
    getFileDataFromZip: function(e, t, n) {},
    removeSuffixFromFile: function(e) {},
    popupNotify: !0,
    fullPathFromRelativePath: function(e) {
        return e
    },
    fullPathForFilename: function(e) {
        var t = !1;
        e = this._getNewFilename(e);
        for (var n, r = 0; r < this._searchPathArray.length; r++) {
            for (var i = this._searchPathArray[r], s = 0; s < this._searchResolutionsOrderArray.length; s++) if (n = this._getPathForFilename(e, this._searchResolutionsOrderArray[s], i)) {
                t = !0;
                break
            }
            if (t) break
        }
        return t ? n: e
    },
    loadFilenameLookup: function(e) {
        var t = this.fullPathForFilename(e);
        if (0 < t.length) {
            var t = cc.SAXParser.getInstance().parse(t),
            n = parseInt(t.metadata.version);
            1 != n ? cc.log("cocos2d: ERROR: Invalid filenameLookup dictionary version: " + n + ". Filename: " + e) : this.setFilenameLookupDictionary(t.filenames)
        }
    },
    setFilenameLookupDictionary: function(e) {
        this._filenameLookupDict = e
    },
    fullPathFromRelativeFile: function(e, t) {
        var n;
        return e ? (n = t.substring(0, t.lastIndexOf("/") + 1), n + e) : (n = t.substring(0, t.lastIndexOf(".")), n + ".png")
    },
    setSearchResolutionsOrder: function(e) {
        this._searchResolutionsOrderArray = e
    },
    getSearchResolutionsOrder: function() {
        return this._searchResolutionsOrderArray
    },
    setSearchPath: function(e) {
        this._searchPathArray = e
    },
    getSearchPath: function() {
        return this._searchPathArray
    },
    getResourceDirectory: function() {
        return this._directory
    },
    setResourcePath: function(e) {},
    dictionaryWithContentsOfFile: function(e) {
        return cc.log("dictionaryWithContentsOfFile is deprecated. Use createDictionaryWithContentsOfFile instead"),
        this.createDictionaryWithContentsOfFile(e)
    },
    createDictionaryWithContentsOfFile: function(e) {
        return cc.SAXParser.getInstance().parse(e)
    },
    getStringFromFile: function(e) {
        return this.getTextFileData(e)
    },
    dictionaryWithContentsOfFileThreadSafe: function(e) {
        return cc.SAXParser.getInstance().parse(e)
    },
    getWritablePath: function() {
        return ""
    },
    setPopupNotify: function(e) {
        cc.popupNotify = e
    },
    isPopupNotify: function() {
        return cc.popupNotify
    },
    _resourceRootPath: "",
    getResourceRootPath: function() {
        return this._resourceRootPath
    },
    setResourceRootPath: function(e) {
        this._resourceRootPath = e
    },
    _getNewFilename: function(e) {
        var t = null;
        return (t = this._filenameLookupDict ? this._filenameLookupDict[e] : null) && 0 !== t.length ? cc.log("FOUND NEW FILE NAME: " + t) : t = e,
        t
    },
    _getPathForFilename: function(e, t, n) {
        var r;
        r = this.getResourceRootPath(),
        e && 0 < e.length && (0 === e.indexOf("/") || 0 === e.indexOf("\\")) ? r = "": 0 < r.length && "\\" != r[r.length - 1] && "/" != r[r.length - 1] && (r += "/");
        var i = e,
        s = "",
        o = e.lastIndexOf("/");
        return - 1 != o && (s = e.substr(0, o + 1), i = e.substr(o + 1)),
        e = n,
        0 < e.length && e.lastIndexOf("/") !== e.length - 1 && (e += "/"),
        e = e + s + t,
        0 < e.length && e.lastIndexOf("/") !== e.length - 1 && (e += "/"),
        e += i,
        r += e
    },
    _getFullPathForDirectoryAndFilename: function(e, t) {},
    setSearchPaths: function(e) {
        var t = !1;
        this._searchPathArray = [];
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
            i;
            this.isAbsolutePath(r) || (i = this._defaultResRootPath),
            r = i + r,
            0 < r.length && "/" != r[r.length - 1] && (r += "/"),
            t || r != this._defaultResRootPath || (t = !0),
            this._searchPathArray.push(r)
        }
        t || this._searchPathArray.push(this._defaultResRootPath)
    },
    addSearchPath: function(e) {
        var t;
        this.isAbsolutePath(e) || (t = this._defaultResRootPath),
        e = t + e,
        0 < e.length && "/" != e[e.length - 1] && (e += "/"),
        this._searchPathArray.push(e)
    },
    getSearchPaths: function() {},
    isAbsolutePath: function(e) {
        return "/" == e[0]
    }
}),
cc.s_SharedFileUtils = null,
cc.FileUtils.getInstance = function() {
    return null == cc.s_SharedFileUtils && (cc.s_SharedFileUtils = new cc.FileUtils),
    cc.s_SharedFileUtils
},
cc.Color3B = function(e, t, n) {
    switch (arguments.length) {
    case 0:
        this.b = this.g = this.r = 0;
        break;
    case 1:
        e && e instanceof cc.Color3B ? (this.r = 0 | e.r || 0, this.g = 0 | e.g || 0, this.b = 0 | e.b || 0) : this.b = this.g = this.r = 0;
        break;
    case 3:
        this.r = 0 | e || 0,
        this.g = 0 | t || 0,
        this.b = 0 | n || 0;
        break;
    default:
        throw "unknown argument type"
    }
},
cc.c3b = function(e, t, n) {
    return new cc.Color3B(e, t, n)
},
cc.integerToColor3B = function(e) {
    e = e || 0;
    var t = new cc.Color3B;
    return t.r = e & 255,
    t.g = e >> 8 & 255,
    t.b = e >> 16 & 255,
    t
},
cc.c3 = cc.c3b,
cc.c3BEqual = function(e, t) {
    return e.r === t.r && e.g === t.g && e.b === t.b
},
Object.defineProperties(cc, {
    WHITE: {
        get: function() {
            return cc.c3b(255, 255, 255)
        }
    },
    YELLOW: {
        get: function() {
            return cc.c3b(255, 255, 0)
        }
    },
    BLUE: {
        get: function() {
            return cc.c3b(0, 0, 255)
        }
    },
    GREEN: {
        get: function() {
            return cc.c3b(0, 255, 0)
        }
    },
    RED: {
        get: function() {
            return cc.c3b(255, 0, 0)
        }
    },
    MAGENTA: {
        get: function() {
            return cc.c3b(255, 0, 255)
        }
    },
    BLACK: {
        get: function() {
            return cc.c3b(0, 0, 0)
        }
    },
    ORANGE: {
        get: function() {
            return cc.c3b(255, 127, 0)
        }
    },
    GRAY: {
        get: function() {
            return cc.c3b(166, 166, 166)
        }
    }
}),
cc.white = function() {
    return new cc.Color3B(255, 255, 255)
},
cc.yellow = function() {
    return new cc.Color3B(255, 255, 0)
},
cc.blue = function() {
    return new cc.Color3B(0, 0, 255)
},
cc.green = function() {
    return new cc.Color3B(0, 255, 0)
},
cc.red = function() {
    return new cc.Color3B(255, 0, 0)
},
cc.magenta = function() {
    return new cc.Color3B(255, 0, 255)
},
cc.black = function() {
    return new cc.Color3B(0, 0, 0)
},
cc.orange = function() {
    return new cc.Color3B(255, 127, 0)
},
cc.gray = function() {
    return new cc.Color3B(166, 166, 166)
},
cc.Color4B = function(e, t, n, r) {
    this.r = 0 | e,
    this.g = 0 | t,
    this.b = 0 | n,
    this.a = 0 | r
},
cc.c4b = function(e, t, n, r) {
    return new cc.Color4B(e, t, n, r)
},
cc.c4 = cc.c4b,
cc.Color4F = function(e, t, n, r) {
    this.r = e,
    this.g = t,
    this.b = n,
    this.a = r
},
cc.c4f = function(e, t, n, r) {
    return new cc.Color4F(e, t, n, r)
},
cc.c4FFromccc3B = function(e) {
    return new cc.Color4F(e.r / 255, e.g / 255, e.b / 255, 1)
},
cc.c4FFromccc4B = function(e) {
    return new cc.Color4F(e.r / 255, e.g / 255, e.b / 255, e.a / 255)
},
cc.c4BFromccc4F = function(e) {
    return new cc.Color4B(0 | 255 * e.r, 0 | 255 * e.g, 0 | 255 * e.b, 0 | 255 * e.a)
},
cc.c4FEqual = function(e, t) {
    return e.r == t.r && e.g == t.g && e.b == t.b && e.a == t.a
},
cc.Vertex2F = function(e, t) {
    this.x = e || 0,
    this.y = t || 0
},
cc.Vertex2 = function(e, t) {
    return new cc.Vertex2F(e, t)
},
cc.Vertex3F = function(e, t, n) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = n || 0
},
cc.vertex3 = function(e, t, n) {
    return new cc.Vertex3F(e, t, n)
},
cc.Tex2F = function(e, t) {
    this.u = e || 0,
    this.v = t || 0
},
cc.tex2 = function(e, t) {
    return new cc.Tex2F(e, t)
},
cc.PointSprite = function(e, t, n) {
    this.pos = e || new cc.Vertex2F(0, 0),
    this.color = t || new cc.Color4B(0, 0, 0, 0),
    this.size = n || 0
},
cc.Quad2 = function(e, t, n, r) {
    this.tl = e || new cc.Vertex2F(0, 0),
    this.tr = t || new cc.Vertex2F(0, 0),
    this.bl = n || new cc.Vertex2F(0, 0),
    this.br = r || new cc.Vertex2F(0, 0)
},
cc.Quad3 = function(e, t, n, r) {
    this.bl = e || new cc.Vertex3F(0, 0, 0),
    this.br = t || new cc.Vertex3F(0, 0, 0),
    this.tl = n || new cc.Vertex3F(0, 0, 0),
    this.tr = r || new cc.Vertex3F(0, 0, 0)
},
cc.GridSize = function(e, t) {
    this.x = e,
    this.y = t
},
cc.g = function(e, t) {
    return new cc.GridSize(e, t)
},
cc.V2F_C4B_T2F = function(e, t, n) {
    this.vertices = e || new cc.Vertex2F(0, 0),
    this.colors = t || new cc.Color4B(0, 0, 0, 0),
    this.texCoords = n || new cc.Tex2F(0, 0)
},
cc.V2F_C4F_T2F = function(e, t, n) {
    this.vertices = e || new cc.Vertex2F(0, 0),
    this.colors = t || new cc.Color4F(0, 0, 0, 0),
    this.texCoords = n || new cc.Tex2F(0, 0)
},
cc.V3F_C4B_T2F = function(e, t, n) {
    this.vertices = e || new cc.Vertex3F(0, 0, 0),
    this.colors = t || new cc.Color4B(0, 0, 0, 0),
    this.texCoords = n || new cc.Tex2F(0, 0)
},
cc.V2F_C4B_T2F_Triangle = function(e, t, n) {
    this.a = e || new cc.V2F_C4B_T2F,
    this.b = t || new cc.V2F_C4B_T2F,
    this.c = n || new cc.V2F_C4B_T2F
},
cc.V2F_C4B_T2F_Quad = function(e, t, n, r) {
    this.bl = e || new cc.V2F_C4B_T2F,
    this.br = t || new cc.V2F_C4B_T2F,
    this.tl = n || new cc.V2F_C4B_T2F,
    this.tr = r || new cc.V2F_C4B_T2F
},
cc.V2F_C4B_T2F_QuadZero = function() {
    return new cc.V2F_C4B_T2F_Quad(new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)))
},
cc.V3F_C4B_T2F_Quad = function(e, t, n, r) {
    this.tl = e || new cc.V3F_C4B_T2F,
    this.bl = t || new cc.V3F_C4B_T2F,
    this.tr = n || new cc.V3F_C4B_T2F,
    this.br = r || new cc.V3F_C4B_T2F
},
cc.V3F_C4B_T2F_QuadZero = function() {
    return new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)))
},
cc.V3F_C4B_T2F_QuadCopy = function(e) {
    return e ? new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(e.tl.vertices.x, e.tl.vertices.y, e.tl.vertices.z), new cc.Color4B(e.tl.colors.r, e.tl.colors.g, e.tl.colors.b, e.tl.colors.a), new cc.Tex2F(e.tl.texCoords.u, e.tl.texCoords.v)), new cc.V3F_C4B_T2F(new cc.Vertex3F(e.bl.vertices.x, e.bl.vertices.y, e.bl.vertices.z), new cc.Color4B(e.bl.colors.r, e.bl.colors.g, e.bl.colors.b, e.bl.colors.a), new cc.Tex2F(e.bl.texCoords.u, e.bl.texCoords.v)), new cc.V3F_C4B_T2F(new cc.Vertex3F(e.tr.vertices.x, e.tr.vertices.y, e.tr.vertices.z), new cc.Color4B(e.tr.colors.r, e.tr.colors.g, e.tr.colors.b, e.tr.colors.a), new cc.Tex2F(e.tr.texCoords.u, e.tr.texCoords.v)), new cc.V3F_C4B_T2F(new cc.Vertex3F(e.br.vertices.x, e.br.vertices.y, e.br.vertices.z), new cc.Color4B(e.br.colors.r, e.br.colors.g, e.br.colors.b, e.br.colors.a), new cc.Tex2F(e.br.texCoords.u, e.br.texCoords.v))) : cc.V3F_C4B_T2F_QuadZero()
},
cc.V3F_C4B_T2F_QuadsCopy = function(e) {
    if (!e) return [];
    for (var t = [], n = 0; n < e.length; n++) t.push(cc.V3F_C4B_T2F_QuadCopy(e[n]));
    return t
},
cc.V2F_C4F_T2F_Quad = function(e, t, n, r) {
    this.bl = e || new cc.V2F_C4F_T2F,
    this.br = t || new cc.V2F_C4F_T2F,
    this.tl = n || new cc.V2F_C4F_T2F,
    this.tr = r || new cc.V2F_C4F_T2F
},
cc.BlendFunc = function(e, t) {
    this.src = e,
    this.dst = t
},
cc.BlendFuncDisable = function() {
    return new cc.BlendFunc(gl.ONE, gl.ZERO)
},
cc.T2F_Quad = function(e, t, n, r) {
    this.bl = e,
    this.br = t,
    this.tl = n,
    this.tr = r
},
cc.AnimationFrameData = function(e, t, n) {
    this.texCoords = e,
    this.delay = t,
    this.size = n
},
cc.convertColor3BtoHexString = function(e) {
    var t = e.r.toString(16),
    n = e.g.toString(16),
    r = e.b.toString(16);
    return "#" + (16 > e.r ? "0" + t: t) + (16 > e.g ? "0" + n: n) + (16 > e.b ? "0" + r: r)
},
cc.Browser.supportWebGL && (cc.Color4B = function(e, t, n, r, i, s) {
    this._arrayBuffer = i || new ArrayBuffer(cc.Color4B.BYTES_PER_ELEMENT),
    this._offset = s || 0,
    i = this._arrayBuffer,
    s = this._offset;
    var o = Uint8Array.BYTES_PER_ELEMENT;
    this._rU8 = new Uint8Array(i, s, 1),
    this._gU8 = new Uint8Array(i, s + o, 1),
    this._bU8 = new Uint8Array(i, s + 2 * o, 1),
    this._aU8 = new Uint8Array(i, s + 3 * o, 1),
    this._rU8[0] = e || 0,
    this._gU8[0] = t || 0,
    this._bU8[0] = n || 0,
    this._aU8[0] = r || 0
},
cc.Color4B.BYTES_PER_ELEMENT = 4, Object.defineProperties(cc.Color4B.prototype, {
    r: {
        get: function() {
            return this._rU8[0]
        },
        set: function(e) {
            this._rU8[0] = e
        },
        enumerable: !0
    },
    g: {
        get: function() {
            return this._gU8[0]
        },
        set: function(e) {
            this._gU8[0] = e
        },
        enumerable: !0
    },
    b: {
        get: function() {
            return this._bU8[0]
        },
        set: function(e) {
            this._bU8[0] = e
        },
        enumerable: !0
    },
    a: {
        get: function() {
            return this._aU8[0]
        },
        set: function(e) {
            this._aU8[0] = e
        },
        enumerable: !0
    }
}), cc.Color4F = function(e, t, n, r, i, s) {
    this._arrayBuffer = i || new ArrayBuffer(cc.Color4F.BYTES_PER_ELEMENT),
    this._offset = s || 0,
    i = this._arrayBuffer,
    s = this._offset;
    var o = Float32Array.BYTES_PER_ELEMENT;
    this._rF32 = new Float32Array(i, s, 1),
    this._rF32[0] = e || 0,
    this._gF32 = new Float32Array(i, s + o, 1),
    this._gF32[0] = t || 0,
    this._bF32 = new Float32Array(i, s + 2 * o, 1),
    this._bF32[0] = n || 0,
    this._aF32 = new Float32Array(i, s + 3 * o, 1),
    this._aF32[0] = r || 0
},
cc.Color4F.BYTES_PER_ELEMENT = 16, Object.defineProperties(cc.Color4F.prototype, {
    r: {
        get: function() {
            return this._rF32[0]
        },
        set: function(e) {
            this._rF32[0] = e
        },
        enumerable: !0
    },
    g: {
        get: function() {
            return this._gF32[0]
        },
        set: function(e) {
            this._gF32[0] = e
        },
        enumerable: !0
    },
    b: {
        get: function() {
            return this._bF32[0]
        },
        set: function(e) {
            this._bF32[0] = e
        },
        enumerable: !0
    },
    a: {
        get: function() {
            return this._aF32[0]
        },
        set: function(e) {
            this._aF32[0] = e
        },
        enumerable: !0
    }
}), cc.Vertex2F = function(e, t, n, r) {
    this._arrayBuffer = n || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT),
    this._offset = r || 0,
    this._xF32 = new Float32Array(this._arrayBuffer, this._offset, 1),
    this._yF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1),
    this._xF32[0] = e || 0,
    this._yF32[0] = t || 0
},
cc.Vertex2F.BYTES_PER_ELEMENT = 8, Object.defineProperties(cc.Vertex2F.prototype, {
    x: {
        get: function() {
            return this._xF32[0]
        },
        set: function(e) {
            this._xF32[0] = e
        },
        enumerable: !0
    },
    y: {
        get: function() {
            return this._yF32[0]
        },
        set: function(e) {
            this._yF32[0] = e
        },
        enumerable: !0
    }
}), cc.Vertex3F = function(e, t, n, r, i) {
    this._arrayBuffer = r || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT),
    this._offset = i || 0,
    r = this._arrayBuffer,
    i = this._offset,
    this._xF32 = new Float32Array(r, i, 1),
    this._xF32[0] = e || 0,
    this._yF32 = new Float32Array(r, i + Float32Array.BYTES_PER_ELEMENT, 1),
    this._yF32[0] = t || 0,
    this._zF32 = new Float32Array(r, i + 2 * Float32Array.BYTES_PER_ELEMENT, 1),
    this._zF32[0] = n || 0
},
cc.Vertex3F.BYTES_PER_ELEMENT = 12, Object.defineProperties(cc.Vertex3F.prototype, {
    x: {
        get: function() {
            return this._xF32[0]
        },
        set: function(e) {
            this._xF32[0] = e
        },
        enumerable: !0
    },
    y: {
        get: function() {
            return this._yF32[0]
        },
        set: function(e) {
            this._yF32[0] = e
        },
        enumerable: !0
    },
    z: {
        get: function() {
            return this._zF32[0]
        },
        set: function(e) {
            this._zF32[0] = e
        },
        enumerable: !0
    }
}), cc.Tex2F = function(e, t, n, r) {
    this._arrayBuffer = n || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT),
    this._offset = r || 0,
    this._uF32 = new Float32Array(this._arrayBuffer, this._offset, 1),
    this._vF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1),
    this._uF32[0] = e || 0,
    this._vF32[0] = t || 0
},
cc.Tex2F.BYTES_PER_ELEMENT = 8, Object.defineProperties(cc.Tex2F.prototype, {
    u: {
        get: function() {
            return this._uF32[0]
        },
        set: function(e) {
            this._uF32[0] = e
        },
        enumerable: !0
    },
    v: {
        get: function() {
            return this._vF32[0]
        },
        set: function(e) {
            this._vF32[0] = e
        },
        enumerable: !0
    }
}), cc.Quad2 = function(e, t, n, r, i, s) {
    this._arrayBuffer = i || new ArrayBuffer(cc.Quad2.BYTES_PER_ELEMENT),
    this._offset = s || 0,
    i = this._arrayBuffer,
    s = cc.Vertex2F.BYTES_PER_ELEMENT,
    this._tl = e ? new cc.Vertex2F(e.x, e.y, i, 0) : new cc.Vertex2F(0, 0, i, 0),
    this._tr = t ? new cc.Vertex2F(t.x, t.y, i, s) : new cc.Vertex2F(0, 0, i, s),
    this._bl = n ? new cc.Vertex2F(n.x, n.y, i, 2 * s) : new cc.Vertex2F(0, 0, i, 2 * s),
    this._br = r ? new cc.Vertex2F(r.x, r.y, i, 3 * s) : new cc.Vertex2F(0, 0, i, 3 * s)
},
cc.Quad2.BYTES_PER_ELEMENT = 32, Object.defineProperties(cc.Quad2.prototype, {
    tl: {
        get: function() {
            return this._tl
        },
        set: function(e) {
            this._tl.x = e.x,
            this._tl.y = e.y
        },
        enumerable: !0
    },
    tr: {
        get: function() {
            return this._tr
        },
        set: function(e) {
            this._tr.x = e.x,
            this._tr.y = e.y
        },
        enumerable: !0
    },
    bl: {
        get: function() {
            return this._bl
        },
        set: function(e) {
            this._bl.x = e.x,
            this._bl.y = e.y
        },
        enumerable: !0
    },
    br: {
        get: function() {
            return this._br
        },
        set: function(e) {
            this._br.x = e.x,
            this._br.y = e.y
        },
        enumerable: !0
    }
}), cc.V3F_C4B_T2F = function(e, t, n, r, i) {
    this._arrayBuffer = r || new ArrayBuffer(cc.V3F_C4B_T2F.BYTES_PER_ELEMENT),
    this._offset = i || 0,
    r = this._arrayBuffer,
    i = this._offset;
    var s = cc.Vertex3F.BYTES_PER_ELEMENT;
    this._vertices = e ? new cc.Vertex3F(e.x, e.y, e.z, r, i) : new cc.Vertex3F(0, 0, 0, r, i),
    this._colors = t ? new cc.Color4B(t.r, t.g, t.b, t.a, r, i + s) : new cc.Color4B(0, 0, 0, 0, r, i + s),
    this._texCoords = n ? new cc.Tex2F(n.u, n.v, r, i + s + cc.Color4B.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, r, i + s + cc.Color4B.BYTES_PER_ELEMENT)
},
cc.V3F_C4B_T2F.BYTES_PER_ELEMENT = 24, Object.defineProperties(cc.V3F_C4B_T2F.prototype, {
    vertices: {
        get: function() {
            return this._vertices
        },
        set: function(e) {
            var t = this._vertices;
            t.x = e.x,
            t.y = e.y,
            t.z = e.z
        },
        enumerable: !0
    },
    colors: {
        get: function() {
            return this._colors
        },
        set: function(e) {
            var t = this._colors;
            t.r = e.r,
            t.g = e.g,
            t.b = e.b,
            t.a = e.a
        },
        enumerable: !0
    },
    texCoords: {
        get: function() {
            return this._texCoords
        },
        set: function(e) {
            this._texCoords.u = e.u,
            this._texCoords.v = e.v
        },
        enumerable: !0
    }
}), cc.V3F_C4B_T2F_Quad = function(e, t, n, r, i, s) {
    this._arrayBuffer = i || new ArrayBuffer(cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT),
    this._offset = s || 0,
    i = this._arrayBuffer,
    s = this._offset;
    var o = cc.V3F_C4B_T2F.BYTES_PER_ELEMENT;
    this._tl = e ? new cc.V3F_C4B_T2F(e.vertices, e.colors, e.texCoords, i, s) : new cc.V3F_C4B_T2F(null, null, null, i, s),
    this._bl = t ? new cc.V3F_C4B_T2F(t.vertices, t.colors, t.texCoords, i, s + o) : new cc.V3F_C4B_T2F(null, null, null, i, s + o),
    this._tr = n ? new cc.V3F_C4B_T2F(n.vertices, n.colors, n.texCoords, i, s + 2 * o) : new cc.V3F_C4B_T2F(null, null, null, i, s + 2 * o),
    this._br = r ? new cc.V3F_C4B_T2F(r.vertices, r.colors, r.texCoords, i, s + 3 * o) : new cc.V3F_C4B_T2F(null, null, null, i, s + 3 * o)
},
cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT = 96, Object.defineProperties(cc.V3F_C4B_T2F_Quad.prototype, {
    tl: {
        get: function() {
            return this._tl
        },
        set: function(e) {
            var t = this._tl;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    },
    bl: {
        get: function() {
            return this._bl
        },
        set: function(e) {
            var t = this._bl;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    },
    tr: {
        get: function() {
            return this._tr
        },
        set: function(e) {
            var t = this._tr;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    },
    br: {
        get: function() {
            return this._br
        },
        set: function(e) {
            var t = this._br;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    },
    arrayBuffer: {
        get: function() {
            return this._arrayBuffer
        },
        enumerable: !0
    }
}), cc.V3F_C4B_T2F_QuadZero = function() {
    return new cc.V3F_C4B_T2F_Quad
},
cc.V3F_C4B_T2F_QuadCopy = function(e) {
    if (!e) return cc.V3F_C4B_T2F_QuadZero();
    var t = e.tl,
    n = e.bl,
    r = e.tr;
    return e = e.br,
    {
        tl: {
            vertices: {
                x: t.vertices.x,
                y: t.vertices.y,
                z: t.vertices.z
            },
            colors: {
                r: t.colors.r,
                g: t.colors.g,
                b: t.colors.b,
                a: t.colors.a
            },
            texCoords: {
                u: t.texCoords.u,
                v: t.texCoords.v
            }
        },
        bl: {
            vertices: {
                x: n.vertices.x,
                y: n.vertices.y,
                z: n.vertices.z
            },
            colors: {
                r: n.colors.r,
                g: n.colors.g,
                b: n.colors.b,
                a: n.colors.a
            },
            texCoords: {
                u: n.texCoords.u,
                v: n.texCoords.v
            }
        },
        tr: {
            vertices: {
                x: r.vertices.x,
                y: r.vertices.y,
                z: r.vertices.z
            },
            colors: {
                r: r.colors.r,
                g: r.colors.g,
                b: r.colors.b,
                a: r.colors.a
            },
            texCoords: {
                u: r.texCoords.u,
                v: r.texCoords.v
            }
        },
        br: {
            vertices: {
                x: e.vertices.x,
                y: e.vertices.y,
                z: e.vertices.z
            },
            colors: {
                r: e.colors.r,
                g: e.colors.g,
                b: e.colors.b,
                a: e.colors.a
            },
            texCoords: {
                u: e.texCoords.u,
                v: e.texCoords.v
            }
        }
    }
},
cc.V2F_C4B_T2F = function(e, t, n, r, i) {
    this._arrayBuffer = r || new ArrayBuffer(cc.V2F_C4B_T2F.BYTES_PER_ELEMENT),
    this._offset = i || 0,
    r = this._arrayBuffer,
    i = this._offset;
    var s = cc.Vertex2F.BYTES_PER_ELEMENT;
    this._vertices = e ? new cc.Vertex2F(e.x, e.y, r, i) : new cc.Vertex2F(0, 0, r, i),
    this._colors = t ? new cc.Color4B(t.r, t.g, t.b, t.a, r, i + s) : new cc.Color4B(0, 0, 0, 0, r, i + s),
    this._texCoords = n ? new cc.Tex2F(n.u, n.v, r, i + s + cc.Color4B.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, r, i + s + cc.Color4B.BYTES_PER_ELEMENT)
},
cc.V2F_C4B_T2F.BYTES_PER_ELEMENT = 20, Object.defineProperties(cc.V2F_C4B_T2F.prototype, {
    vertices: {
        get: function() {
            return this._vertices
        },
        set: function(e) {
            this._vertices.x = e.x,
            this._vertices.y = e.y
        },
        enumerable: !0
    },
    colors: {
        get: function() {
            return this._colors
        },
        set: function(e) {
            var t = this._colors;
            t.r = e.r,
            t.g = e.g,
            t.b = e.b,
            t.a = e.a
        },
        enumerable: !0
    },
    texCoords: {
        get: function() {
            return this._texCoords
        },
        set: function(e) {
            this._texCoords.u = e.u,
            this._texCoords.v = e.v
        },
        enumerable: !0
    }
}), cc.V2F_C4B_T2F_Triangle = function(e, t, n, r, i) {
    this._arrayBuffer = r || new ArrayBuffer(cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT),
    this._offset = i || 0,
    r = this._arrayBuffer,
    i = this._offset;
    var s = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
    this._a = e ? new cc.V2F_C4B_T2F(e.vertices, e.colors, e.texCoords, r, i) : new cc.V2F_C4B_T2F(null, null, null, r, i),
    this._b = t ? new cc.V2F_C4B_T2F(t.vertices, t.colors, t.texCoords, r, i + s) : new cc.V2F_C4B_T2F(null, null, null, r, i + s),
    this._c = n ? new cc.V2F_C4B_T2F(n.vertices, n.colors, n.texCoords, r, i + 2 * s) : new cc.V2F_C4B_T2F(null, null, null, r, i + 2 * s)
},
cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT = 60, Object.defineProperties(cc.V2F_C4B_T2F_Triangle.prototype, {
    a: {
        get: function() {
            return this._a
        },
        set: function(e) {
            var t = this._a;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    },
    b: {
        get: function() {
            return this._b
        },
        set: function(e) {
            var t = this._b;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    },
    c: {
        get: function() {
            return this._c
        },
        set: function(e) {
            var t = this._c;
            t.vertices = e.vertices,
            t.colors = e.colors,
            t.texCoords = e.texCoords
        },
        enumerable: !0
    }
})),
cc.convertHexNumToColor3B = function(e) {
    var t = e.substr(1).split("");
    e = parseInt("0x" + t[0] + t[1]);
    var n = parseInt("0x" + t[2] + t[3]),
    t = parseInt("0x" + t[4] + t[5]);
    return new cc.Color3B(e, n, t)
},
cc.TEXT_ALIGNMENT_LEFT = 0,
cc.TEXT_ALIGNMENT_CENTER = 1,
cc.TEXT_ALIGNMENT_RIGHT = 2,
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0,
cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1,
cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2,
cc._Dictionary = cc.Class.extend({
    _keyMapTb: null,
    _valueMapTb: null,
    __currId: 0,
    ctor: function() {
        this._keyMapTb = {},
        this._valueMapTb = {},
        this.__currId = 2 << (0 | 10 * Math.random())
    },
    __getKey: function() {
        return this.__currId++,
        "key_" + this.__currId
    },
    setObject: function(e, t) {
        if (null != t) {
            var n = this.__getKey();
            this._keyMapTb[n] = t,
            this._valueMapTb[n] = e
        }
    },
    objectForKey: function(e) {
        if (null == e) return null;
        var t = this._keyMapTb,
        n;
        for (n in t) if (t[n] === e) return this._valueMapTb[n];
        return null
    },
    valueForKey: function(e) {
        return this.objectForKey(e)
    },
    removeObjectForKey: function(e) {
        if (null != e) {
            var t = this._keyMapTb,
            n;
            for (n in t) if (t[n] === e) {
                delete this._valueMapTb[n],
                delete t[n];
                break
            }
        }
    },
    removeObjectsForKeys: function(e) {
        if (null != e) for (var t = 0; t < e.length; t++) this.removeObjectForKey(e[t])
    },
    allKeys: function() {
        var e = [],
        t = this._keyMapTb,
        n;
        for (n in t) e.push(t[n]);
        return e
    },
    removeAllObjects: function() {
        this._keyMapTb = {},
        this._valueMapTb = {}
    },
    count: function() {
        return this.allKeys().length
    }
}),
cc.FontDefinition = function() {
    this.fontName = "Arial",
    this.fontSize = 12,
    this.fontAlignmentH = cc.TEXT_ALIGNMENT_CENTER,
    this.fontAlignmentV = cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    this.fontFillColor = cc.white(),
    this.fontDimensions = cc.size(0, 0),
    this.strokeEnabled = !1,
    this.strokeColor = cc.white(),
    this.strokeSize = 1,
    this.shadowEnabled = !1,
    this.shadowOffset = cc.size(0, 0),
    this.shadowBlur = 0,
    this.shadowOpacity = 1
},
cc.RESOLUTION_POLICY = {
    EXACT_FIT: 0,
    NO_BORDER: 1,
    SHOW_ALL: 2,
    FIXED_HEIGHT: 3,
    FIXED_WIDTH: 4,
    UNKNOWN: 5
},
cc.Touches = [],
cc.TouchesIntergerDict = {},
cc.EGLView = cc.Class.extend({
    _delegate: null,
    _frameSize: null,
    _designResolutionSize: null,
    _originalDesignResolutionSize: null,
    _viewPortRect: null,
    _visibleRect: null,
    _viewName: "",
    _resizeCallback: null,
    _scaleX: 1,
    _originalScaleX: 1,
    _scaleY: 1,
    _originalScaleY: 1,
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _resolutionPolicy: null,
    _rpExactFit: null,
    _rpShowAll: null,
    _rpNoBorder: null,
    _rpFixedHeight: null,
    _rpFixedWidth: null,
    _initialized: !1,
    _captured: !1,
    _wnd: null,
    _hDC: null,
    _hRC: null,
    _accelerometerKeyHook: null,
    _supportTouch: !1,
    _contentTranslateLeftTop: null,
    _menu: null,
    _frame: null,
    _frameZoomFactor: 1,
    __resizeWithBrowserSize: !1,
    _isAdjustViewPort: !1,
    ctor: function() {
        this._frame = cc.container.parentNode === document.body ? document.documentElement: cc.container.parentNode,
        this._frameSize = cc.size(0, 0),
        this._initFrameSize();
        var e = cc.canvas.width,
        t = cc.canvas.height;
        this._designResolutionSize = cc.size(e, t),
        this._originalDesignResolutionSize = cc.size(e, t),
        this._viewPortRect = cc.rect(0, 0, e, t),
        this._visibleRect = cc.rect(0, 0, e, t),
        this._delegate = cc.Director.getInstance().getTouchDispatcher(),
        this._contentTranslateLeftTop = {
            left: 0,
            top: 0
        },
        this._viewName = "Cocos2dHTML5",
        cc.VisibleRect.init(this._designResolutionSize),
        this._rpExactFit = new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.EXACT_FIT),
        this._rpShowAll = new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.SHOW_ALL),
        this._rpNoBorder = new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.NO_BORDER),
        this._rpFixedHeight = new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_HEIGHT),
        this._rpFixedWidth = new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH),
        this._hDC = cc.canvas,
        this._hRC = cc.renderContext
    },
    _resizeEvent: function() {
        var e = this._originalDesignResolutionSize.width,
        t = this._originalDesignResolutionSize.height;
        this._resizeCallback && (this._initFrameSize(), this._resizeCallback.call()),
        0 < e && this.setDesignResolutionSize(e, t, this._resolutionPolicy)
    },
    resizeWithBrowserSize: function(e) {
        e ? this.__resizeWithBrowserSize || (this.__resizeWithBrowserSize = !0, e = this._resizeEvent.bind(this), window.addEventListener("resize", e, !1)) : this.__resizeWithBrowserSize && (this.__resizeWithBrowserSize = !0, e = this._resizeEvent.bind(this), window.removeEventListener("resize", e, !1))
    },
    setResizeCallback: function(e) {
        if ("function" == typeof e || null == e) this._resizeCallback = e
    },
    _initFrameSize: function() {
        var e = this._frameSize;
        e.width = this._frame.clientWidth,
        e.height = this._frame.clientHeight
    },
    _adjustSizeKeepCanvasSize: function(e, t) {
        var n = this._originalDesignResolutionSize.width,
        r = this._originalDesignResolutionSize.height;
        0 < n && this.setDesignResolutionSize(n, r, this._resolutionPolicy)
    },
    _setViewPortMeta: function(e, t) {
        if (this._isAdjustViewPort) {
            var n = {
                "user-scalable": "no",
                "maximum-scale": "1.0",
                "initial-scale": "1.0"
            },
            r = document.getElementsByName("viewport"),
            i;
            0 == r.length ? (r = document.createElement("meta"), r.name = "viewport", r.content = "", document.head.appendChild(r)) : r = r[0],
            i = r.content;
            for (var s in n) RegExp(s).test(i) || (i += ("" == i ? "": ",") + s + "=" + n[s]);
            r.content = i
        }
    },
    _setScaleXYForRenderTexture: function() {
        var e = cc.CONTENT_SCALE_FACTOR();
        this._scaleY = this._scaleX = e
    },
    _resetScale: function() {
        this._scaleX = this._originalScaleX,
        this._scaleY = this._originalScaleY
    },
    _getUnUsedIndex: function() {
        var e, t = this._indexBitsUsed;
        for (e = 0; e < this._maxTouches; e++) {
            if (! (t & 1)) return this._indexBitsUsed |= 1 << e,
            e;
            t >>= 1
        }
        return - 1
    },
    _removeUsedIndexBit: function(e) {
        0 > e || e >= this._maxTouches || (e = ~ (1 << e), this._indexBitsUsed &= e)
    },
    _adjustSizeToBrowser: function() {},
    initialize: function() {
        this._initialized = !0
    },
    adjustViewPort: function(e) {
        this._isAdjustViewPort = e
    },
    end: function() {},
    isOpenGLReady: function() {
        return null != this._hDC && null != this._hRC
    },
    setFrameZoomFactor: function(e) {
        this._frameZoomFactor = e,
        this.centerWindow(),
        cc.Director.getInstance().setProjection(cc.Director.getInstance().getProjection())
    },
    swapBuffers: function() {},
    setIMEKeyboardState: function(e) {},
    setContentTranslateLeftTop: function(e, t) {
        this._contentTranslateLeftTop = {
            left: e,
            top: t
        }
    },
    getContentTranslateLeftTop: function() {
        return this._contentTranslateLeftTop
    },
    getFrameSize: function() {
        return cc.size(this._frameSize.width, this._frameSize.height)
    },
    setFrameSize: function(e, t) {
        this._frameSize.width = e,
        this._frameSize.height = t,
        this._frame.style.width = e + "px",
        this._frame.style.height = t + "px",
        this._resizeEvent(),
        cc.Director.getInstance().setProjection(cc.Director.getInstance().getProjection())
    },
    centerWindow: function() {},
    setAccelerometerKeyHook: function(e) {
        this._accelerometerKeyHook = e
    },
    getVisibleSize: function() {
        return this._visibleRect._size
    },
    getVisibleOrigin: function() {
        return this._visibleRect._origin
    },
    canSetContentScaleFactor: function() {
        return ! 0
    },
    getResolutionPolicy: function() {
        return this._resolutionPolicy
    },
    setResolutionPolicy: function(e) {
        if (e instanceof cc.ResolutionPolicy) this._resolutionPolicy = e;
        else switch (e) {
        case cc.RESOLUTION_POLICY.EXACT_FIT:
            this._resolutionPolicy = this._rpExactFit;
            break;
        case cc.RESOLUTION_POLICY.SHOW_ALL:
            this._resolutionPolicy = this._rpShowAll;
            break;
        case cc.RESOLUTION_POLICY.NO_BORDER:
            this._resolutionPolicy = this._rpNoBorder;
            break;
        case cc.RESOLUTION_POLICY.FIXED_HEIGHT:
            this._resolutionPolicy = this._rpFixedHeight;
            break;
        case cc.RESOLUTION_POLICY.FIXED_WIDTH:
            this._resolutionPolicy = this._rpFixedWidth
        }
    },
    setDesignResolutionSize: function(e, t, n) {
        if (isNaN(e) || 0 == e || isNaN(t) || 0 == t) cc.log("Resolution not valid");
        else if (this.setResolutionPolicy(n), policy = this._resolutionPolicy) {
            policy.preApply(this);
            var r = this._frameSize.width,
            i = this._frameSize.height;
            cc.Browser.isMobile && this._setViewPortMeta(this._frameSize.width, this._frameSize.height),
            this._initFrameSize();
            if (n != this._resolutionPolicy || e != this._originalDesignResolutionSize.width || t != this._originalDesignResolutionSize.height || r != this._frameSize.width || i != this._frameSize.height) this._designResolutionSize = cc.size(e, t),
            this._originalDesignResolutionSize = cc.size(e, t),
            e = policy.apply(this, this._designResolutionSize),
            e.scale && 2 == e.scale.length && (this._scaleX = e.scale[0], this._scaleY = e.scale[1]),
            e.viewport instanceof cc.Rect && (e = this._viewPortRect = e.viewport, t = this._visibleRect, t._size.width = cc.canvas.width / this._scaleX, t._size.height = cc.canvas.height / this._scaleY, t._origin.x = -e.x / this._scaleX, t._origin.y = -e.y / this._scaleY),
            e = cc.Director.getInstance(),
            e._winSizeInPoints = this.getDesignResolutionSize(),
            cc.renderContextType == cc.WEBGL && (e._createStatsLabel(), e.setGLDefaultValues()),
            this._originalScaleX = this._scaleX,
            this._originalScaleY = this._scaleY,
            cc.DOM && cc.DOM._resetEGLViewDiv(),
            cc.VisibleRect.init(this.getVisibleSize()),
            policy.postApply(this)
        } else cc.log("should set resolutionPolicy")
    },
    getDesignResolutionSize: function() {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height)
    },
    setTouchDelegate: function(e) {
        this._delegate = e
    },
    setViewPortInPoints: function(e, t, n, r) {
        var i = this._frameZoomFactor,
        s = this._scaleX,
        o = this._scaleY;
        cc.renderContext.viewport(e * s * i + this._viewPortRect.x * i, t * o * i + this._viewPortRect.y * i, n * s * i, r * o * i)
    },
    setScissorInPoints: function(e, t, n, r) {
        var i = this._frameZoomFactor,
        s = this._scaleX,
        o = this._scaleY;
        cc.renderContext.scissor(e * s * i + this._viewPortRect.x * i, t * o * i + this._viewPortRect.y * i, n * s * i, r * o * i)
    },
    isScissorEnabled: function() {
        var e = cc.renderContext;
        return e.isEnabled(e.SCISSOR_TEST)
    },
    getScissorRect: function() {
        var e = cc.renderContext,
        t = this._scaleX,
        n = this._scaleY,
        e = e.getParameter(e.SCISSOR_BOX);
        return cc.rect((e[0] - this._viewPortRect.x) / t, (e[1] - this._viewPortRect.y) / n, e[2] / t, e[3] / n)
    },
    setViewName: function(e) {
        null != e && 0 < e.length && (this._viewName = e)
    },
    getViewName: function() {
        return this._viewName
    },
    getViewPortRect: function() {
        return this._viewPortRect
    },
    getScaleX: function() {
        return this._scaleX
    },
    getScaleY: function() {
        return this._scaleY
    },
    convertToLocationInView: function(e, t, n) {
        return {
            x: e - n.left,
            y: n.top + n.height - t
        }
    },
    handleTouchesBegin: function(e, t, n, r) {
        for (var i = [], s = this._viewPortRect, o = this._scaleX, u = this._scaleY, a = 0; a < e; ++a) {
            var f = t[a],
            l = n[a],
            c = r[a],
            h = 0;
            if (null == cc.TouchesIntergerDict[f]) if (h = this._getUnUsedIndex(), -1 == h) cc.log("The touches is more than MAX_TOUCHES, nUnusedIndex = " + h);
            else {
                var p = cc.Touches[h] = new cc.Touch;
                p.setTouchInfo(h, (l - s.x) / o, (c - s.y) / u),
                cc.TouchesIntergerDict[f] = 0 | h,
                i.push(p)
            }
        }
        0 != i.length && this._delegate.touchesBegan(i, null)
    },
    handleTouchesMove: function(e, t, n, r) {
        for (var i = [], s = this._scaleX, o = this._scaleY, u = this._viewPortRect.x, a = this._viewPortRect.y, f = 0; f < e; ++f) {
            var l = n[f],
            c = r[f],
            h = cc.TouchesIntergerDict[t[f]];
            if (null != h) {
                var p = cc.Touches[h];
                if (!p) return;
                p.setTouchInfo(h, (l - u) / s, (c - a) / o),
                i.push(p)
            }
        }
        0 != i.length && this._delegate.touchesMoved(i, null)
    },
    handleTouchesEnd: function(e, t, n, r) {
        var i = [];
        this.getSetOfTouchesEndOrCancel(i, e, t, n, r),
        this._delegate.touchesEnded(i, null)
    },
    handleTouchesCancel: function(e, t, n, r) {
        var i = [];
        this.getSetOfTouchesEndOrCancel(i, e, t, n, r),
        this._delegate.touchesCancelled(i, null)
    },
    getSetOfTouchesEndOrCancel: function(e, t, n, r, i) {
        for (var s = this._scaleX,
        o = this._scaleY,
        u = this._viewPortRect,
        a = 0; a < t; ++a) {
            var f = n[a],
            l = r[a],
            c = i[a],
            h = cc.TouchesIntergerDict[f];
            if (null != h) {
                var p = cc.Touches[h];
                if (!p) break;
                p.setTouchInfo(h, (l - u.x) / s, (c - u.y) / o),
                e.push(p),
                cc.Touches[h] = null,
                this._removeUsedIndexBit(h),
                delete cc.TouchesIntergerDict[f]
            }
        }
    },
    touchesBegan: function(e, t) {
        for (var n = [], r = [], i = [], s = 0, o, u = 0; u < e.length; u++) o = e[u],
        n[s] = o.getId() || u,
        r[s] = o.getLocation().x,
        i[s] = o.getLocation().y,
        ++s;
        this.handleTouchesBegin(s, n, r, i)
    },
    touchesMoved: function(e, t) {
        for (var n = [], r = [], i = [], s = 0, o, u = 0; u < e.length; u++) o = e[u],
        n[s] = o.getId() || u,
        r[s] = o.getLocation().x,
        i[s] = o.getLocation().y,
        ++s;
        this.handleTouchesMove(s, n, r, i)
    },
    touchesEnded: function(e, t) {
        for (var n = [], r = [], i = [], s = 0, o, u = 0; u < e.length; u++) o = e[u],
        n[s] = o.getId() || u,
        r[s] = o.getLocation().x,
        i[s] = o.getLocation().y,
        ++s;
        this.handleTouchesEnd(s, n, r, i)
    },
    touchesCancelled: function(e, t) {
        for (var n = [], r = [], i = [], s = 0, o, u = 0; u < e.length; u++) o = e[u],
        n[s] = o.getId() || u,
        r[s] = o.getLocation().x,
        i[s] = o.getLocation().y,
        ++s;
        this.handleTouchesCancel(s, n, r, i)
    }
}),
cc.EGLView.getInstance = function() {
    return this._instance || (this._instance = new cc.EGLView, this._instance.initialize()),
    this._instance
},
cc.ContainerStrategy = cc.Class.extend({
    preApply: function(e) {},
    apply: function(e, t) {},
    postApply: function(e) {},
    _setupContainer: function(e, t, n) {
        cc.Browser.isMobile && e == document.documentElement && cc.Screen.getInstance().autoFullScreen(cc.canvas),
        e = cc.canvas;
        var r = cc.container;
        e.width = t,
        e.height = n,
        r.style.width = t + "px",
        r.style.height = n + "px",
        t = document.body;
        var i;
        t && (i = t.style) && (i.paddingTop = i.paddingTop || "0px", i.paddingRight = i.paddingRight || "0px", i.paddingBottom = i.paddingBottom || "0px", i.paddingLeft = i.paddingLeft || "0px", i.borderTop = i.borderTop || "0px", i.borderRight = i.borderRight || "0px", i.borderBottom = i.borderBottom || "0px", i.borderLeft = i.borderLeft || "0px", i.marginTop = i.marginTop || "0px", i.marginRight = i.marginRight || "0px", i.marginBottom = i.marginBottom || "0px", i.marginLeft = i.marginLeft || "0px")
    },
    _fixContainer: function() {
        document.body.insertBefore(cc.container, document.body.firstChild);
        var e = document.body.style;
        e.width = window.innerWidth + "px",
        e.height = window.innerHeight + "px",
        e.overflow = "hidden",
        e = cc.container.style,
        e.position = "fixed",
        e.left = e.top = "0px",
        document.body.scrollTop = 0
    }
}),
cc.ContentStrategy = cc.Class.extend({
    _result: {
        scale: [1, 1],
        viewport: null
    },
    _buildResult: function(e, t, n, r, i, s) {
        return e = cc.rect(Math.round((e - n) / 2), Math.round((t - r) / 2), n, r),
        cc.renderContextType == cc.CANVAS && cc.renderContext.translate(e.x, e.y + r),
        this._result.scale = [i, s],
        this._result.viewport = e,
        this._result
    },
    preApply: function(e) {},
    apply: function(e, t) {
        return {
            scale: [1, 1]
        }
    },
    postApply: function(e) {}
}),
function() {
    var e = cc.ContainerStrategy.extend({
        apply: function(e) {
            this._setupContainer(e._frame, e._frameSize.width, e._frameSize.height)
        }
    }),
    t = cc.ContainerStrategy.extend({
        apply: function(e, t) {
            var n = e._frameSize.width,
            r = e._frameSize.height,
            i = cc.container.style,
            s = t.width,
            o = t.height,
            u = n / s,
            a = r / o,
            f, l;
            u < a ? (f = n, l = o * u) : (f = s * a, l = r),
            s = Math.floor((n - f) / 2),
            l = Math.floor((r - l) / 2),
            this._setupContainer(e._frame, n - 2 * s, r - 2 * l),
            i.marginLeft = s + "px",
            i.marginRight = s + "px",
            i.marginTop = l + "px",
            i.marginBottom = l + "px"
        }
    });
    e.extend({
        preApply: function(e) {
            e._frame = document.documentElement
        },
        apply: function(e) {
            this._super(e),
            this._fixContainer()
        }
    }),
    t.extend({
        preApply: function(e) {
            e._frame = document.documentElement
        },
        apply: function(e, t) {
            this._super(e, t),
            this._fixContainer()
        }
    });
    var n = cc.ContainerStrategy.extend({});
    cc.ContainerStrategy.EQUAL_TO_FRAME = new e,
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new t,
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new n;
    var e = cc.ContentStrategy.extend({
        apply: function(e, t) {
            var n = cc.canvas.width,
            r = cc.canvas.height;
            return this._buildResult(n, r, n, r, n / t.width, r / t.height)
        }
    }),
    t = cc.ContentStrategy.extend({
        apply: function(e, t) {
            var n = cc.canvas.width,
            r = cc.canvas.height,
            i = t.width,
            s = t.height,
            o = n / i,
            u = r / s,
            a, f, l;
            return o < u ? (a = o, f = n, l = s * a) : (a = u, f = i * a, l = r),
            this._buildResult(n, r, f, l, a, a)
        }
    }),
    n = cc.ContentStrategy.extend({
        apply: function(e, t) {
            var n = cc.canvas.width,
            r = cc.canvas.height,
            i = t.width,
            s = t.height,
            o = n / i,
            u = r / s,
            a, f, l;
            return o < u ? (a = u, f = i * a, l = r) : (a = o, f = n, l = s * a),
            this._buildResult(n, r, f, l, a, a)
        }
    }),
    r = cc.ContentStrategy.extend({
        apply: function(e, t) {
            var n = cc.canvas.width,
            r = cc.canvas.height,
            i = r / t.height;
            return this._buildResult(n, r, n, r, i, i)
        },
        postApply: function(e) {
            cc.Director.getInstance()._winSizeInPoints = e.getVisibleSize()
        }
    }),
    i = cc.ContentStrategy.extend({
        apply: function(e, t) {
            var n = cc.canvas.width,
            r = cc.canvas.height,
            i = n / t.width;
            return this._buildResult(n, r, n, r, i, i)
        },
        postApply: function(e) {
            cc.Director.getInstance()._winSizeInPoints = e.getVisibleSize()
        }
    });
    cc.ContentStrategy.EXACT_FIT = new e,
    cc.ContentStrategy.SHOW_ALL = new t,
    cc.ContentStrategy.NO_BORDER = new n,
    cc.ContentStrategy.FIXED_HEIGHT = new r,
    cc.ContentStrategy.FIXED_WIDTH = new i
} (),
cc.ResolutionPolicy = cc.Class.extend({
    _containerStrategy: null,
    _contentStrategy: null,
    ctor: function(e, t) {
        this.setContainerStrategy(e),
        this.setContentStrategy(t)
    },
    preApply: function(e) {
        this._containerStrategy.preApply(e),
        this._contentStrategy.preApply(e)
    },
    apply: function(e, t) {
        return this._containerStrategy.apply(e, t),
        this._contentStrategy.apply(e, t)
    },
    postApply: function(e) {
        this._containerStrategy.postApply(e),
        this._contentStrategy.postApply(e)
    },
    setContainerStrategy: function(e) {
        e instanceof cc.ContainerStrategy && (this._containerStrategy = e)
    },
    setContentStrategy: function(e) {
        e instanceof cc.ContentStrategy && (this._contentStrategy = e)
    }
}),
cc.Screen = cc.Class.extend({
    _supportsFullScreen: !1,
    _browserPrefix: "",
    _preElement: null,
    _preOnFullScreenChange: null,
    _touchEvent: "",
    init: function() {
        var e = ["webkit", "moz", "o", "ms", "khtml"],
        t = document.body;
        if (t.requestFullScreen) this._supportsFullScreen = !0;
        else for (var n = 0,
        r = e.length,
        i; n < r; n++) if (i = e[n], t[i + "RequestFullScreen"]) {
            this._supportsFullScreen = !0,
            this._browserPrefix = i;
            break
        }
        this._touchEvent = "ontouchstart" in window ? "touchstart": "mousedown"
    },
    fullScreen: function() {
        var e = document;
        if (this._supportsFullScreen) switch (this._browserPrefix) {
        case "":
            return e.fullScreen;
        case "webkit":
            return e.webkitIsFullScreen;
        default:
            return e[this._browserPrefix + "FullScreen"]
        }
        return ! 1
    },
    requestFullScreen: function(e, t) {
        if (this._supportsFullScreen && !this.fullScreen()) {
            if (t) {
                var n = this._browserPrefix + "fullscreenchange";
                this._preElement && this._preOnFullScreenChange && this._preElement.removeEventListener(n, this._preOnFullScreenChange),
                this._preElement = e,
                this._preOnFullScreenChange = t,
                e.addEventListener(n, t, !1)
            }
            return "" === this._browserPrefix ? e.requestFullScreen() : e[this._browserPrefix + "RequestFullScreen"]()
        }
    },
    exitFullScreen: function() {
        if (this._supportsFullScreen && this.fullScreen()) return "" === this._browserPrefix ? document.body.cancelFullScreen() : document.body[this._browserPrefix + "CancelFullScreen"]()
    },
    autoFullScreen: function(e, t) {
        function n() {
            r.requestFullScreen(e, t),
            e.removeEventListener(r._touchEvent, n)
        }
        var r = this;
        this.requestFullScreen(e, t),
        e.addEventListener(this._touchEvent, n)
    }
}),
cc.Screen.getInstance = function() {
    if (!this._instance) {
        var e = new cc.Screen;
        e.init(),
        this._instance = e
    }
    return this._instance
},
cc.VisibleRect = {
    _topLeft: cc._pConst(0, 0),
    _topRight: cc._pConst(0, 0),
    _top: cc._pConst(0, 0),
    _bottomLeft: cc._pConst(0, 0),
    _bottomRight: cc._pConst(0, 0),
    _bottom: cc._pConst(0, 0),
    _center: cc._pConst(0, 0),
    _left: cc._pConst(0, 0),
    _right: cc._pConst(0, 0),
    _width: 0,
    _height: 0,
    init: function(e) {
        this._width = e.width,
        this._height = e.height,
        e = this._width;
        var t = this._height;
        this._topLeft._y = t,
        this._topRight._x = e,
        this._topRight._y = t,
        this._top._x = e / 2,
        this._top._y = t,
        this._bottomRight._x = e,
        this._bottom._x = e / 2,
        this._center._x = e / 2,
        this._center._y = t / 2,
        this._left._y = t / 2,
        this._right._x = e,
        this._right._y = t / 2
    },
    getWidth: function() {
        return this._width
    },
    getHeight: function() {
        return this._height
    },
    topLeft: function() {
        return this._topLeft
    },
    topRight: function() {
        return this._topRight
    },
    top: function() {
        return this._top
    },
    bottomLeft: function() {
        return this._bottomLeft
    },
    bottomRight: function() {
        return this._bottomRight
    },
    bottom: function() {
        return this._bottom
    },
    center: function() {
        return this._center
    },
    left: function() {
        return this._left
    },
    right: function() {
        return this._right
    }
},
cc.splitWithForm = function(e, t) {
    if (e && 0 != e.length) {
        var n = e.indexOf("{"),
        r = e.indexOf("}");
        if ( - 1 != n && -1 != r && !(n > r) && (n = e.substr(n + 1, r - n - 1), 0 != n.length)) {
            var r = n.indexOf("{"),
            i = n.indexOf("}"); - 1 == r && -1 == i && (t = n.split(","))
        }
    }
    return t
},
cc.RectFromString = function(e) {
    var t = cc.RectZero();
    if (e) {
        var n = e.indexOf("{") + 1,
        r = e.lastIndexOf("}", e.length); - 1 != n && -1 != r && (e = e.substring(n, r), n = e.indexOf("}"), -1 != n && (n = e.indexOf(",", n), -1 != n && (t = e.substr(0, n), e = e.substr(n + 1, e.length - n), n = cc.splitWithForm(t), t = cc.splitWithForm(e), e = parseFloat(n[0]), n = parseFloat(n[1]), r = parseFloat(t[0]), t = parseFloat(t[1]), t = cc.rect(e, n, r, t))))
    }
    return t
},
cc.PointFromString = function(e) {
    var t = cc.PointZero();
    try {
        if ("" == e) return t;
        var n = cc.splitWithForm(e),
        r = parseFloat(n[0]),
        i = parseFloat(n[1]),
        t = cc.p(r, i)
    } catch(s) {}
    return t
},
cc.SizeFromString = function(e) {
    var t = cc.SizeZero();
    try {
        if ("" == e) return t;
        var n = cc.splitWithForm(e),
        r = parseFloat(n[0]),
        i = parseFloat(n[1]),
        t = cc.size(r, i)
    } catch(s) {}
    return t
},
cc.AffineTransform = function(e, t, n, r, i, s) {
    this.a = e,
    this.b = t,
    this.c = n,
    this.d = r,
    this.tx = i,
    this.ty = s
},
cc.__AffineTransformMake = function(e, t, n, r, i, s) {
    return {
        a: e,
        b: t,
        c: n,
        d: r,
        tx: i,
        ty: s
    }
},
cc.AffineTransformMake = function(e, t, n, r, i, s) {
    return {
        a: e,
        b: t,
        c: n,
        d: r,
        tx: i,
        ty: s
    }
},
cc.__PointApplyAffineTransform = function(e, t) {
    return {
        x: t.a * e.x + t.c * e.y + t.tx,
        y: t.b * e.x + t.d * e.y + t.ty
    }
},
cc.PointApplyAffineTransform = function(e, t) {
    return {
        x: t.a * e.x + t.c * e.y + t.tx,
        y: t.b * e.x + t.d * e.y + t.ty
    }
},
cc._PointApplyAffineTransform = function(e, t, n) {
    return {
        x: n.a * e + n.c * t + n.tx,
        y: n.b * e + n.d * t + n.ty
    }
},
cc.__SizeApplyAffineTransform = function(e, t) {
    return {
        width: t.a * e.width + t.c * e.height,
        height: t.b * e.width + t.d * e.height
    }
},
cc.SizeApplyAffineTransform = function(e, t) {
    return {
        width: t.a * e.width + t.c * e.height,
        height: t.b * e.width + t.d * e.height
    }
},
cc.AffineTransformMakeIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    }
},
cc.AffineTransformIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    }
},
cc.RectApplyAffineTransform = function(e, t) {
    var n = cc.rectGetMinY(e),
    r = cc.rectGetMinX(e),
    i = cc.rectGetMaxX(e),
    s = cc.rectGetMaxY(e),
    o = cc._PointApplyAffineTransform(r, n, t),
    n = cc._PointApplyAffineTransform(i, n, t),
    r = cc._PointApplyAffineTransform(r, s, t),
    u = cc._PointApplyAffineTransform(i, s, t),
    i = Math.min(o.x, n.x, r.x, u.x),
    s = Math.max(o.x, n.x, r.x, u.x),
    a = Math.min(o.y, n.y, r.y, u.y),
    o = Math.max(o.y, n.y, r.y, u.y);
    return cc.rect(i, a, s - i, o - a)
},
cc._RectApplyAffineTransformIn = function(e, t) {
    var n = cc.rectGetMinY(e),
    r = cc.rectGetMinX(e),
    i = cc.rectGetMaxX(e),
    s = cc.rectGetMaxY(e),
    o = cc._PointApplyAffineTransform(r, n, t),
    n = cc._PointApplyAffineTransform(i, n, t),
    r = cc._PointApplyAffineTransform(r, s, t),
    u = cc._PointApplyAffineTransform(i, s, t),
    i = Math.min(o.x, n.x, r.x, u.x),
    s = Math.max(o.x, n.x, r.x, u.x),
    a = Math.min(o.y, n.y, r.y, u.y),
    o = Math.max(o.y, n.y, r.y, u.y);
    return e.x = i,
    e.y = a,
    e.width = s - i,
    e.height = o - a,
    e
},
cc.AffineTransformTranslate = function(e, t, n) {
    return {
        a: e.a,
        b: e.b,
        c: e.c,
        d: e.d,
        tx: e.tx + e.a * t + e.c * n,
        ty: e.ty + e.b * t + e.d * n
    }
},
cc.AffineTransformScale = function(e, t, n) {
    return {
        a: e.a * t,
        b: e.b * t,
        c: e.c * n,
        d: e.d * n,
        tx: e.tx,
        ty: e.ty
    }
},
cc.AffineTransformRotate = function(e, t) {
    var n = Math.sin(t),
    r = Math.cos(t);
    return {
        a: e.a * r + e.c * n,
        b: e.b * r + e.d * n,
        c: e.c * r - e.a * n,
        d: e.d * r - e.b * n,
        tx: e.tx,
        ty: e.ty
    }
},
cc.AffineTransformConcat = function(e, t) {
    return {
        a: e.a * t.a + e.b * t.c,
        b: e.a * t.b + e.b * t.d,
        c: e.c * t.a + e.d * t.c,
        d: e.c * t.b + e.d * t.d,
        tx: e.tx * t.a + e.ty * t.c + t.tx,
        ty: e.tx * t.b + e.ty * t.d + t.ty
    }
},
cc.AffineTransformEqualToTransform = function(e, t) {
    return e.a === t.a && e.b === t.b && e.c === t.c && e.d === t.d && e.tx === t.tx && e.ty === t.ty
},
cc.AffineTransformInvert = function(e) {
    var t = 1 / (e.a * e.d - e.b * e.c);
    return {
        a: t * e.d,
        b: -t * e.b,
        c: -t * e.c,
        d: t * e.a,
        tx: t * (e.c * e.ty - e.d * e.tx),
        ty: t * (e.b * e.tx - e.a * e.ty)
    }
},
cc.POINT_EPSILON = parseFloat("1.192092896e-07F"),
cc.pNeg = function(e) {
    return cc.p( - e.x, -e.y)
},
cc.pAdd = function(e, t) {
    return cc.p(e.x + t.x, e.y + t.y)
},
cc.pSub = function(e, t) {
    return cc.p(e.x - t.x, e.y - t.y)
},
cc.pMult = function(e, t) {
    return cc.p(e.x * t, e.y * t)
},
cc.pMidpoint = function(e, t) {
    return cc.pMult(cc.pAdd(e, t), .5)
},
cc.pDot = function(e, t) {
    return e.x * t.x + e.y * t.y
},
cc.pCross = function(e, t) {
    return e.x * t.y - e.y * t.x
},
cc.pPerp = function(e) {
    return cc.p( - e.y, e.x)
},
cc.pRPerp = function(e) {
    return cc.p(e.y, -e.x)
},
cc.pProject = function(e, t) {
    return cc.pMult(t, cc.pDot(e, t) / cc.pDot(t, t))
},
cc.pRotate = function(e, t) {
    return cc.p(e.x * t.x - e.y * t.y, e.x * t.y + e.y * t.x)
},
cc.pUnrotate = function(e, t) {
    return cc.p(e.x * t.x + e.y * t.y, e.y * t.x - e.x * t.y)
},
cc.pLengthSQ = function(e) {
    return cc.pDot(e, e)
},
cc.pDistanceSQ = function(e, t) {
    return cc.pLengthSQ(cc.pSub(e, t))
},
cc.pLength = function(e) {
    return Math.sqrt(cc.pLengthSQ(e))
},
cc.pDistance = function(e, t) {
    return cc.pLength(cc.pSub(e, t))
},
cc.pNormalize = function(e) {
    return cc.pMult(e, 1 / cc.pLength(e))
},
cc.pForAngle = function(e) {
    return cc.p(Math.cos(e), Math.sin(e))
},
cc.pToAngle = function(e) {
    return Math.atan2(e.y, e.x)
},
cc.clampf = function(e, t, n) {
    if (t > n) {
        var r = t;
        t = n,
        n = r
    }
    return e < t ? t: e < n ? e: n
},
cc.pClamp = function(e, t, n) {
    return cc.p(cc.clampf(e.x, t.x, n.x), cc.clampf(e.y, t.y, n.y))
},
cc.pFromSize = function(e) {
    return cc.p(e.width, e.height)
},
cc.pCompOp = function(e, t) {
    return cc.p(t(e.x), t(e.y))
},
cc.pLerp = function(e, t, n) {
    return cc.pAdd(cc.pMult(e, 1 - n), cc.pMult(t, n))
},
cc.pFuzzyEqual = function(e, t, n) {
    return e.x - n <= t.x && t.x <= e.x + n && e.y - n <= t.y && t.y <= e.y + n ? !0 : !1
},
cc.pCompMult = function(e, t) {
    return cc.p(e.x * t.x, e.y * t.y)
},
cc.pAngleSigned = function(e, t) {
    var n = cc.pNormalize(e),
    r = cc.pNormalize(t),
    n = Math.atan2(n.x * r.y - n.y * r.x, cc.pDot(n, r));
    return Math.abs(n) < cc.POINT_EPSILON ? 0 : n
},
cc.pAngle = function(e, t) {
    var n = Math.acos(cc.pDot(cc.pNormalize(e), cc.pNormalize(t)));
    return Math.abs(n) < cc.POINT_EPSILON ? 0 : n
},
cc.pRotateByAngle = function(e, t, n) {
    e = cc.pSub(e, t);
    var r = Math.cos(n);
    n = Math.sin(n);
    var i = e.x;
    return e.x = i * r - e.y * n + t.x,
    e.y = i * n + e.y * r + t.y,
    e
},
cc.pLineIntersect = function(e, t, n, r, i) {
    if (e.x == t.x && e.y == t.y || n.x == r.x && n.y == r.y) return ! 1;
    var s = t.x - e.x;
    t = t.y - e.y;
    var o = r.x - n.x;
    r = r.y - n.y;
    var u = e.x - n.x;
    return e = e.y - n.y,
    n = r * s - o * t,
    i.x = o * e - r * u,
    i.y = s * e - t * u,
    0 == n ? 0 == i.x || 0 == i.y ? !0 : !1 : (i.x /= n, i.y /= n, !0)
},
cc.pSegmentIntersect = function(e, t, n, r) {
    var i = cc.p(0, 0);
    return cc.pLineIntersect(e, t, n, r, i) && 0 <= i.x && 1 >= i.x && 0 <= i.y && 1 >= i.y ? !0 : !1
},
cc.pIntersectPoint = function(e, t, n, r) {
    var i = cc.p(0, 0);
    return cc.pLineIntersect(e, t, n, r, i) ? (n = cc.p(0, 0), n.x = e.x + i.x * (t.x - e.x), n.y = e.y + i.x * (t.y - e.y), n) : cc.PointZero()
},
cc.pSameAs = function(e, t) {
    return null != e && null != t ? e.x == t.x && e.y == t.y: !1
},
cc.pZeroIn = function(e) {
    e.x = 0,
    e.y = 0
},
cc.pIn = function(e, t) {
    e.x = t.x,
    e.y = t.y
},
cc.pMultIn = function(e, t) {
    e.x *= t,
    e.y *= t
},
cc.pSubIn = function(e, t) {
    e.x -= t.x,
    e.y -= t.y
},
cc.pAddIn = function(e, t) {
    e.x += t.x,
    e.y += t.y
},
cc.pNormalizeIn = function(e) {
    cc.pMultIn(e, 1 / Math.sqrt(e.x * e.x + e.y * e.y))
},
cc.vertexLineToPolygon = function(e, t, n, r, i) {
    i += r;
    if (! (1 >= i)) {
        t *= .5;
        for (var s, o = i - 1,
        u = r; u < i; u++) {
            s = 2 * u;
            var a = cc.p(e[2 * u], e[2 * u + 1]),
            f;
            if (0 === u) f = cc.pPerp(cc.pNormalize(cc.pSub(a, cc.p(e[2 * (u + 1)], e[2 * (u + 1) + 1]))));
            else if (u === o) f = cc.pPerp(cc.pNormalize(cc.pSub(cc.p(e[2 * (u - 1)], e[2 * (u - 1) + 1]), a)));
            else {
                f = cc.p(e[2 * (u - 1)], e[2 * (u - 1) + 1]);
                var l = cc.p(e[2 * (u + 1)], e[2 * (u + 1) + 1]),
                c = cc.pNormalize(cc.pSub(l, a)),
                h = cc.pNormalize(cc.pSub(f, a)),
                p = Math.acos(cc.pDot(c, h));
                f = p < cc.DEGREES_TO_RADIANS(70) ? cc.pPerp(cc.pNormalize(cc.pMidpoint(c, h))) : p < cc.DEGREES_TO_RADIANS(170) ? cc.pNormalize(cc.pMidpoint(c, h)) : cc.pPerp(cc.pNormalize(cc.pSub(l, f)))
            }
            f = cc.pMult(f, t),
            n[2 * s] = a.x + f.x,
            n[2 * s + 1] = a.y + f.y,
            n[2 * (s + 1)] = a.x - f.x,
            n[2 * (s + 1) + 1] = a.y - f.y
        }
        for (u = 0 == r ? 0 : r - 1; u < o; u++) s = 2 * u,
        e = s + 2,
        t = cc.Vertex2(n[2 * s], n[2 * s + 1]),
        i = cc.Vertex2(n[2 * (s + 1)], n[2 * (s + 1) + 1]),
        s = cc.Vertex2(n[2 * e], n[2 * e]),
        r = cc.Vertex2(n[2 * (e + 1)], n[2 * (e + 1) + 1]),
        t = !cc.vertexLineIntersect(t.x, t.y, r.x, r.y, i.x, i.y, s.x, s.y),
        !t.isSuccess && (0 > t.value || 1 < t.value) && (t.isSuccess = !0),
        t.isSuccess && (n[2 * e] = r.x, n[2 * e + 1] = r.y, n[2 * (e + 1)] = s.x, n[2 * (e + 1) + 1] = s.y)
    }
},
cc.vertexLineIntersect = function(e, t, n, r, i, s, o, u) {
    return e == n && t == r || i == o && s == u ? {
        isSuccess: !1,
        value: 0
    }: (n -= e, r -= t, i -= e, s -= t, o -= e, u -= t, e = Math.sqrt(n * n + r * r), n /= e, r /= e, t = i * n + s * r, s = s * n - i * r, i = t, t = o * n + u * r, u = u * n - o * r, o = t, s == u ? {
        isSuccess: !1,
        value: 0
    }: {
        isSuccess: !0,
        value: (o + (i - o) * u / (u - s)) / e
    })
},
cc.CGAffineToGL = function(e, t) {
    t[2] = t[3] = t[6] = t[7] = t[8] = t[9] = t[11] = t[14] = 0,
    t[10] = t[15] = 1,
    t[0] = e.a,
    t[4] = e.c,
    t[12] = e.tx,
    t[1] = e.b,
    t[5] = e.d,
    t[13] = e.ty
},
cc.GLToCGAffine = function(e, t) {
    t.a = e[0],
    t.c = e[4],
    t.tx = e[12],
    t.b = e[1],
    t.d = e[5],
    t.ty = e[13]
},
cc.NODE_TAG_INVALID = -1,
cc.NODE_ON_ENTER = null,
cc.NODE_ON_EXIT = null,
cc.s_globalOrderOfArrival = 1,
cc.Node = cc.Class.extend({
    _zOrder: 0,
    _vertexZ: 0,
    _rotationX: 0,
    _rotationY: 0,
    _scaleX: 1,
    _scaleY: 1,
    _position: null,
    _skewX: 0,
    _skewY: 0,
    _children: null,
    _visible: !0,
    _anchorPoint: null,
    _anchorPointInPoints: null,
    _contentSize: null,
    _running: !1,
    _parent: null,
    _ignoreAnchorPointForPosition: !1,
    _tag: cc.NODE_TAG_INVALID,
    _userData: null,
    _userObject: null,
    _transformDirty: !0,
    _inverseDirty: !0,
    _cacheDirty: !0,
    _transformGLDirty: null,
    _transform: null,
    _inverse: null,
    _reorderChildDirty: !1,
    _shaderProgram: null,
    _orderOfArrival: 0,
    _actionManager: null,
    _scheduler: null,
    _initializedNode: !1,
    _additionalTransformDirty: !1,
    _additionalTransform: null,
    _componentContainer: null,
    _isTransitionFinished: !1,
    _rotationRadiansX: 0,
    _rotationRadiansY: 0,
    _initNode: function() {
        this._anchorPoint = cc._pConst(0, 0),
        this._anchorPointInPoints = cc._pConst(0, 0),
        this._contentSize = cc._sizeConst(0, 0),
        this._position = cc._pConst(0, 0),
        this._children = [],
        this._transform = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        };
        var e = cc.Director.getInstance();
        this._actionManager = e.getActionManager(),
        this._scheduler = e.getScheduler(),
        this._initializedNode = !0,
        this._additionalTransform = cc.AffineTransformMakeIdentity(),
        cc.ComponentContainer && (this._componentContainer = new cc.ComponentContainer(this))
    },
    init: function() {
        return ! 1 === this._initializedNode && this._initNode(),
        !0
    },
    _arrayMakeObjectsPerformSelector: function(e, t) {
        if (e && 0 !== e.length) {
            var n, r = e.length,
            i;
            n = cc.Node.StateCallbackType;
            switch (t) {
            case n.onEnter:
                for (n = 0; n < r; n++)(i = e[n]) && i.onEnter();
                break;
            case n.onExit:
                for (n = 0; n < r; n++)(i = e[n]) && i.onExit();
                break;
            case n.onEnterTransitionDidFinish:
                for (n = 0; n < r; n++)(i = e[n]) && i.onEnterTransitionDidFinish();
                break;
            case n.cleanup:
                for (n = 0; n < r; n++)(i = e[n]) && i.cleanup();
                break;
            case n.updateTransform:
                for (n = 0; n < r; n++)(i = e[n]) && i.updateTransform();
                break;
            case n.onExitTransitionDidStart:
                for (n = 0; n < r; n++)(i = e[n]) && i.onExitTransitionDidStart();
                break;
            case n.sortAllChildren:
                for (n = 0; n < r; n++)(i = e[n]) && i.sortAllChildren();
                break;
            default:
                throw "Unknown callback function"
            }
        }
    },
    setNodeDirty: null,
    _setNodeDirtyForCanvas: function() {
        this._setNodeDirtyForCache(),
        !1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
    },
    _setNodeDirtyForWebGL: function() { ! 1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
    },
    getSkewX: function() {
        return this._skewX
    },
    setSkewX: function(e) {
        this._skewX = e,
        this.setNodeDirty()
    },
    getSkewY: function() {
        return this._skewY
    },
    setSkewY: function(e) {
        this._skewY = e,
        this.setNodeDirty()
    },
    getZOrder: function() {
        return this._zOrder
    },
    _setZOrder: function(e) {
        this._zOrder = e
    },
    setZOrder: function(e) {
        this._setZOrder(e),
        this._parent && this._parent.reorderChild(this, e)
    },
    getVertexZ: function() {
        return this._vertexZ
    },
    setVertexZ: function(e) {
        this._vertexZ = e
    },
    getRotation: function() {
        return this._rotationX !== this._rotationY && cc.log("cc.Node.rotation(): RotationX != RotationY. Don't know which one to return"),
        this._rotationX
    },
    setRotation: function(e) {
        this._rotationX = this._rotationY = e,
        this._rotationRadiansX = .017453292519943295 * this._rotationX,
        this._rotationRadiansY = .017453292519943295 * this._rotationY,
        this.setNodeDirty()
    },
    getRotationX: function() {
        return this._rotationX
    },
    setRotationX: function(e) {
        this._rotationX = e,
        this._rotationRadiansX = .017453292519943295 * this._rotationX,
        this.setNodeDirty()
    },
    getRotationY: function() {
        return this._rotationY
    },
    setRotationY: function(e) {
        this._rotationY = e,
        this._rotationRadiansY = .017453292519943295 * this._rotationY,
        this.setNodeDirty()
    },
    getScale: function() {
        return this._scaleX !== this._scaleY && cc.log("cc.Node.getScale(): ScaleX != ScaleY. Don't know which one to return"),
        this._scaleX
    },
    setScale: function(e, t) {
        this._scaleX = e,
        this._scaleY = t || 0 === t ? t: e,
        this.setNodeDirty()
    },
    getScaleX: function() {
        return this._scaleX
    },
    setScaleX: function(e) {
        this._scaleX = e,
        this.setNodeDirty()
    },
    getScaleY: function() {
        return this._scaleY
    },
    setScaleY: function(e) {
        this._scaleY = e,
        this.setNodeDirty()
    },
    setPosition: function(e, t) {
        var n = this._position;
        2 == arguments.length ? (n._x = e, n._y = t) : 1 == arguments.length && (n._x = e.x, n._y = e.y),
        this.setNodeDirty()
    },
    getPosition: function() {
        return this._position
    },
    getPositionX: function() {
        return this._position._x
    },
    setPositionX: function(e) {
        this._position._x = e,
        this.setNodeDirty()
    },
    getPositionY: function() {
        return this._position._y
    },
    setPositionY: function(e) {
        this._position._y = e,
        this.setNodeDirty()
    },
    getChildrenCount: function() {
        return this._children.length
    },
    getChildren: function() {
        return this._children
    },
    isVisible: function() {
        return this._visible
    },
    setVisible: function(e) {
        this._visible = e,
        this.setNodeDirty()
    },
    getAnchorPoint: function() {
        return this._anchorPoint
    },
    setAnchorPoint: function(e, t) {
        var n = this._anchorPoint;
        if (2 === arguments.length) {
            if (e === n._x && t === n._y) return;
            n._x = e,
            n._y = t
        } else {
            if (e.x === n._x && e.y === n._y) return;
            n._x = e.x,
            n._y = e.y
        }
        var r = this._anchorPointInPoints,
        i = this._contentSize;
        r._x = i._width * n._x,
        r._y = i._height * n._y,
        this.setNodeDirty()
    },
    getAnchorPointInPoints: function() {
        return this._anchorPointInPoints
    },
    getContentSize: function() {
        return this._contentSize
    },
    setContentSize: function(e, t) {
        var n = this._contentSize;
        if (2 === arguments.length) {
            if (e === n._width && t === n._height) return;
            n._width = e,
            n._height = t
        } else {
            if (e.width === n._width && e.height === n._height) return;
            n._width = e.width,
            n._height = e.height
        }
        var r = this._anchorPointInPoints,
        i = this._anchorPoint;
        r._x = n._width * i._x,
        r._y = n._height * i._y,
        this.setNodeDirty()
    },
    isRunning: function() {
        return this._running
    },
    getParent: function() {
        return this._parent
    },
    setParent: function(e) {
        this._parent = e
    },
    isIgnoreAnchorPointForPosition: function() {
        return this._ignoreAnchorPointForPosition
    },
    ignoreAnchorPointForPosition: function(e) {
        e != this._ignoreAnchorPointForPosition && (this._ignoreAnchorPointForPosition = e, this.setNodeDirty())
    },
    getTag: function() {
        return this._tag
    },
    setTag: function(e) {
        this._tag = e
    },
    getUserData: function() {
        return this._userData
    },
    setUserData: function(e) {
        this._userData = e
    },
    getUserObject: function() {
        return this._userObject
    },
    setUserObject: function(e) {
        this._userObject != e && (this._userObject = e)
    },
    getOrderOfArrival: function() {
        return this._orderOfArrival
    },
    setOrderOfArrival: function(e) {
        this._orderOfArrival = e
    },
    getActionManager: function() {
        return this._actionManager || (this._actionManager = cc.Director.getInstance().getActionManager()),
        this._actionManager
    },
    setActionManager: function(e) {
        this._actionManager != e && (this.stopAllActions(), this._actionManager = e)
    },
    getScheduler: function() {
        return this._scheduler || (this._scheduler = cc.Director.getInstance().getScheduler()),
        this._scheduler
    },
    setScheduler: function(e) {
        this._scheduler != e && (this.unscheduleAllCallbacks(), this._scheduler = e)
    },
    getBoundingBox: function() {
        var e = cc.rect(0, 0, this._contentSize._width, this._contentSize._height);
        return cc._RectApplyAffineTransformIn(e, this.nodeToParentTransform())
    },
    cleanup: function() {
        this.stopAllActions(),
        this.unscheduleAllCallbacks(),
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup)
    },
    description: function() {
        return "<cc.Node | Tag =" + this._tag + ">"
    },
    getChildByTag: function(e) {
        var t = this._children;
        if (null != t) for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (r && r._tag == e) return r
        }
        return null
    },
    addChild: function(e, t, n) {
        if (!e) throw "cc.Node.addChild(): child must be non-null";
        e === this ? cc.log("cc.Node.addChild(): An Node can't be added as a child of itself.") : null !== e._parent ? cc.log("cc.Node.addChild(): child already added. It can't be added again") : (t = null != t ? t: e._zOrder, e._tag = null != n ? n: e._tag, this._insertChild(e, t), e._parent = this, this._running && (e.onEnter(), this._isTransitionFinished)) && e.onEnterTransitionDidFinish()
    },
    removeFromParent: function(e) {
        this._parent && (null == e && (e = !0), this._parent.removeChild(this, e))
    },
    removeFromParentAndCleanup: function(e) {
        cc.log("removeFromParentAndCleanup is deprecated. Use removeFromParent instead"),
        this.removeFromParent(e)
    },
    removeChild: function(e, t) {
        0 !== this._children.length && (null == t && (t = !0), -1 < this._children.indexOf(e) && this._detachChild(e, t), this.setNodeDirty())
    },
    removeChildByTag: function(e, t) {
        e === cc.NODE_TAG_INVALID && cc.log("cc.Node.removeChildByTag(): argument tag is an invalid tag");
        var n = this.getChildByTag(e);
        null == n ? cc.log("cocos2d: removeChildByTag(tag = " + e + "): child not found!") : this.removeChild(n, t)
    },
    removeAllChildrenWithCleanup: function(e) {
        cc.log("removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead"),
        this.removeAllChildren(e)
    },
    removeAllChildren: function(e) {
        var t = this._children;
        if (null != t) {
            null == e && (e = !0);
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r && (this._running && (r.onExitTransitionDidStart(), r.onExit()), e && r.cleanup(), r.setParent(null))
            }
            this._children.length = 0
        }
    },
    _detachChild: function(e, t) {
        this._running && (e.onExitTransitionDidStart(), e.onExit()),
        t && e.cleanup(),
        e.setParent(null),
        cc.ArrayRemoveObject(this._children, e)
    },
    _insertChild: function(e, t) {
        this._reorderChildDirty = !0,
        this._children.push(e),
        e._setZOrder(t)
    },
    reorderChild: function(e, t) {
        if (!e) throw "cc.Node.reorderChild(): child must be non-null";
        this._reorderChildDirty = !0,
        e.setOrderOfArrival(cc.s_globalOrderOfArrival++),
        e._setZOrder(t),
        this.setNodeDirty()
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            var e = this._children,
            t, n, r = e.length,
            i;
            for (t = 0; t < r; t++) {
                var s = e[t];
                n = t - 1;
                for (i = e[n]; 0 <= n && (s._zOrder < i._zOrder || s._zOrder == i._zOrder && s._orderOfArrival < i._orderOfArrival);) e[n + 1] = i,
                n -= 1,
                i = e[n];
                e[n + 1] = s
            }
            this._reorderChildDirty = !1
        }
    },
    draw: function(e) {},
    transformAncestors: function() {
        null != this._parent && (this._parent.transformAncestors(), this._parent.transform())
    },
    onEnter: function() {
        this._isTransitionFinished = !1,
        this._running = !0,
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter),
        this.resumeSchedulerAndActions()
    },
    onEnterTransitionDidFinish: function() {
        this._isTransitionFinished = !0,
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnterTransitionDidFinish)
    },
    onExitTransitionDidStart: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart)
    },
    onExit: function() {
        this._running = !1,
        this.pauseSchedulerAndActions(),
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExit),
        this._componentContainer && this._componentContainer.removeAll()
    },
    runAction: function(e) {
        if (!e) throw "cc.Node.runAction(): action must be non-null";
        return this.getActionManager().addAction(e, this, !this._running),
        e
    },
    stopAllActions: function() {
        this.getActionManager().removeAllActionsFromTarget(this)
    },
    stopAction: function(e) {
        this.getActionManager().removeAction(e)
    },
    stopActionByTag: function(e) {
        e === cc.ACTION_TAG_INVALID ? cc.log("cc.Node.stopActionBy(): argument tag an invalid tag") : this.getActionManager().removeActionByTag(e, this)
    },
    getActionByTag: function(e) {
        return e === cc.ACTION_TAG_INVALID ? (cc.log("cc.Node.getActionByTag(): argument tag is an invalid tag"), null) : this.getActionManager().getActionByTag(e, this)
    },
    getNumberOfRunningActions: function() {
        return this.getActionManager().numberOfRunningActionsInTarget(this)
    },
    scheduleUpdate: function() {
        this.scheduleUpdateWithPriority(0)
    },
    scheduleUpdateWithPriority: function(e) {
        this.getScheduler().scheduleUpdateForTarget(this, e, !this._running)
    },
    unscheduleUpdate: function() {
        this.getScheduler().unscheduleUpdateForTarget(this)
    },
    schedule: function(e, t, n, r) {
        t = t || 0;
        if (!e) throw "cc.Node.schedule(): callback function must be non-null";
        if (0 > t) throw "cc.Node.schedule(): interval must be positive";
        n = null == n ? cc.REPEAT_FOREVER: n,
        r = r || 0,
        this.getScheduler().scheduleCallbackForTarget(this, e, t, n, r, !this._running)
    },
    scheduleOnce: function(e, t) {
        this.schedule(e, 0, 0, t)
    },
    unschedule: function(e) {
        e && this.getScheduler().unscheduleCallbackForTarget(this, e)
    },
    unscheduleAllCallbacks: function() {
        this.getScheduler().unscheduleAllCallbacksForTarget(this)
    },
    resumeSchedulerAndActions: function() {
        this.getScheduler().resumeTarget(this),
        this.getActionManager().resumeTarget(this)
    },
    pauseSchedulerAndActions: function() {
        this.getScheduler().pauseTarget(this),
        this.getActionManager().pauseTarget(this)
    },
    setAdditionalTransform: function(e) {
        this._additionalTransform = e,
        this._additionalTransformDirty = this._transformDirty = !0
    },
    parentToNodeTransform: function() {
        return this._inverseDirty && (this._inverse = cc.AffineTransformInvert(this.nodeToParentTransform()), this._inverseDirty = !1),
        this._inverse
    },
    nodeToWorldTransform: function() {
        for (var e = this.nodeToParentTransform(), t = this._parent; null != t; t = t.getParent()) e = cc.AffineTransformConcat(e, t.nodeToParentTransform());
        return e
    },
    worldToNodeTransform: function() {
        return cc.AffineTransformInvert(this.nodeToWorldTransform())
    },
    convertToNodeSpace: function(e) {
        return cc.PointApplyAffineTransform(e, this.worldToNodeTransform())
    },
    convertToWorldSpace: function(e) {
        return cc.PointApplyAffineTransform(e, this.nodeToWorldTransform())
    },
    convertToNodeSpaceAR: function(e) {
        return cc.pSub(this.convertToNodeSpace(e), this._anchorPointInPoints)
    },
    convertToWorldSpaceAR: function(e) {
        return e = cc.pAdd(e, this._anchorPointInPoints),
        this.convertToWorldSpace(e)
    },
    _convertToWindowSpace: function(e) {
        return e = this.convertToWorldSpace(e),
        cc.Director.getInstance().convertToUI(e)
    },
    convertTouchToNodeSpace: function(e) {
        return e = e.getLocation(),
        this.convertToNodeSpace(e)
    },
    convertTouchToNodeSpaceAR: function(e) {
        return e = e.getLocation(),
        e = cc.Director.getInstance().convertToGL(e),
        this.convertToNodeSpaceAR(e)
    },
    update: function(e) {
        this._componentContainer && !this._componentContainer.isEmpty() && this._componentContainer.visit(e)
    },
    updateTransform: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
    },
    retain: function() {},
    release: function() {},
    getComponent: function(e) {
        return this._componentContainer.getComponent(e)
    },
    addComponent: function(e) {
        this._componentContainer.add(e)
    },
    removeComponent: function(e) {
        return this._componentContainer.remove(e)
    },
    removeAllComponents: function() {
        this._componentContainer.removeAll()
    },
    _transform4x4: null,
    _stackMatrix: null,
    _glServerState: null,
    _camera: null,
    _grid: null,
    ctor: null,
    _ctorForCanvas: function() {
        this._initNode()
    },
    _ctorForWebGL: function() {
        this._initNode();
        var e = new cc.kmMat4;
        e.mat[2] = e.mat[3] = e.mat[6] = e.mat[7] = e.mat[8] = e.mat[9] = e.mat[11] = e.mat[14] = 0,
        e.mat[10] = e.mat[15] = 1,
        this._transform4x4 = e,
        this._glServerState = 0,
        this._stackMatrix = new cc.kmMat4
    },
    visit: null,
    _visitForCanvas: function(e) {
        if (this._visible) {
            e = e || cc.renderContext;
            var t, n = this._children,
            r;
            e.save(),
            this.transform(e);
            var i = n.length;
            if (0 < i) {
                this.sortAllChildren();
                for (t = 0; t < i; t++) {
                    if (r = n[t], !(0 > r._zOrder)) break;
                    r.visit(e)
                }
                for (this.draw(e); t < i; t++) n[t].visit(e)
            } else this.draw(e);
            this._orderOfArrival = 0,
            e.restore()
        }
    },
    _visitForWebGL: function() {
        if (this._visible) {
            var e = cc.renderContext,
            t, n = cc.current_stack;
            n.stack.push(n.top),
            cc.kmMat4Assign(this._stackMatrix, n.top),
            n.top = this._stackMatrix;
            var r = this._grid;
            r && r._active && r.beforeDraw(),
            this.transform();
            var i = this._children;
            if (i && 0 < i.length) {
                var s = i.length;
                this.sortAllChildren();
                for (t = 0; t < s; t++) {
                    if (! (i[t] && 0 > i[t]._zOrder)) break;
                    i[t].visit()
                }
                for (this.draw(e); t < s; t++) i[t] && i[t].visit()
            } else this.draw(e);
            this._orderOfArrival = 0,
            r && r._active && r.afterDraw(this),
            n.top = n.stack.pop()
        }
    },
    transform: null,
    _transformForCanvas: function(e) {
        e = e || cc.renderContext;
        var t = cc.EGLView.getInstance(),
        n = this.nodeToParentTransform();
        e.transform(n.a, n.c, n.b, n.d, n.tx * t.getScaleX(), -n.ty * t.getScaleY())
    },
    _transformForWebGL: function() {
        var e = this._transform4x4,
        t = cc.current_stack.top,
        n = this.nodeToParentTransform(),
        r = e.mat;
        r[0] = n.a,
        r[4] = n.c,
        r[12] = n.tx,
        r[1] = n.b,
        r[5] = n.d,
        r[13] = n.ty,
        r[14] = this._vertexZ,
        cc.kmMat4Multiply(t, t, e),
        null == this._camera || null != this._grid && this._grid.isActive() || (e = this._anchorPointInPoints._x, t = this._anchorPointInPoints._y, 0 !== e || 0 !== t ? (cc.kmGLTranslatef(cc.RENDER_IN_SUBPIXEL(e), cc.RENDER_IN_SUBPIXEL(t), 0), this._camera.locate(), cc.kmGLTranslatef(cc.RENDER_IN_SUBPIXEL( - e), cc.RENDER_IN_SUBPIXEL( - t), 0)) : this._camera.locate())
    },
    nodeToParentTransform: null,
    _nodeToParentTransformForCanvas: function() {
        this._transform || (this._transform = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        });
        if (this._transformDirty) {
            var e = this._transform;
            e.tx = this._position._x,
            e.ty = this._position._y;
            var t = 1,
            n = 0;
            this._rotationX && (t = Math.cos(this._rotationRadiansX), n = Math.sin(this._rotationRadiansX)),
            e.a = e.d = t,
            e.b = -n,
            e.c = n;
            var r = this._scaleX,
            i = this._scaleY,
            s = this._anchorPointInPoints._x,
            o = this._anchorPointInPoints._y,
            u = 1e-6 > r && -0.000001 < r ? 1e-6: r,
            a = 1e-6 > i && -0.000001 < i ? 1e-6: i;
            if (this._skewX || this._skewY) {
                var f = Math.tan( - this._skewX * Math.PI / 180),
                l = Math.tan( - this._skewY * Math.PI / 180),
                c = o * f * u,
                h = s * l * a;
                e.a = t + -n * l,
                e.b = t * f + -n,
                e.c = n + t * l,
                e.d = n * f + t,
                e.tx += t * c + -n * h,
                e.ty += n * c + t * h
            }
            if (1 !== r || 1 !== i) e.a *= u,
            e.c *= u,
            e.b *= a,
            e.d *= a;
            e.tx += t * -s * u + -n * o * a,
            e.ty -= n * -s * u + t * o * a,
            this._ignoreAnchorPointForPosition && (e.tx += s, e.ty += o),
            this._additionalTransformDirty && (this._transform = cc.AffineTransformConcat(this._transform, this._additionalTransform), this._additionalTransformDirty = !1),
            this._transformDirty = !1
        }
        return this._transform
    },
    _nodeToParentTransformForWebGL: function() {
        if (this._transformDirty) {
            var e = this._position._x,
            t = this._position._y,
            n = this._anchorPointInPoints._x,
            r = -n,
            i = this._anchorPointInPoints._y,
            s = -i,
            o = this._scaleX,
            u = this._scaleY;
            this._ignoreAnchorPointForPosition && (e += n, t += i);
            var a = 1,
            f = 0,
            l = 1,
            c = 0;
            if (0 !== this._rotationX || 0 !== this._rotationY) a = Math.cos( - this._rotationRadiansX),
            f = Math.sin( - this._rotationRadiansX),
            l = Math.cos( - this._rotationRadiansY),
            c = Math.sin( - this._rotationRadiansY);
            var h = this._skewX || this._skewY;
            h || 0 === n && 0 === i || (e += l * r * o + -f * s * u, t += c * r * o + a * s * u),
            e = {
                a: l * o,
                b: c * o,
                c: -f * u,
                d: a * u,
                tx: e,
                ty: t
            },
            h && (e = cc.AffineTransformConcat({
                a: 1,
                b: Math.tan(cc.DEGREES_TO_RADIANS(this._skewY)),
                c: Math.tan(cc.DEGREES_TO_RADIANS(this._skewX)),
                d: 1,
                tx: 0,
                ty: 0
            },
            e), 0 !== n || 0 !== i) && (e = cc.AffineTransformTranslate(e, r, s)),
            this._additionalTransformDirty && (e = cc.AffineTransformConcat(e, this._additionalTransform), this._additionalTransformDirty = !1),
            this._transform = e,
            this._transformDirty = !1
        }
        return this._transform
    },
    _setNodeDirtyForCache: function() {
        this._cacheDirty = !0,
        this._parent && this._parent._setNodeDirtyForCache()
    },
    getCamera: function() {
        return this._camera || (this._camera = new cc.Camera),
        this._camera
    },
    getGrid: function() {
        return this._grid
    },
    setGrid: function(e) {
        this._grid = e
    },
    getShaderProgram: function() {
        return this._shaderProgram
    },
    setShaderProgram: function(e) {
        this._shaderProgram = e
    },
    getGLServerState: function() {
        return this._glServerState
    },
    setGLServerState: function(e) {
        this._glServerState = e
    },
    getBoundingBoxToWorld: function() {
        var e = cc.rect(0, 0, this._contentSize._width, this._contentSize._height),
        t = this.nodeToWorldTransform(),
        e = cc.RectApplyAffineTransform(e, this.nodeToWorldTransform());
        if (!this._children) return e;
        for (var n = this._children,
        r = 0; r < n.length; r++) {
            var i = n[r];
            i && i._visible && (i = i._getBoundingBoxToCurrentNode(t)) && (e = cc.rectUnion(e, i))
        }
        return e
    },
    _getBoundingBoxToCurrentNode: function(e) {
        var t = cc.rect(0, 0, this._contentSize._width, this._contentSize._height);
        e = null == e ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), e),
        t = cc.RectApplyAffineTransform(t, e);
        if (!this._children) return t;
        for (var n = this._children,
        r = 0; r < n.length; r++) {
            var i = n[r];
            i && i._visible && (i = i._getBoundingBoxToCurrentNode(e)) && (t = cc.rectUnion(t, i))
        }
        return t
    }
}),
cc.Browser.supportWebGL ? (cc.Node.prototype.ctor = cc.Node.prototype._ctorForWebGL, cc.Node.prototype.setNodeDirty = cc.Node.prototype._setNodeDirtyForWebGL, cc.Node.prototype.visit = cc.Node.prototype._visitForWebGL, cc.Node.prototype.transform = cc.Node.prototype._transformForWebGL, cc.Node.prototype.nodeToParentTransform = cc.Node.prototype._nodeToParentTransformForWebGL) : (cc.Node.prototype.ctor = cc.Node.prototype._ctorForCanvas, cc.Node.prototype.setNodeDirty = cc.Node.prototype._setNodeDirtyForCanvas, cc.Node.prototype.visit = cc.Node.prototype._visitForCanvas, cc.Node.prototype.transform = cc.Node.prototype._transformForCanvas, cc.Node.prototype.nodeToParentTransform = cc.Node.prototype._nodeToParentTransformForCanvas),
cc.Node.create = function() {
    return new cc.Node
},
cc.Node.StateCallbackType = {
    onEnter: 1,
    onExit: 2,
    cleanup: 3,
    onEnterTransitionDidFinish: 4,
    updateTransform: 5,
    onExitTransitionDidStart: 6,
    sortAllChildren: 7
},
cc.NodeRGBA = cc.Node.extend({
    RGBAProtocol: !0,
    _displayedOpacity: 255,
    _realOpacity: 255,
    _displayedColor: null,
    _realColor: null,
    _cascadeColorEnabled: !1,
    _cascadeOpacityEnabled: !1,
    ctor: function() {
        cc.Node.prototype.ctor.call(this),
        this._realOpacity = this._displayedOpacity = 255,
        this._displayedColor = cc.white(),
        this._realColor = cc.white(),
        this._cascadeOpacityEnabled = this._cascadeColorEnabled = !1
    },
    getOpacity: function() {
        return this._realOpacity
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity
    },
    setOpacity: function(e) {
        this._displayedOpacity = this._realOpacity = e,
        e = 255;
        var t = this._parent;
        t && t.RGBAProtocol && t.isCascadeOpacityEnabled() && (e = t.getDisplayedOpacity()),
        this.updateDisplayedOpacity(e)
    },
    updateDisplayedOpacity: function(e) {
        this._displayedOpacity = this._realOpacity * e / 255;
        if (this._cascadeOpacityEnabled) {
            e = this._children;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n && n.RGBAProtocol && n.updateDisplayedOpacity(this._displayedOpacity)
            }
        }
    },
    isCascadeOpacityEnabled: function() {
        return this._cascadeOpacityEnabled
    },
    setCascadeOpacityEnabled: function(e) {
        this._cascadeOpacityEnabled !== e && ((this._cascadeOpacityEnabled = e) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
    },
    _enableCascadeOpacity: function() {
        var e = 255,
        t = this._parent;
        t && t.RGBAProtocol && t.isCascadeOpacityEnabled() && (e = t.getDisplayedOpacity()),
        this.updateDisplayedOpacity(e)
    },
    _disableCascadeOpacity: function() {
        this._displayedOpacity = this._realOpacity;
        for (var e = this._children,
        t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.RGBAProtocol && n.updateDisplayedOpacity(255)
        }
    },
    getColor: function() {
        var e = this._realColor;
        return new cc.Color3B(e.r, e.g, e.b)
    },
    getDisplayedColor: function() {
        return this._displayedColor
    },
    setColor: function(e) {
        var t = this._displayedColor,
        n = this._realColor;
        t.r = n.r = e.r,
        t.g = n.g = e.g,
        t.b = n.b = e.b,
        e = (e = this._parent) && e.RGBAProtocol && e.isCascadeColorEnabled() ? e.getDisplayedColor() : cc.white(),
        this.updateDisplayedColor(e)
    },
    updateDisplayedColor: function(e) {
        var t = this._displayedColor,
        n = this._realColor;
        t.r = 0 | n.r * e.r / 255,
        t.g = 0 | n.g * e.g / 255,
        t.b = 0 | n.b * e.b / 255;
        if (this._cascadeColorEnabled) for (e = this._children, n = 0; n < e.length; n++) {
            var r = e[n];
            r && r.RGBAProtocol && r.updateDisplayedColor(t)
        }
    },
    isCascadeColorEnabled: function() {
        return this._cascadeColorEnabled
    },
    setCascadeColorEnabled: function(e) {
        this._cascadeColorEnabled !== e && ((this._cascadeColorEnabled = e) ? this._enableCascadeColor() : this._disableCascadeColor())
    },
    _enableCascadeColor: function() {
        var e;
        e = (e = this._parent) && e.RGBAProtocol && e.isCascadeColorEnabled() ? e.getDisplayedColor() : cc.white(),
        this.updateDisplayedColor(e)
    },
    _disableCascadeColor: function() {
        var e = this._displayedColor,
        t = this._realColor;
        e.r = t.r,
        e.g = t.g,
        e.b = t.b;
        for (var e = this._children,
        t = cc.white(), n = 0; n < e.length; n++) {
            var r = e[n];
            r && r.RGBAProtocol && r.updateDisplayedColor(t)
        }
    },
    addChild: function(e, t, n) {
        cc.Node.prototype.addChild.call(this, e, t, n),
        this._cascadeColorEnabled && this._enableCascadeColor(),
        this._cascadeOpacityEnabled && this._enableCascadeOpacity()
    },
    setOpacityModifyRGB: function(e) {},
    isOpacityModifyRGB: function() {
        return ! 1
    }
}),
cc.NodeRGBA.create = function() {
    var e = new cc.NodeRGBA;
    return e.init(),
    e
},
cc.AtlasNode = cc.NodeRGBA.extend({
    RGBAProtocol: !0,
    _itemsPerRow: 0,
    _itemsPerColumn: 0,
    _itemWidth: 0,
    _itemHeight: 0,
    _colorUnmodified: null,
    _textureAtlas: null,
    _opacityModifyRGB: !1,
    _blendFunc: null,
    _quadsToDraw: 0,
    _ignoreContentScaleFactor: !1,
    ctor: function() {
        cc.NodeRGBA.prototype.ctor.call(this),
        this._colorUnmodified = cc.white(),
        this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        },
        this._ignoreContentScaleFactor = !1
    },
    updateAtlasValues: function() {
        cc.log("cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses")
    },
    getColor: function() {
        return this._opacityModifyRGB ? this._colorUnmodified: cc.NodeRGBA.prototype.getColor.call(this)
    },
    setOpacityModifyRGB: function(e) {
        var t = this.getColor();
        this._opacityModifyRGB = e,
        this.setColor(t)
    },
    isOpacityModifyRGB: function() {
        return this._opacityModifyRGB
    },
    getBlendFunc: function() {
        return this._blendFunc
    },
    setBlendFunc: function(e, t) {
        this._blendFunc = 1 == arguments.length ? e: {
            src: e,
            dst: t
        }
    },
    setTextureAtlas: function(e) {
        this._textureAtlas = e
    },
    getTextureAtlas: function() {
        return this._textureAtlas
    },
    getQuadsToDraw: function() {
        return this._quadsToDraw
    },
    setQuadsToDraw: function(e) {
        this._quadsToDraw = e
    },
    _textureForCanvas: null,
    _originalTexture: null,
    _uniformColor: null,
    _colorF32Array: null,
    initWithTileFile: function(e, t, n, r) {
        if (!e) throw "cc.AtlasNode.initWithTileFile(): title should not be null";
        return e = cc.TextureCache.getInstance().addImage(e),
        this.initWithTexture(e, t, n, r)
    },
    initWithTexture: null,
    _initWithTextureForCanvas: function(e, t, n, r) {
        return this._itemWidth = t,
        this._itemHeight = n,
        this._opacityModifyRGB = !0,
        this._originalTexture = e,
        this._originalTexture ? (this._textureForCanvas = this._originalTexture, this._calculateMaxItems(), this._quadsToDraw = r, !0) : (cc.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), !1)
    },
    _initWithTextureForWebGL: function(e, t, n, r) {
        return this._itemWidth = t,
        this._itemHeight = n,
        this._colorUnmodified = cc.white(),
        this._opacityModifyRGB = !0,
        this._blendFunc.src = cc.BLEND_SRC,
        this._blendFunc.dst = cc.BLEND_DST,
        t = this._realColor,
        this._colorF32Array = new Float32Array([t.r / 255, t.g / 255, t.b / 255, this._realOpacity / 255]),
        this._textureAtlas = new cc.TextureAtlas,
        this._textureAtlas.initWithTexture(e, r),
        this._textureAtlas ? (this._updateBlendFunc(), this._updateOpacityModifyRGB(), this._calculateMaxItems(), this._quadsToDraw = r, this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR)), this._uniformColor = cc.renderContext.getUniformLocation(this.getShaderProgram().getProgram(), "u_color"), !0) : (cc.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), !1)
    },
    draw: null,
    _drawForWebGL: function(e) {
        e = e || cc.renderContext,
        cc.NODE_DRAW_SETUP(this),
        cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst),
        e.uniform4fv(this._uniformColor, this._colorF32Array),
        this._textureAtlas.drawNumberOfQuads(this._quadsToDraw, 0)
    },
    setColor: null,
    _setColorForCanvas: function(e) {
        var t = this._realColor;
        if (t.r != e.r || t.g != e.g || t.b != e.b) {
            t = new cc.Color3B(e.r, e.g, e.b),
            this._colorUnmodified = e;
            if (this._opacityModifyRGB) {
                var n = this._displayedOpacity;
                t.r = t.r * n / 255,
                t.g = t.g * n / 255,
                t.b = t.b * n / 255
            }
            cc.NodeRGBA.prototype.setColor.call(this, e),
            this.getTexture() && (e = this._originalTexture.getHtmlElementObj()) && (t = cc.TextureCache.getInstance().getTextureColors(e)) && (n = cc.rect(0, 0, e.width, e.height), e = cc.generateTintImage(e, t, this._realColor, n), t = new cc.Texture2D, t.initWithElement(e), t.handleLoadedTexture(), this.setTexture(t))
        }
    },
    _setColorForWebGL: function(e) {
        var t = cc.Color3B(e.r, e.g, e.b);
        this._colorUnmodified = e;
        var n = this._displayedOpacity;
        this._opacityModifyRGB && (t.r = t.r * n / 255, t.g = t.g * n / 255, t.b = t.b * n / 255),
        cc.NodeRGBA.prototype.setColor.call(this, e),
        e = this._displayedColor,
        this._colorF32Array = new Float32Array([e.r / 255, e.g / 255, e.b / 255, n / 255])
    },
    setOpacity: null,
    _setOpacityForCanvas: function(e) {
        cc.NodeRGBA.prototype.setOpacity.call(this, e),
        this._opacityModifyRGB && this.setColor(this._colorUnmodified)
    },
    _setOpacityForWebGL: function(e) {
        cc.NodeRGBA.prototype.setOpacity.call(this, e),
        this._opacityModifyRGB ? this.setColor(this._colorUnmodified) : (e = this._displayedColor, this._colorF32Array = new Float32Array([e.r / 255, e.g / 255, e.b / 255, this._displayedOpacity / 255]))
    },
    getTexture: null,
    _getTextureForCanvas: function() {
        return this._textureForCanvas
    },
    _getTextureForWebGL: function() {
        return this._textureAtlas.getTexture()
    },
    setTexture: null,
    _setTextureForCanvas: function(e) {
        this._textureForCanvas = e
    },
    _setTextureForWebGL: function(e) {
        this._textureAtlas.setTexture(e),
        this._updateBlendFunc(),
        this._updateOpacityModifyRGB()
    },
    _calculateMaxItems: null,
    _calculateMaxItemsForCanvas: function() {
        var e = this.getTexture().getContentSize();
        this._itemsPerColumn = 0 | e.height / this._itemHeight,
        this._itemsPerRow = 0 | e.width / this._itemWidth
    },
    _calculateMaxItemsForWebGL: function() {
        var e = this.getTexture(),
        t = e.getContentSize();
        this._ignoreContentScaleFactor && (t = e.getContentSizeInPixels()),
        this._itemsPerColumn = 0 | t.height / this._itemHeight,
        this._itemsPerRow = 0 | t.width / this._itemWidth
    },
    _updateBlendFunc: function() {
        this._textureAtlas.getTexture().hasPremultipliedAlpha() || (this._blendFunc.src = gl.SRC_ALPHA, this._blendFunc.dst = gl.ONE_MINUS_SRC_ALPHA)
    },
    _updateOpacityModifyRGB: function() {
        this._opacityModifyRGB = this._textureAtlas.getTexture().hasPremultipliedAlpha()
    },
    _setIgnoreContentScaleFactor: function(e) {
        this._ignoreContentScaleFactor = e
    }
}),
cc.Browser.supportWebGL ? (cc.AtlasNode.prototype.initWithTexture = cc.AtlasNode.prototype._initWithTextureForWebGL, cc.AtlasNode.prototype.draw = cc.AtlasNode.prototype._drawForWebGL, cc.AtlasNode.prototype.setColor = cc.AtlasNode.prototype._setColorForWebGL, cc.AtlasNode.prototype.setOpacity = cc.AtlasNode.prototype._setOpacityForWebGL, cc.AtlasNode.prototype.getTexture = cc.AtlasNode.prototype._getTextureForWebGL, cc.AtlasNode.prototype.setTexture = cc.AtlasNode.prototype._setTextureForWebGL, cc.AtlasNode.prototype._calculateMaxItems = cc.AtlasNode.prototype._calculateMaxItemsForWebGL) : (cc.AtlasNode.prototype.initWithTexture = cc.AtlasNode.prototype._initWithTextureForCanvas, cc.AtlasNode.prototype.draw = cc.Node.prototype.draw, cc.AtlasNode.prototype.setColor = cc.AtlasNode.prototype._setColorForCanvas, cc.AtlasNode.prototype.setOpacity = cc.AtlasNode.prototype._setOpacityForCanvas, cc.AtlasNode.prototype.getTexture = cc.AtlasNode.prototype._getTextureForCanvas, cc.AtlasNode.prototype.setTexture = cc.AtlasNode.prototype._setTextureForCanvas, cc.AtlasNode.prototype._calculateMaxItems = cc.AtlasNode.prototype._calculateMaxItemsForCanvas),
cc.AtlasNode.create = function(e, t, n, r) {
    var i = new cc.AtlasNode;
    return i.initWithTileFile(e, t, n, r) ? i: null
},
cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888 = 0,
cc.TEXTURE_2D_PIXEL_FORMAT_RGB888 = 1,
cc.TEXTURE_2D_PIXEL_FORMAT_RGB565 = 2,
cc.TEXTURE_2D_PIXEL_FORMAT_A8 = 3,
cc.TEXTURE_2D_PIXEL_FORMAT_I8 = 4,
cc.TEXTURE_2D_PIXEL_FORMAT_AI88 = 5,
cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444 = 6,
cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1 = 7,
cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4 = 8,
cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2 = 9,
cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT = cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888,
cc._defaultAlphaPixelFormat = cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT,
cc.PVRHaveAlphaPremultiplied_ = !1,
cc._texParams = function(e, t, n, r) {
    this.minFilter = e || 0,
    this.magFilter = t || 0,
    this.wrapS = n || 0,
    this.wrapT = r || 0
},
cc.Texture2DWebGL = cc.Class.extend({
    _pVRHaveAlphaPremultiplied: null,
    _pixelFormat: null,
    _pixelsWide: null,
    _pixelsHigh: null,
    _name: null,
    _contentSize: null,
    _maxS: null,
    _maxT: null,
    _hasPremultipliedAlpha: null,
    _hasMipmaps: !1,
    _shaderProgram: null,
    _isLoaded: !1,
    _htmlElementObj: null,
    _webTextureObj: null,
    _loadedEventListeners: null,
    ctor: function() {
        this._pixelsHigh = this._pixelsWide = 0,
        this._name = "",
        this._maxT = this._maxS = 0,
        this._hasPremultipliedAlpha = !1,
        this._contentSize = cc._sizeConst(0, 0),
        this._hasMipmaps = !1,
        this._pVRHaveAlphaPremultiplied = !0,
        this._pixelFormat = cc.Texture2D.defaultAlphaPixelFormat(),
        this._shaderProgram = null,
        this._isLoaded = !1,
        this._webTextureObj = this._htmlElementObj = null,
        this._loadedEventListeners = []
    },
    releaseTexture: function() {
        this._webTextureObj && cc.renderContext.deleteTexture(this._webTextureObj)
    },
    getPixelFormat: function() {
        return this._pixelFormat
    },
    getPixelsWide: function() {
        return this._pixelsWide
    },
    getPixelsHigh: function() {
        return this._pixelsHigh
    },
    getName: function() {
        return this._webTextureObj
    },
    getContentSize: function() {
        return cc.size(this._contentSize.width / cc.CONTENT_SCALE_FACTOR(), this._contentSize.height / cc.CONTENT_SCALE_FACTOR())
    },
    getContentSizeInPixels: function() {
        return this._contentSize
    },
    getMaxS: function() {
        return this._maxS
    },
    setMaxS: function(e) {
        this._maxS = e
    },
    getMaxT: function() {
        return this._maxT
    },
    setMaxT: function(e) {
        this._maxT = e
    },
    getShaderProgram: function() {
        return this._shaderProgram
    },
    setShaderProgram: function(e) {
        this._shaderProgram = e
    },
    hasPremultipliedAlpha: function() {
        return this._hasPremultipliedAlpha
    },
    hasMipmaps: function() {
        return this._hasMipmaps
    },
    description: function() {
        return "<cc.Texture2D | Name = " + this._name + " | Dimensions = " + this._pixelsWide + " x " + this._pixelsHigh + " | Coordinates = (" + this._maxS + ", " + this._maxT + ")>"
    },
    releaseData: function(e) {},
    keepData: function(e, t) {
        return e
    },
    initWithData: function(e, t, n, r, i) {
        var s = cc.renderContext,
        o = 0,
        o = t === cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888 ? 24 : this.bitsPerPixelForFormat(t),
        o = n * o / 8;
        0 === o % 8 ? s.pixelStorei(s.UNPACK_ALIGNMENT, 8) : 0 === o % 4 ? s.pixelStorei(s.UNPACK_ALIGNMENT, 4) : 0 === o % 2 ? s.pixelStorei(s.UNPACK_ALIGNMENT, 2) : s.pixelStorei(s.UNPACK_ALIGNMENT, 1),
        this._webTextureObj = s.createTexture(),
        cc.glBindTexture2D(this),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE);
        switch (t) {
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888:
            s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, n, r, 0, s.RGBA, s.UNSIGNED_BYTE, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB888:
            s.texImage2D(s.TEXTURE_2D, 0, s.RGB, n, r, 0, s.RGB, s.UNSIGNED_BYTE, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444:
            s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, n, r, 0, s.RGBA, s.UNSIGNED_SHORT_4_4_4_4, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1:
            s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, n, r, 0, s.RGBA, s.UNSIGNED_SHORT_5_5_5_1, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB565:
            s.texImage2D(s.TEXTURE_2D, 0, s.RGB, n, r, 0, s.RGB, s.UNSIGNED_SHORT_5_6_5, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_AI88:
            s.texImage2D(s.TEXTURE_2D, 0, s.LUMINANCE_ALPHA, n, r, 0, s.LUMINANCE_ALPHA, s.UNSIGNED_BYTE, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_A8:
            s.texImage2D(s.TEXTURE_2D, 0, s.ALPHA, n, r, 0, s.ALPHA, s.UNSIGNED_BYTE, e);
            break;
        case cc.TEXTURE_2D_PIXEL_FORMAT_I8:
            s.texImage2D(s.TEXTURE_2D, 0, s.LUMINANCE, n, r, 0, s.LUMINANCE, s.UNSIGNED_BYTE, e);
            break;
        default:
            throw "NSInternalInconsistencyException"
        }
        return this._contentSize._width = i.width,
        this._contentSize._height = i.height,
        this._pixelsWide = n,
        this._pixelsHigh = r,
        this._pixelFormat = t,
        this._maxS = i.width / n,
        this._maxT = i.height / r,
        this._hasMipmaps = this._hasPremultipliedAlpha = !1,
        this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURE)),
        this._isLoaded = !0
    },
    drawAtPoint: function(e) {
        var t = [0, this._maxT, this._maxS, this._maxT, 0, 0, this._maxS, 0],
        n = this._pixelsWide * this._maxS,
        r = this._pixelsHigh * this._maxT;
        e = [e.x, e.y, 0, n + e.x, e.y, 0, e.x, r + e.y, 0, n + e.x, r + e.y, 0],
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEXCOORDS),
        this._shaderProgram.use(),
        this._shaderProgram.setUniformsForBuiltins(),
        cc.glBindTexture2D(this),
        n = cc.renderContext,
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, n.FLOAT, !1, 0, e),
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, n.FLOAT, !1, 0, t),
        n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
    },
    drawInRect: function(e) {
        var t = [0, this._maxT, this._maxS, this._maxT, 0, 0, this._maxS, 0];
        e = [e.x, e.y, e.x + e.width, e.y, e.x, e.y + e.height, e.x + e.width, e.y + e.height],
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEXCOORDS),
        this._shaderProgram.use(),
        this._shaderProgram.setUniformsForBuiltins(),
        cc.glBindTexture2D(this);
        var n = cc.renderContext;
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, n.FLOAT, !1, 0, e),
        n.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, n.FLOAT, !1, 0, t),
        n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
    },
    initWithImage: function(e) {
        if (null == e) return cc.log("cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil"),
        !1;
        var t = e.getWidth(),
        n = e.getHeight(),
        r = cc.Configuration.getInstance().getMaxTextureSize();
        return t > r || n > r ? (cc.log("cocos2d: WARNING: Image (" + t + " x " + n + ") is bigger than the supported " + r + " x " + r), !1) : (this._isLoaded = !0, this._initPremultipliedATextureWithImage(e, t, n))
    },
    initWithElement: function(e) {
        e && (this._webTextureObj = cc.renderContext.createTexture(), this._htmlElementObj = e)
    },
    getHtmlElementObj: function() {
        return this._htmlElementObj
    },
    isLoaded: function() {
        return this._isLoaded
    },
    handleLoadedTexture: function() {
        this._isLoaded = !0;
        var e = cc.renderContext;
        cc.glBindTexture2D(this),
        e.pixelStorei(e.UNPACK_ALIGNMENT, 4),
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, this._htmlElementObj),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURE)),
        cc.glBindTexture2D(null),
        e = this._htmlElementObj.height,
        this._pixelsWide = this._contentSize._width = this._htmlElementObj.width,
        this._pixelsHigh = this._contentSize._height = e,
        this._pixelFormat = cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888,
        this._maxT = this._maxS = 1,
        this._hasMipmaps = this._hasPremultipliedAlpha = !1,
        this._callLoadedEventCallbacks()
    },
    initWithString: function(e, t, n, r, i, s) {
        3 == arguments.length && (t = arguments[1], n = arguments[2], r = cc.size(0, 0), i = cc.TEXT_ALIGNMENT_CENTER, s = cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var o = new cc.Image,
        u;
        if (cc.VERTICAL_TEXT_ALIGNMENT_TOP === s) u = cc.TEXT_ALIGNMENT_CENTER === i ? cc.ALIGN_TOP: cc.TEXT_ALIGNMENT_LEFT === i ? cc.ALIGN_TOP_LEFT: cc.ALIGN_TOP_RIGHT;
        else if (cc.VERTICAL_TEXT_ALIGNMENT_CENTER === s) u = cc.TEXT_ALIGNMENT_CENTER === i ? cc.ALIGN_CENTER: cc.TEXT_ALIGNMENT_LEFT === i ? cc.ALIGN_LEFT: cc.ALIGN_RIGHT;
        else {
            if (cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM !== s) return cc.log("Not supported alignment format!"),
            !1;
            u = cc.TEXT_ALIGNMENT_CENTER === i ? cc.ALIGN_BOTTOM: cc.TEXT_ALIGNMENT_LEFT === i ? cc.ALIGN_BOTTOM_LEFT: cc.ALIGN_BOTTOM_RIGHT
        }
        return o.initWithString(e, r.width, r.height, u, t, n) ? this.initWithImage(o) : !1
    },
    initWithETCFile: function(e) {
        return ! 1
    },
    initWithPVRFile: function(e) {
        var t = !1,
        n = new cc.TexturePVR;
        return (t = n.initWithContentsOfFile(e)) ? (n.setRetainName(!0), this._name = n.getName(), this._maxT = this._maxS = 1, this._pixelsWide = n.getWidth(), this._pixelsHigh = n.getHeight(), this._contentSize._width = this._pixelsWide, this._contentSize._height = this._pixelsHigh, this._hasPremultipliedAlpha = cc.PVRHaveAlphaPremultiplied_, this._pixelFormat = n.getFormat(), this.setAntiAliasTexParameters()) : cc.log("cocos2d: Couldn't load PVR image " + e),
        t
    },
    initWithPVRTCData: function(e, t, n, r, i, s) {
        return cc.Configuration.getInstance().supportsPVRTC() ? !0 : (cc.log("cocos2d: WARNING: PVRTC images is not supported."), !1)
    },
    setTexParameters: function(e) {
        var t = cc.renderContext;
        cc.Assert(this._pixelsWide == cc.NextPOT(this._pixelsWide) && this._pixelsHigh == cc.NextPOT(this._pixelsHigh) || e.wrapS == t.CLAMP_TO_EDGE && e.wrapT == t.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures"),
        cc.glBindTexture2D(this),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, e.minFilter),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, e.magFilter),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, e.wrapS),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, e.wrapT)
    },
    setAntiAliasTexParameters: function() {
        var e = cc.renderContext;
        cc.glBindTexture2D(this),
        this._hasMipmaps ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST)
    },
    setAliasTexParameters: function() {
        var e = cc.renderContext;
        cc.glBindTexture2D(this),
        this._hasMipmaps ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST)
    },
    generateMipmap: function() {
        cc.Assert(this._pixelsWide == cc.NextPOT(this._pixelsWide) && this._pixelsHigh == cc.NextPOT(this._pixelsHigh), "Mimpap texture only works in POT textures"),
        cc.glBindTexture2D(this),
        cc.renderContext.generateMipmap(cc.renderContext.TEXTURE_2D),
        this._hasMipmaps = !0
    },
    stringForFormat: function() {
        switch (this._pixelFormat) {
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888:
            return "RGBA8888";
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB888:
            return "RGB888";
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB565:
            return "RGB565";
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444:
            return "RGBA4444";
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1:
            return "RGB5A1";
        case cc.TEXTURE_2D_PIXEL_FORMAT_AI88:
            return "AI88";
        case cc.TEXTURE_2D_PIXEL_FORMAT_A8:
            return "A8";
        case cc.TEXTURE_2D_PIXEL_FORMAT_I8:
            return "I8";
        case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4:
            return "PVRTC4";
        case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2:
            return "PVRTC2";
        default:
            cc.log("stringForFormat: " + this._pixelFormat + ", cannot give useful result, it's a unrecognized pixel format")
        }
        return ""
    },
    bitsPerPixelForFormat: function(e) {
        e = e || this._pixelFormat;
        switch (e) {
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888:
            return 32;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB888:
            return 32;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB565:
            return 16;
        case cc.TEXTURE_2D_PIXEL_FORMAT_A8:
            return 8;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444:
            return 16;
        case cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1:
            return 16;
        case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4:
            return 4;
        case cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2:
            return 2;
        case cc.TEXTURE_2D_PIXEL_FORMAT_I8:
            return 8;
        case cc.TEXTURE_2D_PIXEL_FORMAT_AI88:
            return 16;
        default:
            return cc.log("bitsPerPixelForFormat: " + this._pixelFormat + ", cannot give useful result, it's a illegal pixel format"),
            -1
        }
    },
    _initPremultipliedATextureWithImage: function(e, t, n) {
        var r = e.getData(),
        i = null,
        i = null,
        s = e.hasAlpha(),
        o = cc.size(e.getWidth(), e.getHeight()),
        u = cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT,
        a = e.getBitsPerComponent();
        s || (8 <= a ? u = cc.TEXTURE_2D_PIXEL_FORMAT_RGB888: (cc.log("cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha"), u = cc.TEXTURE_2D_PIXEL_FORMAT_RGB565));
        var f = t * n;
        if (u == cc.TEXTURE_2D_PIXEL_FORMAT_RGB565) if (s) for (r = new Uint16Array(t * n), i = e.getData(), a = 0; a < f; ++a) r[a] = (i[a] >> 0 & 255) >> 3 << 11 | (i[a] >> 8 & 255) >> 2 << 5 | (i[a] >> 16 & 255) >> 3 << 0;
        else for (r = new Uint16Array(t * n), i = e.getData(), a = 0; a < f; ++a) r[a] = (i[a] & 255) >> 3 << 11 | (i[a] & 255) >> 2 << 5 | (i[a] & 255) >> 3 << 0;
        else if (u == cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444) for (r = new Uint16Array(t * n), i = e.getData(), a = 0; a < f; ++a) r[a] = (i[a] >> 0 & 255) >> 4 << 12 | (i[a] >> 8 & 255) >> 4 << 8 | (i[a] >> 16 & 255) >> 4 << 4 | (i[a] >> 24 & 255) >> 4 << 0;
        else if (u == cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1) for (r = new Uint16Array(t * n), i = e.getData(), a = 0; a < f; ++a) r[a] = (i[a] >> 0 & 255) >> 3 << 11 | (i[a] >> 8 & 255) >> 3 << 6 | (i[a] >> 16 & 255) >> 3 << 1 | (i[a] >> 24 & 255) >> 7 << 0;
        else if (u == cc.TEXTURE_2D_PIXEL_FORMAT_A8) for (r = new Uint8Array(t * n), i = e.getData(), a = 0; a < f; ++a) r[a] = i >> 24 & 255;
        if (s && u == cc.TEXTURE_2D_PIXEL_FORMAT_RGB888) for (i = e.getData(), r = new Uint8Array(t * n * 3), a = 0; a < f; ++a) r[3 * a] = i >> 0 & 255,
        r[3 * a + 1] = i >> 8 & 255,
        r[3 * a + 2] = i >> 16 & 255;
        return this.initWithData(r, u, t, n, o),
        e.getData(),
        this._hasPremultipliedAlpha = e.isPremultipliedAlpha(),
        !0
    },
    addLoadedEventListener: function(e, t) {
        this._loadedEventListeners.push({
            eventCallback: e,
            eventTarget: t
        })
    },
    removeLoadedEventListener: function(e) {
        for (var t = this._loadedEventListeners,
        n = 0; n < t.length; n++) t[n].eventTarget == e && t.splice(n, 1)
    },
    _callLoadedEventCallbacks: function() {
        for (var e = this._loadedEventListeners,
        t = 0,
        n = e.length; t < n; t++) {
            var r = e[t];
            r.eventCallback.call(r.eventTarget, this)
        }
        e.length = 0
    }
}),
cc.Texture2DCanvas = cc.Class.extend({
    _contentSize: null,
    _isLoaded: !1,
    _htmlElementObj: null,
    _loadedEventListeners: null,
    ctor: function() {
        this._contentSize = cc._sizeConst(0, 0),
        this._isLoaded = !1,
        this._htmlElementObj = null,
        this._loadedEventListeners = []
    },
    getPixelsWide: function() {
        return this._contentSize._width
    },
    getPixelsHigh: function() {
        return this._contentSize._height
    },
    getContentSize: function() {
        var e = cc.CONTENT_SCALE_FACTOR();
        return cc.size(this._contentSize._width / e, this._contentSize._height / e)
    },
    getContentSizeInPixels: function() {
        return this._contentSize
    },
    initWithElement: function(e) {
        e && (this._htmlElementObj = e)
    },
    getHtmlElementObj: function() {
        return this._htmlElementObj
    },
    isLoaded: function() {
        return this._isLoaded
    },
    handleLoadedTexture: function() {
        this._isLoaded = !0;
        var e = this._htmlElementObj;
        this._contentSize._width = e.width,
        this._contentSize._height = e.height,
        this._callLoadedEventCallbacks()
    },
    description: function() {
        return "<cc.Texture2D | width = " + this._contentSize._width + " height " + this._contentSize._height + ">"
    },
    initWithData: function(e, t, n, r, i) {
        return ! 1
    },
    initWithImage: function(e) {
        return ! 1
    },
    initWithString: function(e, t, n, r, i, s) {
        return ! 1
    },
    releaseTexture: function() {},
    getName: function() {
        return null
    },
    getMaxS: function() {
        return 1
    },
    setMaxS: function(e) {},
    getMaxT: function() {
        return 1
    },
    setMaxT: function(e) {},
    getShaderProgram: function() {
        return null
    },
    setShaderProgram: function(e) {},
    hasPremultipliedAlpha: function() {
        return ! 1
    },
    hasMipmaps: function() {
        return ! 1
    },
    releaseData: function(e) {},
    keepData: function(e, t) {
        return e
    },
    drawAtPoint: function(e) {},
    drawInRect: function(e) {},
    initWithETCFile: function(e) {
        return ! 1
    },
    initWithPVRFile: function(e) {
        return ! 1
    },
    initWithPVRTCData: function(e, t, n, r, i, s) {
        return ! 0
    },
    setTexParameters: function(e) {},
    setAntiAliasTexParameters: function() {},
    setAliasTexParameters: function() {},
    generateMipmap: function() {},
    stringForFormat: function() {
        return ""
    },
    bitsPerPixelForFormat: function(e) {
        return - 1
    },
    addLoadedEventListener: function(e, t) {
        this._loadedEventListeners.push({
            eventCallback: e,
            eventTarget: t
        })
    },
    removeLoadedEventListener: function(e) {
        for (var t = this._loadedEventListeners,
        n = 0; n < t.length; n++) t[n].eventTarget == e && t.splice(n, 1)
    },
    _callLoadedEventCallbacks: function() {
        for (var e = this._loadedEventListeners,
        t = 0,
        n = e.length; t < n; t++) {
            var r = e[t];
            r.eventCallback.call(r.eventTarget, this)
        }
        e.length = 0
    }
}),
cc.Texture2D = cc.Browser.supportWebGL ? cc.Texture2DWebGL: cc.Texture2DCanvas,
cc.Texture2D.setDefaultAlphaPixelFormat = function(e) {
    cc._defaultAlphaPixelFormat = e
},
cc.Texture2D.defaultAlphaPixelFormat = function() {
    return cc._defaultAlphaPixelFormat
},
cc.Texture2D.getDefaultAlphaPixelFormat = function() {
    return cc._defaultAlphaPixelFormat
},
cc.Texture2D.PVRImagesHavePremultipliedAlpha = function(e) {
    cc.PVRHaveAlphaPremultiplied_ = e
},
cc.g_sharedTextureCache = null,
cc.loadImage = function(e) {
    if (cc.computeImageFormatType(e) == cc.FMT_UNKNOWN) cc.log("unsupported format:" + e);
    else {
        var t = new Image;
        t.src = e,
        t.addEventListener("load",
        function() {
            cc.TextureCache.getInstance().cacheImage(e, t),
            this.removeEventListener("load", arguments.callee, !1)
        },
        !1)
    }
},
cc.computeImageFormatType = function(e) {
    return 0 < e.toLowerCase().indexOf(".jpg") || 0 < e.toLowerCase().indexOf(".jpeg") ? cc.FMT_JPG: 0 < e.toLowerCase().indexOf(".png") ? cc.FMT_PNG: 0 < e.toLowerCase().indexOf(".webp") ? cc.FMT_WEBP: cc.FMT_UNKNOWN
},
cc.TextureCache = cc.Class.extend({
    _textures: null,
    _textureColorsCache: null,
    _textureKeySeq: null,
    _rendererInitialized: !1,
    _loadedTexturesBefore: null,
    _loadingTexturesBefore: null,
    ctor: function() {
        if (cc.g_sharedTextureCache) throw "Attempted to allocate a second instance of a singleton.";
        this._textureKeySeq += 0 | 1e3 * Math.random(),
        this._textures = {},
        this._textureColorsCache = {},
        cc.renderContextType === cc.WEBGL && (this._loadedTexturesBefore = {},
        this._loadingTexturesBefore = {})
    },
    _addImageAsyncCallBack: function(e, t) {
        e && "string" == typeof t ? e[t]() : e && "function" == typeof t && t.call(e)
    },
    _initializingRenderer: function() {
        this._rendererInitialized = !0;
        var e, t = this._loadedTexturesBefore,
        n = this._textures;
        for (e in t) {
            var r = t[e],
            i = new cc.Texture2D;
            i.initWithElement(r),
            i.handleLoadedTexture(),
            n[e] = i
        }
        this._loadedTexturesBefore = {}
    },
    addPVRTCImage: function(e) {
        cc.log("TextureCache:addPVRTCImage does not support on HTML5")
    },
    addETCImage: function(e) {
        cc.log("TextureCache:addPVRTCImage does not support on HTML5")
    },
    description: function() {
        return "<TextureCache | Number of textures = " + this._textures.length + ">"
    },
    textureForKey: function(e) {
        return e = cc.FileUtils.getInstance().fullPathForFilename(e),
        this._textures.hasOwnProperty(e) ? this._textures[e] : null
    },
    getKeyByTexture: function(e) {
        for (var t in this._textures) if (this._textures[t] == e) return t;
        return null
    },
    _generalTextureKey: function() {
        return this._textureKeySeq++,
        "_textureKey_" + this._textureKeySeq
    },
    getTextureColors: function(e) {
        var t = this.getKeyByTexture(e);
        return t || (t = e instanceof HTMLImageElement ? e.src: this._generalTextureKey()),
        this._textureColorsCache.hasOwnProperty(t) || (this._textureColorsCache[t] = cc.generateTextureCacheForColor(e)),
        this._textureColorsCache[t]
    },
    addPVRImage: function(e) {
        if (!e) throw "cc.TextureCache.addPVRImage(): path should be non-null";
        e = cc.FileUtils.getInstance().fullPathForFilename(e);
        if (null != this._textures[e]) return this._textures[e];
        var t = new cc.Texture2D;
        return t.initWithPVRFile(e) ? this._textures[e] = t: cc.log("cocos2d: Couldn't add PVRImage:" + e + " in TextureCache"),
        t
    },
    removeAllTextures: function() {
        var e = this._textures,
        t;
        for (t in e) e[t] && e[t].releaseTexture();
        this._textures = {}
    },
    removeTexture: function(e) {
        if (e) {
            var t = this._textures,
            n;
            for (n in t) t[n] == e && (t[n].releaseTexture(), delete t[n])
        }
    },
    removeTextureForKey: function(e) {
        null != e && (e = cc.FileUtils.getInstance().fullPathForFilename(e), this._textures[e] && delete this._textures[e])
    },
    addImageAsync: function(e, t, n) {
        if (!e) throw "cc.TextureCache.addImageAsync(): path should be non-null";
        e = cc.FileUtils.getInstance().fullPathForFilename(e);
        var r = this._textures[e],
        i,
        s;
        if (r) r.isLoaded() ? this._addImageAsyncCallBack(t, n) : (s = this, i = r.getHtmlElementObj(), i.addEventListener("load",
        function() {
            r.handleLoadedTexture(),
            s._addImageAsyncCallBack(t, n),
            this.removeEventListener("load", arguments.callee, !1)
        }));
        else {
            i = new Image,
            i.crossOrigin = "Anonymous",
            s = this,
            i.addEventListener("load",
            function() {
                s._textures.hasOwnProperty(e) && s._textures[e].handleLoadedTexture(),
                s._addImageAsyncCallBack(t, n),
                this.removeEventListener("load", arguments.callee, !1),
                this.removeEventListener("error", arguments.callee, !1)
            }),
            i.addEventListener("error",
            function() {
                cc.Loader.getInstance().onResLoadingErr(e),
                s._textures.hasOwnProperty(e) && delete s._textures[e],
                this.removeEventListener("error", arguments.callee, !1)
            }),
            i.src = e;
            var o = new cc.Texture2D;
            o.initWithElement(i),
            this._textures[e] = o
        }
        return this._textures[e]
    },
    _addImageBeforeRenderer: function(e) {
        var t = new Image;
        t.crossOrigin = "Anonymous";
        var n = this;
        t.addEventListener("load",
        function() {
            cc.Loader.getInstance().onResLoaded(),
            n._loadedTexturesBefore[e] = t,
            delete n._loadingTexturesBefore[e],
            this.removeEventListener("load", arguments.callee, !1),
            this.removeEventListener("error", arguments.callee, !1)
        }),
        t.addEventListener("error",
        function() {
            cc.Loader.getInstance().onResLoadingErr(e),
            delete n._loadingTexturesBefore[e],
            this.removeEventListener("error", arguments.callee, !1)
        }),
        t.src = e,
        this._loadingTexturesBefore[e] = t
    },
    addImage: function(e) {
        if (!e) throw "cc.Texture.addImage(): path should be non-null";
        if (cc.renderContextType === cc.WEBGL && !this._rendererInitialized) return this._addImageBeforeRenderer(e);
        e = cc.FileUtils.getInstance().fullPathForFilename(e);
        var t = this._textures[e],
        n;
        if (t) t.isLoaded() ? cc.Loader.getInstance().onResLoaded() : (n = t.getHtmlElementObj(), n.addEventListener("load",
        function() {
            t.handleLoadedTexture(),
            cc.Loader.getInstance().onResLoaded(),
            this.removeEventListener("load", arguments.callee, !1)
        }));
        else {
            n = new Image,
            n.crossOrigin = "Anonymous";
            var r = this;
            n.addEventListener("load",
            function() {
                cc.Loader.getInstance().onResLoaded(),
                r._textures.hasOwnProperty(e) && r._textures[e].handleLoadedTexture(),
                this.removeEventListener("load", arguments.callee, !1),
                this.removeEventListener("error", arguments.callee, !1)
            }),
            n.addEventListener("error",
            function() {
                cc.Loader.getInstance().onResLoadingErr(e),
                r._textures.hasOwnProperty(e) && delete r._textures[e],
                this.removeEventListener("error", arguments.callee, !1)
            }),
            n.src = e;
            var i = new cc.Texture2D;
            i.initWithElement(n),
            this._textures[e] = i
        }
        return this._textures[e]
    },
    cacheImage: function(e, t) {
        if (t instanceof cc.Texture2D) this._textures[e] = t;
        else {
            var n = new cc.Texture2D;
            n.initWithElement(t),
            n.handleLoadedTexture(),
            this._textures[e] = n
        }
    },
    addUIImage: function(e, t) {
        if (!e) throw "cc.Texture.addUIImage(): image should be non-null";
        if (t && this._textures.hasOwnProperty(t) && this._textures[t]) return this._textures[t];
        var n = new cc.Texture2D;
        return n.initWithImage(e),
        null != t && null != n ? this._textures[t] = n: cc.log("cocos2d: Couldn't add UIImage in TextureCache"),
        n
    },
    dumpCachedTextureInfo: function() {
        var e = 0,
        t = 0,
        n = this._textures,
        r;
        for (r in n) {
            var i = n[r];
            e++,
            i.getHtmlElementObj() instanceof HTMLImageElement ? cc.log("cocos2d: '" + r + "' id=" + i.getHtmlElementObj().src + " " + i.getPixelsWide() + " x " + i.getPixelsHigh()) : cc.log("cocos2d: '" + r + "' id= HTMLCanvasElement " + i.getPixelsWide() + " x " + i.getPixelsHigh()),
            t += i.getPixelsWide() * i.getPixelsHigh() * 4
        }
        n = this._textureColorsCache;
        for (r in n) {
            var i = n[r],
            s;
            for (s in i) {
                var o = i[s];
                e++,
                cc.log("cocos2d: '" + r + "' id= HTMLCanvasElement " + o.width + " x " + o.height),
                t += o.width * o.height * 4
            }
        }
        cc.log("cocos2d: TextureCache dumpDebugInfo: " + e + " textures, HTMLCanvasElement for " + t / 1024 + " KB (" + (t / 1048576).toFixed(2) + " MB)")
    }
}),
cc.TextureCache.getInstance = function() {
    return cc.g_sharedTextureCache || (cc.g_sharedTextureCache = new cc.TextureCache),
    cc.g_sharedTextureCache
},
cc.TextureCache.purgeSharedTextureCache = function() {
    cc.g_sharedTextureCache = null
},
cc.TextureAtlas = cc.Class.extend({
    _indices: null,
    _buffersVBO: null,
    _dirty: !1,
    _capacity: 0,
    _texture: null,
    _quads: null,
    _quadsArrayBuffer: null,
    _quadsWebBuffer: null,
    _quadsReader: null,
    ctor: function() {
        this._buffersVBO = []
    },
    getTotalQuads: function() {
        return this._totalQuads
    },
    getCapacity: function() {
        return this._capacity
    },
    getTexture: function() {
        return this._texture
    },
    setTexture: function(e) {
        this._texture = e
    },
    setDirty: function(e) {
        this._dirty = e
    },
    isDirty: function() {
        return this._dirty
    },
    getQuads: function() {
        return this._quads
    },
    setQuads: function(e) {
        this._quads = e
    },
    _copyQuadsToTextureAtlas: function(e, t) {
        if (e) for (var n = 0; n < e.length; n++) this._setQuadToArray(e[n], t + n)
    },
    _setQuadToArray: function(e, t) {
        var n = this._quads;
        n[t] ? (n[t].bl = e.bl, n[t].br = e.br, n[t].tl = e.tl, n[t].tr = e.tr) : n[t] = new cc.V3F_C4B_T2F_Quad(e.tl, e.bl, e.tr, e.br, this._quadsArrayBuffer, t * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT)
    },
    description: function() {
        return "<cc.TextureAtlas | totalQuads =" + this._totalQuads + ">"
    },
    _setupIndices: function() {
        if (0 !== this._capacity) for (var e = this._indices,
        t = this._capacity,
        n = 0; n < t; n++) cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP ? (e[6 * n + 0] = 4 * n + 0, e[6 * n + 1] = 4 * n + 0, e[6 * n + 2] = 4 * n + 2, e[6 * n + 3] = 4 * n + 1, e[6 * n + 4] = 4 * n + 3, e[6 * n + 5] = 4 * n + 3) : (e[6 * n + 0] = 4 * n + 0, e[6 * n + 1] = 4 * n + 1, e[6 * n + 2] = 4 * n + 2, e[6 * n + 3] = 4 * n + 3, e[6 * n + 4] = 4 * n + 2, e[6 * n + 5] = 4 * n + 1)
    },
    _setupVBO: function() {
        var e = cc.renderContext;
        this._buffersVBO[0] = e.createBuffer(),
        this._buffersVBO[1] = e.createBuffer(),
        this._quadsWebBuffer = e.createBuffer(),
        this._mapBuffers()
    },
    _mapBuffers: function() {
        var e = cc.renderContext;
        e.bindBuffer(e.ARRAY_BUFFER, this._quadsWebBuffer),
        e.bufferData(e.ARRAY_BUFFER, this._quadsArrayBuffer, e.DYNAMIC_DRAW),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]),
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, this._indices, e.STATIC_DRAW)
    },
    initWithFile: function(e, t) {
        var n = cc.TextureCache.getInstance().addImage(e);
        return n ? this.initWithTexture(n, t) : (cc.log("cocos2d: Could not open file: " + e), !1)
    },
    initWithTexture: function(e, t) {
        if (!e) throw "cc.TextureAtlas.initWithTexture():texture should be non-null";
        this._capacity = t |= 0,
        this._totalQuads = 0,
        this._texture = e,
        this._quads = [],
        this._indices = new Uint16Array(6 * t);
        var n = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        this._quadsArrayBuffer = new ArrayBuffer(n * t),
        this._quadsReader = new Uint8Array(this._quadsArrayBuffer);
        if ((!this._quads || !this._indices) && 0 < t) return ! 1;
        for (var r = this._quads,
        i = 0; i < t; i++) r[i] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, i * n);
        return this._setupIndices(),
        this._setupVBO(),
        this._dirty = !0
    },
    updateQuad: function(e, t) {
        if (!e) throw "cc.TextureAtlas.updateQuad(): quad should be non-null";
        if (0 > t || t >= this._capacity) throw "cc.TextureAtlas.updateQuad(): Invalid index";
        this._totalQuads = Math.max(t + 1, this._totalQuads),
        this._setQuadToArray(e, t),
        this._dirty = !0
    },
    insertQuad: function(e, t) {
        if (t >= this._capacity) throw "cc.TextureAtlas.insertQuad(): Invalid index";
        this._totalQuads++;
        if (this._totalQuads > this._capacity) cc.log("cc.TextureAtlas.insertQuad(): invalid totalQuads");
        else {
            var n = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT,
            r = t * n,
            i = (this._totalQuads - 1 - t) * n;
            this._quads[this._totalQuads - 1] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * n),
            this._quadsReader.set(this._quadsReader.subarray(r, r + i), r + n),
            this._setQuadToArray(e, t),
            this._dirty = !0
        }
    },
    insertQuads: function(e, t, n) {
        n = n || e.length;
        if (t + n > this._capacity) throw "cc.TextureAtlas.insertQuad(): Invalid index + amount";
        var r = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        this._totalQuads += n;
        if (this._totalQuads > this._capacity) cc.log("cc.TextureAtlas.insertQuad(): invalid totalQuads");
        else {
            var i = t * r,
            s = (this._totalQuads - 1 - t - n) * r,
            o = this._totalQuads - 1 - n,
            u;
            for (u = 0; u < n; u++) this._quads[o + u] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * r);
            this._quadsReader.set(this._quadsReader.subarray(i, i + s), i + r * n);
            for (u = 0; u < n; u++) this._setQuadToArray(e[u], t + u);
            this._dirty = !0
        }
    },
    insertQuadFromIndex: function(e, t) {
        if (e !== t) {
            if (0 > t && t >= this._totalQuads) throw "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex";
            if (0 > e && e >= this._totalQuads) throw "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex";
            var n = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT,
            r = this._quadsReader,
            i = r.subarray(e * n, n),
            s;
            e > t ? (s = t * n, r.set(r.subarray(s, s + (e - t) * n), s + n), r.set(i, s)) : (s = (e + 1) * n, r.set(r.subarray(s, s + (t - e) * n), s - n), r.set(i, t * n)),
            this._dirty = !0
        }
    },
    removeQuadAtIndex: function(e) {
        if (e >= this._totalQuads) throw "cc.TextureAtlas.removeQuadAtIndex(): Invalid index";
        var t = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        this._totalQuads--,
        this._quads.length = this._totalQuads;
        if (e !== this._totalQuads) {
            var n = (e + 1) * t;
            this._quadsReader.set(this._quadsReader.subarray(n, n + (this._totalQuads - e) * t), n - t)
        }
        this._dirty = !0
    },
    removeQuadsAtIndex: function(e, t) {
        if (e + t > this._totalQuads) throw "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds";
        this._totalQuads -= t;
        if (e !== this._totalQuads) {
            var n = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT,
            r = (e + t) * n,
            i = e * n;
            this._quadsReader.set(this._quadsReader.subarray(r, r + (this._totalQuads - e) * n), i)
        }
        this._dirty = !0
    },
    removeAllQuads: function() {
        this._totalQuads = this._quads.length = 0
    },
    _setDirty: function(e) {
        this._dirty = e
    },
    resizeCapacity: function(e) {
        if (e == this._capacity) return ! 0;
        var t = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT,
        n = this._capacity;
        this._totalQuads = Math.min(this._totalQuads, e);
        var r = this._capacity = 0 | e,
        i = this._totalQuads;
        if (null == this._quads) for (this._quads = [], this._quadsArrayBuffer = new ArrayBuffer(t * r), this._quadsReader = new Uint8Array(this._quadsArrayBuffer), e = 0; e < r; e++) this._quads = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, e * t);
        else {
            var s, o, u = this._quads;
            if (r > n) {
                s = [],
                o = new ArrayBuffer(t * r);
                for (e = 0; e < i; e++) s[e] = new cc.V3F_C4B_T2F_Quad(u[e].tl, u[e].bl, u[e].tr, u[e].br, o, e * t);
                for (; e < r; e++) s[e] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, o, e * t)
            } else for (i = Math.max(i, r), s = [], o = new ArrayBuffer(t * r), e = 0; e < i; e++) s[e] = new cc.V3F_C4B_T2F_Quad(u[e].tl, u[e].bl, u[e].tr, u[e].br, o, e * t);
            this._quadsReader = new Uint8Array(o),
            this._quads = s,
            this._quadsArrayBuffer = o
        }
        return null == this._indices ? this._indices = new Uint16Array(6 * r) : r > n ? (t = new Uint16Array(6 * r), t.set(this._indices, 0), this._indices = t) : this._indices = this._indices.subarray(0, 6 * r),
        this._setupIndices(),
        this._mapBuffers(),
        this._dirty = !0
    },
    increaseTotalQuadsWith: function(e) {
        this._totalQuads += e
    },
    moveQuadsFromIndex: function(e, t, n) {
        if (2 == arguments.length) {
            n = t,
            t = this._totalQuads - e;
            if (n + (this._totalQuads - e) > this._capacity) throw "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds";
            if (0 === t) return
        } else {
            if (n + t > this._totalQuads) throw "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex";
            if (e >= this._totalQuads) throw "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex";
            if (e == n) return
        }
        var r = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT,
        i = e * r,
        s = t * r,
        o = this._quadsReader,
        u = o.subarray(i, i + s),
        a = n * r,
        f;
        n < e ? (f = n * r, o.set(o.subarray(f, f + (e - n) * r), f + s)) : (f = (e + t) * r, o.set(o.subarray(f, f + (n - e) * r), i)),
        o.set(u, a),
        this._dirty = !0
    },
    fillWithEmptyQuadsFromIndex: function(e, t) {
        for (var n = t * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT,
        r = new Uint8Array(this._quadsArrayBuffer, e * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, n), i = 0; i < n; i++) r[i] = 0
    },
    drawNumberOfQuads: function(e, t) {
        t = t || 0;
        if (0 !== e && this._texture && this._texture.isLoaded()) {
            var n = cc.renderContext;
            cc.glBindTexture2D(this._texture),
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX),
            n.bindBuffer(n.ARRAY_BUFFER, this._quadsWebBuffer),
            this._dirty && n.bufferData(n.ARRAY_BUFFER, this._quadsArrayBuffer, n.DYNAMIC_DRAW),
            n.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, n.FLOAT, !1, 24, 0),
            n.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, n.UNSIGNED_BYTE, !0, 24, 12),
            n.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, n.FLOAT, !1, 24, 16),
            this._dirty && (this._dirty = !1),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]),
            cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP ? n.drawElements(n.TRIANGLE_STRIP, 6 * e, n.UNSIGNED_SHORT, 6 * t * this._indices.BYTES_PER_ELEMENT) : n.drawElements(n.TRIANGLES, 6 * e, n.UNSIGNED_SHORT, 6 * t * this._indices.BYTES_PER_ELEMENT),
            cc.g_NumberOfDraws++
        }
    },
    drawQuads: function() {
        this.drawNumberOfQuads(this._totalQuads, 0)
    },
    _releaseBuffer: function() {
        var e = cc.renderContext;
        this._buffersVBO && (this._buffersVBO[0] && e.deleteBuffer(this._buffersVBO[0]), this._buffersVBO[1] && e.deleteBuffer(this._buffersVBO[1])),
        this._quadsWebBuffer && e.deleteBuffer(this._quadsWebBuffer)
    }
}),
cc.TextureAtlas.create = function(e, t) {
    var n = new cc.TextureAtlas;
    return n && n.initWithFile(e, t) ? n: null
},
cc.TextureAtlas.createWithTexture = function(e, t) {
    var n = new cc.TextureAtlas;
    return n && n.initWithTexture(e, t) ? n: null
},
cc.Scene = cc.Node.extend({
    ctor: function() {
        cc.Node.prototype.ctor.call(this),
        this._ignoreAnchorPointForPosition = !0,
        this.setAnchorPoint(.5, .5),
        this.setContentSize(cc.Director.getInstance().getWinSize())
    }
}),
cc.Scene.create = function() {
    return new cc.Scene
},
cc.TOUCH_ALL_AT_ONCE = 0,
cc.TOUCH_ONE_BY_ONE = 1,
cc.Layer = cc.Node.extend({
    _isTouchEnabled: !1,
    _isAccelerometerEnabled: !1,
    _isKeyboardEnabled: !1,
    _touchPriority: 0,
    _touchMode: cc.TOUCH_ALL_AT_ONCE,
    _isMouseEnabled: !1,
    _mousePriority: 0,
    ctor: function() {
        cc.Node.prototype.ctor.call(this),
        this._isKeyboardEnabled = this._isAccelerometerEnabled = this._isTouchEnabled = !1,
        this._touchPriority = 0,
        this._touchMode = cc.TOUCH_ALL_AT_ONCE,
        this._isMouseEnabled = !1,
        this._mousePriority = 0
    },
    _initLayer: function() {
        this.setAnchorPoint(.5, .5),
        this._ignoreAnchorPointForPosition = !0;
        var e = cc.Director.getInstance();
        this.setContentSize(e.getWinSize())
    },
    init: function() {
        return cc.Node.prototype.init.call(this),
        this._initLayer(),
        !0
    },
    registerWithTouchDispatcher: function() {
        this._touchMode === cc.TOUCH_ALL_AT_ONCE ? cc.registerStandardDelegate(this, this._touchPriority) : cc.registerTargetedDelegate(this._touchPriority, !0, this)
    },
    isMouseEnabled: function() {
        return this._isMouseEnabled
    },
    setMouseEnabled: function(e) {
        if (!cc.MouseDispatcher) throw "cc.MouseDispatcher is undefined, maybe it has been removed from js loading list.";
        this._isMouseEnabled != e && (this._isMouseEnabled = e, this._running && (e ? cc.Director.getInstance().getMouseDispatcher().addMouseDelegate(this, this._mousePriority) : cc.Director.getInstance().getMouseDispatcher().removeMouseDelegate(this)))
    },
    setMousePriority: function(e) {
        if (!cc.MouseDispatcher) throw "cc.MouseDispatcher is undefined, maybe it has been removed from js loading list.";
        this._mousePriority !== e && (this._mousePriority = e, this._isMouseEnabled && (this.setMouseEnabled(!1), this.setMouseEnabled(!0)))
    },
    getMousePriority: function() {
        return this._mousePriority
    },
    isTouchEnabled: function() {
        return this._isTouchEnabled
    },
    setTouchEnabled: function(e) {
        this._isTouchEnabled !== e && (this._isTouchEnabled = e, this._running && (e ? this.registerWithTouchDispatcher() : cc.unregisterTouchDelegate(this)))
    },
    getTouchPriority: function() {
        return this._touchPriority
    },
    setTouchPriority: function(e) {
        this._touchPriority !== e && (this._touchPriority = e, this._isTouchEnabled && (this.setTouchEnabled(!1), this.setTouchEnabled(!0)))
    },
    getTouchMode: function() {
        return this._touchMode
    },
    setTouchMode: function(e) {
        this._touchMode !== e && (this._touchMode = e, this._isTouchEnabled && (this.setTouchEnabled(!1), this.setTouchEnabled(!0)))
    },
    isAccelerometerEnabled: function() {
        return this._isAccelerometerEnabled
    },
    setAccelerometerEnabled: function(e) {
        if (!cc.Accelerometer) throw "cc.Accelerometer is undefined, maybe it has been removed from js loading list.";
        if (e !== this._isAccelerometerEnabled && (this._isAccelerometerEnabled = e, this._running)) {
            var t = cc.Director.getInstance();
            e ? t.getAccelerometer().setDelegate(this) : t.getAccelerometer().setDelegate(null)
        }
    },
    setAccelerometerInterval: function(e) {
        this._isAccelerometerEnabled && cc.Accelerometer && cc.Director.getInstance().getAccelerometer().setAccelerometerInterval(e)
    },
    onAccelerometer: function(e) {
        cc.log("onAccelerometer event should be handled.")
    },
    isKeyboardEnabled: function() {
        return this._isKeyboardEnabled
    },
    setKeyboardEnabled: function(e) {
        if (!cc.KeyboardDispatcher) throw "cc.KeyboardDispatcher is undefined, maybe it has been removed from js loading list.";
        if (e !== this._isKeyboardEnabled && (this._isKeyboardEnabled = e, this._running)) {
            var t = cc.Director.getInstance();
            e ? t.getKeyboardDispatcher().addDelegate(this) : t.getKeyboardDispatcher().removeDelegate(this)
        }
    },
    onEnter: function() {
        var e = cc.Director.getInstance();
        this._isTouchEnabled && this.registerWithTouchDispatcher(),
        cc.Node.prototype.onEnter.call(this),
        this._isAccelerometerEnabled && cc.Accelerometer && e.getAccelerometer().setDelegate(this),
        this._isKeyboardEnabled && cc.KeyboardDispatcher && e.getKeyboardDispatcher().addDelegate(this),
        this._isMouseEnabled && cc.MouseDispatcher && e.getMouseDispatcher().addMouseDelegate(this, this._mousePriority)
    },
    onExit: function() {
        var e = cc.Director.getInstance();
        this._isTouchEnabled && cc.unregisterTouchDelegate(this),
        this._isAccelerometerEnabled && cc.Accelerometer && e.getAccelerometer().setDelegate(null),
        this._isKeyboardEnabled && cc.KeyboardDispatcher && e.getKeyboardDispatcher().removeDelegate(this),
        this._isMouseEnabled && cc.MouseDispatcher && e.getMouseDispatcher().removeMouseDelegate(this),
        cc.Node.prototype.onExit.call(this)
    },
    onEnterTransitionDidFinish: function() {
        this._isAccelerometerEnabled && cc.Accelerometer && cc.Director.getInstance().getAccelerometer().setDelegate(this),
        cc.Node.prototype.onEnterTransitionDidFinish.call(this)
    },
    onTouchBegan: function(e, t) {
        return cc.log("onTouchBegan event should be handled."),
        !0
    },
    onTouchMoved: function(e, t) {},
    onTouchEnded: function(e, t) {},
    onTouchCancelled: function(e, t) {},
    onTouchesBegan: function(e, t) {},
    onTouchesMoved: function(e, t) {},
    onTouchesEnded: function(e, t) {},
    onTouchesCancelled: function(e, t) {},
    onMouseDown: function(e) {
        return ! 1
    },
    onMouseDragged: function(e) {
        return ! 1
    },
    onMouseMoved: function(e) {
        return ! 1
    },
    onMouseUp: function(e) {
        return ! 1
    },
    onRightMouseDown: function(e) {
        return ! 1
    },
    onRightMouseDragged: function(e) {
        return ! 1
    },
    onRightMouseUp: function(e) {
        return ! 1
    },
    onOtherMouseDown: function(e) {
        return ! 1
    },
    onOtherMouseDragged: function(e) {
        return ! 1
    },
    onOtherMouseUp: function(e) {
        return ! 1
    },
    onScrollWheel: function(e) {
        return ! 1
    },
    onMouseEntered: function(e) {
        return ! 1
    },
    onMouseExited: function(e) {
        return ! 1
    },
    onKeyDown: function(e) {},
    onKeyUp: function(e) {}
}),
cc.Layer.create = function() {
    var e = new cc.Layer;
    return e && e.init() ? e: null
},
cc.LayerRGBA = cc.Layer.extend({
    RGBAProtocol: !0,
    _displayedOpacity: 0,
    _realOpacity: 0,
    _displayedColor: null,
    _realColor: null,
    _cascadeOpacityEnabled: !1,
    _cascadeColorEnabled: !1,
    ctor: function() {
        cc.Layer.prototype.ctor.call(this),
        this.RGBAProtocol = !0,
        this._realOpacity = this._displayedOpacity = 255,
        this._displayedColor = cc.white(),
        this._realColor = cc.white(),
        this._cascadeColorEnabled = this._cascadeOpacityEnabled = !1
    },
    init: function() {
        return cc.Layer.prototype.init.call(this) ? (this.setCascadeOpacityEnabled(!1), this.setCascadeColorEnabled(!1), !0) : !1
    },
    getOpacity: function() {
        return this._realOpacity
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity
    },
    setOpacity: function(e) {
        this._displayedOpacity = this._realOpacity = e,
        e = 255;
        var t = this._parent;
        t && t.RGBAProtocol && t.isCascadeOpacityEnabled() && (e = t.getDisplayedOpacity()),
        this.updateDisplayedOpacity(e)
    },
    updateDisplayedOpacity: function(e) {
        this._displayedOpacity = 0 | this._realOpacity * e / 255;
        if (this._cascadeOpacityEnabled) {
            e = this._children;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n && n.RGBAProtocol && n.updateDisplayedOpacity(this._displayedOpacity)
            }
        }
    },
    isCascadeOpacityEnabled: function() {
        return this._cascadeOpacityEnabled
    },
    setCascadeOpacityEnabled: function(e) {
        this._cascadeOpacityEnabled !== e && ((this._cascadeOpacityEnabled = e) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
    },
    _enableCascadeOpacity: function() {
        var e = 255,
        t = this._parent;
        t && t.RGBAProtocol && t.isCascadeOpacityEnabled() && (e = t.getDisplayedOpacity()),
        this.updateDisplayedOpacity(e)
    },
    _disableCascadeOpacity: function() {
        this._displayedOpacity = this._realOpacity;
        for (var e = this._children,
        t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.RGBAProtocol && n.updateDisplayedOpacity(255)
        }
    },
    getColor: function() {
        var e = this._realColor;
        return cc.c3b(e.r, e.g, e.b)
    },
    getDisplayedColor: function() {
        var e = this._displayedColor;
        return cc.c3b(e.r, e.g, e.b)
    },
    setColor: function(e) {
        var t = this._displayedColor,
        n = this._realColor;
        t.r = n.r = e.r,
        t.g = n.g = e.g,
        t.b = n.b = e.b,
        e = (e = this._parent) && e.RGBAProtocol && e.isCascadeColorEnabled() ? e.getDisplayedColor() : cc.white(),
        this.updateDisplayedColor(e)
    },
    updateDisplayedColor: function(e) {
        var t = this._displayedColor,
        n = this._realColor;
        t.r = 0 | n.r * e.r / 255,
        t.g = 0 | n.g * e.g / 255,
        t.b = 0 | n.b * e.b / 255;
        if (this._cascadeColorEnabled) for (e = this._children, n = 0; n < e.length; n++) {
            var r = e[n];
            r && r.RGBAProtocol && r.updateDisplayedColor(t)
        }
    },
    isCascadeColorEnabled: function() {
        return this._cascadeColorEnabled
    },
    setCascadeColorEnabled: function(e) {
        this._cascadeColorEnabled !== e && ((this._cascadeColorEnabled = e) ? this._enableCascadeColor() : this._disableCascadeColor())
    },
    _enableCascadeColor: function() {
        var e;
        e = (e = this._parent) && e.RGBAProtocol && e.isCascadeColorEnabled() ? e.getDisplayedColor() : cc.white(),
        this.updateDisplayedColor(e)
    },
    _disableCascadeColor: function() {
        var e = this._displayedColor,
        t = this._realColor;
        e.r = t.r,
        e.g = t.g,
        e.b = t.b;
        for (var e = this._children,
        t = cc.white(), n = 0; n < e.length; n++) {
            var r = e[n];
            r && r.RGBAProtocol && r.updateDisplayedColor(t)
        }
    },
    addChild: function(e, t, n) {
        cc.Node.prototype.addChild.call(this, e, t, n),
        this._cascadeColorEnabled && this._enableCascadeColor(),
        this._cascadeOpacityEnabled && this._enableCascadeOpacity()
    },
    setOpacityModifyRGB: function(e) {},
    isOpacityModifyRGB: function() {
        return ! 1
    }
}),
cc.LayerColor = cc.LayerRGBA.extend({
    _blendFunc: null,
    getBlendFunc: function() {
        return this._blendFunc
    },
    changeWidthAndHeight: function(e, t) {
        this.setContentSize(e, t)
    },
    changeWidth: function(e) {
        this.setContentSize(e, this._contentSize._height)
    },
    changeHeight: function(e) {
        this.setContentSize(this._contentSize._width, e)
    },
    setOpacityModifyRGB: function(e) {},
    isOpacityModifyRGB: function() {
        return ! 1
    },
    setColor: function(e) {
        cc.LayerRGBA.prototype.setColor.call(this, e),
        this._updateColor()
    },
    setOpacity: function(e) {
        cc.LayerRGBA.prototype.setOpacity.call(this, e),
        this._updateColor()
    },
    _isLighterMode: !1,
    _squareVertices: null,
    _squareColors: null,
    _verticesFloat32Buffer: null,
    _colorsUint8Buffer: null,
    _squareVerticesAB: null,
    _squareColorsAB: null,
    _ctorForCanvas: function() {
        cc.LayerRGBA.prototype.ctor.call(this),
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST)
    },
    _ctorForWebGL: function() {
        cc.LayerRGBA.prototype.ctor.call(this),
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST),
        this._squareVerticesAB = new ArrayBuffer(32),
        this._squareColorsAB = new ArrayBuffer(64);
        var e = this._squareVerticesAB,
        t = this._squareColorsAB,
        n = cc.Vertex2F.BYTES_PER_ELEMENT,
        r = cc.Color4F.BYTES_PER_ELEMENT;
        this._squareVertices = [new cc.Vertex2F(0, 0, e, 0), new cc.Vertex2F(0, 0, e, n), new cc.Vertex2F(0, 0, e, 2 * n), new cc.Vertex2F(0, 0, e, 3 * n)],
        this._squareColors = [new cc.Color4F(0, 0, 0, 1, t, 0), new cc.Color4F(0, 0, 0, 1, t, r), new cc.Color4F(0, 0, 0, 1, t, 2 * r), new cc.Color4F(0, 0, 0, 1, t, 3 * r)],
        this._verticesFloat32Buffer = cc.renderContext.createBuffer(),
        this._colorsUint8Buffer = cc.renderContext.createBuffer()
    },
    setBlendFunc: function(e, t) {
        this._blendFunc = 1 == arguments.length ? e: {
            src: e,
            dst: t
        },
        cc.renderContextType === cc.CANVAS && (this._isLighterMode = this._blendFunc && 1 == this._blendFunc.src && 771 == this._blendFunc.dst)
    },
    init: function(e, t, n) {
        if (!cc.Layer.prototype.init.call(this)) return ! 1;
        cc.renderContextType !== cc.CANVAS && this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_COLOR));
        var r = cc.Director.getInstance().getWinSize();
        return e = e || new cc.Color4B(0, 0, 0, 255),
        t = t || r.width,
        n = n || r.height,
        r = this._displayedColor,
        r.r = e.r,
        r.g = e.g,
        r.b = e.b,
        r = this._realColor,
        r.r = e.r,
        r.g = e.g,
        r.b = e.b,
        this._realOpacity = this._displayedOpacity = e.a,
        this.setContentSize(t, n),
        this._updateColor(),
        !0
    },
    setContentSize: null,
    _setContentSizeForWebGL: function(e, t) {
        var n = this._squareVertices;
        2 === arguments.length ? (n[1].x = e, n[2].y = t, n[3].x = e, n[3].y = t, this._bindLayerVerticesBufferData(), cc.Layer.prototype.setContentSize.call(this, e, t)) : (n[1].x = e.width, n[2].y = e.height, n[3].x = e.width, n[3].y = e.height, this._bindLayerVerticesBufferData(), cc.Layer.prototype.setContentSize.call(this, e))
    },
    _updateColor: null,
    _updateColorForCanvas: function() {},
    _updateColorForWebGL: function() {
        for (var e = this._displayedColor,
        t = this._displayedOpacity,
        n = this._squareColors,
        r = 0; 4 > r; r++) n[r].r = e.r / 255,
        n[r].g = e.g / 255,
        n[r].b = e.b / 255,
        n[r].a = t / 255;
        this._bindLayerColorsBufferData()
    },
    updateDisplayedColor: function(e) {
        cc.LayerRGBA.prototype.updateDisplayedColor.call(this, e),
        this._updateColor()
    },
    updateDisplayedOpacity: function(e) {
        cc.LayerRGBA.prototype.updateDisplayedOpacity.call(this, e),
        this._updateColor()
    },
    _bindLayerVerticesBufferData: function() {
        var e = cc.renderContext;
        e.bindBuffer(e.ARRAY_BUFFER, this._verticesFloat32Buffer),
        e.bufferData(e.ARRAY_BUFFER, this._squareVerticesAB, e.STATIC_DRAW)
    },
    _bindLayerColorsBufferData: function() {
        var e = cc.renderContext;
        e.bindBuffer(e.ARRAY_BUFFER, this._colorsUint8Buffer),
        e.bufferData(e.ARRAY_BUFFER, this._squareColorsAB, e.STATIC_DRAW)
    },
    draw: null,
    _drawForCanvas: function(e) {
        e = e || cc.renderContext;
        var t = this.getContentSize(),
        n = cc.EGLView.getInstance(),
        r = this._displayedColor;
        e.fillStyle = "rgba(" + (0 | r.r) + "," + (0 | r.g) + "," + (0 | r.b) + "," + this._displayedOpacity / 255 + ")",
        e.fillRect(0, 0, t.width * n.getScaleX(), -t.height * n.getScaleY()),
        cc.g_NumberOfDraws++
    },
    _drawForWebGL: function(e) {
        e = e || cc.renderContext,
        cc.NODE_DRAW_SETUP(this),
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR),
        e.bindBuffer(e.ARRAY_BUFFER, this._verticesFloat32Buffer),
        e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, e.FLOAT, !1, 0, 0),
        e.bindBuffer(e.ARRAY_BUFFER, this._colorsUint8Buffer),
        e.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, e.FLOAT, !1, 0, 0),
        cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst),
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
    }
}),
cc.Browser.supportWebGL ? (cc.LayerColor.prototype.ctor = cc.LayerColor.prototype._ctorForWebGL, cc.LayerColor.prototype.setContentSize = cc.LayerColor.prototype._setContentSizeForWebGL, cc.LayerColor.prototype._updateColor = cc.LayerColor.prototype._updateColorForWebGL, cc.LayerColor.prototype.draw = cc.LayerColor.prototype._drawForWebGL) : (cc.LayerColor.prototype.ctor = cc.LayerColor.prototype._ctorForCanvas, cc.LayerColor.prototype.setContentSize = cc.LayerRGBA.prototype.setContentSize, cc.LayerColor.prototype._updateColor = cc.LayerColor.prototype._updateColorForCanvas, cc.LayerColor.prototype.draw = cc.LayerColor.prototype._drawForCanvas),
cc.LayerColor.create = function(e, t, n) {
    var r = new cc.LayerColor;
    switch (arguments.length) {
    case 0:
        r.init();
        break;
    case 1:
        r.init(e);
        break;
    case 3:
        r.init(e, t, n);
        break;
    default:
        r.init()
    }
    return r
},
cc.LayerGradient = cc.LayerColor.extend({
    _startColor: null,
    _endColor: null,
    _startOpacity: null,
    _endOpacity: null,
    _alongVector: null,
    _compressedInterpolation: !1,
    _gradientStartPoint: null,
    _gradientEndPoint: null,
    ctor: function() {
        cc.LayerColor.prototype.ctor.call(this),
        this._startColor = new cc.Color3B(0, 0, 0),
        this._endColor = new cc.Color3B(0, 0, 0),
        this._alongVector = cc.p(0, -1),
        this._endOpacity = this._startOpacity = 255,
        this._gradientStartPoint = cc.p(0, 0),
        this._gradientEndPoint = cc.p(0, 0)
    },
    setContentSize: function(e, t) {
        2 === arguments.length ? cc.LayerColor.prototype.setContentSize.call(this, e, t) : cc.LayerColor.prototype.setContentSize.call(this, e),
        this._updateColor()
    },
    getStartColor: function() {
        return this._realColor
    },
    setStartColor: function(e) {
        this.setColor(e)
    },
    setEndColor: function(e) {
        this._endColor = e,
        this._updateColor()
    },
    getEndColor: function() {
        return this._endColor
    },
    setStartOpacity: function(e) {
        this._startOpacity = e,
        this._updateColor()
    },
    getStartOpacity: function() {
        return this._startOpacity
    },
    setEndOpacity: function(e) {
        this._endOpacity = e,
        this._updateColor()
    },
    getEndOpacity: function() {
        return this._endOpacity
    },
    setVector: function(e) {
        this._alongVector.x = e.x,
        this._alongVector.y = e.y,
        this._updateColor()
    },
    getVector: function() {
        return cc.p(this._alongVector.x, this._alongVector.y)
    },
    isCompressedInterpolation: function() {
        return this._compressedInterpolation
    },
    setCompressedInterpolation: function(e) {
        this._compressedInterpolation = e,
        this._updateColor()
    },
    init: function(e, t, n) {
        e = e || cc.c4(0, 0, 0, 255),
        t = t || cc.c4(0, 0, 0, 255),
        n = n || cc.p(0, -1);
        var r = this._startColor,
        i = this._endColor;
        return r.r = e.r,
        r.g = e.g,
        r.b = e.b,
        this._startOpacity = e.a,
        i.r = t.r,
        i.g = t.g,
        i.b = t.b,
        this._endOpacity = t.a,
        this._alongVector = n,
        this._compressedInterpolation = !0,
        cc.LayerColor.prototype.init.call(this, cc.c4b(e.r, e.g, e.b, 255)),
        !0
    },
    draw: function(e) {
        if (cc.renderContextType === cc.WEBGL) cc.LayerColor.prototype.draw.call(this, e);
        else {
            e = e || cc.renderContext,
            this._isLighterMode && (e.globalCompositeOperation = "lighter"),
            e.save();
            var t = cc.EGLView.getInstance(),
            n = this._displayedOpacity / 255,
            r = this.getContentSize().width * t.getScaleX(),
            t = this.getContentSize().height * t.getScaleY(),
            i = e.createLinearGradient(this._gradientStartPoint.x, this._gradientStartPoint.y, this._gradientEndPoint.x, this._gradientEndPoint.y),
            s = this._displayedColor,
            o = this._endColor;
            i.addColorStop(0, "rgba(" + Math.round(s.r) + "," + Math.round(s.g) + "," + Math.round(s.b) + "," + (this._startOpacity / 255 * n).toFixed(4) + ")"),
            i.addColorStop(1, "rgba(" + Math.round(o.r) + "," + Math.round(o.g) + "," + Math.round(o.b) + "," + (this._endOpacity / 255 * n).toFixed(4) + ")"),
            e.fillStyle = i,
            e.fillRect(0, 0, r, -t),
            0 != this._rotation && e.rotate(this._rotationRadians),
            e.restore()
        }
    },
    _updateColor: function() {
        var e = this._alongVector;
        if (cc.renderContextType === cc.CANVAS) {
            var t = .5 * this.getContentSize().width,
            n = .5 * this.getContentSize().height;
            this._gradientStartPoint.x = t * -e.x + t,
            this._gradientStartPoint.y = n * e.y - n,
            this._gradientEndPoint.x = t * e.x + t,
            this._gradientEndPoint.y = n * -e.y - n
        } else if (n = cc.pLength(e), 0 !== n) {
            t = Math.sqrt(2),
            e = cc.p(e.x / n, e.y / n),
            this._compressedInterpolation && (n = 1 / (Math.abs(e.x) + Math.abs(e.y)), e = cc.pMult(e, n * t));
            var r = this._displayedOpacity / 255,
            i = this._displayedColor,
            s = this._endColor,
            n = i.r / 255,
            o = i.g / 255,
            i = i.b / 255,
            u = this._startOpacity * r / 255,
            a = s.r / 255,
            f = s.g / 255,
            s = s.b / 255,
            r = this._endOpacity * r / 255,
            l = this._squareColors,
            c = l[0],
            h = l[1],
            p = l[2],
            l = l[3];
            c.r = a + (t + e.x + e.y) / (2 * t) * (n - a),
            c.g = f + (t + e.x + e.y) / (2 * t) * (o - f),
            c.b = s + (t + e.x + e.y) / (2 * t) * (i - s),
            c.a = r + (t + e.x + e.y) / (2 * t) * (u - r),
            h.r = a + (t - e.x + e.y) / (2 * t) * (n - a),
            h.g = f + (t - e.x + e.y) / (2 * t) * (o - f),
            h.b = s + (t - e.x + e.y) / (2 * t) * (i - s),
            h.a = r + (t - e.x + e.y) / (2 * t) * (u - r),
            p.r = a + (t + e.x - e.y) / (2 * t) * (n - a),
            p.g = f + (t + e.x - e.y) / (2 * t) * (o - f),
            p.b = s + (t + e.x - e.y) / (2 * t) * (i - s),
            p.a = r + (t + e.x - e.y) / (2 * t) * (u - r),
            l.r = a + (t - e.x - e.y) / (2 * t) * (n - a),
            l.g = f + (t - e.x - e.y) / (2 * t) * (o - f),
            l.b = s + (t - e.x - e.y) / (2 * t) * (i - s),
            l.a = r + (t - e.x - e.y) / (2 * t) * (u - r),
            this._bindLayerColorsBufferData()
        }
    }
}),
cc.LayerGradient.create = function(e, t, n) {
    var r = new cc.LayerGradient;
    switch (arguments.length) {
    case 2:
        if (r && r.init(e, t)) return r;
        break;
    case 3:
        if (r && r.init(e, t, n)) return r;
        break;
    case 0:
        if (r && r.init()) return r;
        break;
    default:
        throw "Arguments error "
    }
    return null
},
cc.LayerMultiplex = cc.Layer.extend({
    _enabledLayer: 0,
    _layers: null,
    initWithLayer: function(e) {
        return this._layers = [],
        this._layers.push(e),
        this._enabledLayer = 0,
        this.addChild(e),
        !0
    },
    initWithLayers: function(e) {
        return this._layers = e,
        this._enabledLayer = 0,
        this.addChild(this._layers[this._enabledLayer]),
        !0
    },
    switchTo: function(e) {
        e >= this._layers.length ? cc.log("cc.LayerMultiplex.switchTo():Invalid index in MultiplexLayer switchTo message") : (this.removeChild(this._layers[this._enabledLayer], !0), this._enabledLayer = e, this.addChild(this._layers[e]))
    },
    switchToAndReleaseMe: function(e) {
        e >= this._layers.length ? cc.log("cc.LayerMultiplex.switchToAndReleaseMe():Invalid index in MultiplexLayer switchTo message") : (this.removeChild(this._layers[this._enabledLayer], !0), this._layers[this._enabledLayer] = null, this._enabledLayer = e, this.addChild(this._layers[e]))
    },
    addLayer: function(e) {
        e ? this._layers.push(e) : cc.log("cc.Layer.addLayer(): layer should be non-null")
    }
}),
cc.LayerMultiplex.create = function() {
    0 < arguments.length && null == arguments[arguments.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    var e = new cc.LayerMultiplex;
    return e.initWithLayers(arguments) ? e: null
},
cc.SPRITE_INDEX_NOT_INITIALIZED = -1,
cc.generateTextureCacheForColor = function(e) {
    function t() {
        var t = cc.generateTextureCacheForColor,
        r = e.width,
        i = e.height;
        n[0].width = r,
        n[0].height = i,
        n[1].width = r,
        n[1].height = i,
        n[2].width = r,
        n[2].height = i,
        n[3].width = r,
        n[3].height = i,
        t.canvas.width = r,
        t.canvas.height = i;
        var s = t.canvas.getContext("2d");
        s.drawImage(e, 0, 0),
        t.tempCanvas.width = r,
        t.tempCanvas.height = i;
        for (var s = s.getImageData(0, 0, r, i).data, o = 0; 4 > o; o++) {
            var u = n[o].getContext("2d");
            u.getImageData(0, 0, r, i).data,
            t.tempCtx.drawImage(e, 0, 0);
            for (var a = t.tempCtx.getImageData(0, 0, r, i), f = a.data, l = 0; l < s.length; l += 4) f[l] = 0 === o ? s[l] : 0,
            f[l + 1] = 1 === o ? s[l + 1] : 0,
            f[l + 2] = 2 === o ? s[l + 2] : 0,
            f[l + 3] = s[l + 3];
            u.putImageData(a, 0, 0)
        }
        e.onload = null
    }
    if (e.hasOwnProperty("channelCache")) return e.channelCache;
    var n = [document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas")];
    try {
        t()
    } catch(r) {
        e.onload = t
    }
    return e.channelCache = n
},
cc.generateTextureCacheForColor.canvas = document.createElement("canvas"),
cc.generateTextureCacheForColor.tempCanvas = document.createElement("canvas"),
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d"),
cc.generateTintImage2 = function(e, t, n) {
    n || (n = cc.rect(0, 0, e.width, e.height), n = cc.RECT_PIXELS_TO_POINTS(n)),
    t = t instanceof cc.Color4F ? cc.c4b(255 * t.r, 255 * t.g, 255 * t.b, 255 * t.a) : cc.c4b(t.r, t.g, t.b, 50);
    var r = document.createElement("canvas"),
    i = r.getContext("2d");
    return r.width != n.width && (r.width = n.width),
    r.height != n.height && (r.height = n.height),
    i.save(),
    i.drawImage(e, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
    i.globalCompositeOperation = "source-in",
    i.globalAlpha = t.a / 255,
    i.fillStyle = "rgb(" + t.r + "," + t.g + "," + t.b + ")",
    i.fillRect(0, 0, n.width, n.height),
    i.restore(),
    r
},
cc.generateTintImage = function(e, t, n, r, i) {
    r || (r = cc.rect(0, 0, e.width, e.height)),
    e = null == n.a ? cc.c4f(n.r / 255, n.g / 255, n.b / 255, 1) : n,
    n = Math.min(r.width, t[0].width);
    var s = Math.min(r.height, t[0].height),
    o;
    i ? (o = i.getContext("2d"), o.clearRect(0, 0, n, s)) : (i = document.createElement("canvas"), i.width = n, i.height = s, o = i.getContext("2d")),
    o.save(),
    o.globalCompositeOperation = "lighter";
    var u = o.globalAlpha;
    return 0 < e.r && (o.globalAlpha = e.r * u, o.drawImage(t[0], r.x, r.y, n, s, 0, 0, n, s)),
    0 < e.g && (o.globalAlpha = e.g * u, o.drawImage(t[1], r.x, r.y, n, s, 0, 0, n, s)),
    0 < e.b && (o.globalAlpha = e.b * u, o.drawImage(t[2], r.x, r.y, n, s, 0, 0, n, s)),
    1 > e.r + e.g + e.b && (o.globalAlpha = u, o.drawImage(t[3], r.x, r.y, n, s, 0, 0, n, s)),
    o.restore(),
    i
},
cc.cutRotateImageToCanvas = function(e, t) {
    if (!e) return null;
    if (!t) return e;
    var n = document.createElement("canvas");
    n.width = t.width,
    n.height = t.height;
    var r = n.getContext("2d");
    return r.translate(n.width / 2, n.height / 2),
    r.rotate( - 1.5707963267948966),
    r.drawImage(e, t.x, t.y, t.height, t.width, -t.height / 2, -t.width / 2, t.height, t.width),
    n
},
cc.TransformValues = function(e, t, n, r, i, s) {
    this.pos = e,
    this.scale = t,
    this.rotation = n,
    this.skew = r,
    this.ap = i,
    this.visible = s
},
cc.RENDER_IN_SUBPIXEL = function(e) {
    return 0 | e
},
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL && (cc.RENDER_IN_SUBPIXEL = function(e) {
    return e
}),
cc.Sprite = cc.NodeRGBA.extend({
    RGBAProtocol: !0,
    _textureAtlas: null,
    _atlasIndex: 0,
    _batchNode: null,
    _dirty: !1,
    _recursiveDirty: null,
    _hasChildren: null,
    _shouldBeHidden: !1,
    _transformToBatch: null,
    _blendFunc: null,
    _texture: null,
    _rect: null,
    _rectRotated: !1,
    _offsetPosition: null,
    _unflippedOffsetPositionFromCenter: null,
    _opacityModifyRGB: !1,
    _flippedX: !1,
    _flippedY: !1,
    _textureLoaded: !1,
    _loadedEventListeners: null,
    _newTextureWhenChangeColor: null,
    textureLoaded: function() {
        return this._textureLoaded
    },
    addLoadedEventListener: function(e, t) {
        this._loadedEventListeners.push({
            eventCallback: e,
            eventTarget: t
        })
    },
    _callLoadedEventCallbacks: function() {
        for (var e = this._loadedEventListeners,
        t = 0,
        n = e.length; t < n; t++) {
            var r = e[t];
            r.eventCallback.call(r.eventTarget, this)
        }
        e.length = 0
    },
    isDirty: function() {
        return this._dirty
    },
    setDirty: function(e) {
        this._dirty = e
    },
    isTextureRectRotated: function() {
        return this._rectRotated
    },
    getAtlasIndex: function() {
        return this._atlasIndex
    },
    setAtlasIndex: function(e) {
        this._atlasIndex = e
    },
    getTextureRect: function() {
        return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height)
    },
    getTextureAtlas: function() {
        return this._textureAtlas
    },
    setTextureAtlas: function(e) {
        this._textureAtlas = e
    },
    getSpriteBatchNode: function() {
        return this._batchNode
    },
    setSpriteBatchNode: function(e) {
        this._batchNode = e
    },
    getOffsetPosition: function() {
        return this._offsetPosition
    },
    getBlendFunc: function() {
        return this._blendFunc
    },
    initWithSpriteFrame: function(e) {
        if (!e) throw "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null";
        e.textureLoaded() || (this._textureLoaded = !1, e.addLoadedEventListener(this._spriteFrameLoadedCallback, this));
        var t = this.initWithTexture(e.getTexture(), e.getRect());
        return this.setDisplayFrame(e),
        t
    },
    _spriteFrameLoadedCallback: null,
    _spriteFrameLoadedCallbackForWebGL: function(e) {
        this.setNodeDirty(),
        this.setTextureRect(e.getRect(), e.isRotated(), e.getOriginalSize()),
        this._callLoadedEventCallbacks()
    },
    _spriteFrameLoadedCallbackForCanvas: function(e) {
        this.setNodeDirty(),
        this.setTextureRect(e.getRect(), e.isRotated(), e.getOriginalSize()),
        e = this.getColor(),
        255 === e.r && 255 === e.g && 255 === e.b || this._changeTextureColor(),
        this._callLoadedEventCallbacks()
    },
    initWithSpriteFrameName: function(e) {
        if (!e) throw "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null";
        return e = cc.SpriteFrameCache.getInstance().getSpriteFrame(e),
        this.initWithSpriteFrame(e)
    },
    useBatchNode: function(e) {
        this._textureAtlas = e.getTextureAtlas(),
        this._batchNode = e
    },
    setVertexRect: function(e) {
        this._rect.x = e.x,
        this._rect.y = e.y,
        this._rect.width = e.width,
        this._rect.height = e.height
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            for (var e, t, n = this._children,
            r, i = 1; i < n.length; i++) {
                t = n[i],
                e = i - 1;
                for (r = n[e]; 0 <= e && (t._zOrder < r._zOrder || t._zOrder == r._zOrder && t._orderOfArrival < r._orderOfArrival);) n[e + 1] = r,
                e -= 1,
                r = n[e];
                n[e + 1] = t
            }
            this._batchNode && this._arrayMakeObjectsPerformSelector(n, cc.Node.StateCallbackType.sortAllChildren),
            this._reorderChildDirty = !1
        }
    },
    reorderChild: function(e, t) {
        if (!e) throw "cc.Sprite.reorderChild(): child should be non-null"; - 1 === this._children.indexOf(e) ? cc.log("cc.Sprite.reorderChild(): this child is not in children list") : t !== e.getZOrder() && (this._batchNode && !this._reorderChildDirty && (this._setReorderChildDirtyRecursively(), this._batchNode.reorderBatch(!0)), cc.Node.prototype.reorderChild.call(this, e, t))
    },
    removeChild: function(e, t) {
        this._batchNode && this._batchNode.removeSpriteFromAtlas(e),
        cc.Node.prototype.removeChild.call(this, e, t)
    },
    removeAllChildren: function(e) {
        var t = this._children,
        n = this._batchNode;
        if (n && null != t) for (var r = 0,
        i = t.length; r < i; r++) n.removeSpriteFromAtlas(t[r]);
        cc.Node.prototype.removeAllChildren.call(this, e),
        this._hasChildren = !1
    },
    setDirtyRecursively: function(e) {
        this._recursiveDirty = e,
        this.setDirty(e),
        e = this._children;
        if (null != e) for (var t = 0; t < e.length; t++) e[t] instanceof cc.Sprite && e[t].setDirtyRecursively(!0)
    },
    SET_DIRTY_RECURSIVELY: function() {
        this._batchNode && !this._recursiveDirty && (this._dirty = this._recursiveDirty = !0, this._hasChildren && this.setDirtyRecursively(!0))
    },
    setPosition: function(e, t) {
        2 <= arguments.length ? cc.Node.prototype.setPosition.call(this, e, arguments[1]) : cc.Node.prototype.setPosition.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setRotation: function(e) {
        cc.Node.prototype.setRotation.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setRotationX: function(e) {
        cc.Node.prototype.setRotationX.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setRotationY: function(e) {
        cc.Node.prototype.setRotationY.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setSkewX: function(e) {
        cc.Node.prototype.setSkewX.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setSkewY: function(e) {
        cc.Node.prototype.setSkewY.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setScaleX: function(e) {
        cc.Node.prototype.setScaleX.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setScaleY: function(e) {
        cc.Node.prototype.setScaleY.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setScale: function(e, t) {
        cc.Node.prototype.setScale.call(this, e, t),
        this.SET_DIRTY_RECURSIVELY()
    },
    setVertexZ: function(e) {
        cc.Node.prototype.setVertexZ.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setAnchorPoint: function(e, t) {
        2 === arguments.length ? cc.Node.prototype.setAnchorPoint.call(this, e, t) : cc.Node.prototype.setAnchorPoint.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    setVisible: function(e) {
        cc.Node.prototype.setVisible.call(this, e),
        this.SET_DIRTY_RECURSIVELY()
    },
    ignoreAnchorPointForPosition: function(e) {
        this._batchNode ? cc.log("cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode") : cc.Node.prototype.ignoreAnchorPointForPosition.call(this, e)
    },
    setFlippedX: function(e) {
        this._flippedX != e && (this._flippedX = e, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty())
    },
    setFlippedY: function(e) {
        this._flippedY != e && (this._flippedY = e, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty())
    },
    isFlippedX: function() {
        return this._flippedX
    },
    isFlippedY: function() {
        return this._flippedY
    },
    setOpacityModifyRGB: null,
    _setOpacityModifyRGBForWebGL: function(e) {
        this._opacityModifyRGB !== e && (this._opacityModifyRGB = e, this.updateColor())
    },
    _setOpacityModifyRGBForCanvas: function(e) {
        this._opacityModifyRGB !== e && (this._opacityModifyRGB = e, this.setNodeDirty())
    },
    isOpacityModifyRGB: function() {
        return this._opacityModifyRGB
    },
    updateDisplayedOpacity: null,
    _updateDisplayedOpacityForWebGL: function(e) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, e),
        this.updateColor()
    },
    _updateDisplayedOpacityForCanvas: function(e) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, e),
        this._setNodeDirtyForCache()
    },
    setDisplayFrameWithAnimationName: function(e, t) {
        if (!e) throw "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null";
        var n = cc.AnimationCache.getInstance().getAnimation(e);
        n ? (n = n.getFrames()[t]) ? this.setDisplayFrame(n.getSpriteFrame()) : cc.log("cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index") : cc.log("cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found")
    },
    getBatchNode: function() {
        return this._batchNode
    },
    _setReorderChildDirtyRecursively: function() {
        if (!this._reorderChildDirty) {
            this._reorderChildDirty = !0;
            for (var e = this._parent; e && e != this._batchNode;) e._setReorderChildDirtyRecursively(),
            e = e.getParent()
        }
    },
    getTexture: function() {
        return this._texture
    },
    _quad: null,
    _quadWebBuffer: null,
    _quadDirty: !1,
    _colorized: !1,
    _isLighterMode: !1,
    _originalTexture: null,
    _textureRect_Canvas: null,
    _drawSize_Canvas: null,
    ctor: null,
    _ctorForWebGL: function(e) {
        cc.NodeRGBA.prototype.ctor.call(this),
        this._shouldBeHidden = !1,
        this._offsetPosition = cc._pConst(0, 0),
        this._unflippedOffsetPositionFromCenter = cc._pConst(0, 0),
        this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        },
        this._rect = cc.rect(0, 0, 0, 0),
        this._quad = new cc.V3F_C4B_T2F_Quad,
        this._quadWebBuffer = cc.renderContext.createBuffer(),
        this._textureLoaded = this._quadDirty = !0,
        this._loadedEventListeners = [];
        if (e) if ("string" == typeof e) e = cc.SpriteFrameCache.getInstance().getSpriteFrame(e),
        this.initWithSpriteFrame(e);
        else if ("object" == typeof e) if (e instanceof cc.SpriteFrame) this.initWithSpriteFrame(e);
        else if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
            var t = new cc.Texture2D;
            t.initWithElement(e),
            t.handleLoadedTexture(),
            this.initWithTexture(t)
        } else e instanceof cc.Texture2D && this.initWithTexture(e)
    },
    _ctorForCanvas: function(e) {
        cc.NodeRGBA.prototype.ctor.call(this),
        this._shouldBeHidden = !1,
        this._offsetPosition = cc._pConst(0, 0),
        this._unflippedOffsetPositionFromCenter = cc._pConst(0, 0),
        this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        },
        this._rect = cc.rect(0, 0, 0, 0),
        this._newTextureWhenChangeColor = !1,
        this._textureLoaded = !0,
        this._loadedEventListeners = [],
        this._textureRect_Canvas = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            validRect: !1
        },
        this._drawSize_Canvas = cc.size(0, 0);
        if (e) if ("string" == typeof e) e = cc.SpriteFrameCache.getInstance().getSpriteFrame(e),
        this.initWithSpriteFrame(e);
        else if ("object" == typeof e) if (e instanceof cc.SpriteFrame) this.initWithSpriteFrame(e);
        else if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
            var t = new cc.Texture2D;
            t.initWithElement(e),
            t.handleLoadedTexture(),
            this.initWithTexture(t)
        } else e instanceof cc.Texture2D && this.initWithTexture(e)
    },
    getQuad: function() {
        return this._quad
    },
    setBlendFunc: null,
    _setBlendFuncForWebGL: function(e, t) {
        var n = this._blendFunc;
        1 === arguments.length ? (n.src = e.src, n.dst = e.dst) : (n.src = e, n.dst = t)
    },
    _setBlendFuncForCanvas: function(e, t) {
        var n = this._blendFunc;
        1 === arguments.length ? (n.src = e.src, n.dst = e.dst) : (n.src = e, n.dst = t),
        this._isLighterMode = n && (n.src == gl.SRC_ALPHA && n.dst == gl.ONE || n.src == gl.ONE && n.dst == gl.ONE)
    },
    init: null,
    _initForWebGL: function() {
        if (0 < arguments.length) return this.initWithFile(arguments[0], arguments[1]);
        cc.NodeRGBA.prototype.init.call(this),
        this._dirty = this._recursiveDirty = !1,
        this._opacityModifyRGB = !0,
        this._blendFunc.src = cc.BLEND_SRC,
        this._blendFunc.dst = cc.BLEND_DST,
        this.setTexture(null),
        this._textureLoaded = !0,
        this._flippedX = this._flippedY = !1,
        this.setAnchorPoint(.5, .5),
        this._offsetPosition._x = 0,
        this._offsetPosition._y = 0,
        this._hasChildren = !1;
        var e = {
            r: 255,
            g: 255,
            b: 255,
            a: 255
        };
        return this._quad.bl.colors = e,
        this._quad.br.colors = e,
        this._quad.tl.colors = e,
        this._quad.tr.colors = e,
        this._quadDirty = !0,
        this.setTextureRect(cc.RectZero(), !1, cc.SizeZero()),
        !0
    },
    _initForCanvas: function() {
        return 0 < arguments.length ? this.initWithFile(arguments[0], arguments[1]) : (cc.NodeRGBA.prototype.init.call(this), this._dirty = this._recursiveDirty = !1, this._opacityModifyRGB = !0, this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.setTexture(null), this._textureLoaded = !0, this._flippedX = this._flippedY = !1, this.setAnchorPoint(.5, .5), this._offsetPosition._x = 0, this._offsetPosition._y = 0, this._hasChildren = !1, this.setTextureRect(cc.RectZero(), !1, cc.SizeZero()), !0)
    },
    initWithFile: function(e, t) {
        if (!e) throw "cc.Sprite.initWithFile(): filename should be non-null";
        var n = cc.TextureCache.getInstance().textureForKey(e);
        if (!n) n = cc.TextureCache.getInstance().addImage(e);
        else if (!t) {
            var r = n.getContentSize();
            t = cc.rect(0, 0, r.width, r.height)
        }
        return this.initWithTexture(n, t)
    },
    initWithTexture: null,
    _initWithTextureForWebGL: function(e, t, n) {
        if (0 == arguments.length) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        n = n || !1;
        if (!cc.NodeRGBA.prototype.init.call(this)) return ! 1;
        this._batchNode = null,
        this._dirty = this._recursiveDirty = !1,
        this._opacityModifyRGB = !0,
        this._blendFunc.src = cc.BLEND_SRC,
        this._blendFunc.dst = cc.BLEND_DST,
        this._flippedX = this._flippedY = !1,
        this.setAnchorPoint(.5, .5),
        this._offsetPosition._x = 0,
        this._offsetPosition._y = 0,
        this._hasChildren = !1;
        var r = new cc.Color4B(255, 255, 255, 255),
        i = this._quad;
        return i.bl.colors = r,
        i.br.colors = r,
        i.tl.colors = r,
        i.tr.colors = r,
        this._textureLoaded = r = e.isLoaded(),
        r ? (t || (r = e.getContentSize(), t = cc.rect(0, 0, r.width, r.height)), this.setTexture(e), this.setTextureRect(t, n, t._size), this.setBatchNode(null), this._quadDirty = !0) : (this._rectRotated = n || !1, t && (r = this._rect, r.x = t.x, r.y = t.y, r.width = t.width, r.height = t.height), e.addLoadedEventListener(this._textureLoadedCallback, this), !0)
    },
    _initWithTextureForCanvas: function(e, t, n) {
        if (0 == arguments.length) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        n = n || !1;
        if (!cc.NodeRGBA.prototype.init.call(this)) return ! 1;
        this._batchNode = null,
        this._dirty = this._recursiveDirty = !1,
        this._opacityModifyRGB = !0,
        this._blendFunc.src = cc.BLEND_SRC,
        this._blendFunc.dst = cc.BLEND_DST,
        this._flippedX = this._flippedY = !1,
        this.setAnchorPoint(.5, .5),
        this._offsetPosition._x = 0,
        this._offsetPosition._y = 0,
        this._hasChildren = !1;
        var r = e.isLoaded();
        return this._textureLoaded = r,
        r ? (t || (r = e.getContentSize(), t = cc.rect(0, 0, r.width, r.height)), this._originalTexture = e, this.setTexture(e), this.setTextureRect(t, n, t._size), this.setBatchNode(null), !0) : (this._rectRotated = n || !1, t && (this._rect.x = t.x, this._rect.y = t.y, this._rect.width = t.width, this._rect.height = t.height), e.addLoadedEventListener(this._textureLoadedCallback, this), !0)
    },
    _textureLoadedCallback: null,
    _textureLoadedCallbackForWebGL: function(e) {
        if (!this._textureLoaded) {
            this._textureLoaded = !0;
            var t = this._rect;
            if (!t) t = e.getContentSize(),
            t = cc.rect(0, 0, t.width, t.height);
            else if (cc._rectEqualToZero(t)) {
                var n = e.getContentSize();
                t.width = n.width,
                t.height = n.height
            }
            this.setTexture(e),
            this.setTextureRect(t, this._rectRotated, t._size),
            this.setBatchNode(null),
            this._quadDirty = !0,
            this._callLoadedEventCallbacks()
        }
    },
    _textureLoadedCallbackForCanvas: function(e) {
        if (!this._textureLoaded) {
            this._textureLoaded = !0;
            var t = this._rect;
            if (!t) t = e.getContentSize(),
            t = cc.rect(0, 0, t.width, t.height);
            else if (cc._rectEqualToZero(t)) {
                var n = e.getContentSize();
                t.width = n.width,
                t.height = n.height
            }
            this._originalTexture = e,
            this.setTexture(e),
            this.setTextureRect(t, this._rectRotated, t._size),
            this.setBatchNode(null),
            this._callLoadedEventCallbacks()
        }
    },
    setTextureRect: null,
    _setTextureRectForWebGL: function(e, t, n) {
        this._rectRotated = t || !1,
        n = n || e._size,
        this.setContentSize(n),
        this.setVertexRect(e),
        this._setTextureCoords(e),
        e = this._unflippedOffsetPositionFromCenter,
        this._flippedX && (e._x = -e._x),
        this._flippedY && (e._y = -e._y);
        var r = this._rect;
        this._offsetPosition._x = e._x + (this._contentSize._width - r.width) / 2,
        this._offsetPosition._y = e._y + (this._contentSize._height - r.height) / 2;
        if (this._batchNode) this._dirty = !0;
        else {
            e = 0 + this._offsetPosition._x,
            t = 0 + this._offsetPosition._y,
            n = e + r.width;
            var r = t + r.height,
            i = this._quad;
            i.bl.vertices = {
                x: e,
                y: t,
                z: 0
            },
            i.br.vertices = {
                x: n,
                y: t,
                z: 0
            },
            i.tl.vertices = {
                x: e,
                y: r,
                z: 0
            },
            i.tr.vertices = {
                x: n,
                y: r,
                z: 0
            },
            this._quadDirty = !0
        }
    },
    _setTextureRectForCanvas: function(e, t, n) {
        this._rectRotated = t || !1,
        n = n || e._size,
        this.setContentSize(n),
        this.setVertexRect(e),
        t = this._textureRect_Canvas,
        n = cc.CONTENT_SCALE_FACTOR(),
        t.x = 0 | e.x * n,
        t.y = 0 | e.y * n,
        t.width = 0 | e.width * n,
        t.height = 0 | e.height * n,
        t.validRect = 0 !== t.width && 0 !== t.height,
        e = this._unflippedOffsetPositionFromCenter,
        this._flippedX && (e._x = -e._x),
        this._flippedY && (e._y = -e._y),
        this._offsetPosition._x = e._x + (this._contentSize._width - this._rect.width) / 2,
        this._offsetPosition._y = e._y + (this._contentSize._height - this._rect.height) / 2,
        this._batchNode && (this._dirty = !0)
    },
    updateTransform: null,
    _updateTransformForWebGL: function() {
        if (this.isDirty()) {
            var e = this._quad,
            t = this._parent;
            if (!this._visible || t && t != this._batchNode && t._shouldBeHidden) e.br.vertices = {
                x: 0,
                y: 0,
                z: 0
            },
            e.tl.vertices = {
                x: 0,
                y: 0,
                z: 0
            },
            e.tr.vertices = {
                x: 0,
                y: 0,
                z: 0
            },
            e.bl.vertices = {
                x: 0,
                y: 0,
                z: 0
            },
            this._shouldBeHidden = !0;
            else {
                this._shouldBeHidden = !1;
                var n = this._transformToBatch = t && t != this._batchNode ? cc.AffineTransformConcat(this.nodeToParentTransform(), t._transformToBatch) : this.nodeToParentTransform(),
                r = this._rect._size,
                t = this._offsetPosition._x,
                i = this._offsetPosition._y,
                s = t + r.width,
                o = i + r.height,
                r = n.tx,
                u = n.ty,
                a = n.a,
                f = n.b,
                l = n.d,
                n = -n.c,
                c = t * f + i * l + u,
                h = s * a - i * n + r,
                p = s * f + i * l + u,
                d = s * a - o * n + r,
                s = s * f + o * l + u,
                v = t * a - o * n + r,
                o = t * f + o * l + u,
                u = this._vertexZ;
                e.bl.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(t * a - i * n + r),
                    y: cc.RENDER_IN_SUBPIXEL(c),
                    z: u
                },
                e.br.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(h),
                    y: cc.RENDER_IN_SUBPIXEL(p),
                    z: u
                },
                e.tl.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(v),
                    y: cc.RENDER_IN_SUBPIXEL(o),
                    z: u
                },
                e.tr.vertices = {
                    x: cc.RENDER_IN_SUBPIXEL(d),
                    y: cc.RENDER_IN_SUBPIXEL(s),
                    z: u
                }
            }
            this._textureAtlas.updateQuad(e, this._atlasIndex),
            this._recursiveDirty = !1,
            this.setDirty(!1)
        }
        this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform),
        cc.SPRITE_DEBUG_DRAW && (e = [cc.p(this._quad.bl.vertices.x, this._quad.bl.vertices.y), cc.p(this._quad.br.vertices.x, this._quad.br.vertices.y), cc.p(this._quad.tr.vertices.x, this._quad.tr.vertices.y), cc.p(this._quad.tl.vertices.x, this._quad.tl.vertices.y)], cc.drawingUtil.drawPoly(e, 4, !0))
    },
    _updateTransformForCanvas: function() {
        if (this._dirty) {
            var e = this._parent; ! this._visible || e && e != this._batchNode && e._shouldBeHidden ? this._shouldBeHidden = !0 : (this._shouldBeHidden = !1, this._transformToBatch = e && e != this._batchNode ? cc.AffineTransformConcat(this.nodeToParentTransform(), e._transformToBatch) : this.nodeToParentTransform()),
            this._dirty = this._recursiveDirty = !1
        }
        this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
    },
    addChild: null,
    _addChildForWebGL: function(e, t, n) {
        if (!e) throw "cc.Sprite.addChild(): child should be non-null";
        null == t && (t = e._zOrder),
        null == n && (n = e._tag);
        if (this._batchNode) {
            if (! (e instanceof cc.Sprite)) {
                cc.log("cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode");
                return
            }
            e.getTexture()._webTextureObj !== this._textureAtlas.getTexture()._webTextureObj && cc.log("cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode"),
            this._batchNode.appendChild(e),
            this._reorderChildDirty || this._setReorderChildDirtyRecursively()
        }
        cc.Node.prototype.addChild.call(this, e, t, n),
        this._hasChildren = !0
    },
    _addChildForCanvas: function(e, t, n) {
        if (!e) throw "cc.Sprite.addChild(): child should be non-null";
        null == t && (t = e._zOrder),
        null == n && (n = e._tag),
        cc.Node.prototype.addChild.call(this, e, t, n),
        this._hasChildren = !0
    },
    updateColor: function() {
        var e = this._displayedColor,
        t = this._displayedOpacity,
        e = {
            r: e.r,
            g: e.g,
            b: e.b,
            a: t
        };
        this._opacityModifyRGB && (e.r *= t / 255, e.g *= t / 255, e.b *= t / 255),
        t = this._quad,
        t.bl.colors = e,
        t.br.colors = e,
        t.tl.colors = e,
        t.tr.colors = e,
        this._batchNode && (this._atlasIndex != cc.SPRITE_INDEX_NOT_INITIALIZED ? this._textureAtlas.updateQuad(t, this._atlasIndex) : this._dirty = !0),
        this._quadDirty = !0
    },
    setOpacity: null,
    _setOpacityForWebGL: function(e) {
        cc.NodeRGBA.prototype.setOpacity.call(this, e),
        this.updateColor()
    },
    _setOpacityForCanvas: function(e) {
        cc.NodeRGBA.prototype.setOpacity.call(this, e),
        this._setNodeDirtyForCache()
    },
    setColor: null,
    _setColorForWebGL: function(e) {
        cc.NodeRGBA.prototype.setColor.call(this, e),
        this.updateColor()
    },
    _setColorForCanvas: function(e) {
        var t = this.getColor();
        if (t.r !== e.r || t.g !== e.g || t.b !== e.b) cc.NodeRGBA.prototype.setColor.call(this, e),
        this._changeTextureColor(),
        this._setNodeDirtyForCache()
    },
    updateDisplayedColor: null,
    _updateDisplayedColorForWebGL: function(e) {
        cc.NodeRGBA.prototype.updateDisplayedColor.call(this, e),
        this.updateColor()
    },
    _updateDisplayedColorForCanvas: function(e) {
        var t = this.getColor();
        cc.NodeRGBA.prototype.updateDisplayedColor.call(this, e),
        e = this._displayedColor;
        if (t.r !== e.r || t.g !== e.g || t.b !== e.b) this._changeTextureColor(),
        this._setNodeDirtyForCache()
    },
    setDisplayFrame: null,
    _setDisplayFrameForWebGL: function(e) {
        this.setNodeDirty();
        var t = e.getOffset();
        this._unflippedOffsetPositionFromCenter._x = t.x,
        this._unflippedOffsetPositionFromCenter._y = t.y,
        t = e.getTexture(),
        e.textureLoaded() || (this._textureLoaded = !1, e.addLoadedEventListener(function(e) {
            this._textureLoaded = !0;
            var t = e.getTexture();
            t != this._texture && this.setTexture(t),
            this.setTextureRect(e.getRect(), e.isRotated(), e.getOriginalSize()),
            this._callLoadedEventCallbacks()
        },
        this)),
        t != this._texture && this.setTexture(t),
        this._rectRotated = e.isRotated(),
        this.setTextureRect(e.getRect(), this._rectRotated, e.getOriginalSize())
    },
    _setDisplayFrameForCanvas: function(e) {
        this.setNodeDirty();
        var t = e.getOffset();
        this._unflippedOffsetPositionFromCenter._x = t.x,
        this._unflippedOffsetPositionFromCenter._y = t.y,
        this._rectRotated = e.isRotated();
        var t = e.getTexture(),
        n = e.textureLoaded();
        n || (this._textureLoaded = !1, e.addLoadedEventListener(function(e) {
            this._textureLoaded = !0;
            var t = e.getTexture();
            t != this._texture && this.setTexture(t),
            this.setTextureRect(e.getRect(), e.isRotated(), e.getOriginalSize()),
            this._callLoadedEventCallbacks()
        },
        this)),
        t != this._texture && this.setTexture(t),
        this._rectRotated && (this._originalTexture = t),
        this.setTextureRect(e.getRect(), this._rectRotated, e.getOriginalSize()),
        this._colorized = !1,
        n && (e = this.getColor(), 255 === e.r && 255 === e.g && 255 === e.b || this._changeTextureColor())
    },
    isFrameDisplayed: null,
    _isFrameDisplayedForWebGL: function(e) {
        return cc.rectEqualToRect(e.getRect(), this._rect) && e.getTexture().getName() == this._texture.getName() && cc.pointEqualToPoint(e.getOffset(), this._unflippedOffsetPositionFromCenter)
    },
    _isFrameDisplayedForCanvas: function(e) {
        return e.getTexture() != this._texture ? !1 : cc.rectEqualToRect(e.getRect(), this._rect)
    },
    displayFrame: function() {
        return cc.SpriteFrame.createWithTexture(this._texture, cc.RECT_POINTS_TO_PIXELS(this._rect), this._rectRotated, cc.POINT_POINTS_TO_PIXELS(this._unflippedOffsetPositionFromCenter), cc.SIZE_POINTS_TO_PIXELS(this._contentSize))
    },
    setBatchNode: null,
    _setBatchNodeForWebGL: function(e) {
        if (this._batchNode = e) this._transformToBatch = cc.AffineTransformIdentity(),
        this.setTextureAtlas(this._batchNode.getTextureAtlas());
        else {
            this._atlasIndex = cc.SPRITE_INDEX_NOT_INITIALIZED,
            this.setTextureAtlas(null),
            this._recursiveDirty = !1,
            this.setDirty(!1),
            e = this._offsetPosition._x;
            var t = this._offsetPosition._y,
            n = e + this._rect.width,
            r = t + this._rect.height,
            i = this._quad;
            i.bl.vertices = {
                x: e,
                y: t,
                z: 0
            },
            i.br.vertices = {
                x: n,
                y: t,
                z: 0
            },
            i.tl.vertices = {
                x: e,
                y: r,
                z: 0
            },
            i.tr.vertices = {
                x: n,
                y: r,
                z: 0
            },
            this._quadDirty = !0
        }
    },
    _setBatchNodeForCanvas: function(e) { (this._batchNode = e) ? (this._transformToBatch = cc.AffineTransformIdentity(), this.setTextureAtlas(this._batchNode.getTextureAtlas())) : (this._atlasIndex = cc.SPRITE_INDEX_NOT_INITIALIZED, this.setTextureAtlas(null), this._recursiveDirty = !1, this.setDirty(!1))
    },
    setTexture: null,
    _setTextureForWebGL: function(e) {
        if (! (!e || e instanceof cc.Texture2D)) throw "cc.Sprite.setTexture(): setTexture expects a CCTexture2D. Invalid argument";
        this._batchNode && this._batchNode.getTexture() != e ? cc.log("cc.Sprite.setTexture(): Batched sprites should use the same texture as the batchnode") : (e ? this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURECOLOR)) : this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_COLOR)), this._batchNode || this._texture == e || (this._texture = e, this._updateBlendFunc()))
    },
    _setTextureForCanvas: function(e) {
        if (! (!e || e instanceof cc.Texture2D)) throw "cc.Sprite.setTexture(): setTexture expects a CCTexture2D. Invalid argument";
        this._texture != e && (e && e.getHtmlElementObj() instanceof HTMLImageElement && (this._originalTexture = e), this._texture = e)
    },
    _updateBlendFunc: function() {
        this._batchNode ? cc.log("cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode") : this._texture && this._texture.hasPremultipliedAlpha() ? (this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.setOpacityModifyRGB(!0)) : (this._blendFunc.src = gl.SRC_ALPHA, this._blendFunc.dst = gl.ONE_MINUS_SRC_ALPHA, this.setOpacityModifyRGB(!1))
    },
    _changeTextureColor: function() {
        var e, t = this._texture,
        n = this._textureRect_Canvas;
        t && n.validRect && this._originalTexture && (e = t.getHtmlElementObj()) && (t = cc.TextureCache.getInstance().getTextureColors(this._originalTexture.getHtmlElementObj())) && (this._colorized = !0, e instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor ? cc.generateTintImage(e, t, this._displayedColor, n, e) : (e = cc.generateTintImage(e, t, this._displayedColor, n), t = new cc.Texture2D, t.initWithElement(e), t.handleLoadedTexture(), this.setTexture(t)))
    },
    _setTextureCoords: function(e) {
        e = cc.RECT_POINTS_TO_PIXELS(e);
        var t = this._batchNode ? this._textureAtlas.getTexture() : this._texture;
        if (t) {
            var n = t.getPixelsWide(),
            r = t.getPixelsHigh(),
            i,
            s = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (t = (2 * e.x + 1) / (2 * n), n = t + (2 * e.height - 2) / (2 * n), i = (2 * e.y + 1) / (2 * r), e = i + (2 * e.width - 2) / (2 * r)) : (t = e.x / n, n = (e.x + e.height) / n, i = e.y / r, e = (e.y + e.width) / r), this._flippedX && (r = i, i = e, e = r), this._flippedY && (r = t, t = n, n = r), s.bl.texCoords.u = t, s.bl.texCoords.v = i, s.br.texCoords.u = t, s.br.texCoords.v = e, s.tl.texCoords.u = n, s.tl.texCoords.v = i, s.tr.texCoords.u = n, s.tr.texCoords.v = e) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (t = (2 * e.x + 1) / (2 * n), n = t + (2 * e.width - 2) / (2 * n), i = (2 * e.y + 1) / (2 * r), e = i + (2 * e.height - 2) / (2 * r)) : (t = e.x / n, n = (e.x + e.width) / n, i = e.y / r, e = (e.y + e.height) / r), this._flippedX && (r = t, t = n, n = r), this._flippedY && (r = i, i = e, e = r), s.bl.texCoords.u = t, s.bl.texCoords.v = e, s.br.texCoords.u = n, s.br.texCoords.v = e, s.tl.texCoords.u = t, s.tl.texCoords.v = i, s.tr.texCoords.u = n, s.tr.texCoords.v = i),
            this._quadDirty = !0
        }
    },
    draw: null,
    _drawForWebGL: function() {
        if (this._textureLoaded) {
            var e = cc.renderContext,
            t = this._texture;
            t ? t._isLoaded && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2DN(0, t), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX), e.bindBuffer(e.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (e.bufferData(e.ARRAY_BUFFER, this._quad.arrayBuffer, e.DYNAMIC_DRAW), this._quadDirty = !1), e.vertexAttribPointer(0, 3, e.FLOAT, !1, 24, 0), e.vertexAttribPointer(1, 4, e.UNSIGNED_BYTE, !0, 24, 12), e.vertexAttribPointer(2, 2, e.FLOAT, !1, 24, 16), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)) : (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2D(null), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR), e.bindBuffer(e.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (cc.renderContext.bufferData(cc.renderContext.ARRAY_BUFFER, this._quad.arrayBuffer, cc.renderContext.STATIC_DRAW), this._quadDirty = !1), e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, e.FLOAT, !1, 24, 0), e.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, e.UNSIGNED_BYTE, !0, 24, 12), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)),
            cc.g_NumberOfDraws++,
            0 !== cc.SPRITE_DEBUG_DRAW && (1 === cc.SPRITE_DEBUG_DRAW ? (e = this._quad, e = [cc.p(e.tl.vertices.x, e.tl.vertices.y), cc.p(e.bl.vertices.x, e.bl.vertices.y), cc.p(e.br.vertices.x, e.br.vertices.y), cc.p(e.tr.vertices.x, e.tr.vertices.y)], cc.drawingUtil.drawPoly(e, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (e = this.getTextureRect()._size, t = this.getOffsetPosition(), e = [cc.p(t.x, t.y), cc.p(t.x + e.width, t.y), cc.p(t.x + e.width, t.y + e.height), cc.p(t.x, t.y + e.height)], cc.drawingUtil.drawPoly(e, 4, !0)))
        }
    },
    _drawForCanvas: function(e) {
        if (this._textureLoaded) {
            e = e || cc.renderContext,
            this._isLighterMode && (e.globalCompositeOperation = "lighter");
            var t = cc.EGLView.getInstance().getScaleX(),
            n = cc.EGLView.getInstance().getScaleY();
            e.globalAlpha = this._displayedOpacity / 255;
            var r = this._rect,
            i = this._offsetPosition,
            s = this._drawSize_Canvas,
            o = 0 | i._x,
            u = -i._y - r.height,
            a = this._textureRect_Canvas;
            s.width = r.width * t,
            s.height = r.height * n;
            if (this._flippedX || this._flippedY) e.save(),
            this._flippedX && (o = -i._x - r.width, e.scale( - 1, 1)),
            this._flippedY && (u = i._y, e.scale(1, -1));
            o *= t,
            u *= n,
            this._texture && a.validRect && (i = this._texture.getHtmlElementObj(), this._colorized ? e.drawImage(i, 0, 0, a.width, a.height, o, u, s.width, s.height) : e.drawImage(i, a.x, a.y, a.width, a.height, o, u, s.width, s.height)),
            1 === cc.SPRITE_DEBUG_DRAW ? (e.strokeStyle = "rgba(0,255,0,1)", o /= t, u = -(u / n), o = [cc.p(o, u), cc.p(o + r.width, u), cc.p(o + r.width, u - r.height), cc.p(o, u - r.height)], cc.drawingUtil.drawPoly(o, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (e.strokeStyle = "rgba(0,255,0,1)", t = this._rect._size, u = -u, o = [cc.p(o, u), cc.p(o + t.width, u), cc.p(o + t.width, u - t.height), cc.p(o, u - t.height)], cc.drawingUtil.drawPoly(o, 4, !0)),
            (this._flippedX || this._flippedY) && e.restore(),
            cc.g_NumberOfDraws++
        }
    }
}),
cc.Browser.supportWebGL ? (cc.Sprite.prototype._spriteFrameLoadedCallback = cc.Sprite.prototype._spriteFrameLoadedCallbackForWebGL, cc.Sprite.prototype.setOpacityModifyRGB = cc.Sprite.prototype._setOpacityModifyRGBForWebGL, cc.Sprite.prototype.updateDisplayedOpacity = cc.Sprite.prototype._updateDisplayedOpacityForWebGL, cc.Sprite.prototype.ctor = cc.Sprite.prototype._ctorForWebGL, cc.Sprite.prototype.setBlendFunc = cc.Sprite.prototype._setBlendFuncForWebGL, cc.Sprite.prototype.init = cc.Sprite.prototype._initForWebGL, cc.Sprite.prototype.initWithTexture = cc.Sprite.prototype._initWithTextureForWebGL, cc.Sprite.prototype._textureLoadedCallback = cc.Sprite.prototype._textureLoadedCallbackForWebGL, cc.Sprite.prototype.setTextureRect = cc.Sprite.prototype._setTextureRectForWebGL, cc.Sprite.prototype.updateTransform = cc.Sprite.prototype._updateTransformForWebGL, cc.Sprite.prototype.addChild = cc.Sprite.prototype._addChildForWebGL, cc.Sprite.prototype.setOpacity = cc.Sprite.prototype._setOpacityForWebGL, cc.Sprite.prototype.setColor = cc.Sprite.prototype._setColorForWebGL, cc.Sprite.prototype.updateDisplayedColor = cc.Sprite.prototype._updateDisplayedColorForWebGL, cc.Sprite.prototype.setDisplayFrame = cc.Sprite.prototype._setDisplayFrameForWebGL, cc.Sprite.prototype.isFrameDisplayed = cc.Sprite.prototype._isFrameDisplayedForWebGL, cc.Sprite.prototype.setBatchNode = cc.Sprite.prototype._setBatchNodeForWebGL, cc.Sprite.prototype.setTexture = cc.Sprite.prototype._setTextureForWebGL, cc.Sprite.prototype.draw = cc.Sprite.prototype._drawForWebGL) : (cc.Sprite.prototype._spriteFrameLoadedCallback = cc.Sprite.prototype._spriteFrameLoadedCallbackForCanvas, cc.Sprite.prototype.setOpacityModifyRGB = cc.Sprite.prototype._setOpacityModifyRGBForCanvas, cc.Sprite.prototype.updateDisplayedOpacity = cc.Sprite.prototype._updateDisplayedOpacityForCanvas, cc.Sprite.prototype.ctor = cc.Sprite.prototype._ctorForCanvas, cc.Sprite.prototype.setBlendFunc = cc.Sprite.prototype._setBlendFuncForCanvas, cc.Sprite.prototype.init = cc.Sprite.prototype._initForCanvas, cc.Sprite.prototype.initWithTexture = cc.Sprite.prototype._initWithTextureForCanvas, cc.Sprite.prototype._textureLoadedCallback = cc.Sprite.prototype._textureLoadedCallbackForCanvas, cc.Sprite.prototype.setTextureRect = cc.Sprite.prototype._setTextureRectForCanvas, cc.Sprite.prototype.updateTransform = cc.Sprite.prototype._updateTransformForCanvas, cc.Sprite.prototype.addChild = cc.Sprite.prototype._addChildForCanvas, cc.Sprite.prototype.setOpacity = cc.Sprite.prototype._setOpacityForCanvas, cc.Sprite.prototype.setColor = cc.Sprite.prototype._setColorForCanvas, cc.Sprite.prototype.updateDisplayedColor = cc.Sprite.prototype._updateDisplayedColorForCanvas, cc.Sprite.prototype.setDisplayFrame = cc.Sprite.prototype._setDisplayFrameForCanvas, cc.Sprite.prototype.isFrameDisplayed = cc.Sprite.prototype._isFrameDisplayedForCanvas, cc.Sprite.prototype.setBatchNode = cc.Sprite.prototype._setBatchNodeForCanvas, cc.Sprite.prototype.setTexture = cc.Sprite.prototype._setTextureForCanvas, cc.Sprite.prototype.draw = cc.Sprite.prototype._drawForCanvas),
cc.Sprite.createWithTexture = function(e, t) {
    var n = arguments.length,
    r = new cc.Sprite;
    switch (n) {
    case 1:
        return r && r.initWithTexture(e) ? r: null;
    case 2:
        return r && r.initWithTexture(e, t) ? r: null;
    default:
        throw "Sprite.createWithTexture(): Argument must be non-nil "
    }
},
cc.Sprite.create = function(e, t) {
    var n = arguments.length,
    r = new cc.Sprite;
    if (0 === n) {
        if (r.init()) return r
    } else if (r && r.init(e, t)) return r;
    return null
},
cc.Sprite.createWithSpriteFrameName = function(e) {
    var t = null;
    return "string" != typeof e ? (cc.log("Invalid argument. Expecting string."), null) : (t = cc.SpriteFrameCache.getInstance().getSpriteFrame(e), !t) ? (cc.log("Invalid spriteFrameName: " + e), null) : (e = new cc.Sprite) && e.initWithSpriteFrame(t) ? e: null
},
cc.Sprite.createWithSpriteFrame = function(e) {
    var t = new cc.Sprite;
    return t && t.initWithSpriteFrame(e) ? t: null
},
cc.AnimationFrame = cc.Class.extend({
    _spriteFrame: null,
    _delayPerUnit: 0,
    _userInfo: null,
    ctor: function() {
        this._delayPerUnit = 0
    },
    clone: function() {
        var e = new cc.AnimationFrame;
        return e.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo),
        e
    },
    copyWithZone: function(e) {
        return cc.clone(this)
    },
    copy: function(e) {
        return e = new cc.AnimationFrame,
        e.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo),
        e
    },
    initWithSpriteFrame: function(e, t, n) {
        return this._spriteFrame = e,
        this._delayPerUnit = t,
        this._userInfo = n,
        !0
    },
    getSpriteFrame: function() {
        return this._spriteFrame
    },
    setSpriteFrame: function(e) {
        this._spriteFrame = e
    },
    getDelayUnits: function() {
        return this._delayPerUnit
    },
    setDelayUnits: function(e) {
        this._delayPerUnit = e
    },
    getUserInfo: function() {
        return this._userInfo
    },
    setUserInfo: function(e) {
        this._userInfo = e
    }
}),
cc.Animation = cc.Class.extend({
    _frames: null,
    _loops: 0,
    _restoreOriginalFrame: !1,
    _duration: 0,
    _delayPerUnit: 0,
    _totalDelayUnits: 0,
    ctor: function() {
        this._frames = []
    },
    getFrames: function() {
        return this._frames
    },
    setFrames: function(e) {
        this._frames = e
    },
    addSpriteFrame: function(e) {
        var t = new cc.AnimationFrame;
        t.initWithSpriteFrame(e, 1, null),
        this._frames.push(t),
        this._totalDelayUnits++
    },
    addSpriteFrameWithFile: function(e) {
        e = cc.TextureCache.getInstance().addImage(e);
        var t = cc.RectZero();
        t._size = e.getContentSize(),
        e = cc.SpriteFrame.createWithTexture(e, t),
        this.addSpriteFrame(e)
    },
    addSpriteFrameWithTexture: function(e, t) {
        var n = cc.SpriteFrame.createWithTexture(e, t);
        this.addSpriteFrame(n)
    },
    initWithAnimationFrames: function(e, t, n) {
        cc.ArrayVerifyType(e, cc.AnimationFrame),
        this._delayPerUnit = t,
        this._loops = n,
        this.setFrames([]);
        for (t = 0; t < e.length; t++) n = e[t],
        this._frames.push(n),
        this._totalDelayUnits += n.getDelayUnits();
        return ! 0
    },
    clone: function() {
        var e = new cc.Animation;
        return e.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops),
        e.setRestoreOriginalFrame(this._restoreOriginalFrame),
        e
    },
    copyWithZone: function(e) {
        return e = new cc.Animation,
        e.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops),
        e.setRestoreOriginalFrame(this._restoreOriginalFrame),
        e
    },
    _copyFrames: function() {
        for (var e = [], t = 0; t < this._frames.length; t++) e.push(this._frames[t].clone());
        return e
    },
    copy: function(e) {
        return this.copyWithZone(null)
    },
    getLoops: function() {
        return this._loops
    },
    setLoops: function(e) {
        this._loops = e
    },
    setRestoreOriginalFrame: function(e) {
        this._restoreOriginalFrame = e
    },
    getRestoreOriginalFrame: function() {
        return this._restoreOriginalFrame
    },
    getDuration: function() {
        return this._totalDelayUnits * this._delayPerUnit
    },
    getDelayPerUnit: function() {
        return this._delayPerUnit
    },
    setDelayPerUnit: function(e) {
        this._delayPerUnit = e
    },
    getTotalDelayUnits: function() {
        return this._totalDelayUnits
    },
    initWithSpriteFrames: function(e, t) {
        cc.ArrayVerifyType(e, cc.SpriteFrame),
        this._loops = 1,
        this._delayPerUnit = t || 0,
        this.setFrames([]);
        if (e) for (var n = 0; n < e.length; n++) {
            var r = e[n],
            i = new cc.AnimationFrame;
            i.initWithSpriteFrame(r, 1, null),
            this._frames.push(i),
            this._totalDelayUnits++
        }
        return ! 0
    },
    retain: function() {},
    release: function() {}
}),
cc.Animation.create = function(e, t, n) {
    var r = arguments.length,
    i = new cc.Animation;
    return 0 == r ? i.initWithSpriteFrames(null, 0) : 2 == r ? i.initWithSpriteFrames(e, t || 0) : 3 == r && i.initWithAnimationFrames(e, t, n),
    i
},
cc.Animation.createWithAnimationFrames = function(e, t, n) {
    var r = new cc.Animation;
    return r.initWithAnimationFrames(e, t, n),
    r
},
cc.AnimationCache = cc.Class.extend({
    addAnimation: function(e, t) {
        this._animations[t] = e
    },
    removeAnimation: function(e) {
        e && this._animations.hasOwnProperty(e) && delete this._animations[e]
    },
    getAnimation: function(e) {
        return this._animations.hasOwnProperty(e) ? this._animations[e] : null
    },
    _addAnimationsWithDictionary: function(e, t) {
        var n = e.animations;
        if (n) {
            var r = 1,
            i = e.properties;
            if (i) for (var r = null != i.format ? parseInt(i.format) : r, i = i.spritesheets, s = cc.SpriteFrameCache.getInstance(), o = cc.FileUtils.getInstance(), u, a = 0; a < i.length; a++) u = o.fullPathFromRelativeFile(i[a], t),
            s.addSpriteFrames(u);
            switch (r) {
            case 1:
                this._parseVersion1(n);
                break;
            case 2:
                this._parseVersion2(n);
                break;
            default:
                cc.log("cc.AnimationCache. Invalid animation format")
            }
        } else cc.log("cocos2d: cc.AnimationCache: No animations were found in provided dictionary.")
    },
    addAnimations: function(e) {
        if (!e) throw "cc.AnimationCache.addAnimations(): Invalid texture file name";
        var t = cc.FileUtils.getInstance(),
        n = t.fullPathForFilename(e); (t = t.dictionaryWithContentsOfFileThreadSafe(n)) ? this._addAnimationsWithDictionary(t, e) : cc.log("cc.AnimationCache.addAnimations(): File could not be found")
    },
    _parseVersion1: function(e) {
        var t = cc.SpriteFrameCache.getInstance(),
        n;
        for (n in e) {
            var r = e[n],
            i = r.frames,
            r = parseFloat(r.delay) || 0,
            s = null;
            if (i) {
                for (var s = [], o = 0; o < i.length; o++) {
                    var u = t.getSpriteFrame(i[o]);
                    if (u) {
                        var a = new cc.AnimationFrame;
                        a.initWithSpriteFrame(u, 1, null),
                        s.push(a)
                    } else cc.log("cocos2d: cc.AnimationCache: Animation '" + n + "' refers to frame '" + i[o] + "' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.")
                }
                0 === s.length ? cc.log("cocos2d: cc.AnimationCache: None of the frames for animation '" + n + "' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.") : (s.length != i.length && cc.log("cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '" + n + "' may be missing."), s = cc.Animation.createWithAnimationFrames(s, r, 1), cc.AnimationCache.getInstance().addAnimation(s, n))
            } else cc.log("cocos2d: cc.AnimationCache: Animation '" + n + "' found in dictionary without any frames - cannot add to animation cache.")
        }
    },
    _parseVersion2: function(e) {
        var t = cc.SpriteFrameCache.getInstance(),
        n;
        for (n in e) {
            var r = e[n],
            i = r.loop,
            s = parseInt(r.loops),
            i = i ? cc.REPEAT_FOREVER: isNaN(s) ? 1 : s,
            s = r.restoreOriginalFrame && 1 == r.restoreOriginalFrame ? !0 : !1,
            o = r.frames;
            if (o) {
                for (var u = [], a = 0; a < o.length; a++) {
                    var f = o[a],
                    l = f.spriteframe,
                    c = t.getSpriteFrame(l);
                    if (c) {
                        var l = parseFloat(f.delayUnits) || 0,
                        f = f.notification,
                        h = new cc.AnimationFrame;
                        h.initWithSpriteFrame(c, l, f),
                        u.push(h)
                    } else cc.log("cocos2d: cc.AnimationCache: Animation '" + n + "' refers to frame '" + l + "' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.")
                }
                r = parseFloat(r.delayPerUnit) || 0,
                o = new cc.Animation,
                o.initWithAnimationFrames(u, r, i),
                o.setRestoreOriginalFrame(s),
                cc.AnimationCache.getInstance().addAnimation(o, n)
            } else cc.log("cocos2d: CCAnimationCache: Animation '" + n + "' found in dictionary without any frames - cannot add to animation cache.")
        }
    },
    init: function() {
        return this._animations = {},
        !0
    },
    _animations: null
}),
cc.AnimationCache.purgeSharedAnimationCache = function() {
    cc.s_sharedAnimationCache && (cc.s_sharedAnimationCache._animations = null, cc.s_sharedAnimationCache = null)
},
cc.AnimationCache.getInstance = function() {
    return null === cc.s_sharedAnimationCache && (cc.s_sharedAnimationCache = new cc.AnimationCache, cc.s_sharedAnimationCache.init()),
    cc.s_sharedAnimationCache
},
cc.s_sharedAnimationCache = null,
cc.SpriteFrame = cc.Class.extend({
    _offset: null,
    _originalSize: null,
    _rectInPixels: null,
    _rotated: !1,
    _rect: null,
    _offsetInPixels: null,
    _originalSizeInPixels: null,
    _texture: null,
    _textureFilename: "",
    _textureLoaded: !1,
    _eventListeners: null,
    ctor: function() {
        this._offset = cc._pConst(0, 0),
        this._offsetInPixels = cc._pConst(0, 0),
        this._originalSize = cc._sizeConst(0, 0),
        this._rotated = !1,
        this._originalSizeInPixels = cc._sizeConst(0, 0),
        this._textureFilename = "",
        this._texture = null,
        this._textureLoaded = !1
    },
    textureLoaded: function() {
        return this._textureLoaded
    },
    addLoadedEventListener: function(e, t) {
        null == this._eventListeners && (this._eventListeners = []),
        this._eventListeners.push({
            eventCallback: e,
            eventTarget: t
        })
    },
    _callLoadedEventCallbacks: function() {
        var e = this._eventListeners;
        if (e) {
            for (var t = 0,
            n = e.length; t < n; t++) {
                var r = e[t];
                r.eventCallback.call(r.eventTarget, this)
            }
            e.length = 0
        }
    },
    getRectInPixels: function() {
        var e = this._rectInPixels;
        return cc.rect(e.x, e.y, e.width, e.height)
    },
    setRectInPixels: function(e) {
        this._rectInPixels || (this._rectInPixels = cc.rect(0, 0, 0, 0)),
        this._rectInPixels.x = e.x,
        this._rectInPixels.y = e.y,
        this._rectInPixels.width = e.width,
        this._rectInPixels.height = e.height,
        this._rect = cc.RECT_PIXELS_TO_POINTS(e)
    },
    isRotated: function() {
        return this._rotated
    },
    setRotated: function(e) {
        this._rotated = e
    },
    getRect: function() {
        var e = this._rect;
        return cc.rect(e.x, e.y, e.width, e.height)
    },
    setRect: function(e) {
        this._rect || (this._rect = cc.rect(0, 0, 0, 0)),
        this._rect.x = e.x,
        this._rect.y = e.y,
        this._rect.width = e.width,
        this._rect.height = e.height,
        this._rectInPixels = cc.RECT_POINTS_TO_PIXELS(this._rect)
    },
    getOffsetInPixels: function() {
        return this._offsetInPixels
    },
    setOffsetInPixels: function(e) {
        this._offsetInPixels._x = e.x,
        this._offsetInPixels._y = e.y,
        cc._POINT_PIXELS_TO_POINTS_OUT(this._offsetInPixels, this._offset)
    },
    getOriginalSizeInPixels: function() {
        return this._originalSizeInPixels
    },
    setOriginalSizeInPixels: function(e) {
        this._originalSizeInPixels._width = e.width,
        this._originalSizeInPixels._height = e.height
    },
    getOriginalSize: function() {
        return this._originalSize
    },
    setOriginalSize: function(e) {
        this._originalSize._width = e.width,
        this._originalSize._height = e.height
    },
    getTexture: function() {
        if (this._texture) return this._texture;
        if ("" !== this._textureFilename) {
            var e = cc.TextureCache.getInstance().addImage(this._textureFilename);
            return e && (this._textureLoaded = e.isLoaded()),
            e
        }
        return null
    },
    setTexture: function(e) {
        if (this._texture != e) {
            var t = e.isLoaded();
            this._textureLoaded = t,
            this._texture = e,
            t || e.addLoadedEventListener(function(e) {
                this._textureLoaded = !0;
                if (this._rotated && cc.renderContextType === cc.CANVAS) {
                    var t = e.getHtmlElementObj(),
                    t = cc.cutRotateImageToCanvas(t, this.getRect()),
                    n = new cc.Texture2D;
                    n.initWithElement(t),
                    n.handleLoadedTexture(),
                    this.setTexture(n),
                    t = this.getRect(),
                    this.setRect(cc.rect(0, 0, t.width, t.height))
                }
                t = this._rect,
                0 === t.width && 0 === t.height && (e = e.getContentSize(), this._rect.width = e.width, this._rect.height = e.height, this._rectInPixels = cc.RECT_POINTS_TO_PIXELS(this._rect), this._originalSizeInPixels._width = this._rectInPixels.width, this._originalSizeInPixels._height = this._rectInPixels.height, this._originalSize._width = e.width, this._originalSize._height = e.height),
                this._callLoadedEventCallbacks()
            },
            this)
        }
    },
    getOffset: function() {
        return this._offset
    },
    setOffset: function(e) {
        this._offset._x = e.x,
        this._offset._y = e.y
    },
    clone: function() {
        var e = new cc.SpriteFrame;
        return e.initWithTextureFilename(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels),
        e.setTexture(this._texture),
        e
    },
    copyWithZone: function() {
        var e = new cc.SpriteFrame;
        return e.initWithTextureFilename(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels),
        e.setTexture(this._texture),
        e
    },
    copy: function() {
        return this.copyWithZone()
    },
    initWithTexture: function(e, t, n, r, i) {
        return 2 === arguments.length && (t = cc.RECT_POINTS_TO_PIXELS(t)),
        r = r || cc.p(0, 0),
        i = i || t._size,
        this.setTexture(e),
        this._rectInPixels = t,
        this._rect = cc.RECT_PIXELS_TO_POINTS(t),
        this._offsetInPixels._x = r.x,
        this._offsetInPixels._y = r.y,
        cc._POINT_PIXELS_TO_POINTS_OUT(r, this._offset),
        this._originalSizeInPixels._width = i.width,
        this._originalSizeInPixels._height = i.height,
        cc._SIZE_PIXELS_TO_POINTS_OUT(i, this._originalSize),
        this._rotated = n || !1,
        !0
    },
    initWithTextureFilename: function(e, t, n, r, i) {
        return 2 === arguments.length && (t = cc.RECT_POINTS_TO_PIXELS(t)),
        r = r || cc.p(0, 0),
        i = i || t._size,
        this._texture = null,
        this._textureFilename = e,
        this._rectInPixels = t,
        this._rect = cc.RECT_PIXELS_TO_POINTS(t),
        this._rotated = n || !1,
        this._offsetInPixels._x = r.x,
        this._offsetInPixels._y = r.y,
        cc._POINT_PIXELS_TO_POINTS_OUT(r, this._offset),
        this._originalSizeInPixels._width = i.width,
        this._originalSizeInPixels._height = i.height,
        cc._SIZE_PIXELS_TO_POINTS_OUT(i, this._originalSize),
        !0
    }
}),
cc.SpriteFrame.create = function(e, t, n, r, i) {
    var s = new cc.SpriteFrame;
    switch (arguments.length) {
    case 2:
        s.initWithTextureFilename(e, t);
        break;
    case 5:
        s.initWithTextureFilename(e, t, n, r, i);
        break;
    default:
        throw "Argument must be non-nil "
    }
    return s
},
cc.SpriteFrame.createWithTexture = function(e, t, n, r, i) {
    var s = new cc.SpriteFrame;
    switch (arguments.length) {
    case 2:
        s.initWithTexture(e, t);
        break;
    case 5:
        s.initWithTexture(e, t, n, r, i);
        break;
    default:
        throw "Argument must be non-nil "
    }
    return s
},
cc.SpriteFrame._frameWithTextureForCanvas = function(e, t, n, r, i) {
    var s = new cc.SpriteFrame;
    return s._texture = e,
    s._rectInPixels = t,
    s._rect = cc.RECT_PIXELS_TO_POINTS(t),
    s._offsetInPixels._x = r.x,
    s._offsetInPixels._y = r.y,
    cc._POINT_PIXELS_TO_POINTS_OUT(s._offsetInPixels, s._offset),
    s._originalSizeInPixels._width = i.width,
    s._originalSizeInPixels._height = i.height,
    cc._SIZE_PIXELS_TO_POINTS_OUT(s._originalSizeInPixels, s._originalSize),
    s._rotated = n,
    s
},
cc.SpriteFrameCache = cc.Class.extend({
    _spriteFrames: null,
    _spriteFramesAliases: null,
    _loadedFileNames: null,
    ctor: function() {
        this._spriteFrames = {},
        this._spriteFramesAliases = {},
        this._loadedFileNames = []
    },
    _addSpriteFramesWithDictionary: function(e, t) {
        var n = e.metadata || e.meta,
        r = e.frames,
        i = 0;
        n && (i = n.format, i = 1 >= i.length ? parseInt(i) : i);
        if (0 > i || 3 < i) cc.log("format is not supported for cc.SpriteFrameCache.addSpriteFramesWithDictionary");
        else for (var s in r) if (n = r[s]) {
            var o = this._spriteFrames[s];
            if (!o) {
                if (0 == i) {
                    var o = parseFloat(n.x),
                    u = parseFloat(n.y),
                    a = parseFloat(n.width),
                    f = parseFloat(n.height),
                    l = parseFloat(n.offsetX),
                    c = parseFloat(n.offsetY),
                    h = parseInt(n.originalWidth),
                    n = parseInt(n.originalHeight);
                    h && n || cc.log("cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist"),
                    h = Math.abs(h),
                    n = Math.abs(n),
                    o = cc.SpriteFrame.createWithTexture(t, cc.rect(o, u, a, f), !1, cc.p(l, c), cc.size(h, n))
                } else if (1 == i || 2 == i) o = cc.RectFromString(n.frame),
                u = !1,
                2 == i && (u = n.rotated),
                a = cc.PointFromString(n.offset),
                n = cc.SizeFromString(n.sourceSize),
                o = cc.SpriteFrame.createWithTexture(t, o, u, a, n);
                else if (3 == i) {
                    var o = cc.SizeFromString(n.spriteSize),
                    u = cc.PointFromString(n.spriteOffset),
                    a = cc.SizeFromString(n.spriteSourceSize),
                    f = cc.RectFromString(n.textureRect),
                    l = n.textureRotated,
                    c = n.aliases,
                    h = s.toString(),
                    p;
                    for (p in c) this._spriteFramesAliases.hasOwnProperty(c[p]) && cc.log("cocos2d: WARNING: an alias with name " + p + " already exists"),
                    this._spriteFramesAliases[c[p]] = h;
                    n.hasOwnProperty("spriteSize") && (f = cc.rect(f.x, f.y, o.width, o.height)),
                    o = cc.SpriteFrame.createWithTexture(t, f, l, u, a)
                } else var d = n.filename,
                u = n.frame,
                o = n.sourceSize,
                u = cc.rect(u.x, u.y, u.w, u.h),
                n = n.rotated,
                a = cc.p(0, 0),
                o = cc.size(o.w, o.h),
                o = cc.SpriteFrame.createWithTexture(t, u, n, a, o);
                cc.renderContextType === cc.CANVAS && o.isRotated() && o.getTexture().isLoaded() && (n = o.getTexture().getHtmlElementObj(), n = cc.cutRotateImageToCanvas(n, o.getRectInPixels()), u = new cc.Texture2D, u.initWithElement(n), u.handleLoadedTexture(), o.setTexture(u), n = o._rect, o.setRect(cc.rect(0, 0, n.width, n.height))),
                this._spriteFrames[null != d ? d: s] = o
            }
        }
    },
    addSpriteFrames: function(e, t) {
        if (!e) throw "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null";
        var n = cc.FileUtils.getInstance(),
        r;
        "plist" == e.substr(e.lastIndexOf(".", e.length) + 1, e.length) ? (r = n.fullPathForFilename(e), r = n.dictionaryWithContentsOfFileThreadSafe(r)) : r = JSON.parse(n.getTextFileData(e));
        switch (arguments.length) {
        case 1:
            if (!cc.ArrayContainsObject(this._loadedFileNames, e)) {
                var i = "",
                s = r.metadata || r.meta;
                s && (i = s.textureFileName || s.image),
                "" != i ? i = n.fullPathFromRelativeFile(i, e) : (i = e, n = i.lastIndexOf(".", i.length), i = i.substr(0, n), i += ".png"),
                (n = cc.TextureCache.getInstance().addImage(i)) ? this._addSpriteFramesWithDictionary(r, n) : cc.log("cocos2d: cc.SpriteFrameCache: Couldn't load texture")
            }
            break;
        case 2:
            if (t instanceof cc.Texture2D) this._addSpriteFramesWithDictionary(r, t);
            else {
                if (!t) throw "cc.SpriteFrameCache.addSpriteFrames(): texture name should not be null"; (n = cc.TextureCache.getInstance().addImage(t)) ? this._addSpriteFramesWithDictionary(r, n) : cc.log("cocos2d: cc.SpriteFrameCache: couldn't load texture file. File not found " + t)
            }
            break;
        default:
            throw "Argument must be non-nil "
        }
    },
    addSpriteFrame: function(e, t) {
        this._spriteFrames[t] = e
    },
    removeSpriteFrames: function() {
        this._spriteFrames = [],
        this._spriteFramesAliases = [],
        this._loadedFileNames = {}
    },
    removeSpriteFrameByName: function(e) {
        e && (this._spriteFramesAliases.hasOwnProperty(e) && delete this._spriteFramesAliases[e], this._spriteFrames.hasOwnProperty(e) && delete this._spriteFrames[e], this._loadedFileNames = {})
    },
    removeSpriteFramesFromFile: function(e) {
        var t = cc.FileUtils.getInstance(),
        n = t.fullPathForFilename(e),
        t = t.dictionaryWithContentsOfFileThreadSafe(n);
        this._removeSpriteFramesFromDictionary(t),
        cc.ArrayContainsObject(this._loadedFileNames, e) && cc.ArrayRemoveObject(e)
    },
    _removeSpriteFramesFromDictionary: function(e) {
        e = e.frames;
        for (var t in e) this._spriteFrames.hasOwnProperty(t) && delete this._spriteFrames[t]
    },
    removeSpriteFramesFromTexture: function(e) {
        for (var t in this._spriteFrames) {
            var n = this._spriteFrames[t];
            n && n.getTexture() == e && delete this._spriteFrames[t]
        }
    },
    getSpriteFrame: function(e) {
        var t;
        this._spriteFrames.hasOwnProperty(e) && (t = this._spriteFrames[e]);
        if (!t) {
            var n;
            this._spriteFramesAliases.hasOwnProperty(e) && (n = this._spriteFramesAliases[e]),
            n && (this._spriteFrames.hasOwnProperty(n.toString()) && (t = this._spriteFrames[n.toString()]), t || cc.log("cocos2d: cc.SpriteFrameCahce: Frame " + e + " not found"))
        }
        return t
    }
}),
cc.s_sharedSpriteFrameCache = null,
cc.SpriteFrameCache.getInstance = function() {
    return cc.s_sharedSpriteFrameCache || (cc.s_sharedSpriteFrameCache = new cc.SpriteFrameCache),
    cc.s_sharedSpriteFrameCache
},
cc.SpriteFrameCache.purgeSharedSpriteFrameCache = function() {
    cc.s_sharedSpriteFrameCache = null
},
cc.ConfigurationType = {
    ConfigurationError: 0,
    ConfigurationString: 1,
    ConfigurationInt: 2,
    ConfigurationDouble: 3,
    ConfigurationBoolean: 4
},
cc.Configuration = cc.Class.extend({
    _maxTextureSize: 0,
    _maxModelviewStackDepth: 0,
    _supportsPVRTC: !1,
    _supportsNPOT: !1,
    _supportsBGRA8888: !1,
    _supportsDiscardFramebuffer: !1,
    _supportsShareableVAO: !1,
    _maxSamplesAllowed: 0,
    _maxTextureUnits: 0,
    _GlExtensions: "",
    _valueDict: null,
    ctor: function() {
        this._maxModelviewStackDepth = this._maxTextureSize = 0,
        this._supportsShareableVAO = this._supportsDiscardFramebuffer = this._supportsBGRA8888 = this._supportsNPOT = this._supportsPVRTC = !1,
        this._maxTextureUnits = this._maxSamplesAllowed = 0,
        this._GlExtensions = "",
        this._valueDict = {}
    },
    getMaxTextureSize: function() {
        return this._maxTextureSize
    },
    getMaxModelviewStackDepth: function() {
        return this._maxModelviewStackDepth
    },
    getMaxTextureUnits: function() {
        return this._maxTextureUnits
    },
    supportsNPOT: function() {
        return this._supportsNPOT
    },
    supportsPVRTC: function() {
        return this._supportsPVRTC
    },
    supportsBGRA8888: function() {
        return this._supportsBGRA8888
    },
    supportsDiscardFramebuffer: function() {
        return this._supportsDiscardFramebuffer
    },
    supportsShareableVAO: function() {
        return this._supportsShareableVAO
    },
    checkForGLExtension: function(e) {
        return - 1 < this._GlExtensions.indexOf(e)
    },
    init: function() {
        var e = this._valueDict;
        return e["cocos2d.x.version"] = cc.ENGINE_VERSION,
        e["cocos2d.x.compiled_with_profiler"] = !1,
        e["cocos2d.x.compiled_with_gl_state_cache"] = cc.ENABLE_GL_STATE_CACHE,
        !0
    },
    getCString: function(e, t) {
        var n = this._valueDict;
        return n.hasOwnProperty(e) ? n[e] : t
    },
    getBool: function(e, t) {
        null == t && (t = !1);
        var n = this._valueDict;
        return n.hasOwnProperty(e) ? n[e] : t
    },
    getNumber: function(e, t) {
        null == t && (t = 0);
        var n = this._valueDict;
        return n.hasOwnProperty(e) ? n[e] : t
    },
    getObject: function(e) {
        var t = this._valueDict;
        return t.hasOwnProperty(e) ? t[e] : null
    },
    setObject: function(e, t) {
        this._valueDict[e] = t
    },
    dumpInfo: function() {
        0 === cc.ENABLE_GL_STATE_CACHE && (cc.log(""), cc.log("cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)"), cc.log(""))
    },
    gatherGPUInfo: function() {
        if (cc.renderContextType !== cc.CANVAS) {
            var e = cc.renderContext,
            t = this._valueDict;
            t["gl.vendor"] = e.getParameter(e.VENDOR),
            t["gl.renderer"] = e.getParameter(e.RENDERER),
            t["gl.version"] = e.getParameter(e.VERSION),
            this._GlExtensions = "";
            for (var n = e.getSupportedExtensions(), r = 0; r < n.length; r++) this._GlExtensions += n[r] + " ";
            this._maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE),
            t["gl.max_texture_size"] = this._maxTextureSize,
            this._maxTextureUnits = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            t["gl.max_texture_units"] = this._maxTextureUnits,
            this._supportsPVRTC = this.checkForGLExtension("GL_IMG_texture_compression_pvrtc"),
            t["gl.supports_PVRTC"] = this._supportsPVRTC,
            this._supportsNPOT = !1,
            t["gl.supports_NPOT"] = this._supportsNPOT,
            this._supportsBGRA8888 = this.checkForGLExtension("GL_IMG_texture_format_BGRA888"),
            t["gl.supports_BGRA8888"] = this._supportsBGRA8888,
            this._supportsDiscardFramebuffer = this.checkForGLExtension("GL_EXT_discard_framebuffer"),
            t["gl.supports_discard_framebuffer"] = this._supportsDiscardFramebuffer,
            this._supportsShareableVAO = this.checkForGLExtension("vertex_array_object"),
            t["gl.supports_vertex_array_object"] = this._supportsShareableVAO,
            cc.CHECK_GL_ERROR_DEBUG()
        }
    },
    loadConfigFile: function(e) {
        var t = cc.FileUtils.getInstance(),
        n = t.fullPathForFilename(e),
        t = t.dictionaryWithContentsOfFileThreadSafe(n);
        if (null != t) if (t = t.data) for (var r in t) this._valueDict[r] = t[r];
        else cc.log("Expected 'data' dict, but not found. Config file: " + e)
    }
}),
cc.Configuration._sharedConfiguration = null,
cc.Configuration.getInstance = function() {
    return cc.Configuration._sharedConfiguration || (cc.Configuration._sharedConfiguration = new cc.Configuration, cc.Configuration._sharedConfiguration.init()),
    cc.Configuration._sharedConfiguration
},
cc.Configuration.purgeConfiguration = function() {
    cc.Configuration._sharedConfiguration = null
},
cc.g_NumberOfDraws = 0,
cc.DIRECTOR_PROJECTION_2D = 0,
cc.DIRECTOR_PROJECTION_3D = 1,
cc.DIRECTOR_PROJECTION_CUSTOM = 3,
cc.DIRECTOR_PROJECTION_DEFAULT = cc.DIRECTOR_PROJECTION_3D,
cc.DEVICE_ORIENTATION_PORTRAIT = 0,
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1,
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2,
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3,
cc.DEVICE_MAX_ORIENTATIONS = 2,
cc.DirectorDelegate = cc.Class.extend({
    updateProjection: function() {}
}),
cc.GLToClipTransform = function(e) {
    var t = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, t);
    var n = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, n),
    cc.kmMat4Multiply(e, t, n)
},
cc.Director = cc.Class.extend({
    _landscape: !1,
    _nextDeltaTimeZero: !1,
    _paused: !1,
    _purgeDirecotorInNextLoop: !1,
    _sendCleanupToScene: !1,
    _animationInterval: 0,
    _oldAnimationInterval: 0,
    _projection: 0,
    _accumDt: 0,
    _contentScaleFactor: 1,
    _displayStats: !1,
    _deltaTime: 0,
    _frameRate: 0,
    _FPSLabel: null,
    _SPFLabel: null,
    _drawsLabel: null,
    _winSizeInPoints: null,
    _lastUpdate: null,
    _nextScene: null,
    _notificationNode: null,
    _openGLView: null,
    _scenesStack: null,
    _projectionDelegate: null,
    _runningScene: null,
    _frames: 0,
    _totalFrames: 0,
    _secondsPerFrame: 0,
    _dirtyRegion: null,
    _scheduler: null,
    _actionManager: null,
    _touchDispatcher: null,
    _keyboardDispatcher: null,
    _accelerometer: null,
    _mouseDispatcher: null,
    _isBlur: !1,
    ctor: function() {
        this._lastUpdate = Date.now();
        if (!cc.isAddedHiddenEvent) {
            var e = this;
            window.addEventListener("focus",
            function() {
                e._lastUpdate = Date.now()
            },
            !1)
        }
    },
    _resetLastUpdate: function() {
        this._lastUpdate = Date.now()
    },
    init: function() {
        return this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS,
        this._scenesStack = [],
        this._projection = cc.DIRECTOR_PROJECTION_DEFAULT,
        this._projectionDelegate = null,
        this._frameRate = this._accumDt = 0,
        this._displayStats = !1,
        this._totalFrames = this._frames = 0,
        this._lastUpdate = Date.now(),
        this._purgeDirecotorInNextLoop = this._paused = !1,
        this._winSizeInPoints = cc._sizeConst(0, 0),
        this._openGLView = null,
        this._contentScaleFactor = 1,
        this._scheduler = new cc.Scheduler,
        this._actionManager = new cc.ActionManager,
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.PRIORITY_SYSTEM, !1),
        cc.TouchDispatcher && (this._touchDispatcher = new cc.TouchDispatcher, this._touchDispatcher.init()),
        cc.KeyboardDispatcher && (this._keyboardDispatcher = cc.KeyboardDispatcher.getInstance()),
        cc.Accelerometer && (this._accelerometer = new cc.Accelerometer),
        cc.MouseDispatcher && (this._mouseDispatcher = new cc.MouseDispatcher, this._mouseDispatcher.init()),
        !0
    },
    calculateDeltaTime: function() {
        var e = Date.now();
        this._nextDeltaTimeZero ? (this._deltaTime = 0, this._nextDeltaTimeZero = !1) : this._deltaTime = (e - this._lastUpdate) / 1e3,
        0 < cc.COCOS2D_DEBUG && .2 < this._deltaTime && (this._deltaTime = 1 / 60),
        this._lastUpdate = e
    },
    convertToGL: function(e) {
        var t = new cc.kmMat4;
        cc.GLToClipTransform(t);
        var n = new cc.kmMat4;
        cc.kmMat4Inverse(n, t);
        var t = t.mat[14] / t.mat[15],
        r = this._openGLView.getDesignResolutionSize();
        return e = new cc.kmVec3(2 * e.x / r.width - 1, 1 - 2 * e.y / r.height, t),
        t = new cc.kmVec3,
        cc.kmVec3TransformCoord(t, e, n),
        cc.p(t.x, t.y)
    },
    convertToUI: function(e) {
        var t = new cc.kmMat4;
        cc.GLToClipTransform(t);
        var n = new cc.kmVec3;
        return e = new cc.kmVec3(e.x, e.y, 0),
        cc.kmVec3TransformCoord(n, e, t),
        t = this._openGLView.getDesignResolutionSize(),
        cc.p(t.width * (.5 * n.x + .5), t.height * (.5 * -n.y + .5))
    },
    drawScene: function() {
        this.calculateDeltaTime(),
        this._paused || this._scheduler.update(this._deltaTime),
        this._clear(),
        this._nextScene && this.setNextScene(),
        this._beforeVisitScene && this._beforeVisitScene(),
        this._runningScene && this._runningScene.visit(),
        this._notificationNode && this._notificationNode.visit(),
        this._displayStats && this._showStats(),
        this._afterVisitScene && this._afterVisitScene(),
        this._totalFrames++,
        this._displayStats && this._calculateMPF()
    },
    _clearCanvas: function() {
        var e = this._openGLView.getViewPortRect();
        cc.renderContext.clearRect( - e.x, e.y, e.width, -e.height)
    },
    _clearWebGL: function() {
        var e = cc.renderContext;
        e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
    },
    _beforeVisitScene: null,
    _afterVisitScene: null,
    _beforeVisitSceneWebGL: function() {
        cc.kmGLPushMatrix()
    },
    _afterVisitSceneWebGL: function() {
        cc.kmGLPopMatrix()
    },
    end: function() {
        this._purgeDirecotorInNextLoop = !0
    },
    getContentScaleFactor: function() {
        return this._contentScaleFactor
    },
    getNotificationNode: function() {
        return this._notificationNode
    },
    getWinSize: function() {
        return this._winSizeInPoints
    },
    getWinSizeInPixels: function() {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor)
    },
    getVisibleSize: function() {
        return this._openGLView ? this._openGLView.getVisibleSize() : this.getWinSize()
    },
    getVisibleOrigin: function() {
        return this._openGLView ? this._openGLView.getVisibleOrigin() : cc.POINT_ZERO
    },
    getZEye: function() {
        return this._winSizeInPoints.height / 1.1566
    },
    pause: function() {
        this._paused || (this._oldAnimationInterval = this._animationInterval, this.setAnimationInterval(.25), this._paused = !0)
    },
    popScene: function() {
        if (!this._runningScene) throw "running scene should not null";
        this._scenesStack.pop();
        var e = this._scenesStack.length;
        0 == e ? this.end() : (this._sendCleanupToScene = !0, this._nextScene = this._scenesStack[e - 1])
    },
    purgeCachedData: function() {
        cc.LabelBMFont.purgeCachedData()
    },
    purgeDirector: function() {
        this.getScheduler().unscheduleAllCallbacks(),
        this._touchDispatcher && this._touchDispatcher.removeAllDelegates(),
        this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit(), this._runningScene.cleanup()),
        this._nextScene = this._runningScene = null,
        this._scenesStack = [],
        this.stopAnimation(),
        cc.LabelBMFont.purgeCachedData(),
        cc.AnimationCache.purgeSharedAnimationCache(),
        cc.SpriteFrameCache.purgeSharedSpriteFrameCache(),
        cc.TextureCache.purgeSharedTextureCache(),
        cc.CHECK_GL_ERROR_DEBUG()
    },
    pushScene: function(e) {
        if (!e) throw "the scene should not null";
        this._sendCleanupToScene = !1,
        this._scenesStack.push(e),
        this._nextScene = e
    },
    replaceScene: function(e) {
        if (!this._runningScene) throw "Use runWithScene: instead to start the director";
        if (!e) throw "the scene should not be null";
        var t = this._scenesStack.length;
        0 === t ? (this._sendCleanupToScene = !0, this._scenesStack[t] = e) : (this._sendCleanupToScene = !0, this._scenesStack[t - 1] = e),
        this._nextScene = e
    },
    resume: function() {
        this._paused && (this.setAnimationInterval(this._oldAnimationInterval), (this._lastUpdate = Date.now()) || cc.log("cocos2d: Director: Error in gettimeofday"), this._paused = !1, this._deltaTime = 0)
    },
    runWithScene: function(e) {
        if (!e) throw "This command can only be used to start the CCDirector. There is already a scene present.";
        if (this._runningScene) throw "_runningScene should be null";
        this.pushScene(e),
        this.startAnimation()
    },
    setAlphaBlending: function(e) {
        e ? cc.glBlendFunc(cc.BLEND_SRC, cc.BLEND_DST) : cc.glBlendFunc(cc.renderContext.ONE, cc.renderContext.ZERO)
    },
    setContentScaleFactor: function(e) {
        e != this._contentScaleFactor && (this._contentScaleFactor = e, this._createStatsLabel())
    },
    setDepthTest: function(e) {
        if (cc.renderContextType !== cc.CANVAS) {
            var t = cc.renderContext;
            e ? (t.clearDepth(1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL)) : t.disable(t.DEPTH_TEST)
        }
    },
    setDefaultValues: function() {},
    setGLDefaultValues: function() {
        this.setAlphaBlending(!0),
        this.setDepthTest(!1),
        this.setProjection(this._projection),
        cc.renderContext.clearColor(0, 0, 0, 1)
    },
    setNextDeltaTimeZero: function(e) {
        this._nextDeltaTimeZero = e
    },
    setNextScene: function() {
        var e = !1,
        t = !1;
        cc.TransitionScene && (e = this._runningScene ? this._runningScene instanceof cc.TransitionScene: !1, t = this._nextScene ? this._nextScene instanceof cc.TransitionScene: !1);
        if (!t) {
            if (t = this._runningScene) t.onExitTransitionDidStart(),
            t.onExit();
            this._sendCleanupToScene && t && t.cleanup()
        }
        this._runningScene = this._nextScene,
        this._nextScene = null,
        e || null == this._runningScene || (this._runningScene.onEnter(), this._runningScene.onEnterTransitionDidFinish())
    },
    setNotificationNode: function(e) {
        this._notificationNode = e
    },
    getDelegate: function() {
        return this._projectionDelegate
    },
    setDelegate: function(e) {
        this._projectionDelegate = e
    },
    setOpenGLView: function(e) {
        this._winSizeInPoints.setWidth(cc.canvas.width),
        this._winSizeInPoints.setHeight(cc.canvas.height),
        this._openGLView = e || cc.EGLView.getInstance(),
        cc.renderContextType !== cc.CANVAS && (e = cc.Configuration.getInstance(), e.gatherGPUInfo(), e.dumpInfo(), this._createStatsLabel(), this.setGLDefaultValues(), this._touchDispatcher && this._touchDispatcher.setDispatchEvents(!0))
    },
    setViewport: function() {
        if (this._openGLView) {
            var e = this._winSizeInPoints;
            this._openGLView.setViewPortInPoints(0, 0, e.width, e.height)
        }
    },
    setProjection: function(e) {
        var t = this._winSizeInPoints;
        if (cc.renderContextType === cc.WEBGL) {
            this.setViewport();
            switch (e) {
            case cc.DIRECTOR_PROJECTION_2D:
                cc.kmGLMatrixMode(cc.KM_GL_PROJECTION),
                cc.kmGLLoadIdentity();
                var n = new cc.kmMat4;
                cc.kmMat4OrthographicProjection(n, 0, t.width, 0, t.height, -1024, 1024),
                cc.kmGLMultMatrix(n),
                cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW),
                cc.kmGLLoadIdentity();
                break;
            case cc.DIRECTOR_PROJECTION_3D:
                var r = this.getZEye(),
                i = new cc.kmMat4,
                n = new cc.kmMat4;
                cc.kmGLMatrixMode(cc.KM_GL_PROJECTION),
                cc.kmGLLoadIdentity(),
                cc.kmMat4PerspectiveProjection(i, 60, t.width / t.height, .1, 2 * r),
                cc.kmGLMultMatrix(i),
                cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW),
                cc.kmGLLoadIdentity(),
                r = cc.kmVec3Fill(null, t.width / 2, t.height / 2, r),
                t = cc.kmVec3Fill(null, t.width / 2, t.height / 2, 0),
                i = cc.kmVec3Fill(null, 0, 1, 0),
                cc.kmMat4LookAt(n, r, t, i),
                cc.kmGLMultMatrix(n);
                break;
            case cc.DIRECTOR_PROJECTION_CUSTOM:
                this._projectionDelegate && this._projectionDelegate.updateProjection();
                break;
            default:
                cc.log("cocos2d: Director: unrecognized projection")
            }
            this._projection = e,
            cc.setProjectionMatrixDirty()
        } else this._projection = e
    },
    _showStats: function() {
        this._frames++,
        this._accumDt += this._deltaTime,
        this._FPSLabel && this._SPFLabel && this._drawsLabel ? (this._accumDt > cc.DIRECTOR_FPS_INTERVAL && (this._SPFLabel.setString(this._secondsPerFrame.toFixed(3)), this._frameRate = this._frames / this._accumDt, this._accumDt = this._frames = 0, this._FPSLabel.setString(this._frameRate.toFixed(1)), this._drawsLabel.setString((0 | cc.g_NumberOfDraws).toString())), this._FPSLabel.visit(), this._SPFLabel.visit(), this._drawsLabel.visit()) : this._createStatsLabel(),
        cc.g_NumberOfDraws = 0
    },
    isSendCleanupToScene: function() {
        return this._sendCleanupToScene
    },
    getRunningScene: function() {
        return this._runningScene
    },
    getAnimationInterval: function() {
        return this._animationInterval
    },
    isDisplayStats: function() {
        return this._displayStats
    },
    setDisplayStats: function(e) {
        this._displayStats = e
    },
    getSecondsPerFrame: function() {
        return this._secondsPerFrame
    },
    getOpenGLView: function() {
        return this._openGLView
    },
    isNextDeltaTimeZero: function() {
        return this._nextDeltaTimeZero
    },
    isPaused: function() {
        return this._paused
    },
    getTotalFrames: function() {
        return this._totalFrames
    },
    getProjection: function() {
        return this._projection
    },
    popToRootScene: function() {
        this.popToSceneStackLevel(1)
    },
    popToSceneStackLevel: function(e) {
        if (!this._runningScene) throw "A running Scene is needed";
        var t = this._scenesStack,
        n = t.length;
        if (0 == n) this.end();
        else if (! (e > n)) {
            for (; n > e;) {
                var r = t.pop();
                r.isRunning() && (r.onExitTransitionDidStart(), r.onExit()),
                r.cleanup(),
                n--
            }
            this._nextScene = t[t.length - 1],
            this._sendCleanupToScene = !1
        }
    },
    getScheduler: function() {
        return this._scheduler
    },
    setScheduler: function(e) {
        this._scheduler != e && (this._scheduler = e)
    },
    getActionManager: function() {
        return this._actionManager
    },
    setActionManager: function(e) {
        this._actionManager != e && (this._actionManager = e)
    },
    getTouchDispatcher: function() {
        return this._touchDispatcher
    },
    setTouchDispatcher: function(e) {
        this._touchDispatcher != e && (this._touchDispatcher = e)
    },
    getKeyboardDispatcher: function() {
        if (!cc.KeyboardDispatcher) throw "cc.KeyboardDispatcher is undefined, maybe it has been removed from js loading list.";
        return this._keyboardDispatcher
    },
    setKeyboardDispatcher: function(e) {
        if (!cc.KeyboardDispatcher) throw "cc.KeyboardDispatcher is undefined, maybe it has been removed from js loading list.";
        this._keyboardDispatcher = e
    },
    getAccelerometer: function() {
        if (!cc.Accelerometer) throw "cc.Accelerometer is undefined, maybe it has been removed from js loading list.";
        return this._accelerometer
    },
    setAccelerometer: function(e) {
        if (!cc.Accelerometer) throw "cc.Accelerometer is undefined, maybe it has been removed from js loading list.";
        this._accelerometer != e && (this._accelerometer = e)
    },
    getDeltaTime: function() {
        return this._deltaTime
    },
    getMouseDispatcher: function() {
        if (!cc.MouseDispatcher) throw "cc.MouseDispatcher is undefined, maybe it has been removed from js loading list.";
        return this._mouseDispatcher
    },
    setMouseDispatcher: function(e) {
        if (!cc.MouseDispatcher) throw "cc.MouseDispatcher is undefined, maybe it has been removed from js loading list.";
        this._mouseDispatcher != e && (this._mouseDispatcher = e)
    },
    _createStatsLabel: null,
    _createStatsLabelForWebGL: function() {
        if (!cc.LabelAtlas) return this._createStatsLabelForCanvas();
        if (null != cc.Director._fpsImageLoaded && 0 != cc.Director._fpsImageLoaded) {
            var e = new cc.Texture2D;
            e.initWithElement(cc.Director._fpsImage),
            e.handleLoadedTexture();
            var t = cc.EGLView.getInstance().getDesignResolutionSize().height / 320;
            0 === t && (t = this._winSizeInPoints.height / 320);
            var n = new cc.LabelAtlas;
            n._setIgnoreContentScaleFactor(!0),
            n.initWithString("00.0", e, 12, 32, "."),
            n.setScale(t),
            this._FPSLabel = n,
            n = new cc.LabelAtlas,
            n._setIgnoreContentScaleFactor(!0),
            n.initWithString("0.000", e, 12, 32, "."),
            n.setScale(t),
            this._SPFLabel = n,
            n = new cc.LabelAtlas,
            n._setIgnoreContentScaleFactor(!0),
            n.initWithString("000", e, 12, 32, "."),
            n.setScale(t),
            this._drawsLabel = n,
            e = cc.DIRECTOR_STATS_POSITION,
            this._drawsLabel.setPosition(cc.pAdd(cc.p(0, 34 * t), e)),
            this._SPFLabel.setPosition(cc.pAdd(cc.p(0, 17 * t), e)),
            this._FPSLabel.setPosition(e)
        }
    },
    _createStatsLabelForCanvas: function() {
        var e = 0,
        e = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | this._winSizeInPoints.height / 320 * 24 : 0 | this._winSizeInPoints.width / 320 * 24;
        this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", e),
        this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", e),
        this._drawsLabel = cc.LabelTTF.create("0000", "Arial", e);
        var e = cc.DIRECTOR_STATS_POSITION,
        t = this._drawsLabel.getContentSize();
        this._drawsLabel.setPosition(cc.pAdd(cc.p(t.width / 2, 5 * t.height / 2), e)),
        t = this._SPFLabel.getContentSize(),
        this._SPFLabel.setPosition(cc.pAdd(cc.p(t.width / 2, 3 * t.height / 2), e)),
        t = this._FPSLabel.getContentSize(),
        this._FPSLabel.setPosition(cc.pAdd(cc.p(t.width / 2, t.height / 2), e))
    },
    _calculateMPF: function() {
        this._secondsPerFrame = (Date.now() - this._lastUpdate) / 1e3
    }
}),
cc.Browser.supportWebGL ? (cc.Director.prototype._clear = cc.Director.prototype._clearWebGL, cc.Director.prototype._beforeVisitScene = cc.Director.prototype._beforeVisitSceneWebGL, cc.Director.prototype._afterVisitScene = cc.Director.prototype._afterVisitSceneWebGL, cc.Director.prototype._createStatsLabel = cc.Director.prototype._createStatsLabelForWebGL) : (cc.Director.prototype._clear = cc.Director.prototype._clearCanvas, cc.Director.prototype._createStatsLabel = cc.Director.prototype._createStatsLabelForCanvas),
cc.DisplayLinkDirector = cc.Director.extend({
    invalid: !1,
    startAnimation: function() {
        this._nextDeltaTimeZero = !0,
        this.invalid = !1,
        cc.Application.getInstance().setAnimationInterval(this._animationInterval)
    },
    mainLoop: function() {
        this._purgeDirecotorInNextLoop ? (this._purgeDirecotorInNextLoop = !1, this.purgeDirector()) : this.invalid || this.drawScene()
    },
    stopAnimation: function() {
        this.invalid = !0
    },
    setAnimationInterval: function(e) {
        this._animationInterval = e,
        this.invalid || (this.stopAnimation(), this.startAnimation())
    }
}),
cc.s_SharedDirector = null,
cc.firstUseDirector = !0,
cc.Director.getInstance = function() {
    return cc.firstUseDirector && (cc.firstUseDirector = !1, cc.s_SharedDirector = new cc.DisplayLinkDirector, cc.s_SharedDirector.init(), cc.s_SharedDirector.setOpenGLView(cc.EGLView.getInstance())),
    cc.s_SharedDirector
},
Object.defineProperties(cc, {
    windowSize: {
        get: function() {
            return cc.director.getWinSize()
        },
        enumerable: !0
    }
}),
cc.firstRun = !0,
cc.defaultFPS = 60,
cc.Director._fpsImage = new Image,
cc.Director._fpsImage.addEventListener("load",
function() {
    cc.Director._fpsImageLoaded = !0,
    this.removeEventListener("load", arguments.callee, !1)
}),
cc.Director._fpsImage.src = "",
cc.Camera = cc.Class.extend({
    _eyeX: null,
    _eyeY: null,
    _eyeZ: null,
    _centerX: null,
    _centerY: null,
    _centerZ: null,
    _upX: null,
    _upY: null,
    _upZ: null,
    _dirty: null,
    _lookupMatrix: null,
    ctor: function() {
        this._lookupMatrix = new cc.kmMat4,
        this.restore()
    },
    description: function() {
        return "<CCCamera | center =(" + this._centerX + "," + this._centerY + "," + this._centerZ + ")>"
    },
    setDirty: function(e) {
        this._dirty = e
    },
    isDirty: function() {
        return this._dirty
    },
    restore: function() {
        this._eyeX = this._eyeY = 0,
        this._eyeZ = cc.Camera.getZEye(),
        this._upX = this._centerX = this._centerY = this._centerZ = 0,
        this._upY = 1,
        this._upZ = 0,
        cc.kmMat4Identity(this._lookupMatrix),
        this._dirty = !1
    },
    locate: function() {
        if (this._dirty) {
            var e = new cc.kmVec3,
            t = new cc.kmVec3,
            n = new cc.kmVec3;
            cc.kmVec3Fill(e, this._eyeX, this._eyeY, this._eyeZ),
            cc.kmVec3Fill(t, this._centerX, this._centerY, this._centerZ),
            cc.kmVec3Fill(n, this._upX, this._upY, this._upZ),
            cc.kmMat4LookAt(this._lookupMatrix, e, t, n),
            this._dirty = !1
        }
        cc.kmGLMultMatrix(this._lookupMatrix)
    },
    setEyeXYZ: function(e, t, n) {
        this.setEye(e, t, n)
    },
    setEye: function(e, t, n) {
        this._eyeX = e,
        this._eyeY = t,
        this._eyeZ = n,
        this._dirty = !0
    },
    setCenterXYZ: function(e, t, n) {
        this.setCenter(e, t, n)
    },
    setCenter: function(e, t, n) {
        this._centerX = e,
        this._centerY = t,
        this._centerZ = n,
        this._dirty = !0
    },
    setUpXYZ: function(e, t, n) {
        this.setUp(e, t, n)
    },
    setUp: function(e, t, n) {
        this._upX = e,
        this._upY = t,
        this._upZ = n,
        this._dirty = !0
    },
    getEyeXYZ: function(e, t, n) {
        return {
            x: this._eyeX,
            y: this._eyeY,
            z: this._eyeZ
        }
    },
    getEye: function() {
        return {
            x: this._eyeX,
            y: this._eyeY,
            z: this._eyeZ
        }
    },
    getCenterXYZ: function(e, t, n) {
        return {
            x: this._centerX,
            y: this._centerY,
            z: this._centerZ
        }
    },
    getCenter: function() {
        return {
            x: this._centerX,
            y: this._centerY,
            z: this._centerZ
        }
    },
    getUpXYZ: function(e, t, n) {
        return {
            x: this._upX,
            y: this._upY,
            z: this._upZ
        }
    },
    getUp: function() {
        return {
            x: this._upX,
            y: this._upY,
            z: this._upZ
        }
    },
    _DISALLOW_COPY_AND_ASSIGN: function(e) {}
}),
cc.Camera.getZEye = function() {
    return cc.FLT_EPSILON
},
cc.PRIORITY_SYSTEM = -2147483648,
cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1,
cc.ArrayVerifyType = function(e, t) {
    if (e && 0 < e.length) for (var n = 0; n < e.length; n++) if (! (e[n] instanceof t)) return cc.log("element type is wrong!"),
    !1;
    return ! 0
},
cc.ArrayRemoveObjectAtIndex = function(e, t) {
    e.splice(t, 1)
},
cc.ArrayRemoveObject = function(e, t) {
    for (var n = 0,
    r = e.length; n < r; n++) if (e[n] == t) {
        e.splice(n, 1);
        break
    }
},
cc.ArrayRemoveArray = function(e, t) {
    for (var n = 0,
    r = t.length; n < r; n++) cc.ArrayRemoveObject(e, t[n])
},
cc.ArrayGetIndexOfValue = function(e, t) {
    return e.indexOf(t)
},
cc.ArrayAppendObject = function(e, t) {
    e.push(t)
},
cc.ArrayAppendObjectToIndex = function(e, t, n) {
    return e.splice(n, 0, t),
    e
},
cc.ArrayAppendObjectsToIndex = function(e, t, n) {
    return e.splice.apply(e, [n, 0].concat(t)),
    e
},
cc.ArrayGetIndexOfObject = function(e, t) {
    for (var n = 0,
    r = e.length; n < r; n++) if (e[n] == t) return n;
    return - 1
},
cc.ArrayContainsObject = function(e, t) {
    return - 1 != e.indexOf(t)
},
cc.HASH_FIND_INT = function(e, t) {
    if (null == e) return null;
    for (var n = 0; n < e.length; n++) if (e[n].target === t) return e[n];
    return null
},
cc.ListEntry = function(e, t, n, r, i, s) {
    this.prev = e,
    this.next = t,
    this.target = n,
    this.priority = r,
    this.paused = i,
    this.markedForDeletion = s
},
cc.HashUpdateEntry = function(e, t, n, r) {
    this.list = e,
    this.entry = t,
    this.target = n,
    this.hh = r
},
cc.HashTimerEntry = function(e, t, n, r, i, s, o) {
    this.timers = e,
    this.target = t,
    this.timerIndex = n,
    this.currentTimer = r,
    this.currentTimerSalvaged = i,
    this.paused = s,
    this.hh = o
},
cc.Timer = cc.Class.extend({
    _interval: 0,
    _selector: null,
    _target: null,
    _elapsed: 0,
    _runForever: !1,
    _useDelay: !1,
    _timesExecuted: 0,
    _repeat: 0,
    _delay: 0,
    ctor: function() {},
    getInterval: function() {
        return this._interval
    },
    setInterval: function(e) {},
    getSelector: function() {
        return this._selector
    },
    initWithTarget: function(e, t, n, r, i) {
        return this._target = e,
        this._selector = t,
        this._elapsed = -1,
        this._interval = n || 0,
        this._delay = i || 0,
        this._useDelay = 0 < this._delay,
        this._repeat = null == r ? cc.REPEAT_FOREVER: r,
        this._runForever = this._repeat == cc.REPEAT_FOREVER,
        !0
    },
    _callSelector: function() {
        "string" == typeof this._selector ? this._target[this._selector](this._elapsed) : this._selector.call(this._target, this._elapsed)
    },
    update: function(e) {
        if ( - 1 == this._elapsed) this._timesExecuted = this._elapsed = 0;
        else {
            var t = this._target,
            n = this._selector;
            this._runForever && !this._useDelay ? (this._elapsed += e, this._elapsed >= this._interval && (t && n && this._callSelector(), this._elapsed = 0)) : (this._elapsed += e, this._useDelay ? this._elapsed >= this._delay && (t && n && this._callSelector(), this._elapsed -= this._delay, this._timesExecuted += 1, this._useDelay = !1) : this._elapsed >= this._interval && (t && n && this._callSelector(), this._elapsed = 0, this._timesExecuted += 1), this._timesExecuted > this._repeat && cc.Director.getInstance().getScheduler().unscheduleCallbackForTarget(t, n))
        }
    }
}),
cc.Timer.timerWithTarget = function(e, t, n) {
    if (2 > arguments.length) throw Error("timerWithTarget'argument can't is null");
    var r = new cc.Timer;
    return r.initWithTarget(e, t, n || 0, cc.REPEAT_FOREVER, 0),
    r
},
cc._sharedScheduler = null,
cc.Scheduler = cc.Class.extend({
    _timeScale: 1,
    _updatesNegList: null,
    _updates0List: null,
    _updatesPosList: null,
    _hashForUpdates: null,
    _arrayForUpdates: null,
    _hashForTimers: null,
    _arrayForTimes: null,
    _currentTarget: null,
    _currentTargetSalvaged: !1,
    _updateHashLocked: !1,
    ctor: function() {
        this._timeScale = 1,
        this._updatesNegList = [],
        this._updates0List = [],
        this._updatesPosList = [],
        this._hashForUpdates = {},
        this._arrayForUpdates = [],
        this._hashForTimers = {},
        this._arrayForTimers = [],
        this._currentTarget = null,
        this._updateHashLocked = this._currentTargetSalvaged = !1
    },
    _removeHashElement: function(e) {
        delete this._hashForTimers[e.target.__instanceId],
        cc.ArrayRemoveObject(this._arrayForTimers, e),
        e.Timer = null,
        e.target = null
    },
    _findElementFromArray: function(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].target == t) return e[n];
        return null
    },
    _removeUpdateFromHash: function(e) {
        if (e = this._hashForUpdates[e.target.__instanceId]) cc.ArrayRemoveObject(e.list, e.entry),
        delete this._hashForUpdates[e.target.__instanceId],
        cc.ArrayRemoveObject(this._arrayForUpdates, e),
        e.entry = null,
        e.target = null
    },
    _priorityIn: function(e, t, n, r) {
        r = new cc.ListEntry(null, null, t, n, r, !1);
        if (e) {
            for (var i = !1,
            s = 0; s < e.length; s++) if (n < e[s].priority) {
                e = cc.ArrayAppendObjectToIndex(e, r, s),
                i = !0;
                break
            }
            i || e.push(r)
        } else e = [],
        e.push(r);
        return n = new cc.HashUpdateEntry(e, r, t, null),
        this._arrayForUpdates.push(n),
        this._hashForUpdates[t.__instanceId] = n,
        e
    },
    _appendIn: function(e, t, n) {
        n = new cc.ListEntry(null, null, t, 0, n, !1),
        e.push(n),
        e = new cc.HashUpdateEntry(e, n, t, null),
        this._arrayForUpdates.push(e),
        this._hashForUpdates[t.__instanceId] = e
    },
    setTimeScale: function(e) {
        this._timeScale = e
    },
    getTimeScale: function() {
        return this._timeScale
    },
    update: function(e) {
        this._updateHashLocked = !0,
        1 != this._timeScale && (e *= this._timeScale);
        var t, n;
        for (n = 0; n < this._updatesNegList.length; n++) t = this._updatesNegList[n],
        t.paused || t.markedForDeletion || t.target.update(e);
        for (n = 0; n < this._updates0List.length; n++) t = this._updates0List[n],
        t.paused || t.markedForDeletion || t.target.update(e);
        for (n = 0; n < this._updatesPosList.length; n++) t = this._updatesPosList[n],
        t.paused || t.markedForDeletion || t.target.update(e);
        for (n = 0; n < this._arrayForTimers.length; n++) {
            t = this._currentTarget = this._arrayForTimers[n],
            this._currentTargetSalvaged = !1;
            if (!this._currentTarget.paused) for (t.timerIndex = 0; t.timerIndex < t.timers.length; t.timerIndex++) t.currentTimer = t.timers[t.timerIndex],
            t.currentTimerSalvaged = !1,
            t.currentTimer.update(e),
            t.currentTimer = null;
            this._currentTargetSalvaged && 0 == this._currentTarget.timers.length && this._removeHashElement(this._currentTarget)
        }
        for (n = 0; n < this._updatesNegList.length; n++) this._updatesNegList[n].markedForDeletion && this._removeUpdateFromHash(this._updatesNegList[n]);
        for (n = 0; n < this._updates0List.length; n++) this._updates0List[n].markedForDeletion && this._removeUpdateFromHash(this._updates0List[n]);
        for (n = 0; n < this._updatesPosList.length; n++) this._updatesPosList[n].markedForDeletion && this._removeUpdateFromHash(this._updatesPosList[n]);
        this._updateHashLocked = !1,
        this._currentTarget = null
    },
    scheduleCallbackForTarget: function(e, t, n, r, i, s) {
        if (!t) throw "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.";
        if (!e) throw "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.";
        n = n || 0,
        r = null == r ? cc.REPEAT_FOREVER: r,
        i = i || 0,
        s = s || !1;
        var o = this._hashForTimers[e.__instanceId];
        o || (o = new cc.HashTimerEntry(null, e, 0, null, null, s, null), this._arrayForTimers.push(o), this._hashForTimers[e.__instanceId] = o);
        if (null == o.timers) o.timers = [];
        else for (var u = 0; u < o.timers.length; u++) if (s = o.timers[u], t == s._selector) {
            cc.log("CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:" + s.getInterval().toFixed(4) + " to " + n.toFixed(4)),
            s._interval = n;
            return
        }
        s = new cc.Timer,
        s.initWithTarget(e, t, n, r, i),
        o.timers.push(s)
    },
    scheduleUpdateForTarget: function(e, t, n) {
        var r = this._hashForUpdates[e.__instanceId];
        r ? r.entry.markedForDeletion = !1 : 0 == t ? this._appendIn(this._updates0List, e, n) : 0 > t ? this._updatesNegList = this._priorityIn(this._updatesNegList, e, t, n) : this._updatesPosList = this._priorityIn(this._updatesPosList, e, t, n)
    },
    unscheduleCallbackForTarget: function(e, t) {
        if (null != e && null != t) {
            var n = this._hashForTimers[e.__instanceId];
            if (null != n) for (var r = 0; r < n.timers.length; r++) {
                var i = n.timers[r];
                if (t == i._selector) {
                    i != n.currentTimer || n.currentTimerSalvaged || (n.currentTimerSalvaged = !0),
                    cc.ArrayRemoveObjectAtIndex(n.timers, r),
                    n.timerIndex >= r && n.timerIndex--,
                    0 == n.timers.length && (this._currentTarget == n ? this._currentTargetSalvaged = !0 : this._removeHashElement(n));
                    break
                }
            }
        }
    },
    unscheduleUpdateForTarget: function(e) {
        null != e && (e = this._hashForUpdates[e.__instanceId], null != e && (this._updateHashLocked ? e.entry.markedForDeletion = !0 : this._removeUpdateFromHash(e.entry)))
    },
    unscheduleAllCallbacksForTarget: function(e) {
        if (null != e) {
            var t = this._hashForTimers[e.__instanceId];
            t && (!t.currentTimerSalvaged && cc.ArrayContainsObject(t.timers, t.currentTimer) && (t.currentTimerSalvaged = !0), t.timers.length = 0, this._currentTarget == t ? this._currentTargetSalvaged = !0 : this._removeHashElement(t)),
            this.unscheduleUpdateForTarget(e)
        }
    },
    unscheduleAllCallbacks: function() {
        this.unscheduleAllCallbacksWithMinPriority(cc.PRIORITY_SYSTEM)
    },
    unscheduleAllCallbacksWithMinPriority: function(e) {
        var t;
        for (t = 0; t < this._arrayForTimers.length; t++) this.unscheduleAllCallbacksForTarget(this._arrayForTimers[t].target);
        if (0 > e) for (t = 0; t < this._updatesNegList.length; t++) this.unscheduleUpdateForTarget(this._updatesNegList[t].target);
        if (0 >= e) for (t = 0; t < this._updates0List.length; t++) this.unscheduleUpdateForTarget(this._updates0List[t].target);
        for (t = 0; t < this._updatesPosList.length; t++) this._updatesPosList[t].priority >= e && this.unscheduleUpdateForTarget(this._updatesPosList[t].target)
    },
    pauseAllTargets: function() {
        return this.pauseAllTargetsWithMinPriority(cc.PRIORITY_SYSTEM)
    },
    pauseAllTargetsWithMinPriority: function(e) {
        var t = [],
        n,
        r;
        for (n = 0; n < this._arrayForTimers.length; n++) if (r = this._arrayForTimers[n]) r.paused = !0,
        t.push(r.target);
        if (0 > e) for (n = 0; n < this._updatesNegList.length; n++) if (r = this._updatesNegList[n]) r.paused = !0,
        t.push(r.target);
        if (0 >= e) for (n = 0; n < this._updates0List.length; n++) if (r = this._updates0List[n]) r.paused = !0,
        t.push(r.target);
        for (n = 0; n < this._updatesPosList.length; n++) if (r = this._updatesPosList[n]) r.paused = !0,
        t.push(r.target);
        return t
    },
    resumeTargets: function(e) {
        if (e) for (var t = 0; t < e.length; t++) this.resumeTarget(e[t])
    },
    pauseTarget: function(e) {
        if (!e) throw "cc.Scheduler.pauseTarget():target should be non-null";
        var t = this._hashForTimers[e.__instanceId];
        t && (t.paused = !0);
        if (e = this._hashForUpdates[e.__instanceId]) e.entry.paused = !0
    },
    resumeTarget: function(e) {
        if (!e) throw "cc.Scheduler.resumeTarget():target should be non-null";
        var t = this._hashForTimers[e.__instanceId];
        t && (t.paused = !1);
        if (e = this._hashForUpdates[e.__instanceId]) e.entry.paused = !1
    },
    isTargetPaused: function(e) {
        if (!e) throw "cc.Scheduler.isTargetPaused():target should be non-null";
        return (e = this._hashForTimers[e.__instanceId]) ? e.paused: !1
    }
}),
cc.RESOURCE_TYPE = {
    IMAGE: ["png", "jpg", "bmp", "jpeg", "gif"],
    SOUND: ["mp3", "ogg", "wav", "mp4", "m4a"],
    XML: ["plist", "xml", "fnt", "tmx", "tsx"],
    BINARY: ["ccbi"],
    FONT: "FONT",
    TEXT: ["txt", "vsh", "fsh", "json", "ExportJson"],
    UNKNOW: []
},
cc.Loader = cc.Class.extend({
    _curNumber: 0,
    _totalNumber: 0,
    _loadedNumber: 0,
    _resouces: null,
    _animationInterval: 1 / 60,
    _interval: null,
    _isAsync: !1,
    ctor: function() {
        this._resouces = []
    },
    initWithResources: function(e, t, n) {
        if (e) {
            t && (this._selector = t, this._target = n);
            if (e != this._resouces || 0 == this._curNumber) {
                this._loadedNumber = this._curNumber = 0;
                if (e[0] instanceof Array) for (t = 0; t < e.length; t++) this._resouces = this._resouces.concat(e[t]);
                else this._resouces = e;
                this._totalNumber = this._resouces.length
            }
            this._schedulePreload()
        } else console.log("resources should not null")
    },
    setAsync: function(e) {
        this._isAsync = e
    },
    onResLoadingErr: function(e) {
        this._loadedNumber++,
        cc.log("cocos2d:Failed loading resource: " + e)
    },
    onResLoaded: function() {
        this._loadedNumber++
    },
    getPercentage: function() {
        var e = 0;
        return e = 0 == this._totalNumber ? 100 : 0 | this._loadedNumber / this._totalNumber * 100
    },
    releaseResources: function(e) {
        if (e && 0 < e.length) for (var t = cc.TextureCache.getInstance(), n = cc.AudioEngine ? cc.AudioEngine.getInstance() : null, r = cc.SAXParser.getInstance(), i = cc.FileUtils.getInstance(), s, o = 0; o < e.length; o++) {
            s = e[o];
            var u = this._getResType(s);
            switch (u) {
            case "IMAGE":
                t.removeTextureForKey(s.src);
                break;
            case "SOUND":
                if (!n) throw "Can not find AudioEngine! Install it, please.";
                n.unloadEffect(s.src);
                break;
            case "XML":
                r.unloadPlist(s.src);
                break;
            case "BINARY":
                i.unloadBinaryFileData(s.src);
                break;
            case "TEXT":
                i.unloadTextFileData(s.src);
                break;
            case "FONT":
                this._unregisterFaceFont(s);
                break;
            default:
                throw "cocos2d:unknown filename extension: " + u
            }
        }
    },
    _preload: function() {
        this._updatePercent();
        if (this._isAsync) {
            var e = cc.Director.getInstance()._frameRate;
            if (null != e && 20 > e) {
                cc.log("cocos2d: frame rate less than 20 fps, skip frame.");
                return
            }
        }
        this._curNumber < this._totalNumber && (this._loadOneResource(), this._curNumber++)
    },
    _loadOneResource: function() {
        var e = cc.TextureCache.getInstance(),
        t = cc.AudioEngine ? cc.AudioEngine.getInstance() : null,
        n = cc.SAXParser.getInstance(),
        r = cc.FileUtils.getInstance(),
        i = this._resouces[this._curNumber],
        s = this._getResType(i);
        switch (s) {
        case "IMAGE":
            e.addImage(i.src);
            break;
        case "SOUND":
            if (!t) throw "Can not find AudioEngine! Install it, please.";
            t.preloadSound(i.src);
            break;
        case "XML":
            n.preloadPlist(i.src);
            break;
        case "BINARY":
            r.preloadBinaryFileData(i.src);
            break;
        case "TEXT":
            r.preloadTextFileData(i.src);
            break;
        case "FONT":
            this._registerFaceFont(i);
            break;
        default:
            throw "cocos2d:unknown filename extension: " + s
        }
    },
    _schedulePreload: function() {
        var e = this;
        this._interval = setInterval(function() {
            e._preload()
        },
        1e3 * this._animationInterval)
    },
    _unschedulePreload: function() {
        clearInterval(this._interval)
    },
    _getResType: function(e) {
        if (null != e.fontName) return cc.RESOURCE_TYPE.FONT;
        e = e.src,
        e = e.substring(e.lastIndexOf(".") + 1, e.length);
        var t = e.indexOf("?");
        0 < t && (e = e.substring(0, t));
        for (var n in cc.RESOURCE_TYPE) if ( - 1 != cc.RESOURCE_TYPE[n].indexOf(e)) return n;
        return e
    },
    _updatePercent: function() {
        100 <= this.getPercentage() && (this._unschedulePreload(), this._complete())
    },
    _complete: function() {
        this._target && "string" == typeof this._selector ? this._target[this._selector](this) : this._target && "function" == typeof this._selector ? this._selector.call(this._target, this) : this._selector(this),
        this._totalNumber = this._loadedNumber = this._curNumber = 0
    },
    _registerFaceFont: function(e) {
        var t = e.src,
        n = cc.FileUtils.getInstance();
        if (t && 0 < t.length) {
            var r = document.createElement("style");
            r.type = "text/css",
            document.body.appendChild(r);
            for (var i = "@font-face { font-family:" + e.fontName + "; src:",
            s = 0; s < t.length; s++) i += "url('" + n.fullPathForFilename(encodeURI(t[s].src)) + "') format('" + t[s].type + "')",
            i += s == t.length - 1 ? ";": ",";
            r.textContent += i + "};",
            t = document.createElement("div"),
            t.style.fontFamily = e.fontName,
            t.innerHTML = ".",
            t.style.position = "absolute",
            t.style.left = "-100px",
            t.style.top = "-100px",
            document.body.appendChild(t)
        }
        cc.Loader.getInstance().onResLoaded()
    },
    _unregisterFaceFont: function(e) {}
}),
cc.Loader.preload = function(e, t, n) {
    return this._instance || (this._instance = new cc.Loader),
    this._instance.initWithResources(e, t, n),
    this._instance
},
cc.Loader.preloadAsync = function(e, t, n) {
    return this._instance || (this._instance = new cc.Loader),
    this._instance.setAsync(!0),
    this._instance.initWithResources(e, t, n),
    this._instance
},
cc.Loader.purgeCachedData = function(e) {
    this._instance && this._instance.releaseResources(e)
},
cc.Loader.getInstance = function() {
    return this._instance || (this._instance = new cc.Loader),
    this._instance
},
cc.Loader._instance = null,
cc.LoaderScene = cc.Scene.extend({
    _logo: null,
    _logoTexture: null,
    _texture2d: null,
    _bgLayer: null,
    _label: null,
    _winSize: null,
    ctor: function() {
        cc.Scene.prototype.ctor.call(this),
        this._winSize = cc.Director.getInstance().getWinSize()
    },
    init: function() {
        cc.Scene.prototype.init.call(this);
        var e = cc.p(this._winSize.width / 2, this._winSize.height / 2);
        this._logoTexture = new Image;
        var t = this;
        this._logoTexture.addEventListener("load",
        function() {
            t._initStage(e),
            this.removeEventListener("load", arguments.callee, !1)
        }),
        this._logoTexture.src = "",
        this._bgLayer = cc.LayerColor.create(cc.c4(32, 32, 32, 255)),
        this._bgLayer.setPosition(0, 0),
        this.addChild(this._bgLayer, 0),
        this._label = cc.LabelTTF.create("Loading... 0%", "Arial", 14),
        this._label.setColor(cc.c3(180, 180, 180)),
        this._label.setPosition(cc.pAdd(e, cc.p(0, -110))),
        this._bgLayer.addChild(this._label, 10)
    },
    _initStage: function(e) {
        this._texture2d = new cc.Texture2D,
        this._texture2d.initWithElement(this._logoTexture),
        this._texture2d.handleLoadedTexture(),
        this._logo = cc.Sprite.createWithTexture(this._texture2d),
        this._logo.setScale(cc.CONTENT_SCALE_FACTOR()),
        this._logo.setPosition(e),
        this._bgLayer.addChild(this._logo, 10)
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this),
        this.schedule(this._startLoading, .3)
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this),
        this._label.setString("Loading... 0%")
    },
    initWithResources: function(e, t, n) {
        this.resources = e,
        this.selector = t,
        this.target = n
    },
    _startLoading: function() {
        this.unschedule(this._startLoading),
        cc.Loader.preload(this.resources, this.selector, this.target),
        this.schedule(this._updatePercent)
    },
    _updatePercent: function() {
        var e = cc.Loader.getInstance().getPercentage();
        this._label.setString("Loading... " + e + "%"),
        100 <= e && this.unschedule(this._updatePercent)
    }
}),
cc.LoaderScene.preload = function(e, t, n) {
    return this._instance || (this._instance = new cc.LoaderScene, this._instance.init()),
    this._instance.initWithResources(e, t, n),
    e = cc.Director.getInstance(),
    e.getRunningScene() ? e.replaceScene(this._instance) : e.runWithScene(this._instance),
    this._instance
},
cc.TARGET_PLATFORM = {
    WINDOWS: 0,
    LINUX: 1,
    MACOS: 2,
    ANDROID: 3,
    IPHONE: 4,
    IPAD: 5,
    BLACKBERRY: 6,
    NACL: 7,
    EMSCRIPTEN: 8,
    MOBILE_BROWSER: 100,
    PC_BROWSER: 101
},
cc.ORIENTATION_PORTRAIT = 0,
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1,
cc.ORIENTATION_LANDSCAPE_LEFT = 2,
cc.ORIENTATION_LANDSCAPE_RIGHT = 3,
cc.CANVAS = 0,
cc.WEBGL = 1,
cc.drawingUtil = null,
cc.renderContext = null,
cc.canvas = null,
cc.gameDiv = null,
cc.renderContextType = cc.CANVAS,
cc.originalCanvasSize = cc.size(0, 0),
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame
} (),
window.console || (window.console = {},
window.console.log = function() {},
window.console.assert = function() {}),
cc.isAddedHiddenEvent = !1,
cc.setup = function(e, t, n) {
    function r() {
        if (cc.AudioEngine) {
            var e = cc.AudioEngine.getInstance();
            document[u] ? (e.pauseAllEffects(), e.pauseMusic()) : (cc.Director.getInstance()._resetLastUpdate(), e.resumeAllEffects(), e.resumeMusic())
        }
    }
    e = cc.$(e) || cc.$("#" + e);
    var i, s, o;
    "CANVAS" == e.tagName ? (t = t || e.width, n = n || e.height, s = cc.container = cc.$new("DIV"), o = s.style, i = cc.canvas = e, i.parentNode.insertBefore(s, i), i.appendTo(s), o.width = (t || 480) + "px", o.height = (n || 320) + "px", s.setAttribute("id", "Cocos2dGameContainer"), o.margin = "0 auto", i.setAttribute("width", t || 480), i.setAttribute("height", n || 320)) : ("DIV" != e.tagName && cc.log("Warning: target element is not a DIV or CANVAS"), t = t || e.clientWidth, n = n || e.clientHeight, i = cc.canvas = cc.$new("CANVAS"), i.addClass("gameCanvas"), i.setAttribute("width", t || 480), i.setAttribute("height", n || 320), s = cc.container = e, o = s.style, e.appendChild(i), o.width = (t || 480) + "px", o.height = (n || 320) + "px", o.margin = "0 auto"),
    o.position = "relative",
    o.overflow = "hidden",
    s.top = "100%";
    if (!cc.__renderDoesnotSupport) {
        cc.Browser.supportWebGL && (cc.renderContext = cc.webglContext = cc.create3DContext(i, {
            stencil: !0,
            preserveDrawingBuffer: !0,
            antialias: !cc.Browser.isMobile,
            alpha: !1
        })),
        cc.renderContext ? (cc.renderContextType = cc.WEBGL, window.gl = cc.renderContext, cc.drawingUtil = new cc.DrawingPrimitiveWebGL(cc.renderContext), cc.TextureCache.getInstance()._initializingRenderer()) : (cc.renderContext = i.getContext("2d"), cc.mainRenderContextBackup = cc.renderContext, cc.renderContextType = cc.CANVAS, cc.renderContext.translate(0, i.height), cc.drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(cc.renderContext) : null),
        cc.originalCanvasSize = cc.size(i.width, i.height),
        cc.gameDiv = s,
        cc.log(cc.ENGINE_VERSION),
        cc.Configuration.getInstance(),
        cc.setContextMenuEnable(!1),
        cc.Browser.isMobile && cc._addUserSelectStatus();
        var u, a;
        "undefined" != typeof document.hidden ? (u = "hidden", a = "visibilitychange") : "undefined" != typeof document.mozHidden ? (u = "mozHidden", a = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (u = "msHidden", a = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (u = "webkitHidden", a = "webkitvisibilitychange"),
        "undefined" == typeof document.addEventListener || "undefined" == typeof u ? (cc.isAddedHiddenEvent = !1, window.addEventListener("focus",
        function() {
            if (cc.AudioEngine) {
                var e = cc.AudioEngine.getInstance();
                e.resumeAllEffects(),
                e.resumeMusic()
            }
        },
        !1), window.addEventListener("blur",
        function() {
            if (cc.AudioEngine) {
                var e = cc.AudioEngine.getInstance();
                e.pauseAllEffects(),
                e.pauseMusic()
            }
        },
        !1)) : (cc.isAddedHiddenEvent = !0, document.addEventListener(a, r, !1))
    }
},
cc._addUserSelectStatus = function() {
    var e = document.createElement("style");
    e.type = "text/css",
    document.body.appendChild(e),
    e.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}"
},
cc._isContextMenuEnable = !1,
cc.setContextMenuEnable = function(e) {
    cc._isContextMenuEnable = e,
    cc.canvas.oncontextmenu = cc._isContextMenuEnable ?
    function() {}: function() {
        return ! 1
    }
},
cc.Application = cc.Class.extend({
    _animationInterval: null,
    ctor: function() {
        this._animationInterval = 0;
        if (cc._sharedApplication) throw "Application has been initialized";
        cc._sharedApplication = this
    },
    setAnimationInterval: function(e) {
        this._animationInterval = e
    },
    statusBarFrame: function(e) {
        e && cc.rect(0, 0, 0, 0)
    },
    getTargetPlatform: function() {
        return cc.Browser.isMobile ? cc.TARGET_PLATFORM.MOBILE_BROWSER: cc.TARGET_PLATFORM.PC_BROWSER
    },
    run: function() {
        if (!this.applicationDidFinishLaunching()) return 0;
        var e, t = cc.Director.getInstance(),
        n = window;
        return cc.director = t,
        n.requestAnimFrame && this._animationInterval == 1 / 60 ? (e = function() {
            t.mainLoop(),
            n.requestAnimFrame(e)
        },
        n.requestAnimFrame(e)) : (e = function() {
            t.mainLoop()
        },
        setInterval(e, 1e3 * this._animationInterval)),
        0
    }
}),
cc.Application.getInstance = function() {
    return cc._sharedApplication
},
cc.Application.getCurrentLanguage = function() {
    var e = cc.LANGUAGE_ENGLISH,
    t = navigator.language;
    t || (t = navigator.browserLanguage || navigator.userLanguage);
    if (!t) return e;
    t = t.toLowerCase();
    switch (t) {
    case "zh-cn":
        e = cc.LANGUAGE_CHINESE;
        break;
    case "fr":
        e = cc.LANGUAGE_FRENCH;
        break;
    case "it":
        e = cc.LANGUAGE_ITALIAN;
        break;
    case "de":
        e = cc.LANGUAGE_GERMAN;
        break;
    case "es":
        e = cc.LANGUAGE_SPANISH;
        break;
    case "ru":
        e = cc.LANGUAGE_RUSSIAN;
        break;
    case "ko":
        e = cc.LANGUAGE_KOREAN;
        break;
    case "ja":
        e = cc.LANGUAGE_JAPANESE;
        break;
    case "hu":
        e = cc.LANGUAGE_HUNGARIAN;
        break;
    case "pt":
        e = cc.LANGUAGE_PORTUGUESE;
        break;
    case "ar":
        e = cc.LANGUAGE_ARABIC;
        break;
    case "no":
        e = cc.LANGUAGE_NORWEGIAN;
        break;
    case "pl":
        e = cc.LANGUAGE_POLISH
    }
    return e
},
cc._sharedApplication = null,
cc.SAXParser = cc.Class.extend({
    xmlDoc: null,
    _parser: null,
    _xmlDict: null,
    _isSupportDOMParser: null,
    ctor: function() {
        this._xmlDict = {},
        window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
    },
    parse: function(e) {
        var t = e;
        e = this.getList(e),
        e = this._parserXML(e, t).documentElement;
        if ("plist" != e.tagName) throw "cocos2d: " + t + " is not a plist file or you forgot to preload the plist file";
        for (var t = null,
        n = 0,
        r = e.childNodes.length; n < r && (t = e.childNodes[n], 1 != t.nodeType); n++);
        return this._parseNode(t)
    },
    tmxParse: function(e, t) {
        if (null == t || !1 === t) e = this.getList(e);
        return this._parserXML(e)
    },
    _parserXML: function(e, t) {
        var n;
        return this._isSupportDOMParser ? n = this._parser.parseFromString(e, "text/xml") : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e)),
        null == n && cc.log("cocos2d:xml " + t + " not found!"),
        n
    },
    _parseNode: function(e) {
        var t = null;
        switch (e.tagName) {
        case "dict":
            t = this._parseDict(e);
            break;
        case "array":
            t = this._parseArray(e);
            break;
        case "string":
            if (1 == e.childNodes.length) t = e.firstChild.nodeValue;
            else for (var t = "",
            n = 0; n < e.childNodes.length; n++) t += e.childNodes[n].nodeValue;
            break;
        case "false":
            t = !1;
            break;
        case "true":
            t = !0;
            break;
        case "real":
            t = parseFloat(e.firstChild.nodeValue);
            break;
        case "integer":
            t = parseInt(e.firstChild.nodeValue, 10)
        }
        return t
    },
    _parseArray: function(e) {
        for (var t = [], n = 0, r = e.childNodes.length; n < r; n++) {
            var i = e.childNodes[n];
            1 == i.nodeType && t.push(this._parseNode(i))
        }
        return t
    },
    _parseDict: function(e) {
        for (var t = {},
        n = null,
        r = 0,
        i = e.childNodes.length; r < i; r++) {
            var s = e.childNodes[r];
            1 == s.nodeType && ("key" == s.tagName ? n = s.firstChild.nodeValue: t[n] = this._parseNode(s))
        }
        return t
    },
    preloadPlist: function(e) {
        e = cc.FileUtils.getInstance().fullPathForFilename(e);
        if (window.XMLHttpRequest) {
            var t = new XMLHttpRequest;
            t.overrideMimeType && t.overrideMimeType("text/xml")
        }
        if (null == t) throw "cocos2d:Your browser does not support XMLHTTP.";
        var n = this;
        t.onreadystatechange = function() {
            4 == t.readyState && (t.responseText ? (cc.Loader.getInstance().onResLoaded(), n._xmlDict[e] = t.responseText, t = null) : (cc.Loader.getInstance().onResLoaded(), cc.log("cocos2d:There was a problem retrieving the xml data:" + t.statusText)))
        },
        t.open("GET", e, !0),
        t.send(null)
    },
    unloadPlist: function(e) {
        this._xmlDict.hasOwnProperty(e) && delete this._xmlDict[e]
    },
    getName: function(e) {
        var t = e.lastIndexOf("/", e.length) + 1,
        n = e.lastIndexOf(".", e.length);
        return e.substring(t, n)
    },
    getExt: function(e) {
        var t = e.lastIndexOf(".", e.length) + 1;
        return e.substring(t, e.length)
    },
    getList: function(e) {
        return null != this._xmlDict ? this._xmlDict[e] : null
    }
}),
cc.SAXParser.getInstance = function() {
    return this._instance || (this._instance = new cc.SAXParser),
    this._instance
},
cc.SAXParser._instance = null,
cc.AppController = cc.Class.extend({
    didFinishLaunchingWithOptions: function() {
        return cc.Application.getInstance().run(),
        !0
    },
    applicationWillResignActive: function() {
        cc.Director.getInstance().pause()
    },
    applicationDidBecomeActive: function() {
        cc.Director.getInstance().resume()
    },
    applicationDidEnterBackground: function() {
        cc.Application.getInstance().applicationDidEnterBackground()
    },
    applicationWillEnterForeground: function() {
        cc.Application.getInstance().applicationWillEnterForeground()
    },
    applicationWillTerminate: function() {}
}),
cc.AppController.shareAppController = function() {
    null == cc.sharedAppController && (cc.sharedAppController = new cc.AppController);
    if (!cc.sharedAppController) throw "Application initialize failure";
    return cc.sharedAppController
},
cc.sharedAppController = null,
cc.LabelTTF = cc.Sprite.extend({
    _dimensions: null,
    _hAlignment: cc.TEXT_ALIGNMENT_CENTER,
    _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    _fontName: null,
    _fontSize: 0,
    _string: "",
    _originalText: null,
    _isMultiLine: !1,
    _fontStyleStr: null,
    _shadowEnabled: !1,
    _shadowOffset: null,
    _shadowOpacity: 0,
    _shadowBlur: 0,
    _shadowColorStr: null,
    _strokeEnabled: !1,
    _strokeColor: null,
    _strokeSize: 0,
    _strokeColorStr: null,
    _textFillColor: null,
    _fillColorStr: null,
    _strokeShadowOffsetX: 0,
    _strokeShadowOffsetY: 0,
    _needUpdateTexture: !1,
    _labelCanvas: null,
    _labelContext: null,
    ctor: function() {
        cc.Sprite.prototype.ctor.call(this),
        this._dimensions = cc.SizeZero(),
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT,
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP,
        this._opacityModifyRGB = !1,
        this._fontStyleStr = "",
        this._fontName = "Arial",
        this._shadowEnabled = this._isMultiLine = !1,
        this._shadowOffset = cc.SizeZero(),
        this._shadowBlur = this._shadowOpacity = 0,
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)",
        this._strokeEnabled = !1,
        this._strokeColor = cc.white(),
        this._strokeSize = 0,
        this._strokeColorStr = "",
        this._textFillColor = cc.white(),
        this._fillColorStr = "rgba(255,255,255,1)",
        this._strokeShadowOffsetY = this._strokeShadowOffsetX = 0,
        this._needUpdateTexture = !1,
        this._setColorsString()
    },
    init: function() {
        return this.initWithString(" ", this._fontName, this._fontSize)
    },
    _measureConfig: function() {
        this._getLabelContext().font = this._fontStyleStr
    },
    _measure: function(e) {
        return this._getLabelContext().measureText(e).width
    },
    _checkNextline: function(e, t) {
        var n = this._measure(e),
        r = Math.floor(e.length * t / n),
        i = e.indexOf("\n");
        if (.8 * r >= i && 0 < i) return i + 1;
        if (n < t) return e.length;
        for (var n = !1,
        s = t + 1,
        i = -1,
        o = r,
        u, a = cc.LabelTTF._checkRegEx,
        f = cc.LabelTTF._reverseCheckRegEx,
        l = cc.LabelTTF._checkEnRegEx,
        c = e.substr(r); u = a.exec(c);) {
            o += u[0].length;
            if ("\n" == u[2]) {
                n = !0,
                i = o;
                break
            }
            s = e.substr(0, o),
            s = this._measure(s);
            if (s > t) { - 1 != i && (n = !0);
                break
            }
            i = o,
            c = e.substr(o)
        }
        if (n) return i;
        c = e.substr(0, r);
        for (i = r; u = f.exec(c);) if (i = u[1].length, c = u[1], s = this._measure(c), s < t) {
            l.test(u[2]) && i++;
            break
        }
        return i
    },
    description: function() {
        return "<cc.LabelTTF | FontName =" + this._fontName + " FontSize = " + this._fontSize.toFixed(1) + ">"
    },
    setColor: null,
    _setColorForCanvas: function(e) {
        cc.NodeRGBA.prototype.setColor.call(this, e),
        this._setColorsStringForCanvas()
    },
    _setColorsString: null,
    _setColorsStringForCanvas: function() {
        this._needUpdateTexture = !0;
        var e = this._displayedColor,
        t = this._displayedOpacity,
        n = this._strokeColor,
        r = this._textFillColor;
        this._shadowColorStr = "rgba(" + (0 | .5 * e.r) + "," + (0 | .5 * e.g) + "," + (0 | .5 * e.b) + "," + this._shadowOpacity + ")",
        this._fillColorStr = "rgba(" + (0 | e.r / 255 * r.r) + "," + (0 | e.g / 255 * r.g) + "," + (0 | e.b / 255 * r.b) + ", " + t / 255 + ")",
        this._strokeColorStr = "rgba(" + (0 | e.r / 255 * n.r) + "," + (0 | e.g / 255 * n.g) + "," + (0 | e.b / 255 * n.b) + ", " + t / 255 + ")"
    },
    _setColorsStringForWebGL: function() {
        this._needUpdateTexture = !0;
        var e = this._strokeColor,
        t = this._textFillColor;
        this._shadowColorStr = "rgba(128,128,128," + this._shadowOpacity + ")",
        this._fillColorStr = "rgba(" + (0 | t.r) + "," + (0 | t.g) + "," + (0 | t.b) + ", 1)",
        this._strokeColorStr = "rgba(" + (0 | e.r) + "," + (0 | e.g) + "," + (0 | e.b) + ", 1)"
    },
    updateDisplayedColor: null,
    _updateDisplayedColorForCanvas: function(e) {
        cc.NodeRGBA.prototype.updateDisplayedColor.call(this, e),
        this._setColorsString()
    },
    setOpacity: null,
    _setOpacityForCanvas: function(e) {
        this._opacity !== e && (cc.Sprite.prototype.setOpacity.call(this, e), this._setColorsString(), this._needUpdateTexture = !0)
    },
    updateDisplayedOpacity: null,
    updateDisplayedOpacityForCanvas: function(e) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, e),
        this._setColorsString()
    },
    getString: function() {
        return this._string
    },
    getHorizontalAlignment: function() {
        return this._hAlignment
    },
    getVerticalAlignment: function() {
        return this._vAlignment
    },
    getDimensions: function() {
        return cc.size(this._dimensions.width, this._dimensions.height)
    },
    getFontSize: function() {
        return this._fontSize
    },
    getFontName: function() {
        return this._fontName
    },
    initWithString: function(e, t, n, r, i, s) {
        return e = e ? e + "": "",
        n = n || 16,
        r = r || cc.size(0, n),
        i = i || cc.TEXT_ALIGNMENT_LEFT,
        s = s || cc.VERTICAL_TEXT_ALIGNMENT_TOP,
        cc.Sprite.prototype.init.call(this) ? (this._opacityModifyRGB = !1, this._dimensions = cc.size(r.width, r.height), this._fontName = t || "Arial", this._hAlignment = i, this._vAlignment = s, this._fontSize = n, this._fontStyleStr = this._fontSize + "px '" + t + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(t, this._fontSize), this.setString(e), this._setColorsString(), this._updateTexture(), this._needUpdateTexture = !1, !0) : !1
    },
    initWithStringAndTextDefinition: null,
    _initWithStringAndTextDefinitionForCanvas: function(e, t) {
        return cc.Sprite.prototype.init.call(this) ? (this._updateWithTextDefinition(t, !1), this.setString(e), !0) : !1
    },
    _initWithStringAndTextDefinitionForWebGL: function(e, t) {
        return cc.Sprite.prototype.init.call(this) ? (this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.LabelTTF._SHADER_PROGRAM)), this._updateWithTextDefinition(t, !1), this.setString(e), !0) : !1
    },
    setTextDefinition: function(e) {
        e && this._updateWithTextDefinition(e, !0)
    },
    getTextDefinition: function() {
        return this._prepareTextDefinition(!1)
    },
    enableShadow: function(e, t, n, r) {
        t = t || .5,
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        if ((r = this._shadowOffset) && r.width != e.width || r.height != e.height) r.width = e.width,
        r.height = e.height;
        this._shadowOpacity != t && (this._shadowOpacity = t),
        this._setColorsString(),
        this._shadowBlur != n && (this._shadowBlur = n),
        this._needUpdateTexture = !0
    },
    disableShadow: function(e) {
        this._shadowEnabled && (this._shadowEnabled = !1, this._needUpdateTexture = !0)
    },
    enableStroke: function(e, t, n) { ! 1 === this._strokeEnabled && (this._strokeEnabled = !0),
        n = this._strokeColor;
        if (n.r !== e.r || n.g !== e.g || n.b !== e.b) n.r = e.r,
        n.g = e.g,
        n.b = e.b,
        this._setColorsString();
        this._strokeSize !== t && (this._strokeSize = t || 0),
        this._needUpdateTexture = !0
    },
    disableStroke: function(e) {
        this._strokeEnabled && (this._strokeEnabled = !1, this._needUpdateTexture = !0)
    },
    setFontFillColor: null,
    _setFontFillColorForCanvas: function(e, t) {
        var n = this._textFillColor;
        if (n.r != e.r || n.g != e.g || n.b != e.b) n.r = e.r,
        n.g = e.g,
        n.b = e.b,
        this._setColorsString(),
        this._needUpdateTexture = !0
    },
    _setFontFillColorForWebGL: function(e, t) {
        var n = this._textFillColor;
        if (n.r != e.r || n.g != e.g || n.b != e.b) n.r = e.r,
        n.g = e.g,
        n.b = e.b,
        this._setColorsString(),
        this._needUpdateTexture = !0
    },
    _updateWithTextDefinition: function(e, t) {
        e.fontDimensions ? (this._dimensions.width = e.fontDimensions.width, this._dimensions.height = e.fontDimensions.height) : (this._dimensions.width = 0, this._dimensions.height = 0),
        this._hAlignment = e.fontAlignmentH,
        this._vAlignment = e.fontAlignmentV,
        this._fontName = e.fontName,
        this._fontSize = e.fontSize || 12,
        this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'",
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize),
        e.shadowEnabled && this.enableShadow(e.shadowOffset, e.shadowOpacity, e.shadowBlur, !1),
        e.strokeEnabled && this.enableStroke(e.strokeColor, e.strokeSize, !1),
        this.setFontFillColor(e.fontFillColor, !1),
        t && this._updateTexture()
    },
    _prepareTextDefinition: function(e) {
        var t = new cc.FontDefinition;
        e ? (t.fontSize = this._fontSize, t.fontDimensions = cc.SIZE_POINTS_TO_PIXELS(this._dimensions)) : (t.fontSize = this._fontSize, t.fontDimensions = cc.size(this._dimensions.width, this._dimensions.height)),
        t.fontName = this._fontName,
        t.fontAlignmentH = this._hAlignment,
        t.fontAlignmentV = this._vAlignment;
        if (this._strokeEnabled) {
            t.strokeEnabled = !0;
            var n = this._strokeColor;
            t.strokeColor = new cc.Color3B(n.r, n.g, n.b),
            t.strokeSize = this._strokeSize
        } else t.strokeEnabled = !1;
        return this._shadowEnabled ? (t.shadowEnabled = !0, t.shadowBlur = this._shadowBlur, t.shadowOpacity = this._shadowOpacity, t.shadowOffset = e ? cc.SIZE_POINTS_TO_PIXELS(this._shadowOffset) : cc.size(this._shadowOffset.width, this._shadowOffset.height)) : t._shadowEnabled = !1,
        e = this._textFillColor,
        t.fontFillColor = new cc.Color3B(e.r, e.g, e.b),
        t
    },
    _fontClientHeight: 18,
    setString: function(e) {
        e = String(e),
        this._originalText != e && (this._originalText = e + "", this._updateString(), this._needUpdateTexture = !0)
    },
    _updateString: function() {
        this._string = this._originalText
    },
    setHorizontalAlignment: function(e) {
        e !== this._hAlignment && (this._hAlignment = e, this._needUpdateTexture = !0)
    },
    setVerticalAlignment: function(e) {
        e != this._vAlignment && (this._vAlignment = e, this._needUpdateTexture = !0)
    },
    setDimensions: function(e) {
        if (e.width != this._dimensions.width || e.height != this._dimensions.height) this._dimensions = e,
        this._updateString(),
        this._needUpdateTexture = !0
    },
    setFontSize: function(e) {
        this._fontSize !== e && (this._fontSize = e, this._fontStyleStr = e + "px '" + this._fontName + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, e), this._needUpdateTexture = !0)
    },
    setFontName: function(e) {
        this._fontName && this._fontName != e && (this._fontName = e, this._fontStyleStr = this._fontSize + "px '" + e + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(e, this._fontSize), this._needUpdateTexture = !0)
    },
    _drawTTFInCanvas: function(e) {
        if (e) {
            var t = this._strokeShadowOffsetX,
            n = this._strokeShadowOffsetY,
            r = this._contentSize._height - n,
            i = this._vAlignment,
            s = this._hAlignment,
            o = this._fontClientHeight,
            u = this._strokeSize;
            e.setTransform(1, 0, 0, 1, 0 + .5 * t, r + .5 * n),
            e.font != this._fontStyleStr && (e.font = this._fontStyleStr),
            e.fillStyle = this._fillColorStr;
            var a = n = 0,
            f = this._strokeEnabled;
            f && (e.lineWidth = 2 * u, e.strokeStyle = this._strokeColorStr),
            this._shadowEnabled && (u = this._shadowOffset, e.shadowColor = this._shadowColorStr, e.shadowOffsetX = u.width, e.shadowOffsetY = -u.height, e.shadowBlur = this._shadowBlur),
            e.textBaseline = cc.LabelTTF._textBaseline[i],
            e.textAlign = cc.LabelTTF._textAlign[s],
            t = this._contentSize._width - t,
            n = s === cc.TEXT_ALIGNMENT_RIGHT ? n + t: s === cc.TEXT_ALIGNMENT_CENTER ? n + t / 2 : n + 0;
            if (this._isMultiLine) for (s = this._strings.length, i === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? a = o + r - o * s: i === cc.VERTICAL_TEXT_ALIGNMENT_CENTER && (a = o / 2 + (r - o * s) / 2), i = 0; i < s; i++) t = this._strings[i],
            u = -r + o * i + a,
            f && e.strokeText(t, n, u),
            e.fillText(t, n, u);
            else i !== cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM && (a = i === cc.VERTICAL_TEXT_ALIGNMENT_TOP ? a - r: a - .5 * r),
            f && e.strokeText(this._string, n, a),
            e.fillText(this._string, n, a)
        }
    },
    _getLabelContext: function() {
        if (this._labelContext) return this._labelContext;
        if (!this._labelCanvas) {
            var e = document.createElement("canvas"),
            t = new cc.Texture2D;
            t.initWithElement(e),
            this.setTexture(t),
            this._labelCanvas = e
        }
        return this._labelContext = this._labelCanvas.getContext("2d")
    },
    _updateTTF: function() {
        var e = this._dimensions.width,
        t, n;
        this._lineWidths = [],
        this._isMultiLine = !1,
        this._measureConfig();
        if (0 !== e) {
            var r = this._string;
            this._strings = [],
            t = 0;
            for (n = this._string.length; t < n;) {
                var i = this._checkNextline(r.substr(t), e),
                s = r.substr(t, i);
                this._strings.push(s),
                t += i
            }
        } else for (this._strings = this._string.split("\n"), t = 0, n = this._strings.length; t < n; t++) this._lineWidths.push(this._measure(this._strings[t]));
        0 < this._strings.length && (this._isMultiLine = !0),
        n = t = 0,
        this._strokeEnabled && (t = n = 2 * this._strokeSize),
        this._shadowEnabled && (r = this._shadowOffset, t += 2 * Math.abs(r.width), n += 2 * Math.abs(r.height)),
        e = 0 === e ? this._isMultiLine ? cc.size(0 | Math.max.apply(Math, this._lineWidths) + t, 0 | this._fontClientHeight * this._strings.length + n) : cc.size(0 | this._measure(this._string) + t, 0 | this._fontClientHeight + n) : 0 === this._dimensions.height ? this._isMultiLine ? cc.size(0 | e + t, 0 | this._fontClientHeight * this._strings.length + n) : cc.size(0 | e + t, 0 | this._fontClientHeight + n) : cc.size(0 | e + t, 0 | this._dimensions.height + n),
        this.setContentSize(e),
        this._strokeShadowOffsetX = t,
        this._strokeShadowOffsetY = n,
        r = this._anchorPoint,
        this._anchorPointInPoints._x = .5 * t + (e.width - t) * r._x,
        this._anchorPointInPoints._y = .5 * n + (e.height - n) * r._y
    },
    getContentSize: function() {
        return this._needUpdateTexture && this._updateTTF(),
        cc.Sprite.prototype.getContentSize.call(this)
    },
    _updateTexture: function() {
        var e = this._getLabelContext(),
        t = this._labelCanvas,
        n = this._contentSize;
        if (0 === this._string.length) return t.width = 1,
        t.height = n._height,
        this.setTextureRect(cc.rect(0, 0, 1, n._height)),
        !0;
        e.font = this._fontStyleStr,
        this._updateTTF();
        var r = n._width,
        n = n._height,
        i = t.width == r && t.height == n;
        return t.width = r,
        t.height = n,
        i && e.clearRect(0, 0, r, n),
        this._drawTTFInCanvas(e),
        this._texture.handleLoadedTexture(),
        this.setTextureRect(cc.rect(0, 0, r, n)),
        !0
    },
    visit: function(e) {
        this._string && "" != this._string && (this._needUpdateTexture && (this._needUpdateTexture = !1, this._updateTexture()), cc.Sprite.prototype.visit.call(this, e || cc.renderContext))
    },
    draw: null,
    _drawForWebGL: function(e) {
        if (this._string && "" != this._string) {
            e = e || cc.renderContext;
            var t = this._texture;
            t && t._isLoaded && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2D(t), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX), e.bindBuffer(e.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (e.bufferData(e.ARRAY_BUFFER, this._quad.arrayBuffer, e.STATIC_DRAW), this._quadDirty = !1), e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, e.FLOAT, !1, 24, 0), e.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, e.FLOAT, !1, 24, 16), e.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, e.UNSIGNED_BYTE, !0, 24, 12), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)),
            1 === cc.SPRITE_DEBUG_DRAW ? (e = this._quad, e = [cc.p(e.tl.vertices.x, e.tl.vertices.y), cc.p(e.bl.vertices.x, e.bl.vertices.y), cc.p(e.br.vertices.x, e.br.vertices.y), cc.p(e.tr.vertices.x, e.tr.vertices.y)], cc.drawingUtil.drawPoly(e, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (e = this.getTextureRect()._size, t = this.getOffsetPosition(), e = [cc.p(t.x, t.y), cc.p(t.x + e.width, t.y), cc.p(t.x + e.width, t.y + e.height), cc.p(t.x, t.y + e.height)], cc.drawingUtil.drawPoly(e, 4, !0)),
            cc.g_NumberOfDraws++
        }
    },
    _setTextureRectForCanvas: function(e, t, n) {
        this._rectRotated = t || !1,
        n = n || e._size,
        this.setContentSize(n),
        this.setVertexRect(e),
        t = this._textureRect_Canvas,
        t.x = e.x,
        t.y = e.y,
        t.width = e.width,
        t.height = e.height,
        t.validRect = 0 !== t.width && 0 !== t.height,
        e = this._unflippedOffsetPositionFromCenter,
        this._flippedX && (e._x = -e._x),
        this._flippedY && (e._y = -e._y),
        this._offsetPosition._x = e.x + (this._contentSize._width - this._rect.width) / 2,
        this._offsetPosition._y = e.y + (this._contentSize._height - this._rect.height) / 2,
        this._batchNode && (this._dirty = !0)
    },
    _setTextureCoords: function(e) {
        var t = this._batchNode ? this._textureAtlas.getTexture() : this._texture;
        if (t) {
            var n = t.getPixelsWide(),
            r = t.getPixelsHigh(),
            i,
            s = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (t = (2 * e.x + 1) / (2 * n), n = t + (2 * e.height - 2) / (2 * n), i = (2 * e.y + 1) / (2 * r), e = i + (2 * e.width - 2) / (2 * r)) : (t = e.x / n, n = (e.x + e.height) / n, i = e.y / r, e = (e.y + e.width) / r), this._flippedX && (r = i, i = e, e = r), this._flippedY && (r = t, t = n, n = r), s.bl.texCoords.u = t, s.bl.texCoords.v = i, s.br.texCoords.u = t, s.br.texCoords.v = e, s.tl.texCoords.u = n, s.tl.texCoords.v = i, s.tr.texCoords.u = n, s.tr.texCoords.v = e) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (t = (2 * e.x + 1) / (2 * n), n = t + (2 * e.width - 2) / (2 * n), i = (2 * e.y + 1) / (2 * r), e = i + (2 * e.height - 2) / (2 * r)) : (t = e.x / n, n = (e.x + e.width) / n, i = e.y / r, e = (e.y + e.height) / r), this._flippedX && (r = t, t = n, n = r), this._flippedY && (r = i, i = e, e = r), s.bl.texCoords.u = t, s.bl.texCoords.v = e, s.br.texCoords.u = n, s.br.texCoords.v = e, s.tl.texCoords.u = t, s.tl.texCoords.v = i, s.tr.texCoords.u = n, s.tr.texCoords.v = i),
            this._quadDirty = !0
        }
    }
}),
cc.Browser.supportWebGL ? (cc.LabelTTF.prototype.setColor = cc.Sprite.prototype.setColor, cc.LabelTTF.prototype._setColorsString = cc.LabelTTF.prototype._setColorsStringForWebGL, cc.LabelTTF.prototype.updateDisplayedColor = cc.Sprite.prototype.updateDisplayedColor, cc.LabelTTF.prototype.setOpacity = cc.Sprite.prototype.setOpacity, cc.LabelTTF.prototype.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity, cc.LabelTTF.prototype.initWithStringAndTextDefinition = cc.LabelTTF.prototype._initWithStringAndTextDefinitionForWebGL, cc.LabelTTF.prototype.setFontFillColor = cc.LabelTTF.prototype._setFontFillColorForWebGL, cc.LabelTTF.prototype.draw = cc.LabelTTF.prototype._drawForWebGL, cc.LabelTTF.prototype.setTextureRect = cc.Sprite.prototype._setTextureRectForWebGL) : (cc.LabelTTF.prototype.setColor = cc.LabelTTF.prototype._setColorForCanvas, cc.LabelTTF.prototype._setColorsString = cc.LabelTTF.prototype._setColorsStringForCanvas, cc.LabelTTF.prototype.updateDisplayedColor = cc.LabelTTF.prototype._updateDisplayedColorForCanvas, cc.LabelTTF.prototype.setOpacity = cc.LabelTTF.prototype._setOpacityForCanvas, cc.LabelTTF.prototype.updateDisplayedOpacity = cc.LabelTTF.prototype._updateDisplayedOpacityForCanvas, cc.LabelTTF.prototype.initWithStringAndTextDefinition = cc.LabelTTF.prototype._initWithStringAndTextDefinitionForCanvas, cc.LabelTTF.prototype.setFontFillColor = cc.LabelTTF.prototype._setFontFillColorForCanvas, cc.LabelTTF.prototype.draw = cc.Sprite.prototype.draw, cc.LabelTTF.prototype.setTextureRect = cc.LabelTTF.prototype._setTextureRectForCanvas),
cc.LabelTTF._textAlign = ["left", "center", "right"],
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"],
cc.LabelTTF._checkRegEx = /(.+?)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/,
cc.LabelTTF._reverseCheckRegEx = /(.*)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/,
cc.LabelTTF._checkEnRegEx = /[\s\-\/\\\:]/,
cc.LabelTTF.create = function(e, t, n, r, i, s) {
    var o = new cc.LabelTTF;
    return o.initWithString(e, t, n, r, i, s) ? o: null
},
cc.LabelTTF.createWithFontDefinition = function(e, t) {
    var n = new cc.LabelTTF;
    return n && n.initWithStringAndTextDefinition(e, t) ? n: null
},
cc.LabelTTF._SHADER_PROGRAM = cc.USE_LA88_LABELS ? cc.SHADER_POSITION_TEXTURECOLOR: cc.SHADER_POSITION_TEXTUREA8COLOR,
cc.LabelTTF.__labelHeightDiv = document.createElement("div"),
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial",
cc.LabelTTF.__labelHeightDiv.style.position = "absolute",
cc.LabelTTF.__labelHeightDiv.style.left = "-100px",
cc.LabelTTF.__labelHeightDiv.style.top = "-100px",
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal",
document.body.appendChild(cc.LabelTTF.__labelHeightDiv),
cc.LabelTTF.__getFontHeightByDiv = function(e, t) {
    var n = cc.LabelTTF.__fontHeightCache[e + "." + t];
    if (0 < n) return n;
    var r = cc.LabelTTF.__labelHeightDiv;
    return r.innerHTML = "ajghl~!",
    r.style.fontFamily = e,
    r.style.fontSize = t + "px",
    n = r.clientHeight,
    cc.LabelTTF.__fontHeightCache[e + "." + t] = n,
    r.innerHTML = "",
    n
},
cc.LabelTTF.__fontHeightCache = {},
cc.HashElement = cc.Class.extend({
    actions: null,
    target: null,
    actionIndex: 0,
    currentAction: null,
    currentActionSalvaged: !1,
    paused: !1,
    hh: null,
    ctor: function() {
        this.actions = [],
        this._target = null,
        this.actionIndex = 0,
        this.currentAction = null,
        this.paused = this.currentActionSalvaged = !1,
        this.hh = null
    }
}),
cc.ActionManager = cc.Class.extend({
    _hashTargets: null,
    _arrayTargets: null,
    _currentTarget: null,
    _currentTargetSalvaged: !1,
    _searchElementByTarget: function(e, t) {
        for (var n = 0; n < e.length; n++) if (t == e[n].target) return e[n];
        return null
    },
    ctor: function() {
        this._hashTargets = {},
        this._arrayTargets = [],
        this._currentTarget = null,
        this._currentTargetSalvaged = !1
    },
    addAction: function(e, t, n) {
        if (!e) throw "cc.ActionManager.addAction(): action must be non-null";
        if (!t) throw "cc.ActionManager.addAction(): action must be non-null";
        var r = this._hashTargets[t.__instanceId];
        r || (r = new cc.HashElement, r.paused = n, r.target = t, this._hashTargets[t.__instanceId] = r, this._arrayTargets.push(r)),
        this._actionAllocWithHashElement(r),
        r.actions.push(e),
        e.startWithTarget(t)
    },
    removeAllActions: function() {
        for (var e = this._arrayTargets,
        t = 0; t < e.length; t++) {
            var n = e[t];
            n && this.removeAllActionsFromTarget(n.target, !0)
        }
    },
    removeAllActionsFromTarget: function(e, t) {
        if (null != e) {
            var n = this._hashTargets[e.__instanceId];
            n && ( - 1 === n.actions.indexOf(n.currentAction) || n.currentActionSalvaged || (n.currentActionSalvaged = !0), n.actions = [], this._currentTarget != n || t ? this._deleteHashElement(n) : this._currentTargetSalvaged = !0)
        }
    },
    removeAction: function(e) {
        if (null != e) {
            var t = e.getOriginalTarget();
            if (t = this._hashTargets[t.__instanceId]) {
                for (var n = 0; n < t.actions.length; n++) if (t.actions[n] == e) {
                    t.actions.splice(n, 1);
                    break
                }
            } else cc.log("cocos2d: removeAction: Target not found")
        }
    },
    removeActionByTag: function(e, t) {
        e == cc.ACTION_TAG_INVALID && cc.log("cc.ActionManager.removeActionByTag(): an invalid tag");
        if (!t) throw "cc.ActionManager.removeActionByTag(): target must be non-null";
        var n = this._hashTargets[t.__instanceId];
        if (n) for (var r = n.actions.length,
        i = 0; i < r; ++i) {
            var s = n.actions[i];
            if (s && s.getTag() === e && s.getOriginalTarget() == t) {
                this._removeActionAtIndex(i, n);
                break
            }
        }
    },
    getActionByTag: function(e, t) {
        e == cc.ACTION_TAG_INVALID && cc.log("cc.ActionManager.getActionByTag(): an invalid tag");
        var n = this._hashTargets[t.__instanceId];
        if (n) {
            if (null != n.actions) for (var r = 0; r < n.actions.length; ++r) {
                var i = n.actions[r];
                if (i && i.getTag() === e) return i
            }
            cc.log("cocos2d : getActionByTag(tag =" + e + "): Action not found")
        }
        return null
    },
    numberOfRunningActionsInTarget: function(e) {
        return (e = this._hashTargets[e.__instanceId]) ? e.actions ? e.actions.length: 0 : 0
    },
    pauseTarget: function(e) {
        if (e = this._hashTargets[e.__instanceId]) e.paused = !0
    },
    resumeTarget: function(e) {
        if (e = this._hashTargets[e.__instanceId]) e.paused = !1
    },
    pauseAllRunningActions: function() {
        for (var e = [], t = this._arrayTargets, n = 0; n < t.length; n++) {
            var r = t[n];
            r && !r.paused && (r.paused = !0, e.push(r.target))
        }
        return e
    },
    resumeTargets: function(e) {
        if (e) for (var t = 0; t < e.length; t++) e[t] && this.resumeTarget(e[t])
    },
    purgeSharedManager: function() {
        cc.Director.getInstance().getScheduler().unscheduleUpdateForTarget(this)
    },
    _removeActionAtIndex: function(e, t) {
        t.actions[e] != t.currentAction || t.currentActionSalvaged || (t.currentActionSalvaged = !0),
        cc.ArrayRemoveObjectAtIndex(t.actions, e),
        t.actionIndex >= e && t.actionIndex--,
        0 == t.actions.length && (this._currentTarget == t ? this._currentTargetSalvaged = !0 : this._deleteHashElement(t))
    },
    _deleteHashElement: function(e) {
        e && (delete this._hashTargets[e.target.__instanceId], cc.ArrayRemoveObject(this._arrayTargets, e), e.actions = null, e.target = null)
    },
    _actionAllocWithHashElement: function(e) {
        null == e.actions && (e.actions = [])
    },
    update: function(e) {
        for (var t = this._arrayTargets,
        n, r = 0; r < t.length; r++) {
            n = this._currentTarget = t[r];
            if (!n.paused) for (n.actionIndex = 0; n.actionIndex < n.actions.length; n.actionIndex++) if (n.currentAction = n.actions[n.actionIndex], n.currentAction) {
                n.currentActionSalvaged = !1,
                n.currentAction.step(e);
                if (n.currentActionSalvaged) n.currentAction = null;
                else if (n.currentAction.isDone()) {
                    n.currentAction.stop();
                    var i = n.currentAction;
                    n.currentAction = null,
                    this.removeAction(i)
                }
                n.currentAction = null
            }
            this._currentTargetSalvaged && 0 === n.actions.length && this._deleteHashElement(n)
        }
    }
}),
cc.kmScalar = Number,
cc.kmBool = Number,
cc.kmEnum = Number,
cc.KM_FALSE = 0,
cc.KM_TRUE = 1,
cc.kmPI = 3.141592,
cc.kmPIOver180 = .017453,
cc.kmPIUnder180 = 57.295779,
cc.kmEpsilon = .015625,
cc.kmSQR = function(e) {
    return e * e
},
cc.kmDegreesToRadians = function(e) {
    return e * cc.kmPIOver180
},
cc.kmRadiansToDegrees = function(e) {
    return e * cc.kmPIUnder180
},
cc.kmMin = function(e, t) {
    return e < t ? e: t
},
cc.kmMax = function(e, t) {
    return e > t ? e: t
},
cc.kmAlmostEqual = function(e, t) {
    return e + cc.kmEpsilon > t && e - cc.kmEpsilon < t
},
cc.kmVec2 = function(e, t) {
    this.x = e || 0,
    this.y = t || 0
},
cc.kmVec2Fill = function(e, t, n) {
    return e.x = t,
    e.y = n,
    e
},
cc.kmVec2Length = function(e) {
    return Math.sqrt(cc.kmSQR(e.x) + cc.kmSQR(e.y))
},
cc.kmVec2LengthSq = function(e) {
    return cc.kmSQR(e.x) + cc.kmSQR(e.y)
},
cc.kmVec2Normalize = function(e, t) {
    var n = 1 / cc.kmVec2Length(t),
    r = new cc.kmVec2;
    return r.x = t.x * n,
    r.y = t.y * n,
    e.x = r.x,
    e.y = r.y,
    e
},
cc.kmVec2Add = function(e, t, n) {
    return e.x = t.x + n.x,
    e.y = t.y + n.y,
    e
},
cc.kmVec2Dot = function(e, t) {
    return e.x * t.x + e.y * t.y
},
cc.kmVec2Subtract = function(e, t, n) {
    return e.x = t.x - n.x,
    e.y = t.y - n.y,
    e
},
cc.kmVec2Transform = function(e, t, n) {
    var r = new cc.kmVec2;
    return r.x = t.x * n.mat[0] + t.y * n.mat[3] + n.mat[6],
    r.y = t.x * n.mat[1] + t.y * n.mat[4] + n.mat[7],
    e.x = r.x,
    e.y = r.y,
    e
},
cc.kmVec2TransformCoord = function(e, t, n) {
    return null
},
cc.kmVec2Scale = function(e, t, n) {
    return e.x = t.x * n,
    e.y = t.y * n,
    e
},
cc.kmVec2AreEqual = function(e, t) {
    return e.x < t.x + cc.kmEpsilon && e.x > t.x - cc.kmEpsilon && e.y < t.y + cc.kmEpsilon && e.y > t.y - cc.kmEpsilon
},
cc.kmVec3 = function(e, t, n) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = n || 0
},
cc.kmVec3Fill = function(e, t, n, r) {
    return e ? (e.x = t, e.y = n, e.z = r, e) : new cc.kmVec3(t, n, r)
},
cc.kmVec3Length = function(e) {
    return Math.sqrt(cc.kmSQR(e.x) + cc.kmSQR(e.y) + cc.kmSQR(e.z))
},
cc.kmVec3LengthSq = function(e) {
    return cc.kmSQR(e.x) + cc.kmSQR(e.y) + cc.kmSQR(e.z)
},
cc.kmVec3Normalize = function(e, t) {
    var n = 1 / cc.kmVec3Length(t);
    return e.x = t.x * n,
    e.y = t.y * n,
    e.z = t.z * n,
    e
},
cc.kmVec3Cross = function(e, t, n) {
    return e.x = t.y * n.z - t.z * n.y,
    e.y = t.z * n.x - t.x * n.z,
    e.z = t.x * n.y - t.y * n.x,
    e
},
cc.kmVec3Dot = function(e, t) {
    return e.x * t.x + e.y * t.y + e.z * t.z
},
cc.kmVec3Add = function(e, t, n) {
    return e.x = t.x + n.x,
    e.y = t.y + n.y,
    e.z = t.z + n.z,
    e
},
cc.kmVec3Subtract = function(e, t, n) {
    return e.x = t.x - n.x,
    e.y = t.y - n.y,
    e.z = t.z - n.z,
    e
},
cc.kmVec3Transform = function(e, t, n) {
    return e.x = t.x * n.mat[0] + t.y * n.mat[4] + t.z * n.mat[8] + n.mat[12],
    e.y = t.x * n.mat[1] + t.y * n.mat[5] + t.z * n.mat[9] + n.mat[13],
    e.z = t.x * n.mat[2] + t.y * n.mat[6] + t.z * n.mat[10] + n.mat[14],
    e
},
cc.kmVec3TransformNormal = function(e, t, n) {
    return e.x = t.x * n.mat[0] + t.y * n.mat[4] + t.z * n.mat[8],
    e.y = t.x * n.mat[1] + t.y * n.mat[5] + t.z * n.mat[9],
    e.z = t.x * n.mat[2] + t.y * n.mat[6] + t.z * n.mat[10],
    e
},
cc.kmVec3TransformCoord = function(e, t, n) {
    var r = new cc.kmVec4,
    i = new cc.kmVec4;
    return cc.kmVec4Fill(i, t.x, t.y, t.z, 1),
    cc.kmVec4Transform(r, i, n),
    e.x = r.x / r.w,
    e.y = r.y / r.w,
    e.z = r.z / r.w,
    e
},
cc.kmVec3Scale = function(e, t, n) {
    return e.x = t.x * n,
    e.y = t.y * n,
    e.z = t.z * n,
    e
},
cc.kmVec3AreEqual = function(e, t) {
    return e.x < t.x + cc.kmEpsilon && e.x > t.x - cc.kmEpsilon && e.y < t.y + cc.kmEpsilon && e.y > t.y - cc.kmEpsilon && e.z < t.z + cc.kmEpsilon && e.z > t.z - cc.kmEpsilon ? 1 : 0
},
cc.kmVec3InverseTransform = function(e, t, n) {
    return t = new cc.kmVec3(t.x - n.mat[12], t.y - n.mat[13], t.z - n.mat[14]),
    e.x = t.x * n.mat[0] + t.y * n.mat[1] + t.z * n.mat[2],
    e.y = t.x * n.mat[4] + t.y * n.mat[5] + t.z * n.mat[6],
    e.z = t.x * n.mat[8] + t.y * n.mat[9] + t.z * n.mat[10],
    e
},
cc.kmVec3InverseTransformNormal = function(e, t, n) {
    return e.x = t.x * n.mat[0] + t.y * n.mat[1] + t.z * n.mat[2],
    e.y = t.x * n.mat[4] + t.y * n.mat[5] + t.z * n.mat[6],
    e.z = t.x * n.mat[8] + t.y * n.mat[9] + t.z * n.mat[10],
    e
},
cc.kmVec3Assign = function(e, t) {
    return e == t ? e: (e.x = t.x, e.y = t.y, e.z = t.z, e)
},
cc.kmVec3Zero = function(e) {
    return e.x = 0,
    e.y = 0,
    e.z = 0,
    e
},
cc.kmVec3ToTypeArray = function(e) {
    if (!e) return null;
    var t = new Float32Array(3);
    return t[0] = e.x,
    t[1] = e.y,
    t[2] = e.z,
    t
},
cc.kmVec4 = function(e, t, n, r) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = n || 0,
    this.w = r || 0
},
cc.kmVec4Fill = function(e, t, n, r, i) {
    return e.x = t,
    e.y = n,
    e.z = r,
    e.w = i,
    e
},
cc.kmVec4Add = function(e, t, n) {
    return e.x = t.x + n.x,
    e.y = t.y + n.y,
    e.z = t.z + n.z,
    e.w = t.w + n.w,
    e
},
cc.kmVec4Dot = function(e, t) {
    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
},
cc.kmVec4Length = function(e) {
    return Math.sqrt(cc.kmSQR(e.x) + cc.kmSQR(e.y) + cc.kmSQR(e.z) + cc.kmSQR(e.w))
},
cc.kmVec4LengthSq = function(e) {
    return cc.kmSQR(e.x) + cc.kmSQR(e.y) + cc.kmSQR(e.z) + cc.kmSQR(e.w)
},
cc.kmVec4Lerp = function(e, t, n, r) {
    return e
},
cc.kmVec4Normalize = function(e, t) {
    var n = 1 / cc.kmVec4Length(t);
    return e.x *= n,
    e.y *= n,
    e.z *= n,
    e.w *= n,
    e
},
cc.kmVec4Scale = function(e, t, n) {
    return cc.kmVec4Normalize(e, t),
    e.x *= n,
    e.y *= n,
    e.z *= n,
    e.w *= n,
    e
},
cc.kmVec4Subtract = function(e, t, n) {
    return e.x = t.x - n.x,
    e.y = t.y - n.y,
    e.z = t.z - n.z,
    e.w = t.w - n.w,
    e
},
cc.kmVec4Transform = function(e, t, n) {
    return e.x = t.x * n.mat[0] + t.y * n.mat[4] + t.z * n.mat[8] + t.w * n.mat[12],
    e.y = t.x * n.mat[1] + t.y * n.mat[5] + t.z * n.mat[9] + t.w * n.mat[13],
    e.z = t.x * n.mat[2] + t.y * n.mat[6] + t.z * n.mat[10] + t.w * n.mat[14],
    e.w = t.x * n.mat[3] + t.y * n.mat[7] + t.z * n.mat[11] + t.w * n.mat[15],
    e
},
cc.kmVec4TransformArray = function(e, t, n, r, i, s) {
    for (var o = 0; o < s;) cc.kmVec4Transform(e + o * t, n + o * r, i),
    ++o;
    return e
},
cc.kmVec4AreEqual = function(e, t) {
    return e.x < t.x + cc.kmEpsilon && e.x > t.x - cc.kmEpsilon && e.y < t.y + cc.kmEpsilon && e.y > t.y - cc.kmEpsilon && e.z < t.z + cc.kmEpsilon && e.z > t.z - cc.kmEpsilon && e.w < t.w + cc.kmEpsilon && e.w > t.w - cc.kmEpsilon
},
cc.kmVec4Assign = function(e, t) {
    return e == t ? (cc.log("destVec and srcVec are same object"), e) : (e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e)
},
cc.kmVec4ToTypeArray = function(e) {
    if (!e) return null;
    var t = new Float32Array(4);
    return t[0] = e.x,
    t[1] = e.y,
    t[2] = e.z,
    t[3] = e.w,
    t
},
cc.kmRay2 = function(e, t) {
    this.start = e || new cc.kmVec2,
    this.start = e || new cc.kmVec2
},
cc.kmRay2Fill = function(e, t, n, r, i) {
    e.start.x = t,
    e.start.y = n,
    e.dir.x = r,
    e.dir.y = i
},
cc.kmRay2IntersectLineSegment = function(e, t, n, r) {
    var i = e.start.x,
    s = e.start.y,
    o = e.start.x + e.dir.x;
    e = e.start.y + e.dir.y;
    var u = t.x,
    a = t.y,
    f = n.x,
    l = n.y,
    c = (l - a) * (o - i) - (f - u) * (e - s);
    return c > -cc.kmEpsilon && c < cc.kmEpsilon ? cc.KM_FALSE: (a = ((f - u) * (s - a) - (l - a) * (i - u)) / c, u = i + a * (o - i), a = s + a * (e - s), u < cc.kmMin(t.x, n.x) - cc.kmEpsilon || u > cc.kmMax(t.x, n.x) + cc.kmEpsilon || a < cc.kmMin(t.y, n.y) - cc.kmEpsilon || a > cc.kmMax(t.y, n.y) + cc.kmEpsilon || u < cc.kmMin(i, o) - cc.kmEpsilon || u > cc.kmMax(i, o) + cc.kmEpsilon || a < cc.kmMin(s, e) - cc.kmEpsilon || a > cc.kmMax(s, e) + cc.kmEpsilon ? cc.KM_FALSE: (r.x = u, r.y = a, cc.KM_TRUE))
},
cc.calculate_line_normal = function(e, t, n) {
    var r = new cc.kmVec2;
    cc.kmVec2Subtract(r, t, e),
    n.x = -r.y,
    n.y = r.x,
    cc.kmVec2Normalize(n, n)
},
cc.kmRay2IntersectTriangle = function(e, t, n, r, i, s) {
    var o = new cc.kmVec2,
    u = new cc.kmVec2,
    a = new cc.kmVec2,
    f = 1e4,
    l = cc.KM_FALSE,
    c;
    return cc.kmRay2IntersectLineSegment(e, t, n, o) && (c = new cc.kmVec2, l = cc.KM_TRUE, c = cc.kmVec2Length(cc.kmVec2Subtract(c, o, e.start)), c < f && (u.x = o.x, u.y = o.y, f = c, cc.calculate_line_normal(t, n, a))),
    cc.kmRay2IntersectLineSegment(e, n, r, o) && (c = new cc.kmVec2, l = cc.KM_TRUE, c = cc.kmVec2Length(cc.kmVec2Subtract(c, o, e.start)), c < f && (u.x = o.x, u.y = o.y, f = c, cc.calculate_line_normal(n, r, a))),
    cc.kmRay2IntersectLineSegment(e, r, t, o) && (c = new cc.kmVec2, l = cc.KM_TRUE, c = cc.kmVec2Length(cc.kmVec2Subtract(c, o, e.start)), c < f && (u.x = o.x, u.y = o.y, cc.calculate_line_normal(r, t, a))),
    l && (i.x = u.x, i.y = u.y, s && (s.x = a.x, s.y = a.y)),
    l
},
cc.kmRay2IntersectCircle = function(e, t, n, r) {
    cc.log("cc.kmRay2IntersectCircle() has not been implemented.")
};
var Float32Array = Float32Array || Array;
cc.kmMat3 = function() {
    this.mat = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])
},
cc.kmMat3Fill = function(e, t) {
    for (var n = 0; 9 > n; n++) e.mat[n] = t;
    return e
},
cc.kmMat3Adjugate = function(e, t) {
    return e.mat[0] = t.mat[4] * t.mat[8] - t.mat[5] * t.mat[7],
    e.mat[1] = t.mat[2] * t.mat[7] - t.mat[1] * t.mat[8],
    e.mat[2] = t.mat[1] * t.mat[5] - t.mat[2] * t.mat[4],
    e.mat[3] = t.mat[5] * t.mat[6] - t.mat[3] * t.mat[8],
    e.mat[4] = t.mat[0] * t.mat[8] - t.mat[2] * t.mat[6],
    e.mat[5] = t.mat[2] * t.mat[3] - t.mat[0] * t.mat[5],
    e.mat[6] = t.mat[3] * t.mat[7] - t.mat[4] * t.mat[6],
    e.mat[8] = t.mat[0] * t.mat[4] - t.mat[1] * t.mat[3],
    e
},
cc.kmMat3Identity = function(e) {
    return e.mat[1] = e.mat[2] = e.mat[3] = e.mat[5] = e.mat[6] = e.mat[7] = 0,
    e.mat[0] = e.mat[4] = e.mat[8] = 1,
    e
},
cc.kmMat3Inverse = function(e, t, n) {
    var r = new cc.kmMat3;
    return 0 === t ? null: (t = 1 / t, cc.kmMat3Adjugate(r, n), cc.kmMat3ScalarMultiply(e, r, t), e)
},
cc.kmMat3._identity = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
cc.kmMat3IsIdentity = function(e) {
    for (var t = 0; 9 > t; t++) if (cc.kmMat3._identity[t] !== e.mat[t]) return ! 1;
    return ! 0
},
cc.kmMat3Transpose = function(e, t) {
    var n, r;
    for (n = 0; 3 > n; ++n) for (r = 0; 3 > r; ++r) e.mat[3 * n + r] = t.mat[3 * r + n];
    return e
},
cc.kmMat3Determinant = function(e) {
    var t;
    return t = e.mat[0] * e.mat[4] * e.mat[8] + e.mat[1] * e.mat[5] * e.mat[6] + e.mat[2] * e.mat[3] * e.mat[7],
    t -= e.mat[2] * e.mat[4] * e.mat[6] + e.mat[0] * e.mat[5] * e.mat[7] + e.mat[1] * e.mat[3] * e.mat[8]
},
cc.kmMat3Multiply = function(e, t, n) {
    return t = t.mat,
    n = n.mat,
    e.mat[0] = t[0] * n[0] + t[3] * n[1] + t[6] * n[2],
    e.mat[1] = t[1] * n[0] + t[4] * n[1] + t[7] * n[2],
    e.mat[2] = t[2] * n[0] + t[5] * n[1] + t[8] * n[2],
    e.mat[3] = t[0] * n[3] + t[3] * n[4] + t[6] * n[5],
    e.mat[4] = t[1] * n[3] + t[4] * n[4] + t[7] * n[5],
    e.mat[5] = t[2] * n[3] + t[5] * n[4] + t[8] * n[5],
    e.mat[6] = t[0] * n[6] + t[3] * n[7] + t[6] * n[8],
    e.mat[7] = t[1] * n[6] + t[4] * n[7] + t[7] * n[8],
    e.mat[8] = t[2] * n[6] + t[5] * n[7] + t[8] * n[8],
    e
},
cc.kmMat3ScalarMultiply = function(e, t, n) {
    for (var r = 0; 9 > r; r++) e.mat[r] = t.mat[r] * n;
    return e
},
cc.kmMat3RotationAxisAngle = function(e, t, n) {
    var r = Math.cos(n);
    return n = Math.sin(n),
    e.mat[0] = r + t.x * t.x * (1 - r),
    e.mat[1] = t.z * n + t.y * t.x * (1 - r),
    e.mat[2] = -t.y * n + t.z * t.x * (1 - r),
    e.mat[3] = -t.z * n + t.x * t.y * (1 - r),
    e.mat[4] = r + t.y * t.y * (1 - r),
    e.mat[5] = t.x * n + t.z * t.y * (1 - r),
    e.mat[6] = t.y * n + t.x * t.z * (1 - r),
    e.mat[7] = -t.x * n + t.y * t.z * (1 - r),
    e.mat[8] = r + t.z * t.z * (1 - r),
    e
},
cc.kmMat3Assign = function(e, t) {
    if (e == t) return cc.log("cc.kmMat3Assign(): pOut equals pIn"),
    e;
    for (var n = 0; 9 > n; n++) e.mat[n] = t.mat[n];
    return e
},
cc.kmMat3AreEqual = function(e, t) {
    if (e == t) return ! 0;
    for (var n = 0; 9 > n; ++n) if (! (e.mat[n] + cc.kmEpsilon > t.mat[n] && e.mat[n] - cc.kmEpsilon < t.mat[n])) return ! 1;
    return ! 0
},
cc.kmMat3RotationX = function(e, t) {
    return e.mat[0] = 1,
    e.mat[1] = 0,
    e.mat[2] = 0,
    e.mat[3] = 0,
    e.mat[4] = Math.cos(t),
    e.mat[5] = Math.sin(t),
    e.mat[6] = 0,
    e.mat[7] = -Math.sin(t),
    e.mat[8] = Math.cos(t),
    e
},
cc.kmMat3RotationY = function(e, t) {
    return e.mat[0] = Math.cos(t),
    e.mat[1] = 0,
    e.mat[2] = -Math.sin(t),
    e.mat[3] = 0,
    e.mat[4] = 1,
    e.mat[5] = 0,
    e.mat[6] = Math.sin(t),
    e.mat[7] = 0,
    e.mat[8] = Math.cos(t),
    e
},
cc.kmMat3RotationZ = function(e, t) {
    return e.mat[0] = Math.cos(t),
    e.mat[1] = -Math.sin(t),
    e.mat[2] = 0,
    e.mat[3] = Math.sin(t),
    e.mat[4] = Math.cos(t),
    e.mat[5] = 0,
    e.mat[6] = 0,
    e.mat[7] = 0,
    e.mat[8] = 1,
    e
},
cc.kmMat3Rotation = function(e, t) {
    return e.mat[0] = Math.cos(t),
    e.mat[1] = Math.sin(t),
    e.mat[2] = 0,
    e.mat[3] = -Math.sin(t),
    e.mat[4] = Math.cos(t),
    e.mat[5] = 0,
    e.mat[6] = 0,
    e.mat[7] = 0,
    e.mat[8] = 1,
    e
},
cc.kmMat3Scaling = function(e, t, n) {
    return cc.kmMat3Identity(e),
    e.mat[0] = t,
    e.mat[4] = n,
    e
},
cc.kmMat3Translation = function(e, t, n) {
    return cc.kmMat3Identity(e),
    e.mat[6] = t,
    e.mat[7] = n,
    e
},
cc.kmMat3RotationQuaternion = function(e, t) {
    return ! t || !e ? null: (e.mat[0] = 1 - 2 * (t.y * t.y + t.z * t.z), e.mat[1] = 2 * (t.x * t.y - t.w * t.z), e.mat[2] = 2 * (t.x * t.z + t.w * t.y), e.mat[3] = 2 * (t.x * t.y + t.w * t.z), e.mat[4] = 1 - 2 * (t.x * t.x + t.z * t.z), e.mat[5] = 2 * (t.y * t.z - t.w * t.x), e.mat[6] = 2 * (t.x * t.z - t.w * t.y), e.mat[7] = 2 * (t.y * t.z + t.w * t.x), e.mat[8] = 1 - 2 * (t.x * t.x + t.y * t.y), e)
},
cc.kmMat3RotationToAxisAngle = function(e, t, n) {
    return cc.kmQuaternionRotationMatrix(void 0, n),
    cc.kmQuaternionToAxisAngle(void 0, e, t),
    e
},
cc.kmMat4 = function() {
    this.mat = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
},
cc.kmMat4Fill = function(e, t) {
    e.mat[0] = e.mat[1] = e.mat[2] = e.mat[3] = e.mat[4] = e.mat[5] = e.mat[6] = e.mat[7] = e.mat[8] = e.mat[9] = e.mat[10] = e.mat[11] = e.mat[12] = e.mat[13] = e.mat[14] = e.mat[15] = t
},
cc.kmMat4Identity = function(e) {
    return e.mat[1] = e.mat[2] = e.mat[3] = e.mat[4] = e.mat[6] = e.mat[7] = e.mat[8] = e.mat[9] = e.mat[11] = e.mat[12] = e.mat[13] = e.mat[14] = 0,
    e.mat[0] = e.mat[5] = e.mat[10] = e.mat[15] = 1,
    e
},
cc.kmMat4._get = function(e, t, n) {
    return e.mat[t + 4 * n]
},
cc.kmMat4._set = function(e, t, n, r) {
    e.mat[t + 4 * n] = r
},
cc.kmMat4._swap = function(e, t, n, r, i) {
    var s = cc.kmMat4._get(e, t, n);
    cc.kmMat4._set(e, t, n, cc.kmMat4._get(e, r, i)),
    cc.kmMat4._set(e, r, i, s)
},
cc.kmMat4._gaussj = function(e, t) {
    var n, r = 0,
    i = 0,
    s, o, u, a = [0, 0, 0, 0],
    f = [0, 0, 0, 0],
    l = [0, 0, 0, 0];
    for (n = 0; 4 > n; n++) {
        for (s = u = 0; 4 > s; s++) if (1 != l[s]) for (o = 0; 4 > o; o++) 0 == l[o] && Math.abs(cc.kmMat4._get(e, s, o)) >= u && (u = Math.abs(cc.kmMat4._get(e, s, o)), i = s, r = o); ++l[r];
        if (i != r) {
            for (s = 0; 4 > s; s++) cc.kmMat4._swap(e, i, s, r, s);
            for (s = 0; 4 > s; s++) cc.kmMat4._swap(t, i, s, r, s)
        }
        f[n] = i,
        a[n] = r;
        if (0 == cc.kmMat4._get(e, r, r)) return cc.KM_FALSE;
        o = 1 / cc.kmMat4._get(e, r, r),
        cc.kmMat4._set(e, r, r, 1);
        for (s = 0; 4 > s; s++) cc.kmMat4._set(e, r, s, cc.kmMat4._get(e, r, s) * o);
        for (s = 0; 4 > s; s++) cc.kmMat4._set(t, r, s, cc.kmMat4._get(t, r, s) * o);
        for (o = 0; 4 > o; o++) if (o != r) {
            u = cc.kmMat4._get(e, o, r),
            cc.kmMat4._set(e, o, r, 0);
            for (s = 0; 4 > s; s++) cc.kmMat4._set(e, o, s, cc.kmMat4._get(e, o, s) - cc.kmMat4._get(e, r, s) * u);
            for (s = 0; 4 > s; s++) cc.kmMat4._set(t, o, s, cc.kmMat4._get(e, o, s) - cc.kmMat4._get(t, r, s) * u)
        }
    }
    for (s = 3; 0 <= s; s--) if (f[s] != a[s]) for (o = 0; 4 > o; o++) cc.kmMat4._swap(e, o, f[s], o, a[s]);
    return cc.KM_TRUE
},
cc.kmMat4._identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
cc.kmMat4Inverse = function(e, t) {
    var n = new cc.kmMat4,
    r = new cc.kmMat4;
    return cc.kmMat4Assign(n, t),
    cc.kmMat4Identity(r),
    cc.kmMat4._gaussj(n, r) == cc.KM_FALSE ? null: (cc.kmMat4Assign(e, n), e)
},
cc.kmMat4IsIdentity = function(e) {
    for (var t = 0; 16 > t; t++) if (cc.kmMat4._identity[t] != e.mat[t]) return ! 1;
    return ! 0
},
cc.kmMat4Transpose = function(e, t) {
    var n, r, i = e.mat,
    s = t.mat;
    for (r = 0; 4 > r; ++r) for (n = 0; 4 > n; ++n) i[4 * r + n] = s[4 * n + r];
    return e
},
cc.kmMat4Multiply = function(e, t, n) {
    var r = e.mat,
    i = t.mat[0],
    s = t.mat[1],
    o = t.mat[2],
    u = t.mat[3],
    a = t.mat[4],
    f = t.mat[5],
    l = t.mat[6],
    c = t.mat[7],
    h = t.mat[8],
    p = t.mat[9],
    d = t.mat[10],
    v = t.mat[11],
    m = t.mat[12],
    g = t.mat[13],
    y = t.mat[14];
    t = t.mat[15];
    var b = n.mat[0],
    w = n.mat[1],
    E = n.mat[2],
    S = n.mat[3],
    x = n.mat[4],
    T = n.mat[5],
    N = n.mat[6],
    C = n.mat[7],
    k = n.mat[8],
    L = n.mat[9],
    A = n.mat[10],
    O = n.mat[11],
    M = n.mat[12],
    _ = n.mat[13],
    D = n.mat[14];
    return n = n.mat[15],
    r[0] = b * i + w * a + E * h + S * m,
    r[1] = b * s + w * f + E * p + S * g,
    r[2] = b * o + w * l + E * d + S * y,
    r[3] = b * u + w * c + E * v + S * t,
    r[4] = x * i + T * a + N * h + C * m,
    r[5] = x * s + T * f + N * p + C * g,
    r[6] = x * o + T * l + N * d + C * y,
    r[7] = x * u + T * c + N * v + C * t,
    r[8] = k * i + L * a + A * h + O * m,
    r[9] = k * s + L * f + A * p + O * g,
    r[10] = k * o + L * l + A * d + O * y,
    r[11] = k * u + L * c + A * v + O * t,
    r[12] = M * i + _ * a + D * h + n * m,
    r[13] = M * s + _ * f + D * p + n * g,
    r[14] = M * o + _ * l + D * d + n * y,
    r[15] = M * u + _ * c + D * v + n * t,
    e
},
cc.getMat4MultiplyValue = function(e, t) {
    var n = e.mat,
    r = t.mat,
    i = new Float32Array(16);
    return i[0] = n[0] * r[0] + n[4] * r[1] + n[8] * r[2] + n[12] * r[3],
    i[1] = n[1] * r[0] + n[5] * r[1] + n[9] * r[2] + n[13] * r[3],
    i[2] = n[2] * r[0] + n[6] * r[1] + n[10] * r[2] + n[14] * r[3],
    i[3] = n[3] * r[0] + n[7] * r[1] + n[11] * r[2] + n[15] * r[3],
    i[4] = n[0] * r[4] + n[4] * r[5] + n[8] * r[6] + n[12] * r[7],
    i[5] = n[1] * r[4] + n[5] * r[5] + n[9] * r[6] + n[13] * r[7],
    i[6] = n[2] * r[4] + n[6] * r[5] + n[10] * r[6] + n[14] * r[7],
    i[7] = n[3] * r[4] + n[7] * r[5] + n[11] * r[6] + n[15] * r[7],
    i[8] = n[0] * r[8] + n[4] * r[9] + n[8] * r[10] + n[12] * r[11],
    i[9] = n[1] * r[8] + n[5] * r[9] + n[9] * r[10] + n[13] * r[11],
    i[10] = n[2] * r[8] + n[6] * r[9] + n[10] * r[10] + n[14] * r[11],
    i[11] = n[3] * r[8] + n[7] * r[9] + n[11] * r[10] + n[15] * r[11],
    i[12] = n[0] * r[12] + n[4] * r[13] + n[8] * r[14] + n[12] * r[15],
    i[13] = n[1] * r[12] + n[5] * r[13] + n[9] * r[14] + n[13] * r[15],
    i[14] = n[2] * r[12] + n[6] * r[13] + n[10] * r[14] + n[14] * r[15],
    i[15] = n[3] * r[12] + n[7] * r[13] + n[11] * r[14] + n[15] * r[15],
    i
},
cc.getMat4MultiplyWithMat4 = function(e, t, n) {
    e = e.mat,
    t = t.mat;
    var r = n.mat;
    return r[0] = e[0] * t[0] + e[4] * t[1] + e[8] * t[2] + e[12] * t[3],
    r[1] = e[1] * t[0] + e[5] * t[1] + e[9] * t[2] + e[13] * t[3],
    r[2] = e[2] * t[0] + e[6] * t[1] + e[10] * t[2] + e[14] * t[3],
    r[3] = e[3] * t[0] + e[7] * t[1] + e[11] * t[2] + e[15] * t[3],
    r[4] = e[0] * t[4] + e[4] * t[5] + e[8] * t[6] + e[12] * t[7],
    r[5] = e[1] * t[4] + e[5] * t[5] + e[9] * t[6] + e[13] * t[7],
    r[6] = e[2] * t[4] + e[6] * t[5] + e[10] * t[6] + e[14] * t[7],
    r[7] = e[3] * t[4] + e[7] * t[5] + e[11] * t[6] + e[15] * t[7],
    r[8] = e[0] * t[8] + e[4] * t[9] + e[8] * t[10] + e[12] * t[11],
    r[9] = e[1] * t[8] + e[5] * t[9] + e[9] * t[10] + e[13] * t[11],
    r[10] = e[2] * t[8] + e[6] * t[9] + e[10] * t[10] + e[14] * t[11],
    r[11] = e[3] * t[8] + e[7] * t[9] + e[11] * t[10] + e[15] * t[11],
    r[12] = e[0] * t[12] + e[4] * t[13] + e[8] * t[14] + e[12] * t[15],
    r[13] = e[1] * t[12] + e[5] * t[13] + e[9] * t[14] + e[13] * t[15],
    r[14] = e[2] * t[12] + e[6] * t[13] + e[10] * t[14] + e[14] * t[15],
    r[15] = e[3] * t[12] + e[7] * t[13] + e[11] * t[14] + e[15] * t[15],
    n.mat
},
cc.kmMat4Assign = function(e, t) {
    if (e == t) return cc.log("cc.kmMat4Assign(): pOut equals pIn"),
    e;
    var n = e.mat,
    r = t.mat;
    return n[0] = r[0],
    n[1] = r[1],
    n[2] = r[2],
    n[3] = r[3],
    n[4] = r[4],
    n[5] = r[5],
    n[6] = r[6],
    n[7] = r[7],
    n[8] = r[8],
    n[9] = r[9],
    n[10] = r[10],
    n[11] = r[11],
    n[12] = r[12],
    n[13] = r[13],
    n[14] = r[14],
    n[15] = r[15],
    e
},
cc.kmMat4AreEqual = function(e, t) {
    if (e == t) return cc.log("cc.kmMat4AreEqual(): pMat1 and pMat2 are same object."),
    !0;
    for (var n = 0; 16 > n; n++) if (! (e.mat[n] + cc.kmEpsilon > t.mat[n] && e.mat[n] - cc.kmEpsilon < t.mat[n])) return ! 1;
    return ! 0
},
cc.kmMat4RotationX = function(e, t) {
    return e.mat[0] = 1,
    e.mat[1] = 0,
    e.mat[2] = 0,
    e.mat[3] = 0,
    e.mat[4] = 0,
    e.mat[5] = Math.cos(t),
    e.mat[6] = Math.sin(t),
    e.mat[7] = 0,
    e.mat[8] = 0,
    e.mat[9] = -Math.sin(t),
    e.mat[10] = Math.cos(t),
    e.mat[11] = 0,
    e.mat[12] = 0,
    e.mat[13] = 0,
    e.mat[14] = 0,
    e.mat[15] = 1,
    e
},
cc.kmMat4RotationY = function(e, t) {
    return e.mat[0] = Math.cos(t),
    e.mat[1] = 0,
    e.mat[2] = -Math.sin(t),
    e.mat[3] = 0,
    e.mat[4] = 0,
    e.mat[5] = 1,
    e.mat[6] = 0,
    e.mat[7] = 0,
    e.mat[8] = Math.sin(t),
    e.mat[9] = 0,
    e.mat[10] = Math.cos(t),
    e.mat[11] = 0,
    e.mat[12] = 0,
    e.mat[13] = 0,
    e.mat[14] = 0,
    e.mat[15] = 1,
    e
},
cc.kmMat4RotationZ = function(e, t) {
    return e.mat[0] = Math.cos(t),
    e.mat[1] = Math.sin(t),
    e.mat[2] = 0,
    e.mat[3] = 0,
    e.mat[4] = -Math.sin(t),
    e.mat[5] = Math.cos(t),
    e.mat[6] = 0,
    e.mat[7] = 0,
    e.mat[8] = 0,
    e.mat[9] = 0,
    e.mat[10] = 1,
    e.mat[11] = 0,
    e.mat[12] = 0,
    e.mat[13] = 0,
    e.mat[14] = 0,
    e.mat[15] = 1,
    e
},
cc.kmMat4RotationPitchYawRoll = function(e, t, n, r) {
    var i = Math.cos(t);
    t = Math.sin(t);
    var s = Math.cos(n);
    n = Math.sin(n);
    var o = Math.cos(r);
    r = Math.sin(r);
    var u = t * n,
    a = i * n;
    return e.mat[0] = s * o,
    e.mat[4] = s * r,
    e.mat[8] = -n,
    e.mat[1] = u * o - i * r,
    e.mat[5] = u * r + i * o,
    e.mat[9] = t * s,
    e.mat[2] = a * o + t * r,
    e.mat[6] = a * r - t * o,
    e.mat[10] = i * s,
    e.mat[3] = e.mat[7] = e.mat[11] = 0,
    e.mat[15] = 1,
    e
},
cc.kmMat4RotationQuaternion = function(e, t) {
    return e.mat[0] = 1 - 2 * (t.y * t.y + t.z * t.z),
    e.mat[1] = 2 * (t.x * t.y + t.z * t.w),
    e.mat[2] = 2 * (t.x * t.z - t.y * t.w),
    e.mat[3] = 0,
    e.mat[4] = 2 * (t.x * t.y - t.z * t.w),
    e.mat[5] = 1 - 2 * (t.x * t.x + t.z * t.z),
    e.mat[6] = 2 * (t.z * t.y + t.x * t.w),
    e.mat[7] = 0,
    e.mat[8] = 2 * (t.x * t.z + t.y * t.w),
    e.mat[9] = 2 * (t.y * t.z - t.x * t.w),
    e.mat[10] = 1 - 2 * (t.x * t.x + t.y * t.y),
    e.mat[11] = 0,
    e.mat[12] = 0,
    e.mat[13] = 0,
    e.mat[14] = 0,
    e.mat[15] = 1,
    e
},
cc.kmMat4RotationTranslation = function(e, t, n) {
    return e.mat[0] = t.mat[0],
    e.mat[1] = t.mat[1],
    e.mat[2] = t.mat[2],
    e.mat[3] = 0,
    e.mat[4] = t.mat[3],
    e.mat[5] = t.mat[4],
    e.mat[6] = t.mat[5],
    e.mat[7] = 0,
    e.mat[8] = t.mat[6],
    e.mat[9] = t.mat[7],
    e.mat[10] = t.mat[8],
    e.mat[11] = 0,
    e.mat[12] = n.x,
    e.mat[13] = n.y,
    e.mat[14] = n.z,
    e.mat[15] = 1,
    e
},
cc.kmMat4Scaling = function(e, t, n, r) {
    return e.mat[0] = t,
    e.mat[5] = n,
    e.mat[10] = r,
    e.mat[15] = 1,
    e.mat[1] = e.mat[2] = e.mat[3] = e.mat[4] = e.mat[6] = e.mat[7] = e.mat[8] = e.mat[9] = e.mat[11] = e.mat[12] = e.mat[13] = e.mat[14] = 0,
    e
},
cc.kmMat4Translation = function(e, t, n, r) {
    return e.mat[0] = e.mat[5] = e.mat[10] = e.mat[15] = 1,
    e.mat[1] = e.mat[2] = e.mat[3] = e.mat[4] = e.mat[6] = e.mat[7] = e.mat[8] = e.mat[9] = e.mat[11] = 0,
    e.mat[12] = t,
    e.mat[13] = n,
    e.mat[14] = r,
    e
},
cc.kmMat4GetUpVec3 = function(e, t) {
    return e.x = t.mat[4],
    e.y = t.mat[5],
    e.z = t.mat[6],
    cc.kmVec3Normalize(e, e),
    e
},
cc.kmMat4GetRightVec3 = function(e, t) {
    return e.x = t.mat[0],
    e.y = t.mat[1],
    e.z = t.mat[2],
    cc.kmVec3Normalize(e, e),
    e
},
cc.kmMat4GetForwardVec3 = function(e, t) {
    return e.x = t.mat[8],
    e.y = t.mat[9],
    e.z = t.mat[10],
    cc.kmVec3Normalize(e, e),
    e
},
cc.kmMat4PerspectiveProjection = function(e, t, n, r, i) {
    var s = cc.kmDegreesToRadians(t / 2);
    t = i - r;
    var o = Math.sin(s);
    return 0 == t || 0 == o || 0 == n ? null: (s = Math.cos(s) / o, cc.kmMat4Identity(e), e.mat[0] = s / n, e.mat[5] = s, e.mat[10] = -(i + r) / t, e.mat[11] = -1, e.mat[14] = -2 * r * i / t, e.mat[15] = 0, e)
},
cc.kmMat4OrthographicProjection = function(e, t, n, r, i, s, o) {
    return cc.kmMat4Identity(e),
    e.mat[0] = 2 / (n - t),
    e.mat[5] = 2 / (i - r),
    e.mat[10] = -2 / (o - s),
    e.mat[12] = -((n + t) / (n - t)),
    e.mat[13] = -((i + r) / (i - r)),
    e.mat[14] = -((o + s) / (o - s)),
    e
},
cc.kmMat4LookAt = function(e, t, n, r) {
    var i = new cc.kmVec3,
    s = new cc.kmVec3,
    o = new cc.kmVec3,
    u = new cc.kmVec3,
    a = new cc.kmMat4;
    return cc.kmVec3Subtract(i, n, t),
    cc.kmVec3Normalize(i, i),
    cc.kmVec3Assign(s, r),
    cc.kmVec3Normalize(s, s),
    cc.kmVec3Cross(o, i, s),
    cc.kmVec3Normalize(o, o),
    cc.kmVec3Cross(u, o, i),
    cc.kmVec3Normalize(o, o),
    cc.kmMat4Identity(e),
    e.mat[0] = o.x,
    e.mat[4] = o.y,
    e.mat[8] = o.z,
    e.mat[1] = u.x,
    e.mat[5] = u.y,
    e.mat[9] = u.z,
    e.mat[2] = -i.x,
    e.mat[6] = -i.y,
    e.mat[10] = -i.z,
    cc.kmMat4Translation(a, -t.x, -t.y, -t.z),
    cc.kmMat4Multiply(e, e, a),
    e
},
cc.kmMat4RotationAxisAngle = function(e, t, n) {
    var r = Math.cos(n);
    n = Math.sin(n);
    var i = new cc.kmVec3;
    return cc.kmVec3Normalize(i, t),
    e.mat[0] = r + i.x * i.x * (1 - r),
    e.mat[1] = i.z * n + i.y * i.x * (1 - r),
    e.mat[2] = -i.y * n + i.z * i.x * (1 - r),
    e.mat[3] = 0,
    e.mat[4] = -i.z * n + i.x * i.y * (1 - r),
    e.mat[5] = r + i.y * i.y * (1 - r),
    e.mat[6] = i.x * n + i.z * i.y * (1 - r),
    e.mat[7] = 0,
    e.mat[8] = i.y * n + i.x * i.z * (1 - r),
    e.mat[9] = -i.x * n + i.y * i.z * (1 - r),
    e.mat[10] = r + i.z * i.z * (1 - r),
    e.mat[11] = 0,
    e.mat[12] = 0,
    e.mat[13] = 0,
    e.mat[14] = 0,
    e.mat[15] = 1,
    e
},
cc.kmMat4ExtractRotation = function(e, t) {
    return e.mat[0] = t.mat[0],
    e.mat[1] = t.mat[1],
    e.mat[2] = t.mat[2],
    e.mat[3] = t.mat[4],
    e.mat[4] = t.mat[5],
    e.mat[5] = t.mat[6],
    e.mat[6] = t.mat[8],
    e.mat[7] = t.mat[9],
    e.mat[8] = t.mat[10],
    e
},
cc.kmMat4ExtractPlane = function(e, t, n) {
    switch (n) {
    case cc.KM_PLANE_RIGHT:
        e.a = t.mat[3] - t.mat[0],
        e.b = t.mat[7] - t.mat[4],
        e.c = t.mat[11] - t.mat[8],
        e.d = t.mat[15] - t.mat[12];
        break;
    case cc.KM_PLANE_LEFT:
        e.a = t.mat[3] + t.mat[0],
        e.b = t.mat[7] + t.mat[4],
        e.c = t.mat[11] + t.mat[8],
        e.d = t.mat[15] + t.mat[12];
        break;
    case cc.KM_PLANE_BOTTOM:
        e.a = t.mat[3] + t.mat[1],
        e.b = t.mat[7] + t.mat[5],
        e.c = t.mat[11] + t.mat[9],
        e.d = t.mat[15] + t.mat[13];
        break;
    case cc.KM_PLANE_TOP:
        e.a = t.mat[3] - t.mat[1],
        e.b = t.mat[7] - t.mat[5],
        e.c = t.mat[11] - t.mat[9],
        e.d = t.mat[15] - t.mat[13];
        break;
    case cc.KM_PLANE_FAR:
        e.a = t.mat[3] - t.mat[2],
        e.b = t.mat[7] - t.mat[6],
        e.c = t.mat[11] - t.mat[10],
        e.d = t.mat[15] - t.mat[14];
        break;
    case cc.KM_PLANE_NEAR:
        e.a = t.mat[3] + t.mat[2],
        e.b = t.mat[7] + t.mat[6],
        e.c = t.mat[11] + t.mat[10],
        e.d = t.mat[15] + t.mat[14];
        break;
    default:
        cc.log("cc.kmMat4ExtractPlane(): Invalid plane index")
    }
    return t = Math.sqrt(e.a * e.a + e.b * e.b + e.c * e.c),
    e.a /= t,
    e.b /= t,
    e.c /= t,
    e.d /= t,
    e
},
cc.kmMat4RotationToAxisAngle = function(e, t, n) {
    var r = new cc.kmQuaternion,
    i = new cc.kmMat3;
    return cc.kmMat4ExtractRotation(i, n),
    cc.kmQuaternionRotationMatrix(r, i),
    cc.kmQuaternionToAxisAngle(r, e, t),
    e
},
cc.KM_PLANE_LEFT = 0,
cc.KM_PLANE_RIGHT = 1,
cc.KM_PLANE_BOTTOM = 2,
cc.KM_PLANE_TOP = 3,
cc.KM_PLANE_NEAR = 4,
cc.KM_PLANE_FAR = 5,
cc.kmPlane = function(e, t, n, r) {
    this.a = e || 0,
    this.b = t || 0,
    this.c = n || 0,
    this.d = r || 0
},
cc.POINT_INFRONT_OF_PLANE = 0,
cc.POINT_BEHIND_PLANE = 1,
cc.POINT_ON_PLANE = 2,
cc.kmPlaneDot = function(e, t) {
    return e.a * t.x + e.b * t.y + e.c * t.z + e.d * t.w
},
cc.kmPlaneDotCoord = function(e, t) {
    return e.a * t.x + e.b * t.y + e.c * t.z + e.d
},
cc.kmPlaneDotNormal = function(e, t) {
    return e.a * t.x + e.b * t.y + e.c * t.z
},
cc.kmPlaneFromPointNormal = function(e, t, n) {
    return e.a = n.x,
    e.b = n.y,
    e.c = n.z,
    e.d = -cc.kmVec3Dot(n, t),
    e
},
cc.kmPlaneFromPoints = function(e, t, n, r) {
    var i = new cc.kmVec3,
    s = new cc.kmVec3,
    o = new cc.kmVec3;
    return cc.kmVec3Subtract(s, n, t),
    cc.kmVec3Subtract(o, r, t),
    cc.kmVec3Cross(i, s, o),
    cc.kmVec3Normalize(i, i),
    e.a = i.x,
    e.b = i.y,
    e.c = i.z,
    e.d = cc.kmVec3Dot(cc.kmVec3Scale(i, i, -1), t),
    e
},
cc.kmPlaneIntersectLine = function(e, t, n, r) {
    throw "cc.kmPlaneIntersectLine() hasn't been implemented."
},
cc.kmPlaneNormalize = function(e, t) {
    var n = new cc.kmVec3;
    n.x = t.a,
    n.y = t.b,
    n.z = t.c;
    var r = 1 / cc.kmVec3Length(n);
    return cc.kmVec3Normalize(n, n),
    e.a = n.x,
    e.b = n.y,
    e.c = n.z,
    e.d = t.d * r,
    e
},
cc.kmPlaneScale = function(e, t, n) {
    cc.log("cc.kmPlaneScale() has not been implemented.")
},
cc.kmPlaneClassifyPoint = function(e, t) {
    var n = e.a * t.x + e.b * t.y + e.c * t.z + e.d;
    return.001 < n ? cc.POINT_INFRONT_OF_PLANE: -0.001 > n ? cc.POINT_BEHIND_PLANE: cc.POINT_ON_PLANE
},
cc.kmQuaternion = function(e, t, n, r) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = n || 0,
    this.w = r || 0
},
cc.kmQuaternionConjugate = function(e, t) {
    return e.x = -t.x,
    e.y = -t.y,
    e.z = -t.z,
    e.w = t.w,
    e
},
cc.kmQuaternionDot = function(e, t) {
    return e.w * t.w + e.x * t.x + e.y * t.y + e.z * t.z
},
cc.kmQuaternionExp = function(e, t) {
    return e
},
cc.kmQuaternionIdentity = function(e) {
    return e.x = 0,
    e.y = 0,
    e.z = 0,
    e.w = 1,
    e
},
cc.kmQuaternionInverse = function(e, t) {
    var n = cc.kmQuaternionLength(t),
    r = new cc.kmQuaternion;
    return Math.abs(n) > cc.kmEpsilon ? (e.x = 0, e.y = 0, e.z = 0, e.w = 0, e) : (cc.kmQuaternionScale(e, cc.kmQuaternionConjugate(r, t), 1 / n), e)
},
cc.kmQuaternionIsIdentity = function(e) {
    return 0 == e.x && 0 == e.y && 0 == e.z && 1 == e.w
},
cc.kmQuaternionLength = function(e) {
    return Math.sqrt(cc.kmQuaternionLengthSq(e))
},
cc.kmQuaternionLengthSq = function(e) {
    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w
},
cc.kmQuaternionLn = function(e, t) {
    return e
},
cc.kmQuaternionMultiply = function(e, t, n) {
    return e.w = t.w * n.w - t.x * n.x - t.y * n.y - t.z * n.z,
    e.x = t.w * n.x + t.x * n.w + t.y * n.z - t.z * n.y,
    e.y = t.w * n.y + t.y * n.w + t.z * n.x - t.x * n.z,
    e.z = t.w * n.z + t.z * n.w + t.x * n.y - t.y * n.x,
    e
},
cc.kmQuaternionNormalize = function(e, t) {
    var n = cc.kmQuaternionLength(t);
    if (Math.abs(n) <= cc.kmEpsilon) throw "cc.kmQuaternionNormalize(): pIn is an invalid value";
    return cc.kmQuaternionScale(e, t, 1 / n),
    e
},
cc.kmQuaternionRotationAxis = function(e, t, n) {
    n *= .5;
    var r = Math.sin(n);
    return e.w = Math.cos(n),
    e.x = t.x * r,
    e.y = t.y * r,
    e.z = t.z * r,
    e
},
cc.kmQuaternionRotationMatrix = function(e, t) {
    var n, r, i, s;
    n = [],
    r = s = 0;
    if (!t) return null;
    n[0] = t.mat[0],
    n[1] = t.mat[3],
    n[2] = t.mat[6],
    n[4] = t.mat[1],
    n[5] = t.mat[4],
    n[6] = t.mat[7],
    n[8] = t.mat[2],
    n[9] = t.mat[5],
    n[10] = t.mat[8],
    n[15] = 1;
    var o = n[0];
    return r = o[0] + o[5] + o[10] + 1,
    r > cc.kmEpsilon ? (s = 2 * Math.sqrt(r), n = (o[9] - o[6]) / s, r = (o[2] - o[8]) / s, i = (o[4] - o[1]) / s, s *= .25) : o[0] > o[5] && o[0] > o[10] ? (s = 2 * Math.sqrt(1 + o[0] - o[5] - o[10]), n = .25 * s, r = (o[4] + o[1]) / s, i = (o[2] + o[8]) / s, s = (o[9] - o[6]) / s) : o[5] > o[10] ? (s = 2 * Math.sqrt(1 + o[5] - o[0] - o[10]), n = (o[4] + o[1]) / s, r = .25 * s, i = (o[9] + o[6]) / s, s = (o[2] - o[8]) / s) : (s = 2 * Math.sqrt(1 + o[10] - o[0] - o[5]), n = (o[2] + o[8]) / s, r = (o[9] + o[6]) / s, i = .25 * s, s = (o[4] - o[1]) / s),
    e.x = n,
    e.y = r,
    e.z = i,
    e.w = s,
    e
},
cc.kmQuaternionRotationYawPitchRoll = function(e, t, n, r) {
    var i, s, o, u, a;
    return i = cc.kmDegreesToRadians(n) / 2,
    s = cc.kmDegreesToRadians(t) / 2,
    o = cc.kmDegreesToRadians(r) / 2,
    r = Math.cos(i),
    t = Math.cos(s),
    n = Math.cos(o),
    i = Math.sin(i),
    s = Math.sin(s),
    o = Math.sin(o),
    u = t * n,
    a = s * o,
    e.w = r * u + i * a,
    e.x = i * u - r * a,
    e.y = r * s * n + i * t * o,
    e.z = r * t * o - i * s * n,
    cc.kmQuaternionNormalize(e, e),
    e
},
cc.kmQuaternionSlerp = function(e, t, n, r) {
    if (t.x == n.x && t.y == n.y && t.z == n.z && t.w == n.w) return e.x = t.x,
    e.y = t.y,
    e.z = t.z,
    e.w = t.w,
    e;
    var i = cc.kmQuaternionDot(t, n),
    s = Math.acos(i),
    o = Math.sqrt(1 - cc.kmSQR(i)),
    i = Math.sin(r * s) / o;
    return r = Math.sin((1 - r) * s) / o,
    s = new cc.kmQuaternion,
    o = new cc.kmQuaternion,
    cc.kmQuaternionScale(s, t, r),
    cc.kmQuaternionScale(o, n, i),
    cc.kmQuaternionAdd(e, s, o),
    e
},
cc.kmQuaternionToAxisAngle = function(e, t, n) {
    Math.acos(e.w),
    n = Math.sqrt(cc.kmSQR(e.x) + cc.kmSQR(e.y) + cc.kmSQR(e.z)),
    n > -cc.kmEpsilon && n < cc.kmEpsilon || n < 2 * cc.kmPI + cc.kmEpsilon && n > 2 * cc.kmPI - cc.kmEpsilon ? (t.x = 0, t.y = 0, t.z = 1) : (t.x = e.x / n, t.y = e.y / n, t.z = e.z / n, cc.kmVec3Normalize(t, t))
},
cc.kmQuaternionScale = function(e, t, n) {
    return e.x = t.x * n,
    e.y = t.y * n,
    e.z = t.z * n,
    e.w = t.w * n,
    e
},
cc.kmQuaternionAssign = function(e, t) {
    return e.x = t.x,
    e.y = t.y,
    e.z = t.z,
    e.w = t.w,
    e
},
cc.kmQuaternionAdd = function(e, t, n) {
    return e.x = t.x + n.x,
    e.y = t.y + n.y,
    e.z = t.z + n.z,
    e.w = t.w + n.w,
    e
},
cc.kmQuaternionRotationBetweenVec3 = function(e, t, n, r) {
    var i = new cc.kmVec3,
    s = new cc.kmVec3;
    return cc.kmVec3Assign(i, t),
    cc.kmVec3Assign(s, n),
    cc.kmVec3Normalize(i, i),
    cc.kmVec3Normalize(s, s),
    n = cc.kmVec3Dot(i, s),
    1 <= n ? (cc.kmQuaternionIdentity(e), e) : ( - 0.999999 > n ? Math.abs(cc.kmVec3LengthSq(r)) < cc.kmEpsilon ? cc.kmQuaternionRotationAxis(e, r, cc.kmPI) : (i = new cc.kmVec3, s = new cc.kmVec3, s.x = 1, s.y = 0, s.z = 0, cc.kmVec3Cross(i, s, t), Math.abs(cc.kmVec3LengthSq(i)) < cc.kmEpsilon && (s = new cc.kmVec3, s.x = 0, s.y = 1, s.z = 0, cc.kmVec3Cross(i, s, t)), cc.kmVec3Normalize(i, i), cc.kmQuaternionRotationAxis(e, i, cc.kmPI)) : (t = Math.sqrt(2 * (1 + n)), r = 1 / t, n = new cc.kmVec3, cc.kmVec3Cross(n, i, s), e.x = n.x * r, e.y = n.y * r, e.z = n.z * r, e.w = .5 * t, cc.kmQuaternionNormalize(e, e)), e)
},
cc.kmQuaternionMultiplyVec3 = function(e, t, n) {
    var r = new cc.kmVec3,
    i = new cc.kmVec3,
    s = new cc.kmVec3;
    return s.x = t.x,
    s.y = t.y,
    s.z = t.z,
    cc.kmVec3Cross(r, s, n),
    cc.kmVec3Cross(i, s, r),
    cc.kmVec3Scale(r, r, 2 * t.w),
    cc.kmVec3Scale(i, i, 2),
    cc.kmVec3Add(e, n, r),
    cc.kmVec3Add(e, e, i),
    e
},
cc.kmAABB = function(e, t) {
    this.min = e || new cc.kmVec3,
    this.max = t || new cc.kmVec3
},
cc.kmAABBContainsPoint = function(e, t) {
    return e.x >= t.min.x && e.x <= t.max.x && e.y >= t.min.y && e.y <= t.max.y && e.z >= t.min.z && e.z <= t.max.z ? cc.KM_TRUE: cc.KM_FALSE
},
cc.kmAABBAssign = function(e, t) {
    return cc.kmVec3Assign(e.min, t.min),
    cc.kmVec3Assign(e.max, t.max),
    e
},
cc.kmAABBScale = function(e, t, n) {
    cc.log("cc.kmAABBScale hasn't been supported.")
},
cc.IMAGE_FORMAT_JPEG = 0,
cc.IMAGE_FORMAT_PNG = 1,
cc.IMAGE_FORMAT_RAWDATA = 2,
cc.NextPOT = function(e) {
    return e -= 1,
    e |= e >> 1,
    e |= e >> 2,
    e |= e >> 4,
    e |= e >> 8,
    (e | e >> 16) + 1
},
cc.RenderTexture = cc.Node.extend({
    _cacheCanvas: null,
    _cacheContext: null,
    _fBO: 0,
    _depthRenderBuffer: 0,
    _oldFBO: 0,
    _texture: null,
    _textureCopy: null,
    _uITextureImage: null,
    _pixelFormat: cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888,
    _sprite: null,
    _clearFlags: 0,
    _clearColor: null,
    _clearDepth: 0,
    _clearStencil: 0,
    _autoDraw: !1,
    _clearColorStr: null,
    ctor: null,
    _ctorForCanvas: function() {
        cc.Node.prototype.ctor.call(this),
        this._clearColor = cc.c4f(1, 1, 1, 1),
        this._clearColorStr = "rgba(255,255,255,1)",
        this._cacheCanvas = document.createElement("canvas"),
        this._cacheContext = this._cacheCanvas.getContext("2d"),
        this.setAnchorPoint(0, 0)
    },
    _ctorForWebGL: function() {
        cc.Node.prototype.ctor.call(this),
        this._clearColor = cc.c4f(0, 0, 0, 0)
    },
    cleanup: null,
    _cleanupForCanvas: function() {
        cc.Node.prototype.onExit.call(this),
        this._cacheCanvas = this._cacheContext = null
    },
    _cleanupForWebGL: function() {
        cc.Node.prototype.onExit.call(this),
        this._textureCopy = null;
        var e = cc.renderContext;
        e.deleteFramebuffer(this._fBO),
        this._depthRenderBuffer && e.deleteRenderbuffer(this._depthRenderBuffer),
        this._uITextureImage = null
    },
    getSprite: function() {
        return this._sprite
    },
    setSprite: function(e) {
        this._sprite = e
    },
    initWithWidthAndHeight: null,
    _initWithWidthAndHeightForCanvas: function(e, t, n, r) {
        return n = this._cacheCanvas,
        r = cc.CONTENT_SCALE_FACTOR(),
        n.width = 0 | e * r,
        n.height = 0 | t * r,
        this._cacheContext.translate(0, n.height),
        e = new cc.Texture2D,
        e.initWithElement(n),
        e.handleLoadedTexture(),
        this._sprite = cc.Sprite.createWithTexture(e),
        !0
    },
    _initWithWidthAndHeightForWebGL: function(e, t, n, r) {
        n == cc.TEXTURE_2D_PIXEL_FORMAT_A8 && cc.log("cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;");
        var i = cc.renderContext,
        s = cc.CONTENT_SCALE_FACTOR();
        e = 0 | e * s,
        t = 0 | t * s,
        this._oldFBO = i.getParameter(i.FRAMEBUFFER_BINDING);
        var o;
        cc.Configuration.getInstance().supportsNPOT() ? (s = e, o = t) : (s = cc.NextPOT(e), o = cc.NextPOT(t));
        for (var u = new Uint8Array(s * o * 4), a = 0; a < s * o * 4; a++) u[a] = 0;
        this._pixelFormat = n,
        this._texture = new cc.Texture2D;
        if (!this._texture) return ! 1;
        a = this._texture,
        a.initWithData(u, this._pixelFormat, s, o, cc.size(e, t)),
        n = i.getParameter(i.RENDERBUFFER_BINDING);
        if (cc.Configuration.getInstance().checkForGLExtension("GL_QCOM")) {
            this._textureCopy = new cc.Texture2D;
            if (!this._textureCopy) return ! 1;
            this._textureCopy.initWithData(u, this._pixelFormat, s, o, cc.size(e, t))
        }
        return this._fBO = i.createFramebuffer(),
        i.bindFramebuffer(i.FRAMEBUFFER, this._fBO),
        i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, a._webTextureObj, 0),
        0 != r && (this._depthRenderBuffer = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, this._depthRenderBuffer), i.renderbufferStorage(i.RENDERBUFFER, r, s, o), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, this._depthRenderBuffer)),
        i.checkFramebufferStatus(i.FRAMEBUFFER) !== i.FRAMEBUFFER_COMPLETE && cc.log("Could not attach texture to the framebuffer"),
        a.setAliasTexParameters(),
        e = this._sprite = cc.Sprite.createWithTexture(a),
        e.setScaleY( - 1),
        e.setBlendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA),
        i.bindRenderbuffer(i.RENDERBUFFER, n),
        i.bindFramebuffer(i.FRAMEBUFFER, this._oldFBO),
        this._autoDraw = !1,
        this.addChild(e),
        !0
    },
    begin: null,
    _beginForCanvas: function() {
        cc.renderContext = this._cacheContext,
        cc.EGLView.getInstance()._setScaleXYForRenderTexture()
    },
    _beginForWebGL: function() {
        cc.kmGLMatrixMode(cc.KM_GL_PROJECTION),
        cc.kmGLPushMatrix(),
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW),
        cc.kmGLPushMatrix();
        var e = cc.Director.getInstance();
        e.setProjection(e.getProjection());
        var t = this._texture.getContentSizeInPixels(),
        n = cc.Director.getInstance().getWinSizeInPixels(),
        e = n.width / t.width,
        n = n.height / t.height,
        r = cc.renderContext;
        r.viewport(0, 0, t.width, t.height),
        t = new cc.kmMat4,
        cc.kmMat4OrthographicProjection(t, -1 / e, 1 / e, -1 / n, 1 / n, -1, 1),
        cc.kmGLMultMatrix(t),
        this._oldFBO = r.getParameter(r.FRAMEBUFFER_BINDING),
        r.bindFramebuffer(r.FRAMEBUFFER, this._fBO),
        cc.Configuration.getInstance().checkForGLExtension("GL_QCOM") && (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, this._textureCopy._webTextureObj, 0), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, this._texture._webTextureObj, 0))
    },
    beginWithClear: function(e, t, n, r, i, s) {
        var o = cc.renderContext;
        i = i || o.COLOR_BUFFER_BIT,
        s = s || o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT,
        this._beginWithClear(e, t, n, r, i, s, o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT | o.STENCIL_BUFFER_BIT)
    },
    _beginWithClear: null,
    _beginWithClearForCanvas: function(e, t, n, r, i, s, o) {
        this.begin(),
        e = e || 0,
        t = t || 0,
        n = n || 0,
        r = isNaN(r) ? 1 : r,
        i = this._cacheContext,
        s = this._cacheCanvas,
        i.save(),
        i.fillStyle = "rgba(" + (0 | 255 * e) + "," + (0 | 255 * t) + "," + (0 | 255 * n) + "," + r + ")",
        i.clearRect(0, 0, s.width, -s.height),
        i.fillRect(0, 0, s.width, -s.height),
        i.restore()
    },
    _beginWithClearForWebGL: function(e, t, n, r, i, s, o) {
        this.begin();
        var u = cc.renderContext,
        a = [0, 0, 0, 0],
        f = 0,
        l = 0;
        o & u.COLOR_BUFFER_BIT && (a = u.getParameter(u.COLOR_CLEAR_VALUE), u.clearColor(e, t, n, r)),
        o & u.DEPTH_BUFFER_BIT && (f = u.getParameter(u.DEPTH_CLEAR_VALUE), u.clearDepth(i)),
        o & u.STENCIL_BUFFER_BIT && (l = u.getParameter(u.STENCIL_CLEAR_VALUE), u.clearStencil(s)),
        u.clear(o),
        o & u.COLOR_BUFFER_BIT && u.clearColor(a[0], a[1], a[2], a[3]),
        o & u.DEPTH_BUFFER_BIT && u.clearDepth(f),
        o & u.STENCIL_BUFFER_BIT && u.clearStencil(l)
    },
    end: null,
    _endForCanvas: function() {
        cc.renderContext = cc.mainRenderContextBackup,
        cc.EGLView.getInstance()._resetScale()
    },
    _endForWebGL: function() {
        var e = cc.renderContext,
        t = cc.Director.getInstance();
        e.bindFramebuffer(e.FRAMEBUFFER, this._oldFBO),
        t.setViewport(),
        cc.kmGLMatrixMode(cc.KM_GL_PROJECTION),
        cc.kmGLPopMatrix(),
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW),
        cc.kmGLPopMatrix()
    },
    clear: function(e, t, n, r) {
        this.beginWithClear(e, t, n, r),
        this.end()
    },
    clearRect: null,
    _clearRectForCanvas: function(e, t, n, r) {
        this._cacheContext.clearRect(e, t, n, -r)
    },
    _clearRectForWebGL: function(e, t, n, r) {},
    clearDepth: null,
    _clearDepthForCanvas: function(e) {
        cc.log("clearDepth isn't supported on Cocos2d-Html5")
    },
    _clearDepthForWebGL: function(e) {
        this.begin();
        var t = cc.renderContext,
        n = t.getParameter(t.DEPTH_CLEAR_VALUE);
        t.clearDepth(e),
        t.clear(t.DEPTH_BUFFER_BIT),
        t.clearDepth(n),
        this.end()
    },
    clearStencil: null,
    _clearStencilForCanvas: function(e) {
        cc.log("clearDepth isn't supported on Cocos2d-Html5")
    },
    _clearStencilForWebGL: function(e) {
        var t = cc.renderContext,
        n = t.getParameter(t.STENCIL_CLEAR_VALUE);
        t.clearStencil(e),
        t.clear(t.STENCIL_BUFFER_BIT),
        t.clearStencil(n)
    },
    visit: null,
    _visitForCanvas: function(e) {
        this._visible && (e = e || cc.renderContext, e.save(), this.draw(e), this.transform(e), this._sprite.visit(), e.restore(), this._orderOfArrival = 0)
    },
    _visitForWebGL: function(e) {
        if (this._visible) {
            cc.kmGLPushMatrix();
            var t = this._grid;
            t && t.isActive() && (t.beforeDraw(), this.transformAncestors()),
            this.transform(e),
            this._sprite.visit(),
            this.draw(e),
            t && t.isActive() && t.afterDraw(this),
            cc.kmGLPopMatrix(),
            this._orderOfArrival = 0
        }
    },
    draw: null,
    _drawForCanvas: function(e) {
        e = e || cc.renderContext;
        if (this._autoDraw) {
            this.begin();
            if (this._clearFlags) {
                var t = this._cacheCanvas;
                e.save(),
                e.fillStyle = this._clearColorStr,
                e.clearRect(0, 0, t.width, -t.height),
                e.fillRect(0, 0, t.width, -t.height),
                e.restore()
            }
            this.sortAllChildren(),
            e = this._children;
            for (var t = e.length,
            n = this._sprite,
            r = 0; r < t; r++) {
                var i = e[r];
                i != n && i.visit()
            }
            this.end()
        }
    },
    _drawForWebGL: function(e) {
        e = cc.renderContext;
        if (this._autoDraw) {
            this.begin();
            var t = this._clearFlags;
            if (t) {
                var n = [0, 0, 0, 0],
                r = 0,
                i = 0;
                t & e.COLOR_BUFFER_BIT && (n = e.getParameter(e.COLOR_CLEAR_VALUE), e.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a)),
                t & e.DEPTH_BUFFER_BIT && (r = e.getParameter(e.DEPTH_CLEAR_VALUE), e.clearDepth(this._clearDepth)),
                t & e.STENCIL_BUFFER_BIT && (i = e.getParameter(e.STENCIL_CLEAR_VALUE), e.clearStencil(this._clearStencil)),
                e.clear(t),
                t & e.COLOR_BUFFER_BIT && e.clearColor(n[0], n[1], n[2], n[3]),
                t & e.DEPTH_BUFFER_BIT && e.clearDepth(r),
                t & e.STENCIL_BUFFER_BIT && e.clearStencil(i)
            }
            this.sortAllChildren(),
            e = this._children;
            for (t = 0; t < e.length; t++) n = e[t],
            n != this._sprite && n.visit();
            this.end()
        }
    },
    newCCImage: null,
    _newCCImageForCanvas: function(e) {
        return cc.log("saveToFile isn't supported on Cocos2d-Html5"),
        null
    },
    _newCCImageForWebGL: function(e) {
        cc.log("saveToFile isn't supported on Cocos2d-Html5"),
        cc.Assert(this._pixelFormat == cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888, "only RGBA8888 can be saved as image");
        if (!this._texture) return null;
        var t = this._texture.getContentSizeInPixels();
        e = t.width;
        var t = t.height,
        n = new cc.Image,
        r = cc.renderContext,
        i = new Uint8Array(e * t * 4);
        if (!i) return n;
        var s = new Uint8Array(e * t * 4);
        if (!s) return null;
        this.begin(),
        r.pixelStorei(r.PACK_ALIGNMENT, 1),
        r.readPixels(0, 0, e, t, r.RGBA, r.UNSIGNED_BYTE, s),
        this.end();
        for (r = 0; r < t; ++r) this._memcpy(i, r * e * 4, s, (t - r - 1) * e * 4, 4 * e);
        return n.initWithImageData(i, e * t * 4, cc.FMT_RAWDATA, e, t, 8),
        n
    },
    _memcpy: function(e, t, n, r, i) {
        for (var s = 0; s < i; s++) e[t + s] = n[r + s]
    },
    saveToFile: function(e, t) {
        cc.log("saveToFile isn't supported on Cocos2d-Html5")
    },
    listenToBackground: function(e) {
        cc.log("listenToBackground isn't supported on Cocos2d-Html5")
    },
    listenToForeground: function(e) {
        cc.log("listenToForeground isn't supported on Cocos2d-Html5")
    },
    getClearFlags: function() {
        return this._clearFlags
    },
    setClearFlags: function(e) {
        this._clearFlags = e
    },
    getClearColor: function() {
        return this._clearColor
    },
    setClearColor: null,
    _setClearColorForCanvas: function(e) {
        var t = this._clearColor;
        t.r = e.r,
        t.g = e.g,
        t.b = e.b,
        t.a = e.a,
        this._clearColorStr = "rgba(" + (0 | 255 * e.r) + "," + (0 | 255 * e.g) + "," + (0 | 255 * e.b) + "," + e.a + ")"
    },
    _setClearColorForWebGL: function(e) {
        var t = this._clearColor;
        t.r = e.r,
        t.g = e.g,
        t.b = e.b,
        t.a = e.a
    },
    getClearDepth: function() {
        return this._clearDepth
    },
    setClearDepth: function(e) {
        this._clearDepth = e
    },
    getClearStencil: function() {
        return this._clearStencil
    },
    setClearStencil: function(e) {
        this._clearStencil = e
    },
    isAutoDraw: function() {
        return this._autoDraw
    },
    setAutoDraw: function(e) {
        this._autoDraw = e
    }
}),
cc.Browser.supportWebGL ? (cc.RenderTexture.prototype.ctor = cc.RenderTexture.prototype._ctorForWebGL, cc.RenderTexture.prototype.cleanup = cc.RenderTexture.prototype._cleanupForWebGL, cc.RenderTexture.prototype.initWithWidthAndHeight = cc.RenderTexture.prototype._initWithWidthAndHeightForWebGL, cc.RenderTexture.prototype.begin = cc.RenderTexture.prototype._beginForWebGL, cc.RenderTexture.prototype._beginWithClear = cc.RenderTexture.prototype._beginWithClearForWebGL, cc.RenderTexture.prototype.end = cc.RenderTexture.prototype._endForWebGL, cc.RenderTexture.prototype.clearRect = cc.RenderTexture.prototype._clearRectForWebGL, cc.RenderTexture.prototype.clearDepth = cc.RenderTexture.prototype._clearDepthForWebGL, cc.RenderTexture.prototype.clearStencil = cc.RenderTexture.prototype._clearStencilForWebGL, cc.RenderTexture.prototype.visit = cc.RenderTexture.prototype._visitForWebGL, cc.RenderTexture.prototype.draw = cc.RenderTexture.prototype._drawForWebGL, cc.RenderTexture.prototype.newCCImage = cc.RenderTexture.prototype._newCCImageForWebGL, cc.RenderTexture.prototype.setClearColor = cc.RenderTexture.prototype._setClearColorForWebGL) : (cc.RenderTexture.prototype.ctor = cc.RenderTexture.prototype._ctorForCanvas, cc.RenderTexture.prototype.cleanup = cc.RenderTexture.prototype._cleanupForCanvas, cc.RenderTexture.prototype.initWithWidthAndHeight = cc.RenderTexture.prototype._initWithWidthAndHeightForCanvas, cc.RenderTexture.prototype.begin = cc.RenderTexture.prototype._beginForCanvas, cc.RenderTexture.prototype._beginWithClear = cc.RenderTexture.prototype._beginWithClearForCanvas, cc.RenderTexture.prototype.end = cc.RenderTexture.prototype._endForCanvas, cc.RenderTexture.prototype.clearRect = cc.RenderTexture.prototype._clearRectForCanvas, cc.RenderTexture.prototype.clearDepth = cc.RenderTexture.prototype._clearDepthForCanvas, cc.RenderTexture.prototype.clearStencil = cc.RenderTexture.prototype._clearStencilForCanvas, cc.RenderTexture.prototype.visit = cc.RenderTexture.prototype._visitForCanvas, cc.RenderTexture.prototype.draw = cc.RenderTexture.prototype._drawForCanvas, cc.RenderTexture.prototype.newCCImage = cc.RenderTexture.prototype._newCCImageForCanvas, cc.RenderTexture.prototype.setClearColor = cc.RenderTexture.prototype._setClearColorForCanvas),
cc.RenderTexture.create = function(e, t, n, r) {
    n = n || cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888,
    r = r || 0;
    var i = new cc.RenderTexture;
    return i && i.initWithWidthAndHeight(e, t, n, r) ? i: null
},
cc.ACTION_TAG_INVALID = -1,
cc.Action = cc.Class.extend({
    _originalTarget: null,
    _target: null,
    _tag: cc.ACTION_TAG_INVALID,
    ctor: function() {
        this._target = this._originalTarget = null,
        this._tag = cc.ACTION_TAG_INVALID
    },
    description: function() {
        return "<cc.Action | Tag = " + this._tag + ">"
    },
    copy: function() {
        return cc.clone(this)
    },
    clone: function() {
        var e = new cc.Action;
        return e._originalTarget = null,
        e._target = null,
        e._tag = this._tag,
        e
    },
    isDone: function() {
        return ! 0
    },
    startWithTarget: function(e) {
        this._target = this._originalTarget = e
    },
    stop: function() {
        this._target = null
    },
    step: function(e) {
        cc.log("[Action step]. override me")
    },
    update: function(e) {
        cc.log("[Action update]. override me")
    },
    getTarget: function() {
        return this._target
    },
    setTarget: function(e) {
        this._target = e
    },
    getOriginalTarget: function() {
        return this._originalTarget
    },
    setOriginalTarget: function(e) {
        this._originalTarget = e
    },
    getTag: function() {
        return this._tag
    },
    setTag: function(e) {
        this._tag = e
    },
    retain: function() {},
    release: function() {}
}),
cc.Action.create = function() {
    return new cc.Action
},
cc.FiniteTimeAction = cc.Action.extend({
    _duration: 0,
    ctor: function() {
        cc.Action.prototype.ctor.call(this),
        this._duration = 0
    },
    getDuration: function() {
        return this._duration
    },
    setDuration: function(e) {
        this._duration = e
    },
    reverse: function() {
        return cc.log("cocos2d: FiniteTimeAction#reverse: Implement me"),
        null
    },
    clone: function() {
        return new cc.FiniteTimeAction
    }
}),
cc.Speed = cc.Action.extend({
    _speed: 0,
    _innerAction: null,
    ctor: function() {
        cc.Action.prototype.ctor.call(this),
        this._speed = 0,
        this._innerAction = null
    },
    getSpeed: function() {
        return this._speed
    },
    setSpeed: function(e) {
        this._speed = e
    },
    initWithAction: function(e, t) {
        if (!e) throw "cc.Speed.initWithAction(): action must be non nil";
        return this._innerAction = e,
        this._speed = t,
        !0
    },
    clone: function() {
        var e = new cc.Speed;
        return e.initWithAction(this._innerAction.clone(), this._speed),
        e
    },
    startWithTarget: function(e) {
        cc.Action.prototype.startWithTarget.call(this, e),
        this._innerAction.startWithTarget(e)
    },
    stop: function() {
        this._innerAction.stop(),
        cc.Action.prototype.stop.call(this)
    },
    step: function(e) {
        this._innerAction.step(e * this._speed)
    },
    isDone: function() {
        return this._innerAction.isDone()
    },
    reverse: function() {
        return cc.Speed.create(this._innerAction.reverse(), this._speed)
    },
    setInnerAction: function(e) {
        this._innerAction != e && (this._innerAction = e)
    },
    getInnerAction: function() {
        return this._innerAction
    }
}),
cc.Speed.create = function(e, t) {
    var n = new cc.Speed;
    return n && n.initWithAction(e, t) ? n: null
},
cc.Follow = cc.Action.extend({
    _followedNode: null,
    _boundarySet: !1,
    _boundaryFullyCovered: !1,
    _halfScreenSize: null,
    _fullScreenSize: null,
    leftBoundary: 0,
    rightBoundary: 0,
    topBoundary: 0,
    bottomBoundary: 0,
    _worldRect: null,
    ctor: function() {
        cc.Action.prototype.ctor.call(this),
        this._followedNode = null,
        this._boundaryFullyCovered = this._boundarySet = !1,
        this._fullScreenSize = this._halfScreenSize = null,
        this.bottomBoundary = this.topBoundary = this.rightBoundary = this.leftBoundary = 0,
        this._worldRect = cc.RectZero()
    },
    clone: function() {
        var e = new cc.Follow,
        t = this._worldRect,
        t = new cc.Rect(t.x, t.y, t.width, t.height);
        return e.initWithTarget(this._followedNode, t),
        e
    },
    isBoundarySet: function() {
        return this._boundarySet
    },
    setBoudarySet: function(e) {
        this._boundarySet = e
    },
    initWithTarget: function(e, t) {
        if (!e) throw "cc.Follow.initWithAction(): followedNode must be non nil";
        t = t || cc.RectZero(),
        this._followedNode = e,
        this._worldRect = t,
        this._boundarySet = !cc._rectEqualToZero(t),
        this._boundaryFullyCovered = !1;
        var n = cc.Director.getInstance().getWinSize();
        return this._fullScreenSize = cc.p(n.width, n.height),
        this._halfScreenSize = cc.pMult(this._fullScreenSize, .5),
        this._boundarySet && (this.leftBoundary = -(t.x + t.width - this._fullScreenSize.x), this.rightBoundary = -t.x, this.topBoundary = -t.y, this.bottomBoundary = -(t.y + t.height - this._fullScreenSize.y), this.rightBoundary < this.leftBoundary && (this.rightBoundary = this.leftBoundary = (this.leftBoundary + this.rightBoundary) / 2), this.topBoundary < this.bottomBoundary && (this.topBoundary = this.bottomBoundary = (this.topBoundary + this.bottomBoundary) / 2), this.topBoundary == this.bottomBoundary && this.leftBoundary == this.rightBoundary && (this._boundaryFullyCovered = !0)),
        !0
    },
    step: function(e) {
        e = this._followedNode.getPositionX();
        var t = this._followedNode.getPositionY();
        e = this._halfScreenSize.x - e,
        t = this._halfScreenSize.y - t,
        this._boundarySet ? this._boundaryFullyCovered || this._target.setPosition(cc.clampf(e, this.leftBoundary, this.rightBoundary), cc.clampf(t, this.bottomBoundary, this.topBoundary)) : this._target.setPosition(e, t)
    },
    isDone: function() {
        return ! this._followedNode.isRunning()
    },
    stop: function() {
        this._target = null,
        cc.Action.prototype.stop.call(this)
    }
}),
cc.Follow.create = function(e, t) {
    t = t || new cc.RectZero;
    var n = new cc.Follow;
    return null != t && n && n.initWithTarget(e, t) || n && n.initWithTarget(e) ? n: null
},
cc.ActionInterval = cc.FiniteTimeAction.extend({
    _elapsed: 0,
    _firstTick: !1,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._elapsed = 0,
        this._firstTick = !1
    },
    getElapsed: function() {
        return this._elapsed
    },
    initWithDuration: function(e) {
        return this._duration = 0 === e ? cc.FLT_EPSILON: e,
        this._elapsed = 0,
        this._firstTick = !0
    },
    isDone: function() {
        return this._elapsed >= this._duration
    },
    clone: function() {
        var e = new cc.ActionInterval;
        return e.initWithDuration(this._duration),
        e
    },
    step: function(e) {
        this._firstTick ? (this._firstTick = !1, this._elapsed = 0) : this._elapsed += e,
        e = this._elapsed / (1.192092896e-7 < this._duration ? this._duration: 1.192092896e-7),
        e = 1 > e ? e: 1,
        this.update(0 < e ? e: 0)
    },
    startWithTarget: function(e) {
        cc.Action.prototype.startWithTarget.call(this, e),
        this._elapsed = 0,
        this._firstTick = !0
    },
    reverse: function() {
        return cc.log("cc.IntervalAction: reverse not implemented."),
        null
    },
    setAmplitudeRate: function(e) {
        cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
    },
    getAmplitudeRate: function() {
        cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.")
    }
}),
cc.ActionInterval.create = function(e) {
    var t = new cc.ActionInterval;
    return t.initWithDuration(e),
    t
},
cc.Sequence = cc.ActionInterval.extend({
    _actions: null,
    _split: null,
    _last: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._actions = [],
        this._split = null,
        this._last = 0
    },
    initWithTwoActions: function(e, t) {
        if (!e || !t) throw "cc.Sequence.initWithTwoActions(): arguments must all be non nil";
        var n = e.getDuration() + t.getDuration();
        return this.initWithDuration(n),
        this._actions[0] = e,
        this._actions[1] = t,
        !0
    },
    clone: function() {
        var e = new cc.Sequence;
        return e.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._split = this._actions[0].getDuration() / this._duration,
        this._last = -1
    },
    stop: function() { - 1 !== this._last && this._actions[this._last].stop(),
        cc.Action.prototype.stop.call(this)
    },
    update: function(e) {
        var t = 0,
        n = this._split,
        r = this._actions,
        i = this._last;
        e < n ? (e = 0 !== n ? e / n: 1, 0 === t && 1 === i && (r[1].update(0), r[1].stop())) : (t = 1, e = 1 === n ? 1 : (e - n) / (1 - n), -1 === i && (r[0].startWithTarget(this._target), r[0].update(1), r[0].stop()), i || (r[0].update(1), r[0].stop())),
        i === t && r[t].isDone() || (i !== t && r[t].startWithTarget(this._target), r[t].update(e), this._last = t)
    },
    reverse: function() {
        return cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse())
    },
    copy: function() {
        return this.clone()
    }
}),
cc.Sequence.create = function(e) {
    var t = e instanceof Array ? e: arguments;
    0 < t.length && null == t[t.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    for (var n = t[0], r = 1; r < t.length; r++) t[r] && (n = cc.Sequence._actionOneTwo(n, t[r]));
    return n
},
cc.Sequence._actionOneTwo = function(e, t) {
    var n = new cc.Sequence;
    return n.initWithTwoActions(e, t),
    n
},
cc.Repeat = cc.ActionInterval.extend({
    _times: 0,
    _total: 0,
    _nextDt: 0,
    _actionInstant: !1,
    _innerAction: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._nextDt = this._total = this._times = 0,
        this._actionInstant = !1,
        this._innerAction = null
    },
    initWithAction: function(e, t) {
        var n = e.getDuration() * t;
        return this.initWithDuration(n) ? (this._times = t, this._innerAction = e, e instanceof cc.ActionInstant && (this._times -= 1), this._total = 0, !0) : !1
    },
    clone: function() {
        var e = new cc.Repeat;
        return e.initWithAction(this._innerAction.clone(), this._times),
        e
    },
    startWithTarget: function(e) {
        this._total = 0,
        this._nextDt = this._innerAction.getDuration() / this._duration,
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._innerAction.startWithTarget(e)
    },
    stop: function() {
        this._innerAction.stop(),
        cc.Action.prototype.stop.call(this)
    },
    update: function(e) {
        var t = this._innerAction,
        n = this._duration,
        r = this._times,
        i = this._nextDt;
        if (e >= i) {
            for (; e > i && this._total < r;) t.update(1),
            this._total++,
            t.stop(),
            t.startWithTarget(this._target),
            this._nextDt = i += t.getDuration() / n;
            1 <= e && this._total < r && this._total++,
            this._actionInstant && (this._total == r ? (t.update(1), t.stop()) : t.update(e - (i - t.getDuration() / n)))
        } else t.update(e * r % 1)
    },
    isDone: function() {
        return this._total == this._times
    },
    reverse: function() {
        return cc.Repeat.create(this._innerAction.reverse(), this._times)
    },
    setInnerAction: function(e) {
        this._innerAction != e && (this._innerAction = e)
    },
    getInnerAction: function() {
        return this._innerAction
    }
}),
cc.Repeat.create = function(e, t) {
    var n = new cc.Repeat;
    return n.initWithAction(e, t),
    n
},
cc.RepeatForever = cc.ActionInterval.extend({
    _innerAction: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._innerAction = null
    },
    initWithAction: function(e) {
        if (!e) throw "cc.RepeatForever.initWithAction(): action must be non null";
        return this._innerAction = e,
        !0
    },
    clone: function() {
        var e = new cc.RepeatForever;
        return e.initWithAction(this._innerAction.clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._innerAction.startWithTarget(e)
    },
    step: function(e) {
        var t = this._innerAction;
        t.step(e),
        t.isDone() && (t.startWithTarget(this._target), t.step(t.getElapsed() - t.getDuration()))
    },
    isDone: function() {
        return ! 1
    },
    reverse: function() {
        return cc.RepeatForever.create(this._innerAction.reverse())
    },
    setInnerAction: function(e) {
        this._innerAction != e && (this._innerAction = e)
    },
    getInnerAction: function() {
        return this._innerAction
    }
}),
cc.RepeatForever.create = function(e) {
    var t = new cc.RepeatForever;
    return t && t.initWithAction(e) ? t: null
},
cc.Spawn = cc.ActionInterval.extend({
    _one: null,
    _two: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._two = this._one = null
    },
    initWithTwoActions: function(e, t) {
        if (!e || !t) throw "cc.Spawn.initWithTwoActions(): arguments must all be non null";
        var n = !1,
        r = e.getDuration(),
        i = t.getDuration();
        return this.initWithDuration(Math.max(r, i)) && (this._one = e, this._two = t, r > i ? this._two = cc.Sequence._actionOneTwo(t, cc.DelayTime.create(r - i)) : r < i && (this._one = cc.Sequence._actionOneTwo(e, cc.DelayTime.create(i - r))), n = !0),
        n
    },
    clone: function() {
        var e = new cc.Spawn;
        return e.initWithTwoActions(this._one.clone(), this._two.clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._one.startWithTarget(e),
        this._two.startWithTarget(e)
    },
    stop: function() {
        this._one.stop(),
        this._two.stop(),
        cc.Action.prototype.stop.call(this)
    },
    update: function(e) {
        this._one && this._one.update(e),
        this._two && this._two.update(e)
    },
    reverse: function() {
        return cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse())
    }
}),
cc.Spawn.create = function(e) {
    var t = e instanceof Array ? e: arguments;
    0 < t.length && null == t[t.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    for (var n = t[0], r = 1; r < t.length; r++) null != t[r] && (n = this._actionOneTwo(n, t[r]));
    return n
},
cc.Spawn._actionOneTwo = function(e, t) {
    var n = new cc.Spawn;
    return n.initWithTwoActions(e, t),
    n
},
cc.RotateTo = cc.ActionInterval.extend({
    _dstAngleX: 0,
    _startAngleX: 0,
    _diffAngleX: 0,
    _dstAngleY: 0,
    _startAngleY: 0,
    _diffAngleY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._diffAngleY = this._startAngleY = this._dstAngleY = this._diffAngleX = this._startAngleX = this._dstAngleX = 0
    },
    initWithDuration: function(e, t, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._dstAngleX = t || 0, this._dstAngleY = n || this._dstAngleX, !0) : !1
    },
    clone: function() {
        var e = new cc.RotateTo;
        return e.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e);
        var t = e.getRotationX() % 360,
        n = this._dstAngleX - t;
        180 < n && (n -= 360),
        -180 > n && (n += 360),
        this._startAngleX = t,
        this._diffAngleX = n,
        this._startAngleY = e.getRotationY() % 360,
        e = this._dstAngleY - this._startAngleY,
        180 < e && (e -= 360),
        -180 > e && (e += 360),
        this._diffAngleY = e
    },
    reverse: function() {
        cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
    },
    update: function(e) {
        this._target && (this._target.setRotationX(this._startAngleX + this._diffAngleX * e), this._target.setRotationY(this._startAngleY + this._diffAngleY * e))
    }
}),
cc.RotateTo.create = function(e, t, n) {
    var r = new cc.RotateTo;
    return r.initWithDuration(e, t, n),
    r
},
cc.RotateBy = cc.ActionInterval.extend({
    _angleX: 0,
    _startAngleX: 0,
    _angleY: 0,
    _startAngleY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._startAngleY = this._angleY = this._startAngleX = this._angleX = 0
    },
    initWithDuration: function(e, t, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._angleX = t || 0, this._angleY = n || this._angleX, !0) : !1
    },
    clone: function() {
        var e = new cc.RotateBy;
        return e.initWithDuration(this._duration, this._angleX, this._angleY),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._startAngleX = e.getRotationX(),
        this._startAngleY = e.getRotationY()
    },
    update: function(e) {
        this._target && (this._target.setRotationX(this._startAngleX + this._angleX * e), this._target.setRotationY(this._startAngleY + this._angleY * e))
    },
    reverse: function() {
        return cc.RotateBy.create(this._duration, -this._angleX, -this._angleY)
    }
}),
cc.RotateBy.create = function(e, t, n) {
    var r = new cc.RotateBy;
    return r.initWithDuration(e, t, n),
    r
},
cc.MoveBy = cc.ActionInterval.extend({
    _positionDelta: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._positionDelta = cc.p(0, 0),
        this._startPosition = cc.p(0, 0),
        this._previousPosition = cc.p(0, 0)
    },
    initWithDuration: function(e, t) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._positionDelta.x = t.x, this._positionDelta.y = t.y, !0) : !1
    },
    clone: function() {
        var e = new cc.MoveBy;
        return e.initWithDuration(this._duration, this._positionDelta),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e);
        var t = e.getPositionX();
        e = e.getPositionY(),
        this._previousPosition.x = t,
        this._previousPosition.y = e,
        this._startPosition.x = t,
        this._startPosition.y = e
    },
    update: function(e) {
        if (this._target) {
            var t = this._positionDelta.x * e;
            e *= this._positionDelta.y;
            var n = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var r = this._target.getPositionX(),
                i = this._target.getPositionY(),
                s = this._previousPosition;
                n.x = n.x + r - s.x,
                n.y = n.y + i - s.y,
                t += n.x,
                e += n.y,
                this._target.setPosition(t, e),
                s.x = t,
                s.y = e
            } else this._target.setPosition(n.x + t, n.y + e)
        }
    },
    reverse: function() {
        return cc.MoveBy.create(this._duration, cc.p( - this._positionDelta.x, -this._positionDelta.y))
    }
}),
cc.MoveBy.create = function(e, t) {
    var n = new cc.MoveBy;
    return n.initWithDuration(e, t),
    n
},
cc.MoveTo = cc.MoveBy.extend({
    _endPosition: null,
    ctor: function() {
        cc.MoveBy.prototype.ctor.call(this),
        this._endPosition = cc.p(0, 0)
    },
    initWithDuration: function(e, t) {
        return cc.MoveBy.prototype.initWithDuration.call(this, e, t) ? (this._endPosition.x = t.x, this._endPosition.y = t.y, !0) : !1
    },
    clone: function() {
        var e = new cc.MoveTo;
        return e.initWithDuration(this._duration, this._endPosition),
        e
    },
    startWithTarget: function(e) {
        cc.MoveBy.prototype.startWithTarget.call(this, e),
        this._positionDelta.x = this._endPosition.x - e.getPositionX(),
        this._positionDelta.y = this._endPosition.y - e.getPositionY()
    }
}),
cc.MoveTo.create = function(e, t) {
    var n = new cc.MoveTo;
    return n.initWithDuration(e, t),
    n
},
cc.SkewTo = cc.ActionInterval.extend({
    _skewX: 0,
    _skewY: 0,
    _startSkewX: 0,
    _startSkewY: 0,
    _endSkewX: 0,
    _endSkewY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._deltaY = this._deltaX = this._endSkewY = this._endSkewX = this._startSkewY = this._startSkewX = this._skewY = this._skewX = 0
    },
    initWithDuration: function(e, t, n) {
        var r = !1;
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) && (this._endSkewX = t, this._endSkewY = n, r = !0),
        r
    },
    clone: function() {
        var e = new cc.SkewTo;
        return e.initWithDuration(this._duration, this._endSkewX, this._endSkewY),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._startSkewX = e.getSkewX() % 180,
        this._deltaX = this._endSkewX - this._startSkewX,
        180 < this._deltaX && (this._deltaX -= 360),
        -180 > this._deltaX && (this._deltaX += 360),
        this._startSkewY = e.getSkewY() % 360,
        this._deltaY = this._endSkewY - this._startSkewY,
        180 < this._deltaY && (this._deltaY -= 360),
        -180 > this._deltaY && (this._deltaY += 360)
    },
    update: function(e) {
        this._target.setSkewX(this._startSkewX + this._deltaX * e),
        this._target.setSkewY(this._startSkewY + this._deltaY * e)
    }
}),
cc.SkewTo.create = function(e, t, n) {
    var r = new cc.SkewTo;
    return r && r.initWithDuration(e, t, n),
    r
},
cc.SkewBy = cc.SkewTo.extend({
    initWithDuration: function(e, t, n) {
        var r = !1;
        return cc.SkewTo.prototype.initWithDuration.call(this, e, t, n) && (this._skewX = t, this._skewY = n, r = !0),
        r
    },
    clone: function() {
        var e = new cc.SkewBy;
        return e.initWithDuration(this._duration, this._skewX, this._skewY),
        e
    },
    startWithTarget: function(e) {
        cc.SkewTo.prototype.startWithTarget.call(this, e),
        this._deltaX = this._skewX,
        this._deltaY = this._skewY,
        this._endSkewX = this._startSkewX + this._deltaX,
        this._endSkewY = this._startSkewY + this._deltaY
    },
    reverse: function() {
        return cc.SkewBy.create(this._duration, -this._skewX, -this._skewY)
    }
}),
cc.SkewBy.create = function(e, t, n) {
    var r = new cc.SkewBy;
    return r && r.initWithDuration(e, t, n),
    r
},
cc.JumpBy = cc.ActionInterval.extend({
    _startPosition: null,
    _delta: null,
    _height: 0,
    _jumps: 0,
    _previousPosition: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._startPosition = cc.p(0, 0),
        this._previousPosition = cc.p(0, 0),
        this._delta = cc.p(0, 0),
        this._jumps = this._height = 0
    },
    initWithDuration: function(e, t, n, r) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._delta.x = t.x, this._delta.y = t.y, this._height = n, this._jumps = r, !0) : !1
    },
    clone: function() {
        var e = new cc.JumpBy;
        return e.initWithDuration(this._duration, this._delta, this._height, this._jumps),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e);
        var t = e.getPositionX();
        e = e.getPositionY(),
        this._previousPosition.x = t,
        this._previousPosition.y = e,
        this._startPosition.x = t,
        this._startPosition.y = e
    },
    update: function(e) {
        if (this._target) {
            var t = e * this._jumps % 1,
            t = 4 * this._height * t * (1 - t),
            t = t + this._delta.y * e;
            e *= this._delta.x;
            var n = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var r = this._target.getPositionX(),
                i = this._target.getPositionY(),
                s = this._previousPosition;
                n.x = n.x + r - s.x,
                n.y = n.y + i - s.y,
                e += n.x,
                t += n.y,
                this._target.setPosition(e, t),
                s.x = e,
                s.y = t
            } else this._target.setPosition(n.x + e, n.y + t)
        }
    },
    reverse: function() {
        return cc.JumpBy.create(this._duration, cc.p( - this._delta.x, -this._delta.y), this._height, this._jumps)
    }
}),
cc.JumpBy.create = function(e, t, n, r) {
    var i = new cc.JumpBy;
    return i.initWithDuration(e, t, n, r),
    i
},
cc.JumpTo = cc.JumpBy.extend({
    startWithTarget: function(e) {
        cc.JumpBy.prototype.startWithTarget.call(this, e),
        this._delta.x -= this._startPosition.x,
        this._delta.y -= this._startPosition.y
    },
    clone: function() {
        var e = new cc.JumpTo;
        return e.initWithDuration(this._duration, this._delta, this._height, this._jumps),
        e
    }
}),
cc.JumpTo.create = function(e, t, n, r) {
    var i = new cc.JumpTo;
    return i.initWithDuration(e, t, n, r),
    i
},
cc.bezierAt = function(e, t, n, r, i) {
    return Math.pow(1 - i, 3) * e + 3 * i * Math.pow(1 - i, 2) * t + 3 * Math.pow(i, 2) * (1 - i) * n + Math.pow(i, 3) * r
},
cc.BezierBy = cc.ActionInterval.extend({
    _config: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._config = [],
        this._startPosition = cc.p(0, 0),
        this._previousPosition = cc.p(0, 0)
    },
    initWithDuration: function(e, t) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._config = t, !0) : !1
    },
    clone: function() {
        for (var e = new cc.BezierBy,
        t = [], n = 0; n < this._config.length; n++) {
            var r = this._config[n];
            t.push(cc.p(r.x, r.y))
        }
        return e.initWithDuration(this._duration, t),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e);
        var t = e.getPositionX();
        e = e.getPositionY(),
        this._previousPosition.x = t,
        this._previousPosition.y = e,
        this._startPosition.x = t,
        this._startPosition.y = e
    },
    update: function(e) {
        if (this._target) {
            var t = this._config,
            n = t[0].y,
            r = t[1].y,
            i = t[2].y,
            t = cc.bezierAt(0, t[0].x, t[1].x, t[2].x, e);
            e = cc.bezierAt(0, n, r, i, e),
            n = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var r = this._target.getPositionX(),
                i = this._target.getPositionY(),
                s = this._previousPosition;
                n.x = n.x + r - s.x,
                n.y = n.y + i - s.y,
                t += n.x,
                e += n.y,
                this._target.setPosition(t, e),
                s.x = t,
                s.y = e
            } else this._target.setPosition(n.x + t, n.y + e)
        }
    },
    reverse: function() {
        var e = this._config,
        e = [cc.pAdd(e[1], cc.pNeg(e[2])), cc.pAdd(e[0], cc.pNeg(e[2])), cc.pNeg(e[2])];
        return cc.BezierBy.create(this._duration, e)
    }
}),
cc.BezierBy.create = function(e, t) {
    var n = new cc.BezierBy;
    return n.initWithDuration(e, t),
    n
},
cc.BezierTo = cc.BezierBy.extend({
    _toConfig: null,
    ctor: function() {
        cc.BezierBy.prototype.ctor.call(this),
        this._toConfig = []
    },
    initWithDuration: function(e, t) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._toConfig = t, !0) : !1
    },
    clone: function() {
        var e = new cc.BezierTo;
        return e.initWithDuration(this._duration, this._toConfig),
        e
    },
    startWithTarget: function(e) {
        cc.BezierBy.prototype.startWithTarget.call(this, e),
        e = this._startPosition;
        var t = this._toConfig,
        n = this._config;
        n[0] = cc.pSub(t[0], e),
        n[1] = cc.pSub(t[1], e),
        n[2] = cc.pSub(t[2], e)
    }
}),
cc.BezierTo.create = function(e, t) {
    var n = new cc.BezierTo;
    return n.initWithDuration(e, t),
    n
},
cc.ScaleTo = cc.ActionInterval.extend({
    _scaleX: 1,
    _scaleY: 1,
    _startScaleX: 1,
    _startScaleY: 1,
    _endScaleX: 0,
    _endScaleY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._startScaleY = this._startScaleX = this._scaleY = this._scaleX = 1,
        this._deltaY = this._deltaX = this._endScaleY = this._endScaleX = 0
    },
    initWithDuration: function(e, t, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._endScaleX = t, this._endScaleY = null != n ? n: t, !0) : !1
    },
    clone: function() {
        var e = new cc.ScaleTo;
        return e.initWithDuration(this._duration, this._endScaleX, this._endScaleY),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._startScaleX = e.getScaleX(),
        this._startScaleY = e.getScaleY(),
        this._deltaX = this._endScaleX - this._startScaleX,
        this._deltaY = this._endScaleY - this._startScaleY
    },
    update: function(e) {
        this._target && this._target.setScale(this._startScaleX + this._deltaX * e, this._startScaleY + this._deltaY * e)
    }
}),
cc.ScaleTo.create = function(e, t, n) {
    var r = new cc.ScaleTo;
    return r.initWithDuration(e, t, n),
    r
},
cc.ScaleBy = cc.ScaleTo.extend({
    startWithTarget: function(e) {
        cc.ScaleTo.prototype.startWithTarget.call(this, e),
        this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX,
        this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY
    },
    reverse: function() {
        return cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY)
    },
    clone: function() {
        var e = new cc.ScaleBy;
        return e.initWithDuration(this._duration, this._endScaleX, this._endScaleY),
        e
    }
}),
cc.ScaleBy.create = function(e, t, n) {
    var r = new cc.ScaleBy;
    return r.initWithDuration(e, t, n),
    r
},
cc.Blink = cc.ActionInterval.extend({
    _times: 0,
    _originalState: !1,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._times = 0,
        this._originalState = !1
    },
    initWithDuration: function(e, t) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._times = t, !0) : !1
    },
    clone: function() {
        var e = new cc.Blink;
        return e.initWithDuration(this._duration, this._times),
        e
    },
    update: function(e) {
        if (this._target && !this.isDone()) {
            var t = 1 / this._times;
            this._target.setVisible(e % t > t / 2)
        }
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._originalState = e.isVisible()
    },
    stop: function() {
        this._target.setVisible(this._originalState),
        cc.ActionInterval.prototype.stop.call(this)
    },
    reverse: function() {
        return cc.Blink.create(this._duration, this._times)
    }
}),
cc.Blink.create = function(e, t) {
    var n = new cc.Blink;
    return n.initWithDuration(e, t),
    n
},
cc.FadeIn = cc.ActionInterval.extend({
    update: function(e) {
        this._target.RGBAProtocol && this._target.setOpacity(255 * e)
    },
    reverse: function() {
        return cc.FadeOut.create(this._duration)
    },
    clone: function() {
        var e = new cc.FadeIn;
        return e.initWithDuration(this._duration),
        e
    }
}),
cc.FadeIn.create = function(e) {
    var t = new cc.FadeIn;
    return t.initWithDuration(e),
    t
},
cc.FadeOut = cc.ActionInterval.extend({
    update: function(e) {
        this._target.RGBAProtocol && this._target.setOpacity(255 * (1 - e))
    },
    reverse: function() {
        return cc.FadeIn.create(this._duration)
    },
    clone: function() {
        var e = new cc.FadeOut;
        return e.initWithDuration(this._duration),
        e
    }
}),
cc.FadeOut.create = function(e) {
    var t = new cc.FadeOut;
    return t.initWithDuration(e),
    t
},
cc.FadeTo = cc.ActionInterval.extend({
    _toOpacity: null,
    _fromOpacity: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._fromOpacity = this._toOpacity = 0
    },
    initWithDuration: function(e, t) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._toOpacity = t, !0) : !1
    },
    clone: function() {
        var e = new cc.FadeTo;
        return e.initWithDuration(this._duration, this._toOpacity),
        e
    },
    update: function(e) {
        this._target.RGBAProtocol && this._target.setOpacity(this._fromOpacity + (this._toOpacity - this._fromOpacity) * e)
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._target.RGBAProtocol && (this._fromOpacity = e.getOpacity())
    }
}),
cc.FadeTo.create = function(e, t) {
    var n = new cc.FadeTo;
    return n.initWithDuration(e, t),
    n
},
cc.TintTo = cc.ActionInterval.extend({
    _to: null,
    _from: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._to = cc.c3b(0, 0, 0),
        this._from = cc.c3b(0, 0, 0)
    },
    initWithDuration: function(e, t, n, r) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._to = cc.c3b(t, n, r), !0) : !1
    },
    clone: function() {
        var e = new cc.TintTo,
        t = this._to;
        return e.initWithDuration(this._duration, t.r, t.g, t.b),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._target.RGBAProtocol && (this._from = this._target.getColor())
    },
    update: function(e) {
        var t = this._from,
        n = this._to;
        this._target.RGBAProtocol && this._target.setColor(cc.c3b(t.r + (n.r - t.r) * e, t.g + (n.g - t.g) * e, t.b + (n.b - t.b) * e))
    }
}),
cc.TintTo.create = function(e, t, n, r) {
    var i = new cc.TintTo;
    return i.initWithDuration(e, t, n, r),
    i
},
cc.TintBy = cc.ActionInterval.extend({
    _deltaR: 0,
    _deltaG: 0,
    _deltaB: 0,
    _fromR: 0,
    _fromG: 0,
    _fromB: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._fromB = this._fromG = this._fromR = this._deltaB = this._deltaG = this._deltaR = 0
    },
    initWithDuration: function(e, t, n, r) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._deltaR = t, this._deltaG = n, this._deltaB = r, !0) : !1
    },
    clone: function() {
        var e = new cc.TintBy;
        return e.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        e.RGBAProtocol && (e = e.getColor(), this._fromR = e.r, this._fromG = e.g, this._fromB = e.b)
    },
    update: function(e) {
        this._target.RGBAProtocol && this._target.setColor(cc.c3b(this._fromR + this._deltaR * e, this._fromG + this._deltaG * e, this._fromB + this._deltaB * e))
    },
    reverse: function() {
        return cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB)
    }
}),
cc.TintBy.create = function(e, t, n, r) {
    var i = new cc.TintBy;
    return i.initWithDuration(e, t, n, r),
    i
},
cc.DelayTime = cc.ActionInterval.extend({
    update: function(e) {},
    reverse: function() {
        return cc.DelayTime.create(this._duration)
    },
    clone: function() {
        var e = new cc.DelayTime;
        return e.initWithDuration(this._duration),
        e
    }
}),
cc.DelayTime.create = function(e) {
    var t = new cc.DelayTime;
    return t.initWithDuration(e),
    t
},
cc.ReverseTime = cc.ActionInterval.extend({
    _other: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._other = null
    },
    initWithAction: function(e) {
        if (!e) throw "cc.ReverseTime.initWithAction(): action must be non null";
        if (e == this._other) throw "cc.ReverseTime.initWithAction(): the action was already passed in.";
        return cc.ActionInterval.prototype.initWithDuration.call(this, e.getDuration()) ? (this._other = e, !0) : !1
    },
    clone: function() {
        var e = new cc.ReverseTime;
        return e.initWithAction(this._other.clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._other.startWithTarget(e)
    },
    update: function(e) {
        this._other && this._other.update(1 - e)
    },
    reverse: function() {
        return this._other.clone()
    },
    stop: function() {
        this._other.stop(),
        cc.Action.prototype.stop.call(this)
    }
}),
cc.ReverseTime.create = function(e) {
    var t = new cc.ReverseTime;
    return t.initWithAction(e),
    t
},
cc.Animate = cc.ActionInterval.extend({
    _animation: null,
    _nextFrame: 0,
    _origFrame: null,
    _executedLoops: 0,
    _splitTimes: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._animation = null,
        this._nextFrame = 0,
        this._origFrame = null,
        this._executedLoops = 0,
        this._splitTimes = null
    },
    getAnimation: function() {
        return this._animation
    },
    setAnimation: function(e) {
        this._animation = e
    },
    initWithAnimation: function(e) {
        if (!e) throw "cc.Animate.initWithAnimation(): animation must be non-NULL";
        var t = e.getDuration();
        if (this.initWithDuration(t * e.getLoops())) {
            this._nextFrame = 0,
            this.setAnimation(e),
            this._origFrame = null,
            this._executedLoops = 0;
            var n = [],
            r = 0,
            i = t / e.getTotalDelayUnits();
            e = e.getFrames(),
            cc.ArrayVerifyType(e, cc.AnimationFrame);
            for (var s = 0; s < e.length; s++) {
                var o = r * i / t,
                r = r + e[s].getDelayUnits();
                n.push(o)
            }
            return this._splitTimes = n,
            !0
        }
        return ! 1
    },
    clone: function() {
        var e = new cc.Animate;
        return e.initWithAnimation(this._animation.clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._animation.getRestoreOriginalFrame() && (this._origFrame = e.displayFrame()),
        this._executedLoops = this._nextFrame = 0
    },
    update: function(e) {
        1 > e && (e *= this._animation.getLoops(), (0 | e) > this._executedLoops && (this._nextFrame = 0, this._executedLoops++), e %= 1);
        for (var t = this._animation.getFrames(), n = t.length, r = this._splitTimes, i = this._nextFrame; i < n; i++) {
            if (! (r[i] <= e)) break;
            this._target.setDisplayFrame(t[i].getSpriteFrame()),
            this._nextFrame = i + 1
        }
    },
    reverse: function() {
        var e = this._animation,
        t = e.getFrames(),
        n = [];
        cc.ArrayVerifyType(t, cc.AnimationFrame);
        if (0 < t.length) for (var r = t.length - 1; 0 <= r; r--) {
            var i = t[r];
            if (!i) break;
            n.push(i.clone())
        }
        return t = cc.Animation.createWithAnimationFrames(n, e.getDelayPerUnit(), e.getLoops()),
        t.setRestoreOriginalFrame(e.getRestoreOriginalFrame()),
        cc.Animate.create(t)
    },
    stop: function() {
        this._animation.getRestoreOriginalFrame() && this._target && this._target.setDisplayFrame(this._origFrame),
        cc.Action.prototype.stop.call(this)
    }
}),
cc.Animate.create = function(e) {
    var t = new cc.Animate;
    return t.initWithAnimation(e),
    t
},
cc.TargetedAction = cc.ActionInterval.extend({
    _action: null,
    _forcedTarget: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._forcedTarget = this._action = null
    },
    initWithTarget: function(e, t) {
        return this.initWithDuration(t.getDuration()) ? (this._forcedTarget = e, this._action = t, !0) : !1
    },
    clone: function() {
        var e = new cc.TargetedAction;
        return e.initWithTarget(this._forcedTarget, this._action.clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._action.startWithTarget(this._forcedTarget)
    },
    stop: function() {
        this._action.stop()
    },
    update: function(e) {
        this._action.update(e)
    },
    getForcedTarget: function() {
        return this._forcedTarget
    },
    setForcedTarget: function(e) {
        this._forcedTarget != e && (this._forcedTarget = e)
    }
}),
cc.TargetedAction.create = function(e, t) {
    var n = new cc.TargetedAction;
    return n.initWithTarget(e, t),
    n
},
cc.ActionInstant = cc.FiniteTimeAction.extend({
    isDone: function() {
        return ! 0
    },
    step: function(e) {
        this.update(1)
    },
    update: function(e) {},
    reverse: function() {
        return this.clone()
    },
    clone: function() {
        return new cc.ActionInstant
    }
}),
cc.Show = cc.ActionInstant.extend({
    update: function(e) {
        this._target.setVisible(!0)
    },
    reverse: function() {
        return cc.Hide.create()
    },
    clone: function() {
        return new cc.Show
    }
}),
cc.Show.create = function() {
    return new cc.Show
},
cc.Hide = cc.ActionInstant.extend({
    update: function(e) {
        this._target.setVisible(!1)
    },
    reverse: function() {
        return cc.Show.create()
    },
    clone: function() {
        return new cc.Hide
    }
}),
cc.Hide.create = function() {
    return new cc.Hide
},
cc.ToggleVisibility = cc.ActionInstant.extend({
    update: function(e) {
        this._target.setVisible(!this._target.isVisible())
    },
    reverse: function() {
        return new cc.ToggleVisibility
    },
    clone: function() {
        return new cc.ToggleVisibility
    }
}),
cc.ToggleVisibility.create = function() {
    return new cc.ToggleVisibility
},
cc.RemoveSelf = cc.ActionInstant.extend({
    _isNeedCleanUp: !0,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._isNeedCleanUp = !0
    },
    update: function(e) {
        this._target.removeFromParent(this._isNeedCleanUp)
    },
    init: function(e) {
        return this._isNeedCleanUp = e,
        !0
    },
    reverse: function() {
        return new cc.RemoveSelf(this._isNeedCleanUp)
    },
    clone: function() {
        return new cc.RemoveSelf(this._isNeedCleanUp)
    }
}),
cc.RemoveSelf.create = function(e) {
    null == e && (e = !0);
    var t = new cc.RemoveSelf;
    return t && t.init(e),
    t
},
cc.FlipX = cc.ActionInstant.extend({
    _flippedX: !1,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._flippedX = !1
    },
    initWithFlipX: function(e) {
        return this._flippedX = e,
        !0
    },
    update: function(e) {
        this._target.setFlippedX(this._flippedX)
    },
    reverse: function() {
        return cc.FlipX.create(!this._flippedX)
    },
    clone: function() {
        var e = new cc.FlipX;
        return e.initWithFlipX(this._flippedX),
        e
    }
}),
cc.FlipX.create = function(e) {
    var t = new cc.FlipX;
    return t.initWithFlipX(e) ? t: null
},
cc.FlipY = cc.ActionInstant.extend({
    _flippedY: !1,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._flippedY = !1
    },
    initWithFlipY: function(e) {
        return this._flippedY = e,
        !0
    },
    update: function(e) {
        this._target.setFlippedY(this._flippedY)
    },
    reverse: function() {
        return cc.FlipY.create(!this._flippedY)
    },
    clone: function() {
        var e = new cc.FlipY;
        return e.initWithFlipY(this._flippedY),
        e
    }
}),
cc.FlipY.create = function(e) {
    var t = new cc.FlipY;
    return t.initWithFlipY(e) ? t: null
},
cc.Place = cc.ActionInstant.extend({
    _position: null,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._position = cc.p(0, 0)
    },
    initWithPosition: function(e) {
        return this._position.x = e.x,
        this._position.y = e.y,
        !0
    },
    update: function(e) {
        this._target.setPosition(this._position)
    },
    clone: function() {
        var e = new cc.Place;
        return e.initWithPosition(this._position),
        e
    }
}),
cc.Place.create = function(e) {
    var t = new cc.Place;
    return t.initWithPosition(e),
    t
},
cc.CallFunc = cc.ActionInstant.extend({
    _selectorTarget: null,
    _callFunc: null,
    _function: null,
    _data: null,
    ctor: function() {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._data = this._function = this._callFunc = this._selectorTarget = null
    },
    initWithTarget: function(e, t, n) {
        return this._data = n,
        this._callFunc = e,
        this._selectorTarget = t,
        !0
    },
    initWithFunction: function(e) {
        return this._function = e,
        !0
    },
    execute: function() {
        null != this._callFunc ? this._callFunc.call(this._selectorTarget, this._target, this._data) : this._function && this._function.call(null, this._target)
    },
    update: function(e) {
        this.execute()
    },
    getTargetCallback: function() {
        return this._selectorTarget
    },
    setTargetCallback: function(e) {
        e != this._selectorTarget && (this._selectorTarget && (this._selectorTarget = null), this._selectorTarget = e)
    },
    copy: function() {
        var e = new cc.CallFunc;
        return this._selectorTarget ? e.initWithTarget(this._callFunc, this._selectorTarget, this._data) : this._function && e.initWithFunction(this._function),
        e
    },
    clone: function() {
        var e = new cc.CallFunc;
        return this._selectorTarget ? e.initWithTarget(this._callFunc, this._selectorTarget, this._data) : this._function && e.initWithFunction(this._function),
        e
    }
}),
cc.CallFunc.create = function(e, t, n) {
    var r = new cc.CallFunc;
    if (1 == arguments.length) {
        if (r && r.initWithFunction(e)) return r
    } else if (r && r.initWithTarget(e, t, n)) return r._callFunc = e,
    r;
    return null
},
cc.ActionCamera = cc.ActionInterval.extend({
    _centerXOrig: 0,
    _centerYOrig: 0,
    _centerZOrig: 0,
    _eyeXOrig: 0,
    _eyeYOrig: 0,
    _eyeZOrig: 0,
    _upXOrig: 0,
    _upYOrig: 0,
    _upZOrig: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._upZOrig = this._upYOrig = this._upXOrig = this._eyeZOrig = this._eyeYOrig = this._eyeXOrig = this._centerZOrig = this._centerYOrig = this._centerXOrig = 0
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        e = e.getCamera();
        var t = e.getCenter();
        this._centerXOrig = t.x,
        this._centerYOrig = t.y,
        this._centerZOrig = t.z,
        t = e.getEye(),
        this._eyeXOrig = t.x,
        this._eyeYOrig = t.y,
        this._eyeZOrig = t.z,
        e = e.getUp(),
        this._upXOrig = e.x,
        this._upYOrig = e.y,
        this._upZOrig = e.z
    },
    clone: function() {
        return new cc.ActionCamera
    },
    reverse: function() {
        return cc.ReverseTime.create(this)
    }
}),
cc.OrbitCamera = cc.ActionCamera.extend({
    _radius: 0,
    _deltaRadius: 0,
    _angleZ: 0,
    _deltaAngleZ: 0,
    _angleX: 0,
    _deltaAngleX: 0,
    _radZ: 0,
    _radDeltaZ: 0,
    _radX: 0,
    _radDeltaX: 0,
    ctor: function() {
        cc.ActionCamera.prototype.ctor.call(this),
        this._radDeltaX = this._radX = this._radDeltaZ = this._radZ = this._deltaAngleX = this._angleX = this._deltaAngleZ = this._angleZ = this._deltaRadius = this._radius = 0
    },
    initWithDuration: function(e, t, n, r, i, s, o) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this._radius = t, this._deltaRadius = n, this._angleZ = r, this._deltaAngleZ = i, this._angleX = s, this._deltaAngleX = o, this._radDeltaZ = cc.DEGREES_TO_RADIANS(i), this._radDeltaX = cc.DEGREES_TO_RADIANS(o), !0) : !1
    },
    sphericalRadius: function() {
        var e, t;
        t = this._target.getCamera();
        var n = t.getEye();
        e = t.getCenter(),
        t = n.x - e.x;
        var r = n.y - e.y;
        e = n.z - e.z;
        var n = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2) + Math.pow(e, 2)),
        i = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2));
        return 0 === i && (i = cc.FLT_EPSILON),
        0 === n && (n = cc.FLT_EPSILON),
        e = Math.acos(e / n),
        t = 0 > t ? Math.PI - Math.asin(r / i) : Math.asin(r / i),
        {
            newRadius: n / cc.Camera.getZEye(),
            zenith: e,
            azimuth: t
        }
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        e = this.sphericalRadius(),
        isNaN(this._radius) && (this._radius = e.newRadius),
        isNaN(this._angleZ) && (this._angleZ = cc.RADIANS_TO_DEGREES(e.zenith)),
        isNaN(this._angleX) && (this._angleX = cc.RADIANS_TO_DEGREES(e.azimuth)),
        this._radZ = cc.DEGREES_TO_RADIANS(this._angleZ),
        this._radX = cc.DEGREES_TO_RADIANS(this._angleX)
    },
    clone: function() {
        var e = new cc.OrbitCamera;
        return e.initWithDuration(this._duration, this._radius, this._deltaRadius, this._angleZ, this._deltaAngleZ, this._angleX, this._deltaAngleX),
        e
    },
    update: function(e) {
        var t = (this._radius + this._deltaRadius * e) * cc.Camera.getZEye(),
        n = this._radZ + this._radDeltaZ * e,
        r = this._radX + this._radDeltaX * e;
        e = Math.sin(n) * Math.cos(r) * t + this._centerXOrig,
        r = Math.sin(n) * Math.sin(r) * t + this._centerYOrig,
        t = Math.cos(n) * t + this._centerZOrig,
        this._target.getCamera().setEye(e, r, t)
    }
}),
cc.OrbitCamera.create = function(e, t, n, r, i, s, o) {
    var u = new cc.OrbitCamera;
    return u.initWithDuration(e, t, n, r, i, s, o) ? u: null
},
cc.ActionEase = cc.ActionInterval.extend({
    _inner: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._inner = null
    },
    initWithAction: function(e) {
        if (!e) throw "cc.ActionEase.initWithAction(): action must be non nil";
        return this.initWithDuration(e.getDuration()) ? (this._inner = e, !0) : !1
    },
    clone: function() {
        var e = new cc.ActionEase;
        return e.initWithAction(this._inner.clone()),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._inner.startWithTarget(this._target)
    },
    stop: function() {
        this._inner.stop(),
        cc.ActionInterval.prototype.stop.call(this)
    },
    update: function(e) {
        this._inner.update(e)
    },
    reverse: function() {
        return cc.ActionEase.create(this._inner.reverse())
    },
    getInnerAction: function() {
        return this._inner
    }
}),
cc.ActionEase.create = function(e) {
    var t = new cc.ActionEase;
    return t && t.initWithAction(e),
    t
},
cc.EaseRateAction = cc.ActionEase.extend({
    _rate: 0,
    ctor: function() {
        cc.ActionEase.prototype.ctor.call(this),
        this._rate = 0
    },
    setRate: function(e) {
        this._rate = e
    },
    getRate: function() {
        return this._rate
    },
    initWithAction: function(e, t) {
        return cc.ActionEase.prototype.initWithAction.call(this, e) ? (this._rate = t, !0) : !1
    },
    clone: function() {
        var e = new cc.EaseRateAction;
        return e.initWithAction(this._inner.clone(), this._rate),
        e
    },
    reverse: function() {
        return cc.EaseRateAction.create(this._inner.reverse(), 1 / this._rate)
    }
}),
cc.EaseRateAction.create = function(e, t) {
    var n = new cc.EaseRateAction;
    return n && n.initWithAction(e, t),
    n
},
cc.EaseIn = cc.EaseRateAction.extend({
    update: function(e) {
        this._inner.update(Math.pow(e, this._rate))
    },
    reverse: function() {
        return cc.EaseIn.create(this._inner.reverse(), 1 / this._rate)
    },
    clone: function() {
        var e = new cc.EaseIn;
        return e.initWithAction(this._inner.clone(), this._rate),
        e
    }
}),
cc.EaseIn.create = function(e, t) {
    var n = new cc.EaseIn;
    return n && n.initWithAction(e, t),
    n
},
cc.EaseOut = cc.EaseRateAction.extend({
    update: function(e) {
        this._inner.update(Math.pow(e, 1 / this._rate))
    },
    reverse: function() {
        return cc.EaseOut.create(this._inner.reverse(), 1 / this._rate)
    },
    clone: function() {
        var e = new cc.EaseOut;
        return e.initWithAction(this._inner.clone(), this._rate),
        e
    }
}),
cc.EaseOut.create = function(e, t) {
    var n = new cc.EaseOut;
    return n && n.initWithAction(e, t),
    n
},
cc.EaseInOut = cc.EaseRateAction.extend({
    update: function(e) {
        e *= 2,
        1 > e ? this._inner.update(.5 * Math.pow(e, this._rate)) : this._inner.update(1 - .5 * Math.pow(2 - e, this._rate))
    },
    clone: function() {
        var e = new cc.EaseInOut;
        return e.initWithAction(this._inner.clone(), this._rate),
        e
    },
    reverse: function() {
        return cc.EaseInOut.create(this._inner.reverse(), this._rate)
    }
}),
cc.EaseInOut.create = function(e, t) {
    var n = new cc.EaseInOut;
    return n && n.initWithAction(e, t),
    n
},
cc.EaseExponentialIn = cc.ActionEase.extend({
    update: function(e) {
        this._inner.update(0 === e ? 0 : Math.pow(2, 10 * (e - 1)))
    },
    reverse: function() {
        return cc.EaseExponentialOut.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseExponentialIn;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseExponentialIn.create = function(e) {
    var t = new cc.EaseExponentialIn;
    return t && t.initWithAction(e),
    t
},
cc.EaseExponentialOut = cc.ActionEase.extend({
    update: function(e) {
        this._inner.update(1 == e ? 1 : -Math.pow(2, -10 * e) + 1)
    },
    reverse: function() {
        return cc.EaseExponentialIn.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseExponentialOut;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseExponentialOut.create = function(e) {
    var t = new cc.EaseExponentialOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseExponentialInOut = cc.ActionEase.extend({
    update: function(e) {
        1 != e && 0 !== e && (e *= 2, e = 1 > e ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * ( - Math.pow(2, -10 * (e - 1)) + 2)),
        this._inner.update(e)
    },
    reverse: function() {
        return cc.EaseExponentialInOut.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseExponentialInOut;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseExponentialInOut.create = function(e) {
    var t = new cc.EaseExponentialInOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseSineIn = cc.ActionEase.extend({
    update: function(e) {
        e = 0 === e || 1 == e ? e: -1 * Math.cos(e * Math.PI / 2) + 1,
        this._inner.update(e)
    },
    reverse: function() {
        return cc.EaseSineOut.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseSineIn;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseSineIn.create = function(e) {
    var t = new cc.EaseSineIn;
    return t && t.initWithAction(e),
    t
},
cc.EaseSineOut = cc.ActionEase.extend({
    update: function(e) {
        e = 0 === e || 1 == e ? e: Math.sin(e * Math.PI / 2),
        this._inner.update(e)
    },
    reverse: function() {
        return cc.EaseSineIn.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseSineOut;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseSineOut.create = function(e) {
    var t = new cc.EaseSineOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseSineInOut = cc.ActionEase.extend({
    update: function(e) {
        e = 0 === e || 1 == e ? e: -0.5 * (Math.cos(Math.PI * e) - 1),
        this._inner.update(e)
    },
    clone: function() {
        var e = new cc.EaseSineInOut;
        return e.initWithAction(this._inner.clone()),
        e
    },
    reverse: function() {
        return cc.EaseSineInOut.create(this._inner.reverse())
    }
}),
cc.EaseSineInOut.create = function(e) {
    var t = new cc.EaseSineInOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseElastic = cc.ActionEase.extend({
    _period: null,
    ctor: function() {
        cc.ActionEase.prototype.ctor.call(this),
        this._period = .3
    },
    getPeriod: function() {
        return this._period
    },
    setPeriod: function(e) {
        this._period = e
    },
    initWithAction: function(e, t) {
        return cc.ActionEase.prototype.initWithAction.call(this, e),
        this._period = null == t ? .3 : t,
        !0
    },
    reverse: function() {
        cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.")
    },
    clone: function() {
        var e = new cc.EaseElastic;
        return e.initWithAction(this._inner.clone(), this._period),
        e
    }
}),
cc.EaseElastic.create = function(e, t) {
    var n = new cc.EaseElastic;
    return n && n.initWithAction(e, t) ? n: null
},
cc.EaseElasticIn = cc.EaseElastic.extend({
    update: function(e) {
        var t = 0;
        0 === e || 1 === e ? t = e: (t = this._period / 4, e -= 1, t = -Math.pow(2, 10 * e) * Math.sin((e - t) * Math.PI * 2 / this._period)),
        this._inner.update(t)
    },
    reverse: function() {
        return cc.EaseElasticOut.create(this._inner.reverse(), this._period)
    },
    clone: function() {
        var e = new cc.EaseElasticIn;
        return e.initWithAction(this._inner.clone(), this._period),
        e
    }
}),
cc.EaseElasticIn.create = function(e, t) {
    var n = new cc.EaseElasticIn;
    return n && n.initWithAction(e, t) ? n: null
},
cc.EaseElasticOut = cc.EaseElastic.extend({
    update: function(e) {
        var t = 0;
        0 === e || 1 == e ? t = e: (t = this._period / 4, t = Math.pow(2, -10 * e) * Math.sin((e - t) * Math.PI * 2 / this._period) + 1),
        this._inner.update(t)
    },
    reverse: function() {
        return cc.EaseElasticIn.create(this._inner.reverse(), this._period)
    },
    clone: function() {
        var e = new cc.EaseElasticOut;
        return e.initWithAction(this._inner.clone(), this._period),
        e
    }
}),
cc.EaseElasticOut.create = function(e, t) {
    var n = new cc.EaseElasticOut;
    return n && n.initWithAction(e, t),
    n
},
cc.EaseElasticInOut = cc.EaseElastic.extend({
    update: function(e) {
        var t = 0,
        t = this._period;
        if (0 === e || 1 == e) t = e;
        else {
            t || (t = this._period = .3 * 1.5);
            var n = t / 4;
            e = 2 * e - 1,
            t = 0 > e ? -0.5 * Math.pow(2, 10 * e) * Math.sin((e - n) * Math.PI * 2 / t) : Math.pow(2, -10 * e) * Math.sin((e - n) * Math.PI * 2 / t) * .5 + 1
        }
        this._inner.update(t)
    },
    reverse: function() {
        return cc.EaseElasticInOut.create(this._inner.reverse(), this._period)
    },
    clone: function() {
        var e = new cc.EaseElasticInOut;
        return e.initWithAction(this._inner.clone(), this._period),
        e
    }
}),
cc.EaseElasticInOut.create = function(e, t) {
    var n = new cc.EaseElasticInOut;
    return n && n.initWithAction(e, t),
    n
},
cc.EaseBounce = cc.ActionEase.extend({
    bounceTime: function(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e: e < 2 / 2.75 ? (e -= 1.5 / 2.75, 7.5625 * e * e + .75) : e < 2.5 / 2.75 ? (e -= 2.25 / 2.75, 7.5625 * e * e + .9375) : (e -= 2.625 / 2.75, 7.5625 * e * e + .984375)
    },
    clone: function() {
        var e = new cc.EaseBounce;
        return e.initWithAction(this._inner.clone()),
        e
    },
    reverse: function() {
        return cc.EaseBounce.create(this._inner.reverse())
    }
}),
cc.EaseBounce.create = function(e) {
    var t = new cc.EaseBounce;
    return t && t.initWithAction(e),
    t
},
cc.EaseBounceIn = cc.EaseBounce.extend({
    update: function(e) {
        e = 1 - this.bounceTime(1 - e),
        this._inner.update(e)
    },
    reverse: function() {
        return cc.EaseBounceOut.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseBounceIn;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseBounceIn.create = function(e) {
    var t = new cc.EaseBounceIn;
    return t && t.initWithAction(e),
    t
},
cc.EaseBounceOut = cc.EaseBounce.extend({
    update: function(e) {
        e = this.bounceTime(e),
        this._inner.update(e)
    },
    reverse: function() {
        return cc.EaseBounceIn.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseBounceOut;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseBounceOut.create = function(e) {
    var t = new cc.EaseBounceOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseBounceInOut = cc.EaseBounce.extend({
    update: function(e) {
        var t = 0,
        t = .5 > e ? .5 * (1 - this.bounceTime(1 - 2 * e)) : .5 * this.bounceTime(2 * e - 1) + .5;
        this._inner.update(t)
    },
    clone: function() {
        var e = new cc.EaseBounceInOut;
        return e.initWithAction(this._inner.clone()),
        e
    },
    reverse: function() {
        return cc.EaseBounceInOut.create(this._inner.reverse())
    }
}),
cc.EaseBounceInOut.create = function(e) {
    var t = new cc.EaseBounceInOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseBackIn = cc.ActionEase.extend({
    update: function(e) {
        this._inner.update(0 === e || 1 == e ? e: e * e * (2.70158 * e - 1.70158))
    },
    reverse: function() {
        return cc.EaseBackOut.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseBackIn;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseBackIn.create = function(e) {
    var t = new cc.EaseBackIn;
    return t && t.initWithAction(e),
    t
},
cc.EaseBackOut = cc.ActionEase.extend({
    update: function(e) {
        e -= 1,
        this._inner.update(e * e * (2.70158 * e + 1.70158) + 1)
    },
    reverse: function() {
        return cc.EaseBackIn.create(this._inner.reverse())
    },
    clone: function() {
        var e = new cc.EaseBackOut;
        return e.initWithAction(this._inner.clone()),
        e
    }
}),
cc.EaseBackOut.create = function(e) {
    var t = new cc.EaseBackOut;
    return t && t.initWithAction(e),
    t
},
cc.EaseBackInOut = cc.ActionEase.extend({
    update: function(e) {
        e *= 2,
        1 > e ? this._inner.update(e * e * (3.5949095 * e - 2.5949095) / 2) : (e -= 2, this._inner.update(e * e * (3.5949095 * e + 2.5949095) / 2 + 1))
    },
    clone: function() {
        var e = new cc.EaseBackInOut;
        return e.initWithAction(this._inner.clone()),
        e
    },
    reverse: function() {
        return cc.EaseBackInOut.create(this._inner.reverse())
    }
}),
cc.EaseBackInOut.create = function(e) {
    var t = new cc.EaseBackInOut;
    return t && t.initWithAction(e),
    t
},
cc.CardinalSplineAt = function(e, t, n, r, i, s) {
    var o = s * s,
    u = o * s,
    a = (1 - i) / 2;
    i = a * ( - u + 2 * o - s);
    var f = a * ( - u + o) + (2 * u - 3 * o + 1);
    return s = a * (u - 2 * o + s) + ( - 2 * u + 3 * o),
    o = a * (u - o),
    cc.p(e.x * i + t.x * f + n.x * s + r.x * o, e.y * i + t.y * f + n.y * s + r.y * o)
},
cc.reverseControlPoints = function(e) {
    for (var t = [], n = e.length - 1; 0 <= n; n--) t.push(cc.p(e[n].x, e[n].y));
    return t
},
cc.copyControlPoints = function(e) {
    for (var t = [], n = 0; n < e.length; n++) t.push(cc.p(e[n].x, e[n].y));
    return t
},
cc.getControlPointAt = function(e, t) {
    var n = Math.min(e.length - 1, Math.max(t, 0));
    return e[n]
},
cc.reverseControlPointsInline = function(e) {
    for (var t = e.length,
    n = 0 | t / 2,
    r = 0; r < n; ++r) {
        var i = e[r];
        e[r] = e[t - r - 1],
        e[t - r - 1] = i
    }
},
cc.CardinalSplineTo = cc.ActionInterval.extend({
    _points: null,
    _deltaT: 0,
    _tension: 0,
    _previousPosition: null,
    _accumulatedDiff: null,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this._points = [],
        this._tension = this._deltaT = 0,
        this._accumulatedDiff = this._previousPosition = null
    },
    initWithDuration: function(e, t, n) {
        if (!t || 0 == t.length) throw "Invalid configuration. It must at least have one control point";
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this.setPoints(t), this._tension = n, !0) : !1
    },
    clone: function() {
        var e = new cc.CardinalSplineTo;
        return e.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension),
        e
    },
    startWithTarget: function(e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this._deltaT = 1 / (this._points.length - 1),
        e = this._target.getPosition(),
        this._previousPosition = cc.p(e.x, e.y),
        this._accumulatedDiff = cc.p(0, 0)
    },
    update: function(e) {
        var t, n = this._points;
        if (1 == e) t = n.length - 1,
        e = 1;
        else {
            var r = this._deltaT;
            t = 0 | e / r,
            e = (e - r * t) / r
        }
        t = cc.CardinalSplineAt(cc.getControlPointAt(n, t - 1), cc.getControlPointAt(n, t - 0), cc.getControlPointAt(n, t + 1), cc.getControlPointAt(n, t + 2), this._tension, e),
        cc.ENABLE_STACKABLE_ACTIONS && (n = this._target.getPositionX() - this._previousPosition.x, e = this._target.getPositionY() - this._previousPosition.y, 0 != n || 0 != e) && (r = this._accumulatedDiff, n = r.x + n, e = r.y + e, r.x = n, r.y = e, t.x += n, t.y += e),
        this.updatePosition(t)
    },
    reverse: function() {
        var e = cc.reverseControlPoints(this._points);
        return cc.CardinalSplineTo.create(this._duration, e, this._tension)
    },
    updatePosition: function(e) {
        this._target.setPosition(e),
        this._previousPosition = e
    },
    getPoints: function() {
        return this._points
    },
    setPoints: function(e) {
        this._points = e
    }
}),
cc.CardinalSplineTo.create = function(e, t, n) {
    var r = new cc.CardinalSplineTo;
    return r.initWithDuration(e, t, n) ? r: null
},
cc.CardinalSplineBy = cc.CardinalSplineTo.extend({
    _startPosition: null,
    ctor: function() {
        cc.CardinalSplineTo.prototype.ctor.call(this),
        this._startPosition = cc.p(0, 0)
    },
    startWithTarget: function(e) {
        cc.CardinalSplineTo.prototype.startWithTarget.call(this, e),
        e = e.getPosition(),
        this._startPosition.x = e.x,
        this._startPosition.y = e.y
    },
    reverse: function() {
        for (var e = this._points.slice(), t, n = e[0], r = 1; r < e.length; ++r) t = e[r],
        e[r] = cc.pSub(t, n),
        n = t;
        e = cc.reverseControlPoints(e),
        n = e[e.length - 1],
        e.pop(),
        n.x = -n.x,
        n.y = -n.y,
        e.unshift(n);
        for (r = 1; r < e.length; ++r) t = e[r],
        t.x = -t.x,
        t.y = -t.y,
        t.x += n.x,
        t.y += n.y,
        n = e[r] = t;
        return cc.CardinalSplineBy.create(this._duration, e, this._tension)
    },
    updatePosition: function(e) {
        var t = this._startPosition,
        n = e.x + t.x;
        e = e.y + t.y,
        this._target.setPosition(n, e),
        this._previousPosition.x = n,
        this._previousPosition.y = e
    },
    clone: function() {
        var e = new cc.CardinalSplineBy;
        return e.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension),
        e
    }
}),
cc.CardinalSplineBy.create = function(e, t, n) {
    var r = new cc.CardinalSplineBy;
    return r.initWithDuration(e, t, n) ? r: null
},
cc.CatmullRomTo = cc.CardinalSplineTo.extend({
    initWithDuration: function(e, t) {
        return cc.CardinalSplineTo.prototype.initWithDuration.call(this, e, t, .5)
    },
    clone: function() {
        var e = new cc.CatmullRomTo;
        return e.initWithDuration(this._duration, cc.copyControlPoints(this._points)),
        e
    }
}),
cc.CatmullRomTo.create = function(e, t) {
    var n = new cc.CatmullRomTo;
    return n.initWithDuration(e, t) ? n: null
},
cc.CatmullRomBy = cc.CardinalSplineBy.extend({
    initWithDuration: function(e, t) {
        return cc.CardinalSplineTo.prototype.initWithDuration.call(this, e, t, .5)
    },
    clone: function() {
        var e = new cc.CatmullRomBy;
        return e.initWithDuration(this._duration, cc.copyControlPoints(this._points)),
        e
    }
}),
cc.CatmullRomBy.create = function(e, t) {
    var n = new cc.CatmullRomBy;
    return n.initWithDuration(e, t) ? n: null
},
cc.ActionTweenDelegate = cc.Class.extend({
    updateTweenAction: function(e, t) {}
}),
cc.ActionTween = cc.ActionInterval.extend({
    key: "",
    from: 0,
    to: 0,
    delta: 0,
    ctor: function() {
        cc.ActionInterval.prototype.ctor.call(this),
        this.key = "",
        this.delta = this.to = this.from = 0
    },
    initWithDuration: function(e, t, n, r) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, e) ? (this.key = t, this.to = r, this.from = n, !0) : !1
    },
    startWithTarget: function(e) {
        if (!e || !e.updateTweenAction) throw "cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
        cc.ActionInterval.prototype.startWithTarget.call(this, e),
        this.delta = this.to - this.from
    },
    update: function(e) {
        this._target.updateTweenAction(this.to - this.delta * (1 - e), this.key)
    },
    reverse: function() {
        return cc.ActionTween.create(this.duration, this.key, this.to, this.from)
    },
    clone: function() {
        var e = new cc.ActionTween;
        return e.initWithDuration(this._duration, this.key, this.from, this.to),
        e
    }
}),
cc.ActionTween.create = function(e, t, n, r) {
    var i = new cc.ActionTween;
    return i.initWithDuration(e, t, n, r) ? i: null
},
cc.PROGRESS_TIMER_TYPE_RADIAL = 0,
cc.PROGRESS_TIMER_TYPE_BAR = 1,
cc.PROGRESS_TEXTURE_COORDS_COUNT = 4,
cc.PROGRESS_TEXTURE_COORDS = 75,
cc.ProgressTimer = cc.NodeRGBA.extend({
    _type: null,
    _percentage: 0,
    _sprite: null,
    _midPoint: null,
    _barChangeRate: null,
    _reverseDirection: !1,
    getMidpoint: function() {
        return cc.p(this._midPoint.x, this._midPoint)
    },
    setMidpoint: function(e) {
        this._midPoint = cc.pClamp(e, cc.p(0, 0), cc.p(1, 1))
    },
    getBarChangeRate: function() {
        return cc.p(this._barChangeRate.x, this._barChangeRate.y)
    },
    setBarChangeRate: function(e) {
        this._barChangeRate = cc.pClamp(e, cc.p(0, 0), cc.p(1, 1))
    },
    getType: function() {
        return this._type
    },
    getPercentage: function() {
        return this._percentage
    },
    getSprite: function() {
        return this._sprite
    },
    setPercentage: function(e) {
        this._percentage != e && (this._percentage = cc.clampf(e, 0, 100), this._updateProgress())
    },
    setOpacityModifyRGB: function(e) {},
    isOpacityModifyRGB: function() {
        return ! 1
    },
    isReverseDirection: function() {
        return this._reverseDirection
    },
    _boundaryTexCoord: function(e) {
        if (e < cc.PROGRESS_TEXTURE_COORDS_COUNT) {
            var t = cc.PROGRESS_TEXTURE_COORDS;
            return this._reverseDirection ? cc.p(t >> 7 - (e << 1) & 1, t >> 7 - ((e << 1) + 1) & 1) : cc.p(t >> (e << 1) + 1 & 1, t >> (e << 1) & 1)
        }
        return cc.PointZero()
    },
    _origin: null,
    _startAngle: 270,
    _endAngle: 270,
    _radius: 0,
    _counterClockWise: !1,
    _barRect: null,
    _vertexDataCount: 0,
    _vertexData: null,
    _vertexArrayBuffer: null,
    _vertexWebGLBuffer: null,
    _vertexDataDirty: !1,
    ctor: null,
    _ctorForCanvas: function() {
        cc.NodeRGBA.prototype.ctor.call(this),
        this._type = cc.PROGRESS_TIMER_TYPE_RADIAL,
        this._percentage = 0,
        this._midPoint = cc.p(0, 0),
        this._barChangeRate = cc.p(0, 0),
        this._reverseDirection = !1,
        this._sprite = null,
        this._origin = cc.PointZero(),
        this._endAngle = this._startAngle = 270,
        this._radius = 0,
        this._counterClockWise = !1,
        this._barRect = cc.RectZero()
    },
    _ctorForWebGL: function() {
        cc.NodeRGBA.prototype.ctor.call(this),
        this._type = cc.PROGRESS_TIMER_TYPE_RADIAL,
        this._percentage = 0,
        this._midPoint = cc.p(0, 0),
        this._barChangeRate = cc.p(0, 0),
        this._reverseDirection = !1,
        this._sprite = null,
        this._vertexWebGLBuffer = cc.renderContext.createBuffer(),
        this._vertexDataCount = 0,
        this._vertexArrayBuffer = this._vertexData = null,
        this._vertexDataDirty = !1
    },
    setColor: function(e) {
        this._sprite.setColor(e),
        this._updateColor()
    },
    setOpacity: function(e) {
        this._sprite.setOpacity(e),
        this._updateColor()
    },
    getColor: function() {
        return this._sprite.getColor()
    },
    getOpacity: function() {
        return this._sprite.getOpacity()
    },
    setReverseProgress: null,
    _setReverseProgressForCanvas: function(e) {
        this._reverseDirection !== e && (this._reverseDirection = e)
    },
    _setReverseProgressForWebGL: function(e) {
        this._reverseDirection !== e && (this._reverseDirection = e, this._vertexArrayBuffer = this._vertexData = null, this._vertexDataCount = 0)
    },
    setSprite: null,
    _setSpriteForCanvas: function(e) {
        this._sprite != e && (this._sprite = e, this.setContentSize(this._sprite.getContentSize()))
    },
    _setSpriteForWebGL: function(e) {
        e && this._sprite != e && (this._sprite = e, this.setContentSize(e.getContentSize()), this._vertexData && (this._vertexArrayBuffer = this._vertexData = null, this._vertexDataCount = 0))
    },
    setType: null,
    _setTypeForCanvas: function(e) {
        e !== this._type && (this._type = e)
    },
    _setTypeForWebGL: function(e) {
        e !== this._type && (this._vertexData && (this._vertexArrayBuffer = this._vertexData = null, this._vertexDataCount = 0), this._type = e)
    },
    setReverseDirection: null,
    _setReverseDirectionForCanvas: function(e) {
        this._reverseDirection !== e && (this._reverseDirection = e)
    },
    _setReverseDirectionForWebGL: function(e) {
        this._reverseDirection !== e && (this._reverseDirection = e, this._vertexArrayBuffer = this._vertexData = null, this._vertexDataCount = 0)
    },
    _textureCoordFromAlphaPoint: function(e) {
        var t = this._sprite;
        if (!t) return {
            u: 0,
            v: 0
        };
        var n = t.getQuad(),
        r = cc.p(n.bl.texCoords.u, n.bl.texCoords.v),
        n = cc.p(n.tr.texCoords.u, n.tr.texCoords.v);
        return t.isTextureRectRotated() && (t = e.x, e.x = e.y, e.y = t),
        {
            u: r.x * (1 - e.x) + n.x * e.x,
            v: r.y * (1 - e.y) + n.y * e.y
        }
    },
    _vertexFromAlphaPoint: function(e) {
        if (!this._sprite) return {
            x: 0,
            y: 0
        };
        var t = this._sprite.getQuad(),
        n = cc.p(t.bl.vertices.x, t.bl.vertices.y),
        t = cc.p(t.tr.vertices.x, t.tr.vertices.y);
        return {
            x: n.x * (1 - e.x) + t.x * e.x,
            y: n.y * (1 - e.y) + t.y * e.y
        }
    },
    initWithSprite: null,
    _initWithSpriteForCanvas: function(e) {
        return this.setPercentage(0),
        this.setAnchorPoint(.5, .5),
        this._type = cc.PROGRESS_TIMER_TYPE_RADIAL,
        this._reverseDirection = !1,
        this.setMidpoint(cc.p(.5, .5)),
        this.setBarChangeRate(cc.p(1, 1)),
        this.setSprite(e),
        !0
    },
    _initWithSpriteForWebGL: function(e) {
        return this.setPercentage(0),
        this._vertexArrayBuffer = this._vertexData = null,
        this._vertexDataCount = 0,
        this.setAnchorPoint(.5, .5),
        this._type = cc.PROGRESS_TIMER_TYPE_RADIAL,
        this._reverseDirection = !1,
        this.setMidpoint(cc.p(.5, .5)),
        this.setBarChangeRate(cc.p(1, 1)),
        this.setSprite(e),
        this.setShaderProgram(cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURECOLOR)),
        !0
    },
    draw: null,
    _drawForCanvas: function(e) {
        e = e || cc.renderContext;
        var t = this._sprite;
        t._isLighterMode && (e.globalCompositeOperation = "lighter");
        var n = cc.EGLView.getInstance().getScaleX(),
        r = cc.EGLView.getInstance().getScaleY();
        e.globalAlpha = t._displayedOpacity / 255;
        var i = t._rect,
        s = t._contentSize,
        o = t._offsetPosition,
        u = t._drawSize_Canvas,
        a = 0 | o.x,
        f = -o.y - i.height,
        l = t._textureRect_Canvas;
        u.width = i.width * n,
        u.height = i.height * r,
        e.save(),
        t._flippedX && (a = -o.x - i.width, e.scale( - 1, 1)),
        t._flippedY && (f = o.y, e.scale(1, -1)),
        a *= n,
        f *= r,
        this._type == cc.PROGRESS_TIMER_TYPE_BAR ? (i = this._barRect, e.beginPath(), e.rect(i.x * n, i.y * r, i.width * n, i.height * r), e.clip(), e.closePath()) : this._type == cc.PROGRESS_TIMER_TYPE_RADIAL && (i = this._origin.x * n, o = this._origin.y * r, e.beginPath(), e.arc(i, o, this._radius * r, Math.PI / 180 * this._startAngle, Math.PI / 180 * this._endAngle, this._counterClockWise), e.lineTo(i, o), e.clip(), e.closePath()),
        t._texture && l.validRect ? (n = t._texture.getHtmlElementObj(), this._colorized ? e.drawImage(n, 0, 0, l.width, l.height, a, f, u.width, u.height) : e.drawImage(n, l.x, l.y, l.width, l.height, a, f, u.width, u.height)) : 0 !== s.width && (u = this.getColor(), e.fillStyle = "rgba(" + u.r + "," + u.g + "," + u.b + ",1)", e.fillRect(a, f, s.width * n, s.height * r)),
        e.restore(),
        cc.INCREMENT_GL_DRAWS(1)
    },
    _drawForWebGL: function(e) {
        e = e || cc.renderContext;
        if (this._vertexData && this._sprite) {
            cc.NODE_DRAW_SETUP(this);
            var t = this._sprite.getBlendFunc();
            cc.glBlendFunc(t.src, t.dst),
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSCOLORTEX),
            this._sprite.getTexture() ? cc.glBindTexture2D(this._sprite.getTexture()) : cc.glBindTexture2D(null),
            e.bindBuffer(e.ARRAY_BUFFER, this._vertexWebGLBuffer),
            this._vertexDataDirty && (e.bufferData(e.ARRAY_BUFFER, this._vertexArrayBuffer, e.DYNAMIC_DRAW), this._vertexDataDirty = !1),
            t = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT,
            e.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, e.FLOAT, !1, t, 0),
            e.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, e.UNSIGNED_BYTE, !0, t, 8),
            e.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, e.FLOAT, !1, t, 12),
            this._type === cc.PROGRESS_TIMER_TYPE_RADIAL ? e.drawArrays(e.TRIANGLE_FAN, 0, this._vertexDataCount) : this._type == cc.PROGRESS_TIMER_TYPE_BAR && (this._reverseDirection ? (e.drawArrays(e.TRIANGLE_STRIP, 0, this._vertexDataCount / 2), e.drawArrays(e.TRIANGLE_STRIP, 4, this._vertexDataCount / 2), cc.g_NumberOfDraws++) : e.drawArrays(e.TRIANGLE_STRIP, 0, this._vertexDataCount)),
            cc.g_NumberOfDraws++
        }
    },
    _updateRadial: function() {
        if (this._sprite) {
            var e, t = this._midPoint;
            e = this._percentage / 100;
            var n = 2 * cc.PI * (this._reverseDirection ? e: 1 - e),
            r = cc.p(t.x, 1),
            i = cc.pRotateByAngle(r, t, n),
            n = 0;
            if (0 == e) i = r,
            n = 0;
            else if (1 == e) i = r,
            n = 4;
            else {
                var s = cc.FLT_MAX,
                o = cc.PROGRESS_TEXTURE_COORDS_COUNT;
                for (e = 0; e <= o; ++e) {
                    var u = (e + (o - 1)) % o,
                    a = this._boundaryTexCoord(e % o),
                    u = this._boundaryTexCoord(u);
                    0 == e ? u = cc.pLerp(a, u, 1 - t.x) : 4 == e && (a = cc.pLerp(a, u, 1 - t.x));
                    var f = cc.p(0, 0);
                    cc.pLineIntersect(a, u, t, i, f) && (0 != e && 4 != e || 0 <= f.x && 1 >= f.x) && 0 <= f.y && f.y < s && (s = f.y, n = e)
                }
                i = cc.pAdd(t, cc.pMult(cc.pSub(i, t), s))
            }
            s = !0,
            this._vertexDataCount != n + 3 && (s = !1, this._vertexArrayBuffer = this._vertexData = null, this._vertexDataCount = 0);
            if (!this._vertexData) {
                o = this._vertexDataCount = n + 3,
                a = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT,
                this._vertexArrayBuffer = new ArrayBuffer(o * a),
                u = [];
                for (e = 0; e < o; e++) u[e] = new cc.V2F_C4B_T2F(null, null, null, this._vertexArrayBuffer, e * a);
                this._vertexData = u;
                if (!this._vertexData) {
                    cc.log("cc.ProgressTimer._updateRadial() : Not enough memory");
                    return
                }
            }
            this._updateColor(),
            o = this._vertexData;
            if (!s) for (o[0].texCoords = this._textureCoordFromAlphaPoint(t), o[0].vertices = this._vertexFromAlphaPoint(t), o[1].texCoords = this._textureCoordFromAlphaPoint(r), o[1].vertices = this._vertexFromAlphaPoint(r), e = 0; e < n; e++) t = this._boundaryTexCoord(e),
            o[e + 2].texCoords = this._textureCoordFromAlphaPoint(t),
            o[e + 2].vertices = this._vertexFromAlphaPoint(t);
            o[this._vertexDataCount - 1].texCoords = this._textureCoordFromAlphaPoint(i),
            o[this._vertexDataCount - 1].vertices = this._vertexFromAlphaPoint(i)
        }
    },
    _updateBar: function() {
        if (this._sprite) {
            var e, t = this._percentage / 100,
            n = this._barChangeRate,
            n = cc.pMult(cc.p(1 - n.x + t * n.x, 1 - n.y + t * n.y), .5),
            t = cc.pSub(this._midPoint, n),
            n = cc.pAdd(this._midPoint, n);
            0 > t.x && (n.x += -t.x, t.x = 0),
            1 < n.x && (t.x -= n.x - 1, n.x = 1),
            0 > t.y && (n.y += -t.y, t.y = 0),
            1 < n.y && (t.y -= n.y - 1, n.y = 1);
            if (this._reverseDirection) {
                if (!this._vertexData) {
                    this._vertexDataCount = 8;
                    var r = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
                    this._vertexArrayBuffer = new ArrayBuffer(8 * r);
                    var i = [];
                    for (e = 0; 8 > e; e++) i[e] = new cc.V2F_C4B_T2F(null, null, null, this._vertexArrayBuffer, e * r);
                    i[0].texCoords = this._textureCoordFromAlphaPoint(cc.p(0, 1)),
                    i[0].vertices = this._vertexFromAlphaPoint(cc.p(0, 1)),
                    i[1].texCoords = this._textureCoordFromAlphaPoint(cc.p(0, 0)),
                    i[1].vertices = this._vertexFromAlphaPoint(cc.p(0, 0)),
                    i[6].texCoords = this._textureCoordFromAlphaPoint(cc.p(1, 1)),
                    i[6].vertices = this._vertexFromAlphaPoint(cc.p(1, 1)),
                    i[7].texCoords = this._textureCoordFromAlphaPoint(cc.p(1, 0)),
                    i[7].vertices = this._vertexFromAlphaPoint(cc.p(1, 0)),
                    this._vertexData = i
                }
                e = this._vertexData,
                e[2].texCoords = this._textureCoordFromAlphaPoint(cc.p(t.x, n.y)),
                e[2].vertices = this._vertexFromAlphaPoint(cc.p(t.x, n.y)),
                e[3].texCoords = this._textureCoordFromAlphaPoint(cc.p(t.x, t.y)),
                e[3].vertices = this._vertexFromAlphaPoint(cc.p(t.x, t.y)),
                e[4].texCoords = this._textureCoordFromAlphaPoint(cc.p(n.x, n.y)),
                e[4].vertices = this._vertexFromAlphaPoint(cc.p(n.x, n.y)),
                e[5].texCoords = this._textureCoordFromAlphaPoint(cc.p(n.x, t.y)),
                e[5].vertices = this._vertexFromAlphaPoint(cc.p(n.x, t.y))
            } else {
                if (!this._vertexData) for (this._vertexDataCount = 4, r = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT, this._vertexArrayBuffer = new ArrayBuffer(4 * r), this._vertexData = [], e = 0; 4 > e; e++) this._vertexData[e] = new cc.V2F_C4B_T2F(null, null, null, this._vertexArrayBuffer, e * r);
                e = this._vertexData,
                e[0].texCoords = this._textureCoordFromAlphaPoint(cc.p(t.x, n.y)),
                e[0].vertices = this._vertexFromAlphaPoint(cc.p(t.x, n.y)),
                e[1].texCoords = this._textureCoordFromAlphaPoint(cc.p(t.x, t.y)),
                e[1].vertices = this._vertexFromAlphaPoint(cc.p(t.x, t.y)),
                e[2].texCoords = this._textureCoordFromAlphaPoint(cc.p(n.x, n.y)),
                e[2].vertices = this._vertexFromAlphaPoint(cc.p(n.x, n.y)),
                e[3].texCoords = this._textureCoordFromAlphaPoint(cc.p(n.x, t.y)),
                e[3].vertices = this._vertexFromAlphaPoint(cc.p(n.x, t.y))
            }
            this._updateColor()
        }
    },
    _updateColor: function() {
        if (this._sprite && this._vertexData) {
            for (var e = this._sprite.getQuad().tl.colors, t = this._vertexData, n = 0, r = this._vertexDataCount; n < r; ++n) t[n].colors = e;
            this._vertexDataDirty = !0
        }
    },
    _updateProgress: null,
    _updateProgressForCanvas: function() {
        var e = this._sprite,
        t = e.getContentSize(),
        n = this._midPoint;
        if (this._type == cc.PROGRESS_TIMER_TYPE_RADIAL) {
            this._radius = Math.round(Math.sqrt(t.width * t.width + t.height * t.height));
            var r, i = !1,
            s = this._origin;
            s.x = t.width * n.x,
            s.y = -t.height * n.y,
            this._reverseDirection ? (r = 270, n = 270 - 3.6 * this._percentage) : (n = -90, r = -90 + 3.6 * this._percentage),
            e._flippedX && (s.x -= 2 * t.width * this._midPoint.x, n = -n - 180, r = -r - 180, i = !i),
            e._flippedY && (s.y += 2 * t.height * this._midPoint.y, i = !i, n = -n, r = -r),
            this._startAngle = n,
            this._endAngle = r,
            this._counterClockWise = i
        } else {
            r = this._barChangeRate,
            s = this._percentage / 100,
            i = this._barRect,
            r = cc.size(t.width * (1 - r.x), t.height * (1 - r.y));
            var s = cc.size((t.width - r.width) * s, (t.height - r.height) * s),
            s = cc.size(r.width + s.width, r.height + s.height),
            o = cc.p(t.width * n.x, t.height * n.y),
            u = o.x - s.width / 2;.5 < n.x && s.width / 2 >= t.width - o.x && (u = t.width - s.width),
            r = o.y - s.height / 2,
            .5 < n.y && s.height / 2 >= t.height - o.y && (r = t.height - s.height),
            i.x = 0,
            t = 1,
            e._flippedX && (i.x -= s.width, t = -1),
            0 < u && (i.x += u * t),
            i.y = 0,
            t = 1,
            e._flippedY && (i.y += s.height, t = -1),
            0 < r && (i.y -= r * t),
            i.width = s.width,
            i.height = -s.height
        }
    },
    _updateProgressForWebGL: function() {
        var e = this._type;
        e === cc.PROGRESS_TIMER_TYPE_RADIAL ? this._updateRadial() : e === cc.PROGRESS_TIMER_TYPE_BAR && this._updateBar(),
        this._vertexDataDirty = !0
    }
}),
cc.Browser.supportWebGL ? (cc.ProgressTimer.prototype.ctor = cc.ProgressTimer.prototype._ctorForWebGL, cc.ProgressTimer.prototype.setReverseProgress = cc.ProgressTimer.prototype._setReverseProgressForWebGL, cc.ProgressTimer.prototype.setSprite = cc.ProgressTimer.prototype._setSpriteForWebGL, cc.ProgressTimer.prototype.setType = cc.ProgressTimer.prototype._setTypeForWebGL, cc.ProgressTimer.prototype.setReverseDirection = cc.ProgressTimer.prototype._setReverseDirectionForWebGL, cc.ProgressTimer.prototype.initWithSprite = cc.ProgressTimer.prototype._initWithSpriteForWebGL, cc.ProgressTimer.prototype.draw = cc.ProgressTimer.prototype._drawForWebGL, cc.ProgressTimer.prototype._updateProgress = cc.ProgressTimer.prototype._updateProgressForWebGL) : (cc.ProgressTimer.prototype.ctor = cc.ProgressTimer.prototype._ctorForCanvas, cc.ProgressTimer.prototype.setReverseProgress = cc.ProgressTimer.prototype._setReverseProgressForCanvas, cc.ProgressTimer.prototype.setSprite = cc.ProgressTimer.prototype._setSpriteForCanvas, cc.ProgressTimer.prototype.setType = cc.ProgressTimer.prototype._setTypeForCanvas, cc.ProgressTimer.prototype.setReverseDirection = cc.ProgressTimer.prototype._setReverseDirectionForCanvas, cc.ProgressTimer.prototype.initWithSprite = cc.ProgressTimer.prototype._initWithSpriteForCanvas, cc.ProgressTimer.prototype.draw = cc.ProgressTimer.prototype._drawForCanvas, cc.ProgressTimer.prototype._updateProgress = cc.ProgressTimer.prototype._updateProgressForCanvas),
cc.ProgressTimer.create = function(e) {
    var t = new cc.ProgressTimer;
    return t.initWithSprite(e) ? t: null
},
cc.SCENE_FADE = 4208917214,
cc.TransitionEaseScene = cc.Class.extend({
    easeActionWithAction: function() {}
}),
cc.TRANSITION_ORIENTATION_LEFT_OVER = 0,
cc.TRANSITION_ORIENTATION_RIGHT_OVER = 1,
cc.TRANSITION_ORIENTATION_UP_OVER = 0,
cc.TRANSITION_ORIENTATION_DOWN_OVER = 1,
cc.TransitionScene = cc.Scene.extend({
    _inScene: null,
    _outScene: null,
    _duration: null,
    _isInSceneOnTop: !1,
    _isSendCleanupToScene: !1,
    _setNewScene: function(e) {
        this.unschedule(this._setNewScene),
        e = cc.Director.getInstance(),
        this._isSendCleanupToScene = e.isSendCleanupToScene(),
        e.replaceScene(this._inScene),
        cc.TouchDispatcher && e.getTouchDispatcher().setDispatchEvents(!0),
        this._outScene.setVisible(!0)
    },
    _sceneOrder: function() {
        this._isInSceneOnTop = !0
    },
    draw: function() {
        this._isInSceneOnTop ? (this._outScene.visit(), this._inScene.visit()) : (this._inScene.visit(), this._outScene.visit())
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this),
        cc.TouchDispatcher && cc.Director.getInstance().getTouchDispatcher().setDispatchEvents(!1),
        this._outScene.onExitTransitionDidStart(),
        this._inScene.onEnter()
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this),
        cc.TouchDispatcher && cc.Director.getInstance().getTouchDispatcher().setDispatchEvents(!0),
        this._outScene.onExit(),
        this._inScene.onEnterTransitionDidFinish()
    },
    cleanup: function() {
        cc.Node.prototype.cleanup.call(this),
        this._isSendCleanupToScene && this._outScene.cleanup()
    },
    initWithDuration: function(e, t) {
        if (!t) throw "cc.TransitionScene.initWithDuration(): Argument scene must be non-nil";
        if (this.init()) {
            this._duration = e,
            this.setAnchorPoint(0, 0),
            this.setPosition(0, 0),
            this._inScene = t,
            this._outScene = cc.Director.getInstance().getRunningScene(),
            this._outScene || (this._outScene = cc.Scene.create(), this._outScene.init());
            if (this._inScene == this._outScene) throw "cc.TransitionScene.initWithDuration(): Incoming scene must be different from the outgoing scene";
            return this._sceneOrder(),
            !0
        }
        return ! 1
    },
    finish: function() {
        this._inScene.setVisible(!0),
        this._inScene.setPosition(0, 0),
        this._inScene.setScale(1),
        this._inScene.setRotation(0),
        cc.renderContextType === cc.WEBGL && this._inScene.getCamera().restore(),
        this._outScene.setVisible(!1),
        this._outScene.setPosition(0, 0),
        this._outScene.setScale(1),
        this._outScene.setRotation(0),
        cc.renderContextType === cc.WEBGL && this._outScene.getCamera().restore(),
        this.schedule(this._setNewScene, 0)
    },
    hideOutShowIn: function() {
        this._inScene.setVisible(!0),
        this._outScene.setVisible(!1)
    }
}),
cc.TransitionScene.create = function(e, t) {
    var n = new cc.TransitionScene;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionSceneOriented = cc.TransitionScene.extend({
    _orientation: 0,
    initWithDuration: function(e, t, n) {
        return cc.TransitionScene.prototype.initWithDuration.call(this, e, t) && (this._orientation = n),
        !0
    }
}),
cc.TransitionSceneOriented.create = function(e, t, n) {
    var r = new cc.TransitionSceneOriented;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionRotoZoom = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this),
        this._inScene.setScale(.001),
        this._outScene.setScale(1),
        this._inScene.setAnchorPoint(.5, .5),
        this._outScene.setAnchorPoint(.5, .5);
        var e = cc.Sequence.create(cc.Spawn.create(cc.ScaleBy.create(this._duration / 2, .001), cc.RotateBy.create(this._duration / 2, 720)), cc.DelayTime.create(this._duration / 2));
        this._outScene.runAction(e),
        this._inScene.runAction(cc.Sequence.create(e.reverse(), cc.CallFunc.create(this.finish, this)))
    }
}),
cc.TransitionRotoZoom.create = function(e, t) {
    var n = new cc.TransitionRotoZoom;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionJumpZoom = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e = cc.Director.getInstance().getWinSize();
        this._inScene.setScale(.5),
        this._inScene.setPosition(e.width, 0),
        this._inScene.setAnchorPoint(.5, .5),
        this._outScene.setAnchorPoint(.5, .5);
        var t = cc.JumpBy.create(this._duration / 4, cc.p( - e.width, 0), e.width / 4, 2),
        n = cc.ScaleTo.create(this._duration / 4, 1),
        e = cc.ScaleTo.create(this._duration / 4, .5),
        e = cc.Sequence.create(e, t),
        t = cc.Sequence.create(t, n),
        n = cc.DelayTime.create(this._duration / 2);
        this._outScene.runAction(e),
        this._inScene.runAction(cc.Sequence.create(n, t, cc.CallFunc.create(this.finish, this)))
    }
}),
cc.TransitionJumpZoom.create = function(e, t) {
    var n = new cc.TransitionJumpZoom;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionMoveInL = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this),
        this.initScenes();
        var e = this.action();
        this._inScene.runAction(cc.Sequence.create(this.easeActionWithAction(e), cc.CallFunc.create(this.finish, this)))
    },
    initScenes: function() {
        this._inScene.setPosition( - cc.Director.getInstance().getWinSize().width, 0)
    },
    action: function() {
        return cc.MoveTo.create(this._duration, cc.p(0, 0))
    },
    easeActionWithAction: function(e) {
        return cc.EaseOut.create(e, 2)
    }
}),
cc.TransitionMoveInL.create = function(e, t) {
    var n = new cc.TransitionMoveInL;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionMoveInR = cc.TransitionMoveInL.extend({
    initScenes: function() {
        this._inScene.setPosition(cc.Director.getInstance().getWinSize().width, 0)
    }
}),
cc.TransitionMoveInR.create = function(e, t) {
    var n = new cc.TransitionMoveInR;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionMoveInT = cc.TransitionMoveInL.extend({
    initScenes: function() {
        this._inScene.setPosition(0, cc.Director.getInstance().getWinSize().height)
    }
}),
cc.TransitionMoveInT.create = function(e, t) {
    var n = new cc.TransitionMoveInT;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionMoveInB = cc.TransitionMoveInL.extend({
    initScenes: function() {
        this._inScene.setPosition(0, -cc.Director.getInstance().getWinSize().height)
    }
}),
cc.TransitionMoveInB.create = function(e, t) {
    var n = new cc.TransitionMoveInB;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.ADJUST_FACTOR = .5,
cc.TransitionSlideInL = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this),
        this.initScenes();
        var e = this.action(),
        t = this.action(),
        e = this.easeActionWithAction(e),
        t = cc.Sequence.create(this.easeActionWithAction(t), cc.CallFunc.create(this.finish, this));
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    },
    initScenes: function() {
        this._inScene.setPosition( - (cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR), 0)
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR, 0))
    },
    easeActionWithAction: function(e) {
        return cc.EaseOut.create(e, 2)
    }
}),
cc.TransitionSlideInL.create = function(e, t) {
    var n = new cc.TransitionSlideInL;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionSlideInR = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !0
    },
    initScenes: function() {
        this._inScene.setPosition(cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR, 0)
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p( - (cc.Director.getInstance().getWinSize().width - cc.ADJUST_FACTOR), 0))
    }
}),
cc.TransitionSlideInR.create = function(e, t) {
    var n = new cc.TransitionSlideInR;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionSlideInB = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1
    },
    initScenes: function() {
        this._inScene.setPosition(0, cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR)
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(0, -(cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR)))
    }
}),
cc.TransitionSlideInB.create = function(e, t) {
    var n = new cc.TransitionSlideInB;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionSlideInT = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !0
    },
    initScenes: function() {
        this._inScene.setPosition(0, -(cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR))
    },
    action: function() {
        return cc.MoveBy.create(this._duration, cc.p(0, cc.Director.getInstance().getWinSize().height - cc.ADJUST_FACTOR))
    }
}),
cc.TransitionSlideInT.create = function(e, t) {
    var n = new cc.TransitionSlideInT;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionShrinkGrow = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this),
        this._inScene.setScale(.001),
        this._outScene.setScale(1),
        this._inScene.setAnchorPoint(2 / 3, .5),
        this._outScene.setAnchorPoint(1 / 3, .5);
        var e = cc.ScaleTo.create(this._duration, .01),
        t = cc.ScaleTo.create(this._duration, 1);
        this._inScene.runAction(this.easeActionWithAction(t)),
        this._outScene.runAction(cc.Sequence.create(this.easeActionWithAction(e), cc.CallFunc.create(this.finish, this)))
    },
    easeActionWithAction: function(e) {
        return cc.EaseOut.create(e, 2)
    }
}),
cc.TransitionShrinkGrow.create = function(e, t) {
    var n = new cc.TransitionShrinkGrow;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionFlipX = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e, t;
        this._inScene.setVisible(!1);
        var n;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (e = 90, n = 270, t = 90) : (e = -90, n = 90, t = -90),
        e = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, n, e, 0, 0), cc.CallFunc.create(this.finish, this)),
        t = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, 0, t, 0, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)),
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    }
}),
cc.TransitionFlipX.create = function(e, t, n) {
    null == n && (n = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var r = new cc.TransitionFlipX;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionFlipY = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e, t;
        this._inScene.setVisible(!1);
        var n;
        this._orientation == cc.TRANSITION_ORIENTATION_UP_OVER ? (e = 90, n = 270, t = 90) : (e = -90, n = 90, t = -90),
        e = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, n, e, 90, 0), cc.CallFunc.create(this.finish, this)),
        t = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, 0, t, 90, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)),
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    }
}),
cc.TransitionFlipY.create = function(e, t, n) {
    null == n && (n = cc.TRANSITION_ORIENTATION_UP_OVER);
    var r = new cc.TransitionFlipY;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionFlipAngular = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e, t;
        this._inScene.setVisible(!1);
        var n;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (e = 90, n = 270, t = 90) : (e = -90, n = 90, t = -90),
        e = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, n, e, -45, 0), cc.CallFunc.create(this.finish, this)),
        t = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, 0, t, 45, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)),
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    }
}),
cc.TransitionFlipAngular.create = function(e, t, n) {
    null == n && (n = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var r = new cc.TransitionFlipAngular;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionZoomFlipX = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e, t;
        this._inScene.setVisible(!1);
        var n;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (e = 90, n = 270, t = 90) : (e = -90, n = 90, t = -90),
        e = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, n, e, 0, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.CallFunc.create(this.finish, this)),
        t = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, 0, t, 0, 0), cc.ScaleTo.create(this._duration / 2, .5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)),
        this._inScene.setScale(.5),
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    }
}),
cc.TransitionZoomFlipX.create = function(e, t, n) {
    null == n && (n = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var r = new cc.TransitionZoomFlipX;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionZoomFlipY = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e, t;
        this._inScene.setVisible(!1);
        var n;
        this._orientation === cc.TRANSITION_ORIENTATION_UP_OVER ? (e = 90, n = 270, t = 90) : (e = -90, n = 90, t = -90),
        e = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, n, e, 90, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.CallFunc.create(this.finish, this)),
        t = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, 0, t, 90, 0), cc.ScaleTo.create(this._duration / 2, .5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)),
        this._inScene.setScale(.5),
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    }
}),
cc.TransitionZoomFlipY.create = function(e, t, n) {
    null == n && (n = cc.TRANSITION_ORIENTATION_UP_OVER);
    var r = new cc.TransitionZoomFlipY;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionZoomFlipAngular = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e, t;
        this._inScene.setVisible(!1);
        var n;
        this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER ? (e = 90, n = 270, t = 90) : (e = -90, n = 90, t = -90),
        e = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, n, e, -45, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.Show.create(), cc.CallFunc.create(this.finish, this)),
        t = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, 0, t, 45, 0), cc.ScaleTo.create(this._duration / 2, .5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2)),
        this._inScene.setScale(.5),
        this._inScene.runAction(e),
        this._outScene.runAction(t)
    }
}),
cc.TransitionZoomFlipAngular.create = function(e, t, n) {
    null == n && (n = cc.TRANSITION_ORIENTATION_RIGHT_OVER);
    var r = new cc.TransitionZoomFlipAngular;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionFade = cc.TransitionScene.extend({
    _color: null,
    ctor: function() {
        cc.TransitionScene.prototype.ctor.call(this),
        this._color = new cc.Color4B
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e = cc.LayerColor.create(this._color);
        this._inScene.setVisible(!1),
        this.addChild(e, 2, cc.SCENE_FADE);
        var e = this.getChildByTag(cc.SCENE_FADE),
        t = cc.Sequence.create(cc.FadeIn.create(this._duration / 2), cc.CallFunc.create(this.hideOutShowIn, this), cc.FadeOut.create(this._duration / 2), cc.CallFunc.create(this.finish, this));
        e.runAction(t)
    },
    onExit: function() {
        cc.TransitionScene.prototype.onExit.call(this),
        this.removeChildByTag(cc.SCENE_FADE, !1)
    },
    initWithDuration: function(e, t, n) {
        return n = n || cc.black(),
        cc.TransitionScene.prototype.initWithDuration.call(this, e, t) && (this._color.r = n.r, this._color.g = n.g, this._color.b = n.b, this._color.a = 0),
        !0
    }
}),
cc.TransitionFade.create = function(e, t, n) {
    var r = new cc.TransitionFade;
    return r.initWithDuration(e, t, n),
    r
},
cc.TransitionCrossFade = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e = new cc.Color4B(0, 0, 0, 0),
        t = cc.Director.getInstance().getWinSize(),
        e = cc.LayerColor.create(e),
        n = cc.RenderTexture.create(t.width, t.height);
        if (null != n) {
            n.getSprite().setAnchorPoint(.5, .5),
            n.setPosition(t.width / 2, t.height / 2),
            n.setAnchorPoint(.5, .5),
            n.begin(),
            this._inScene.visit(),
            n.end();
            var r = cc.RenderTexture.create(t.width, t.height);
            r.getSprite().setAnchorPoint(.5, .5),
            r.setPosition(t.width / 2, t.height / 2),
            r.setAnchorPoint(.5, .5),
            r.begin(),
            this._outScene.visit(),
            r.end(),
            n.getSprite().setBlendFunc(gl.ONE, gl.ONE),
            r.getSprite().setBlendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA),
            e.addChild(n),
            e.addChild(r),
            n.getSprite().setOpacity(255),
            r.getSprite().setOpacity(255),
            t = cc.Sequence.create(cc.FadeTo.create(this._duration, 0), cc.CallFunc.create(this.hideOutShowIn, this), cc.CallFunc.create(this.finish, this)),
            r.getSprite().runAction(t),
            this.addChild(e, 2, cc.SCENE_FADE)
        }
    },
    onExit: function() {
        this.removeChildByTag(cc.SCENE_FADE, !1),
        cc.TransitionScene.prototype.onExit.call(this)
    },
    draw: function() {}
}),
cc.TransitionCrossFade.create = function(e, t) {
    var n = new cc.TransitionCrossFade;
    return n.initWithDuration(e, t),
    n
},
cc.TransitionTurnOffTiles = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e = cc.Director.getInstance().getWinSize(),
        e = cc.TurnOffTiles.create(this._duration, cc.size(0 | e.width / e.height * 12, 12)),
        e = this.easeActionWithAction(e);
        this._outScene.runAction(cc.Sequence.create(e, cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
    },
    easeActionWithAction: function(e) {
        return e
    }
}),
cc.TransitionTurnOffTiles.create = function(e, t) {
    var n = new cc.TransitionTurnOffTiles;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionSplitCols = cc.TransitionScene.extend({
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this),
        this._inScene.setVisible(!1);
        var e = this.action(),
        e = cc.Sequence.create(e, cc.CallFunc.create(this.hideOutShowIn, this), e.reverse());
        this.runAction(cc.Sequence.create(this.easeActionWithAction(e), cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
    },
    easeActionWithAction: function(e) {
        return cc.EaseInOut.create(e, 3)
    },
    action: function() {
        return cc.SplitCols.create(this._duration / 2, 3)
    }
}),
cc.TransitionSplitCols.create = function(e, t) {
    var n = new cc.TransitionSplitCols;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionSplitRows = cc.TransitionSplitCols.extend({
    action: function() {
        return cc.SplitRows.create(this._duration / 2, 3)
    }
}),
cc.TransitionSplitRows.create = function(e, t) {
    var n = new cc.TransitionSplitRows;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionFadeTR = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._isInSceneOnTop = !1
    },
    onEnter: function() {
        cc.TransitionScene.prototype.onEnter.call(this);
        var e = cc.Director.getInstance().getWinSize(),
        e = this.actionWithSize(cc.size(0 | e.width / e.height * 12, 12));
        this._outScene.runAction(cc.Sequence.create(this.easeActionWithAction(e), cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
    },
    easeActionWithAction: function(e) {
        return e
    },
    actionWithSize: function(e) {
        return cc.FadeOutTRTiles.create(this._duration, e)
    }
}),
cc.TransitionFadeTR.create = function(e, t) {
    var n = new cc.TransitionFadeTR;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionFadeBL = cc.TransitionFadeTR.extend({
    actionWithSize: function(e) {
        return cc.FadeOutBLTiles.create(this._duration, e)
    }
}),
cc.TransitionFadeBL.create = function(e, t) {
    var n = new cc.TransitionFadeBL;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionFadeUp = cc.TransitionFadeTR.extend({
    actionWithSize: function(e) {
        return cc.FadeOutUpTiles.create(this._duration, e)
    }
}),
cc.TransitionFadeUp.create = function(e, t) {
    var n = new cc.TransitionFadeUp;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.TransitionFadeDown = cc.TransitionFadeTR.extend({
    actionWithSize: function(e) {
        return cc.FadeOutDownTiles.create(this._duration, e)
    }
}),
cc.TransitionFadeDown.create = function(e, t) {
    var n = new cc.TransitionFadeDown;
    return null != n && n.initWithDuration(e, t) ? n: null
},
cc.Touch = cc.Class.extend({
    _point: null,
    _prevPoint: cc.PointZero(),
    _id: 0,
    ctor: function(e, t, n) {
        this._point = cc.p(e || 0, t || 0),
        this._id = n || 0
    },
    getLocation: function() {
        return this._point
    },
    getPreviousLocation: function() {
        return this._prevPoint
    },
    getDelta: function() {
        return cc.pSub(this._point, this._prevPoint)
    },
    getID: function() {
        return this._id
    },
    getId: function() {
        return this._id
    },
    setTouchInfo: function(e, t, n) {
        this._prevPoint = this._point,
        this._point = cc.p(t || 0, n || 0),
        this._id = e
    },
    _setPrevPoint: function(e, t) {
        this._prevPoint = cc.p(e || 0, t || 0)
    }
}),
cc.TouchDelegate = cc.Class.extend({
    _eventTypeFuncMap: null,
    onTouchBegan: function(e, t) {
        return ! 1
    },
    onTouchMoved: function(e, t) {},
    onTouchEnded: function(e, t) {},
    onTouchCancelled: function(e, t) {},
    onTouchesBegan: function(e, t) {},
    onTouchesMoved: function(e, t) {},
    onTouchesEnded: function(e, t) {},
    onTouchesCancelled: function(e, t) {},
    touchDelegateRetain: function() {},
    touchDelegateRelease: function() {}
}),
cc.TargetedTouchDelegate = cc.TouchDelegate.extend({
    onTouchBegan: function(e, t) {
        return ! 1
    },
    onTouchMoved: function(e, t) {},
    onTouchEnded: function(e, t) {},
    onTouchCancelled: function(e, t) {}
}),
cc.StandardTouchDelegate = cc.TouchDelegate.extend({
    onTouchesBegan: function(e, t) {},
    onTouchesMoved: function(e, t) {},
    onTouchesEnded: function(e, t) {},
    onTouchesCancelled: function(e, t) {}
}),
cc.TouchHandler = cc.Class.extend({
    _delegate: null,
    _priority: 0,
    _enabledSelectors: 0,
    getDelegate: function() {
        return this._delegate
    },
    setDelegate: function(e) {
        this._delegate = e
    },
    getPriority: function() {
        return this._priority
    },
    setPriority: function(e) {
        this._priority = e
    },
    getEnabledSelectors: function() {
        return this._enabledSelectors
    },
    setEnalbedSelectors: function(e) {
        this._enabledSelectors = e
    },
    initWithDelegate: function(e, t) {
        if (!e) throw "cc.TouchHandler.initWithDelegate(): touch delegate should not be null";
        return this._delegate = e,
        this._priority = t,
        this._enabledSelectors = 0,
        !0
    }
}),
cc.TouchHandler.create = function(e, t) {
    var n = new cc.TouchHandler;
    return n && n.initWithDelegate(e, t),
    n
},
cc.StandardTouchHandler = cc.TouchHandler.extend({
    initWithDelegate: function(e, t) {
        return cc.TouchHandler.prototype.initWithDelegate.call(this, e, t)
    }
}),
cc.StandardTouchHandler.create = function(e, t) {
    var n = new cc.StandardTouchHandler;
    return n && n.initWithDelegate(e, t),
    n
},
cc.TargetedTouchHandler = cc.TouchHandler.extend({
    _swallowsTouches: !1,
    _claimedTouches: null,
    isSwallowsTouches: function() {
        return this._swallowsTouches
    },
    setSwallowsTouches: function(e) {
        this._swallowsTouches = e
    },
    getClaimedTouches: function() {
        return this._claimedTouches
    },
    initWithDelegate: function(e, t, n) {
        return cc.TouchHandler.prototype.initWithDelegate.call(this, e, t) ? (this._claimedTouches = [], this._swallowsTouches = n, !0) : !1
    }
}),
cc.TargetedTouchHandler.create = function(e, t, n) {
    var r = new cc.TargetedTouchHandler;
    return r && r.initWithDelegate(e, t, n),
    r
},
cc.TouchSelectorBeganBit = 1,
cc.TouchSelectorMovedBit = 2,
cc.TouchSelectorEndedBit = 4,
cc.TouchSelectorCancelledBit = 8,
cc.TouchSelectorAllBits = cc.TouchSelectorBeganBit | cc.TouchSelectorMovedBit | cc.TouchSelectorEndedBit | cc.TouchSelectorCancelledBit,
cc.TOUCH_BEGAN = 0,
cc.TOUCH_MOVED = 1,
cc.TOUCH_ENDED = 2,
cc.TOUCH_CANCELLED = 3,
cc.TouchMax = 4,
cc.less = function(e, t) {
    return e.getPriority() > t.getPriority()
},
cc.TouchHandlerHelperData = function(e) {
    this.type = e
},
cc.TouchDispatcher = cc.Class.extend({
    _mousePressed: !1,
    _targetedHandlers: null,
    _standardHandlers: null,
    _locked: !1,
    _toAdd: !1,
    _toRemove: !1,
    _handlersToAdd: null,
    _handlersToRemove: null,
    _toQuit: !1,
    _dispatchEvents: !1,
    _handlerHelperData: [new cc.TouchHandlerHelperData(cc.TOUCH_BEGAN), new cc.TouchHandlerHelperData(cc.TOUCH_MOVED), new cc.TouchHandlerHelperData(cc.TOUCH_ENDED), new cc.TouchHandlerHelperData(cc.TOUCH_CANCELLED)],
    init: function() {
        return this._dispatchEvents = !0,
        this._targetedHandlers = [],
        this._standardHandlers = [],
        this._handlersToAdd = [],
        this._handlersToRemove = [],
        this._mousePressed = this._locked = this._toQuit = this._toAdd = this._toRemove = !1,
        cc.TouchDispatcher.registerHtmlElementEvent(cc.canvas),
        !0
    },
    _setMousePressed: function(e) {
        this._mousePressed = e
    },
    _getMousePressed: function() {
        return this._mousePressed
    },
    isDispatchEvents: function() {
        return this._dispatchEvents
    },
    setDispatchEvents: function(e) {
        this._dispatchEvents = e
    },
    _addStandardDelegate: function(e, t) {
        var n = cc.StandardTouchHandler.create(e, t || 0);
        this._locked ? -1 != this._handlersToRemove.indexOf(e) ? cc.ArrayRemoveObject(this._handlersToRemove, e) : (this._handlersToAdd.push(n), this._toAdd = !0) : this._standardHandlers = this.forceAddHandler(n, this._standardHandlers)
    },
    _addTargetedDelegate: function(e, t, n) {
        t = cc.TargetedTouchHandler.create(e, t, n),
        this._locked ? -1 != this._handlersToRemove.indexOf(e) ? cc.ArrayRemoveObject(this._handlersToRemove, e) : (this._handlersToAdd.push(t), this._toAdd = !0) : this._targetedHandlers = this.forceAddHandler(t, this._targetedHandlers)
    },
    forceAddHandler: function(e, t) {
        for (var n = 0,
        r, i = 0; i < t.length; i++) if (r = t[i]) if (r.getPriority() < e.getPriority() && ++n, r.getDelegate() == e.getDelegate()) return cc.log("cc.TouchDispatcher.forceAddHandler(): The handler has been added."),
        t;
        return cc.ArrayAppendObjectToIndex(t, e, n)
    },
    forceRemoveAllDelegates: function() {
        this._standardHandlers.length = 0,
        this._targetedHandlers.length = 0
    },
    _removeDelegate: function(e) {
        if (null != e) if (this._locked) {
            var t = this.findHandler(this._handlersToAdd, e);
            t ? cc.ArrayRemoveObject(this._handlersToAdd, t) : (this._handlersToRemove.push(e), this._toRemove = !0)
        } else this.forceRemoveDelegate(e)
    },
    removeAllDelegates: function() {
        this._locked ? this._toQuit = !0 : this.forceRemoveAllDelegates()
    },
    setPriority: function(e, t) {
        if (!t) throw "cc.TouchDispatcher.setPriority(): delegate should be non-null.";
        var n = this.findHandler(t);
        n ? n.getPriority() != e && (n.setPriority(e), this.rearrangeHandlers(this._targetedHandlers), this.rearrangeHandlers(this._standardHandlers)) : cc.log("cc.TouchDispatcher.setPriority(): Can't find TouchHandler.")
    },
    touches: function(e, t, n) {
        if (0 > n || 4 <= n) throw "cc.TouchDispatcher.touches(): invalid index";
        this._locked = !0;
        var r = this._targetedHandlers.length,
        i = this._standardHandlers.length,
        s = r && i,
        o = s ? e.slice() : e,
        u = this._handlerHelperData[n];
        if (0 < r) for (var a, f, l = 0; l < e.length; l++) for (var r = e[l], c = 0; c < this._targetedHandlers.length; c++) {
            a = this._targetedHandlers[c];
            if (!a) break;
            f = !1;
            if (n == cc.TOUCH_BEGAN) a.getDelegate().onTouchBegan && (f = a.getDelegate().onTouchBegan(r, t)) && a.getClaimedTouches().push(r);
            else if (0 < a.getClaimedTouches().length) switch (f = !0, u.type) {
            case cc.TOUCH_MOVED:
                cc.Browser.isMobile ? a.getDelegate().onTouchMoved && a.getDelegate().onTouchMoved(r, t) : this._mousePressed && a.getDelegate().onTouchMoved && a.getDelegate().onTouchMoved(r, t);
                break;
            case cc.TOUCH_ENDED:
                a.getDelegate().onTouchEnded && a.getDelegate().onTouchEnded(r, t),
                a.getClaimedTouches().length = 0;
                break;
            case cc.TOUCH_CANCELLED:
                a.getDelegate().onTouchCancelled && a.getDelegate().onTouchCancelled(r, t),
                a.getClaimedTouches().length = 0
            }
            if (f && a.isSwallowsTouches()) {
                s && cc.ArrayRemoveObject(o, r);
                break
            }
        }
        if (0 < i) for (l = 0; l < this._standardHandlers.length; l++) {
            a = this._standardHandlers[l];
            if (!a) break;
            switch (u.type) {
            case cc.TOUCH_BEGAN:
                0 < o.length && a.getDelegate().onTouchesBegan && a.getDelegate().onTouchesBegan(o, t);
                break;
            case cc.TOUCH_MOVED:
                0 < o.length && (cc.Browser.isMobile ? a.getDelegate().onTouchesMoved && a.getDelegate().onTouchesMoved(o, t) : this._mousePressed && a.getDelegate().onTouchesMoved && a.getDelegate().onTouchesMoved(o, t));
                break;
            case cc.TOUCH_ENDED:
                a.getDelegate().onTouchesEnded && a.getDelegate().onTouchesEnded(o, t);
                break;
            case cc.TOUCH_CANCELLED:
                a.getDelegate().onTouchesCancelled && a.getDelegate().onTouchesCancelled(o, t)
            }
        }
        this._locked = !1;
        if (this._toRemove) {
            this._toRemove = !1;
            for (l = 0; l < this._handlersToRemove.length; l++) this.forceRemoveDelegate(this._handlersToRemove[l]);
            this._handlersToRemove.length = 0
        }
        if (this._toAdd) {
            this._toAdd = !1;
            for (l = 0; l < this._handlersToAdd.length; l++) {
                a = this._handlersToAdd[l];
                if (!a) break;
                a instanceof cc.TargetedTouchHandler ? this._targetedHandlers = this.forceAddHandler(a, this._targetedHandlers) : this._standardHandlers = this.forceAddHandler(a, this._standardHandlers)
            }
            this._handlersToAdd.length = 0
        }
        this._toQuit && (this._toQuit = !1, this.forceRemoveAllDelegates())
    },
    touchesBegan: function(e, t) {
        this._dispatchEvents && this.touches(e, t, cc.TOUCH_BEGAN)
    },
    touchesMoved: function(e, t) {
        this._dispatchEvents && this.touches(e, t, cc.TOUCH_MOVED)
    },
    touchesEnded: function(e, t) {
        this._dispatchEvents && this.touches(e, t, cc.TOUCH_ENDED)
    },
    touchesCancelled: function(e, t) {
        this._dispatchEvents && this.touches(e, t, cc.TOUCH_CANCELLED)
    },
    findHandler: function(e, t) {
        switch (arguments.length) {
        case 1:
            t = arguments[0];
            if (!t) throw "cc.TouchDispatcher.findHandler(): delegate should be non-null.";
            for (var n = 0; n < this._targetedHandlers.length; n++) if (this._targetedHandlers[n].getDelegate() == t) return this._targetedHandlers[n];
            for (n = 0; n < this._standardHandlers.length; n++) if (this._standardHandlers[n].getDelegate() == t) return this._standardHandlers[n];
            return null;
        case 2:
            if (!e) throw "cc.TouchDispatcher.findHandler(): array should be non-null.";
            if (!t) throw "cc.TouchDispatcher.findHandler(): delegate should be non-null.";
            for (n = 0; n < e.length; n++) if (e[n].getDelegate() == t) return e[n];
            return null;
        default:
            throw "Argument must be non-nil "
        }
    },
    forceRemoveDelegate: function(e) {
        for (var t, n = 0; n < this._standardHandlers.length; n++) if ((t = this._standardHandlers[n]) && t.getDelegate() == e) {
            cc.ArrayRemoveObject(this._standardHandlers, t);
            break
        }
        for (n = 0; n < this._targetedHandlers.length; n++) if ((t = this._targetedHandlers[n]) && t.getDelegate() == e) {
            cc.ArrayRemoveObject(this._targetedHandlers, t);
            break
        }
    },
    rearrangeHandlers: function(e) {
        e.sort(cc.less)
    }
}),
cc.TouchDispatcher.preTouchPoint = cc.p(0, 0),
cc.TouchDispatcher.isRegisterEvent = !1,
cc.getHTMLElementPosition = function(e) {
    var t = document.documentElement,
    n = window,
    r = null,
    r = "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : e instanceof HTMLCanvasElement ? {
        left: 0,
        top: 0,
        width: e.width,
        height: e.height
    }: {
        left: 0,
        top: 0,
        width: parseInt(e.style.width),
        height: parseInt(e.style.height)
    };
    return {
        left: r.left + n.pageXOffset - t.clientLeft,
        top: r.top + n.pageYOffset - t.clientTop,
        width: r.width,
        height: r.height
    }
},
cc.ProcessMouseupEvent = function(e, t) {
    var n = cc.getHTMLElementPosition(e),
    r,
    i;
    null != t.pageX ? (r = t.pageX, i = t.pageY) : (n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop, r = t.clientX, i = t.clientY),
    r = cc.EGLView.getInstance().convertToLocationInView(r, i, n),
    n = new cc.Touch(r.x, r.y),
    n._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y),
    cc.TouchDispatcher.preTouchPoint.x = r.x,
    cc.TouchDispatcher.preTouchPoint.y = r.y,
    r = [],
    r.push(n),
    cc.EGLView.getInstance().touchesEnded(r, null)
},
cc.TouchDispatcher.registerHtmlElementEvent = function(e) {
    if (!cc.TouchDispatcher.isRegisterEvent) {
        if (cc.Browser.isMobile) if (window.navigator.msPointerEnabled) {
            var t = {
                MSPointerDown: "touchesBegan",
                MSPointerMove: "touchesMoved",
                MSPointerUp: "touchesEnded",
                MSPointerCancel: "touchesCancelled"
            },
            n;
            for (n in t)(function(t, n) {
                e.addEventListener(t,
                function(t) {
                    var r = cc.getHTMLElementPosition(e);
                    r.left -= document.body.scrollLeft,
                    r.top -= document.body.scrollTop;
                    var i, s;
                    i = t.clientX,
                    s = t.clientY,
                    i = cc.EGLView.getInstance().convertToLocationInView(i, s, r),
                    r = new cc.Touch(i.x, i.y),
                    r._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y),
                    cc.TouchDispatcher.preTouchPoint.x = i.x,
                    cc.TouchDispatcher.preTouchPoint.y = i.y,
                    cc.Director.getInstance().getTouchDispatcher()[n]([r], null),
                    t.stopPropagation(),
                    t.preventDefault()
                },
                !1)
            })(n, t[n])
        } else e.addEventListener("touchstart",
        function(t) {
            if (t.changedTouches) {
                var n = [],
                r = cc.getHTMLElementPosition(e);
                r.left -= document.body.scrollLeft,
                r.top -= document.body.scrollTop;
                for (var i, s, o, u = t.changedTouches.length,
                a = 0; a < u; a++) if (i = t.changedTouches[a]) s = i.clientX,
                o = i.clientY,
                s = cc.EGLView.getInstance().convertToLocationInView(s, o, r),
                i.hasOwnProperty("identifier") ? (i = new cc.Touch(s.x, s.y, i.identifier), o = cc.TouchDispatcher._getPreTouch(i).getLocation(), i._setPrevPoint(o.x, o.y), cc.TouchDispatcher._setPreTouch(i)) : (i = new cc.Touch(s.x, s.y), i._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)),
                cc.TouchDispatcher.preTouchPoint.x = s.x,
                cc.TouchDispatcher.preTouchPoint.y = s.y,
                n.push(i);
                cc.EGLView.getInstance().touchesBegan(n, null),
                t.stopPropagation(),
                t.preventDefault()
            }
        },
        !1),
        e.addEventListener("touchmove",
        function(t) {
            if (t.changedTouches) {
                var n = [],
                r = cc.getHTMLElementPosition(e);
                r.left -= document.body.scrollLeft,
                r.top -= document.body.scrollTop;
                for (var i, s, o, u = t.changedTouches.length,
                a = 0; a < u; a++) if (i = t.changedTouches[a]) s = i.clientX,
                o = i.clientY,
                s = cc.EGLView.getInstance().convertToLocationInView(s, o, r),
                i.hasOwnProperty("identifier") ? (i = new cc.Touch(s.x, s.y, i.identifier), o = cc.TouchDispatcher._getPreTouch(i).getLocation(), i._setPrevPoint(o.x, o.y), cc.TouchDispatcher._setPreTouch(i)) : (i = new cc.Touch(s.x, s.y), i._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)),
                cc.TouchDispatcher.preTouchPoint.x = s.x,
                cc.TouchDispatcher.preTouchPoint.y = s.y,
                n.push(i);
                cc.EGLView.getInstance().touchesMoved(n, null),
                t.stopPropagation(),
                t.preventDefault()
            }
        },
        !1),
        e.addEventListener("touchend",
        function(t) {
            if (t.changedTouches) {
                var n = [],
                r = cc.getHTMLElementPosition(e);
                r.left -= document.body.scrollLeft,
                r.top -= document.body.scrollTop;
                for (var i, s, o, u = t.changedTouches.length,
                a = 0; a < u; a++) if (i = t.changedTouches[a]) s = i.clientX,
                o = i.clientY,
                s = cc.EGLView.getInstance().convertToLocationInView(s, o, r),
                i.hasOwnProperty("identifier") ? (i = new cc.Touch(s.x, s.y, i.identifier), o = cc.TouchDispatcher._getPreTouch(i).getLocation(), i._setPrevPoint(o.x, o.y), cc.TouchDispatcher._deletePreTouchWithSameId(i)) : (i = new cc.Touch(s.x, s.y), i._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)),
                cc.TouchDispatcher.preTouchPoint.x = s.x,
                cc.TouchDispatcher.preTouchPoint.y = s.y,
                n.push(i);
                cc.EGLView.getInstance().touchesEnded(n, null),
                t.stopPropagation(),
                t.preventDefault()
            }
        },
        !1),
        e.addEventListener("touchcancel",
        function(t) {
            if (t.changedTouches) {
                var n = [],
                r = cc.getHTMLElementPosition(e);
                r.left -= document.body.scrollLeft,
                r.top -= document.body.scrollTop;
                for (var i, s, o, u = t.changedTouches.length,
                a = 0; a < u; a++) if (i = t.changedTouches[a]) s = i.clientX,
                o = i.clientY,
                s = cc.EGLView.getInstance().convertToLocationInView(s, o, r),
                i.hasOwnProperty("identifier") ? (i = new cc.Touch(s.x, s.y, i.identifier), o = cc.TouchDispatcher._getPreTouch(i).getLocation(), i._setPrevPoint(o.x, o.y), cc.TouchDispatcher._deletePreTouchWithSameId(i)) : (i = new cc.Touch(s.x, s.y), i._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y)),
                cc.TouchDispatcher.preTouchPoint.x = s.x,
                cc.TouchDispatcher.preTouchPoint.y = s.y,
                n.push(i);
                cc.EGLView.getInstance().touchesCancelled(n, null),
                t.stopPropagation(),
                t.preventDefault()
            }
        },
        !1);
        else window.addEventListener("mousedown",
        function(e) {
            cc.Director.getInstance().getTouchDispatcher()._setMousePressed(!0)
        }),
        window.addEventListener("mouseup",
        function(t) {
            cc.Director.getInstance().getTouchDispatcher()._setMousePressed(!1);
            var n = cc.getHTMLElementPosition(e),
            r;
            null != t.pageX ? (r = t.pageX, t = t.pageY) : (n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop, r = t.clientX, t = t.clientY),
            cc.rectContainsPoint(new cc.Rect(n.left, n.top, n.width, n.height), cc.p(r, t)) || (r = cc.EGLView.getInstance().convertToLocationInView(r, t, n), n = new cc.Touch(r.x, r.y), n._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y), cc.TouchDispatcher.preTouchPoint.x = r.x, cc.TouchDispatcher.preTouchPoint.y = r.y, r = [], r.push(n), cc.EGLView.getInstance().touchesEnded(r, null))
        }),
        e.addEventListener("mousedown",
        function(t) {
            var n = cc.getHTMLElementPosition(e),
            r;
            null != t.pageX ? (r = t.pageX, t = t.pageY) : (n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop, r = t.clientX, t = t.clientY),
            r = cc.EGLView.getInstance().convertToLocationInView(r, t, n),
            n = new cc.Touch(r.x, r.y),
            n._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y),
            cc.TouchDispatcher.preTouchPoint.x = r.x,
            cc.TouchDispatcher.preTouchPoint.y = r.y,
            r = [],
            r.push(n),
            cc.EGLView.getInstance().touchesBegan(r, null)
        }),
        e.addEventListener("mouseup",
        function(t) {
            cc.ProcessMouseupEvent(e, t)
        }),
        e.addEventListener("mousemove",
        function(t) {
            var n = cc.getHTMLElementPosition(e),
            r;
            null != t.pageX ? (r = t.pageX, t = t.pageY) : (n.left -= document.body.scrollLeft, n.top -= document.body.scrollTop, r = t.clientX, t = t.clientY),
            r = cc.EGLView.getInstance().convertToLocationInView(r, t, n),
            n = new cc.Touch(r.x, r.y),
            n._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y),
            cc.TouchDispatcher.preTouchPoint.x = r.x,
            cc.TouchDispatcher.preTouchPoint.y = r.y,
            r = [],
            r.push(n),
            cc.EGLView.getInstance().touchesMoved(r, null)
        });
        cc.TouchDispatcher.isRegisterEvent = !0
    }
},
cc.TouchDispatcher._getPreTouch = function(e) {
    for (var t = null,
    n = cc.TouchDispatcher._preTouchPool,
    r = e.getId(), i = n.length - 1; 0 <= i; i--) if (n[i].getId() == r) {
        t = n[i];
        break
    }
    return t || (t = e),
    t
},
cc.TouchDispatcher._setPreTouch = function(e) {
    for (var t = !1,
    n = cc.TouchDispatcher._preTouchPool,
    r = e.getId(), i = n.length - 1; 0 <= i; i--) if (n[i].getId() == r) {
        n[i] = e,
        t = !0;
        break
    }
    t || (50 >= n.length ? n.push(e) : (n[cc.TouchDispatcher._preTouchPoolPointer] = e, cc.TouchDispatcher._preTouchPoolPointer = (cc.TouchDispatcher._preTouchPoolPointer + 1) % 50))
},
cc.TouchDispatcher._deletePreTouchWithSameId = function(e) {
    var t, n = cc.TouchDispatcher._preTouchPool;
    t = e.getId();
    for (e = n.length - 1; 0 <= e; e--) if (n[e].getId() == t) {
        t = n.pop(),
        e != n.length && (n[e] = t);
        break
    }
},
cc.TouchDispatcher._preTouchPool = [],
cc.TouchDispatcher._preTouchPoolPointer = 0,
cc.registerTargetedDelegate = function(e, t, n) {
    cc.Director.getInstance().getTouchDispatcher()._addTargetedDelegate(n, e, t)
},
cc.registerStandardDelegate = function(e, t) {
    cc.Director.getInstance().getTouchDispatcher()._addStandardDelegate(e, t)
},
cc.unregisterTouchDelegate = function(e) {
    cc.Director.getInstance().getTouchDispatcher()._removeDelegate(e)
},
cc.MOUSE_DOWN = 1,
cc.MOUSE_MOVED = 2,
cc.MOUSE_DRAGGED = 4,
cc.MOUSE_UP = 8,
cc.RIGHT_MOUSE_DOWN = 16,
cc.RIGHT_MOUSE_DRAGGED = 32,
cc.RIGHT_MOUSE_UP = 64,
cc.OTHER_MOUSE_DOWN = 128,
cc.OTHER_MOUSE_DRAGGED = 256,
cc.OTHER_MOUSE_UP = 512,
cc.SCROLL_WHEEL = 1024,
cc.MOUSE_ENTERED = 2048,
cc.MOUSE_EXITED = 4096,
cc.MOUSE_LEFTBUTTON = 0,
cc.MOUSE_MIDDLEBUTTON = 1,
cc.MOUSE_RIGHTBUTTON = 2,
cc.MouseEventDelegate = cc.Class.extend({
    onMouseDown: function(e) {
        return ! 1
    },
    onMouseDragged: function(e) {
        return ! 1
    },
    onMouseMoved: function(e) {
        return ! 1
    },
    onMouseUp: function(e) {
        return ! 1
    },
    onRightMouseDown: function(e) {
        return ! 1
    },
    onRightMouseDragged: function(e) {
        return ! 1
    },
    onRightMouseUp: function(e) {
        return ! 1
    },
    onOtherMouseDown: function(e) {
        return ! 1
    },
    onOtherMouseDragged: function(e) {
        return ! 1
    },
    onOtherMouseUp: function(e) {
        return ! 1
    },
    onScrollWheel: function(e) {
        return ! 1
    },
    onMouseEntered: function(e) {
        return ! 1
    },
    onMouseExited: function(e) {
        return ! 1
    }
}),
cc.Mouse = cc.Touch.extend({
    _wheelDelta: 0,
    _button: cc.MOUSE_LEFTBUTTON,
    getWheelDelta: function() {
        return this._wheelDelta
    },
    setWheelDelta: function(e) {
        this._wheelDelta = e
    },
    getButton: function() {
        return this._button
    },
    setButton: function(e) {
        this._button = e
    }
}),
cc.MouseHandler = cc.Class.extend({
    _delegate: null,
    _priority: 0,
    _enabledSelectors: 0,
    getDelegate: function() {
        return this._delegate
    },
    setDelegate: function(e) {
        this._delegate = e
    },
    getPriority: function() {
        return this._priority
    },
    setPriority: function(e) {
        this._priority = e
    },
    getEnabledSelectors: function() {
        return this._enabledSelectors
    },
    setEnalbedSelectors: function(e) {
        this._enabledSelectors = e
    },
    initWithDelegate: function(e, t) {
        this._delegate = e,
        this._priority = t
    }
}),
cc.MouseHandler.create = function(e, t) {
    var n = new cc.MouseHandler;
    return n.initWithDelegate(e, t),
    n
},
cc.MouseDispatcher = cc.Class.extend({
    _mousePressed: !1,
    _rightMousePressed: !1,
    _mouseDelegateHandlers: null,
    _dispatchEvents: !1,
    init: function() {
        return this._dispatchEvents = !0,
        this._mouseDelegateHandlers = [],
        this._rightMousePressed = this._mousePressed = !1,
        cc.MouseDispatcher._registerHtmlElementEvent(cc.canvas),
        !0
    },
    _setMousePressed: function(e) {
        this._mousePressed = e
    },
    _getMousePressed: function() {
        return this._mousePressed
    },
    _setRightMousePressed: function(e) {
        this._rightMousePressed = e
    },
    _getRightMousePressed: function() {
        return this._rightMousePressed
    },
    addMouseDelegate: function(e, t) {
        var n = cc.MouseHandler.create(e, t);
        this._mouseDelegateHandlers = this.forceAddHandler(n, this._mouseDelegateHandlers)
    },
    forceAddHandler: function(e, t) {
        for (var n = 0,
        r = 0; r < t.length; r++) {
            var i = t[r];
            if (i && (i.getPriority() < e.getPriority() && ++n, i.getDelegate() == e.getDelegate())) return cc.log("cc.MouseDispatcher.forceAddHandler(): handler has been added."),
            t
        }
        return cc.ArrayAppendObjectToIndex(t, e, n)
    },
    removeMouseDelegate: function(e) {
        if (null != e) for (var t = 0; t < this._mouseDelegateHandlers.length; t++) {
            var n = this._mouseDelegateHandlers[t];
            if (n && n.getDelegate() == e) {
                cc.ArrayRemoveObject(this._mouseDelegateHandlers, n);
                break
            }
        }
    },
    _findHandler: function(e) {
        for (var t = 0; t < this._mouseDelegateHandlers.length; t++) if (this._mouseDelegateHandlers[t] && this._mouseDelegateHandlers[t].getDelegate() == e) return this._mouseDelegateHandlers[t];
        return null
    },
    setPriority: function(e, t) {
        if (!t) throw "cc.MouseDispatcher.setPriority(): delegate should be non-null";
        var n = this._findHandler(t);
        n ? n.getPriority() != e && (n.setPriority(e), this._mouseDelegateHandlers.sort(cc.less)) : cc.log("cc.MouseDispatcher.setPriority(): Can't find MouseHandler in array")
    },
    removeAllMouseDelegates: function() {
        this._mouseDelegateHandlers.length = 0
    },
    mouseHandle: function(e, t, n) {
        for (t = 0; t < this._mouseDelegateHandlers.length; t++) {
            var r = this._mouseDelegateHandlers[t];
            switch (n) {
            case cc.MOUSE_DOWN:
                e.getButton() == cc.MOUSE_RIGHTBUTTON ? r.getDelegate().onRightMouseDown && r.getDelegate().onRightMouseDown(e) : r.getDelegate().onMouseDown && r.getDelegate().onMouseDown(e);
                break;
            case cc.MOUSE_UP:
                e.getButton() == cc.MOUSE_RIGHTBUTTON ? r.getDelegate().onRightMouseUp && r.getDelegate().onRightMouseUp(e) : r.getDelegate().onMouseUp && r.getDelegate().onMouseUp(e);
                break;
            case cc.MOUSE_MOVED:
                this._mousePressed ? r.getDelegate().onMouseDragged && r.getDelegate().onMouseDragged(e) : this._rightMousePressed ? r.getDelegate().onRightMouseDragged && r.getDelegate().onRightMouseDragged(e) : r.getDelegate().onMouseMoved && r.getDelegate().onMouseMoved(e);
                break;
            case cc.MOUSE_ENTERED:
                r.getDelegate().onMouseEntered && r.getDelegate().onMouseEntered(e);
                break;
            case cc.MOUSE_EXITED:
                r.getDelegate().onMouseExited && r.getDelegate().onMouseExited(e);
                break;
            case cc.SCROLL_WHEEL:
                r.getDelegate().onScrollWheel && r.getDelegate().onScrollWheel(e)
            }
        }
    }
}),
cc.MouseDispatcher._preMousePoint = cc.p(0, 0),
cc.MouseDispatcher._isRegisterEvent = !1,
cc.MouseDispatcher._registerHtmlElementEvent = function(e) {
    function t(t) {
        var n = cc.getHTMLElementPosition(e),
        r = t.pageX,
        i = t.pageY,
        s = cc.EGLView.getInstance(),
        r = (r - n.left) / s.getScaleX(),
        n = (n.height - (i - n.top)) / s.getScaleY(),
        i = new cc.Mouse(r, n);
        return i._setPrevPoint(cc.MouseDispatcher._preMousePoint.x, cc.MouseDispatcher._preMousePoint.y),
        i.setButton(t.button),
        cc.MouseDispatcher._preMousePoint.x = r,
        cc.MouseDispatcher._preMousePoint.y = n,
        i
    }
    cc.MouseDispatcher._isRegisterEvent || (window.addEventListener("mousedown",
    function(e) {
        e.button == cc.MOUSE_RIGHTBUTTON ? cc.Director.getInstance().getMouseDispatcher()._setRightMousePressed(!0) : cc.Director.getInstance().getMouseDispatcher()._setMousePressed(!0)
    }), window.addEventListener("mouseup",
    function(e) {
        e.button == cc.MOUSE_RIGHTBUTTON ? cc.Director.getInstance().getMouseDispatcher()._setRightMousePressed(!1) : cc.Director.getInstance().getMouseDispatcher()._setMousePressed(!1)
    }), e.addEventListener("mousedown",
    function(e) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(t(e), e, cc.MOUSE_DOWN)
    }), e.addEventListener("mouseup",
    function(e) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(t(e), e, cc.MOUSE_UP)
    }), e.addEventListener("mousemove",
    function(e) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(t(e), e, cc.MOUSE_MOVED)
    }), e.addEventListener("mousewheel",
    function(e) {
        var n = t(e);
        n.setWheelDelta(e.wheelDelta),
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(n, e, cc.SCROLL_WHEEL)
    },
    !1), e.addEventListener("DOMMouseScroll",
    function(e) {
        var n = t(e);
        n.setWheelDelta( - 120 * e.detail),
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(n, e, cc.SCROLL_WHEEL)
    }), e.addEventListener("mouseout",
    function(e) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(t(e), e, cc.MOUSE_EXITED)
    },
    !1), e.addEventListener("mouseover",
    function(e) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(t(e), e, cc.MOUSE_ENTERED)
    },
    !1))
},
function() {
    var e = "core/platform/CCClass.js core/cocoa/CCGeometry.js core/platform/Sys.js core/platform/CCConfig.js core/platform/miniFramework.js core/platform/CCCommon.js core/platform/CCMacro.js core/platform/CCFileUtils.js core/platform/CCTypes.js core/platform/CCEGLView.js core/platform/CCScreen.js core/platform/CCVisibleRect.js core/cocoa/CCNS.js core/cocoa/CCAffineTransform.js core/support/CCPointExtension.js core/support/CCVertex.js core/support/TransformUtils.js core/base_nodes/CCNode.js core/base_nodes/CCAtlasNode.js core/textures/CCTexture2D.js core/textures/CCTextureCache.js core/textures/CCTextureAtlas.js core/scenes_nodes/CCScene.js core/layers_nodes/CCLayer.js core/sprite_nodes/CCSprite.js core/sprite_nodes/CCAnimation.js core/sprite_nodes/CCAnimationCache.js core/sprite_nodes/CCSpriteFrame.js core/sprite_nodes/CCSpriteFrameCache.js core/sprite_nodes/CCSpriteBatchNode.js core/CCConfiguration.js core/CCDirector.js core/CCCamera.js core/CCScheduler.js core/CCLoader.js core/CCDrawingPrimitives.js core/platform/CCApplication.js core/platform/CCSAXParser.js core/platform/AppControl.js core/labelTTF/CCLabelTTF.js core/CCActionManager.js kazmath/utility.js kazmath/vec2.js kazmath/vec3.js kazmath/vec4.js kazmath/ray2.js kazmath/mat3.js kazmath/mat4.js kazmath/plane.js kazmath/quaternion.js kazmath/aabb.js kazmath/GL/mat4stack.js kazmath/GL/matrix.js shaders/CCShaders.js shaders/CCShaderCache.js shaders/CCGLProgram.js shaders/CCGLStateCache.js render_texture/CCRenderTexture.js motion_streak/CCMotionStreak.js clipping_nodes/CCClippingNode.js effects/CCGrid.js effects/CCGrabber.js shape_nodes/CCDrawNode.js actions/CCAction.js actions/CCActionInterval.js actions/CCActionInstant.js actions/CCActionCamera.js actions/CCActionEase.js actions/CCActionCatmullRom.js actions/CCActionTween.js actions3d/CCActionGrid.js actions3d/CCActionGrid3D.js actions3d/CCActionTiledGrid.js actions3d/CCActionPageTurn3D.js progress_timer/CCProgressTimer.js progress_timer/CCActionProgressTimer.js transitions_nodes/CCTransition.js transitions_nodes/CCTransitionProgress.js transitions_nodes/CCTransitionPageTurn.js label_nodes/CCLabelAtlas.js label_nodes/CCLabelBMFont.js compress/ZipUtils.js compress/base64.js compress/gzip.js compress/zlib.min.js particle_nodes/CCFormatHelper.js particle_nodes/CCPNGReader.js particle_nodes/CCTIFFReader.js particle_nodes/CCParticleSystem.js particle_nodes/CCParticleExamples.js particle_nodes/CCParticleBatchNode.js touch_dispatcher/CCTouchDelegateProtocol.js touch_dispatcher/CCTouchHandler.js touch_dispatcher/CCTouchDispatcher.js touch_dispatcher/CCMouseDispatcher.js keyboard_dispatcher/CCKeyboardDelegate.js keyboard_dispatcher/CCKeyboardDispatcher.js accelerometer/CCAccelerometer.js text_input_node/CCIMEDispatcher.js text_input_node/CCTextFieldTTF.js menu_nodes/CCMenuItem.js menu_nodes/CCMenu.js tileMap_nodes/CCTGAlib.js tileMap_nodes/CCTMXTiledMap.js tileMap_nodes/CCTMXXMLParser.js tileMap_nodes/CCTMXObjectGroup.js tileMap_nodes/CCTMXLayer.js parallax_nodes/CCParallaxNode.js audio/SimpleAudioEngine.js CCUserDefault.js CCImage.js".split(" "),
    t = document,
    n = t.ccConfig;
    null != n.loadExtension && 1 == n.loadExtension && (e = e.concat("../extensions/GUI/CCControlExtension/CCControl.js ../extensions/GUI/CCControlExtension/CCControlButton.js ../extensions/GUI/CCControlExtension/CCControlUtils.js ../extensions/GUI/CCControlExtension/CCInvocation.js ../extensions/GUI/CCControlExtension/CCScale9Sprite.js ../extensions/GUI/CCControlExtension/CCMenuPassive.js ../extensions/GUI/CCControlExtension/CCControlSaturationBrightnessPicker.js ../extensions/GUI/CCControlExtension/CCControlHuePicker.js ../extensions/GUI/CCControlExtension/CCControlColourPicker.js ../extensions/GUI/CCControlExtension/CCControlSlider.js ../extensions/GUI/CCControlExtension/CCControlSwitch.js ../extensions/GUI/CCControlExtension/CCControlStepper.js ../extensions/GUI/CCControlExtension/CCControlPotentiometer.js ../extensions/GUI/CCScrollView/CCScrollView.js ../extensions/GUI/CCScrollView/CCSorting.js ../extensions/GUI/CCScrollView/CCTableView.js ../extensions/CCBReader/CCNodeLoader.js ../extensions/CCBReader/CCBReaderUtil.js ../extensions/CCBReader/CCControlLoader.js ../extensions/CCBReader/CCSpriteLoader.js ../extensions/CCBReader/CCNodeLoaderLibrary.js ../extensions/CCBReader/CCBReader.js ../extensions/CCBReader/CCBValue.js ../extensions/CCBReader/CCBKeyframe.js ../extensions/CCBReader/CCBSequence.js ../extensions/CCBReader/CCBRelativePositioning.js ../extensions/CCBReader/CCBAnimationManager.js ../extensions/CCEditBox/CCdomNode.js ../extensions/CCEditBox/CCEditBox.js ../extensions/CocoStudio/Components/CCComponent.js ../extensions/CocoStudio/Components/CCComponentContainer.js ../extensions/CocoStudio/CocoStudio.js ../extensions/CocoStudio/Armature/utils/CCArmatureDefine.js ../extensions/CocoStudio/Armature/utils/CCDataReaderHelper.js ../extensions/CocoStudio/Armature/utils/CCSpriteFrameCacheHelper.js ../extensions/CocoStudio/Armature/utils/CCTransformHelp.js ../extensions/CocoStudio/Armature/utils/CCTweenFunction.js ../extensions/CocoStudio/Armature/utils/CCUtilMath.js ../extensions/CocoStudio/Armature/utils/CCArmatureDataManager.js ../extensions/CocoStudio/Armature/datas/CCDatas.js ../extensions/CocoStudio/Armature/display/CCDecorativeDisplay.js ../extensions/CocoStudio/Armature/display/CCDisplayFactory.js ../extensions/CocoStudio/Armature/display/CCDisplayManager.js ../extensions/CocoStudio/Armature/display/CCSkin.js ../extensions/CocoStudio/Armature/animation/CCProcessBase.js ../extensions/CocoStudio/Armature/animation/CCArmatureAnimation.js ../extensions/CocoStudio/Armature/animation/CCTween.js ../extensions/CocoStudio/Armature/physics/CCColliderDetector.js ../extensions/CocoStudio/Armature/CCArmature.js ../extensions/CocoStudio/Armature/CCBone.js ../extensions/CocoStudio/Action/CCActionFrame.js ../extensions/CocoStudio/Action/CCActionManager.js ../extensions/CocoStudio/Action/CCActionNode.js ../extensions/CocoStudio/Action/CCActionObject.js ../extensions/CocoStudio/Components/CCComAttribute.js ../extensions/CocoStudio/Components/CCComAudio.js ../extensions/CocoStudio/Components/CCComController.js ../extensions/CocoStudio/Components/CCComRender.js ../extensions/CocoStudio/Trigger/ObjectFactory.js ../extensions/CocoStudio/Trigger/TriggerBase.js ../extensions/CocoStudio/Trigger/TriggerMng.js ../extensions/CocoStudio/Trigger/TriggerObj.js ../extensions/CocoStudio/GUI/BaseClasses/UIWidget.js ../extensions/CocoStudio/GUI/Layouts/UILayout.js ../extensions/CocoStudio/GUI/Layouts/UILayoutParameter.js ../extensions/CocoStudio/GUI/Layouts/UILayoutDefine.js ../extensions/CocoStudio/GUI/System/CocosGUI.js ../extensions/CocoStudio/GUI/System/UIHelper.js ../extensions/CocoStudio/GUI/System/UILayer.js ../extensions/CocoStudio/GUI/UIWidgets/UIButton.js ../extensions/CocoStudio/GUI/UIWidgets/UICheckBox.js ../extensions/CocoStudio/GUI/UIWidgets/UIImageView.js ../extensions/CocoStudio/GUI/UIWidgets/UILabel.js ../extensions/CocoStudio/GUI/UIWidgets/UILabelAtlas.js ../extensions/CocoStudio/GUI/UIWidgets/UILabelBMFont.js ../extensions/CocoStudio/GUI/UIWidgets/UILoadingBar.js ../extensions/CocoStudio/GUI/UIWidgets/UISlider.js ../extensions/CocoStudio/GUI/UIWidgets/UISwitch.js ../extensions/CocoStudio/GUI/UIWidgets/UITextField.js ../extensions/CocoStudio/GUI/UIWidgets/Compatible/CompatibleClasses.js ../extensions/CocoStudio/GUI/UIWidgets/ScrollWidget/UIScrollView.js ../extensions/CocoStudio/GUI/UIWidgets/ScrollWidget/UIListView.js ../extensions/CocoStudio/GUI/UIWidgets/ScrollWidget/UIPageView.js ../extensions/CocoStudio/Reader/GUIReader.js ../extensions/CocoStudio/Reader/SceneReader.js".split(" "))),
    null != n.loadPluginx && 1 == n.loadPluginx && (e = e.concat("../extensions/PluginX/protocols/Config.js ../extensions/PluginX/protocols/PluginUtils.js ../extensions/PluginX/protocols/PluginProtocol.js ../extensions/PluginX/protocols/ProtocolSocial.js ../extensions/PluginX/protocols/PluginFactory.js ../extensions/PluginX/protocols/PluginManager.js ../extensions/PluginX/plugins/SocialWeibo.js ../extensions/PluginX/plugins/SocialQQWeibo.js ../extensions/PluginX/plugins/SocialQzone.js ../extensions/PluginX/plugins/SocialTwitter.js ../extensions/PluginX/plugins/SocialFacebook.js".split(" ")));
    if (n.engineDir) {
        if (n.box2d || n.chipmunk) e.push("physics_nodes/CCPhysicsSprite.js"),
        e.push("physics_nodes/CCPhysicsDebugNode.js"),
        !0 === n.box2d && e.push("../external/box2d/box2d.js"),
        !0 === n.chipmunk && e.push("../external/chipmunk/chipmunk.js");
        e.forEach(function(t, r) {
            e[r] = n.engineDir + t
        })
    } else e = [];
    "string" == typeof n.box2d && e.push(n.box2d),
    "string" == typeof n.chipmunk && e.push(n.chipmunk);
    var r = document.getElementById("cocos2d_loadJsImg");
    if (!r) {
        r = document.createElement("img"),
        r.src = "";
        var i = document.getElementById(n.tag);
        i.style.backgroundColor = "black",
        i.parentNode.appendChild(r);
        var s = getComputedStyle ? getComputedStyle(i) : i.currentStyle;
        r.style.left = i.offsetLeft + (parseFloat(s.width) - r.width) / 2 + "px",
        r.style.top = i.offsetTop + (parseFloat(s.height) - r.height) / 2 + "px",
        r.style.position = "absolute"
    }
    var o = function(e) {
        1 <= e && r.parentNode.removeChild(r)
    },
    u = 0,
    a = e.concat(n.appFiles);
    a.push("assets/js/main.js");
    if ( - 1 < navigator.userAgent.indexOf("Trident/5")) {
        var f = -1,
        l = function() {
            f++;
            if (f < a.length) {
                var e = t.createElement("script");
                e.src = a[f],
                e.addEventListener("load",
                function() {
                    l(),
                    o(u / a.length),
                    this.removeEventListener("load", arguments.callee, !1)
                },
                !1),
                t.body.appendChild(e)
            }
            o(f / (a.length - 1))
        };
        l()
    } else a.forEach(function(e, n) {
        var r = t.createElement("script");
        r.async = !1,
        r.src = e,
        r.addEventListener("load",
        function() {
            u++,
            o(u / a.length),
            this.removeEventListener("load", arguments.callee, !1)
        },
        !1),
        t.body.appendChild(r)
    })
} ();