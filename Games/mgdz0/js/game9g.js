var _czc = _czc || [];
! function(a, b) {
    "function" == typeof define && (define.amd || define.cmd) ? define(function() {
        return b(a)
    }) : b(a, !0)
}(this, function(a, b) {
    function c(b, c, d) {
        a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function(a) {
            g(b, a, d)
        }) : j(b, d)
    }

    function d(b, c, d) {
        a.WeixinJSBridge ? WeixinJSBridge.on(b, function(a) {
            d && d.trigger && d.trigger(a), g(b, a, c)
        }) : d ? j(b, d) : j(b, c)
    }

    function e(a) {
        return a = a || {}, a.appId = z.appId, a.verifyAppId = z.appId, a.verifySignType = "sha1", a.verifyTimestamp = z.timestamp + "", a.verifyNonceStr = z.nonceStr, a.verifySignature = z.signature, a
    }

    function f(a) {
        return {
            timeStamp: a.timestamp + "",
            nonceStr: a.nonceStr,
            "package": a.package,
            paySign: a.paySign,
            signType: a.signType || "SHA1"
        }
    }

    function g(a, b, c) {
        var d, e, f;
        switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d, c), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", z.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(":"), f = d.substring(e + 1)) {
            case "ok":
                c.success && c.success(b);
                break;
            case "cancel":
                c.cancel && c.cancel(b);
                break;
            default:
                c.fail && c.fail(b)
        }
        c.complete && c.complete(b)
    }

    function h(a, b) {
        var d, e, f, g;
        if (b) {
            switch (d = b.indexOf(":"), a) {
                case o.config:
                    e = "config";
                    break;
                case o.openProductSpecificView:
                    e = "openProductSpecificView";
                    break;
                default:
                    e = b.substring(0, d), e = e.replace(/_/g, " "), e = e.replace(/\b\w+\b/g, function(a) {
                        return a.substring(0, 1).toUpperCase() + a.substring(1)
                    }), e = e.substring(0, 1).toLowerCase() + e.substring(1), e = e.replace(/ /g, ""), -1 != e.indexOf("Wcpay") && (e = e.replace("Wcpay", "WCPay")), f = p[e], f && (e = f)
            }
            g = b.substring(d + 1), "confirm" == g && (g = "ok"), "failed" == g && (g = "fail"), -1 != g.indexOf("failed_") && (g = g.substring(7)), -1 != g.indexOf("fail_") && (g = g.substring(5)), g = g.replace(/_/g, " "), g = g.toLowerCase(), ("access denied" == g || "no permission to execute" == g) && (g = "permission denied"), "config" == e && "function not exist" == g && (g = "ok"), b = e + ":" + g
        }
        return b
    }

    function i(a) {
        var b, c, d, e;
        if (a) {
            for (b = 0, c = a.length; c > b; ++b) d = a[b], e = o[d], e && (a[b] = e);
            return a
        }
    }

    function j(a, b) {
        if (z.debug && !b.isInnerInvoke) {
            var c = p[a];
            c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "")
        }
    }

    function k() {
        if (!("6.0.2" > w || y.systemType < 0)) {
            var b = new Image;
            y.appId = z.appId, y.initTime = x.initEndTime - x.initStartTime, y.preVerifyTime = x.preVerifyEndTime - x.preVerifyStartTime, C.getNetworkType({
                isInnerInvoke: !0,
                success: function(a) {
                    y.networkType = a.networkType;
                    var c = "https://open.weixin.qq.com/sdk/report?v=" + y.version + "&o=" + y.isPreVerifyOk + "&s=" + y.systemType + "&c=" + y.clientVersion + "&a=" + y.appId + "&n=" + y.networkType + "&i=" + y.initTime + "&p=" + y.preVerifyTime + "&u=" + y.url;
                    b.src = c
                }
            })
        }
    }

    function l() {
        return (new Date).getTime()
    }

    function m(b) {
        t && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener("WeixinJSBridgeReady", b, !1))
    }

    function n() {
        C.invoke || (C.invoke = function(b, c, d) {
            a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d)
        }, C.on = function(b, c) {
            a.WeixinJSBridge && WeixinJSBridge.on(b, c)
        })
    }
    var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
    if (!a.jWeixin) return o = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest"
    }, p = function() {
        var b, a = {};
        for (b in o) a[o[b]] = b;
        return a
    }(), q = a.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = -1 != s.indexOf("micromessenger"), u = -1 != s.indexOf("android"), v = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"), w = function() {
        var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
        return a ? a[1] : ""
    }(), x = {
        initStartTime: l(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
    }, y = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: v ? 1 : u ? 2 : -1,
        clientVersion: w,
        url: encodeURIComponent(location.href)
    }, z = {}, A = {
        _completes: []
    }, B = {
        state: 0,
        res: {}
    }, m(function() {
        x.initEndTime = l()
    }), C = {
        config: function(a) {
            z = a, j("config", a), m(function() {
                c(o.config, {
                    verifyJsApiList: i(z.jsApiList)
                }, function() {
                    A._complete = function(a) {
                        x.preVerifyEndTime = l(), B.state = 1, B.res = a
                    }, A.success = function() {
                        y.isPreVerifyOk = 0
                    }, A.fail = function(a) {
                        A._fail ? A._fail(a) : B.state = -1
                    };
                    var a = A._completes;
                    return a.push(function() {
                        z.debug || k()
                    }), A.complete = function(b) {
                        for (var c = 0, d = a.length; d > c; ++c) a[c](b);
                        A._completes = []
                    }, A
                }()), x.preVerifyStartTime = l()
            }), z.beta && n()
        },
        ready: function(a) {
            0 != B.state ? a() : (A._completes.push(a), !t && z.debug && a())
        },
        error: function(a) {
            "6.0.2" > w || (-1 == B.state ? a(B.res) : A._fail = a)
        },
        checkJsApi: function(a) {
            var b = function(a) {
                var c, d, b = a.checkResult;
                for (c in b) d = p[c], d && (b[d] = b[c], delete b[c]);
                return a
            };
            c("checkJsApi", {
                jsApiList: i(a.jsApiList)
            }, function() {
                return a._complete = function(a) {
                    if (u) {
                        var c = a.checkResult;
                        c && (a.checkResult = JSON.parse(c))
                    }
                    a = b(a)
                }, a
            }())
        },
        onMenuShareTimeline: function(a) {
            d(o.onMenuShareTimeline, {
                complete: function() {
                    c("shareTimeline", {
                        title: a.title || r,
                        desc: a.title || r,
                        img_url: a.imgUrl,
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        },
        onMenuShareAppMessage: function(a) {
            d(o.onMenuShareAppMessage, {
                complete: function() {
                    c("sendAppMessage", {
                        title: a.title || r,
                        desc: a.desc || "",
                        link: a.link || location.href,
                        img_url: a.imgUrl,
                        type: a.type || "link",
                        data_url: a.dataUrl || ""
                    }, a)
                }
            }, a)
        },
        onMenuShareQQ: function(a) {
            d(o.onMenuShareQQ, {
                complete: function() {
                    c("shareQQ", {
                        title: a.title || r,
                        desc: a.desc || "",
                        img_url: a.imgUrl,
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        },
        onMenuShareWeibo: function(a) {
            d(o.onMenuShareWeibo, {
                complete: function() {
                    c("shareWeiboApp", {
                        title: a.title || r,
                        desc: a.desc || "",
                        img_url: a.imgUrl,
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        },
        startRecord: function(a) {
            c("startRecord", {}, a)
        },
        stopRecord: function(a) {
            c("stopRecord", {}, a)
        },
        onVoiceRecordEnd: function(a) {
            d("onVoiceRecordEnd", a)
        },
        playVoice: function(a) {
            c("playVoice", {
                localId: a.localId
            }, a)
        },
        pauseVoice: function(a) {
            c("pauseVoice", {
                localId: a.localId
            }, a)
        },
        stopVoice: function(a) {
            c("stopVoice", {
                localId: a.localId
            }, a)
        },
        onVoicePlayEnd: function(a) {
            d("onVoicePlayEnd", a)
        },
        uploadVoice: function(a) {
            c("uploadVoice", {
                localId: a.localId,
                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            }, a)
        },
        downloadVoice: function(a) {
            c("downloadVoice", {
                serverId: a.serverId,
                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            }, a)
        },
        translateVoice: function(a) {
            c("translateVoice", {
                localId: a.localId,
                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            }, a)
        },
        chooseImage: function(a) {
            c("chooseImage", {
                scene: "1|2",
                count: a.count || 9,
                sizeType: a.sizeType || ["original", "compressed"]
            }, function() {
                return a._complete = function(a) {
                    if (u) {
                        var b = a.localIds;
                        b && (a.localIds = JSON.parse(b))
                    }
                }, a
            }())
        },
        previewImage: function(a) {
            c(o.previewImage, {
                current: a.current,
                urls: a.urls
            }, a)
        },
        uploadImage: function(a) {
            c("uploadImage", {
                localId: a.localId,
                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            }, a)
        },
        downloadImage: function(a) {
            c("downloadImage", {
                serverId: a.serverId,
                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            }, a)
        },
        getNetworkType: function(a) {
            var b = function(a) {
                var c, d, e, b = a.errMsg;
                if (a.errMsg = "getNetworkType:ok", c = a.subtype, delete a.subtype, c) a.networkType = c;
                else switch (d = b.indexOf(":"), e = b.substring(d + 1)) {
                    case "wifi":
                    case "edge":
                    case "wwan":
                        a.networkType = e;
                        break;
                    default:
                        a.errMsg = "getNetworkType:fail"
                }
                return a
            };
            c("getNetworkType", {}, function() {
                return a._complete = function(a) {
                    a = b(a)
                }, a
            }())
        },
        openLocation: function(a) {
            c("openLocation", {
                latitude: a.latitude,
                longitude: a.longitude,
                name: a.name || "",
                address: a.address || "",
                scale: a.scale || 28,
                infoUrl: a.infoUrl || ""
            }, a)
        },
        getLocation: function(a) {
            a = a || {}, c(o.getLocation, {
                type: a.type || "wgs84"
            }, function() {
                return a._complete = function(a) {
                    delete a.type
                }, a
            }())
        },
        hideOptionMenu: function(a) {
            c("hideOptionMenu", {}, a)
        },
        showOptionMenu: function(a) {
            c("showOptionMenu", {}, a)
        },
        closeWindow: function(a) {
            a = a || {}, c("closeWindow", {
                immediate_close: a.immediateClose || 0
            }, a)
        },
        hideMenuItems: function(a) {
            c("hideMenuItems", {
                menuList: a.menuList
            }, a)
        },
        showMenuItems: function(a) {
            c("showMenuItems", {
                menuList: a.menuList
            }, a)
        },
        hideAllNonBaseMenuItem: function(a) {
            c("hideAllNonBaseMenuItem", {}, a)
        },
        showAllNonBaseMenuItem: function(a) {
            c("showAllNonBaseMenuItem", {}, a)
        },
        scanQRCode: function(a) {
            a = a || {}, c("scanQRCode", {
                needResult: a.needResult || 0,
                scanType: a.scanType || ["qrCode", "barCode"]
            }, function() {
                return a._complete = function(a) {
                    var b, c;
                    v && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result))
                }, a
            }())
        },
        openProductSpecificView: function(a) {
            c(o.openProductSpecificView, {
                pid: a.productId,
                view_type: a.viewType || 0
            }, a)
        },
        addCard: function(a) {
            var e, f, g, h, b = a.cardList,
                d = [];
            for (e = 0, f = b.length; f > e; ++e) g = b[e], h = {
                card_id: g.cardId,
                card_ext: g.cardExt
            }, d.push(h);
            c(o.addCard, {
                card_list: d
            }, function() {
                return a._complete = function(a) {
                    var c, d, e, b = a.card_list;
                    if (b) {
                        for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c) e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;
                        a.cardList = b, delete a.card_list
                    }
                }, a
            }())
        },
        chooseCard: function(a) {
            c("chooseCard", {
                app_id: z.appId,
                location_id: a.shopId || "",
                sign_type: a.signType || "SHA1",
                card_id: a.cardId || "",
                card_type: a.cardType || "",
                card_sign: a.cardSign,
                time_stamp: a.timestamp + "",
                nonce_str: a.nonceStr
            }, function() {
                return a._complete = function(a) {
                    a.cardList = a.choose_card_info, delete a.choose_card_info
                }, a
            }())
        },
        openCard: function(a) {
            var e, f, g, h, b = a.cardList,
                d = [];
            for (e = 0, f = b.length; f > e; ++e) g = b[e], h = {
                card_id: g.cardId,
                code: g.code
            }, d.push(h);
            c(o.openCard, {
                card_list: d
            }, a)
        },
        chooseWXPay: function(a) {
            c(o.chooseWXPay, f(a), a)
        }
    }, b && (a.wx = a.jWeixin = C), C
});
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    };
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall)
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id)
    }
}());
document.addEventListener("DOMContentLoaded", function() {
    (function() {
        function require(path, parent, orig) {
            var resolved = require.resolve(path);
            if (null == resolved) {
                orig = orig || path;
                parent = parent || "root";
                var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
                err.path = orig;
                err.parent = parent;
                err.require = true;
                throw err
            }
            var module = require.modules[resolved];
            if (!module.exports) {
                module.exports = {};
                module.client = module.component = true;
                module.call(this, module.exports, require.relative(resolved), module)
            }
            return module.exports
        }
        require.modules = {};
        require.aliases = {};
        require.resolve = function(path) {
            if (path.charAt(0) === "/") path = path.slice(1);
            var paths = [path, path + ".js", path + ".json", path + "/index.js", path + "/index.json"];
            for (var i = 0; i < paths.length; i++) {
                var path = paths[i];
                if (require.modules.hasOwnProperty(path)) return path;
                if (require.aliases.hasOwnProperty(path)) return require.aliases[path]
            }
        };
        require.normalize = function(curr, path) {
            var segs = [];
            if ("." != path.charAt(0)) return path;
            curr = curr.split("/");
            path = path.split("/");
            for (var i = 0; i < path.length; ++i) {
                if (".." == path[i]) {
                    curr.pop()
                } else if ("." != path[i] && "" != path[i]) {
                    segs.push(path[i])
                }
            }
            return curr.concat(segs).join("/")
        };
        require.register = function(path, definition) {
            require.modules[path] = definition
        };
        require.alias = function(from, to) {
            if (!require.modules.hasOwnProperty(from)) {
                throw new Error('Failed to alias "' + from + '", it does not exist')
            }
            require.aliases[to] = from
        };
        require.relative = function(parent) {
            var p = require.normalize(parent, "..");

            function lastIndexOf(arr, obj) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === obj) return i
                }
                return -1
            }

            function localRequire(path) {
                var resolved = localRequire.resolve(path);
                return require(resolved, parent, path)
            }
            localRequire.resolve = function(path) {
                var c = path.charAt(0);
                if ("/" == c) return path.slice(1);
                if ("." == c) return require.normalize(p, path);
                var segs = parent.split("/");
                var i = lastIndexOf(segs, "deps") + 1;
                if (!i) i = 0;
                path = segs.slice(0, i + 1).join("/") + "/deps/" + path;
                return path
            };
            localRequire.exists = function(path) {
                return require.modules.hasOwnProperty(localRequire.resolve(path))
            };
            return localRequire
        };
        require.register("component-transform-property/index.js", function(exports, require, module) {
            var styles = ["webkitTransform", "MozTransform", "msTransform", "OTransform", "transform"];
            var el = document.createElement("p");
            var style;
            for (var i = 0; i < styles.length; i++) {
                style = styles[i];
                if (null != el.style[style]) {
                    module.exports = style;
                    break
                }
            }
        });
        require.register("component-has-translate3d/index.js", function(exports, require, module) {
            var prop = require("transform-property");
            if (!prop || !window.getComputedStyle) {
                module.exports = false
            } else {
                var map = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                var el = document.createElement("div");
                el.style[prop] = "translate3d(1px,1px,1px)";
                document.body.insertBefore(el, null);
                var val = getComputedStyle(el).getPropertyValue(map[prop]);
                document.body.removeChild(el);
                module.exports = null != val && val.length && "none" != val
            }
        });
        require.register("yields-has-transitions/index.js", function(exports, require, module) {
            exports = module.exports = function(el) {
                switch (arguments.length) {
                    case 0:
                        return bool;
                    case 1:
                        return bool ? transitions(el) : bool
                }
            };

            function transitions(el, styl) {
                if (el.transition) return true;
                styl = window.getComputedStyle(el);
                return !!parseFloat(styl.transitionDuration, 10)
            }
            var styl = document.body.style;
            var bool = "transition" in styl || "webkitTransition" in styl || "MozTransition" in styl || "msTransition" in styl
        });
        require.register("component-event/index.js", function(exports, require, module) {
            var bind = window.addEventListener ? "addEventListener" : "attachEvent",
                unbind = window.removeEventListener ? "removeEventListener" : "detachEvent",
                prefix = bind !== "addEventListener" ? "on" : "";
            exports.bind = function(el, type, fn, capture) {
                el[bind](prefix + type, fn, capture || false);
                return fn
            };
            exports.unbind = function(el, type, fn, capture) {
                el[unbind](prefix + type, fn, capture || false);
                return fn
            }
        });
        require.register("ecarter-css-emitter/index.js", function(exports, require, module) {
            var events = require("event");
            var watch = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "MSTransitionEnd", "animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];
            module.exports = CssEmitter;

            function CssEmitter(element) {
                if (!(this instanceof CssEmitter)) return new CssEmitter(element);
                this.el = element
            }
            CssEmitter.prototype.bind = function(fn) {
                for (var i = 0; i < watch.length; i++) {
                    events.bind(this.el, watch[i], fn)
                }
                return this
            };
            CssEmitter.prototype.unbind = function(fn) {
                for (var i = 0; i < watch.length; i++) {
                    events.unbind(this.el, watch[i], fn)
                }
                return this
            };
            CssEmitter.prototype.once = function(fn) {
                var self = this;

                function on() {
                    self.unbind(on);
                    fn.apply(self.el, arguments)
                }
                self.bind(on);
                return this
            }
        });
        require.register("component-once/index.js", function(exports, require, module) {
            var n = 0;
            var global = function() {
                return this
            }();
            module.exports = function(fn) {
                var id = n++;
                var called;

                function once() {
                    if (this == global) {
                        if (called) return;
                        called = true;
                        return fn.apply(this, arguments)
                    }
                    var key = "__called_" + id + "__";
                    if (this[key]) return;
                    this[key] = true;
                    return fn.apply(this, arguments)
                }
                return once
            }
        });
        require.register("yields-after-transition/index.js", function(exports, require, module) {
            var has = require("has-transitions"),
                emitter = require("css-emitter"),
                once = require("once");
            var supported = has();
            module.exports = after;

            function after(el, fn) {
                if (!supported || !has(el)) return fn();
                emitter(el).bind(fn);
                return fn
            }
            after.once = function(el, fn) {
                var callback = once(fn);
                after(el, fn = function() {
                    emitter(el).unbind(fn);
                    callback()
                })
            }
        });
        require.register("component-emitter/index.js", function(exports, require, module) {
            module.exports = Emitter;

            function Emitter(obj) {
                if (obj) return mixin(obj)
            }

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key]
                }
                return obj
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || []).push(fn);
                return this
            };
            Emitter.prototype.once = function(event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};

                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments)
                }
                on.fn = fn;
                this.on(event, on);
                return this
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this
                }
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this
                }
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break
                    }
                }
                return this
            };
            Emitter.prototype.emit = function(event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1),
                    callbacks = this._callbacks[event];
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args)
                    }
                }
                return this
            };
            Emitter.prototype.listeners = function(event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || []
            };
            Emitter.prototype.hasListeners = function(event) {
                return !!this.listeners(event).length
            }
        });
        require.register("yields-css-ease/index.js", function(exports, require, module) {
            module.exports = {
                "in": "ease-in",
                out: "ease-out",
                "in-out": "ease-in-out",
                snap: "cubic-bezier(0,1,.5,1)",
                linear: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
                "ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                "ease-in-cubic": "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                "ease-in-quart": "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                "ease-in-quint": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                "ease-in-sine": "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
                "ease-in-expo": "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                "ease-in-circ": "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                "ease-in-back": "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                "ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                "ease-out-cubic": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "ease-out-quart": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
                "ease-out-quint": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                "ease-out-sine": "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
                "ease-out-expo": "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                "ease-out-circ": "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                "ease-out-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                "ease-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
                "ease-in-out-quart": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
                "ease-in-out-quint": "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
                "ease-in-out-sine": "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                "ease-in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
                "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                "ease-in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
            }
        });
        require.register("component-query/index.js", function(exports, require, module) {
            function one(selector, el) {
                return el.querySelector(selector)
            }
            exports = module.exports = function(selector, el) {
                el = el || document;
                return one(selector, el)
            };
            exports.all = function(selector, el) {
                el = el || document;
                return el.querySelectorAll(selector)
            };
            exports.engine = function(obj) {
                if (!obj.one) throw new Error(".one callback required");
                if (!obj.all) throw new Error(".all callback required");
                one = obj.one;
                exports.all = obj.all;
                return exports
            }
        });
        require.register("move/index.js", function(exports, require, module) {
            var after = require("after-transition");
            var has3d = require("has-translate3d");
            var Emitter = require("emitter");
            var ease = require("css-ease");
            var query = require("query");
            var translate = has3d ? ["translate3d(", ", 0)"] : ["translate(", ")"];
            module.exports = Move;
            var style = window.getComputedStyle || window.currentStyle;
            Move.version = "0.3.2";
            Move.ease = ease;
            Move.defaults = {
                duration: 500
            };
            Move.select = function(selector) {
                if ("string" != typeof selector) return selector;
                return query(selector)
            };

            function Move(el) {
                if (!(this instanceof Move)) return new Move(el);
                if ("string" == typeof el) el = query(el);
                if (!el) throw new TypeError("Move must be initialized with element or selector");
                this.el = el;
                this._props = {};
                this._rotate = 0;
                this._transitionProps = [];
                this._transforms = [];
                this.duration(Move.defaults.duration)
            }
            Emitter(Move.prototype);
            Move.prototype.transform = function(transform) {
                this._transforms.push(transform);
                return this
            };
            Move.prototype.skew = function(x, y) {
                return this.transform("skew(" + x + "deg, " + (y || 0) + "deg)")
            };
            Move.prototype.skewX = function(n) {
                return this.transform("skewX(" + n + "deg)")
            };
            Move.prototype.skewY = function(n) {
                return this.transform("skewY(" + n + "deg)")
            };
            Move.prototype.translate = Move.prototype.to = function(x, y) {
                return this.transform(translate.join("" + x + "px, " + (y || 0) + "px"))
            };
            Move.prototype.translateX = Move.prototype.x = function(n) {
                return this.transform("translateX(" + n + "px)")
            };
            Move.prototype.translateY = Move.prototype.y = function(n) {
                return this.transform("translateY(" + n + "px)")
            };
            Move.prototype.scale = function(x, y) {
                return this.transform("scale(" + x + ", " + (y || x) + ")")
            };
            Move.prototype.scaleX = function(n) {
                return this.transform("scaleX(" + n + ")")
            };
            Move.prototype.matrix = function(m11, m12, m21, m22, m31, m32) {
                return this.transform("matrix(" + [m11, m12, m21, m22, m31, m32].join(",") + ")")
            };
            Move.prototype.scaleY = function(n) {
                return this.transform("scaleY(" + n + ")")
            };
            Move.prototype.rotate = function(n) {
                return this.transform("rotate(" + n + "deg)")
            };
            Move.prototype.ease = function(fn) {
                fn = ease[fn] || fn || "ease";
                return this.setVendorProperty("transition-timing-function", fn)
            };
            Move.prototype.animate = function(name, props) {
                for (var i in props) {
                    if (props.hasOwnProperty(i)) {
                        this.setVendorProperty("animation-" + i, props[i])
                    }
                }
                return this.setVendorProperty("animation-name", name)
            };
            Move.prototype.duration = function(n) {
                n = this._duration = "string" == typeof n ? parseFloat(n) * 1e3 : n;
                return this.setVendorProperty("transition-duration", n + "ms")
            };
            Move.prototype.delay = function(n) {
                n = "string" == typeof n ? parseFloat(n) * 1e3 : n;
                return this.setVendorProperty("transition-delay", n + "ms")
            };
            Move.prototype.setProperty = function(prop, val) {
                this._props[prop] = val;
                return this
            };
            Move.prototype.setVendorProperty = function(prop, val) {
                this.setProperty("-webkit-" + prop, val);
                this.setProperty("-moz-" + prop, val);
                this.setProperty("-ms-" + prop, val);
                this.setProperty("-o-" + prop, val);
                return this
            };
            Move.prototype.set = function(prop, val) {
                this.transition(prop);
                this._props[prop] = val;
                return this
            };
            Move.prototype.add = function(prop, val) {
                if (!style) return;
                var self = this;
                return this.on("start", function() {
                    var curr = parseInt(self.current(prop), 10);
                    self.set(prop, curr + val + "px")
                })
            };
            Move.prototype.sub = function(prop, val) {
                if (!style) return;
                var self = this;
                return this.on("start", function() {
                    var curr = parseInt(self.current(prop), 10);
                    self.set(prop, curr - val + "px")
                })
            };
            Move.prototype.current = function(prop) {
                return style(this.el).getPropertyValue(prop)
            };
            Move.prototype.transition = function(prop) {
                if (!this._transitionProps.indexOf(prop)) return this;
                this._transitionProps.push(prop);
                return this
            };
            Move.prototype.applyProperties = function() {
                for (var prop in this._props) {
                    this.el.style.setProperty(prop, this._props[prop], "")
                }
                return this
            };
            Move.prototype.move = Move.prototype.select = function(selector) {
                this.el = Move.select(selector);
                return this
            };
            Move.prototype.then = function(fn) {
                if (fn instanceof Move) {
                    this.on("end", function() {
                        fn.end()
                    })
                } else if ("function" == typeof fn) {
                    this.on("end", fn)
                } else {
                    var clone = new Move(this.el);
                    clone._transforms = this._transforms.slice(0);
                    this.then(clone);
                    clone.parent = this;
                    return clone
                }
                return this
            };
            Move.prototype.pop = function() {
                return this.parent
            };
            Move.prototype.reset = function() {
                this.el.style.webkitTransitionDuration = this.el.style.mozTransitionDuration = this.el.style.msTransitionDuration = this.el.style.oTransitionDuration = "";
                return this
            };
            Move.prototype.end = function(fn) {
                var self = this;
                this.emit("start");
                if (this._transforms.length) {
                    this.setVendorProperty("transform", this._transforms.join(" "))
                }
                this.setVendorProperty("transition-properties", this._transitionProps.join(", "));
                this.applyProperties();
                if (fn) this.then(fn);
                after.once(this.el, function() {
                    self.reset();
                    self.emit("end")
                });
                return this
            }
        });
        require.alias("component-has-translate3d/index.js", "move/deps/has-translate3d/index.js");
        require.alias("component-has-translate3d/index.js", "has-translate3d/index.js");
        require.alias("component-transform-property/index.js", "component-has-translate3d/deps/transform-property/index.js");
        require.alias("yields-after-transition/index.js", "move/deps/after-transition/index.js");
        require.alias("yields-after-transition/index.js", "move/deps/after-transition/index.js");
        require.alias("yields-after-transition/index.js", "after-transition/index.js");
        require.alias("yields-has-transitions/index.js", "yields-after-transition/deps/has-transitions/index.js");
        require.alias("yields-has-transitions/index.js", "yields-after-transition/deps/has-transitions/index.js");
        require.alias("yields-has-transitions/index.js", "yields-has-transitions/index.js");
        require.alias("ecarter-css-emitter/index.js", "yields-after-transition/deps/css-emitter/index.js");
        require.alias("component-event/index.js", "ecarter-css-emitter/deps/event/index.js");
        require.alias("component-once/index.js", "yields-after-transition/deps/once/index.js");
        require.alias("yields-after-transition/index.js", "yields-after-transition/index.js");
        require.alias("component-emitter/index.js", "move/deps/emitter/index.js");
        require.alias("component-emitter/index.js", "emitter/index.js");
        require.alias("yields-css-ease/index.js", "move/deps/css-ease/index.js");
        require.alias("yields-css-ease/index.js", "move/deps/css-ease/index.js");
        require.alias("yields-css-ease/index.js", "css-ease/index.js");
        require.alias("yields-css-ease/index.js", "yields-css-ease/index.js");
        require.alias("component-query/index.js", "move/deps/query/index.js");
        require.alias("component-query/index.js", "query/index.js");
        if (typeof exports == "object") {
            module.exports = require("move")
        } else if (typeof define == "function" && define.amd) {
            define(function() {
                return require("move")
            })
        } else {
            this["move"] = require("move")
        }
    })();
});
(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory)
    } else if (typeof exports === 'object') {
        module.exports = factory()
    } else {
        root.viewportUnitsBuggyfill = factory()
    }
}(this, function() {
    'use strict';
    var initialized = false;
    var options;
    var userAgent = window.navigator.userAgent;
    var viewportUnitExpression = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
    var forEach = [].forEach;
    var dimensions;
    var declarations;
    var styleNode;
    var isBuggyIE = /MSIE [0-9]\./i.test(userAgent);
    var isOldIE = /MSIE [0-8]\./i.test(userAgent);
    var isOperaMini = userAgent.indexOf('Opera Mini') > -1;
    var isMobileSafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && (function() {
        var iOSversion = userAgent.match(/OS (\d)/);
        return iOSversion && iOSversion.length > 1 && parseInt(iOSversion[1]) < 8
    })();
    var isBadStockAndroid = (function() {
        var isAndroid = userAgent.indexOf(' Android ') > -1;
        if (!isAndroid) {
            return false
        };
        var isStockAndroid = userAgent.indexOf('Version/') > -1;
        if (!isStockAndroid) {
            return false
        };
        var versionNumber = parseFloat((userAgent.match('Android ([0-9.]+)') || [])[1]);
        return versionNumber <= 4.4
    })();
    if (!isBuggyIE) {
        isBuggyIE = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)
    };

    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            var callback = function() {
                func.apply(context, args)
            };
            clearTimeout(timeout);
            timeout = setTimeout(callback, wait)
        }
    };

    function inIframe() {
        try {
            return window.self !== window.top
        } catch (e) {
            return true
        }
    };

    function initialize(initOptions) {
        if (initialized) {
            return
        };
        if (initOptions === true) {
            initOptions = {
                force: true
            }
        };
        options = initOptions || {};
        options.isMobileSafari = isMobileSafari;
        options.isBadStockAndroid = isBadStockAndroid;
        if (isOldIE || (!options.force && !isMobileSafari && !isBuggyIE && !isBadStockAndroid && !isOperaMini && (!options.hacks || !options.hacks.required(options)))) {
            if (window.console && isOldIE) {
                console.info('viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below')
            };
            return {
                init: function() {}
            }
        };
        options.hacks && options.hacks.initialize(options);
        initialized = true;
        styleNode = document.createElement('style');
        styleNode.id = 'patched-viewport';
        document.head.appendChild(styleNode);
        importCrossOriginLinks(function() {
            var _refresh = debounce(refresh, options.refreshDebounceWait || 100);
            window.addEventListener('orientationchange', _refresh, true);
            window.addEventListener('pageshow', _refresh, true);
            if (options.force || isBuggyIE || inIframe()) {
                window.addEventListener('resize', _refresh, true);
                options._listeningToResize = true
            };
            options.hacks && options.hacks.initializeEvents(options, refresh, _refresh);
            refresh()
        })
    };

    function updateStyles() {
        styleNode.textContent = getReplacedViewportUnits();
        styleNode.parentNode.appendChild(styleNode)
    };

    function refresh() {
        if (!initialized) {
            return
        };
        findProperties();
        setTimeout(function() {
            updateStyles()
        }, 1)
    };

    function findProperties() {
        declarations = [];
        forEach.call(document.styleSheets, function(sheet) {
            if (sheet.ownerNode.id === 'patched-viewport' || !sheet.cssRules || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
                return
            };
            if (sheet.media && sheet.media.mediaText && window.matchMedia && !window.matchMedia(sheet.media.mediaText).matches) {
                return
            };
            forEach.call(sheet.cssRules, findDeclarations)
        });
        return declarations
    };

    function findDeclarations(rule) {
        if (rule.type === 7) {
            var value;
            try {
                value = rule.cssText
            } catch (e) {
                return
            };
            viewportUnitExpression.lastIndex = 0;
            if (viewportUnitExpression.test(value)) {
                declarations.push([rule, null, value]);
                options.hacks && options.hacks.findDeclarations(declarations, rule, null, value)
            };
            return
        };
        if (!rule.style) {
            if (!rule.cssRules) {
                return
            };
            forEach.call(rule.cssRules, function(_rule) {
                findDeclarations(_rule)
            });
            return
        };
        forEach.call(rule.style, function(name) {
            var value = rule.style.getPropertyValue(name);
            if (rule.style.getPropertyPriority(name)) {
                value += ' !important'
            };
            viewportUnitExpression.lastIndex = 0;
            if (viewportUnitExpression.test(value)) {
                declarations.push([rule, name, value]);
                options.hacks && options.hacks.findDeclarations(declarations, rule, name, value)
            }
        })
    };

    function getReplacedViewportUnits() {
        dimensions = getViewport();
        var css = [];
        var buffer = [];
        var open;
        var close;
        declarations.forEach(function(item) {
            var _item = overwriteDeclaration.apply(null, item);
            var _open = _item.selector.length ? (_item.selector.join(' {\n') + ' {\n') : '';
            var _close = new Array(_item.selector.length + 1).join('\n}');
            if (!_open || _open !== open) {
                if (buffer.length) {
                    css.push(open + buffer.join('\n') + close);
                    buffer.length = 0
                };
                if (_open) {
                    open = _open;
                    close = _close;
                    buffer.push(_item.content)
                } else {
                    css.push(_item.content);
                    open = null;
                    close = null
                };
                return
            };
            if (_open && !open) {
                open = _open;
                close = _close
            };
            buffer.push(_item.content)
        });
        if (buffer.length) {
            css.push(open + buffer.join('\n') + close)
        };
        if (isOperaMini) {
            css.push('* { content: normal !important; }')
        };
        return css.join('\n\n')
    };

    function overwriteDeclaration(rule, name, value) {
        var _value;
        var _selectors = [];
        _value = value.replace(viewportUnitExpression, replaceValues);
        if (options.hacks) {
            _value = options.hacks.overwriteDeclaration(rule, name, _value)
        };
        if (name) {
            _selectors.push(rule.selectorText);
            _value = name + ': ' + _value + ';'
        };
        var _rule = rule.parentRule;
        while (_rule) {
            _selectors.unshift('@media ' + _rule.media.mediaText);
            _rule = _rule.parentRule
        };
        return {
            selector: _selectors,
            content: _value
        }
    };

    function replaceValues(match, number, unit) {
        var _base = dimensions[unit];
        var _number = parseFloat(number) / 100;
        return (_number * _base) + 'px'
    };

    function getViewport() {
        var vh = window.innerHeight;
        var vw = window.innerWidth;
        return {
            vh: vh,
            vw: vw,
            vmax: Math.max(vw, vh),
            vmin: Math.min(vw, vh)
        }
    };

    function importCrossOriginLinks(next) {
        var _waiting = 0;
        var decrease = function() {
            _waiting--;
            if (!_waiting) {
                next()
            }
        };
        forEach.call(document.styleSheets, function(sheet) {
            if (!sheet.href || origin(sheet.href) === origin(location.href) || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
                return
            };
            _waiting++;
            convertLinkToStyle(sheet.ownerNode, decrease)
        });
        if (!_waiting) {
            next()
        }
    };

    function origin(url) {
        return url.slice(0, url.indexOf('/', url.indexOf('://') + 3))
    };

    function convertLinkToStyle(link, next) {
        getCors(link.href, function() {
            var style = document.createElement('style');
            style.media = link.media;
            style.setAttribute('data-href', link.href);
            style.textContent = this.responseText;
            link.parentNode.replaceChild(style, link);
            next()
        }, next)
    };

    function getCors(url, success, error) {
        var xhr = new XMLHttpRequest();
        if ('withCredentials' in xhr) {
            xhr.open('GET', url, true)
        } else if (typeof XDomainRequest !== 'undefined') {
            xhr = new XDomainRequest();
            xhr.open('GET', url)
        } else {
            throw new Error('cross-domain XHR not supported')
        };
        xhr.onload = success;
        xhr.onerror = error;
        xhr.send();
        return xhr
    };
    return {
        version: '0.5.4',
        findProperties: findProperties,
        getCss: getReplacedViewportUnits,
        init: initialize,
        refresh: refresh
    }
}));
var Base64 = {
    table: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'],
    UTF16ToUTF8: function(str) {
        var res = [],
            len = str.length;
        for (var i = 0; i < len; i++) {
            var code = str.charCodeAt(i);
            if (code > 0x0000 && code <= 0x007F) {
                res.push(str.charAt(i))
            } else if (code >= 0x0080 && code <= 0x07FF) {
                var byte1 = 0xC0 | ((code >> 6) & 0x1F);
                var byte2 = 0x80 | (code & 0x3F);
                res.push(String.fromCharCode(byte1), String.fromCharCode(byte2))
            } else if (code >= 0x0800 && code <= 0xFFFF) {
                var byte1 = 0xE0 | ((code >> 12) & 0x0F);
                var byte2 = 0x80 | ((code >> 6) & 0x3F);
                var byte3 = 0x80 | (code & 0x3F);
                res.push(String.fromCharCode(byte1), String.fromCharCode(byte2), String.fromCharCode(byte3))
            } else if (code >= 0x00010000 && code <= 0x001FFFFF) {} else if (code >= 0x00200000 && code <= 0x03FFFFFF) {} else {}
        };
        return res.join('')
    },
    UTF8ToUTF16: function(str) {
        var res = [],
            len = str.length;
        var i = 0;
        for (var i = 0; i < len; i++) {
            var code = str.charCodeAt(i);
            if (((code >> 7) & 0xFF) == 0x0) {
                res.push(str.charAt(i))
            } else if (((code >> 5) & 0xFF) == 0x6) {
                var code2 = str.charCodeAt(++i);
                var byte1 = (code & 0x1F) << 6;
                var byte2 = code2 & 0x3F;
                var utf16 = byte1 | byte2;
                res.push(Sting.fromCharCode(utf16))
            } else if (((code >> 4) & 0xFF) == 0xE) {
                var code2 = str.charCodeAt(++i);
                var code3 = str.charCodeAt(++i);
                var byte1 = (code << 4) | ((code2 >> 2) & 0x0F);
                var byte2 = ((code2 & 0x03) << 6) | (code3 & 0x3F);
                var utf16 = ((byte1 & 0x00FF) << 8) | byte2;
                res.push(String.fromCharCode(utf16))
            } else if (((code >> 3) & 0xFF) == 0x1E) {} else if (((code >> 2) & 0xFF) == 0x3E) {} else {}
        };
        return res.join('')
    },
    encode: function(str) {
        if (!str) {
            return ''
        };
        var utf8 = this.UTF16ToUTF8(str);
        var i = 0;
        var len = utf8.length;
        var res = [];
        while (i < len) {
            var c1 = utf8.charCodeAt(i++) & 0xFF;
            res.push(this.table[c1 >> 2]);
            if (i == len) {
                res.push(this.table[(c1 & 0x3) << 4]);
                res.push('==');
                break
            };
            var c2 = utf8.charCodeAt(i++);
            if (i == len) {
                res.push(this.table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
                res.push(this.table[(c2 & 0x0F) << 2]);
                res.push('=');
                break
            };
            var c3 = utf8.charCodeAt(i++);
            res.push(this.table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
            res.push(this.table[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)]);
            res.push(this.table[c3 & 0x3F])
        };
        return res.join('')
    },
    decode: function(str) {
        if (!str) {
            return ''
        };
        var len = str.length;
        var i = 0;
        var res = [];
        while (i < len) {
            code1 = this.table.indexOf(str.charAt(i++));
            code2 = this.table.indexOf(str.charAt(i++));
            code3 = this.table.indexOf(str.charAt(i++));
            code4 = this.table.indexOf(str.charAt(i++));
            c1 = (code1 << 2) | (code2 >> 4);
            c2 = ((code2 & 0xF) << 4) | (code3 >> 2);
            c3 = ((code3 & 0x3) << 6) | code4;
            res.push(String.fromCharCode(c1));
            if (code3 != 64) {
                res.push(String.fromCharCode(c2))
            };
            if (code4 != 64) {
                res.push(String.fromCharCode(c3))
            }
        };
        return this.UTF8ToUTF16(res.join(''))
    }
};
var CryptoJS = CryptoJS || function(u, p) {
    var d = {},
        l = d.lib = {},
        s = function() {},
        t = l.Base = {
            extend: function(a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || v).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j,
                    2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function() {
                this._data = new r.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = x.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var c = this._data,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this._doProcessBlock(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function() {
                var a = t.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,
                    e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this._map;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this._map,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w <
                l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
var QRCode;
(function() {
    function QR8bitByte(data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
        this.parsedData = [];
        for (var i = 0, l = this.data.length; i < l; i++) {
            var byteArray = [];
            var code = this.data.charCodeAt(i);
            if (code > 0x10000) {
                byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
                byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
                byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
                byteArray[3] = 0x80 | (code & 0x3F)
            } else if (code > 0x800) {
                byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
                byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
                byteArray[2] = 0x80 | (code & 0x3F)
            } else if (code > 0x80) {
                byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
                byteArray[1] = 0x80 | (code & 0x3F)
            } else {
                byteArray[0] = code
            };
            this.parsedData.push(byteArray)
        };
        this.parsedData = Array.prototype.concat.apply([], this.parsedData);
        if (this.parsedData.length != this.data.length) {
            this.parsedData.unshift(191);
            this.parsedData.unshift(187);
            this.parsedData.unshift(239)
        }
    };
    QR8bitByte.prototype = {
        getLength: function(buffer) {
            return this.parsedData.length
        },
        write: function(buffer) {
            for (var i = 0, l = this.parsedData.length; i < l; i++) {
                buffer.put(this.parsedData[i], 8)
            }
        }
    };

    function QRCodeModel(typeNumber, errorCorrectLevel) {
        this.typeNumber = typeNumber;
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = []
    };

    function QRPolynomial(num, shift) {
        if (num.length == undefined) throw new Error(num.length + "/" + shift);
        var offset = 0;
        while (offset < num.length && num[offset] == 0) offset++;
        this.num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i++) this.num[i] = num[i + offset]
    };

    function QRRSBlock(totalCount, dataCount) {
        this.totalCount = totalCount, this.dataCount = dataCount
    };

    function QRBitBuffer() {
        this.buffer = [], this.length = 0
    };
    QRCodeModel.prototype = {
        "addData": function(data) {
            var newData = new QR8bitByte(data);
            this.dataList.push(newData), this.dataCache = null
        },
        "isDark": function(row, col) {
            if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
            return this.modules[row][col]
        },
        "getModuleCount": function() {
            return this.moduleCount
        },
        "make": function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        "makeImpl": function(test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
                for (var col = 0; col < this.moduleCount; col++) this.modules[row][col] = null
            };
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(test, maskPattern), this.typeNumber >= 7 && this.setupTypeNumber(test), this.dataCache == null && (this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, maskPattern)
        },
        "setupPositionProbePattern": function(row, col) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r) continue;
                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c) continue;
                    0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1
                }
            }
        },
        "getBestMaskPattern": function() {
            var minLostPoint = 0,
                pattern = 0;
            for (var i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var lostPoint = QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint) minLostPoint = lostPoint, pattern = i
            };
            return pattern
        },
        "createMovieClip": function(target_mc, instance_name, depth) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth),
                cs = 1;
            this.make();
            for (var row = 0; row < this.modules.length; row++) {
                var y = row * cs;
                for (var col = 0; col < this.modules[row].length; col++) {
                    var x = col * cs,
                        dark = this.modules[row][col];
                    dark && (qr_mc.beginFill(0, 100), qr_mc.moveTo(x, y), qr_mc.lineTo(x + cs, y), qr_mc.lineTo(x + cs, y + cs), qr_mc.lineTo(x, y + cs), qr_mc.endFill())
                }
            };
            return qr_mc
        },
        "setupTimingPattern": function() {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null) continue;
                this.modules[r][6] = r % 2 == 0
            };
            for (var c = 8; c < this.moduleCount - 8; c++) {
                if (this.modules[6][c] != null) continue;
                this.modules[6][c] = c % 2 == 0
            }
        },
        "setupPositionAdjustPattern": function() {
            var pos = QRUtil.getPatternPosition(this.typeNumber);
            for (var i = 0; i < pos.length; i++)
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i],
                        col = pos[j];
                    if (this.modules[row][col] != null) continue;
                    for (var r = -2; r <= 2; r++)
                        for (var c = -2; c <= 2; c++) r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1
                }
        },
        "setupTypeNumber": function(test) {
            var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod
            };
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod
            }
        },
        "setupTypeInfo": function(test, maskPattern) {
            var data = this.errorCorrectLevel << 3 | maskPattern,
                bits = QRUtil.getBCHTypeInfo(data);
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                i < 6 ? this.modules[i][8] = mod : i < 8 ? this.modules[i + 1][8] = mod : this.modules[this.moduleCount - 15 + i][8] = mod
            };
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = mod : i < 9 ? this.modules[8][15 - i - 1 + 1] = mod : this.modules[8][15 - i - 1] = mod
            };
            this.modules[this.moduleCount - 8][8] = !test
        },
        "mapData": function(data, maskPattern) {
            var inc = -1,
                row = this.moduleCount - 1,
                bitIndex = 7,
                byteIndex = 0;
            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                col == 6 && col--;
                for (; true;) {
                    for (var c = 0; c < 2; c++)
                        if (this.modules[row][col - c] == null) {
                            var dark = !1;
                            byteIndex < data.length && (dark = (data[byteIndex] >>> bitIndex & 1) == 1);
                            var mask = QRUtil.getMask(maskPattern, row, col - c);
                            mask && (dark = !dark), this.modules[row][col - c] = dark, bitIndex--, bitIndex == -1 && (byteIndex++, bitIndex = 7)
                        };
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc, inc = -inc;
                        break
                    }
                }
            }
        }
    }, QRCodeModel.PAD0 = 236, QRCodeModel.PAD1 = 17, QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel),
            buffer = new QRBitBuffer;
        for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];
            buffer.put(data.mode, 4), buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber)), data.write(buffer)
        };
        var totalDataCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) totalDataCount += rsBlocks[i].dataCount;
        if (buffer.getLengthInBits() > totalDataCount * 8) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
        buffer.getLengthInBits() + 4 <= totalDataCount * 8 && buffer.put(0, 4);
        while (buffer.getLengthInBits() % 8 != 0) buffer.putBit(!1);
        for (; true;) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) break;
            buffer.put(QRCodeModel.PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) break;
            buffer.put(QRCodeModel.PAD1, 8)
        };
        return QRCodeModel.createBytes(buffer, rsBlocks)
    }, QRCodeModel.createBytes = function(buffer, rsBlocks) {
        var offset = 0,
            maxDcCount = 0,
            maxEcCount = 0,
            dcdata = new Array(rsBlocks.length),
            ecdata = new Array(rsBlocks.length);
        for (var r = 0; r < rsBlocks.length; r++) {
            var dcCount = rsBlocks[r].dataCount,
                ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount), maxEcCount = Math.max(maxEcCount, ecCount), dcdata[r] = new Array(dcCount);
            for (var i = 0; i < dcdata[r].length; i++) dcdata[r][i] = 255 & buffer.buffer[i + offset];
            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount),
                rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1),
                modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);
            for (var i = 0; i < ecdata[r].length; i++) {
                var modIndex = i + modPoly.getLength() - ecdata[r].length;
                ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0
            }
        };
        var totalCodeCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) totalCodeCount += rsBlocks[i].totalCount;
        var data = new Array(totalCodeCount),
            index = 0;
        for (var i = 0; i < maxDcCount; i++)
            for (var r = 0; r < rsBlocks.length; r++) i < dcdata[r].length && (data[index++] = dcdata[r][i]);
        for (var i = 0; i < maxEcCount; i++)
            for (var r = 0; r < rsBlocks.length; r++) i < ecdata[r].length && (data[index++] = ecdata[r][i]);
        return data
    };
    var QRMode = {
            "MODE_NUMBER": 1,
            "MODE_ALPHA_NUM": 2,
            "MODE_8BIT_BYTE": 4,
            "MODE_KANJI": 8
        },
        QRErrorCorrectLevel = {
            "L": 1,
            "M": 0,
            "Q": 3,
            "H": 2
        },
        QRMaskPattern = {
            "PATTERN000": 0,
            "PATTERN001": 1,
            "PATTERN010": 2,
            "PATTERN011": 3,
            "PATTERN100": 4,
            "PATTERN101": 5,
            "PATTERN110": 6,
            "PATTERN111": 7
        },
        QRUtil = {
            "PATTERN_POSITION_TABLE": [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            "G15": 1335,
            "G18": 7973,
            "G15_MASK": 21522,
            "getBCHTypeInfo": function(data) {
                var d = data << 10;
                while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
                return (data << 10 | d) ^ QRUtil.G15_MASK
            },
            "getBCHTypeNumber": function(data) {
                var d = data << 12;
                while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
                return data << 12 | d
            },
            "getBCHDigit": function(data) {
                var digit = 0;
                while (data != 0) digit++, data >>>= 1;
                return digit
            },
            "getPatternPosition": function(typeNumber) {
                return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1]
            },
            "getMask": function(maskPattern, i, j) {
                switch (maskPattern) {
                    case QRMaskPattern.PATTERN000:
                        return (i + j) % 2 == 0;
                    case QRMaskPattern.PATTERN001:
                        return i % 2 == 0;
                    case QRMaskPattern.PATTERN010:
                        return j % 3 == 0;
                    case QRMaskPattern.PATTERN011:
                        return (i + j) % 3 == 0;
                    case QRMaskPattern.PATTERN100:
                        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                    case QRMaskPattern.PATTERN101:
                        return i * j % 2 + i * j % 3 == 0;
                    case QRMaskPattern.PATTERN110:
                        return (i * j % 2 + i * j % 3) % 2 == 0;
                    case QRMaskPattern.PATTERN111:
                        return (i * j % 3 + (i + j) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + maskPattern)
                }
            },
            "getErrorCorrectPolynomial": function(errorCorrectLength) {
                var a = new QRPolynomial([1], 0);
                for (var i = 0; i < errorCorrectLength; i++) a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
                return a
            },
            "getLengthInBits": function(mode, type) {
                if (1 <= type && type < 10) switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 10;
                    case QRMode.MODE_ALPHA_NUM:
                        return 9;
                    case QRMode.MODE_8BIT_BYTE:
                        return 8;
                    case QRMode.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + mode)
                } else if (type < 27) switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 12;
                    case QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + mode)
                } else {
                    if (!(type < 41)) throw new Error("type:" + type);
                    switch (mode) {
                        case QRMode.MODE_NUMBER:
                            return 14;
                        case QRMode.MODE_ALPHA_NUM:
                            return 13;
                        case QRMode.MODE_8BIT_BYTE:
                            return 16;
                        case QRMode.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + mode)
                    }
                }
            },
            "getLostPoint": function(qrCode) {
                var moduleCount = qrCode.getModuleCount(),
                    lostPoint = 0;
                for (var row = 0; row < moduleCount; row++)
                    for (var col = 0; col < moduleCount; col++) {
                        var sameCount = 0,
                            dark = qrCode.isDark(row, col);
                        for (var r = -1; r <= 1; r++) {
                            if (row + r < 0 || moduleCount <= row + r) continue;
                            for (var c = -1; c <= 1; c++) {
                                if (col + c < 0 || moduleCount <= col + c) continue;
                                if (r == 0 && c == 0) continue;
                                dark == qrCode.isDark(row + r, col + c) && sameCount++
                            }
                        };
                        sameCount > 5 && (lostPoint += 3 + sameCount - 5)
                    };
                for (var row = 0; row < moduleCount - 1; row++)
                    for (var col = 0; col < moduleCount - 1; col++) {
                        var count = 0;
                        qrCode.isDark(row, col) && count++, qrCode.isDark(row + 1, col) && count++, qrCode.isDark(row, col + 1) && count++, qrCode.isDark(row + 1, col + 1) && count++;
                        if (count == 0 || count == 4) lostPoint += 3
                    };
                for (var row = 0; row < moduleCount; row++)
                    for (var col = 0; col < moduleCount - 6; col++) qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6) && (lostPoint += 40);
                for (var col = 0; col < moduleCount; col++)
                    for (var row = 0; row < moduleCount - 6; row++) qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col) && (lostPoint += 40);
                var darkCount = 0;
                for (var col = 0; col < moduleCount; col++)
                    for (var row = 0; row < moduleCount; row++) qrCode.isDark(row, col) && darkCount++;
                var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
                return lostPoint += ratio * 10, lostPoint
            }
        },
        QRMath = {
            "glog": function(n) {
                if (n < 1) throw new Error("glog(" + n + ")");
                return QRMath.LOG_TABLE[n]
            },
            "gexp": function(n) {
                while (n < 0) n += 255;
                while (n >= 256) n -= 255;
                return QRMath.EXP_TABLE[n]
            },
            "EXP_TABLE": new Array(256),
            "LOG_TABLE": new Array(256)
        };
    for (var i = 0; i < 8; i++) QRMath.EXP_TABLE[i] = 1 << i;
    for (var i = 8; i < 256; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    for (var i = 0; i < 255; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    QRPolynomial.prototype = {
        "get": function(index) {
            return this.num[index]
        },
        "getLength": function() {
            return this.num.length
        },
        "multiply": function(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++)
                for (var j = 0; j < e.getLength(); j++) num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
            return new QRPolynomial(num, 0)
        },
        "mod": function(e) {
            if (this.getLength() - e.getLength() < 0) return this;
            var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0)),
                num = new Array(this.getLength());
            for (var i = 0; i < this.getLength(); i++) num[i] = this.get(i);
            for (var i = 0; i < e.getLength(); i++) num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
            return (new QRPolynomial(num, 0)).mod(e)
        }
    }, QRRSBlock.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
        var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
        if (rsBlock == undefined) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
        var length = rsBlock.length / 3,
            list = [];
        for (var i = 0; i < length; i++) {
            var count = rsBlock[i * 3 + 0],
                totalCount = rsBlock[i * 3 + 1],
                dataCount = rsBlock[i * 3 + 2];
            for (var j = 0; j < count; j++) list.push(new QRRSBlock(totalCount, dataCount))
        };
        return list
    }, QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
        switch (errorCorrectLevel) {
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
                return undefined
        }
    }, QRBitBuffer.prototype = {
        "get": function(index) {
            var bufIndex = Math.floor(index / 8);
            return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1
        },
        "put": function(num, length) {
            for (var i = 0; i < length; i++) this.putBit((num >>> length - i - 1 & 1) == 1)
        },
        "getLengthInBits": function() {
            return this.length
        },
        "putBit": function(bit) {
            var bufIndex = Math.floor(this.length / 8);
            this.buffer.length <= bufIndex && this.buffer.push(0), bit && (this.buffer[bufIndex] |= 128 >>> this.length % 8), this.length++
        }
    };
    var QRCodeLimitLength = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273]
    ];

    function _isSupportCanvas() {
        return typeof CanvasRenderingContext2D != "undefined"
    };

    function _getAndroid() {
        var android = false;
        var sAgent = navigator.userAgent;
        if (/android/i.test(sAgent)) {
            android = true;
            aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
            if (aMat && aMat[1]) {
                android = parseFloat(aMat[1])
            }
        };
        return android
    };
    var svgDrawer = (function() {
        var Drawing = function(el, htOption) {
            this._el = el;
            this._htOption = htOption
        };
        Drawing.prototype.draw = function(oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
            var nCount = oQRCode.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            this.clear();

            function makeSVG(tag, attrs) {
                var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
                for (var k in attrs)
                    if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
                return el
            };
            var svg = makeSVG("svg", {
                'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),
                'width': '100%',
                'height': '100%',
                'fill': _htOption.colorLight
            });
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            _el.appendChild(svg);
            svg.appendChild(makeSVG("rect", {
                "fill": _htOption.colorDark,
                "width": "1",
                "height": "1",
                "id": "template"
            }));
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    if (oQRCode.isDark(row, col)) {
                        var child = makeSVG("use", {
                            "x": String(row),
                            "y": String(col)
                        });
                        child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
                        svg.appendChild(child)
                    }
                }
            }
        };
        Drawing.prototype.clear = function() {
            while (this._el.hasChildNodes()) this._el.removeChild(this._el.lastChild)
        };
        return Drawing
    })();
    var useSVG = document.documentElement.tagName.toLowerCase() === "svg";
    var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function() {
        var Drawing = function(el, htOption) {
            this._el = el;
            this._htOption = htOption
        };
        Drawing.prototype.draw = function(oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
            var nCount = oQRCode.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            var aHTML = ['<table style="border:0;border-collapse:collapse;">'];
            for (var row = 0; row < nCount; row++) {
                aHTML.push('<tr>');
                for (var col = 0; col < nCount; col++) {
                    aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>')
                };
                aHTML.push('</tr>')
            };
            aHTML.push('</table>');
            _el.innerHTML = aHTML.join('');
            var elTable = _el.childNodes[0];
            var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
            var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
            if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
                elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px"
            }
        };
        Drawing.prototype.clear = function() {
            this._el.innerHTML = ''
        };
        return Drawing
    })() : (function() {
        function _onMakeImage() {
            this._elImage.src = this._elCanvas.toDataURL("image/png");
            this._elImage.style.display = "block";
            this._elCanvas.style.display = "none"
        };
        if (this._android && this._android <= 2.1) {
            var factor = 1 / window.devicePixelRatio;
            var drawImage = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
                if (("nodeName" in image) && /img/i.test(image.nodeName)) {
                    for (var i = arguments.length - 1; i >= 1; i--) {
                        arguments[i] = arguments[i] * factor
                    }
                } else if (typeof dw == "undefined") {
                    arguments[1] *= factor;
                    arguments[2] *= factor;
                    arguments[3] *= factor;
                    arguments[4] *= factor
                };
                drawImage.apply(this, arguments)
            }
        };

        function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;
                    if (self._fFail) {
                        _fFail.call(self)
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;
                    if (self._fSuccess) {
                        self._fSuccess.call(self)
                    }
                };
                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
                return
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self)
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self)
            }
        };
        var Drawing = function(el, htOption) {
            this._bIsPainted = false;
            this._android = _getAndroid();
            this._htOption = htOption;
            this._elCanvas = document.createElement("canvas");
            this._elCanvas.width = htOption.width;
            this._elCanvas.height = htOption.height;
            el.appendChild(this._elCanvas);
            this._el = el;
            this._oContext = this._elCanvas.getContext("2d");
            this._bIsPainted = false;
            this._elImage = document.createElement("img");
            this._elImage.alt = "Scan me!";
            this._elImage.style.display = "none";
            this._el.appendChild(this._elImage);
            this._bSupportDataURI = null
        };
        Drawing.prototype.draw = function(oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;
            var nCount = oQRCode.getModuleCount();
            var nWidth = _htOption.width / nCount;
            var nHeight = _htOption.height / nCount;
            var nRoundedWidth = Math.round(nWidth);
            var nRoundedHeight = Math.round(nHeight);
            _elImage.style.display = "none";
            this.clear();
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    var bIsDark = oQRCode.isDark(row, col);
                    var nLeft = col * nWidth;
                    var nTop = row * nHeight;
                    _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                    _oContext.lineWidth = 1;
                    _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                    _oContext.fillRect(nLeft, nTop, nWidth, nHeight);
                    _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);
                    _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight)
                }
            };
            this._bIsPainted = true
        };
        Drawing.prototype.makeImage = function() {
            if (this._bIsPainted) {
                _safeSetDataURI.call(this, _onMakeImage)
            }
        };
        Drawing.prototype.isPainted = function() {
            return this._bIsPainted
        };
        Drawing.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
            this._bIsPainted = false
        };
        Drawing.prototype.round = function(nNumber) {
            if (!nNumber) {
                return nNumber
            };
            return Math.floor(nNumber * 1000) / 1000
        };
        return Drawing
    })();

    function _getTypeNumber(sText, nCorrectLevel) {
        var nType = 1;
        var length = _getUTF8Length(sText);
        for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
            var nLimit = 0;
            switch (nCorrectLevel) {
                case QRErrorCorrectLevel.L:
                    nLimit = QRCodeLimitLength[i][0];
                    break;
                case QRErrorCorrectLevel.M:
                    nLimit = QRCodeLimitLength[i][1];
                    break;
                case QRErrorCorrectLevel.Q:
                    nLimit = QRCodeLimitLength[i][2];
                    break;
                case QRErrorCorrectLevel.H:
                    nLimit = QRCodeLimitLength[i][3];
                    break
            };
            if (length <= nLimit) {
                break
            } else {
                nType++
            }
        };
        if (nType > QRCodeLimitLength.length) {
            throw new Error("Too long data")
        };
        return nType
    };

    function _getUTF8Length(sText) {
        var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
        return replacedText.length + (replacedText.length != sText ? 3 : 0)
    };
    QRCode = function(el, vOption) {
        this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRErrorCorrectLevel.H
        };
        if (typeof vOption === 'string') {
            vOption = {
                text: vOption
            }
        };
        if (vOption) {
            for (var i in vOption) {
                this._htOption[i] = vOption[i]
            }
        };
        if (typeof el == "string") {
            el = document.getElementById(el)
        };
        this._android = _getAndroid();
        this._el = el;
        this._oQRCode = null;
        this._oDrawing = new Drawing(this._el, this._htOption);
        if (this._htOption.text) {
            this.makeCode(this._htOption.text)
        }
    };
    QRCode.prototype.makeCode = function(sText) {
        this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
        this._oQRCode.addData(sText);
        this._oQRCode.make();
        this._el.title = sText;
        this._oDrawing.draw(this._oQRCode);
        this.makeImage()
    };
    QRCode.prototype.makeImage = function() {
        if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
            this._oDrawing.makeImage()
        }
    };
    QRCode.prototype.clear = function() {
        this._oDrawing.clear()
    };
    QRCode.CorrectLevel = QRErrorCorrectLevel
})();
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) d[e(c)] = k[c] || e(c);
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1;
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
}('1T=j(){h.J=B;h.P=B;h.aJ=B;h.1k=B;h.2H=B;h.eK=1p;h.3b=B;h.6k=B;h.1M=B;h.38=B;h.3d=B;h.A=B;h.43=B;h.fS=B;h.1S="1a://9g.iP.cn";h.73=B;h.9Z=B;h.a3=B;h.7C=B;h.1B=B;h.72=B;h.4i=B;h.9S=["ie.1c.cn","jq.1c.cn","jG.1c.cn"];h.1j={3e:"1a://P.9g.1c/3O.2k",1Y:h.1S,1C:"cH",O:"cH"};h.1n=B;h.S=B;h.2i=B;h.2h=B;h.gg=1p;h.6V=1p;h.46=B;h.5T=B;h.5M=B;h.7F=1p;h.pk=B;h.18=B;h.1v=B;h.a4=1p;h.6d={};h.N={4S:1i,2i:1i,pk:1p,2E:j(){1g.1l("P 2E");K 1i},8L:j(){1g.1l("P 8L");K 1i},dc:j(){1g.1l("P aZ");K 1i}};h.C=1Q 1y(h);h.fo=1Q 3H().42();h.8c=-1;h.5c=1p;35(1z.Y){T 0:R;T 1:if(2V 1z[0]=="8U")h.J=1z[0];if(2V 1z[0]=="6g")h.N=h.C.33(h.N,1z[0]);R;T 2:h.J=1z[0];if(2V 1z[1]=="8U")h.aJ=1z[1];if(2V 1z[1]=="6g")h.N=h.C.33(h.N,1z[1]);R};h.9X=(h.C.2j()!="2a"&&h.N.2i);h.6H=h.N.pk;h.6o=(h.J!=B&&h.N.4S);h.c8=h.C.5w()?5:15;h.3q=1Q 2X(h);h.2w()};1T.u.2w=j(){h.1k=h.C.2Y("1k");if(h.1k!=B){2q.1k=h.1k}L if(2q.1k){h.1k=2q.1k};h.3b=h.C.2Y("3b");h.6k=h.C.2Y("6k");h.1M=h.C.2Y("1M");h.38=h.C.2Y("38");h.3d=h.C.2Y("3d");k A=h.C.2Y("A");if(A!=B){2D{h.A=2C.4q(ik(A))}2z(e){h.A=A}};h.43=h.C.2Y("id");h.6V=(h.C.2Y("f")=="8D");h.9Z=h.1S+"/jj.1V?r="+29.2g()+(h.1k?"&1k="+h.1k:"");h.a3=h.1S+"/ks.1V?r="+29.2g()+(h.1k?"&1k="+h.1k:"");h.7C=(h.6V?h.a3:h.9Z);h.4i=h.9S[5L(29.2g()*h.9S.Y)];h.5T=h.C.2Y("5T");h.5M=h.C.2Y("5M");35(h.C.2j()){T"1D":h.1n=1Q 2J(h);R;T"9g":h.1n=1Q 5G(h);R;T"2a":h.1n=1Q 3I(h);R;T"4e":h.1n=1Q 5J(h);R;T"5m":h.1n=1Q 91(h);R;T"a5":h.1n=1Q aE(h);R};h.S=1Q 4k(h);if(h.J){h.fh();if(h.C.2j()=="2a"&&h.C.7j()){}};if(h.1k){h.el()};h.fT();h.gi();if(h.C.2j()=="1D"&&h.C.7j()){1A.l4.2w()}};1T.u.fh=j(){k o=h;h.73="/3n.1V?J="+h.J+(h.1k?"&1k="+h.1k:"")+(1b.22?"&id="+1b.22:"")+"&f=8D"+"&4L="+h.4i;h.1j.3e="1a://P.9g.1c/"+h.J+"/3O.2k";h.1j.1Y="1a://"+5L(29.2g()*ez)+"."+h.J+"."+h.4i+h.73;if(h.6o&&!h.1k)h.C.4S();if(!h.1k||h.1k=="4e"||h.1k=="9g"){if(h.C.2j()=="9g"&&h.1n&&h.1n.2e=="1.0.5"&&h.C.8Q()){}L if(h.C.2j()=="2a"){}L if(h.6H){}L{h.S.eF()}};if(h.C.2j()=="9g"&&h.C.8Q()){1E(j(){1A.1q="fC::kl::"+o.1S+"/1n/3v.1V?r="+29.2g()},2Z)};h.fE();if(h.C.2j()=="2a"){h.1n.9a()};1E(j(){o.fP()},2Z);1E(j(){o.C.eE()},52);if(h.C.2j()=="1D"||h.C.2j()=="9g"){1E(j(){},4H)};6D.31(["7y","jx",(h.6V?"jP":"jO"),1]);6D.31(["7y","J",h.J,1]);6D.31(["7y","1k",h.1k,1]);if(h.C.2j()=="1D"){6D.31(["7y","jN",h.1n.2e,1])}};1T.u.el=j(){k o=h;h.C.1W("1a://1D.9g.1c/6P/kW?1k="+h.1k,j(A){k aF=1p;if(A&&A.1k){o.eK=1i;o.2H=A;if(A.4S){aF=1i}};if(o.6o){if(aF){o.C.eC()}L{o.C.4S()}}});if(!h.J){1E(j(){o.1j.1Y="1a://"+5L(29.2g()*ez)+"."+o.4i+o.C.6U()+"?1k="+o.1k+"&r="+29.2g();if(o.2H){if(o.4d){o.1j.1C=o.2H.4d;o.1j.O=o.2H.4d};if(o.2H.8t){o.1j.3e=o.2H.8t}}},kn)};if(h.9i()&&h.C.6U()=="/kJ/my.1V"){1E(j(){k a=v.E("a");a.3p="3f.1V";a.X="kB";v.1o("1t")[0].D(a)},52)}};1T.u.fT=j(){k o=h;h.3q.fW(j(A){if(A){o.gg=1i;o.2p("aP")}});1E(j(){o.C.gj()},4Z);1E(j(){o.C.bf()},2Z)};1T.u.gi=j(){k o=h;h.fp(j(){o.a4=1i;o.2p("fJ");if(o.9X){o.by()}});if(h.9X){h.2i=1Q 39(h)}};1T.u.7E=j(){if(!h.a4){k o=h;h.V("fJ",j(){o.7E()})}L{1g.1l("2E pk");h.pk=1Q 1h(h)}};1T.u.V=j(){k 1N=1z[0];k H=1z[1];k 4x=(1z.Y==3?1z[2]:1p);if(!h.6d[1N])h.6d[1N]=[];h.6d[1N].31({4x:4x,H:H})};1T.u.on=j(){k fH=1z[0];k H=1z[1];k 4x=(1z.Y==3?1z[2]:1p);k a=fH.iR(" ");1K(k i=0;i<a.Y;i++){k 1N=a[i];h.V(1N,H,4x)}};1T.u.2p=j(){k 1N=1z[0];k 9j=[];k i;if(1z.Y>1){1K(i=1;i<1z.Y;i++){9j.31(1z[i])}};k 23=h.6d[1N];k 9e=[];if(23){1K(i=0;i<23.Y;i++){k 2d=23[i];k 4x=2d.4x;k H=2d.H;if(9j.Y>0){H.2T(h,9j)}L{H.1x(h)};if(4x){9e.31(i)}}aS(9e.Y>0){k 3R=9e.7S();23.d2(3R,1)}}};1T.u.fE=j(){k G;k o=h;if(1b.3g){G="1a://1D.9g.1c/3q/iZ?J="+h.J+"&6Q="+1b.3g+(h.1k?"&1k="+h.1k:"")+(h.43?"&44="+h.43:"");h.C.1W(G,j(A){if(A.4b){o.3q.4X();o.2h=B}L{1b.22=A.44;o.2h=o.C.33(o.2h,A.2h);o.P=A.P;}})}L{G="1a://1D.9g.1c/3q/iU?J="+h.J+(h.1k?"&1k="+h.1k:"")+(h.C.2Y("f")=="8D"?"&f=8D":"");h.C.1W(G,j(A){o.P=A.P;})}};1T.u.iW=j(){};1T.u.iC=j(H){if(!1b.22){H&&H.1x(B,1p);K};k G="1a://1D.9g.1c/1n/iD?44="+1b.22;h.C.1W(G,j(A){if(A&&A.ei){H&&H.1x(B,1i)}L{H&&H.1x(B,1p)}})};1T.u.iE=j(J,H){h.C.1W("1a://1D.9g.1c/1n/iz?J="+J,H)};1T.u.7e=j(){K h.1S+"/1n/46.1V?r="+29.2g()};1T.u.fP=j(H){k G="1a://1D.9g.1c/46/iB?J="+h.J+(1b.22?"&44="+1b.22:"");k o=h;h.C.1W(G,j(A){if(A.2h)o.2h=o.C.33(o.2h,A.2h);if(A.P)o.P=A.P;if(A.46)o.46=A.46;if(o.2h&&(o.1k==B||o.1k=="4e")){};H&&H.2T(o)})};1T.u.3h=j(1j){if(1j)h.1j=h.C.33(h.1j,1j);if(h.1n&&h.1n.3h)h.1n.3h()};1T.u.3i=j(){h.1n&&h.1n.3i()};1T.u.a2=j(N,H){k G="1a://1D.9g.1c/1n/iF";if(N.J)G=h.C.2B(G,"J",N.J);if(N.1k)G=h.C.2B(G,"1k",N.1k);if(N.id)G=h.C.2B(G,"id",N.id);if(N.3b)G=h.C.2B(G,"3b",N.3b);if(N.1N)G=h.C.2B(G,"1N",N.1N);if(N.4L)G=h.C.2B(G,"4L",N.4L);h.C.1W(G,j(A){H&&H.2T(B)})};1T.u.a0=j(){k o=h;if(h.6V&&h.1k&&h.1k!="9g"&&h.1k!="4e"&&h.1k!="5m"&&h.1k!="iK"){h.1n.3m=j(){1A.1q=o.7C};h.C.69();K};if(h.46){if(h.46.J==h.J){h.1n.3m=j(){if(!o.6T||o.6T&&o.1B!=o.fB){o.90(j(){1A.1q=o.7e()})}L{1A.1q=o.7e()}};h.C.69()}L{h.1n.3m=j(){1A.1q=o.7e()};h.C.69()}}L{h.1n.3m=j(){1A.1q=o.7C};h.C.69()}};1T.u.ff=j(H){k o=h;if(1b.22&&h.1B!=B&&h.1B>0){if(!h.6T||h.6T&&(h.ac=="iI"&&h.1B<h.ab||h.ac=="7s"&&h.1B>h.ab)){h.90(j(A){if(A.1X){o.6T=1i;o.ac=A.j0;o.ab=A.ji||A.fM==-1?o.1B:A.fM;o.fB=o.1B;if(o.1n&&o.1n.6G)o.1n.6G.1x(B,A);H&&H.1x(B,A)}})}}};1T.u.90=j(H){if(!1b.22){K};if(h.1B==B||gh(h.1B)){K};k 5T=(h.43&&h.43!=1b.22?h.43:"");k 5C="";if(5T&&!h.5C){5C="y";h.5C=1i};k 5M=(h.5M?"y":"");k a=[h.J,1b.22,h.1B,2c(h.72),2c(h.1j.1C),5T,5C,5M];k A=jf.jg(h.C.b7("jh",a.jl("|")));k G="1a://1D.9g.1c/46/90?A="+A+(h.3b?"&3b="+h.3b:"");k o=h;h.C.1W(G,j(A){if(A.1X){o.C.3P(A);H&&H.1x(B,A)}L{o.C.3P("jp")}})};1T.u.3Y=j(){if(h.7F)K;1g.1l("P 3Y");h.7F=1i;if(h.6H){if(h.6o){k 4N=1Q 3H()-h.fo;k 5z=jr-4N;if(5z<10)5z=10;k o=h;1E(j(){o.7E()},5z)}L{h.7E()}}};1T.u.4V=j(A){1g.1l("P 4V: "+2C.2O(A));if(h.6H){h.pk.4V(A)}};1T.u.2y=j(A){1g.1l("P aZ: "+2C.2O(A));if(h.6H){h.pk.2y(A)}};1T.u.fp=j(H){if(!1b.1r)K;k o=h;h.C.1W("1a://pp.9g.1c/im/jn?1r="+1b.1r,j(A){if(A&&A.1m){o.18=A.1m;1K(k i=0;i<A.23.Y;i++){k 1v=A.23[i];if(1v.1m==A.1m){o.1v=1v;R}};H&&H.1x(B)}})};1T.u.by=j(){if(!1b.1r||!h.18)K;k o=h;k G="1a://pp.9g.1c/im/jo?1r="+1b.1r+"&1m="+h.18+"&r="+29.2g();h.C.1W(G,j(A){k 8b=A.as;if(8b!=o.8c){o.2p("7A",8b);if(o.8c!=-1){o.2p("je")};o.8c=8b};o.bI()})};1T.u.bI=j(){if(h.bz){84(h.bz)};k o=h;h.bz=1E(j(){o.by()},o.c8*2Z)};1T.u.3L=j(8F){h.c8=8F||(h.C.5w()?5:15);h.bI()};1T.u.7L=j(18,H){k G="1a://pp.9g.1c/im/j4?1m="+18;h.C.1W(G,j(A){if(A&&A.1m){H&&H.1x(B,A)}})};1T.u.fy=j(1N,4M,w,H){if(!1b.1r)K;k G="1a://pp.9g.1c/im/j5?1r="+1b.1r+"&1N="+1N+(4M?"&4M="+4M:"")+"&O="+2c(2C.2O(w));h.C.1W(G,j(A){H&&H.1x(B,A)})};1T.u.j1=j(H){if(!h.P)K;k 4M=B;4M=h.P.fl;k w={J:h.J,3W:h.P.fl,73:h.73,9p:h.P.j9,Z:h.1j.1C};h.fy(3,4M,w,H)};1T.u.f6=j(6a,O,H){if(!1b.1r)K;k G="1a://pp.9g.1c/im/hS?1r="+1b.1r+"&hO="+6a+"&O="+2c(O);h.C.1W(G,j(A){H&&H.1x(B,A)})};1T.u.hP=j(H){k o=h;h.C.1W("1a://pp.9g.1c/im/fb",j(A){o.S.f5(A,j(P){H&&H.1x(B,P)})})};1T.u.hT=j(44,J,H){k G="1a://1D.9g.1c/hX/hY?44="+44+"&J="+J;h.C.1W(G,j(A){if(A.id){H&&H.1x(B,A)}})};1T.u.9i=j(){K(h.C.2Y("hZ")=="y"||1b.22=="hU=="||1b.22=="hV=="||1b.22=="hD=="||1b.22=="hM=="||1b.22=="hF=="||1b.22=="hI=="||1b.22=="hJ=="||1b.22=="hK=="||1b.22=="hL==")};2X=j(l){h.l=l};2X.u.9l=j(N){k 4o={4j:"id",2v:1q.3p,1X:B,2M:B};N=h.l.C.33(4o,N);if(h.gb()){N.2M&&N.2M.2T(B);K};if(h.ga(N,10)){N.1X&&N.1X.2T(B);K};if(1b.1r){h.gc()};if(N.4j=="id"&&!1b.3g){h.8I(N)}L if(N.4j=="2h"&&!1b.1r){h.8I(N)}L{k G="1a://1D.9g.1c/1n/9l";if(N.4j=="id")G+="?6Q="+1b.3g;if(N.4j=="2h")G+="?1r="+1b.1r;k o=h;h.l.C.1W(G,j(A){if(A&&A.1X){o.gd(N,A);N.1X&&N.1X.2T(B)}L{o.4X();o.8I(N)}})}};2X.u.gb=j(){if(2q.4b&&2q.6W){h.l.C.3P("4b = "+2q.4b+", 6W = "+2q.6W);2q.4c("4b");2q.4c("6W");h.4X();K 1i};K 1p};2X.u.gc=j(){if(h.l.1n&&h.l.1n.6X){k 1r=h.l.1n.6X();if(1r!=B&&1b.1r!=1r){h.4X()}}};2X.u.4X=j(){1b.4c("3g");1b.4c("1r");1b.4c("22");1b.4c("7k")};2X.u.gd=j(N,A){h.4X();if(A.3g)1b.3g=A.3g;if(A.1r)1b.1r=A.1r;if(A.22)1b.22=A.22;if(A.7k)1b.7k=A.7k;k 47="g8"+N.4j+"ge";2q[47]=1Q 3H().42()};2X.u.ga=j(N,8F){k 47="g8"+N.4j+"ge";if(2q[47]){k bt=2q[47];2q.4c(47);if(bt&&(1Q 3H().42()-bt)<=8F*2Z)K 1i};K 1p};2X.u.8I=j(N){35(N.4j){T"id":if(h.l.C.2j()=="1D"){h.ba(N.2v)}L if(h.l.C.2j()=="2a"){h.l.1n.57(N.2v)}L{N.2M&&N.2M.2T(B)};R;T"2h":if(h.l.C.2j()=="1D"){if(!1b.3g){h.ba(N.2v)}L{h.fY(N.2v)}}L if(h.l.C.2j()=="2a"){h.l.1n.57(N.2v)}L{h.g5(N.2v)};R}};2X.u.fW=j(H){if(!1b.1r){H&&H.1x(B,B)}L{k o=h;k G="1a://1D.9g.1c/1n/b6?1r="+1b.1r;h.l.C.1W(G,j(A){if(A.4b){1b.4c("1r");o.l.2h=B;H&&H.1x(B,B)}L{o.l.2h=o.l.C.33(o.l.2h,A);H&&H.1x(B,A)}})}};2X.u.ia=j(){k id=h.l.43;k H=B;35(1z.Y){T 1:if(2V 1z[0]=="8U")id=1z[0];if(2V 1z[0]=="j")H=1z[0];R;T 2:id=1z[0];H=1z[1];R};if(id){k o=h;k G="1a://1D.9g.1c/1n/b6?id="+id;h.l.C.1W(G,j(A){k 2h=B;if(A.4b){o.l.C.3P(A.6W)}L{2h=A;o.l.fS=2h};H&&H.1x(B,2h)})}L{H&&H.1x(B,B)}};2X.u.ba=j(2v){k 5a=h.l.1S+"/3q/5a.1n.1V?5b="+2c(2v)+(h.l.1k?"&1k="+h.l.1k:"");k G="1a://1D.9g.1c/3q/9l?g4="+2c(5a)+"&5y="+h.l.C.8p();1A.1q.2W(G)};2X.u.fY=j(2v){k 5a=h.l.1S+"/3q/5a.1n.1V?5b="+2c(2v)+(h.l.1k?"&1k="+h.l.1k:"");k 1X="1a://1D.9g.1c/3q/9l?g4="+2c(5a)+"&5y="+h.l.C.8p();k 2M=h.l.1S+"/1n/3v.1V";k G="1a://1D.9g.1c/3q/b6?1X="+2c(1X)+"&2M="+2c(2M)+(h.l.1k?"&1k="+h.l.1k:"");1A.1q.2W(G)};2X.u.g5=j(2v){k G=h.l.1S+"/1n/57.1V?kM="+2c(2v);1A.1q=G};2X.u.kr=j(H){k id=h.l.43;if(id&&1b.3g&&id!=1b.22){k G="1a://1D.9g.1c/3q/1Y?6Q="+1b.3g+"&id="+id;k o=h;h.l.C.1W(G,j(A){k 1F=0;if(A.7f){o.l.C.3P(A);1F=-1}L{1F=A.ko};H&&H.1x(B,1F)})}L{H&&H.1x(B,-1)}};4k=j(l){h.l=l;h.2E=B;h.3M=B};4k.u.eF=j(){h.2E=1Q 8v(h.l);h.3M=1Q 5D(h.l)};8v=j(l){h.l=l;k q=v.E("q");q.id="4P";q.I="4P";k o=h;q.V("1J",j(e){o.5r();o.l.S.3M.5t();e.1I()});v.1o("1t")[0].D(q);k 4n=v.E("q");4n.I="kx";4n.1e.2G="41";q.D(4n);h.l.V("7A",j(A){if(A>0){4n.X=A;4n.1e.2G=""}L{4n.X="";4n.1e.2G="41"}})};8v.u.5t=j(){k q=v.1d("4P");if(q)q.1e.5x=h.l.C.2F(4)};8v.u.5r=j(){k q=v.1d("4P");if(q)q.1e.5x=h.l.C.2F(-20)};5D=j(l){h.l=l;h.bx=1p;h.2w()};5D.u.2w=j(){k q=v.E("q");q.id="5K";q.I="5K";v.1o("1t")[0].D(q);k my=v.E("q");my.I="l7";q.D(my);k 2N=v.E("F");2N.1L="1a://P.9g.1c/3V.2k";my.D(2N);k 2m=v.E("q");my.D(2m);k o=h;h.l.V("aP",j(){2N.1L=o.l.C.4A(o.l.2h.2r);2m.X=o.l.2h.2m});k 2I=v.E("2I");k 4t;1K(k i=1;i<=6;i++){k li=v.E("li");k F=v.E("F");k a=v.E("a");k 1Y=h.l.1S;35(i){T 1:a.X="l3";F.1L="1a://P.9g.1c/F/3M/le.2k";1Y=h.l.1S+"/1n/3B.1V?r="+29.2g();4t=v.E("q");4t.1e.2G="41";li.D(4t);R;T 2:a.X="l9";F.1L="1a://P.9g.1c/F/3M/l1.2k";1Y=h.l.1S+"/1n/3v.1V?r="+29.2g();R;T 3:a.X="kS";F.1L="1a://P.9g.1c/F/3M/kT.2k";1Y=h.l.1S+"/1n/kO.1V?r="+29.2g();R;T 4:a.X="kP";F.1L="1a://P.9g.1c/F/3M/kQ.2k";1Y=h.l.1S+"/3n.1V?J=pk&r="+29.2g();R;T 5:a.X="kU";F.1L="1a://P.9g.1c/F/3M/kZ.2k";1Y=h.l.1S+"/1n/46.1V?r="+29.2g();R;T 6:a.X="kX";F.1L="1a://P.9g.1c/F/3M/jL.2k";1Y=h.l.1S+"/1n/my.1V?r="+29.2g();R};li.D(F);li.D(a);(j(1Y){li.V("1J",j(e){1A.1q=1Y;e.1I()})})(1Y);2I.D(li)};q.D(2I);h.l.V("7A",j(A){if(A>0){4t.X=A;4t.1e.2G=""}L{4t.X="";4t.1e.2G="41"}});k gz=v.E("F");gz.1L="1a://P.9g.1c/F/jM.2k";gz.I="jI";q.D(gz);gz.V("1J",j(e){1A.1q=o.l.1S+"/jR.1V?r="+29.2g();e.1I()});h.l.V("aP",j(){if(o.l.2h.ei)gz.1e.2G="41"})};5D.u.jt=j(){if(1b.1r){k G="1a://1D.9g.1c/jD/jE?1w=0&1r="+1b.1r;h.l.C.1W(G,j(A){if(A&&A.f8>0){k q=v.E("q");q.I="5C";q.X="+"+A.f8;v.1d("jA").D(q)}})}};5D.u.5t=j(){k q=v.1d("5K");q.I="5K jB";k W=v.E("q");W.id="bG";W.I="bG";v.1o("1t")[0].D(W);k o=h;W.V("1J",j(e){o.5r();o.l.S.2E.5t();e.1I()});h.bx=1i};5D.u.5r=j(){k q=v.1d("5K");q.I="5K";k W=v.1d("bG");if(W)v.1o("1t")[0].1O(W);h.bx=1p};4k.u.4C=j(H){k q=v.E("q");q.id="5I";q.I="5I";v.1o("1t")[0].D(q);q.V("1J",j(e){H&&H.1x(B);e.1I()})};4k.u.9m=j(){k q=v.1d("5I");if(q)q.2b.1O(q)};4k.u.f5=j(23,H){h.7G();h.4C();k 1G=v.E("q");1G.id="bT";1G.I="bT";v.1o("1t")[0].D(1G);k p=v.E("p");p.X="ka";1G.D(p);k 2I=v.E("2I");1G.D(2I);h.bA(2I,23,H);k o=h;k q=v.E("q");1G.D(q);k 37=v.E("a");37.X="kf";37.V("1J",j(e){o.l.C.1W("1a://pp.9g.1c/im/fb?kk=1",j(A){o.bA(2I,A,H)});e.1I()});q.D(37);k 36=v.E("a");36.X="cc";36.V("1J",j(e){o.7G();e.1I()});q.D(36)};4k.u.bA=j(2I,23,H){2I.X="";k o=h;1K(k i=0;i<23.Y;i++){(j(P){k li=v.E("li");2I.D(li);k F=v.E("F");F.1L=P.9p;li.D(F);k 3N=v.E("3N");3N.X=P.3W;li.D(3N);li.V("1J",j(e){o.7G();e.1I();H&&H.1x(B,P)})})(23[i])}};4k.u.7G=j(){k 1G=v.1d("bT");if(1G)1G.2b.1O(1G);h.9m()};39=j(l){h.l=l;h.1Z={7i:10,5u:20,cy:30,2f:50};h.19={cx:jW,k1:k5,k4:k0,k8:ki,kb:k9,kd:kc,jU:jC,jy:jw,jQ:jT,jJ:jK,l0:la,ct:l8,cv:l5,kN:kv,kt:ky,km:kL,kA:kE,kD:js,ic:i6,iw:hW,cI:ja};h.S=1Q 5o(l);h.2w()};39.u.2w=j(){k o=h;h.l.V("7A",j(){if(o.l.6o&&!o.l.5c){o.l.V("5c",j(){o.89()})}L{o.89()}})};39.u.89=j(){if(!1b.1r)K;k G="1a://pp.9g.1c/im/j8?1r="+1b.1r;k o=h;h.l.C.1W(G,j(A){if(A&&A.23&&A.23.Y>0){o.f2(A.23)}})};39.u.f2=j(23){k 1G=B,W=B,n=0;k o=h;1K(k i=0;i<23.Y;i++){k 1P=23[i];35(1P.1N){T 9:h.eW(1P);R;T 13:h.ht(1P);R;T 14:R;3V:n++;if(n==1){h.l.S.2E&&h.l.S.2E.5r();1G=v.E("q");1G.I="jk";v.1o("1t")[0].D(1G);W=v.E("q");W.I="iH";1G.D(W)}(j(1P){1E(j(){k q=o.S.cD(1P);1G.D(q);1E(j(){k 2y=j(){q.2b.1O(q);if(1G.5U("cg").Y==0){1G.2b.1O(1G);o.l.S.2E&&o.l.S.2E.5t()}};q.I="cg bi";q.V("3o",2y);q.V("3l",2y);W.I+=" a8"},iG)},n*50)})(1P);R}}};39.u.eW=j(1P){k o=h;h.S.9N({18:1P.3U,O:"{1v}j6："+1P.O.3B,6v:j(){o.l.2i.aW(1P,1);o.l.3L()},6w:j(){o.l.2i.aW(1P,-1);o.l.3L()}});h.l.3L(3)};39.u.ht=j(1P){if(1P.O.3y){h.S.88();h.l.3L()}L{k o=h;h.S.9N({18:1P.3U,O:"{1v}jv",6v:j(){o.l.2i.c5(1P,1);o.l.3L()},6w:j(){o.l.2i.c5(1P,-1);o.l.3L()}});h.l.3L(3)}};39.u.4q=j(1P){k O="";2D{35(1P.1N){T 1:O=1P.O;R;T 2:O="ju";R;T 3:O="kY";R;T 4:O="ld";R;T 5:O="[lc]";R;T 6:O=1P.O.qa.O;R;T 7:O=1P.O.ib;R;T 8:O="[ij]";R;T 9:O="ii："+1P.O.3B;R;T 10:O="hG："+(1P.O.2L==1?"6E":"6F");R;T 11:O=1P.O.jd.O.Z;R;T 12:O="[iS]";R;T 13:O="[iN]";R;T 14:O="[iO]："+(1P.O.2L==1?"6E":"6F");R;3V:O="【iT】";R}}2z(e){1g.1l(e)};K O};39.u.1R=j(w,1X,2M){k G="1a://pp.9g.1c/im/iV?1r="+1b.1r+"&3B="+2c(2C.2O(w));h.l.C.1W(G,j(A){if(A&&A.1X){1X&&1X.1x(B,A)}L{2M=2M||j(){53("iM")};2M.1x(B)}})};39.u.cz=j(4B,4w,O,1X,2M){h.1R({ch:h.1Z.5u,1U:h.19.cx,4B:4B,4w:4w,O:O},1X,2M)};39.u.dR=j(4B,4w,3B,1X,2M){h.1R({ch:h.1Z.5u,1U:h.19.ct,4B:4B,4w:4w,3B:3B},1X,2M)};39.u.aW=j(1P,2L){k w={ch:h.1Z.5u,1U:h.19.cv,4B:h.l.18,4w:1P.3U,87:1P.O.87,2L:2L};k o=h;h.1R(w,j(A){o.l.C.53("hQ"+(2L==1?"6E":"6F")+"hN。")})};39.u.c5=j(1P,2L){k w={ch:h.1Z.5u,1U:h.19.cI,4B:h.l.18,4w:1P.3U,87:1P.O.87,2L:2L};k o=h;h.1R(w,j(A){if(2L==1){o.l.C.4r({1C:"dh",O:"iq，dB.."});k 1M=1P.O.2t;1A.1q=o.l.1S+"/3n.1V?J=pk&1M="+1M}});h.l.3L()};39.u.cr=j(18){1A.1q=h.l.1S+"/1n/2i.1V?3U="+18+"&r="+29.2g()};5o=j(l){h.l=l};5o.u.cD=j(1P){k q=v.E("q");q.I="cg bj";k F=v.E("F");F.1L="1a://P.9g.1c/3V.2k";q.D(F);k o=h;h.l.7L(1P.3U,j(1v){1P.co=1v;F.1L=o.l.C.4A(1v.2r)});k Z=v.E("q");Z.X=h.l.2i.4q(1P);q.D(Z);q.V("1J",j(e){o.bM(1P.co,1i);e.1I()});K q};5o.u.bM=j(1v,cu){k W=v.E("q");W.I="iy";v.1o("1t")[0].D(W);k q=v.E("q");q.I="cG eA";v.1o("1t")[0].D(q);k 5d=v.E("5d");5d.fa=(cu?"ir：":"bB：")+1v.2m;q.D(5d);k a=v.E("a");a.I="it";a.X="bB";q.D(a);k 27=v.E("a");27.I="i4";27.X="i5";q.D(27);k bN=j(){k 2y=j(){q.2b.1O(q);W.2b.1O(W)};q.I="cG i0";q.V("3o",2y);q.V("3l",2y);W.I+=" a8"};k 7H=1p;k o=h;k 1R=j(){if(7H)K;7H=1i;a.X="……";o.l.2i.cz(o.l.18,1v.1m,5d.3a,j(){a.X="√";1E(bN,6c)},j(){a.X="bB";7H=1p})};5d.V("i7",j(e){if(e.i8==13){1R()}});a.V("1J",j(e){1R();e.1I()});W.V("1J",j(e){bN();e.1I()});27.V("1J",j(e){o.l.2i.cr(1v.1m);e.1I()})};5o.u.9N=j(N){k 4o={18:0,1v:B,O:"",6v:B,6w:B};N=h.l.C.33(4o,N);h.l.S.2E&&h.l.S.2E.5r();k 1G=v.E("q");1G.id="ae";1G.I="ae";v.1o("1t")[0].D(1G);k W=v.E("q");W.id="aq";W.I="aq";1G.D(W);k q=v.E("q");q.id="7z";q.I="7z bj";1G.D(q);k F=v.E("F");F.I="kC";F.1L="1a://P.9g.1c/3V.2k";q.D(F);k Z=v.E("q");Z.I="kK";q.D(Z);k o=h;k 9w=j(1v,O){F.1L=o.l.C.4A(1v.2r);Z.X=O.2W("{1v}",1v.2m+"<F 1L=\'1a://P.9g.1c/F/"+(1v.6I==1?"dg":"de")+".2k\' />")};if(N.1v){9w(1v,N.O)}L if(N.18){h.l.7L(N.18,j(1v){9w(1v,N.O)})};k 21=v.E("q");21.I="kH";q.D(21);k 37=v.E("a");37.I="kI";37.X="6E";37.V("1J",j(e){N.6v&&N.6v.1x(B);o.88();e.1I()});21.D(37);k 36=v.E("a");36.I="kp";36.X="6F";36.V("1J",j(e){N.6w&&N.6w.1x(B);o.88();e.1I()});21.D(36)};5o.u.88=j(){k 1G=v.1d("ae");k W=v.1d("aq");k q=v.1d("7z");if(q){k o=h;k 2y=j(){1G.2b.1O(1G);o.l.S.2E&&o.l.S.2E.5t()};q.I="7z bi";q.V("3o",2y);q.V("3l",2y);W.I+=" a8"}};1h=j(l){h.l=l;h.26={95:0,5p:1,5l:2,6u:3,8W:4,bq:5,8O:6,6Y:7};h.J=(h.l.J!=B&&h.l.J!="pk"?h.l.J:B);h.1M=h.l.1M;h.38=h.l.38;h.2t=B;h.4R=B;h.b9=1p;h.cw=(h.l.3d=="l2");h.8H=1p;h.cA();h.4I=(h.1M?1i:1p);h.dA=(h.l.43?1i:1p);h.3z=0;h.1w=h.26.95;h.8a=0;h.5j=B;h.3v=[];h.2Q=B;h.8j=1p;h.1u=[];h.aL=1p;h.7V=1p;h.9b=1p;h.81=1Q 4F(l);h.S=1Q 1f(l);h.io=1Q U(l,h.S);h.io.b2()};1h.u.ca=j(J,8o){k o=h;k 2v=j(){1A.1q=o.l.1S+"/3n.1V?J="+J+"&1M="+o.1M};if(8o){1E(2v,52)}L{2v()}};1h.u.78=j(J,1M,8o){2q.1M=1M;k o=h;k 2v=j(){1A.1q=o.l.1S+"/3n.1V?J="+J};if(8o){1E(2v,52)}L{2v()}};1h.u.cA=j(){if(h.J&&!h.1M&&2q.1M){h.2t=2q.1M;h.8H=1i};2q.4c("1M")};1h.u.7I=j(){if(!h.5j)h.io.gX();if(!h.2Q)h.io.hl();h.S.4C();k o=h;1E(j(){if(o.38){o.dF()}L if(o.4I){o.dz()}L if(o.8H){o.dx()}L if(o.cw){o.9C()}L{o.2K()}},6c)};1h.u.2K=j(){h.1w=h.26.5l;h.S.cM();h.io.eh();if(h.l.9i())K;k o=h;1E(j(){if(o.1w==o.26.5l){if(o.J){if(!o.8j){o.cp()}}L{o.dJ()}}},kV)};1h.u.6K=j(){h.1M=B;h.8H=1p;h.4I=1p;h.S.3c("jH..");k o=h;1E(j(){o.2K()},4Z)};1h.u.go=j(Q){h.9b=1p;h.l.2p("cB",Q);h.S.cL(Q);k o=h;h.l.on("4l",j(){k 5v=1E(j(){if(!o.J&&o.80().J){o.78(o.80().J,o.2t,1p)}L{o.4f()}},dS);o.l.on("8Y",j(){84(5v)},1i)},1i)};1h.u.cp=j(){h.S.3c("cd..",B,1i);h.io.bd()};1h.u.gu=j(Q,P){k o=h;k ok=j(){o.io.h6(Q.1m,P.J)};k 3y=j(){o.io.h7(Q.1m);1E(j(){if(o.1w==o.26.5l){o.io.bd()}},4H)};h.S.dV(Q,P,ok,3y)};1h.u.gr=j(){k o=h;1E(j(){if(o.1w==o.26.5l){o.dM()}},52)};1h.u.gE=j(18,J){1A.1q=h.l.1S+"/3n.1V?J="+J};1h.u.gQ=j(Q){h.8j=1i;h.S.5q();k o=h;1E(j(){o.8j=1p;if(o.1w==o.26.5l){o.2K()}},bk)};1h.u.dM=j(){h.S.3c("cd...",B,1i);k o=h;1E(j(){o.io.h4()},4Z)};1h.u.dJ=j(){h.io.gp();k Q=h.S.cN();1g.1l("kh："+Q.2m);k o=h;1E(j(){o.io.ha(Q.1m)},dS)};1h.u.8l=j(18,J,38){1g.1l("38 = "+38);1A.1q=h.l.1S+"/3n.1V?J="+J+"&38="+38};1h.u.9C=j(){if(h.4I&&h.3z==h.l.18){1g.1l("jZ，jV");h.4T();h.io.8G()}L{1g.1l("k2，dP");if(h.2t)h.4T();h.io.h3()}};1h.u.92=j(1M,3z){1g.1l("dP：2t = "+1M+", 3z = "+3z);h.1M=1M;h.4I=1i;h.3z=3z;h.io.8G()};1h.u.dz=j(){h.1w=h.26.5p;h.S.3c("iu");k o=h;1E(j(){o.io.8G()},4Z)};1h.u.gU=j(1w){h.1w=h.26.6u;h.S.77();if(1w==1){h.4f()}L{k o=h;if(h.1M!=h.l.1M){h.S.c1();h.S.a1("dy",1p,j(){o.S.bn(j(){o.S.9c()})});h.l.on("4l",j(){o.S.7m()},1i)}L{if(h.3z==h.l.18){if(h.dA){h.S.c1();h.S.a1("dy",1p,j(){o.S.bn(j(){o.S.9c()})});h.l.on("4l",j(){o.S.7m()},1i)}L{h.S.9c()}}L{k 48=j(){o.S.bZ("iJ",30,j(){o.S.6M("iA");o.S.7q([{Z:"iQ",2o:j(){o.io.c7();o.S.6N();48();o.S.6M("iX,jm")}},{Z:"9s",2o:j(){1A.1q=o.l.1S+"/3n.1V?J=pk"}}])})};48();h.io.c7()}};h.l.on("4l",j(){o.4f()},1i)}};1h.u.gR=j(1F){if(1F==0){h.S.3c("jb")}L{h.S.3c("jc")}};1h.u.dx=j(){h.1w=h.26.5p;h.io.hb()};1h.u.gH=j(1w){h.1w=h.26.6u;if(1w==1){h.4f()}L{k o=h;k 48=j(){o.S.bZ("dB",30,j(){o.S.6M("e4");o.S.7q([{Z:"e0",2o:j(){o.S.6N();48()}},{Z:"9s",2o:j(){1A.1q=o.l.1S+"/3n.1V?J=pk"}}])})};48();h.l.on("4l",j(){o.4f()},1i)}};1h.u.dF=j(){h.1w=h.26.5p;h.io.h8(h.38)};1h.u.gF=j(1M){h.1w=h.26.6u;h.4f()};1h.u.9d=j(23){h.3v=23;h.l.2p("df")};1h.u.9f=j(23){h.3v=23};1h.u.9n=j(){h.S.9n();h.S.dq();k o=h;h.S.e2("hR",5,j(){o.io.hc()});h.l.on("dl",j(P){o.S.7J();o.S.du(P.J)},1i);h.l.on("8Y",j(){o.S.7J();o.S.aA()},1i)};1h.u.7o=j(1u){h.2Q=1u;h.l.2p("cJ",1u)};1h.u.8K=j(w){1g.1l("hE：\\il = "+(w.P?w.P.3W:"B")+", 8z = "+w.8z+", 1w = "+w.1w);h.l.2p("ih",w.1w);h.2t=w.2t;h.4R=w.P||B;h.b9=w.8k;h.1w=h.26.6u;h.3z=w.3z;h.8a=w.8z};1h.u.8N=j(1w){1g.1l("jz！");h.l.2p("4l",1w)};1h.u.8E=j(1u){h.cU(1u);1g.1l("jF：");1K(k i=0;i<1u.Y;i++){k Q=1u[i];1g.1l("1m = "+Q.1m+", 2m = "+Q.2m)}};1h.u.8r=j(Q,1w){1g.1l("kj："+Q.2m);h.7T(Q)};1h.u.8J=j(Q){if(Q.1m==h.l.18){h.2t=B;h.4R=B;h.1w=h.26.5p;h.3z=0;h.8a=0;h.l.2p("ap")}L{1g.1l("jX");h.9b=1i;h.dU(Q)}};1h.u.dU=j(Q){if(h.1w==h.26.bq||h.1w==h.26.8O||h.1w==h.26.6Y||h.aL||h.7V)K;h.9E(Q);h.l.2p("8Y");h.S.3c(Q.2m+"k3");k o=h;1E(j(){o.4T();o.6K()},4Z)};1h.u.4f=j(){1g.1l("k7");h.l.2p("dL");h.S.4f();h.S.7M();k o=h;if(h.J){if(h.80().J){h.S.6S("cZ",5,j(){o.51()})}L{h.7V=1i;h.S.56();k 48=j(){o.S.6S("k6",10,j(){o.S.6M("e4");o.S.7q([{Z:"e0",2o:j(){o.S.6N();48()}},{Z:"9s",2o:j(){1A.1q=o.l.1S+"/3n.1V?J=pk"}}])})};48();h.l.on("4l",j(){o.7V=1p;o.S.7M();o.S.6S("cZ",5,j(){o.51()})},1i)}}L if(h.4R){h.S.3c("jY",B,1p);h.78(h.4R.J,h.2t,1p)}L{h.9n()}};1h.u.51=j(7F){1g.1l("kg");h.l.2p("dI");h.S.51();h.S.7Q();h.3Y();};1h.u.dr=j(J){h.io.h1(J)};1h.u.gm=j(18,P){1g.1l((18==0?"ke":"di "+18)+" jS "+P.3W);h.aL=1i;h.l.2p("dl",P);if(h.4I){h.ca(P.J,1i)}L{k 1M=h.2t.2W("cR",P.J);h.78(P.J,1M,1i)}};1h.u.3Y=j(){h.io.gY();h.1w=h.26.8W};1h.u.8X=j(1u){1g.1l("kR db lb：");1K(k i=0;i<1u.Y;i++){k Q=1u[i];1g.1l("1m = "+Q.1m+": "+(Q.3Y?"3Y":"l6"))}};1h.u.8V=j(1w){1g.1l("ku db");h.1w=h.26.bq;h.l.2p("8M")};1h.u.af=j(){1g.1l("kw");h.l.2p("dN");h.1w=h.26.8O;if(h.l.N.2E){k 1F=h.l.N.2E.1x(B);1g.1l("P 2E: 1F = "+1F)}};1h.u.4V=j(A){h.io.aH(A)};1h.u.2y=j(A){if(h.1w==h.26.8O){h.io.aH(A);k 1F=h.l.N.8L.1x(B);1g.1l("P 8L: "+1F)}};1h.u.hz=j(1w){1g.1l("kq");h.1w=h.26.6Y;k 1F=h.l.N.dc.1x(B);1g.1l("P aZ: 1F = "+1F);h.S.dC()};1h.u.8m=j(w){1g.1l("kz：");1K(k i=0;i<w.1F.Y;i++){k Q=w.1F[i];1g.1l("1m = "+Q.1m+", 1B = "+Q.1B)};1g.1l("54 = "+w.54);h.l.2p("dQ");h.S.dG(w);h.S.7M();h.l.3L(3);k o=h;h.l.on("8S ap",j(){o.l.3L()})};1h.u.kG=j(){h.l.2p("8S");h.io.gZ()};1h.u.8C=j(w){1g.1l("9W：id = "+w.2t+", P = "+w.P.3W+", di = "+w.1u+", 1w = "+w.1w+", 8k = "+w.8k);k o=h;if(w.8k){h.4T();h.6K()}L if(w.1w==1){h.S.51();h.S.8R(w.8z);h.S.9u();h.3Y();h.S.3c("kF",B,1i);h.l.on("8M",j(){o.S.7Q()})}L{h.4T();h.6K()}};1h.u.dO=j(){h.io.ho();k o=h;h.l.on("df",j(){o.S.d7(j(P){o.io.8Z(P.J)})},1i)};1h.u.dH=j(J){if(J){h.io.8Z(J)}L{h.io.8Z()}};1h.u.8B=j(Q,P){k o=h;if(Q.1m==h.l.18){if(h.b9||h.9b){if(!P){h.S.3c("i9");1E(j(){o.4T();o.6K()},4Z)}L{1A.1q=h.l.1S+"/3n.1V?J="+P.J}}L{if(!P)h.1w=h.26.8W;h.l.C.4r({1C:(P?"dh"+P.3W:"9W"),O:"i2...",58:{2o:j(){o.io.gW()}}})}}L{h.l.C.4r({O:Q.2m+(P?"i1"+P.3W:"i3"),59:{2P:"6E",2o:j(){o.io.ay(1,P?P.J:B)}},58:{2P:"6F",2o:j(){o.io.ay(-1,P?P.J:B)}}})}};1h.u.8u=j(Q){if(Q.1m==h.l.18){h.1w=h.26.6Y}L{h.l.C.6y();h.l.C.27(Q.2m+"is")}};1h.u.8w=j(Q,2L,P){if(Q.1m==h.l.18){if(2L==1){if(!P)h.1w=h.26.8W;h.bv(P);if(P){h.l.C.27("dj..")}}}L{if(2L==1){h.l.C.6y();h.bv(P);if(P){h.l.C.27(Q.2m+"ix，dj..")}}L{h.1w=h.26.6Y;h.l.C.6y();h.l.C.27(Q.2m+"ip")}}};1h.u.bv=j(P){if(P){}L{h.l.2p("8S");h.S.51();h.S.9u();k o=h;h.l.on("8M",j(){o.S.7Q()})}};1h.u.eX=j(J){if(h.4I){h.ca(J)}L{k 1M=h.2t;if(h.2t.3X("hH")!=-1){1M=h.2t.2W("cR",J)}L if(h.4R){1M=h.2t.2W(h.4R.J,J)}L{1M=J+"aR"+h.l.C.4K(10)};h.78(J,1M,1p)}};1h.u.4T=j(){h.S.6B();h.io.h9()};1h.u.cU=j(1u){h.1u=1u;1K(k i=0;i<h.1u.Y;i++){k Q=h.1u[i];Q.1B=Q.1B||0;Q.3u=Q.3u||0}};1h.u.7T=j(Q){Q.1B=Q.1B||0;Q.3u=Q.3u||0;h.1u.31(Q)};1h.u.9E=j(Q){1K(k i=0;i<h.1u.Y;i++){if(h.1u[i].1m==Q.1m){h.1u.d2(i,1)}}};1h.u.9Q=j(18){1K(k i=0;i<h.1u.Y;i++){if(h.1u[i].1m==18)K h.1u[i]};K B};1h.u.80=j(){1K(k i=0;i<h.1u.Y;i++){if(h.1u[i].1m!=h.l.18)K h.1u[i]};K B};1h.u.j7=j(Q){1K(k i=0;i<h.1u.Y;i++){if(h.1u[i].1m=Q.1m)K 1i};K 1p};1h.u.5h=j(18,1B,3u){1K(k i=0;i<h.1u.Y;i++){k Q=h.1u[i];if(Q.1m==18){Q.1B=1B;Q.3u=3u;h.S.5h(Q);K}}};1h.u.gM=j(23){1g.1l("j3："+23.Y+"j2");h.81.ag();1K(k i=0;i<23.Y;i++){h.81.e7(23[i])};h.81.2E()};1h.u.2i=j(1v){if(h.l.C.2j()=="2a"){h.l.1n.2i(1v.1m)}L{if(h.l.2i){h.l.2i.S.bM(1v)}L{1A.1q=h.l.1S+"/1n/2i.1V?3U="+1v.1m+"&r="+29.2g()}}};4F=j(l){h.l=l;h.ag()};4F.u.ag=j(){h.7v=[];h.9o=1p;h.2U=0;};4F.u.e7=j(w){k 2S={3R:0,Q:w.Q,7N:w.A,2y:1p};h.7v.31(2S)};4F.u.2E=j(){1g.1l("iL：iY");h.9o=1i;k cC=1Q 3H().42();k o=h;ck(j(){o.2U=1Q 3H().42()-cC;o.cl();if(o.9o){ck(1z.lf)}L{1g.1l("p2")}})};4F.u.cl=j(){k aj=1p;1K(k i=0;i<h.7v.Y;i++){k 2S=h.7v[i];if(2S.7N.Y==0)2S.2y=1i;if(2S.2y)pj;aS(!2S.2y){k 4G=2S.7N[2S.3R];if(4G.2U>h.2U){aj=1i;R};h.7g(2S.Q,4G);2S.3R++;if(2S.3R==2S.7N.Y){2S.2y=1i;1g.1l("2S: "+i+" 2y!")}}};if(!aj)h.9o=1p};4F.u.7g=j(Q,4G){1g.1l("pl："+Q.2m+", "+2C.2O(4G));h.l.pk.5h(Q.1m,4G.1B,4G.3u)};1f=j(l){h.l=l;h.7K=B;k o=h;h.l.on("cB",j(){o.5q()});h.l.on("dL",j(){o.cK();o.cO();o.6N()});h.l.on("dI",j(){o.6B();o.63();o.56()});h.l.on("8M",j(){o.77();o.56()});h.l.on("dN",j(){o.77();o.7O();o.56();o.9m()});h.l.on("dQ",j(){o.8d();o.dE()});h.l.on("8S",j(){o.8q()});h.l.on("ap",j(){o.6B();o.8d();o.7O();o.56();o.8q();o.63()});h.l.on("8Y",j(){o.6B();o.8d();o.7O();o.56();o.63();o.4Y("7w")})};1f.u.4C=j(){k W=v.1d("93");if(!W){W=v.E("q");W.id="93";W.I="93";v.1o("1t")[0].D(W)};W.1e.2G=""};1f.u.9m=j(){k W=v.1d("93");if(W)W.1e.2G="41"};1f.u.a1=j(Z,dw,H){k 1H=v.E("a");1H.I="aa";v.1o("1t")[0].D(1H);1H.X=Z;1H.V("1J",j(e){if(dw)v.1o("1t")[0].1O(1H);H&&H.1x(B);e.1I()})};1f.u.7q=j(21){k 5X=21.Y;1K(k i=0;i<5X;i++){k Z=21[i].Z;k H=21[i].2o;k 1H=v.E("a");1H.I="aa";1H.1e.pi=(h.l.C.6h(10)+h.l.C.6i((5X-i-1)*17))+"px";v.1o("1t")[0].D(1H);1H.X=Z;(j(1H,H){1H.V("1J",j(e){H&&H.1x(B);e.1I()})})(1H,H)}};1f.u.6N=j(){k 21=v.pg(".aa");1K(k i=21.Y-1;i>=0;i--){k 1H=21[i];1H.2b.1O(1H)}};1f.u.eg=j(2x,H){h.3c(2x);if(2x==0){H&&H.1x(B);K};k o=h;h.7K=1E(j(){o.eg(--2x,H)},2Z)};1f.u.ee=j(2x,H){h.9I(2x);if(2x==0){H&&H.1x(B);K};k o=h;h.7K=1E(j(){o.ee(--2x,H)},2Z)};1f.u.ph=j(){84(h.7K)};1f.u.6S=j(O,2x,H){h.63();k q=v.E("q");q.id="9M";q.I="9M";v.1o("1t")[0].D(q);k 3A=v.E("q");3A.I="dY ev";q.D(3A);k 2n=v.E("q");2n.I="dW 2n";3A.D(2n);k 3D=v.E("q");3D.I="dY ep";q.D(3D);k 28=v.E("q");28.I="dW 28";3D.D(28);k Z=v.E("q");Z.id="ci";Z.I="ci";Z.X=O;q.D(Z);2n.1e.5W="5V "+2x+"s 3j";2n.1e.62="3F";2n.1e.5Z="5V "+2x+"s 3j";2n.1e.5Y="3F";28.1e.5Z="5k "+2x+"s 3j";28.1e.5Y="3F";28.1e.5W="5k "+2x+"s 3j";28.1e.62="3F";28.V("3o",H);28.V("3l",H)};1f.u.63=j(){k q=v.1d("9M");if(q)q.2b.1O(q)};1f.u.e2=j(O,2x,H){h.7J();k q=v.E("q");q.id="bE";q.I="bE";v.1o("1t")[0].D(q);k 3A=v.E("q");3A.I="cY pn";q.D(3A);k 2n=v.E("q");2n.I="cX 2n";3A.D(2n);k 3D=v.E("q");3D.I="cY pt";q.D(3D);k 28=v.E("q");28.I="cX 28";3D.D(28);k Z=v.E("q");Z.id="cV";Z.I="cV";Z.X=O;q.D(Z);2n.1e.5W="5V "+2x+"s 3j";2n.1e.62="3F";2n.1e.5Z="5V "+2x+"s 3j";2n.1e.5Y="3F";28.1e.5Z="5k "+2x+"s 3j";28.1e.5Y="3F";28.1e.5W="5k "+2x+"s 3j";28.1e.62="3F";28.V("3o",H);28.V("3l",H)};1f.u.7J=j(){k q=v.1d("bE");if(q)q.2b.1O(q)};1f.u.6M=j(O){k Z=v.1d("ci");if(Z){k fz;O=O+"";if(O.Y==1){fz=h.l.C.2F(32)}L if(O.Y==2){fz=h.l.C.2F(16)}L if(O.Y==3){fz=h.l.C.2F(12)}L if(O.Y<=5){fz=h.l.C.2F(9)}L if(O.Y<=7){fz=h.l.C.2F(7)}L{fz=h.l.C.2F(6)};Z.X=O;Z.1e.d1=fz}};1f.u.3c=j(O,34,8A){h.4C();k 27=v.1d("5B");k Z=v.1d("7Z");if(!27){27=v.E("q");27.id="5B";27.I="5B";v.1o("1t")[0].D(27);Z=v.E("q");Z.id="7Z";Z.I="7Z";v.1o("1t")[0].D(Z)};27.1e.2G="";Z.1e.2G="";k fz;O=O+"";if(O.Y==1){fz=h.l.C.2F(32)}L if(O.Y==2){fz=h.l.C.2F(16)}L if(O.Y==3){fz=h.l.C.2F(12)}L if(O.Y<=5){fz=h.l.C.2F(9)}L if(O.Y<=7){fz=h.l.C.2F(7)}L{fz=h.l.C.2F(6)};Z.X=O;Z.1e.d1=fz;Z.1e.34=(34?34:"#pu");27.I=(8A?"5B 8A":"5B")};1f.u.77=j(){k 27=v.1d("5B");if(27)27.1e.2G="41";k Z=v.1d("7Z");if(Z)Z.1e.2G="41"};1f.u.cM=j(){h.3c("cd",B,1i);h.4h(h.l.1v);h.4Y("7w");if(h.l.pk.2Q){1g.1l("6b pr");h.6b()}L{k o=h;h.l.on("cJ",j(){1g.1l("6b po");o.6b()},1i)}};1f.u.cK=j(){h.77();h.4Y("cS");h.4Y("7w");h.8f()};1f.u.bZ=j(O,2x,H){h.4C();h.4h(h.l.1v);k o=h;h.6S(O,2x,H)};1f.u.cO=j(){h.4Y("cS");h.4Y("7w");h.63()};1f.u.c1=j(){h.7m();k 1Y=h.l.C.2B(h.l.1j.1Y,"1M",h.l.pk.1M);k 1G=v.E("q");1G.id="aM";1G.I="aM";v.1o("1t")[0].D(1G);k 1C=v.E("b");1C.X=h.l.1v.2m+"pq！";1G.D(1C);k 27=v.E("3N");27.X="pf";1G.D(27);k c9=v.E("q");1G.D(c9);k o=h;h.l.C.eO(1Y,j(G){k 5X=o.l.C.6i(50);k cQ=1Q p7(c9,{3J:5X,p8:5X});cQ.p6(G)});k O=v.E("p");O.X="d6，dn"+h.l.pk.1M+"<br/>do……";1G.D(O);h.l.3h({3e:h.l.1v.2r,1Y:1Y,1C:"d6，dn"+h.l.pk.1M+"，do……",O:"p4"+h.l.1v.2m+"p5"})};1f.u.7m=j(){k q=v.1d("aM");if(q)q.2b.1O(q)};1f.u.9c=j(){k o=h;h.l.C.4V({O:"p9",2U:30,85:"4l",83:"pd",7h:[{2P:"pe",c4:1i},{2P:"9s",4W:"#pc",2o:j(){1A.1q=o.l.1S+"/3n.1V?J=pk"}}]})};1f.u.bn=j(H){h.8T();k F=v.E("F");F.id="d8";F.I="pa";F.1L="1a://P.9g.1c/3i.2k";k o=h;F.V("1J",j(e){o.8T();e.1I()});v.1o("1t")[0].D(F);if(h.l.1n){h.l.1n.3m=j(){o.8T();H&&H.1x(B)}}};1f.u.8T=j(){k F=v.1d("d8");if(F)F.2b.1O(F)};1f.u.4h=j(1v){k 2A=(1v.1m==h.l.18);k id="pb"+(2A?"2R":"2l");k q=v.1d(id);if(!q){q=h.7t(id,1v);q.I+=(2A?" pv":" pM");v.1o("1t")[0].D(q)}};1f.u.4Y=j(id){k q=v.1d(id);if(q)q.2b.1O(q)};1f.u.7t=j(id,1v){k q=v.E("q");q.id=id;q.I="pN"+(1v.1m==h.l.18?" 2R":"");k 2N=v.E("F");2N.I="pL";q.D(2N);k 2u=v.E("q");2u.I="pJ";q.D(2u);k 2m=v.E("3N");2u.D(2m);k 6I=v.E("F");2u.D(6I);k 3T=v.E("q");3T.I="pK";q.D(3T);2N.1L=h.l.C.4A(1v.2r);2m.X=1v.2m;6I.1L="1a://P.9g.1c/F/"+(1v.6I==1?"dg":"de")+".2k";3T.X=1v.3T;K q};1f.u.dV=j(Q,P,ok,3y){h.5q();k q=v.1d("6x");q=v.E("6x");q.id="6x";q.I="6x";v.1o("1t")[0].D(q);k 3O=v.E("F");3O.I="pO";q.D(3O);k Z=v.E("q");Z.I="pS";q.D(Z);k 1H=v.E("q");1H.I="pT";q.D(1H);k 66=v.E("a");66.I="pR";66.X="f4";1H.D(66);k 67=v.E("a");67.I="pP";67.X="pQ";1H.D(67);3O.1L=h.l.C.4A(Q.2r);Z.X="pI"+Q.3T+"pA“"+Q.2m+"”pB《"+P.3W+"》？";k o=h;66.V("1J",j(e){e.1I();o.5q();ok&&ok.1x(B)});67.V("1J",j(e){e.1I();o.5q();3y&&3y.1x(B)})};1f.u.5q=j(){k q=v.1d("6x");if(q)v.1o("1t")[0].1O(q)};1f.u.4f=j(){k q=v.E("q");q.id="b3";q.I="b3";v.1o("1t")[0].D(q);k ps=v.E("q");ps.I="pz";q.D(ps);k 2l=B;k 1u=h.l.pk.1u;1K(k i=0;i<1u.Y;i++){k Q=h.l.pk.9Q(1u[i].1m);k 2A=(Q.1m==h.l.18);if(!2A)2l=Q;k 1v=h.7t("pw"+(2A?"2R":"2l"),Q);1v.I+=(2A?" py":" pC");ps.D(1v)}};1f.u.6B=j(){k q=v.1d("b3");if(q)q.2b.1O(q)};1f.u.d7=j(H){h.9t();k o=h;k W=v.E("q");W.id="aG";W.I="aG";W.V("1J",j(e){o.9t();e.1I()});v.1o("1t")[0].D(W);k q=v.E("q");q.id="aD";q.I="aD";v.1o("1t")[0].D(q);if(!h.l.pk.3v)K;k 2I=v.E("2I");q.D(2I);1K(k i=0;i<h.l.pk.3v.Y;i++){k P=h.l.pk.3v[i];k li=v.E("li");k F=v.E("F");F.1L=P.9p;li.D(F);k p=v.E("p");p.X=P.3W;li.D(p);if(P.d9){k 2P=v.E("2P");2P.X=P.d9;p.D(2P)};k 3N=v.E("3N");3N.X=P.pG+"pH";li.D(3N);2I.D(li);(j(li,P){li.V("2o",j(e){o.9t();H&&H.1x(B,P);e.1I()})})(li,P)};k 4p=v.E("q");q.D(4p);k 8n=v.E("a");8n.X="pF";4p.D(8n);8n.V("1J",j(e){2I.da-=o.l.C.6h(70);e.1I()});k 8y=v.E("a");8y.X="pD";4p.D(8y);8y.V("1J",j(e){2I.da+=o.l.C.6h(70);e.1I()})};1f.u.9t=j(){k q=v.1d("aD");if(q)q.2b.1O(q);k W=v.1d("aG");if(W)W.2b.1O(W)};1f.u.9n=j(){h.aA();k q=v.E("q");q.id="9h";q.I="9h";v.1o("1t")[0].D(q);k o=h;1K(k i=0;i<h.l.pk.3v.Y;i++){k P=h.l.pk.3v[i];k 2d=v.E("q");2d.I="ds";2d.1C=P.J;q.D(2d);k F=v.E("F");F.id="dp"+P.J;F.1L=P.9p;2d.D(F);k Z=v.E("q");Z.X=P.3W;2d.D(Z);(j(2d,P){2d.V("1J",j(e){o.l.pk.dr(P.J);e.1I()})})(2d,P)}};1f.u.dq=j(){h.av=B;k aC=v.1d("9h").5U("ds");k n=aC.Y;k 3K=[];1K(k i=0;i<n;i++){k F=aC[i].1o("F")[0];3K.31(F)};k 3R=-1;h.aw=j(){1K(k i=0;i<n;i++){3K[i].1e.dv="#pE"}};h.aB=j(F){F.1e.dv="#oy"};k o=h;k ax=j(){if(o.av)K;3R++;if(3R>=n)3R=0;o.aw();o.aB(3K[3R]);1E(ax,6c)};ax()};1f.u.du=j(J){h.aw();h.av=J;k F=v.1d("dp"+J);if(F){h.aB(F);F.I+=" c6 cb"}};1f.u.aA=j(){k q=v.1d("9h");if(q)q.2b.1O(q)};1f.u.6b=j(){h.8f();if(!h.l.pk.2Q||h.l.pk.2Q.Y==0)K;h.2Q=h.l.pk.2Q.fO(0);k 1G=v.E("q");1G.id="bD";1G.I="bD";v.1o("1t")[0].D(1G);k 4Q=v.E("q");4Q.id="6q";4Q.I="6q";1G.D(4Q);k q=v.E("q");q.id="7p";q.I="7p";1G.D(q);h.4J=-1;h.aX=3;h.4s=B;k i=0;aS(i<h.aX){h.aV(i);i++};h.c3()};1f.u.aV=j(i){k q=v.1d("7p");if(q){h.4J++;if(h.4J>=h.2Q.Y)h.4J=0;k Q=h.2Q[h.4J];k F=v.E("F");F.1L=h.l.C.4A(Q.2r);F.1C=Q.1m;F.1e.5x=h.l.C.2F(20*i);q.D(F)}};1f.u.c3=j(){k q=v.1d("7p");if(q){h.aV(h.aX);k 7b=1p;k oz=B;k o=h;1E(j(){if(!q.2b)K;k 3K=q.1o("F");1K(k i=0;i<3K.Y;i++){3K[i].1e.5x=o.l.C.2F(20*(i-1))};k cP=3K[1];k 3s=3K[2];k cT=3K[3];k dk=3s.1C;if(o.4s&&dk==o.4s.1m){7b=1i}L{3s.I+=" ox"};1E(j(){if(!q.2b)K;q.1O(3K[0]);if(7b){o.3c("ov");k 4Q=v.1d("6q");4Q.I="6q c6 cb";3s.I="c6 cb";cP.I="4g";cT.I="4g";k 4g=j(){3s.7a("3o",4g);3s.7a("3l",4g);4Q.I="6q 4g";3s.I="4g";k 4h=j(){3s.7a("3o",4h);3s.7a("3l",4h);o.8f();if(o.4s){o.4h(o.4s)}};3s.V("3o",4h);3s.V("3l",4h)};3s.V("3o",4g);3s.V("3l",4g)}},6c)},3G);k 5v=1E(j(){if(!7b)o.c3()},2Z);h.l.on("d3",j(){84(5v)},1i)}};1f.u.cL=j(Q){if(!h.2Q||h.2Q.Y==0)K;k 4m=h.4J+1;if(4m>=h.2Q.Y)4m=0;h.2Q[4m]=Q;h.4s=Q};1f.u.cN=j(){k 4m=h.4J+1;if(4m>=h.2Q.Y)4m=0;h.4s=h.2Q[4m];K h.4s};1f.u.8f=j(){k q=v.1d("bD");if(q)q.2b.1O(q);h.l.2p("d3")};1f.u.51=j(){k q=v.E("q");q.id="4D";q.I="4D";v.1o("1t")[0].D(q);k bg=v.E("q");bg.id="d5";bg.I="d5";q.D(bg);k 1u=h.l.pk.1u;1K(k i=0;i<1u.Y;i++){h.7T(1u[i])};h.9I(h.l.pk.8a);h.d4()};1f.u.8d=j(){k q=v.1d("4D");if(q)q.2b.1O(q)};1f.u.d4=j(){k q=v.1d("bC");if(!q){q=v.E("q");q.id="bC";q.I="bC";v.1d("4D").D(q);k 3w=v.E("q");3w.id="ef";3w.I="d0 2R";q.D(3w);k 5S=v.E("q");5S.id="e6";5S.I="cW 2R";3w.D(5S);k 3x=v.E("q");3x.id="ea";3x.I="d0 2l";q.D(3x);k 5R=v.E("q");5R.id="dT";5R.I="cW 2l";3x.D(5R)}};1f.u.7M=j(){if(!h.l.pk.5j)K;k q=v.1d("7D");if(!q){k o=h;q=v.E("q");q.id="7D";q.I="7D";v.1o("1t")[0].D(q);1K(k i=0;i<h.l.pk.5j.Y;i++){k 61=h.l.pk.5j[i];k F=v.E("F");F.1L=61.G;q.D(F);(j(F,id){F.V("1J",j(e){o.l.pk.io.h2(id);e.1I()})})(F,61.id)}};q.1e.2G=""};1f.u.56=j(){k q=v.1d("7D");if(q)q.1e.2G="41"};1f.u.hy=j(18,61){k 2A=(18==h.l.18);k x=(2A?h.l.C.2F(29.2g()*24):h.l.C.2F(60+29.2g()*24));k y=h.l.C.g3(20+29.2g()*30);k dZ=(2A?1:-1)*h.l.C.6i(20);k e1=(2A?"ow":"oA");k F=v.E("F");F.id="oE"+1Q 3H().42();F.I="oF";F.1L=61.G;F.1e.5x=x;F.1e.bo=y;k 7R=j(){if(!F)K;F.2b.1O(F);F=B};v.1o("1t")[0].D(F);if(h.l.C.2j()=="1D"&&h.l.C.7j()){F.I+=" "+e1;F.V("3o",7R);F.V("3l",7R)}L{1E(j(){5H("#"+F.id).e3(1.25).4N("0.oD").bQ().e3(0.8).4N("0.1s").bQ().oB("3j").x(dZ).4N("1.5s").bQ().5F("oC",0).4N("0.1s").7S().7S().7S().65();1E(7R,52)},20)}};1f.u.7Q=j(){if(!h.l.pk.J)K;k F=v.1d("7W");if(!F){F=v.E("F");F.id="7W";F.I="7W";F.1L=h.l.1S+"/"+h.l.pk.J+"/ou.2k";v.1o("1t")[0].D(F)};F.1e.2G=""};1f.u.7O=j(){k F=v.1d("7W");if(F)F.1e.2G="41"};1f.u.af=j(){};1f.u.9I=j(2U){k q=v.1d("7X");if(!q){q=v.E("q");q.id="7X";q.I="7X";v.1d("4D").D(q)};q.X=2U};1f.u.8R=j(2U){k q=v.1d("7X");if(q)q.X=2U};1f.u.7T=j(Q){k 18=Q.1m;k q=v.1d("9J"+18);k 2N,2u,1B,Z;if(!q){q=v.E("q");q.id="9J"+18;q.I="ed";v.1d("4D").D(q);2N=v.E("F");2N.I="dX";2N.1L=h.l.C.4A(Q.2r);q.D(2N);2u=v.E("q");2u.I="e5";2u.X=Q.2m;q.D(2u);1B=v.E("q");1B.id="ah"+18;1B.I="ec";k 1C=v.E("q");1C.I="ol";1C.X="om";1B.D(1C);Z=v.E("q");Z.I="ai";1B.D(Z);v.1d("4D").D(1B)}L{2N=q.5U("dX")[0];2u=q.5U("e5")[0];1B=v.1d("ah"+18);Z=1B.5U("ai")[0]};q.I="ed "+(18==h.l.18?"2R":"2l");1B.I="ec "+(18==h.l.18?"2R":"2l");Z.X="0/0"};1f.u.9E=j(Q){k 18=Q.1m;k p=v.1d("9J"+18);if(p){v.1d("4D").1O(p)}};1f.u.9u=j(){1K(k i=0;i<h.l.pk.1u.Y;i++){k Q=h.l.pk.1u[i];h.l.pk.5h(Q.1m,0,0)}};1f.u.5h=j(Q){k 18=Q.1m;k q=v.1d("ah"+18);if(q){k Z=q.5U("ai")[0];Z.X=Q.1B+"/"+Q.3u};if(h.l.pk.1u.Y==2){k 2R=h.l.pk.1u[0].1m==h.l.18?h.l.pk.1u[0]:h.l.pk.1u[1];k 2l=h.l.pk.1u[0].1m==h.l.18?h.l.pk.1u[1]:h.l.pk.1u[0];h.ak(2R.1B,2R.3u,2l.1B,2l.3u)}L{h.ak(0,0,0,0)}};1f.u.ak=j(5S,3w,5R,3x){if(3w==0)3w=0.1;if(3x==0)3x=0.1;k eb=(3w*3G/(3w+3x)).8e(2)+"%";k e8=(5S*3G/3w).8e(2)+"%";k e9=(3x*3G/(3w+3x)).8e(2)+"%";k dD=(5R*3G/3x).8e(2)+"%";5H("#ef").5F("3J",eb).65();5H("#e6").5F("3J",e8).65();5H("#ea").5F("3J",e9).65();5H("#dT").5F("3J",dD).65()};1f.u.dC=j(){h.4C();k q=v.1d("7c");if(!q){q=v.E("q");q.id="7c";q.I="7c";q.X="oj";v.1o("1t")[0].D(q)};q.1e.2G=""};1f.u.dE=j(){k q=v.1d("7c");if(q)q.2b.1O(q)};1f.u.dG=j(w){h.8q();h.4C();k o=h;k q=v.E("q");q.id="9H";q.I="9H";v.1o("1t")[0].D(q);k 1u=v.E("q");1u.I="oh";q.D(1u);k 1B=v.E("q");1B.I="oi";q.D(1B);k 7n=v.E("q");7n.I="oo";1B.D(7n);k i;k 7r=0;1K(i=0;i<w.1F.Y;i++){7r+=w.1F[i].1B};k 2l=B;1K(i=0;i<w.1F.Y;i++){k Q=h.l.pk.9Q(w.1F[i].1m);k 2A=(Q.1m==h.l.18);if(!2A)2l=Q;k 1v=h.7t("os"+(2A?"2R":"2l"),Q);1v.I+=(2A?" ot":" or");1u.D(1v);if(Q.1m!=h.l.18){k 3O=v.E("q");3O.I="op";1v.D(3O);(j(1v,Q){1v.V("1J",j(e){o.l.pk.2i(Q);e.1I()})})(1v,Q)};k 6t=v.E("q");6t.id="oq"+(2A?"2R":"2l");6t.I="oG "+(2A?"2R":"2l");6t.X=w.1F[i].1B;1B.D(6t);k 6A=v.E("q");6A.id="oW"+(2A?"2R":"2l");6A.I=(2A?"2R":"2l");7n.D(6A);k 3J=(7r==0?"50%":(w.1F[i].1B*3G/7r)+"%");(j(id,3J){1E(j(){5H("#"+id).5F("3J",3J).4N("1.2s").65()},3G)})(6A.id,3J)};k 9z=(w.54==h.l.18);k 54=v.E("q");54.I="oX "+(9z?"oV":"oT");54.X=(9z?"oU":"oY");q.D(54);k 21=v.E("q");21.I="p3";1E(j(){q.D(21)},4H);k 37=v.E("a");37.I="p1";37.X="9W";37.V("1J",j(e){o.l.pk.dH();e.1I()});21.D(37);k 36=v.E("a");36.I="6C";36.X="oZ";36.V("1J",j(e){o.l.pk.dO();e.1I()});21.D(36);k 6e=v.E("a");6e.I="6C";6e.X="p0";6e.V("1J",j(e){o.dK();e.1I()});21.D(6e);k 68=v.E("a");68.I="6C";68.X="oS";68.V("1J",j(e){o.l.pk.2i(2l);e.1I()});21.D(68);k 6l=v.E("a");6l.I="6C";6l.X="oK";6l.V("1J",j(e){o.l.C.f7("oL：",j(A){o.l.2i.dR(o.l.18,2l.1m,A,j(){o.l.C.27("oJ")})})});21.D(6l);k 6p=v.E("a");6p.I="6C";6p.X="oH";6p.V("1J",j(e){1A.1q=o.l.1S+"/1n/3v.1V?r="+29.2g()});21.D(6p)};1f.u.8q=j(){k q=v.1d("9H");if(q)q.2b.1O(q)};1f.u.dK=j(){h.6r();k o=h;k W=v.E("q");W.id="9A";W.I="9A";W.V("1J",j(e){o.6r();e.1I()});v.1o("1t")[0].D(W);k q=v.E("q");q.id="9y";q.I="9y";v.1o("1t")[0].D(q);k 9q=v.E("a");9q.I="oI";9q.V("1J",j(e){o.6r();o.l.pk.9C();e.1I()});q.D(9q);k 97=v.E("a");97.I="oM";97.V("1J",j(e){o.6r();1A.1q=o.l.1S+"/3n.1V?J=pk";e.1I()});q.D(97)};1f.u.6r=j(){k q=v.1d("9y");if(q)q.2b.1O(q);k W=v.1d("9A");if(W)W.2b.1O(W)};U=j(l,S){h.l=l;h.S=S;h.4E;h.7u="oQ.oR.oP.oN";h.7x=oO;h.55=1p;h.b4=1p;h.bs=B;h.1Z={7i:10,5u:20,cy:30,2f:50};h.19={bJ:qF,bK:qG,bU:qL,hg:qM,bY:qJ,bO:qK,bX:qz,h5:qA,hd:qx,bL:qB,he:qC,9D:qN,hj:qQ,hk:qR,hh:qP,bR:qO,bP:qT,bH:qS,hi:q6,9v:q7,gV:q4,gx:q5,gy:q8,gv:qc,ar:qd,gw:q9,gC:pX,at:pV,am:q1,al:pZ,an:qH,a9:qo,9V:qp,9Y:qs,9P:qv,9T:qw,gD:qt,a7:qu,hn:qn,gA:qh,9R:qe}};U.u.b2=j(){2D{k o=h;h.4E=1Q qf("qi://"+h.7u+":"+h.7x);h.4E.ql=j(){o.cF()};h.4E.qj=j(e){o.cE(e)};h.4E.qk=j(e){o.cm(e)};h.4E.qm=j(e){o.cq(e)}}2z(e){}};U.u.qg=j(){h.4E.6n();h.55=1p;h.l.pk.1w=h.l.pk.26.95};U.u.cF=j(){1g.1l("qr 7u = "+h.7u+", 7x = "+h.7x);h.55=1i;qq(h.bs);h.l.pk.1w=h.l.pk.26.5p;h.cs();if(h.b4){}};U.u.7I=j(){h.l.pk.7I()};U.u.cE=j(e){h.55=1p;1g.1l("q0.");h.l.pk.1w=h.l.pk.26.95};U.u.cq=j(e){1g.1l("gf: "+e.A)};U.u.q2=j(){if(h.55){K 1i}L{K 1p}};U.u.pY=j(){k o=h;h.bs=pU(j(){if(!o.55){o.b4=1i;o.b2()}},4H)};U.u.cm=j(e){2D{1g.pW("%c"+e.A,"34: #q3")}2z(e){1g.1l("←"+e.A)};k w=B;2D{w=2C.4q(e.A)}2z(e){1g.1l(e)};if(w!=B){h.7g(w)}};U.u.1R=j(w){if(h.55){k 3B=2C.2O(w);2D{h.4E.1R(3B);2D{1g.qb("%c"+3B,"34: #qE")}2z(e){1g.1l("→"+3B)};K 1i}2z(e){53(e)}}L{53("qD")};K 1p};U.u.cs=j(1r){K h.1R({ch:h.1Z.7i,1U:h.19.bJ,1r:1b.1r})};U.u.eh=j(){k w={ch:h.1Z.2f,1U:h.19.bK,1m:h.l.18};if(h.l.pk.J)w.J=h.l.pk.J;K h.1R(w)};U.u.gp=j(){K h.1R({ch:h.1Z.2f,1U:h.19.bU})};U.u.bd=j(){K h.1R({ch:h.1Z.2f,1U:h.19.bY})};U.u.h6=j(18,J){K h.1R({ch:h.1Z.2f,1U:h.19.bX,1m:18,J:J})};U.u.h7=j(18){K h.1R({ch:h.1Z.2f,1U:h.19.bO,1m:18})};U.u.h4=j(){k w={ch:h.1Z.2f,1U:h.19.h5,1m:h.l.18};if(h.l.pk.J)w.J=h.l.pk.J;K h.1R(w)};U.u.ha=j(18){K h.1R({ch:h.1Z.2f,1U:h.19.bL,1m:18})};U.u.8G=j(){k w={ch:h.1Z.2f,1U:h.19.bR,1m:h.l.18,2t:h.l.pk.1M};if(h.l.pk.J)w.J=h.l.pk.J;K h.1R(w)};U.u.hb=j(){K h.1R({ch:h.1Z.2f,1U:h.19.bP,1m:h.l.18,J:h.l.pk.J,2t:h.l.pk.2t})};U.u.h8=j(38){K h.1R({ch:h.1Z.2f,1U:h.19.bH,1m:h.l.18,gO:38})};U.u.h9=j(){K h.1R({ch:h.1Z.2f,1U:h.19.9D})};U.u.gY=j(){K h.1R({ch:h.1Z.2f,1U:h.19.9v})};U.u.aH=j(A){K h.1R({ch:h.1Z.2f,1U:h.19.ar,1B:A.1B})};U.u.gZ=j(){K h.1R({ch:h.1Z.2f,1U:h.19.at})};U.u.8Z=j(J){k w={ch:h.1Z.2f,1U:h.19.am};if(J)w.J=J;K h.1R(w)};U.u.gW=j(){K h.1R({ch:h.1Z.2f,1U:h.19.al})};U.u.ay=j(2L,J){k w={ch:h.1Z.2f,1U:h.19.an,2L:2L};if(J)w.J=J;K h.1R(w)};U.u.gX=j(){K h.1R({ch:h.1Z.2f,1U:h.19.a9})};U.u.h2=j(id){K h.1R({ch:h.1Z.2f,1U:h.19.9V,qy:id})};U.u.h3=j(){k w={ch:h.1Z.2f,1U:h.19.9Y,1m:h.l.18};if(h.l.pk.J)w.J=h.l.pk.J;K h.1R(w)};U.u.c7=j(){K h.1R({ch:h.1Z.2f,1U:h.19.9P,2t:h.l.pk.1M})};U.u.h1=j(J){K h.1R({ch:h.1Z.2f,1U:h.19.a7,J:J})};U.u.hc=j(){K h.1R({ch:h.1Z.2f,1U:h.19.hn})};U.u.ho=j(){K h.1R({ch:h.1Z.2f,1U:h.19.9T})};U.u.hl=j(){K h.1R({ch:h.1Z.2f,1U:h.19.9R})};U.u.7g=j(w){if(w.4b){h.hs(w)}L if(!w.ch||!w.1U){1g.1l("qI")}L{35(w.ch){T h.1Z.7i:h.hp(w);R;T h.1Z.2f:h.hf(w);R;3V:1g.1l("mf：ch = "+w.ch);R}}};U.u.hs=j(w){1g.1l(w)};U.u.hp=j(w){35(w.1U){T h.19.bJ:h.hq(w);R;3V:1g.1l("gB：1U = "+w.1U);R}};U.u.hq=j(w){if(w.44){h.7I()}L{53("1r mg")}};U.u.hf=j(w){35(w.1U){T h.19.bK:h.hw(w);R;T h.19.bU:h.gq(w);R;T h.19.hg:h.gn(w);R;T h.19.bY:h.gt(w);R;T h.19.bX:h.gs(w);R;T h.19.hd:h.gP(w);R;T h.19.bL:h.8l(w);R;T h.19.bO:h.gN(w);R;T h.19.he:h.8r(w);R;T h.19.bR:h.gT(w);R;T h.19.bP:h.gS(w);R;T h.19.bH:h.gI(w);R;T h.19.9D:h.8J(w);R;T h.19.hj:h.8K(w);R;T h.19.hk:h.8N(w);R;T h.19.hh:h.8E(w);R;T h.19.hi:h.8V(w);R;T h.19.9v:h.8X(w);R;T h.19.gV:h.gG(w);R;T h.19.gx:h.gL(w);R;T h.19.gy:h.gJ(w);R;T h.19.gv:h.gK(w);R;T h.19.ar:h.hx(w);R;T h.19.gw:h.hv(w);R;T h.19.gC:h.8m(w);R;T h.19.at:h.8C(w);R;T h.19.am:h.8B(w);R;T h.19.al:h.8u(w);R;T h.19.an:h.8w(w);R;T h.19.a9:h.hA(w);R;T h.19.9V:h.hB(w);R;T h.19.9Y:h.92(w);R;T h.19.9P:h.hC(w);R;T h.19.9T:h.9d(w);R;T h.19.gD:h.9f(w);R;T h.19.a7:h.hu(w);R;T h.19.gA:h.eY(w);R;T h.19.9R:h.7o(w);R;3V:1g.1l("gB：1U = "+w.1U);R}};U.u.hw=j(w){1g.1l("me：J = "+(w.J||B)+", mc = "+w.2K)};U.u.gq=j(w){1g.1l("md")};U.u.gn=j(w){h.l.pk.go(w.Q)};U.u.gt=j(w){if(w.Q){h.l.pk.gu(w.Q,w.P)}L{h.l.pk.gr()}};U.u.gs=j(w){h.l.pk.gE(w.1m,w.J)};U.u.gP=j(w){h.l.pk.gQ(w.Q)};U.u.gN=j(w){1g.1l("mh 1m = "+w.1m+" ml")};U.u.8l=j(w){h.l.pk.8l(w.1m,w.J,w.gO)};U.u.8r=j(w){h.l.pk.8r(w.Q,w.1w)};U.u.gT=j(w){if(w.1F==1){h.l.pk.gU(w.1w)}L{h.l.pk.gR(w.1F)}};U.u.gS=j(w){h.l.pk.gH(w.1w)};U.u.gI=j(w){h.l.pk.gF(w.2t)};U.u.8J=j(w){h.l.pk.8J(w.Q)};U.u.8K=j(w){h.l.pk.8K(w)};U.u.8N=j(w){h.l.pk.8N(w.1w)};U.u.8E=j(w){h.l.pk.8E(w.1u)};U.u.8V=j(w){h.l.pk.8V(w.1w)};U.u.8X=j(w){h.l.pk.8X(w.1u)};U.u.gG=j(w){h.l.pk.af()};U.u.gL=j(w){h.l.pk.gM(w.23)};U.u.gJ=j(w){h.S.8R(w.2U)};U.u.gK=j(w){h.S.8R(w.mn)};U.u.hx=j(w){h.l.pk.5h(w.1m,w.1B,w.3u)};U.u.hv=j(w){h.l.pk.hz(w.1w)};U.u.8m=j(w){h.l.pk.8m(w)};U.u.8C=j(w){h.l.pk.8C(w)};U.u.8B=j(w){h.l.pk.8B(w.Q,w.P||B)};U.u.8u=j(w){h.l.pk.8u(w.Q)};U.u.8w=j(w){h.l.pk.8w(w.Q,w.2L,w.P||B)};U.u.hA=j(w){h.l.pk.5j=w.23};U.u.hB=j(w){h.S.hy(w.1m,w.61)};U.u.92=j(w){h.l.pk.92(w.2t,w.3z)};U.u.hC=j(w){1g.1l("mk："+2C.2O(w))};U.u.9d=j(w){h.l.pk.9d(w.23)};U.u.9f=j(w){h.l.pk.9f(w.23)};U.u.hu=j(w){h.l.pk.gm(w.1m,w.P)};U.u.eY=j(w){h.l.pk.eX(w.J)};U.u.7o=j(w){h.l.pk.7o(w.23)};1y=j(l){h.l=l};1y.u.33=j(2l,N){if(2l==mi||2l==B){K N}L{if(N){1K(k 2u in N){2l[2u]=N[2u]}};K 2l}};1y.u.8Q=j(){K/hr|hm|h0|mj/ig.3f(4y.4v)};1y.u.7j=j(){K/7B|m4/i.3f(4y.4v)};1y.u.2j=j(){k 3r=4y.4v;if(/m5/ig.3f(3r)){K"1D"}L if(/l/ig.3f(3r)){K"9g"}L if(/2a/ig.3f(3r)){K"2a"}L if(/fg/ig.3f(3r)){K"4e"}L if(/a6/ig.3f(3r)){K"5m"}L if(/1c\\.m3\\.a5/ig.3f(3r)){K"a5"}L{K"m1"}};1y.u.6z=j(){k 1F=B;k 2e=B;k 3r=4y.4v;35(h.2j()){T"1D":1F=3r.2K(/m2\\/([^\\s]+)/i);if(1F)2e=1F[1];R;T"9g":1F=3r.2K(/1T\\s([^\\s]+)/i);if(1F)2e=1F[1];R;T"2a":1F=3r.2K(/m6\\/([^\\s]+)/i);if(1F)2e=1F[1];R;T"4e":1F=3r.2K(/ma\\/([^\\s]+)/i);if(1F)2e=1F[1];R;T"5m":1F=3r.2K(/a6\\/([^\\s]+)/i);if(1F)2e=1F[1];R};K 2e};1y.u.98=j(f1,f0){k eV=f1.2K(/(\\d+)(?!\\d)/ig);k 9U=f0.2K(/(\\d+)(?!\\d)/ig);k 1F=1i;1K(k i=0;i<99;i++){if(9U.Y<i+1){1F=1i;R};k n1=5L(eV[i]);k n2=5L(9U[i]);if(n1!=n2){1F=(n1>n2);R}};K 1F};1y.u.5w=j(){if(1b.5w)K 1i;if(1q.g7=="mb:")K 1i;if(1q.94=="m9"||1q.94=="m7.0.0.1"||1q.94=="P")K 1i;K 1p};1y.u.m8=j(){if(1q.5b&&1q.86){K 1q.5b+1q.86}L{K 1q.3p.2K(/[^?#]+/i)[0]}};1y.u.fk=j(){K 1q.3p.2K(/[^#;]+/i)[0]};1y.u.6U=j(){if(1q.86){K 1q.86}L{K 1q.3p.2K(/(?:1a|aY):\\/\\/[^\\/]+([^?#;]+)/i)[1]}};1y.u.mo=j(){K 1q.eQ};1y.u.2Y=j(2u){k 4u=1Q au("(^|&)"+2u+"=([^&]*)(&|$)","i");k r=1A.1q.eQ.7U(1).2K(4u);if(r!=B)K r[2];K B};1y.u.2B=j(G,2u,3a){G=G.2W(/(#.*)/ig,"");k 4u=1Q au("([\\?&])"+2u+"=([^&]*)(?=&|$)","i");if(4u.3f(G)){K G.2W(4u,"$1"+2u+"="+3a)}L{K G+(G.3X("?")==-1?"?":"&")+2u+"="+3a}};1y.u.mE=j(G,2u){G=G.2W(/(#.*)/ig,"");k 4u=1Q au("([\\?&])"+2u+"=([^&]*)(?=&|$)","i");if(4u.3f(G)){G=G.2W(4u,"");if(G.3X("?")==-1)G=G.2W("&","?")};K G};1y.u.eO=j(G,H){h.1W("1a://1D.9g.1c/fn/mF?G="+2c(G),j(A){if(A&&A.4b==0){H&&H.1x(B,A.mD)}})};1y.u.mB=j(2r){if(!2r)K"1a://P.9g.1c/3V.2k";if(2r.3X("/0")!=-1){2r=2r.7U(0,2r.Y-2)+"/64"};K 2r};1y.u.4A=j(2r){if(!2r)K"1a://P.9g.1c/3V.2k";if(2r.3X("/0")!=-1){2r=2r.7U(0,2r.Y-2)+"/mC"};K 2r};1y.u.cj=j(){k dt=1Q 3H();dt.mG(0);K dt.42()/2Z};1y.u.mK=j(){k dt=1Q 3H();dt.mL(0,0,0,0);K dt.42()/2Z};1y.u.f3=j(){k 3k=1z[0];k 9O=1z[1]||"9K-7P-dd 9x:mm:9B";if(2V 3k=="mJ"){3k=1Q 3H(3k*2Z)};k 5O=j(9L){9L+="";K 9L.2W(/^(\\d)$/,"0$1")};k bF={9K:3k.eR(),mH:3k.eR().g6().eJ(2),M:3k.eU()+1,7P:5O(3k.eU()+1),d:3k.eT(),dd:5O(3k.eT()),9x:5O(3k.mI()),mm:5O(3k.ms()),9B:5O(3k.mt())};K 9O.2W(/([a-z])(\\1)*/ig,j(m){K bF[m]})};1y.u.mr=j(){k t=1z[0];k 9O=1z[1]||"9K-7P-dd 9x:mm:9B";if(t 8i 3H){t=t.42()/2Z};k 5N="";k 5P=h.cj()-t;if(5P<60){5N="mp"}L if(5P<60*60){5N=29.eS(5P/60)+"mq"}L if(5P<60*60*24){5N=29.eS(5P/60/60)+"mu"}L{5N=h.f3(t,"7P-dd")};K 5N};1y.u.fc=j(bW,fe){K 5L((29.2g()*(fe-bW+1))+bW)};1y.u.4K=j(fd){k bV="mz";k bS="";1K(k i=0;i<fd;i++){k n=h.fc(1,bV.Y)-1;bS+=bV.7U(n,1)};K bS};1y.u.8p=j(){if(!2q.5y){2q.5y=h.4K(40)};K 2q.5y};1y.u.mA=j(O,H){k o=h;h.l.ff(j(A){if(o.l.3b=="fi"){1A.1q=o.l.1S+"/fi/2x.1V?6k="+o.l.6k;K};if(o.l.3b=="2i"){k 3U=o.l.A;o.l.7L(3U,j(1v){o.4r({O:o.l.1j.1C,59:{2P:"mx"+1v.2m,2o:j(){1A.1q=o.l.1S+"/1n/2i.1V?3U="+3U+"&3d=mv&J="+o.l.J+"&1B="+o.l.1B+"&mw="+2c(o.l.72)+"&1C="+o.l.1j.1C}},58:{2P:"m0"}})});K};if(o.l.3b=="lv"){k 6a=o.l.A;if(6a){o.l.f6(6a,o.l.1j.1C,j(A){o.3P(A)})}}L if(o.2j()!="2a"){}});if(h.l.2H){if(h.l.1j.1C.3X(h.l.2H.4d)==-1)h.l.1j.1C+="["+h.l.2H.4d+"]";if(h.l.1j.O.3X(h.l.2H.4d)==-1)h.l.1j.O+="["+h.l.2H.4d+"]"};1E(j(){35(o.2j()){T"1D":o.l.3h();R;T"9g":H&&H.2T(B);R;T"2a":o.l.3h();R;3V:if(o.l.1n){if(lw(O)){H&&H.2T(B)}};R}},4Z);if(h.l.2i){1E(j(){o.l.2i.89()},2Z)}};1y.u.69=j(){if(v.1d("bw"))K;k 5Q=v.E("F");5Q.id="bw";5Q.1L="1a://P.9g.1c/F/lu.2k";5Q.I="bw";v.1o("1t")[0].D(5Q);k W=v.E("q");W.I="ls";v.1o("1t")[0].D(W);W.V("1J",j(e){v.1o("1t")[0].1O(W);v.1o("1t")[0].1O(5Q);e.1I()})};1y.u.4r=j(N){h.8h=1Q 6m(h.l,N);h.8h.6P()};1y.u.6y=j(){h.8h&&h.8h.6n()};1y.u.53=j(O){h.4r({O:O,59:{2P:"f4"}})};1y.u.27=j(O){h.4r({O:O});k o=h;1E(j(){o.6y()},52)};1y.u.f7=j(Z,H){k O=Z+"<5d id=\'f9\' fa=\'lt\' />";h.4r({O:O,59:{2o:j(){k 3a=v.1d("f9").3a;H&&H.1x(B,3a)}},58:{}})};6m=j(l,N){h.l=l;k 4o={1C:B,O:"",5A:[],59:B,58:B};h.N=h.l.C.33(4o,N);h.2w()};6m.u.2w=j(){if(h.N.59){h.N.5A.31(h.l.C.33({2P:"lx",34:"#c2",4W:"#lB",2o:B},h.N.59))};if(h.N.58){h.N.5A.31(h.l.C.33({2P:"cc",34:"#c2",4W:"#lC",2o:B},h.N.58))}};6m.u.6P=j(){h.6n();k q=v.E("q");q.id="cf";q.I="cf";if(h.N.1C!=B){k 82=v.E("q");82.I="lA";82.X=h.N.1C;q.D(82)};k O=v.E("q");O.I="ly";O.X=h.N.O.2W(/\\n/g,"<br/>");q.D(O);if(h.N.5A.Y>0){k 4p=v.E("q");4p.I="lz";q.D(4p);k o=h;1K(k i=0;i<h.N.5A.Y;i++){(j(1H){k a=v.E("a");a.X=1H.2P;if(1H.34)a.1e.34=1H.34;if(1H.4W)a.1e.ew=1H.4W;a.V("1J",j(e){1H.2o&&1H.2o.2T(o.l);o.6n();e.1I()});4p.D(a)})(h.N.5A[i])}};v.1o("1t")[0].D(q);k W=v.E("q");W.id="5I";W.I="5I";v.1o("1t")[0].D(W)};6m.u.6n=j(e){k q=v.1d("cf");if(q)v.1o("1t")[0].1O(q);k W=v.1d("5I");if(W)v.1o("1t")[0].1O(W);e&&e.1I()};1y.u.4V=j(N){h.5e();k 4o={O:"",2U:10,es:1p,er:"cc",6f:B,85:B,83:B,c0:B,eq:1p,7h:[]};N=h.33(4o,N);k o=h;k Z=v.E("q");k 21=v.E("q");if(N.es){k 1H=v.E("a");1H.X=N.er;1H.V("1J",j(e){o.5e();N.6f&&N.6f.1x(B);e.1I()});21.D(1H)};if(N.85){h.l.V(N.85,j(){o.5e()},1i)};k aO=j(){if(N.83){Z.X=N.83};21.X="";if(N.eq){o.5e()}L{1K(k i=0;i<N.7h.Y;i++){k et={2P:"",34:"#c2",4W:"#lk",c4:1p,3y:1p,2o:B};k 2d=o.33(et,N.7h[i]);(j(2d){k 1H=v.E("a");1H.X=2d.2P;1H.1e.34=2d.34;1H.1e.ew=2d.4W;1H.V("1J",j(e){if(2d.c4){o.4V(N)}L if(2d.3y){o.5e();N.6f&&N.6f.1x(B)};2d.2o&&2d.2o.1x(B);e.1I()});21.D(1H)})(2d)}};N.c0&&N.c0.1x(B)};k W=v.E("q");W.id="aK";W.I="aK";v.1o("1t")[0].D(W);k q=v.E("q");q.id="aQ";q.I="aQ";v.1o("1t")[0].D(q);k 3A=v.E("q");3A.I="eu ev";q.D(3A);k 2n=v.E("q");2n.I="ek 2n";3A.D(2n);k 3D=v.E("q");3D.I="eu ep";q.D(3D);k 28=v.E("q");28.I="ek 28";3D.D(28);Z.id="ej";Z.I="ej";Z.X=N.O;q.D(Z);2n.1e.5W="5V "+N.2U+"s 3j";2n.1e.62="3F";2n.1e.5Z="5V "+N.2U+"s 3j";2n.1e.5Y="3F";28.1e.5Z="5k "+N.2U+"s 3j";28.1e.5Y="3F";28.1e.5W="5k "+N.2U+"s 3j";28.1e.62="3F";28.V("3o",aO);28.V("3l",aO);21.id="aN";21.I="aN";21.1e.bo=(h.6h(20)+h.6i(60+3))+"px";v.1o("1t")[0].D(21)};1y.u.5e=j(){k q=v.1d("aQ");if(q)q.2b.1O(q);k 21=v.1d("aN");if(21)21.2b.1O(21);k W=v.1d("aK");if(W)W.2b.1O(W)};1y.u.1W=j(G,1X){G=h.l.C.2B(G,"aR",29.2g());1Q aU(h.l,"ll",G,B,"w",1X)};1y.u.em=j(G,A,4U,1X){G=h.l.C.2B(G,"aR",29.2g());1Q ey(G,A,4U,1X).eN()};aU=j(l,en,G,A,1N,1X){h.l=l;h.3t=B;if(1A.eo){h.3t=1Q eo()}L{h.3t=1Q lj("lg.lh")};h.1N=1N;h.1X=1X;h.3t.6P(en,G,1i);k o=h;h.3t.lm=j(){o.H.2T(o)};h.3t.1R(A)};aU.u.H=j(){if(h.3t.lq==4&&h.3t.1w==6c){k A=B;35(h.1N){T"Z":A=h.3t.az;R;T"w":2D{A=2C.4q(h.3t.az)}2z(e){A=h.3t.az};R};h.1X&&h.1X.1x(h.3t,A)}};ey=j(G,A,4U,1X,aI){k 2y=1p;k 5g=v.1o("2N")[0]||v.lr;k 6s=v.E("fu");k 4O="4O"+(29.2g()+"").eJ(2);k eH=j(){if(5g!=B){5g.1O(6s);2D{lp 1A[4O]}2z(ex){};5g=B}};k 2w=j(){6s.ln="lo-8";5g.lD(6s,5g.lS);1A[4O]=j(eI){2y=1i;1X(eI)};4U=4U||"H";if(G.3X("?")>0){G=G+"&"+4U+"="+4O}L{G=G+"?"+4U+"="+4O};if(2V A=="6g"&&A!=B){1K(k p in A){G=G+"&"+p+"="+lT(A[p])}}};k 5v=j(){if(2V 1A[4O]=="j"){eH()};if(2V aI=="j"&&2y==1p){aI()}};h.eN=j(){2w();6s.1L=G;1A.1E(5v,bk)}};1y.u.4S=j(){k q=v.E("q");q.id="eM";q.I="eM";if(h.l.aJ){q.X="<F 8x=\'lR\' 1L=\'1a://P.9g.1c/F/eG.2k\' /><F 8x=\'eL\' 1L=\'1a://P.9g.1c/"+h.l.J+"/eL.2k\' />"}L{q.X="<F 8x=\'lP\' 1L=\'1a://P.9g.1c/F/eG.2k\' />"};if(h.l.2H&&h.l.2H.8t){q.X+="<F 8x=\'lQ\' 1L=\'"+h.l.2H.8t+"\' />"};v.1o("1t")[0].D(q);k 5z=((h.2j()=="9g"||h.2j()=="2a")?2Z:4H);k o=h;1E(j(){v.1o("1t")[0].1O(q);k bm=j(){o.l.5c=1i;o.l.2p("5c")};k a=v.1d("4P");if(a){a.I="4P bj";k bh=j(){a.I="4P 8A";bm();k F=v.1d("bl");if(F){F.I="bl eA";k be=j(){1E(j(){F.I="bl bi"},2Z)};F.V("3o",be);F.V("3l",be)}};a.V("3o",bh);a.V("3l",bh)}L{bm()}},5z)};1y.u.eC=j(){k F=v.E("F");F.1L=h.l.2H.4S;F.1e.lU="lY";F.1e.lZ=lX;F.1e.3J="3G%";F.1e.5x=0;F.1e.bo=0;v.1o("1t")[0].D(F);v.1C=h.l.2H.4d;k o=h;1E(j(){v.1o("1t")[0].1O(F);v.1C=o.l.2H.4d;o.l.5c=1i;o.l.2p("5c")},4H)};1y.u.eE=j(){k G;if(h.l.1k=="4e"&&h.2j()!="4e"){G="1a://1D.9g.1c/pm/fj.4z?1k="+h.l.1k;h.1W(G,j(A){if(A.ad){k F=v.E("F");F.id="eD";F.1L=A.ad.3e;F.I="eD";F.V("1J",j(e){1A.1q="1a://1D.9g.1c/pm/2o.4z?id="+A.ad.id;e.1I()});v.1o("1t")[0].D(F)}})};if(h.l.1k=="5m"&&h.2j()!="5m"){k g0=(h.2Y("lV")=="1");G="1a://1D.9g.1c/pm/fj.4z?1k="+h.l.1k;k o=h;h.1W(G,j(A){if(A.ad){k F=v.E("F");F.id="g1";F.I="g1";F.1L=A.ad.3e;F.V("1J",j(e){if(g0){if(o.2j()=="1D"){k 27=v.E("F");27.id="fZ";27.I="fZ";27.1L="1a://P.9g.1c/F/"+(o.8Q()?"lW.2k":"lH.2k");v.1o("1t")[0].D(27)}L{1A.1q="lI://"}}L{1A.1q="1a://1D.9g.1c/pm/2o.4z?id="+A.ad.id};e.1I()});v.1o("1t")[0].D(F)}})}};1y.u.6i=j(n){K(9k(n)*1A.b1/3G)};1y.u.6h=j(n){K(9k(n)*1A.b0/3G)};1y.u.2F=j(n){K(9k(n)*1A.b1/3G)+\'px\'};1y.u.g3=j(n){K(9k(n)*1A.b0/3G)+\'px\'};1y.u.3P=j(3S){if(h.l.9i()){53("[lG]\\n"+h.b8(3S))}};1y.u.b8=j(3S,4a){4a=4a||"";k O="";if(2V 3S=="6g"&&3S!=B){1K(k 2d in 3S){if(2V 3S[2d]=="6g"&&3S[2d]!=B)O+=4a+2d+" = \\n"+4a+"(\\n"+h.b8(3S[2d],4a+"    ")+4a+")\\n";L O+=4a+2d+" = "+3S[2d]+"\\n"}}L{O+=4a+3S};K O};1y.u.b7=j(47,fR){k iv=74.bc.bb.4q(47);k fU=74.bc.bb.4q(fR);k fV=74.lE.b7(fU,74.bc.bb.4q(47),{iv:iv,fX:74.fX.lF});K fV.g6()};1y.u.bp=j(){k 3d=B;k 3a=B;k 5n=B;k H=B;35(1z.Y){T 1:3d=1z[0];R;T 2:3d=1z[0];if(!gh(1z[1]))3a=1z[1];if(2V 1z[1]=="j")H=1z[1];R;T 3:3d=1z[0];3a=1z[1];if(2V 1z[2]=="8U")5n=1z[2];if(2V 1z[2]=="j")H=1z[2];R;T 4:3d=1z[0];3a=1z[1];5n=1z[2];H=1z[3];R};if(3d==B){h.3P("bp gf: lJ 3d");K};k G="1a://1D.9g.1c/6P/bp?3d="+2c(3d);if(3a!=B)G=h.2B(G,"3a",3a);if(5n!=B)G=h.2B(G,"5n",2c(5n));if(h.l.J)G=h.2B(G,"J",h.l.J);if(1b.22)G=h.2B(G,"44",1b.22);h.1W(G,j(A){if(A.1X){H&&H.2T(B)}})};1y.u.bf=j(){if(h.5w())K;k gl=2q.gk||0;k bu=1Q 3H().42();if(bu-gl<4H)K;L 2q.gk=bu;k 5E=h.l.C.4K(10);k G="1a://1D.9g.1c/1n/lN/"+5E+"?G="+2c(1q.3p)+"&g9="+2c(h.6U());if(h.l.J)G+="&J="+h.l.J;if(1b.1r)G+="&1r="+1b.1r;if(1b.3g)G+="&6Q="+1b.3g;G+="&5y="+h.8p();k o=h;h.1W(G,j(A){if(A.id){}});1E(j(){o.bf()},bk)};1y.u.gj=j(){if(h.5w())K;k 5E=h.l.C.4K(10);k G="1a://1D.9g.1c/1l/lO/"+5E+"?G="+2c(1q.3p)+"&g9="+2c(h.6U())+"&4L="+1q.94;if(1b.22)G=h.2B(G,"id",1b.22);if(1b.1r)G=h.2B(G,"1r",1b.1r);if(h.l.2h){k 6J=h.l.2h.6J||"";k 75=h.l.2h.75||"";k 3T=h.l.2h.3T||"";if(6J||75||3T){G=h.2B(G,"6J",2c(6J));G=h.2B(G,"75",2c(75));G=h.2B(G,"3T",2c(3T))}};h.1W(G,j(A){})};1y.u.lM=j(){2D{k fv=(("aY:"==v.1q.g7)?" aY://":" 1a://");v.lK(lL("%nM id=\'nN\'%3E%3C/3N%3E%nL 1L=\'"+fv+"nJ.nK.1c/nO.eB%nS%nT\' 1N=\'Z/nR\'%3E%3C/fu%3E"))}2z(e){1g.7f(e)}};2J=j(l){h.l=l;h.2e=B;h.3Y=1p;h.3m=B;h.5i=B;h.2w()};2J.u.2w=j(){h.2e=h.l.C.6z();h.fm()};2J.u.79=j(2e){K h.l.C.98(h.2e,2e)};2J.u.nP=j(){k o=h;v.V("nQ",j fI(){7d.on("3M:3i:nB",j(ft){7d.fw("nC",{"fA":o.l.1j.3e,"1Y":o.l.1j.1Y,"7s":o.l.1j.O,"1C":o.l.1j.1C},j(3Q){if(3Q.fs=="nA:3y"){o.71()}L{o.76()}})});7d.on("3M:3i:ny",j(ft){7d.fw("nz",{"fA":o.l.1j.3e,"nD":"fx","nH":"fx","1Y":o.l.1j.1Y,"7s":o.l.1j.O,"1C":o.l.1j.1C},j(3Q){if(3Q.fs=="nI:3y"){o.71()}L{o.76()}})})},1p)};2J.u.fm=j(){k 6L=h.l.C.cj();k 8g=h.l.C.4K(16);k 5E=h.l.C.4K(10);k G=h.l.C.fk();k fq="1a://1D.9g.1c/fn/nG/"+5E+"?8g="+8g+"&6L="+6L+"&G="+2c(G);k o=h;h.l.C.1W(fq,j(A){if(A.6O){k 6O=A.6O;1D.bF({3P:1p,nE:"nF",6L:6L,nU:8g,6O:6O,o9:["oa","fL","fK","o8","o6","o7","ob","of","og","oe","oc","od","nY","nZ","nX","nV","nW","o0","8s","o4","96","o5","o3","o1","o2","nx","n0","n3","mZ","mX","mY","n4","n8","n9"]});1D.3Y(j(){o.3Y=1i;o.3h()});1D.7f(j(3Q){})}})};2J.u.3h=j(){k o=h;1D.fL({1C:h.l.1j.1C,1Y:h.l.1j.1Y,fN:h.l.1j.3e,1X:j(){k N={J:o.l.J,1k:o.l.1k,id:1b.22||B,3b:1,1N:1,4L:(((o.l.1j.1Y||"").3X(o.l.4i)!=-1)?o.l.4i:B)};o.l.a2(N,j(){o.76()})},3y:j(){o.71()}});1D.fK({1C:h.l.1j.1C,7s:h.l.1j.O,1Y:h.l.1j.1Y,fN:h.l.1j.3e,1N:"",n7:"",1X:j(){k N={J:o.l.J,1k:o.l.1k,id:1b.22||B,3b:2,1N:1,4L:(((o.l.1j.1Y||"").3X(o.l.4i)!=-1)?o.l.4i:B)};o.l.a2(N,j(){o.76()})},3y:j(){o.71()}})};2J.u.3i=j(){h.3h();if(h.l.J){h.l.a0()}};2J.u.76=j(){6D.31(["n5","n6","mP"]);h.3m&&h.3m.2T(h.l);};2J.u.71=j(){h.5i&&h.5i.2T(h.l);};2J.u.8s=j(H){1D.8s({as:1,1X:j(3Q){k 45=3Q.45;H&&H.1x(B,45[0])}})};2J.u.mQ=j(H){1D.8s({as:9,1X:j(3Q){k 45=3Q.45;H&&H.1x(B,45)}})};2J.u.96=j(6Z,H){1D.96({6Z:6Z,mO:1,1X:j(3Q){k 6R=3Q.6R;H&&H.1x(B,6R)}})};2J.u.mM=j(45,H){if(!(45 8i 9F)||45.Y==0)K;k a=45.fO();k b=[];k o=h;k ao=j(){if(a.Y>0){k 6Z=a.mN();o.96(6Z,j(6R){b.31(6R);ao()})}L{H&&H.1x(B,b)}};ao()};2J.u.mR=j(7Y,H){k G="1a://1n.9g.1c/fD.4z?7l="+7Y;h.l.C.1W(G,j(A){H&&H.1x(B,A[0])})};2J.u.mV=j(3Z,H){if(!(3Z 8i 9F)||3Z.Y==0)K;k G="1a://1n.9g.1c/fD.4z";1K(k i=0;i<3Z.Y;i++){G+=((i==0?"?":"&")+"7l="+3Z[i])};h.l.C.1W(G,j(A){H&&H.1x(B,A)})};2J.u.mW=j(7Y,H){k G="1a://1n.9g.1c/fF.4z?7l="+7Y;h.l.C.1W(G,j(A){H&&H.1x(B,A[0])})};2J.u.mU=j(3Z,H){if(!(3Z 8i 9F)||3Z.Y==0)K;k G="1a://1n.9g.1c/fF.4z";1K(k i=0;i<3Z.Y;i++){G+=((i==0?"?":"&")+"7l="+3Z[i])};h.l.C.1W(G,j(A){H&&H.1x(B,A)})};5G=j(l){h.l=l;h.2e=B;h.1N=B;h.3m=B;h.5i=B;h.8P=B;h.2w()};5G.u.2w=j(){h.2e=h.l.C.6z();if(/fG\\mS/ig.3f(4y.4v))h.1N="49";if(/fG\\mT/ig.3f(4y.4v))h.1N="6j";k o=h;v.V("na",j fI(){if(o.8P)v.1C=o.8P;o.3m&&o.3m.2T(o.l)})};5G.u.79=j(2e){K h.l.C.98(h.2e,2e)};5G.u.3h=j(){if(h.1N=="49"){1A.1q="fC::np::"+h.l.1j.1Y+"::"+h.l.1j.1C+"::"+h.l.1j.O+"::"+h.l.1j.3e}L if(h.1N=="6j"){h.8P=v.1C;k fQ="9G............................................................|";v.1C=fQ+h.l.1j.1Y+"|"+h.l.1j.1C+"|"+h.l.1j.O+"|"+h.l.1j.3e;}};5G.u.3i=j(){h.3h();if(h.l.J){h.l.a0()}};3I=j(l){h.l=l;h.2e=B;h.1N=B;h.3m=B;h.5i=B;h.2w()};3I.u.2w=j(){h.2e=h.l.C.6z();h.1N=(/nq\\/2a/ig.3f(4y.4v)?"49":"6j")};3I.u.3h=j(){2D{if(h.1N=="49"){1q.3p="2a.3h://"+2c(2C.2O(h.l.1j))}L{2a.3h(2C.2O(h.l.1j))}}2z(e){1g.1l(e)}};3I.u.3i=j(){2D{if(h.1N=="49"){1q.3p="2a.3i://"+2c(2C.2O(h.l.1j))}L{2a.3i(2C.2O(h.l.1j))}}2z(e){1g.1l(e)}};3I.u.9a=j(){2D{if(h.1N=="49"){1q.3p="2a.9a://"+h.l.J}L{2a.9a(h.l.J)}}2z(e){1g.1l(e)}};3I.u.6G=j(A){A.1B=h.l.1B;A.72=h.l.72;A.1C=h.l.1j.1C;2D{if(h.1N=="49"){1q.3p="2a.6G://"+2c(2C.2O(A))}L{2a.6G(2C.2O(A))}}2z(e){1g.1l(e)}};3I.u.6X=j(){k 1r=B;2D{if(h.1N=="6j"){1r=2a.6X()}}2z(e){1g.1l(e)};K 1r};3I.u.57=j(5b){2D{k 1r=2a.6X();h.l.C.3P("57: 1r = "+1r);k G="1a://1D.9g.1c/1n/57?1r="+1r;k o=h;h.l.C.1W(G,j(A){if(A&&A.44){2a.no(2C.2O(A));k 2v=o.l.1S+"/3q/5a.1n.1V?5b="+2c(5b)+"&6Q="+A.3g+"&1r="+1r+"&22="+A.nm;1A.1q.2W(2v)}L{o.l.3q.4X();2a.nn()}})}2z(e){1A.1q=h.l.1S+"/1n/57.1V?r="+29.2g()}};3I.u.2i=j(18){2D{2a.2i(18)}2z(e){1g.1l(e)}};3I.u.g2=j(G){2D{k b5=2a.g2(G,1A.b1,1A.b0);if(b5){k 1e=v.E("1e");1e.nr=b5;v.1o("2N")[0].D(1e)}}2z(e){1g.1l(e)}};5J=j(l){h.l=l;h.2e=B;1A.5f={};h.2w()};5J.u.2w=j(){h.2e=h.l.C.6z();k G="1a://nv.4e.cn/nw.eB";k A={5f:"nu"};h.l.C.em(G,A,B,j(A){1A.5f=A})};5J.u.79=j(2e){K h.l.C.98(h.2e,2e)};5J.u.3i=j(){if(5f.fr===\'7B\'||5f.fr===\'ns\'){if(5f.fr===\'7B\'){2D{nt.ne("nf.nd",[h.l.1j.1C,h.l.1j.O,h.l.1j.1Y,\'\'])}2z(e){1g.7f(e.3B)}}L{if(h.79("9.9.0.0")){h.eZ();fg.eP(h.l.1j.1C,h.l.1j.O,h.l.1j.1Y,\'\',\'\',\'nb\',\'9r\')}L{1q.3p="nc:eP:"}}}L{h.l.C.3P("ng")}};5J.u.eZ=j(){k F=v.1d("9r");if(!F){F=v.E("F");F.id="9r";if(h.l.J)F.1L="1a://P.9g.1c/"+h.l.J+"/3O.2k";L F.1L="1a://P.9g.1c/3O.2k";F.I="9r";v.1o("1t")[0].D(F)}};91=j(l){h.l=l;h.2e=B;h.1N=B;h.3m=B;h.5i=B;h.2w()};91.u.2w=j(){h.1N=(4y.4v.2K(/(hr|hm|h0)/ig)?"49":"6j")};91.u.3i=j(){k aT={nk:"3i",1C:h.l.1j.1C,G:h.l.1j.1Y,nl:h.l.1j.3e,nj:h.l.1j.O};if(h.1N=="49"){1q.3p="a6.nh://"+2c(2C.2O(aT))}L if(1A.ce&&ce.dm){ce.dm(2C.2O(aT))}};aE=j(l){h.l=l;h.2e=B};aE.u.3i=j(){1A.7B.ni(h.l.1j.1Y,h.l.1j.1C,h.l.1j.3e)};', 62, 1668, '|||||||||||||||||this||function|var|game9g|||_this||div||||prototype|document|json||||data|null|utils|appendChild|createElement|img|url|callback|className|gameid|return|else||options|content|game|player|break|ui|case|Game9GPKIO|addEventListener|mask|innerHTML|length|text|||||||||roleid|Command|http|localStorage|com|getElementById|style|Game9GPKUI|console|Game9GPK|true|shareData|spid|log|role_id|app|getElementsByTagName|false|location|token||body|players|role|status|call|Game9GUtils|arguments|window|score|title|wx|setTimeout|result|wrap|btn|preventDefault|touchstart|for|src|roomid|type|removeChild|msg|new|send|baseurl|Game9G|cmd|html|ajax|success|link|Channel||btns|myuid|list|||Status|tip|leftcircle|Math|pengpeng|parentElement|encodeURIComponent|item|version|GAME|random|user|chat|getAppType|png|target|nickname|rightcircle|click|dispatchEvent|sessionStorage|headimgurl||room_id|name|redirect|init|second|finish|catch|ishero|setParameter|JSON|try|start|vw2pxs|display|sp|ul|Game9GWx|match|response|fail|head|stringify|label|randPlayers|hero|movie|apply|time|typeof|replace|Game9GAuth|getParameter|1000||push||extend|color|switch|btn2|btn1|logid|Game9GChat|value|source|showTip|action|imgurl|test|accessToken|setShareData|share|linear|date|webkitAnimationEnd|shareOK|gamecenter|animationend|href|auth|ua|img2|xmlhttp|best|games|herobest|targetbest|cancel|owner|rightwrap|message||leftwrap||forwards|100|Date|Game9GPengPeng|width|imgs|resetCheckNewMessageTimer|menu|span|icon|debug|res|index|obj|city|talker|default|gamename|indexOf|ready|mediaIds||none|getTime|fromid|uid|localIds|event|key|wait|iOS|tab|errcode|removeItem|spname|uc|showRoom|fadeOut|showRole|shareDomain|level|Game9GUI|pkGameRoomOK|targetIndex|badge|defaults|footer|parse|dialog|selectedPlayer|badgeMessage|reg|userAgent|tid|once|navigator|jsp|getHead132|fid|showMask|game9gpk|websocket|Game9GPKAni|step|3000|isPrivate|playerIndex|getRandomString|domain|topic|duration|jsonpcallback|game9g9gstart|arrow|room_game|loading|quitRoom|jsonparam|progress|bgcolor|clear|removeRole|500||showGame|2000|alert|winner|isConnected|hideEmojiPanel|login|buttonCancel|buttonOK|trans|origin|loadingComplete|input|closeProgress|uc_param_str|theHead|refreshScore|shareCancel|emojis|circleloadleft|FREE|zhongsou|memo|Game9GChatUI|ONLINE|hideMatchRecommend|hide||show|CHAT|timer|isLocal|left|sessionid|interval|buttons|game9gpktip|notice|Game9GUIMenu|rnd|set|Game9GApp|move|game9gmask|Game9GUC|game9gmenu|parseInt|pklastuser|dts|paddNum|diff|imgShare|targetscore|heroscore|pkuid|getElementsByClassName|circleloadright|webkitAnimation|size|animationFillMode|animation||emoji|webkitAnimationFillMode|hideProgress||end|btnok|btncancel|btn4|shareTip|feedId|showRandPlayers|200|events|btn3|onCancel|object|vh2px|vw2px|Android|animalid|btn5|Game9GUtilsDialog|close|isLoading|btn6|game9gpkmatcharrow|hidePkOther|scriptControll|scoretext|OK|agree|reject|game9gpkconfirm|closeDialog|getAppVersion|scorebar|hideRoom|resultwhite|_czc|同意|拒绝|onAutoSubmit|isPk|sex|country|rematch|timestamp|setProgressText|clearButton|signature|open|access_token|serverId|showProgress|isSubmitted|getPath|isNewUser|errmsg|getToken|END|localId||shareCancelHandler|scoreName|gameurl|CryptoJS|province|shareOKHandler|hideTip|gotoPublicRoom|isVersionOver|removeEventListener|isSelected|game9gpktimeout|WeixinJSBridge|getEventUrl|error|execute|timeoutBtns|PRIVATE|isAndroid|unionid|media_id|hideGameRoomCreate|bar|onGameRandPlayers|game9gpkmatchscroll|showButtons|totalscore|desc|renderRole|server|movies|game9gpkrole_target|port|_setCustomVar|game9guirequest|newMessage|android|moreurl|game9gpkemojilist|startPk|isReady|hideChooseGame|busy|onReady|hideWait|countDownTimer|getRole|showEmojiPanel|steps|hideGameIntro|MM|showGameIntro|removeImg|pop|addPlayer|substr|isTargetJump|game9gpkintro|game9gpktime|mediaId|game9gpktiptext|getTargetPlayer|ani|header|timeoutText|clearTimeout|cancelEvent|pathname|request_id|hideRequest|getNewMessage|gametime|unread|lastCheckUnread|hideGame|toFixed|hideRandPlayers|noncestr|_dialog|instanceof|isRecommendNotice|offline|onGameMatchPlayerOffline|onGameResult|btnPrev|delay|getSessionId|hideResult|onGameJoin|chooseImage|logo|onGameReplayRequestCancel|Game9GUIStart|onGameReplayResponse|class|btnNext|totalTime|pulse|onGameReplayRequest|onGameReplay|zf|onGamePlayers|sec|doGameJoinPrivate|isPublic|checkTask|onGameQuit|onGameRoom|restart|pkGameAllReady|onGameRoomOK|PLAY|oldTitle|isIOS|refreshGameTime|pkGameReplay|hideGameShare|string|onGameAllReady|READY|onGameReady|pkPlayerQuit|doGameReplayRequest|submit|Game9GZhongsou|onGameRoomCreate|game9gpkmask|hostname|OFFLINE|uploadImage|btnRand|compareVersion||onInitGame|isPlayerQuit|showMyGameRoomWait|onGameAllList|onces|onGameRandList||game9gpkgamelist|isTest|params|parseFloat|check|hideMask|showGameRandList|active|gameicon|btnWx|game9gucicon|和别人玩|hideGameAllList|resetAllPlayers|GAME_READY|showContent|HH|game9gpkother|iswin|game9gpkothermask|ss|createRoom|GAME_QUIT|removePlayer|Array||game9gpkresult|showGameTime|game9gpkplayer_|yyyy|num|game9gpkprogress|showRequest|format|GAME_PK_NOTICE|getPlayer|GAME_RAND_PLAYERS|shareDomains|GAME_ALL_LIST|r2|GAME_EMOJI|再玩一次|isChat|GAME_ROOM_CREATE|homeurl|shareFlow|showButton|shareLog|gzurl|isRoleReady|gfan|souyue|GAME_ASSIGN|fadeOutSlow|GAME_EMOJI_LIST|game9gpkbtn|rankScore|gameOrder||game9guirequestwrap|gameStart|reset|game9gpkscore_|game9gpkscoretext|hasMore|refreshPKScore|GAME_REPLAY_REQUEST_CANCEL|GAME_REPLAY_REQUEST|GAME_REPLAY_RESPONSE|loop|pkHeroQuit|game9guirequestmask|GAME_SUBMIT|count|GAME_REPLAY|RegExp|selectedGame|clearGameStyle|scroll|doGameReplayResponse|responseText|hideGameRandList|selectGameStyle|items|game9gpkgames|Game9GGfan|customLoading|game9gpkgamesmask|doGameSubmit|timeout|cpid|game9gprogressmask|isAssignGame|game9gpkroomcreate|game9gprogressbtns|timeoutCallback|userReady|game9gprogress|_|while|sharedData|Game9GUtilsAjax|addNextPlayer|friendResponse|playerSize|https|over|innerHeight|innerWidth|socketOpen|game9gpkroom|isReconnect|css|getuser|encrypt|describe|isPkOffline|loginWx|Utf8|enc|doGameMatchRecommend|imgfinish|heartbeat||afinish|bounceOutLeft|bounceInLeft|10000|game9g9gstarttip|lcomplete|showGameShare|top|track|ALL_READY||keepAliveInterval|checkTime|thisTime|onGameReplayReady|game9gshareevent|visible|checkNewMessage|checkNewMessageTimer|renderChooseGame|发送|game9gpkfight|game9gpkmatchlist|game9gpkwait|config|game9gmenumask|GAME_JOIN_OFFLINE|checkNewMessageNext|P_TOKEN|GAME_MATCH|GAME_MATCH_PLAYER_OFFLINE|chatTo|closeReply|GAME_MATCH_IGNORE|GAME_JOIN_PUBLIC|then|GAME_JOIN_PRIVATE|str|game9gchoosegame|GAME_MATCH_CANCEL|base|min|GAME_MATCH_RECOMMEND_OK|GAME_MATCH_RECOMMEND|showWaitPeople|onTimeout|showGameRoomCreate|FFFFFF|scrollPlayer|again|pkResponse|flashFast|doGamePkNotice|checkMessageTime|qrbox|gotoPrivateRoom|sextic|取消|正在匹配|JavascriptInterface|game9gdialog|game9guichatpopup||game9gpkprogresstext|now|requestAnimationFrame|run|onMessage||talkerRole|matchRecommend|onError|gotoChat|doCheckToken|C_FRIEND_REQUEST|reply|C_FRIEND_RESPONSE|isCreateRoom|C_TEXT|GROUP_CHAT|sendText|loadPublicRoom|pkMatchPlayer|begin|popup|onClose|onOpen|game9guichatreply|9G游戏|C_GAME_PK_RESPONSE|pkGameRandPlayers|hideMatch|selectPlayer|showMatch|selectNextPlayer|hideWaitPeople|img1|qrcode|public|game9gpkrole_hero|img3|setPlayers|game9gpkwaittext|game9gpkfightscore|game9gpkwaitcircle|game9gpkwaitwrap|即将开始|game9gpkfightbest|fontSize|splice|pkHideRandPlayers|showFight|game9gpkbg|我开好房了|showGameAllList|game9gpkshare|keyword|scrollTop|Ready|gameover||female|pkGameAllList|male|一起玩|玩家|即将进入游戏|currentRoleId|pkAssignGame|onJSClick|房号是|快点过来找我|game9gpkgame_|scrollGame|assignGame|game9gpkgame||selectGame|borderColor|remove|joinPublic|通知朋友|joinPrivate|isInvite|请稍候|showGameOver|tw2|hideGameOver|joinOffline|showResult|gameReplayRequest|pkShowGame|matchPlayerOffline|showPkOther|pkShowRoom|matchOffline|pkGameStart|gamePlayNew|创建私人房间|pkGameResult|sendFriendRequest|6000|game9gpkfightscore_target|onPlayerQuit|showMatchRecommend|game9gpkprogresscircle|game9gpkplayerhead|game9gpkprogresswrap|distance|再等等|fly|showWait|scale|对手没响应|game9gpkplayername|game9gpkfightscore_hero|add|hw2|tw1|game9gpkfightbest_target|hw1|game9gpkscore|game9gpkplayer|showCountDownClock|game9gpkfightbest_hero|showCountDown|doGameMatch|subscribe|game9gprogresstext|game9gprogresscircle|initSp|jsonp|method|XMLHttpRequest|leftprogress|closeOnTimeout|cancelText|showCancel|defaultBtn|game9gprogresswrap|rightprogress|backgroundColor||Game9GUtilsJsonp|100000|bounceInRight|php|loadingSp|game9gad|showAd|showStart|slogan|collect|responseData|substring|isSpReady|cplogo|game9gloading|request|getShortUrl|web_share|search|getFullYear|floor|getDate|getMonth|r1|handleFriendRequest|onReAssignGame|onGameReAssign|createIconImage|version2|version1|handleMessages|formatDate|好|showChooseGame|addFeedComment|prompt|sum|game9gdialogprompt|placeholder|gethotgames|getRandomInt|len|max|autoSubmit|ucbrowser|initGame|zoo|get|getFullUrl|gameName|initJsApi|api|startTime|getRoleList|ajaxUrl||err_msg|argv|script|cnzz_protocol|invoke|640|addFeed||img_url|autoScore|appcall|uploadwx|connect|cropwx|uuid|types|onBridgeReady|roleReady|onMenuShareAppMessage|onMenuShareTimeline|lastRankScore|imgUrl|slice|getEventToday|space|word|fromuser|initUser|srcs|encrypted|getUser|mode|registerWx|game9gzhongsoutip|isZhousouInstalled|game9gadbottom|cssHack|vh2pxs|fromurl|loginForm|toString|protocol|check_|path|checkOKLoad|checkError|compareAppToken|checkOkSave|_ok_time|ERROR|isUserReady|isNaN|initSns|logView|heartbeatTime|lastTime|onAssignGame|onGameMatchPlayer|onMatchPlayer|doGameMatchCancel|onGameMatchCancel|onMatchRecommendFail|onGameMatchRecommendOK|onGameMatchRecommend|onMatchRecommend|GAME_TIME|GAME_OVER|GAME_SNAPSHOOT|GAME_COUNT_DOWN||GAME_RE_ASSIGN|未知的命令|GAME_RESULT|GAME_RAND_LIST|onMatchRecommendOK|onJoinOffline|onGameStart|onJoinPublic|onGameJoinOffline|onGameCountDown|onGameTime|onGameSnapshoot|parseSnapshoot|onGameMatchIgnore|log_id|onGameMatchRecommendNotice|onMatchRecommendNotice|onJoinPrivateFail|onGameJoinPublic|onGameJoinPrivate|onJoinPrivate|GAME_START|doGameReplayRequestCancel|doGameEmojiList|doGameReady|doGameReplay|iPad|doGameAssign|doGameEmoji|doGameRoomCreate|doGameMatchOffline|GAME_MATCH_OFFLINE|doGameMatchRecommendOK|doGameMatchIgnore|doGameJoinOffline|doGameQuit|doGameMatchPlayerOffline|doGameJoinPublic|doGameAssignTimeout|GAME_MATCH_RECOMMEND_NOTICE|GAME_JOIN|executeGame|GAME_MATCH_PLAYER|GAME_PLAYERS|GAME_ALL_READY|GAME_ROOM|GAME_ROOM_OK|doGameRandPlayers|iPod|GAME_ASSIGN_TIMEOUT|doGameAllList|executePrivate|onCheckToken|iPhone|executeError|handlePkRequest|onGameAssign|onGameOver|onGameMatch|onGameSubmit|showEmoji|gameOver|onGameEmojiList|onGameEmoji|onGamePkNotice|b1Atb251R0xBLVRldGNjcGxGZmNLWlhsOXZ0bw|房间信息|b1Atb251RHpoRmtpa2M2YjhGbF9sUDRzQ28wTQ|响应好友请求|public_|b1Atb251SzlpMHV6eXBZLTlmTkIwUm9VWl9NWQ|b1Atb251UG8tVnNWbDM3UVFvaUI4M2hJbUQyTQ|Z2Zhbi1seUN1NWVJRzY5eUlhRTBibmpMQm5iTg|Z2Zhbi05V0d3MkJ4QkhhZW9VZU9LTWh5VE5TZA|b1Atb251Qi1MbllvTkRTVjduc0c3eGlQUnlQNA|对方的请求|feed_id|chooseGame|已|选择游戏|addfeedcomment|getGamePlay|b1Atb251RGNNZktTeTRCdXp3NDFCMkpoNzR0OA|b1Atb251T1ZmS0VubEhKSXdxTi1NQ3NuV2xvZw|2022|sns|getgameplay|istest|bounceOutRight|想和你一起玩|正在等待对手回应|想要再玩一次|game9guichatreplytip|查看聊天记录|2021|keydown|keyCode|对手已经离开房间|getFromUser|answer|C_GAME_PK_REQUEST||cang56|||pkGameRoom|请求加好友|动态链接|decodeURIComponent|ngame||||拒绝了再玩一次请求|正在进入游戏|回复|取消了再玩一次请求|game9guichatreplybtn|进入私人房间||C_GAME_PK_REQUEST_CANCEL|已同意|game9guichatreplymask|gameinfo|对方没响应|getevent|checkSubscribe|checksubscribe|getGameInfo|gameshare|5000|game9guichatpopupmask|asc|等待对应响应|51h5|开始播放|发送失败|游戏对战请求|游戏对战响应|idods|催催Ta|split|游戏链接|未知的聊天格式|connect3|sendmessage|bonus|已发出通知|游戏步骤|connect2|order|addFeedGame|个|接收游戏快照|getrole|addfeed|请求加你为好友|hasPlayer|getnewmessage|gameIcon|2023|房间人已满|房间已关闭|feed|refreshMessage|Base64|encode|game9gcom2014123|refreshRankScore|gototop|game9guichatpopupwrap|join|请等待|getrolelist|getunreadcount|提交失败|zhaogongyi|2500|2018|getNotice|发来一张照片|想和你一起玩游戏|2008|用户|C_ARRIVE|房间人齐了|game9gmenu_credit|showmenu|2007|credit|getcreditsum|房间内玩家|uq2558|重新匹配|game9ggzbanner|C_UNREAD|2010|icon_04|gz_banner|wx_ver|老用户|新用户|C_READ|gz_9g|指定了游戏|2009|C_QA_ANSWER|重新加入|2001|玩家退出|进入游戏|已是房主|2003|C_IMAGE|非房主|离开房间|C_VOICE|2002|等待对手|显示房间|C_VIDEO|2005|选择一款游戏开始吧|C_HTML|2006|C_QA|系统|换一批|显示游戏|离线匹配指定玩家|2004|玩家加入|refresh|setbackurl|C_REMOVE_BLACKLIST|1500|linkResult|game9guiresponsereject|游戏结束|saveLink|goto9g|C_ADD_BLACKLIST|所有人|2014|游戏开始|game9g9gstartbadge|2015|成绩|C_BAD_REPORT|进入测试页|game9guirequesthead|C_GAME_LINK|2017|等待对手准备|gameReplay|game9guiresponsebtns|game9guiresponseagree|app2|game9guirequesttext|2016|bckurl|C_FRIEND_REMOVE|online|随机一起玩|icon_02|各玩家|在线玩家|icon_05|今日比赛|8000|getsp|个人中心|发来一段语音|icon_03|C_FEED_LINK|icon_01|create_pk_room|新消息|viewportUnitsBuggyfill|2013|waiting|game9gmenumy|2012|游戏大厅|2011|状态|图文消息|发来一段视频|icon_06|callee|Microsoft|XMLHTTP||ActiveXObject|FBC71B|GET|onreadystatechange|charset|utf|delete|readyState|documentElement|game9gsharemask|请在此输入内容|sharetoevent|feed_pk|confirm|确定|game9gdialogcontent|game9gdialogfooter|game9gdialogheader|FF0000|888888|insertBefore|AES|CBC|DEBUG|zhongsou_share_android|wx360a9785675a8653|要求|write|unescape|tongji|heart|view|game9glogo|splogo|game9glogo_up|firstChild|escape|position|isappinstalled|zhongsou_share_ios|9999|fixed|zIndex|返回游戏|other|MicroMessenger|mappn|linux|micromessenger|PengPeng|127|getUrl|localhost|UCBrowser|file|人数|取消匹配|游戏匹配|未知的通道消息|已失效|忽略来自|undefined|Mac|发送对战通知|的匹配推荐||remain|getQueryString|刚刚|分钟前|formatTime|getMinutes|getSeconds|小时前|game_play_result|scorename|分享给||ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|shareConfirm|getHead64|132|short_url|removeParameter|getshorturl|setMilliseconds|yy|getHours|number|today|setHours|uploadImages|shift|isShowProgressTips|成功|chooseImages|getMediaUrl|sios|sandroid|getSquareImages|getMediaUrls|getSquareImage|chooseWXPay|openProductSpecificView|scanQRCode|showOptionMenu|||closeWindow|addCard|_trackEvent|分享|dataUrl|chooseCard|openCard|game9gWxShareOk|来自9G游戏|ext|page_share|startRequest|shell|其它分享接口|onclick|share2Friends|description|category|image|wx9guid|onLoginFail|onLoginSuccess|setwxshare|ios|textContent|iphone|ucweb|dnfrpfbivecpbtnt|hao|getucparam|hideOptionMenu|timeline|shareTimeline|send_app_msg|appmessage|sendAppMessage|img_width|appId|wxe0fb670c408a3705|getjsapisignature|img_height|share_timeline|s5|cnzz|3Cscript|3Cspan|cnzz_stat_icon_2947366|stat|initWeixinJSBridge|WeixinJSBridgeReady|javascript|3Fid|3D2947366|nonceStr|stopVoice|uploadVoice|pauseVoice|onRecordEnd|playVoice|downloadVoice|openLocation|getLocation|getNetworkType|previewImage|downloadImage|onMenuShareWeibo|hideMenuItems|onMenuShareQQ|jsApiList|checkJsApi|showMenuItems|startRecord|stopRecord|translateVoice|hideAllNonBaseMenuItem|showAllNonBaseMenuItem|game9gpkresultplayers|game9gpkresultscore|时间到||game9gpkscoretitle|得分||game9gpkresultscorebar|game9gpkresultchaticon|game9gpkresultscoretext_|resulttarget|game9gpkresultrole_|resulthero|intro|匹配成功|game9gpkemojiflyright|bounce|FFFD01|currentImg|game9gpkemojiflyleft|ease|opacity|18s|game9gpkemoji_|game9gpkemoji|game9gpkresultscoretext|退出|game9gpkweixin|好友请求已发送|加好友|请求加对方为好友|game9gpkrandom|113|9502|139|182|254|发送消息|lose|你赢了|win|game9gpkresultscorebar_|game9gpkresultwinner|你输了|换个游戏|换个对手|resultred|播放结束|game9gpkresultbtn|点击马上与|实时对战|makeCode|QRCode|height|等待朋友加入|game9gshare|game9gpkrole_|CCC|对应无响应|继续等待|扫描二维码或通知好友立即开战|querySelectorAll|clearCountDown|bottom|continue||执行步骤||rightwait|onPkGameRandPlayers||的房间已经开通|immediately||leftwait|619D96|matchhero|game9gpkroomrole_||roomhero|game9gpkroomplayers|的|玩|roomtarget|下一页|FFF|上一页|play_count|人正在玩|是否要和|game9gpkrolename|game9gpkrolecity|game9gpkrolehead|matchtarget|game9gpkrole|game9gpkconfirmicon|game9gpkconfirmbtncancel|不要|game9gpkconfirmbtnok|game9gpkconfirmtext|game9gpkconfirmbtn|setInterval|5030|info|5029|keepAlive|5032|已断开连接|5031|checkConnect|489348|5022|5023|5020|5021|5024|5028||warn|5025|5026|5076|WebSocket|socketClose|5074|ws|onclose|onmessage|onopen|onerror|5073|5050|5051|clearInterval|连接成功|5061|5071|5072|5065|5070|5009|emoji_id|5007|5008|5010|5011|连接已关闭|D34B34|1001|5001|5033|无效的通道或命令|5005|5006|5002|5003|5012|5016|5015|5013|5014|5018|5017'.split('|'), 0, {}));
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        _doReset: function() {
            this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this._hash.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f,
                    m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m,
                    E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        _doFinalize: function() {
            var b = this._data,
                n = b.words,
                a = 8 * this._nDataBytes,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a /
                4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this._process();
            b = this._hash;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b._hash = this._hash.clone();
            return b
        }
    });
    t.MD5 = v._createHelper(r);
    t.HmacMD5 = v._createHmacHelper(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d,
            l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this._ENC_XFORM_MODE, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this._DEC_XFORM_MODE, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this._xformMode = e;
                this._key = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this._doReset()
            },
            process: function(e) {
                this._append(e);
                return this._process()
            },
            finalize: function(e) {
                e && this._append(e);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this._iv;
            c ? this._iv = u : c = this._prevBlock;
            for (var d = 0; d < b; d++) e[a + d] ^=
                c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function(e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function(e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function(e, a) {
                this._cipher = e;
                this._iv = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this._cipher,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this._prevBlock = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this._cipher,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this,
                e, a, c);
            this._prevBlock = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
            else c = a.createDecryptor, this._minBufferSize = 1;
            this._mode = c.call(a,
                this, b && b.words)
        },
        _doProcessBlock: function(a, b) {
            this._mode.processBlock(a, b)
        },
        _doFinalize: function() {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else b = this._process(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684,
                    1701076831
                ]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this._parse(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            _parse: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d,
                    b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this._parse(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8,
            16, 32, 64, 128, 27, 54
        ],
        d = d.AES = p.extend({
            _doReset: function() {
                for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this._invKeySchedule = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>>
                    8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            _doCryptBlock: function(a, b, c, d, e, j, l, f) {
                for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t =
                    d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p._createHelper(d)
})();
