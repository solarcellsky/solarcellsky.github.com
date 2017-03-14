/**
 * Copyright 2014 51h5.com All rights reserved.
 */
! function(e, t) {
    function n(e) {
        var t = Jt[e],
            n = Array.prototype.slice.call(arguments, 1);
        if (t) {
            t = t.slice(0);
            for (var o = 0, i = t.length; i > o; o++) t[o].apply(Ot, n)
        }
    }

    function o() {
        if (!Rt && !Mt) {
            Mt = !0, Ht.gameId = W("gameid"), Ht.appBanner = W("appbanner"), Ot.get("init", function() {
                Mt = !1, It = localStorage.getItem(Ft + "guid");
                var e = W("key");
                return e && (At = e, qt = At + "_"), At ? void Ot.get("bt", function(e) {
                    return e ? (Lt = e.token, It = e.guid, localStorage.setItem(Ft + "guid", It), void Ot.get("vt", function(e) {
                        return e ? (Ct = e, Rt = !0, a(), Pt.forEach(function(e) {
                            c.apply(null, e)
                        }), void(Pt = null)) : void n("error", {
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
            }), Ht.channelLogo = !!pt[lt], Ht.channelAloneLogo = Ht.channelLogo && pt[lt][6];
            var e = W("splashscreen");
            return e && (Bt = parseInt(e, 10) || 0), Bt && Ot.splashscreen(Bt), "function" == typeof onHoowuReady && onHoowuReady(), Ot
        }
    }

    function i() {
        if (!Ot.is("wechat") && !(pt[lt] && pt[lt][4] || "no" === (W("toolbar") || "").toLowerCase())) {
            var e = A(Gt);
            if (!e) {
                
            }
            return e
        }
    }

    function r(e) {
        var t = "boolean" === k(e) ? e : !Ht.toolbarExpand;
        t !== Ht.toolbarExpand && (Ht.toolbarExpand = t, A(Gt + " .hw-bar").className = "hw-bar" + (t ? " hw-bar-expand" : ""))
    }

    function a() {
        var e = A($t);
        e || (e = Z.createElement("iframe"), e.width = e.height = 1, e.style.display = "none", A("head").appendChild(e)), e.src = H(mt + "/apis-sso.html", {
            id: It,
            t: At,
            bt: Lt,
            vt: Ct,
            _: Date.now()
        })
    }

    function s(e, t, n) {
        new Image(1, 1).src = H(gt + "/tj.gif", O({
            act: e,
            aop: t,
            id: It || "",
            t: At || ""
        }, n || {}))
    }

    function c(e, t, n, o) {
        var i = jt[t];
        if (i && !(0 === i & Dt[e])) {
            if (!Rt && "init" !== t && "bt" !== t && "vt" !== t) return void Pt.push(Array.prototype.slice.call(arguments));
            S(n) && (o = n, n = null);
            var r = zt[t];
            if (r) {
                try {
                    r.abort()
                } catch (a) {}
                r = null, delete zt[t]
            }
            zt[t] = b(tt, l(t, e), n, o)
        }
    }

    function l(e, t) {
        return mt + wt + (t === et ? "get" : "set") + e + ".html"
    }

    function u(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function d(e) {
        var t, n = Ht.share.descCustom;
        e && n && (e.hasOwnProperty("level") && (t = (t || n).replace(/\{l\}/g, e.level || 1)), e.hasOwnProperty("score") && (t = (t || n).replace(/\{s\}/g, e.score || 0)), e.hasOwnProperty("time") && (t = (t || n).replace(/\{t\}/g, e.time || 0)), e.hasOwnProperty("title") && (t = (t || n).replace(/\{tt\}/g, e.title || ""))), t && Ot.setShare({
            desc: t
        })
    }

    function p(e) {
        var t = null,
            o = h(),
            i = "none" !== o.style.display;
        if ("boolean" === k(e) ? e !== i && (t = e ? 1 : 0) : t = i ? 0 : 1, null !== t) {
            o.style.display = t ? "block" : "none", n("splashscreen." + (t ? "show" : "hide"));
            var r = L(".inner", o);
            r[0].style.display = t ? "block" : "none", Ht.channelAloneLogo && t && r.length > 1 && (clearTimeout(Kt), Kt = setTimeout(function() {
                r[1].style.display = "block", r[0].parentNode.removeChild(r[0]), r = null
            }, Ut))
        }
    }

    function h() {
        var e = A(Vt);
        if (!e) {
            var t = W("author");
            t && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            var n = [Vt + " {position:fixed;left:0;top:0;z-index:9947483646;width:100%;height:100%;box-sizing:border-box;color:#fff;text-shadow:none;font-family:'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;}", Vt + " .inner {display:none;position:relative;top:0;width:100%;height:100%;padding-top:80px;pointer-events:none;background: #167de6;}", Vt + " .inner.alone {padding-top:0;background: #fff;}", Vt + " .inner.alone img {width: auto;height: auto;position: absolute;top: 40%;left: 50%;margin:-100px auto auto -130px;}", Vt + " img {display:block;margin:10px auto 30px;height:80px;width:auto;}", Vt + " p {font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}", Vt + " .hw_info {font-size: 12px;color: rgba(255,255,255,.7);}", Vt + " .progress {height:20px;overflow:hidden;margin: 5px 10px;background-color:#f5f5f5;border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);}", Vt + " .progress .bar {float:left;min-width:20px;height:100%;line-height:20px;font-size:12px;text-align:center;color:#fff;box-sizing:border-box;background-color:#428bca;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease;-webkit-transition:width .6s ease;-o-transition:width .6s ease;}"];
            y(n.join("")), e = Z.createElement("div"), e.id = Vt.slice(1), e.style.display = "none";
            var o = (new Date).getHours();
            e.innerHTML = Ht.channelLogo ? [Ht.channelAloneLogo ? '<div class="inner alone"><img src="' + ht + "/images/home/loading_" + lt + '.png"></div>' : "", '<div class="inner"' + (6 > o || o > 20 ? ' style="background: #2c2a2a;"' : "") + ">", '<img src="data:image/png;base64,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UmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhENkVDNkM0QzdEMTFFNUI5OEVFRUY3QzE0NDA2MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhENkVDNkQ0QzdEMTFFNUI5OEVFRUY3QzE0NDA2MzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOEQ2RUM2QTRDN0QxMUU1Qjk4RUVFRjdDMTQ0MDYzOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEQ2RUM2QjRDN0QxMUU1Qjk4RUVFRjdDMTQ0MDYzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhvtAiAAAAwwSURBVHja7J1pjBzFFcf/Vd09585ettdrry1sg8PlcAsSCKdBBEdWkECJFHEph+JEyaeISEGQcMhBQvkQEB9ISD4gAgSs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" height="80">', '<img src="' + ht + "/images/home/logo_" + lt + '.png" height="80">', t ? "<p>" + (pt[lt][3] ? "\u201c<strong>" + pt[lt][0] + "</strong>\u201d" : "<strong>\u706b\u821e</strong> &bull; <strong>" + t + "</strong>") + " \u51fa\u54c1</p><p>\u6388\u6743" + (pt[lt][3] ? "<strong>\u706b\u821e</strong>" : "\u201c<strong>" + pt[lt][0] + "</strong>\u201d") + (pt[lt][5] || "\u8054\u5408\u53d1\u5e03") + "</p><p>\u6211\u4eec\u8ba9\u8425\u9500\u7b80\u5355\u53c8\u597d\u73a9</p>" : "<p>" + (pt[lt][3] ? "\u201c<strong>" + pt[lt][0] + "</strong>\u201d\u51fa\u54c1, \u6388\u6743<strong>\u706b\u821e</strong>" + (pt[lt][5] || "\u8054\u5408\u53d1\u5e03") : "<strong>\u706b\u821e</strong>\u51fa\u54c1, \u6388\u6743\u201c<strong>" + pt[lt][0] + "</strong>\u201d" + (pt[lt][5] || "\u8054\u5408\u53d1\u5e03")) + "</p>", '<p class="hw_info">\u6e38\u620f\u8f7d\u5165\u4e2d...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>"].join("") : ['<div class="inner"' + (6 > o || o > 20 ? ' style="background: #2c2a2a;"' : "") + ">", '<img src="data:image/png;base64,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UmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhENkVDNkM0QzdEMTFFNUI5OEVFRUY3QzE0NDA2MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhENkVDNkQ0QzdEMTFFNUI5OEVFRUY3QzE0NDA2MzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOEQ2RUM2QTRDN0QxMUU1Qjk4RUVFRjdDMTQ0MDYzOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEQ2RUM2QjRDN0QxMUU1Qjk4RUVFRjdDMTQ0MDYzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhvtAiAAAAwwSURBVHja7J1pjBzFFcf/Vd09585ettdrry1sg8PlcAsSCKdBBEdWkECJFHEph+JEyaeISEGQcMhBQvkQEB9ISD4gAgSs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" height="80">', t ? "<p><strong>\u6251\u6251\u661f\u4e92\u52a8</strong> &bull; \u51fa\u54c1</p><p>\u6211\u4eec\u8ba9\u8425\u9500\u7b80\u5355\u53c8\u597d\u73a9</p>" : "<p>\u6251\u6251\u661f\u4e92\u52a8 &bull; \u4e3a\u8425\u9500\u800c\u751f</p>", '<p class="hw_info">\u6e38\u620f\u8f7d\u5165\u4e2d...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>"].join(""), e.addEventListener(nt, R), e.addEventListener(it, R), A("body").appendChild(e)
        }
        return e
    }

    function g(e) {
        var t, o = f(),
            i = "none" !== o.style.display;
        "boolean" === k(e) ? e !== i && (t = e ? "block" : "none") : t = i ? "none" : "block", t && (o.style.display = t, n("orientation." + ("none" === t ? "hide" : "show")))
    }

    function f() {
        var e = A(en);
        if (!e) {
            var t = [en + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:#fff;}", en + " .inner {width:100%;height:100%;padding-top:200px;pointer-events:none;}", en + " .tip {position:absolute;top:80px;left:50%;margin-left:-64px;width:128px;z-index:9999;}", en + " p {color:#4a87ee;font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}"];
            y(t.join("")), e = Z.createElement("div"), e.id = en.slice(1), e.style.display = "none", e.innerHTML = ['<div class="inner">', '<img src="' + ht + '/images/orientation.gif" class="tip">', "<p>\u8bf7\u65cb\u8f6c\u624b\u673a\u5c4f\u5e55\uff0c\u4ee5\u8fbe\u5230\u6700\u4f73\u6548\u679c</p>", "</div>"].join(" "), e.addEventListener(nt, R), e.addEventListener(it, R), A("body").appendChild(e)
        }
        return e
    }

    function m() {
        clearTimeout(nn), nn = setTimeout(function() {
            var t = !0,
                o = e.orientation;
            if (0 === o || 180 === o) t = !0;
            else if (-90 === o || 90 === o) t = !1;
            else {
                var i = M();
                t = i.h > i.w
            }
            null === Qt ? Qt = t : Qt !== t && (Qt = t, n("orientation", t)), "boolean" == typeof Zt && g(t !== Zt)
        }, tn)
    }

    function v(t, o) {
        t && o && !Ht.banner && (E(o) && (o = A("#" + o)), Z.documentElement.contains(o) && ((e.BAIDU_DUP = e.BAIDU_DUP || []).push(["fillAsync", t, o]), Ht.banner = !0, n("banner.set")))
    }

    function b(t, n, o, i) {
        var r = new XMLHttpRequest;
        return t === et && o && (n = H(n, o), o = null), r.open(t, n, !0), At && r.setRequestHeader("X-KEY", At), (Lt || Ct) && r.setRequestHeader("X-TOKEN", Ct || Lt), It && r.setRequestHeader("X-GUID", It), t === tt && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i && (r.onerror = r.onabort = function() {
            w(r), i(null, 500, r)
        }, r.onload = function() {
            w(r);
            var t = r.status;
            if (t >= 200 && 300 > t || 304 == t) {
                var n, o = r.responseText;
                try {
                    n = JSON.parse(o)
                } catch (a) {
                    e[_t](o)
                }
                if (n && n.url) return void(location.href = n.url);
                n && 1 === n.status ? i(n.data || "", n.status, r) : i(null, n.status, r)
            } else i(null, t, r)
        }), r.send(e.FormData && o instanceof FormData ? o : E(o) ? o : P(o)), r
    }

    function w(e) {
        e.onload = e.onabort = e.onerror = e.ontimeout = null
    }

    function y(e, t) {
        var n;
        t = t || Z, n = t.createElement("style"), n.type = "text/css", t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e))
    }

    function x(e, t) {
        var n;
        t = t || Z, n = t.createElement("script"), n.type = "text/javascript", n.async = "async", n.src = e, t.getElementsByTagName("head")[0].appendChild(n)
    }

    function k(e) {
        return null == e ? String(e) : Tt[Object.prototype.toString.call(e)] || "object"
    }

    function E(e) {
        return "string" === k(e)
    }

    function S(e) {
        return "function" === k(e)
    }

    function _(e) {
        return "object" === k(e) && Object.getPrototypeOf(e) === Object.prototype
    }

    function T(e, t) {
        Object.keys(e).forEach(function(n) {
            t(n, e[n])
        })
    }

    function O(e, t) {
        return T(t, function(t, n) {
            e[t] = n
        }), e
    }

    function A(e, t) {
        return E(e) ? (t = t || Z, t.querySelector(e)) : e
    }

    function L(e, t) {
        if (E(e)) {
            var n = Z.querySelectorAll(e, A(t) || Z.body);
            return [].slice.call(n, 0)
        }
        return e
    }

    function C(e) {
        return !!e && /^(?:(?:http|https|file)\:)?\/\/(?:\d+\.){3}\d+/.test(e)
    }

    function I(e) {
        return "string" == typeof e && "" !== e
    }

    function D(e) {
        return I(e)
    }

    function j(e, t) {
        if (I(e)) {
            var n = String(Z.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"));
            if (n) return (n = n[1]) ? t ? decodeURIComponent(n) : n : ""
        }
        return null
    }

    function z(e, t) {
        return t = t || {}, j(D(e) ? e : "", !t.raw)
    }

    function P(e) {
        var t = [];
        return T(e || {}, function(e, n) {
            Array.isArray(n) || (n = [n]), n.forEach(function(n) {
                t.push(e + "=" + encodeURIComponent(n))
            })
        }), t.join("&")
    }

    function H(e, t) {
        E(t) || (t = P(t)), e = e.split("#");
        var n = e[1];
        return e = e[0], t && (e += e.indexOf("?") >= 0 ? "&" : "?", e += t + (n ? "#" + n : "")), e
    }

    function R(e) {
        e && (e.preventDefault(), e.stopPropagation())
    }

    function M() {
        return {
            w: e.innerWidth,
            h: e.innerHeight
        }
    }

    function W(e, t) {
        var n = A('meta[name="x-' + e + '"]');
        return n ? (n.getAttribute(t ? "data-" + t : "content") || "").trim() : null
    }

    function B(t) {
        var n = e[J + "hmt"];
        n && n.push([J + "trackEvent", t].concat(Array.prototype.slice.call(arguments, 1).map(function(e) {
            return t + J + e
        })))
    }
    for (var U = ":", F = "/", q = ".", N = "-", J = "_", G = "1", Y = "5", X = [], K = 97; 122 > K; K++) X.push(String.fromCharCode(K));
    var V = X[7] + X[19] + X[19] + X[15] + U + F + F,
        Q = q + X[2] + X[14] + X[12],
        Z = e.document,
        et = "GET",
        tt = "POST",
        nt = "touchstart",
        ot = "touchend",
        it = "mousedown",
        rt = location.protocol,
        at = location.hostname,
        st = location.pathname,
        ct = e.navigator.userAgent,
        lt = /(?:^|\.)(5iwebgame|7k7k|ishanku|baohulove|miaopai|yixia|weibo|4399|aiweiyou|qiniudn|chaoshenxy|cmbchina)\.com$/.exec(at);
    lt = lt && lt[1], lt || (lt = /(?:^|\.)(360|game6|wishstart|90fan|2144|twan|play)\.cn$/.exec(at), lt = lt && lt[1]);
    var ut = V + Y + G + X[7] + Y + Q,
        dt = X[6] + q + X[22] + X[0] + X[13] + X[7] + Y + Q !== at && X[3] + X[14] + X[22] + X[13] + q + Y + G + X[7] + Y + Q !== at && !lt,
        pt = {
            "7k7k": ["7k7k", "http://www.51h5.com", "", !1],
            baohulove: ["\u4fdd\u62a4\u7231", "http://v.baohulove.com/HotGame.aspx"],
            ishanku: ["\u7231\u95ea\u9177"],
            360: ["\u7231\u95ea\u9177"],
            miaopai: ["\u79d2\u62cd"],
            weibo: ["\u79d2\u62cd"],
            yixia: ["\u79d2\u62cd"],
            game6: ["9G", "http://9g.game6.cn/top.html"],
            4399: ["4399", "http://h.4399.com"],
            wishstart: ["\u5168\u7403\u6e38\u620f\u6392\u884c\u699c", "http://www.wishstart.cn/top.html"],
            aiweiyou: ["\u7231\u5fae\u6e38", "", "", !0],
            aawap: ["\u8da3\u5473\u6d4b\u8bd5", "http://ceshi.aawap.net/"],
            2144: ["2144", "http://m.2144.cn/h5", "", !1, !0],
            qiniudn: ["Weico\u5ba2\u6237\u7aef"],
            chaoshenxy: ["Weico\u5ba2\u6237\u7aef"],
            twan: ["\u5929\u73a9", "http://h.twan.cn"],
            play: ["\u7231\u6e38\u620f", "", "", !1, !1, "\u4f7f\u7528"],
            cmbchina: ["\u62db\u5546\u94f6\u884c"]
        },
        ht = V + X[18] + X[19] + X[0] + X[19] + X[8] + X[2] + q + X[22] + X[0] + X[13] + X[7] + Y + Q,
        gt = V + "tongji" + q + Y + G + X[7] + Y + Q,
        ft = V + X[17] + X[0] + X[13] + X[10] + q + Y + G + X[7] + Y + Q,
        mt = V + (dt ? "dev" + q : "") + X[0] + X[15] + X[8] + q + Y + G + X[7] + Y + Q,
        vt = lt || C(location.href) ? rt + "//" + location.host : V + X[6] + q + X[22] + X[0] + X[13] + X[7] + Y + Q,
        bt = vt + st.replace(/\/([^\/]+\.\w+)$/, "/").replace(/\w+$/, "$1/"),
        wt = F + X[0] + X[15] + X[8] + X[18] + "-",
        yt = V + Y + G + X[7] + Y + Q,
        xt = yt + F + X[22] + X[23],
        kt = yt + F + X[0] + X[15] + X[15] + N + X[3] + X[14] + X[22] + X[13] + X[11] + X[14] + X[0] + X[3] + q + X[7] + X[19] + X[12] + X[11],
        Et = yt + F + X[22] + X[23] + N + X[3] + X[14] + X[22] + X[13] + q + X[7] + X[19] + X[12] + X[11],
        St = "http://mp.weixin.qq.com/s?__biz=MzAwODE2MzEwMQ==&mid=202092460&idx=1&sn=5a901ce32da0c3f7bdb8230e5993beb3#rd";
    pt[lt] && pt[lt][2] && (St = pt[lt][2]);
    var _t = X[4] + X[21] + X[0] + X[11],
        Tt = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e) {
        Tt["[object " + e + "]"] = e.toLowerCase()
    });
    var Ot = e.ih5game = {};
    Ot.ver = "1.4";
    var At, Lt, Ct, It, Dt = {
            GET: 1,
            SET: 2
        },
        jt = {
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
        zt = {},
        Pt = [],
        Ht = {
            gameId: null,
            bestScore: 0,
            nick: "\u706b\u821e\u73a9\u5bb6",
            share: {
                img: W("share-icon"),
                title: W("share-title"),
                titleCustom: W("share-title", "custom"),
                desc: W("share-desc"),
                descCustom: W("share-desc", "custom")
            }
        },
        Rt = !1,
        Mt = !1,
        Wt = !1,
        Bt = 3e3,
        Ut = 1500,
        Ft = "51h5_",
        qt = Ft,
        Nt = "51h5_user",
        Jt = {};
    Ot.on = function(e, t) {
            return Jt[e] = Jt[e] || [], Jt[e].push(t), Ot
        }, Ot.once = function(e, t) {
            function n() {
                Ot.off(e, n), t.apply(this, arguments)
            }
            return n.listener = t, Ot.on(e, n), Ot
        }, Ot.off = function(e, t) {
            if (0 === arguments.length) return Jt = {}, Ot;
            var n = Jt[e];
            if (!n) return Ot;
            if (1 === arguments.length) return delete Jt[e], Ot;
            for (var o, i = 0; i < n.length; i++)
                if (o = n[i], o === t || o.listener === t) {
                    n.splice(i, 1);
                    break
                }
            return Ot
        }, Ot.env = {}, Ot.is = function(e) {
            return e = e.toLowerCase(), Ot.env.hasOwnProperty(e) && Ot.env[e] ? !0 : !1
        },
        function(e) {
            var t = ct.match(/MicroMessenger\/([\d.]+)/);
            t && (e.wechat = t[1]);
            var n = ct.match(/(Android);?[\s\/]+([\d.]+)?/);
            n && (e.android = n[2]);
            var o = ct.match(/(iPad).*OS\s([\d_]+)/);
            o && (e.ipad = o[2].replace(/_/g, "."));
            var i = ct.match(/(iPod)(.*OS\s([\d_]+))?/);
            i && (e.ipod = i[3].replace(/_/g, ".") || null);
            var r = !o && ct.match(/(iPhone\sOS)\s([\d_]+)/);
            r && (e.iphone = r[2].replace(/_/g, ".")), e.ios = e.ipod || e.iphone || e.ipad, e.app = /Html5Plus\/[\d.]+/.test(ct), ct.match(/mso_app/i) && (e.mso = "1.0"), /\s+weico/i.test(ct) && (e.weico = "1.0")
        }(Ot.env), Ot.storage = {
            driver: "localStorage" in e ? localStorage : null,
            get: function(e) {
                return this.driver ? this.driver.getItem(qt + e) : null
            },
            set: function(e, t, n) {
                !this.driver || !e || n && null !== this.get(e) || this.driver.setItem(qt + e, t)
            },
            remove: function(e) {
                this.driver && e && null !== this.get(e) && this.driver.removeItem(qt + e)
            },
            clear: function() {
                if (this.driver)
                    for (var e in this.driver) 0 === e.indexOf(qt) && this.driver.removeItem(e)
            }
        }, e.addEventListener("storage", function(e) {
            if (At) {
                var t = e.key;
                if (t && 0 === t.indexOf(qt)) {
                    var o = {
                        key: t.slice(qt.length),
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
        }), Ot.config = function(e, t) {
            if (_(e))
                for (var n in e) Ot.config(n, e[n]);
            else "nickName" === e && t && (Ht.nick = t);
            return Ot
        }, Ot.init = function() {}, Ot.ssoFinish = function(e) {
            Ot.getUser(function(e) {
                e && e.name && (Ht.nick = e.name)
            }), n("sso", e), n("init")
        }, Ot.ready = function(e) {
            return Wt ? e && e() : Ot.once("ready", e), Ot
        }, /complete|loaded|interactive/.test(Z.readyState) && Z.body ? Wt = !0 : Z.addEventListener("DOMContentLoaded", function() {
            Wt = !0, n("ready")
        }, !1);
    var Gt = "#hw-toolbar";
    Ot.ready(i);
    var $t = "#ih5game_sso";
    Ot.get = function(e, t, n) {
        var o = Ot[et.toLowerCase() + u(e)];
        return o ? o(t, n) : c(et, e, t, n), Ot
    }, Ot.set = function(e, t, n) {
        var o = Ot[tt.toLowerCase() + u(e)];
        return o ? o(t, n) : c(tt, e, t, n), Ot
    };
    var Yt = [0, 0, 0, 0, 0, 0, 0];
    Ot.start = function(e) {
        return Yt[0] || (Yt[0] = Date.now()), Yt[1] = Date.now(), Yt[2] = Yt[3] = 0, s("game", "start", e), n("status.start", e), Ot
    }, Ot.resume = function(e) {
        Yt[2] && (Yt[2] = 0, s("game", "resume", e), n("status.resume", e))
    }, Ot.pause = function(e) {
        return Yt[2] || (Yt[2] = Date.now(), s("game", "pause", e), n("status.pause", e)), Ot
    }, Ot.stop = function(e) {
        return Yt[3] || (Yt[3] = Date.now(), Yt[1] = Yt[2] = 0, s("game", "stop", e), n("status.stop", e)), Ot
    }, Ot.levelUp = function(e) {
        e = e || {};
        var t = e.level || 1;
        if (t > Yt[4]) Yt[4] = t;
        else if (!e.force) return Ot;
        return s("game", "levelup", e), n("status.levelup", e), Ot
    }, Ot.complete = function(e) {
        return Yt[5] = Date.now(), s("game", "complete", e), n("status.complete", e), Ot
    }, Ot.mute = function(e) {
        return Yt[6] || (Yt[6] = 1, s("game", "mute", e), n("status.mute", e)), Ot
    }, Ot.unmute = function(e) {
        return Yt[6] && (Yt[6] = 0, s("game", "unmute", e), n("status.unmute", e)), Ot
    }, Ot.on("status.stop", d).on("status.levelup", d).on("status.complete", d);
    Ot.share = function() {
        return Ot.wx.showOption(), Ot
    }, Ot.env.weico && (Ot.share = function() {
        location.href = "weico3://compose?action=present&type=weibo&content=" + Ot.getShare("desc") + "&gameid=" + Ht.gameId
    }), Ot.hideShare = function() {
        return Ot
    }, Ot.more = function(e) {
        var t = yt;
        return pt[lt] && pt[lt][1] ? t = pt[lt][1] : Ot.env.wechat && (t = xt), e ? t : void(location.href = t)
    }, Ot.home = function(t) {
        return t ? ut : void(e.location.href = ut)
    }, Ot.follow = function(t) {
        return t ? St : void(e.location.href = St)
    }, Ot.download = function(t) {
        var n = Ot.env.wechat ? Et : kt;
        return t ? n : void(e.location.href = n)
    }, Ot.rank = function(t) {
        var n = ft + "/home/view/key/" + At;
        return t ? n : void(e.location.href = n)
    }, Ot.progress = function(e, t) {
        var o = A(Vt);
        if (!o) return Ot;
        var i = A(".progress", o);
        return i ? ("none" === i.style.display && (i.style.display = "block"), t = E(t) ? t.trim() : "", t && (i = A(".hw_info", o)) && (i.innerText = t), e = "number" === k(e) ? Math.min(100, Math.max(0, e)) : -1, e >= 0 && (i = A(".progress .bar", o)) && (i.innerText = e + "%", i.style.width = e + "%", n("progress", e, t)), Ot) : Ot
    }, Ot.splashscreen = function(e) {
        return Xt = clearTimeout(Xt), "boolean" === k(e) ? p(e) : e > 0 ? (p(!0), Xt = setTimeout(function() {
            p(!1)
        }, e)) : p(), Ot
    };
    var Xt, Kt, Vt = "#hw_splashscreen",
        Qt = null,
        Zt = null;
    Ot.getOrientation = function() {
        return Qt
    }, Ot.orientationTip = function(e) {
        return "boolean" == typeof e && (Zt = e, m()), Ot
    };
    var en = "#hw_orientationtip",
        tn = Ot.is("android") ? 350 : 100,
        nn = null;
    Ot.ready(function() {
            e.addEventListener("onorientationchange" in e ? "orientationchange" : "resize", m, !1), m();
            var t = W("orientation");
            t && (t = "portrait" === t ? 1 : "landscape" === t ? 2 : parseInt(t, 10) || 0, t && Ot.orientationTip(1 === t))
        }), Ot.getUser = function(e, t) {
            S(e) ? (t = e, e = !1) : "boolean" !== k(e) && (e = !1);
            var o = {
                    id: 0,
                    name: null,
                    avatar: "http://i1.wanh5.com/avatar/default/1.jpg",
                    gender: 0,
                    display: ""
                },
                i = z(Nt);
            i && (i = decodeURIComponent(i).split("|"), o = {
                id: parseInt(i[0], 10) || 0,
                name: decodeURIComponent(i[1]) || null,
                avatar: decodeURIComponent(i[2]),
                gender: parseInt(i[3], 10) || 0,
                display: decodeURIComponent(i[4]) || null
            }), e ? c(et, "ui", function(e, i) {
                null !== e ? (o = O(o, e), n("user.get", o)) : n("error", {
                    type: "user.get",
                    code: i
                }), t && S(t) && t(o, i)
            }) : (n("user.get", o), t && S(t) && t(o))
        }, Ot.getStat = function(e) {
            c(et, "gv", function(t, o) {
                null !== t ? n("stat.get", t) : n("error", {
                    type: "stat.get",
                    code: o
                }), e && S(e) && e(t, o)
            })
        }, Ot.getScore = function(e) {
            c(et, "jf", function(t, o) {
                null !== t ? n("score.get", t) : n("error", {
                    type: "score.get",
                    code: o
                }), e && S(e) && e(t, o)
            })
        }, Ot.setScore = function(e, t, o) {
            if (e = parseFloat(e, 10) || 0, 0 >= e || e <= Ht.bestScore) return Ot;
            S(t) && (o = t, t = null);
            var i = {
                s: e
            };
            return Ht.bestScore = e, t = parseFloat(t, 10) || 0, t > 0 && (i.t = t), Ht.nick && (i.n = Ht.nick), c(tt, "jf", i, function(e, t) {
                null !== e ? n("score.set", i.s, i.t, i.n) : n("error", {
                    type: "score.set",
                    code: t
                }), o && S(o) && o(e, t)
            }), Ot
        }, Ot.setScoreWithName = function(e, t, n, o, i) {
            var r;
            return _(e) ? Ot.setScoreWithName(e.score, e.time, e.success, e.always, e.tip) : ((o || e > Ht.bestScore) && (r = prompt((i || "\u4f60\u83b7\u5f97\u4e86%s\u5206, \u4f7f\u7528\u4e0b\u9762\u540d\u5b57\u5e76\u901a\u77e5\u597d\u53cb\uff1f").replace(/\%s/gi, e), Ht.nick)), r ? (Ht.nick = r, Ot.setScore(e, t, n)) : Ot)
        }, Ot.getRank = function(e, t) {
            return S(e) && (t = e, e = null), c(et, "ph", {
                order: E(e) && "time" === e ? "time" : "score"
            }, function(e, o) {
                null !== e ? n("rank.get", e) : n("error", {
                    type: "rank.get",
                    code: o
                }), t && S(t) && t(e, o)
            }), Ot
        }, Ot.getSaveData = function(e) {
            return c(et, "data", function(t, o) {
                null !== t ? n("savedata.get", t) : n("error", {
                    type: "savedata.get",
                    code: o
                }), e && S(e) && e(t, o)
            }), Ot
        }, Ot.setSaveData = function(e, t) {
            return E(e) ? (e = {
                d: e
            }, c(tt, "data", e, function(o, i) {
                null !== o ? n("savedata.set", e.d) : n("error", {
                    type: "savedata.set",
                    code: i
                }), t && S(t) && t(o, i)
            }), Ot) : Ot
        }, Ot.getData = function(e) {
            return c(et, "guc", function(t, o) {
                null !== t ? n("data.get", t) : n("error", {
                    type: "data.get",
                    code: o
                }), e && S(e) && e(t, o)
            }), Ot
        }, Ot.setData = function(e, t) {
            return E(e) ? (e = {
                d: e
            }, c(tt, "guc", e, function(o, i) {
                null !== o ? n("data.set", e.d) : n("error", {
                    type: "data.set",
                    code: i
                }), t && S(t) && t(o, i)
            }), Ot) : Ot
        }, Ot.getGameData = function(e, t) {
            return c(et, "gpd", {
                p: e
            }, function(o, i) {
                null !== o ? n("gamedata.get", e, o) : n("error", {
                    type: "gamedata.get",
                    code: i
                }), t && S(t) && t(o, i)
            }), Ot
        }, Ot.setGameData = function(e, t, o) {
            return E(t) ? (t = {
                p: e,
                v: t
            }, c(tt, "gpd", t, function(e, i) {
                null !== e ? n("gamedata.set", t.p, t.v) : n("error", {
                    type: "gamedata.set",
                    code: i
                }), o && S(o) && o(e, i)
            }), Ot) : Ot
        }, Ot.getTitle = function(e) {
            return c(et, "title", function(t, o) {
                null !== t ? n("title.get", t) : n("error", {
                    type: "title.get",
                    code: o
                }), e && S(e) && e(t, o)
            }), Ot
        }, Ot.getHotGames = function(e) {
            return c(et, "grlg", function(t, o) {
                null !== t ? n("hotgames.get", t) : n("error", {
                    type: "hotgames.get",
                    code: o
                }), e && S(e) && e(t, o)
            }), Ot
        },
        function(t) {
            function o(e, t) {
                if (pt[lt] || C(e)) return e;
                if (!(/^(?:\w+)?:/.test(e) || t && !/\.(?:png|jpg)$/.test(e))) return e = e.replace(/^\/+/, ""), e = e.replace(/^(\.+\/+)+/, ""), bt + e
            }

            function i(t, n, o) {
                e.WeixinJSBridge && e.WeixinJSBridge.invoke(t, n, o)
            }

            function r(t) {
                e.WeixinJSBridge && e.WeixinJSBridge.call(t)
            }

            function a(e, t) {
                n("share.open", e);
                var o = w[e + "Link"] || w.link;
                It && (o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "fu=" + encodeURIComponent(It)), o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "ft=" + (new Date).getTime(), i(g[e], {
                    appid: w.appid || "",
                    img_url: w.img,
                    img_width: w.imgWidth,
                    img_height: w.imgHeight,
                    link: o,
                    title: e === p ? w.desc : w.title,
                    desc: e === p ? w.title : w.desc,
                    content: w.desc
                }, function(o) {
                    var i = {
                            type: e
                        },
                        r = o.err_msg.slice(f[e].length + 1);
                    ("confirm" === r || "ok" === r) && (r = "success"), i[r] = !0, n("share", i, o), n("share.close"), "cancel" !== r && s("share", r), t && S(t) && t(i, o)
                })
            }

            function c(t) {
                e.WeixinJSBridge && e.WeixinJSBridge.on(m + v[t], function() {
                    a(t)
                })
            }

            function l() {
                c(d), c(p), c(h)
            }
            var u = t.wx = t.wx || {},
                d = u.SHARE_TYPE_APP = "app",
                p = u.SHARE_TYPE_TIMELINE = "timeline",
                h = u.SHARE_TYPE_WIEBO = "weibo",
                g = {};
            g[d] = "sendAppMessage", g[p] = "shareTimeline", g[h] = "shareWeibo";
            var f = {};
            f[d] = "send_app_msg", f[p] = "share_timeline", f[h] = "share_weibo";
            var m = "menu:share:",
                v = {};
            v[d] = "appmessage", v[p] = "timeline", v[h] = "weibo";
            var b = Ht.share,
                w = {
                    img: b.img || bt + "icon.png",
                    imgWidth: 200,
                    imgHeight: 200,
                    link: bt,
                    query: "",
                    title: b.title || Z.title || "\u6251\u6251\u661f\u4e92\u52a8",
                    desc: b.desc || Z.title || "\u6251\u6251\u661f\u4e92\u52a8"
                };
            t.getShare = function(e) {
                return w[e]
            }, t.setShare = function(e, i) {
                if (_(e))
                    for (var r in e) t.setShare(r, e[r]);
                else if (e && w.hasOwnProperty(e) && E(e) && E(i) && i) {
                    if ("link" === e) {
                        if (i = o(i, !1), !i) return t
                    } else if ("img" === e) {
                        if (i = o(i, !0), !i) return t
                    } else "query" === e ? w.link = H(w.link, i) : ("title" === e || "desc" === e) && i && (Z.title = i);
                    var a = w[e];
                    w[e] = i, n("share.set", e, a, i)
                }
                return t
            }, u.sendFriend = function(e, n) {
                return t.setShare(e), a(d, n), this
            }, u.sendTimeline = function(e, n) {
                return t.setShare(e), a(p, n), this
            }, u.sendWeibo = function(e, n) {
                return t.setShare(e), a(h, n), this
            }, u.preview = u.previewImage = function(e, t) {
                return e && t && t.length && i("imagePreview", {
                    current: e,
                    urls: t
                }), this
            }, u.showOption = u.showOptionMenu = function() {
                return r("showOptionMenu"), this
            }, u.hideOption = u.hideOptionMenu = function() {
                return r("hideOptionMenu"), this
            }, u.showToolbar = function() {
                return r("showToolbar"), this
            }, u.hideToolbar = function() {
                return r("hideToolbar"), this
            }, u.close = u.closeWindow = function() {
                return r("closeWindow"), this
            }, "undefined" == typeof WeixinJSBridge ? Z.addEventListener("WeixinJSBridgeReady", l, !1) : l()
        }(Ot);
    var on, rn;
    Ot.setBanner = function(e) {
            return v(on, e), Ot
        },
        function() {
            var t = W("banner");
            t && (on = t, rn = W("banner", "type"), on > 0 && Ot.ready(function() {
                if (e.BAIDU_DUP_require || x("http://dup.baidustatic.com/js/zm.js"), "1" === rn) {
                    var t = Z.createElement("div");
                    t.id = "hw_banner_" + on, A("body").appendChild(t), Ot.setBanner(t.id)
                }
            }))
        }(), Ot.showAd = function() {}, Ot.hideAd = function() {}, Ot.isAd = function() {
            return "no" !== Ht.appBanner
        }, Ot.ready(o)
}(this);
