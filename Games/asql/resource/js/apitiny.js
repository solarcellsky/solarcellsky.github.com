/**
 * Copyright 2015 51h5.com All rights reserved.
 */
! function(e, t) {
    function n(e) {
        var t = Yt[e],
            n = Array.prototype.slice.call(arguments, 1);
        if (t) {
            t = t.slice(0);
            for (var o = 0, r = t.length; r > o; o++) t[o].apply(Lt, n)
        }
    }

    function o() {
        if (!Ht && !Nt) {
            Nt = !0, Ut.submitScore = !0, Ut.gameId = H("gameid"), Ut.appBanner = !(dt[pt] && dt[pt][3] || "no" === H("appbanner") || Lt.is("app"));
            var t = j("aid");
            if (Ut.zhan && t && (Ut.ad.loading = t), Lt.is("hoowu")) {
                var n = "_hwInitInApp";
                e[n] = function(t) {
                    e[db] = null, t && t.uuid && r(t)
                }, Lt.appCall("userinfo", n)
            } else r();
            Ut.noLogo = dt[pt] && dt[pt][4], Ut.channelLogo = dt[pt] && dt[pt][0], Ut.channelAloneLogo = Ut.channelLogo && dt[pt][1];
            var o = H("splashscreen");
            return o && (Qt = parseInt(o, 10) || 0), Qt && Lt.splashscreen(Qt + (Ut.channelAloneLogo ? Ft : 0) + (Ut.ad.loading ? Vt : 0)), (Ut.banner || Object.keys(Ut.ad).length) && w(), "function" == typeof onHoowuReady && onHoowuReady(), Lt
        }
    }

    function r(e) {
        if (Nt) {
            Nt = !1, zt = e ? e.uuid : localStorage.getItem(Xt + "guid");
            var t = H("key");
            if (t && (Ot = t, $t = Ot + "_"), !Ot) return void n("error", {
                type: "init",
                code: 100
            });
            Ht = !0, a(), qt.forEach(function(e) {
                s.apply(null, e)
            }), qt = null
        }
    }

    function i() {
        var e = Lt.env;
        e.hoowu || e.game || 1 & Ut.options || "no" === (H("toolbar") || "").toLowerCase() || dt[pt] && dt[pt][2] || Lt.getScript(Et + "/open/sdk.php?t=tb")
    }

    function a() {}

    function c(e, t, n) {
        new Image(1, 1).src = P(kt + "/tj.gif", T({
            act: e,
            aop: t,
            id: zt || "",
            t: Ot || ""
        }, n || {}))
    }

    function s(e, t, n, o) {
        var r = Pt[t];
        if (r && !(0 === r & Bt[e])) {
            if (!Ht && "init" !== t && "bt" !== t && "vt" !== t) return void qt.push(Array.prototype.slice.call(arguments));
            E(n) && (o = n, n = null);
            var i = Dt[t];
            if (i) {
                try {
                    i.abort()
                } catch (a) {}
                i = null, delete Dt[t]
            }
            Dt[t] = b(nt, u(t, e), n, o)
        }
    }

    function u(e, t) {
        return _t + It + (t === tt ? "get" : "set") + e + ".html"
    }

    function l(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function d(e) {
        var t, n = Ut.share.descCustom;
        e && n && (t = n.replace(/\{l\}/g, e.level || 1).replace(/\{ls\}/g, e.levels || 1).replace(/\{s\}/g, e.score || 0).replace(/\{t\}/g, e.time || 0).replace(/\{tt\}/g, e.title || "").replace(/\{r\}/g, Math.min(100, Math.max(0, e.rate || 0)))), t && Lt.setShare({
            desc: t
        })
    }

    function p(e) {
        var t = null,
            o = h(),
            r = "none" !== o.style.display;
        if ("boolean" === k(e) ? e !== r && (t = e ? 1 : 0) : t = r ? 0 : 1, null !== t) {
            o.style.display = t ? "block" : "none", n("splashscreen." + (t ? "show" : "hide"));
            var i = A(".inner", o);
            i[0].style.display = t ? "block" : "none", Ut.channelAloneLogo && t && i.length > 1 && (clearTimeout(nn), nn = setTimeout(function() {
                i[1].style.display = "block", i[0].parentNode.removeChild(i[0]), i = null
            }, Ft))
        }
    }

    function h() {
        var e = M(on);
        if (!e) {
            var t = H("author");
            t && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            var n = Ut.ad.loading,
                o = Lt.dprScale,
                r = 18 * Lt.fontScale,
                i = [on + " {zoom:" + o + ";font-size:" + r + "px;position:fixed;left:0;top:0;z-index:9947483646;width:100%;height:100%;box-sizing:border-box;color:#fff;text-shadow:none;font-family:'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;}", on + " .inner {display:none;position:relative;top:0;width:100%;height:100%;padding-top:80px;pointer-events:none;background: #fff;}", on + " .inner[data-ui~=ad] {padding-top: 2px;}", on + " .inner[data-ui~=day] {background: #167de6;}", on + " .inner[data-ui~=night] {background: #2c2a2a;}", on + " .inner[data-ui~=alone] {padding-top: 2px;}", on + " .inner[data-ui~=alone] img {width: auto;height: auto;position: absolute;top: 40%;left: 50%;margin:-100px auto auto -130px;}", on + " .ft {position: absolute; bottom: 0; width: 100%; height: 290px;}", on + " .ft *{position: static;}", on + " img {display:block;margin:10px auto 30px;height:80px;width:auto;}", on + " p {font-size:" + r + "px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}", on + " .hw_info {font-size: " + .8 * r + "px;color: rgba(255,255,255,.7);}", on + " .progress {height:20px;overflow:hidden;margin: 5px 10px;background-color:#f5f5f5;border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);}", on + " .progress .bar {float:left;min-width:20px;height:100%;line-height:20px;font-size:" + .7 * r + "px;text-align:center;color:#fff;box-sizing:border-box;background-color:#428bca;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease;-webkit-transition:width .6s ease;-o-transition:width .6s ease;}"];
            x(i.join("")), e = et.createElement("div"), e.id = on.slice(1), e.style.display = "none";
            var a = (new Date).getHours();
            a = 6 > a || a > 20 ? "night" : "day", e.innerHTML = Ut.channelLogo && Ut.channelAloneLogo ? ['<div class="inner" data-ui="alone">', '<img src="' + St + "/images/home/loading_" + dt[pt][0] + '.png">', "</div>", '<div class="inner" data-ui="alone ' + a + '">', '<img src="' + St + '/images/home/loading_hoowu.png" >', "</div>", n ? '<div class="ft" id="hw_ad_' + n + '"></div>' : ""].join("") : ['<div class="inner" data-ui="' + (n ? "ad" : "") + " " + a + '">', Ut.noLogo ? "" : '<img src="' + St + '/images/home/logo_wr_220x100_black.png" height="80">', Ut.channelLogo && !Ut.channelAloneLogo ? '<img src="' + St + "/images/home/logo_" + dt[pt][0] + '.png" height="80">' : "", Ut.noLogo ? "" : t ? "<p><strong>\u706b\u821e\u6e38\u620f</strong> &bull; <strong>" + t + "</strong> \u539f\u521b\u51fa\u54c1</p><p>\u8f6c\u8f7d\u8bf7\u7ecf\u8fc7\u6388\u6743\uff0c\u4fb5\u6743\u5fc5\u7a76</p>" : "<p>\u706b\u821e\u6e38\u620f &bull; \u4e3a\u672a\u6765\u800c\u751f</p>", Ut.noLogo ? '<p style="margin-top: 40%;">\u6b63\u5728\u542f\u52a8\u6e38\u620f ...</p>' : '<p class="hw_info">\u6e38\u620f\u8f7d\u5165\u4e2d...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>", n ? '<div class="ft" id="hw_ad_' + n + '"></div>' : ""].join(""), q(e), M("body").appendChild(e), n && v(n, "hw_ad_" + n)
        }
        return e
    }

    function f(e) {
        var t, o = m(),
            r = "none" !== o.style.display;
        "boolean" === k(e) ? e !== r && (t = e ? "block" : "none") : t = r ? "none" : "block", t && (o.style.display = t, n("orientation." + ("none" === t ? "hide" : "show")))
    }

    function m() {
        var e = M(cn);
        if (!e) {
            var t = [cn + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.8);}", cn + " .inner {width:100%;height:100%;padding-top:200px;pointer-events:none;}", cn + " .tip {position:absolute;left:50%;top:50%;margin-left:-88px;margin-top:-56px;width:200px;z-index:9999;}", cn + " p {color:#4a87ee;font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}"];
            x(t.join("")), e = et.createElement("div"), e.id = cn.slice(1), e.style.display = "none", e.innerHTML = ['<div class="inner">', '<img src="' + St + '/images/orientation.png" class="tip">', "</div>"].join(" "), q(e), M("body").appendChild(e)
        }
        return e
    }

    function g() {
        clearTimeout(un), un = setTimeout(function() {
            var t = !0,
                o = e.orientation;
            if (0 === o || 180 === o) t = !0;
            else if (-90 === o || 90 === o) t = !1;
            else {
                var r = U();
                t = r.h > r.w
            }
            null === rn ? rn = t : rn !== t && (rn = t, n("orientation", t)), "boolean" == typeof an && f(t !== an)
        }, sn)
    }

    function v(t, o, r) {
        t && o && !Ut["ad" + t] && (_(o) && (o = M("#" + o)), et.documentElement.contains(o) && ((e.BAIDU_DUP2 = e.BAIDU_DUP2 || []).push(["fillAsync", t, o]), Ut["ad" + t] = !0, r && n("banner.set")))
    }

    function w() {
        e.BAIDU_DUP2_require || S("http://cpro.baidustatic.com/cpro/ui/cm.js")
    }

    function b(t, n, o, r) {
        var i = new XMLHttpRequest;
        return t === tt && o && (n = P(n, o), o = null), i.open(t, n, !0), Ot && i.setRequestHeader("X-KEY", Ot), (jt || Rt) && i.setRequestHeader("X-TOKEN", Rt || jt), zt && i.setRequestHeader("X-GUID", zt), t === nt && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r && (i.onerror = i.onabort = function() {
            y(i), r(null, 500, i)
        }, i.onload = function() {
            y(i);
            var t = i.status;
            if (t >= 200 && 300 > t || 304 == t) {
                var n, o = i.responseText;
                try {
                    n = JSON.parse(o)
                } catch (a) {
                    e[Mt](o)
                }
                if (n && n.url) return void(location.href = n.url);
                n && 1 === n.status ? r(n.data || "", n.status, i) : r(null, n.status, i)
            } else r(null, t, i)
        }), i.send(e.FormData && o instanceof FormData ? o : _(o) ? o : B(o)), i
    }

    function y(e) {
        e.onload = e.onabort = e.onerror = e.ontimeout = null
    }

    function x(e, t) {
        var n;
        t = t || et, n = t.createElement("style"), n.type = "text/css", t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e))
    }

    function S(e, t) {
        e = e.trim(), t = t || {};
        var n = et.createElement("script");
        n.charset = t.charset || "utf-8", n.defer = "defer", n.async = "async";
        var o = B(t.data);
        e += o ? (e.indexOf("?") < 0 ? "?" : "&") + o : "", n.src = e;
        var r = et.getElementsByTagName("head")[0];
        r ? r.appendChild(n) : (r = et.getElementsByTagName("script")[0], r && r.parentNode.insertBefore(n, r))
    }

    function k(e) {
        return null == e ? String(e) : At[Object.prototype.toString.call(e)] || "object"
    }

    function _(e) {
        return "string" === k(e)
    }

    function E(e) {
        return "function" === k(e)
    }

    function I(e) {
        return "object" === k(e) && Object.getPrototypeOf(e) === Object.prototype
    }

    function C(e, t) {
        Object.keys(e).forEach(function(n) {
            t(n, e[n])
        })
    }

    function T(e, t) {
        return C(t, function(t, n) {
            e[t] = n
        }), e
    }

    function M(e, t) {
        return _(e) ? (t = t || et, t.querySelector(e)) : e
    }

    function A(e, t) {
        return _(e) ? (t = t || et, [].slice.call(t.querySelectorAll(e), 0)) : e
    }

    function L(e) {
        return "string" == typeof e && "" !== e
    }

    function O(e) {
        return L(e)
    }

    function j(t) {
        var n = e.location.search.substr(1).match(new RegExp("(^|&)" + t + "=([^&]*)(&|$)"));
        return n ? decodeURIComponent(n[2]) : null
    }

    function R(e, t) {
        if (L(e)) {
            var n = String(et.cookie).match(new RegExp("(?:^|)" + e + "(?:(?:=([^;]*))|;|$)"));
            if (n) return (n = n[1]) ? t ? decodeURIComponent(n) : n : ""
        }
        return null
    }

    function z(e, t) {
        return t = t || {}, R(O(e) ? e : "", !t.raw)
    }

    function B(e) {
        var t = [];
        return C(e || {}, function(e, n) {
            Array.isArray(n) || (n = [n]), n.forEach(function(n) {
                t.push(e + "=" + encodeURIComponent(n))
            })
        }), t.join("&")
    }

    function P(e, t) {
        _(t) || (t = B(t)), e = e.split("#");
        var n = e[1];
        return e = e[0], t && (e += e.indexOf("?") >= 0 ? "&" : "?", e += t + (n ? "#" + n : "")), e
    }

    function D(e) {
        e && (e.preventDefault(), e.stopPropagation())
    }

    function q(e) {
        e && e.addEventListener(Lt.env.phone ? ot : "click", D, !1)
    }

    function U() {
        return {
            w: e.innerWidth,
            h: e.innerHeight
        }
    }

    function H(e, t, n) {
        var o = null,
            r = M('meta[name="x-' + e + '"]');
        if (r && (o = (r.getAttribute(t ? "data-" + t : "content") || "").trim()), o && n) {
            var i = {};
            return o.split(",").forEach(function(e) {
                e = e.split("="), i[e[0]] = e[1]
            }), i
        }
        return o
    }

    function N(t) {
        var n = [G + "trackEvent", t].concat(Array.prototype.slice.call(arguments, 1).map(function(e) {
            return t + G + e
        }));
        ["hmt", "czc"].forEach(function(t) {
            var o = e[G + t];
            o && o.push(n)
        })
    }

    function W(e, t) {
        e = e.split("."), t = t.split(".");
        for (var n = 0, o = Math.max(e.length, t.length); o > n; n++)
            if (e[n] = parseInt(e[n], 10) || 0, t[n] = parseInt(t[n], 10) || 0, e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0
    }
    for (var Q = ":", F = "/", V = ".", X = "-", G = "_", K = "1", Y = "5", J = [], Z = 97; 122 > Z; Z++) J.push(String.fromCharCode(Z));
    var et = e.document,
        tt = "GET",
        nt = "POST",
        ot = "touchstart",
        rt = "mousedown",
        it = location.protocol,
        at = location.hostname,
        ct = location.pathname,
        st = e.navigator.userAgent,
        ut = J[7] + J[19] + J[19] + J[15] + Q + F + F,
        lt = V + J[2] + J[14] + J[12],
        dt = {
            1003: ["ishanku"],
            1004: ["uc", !1, !0, !0],
            1005: ["", !1, !1, !0],
            1006: ["", !1, !1, !0],
            1007: [],
            1008: [],
            1009: [],
            1010: ["", !1, !0, !0],
            1011: "",
            1012: ["chetuobang"],
            1013: ["youxiduo"],
            1014: ["", !1, !0, !0],
            1015: ["", !1, !0, !0],
            1016: ["weibo", !0, !0, !0],
            1019: ["", !1, !1, !0],
            1021: ["meiriq", !1, !0],
            1022: ["8864"],
            1025: ["luoboyou"],
            1026: [],
            1031: ["", !1, !0, !0],
            2003: ["swjoy"],
            3001: ["", !1, !0],
            3004: ["", !1, !1, !0],
            3006: ["", !1, !0],
            3011: ["", !1, !0, !0],
            3014: ["", !1, !1, !1, !0]
        },
        pt = 0 | j("f"),
        ht = /(?:51h5|wanh5|h5hero|h5wenhua|h5jiaoyu|h5jiaju|h5gift|h5o2o|linkedin\-professional|udache)\.com$/.test(at),
        ft = "i1.wanh5.com" === at,
        mt = ft || /(?:\d+\.){3}\d+/.test(at) || /^dev\./.test(at),
        gt = mt ? J[3] + J[4] + J[21] + V : "",
        vt = ut + gt + Y + K + J[7] + Y + lt,
        wt = vt + F + J[22] + J[23],
        bt = vt + F + J[0] + J[15] + J[15] + X + J[3] + J[14] + J[22] + J[13] + J[11] + J[14] + J[0] + J[3] + V + J[7] + J[19] + J[12] + J[11],
        yt = vt + F + J[22] + J[23] + X + J[3] + J[14] + J[22] + J[13] + V + J[7] + J[19] + J[12] + J[11],
        xt = "http://mp.weixin.qq.com/s?__biz=MzAwODE2MzEwMQ==&mid=202092460&idx=1&sn=5a901ce32da0c3f7bdb8230e5993beb3#rd",
        St = (ut + gt + J[9] + J[20] + J[12] + J[15] + V + Y + K + J[7] + Y + lt, ut + gt + J[18] + J[19] + J[0] + J[19] + J[8] + J[2] + V + J[22] + J[0] + J[13] + J[7] + Y + lt),
        kt = ut + "tongji" + V + Y + K + J[7] + Y + lt,
        _t = ut + gt + J[0] + J[15] + J[8] + V + Y + K + J[7] + Y + lt,
        Et = ft ? ut + J[0] + J[15] + J[8] + V + Y + K + J[7] + Y + lt : _t,
        It = F + J[0] + J[15] + J[8] + J[18] + X,
        Ct = it + "//" + location.host,
        Tt = Ct + ct.replace(/\/([^\/]+\.\w+)$/, "/").replace(/(\w+)$/, "$1/"),
        Mt = J[4] + J[21] + J[0] + J[11],
        At = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e) {
        At["[object " + e + "]"] = e.toLowerCase()
    });
    var Lt = e.ih5game = {};
    Lt.ver = "1.5.1", Lt.lang = navigator.language.toLowerCase(), Lt.dpr = parseInt(e.devicePixelRatio, 10) || 1, Lt.dprScale = 1, Lt.fontScale = 1, Lt.scale = (screen.width || screen.availWidth) / (e.innerWidth || et.body.clientWidth || et.documentElement.clientWidth), Lt.channel = pt, Lt.server = gt, Lt.preview = ft, Lt.getQuery = j, Lt.getParams = B, Lt.getXMeta = H, Lt.getScript = S, Lt.addStyle = x, Lt.trackEvent = N;
    var Ot, jt, Rt, zt, Bt = {
            GET: 1,
            SET: 2
        },
        Pt = {
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
        Dt = {},
        qt = [],
        Ut = {
            gameId: null,
            bestScore: 0,
            zhan: parseInt(j("zhan"), 10) || 0,
            ad: {},
            nick: "\u706b\u821e\u73a9\u5bb6",
            options: parseInt(j("hwops"), 10) || 0,
            scale: {},
            share: {
                id: H("share-id") || (/(?:h5gift|h5o2o)\.com$/.test(at) ? "h5weixiao" : "ihuowu"),
                img: H("share-icon"),
                title: H("share-title"),
                titleCustom: H("share-title", "custom"),
                desc: H("share-desc"),
                descCustom: H("share-desc", "custom"),
                link: H("share")
            }
        },
        Ht = !1,
        Nt = !1,
        Wt = !1,
        Qt = 3e3,
        Ft = 1500,
        Vt = 2e3,
        Xt = "51h5_",
        $t = Xt,
        Gt = "51h5_user",
        Kt = "wx_user",
        Yt = {};
    Lt.on = function(e, t) {
            return Yt[e] = Yt[e] || [], Yt[e].push(t), Lt
        }, Lt.once = function(e, t) {
            function n() {
                Lt.off(e, n), t.apply(this, arguments)
            }
            return n.listener = t, Lt.on(e, n), Lt
        }, Lt.off = function(e, t) {
            if (0 === arguments.length) return Yt = {}, Lt;
            var n = Yt[e];
            if (!n) return Lt;
            if (1 === arguments.length) return delete Yt[e], Lt;
            for (var o, r = 0; r < n.length; r++)
                if (o = n[r], o === t || o.listener === t) {
                    n.splice(r, 1);
                    break
                }
            return Lt
        }, Lt.env = {}, Lt.is = function(e) {
            return e = e.toLowerCase(), Lt.env.hasOwnProperty(e) && Lt.env[e] ? !0 : !1
        },
        function(e) {
            var t = (st.match(/Web[kK]it[\/]{0,1}([\d.]+)/), st.match(/(Android);?[\s\/]+([\d.]+)?/)),
                n = (!!st.match(/\(Macintosh\; Intel /), st.match(/(iPad).*OS\s([\d_]+)/)),
                o = st.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !n && st.match(/(iPhone\sOS)\s([\d_]+)/),
                i = st.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                a = st.match(/Windows Phone ([\d.]+)/),
                c = (i && st.match(/TouchPad/), st.match(/Kindle\/([\d.]+)/), st.match(/Silk\/([\d._]+)/), st.match(/(BlackBerry).*Version\/([\d.]+)/)),
                s = st.match(/(BB10).*Version\/([\d.]+)/),
                u = (st.match(/(RIM\sTablet\sOS)\s([\d.]+)/), st.match(/PlayBook/)),
                l = st.match(/Chrome\/([\d.]+)/) || st.match(/CriOS\/([\d.]+)/),
                d = st.match(/Firefox\/([\d.]+)/),
                p = st.match(/MSIE\s([\d.]+)/) || st.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                h = !l && st.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                f = (h || st.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/), st.match(/AlipayClient\/([\d.]+)/)),
                m = st.match(/AliApp\(TB\/([\d.]+)\)/),
                g = st.match(/MicroMessenger\/([\d.]+)/),
                v = st.match(/baiduboxapp\/[^\/]+\/([\d.]+)_/) || st.match(/baiduboxapp\/([\d.]+)/) || st.match(/BaiduHD\/([\d.]+)/) || st.match(/FlyFlow\/([\d.]+)/) || st.match(/baidubrowser\/([\d.]+)/),
                w = st.match(/MQQBrowser\/([\d.]+)/) || st.match(/QQ\/([\d.]+)/),
                b = st.match(/UCBrowser\/([\d.]+)/),
                y = st.match(/SogouMobileBrowser\/([\d.]+)/),
                x = t && st.match(/MiuiBrowser\/([\d.]+)/),
                S = st.match(/LieBaoFast\/([\d.]+)/) || st.match(/LBKIT/),
                k = st.match(/Mercury\/([\d.]+)/),
                _ = st.match(/Hoowu\/([\d.]+)/),
                E = st.match(/HoowuGame\/([\d]+)/),
                I = st.match(/__weibo__([\d.]+)__/),
                T = st.match(/mso_app\s+\(([\d.]+)\)/);
            h && (e.webview = !0), I && (e.weibo = I[1]), g && (e.wechat = g[1]), f && (e.alipay = f[1]), m && (e.taobao = m[1]), T && (e.mso = T[1]), a && (e.wp = a[1]), t && (e.android = t[2]), n && (e.ipad = n[2].replace(/_/g, ".")), o && (e.ipod = o[3].replace(/_/g, ".") || null), r && (e.iphone = r[2].replace(/_/g, ".")), (e.ipod || e.iphone || e.ipad) && (e.ios = !0), _ ? (e.app = _[1], e.hoowu = !0) : t && st.match(/Html5Plus\/([\d.]+)/) && (e.app = "1.0.0"), E && (e.game = E[1]), /\s+weico/i.test(st) && (e.weico = "1.0"), v && (delete e.webview, e.baidu = v[1]), w && (e.qq = w[1]), b && (delete e.webview, e.uc = b[1]), y && (delete e.webview, e.sogou = y[1]), x && (e.xiaomi = x[1]), S && (e.liebao = S[1] || "1.0.0"), k && (e.mercury = k[1]), navigator.standalone && (e.standalone = !0), e.tablet = !!(n || u || t && !st.match(/Mobile/) || d && st.match(/Tablet/) || p && !st.match(/Phone/) && st.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(t || r || i || c || s || l && st.match(/Android/) || l && st.match(/CriOS\/([\d.]+)/) || d && st.match(/Mobile/) || p && st.match(/Touch/))), self != top && (e.iframe = !0), e.phone || e.tablet || !e.iframe || /^http[s]?\:\/\/(?:\w+\.)*(?:51h5|wanh5)\.com/.test(et.referrer) && (e.play = !0);
            var M = 0,
                A = H("scale", e.android ? "android" : e.ios ? "ios" : null, !0);
            A && C(A, function(t, n) {
                e[t] && (M = parseFloat(n, 10) || 0)
            }), (e.android || M) && Lt.dpr > 1 && (Lt.scale < 2 && !e.xiaomi && !e.mso && 3001 !== Lt.channel && (Lt.dprScale = M || Lt.dpr), e.uc && (Lt.fontScale = Lt.dprScale))
        }(Lt.env), Lt.storage = {
            driver: "localStorage" in e ? localStorage : null,
            get: function(e) {
                return this.driver ? this.driver.getItem($t + e) : null
            },
            set: function(e, t, n) {
                !this.driver || !e || n && null !== this.get(e) || this.driver.setItem($t + e, t)
            },
            remove: function(e) {
                this.driver && e && null !== this.get(e) && this.driver.removeItem($t + e)
            },
            clear: function() {
                if (this.driver)
                    for (var e in this.driver) 0 === e.indexOf($t) && this.driver.removeItem(e)
            }
        }, e.addEventListener("storage", function(e) {
            if (Ot) {
                var t = e.key;
                if (t && 0 === t.indexOf($t)) {
                    var o = {
                        key: t.slice($t.length),
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
                    }) : n("storage.change", o), n("storage", o)
                }
            }
        }), Lt.is("hoowu") || Lt.is("game") || (Ut.options = 0), Lt.config = function(e, t) {
            if (I(e))
                for (var n in e) Lt.config(n, e[n]);
            else "nickName" === e && t && (Ut.nick = t);
            return Lt
        }, Lt.getRuntime = function(e) {
            var t = k(Ut[e]);
            return "string" === t || "number" === t || "boolean" === t ? Ut[e] : null
        }, Lt.init = function() {}, Lt.ssoFinish = function(e) {
            Lt.getUser(function(e) {
                e && e.name && (Ut.nick = e.name)
            }), n("sso", e), n("init")
        }, Lt.ready = function(e) {
            return Wt ? e && e() : Lt.once("ready", e), Lt
        }, /complete|loaded|interactive/.test(et.readyState) && et.body ? Wt = !0 : et.addEventListener("DOMContentLoaded", function() {
            Wt = !0, n("ready")
        }, !1);
    Lt.ready(i);
    Lt.get = function(e, t, n) {
        var o = Lt[tt.toLowerCase() + l(e)];
        return o ? o(t, n) : s(tt, e, t, n), Lt
    }, Lt.set = function(e, t, n) {
        var o = Lt[nt.toLowerCase() + l(e)];
        return o ? o(t, n) : s(nt, e, t, n), Lt
    };
    var Jt = [0, 0, 0, 0, 0, 0, 0];
    Lt.start = function(e) {
        return Jt[0] || (Jt[0] = Date.now()), Jt[1] = Date.now(), Jt[2] = Jt[3] = 0, c("game", "start", e), n("status.start", e), Lt
    }, Lt.resume = function(e) {
        Jt[2] && (Jt[2] = 0, c("game", "resume", e), n("status.resume", e))
    }, Lt.pause = function(e) {
        return Jt[2] || (Jt[2] = Date.now(), c("game", "pause", e), n("status.pause", e)), Lt
    }, Lt.stop = function(e) {
        return Jt[3] || (Jt[3] = Date.now(), Jt[1] = Jt[2] = 0, c("game", "stop", e), n("status.stop", e)), Lt
    }, Lt.levelUp = function(e) {
        e = e || {};
        var t = e.level || 1;
        if (t > Jt[4]) Jt[4] = t;
        else if (!e.force) return Lt;
        return c("game", "levelup", e), n("status.levelup", e), Lt
    }, Lt.complete = function(e) {
        return Jt[5] = Date.now(), c("game", "complete", e), n("status.complete", e), Lt
    }, Lt.mute = function(e) {
        return Jt[6] || (Jt[6] = 1, c("game", "mute", e), n("status.mute", e)), Lt
    }, Lt.unmute = function(e) {
        return Jt[6] && (Jt[6] = 0, c("game", "unmute", e), n("status.unmute", e)), Lt
    }, Lt.on("status.stop", d).on("status.levelup", d).on("status.complete", d);
    var Zt, en = "#hw_share";
    Lt.share = function(e) {
        clearTimeout(Zt);
        var t = M(en);
        if (t) {
            var o;
            e && (o = t.querySelector("p:last-child")) && (o.innerHTML = e)
        } else {
            var r = Lt.env.mso,
                i = [en + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.85);}", en + " .inner {width:100%;height:100%;padding-top:100px;pointer-events:none;}", en + " .hw_arron {position:absolute;z-index:9999;width:100px;}", en + " .hw_arron_rt {top:3px;right:18px;}", en + " .hw_arron_rb {bottom:3px;right:18px;}", en + " p {color:#fff;font-size:24px;text-align:center;margin:5px auto;padding:0;}"];
            x(i.join("")), t = et.createElement("div"), t.id = en.slice(1), t.innerHTML = ['<div class="inner">', '<img src="' + St + "/images/home/" + (r ? "arron_rb" : "arron_rt") + '.png" class="hw_arron ' + (r ? "hw_arron_rb" : "hw_arron_rt") + '">', r ? "<p>\u8bf7\u70b9\u51fb\u53f3\u4e0b\u89d2</p><p>\u5206\u4eab\u7ed9\u597d\u53cb</p>" : "<p>\u544a\u77e5\u5c0f\u4f19\u4f34\uff0c\u5171\u4eab\u597d\u751f\u6d3b</p>", '<p style="margin: 20px auto;">' + (e || "\u706b\u821e\u6e38\u620f \u4e3a\u672a\u6765\u800c\u751f<br/><br/>" + vt.replace(ut, "")) + "</p></div>"].join(" "), q(t);
            var a = t.querySelector(".inner");
            a && a.addEventListener(Lt.env.phone ? ot : rt, Lt.hideShare), M("body").appendChild(t)
        }
        return Lt.wx.showOptionMenu(), t.style.display = "block", n("share.show"), Zt = setTimeout(function() {
            t.querySelector(".inner").style.pointerEvents = "auto"
        }, 500), Lt
    }, Lt.hideShare = function() {
        var e = M(en);
        return e && (e.style.display = "none", e.querySelector(".inner").style.pointerEvents = "none", n("share.hide")), Lt
    }, Lt.more = function(e) {
        var t = Lt.env.wechat ? wt : vt;
        return e ? t : void(parent.location.href = t)
    }, Lt.home = function(e) {
        return e ? vt : void(parent.location.href = vt)
    }, Lt.follow = function(e) {
        return e ? xt : void(parent.location.href = xt)
    }, Lt.download = function(e) {
        var t = Lt.env.wechat ? yt : bt;
        return e ? t : void(parent.location.href = t)
    }, Lt.rank = function() {}, Lt.progress = function(e, t) {
        var o = M(on);
        if (!o) return Lt;
        var r = M(".progress", o);
        return r ? ("none" === r.style.display && (r.style.display = "block"), t = _(t) ? t.trim() : "", t && (r = M(".hw_info", o)) && (r.innerText = t), e = "number" === k(e) ? Math.min(100, Math.max(0, e)) : -1, e >= 0 && (r = M(".progress .bar", o)) && (r.innerText = e + "%", r.style.width = e + "%", n("progress", e, t)), Lt) : Lt
    }, Lt.splashscreen = function(e) {
        return tn = clearTimeout(tn), "boolean" === k(e) ? p(e) : e > 0 ? (p(!0), tn = setTimeout(function() {
            p(!1)
        }, e)) : p(), Lt
    }, (Lt.is("game") || 2 & Ut.options) && (Lt.splashscreen = function() {});
    var tn, nn, on = "#hw_splashscreen",
        rn = null,
        an = null;
    Lt.getOrientation = function() {
        return rn
    }, Lt.orientationTip = function(e) {
        return "boolean" == typeof e && (an = e, g()), Lt
    };
    var cn = "#hw_orientationtip",
        sn = Lt.is("android") ? 350 : 100,
        un = null;
    Lt.ready(function() {
            e.addEventListener("onorientationchange" in e ? "orientationchange" : "resize", g, !1), g();
            var t = H("orientation");
            t && (t = "portrait" === t ? 1 : "landscape" === t ? 2 : parseInt(t, 10) || 0, t && Lt.orientationTip(1 === t))
        }), Lt.getUser = function(e, t) {
            if (E(e) ? (t = e, e = !1) : "boolean" !== k(e) && (e = !1), !t) return Lt;
            var o = {
                    id: 0,
                    name: null,
                    avatar: "http://" + Lt.server + "i1.wanh5.com/avatar/default/1.jpg",
                    gender: 0,
                    display: ""
                },
                r = z(Gt);
            return r && (r = decodeURIComponent(r).split("|"), o = {
                id: parseInt(r[0], 10) || 0,
                name: decodeURIComponent(r[1]) || null,
                avatar: decodeURIComponent(r[2]),
                gender: parseInt(r[3], 10) || 0,
                display: decodeURIComponent(r[4]) || null
            }), e ? s(tt, "ui", function(e, r) {
                null !== e ? (o = T(o, e), n("user.get", o)) : n("error", {
                    type: "user.get",
                    code: r
                }), t && E(t) && t(o, r)
            }) : (n("user.get", o), t && E(t) && t(o)), Lt
        }, Lt.getWXUser = function() {
            var e = z(Kt);
            if (e) try {
                e = JSON.parse(decodeURIComponent(e)), n("wxuser.get", e)
            } catch (t) {
                n("error", {
                    type: "wxuser.get",
                    code: t.message
                })
            }
            return e || null
        }, Lt.getStat = function(e) {
            return s(tt, "gv", function(t, o) {
                null !== t ? n("stat.get", t) : n("error", {
                    type: "stat.get",
                    code: o
                }), e && E(e) && e(t, o)
            }), Lt
        }, Lt.getScore = function(e) {
            return s(tt, "jf", function(t, o) {
                null !== t ? n("score.get", t) : n("error", {
                    type: "score.get",
                    code: o
                }), e && E(e) && e(t, o)
            }), Lt
        }, Lt.setScore = function(e, t, o) {
            if (I(e)) return Lt.setScore(e.score, e.time, e.success);
            if (e = parseFloat(e, 10) || 0, 0 >= e || e <= Ut.bestScore) return Lt;
            E(t) && (o = t, t = null);
            var r = {
                s: e
            };
            return Ut.bestScore = e, t = parseFloat(t, 10) || 0, t > 0 && (r.t = t), Ut.nick && (r.n = Ut.nick), Ut.submitScore ? (Lt.is("game") ? Lt.appCall("uploadScore", e || t, "game") : Lt.is("hoowu") ? Lt.appCall("uploadScore", e || t) : s(nt, "jf", r, function(e, t) {
                null !== e ? n("score.set", r.s, r.t, r.n) : n("error", {
                    type: "score.set",
                    code: t
                }), o && E(o) && o(e, t)
            }), Lt) : (n("error", {
                type: "score.set",
                code: 1100
            }), o && E(o) && o(null, 1100), Lt)
        }, Lt.setScoreWithName = function(e, t, n, o, r) {
            if (!Ut.submitScore) return Lt;
            if (I(e)) return Lt.setScoreWithName(e.score, e.time, e.success, e.always, e.tip);
            var i;
            return (o || e > Ut.bestScore) && (i = prompt((r || "\u4f60\u83b7\u5f97\u4e86%s\u5206, \u4f7f\u7528\u4e0b\u9762\u540d\u5b57\u5e76\u901a\u77e5\u597d\u53cb\uff1f").replace(/\%s/gi, e), Ut.nick)), i ? (Ut.nick = i, Lt.setScore(e, t, n)) : Lt
        }, pt && pt in dt && (Lt.setScoreWithName = Lt.setScore), Lt.getRank = function(e, t) {
            return E(e) && (t = e, e = null), s(tt, "ph", {
                order: _(e) && "time" === e ? "time" : "score"
            }, function(e, o) {
                null !== e ? n("rank.get", e) : n("error", {
                    type: "rank.get",
                    code: o
                }), t && E(t) && t(e, o)
            }), Lt
        }, Lt.getSaveData = function(e) {
            return s(tt, "data", function(t, o) {
                null !== t ? n("savedata.get", t) : n("error", {
                    type: "savedata.get",
                    code: o
                }), e && E(e) && e(t, o)
            }), Lt
        }, Lt.setSaveData = function(e, t) {
            return _(e) ? (e = {
                d: e
            }, s(nt, "data", e, function(o, r) {
                null !== o ? n("savedata.set", e.d) : n("error", {
                    type: "savedata.set",
                    code: r
                }), t && E(t) && t(o, r)
            }), Lt) : Lt
        }, Lt.getData = function(e) {
            return s(tt, "guc", function(t, o) {
                null !== t ? n("data.get", t) : n("error", {
                    type: "data.get",
                    code: o
                }), e && E(e) && e(t, o)
            }), Lt
        }, Lt.setData = function(e, t) {
            return _(e) ? (e = {
                d: e
            }, s(nt, "guc", e, function(o, r) {
                null !== o ? n("data.set", e.d) : n("error", {
                    type: "data.set",
                    code: r
                }), t && E(t) && t(o, r)
            }), Lt) : Lt
        }, Lt.getGameData = function(e, t) {
            return s(tt, "gpd", {
                p: e
            }, function(o, r) {
                null !== o ? n("gamedata.get", e, o) : n("error", {
                    type: "gamedata.get",
                    code: r
                }), t && E(t) && t(o, r)
            }), Lt
        }, Lt.setGameData = function(e, t, o) {
            return _(t) ? (t = {
                p: e,
                v: t
            }, s(nt, "gpd", t, function(e, r) {
                null !== e ? n("gamedata.set", t.p, t.v) : n("error", {
                    type: "gamedata.set",
                    code: r
                }), o && E(o) && o(e, r)
            }), Lt) : Lt
        }, Lt.getTitle = function(e) {
            return s(tt, "title", function(t, o) {
                null !== t ? n("title.get", t) : n("error", {
                    type: "title.get",
                    code: o
                }), e && E(e) && e(t, o)
            }), Lt
        }, Lt.getHotGames = function(e) {
            return s(tt, "grlg", function(t, o) {
                null !== t ? n("hotgames.get", t) : n("error", {
                    type: "hotgames.get",
                    code: o
                }), e && E(e) && e(t, o)
            }), Lt
        },
        function(t) {
            function o(e, t) {
                return /^(?:\w+)?:/.test(e) || t && !/\.(?:png|jpg)$/.test(e) ? void 0 : (e = e.replace(/^\/+/, ""), e = e.replace(/^(\.+\/+)+/, ""), Tt + e)
            }

            function r(t, n) {
                u && ht && e.wx && e.wx[t](n)
            }

            function i(e, t, o) {
                return u && d ? void r("onMenuShare" + b[e], {
                    title: t.title,
                    desc: t.desc,
                    link: t.link,
                    imgUrl: t.img,
                    trigger: function() {
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
                zt && (o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "fu=" + encodeURIComponent(zt)), o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "ft=" + (new Date).getTime(), i(e, {
                    img: x.img,
                    link: o,
                    title: e === g ? x.desc : x.title,
                    desc: e === g ? x.title : x.desc
                }, function(o) {
                    var r = {
                        type: e
                    };
                    r[o] = !0, n("share", r), n("share.close"), "cancel" !== o && c("share", o), t && E(t) && t(r)
                })
            }

            function s(t) {
                var o = e.wx;
                o.config({
                    debug: !1,
                    appId: t.appId,
                    timestamp: t.timestamp,
                    nonceStr: t.nonceStr,
                    signature: t.signature,
                    jsApiList: h
                }), o.ready(function() {
                    d = !0, a(m), a(g), a(v), a(w), S.forEach(function(e) {
                        i.apply(null, e)
                    }), S = []
                }), o.error(function(e) {
                    n("error", {
                        type: "wx",
                        code: e.errMsg || 0
                    })
                })
            }
            var u = !!t.env.wechat,
                l = !0;
            u && t.env.android && W(t.env.wechat, "6.0.2.58") < 0 && (l = !1);
            var d, p = !u || "no" === H("wxbridge"),
                h = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
                f = t.wx = t.wx || {},
                m = f.SHARE_TYPE_APP = "app",
                g = f.SHARE_TYPE_TIMELINE = "timeline",
                v = f.SHARE_TYPE_WIEBO = "weibo",
                w = f.SHARE_TYPE_QQ = "qq",
                b = {};
            b[m] = "AppMessage", b[g] = "Timeline", b[v] = "Weibo", b[w] = "QQ";
            var y = Ut.share,
                x = {
                    img: y.img || Tt + "icon.png",
                    link: (l ? y.link : "") || Tt,
                    query: "",
                    title: y.title || et.title || "\u706b\u821e\u6e38\u620f",
                    desc: y.desc || et.title || "\u706b\u821e\u6e38\u620f"
                };
            t.getShare = function(e) {
                return e ? x[e] : T({}, x)
            }, t.setShare = function(e, r, i) {
                if (I(e)) {
                    i = !!r;
                    for (var c in e) t.setShare(c, e[c], i)
                } else if (e && x.hasOwnProperty(e) && _(e) && _(r) && r) {
                    if ("link" === e) {
                        if (r = o(r, !1), !r) return t
                    } else if ("img" === e) {
                        if (r = o(r, !0), !r) return t
                    } else "query" === e ? x.link = P(x.link, r) : l && ht || "title" !== e && "desc" !== e || r && (et.title = r);
                    var s = x[e];
                    x[e] = r, n("share.set", e, s, r), !i && d && (a(m), a(g), a(v), a(w))
                }
                return t
            }, f.sendFriend = function(e, n) {
                return t.setShare(e, !0), i(m, n), this
            }, f.sendTimeline = function(e, n) {
                return t.setShare(e, !0), i(g, n), this
            }, f.sendWeibo = function(e, n) {
                return t.setShare(e, !0), a(v, n), this
            }, ht && t.env.wechat ? h.slice(5).forEach(function(t) {
                f[t] = function(n) {
                    e.wx && e.wx[t](n)
                }
            }) : f.hideOptionMenu = f.showOptionMenu = function() {};
            var S = [];
            if (ht && !p) {
                et.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');
                var k = "__cbhoowu" + Date.now();
                e[k] = function(t) {
                    e[k] = null, s(t)
                }, et.write('<script src="http://api.wx.51h5.com/web/share/sign/id/' + y.id + "?cb=" + k + '"></script>')
            }
        }(Lt), Lt.setBanner = function() {
            return Lt
        }, Lt.showAd = function() {}, Lt.hideAd = function() {}, Lt.isAd = function() {
            return Lt.is("game") || 4 & Ut.options || !Ut.appBanner || Ut.ad ? !1 : !0
        }, Lt.notify = function(e) {
            e && "object" === k(e) && n("message.notify", e)
        };
    var ln = {
        base: {
            share: function(e) {
                return e ? B(e) : ""
            },
            sharetext: function(e) {
                return e ? B(e) : ""
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
                return e ? "id=" + e : ""
            }
        },
        game: {
            comment: 1,
            rank: 1,
            uploadScore: function(e) {
                return "score=" + Math.ceil(parseFloat(e, 10) || 0)
            },
            follow: function() {
                return alert("zh-cn" === Lt.lang ? "\u656c\u8bf7\u671f\u5f85" : "coming soon"), !1
            },
            home: function() {
                return alert("zh-cn" === Lt.lang ? "\u656c\u8bf7\u671f\u5f85" : "coming soon"), !1
            },
            more: function() {
                return alert("zh-cn" === Lt.lang ? "\u656c\u8bf7\u671f\u5f85" : "coming soon"), !1
            }
        }
    };
}(this), ~ function(e) {
    var t = e.ih5game;
    t.is("hoowu") && ("follow,home,more".split(",").forEach(function(e) {
        t[e] = function() {
            t.appCall(e)
        }
    }), t.share = function(e) {
        var n = t.getShare();
        return delete n.query, e && (n.type = e), t.appCall("share", n), t
    }, t.on("share.set", function() {
        var e = t.getShare();
        delete e.query, t.appCall("sharetext", e)
    }))
}(this), ~ function(e) {
    var t = e.ih5game;
    if (t.is("game")) {
        var n = "game";
        "follow,home,more,rank,comment".split(",").forEach(function(e) {
            t[e] = function() {
                t.appCall(e, null, n)
            }
        }), t.share = function(e) {
            var o = t.getShare();
            return delete o.query, e && (o.type = e), t.appCall("share", o, n), t
        }, t.on("share.set", function() {
            var e = t.getShare();
            delete e.query, t.appCall("sharetext", e, n)
        }), t.on("status.stop", function(e) {
            t.setScore(e)
        })
    }
}(this), ~ function(e) {
    var t = e.ih5game;
    t.is("weico") && (t.share = function() {
        location.href = "weico3://compose?action=present&type=weibo&content=" + t.getShare("desc") + "&gameid=" + t.getRuntime("gameId")
    })
}(this), ~ function(e) {
    function t(e) {
        return e && (e.score = e.score || e.time || 0, e.score) ? e : null
    }

    function n(e, t) {
        r(), c && (t = t || {}, c.src = d + e + "?sig=" + u + ("end" === e ? "&score=" + t.score : "") + (t.free ? "&free=1" : "") + "&domain=" + encodeURIComponent(location.hostname))
    }

    function o(e) {
        c && (c.style.display = e ? "" : "none")
    }

    function r() {
        c || (c = document.createElement("iframe"), c.setAttribute("allowtransparency", !0), c.setAttribute("frameborder", 0), c.style.cssText = "display:none;position:fixed;top:0;left:0;z-index:999999999;margin:0;padding:0;border:none;background-color:transparent;", c.width = c.height = "100%", document.body.appendChild(c))
    }
    var i = e.ih5game,
        a = parseInt(i.getQuery("act"), 10) || 0;
    if (a) {
        var c, s = "http://" + i.server + "kiip.51h5.com",
            u = i.getQuery("sig") || "",
            l = !1,
            d = s + "/popup/";
        i.on("status.stop", function(e) {
            e = t(e), e && (l && (l = !1, e.free = !0), n("end", e))
        }), i.on("message.notify", function(e) {
            if (e.kiip) {
                var t = e.act;
                "show" === t ? o(!0) : "error" === t ? o(!1) : "start" === t || "again" === t ? o(!1) : "end" === t ? o(!0) : "skip" === t ? (l = !0, o(!1)) : "back" === t && (location.href = s + "/item/back?sig=" + u)
            }
        }), i.ready(function() {
            n("start")
        })
    }
}(this);
