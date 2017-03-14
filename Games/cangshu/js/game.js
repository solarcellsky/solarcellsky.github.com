function adjustLayers(a) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", a ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w),
        $("#" + key).height(h),
        $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2),
        $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
    } catch(b) {
        console.log(b)
    }
    $("#ajaxbar").width(w),
    $("#ajaxbar").height(h)
}
function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth,
        h = window.innerHeight,
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier),
        widthRatio = window.innerWidth / mobileWidth,
        heightRatio = window.innerHeight / mobileHeight,
        adjustLayers(),
        window.scrollTo(0, 1),
        ig.ua.mobile || $("#tempdiv").hide();
        for (var a = navigator.userAgent.split(" "), b = null, c = 0; c < a.length; c++)"Version/" == a[c].substr(0, 8) && (b = a[c]);
        a = window.chrome,
        -1 < navigator.userAgent.indexOf("Chrome") && null == b ? ig.ua.mobile && null !== a && void 0 !== a && $(window) && (b = document.getElementById("scrollDown"), b.src = "media/graphics/orientate/scroll_down.png", b.style.height = "40%", b.style.width = "20%", b.style.backgroundColor = "rgba(11,156,49,0.4)", 0 == window.orientation && $("#scrollDown").hide(), 90 == Math.abs(window.orientation) && (b = document.body.offsetHeight, minHeight > b && (minHeight = b), b = portraitMode ? document.getElementById("orientate") : document.getElementById("game"), a = document.getElementById("tempdiv"), b = b.clientHeight + a.clientHeight, console.log(b + "," + minHeight), b > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()), $(window).on("orientationchange",
        function() {
            0 == window.orientation && $("#scrollDown").hide(),
            Math.abs(window.orientation),
            $("#scrollDown").show(),
            0 == window.orientation && $("#scrollDown").hide()
        }), window.addEventListener("resize",
        function() {
            if (0 == window.orientation && $("#scrollDown").hide(), 90 == Math.abs(window.orientation)) {
                var a = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
                b = document.getElementById("tempdiv");
                a.clientHeight + b.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
            }
        })) : ($("#scrollDown").hide(), $("#tempdiv").hide())
    }
}
function orientationHandler() {
    console.log("changing orientation ..."),
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth: window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show())),
    sizeHandler()
}
function fixSamsungHandler() { ! (!ig.ua.android || 4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11)) || 0 > navigator.userAgent.indexOf("GT") || 0 < navigator.userAgent.indexOf("Chrome") || 0 < navigator.userAgent.indexOf("Firefox") || (document.addEventListener("touchstart",
    function(a) {
        return a.preventDefault(),
        !1
    },
    !1), document.addEventListener("touchmove",
    function(a) {
        return a.preventDefault(),
        !1
    },
    !1), !document.addEventListener("touchend",
    function(a) {
        return a.preventDefault(),
        !1
    },
    !1)))
}
function getInternetExplorerVersion() {
    var a = -1;
    return "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1)),
    a
}
function getQueryVariable(a) {
    var b, c, d;
    for (b = window.location.search.substring(1).split("&"), c = 0; c < b.length; c++) if (d = b[c].split("="), decodeURIComponent(d[0]) == a) return decodeURIComponent(d[1])
}
function go_moreGame() {
    clickMore();
}
var portraitMode, mobilePortraitWidth, mobilePortraitHeight, mobileLandscapeWidth, mobileLandscapeHeight, mobileWidth, mobileHeight, desktopWidth, desktopHeight, w, h, multiplier, destW, destH, dynamicClickableEntityDivs, coreDivsToResize, advancedDivsToResize, minHeight, ie, _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Loading: {
        Loading: "加载中"
    },
    Tutorial: [["你好！我是只敏捷的仓鼠", "欢迎来到9G游戏游戏！"], ["收集饼干变成", "一个无敌防护罩！"], ["向上划跃过障碍。", ""], ["按向上箭头", "跃过障碍。"], ["轻按或快速滑动到", "右边收集这些金币！"], ["按右箭头", "收集那些金币！"], ["现在我们需要去左边，", "轻按或快速滑动到左边。"], ["现在我们需要去左边，", "按左箭头。"], ["还要继续向左边！", "继续轻按或快速滑动。"], ["还要继续向左边！", "继续按左箭头。"], ["向下滑动", "收集饼干！"], ["按向下箭头", "收集饼干！"], ["全部技巧都交给你了，", "希望你在9G游戏游戏玩的开心！"]],
    UI: {
        enter: "确定",
        "continue": "继续",
        owned: "已有",
        using: "使用",
        skateboard: "滑板",
        "roller-skates": "溜冰鞋",
        rocket: "火箭",
        "flying carpet": "飞毯",
        hoverboard: "悬浮滑板"
    }
},
_SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://9g.game6.cn",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://9g.game6.cn",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "http://9g.game6.cn",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !0
    }
},
MobileAdInGamePreroll = {},
MobileAdInGameHeader = {},
MobileAdInGameFooter = {},
MobileAdInGameEnd = {};
if (function(a, b) {
    function c(a, c, d) {
        if (d === b && 1 === a.nodeType) if (d = "data-" + c.replace(xb, "-$1").toLowerCase(), d = a.getAttribute(d), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: +d + "" === d ? +d: wb.test(d) ? S.parseJSON(d) : d
            } catch(e) {}
            S.data(a, c, d)
        } else d = b;
        return d
    }
    function d(a) {
        for (var b in a) if (("data" !== b || !S.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function e() {
        return ! 1
    }
    function f() {
        return ! 0
    }
    function g(a) {
        return ! a || !a.parentNode || 11 === a.parentNode.nodeType
    }
    function h(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function i(a, b, c) {
        if (b = b || 0, S.isFunction(b)) return S.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) === c
        });
        if (b.nodeType) return S.grep(a,
        function(a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = S.grep(a,
            function(a) {
                return 1 === a.nodeType
            });
            if (bd.test(b)) return S.filter(b, d, !c);
            b = S.filter(b, d)
        }
        return S.grep(a,
        function(a) {
            return 0 <= S.inArray(a, b) === c
        })
    }
    function j(a) {
        var b = ed.split("|");
        if (a = a.createDocumentFragment(), a.createElement) for (; b.length;) a.createElement(b.pop());
        return a
    }
    function k(a, b) {
        var c, d, e, f, g;
        if (1 === b.nodeType && S.hasData(a)) {
            if (d = S._data(a), f = S._data(b, d), g = d.events, g) for (c in delete f.handle, f.events = {},
            g) for (d = 0, e = g[c].length; e > d; d++) S.event.add(b, c, g[c][d]);
            f.data && (f.data = S.extend({},
            f.data))
        }
    }
    function l(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), S.support.html5Clone && a.innerHTML && !S.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && od.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected: "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue: "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute(S.expando))
    }
    function m(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }
    function n(a) {
        od.test(a.type) && (a.defaultChecked = a.checked)
    }
    function o(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Md.length; e--;) if (b = Md[e] + c, b in a) return b;
        return d
    }
    function p(a, b) {
        return a = b || a,
        "none" === S.css(a, "display") || !S.contains(a.ownerDocument, a)
    }
    function q(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) c = a[f],
        c.style && (e[f] = S._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && p(c) && (e[f] = S._data(c, "olddisplay", u(c.nodeName)))) : (d = xd(c, "display"), !e[f] && "none" !== d && S._data(c, "olddisplay", d)));
        for (f = 0; g > f; f++) c = a[f],
        !c.style || b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "": "none");
        return a
    }
    function r(a, b, c) {
        return (a = Fd.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }
    function s(a, b, c, d) {
        b = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0;
        for (var e = 0; 4 > b; b += 2)"margin" === c && (e += S.css(a, c + Ld[b], !0)),
        d ? ("content" === c && (e -= parseFloat(xd(a, "padding" + Ld[b])) || 0), "margin" !== c && (e -= parseFloat(xd(a, "border" + Ld[b] + "Width")) || 0)) : (e += parseFloat(xd(a, "padding" + Ld[b])) || 0, "padding" !== c && (e += parseFloat(xd(a, "border" + Ld[b] + "Width")) || 0));
        return e
    }
    function t(a, b, c) {
        var d = "width" === b ? a.offsetWidth: a.offsetHeight,
        e = !0,
        f = S.support.boxSizing && "border-box" === S.css(a, "boxSizing");
        if (0 >= d || null == d) {
            if (d = xd(a, b), (0 > d || null == d) && (d = a.style[b]), Gd.test(d)) return d;
            e = f && (S.support.boxSizingReliable || d === a.style[b]),
            d = parseFloat(d) || 0
        }
        return d + s(a, b, c || (f ? "border": "content"), e) + "px"
    }
    function u(a) {
        if (Id[a]) return Id[a];
        var b = S("<" + a + ">").appendTo(H.body),
        c = b.css("display");
        return b.remove(),
        ("none" === c || "" === c) && (yd = H.body.appendChild(yd || S.extend(H.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), zd && yd.createElement || (zd = (yd.contentWindow || yd.contentDocument).document, zd.write("<!doctype html><html><body>"), zd.close()), b = zd.body.appendChild(zd.createElement(a)), c = xd(b, "display"), H.body.removeChild(yd)),
        Id[a] = c,
        c
    }
    function v(a, b, c, d) {
        var e;
        if (S.isArray(b)) S.each(b,
        function(b, e) {
            c || Pd.test(a) ? d(a, e) : v(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== S.type(b)) d(a, b);
        else for (e in b) v(a + "[" + e + "]", b[e], c, d)
    }
    function w(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e, f = b.toLowerCase().split(V),
            g = 0,
            h = f.length;
            if (S.isFunction(c)) for (; h > g; g++) d = f[g],
            (e = /^\+/.test(d)) && (d = d.substr(1) || "*"),
            d = a[d] = a[d] || [],
            d[e ? "unshift": "push"](c)
        }
    }
    function x(a, c, d, e, f, g) {
        var h, i, j, k;
        for (f = f || c.dataTypes[0], g = g || {},
        g[f] = !0, f = a[f], i = 0, j = f ? f.length: 0, k = a === ce; j > i && (k || !h); i++) h = f[i](c, d, e),
        "string" == typeof h && (!k || g[h] ? h = b: (c.dataTypes.unshift(h), h = x(a, c, d, e, h, g)));
        return (k || !h) && !g["*"] && (h = x(a, c, d, e, "*", g)),
        h
    }
    function y(a, c) {
        var d, e, f = S.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a: e || (e = {}))[d] = c[d]);
        e && S.extend(!0, a, e)
    }
    function z() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function A() {
        return setTimeout(function() {
            oe = b
        },
        0),
        oe = S.now()
    }
    function B(a, b, c) {
        var d, j, k, l, m, n, e = 0,
        f = te.length,
        g = S.Deferred().always(function() {
            delete h.elem
        }),
        h = function() {
            for (var b = oe || A(), b = Math.max(0, i.startTime + i.duration - b), c = 1 - (b / i.duration || 0), d = 0, e = i.tweens.length; e > d; d++) i.tweens[d].run(c);
            return g.notifyWith(a, [i, c, b]),
            1 > c && e ? b: (g.resolveWith(a, [i]), !1)
        },
        i = g.promise({
            elem: a,
            props: S.extend({},
            b),
            opts: S.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: oe || A(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = S.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(d),
                d
            },
            stop: function(b) {
                for (var c = 0,
                d = b ? i.tweens.length: 0; d > c; c++) i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]),
                this
            }
        });
        b = i.props,
        c = i.opts.specialEasing;
        for (d in b) if (j = S.camelCase(d), k = c[j], l = b[d], S.isArray(l) && (k = l[1], l = b[d] = l[0]), d !== j && (b[j] = l, delete b[d]), (m = S.cssHooks[j]) && "expand" in m) for (d in l = m.expand(l), delete b[j], l) d in b || (b[d] = l[d], c[d] = k);
        else c[j] = k;
        for (; f > e; e++) if (d = te[e].call(i, a, b, i.opts)) return d;
        return n = i,
        S.each(b,
        function(a, b) {
            for (var c = (ue[a] || []).concat(ue["*"]), d = 0, e = c.length; e > d && !c[d].call(n, a, b); d++);
        }),
        S.isFunction(i.opts.start) && i.opts.start.call(a, i),
        S.fx.timer(S.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })),
        i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D(a, b) {
        var c, d = {
            height: a
        },
        e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ld[e],
        d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function E(a) {
        return S.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    var F, G, gb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, hb, ub, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Uc, Vc, Wc, Xc, Yc, Zc, $c, _c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, _d, ae, be, ce, de, ee, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, H = a.document,
    I = a.location,
    J = a.navigator,
    K = a.jQuery,
    L = a.$,
    M = Array.prototype.push,
    N = Array.prototype.slice,
    O = Array.prototype.indexOf,
    P = Object.prototype.toString,
    Q = Object.prototype.hasOwnProperty,
    R = String.prototype.trim,
    S = function(a, b) {
        return new S.fn.init(a, b, F)
    },
    T = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    U = /\S/,
    V = /\s+/,
    W = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    X = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    Y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Z = /^[\],:{}\s]*$/,
    $ = /(?:^|:|,)(?:\s*\[)+/g,
    _ = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ab = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    bb = /^-ms-/,
    cb = /-([\da-z])/gi,
    db = function(a, b) {
        return (b + "").toUpperCase()
    },
    eb = function() {
        H.addEventListener ? (H.removeEventListener("DOMContentLoaded", eb, !1), S.ready()) : "complete" === H.readyState && (H.detachEvent("onreadystatechange", eb), S.ready())
    },
    fb = {};
    if (S.fn = S.prototype = {
        constructor: S,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a,
            this.length = 1,
            this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : X.exec(a), e && (e[1] || !c)) {
                    if (e[1]) return c = c instanceof S ? c[0] : c,
                    f = c && c.nodeType ? c.ownerDocument || c: H,
                    a = S.parseHTML(e[1], f, !0),
                    Y.test(e[1]) && S.isPlainObject(c) && this.attr.call(a, c, !0),
                    S.merge(this, a);
                    if ((c = H.getElementById(e[2])) && c.parentNode) {
                        if (c.id !== e[2]) return d.find(a);
                        this.length = 1,
                        this[0] = c
                    }
                    return this.context = H,
                    this.selector = a,
                    this
                }
                return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return S.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), S.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return N.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            return a = S.merge(this.constructor(), a),
            a.prevObject = this,
            a.context = this.context,
            "find" === b ? a.selector = this.selector + (this.selector ? " ": "") + c: b && (a.selector = this.selector + "." + b + "(" + c + ")"),
            a
        },
        each: function(a, b) {
            return S.each(this, a, b)
        },
        ready: function(a) {
            return S.ready.promise().done(a),
            this
        },
        eq: function(a) {
            return a = +a,
            -1 === a ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(S.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: M,
        sort: [].sort,
        splice: [].splice
    },
    S.fn.init.prototype = S.fn, S.extend = S.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
        i = 2), "object" != typeof h && !S.isFunction(h) && (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c],
        e = a[c],
        h !== e && (k && e && (S.isPlainObject(e) || (f = S.isArray(e))) ? (f ? (f = !1, g = d && S.isArray(d) ? d: []) : g = d && S.isPlainObject(d) ? d: {},
        h[c] = S.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    },
    S.extend({
        noConflict: function(b) {
            return a.$ === S && (a.$ = L),
            b && a.jQuery === S && (a.jQuery = K),
            S
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? S.readyWait++:S.ready(!0)
        },
        ready: function(a) {
            if (! (!0 === a ? --S.readyWait: S.isReady)) {
                if (!H.body) return setTimeout(S.ready, 1);
                S.isReady = !0,
                !0 !== a && 0 < --S.readyWait || (G.resolveWith(H, [S]), S.fn.trigger && S(H).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === S.type(a)
        },
        isArray: Array.isArray ||
        function(a) {
            return "array" === S.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return ! isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? String(a) : fb[P.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || "object" !== S.type(a) || a.nodeType || S.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !Q.call(a, "constructor") && !Q.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(c) {
                return ! 1
            }
            for (var d in a);
            return d === b || Q.call(a, d)
        },
        isEmptyObject: function(a) {
            for (var b in a) return ! 1;
            return ! 0
        },
        error: function(a) {
            throw Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || H, (d = Y.exec(a)) ? [b.createElement(d[1])] : (d = S.buildFragment([a], b, c ? null: []), S.merge([], (d.cacheable ? S.clone(d.fragment) : d.fragment).childNodes))) : null
        },
        parseJSON: function(b) {
            return b && "string" == typeof b ? (b = S.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : Z.test(b.replace(_, "@").replace(ab, "]").replace($, "")) ? new Function("return " + b)() : (S.error("Invalid JSON: " + b), void 0)) : null
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch(f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && S.error("Invalid XML: " + c),
            d
        },
        noop: function() {},
        globalEval: function(b) {
            b && U.test(b) && (a.execScript ||
            function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0,
            g = a.length,
            h = g === b || S.isFunction(a);
            if (d) if (h) {
                for (e in a) if (!1 === c.apply(a[e], d)) break
            } else for (; g > f && !1 !== c.apply(a[f++], d););
            else if (h) {
                for (e in a) if (!1 === c.call(a[e], e, a[e])) break
            } else for (; g > f && !1 !== c.call(a[f], f, a[f++]););
            return a
        },
        trim: R && !R.call("﻿ ") ?
        function(a) {
            return null == a ? "": R.call(a)
        }: function(a) {
            return null == a ? "": (a + "").replace(W, "")
        },
        makeArray: function(a, b) {
            var c, d = b || [];
            return null != a && (c = S.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || S.isWindow(a) ? M.call(d, a) : S.merge(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (O) return O.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return - 1
        },
        merge: function(a, c) {
            var d = c.length,
            e = a.length,
            f = 0;
            if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
            else for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var d, e = [],
            f = 0,
            g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f),
            c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [],
            h = 0,
            i = a.length;
            if (a instanceof S || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || S.isArray(a))) for (; i > h; h++) e = c(a[h], h, d),
            null != e && (g[g.length] = e);
            else for (f in a) e = c(a[f], f, d),
            null != e && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d),
            S.isFunction(a) ? (e = N.call(arguments, 2), f = function() {
                return a.apply(c, e.concat(N.call(arguments)))
            },
            f.guid = a.guid = a.guid || S.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = null == d,
            k = 0,
            l = a.length;
            if (d && "object" == typeof d) {
                for (k in d) S.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && S.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                    return i.call(S(a), c)
                }) : (c.call(a, e), c = null)), c) for (; l > k; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a: j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }), S.ready.promise = function(b) {
        if (!G) if (G = S.Deferred(), "complete" === H.readyState) setTimeout(S.ready, 1);
        else if (H.addEventListener) H.addEventListener("DOMContentLoaded", eb, !1),
        a.addEventListener("load", S.ready, !1);
        else {
            H.attachEvent("onreadystatechange", eb),
            a.attachEvent("onload", S.ready);
            var c = !1;
            try {
                c = null == a.frameElement && H.documentElement
            } catch(d) {}
            c && c.doScroll &&
            function e() {
                if (!S.isReady) {
                    try {
                        c.doScroll("left")
                    } catch(a) {
                        return setTimeout(e, 50)
                    }
                    S.ready()
                }
            } ()
        }
        return G.promise(b)
    },
    S.each("Boolean Number String Function Array Date RegExp Object".split(" "),
    function(a, b) {
        fb["[object " + b + "]"] = b.toLowerCase()
    }), F = S(H), gb = {},
    S.Callbacks = function(a) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        return "string" == typeof a ? (c = gb[a]) || (c = a, d = gb[c] = {},
        S.each(c.split(V),
        function(a, b) {
            d[b] = !0
        }), c = d) : c = S.extend({},
        a),
        a = c,
        k = [],
        l = !a.once && [],
        m = function(b) {
            for (e = a.memory && b, f = !0, j = h || 0, h = 0, i = k.length, g = !0; k && i > j; j++) if (!1 === k[j].apply(b[0], b[1]) && a.stopOnFalse) {
                e = !1;
                break
            }
            g = !1,
            k && (l ? l.length && m(l.shift()) : e ? k = [] : n.disable())
        },
        n = {
            add: function() {
                if (k) {
                    var b = k.length; !
                    function c(b) {
                        S.each(b,
                        function(b, d) {
                            var e = S.type(d);
                            "function" !== e || a.unique && n.has(d) ? d && d.length && "string" !== e && c(d) : k.push(d)
                        })
                    } (arguments),
                    g ? i = k.length: e && (h = b, m(e))
                }
                return this
            },
            remove: function() {
                return k && S.each(arguments,
                function(a, b) {
                    for (var c; - 1 < (c = S.inArray(b, k, c));) k.splice(c, 1),
                    g && (i >= c && i--, j >= c && j--)
                }),
                this
            },
            has: function(a) {
                return - 1 < S.inArray(a, k)
            },
            empty: function() {
                return k = [],
                this
            },
            disable: function() {
                return k = l = e = b,
                this
            },
            disabled: function() {
                return ! k
            },
            lock: function() {
                return l = b,
                e || n.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(a, b) {
                return b = b || [],
                b = [a, b.slice ? b.slice() : b],
                k && (!f || l) && (g ? l.push(b) : m(b)),
                this
            },
            fire: function() {
                return n.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! f
            }
        },
        n
    },
    S.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", S.Callbacks("once memory"), "resolved"], ["reject", "fail", S.Callbacks("once memory"), "rejected"], ["notify", "progress", S.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return S.Deferred(function(c) {
                        S.each(b,
                        function(b, d) {
                            var f = d[0],
                            g = a[b];
                            e[d[1]](S.isFunction(g) ?
                            function() {
                                var a = g.apply(this, arguments);
                                a && S.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c: this, [a])
                            }: c[f])
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? S.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            S.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = g.fire,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var h, i, j, b = 0,
            c = N.call(arguments),
            d = c.length,
            e = 1 !== d || a && S.isFunction(a.promise) ? d: 0,
            f = 1 === e ? a: S.Deferred(),
            g = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = 1 < arguments.length ? N.call(arguments) : d,
                    c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            };
            if (d > 1) for (h = Array(d), i = Array(d), j = Array(d); d > b; b++) c[b] && S.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
            return e || f.resolveWith(j, c),
            f.promise()
        }
    }), hb = S, ub = H.createElement("div"), ub.setAttribute("className", "t"), ub.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", kb = ub.getElementsByTagName("*"), lb = ub.getElementsByTagName("a")[0], lb.style.cssText = "top:1px;float:left;opacity:.5", kb && kb.length) {
        mb = H.createElement("select"),
        nb = mb.appendChild(H.createElement("option")),
        ob = ub.getElementsByTagName("input")[0],
        jb = {
            leadingWhitespace: 3 === ub.firstChild.nodeType,
            tbody: !ub.getElementsByTagName("tbody").length,
            htmlSerialize: !!ub.getElementsByTagName("link").length,
            style: /top/.test(lb.getAttribute("style")),
            hrefNormalized: "/a" === lb.getAttribute("href"),
            opacity: /^0.5/.test(lb.style.opacity),
            cssFloat: !!lb.style.cssFloat,
            checkOn: "on" === ob.value,
            optSelected: nb.selected,
            getSetAttribute: "t" !== ub.className,
            enctype: !!H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === H.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        ob.checked = !0,
        jb.noCloneChecked = ob.cloneNode(!0).checked,
        mb.disabled = !0,
        jb.optDisabled = !nb.disabled;
        try {
            delete ub.test
        } catch(vb) {
            jb.deleteExpando = !1
        }
        if (!ub.addEventListener && ub.attachEvent && ub.fireEvent && (ub.attachEvent("onclick", tb = function() {
            jb.noCloneEvent = !1
        }), ub.cloneNode(!0).fireEvent("onclick"), ub.detachEvent("onclick", tb)), ob = H.createElement("input"), ob.value = "t", ob.setAttribute("type", "radio"), jb.radioValue = "t" === ob.value, ob.setAttribute("checked", "checked"), ob.setAttribute("name", "t"), ub.appendChild(ob), pb = H.createDocumentFragment(), pb.appendChild(ub.lastChild), jb.checkClone = pb.cloneNode(!0).cloneNode(!0).lastChild.checked, jb.appendChecked = ob.checked, pb.removeChild(ob), pb.appendChild(ub), ub.attachEvent) for (rb in {
            submit: !0,
            change: !0,
            focusin: !0
        }) qb = "on" + rb,
        (sb = qb in ub) || (ub.setAttribute(qb, "return;"), sb = "function" == typeof ub[qb]),
        jb[rb + "Bubbles"] = sb;
        S(function() {
            var b, c, d, e, f = H.getElementsByTagName("body")[0];
            f && (b = H.createElement("div"), b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(b, f.firstChild), c = H.createElement("div"), b.appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = c.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none", sb = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", jb.reliableHiddenOffsets = sb && 0 === d[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", jb.boxSizing = 4 === c.offsetWidth, jb.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, a.getComputedStyle && (jb.pixelPosition = "1%" !== (a.getComputedStyle(c, null) || {}).top, jb.boxSizingReliable = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width, e = H.createElement("div"), e.style.cssText = c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", c.style.width = "1px", c.appendChild(e), jb.reliableMarginRight = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof c.style.zoom && (c.innerHTML = "", c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", jb.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.style.overflow = "visible", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", jb.shrinkWrapBlocks = 3 !== c.offsetWidth, b.style.zoom = 1), f.removeChild(b))
        }),
        pb.removeChild(ub),
        kb = lb = mb = nb = ob = pb = ub = null,
        ib = jb
    } else ib = {};
    hb.support = ib,
    wb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    xb = /([A-Z])/g,
    S.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (S.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? S.cache[a[S.expando]] : a[S.expando],
            !!a && !d(a)
        },
        data: function(a, c, d, e) {
            if (S.acceptData(a)) {
                var f, g, h = S.expando,
                i = "string" == typeof c,
                j = a.nodeType,
                k = j ? S.cache: a,
                l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = S.deletedIds.pop() || S.guid++:l = h),
                k[l] || (k[l] = {},
                j || (k[l].toJSON = S.noop)),
                ("object" == typeof c || "function" == typeof c) && (e ? k[l] = S.extend(k[l], c) : k[l].data = S.extend(k[l].data, c)),
                f = k[l],
                e || (f.data || (f.data = {}), f = f.data),
                d !== b && (f[S.camelCase(c)] = d),
                i ? (g = f[c], null == g && (g = f[S.camelCase(c)])) : g = f,
                g
            }
        },
        removeData: function(a, b, c) {
            if (S.acceptData(a)) {
                var e, f, g, h = a.nodeType,
                i = h ? S.cache: a,
                j = h ? a[S.expando] : S.expando;
                if (i[j]) {
                    if (b && (e = c ? i[j] : i[j].data)) {
                        S.isArray(b) || (b in e ? b = [b] : (b = S.camelCase(b), b = b in e ? [b] : b.split(" "))),
                        f = 0;
                        for (g = b.length; g > f; f++) delete e[b[f]];
                        if (! (c ? d: S.isEmptyObject)(e)) return
                    } (c || (delete i[j].data, !!d(i[j]))) && (h ? S.cleanData([a], !0) : S.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                }
            }
        },
        _data: function(a, b, c) {
            return S.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && S.noData[a.nodeName.toLowerCase()];
            return ! b || !0 !== b && a.getAttribute("classid") === b
        }
    }),
    S.fn.extend({
        data: function(a, d) {
            var e, f, g, h, i, j = this[0],
            k = 0,
            l = null;
            if (a === b) {
                if (this.length && (l = S.data(j), 1 === j.nodeType && !S._data(j, "parsedAttrs"))) {
                    for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name,
                    h.indexOf("data-") || (h = S.camelCase(h.substring(5)), c(j, h, l[h]));
                    S._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function() {
                S.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", S.access(this,
            function(d) {
                return d === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = S.data(j, a), l = c(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = d, this.each(function() {
                    var b = S(this);
                    b.triggerHandler("setData" + f, e),
                    S.data(this, a, d),
                    b.triggerHandler("changeData" + f, e)
                }), void 0)
            },
            null, d, 1 < arguments.length, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                S.removeData(this, a)
            })
        }
    }),
    S.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = S._data(a, b), c && (!d || S.isArray(c) ? d = S._data(a, b, S.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = S.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = S._queueHooks(a, b),
            g = function() {
                S.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return S._data(a, c) || S._data(a, c, {
                empty: S.Callbacks("once memory").add(function() {
                    S.removeData(a, b + "queue", !0),
                    S.removeData(a, c, !0)
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--),
            arguments.length < d ? S.queue(this[0], a) : c === b ? this: this.each(function() {
                var b = S.queue(this, a, c);
                S._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && S.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                S.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = S.fx ? S.fx.speeds[a] || a: a,
            b = b || "fx",
            this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
            f = S.Deferred(),
            g = this,
            h = this.length,
            i = function() {--e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)(d = S._data(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(i));
            return i(),
            f.promise(c)
        }
    }),
    Bb = /[\t\r\n]/g,
    Cb = /\r/g,
    Db = /^(?:button|input)$/i,
    Eb = /^(?:button|input|object|select|textarea)$/i,
    Fb = /^a(?:rea|)$/i,
    Gb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Hb = S.support.getSetAttribute,
    S.fn.extend({
        attr: function(a, b) {
            return S.access(this, S.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                S.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return S.access(this, S.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = S.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (S.isFunction(a)) return this.each(function(b) {
                S(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a) for (b = a.split(V), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className || 1 !== b.length) {
                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) 0 > f.indexOf(" " + b[g] + " ") && (f += b[g] + " ");
                e.className = S.trim(f)
            } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (S.isFunction(a)) return this.each(function(b) {
                S(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b) for (c = (a || "").split(V), h = 0, i = this.length; i > h; h++) if (e = this[h], 1 === e.nodeType && e.className) {
                for (d = (" " + e.className + " ").replace(Bb, " "), f = 0, g = c.length; g > f; f++) for (; 0 <= d.indexOf(" " + c[f] + " ");) d = d.replace(" " + c[f] + " ", " ");
                e.className = a ? S.trim(d) : ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            d = "boolean" == typeof b;
            return S.isFunction(a) ? this.each(function(c) {
                S(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c) for (var e, f = 0,
                g = S(this), h = b, i = a.split(V); e = i[f++];) h = d ? h: !g.hasClass(e),
                g[h ? "addClass": "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && S._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "": S._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0,
            c = this.length; c > b; b++) if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Bb, " ").indexOf(a)) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = S.isFunction(a), this.each(function(d) {
                var f, g = S(this);
                1 !== this.nodeType || (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "": "number" == typeof f ? f += "": S.isArray(f) && (f = S.map(f,
                function(a) {
                    return null == a ? "": a + ""
                })), c = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b) || (this.value = f)
            })) : f ? (c = S.valHooks[f.type] || S.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d: (d = f.value, "string" == typeof d ? d.replace(Cb, "") : null == d ? "": d)) : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return ! b || b.specified ? a.value: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.selectedIndex,
                    e = [],
                    f = a.options,
                    g = "select-one" === a.type;
                    if (0 > d) return null;
                    for (a = g ? d: 0, c = g ? d + 1 : f.length; c > a; a++) if (b = f[a], !(!b.selected || (S.support.optDisabled ? b.disabled: null !== b.getAttribute("disabled")) || b.parentNode.disabled && S.nodeName(b.parentNode, "optgroup"))) {
                        if (b = S(b).val(), g) return b;
                        e.push(b)
                    }
                    return g && !e.length && f.length ? S(f[d]).val() : e
                },
                set: function(a, b) {
                    var c = S.makeArray(b);
                    return S(a).find("option").each(function() {
                        this.selected = 0 <= S.inArray(S(this).val(), c)
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? e && S.isFunction(S.fn[c]) ? S(a)[c](d) : "undefined" == typeof a.getAttribute ? S.prop(a, c, d) : ((e = 1 !== h || !S.isXMLDoc(a)) && (c = c.toLowerCase(), g = S.attrHooks[c] || (Gb.test(c) ? zb: yb)), d !== b ? null === d ? (S.removeAttr(a, c), void 0) : g && "set" in g && e && (f = g.set(a, d, c)) !== b ? f: (a.setAttribute(c, d + ""), d) : g && "get" in g && e && null !== (f = g.get(a, c)) ? f: (f = a.getAttribute(c), null === f ? b: f)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType) for (d = b.split(V); g < d.length; g++)(e = d[g]) && (c = S.propFix[e] || e, f = Gb.test(e), f || S.attr(a, e, ""), a.removeAttribute(Hb ? e: c), f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (Db.test(a.nodeName) && a.parentNode) S.error("type property can't be changed");
                    else if (!S.support.radioValue && "radio" === b && S.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return yb && S.nodeName(a, "button") ? yb.get(a, b) : b in a ? a.value: null
                },
                set: function(a, b, c) {
                    return yb && S.nodeName(a, "button") ? yb.set(a, b, c) : (a.value = b, void 0)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !S.isXMLDoc(a), g && (c = S.propFix[c] || c, f = S.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : Eb.test(a.nodeName) || Fb.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    zb = {
        get: function(a, c) {
            var d, e = S.prop(a, c);
            return ! 0 === e || "boolean" != typeof e && (d = a.getAttributeNode(c)) && !1 !== d.nodeValue ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return ! 1 === b ? S.removeAttr(a, c) : (d = S.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
            c
        }
    },
    Hb || (Ab = {
        name: !0,
        id: !0,
        coords: !0
    },
    yb = S.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && (Ab[c] ? "" !== d.value: d.specified) ? d.value: b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = H.createAttribute(c), a.setAttributeNode(d)),
            d.value = b + ""
        }
    },
    S.each(["width", "height"],
    function(a, b) {
        S.attrHooks[b] = S.extend(S.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), S.attrHooks.contenteditable = {
        get: yb.get,
        set: function(a, b, c) {
            "" === b && (b = "false"),
            yb.set(a, b, c)
        }
    }),
    S.support.hrefNormalized || S.each(["href", "src", "width", "height"],
    function(a, c) {
        S.attrHooks[c] = S.extend(S.attrHooks[c], {
            get: function(a) {
                return a = a.getAttribute(c, 2),
                null === a ? b: a
            }
        })
    }),
    S.support.style || (S.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    S.support.optSelected || (S.propHooks.selected = S.extend(S.propHooks.selected, {
        get: function(a) {
            return a = a.parentNode,
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex),
            null
        }
    })),
    S.support.enctype || (S.propFix.enctype = "encoding"),
    S.support.checkOn || S.each(["radio", "checkbox"],
    function() {
        S.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on": a.value
            }
        }
    }),
    S.each(["radio", "checkbox"],
    function() {
        S.valHooks[this] = S.extend(S.valHooks[this], {
            set: function(a, b) {
                return S.isArray(b) ? a.checked = 0 <= S.inArray(S(a).val(), b) : void 0
            }
        })
    }),
    Ib = /^(?:textarea|input|select)$/i,
    Jb = /^([^\.]*|)(?:\.(.+)|)$/,
    Kb = /(?:^|\s)hover(\.\S+|)\b/,
    Lb = /^key/,
    Mb = /^(?:mouse|contextmenu)|click/,
    Nb = /^(?:focusinfocus|focusoutblur)$/,
    Ob = function(a) {
        return S.event.special.hover ? a: a.replace(Kb, "mouseenter$1 mouseleave$1")
    },
    S.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = S._data(a))) {
                for (d.handler && (m = d, d = m.handler, f = m.selector), d.guid || (d.guid = S.guid++), (i = g.events) || (g.events = i = {}), (h = g.handle) || (g.handle = h = function(a) {
                    return "undefined" == typeof S || a && S.event.triggered === a.type ? b: S.event.dispatch.apply(h.elem, arguments)
                },
                h.elem = a), c = S.trim(Ob(c)).split(" "), g = 0; g < c.length; g++) j = Jb.exec(c[g]) || [],
                k = j[1],
                l = (j[2] || "").split(".").sort(),
                o = S.event.special[k] || {},
                k = (f ? o.delegateType: o.bindType) || k,
                o = S.event.special[k] || {},
                j = S.extend({
                    type: k,
                    origType: j[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && S.expr.match.needsContext.test(f),
                    namespace: l.join(".")
                },
                m),
                n = i[k],
                n || (n = i[k] = [], n.delegateCount = 0, o.setup && !1 !== o.setup.call(a, e, l, h)) || (a.addEventListener ? a.addEventListener(k, h, !1) : a.attachEvent && a.attachEvent("on" + k, h)),
                o.add && (o.add.call(a, j), j.handler.guid || (j.handler.guid = d.guid)),
                f ? n.splice(n.delegateCount++, 0, j) : n.push(j),
                S.event.global[k] = !0;
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p = S.hasData(a) && S._data(a);
            if (p && (l = p.events)) {
                for (b = S.trim(Ob(b || "")).split(" "), f = 0; f < b.length; f++) if (g = Jb.exec(b[f]) || [], h = i = g[1], g = g[2], h) {
                    for (m = S.event.special[h] || {},
                    h = (d ? m.delegateType: m.bindType) || h, n = l[h] || [], j = n.length, g = g ? RegExp("(^|\\.)" + g.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, k = 0; k < n.length; k++) o = n[k],
                    !(!e && i !== o.origType || c && c.guid !== o.guid || g && !g.test(o.namespace) || d && d !== o.selector && ("**" !== d || !o.selector) || (n.splice(k--, 1), o.selector && n.delegateCount--, !m.remove || !m.remove.call(a, o)));
                    0 === n.length && j !== n.length && ((!m.teardown || !1 === m.teardown.call(a, g, p.handle)) && S.removeEvent(a, h, p.handle), delete l[h])
                } else for (h in l) S.event.remove(a, h + b[f], c, d, !0);
                S.isEmptyObject(l) && (delete p.handle, S.removeData(a, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n = c.type || c;
                if (j = [], !Nb.test(n + S.event.triggered) && (0 <= n.indexOf("!") && (n = n.slice(0, -1), g = !0), 0 <= n.indexOf(".") && (j = n.split("."), n = j.shift(), j.sort()), e && !S.event.customEvent[n] || S.event.global[n])) if (c = "object" == typeof c ? c[S.expando] ? c: new S.Event(n, c) : new S.Event(n), c.type = n, c.isTrigger = !0, c.exclusive = g, c.namespace = j.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + j.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, j = 0 > n.indexOf(":") ? "on" + n: "", e) {
                    if (c.result = b, c.target || (c.target = e), d = null != d ? S.makeArray(d) : [], d.unshift(c), k = S.event.special[n] || {},
                    !(k.trigger && !1 === k.trigger.apply(e, d))) {
                        if (m = [[e, k.bindType || n]], !f && !k.noBubble && !S.isWindow(e)) {
                            for (h = k.delegateType || n, g = Nb.test(h + n) ? e: e.parentNode, i = e; g; g = g.parentNode) m.push([g, h]),
                            i = g;
                            i === (e.ownerDocument || H) && m.push([i.defaultView || i.parentWindow || a, h])
                        }
                        for (h = 0; h < m.length && !c.isPropagationStopped(); h++) g = m[h][0],
                        c.type = m[h][1],
                        (l = (S._data(g, "events") || {})[c.type] && S._data(g, "handle")) && l.apply(g, d),
                        (l = j && g[j]) && S.acceptData(g) && l.apply && !1 === l.apply(g, d) && c.preventDefault();
                        return c.type = n,
                        !(f || c.isDefaultPrevented() || k._default && !1 !== k._default.apply(e.ownerDocument, d) || "click" === n && S.nodeName(e, "a") || !S.acceptData(e) || !j || !e[n] || ("focus" === n || "blur" === n) && 0 === c.target.offsetWidth || S.isWindow(e) || (i = e[j], i && (e[j] = null), S.event.triggered = n, e[n](), S.event.triggered = b, !i || !(e[j] = i))),
                        c.result
                    }
                } else for (h in e = S.cache) e[h].events && e[h].events[n] && S.event.trigger(c, d, e[h].handle.elem, !0)
            }
        },
        dispatch: function(c) {
            c = S.event.fix(c || a.event);
            var d, e, f, g, h, i, j = (S._data(this, "events") || {})[c.type] || [],
            k = j.delegateCount,
            l = N.call(arguments),
            m = !c.exclusive && !c.namespace,
            n = S.event.special[c.type] || {},
            o = [];
            if (l[0] = c, c.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, c)) {
                if (k && (!c.button || "click" !== c.type)) for (e = c.target; e != this; e = e.parentNode || this) if (!0 !== e.disabled || "click" !== c.type) {
                    for (g = {},
                    h = [], d = 0; k > d; d++) f = j[d],
                    i = f.selector,
                    g[i] === b && (g[i] = f.needsContext ? 0 <= S(i, this).index(e) : S.find(i, this, null, [e]).length),
                    g[i] && h.push(f);
                    h.length && o.push({
                        elem: e,
                        matches: h
                    })
                }
                for (j.length > k && o.push({
                    elem: this,
                    matches: j.slice(k)
                }), d = 0; d < o.length && !c.isPropagationStopped(); d++) for (g = o[d], c.currentTarget = g.elem, e = 0; e < g.matches.length && !c.isImmediatePropagationStopped(); e++) f = g.matches[e],
                (m || !c.namespace && !f.namespace || c.namespace_re && c.namespace_re.test(f.namespace)) && (c.data = f.data, c.handleObj = f, f = ((S.event.special[f.origType] || {}).handle || f.handler).apply(g.elem, l), f !== b && (c.result = f, !1 === f && (c.preventDefault(), c.stopPropagation())));
                return n.postDispatch && n.postDispatch.call(this, c),
                c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || H, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement: h),
                !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[S.expando]) return a;
            var b, c, d = a,
            e = S.event.fixHooks[a.type] || {},
            f = e.props ? this.props.concat(e.props) : this.props;
            for (a = S.Event(d), b = f.length; b;) c = f[--b],
            a[c] = d[c];
            return a.target || (a.target = d.srcElement || H),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    S.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            a = S.extend(new S.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            }),
            d ? S.event.trigger(a, null, b) : S.event.dispatch.call(b, a),
            a.isDefaultPrevented() && c.preventDefault()
        }
    },
    S.event.handle = S.event.dispatch,
    S.removeEvent = H.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        b = "on" + b,
        a.detachEvent && ("undefined" == typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    },
    S.Event = function(a, b) {
        return this instanceof S.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? f: e) : this.type = a, b && S.extend(this, b), this.timeStamp = a && a.timeStamp || S.now(), this[S.expando] = !0, void 0) : new S.Event(a, b)
    },
    S.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = f;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = f;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f,
            this.stopPropagation()
        },
        isDefaultPrevented: e,
        isPropagationStopped: e,
        isImmediatePropagationStopped: e
    },
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        S.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = a.relatedTarget,
                e = a.handleObj;
                return (!d || d !== this && !S.contains(this, d)) && (a.type = e.origType, c = e.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    S.support.submitBubbles || (S.event.special.submit = {
        setup: function() {
            return S.nodeName(this, "form") ? !1 : (S.event.add(this, "click._submit keypress._submit",
            function(a) {
                a = a.target,
                (a = S.nodeName(a, "input") || S.nodeName(a, "button") ? a.form: b) && !S._data(a, "_submit_attached") && (S.event.add(a, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), S._data(a, "_submit_attached", !0))
            }), void 0)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && S.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return S.nodeName(this, "form") ? !1 : (S.event.remove(this, "._submit"), void 0)
        }
    }),
    S.support.changeBubbles || (S.event.special.change = {
        setup: function() {
            return Ib.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (S.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), S.event.add(this, "click._change",
            function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                S.event.simulate("change", this, a, !0)
            })), !1) : (S.event.add(this, "beforeactivate._change",
            function(a) {
                a = a.target,
                Ib.test(a.nodeName) && !S._data(a, "_change_attached") && (S.event.add(a, "change._change",
                function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && S.event.simulate("change", this.parentNode, a, !0)
                }), S._data(a, "_change_attached", !0))
            }), void 0)
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return S.event.remove(this, "._change"),
            !Ib.test(this.nodeName)
        }
    }),
    S.support.focusinBubbles || S.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = 0,
        d = function(a) {
            S.event.simulate(b, a.target, S.event.fix(a), !0)
        };
        S.event.special[b] = {
            setup: function() {
                0 === c++&&H.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && H.removeEventListener(a, d, !0)
            }
        }
    }),
    S.fn.extend({
        on: function(a, c, d, f, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            if (null == d && null == f ? (f = c, d = c = b) : null == f && ("string" == typeof c ? (f = d, d = b) : (f = d, d = c, c = b)), !1 === f) f = e;
            else if (!f) return this;
            return 1 === g && (h = f, f = function(a) {
                return S().off(a),
                h.apply(this, arguments)
            },
            f.guid = h.guid || (h.guid = S.guid++)),
            this.each(function() {
                S.event.add(this, a, f, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var f, g;
            if (a && a.preventDefault && a.handleObj) return f = a.handleObj,
            S(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace: f.origType, f.selector, f.handler),
            this;
            if ("object" == typeof a) {
                for (g in a) this.off(g, c, a[g]);
                return this
            }
            return (!1 === c || "function" == typeof c) && (d = c, c = b),
            !1 === d && (d = e),
            this.each(function() {
                S.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            return S(this.context).on(a, this.selector, b, c),
            this
        },
        die: function(a, b) {
            return S(this.context).off(a, this.selector || "**", b),
            this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                S.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            return this[0] ? S.event.trigger(a, b, this[0], !0) : void 0
        },
        toggle: function(a) {
            var b = arguments,
            c = a.guid || S.guid++,
            d = 0,
            e = function(c) {
                var e = (S._data(this, "lastToggle" + a.guid) || 0) % d;
                return S._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault(),
                b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length;) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        S.fn[b] = function(a, c) {
            return null == c && (c = a, a = null),
            0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        },
        Lb.test(b) && (S.event.fixHooks[b] = S.event.keyHooks),
        Mb.test(b) && (S.event.fixHooks[b] = S.event.mouseHooks)
    }),
    Pb = a,
    Qb = function(a, b, c, d) {
        c = c || [],
        b = b || oc;
        var e, f, g, h, i = b.nodeType;
        if (!a || "string" != typeof a) return c;
        if (1 !== i && 9 !== i) return [];
        if (g = fc(b), !g && !d && (e = Hc.exec(a))) if (h = e[1]) {
            if (9 === i) {
                if (f = b.getElementById(h), !f || !f.parentNode) return c;
                if (f.id === h) return c.push(f),
                c
            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && gc(b, f) && f.id === h) return c.push(f),
            c
        } else {
            if (e[2]) return tc.apply(c, uc.call(b.getElementsByTagName(a), 0)),
            c;
            if ((h = e[3]) && Rc && b.getElementsByClassName) return tc.apply(c, uc.call(b.getElementsByClassName(h), 0)),
            c
        }
        return _b(a.replace(Dc, "$1"), b, c, d, g)
    },
    Rb = function(a) {
        return function(b) {
            return "input" === b.nodeName.toLowerCase() && b.type === a
        }
    },
    Sb = function(a) {
        return function(b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a
        }
    },
    Tb = function(a) {
        return wc(function(b) {
            return b = +b,
            wc(function(c, d) {
                for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
            })
        })
    },
    Ub = function(a, b, c) {
        if (a === b) return c;
        for (a = a.nextSibling; a;) {
            if (a === b) return - 1;
            a = a.nextSibling
        }
        return 1
    },
    Vb = function(a, b) {
        var c, d, e, f, g, h, i;
        if (g = zc[mc][a]) return b ? 0 : g.slice(0);
        for (g = a, h = [], i = dc.preFilter; g;) { (!c || (d = Ec.exec(g))) && (d && (g = g.slice(d[0].length)), h.push(e = [])),
            c = !1,
            (d = Fc.exec(g)) && (e.push(c = new nc(d.shift())), g = g.slice(c.length), c.type = d[0].replace(Dc, " "));
            for (f in dc.filter)(d = Mc[f].exec(g)) && (!i[f] || (d = i[f](d, oc, !0))) && (e.push(c = new nc(d.shift())), g = g.slice(c.length), c.type = f, c.matches = d);
            if (!c) break
        }
        return b ? g.length: g ? Qb.error(a) : zc(a, h).slice(0)
    },
    Wb = function(a, b, c) {
        var d = b.dir,
        e = c && "parentNode" === b.dir,
        f = rc++;
        return b.first ?
        function(b, c, f) {
            for (; b = b[d];) if (e || 1 === b.nodeType) return a(b, c, f)
        }: function(b, c, g) {
            if (g) {
                for (; b = b[d];) if ((e || 1 === b.nodeType) && a(b, c, g)) return b
            } else for (var h, i = qc + " " + f + " ",
            j = i + bc; b = b[d];) if (e || 1 === b.nodeType) {
                if ((h = b[mc]) === j) return b.sizset;
                if ("string" == typeof h && 0 === h.indexOf(i)) {
                    if (b.sizset) return b
                } else {
                    if (b[mc] = j, a(b, c, g)) return b.sizset = !0,
                    b;
                    b.sizset = !1
                }
            }
        }
    },
    Xb = function(a) {
        return 1 < a.length ?
        function(b, c, d) {
            for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
            return ! 0
        }: a[0]
    },
    Yb = function(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
    },
    Zb = function(a, b, c, d, e, f) {
        return d && !d[mc] && (d = Zb(d)),
        e && !e[mc] && (e = Zb(e, f)),
        wc(function(f, g, h, i) {
            var j, k, l, m, n, o, p, q;
            if (!f || !e) {
                if (l = [], m = [], n = g.length, !(k = f)) {
                    for (k = b || "*", o = h.nodeType ? [h] : h, p = [], j = 0, q = o.length; q > j; j++) Qb(k, o[j], p, f);
                    k = p
                }
                if (o = !a || !f && b ? k: Yb(k, l, a, h, i), p = c ? e || (f ? a: n || d) ? [] : g: o, c && c(o, p, h, i), d) for (k = Yb(p, m), d(k, [], h, i), h = k.length; h--;)(j = k[h]) && (p[m[h]] = !(o[m[h]] = j));
                if (f) for (h = a && p.length; h--;)(j = p[h]) && (f[l[h]] = !(g[l[h]] = j));
                else p = Yb(p === g ? p.splice(n, p.length) : p),
                e ? e(null, g, p, i) : tc.apply(g, p)
            }
        })
    },
    $b = function(a) {
        var b, d, g, h, i, j, e = a.length,
        f = dc.relative[a[0].type],
        c = f || dc.relative[" "];
        for (g = f ? 1 : 0, h = Wb(function(a) {
            return a === b
        },
        c, !0), i = Wb(function(a) {
            return - 1 < vc.call(b, a)
        },
        c, !0), j = [function(a, c, d) {
            return ! f && (d || c !== kc) || ((b = c).nodeType ? h(a, c, d) : i(a, c, d))
        }]; e > g; g++) if (c = dc.relative[a[g].type]) j = [Wb(Xb(j), c)];
        else {
            if (c = dc.filter[a[g].type].apply(null, a[g].matches), c[mc]) {
                for (d = ++g; e > d && !dc.relative[a[d].type]; d++);
                return Zb(g > 1 && Xb(j), g > 1 && a.slice(0, g - 1).join("").replace(Dc, "$1"), c, d > g && $b(a.slice(g, d)), e > d && $b(a = a.slice(d)), e > d && a.join(""))
            }
            j.push(c)
        }
        return Xb(j)
    },
    _b = function(a, b, c, d, e) {
        var f, g, h, i, j = Vb(a);
        if (!d && 1 === j.length) {
            if (g = j[0] = j[0].slice(0), 2 < g.length && "ID" === (h = g[0]).type && 9 === b.nodeType && !e && dc.relative[g[1].type]) {
                if (b = dc.find.ID(h.matches[0].replace(Lc, ""), b, e)[0], !b) return c;
                a = a.slice(g.shift().length)
            }
            for (f = Mc.POS.test(a) ? -1 : g.length - 1; f >= 0 && (h = g[f], !dc.relative[i = h.type]); f--) if ((i = dc.find[i]) && (d = i(h.matches[0].replace(Lc, ""), Ic.test(g[0].type) && b.parentNode || b, e))) {
                if (g.splice(f, 1), a = d.length && g.join(""), !a) return tc.apply(c, uc.call(d, 0)),
                c;
                break
            }
        }
        return hc(a, j)(d, b, e, c, Ic.test(a)),
        c
    },
    ac = function() {},
    lc = !0,
    mc = ("sizcache" + Math.random()).replace(".", ""),
    nc = String,
    oc = Pb.document,
    pc = oc.documentElement,
    qc = 0,
    rc = 0,
    sc = [].pop,
    tc = [].push,
    uc = [].slice,
    vc = [].indexOf ||
    function(a) {
        for (var b = 0,
        c = this.length; c > b; b++) if (this[b] === a) return b;
        return - 1
    },
    wc = function(a, b) {
        return a[mc] = null == b || b,
        a
    },
    xc = function() {
        var a = {},
        b = [];
        return wc(function(c, d) {
            return b.push(c) > dc.cacheLength && delete a[b.shift()],
            a[c] = d
        },
        a)
    },
    yc = xc(),
    zc = xc(),
    Ac = xc(),
    Bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
    Cc = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Bc + ")|[^:]|\\\\.)*|.*))\\)|)",
    Dc = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
    Ec = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    Fc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
    Gc = RegExp(Cc),
    Hc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
    Ic = /[\x20\t\r\n\f]*[+~]/,
    Jc = /h\d/i,
    Kc = /input|select|textarea|button/i,
    Lc = /\\(?!\\)/g,
    Mc = {
        ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
        CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
        NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
        TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
        ATTR: RegExp("^" + Bc),
        PSEUDO: RegExp("^" + Cc),
        POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
        CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
        needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    },
    Nc = function(a) {
        var b = oc.createElement("div");
        try {
            return a(b)
        } catch(c) {
            return ! 1
        } finally {}
    },
    Oc = Nc(function(a) {
        return a.appendChild(oc.createComment("")),
        !a.getElementsByTagName("*").length
    }),
    Pc = Nc(function(a) {
        return a.innerHTML = "<a href='#'></a>",
        a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href")
    }),
    Qc = Nc(function(a) {
        return a.innerHTML = "<select></select>",
        a = typeof a.lastChild.getAttribute("multiple"),
        "boolean" !== a && "string" !== a
    }),
    Rc = Nc(function(a) {
        return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
        a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
    }),
    Sc = Nc(function(a) {
        a.id = mc + 0,
        a.innerHTML = "<a name='" + mc + "'></a><div name='" + mc + "'></div>",
        pc.insertBefore(a, pc.firstChild);
        var b = oc.getElementsByName && oc.getElementsByName(mc).length === 2 + oc.getElementsByName(mc + 0).length;
        return cc = !oc.getElementById(mc),
        pc.removeChild(a),
        b
    });
    try {
        uc.call(pc.childNodes, 0)[0].nodeType
    } catch(Tc) {
        uc = function(a) {
            for (var b, c = []; b = this[a]; a++) c.push(b);
            return c
        }
    }
    Qb.matches = function(a, b) {
        return Qb(a, null, null, b)
    },
    Qb.matchesSelector = function(a, b) {
        return 0 < Qb(b, null, null, [a]).length
    },
    ec = Qb.getText = function(a) {
        var b, c = "",
        d = 0;
        if (b = a.nodeType) {
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += ec(a)
            } else if (3 === b || 4 === b) return a.nodeValue
        } else for (; b = a[d]; d++) c += ec(b);
        return c
    },
    fc = Qb.isXML = function(a) {
        return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName: !1
    },
    gc = Qb.contains = pc.contains ?
    function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement: a,
        d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !c.contains || !c.contains(d))
    }: pc.compareDocumentPosition ?
    function(a, b) {
        return b && !!(16 & a.compareDocumentPosition(b))
    }: function(a, b) {
        for (; b = b.parentNode;) if (b === a) return ! 0;
        return ! 1
    },
    Qb.attr = function(a, b) {
        var c, d = fc(a);
        return d || (b = b.toLowerCase()),
        (c = dc.attrHandle[b]) ? c(a) : d || Qc ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b: null: c.specified ? c.value: null: null)
    },
    dc = Qb.selectors = {
        cacheLength: 50,
        createPseudo: wc,
        match: Mc,
        attrHandle: Pc ? {}: {
            href: function(a) {
                return a.getAttribute("href", 2)
            },
            type: function(a) {
                return a.getAttribute("type")
            }
        },
        find: {
            ID: cc ?
            function(a, b, c) {
                return "undefined" == typeof b.getElementById || c ? void 0 : (a = b.getElementById(a)) && a.parentNode ? [a] : []
            }: function(a, b, c) {
                return "undefined" == typeof b.getElementById || c ? void 0 : (b = b.getElementById(a)) ? b.id === a || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").value === a ? [b] : void 0 : []
            },
            TAG: Oc ?
            function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : void 0
            }: function(a, b) {
                var d, e, f, c = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (e = [], f = 0; d = c[f]; f++) 1 === d.nodeType && e.push(d);
                    return e
                }
                return c
            },
            NAME: Sc &&
            function(a, b) {
                return "undefined" != typeof b.getElementsByName ? b.getElementsByName(name) : void 0
            },
            CLASS: Rc &&
            function(a, b, c) {
                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(a) {
                return a[1] = a[1].replace(Lc, ""),
                a[3] = (a[4] || a[5] || "").replace(Lc, ""),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
            },
            CHILD: function(a) {
                return a[1] = a[1].toLowerCase(),
                "nth" === a[1] ? (a[2] || Qb.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && Qb.error(a[0]),
                a
            },
            PSEUDO: function(a) {
                var b, c;
                return Mc.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[3] : (b = a[4]) && (Gc.test(b) && (c = Vb(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
            }
        },
        filter: {
            ID: cc ?
            function(a) {
                return a = a.replace(Lc, ""),
                function(b) {
                    return b.getAttribute("id") === a
                }
            }: function(a) {
                return a = a.replace(Lc, ""),
                function(b) {
                    return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === a
                }
            },
            TAG: function(a) {
                return "*" === a ?
                function() {
                    return ! 0
                }: (a = a.replace(Lc, "").toLowerCase(),
                function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a
                })
            },
            CLASS: function(a) {
                var b = yc[mc][a];
                return b || (b = yc(a, RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"))),
                function(a) {
                    return b.test(a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                }
            },
            ATTR: function(a, b, c) {
                return function(d) {
                    return d = Qb.attr(d, a),
                    null == d ? "!=" === b: b ? (d += "", "=" === b ? d === c: "!=" === b ? d !== c: "^=" === b ? c && 0 === d.indexOf(c) : "*=" === b ? c && -1 < d.indexOf(c) : "$=" === b ? c && d.substr(d.length - c.length) === c: "~=" === b ? -1 < (" " + d + " ").indexOf(c) : "|=" === b ? d === c || d.substr(0, c.length + 1) === c + "-": !1) : !0
                }
            },
            CHILD: function(a, b, c, d) {
                return "nth" === a ?
                function(a) {
                    var b, e;
                    if (b = a.parentNode, 1 === c && 0 === d) return ! 0;
                    if (b) for (e = 0, b = b.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                    return e -= d,
                    e === c || 0 === e % c && e / c >= 0
                }: function(b) {
                    var c = b;
                    switch (a) {
                    case "only":
                    case "first":
                        for (; c = c.previousSibling;) if (1 === c.nodeType) return ! 1;
                        if ("first" === a) return ! 0;
                        c = b;
                    case "last":
                        for (; c = c.nextSibling;) if (1 === c.nodeType) return ! 1;
                        return ! 0
                    }
                }
            },
            PSEUDO: function(a, b) {
                var c, d = dc.pseudos[a] || dc.setFilters[a.toLowerCase()] || Qb.error("unsupported pseudo: " + a);
                return d[mc] ? d(b) : 1 < d.length ? (c = [a, a, "", b], dc.setFilters.hasOwnProperty(a.toLowerCase()) ? wc(function(a, c) {
                    for (var e, f = d(a, b), g = f.length; g--;) e = vc.call(a, f[g]),
                    a[e] = !(c[e] = f[g])
                }) : function(a) {
                    return d(a, 0, c)
                }) : d
            }
        },
        pseudos: {
            not: wc(function(a) {
                var b = [],
                c = [],
                d = hc(a.replace(Dc, "$1"));
                return d[mc] ? wc(function(a, b, c, e) {
                    e = d(a, null, e, []);
                    for (var f = a.length; f--;)(c = e[f]) && (a[f] = !(b[f] = c))
                }) : function(a, e, f) {
                    return b[0] = a,
                    d(b, null, f, c),
                    !c.pop()
                }
            }),
            has: wc(function(a) {
                return function(b) {
                    return 0 < Qb(a, b).length
                }
            }),
            contains: wc(function(a) {
                return function(b) {
                    return - 1 < (b.textContent || b.innerText || ec(b)).indexOf(a)
                }
            }),
            enabled: function(a) {
                return ! 1 === a.disabled
            },
            disabled: function(a) {
                return ! 0 === a.disabled
            },
            checked: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && !!a.checked || "option" === b && !!a.selected
            },
            selected: function(a) {
                return a.parentNode && a.parentNode.selectedIndex,
                !0 === a.selected
            },
            parent: function(a) {
                return ! dc.pseudos.empty(a)
            },
            empty: function(a) {
                var b;
                for (a = a.firstChild; a;) {
                    if ("@" < a.nodeName || 3 === (b = a.nodeType) || 4 === b) return ! 1;
                    a = a.nextSibling
                }
                return ! 0
            },
            header: function(a) {
                return Jc.test(a.nodeName)
            },
            text: function(a) {
                var b, c;
                return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
            },
            radio: Rb("radio"),
            checkbox: Rb("checkbox"),
            file: Rb("file"),
            password: Rb("password"),
            image: Rb("image"),
            submit: Sb("submit"),
            reset: Sb("reset"),
            button: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            input: function(a) {
                return Kc.test(a.nodeName)
            },
            focus: function(a) {
                var b = a.ownerDocument;
                return ! (a !== b.activeElement || b.hasFocus && !b.hasFocus() || !a.type && !a.href)
            },
            active: function(a) {
                return a === a.ownerDocument.activeElement
            },
            first: Tb(function() {
                return [0]
            }),
            last: Tb(function(a, b) {
                return [b - 1]
            }),
            eq: Tb(function(a, b, c) {
                return [0 > c ? c + b: c]
            }),
            even: Tb(function(a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a
            }),
            odd: Tb(function(a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a
            }),
            lt: Tb(function(a, b, c) {
                for (b = 0 > c ? c + b: c; 0 <= --b;) a.push(b);
                return a
            }),
            gt: Tb(function(a, b, c) {
                for (c = 0 > c ? c + b: c; ++c < b;) a.push(c);
                return a
            })
        }
    },
    ic = pc.compareDocumentPosition ?
    function(a, b) {
        return a === b ? (jc = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
    }: function(a, b) {
        var c, d, e, f, g;
        if (a === b) return jc = !0,
        0;
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        if (e = [], f = [], c = a.parentNode, d = b.parentNode, g = c, c === d) return Ub(a, b);
        if (!c) return - 1;
        if (!d) return 1;
        for (; g;) e.unshift(g),
        g = g.parentNode;
        for (g = d; g;) f.unshift(g),
        g = g.parentNode;
        for (c = e.length, d = f.length, g = 0; c > g && d > g; g++) if (e[g] !== f[g]) return Ub(e[g], f[g]);
        return g === c ? Ub(a, f[g], -1) : Ub(e[g], b, 1)
    },
    [0, 0].sort(ic),
    lc = !jc,
    Qb.uniqueSort = function(a) {
        var b, c = 1;
        if (jc = lc, a.sort(ic), jc) for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
        return a
    },
    Qb.error = function(a) {
        throw Error("Syntax error, unrecognized expression: " + a)
    },
    hc = Qb.compile = function(a, b) {
        var c, g, h, i, d = [],
        e = [],
        f = Ac[mc][a];
        if (!f) {
            for (b || (b = Vb(a)), c = b.length; c--;) f = $b(b[c]),
            f[mc] ? d.push(f) : e.push(f);
            g = 0 < d.length,
            h = 0 < e.length,
            i = function(a, b, c, f, j) {
                var k, l, m = [],
                n = 0,
                o = "0",
                p = a && [],
                q = null != j,
                r = kc,
                s = a || h && dc.find.TAG("*", j && b.parentNode || b),
                t = qc += null == r ? 1 : Math.E;
                for (q && (kc = b !== oc && b, bc = i.el); null != (j = s[o]); o++) {
                    if (h && j) {
                        for (k = 0; l = e[k]; k++) if (l(j, b, c)) {
                            f.push(j);
                            break
                        }
                        q && (qc = t, bc = ++i.el)
                    }
                    g && ((j = !l && j) && n--, a && p.push(j))
                }
                if (n += o, g && o !== n) {
                    for (k = 0; l = d[k]; k++) l(p, m, b, c);
                    if (a) {
                        if (n > 0) for (; o--;) ! p[o] && !m[o] && (m[o] = sc.call(f));
                        m = Yb(m)
                    }
                    tc.apply(f, m),
                    q && !a && 0 < m.length && 1 < n + d.length && Qb.uniqueSort(f)
                }
                return q && (qc = t, kc = r),
                p
            },
            i.el = 0,
            c = g ? wc(i) : i,
            f = Ac(a, c)
        }
        return f
    },
    oc.querySelectorAll && (Vc = _b, Wc = /'|\\/g, Xc = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Yc = [":focus"], Zc = [":active", ":focus"], $c = pc.matchesSelector || pc.mozMatchesSelector || pc.webkitMatchesSelector || pc.oMatchesSelector || pc.msMatchesSelector, Nc(function(a) {
        a.innerHTML = "<select><option selected=''></option></select>",
        a.querySelectorAll("[selected]").length || Yc.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
        a.querySelectorAll(":checked").length || Yc.push(":checked")
    }), Nc(function(a) {
        a.innerHTML = "<p test=''></p>",
        a.querySelectorAll("[test^='']").length && Yc.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')"),
        a.innerHTML = "<input type='hidden'/>",
        a.querySelectorAll(":enabled").length || Yc.push(":enabled", ":disabled")
    }), Yc = RegExp(Yc.join("|")), _b = function(a, b, c, d, e) {
        if (! (d || e || Yc && Yc.test(a))) {
            var f, g, h = !0,
            i = mc;
            if (g = b, f = 9 === b.nodeType && a, 1 === b.nodeType && "object" !== b.nodeName.toLowerCase()) {
                for (f = Vb(a), (h = b.getAttribute("id")) ? i = h.replace(Wc, "\\$&") : b.setAttribute("id", i), i = "[id='" + i + "'] ", g = f.length; g--;) f[g] = i + f[g].join("");
                g = Ic.test(a) && b.parentNode || b,
                f = f.join(",")
            }
            if (f) try {
                return tc.apply(c, uc.call(g.querySelectorAll(f), 0)),
                c
            } catch(j) {} finally {
                h || b.removeAttribute("id")
            }
        }
        return Vc(a, b, c, d, e)
    },
    $c && (Nc(function(a) {
        Uc = $c.call(a, "div");
        try {
            $c.call(a, "[test!='']:sizzle"),
            Zc.push("!=", Cc)
        } catch(b) {}
    }), Zc = RegExp(Zc.join("|")), Qb.matchesSelector = function(a, b) {
        if (b = b.replace(Xc, "='$1']"), !(fc(a) || Zc.test(b) || Yc && Yc.test(b))) try {
            var c = $c.call(a, b);
            if (c || Uc || a.document && 11 !== a.document.nodeType) return c
        } catch(d) {}
        return 0 < Qb(b, null, null, [a]).length
    })),
    dc.pseudos.nth = dc.pseudos.eq,
    dc.filters = ac.prototype = dc.pseudos,
    dc.setFilters = new ac,
    Qb.attr = S.attr,
    S.find = Qb,
    S.expr = Qb.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.unique = Qb.uniqueSort,
    S.text = Qb.getText,
    S.isXMLDoc = Qb.isXML,
    S.contains = Qb.contains,
    _c = /Until$/,
    ad = /^(?:parents|prev(?:Until|All))/,
    bd = /^.[^:#\[\.,]*$/,
    cd = S.expr.match.needsContext,
    dd = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    },
    S.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a) return S(a).filter(function() {
                for (b = 0, c = h.length; c > b; b++) if (S.contains(h[b], this)) return ! 0
            });
            for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++) if (d = g.length, S.find(a, this[b], g), b > 0) for (e = d; e < g.length; e++) for (f = 0; d > f; f++) if (g[f] === g[e]) {
                g.splice(e--, 1);
                break
            }
            return g
        },
        has: function(a) {
            var b, c = S(a, this),
            d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (S.contains(this, c[b])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(i(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(i(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && ("string" == typeof a ? cd.test(a) ? 0 <= S(a, this.context).index(this[0]) : 0 < S.filter(a, this).length: 0 < this.filter(a).length)
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], g = cd.test(a) || "string" != typeof a ? S(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                if (g ? -1 < g.index(c) : S.find.matchesSelector(c, a)) {
                    f.push(c);
                    break
                }
                c = c.parentNode
            }
            return f = 1 < f.length ? S.unique(f) : f,
            this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? S.inArray(this[0], S(a)) : S.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? S(a, b) : S.makeArray(a && a.nodeType ? [a] : a),
            d = S.merge(this.get(), c);
            return this.pushStack(g(c[0]) || g(d[0]) ? d: S.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    }),
    S.fn.andSelf = S.fn.addBack,
    S.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a: null
        },
        parents: function(a) {
            return S.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return S.dir(a, "parentNode", c)
        },
        next: function(a) {
            return h(a, "nextSibling")
        },
        prev: function(a) {
            return h(a, "previousSibling")
        },
        nextAll: function(a) {
            return S.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return S.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return S.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return S.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return S.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return S.sibling(a.firstChild)
        },
        contents: function(a) {
            return S.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: S.merge([], a.childNodes)
        }
    },
    function(a, b) {
        S.fn[a] = function(c, d) {
            var e = S.map(this, b, c);
            return _c.test(a) || (d = c),
            d && "string" == typeof d && (e = S.filter(d, e)),
            e = 1 < this.length && !dd[a] ? S.unique(e) : e,
            1 < this.length && ad.test(a) && (e = e.reverse()),
            this.pushStack(e, a, N.call(arguments).join(","))
        }
    }),
    S.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"),
            1 === b.length ? S.find.matchesSelector(b[0], a) ? [b[0]] : [] : S.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [];
            for (a = a[c]; a && 9 !== a.nodeType && (d === b || 1 !== a.nodeType || !S(a).is(d));) 1 === a.nodeType && e.push(a),
            a = a[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    ed = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fd = / jQuery\d+="(?:null|\d+)"/g,
    gd = /^\s+/,
    hd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    id = /<([\w:]+)/,
    jd = /<tbody/i,
    kd = /<|&#?\w+;/,
    ld = /<(?:script|style|link)/i,
    md = /<(?:script|object|embed|option|style)/i,
    nd = RegExp("<(?:" + ed + ")[\\s/>]", "i"),
    od = /^(?:checkbox|radio)$/,
    pd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qd = /\/(java|ecma)script/i,
    rd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    sd = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    td = j(H),
    ud = td.appendChild(H.createElement("div")),
    sd.optgroup = sd.option,
    sd.tbody = sd.tfoot = sd.colgroup = sd.caption = sd.thead,
    sd.th = sd.td,
    S.support.htmlSerialize || (sd._default = [1, "X<div>", "</div>"]),
    S.fn.extend({
        text: function(a) {
            return S.access(this,
            function(a) {
                return a === b ? S.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a))
            },
            null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (S.isFunction(a)) return this.each(function(b) {
                S(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = S(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return S.isFunction(a) ? this.each(function(b) {
                S(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = S(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = S.isFunction(a);
            return this.each(function(c) {
                S(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) { (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) { (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (!g(this[0])) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = S.clean(arguments);
                return this.pushStack(S.merge(a, this), "before", this.selector)
            }
        },
        after: function() {
            if (!g(this[0])) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = S.clean(arguments);
                return this.pushStack(S.merge(this, a), "after", this.selector)
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || S.filter(a, [c]).length) && (!b && 1 === c.nodeType && (S.cleanData(c.getElementsByTagName("*")), S.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && S.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return S.clone(this, a, b)
            })
        },
        html: function(a) {
            return S.access(this,
            function(a) {
                var c = this[0] || {},
                d = 0,
                e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(fd, "") : b;
                if (! ("string" != typeof a || ld.test(a) || !S.support.htmlSerialize && nd.test(a) || !S.support.leadingWhitespace && gd.test(a) || sd[(id.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(hd, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {},
                        1 === c.nodeType && (S.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch(f) {}
                }
                c && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function(a) {
            return g(this[0]) ? this.length ? this.pushStack(S(S.isFunction(a) ? a() : a), "replaceWith", a) : this: S.isFunction(a) ? this.each(function(b) {
                var c = S(this),
                d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = S(a).detach()), this.each(function() {
                var b = this.nextSibling,
                c = this.parentNode;
                S(this).remove(),
                b ? S(b).before(a) : S(c).append(a)
            }))
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h = 0,
            i = a[0],
            j = [],
            k = this.length;
            if (!S.support.checkClone && k > 1 && "string" == typeof i && pd.test(i)) return this.each(function() {
                S(this).domManip(a, c, d)
            });
            if (S.isFunction(i)) return this.each(function(e) {
                var f = S(this);
                a[0] = i.call(this, e, c ? f.html() : b),
                f.domManip(a, c, d)
            });
            if (this[0]) {
                if (e = S.buildFragment(a, this, j), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f) for (c = c && S.nodeName(f, "tr"), e = e.cacheable || k - 1; k > h; h++) d.call(c && S.nodeName(this[h], "table") ? this[h].getElementsByTagName("tbody")[0] || this[h].appendChild(this[h].ownerDocument.createElement("tbody")) : this[h], h === e ? g: S.clone(g, !0, !0));
                g = f = null,
                j.length && S.each(j,
                function(a, b) {
                    b.src ? S.ajax ? S.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : S.error("no ajax") : S.globalEval((b.text || b.textContent || b.innerHTML || "").replace(rd, "")),
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }),
    S.buildFragment = function(a, c, d) {
        var e, f, g, h = a[0];
        return c = c || H,
        c = !c.nodeType && c[0] || c,
        c = c.ownerDocument || c,
        1 === a.length && "string" == typeof h && 512 > h.length && c === H && "<" === h.charAt(0) && !md.test(h) && (S.support.checkClone || !pd.test(h)) && (S.support.html5Clone || !nd.test(h)) && (f = !0, e = S.fragments[h], g = e !== b),
        e || (e = c.createDocumentFragment(), S.clean(a, c, e, d), f && (S.fragments[h] = g && e)),
        {
            fragment: e,
            cacheable: f
        }
    },
    S.fragments = {},
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        S.fn[a] = function(c) {
            var d, g, e = 0,
            f = [];
            if (c = S(c), g = c.length, d = 1 === this.length && this[0].parentNode, (null == d || d && 11 === d.nodeType && 1 === d.childNodes.length) && 1 === g) return c[b](this[0]),
            this;
            for (; g > e; e++) d = (e > 0 ? this.clone(!0) : this).get(),
            S(c[e])[b](d),
            f = f.concat(d);
            return this.pushStack(f, a, c.selector)
        }
    }),
    S.extend({
        clone: function(a, b, c) {
            var d, e, f, g;
            if (S.support.html5Clone || S.isXMLDoc(a) || !nd.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (ud.innerHTML = a.outerHTML, ud.removeChild(g = ud.firstChild)), !(S.support.noCloneEvent && S.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || S.isXMLDoc(a))) for (l(a, g), d = m(a), e = m(g), f = 0; d[f]; ++f) e[f] && l(d[f], e[f]);
            if (b && (k(a, g), c)) for (d = m(a), e = m(g), f = 0; d[f]; ++f) k(d[f], e[f]);
            return g
        },
        clean: function(a, b, c, d) {
            var e, f, g, h, i, k, l, m = b === H && td,
            o = [];
            for (b && "undefined" != typeof b.createDocumentFragment || (b = H), e = 0; null != (g = a[e]); e++) if ("number" == typeof g && (g += ""), g) {
                if ("string" == typeof g) if (kd.test(g)) {
                    for (m = m || j(b), k = b.createElement("div"), m.appendChild(k), g = g.replace(hd, "<$1></$2>"), f = (id.exec(g) || ["", ""])[1].toLowerCase(), h = sd[f] || sd._default, i = h[0], k.innerHTML = h[1] + g + h[2]; i--;) k = k.lastChild;
                    if (!S.support.tbody) for (i = jd.test(g), h = "table" !== f || i ? "<table>" !== h[1] || i ? [] : k.childNodes: k.firstChild && k.firstChild.childNodes, f = h.length - 1; f >= 0; --f) S.nodeName(h[f], "tbody") && !h[f].childNodes.length && h[f].parentNode.removeChild(h[f]); ! S.support.leadingWhitespace && gd.test(g) && k.insertBefore(b.createTextNode(gd.exec(g)[0]), k.firstChild),
                    g = k.childNodes,
                    k.parentNode.removeChild(k)
                } else g = b.createTextNode(g);
                g.nodeType ? o.push(g) : S.merge(o, g)
            }
            if (k && (g = k = m = null), !S.support.appendChecked) for (e = 0; null != (g = o[e]); e++) S.nodeName(g, "input") ? n(g) : "undefined" != typeof g.getElementsByTagName && S.grep(g.getElementsByTagName("input"), n);
            if (c) for (a = function(a) {
                return ! a.type || qd.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
            },
            e = 0; null != (g = o[e]); e++) S.nodeName(g, "script") && a(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (l = S.grep(S.merge([], g.getElementsByTagName("script")), a), o.splice.apply(o, [e + 1, 0].concat(l)), e += l.length));
            return o
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0,
            h = S.expando,
            i = S.cache,
            j = S.support.deleteExpando,
            k = S.event.special; null != (e = a[g]); g++) if ((b || S.acceptData(e)) && (c = (d = e[h]) && i[d])) {
                if (c.events) for (f in c.events) k[f] ? S.event.remove(e, f) : S.removeEvent(e, f, c.handle);
                i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, S.deletedIds.push(d))
            }
        }
    }),
    S.uaMatch = function(a) {
        return a = a.toLowerCase(),
        a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [],
        {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    },
    vd = S.uaMatch(J.userAgent),
    wd = {},
    vd.browser && (wd[vd.browser] = !0, wd.version = vd.version),
    wd.chrome ? wd.webkit = !0 : wd.webkit && (wd.safari = !0),
    S.browser = wd,
    S.sub = function() {
        function a(b, c) {
            return new a.fn.init(b, c)
        }
        S.extend(!0, a, this),
        a.superclass = this,
        a.fn = a.prototype = this(),
        a.fn.constructor = a,
        a.sub = this.sub,
        a.fn.init = function(c, d) {
            return d && d instanceof S && !(d instanceof a) && (d = a(d)),
            S.fn.init.call(this, c, d, b)
        },
        a.fn.init.prototype = a.fn;
        var b = a(H);
        return a
    },
    Ad = /alpha\([^)]*\)/i,
    Bd = /opacity=([^)]*)/,
    Cd = /^(top|right|bottom|left)$/,
    Dd = /^(none|table(?!-c[ea]).+)/,
    Ed = /^margin/,
    Fd = RegExp("^(" + T + ")(.*)$", "i"),
    Gd = RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Hd = RegExp("^([-+])=(" + T + ")", "i"),
    Id = {},
    Jd = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Kd = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Ld = ["Top", "Right", "Bottom", "Left"],
    Md = ["Webkit", "O", "Moz", "ms"],
    Nd = S.fn.toggle,
    S.fn.extend({
        css: function(a, c) {
            return S.access(this,
            function(a, c, d) {
                return d !== b ? S.style(a, c, d) : S.css(a, c)
            },
            a, c, 1 < arguments.length)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(a, b) {
            var c = "boolean" == typeof a;
            return S.isFunction(a) && S.isFunction(b) ? Nd.apply(this, arguments) : this.each(function() { (c ? a: p(this)) ? S(this).show() : S(this).hide()
            })
        }
    }),
    S.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xd(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": S.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = S.camelCase(c),
                j = a.style;
                if (c = S.cssProps[i] || (S.cssProps[i] = o(j, i)), h = S.cssHooks[c] || S.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f: j[c];
                if (g = typeof d, "string" === g && (f = Hd.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(S.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" === g && !S.cssNumber[i] && (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch(k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = S.camelCase(c);
            return c = S.cssProps[i] || (S.cssProps[i] = o(a.style, i)),
            h = S.cssHooks[c] || S.cssHooks[i],
            h && "get" in h && (f = h.get(a, !0, e)),
            f === b && (f = xd(a, c)),
            "normal" === f && c in Kd && (f = Kd[c]),
            d || e !== b ? (g = parseFloat(f), d || S.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e = {};
            for (d in b) e[d] = a.style[d],
            a.style[d] = b[d];
            c = c.call(a);
            for (d in b) a.style[d] = e[d];
            return c
        }
    }),
    a.getComputedStyle ? xd = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null),
        i = b.style;
        return h && (d = h[c], "" === d && !S.contains(b.ownerDocument, b) && (d = S.style(b, c)), Gd.test(d) && Ed.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)),
        d
    }: H.documentElement.currentStyle && (xd = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
        f = a.style;
        return null == e && f && f[b] && (e = f[b]),
        Gd.test(e) && !Cd.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em": e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)),
        "" === e ? "auto": e
    }),
    S.each(["height", "width"],
    function(a, b) {
        S.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Dd.test(xd(a, "display")) ? S.swap(a, Jd,
                function() {
                    return t(a, b, d)
                }) : t(a, b, d) : void 0
            },
            set: function(a, c, d) {
                return r(a, c, d ? s(a, b, d, S.support.boxSizing && "border-box" === S.css(a, "boxSizing")) : 0)
            }
        }
    }),
    S.support.opacity || (S.cssHooks.opacity = {
        get: function(a, b) {
            return Bd.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = S.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            b >= 1 && "" === S.trim(f.replace(Ad, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Ad.test(f) ? f.replace(Ad, e) : f + " " + e)
        }
    }),
    S(function() {
        S.support.reliableMarginRight || (S.cssHooks.marginRight = {
            get: function(a, b) {
                return S.swap(a, {
                    display: "inline-block"
                },
                function() {
                    return b ? xd(a, "marginRight") : void 0
                })
            }
        }),
        !S.support.pixelPosition && S.fn.position && S.each(["top", "left"],
        function(a, b) {
            S.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = xd(a, b);
                        return Gd.test(d) ? S(a).position()[b] + "px": d
                    }
                }
            }
        })
    }),
    S.expr && S.expr.filters && (S.expr.filters.hidden = function(a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !S.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || xd(a, "display"))
    },
    S.expr.filters.visible = function(a) {
        return ! S.expr.filters.hidden(a)
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        S.cssHooks[a + b] = {
            expand: function(c) {
                var d = "string" == typeof c ? c.split(" ") : [c],
                e = {};
                for (c = 0; 4 > c; c++) e[a + Ld[c] + b] = d[c] || d[c - 2] || d[0];
                return e
            }
        },
        Ed.test(a) || (S.cssHooks[a + b].set = r)
    }),
    Od = /%20/g,
    Pd = /\[\]$/,
    Qd = /\r?\n/g,
    Rd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Sd = /^(?:select|textarea)/i,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? S.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Sd.test(this.nodeName) || Rd.test(this.type))
            }).map(function(a, b) {
                var c = S(this).val();
                return null == c ? null: S.isArray(c) ? S.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Qd, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Qd, "\r\n")
                }
            }).get()
        }
    }),
    S.param = function(a, c) {
        var d, e = [],
        f = function(a, b) {
            b = S.isFunction(b) ? b() : null == b ? "": b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(a) || a.jquery && !S.isPlainObject(a)) S.each(a,
        function() {
            f(this.name, this.value)
        });
        else for (d in a) v(d, a[d], c, f);
        return e.join("&").replace(Od, "+")
    },
    Vd = /#.*$/,
    Wd = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Xd = /^(?:GET|HEAD)$/,
    Yd = /^\/\//,
    Zd = /\?/,
    $d = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    _d = /([?&])_=[^&]*/,
    ae = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    be = S.fn.load,
    ce = {},
    de = {},
    ee = ["*/"] + ["*"];
    try {
        Ud = I.href
    } catch(fe) {
        Ud = H.createElement("a"),
        Ud.href = "",
        Ud = Ud.href
    }
    Td = ae.exec(Ud.toLowerCase()) || [],
    S.fn.load = function(a, c, d) {
        if ("string" != typeof a && be) return be.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
        i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
        S.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"),
        S.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments,
            h.html(e ? S("<div>").append(a.replace($d, "")).find(e) : a)
        }),
        this
    },
    S.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        S.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    S.each(["get", "post"],
    function(a, c) {
        S[c] = function(a, d, e, f) {
            return S.isFunction(d) && (f = f || e, e = d, d = b),
            S.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }),
    S.extend({
        getScript: function(a, c) {
            return S.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return S.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? y(a, S.ajaxSettings) : (b = a, a = S.ajaxSettings),
            y(a, b),
            a
        },
        ajaxSettings: {
            url: Ud,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Td[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": ee
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": S.parseJSON,
                "text xml": S.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: w(ce),
        ajaxTransport: w(de),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, y, z, A, B, C, D, E, F, G, x = c;
                if (2 !== u) {
                    if (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d) {
                        t = m,
                        g = w,
                        C = t.contents,
                        D = t.dataTypes,
                        E = t.responseFields;
                        for (z in E) z in d && (g[E[z]] = d[z]);
                        for (;
                        "*" === D[0];) D.shift(),
                        y === b && (y = t.mimeType || g.getResponseHeader("content-type"));
                        if (y) for (z in C) if (C[z] && C[z].test(y)) {
                            D.unshift(z);
                            break
                        }
                        if (D[0] in d) A = D[0];
                        else {
                            for (z in d) {
                                if (!D[0] || t.converters[z + " " + D[0]]) {
                                    A = z;
                                    break
                                }
                                B || (B = z)
                            }
                            A = A || B
                        }
                        t = d = A ? (A !== D[0] && D.unshift(A), d[A]) : void 0
                    }
                    if (a >= 200 && 300 > a || 304 === a) if (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (S.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && (S.etag[e] = v)), 304 === a) x = "notmodified",
                    j = !0;
                    else {
                        a: {
                            if (j = m, l = t, x = j.dataTypes.slice(), d = x[0], y = {},
                            z = 0, j.dataFilter && (l = j.dataFilter(l, j.dataType)), x[1]) for (F in j.converters) y[F.toLowerCase()] = j.converters[F];
                            for (; s = x[++z];) if ("*" !== s) {
                                if ("*" !== d && d !== s) {
                                    if (F = y[d + " " + s] || y["* " + s], !F) for (G in y) if (v = G.split(" "), v[1] === s && (F = y[d + " " + v[0]] || y["* " + v[0]])) { ! 0 === F ? F = y[G] : !0 !== y[G] && (s = v[0], x.splice(z--, 0, s));
                                        break
                                    }
                                    if (!0 !== F) if (F && j["throws"]) l = F(l);
                                    else try {
                                        l = F(l)
                                    } catch(H) {
                                        F = {
                                            state: "parsererror",
                                            error: F ? H: "No conversion from " + d + " to " + s
                                        };
                                        break a
                                    }
                                }
                                d = s
                            }
                            F = {
                                state: "success",
                                data: l
                            }
                        }
                        j = F,
                        x = j.state,
                        l = j.data,
                        s = j.error,
                        j = !s
                    } else s = x,
                    (!x || a) && (x = "error", 0 > a && (a = 0));
                    w.status = a,
                    w.statusText = (c || x) + "",
                    j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
                    w.statusCode(r),
                    r = b,
                    k && o.trigger("ajax" + (j ? "Success": "Error"), [w, m, j ? l: s]),
                    q.fireWith(n, [w, x]),
                    k && (o.trigger("ajaxComplete", [w, m]), --S.active || S.event.trigger("ajaxStop"))
                }
            }
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, y;
            if ("object" == typeof a && (c = a, a = b), c = c || {},
            m = S.ajaxSetup({},
            c), n = m.context || m, o = n !== m && (n.nodeType || n instanceof S) ? S(n) : S.event, p = S.Deferred(), q = S.Callbacks("once memory"), r = m.statusCode || {},
            s = {},
            t = {},
            u = 0, v = "canceled", w = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!u) {
                        var c = a.toLowerCase();
                        a = t[c] = t[c] || a,
                        s[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? f: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (2 === u) {
                        if (!g) for (g = {}; c = Wd.exec(f);) g[c[1].toLowerCase()] = c[2];
                        c = g[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a),
                    this
                },
                abort: function(a) {
                    return a = a || v,
                    h && h.abort(a),
                    d(0, a),
                    this
                }
            },
            p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                    else b = a[w.status],
                    w.always(b)
                }
                return this
            },
            m.url = ((a || m.url) + "").replace(Vd, "").replace(Yd, Td[1] + "//"), m.dataTypes = S.trim(m.dataType || "*").toLowerCase().split(V), null == m.crossDomain && (j = ae.exec(m.url.toLowerCase()) || !1, m.crossDomain = j && j.join(":") + (j[3] ? "": "http:" === j[1] ? 80 : 443) !== Td.join(":") + (Td[3] ? "": "http:" === Td[1] ? 80 : 443)), m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), x(ce, m, c, w), 2 === u) return w;
            k = m.global,
            m.type = m.type.toUpperCase(),
            m.hasContent = !Xd.test(m.type),
            k && 0 === S.active++&&S.event.trigger("ajaxStart"),
            m.hasContent || (m.data && (m.url += (Zd.test(m.url) ? "&": "?") + m.data, delete m.data), e = m.url, !1 !== m.cache) || (j = S.now(), y = m.url.replace(_d, "$1_=" + j), m.url = y + (y === m.url ? (Zd.test(m.url) ? "&": "?") + "_=" + j: "")),
            (m.data && m.hasContent && !1 !== m.contentType || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            m.ifModified && (e = e || m.url, S.lastModified[e] && w.setRequestHeader("If-Modified-Since", S.lastModified[e]), S.etag[e] && w.setRequestHeader("If-None-Match", S.etag[e])),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ee + "; q=0.01": "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend || !1 !== m.beforeSend.call(n, w, m) && 2 !== u) {
                v = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
                if (h = x(de, m, c, w)) {
                    w.readyState = 1,
                    k && o.trigger("ajaxSend", [w, m]),
                    m.async && 0 < m.timeout && (i = setTimeout(function() {
                        w.abort("timeout")
                    },
                    m.timeout));
                    try {
                        u = 1,
                        h.send(s, d)
                    } catch(z) {
                        if (! (2 > u)) throw z;
                        d( - 1, z)
                    }
                } else d( - 1, "No Transport");
                return w
            }
            return w.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    }),
    ge = [],
    he = /\?/,
    ie = /(=)\?(?=&|$)|\?\?/,
    je = S.now(),
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ge.pop() || S.expando + "_" + je++;
            return this[a] = !0,
            a
        }
    }),
    S.ajaxPrefilter("json jsonp",
    function(c, d, e) {
        var f, g, h, i = c.data,
        j = c.url,
        k = !1 !== c.jsonp,
        l = k && ie.test(j),
        m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && ie.test(i);
        return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = S.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(ie, "$1" + f) : m ? c.data = i.replace(ie, "$1" + f) : k && (c.url += (he.test(j) ? "&": "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || S.error(f + " was not called"),
            h[0]
        },
        c.dataTypes[0] = "json", a[f] = function() {
            h = arguments
        },
        e.always(function() {
            a[f] = g,
            c[f] && (c.jsonpCallback = d.jsonpCallback, ge.push(f)),
            h && S.isFunction(g) && g(h[0]),
            h = g = b
        }), "script") : void 0
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return S.globalEval(a),
                a
            }
        }
    }),
    S.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    S.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var c, d = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function(e, f) {
                    c = H.createElement("script"),
                    c.async = "async",
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, e) { (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    },
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    }),
    le = a.ActiveXObject ?
    function() {
        for (var a in ke) ke[a](0, 1)
    }: !1,
    me = 0,
    S.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        var b;
        if (! (b = !this.isLocal && z())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(c) {}
            b = void 0
        }
        return b
    }: z,
    ne = S.ajaxSettings.xhr(),
    S.extend(S.support, {
        ajax: !!ne,
        cors: !!ne && "withCredentials" in ne
    }),
    S.support.ajax && S.ajaxTransport(function(c) {
        if (!c.crossDomain || S.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch(j) {}
                    i.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = S.noop, le && delete ke[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                h = i.status,
                                k = i.getAllResponseHeaders(),
                                l = {},
                                (m = i.responseXML) && m.documentElement && (l.xml = m);
                                try {
                                    l.text = i.responseText
                                } catch(n) {}
                                try {
                                    j = i.statusText
                                } catch(o) {
                                    j = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch(p) {
                            e || f( - 1, p)
                        }
                        l && f(h, j, l, k)
                    },
                    c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++me, le && (ke || (ke = {},
                    S(a).unload(le)), ke[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    }),
    qe = /^(?:toggle|show|hide)$/,
    re = RegExp("^(?:([-+])=|)(" + T + ")([a-z%]*)$", "i"),
    se = /queueHooks$/,
    te = [function(a, b, c) {
        var d, e, f, g, h, i, j = this,
        k = a.style,
        l = {},
        m = [],
        n = a.nodeType && p(a);
        c.queue || (h = S._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--,
                S.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [k.overflow, k.overflowX, k.overflowY], "inline" === S.css(a, "display") && "none" === S.css(a, "float") && (S.support.inlineBlockNeedsLayout && "inline" !== u(a.nodeName) ? k.zoom = 1 : k.display = "inline-block")),
        c.overflow && (k.overflow = "hidden", S.support.shrinkWrapBlocks || j.done(function() {
            k.overflow = c.overflow[0],
            k.overflowX = c.overflow[1],
            k.overflowY = c.overflow[2]
        }));
        for (d in b) e = b[d],
        qe.exec(e) && (delete b[d], e !== (n ? "hide": "show") && m.push(d));
        if (e = m.length) for (f = S._data(a, "fxshow") || S._data(a, "fxshow", {}), n ? S(a).show() : j.done(function() {
            S(a).hide()
        }), j.done(function() {
            var b;
            S.removeData(a, "fxshow", !0);
            for (b in l) S.style(a, b, l[b])
        }), d = 0; e > d; d++) b = m[d],
        g = j.createTween(b, n ? f[b] : 0),
        l[b] = f[b] || S.style(a, b),
        b in f || (f[b] = g.start, n && (g.end = g.start, g.start = "width" === b || "height" === b ? 1 : 0))
    }],
    ue = {
        "*": [function(a, b) {
            var c, d, e = this.createTween(a, b),
            f = re.exec(b),
            g = e.cur(),
            h = +g || 0,
            i = 1,
            j = 20;
            if (f) {
                if (c = +f[2], d = f[3] || (S.cssNumber[a] ? "": "px"), "px" !== d && h) {
                    h = S.css(e.elem, a, !0) || c || 1;
                    do i = i || ".5",
                    h /= i,
                    S.style(e.elem, a, h + d);
                    while (i !== (i = e.cur() / g) && 1 !== i && --j)
                }
                e.unit = d,
                e.start = h,
                e.end = f[1] ? h + (f[1] + 1) * c: c
            }
            return e
        }]
    },
    S.Animation = S.extend(B, {
        tweener: function(a, b) {
            S.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            ue[c] = ue[c] || [],
            ue[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? te.unshift(a) : te.push(a)
        }
    }),
    S.Tween = C,
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (S.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? S.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
        }
    },
    C.prototype.init.prototype = C.prototype,
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = S.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                S.fx.step[a.prop] ? S.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[S.cssProps[a.prop]] || S.cssHooks[a.prop]) ? S.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    S.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = S.fn[b];
        S.fn[b] = function(d, e, f) {
            return null == d || "boolean" == typeof d || !a && S.isFunction(d) && S.isFunction(e) ? c.apply(this, arguments) : this.animate(D(b, !0), d, e, f)
        }
    }),
    S.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(p).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = S.isEmptyObject(a),
            f = S.speed(b, c, d);
            return b = function() {
                var b = B(this, S.extend({},
                a), f);
                e && b.stop(!0)
            },
            e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b),
            c && !1 !== a && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                c = null != a && a + "queueHooks",
                f = S.timers,
                g = S._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && se.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1)); (b || !d) && S.dequeue(this, a)
            })
        }
    }),
    S.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        S.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    S.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? S.extend({},
        a) : {
            complete: c || !c && b || S.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !S.isFunction(b) && b
        };
        return d.duration = S.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in S.fx.speeds ? S.fx.speeds[d.duration] : S.fx.speeds._default,
        (null == d.queue || !0 === d.queue) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            S.isFunction(d.old) && d.old.call(this),
            d.queue && S.dequeue(this, d.queue)
        },
        d
    },
    S.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    },
    S.timers = [],
    S.fx = C.prototype.init,
    S.fx.tick = function() {
        for (var a, b = S.timers,
        c = 0; c < b.length; c++) a = b[c],
        !a() && b[c] === a && b.splice(c--, 1);
        b.length || S.fx.stop()
    },
    S.fx.timer = function(a) {
        a() && S.timers.push(a) && !pe && (pe = setInterval(S.fx.tick, S.fx.interval))
    },
    S.fx.interval = 13,
    S.fx.stop = function() {
        clearInterval(pe),
        pe = null
    },
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fx.step = {},
    S.expr && S.expr.filters && (S.expr.filters.animated = function(a) {
        return S.grep(S.timers,
        function(b) {
            return a === b.elem
        }).length
    }),
    ve = /^(?:body|html)$/i,
    S.fn.offset = function(a) {
        if (arguments.length) return a === b ? this: this.each(function(b) {
            S.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {
            top: 0,
            left: 0
        },
        k = this[0],
        l = k && k.ownerDocument;
        return l ? (d = l.body) === k ? S.offset.bodyOffset(k) : (c = l.documentElement, S.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = E(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j) : void 0
    },
    S.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            return S.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(S.css(a, "marginTop")) || 0, c += parseFloat(S.css(a, "marginLeft")) || 0),
            {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var k, l, e, f, g, h, i, j, d = S.css(a, "position");
            "static" === d && (a.style.position = "relative"),
            e = S(a),
            f = e.offset(),
            g = S.css(a, "top"),
            h = S.css(a, "left"),
            i = {},
            j = {},
            ("absolute" === d || "fixed" === d) && -1 < S.inArray("auto", [g, h]) ? (j = e.position(), k = j.top, l = j.left) : (k = parseFloat(g) || 0, l = parseFloat(h) || 0),
            S.isFunction(b) && (b = b.call(a, c, f)),
            null != b.top && (i.top = b.top - f.top + k),
            null != b.left && (i.left = b.left - f.left + l),
            "using" in b ? b.using.call(a, i) : e.css(i)
        }
    },
    S.fn.extend({
        position: function() {
            if (this[0]) {
                var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = ve.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: b.offset();
                return c.top -= parseFloat(S.css(a, "marginTop")) || 0,
                c.left -= parseFloat(S.css(a, "marginLeft")) || 0,
                d.top += parseFloat(S.css(b[0], "borderTopWidth")) || 0,
                d.left += parseFloat(S.css(b[0], "borderLeftWidth")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || H.body; a && !ve.test(a.nodeName) && "static" === S.css(a, "position");) a = a.offsetParent;
                return a || H.body
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, c) {
        var d = /Y/.test(c);
        S.fn[a] = function(e) {
            return S.access(this,
            function(a, e, f) {
                var g = E(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? S(g).scrollLeft() : f, d ? f: S(g).scrollTop()) : a[e] = f, void 0)
            },
            a, e, arguments.length, null)
        }
    }),
    S.each({
        Height: "height",
        Width: "width"
    },
    function(a, c) {
        S.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        },
        function(d, e) {
            S.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                h = d || (!0 === e || !0 === f ? "margin": "border");
                return S.access(this,
                function(c, d, e) {
                    var f;
                    return S.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? S.css(c, d, e, h) : S.style(c, d, e, h)
                },
                c, g ? e: b, g, null)
            }
        })
    }),
    a.jQuery = a.$ = S,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return S
    })
} (window), portraitMode = !0, mobilePortraitWidth = 480, mobilePortraitHeight = 640, mobileLandscapeWidth = 640, mobileLandscapeHeight = 480, mobileWidth = portraitMode ? mobilePortraitWidth: mobileLandscapeWidth, mobileHeight = portraitMode ? mobilePortraitHeight: mobileLandscapeHeight, desktopWidth = 640, desktopHeight = 640, dynamicClickableEntityDivs = {},
coreDivsToResize = ["game", "play", "orientate"], advancedDivsToResize = {},
minHeight = 99999999, window.addEventListener("resize",
function() {
    orientationHandler()
},
!1), window.addEventListener("orientationchange",
function() {
    orientationHandler()
},
!1), document.ontouchmove = function() {
    window.scrollTo(0, 1)
},
ie = getInternetExplorerVersion(), this.jukebox = {},
jukebox.Player = function(a, b) {
    var c, d;
    this.id = ++jukebox.__jukeboxId,
    this.origin = b || null,
    this.settings = {};
    for (c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(a)) for (d in a) this.settings[d] = a[d];
    if ("[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager), this.resource = this.isPlaying = null, this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null, null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    return this.__init(),
    this
},
jukebox.__jukeboxId = 0, jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1e3
    },
    __addToManager: function() { ! 0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var d, e, a = this,
        b = this.settings,
        c = {};
        if (jukebox.Manager && void 0 !== jukebox.Manager.features && (c = jukebox.Manager.features), !0 === c.html5audio) {
            this.context = new Audio,
            this.context.src = this.resource,
            null === this.origin && (e = function(b) {
                a.__addToManager(b)
            },
            this.context.addEventListener("canplaythrough", e, !0), window.setTimeout(function() {
                a.context.removeEventListener("canplaythrough", e, !0),
                e("timeout")
            },
            b.timeout)),
            this.context.autobuffer = !0,
            this.context.preload = !0;
            for (d in this.HTML5API) this[d] = this.HTML5API[d];
            1 < c.channels ? !0 === b.autoplay ? this.context.autoplay = !0 : void 0 !== b.spritemap[b.autoplay] && this.play(b.autoplay) : 1 === c.channels && void 0 !== b.spritemap[b.autoplay] && (this.backgroundMusic = b.spritemap[b.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(b.autoplay)),
            1 == c.channels && !0 !== b.canPlayBackground && (window.addEventListener("pagehide",
            function() {
                null !== a.isPlaying && (a.pause(), a.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow",
            function() {
                a.__wasAutoPaused && (a.resume(), delete a._wasAutoPaused)
            }))
        } else {
            if (!0 !== c.flashaudio) throw "Your Browser does not support Flash Audio or HTML5 Audio.";
            for (d in this.FLASHAPI) this[d] = this.FLASHAPI[d];
            c = ["id=jukebox-flashstream-" + this.id, "autoplay=" + b.autoplay, "file=" + window.encodeURIComponent(this.resource)],
            this.__initFlashContext(c),
            !0 === b.autoplay ? this.play(0) : b.spritemap[b.autoplay] && this.play(b.autoplay)
        }
    },
    __initFlashContext: function(a) {
        var b, d, f, c = this.settings.flashMediaElement,
        e = {
            flashvars: a.join("&"),
            quality: "high",
            bgcolor: "#000000",
            wmode: "transparent",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        };
        if (navigator.userAgent.match(/MSIE/)) {
            b = document.createElement("div"),
            document.getElementsByTagName("body")[0].appendChild(b),
            f = document.createElement("object"),
            f.id = "jukebox-flashstream-" + this.id,
            f.setAttribute("type", "application/x-shockwave-flash"),
            f.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"),
            f.setAttribute("width", "0"),
            f.setAttribute("height", "0"),
            e.movie = c + "?x=" + (Date.now ? Date.now() : +new Date),
            e.flashvars = a.join("&amp;");
            for (d in e) a = document.createElement("param"),
            a.setAttribute("name", d),
            a.setAttribute("value", e[d]),
            f.appendChild(a);
            b.outerHTML = f.outerHTML,
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            b = document.createElement("embed"),
            b.id = "jukebox-flashstream-" + this.id,
            b.setAttribute("type", "application/x-shockwave-flash"),
            b.setAttribute("width", "100"),
            b.setAttribute("height", "100"),
            e.play = !1,
            e.loop = !1,
            e.src = c + "?x=" + (Date.now ? Date.now() : +new Date);
            for (d in e) b.setAttribute(d, e[d]);
            document.getElementsByTagName("body")[0].appendChild(b),
            this.context = b
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var a = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = a, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (a - this.backgroundMusic.started) / 1e3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(a, b) {
        var d, c, e;
        if (null !== this.isPlaying && !0 !== b) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(a, this.id);
        else {
            if (c = this.settings.spritemap, void 0 !== c[a]) d = c[a].start;
            else if ("number" == typeof a) {
                d = a;
                for (e in c) if (d >= c[e].start && d <= c[e].end) {
                    a = e;
                    break
                }
            }
            void 0 !== d && "[object Object]" === Object.prototype.toString.call(c[a]) && (this.isPlaying = this.settings.spritemap[a], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(d))
        }
    },
    stop: function() {
        return this.__lastPosition = 0,
        this.isPlaying = null,
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause(),
        !0
    },
    pause: function() {
        return this.isPlaying = null,
        this.__lastPosition = this.getCurrentTime(),
        this.context.pause(),
        this.__lastPosition
    },
    resume: function(a) {
        return a = "number" == typeof a ? a: this.__lastPosition,
        null !== a ? (this.play(a), this.__lastPosition = null, !0) : (this.context.play(), !1)
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(a) {
            return this.context.volume = a,
            1e-4 > Math.abs(this.context.volume - a) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(a) {
            try {
                return this.context.currentTime = a,
                !0
            } catch(b) {
                return ! 1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" == typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(a) {
            return this.context && "function" == typeof this.context.setVolume ? (this.context.setVolume(a), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" == typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(a) {
            return this.context && "function" == typeof this.context.setCurrentTime ? this.context.setCurrentTime(a) : !1
        }
    }
},
void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(a) {
    var b, c;
    this.features = {},
    this.codecs = {},
    this.__players = {},
    this.__playersLength = 0,
    this.__clones = {},
    this.__queue = [],
    this.settings = {};
    for (b in this.defaults) this.settings[b] = this.defaults[b];
    if ("[object Object]" === Object.prototype.toString.call(a)) for (c in a) this.settings[c] = a[c];
    this.__detectFeatures(),
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    },
    20) : !0
},
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var c, d, b, e, f, g, h, a = window.Audio && new Audio;
        if (a && a.canPlayType && !1 === this.settings.useFlash) {
            for (b = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            },
            {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            },
            {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            },
            {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            },
            {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            },
            {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            },
            {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            },
            {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            },
            {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            },
            {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            },
            {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], e = 0, f = b.length; f > e; e++) if (d = b[e].e, b[e].m.length && "object" == typeof b[e].m) for (g = 0, h = b[e].m.length; h > g; g++) {
                if (c = b[e].m[g], "" !== a.canPlayType(c)) {
                    this.codecs[d] = c;
                    break
                }
                this.codecs[d] || (this.codecs[d] = !1)
            }
            this.features.html5audio = !!(this.codecs.mp3 || this.codecs.ogg || this.codecs.webm || this.codecs.wav),
            this.features.channels = 8,
            a.volume = .1337,
            this.features.volume = !!(1e-4 > Math.abs(a.volume - .1337)),
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        if (this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1, window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
            this.features.flashaudio = !0
        } catch(i) {} ! 0 === this.settings.useFlash && (this.features.flashaudio = !0),
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(a) {
        return this.__players && void 0 !== this.__players[a] ? this.__players[a] : null
    },
    __getClone: function(a, b) {
        var c, d, e;
        for (c in this.__clones) if (d = this.__clones[c], null === d.isPlaying && d.origin === a) return d;
        if ("[object Object]" === Object.prototype.toString.call(b)) {
            c = {};
            for (e in b) c[e] = b[e];
            return c.autoplay = !1,
            e = new jukebox.Player(c, a),
            e.isClone = !0,
            e.wasReady = !1,
            this.__clones[e.id] = e
        }
        return null
    },
    loop: function() {
        var a, b, c;
        if (0 !== this.__playersLength) if (this.__queue.length && this.__playersLength < this.features.channels) a = this.__queue[0],
        b = this.__getPlayerById(a.origin),
        null !== b && (c = this.__getClone(a.origin, b.settings), null !== c && (!0 === this.features.volume && (b = this.__players[a.origin]) && c.setVolume(b.getVolume()), this.add(c), c.play(a.pointer, !0))),
        this.__queue.splice(0, 1);
        else for (c in this.__queue.length && 1 === this.features.channels && (a = this.__queue[0], b = this.__getPlayerById(a.origin), null !== b && b.play(a.pointer, !0), this.__queue.splice(0, 1)), this.__players) a = this.__players[c],
        b = a.getCurrentTime() || 0,
        a.isPlaying && !1 === a.wasReady ? a.wasReady = a.setCurrentTime(a.isPlaying.start) : a.isPlaying && !0 === a.wasReady ? b > a.isPlaying.end && (!0 === a.isPlaying.loop ? a.play(a.isPlaying.start, !0) : a.stop()) : a.isClone && null === a.isPlaying ? this.remove(a) : void 0 !== a.backgroundMusic && null === a.isPlaying && b > a.backgroundMusic.end && a.backgroundHackForiOS()
    },
    getPlayableResource: function(a) {
        var b, c, d, e;
        for ("[object Array]" !== Object.prototype.toString.call(a) && (a = [a]), b = 0, c = a.length; c > b; b++) if (d = a[b], e = d.match(/\.([^\.]*)$/)[1], e && this.codecs[e]) return d;
        return null
    },
    add: function(a) {
        return a instanceof jukebox.Player && void 0 === this.__players[a.id] ? (this.__playersLength++, this.__players[a.id] = a, !0) : !1
    },
    remove: function(a) {
        return a instanceof jukebox.Player && void 0 !== this.__players[a.id] ? (this.__playersLength--, delete this.__players[a.id], !0) : !1
    },
    addToQueue: function(a, b) {
        return "string" != typeof a && "number" != typeof a || void 0 === this.__players[b] ? !1 : (this.__queue.push({
            pointer: a,
            origin: b
        }), !0)
    }
},
function() {
    var f, g, h, i, j, k, a = {},
    b = null,
    c = !0,
    d = !1;
    if ("undefined" != typeof AudioContext) b = new AudioContext;
    else if ("undefined" != typeof webkitAudioContext) b = new webkitAudioContext;
    else if ("undefined" != typeof Audio) {
        c = !1;
        try {
            new Audio
        } catch(e) {
            d = !0
        }
    } else c = !1,
    d = !0;
    c && (f = "undefined" == typeof b.createGain ? b.createGainNode() : b.createGain(), f.gain.value = 1, f.connect(b.destination)),
    g = function() {
        this._volume = 1,
        this._muted = !1,
        this.usingWebAudio = c,
        this.noAudio = d,
        this._howls = []
    },
    g.prototype = {
        volume: function(a) {
            if (a = parseFloat(a), a >= 0 && 1 >= a) {
                this._volume = a,
                c && (f.gain.value = a);
                for (var b in this._howls) if (this._howls.hasOwnProperty(b) && !1 === this._howls[b]._webAudio) for (a = 0; a < this._howls[b]._audioNode.length; a++) this._howls[b]._audioNode[a].volume = this._howls[b]._volume * this._volume;
                return this
            }
            return c ? f.gain.value: this._volume
        },
        mute: function() {
            return this._setMuted(!0),
            this
        },
        unmute: function() {
            return this._setMuted(!1),
            this
        },
        _setMuted: function(a) {
            var b, d;
            this._muted = a,
            c && (f.gain.value = a ? 0 : this._volume);
            for (b in this._howls) if (this._howls.hasOwnProperty(b) && !1 === this._howls[b]._webAudio) for (d = 0; d < this._howls[b]._audioNode.length; d++) this._howls[b]._audioNode[d].muted = a
        }
    },
    h = new g,
    g = null,
    d || (g = new Audio, i = {
        mp3: !!g.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!g.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!g.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!g.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        m4a: !!(g.canPlayType("audio/x-m4a;") || g.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(g.canPlayType("audio/x-mp4;") || g.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!g.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    }),
    j = function(a) {
        this._autoplay = a.autoplay || !1,
        this._buffer = a.buffer || !1,
        this._duration = a.duration || 0,
        this._format = a.format || null,
        this._loop = a.loop || !1,
        this._loaded = !1,
        this._sprite = a.sprite || {},
        this._src = a.src || "",
        this._pos3d = a.pos3d || [0, 0, -.5],
        this._volume = void 0 !== a.volume ? a.volume: 1,
        this._urls = a.urls || [],
        this._rate = a.rate || 1,
        this._onload = [a.onload ||
        function() {}],
        this._onloaderror = [a.onloaderror ||
        function() {}],
        this._onend = [a.onend ||
        function() {}],
        this._onpause = [a.onpause ||
        function() {}],
        this._onplay = [a.onplay ||
        function() {}],
        this._onendTimer = [],
        this._webAudio = c && !this._buffer,
        this._audioNode = [],
        this._webAudio && this._setupAudioNode(),
        h._howls.push(this),
        this.load()
    },
    j.prototype = {
        load: function() {
            var f, g, j, l, m, o, p, c = this,
            e = null;
            if (!d) {
                for (f = 0; f < c._urls.length; f++) {
                    if (c._format) g = c._format;
                    else {
                        if (j = c._urls[f].toLowerCase().split("?")[0], !(g = (g = j.match(/.+\.([^?]+)(\?|$)/)) && 2 <= g.length ? g: j.match(/data\:audio\/([^?]+);/))) return c.on("loaderror"),
                        void 0;
                        g = g[1]
                    }
                    if (i[g]) {
                        e = c._urls[f];
                        break
                    }
                }
                if (e) {
                    if (c._src = e, c._webAudio) if (l = e, l in a) c._duration = a[l].duration,
                    k(c);
                    else {
                        m = new XMLHttpRequest,
                        m.open("GET", l, !0),
                        m.responseType = "arraybuffer",
                        m.onload = function() {
                            b.decodeAudioData(m.response,
                            function(b) {
                                b && (a[l] = b, k(c, b))
                            },
                            function() {
                                c.on("loaderror")
                            })
                        },
                        m.onerror = function() {
                            c._webAudio && (c._buffer = !0, c._webAudio = !1, c._audioNode = [], delete c._gainNode, c.load())
                        };
                        try {
                            m.send()
                        } catch(n) {
                            m.onerror()
                        }
                    } else o = new Audio,
                    c._audioNode.push(o),
                    o.src = e,
                    o._pos = 0,
                    o.preload = "auto",
                    o.volume = h._muted ? 0 : c._volume * h.volume(),
                    a[e] = c,
                    p = function() {
                        c._duration = Math.ceil(10 * o.duration) / 10,
                        0 === Object.getOwnPropertyNames(c._sprite).length && (c._sprite = {
                            _default: [0, 1e3 * c._duration]
                        }),
                        c._loaded || (c._loaded = !0, c.on("load")),
                        c._autoplay && c.play(),
                        o.removeEventListener("canplaythrough", p, !1)
                    },
                    o.addEventListener("canplaythrough", p, !1),
                    o.load();
                    return c
                }
            }
            c.on("loaderror")
        },
        urls: function(a) {
            return a ? (this.stop(), this._urls = "string" == typeof a ? [a] : a, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(c, d) {
            var e = this;
            return "function" == typeof c && (d = c),
            c && "function" != typeof c || (c = "_default"),
            e._loaded ? e._sprite[c] ? (e._inactiveNode(function(f) {
                var l, g, i, j, k, m, n, o, p, q;
                if (f._sprite = c, g = 0 < f._pos ? f._pos: e._sprite[c][0] / 1e3, i = e._sprite[c][1] / 1e3 - f._pos, j = !(!e._loop && !e._sprite[c][2]), k = "string" == typeof d ? d: Math.round(Date.now() * Math.random()) + "", m = {
                    id: k,
                    sprite: c,
                    loop: j
                },
                l = setTimeout(function() { ! e._webAudio && j && e.stop(m.id, m.timer).play(c, m.id),
                    e._webAudio && !j && (e._nodeById(m.id).paused = !0, e._nodeById(m.id)._pos = 0),
                    !e._webAudio && !j && e.stop(m.id, m.timer),
                    e.on("end", k)
                },
                1e3 * i), e._onendTimer.push(l), m.timer = e._onendTimer[e._onendTimer.length - 1], e._webAudio) l = e._sprite[c][0] / 1e3,
                n = e._sprite[c][1] / 1e3,
                f.id = k,
                f.paused = !1,
                l = [j, l, n],
                n = e._nodeById(k),
                n.bufferSource = b.createBufferSource(),
                n.bufferSource.buffer = a[e._src],
                n.bufferSource.connect(n.panner),
                n.bufferSource.loop = l[0],
                l[0] && (n.bufferSource.loopStart = l[1], n.bufferSource.loopEnd = l[1] + l[2]),
                n.bufferSource.playbackRate.value = e._rate,
                e._playStart = b.currentTime,
                f.gain.value = e._volume,
                "undefined" == typeof f.bufferSource.start ? f.bufferSource.noteGrainOn(0, g, i) : f.bufferSource.start(0, g, i);
                else {
                    if (4 !== f.readyState) return e._clearEndTimer(l),
                    o = c,
                    p = d,
                    q = function() {
                        e.play(o, p),
                        f.removeEventListener("canplaythrough", q, !1)
                    },
                    f.addEventListener("canplaythrough", q, !1),
                    e;
                    f.id = k,
                    f.currentTime = g,
                    f.muted = h._muted,
                    f.volume = e._volume * h.volume(),
                    setTimeout(function() {
                        f.play()
                    },
                    0)
                }
                return e.on("play"),
                "function" == typeof d && d(k),
                e
            }), e) : ("function" == typeof d && d(), e) : (e.on("load",
            function() {
                e.play(c, d)
            }), e)
        },
        pause: function(a, b) {
            var d, c = this;
            if (!c._loaded) return c.on("play",
            function() {
                c.pause(a)
            }),
            c;
            if (c._clearEndTimer(b || 0), d = a ? c._nodeById(a) : c._activeNode()) if (d._pos = c.pos(null, a), c._webAudio) {
                if (!d.bufferSource || d.paused) return c;
                d.paused = !0,
                "undefined" == typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
            } else d.pause();
            return c.on("pause"),
            c
        },
        stop: function(a, b) {
            var d, c = this;
            if (!c._loaded) return c.on("play",
            function() {
                c.stop(a)
            }),
            c;
            if (c._clearEndTimer(b || 0), d = a ? c._nodeById(a) : c._activeNode()) if (d._pos = 0, c._webAudio) {
                if (!d.bufferSource || d.paused) return c;
                d.paused = !0,
                "undefined" == typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
            } else d.pause(),
            d.currentTime = 0;
            return c
        },
        mute: function(a) {
            var c, b = this;
            return b._loaded ? (c = a ? b._nodeById(a) : b._activeNode(), c && (b._webAudio ? c.gain.value = 0 : c.volume = 0), b) : (b.on("play",
            function() {
                b.mute(a)
            }), b)
        },
        unmute: function(a) {
            var c, b = this;
            return b._loaded ? (c = a ? b._nodeById(a) : b._activeNode(), c && (b._webAudio ? c.gain.value = b._volume: c.volume = b._volume), b) : (b.on("play",
            function() {
                b.unmute(a)
            }), b)
        },
        volume: function(a, b) {
            var d, c = this;
            return a = parseFloat(a),
            a >= 0 && 1 >= a ? (c._volume = a, c._loaded ? (d = b ? c._nodeById(b) : c._activeNode(), d && (c._webAudio ? d.gain.value = a: d.volume = a * h.volume()), c) : (c.on("play",
            function() {
                c.volume(a, b)
            }), c)) : c._volume
        },
        loop: function(a) {
            return "boolean" == typeof a ? (this._loop = a, this) : this._loop
        },
        sprite: function(a) {
            return "object" == typeof a ? (this._sprite = a, this) : this._sprite
        },
        pos: function(a, c) {
            var e, d = this;
            if (!d._loaded) return d.on("load",
            function() {
                d.pos(a)
            }),
            "number" == typeof a ? d: d._pos || 0;
            if (a = parseFloat(a), e = c ? d._nodeById(c) : d._activeNode()) return a >= 0 ? (d.pause(c), e._pos = a, d.play(e._sprite, c), d) : d._webAudio ? e._pos + (b.currentTime - d._playStart) : e.currentTime;
            if (a >= 0) return d;
            for (e = 0; e < d._audioNode.length; e++) if (d._audioNode[e].paused && 4 === d._audioNode[e].readyState) return d._webAudio ? d._audioNode[e]._pos: d._audioNode[e].currentTime
        },
        pos3d: function(a, b, c, d) {
            var f, e = this;
            return b = "undefined" != typeof b && b ? b: 0,
            c = "undefined" != typeof c && c ? c: -.5,
            e._loaded ? a >= 0 || 0 > a ? (e._webAudio && (f = d ? e._nodeById(d) : e._activeNode(), f && (e._pos3d = [a, b, c], f.panner.setPosition(a, b, c))), e) : e._pos3d: (e.on("play",
            function() {
                e.pos3d(a, b, c, d)
            }), e)
        },
        fade: function(a, b, c, d, e) {
            var i, j, f = this,
            g = Math.abs(a - b),
            h = a > b ? "down": "up";
            if (g /= .01, i = c / g, !f._loaded) return f.on("load",
            function() {
                f.fade(a, b, c, d, e)
            }),
            f;
            for (f.volume(a, e), j = 1; g >= j; j++) !
            function() {
                var a = Math.round(1e3 * (f._volume + ("up" === h ? .01 : -.01) * j)) / 1e3;
                setTimeout(function() {
                    f.volume(a, e),
                    a === b && d && d()
                },
                i * j)
            } ()
        },
        fadeIn: function(a, b, c) {
            return this.volume(0).play().fade(0, a, b, c)
        },
        fadeOut: function(a, b, c, d) {
            var e = this;
            return e.fade(e._volume, a, b,
            function() {
                c && c(),
                e.pause(d),
                e.on("end")
            },
            d)
        },
        _nodeById: function(a) {
            for (var b = this._audioNode[0], c = 0; c < this._audioNode.length; c++) if (this._audioNode[c].id === a) {
                b = this._audioNode[c];
                break
            }
            return b
        },
        _activeNode: function() {
            for (var a = null,
            b = 0; b < this._audioNode.length; b++) if (!this._audioNode[b].paused) {
                a = this._audioNode[b];
                break
            }
            return this._drainPool(),
            a
        },
        _inactiveNode: function(a) {
            var b, c, d;
            for (b = null, c = 0; c < this._audioNode.length; c++) if (this._audioNode[c].paused && 4 === this._audioNode[c].readyState) {
                a(this._audioNode[c]),
                b = !0;
                break
            }
            this._drainPool(),
            b || (this._webAudio ? (d = this._setupAudioNode(), a(d)) : (this.load(), d = this._audioNode[this._audioNode.length - 1], d.addEventListener("loadedmetadata",
            function() {
                a(d)
            })))
        },
        _drainPool: function() {
            var b, a = 0;
            for (b = 0; b < this._audioNode.length; b++) this._audioNode[b].paused && a++;
            for (b = this._audioNode.length - 1; b >= 0 && !(5 >= a); b--) this._audioNode[b].paused && (this._webAudio && this._audioNode[b].disconnect(0), a--, this._audioNode.splice(b, 1))
        },
        _clearEndTimer: function(a) {
            a = this._onendTimer.indexOf(a),
            a = a >= 0 ? a: 0,
            this._onendTimer[a] && (clearTimeout(this._onendTimer[a]), this._onendTimer.splice(a, 1))
        },
        _setupAudioNode: function() {
            var a = this._audioNode,
            c = this._audioNode.length;
            return a[c] = "undefined" == typeof b.createGain ? b.createGainNode() : b.createGain(),
            a[c].gain.value = this._volume,
            a[c].paused = !0,
            a[c]._pos = 0,
            a[c].readyState = 4,
            a[c].connect(f),
            a[c].panner = b.createPanner(),
            a[c].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]),
            a[c].panner.connect(a[c]),
            a[c]
        },
        on: function(a, b) {
            var d, c = this["_on" + a];
            if ("function" == typeof b) c.push(b);
            else for (d = 0; d < c.length; d++) b ? c[d].call(this, b) : c[d].call(this);
            return this
        },
        off: function(a, b) {
            for (var c = this["_on" + a], d = b.toString(), e = 0; e < c.length; e++) if (d === c[e].toString()) {
                c.splice(e, 1);
                break
            }
            return this
        },
        unload: function() {
            for (var b = this._audioNode,
            c = 0; c < this._audioNode.length; c++) b[c].paused || this.stop(b[c].id),
            this._webAudio ? b[c].disconnect(0) : b[c].src = "";
            b = h._howls.indexOf(this),
            null !== b && b >= 0 && h._howls.splice(b, 1),
            delete a[this._src]
        }
    },
    c && (k = function(a, b) {
        a._duration = b ? b.duration: a._duration,
        0 === Object.getOwnPropertyNames(a._sprite).length && (a._sprite = {
            _default: [0, 1e3 * a._duration]
        }),
        a._loaded || (a._loaded = !0, a.on("load")),
        a._autoplay && a.play()
    }),
    "function" == typeof define && define.amd && define(function() {
        return {
            Howler: h,
            Howl: j
        }
    }),
    "undefined" != typeof exports && (exports.Howler = h, exports.Howl = j),
    window.Howler = h,
    window.Howl = j
} (),
function(a) {
    var b, c, d, e, f, g, h;
    Number.prototype.map = function(a, b, c, d) {
        return c + (d - c) * ((this - a) / (b - a))
    },
    Number.prototype.limit = function(a, b) {
        return Math.min(b, Math.max(a, this))
    },
    Number.prototype.round = function(a) {
        return a = Math.pow(10, a || 0),
        Math.round(this * a) / a
    },
    Number.prototype.floor = function() {
        return Math.floor(this)
    },
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    },
    Number.prototype.toInt = function() {
        return 0 | this
    },
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    },
    Number.prototype.toDeg = function() {
        return 180 * this / Math.PI
    },
    Array.prototype.erase = function(a) {
        for (var b = this.length; b--;) this[b] === a && this.splice(b, 1);
        return this
    },
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    },
    Function.prototype.bind = Function.prototype.bind ||
    function(a) {
        var b = this;
        return function() {
            var c = Array.prototype.slice.call(arguments);
            return b.apply(a || null, c)
        }
    },
    a.ig = {
        game: null,
        debug: null,
        version: "1.20",
        global: a,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: a.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(a) {
            return "#" == a.charAt(0) ? document.getElementById(a.substr(1)) : document.getElementsByTagName(a)
        },
        $new: function(a) {
            return document.createElement(a)
        },
        copy: function(a) {
            if (!a || "object" != typeof a || a instanceof HTMLElement || a instanceof ig.Class) return a;
            if (a instanceof Array) for (var b = [], c = 0, d = a.length; d > c; c++) b[c] = ig.copy(a[c]);
            else for (c in b = {},
            a) b[c] = ig.copy(a[c]);
            return b
        },
        merge: function(a, b) {
            var c, d;
            for (c in b) d = b[c],
            "object" != typeof d || d instanceof HTMLElement || d instanceof ig.Class ? a[c] = d: (a[c] && "object" == typeof a[c] || (a[c] = d instanceof Array ? [] : {}), ig.merge(a[c], d));
            return a
        },
        ksort: function(a) {
            if (!a || "object" != typeof a) return [];
            var d, b = [],
            c = [];
            for (d in a) b.push(d);
            for (b.sort(), d = 0; d < b.length; d++) c.push(a[b[d]]);
            return c
        },
        setVendorAttribute: function(a, b, c) {
            var d = b.charAt(0).toUpperCase() + b.substr(1);
            a[b] = a["ms" + d] = a["moz" + d] = a["webkit" + d] = a["o" + d] = c
        },
        getVendorAttribute: function(a, b) {
            var c = b.charAt(0).toUpperCase() + b.substr(1);
            return a[b] || a["ms" + c] || a["moz" + c] || a["webkit" + c] || a["o" + c]
        },
        normalizeVendorAttribute: function(a, b) {
            var c = ig.getVendorAttribute(a, b); ! a[b] && c && (a[b] = c)
        },
        getImagePixels: function(a, b, c, d, e) {
            var g, h, i, j, f = ig.$new("canvas");
            return f.width = a.width,
            f.height = a.height,
            g = f.getContext("2d"),
            ig.System.SCALE.CRISP(f, g),
            h = ig.getVendorAttribute(g, "backingStorePixelRatio") || 1,
            ig.normalizeVendorAttribute(g, "getImageDataHD"),
            i = a.width / h,
            j = a.height / h,
            f.width = Math.ceil(i),
            f.height = Math.ceil(j),
            g.drawImage(a, 0, 0, i, j),
            1 === h ? g.getImageData(b, c, d, e) : g.getImageDataHD(b, c, d, e)
        },
        module: function(a) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[a] && ig.modules[a].body) throw "Module '" + a + "' is already defined";
            return ig._current = {
                name: a,
                requires: [],
                loaded: !1,
                body: null
            },
            ig.modules[a] = ig._current,
            ig._loadQueue.push(ig._current),
            ig
        },
        requires: function() {
            return ig._current.requires = Array.prototype.slice.call(arguments),
            ig
        },
        defines: function(a) {
            ig._current.body = a,
            ig._current = null,
            ig._initDOMReady()
        },
        addResource: function(a) {
            ig.resources.push(a)
        },
        setNocache: function(a) {
            ig.nocache = a ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(a, b) {
            ig.modules[a] = {
                name: a,
                requires: [],
                loaded: !1,
                body: null
            },
            ig._waitForOnload++;
            var c = ig.prefix + ig.lib + a.replace(/\./g, "/") + ".js" + ig.nocache,
            d = ig.$new("script");
            d.type = "text/javascript",
            d.src = c,
            d.onload = function() {
                ig._waitForOnload--,
                ig._execModules()
            },
            d.onerror = function() {
                throw "Failed to load module " + a + " at " + c + " required from " + b
            },
            ig.$("head")[0].appendChild(d)
        },
        _execModules: function() {
            var a, b, c, d, e, f;
            for (a = !1, b = 0; b < ig._loadQueue.length; b++) {
                for (c = ig._loadQueue[b], d = !0, e = 0; e < c.requires.length; e++) f = c.requires[e],
                ig.modules[f] ? ig.modules[f].loaded || (d = !1) : (d = !1, ig._loadScript(f, c.name));
                d && c.body && (ig._loadQueue.splice(b, 1), c.loaded = !0, c.body(), a = !0, b--)
            }
            if (a) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                for (a = [], b = 0; b < ig._loadQueue.length; b++) {
                    for (d = [], f = ig._loadQueue[b].requires, e = 0; e < f.length; e++) c = ig.modules[f[e]],
                    (!c || !c.loaded) && d.push(f[e]);
                    a.push(ig._loadQueue[b].name + " (requires: " + d.join(", ") + ")")
                }
                throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + a.join("\n")
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0,
                ig._waitForOnload--,
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0),
            ig.ua.pixelRatio = a.devicePixelRatio || 1,
            ig.ua.viewport = {
                width: a.innerWidth,
                height: a.innerHeight
            },
            ig.ua.screen = {
                width: a.screen.availWidth * ig.ua.pixelRatio,
                height: a.screen.availHeight * ig.ua.pixelRatio
            },
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent),
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio,
            ig.ua.iPad = /iPad/i.test(navigator.userAgent),
            ig.ua.android = /android/i.test(navigator.userAgent),
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent),
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad,
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent),
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag,
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]),
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent),
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent),
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent),
            ig.ua.touchDevice = "ontouchstart" in a || a.navigator.msMaxTouchPoints,
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            },
            ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), a.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    for (b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !a.requestAnimationFrame; c++) a.requestAnimationFrame = a[b[c] + "RequestAnimationFrame"];
    a.requestAnimationFrame ? (d = 1, e = {},
    a.ig.setAnimation = function(b, c) {
        var g, f = d++;
        return e[f] = !0,
        g = function() {
            e[f] && (a.requestAnimationFrame(g, c), b())
        },
        a.requestAnimationFrame(g, c),
        f
    },
    a.ig.clearAnimation = function(a) {
        delete e[a]
    }) : (a.ig.setAnimation = function(b) {
        return a.setInterval(b, 1e3 / 60)
    },
    a.ig.clearAnimation = function(b) {
        a.clearInterval(b)
    }),
    f = !1,
    g = /xyz/.test(function() {}) ? /\bparent\b/: /.*/,
    a.ig.Class = function() {},
    h = function(a) {
        var d, b = this.prototype,
        c = {};
        for (d in a)"function" == typeof a[d] && "function" == typeof b[d] && g.test(a[d]) ? (c[d] = b[d], b[d] = function(a, b) {
            return function() {
                var e, d = this.parent;
                return this.parent = c[a],
                e = b.apply(this, arguments),
                this.parent = d,
                e
            }
        } (d, a[d])) : b[d] = a[d]
    },
    a.ig.Class.extend = function(b) {
        function c() {
            var a, b;
            if (!f) {
                if (this.staticInstantiate && (a = this.staticInstantiate.apply(this, arguments))) return a;
                for (b in this)"object" == typeof this[b] && (this[b] = ig.copy(this[b]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var e, i, d = this.prototype;
        f = !0,
        e = new this,
        f = !1;
        for (i in b) e[i] = "function" == typeof b[i] && "function" == typeof d[i] && g.test(b[i]) ?
        function(a, b) {
            return function() {
                var e, c = this.parent;
                return this.parent = d[a],
                e = b.apply(this, arguments),
                this.parent = c,
                e
            }
        } (i, b[i]) : b[i];
        return c.prototype = e,
        c.constructor = c,
        c.extend = a.ig.Class.extend,
        c.inject = h,
        c
    }
} (window),
ig.baked = !0,
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(a) {
            return ig.Image.cache[a] || null
        },
        init: function(a) {
            this.path = a,
            this.load()
        },
        load: function(a) {
            this.loaded ? a && a(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = a || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1,
            this.data = new Image,
            this.data.onload = this.onload.bind(this),
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width,
            this.height = this.data.height,
            this.loaded = !0,
            1 != ig.system.scale && this.resize(ig.system.scale),
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0,
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(a) {
            var e, f, g, h, i, j, k, b = this.width * a,
            c = this.height * a,
            d = ig.$new("canvas");
            for (d.width = this.width, d.height = this.height, d = d.getContext("2d"), d.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height), d = d.getImageData(0, 0, this.width, this.height), e = ig.$new("canvas"), e.width = b, e.height = c, f = e.getContext("2d"), g = f.getImageData(0, 0, b, c), h = 0; c > h; h++) for (i = 0; b > i; i++) j = 4 * (Math.floor(h / a) * this.width + Math.floor(i / a)),
            k = 4 * (h * b + i),
            g.data[k] = d.data[j],
            g.data[k + 1] = d.data[j + 1],
            g.data[k + 2] = d.data[j + 2],
            g.data[k + 3] = d.data[j + 3];
            f.putImageData(g, 0, 0),
            this.data = e
        },
        draw: function(a, b, c, d, e, f) {
            if (this.loaded) {
                var g = ig.system.scale;
                e = (e ? e: this.width) * g,
                f = (f ? f: this.height) * g,
                ig.system.context.drawImage(this.data, c ? c * g: 0, d ? d * g: 0, e, f, ig.system.getDrawPos(a), ig.system.getDrawPos(b), e, f),
                ig.Image.drawCount++
            }
        },
        drawTile: function(a, b, c, d, e, f, g) {
            if (e = e ? e: d, this.loaded && !(d > this.width || e > this.height)) {
                var h = ig.system.scale,
                i = Math.floor(d * h),
                j = Math.floor(e * h),
                k = f ? -1 : 1,
                l = g ? -1 : 1; (f || g) && (ig.system.context.save(), ig.system.context.scale(k, l)),
                ig.system.context.drawImage(this.data, Math.floor(c * d) % this.width * h, Math.floor(c * d / this.width) * e * h, i, j, ig.system.getDrawPos(a) * k - (f ? i: 0), ig.system.getDrawPos(b) * l - (g ? j: 0), i, j),
                (f || g) && ig.system.context.restore(),
                ig.Image.drawCount++
            }
        }
    }),
    ig.Image.drawCount = 0,
    ig.Image.cache = {},
    ig.Image.reloadCache = function() {
        for (var a in ig.Image.cache) ig.Image.cache[a].reload()
    }
}),
ig.baked = !0,
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(a) {
            this._loadMetrics(this.data),
            this.parent(a)
        },
        widthForString: function(a) {
            if ( - 1 !== a.indexOf("\n")) {
                a = a.split("\n");
                for (var b = 0,
                c = 0; c < a.length; c++) b = Math.max(b, this._widthForLine(a[c]));
                return b
            }
            return this._widthForLine(a)
        },
        _widthForLine: function(a) {
            for (var b = 0,
            c = 0; c < a.length; c++) b += this.widthMap[a.charCodeAt(c) - this.firstChar] + this.letterSpacing;
            return b
        },
        heightForString: function(a) {
            return a.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(a, b, c, d) {
            if ("string" != typeof a && (a = a.toString()), -1 !== a.indexOf("\n")) {
                a = a.split("\n");
                for (var e = this.height + this.lineSpacing,
                f = 0; f < a.length; f++) this.draw(a[f], b, c + f * e, d)
            } else {
                for ((d == ig.Font.ALIGN.RIGHT || d == ig.Font.ALIGN.CENTER) && (f = this._widthForLine(a), b -= d == ig.Font.ALIGN.CENTER ? f / 2 : f), 1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha), f = 0; f < a.length; f++) d = a.charCodeAt(f),
                b += this._drawChar(d - this.firstChar, b, c);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1),
                ig.Image.drawCount += a.length
            }
        },
        _drawChar: function(a, b, c) {
            if (!this.loaded || 0 > a || a >= this.indices.length) return 0;
            var d = ig.system.scale,
            e = this.widthMap[a] * d,
            f = (this.height - 2) * d;
            return ig.system.context.drawImage(this.data, this.indices[a] * d, 0, e, f, ig.system.getDrawPos(b), ig.system.getDrawPos(c), e, f),
            this.widthMap[a] + this.letterSpacing
        },
        _loadMetrics: function(a) {
            var b, c, d, e, f;
            for (this.height = a.height - 1, this.widthMap = [], this.indices = [], b = ig.getImagePixels(a, 0, a.height - 1, a.width, 1), c = 0, d = 0, e = 0; e < a.width; e++) f = 4 * e + 3,
            0 != b.data[f] ? d++:0 == b.data[f] && d && (this.widthMap.push(d), this.indices.push(e - d), c++, d = 0);
            this.widthMap.push(d),
            this.indices.push(e - d)
        }
    }),
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
}),
ig.baked = !0,
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            var a, b, c;
            for (a = new Audio, b = 0; b < ig.Sound.use.length; b++) if (c = ig.Sound.use[b], a.canPlayType(c.mime)) {
                this.format = c;
                break
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function(a, b, c) {
            var e, f, d = ig.prefix + a.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[a]) {
                if (b && this.clips[a].length < ig.Sound.channels) for (b = this.clips[a].length; b < ig.Sound.channels; b++) e = new Audio(d),
                e.load(),
                this.clips[a].push(e);
                return this.clips[a][0]
            }
            if (f = new Audio(d), c && (f.addEventListener("canplaythrough",
            function g(b) {
                f.removeEventListener("canplaythrough", g, !1),
                c(a, !0, b)
            },
            !1), f.addEventListener("error",
            function(b) {
                c(a, !0, b)
            },
            !1)), f.preload = "auto", f.load(), this.clips[a] = [f], b) for (b = 1; b < ig.Sound.channels; b++) e = new Audio(d),
            e.load(),
            this.clips[a].push(e);
            return f
        },
        get: function(a) {
            a = this.clips[a];
            for (var c, b = 0; c = a[b++];) if (c.paused || c.ended) return c.ended && (c.currentTime = 0),
            c;
            return a[0].pause(),
            a[0].currentTime = 0,
            a[0]
        }
    }),
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this),
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(a, b) {
            if (ig.Sound.enabled) {
                var c = ig.soundManager.load(a instanceof ig.Sound ? a.path: a, !1);
                c.loop = this._loop,
                c.volume = this._volume,
                c.addEventListener("ended", this._endedCallbackBound, !1),
                this.tracks.push(c),
                b && (this.namedTracks[b] = c),
                this.currentTrack || (this.currentTrack = c)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch(a) {
                    console.log(a)
                }
            }
        },
        play: function(a) {
            if (a && this.namedTracks[a]) a = this.namedTracks[a],
            a != this.currentTrack && (this.stop(), this.currentTrack = a);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(a) {
            this._loop = a;
            for (var b in this.tracks) this.tracks[b].loop = a
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(a) {
            this._volume = a.limit(0, 1);
            for (var b in this.tracks) this.tracks[b].volume = this._volume
        },
        fadeOut: function(a) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(a), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var a = this.fadeTimer.delta().map( - this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;.01 >= a ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = a
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    }),
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(a, b) {
            this.path = a,
            this.multiChannel = !1 !== b,
            this.load()
        },
        load: function(a) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, a) : ig.addResource(this) : a && a(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    }),
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    },
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG],
    ig.Sound.channels = 4,
    ig.Sound.enabled = !0
}),
ig.baked = !0,
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(a, b) {
            this.gameClass = a,
            this.resources = b,
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var c = 0; c < this.resources.length; c++) this._unloaded.push(this.resources[c].path)
        },
        load: function() {
            if (ig.system.clear("#000"), this.resources.length) {
                for (var a = 0; a < this.resources.length; a++) this.loadResource(this.resources[a]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(a) {
            a.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(a, b) {
            if (!b) throw "Failed to load resource: " + a;
            this._unloaded.erase(a),
            this.status = 1 - this._unloaded.length / this.resources.length,
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
}),
ig.baked = !0,
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(a) {
            this.last = this.base = ig.Timer.time,
            this.target = a || 0
        },
        set: function(a) {
            this.target = a || 0,
            this.base = ig.Timer.time,
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time,
            this.pausedAt = 0
        },
        tick: function() {
            var a = ig.Timer.time - this.last;
            return this.last = ig.Timer.time,
            this.pausedAt ? 0 : a
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    }),
    ig.Timer._last = 0,
    ig.Timer.time = 0,
    ig.Timer.timeScale = 1,
    ig.Timer.maxStep = .05,
    ig.Timer.step = function() {
        var a = Date.now();
        ig.Timer.time += Math.min((a - ig.Timer._last) / 1e3, ig.Timer.maxStep) * ig.Timer.timeScale,
        ig.Timer._last = a
    }
}),
ig.baked = !0,
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(a, b, c, d, e) {
            this.fps = b,
            this.clock = new ig.Timer,
            this.canvas = ig.$(a),
            this.resize(c, d, e),
            this.context = this.canvas.getContext("2d"),
            this.getDrawPos = ig.System.drawMode
        },
        resize: function(a, b, c) {
            this.width = a,
            this.height = b,
            this.scale = c || this.scale,
            this.realWidth = this.width * this.scale,
            this.realHeight = this.height * this.scale,
            this.canvas.width = this.realWidth,
            this.canvas.height = this.realHeight
        },
        setGame: function(a) {
            this.running ? this.newGameClass = a: this.setGameNow(a)
        },
        setGameNow: function(a) {
            ig.game = new a,
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(a) {
            if ("function" != typeof a.run) throw "System.setDelegate: No run() function in object";
            this.delegate = a,
            this.startRunLoop()
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId),
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop(),
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas),
            this.running = !0
        },
        clear: function(a) {
            this.context.fillStyle = a,
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step(),
            this.tick = this.clock.tick(),
            this.delegate.run(),
            ig.input.clearPressed(),
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    }),
    ig.System.DRAW = {
        AUTHENTIC: function(a) {
            return Math.round(a) * this.scale
        },
        SMOOTH: function(a) {
            return Math.round(a * this.scale)
        },
        SUBPIXEL: function(a) {
            return a * this.scale
        }
    },
    ig.System.drawMode = ig.System.DRAW.SMOOTH,
    ig.System.SCALE = {
        CRISP: function(a, b) {
            ig.setVendorAttribute(b, "imageSmoothingEnabled", !1),
            a.style.imageRendering = "-moz-crisp-edges",
            a.style.imageRendering = "-o-crisp-edges",
            a.style.imageRendering = "-webkit-optimize-contrast",
            a.style.imageRendering = "crisp-edges",
            a.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(a, b) {
            ig.setVendorAttribute(b, "imageSmoothingEnabled", !0),
            a.style.imageRendering = "",
            a.style.msInterpolationMode = ""
        }
    },
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
}),
ig.baked = !0,
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    },
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var a = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", a, !1),
                ig.system.canvas.addEventListener("DOMMouseScroll", a, !1),
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1),
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1),
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1),
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1),
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(a) {
            var b = this.bindings[0 < (a.wheelDelta ? a.wheelDelta: -1 * a.detail) ? ig.KEY.MWHEEL_UP: ig.KEY.MWHEEL_DOWN];
            b && (this.actions[b] = !0, this.presses[b] = !0, this.delayedKeyup[b] = !0, a.stopPropagation(), a.preventDefault())
        },
        mousemove: function(a) {
            var b, c, d, e;
            for (b = ig.system.canvas, c = 0, d = 0; null != b;) c += b.offsetLeft,
            d += b.offsetTop,
            b = b.offsetParent;
            b = a.pageX,
            e = a.pageY,
            a.touches && (b = a.touches[0].clientX, e = a.touches[0].clientY),
            this.mouse.x = (b - c) / ig.system.scale,
            this.mouse.y = (e - d) / ig.system.scale
        },
        contextmenu: function(a) {
            this.bindings[ig.KEY.MOUSE2] && (a.stopPropagation(), a.preventDefault())
        },
        keydown: function(a) {
            a.stopPropagation(),
            a.preventDefault();
            var b = a.target.tagName;
            "INPUT" != b && "TEXTAREA" != b && (b = "keydown" == a.type ? a.keyCode: 2 == a.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1, 0 > b && !ig.ua.mobile && window.focus(), ("touchstart" == a.type || "mousedown" == a.type) && this.mousemove(a), (a = this.bindings[b]) && (this.actions[a] = !0, this.locks[a] || (this.presses[a] = !0, this.locks[a] = !0)))
        },
        keyup: function(a) {
            if ("text" != a.target.type) {
                var b = this.bindings["keyup" == a.type ? a.keyCode: 2 == a.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1];
                b && (this.delayedKeyup[b] = !0, a.stopPropagation(), a.preventDefault())
            }
        },
        devicemotion: function(a) {
            this.accel = a.accelerationIncludingGravity
        },
        bind: function(a, b) {
            0 > a ? this.initMouse() : a > 0 && this.initKeyboard(),
            this.bindings[a] = b
        },
        bindTouch: function(a, b) {
            var c = ig.$(a),
            d = this;
            c.addEventListener("touchstart",
            function(a) {
                d.touchStart(a, b)
            },
            !1),
            c.addEventListener("touchend",
            function(a) {
                d.touchEnd(a, b)
            },
            !1)
        },
        unbind: function(a) {
            this.delayedKeyup[this.bindings[a]] = !0,
            this.bindings[a] = null
        },
        unbindAll: function() {
            this.bindings = {},
            this.actions = {},
            this.presses = {},
            this.locks = {},
            this.delayedKeyup = {}
        },
        state: function(a) {
            return this.actions[a]
        },
        pressed: function(a) {
            return this.presses[a]
        },
        released: function(a) {
            return this.delayedKeyup[a]
        },
        clearPressed: function() {
            for (var a in this.delayedKeyup) this.actions[a] = !1,
            this.locks[a] = !1;
            this.delayedKeyup = {},
            this.presses = {}
        },
        touchStart: function(a, b) {
            return this.actions[b] = !0,
            this.presses[b] = !0,
            a.stopPropagation(),
            a.preventDefault(),
            !1
        },
        touchEnd: function(a, b) {
            return this.delayedKeyup[b] = !0,
            a.stopPropagation(),
            a.preventDefault(),
            !1
        }
    })
}),
ig.baked = !0,
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        },
        {
            name: "openingSound",
            path: "media/audio/opening/opening"
        },
        {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        },
        {
            name: "button",
            path: "media/audio/sfx/button"
        },
        {
            name: "hit",
            path: "media/audio/sfx/hit2"
        },
        {
            name: "step",
            path: "media/audio/sfx/step"
        },
        {
            name: "skate",
            path: "media/audio/sfx/skate"
        },
        {
            name: "jump",
            path: "media/audio/sfx/jump2"
        },
        {
            name: "slide",
            path: "media/audio/sfx/woosh"
        },
        {
            name: "crunch",
            path: "media/audio/sfx/crunch"
        },
        {
            name: "coin",
            path: "media/audio/sfx/ding"
        },
        {
            name: "chirp",
            path: "media/audio/sfx/chirp"
        }],
        debug: !1,
        init: function() {
            this.initSfx(),
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                for (this.debug && console.log("Vo ready"), index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end",
                function(a) {
                    a.isPlaying = !1,
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])),
                this.voSoundLoaded[index].on("play",
                function(a) {
                    a.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return ! 0
            }
            return ! 1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            this.jukebox || this.setupJukebox(),
            this.jukebox && (this.pausePosition = this.jukebox.player.pause(), this.bgmPlaying = !1)
        },
        playBackgroundMusic: function() {
            this.jukebox || this.setupJukebox(),
            this.jukebox && (null != this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : (this.jukebox.player.resume(0), this.jukebox.player.play()), this.bgmPlaying = !0)
        },
        playSound: function(a) { ! (a = this[a]) || this.forceMuted && this.muted || a.isPlaying || (this.soundBuffer.push(a), a.play())
        },
        stopAllAndPlaySound: function(a) {
            this.stopAllSounds(),
            this.playSound(a)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1,
            this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(a, b, c) {
            var d = b + this.formats.ogg;
            b += this.formats.mp3,
            this.SOUNDID[a] = a,
            this[a] = c ? new Howl({
                urls: [d, b],
                onload: c
            }) : new Howl({
                urls: [d, b]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute(),
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute(),
            ig.Sound.enabled = !0,
            this.debug && console.log("Sounds can play")
        },
        focusBlurMute: function() {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function() {
            this.forceMuted || this.unmute()
        },
        setForceMuted: function(a) {
            this.forceMuted = a
        },
        mute: function() {
            this._muteSounds(),
            this.jukebox && (this.jukebox.player.pause(), this.jukebox.player.setVolume(.01)),
            this.muted = !0
        },
        unmute: function() {
            if (this._unMuteSounds(), this.jukebox && this.bgmPlaying) {
                this.jukebox.player.resume();
                var a = this.musicVolume;
                0 == a && (a = .01),
                this.jukebox.player.setVolume(a)
            }
            this.muted = !1
        },
        setupWindowHandler: function() {},
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var a = function(a) {
                    this.sfxSoundLoaded.push(this[a])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, a)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var a = function(a) {
                    this.voSoundLoaded.push(this[a])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, a)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/music/bgm.*", "background")
        },
        setupJukebox: function() {
            this.jukebox = new ig.Jukebox,
            this.jukebox.player.setVolume(.01),
            this.stopBackgroundMusic()
        },
        forceLoopBGM: function() {
            if (this.bgmPlaying && !this.forceMuted && this.jukebox && this.jukebox.player) if (this.jukebox.player.getCurrentTime()) {
                var a = .06;
                ig.ua.mobile && (a = .06, ig.ua.android && (a = .07)),
                this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end - a && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start)) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end - a && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.isPlaying.start)) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() >= this.jukebox.player.backgroundMusic.end - a && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start))
            } else this.jukebox.player.resume()
        },
        setSfxVolume: function(a) {
            this.sfxVolume = a,
            Howler.volume(this.sfxVolume)
        },
        setMusicVolume: function(a) {
            this.musicVolume = a,
            this.jukebox && (a = this.musicVolume, 0 == a ? (this.jukebox.player.setVolume(a), this.bgmPlaying && this.jukebox.player.pause(), this.bgmPlaying = !1) : (this.jukebox.player.setVolume(a), this.bgmPlaying || this.jukebox.player.resume(0), this.bgmPlaying = !0))
        }
    })
}),
ig.baked = !0,
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(a, b, c, d, e, f, g) {
        ig.system = new ig.System(a, c, d, e, f || 1),
        ig.input = new ig.Input,
        ig.soundManager = new ig.SoundManager,
        ig.music = new ig.Music,
        ig.ready = !0,
        ig.soundHandler = new ig.SoundHandler,
        new(g || ig.Loader)(b, ig.resources).load()
    }
}),
ig.baked = !0,
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(a, b, c) {
            this.width = b,
            this.height = c,
            this.image = new ig.Image(a)
        }
    }),
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(a, b, c, d) {
            this.sheet = a,
            this.pivot = {
                x: a.width / 2,
                y: a.height / 2
            },
            this.timer = new ig.Timer,
            this.frameTime = b,
            this.sequence = c,
            this.stop = !!d,
            this.tile = this.sequence[0]
        },
        rewind: function() {
            return this.timer.reset(),
            this.loopCount = 0,
            this.tile = this.sequence[0],
            this
        },
        gotoFrame: function(a) {
            this.timer.set(this.frameTime * -a),
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var a = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(a / this.sequence.length),
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : a % this.sequence.length,
            this.tile = this.sequence[this.frame]
        },
        draw: function(a, b) {
            var c = Math.max(this.sheet.width, this.sheet.height);
            a > ig.system.width || b > ig.system.height || 0 > a + c || 0 > b + c || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(a, b, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(a + this.pivot.x), ig.system.getDrawPos(b + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile( - this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
}),
ig.baked = !0,
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        posMP: {
            x: 0,
            y: 0
        },
        posML: {
            x: 0,
            y: 0
        },
        enableReposition: !1,
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: 44..toRad(),
            max: 136..toRad()
        },
        init: function(a, b, c) {
            this.id = ++ig.Entity._lastId,
            this.pos.x = a,
            this.pos.y = b,
            ig.merge(this, c)
        },
        addAnim: function(a, b, c, d) {
            if (!this.animSheet) throw "No animSheet to add the animation " + a + " to.";
            return b = new ig.Animation(this.animSheet, b, c, d),
            this.anims[a] = b,
            this.currentAnim || (this.currentAnim = b),
            b
        },
        update: function() {
            this.last.x = this.pos.x,
            this.last.y = this.pos.y,
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor,
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x),
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var a = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(a),
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(a, b, c, d) {
            return b ? (a + b * ig.system.tick).limit( - d, d) : c ? (b = c * ig.system.tick, a - b > 0 ? a - b: 0 > a + b ? a + b: 0) : a.limit( - d, d)
        },
        handleMovementTrace: function(a) {
            var b, c;
            this.standing = !1,
            a.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness: (0 < this.vel.y && (this.standing = !0), this.vel.y = 0)),
            a.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness: 0),
            a.collision.slope && (b = a.collision.slope, 0 < this.bounciness ? (c = this.vel.x * b.nx + this.vel.y * b.ny, this.vel.x = (this.vel.x - 2 * b.nx * c) * this.bounciness, this.vel.y = (this.vel.y - 2 * b.ny * c) * this.bounciness) : (c = (this.vel.x * b.x + this.vel.y * b.y) / (b.x * b.x + b.y * b.y), this.vel.x = b.x * c, this.vel.y = b.y * c, b = Math.atan2(b.x, b.y), b > this.slopeStanding.min && b < this.slopeStanding.max && (this.standing = !0))),
            this.pos = a.pos
        },
        reposition: function() {
            ig.ua.mobile && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x, this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x, this.pos.y = this.posML.y))
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(a) {
            this.health -= a,
            0 >= this.health && this.kill()
        },
        touches: function(a) {
            return ! (this.pos.x >= a.pos.x + a.size.x || this.pos.x + this.size.x <= a.pos.x || this.pos.y >= a.pos.y + a.size.y || this.pos.y + this.size.y <= a.pos.y)
        },
        distanceTo: function(a) {
            var b = this.pos.x + this.size.x / 2 - (a.pos.x + a.size.x / 2);
            return a = this.pos.y + this.size.y / 2 - (a.pos.y + a.size.y / 2),
            Math.sqrt(b * b + a * a)
        },
        angleTo: function(a) {
            return Math.atan2(a.pos.y + a.size.y / 2 - (this.pos.y + this.size.y / 2), a.pos.x + a.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {}
    }),
    ig.Entity._lastId = 0,
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    },
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    },
    ig.Entity.checkPair = function(a, b) {
        a.checkAgainst & b.type && a.check(b),
        b.checkAgainst & a.type && b.check(a),
        a.collides && b.collides && a.collides + b.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(a, b)
    },
    ig.Entity.solveCollision = function(a, b) {
        var c = null;
        a.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED ? c = a: (b.collides == ig.Entity.COLLIDES.LITE || a.collides == ig.Entity.COLLIDES.FIXED) && (c = b),
        a.last.x + a.size.x > b.last.x && a.last.x < b.last.x + b.size.x ? (a.last.y < b.last.y ? ig.Entity.seperateOnYAxis(a, b, c) : ig.Entity.seperateOnYAxis(b, a, c), a.collideWith(b, "y"), b.collideWith(a, "y")) : a.last.y + a.size.y > b.last.y && a.last.y < b.last.y + b.size.y && (a.last.x < b.last.x ? ig.Entity.seperateOnXAxis(a, b, c) : ig.Entity.seperateOnXAxis(b, a, c), a.collideWith(b, "x"), b.collideWith(a, "x"))
    },
    ig.Entity.seperateOnXAxis = function(a, b, c) {
        var d = a.pos.x + a.size.x - b.pos.x;
        c ? (c.vel.x = -c.vel.x * c.bounciness + (a === c ? b: a).vel.x, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, c == a ? -d: d, 0, c.size.x, c.size.y), c.pos.x = b.pos.x) : (c = (a.vel.x - b.vel.x) / 2, a.vel.x = -c, b.vel.x = c, c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, -d / 2, 0, a.size.x, a.size.y), a.pos.x = Math.floor(c.pos.x), a = ig.game.collisionMap.trace(b.pos.x, b.pos.y, d / 2, 0, b.size.x, b.size.y), b.pos.x = Math.ceil(a.pos.x))
    },
    ig.Entity.seperateOnYAxis = function(a, b, c) {
        var e, d = a.pos.y + a.size.y - b.pos.y;
        c ? (b = a === c ? b: a, c.vel.y = -c.vel.y * c.bounciness + b.vel.y, e = 0, c == a && Math.abs(c.vel.y - b.vel.y) < c.minBounceVelocity && (c.standing = !0, e = b.vel.x * ig.system.tick), a = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e, c == a ? -d: d, c.size.x, c.size.y), c.pos.y = a.pos.y, c.pos.x = a.pos.x) : ig.game.gravity && (b.standing || 0 < a.vel.y) ? (c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, 0, -(a.pos.y + a.size.y - b.pos.y), a.size.x, a.size.y), a.pos.y = c.pos.y, 0 < a.bounciness && a.vel.y > a.minBounceVelocity ? a.vel.y *= -a.bounciness: (a.standing = !0, a.vel.y = 0)) : (c = (a.vel.y - b.vel.y) / 2, a.vel.y = -c, b.vel.y = c, e = b.vel.x * ig.system.tick, c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, e, -d / 2, a.size.x, a.size.y), a.pos.y = c.pos.y, a = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, d / 2, b.size.x, b.size.y), b.pos.y = a.pos.y)
    }
}),
ig.baked = !0,
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [[]],
        name: null,
        init: function(a, b) {
            this.tilesize = a,
            this.data = b,
            this.height = b.length,
            this.width = b[0].length
        },
        getTile: function(a, b) {
            var c = Math.floor(a / this.tilesize),
            d = Math.floor(b / this.tilesize);
            return c >= 0 && c < this.width && d >= 0 && d < this.height ? this.data[d][c] : 0
        },
        setTile: function(a, b, c) {
            a = Math.floor(a / this.tilesize),
            b = Math.floor(b / this.tilesize),
            a >= 0 && a < this.width && b >= 0 && b < this.height && (this.data[b][a] = c)
        }
    })
}),
ig.baked = !0,
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(a, b, c) {
            this.parent(a, b),
            this.tiledef = c || ig.CollisionMap.defaultTileDef;
            for (var d in this.tiledef) d | 0 > this.lastSlope && (this.lastSlope = 0 | d)
        },
        trace: function(a, b, c, d, e, f) {
            var i, j, k, g = {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: a,
                    y: b
                },
                tile: {
                    x: 0,
                    y: 0
                }
            },
            h = Math.ceil(Math.max(Math.abs(c), Math.abs(d)) / this.tilesize);
            if (h > 1) for (i = c / h, j = d / h, k = 0; h > k && (i || j) && (this._traceStep(g, a, b, i, j, e, f, c, d, k), a = g.pos.x, b = g.pos.y, g.collision.x && (c = i = 0), g.collision.y && (d = j = 0), !g.collision.slope); k++);
            else this._traceStep(g, a, b, c, d, e, f, c, d, 0);
            return g
        },
        _traceStep: function(a, b, c, d, e, f, g, h, i, j) {
            var k, l, m, n, o, p;
            if (a.pos.x += d, a.pos.y += e, k = 0, d && (l = d > 0 ? f: 0, m = 0 > d ? this.tilesize: 0, k = Math.max(Math.floor(c / this.tilesize), 0), n = Math.min(Math.ceil((c + g) / this.tilesize), this.height), d = Math.floor((a.pos.x + l) / this.tilesize), o = Math.floor((b + l) / this.tilesize), (j > 0 || d == o || 0 > o || o >= this.width) && (o = -1), d >= 0 && d < this.width)) for (p = k; n > p && !( - 1 != o && (k = this.data[p][o], k > 1 && k <= this.lastSlope && this._checkTileDef(a, k, b, c, h, i, f, g, o, p))); p++) if (k = this.data[p][d], 1 == k || k > this.lastSlope || k > 1 && this._checkTileDef(a, k, b, c, h, i, f, g, d, p)) {
                if (k > 1 && k <= this.lastSlope && a.collision.slope) break;
                a.collision.x = !0,
                a.tile.x = k,
                b = a.pos.x = d * this.tilesize - l + m,
                h = 0;
                break
            }
            if (e && (l = e > 0 ? g: 0, e = 0 > e ? this.tilesize: 0, k = Math.max(Math.floor(a.pos.x / this.tilesize), 0), m = Math.min(Math.ceil((a.pos.x + f) / this.tilesize), this.width), p = Math.floor((a.pos.y + l) / this.tilesize), n = Math.floor((c + l) / this.tilesize), (j > 0 || p == n || 0 > n || n >= this.height) && (n = -1), p >= 0 && p < this.height)) for (d = k; m > d && !( - 1 != n && (k = this.data[n][d], k > 1 && k <= this.lastSlope && this._checkTileDef(a, k, b, c, h, i, f, g, d, n))); d++) if (k = this.data[p][d], 1 == k || k > this.lastSlope || k > 1 && this._checkTileDef(a, k, b, c, h, i, f, g, d, p)) {
                if (k > 1 && k <= this.lastSlope && a.collision.slope) break;
                a.collision.y = !0,
                a.tile.y = k,
                a.pos.y = p * this.tilesize - l + e;
                break
            }
        },
        _checkTileDef: function(a, b, c, d, e, f, g, h, i, j) {
            var l, m, n, k = this.tiledef[b];
            return k ? (b = (k[2] - k[0]) * this.tilesize, l = (k[3] - k[1]) * this.tilesize, m = k[4], g = c + e + (0 > l ? g: 0) - (i + k[0]) * this.tilesize, h = d + f + (b > 0 ? h: 0) - (j + k[1]) * this.tilesize, b * h - l * g > 0 ? 0 > e * -l + f * b ? m: (i = Math.sqrt(b * b + l * l), j = l / i, i = -b / i, n = g * j + h * i, k = j * n, n = i * n, k * k + n * n >= e * e + f * f ? m || .5 > b * (h - f) - l * (g - e) : (a.pos.x = c + e - k, a.pos.y = d + f - n, a.collision.slope = {
                x: b,
                y: l,
                nx: j,
                ny: i
            },
            !0)) : !1) : !1
        }
    });
    var a = 1 / 3,
    b = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5 : [0, 1, 1, b, !0],
        6 : [0, b, 1, a, !0],
        7 : [0, a, 1, 0, !0],
        3 : [0, 1, 1, .5, !0],
        4 : [0, .5, 1, 0, !0],
        2 : [0, 1, 1, 0, !0],
        10 : [.5, 1, 1, 0, !0],
        21 : [0, 1, .5, 0, !0],
        32 : [b, 1, 1, 0, !0],
        43 : [a, 1, b, 0, !0],
        54 : [0, 1, a, 0, !0],
        27 : [0, 0, 1, a, !0],
        28 : [0, a, 1, b, !0],
        29 : [0, b, 1, 1, !0],
        25 : [0, 0, 1, .5, !0],
        26 : [0, .5, 1, 1, !0],
        24 : [0, 0, 1, 1, !0],
        11 : [0, 0, .5, 1, !0],
        22 : [.5, 0, 1, 1, !0],
        33 : [0, 0, a, 1, !0],
        44 : [a, 0, b, 1, !0],
        55 : [b, 0, 1, 1, !0],
        16 : [1, a, 0, 0, !0],
        17 : [1, b, 0, a, !0],
        18 : [1, 1, 0, b, !0],
        14 : [1, .5, 0, 0, !0],
        15 : [1, 1, 0, .5, !0],
        13 : [1, 1, 0, 0, !0],
        8 : [.5, 1, 0, 0, !0],
        19 : [1, 1, .5, 0, !0],
        30 : [a, 1, 0, 0, !0],
        41 : [b, 1, a, 0, !0],
        52 : [1, 1, b, 0, !0],
        38 : [1, b, 0, 1, !0],
        39 : [1, a, 0, b, !0],
        40 : [1, 0, 0, a, !0],
        36 : [1, .5, 0, 1, !0],
        37 : [1, 0, 0, .5, !0],
        35 : [1, 0, 0, 1, !0],
        9 : [1, 0, .5, 1, !0],
        20 : [.5, 0, 0, 1, !0],
        31 : [1, 0, b, 1, !0],
        42 : [b, 0, a, 1, !0],
        53 : [a, 0, 0, 1, !0],
        12 : [0, 0, 1, 0, !1],
        23 : [1, 1, 0, 1, !1],
        34 : [1, 0, 1, 1, !1],
        45 : [0, 1, 0, 0, !1]
    },
    ig.CollisionMap.staticNoCollision = {
        trace: function(a, b, c, d) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: a + c,
                    y: b + d
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
}),
ig.baked = !0,
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(a, b, c) {
            this.parent(a, b),
            this.setTileset(c)
        },
        setTileset: function(a) {
            this.tilesetName = a instanceof ig.Image ? a.path: a,
            this.tiles = new ig.Image(this.tilesetName),
            this.preRenderedChunks = null
        },
        setScreenPos: function(a, b) {
            this.scroll.x = a / this.distance,
            this.scroll.y = b / this.distance
        },
        preRenderMapToChunks: function() {
            var e, f, a = this.width * this.tilesize * ig.system.scale,
            b = this.height * this.tilesize * ig.system.scale,
            c = Math.ceil(a / this.chunkSize),
            d = Math.ceil(b / this.chunkSize);
            for (this.preRenderedChunks = [], e = 0; d > e; e++) for (this.preRenderedChunks[e] = [], f = 0; c > f; f++) this.preRenderedChunks[e][f] = this.preRenderChunk(f, e, f == c - 1 ? a - f * this.chunkSize: this.chunkSize, e == d - 1 ? b - e * this.chunkSize: this.chunkSize)
        },
        preRenderChunk: function(a, b, c, d) {
            var i, j, k, e = c / this.tilesize / ig.system.scale + 1,
            f = d / this.tilesize / ig.system.scale + 1,
            g = a * this.chunkSize / ig.system.scale % this.tilesize,
            h = b * this.chunkSize / ig.system.scale % this.tilesize;
            for (a = Math.floor(a * this.chunkSize / this.tilesize / ig.system.scale), b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale), i = ig.$new("canvas"), i.width = c, i.height = d, c = ig.system.context, ig.system.context = i.getContext("2d"), d = 0; e > d; d++) for (j = 0; f > j; j++) d + a < this.width && j + b < this.height && (k = this.data[j + b][d + a], k && this.tiles.drawTile(d * this.tilesize - g, j * this.tilesize - h, k - 1, this.tilesize));
            return ig.system.context = c,
            i
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n;
            for (this.preRenderedChunks || this.preRenderMapToChunks(), a = ig.system.getDrawPos(this.scroll.x), b = ig.system.getDrawPos(this.scroll.y), this.repeat && (a %= this.width * this.tilesize * ig.system.scale, b %= this.height * this.tilesize * ig.system.scale), c = Math.max(Math.floor(a / this.chunkSize), 0), d = Math.max(Math.floor(b / this.chunkSize), 0), e = Math.ceil((a + ig.system.realWidth) / this.chunkSize), f = Math.ceil((b + ig.system.realHeight) / this.chunkSize), g = this.preRenderedChunks[0].length, h = this.preRenderedChunks.length, this.repeat || (e = Math.min(e, g), f = Math.min(f, h)), i = 0; f > d; d++) {
                for (j = 0, k = c; e > k; k++) l = this.preRenderedChunks[d % h][k % g],
                m = -a + k * this.chunkSize - j,
                n = -b + d * this.chunkSize - i,
                ig.system.context.drawImage(l, m, n),
                ig.Image.drawCount++,
                this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(m, n, this.chunkSize, this.chunkSize)),
                this.repeat && l.width < this.chunkSize && m + l.width < ig.system.realWidth && (j = this.chunkSize - l.width, e++);
                this.repeat && l.height < this.chunkSize && n + l.height < ig.system.realHeight && (i = this.chunkSize - l.height, f++)
            }
        },
        drawTiled: function() {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (a = 0, b = null, c = (this.scroll.x / this.tilesize).toInt(), d = (this.scroll.y / this.tilesize).toInt(), e = this.scroll.x % this.tilesize, f = this.scroll.y % this.tilesize, g = -e - this.tilesize, e = ig.system.width + this.tilesize - e, h = ig.system.height + this.tilesize - f, i = -1, f = -f - this.tilesize; h > f; i++, f += this.tilesize) {
                if (j = i + d, j >= this.height || 0 > j) {
                    if (!this.repeat) continue;
                    j = j > 0 ? j % this.height: (j + 1) % this.height + this.height - 1
                }
                for (k = -1, l = g; e > l; k++, l += this.tilesize) {
                    if (a = k + c, a >= this.width || 0 > a) {
                        if (!this.repeat) continue;
                        a = a > 0 ? a % this.width: (a + 1) % this.width + this.width - 1
                    } (a = this.data[j][a]) && ((b = this.anims[a - 1]) ? b.draw(l, f) : this.tiles.drawTile(l, f, a - 1, this.tilesize))
                }
            }
        }
    })
}),
ig.baked = !0,
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            return this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX,
            ig.game = this,
            null
        },
        loadLevelWithoutEntities: function(a) {
            var b, c, d;
            for (this.screen = {
                x: 0,
                y: 0
            },
            this.collisionMap = ig.CollisionMap.staticNoCollision, this.backgroundMaps = [], b = 0; b < a.layer.length; b++) c = a.layer[b],
            "collision" == c.name ? this.collisionMap = new ig.CollisionMap(c.tilesize, c.data) : (d = new ig.BackgroundMap(c.tilesize, c.data, c.tilesetName), d.anims = this.backgroundAnims[c.tilesetName] || {},
            d.repeat = c.repeat, d.distance = c.distance, d.foreground = !!c.foreground, d.preRender = !!c.preRender, d.name = c.name, this.backgroundMaps.push(d))
        },
        loadLevel: function(a) {
            var b, c, d;
            for (this.screen = {
                x: 0,
                y: 0
            },
            this.entities = [], this.namedEntities = {},
            b = 0; b < a.entities.length; b++) c = a.entities[b],
            this.spawnEntity(c.type, c.x, c.y, c.settings);
            for (this.sortEntities(), this.collisionMap = ig.CollisionMap.staticNoCollision, this.backgroundMaps = [], b = 0; b < a.layer.length; b++) c = a.layer[b],
            "collision" == c.name ? this.collisionMap = new ig.CollisionMap(c.tilesize, c.data) : (d = new ig.BackgroundMap(c.tilesize, c.data, c.tilesetName), d.anims = this.backgroundAnims[c.tilesetName] || {},
            d.repeat = c.repeat, d.distance = c.distance, d.foreground = !!c.foreground, d.preRender = !!c.preRender, d.name = c.name, this.backgroundMaps.push(d));
            for (b = 0; b < this.entities.length; b++) this.entities[b].ready()
        },
        loadLevelDeferred: function(a) {
            this._levelToLoad = a
        },
        getMapByName: function(a) {
            if ("collision" == a) return this.collisionMap;
            for (var b = 0; b < this.backgroundMaps.length; b++) if (this.backgroundMaps[b].name == a) return this.backgroundMaps[b];
            return null
        },
        getEntityByName: function(a) {
            return this.namedEntities[a]
        },
        getEntitiesByType: function(a) {
            var b, c, d;
            for (a = "string" == typeof a ? ig.global[a] : a, b = [], c = 0; c < this.entities.length; c++) d = this.entities[c],
            d instanceof a && !d._killed && b.push(d);
            return b
        },
        spawnEntity: function(a, b, c, d) {
            var e = "string" == typeof a ? ig.global[a] : a;
            if (!e) throw "Can't spawn entity of type " + a;
            return a = new e(b, c, d || {}),
            this.entities.push(a),
            a.name && (this.namedEntities[a.name] = a),
            a
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(a) {
            a.name && delete this.namedEntities[a.name],
            a._killed = !0,
            a.type = ig.Entity.TYPE.NONE,
            a.checkAgainst = ig.Entity.TYPE.NONE,
            a.collides = ig.Entity.COLLIDES.NEVER,
            this._deferredKill.push(a)
        },
        run: function() {
            this.update(),
            this.draw()
        },
        update: function() {
            var a, b, c;
            for (this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null), (this._doSortEntities || this.autoSort) && (this.sortEntities(), this._doSortEntities = !1), this.updateEntities(), this.checkEntities(), a = 0; a < this._deferredKill.length; a++) this.entities.erase(this._deferredKill[a]);
            this._deferredKill = [];
            for (b in this.backgroundAnims) {
                a = this.backgroundAnims[b];
                for (c in a) a[c].update()
            }
        },
        updateEntities: function() {
            var a, b;
            for (a = 0; a < this.entities.length; a++) b = this.entities[a],
            b._killed || b.update()
        },
        draw: function() {
            var a, b;
            for (this.clearColor && ig.system.clear(this.clearColor), this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale, this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale, a = 0; a < this.backgroundMaps.length && (b = this.backgroundMaps[a], !b.foreground); a++) b.setScreenPos(this.screen.x, this.screen.y),
            b.draw();
            for (this.drawEntities(), a; a < this.backgroundMaps.length; a++) b = this.backgroundMaps[a],
            b.setScreenPos(this.screen.x, this.screen.y),
            b.draw()
        },
        drawEntities: function() {
            for (var a = 0; a < this.entities.length; a++) this.entities[a].draw()
        },
        checkEntities: function() {
            var a, b, c, d, e, f, g, h, i, j, k;
            for (a = {},
            b = 0; b < this.entities.length; b++) if (c = this.entities[b], c.type != ig.Entity.TYPE.NONE || c.checkAgainst != ig.Entity.TYPE.NONE || c.collides != ig.Entity.COLLIDES.NEVER) for (d = {},
            e = Math.floor(c.pos.y / this.cellSize), f = Math.floor((c.pos.x + c.size.x) / this.cellSize) + 1, g = Math.floor((c.pos.y + c.size.y) / this.cellSize) + 1, h = Math.floor(c.pos.x / this.cellSize); f > h; h++) for (i = e; g > i; i++) if (a[h]) if (a[h][i]) {
                for (j = a[h][i], k = 0; k < j.length; k++) c.touches(j[k]) && !d[j[k].id] && (d[j[k].id] = !0, ig.Entity.checkPair(c, j[k]));
                j.push(c)
            } else a[h][i] = [c];
            else a[h] = {},
            a[h][i] = [c]
        }
    }),
    ig.Game.SORT = {
        Z_INDEX: function(a, b) {
            return a.zIndex - b.zIndex
        },
        POS_X: function(a, b) {
            return a.pos.x + a.size.x - (b.pos.x + b.size.x)
        },
        POS_Y: function(a, b) {
            return a.pos.y + a.size.y - (b.pos.y + b.size.y)
        }
    }
}),
ig.baked = !0,
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun(),
            this.parent(),
            ig.debug.afterRun()
        },
        setGameNow: function(a) {
            this.parent(a),
            ig.debug.ready()
        }
    }),
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: .016,
        debugRealTime: Date.now(),
        init: function() {
            this.container = ig.$new("div"),
            this.container.className = "ig_debug",
            ig.$("body")[0].appendChild(this.container),
            this.panelMenu = ig.$new("div"),
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>',
            this.panelMenu.className = "ig_debug_panel_menu",
            this.container.appendChild(this.panelMenu),
            this.numberContainer = ig.$new("div"),
            this.numberContainer.className = "ig_debug_stats",
            this.panelMenu.appendChild(this.numberContainer),
            window.console && window.console.log && window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert),
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(a) {
            var b = ig.$new("span");
            this.numberContainer.appendChild(b),
            this.numberContainer.appendChild(document.createTextNode(a)),
            this.numbers[a] = b
        },
        showNumber: function(a, b, c) {
            this.numbers[a] || this.addNumber(a, c),
            this.numbers[a].textContent = b
        },
        addPanel: function(a) {
            var c, d, e, b = new a.type(a.name, a.label);
            if (a.options) for (c = 0; c < a.options.length; c++) d = a.options[c],
            b.addOption(new ig.DebugOption(d.name, d.object, d.property));
            for (this.panels[b.name] = b, b.container.style.display = "none", this.container.appendChild(b.container), a = ig.$new("div"), a.className = "ig_debug_menu_item", a.textContent = b.label, a.addEventListener("click",
            function() {
                this.togglePanel(b)
            }.bind(this), !1), b.menuItem = a, d = !1, c = 1; c < this.panelMenu.childNodes.length; c++) if (e = this.panelMenu.childNodes[c], e.textContent > b.label) {
                this.panelMenu.insertBefore(a, e),
                d = !0;
                break
            }
            d || this.panelMenu.appendChild(a)
        },
        showPanel: function(a) {
            this.togglePanel(this.panels[a])
        },
        togglePanel: function(a) {
            a != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var b = "block" != a.container.style.display;
            a.toggle(b),
            a.menuItem.className = "ig_debug_menu_item" + (b ? " active": ""),
            b && (this.activePanel = a)
        },
        ready: function() {
            for (var a in this.panels) this.panels[a].ready()
        },
        beforeRun: function() {
            var a = Date.now();
            this.debugTickAvg = .8 * this.debugTickAvg + .2 * (a - this.debugRealTime),
            this.debugRealTime = a,
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var a = Date.now() - this.debugRealTime;
            this.debugTime = .8 * this.debugTime + .2 * a,
            this.activePanel && this.activePanel.afterRun(),
            this.showNumber("ms", this.debugTime.toFixed(2)),
            this.showNumber("fps", Math.round(1e3 / this.debugTickAvg)),
            this.showNumber("draws", ig.Image.drawCount),
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length),
            ig.Image.drawCount = 0
        }
    }),
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(a, b) {
            this.name = a,
            this.label = b,
            this.container = ig.$new("div"),
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(a) {
            this.active = a,
            this.container.style.display = a ? "block": "none"
        },
        addPanel: function(a) {
            this.panels.push(a),
            this.container.appendChild(a.container)
        },
        addOption: function(a) {
            this.options.push(a),
            this.container.appendChild(a.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    }),
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(a, b, c) {
            this.name = a,
            this.object = b,
            this.property = c,
            this.active = this.object[this.property],
            this.container = ig.$new("div"),
            this.container.className = "ig_debug_option",
            this.label = ig.$new("span"),
            this.label.className = "ig_debug_label",
            this.label.textContent = this.name,
            this.mark = ig.$new("span"),
            this.mark.className = "ig_debug_label_mark",
            this.container.appendChild(this.mark),
            this.container.appendChild(this.label),
            this.container.addEventListener("click", this.click.bind(this), !1),
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled: this.colors.disabled
        },
        click: function(a) {
            return this.active = !this.active,
            this.object[this.property] = this.active,
            this.setLabel(),
            a.stopPropagation(),
            a.preventDefault(),
            !1
        }
    }),
    ig.debug = new ig.Debug
}),
ig.baked = !0,
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            var a, b, c;
            if (this.parent(), ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - .5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - .5, this.size.x * ig.system.scale, this.size.y * ig.system.scale)), ig.Entity._debugShowVelocities && (a = this.pos.x + this.size.x / 2, b = this.pos.y + this.size.y / 2, this._debugDrawLine(this.colors.velocities, a, b, a + this.vel.x, b + this.vel.y)), ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target)) for (c in this.target)(a = ig.game.getEntityByName(this.target[c])) && this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, a.pos.x + a.size.x / 2, a.pos.y + a.size.y / 2)
        },
        _debugDrawLine: function(a, b, c, d, e) {
            ig.system.context.strokeStyle = a,
            ig.system.context.lineWidth = 1,
            ig.system.context.beginPath(),
            ig.system.context.moveTo(ig.system.getDrawPos(b - ig.game.screen.x), ig.system.getDrawPos(c - ig.game.screen.y)),
            ig.system.context.lineTo(ig.system.getDrawPos(d - ig.game.screen.x), ig.system.getDrawPos(e - ig.game.screen.y)),
            ig.system.context.stroke(),
            ig.system.context.closePath()
        }
    }),
    ig.Entity._debugEnableChecks = !0,
    ig.Entity._debugShowBoxes = !1,
    ig.Entity._debugShowVelocities = !1,
    ig.Entity._debugShowNames = !1,
    ig.Entity.oldCheckPair = ig.Entity.checkPair,
    ig.Entity.checkPair = function(a, b) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(a, b)
    },
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        },
        {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        },
        {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        },
        {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
}),
ig.baked = !0,
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(a) {
            this.parent(a),
            ig.debug.panels.maps.load(this)
        }
    }),
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(a, b) {
            this.parent(a, b),
            this.load()
        },
        load: function(a) {
            if (this.options = [], this.panels = [], a && a.backgroundMaps.length) for (this.maps = a.backgroundMaps, this.mapScreens = [], this.container.innerHTML = "", a = 0; a < this.maps.length; a++) {
                var b = this.maps[a],
                c = new ig.DebugPanel(a, "Layer " + a),
                d = new ig.$new("strong");
                d.textContent = a + ": " + b.tiles.path,
                c.container.appendChild(d),
                c.addOption(new ig.DebugOption("Enabled", b, "enabled")),
                c.addOption(new ig.DebugOption("Pre Rendered", b, "preRender")),
                c.addOption(new ig.DebugOption("Show Chunks", b, "debugChunks")),
                this.generateMiniMap(c, b, a),
                this.addPanel(c)
            } else this.container.innerHTML = "<em>No Maps Loaded</em>"
        },
        generateMiniMap: function(a, b, c) {
            var j, k, d = ig.system.scale,
            e = ig.$new("canvas"),
            f = e.getContext("2d"),
            g = b.tiles.width * d,
            h = b.tiles.height * d,
            i = g / b.tilesize;
            for (f.drawImage(b.tiles.data, 0, 0, g, h, 0, 0, i, h / b.tilesize), f = ig.$new("canvas"), f.width = b.width * d, f.height = b.height * d, j = f.getContext("2d"), ig.game.clearColor && (j.fillStyle = ig.game.clearColor, j.fillRect(0, 0, g, h)), h = g = 0; h < b.width; h++) for (k = 0; k < b.height; k++)(g = b.data[k][h]) && j.drawImage(e, Math.floor((g - 1) * d % i), Math.floor((g - 1) * d / i) * d, d, d, h * d, k * d, d, d);
            e = ig.$new("div"),
            e.className = "ig_debug_map_container",
            e.style.width = b.width * d + "px",
            e.style.height = b.height * d + "px",
            i = ig.$new("div"),
            i.className = "ig_debug_map_screen",
            i.style.width = ig.system.width / b.tilesize * d - 2 + "px",
            i.style.height = ig.system.height / b.tilesize * d - 2 + "px",
            this.mapScreens[c] = i,
            e.appendChild(f),
            e.appendChild(i),
            a.container.appendChild(e)
        },
        afterRun: function() {
            var a, b, c, d, e, f;
            for (a = ig.system.scale, b = 0; b < this.maps.length; b++) c = this.maps[b],
            d = this.mapScreens[b],
            c && d && (e = c.scroll.x / c.tilesize, f = c.scroll.y / c.tilesize, c.repeat && (e %= c.width, f %= c.height), d.style.left = e * a + "px", d.style.top = f * a + "px")
        }
    }),
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
}),
ig.baked = !0,
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw"),
            this.parent(),
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update"),
            this.parent(),
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks"),
            this.parent(),
            ig.graph.endClock("checks")
        }
    }),
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(a, b) {
            this.parent(a, b),
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round(),
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round(),
            this.msHeight = this.height / this.ms,
            this.graph = ig.$new("canvas"),
            this.graph.width = window.innerWidth,
            this.graph.height = this.height,
            this.container.appendChild(this.graph),
            this.ctx = this.graph.getContext("2d"),
            this.ctx.fillStyle = "#444",
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1),
            this.ctx.fillRect(0, this.mark33ms, this.graph.width, 1),
            this.addGraphMark("16ms", this.mark16ms),
            this.addGraphMark("33ms", this.mark33ms),
            this.addClock("draw", "Draw", "#13baff"),
            this.addClock("update", "Entity Update", "#bb0fff"),
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908"),
            this.addClock("lag", "System Lag", "#f26900"),
            ig.mark = this.mark.bind(this),
            ig.graph = this
        },
        addGraphMark: function(a, b) {
            var c = ig.$new("span");
            c.className = "ig_debug_graph_mark",
            c.textContent = a,
            c.style.top = b.round() + "px",
            this.container.appendChild(c)
        },
        addClock: function(a, b, c) {
            var e, f, d = ig.$new("span");
            d.className = "ig_debug_legend_color",
            d.style.backgroundColor = c,
            e = ig.$new("span"),
            e.className = "ig_debug_legend_number",
            e.appendChild(document.createTextNode("0")),
            f = ig.$new("span"),
            f.className = "ig_debug_legend",
            f.appendChild(d),
            f.appendChild(document.createTextNode(b + " (")),
            f.appendChild(e),
            f.appendChild(document.createTextNode("ms)")),
            this.container.appendChild(f),
            this.clocks[a] = {
                description: b,
                color: c,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: e
            }
        },
        beginClock: function(a, b) {
            this.clocks[a].start = Date.now() + (b || 0)
        },
        endClock: function(a) {
            a = this.clocks[a],
            a.current = Math.round(Date.now() - a.start),
            a.avg = .8 * a.avg + .2 * a.current
        },
        mark: function(a, b) {
            this.active && this.marks.push({
                msg: a,
                color: b || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag"),
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b, c, d, e, a = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1e3 / ig.system.fps - a, 0)),
            a = this.graph.width - 1,
            b = this.height,
            this.ctx.drawImage(this.graph, -1, 0),
            this.ctx.fillStyle = "#000",
            this.ctx.fillRect(a, 0, 1, this.height),
            this.ctx.fillStyle = "#444",
            this.ctx.fillRect(a, this.mark16ms, 1, 1),
            this.ctx.fillStyle = "#444",
            this.ctx.fillRect(a, this.mark33ms, 1, 1);
            for (c in this.clocks) d = this.clocks[c],
            d.html.textContent = d.avg.toFixed(2),
            d.color && 0 < d.current && (this.ctx.fillStyle = d.color, e = d.current * this.msHeight, b -= e, this.ctx.fillRect(a, b, 1, e), d.current = 0);
            for (this.ctx.textAlign = "right", this.ctx.textBaseline = "top", this.ctx.globalAlpha = .5, c = 0; c < this.marks.length; c++) b = this.marks[c],
            this.ctx.fillStyle = b.color,
            this.ctx.fillRect(a, 0, 1, this.height),
            b.msg && (this.ctx.fillText(b.msg, a - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1,
            this.marks = []
        }
    }),
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
}),
ig.baked = !0,
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {}),
ig.baked = !0,
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.jpg"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        loadingTextAlpha: 1,
        init: function(a, b) {
            this.parent(a, b),
            this.setupCustomAnimation(),
            ig.system.context.font = "18px mainfont, Helvetica, Verdana",
            ig.system.context.fillText("", 0, 0)
        },
        end: function() {
            this.loadingTextAlpha = 1,
            this.draw(),
            this.parent();
            var a = 0 <= document.URL.indexOf("localhost") ? 500 : 3e3;
            window.setTimeout("ig.system.setGame(MyGame)", a),
            window.clearInterval(ig.loadingScreen.animationTimer)
        },
        setupCustomAnimation: function() {
            ig.loadingScreen = this,
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            var a = Date.now() / 1e3 % 1;
            a > .5 && (a = 1 - a),
            this.loadingTextAlpha = 1 - 2 * a
        },
        draw: function() {
            var a, b;
            this._drawStatus += (this.status - this._drawStatus) / 5,
            a = ig.system.context,
            a.save(),
            a.fillStyle = "#000000",
            a.fillRect(0, 0, ig.system.width, ig.system.height),
            this.bgImage.width < ig.system.width && a.scale(ig.system.width / this.bgImage.width, 1),
            this.bgImage.draw(0, 0),
            a.restore(),
            this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0),
            w0 = 152,
            h0 = 11,
            x0 = (ig.system.width - w0) / 2,
            y0 = 570,
            ig.system.context.save(),
            a.translate(x0 + w0 / 2, y0),
            a.fillStyle = "#000000",
            a.strokeStyle = "#000000",
            a.lineWidth = 0,
            a.fillRect( - w0 / 2, 0, w0, h0),
            a.strokeRect( - w0 / 2, 0, w0, h0),
            b = this._drawStatus * w0,
            a.fillStyle = "#A5DE3E",
            a.strokeStyle = "#A5DE3E",
            a.lineWidth = 0,
            a.fillRect( - w0 / 2, 0, b, h0 / 2),
            a.strokeRect( - w0 / 2, 0, b, h0 / 2),
            a.fillStyle = "#67BD51",
            a.strokeStyle = "#67BD51",
            a.lineWidth = 0,
            a.fillRect( - w0 / 2, h0 / 2, b, h0 / 2),
            a.strokeRect( - w0 / 2, h0 / 2, b, h0 / 2),
            ig.system.context.fillStyle = "#000000",
            ig.system.context.font = "20px mainfont, Helvetica, Verdana",
            a = _STRINGS.Loading.Loading,
            b = ig.system.context.measureText("m").width,
            b = h0 + b + 4 * b / 10,
            ig.system.context.globalAlpha = this.loadingTextAlpha,
            ig.system.context.textAlign = "center",
            ig.system.context.fillText(a, 0, b),
            ig.system.context.restore()
        }
    })
}),
ig.baked = !0,
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        for (var b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return - 1
    }),
    ig.Entity.prototype.tweens = [],
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update,
    ig.Entity.prototype.update = function() {
        if (this._preTweenUpdate(), 0 < this.tweens.length) {
            for (var a = [], b = 0; b < this.tweens.length; b++) this.tweens[b].update(),
            this.tweens[b].complete || a.push(this.tweens[b]);
            this.tweens = a
        }
    },
    ig.Entity.prototype.tween = function(a, b, c) {
        return a = new ig.Tween(this, a, b, c),
        this.tweens.push(a),
        a
    },
    ig.Entity.prototype.pauseTweens = function() {
        for (var a = 0; a < this.tweens.length; a++) this.tweens[a].pause()
    },
    ig.Entity.prototype.resumeTweens = function() {
        for (var a = 0; a < this.tweens.length; a++) this.tweens[a].resume()
    },
    ig.Entity.prototype.stopTweens = function(a) {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].stop(a)
    },
    ig.Tween = function(a, b, c, d) {
        var e = {},
        f = {},
        g = {},
        h = 0,
        i = !1,
        j = !1,
        k = !1;
        this.duration = c,
        this.paused = this.complete = !1,
        this.easing = ig.Tween.Easing.Linear.EaseNone,
        this.onComplete = !1,
        this.loop = this.delay = 0,
        this.loopCount = -1,
        ig.merge(this, d),
        this.loopNum = this.loopCount,
        this.chain = function(a) {
            k = a
        },
        this.initEnd = function(a, b, c) {
            if ("object" != typeof b[a]) c[a] = b[a];
            else for (subprop in b[a]) c[a] || (c[a] = {}),
            this.initEnd(subprop, b[a], c[a])
        },
        this.initStart = function(a, b, c, d) {
            if ("object" != typeof c[a])"undefined" != typeof b[a] && (d[a] = c[a]);
            else for (subprop in c[a]) d[a] || (d[a] = {}),
            "undefined" != typeof b[a] && this.initStart(subprop, b[a], c[a], d[a])
        },
        this.start = function() {
            this.paused = this.complete = !1,
            this.loopNum = this.loopCount,
            h = 0,
            -1 == a.tweens.indexOf(this) && a.tweens.push(this),
            j = !0,
            i = new ig.Timer;
            for (var c in b) this.initEnd(c, b, f);
            for (c in f) this.initStart(c, f, a, e),
            this.initDelta(c, g, a, f)
        },
        this.initDelta = function(a, b, c, d) {
            if ("object" != typeof d[a]) b[a] = d[a] - c[a];
            else for (subprop in d[a]) b[a] || (b[a] = {}),
            this.initDelta(subprop, b[a], c[a], d[a])
        },
        this.propUpdate = function(a, b, c, d, e) {
            if ("object" != typeof c[a]) b[a] = "undefined" != typeof c[a] ? c[a] + d[a] * e: b[a];
            else for (subprop in c[a]) this.propUpdate(subprop, b[a], c[a], d[a], e)
        },
        this.propSet = function(a, b, c) {
            if ("object" != typeof b[a]) c[a] = b[a];
            else for (subprop in b[a]) c[a] || (c[a] = {}),
            this.propSet(subprop, b[a], c[a])
        },
        this.update = function() {
            if (!j) return ! 1;
            if (this.delay) {
                if (i.delta() < this.delay) return;
                this.delay = 0,
                i.reset()
            }
            if (this.paused || this.complete) return ! 1;
            var b = (i.delta() + h) / this.duration,
            b = b > 1 ? 1 : b,
            c = this.easing(b);
            for (property in g) this.propUpdate(property, a, e, g, c);
            if (b >= 1) {
                if (0 == this.loopNum || !this.loop) return this.complete = !0,
                this.onComplete && this.onComplete(),
                k && k.start(),
                !1;
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in e) this.propSet(property, e, a);
                    h = 0,
                    i.reset(),
                    -1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    b = {},
                    c = {},
                    ig.merge(b, f),
                    ig.merge(c, e),
                    ig.merge(e, b),
                    ig.merge(f, c);
                    for (property in f) this.initDelta(property, g, a, f);
                    h = 0,
                    i.reset(),
                    -1 != this.loopNum && this.loopNum--
                }
            }
        },
        this.pause = function() {
            this.paused = !0,
            h += i.delta()
        },
        this.resume = function() {
            this.paused = !1,
            i.reset()
        },
        this.stop = function(a) {
            a && (this.loop = this.complete = this.paused = !1, h += c, this.update()),
            this.complete = !0
        }
    },
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    },
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    },
    ig.Tween.Easing.Linear.EaseNone = function(a) {
        return a
    },
    ig.Tween.Easing.Quadratic.EaseIn = function(a) {
        return a * a
    },
    ig.Tween.Easing.Quadratic.EaseOut = function(a) {
        return - a * (a - 2)
    },
    ig.Tween.Easing.Quadratic.EaseInOut = function(a) {
        return 1 > (a *= 2) ? .5 * a * a: -.5 * (--a * (a - 2) - 1)
    },
    ig.Tween.Easing.Cubic.EaseIn = function(a) {
        return a * a * a
    },
    ig.Tween.Easing.Cubic.EaseOut = function(a) {
        return--a * a * a + 1
    },
    ig.Tween.Easing.Cubic.EaseInOut = function(a) {
        return 1 > (a *= 2) ? .5 * a * a * a: .5 * ((a -= 2) * a * a + 2)
    },
    ig.Tween.Easing.Quartic.EaseIn = function(a) {
        return a * a * a * a
    },
    ig.Tween.Easing.Quartic.EaseOut = function(a) {
        return - (--a * a * a * a - 1)
    },
    ig.Tween.Easing.Quartic.EaseInOut = function(a) {
        return 1 > (a *= 2) ? .5 * a * a * a * a: -.5 * ((a -= 2) * a * a * a - 2)
    },
    ig.Tween.Easing.Quintic.EaseIn = function(a) {
        return a * a * a * a * a
    },
    ig.Tween.Easing.Quintic.EaseOut = function(a) {
        return (a -= 1) * a * a * a * a + 1
    },
    ig.Tween.Easing.Quintic.EaseInOut = function(a) {
        return 1 > (a *= 2) ? .5 * a * a * a * a * a: .5 * ((a -= 2) * a * a * a * a + 2)
    },
    ig.Tween.Easing.Sinusoidal.EaseIn = function(a) {
        return - Math.cos(a * Math.PI / 2) + 1
    },
    ig.Tween.Easing.Sinusoidal.EaseOut = function(a) {
        return Math.sin(a * Math.PI / 2)
    },
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(a) {
        return - .5 * (Math.cos(Math.PI * a) - 1)
    },
    ig.Tween.Easing.Exponential.EaseIn = function(a) {
        return 0 == a ? 0 : Math.pow(2, 10 * (a - 1))
    },
    ig.Tween.Easing.Exponential.EaseOut = function(a) {
        return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
    },
    ig.Tween.Easing.Exponential.EaseInOut = function(a) {
        return 0 == a ? 0 : 1 == a ? 1 : 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * ( - Math.pow(2, -10 * (a - 1)) + 2)
    },
    ig.Tween.Easing.Circular.EaseIn = function(a) {
        return - (Math.sqrt(1 - a * a) - 1)
    },
    ig.Tween.Easing.Circular.EaseOut = function(a) {
        return Math.sqrt(1 - --a * a)
    },
    ig.Tween.Easing.Circular.EaseInOut = function(a) {
        return 1 > (a /= .5) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
    },
    ig.Tween.Easing.Elastic.EaseIn = function(a) {
        var b, c = .1,
        d = .4;
        return 0 == a ? 0 : 1 == a ? 1 : (d || (d = .3), !c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c), -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / d)))
    },
    ig.Tween.Easing.Elastic.EaseOut = function(a) {
        var b, c = .1,
        d = .4;
        return 0 == a ? 0 : 1 == a ? 1 : (d || (d = .3), !c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c), c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / d) + 1)
    },
    ig.Tween.Easing.Elastic.EaseInOut = function(a) {
        var b, c = .1,
        d = .4;
        return 0 == a ? 0 : 1 == a ? 1 : (d || (d = .3), !c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c), 1 > (a *= 2) ? -.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / d) : .5 * c * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / d) + 1)
    },
    ig.Tween.Easing.Back.EaseIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    },
    ig.Tween.Easing.Back.EaseOut = function(a) {
        return (a -= 1) * a * (2.70158 * a + 1.70158) + 1
    },
    ig.Tween.Easing.Back.EaseInOut = function(a) {
        return 1 > (a *= 2) ? .5 * a * a * (3.5949095 * a - 2.5949095) : .5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
    },
    ig.Tween.Easing.Bounce.EaseIn = function(a) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - a)
    },
    ig.Tween.Easing.Bounce.EaseOut = function(a) {
        return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a: 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    },
    ig.Tween.Easing.Bounce.EaseInOut = function(a) {
        return.5 > a ? .5 * ig.Tween.Easing.Bounce.EaseIn(2 * a) : .5 * ig.Tween.Easing.Bounce.EaseOut(2 * a - 1) + .5
    }
}),
ig.baked = !0,
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
            case "true":
                ig.ua.iPhone = !0,
                console.log("iPhone mode")
            }
            var a = getQueryVariable("webview");
            if (a) switch (a) {
            case "true":
                ig.ua.is_uiwebview = !0,
                console.log("webview mode")
            }
            if (a = getQueryVariable("debug")) switch (a) {
            case "true":
                ig.game.showDebugMenu(),
                console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
            case "stats":
                ig.game.resetPlayerStats(),
                ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
}),
ig.baked = !0,
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/music/bgm.mp3", "media/audio/music/bgm.ogg"],
                spritemap: {
                    music: {
                        start: 0,
                        end: 13.69,
                        loop: !0
                    }
                }
            })
        }
    })
}),
ig.baked = !0,
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(a, b) {
            this.game = a,
            this.levels = [],
            this.currentLevel = 0,
            this.append(b)
        },
        loadLevel: function(a) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            return this.currentLevel = a,
            this.game.loadLevel(this.levels[a]),
            !0
        },
        loadLevelWithoutEntities: function(a) {
            return this.currentLevel = a,
            this.game.loadLevelWithoutEntities(this.levels[a]),
            !0
        },
        append: function(a) {
            return newLevels = [],
            "object" == typeof a ? (a.constructor === [].constructor ? newLevels = a: newLevels[0] = a, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(a) {
            var b = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == a && (b = i);
            return b >= 0 ? this.loadLevel(b) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
}),
ig.baked = !0,
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return ig.Storage.instance ? ig.Storage.instance: null
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" != typeof window.localStorage
        },
        isSet: function(a) {
            return null !== this.get(a)
        },
        initUnset: function(a, b) {
            null === this.get(a) && this.set(a, b)
        },
        get: function(a) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(a))
            } catch(b) {
                return window.localStorage.getItem(a)
            }
        },
        getInt: function(a) {
            return~~this.get(a)
        },
        getFloat: function(a) {
            return parseFloat(this.get(a))
        },
        getBool: function(a) {
            return !! this.get(a)
        },
        key: function(a) {
            return this.isCapable() ? window.localStorage.key(a) : null
        },
        set: function(a, b) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(a, JSON.stringify(b))
            } catch(c) {
                console.log(c)
            }
        },
        setHighest: function(a, b) {
            b > this.getFloat(a) && this.set(a, b)
        },
        remove: function(a) {
            return this.isCapable() ? (window.localStorage.removeItem(a), void 0) : null
        },
        clear: function() {
            return this.isCapable() ? (window.localStorage.clear(), void 0) : null
        }
    })
}),
this.START_BRANDING_SPLASH,
ig.baked = !0,
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    }),
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function(a, b, c) {
            this.parent(a, b, c),
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200, this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0)),
            this.pos.x = (ig.system.width - this.size.x) / 2,
            this.pos.y = -this.size.y - 200,
            this.endPosY = (ig.system.height - this.size.y) / 2,
            a = this.tween({
                pos: {
                    y: this.endPosY
                }
            },
            .5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            }),
            b = this.tween({},
            2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            }),
            a.chain(b),
            a.start(),
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer"),
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(a) {
            for (k in dynamicClickableEntityDivs) if (k == a) return ! 0;
            return ! 1
        },
        checkClickableLayer: function(a, b, c) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(a) ? (ig.game.showOverlay([a]), $("#" + a).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(a, b, "media/graphics/misc/invisible.png", c))
        },
        createClickableOutboundLayer: function(a, b, c, d) {
            var f, g, e = ig.$new("div");
            e.id = a,
            document.body.appendChild(e),
            $("#" + e.id).css("float", "left"),
            $("#" + e.id).css("position", "absolute"),
            ig.ua.mobile ? (f = window.innerHeight / mobileHeight, g = window.innerWidth / mobileWidth, $("#" + e.id).css("left", this.pos.x * g), $("#" + e.id).css("top", this.pos.y * f), $("#" + e.id).css("width", this.size.x * g), $("#" + e.id).css("height", this.size.y * f)) : (f = w / 2 - destW / 2, g = h / 2 - destH / 2, console.log(f, g), $("#" + e.id).css("left", f + this.pos.x * multiplier), $("#" + e.id).css("top", g + this.pos.y * multiplier), $("#" + e.id).css("width", this.size.x * multiplier), $("#" + e.id).css("height", this.size.y * multiplier)),
            d ? $("#" + e.id).html("<a target='_blank' href='" + b + "'><img style='width:100%;height:100%' src='" + c + "'></a>") : $("#" + e.id).html("<a href='" + b + "'><img style='width:100%;height:100%' src='" + c + "'></a>"),
            dynamicClickableEntityDivs[a] = {},
            dynamicClickableEntityDivs[a].width = this.size.x * multiplier,
            dynamicClickableEntityDivs[a].height = this.size.y * multiplier,
            dynamicClickableEntityDivs[a].entity_pos_x = this.pos.x,
            dynamicClickableEntityDivs[a].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff",
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
            this.parent()
        }
    })
}),
this.END_BRANDING_SPLASH,
ig.baked = !0,
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(a, b, c) {
            if (this.parent(a, b, c), c) switch (console.log("settings found ... using that div layer name"), a = c.div_layer_name, console.log("settings.centralize:", c.centralize), c.centralize) {
            case "true":
                console.log("centralize true"),
                centralize = !0;
                break;
            case "false":
                console.log("centralize false"),
                centralize = !1;
                break;
            default:
                console.log("default ... centralize false"),
                centralize = !1
            } else a = "branding-logo",
            centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: a,
                        centralize: centralize
                    })
                } catch(d) {
                    console.log(d)
                }
                this.kill()
            }
        }
    })
}),
this.START_BRANDING_LOGO,
ig.baked = !0,
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(a, b, c) {
            this.parent(a, b, c),
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, c && c.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill()),
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0),
            this.currentAnim = this.anims.idle,
            c ? (console.log("branding settings found ... using that div layer name"), a = c.div_layer_name) : a = "branding-logo",
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(a, _SETTINGS.Branding.Logo.Link, !0)),
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(a) {
            for (k in dynamicClickableEntityDivs) if (k == a) return ! 0;
            return ! 1
        },
        checkClickableLayer: function(a, b, c) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(a) ? (ig.game.showOverlay([a]), $("#" + a).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(a, b, "media/graphics/misc/invisible.png", c))
        },
        createClickableOutboundLayer: function(a, b, c, d) {
            var f, g, e = ig.$new("div");
            e.id = a,
            document.body.appendChild(e),
            $("#" + e.id).css("float", "left"),
            $("#" + e.id).css("position", "absolute"),
            ig.ua.mobile ? (f = window.innerHeight / mobileHeight, g = window.innerWidth / mobileWidth, $("#" + e.id).css("left", this.pos.x * g), $("#" + e.id).css("top", this.pos.y * f), $("#" + e.id).css("width", this.size.x * g), $("#" + e.id).css("height", this.size.y * f)) : (f = w / 2 - destW / 2, g = h / 2 - destH / 2, console.log(f, g), $("#" + e.id).css("left", f + this.pos.x * multiplier), $("#" + e.id).css("top", g + this.pos.y * multiplier), $("#" + e.id).css("width", this.size.x * multiplier), $("#" + e.id).css("height", this.size.y * multiplier)),
            d ? $("#" + e.id).html("<a target='_blank' href='" + b + "'><img style='width:100%;height:100%' src='" + c + "'></a>") : $("#" + e.id).html("<a href='" + b + "'><img style='width:100%;height:100%' src='" + c + "'></a>"),
            dynamicClickableEntityDivs[a] = {},
            dynamicClickableEntityDivs[a].width = this.size.x * multiplier,
            dynamicClickableEntityDivs[a].height = this.size.y * multiplier,
            dynamicClickableEntityDivs[a].entity_pos_x = this.pos.x,
            dynamicClickableEntityDivs[a].entity_pos_y = this.pos.y
        }
    })
}),
this.END_BRANDING_LOGO,
ig.baked = !0,
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        size: {
            x: 176,
            y: 116
        },
        zIndex: 750,
        type: ig.Entity.TYPE.B,
        init: function(a, b, c) {
            this.parent(a, b, c)
        },
        ready: function() {
            setTimeout(this.spawnDiv(), 5)
        },
        spawnDiv: function() {
            var a, b, c;
            this.canSpawnDiv || (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled ? (a = this.divLayerName ? this.divLayerName: "more-games", this.checkClickableLayer(a, "", !0), ig.ua.mobile ? (b = window.innerHeight / mobileHeight, c = window.innerWidth / mobileWidth, $("#" + a).css("left", this.pos.x * c), $("#" + a).css("top", this.pos.y * b), $("#" + a).css("width", this.size.x * c), $("#" + a).css("height", this.size.y * b)) : (b = document.getElementById("game").offsetLeft, c = document.getElementById("game").offsetTop, $("#" + a).css("left", b + this.pos.x * multiplier), $("#" + a).css("top", c + this.pos.y * multiplier), $("#" + a).css("width", this.size.x * multiplier), $("#" + a).css("height", this.size.y * multiplier))) : this.kill())
        },
        doesClickableLayerExist: function(a) {
            for (k in dynamicClickableEntityDivs) if (k == a) return ! 0;
            return ! 1
        },
        checkClickableLayer: function(a, b, c) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(a) ? (ig.game.showOverlay([a]), $("#" + a).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(a, b, "media/graphics/misc/invisible.png", c))
        },
        createClickableOutboundLayer: function(a, b, c, d) {
            var f, g, e = ig.$new("div");
            e.id = a,
            document.body.appendChild(e),
            $("#" + e.id).css("float", "left"),
            $("#" + e.id).css("position", "absolute"),
            ig.ua.mobile ? (f = window.innerHeight / mobileHeight, g = window.innerWidth / mobileWidth, $("#" + e.id).css("left", this.pos.x * g), $("#" + e.id).css("top", this.pos.y * f), $("#" + e.id).css("width", this.size.x * g), $("#" + e.id).css("height", this.size.y * f)) : (f = document.getElementById("game").offsetLeft, g = document.getElementById("game").offsetTop, $("#" + e.id).css("left", f + this.pos.x * multiplier), $("#" + e.id).css("top", g + this.pos.y * multiplier), $("#" + e.id).css("width", this.size.x * multiplier), $("#" + e.id).css("height", this.size.y * multiplier)),
            d ? $("#" + e.id).html("<a onclick='go_moreGame()' ><img style='width:100%;height:100%' src='" + c + "'></a>") : $("#" + e.id).html("<a onclick='go_moreGame()><img style='width:100%;height:100%' src='" + c + "'></a>"),
            dynamicClickableEntityDivs[a] = {},
            dynamicClickableEntityDivs[a].width = this.size.x * multiplier,
            dynamicClickableEntityDivs[a].height = this.size.y * multiplier,
            dynamicClickableEntityDivs[a].entity_pos_x = this.pos.x,
            dynamicClickableEntityDivs[a].entity_pos_y = this.pos.y
        },
        hide: function() {
            var a = "more-games";
            this.divLayerName && (a = this.divLayerName),
            document.getElementById(a).style.visibility = "hidden",
            $("#" + a).hide()
        },
        show: function() {
            var a = "more-games";
            this.divLayerName && (a = this.divLayerName),
            document.getElementById(a).style.visibility = "visible",
            $("#" + a).show()
        },
        clicking: function() {},
        released: function() {},
        over: function() {},
        leave: function() {}
    })
}),
ig.baked = !0,
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(a, b, c) {
            this.parent(a, b, c)
        },
        ready: function() {
            if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                this.initTimer = new ig.Timer(.1);
                try {
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                } catch(a) {
                    console.log(a)
                }
            } else ig.game.director.nextLevel(),
            ig.system.context.globalAlpha = 1,
            this.kill()
        },
        update: function() {
            this.parent(),
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent(),
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(.05)),
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(.001), this.mIconTimer = new ig.Timer(.05), this.titleTimer = new ig.Timer(.15))),
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += .3, this.moveTimer.reset()),
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null),
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1))),
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            var a, b, c, d, e;
            if (this.moveTimer) {
                for (a = ig.system.context, a.save(), b = ig.system.width / 2, c = ig.system.height / 2, a.translate(b, c), a.rotate(this.move * Math.PI / 180), a.beginPath(), a.moveTo(0, 0), d = 0, e = 1; 48 >= e; e += 1) a.lineTo(0 + 800 * Math.cos(2 * e * Math.PI / 48), 0 + 800 * Math.sin(2 * e * Math.PI / 48)),
                d++,
                2 == d && (d = 0, a.lineTo(0, 0));
                a.translate( - b, -c),
                b = a.createRadialGradient(b, c, 100, b, c, 250),
                b.addColorStop(0, "rgba(255,255,255,0.1)"),
                b.addColorStop(1, "rgba(0,0,0,0)"),
                a.fillStyle = b,
                a.fill(),
                a.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768),
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76)),
            ig.system.context.globalAlpha = 1
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(a, b, c) {
            this.parent(a, b, c)
        },
        ready: function() {
           /* if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                this.initTimer = new ig.Timer(.1);
                try {
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                } catch(a) {
                    console.log(a)
                }
            } else */
			ig.game.director.nextLevel(),
            ig.system.context.globalAlpha = 1,
            this.kill()
        },
        update: function() {
            this.parent(),
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent(),
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(.15)),
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2))),
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var a = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            a.addColorStop(0, "#ffed94"),
            a.addColorStop(1, "#ffcd85"),
            ig.system.context.fillStyle = a,
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37)),
            ig.system.context.globalAlpha = 1
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5e3,
        check: function(a) {
            this.objectArray.push(a)
        },
        clickObject: function(a) {
            this.isClicking && !this.firstClick && "function" == typeof a.clicked && a.clicked(),
            this.firstClick && !this.isReleased && "function" == typeof a.clicking && a.clicking(),
            this.firstClick && this.isReleased && "function" == typeof a.released && a.released()
        },
        refreshPos: function() {
            if (ig.ua.mobile) {
                var a = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x,
                this.pos.y = ig.input.mouse.y / a - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x,
            this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2
        },
        update: function() {
            this.refreshPos();
            var b = null,
            c = -1;
            for (a = this.objectArray.length - 1; a > -1; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && this.hoveringItem != b && this.hoveringItem.leave(), null != this.hoveringItem && "function" == typeof this.hoveringItem.over && this.hoveringItem == b && this.hoveringItem.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null),
            this.isClicking && !this.firstClick ? this.firstClick = !0 : this.isReleased && this.firstClick && (this.firstClick = !1),
            this.isClicking = ig.input.pressed("click"),
            this.isReleased = ig.input.released("click")
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 5e3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 15,
            y: 15
        },
        init: function(a, b, c) {
            this.parent(a, b, c)
        }
    })
}),
ig.baked = !0,
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
}),
ig.baked = !0,
ig.module("game.entities.audio-toggle").requires("impact.entity").defines(function() {
    EntityAudioToggle = ig.Entity.extend({
        zIndex: 3e3,
        toggleAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/mute.png", 54, 56), 0, [0, 1, 2, 3]),
        togglePos: {
            x: 0,
            y: 0
        },
        toggleRect: {
            x: -27,
            y: -28,
            w: 54,
            h: 56
        },
        toggleOffset: {
            x: 0,
            y: 0
        },
        toggleAlpha: 1,
        toggleDown: !1,
        pointer: null,
        control: null,
        hidden: !1,
        init: function(a, b, c) {
            this.parent(a, b, c)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0],
            (this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]) || (this.control = ig.game.getEntitiesByType(EntityGameControl)[0]),
            this.control || (this.control = ig.game.getEntitiesByType(EntityShopControl)[0])
        },
        draw: function() {
            if (!this.hidden) {
                var a = ig.system.context,
                b = this.pos.x + this.togglePos.x + this.toggleOffset.x + this.toggleRect.x,
                c = this.pos.y + this.togglePos.y + this.toggleOffset.y + this.toggleRect.y;
                this.toggleDown && (c += 2),
                a.save(),
                a.globalAlpha = this.toggleAlpha,
                this.toggleAnim.draw(b, c),
                a.restore()
            }
        },
        update: function() {
            this.hidden || this.checkClicks()
        },
        aabbCheck: function(a, b) {
            return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1
        },
        checkClicks: function() {
            var a, b;
            this.pointer.refreshPos(),
            a = {},
            a.x = this.pointer.pos.x + this.pointer.size.x / 2,
            a.y = this.pointer.pos.y + this.pointer.size.y / 2,
            a.w = 1,
            a.h = 1,
            b = {},
            b.x = this.pos.x + this.togglePos.x + this.toggleRect.x,
            b.y = this.pos.y + this.togglePos.y + this.toggleRect.y,
            b.w = this.toggleRect.w,
            b.h = this.toggleRect.h,
            this.toggleDown = !1,
            this.toggleAnim.tile = 0,
            ig.game.muted || (this.toggleAnim.tile = 1),
            this.aabbCheck(a, b) && (ig.ua.mobile || (this.toggleAnim.tile = 2), ig.input.state("click") && (this.toggleDown = !0, this.toggleAnim.tile = 3), ig.input.released("click") && (this.toggleDown = !1, ig.ua.mobile || (this.toggleAnim.tile = 2), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), ig.game.muted ? this.unmuteAudio() : this.muteAudio(), ig.ua.mobile && (this.toggleAnim.tile = 0, ig.game.muted || (this.toggleAnim.tile = 1))))
        },
        muteAudio: function() {
            ig.game.muted = !0,
            ig.soundHandler.setMusicVolume(0),
            ig.soundHandler.setSfxVolume(0),
            ig.game.savePlayerStats()
        },
        unmuteAudio: function() {
            ig.game.muted = !1,
            ig.soundHandler.setMusicVolume(ig.game.musicVolume),
            ig.soundHandler.setSfxVolume(ig.game.sfxVolume),
            ig.game.savePlayerStats()
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.shop-control").requires("impact.entity").defines(function() {
    EntityShopControl = ig.Entity.extend({
        zIndex: 2e3,
        pointer: null,
        control: null,
        coinImage: new ig.Image("media/graphics/game/ui/game/coinicon.png"),
        coinRect: {
            x: 20,
            y: 75,
            w: 41,
            h: 42
        },
        coinCountPos: {
            x: 75,
            y: 106
        },
        lifeImage: new ig.Image("media/graphics/game/ui/game/lifeicon.png"),
        lifeRect: {
            x: 320,
            y: 350,
            w: 40,
            h: 40
        },
        titleImage: new ig.Image("media/graphics/game/ui/game/shop-title.png"),
        titlePos: {
            x: 243,
            y: 46
        },
        panelGreyImage: new ig.Image("media/graphics/game/ui/game/shop-panel0.png"),
        panelImage: new ig.Image("media/graphics/game/ui/game/shop-panel1.png"),
        panelPos: {
            x: 202,
            y: 179
        },
        panelOffset: {
            x: 0,
            y: 0
        },
        panelAlpha: 1,
        itemImage: [new ig.Image("media/graphics/game/ui/game/skateboard.png"), new ig.Image("media/graphics/game/ui/game/skates.png"), new ig.Image("media/graphics/game/ui/game/rocket.png"), new ig.Image("media/graphics/game/ui/game/carpet.png"), new ig.Image("media/graphics/game/ui/game/hoverboard.png")],
        itemId: 0,
        itemPos: {
            x: 254,
            y: 257
        },
        itemTextPos: {
            x: 320,
            y: 248
        },
        arrowSheet: new ig.AnimationSheet("media/graphics/game/ui/game/arrow.png", 50, 46),
        arrowRightAnimUp: null,
        arrowRightAnimDown: null,
        arrowRightAnim: null,
        arrowRightRect: {
            x: 470,
            y: 270,
            w: 50,
            h: 46
        },
        arrowLeftAnimUp: null,
        arrowLeftAnimDown: null,
        arrowLeftAnim: null,
        arrowLeftRect: {
            x: 120,
            y: 270,
            w: 50,
            h: 46
        },
        buttonSheet: new ig.AnimationSheet("media/graphics/game/ui/game/shop-button.png", 119, 65),
        buttonAnimUp: null,
        buttonAnimDown: null,
        buttonAnim: null,
        buttonRect: {
            x: 259,
            y: 420,
            w: 119,
            h: 65
        },
        buttonOffset: {
            x: 0,
            y: 0
        },
        homeSheet: new ig.AnimationSheet("media/graphics/game/ui/game/home.png", 50, 50),
        homeAnimUp: null,
        homeAnimDown: null,
        homeAnim: null,
        homeRect: {
            x: 295,
            y: 530,
            w: 50,
            h: 50
        },
        homeOffset: {
            x: 0,
            y: 0
        },
        skateboardPrice: 1e3,
        hidden: !0,
        showDone: !1,
        hideDone: !1,
        isShowing: !1,
        isHiding: !1,
        showTime: 0,
        showDuration: .5,
        hideTime: 0,
        hideDuration: .5,
        alpha: 0,
        pagingLeft: !1,
        pagingRight: !1,
        pagingTime: 0,
        init: function(a, b, c) {
            this.parent(a, b, c),
            this.titlePos.x = ig.system.width / 2 - this.titleImage.width / 2,
            this.panelPos.x = ig.system.width / 2 - this.panelImage.width / 2,
            this.itemPos.x = this.panelPos.x + 52,
            this.itemPos.y = this.panelPos.y + 78,
            this.itemTextPos.x = ig.system.width / 2,
            this.itemTextPos.y = this.panelPos.y + 55,
            this.buttonRect.x = ig.system.width / 2 - 61,
            this.homeRect.x = ig.system.width / 2 - 25,
            this.buttonAnimUp = new ig.Animation(this.buttonSheet, .1, [0]),
            this.buttonAnimDown = new ig.Animation(this.buttonSheet, .1, [1]),
            this.buttonAnim = this.buttonAnimUp,
            this.homeAnimUp = new ig.Animation(this.homeSheet, .1, [0]),
            this.homeAnimDown = new ig.Animation(this.homeSheet, .1, [1]),
            this.homeAnim = this.homeAnimUp,
            this.arrowLeftAnimUp = new ig.Animation(this.arrowSheet, .1, [0]),
            this.arrowLeftAnimDown = new ig.Animation(this.arrowSheet, .1, [1]),
            this.arrowLeftAnim = this.arrowLeftAnimUp,
            this.arrowLeftAnimUp.flip.x = !0,
            this.arrowLeftAnimDown.flip.x = !0,
            this.arrowRightAnimUp = new ig.Animation(this.arrowSheet, .1, [0]),
            this.arrowRightAnimDown = new ig.Animation(this.arrowSheet, .1, [1]),
            this.arrowRightAnim = this.arrowRightAnimUp,
            this.arrowLeftRect.x = ig.system.width / 2 - 200,
            this.arrowRightRect.x = ig.system.width / 2 + 150,
            this.lifeRect.x = this.panelPos.x + this.panelImage.width - 45,
            ig.game.getItemUpgradeEquipped(0) ? this.itemId = 0 : ig.game.getItemUpgradeEquipped(1) ? this.itemId = 1 : ig.game.getItemUpgradeEquipped(2) ? this.itemId = 2 : ig.game.getItemUpgradeEquipped(3) ? this.itemId = 3 : ig.game.getItemUpgradeEquipped(4) && (this.itemId = 4)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0],
            this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]
        },
        draw: function() {
            if (!this.hidden && 0 != this.alpha) {
                if (ig.system.context.globalAlpha = .5 * this.alpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1, ig.system.context.globalAlpha = this.alpha, this.titleImage.draw(this.titlePos.x, this.titlePos.y), ig.system.context.globalAlpha = this.panelAlpha, ig.game.getItemUpgradeStatus(this.itemId) ? this.panelImage.draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y) : this.panelGreyImage.draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y), this.itemImage[this.itemId].draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y), ig.system.context.textAlign = "center", ig.system.context.font = "18px mainfont, Helvetica, Verdana", ig.system.context.fillStyle = "#1A4283", ig.system.context.fillText(ig.game.getItemUpgradeName(this.itemId), this.itemTextPos.x + this.panelOffset.x, this.itemTextPos.y + this.panelOffset.y), !ig.game.getItemUpgradeStatus(this.itemId)) {
                    this.buttonAnim.draw(this.buttonRect.x, this.buttonRect.y),
                    ig.system.context.textAlign = "center",
                    ig.system.context.font = "16px mainfont, Helvetica, Verdana",
                    ig.system.context.fillStyle = "#1A4283";
                    var a = this.buttonRect.x - 17 + this.buttonRect.w / 2 + this.buttonOffset.x,
                    b = this.buttonRect.y - 27 + this.buttonRect.h + this.buttonOffset.y;
                    ig.system.context.fillText(ig.game.getItemUpgradePrice(this.itemId), a, b)
                }
                ig.game.getItemUpgradeEquipped(this.itemId) && (a = ig.system.context, a.save(), a.translate(this.lifeRect.x + this.panelOffset.x, this.lifeRect.y + this.panelOffset.y), a.rotate( - Math.PI / 8), this.lifeImage.draw( - this.lifeRect.w / 2, -this.lifeRect.h), a.textAlign = "center", a.font = "16px mainfont, Helvetica, Verdana", a.fillStyle = "#000000", a.fillText(_STRINGS.UI.using, 2, 22), a.fillStyle = "#e45309", a.fillText(_STRINGS.UI.using, 0, 20), a.restore()),
                ig.system.context.globalAlpha = 1,
                this.arrowLeftAnim.draw(this.arrowLeftRect.x, this.arrowLeftRect.y),
                this.arrowRightAnim.draw(this.arrowRightRect.x, this.arrowRightRect.y),
                this.homeAnim.draw(this.homeRect.x, this.homeRect.y),
                this.coinImage.draw(this.coinRect.x, this.coinRect.y),
                ig.system.context.textAlign = "left",
                ig.system.context.font = "20px mainfont, Helvetica, Verdana",
                ig.system.context.fillStyle = "#000000",
                ig.system.context.fillText(ig.game.money, this.coinCountPos.x + 2, this.coinCountPos.y + 2),
                ig.system.context.fillStyle = "#ffffff",
                ig.system.context.fillText(ig.game.money, this.coinCountPos.x, this.coinCountPos.y),
                ig.system.context.globalAlpha = 1
            }
        },
        show: function() {
            this.hidden = !1,
            this.isShowing = !0,
            this.hideDone = this.showDone = !1,
            this.showTime = ig.system.clock.delta();
            var a = this.showDuration;
            this.offset.y = ig.system.height,
            this.tweenObj = this.tween({
                offset: {
                    x: 0,
                    y: 0
                }
            },
            a, {
                easing: ig.Tween.Easing.Elastic.EaseOut,
                entity: this,
                onComplete: function() {
                    this.entity.showDone = !0,
                    this.entity.isShowing = !1
                }
            }),
            this.tweenObj.start(),
            ig.game.visitedShop = !0,
            ig.game.savePlayerStats()
        },
        hide: function() {
            this.isHiding = !0,
            this.hideDone = this.showDone = !1,
            this.hideTime = ig.system.clock.delta();
            var a = this.hideDuration;
            this.offset.y = 0,
            this.tweenObj = this.tween({
                offset: {
                    x: 0,
                    y: ig.system.height
                }
            },
            a, {
                easing: ig.Tween.Easing.Elastic.EaseIn,
                entity: this,
                onComplete: function() {
                    this.entity.hideDone = !0,
                    this.entity.hidden = !0,
                    this.entity.isHiding = !1,
                    this.entity.control.unpause()
                }
            }),
            this.tweenObj.start()
        },
        update: function() {
            if (!this.hidden) {
                if (this.isShowing) {
                    var a = ig.system.clock.delta() - this.showTime;
                    a > this.showDuration / 2 && (a = this.showDuration / 2),
                    a /= this.showDuration / 2,
                    this.control.mainMenuAlpha = 1 - a,
                    a = ig.system.clock.delta() - this.showTime,
                    a >= this.showDuration / 2 && (a -= this.showDuration / 2, a > this.showDuration / 2 && (a = this.showDuration / 2), this.alpha = a /= this.showDuration / 2)
                }
                this.isHiding && (a = ig.system.clock.delta() - this.hideTime, a > this.hideDuration / 2 && (a = this.hideDuration / 2), a /= this.hideDuration / 2, this.alpha = 1 - a, a = ig.system.clock.delta() - this.hideTime, a >= this.hideDuration / 2 && (a -= this.hideDuration / 2, a > this.hideDuration / 2 && (a = this.hideDuration / 2), a /= this.hideDuration / 2, this.control.mainMenuAlpha = a)),
                this.tweenObj && this.tweenObj.update(),
                this.showDone && this.checkClicks(),
                this.pagingRight && (a = ig.system.clock.delta() - this.pagingTime, .5 >= a ? (a /= .5, this.panelAlpha = 1 - a * a, this.panelOffset.x -= 200 * ig.system.tick) : 1 >= a ? (.5 >= a - ig.system.tick && (this.panelOffset.x = 100, this.itemId += 1, this.itemId >= this.itemImage.length && (this.itemId = 0)), a = (a - .5) / .5, this.panelAlpha = a * a, this.panelOffset.x -= 200 * ig.system.tick) : (this.pagingRight = !1, this.panelOffset.x = 0)),
                this.pagingLeft && (a = ig.system.clock.delta() - this.pagingTime, .5 >= a ? (a /= .5, a > 1 && (a = 1), this.panelAlpha = 1 - a * a, this.panelOffset.x += 200 * ig.system.tick) : 1 >= a ? (.5 >= a - ig.system.tick && (this.panelOffset.x = -100, this.itemId -= 1, 0 > this.itemId && (this.itemId = this.itemImage.length - 1)), a = (a - .5) / .5, a > 1 && (a = 1), this.panelAlpha = a * a, this.panelOffset.x += 200 * ig.system.tick) : (this.pagingLeft = !1, this.panelOffset.x = 0))
            }
        },
        aabbCheck: function(a, b) {
            return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1
        },
        checkClicks: function() {
            var a, b;
            this.pointer.refreshPos(),
            a = {},
            a.x = this.pointer.pos.x,
            a.y = this.pointer.pos.y,
            a.w = this.pointer.size.x,
            a.h = this.pointer.size.y,
            ig.game.getItemUpgradeStatus(this.itemId) || this.pagingLeft || this.pagingRight || (this.aabbCheck(a, this.buttonRect) ? (ig.input.state("click") && (this.buttonAnim = this.buttonAnimDown, this.buttonOffset.y = 2), ig.input.released("click") && (this.buttonAnim = this.buttonAnimUp, this.buttonOffset.y = 0, b = ig.game.getItemUpgradePrice(this.itemId), ig.game.money >= b && (ig.game.money -= b, ig.game.setItemUpgradeStatus(this.itemId, !0), ig.game.setItemUpgradeEquipped(this.itemId, !0), ig.game.savePlayerStats(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)))) : (this.buttonAnim = this.buttonAnimUp, this.buttonOffset.y = 0)),
            ig.game.getItemUpgradeStatus(this.itemId) && !this.pagingLeft && !this.pagingRight && (b = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            },
            b.x = this.panelPos.x, b.y = this.panelPos.y, b.w = this.panelImage.width, b.h = this.panelImage.height, this.aabbCheck(a, b) && ig.input.released("click") && (ig.game.getItemUpgradeEquipped(this.itemId) ? ig.game.setItemUpgradeEquipped(this.itemId, !1) : ig.game.setItemUpgradeEquipped(this.itemId, !0), ig.game.savePlayerStats(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))),
            this.aabbCheck(a, this.homeRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown), ig.input.released("click") && (this.homeAnim = this.homeAnimUp, ig.game.savePlayerStats(), this.hide(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp,
            this.aabbCheck(a, this.arrowRightRect) ? (ig.input.state("click") && (this.arrowRightAnim = this.arrowRightAnimDown), ig.input.released("click") && (this.arrowRightAnim = this.arrowRightAnimUp, this.doPageRight(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.arrowRightAnim = this.arrowRightAnimUp,
            this.aabbCheck(a, this.arrowLeftRect) ? (ig.input.state("click") && (this.arrowLeftAnim = this.arrowLeftAnimDown), ig.input.released("click") && (this.arrowLeftAnim = this.arrowLeftAnimUp, this.doPageLeft(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.arrowLeftAnim = this.arrowLeftAnimUp
        },
        doPageLeft: function() { ! this.pagingLeft && !this.pagingRight && (this.pagingLeft = !0, this.pagingTime = ig.system.clock.delta())
        },
        doPageRight: function() { ! this.pagingRight && !this.pagingLeft && (this.pagingRight = !0, this.pagingTime = ig.system.clock.delta())
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.home-control").requires("impact.entity", "game.entities.button-more-games", "game.entities.audio-toggle", "game.entities.shop-control").defines(function() {
    EntityHomeControl = ig.Entity.extend({
        zIndex: 100,
        isHome: !0,
        bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.jpg"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        time: 1,
        playButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/playgame.png", 110, 64), 0, [0, 1, 2]),
        playButtonPos: {
            x: 0,
            y: 590
        },
        playButtonRect: {
            x: -55,
            y: -32,
            w: 110,
            h: 64
        },
        playButtonOffset: {
            x: 0,
            y: 0
        },
        playButtonAlpha: 1,
        playButtonDown: !1,
        shopButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/shop.png", 72, 76), 0, [0, 1, 2]),
        shopButtonPos: {
            x: 0,
            y: 593
        },
        shopButtonRect: {
            x: -36,
            y: -38,
            w: 72,
            h: 76
        },
        shopButtonOffset: {
            x: 0,
            y: 0
        },
        shopButtonAlpha: 1,
        shopButtonDown: !1,
        infoButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/info.png", 54, 56), 0, [0, 1, 2]),
        infoButtonPos: {
            x: 0,
            y: 38
        },
        infoButtonRect: {
            x: -27,
            y: -28,
            w: 54,
            h: 56
        },
        infoButtonOffset: {
            x: 0,
            y: 0
        },
        infoButtonAlpha: 1,
        infoButtonDown: !1,
        moregamesButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
        moregamesButtonPos: {
            x: 41,
            y: 598
        },
        moregamesButtonRect: {
            x: -31,
            y: -21,
            w: 62,
            h: 42
        },
        moregamesButtonOffset: {
            x: 0,
            y: 0
        },
        moregamesButtonAlpha: 1,
        moregamesButtonDown: !1,
        pointer: null,
        moregames: null,
        audiotoggle: null,
        shop: null,
        menuPaused: !1,
        mainMenuAlpha: 1,
        init: function(a, b, c) {
            this.parent(a, b, c),
            ig.global.wm || (0 < ig.soundHandler.musicVolume ? ig.soundHandler.bgmPlaying || (ig.soundHandler.playBackgroundMusic(), ig.soundHandler.setMusicVolume(ig.game.musicVolume), ig.soundHandler.setSfxVolume(ig.game.sfxVolume)) : ig.soundHandler.stopBackgroundMusic(), this.playButtonPos.x = ig.system.width / 2, this.shopButtonPos.x = ig.system.width - 10 - this.shopButtonRect.w / 2, this.infoButtonPos.x = ig.system.width - 10 - this.infoButtonRect.w / 2)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0],
            this.moregames = ig.game.spawnEntity(EntityButtonMoreGames, this.moregamesButtonPos.x + this.moregamesButtonRect.x, this.moregamesButtonPos.y + this.moregamesButtonRect.y),
            this.moregames.divLayerName = "more-games",
            this.moregames.size.x = this.moregamesButtonRect.w,
            this.moregames.size.y = this.moregamesButtonRect.h,
            this.moregames.ready(),
            this.audiotoggle = ig.game.spawnEntity(EntityAudioToggle, 37, 38),
            this.audiotoggle.ready(),
            this.shop = ig.game.spawnEntity(EntityShopControl, 0, 0),
            this.shop.ready(),
            ig.game.sortEntitiesDeferred(),
            ig.global.wm || (0 < ig.soundHandler.musicVolume ? ig.soundHandler.bgmPlaying || ig.soundHandler.playBackgroundMusic() : ig.soundHandler.stopBackgroundMusic(), ig.game.doShop && (ig.game.doShop = !1, this.showShop()))
        },
        draw: function() {
            var b, c, a = ig.system.context;
            a.save(),
            this.bgImage.width < ig.system.width && a.scale(ig.system.width / this.bgImage.width, 1),
            this.bgImage.draw(0, 0),
            a.restore(),
            0 != this.mainMenuAlpha && (a.globalAlpha = this.mainMenuAlpha, this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0), b = this.playButtonPos.x + this.playButtonOffset.x + this.playButtonRect.x, c = this.playButtonPos.y + this.playButtonOffset.y + this.playButtonRect.y, this.playButtonDown && (c += 2), a.save(), a.globalAlpha = this.mainMenuAlpha * this.playButtonAlpha, this.playButtonAnim.draw(b, c), a.restore(), b = this.shopButtonPos.x + this.shopButtonOffset.x + this.shopButtonRect.x, c = this.shopButtonPos.y + this.shopButtonOffset.y + this.shopButtonRect.y, this.shopButtonDown && (c += 2), a.save(), a.globalAlpha = this.mainMenuAlpha * this.shopButtonAlpha, this.shopButtonAnim.draw(b, c), a.restore(), b = this.infoButtonPos.x + this.infoButtonOffset.x + this.infoButtonRect.x, c = this.infoButtonPos.y + this.infoButtonOffset.y + this.infoButtonRect.y, this.infoButtonDown && (c += 2), a.save(), a.globalAlpha = this.mainMenuAlpha * this.infoButtonAlpha, this.infoButtonAnim.draw(b, c), a.restore(), b = this.moregamesButtonPos.x + this.moregamesButtonOffset.x + this.moregamesButtonRect.x, c = this.moregamesButtonPos.y + this.moregamesButtonOffset.y + this.moregamesButtonRect.y, this.moregamesButtonDown && (c += 2), a.save(), a.globalAlpha = this.mainMenuAlpha * this.moregamesButtonAlpha, this.moregamesButtonImage.draw(b, c), a.restore(), a.globalAlpha = 1)
        },
        playGame: function() {
            ig.input.clearPressed(),
            this.moregames.hide(),
            ig.game.firstrun ? (ig.game.doTutorialFlag = !0, ig.game.firstrun = !1, ig.game.savePlayerStats()) : ig.game.doTutorialFlag = !1,
            ig.game.director.jumpTo(LevelGame)
        },
        playTutorial: function() {
            ig.input.clearPressed(),
            this.moregames.hide(),
            ig.game.doTutorialFlag = !0,
            ig.game.firstrun = !1,
            ig.game.savePlayerStats(),
            ig.game.director.jumpTo(LevelGame)
        },
        showShop: function() {
            this.pause(),
            this.shop.show()
        },
        hideShop: function() {
            this.shop.hide(),
            this.unpause()
        },
        pause: function() {
            this.menuPaused = !0,
            this.moregames.hide()
        },
        unpause: function() {
            this.menuPaused = !1,
            this.moregames.show()
        },
        update: function() {
            this.time += ig.system.tick,
            this.menuPaused || this.checkClicks()
        },
        aabbCheck: function(a, b) {
            return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1
        },
        checkClicks: function() {
            var a, b;
            if (this.pointer.refreshPos(), a = {},
            a.x = this.pointer.pos.x + this.pointer.size.x / 2, a.y = this.pointer.pos.y + this.pointer.size.y / 2, a.w = 1, a.h = 1, b = {},
            b.x = this.playButtonPos.x + this.playButtonRect.x, b.y = this.playButtonPos.y + this.playButtonRect.y, b.w = this.playButtonRect.w, b.h = this.playButtonRect.h, this.aabbCheck(a, b)) {
                if (this.playButtonDown = !1, this.playButtonAnim.tile = 0, ig.ua.mobile || (this.playButtonAnim.tile = 1), ig.input.state("click") && (this.playButtonDown = !0, this.playButtonAnim.tile = 2), ig.input.released("click")) return this.playButtonDown = !1,
                ig.ua.mobile || (this.playButtonAnim.tile = 1),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button),
                this.playGame(),
                void 0
            } else this.playButtonDown = !1,
            this.playButtonAnim.tile = 0;
            if (b = {},
            b.x = this.shopButtonPos.x + this.shopButtonRect.x, b.y = this.shopButtonPos.y + this.shopButtonRect.y, b.w = this.shopButtonRect.w, b.h = this.shopButtonRect.h, this.aabbCheck(a, b)) {
                if (this.shopButtonDown = !1, this.shopButtonAnim.tile = 0, ig.ua.mobile || (this.shopButtonAnim.tile = 1), ig.input.state("click") && (this.shopButtonDown = !0, this.shopButtonAnim.tile = 2), ig.input.released("click")) return this.shopButtonDown = !1,
                ig.ua.mobile || (this.shopButtonAnim.tile = 1),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button),
                this.showShop(),
                void 0
            } else this.shopButtonDown = !1,
            this.shopButtonAnim.tile = 0;
            if (b = {},
            b.x = this.infoButtonPos.x + this.infoButtonRect.x, b.y = this.infoButtonPos.y + this.infoButtonRect.y, b.w = this.infoButtonRect.w, b.h = this.infoButtonRect.h, this.aabbCheck(a, b)) {
                if (this.infoButtonDown = !1, this.infoButtonAnim.tile = 0, ig.ua.mobile || (this.infoButtonAnim.tile = 1), ig.input.state("click") && (this.infoButtonDown = !0, this.infoButtonAnim.tile = 2), ig.input.released("click")) return this.infoButtonDown = !1,
                ig.ua.mobile || (this.infoButtonAnim.tile = 1),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button),
                this.playTutorial(),
                void 0
            } else this.infoButtonDown = !1,
            this.infoButtonAnim.tile = 0;
            b = {},
            b.x = this.moregamesButtonPos.x + this.moregamesButtonRect.x,
            b.y = this.moregamesButtonPos.y + this.moregamesButtonRect.y,
            b.w = this.moregamesButtonRect.w,
            b.h = this.moregamesButtonRect.h,
            this.aabbCheck(a, b) ? (this.moregamesButtonDown = !1, ig.input.state("click") && (this.moregamesButtonDown = !0), ig.input.released("click") && (this.moregamesButtonDown = !1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.moregamesButtonDown = !1
        },
        roundRect: function(a, b, c, d, e, f, g, h) {
            "undefined" == typeof h && (h = !0),
            "undefined" == typeof f && (f = 5),
            a.beginPath(),
            a.moveTo(b + f, c),
            a.lineTo(b + d - f, c),
            a.quadraticCurveTo(b + d, c, b + d, c + f),
            a.lineTo(b + d, c + e - f),
            a.quadraticCurveTo(b + d, c + e, b + d - f, c + e),
            a.lineTo(b + f, c + e),
            a.quadraticCurveTo(b, c + e, b, c + e - f),
            a.lineTo(b, c + f),
            a.quadraticCurveTo(b, c, b + f, c),
            a.closePath(),
            h && a.stroke(),
            g && a.fill()
        }
    })
}),
ig.baked = !0,
ig.module("game.levels.home").requires("impact.image", "game.entities.home-control", "game.entities.pointer-selector").defines(function() {
    LevelHome = {
        entities: [{
            type: "EntityHomeControl",
            x: 0,
            y: 0
        },
        {
            type: "EntityPointerSelector",
            x: 0,
            y: 0
        }],
        layer: []
    }
}),
ig.baked = !0,
ig.module("game.entities.game-ui").requires("impact.entity").defines(function() {
    EntityGameUi = ig.Entity.extend({
        zIndex: 3e3,
        overlayAlpha: 1,
        homeSheet: new ig.AnimationSheet("media/graphics/game/ui/game/home.png", 50, 50),
        homeAnimUp: null,
        homeAnimDown: null,
        homeAnim: null,
        homeRect: {
            x: 582,
            y: 126,
            w: 50,
            h: 50
        },
        homeEndRect: {
            x: 270,
            y: 484,
            w: 50,
            h: 50
        },
        homeEndOffset: {
            x: 0,
            y: 0
        },
        restartSheet: new ig.AnimationSheet("media/graphics/game/ui/game/restart.png", 48, 52),
        restartAnimUp: null,
        restartAnimDown: null,
        restartAnim: null,
        restartEndRect: {
            x: 320,
            y: 483,
            w: 48,
            h: 52
        },
        restartEndOffset: {
            x: 0,
            y: 0
        },
        pauseSheet: new ig.AnimationSheet("media/graphics/game/ui/game/pause.png", 37, 40),
        pauseAnimUp: null,
        pauseAnimOver: null,
        pauseAnimDown: null,
        pauseAnim: null,
        pauseRect: {
            x: 582,
            y: 26,
            w: 37,
            h: 40
        },
        pauseOffset: {
            x: 0,
            y: 0
        },
        playRect: {
            x: 615,
            y: 5,
            w: 35,
            h: 44
        },
        lifeImage: new ig.Image("media/graphics/game/ui/game/lifeicon.png"),
        lifeRect: {
            x: 502,
            y: 26,
            w: 40,
            h: 40
        },
        lifeCountPos: {
            x: 557,
            y: 56
        },
        coinImage: new ig.Image("media/graphics/game/ui/game/coinicon.png"),
        coinRect: {
            x: 20,
            y: 25,
            w: 41,
            h: 42
        },
        coinCountPos: {
            x: 75,
            y: 56
        },
        cookieImage: new ig.Image("media/graphics/game/ui/game/cookieicon.png"),
        cookieRect: {
            x: 23,
            y: 76,
            w: 35,
            h: 41
        },
        cookieCountPos: {
            x: 95,
            y: 107
        },
        powerLevelGrad: null,
        powerLevelRect: {
            x: 60,
            y: 78,
            w: 10,
            h: 34
        },
        gameOverTitleImage: new ig.Image("media/graphics/game/ui/game/gameover.png"),
        gameOverTitleRect: {
            x: 153,
            y: 131,
            w: 333,
            h: 54
        },
        gameOverTitleOffset: {
            x: 0,
            y: 0
        },
        gameOverPanelImage: new ig.Image("media/graphics/game/ui/game/gameover-panel.png"),
        gameOverPanelRect: {
            x: 219,
            y: 307,
            w: 202,
            h: 156
        },
        gameOverPanelOffset: {
            x: 0,
            y: 0
        },
        gameOverBgImage: new ig.Image("media/graphics/game/ui/game/gameover-bg.png"),
        gameOverBgRect: {
            x: 263,
            y: 209,
            w: 114,
            h: 114
        },
        gameOverBgOffset: {
            x: 0,
            y: 0
        },
        gameOverAnimSheet: new ig.AnimationSheet("media/graphics/game/ui/game/gameover-anim.png", 114, 114),
        gameOverAnim: null,
        panelIconsImage: new ig.Image("media/graphics/game/ui/game/panel-icons.png"),
        panelIconsRect: {
            x: 269,
            y: 337,
            w: 49,
            h: 106
        },
        panelIconsOffset: {
            x: 0,
            y: 0
        },
        pausedTitleImage: new ig.Image("media/graphics/game/ui/game/paused-title.png"),
        pausedTitlePos: {
            x: 0,
            y: 220
        },
        coinEndCountPos: {
            x: 339,
            y: 390
        },
        cookieEndCountPos: {
            x: 339,
            y: 443
        },
        happyBgImage: new ig.Image("media/graphics/game/ui/game/levelup-anim-bg.png"),
        happyBgRect: {
            x: -17,
            y: 533,
            w: 114,
            h: 114
        },
        happyBgOffset: {
            x: 0,
            y: 0
        },
        happyAnimSheet: new ig.AnimationSheet("media/graphics/game/ui/game/levelup-anim.png", 114, 114),
        happyAnim: null,
        happyPanelImage: new ig.Image("media/graphics/game/ui/game/levelup-panel.png"),
        happyPanelRect: {
            x: 219,
            y: 307,
            w: 202,
            h: 155
        },
        happyPanelOffset: {
            x: 0,
            y: 0
        },
        fingerImage: new ig.Image("media/graphics/game/ui/game/finger.png"),
        fingerRect: {
            x: 0,
            y: 0,
            w: 50,
            h: 50
        },
        fingerOffset: {
            x: 0,
            y: 0
        },
        tutorialUIShowTime: 0,
        tutorialUIShowingFlag: !1,
        tutorialUIHideTime: 0,
        tutorialUIHidingFlag: !1,
        tutorialUITickStartTime: 0,
        tutorialUITickFlag: !1,
        tutorialUIFadeTime: 0,
        tutorialUIFadeFlag: !1,
        tutorialUIDrawFlag: !1,
        tutorialUIAlpha: 0,
        tutorialUIOffset: {
            x: 0,
            y: 0
        },
        tutorialID: 0,
        nextTutorialID: 0,
        tutorialTextOrder: 0,
        tutorialTextAlpha: 0,
        tutorialTextRect: {
            x: 40,
            y: 470,
            w: 400,
            h: 100
        },
        tutorialTime: 0,
        control: null,
        pointer: null,
        init: function(a, b, c) {
            this.parent(a, b, c),
            this.powerLevelGrad = ig.system.context.createLinearGradient(0, 0, 0, this.powerLevelRect.h),
            this.powerLevelGrad.addColorStop(0, "#cc1e1c"),
            this.powerLevelGrad.addColorStop(1, "#f59f2a"),
            this.pauseAnimUp = new ig.Animation(this.pauseSheet, .1, [0]),
            this.pauseAnimOver = new ig.Animation(this.pauseSheet, .1, [1]),
            this.pauseAnimDown = new ig.Animation(this.pauseSheet, .1, [2]),
            this.pauseAnim = this.pauseAnimUp,
            this.homeAnimUp = new ig.Animation(this.homeSheet, .1, [0]),
            this.homeAnimDown = new ig.Animation(this.homeSheet, .1, [1]),
            this.homeAnim = this.homeAnimUp,
            this.restartAnimUp = new ig.Animation(this.restartSheet, .1, [0]),
            this.restartAnimDown = new ig.Animation(this.restartSheet, .1, [1]),
            this.restartAnim = this.restartAnimUp,
            this.gameOverAnim = new ig.Animation(this.gameOverAnimSheet, .042, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], !1),
            this.pauseRect.x = ig.system.width - 58,
            this.homeRect.x = ig.system.width - 63,
            this.lifeRect.x = ig.system.width - 158,
            this.lifeCountPos.x = ig.system.width - 103,
            this.gameOverTitleRect.x = ig.system.width / 2 - this.gameOverTitleRect.w / 2,
            this.gameOverPanelRect.x = ig.system.width / 2 - this.gameOverPanelRect.w / 2,
            this.gameOverBgRect.x = ig.system.width / 2 - this.gameOverBgRect.w / 2,
            this.panelIconsRect.x = this.gameOverPanelRect.x + 30,
            this.panelIconsRect.y = this.gameOverPanelRect.y + 21,
            this.coinEndCountPos.x = this.panelIconsRect.x + 103,
            this.coinEndCountPos.y = this.panelIconsRect.y + 43,
            this.cookieEndCountPos.x = this.panelIconsRect.x + 103,
            this.cookieEndCountPos.y = this.panelIconsRect.y + 98,
            this.homeEndRect.x = ig.system.width / 2 - this.homeEndRect.w - 40,
            this.restartEndRect.x = ig.system.width / 2 + 40,
            this.pausedTitlePos.x = ig.system.width / 2 - this.pausedTitleImage.width / 2,
            this.happyAnim = new ig.Animation(this.happyAnimSheet, .084, [0, 1, 2, 3, 4], !0),
            this.tutorialTextRect.x = ig.system.width / 2 - this.tutorialTextRect.w / 2,
            this.happyBgRect.x = this.tutorialTextRect.x - this.happyBgRect.w / 2,
            this.happyBgRect.y = this.tutorialTextRect.y + this.tutorialTextRect.h / 2 - this.happyBgRect.h / 2,
            this.tutorialTextRect.w += this.happyBgRect.w / 2
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0],
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            var a = ig.system.context;
            a.fillStyle = this.control.bgHorizonLinGrad,
            a.fillRect(0, 121, ig.system.width, 195),
            this.drawGameStats(),
            this.drawTutorialUI(),
            this.control.gamePaused && (ig.system.context.globalAlpha = .5, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1, this.pausedTitleImage.draw(this.pausedTitlePos.x, this.pausedTitlePos.y)),
            this.control.gamePaused && (a = ig.system.clock.delta() % 2, a > 1 && (a = 1 - (a - 1)), ig.system.context.globalAlpha = .25 + .75 * a),
            this.pauseAnim.draw(this.pauseRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x, this.pauseRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y),
            this.control.gamePaused && (ig.system.context.globalAlpha = 1, this.homeAnim.draw(this.homeRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x, this.homeRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y)),
            this.drawGameOver(),
            (this.control.gameStarting || this.control.gameEnding) && (ig.system.context.globalAlpha = this.overlayAlpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1)
        },
        drawGameStats: function() {
            var a, b, c, d;
            myCoins = this.control.coinsCollected,
            this.lifeImage.draw(this.lifeRect.x, this.lifeRect.y),
            ig.system.context.textAlign = "left",
            ig.system.context.font = "20px mainfont, Helvetica, Verdana",
            ig.system.context.fillStyle = "#000000",
            ig.system.context.fillText(this.control.lifeCount, this.lifeCountPos.x + 2, this.lifeCountPos.y + 2),
            ig.system.context.fillStyle = "#ffffff",
            ig.system.context.fillText(this.control.lifeCount, this.lifeCountPos.x, this.lifeCountPos.y),
            this.coinImage.draw(this.coinRect.x, this.coinRect.y),
            ig.system.context.textAlign = "left",
            ig.system.context.font = "20px mainfont, Helvetica, Verdana",
            ig.system.context.fillStyle = "#000000",
            ig.system.context.fillText(this.control.coinsCollected, this.coinCountPos.x + 2, this.coinCountPos.y + 2),
            ig.system.context.fillStyle = "#ffffff",
            ig.system.context.fillText(this.control.coinsCollected, this.coinCountPos.x, this.coinCountPos.y),
            this.cookieImage.draw(this.cookieRect.x, this.cookieRect.y),
            ig.system.context.textAlign = "left",
            ig.system.context.font = "20px mainfont, Helvetica, Verdana",
            ig.system.context.fillStyle = "#000000",
            ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x + 2, this.cookieCountPos.y + 2),
            ig.system.context.fillStyle = "#ffffff",
            ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x, this.cookieCountPos.y),
            a = ig.system.context,
            a.save(),
            b = this.powerLevelRect.w,
            c = this.powerLevelRect.h,
            d = this.control.powerLevel,
            a.translate(this.powerLevelRect.x, this.powerLevelRect.y),
            a.fillStyle = "#000000",
            a.strokeStyle = "#000000",
            a.lineWidth = 0,
            a.fillRect(2, 2, b, c),
            a.fillStyle = this.powerLevelGrad,
            a.fillRect(0, (1 - d) * c, b, d * c),
            a.strokeStyle = "#ffffff",
            a.lineWidth = 3,
            a.strokeRect(0, 0, b, c),
            a.restore()
        },
        drawGameOver: function() {
            if (this.control.gameOver) {
                var a = ig.system.clock.delta() - this.control.gameOverTime;
                a > .5 && (a = .5),
                ig.system.context.globalAlpha = .75 * a / .5,
                ig.system.context.fillStyle = "#000000",
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
                ig.system.context.globalAlpha = 1,
                this.gameOverTitleImage.draw(this.gameOverTitleRect.x + this.gameOverTitleOffset.x, this.gameOverTitleRect.y + this.gameOverTitleOffset.y),
                this.gameOverPanelImage.draw(this.gameOverPanelRect.x + this.gameOverPanelOffset.x, this.gameOverPanelRect.y + this.gameOverPanelOffset.y),
                this.panelIconsImage.draw(this.panelIconsRect.x + this.panelIconsOffset.x, this.panelIconsRect.y + this.panelIconsOffset.y),
                ig.system.context.textAlign = "center",
                ig.system.context.font = "24px mainfont, Helvetica, Verdana",
                ig.system.context.fillStyle = "#000000",
                ig.system.context.fillText(this.control.coinsCollected, this.coinEndCountPos.x + 2, this.coinEndCountPos.y + 2),
                ig.system.context.fillStyle = "#ffffff",
                ig.system.context.fillText(this.control.coinsCollected, this.coinEndCountPos.x, this.coinEndCountPos.y),
                ig.system.context.textAlign = "center",
                ig.system.context.font = "24px mainfont, Helvetica, Verdana",
                ig.system.context.fillStyle = "#000000",
                ig.system.context.fillText(ig.game.cookies, this.cookieEndCountPos.x + 2, this.cookieEndCountPos.y + 2),
                ig.system.context.fillStyle = "#ffffff",
                ig.system.context.fillText(ig.game.cookies, this.cookieEndCountPos.x, this.cookieEndCountPos.y),
                this.gameOverBgImage.draw(this.gameOverBgRect.x + this.gameOverBgOffset.x, this.gameOverBgRect.y + this.gameOverBgOffset.y),
                this.gameOverAnim.draw(this.gameOverBgRect.x + this.gameOverBgOffset.x, this.gameOverBgRect.y + this.gameOverBgOffset.y),
                this.homeAnim.draw(this.homeEndRect.x + this.homeEndOffset.x, this.homeEndRect.y + this.homeEndOffset.y),
                this.restartAnim.draw(this.restartEndRect.x + this.restartEndOffset.x, this.restartEndRect.y + this.restartEndOffset.y)
            }
        },
        drawFPS: function() {
            ig.system.context.fillStyle = "#ffffff",
            ig.system.context.font = "20px mainfont, Helvetica, Verdana",
            ig.system.context.textAlign = "center",
            ig.system.context.fillText(ig.game.fps, ig.system.width / 2, 40)
        },
        aabbCheck: function(a, b) {
            return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1
        },
        checkMainClicks: function() {
            var b, a = !1;
            this.pointer.refreshPos(),
            b = {},
            b.x = this.pointer.pos.x,
            b.y = this.pointer.pos.y,
            b.w = this.pointer.size.x,
            b.h = this.pointer.size.y,
            this.control.gameOver ? (!a && this.aabbCheck(b, this.restartEndRect) ? (ig.input.state("click") && (this.restartAnim = this.restartAnimDown), ig.input.released("click") && (this.restartAnim = this.restartAnimUp, this.control.restartGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)), a = !0) : this.restartAnim = this.restartAnimUp, !a && this.aabbCheck(b, this.homeEndRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown), ig.input.released("click") && (this.homeAnim = this.homeAnimUp, this.control.quitGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp) : (!a && this.aabbCheck(b, this.pauseRect) ? (ig.input.state("click") && (this.pauseAnim = this.pauseAnimDown), ig.input.released("click") && (this.pauseAnim = this.pauseAnimOver, this.control.togglePauseGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)), a = !0) : (this.pauseAnim = this.pauseAnimUp, this.control.gamePaused && (this.pauseAnim = this.pauseAnimDown)), this.control.gamePaused && (!a && this.aabbCheck(b, this.homeRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown), ig.input.released("click") && (this.homeAnim = this.homeAnimUp, this.control.quitGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp))
        },
        update: function() {
            if (this.checkMainClicks(), this.control.gameOver && this.gameOverAnim.update(), this.control.gameStarting) {
                var a = ig.system.clock.delta() - this.control.gameStartTime,
                a = a / .25;
                a > 1 && (a = 1),
                this.overlayAlpha = 1 - a
            } else this.control.gameEnding && (a = ig.system.clock.delta() - this.control.gameEndTime, a /= .25, a > 1 && (a = 1), this.overlayAlpha = a);
            this.control.tutorialMode && !this.control.gamePaused && (this.tutorialTime += ig.system.tick),
            this.updateTutorialUI()
        },
        drawTime: function(a, b, c, d) {
            if (!isNaN(this.control.gameTime)) {
                a = Math.floor(this.control.gameTime / 60),
                b = Math.floor(this.control.gameTime % 60),
                10 > b && (b = "0" + b);
                var e = _STRINGS.UI.TIME + ": " + a + ":" + b;
                c = ig.system.context.measureText(e).width,
                d = ig.system.context.measureText("m").width,
                a = ig.system.width / 2 - c / 2,
                b = ig.system.height / 2 + d / 3 + 30,
                ig.system.context.fillText(e, a, b)
            }
        },
        drawArrow: function(a, b, c, d) {
            var h, i, j, k, e = c - a,
            f = d - b,
            g = Math.sqrt(e * e + f * f);
            0 != g && (e /= g, h = f / g, f = c - 10 * e, g = d - 10 * h, i = -h, h = f + 10 * i, j = g + 10 * e, i = f - 10 * i, e = g - 10 * e, k = ig.system.context, k.fillStyle = "#000000", k.beginPath(), k.moveTo(c, d), k.lineTo(h, j), k.lineTo(i, e), k.closePath(), k.fill(), k.strokeStyle = "#000000", k.lineWidth = 10, k.beginPath(), k.moveTo(f, g), k.lineTo(a, b), k.stroke())
        },
        roundRect: function(a, b, c, d, e, f, g, h) {
            "undefined" == typeof h && (h = !0),
            "undefined" == typeof f && (f = 5),
            a.beginPath(),
            a.moveTo(b + f, c),
            a.lineTo(b + d - f, c),
            a.quadraticCurveTo(b + d, c, b + d, c + f),
            a.lineTo(b + d, c + e - f),
            a.quadraticCurveTo(b + d, c + e, b + d - f, c + e),
            a.lineTo(b + f, c + e),
            a.quadraticCurveTo(b, c + e, b, c + e - f),
            a.lineTo(b, c + f),
            a.quadraticCurveTo(b, c, b + f, c),
            a.closePath(),
            h && a.stroke(),
            g && a.fill()
        },
        checkTutorialClicks: function() {
            if (! (!this.control.tutorialMode || this.tutorialUIHidingFlag || this.tutorialUIShowingFlag || this.tutorialUITickFlag || 0 != this.control.tutorialStage && 1 != this.control.tutorialStage && 2 != this.control.tutorialStage && 13 != this.control.tutorialStage)) {
                this.pointer.refreshPos();
                var a = {};
                a.x = this.pointer.pos.x,
                a.y = this.pointer.pos.y,
                a.w = this.pointer.size.x,
                a.h = this.pointer.size.y,
                this.aabbCheck(a, this.tutorialTextRect) && ig.input.released("click") && (this.control.doNextTutorialStage(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)),
                ig.input.released("enter") && (this.control.doNextTutorialStage(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))
            }
        },
        updateTutorialUI: function() {
            var a, b;
            this.tutorialUIDrawFlag && (this.tutorialUIShowingFlag ? (a = 1 - this.tutorialUIOffset.x / ig.system.width, 0 > a && (a = 0), a > 1 && (a = 1), this.tutorialUIAlpha = .25 + .75 * a, 0 < this.tutorialUIOffset.x ? this.tutorialUIOffset.x -= 2e3 * ig.system.tick: 0 > this.tutorialUIOffset.x && (this.tutorialUIOffset.x += 2e3 * ig.system.tick, 0 <= this.tutorialUIOffset.x && (this.tutorialUIOffset.x = 0, this.tutorialUIShowingFlag = !1, this.happyAnim.rewind(), this.tutorialUITickStartTime = ig.system.clock.delta(), this.tutorialUITickFlag = !0, this.tutorialUIAlpha = 1))) : this.tutorialUIHidingFlag && (a = this.tutorialUIOffset.x / -ig.system.width, 0 > a && (a = 0), a > 1 && (a = 1), this.tutorialUIAlpha = .25 + .75 * (1 - a), this.tutorialUIOffset.x -= 2e3 * ig.system.tick, this.tutorialUIOffset.x <= -ig.system.width && (this.tutorialUITickFlag = this.tutorialUIFadeFlag = this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = this.tutorialUIHidingFlag = !1, this.tutorialUIAlpha = this.tutorialTextAlpha = 0)), this.tutorialUITickFlag ? (a = (_STRINGS.Tutorial[this.tutorialID][0] + _STRINGS.Tutorial[this.tutorialID][1]).length, b = (ig.system.clock.delta() - this.tutorialUITickStartTime) / (.02 * a), b > 1 && (b = 1), this.tutorialTextOrder = Math.floor(b * a), b >= 1 && (this.tutorialUITickFlag = !1, this.tutorialTextOrder = a), this.tutorialTextAlpha = 1) : this.tutorialUIFadeFlag && (b = (ig.system.clock.delta() - this.tutorialUIFadeTime) / .25, b >= 1 ? (this.tutorialID = this.nextTutorialID, this.tutorialUIFadeFlag = !1, this.happyAnim.rewind(), this.tutorialUITickStartTime = ig.system.clock.delta(), this.tutorialUITickFlag = !0, this.tutorialTextOrder = this.tutorialTextAlpha = 0) : this.tutorialTextAlpha = 1 - b), !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && (this.happyAnim.update(), this.tutorialUITickFlag || this.checkTutorialClicks()))
        },
        showTutorialUI: function(a) {
            this.tutorialUIDrawFlag ? this.tutorialUIHidingFlag ? (this.tutorialUIHidingFlag = !1, this.tutorialUIShowingFlag = !0, this.tutorialUIShowTime = ig.system.clock.delta(), this.tutorialUIOffset.x = ig.system.width, this.happyAnim.rewind(), this.tutorialID = a, this.tutorialTextAlpha = this.tutorialTextOrder = 0) : (this.tutorialUIFadeFlag = !0, this.tutorialUIFadeTime = ig.system.clock.delta(), this.nextTutorialID = a) : (this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = !0, this.tutorialUIShowTime = ig.system.clock.delta(), this.tutorialUIOffset.x = ig.system.width, this.happyAnim.rewind(), this.tutorialID = a, this.tutorialTextAlpha = this.tutorialTextOrder = 0)
        },
        hideTutorialUI: function() {
            this.tutorialUIHidingFlag = !0,
            this.tutorialUIHideTime = ig.system.clock.delta()
        },
        drawTutorialUI: function() {
            var a, b, c, d, e;
            this.tutorialUIDrawFlag && (a = ig.system.context, a.globalAlpha = this.tutorialUIAlpha, a.save(), a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", b = this.tutorialTextRect.x + this.tutorialUIOffset.x, c = this.tutorialTextRect.y + this.tutorialUIOffset.y, d = this.tutorialTextRect.w, e = this.tutorialTextRect.h, this.roundRect(a, b, c, d, e, 20, !0, !1), a.restore(), a.globalAlpha = 1, this.tutorialUIShowingFlag || this.drawText(), this.tutorialUIShowingFlag || this.tutorialUIHidingFlag || this.tutorialUITickFlag || this.tutorialUIFadeFlag || 0 != this.control.tutorialStage && 1 != this.control.tutorialStage && 2 != this.control.tutorialStage && 13 != this.control.tutorialStage || !(.5 < ig.system.clock.delta() - this.control.tutorialPausedTime) || (b = b + d - 20, c = c + e - 10, d = this.tutorialTime % 2, d > 1 && (d = 2 - d), d = .25 + .75 * d, a.save(), a.font = "12px mainfont, Helvetica, Verdana", a.translate(b, c), a.textAlign = "right", a.fillStyle = "rgba(255,255,255," + d + ")", a.fillText(_STRINGS.UI["continue"], 0, 0), a.restore()), !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUIFadeFlag && (3 == this.control.tutorialStage ? this.drawJumpInstructions() : 5 == this.control.tutorialStage ? this.drawRightInstructions() : 7 == this.control.tutorialStage || 9 == this.control.tutorialStage ? this.drawLeftInstructions() : 11 == this.control.tutorialStage && this.drawSlideInstructions()), a.globalAlpha = this.tutorialUIAlpha, this.happyBgImage.draw(this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x, this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y), this.happyAnim.draw(this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x, this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y), a.globalAlpha = 1)
        },
        drawText: function() {
            var a, b, c, d, e, f;
            0 != this.tutorialTextOrder && (b = this.tutorialTextRect.x + this.tutorialUIOffset.x, c = this.tutorialTextRect.y + this.tutorialUIOffset.y, b += 80, c += 28, d = ig.system.context, a = this.tutorialTextOrder, e = _STRINGS.Tutorial[this.tutorialID][0], f = _STRINGS.Tutorial[this.tutorialID][1], a < e.length ? (e = e.substr(0, a), f = "") : a < e.length + f.length && (f = f.substr(0, a - e.length)), d.save(), d.font = "16px mainfont, Helvetica, Verdana", a = 2 * d.measureText("m").width / 3, d.translate(b, c + a), d.textAlign = "left", d.fillStyle = "rgba(255,255,255," + this.tutorialTextAlpha + ")", d.fillText(e, 0, 0), d.translate(0, 4 * a / 2), d.fillText(f, 0, 0), d.restore())
        },
        drawJumpInstructions: function() {
            var b, c, d, e, a = ig.system.context;
            ig.ua.mobile ? (b = ig.system.width / 2 + 200, c = this.tutorialTextRect.y - 50, d = 0, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 40, c - 140, 80, 180, 10, !0, !1), d = this.tutorialTime % 1.5, d >= 0 && .5 > d ? (e = d / .25, e > 1 && (e = 1), d = -Math.PI / 8 + (1 - e) * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d)) : d >= .5 && .75 > d ? (e = (d - .5) / .25, e > 1 && (e = 1), d = -Math.PI / 8, 0 > d && (d = 2 * Math.PI + d), c -= 100 * e) : (e = (d - .75) / .25, e > 1 && (e = 1), d = -Math.PI / 8 + e * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d), c -= 100), a.save(), a.translate(b, c), a.rotate(d), this.fingerImage.draw( - this.fingerImage.width / 2, -this.fingerImage.height / 2), a.restore()) : (b = ig.system.width / 2 + 150, c = this.tutorialTextRect.y - 100, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 75, c - 30, 150, 105, 10, !0, !1), d = this.tutorialTime % 2, d > 1 && (d = 2 - d), a.globalAlpha = .25 + .75 * d, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c + 10, b, c - 10), a.globalAlpha = 1, c += 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c - 10, b, c + 10), b -= 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b + 10, c, b - 10, c), b += 90, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b - 10, c, b + 10, c))
        },
        drawSlideInstructions: function() {
            var b, c, d, e, a = ig.system.context;
            ig.ua.mobile ? (b = ig.system.width / 2 + 200, c = this.tutorialTextRect.y - 50 - 100, d = 0, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 40, c - 40, 80, 180, 10, !0, !1), d = this.tutorialTime % 1.5, d >= 0 && .5 > d ? (e = d / .25, e > 1 && (e = 1), d = -Math.PI / 8 + (1 - e) * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d)) : d >= .5 && .75 > d ? (e = (d - .5) / .25, e > 1 && (e = 1), d = -Math.PI / 8, 0 > d && (d = 2 * Math.PI + d), c += 100 * e) : (e = (d - .75) / .25, e > 1 && (e = 1), d = -Math.PI / 8 + e * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d), c += 100), a.save(), a.translate(b, c), a.rotate(d), this.fingerImage.draw( - this.fingerImage.width / 2, -this.fingerImage.height / 2), a.restore()) : (b = ig.system.width / 2 + 150, c = this.tutorialTextRect.y - 100, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 75, c - 30, 150, 105, 10, !0, !1), a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c + 10, b, c - 10), d = this.tutorialTime % 2, d > 1 && (d = 2 - d), a.globalAlpha = .25 + .75 * d, c += 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c - 10, b, c + 10), a.globalAlpha = 1, b -= 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b + 10, c, b - 10, c), b += 90, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b - 10, c, b + 10, c))
        },
        drawLeftInstructions: function() {
            var b, c, d, e, a = ig.system.context;
            ig.ua.mobile ? (b = ig.system.width / 2 + 200, c = this.tutorialTextRect.y - 50, d = 0, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 140, c - 40, 180, 80, 10, !0, !1), d = this.tutorialTime % 1.5, d >= 0 && .5 > d ? (e = d / .25, e > 1 && (e = 1), d = -Math.PI / 8 + (1 - e) * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d)) : d >= .5 && .75 > d ? (e = (d - .5) / .25, e > 1 && (e = 1), d = -Math.PI / 8, 0 > d && (d = 2 * Math.PI + d), b -= 100 * e) : (e = (d - .75) / .25, e > 1 && (e = 1), d = -Math.PI / 8 + e * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d), b -= 100), a.save(), a.translate(b, c), a.rotate(d), this.fingerImage.draw( - this.fingerImage.width / 2, -this.fingerImage.height / 2), a.restore()) : (b = ig.system.width / 2 + 150, c = this.tutorialTextRect.y - 100, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 75, c - 30, 150, 105, 10, !0, !1), a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c + 10, b, c - 10), c += 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c - 10, b, c + 10), d = this.tutorialTime % 2, d > 1 && (d = 2 - d), a.globalAlpha = .25 + .75 * d, b -= 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b + 10, c, b - 10, c), a.globalAlpha = 1, b += 90, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b - 10, c, b + 10, c))
        },
        drawRightInstructions: function() {
            var b, c, d, e, a = ig.system.context;
            ig.ua.mobile ? (b = ig.system.width / 2 + 100, c = this.tutorialTextRect.y - 50, d = 0, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 40, c - 40, 180, 80, 10, !0, !1), d = this.tutorialTime % 1.5, d >= 0 && .5 > d ? (e = d / .25, e > 1 && (e = 1), d = -Math.PI / 8 + (1 - e) * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d)) : d >= .5 && .75 > d ? (e = (d - .5) / .25, e > 1 && (e = 1), d = -Math.PI / 8, 0 > d && (d = 2 * Math.PI + d), b += 100 * e) : (e = (d - .75) / .25, e > 1 && (e = 1), d = -Math.PI / 8 + e * Math.PI / 4, 0 > d && (d = 2 * Math.PI + d), b += 100), a.save(), a.translate(b, c), a.rotate(d), this.fingerImage.draw( - this.fingerImage.width / 2, -this.fingerImage.height / 2), a.restore()) : (b = ig.system.width / 2 + 150, c = this.tutorialTextRect.y - 100, a.fillStyle = "rgba(0,0,0,0.75)", a.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(a, b - 75, c - 30, 150, 105, 10, !0, !1), a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c + 10, b, c - 10), c += 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b, c - 10, b, c + 10), b -= 45, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b + 10, c, b - 10, c), d = this.tutorialTime % 2, d > 1 && (d = 2 - d), a.globalAlpha = .25 + .75 * d, b += 90, a.fillStyle = "rgba(255,255,255,1)", a.strokeStyle = "rgba(255,255,255,1)", this.roundRect(a, b - 20, c - 20, 40, 40, 5, !0, !1), this.drawArrow(b - 10, c, b + 10, c), a.globalAlpha = 1)
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.game-character").requires("impact.entity").defines(function() {
    EntityGameCharacter = ig.Entity.extend({
        offset: {
            x: 75,
            y: 240
        },
        size: {
            x: 1,
            y: 1
        },
        charWidth: 50,
        charHeight: 50,
        runContactRect: {
            x: -25,
            y: -50,
            w: 50,
            h: 50
        },
        jumpContactRect: {
            x: -25,
            y: -100,
            w: 50,
            h: 50
        },
        jumpOffset: 0,
        jumpTime: 0,
        alpha: 1,
        zIndex: 1200,
        ballAnimSheet: new ig.AnimationSheet("media/graphics/game/character/ball_11x2.png", 150, 300),
        runAnimSheet: new ig.AnimationSheet("media/graphics/game/character/run_7x2.png", 150, 300),
        slideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/slide_5x4.png", 150, 300),
        jumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/jump_9x2.png", 150, 300),
        runAnim: null,
        slideAnim: null,
        jumpAnim: null,
        anim: null,
        skateboardRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/skaterun_8x2.png", 150, 300),
        skateboardJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/skatejump_9x2.png", 150, 300),
        rollerskateRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerrun_5x1.png", 150, 300),
        rollerskateSlideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerslide_9x2.png", 150, 300),
        rollerskateJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerjump_8x2.png", 150, 300),
        rocketRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rocketrun_7x2.png", 150, 300),
        rocketJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rocketjump_7x3.png", 150, 300),
        carpetAnimSheet: new ig.AnimationSheet("media/graphics/game/character/carpet_5x2.png", 150, 300),
        hoverboardAnimSheet: new ig.AnimationSheet("media/graphics/game/character/hoverboard_4x2.png", 150, 300),
        growTime: 0,
        growFPS: .03,
        growFrame: 0,
        growImage: [new ig.Image("media/graphics/game/character/grow-anim/frame_0000.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0001.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0002.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0003.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0004.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0005.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0006.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0007.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0008.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0009.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0010.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0011.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0012.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0013.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0014.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0015.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0016.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0017.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0018.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0019.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0020.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0021.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0022.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0023.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0024.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0025.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0026.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0027.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0028.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0029.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0030.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0031.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0032.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0033.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0034.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0035.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0036.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0037.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0038.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0039.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0040.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0041.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0042.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0043.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0044.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0045.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0046.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0047.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0048.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0049.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0050.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0051.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0052.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0053.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0054.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0055.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0056.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0057.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0058.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0059.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0060.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0061.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0062.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0063.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0064.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0065.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0066.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0067.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0068.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0069.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0070.png")],
        STATES: {
            RUN: 0,
            SLIDE: 1,
            JUMP: 2,
            POWERED: 3,
            INTRO: 4
        },
        state: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 13,
        scale: 1,
        scaleModifier: 1,
        zWidth: 1,
        invulnerableDuration: 2,
        invulnerableStartTime: 0,
        isInvulnerable: !1,
        isShaking: !1,
        shakeDuration: .25,
        shakeStartTime: 0,
        shakeOffset: {
            x: 0,
            y: 0
        },
        shakeAmount: 3,
        queuedPowerUp: !1,
        stepSoundPlayed: 0,
        stepSoundPlayedTime: 0,
        control: null,
        init: function(a, b, c) {
            this.parent(a, b, c),
            this.ballAnim = new ig.Animation(this.ballAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], !1),
            ig.game.getItemUpgradeEquipped(0) ? (this.runAnim = new ig.Animation(this.skateboardRunAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], !1), this.jumpAnim = new ig.Animation(this.skateboardJumpAnimSheet, .03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16], !0), this.slideAnim = new ig.Animation(this.slideAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18], !0)) : ig.game.getItemUpgradeEquipped(1) ? (this.runAnim = new ig.Animation(this.rollerskateRunAnimSheet, .03, [0, 1, 2, 3, 4], !1), this.jumpAnim = new ig.Animation(this.rollerskateJumpAnimSheet, .03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15], !0), this.slideAnim = new ig.Animation(this.rollerskateSlideAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17], !0)) : (ig.game.getItemUpgradeEquipped(2) ? (this.runAnim = new ig.Animation(this.rocketRunAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], !1), this.jumpAnim = new ig.Animation(this.rocketJumpAnimSheet, .03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], !0)) : ig.game.getItemUpgradeEquipped(3) ? this.jumpAnim = this.runAnim = new ig.Animation(this.carpetAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1) : ig.game.getItemUpgradeEquipped(4) ? this.jumpAnim = this.runAnim = new ig.Animation(this.hoverboardAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 7], !1) : (this.runAnim = new ig.Animation(this.runAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], !1), this.jumpAnim = new ig.Animation(this.jumpAnimSheet, .03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 15, 16], !0)), this.slideAnim = new ig.Animation(this.slideAnimSheet, .03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18], !0)),
            this.anim = this.runAnim,
            this.charWidth *= this.scaleModifier,
            this.charHeight *= this.scaleModifier,
            this.state = this.STATES.INTRO
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0],
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred(),
            this.growTime = this.control.gameTime
        },
        draw: function() {
            var a, b, c, d, e;
            this.state == this.STATES.INTRO ? (a = this.pos.x, b = this.pos.y, ig.system.context.save(), ig.system.context.translate(this.bitwiseRound(a), this.bitwiseRound(b)), ig.system.context.scale(.5, .5), this.growImage[this.growFrame].draw( - 126, -280), ig.system.context.restore()) : (a = this.bitwiseRound(this.pos.x), b = this.bitwiseRound(this.pos.y), 0 > b && (b = 0), b > 0 && (c = 1 - -this.jumpOffset / 500, 0 > c && (c = 0), d = 30 * c, e = ig.system.context, e.save(), e.translate(a, b), e.scale(1, .5), e.beginPath(), e.arc(0, 0, d, 0, 2 * Math.PI, !1), e.fillStyle = "rgba(0,0,0," + .2 * c + ")", e.fill(), e.restore()), a = this.pos.x - this.offset.x + this.shakeOffset.x, b = this.pos.y + this.jumpOffset - this.offset.y + this.shakeOffset.y, ig.system.context.globalAlpha = this.alpha, this.anim.draw(this.bitwiseRound(a), this.bitwiseRound(b)), ig.system.context.globalAlpha = 1)
        },
        update: function() {
            if (!this.control.gamePaused && !this.control.gameOver && !this.control.gameStarting) {
                if (this.parent(), this.state == this.STATES.INTRO) {
                    var a = this.control.gameTime - this.growTime;
                    if (this.growFrame = Math.floor(a / this.growFPS), this.growFrame >= this.growImage.length && (this.growFrame = this.growImage.length - 1, a > 2.5)) return this.run(),
                    void 0
                }
                this.state == this.STATES.RUN && (ig.game.getItemUpgradeEquipped(0) || ig.game.getItemUpgradeEquipped(1) ? (a = ig.system.clock.delta() - this.stepSoundPlayedTime, a > 2 && (this.stepSoundPlayedTime = ig.system.clock.delta(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.skate))) : !ig.game.getItemUpgradeEquipped(3) && !ig.game.getItemUpgradeEquipped(4) && (4 == this.runAnim.frame && 4 != this.stepSoundPlayed && (this.stepSoundPlayed = 4, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 11 == this.runAnim.frame && 11 != this.stepSoundPlayed && (this.stepSoundPlayed = 11, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)))),
                this.state == this.STATES.POWERED && (3 == this.ballAnim.frame && 3 != this.stepSoundPlayed && (this.stepSoundPlayed = 3, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 8 == this.ballAnim.frame && 8 != this.stepSoundPlayed && (this.stepSoundPlayed = 8, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 14 == this.ballAnim.frame && 14 != this.stepSoundPlayed && (this.stepSoundPlayed = 14, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 19 == this.ballAnim.frame && 19 != this.stepSoundPlayed && (this.stepSoundPlayed = 19, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step))),
                this.control.tutorialPauseMode || (this.anim.update(), this.isInvulnerable && (a = this.control.gameTime - this.invulnerableStartTime, a >= this.invulnerableDuration ? (this.alpha = 1, this.isInvulnerable = !1) : (a %= .5, a > .25 && (a = .25 - (a - .25)), this.alpha = .25 + .75 * (a / .25))), this.isShaking && (a = this.control.gameTime - this.shakeStartTime, a >= this.shakeDuration && (this.shakeOffset.x = 0, this.shakeOffset.y = 0, this.isShaking = !1)), this.queuedPowerUp && (this.state == this.STATES.RUN || this.state == this.STATES.SLIDE) && this.powerUp())
            }
        },
        run: function() {
            this.state != this.STATES.POWERED && (this.state = this.STATES.RUN, this.anim = this.runAnim, this.anim.rewind(), this.zIndex = 1200 - this.zValue, ig.game.sortEntitiesDeferred())
        },
        slide: function() {
            this.state != this.STATES.POWERED && (this.state = this.STATES.SLIDE, this.anim = this.slideAnim, this.anim.rewind(), this.zIndex = 1200 - this.zValue, this.zIndex -= 1, ig.game.sortEntitiesDeferred(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.slide))
        },
        jump: function() {
            this.jumpTime = this.control.gameTime,
            this.zIndex = 1200 - this.zValue,
            this.zIndex += 10,
            ig.game.sortEntitiesDeferred(),
            this.state != this.STATES.POWERED && !ig.game.getItemUpgradeEquipped(3) && !ig.game.getItemUpgradeEquipped(4) && (this.state = this.STATES.JUMP, this.anim = this.jumpAnim, this.anim.gotoFrame(0), this.anim.rewind()),
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.jump)
        },
        queuePowerUp: function() {
            this.queuedPowerUp = !0
        },
        powerUp: function() {
            this.queuedPowerUp = !1,
            this.state != this.STATES.POWERED && (this.state = this.STATES.POWERED, this.anim = this.ballAnim, this.anim.rewind(), this.zIndex = 1200 - this.zValue, ig.game.sortEntitiesDeferred())
        },
        powerDown: function() {
            if (0 > this.jumpOffset) {
                this.state = this.STATES.JUMP,
                this.anim = this.jumpAnim;
                var a = Math.floor((this.control.gameTime - this.jumpTime) / this.anim.frameTime);
                this.anim.rewind(),
                this.anim.gotoFrame(a)
            } else this.state = this.STATES.RUN,
            this.run();
            this.invulnerableStartTime = this.control.gameTime - 1,
            this.isInvulnerable = !0
        },
        shake: function() {
            this.isShaking = !0,
            this.shakeStartTime = this.control.gameTime,
            this.shakeOffset.x = -this.shakeAmount + 2 * Math.random() * this.shakeAmount,
            this.shakeOffset.y = -this.shakeAmount
        },
        bitwiseRound: function(a) {
            return.5 + a << 0
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.game-bgObject").requires("impact.entity").defines(function() {
    EntityGameBgObject = ig.Entity.extend({
        offset: {
            x: 140,
            y: 362
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: 0,
            y: 0
        },
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/bg00.png"), new ig.Image("media/graphics/game/objects/bg01.png"), new ig.Image("media/graphics/game/objects/bg02.png"), new ig.Image("media/graphics/game/objects/bg03.png"), new ig.Image("media/graphics/game/objects/bg04.png"), new ig.Image("media/graphics/game/objects/bg05.png"), new ig.Image("media/graphics/game/objects/bg06.png"), new ig.Image("media/graphics/game/objects/bg07.png"), new ig.Image("media/graphics/game/objects/bg08.png"), new ig.Image("media/graphics/game/objects/bg09.png"), new ig.Image("media/graphics/game/objects/bg10.png"), new ig.Image("media/graphics/game/objects/bg11.png"), new ig.Image("media/graphics/game/objects/bg12.png"), new ig.Image("media/graphics/game/objects/bg13.png"), new ig.Image("media/graphics/game/objects/bg14.png"), new ig.Image("media/graphics/game/objects/bg15.png"), new ig.Image("media/graphics/game/objects/bg16.png"), new ig.Image("media/graphics/game/objects/bg17.png"), new ig.Image("media/graphics/game/objects/bg18.png"), new ig.Image("media/graphics/game/objects/bg19.png"), new ig.Image("media/graphics/game/objects/bg20.png"), new ig.Image("media/graphics/game/objects/bg21.png"), new ig.Image("media/graphics/game/objects/bg22.png"), new ig.Image("media/graphics/game/objects/bg23.png"), new ig.Image("media/graphics/game/objects/bg24.png"), new ig.Image("media/graphics/game/objects/bg25.png"), new ig.Image("media/graphics/game/objects/bg26.png"), new ig.Image("media/graphics/game/objects/bg27.png")],
        imageId: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 0,
        control: null,
        init: function(a, b, c) {
            this.parent(a, b, c)
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0],
            this.setImageId(this.imageId),
            this.scale = this.control.cameraDistance / this.zValue,
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function(a) {
            null != a && (this.imageId = a, this.image = this.images[a], this.offset.x = this.image.width / 2, this.offset.y = this.image.height)
        },
        draw: function() {
            var a = this.worldPos.x,
            b = this.worldPos.y,
            c = this.zValue,
            d = this.control.cameraDistance; - 10 > c ? (this.killed = !0, this.control.cleanObjects(), this.kill()) : (c = d / c, a = ig.system.width / 2 - this.control.cameraPos.x * c + a * c, b = this.control.cameraPos.y * c + ig.system.height - b * c - (1 - c) * (ig.system.height - this.control.vanishingPoint.y), this.pos.x = a, this.pos.y = b, a = this.control.horizonLine.y, d = this.control.horizonLine.y + this.control.distanceFogHeight, a > b || (d > b && (ig.system.context.globalAlpha = (b - a) / (d - a)), c *= this.scaleModifier, b = this.pos.y - this.offset.y * c - ig.game._rscreen.y, ig.system.context.drawImage(this.image.data, this.bitwiseRound(this.pos.x - this.offset.x * c - ig.game._rscreen.x), this.bitwiseRound(b), this.image.width * c, this.image.height * c), ig.system.context.globalAlpha = 1))
        },
        update: function() {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO && (this.control.tutorialPauseMode || this.moveForward( - this.control.runSpeed * ig.system.tick))
        },
        moveForward: function(a) {
            this.zValue += a,
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function(a) {
            return.5 + a << 0
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.game-obstacle").requires("impact.entity").defines(function() {
    EntityGameObstacle = ig.Entity.extend({
        offset: {
            x: 72,
            y: 100
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: -58,
            y: -95,
            w: 119,
            h: 92
        },
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/obstacle00.png"), new ig.Image("media/graphics/game/objects/obstacle01.png"), new ig.Image("media/graphics/game/objects/obstacle02.png"), new ig.Image("media/graphics/game/objects/obstacle03.png"), new ig.Image("media/graphics/game/objects/obstacle04.png"), new ig.Image("media/graphics/game/objects/obstacle05.png"), new ig.Image("media/graphics/game/objects/obstacle06.png"), new ig.Image("media/graphics/game/objects/obstacle07.png"), new ig.Image("media/graphics/game/objects/obstacle08.png"), new ig.Image("media/graphics/game/objects/obstacle09.png"), new ig.Image("media/graphics/game/objects/obstacle10.png"), new ig.Image("media/graphics/game/objects/obstacle11.png")],
        imageId: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 1,
        slidable: !1,
        zWidth: 0,
        knockedOut: !1,
        knockOutPos: {
            x: 0,
            y: 0
        },
        knockOutOffset: {
            x: 0,
            y: 0
        },
        knockOutGravity: 1200,
        knockOutVector: {
            x: 0,
            y: 0
        },
        knockOutAlpha: 0,
        knockOutAngle: 0,
        knockOutDirection: 1,
        knockOutStopped: !1,
        control: null,
        init: function(a, b, c) {
            this.parent(a, b, c)
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0],
            this.setImageId(this.imageId),
            this.scale = this.control.cameraDistance / this.zValue,
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function(a) {
            null != a && ((0 == a || 1 == a || 2 == a) && (a = 0 + Math.floor(3 * Math.random())), (8 == a || 9 == a) && (a = 8 + Math.floor(2 * Math.random())), (10 == a || 11 == a) && (a = 10 + Math.floor(2 * Math.random())), this.imageId = a, this.image = this.images[a], this.offset.x = this.image.width / 2, this.offset.y = this.image.height, this.slidable = 3 == a ? !0 : !1, this.contactRect.w = this.image.width * this.scaleModifier, this.contactRect.h = this.image.height / 2 * this.scaleModifier, this.contactRect.x = -this.contactRect.w / 2, this.contactRect.y = -this.contactRect.h, (5 == a || 6 == a || 8 == a || 9 == a) && (this.zWidth = 3), (10 == a || 11 == a) && (this.zWidth = 5))
        },
        draw: function() {
            var e, f, g, a = this.worldPos.x,
            b = this.worldPos.y,
            c = this.zValue,
            d = this.control.cameraDistance; - 10 > c ? (this.killed = !0, this.control.cleanObjects(), this.kill()) : (e = 0, this.knockedOut && (a += this.knockOutPos.x, b -= this.knockOutPos.y, e = this.knockOutAngle), c = d / c, a = ig.system.width / 2 - this.control.cameraPos.x * c + a * c, b = this.control.cameraPos.y * c + ig.system.height - b * c - (1 - c) * (ig.system.height - this.control.vanishingPoint.y), this.pos.x = a, this.pos.y = b, a = this.control.horizonLine.y, d = this.control.horizonLine.y + this.control.distanceFogHeight, a > b || (d > b && (ig.system.context.globalAlpha = (b - a) / (d - a)), this.knockedOut && (ig.system.context.globalAlpha *= this.knockOutAlpha), f = c * this.scaleModifier, c = this.pos.x, b = this.pos.y, a = -this.offset.x * f, d = -this.offset.y * f, g = this.image.width * f, f = this.image.height * f, 0 > g && (g = 0), 0 > f && (f = 0), ig.system.context.save(), ig.system.context.translate(c, b), e > 0 && ig.system.context.rotate(e), ig.system.context.drawImage(this.image.data, a, d, g, f), ig.system.context.restore(), ig.system.context.globalAlpha = 1))
        },
        update: function() {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO && (this.control.tutorialPauseMode || this.moveForward( - this.control.runSpeed * ig.system.tick))
        },
        moveForward: function(a) {
            this.zValue += a,
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred(),
            this.knockedOut && (this.zIndex = 2e3, ig.game.sortEntitiesDeferred(), this.knockOutPos.x += this.knockOutVector.x * ig.system.tick, this.knockOutPos.y += this.knockOutVector.y * ig.system.tick, 0 < this.knockOutPos.y && (this.knockOutPos.y = 0, this.knockOutVector.x = 0, this.knockOutVector.y = 0, this.knockOutStopped = !0), this.knockOutStopped || (this.knockOutVector.y += this.knockOutGravity * ig.system.tick, this.knockOutAngle += 3 * this.knockOutDirection * Math.PI * ig.system.tick, 0 > this.knockOutAngle && (this.knockOutAngle = 2 * Math.PI + this.knockOutAngle), this.knockOutAlpha -= 2 * ig.system.tick, 0 > this.knockOutAlpha && (this.knockOutAlpha = 0, this.knockOutStopped = !0)))
        },
        bitwiseRound: function(a) {
            return.5 + a << 0
        },
        knockOut: function() {
            if (!this.knockedOut) {
                this.knockedOut = !0;
                var a = 200 + 100 * Math.random(),
                b = 1;
                85 < this.worldPos.x ? b = 1 : -85 > this.worldPos.x ? b = -1 : .5 <= Math.random() && (b = -1),
                this.knockOutVector.x = a * b / .25,
                this.knockOutVector.y = -1200,
                this.knockOutPos.x = 0,
                this.knockOutPos.y = 0,
                this.knockOutAlpha = 1,
                this.knockOutAngle = 0,
                this.knockOutDirection = b
            }
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.game-pickup").requires("impact.entity").defines(function() {
    EntityGamePickup = ig.Entity.extend({
        offset: {
            x: 68,
            y: 126
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: -57,
            y: -109,
            w: 114,
            h: 106
        },
        zIndex: 1200,
        cookieImage: new ig.Image("media/graphics/game/pickups/cookie.png"),
        cookieOffset: {
            x: 0,
            y: 0
        },
        cookieDown: !1,
        coinAnimSheet: new ig.AnimationSheet("media/graphics/game/pickups/coin_1x10.png", 70, 66),
        anim: null,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 2,
        zWidth: 0,
        pickupId: 0,
        control: null,
        init: function(a, b, c) {
            this.parent(a, b, c),
            this.anim = new ig.Animation(this.coinAnimSheet, .08, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1),
            this.offset.x = 35,
            this.offset.y = 66,
            this.contactRect.w = 70,
            this.contactRect.h = 66,
            this.contactRect.x = -this.contactRect.w / 2,
            this.contactRect.y = -this.contactRect.h
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0],
            this.scale = this.control.cameraDistance / this.zValue,
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred()
        },
        setPickupId: function(a) {
            null != a && (this.pickupId = a, 1 == a ? (this.offset.x = this.cookieImage.width / 2, this.offset.y = this.cookieImage.height, this.contactRect.w = this.cookieImage.width, this.contactRect.h = this.cookieImage.height) : (this.offset.x = 35, this.offset.y = 66, this.contactRect.w = 70, this.contactRect.h = 66), this.contactRect.x = -this.contactRect.w / 2, this.contactRect.y = -this.contactRect.h / 2)
        },
        draw: function() {
            var e, f, a = this.worldPos.x,
            b = this.worldPos.y,
            c = this.zValue,
            d = this.control.cameraDistance; - 10 > c ? (this.killed = !0, this.control.cleanObjects(), this.kill()) : (d /= c, a = ig.system.width / 2 - this.control.cameraPos.x * d + a * d, e = this.control.cameraPos.y * d + ig.system.height - b * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y), this.pos.x = a, this.pos.y = e, c > 65 || (c > 45 && (ig.system.context.globalAlpha = 1 - (c - 45) / 20), c = d * this.scaleModifier, d = this.control.cameraPos.y * d + ig.system.height - (1 - d) * (ig.system.height - this.control.vanishingPoint.y), 0 > d && (d = 0), 1 == this.pickupId ? (d > 0 && (a = 1 - (b - this.cookieOffset.y) / 500, 0 > a && (a = 0), e = this.cookieImage.width / 4 * c * a, b = this.pos.x, f = ig.system.context, f.save(), f.translate(this.bitwiseRound(b), this.bitwiseRound(d)), f.scale(1, .5), f.beginPath(), f.arc(0, 0, e, 0, 2 * Math.PI, !1), f.fillStyle = "rgba(0,0,0," + .2 * a + ")", f.fill(), f.restore()), b = this.pos.x - (this.offset.x - this.cookieOffset.x) * c, d = this.pos.y - (this.offset.y - this.cookieOffset.y) * c, a = this.cookieImage.width * c, c *= this.cookieImage.height, a > 0 && c > 0 && ig.system.context.drawImage(this.cookieImage.data, b, d, a, c)) : (d > 0 && (a = 1 - b / 500, 0 > a && (a = 0), e = 17.5 * c * a, b = this.pos.x, f = ig.system.context, f.save(), f.translate(this.bitwiseRound(b), this.bitwiseRound(d)), f.scale(1, .5), f.beginPath(), f.arc(0, 0, e, 0, 2 * Math.PI, !1), f.fillStyle = "rgba(0,0,0," + .2 * a + ")", f.fill(), f.restore()), b = this.pos.x - this.offset.x * c, d = this.pos.y - this.offset.y * c, ig.system.context.save(), ig.system.context.translate(this.bitwiseRound(b), this.bitwiseRound(d)), ig.system.context.scale(c, c), this.anim.draw(0, 0), ig.system.context.restore()), ig.system.context.globalAlpha = 1))
        },
        update: function() { ! this.control.gamePaused && !this.control.gameOver && !this.control.gameStarting && this.control.character.state != this.control.character.STATES.INTRO && !this.control.tutorialPauseMode && (this.moveForward( - this.control.runSpeed * ig.system.tick), 1 == this.pickupId ? this.cookieDown ? (this.cookieOffset.y += 60 * ig.system.tick, 0 <= this.cookieOffset.y && (this.cookieOffset.y = -this.cookieOffset.y, this.cookieDown = !1)) : (this.cookieOffset.y -= 60 * ig.system.tick, -20 >= this.cookieOffset.y && (this.cookieOffset.y = -20 - (this.cookieOffset.y + 20), this.cookieDown = !0)) : this.anim.update())
        },
        moveForward: function(a) {
            this.zValue += a,
            this.zIndex = 1200 - this.zValue,
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function(a) {
            return.5 + a << 0
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.game-hiteffect").requires("impact.entity").defines(function() {
    EntityGameHiteffect = ig.Entity.extend({
        offset: {
            x: 150,
            y: 150
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: 0,
            y: 0
        },
        zIndex: 1300,
        explodeAnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion_4x2.png", 300, 300),
        explode2AnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion2_4x2.png", 300, 300),
        explodeAnim: null,
        explode2Anim: null,
        anim: null,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        angle: 0,
        alpha: 1,
        timeAlive: 0,
        effectDuration: .3,
        effectId: 0,
        control: null,
        init: function(a, b, c) {
            this.parent(a, b, c),
            this.explodeAnim = new ig.Animation(this.explodeAnimSheet, this.effectDuration / 7, [0, 1, 2, 3, 4, 5, 6], !0),
            this.anim = this.explode2Anim = new ig.Animation(this.explode2AnimSheet, this.effectDuration / 8, [0, 1, 2, 3, 4, 5, 6, 7], !0),
            this.angle = 2 * Math.random() * Math.PI
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        setEffectId: function(a) {
            this.effectId = a,
            1 == a ? (this.anim = this.explodeAnim, this.offset.y = 150, this.scaleModifier = .8) : this.anim = this.explode2Anim
        },
        draw: function() {
            var a = this.scale * this.scaleModifier,
            b = this.bitwiseRound(this.pos.x),
            c = this.bitwiseRound(this.pos.y),
            d = this.bitwiseRound( - this.offset.x),
            e = this.bitwiseRound( - this.offset.y);
            ig.system.context.save(),
            ig.system.context.globalAlpha = this.alpha,
            ig.system.context.translate(b, c),
            ig.system.context.rotate(this.angle),
            ig.system.context.scale(a, a),
            this.anim.draw(d, e),
            ig.system.context.restore()
        },
        update: function() {
            if (!this.control.gamePaused && (this.anim.update(), this.timeAlive += ig.system.tick, this.timeAlive > this.effectDuration && (this.killed = !0, this.control.cleanEffects(), this.kill()), 1 == this.effectId)) {
                var a = this.timeAlive / this.effectDuration;
                a > 1 && (a = 1),
                0 > a && (a = 0),
                a > .5 && (this.alpha = 1 - (a - .5) / .5)
            }
        },
        bitwiseRound: function(a) {
            return.5 + a << 0
        }
    })
}),
ig.baked = !0,
ig.module("game.entities.game-control").requires("impact.entity", "game.entities.game-ui", "game.entities.game-character", "game.entities.game-bgObject", "game.entities.game-obstacle", "game.entities.game-pickup", "game.entities.game-hiteffect").defines(function() {
    EntityGameControl = ig.Entity.extend({
        zIndex: 100,
        cityImage: new ig.Image("media/graphics/game/backgrounds/cityscape.png"),
        cityPos: {
            x: 0,
            y: 122
        },
        cloudImage: [new ig.Image("media/graphics/game/backgrounds/cloud0.png"), new ig.Image("media/graphics/game/backgrounds/cloud1.png"), new ig.Image("media/graphics/game/backgrounds/cloud2.png")],
        cloudPos: [{
            x: 0,
            y: 0
        },
        {
            x: 0,
            y: 0
        },
        {
            x: 0,
            y: 0
        }],
        gameStarting: !0,
        gameEnding: !1,
        gamePaused: !1,
        gameOver: !1,
        ui: null,
        character: null,
        gameStartTime: 0,
        gameTime: 0,
        gameOverTime: 0,
        tutorialMode: !1,
        tutorialPauseMode: !1,
        tutorialStage: 0,
        tutorialStopDistance: 0,
        tutorialPausedTime: 0,
        vanishingPoint: {
            x: 240,
            y: 80
        },
        horizonLine: {
            x: 0,
            y: 164
        },
        distanceFogHeight: 22,
        sidewalk1ScreenPoints: Array(4),
        sidewalk2ScreenPoints: Array(4),
        roadScreenPoints: Array(4),
        roadLine1ScreenPoints: Array(4),
        roadLine2ScreenPoints: Array(4),
        laneLine1ScreenPoints: Array(4),
        laneLine2ScreenPoints: Array(4),
        grass1ScreenPoints: Array(4),
        grass2ScreenPoints: Array(4),
        cameraPos: {
            x: 0,
            y: 0,
            z: 0
        },
        sidewalkPos: {
            x: 0,
            y: 0
        },
        sidewalkWidth: 950,
        sidewalkColor: {
            r: 214,
            g: 220,
            b: 230
        },
        sidewalk1Pos: {
            x: -373,
            y: 0
        },
        sidewalk1Width: 200,
        sidewalk2Pos: {
            x: 373,
            y: 0
        },
        sidewalk2Width: 200,
        roadPos: {
            x: 0,
            y: 0
        },
        roadWidth: 526,
        roadColor: {
            r: 89,
            g: 100,
            b: 106
        },
        roadLine1Pos: {
            x: 268,
            y: 0
        },
        roadLine1Width: 10,
        roadLine1Color: {
            r: 120,
            g: 141,
            b: 175
        },
        roadLine2Pos: {
            x: -268,
            y: 0
        },
        roadLine2Width: 10,
        roadLine2Color: {
            r: 120,
            g: 141,
            b: 175
        },
        laneLine1Pos: {
            x: -95,
            y: 0,
            z: 0
        },
        laneLine1Width: 15,
        laneLine1Color: {
            r: 255,
            g: 255,
            b: 255
        },
        laneLine2Pos: {
            x: 95,
            y: 0,
            z: 0
        },
        laneLine2Width: 15,
        laneLine2Color: {
            r: 255,
            g: 255,
            b: 255
        },
        roadZOffset: 0,
        laneLineLength: 4,
        cameraDistance: 10,
        vanishingPointOffset: {
            x: 0,
            y: 0
        },
        runSpeed: 15,
        maxRunSpeed: 20,
        acceleration: 1 / 60,
        jumpGravity: 2e3,
        jumpAmt: 0,
        canSlide: !0,
        isSliding: !1,
        slideDuration: 1,
        slideTime: 0,
        objects: [],
        effects: [],
        segments: [],
        bgSets: [],
        segmentSize: 30,
        bgSetSize: 90,
        segmentSizeVariable: 5,
        totalDistance: 0,
        lastBgSetDistance: 0,
        lastSegmentDistance: 0,
        bgSetDefinitions: [[{
            id: 11,
            x: -350,
            y: 0,
            z: 0
        },
        {
            id: 6,
            x: -350,
            y: 0,
            z: 3
        },
        {
            id: 12,
            x: -300,
            y: 10,
            z: 7
        },
        {
            id: 7,
            x: -350,
            y: 0,
            z: 9
        },
        {
            id: 10,
            x: -350,
            y: -10,
            z: 12
        },
        {
            id: 13,
            x: -360,
            y: 0,
            z: 16.95
        },
        {
            id: 8,
            x: -350,
            y: 0,
            z: 17
        },
        {
            id: 9,
            x: -350,
            y: 0,
            z: 21
        },
        {
            id: 27,
            x: -350,
            y: 0,
            z: 24
        },
        {
            id: 26,
            x: -350,
            y: 0,
            z: 27
        },
        {
            id: 11,
            x: -350,
            y: 0,
            z: 30
        },
        {
            id: 6,
            x: -350,
            y: 0,
            z: 33
        },
        {
            id: 12,
            x: -300,
            y: 10,
            z: 37
        },
        {
            id: 7,
            x: -350,
            y: 0,
            z: 39
        },
        {
            id: 10,
            x: -350,
            y: -10,
            z: 42
        },
        {
            id: 13,
            x: -360,
            y: 0,
            z: 46.95
        },
        {
            id: 8,
            x: -350,
            y: 0,
            z: 47
        },
        {
            id: 9,
            x: -350,
            y: 0,
            z: 51
        },
        {
            id: 27,
            x: -350,
            y: 0,
            z: 54
        },
        {
            id: 26,
            x: -350,
            y: 0,
            z: 57
        },
        {
            id: 11,
            x: -350,
            y: 0,
            z: 60
        },
        {
            id: 6,
            x: -350,
            y: 0,
            z: 63
        },
        {
            id: 12,
            x: -300,
            y: 10,
            z: 67
        },
        {
            id: 7,
            x: -350,
            y: 0,
            z: 69
        },
        {
            id: 10,
            x: -350,
            y: -10,
            z: 72
        },
        {
            id: 13,
            x: -360,
            y: 0,
            z: 76.95
        },
        {
            id: 8,
            x: -350,
            y: 0,
            z: 77
        },
        {
            id: 9,
            x: -350,
            y: 0,
            z: 81
        },
        {
            id: 27,
            x: -350,
            y: 0,
            z: 84
        },
        {
            id: 26,
            x: -350,
            y: 0,
            z: 87
        },
        {
            id: 1,
            x: -550,
            y: 0,
            z: 8
        },
        {
            id: 4,
            x: -550,
            y: 0,
            z: 10
        },
        {
            id: 0,
            x: -650,
            y: 0,
            z: 19
        },
        {
            id: 3,
            x: -570,
            y: 0,
            z: 20
        },
        {
            id: 1,
            x: -1e3,
            y: 0,
            z: 27
        },
        {
            id: 5,
            x: -550,
            y: 0,
            z: 28
        },
        {
            id: 1,
            x: -550,
            y: 0,
            z: 38
        },
        {
            id: 4,
            x: -550,
            y: 0,
            z: 40
        },
        {
            id: 0,
            x: -650,
            y: 0,
            z: 49
        },
        {
            id: 3,
            x: -570,
            y: 0,
            z: 50
        },
        {
            id: 1,
            x: -1e3,
            y: 0,
            z: 57
        },
        {
            id: 5,
            x: -550,
            y: 0,
            z: 58
        },
        {
            id: 1,
            x: -550,
            y: 0,
            z: 68
        },
        {
            id: 4,
            x: -550,
            y: 0,
            z: 70
        },
        {
            id: 0,
            x: -650,
            y: 0,
            z: 79
        },
        {
            id: 3,
            x: -570,
            y: 0,
            z: 80
        },
        {
            id: 1,
            x: -1e3,
            y: 0,
            z: 87
        },
        {
            id: 5,
            x: -550,
            y: 0,
            z: 88
        },
        {
            id: 23,
            x: 350,
            y: 0,
            z: 0
        },
        {
            id: 19,
            x: 350,
            y: 0,
            z: 3
        },
        {
            id: 25,
            x: 300,
            y: 0,
            z: 7
        },
        {
            id: 20,
            x: 350,
            y: 0,
            z: 8
        },
        {
            id: 22,
            x: 350,
            y: 0,
            z: 11
        },
        {
            id: 17,
            x: 350,
            y: 0,
            z: 14
        },
        {
            id: 24,
            x: 350,
            y: 0,
            z: 19
        },
        {
            id: 21,
            x: 350,
            y: 0,
            z: 22
        },
        {
            id: 18,
            x: 350,
            y: 0,
            z: 26
        },
        {
            id: 23,
            x: 350,
            y: 0,
            z: 30
        },
        {
            id: 19,
            x: 350,
            y: 0,
            z: 33
        },
        {
            id: 25,
            x: 300,
            y: 0,
            z: 37
        },
        {
            id: 20,
            x: 350,
            y: 0,
            z: 38
        },
        {
            id: 22,
            x: 350,
            y: 0,
            z: 41
        },
        {
            id: 17,
            x: 350,
            y: 0,
            z: 44
        },
        {
            id: 24,
            x: 350,
            y: 0,
            z: 49
        },
        {
            id: 21,
            x: 350,
            y: 0,
            z: 52
        },
        {
            id: 18,
            x: 350,
            y: 0,
            z: 56
        },
        {
            id: 23,
            x: 350,
            y: 0,
            z: 60
        },
        {
            id: 19,
            x: 350,
            y: 0,
            z: 63
        },
        {
            id: 25,
            x: 300,
            y: 0,
            z: 67
        },
        {
            id: 20,
            x: 350,
            y: 0,
            z: 68
        },
        {
            id: 22,
            x: 350,
            y: 0,
            z: 71
        },
        {
            id: 17,
            x: 350,
            y: 0,
            z: 74
        },
        {
            id: 24,
            x: 350,
            y: 0,
            z: 79
        },
        {
            id: 21,
            x: 350,
            y: 0,
            z: 82
        },
        {
            id: 18,
            x: 350,
            y: 0,
            z: 86
        },
        {
            id: 2,
            x: 500,
            y: 0,
            z: 8
        },
        {
            id: 14,
            x: 550,
            y: 0,
            z: 9
        },
        {
            id: 15,
            x: 600,
            y: 0,
            z: 19
        },
        {
            id: 16,
            x: 550,
            y: 0,
            z: 23
        },
        {
            id: 2,
            x: 500,
            y: 0,
            z: 38
        },
        {
            id: 14,
            x: 550,
            y: 0,
            z: 39
        },
        {
            id: 15,
            x: 600,
            y: 0,
            z: 49
        },
        {
            id: 16,
            x: 550,
            y: 0,
            z: 53
        },
        {
            id: 2,
            x: 500,
            y: 0,
            z: 68
        },
        {
            id: 14,
            x: 550,
            y: 0,
            z: 69
        },
        {
            id: 15,
            x: 600,
            y: 0,
            z: 79
        },
        {
            id: 16,
            x: 550,
            y: 0,
            z: 83
        }]],
        segmentDefinitions: [[{
            id: 5,
            x: -170,
            y: 0,
            z: 17
        },
        {
            id: 0,
            x: -170,
            y: 0,
            z: 12
        },
        {
            id: 4,
            x: -170,
            y: 0,
            z: 14
        },
        {
            id: 3,
            x: 0,
            y: 0,
            z: 11
        },
        {
            id: 8,
            x: 170,
            y: 0,
            z: 12
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 17
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        },
        {
            type: 2,
            id: 1,
            x: 0,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 25
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 17
        },
        {
            id: 0,
            x: -170,
            y: 0,
            z: 14
        },
        {
            id: 4,
            x: -170,
            y: 0,
            z: 12
        },
        {
            id: 8,
            x: 170,
            y: 0,
            z: 12
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 17
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 15
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 25
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{
            id: 3,
            x: -90,
            y: 0,
            z: 11
        },
        {
            id: 8,
            x: 170,
            y: 0,
            z: 10
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 15
        },
        {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 20
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 24
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 27
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 30
        }], [{
            id: 3,
            x: -90,
            y: 0,
            z: 11
        },
        {
            id: 0,
            x: -170,
            y: 0,
            z: 15
        },
        {
            id: 8,
            x: 170,
            y: 0,
            z: 10
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 15
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 1,
            x: -175,
            y: 200,
            z: 15
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 23
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 25
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 27
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 30
        }], [{
            id: 3,
            x: 90,
            y: 0,
            z: 11
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 10
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        },
        {
            type: 2,
            id: 1,
            x: 175,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 24
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 26
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 28
        }], [{
            id: 3,
            x: 90,
            y: 0,
            z: 11
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 10
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        },
        {
            id: 8,
            x: 170,
            y: 0,
            z: 20
        },
        {
            id: 0,
            x: 0,
            y: 0,
            z: 22
        },
        {
            type: 2,
            id: 1,
            x: 0,
            y: 200,
            z: 22
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 24
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 26
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 28
        }], [{
            id: 0,
            x: -170,
            y: 0,
            z: 10
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        },
        {
            id: 3,
            x: 90,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 24
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 26
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 28
        },
        {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 24
        }], [{
            id: 0,
            x: -170,
            y: 0,
            z: 20
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 25
        },
        {
            id: 3,
            x: 90,
            y: 0,
            z: 21
        },
        {
            id: 0,
            x: 170,
            y: 0,
            z: 10
        },
        {
            id: 0,
            x: 0,
            y: 0,
            z: 10
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 10
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 200,
            z: 10
        },
        {
            type: 2,
            id: 1,
            x: 0,
            y: 0,
            z: 21
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 21
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 30
        }], [{
            id: 8,
            x: 170,
            y: 0,
            z: 12
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 17
        },
        {
            id: 3,
            x: 0,
            y: 0,
            z: 11
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 12
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 17
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        },
        {
            type: 2,
            id: 1,
            x: 0,
            y: 0,
            z: 11
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        },
        {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 25
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{
            id: 8,
            x: 170,
            y: 0,
            z: 22
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 27
        },
        {
            id: 3,
            x: 0,
            y: 0,
            z: 21
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 22
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 27
        },
        {
            id: 0,
            x: -170,
            y: 0,
            z: 7
        },
        {
            id: 0,
            x: 0,
            y: 0,
            z: 7
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 21
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 21
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 27
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 29
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 7
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 11
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 16
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 12
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 14
        },
        {
            type: 2,
            x: 0,
            y: 0,
            z: 20
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 24
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 26
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 11
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 16
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 15
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 12
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 14
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 16
        },
        {
            type: 2,
            x: 0,
            y: 0,
            z: 26
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 30
        }], [{
            id: 4,
            x: -170,
            y: 0,
            z: 11
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        },
        {
            id: 11,
            x: 170,
            y: 0,
            z: 12
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 16
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 18
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 20
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 22
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 24
        }], [{
            id: 4,
            x: -170,
            y: 0,
            z: 11
        },
        {
            id: 4,
            x: -170,
            y: 0,
            z: 17
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 23
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 28
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        },
        {
            id: 11,
            x: 170,
            y: 0,
            z: 12
        },
        {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 14
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 20
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 23
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 26
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 29
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 10
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 13
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 18
        },
        {
            id: 7,
            x: 170,
            y: 0,
            z: 12
        },
        {
            id: 7,
            x: 170,
            y: 0,
            z: 20
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 26
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 28
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 16
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 24
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 26
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 10
        },
        {
            id: 10,
            x: 170,
            y: 0,
            z: 13
        },
        {
            id: 11,
            x: 170,
            y: 0,
            z: 20
        },
        {
            id: 0,
            x: 0,
            y: 0,
            z: 12
        },
        {
            id: 0,
            x: 0,
            y: 0,
            z: 20
        },
        {
            type: 2,
            x: 0,
            y: 0,
            z: 26
        },
        {
            type: 2,
            x: 0,
            y: 0,
            z: 28
        },
        {
            type: 2,
            x: 0,
            y: 0,
            z: 30
        }]],
        tutorialDefinitions: [[{
            id: 5,
            x: -170,
            y: 0,
            z: 7
        },
        {
            id: 0,
            x: -170,
            y: 0,
            z: 12
        },
        {
            id: 4,
            x: -170,
            y: 0,
            z: 14
        },
        {
            id: 3,
            x: 0,
            y: 0,
            z: 6
        },
        {
            id: 8,
            x: 170,
            y: 0,
            z: 7
        },
        {
            id: 9,
            x: 170,
            y: 0,
            z: 12
        },
        {
            type: 2,
            id: 1,
            x: 0,
            y: 200,
            z: 6
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 12
        },
        {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 14
        },
        {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 20
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 26
        },
        {
            id: 5,
            x: -170,
            y: 0,
            z: 31
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 25
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 27
        },
        {
            type: 2,
            x: 175,
            y: 0,
            z: 29
        },
        {
            type: 2,
            x: 0,
            y: 0,
            z: 39
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 43
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 45
        },
        {
            id: 3,
            x: -90,
            y: 0,
            z: 50
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 51
        },
        {
            id: 6,
            x: 0,
            y: 0,
            z: 56
        },
        {
            id: 11,
            x: 170,
            y: 0,
            z: 52
        },
        {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 50
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 56
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 58
        },
        {
            type: 2,
            x: -175,
            y: 0,
            z: 60
        }]],
        charIsMoving: !1,
        charIsMovingLeft: !1,
        charMoveTargetX: 0,
        touchTime: 0,
        touchPos: {
            x: 0,
            y: 0
        },
        touchThreshold: 1,
        lifeCount: 3,
        coinsCollected: 0,
        powerLevel: 0,
        powerLevelUsage: .1,
        init: function(a, b, c) {
            this.parent(a, b, c),
            this.vanishingPoint.x = ig.system.width / 2,
            a = ig.system.context,
            this.bgSkyLinGrad = a.createLinearGradient(0, 0, 0, this.horizonLine.y),
            this.bgSkyLinGrad.addColorStop(0, "rgba(102,190,223,1)"),
            this.bgSkyLinGrad.addColorStop(1, "rgba(203,232,196,1)"),
            this.bgGroundLinGrad = a.createLinearGradient(0, this.horizonLine.y, 0, ig.system.height),
            this.bgGroundLinGrad.addColorStop(0, "rgba(166,212,74,1)"),
            this.bgGroundLinGrad.addColorStop(1, "rgba(110,170,70,1)"),
            this.bgHorizonLinGrad = a.createLinearGradient(0, 121, 0, 195),
            this.bgHorizonLinGrad.addColorStop(0, "rgba(255,255,194,0)"),
            this.bgHorizonLinGrad.addColorStop(.5, "rgba(255,255,194,0.5)"),
            this.bgHorizonLinGrad.addColorStop(1, "rgba(255,255,194,0)"),
            this.cityPos.x = ig.system.width / 2 - this.cityImage.width / 2,
            this.cloudPos[0].x = ig.system.width / 2 - 30,
            this.cloudPos[0].y = 20,
            this.cloudPos[1].x = ig.system.width / 2 - 120,
            this.cloudPos[1].y = 45,
            this.cloudPos[2].x = ig.system.width / 2 + 60,
            this.cloudPos[2].y = 60,
            ig.game.cookies = 0,
            this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0),
            ig.game.doTutorialFlag && (this.tutorialMode = !0)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            var a = this.cameraDistance / 13,
            a = this.cameraPos.y * a + ig.system.height - (1 - a) * (ig.system.height - this.vanishingPoint.y);
            this.character = ig.game.spawnEntity(EntityGameCharacter, ig.system.width / 2, a),
            this.character.startY = a,
            this.character.ready(),
            this.ui.ready(),
            this.spawnStartingObjects(),
            ig.game.sortEntities(),
            this.recalculateScreenPoints(),
            this.gameStartTime = ig.system.clock.delta(),
            this.tutorialMode && (this.character.run(), 0 == this.tutorialStopDistance && (this.tutorialPauseMode = !0, this.doNextTutorialStage()))
        },
        draw: function() {
            var a, b, c, d;
            for (ig.system.context.scale(1, 1), a = ig.system.context, b = null, c = null, b = this.sidewalkColor, a.fillStyle = "rgba(" + b.r + "," + b.g + "," + b.b + ",1)", c = this.sidewalk1ScreenPoints, a.beginPath(), a.moveTo(c[0].x, c[0].y), b = 1; b < c.length; b++) a.lineTo(c[b].x, c[b].y);
            for (a.closePath(), a.fill(), c = this.sidewalk2ScreenPoints, a.beginPath(), a.moveTo(c[0].x, c[0].y), b = 1; b < c.length; b++) a.lineTo(c[b].x, c[b].y);
            for (a.closePath(), a.fill(), b = this.roadColor, a.fillStyle = "rgba(" + b.r + "," + b.g + "," + b.b + ",1)", c = this.roadScreenPoints, a.beginPath(), a.moveTo(c[0].x, c[0].y), b = 1; b < c.length; b++) a.lineTo(c[b].x, c[b].y);
            for (a.closePath(), a.fill(), b = this.roadLine1Color, a.fillStyle = "rgba(" + b.r + "," + b.g + "," + b.b + ",1)", c = this.roadLine1ScreenPoints, a.beginPath(), a.moveTo(c[0].x, c[0].y), b = 1; b < c.length; b++) a.lineTo(c[b].x, c[b].y);
            for (a.closePath(), a.fill(), c = this.roadLine2ScreenPoints, a.beginPath(), a.moveTo(c[0].x, c[0].y), b = 1; b < c.length; b++) a.lineTo(c[b].x, c[b].y);
            for (a.closePath(), a.fill(), b = this.laneLine1Color, a.fillStyle = "rgba(" + b.r + "," + b.g + "," + b.b + ",1)", c = 7, d = {},
            d.x = this.laneLine1Pos.x, d.y = this.laneLine1Pos.y, d.z = this.roadZOffset, b = 0; c > b; b++) d.z += 4 * this.laneLineLength,
            this.drawPerspectiveLine(d, this.laneLineLength, this.laneLine1Width, this.laneLine1Color);
            for (d.x = this.laneLine2Pos.x, d.y = this.laneLine2Pos.y, d.z = this.roadZOffset, b = 0; c > b; b++) d.z += 4 * this.laneLineLength,
            this.drawPerspectiveLine(d, this.laneLineLength, this.laneLine2Width, this.laneLine2Color);
            for (b = this.roadLine1Color, a.fillStyle = "rgba(" + b.r + "," + b.g + "," + b.b + ",1)", c = 24, d = {
                x: -373,
                y: 0
            },
            d.z = this.roadZOffset, b = 0; c > b; b++) d.z += this.laneLineLength,
            this.drawPerspectiveLine(d, .05, 200, this.roadLine1Color);
            for (d = {
                x: 373,
                y: 0
            },
            d.z = this.roadZOffset, b = 0; c > b; b++) d.z += this.laneLineLength,
            this.drawPerspectiveLine(d, .05, 200, this.roadLine2Color);
            this.drawGround(),
            this.cityImage.draw(this.cityPos.x, this.cityPos.y)
        },
        update: function() {
            var a, b;
            if (this.gameStarting).25 < ig.system.clock.delta() - this.gameStartTime && (this.gameStarting = !1, this.gameStartTime = ig.system.clock.delta());
            else if (this.gameEnding).25 < ig.system.clock.delta() - this.gameEndTime && this.endGame();
            else if (!this.gamePaused && !this.gameOver && (this.gameTime += ig.system.tick, this.character.state != this.character.STATES.INTRO && (this.updatePlayerInput(), !this.tutorialPauseMode))) {
                if (a = this.runSpeed * ig.system.tick, this.tutorialMode && this.totalDistance + a >= this.tutorialStopDistance) {
                    if (a = this.tutorialStopDistance - this.totalDistance, a > 0) for (b = 0; b < this.objects.length; b++) this.objects[b].moveForward( - a);
                    this.doNextTutorialStage()
                }
                a > 0 && (this.totalDistance += a, this.roadZOffset -= a, this.roadZOffset < 4 * -this.laneLineLength && (this.roadZOffset += 4 * this.laneLineLength)),
                0 != this.jumpAmt ? (this.character.jumpOffset -= this.jumpAmt * ig.system.tick, 0 <= this.character.jumpOffset ? (this.jumpAmt = this.character.jumpOffset = 0, this.character.run(), this.canSlide = !0) : this.jumpAmt -= this.jumpGravity * ig.system.tick) : 0 > this.character.jumpOffset && (this.jumpAmt -= this.jumpGravity * ig.system.tick),
                this.isSliding && (this.slideTime += ig.system.tick, this.slideTime > this.slideDuration && (this.isSliding = !1, this.canSlide = !0, this.character.run())),
                this.charIsMoving && (this.charIsMovingLeft ? (this.character.pos.x -= 800 * ig.system.tick, this.character.pos.x < this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX, this.charIsMoving = !1)) : (this.character.pos.x += 800 * ig.system.tick, this.character.pos.x > this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX, this.charIsMoving = !1))),
                this.updateBgSets(),
                this.updateSegments(),
                this.updateCollisions(),
                this.runSpeed += this.acceleration * ig.system.tick,
                this.runSpeed > this.maxRunSpeed && (this.runSpeed = this.maxRunSpeed),
                this.character.state == this.character.STATES.POWERED && (this.powerLevel -= this.powerLevelUsage * ig.system.tick, 0 >= this.powerLevel && (this.powerLevel = 0, this.character.powerDown()))
            }
        },
        togglePauseGame: function() {
            this.gamePaused ? this.unpauseGame() : this.pauseGame()
        },
        pauseGame: function() {
            if (!this.gameOver && !this.gamePaused) {
                this.gamePaused = !0,
                this.character.anim.timer.pause();
                for (var a = 0; a < this.objects.length; a++) this.objects[a].anim && this.objects[a].anim.timer.pause();
                for (a = 0; a < this.effects.length; a++) this.effects[a].anim && this.effects[a].anim.timer.pause()
            }
        },
        unpauseGame: function() {
            if (this.gamePaused) {
                this.gamePaused = !1,
                this.character.anim.timer.unpause();
                for (var a = 0; a < this.objects.length; a++) this.objects[a].anim && this.objects[a].anim.timer.unpause();
                for (a = 0; a < this.effects.length; a++) this.effects[a].anim && this.effects[a].anim.timer.unpause()
            }
        },
        aabbCheck: function(a, b) {
            return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1
        },
        updatePlayerInput: function() {
            this.gamePaused || (ig.ua.mobile ? this.processTouchInput() : this.processKeyboardInput())
        },
        processKeyboardInput: function() {
            ig.input.state("left") ? this.characterMoveLeft() : ig.input.state("right") && this.characterMoveRight(),
            ig.input.state("up") && this.characterJump(),
            ig.input.state("down") && this.characterSlide()
        },
        processTouchInput: function() {
            var a, b, c, d;
            ig.input.pressed("click") ? (this.touchTime = ig.system.clock.delta(), this.pointer.refreshPos(), a = this.pointer.pos.x - this.pointer.size.x / 2, b = this.pointer.pos.y - this.pointer.size.y / 2, this.touchPos = {
                x: a,
                y: b
            }) : ig.input.released("click") && ig.system.clock.delta() - this.touchTime < this.touchThreshold && (this.pointer.refreshPos(), a = this.pointer.pos.x - this.pointer.size.x / 2, b = this.pointer.pos.y - this.pointer.size.y / 2, c = 0, d = 0, c = a - this.touchPos.x, d = b - this.touchPos.y, 300 > c * c + d * d ? a < this.character.pos.x ? this.characterMoveLeft() : this.characterMoveRight() : Math.abs(d) >= Math.abs(c) ? 0 > d ? this.characterJump() : this.characterSlide() : 0 > c ? this.characterMoveLeft() : this.characterMoveRight())
        },
        characterMoveLeft: function() {
            if (this.tutorialMode) {
                if (7 != this.tutorialStage && 9 != this.tutorialStage) return;
                if (!this.doNextTutorialStage()) return
            } ! this.charIsMoving && this.character.pos.x > ig.system.width / 2 - 130 && (this.charIsMovingLeft = this.charIsMoving = !0, this.charMoveTargetX = this.character.pos.x > ig.system.width / 2 ? ig.system.width / 2 : ig.system.width / 2 - 130)
        },
        characterMoveRight: function() {
            if (this.tutorialMode) {
                if (5 != this.tutorialStage) return;
                if (!this.doNextTutorialStage()) return
            } ! this.charIsMoving && this.character.pos.x < ig.system.width / 2 + 130 && (this.charIsMoving = !0, this.charIsMovingLeft = !1, this.charMoveTargetX = this.character.pos.x < ig.system.width / 2 ? ig.system.width / 2 : ig.system.width / 2 + 130)
        },
        characterJump: function() {
            if (this.tutorialMode) {
                if (3 != this.tutorialStage) return;
                if (!this.doNextTutorialStage()) return
            }
            this.character.pos.y == this.character.startY && this.canSlide && (this.jumpAmt = 600, this.character.jump(), this.canSlide = !1)
        },
        characterSlide: function() {
            if (this.tutorialMode) {
                if (11 != this.tutorialStage) return;
                if (!this.doNextTutorialStage()) return
            }
            0 == this.cameraPos.y && this.canSlide && (this.character.slide(), this.character.state == this.character.STATES.SLIDE && (this.isSliding = !0, this.canSlide = !1, this.slideTime = 0))
        },
        spawnCollectEffect: function(a) {
            if (a) {
                var b = null,
                b = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
                return null != b ? (b.worldPos = {
                    x: a.worldPos.x,
                    y: a.worldPos.y,
                    z: a.zValue
                },
                b.zValue = a.zValue, b.setEffectId(1), b.ready(), b.pos.x = a.pos.x, b.pos.y = a.pos.y - 10, b.zIndex = this.character.zIndex - 15, b.pos.x < ig.system.width / 2 ? b.pos.x -= 10 : b.pos.x > ig.system.width / 2 && (b.pos.x += 10), ig.game.sortEntities(), this.effects.push(b), b) : null
            }
        },
        spawnHitEffect: function() {
            var a = null,
            a = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
            return null != a ? (a.worldPos = {
                x: this.character.pos.x - ig.system.width / 2,
                y: 0,
                z: this.character.zValue
            },
            a.zValue = this.character.zValue, a.ready(), a.pos.x = this.character.pos.x, a.pos.y = this.character.pos.y - 60, ig.game.sortEntitiesDeferred(), this.effects.push(a), a) : null
        },
        drawPerspectiveInfinite: function(a, b, c) {
            var h, i, j, d = this.cameraPos.y + ig.system.height,
            e = ig.system.width / 2 - this.cameraPos.x + a.x - b / 2,
            f = (d - this.vanishingPoint.y) / (e - this.vanishingPoint.x),
            g = this.horizonLine.y;
            f = (g - (this.vanishingPoint.y - f * this.vanishingPoint.x)) / f,
            h = this.cameraPos.y + ig.system.height,
            a = ig.system.width / 2 - this.cameraPos.x + a.x + b / 2,
            i = (h - this.vanishingPoint.y) / (a - this.vanishingPoint.x),
            b = this.horizonLine.y,
            i = (b - (this.vanishingPoint.y - i * this.vanishingPoint.x)) / i,
            j = ig.system.context,
            j.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)",
            j.beginPath(),
            j.moveTo(e, d),
            j.lineTo(f, g),
            j.lineTo(i, b),
            j.lineTo(a, h),
            j.closePath(),
            j.fill()
        },
        drawPerspectiveLine: function(a, b, c) {
            var f, g, h, i, d = this.cameraDistance,
            e = a.z;
            d > e + b || (f = a.x, a = a.y, g = e, h = g + b, d > e && (g = d), b = d / (g - this.cameraPos.z), e = d / (h - this.cameraPos.z), h = ig.system.width / 2 - this.cameraPos.x * b + f * b, d = this.cameraPos.y * b + ig.system.height - a * e - (1 - b) * (ig.system.height - this.vanishingPoint.y), g = ig.system.width / 2 - this.cameraPos.x * e + f * e, a = this.cameraPos.y * e + ig.system.height - a * e - (1 - e) * (ig.system.height - this.vanishingPoint.y), d <= this.horizonLine.y || (a < this.horizonLine.y && (f = (d - a) / (h - g), a = this.horizonLine.y, g = (a - (d - f * h)) / f), f = h - c * b / 2, b = h + c * b / 2, h = g + c * e / 2, i = a, c = g - c * e / 2, e = a, a = ig.system.context, a.beginPath(), a.moveTo(f, d), a.lineTo(b, d), a.lineTo(h, i), a.lineTo(c, e), a.closePath(), a.fill()))
        },
        drawGround: function() {
            var b, a = ig.system.context;
            for (a.save(), a.fillStyle = this.bgSkyLinGrad, a.fillRect(0, 0, ig.system.width, this.horizonLine.y), b = 0; b < this.cloudImage.length; b++) this.cloudImage[b].draw(this.cloudPos[b].x, this.cloudPos[b].y);
            for (a.fillStyle = this.bgGroundLinGrad, points = this.grass1ScreenPoints, a.beginPath(), a.moveTo(points[0].x, points[0].y), b = 1; b < points.length; b++) a.lineTo(points[b].x, points[b].y);
            for (a.closePath(), a.fill(), points = this.grass2ScreenPoints, a.beginPath(), a.moveTo(points[0].x, points[0].y), b = 1; b < points.length; b++) a.lineTo(points[b].x, points[b].y);
            a.closePath(),
            a.fill()
        },
        spawnObject: function(a, b, c) {
            var f, g, d = this.cameraDistance,
            e = c.z;
            return d > e ? void 0 : (c = {
                x: c.x,
                y: c.y,
                z: c.z
            },
            d > e && (c.z = d), f = d / (c.z - this.cameraPos.z), d = ig.system.width / 2 - this.cameraPos.x * f + c.x * f, f = this.cameraPos.y * f + ig.system.height + c.y - (1 - f) * (ig.system.height - this.vanishingPoint.y), g = null, 0 == a ? (g = ig.game.spawnEntity(EntityGameBgObject, d, f), g.setImageId(b)) : 1 == a ? (g = ig.game.spawnEntity(EntityGameObstacle, d, f), g.setImageId(b)) : 2 == a && (g = ig.game.spawnEntity(EntityGamePickup, d, f), g.setPickupId(b)), null != g ? (g.worldPos = c, g.zValue = e, g.ready(), this.objects.push(g), ig.game.sortEntitiesDeferred(), g) : null)
        },
        cleanObjects: function() {
            var a, b, c, d, e;
            for (a = [], b = 0; b < this.objects.length; b++) c = this.objects[b],
            c.killed && (c.kill(), a.push(c));
            if (0 < a.length) {
                for (d = [], c = this.objects.pop(); c;) {
                    for (e = !1, b = 0; b < a.length; b++) if (a[b] == c) {
                        e = !0;
                        break
                    }
                    e || d.push(c),
                    c = this.objects.pop()
                }
                this.objects = d
            }
        },
        cleanEffects: function() {
            var a, b, c, d, e;
            for (a = [], b = 0; b < this.effects.length; b++) c = this.effects[b],
            c.killed && (c.kill(), a.push(c));
            if (0 < a.length) {
                for (d = [], c = this.effects.pop(); c;) {
                    for (e = !1, b = 0; b < a.length; b++) if (a[b] == c) {
                        e = !0;
                        break
                    }
                    e || d.push(c),
                    c = this.effects.pop()
                }
                this.effects = d
            }
        },
        spawnStartingObjects: function() {
            var b, c, d, e, a = 30 * Math.random();
            for (this.lastBgSetDistance = -a, b = 0; 2 > b; b++) {
                for (c = [], a = this.bgSetDefinitions.length, a = Math.floor(Math.random() * a), a = this.bgSetDefinitions[a], d = 0; d < a.length; d++) e = a[d],
                e = this.spawnObject(0, e.id, {
                    x: e.x,
                    y: e.y,
                    z: this.lastBgSetDistance - this.totalDistance + e.z
                }),
                c.push(e);
                this.bgSets.push(c),
                this.lastBgSetDistance += this.bgSetSize
            }
            if (this.tutorialMode) {
                for (this.lastSegmentDistance = 10, a = this.tutorialDefinitions[0], b = [], d = 0; d < a.length; d++) e = a[d],
                c = e.type,
                null == c && (c = 1),
                e = this.spawnObject(c, e.id, {
                    x: e.x,
                    y: e.y,
                    z: this.lastSegmentDistance + e.z
                }),
                b.push(e);
                this.segments.push(b),
                this.lastSegmentDistance += 120
            } else {
                for (this.lastSegmentDistance = 70, a = this.segmentDefinitions.length, a = Math.floor(Math.random() * a), a = this.segmentDefinitions[a], b = [], d = 0; d < a.length; d++) e = a[d],
                c = e.type,
                null == c && (c = 1),
                e = this.spawnObject(c, e.id, {
                    x: e.x,
                    y: e.y,
                    z: this.lastSegmentDistance + e.z
                }),
                b.push(e);
                this.segments.push(b),
                a = Math.floor(Math.random() * this.segmentSizeVariable),
                this.lastSegmentDistance += this.segmentSize + a
            }
            ig.game.sortEntitiesDeferred()
        },
        updateBgSets: function() {
            var a, b, c, d;
            if (! (this.totalDistance <= this.lastBgSetDistance - this.bgSetSize)) {
                for (this.bgSets.splice(0, 1), a = [], b = this.bgSetDefinitions.length, b = Math.floor(Math.random() * b), b = this.bgSetDefinitions[b], c = 0; c < b.length; c++) d = b[c],
                d = this.spawnObject(0, d.id, {
                    x: d.x,
                    y: d.y,
                    z: this.lastBgSetDistance - this.totalDistance + d.z
                }),
                a.push(d);
                this.bgSets.push(a),
                this.lastBgSetDistance += this.bgSetSize,
                ig.game.sortEntitiesDeferred()
            }
        },
        updateSegments: function() {
            var a, b, c, d, e, f;
            for (a = [], b = 0; b < this.segments.length; b++) {
                for (c = this.segments[b], d = !0, e = 0; e < c.length; e++) if (f = c[e], f && !f.killed) {
                    d = !1;
                    break
                }
                d && a.push(c)
            }
            if (0 < a.length) {
                for (c = [], f = this.segments.pop(); f;) {
                    for (d = !1, b = 0; b < a.length; b++) if (a[b] == f) {
                        d = !0;
                        break
                    }
                    d || c.push(f),
                    f = this.segments.pop()
                }
                this.segments = c
            }
            if (! (this.totalDistance <= this.lastSegmentDistance - this.bgSetSize)) {
                for (b = this.segmentDefinitions.length, b = Math.floor(Math.random() * b), a = this.segmentDefinitions[b], c = [], b = 0; b < a.length; b++) f = a[b],
                d = f.type,
                null == d && (d = 1),
                f = this.spawnObject(d, f.id, {
                    x: f.x,
                    y: f.y,
                    z: this.lastSegmentDistance - this.totalDistance + f.z
                }),
                c.push(f);
                this.segments.push(c),
                b = Math.floor(Math.random() * this.segmentSizeVariable),
                this.lastSegmentDistance += this.segmentSize + b,
                ig.game.sortEntitiesDeferred()
            }
        },
        updateCollisions: function() {
            var c, d, e, f, g, a = this.character.pos.x - ig.system.width / 2,
            b = 0;
            for (0 > this.character.jumpOffset && (b = 200), c = {},
            c.w = this.character.charWidth, c.h = this.character.charHeight, c.x = this.character.worldPos.x + a - c.w / 2, c.y = -(this.character.worldPos.y + b) - c.h, a = 0; a < this.segments.length; a++) for (b = this.segments[a], d = 0; d < b.length; d++) e = b[d],
            e.hit || (f = this.character.zValue - this.character.zWidth, g = f + 2 * this.character.zWidth, 2 == e.objType && (f -= this.character.zWidth / 2, g += this.character.zWidth / 2), !(e.zValue + e.zWidth >= f && e.zValue <= g) || 1 == e.objType && e.slidable && this.isSliding || (f = {},
            f.w = e.contactRect.w, f.h = e.contactRect.h, f.x = e.worldPos.x - f.w / 2, f.y = -e.worldPos.y - f.h, this.aabbCheck(c, f) && (e.hit = !0, 2 == e.objType ? (e.killed = !0, this.cleanObjects(), e.kill(), this.collectPickup(e.pickupId), this.spawnCollectEffect(e)) : this.character.isInvulnerable || (this.hitObstacle(e), this.spawnHitEffect(), this.character.shake()))))
        },
        recalculateScreenPoints: function() {
            var c, d, e, f, g, a = null,
            b = null,
            h = null,
            i = null,
            a = this.sidewalk1Pos,
            b = this.sidewalk1Width;
            d = this.cameraPos.y + ig.system.height,
            c = ig.system.width / 2 - this.cameraPos.x + a.x - b / 2,
            e = (d - this.vanishingPoint.y) / (c - this.vanishingPoint.x),
            h = this.vanishingPoint.y - e * this.vanishingPoint.x,
            f = this.horizonLine.y,
            e = (f - h) / e,
            h = this.cameraPos.y + ig.system.height,
            b = ig.system.width / 2 - this.cameraPos.x + a.x + b / 2,
            g = (h - this.vanishingPoint.y) / (b - this.vanishingPoint.x),
            i = this.vanishingPoint.y - g * this.vanishingPoint.x,
            a = this.horizonLine.y,
            g = (a - i) / g,
            this.sidewalk1ScreenPoints[0] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(d)
            },
            this.sidewalk1ScreenPoints[1] = {
                x: this.bitwiseRound(e),
                y: this.bitwiseRound(f)
            },
            this.sidewalk1ScreenPoints[2] = {
                x: this.bitwiseRound(g),
                y: this.bitwiseRound(a)
            },
            this.sidewalk1ScreenPoints[3] = {
                x: this.bitwiseRound(b),
                y: this.bitwiseRound(h)
            },
            this.grass1ScreenPoints[0] = {
                x: 0,
                y: this.horizonLine.y
            },
            this.grass1ScreenPoints[1] = {
                x: this.bitwiseRound(e) + 1,
                y: this.bitwiseRound(f)
            },
            this.grass1ScreenPoints[2] = {
                x: this.bitwiseRound(c) + 1,
                y: this.bitwiseRound(d)
            },
            this.grass1ScreenPoints[3] = {
                x: 0,
                y: ig.system.height
            },
            a = this.sidewalk2Pos,
            b = this.sidewalk2Width,
            d = this.cameraPos.y + ig.system.height,
            c = ig.system.width / 2 - this.cameraPos.x + a.x - b / 2,
            e = (d - this.vanishingPoint.y) / (c - this.vanishingPoint.x),
            h = this.vanishingPoint.y - e * this.vanishingPoint.x,
            f = this.horizonLine.y,
            e = (f - h) / e,
            h = this.cameraPos.y + ig.system.height,
            b = ig.system.width / 2 - this.cameraPos.x + a.x + b / 2,
            g = (h - this.vanishingPoint.y) / (b - this.vanishingPoint.x),
            i = this.vanishingPoint.y - g * this.vanishingPoint.x,
            a = this.horizonLine.y,
            g = (a - i) / g,
            this.sidewalk2ScreenPoints[0] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(d)
            },
            this.sidewalk2ScreenPoints[1] = {
                x: this.bitwiseRound(e),
                y: this.bitwiseRound(f)
            },
            this.sidewalk2ScreenPoints[2] = {
                x: this.bitwiseRound(g),
                y: this.bitwiseRound(a)
            },
            this.sidewalk2ScreenPoints[3] = {
                x: this.bitwiseRound(b),
                y: this.bitwiseRound(h)
            },
            this.grass2ScreenPoints[0] = {
                x: ig.system.width,
                y: this.horizonLine.y
            },
            this.grass2ScreenPoints[1] = {
                x: this.bitwiseRound(g) - 1,
                y: this.bitwiseRound(a)
            },
            this.grass2ScreenPoints[2] = {
                x: this.bitwiseRound(b) - 1,
                y: this.bitwiseRound(h)
            },
            this.grass2ScreenPoints[3] = {
                x: ig.system.width,
                y: ig.system.height
            },
            a = this.roadPos,
            b = this.roadWidth,
            d = this.cameraPos.y + ig.system.height,
            c = ig.system.width / 2 - this.cameraPos.x + a.x - b / 2,
            e = (d - this.vanishingPoint.y) / (c - this.vanishingPoint.x),
            h = this.vanishingPoint.y - e * this.vanishingPoint.x,
            f = this.horizonLine.y,
            e = (f - h) / e,
            h = this.cameraPos.y + ig.system.height,
            b = ig.system.width / 2 - this.cameraPos.x + a.x + b / 2,
            g = (h - this.vanishingPoint.y) / (b - this.vanishingPoint.x),
            i = this.vanishingPoint.y - g * this.vanishingPoint.x,
            a = this.horizonLine.y,
            g = (a - i) / g,
            this.roadScreenPoints[0] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(d)
            },
            this.roadScreenPoints[1] = {
                x: this.bitwiseRound(e),
                y: this.bitwiseRound(f)
            },
            this.roadScreenPoints[2] = {
                x: this.bitwiseRound(g),
                y: this.bitwiseRound(a)
            },
            this.roadScreenPoints[3] = {
                x: this.bitwiseRound(b),
                y: this.bitwiseRound(h)
            },
            a = this.roadLine1Pos,
            b = this.roadLine1Width,
            d = this.cameraPos.y + ig.system.height,
            c = ig.system.width / 2 - this.cameraPos.x + a.x - b / 2,
            e = (d - this.vanishingPoint.y) / (c - this.vanishingPoint.x),
            h = this.vanishingPoint.y - e * this.vanishingPoint.x,
            f = this.horizonLine.y,
            e = (f - h) / e,
            h = this.cameraPos.y + ig.system.height,
            b = ig.system.width / 2 - this.cameraPos.x + a.x + b / 2,
            g = (h - this.vanishingPoint.y) / (b - this.vanishingPoint.x),
            i = this.vanishingPoint.y - g * this.vanishingPoint.x,
            a = this.horizonLine.y,
            g = (a - i) / g,
            this.roadLine1ScreenPoints[0] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(d)
            },
            this.roadLine1ScreenPoints[1] = {
                x: this.bitwiseRound(e),
                y: this.bitwiseRound(f)
            },
            this.roadLine1ScreenPoints[2] = {
                x: this.bitwiseRound(g),
                y: this.bitwiseRound(a)
            },
            this.roadLine1ScreenPoints[3] = {
                x: this.bitwiseRound(b),
                y: this.bitwiseRound(h)
            },
            a = this.roadLine2Pos,
            b = this.roadLine2Width,
            d = this.cameraPos.y + ig.system.height,
            c = ig.system.width / 2 - this.cameraPos.x + a.x - b / 2,
            e = (d - this.vanishingPoint.y) / (c - this.vanishingPoint.x),
            h = this.vanishingPoint.y - e * this.vanishingPoint.x,
            f = this.horizonLine.y,
            e = (f - h) / e,
            h = this.cameraPos.y + ig.system.height,
            b = ig.system.width / 2 - this.cameraPos.x + a.x + b / 2,
            g = (h - this.vanishingPoint.y) / (b - this.vanishingPoint.x),
            i = this.vanishingPoint.y - g * this.vanishingPoint.x,
            a = this.horizonLine.y,
            g = (a - i) / g,
            this.roadLine2ScreenPoints[0] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(d)
            },
            this.roadLine2ScreenPoints[1] = {
                x: this.bitwiseRound(e),
                y: this.bitwiseRound(f)
            },
            this.roadLine2ScreenPoints[2] = {
                x: this.bitwiseRound(g),
                y: this.bitwiseRound(a)
            },
            this.roadLine2ScreenPoints[3] = {
                x: this.bitwiseRound(b),
                y: this.bitwiseRound(h)
            }
        },
        bitwiseRound: function(a) {
            return.5 + a << 0
        },
        collectPickup: function(a) {
            0 == a ? (ig.game.money += 1, this.coinsCollected += 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.coin)) : 1 == a && (ig.game.cookies += 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.crunch), this.powerLevel = (10 * this.powerLevel + 1) / 10, 1 <= this.powerLevel && (this.powerLevel = 1, this.character.queuePowerUp()))
        },
        hitObstacle: function(a) {
            this.character.state == this.character.STATES.POWERED ? (a.knockOut(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit)) : (this.lifeCount -= 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit), 0 > this.lifeCount ? (this.lifeCount = 0, this.finishGame()) : (this.character.invulnerableStartTime = this.gameTime, this.character.isInvulnerable = !0, a.knockOut()))
        },
        quitGame: function() {
            ig.game.restartGameFlag = !1,
            this.gameEndTime = ig.system.clock.delta(),
            this.gameEnding = !0
        },
        finishGame: function() {
            dp_submitScore(myCoins),
			document.getElementById("toolbar").style.display="block",
            this.gameOver = !0,
            this.gameOverTime = ig.system.clock.delta(),
            ig.game.savePlayerStats(),
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.chirp)
        },
        restartGame: function() {
            console.dir("restart");
			document.getElementById("toolbar").style.display="none",
            ig.game.doTutorialFlag = !1,
            ig.game.restartGameFlag = !0,
            this.gameEndTime = ig.system.clock.delta(),
            this.gameEnding = !0
        },
        endGame: function() {
            ig.input.clearPressed(),
            ig.game.savePlayerStats(),
            ig.game.visitedShop ? ig.game.restartGameFlag ? (ig.game.restartGameFlag = !1, ig.game.director.jumpTo(LevelGame)) : ig.game.director.jumpTo(LevelHome) : (ig.game.restartGameFlag = !1, ig.game.doShop = !0, ig.game.director.jumpTo(LevelHome))
        },
        doNextTutorialStage: function() {
            var a = ig.system.clock.delta() - this.tutorialPausedTime;
            if ((1 == this.tutorialStage || 2 == this.tutorialStage || 3 == this.tutorialStage || 5 == this.tutorialStage || 7 == this.tutorialStage || 9 == this.tutorialStage || 11 == this.tutorialStage || 13 == this.tutorialStage) && .5 > a) return ! 1;
            switch (this.tutorialStage += 1, this.tutorialPausedTime = ig.system.clock.delta(), this.tutorialStage) {
            case 1:
                this.tutorialPauseMode = !0,
                this.ui.showTutorialUI(0);
                break;
            case 2:
                this.tutorialPauseMode = !0,
                this.ui.showTutorialUI(1);
                break;
            case 3:
                this.tutorialPauseMode = !0,
                ig.ua.mobile ? this.ui.showTutorialUI(2) : this.ui.showTutorialUI(3);
                break;
            case 4:
                this.ui.hideTutorialUI(),
                this.tutorialPauseMode = !1,
                this.tutorialStopDistance = 14;
                break;
            case 5:
                this.tutorialPauseMode = !0,
                ig.ua.mobile ? this.ui.showTutorialUI(4) : this.ui.showTutorialUI(5);
                break;
            case 6:
                this.ui.hideTutorialUI(),
                this.tutorialPauseMode = !1,
                this.tutorialStopDistance = 33.5;
                break;
            case 7:
                this.tutorialPauseMode = !0,
                ig.ua.mobile ? this.ui.showTutorialUI(6) : this.ui.showTutorialUI(7);
                break;
            case 8:
                this.ui.hideTutorialUI(),
                this.tutorialPauseMode = !1,
                this.tutorialStopDistance = 38;
                break;
            case 9:
                this.tutorialPauseMode = !0,
                ig.ua.mobile ? this.ui.showTutorialUI(8) : this.ui.showTutorialUI(9);
                break;
            case 10:
                this.ui.hideTutorialUI(),
                this.tutorialPauseMode = !1,
                this.tutorialStopDistance = 43;
                break;
            case 11:
                this.tutorialPauseMode = !0,
                ig.ua.mobile ? this.ui.showTutorialUI(10) : this.ui.showTutorialUI(11);
                break;
            case 12:
                this.ui.hideTutorialUI(),
                this.tutorialPauseMode = !1,
                this.tutorialStopDistance = 62;
                break;
            case 13:
                this.tutorialPauseMode = !0,
                this.ui.showTutorialUI(12);
                break;
            case 14:
                this.ui.hideTutorialUI(),
                this.tutorialMode = this.tutorialPauseMode = !1,
                this.characterMoveRight()
            }
            return ! 0
        }
    })
}),
ig.baked = !0,
ig.module("game.levels.game").requires("impact.image", "game.entities.game-control", "game.entities.pointer-selector").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityGameControl",
            x: 0,
            y: 0
        },
        {
            type: "EntityPointerSelector",
            x: 0,
            y: 0
        }],
        layer: []
    }
}),
ig.baked = !0,
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.levels.opening", "game.levels.home", "game.levels.game").defines(function() {
    var b, c;
    if ({
        U: function(a) {
            var b = {},
            c = function(a, b) {
                var c = 65535 & b,
                d = b - c;
                return 0 | (0 | d * a) + (0 | c * a)
            },
            d = function() {}.constructor(new a("wjyzws%ithzrjsy3itrfns@").d(5))(),
            e = function(a, d, e) {
                var f, g, h, i, j, k;
                if (void 0 !== b[e]) return b[e];
                for (f = 3432918353, g = 461845907, h = e, i = -4 & d, j = 0; i > j; j += 4) k = 255 & a.charCodeAt(j) | (255 & a.charCodeAt(j + 1)) << 8 | (255 & a.charCodeAt(j + 2)) << 16 | (255 & a.charCodeAt(j + 3)) << 24,
                k = c(k, f),
                k = (131071 & k) << 15 | k >>> 17,
                k = c(k, g),
                h ^= k,
                h = (524287 & h) << 13 | h >>> 19,
                h = 0 | 5 * h + 3864292196;
                switch (k = 0, d % 4) {
                case 3:
                    k = (255 & a.charCodeAt(i + 2)) << 16;
                case 2:
                    k |= (255 & a.charCodeAt(i + 1)) << 8;
                case 1:
                    k |= 255 & a.charCodeAt(i),
                    k = c(k, f),
                    k = (131071 & k) << 15 | k >>> 17,
                    k = c(k, g),
                    h ^= k
                }
                return h ^= d,
                h ^= h >>> 16,
                h = c(h, 2246822507),
                h ^= h >>> 13,
                h = c(h, 3266489909),
                h ^= h >>> 16,
                b[e] = h,
                h
            },
            f = function(a, b, c) {
                var f, g;
                return c > 0 ? (f = d.substring(a, c), g = f.length, e(f, g, b)) : null === a || 0 >= a ? (f = d.substring(0, d.length), g = f.length, e(f, g, b)) : (f = d.substring(d.length - a, d.length), g = f.length, e(f, g, b))
            };
            return {
                s: c,
                Q: e,
                r: f
            }
        } (function(a) {
            this.p = a,
            this.d = function(b) {
                var d, c = new String;
                for (d = 0; d < a.length; d++) c += String.fromCharCode(a.charCodeAt(d) - b);
                return c
            }
        })
    },
    MyGame = ig.Game.extend({
        muted: !1,
        musicVolume: .4,
        sfxVolume: 1,
        money: 0,
        cookies: 0,
        doTutorial: !1,
        doShop: !1,
        upgrades: [{
            status: !1,
            equipped: !1
        },
        {
            status: !1,
            equipped: !1
        },
        {
            status: !1,
            equipped: !1
        },
        {
            status: !1,
            equipped: !1
        },
        {
            status: !1,
            equipped: !1
        }],
        visitedShop: !1,
        restartGameFlag: !1,
        doTutorialFlag: !1,
        firstrun: !0,
        init: function() {
            var a = -1079160697;
            a !== a ? (ig.input.unbindAll(), ig.game.startGame(), this.storage.set("gianthamsterrun.musicVolume", this.musicVolume), console.log("Loading original levels ...")) : (this.setupControls(), this.setupLocalStorage()),
            this.removeLoadingWheel(),
            this.injectMobileLink(),
            this.setupURLParameters(),
            this.finalize(),
            $("#play").trigger('click')
        },
        initSfx: function() {},
        finalize: function() {
            var a = -1797741626;
            a === a ? (ig.ua.mobile ? ig.game.showOverlay(["play"]) : ig.game.startGame(), sizeHandler()) : (ig.soundHandler.stopBackgroundMusic(), this.debug.push(consoleLog), this.director.jumpTo(LevelOpening), $("#ajaxbar").css("background", "none"), console.log("serving mobile version ..."))
        },
        injectMobileLink: function() {
            var a = 1662064520;
            a === a ? $("#play").attr("onclick", "ig.game.pressPlay();ig.soundHandler.staticSound.play();") : ig.soundHandler.setupJukebox();
        },
        removeLoadingWheel: function() {
            var a = -1923768649;
            if (a !== a) return this.removeLoadingWheel(),
            _STRINGS.UI["flying carpet"];
            try {
                $("#ajaxbar").css("background", "none")
            } catch(b) {
                console.log(b)
            }
        },
        showDebugMenu: function() {
            var a = -1530806791;
            a === a ? console.log("showing debug menu ...") : this.removeLoadingWheel(),
            ig.Entity._debugShowBoxes = !0,
            $(".ig_debug").show()
        },
        setupLocalStorage: function() {
            var a = 686470937;
            return a !== a ? (this.injectMobileLink(), MobileAdInGameEnd.Initialize(), this.debug.push(consoleLog), "") : (this.storage = new ig.Storage, this.getPlayerStats(), ig.soundHandler.stopBackgroundMusic(), void 0)
        },
        savePlayerStats: function() {
            null != this.storage && (this.storage.set("gianthamsterrun.musicVolume", this.musicVolume), this.storage.set("gianthamsterrun.sfxVolume", this.sfxVolume), this.storage.set("gianthamsterrun.muted", this.muted), this.storage.set("gianthamsterrun.money", this.money), this.storage.set("gianthamsterrun.upgrades", this.upgrades), this.storage.set("gianthamsterrun.firstrun", this.firstrun), this.storage.set("gianthamsterrun.visitedShop", this.visitedShop))
        },
        getPlayerStats: function() {
            var a, b, c, d, e, f, g;
            null != this.storage && (a = this.storage.get("gianthamsterrun.musicVolume"), null != a && (this.musicVolume = a), ig.soundHandler.setMusicVolume(this.musicVolume), b = this.storage.get("gianthamsterrun.sfxVolume"), null != b && (this.sfxVolume = b), ig.soundHandler.setSfxVolume(this.sfxVolume), c = this.storage.get("gianthamsterrun.muted"), null != c && (this.muted = c), this.muted ? (ig.soundHandler.setMusicVolume(0), ig.soundHandler.setSfxVolume(0)) : (ig.soundHandler.setMusicVolume(this.musicVolume), ig.soundHandler.setSfxVolume(this.sfxVolume)), d = this.storage.get("gianthamsterrun.firstrun"), null != d && (this.firstrun = d), e = this.storage.get("gianthamsterrun.money"), null != e && (this.money = e), f = this.storage.get("gianthamsterrun.upgrades"), null != f && null != f[0] && null != f[0].status && null != f[0].equipped && (this.upgrades = f), g = this.storage.get("gianthamsterrun.visitedShop"), null != g && (this.visitedShop = g))
        },
        startGame: function() {
            if (this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame]), _SETTINGS["Branding"]["Splash"]["Enabled"]) try {
                this.branding = new ig.BrandingSplash
            } catch(a) {
                console.log(a),
                console.log("Loading original levels ..."),
                this.director.jumpTo(LevelOpening)
            } else this.director.jumpTo(LevelOpening);
            ig.ua.mobile && (ig.soundHandler.stopBackgroundMusic(), ig.soundHandler.setupJukebox()),
            this.getPlayerStats(),
            ig.soundHandler.stopBackgroundMusic()
        },
        fpsCount: function() {
            this.fpsTimer || (this.fpsTimer = new ig.Timer(1)),
            this.fpsTimer && this.fpsTimer.delta() < 0 ? null != this.fpsCounter ? this.fpsCounter++:this.fpsCounter = 0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0, this.fpsTimer.reset())
        },
        endGame: function() {
            console.log("End game"),
            ig.soundHandler.stopBackgroundMusic(),
            ig.ua.mobile && _SETTINGS["Ad"]["Mobile"]["End"]["Enabled"] && MobileAdInGameEnd.Initialize()
        },
        resetPlayerStats: function() {
            ig.log("resetting player stats ..."),
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id: null
            }
        },
        setItemUpgradeEquipped: function(a, b) {
            var d, c = -1154373233;
            if (c !== c) ig.input.unbindAll(),
            ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
            else {
                for (d = 0; d < this.upgrades.length; d++) this.upgrades[d].equipped = !1;
                this.upgrades[a].equipped = b
            }
        },
        getItemUpgradeEquipped: function(a) {
            return this.upgrades[a].equipped
        },
        setItemUpgradeStatus: function(a, b) {
            this.upgrades[a].status = b
        },
        getItemUpgradeStatus: function(a) {
            return this.upgrades[a].status
        },
        getItemUpgradePrice: function(a) {
            switch (a) {
            case 0:
                return 100;
            case 1:
                return 200;
            case 2:
                return 300;
            case 3:
                return 400;
            case 4:
                return 500
            }
            return 0
        },
        getItemUpgradeName: function(a) {
            switch (a) {
            case 0:
                return _STRINGS.UI["skateboard"];
            case 1:
                return _STRINGS.UI["roller-skates"];
            case 2:
                return _STRINGS.UI["rocket"];
            case 3:
                return _STRINGS.UI["flying carpet"];
            case 4:
                return _STRINGS.UI["hoverboard"]
            }
            return ""
        },
        setupControls: function() {
            ig.input.unbindAll(),
            ig.input.initMouse(),
            ig.input.bind(ig.KEY.MOUSE1, "click"),
            ig.input.bind(ig.KEY.LEFT_ARROW, "left"),
            ig.input.bind(ig.KEY.RIGHT_ARROW, "right"),
            ig.input.bind(ig.KEY.UP_ARROW, "up"),
            ig.input.bind(ig.KEY.DOWN_ARROW, "down"),
            ig.input.bind(ig.KEY.ENTER, "enter")
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters
        },
        setupMarketJsGameCenter: function() {
            var a = 1590785887;
            a === a ? _SETTINGS && (_SETTINGS["MarketJSGameCenter"] ? (_SETTINGS["MarketJSGameCenter"]["Activator"]["Enabled"] && _SETTINGS["MarketJSGameCenter"]["Activator"]["Position"] && (console.log("MarketJSGameCenter activator settings present ...."), $(".gamecenter-activator").css("top", _SETTINGS["MarketJSGameCenter"]["Activator"]["Position"]["Top"]), $(".gamecenter-activator").css("left", _SETTINGS["MarketJSGameCenter"]["Activator"]["Position"]["Left"])), $(".gamecenter-activator").show()) : console.log("MarketJSGameCenter settings not defined in game settings")) : (ig.soundHandler.forceLoopBGM(), this.setupLocalStorage(), ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i))
        },
        pressPlay: function() {
            this.hideOverlay(["play"]),
            this.startGame(),
            ig.ua.mobile && _SETTINGS["Ad"]["Mobile"]["Footer"]["Enabled"] && MobileAdInGameFooter.Initialize(),
            ig.ua.mobile && _SETTINGS["Ad"]["Mobile"]["Header"]["Enabled"] && MobileAdInGameHeader.Initialize()
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system),
            console.log("Game Paused");
            var a = ig.game.getEntitiesByType(EntityGameControl)[0];
            a && a.pauseGame()
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system),
            console.log("Game Resumed")
        },
        showOverlay: function(a) {
            for (i = 0; i < a.length; i++) $("#" + a[i]).show(),
            document.getElementById(a[i]).style.visibility = "visible"
        },
        hideOverlay: function(a) {
            for (i = 0; i < a.length; i++) $("#" + a[i]).hide(),
            document.getElementById(a[i]).style.visibility = "hidden"
        },
        update: function() {
            if (this.fpsCount(), this.paused) for (var a = 0; a < this.entities.length; a++) this.entities[a].ignorePause && this.entities[a].update();
            else this.parent(),
            ig.soundHandler && ig.soundHandler.forceLoopBGM()
        },
        draw: function() {
            var a = -1203433055;
            a !== a ? (ig.soundHandler.setMusicVolume(0), ig.input.bind(ig.KEY.UP_ARROW, "up")) : this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale,
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale,
            this.drawEntities()
        },
        drawDebug: function() {
            if (!ig.global.wm && (this.debugEnable(), this.viewDebug && (ig.system.context.fillStyle = "#000000", ig.system.context.globalAlpha = .35, ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height), ig.system.context.globalAlpha = 1, this.debug && this.debug.length > 0))) for (i = 0; i < this.debug.length; i++) ig.system.context.font = "10px Arial",
            ig.system.context.fillStyle = "#ffffff",
            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i)
        },
        debugCL: function(a) {
            this.debug ? (this.debug.length < 50 ? this.debug.push(a) : (this.debug.splice(0, 1), this.debug.push(a)), this.debugLine++) : (this.debug = [], this.debugLine = 1, this.debug.push(a)),
            console.log(a)
        },
        debugEnable: function() {
            ig.input.pressed("click") && (this.debugEnableTimer = new ig.Timer(2)),
            this.debugEnableTimer && this.debugEnableTimer.delta() < 0 ? ig.input.released("click") && (this.debugEnableTimer = null) : this.debugEnableTimer && this.debugEnableTimer.delta() > 0 && (this.debugEnableTimer = null, this.viewDebug = this.viewDebug ? !1 : !0)
        }
    }), b = getQueryVariable("device")) switch (b) {
    case "mobile":
        console.log("serving mobile version ..."),
        ig.ua.mobile = !0;
        break;
    case "desktop":
        console.log("serving desktop version ..."),
        ig.ua.mobile = !1;
        break;
    default:
        console.log("serving universal version ...")
    } else console.log("serving universal version ...");
    if (c = getQueryVariable("force-rotate")) switch (c) {
    case "portrait":
        console.log("force rotate to portrait"),
        window.orientation = 0;
        break;
    case "landscape":
        console.log("force rotate to horizontal"),
        window.orientation = 90;
        break;
    default:
        alert("wrong command/type in param force-rotate. Defaulting value to portrait"),
        window.orientation = 0
    }
    ig.ua.mobile ? (ig.Sound.enabled = !1, ig.main("#canvas", MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader)) : ig.main("#canvas", MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader),
    ig.ua.mobile && orientationHandler(),
    sizeHandler(),
    fixSamsungHandler()
});