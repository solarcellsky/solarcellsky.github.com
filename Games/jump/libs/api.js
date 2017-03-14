/**
 * Copyright 2016 51h5.com All rights reserved.
 */
!
function(e, t) {
    function n(e) {
        var t = et[e],
        n = Array.prototype.slice.call(arguments, 1);
        if (t) {
            t = t.slice(0);
            for (var o = 0,
            i = t.length; i > o; o++) t[o].apply(qe, n)
        }
    }
    function o() {
        if (!We && !Fe) {
            Fe = !0,
            Qe.submitScore = !0,
            Qe.gameId = U("gameid"),
            Qe.ad.app = !(de[pe] && de[pe][3] || "no" === U("appbanner") || qe.is("app"));
            var t = P("aid"),
            n = U("ad", "loading");
            if (Qe.zhan && t ? Qe.ad.loading = {
                id: t,
                engine: "bd"
            }: de[pe] && de[pe][5] ? Qe.ad.loading = null: n && (Qe.ad.loading = "no" === n ? null: U("ad", "loading", !0) || null), qe.is("hoowu")) {
                var o = "_hwInitInApp";
                e[o] = function(t) {
                    e[o] = null,
                    t && t.uuid && i(t)
                },
                qe.appCall("userinfo", o)
            } else i();
            if (Qe.noLogo = de[pe] && de[pe][4], Qe.channelLogo = de[pe] && de[pe][0], Qe.channelAloneLogo = Qe.channelLogo && de[pe][1], Qe.noSplash = de[pe] && de[pe][6], !Qe.noSplash) {
                var r = U("splashscreen");
                r && (Ge = parseInt(r, 10) || 0),
                Ge && qe.splashscreen(Ge + (Qe.channelAloneLogo ? Xe: 0) + (Qe.ad.loading ? $e: 0))
            }
            return Object.keys(Qe.ad).length > 1 && w(),
            de[pe] && de[pe][8] && setTimeout(qe.home, 3e3),
            "function" == typeof onHoowuReady && e.onHoowuReady(),
            qe
        }
    }
    function i(e) {
        Fe && qe.get("init",
        function() {
            Fe = !1,
            ze = e ? e.uuid: localStorage.getItem(Ye + "guid");
            var t = U("key");
            return t && (je = t, Je = je + "_"),
            je ? void qe.get("bt",
            function(e) {
                return e ? (De = e.token, ze = ze || e.guid, localStorage.setItem(Ye + "guid", ze), void qe.get("vt",
                function(e) {
                    return e ? (qe.timing.initEnd = Date.now(), H("sdk", "status", "init", qe.timing.initEnd - W), Re = e, We = !0, a(), He.forEach(function(e) {
                        c.apply(null, e)
                    }), void(He = null)) : void n("error", {
                        type: "init",
                        code: 102
                    })
                })) : void n("error", {
                    type: "init",
                    code: 101
                })
            }) : void n("error", {
                type: "init",
                code: 100
            })
        })
    }
    function r() {
        var e, t = qe.env;
        return t.play ? e = "pc": t.hoowu || t.game ? e = "app": 1 & Qe.options ? e = "ops": "no" === (U("toolbar") || "").toLowerCase() ? e = "meta": de[pe] && de[pe][2] && (e = "channel_" + pe),
        e ? void H("toolbar", "status", "disable_" + e) : (qe.timing.toolbarLoadStart = Date.now(), void qe.getScript(Ce + "/open/sdk.php?t=tb"))
    }
    function a() {}
    function s(e, t, n) {
        new Image(1, 1).src = R(_e + "/tj.gif", C({
            act: e,
            aop: t,
            id: ze || "",
            t: je || ""
        },
        n || {}))
    }
    function c(e, t, n, o) {
        var i = Ne[t];
        if (i && !(0 === i & Be[e])) {
            if (!We && "init" !== t && "bt" !== t && "vt" !== t) return void He.push(Array.prototype.slice.call(arguments));
            E(n) && (o = n, n = null);
            var r = Ue[t];
            if (r) {
                try {
                    r.abort()
                } catch(a) {}
                r = null,
                delete Ue[t]
            }
            Ue[t] = b(ne, l(t, e), n, o)
        }
    }
    function l(e, t) {
        return Ie + Me + (t === te ? "get": "set") + e + ".html"
    }
    function u(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function d(e) {
        var t, n = Qe.share.descCustom;
        e && n && (t = n.replace(/\{l\}/g, e.level || 1).replace(/\{ls\}/g, e.levels || 1).replace(/\{s\}/g, e.score || 0).replace(/\{t\}/g, e.time || 0).replace(/\{tt\}/g, e.title || "").replace(/\{r\}/g, Math.min(100, Math.max(0, e.rate || 0)))),
        t && qe.setShare({
            desc: t
        }),
        ("score" in e || "time" in e) && qe.setScore(e)
    }
    function p(e) {
        var t = null,
        o = h(),
        i = "none" !== o.style.display;
        if ("boolean" === k(e) ? e !== i && (t = e ? 1 : 0) : t = i ? 0 : 1, null !== t) {
            o.style.display = t ? "block": "none",
            n("splashscreen." + (t ? "show": "hide"));
            var r = O(".inner", o);
            r[0].style.display = t ? "block": "none",
            Qe.channelAloneLogo && t && r.length > 1 && (clearTimeout(rt), rt = setTimeout(function() {
                r[1].style.display = "block",
                r[0].parentNode.removeChild(r[0]),
                r = null
            },
            Xe))
        }
    }
    function h() {
        var e = M(at);
        if (!e) {
            var t = U("author");
            t && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            var n = Qe.ad.loading,
            o = 4,
            i = [at + " {font-size:" + o + "vw;position:fixed;left:0;top:0;z-index:9947483646;width:100%;height:100%;box-sizing:border-box;color:#fff;text-shadow:none;font-family:'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;}", at + " .inner {display:none;position:relative;top:0;width:100%;height:100%;padding-top:14vw;pointer-events:none;background: #fff;}", at + " .inner[data-ui~=ad] {padding-top: 2px;}", at + " .inner[data-ui~=day] {background: #167de6;}", at + " .inner[data-ui~=night] {background: #2c2a2a;}", at + " .inner[data-ui~=alone] {padding-top: 2px;}", at + " .inner[data-ui~=alone] img {width: auto;height: auto;position: absolute;top: 40%;left: 50%;margin:-100px auto auto -130px;}", at + " .ft-close {position: absolute;z-index: 9999999;top: -20px;left: 50%;margin-left: -15px;width: 30px;height: 30px;line-height: 30px;text-align: center;color: #fff;border: 1px solid #fff;border-radius: 15px;font-weight: bold;cursor: pointer;box-shadow:1px 2px 4px #000;-webkit-box-shadow:1px 2px 4px #000;}", at + ' .ft-close[data-ui~="day"] {background: #167de6;}', at + ' .ft-close[data-ui~="night"] {background: #2c2a2a;}', at + " .ft {position: fixed;bottom: 0;width: 100%;height: auto;text-align: center;background: #fff;}", at + " img {display:block;margin:2vw auto 5vw;height:14vw;width:auto;}", at + " p {font-size:" + o + "vw;line-height:" + o + "vw;text-align:center;margin:2vw auto;padding:0 2vw;}", at + " .hw_info {font-size: " + .8 * o + "vw;color: rgba(255,255,255,.7);}", at + " .progress {height:4vw;overflow:hidden;margin: 1vw 2vw;background-color:#f5f5f5;border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);}", at + " .progress .bar {float:left;min-width:7vw;height:100%;line-height:" + o + "vw;font-size:" + .7 * o + "px;text-align:center;color:#fff;box-sizing:border-box;background-color:#428bca;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease;-webkit-transition:width .6s ease;-o-transition:width .6s ease;}"];
            x(i.join("")),
            e = ee.createElement("div"),
            e.id = at.slice(1),
            e.style.display = "none";
            var r = (new Date).getHours();
            r = 6 > r || r > 20 ? "night": "day",
            e.innerHTML = Qe.channelLogo && Qe.channelAloneLogo ? ['<div class="inner" data-ui="alone">', '<img src="' + Ee + "/images/home/loading_" + de[pe][0] + '.png">', "</div>", '<div class="inner" data-ui="alone ' + r + '">', '<img src="' + Ee + '/images/home/loading_hoowu.png" >', "</div>", n ? '<div class="ft"><div class="ft-close" data-ui="' + r + '">x</div><div id="hw_ad_' + n + '"></div></div>': ""].join("") : ['<div class="inner" data-ui="' + (n ? "ad": "") + " " + r + '">', Qe.noLogo ? "": '<img src="' + Ee + '/images/home/logo_wr_220x100_black.png" height="80">', Qe.channelLogo && !Qe.channelAloneLogo ? '<img src="' + Ee + "/images/home/logo_" + de[pe][0] + '.png" height="80">': "", Qe.noLogo ? "": t ? "<p><strong>\u706b\u821e\u6e38\u620f</strong> &bull; <strong>" + t + "</strong> \u539f\u521b\u51fa\u54c1</p><p>\u8f6c\u8f7d\u8bf7\u7ecf\u8fc7\u6388\u6743\uff0c\u4fb5\u6743\u5fc5\u7a76</p>": "<p>\u706b\u821e\u6e38\u620f &bull; \u4e3a\u672a\u6765\u800c\u751f</p>", Qe.noLogo ? '<p style="margin-top: 40%;">\u6b63\u5728\u542f\u52a8\u6e38\u620f ...</p>': '<p class="hw_info">\u6e38\u620f\u8f7d\u5165\u4e2d...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>", n ? '<div class="ft"><div class="ft-close" data-ui="' + r + '" onclick="this.parentNode.style.display=\'none\';">x</div><div id="hw_ad_' + n.id + '"></div></div>': ""].join(""),
            M("body").appendChild(e),
            n && v(n, "hw_ad_" + n.id)
        }
        return e
    }
    function f(e) {
        var t, o = m(),
        i = "none" !== o.style.display;
        "boolean" === k(e) ? e !== i && (t = e ? "block": "none") : t = i ? "none": "block",
        t && (o.style.display = t, n("orientation." + ("none" === t ? "hide": "show")))
    }
    function m() {
        var e = M(lt);
        if (!e) {
            var t = [lt + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.8);}", lt + " .inner {width:100%;height:100%;padding-top:200px;pointer-events:none;}", lt + " .tip {position:absolute;left:50%;top:50%;margin-left:-88px;margin-top:-56px;width:200px;z-index:9999;}", lt + " p {color:#4a87ee;font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}"];
            x(t.join("")),
            e = ee.createElement("div"),
            e.id = lt.slice(1),
            e.style.display = "none",
            e.innerHTML = ['<div class="inner">', '<img src="' + Ee + '/images/orientation.png" class="tip">', "</div>"].join(" "),
            B(e),
            M("body").appendChild(e)
        }
        return e
    }
    function g() {
        clearTimeout(dt),
        dt = setTimeout(function() {
            var t = !0,
            o = e.orientation;
            if (0 === o || 180 === o) t = !0;
            else if ( - 90 === o || 90 === o) t = !1;
            else {
                var i = N();
                t = i.h > i.w
            }
            null === st ? st = t: st !== t && (st = t, n("orientation", t)),
            "boolean" == typeof ct && f(t !== ct)
        },
        ut)
    }
    function v(t, o, i, r) {
        if (t && o && !Qe["ad" + t.engine + t.id] && (T(o) && (o = M("#" + o)), ee.documentElement.contains(o))) {
            var a = !1;
            if ("gg" === t.engine) o.innerHTML = '<ins class="adsbygoogle" data-ad-client="ca-pub-2950544153986345" data-ad-slot="' + t.id + '" ' + (t.width || t.height ? 'style="' + (t.width ? "width:" + t.width + "px;": "") + (t.height ? "height:" + t.height + "px;": "") + '"': "") + "></ins>",
            (adsbygoogle = e.adsbygoogle || []).push({});
            else if ("bd" === t.engine) if ("gallery" === t.type) {
                t.height && (o.style.height = t.height + "px"),
                o.innerHTML = '<iframe src="about:blank" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border:0px;height:' + (t.height ? t.height + "px;": "100%;") + "width:" + (t.width ? t.width + "px;": "100%;") + ' "></iframe>';
                var s = '<script>var cpro_id="' + t.id + '";(window.cproStyleApi=window.cproStyleApi||{})[cpro_id]=' + JSON.stringify(t.style) + ';</script><script src="http://cpro.baidustatic.com/cpro/ui/cm.js"></script>',
                c = o.getElementsByTagName("iframe")[0].contentWindow.document;
                c.open(),
                c.write("<!DOCTYPE html><head><title>" + ee.title + "</title></head><body>" + s + "</body>"),
                c.close(),
                s = null,
                a = !0
            } else(e.BAIDU_DUP2 = e.BAIDU_DUP2 || []).push(["fillAsync", t.id, o]);
            else "qq" === t.engine && (e.TencentGDT = e.TencentGDT || [], TencentGDT.push({
                appid: "1104119029",
                posid: t.id,
                type: t.type || "banner",
                containerid: o.id,
                filltype: t.fill || "full"
            }));
            Qe["ad" + t.engine + t.id] = !0,
            i && n(i, r || null),
            a || w(t.engine)
        }
    }
    function w(t) {
        var n = {};
        I(Qe.ad,
        function(e, t) {
            t && t.engine && (n[t.engine] = 1)
        }),
        n[t] && ("bd" === t && n.bd && !e.BAIDU_DUP2_require && S("http://cpro.baidustatic.com/cpro/ui/cm.js"), "gg" === t && n.gg && !e.google_top_js_status && S("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"), "qq" === t && n.qq && !e.GDT && S("//qzs.qq.com/qzone/biz/res/i.js"))
    }
    function b(t, n, o, i) {
        var r = new XMLHttpRequest;
        return t === te && o && (n = R(n, o), o = null),
        "withCredentials" in r && (r.withCredentials = !0),
        r.open(t, n, !0),
        je && r.setRequestHeader("X-KEY", je),
        (De || Re) && r.setRequestHeader("X-TOKEN", Re || De),
        ze && r.setRequestHeader("X-GUID", ze),
        t === ne && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        i && (r.onerror = r.onabort = function() {
            y(r),
            i(null, 500, r)
        },
        r.onload = function() {
            y(r);
            var t = r.status;
            if (t >= 200 && 300 > t || 304 === t) {
                var n, o = r.responseText;
                try {
                    n = JSON.parse(o)
                } catch(a) {
                    e[Le](o)
                }
                if (n && n.url) return void(location.href = n.url);
                n && 1 === n.status ? i(n.data || "", n.status, r) : i(null, n.status, r)
            } else i(null, t, r)
        }),
        e.FormData && o instanceof FormData ? r.send(o) : T(o) ? r.send(o) : r.send(D(o)),
        r
    }
    function y(e) {
        e.onload = e.onabort = e.onerror = e.ontimeout = null
    }
    function x(e, t) {
        var n;
        t = t || ee,
        n = t.createElement("style"),
        n.type = "text/css",
        t.getElementsByTagName("head")[0].appendChild(n),
        n.styleSheet ? n.styleSheet.cssText = e: n.appendChild(t.createTextNode(e))
    }
    function S(e, t) {
        e = e.trim(),
        t = t || {};
        var n = ee.createElement("script");
        n.charset = t.charset || "utf-8",
        n.defer = "defer",
        n.async = "async";
        var o = D(t.data);
        e += o ? (e.indexOf("?") < 0 ? "?": "&") + o: "",
        n.src = e;
        var i = ee.getElementsByTagName("head")[0];
        i ? i.appendChild(n) : (i = ee.getElementsByTagName("script")[0], i && i.parentNode.insertBefore(n, i))
    }
    function k(e) {
        return null == e ? String(e) : Pe[Object.prototype.toString.call(e)] || "object"
    }
    function T(e) {
        return "string" === k(e)
    }
    function E(e) {
        return "function" === k(e)
    }
    function _(e) {
        return "object" === k(e) && Object.getPrototypeOf(e) === Object.prototype
    }
    function I(e, t) {
        Object.keys(e).forEach(function(n) {
            t(n, e[n])
        })
    }
    function C(e, t) {
        return I(t,
        function(t, n) {
            e[t] = n
        }),
        e
    }
    function M(e, t) {
        return T(e) ? (t = t || ee, t.querySelector(e)) : e
    }
    function O(e, t) {
        return T(e) ? (t = t || ee, [].slice.call(t.querySelectorAll(e), 0)) : e
    }
    function A(e) {
        return "string" == typeof e && "" !== e
    }
    function L(e) {
        return A(e)
    }
    function P(t) {
        var n = e.location.search.substr(1).match(new RegExp("(^|&)" + t + "=([^&]*)(&|$)"));
        return n ? decodeURIComponent(n[2]) : null
    }
    function q(e, t) {
        if (A(e)) {
            var n = String(ee.cookie).match(new RegExp("(?:^|)" + e + "(?:(?:=([^;]*))|;|$)"));
            if (n) return (n = n[1]) ? t ? decodeURIComponent(n) : n: ""
        }
        return null
    }
    function j(e, t) {
        return t = t || {},
        q(L(e) ? e: "", !t.raw)
    }
    function D(e) {
        var t = [];
        return I(e || {},
        function(e, n) {
            Array.isArray(n) || (n = [n]),
            n.forEach(function(n) {
                t.push(e + "=" + encodeURIComponent(n))
            })
        }),
        t.join("&")
    }
    function R(e, t) {
        T(t) || (t = D(t)),
        e = e.split("#");
        var n = e[1];
        return e = e[0],
        t && (e += e.indexOf("?") >= 0 ? "&": "?", e += t + (n ? "#" + n: "")),
        e
    }
    function z(e) {
        e && (e.preventDefault(), e.stopPropagation())
    }
    function B(e) {
        e && e.addEventListener(qe.env.phone ? oe: "click", z, !1)
    }
    function N() {
        return {
            w: e.innerWidth,
            h: e.innerHeight
        }
    }
    function U(e, t, n) {
        var o = null,
        i = M('meta[name="x-' + e + '"]');
        if (i && (o = (i.getAttribute(t ? "data-" + t: "content") || "").trim()), o && n) {
            var r = {};
            return o.split(",").forEach(function(e) {
                e = e.split("="),
                r[e[0]] = e[1]
            }),
            r
        }
        return o
    }
    function H(t, n, o, i) {
        var r = [$ + "trackEvent", t, n];
        o && r.push(o),
        i && r.push(parseInt(parseInt(i, 10) / 1e3, 10)),
        ["hmt", "czc"].forEach(function(t) {
            var n = e[$ + t];
            n || (n = e[$ + t] = []),
            n.push(r)
        })
    }
    function Q(e, t) {
        e = e.split("."),
        t = t.split(".");
        for (var n = 0,
        o = Math.max(e.length, t.length); o > n; n++) if (e[n] = parseInt(e[n], 10) || 0, t[n] = parseInt(t[n], 10) || 0, e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0
    }
    for (var W = Date.now(), F = ":", V = "/", G = ".", X = "-", $ = "_", Y = "1", J = "5", K = [], Z = 97; 122 > Z; Z++) K.push(String.fromCharCode(Z));
    var ee = e.document,
    te = "GET",
    ne = "POST",
    oe = "touchstart",
    ie = "mousedown",
    re = location.protocol,
    ae = location.hostname,
    se = location.pathname,
    ce = e.navigator.userAgent,
    le = K[7] + K[19] + K[19] + K[15] + F + V + V,
    ue = G + K[2] + K[14] + K[12],
    de = {
        1003 : ["ishanku"],
        1004 : ["uc", !1, !0, !0],
        1005 : ["", !1, !1, !0],
        1006 : ["", !1, !1, !0],
        1007 : [],
        1008 : [],
        1009 : [],
        1010 : ["", !1, !0, !0],
        1011 : "",
        1012 : ["chetuobang"],
        1013 : ["youxiduo"],
        1014 : ["", !1, !0, !0],
        1015 : ["", !1, !0, !0],
        1016 : ["weibo", !0, !0, !0],
        1019 : ["", !1, !1, !0, !1, !0],
        1021 : ["meiriq", !1, !0],
        1022 : ["8864"],
        1025 : ["luoboyou"],
        1026 : [],
        1031 : ["", !1, !0, !0, !1, !0],
        1035 : ["", !1, !0, !1, !1, !0],
        1036 : ["", !1, !0],
        2003 : ["swjoy"],
        3001 : ["", !1, !0],
        3004 : ["", !1, !1, !0],
        3005 : ["", !1, !1, !1, !1, !0],
        3006 : ["", !1, !0],
        3011 : ["", !1, !1, !1, !1, !1, !1, !1, !0],
        3014 : ["", !1, !1, !1, !0],
        3015 : ["", !1, !1, !1, !1, !0],
        3020 : ["", !1, !1, !0, !1, !0],
        3021 : ["", !1, !0, !1, !1, !1, !0]
    },
    pe = 0 | P("f"),
    he = "((?:http|https|ftp):)?//(?:[^/])*",
    fe = "(?:(?:(?:51h5|wanh5|h5hero|h5wenhua|h5jiaoyu|h5jiaju|h5gift|h5o2o|linkedin-professional|udache).com)|(?:qlogo.cn))",
    me = new RegExp(fe + "$").test(ae),
    ge = new RegExp("^" + he + fe),
    ve = "i1.wanh5.com" === ae,
    we = ve || /(?:\d+\.){3}\d+/.test(ae) || /^dev[\.|\-]\w/.test(ae),
    be = we ? K[3] + K[4] + K[21] + G: "",
    ye = le + be + J + Y + K[7] + J + ue,
    xe = ye + V + K[22] + K[23],
    Se = ye + V + K[0] + K[15] + K[15] + X + K[3] + K[14] + K[22] + K[13] + K[11] + K[14] + K[0] + K[3] + G + K[7] + K[19] + K[12] + K[11],
    ke = ye + V + K[22] + K[23] + X + K[3] + K[14] + K[22] + K[13] + G + K[7] + K[19] + K[12] + K[11],
    Te = "http://mp.weixin.qq.com/s?__biz=MzAwODE2MzEwMQ==&mid=202092460&idx=1&sn=5a901ce32da0c3f7bdb8230e5993beb3#rd",
    Ee = (le + be + K[9] + K[20] + K[12] + K[15] + G + J + Y + K[7] + J + ue, le + be + K[18] + K[19] + K[0] + K[19] + K[8] + K[2] + G + K[22] + K[0] + K[13] + K[7] + J + ue),
    _e = le + "tongji" + G + J + Y + K[7] + J + ue,
    Ie = le + be + K[0] + K[15] + K[8] + G + J + Y + K[7] + J + ue,
    Ce = ve ? le + K[0] + K[15] + K[8] + G + J + Y + K[7] + J + ue: Ie,
    Me = V + K[0] + K[15] + K[8] + K[18] + X,
    Oe = re + "//" + location.host,
    Ae = Oe + se.replace(/\/([^\/]+\.\w+)$/, "/").replace(/(\w+)$/, "$1/"),
    Le = K[4] + K[21] + K[0] + K[11],
    Pe = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e) {
        Pe["[object " + e + "]"] = e.toLowerCase()
    });
    var qe = e.ih5game = {};
    qe.ver = "1.7.0",
    qe.lang = navigator.language.toLowerCase(),
    qe.dpr = parseInt(e.devicePixelRatio, 10) || 1,
    qe.dprScale = 1,
    qe.fontScale = 1,
    qe.scale = (screen.width || screen.availWidth) / (e.innerWidth || ee.body.clientWidth || ee.documentElement.clientWidth),
    qe.timing = {
        initStart: W
    },
    qe.channel = pe,
    qe.server = be,
    qe.preview = ve,
    qe.getQuery = P,
    qe.getParams = D,
    qe.getXMeta = U,
    qe.getScript = S,
    qe.addStyle = x,
    qe.trackEvent = H;
    var je, De, Re, ze, Be = {
        GET: 1,
        SET: 2
    },
    Ne = {
        init: 1,
        bt: 1,
        vt: 1,
        ui: 1,
        gv: 1,
        jf: 3,
        ph: 1,
        ok: 1,
        data: 3,
        title: 1,
        tc: 2,
        guc: 3,
        gpd: 3,
        dtc: 1,
        grlg: 1
    },
    Ue = {},
    He = [],
    Qe = {
        gameId: null,
        bestScore: 0,
        zhan: parseInt(P("zhan"), 10) || 0,
        ad: {
            app: !1
        },
        nick: "\u706b\u821e\u73a9\u5bb6",
        options: parseInt(P("hwops"), 10) || 0,
        scale: {},
        share: {
            id: U("share-id") || (/(?:h5gift|h5o2o)\.com$/.test(ae) ? "h5weixiao": "ihuowu"),
            img: U("share-icon"),
            title: U("share-title"),
            titleCustom: U("share-title", "custom"),
            desc: U("share-desc"),
            descCustom: U("share-desc", "custom"),
            link: U("share")
        }
    },
    We = !1,
    Fe = !1,
    Ve = !1,
    Ge = 3e3,
    Xe = 1500,
    $e = 4e3,
    Ye = "51h5_",
    Je = Ye,
    Ke = "51h5_user",
    Ze = "wx_user"; !
    function(n) {
        n.getTimes = function(n) {
            var o = e.performance || e.webkitPerformance || e.msPerformance || e.mozPerformance;
            if (!o) return ! 1;
            var i = o.timing,
            r = {};
            if (n = n || {},
            i) {
                if (n && !n.simple) for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
                if (t === r.firstPaint) {
                    var s = 0;
                    e.chrome && e.chrome.loadTimes ? (s = 1e3 * e.chrome.loadTimes().firstPaintTime, r.firstPaintTime = s - 1e3 * e.chrome.loadTimes().startLoadTime) : "number" == typeof e.performance.timing.msFirstPaint && (s = e.performance.timing.msFirstPaint, r.firstPaintTime = s - e.performance.timing.navigationStart),
                    n && !n.simple && (r.firstPaint = s)
                }
                r.loadTime = i.loadEventEnd - i.fetchStart,
                r.domReadyTime = i.domComplete - i.domInteractive,
                r.readyStart = i.fetchStart - i.navigationStart,
                r.redirectTime = i.redirectEnd - i.redirectStart,
                r.appcacheTime = i.domainLookupStart - i.fetchStart,
                r.unloadEventTime = i.unloadEventEnd - i.unloadEventStart,
                r.lookupDomainTime = i.domainLookupEnd - i.domainLookupStart,
                r.connectTime = i.connectEnd - i.connectStart,
                r.requestTime = i.responseEnd - i.requestStart,
                r.initDomTreeTime = i.domInteractive - i.responseEnd,
                r.loadEventTime = i.loadEventEnd - i.loadEventStart
            }
            return r
        },
        n.printTable = function(e) {
            var t = {},
            n = this.getTimes(e) || {};
            Object.keys(n).sort().forEach(function(e) {
                t[e] = {
                    ms: n[e],
                    s: +(n[e] / 1e3).toFixed(2)
                }
            }),
            console.table(t)
        },
        n.printSimpleTable = function() {
            this.printTable({
                simple: !0
            })
        }
    } (qe.timing);
    var et = {};
    qe.on = function(e, t) {
        return et[e] = et[e] || [],
        et[e].push(t),
        qe
    },
    qe.once = function(e, t) {
        function n() {
            qe.off(e, n),
            t.apply(this, arguments)
        }
        return n.listener = t,
        qe.on(e, n),
        qe
    },
    qe.off = function(e, t) {
        if (0 === arguments.length) return et = {},
        qe;
        var n = et[e];
        if (!n) return qe;
        if (1 === arguments.length) return delete et[e],
        qe;
        for (var o, i = 0; i < n.length; i++) if (o = n[i], o === t || o.listener === t) {
            n.splice(i, 1);
            break
        }
        return qe
    },
    qe.env = {},
    qe.is = function(e) {
        return e = e.toLowerCase(),
        qe.env.hasOwnProperty(e) && qe.env[e] ? !0 : !1
    },
    function(t) {
        var n = (ce.match(/Web[kK]it[\/]{0,1}([\d.]+)/), ce.match(/(Android);?[\s\/]+([\d.]+)?/)),
        o = ( !! ce.match(/\(Macintosh\; Intel /), ce.match(/(iPad).*OS\s([\d_]+)/)),
        i = ce.match(/(iPod)(.*OS\s([\d_]+))?/),
        r = !o && ce.match(/(iPhone\sOS)\s([\d_]+)/),
        a = ce.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        s = ce.match(/Windows Phone ([\d.]+)/),
        c = (a && ce.match(/TouchPad/), ce.match(/Kindle\/([\d.]+)/), ce.match(/Silk\/([\d._]+)/), ce.match(/(BlackBerry).*Version\/([\d.]+)/)),
        l = ce.match(/(BB10).*Version\/([\d.]+)/),
        u = (ce.match(/(RIM\sTablet\sOS)\s([\d.]+)/), ce.match(/PlayBook/)),
        d = ce.match(/Chrome\/([\d.]+)/) || ce.match(/CriOS\/([\d.]+)/),
        p = ce.match(/Firefox\/([\d.]+)/),
        h = ce.match(/MSIE\s([\d.]+)/) || ce.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        f = !d && ce.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        m = (f || ce.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/), ce.match(/AlipayClient\/([\d.]+)/)),
        g = ce.match(/AliApp\(TB\/([\d.]+)\)/),
        v = ce.match(/MicroMessenger\/([\d.]+)/),
        w = ce.match(/baiduboxapp\/[^\/]+\/([\d.]+)_/) || ce.match(/baiduboxapp\/([\d.]+)/) || ce.match(/BaiduHD\/([\d.]+)/) || ce.match(/FlyFlow\/([\d.]+)/) || ce.match(/baidubrowser\/([\d.]+)/),
        b = ce.match(/MQQBrowser\/([\d.]+)/) || ce.match(/QQ\/([\d.]+)/),
        y = ce.match(/UCBrowser\/([\d.]+)/),
        x = ce.match(/SogouMobileBrowser\/([\d.]+)/),
        S = n && ce.match(/MiuiBrowser\/([\d.]+)/),
        k = ce.match(/LieBaoFast\/([\d.]+)/) || ce.match(/LBKIT/),
        T = ce.match(/Mercury\/([\d.]+)/),
        E = ce.match(/Hoowu\/([\d.]+)/),
        _ = ce.match(/HoowuGame\/([\d]+)/),
        I = ce.match(/__weibo__([\d.]+)__/),
        C = ce.match(/mso_app\s+\(([\d.]+)\)/);
        f && (t.webview = !0),
        I && (t.weibo = I[1]),
        v && (t.wechat = v[1]),
        m && (t.alipay = m[1]),
        g && (t.taobao = g[1]),
        C && (t.mso = C[1]),
        s && (t.wp = s[1]),
        n && (t.android = n[2]),
        o && (t.ipad = o[2].replace(/_/g, ".")),
        i && (t.ipod = i[3].replace(/_/g, ".") || null),
        r && (t.iphone = r[2].replace(/_/g, ".")),
        (t.ipod || t.iphone || t.ipad) && (t.ios = !0),
        e.hwclient ? (t.app = hwclient.version || "1.3.0", t.hoowu = !0) : E ? (t.app = E[1], t.hoowu = !0) : n && ce.match(/Html5Plus\/([\d.]+)/) && (t.app = "1.0.0"),
        _ && (t.game = _[1]),
        /\s+weico/i.test(ce) && (t.weico = "1.0"),
        w && (delete t.webview, t.baidu = w[1]),
        b && (t.qq = b[1]),
        y && (delete t.webview, t.uc = y[1]),
        x && (delete t.webview, t.sogou = x[1]),
        S && (t.xiaomi = S[1]),
        k && (t.liebao = k[1] || "1.0.0"),
        T && (t.mercury = T[1]),
        navigator.standalone && (t.standalone = !0),
        t.tablet = !!(o || u || n && !ce.match(/Mobile/) || p && ce.match(/Tablet/) || h && !ce.match(/Phone/) && ce.match(/Touch/)),
        t.phone = !(t.tablet || t.ipod || !(n || r || a || c || l || d && ce.match(/Android/) || d && ce.match(/CriOS\/([\d.]+)/) || p && ce.match(/Mobile/) || h && ce.match(/Touch/))),
        e.self !== e.top && (t.iframe = !0),
        t.phone || t.tablet || !t.iframe || /^http[s]?\:\/\/(?:\w+\.)*(?:51h5|wanh5)\.com/.test(ee.referrer) && (t.play = !0)
    } (qe.env),
    qe.storage = {
        driver: "localStorage" in e ? localStorage: null,
        get: function(e) {
            return this.driver ? this.driver.getItem(Je + e) : null
        },
        set: function(e, t, n) { ! this.driver || !e || n && null !== this.get(e) || this.driver.setItem(Je + e, t)
        },
        remove: function(e) {
            this.driver && e && null !== this.get(e) && this.driver.removeItem(Je + e)
        },
        clear: function(e) {
            if (this.driver) for (var t in this.driver) 0 === t.indexOf(Je) && this.driver.removeItem(t)
        }
    },
    e.addEventListener("storage",
    function(e) {
        if (je) {
            var t = e.key;
            if (t && 0 === t.indexOf(Je)) {
                var o = {
                    key: t.slice(Je.length),
                    from: e.oldValue,
                    to: e.newValue,
                    time: e.timeStamp,
                    url: e.url
                };
                null === o.from ? n("storage.add", {
                    key: o.key,
                    value: o.to,
                    time: o.time,
                    url: o.url
                }) : null === o.to ? n("storage.remove", {
                    key: o.key,
                    time: o.time,
                    url: o.url
                }) : n("storage.change", o),
                n("storage", o)
            }
        }
    }),
    qe.is("hoowu") || qe.is("game") || (Qe.options = 0),
    qe.config = function(e, t) {
        if (_(e)) for (var n in e) e.hasOwnProperty(n) && qe.config(n, e[n]);
        else "nickName" === e && t && (Qe.nick = t);
        return qe
    },
    qe.getRuntime = function(e) {
        var t = k(Qe[e]);
        return "string" === t || "number" === t || "boolean" === t ? Qe[e] : null
    },
    qe.init = function() {},
    qe.ssoFinish = function(e) {
        qe.getUser(function(e) {
            e && e.name && (Qe.nick = e.name)
        }),
        n("sso", e),
        n("init")
    },
    qe.ready = function(e) {
        return Ve ? e && e() : qe.once("ready", e),
        qe
    },
    /complete|loaded|interactive/.test(ee.readyState) && ee.body ? Ve = !0 : ee.addEventListener("DOMContentLoaded",
    function() {
        Ve = !0,
        n("ready")
    },
    !1),
    qe.on("error",
    function(e) {
        "init" === e.type && (qe.timing.initEnd = Date.now(), H("sdk", "status", "error_init", qe.timing.initEnd - W))
    });
    qe.ready(r);
    qe.get = function(e, t, n) {
        var o = qe[te.toLowerCase() + u(e)];
        return o ? o(t, n) : c(te, e, t, n),
        qe
    },
    qe.set = function(e, t, n) {
        var o = qe[ne.toLowerCase() + u(e)];
        return o ? o(t, n) : c(ne, e, t, n),
        qe
    };
    var tt = [0, 0, 0, 0, 0, 0, 0];
    qe.start = function(e) {
        return tt[0] || (tt[0] = Date.now()),
        tt[1] = Date.now(),
        tt[2] = tt[3] = 0,
        n("status.start", e),
        qe
    },
    qe.resume = function(e) {
        tt[2] && (tt[2] = 0, n("status.resume", e))
    },
    qe.pause = function(e) {
        return tt[2] || (tt[2] = Date.now(), n("status.pause", e)),
        qe
    },
    qe.stop = function(e) {
        return tt[3] || (tt[3] = Date.now(), tt[1] = tt[2] = 0, _(e) || (e = {
            score: Math.max(parseFloat(e, 10), 0)
        }), n("status.stop", e)),
        qe
    },
    qe.levelUp = function(e) {
        e = e || {};
        var t = e.level || 1;
        if (t > tt[4]) tt[4] = t;
        else if (!e.force) return qe;
        return n("status.levelup", e),
        qe
    },
    qe.complete = function(e) {
        return tt[5] = Date.now(),
        n("status.complete", e),
        qe
    },
    qe.mute = function(e) {
        return tt[6] || (tt[6] = 1, n("status.mute", e)),
        qe
    },
    qe.unmute = function(e) {
        return tt[6] && (tt[6] = 0, n("status.unmute", e)),
        qe
    },
    qe.on("status.stop", d).on("status.levelup", d).on("status.complete", d);
    var nt, ot = "#hw_share";
    qe.share = function(e, t) {
        clearTimeout(nt);
        var o = M(ot);
        if (o) {
            var i;
            e && (i = o.querySelector("p:last-child")) && (i.innerHTML = e)
        } else {
            var r = qe.env.mso,
            a = [ot + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.85);}", ot + " .inner {width:100%;height:100%;padding-top:100px;pointer-events:none;}", ot + " .hw_arron {position:absolute;z-index:9999;width:100px;}", ot + " .hw_arron_rt {top:3px;right:18px;}", ot + " .hw_arron_rb {bottom:3px;right:18px;}", ot + " p {color:#fff;font-size:24px;text-align:center;margin:5px auto;padding:0;}"];
            x(a.join("")),
            o = ee.createElement("div"),
            o.id = ot.slice(1),
            o.innerHTML = ['<div class="inner">', '<img src="' + Ee + "/images/home/" + (r ? "arron_rb": "arron_rt") + '.png" class="hw_arron ' + (r ? "hw_arron_rb": "hw_arron_rt") + '">', t ? "": r ? "<p>\u8bf7\u70b9\u51fb\u53f3\u4e0b\u89d2</p><p>\u5206\u4eab\u7ed9\u597d\u53cb</p>": "<p>\u544a\u77e5\u5c0f\u4f19\u4f34\uff0c\u5171\u4eab\u597d\u751f\u6d3b</p>", '<p style="margin: 20px auto;">' + (e || "\u706b\u821e\u6e38\u620f \u4e3a\u672a\u6765\u800c\u751f<br/><br/>" + ye.replace(le, "")) + "</p></div>"].join(" "),
            B(o);
            var s = o.querySelector(".inner");
            s && s.addEventListener(qe.env.phone ? oe: ie, qe.hideShare),
            M("body").appendChild(o)
        }
        return qe.wx.showOptionMenu(),
        o.style.display = "block",
        n("share.show"),
        nt = setTimeout(function() {
            o.querySelector(".inner").style.pointerEvents = "auto"
        },
        500),
        qe
    },
    qe.hideShare = function() {
        var e = M(ot);
        return e && (e.style.display = "none", e.querySelector(".inner").style.pointerEvents = "none", n("share.hide")),
        qe
    },
    qe.more = function(e) {
        var t = qe.env.wechat ? xe: ye;
        return e ? t: void(parent.location.href = t)
    },
    qe.home = function(e) {
        return e ? ye: void(parent.location.href = ye)
    },
    qe.follow = function(e) {
        return e ? Te: void(parent.location.href = Te)
    },
    qe.download = function(e) {
        var t = qe.env.wechat ? ke: Se;
        return e ? t: void(parent.location.href = t)
    },
    qe.rank = function(e) {},
    qe.progress = function(e, t) {
        var o = M(at);
        if (!o) return qe;
        var i = M(".progress", o);
        return i ? ("none" === i.style.display && (i.style.display = "block"), t = T(t) ? t.trim() : "", t && (i = M(".hw_info", o)) && (i.innerText = t), e = "number" === k(e) ? Math.min(100, Math.max(0, e)) : -1, e >= 0 && (i = M(".progress .bar", o)) && (i.innerText = e + "%", i.style.width = e + "%", n("progress", e, t)), qe) : qe
    },
    qe.splashscreen = function(e) {
        return it = clearTimeout(it),
        "boolean" === k(e) ? p(e) : e > 0 ? (p(!0), it = setTimeout(function() {
            p(!1)
        },
        e)) : p(),
        qe
    },
    (qe.is("game") || 2 & Qe.options) && (qe.splashscreen = function() {});
    var it, rt, at = "#hw_splashscreen",
    st = null,
    ct = null;
    qe.getOrientation = function() {
        return st
    },
    qe.orientationTip = function(e) {
        return "boolean" == typeof e && (ct = e, g()),
        qe
    };
    var lt = "#hw_orientationtip",
    ut = qe.is("android") ? 350 : 100,
    dt = null;
    qe.ready(function() {
        e.addEventListener("onorientationchange" in e ? "orientationchange": "resize", g, !1),
        g();
        var t = U("orientation");
        t && (t = "portrait" === t ? 1 : "landscape" === t ? 2 : parseInt(t, 10) || 0, t && qe.orientationTip(1 === t))
    }),
    qe.getUser = function(e, t) {
        if (E(e) ? (t = e, e = !1) : "boolean" !== k(e) && (e = !1), !t) return qe;
        var o = {
            id: 0,
            name: null,
            avatar: "http://" + qe.server + "i1.wanh5.com/avatar/default/1.jpg",
            gender: 0,
            display: ""
        },
        i = j(Ke);
        return i && (i = decodeURIComponent(i).split("|"), o = {
            id: parseInt(i[0], 10) || 0,
            name: decodeURIComponent(i[1]) || null,
            avatar: decodeURIComponent(i[2]),
            gender: parseInt(i[3], 10) || 0,
            display: decodeURIComponent(i[4]) || null
        }),
        e ? c(te, "ui",
        function(e, i) {
            null !== e ? (o = C(o, e), n("user.get", o)) : n("error", {
                type: "user.get",
                code: i
            }),
            t && E(t) && t(o, i)
        }) : (n("user.get", o), t && E(t) && t(o)),
        qe
    },
    qe.getWXUser = function() {
        var e = j(Ze);
        if (e) try {
            e = JSON.parse(decodeURIComponent(e)),
            n("wxuser.get", e)
        } catch(t) {
            n("error", {
                type: "wxuser.get",
                code: t.message
            })
        }
        return e || null
    },
    qe.getStat = function(e) {
        return c(te, "gv",
        function(t, o) {
            null !== t ? n("stat.get", t) : n("error", {
                type: "stat.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        qe
    },
    qe.getScore = function(e) {
        return c(te, "jf",
        function(t, o) {
            null !== t ? n("score.get", t) : n("error", {
                type: "score.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        qe
    },
    qe.setScore = function(e, t, o) {
        if (_(e)) return qe.setScore(e.score, e.time, e.success);
        if (e = parseFloat(e, 10) || 0, 0 >= e || e <= Qe.bestScore) return qe;
        E(t) && (o = t, t = null);
        var i = {
            s: e
        };
        return Qe.bestScore = e,
        t = parseFloat(t, 10) || 0,
        t > 0 && (i.t = t),
        Qe.nick && (i.n = Qe.nick),
        Qe.submitScore ? (qe.is("game") ? qe.appCall("uploadScore", e || t, "game") : qe.is("hoowu") ? qe.appCall("uploadScore", e || t) : c(ne, "jf", i,
        function(e, t) {
            null !== e ? n("score.set", i.s, i.t, i.n) : n("error", {
                type: "score.set",
                code: t
            }),
            o && E(o) && o(e, t)
        }), qe) : (n("error", {
            type: "score.set",
            code: 1100
        }), o && E(o) && o(null, 1100), qe)
    },
    qe.setScoreWithName = function(e, t, n, o, i) {
        if (!Qe.submitScore) return qe;
        if (_(e)) return qe.setScoreWithName(e.score, e.time, e.success, e.always, e.tip);
        var r;
        return (o || e > Qe.bestScore) && (r = prompt((i || "\u4f60\u83b7\u5f97\u4e86%s\u5206, \u4f7f\u7528\u4e0b\u9762\u540d\u5b57\u5e76\u901a\u77e5\u597d\u53cb\uff1f").replace(/\%s/gi, e), Qe.nick)),
        r ? (Qe.nick = r, qe.setScore(e, t, n)) : qe
    },
    pe && pe in de && (qe.setScoreWithName = qe.setScore),
    qe.getRank = function(e, t) {
        return E(e) && (t = e, e = null),
        c(te, "ph", {
            order: T(e) && "time" === e ? "time": "score"
        },
        function(e, o) {
            null !== e ? n("rank.get", e) : n("error", {
                type: "rank.get",
                code: o
            }),
            t && E(t) && t(e, o)
        }),
        qe
    },
    qe.getSaveData = function(e) {
        return c(te, "data",
        function(t, o) {
            null !== t ? n("savedata.get", t) : n("error", {
                type: "savedata.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        qe
    },
    qe.setSaveData = function(e, t) {
        return T(e) ? (e = {
            d: e
        },
        c(ne, "data", e,
        function(o, i) {
            null !== o ? n("savedata.set", e.d) : n("error", {
                type: "savedata.set",
                code: i
            }),
            t && E(t) && t(o, i)
        }), qe) : qe
    },
    qe.getData = function(e) {
        return c(te, "guc",
        function(t, o) {
            null !== t ? n("data.get", t) : n("error", {
                type: "data.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        qe
    },
    qe.setData = function(e, t) {
        return T(e) ? (e = {
            d: e
        },
        c(ne, "guc", e,
        function(o, i) {
            null !== o ? n("data.set", e.d) : n("error", {
                type: "data.set",
                code: i
            }),
            t && E(t) && t(o, i)
        }), qe) : qe
    },
    qe.getGameData = function(e, t) {
        return c(te, "gpd", {
            p: e
        },
        function(o, i) {
            null !== o ? n("gamedata.get", e, o) : n("error", {
                type: "gamedata.get",
                code: i
            }),
            t && E(t) && t(o, i)
        }),
        qe
    },
    qe.setGameData = function(e, t, o) {
        return T(t) ? (t = {
            p: e,
            v: t
        },
        c(ne, "gpd", t,
        function(e, i) {
            null !== e ? n("gamedata.set", t.p, t.v) : n("error", {
                type: "gamedata.set",
                code: i
            }),
            o && E(o) && o(e, i)
        }), qe) : qe
    },
    qe.getTitle = function(e) {
        return c(te, "title",
        function(t, o) {
            null !== t ? n("title.get", t) : n("error", {
                type: "title.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        qe
    },
    qe.getHotGames = function(e) {
        return c(te, "grlg",
        function(t, o) {
            null !== t ? n("hotgames.get", t) : n("error", {
                type: "hotgames.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        qe
    },
    function(t) {
        function o(e, t) {
            return /^(?:\w+)?:/.test(e) || t && !/\.(?:png|jpg)$/.test(e) ? void 0 : (e = e.replace(/^\/+/, ""), e = e.replace(/^(\.+\/+)+/, ""), Ae + e)
        }
        function i(t, n) {
            l && me && e.wx && e.wx[t](n)
        }
        function r(e, t, o) {
            return l && d ? void i("onMenuShare" + b[e], {
                title: t.title,
                desc: t.desc,
                link: t.link,
                imgUrl: t.img,
                trigger: function(t) {
                    n("share.open", e)
                },
                success: function(e) {
                    o("success", e)
                },
                cancel: function(e) {
                    o("cancel", e)
                },
                fail: function(e) {
                    o("fail", e)
                }
            }) : void S.push(arguments)
        }
        function a(e, t) {
            var o = x[e + "Link"] || x.link;
            de[pe] && !de[pe][7] && (o = o + (o.indexOf("?") >= 0 ? "&": "?") + "f=" + pe),
            ze && (o = o + (o.indexOf("?") >= 0 ? "&": "?") + "fu=" + encodeURIComponent(ze)),
            o = o + (o.indexOf("?") >= 0 ? "&": "?") + "ft=" + (new Date).getTime(),
            r(e, {
                img: x.img,
                link: o,
                title: e === g ? x.desc: x.title,
                desc: e === g ? x.title: x.desc
            },
            function(o) {
                var i = {
                    type: e
                };
                i[o] = !0,
                n("share", i),
                n("share.close"),
                "cancel" !== o && s("share", o),
                t && E(t) && t(i)
            })
        }
        function c(t) {
            var o = e.wx;
            o.config({
                debug: "1" === P("debug"),
                appId: t.appId,
                timestamp: t.timestamp,
                nonceStr: t.nonceStr,
                signature: t.signature,
                jsApiList: h
            }),
            o.ready(function() {
                d = !0,
                a(m),
                a(g),
                a(v),
                a(w),
                S.forEach(function(e) {
                    r.apply(null, e)
                }),
                S = []
            }),
            o.error(function(e) {
                n("error", {
                    type: "wx",
                    code: e.errMsg || 0
                })
            })
        }
        var l = !!t.env.wechat,
        u = !0;
        l && t.env.android && Q(t.env.wechat, "6.0.2.58") < 0 && (u = !1);
        var d, p = !l || "no" === U("wxbridge"),
        h = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
        f = t.wx = t.wx || {},
        m = f.SHARE_TYPE_APP = "app",
        g = f.SHARE_TYPE_TIMELINE = "timeline",
        v = f.SHARE_TYPE_WIEBO = "weibo",
        w = f.SHARE_TYPE_QQ = "qq",
        b = {};
        b[m] = "AppMessage",
        b[g] = "Timeline",
        b[v] = "Weibo",
        b[w] = "QQ";
        var y = Qe.share,
        x = {
            img: y.img || Ae + "icon.png",
            link: (u ? y.link: "") || Ae,
            query: "",
            title: y.title || ee.title || "\u706b\u821e\u6e38\u620f",
            desc: y.desc || ee.title || "\u706b\u821e\u6e38\u620f"
        };
        t.getShare = function(e) {
            return e ? x[e] : C({},
            x)
        },
        t.setShare = function(e, i, r) {
            if (_(e)) {
                r = !!i;
                for (var s in e) e.hasOwnProperty(s) && t.setShare(s, e[s], r)
            } else if (e && x.hasOwnProperty(e) && T(e) && T(i) && i) {
                if ("link" === e) {
                    if (i = o(i, !1), !i) return t
                } else if ("img" === e) {
                    if (!ge.test(i) && (i = o(i, !0), !i)) return t
                } else "query" === e ? x.link = R(x.link, i) : u && me || "title" !== e && "desc" !== e || i && (ee.title = i);
                var c = x[e];
                x[e] = i,
                n("share.set", e, c, i),
                !r && d && (a(m), a(g), a(v), a(w))
            }
            return t
        },
        f.sendFriend = function(e, n) {
            return t.setShare(e, !0),
            r(m, n),
            this
        },
        f.sendTimeline = function(e, n) {
            return t.setShare(e, !0),
            r(g, n),
            this
        },
        f.sendWeibo = function(e, n) {
            return t.setShare(e, !0),
            a(v, n),
            this
        },
        me && t.env.wechat ? h.slice(5).forEach(function(t) {
            f[t] = function(n) {
                e.wx && e.wx[t](n)
            }
        }) : f.hideOptionMenu = f.showOptionMenu = function() {};
        var S = [];
        if (me && !p) {
            ee.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');
            var k = "__cbhoowu" + Date.now();
            e[k] = function(t) {
                e[k] = null,
                c(t)
            },
            ee.write('<script src="http://api.wx.51h5.com/web/share/sign/id/' + y.id + "?cb=" + k + '"></script>')
        }
    } (qe),
    qe.setBanner = function(e) {
        return qe
    },
    qe.showAd = function() {},
    qe.hideAd = function() {},
    qe.isAd = function() {
        return qe.is("game") || 4 & Qe.options || !Qe.ad.app ? !1 : !0
    },
    qe.notify = function(e) {
        e && "object" === k(e) && n("message.notify", e)
    };
    var pt = {
        base: {
            share: function(e) {
                return e ? D(e) : ""
            },
            sharetext: function(e) {
                return e ? D(e) : ""
            }
        },
        hoowu: {
            follow: 1,
            home: 1,
            more: 1,
            setting: 1,
            me: 1,
            userinfo: function(e) {
                return "cb=" + e
            },
            game: function(e) {
                return e ? "id=" + e: ""
            }
        },
        game: {
            comment: 1,
            rank: 1,
            uploadScore: function(e) {
                return "score=" + Math.ceil(parseFloat(e, 10) || 0)
            },
            follow: function() {
                return alert("zh-cn" === qe.lang ? "\u656c\u8bf7\u671f\u5f85": "coming soon"),
                !1
            },
            home: function() {
                return alert("zh-cn" === qe.lang ? "\u656c\u8bf7\u671f\u5f85": "coming soon"),
                !1
            },
            more: function() {
                return alert("zh-cn" === qe.lang ? "\u656c\u8bf7\u671f\u5f85": "coming soon"),
                !1
            }
        }
    };
    qe.appCall = function(e, n, o) {
        o = (o || "hoowu").toLowerCase();
        var i = pt.base[e] || (pt[o] ? pt[o][e] : t);
        if ("game" === o && (o += qe.env.game), i && "game" !== o) {
            var r = k(i);
            "function" === r ? n = i(n) : "number" === r ? n = "": "string" === r && (n = i),
            !1 !== n && (location.href = o + "://" + e + (n ? "?" + n: ""))
        }
    },
    qe.ready(o),
    qe.ready(function() {
        for (var t, n = "//hm.baidu.com/hm.js?0c906e9f94713174584881c774a94212",
        o = $ + "hmt",
        i = ee.getElementsByTagName("script"), r = i.length; r > t; t++) if (i[t].src.indexOf(n) >= 0) return;
        e[o] = e[o] || [];
        var a = ee.createElement("script");
        a.src = n,
        i[0].parentNode.insertBefore(a, i[0])
    }),
    qe.ready(function() {
        for (var t, n = 1253472040,
        o = "//w.cnzz.com/q_stat.php?id=" + n,
        i = $ + "czc",
        r = ee.getElementsByTagName("script"), a = r.length; a > t; t++) if (r[t].src.indexOf(o) >= 0) return;
        e[i] = e[i] || [];
        var s = ee.createElement("script");
        s.src = o,
        r[0].parentNode.insertBefore(s, r[0])
    })
} (this),
~
function(e, t) {
    var n = e.ih5game;
    if (n.is("game")) {
        var o = "game";
        "follow,home,more,rank,comment".split(",").forEach(function(e) {
            n[e] = function() {
                n.appCall(e, null, o)
            }
        }),
        n.share = function(e) {
            var t = n.getShare();
            return delete t.query,
            e && (t.type = e),
            n.appCall("share", t, o),
            n
        },
        n.on("share.set",
        function() {
            var e = n.getShare();
            delete e.query,
            n.appCall("sharetext", e, o)
        }),
        n.on("status.stop",
        function(e) {
            n.setScore(e)
        })
    }
} (this),
~
function(e, t) {
    var n = e.ih5game;
    n.is("hoowu") && ("follow,home,more".split(",").forEach(function(e) {
        n[e] = function() {
            n.appCall(e)
        }
    }), n.share = function(e) {
        var t = n.getShare();
        return delete t.query,
        e && (t.type = e),
        n.appCall("share", t),
        n
    },
    n.on("share.set",
    function() {
        var e = n.getShare();
        delete e.query,
        n.appCall("sharetext", e)
    }))
} (this),
~
function(e, t) {
    function n(e) {
        return e && (e.score = e.score || e.time || 0, e.score) ? e: null
    }
    function o(e, t, n) {
        r(),
        c && (t = t || {},
        c.src = p + e + "?sig=" + u + ("end" === e ? "&score=" + t.score: "") + (t.free ? "&free=1": "") + "&domain=" + encodeURIComponent(location.hostname))
    }
    function i(e) {
        c && (c.style.display = e ? "": "none")
    }
    function r() {
        c || (c = document.createElement("iframe"), c.setAttribute("allowtransparency", !0), c.setAttribute("frameborder", 0), c.style.cssText = "display:none;position:fixed;top:0;left:0;z-index:999999999;margin:0;padding:0;border:none;background-color:transparent;", c.width = c.height = "100%", document.body.appendChild(c))
    }
    var a = e.ih5game,
    s = parseInt(a.getQuery("act"), 10) || 0;
    if (s) {
        var c, l = "http://" + a.server + "kiip.51h5.com",
        u = a.getQuery("sig") || "",
        d = !1,
        p = l + "/popup/";
        a.on("status.stop",
        function(e) {
            e = n(e),
            e && (d && (d = !1, e.free = !0), o("end", e))
        }),
        a.on("message.notify",
        function(e) {
            if (e.kiip) {
                var t = e.act;
                "show" === t ? i(!0) : "error" === t ? i(!1) : "start" === t || "again" === t ? i(!1) : "end" === t ? i(!0) : "skip" === t ? (d = !0, i(!1)) : "back" === t && (location.href = l + "/item/back?sig=" + u)
            }
        }),
        a.ready(function() {
            o("start")
        })
    }
} (this),
~
function(e, t) {
    var n = e.ih5game;
    n.is("weico") && (n.share = function() {
        location.href = "weico3://compose?action=present&type=weibo&content=" + n.getShare("desc") + "&gameid=" + n.getRuntime("gameId")
    })
} (this),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = o.home(!0) + "/op-",
        r = i + "zte.html";
        o.more = function(t) {
            return t ? r: void(e.location.href = r)
        },
        o.download = o.home = o.more
    }
} (this, 1014),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i, r = o.getXMeta("weibo-key"),
        a = "sinaweibo://snggame",
        s = "http://weibo.com/u/5126161537",
        c = "http://" + o.server + "api.51h5.com",
        l = o.env.weibo ? a: s,
        u = o.getXMeta("weibo-share-tip") || "\u5206\u4eab\u6210\u529f";
        o.share = function() {
            if (i && (i = clearTimeout(i)), r) {
                var e = c + "/api-weibo-share.html?key=" + r + "&msg=" + encodeURIComponent(o.getShare("desc"));
                o.getScript(e),
                u && (i = setTimeout(function() {
                    alert(u)
                },
                800))
            }
            return o
        },
        o.more = function(t) {
            return t ? l: void(e.location.href = l)
        },
        o.download = o.home = o.more
    }
} (this, 1016),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = "http://h5.play.cn/";
        o.home = o.more = function(t) {
            return t ? i: void(e.location.href = i)
        }
    }
} (this, 1019),
~
function(e, t, n) {
    var o = e.ih5game;
    o.channel === t && (o.home = o.more = o.download = function() {})
} (this, 1031),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = "http://xs.qidian.com/html/index.shtml";
        o.more = function(t) {
            return t ? i: void(e.location.href = i)
        },
        o.download = o.home = o.more
    }
} (this, 1035),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = "http://y.buptinfo.com/happy/";
        o.home = o.more = function(t) {
            return t ? i: void(e.location.href = i)
        }
    }
} (this, 3004),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = o.home(!0) + "/op-",
        r = i + "dxt.html";
        o.more = function(t) {
            return t ? r: void(e.location.href = r)
        },
        o.download = o.home = o.more
    }
} (this, 3009),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = o.getQuery("mobile");
        if (i && !(i.length < 11)) {
            var r = "http://" + o.server + "api.51h5.com",
            a = 0;
            o.on("status.stop",
            function(e) {
                var t = (e ? e.score: 0) || 0;
                t > a && (a = t, new Image(1, 1).src = r + "/open/vendin.php?data=" + encodeURIComponent(JSON.stringify({
                    mn: i,
                    id: o.getXMeta("id"),
                    sn: t
                })))
            })
        }
    }
} (this, 3015),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var i = parseInt(o.getQuery("gameid"), 10);
        if (! (0 >= i)) {
            var r = o.getQuery("sign");
            if (r) {
                var a = 1 === parseInt(o.getQuery("all"), 10),
                s = "http://" + o.server + "api.51h5.com",
                c = 0;
                o.on("status.stop",
                function(e) {
                    var t = (e ? e.score: 0) || 0; (a || t > c) && (c = t, new Image(1, 1).src = s + "/open/anshu.php?data=" + encodeURIComponent(JSON.stringify({
                        gameid: i,
                        userid: o.getQuery("userid"),
                        platform: o.getQuery("platform"),
                        time: o.getQuery("time"),
                        sign: r,
                        id: o.getXMeta("id"),
                        score: t
                    })))
                })
            }
        }
    }
} (this, 3021);