!
function e(t, n, o) {
    function r(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var c = "function" == typeof require && require;
                if (!s && c) return c(a, !0);
                if (i) return i(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND",
                u
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports,
            function(e) {
                var n = t[a][1][e];
                return r(n ? n: e)
            },
            l, l.exports, e, t, n, o)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require,
    a = 0; a < o.length; a++) r(o[a]);
    return r
} ({
    1 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            e.UEM = e.UEM || {},
            e.UEM.adaptation = r(),
            "object" === ("undefined" == typeof n ? "undefined": o(n)) && (t.exports = r())
        } (window,
        function() {
            function e() {
                t(),
                r.push(function() {
                    t()
                })
            }
            function t() {
                n(),
                setTimeout(function() {
                    n()
                },
                100),
                setTimeout(function() {
                    n()
                },
                1500),
                setTimeout(function() {
                    n()
                },
                2500)
            }
            function n() {
                document.querySelector("html").style.fontSize = window.innerWidth / s + "px"
            }
            var o = {},
            r = window.UEM.resizeJob = window.UEM.resizeJob || [],
            i = window.innerWidth,
            a = 640,
            s = a / 1e3;
            return o.resizeJob = r,
            window.onresize = function() {
                i = window.innerWidth;
                for (var e = r.length; e--;) r[e]()
            },
            o.calculatePixel = function(e) {
                return parseInt(e * window.innerWidth / s, 10)
            },
            o.calculateRem = function(e) {
                return e * s / window.innerWidth
            },
            e(),
            o
        })
    },
    {}],
    2 : [function(e, t) {
        "use strict";
        var n = function() {
            try { !
                function(e, t) {
                    "function" == typeof define && (define.amd || define.cmd) ? define(function() {
                        return t(e)
                    }) : t(e, !0)
                } (this,
                function(e, t) {
                    function n(t, n, o) {
                        e.WeixinJSBridge ? WeixinJSBridge.invoke(t, r(n),
                        function(e) {
                            a(t, e, o)
                        }) : u(t, o)
                    }
                    function o(t, n, o) {
                        e.WeixinJSBridge ? WeixinJSBridge.on(t,
                        function(e) {
                            o && o.trigger && o.trigger(e),
                            a(t, e, n)
                        }) : o ? u(t, o) : u(t, n)
                    }
                    function r(e) {
                        return e = e || {},
                        e.appId = O.appId,
                        e.verifyAppId = O.appId,
                        e.verifySignType = "sha1",
                        e.verifyTimestamp = O.timestamp + "",
                        e.verifyNonceStr = O.nonceStr,
                        e.verifySignature = O.signature,
                        e
                    }
                    function i(e) {
                        return {
                            timeStamp: e.timestamp + "",
                            nonceStr: e.nonceStr,
                            "package": e.package,
                            paySign: e.paySign,
                            signType: e.signType || "SHA1"
                        }
                    }
                    function a(e, t, n) {
                        var o, r, i;
                        switch (delete t.err_code, delete t.err_desc, delete t.err_detail, o = t.errMsg, o || (o = t.err_msg, delete t.err_msg, o = s(e, o, n), t.errMsg = o), n = n || {},
                        n._complete && (n._complete(t), delete n._complete), o = t.errMsg || "", O.debug && !n.isInnerInvoke && alert(JSON.stringify(t)), r = o.indexOf(":"), i = o.substring(r + 1)) {
                        case "ok":
                            n.success && n.success(t);
                            break;
                        case "cancel":
                            n.cancel && n.cancel(t);
                            break;
                        default:
                            n.fail && n.fail(t)
                        }
                        n.complete && n.complete(t)
                    }
                    function s(e, t) {
                        var n, o, r, i;
                        if (t) {
                            switch (n = t.indexOf(":"), e) {
                            case m.config:
                                o = "config";
                                break;
                            case m.openProductSpecificView:
                                o = "openProductSpecificView";
                                break;
                            default:
                                o = t.substring(0, n),
                                o = o.replace(/_/g, " "),
                                o = o.replace(/\b\w+\b/g,
                                function(e) {
                                    return e.substring(0, 1).toUpperCase() + e.substring(1)
                                }),
                                o = o.substring(0, 1).toLowerCase() + o.substring(1),
                                o = o.replace(/ /g, ""),
                                -1 != o.indexOf("Wcpay") && (o = o.replace("Wcpay", "WCPay")),
                                r = g[o],
                                r && (o = r)
                            }
                            i = t.substring(n + 1),
                            "confirm" == i && (i = "ok"),
                            "failed" == i && (i = "fail"),
                            -1 != i.indexOf("failed_") && (i = i.substring(7)),
                            -1 != i.indexOf("fail_") && (i = i.substring(5)),
                            i = i.replace(/_/g, " "),
                            i = i.toLowerCase(),
                            ("access denied" == i || "no permission to execute" == i) && (i = "permission denied"),
                            "config" == o && "function not exist" == i && (i = "ok"),
                            t = o + ":" + i
                        }
                        return t
                    }
                    function c(e) {
                        var t, n, o, r;
                        if (e) {
                            for (t = 0, n = e.length; n > t; ++t) o = e[t],
                            r = m[o],
                            r && (e[t] = r);
                            return e
                        }
                    }
                    function u(e, t) {
                        if (O.debug && !t.isInnerInvoke) {
                            var n = g[e];
                            n && (e = n),
                            t && t._complete && delete t._complete,
                            console.log('"' + e + '",', t || "")
                        }
                    }
                    function l() {
                        if (! ("6.0.2" > E || I.systemType < 0)) {
                            var e = new Image;
                            I.appId = O.appId,
                            I.initTime = S.initEndTime - S.initStartTime,
                            I.preVerifyTime = S.preVerifyEndTime - S.preVerifyStartTime,
                            T.getNetworkType({
                                isInnerInvoke: !0,
                                success: function(t) {
                                    I.networkType = t.networkType;
                                    var n = "https://open.weixin.qq.com/sdk/report?v=" + I.version + "&o=" + I.isPreVerifyOk + "&s=" + I.systemType + "&c=" + I.clientVersion + "&a=" + I.appId + "&n=" + I.networkType + "&i=" + I.initTime + "&p=" + I.preVerifyTime + "&u=" + I.url;
                                    e.src = n
                                }
                            })
                        }
                    }
                    function d() {
                        return (new Date).getTime()
                    }
                    function f(t) {
                        v && (e.WeixinJSBridge ? t() : h.addEventListener && h.addEventListener("WeixinJSBridgeReady", t, !1))
                    }
                    function p() {
                        T.invoke || (T.invoke = function(t, n, o) {
                            e.WeixinJSBridge && WeixinJSBridge.invoke(t, r(n), o)
                        },
                        T.on = function(t, n) {
                            e.WeixinJSBridge && WeixinJSBridge.on(t, n)
                        })
                    }
                    var m, g, h, w, y, v, b, C, E, S, I, O, _, N, T;
                    return e.jWeixin ? void 0 : (m = {
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
                    },
                    g = function() {
                        var e, t = {};
                        for (e in m) t[m[e]] = e;
                        return t
                    } (), h = e.document, w = h.title, y = navigator.userAgent.toLowerCase(), v = -1 != y.indexOf("micromessenger"), b = -1 != y.indexOf("android"), C = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"), E = function() {
                        var e = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
                        return e ? e[1] : ""
                    } (), S = {
                        initStartTime: d(),
                        initEndTime: 0,
                        preVerifyStartTime: 0,
                        preVerifyEndTime: 0
                    },
                    I = {
                        version: 1,
                        appId: "",
                        initTime: 0,
                        preVerifyTime: 0,
                        networkType: "",
                        isPreVerifyOk: 1,
                        systemType: C ? 1 : b ? 2 : -1,
                        clientVersion: E,
                        url: encodeURIComponent(location.href)
                    },
                    O = {},
                    _ = {
                        _completes: []
                    },
                    N = {
                        state: 0,
                        res: {}
                    },
                    f(function() {
                        S.initEndTime = d()
                    }), T = {
                        config: function(e) {
                            O = e,
                            u("config", e);
                            var t = O.check === !1 ? !1 : !0;
                            f(function() {
                                var e, o, r;
                                if (t) n(m.config, {
                                    verifyJsApiList: c(O.jsApiList)
                                },
                                function() {
                                    _._complete = function(e) {
                                        S.preVerifyEndTime = d(),
                                        N.state = 1,
                                        N.res = e
                                    },
                                    _.success = function() {
                                        I.isPreVerifyOk = 0
                                    },
                                    _.fail = function(e) {
                                        _._fail ? _._fail(e) : N.state = -1
                                    };
                                    var e = _._completes;
                                    return e.push(function() {
                                        O.debug || l()
                                    }),
                                    _.complete = function() {
                                        for (var t = 0,
                                        n = e.length; n > t; ++t) e[t]();
                                        _._completes = []
                                    },
                                    _
                                } ()),
                                S.preVerifyStartTime = d();
                                else {
                                    for (N.state = 1, e = _._completes, o = 0, r = e.length; r > o; ++o) e[o]();
                                    _._completes = []
                                }
                            }),
                            O.beta && p()
                        },
                        ready: function(e) {
                            0 != N.state ? e() : (_._completes.push(e), !v && O.debug && e())
                        },
                        error: function(e) {
                            "6.0.2" > E || ( - 1 == N.state ? e(N.res) : _._fail = e)
                        },
                        checkJsApi: function(e) {
                            var t = function o(e) {
                                var t, n, o = e.checkResult;
                                for (t in o) n = g[t],
                                n && (o[n] = o[t], delete o[t]);
                                return e
                            };
                            n("checkJsApi", {
                                jsApiList: c(e.jsApiList)
                            },
                            function() {
                                return e._complete = function(e) {
                                    if (b) {
                                        var n = e.checkResult;
                                        n && (e.checkResult = JSON.parse(n))
                                    }
                                    e = t(e)
                                },
                                e
                            } ())
                        },
                        onMenuShareTimeline: function(e) {
                            o(m.onMenuShareTimeline, {
                                complete: function() {
                                    n("shareTimeline", {
                                        title: e.title || w,
                                        desc: e.title || w,
                                        img_url: e.imgUrl,
                                        link: e.link || location.href
                                    },
                                    e)
                                }
                            },
                            e)
                        },
                        onMenuShareAppMessage: function(e) {
                            o(m.onMenuShareAppMessage, {
                                complete: function() {
                                    n("sendAppMessage", {
                                        title: e.title || w,
                                        desc: e.desc || "",
                                        link: e.link || location.href,
                                        img_url: e.imgUrl,
                                        type: e.type || "link",
                                        data_url: e.dataUrl || ""
                                    },
                                    e)
                                }
                            },
                            e)
                        },
                        onMenuShareQQ: function(e) {
                            o(m.onMenuShareQQ, {
                                complete: function() {
                                    n("shareQQ", {
                                        title: e.title || w,
                                        desc: e.desc || "",
                                        img_url: e.imgUrl,
                                        link: e.link || location.href
                                    },
                                    e)
                                }
                            },
                            e)
                        },
                        onMenuShareWeibo: function(e) {
                            o(m.onMenuShareWeibo, {
                                complete: function() {
                                    n("shareWeiboApp", {
                                        title: e.title || w,
                                        desc: e.desc || "",
                                        img_url: e.imgUrl,
                                        link: e.link || location.href
                                    },
                                    e)
                                }
                            },
                            e)
                        },
                        startRecord: function(e) {
                            n("startRecord", {},
                            e)
                        },
                        stopRecord: function(e) {
                            n("stopRecord", {},
                            e)
                        },
                        onVoiceRecordEnd: function(e) {
                            o("onVoiceRecordEnd", e)
                        },
                        playVoice: function(e) {
                            n("playVoice", {
                                localId: e.localId
                            },
                            e)
                        },
                        pauseVoice: function(e) {
                            n("pauseVoice", {
                                localId: e.localId
                            },
                            e)
                        },
                        stopVoice: function(e) {
                            n("stopVoice", {
                                localId: e.localId
                            },
                            e)
                        },
                        onVoicePlayEnd: function(e) {
                            o("onVoicePlayEnd", e)
                        },
                        uploadVoice: function(e) {
                            n("uploadVoice", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                        },
                        downloadVoice: function(e) {
                            n("downloadVoice", {
                                serverId: e.serverId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                        },
                        translateVoice: function(e) {
                            n("translateVoice", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                        },
                        chooseImage: function(e) {
                            n("chooseImage", {
                                scene: "1|2",
                                count: e.count || 9,
                                sizeType: e.sizeType || ["original", "compressed"]
                            },
                            function() {
                                return e._complete = function(e) {
                                    if (b) {
                                        var t = e.localIds;
                                        t && (e.localIds = JSON.parse(t))
                                    }
                                },
                                e
                            } ())
                        },
                        previewImage: function(e) {
                            n(m.previewImage, {
                                current: e.current,
                                urls: e.urls
                            },
                            e)
                        },
                        uploadImage: function(e) {
                            n("uploadImage", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                        },
                        downloadImage: function(e) {
                            n("downloadImage", {
                                serverId: e.serverId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            },
                            e)
                        },
                        getNetworkType: function(e) {
                            var t = function o(e) {
                                var t, n, r, o = e.errMsg;
                                if (e.errMsg = "getNetworkType:ok", t = e.subtype, delete e.subtype, t) e.networkType = t;
                                else switch (n = o.indexOf(":"), r = o.substring(n + 1)) {
                                case "wifi":
                                case "edge":
                                case "wwan":
                                    e.networkType = r;
                                    break;
                                default:
                                    e.errMsg = "getNetworkType:fail"
                                }
                                return e
                            };
                            n("getNetworkType", {},
                            function() {
                                return e._complete = function(e) {
                                    e = t(e)
                                },
                                e
                            } ())
                        },
                        openLocation: function(e) {
                            n("openLocation", {
                                latitude: e.latitude,
                                longitude: e.longitude,
                                name: e.name || "",
                                address: e.address || "",
                                scale: e.scale || 28,
                                infoUrl: e.infoUrl || ""
                            },
                            e)
                        },
                        getLocation: function(e) {
                            e = e || {},
                            n(m.getLocation, {
                                type: e.type || "wgs84"
                            },
                            function() {
                                return e._complete = function(e) {
                                    delete e.type
                                },
                                e
                            } ())
                        },
                        hideOptionMenu: function(e) {
                            n("hideOptionMenu", {},
                            e)
                        },
                        showOptionMenu: function(e) {
                            n("showOptionMenu", {},
                            e)
                        },
                        closeWindow: function(e) {
                            e = e || {},
                            n("closeWindow", {
                                immediate_close: e.immediateClose || 0
                            },
                            e)
                        },
                        hideMenuItems: function(e) {
                            n("hideMenuItems", {
                                menuList: e.menuList
                            },
                            e)
                        },
                        showMenuItems: function(e) {
                            n("showMenuItems", {
                                menuList: e.menuList
                            },
                            e)
                        },
                        hideAllNonBaseMenuItem: function(e) {
                            n("hideAllNonBaseMenuItem", {},
                            e)
                        },
                        showAllNonBaseMenuItem: function(e) {
                            n("showAllNonBaseMenuItem", {},
                            e)
                        },
                        scanQRCode: function(e) {
                            e = e || {},
                            n("scanQRCode", {
                                needResult: e.needResult || 0,
                                scanType: e.scanType || ["qrCode", "barCode"]
                            },
                            function() {
                                return e._complete = function(e) {
                                    var t, n;
                                    C && (t = e.resultStr, t && (n = JSON.parse(t), e.resultStr = n && n.scan_code && n.scan_code.scan_result))
                                },
                                e
                            } ())
                        },
                        openProductSpecificView: function(e) {
                            n(m.openProductSpecificView, {
                                pid: e.productId,
                                view_type: e.viewType || 0
                            },
                            e)
                        },
                        addCard: function(e) {
                            var t, o, r, i, a = e.cardList,
                            s = [];
                            for (t = 0, o = a.length; o > t; ++t) r = a[t],
                            i = {
                                card_id: r.cardId,
                                card_ext: r.cardExt
                            },
                            s.push(i);
                            n(m.addCard, {
                                card_list: s
                            },
                            function() {
                                return e._complete = function(e) {
                                    var t, n, o, r = e.card_list;
                                    if (r) {
                                        for (r = JSON.parse(r), t = 0, n = r.length; n > t; ++t) o = r[t],
                                        o.cardId = o.card_id,
                                        o.cardExt = o.card_ext,
                                        o.isSuccess = o.is_succ ? !0 : !1,
                                        delete o.card_id,
                                        delete o.card_ext,
                                        delete o.is_succ;
                                        e.cardList = r,
                                        delete e.card_list
                                    }
                                },
                                e
                            } ())
                        },
                        chooseCard: function(e) {
                            n("chooseCard", {
                                app_id: O.appId,
                                location_id: e.shopId || "",
                                sign_type: e.signType || "SHA1",
                                card_id: e.cardId || "",
                                card_type: e.cardType || "",
                                card_sign: e.cardSign,
                                time_stamp: e.timestamp + "",
                                nonce_str: e.nonceStr
                            },
                            function() {
                                return e._complete = function(e) {
                                    e.cardList = e.choose_card_info,
                                    delete e.choose_card_info
                                },
                                e
                            } ())
                        },
                        openCard: function(e) {
                            var t, o, r, i, a = e.cardList,
                            s = [];
                            for (t = 0, o = a.length; o > t; ++t) r = a[t],
                            i = {
                                card_id: r.cardId,
                                code: r.code
                            },
                            s.push(i);
                            n(m.openCard, {
                                card_list: s
                            },
                            e)
                        },
                        chooseWXPay: function(e) {
                            n(m.chooseWXPay, i(e), e)
                        }
                    },
                    t && (e.wx = e.jWeixin = T), T)
                })
            } catch(e) {}
        };
        n.call(window),
        t.exports = window.wx
    },
    {}],
    3 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(r, i) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = i(e("./../network/index.js")) : "function" == typeof define && define.cmd ? define(function(e, t, n) {
                n.exports = i(e("cmp/network"))
            }) : (r.UEM = r.UEM || {},
            r.UEM.log = i(r.UEM.network))
        } (void 0,
        function(e) {
            function t(e, t) {
                if (!e) throw new Error("argument `" + t + "` is required")
            }
            function n(e, n) {
                if (t(e, n), "string" != typeof e) throw new Error("argument `" + n + "` should be string")
            }
            function o() {
                for (var e, t, n = {},
                o = 0; o < arguments.length; o++) {
                    e = arguments[o];
                    for (t in e) e.hasOwnProperty(t) && (n[t] = e[t])
                }
                return n
            }
            function r(e, t) {
                return e && (e.data = JSON.stringify(o(s, t))),
                e
            }
            function i(e, t) {
                var o = 0,
                i = {};
                if (t instanceof Array) for (; o < t.length; o++) n(e[o], t[o]),
                i[t[o]] = e[o];
                return r(i, e[o]),
                i
            }
            function a(n, o) {
                var a;
                a = o ?
                function() {
                    e.ping(c.prefix + n, i(arguments, o))
                }: function(o) {
                    t(o),
                    e.ping(c.prefix + n, r({},
                    o))
                },
                c[n] = a;
                var s = ["url"].concat(o),
                u = n + "Redirect";
                c[u] = function() {
                    e.redirect(e.parseQuery(i(arguments, s), c.prefix + u))
                }
            }
            var s = {},
            c = {
                prefix: ""
            };
            return a("log"),
            a("logVisit", ["page"]),
            a("logClick", ["clickId"]),
            a("logEvent", ["category", "action"]),
            a("logSystem"),
            c.baseParam = function(e, t) {
                s[e] = t
            },
            c
        })
    },
    {
        "./../network/index.js": 4
    }],
    4 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = r() : (e.UEM = e.UEM || {},
            e.UEM.network = r())
        } (void 0,
        function() {
            function e(e) {
                var t;
                return null == e ? t = String(e) : (t = Object.prototype.toString.call(e).toLowerCase(), t = t.substring(8, t.length - 1)),
                t
            }
            function t(t, n, r) {
                var i, a, s;
                if ("object" === ("undefined" == typeof t ? "undefined": o(t))) if (s = e(t), r = r || t, "array" === s || "arguments" === s || "nodelist" === s) {
                    for (i = 0, a = t.length; a > i; i++) if (n.call(r, t[i], i, t) === !1) return
                } else for (i in t) if (t.hasOwnProperty(i) && n.call(r, t[i], i, t) === !1) return
            }
            function n() {
                var e = {};
                return t(arguments,
                function(n) {
                    t(n,
                    function(t, n) {
                        e[n] = t
                    })
                }),
                e
            }
            function r(e, t) {
                t = t || location.search;
                var n, o = t.indexOf("#");
                return o > 0 && (t = t.substr(0, o)),
                n = t.match(new RegExp("[?|&]" + encodeURIComponent(e) + "=([^&]*)(&|$)")),
                n ? decodeURIComponent(n[1]) : ""
            }
            function i(e, t) {
                var n, o;
                return t && (n = e.indexOf("#"), n >= 0 ? (o = e.substr(n), e = e.substr(0, n)) : o = "", e += (e.indexOf("?") < 0 ? "?": "&") + t.replace(/^[?|&]+/, "") + o),
                e
            }
            function a(e) {
                e = (e || location.queryString).replace(/^\?/, "");
                var t, n, o = e.split("&"),
                r = {};
                if (o.length) for (t = 0; t < o.length; t++) n = o[t].split("="),
                2 === n.length && (r[n[0]] = decodeURIComponent(n[1]));
                return r
            }
            function s(o, r) {
                var i, s, c, u, l = [],
                d = "",
                f = "string" === e(r);
                return f && (s = r.indexOf("#"), s >= 0 && (d = r.substr(s), r = r.substr(0, s)), c = r.indexOf("?"), c >= 0 && (u = a(r.substr(c)), o = n(u, o), r = r.substr(0, c))),
                t(o,
                function(e, t) {
                    l.push(encodeURIComponent(t) + "=" + encodeURIComponent(void 0 === e ? "": e))
                }),
                i = l.join("&").replace(/%20/g, "+"),
                f ? r + "?" + i + d: i
            }
            function c() {
                try {
                    return {
                        __dt: +new Date - window.performance.timing.navigationStart
                    }
                } catch(e) {
                    return {
                        __t: +new Date
                    }
                }
            }
            function u(o) {
                o = o || {};
                var r, i = o.type || "GET",
                a = o.url || "",
                u = n(c(), h, o.data),
                l = o.success,
                d = o.error ||
                function() {},
                f = new XMLHttpRequest;
                f.onreadystatechange = function() {
                    var e;
                    if (4 === f.readyState) if (200 === f.status) {
                        try {
                            e = JSON.parse(f.responseText)
                        } catch(t) {
                            return f.customError = t,
                            void d(f)
                        }
                        p && p(e),
                        l && l(e)
                    } else d(f)
                },
                i = "POST" === i.toUpperCase() ? "POST": "GET";
                try {
                    "POST" === i ? (t(u,
                    function(t) {
                        return "file" === e(t) ? (r = new FormData, !1) : void 0
                    }), a = m(a), f.open(i, a, !0), r ? t(u,
                    function(t, n) {
                        n && void 0 !== t && r.append(n, "array" === e(t) ? t.join() : t)
                    }) : (r = s(u), f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"))) : (a = m(s(u, a)), f.open(i, a, !0)),
                    f.customRequestUrl = a,
                    f.send(r)
                } catch(g) {
                    console.error("ajax error", g)
                }
            }
            function l(e) {
                return function(t, n, o, r) {
                    u({
                        type: e,
                        url: t,
                        data: n,
                        success: o,
                        error: r
                    })
                }
            }
            function d(e, t) {
                var n = 1,
                o = setTimeout(function() {
                    n = f(n, t, !1),
                    o = null
                },
                w);
                e.onload = e.onerror = function() {
                    n = f(n, t, !0),
                    o && (clearTimeout(o), o = null)
                }
            }
            function f(e, t, n) {
                return e && t && (t(n), --e),
                e
            }
            var p, m, g = {},
            h = {};
            m = function() {
                var e, t, n, o, a, c, u, l = 0,
                d = {};
                if ("wp" === r("fr") || "139" === r("pf") || "140" === r("pf")) for (o = r("uc_param_str"), u = o.length - o.length % 2; u > l;) a = o.substr(l, 2),
                c = r(a),
                c.length > 0 && (d[a] = c),
                l += 2;
                return t = r("entry"),
                t && (d.entry = t),
                n = r("origin"),
                n && (d.origin = n),
                e = s(d),
                function(t) {
                    return t = i(t, e),
                    r("uc_param_str", t) || (t = i(t, "uc_param_str=dsdnfrpfbivesscpgimibtbmnisieijblauputogpintnw")),
                    t
                }
            } (),
            g.ping = function(e, t, o) {
                var r = new Image,
                i = n(c(), h, t);
                d(r, o),
                r.src = m(s(i, e))
            };
            var w = 2e3;
            return g.baseParam = function(t, o) {
                if ("string" === e(t)) {
                    if (1 === arguments.length) return h[t];
                    h[t] = o
                } else "object" === e(t) && (h = n(h, t))
            },
            g.baseSuccess = function(t) {
                "function" === e(t) && (p = t)
            },
            g.redirect = function(e) {
                e && (location.href = m(s(h, e)))
            },
            g.query = r,
            g.parseObject = a,
            g.parseQuery = s,
            g.ucParam = m,
            g.ajax = u,
            g.get = l("GET"),
            g.post = l("POST"),
            g
        })
    },
    {}],
    5 : [function(e, t) {
        "use strict";
        var n = navigator.userAgent,
        o = /iphone/i.test(n),
        r = /ucbrowser/i.test(n);
        t.exports = function(e) {
            if (!r) {
                var t, i = (o ? "ucweb-app://": "ucweb://|") + (e || location.href);
                o && +n.match(/iphone os\s(\d)_\d/i)[1] >= 9 ? (t = document.createElement("a"), t.style.display = "none", t.href = i, document.body.appendChild(t), t.click()) : (t = document.createElement("iframe"), t.style.display = "none", t.src = i, document.body.appendChild(t))
            }
        }
    },
    {}],
    6 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            e.UEM = e.UEM || {},
            e.UEM.query = r(),
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = e.UEM.query: "function" == typeof define && define.cmd && define(function(t, n, o) {
                o.exports = e.UEM.query
            })
        } (void 0 || window,
        function() {
            return !
            function() {
                function e(e) {
                    var n = this;
                    return n.selectors = "",
                    n.els = [],
                    n.promise = new t.Promise,
                    "object" == ("undefined" == typeof e ? "undefined": o(e)) ? n.els.push(e) : "string" == typeof e && (e = e.trim(), t.generator.init(n, e) || (n.selectors = e, n._initEls(n, e))),
                    n
                }
                e.prototype._initEls = function(e, n) {
                    var o = t.cache.get(n);
                    o ? e.els = o: (e.els = document.querySelectorAll.call(document, n), e.els && e.els.length && t.cache.set(n, e.els))
                };
                var t = window.$ = function(t) {
                    return new e(t)
                };
                t.init = function() {
                    t.method.setup(e)
                }
            } (),
            function() {
                function e() {
                    this.state = 1,
                    this._thens = []
                }
                e.prototype.resolve = function() {
                    var e = this._thens.shift();
                    this.state = 1,
                    e && e()
                },
                e.prototype.then = function(e) {
                    this.state ? (this.state = 0, e()) : this._thens.push(e)
                },
                window.$.Promise = e
            } (),
            function() {
                function e() {
                    for (var e = o.length,
                    t = []; e--;) t = t.concat(window.$.method[o[e]]);
                    return t
                }
                function t(e, t) {
                    return "find" === e || "get" === e ? !0 : t.length || -1 === r.indexOf(e) ? 1 === t.length && -1 !== i.indexOf(e) ? !0 : "style" === e && t && 1 === t.length && window.$.method.style.isSync(t[0]) ? !0 : void 0 : !0
                }
                function n(e, n) {
                    return function() {
                        var o = this,
                        r = arguments;
                        return t(e, r) ? n(o, r) : (this.promise.then(function() {
                            n(o, r)
                        }), this)
                    }
                }
                var o = ["attribute", "node", "class", "display", "event", "time", "search", "style", "func"],
                r = ["text", "html", "value", "class"],
                i = ["hasClass", "attr"];
                window.$.method = {
                    push: function(e) {
                        o.push(e)
                    },
                    setup: function(t) {
                        for (var o = e(), r = 0; r < o.length;) t.prototype[o[r]] = n(o[r], o[r += 1]),
                        ++r
                    },
                    exec: function(e, t) {
                        for (var n = 0; n < e.els.length;) t.call(e, e.els[n], n),
                        ++n
                    }
                }
            } (),
            function() {
                function e(e, t) {
                    for (var n; null !== (n = s.exec(t));) e.setAttribute(n[1], n[2])
                }
                function t(t) {
                    var n = i.exec(t),
                    o = document.createElement(n[1].split(" ")[0]);
                    return e(o, n[1]),
                    o
                }
                function n(t) {
                    var n = a.exec(t),
                    o = document.createElement(n[1].split(" ")[0]);
                    return e(o, n[1]),
                    o.innerHTML = n[2],
                    o
                }
                function o(e) {
                    return ! (i.test(e) || a.test(e))
                }
                function r(e, o) {
                    var r;
                    return r = i.test(o) ? t(o) : n(o),
                    e.els.push(r)
                }
                var i = /^<([^>]+)>$/,
                a = /^<([^>]+)>([\s\S]*)<\/[^>]+>$/,
                s = /([^=^\s]*)="([^"]*)"/g;
                window.$.generator = {
                    init: function(e, t) {
                        return o(t) ? null: r(e, t)
                    }
                }
            } (),
            function() {
                var e = {};
                window.$.cache = {
                    get: function(t) {
                        return e[t]
                    },
                    set: function(t, n) {
                        e[t] = n
                    },
                    clear: function() {
                        e = {}
                    }
                }
            } (),
            function() {
                function e(e, t, n) {
                    return function(r, i) {
                        return "attr" !== n && void 0 !== i[0] || "attr" === n && void 0 !== i[1] ? (o.exec(r,
                        function(t) {
                            e(t, i[0], i[1])
                        }), void r.promise.resolve()) : t(r.els[0], i[0])
                    }
                }
                function t(t) {
                    return e(function(e, n) {
                        "html" === t && r.clear(),
                        e[i[t]] = n
                    },
                    function(e) {
                        return e[i[t]]
                    },
                    t)
                }
                function n() {
                    return e(function(e, t, n) {
                        e.setAttribute(t, n)
                    },
                    function(e, t) {
                        return e.getAttribute(t)
                    },
                    "attr")
                }
                var o = window.$.method,
                r = window.$.cache,
                i = {
                    text: "textContent",
                    html: "innerHTML",
                    value: "value",
                    "class": "className"
                };
                o.attribute = function() {
                    var e = [];
                    for (var o in i) i.hasOwnProperty(o) && (e.push(o), e.push(t(o)));
                    return e.push("attr"),
                    e.push(n()),
                    e
                } ()
            } (),
            function() {
                function e(e, t) {
                    for (var n = (t[0] || "").split(/\s+/), r = 0; r < n.length; r++) if (n[r].trim() && !o(n[r]).test(e.els[0].className)) return ! 1;
                    return ! 0
                }
                function t(e, t) {
                    r.exec(e,
                    function(e) {
                        o(t[0]).test(e.className) || (e.className += e.className ? " " + t[0] : t[0])
                    }),
                    i.clear(),
                    e.promise.resolve()
                }
                function n(e, t) {
                    r.exec(e,
                    function(e) {
                        e.className = e.className.replace(o(t[0]), " ").trim()
                    }),
                    i.clear(),
                    e.promise.resolve()
                }
                function o(e) {
                    return new RegExp("\\b" + e.trim() + "\\b")
                }
                var r = window.$.method,
                i = window.$.cache;
                r["class"] = ["hasClass", e, "addClass", t, "removeClass", n]
            } (),
            function() {
                function e(e, t) {
                    n.exec(e,
                    function(e) {
                        e.style.display = t[0] || "block"
                    }),
                    e.promise.resolve()
                }
                function t(e) {
                    n.exec(e,
                    function(e) {
                        e.style.display = "none"
                    }),
                    e.promise.resolve()
                }
                var n = window.$.method;
                n.display = ["show", e, "hide", t]
            } (),
            function() {
                function e(e, t) {
                    n.exec(e,
                    function(e) {
                        e.addEventListener(t[0], t[1], t[2])
                    }),
                    e.promise.resolve()
                }
                function t(e, t) {
                    n.exec(e,
                    function(e) {
                        e.removeEventListener(t[0], t[1], t[2])
                    }),
                    e.promise.resolve()
                }
                var n = window.$.method;
                n.event = ["on", e, "off", t]
            } (),
            function() {
                var e = window.$.method;
                window.$.method.func = ["exec",
                function(e, t) {
                    t[0](e),
                    e.promise.resolve()
                },
                "each",
                function(t, n) {
                    e.exec(t,
                    function(e, t) {
                        n[0]($(e), t)
                    })
                }]
            } (),
            function() {
                function e(e, t) {
                    r.exec(e,
                    function(e) {
                        e.appendChild(t[0].els[0])
                    }),
                    i.clear(),
                    e.promise.resolve()
                }
                function t(e, t) {
                    e.els[0].insertBefore(t[0].els[0], document.querySelector(t[1])),
                    i.clear(),
                    e.promise.resolve()
                }
                function n(e) {
                    r.exec(e,
                    function(e) {
                        e.innerHTML = ""
                    }),
                    i.clear(),
                    e.promise.resolve()
                }
                function o(e, t) {
                    r.exec(e,
                    function(e) {
                        t[0] ? Array.prototype.forEach.call(t[0].els,
                        function(t) {
                            e.removeChild(t)
                        }) : e.parentNode.removeChild(e)
                    }),
                    i.clear(),
                    e.promise.resolve()
                }
                var r = window.$.method,
                i = window.$.cache;
                r.node = ["append", e, "empty", n, "insert", t, "remove", o]
            } (),
            function() {
                function e(e) {
                    return e.els
                }
                function t(e) {
                    return e.els[0]
                }
                window.$.method.search = ["find", e, "get", t]
            } (),
            function() {
                function e(e, o) {
                    var s = o[0],
                    c = o[1];
                    return void 0 !== c || void 0 === c && !i(s) ? (a.exec(e,
                    function(e) {
                        var o = r(s);
                        o ? t(e, o) : n(e, s, c)
                    }), void e.promise.resolve()) : e.els[0].style[s]
                }
                function t(e, t) {
                    for (var n = t.length - 1; n > 0;) e.style[t[n - 1]] = t[n],
                    n -= 2
                }
                function n(e, t, n) {
                    return void 0 === n && i(t) ? e.style[o(t)] : void(e.style[o(t)] = n)
                }
                function o(e) {
                    for (var t = e.split("-"), n = 0, o = !0, r = ""; n < t.length;) t[n] && (o ? (r += t[n], o = !1) : r += t[n][0].toUpperCase() + t[n].substr(1)),
                    ++n;
                    return r
                }
                function r(e) {
                    if ( - 1 !== e.indexOf(":")) {
                        for (var t, n = e.split(";"), r = n.length, i = []; r--;) n[r] && (t = n[r].split(":"), i.push(o(t[0]).trim()), i.push(t[1].trim()));
                        return i
                    }
                    return null
                }
                function i(e) {
                    return - 1 === e.indexOf(":")
                }
                var a = window.$.method;
                a.style = ["style", e],
                a.style.isSync = i
            } (),
            function() {
                window.$.method.time = ["delay",
                function(e, t) {
                    setTimeout(function() {
                        e.promise.resolve()
                    },
                    t[0])
                }]
            } (),
            function() {
                window.$.init()
            } (),
            window.$
        })
    },
    {}],
    7 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) && (t.exports = r()),
            e && (e.UEM = e.UEM || {},
            e.UEM.resource = r())
        } (void 0,
        function() {
            function e() {
                this.createTime = +new Date,
                this.averageSpeed = v,
                this.resourceNum = 0,
                this.waitingNum = 0,
                this.lastWaitingNum = -1,
                this.lastPercent = 0,
                this.virtualFrame = 0,
                this.lastLogicPercent = 0,
                this.transitionPercent = 0,
                this.percent = 0
            }
            function t(e, n, o) {
                n < e.length ? (e[n].onload = function() {
                    t(e, ++n, o)
                },
                e[n].setAttribute("src", e[n].getAttribute("data-src"))) : o()
            }
            function n(e, t, n) {
                var r = 0,
                i = setInterval(function() {
                    r = o(e),
                    n(r),
                    1 === r && (clearInterval(i), t(b))
                },
                1e3 / h)
            }
            function o(e) {
                if (0 === e.resourceNum) return 1;
                var t = (e.resourceNum - e.waitingNum) / e.resourceNum,
                n = a(e),
                o = s(e),
                c = 0;
                return i(e),
                c = n >= o ? t === o ? t: e.lastPercent: e.lastPercent = n,
                r(e, c)
            }
            function r(e, t) {
                return e.logicPercent !== t && (e.logicPercent = t, e.transitionPercent = (e.logicPercent - e.percent) / y),
                e.percent += e.transitionPercent,
                e.percent > e.logicPercent && (e.percent = e.logicPercent),
                e.percent
            }
            function i(e) {
                e.lastWaitingNum === e.waitingNum ? ++e.virtualFrame: (e.lastWaitingNum = e.waitingNum, e.virtualFrame = 0)
            }
            function a(e) {
                var t = (e.resourceNum - e.waitingNum + e.virtualFrame * e.averageSpeed) / e.resourceNum;
                return e.lastPercent > t ? e.lastPercent: t
            }
            function s(e) {
                var t = 0,
                n = 4;
                return t = e.waitingNum >= n ? n: e.waitingNum,
                (e.resourceNum - e.waitingNum + t) / e.resourceNum
            }
            function c(e, t) {
                var n = 0;
                for (e.resourceNum = e.waitingNum = t.length; n < t.length;) {
                    var o = b[t[n]];
                    if (o) p(e, o, t[n])();
                    else {
                        switch (f(t[n])) {
                        case "STYLE":
                            o = l(t[n]);
                            break;
                        case "SCRIPT":
                            o = u(t[n]);
                            break;
                        case "AUDIO":
                            o = d(e, t[n]);
                            break;
                        default:
                            o = new Image
                        }
                        o instanceof Audio || (o.onload = p(e, o, t[n])),
                        "text/css" !== o.type && (o.src = t[n])
                    }++n
                }
            }
            function u() {
                var e = document.createElement("script");
                return window.document.body.appendChild(e),
                e
            }
            function l(e) {
                var t = document.createElement("link");
                return t.rel = "stylesheet",
                t.type = "text/css",
                t.href = e,
                window.document.getElementsByTagName("head")[0].appendChild(t),
                t
            }
            function d(e, t) {
                var n = new Audio;
                return n.autoplay = !1,
                n.preload = !0,
                p(e, n, t)(),
                n
            }
            function f(e) {
                var t = 0,
                n = "";
                for (n in w) if (w.hasOwnProperty(n)) for (t = w[n].length; t--;) if (e.indexOf("." + w[n][t]) > 0) return n
            }
            function p(e, t, n) {
                return function() {
                    setTimeout(function() {
                        b[n] = t,
                        --e.waitingNum,
                        e.averageSpeed = m(e)
                    },
                    50)
                }
            }
            function m(e) {
                return (e.resourceNum - e.waitingNum) / (( + new Date - e.createTime) / (1e3 / h))
            }
            var g = {},
            h = 15,
            w = {
                STYLE: ["css"],
                SCRIPT: ["js"],
                IMG: ["jpg", "png", "gif", "webp"],
                AUDIO: ["mp3", "ogg", "wav"]
            },
            y = 4,
            v = .2,
            b = {};
            return g.loadEssentialResource = function(t, o, r) {
                var i = new e;
                c(i, t),
                n(i, o ||
                function() {},
                r ||
                function() {})
            },
            g.loadContentResource = function(e, n) {
                t(document.querySelectorAll(e + " [data-src]"), 0, n ||
                function() {})
            },
            g.getResource = function(e) {
                return b[e]
            },
            g
        })
    },
    {}],
    8 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(r, i) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = i(e("./../../ua/src/ua.js"), e("./../../network/index.js"), e("./../../jweixin/src/jweixin.js")) : (r.UEM = r.UEM || {},
            r.UEM.net = i(r.UEM.ua, r.net, r.wx))
        } (void 0,
        function(e, t, n) {
            function o(t) {
                t.title = t.title || "",
                t.desc = t.desc || "",
                t.link = t.link || "http://uc.cn",
                r(t),
                i(t),
                t.platform = t.platform || "",
                t.disableTarget = "",
                t.domId = t.domId || "",
                t.showWechatMask = t.showWechatMask ||
                function() {},
                t.weiboRuleId = t.weiboRuleId || 106,
                t.weiboActivityId = t.weiboActivityId || 261,
                e.isIOS() ? t.platform = y[t.platform] : t.disablePlatform && 0 !== t.disablePlatform.length && (t.disableTarget = t.disablePlatform.toString())
            }
            function r(n) { - 1 === n.link.indexOf("entry=") && (n.link = t.parseQuery({
                    entry: v[e.pf]
                },
                n.link))
            }
            function i(e) { - 1 === e.link.indexOf("origin=") && (e.link = t.parseQuery({
                    origin: t.query("origin")
                },
                e.link))
            }
            function a(e) {
                n.ready(function() {
                    n.onMenuShareTimeline(e),
                    n.onMenuShareAppMessage(e),
                    n.onMenuShareQQ(e)
                })
            }
            function s(e) {
                window.location.href = "http://connect.qq.com/widget/shareqq/index.html?url=" + encodeURIComponent(e.link) + "&desc=" + encodeURIComponent(e.desc) + "&title=" + encodeURIComponent(e.title) + "&pics=" + encodeURIComponent(e.imgUrl)
            }
            function c(e) {
                window.location.href = "http://rec.uc.cn/actplat/sharetheme/service/index?uc_param_str=nidnssbifrpfuacpve&userId=&ruleId=" + e.weiboRuleId + "&activityId=" + e.weiboActivityId + "&content=" + encodeURIComponent(e.desc) + "&title=" + encodeURIComponent(e.title) + "&url=" + encodeURIComponent(e.link) + "&imgUrl=" + encodeURIComponent(e.imgUrl) + "&backUrl=&site=sina"
            }
            function u(t) {
                try {
                    e.isIOS() ? d(t) : l(t)
                } catch(n) {}
            }
            function l(e) {
                ucweb.startRequest("shell.page_share", [e.title, e.desc, e.link, e.platform, e.disableTarget, "", h(e.domId)])
            }
            function d(e) {
                ucbrowser.web_share(e.title, e.desc, e.link, e.platform, "", "", e.domId)
            }
            function f(e) {
                var t = e.offsetTop;
                return t += null != e.offsetParent ? t += f(e.offsetParent) : 0
            }
            function p(e) {
                var t = e.offsetLeft;
                return t += null != e.offsetParent ? p(e.offsetParent) : 0
            }
            function m(e) {
                var t, n = getComputedStyle(e, null).webkitTransform;
                return t = "none" === n ? 0 : parseInt(n.split(",")[5].replace(")", ""), 10),
                t += "BODY" !== e.parentNode.tagName ? m(e.parentNode) : 0
            }
            function g(e) {
                var t, n = getComputedStyle(e, null).webkitTransform;
                return t = "none" === n ? 0 : parseInt(n.split(",")[4], 10),
                t += "BODY" !== e.parentNode.tagName ? g(e.parentNode) : 0
            }
            function h(e) {
                var t = document.getElementById(e);
                if (t) {
                    var n = [p(t) + g(t), f(t) + m(t), t.offsetWidth, t.offsetHeight];
                    return n
                }
                return ""
            }
            var w = {};
            w.init = function(t) {
                "WECHAT" === e.pf && (o(t), t.jsApiConf.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"], n.config(t.jsApiConf), a(t))
            },
            w.share = function(t) {
                switch (o(t), e.pf) {
                case "UC":
                    u(t);
                    break;
                case "WECHAT":
                    a(t),
                    t.showWechatMask();
                    break;
                case "WEIBO":
                    c(t);
                    break;
                default:
                    s(t)
                }
            };
            var y = {
                SinaWeibo: "kSinaWeibo",
                WechatFriends: "kWeixin",
                WechatTimeline: "kWeixinFriend"
            },
            v = {
                UC: "ucshare",
                WECHAT: "wechatshare",
                QQ: "qqshare",
                WEIBO: "weiboshare"
            };
            return w
        })
    },
    {
        "./../../jweixin/src/jweixin.js": 2,
        "./../../network/index.js": 4,
        "./../../ua/src/ua.js": 11
    }],
    9 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = r() : (e.UEM = e.UEM || {},
            e.UEM.encrypt = r())
        } (void 0,
        function() {
            var e = function() {},
            t = {};
            return e.config = {
                dig: 32,
                el: 1,
                kl: 2,
                ke: 2,
                wd: 14,
                kd: 13
            },
            e.relation = {
                9 : ["p", "m"],
                8 : ["o", "l"],
                7 : ["i", "k"],
                6 : ["u", "j"],
                5 : ["y", "h"],
                4 : ["t", "g"],
                3 : ["r", "f"],
                2 : ["e", "d"],
                1 : ["w", "s", "x"],
                0 : ["q", "a", "z"],
                ".": ["n", "b"],
                "-": ["v", "c"]
            },
            e.cw = function(t, n) {
                return "number" != typeof t || isNaN(t) || "number" != typeof n || isNaN(n) ? !1 : (t + "").length > e.config.wd || (n + "").length > e.config.kd ? !1 : !0
            },
            e.insert = function(e, t, n) {
                return e.substr(0, t) + n + e.substr(t)
            },
            e.convert = function(t, n) {
                t += "",
                n += "";
                var o = t.length,
                r = e.ran(o),
                i = n.length;
                return i = (10 > i ? "0": "") + i,
                r = (10 > r ? "0": "") + r,
                r + i + e.insert(t, r, n)
            },
            e.ran = function(e) {
                return Math.floor(Math.random() * e)
            },
            e.hash = function(t) {
                for (var n = e.config.dig - t.length; n--;) t = e.insert(t, e.ran(t.length), e.ran(10));
                return t
            },
            e.ct = function(t) {
                return t[e.ran(t.length)]
            },
            t.encode = e.encode = function(t, n) {
                if (e.cw(t, n)) {
                    t = e.convert(t, n);
                    for (var o, r = t.length,
                    i = e.relation,
                    a = e.ran(10), s = e.ct(i[a]); r--;) o = "." !== t[r] && "-" !== t[r] ? i[(Math.floor(t[r]) + a) % 10] : i[t[r]],
                    s += e.ct(o);
                    return e.hash(s)
                }
            },
            e.cc = function(e, t) {
                return "string" != typeof e || "number" != typeof t || isNaN(t) ? !1 : !0
            },
            e.initIndex = function() {
                if (!e.index) {
                    var t, n, o = e.index = {},
                    r = e.relation;
                    for (t in r) if (r.hasOwnProperty(t)) for (n = r[t].length; n--;) o[r[t][n]] = t
                }
            },
            e.clear = function(e) {
                for (var t = "",
                n = 0; n < e.length;) isNaN(parseInt(e[n], 10)) && (t += e[n]),
                ++n;
                return t
            },
            t.decode = e.decode = function(t, n) {
                if (e.cc(t, n)) {
                    e.initIndex(),
                    t = e.clear(t);
                    for (var o, r, i, a = e.index,
                    s = a[t[0]], c = "", u = t.length; u-->1;) o = a[t[u]],
                    "." !== o && "-" !== o && (o -= s, o = 0 > o ? o + 10 : o),
                    c += o;
                    r = Math.floor(c.substr(0, e.config.ke)),
                    i = Math.floor(c.substr(e.config.ke, e.config.kl));
                    var l = e.config.ke + e.config.kl,
                    d = r + l;
                    if (Math.floor(c.substr(d, i)) === n) return parseFloat(c.substr(l, r) + c.substr(d + i))
                }
            },
            t
        })
    },
    {}],
    10 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = r() : (e.UEM = e.UEM || {},
            e.UEM.taobao = r())
        } (void 0 || window,
        function() {
            function e(e) {
                var t = E();
                v.ucbrowser.getAccountInfo(t,
                function(n) {
                    var o = JSON.parse(n);
                    o.verificationCode = t,
                    e(o)
                })
            }
            function t(e) {
                return w = e,
                v.ucweb ? a(function(t) {
                    if (t) {
                        var n = E();
                        y = "getCallback(" + n + ' ,"##RESULT##", "##SIGN##", "##KPS##", "##NICKNAME##");',
                        v.ucweb.startRequest("shell.taobao.getLoginInfo", [n, y])
                    } else e()
                }) : e(),
                h
            }
            function n() {
                v.ucbrowser.requestTBUserToLogin()
            }
            function o() {
                if (v.ucweb) {
                    var e = E();
                    y = "loginCallback();",
                    v.ucweb.startRequest("shell.taobao.getLoginInfo", [e, y])
                }
            }
            function r(e) {
                g() ? d(i, e) : a(e)
            }
            function i(t) {
                e(function(e) {
                    t(f(e.result) ? !0 : !1)
                })
            }
            function a(e) {
                v.ucweb && "true" === v.ucweb.startRequest("shell.taobao.isLogined", [""]) ? e(!0) : (h = void 0, e(!1))
            }
            function s() {
                v.ucbrowser.openUserCenter()
            }
            function c() {
                v.ucweb.startRequest("shell.account.invoke", [""])
            }
            function u(e) {
                v.ucbrowser.getTBUserAvatar(function(t) {
                    e(t)
                })
            }
            function l(e) {
                e(v.ucweb.startRequest("shell.taobao.getAvatar", [""]))
            }
            function d(e, t) {
                v.ucbrowser ? e(t) : b.addEventListener("UCBrowserReady",
                function() {
                    e(t)
                },
                !1)
            }
            function f(e) {
                return - 1 !== e.indexOf("success") ? !0 : !1
            }
            function p(e, t, n, o) {
                return {
                    result: "success",
                    kps: e,
                    sign: t,
                    verificationCode: n,
                    nickname: o
                }
            }
            function m(e, t) {
                function n() {
                    var n = document.createEvent("Event");
                    return n.initEvent(e, !0, !0),
                    n.detail = t,
                    n
                }
                if (v.CustomEvent) try {
                    return new CustomEvent(e, {
                        detail: t
                    })
                } catch(o) {
                    n()
                } else n()
            }
            function g() {
                return - 1 !== v.navigator.userAgent.toLowerCase().indexOf("iphone") ? !0 : !1
            }
            var h, w, y, v = window,
            b = document,
            C = {},
            E = function() {
                return new Date % 1e9 + 1e8
            };
            return C.customVCode = function(e) {
                E = e
            },
            C.getInfo = function(n) {
                g() ? d(e, n) : t(n)
            },
            C.login = function() {
                g() ? d(n) : o()
            },
            C.checkLogin = r,
            C.userCenter = function() {
                g() ? d(s) : c()
            },
            C.getAvatar = function(e) {
                g() ? d(u, e) : l(e)
            },
            v.loginCallback = function() {
                b.dispatchEvent(m("cmp-after-login"))
            },
            b.addEventListener("on_tb_user_login",
            function() {
                b.dispatchEvent(m("cmp-after-login"))
            }),
            v.getCallback = function(e, t, n, o, r) {
                f(t) ? w(p(o, n, e, r)) : w()
            },
            C
        })
    },
    {}],
    11 : [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(e, r) {
            "object" === ("undefined" == typeof n ? "undefined": o(n)) ? t.exports = r() : "function" == typeof define && define.amd ? define(function() {
                return r()
            }) : "function" == typeof define && define.cmd ? define(function(e, t, n) {
                n.exports = r()
            }) : (e.UEM = e.UEM || {},
            e.UEM.ua = r())
        } (void 0,
        function() {
            function e() {
                for (var e = ( + new Date + "").substr(2, 10), t = 32; e.length < t;) e += parseInt(10 * Math.random(), 10);
                return e
            }
            var t = {},
            n = window.navigator.userAgent.toLowerCase(),
            o = "";
            return t.isIOS = function() {
                return n.indexOf("iphone") > 0
            },
            t.os = t.isIOS() ? "IOS": "ANDROID",
            o = n.indexOf("ucbrowser") >= 0 ? "UC": n.indexOf("micromessenger") >= 0 ? "WECHAT": new RegExp("qq/\\d+\\.\\d+\\.\\d+\\.\\d+", "i").test(n) ? "QQ": new RegExp("weibo__\\d+\\.\\d+\\.\\d+", "i").test(n) ? "WEIBO": "OTHERS",
            t.pf = o,
            t.getSessionId = function() {
                try {
                    var t = "UEM_SESSION_ID",
                    n = window.localStorage.getItem(t);
                    return n && n.length ? n: (n = e(), window.localStorage.setItem(t, n), n)
                } catch(o) {
                    return ""
                }
            },
            t.getSessionId(),
            t.getUCVersion = function() {
                var e = /ucbrowser\/([^\s]*)/.exec(n);
                return e && 2 === e.length ? e[1] : ""
            },
            t.isUCLatestVersion = function(e) {
                var n = t.getUCVersion();
                if (!n.length) return ! 1;
                for (var o = n.split("."), r = e.split("."), i = 0; i < r.length;) {
                    if (parseInt(o[i], 10) < parseInt(r[i], 10)) return ! 1; ++i
                }
                return ! 0
            },
            t
        })
    },
    {}],
    12 : [function(e, t) {
        "use strict";
        var n = {};
        n.pages = {},
        n.assign = {},
        n.dispatch = function(e, t) {
            t = t || {},
            t.actionType = e,
            (this.assign[e] ||
            function() {})(t)
        },
        n.register = function(e, t) {
            this.assign[e] = t
        },
        n.setupPages = function(e) {
            return this.pages = e
        },
        t.exports = n
    },
    {}],
    13 : [function(e, t, n) {
        "use strict";
        function o() {
            u.dispatch("downloadBanner");
            var e = l.isIOS() ? "IOS": "ANDROID";
            "UC" === l.pf && l.isUCLatestVersion(CONF.LATEST_UC_VERSION[e]) ? window.location.href = CONF.MAIN_MEETING_PAGE: ("WECHAT" === l.pf && (e += "_WECHAT"), window.location.href = CONF.DOWNLOAD_URL[e])
        }
        function r() {
            p.style("z-index", 1e3).show()
        }
        function i() {
            p.style("z-index", -1e3).hide()
        }
        function a() {
            if ("UC" === l.pf) {
                var e = l.isIOS() ? "IOS": "ANDROID";
                return l.isUCLatestVersion(CONF.LATEST_UC_VERSION[e]) ? 0 : 1
            }
            return 2
        }
        var s = e("./../../bower_components/query/src/query.js"),
        c = e("./../../bower_components/resource/src/resource.js"),
        u = e("../dispatcher"),
        l = e("./../../bower_components/ua/src/ua.js"),
        d = !1,
        f = !1,
        p = s("#banner-go-uc"),
        m = a();
        n.show = function() {
            f = !0,
            d ? r() : (d = !0, CONF.RESOURCE.GO_UC.push(CONF.RESOURCE.GO_UC_BANNER[m]), setTimeout(function() {
                c.loadEssentialResource(CONF.RESOURCE.GO_UC,
                function() {
                    f && (p.on("touchstart", o), r(), s("#page-result").style("padding-bottom", "0.11rem"), s("#banner-go-uc .banner-desc").style("background-image", "url(" + CONF.RESOURCE.GO_UC_BANNER[m] + ")").style("background-size: cover;"))
                })
            },
            100))
        },
        n.hide = function() {
            f = !1,
            i()
        },
        n.download = o
    },
    {
        "../dispatcher": 12,
        "./../../bower_components/query/src/query.js": 6,
        "./../../bower_components/resource/src/resource.js": 7,
        "./../../bower_components/ua/src/ua.js": 11
    }],
    14 : [function(e, t) {
        t.exports = '<p><img src="images/hey.png"></p>\n<p>领现金活动还没开始</p>\n<p>3月19日 11:00/15:00/18:00 开抢</p>\n'
    },
    {}],
    15 : [function(e, t, n) {
        "use strict";
        function o() {
            i.show(e("./error.html"))
        }
        function r(t, n, r) {
            switch ((t || "").code) {
            case "000":
            case "700":
                n && n();
                break;
            case "611":
                i.show(e("./rebind.html"));
                break;
            default:
                o(),
                r && r(),
                s.logEvent("error", "check-or-bind", {
                    res: JSON.stringify(t)
                })
            }
        }
        var i = e("../modal"),
        a = e("./../../bower_components/ua/src/ua.js"),
        s = e("./../../bower_components/log/index.js"),
        c = e("./../../bower_components/taobao/index.js"),
        u = e("./../../bower_components/network/index.js"),
        l = void 0;
        c.customVCode(function() {
            return Date.now()
        });
        var d = n.login = function(e) {
            var t = "cmp-after-login",
            n = function o() {
                e && setTimeout(e, 300),
                setTimeout(function() {
                    document.removeEventListener(t, o)
                },
                1e3)
            };
            document.addEventListener(t, n),
            c.login()
        },
        f = n.getInfo = function(e) {
            "UC" === a.pf ? c.checkLogin(function(t) {
                function n() {
                    c.getInfo(function(t) {
                        e(t)
                    })
                }
                t ? n() : d(n)
            }) : s.logEvent("error", "notuc", {
                pf: a.pf
            })
        };
        n.bind = function(e, t) {
            f(function(n) {
                e && (n.wechat = !0, n.are = t, n.magic = location.pathname.split("/").pop()),
                u.post("/luck/bind", n,
                function(e) {
                    return r(e,
                    function() {
                        return u.redirect("/luck/home?uc_biz_str=S%3Acustom%7CC%3Atitlebar_hover_2")
                    })
                },
                o)
            })
        },
        n.check = function(e, t) {
            f(function(n) {
                u.post("/luck/check", n,
                function(n) {
                    return r(n,
                    function() {
                        l = n.data || {},
                        e && e(l)
                    },
                    t)
                },
                function(e) {
                    o(),
                    t(),
                    s.logEvent("error", "check-xhr", {
                        msg: (e.customError || "").message
                    })
                })
            })
        },
        n.getData = function() {
            return l
        }
    },
    {
        "../modal": 28,
        "./../../bower_components/log/index.js": 3,
        "./../../bower_components/network/index.js": 4,
        "./../../bower_components/taobao/index.js": 10,
        "./../../bower_components/ua/src/ua.js": 11,
        "./error.html": 14,
        "./rebind.html": 16
    }],
    16 : [function(e, t) {
        t.exports = '<p><img src="images/oops.png"></p>\n<div class="mt">\n  <p>你已绑定过一个淘宝帐号</p>\n  <p>要登录原淘宝帐号才可以喔</p>\n</div>\n<p><button class="btn red cmp-modal-hide">好的</button></p>\n'
    },
    {}],
    17 : [function(e, t, n) {
        "use strict";
        function o(e) {
            $("#cmp-friends").html(r($("#tpl-cmp-friends").html(), {
                data: e,
                format: i.format,
                filter: window.FILTER
            }))
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.render = o;
        var r = (e("./../../bower_components/network/index.js"), e("silly-ejs")),
        i = e("silly-datetime")
    },
    {
        "./../../bower_components/network/index.js": 4,
        "silly-datetime": 47,
        "silly-ejs": 48
    }],
    18 : [function(e, t) {
        t.exports = '<section class="mask-error">\n    <div class="wrap-error-notice">\n        <div class="error-animation"></div>\n        <div class="error-roll"></div>\n        <div class="error-notice">\n            <p>活动太火爆了</p>\n            <p>请稍后刷新再试哦~</p>\n        </div>\n    </div>\n</section>'
    },
    {}],
    19 : [function(e, t) {
        t.exports = '<section class="mask-game-fail">\n    <div class="img-fail"></div>\n    <p>成绩好像不太理想呢</p>\n    <div class="btn-retry button">再玩一次</div>\n</section>'
    },
    {}],
    20 : [function(e, t) {
        t.exports = '<section class="mask-game-teach">\n    <p>左右点击</p>\n    <p>收集<span class="rule-coin"></span>，避开\n        <span class="rule-obstacle-car"></span>\n        <span class="rule-traffic-cone"></span>\n        <span class="rule-traffic-cone"></span>\n    </p>\n    <div class="gesture-teach">\n        <div class="gesture-point-left"></div>\n        <div class="gesture-point-right"></div>\n        <div class="gesture-left"></div>\n        <div class="gesture-right"></div>\n    </div>\n    <div class="btn-i-know">&nbsp;&nbsp;我知道了</div>\n</section>'
    },
    {}],
    21 : [function(e, t) {
        t.exports = '<section class="mask-loading">\n    <div class="wrap-loading">\n        <div class="loading-road">\n            <div class="loading-road-top"></div>\n            <div class="loading-road-bottom1"></div>\n            <div class="loading-road-bottom2"></div>\n            <div class="loading-road-line1"></div>\n            <div class="loading-road-line2"></div>\n            <div class="loading-road-line3"></div>\n            <div class="loading-brush"></div>\n        </div>\n        <p class="loading-desc">&nbsp;&nbsp;&nbsp;赛道开启中...</p>\n    </div>\n</section>'
    },
    {}],
    22 : [function(e, t, n) {
        "use strict";
        var o = e("../dispatcher"),
        r = $(e("./orientation.html")),
        i = $(e("./game-teach.html")),
        a = $(e("./game-fail.html")),
        s = $(e("./mission-completed.html")),
        c = $(e("./wechat.html")),
        u = $(e("./uc-share.html")),
        l = $(e("./error.html")),
        d = $(e("./loading.html")),
        f = !1;
        n.showOrientation = function() {
            f || ($("body").append(r), f = !0)
        },
        n.hideOrientation = function() {
            try {
                $("body").remove(r),
                f = !1
            } catch(e) {}
        };
        var p = !1;
        n.showGameTeach = function() {
            $("body").append(i),
            p || (p = !0, $(".btn-i-know").on("touchstart",
            function(e) {
                e.stopPropagation(),
                e.preventDefault();
                try {
                    $("body").remove(i)
                } catch(e) {}
                o.dispatch("iKnow")
            }))
        };
        var m = !1;
        n.showGameFail = function() {
            $("body").append(a),
            m || (m = !0, $(".btn-retry").on("touchstart",
            function(e) {
                e.stopPropagation(),
                e.preventDefault();
                try {
                    $("body").remove(a)
                } catch(e) {}
                o.dispatch("gameTouch"),
                o.dispatch("retry")
            }))
        };
        var g = !1;
        n.showMissionCompleted = function() {
            $("body").append(s),
            g || (g = !0, $(".mask-mission-completed").on("touchstart",
            function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                o.dispatch("gameTouch")
            }))
        },
        n.hideMissionCompleted = function() {
            $("body").remove(s)
        },
        n.showWechat = function() {
            $("body").append(c)
        },
        c.on("touchstart",
        function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            $("body").remove(c)
        });
        var h = !1;
        n.showUcShare = function() {
            $("body").append(u),
            CONF.WECHAT_TIMELINE_BLOCK && ($(".icon-friend").hide(), $(".icon-timeline").style("right:0.265rem")),
            h || (h = !0, $(".wrap-uc-share .icon-friend").on("touchstart",
            function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                $("body").remove(u).delay(100).exec(function() {
                    o.dispatch("ucShareFriend")
                })
            }), $(".wrap-uc-share .icon-timeline").on("touchstart",
            function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                $("body").remove(u).delay(100).exec(function() {
                    o.dispatch("ucShareTimeline")
                })
            }))
        },
        u.on("touchstart",
        function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            $("body").remove(u)
        }),
        n.showError = function() {
            $("body").append(l)
        },
        n.showLoading = function() {
            $("body").append(d)
        },
        n.hideLoading = function() {
            $("body").remove(d)
        }
    },
    {
        "../dispatcher": 12,
        "./error.html": 18,
        "./game-fail.html": 19,
        "./game-teach.html": 20,
        "./loading.html": 21,
        "./mission-completed.html": 23,
        "./orientation.html": 24,
        "./uc-share.html": 25,
        "./wechat.html": 26
    }],
    23 : [function(e, t) {
        t.exports = '<section class="mask-mission-completed">\n    <div></div>\n</section>'
    },
    {}],
    24 : [function(e, t) {
        t.exports = '<section id="mask-orientation">\n    <p>竖屏体验更佳噢(￣ ﹌ ￣)</p>\n</section>'
    },
    {}],
    25 : [function(e, t) {
        t.exports = '<section class="mask-uc-share">\n    <div class="wrap-uc-share">\n        <div class="icon-friend"></div>\n        <div class="icon-timeline"></div>\n        <div class="share-desc">\n            <p>集齐319金币，记得回来领现金</p>\n            <p>搜索”319“即可</p>\n        </div>\n    </div>\n</section>'
    },
    {}],
    26 : [function(e, t) {
        t.exports = '<section class="mask-wechat">\n    <div class="share-notice"></div>\n    <div class="share-car">\n        <div class="share-smoke"></div>\n    </div>\n</section>'
    },
    {}],
    27 : [function(e, t) {
        t.exports = '<div class="bg cmp-modal-hide"></div>\n<div class="wrap">\n  <div class="ctx"><%- html %></div>\n</div>\n'
    },
    {}],
    28 : [function(e, t, n) {
        "use strict";
        function o(e, t) {
            return new RegExp("\\b" + t + "\\b").test(e.className)
        }
        function r() {
            l && (l.style.display = "none"),
            d && d()
        }
        function i(e, t, n) {
            if (n && r(), !l) {
                l = document.createElement("div"),
                l.className = s,
                l.addEventListener("click",
                function(e) {
                    o(e.target, s + "-hide") && r()
                });
                var i = document.getElementById("body") || document.body;
                i.appendChild(l)
            }
            l.innerHTML = e,
            l.style.display = "block",
            d = t
        }
        function a(e) {
            for (var t = arguments.length,
            n = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++) n[o - 1] = arguments[o];
            i.apply(void 0, [c(u, {
                html: e
            })].concat(n))
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.hide = r,
        n.showRaw = i,
        n.show = a;
        var s = "cmp-modal",
        c = e("silly-ejs"),
        u = e("./modal.html"),
        l = void 0,
        d = void 0
    },
    {
        "./modal.html": 27,
        "silly-ejs": 48
    }],
    29 : [function(e, t, n) {
        "use strict";
        var o = e("./../../bower_components/resource/src/resource.js"),
        r = !1,
        i = null;
        n.playBgm = function() {
            i = o.getResource(CONF.RESOURCE.GAME_MUSIC[0]);
            try {
                i.current = 0
            } catch(e) {}
            i.loop = !0,
            i.play(),
            r = !0
        },
        n.pauseBgm = function() {
            i.loop = !1,
            i.pause(),
            r = !1
        };
        var a = null;
        n.play321Go = function() {
            a = o.getResource(CONF.RESOURCE.GAME_MUSIC[1]);
            try {
                a.current = 0
            } catch(e) {}
            a.loop = !1,
            a.play()
        };
        var s = null;
        n.playGameover = function() {
            s = o.getResource(CONF.RESOURCE.GAME_MUSIC[2]);
            try {
                s.current = 0
            } catch(e) {}
            s.loop = !1,
            s.play()
        },
        n.isPlayingBgm = function() {
            return r
        }
    },
    {
        "./../../bower_components/resource/src/resource.js": 7
    }],
    30 : [function(e, t, n) {
        "use strict";
        function o(e, t) {
            return 2 === e.type && 2 === t.type ? !0 : 2 === e.type && 3 === t.type || 3 === e.type && 2 === t.type ? !0 : r(e, t) ? !0 : i(e, t) ? !0 : void 0
        }
        function r(e, t) {
            return 3 === e.type && 4 === t.type || 4 === e.type && 3 === t.type
        }
        function i(e, t) {
            return 3 === e.type && 5 === t.type && !t.collision || 5 === e.type && !e.collision && 3 === t.type
        }
        function a(e, t, n, o, r, i, a, s) {
            if (1 === e) {
                var c = 4 === r.type ? i: a,
                d = t[c],
                f = l.calculatePosition(n, d.coord, o());
                f[0] /= CONF.RESOLUTION_RATIO,
                f[1] /= CONF.RESOLUTION_RATIO,
                u.dispatch("eatCoin", {
                    collisionCoord: f
                }),
                s.push(d)
            }
        }
        function s(e, t, n, o, r, i, a, s, c, f) {
            var p = 5 === i.type ? a: s;
            if (t[p].collision = !0, ++r[t[p].dir], !f && 1 === e) {
                var m = 3 === i.type ? a: s,
                g = t[m],
                h = l.calculatePosition(n, g.coord, o());
                return h[0] /= CONF.RESOLUTION_RATIO,
                h[1] /= CONF.RESOLUTION_RATIO,
                u.dispatch("collisionTrafficCone", {
                    collisionCoord: h
                }),
                d.showCrashComment(),
                !0
            }
        }
        function c(e, t, n, o, r, i, a, s, c, p, m, g, h, w, y, v) {
            if ((3 === a.type || 3 === s.type) && 1 === e) {
                var b = 3 === a.type ? r: i,
                C = t[b],
                E = l.calculatePosition(n, C.coord, o());
                E[0] /= CONF.RESOLUTION_RATIO,
                E[1] /= CONF.RESOLUTION_RATIO,
                u.dispatch("collisionCar", {
                    collisionCoord: E
                }),
                d.showCrashComment()
            }
            var S = .6;
            if (Math.abs(a.coord[2] - s.coord[2]) < f) {
                var I = a.speedX - s.speedX;
                a.speedX -= I * S,
                s.speedX += I * S,
                a.coord[0] -= ((c - p + (h - p)) / 2 - (s.coord[0] - a.coord[0])) / 2,
                s.coord[0] += ((c - p + (h - p)) / 2 - (s.coord[0] - a.coord[0])) / 2
            } else {
                var O = a.speedZ - s.speedZ;
                a.speedZ -= O * S,
                s.speedZ += O * S,
                a.coord[2] -= ((g - m + (v - m)) / 2 - (s.coord[2] - a.coord[2])) / 2,
                s.coord[2] += ((g - m + (v - m)) / 2 - (s.coord[2] - a.coord[2])) / 2
            }
        }
        var u = e("../dispatcher"),
        l = e("./renderer"),
        d = e("./dom-animation"),
        f = .5;
        n.handleObjectCollision = function(e, t, n, u, l, d, f) {
            for (var p = 0,
            m = 0,
            g = !1,
            h = !1,
            w = []; p < t.length - 1;) {
                for (m = p + 1; m < t.length;) {
                    var y = t[p],
                    v = t[m];
                    if (o(y, v)) {
                        var b = y.geometry,
                        C = v.geometry,
                        E = y.coord[0] + b[0][0],
                        S = y.coord[0] + b[1][0],
                        I = v.coord[0] + C[0][0],
                        O = v.coord[0] + C[1][0],
                        _ = y.coord[2] + b[0][2],
                        N = y.coord[2] + b[2][2],
                        T = v.coord[2] + C[0][2],
                        R = v.coord[2] + C[2][2];
                        S > I && O > E && N > T && R > _ && (r(y, v) ? a(e, t, n, l, y, p, m, w) : (y.speedZ < v.speedZ || y.coord[2] > v.coord[2]) && ((3 === y.type || 3 === v.type) && (g = !0), i(y, v) ? s(e, t, n, l, u, y, p, m, w, h) && (h = !0) : c(e, t, n, l, p, m, y, v, S, E, _, N, O, I, T, R)))
                    }++m
                }++p
            }
            g && new f,
            d(w)
        }
    },
    {
        "../dispatcher": 12,
        "./dom-animation": 31,
        "./renderer": 38
    }],
    31 : [function(e, t, n) {
        "use strict";
        function o(e) {
            $(".star-comment-wrap").show(),
            ++u,
            $(".star-comment-wrap .comment").text(e),
            $(".star-comment-wrap").removeClass("star-close").addClass("star-open"),
            setTimeout(function() {
                $(".star-comment-wrap").removeClass("star-open").addClass("star-close").delay(300).exec(function() {
                    1 === u && $(".star-comment-wrap .comment").text(""),
                    --u
                })
            },
            CONF.COMMENT_DURATION)
        }
        function r(e, t) {
            if (3 === t) $(".sketch").style("-webkit-transform: translateY(0.02rem)");
            else {
                var n = e / CONF.TOTALL_DISTANCE * f;
                p - n > .003 && ($(".sketch").style("-webkit-transform: translateY(" + n + "rem)"), p = n)
            }
        }
        function i(e) {
            $(".game-status .coin-num").text(e.coinNum),
            C = (e.coinNum + "").length,
            $(".coin-num-before").style("left: " + b[C - 1] + "rem")
        }
        function a(e, t) {
            if (4 === e.collisionObjectType) {
                var n = $('<div class="coin-eated"></div>');
                n.style("-webkit-transform", "translate3d(" + c.calculateRem(e.collisionCoord[0]) + "rem, " + (c.calculateRem(e.collisionCoord[1]) - .07) + "rem, 0)"),
                $("#page-game").insert(n, ".game-status").delay(500).exec(function() {
                    $(".coin-num-before").removeClass("coin-num-animate").delay(20).addClass("coin-num-animate")
                }).delay(300).remove(n),
                n.delay(100).style("-webkit-transform: translate3d(" + (b[t - 1] + .04) + "rem,0.11rem,0)")
            }
        }
        function s(e) {
            var t = $('<div class="lost-gold-coin">-' + CONF.LOST_GOLD_NUM + "</div>"),
            n = c.calculateRem(e.collisionCoord[0]) - .04,
            o = c.calculateRem(e.collisionCoord[1]) - .25;
            t.style("-webkit-transform", "translate3d(" + n + "rem, " + o + "rem, 0)"),
            o -= .15,
            $("#page-game").append(t).delay(30).exec(function() {
                t.style("opacity: 0").style("-webkit-transform", "translate3d(" + n + "rem, " + o + "rem, 0)")
            }).delay(500).remove(t)
        }
        var c = e("./../../bower_components/adaptation/src/adaptation.js");
        n.startGameAnimation = function() {
            $(".start-game").show().removeClass("start-game-animate").removeClass("start-game-go").addClass("start-game-3").addClass("start-game-animate").delay(600).removeClass("start-game-animate").delay(30).addClass("start-game-2").removeClass("start-game-3").addClass("start-game-animate").delay(600).removeClass("start-game-animate").delay(30).addClass("start-game-1").removeClass("start-game-2").addClass("start-game-animate").delay(600).removeClass("start-game-animate").delay(30).addClass("start-game-go").removeClass("start-game-1").addClass("start-game-animate").delay(600).hide()
        },
        n.init = function(e) {
            var t = e.ownerInfo.starId;
            $(".game-status").show(),
            $(".star-comment-wrap .avatar").style("background", "url(" + CONF.STAR[t - 1].avatar + ") 0px 0px / cover no-repeat"),
            i(e),
            d = 0,
            p = 1
        };
        var u = 0,
        l = 0,
        d = 0;
        n.showYatterComment = function(e) {
            var t = MSG.COMMENT.YATTER[d % MSG.COMMENT.YATTER.length];
            e - l > CONF.YATTER_INTER && (o(t), l = e, ++d)
        },
        n.showCrashComment = function() {
            var e = MSG.COMMENT.CRASH[parseInt(MSG.COMMENT.CRASH.length * Math.random(), 10)];
            o(e)
        },
        n.updateDistance = function(e, t) {
            var n = (CONF.TOTALL_DISTANCE - e).toFixed(0),
            o = !1;
            return 0 >= n && (n = 0, o = !0),
            $(".game-status .distance span").text(n),
            r(n, t),
            o
        };
        var f = .08,
        p = 1,
        m = 4e-4,
        g = -.13,
        h = .13,
        w = g,
        y = -1,
        v = 0;
        n.skyAnimation = function(e) {
            g > w && (y = 1),
            w > h && (y = -1),
            w += y * m * CONF.GAME_FPS / e,
            Math.abs(w - v) > .001 && ($(".sky").style("-webkit-transform", "translateX(" + w + "rem)"), v = w)
        };
        var b = [.22, .192, .164],
        C = 0;
        n.updateCoinNum = function(e) {
            e.downGear ? (i(e), s(e)) : (setTimeout(function() {
                i(e)
            },
            700), a(e, C))
        }
    },
    {
        "./../../bower_components/adaptation/src/adaptation.js": 1
    }],
    32 : [function(e, t, n) {
        "use strict";
        function o() {
            f = -v
        }
        function r() {
            f = v
        }
        var i = e("./../../bower_components/query/src/query.js"),
        a = e("./resolution"),
        s = [0, .3, .36, .42, .48, .009 * 60],
        c = .003,
        u = .006,
        l = 24.7,
        d = [0, 0, l],
        f = 0,
        p = 0,
        m = 0,
        g = 0,
        h = 0,
        w = !0;
        n.init = function(e) {
            d = [0, 0, l],
            f = 0,
            p = 0,
            m = 0,
            g = 0,
            h = 0,
            w = !0,
            i("#page-game").on("touchstart",
            function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                t.touches[0].clientX < e.width / CONF.RESOLUTION_RATIO / 2 ? o() : r()
            }),
            i("#page-game").on("touchend",
            function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                w && (f = 0)
            }),
            document.onkeydown = function(e) {
                switch (e.keyCode) {
                case 37:
                    o();
                    break;
                case 39:
                    r()
                }
            },
            document.onkeyup = function() {
                f = 0
            }
        },
        n.getStatus = function() {
            return {
                coord: d,
                wheelDeg: f,
                speed: p,
                speedX: g,
                speedZ: h,
                maxSpeed: s[m],
                speedGear: m
            }
        },
        n.updateSpeedX = function(e) {
            f = 0,
            g = e
        },
        n.updateSpeedZ = function(e) {
            p = e
        };
        var y = 0;
        n.updateStatus = function() {
            return w ? (p += c, p > s[m] && (p = s[m])) : (p -= u, p = 0 > p ? 0 : p),
            g = Math.sin(f * Math.PI / 180) * p,
            h = Math.cos(f * Math.PI / 180) * p,
            d[0] += n.getVisualSpeed(g),
            d[2] = l - y * p / s[m],
            s[m] || (d[2] = l),
            n.getStatus()
        };
        var v = 45;
        n.gameover = function() {
            w = !1,
            f = 0
        },
        n.upGear = function() {
            return++m,
            m > s.length - 1 ? (m = s.length - 1, !1) : (console.log("upGear", m), !0)
        },
        n.downGear = function() {--m,
            1 > m && (m = 1),
            console.log("downGear", m)
        },
        n.getVisualSpeed = function(e) {
            var t = a.getFPS();
            return t ? e / (a.getFPS() / 60) : e
        }
    },
    {
        "./../../bower_components/query/src/query.js": 6,
        "./resolution": 39
    }],
    33 : [function(e, t, n) {
        "use strict";
        n.getCar = function() {
            return CONF.RESOURCE.GAME[0]
        },
        n.getStreetLampLeft = function() {
            return CONF.RESOURCE.GAME[1]
        },
        n.getStreetLampRight = function() {
            return CONF.RESOURCE.GAME[2]
        },
        n.getPasserby0 = function() {
            return CONF.RESOURCE.GAME[3]
        },
        n.getPasserby1 = function() {
            return CONF.RESOURCE.GAME[4]
        },
        n.getPasserby2 = function() {
            return CONF.RESOURCE.GAME[5]
        },
        n.getPasserby3 = function() {
            return CONF.RESOURCE.GAME[6]
        },
        n.getPasserby4 = function() {
            return CONF.RESOURCE.GAME[7]
        },
        n.getPasserby5 = function() {
            return CONF.RESOURCE.GAME[8]
        },
        n.getBuilding0 = function() {
            return {
                front: CONF.RESOURCE.GAME[9],
                side: CONF.RESOURCE.GAME[10],
                roof: "#fff1d6"
            }
        },
        n.getBuilding1 = function() {
            return {
                front: CONF.RESOURCE.GAME[11],
                side: CONF.RESOURCE.GAME[12],
                roof: "#ffefd1"
            }
        },
        n.getBuilding2 = function() {
            return {
                front: CONF.RESOURCE.GAME[13],
                side: CONF.RESOURCE.GAME[14],
                roof: "#fff3db"
            }
        },
        n.getBuilding3 = function() {
            return {
                front: CONF.RESOURCE.GAME[15],
                side: CONF.RESOURCE.GAME[16],
                roof: "#69e5d2"
            }
        },
        n.getBuilding4 = function() {
            return {
                front: CONF.RESOURCE.GAME[17],
                side: CONF.RESOURCE.GAME[18],
                roof: "#b5c9f5"
            }
        },
        n.getBuilding5 = function() {
            return {
                front: CONF.RESOURCE.GAME[19],
                side: CONF.RESOURCE.GAME[20],
                roof: "#e6e6e6"
            }
        },
        n.getBuilding6 = function() {
            return {
                front: CONF.RESOURCE.GAME[21],
                side: CONF.RESOURCE.GAME[22],
                roof: "#ff7871"
            }
        },
        n.getBuilding7 = function() {
            return {
                front: CONF.RESOURCE.GAME[23],
                side: CONF.RESOURCE.GAME[24],
                roof: "#aac3fa"
            }
        },
        n.getTreeLeft = function() {
            return CONF.RESOURCE.GAME[25]
        },
        n.getTreeRight = function() {
            return CONF.RESOURCE.GAME[26]
        },
        n.getGoldCoin = function() {
            return CONF.RESOURCE.GAME[27]
        },
        n.getTrafficCone = function() {
            return CONF.RESOURCE.GAME[28]
        },
        n.getPeng = function() {
            return CONF.RESOURCE.GAME[29]
        },
        n.getSmoke = function() {
            return CONF.RESOURCE.GAME[30]
        },
        n.getSmokeLess = function() {
            return CONF.RESOURCE.GAME[31]
        },
        n.getObstacleCar0 = function() {
            return CONF.RESOURCE.GAME[32]
        },
        n.getObstacleCar1 = function() {
            return CONF.RESOURCE.GAME[33]
        },
        n.getObstacleCar2 = function() {
            return CONF.RESOURCE.GAME[34]
        },
        n.getObstacleCar3 = function() {
            return CONF.RESOURCE.GAME[35]
        },
        n.getFog = function() {
            return CONF.RESOURCE.GAME[36]
        }
    },
    {}],
    34 : [function(e, t, n) {
        "use strict";
        n.getGround = function() {
            return [[ - 160, 0, -25], [160, 0, -25], [160, 0, 25], [ - 160, 0, 25]]
        },
        n.getRoad = function() {
            return [[ - 8, 0, -25], [8, 0, -25], [8, 0, 25], [ - 8, 0, 25]]
        },
        n.getLaneLine = function() {
            return [[ - .1, 0, -1], [.1, 0, -1], [.1, 0, 1], [ - .1, 0, 1]]
        },
        n.getDottedLine = function() {
            return [[ - .1, 0, -1], [.1, 0, -1], [.1, 0, 1], [ - .1, 0, 1]]
        },
        n.getObstacleCar = function() {
            return [[ - 1.2, 0, -1.2], [1.2, 0, -1.2], [1.2, 0, 1.2], [ - 1.2, 0, 1.2]]
        },
        n.getCar = function() {
            return [[ - 1.2, 0, -1.2], [1.2, 0, -1.2], [1.2, 0, 1.2], [ - 1.2, 0, 1.2]]
        },
        n.getStreetLamp = function() {
            return [[ - 1.5, 0, -.2], [1.5, 0, -.2], [1.5, 0, .2], [ - 1.5, 0, .2]]
        },
        n.getPasserby = function() {
            return [[ - .4, 0, -.4], [.4, 0, -.4], [.4, 0, .4], [ - .4, 0, .4]]
        },
        n.getGoldCoin = function() {
            return [[ - .5, 0, -.5], [.5, 0, -.5], [.5, 0, .5], [ - .5, 0, .5]]
        },
        n.getBuildingLeft = function() {
            return [[1, 1, 1], [ - 1, 1, 1], [ - 1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, -1], [1, 1, -1], [1, 1, 1], [ - 1, 1, -1], [ - 1, 0, -1]]
        },
        n.getBuildingRight = function() {
            return [[ - 1, 1, 1], [1, 1, 1], [1, 0, 1], [ - 1, 0, 1], [ - 1, 0, 1], [ - 1, 0, -1], [ - 1, 1, -1], [ - 1, 1, 1], [1, 1, -1], [1, 0, -1]]
        },
        n.getTree = function() {
            return [[ - 2.9, 0, -2.9], [2.9, 0, -2.9], [2.9, 0, 2.9], [ - 2.9, 0, 2.9]]
        },
        n.getTrafficCone = function() {
            return [[ - 1, 0, -1], [1, 0, -1], [1, 0, 1], [ - 1, 0, 1]]
        },
        n.getPeng = function() {
            return [[ - 1.4, 0, -1.4], [1.4, 0, -1.4], [1.4, 0, 1.4], [ - 1.4, 0, 1.4]]
        },
        n.getSmoke = function() {
            return [[ - 1.4, 0, -1.4], [1.4, 0, -1.4], [1.4, 0, 1.4], [ - 1.4, 0, 1.4]]
        },
        n.getFog = function() {
            return [[ - 12, 0, -12], [12, 0, -12], [12, 0, 12], [ - 12, 0, 12]]
        }
    },
    {}],
    35 : [function(e, t, n) {
        "use strict";
        n.getCar = function() {
            return [[ - 1.4, 0, -.45], [1.4, 0, -.45], [1.4, 0, .45], [ - 1.4, 0, .45]]
        },
        n.getGoldCoin = function() {
            return [[ - .6, 0, -.6], [.6, 0, -.6], [.6, 0, .6], [ - .6, 0, .6]]
        },
        n.getTrafficCone = function() {
            return [[ - .5, 0, -.5], [.5, 0, -.5], [.5, 0, .5], [ - .5, 0, .5]]
        }
    },
    {}],
    36 : [function(e, t, n) {
        "use strict";
        function o(e) {
            return e * Math.PI / 180
        }
        n.perspective = function(e, t, n, r) {
            var i = Math.tan(.5 * Math.PI - .5 * o(e)),
            a = 1 / (n - r);
            return [i / t, 0, 0, 0, 0, i, 0, 0, 0, 0, (n + r) * a, -1, 0, 0, n * r * a * 2, 0]
        },
        n.projection2d = function(e, t, n) {
            return [2 / e, 0, 0, 0, 0, -2 / t, 0, 0, 0, 0, 2 / n, 0, -1, 1, 0, 1]
        },
        n.zToWMatrix = function(e) {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e, 0, 0, 0, 1]
        },
        n.translate = function(e, t, n) {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1]
        },
        n.rotateX = function(e) {
            var t = o(e),
            n = Math.cos(t),
            r = Math.sin(t);
            return [1, 0, 0, 0, 0, n, r, 0, 0, -r, n, 0, 0, 0, 0, 1]
        },
        n.rotateY = function(e) {
            var t = o(e),
            n = Math.cos(t),
            r = Math.sin(t);
            return [n, 0, -r, 0, 0, 1, 0, 0, r, 0, n, 0, 0, 0, 0, 1]
        },
        n.rotateZ = function(e) {
            var t = o(e),
            n = Math.cos(t),
            r = Math.sin(t);
            return [n, r, 0, 0, -r, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        },
        n.scale = function(e, t, n) {
            return [e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1]
        },
        n.matrixMultiply = function(e, t) {
            var n = e[0],
            o = e[1],
            r = e[2],
            i = e[3],
            a = e[4],
            s = e[5],
            c = e[6],
            u = e[7],
            l = e[8],
            d = e[9],
            f = e[10],
            p = e[11],
            m = e[12],
            g = e[13],
            h = e[14],
            w = e[15],
            y = t[0],
            v = t[1],
            b = t[2],
            C = t[3],
            E = t[4],
            S = t[5],
            I = t[6],
            O = t[7],
            _ = t[8],
            N = t[9],
            T = t[10],
            R = t[11],
            M = t[12],
            A = t[13],
            k = t[14],
            x = t[15];
            return [n * y + o * E + r * _ + i * M, n * v + o * S + r * N + i * A, n * b + o * I + r * T + i * k, n * C + o * O + r * R + i * x, a * y + s * E + c * _ + u * M, a * v + s * S + c * N + u * A, a * b + s * I + c * T + u * k, a * C + s * O + c * R + u * x, l * y + d * E + f * _ + p * M, l * v + d * S + f * N + p * A, l * b + d * I + f * T + p * k, l * C + d * O + f * R + p * x, m * y + g * E + h * _ + w * M, m * v + g * S + h * N + w * A, m * b + g * I + h * T + w * k, m * C + g * O + h * R + w * x]
        },
        n.inverse = function(e) {
            var t = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            i = e[4],
            a = e[5],
            s = e[6],
            c = e[7],
            u = e[8],
            l = e[9],
            d = e[10],
            f = e[11],
            p = e[12],
            m = e[13],
            g = e[14],
            h = e[15],
            w = d * h,
            y = g * f,
            v = s * h,
            b = g * c,
            C = s * f,
            E = d * c,
            S = o * h,
            I = g * r,
            O = o * f,
            _ = d * r,
            N = o * c,
            T = s * r,
            R = u * m,
            M = p * l,
            A = i * m,
            k = p * a,
            x = i * l,
            F = u * a,
            U = t * m,
            P = p * n,
            L = t * l,
            D = u * n,
            j = t * a,
            G = i * n,
            $ = w * a + b * l + C * m - (y * a + v * l + E * m),
            W = y * n + S * l + _ * m - (w * n + I * l + O * m),
            B = v * n + I * a + N * m - (b * n + S * a + T * m),
            V = E * n + O * a + T * l - (C * n + _ * a + N * l),
            q = 1 / (t * $ + i * W + u * B + p * V);
            return [q * $, q * W, q * B, q * V, q * (y * i + v * u + E * p - (w * i + b * u + C * p)), q * (w * t + I * u + O * p - (y * t + S * u + _ * p)), q * (b * t + S * i + T * p - (v * t + I * i + N * p)), q * (C * t + _ * i + N * u - (E * t + O * i + T * u)), q * (R * c + k * f + x * h - (M * c + A * f + F * h)), q * (M * r + U * f + D * h - (R * r + P * f + L * h)), q * (A * r + P * c + j * h - (k * r + U * c + G * h)), q * (F * r + L * c + G * f - (x * r + D * c + j * f)), q * (A * d + F * g + M * s - (x * g + R * s + k * d)), q * (L * g + R * o + P * d - (U * d + D * g + M * o)), q * (U * s + G * g + k * o - (j * g + A * o + P * s)), q * (j * d + x * o + D * s - (L * s + G * d + F * o))]
        },
        n.matrixVectorMultiply = function(e, t) {
            for (var n = [], o = 0; 4 > o; ++o) {
                n[o] = 0;
                for (var r = 0; 4 > r; ++r) n[o] += e[r] * t[4 * r + o]
            }
            return n
        }
    },
    {}],
    37 : [function(e, t, n) {
        "use strict";
        function o() {
            n.init(),
            Z.init(rt),
            st = [],
            pt = 3,
            i(),
            a(),
            W("#page-game").show()
        }
        function r(e) {
            ft = 0,
            Rt = !1,
            It[0] = St[0],
            It[1] = St[1],
            It[2] = St[2],
            Nt = _t,
            X.init(e),
            3 !== pt && (pt = 1, Z.init(rt), st = [], i(), a()),
            pt = 1,
            nt.playBgm(),
            W("#page-game").show()
        }
        function i() {
            ct = new L,
            ut = new U,
            P.lastObject = null,
            M.lastObject = null,
            M.count = 0,
            k.lastObject = null,
            k.DISTANCE = k.INIT_DISTANCE,
            D.lastObject = null,
            T.lastObject = null,
            wt = [0, 0, 0, 0];
            for (var e = 0,
            t = parseInt(50 / O.DISTANCE), n = 0; t > e;) n = ht + (e + 1) * O.DISTANCE,
            new O(n),
            new O(n),
            new O(n),
            ++e;
            for (e = 0, t = parseInt(50 / N.DISTANCE); t > e;) n = ht + (e + 1) * N.DISTANCE,
            new N(n),
            new N(n),
            ++e;
            for (e = 0, t = parseInt(50 / R.DISTANCE); t > e;) n = ht + (e + 1) * R.DISTANCE,
            new R(n),
            new R(n),
            ++e;
            new D( - 2),
            new D(8)
        }
        function a() {
            var e = new Date;
            if (pt >= 0) {
                var t = et.refreshFPS(ot, rt, e);
                if (at = Z.updateStatus(), at.speedGear && X.showYatterComment(e), 2 === pt && (nt.pauseBgm(), Z.gameover(), at = Z.updateStatus(), !at.speed)) return pt = -1,
                void s();
                J.handleObjectCollision(pt, st, rt, wt, j, l, A),
                rt.clearRect(0, 0, rt.width, rt.height),
                w(),
                s(),
                -1 !== pt && 2 !== pt && X.updateDistance(ft, pt) && (pt = 2, q.dispatch("distanceCompleted")),
                X.skyAnimation(t),
                setTimeout(a, 1e3 / (3 === pt ? CONF.BACKGROUND_GAME_FPS: CONF.GAME_FPS))
            }
        }
        function s() {
            it = tt.inverse(G()),
            c(),
            u()
        }
        function c() {
            yt.renderer(yt),
            vt.renderer(vt),
            bt.renderer(bt),
            Ct.renderer(Ct)
        }
        function u() {
            gt = [];
            var e = at ? Z.getVisualSpeed(at.speedZ) : 0;
            ft += e;
            for (var t = 0; t < st.length;) if (st[t].coord[2] < ht) {
                if (2 === st[t].type) {--M.count,
                    --wt[st[t].dir];
                    var n = st.splice(t, 1);
                    n[0] = null,
                    M.lastObject = null
                }
            } else 3 !== st[t].type && 6 !== st[t].type ? st[t].coord[2] += e: at && (at.coord[0] < -6 && (at.coord[0] = -6), at.coord[0] > 6 && (at.coord[0] = 6)),
            2 === st[t].type && (st[t].coord[0] += st[t].speedX ? Z.getVisualSpeed(st[t].speedX) : 0, st[t].coord[2] -= Z.getVisualSpeed(st[t].speedZ), st[t].coord[0] < -6 && (st[t].coord[0] = -6), st[t].coord[0] > 6 && (st[t].coord[0] = 6)),
            st[t].coord[2] !== ht && st[t].renderer(st[t]),
            ++t;
            l(gt)
        }
        function l(e) {
            for (var t = 0,
            n = null; t < e.length;) n = e[t],
            n = st.splice(st.indexOf(n), 1),
            n = null,
            ++t
        }
        function d(e) {
            m(e,
            function() {
                new e
            })
        }
        function f(e) {
            m(e,
            function() {
                new e,
                new e
            })
        }
        function p(e) {
            m(e,
            function() {
                new e,
                new e,
                new e
            })
        }
        function m(e, t) { (!e.lastObject || e.lastObject.coord[2] - ht > e.DISTANCE) && t()
        }
        function g() {
            var e = parseInt(4 * Math.random(), 10);
            wt[e] || m(P,
            function() {
                new P(e),
                new P(e)
            })
        }
        function h() {
            M.count < M.NUM && d(M)
        }
        function w() {
            if (3 !== pt) p(O),
            f(N),
            d(T),
            d(D),
            d(R),
            h(),
            d(k),
            g();
            else {
                var e = 24; (!M.lastObject || e - M.lastObject.coord[2] > 15 && M.count < M.NUM) && new M(e)
            }
            y(),
            v()
        }
        function y() {
            for (var e = null,
            t = 0; t < st.length;) e = st[t],
            (5 !== e.type && !(e instanceof R) && !(e instanceof U) && e.coord[2] > 24.8 || 5 === e.type && e.coord[2] > 26 || e instanceof R && e.coord[2] > 21) && 3 !== e.type ? (2 === e.type && (--M.count, --wt[e.dir]), 5 === e.type && ++wt[e.dir], e = st.splice(t, 1), e[0] = null) : ++t
        }
        function v() {
            st.sort(function(e, t) {
                var n = b(e.coord, Tt),
                o = b(t.coord, Tt);
                return n > o && 0 !== e.type && 0 !== t.type || 0 === e.type && 0 !== t.type ? -1 : o > n && 0 !== e.type && 0 !== t.type || 0 === t.type && 0 !== e.type ? 1 : 0
            })
        }
        function b(e, t) {
            return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[2] - t[2], 2))
        }
        function C() {
            this.type = 0,
            this.coord = [0, 0, 0],
            this.transform = tt.translate(0, 0, 0),
            this.getGeometryFragment = function() {},
            this.getFragment = function() {},
            this.renderer = function(e) {
                var t = tt.matrixMultiply(e.transform, tt.translate(e.coord[0], e.coord[1], e.coord[2]));
                Y.drawArray(rt, e.getGeometryFragment(), e.getFragment(), j(t))
            }
        }
        function E() {
            this.getGeometryFragment = Q.getGround,
            this.getFragment = function() {
                return "#d6d6d6"
            }
        }
        function S() {
            this.getGeometryFragment = Q.getRoad,
            this.getFragment = function() {
                return "#4a4a4a"
            }
        }
        function I() {
            this.coord = [8.6 * I.lastDir, 0, 0],
            this.transform = tt.scale(2.5, 1, 25),
            this.getGeometryFragment = Q.getLaneLine,
            this.getFragment = function() {
                return "#fff"
            },
            I.lastDir *= -1
        }
        function O(e) {
            this.coord = [4 * ((O.lastDir + 1) % 3 - 1), 0, void 0 === e ? ht: e],
            this.transform = tt.scale(1, 1, 1.2),
            this.getGeometryFragment = Q.getDottedLine,
            this.getFragment = function() {
                return "#fff"
            },
            O.lastObject = this,
            ++O.lastDir,
            st.unshift(this)
        }
        function _() {
            this.type = 1,
            this.coord = [0, 0, 0],
            this.transform = tt.translate(0, 0, 0),
            this.geometry = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
            this.getGeometryFragment = function() {},
            this.getFragment = function() {},
            this.update = function() {
                return ! 0
            },
            this.renderer = function(e) {
                if (e.update()) {
                    var t = tt.matrixMultiply(e.transform, tt.translate(e.coord[0], e.coord[1], e.coord[2]));
                    Y.drawElement(rt, e.getGeometryFragment(), e.getFragment(), j(t))
                }
            }
        }
        function N(e) {
            this.coord = [8 * N.lastDir, 0, void 0 === e ? ht: e],
            this.getGeometryFragment = Q.getStreetLamp,
            this.getFragment = N.lastDir > 0 ? K.getStreetLampRight: K.getStreetLampLeft,
            N.lastObject = this,
            N.lastDir *= -1,
            st.unshift(this)
        }
        function T() {
            if (this.coord = [(9.5 + parseInt(2 * Math.random(), 10)) * T.lastDir, 0, ht], this.getGeometryFragment = Q.getPasserby, this.getFragment = K["getPasserby" + T.lastId], 0 === T.lastId) {
                var e = 1.4;
                this.transform = tt.scale(e, 1, 1),
                this.geometry[0][0] *= e,
                this.geometry[1][0] *= e,
                this.geometry[2][0] *= e,
                this.geometry[3][0] *= e
            }
            T.lastObject = this,
            T.lastId = ++T.lastId % 6,
            T.lastDir *= -1,
            st.unshift(this)
        }
        function R(e) {
            this.coord = [14 * R.lastDir, 0, void 0 === e ? ht: e],
            this.getGeometryFragment = Q.getTree,
            this.getFragment = R.lastDir < 0 ? K.getTreeLeft: K.getTreeRight,
            R.lastObject = this,
            R.lastDir *= -1,
            st.unshift(this)
        }
        function M(e) {
            if (this.type = 2, this.dir = M.lastDir % 4, !(wt[this.dir] < 0)) {++wt[this.dir],
                this.coord = [ - 6 + 4 * this.dir, 0, e || ht],
                this.geometry = z.getCar();
                var t = "getObstacleCar" + M.lastFragment % M.FRAGMENT_NUM;
                this.getGeometryFragment = Q.getObstacleCar,
                this.getFragment = K[t],
                this.speedZ = (2 + parseInt(10 * Math.random(), 10) / 10) / 1e3 * 60,
                this.speedX = 0,
                M.lastObject = this,
                M.lastDir += parseInt(4 * Math.random(), 10),
                ++M.count,
                M.lastFragment += 1,
                st.unshift(this)
            }
        }
        function A() {
            this.type = 6,
            this.frame = 0,
            this.coord = A.updateCoord(),
            this.getGeometryFragment = Q.getPeng;
            var e = this;
            this.update = function() {
                return++e.frame,
                e.coord = A.updateCoord(),
                e.frame > A.SHOW_FRAME ? void gt.push(e) : !0
            },
            this.getFragment = K.getPeng,
            st.unshift(this)
        }
        function k() {
            this.type = 4,
            this.coord = [ - 6 + k.lastDir % 4 * 4, k.MIN_Y, ht],
            this.geometry = z.getGoldCoin(),
            this.getGeometryFragment = Q.getGoldCoin,
            this.yDir = 1;
            var e = this;
            this.getFragment = function() {
                return e.coord[1] += .02 * e.yDir,
                e.coord[1] > k.MAX_Y && (e.coord[1] = k.MAX_Y, e.yDir = -1),
                e.coord[1] < k.MIN_Y && (e.coord[1] = k.MIN_Y, e.yDir = 1),
                K.getGoldCoin()
            },
            this.speedZ = 0,
            this.speedX = 0,
            k.count % k.CONSECUTIVE_NUM === 3 && (k.lastDir += parseInt(3 * Math.random(), 10) + 1),
            k.lastObject = this,
            ++k.count,
            st.unshift(this)
        }
        function x() {
            this.type = 6;
            var e = this;
            this.update = function() {
                return e.coord = [0, -23.5, at.coord[2] - 8],
                e.coord
            },
            this.update(),
            this.getGeometryFragment = Q.getFog,
            this.getFragment = K.getFog,
            st.unshift(this)
        }
        function F() {
            this.type = 1,
            this.coord = [0, 0, 0],
            this.transform = tt.translate(0, 0, 0),
            this.geometry = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
            this.getGeometryFragment = function() {},
            this.getFragment = function() {},
            this.update = function() {
                return ! 0
            },
            this.renderer = function(e) {
                if (e.update()) {
                    var t = tt.matrixMultiply(e.transform, tt.translate(e.coord[0], e.coord[1], e.coord[2]));
                    Y.drawElementFrames(rt, e.getGeometryFragment(), e.getFragment(), j(t), e.getFrame(), e.TOTALL_FRAME)
                }
            }
        }
        function U() {
            this.type = 1,
            this.frame = 0,
            this.size = 0;
            var e = this;
            this.update = function() {
                return++e.frame,
                parseInt(e.frame / 6, 10) === e.TOTALL_FRAME && (e.size = 0),
                e.coord[0] = at.coord[0],
                e.coord[1] = at.coord[1] + .5,
                e.coord[2] = at.coord[2] + .06,
                !0
            },
            this.getFragment = function() {
                return e.size ? K.getSmoke() : K.getSmokeLess()
            },
            this.getGeometryFragment = Q.getSmoke,
            this.getFrame = function() {
                return parseInt(e.frame / 6, 10) % e.TOTALL_FRAME
            },
            st.unshift(this)
        }
        function P(e) {
            this.type = 5,
            this.dir = e,
            --wt[this.dir],
            this.frame = 0,
            this.collision = !1,
            this.isLeft = P.isLeft,
            this.coord = [ - 6 + 4 * this.dir + .8 * this.isLeft, 0, ht],
            this.geometry = z.getTrafficCone();
            var t = this;
            this.update = function() {
                if (t.collision) {
                    switch (++t.frame, t.getFrame()) {
                    case 1:
                        t.coord[0] = at.coord[0] + .6 * t.isLeft,
                        t.coord[1] = at.coord[1] + .6;
                        break;
                    case 2:
                        t.coord[0] = at.coord[0] + 1.4 * t.isLeft,
                        t.coord[1] = at.coord[1] + 1;
                        break;
                    case 3:
                        t.coord[0] = at.coord[0] + 3.8 * t.isLeft,
                        t.coord[1] = at.coord[1] + 2;
                        break;
                    case 4:
                        t.coord[0] = at.coord[0] + 5.6 * t.isLeft,
                        t.coord[1] = at.coord[1] + 2.6
                    }
                    t.coord[2] = at.coord[2] - 3
                }
                return t.getFrame() > t.TOTALL_FRAME ? void gt.push(t) : !0
            },
            this.getGeometryFragment = Q.getTrafficCone,
            this.getFrame = function() {
                return parseInt(t.frame / 2, 10)
            },
            this.getFragment = K.getTrafficCone,
            P.lastObject = this,
            P.isLeft *= -1,
            st.unshift(this)
        }
        function L() {
            this.type = 3,
            this.coord = Z.getStatus().coord,
            this.geometry = z.getCar(),
            this.getGeometryFragment = Q.getCar,
            this.getFragment = K.getCar,
            this.count = 0;
            var e = this;
            this.getFrame = function() {
                var t = Z.getStatus().wheelDeg;
                return t > 0 ? 3 : 0 > t ? 2 : (++e.count, parseInt(e.count / 6, 10) % 2)
            },
            this.__defineGetter__("speedX",
            function() {
                return Z.getStatus().speedX
            }),
            this.__defineSetter__("speedX",
            function(e) {
                Z.updateSpeedX(e)
            }),
            this.__defineGetter__("speedZ",
            function() {
                return Z.getStatus().speedZ
            }),
            this.__defineSetter__("speedZ",
            function(e) {
                Z.updateSpeedZ(e)
            }),
            st.unshift(this)
        }
        function D(e) {
            this.type = 1,
            this.coord = [24 * D.lastDir, 0, void 0 === e ? ht: e],
            this.transform = D.TRANSFORM[D.lastId],
            this.geometry = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
            this.getGeometryFragment = D.lastDir > 0 ? Q.getBuildingRight: Q.getBuildingLeft,
            this.getFragment = K["getBuilding" + D.lastId],
            this.renderer = D.renderer,
            D.lastObject = this,
            D.lastId = ++D.lastId % 8,
            D.lastDir *= -1,
            st.unshift(this)
        }
        function j(e) {
            var t = e ? tt.matrixMultiply(e, it) : it,
            n = tt.perspective(150, ot.width / ot.height, 0, 2e3);
            return tt.matrixMultiply(t, n)
        }
        function G() {
            $(),
            Tt[0] = Tt[0] + (at.coord[0] - Tt[0]) / 3;
            var e = tt.translate(Tt[0], Tt[1], Tt[2]),
            t = tt.rotateX( - 10);
            return tt.matrixMultiply(tt.matrixMultiply(t, e), tt.rotateX(Nt))
        }
        function $() {
            Rt || 3 === pt || (It[1] = It[1] + (Et[1] - It[1]) / 10, It[2] = It[2] + (Et[2] - It[2]) / 10, Tt = [It[0], It[1], It[2]], Nt += (Ot - Nt) / 10, Et[1] - It[1] < .05 && Et[2] - It[2] < .05 && .05 > Ot - Nt && (q.dispatch("gameReady"), setTimeout(function() {
                lt = new x
            },
            700), Rt = !0))
        }
        var W = e("./../../bower_components/query/src/query.js"),
        B = e("./../../bower_components/resource/src/resource.js"),
        V = e("./../../bower_components/ua/src/ua.js"),
        q = e("../dispatcher"),
        H = e("../mask"),
        J = e("./collision"),
        X = e("./dom-animation"),
        Y = e("./renderer"),
        K = e("./fragment"),
        z = e("./geometry"),
        Q = e("./geometry-fragment"),
        Z = e("./driving"),
        et = e("./resolution"),
        tt = e("./matrix3d"),
        nt = e("./audio"),
        ot = W("#canvas-scene").get(),
        rt = ot.getContext("2d"),
        it = null,
        at = Z.getStatus(),
        st = [],
        ct = null,
        ut = null,
        lt = null,
        dt = !1,
        ft = 0,
        pt = 1;
        n.updateStatus = function(e) {
            k.updateDistance(e.coinNum),
            X.updateCoinNum(e),
            e.upGear && Z.upGear() && (ut.size = 1, ut.frame = 0),
            e.downGear && Z.downGear()
        },
        n.init = function() {
            dt || (dt = !0, et.updateResolutionRatio(ot, rt))
        };
        var mt = null;
        n.render = function(e) {
            B.getResource(CONF.RESOURCE.GAME[CONF.RESOURCE.GAME.length - 1]) ? r(e) : (nt.playBgm(), mt = +new Date, H.showLoading(), window.scrollTo(0, 0), B.loadEssentialResource(CONF.RESOURCE.GAME,
            function() {
                var t = +new Date;
                t - mt > CONF.LEAST_WAITING_TIME ? (H.hideLoading(), r(e)) : setTimeout(function() {
                    H.hideLoading(),
                    r(e)
                },
                CONF.LEAST_WAITING_TIME - (t - mt))
            },
            function() {}))
        },
        n.renderBackground = function(e) {
            o(e)
        },
        n.startGame = function() {
            X.startGameAnimation(),
            setTimeout(function() {
                ut.size = 1,
                ut.frame = 0,
                Z.upGear(),
                V.isIOS() || "WECHAT" !== V.pf || (nt.pauseBgm(), nt.playBgm())
            },
            2400),
            nt.play321Go()
        };
        var gt = [],
        ht = -20;
        E.prototype = new C,
        S.prototype = new C,
        I.prototype = new C,
        I.lastDir = 1,
        O.prototype = new C,
        O.DISTANCE = 6,
        O.lastDir = 0,
        N.prototype = new _,
        N.DISTANCE = 14,
        N.lastDir = 1,
        T.prototype = new _,
        T.lastId = 0,
        T.lastDir = 1,
        T.DISTANCE = 10,
        R.prototype = new _,
        R.lastDir = -1,
        R.DISTANCE = 8;
        var wt = [0, 0, 0, 0];
        M.prototype = new _,
        M.lastDir = 0,
        M.lastFragment = 0,
        M.FRAGMENT_NUM = 4,
        M.DISTANCE = 24,
        M.count = 0,
        M.NUM = 5,
        A.SHOW_FRAME = 8,
        A.updateCoord = function() {
            return [at.coord[0], at.coord[1] + .2, at.coord[2] - .6]
        },
        A.prototype = new _,
        k.prototype = new _,
        k.DISTANCE = 6,
        k.INIT_DISTANCE = 6,
        k.CONSECUTIVE_NUM = 4,
        k.lastDir = 2,
        k.count = 0,
        k.MIN_Y = -.5,
        k.MAX_Y = .5,
        k.updateDistance = function(e) {
            return k.DISTANCE = 1 === CONF.GAME_POINT_TIMES ? 100 >= e ? k.INIT_DISTANCE: 130 >= e ? 1 / 6 * e - 11 : 2 * e - 250 : k.INIT_DISTANCE
        },
        x.prototype = new _,
        U.prototype = new F,
        U.prototype.TOTALL_FRAME = 8,
        P.prototype = new F,
        P.isLeft = 1,
        P.DISTANCE = 40,
        P.prototype.TOTALL_FRAME = 5,
        L.prototype = new F,
        L.prototype.TOTALL_FRAME = 4,
        D.lastId = 0,
        D.lastDir = 1,
        D.DISTANCE = 40,
        D.TRANSFORM = [tt.scale(4.2, 13.4, 4.2), tt.scale(3, 12, 3), tt.scale(5.4, 11, 3), tt.scale(3, 10.4, 5.2), tt.scale(3, 10.4, 5.2), tt.scale(4.9, 11, 3.3), tt.scale(3.1, 6.8, 3.4), tt.scale(3.1, 6.8, 3.4)],
        D.renderer = function(e) {
            var t = tt.matrixMultiply(e.transform, tt.translate(e.coord[0], e.coord[1], e.coord[2]));
            Y.drawBuilding(rt, e.getGeometryFragment(), e.getFragment(), j(t), !Rt)
        };
        var yt = new E,
        vt = new S,
        bt = new I,
        Ct = new I,
        Et = [0, 8, 25.5],
        St = [0, 13, 23],
        It = [0, 13, 23],
        Ot = 0,
        _t = -25,
        Nt = -25,
        Tt = [0, 12, 23],
        Rt = !1
    },
    {
        "../dispatcher": 12,
        "../mask": 22,
        "./../../bower_components/query/src/query.js": 6,
        "./../../bower_components/resource/src/resource.js": 7,
        "./../../bower_components/ua/src/ua.js": 11,
        "./audio": 29,
        "./collision": 30,
        "./dom-animation": 31,
        "./driving": 32,
        "./fragment": 33,
        "./geometry": 35,
        "./geometry-fragment": 34,
        "./matrix3d": 36,
        "./renderer": 38,
        "./resolution": 39
    }],
    38 : [function(e, t, n) {
        "use strict";
        function o(e, t, n) {
            e.fillStyle = t,
            e.beginPath(),
            e.save(),
            e.lineTo(n[3][0], n[0][1]),
            e.lineTo(n[5][0], n[6][1]),
            e.lineTo(n[9][0], n[8][1]),
            e.lineTo(n[2][0], n[1][1]),
            e.fill(),
            e.closePath(),
            e.restore()
        }
        function r(e, t, n) {
            for (var o = null,
            r = n[5][0] - n[4][0], i = n[7][1] - n[4][1], a = n[6][1] - n[5][1], s = (n[7][1] - n[4][1]) / CONF.SEGMENT_NUM, c = (n[6][1] - n[5][1]) / CONF.SEGMENT_NUM, u = 0; u < CONF.SEGMENT_NUM;) {
                var l = n[4][1] + u * s,
                d = n[5][1] + u * c;
                e.save(),
                o = new window.Path2D,
                o.moveTo(n[4][0], l),
                o.lineTo(n[5][0], d),
                o.lineTo(n[5][0], d + c),
                o.lineTo(n[4][0], l),
                e.clip(o),
                e.translate(n[4][0], n[4][1] + u * (s - c)),
                e.transform(1, (d - l) / r, 0, 1, 0, 0),
                e.drawImage(t, 0, 0, r, a),
                e.restore(),
                e.save(),
                o = new window.Path2D,
                o.moveTo(n[4][0], l),
                o.lineTo(n[5][0], d + c),
                o.lineTo(n[4][0], l + s),
                o.lineTo(n[4][0], l),
                e.clip(o),
                e.translate(n[4][0], n[4][1]),
                e.transform(1, (d + c - (l + s)) / r, 0, 1, 0, 0),
                e.drawImage(t, 0, 0, r, i),
                e.restore(),
                ++u
            }
        }
        var i = e("./../../bower_components/resource/src/resource.js"),
        a = e("./matrix3d");
        n.drawArray = function(e, t, o, r) {
            var i = 0;
            for (e.fillStyle = o, e.beginPath(), e.save(); i < t.length;) {
                if (t[i] = n.calculatePosition(e, t[i], r), t[i][2] <= 0) return;
                e.lineTo(t[i][0], t[i][1]),
                ++i
            }
            e.fill(),
            e.closePath(),
            e.restore()
        },
        n.drawElement = function(e, t, o, r) {
            if (t[0] = n.calculatePosition(e, t[0], r), t[1] = n.calculatePosition(e, t[1], r), t[2] = n.calculatePosition(e, t[2], r), t[3] = n.calculatePosition(e, t[3], r), !(t[2][2] <= 0 || t[2][2] <= 0)) {
                var a = i.getResource(o),
                s = n.calculatePosition(e, [0, 0, 0], r),
                c = (t[3][0] - t[2][0] + t[0][0] - t[1][0]) / 2;
                e.drawImage(a, s[0] - c / 2, s[1], c, c * a.height / a.width)
            }
        },
        n.drawElementFrames = function(e, t, o, r, a, s) {
            if (t[0] = n.calculatePosition(e, t[0], r), t[1] = n.calculatePosition(e, t[1], r), t[2] = n.calculatePosition(e, t[2], r), t[3] = n.calculatePosition(e, t[3], r), !(t[2][2] <= 0 || t[2][2] <= 0)) {
                var c = i.getResource(o),
                u = n.calculatePosition(e, [0, 0, 0], r),
                l = (t[3][0] - t[2][0] + t[0][0] - t[1][0]) / 2;
                e.drawImage(c, a * c.width / s, 0, c.width / s, c.height, u[0] - l / 2, u[1], l, l * c.height / (c.width / s))
            }
        },
        n.drawBuilding = function(e, t, a, s, c) {
            if (window.Path2D && (t[0] = n.calculatePosition(e, t[0], s), t[1] = n.calculatePosition(e, t[1], s), t[2] = n.calculatePosition(e, t[2], s), t[3] = n.calculatePosition(e, t[3], s), t[4] = n.calculatePosition(e, t[4], s), t[5] = n.calculatePosition(e, t[5], s), t[6] = n.calculatePosition(e, t[6], s), t[7] = n.calculatePosition(e, t[7], s), !(t[4][2] <= 0))) {
                c && (t[8] = n.calculatePosition(e, t[8], s), t[9] = n.calculatePosition(e, t[9], s), o(e, a.roof, t));
                var u = i.getResource(a.side);
                r(e, u, t);
                var l = i.getResource(a.front);
                e.drawImage(l, t[3][0], t[3][1], t[2][0] - t[3][0], t[1][1] - t[2][1])
            }
        },
        n.drawPoints = function(e, t) {
            for (var n = 0; n < t.length;) e.fillStyle = "black",
            e.beginPath(),
            e.arc(t[n][0], t[n][1], 5, 0, 2 * Math.PI),
            e.closePath(),
            e.fill(),
            ++n
        },
        n.calculatePosition = function(e, t, n) {
            return n = n || a.translate(0, 0, 0),
            t.push(1),
            t = a.matrixVectorMultiply(t, n),
            t[3] = t[3] < 1 ? 1 : t[3],
            t[0] = .5 * e.width * (1 + t[0] / t[3]),
            t[1] = .5 * e.height * (1 - t[1] / t[3]),
            t
        }
    },
    {
        "./../../bower_components/resource/src/resource.js": 7,
        "./matrix3d": 36
    }],
    39 : [function(e, t, n) {
        "use strict";
        function o(e) {
            e - i > 500 && (i && ($(".fps span").text(s), $(".ratio span").text(CONF.RESOLUTION_RATIO.toFixed(1))), i = e, a = 0)
        }
        function r(e, t) {
            20 > s && (CONF.RESOLUTION_RATIO -= .2, CONF.RESOLUTION_RATIO < CONF.MIN_RESOLUTION_RATIO && (CONF.RESOLUTION_RATIO = CONF.MIN_RESOLUTION_RATIO), n.updateResolutionRatio(e, t))
        }
        n.updateResolutionRatio = function(e, t) {
            t.width = e.width = window.innerWidth * CONF.RESOLUTION_RATIO,
            t.height = e.height = window.innerHeight * CONF.RESOLUTION_RATIO,
            e.style.zoom = 1 / CONF.RESOLUTION_RATIO
        };
        var i = 0,
        a = 0,
        s = 50;
        n.refreshFPS = function(e, t, n) {
            return++a,
            s = parseInt(a / (n - i) * 1e3, 10),
            o(n),
            r(e, t),
            s
        },
        n.getFPS = function() {
            return s
        }
    },
    {}],
    40 : [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        function r(e) {
            f.hideLoading(),
            c("#page-index").show(),
            i(),
            p.renderBackground(e),
            d.show()
        }
        function i() {
            c(".game-desc").delay(200).addClass("common-in-1").delay(2e3).exec(function() {
                c(".game-desc").addClass("common-out-1"),
                c(".banner-index").addClass("common-in-2").delay(2e3).addClass("common-out-2").delay(150).exec(function() {
                    c(".star-selector-title").addClass("common-in-2")
                }).delay(150).exec(function() {
                    c(".wrap-star-selector .line-1").addClass("common-in-2")
                }).delay(150).exec(function() {
                    c(".wrap-star-selector .line-2").addClass("common-in-2")
                }).delay(150).exec(function() {
                    c(".btn-select-star").addClass("common-in-2")
                }).delay(400).exec(function() {
                    c(".btn-go-rule").style("-webkit-transform: translate3d(0, 0, 0);"),
                    c("#banner-go-uc").style("-webkit-transform: translateY(0);")
                }).delay(400).exec(function() {
                    c(".dashed-top").style("opacity:1")
                }).delay(150).exec(function() {
                    c(".dashed-left").style("opacity:1"),
                    c(".dashed-right").style("opacity:1"),
                    c(".wrap-star-selector li").style("-webkit-transform: translateY(0)").removeClass("common-in-2")
                }).delay(100).exec(function() {
                    c("#star-option-3").addClass("avatar-chosed"),
                    m = !0,
                    l.dispatch("starShow")
                })
            })
        }
        var a = e("../remind"),
        s = o(a),
        c = e("./../../bower_components/query/src/query.js"),
        u = e("./../../bower_components/resource/src/resource.js"),
        l = e("../dispatcher"),
        d = e("../download"),
        f = e("../mask"),
        p = e("../page-game"),
        m = !1;
        n.init = function() {
            c(".wrap-star-selector li").on("touchstart",
            function(e) {
                "LI" === e.target.nodeName && m && (c(".wrap-star-selector li").removeClass("avatar-chosed"), c("#" + e.target.id).addClass("avatar-chosed"), l.dispatch("chooseStar"))
            }),
            c(".btn-select-star").on("touchstart",
            function() {
                var e = c(".avatar-chosed");
                e.els.length && l.dispatch("submitStar", {
                    starOptionId: e.attr("id").split("star-option-")[1]
                })
            }),
            c(".wrap-star-selector li").each(function(e, t) {
                e.style("background", "url(" + CONF.STAR[t].avatar + ") 0 0 no-repeat").style("background-size: cover;"),
                c("#star-option-" + (t + 1) + " span").text(CONF.STAR[t].name)
            }),
            c("#page-index .btn-go-rule").on("touchstart",
            function() {
                l.dispatch("goRulePage")
            }),
            c("#banner-go-uc").style("-webkit-transform: translateY(0.2rem);"),
            s.
        default(window.MSG.REMIND)
        };
        var g = null;
        n.render = function(e) {
            f.showLoading(),
            g = +new Date,
            u.loadEssentialResource(CONF.RESOURCE.INDEX.concat(CONF.RESOURCE.GAME.concat(CONF.RESOURCE.GAME_MUSIC)),
            function() {
                var t = +new Date;
                t - g > CONF.LEAST_WAITING_TIME ? r(e) : setTimeout(function() {
                    r(e)
                },
                CONF.LEAST_WAITING_TIME - (t - g))
            },
            function() {})
        }
    },
    {
        "../dispatcher": 12,
        "../download": 13,
        "../mask": 22,
        "../page-game": 37,
        "../remind": 44,
        "./../../bower_components/query/src/query.js": 6,
        "./../../bower_components/resource/src/resource.js": 7
    }],
    41 : [function(e, t, n) {
        "use strict";
        function o(e) {
            return 90 * (1 - e / a) + "%"
        }
        function r(e) {
            var t = i(".container319");
            i(".cover").on("click",
            function(e) {
                return e.preventDefault()
            }),
            t.els.length && !
            function() {
                for (var t = function T() {
                    _ += N,
                    m > _ ? setTimeout(T, d) : _ = m,
                    O.innerHTML = _
                },
                n = i('<div class="coin-rain">'), r = 0; 8 > r; r++) {
                    var p = i('<img src="images/result/coin_a3d8c7f.png">').style("top", 100 * Math.random() + "%").style("left", 90 * Math.random() + "%");
                    n.append(p)
                }
                i(document.body).append(n),
                n.delay(16).style("top", "100%").delay(s).remove();
                var m = e.totalPoint || 0;
                m > a && (m = a);
                var g = e.ownerInfo.hashId,
                h = "fcsp-" + g,
                w = "fcbp-" + g,
                y = e.isShared ? +localStorage.getItem(h) || 0 : 0,
                v = +localStorage.getItem(w) || 0;
                m !== v && (localStorage.setItem(h, y = m > v ? v: 0), localStorage.setItem(w, v = m)),
                i(".wave").style("top", o(y)).delay(c).style("top", o(m));
                var b = m - y,
                C = b / 10,
                E = function(e) {
                    return "rotate(" + e + "deg)"
                },
                S = .012 * ("" + m).length,
                I = i(".up").style("width", S + "rem").delay(c).style(f, E(C)).delay(.9 * u).style(f, E(0)).delay(l).style(f, E( - C)).delay(l).style(f, E(0)),
                O = I.get();
                O.innerHTML = y;
                var _ = y,
                N = Math.ceil(b / (u + l) * d);
                setTimeout(t, s)
            } ()
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.
    default = r;
        var i = e("./../../bower_components/query/src/query.js"),
        a = 319,
        s = 1500,
        c = .3 * s,
        u = 2e3,
        l = u / 4,
        d = 70,
        f = "-webkit-transform"
    },
    {
        "./../../bower_components/query/src/query.js": 6
    }],
    42 : [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
                "default": e
            }
        }
        function r(e) {
            d(".btn-download").on("click",
            function() {
                m.dispatch("download")
            }),
            d(".btn-help").on("click",
            function() {
                e.userInfo.record || m.dispatch("help")
            }),
            d(".btn-want-play").on("click",
            function() {
                m.dispatch("wantPlay")
            }),
            d(".btn-check-myself").on("click",
            function() {
                m.dispatch("checkMyself")
            }),
            d(".btn-go-draw").on("click",
            function() {
                m.dispatch("goDraw")
            }),
            d(".btn-share").on("click",
            function() {
                m.dispatch("share")
            }),
            d(".btn-share-again").on("click",
            function() {
                m.dispatch("shareAgain")
            }),
            d(".btn-again").on("click",
            function() {
                m.dispatch("playAgain")
            }),
            d("#page-result .btn-go-rule").on("click",
            function() {
                m.dispatch("goRulePage")
            })
        }
        function i(e) {
            p.loadEssentialResource(CONF.RESOURCE.RESULT.concat(CONF.RESOURCE.GAME_MUSIC),
            function() {
                n.renderGameStatus(e),
                a(e),
                c.render(e.records),
                d("#page-result .cover").attr("src", d("#page-result .cover").attr("data-src")),
                d("#page-result").show(),
                l.
            default(e),
                g.show()
            },
            function() {})
        }
        function a(e) {
            var t = 319 - e.totalPoint;
            t = 0 > t ? 0 : t,
            d(".total-point").text(e.totalPoint),
            d(".remind-point").text(t),
            e.ownerInfo.hashId !== e.userInfo.hashId && d(".nick-owner").text(e.ownerInfo.nick.length ? FILTER.nick(e.ownerInfo.nick) : CONF.DEFAULT.OWNER_NICK)
        }
        function s() {
            var e = f.getUCVersion();
            return e.indexOf(CONF.IOS_NO_SHARE_VERSION) ? void 0 : !0
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.init = r,
        n.render = i;
        var c = e("../friends"),
        u = e("./container319"),
        l = o(u),
        d = e("./../../bower_components/query/src/query.js"),
        f = e("./../../bower_components/ua/src/ua.js"),
        p = e("./../../bower_components/resource/src/resource.js"),
        m = e("../dispatcher"),
        g = e("../download");
        n.renderGameStatus = function(e) {
            if (d(".wrap-game-status").hide(), e.blacklist) d("#wrap-blacklist").show();
            else if ("UC" !== f.pf && "WECHAT" !== f.pf) d("#wrap-others-browser").show();
            else if (f.isIOS() && s()) d("#wrap-ios-no-share").show();
            else {
                var t = e.totalPoint >= 319;
                e.ownerInfo.hashId === e.userInfo.hashId ? (CONF.WECHAT_BLOCK && (d(".btn-share-again").hide(), d(".btn-share").hide(), d(".btn-go-draw").addClass("btn-mid"), d(".btn-again").addClass("btn-mid")), t ? d("#wrap-finished").show() : d("#wrap-unfinished").show()) : e.userInfo.magic && t ? d("#wrap-friend-created-finished").show() : e.userInfo.magic && !t ? d("#wrap-friend-created").show() : !e.userInfo.magic && t ? d("#wrap-friend-finished").show() : d("#wrap-friend").show(),
                e.userInfo.record && !d(".btn-help").hasClass("btn-helped") && d(".btn-help").addClass("btn-helped")
            }
        }
    },
    {
        "../dispatcher": 12,
        "../download": 13,
        "../friends": 17,
        "./../../bower_components/query/src/query.js": 6,
        "./../../bower_components/resource/src/resource.js": 7,
        "./../../bower_components/ua/src/ua.js": 11,
        "./container319": 41
    }],
    43 : [function(require, module, exports) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
        }; !
        function(context) {
            function extenducapi() {
                var e, t = apiDef.ucapi;
                for (e in t) window.ucapi[e] = t[e]
            }
            var requireJSDK, defineJSDK; !
            function() {
                function e(e) {
                    var t = e.factory;
                    return e.exports = {},
                    delete e.factory,
                    t(function(t) {
                        var n = t;
                        return "." === t.charAt(0) && (n = e.id.slice(0, e.id.lastIndexOf(r)) + r + t.slice(2)),
                        requireJSDK(n)
                    },
                    e.exports, e),
                    e.exports
                }
                var t = {},
                n = [],
                o = {},
                r = ".";
                requireJSDK = function(r) {
                    if (!t[r]) throw "module " + r + " not found";
                    if (r in o) throw "Cycle in requireJSDK graph: " + (n.slice(o[r]).join("->") + "->" + r);
                    if (t[r].factory) try {
                        return o[r] = n.length,
                        n.push(r),
                        e(t[r])
                    } finally {
                        delete o[r],
                        n.pop()
                    }
                    return t[r].exports
                },
                defineJSDK = function(e, n) {
                    if (t[e]) throw "module " + e + " already defineJSDKd";
                    t[e] = {
                        id: e,
                        factory: n
                    }
                },
                defineJSDK.remove = function(e) {
                    delete t[e]
                },
                defineJSDK.moduleMap = t
            } (),
            defineJSDK("util",
            function(e, t) {
                function n(e) {
                    var t, o, r = e;
                    if (e && ((o = e instanceof Array) || e instanceof Object)) for (t in r = o ? [] : {},
                    e) e.hasOwnProperty(t) && (r[t] = n(e[t]));
                    return r
                }
                function o(e) {
                    var t = new Image(1, 1);
                    t.onload = function() {
                        iterator = 0
                    },
                    t.src = e
                }
                var r = e("constant"),
                i = Object.prototype.toString,
                a = {
                    getTop: function(e) {
                        var t = e.offsetTop;
                        return null != e.offsetParent && (t += a.getTop(e.offsetParent)),
                        t
                    },
                    getLeft: function(e) {
                        var t = e.offsetLeft;
                        return null != e.offsetParent && (t += a.getLeft(e.offsetParent)),
                        t
                    },
                    getCss3offsetTop: function(e) {
                        var t = getComputedStyle(e, null).webkitTransform,
                        t = "none" == t ? 0 : parseInt(t.split(",")[5].replace(")", ""));
                        return "BODY" != e.parentNode.tagName && (t += a.getCss3offsetTop(e.parentNode)),
                        t
                    },
                    getCss3offsetLeft: function(e) {
                        var t = getComputedStyle(e, null).webkitTransform,
                        t = "none" == t ? 0 : parseInt(t.split(",")[4]);
                        return "BODY" != e.parentNode.tagName && (t += a.getCss3offsetLeft(e.parentNode)),
                        t
                    },
                    getNodePosById: function(e) {
                        return (e = document.getElementById(e)) ? [a.getLeft(e) + a.getCss3offsetLeft(e), a.getTop(e) + a.getCss3offsetTop(e), e.offsetWidth, e.offsetHeight] : ""
                    }
                };
                t.getPlatform = function() {
                    return window.UCShellJava ? r.platform.ANDROID: window.__BrowserJSBridgeObj ? r.platform.IPHONE: r.platform.OTHERS
                },
                t.isString = function(e) {
                    return "[object String]" === i.call(e)
                },
                t.isFunction = function(e) {
                    return "[object Function]" === i.call(e)
                },
                t.isArray = function(e) {
                    return "[object Array]" === i.call(e)
                },
                t.isEmptyObj = function(e) {
                    for (var t in e) if (e.hasOwnProperty(t)) return ! 1;
                    return ! 0
                },
                t.clone = n,
                t.getNodePosById = a.getNodePosById,
                t.debugLog = function(e) {
                    if (ucapi && ucapi.debug) {
                        console.log(e);
                        var t = navigator.userAgent; (t.match(/(Android)\s+([\d.]+)/) || t.match(/(iPhone\sOS)\s([\d_]+)/)) && alert(e)
                    }
                },
                t.log = function(e, t) {
                    var n = "ext:a:http://track.uc.cn:9080/collect?uc_param_str=dnfrcpve&appid=272e1ec07e6f&lt=event";
                    n += "&pg=" + e,
                    n += "&e_c=" + t,
                    n += "&e_a=" + e,
                    n += "&e_n=" + e,
                    n += "&full_url=" + encodeURIComponent(location.href),
                    0 + Math.round(99 * Math.random()) === 9 && (n += "&c_t=100", o(n))
                }
            }),
            defineJSDK("constant",
            function(e, t) {
                t.platform = {
                    ALL: "all",
                    ANDROID: "android",
                    IPHONE: "iphone",
                    OTHERS: "others"
                },
                t.debug = !1,
                t.callbackStatus = {
                    OK: 0,
                    ACCESS_DENY: 1,
                    INVALID_METHOD: 2,
                    INVALID_PARAM: 3,
                    UNKNOWN_ERROR: 4
                },
                t.callbackStatusMessage = ["OK", "ACCESS_DENY", "INVALID_METHOD", "INVALID_PARAMS", "UNKNOWN_ERROR"]
            }),
            defineJSDK("bridge",
            function(e, d) {
                function b(e) {
                    return void 0 != ("undefined" == typeof ucapi ? "undefined": _typeof(ucapi)) && ucapi.invoke ? !0 : void(e && e.fail && e.fail.call(this, {
                        errCode: g.callbackStatus.INVALID_METHOD,
                        errMsg: "ucapi.invoke not exsit"
                    }))
                }
                function c(e, t, n) {
                    e && e.call(this, {
                        errCode: t,
                        errMsg: n
                    })
                }
                var a = e("util"),
                g = e("constant"),
                f = {};
                d.exec = function(e, t, n) {
                    if (a.log(e, "invoke"), b(t)) {
                        var o = a.getPlatform();
                        if (n !== g.platform.ALL && o !== n) t && t.fail && c(t.fail, g.callbackStatus.INVALID_METHOD, "this api not supported this platform");
                        else {
                            if (t && t.fail) {
                                var r = t.fail;
                                t.fail = function(t) {
                                    a.log(e, "fail"),
                                    t.errMsg = g.callbackStatusMessage[t.errCode],
                                    r.call(this, t)
                                }
                            }
                            ucapi.invoke(e, t)
                        }
                    }
                },
                d.subscribeEvent = function(e, t) {
                    b(t) && (void 0 == _typeof(ucapi.on) && t && t.fail && t.fail.call(this, {
                        errCode: g.callbackStatus.INVALID_METHOD,
                        errMsg: "ucapi.on not exsit"
                    }), e && t.success) && ucapi.on(e, t.success)
                },
                d.onEvent = function(e, t) {
                    if (a.log(e, "invoke"), t) {
                        var n = t;
                        if (a.getPlatform() == g.platform.ANDROID && "biz.onShare" == e && n.screenshotHtmlNodeId && "" != n.screenshotHtmlNodeId && (!n.screenshotRect || "" == n.screenshotRect)) {
                            var o = a.getNodePosById(n.screenshotHtmlNodeId);
                            "" != o && (o = o.join(",")),
                            n.screenshotRect = o
                        }
                        f[e] = n
                    }
                },
                d.triggerEvent = function(e) {
                    if (e && e.method && f[e.method]) {
                        var t = f[e.method];
                        if (e.channel && "invokeJs" == e.channel) return t.trigger && t.trigger(e.data),
                        e = a.clone(t),
                        e.success && delete e.success,
                        e.fail && delete e.fail,
                        e.trigger && delete e.trigger,
                        e;
                        if (e.data) t.trigger && t.trigger(e.data);
                        else {
                            var n = {};
                            n.method = e.method,
                            e.callbackId && (n.callbackId = e.callbackId),
                            n.args = t,
                            ucapi.base.triggerEventCallback(n)
                        }
                    }
                },
                d.invokeJs = function(b) {
                    if (b.js && b.callbackId) {
                        var c;
                        if (c = b.js, c = c.replace("+", "%20"), c = decodeURIComponent(c), b = {
                            result: "",
                            callbackId: b.callbackId
                        },
                        eval(c), void 0 != ucapi.base.injectInvokeJs) try {
                            a.log("base.injectInvokeJs", "inject");
                            var d = ucapi.base.injectInvokeJs();
                            d || (d = ""),
                            b.result = d
                        } catch(e) {
                            a.log("base.injectInvokeJs", "error")
                        }
                        ucapi.base.invokeJsCallback(b)
                    }
                }
            }),
            defineJSDK("apidef",
            function(e, t) {
                var n = e("constant").platform,
                o = e("bridge");
                t.ucapi = {
                    account: {
                        openLoginWindow: function(e) {
                            o.exec("account.openLoginWindow", e, n.ALL)
                        },
                        getUserInfo: function(e) {
                            o.exec("account.getUserInfo", e, n.ALL)
                        },
                        onAccountStateChange: function(e) {
                            o.onEvent("account.onAccountStateChange", e, n.ALL)
                        }
                    },
                    cms: {
                        executeAction: function(e) {
                            o.exec("cms.executeAction", e, n.ALL)
                        }
                    }
                }
            });
            var apiDef = requireJSDK("apidef"),
            util = requireJSDK("util");
            window.onerror = function(e) {
                util.debugLog("onerror:" + e)
            },
            window.ucapi ? extenducapi() : window.ucapi = apiDef.ucapi
        } (window)
    },
    {}],
    44 : [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.
    default = function(e) {
            if (((c.ucapi || "").cms || "").executeAction && !c.localStorage.getItem(i)) {
                var t = a[Math.floor(a.length * Math.random())],
                n = Math.round(Date.UTC(2016, 3, 19, t, 0, 0) / 1e3) - 28800,
                o = n - 60 * s;
                c.ucapi.cms.executeAction({
                    type: "superstar",
                    action: "remind",
                    data: [{
                        id: i,
                        stime: "" + o,
                        etime: "" + n,
                        title: e,
                        turl: r.ucParam(location.origin + location.pathname),
                        icon: "images/remind.jpg"
                    }],
                    success: function() {
                        c.localStorage.setItem(i, 1)
                    }
                })
            }
        },
        e("./jsdk");
        var o = e("./../../bower_components/ua/src/ua.js"),
        r = e("./../../bower_components/network/index.js"),
        i = "flycar",
        a = [11, 15, 18],
        s = o.isIOS() ? 10 : 5,
        c = window
    },
    {
        "./../../bower_components/network/index.js": 4,
        "./../../bower_components/ua/src/ua.js": 11,
        "./jsdk": 43
    }],
    45 : [function(e, t, n) {
        "use strict";
        function o(e) {
            E(".logic-page").hide(),
            -1 === P.indexOf(e) && (U[e].init && U[e].init(L), P.push(e)),
            U[e].render && U[e].render(L)
        }
        function r() {
            M.register("inited",
            function() {
                FILTER.inBlacklist() ? (L.blacklist = !0, S.logVisit("result"), o("result")) : L.ownerInfo.seed ? (S.logVisit("result"), o("result")) : (S.logVisit("index"), o("index"))
            }),
            M.register("starShow",
            function() {
                S.logVisit("star_show")
            }),
            M.register("chooseStar",
            function() {
                S.logClick("choose_star")
            }),
            M.register("submitStar",
            function(e) {
                L.ownerInfo.starId = e.starOptionId,
                E("#page-index").hide(),
                k.hide(),
                U.game.render(L),
                S.logClick("submit_star", {
                    starId: L.ownerInfo.starId
                }),
                S.logVisit("game")
            }),
            M.register("eatCoin",
            function(e) {
                L.coinNum += CONF.GAME_POINT_TIMES,
                ++L.coinCombo,
                L.downGear = !1,
                L.coinCombo === CONF.UPDATE_GEAR_COMBO ? (L.upGear = !0, L.coinCombo = 0) : L.upGear = !1,
                L.collisionObjectType = 4,
                L.collisionCoord = e.collisionCoord,
                U.game.updateStatus(L)
            }),
            M.register("collisionTrafficCone",
            function(e) {
                v(e.collisionCoord),
                L.collisionObjectType = 5,
                U.game.updateStatus(L)
            }),
            M.register("collisionCar",
            function(e) {
                v(e.collisionCoord),
                L.collisionObjectType = 2,
                U.game.updateStatus(L)
            }),
            M.register("gameReady",
            function() {
                A.showGameTeach()
            }),
            M.register("iKnow",
            function() {
                S.logClick("start_game"),
                U.game.startGame()
            }),
            M.register("distanceCompleted",
            function() {
                L.needGameoverAudio = !0,
                L.coinNum > CONF.MIN_COIN_NUM ? (A.showMissionCompleted(), L.userInfo.hashId ? L.ownerInfo.hashId === L.userInfo.hashId ? g() : h() : setTimeout(function() {
                    L.totalPoint = L.coinNum,
                    S.logVisit("result"),
                    o("result"),
                    A.hideMissionCompleted()
                },
                2e3)) : A.showGameFail()
            }),
            M.register("download",
            function() {
                S.logClick("download"),
                k.download()
            }),
            M.register("downloadBanner",
            function() {
                S.logClick("download_banner")
            }),
            M.register("help",
            function() {
                k.hide(),
                o("game"),
                S.logClick("help"),
                S.logVisit("game")
            }),
            M.register("wantPlay",
            function() {
                S.logClickRedirect(CONF.HOME_PAGE, "want_play")
            }),
            M.register("checkMyself",
            function() {
                S.logClickRedirect(FILTER.getUserPageUrl(L.userInfo.magic), "check_myself")
            }),
            M.register("goDraw",
            function() {
                "WECHAT" === I.pf ? T.get("logClick", {
                    clickId: "to_draw"
                },
                b, b) : (S.logClick("to_draw"), x.bind())
            }),
            M.register("share",
            function() {
                p(),
                S.logClick("share_friend")
            }),
            M.register("shareAgain",
            function() {
                p(),
                S.logClick("share_again")
            }),
            M.register("ucShareFriend",
            function() {
                m("WechatFriends")
            }),
            M.register("ucShareTimeline",
            function() {
                m("WechatTimeline")
            }),
            M.register("playAgain",
            function() {
                y(),
                S.logClick("play_again"),
                S.logVisit("game")
            }),
            M.register("retry", y),
            M.register("goRulePage",
            function() {
                T.get("logClick", {
                    clickId: "check_rule"
                },
                function() {
                    window.location.href = CONF.RULE_PAGE
                },
                function() {
                    window.location.href = CONF.RULE_PAGE
                })
            }),
            M.register("gameTouch",
            function() {
                L.needGameoverAudio && (L.needGameoverAudio = !1, F.playGameover())
            })
        }
        function i() {
            "UC" !== I.pf && "WECHAT" !== I.pf && setTimeout(function() {
                R(window.location.href)
            },
            2e3),
            U = {
                index: e("../page-index"),
                game: e("../page-game"),
                result: e("../page-result")
            },
            N.resizeJob.push(function() {
                M.dispatch("screenResize")
            }),
            N.resizeJob.push(a),
            a(),
            s(),
            r(),
            C(),
            M.dispatch("inited"),
            window.UC_FLYCAR_APP_INITED = !0
        }
        function a() {
            window.innerWidth > window.innerHeight ? A.showOrientation() : A.hideOrientation()
        }
        function s() {
            L = {
                ownerInfo: null,
                userInfo: null,
                jsApiConfig: null,
                totalPoint: 0,
                isShared: !1,
                coinNum: 0,
                coinCombo: 0
            };
            for (var e in window.__data) window.__data.hasOwnProperty(e) && (L[e] = window.__data[e]);
            L.userInfo = L.userInfo || {},
            L.ownerInfo || (L.ownerInfo = L.userInfo, L.ownerInfo.nick = CONF.DEFAULT.FIRST_OWNER_NICK),
            L.records = L.records || [],
            L.ownerInfo.seed && (L.ownerInfo.record = L.ownerInfo.seed, L.records.push(L.ownerInfo)),
            w(),
            c(),
            f()
        }
        function c() {
            var e = 0;
            if (L.ownerInfo.seed) if (L.records.length) for (L.totalPoint = 0; e < L.records.length;) L.totalPoint += L.records[e].record,
            ++e;
            else L.totalPoint = L.ownerInfo.seed;
            else L.totalPoint = 0
        }
        function u() {
            var e = "1" + d(L.ownerInfo.hashId);
            return parseInt(e, 10)
        }
        function l() {
            var e = "1" + d(L.ownerInfo.hashId) + d(L.userInfo.hashId);
            return parseInt(e, 10)
        }
        function d(e) {
            var t = "" + e;
            if (t.length > D) t = t.substr(t.length - D, t.length);
            else if (t.length < D) for (var n = D - t.length,
            o = 0; n > o;) t = "0" + t,
            ++o;
            return t
        }
        function f() {
            if ("WECHAT" === I.pf && L.ownerInfo.seed) {
                var e = MSG.SHARE.TITLE.replace("XXX", CONF.STAR[L.ownerInfo.starId - 1].name),
                t = MSG.SHARE.DESC;
                O.init({
                    jsApiConf: L.jsApiConfig,
                    title: e,
                    desc: t,
                    imgUrl: CONF.STAR[L.ownerInfo.starId - 1].avatarShare,
                    link: FILTER.getUserPageUrl(L.ownerInfo.magic)
                })
            }
        }
        function p() {
            "WECHAT" === I.pf ? (A.showWechat(), f()) : A.showUcShare()
        }
        function m(e) {
            var t = MSG.SHARE.TITLE.replace("XXX", CONF.STAR[L.ownerInfo.starId - 1].name),
            n = "UC" === I.pf ? t: MSG.SHARE.DESC;
            O.share({
                title: t,
                desc: n,
                imgUrl: CONF.STAR[L.ownerInfo.starId - 1].avatar,
                link: FILTER.getUserPageUrl(L.ownerInfo.magic),
                domId: "",
                platform: e
            })
        }
        function g() {
            T.post("generateSeed", {
                seed: _.encode(L.coinNum, u()),
                starId: L.ownerInfo.starId,
                are: window.Are.getParamStr()
            },
            function(e) {
                setTimeout(function() {
                    "000" === e.code ? (L.ownerInfo.seed = L.ownerInfo.record = L.coinNum, L.ownerInfo.magic = e.data.magic, L.records.length || (L.ownerInfo.record = L.ownerInfo.seed, L.records.push(L.ownerInfo)), c(), S.logVisit("result"), o("result"), f()) : "113" === e.code ? (S.logVisit("result"), o("result")) : A.showError(),
                    A.hideMissionCompleted()
                },
                2e3)
            },
            A.showError)
        }
        function h() {
            T.post("submitRecord", {
                magic: L.ownerInfo.magic,
                record: _.encode(L.coinNum, l()),
                are: window.Are.getParamStr()
            },
            function(e) {
                setTimeout(function() {
                    "000" === e.code ? (L.userInfo.record = L.coinNum, L.records = e.data, L.records.push(L.ownerInfo), w(), c(), S.logVisit("result"), o("result")) : A.showError(),
                    A.hideMissionCompleted()
                },
                2e3)
            },
            A.showError)
        }
        function w() {
            L.records.sort(function(e, t) {
                return e.record > t.record ? -1 : e.record < t.record ? 1 : 0
            })
        }
        function y() {
            L.coinNum = 0,
            L.coinCombo = 0,
            L.needGameoverAudio = !1,
            k.hide(),
            o("game")
        }
        function v(e) {
            L.coinNum = L.coinNum > 0 ? L.coinNum - 1 : L.coinNum,
            L.downGear = !0,
            L.coinCombo = 0,
            L.collisionCoord = e
        }
        function b() {
            T.get("getBindUrl", {},
            function(e) {
                "000" === e.code ? window.location.href = e.data.url: A.showError()
            },
            A.showError)
        }
        function C() {
            document.addEventListener("visibilitychange",
            function() {
                try {
                    F.isPlayingBgm() && document.hidden && (j = !0, F.pauseBgm()),
                    !document.hidden && j && (j = !1, F.playBgm())
                } catch(e) {
                    j = !1,
                    F.pauseBgm()
                }
            })
        }
        e("../utils/are");
        var E = e("./../../bower_components/query/src/query.js"),
        S = e("./../../bower_components/log/index.js"),
        I = e("./../../bower_components/ua/src/ua.js"),
        O = e("./../../bower_components/share/src/share.js"),
        _ = e("./../../bower_components/silly-encrypt/src/silly-encrypt.js"),
        N = e("./../../bower_components/adaptation/src/adaptation.js"),
        T = e("./../../bower_components/network/index.js"),
        R = e("./../../bower_components/openuc/index.js"),
        M = e("../dispatcher"),
        A = e("../mask"),
        k = e("../download"),
        x = e("../exchange"),
        F = e("../page-game/audio"),
        U = {},
        P = [],
        L = {};
        n.init = function() {
            i()
        };
        var D = 4;
        window.getFourBitHashId = d;
        var j = !1
    },
    {
        "../dispatcher": 12,
        "../download": 13,
        "../exchange": 15,
        "../mask": 22,
        "../page-game": 37,
        "../page-game/audio": 29,
        "../page-index": 40,
        "../page-result": 42,
        "../utils/are": 46,
        "./../../bower_components/adaptation/src/adaptation.js": 1,
        "./../../bower_components/log/index.js": 3,
        "./../../bower_components/network/index.js": 4,
        "./../../bower_components/openuc/index.js": 5,
        "./../../bower_components/query/src/query.js": 6,
        "./../../bower_components/share/src/share.js": 8,
        "./../../bower_components/silly-encrypt/src/silly-encrypt.js": 9,
        "./../../bower_components/ua/src/ua.js": 11
    }],
    46 : [function() {
        "use strict"; !
        function() {
            function e(e, t) {
                return "number" == typeof e ? t > 0 ? e.toFixed(t) : e: n
            }
            function t(t, n, o, r) {
                r.forEach(function(r) {
                    var i = 0 !== o.length ? o + r.substring(0, 1).toUpperCase() + r.substring(1) : r;
                    n[i] = e(t[r], 3)
                })
            }
            var n = "n",
            o = ["x", "y", "z"],
            r = ["alpha", "beta", "gamma"],
            i = {
                orientation: {
                    acy: n,
                    hrd: n,
                    alpha: n,
                    beta: n,
                    gamma: n
                },
                motion: {
                    intv: n,
                    accX: n,
                    accY: n,
                    accZ: n,
                    accGX: n,
                    accGY: n,
                    accGZ: n,
                    rrAlpha: n,
                    rrBeta: n,
                    rrGamma: n
                },
                support: {
                    isMotion: 0,
                    isOrient: 0
                }
            },
            a = function() {
                var e = 500,
                t = 0;
                return function() {
                    var n = new Date;
                    return n - t > e ? (t = n, !0) : void 0
                }
            },
            s = a(),
            c = a();
            window.DeviceOrientationEvent && window.addEventListener("deviceorientation",
            function(n) {
                s() && (i.support.isOrient = 1, i.orientation.acy = e(n.webkitCompassAccuracy), i.orientation.hrd = e(n.webkitCompassHeading, 3), t(n, i.orientation, "", r))
            },
            !1),
            window.DeviceMotionEvent && window.addEventListener("devicemotion",
            function(n) {
                c() && (i.support.isMotion = 1, i.motion.intv = e(n.interval, 3), n.acceleration && t(n.acceleration, i.motion, "acc", o), n.accelerationIncludingGravity && t(n.accelerationIncludingGravity, i.motion, "accG", o), n.rotationRate && t(n.rotationRate, i.motion, "rr", r))
            },
            !1);
            var u = 0,
            l = [];
            window.Are = {
                getParamStr: function() {
                    for (var e = "",
                    t = 0; t < l.length; t++) e += l[t] + "`";
                    return e.substring(0, e.length - 1)
                },
                collectData: function() {
                    var e = "",
                    t = [i.motion, i.orientation, i.support];
                    for (var n in t) if (t.hasOwnProperty(n)) for (var o in t[n]) t[n].hasOwnProperty(o) && (e += t[n][o] + ",");
                    if (e = e.substring(0, e.length - 1), 3 === u) {
                        var r = [l[1], l[2], e];
                        l = r
                    } else l[u++] = e
                }
            },
            setInterval(window.Are.collectData, 1e3)
        } ()
    },
    {}],
    47 : [function(e, t, n) {
        "use strict";
        function o(e) {
            var t = e instanceof Date ? e: new Date(e);
            return t.getDate() || (t = new Date),
            t
        }
        function r(e, t) {
            var n = o(e),
            r = void 0,
            i = void 0,
            a = 0;
            for (t = t || "YYYY-MM-DD HH:mm:ss", r = n.getHours(), i = [["M+", n.getMonth() + 1], ["D+", n.getDate()], ["H+", r], ["h+", r > 12 ? r - 12 : r], ["m+", n.getMinutes()], ["s+", n.getSeconds()]], /(Y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))); a < i.length; a++) new RegExp("(" + i[a][0] + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i[a][1] : ("00" + i[a][1]).substr(("" + i[a][1]).length)));
            return t.replace(/a/gi, r > 11 ? "pm": "am")
        }
        function i(e) {
            var t = void 0,
            n = void 0;
            t = "string" == typeof e ? "zh-cn" === e ? c: s: e,
            u || (u = {});
            for (n in t) t.hasOwnProperty(n) && "string" == typeof t[n] && (u[n] = t[n])
        }
        function a(e) {
            u || i("");
            var t = +new Date - +o(e),
            n = void 0,
            r = void 0,
            a = 0,
            s = void 0,
            c = void 0;
            for (0 > t ? (n = u.future, t = -t) : n = u.past; a < l.length; a++) if (s = l[a], c = s[1], t >= c) {
                r = u[s[0]].replace("%s", parseInt(t / c, 0) || 1);
                break
            }
            return n.replace("%s", r)
        }
        var s = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            mm: "%s minutes",
            hh: "%s hours",
            dd: "%s days",
            MM: "%s months",
            yy: "%s years"
        },
        c = {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            mm: "%s分钟",
            hh: "%s小时",
            dd: "%s天",
            MM: "%s月",
            yy: "%s年"
        },
        u = void 0,
        l = [["yy", 31536e6], ["MM", 2592e6], ["dd", 864e5], ["hh", 36e5], ["mm", 6e4], ["s", 0]];
        n.format = r,
        n.locate = i,
        n.fromNow = a
    },
    {}],
    48 : [function(e, t, n) { !
        function(e, o) {
            "use strict";
            "object" == typeof n ? t.exports = o() : "function" == typeof define && define.amd ? define(function() {
                return o()
            }) : e.sillyEjs = o()
        } (this,
        function() {
            "use strict";
            function e(t, n) {
                var o = e.delimiters.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"),
                r = new RegExp("<" + o + "([=-]?)([\\s\\S]+?)" + o + ">", "g"),
                i = new Function("_data", 'var __tpl="";with(_data){__tpl+="' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/[\r\n\t]/g, " ").replace(r,
                function(e, t, n) {
                    var o = n.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
                    return "=" === t ? '"+(""+' + o + ').replace(/</g, "&lt;").replace(/>/g, "&gt;")+"': "-" === t ? '"+(""+' + o + ')+"': '";' + o + '__tpl+="'
                }) + '"};return __tpl;');
                return i ? i(n).replace(/\s+/g, " ") : ""
            }
            return e.delimiters = "%",
            e
        })
    },
    {}],
    49 : [function(e) {
        "use strict";
        e("../../components/store").init()
    },
    {
        "../../components/store": 45
    }]
},
{},
[49]);