/**
 * Copyright 2015 51h5.com All rights reserved.
 */
~ function(e) {
    function t() {
        h.addStyle(E + T), b = b || D.query(L), b || (b = document.createElement("div"), b.id = L.replace(/^#/, ""), document.body.appendChild(b));
        var e = D.query("[data-role=trigger]", b);
        e || (e = document.createElement("div"), D.data(e, "role", "trigger"), e.innerHTML = '<img data-role="trigger-btn" src="' + k + 'trigger.png">', b.appendChild(e));
        var t = D.query("[data-role=masker]", b);
        t || (t = document.createElement("div"), D.data(t, "role", "masker"), b.appendChild(t), D.on(t, q, D.prevent));
        var a = D.query("[data-role=panel]", b);
        if (!a) {
            a = document.createElement("div"), D.data(a, "role", "panel");
            var n = "";
            N.forEach(function(e) {
                e.title && (n += '<div data-role="title"><span>' + e.title + "</span></div>"), n += '<div data-role="menus">', e.list.split(",").forEach(function(e) {
                    n += ['<div data-role="menu" data-action="' + e + '">', '<a href="javascript:void(0)"><img src="' + k + e + '.png"></a>', "</div>"].join("")
                }), n += "</div>"
            }), n += '<a href="javascript:void(0)" data-role="cancel"><img src="' + k + 'up.png"></a>', a.innerHTML = n, b.appendChild(a)
        }
        var r = D.query("[data-role=tip]", b);
        r || (r = document.createElement("div"), D.data(r, "role", "tip"), r.innerHTML = ['<div data-role="tip-inner">', '<img src="' + k + 'yes.png">', "<p></p>", "</div>"].join(""), b.appendChild(r), D.on(r, q, D.prevent)), D.on(b, z, o), p("played"), d("status", "init")
    }

    function o(e) {
        var t = e.target || e.srcElement,
            o = D.data(t, "role"),
            r = D.data(t, "action");
        if (o || (t = D.closest(t, "[data-role]", b), t && (o = D.data(t, "role"), r = D.data(t, "action"))), "trigger-btn" === o) a();
        else if ("cancel" === o || "masker" === o) n();
        else if ("menu" === o) {
            d("click", r);
            var i = P[r];
            "function" == typeof i ? i() : "string" == typeof i && c(i, 0, /^share/i.test(r))
        }
    }

    function a() {
        D.data(b, "ui", "open"), d("click", "open")
    }

    function n() {
        D.data(b, "ui", ""), d("click", "close")
    }

    function r(e) {
        clearTimeout(f);
        var t = D.query("[data-role=tip]", b);
        t && (D.data(t, "ui", "show"), D.query("p", t).innerHTML = e || "", f = setTimeout(i, C))
    }

    function i() {
        clearTimeout(f);
        var e = D.query("[data-role=tip]", b);
        e && D.data(e, "ui", "")
    }

    function d(e, t) {
        h.trackEvent("toolbar", e, t)
    }

    function l() {
        return (new Date).getTime()
    }

    function c(t, o, a) {
        clearTimeout(m), m = setTimeout(function() {
            a ? e.open(t) : top.location = t
        }, o || S)
    }

    function s(e) {
        return v + "/toolbar-share-type-" + e + ".html?" + h.getParams(h.getShare())
    }

    function p(e, t) {
        t = t || {}, t.id = H, t._t = l(), u(e).src = v + "/space-" + e + ".html?" + h.getParams(t)
    }

    function u(e) {
        var t = "played" === e ? A : "collect" === e ? j : "",
            o = D.query(t);
        return o || (o = document.createElement("iframe"), o.id = t.replace(/^#/, ""), o.style.cssText = "position:fixed;margin:0;padding:0;border:none;width:1px;height:1px", document.body.appendChild(o)), o
    }
    var h = e.ih5game;
    if (h) {
        d("status", "loaded");
        var m, f, b, g = h.is("wechat"),
            w = h.server,
            x = "51h5.com",
            y = "//" + w + "www." + x,
            v = "//" + (h.preview ? "" : w) + "api." + x,
            k = "./toolbar/asset/",
            q = h.is("phone") ? "touchstart" : "mousedown",
            z = h.is("phone") ? "touchend" : "click",
            E = "#hwtb-root{position:static;-webkit-font-smoothing:antialiased;text-align:center;font-size:14px;color:#fff;background:#f2f2f2;zoom:1}#hwtb-root div{position:static}#hwtb-root a{text-decoration:none;color:#fff;-webkit-user-select:none;-ms-user-select:none;user-select:none;touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}#hwtb-root a:active,#hwtb-root a:focus{outline:0}#hwtb-root img{touch-action-delay:none;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none}#hwtb-root[data-ui~=open] [data-role~=trigger]{display:none}#hwtb-root[data-ui~=open] [data-role~=masker],#hwtb-root[data-ui~=open] [data-role~=panel]{display:block}#hwtb-root [data-role~=trigger]{position:fixed;top:0;left:0;z-index:9996;width:100%;color:transparent;font:0/0 a;text-shadow:none}#hwtb-root [data-role~=trigger] img{width:50px}#hwtb-root [data-role~=masker]{display:none;position:fixed;top:0;left:0;z-index:9996;width:100%;height:100%;background:rgba(0,0,0,0.8);-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}#hwtb-root [data-role~=panel]{display:none;position:fixed;top:0;left:0;z-index:9997;width:100%;padding:4% 0 0 0;background:#3d3d3d}#hwtb-root [data-role~=panel]>p{margin:6px auto;font-size:90%}#hwtb-root [data-role~=tip]{position:fixed;top:-100%;left:0;z-index:9998;width:100%}#hwtb-root [data-role~=tip][data-ui~=show]{top:10%}#hwtb-root [data-role~=tip-inner]{display:inline-block;margin:0 auto;padding:6px 20px;border-radius:6px;background:#242222}#hwtb-root [data-role~=tip-inner] img{width:40px}#hwtb-root [data-role~=tip-inner] p{margin:4px 0;padding:0}#hwtb-root [data-role~=menus]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;margin:0 auto;padding:10px 0}#hwtb-root [data-role~=menus] [data-role~=menu]{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}#hwtb-root [data-role~=menus] [data-role~=menu]>a{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;padding:4px 4px 0 4px;width:60px;border-radius:6px}#hwtb-root [data-role~=menus] [data-role~=menu]>a:active,#hwtb-root [data-role~=menus] [data-role~=menu]>a:focus{background:#5f5e5e}#hwtb-root [data-role~=menus] [data-role~=menu] img{width:100%}#hwtb-root [data-role~=title]{margin:10px auto;width:70%;line-height:1px;border-bottom:1px solid #666}#hwtb-root [data-role~=title]>span{background:#3d3d3d;padding:0 10px}#hwtb-root [data-role~=cancel]{display:block;padding:0;text-align:center;border-top:1px solid #666;color:transparent;font:0/0 a;text-shadow:none}#hwtb-root [data-role~=cancel] img{width:30px}",
            T = "#hwtb-root{zoom:" + h.dprScale + ";font-size:" + 14 * h.fontScale + "px;}",
            S = 350,
            C = 3e3,
            M = "f=toolbar",
            L = "#hwtb-root",
            A = "#hwtb-proxy-p" + l(),
            j = "#hwtb-proxy-c" + l(),
            H = h.getXMeta("id") || 0,
            N = [{
                title: "\u6251\u6251\u661f\u4e92\u52a8(pupuxing.net)",
                list: "index,refresh,collect,played"
            }, {
                title: "\u5206\u4eab\u7ed9\u670b\u53cb",
                list: "shareweibo,shareqzone,sharetqq," + (g ? "sharewechat" : "sharerenren")
            }],
            P = {
                index: function() {
                    var e = ih5game.home(!0);
                    c(e + (e.indexOf("?") < 0 ? "?" : "&") + M)
                },
                refresh: function() {
                    location.reload()
                },
                collect: function() {
                    p("collect"), r("\u6536\u85cf\u6210\u529f", !0)
                },
                played: y + "/space-index-action-played.html?" + M,
                shareqq: s("qq"),
                shareqzone: s("qzone"),
                shareweibo: s("weibo"),
                sharetqq: s("tqq"),
                sharerenren: s("renren"),
                sharewechat: function() {
                    h.share()
                }
            },
            D = {
                data: function(e, t, o) {
                    if (e) {
                        if (!(arguments.length > 2)) return e.getAttribute("data-" + t, 1);
                        e.setAttribute("data-" + t, o)
                    }
                },
                on: function(e, t, o, a) {
                    e && e.addEventListener(t, o, !!a)
                },
                off: function(e, t, o, a) {
                    e && o && e.removeEventListener(t, o, !!a)
                },
                prevent: function(e) {
                    e && (e.preventDefault(), e.stopPropagation())
                },
                query: function(e, t) {
                    return "string" == typeof e ? (t = t || document, t.querySelector(e)) : e
                },
                queryAll: function(e, t) {
                    return "string" == typeof e ? (t = t || document, [].slice.call(t.querySelectorAll(e), 0)) : e
                },
                matches: function(e, t) {
                    var o = Element.prototype,
                        a = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector;
                    if (a) return a.call(e, t);
                    for (var n = this.queryAll(t, e.parentNode), r = 0; r < n.length; r++)
                        if (n[r] === e) return !0;
                    return !1
                },
                closest: function(e, t, o) {
                    o = o || document;
                    do {
                        if (this.matches(e, t)) return e;
                        if (e === o) return null
                    } while ((e = e.parentNode) && e !== document);
                    return null
                },
                insertStyle: function(e, t) {
                    var o;
                    t = t || document, o = t.createElement("style"), o.type = "text/css", t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e))
                }
            };
        g || (h.share = a, h.hideShare = n), h.ready(t)
    }
}(this);
