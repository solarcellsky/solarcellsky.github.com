define("activity/common/NATransfer", ["require"], function(require) {
    var t = function(t) {
        if (t && "function" == typeof t)
            if (window.BNJS && "object" == typeof window.BNJS && BNJS._isAllReady) t();
            else document.addEventListener("BNJSReady", function() {
                t()
            }, !1)
    };
    t(function() {
        function t(t) {
            if (-1 !== t.indexOf("m.dianying.baidu.com")) {
                t = t.slice(7);
                var e = t.match(/\/\w+/g);
                if (!e) return "portal";
                if (e.length >= 2) {
                    var r = e.length,
                        i = e[r - 1];
                    return e[r - 2].slice(1) + i[1].toUpperCase() + i.slice(2)
                }
            }
        }

        function e(t) {
            var e = t.replace(/_(\w)/g, function(t, e) {
                return e.toUpperCase()
            });
            return e
        }
        BNJS.ui.title.setTitle($("title").text() || "百度糯米优惠活动");
        var r = {
            portal: "portal",
            cardIndex: "portal",
            movieSchedule: "movieSchedule",
            cardIntroduction: "cardIntroduction",
            searchQuery: "search",
            cinemaDetail: "cinemaShow",
            movieDetail: "movieDetail"
        };
        $(".content").on("click", "a", function(i) {
            var n = this.href;
            if (n && 0 !== n.indexOf("#") && 0 !== n.indexOf("javascript") && 0 !== n.indexOf("tel")) {
                var o = t(n);
                if (!r[o]) n = n.replace(/sub_channel/g, "subChannel"), BNJS.page.start("bainuo://component?url=" + encodeURIComponent(n), {}, 0);
                else {
                    var s = {},
                        a = n.lastIndexOf("#");
                    n = -1 !== a ? n.slice(0, a) : n;
                    var l = n.indexOf("?");
                    if (-1 !== l) {
                        var h, u = n.slice(l + 1),
                            c = u.split("&");
                        $.each(c, function(t, r) {
                            h = r.split("="), s[e(h[0])] = h[1]
                        })
                    }
                    s.subChannel = window._MOVIE.subChannel;
                    var d = {
                        comppage: r[o],
                        compid: "movie"
                    };
                    if ("cardIndex" === o) s.page = "cardIndex";
                    if ("searchQuery" === o) s._query = decodeURIComponent(s.key);
                    n = "bainuo://component?" + $.param(d), BNJS.page.start(n, s, 0)
                }
                i.preventDefault(), i.stopPropagation()
            }
        })
    })
}), define("activity/common/NAShare", ["require"], function(require) {
    var t = function(t) {
            if (t && "function" == typeof t)
                if (window.BNJS && "object" == typeof window.BNJS && BNJS._isAllReady) t();
                else document.addEventListener("BNJSReady", function() {
                    t()
                }, !1)
        },
        e = function(e) {
            t(function() {
                BNJS.ui.title.addActionButton({
                    tag: "10000",
                    icon: "share",
                    callback: function() {
                        BNJS.ui.share(e)
                    }
                })
            })
        };
    return {
        init: e
    }
}), define("util", [], function() {
    var exports = {};
    return exports.qs = {}, exports.qs.stringify = function(t) {
        if (!t) return "";
        var e = [];
        for (var r in t)
            if (t.hasOwnProperty(r) && null !== t[r]) {
                if ("object" == typeof t[r]) t[r] = JSON.stringify(t[r]);
                e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]))
            }
        return e.join("&")
    }, exports.qs.parse = function(t) {
        if (!t) return {};
        var e = {};
        t = t.split("&");
        for (var r = 0; r < t.length; r++) {
            var i = t[r].split("=", 2);
            if (1 === i.length) e[i[0]] = "";
            else e[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " "))
        }
        return e
    }, exports.isAndroid = function() {
        return /android/i.test(navigator.userAgent)
    }, exports.isIOS = function() {
        return /iphone|ipad|ipod/i.test(navigator.userAgent)
    }, exports.dateFormat = function(t, e) {
        var r = {
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            "h+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds(),
            "q+": Math.floor((t.getMonth() + 3) / 3),
            S: t.getMilliseconds()
        };
        if (/(y+)/.test(e)) e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var i in r)
            if (new RegExp("(" + i + ")").test(e)) e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length));
        return e
    }, exports.formatDateText = function(t, e) {
        var r = new Date(t),
            i = new Date(e);
        r = new Date(r.getFullYear(), r.getMonth(), r.getDate()), i = new Date(i.getFullYear(), i.getMonth(), i.getDate());
        var n = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            o = r.getMonth() + 1 + "月" + r.getDate() + "日",
            s = r.getDay(),
            a = i.getDay(),
            l = 6048e5,
            h = r - i;
        if (0 === h) return "今天" + o;
        else if (864e5 === h) return "明天" + o;
        else if (1728e5 === h) return "后天" + o;
        else if (l >= h)
            if (s > a && 0 !== a || h !== l && 0 === s) return n[s] + o;
            else return "下" + n[s] + o;
        return o
    }, exports.encodeHTML = function(t) {
        return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }, exports.decodeHTML = function(t) {
        var e = String(t).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        return e.replace(/&#([\d]+);/g, function(t, e) {
            return String.fromCharCode(parseInt(e, 10))
        })
    }, exports.load = function(t, e) {
        if ("undefined" == typeof t) return void(e && e());
        if ("string" == typeof t) t = [t];
        var r = t.length;
        if (0 === r) return void(e && e());
        else return void t.forEach(function(t, i) {
            var n = new Image;
            n.src = t, n.addEventListener("load", function() {
                n = null, --r <= 0 && e && e()
            })
        })
    }, exports.getUrlParams = function() {
        var t = window.location.search || "";
        return t = t.replace("?", ""), exports.qs.parse(t)
    }, exports.handleTextOverflow = function(t, e, r) {
        for (var i = document.getElementsByClassName(t), n = document.getElementsByClassName(r), o = document.getElementsByClassName(e), s = i.length, a = 0; s > a; a++) {
            var l = i[a].offsetWidth,
                h = n[a] ? n[a].offsetWidth : 0;
            o[a].style.maxWidth = l - h - 10 + "px"
        }
    }, exports.strformatter = function(t, e) {
        if (!t) return "";
        if (null == e) return t;
        var r = [].slice.call(arguments, 1);
        return t.replace(/\$\{(.+?)\}/g, function(t, i) {
            var n = Number(i);
            if (n >= 0) return r[n];
            var o = e[i];
            if ("function" == typeof o) o = o(i);
            return null == o ? "" : o
        })
    }, exports.getDistance = function(t, e, r, i) {
        if (!(t && t && r && i)) return -1;
        var n = r - t,
            o = i - e,
            s = Math.pow(n * n + o * o, .5);
        return s
    }, exports.getTimeValue = function(t) {
        var e = Math.floor(t / 60),
            r = Math.floor(t % 60);
        if (10 > e) e = "0" + e;
        if (10 > r) r = "0" + r;
        return {
            m: e,
            s: r
        }
    }, exports
}), define("common/logger", ["require", "../util"], function(require) {
    function t(t, e) {
        function s(t) {
            var e = n + "&t=" + Date.now() + "&" + t;
            if (window._MOVIE.debug);
            else {
                var r = new Image,
                    i = "img" + Date.now() + Math.ceil(100 * Math.random(100));
                window[i] = r, r.onload = r.onerror = function() {
                    delete window[i]
                }, r.src = e
            }
        }
        var a, l = {
            from: i,
            resid: 31,
            da_ver: "2.1.0",
            da_trd: "movie",
            mobile: o ? "android" : "phone",
            da_thirdpar: _MOVIE.statParam.da_thirdpar,
            da_abtest: _MOVIE.statParam.da_abtest
        };
        t = $.extend(l, t || {}), a = r.qs.stringify(t), s(a);
        var h;
        if ("lightapp_discover" === window._MOVIE.sfrom || "lightapp_map_discover" === window._MOVIE.sfrom) try {
            var u = JSON.parse(window._MOVIE.subChannel);
            h = u.sub_channel
        } catch (c) {
            h = window._MOVIE.subChannel
        } else h = window._MOVIE.subChannel;
        if ("cloud_shenghuo_focus_wap_cjxql" === window._MOVIE.subChannel || "cloud_floating_wap_cjxql" === window._MOVIE.subChannel || "cloud_wise_wap_cjxql" === window._MOVIE.subChannel || "cloud_shenghuo_51huodong_wap_crazy51" === window._MOVIE.subChannel || "cloud_floating_51huodong_wap_crazy51" === window._MOVIE.subChannel || "cloud_wise_51huodong_wap_crazy51" === window._MOVIE.subChannel) h = window._MOVIE.subChannel;
        if (h)
            if ("lightapp_discover" === window._MOVIE.sfrom || "lightapp_map_discover" === window._MOVIE.sfrom || "ready" === t.da_act) t = $.extend(t || {}, {
                from: i,
                resid: 31,
                da_ver: "2.1.0",
                da_trd: "movie",
                da_act: "attached",
                mobile: o ? "android" : "phone",
                da_thirdpar: window._MOVIE.sfrom + "_" + h
            }), a = r.qs.stringify(t), s(a)
    }

    function e(e) {
        t({
            da_src: e.da_src,
            da_act: "ready"
        })
    }
    var r = require("../util"),
        i = _MOVIE.from || "webapp",
        n = "webview" === i ? "http://client.map.baidu.com/place/v5/img/transparent.gif?newmap=1" : "http://map.baidu.com/mobile/img/transparent.gif?newmap=1",
        o = $.os && $.os.android;
    t._reqQueue = [];
    var exports = {
        imgPath: n,
        addStat: t,
        addPvStat: e,
        init: function(i) {
            $.extend(window._MOVIE.statParam, i || {}), $(document.body).on("click", "[data-log]", function(e) {
                var i = $(this),
                    n = i.data("log"),
                    o = {};
                if ("string" == typeof n) try {
                    n = r.decodeHTML(n), n = JSON.parse(n)
                } catch (e) {
                    n = {}
                }
                if ("object" == typeof n) {
                    var s;
                    for (var a in n)
                        if (n.hasOwnProperty(a)) {
                            if (s = n[a], "object" == typeof s) s = JSON.stringify(s);
                            if (s) o[a] = s.toString()
                        }
                    if (!o.da_act) o.da_act = "click";
                    t(o)
                }
            }), e(window._MOVIE.statParam)
        }
    };
    return exports
}), ! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define("activity/5zhounian/shake/pixi", [], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.PIXI = t()
    }
}(function() {
    var t;
    return function e(t, r, i) {
        function n(s, a) {
            if (!r[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (o) return o(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = r[s] = {
                    exports: {}
                };
                t[s][0].call(u.exports, function(e) {
                    var r = t[s][1][e];
                    return n(r ? r : e)
                }, u, u.exports, e, t, r, i)
            }
            return r[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
        return n
    }({
        1: [function(t, e, r) {
            (function(r) {
                t("./polyfill");
                var i = e.exports = t("./core");
                i.extras = t("./extras"), i.filters = t("./filters"), i.interaction = t("./interaction"), i.loaders = t("./loaders"), i.mesh = t("./mesh"), i.loader = new i.loaders.Loader, Object.assign(i, t("./deprecation")), r.PIXI = i
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./core": 29,
            "./deprecation": 78,
            "./extras": 85,
            "./filters": 102,
            "./interaction": 117,
            "./loaders": 120,
            "./mesh": 126,
            "./polyfill": 130
        }],
        2: [function(e, r, i) {
            (function(e) {
                ! function() {
                    function i(t) {
                        var e = !1;
                        return function() {
                            if (e) throw new Error("Callback was already called.");
                            e = !0, t.apply(n, arguments)
                        }
                    }
                    var n, o, s = {};
                    n = this, null != n && (o = n.async), s.noConflict = function() {
                        return n.async = o, s
                    };
                    var a = Object.prototype.toString,
                        l = Array.isArray || function(t) {
                            return "[object Array]" === a.call(t)
                        },
                        h = function(t, e) {
                            if (t.forEach) return t.forEach(e);
                            for (var r = 0; r < t.length; r += 1) e(t[r], r, t)
                        },
                        u = function(t, e) {
                            if (t.map) return t.map(e);
                            var r = [];
                            return h(t, function(t, i, n) {
                                r.push(e(t, i, n))
                            }), r
                        },
                        c = function(t, e, r) {
                            return t.reduce ? t.reduce(e, r) : (h(t, function(t, i, n) {
                                r = e(r, t, i, n)
                            }), r)
                        },
                        d = function(t) {
                            if (Object.keys) return Object.keys(t);
                            var e = [];
                            for (var r in t) t.hasOwnProperty(r) && e.push(r);
                            return e
                        };
                    "undefined" != typeof e && e.nextTick ? (s.nextTick = e.nextTick, s.setImmediate = "undefined" != typeof setImmediate ? function(t) {
                        setImmediate(t)
                    } : s.nextTick) : "function" == typeof setImmediate ? (s.nextTick = function(t) {
                        setImmediate(t)
                    }, s.setImmediate = s.nextTick) : (s.nextTick = function(t) {
                        setTimeout(t, 0)
                    }, s.setImmediate = s.nextTick), s.each = function(t, e, r) {
                        function n(e) {
                            e ? (r(e), r = function() {}) : (o += 1, o >= t.length && r())
                        }
                        if (r = r || function() {}, !t.length) return r();
                        var o = 0;
                        h(t, function(t) {
                            e(t, i(n))
                        })
                    }, s.forEach = s.each, s.eachSeries = function(t, e, r) {
                        if (r = r || function() {}, !t.length) return r();
                        var i = 0,
                            n = function() {
                                e(t[i], function(e) {
                                    e ? (r(e), r = function() {}) : (i += 1, i >= t.length ? r() : n())
                                })
                            };
                        n()
                    }, s.forEachSeries = s.eachSeries, s.eachLimit = function(t, e, r, i) {
                        var n = p(e);
                        n.apply(null, [t, r, i])
                    }, s.forEachLimit = s.eachLimit;
                    var p = function(t) {
                            return function(e, r, i) {
                                if (i = i || function() {}, !e.length || 0 >= t) return i();
                                var n = 0,
                                    o = 0,
                                    s = 0;
                                ! function a() {
                                    if (n >= e.length) return i();
                                    for (; t > s && o < e.length;) o += 1, s += 1, r(e[o - 1], function(t) {
                                        t ? (i(t), i = function() {}) : (n += 1, s -= 1, n >= e.length ? i() : a())
                                    })
                                }()
                            }
                        },
                        f = function(t) {
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [s.each].concat(e))
                            }
                        },
                        v = function(t, e) {
                            return function() {
                                var r = Array.prototype.slice.call(arguments);
                                return e.apply(null, [p(t)].concat(r))
                            }
                        },
                        g = function(t) {
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [s.eachSeries].concat(e))
                            }
                        },
                        m = function(t, e, r, i) {
                            if (e = u(e, function(t, e) {
                                    return {
                                        index: e,
                                        value: t
                                    }
                                }), i) {
                                var n = [];
                                t(e, function(t, e) {
                                    r(t.value, function(r, i) {
                                        n[t.index] = i, e(r)
                                    })
                                }, function(t) {
                                    i(t, n)
                                })
                            } else t(e, function(t, e) {
                                r(t.value, function(t) {
                                    e(t)
                                })
                            })
                        };
                    s.map = f(m), s.mapSeries = g(m), s.mapLimit = function(t, e, r, i) {
                        return y(e)(t, r, i)
                    };
                    var y = function(t) {
                        return v(t, m)
                    };
                    s.reduce = function(t, e, r, i) {
                        s.eachSeries(t, function(t, i) {
                            r(e, t, function(t, r) {
                                e = r, i(t)
                            })
                        }, function(t) {
                            i(t, e)
                        })
                    }, s.inject = s.reduce, s.foldl = s.reduce, s.reduceRight = function(t, e, r, i) {
                        var n = u(t, function(t) {
                            return t
                        }).reverse();
                        s.reduce(n, e, r, i)
                    }, s.foldr = s.reduceRight;
                    var x = function(t, e, r, i) {
                        var n = [];
                        e = u(e, function(t, e) {
                            return {
                                index: e,
                                value: t
                            }
                        }), t(e, function(t, e) {
                            r(t.value, function(r) {
                                r && n.push(t), e()
                            })
                        }, function(t) {
                            i(u(n.sort(function(t, e) {
                                return t.index - e.index
                            }), function(t) {
                                return t.value
                            }))
                        })
                    };
                    s.filter = f(x), s.filterSeries = g(x), s.select = s.filter, s.selectSeries = s.filterSeries;
                    var b = function(t, e, r, i) {
                        var n = [];
                        e = u(e, function(t, e) {
                            return {
                                index: e,
                                value: t
                            }
                        }), t(e, function(t, e) {
                            r(t.value, function(r) {
                                r || n.push(t), e()
                            })
                        }, function(t) {
                            i(u(n.sort(function(t, e) {
                                return t.index - e.index
                            }), function(t) {
                                return t.value
                            }))
                        })
                    };
                    s.reject = f(b), s.rejectSeries = g(b);
                    var _ = function(t, e, r, i) {
                        t(e, function(t, e) {
                            r(t, function(r) {
                                r ? (i(t), i = function() {}) : e()
                            })
                        }, function(t) {
                            i()
                        })
                    };
                    s.detect = f(_), s.detectSeries = g(_), s.some = function(t, e, r) {
                        s.each(t, function(t, i) {
                            e(t, function(t) {
                                t && (r(!0), r = function() {}), i()
                            })
                        }, function(t) {
                            r(!1)
                        })
                    }, s.any = s.some, s.every = function(t, e, r) {
                        s.each(t, function(t, i) {
                            e(t, function(t) {
                                t || (r(!1), r = function() {}), i()
                            })
                        }, function(t) {
                            r(!0)
                        })
                    }, s.all = s.every, s.sortBy = function(t, e, r) {
                        s.map(t, function(t, r) {
                            e(t, function(e, i) {
                                e ? r(e) : r(null, {
                                    value: t,
                                    criteria: i
                                })
                            })
                        }, function(t, e) {
                            if (t) return r(t);
                            var i = function(t, e) {
                                var r = t.criteria,
                                    i = e.criteria;
                                return i > r ? -1 : r > i ? 1 : 0
                            };
                            r(null, u(e.sort(i), function(t) {
                                return t.value
                            }))
                        })
                    }, s.auto = function(t, e) {
                        e = e || function() {};
                        var r = d(t),
                            i = r.length;
                        if (!i) return e();
                        var n = {},
                            o = [],
                            a = function(t) {
                                o.unshift(t)
                            },
                            u = function(t) {
                                for (var e = 0; e < o.length; e += 1)
                                    if (o[e] === t) return void o.splice(e, 1)
                            },
                            p = function() {
                                i--, h(o.slice(0), function(t) {
                                    t()
                                })
                            };
                        a(function() {
                            if (!i) {
                                var t = e;
                                e = function() {}, t(null, n)
                            }
                        }), h(r, function(r) {
                            var i = l(t[r]) ? t[r] : [t[r]],
                                o = function(t) {
                                    var i = Array.prototype.slice.call(arguments, 1);
                                    if (i.length <= 1 && (i = i[0]), t) {
                                        var o = {};
                                        h(d(n), function(t) {
                                            o[t] = n[t]
                                        }), o[r] = i, e(t, o), e = function() {}
                                    } else n[r] = i, s.setImmediate(p)
                                },
                                f = i.slice(0, Math.abs(i.length - 1)) || [],
                                v = function() {
                                    return c(f, function(t, e) {
                                        return t && n.hasOwnProperty(e)
                                    }, !0) && !n.hasOwnProperty(r)
                                };
                            if (v()) i[i.length - 1](o, n);
                            else {
                                var g = function() {
                                    v() && (u(g), i[i.length - 1](o, n))
                                };
                                a(g)
                            }
                        })
                    }, s.retry = function(t, e, r) {
                        var i = 5,
                            n = [];
                        "function" == typeof t && (r = e, e = t, t = i), t = parseInt(t, 10) || i;
                        var o = function(i, o) {
                            for (var a = function(t, e) {
                                    return function(r) {
                                        t(function(t, i) {
                                            r(!t || e, {
                                                err: t,
                                                result: i
                                            })
                                        }, o)
                                    }
                                }; t;) n.push(a(e, !(t -= 1)));
                            s.series(n, function(t, e) {
                                e = e[e.length - 1], (i || r)(e.err, e.result)
                            })
                        };
                        return r ? o() : o
                    }, s.waterfall = function(t, e) {
                        if (e = e || function() {}, !l(t)) {
                            var r = new Error("First argument to waterfall must be an array of functions");
                            return e(r)
                        }
                        if (!t.length) return e();
                        var i = function(t) {
                            return function(r) {
                                if (r) e.apply(null, arguments), e = function() {};
                                else {
                                    var n = Array.prototype.slice.call(arguments, 1),
                                        o = t.next();
                                    n.push(o ? i(o) : e), s.setImmediate(function() {
                                        t.apply(null, n)
                                    })
                                }
                            }
                        };
                        i(s.iterator(t))()
                    };
                    var T = function(t, e, r) {
                        if (r = r || function() {}, l(e)) t.map(e, function(t, e) {
                            t && t(function(t) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                r.length <= 1 && (r = r[0]), e.call(null, t, r)
                            })
                        }, r);
                        else {
                            var i = {};
                            t.each(d(e), function(t, r) {
                                e[t](function(e) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    n.length <= 1 && (n = n[0]), i[t] = n, r(e)
                                })
                            }, function(t) {
                                r(t, i)
                            })
                        }
                    };
                    s.parallel = function(t, e) {
                        T({
                            map: s.map,
                            each: s.each
                        }, t, e)
                    }, s.parallelLimit = function(t, e, r) {
                        T({
                            map: y(e),
                            each: p(e)
                        }, t, r)
                    }, s.series = function(t, e) {
                        if (e = e || function() {}, l(t)) s.mapSeries(t, function(t, e) {
                            t && t(function(t) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                r.length <= 1 && (r = r[0]), e.call(null, t, r)
                            })
                        }, e);
                        else {
                            var r = {};
                            s.eachSeries(d(t), function(e, i) {
                                t[e](function(t) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    n.length <= 1 && (n = n[0]), r[e] = n, i(t)
                                })
                            }, function(t) {
                                e(t, r)
                            })
                        }
                    }, s.iterator = function(t) {
                        var e = function(r) {
                            var i = function() {
                                return t.length && t[r].apply(null, arguments), i.next()
                            };
                            return i.next = function() {
                                return r < t.length - 1 ? e(r + 1) : null
                            }, i
                        };
                        return e(0)
                    }, s.apply = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
                        }
                    };
                    var E = function(t, e, r, i) {
                        var n = [];
                        t(e, function(t, e) {
                            r(t, function(t, r) {
                                n = n.concat(r || []), e(t)
                            })
                        }, function(t) {
                            i(t, n)
                        })
                    };
                    s.concat = f(E), s.concatSeries = g(E), s.whilst = function(t, e, r) {
                        t() ? e(function(i) {
                            return i ? r(i) : void s.whilst(t, e, r)
                        }) : r()
                    }, s.doWhilst = function(t, e, r) {
                        t(function(i) {
                            if (i) return r(i);
                            var n = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, n) ? s.doWhilst(t, e, r) : r()
                        })
                    }, s.until = function(t, e, r) {
                        t() ? r() : e(function(i) {
                            return i ? r(i) : void s.until(t, e, r)
                        })
                    }, s.doUntil = function(t, e, r) {
                        t(function(i) {
                            if (i) return r(i);
                            var n = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, n) ? r() : s.doUntil(t, e, r)
                        })
                    }, s.queue = function(t, e) {
                        function r(t, e, r, i) {
                            return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() {
                                t.drain && t.drain()
                            }) : void h(e, function(e) {
                                var n = {
                                    data: e,
                                    callback: "function" == typeof i ? i : null
                                };
                                r ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                            })
                        }
                        void 0 === e && (e = 1);
                        var n = 0,
                            o = {
                                tasks: [],
                                concurrency: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                started: !1,
                                paused: !1,
                                push: function(t, e) {
                                    r(o, t, !1, e)
                                },
                                kill: function() {
                                    o.drain = null, o.tasks = []
                                },
                                unshift: function(t, e) {
                                    r(o, t, !0, e)
                                },
                                process: function() {
                                    if (!o.paused && n < o.concurrency && o.tasks.length) {
                                        var e = o.tasks.shift();
                                        o.empty && 0 === o.tasks.length && o.empty(), n += 1;
                                        var r = function() {
                                                n -= 1, e.callback && e.callback.apply(e, arguments), o.drain && o.tasks.length + n === 0 && o.drain(), o.process()
                                            },
                                            s = i(r);
                                        t(e.data, s)
                                    }
                                },
                                length: function() {
                                    return o.tasks.length
                                },
                                running: function() {
                                    return n
                                },
                                idle: function() {
                                    return o.tasks.length + n === 0
                                },
                                pause: function() {
                                    o.paused !== !0 && (o.paused = !0, o.process())
                                },
                                resume: function() {
                                    o.paused !== !1 && (o.paused = !1, o.process())
                                }
                            };
                        return o
                    }, s.priorityQueue = function(t, e) {
                        function r(t, e) {
                            return t.priority - e.priority
                        }

                        function i(t, e, r) {
                            for (var i = -1, n = t.length - 1; n > i;) {
                                var o = i + (n - i + 1 >>> 1);
                                r(e, t[o]) >= 0 ? i = o : n = o - 1
                            }
                            return i
                        }

                        function n(t, e, n, o) {
                            return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() {
                                t.drain && t.drain()
                            }) : void h(e, function(e) {
                                var a = {
                                    data: e,
                                    priority: n,
                                    callback: "function" == typeof o ? o : null
                                };
                                t.tasks.splice(i(t.tasks, a, r) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                            })
                        }
                        var o = s.queue(t, e);
                        return o.push = function(t, e, r) {
                            n(o, t, e, r)
                        }, delete o.unshift, o
                    }, s.cargo = function(t, e) {
                        var r = !1,
                            i = [],
                            n = {
                                tasks: i,
                                payload: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                drained: !0,
                                push: function(t, r) {
                                    l(t) || (t = [t]), h(t, function(t) {
                                        i.push({
                                            data: t,
                                            callback: "function" == typeof r ? r : null
                                        }), n.drained = !1, n.saturated && i.length === e && n.saturated()
                                    }), s.setImmediate(n.process)
                                },
                                process: function o() {
                                    if (!r) {
                                        if (0 === i.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0);
                                        var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length),
                                            a = u(s, function(t) {
                                                return t.data
                                            });
                                        n.empty && n.empty(), r = !0, t(a, function() {
                                            r = !1;
                                            var t = arguments;
                                            h(s, function(e) {
                                                e.callback && e.callback.apply(null, t)
                                            }), o()
                                        })
                                    }
                                },
                                length: function() {
                                    return i.length
                                },
                                running: function() {
                                    return r
                                }
                            };
                        return n
                    };
                    var w = function(t) {
                        return function(e) {
                            var r = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, r.concat([function(e) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && h(r, function(e) {
                                    console[t](e)
                                }))
                            }]))
                        }
                    };
                    s.log = w("log"), s.dir = w("dir"), s.memoize = function(t, e) {
                        var r = {},
                            i = {};
                        e = e || function(t) {
                            return t
                        };
                        var n = function() {
                            var n = Array.prototype.slice.call(arguments),
                                o = n.pop(),
                                a = e.apply(null, n);
                            a in r ? s.nextTick(function() {
                                o.apply(null, r[a])
                            }) : a in i ? i[a].push(o) : (i[a] = [o], t.apply(null, n.concat([function() {
                                r[a] = arguments;
                                var t = i[a];
                                delete i[a];
                                for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments)
                            }])))
                        };
                        return n.memo = r, n.unmemoized = t, n
                    }, s.unmemoize = function(t) {
                        return function() {
                            return (t.unmemoized || t).apply(null, arguments)
                        }
                    }, s.times = function(t, e, r) {
                        for (var i = [], n = 0; t > n; n++) i.push(n);
                        return s.map(i, e, r)
                    }, s.timesSeries = function(t, e, r) {
                        for (var i = [], n = 0; t > n; n++) i.push(n);
                        return s.mapSeries(i, e, r)
                    }, s.seq = function() {
                        var t = arguments;
                        return function() {
                            var e = this,
                                r = Array.prototype.slice.call(arguments),
                                i = r.pop();
                            s.reduce(t, r, function(t, r, i) {
                                r.apply(e, t.concat([function() {
                                    var t = arguments[0],
                                        e = Array.prototype.slice.call(arguments, 1);
                                    i(t, e)
                                }]))
                            }, function(t, r) {
                                i.apply(e, [t].concat(r))
                            })
                        }
                    }, s.compose = function() {
                        return s.seq.apply(null, Array.prototype.reverse.call(arguments))
                    };
                    var S = function(t, e) {
                        var r = function() {
                            var r = this,
                                i = Array.prototype.slice.call(arguments),
                                n = i.pop();
                            return t(e, function(t, e) {
                                t.apply(r, i.concat([e]))
                            }, n)
                        };
                        if (arguments.length > 2) {
                            var i = Array.prototype.slice.call(arguments, 2);
                            return r.apply(this, i)
                        }
                        return r
                    };
                    s.applyEach = f(S), s.applyEachSeries = g(S), s.forever = function(t, e) {
                        function r(i) {
                            if (i) {
                                if (e) return e(i);
                                throw i
                            }
                            t(r)
                        }
                        r()
                    }, "undefined" != typeof r && r.exports ? r.exports = s : "undefined" != typeof t && t.amd ? t([], function() {
                        return s
                    }) : n.async = s
                }()
            }).call(this, e("_process"))
        }, {
            _process: 4
        }],
        3: [function(t, e, r) {
            (function(t) {
                function e(t, e) {
                    for (var r = 0, i = t.length - 1; i >= 0; i--) {
                        var n = t[i];
                        "." === n ? t.splice(i, 1) : ".." === n ? (t.splice(i, 1), r++) : r && (t.splice(i, 1), r--)
                    }
                    if (e)
                        for (; r--; r) t.unshift("..");
                    return t
                }

                function i(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var r = [], i = 0; i < t.length; i++) e(t[i], i, t) && r.push(t[i]);
                    return r
                }
                var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    o = function(t) {
                        return n.exec(t).slice(1)
                    };
                r.resolve = function() {
                    for (var r = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) {
                        var s = o >= 0 ? arguments[o] : t.cwd();
                        if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                        s && (r = s + "/" + r, n = "/" === s.charAt(0))
                    }
                    return r = e(i(r.split("/"), function(t) {
                        return !!t
                    }), !n).join("/"), (n ? "/" : "") + r || "."
                }, r.normalize = function(t) {
                    var n = r.isAbsolute(t),
                        o = "/" === s(t, -1);
                    return t = e(i(t.split("/"), function(t) {
                        return !!t
                    }), !n).join("/"), t || n || (t = "."), t && o && (t += "/"), (n ? "/" : "") + t
                }, r.isAbsolute = function(t) {
                    return "/" === t.charAt(0)
                }, r.join = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return r.normalize(i(t, function(t, e) {
                        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t
                    }).join("/"))
                }, r.relative = function(t, e) {
                    function i(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++);
                        for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                        return e > r ? [] : t.slice(e, r - e + 1)
                    }
                    t = r.resolve(t).substr(1), e = r.resolve(e).substr(1);
                    for (var n = i(t.split("/")), o = i(e.split("/")), s = Math.min(n.length, o.length), a = s, l = 0; s > l; l++)
                        if (n[l] !== o[l]) {
                            a = l;
                            break
                        }
                    for (var h = [], l = a; l < n.length; l++) h.push("..");
                    return h = h.concat(o.slice(a)), h.join("/")
                }, r.sep = "/", r.delimiter = ":", r.dirname = function(t) {
                    var e = o(t),
                        r = e[0],
                        i = e[1];
                    return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "."
                }, r.basename = function(t, e) {
                    var r = o(t)[2];
                    return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
                }, r.extname = function(t) {
                    return o(t)[3]
                };
                var s = "b" === "ab".substr(-1) ? function(t, e, r) {
                    return t.substr(e, r)
                } : function(t, e, r) {
                    return 0 > e && (e = t.length + e), t.substr(e, r)
                }
            }).call(this, t("_process"))
        }, {
            _process: 4
        }],
        4: [function(t, e, r) {
            function i() {
                if (!a) {
                    a = !0;
                    for (var t, e = s.length; e;) {
                        t = s, s = [];
                        for (var r = -1; ++r < e;) t[r]();
                        e = s.length
                    }
                    a = !1
                }
            }

            function n() {}
            var o = e.exports = {},
                s = [],
                a = !1;
            o.nextTick = function(t) {
                s.push(t), a || setTimeout(i, 0)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = n, o.addListener = n, o.once = n, o.off = n, o.removeListener = n, o.removeAllListeners = n, o.emit = n, o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        }, {}],
        5: [function(e, r, i) {
            (function(e) {
                ! function(n) {
                    function o(t) {
                        throw RangeError(B[t])
                    }

                    function s(t, e) {
                        for (var r = t.length; r--;) t[r] = e(t[r]);
                        return t
                    }

                    function a(t, e) {
                        return s(t.split(P), e).join(".")
                    }

                    function l(t) {
                        for (var e, r, i = [], n = 0, o = t.length; o > n;) e = t.charCodeAt(n++), e >= 55296 && 56319 >= e && o > n ? (r = t.charCodeAt(n++), 56320 == (64512 & r) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--)) : i.push(e);
                        return i
                    }

                    function h(t) {
                        return s(t, function(t) {
                            var e = "";
                            return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t)
                        }).join("")
                    }

                    function u(t) {
                        return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : E
                    }

                    function c(t, e) {
                        return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                    }

                    function d(t, e, r) {
                        var i = 0;
                        for (t = r ? I(t / M) : t >> 1, t += I(t / e); t > L * S >> 1; i += E) t = I(t / L);
                        return I(i + (L + 1) * t / (t + C))
                    }

                    function p(t) {
                        var e, r, i, n, s, a, l, c, p, f, v = [],
                            g = t.length,
                            m = 0,
                            y = R,
                            x = A;
                        for (r = t.lastIndexOf(D), 0 > r && (r = 0), i = 0; r > i; ++i) t.charCodeAt(i) >= 128 && o("not-basic"), v.push(t.charCodeAt(i));
                        for (n = r > 0 ? r + 1 : 0; g > n;) {
                            for (s = m, a = 1, l = E; n >= g && o("invalid-input"), c = u(t.charCodeAt(n++)), (c >= E || c > I((T - m) / a)) && o("overflow"), m += c * a, p = x >= l ? w : l >= x + S ? S : l - x, !(p > c); l += E) f = E - p, a > I(T / f) && o("overflow"), a *= f;
                            e = v.length + 1, x = d(m - s, e, 0 == s), I(m / e) > T - y && o("overflow"), y += I(m / e), m %= e, v.splice(m++, 0, y)
                        }
                        return h(v)
                    }

                    function f(t) {
                        var e, r, i, n, s, a, h, u, p, f, v, g, m, y, x, b = [];
                        for (t = l(t), g = t.length, e = R, r = 0, s = A, a = 0; g > a; ++a) v = t[a], 128 > v && b.push(N(v));
                        for (i = n = b.length, n && b.push(D); g > i;) {
                            for (h = T, a = 0; g > a; ++a) v = t[a], v >= e && h > v && (h = v);
                            for (m = i + 1, h - e > I((T - r) / m) && o("overflow"), r += (h - e) * m, e = h, a = 0; g > a; ++a)
                                if (v = t[a], e > v && ++r > T && o("overflow"), v == e) {
                                    for (u = r, p = E; f = s >= p ? w : p >= s + S ? S : p - s, !(f > u); p += E) x = u - f, y = E - f, b.push(N(c(f + x % y, 0))), u = I(x / y);
                                    b.push(N(c(u, 0))), s = d(r, m, i == n), r = 0, ++i
                                }++r, ++e
                        }
                        return b.join("")
                    }

                    function v(t) {
                        return a(t, function(t) {
                            return O.test(t) ? p(t.slice(4).toLowerCase()) : t
                        })
                    }

                    function g(t) {
                        return a(t, function(t) {
                            return F.test(t) ? "xn--" + f(t) : t
                        })
                    }
                    var m = "object" == typeof i && i,
                        y = "object" == typeof r && r && r.exports == m && r,
                        x = "object" == typeof e && e;
                    (x.global === x || x.window === x) && (n = x);
                    var b, _, T = 2147483647,
                        E = 36,
                        w = 1,
                        S = 26,
                        C = 38,
                        M = 700,
                        A = 72,
                        R = 128,
                        D = "-",
                        O = /^xn--/,
                        F = /[^ -~]/,
                        P = /\x2E|\u3002|\uFF0E|\uFF61/g,
                        B = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        L = E - w,
                        I = Math.floor,
                        N = String.fromCharCode;
                    if (b = {
                            version: "1.2.4",
                            ucs2: {
                                decode: l,
                                encode: h
                            },
                            decode: p,
                            encode: f,
                            toASCII: g,
                            toUnicode: v
                        }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() {
                        return b
                    });
                    else if (m && !m.nodeType)
                        if (y) y.exports = b;
                        else
                            for (_ in b) b.hasOwnProperty(_) && (m[_] = b[_]);
                    else n.punycode = b
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        6: [function(t, e, r) {
            "use strict";

            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            e.exports = function(t, e, r, o) {
                e = e || "&", r = r || "=";
                var s = {};
                if ("string" != typeof t || 0 === t.length) return s;
                var a = /\+/g;
                t = t.split(e);
                var l = 1e3;
                o && "number" == typeof o.maxKeys && (l = o.maxKeys);
                var h = t.length;
                l > 0 && h > l && (h = l);
                for (var u = 0; h > u; ++u) {
                    var c, d, p, f, v = t[u].replace(a, "%20"),
                        g = v.indexOf(r);
                    g >= 0 ? (c = v.substr(0, g), d = v.substr(g + 1)) : (c = v, d = ""), p = decodeURIComponent(c), f = decodeURIComponent(d), i(s, p) ? n(s[p]) ? s[p].push(f) : s[p] = [s[p], f] : s[p] = f
                }
                return s
            };
            var n = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }, {}],
        7: [function(t, e, r) {
            "use strict";

            function i(t, e) {
                if (t.map) return t.map(e);
                for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i], i));
                return r
            }
            var n = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "boolean":
                        return t ? "true" : "false";
                    case "number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            e.exports = function(t, e, r, a) {
                return e = e || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t ? i(s(t), function(s) {
                    var a = encodeURIComponent(n(s)) + r;
                    return o(t[s]) ? i(t[s], function(t) {
                        return a + encodeURIComponent(n(t))
                    }).join(e) : a + encodeURIComponent(n(t[s]))
                }).join(e) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t)) : ""
            };
            var o = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                s = Object.keys || function(t) {
                    var e = [];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
                    return e
                }
        }, {}],
        8: [function(t, e, r) {
            "use strict";
            r.decode = r.parse = t("./decode"), r.encode = r.stringify = t("./encode")
        }, {
            "./decode": 6,
            "./encode": 7
        }],
        9: [function(t, e, r) {
            function i() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function n(t, e, r) {
                if (t && h(t) && t instanceof i) return t;
                var n = new i;
                return n.parse(t, e, r), n
            }

            function o(t) {
                return l(t) && (t = n(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
            }

            function s(t, e) {
                return n(t, !1, !0).resolve(e)
            }

            function a(t, e) {
                return t ? n(t, !1, !0).resolveObject(e) : e
            }

            function l(t) {
                return "string" == typeof t
            }

            function h(t) {
                return "object" == typeof t && null !== t
            }

            function u(t) {
                return null === t
            }

            function c(t) {
                return null == t
            }
            var d = t("punycode");
            r.parse = n, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = i;
            var p = /^([a-z0-9.+-]+:)/i,
                f = /:[0-9]*$/,
                v = ["<", ">", '"', "`", " ", "\r", "\n", "  "],
                g = ["{", "}", "|", "\\", "^", "`"].concat(v),
                m = ["'"].concat(g),
                y = ["%", "/", "?", ";", "#"].concat(m),
                x = ["/", "?", "#"],
                b = 255,
                _ = /^[a-z0-9A-Z_-]{0,63}$/,
                T = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
                E = {
                    javascript: !0,
                    "javascript:": !0
                },
                w = {
                    javascript: !0,
                    "javascript:": !0
                },
                S = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                C = t("querystring");
            i.prototype.parse = function(t, e, r) {
                if (!l(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var i = t;
                i = i.trim();
                var n = p.exec(i);
                if (n) {
                    n = n[0];
                    var o = n.toLowerCase();
                    this.protocol = o, i = i.substr(n.length)
                }
                if (r || n || i.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var s = "//" === i.substr(0, 2);
                    !s || n && w[n] || (i = i.substr(2), this.slashes = !0)
                }
                if (!w[n] && (s || n && !S[n])) {
                    for (var a = -1, h = 0; h < x.length; h++) {
                        var u = i.indexOf(x[h]); - 1 !== u && (-1 === a || a > u) && (a = u)
                    }
                    var c, f;
                    f = -1 === a ? i.lastIndexOf("@") : i.lastIndexOf("@", a), -1 !== f && (c = i.slice(0, f), i = i.slice(f + 1), this.auth = decodeURIComponent(c)), a = -1;
                    for (var h = 0; h < y.length; h++) {
                        var u = i.indexOf(y[h]); - 1 !== u && (-1 === a || a > u) && (a = u)
                    } - 1 === a && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || "";
                    var v = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!v)
                        for (var g = this.hostname.split(/\./), h = 0, M = g.length; M > h; h++) {
                            var A = g[h];
                            if (A && !A.match(_)) {
                                for (var R = "", D = 0, O = A.length; O > D; D++) R += A.charCodeAt(D) > 127 ? "x" : A[D];
                                if (!R.match(_)) {
                                    var F = g.slice(0, h),
                                        P = g.slice(h + 1),
                                        B = A.match(T);
                                    B && (F.push(B[1]), P.unshift(B[2])), P.length && (i = "/" + P.join(".") + i), this.hostname = F.join(".");
                                    break
                                }
                            }
                        }
                    if (this.hostname = this.hostname.length > b ? "" : this.hostname.toLowerCase(), !v) {
                        for (var L = this.hostname.split("."), I = [], h = 0; h < L.length; ++h) {
                            var N = L[h];
                            I.push(N.match(/[^A-Za-z0-9_-]/) ? "xn--" + d.encode(N) : N)
                        }
                        this.hostname = I.join(".")
                    }
                    var U = this.port ? ":" + this.port : "",
                        k = this.hostname || "";
                    this.host = k + U, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
                }
                if (!E[o])
                    for (var h = 0, M = m.length; M > h; h++) {
                        var j = m[h],
                            Y = encodeURIComponent(j);
                        Y === j && (Y = escape(j)), i = i.split(j).join(Y)
                    }
                var z = i.indexOf("#"); - 1 !== z && (this.hash = i.substr(z), i = i.slice(0, z));
                var X = i.indexOf("?");
                if (-1 !== X ? (this.search = i.substr(X), this.query = i.substr(X + 1), e && (this.query = C.parse(this.query)), i = i.slice(0, X)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), S[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var U = this.pathname || "",
                        N = this.search || "";
                    this.path = U + N
                }
                return this.href = this.format(), this
            }, i.prototype.format = function() {
                var t = this.auth || "";
                t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "",
                    r = this.pathname || "",
                    i = this.hash || "",
                    n = !1,
                    o = "";
                this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && h(this.query) && Object.keys(this.query).length && (o = C.stringify(this.query));
                var s = this.search || o && "?" + o || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || S[e]) && n !== !1 ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function(t) {
                    return encodeURIComponent(t)
                }), s = s.replace("#", "%23"), e + n + r + s + i
            }, i.prototype.resolve = function(t) {
                return this.resolveObject(n(t, !1, !0)).format()
            }, i.prototype.resolveObject = function(t) {
                if (l(t)) {
                    var e = new i;
                    e.parse(t, !1, !0), t = e
                }
                var r = new i;
                if (Object.keys(this).forEach(function(t) {
                        r[t] = this[t]
                    }, this), r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
                if (t.slashes && !t.protocol) return Object.keys(t).forEach(function(e) {
                    "protocol" !== e && (r[e] = t[e])
                }), S[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
                if (t.protocol && t.protocol !== r.protocol) {
                    if (!S[t.protocol]) return Object.keys(t).forEach(function(e) {
                        r[e] = t[e]
                    }), r.href = r.format(), r;
                    if (r.protocol = t.protocol, t.host || w[t.protocol]) r.pathname = t.pathname;
                    else {
                        for (var n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), r.pathname = n.join("/")
                    }
                    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                        var o = r.pathname || "",
                            s = r.search || "";
                        r.path = o + s
                    }
                    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
                }
                var a = r.pathname && "/" === r.pathname.charAt(0),
                    h = t.host || t.pathname && "/" === t.pathname.charAt(0),
                    d = h || a || r.host && t.pathname,
                    p = d,
                    f = r.pathname && r.pathname.split("/") || [],
                    n = t.pathname && t.pathname.split("/") || [],
                    v = r.protocol && !S[r.protocol];
                if (v && (r.hostname = "", r.port = null, r.host && ("" === f[0] ? f[0] = r.host : f.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === n[0] ? n[0] = t.host : n.unshift(t.host)), t.host = null), d = d && ("" === n[0] || "" === f[0])), h) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, f = n;
                else if (n.length) f || (f = []), f.pop(), f = f.concat(n), r.search = t.search, r.query = t.query;
                else if (!c(t.search)) {
                    if (v) {
                        r.hostname = r.host = f.shift();
                        var g = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                        g && (r.auth = g.shift(), r.host = r.hostname = g.shift())
                    }
                    return r.search = t.search, r.query = t.query, u(r.pathname) && u(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
                }
                if (!f.length) return r.pathname = null, r.path = r.search ? "/" + r.search : null, r.href = r.format(), r;
                for (var m = f.slice(-1)[0], y = (r.host || t.host) && ("." === m || ".." === m) || "" === m, x = 0, b = f.length; b >= 0; b--) m = f[b], "." == m ? f.splice(b, 1) : ".." === m ? (f.splice(b, 1), x++) : x && (f.splice(b, 1), x--);
                if (!d && !p)
                    for (; x--; x) f.unshift("..");
                !d || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), y && "/" !== f.join("/").substr(-1) && f.push("");
                var _ = "" === f[0] || f[0] && "/" === f[0].charAt(0);
                if (v) {
                    r.hostname = r.host = _ ? "" : f.length ? f.shift() : "";
                    var g = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                    g && (r.auth = g.shift(), r.host = r.hostname = g.shift())
                }
                return d = d || r.host && f.length, d && !_ && f.unshift(""), f.length ? r.pathname = f.join("/") : (r.pathname = null, r.path = null), u(r.pathname) && u(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
            }, i.prototype.parseHost = function() {
                var t = this.host,
                    e = f.exec(t);
                e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        }, {
            punycode: 5,
            querystring: 8
        }],
        10: [function(t, e, r) {
            "use strict";

            function i(t, e, r) {
                r = r || 2;
                var i = e && e.length,
                    a = i ? e[0] * r : t.length,
                    l = o(t, n(t, 0, a, r, !0)),
                    h = [];
                if (!l) return h;
                var c, d, p, f, v, g, m;
                if (i && (l = u(t, e, l, r)), t.length > 80 * r) {
                    c = p = t[0], d = f = t[1];
                    for (var y = r; a > y; y += r) v = t[y], g = t[y + 1], c > v && (c = v), d > g && (d = g), v > p && (p = v), g > f && (f = g);
                    m = Math.max(p - c, f - d)
                }
                return s(t, l, h, r, c, d, m), h
            }

            function n(t, e, r, i, n) {
                var o, s, a, l = 0;
                for (o = e, s = r - i; r > o; o += i) l += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
                if (n === l > 0)
                    for (o = e; r > o; o += i) a = S(o, a);
                else
                    for (o = r - i; o >= e; o -= i) a = S(o, a);
                return a
            }

            function o(t, e, r) {
                r || (r = e);
                var i, n = e;
                do
                    if (i = !1, x(t, n.i, n.next.i) || 0 === y(t, n.prev.i, n.i, n.next.i)) {
                        if (n.prev.next = n.next, n.next.prev = n.prev, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ), n = r = n.prev, n === n.next) return null;
                        i = !0
                    } else n = n.next;
                while (i || n !== r);
                return r
            }

            function s(t, e, r, i, n, u, c, d) {
                if (e) {
                    d || void 0 === n || p(t, e, n, u, c);
                    for (var f, v, g = e; e.prev !== e.next;)
                        if (f = e.prev, v = e.next, a(t, e, n, u, c)) r.push(f.i / i), r.push(e.i / i), r.push(v.i / i), v.prev = f, f.next = v, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), e = v.next, g = v.next;
                        else if (e = v, e === g) {
                        d ? 1 === d ? (e = l(t, e, r, i), s(t, e, r, i, n, u, c, 2)) : 2 === d && h(t, e, r, i, n, u, c) : s(t, o(t, e), r, i, n, u, c, 1);
                        break
                    }
                }
            }

            function a(t, e, r, i, n) {
                var o = e.prev.i,
                    s = e.i,
                    a = e.next.i,
                    l = t[o],
                    h = t[o + 1],
                    u = t[s],
                    c = t[s + 1],
                    d = t[a],
                    p = t[a + 1],
                    f = l * c - h * u,
                    g = l * p - h * d,
                    m = d * c - p * u,
                    y = f - g - m;
                if (0 >= y) return !1;
                var x, b, _, T, E, w, S, C = p - h,
                    M = l - d,
                    A = h - c,
                    R = u - l;
                if (void 0 !== r) {
                    var D = u > l ? d > l ? l : d : d > u ? u : d,
                        O = c > h ? p > h ? h : p : p > c ? c : p,
                        F = l > u ? l > d ? l : d : u > d ? u : d,
                        P = h > c ? h > p ? h : p : c > p ? c : p,
                        B = v(D, O, r, i, n),
                        L = v(F, P, r, i, n);
                    for (S = e.nextZ; S && S.z <= L;)
                        if (x = S.i, S = S.nextZ, x !== o && x !== a && (b = t[x], _ = t[x + 1], T = C * b + M * _ - g, T >= 0 && (E = A * b + R * _ + f, E >= 0 && (w = y - T - E, w >= 0 && (T && E || T && w || E && w))))) return !1;
                    for (S = e.prevZ; S && S.z >= B;)
                        if (x = S.i, S = S.prevZ, x !== o && x !== a && (b = t[x], _ = t[x + 1], T = C * b + M * _ - g, T >= 0 && (E = A * b + R * _ + f, E >= 0 && (w = y - T - E, w >= 0 && (T && E || T && w || E && w))))) return !1
                } else
                    for (S = e.next.next; S !== e.prev;)
                        if (x = S.i, S = S.next, b = t[x], _ = t[x + 1], T = C * b + M * _ - g, T >= 0 && (E = A * b + R * _ + f, E >= 0 && (w = y - T - E, w >= 0 && (T && E || T && w || E && w)))) return !1; return !0
            }

            function l(t, e, r, i) {
                var n = e;
                do {
                    var o = n.prev,
                        s = n.next.next;
                    if (o.i !== s.i && b(t, o.i, n.i, n.next.i, s.i) && T(t, o, s) && T(t, s, o)) {
                        r.push(o.i / i), r.push(n.i / i), r.push(s.i / i), o.next = s, s.prev = o;
                        var a = n.prevZ,
                            l = n.nextZ && n.nextZ.nextZ;
                        a && (a.nextZ = l), l && (l.prevZ = a), n = e = s
                    }
                    n = n.next
                } while (n !== e);
                return n
            }

            function h(t, e, r, i, n, a, l) {
                var h = e;
                do {
                    for (var u = h.next.next; u !== h.prev;) {
                        if (h.i !== u.i && m(t, h, u)) {
                            var c = w(h, u);
                            return h = o(t, h, h.next), c = o(t, c, c.next), s(t, h, r, i, n, a, l), void s(t, c, r, i, n, a, l)
                        }
                        u = u.next
                    }
                    h = h.next
                } while (h !== e)
            }

            function u(t, e, r, i) {
                var s, a, l, h, u, d = [];
                for (s = 0, a = e.length; a > s; s++) l = e[s] * i, h = a - 1 > s ? e[s + 1] * i : t.length, u = o(t, n(t, l, h, i, !1)), u && d.push(g(t, u));
                for (d.sort(function(e, r) {
                        return t[e.i] - t[r.i]
                    }), s = 0; s < d.length; s++) c(t, d[s], r), r = o(t, r, r.next);
                return r
            }

            function c(t, e, r) {
                if (r = d(t, e, r)) {
                    var i = w(r, e);
                    o(t, i, i.next)
                }
            }

            function d(t, e, r) {
                var i, n, o, s = r,
                    a = e.i,
                    l = t[a],
                    h = t[a + 1],
                    u = -(1 / 0);
                do {
                    if (n = s.i, o = s.next.i, h <= t[n + 1] && h >= t[o + 1]) {
                        var c = t[n] + (h - t[n + 1]) * (t[o] - t[n]) / (t[o + 1] - t[n + 1]);
                        l >= c && c > u && (u = c, i = t[n] < t[o] ? s : s.next)
                    }
                    s = s.next
                } while (s !== r);
                if (!i) return null;
                var d, p, f, v, g, m, y = t[i.i],
                    x = t[i.i + 1],
                    b = l * x - h * y,
                    _ = l * h - h * u,
                    E = h - h,
                    w = l - u,
                    S = h - x,
                    C = y - l,
                    M = b - _ - (u * x - h * y),
                    A = 0 >= M ? -1 : 1,
                    R = i,
                    D = 1 / 0;
                for (s = i.next; s !== R;) d = t[s.i], p = t[s.i + 1], f = l - d, f >= 0 && d >= y && (v = (E * d + w * p - _) * A, v >= 0 && (g = (S * d + C * p + b) * A, g >= 0 && M * A - v - g >= 0 && (m = Math.abs(h - p) / f, D > m && T(t, s, e) && (i = s, D = m)))), s = s.next;
                return i
            }

            function p(t, e, r, i, n) {
                var o = e;
                do null === o.z && (o.z = v(t[o.i], t[o.i + 1], r, i, n)), o.prevZ = o.prev, o.nextZ = o.next, o = o.next; while (o !== e);
                o.prevZ.nextZ = null, o.prevZ = null, f(o)
            }

            function f(t) {
                var e, r, i, n, o, s, a, l, h = 1;
                do {
                    for (r = t, t = null, o = null, s = 0; r;) {
                        for (s++, i = r, a = 0, e = 0; h > e && (a++, i = i.nextZ); e++);
                        for (l = h; a > 0 || l > 0 && i;) 0 === a ? (n = i, i = i.nextZ, l--) : 0 !== l && i ? r.z <= i.z ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, l--) : (n = r, r = r.nextZ, a--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                        r = i
                    }
                    o.nextZ = null, h *= 2
                } while (s > 1);
                return t
            }

            function v(t, e, r, i, n) {
                return t = 1e3 * (t - r) / n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 1e3 * (e - i) / n, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
            }

            function g(t, e) {
                var r = e,
                    i = e;
                do t[r.i] < t[i.i] && (i = r), r = r.next; while (r !== e);
                return i
            }

            function m(t, e, r) {
                return !_(t, e, e.i, r.i) && T(t, e, r) && T(t, r, e) && E(t, e, e.i, r.i)
            }

            function y(t, e, r, i) {
                var n = (t[r + 1] - t[e + 1]) * (t[i] - t[r]) - (t[r] - t[e]) * (t[i + 1] - t[r + 1]);
                return n > 0 ? 1 : 0 > n ? -1 : 0
            }

            function x(t, e, r) {
                return t[e] === t[r] && t[e + 1] === t[r + 1]
            }

            function b(t, e, r, i, n) {
                return y(t, e, r, i) !== y(t, e, r, n) && y(t, i, n, e) !== y(t, i, n, r)
            }

            function _(t, e, r, i) {
                var n = e;
                do {
                    var o = n.i,
                        s = n.next.i;
                    if (o !== r && s !== r && o !== i && s !== i && b(t, o, s, r, i)) return !0;
                    n = n.next
                } while (n !== e);
                return !1
            }

            function T(t, e, r) {
                return -1 === y(t, e.prev.i, e.i, e.next.i) ? -1 !== y(t, e.i, r.i, e.next.i) && -1 !== y(t, e.i, e.prev.i, r.i) : -1 === y(t, e.i, r.i, e.prev.i) || -1 === y(t, e.i, e.next.i, r.i)
            }

            function E(t, e, r, i) {
                var n = e,
                    o = !1,
                    s = (t[r] + t[i]) / 2,
                    a = (t[r + 1] + t[i + 1]) / 2;
                do {
                    var l = n.i,
                        h = n.next.i;
                    t[l + 1] > a != t[h + 1] > a && s < (t[h] - t[l]) * (a - t[l + 1]) / (t[h + 1] - t[l + 1]) + t[l] && (o = !o), n = n.next
                } while (n !== e);
                return o
            }

            function w(t, e) {
                var r = new C(t.i),
                    i = new C(e.i),
                    n = t.next,
                    o = e.prev;
                return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i
            }

            function S(t, e) {
                var r = new C(t);
                return e ? (r.next = e.next, r.prev = e, e.next.prev = r, e.next = r) : (r.prev = r, r.next = r), r
            }

            function C(t) {
                this.i = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null
            }
            e.exports = i
        }, {}],
        11: [function(t, e, r) {
            "use strict";

            function i(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function n() {}
            var o = "function" != typeof Object.create ? "~" : !1;
            n.prototype._events = void 0, n.prototype.listeners = function(t, e) {
                var r = o ? o + t : t,
                    i = this._events && this._events[r];
                if (e) return !!i;
                if (!i) return [];
                if (this._events[r].fn) return [this._events[r].fn];
                for (var n = 0, s = this._events[r].length, a = new Array(s); s > n; n++) a[n] = this._events[r][n].fn;
                return a
            }, n.prototype.emit = function(t, e, r, i, n, s) {
                var a = o ? o + t : t;
                if (!this._events || !this._events[a]) return !1;
                var l, h, u = this._events[a],
                    c = arguments.length;
                if ("function" == typeof u.fn) {
                    switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, e), !0;
                        case 3:
                            return u.fn.call(u.context, e, r), !0;
                        case 4:
                            return u.fn.call(u.context, e, r, i), !0;
                        case 5:
                            return u.fn.call(u.context, e, r, i, n), !0;
                        case 6:
                            return u.fn.call(u.context, e, r, i, n, s), !0
                    }
                    for (h = 1, l = new Array(c - 1); c > h; h++) l[h - 1] = arguments[h];
                    u.fn.apply(u.context, l)
                } else {
                    var d, p = u.length;
                    for (h = 0; p > h; h++) switch (u[h].once && this.removeListener(t, u[h].fn, void 0, !0), c) {
                        case 1:
                            u[h].fn.call(u[h].context);
                            break;
                        case 2:
                            u[h].fn.call(u[h].context, e);
                            break;
                        case 3:
                            u[h].fn.call(u[h].context, e, r);
                            break;
                        default:
                            if (!l)
                                for (d = 1, l = new Array(c - 1); c > d; d++) l[d - 1] = arguments[d];
                            u[h].fn.apply(u[h].context, l)
                    }
                }
                return !0
            }, n.prototype.on = function(t, e, r) {
                var n = new i(e, r || this),
                    s = o ? o + t : t;
                return this._events || (this._events = o ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n, this
            }, n.prototype.once = function(t, e, r) {
                var n = new i(e, r || this, !0),
                    s = o ? o + t : t;
                return this._events || (this._events = o ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n, this
            }, n.prototype.removeListener = function(t, e, r, i) {
                var n = o ? o + t : t;
                if (!this._events || !this._events[n]) return this;
                var s = this._events[n],
                    a = [];
                if (e)
                    if (s.fn)(s.fn !== e || i && !s.once || r && s.context !== r) && a.push(s);
                    else
                        for (var l = 0, h = s.length; h > l; l++)(s[l].fn !== e || i && !s[l].once || r && s[l].context !== r) && a.push(s[l]);
                return a.length ? this._events[n] = 1 === a.length ? a[0] : a : delete this._events[n], this
            }, n.prototype.removeAllListeners = function(t) {
                return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null), this) : this
            }, n.prototype.off = n.prototype.removeListener, n.prototype.addListener = n.prototype.on, n.prototype.setMaxListeners = function() {
                return this
            }, n.prefixed = o, e.exports = n
        }, {}],
        12: [function(t, e, r) {
            "use strict";

            function i(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            e.exports = Object.assign || function(t, e) {
                for (var r, n, o = i(t), s = 1; s < arguments.length; s++) {
                    r = arguments[s], n = Object.keys(Object(r));
                    for (var a = 0; a < n.length; a++) o[n[a]] = r[n[a]]
                }
                return o
            }
        }, {}],
        13: [function(e, r, i) {
            (function(e) {
                ! function() {
                    function i(t) {
                        var e = !1;
                        return function() {
                            if (e) throw new Error("Callback was already called.");
                            e = !0, t.apply(n, arguments)
                        }
                    }
                    var n, o, s = {};
                    n = this, null != n && (o = n.async), s.noConflict = function() {
                        return n.async = o, s
                    };
                    var a = Object.prototype.toString,
                        l = Array.isArray || function(t) {
                            return "[object Array]" === a.call(t)
                        },
                        h = function(t, e) {
                            if (t.forEach) return t.forEach(e);
                            for (var r = 0; r < t.length; r += 1) e(t[r], r, t)
                        },
                        u = function(t, e) {
                            if (t.map) return t.map(e);
                            var r = [];
                            return h(t, function(t, i, n) {
                                r.push(e(t, i, n))
                            }), r
                        },
                        c = function(t, e, r) {
                            return t.reduce ? t.reduce(e, r) : (h(t, function(t, i, n) {
                                r = e(r, t, i, n)
                            }), r)
                        },
                        d = function(t) {
                            if (Object.keys) return Object.keys(t);
                            var e = [];
                            for (var r in t) t.hasOwnProperty(r) && e.push(r);
                            return e
                        };
                    "undefined" != typeof e && e.nextTick ? (s.nextTick = e.nextTick, s.setImmediate = "undefined" != typeof setImmediate ? function(t) {
                        setImmediate(t)
                    } : s.nextTick) : "function" == typeof setImmediate ? (s.nextTick = function(t) {
                        setImmediate(t)
                    }, s.setImmediate = s.nextTick) : (s.nextTick = function(t) {
                        setTimeout(t, 0)
                    }, s.setImmediate = s.nextTick), s.each = function(t, e, r) {
                        function n(e) {
                            e ? (r(e), r = function() {}) : (o += 1, o >= t.length && r())
                        }
                        if (r = r || function() {}, !t.length) return r();
                        var o = 0;
                        h(t, function(t) {
                            e(t, i(n))
                        })
                    }, s.forEach = s.each, s.eachSeries = function(t, e, r) {
                        if (r = r || function() {}, !t.length) return r();
                        var i = 0,
                            n = function() {
                                e(t[i], function(e) {
                                    e ? (r(e), r = function() {}) : (i += 1, i >= t.length ? r() : n())
                                })
                            };
                        n()
                    }, s.forEachSeries = s.eachSeries, s.eachLimit = function(t, e, r, i) {
                        var n = p(e);
                        n.apply(null, [t, r, i])
                    }, s.forEachLimit = s.eachLimit;
                    var p = function(t) {
                            return function(e, r, i) {
                                if (i = i || function() {}, !e.length || 0 >= t) return i();
                                var n = 0,
                                    o = 0,
                                    s = 0;
                                ! function a() {
                                    if (n >= e.length) return i();
                                    for (; t > s && o < e.length;) o += 1, s += 1, r(e[o - 1], function(t) {
                                        t ? (i(t), i = function() {}) : (n += 1, s -= 1, n >= e.length ? i() : a())
                                    })
                                }()
                            }
                        },
                        f = function(t) {
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [s.each].concat(e))
                            }
                        },
                        v = function(t, e) {
                            return function() {
                                var r = Array.prototype.slice.call(arguments);
                                return e.apply(null, [p(t)].concat(r))
                            }
                        },
                        g = function(t) {
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [s.eachSeries].concat(e))
                            }
                        },
                        m = function(t, e, r, i) {
                            if (e = u(e, function(t, e) {
                                    return {
                                        index: e,
                                        value: t
                                    }
                                }), i) {
                                var n = [];
                                t(e, function(t, e) {
                                    r(t.value, function(r, i) {
                                        n[t.index] = i, e(r)
                                    })
                                }, function(t) {
                                    i(t, n)
                                })
                            } else t(e, function(t, e) {
                                r(t.value, function(t) {
                                    e(t)
                                })
                            })
                        };
                    s.map = f(m), s.mapSeries = g(m), s.mapLimit = function(t, e, r, i) {
                        return y(e)(t, r, i)
                    };
                    var y = function(t) {
                        return v(t, m)
                    };
                    s.reduce = function(t, e, r, i) {
                        s.eachSeries(t, function(t, i) {
                            r(e, t, function(t, r) {
                                e = r, i(t)
                            })
                        }, function(t) {
                            i(t, e)
                        })
                    }, s.inject = s.reduce, s.foldl = s.reduce, s.reduceRight = function(t, e, r, i) {
                        var n = u(t, function(t) {
                            return t
                        }).reverse();
                        s.reduce(n, e, r, i)
                    }, s.foldr = s.reduceRight;
                    var x = function(t, e, r, i) {
                        var n = [];
                        e = u(e, function(t, e) {
                            return {
                                index: e,
                                value: t
                            }
                        }), t(e, function(t, e) {
                            r(t.value, function(r) {
                                r && n.push(t), e()
                            })
                        }, function(t) {
                            i(u(n.sort(function(t, e) {
                                return t.index - e.index
                            }), function(t) {
                                return t.value
                            }))
                        })
                    };
                    s.filter = f(x), s.filterSeries = g(x), s.select = s.filter, s.selectSeries = s.filterSeries;
                    var b = function(t, e, r, i) {
                        var n = [];
                        e = u(e, function(t, e) {
                            return {
                                index: e,
                                value: t
                            }
                        }), t(e, function(t, e) {
                            r(t.value, function(r) {
                                r || n.push(t), e()
                            })
                        }, function(t) {
                            i(u(n.sort(function(t, e) {
                                return t.index - e.index
                            }), function(t) {
                                return t.value
                            }))
                        })
                    };
                    s.reject = f(b), s.rejectSeries = g(b);
                    var _ = function(t, e, r, i) {
                        t(e, function(t, e) {
                            r(t, function(r) {
                                r ? (i(t), i = function() {}) : e()
                            })
                        }, function(t) {
                            i()
                        })
                    };
                    s.detect = f(_), s.detectSeries = g(_), s.some = function(t, e, r) {
                        s.each(t, function(t, i) {
                            e(t, function(t) {
                                t && (r(!0), r = function() {}), i()
                            })
                        }, function(t) {
                            r(!1)
                        })
                    }, s.any = s.some, s.every = function(t, e, r) {
                        s.each(t, function(t, i) {
                            e(t, function(t) {
                                t || (r(!1), r = function() {}), i()
                            })
                        }, function(t) {
                            r(!0)
                        })
                    }, s.all = s.every, s.sortBy = function(t, e, r) {
                        s.map(t, function(t, r) {
                            e(t, function(e, i) {
                                e ? r(e) : r(null, {
                                    value: t,
                                    criteria: i
                                })
                            })
                        }, function(t, e) {
                            if (t) return r(t);
                            var i = function(t, e) {
                                var r = t.criteria,
                                    i = e.criteria;
                                return i > r ? -1 : r > i ? 1 : 0
                            };
                            r(null, u(e.sort(i), function(t) {
                                return t.value
                            }))
                        })
                    }, s.auto = function(t, e) {
                        e = e || function() {};
                        var r = d(t),
                            i = r.length;
                        if (!i) return e();
                        var n = {},
                            o = [],
                            a = function(t) {
                                o.unshift(t)
                            },
                            u = function(t) {
                                for (var e = 0; e < o.length; e += 1)
                                    if (o[e] === t) return void o.splice(e, 1)
                            },
                            p = function() {
                                i--, h(o.slice(0), function(t) {
                                    t()
                                })
                            };
                        a(function() {
                            if (!i) {
                                var t = e;
                                e = function() {}, t(null, n)
                            }
                        }), h(r, function(r) {
                            var i = l(t[r]) ? t[r] : [t[r]],
                                o = function(t) {
                                    var i = Array.prototype.slice.call(arguments, 1);
                                    if (i.length <= 1 && (i = i[0]), t) {
                                        var o = {};
                                        h(d(n), function(t) {
                                            o[t] = n[t]
                                        }), o[r] = i, e(t, o), e = function() {}
                                    } else n[r] = i, s.setImmediate(p)
                                },
                                f = i.slice(0, Math.abs(i.length - 1)) || [],
                                v = function() {
                                    return c(f, function(t, e) {
                                        return t && n.hasOwnProperty(e)
                                    }, !0) && !n.hasOwnProperty(r)
                                };
                            if (v()) i[i.length - 1](o, n);
                            else {
                                var g = function() {
                                    v() && (u(g), i[i.length - 1](o, n))
                                };
                                a(g)
                            }
                        })
                    }, s.retry = function(t, e, r) {
                        var i = 5,
                            n = [];
                        "function" == typeof t && (r = e, e = t, t = i), t = parseInt(t, 10) || i;
                        var o = function(i, o) {
                            for (var a = function(t, e) {
                                    return function(r) {
                                        t(function(t, i) {
                                            r(!t || e, {
                                                err: t,
                                                result: i
                                            })
                                        }, o)
                                    }
                                }; t;) n.push(a(e, !(t -= 1)));
                            s.series(n, function(t, e) {
                                e = e[e.length - 1], (i || r)(e.err, e.result)
                            })
                        };
                        return r ? o() : o
                    }, s.waterfall = function(t, e) {
                        if (e = e || function() {}, !l(t)) {
                            var r = new Error("First argument to waterfall must be an array of functions");
                            return e(r)
                        }
                        if (!t.length) return e();
                        var i = function(t) {
                            return function(r) {
                                if (r) e.apply(null, arguments), e = function() {};
                                else {
                                    var n = Array.prototype.slice.call(arguments, 1),
                                        o = t.next();
                                    n.push(o ? i(o) : e), s.setImmediate(function() {
                                        t.apply(null, n)
                                    })
                                }
                            }
                        };
                        i(s.iterator(t))()
                    };
                    var T = function(t, e, r) {
                        if (r = r || function() {}, l(e)) t.map(e, function(t, e) {
                            t && t(function(t) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                r.length <= 1 && (r = r[0]), e.call(null, t, r)
                            })
                        }, r);
                        else {
                            var i = {};
                            t.each(d(e), function(t, r) {
                                e[t](function(e) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    n.length <= 1 && (n = n[0]), i[t] = n, r(e)
                                })
                            }, function(t) {
                                r(t, i)
                            })
                        }
                    };
                    s.parallel = function(t, e) {
                        T({
                            map: s.map,
                            each: s.each
                        }, t, e)
                    }, s.parallelLimit = function(t, e, r) {
                        T({
                            map: y(e),
                            each: p(e)
                        }, t, r)
                    }, s.series = function(t, e) {
                        if (e = e || function() {}, l(t)) s.mapSeries(t, function(t, e) {
                            t && t(function(t) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                r.length <= 1 && (r = r[0]), e.call(null, t, r)
                            })
                        }, e);
                        else {
                            var r = {};
                            s.eachSeries(d(t), function(e, i) {
                                t[e](function(t) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    n.length <= 1 && (n = n[0]), r[e] = n, i(t)
                                })
                            }, function(t) {
                                e(t, r)
                            })
                        }
                    }, s.iterator = function(t) {
                        var e = function(r) {
                            var i = function() {
                                return t.length && t[r].apply(null, arguments), i.next()
                            };
                            return i.next = function() {
                                return r < t.length - 1 ? e(r + 1) : null
                            }, i
                        };
                        return e(0)
                    }, s.apply = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
                        }
                    };
                    var E = function(t, e, r, i) {
                        var n = [];
                        t(e, function(t, e) {
                            r(t, function(t, r) {
                                n = n.concat(r || []), e(t)
                            })
                        }, function(t) {
                            i(t, n)
                        })
                    };
                    s.concat = f(E), s.concatSeries = g(E), s.whilst = function(t, e, r) {
                        t() ? e(function(i) {
                            return i ? r(i) : void s.whilst(t, e, r)
                        }) : r()
                    }, s.doWhilst = function(t, e, r) {
                        t(function(i) {
                            if (i) return r(i);
                            var n = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, n) ? s.doWhilst(t, e, r) : r()
                        })
                    }, s.until = function(t, e, r) {
                        t() ? r() : e(function(i) {
                            return i ? r(i) : void s.until(t, e, r)
                        })
                    }, s.doUntil = function(t, e, r) {
                        t(function(i) {
                            if (i) return r(i);
                            var n = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, n) ? r() : s.doUntil(t, e, r)
                        })
                    }, s.queue = function(t, e) {
                        function r(t, e, r, i) {
                            return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() {
                                t.drain && t.drain()
                            }) : void h(e, function(e) {
                                var n = {
                                    data: e,
                                    callback: "function" == typeof i ? i : null
                                };
                                r ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                            })
                        }
                        void 0 === e && (e = 1);
                        var n = 0,
                            o = {
                                tasks: [],
                                concurrency: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                started: !1,
                                paused: !1,
                                push: function(t, e) {
                                    r(o, t, !1, e)
                                },
                                kill: function() {
                                    o.drain = null, o.tasks = []
                                },
                                unshift: function(t, e) {
                                    r(o, t, !0, e)
                                },
                                process: function() {
                                    if (!o.paused && n < o.concurrency && o.tasks.length) {
                                        var e = o.tasks.shift();
                                        o.empty && 0 === o.tasks.length && o.empty(), n += 1;
                                        var r = function() {
                                                n -= 1, e.callback && e.callback.apply(e, arguments), o.drain && o.tasks.length + n === 0 && o.drain(), o.process()
                                            },
                                            s = i(r);
                                        t(e.data, s)
                                    }
                                },
                                length: function() {
                                    return o.tasks.length
                                },
                                running: function() {
                                    return n
                                },
                                idle: function() {
                                    return o.tasks.length + n === 0
                                },
                                pause: function() {
                                    o.paused !== !0 && (o.paused = !0, o.process())
                                },
                                resume: function() {
                                    o.paused !== !1 && (o.paused = !1, o.process())
                                }
                            };
                        return o
                    }, s.priorityQueue = function(t, e) {
                        function r(t, e) {
                            return t.priority - e.priority
                        }

                        function i(t, e, r) {
                            for (var i = -1, n = t.length - 1; n > i;) {
                                var o = i + (n - i + 1 >>> 1);
                                r(e, t[o]) >= 0 ? i = o : n = o - 1
                            }
                            return i
                        }

                        function n(t, e, n, o) {
                            return t.started || (t.started = !0), l(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() {
                                t.drain && t.drain()
                            }) : void h(e, function(e) {
                                var a = {
                                    data: e,
                                    priority: n,
                                    callback: "function" == typeof o ? o : null
                                };
                                t.tasks.splice(i(t.tasks, a, r) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process)
                            })
                        }
                        var o = s.queue(t, e);
                        return o.push = function(t, e, r) {
                            n(o, t, e, r)
                        }, delete o.unshift, o
                    }, s.cargo = function(t, e) {
                        var r = !1,
                            i = [],
                            n = {
                                tasks: i,
                                payload: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                drained: !0,
                                push: function(t, r) {
                                    l(t) || (t = [t]), h(t, function(t) {
                                        i.push({
                                            data: t,
                                            callback: "function" == typeof r ? r : null
                                        }), n.drained = !1, n.saturated && i.length === e && n.saturated()
                                    }), s.setImmediate(n.process)
                                },
                                process: function o() {
                                    if (!r) {
                                        if (0 === i.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0);
                                        var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length),
                                            a = u(s, function(t) {
                                                return t.data
                                            });
                                        n.empty && n.empty(), r = !0, t(a, function() {
                                            r = !1;
                                            var t = arguments;
                                            h(s, function(e) {
                                                e.callback && e.callback.apply(null, t)
                                            }), o()
                                        })
                                    }
                                },
                                length: function() {
                                    return i.length
                                },
                                running: function() {
                                    return r
                                }
                            };
                        return n
                    };
                    var w = function(t) {
                        return function(e) {
                            var r = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, r.concat([function(e) {
                                var r = Array.prototype.slice.call(arguments, 1);
                                "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && h(r, function(e) {
                                    console[t](e)
                                }))
                            }]))
                        }
                    };
                    s.log = w("log"), s.dir = w("dir"), s.memoize = function(t, e) {
                        var r = {},
                            i = {};
                        e = e || function(t) {
                            return t
                        };
                        var n = function() {
                            var n = Array.prototype.slice.call(arguments),
                                o = n.pop(),
                                a = e.apply(null, n);
                            a in r ? s.nextTick(function() {
                                o.apply(null, r[a])
                            }) : a in i ? i[a].push(o) : (i[a] = [o], t.apply(null, n.concat([function() {
                                r[a] = arguments;
                                var t = i[a];
                                delete i[a];
                                for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments)
                            }])))
                        };
                        return n.memo = r, n.unmemoized = t, n
                    }, s.unmemoize = function(t) {
                        return function() {
                            return (t.unmemoized || t).apply(null, arguments)
                        }
                    }, s.times = function(t, e, r) {
                        for (var i = [], n = 0; t > n; n++) i.push(n);
                        return s.map(i, e, r)
                    }, s.timesSeries = function(t, e, r) {
                        for (var i = [], n = 0; t > n; n++) i.push(n);
                        return s.mapSeries(i, e, r)
                    }, s.seq = function() {
                        var t = arguments;
                        return function() {
                            var e = this,
                                r = Array.prototype.slice.call(arguments),
                                i = r.pop();
                            s.reduce(t, r, function(t, r, i) {
                                r.apply(e, t.concat([function() {
                                    var t = arguments[0],
                                        e = Array.prototype.slice.call(arguments, 1);
                                    i(t, e)
                                }]))
                            }, function(t, r) {
                                i.apply(e, [t].concat(r))
                            })
                        }
                    }, s.compose = function() {
                        return s.seq.apply(null, Array.prototype.reverse.call(arguments))
                    };
                    var S = function(t, e) {
                        var r = function() {
                            var r = this,
                                i = Array.prototype.slice.call(arguments),
                                n = i.pop();
                            return t(e, function(t, e) {
                                t.apply(r, i.concat([e]))
                            }, n)
                        };
                        if (arguments.length > 2) {
                            var i = Array.prototype.slice.call(arguments, 2);
                            return r.apply(this, i)
                        }
                        return r
                    };
                    s.applyEach = f(S), s.applyEachSeries = g(S), s.forever = function(t, e) {
                        function r(i) {
                            if (i) {
                                if (e) return e(i);
                                throw i
                            }
                            t(r)
                        }
                        r()
                    }, "undefined" != typeof r && r.exports ? r.exports = s : "undefined" != typeof t && t.amd ? t([], function() {
                        return s
                    }) : n.async = s
                }()
            }).call(this, e("_process"))
        }, {
            _process: 4
        }],
        14: [function(t, e, r) {
            arguments[4][11][0].apply(r, arguments)
        }, {
            dup: 11
        }],
        15: [function(t, e, r) {
            function i(t, e) {
                a.call(this), e = e || 10, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._boundOnLoad = this._onLoad.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = n.queue(this._boundLoadResource, e), this.resources = {}
            }
            var n = t("async"),
                o = t("url"),
                s = t("./Resource"),
                a = t("eventemitter3");
            i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.add = i.prototype.enqueue = function(t, e, r, i) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) this.add(t[n]);
                    return this
                }
                if ("object" == typeof t && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof r && (i = r, r = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.');
                return e = this._handleBaseUrl(e), this.resources[t] = new s(t, e, r), "function" == typeof i && this.resources[t].once("afterMiddleware", i), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = 100 / this._buffer.length), this
            }, i.prototype._handleBaseUrl = function(t) {
                var e = o.parse(t);
                return e.protocol || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && t.lastIndexOf("/") !== t.length - 1 ? this.baseUrl + "/" + t : this.baseUrl + t
            }, i.prototype.before = i.prototype.pre = function(t) {
                return this._beforeMiddleware.push(t), this
            }, i.prototype.after = i.prototype.use = function(t) {
                return this._afterMiddleware.push(t), this
            }, i.prototype.reset = function() {
                this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1, this.resources = {}
            }, i.prototype.load = function(t) {
                if ("function" == typeof t && this.once("complete", t), this._queue.started) return this;
                this.emit("start", this);
                for (var e = 0; e < this._buffer.length; ++e) this._queue.push(this._buffer[e]);
                return this._buffer.length = 0, this
            }, i.prototype._loadResource = function(t, e) {
                var r = this;
                t._dequeue = e, this._runMiddleware(t, this._beforeMiddleware, function() {
                    t.load(r._boundOnLoad)
                })
            }, i.prototype._onComplete = function() {
                this.emit("complete", this, this.resources)
            }, i.prototype._onLoad = function(t) {
                this.progress += this._progressChunk, this.emit("progress", this, t), t.error ? this.emit("error", t.error, this, t) : this.emit("load", this, t), this._runMiddleware(t, this._afterMiddleware, function() {
                    t.emit("afterMiddleware", t), this._numToLoad--, 0 === this._numToLoad && this._onComplete()
                }), t._dequeue()
            }, i.prototype._runMiddleware = function(t, e, r) {
                var i = this;
                n.eachSeries(e, function(e, r) {
                    e.call(i, t, r)
                }, r.bind(this, t))
            }, i.LOAD_TYPE = s.LOAD_TYPE, i.XHR_READY_STATE = s.XHR_READY_STATE, i.XHR_RESPONSE_TYPE = s.XHR_RESPONSE_TYPE
        }, {
            "./Resource": 16,
            async: 13,
            eventemitter3: 14,
            url: 9
        }],
        16: [function(t, e, r) {
            function i(t, e, r) {
                if (s.call(this), r = r || {}, "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = r.crossOrigin === !0 ? "anonymous" : null, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
            }

            function n(t) {
                return t.toString().replace("object ", "")
            }

            function o(t, e, r) {
                e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
            }
            var s = t("eventemitter3"),
                a = t("url"),
                l = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                h = null;
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.complete = function() {
                this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError), this.data.removeEventListener("load", this._boundComplete), this.data.removeEventListener("progress", this._boundOnProgress), this.data.removeEventListener("canplaythrough", this._boundComplete)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError), this.xhr.removeEventListener("abort", this._boundXhrOnAbort), this.xhr.removeEventListener("progress", this._boundOnProgress), this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.emit("complete", this)
            }, i.prototype.load = function(t) {
                switch (this.emit("start", this), t && this.once("complete", t), "string" != typeof this.crossOrigin && (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case i.LOAD_TYPE.IMAGE:
                        this._loadImage();
                        break;
                    case i.LOAD_TYPE.AUDIO:
                        this._loadElement("audio");
                        break;
                    case i.LOAD_TYPE.VIDEO:
                        this._loadElement("video");
                        break;
                    case i.LOAD_TYPE.XHR:
                    default:
                        l && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
            }, i.prototype._loadImage = function() {
                this.data = new Image, this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.data.src = this.url, this.isImage = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
            }, i.prototype._loadElement = function(t) {
                if (this.data = document.createElement(t), Array.isArray(this.url))
                    for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
                else this.data.appendChild(this._createSource(t, this.url));
                this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
            }, i.prototype._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XMLHttpRequest;
                t.open("GET", this.url, !0), t.responseType = this.xhrType === i.XHR_RESPONSE_TYPE.JSON || this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT ? i.XHR_RESPONSE_TYPE.TEXT : this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
            }, i.prototype._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                    t.send()
                }, 0)
            }, i.prototype._createSource = function(t, e, r) {
                r || (r = t + "/" + e.substr(e.lastIndexOf(".") + 1));
                var i = document.createElement("source");
                return i.src = e, i.type = r, i
            }, i.prototype._onError = function(t) {
                this.error = new Error("Failed to load element using " + t.target.nodeName), this.complete()
            }, i.prototype._onProgress = function(t) {
                t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
            }, i.prototype._xhrOnError = function() {
                this.error = new Error(n(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'), this.complete()
            }, i.prototype._xhrOnAbort = function() {
                this.error = new Error(n(this.xhr) + " Request was aborted by the user."), this.complete()
            }, i.prototype._xdrOnTimeout = function() {
                this.error = new Error(n(this.xhr) + " Request timed out."), this.complete()
            }, i.prototype._xhrOnLoad = function() {
                var t = this.xhr,
                    e = void 0 !== t.status ? t.status : 200;
                if (200 === e || 204 === e || 0 === e && t.responseText.length > 0)
                    if (this.xhrType === i.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
                    else if (this.xhrType === i.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(t.responseText), this.isJson = !0
                    } catch (r) {
                        this.error = new Error("Error trying to parse loaded json:", r)
                    } else if (this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        if (window.DOMParser) {
                            var n = new DOMParser;
                            this.data = n.parseFromString(t.responseText, "text/xml")
                        } else {
                            var o = document.createElement("div");
                            o.innerHTML = t.responseText, this.data = o
                        }
                        this.isXml = !0
                    } catch (r) {
                        this.error = new Error("Error trying to parse loaded xml:", r)
                    } else this.data = t.response || t.responseText;
                    else this.error = new Error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
                this.complete()
            }, i.prototype._determineCrossOrigin = function(t, e) {
                if (0 === t.indexOf("data:")) return "";
                e = e || window.location, h || (h = document.createElement("a")), h.href = t, t = a.parse(h.href);
                var r = !t.port && "" === e.port || t.port === e.port;
                return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous"
            }, i.prototype._determineXhrType = function() {
                return i._xhrTypeMap[this._getExtension()] || i.XHR_RESPONSE_TYPE.TEXT
            }, i.prototype._determineLoadType = function() {
                return i._loadTypeMap[this._getExtension()] || i.LOAD_TYPE.XHR
            }, i.prototype._getExtension = function() {
                var t, e = this.url;
                if (this.isDataUrl) {
                    var r = e.indexOf("/");
                    t = e.substring(r + 1, e.indexOf(";", r))
                } else t = e.substring(e.lastIndexOf(".") + 1);
                return t
            }, i.prototype._getMimeFromXhrType = function(t) {
                switch (t) {
                    case i.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case i.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case i.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case i.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case i.XHR_RESPONSE_TYPE.DEFAULT:
                    case i.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, i.LOAD_TYPE = {
                XHR: 1,
                IMAGE: 2,
                AUDIO: 3,
                VIDEO: 4
            }, i.XHR_READY_STATE = {
                UNSENT: 0,
                OPENED: 1,
                HEADERS_RECEIVED: 2,
                LOADING: 3,
                DONE: 4
            }, i.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            }, i._loadTypeMap = {
                gif: i.LOAD_TYPE.IMAGE,
                png: i.LOAD_TYPE.IMAGE,
                bmp: i.LOAD_TYPE.IMAGE,
                jpg: i.LOAD_TYPE.IMAGE,
                jpeg: i.LOAD_TYPE.IMAGE,
                tif: i.LOAD_TYPE.IMAGE,
                tiff: i.LOAD_TYPE.IMAGE,
                webp: i.LOAD_TYPE.IMAGE,
                tga: i.LOAD_TYPE.IMAGE
            }, i._xhrTypeMap = {
                xhtml: i.XHR_RESPONSE_TYPE.DOCUMENT,
                html: i.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: i.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: i.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: i.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: i.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: i.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: i.XHR_RESPONSE_TYPE.BLOB,
                png: i.XHR_RESPONSE_TYPE.BLOB,
                bmp: i.XHR_RESPONSE_TYPE.BLOB,
                jpg: i.XHR_RESPONSE_TYPE.BLOB,
                jpeg: i.XHR_RESPONSE_TYPE.BLOB,
                tif: i.XHR_RESPONSE_TYPE.BLOB,
                tiff: i.XHR_RESPONSE_TYPE.BLOB,
                webp: i.XHR_RESPONSE_TYPE.BLOB,
                tga: i.XHR_RESPONSE_TYPE.BLOB,
                json: i.XHR_RESPONSE_TYPE.JSON,
                text: i.XHR_RESPONSE_TYPE.TEXT,
                txt: i.XHR_RESPONSE_TYPE.TEXT
            }, i.setExtensionLoadType = function(t, e) {
                o(i._loadTypeMap, t, e)
            }, i.setExtensionXhrType = function(t, e) {
                o(i._xhrTypeMap, t, e)
            }
        }, {
            eventemitter3: 14,
            url: 9
        }],
        17: [function(t, e, r) {
            e.exports = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encodeBinary: function(t) {
                    for (var e, r = "", i = new Array(4), n = 0, o = 0, s = 0; n < t.length;) {
                        for (e = new Array(3), o = 0; o < e.length; o++) e[o] = n < t.length ? 255 & t.charCodeAt(n++) : 0;
                        switch (i[0] = e[0] >> 2, i[1] = (3 & e[0]) << 4 | e[1] >> 4, i[2] = (15 & e[1]) << 2 | e[2] >> 6, i[3] = 63 & e[2], s = n - (t.length - 1)) {
                            case 2:
                                i[3] = 64, i[2] = 64;
                                break;
                            case 1:
                                i[3] = 64
                        }
                        for (o = 0; o < i.length; o++) r += this._keyStr.charAt(i[o])
                    }
                    return r
                }
            }
        }, {}],
        18: [function(t, e, r) {
            e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = {
                caching: {
                    memory: t("./middlewares/caching/memory")
                },
                parsing: {
                    blob: t("./middlewares/parsing/blob")
                }
            }
        }, {
            "./Loader": 15,
            "./Resource": 16,
            "./middlewares/caching/memory": 19,
            "./middlewares/parsing/blob": 20
        }],
        19: [function(t, e, r) {
            var i = {};
            e.exports = function() {
                return function(t, e) {
                    i[t.url] ? (t.data = i[t.url], t.complete()) : (t.once("complete", function() {
                        i[this.url] = this.data
                    }), e())
                }
            }
        }, {}],
        20: [function(t, e, r) {
            var i = t("../../Resource"),
                n = t("../../b64");
            window.URL = window.URL || window.webkitURL, e.exports = function() {
                return function(t, e) {
                    if (!t.data) return e();
                    if (t.xhr && t.xhrType === i.XHR_RESPONSE_TYPE.BLOB)
                        if (window.Blob && "string" != typeof t.data) {
                            if (0 === t.data.type.indexOf("image")) {
                                var r = URL.createObjectURL(t.data);
                                t.blob = t.data, t.data = new Image, t.data.src = r, t.isImage = !0, t.data.onload = function() {
                                    URL.revokeObjectURL(r), t.data.onload = null, e()
                                }
                            }
                        } else {
                            var o = t.xhr.getResponseHeader("content-type");
                            o && 0 === o.indexOf("image") && (t.data = new Image, t.data.src = "data:" + o + ";base64," + n.encodeBinary(t.xhr.responseText), t.isImage = !0, t.data.onload = function() {
                                t.data.onload = null, e()
                            })
                        } else e()
                }
            }
        }, {
            "../../Resource": 16,
            "../../b64": 17
        }],
        21: [function(t, e, r) {
            e.exports = {
                name: "pixi.js",
                version: "3.0.6",
                description: "Pixi.js is a fast lightweight 2D library that works across all devices.",
                author: "Mat Groves",
                contributors: ["Chad Engler <chad@pantherdev.com>", "Richard Davey <rdavey@gmail.com>"],
                main: "./src/index.js",
                homepage: "http://goodboydigital.com/",
                bugs: "https://github.com/GoodBoyDigital/pixi.js/issues",
                license: "MIT",
                repository: {
                    type: "git",
                    url: "https://github.com/GoodBoyDigital/pixi.js.git"
                },
                scripts: {
                    test: "gulp && testem ci",
                    docs: "jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"
                },
                dependencies: {
                    async: "^0.9.0",
                    brfs: "^1.4.0",
                    earcut: "^2.0.0",
                    eventemitter3: "^1.1.0",
                    "object-assign": "^2.0.0",
                    "resource-loader": "^1.6.0"
                },
                devDependencies: {
                    browserify: "^9.0.8",
                    chai: "^2.2.0",
                    del: "^1.1.1",
                    gulp: "^3.8.11",
                    "gulp-cached": "^1.0.4",
                    "gulp-concat": "^2.5.2",
                    "gulp-debug": "^2.0.1",
                    "gulp-jshint": "^1.10.0",
                    "gulp-mirror": "^0.4.0",
                    "gulp-plumber": "^1.0.0",
                    "gulp-rename": "^1.2.2",
                    "gulp-sourcemaps": "^1.5.2",
                    "gulp-uglify": "^1.2.0",
                    "gulp-util": "^3.0.4",
                    "jaguarjs-jsdoc": "git+https://github.com/davidshimjs/jaguarjs-jsdoc.git",
                    jsdoc: "^3.3.0-beta3",
                    "jshint-summary": "^0.4.0",
                    minimist: "^1.1.1",
                    mocha: "^2.2.4",
                    "require-dir": "^0.3.0",
                    "run-sequence": "^1.0.2",
                    testem: "^0.8.2",
                    "vinyl-buffer": "^1.0.0",
                    "vinyl-source-stream": "^1.1.0",
                    watchify: "^3.1.2"
                },
                browserify: {
                    transform: ["brfs"]
                }
            }
        }, {}],
        22: [function(t, e, r) {
            var i = {
                VERSION: t("../../package.json").version,
                PI_2: 2 * Math.PI,
                RAD_TO_DEG: 180 / Math.PI,
                DEG_TO_RAD: Math.PI / 180,
                TARGET_FPMS: .06,
                RENDERER_TYPE: {
                    UNKNOWN: 0,
                    WEBGL: 1,
                    CANVAS: 2
                },
                BLEND_MODES: {
                    NORMAL: 0,
                    ADD: 1,
                    MULTIPLY: 2,
                    SCREEN: 3,
                    OVERLAY: 4,
                    DARKEN: 5,
                    LIGHTEN: 6,
                    COLOR_DODGE: 7,
                    COLOR_BURN: 8,
                    HARD_LIGHT: 9,
                    SOFT_LIGHT: 10,
                    DIFFERENCE: 11,
                    EXCLUSION: 12,
                    HUE: 13,
                    SATURATION: 14,
                    COLOR: 15,
                    LUMINOSITY: 16
                },
                SCALE_MODES: {
                    DEFAULT: 0,
                    LINEAR: 0,
                    NEAREST: 1
                },
                RETINA_PREFIX: /@(.+)x/,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                DEFAULT_RENDER_OPTIONS: {
                    view: null,
                    resolution: 1,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1
                },
                SHAPES: {
                    POLY: 0,
                    RECT: 1,
                    CIRC: 2,
                    ELIP: 3,
                    RREC: 4
                },
                SPRITE_BATCH_SIZE: 2e3
            };
            e.exports = i
        }, {
            "../../package.json": 21
        }],
        23: [function(t, e, r) {
            function i() {
                o.call(this), this.children = []
            }
            var n = t("../math"),
                o = t("./DisplayObject"),
                s = t("../textures/RenderTexture"),
                a = new n.Matrix;
            i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                width: {
                    get: function() {
                        return this.scale.x * this.getLocalBounds().width
                    },
                    set: function(t) {
                        var e = this.getLocalBounds().width;
                        this.scale.x = 0 !== e ? t / e : 1, this._width = t
                    }
                },
                height: {
                    get: function() {
                        return this.scale.y * this.getLocalBounds().height
                    },
                    set: function(t) {
                        var e = this.getLocalBounds().height;
                        this.scale.y = 0 !== e ? t / e : 1, this._height = t
                    }
                }
            }), i.prototype.addChild = function(t) {
                return this.addChildAt(t, this.children.length)
            }, i.prototype.addChildAt = function(t, e) {
                if (t === this) return t;
                if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }, i.prototype.swapChildren = function(t, e) {
                if (t !== e) {
                    var r = this.getChildIndex(t),
                        i = this.getChildIndex(e);
                    if (0 > r || 0 > i) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                    this.children[r] = e, this.children[i] = t
                }
            }, i.prototype.getChildIndex = function(t) {
                var e = this.children.indexOf(t);
                if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }, i.prototype.setChildIndex = function(t, e) {
                if (0 > e || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                var r = this.getChildIndex(t);
                this.children.splice(r, 1), this.children.splice(e, 0, t)
            }, i.prototype.getChildAt = function(t) {
                if (0 > t || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
                return this.children[t]
            }, i.prototype.removeChild = function(t) {
                var e = this.children.indexOf(t);
                if (-1 !== e) return this.removeChildAt(e);
                else return void 0
            }, i.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e.parent = null, this.children.splice(t, 1), e
            }, i.prototype.removeChildren = function(t, e) {
                var r = t || 0,
                    i = "number" == typeof e ? e : this.children.length,
                    n = i - r;
                if (n > 0 && i >= n) {
                    for (var o = this.children.splice(r, n), s = 0; s < o.length; ++s) o[s].parent = null;
                    return o
                }
                if (0 === n && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            }, i.prototype.generateTexture = function(t, e, r) {
                var i = this.getLocalBounds(),
                    n = new s(t, 0 | i.width, 0 | i.height, t, r, e);
                return a.tx = -i.x, a.ty = -i.y, n.render(this, a), n
            }, i.prototype.updateTransform = function() {
                if (this.visible) {
                    this.displayObjectUpdateTransform();
                    for (var t = 0, e = this.children.length; e > t; ++t) this.children[t].updateTransform()
                }
            }, i.prototype.containerUpdateTransform = i.prototype.updateTransform, i.prototype.getBounds = function() {
                if (!this._currentBounds) {
                    if (0 === this.children.length) return n.Rectangle.EMPTY;
                    for (var t, e, r, i = 1 / 0, o = 1 / 0, s = -(1 / 0), a = -(1 / 0), l = !1, h = 0, u = this.children.length; u > h; ++h) {
                        var c = this.children[h];
                        c.visible && (l = !0, t = this.children[h].getBounds(), i = i < t.x ? i : t.x, o = o < t.y ? o : t.y, e = t.width + t.x, r = t.height + t.y, s = s > e ? s : e, a = a > r ? a : r)
                    }
                    if (!l) return n.Rectangle.EMPTY;
                    var d = this._bounds;
                    d.x = i, d.y = o, d.width = s - i, d.height = a - o, this._currentBounds = d
                }
                return this._currentBounds
            }, i.prototype.containerGetBounds = i.prototype.getBounds, i.prototype.getLocalBounds = function() {
                var t = this.worldTransform;
                this.worldTransform = n.Matrix.IDENTITY;
                for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].updateTransform();
                return this.worldTransform = t, this._currentBounds = null, this.getBounds(n.Matrix.IDENTITY)
            }, i.prototype.renderWebGL = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                    var e, r;
                    if (this._mask || this._filters) {
                        for (t.currentRenderer.flush(), this._filters && t.filterManager.pushFilter(this, this._filters), this._mask && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, r = this.children.length; r > e; e++) this.children[e].renderWebGL(t);
                        t.currentRenderer.flush(), this._mask && t.maskManager.popMask(this, this._mask), this._filters && t.filterManager.popFilter(), t.currentRenderer.start()
                    } else
                        for (this._renderWebGL(t), e = 0, r = this.children.length; r > e; ++e) this.children[e].renderWebGL(t)
                }
            }, i.prototype._renderWebGL = function(t) {}, i.prototype._renderCanvas = function(t) {}, i.prototype.renderCanvas = function(t) {
                if (this.visible && !(this.alpha <= 0) && this.renderable) {
                    this._mask && t.maskManager.pushMask(this._mask, t), this._renderCanvas(t);
                    for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }, i.prototype.destroy = function(t) {
                if (o.prototype.destroy.call(this), t)
                    for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].destroy(t);
                this.removeChildren(), this.children = null
            }
        }, {
            "../math": 32,
            "../textures/RenderTexture": 70,
            "./DisplayObject": 24
        }],
        24: [function(t, e, r) {
            function i() {
                s.call(this), this.position = new n.Point, this.scale = new n.Point(1, 1), this.pivot = new n.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.worldTransform = new n.Matrix, this.filterArea = null, this._sr = 0, this._cr = 1, this._bounds = new n.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cachedObject = null
            }
            var n = t("../math"),
                o = t("../textures/RenderTexture"),
                s = t("eventemitter3"),
                a = t("../const"),
                l = new n.Matrix;
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                x: {
                    get: function() {
                        return this.position.x
                    },
                    set: function(t) {
                        this.position.x = t
                    }
                },
                y: {
                    get: function() {
                        return this.position.y
                    },
                    set: function(t) {
                        this.position.y = t
                    }
                },
                worldVisible: {
                    get: function() {
                        var t = this;
                        do {
                            if (!t.visible) return !1;
                            t = t.parent
                        } while (t);
                        return !0
                    }
                },
                mask: {
                    get: function() {
                        return this._mask
                    },
                    set: function(t) {
                        this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
                    }
                },
                filters: {
                    get: function() {
                        return this._filters && this._filters.slice()
                    },
                    set: function(t) {
                        this._filters = t && t.slice()
                    }
                }
            }), i.prototype.updateTransform = function() {
                var t, e, r, i, n, o, s = this.parent.worldTransform,
                    l = this.worldTransform;
                this.rotation % a.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, e = this._sr * this.scale.x, r = -this._sr * this.scale.y, i = this._cr * this.scale.y, n = this.position.x, o = this.position.y, (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * r, o -= this.pivot.x * e + this.pivot.y * i), l.a = t * s.a + e * s.c, l.b = t * s.b + e * s.d, l.c = r * s.a + i * s.c, l.d = r * s.b + i * s.d, l.tx = n * s.a + o * s.c + s.tx, l.ty = n * s.b + o * s.d + s.ty) : (t = this.scale.x, i = this.scale.y, n = this.position.x - this.pivot.x * t, o = this.position.y - this.pivot.y * i, l.a = t * s.a, l.b = t * s.b, l.c = i * s.c, l.d = i * s.d, l.tx = n * s.a + o * s.c + s.tx, l.ty = n * s.b + o * s.d + s.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._currentBounds = null
            }, i.prototype.displayObjectUpdateTransform = i.prototype.updateTransform, i.prototype.getBounds = function(t) {
                return n.Rectangle.EMPTY
            }, i.prototype.getLocalBounds = function() {
                return this.getBounds(n.Matrix.IDENTITY)
            }, i.prototype.toGlobal = function(t) {
                return this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
            }, i.prototype.toLocal = function(t, e) {
                return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t)
            }, i.prototype.renderWebGL = function(t) {}, i.prototype.renderCanvas = function(t) {}, i.prototype.generateTexture = function(t, e, r) {
                var i = this.getLocalBounds(),
                    n = new o(t, 0 | i.width, 0 | i.height, e, r);
                return l.tx = -i.x, l.ty = -i.y, n.render(this, l), n
            }, i.prototype.destroy = function() {
                this.position = null, this.scale = null, this.pivot = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.worldTransform = null, this.filterArea = null
            }
        }, {
            "../const": 22,
            "../math": 32,
            "../textures/RenderTexture": 70,
            eventemitter3: 11
        }],
        25: [function(t, e, r) {
            function i() {
                n.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = u.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new h.Rectangle(0, 0, 1, 1), this.dirty = !0, this.glDirty = !1, this.boundsDirty = !0, this.cachedSpriteDirty = !1
            }
            var n = t("../display/Container"),
                o = t("../textures/Texture"),
                s = t("../renderers/canvas/utils/CanvasBuffer"),
                a = t("../renderers/canvas/utils/CanvasGraphics"),
                l = t("./GraphicsData"),
                h = t("../math"),
                u = t("../const"),
                c = new h.Point;
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {}), i.prototype.clone = function() {
                var t = new i;
                t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = this.dirty, t.glDirty = this.glDirty, t.cachedSpriteDirty = this.cachedSpriteDirty;
                for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
                return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
            }, i.prototype.lineStyle = function(t, e, r) {
                return this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === r ? 1 : r, this.currentPath && (this.currentPath.shape.points.length ? this.drawShape(new h.Polygon(this.currentPath.shape.points.slice(-2))) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha)), this
            }, i.prototype.moveTo = function(t, e) {
                return this.drawShape(new h.Polygon([t, e])), this
            }, i.prototype.lineTo = function(t, e) {
                return this.currentPath.shape.points.push(t, e), this.dirty = !0, this
            }, i.prototype.quadraticCurveTo = function(t, e, r, i) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var n, o, s = 20,
                    a = this.currentPath.shape.points;
                0 === a.length && this.moveTo(0, 0);
                for (var l = a[a.length - 2], h = a[a.length - 1], u = 0, c = 1; s >= c; ++c) u = c / s, n = l + (t - l) * u, o = h + (e - h) * u, a.push(n + (t + (r - t) * u - n) * u, o + (e + (i - e) * u - o) * u);
                return this.dirty = this.boundsDirty = !0, this
            }, i.prototype.bezierCurveTo = function(t, e, r, i, n, o) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                for (var s, a, l, h, u, c = 20, d = this.currentPath.shape.points, p = d[d.length - 2], f = d[d.length - 1], v = 0, g = 1; c >= g; ++g) v = g / c, s = 1 - v, a = s * s, l = a * s, h = v * v, u = h * v, d.push(l * p + 3 * a * v * t + 3 * s * h * r + u * n, l * f + 3 * a * v * e + 3 * s * h * i + u * o);
                return this.dirty = this.boundsDirty = !0, this
            }, i.prototype.arcTo = function(t, e, r, i, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var o = this.currentPath.shape.points,
                    s = o[o.length - 2],
                    a = o[o.length - 1],
                    l = a - e,
                    h = s - t,
                    u = i - e,
                    c = r - t,
                    d = Math.abs(l * c - h * u);
                if (1e-8 > d || 0 === n)(o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e);
                else {
                    var p = l * l + h * h,
                        f = u * u + c * c,
                        v = l * u + h * c,
                        g = n * Math.sqrt(p) / d,
                        m = n * Math.sqrt(f) / d,
                        y = g * v / p,
                        x = m * v / f,
                        b = g * c + m * h,
                        _ = g * u + m * l,
                        T = h * (m + y),
                        E = l * (m + y),
                        w = c * (g + x),
                        S = u * (g + x),
                        C = Math.atan2(E - _, T - b),
                        M = Math.atan2(S - _, w - b);
                    this.arc(b + t, _ + e, n, C, M, h * u > c * l)
                }
                return this.dirty = this.boundsDirty = !0, this
            }, i.prototype.arc = function(t, e, r, i, n, o) {
                if (o = o || !1, i === n) return this;
                !o && i >= n ? n += 2 * Math.PI : o && n >= i && (i += 2 * Math.PI);
                var s = o ? -1 * (i - n) : n - i,
                    a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
                if (0 === s) return this;
                var l = t + Math.cos(i) * r,
                    h = e + Math.sin(i) * r;
                this.currentPath ? o && this.filling ? this.currentPath.shape.points.push(t, e) : this.currentPath.shape.points.push(l, h) : o && this.filling ? this.moveTo(t, e) : this.moveTo(l, h);
                for (var u = this.currentPath.shape.points, c = s / (2 * a), d = 2 * c, p = Math.cos(c), f = Math.sin(c), v = a - 1, g = v % 1 / v, m = 0; v >= m; m++) {
                    var y = m + g * m,
                        x = c + i + d * y,
                        b = Math.cos(x),
                        _ = -Math.sin(x);
                    u.push((p * b + f * _) * r + t, (p * -_ + f * b) * r + e)
                }
                return this.dirty = this.boundsDirty = !0, this
            }, i.prototype.beginFill = function(t, e) {
                return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            }, i.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            }, i.prototype.drawRect = function(t, e, r, i) {
                return this.drawShape(new h.Rectangle(t, e, r, i)), this
            }, i.prototype.drawRoundedRect = function(t, e, r, i, n) {
                return this.drawShape(new h.RoundedRectangle(t, e, r, i, n)), this
            }, i.prototype.drawCircle = function(t, e, r) {
                return this.drawShape(new h.Circle(t, e, r)), this
            }, i.prototype.drawEllipse = function(t, e, r, i) {
                return this.drawShape(new h.Ellipse(t, e, r, i)), this
            }, i.prototype.drawPolygon = function(t) {
                var e = t;
                if (!Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var r = 0; r < e.length; ++r) e[r] = arguments[r]
                }
                return this.drawShape(new h.Polygon(e)), this
            }, i.prototype.clear = function() {
                return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
            }, i.prototype.generateTexture = function(t, e, r) {
                e = e || 1;
                var i = this.getLocalBounds(),
                    n = new s(i.width * e, i.height * e),
                    l = o.fromCanvas(n.canvas, r);
                return l.baseTexture.resolution = e, n.context.scale(e, e), n.context.translate(-i.x, -i.y), a.renderGraphics(this, n.context), l
            }, i.prototype._renderWebGL = function(t) {
                this.glDirty && (this.dirty = !0, this.glDirty = !1), t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this)
            }, i.prototype._renderCanvas = function(t) {
                if (this.isMask !== !0) {
                    this._prevTint !== this.tint && (this.dirty = !0, this._prevTint = this.tint);
                    var e = t.context,
                        r = this.worldTransform;
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, e.globalCompositeOperation = t.blendModes[t.currentBlendMode]);
                    var i = t.resolution;
                    e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i, r.ty * i), a.renderGraphics(this, e)
                }
            }, i.prototype.getBounds = function(t) {
                if (!this._currentBounds) {
                    if (!this.renderable) return h.Rectangle.EMPTY;
                    this.boundsDirty && (this.updateLocalBounds(), this.glDirty = !0, this.cachedSpriteDirty = !0, this.boundsDirty = !1);
                    var e = this._localBounds,
                        r = e.x,
                        i = e.width + e.x,
                        n = e.y,
                        o = e.height + e.y,
                        s = t || this.worldTransform,
                        a = s.a,
                        l = s.b,
                        u = s.c,
                        c = s.d,
                        d = s.tx,
                        p = s.ty,
                        f = a * i + u * o + d,
                        v = c * o + l * i + p,
                        g = a * r + u * o + d,
                        m = c * o + l * r + p,
                        y = a * r + u * n + d,
                        x = c * n + l * r + p,
                        b = a * i + u * n + d,
                        _ = c * n + l * i + p,
                        T = f,
                        E = v,
                        w = f,
                        S = v;
                    w = w > g ? g : w, w = w > y ? y : w, w = w > b ? b : w, S = S > m ? m : S, S = S > x ? x : S, S = S > _ ? _ : S, T = g > T ? g : T, T = y > T ? y : T, T = b > T ? b : T, E = m > E ? m : E, E = x > E ? x : E, E = _ > E ? _ : E, this._bounds.x = w, this._bounds.width = T - w, this._bounds.y = S, this._bounds.height = E - S, this._currentBounds = this._bounds
                }
                return this._currentBounds
            }, i.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, c);
                for (var e = this.graphicsData, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (i.fill && i.shape && i.shape.contains(c.x, c.y)) return !0
                }
                return !1
            }, i.prototype.updateLocalBounds = function() {
                var t = 1 / 0,
                    e = -(1 / 0),
                    r = 1 / 0,
                    i = -(1 / 0);
                if (this.graphicsData.length)
                    for (var n, o, s, a, l, h, c = 0; c < this.graphicsData.length; c++) {
                        var d = this.graphicsData[c],
                            p = d.type,
                            f = d.lineWidth;
                        if (n = d.shape, p === u.SHAPES.RECT || p === u.SHAPES.RREC) s = n.x - f / 2, a = n.y - f / 2, l = n.width + f, h = n.height + f, t = t > s ? s : t, e = s + l > e ? s + l : e, r = r > a ? a : r, i = a + h > i ? a + h : i;
                        else if (p === u.SHAPES.CIRC) s = n.x, a = n.y, l = n.radius + f / 2, h = n.radius + f / 2, t = t > s - l ? s - l : t, e = s + l > e ? s + l : e, r = r > a - h ? a - h : r, i = a + h > i ? a + h : i;
                        else if (p === u.SHAPES.ELIP) s = n.x, a = n.y, l = n.width + f / 2, h = n.height + f / 2, t = t > s - l ? s - l : t, e = s + l > e ? s + l : e, r = r > a - h ? a - h : r, i = a + h > i ? a + h : i;
                        else {
                            o = n.points;
                            for (var v = 0; v < o.length; v += 2) s = o[v], a = o[v + 1], t = t > s - f ? s - f : t, e = s + f > e ? s + f : e, r = r > a - f ? a - f : r, i = a + f > i ? a + f : i
                        }
                    } else t = 0, e = 0, r = 0, i = 0;
                var g = this.boundsPadding;
                this._localBounds.x = t - g, this._localBounds.width = e - t + 2 * g, this._localBounds.y = r - g, this._localBounds.height = i - r + 2 * g
            }, i.prototype.drawShape = function(t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                var e = new l(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
                return this.graphicsData.push(e), e.type === u.SHAPES.POLY && (e.shape.closed = this.filling, this.currentPath = e), this.dirty = this.boundsDirty = !0, e
            }, i.prototype.destroy = function() {
                n.prototype.destroy.apply(this, arguments);
                for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
                for (var e in this._webgl)
                    for (var r = 0; r < this._webgl[e].data.length; ++r) this._webgl[e].data[r].destroy();
                this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
            }
        }, {
            "../const": 22,
            "../display/Container": 23,
            "../math": 32,
            "../renderers/canvas/utils/CanvasBuffer": 44,
            "../renderers/canvas/utils/CanvasGraphics": 45,
            "../textures/Texture": 71,
            "./GraphicsData": 26
        }],
        26: [function(t, e, r) {
            function i(t, e, r, i, n, o, s) {
                this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this._lineTint = e, this.fillColor = i, this.fillAlpha = n, this._fillTint = i, this.fill = o, this.shape = s, this.type = s.type
            }
            i.prototype.constructor = i, e.exports = i, i.prototype.clone = function() {
                return new i(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
            }, i.prototype.destroy = function() {
                this.shape = null
            }
        }, {}],
        27: [function(t, e, r) {
            function i(t) {
                a.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.complexPrimitiveShader = null
            }
            var n = t("../../utils"),
                o = t("../../math"),
                s = t("../../const"),
                a = t("../../renderers/webgl/utils/ObjectRenderer"),
                l = t("../../renderers/webgl/WebGLRenderer"),
                h = t("./WebGLGraphicsData"),
                u = t("earcut");
            i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, l.registerPlugin("graphics", i), i.prototype.onContextChange = function() {}, i.prototype.destroy = function() {
                a.prototype.destroy.call(this);
                for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                this.graphicsDataPool = null
            }, i.prototype.render = function(t) {
                var e, r = this.renderer,
                    i = r.gl,
                    o = r.shaderManager.plugins.primitiveShader;
                t.dirty && this.updateGraphics(t, i);
                var s = t._webGL[i.id];
                r.blendModeManager.setBlendMode(t.blendMode);
                for (var a = 0; a < s.data.length; a++) 1 === s.data[a].mode ? (e = s.data[a], r.stencilManager.pushStencil(t, e, r), i.uniform1f(r.shaderManager.complexPrimitiveShader.uniforms.alpha._location, t.worldAlpha * e.alpha), i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilManager.popStencil(t, e, r)) : (e = s.data[a], o = r.shaderManager.primitiveShader, r.shaderManager.setShader(o), i.uniformMatrix3fv(o.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(o.uniforms.projectionMatrix._location, !1, r.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(o.uniforms.tint._location, n.hex2rgb(t.tint)), i.uniform1f(o.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(o.attributes.aVertexPosition, 2, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(o.attributes.aColor, 4, i.FLOAT, !1, 24, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer), i.drawElements(i.TRIANGLE_STRIP, e.indices.length, i.UNSIGNED_SHORT, 0))
            }, i.prototype.updateGraphics = function(t) {
                var e = this.renderer.gl,
                    r = t._webGL[e.id];
                r || (r = t._webGL[e.id] = {
                    lastIndex: 0,
                    data: [],
                    gl: e
                }), t.dirty = !1;
                var i;
                if (t.clearDirty) {
                    for (t.clearDirty = !1, i = 0; i < r.data.length; i++) {
                        var n = r.data[i];
                        n.reset(), this.graphicsDataPool.push(n)
                    }
                    r.data = [], r.lastIndex = 0
                }
                var o;
                for (i = r.lastIndex; i < t.graphicsData.length; i++) {
                    var a = t.graphicsData[i];
                    if (a.type === s.SHAPES.POLY) {
                        if (a.points = a.shape.points.slice(), a.shape.closed && (a.points[0] !== a.points[a.points.length - 2] || a.points[1] !== a.points[a.points.length - 1]) && a.points.push(a.points[0], a.points[1]), a.fill && a.points.length >= 6)
                            if (a.points.length < 12) {
                                o = this.switchMode(r, 0);
                                var l = this.buildPoly(a, o);
                                l || (o = this.switchMode(r, 1), this.buildComplexPoly(a, o))
                            } else o = this.switchMode(r, 1), this.buildComplexPoly(a, o);
                        a.lineWidth > 0 && (o = this.switchMode(r, 0), this.buildLine(a, o))
                    } else o = this.switchMode(r, 0), a.type === s.SHAPES.RECT ? this.buildRectangle(a, o) : a.type === s.SHAPES.CIRC || a.type === s.SHAPES.ELIP ? this.buildCircle(a, o) : a.type === s.SHAPES.RREC && this.buildRoundedRectangle(a, o);
                    r.lastIndex++
                }
                for (i = 0; i < r.data.length; i++) o = r.data[i], o.dirty && o.upload()
            }, i.prototype.switchMode = function(t, e) {
                var r;
                return t.data.length ? (r = t.data[t.data.length - 1], (r.points.length > 32e4 || r.mode !== e || 1 === e) && (r = this.graphicsDataPool.pop() || new h(t.gl), r.mode = e, t.data.push(r))) : (r = this.graphicsDataPool.pop() || new h(t.gl), r.mode = e, t.data.push(r)), r.dirty = !0, r
            }, i.prototype.buildRectangle = function(t, e) {
                var r = t.shape,
                    i = r.x,
                    o = r.y,
                    s = r.width,
                    a = r.height;
                if (t.fill) {
                    var l = n.hex2rgb(t.fillColor),
                        h = t.fillAlpha,
                        u = l[0] * h,
                        c = l[1] * h,
                        d = l[2] * h,
                        p = e.points,
                        f = e.indices,
                        v = p.length / 6;
                    p.push(i, o), p.push(u, c, d, h), p.push(i + s, o), p.push(u, c, d, h), p.push(i, o + a), p.push(u, c, d, h), p.push(i + s, o + a), p.push(u, c, d, h), f.push(v, v, v + 1, v + 2, v + 3, v + 3)
                }
                if (t.lineWidth) {
                    var g = t.points;
                    t.points = [i, o, i + s, o, i + s, o + a, i, o + a, i, o], this.buildLine(t, e), t.points = g
                }
            }, i.prototype.buildRoundedRectangle = function(t, e) {
                var r = t.shape,
                    i = r.x,
                    o = r.y,
                    s = r.width,
                    a = r.height,
                    l = r.radius,
                    h = [];
                if (h.push(i, o + l), this.quadraticBezierCurve(i, o + a - l, i, o + a, i + l, o + a, h), this.quadraticBezierCurve(i + s - l, o + a, i + s, o + a, i + s, o + a - l, h), this.quadraticBezierCurve(i + s, o + l, i + s, o, i + s - l, o, h), this.quadraticBezierCurve(i + l, o, i, o, i, o + l + 1e-10, h), t.fill) {
                    var c = n.hex2rgb(t.fillColor),
                        d = t.fillAlpha,
                        p = c[0] * d,
                        f = c[1] * d,
                        v = c[2] * d,
                        g = e.points,
                        m = e.indices,
                        y = g.length / 6,
                        x = u(h, null, 2),
                        b = 0;
                    for (b = 0; b < x.length; b += 3) m.push(x[b] + y), m.push(x[b] + y), m.push(x[b + 1] + y), m.push(x[b + 2] + y), m.push(x[b + 2] + y);
                    for (b = 0; b < h.length; b++) g.push(h[b], h[++b], p, f, v, d)
                }
                if (t.lineWidth) {
                    var _ = t.points;
                    t.points = h, this.buildLine(t, e), t.points = _
                }
            }, i.prototype.quadraticBezierCurve = function(t, e, r, i, n, o, s) {
                function a(t, e, r) {
                    var i = e - t;
                    return t + i * r
                }
                for (var l, h, u, c, d, p, f = 20, v = s || [], g = 0, m = 0; f >= m; m++) g = m / f, l = a(t, r, g), h = a(e, i, g), u = a(r, n, g), c = a(i, o, g), d = a(l, u, g), p = a(h, c, g), v.push(d, p);
                return v
            }, i.prototype.buildCircle = function(t, e) {
                var r, i, o = t.shape,
                    a = o.x,
                    l = o.y;
                t.type === s.SHAPES.CIRC ? (r = o.radius, i = o.radius) : (r = o.width, i = o.height);
                var h = 40,
                    u = 2 * Math.PI / h,
                    c = 0;
                if (t.fill) {
                    var d = n.hex2rgb(t.fillColor),
                        p = t.fillAlpha,
                        f = d[0] * p,
                        v = d[1] * p,
                        g = d[2] * p,
                        m = e.points,
                        y = e.indices,
                        x = m.length / 6;
                    for (y.push(x), c = 0; h + 1 > c; c++) m.push(a, l, f, v, g, p), m.push(a + Math.sin(u * c) * r, l + Math.cos(u * c) * i, f, v, g, p), y.push(x++, x++);
                    y.push(x - 1)
                }
                if (t.lineWidth) {
                    var b = t.points;
                    for (t.points = [], c = 0; h + 1 > c; c++) t.points.push(a + Math.sin(u * c) * r, l + Math.cos(u * c) * i);
                    this.buildLine(t, e), t.points = b
                }
            }, i.prototype.buildLine = function(t, e) {
                var r = 0,
                    i = t.points;
                if (0 !== i.length) {
                    if (t.lineWidth % 2)
                        for (r = 0; r < i.length; r++) i[r] += .5;
                    var s = new o.Point(i[0], i[1]),
                        a = new o.Point(i[i.length - 2], i[i.length - 1]);
                    if (s.x === a.x && s.y === a.y) {
                        i = i.slice(), i.pop(), i.pop(), a = new o.Point(i[i.length - 2], i[i.length - 1]);
                        var l = a.x + .5 * (s.x - a.x),
                            h = a.y + .5 * (s.y - a.y);
                        i.unshift(l, h), i.push(l, h)
                    }
                    var u, c, d, p, f, v, g, m, y, x, b, _, T, E, w, S, C, M, A, R, D, O, F, P = e.points,
                        B = e.indices,
                        L = i.length / 2,
                        I = i.length,
                        N = P.length / 6,
                        U = t.lineWidth / 2,
                        k = n.hex2rgb(t.lineColor),
                        j = t.lineAlpha,
                        Y = k[0] * j,
                        z = k[1] * j,
                        X = k[2] * j;
                    for (d = i[0], p = i[1], f = i[2], v = i[3], y = -(p - v), x = d - f, F = Math.sqrt(y * y + x * x), y /= F, x /= F, y *= U, x *= U, P.push(d - y, p - x, Y, z, X, j), P.push(d + y, p + x, Y, z, X, j), r = 1; L - 1 > r; r++) d = i[2 * (r - 1)], p = i[2 * (r - 1) + 1], f = i[2 * r], v = i[2 * r + 1], g = i[2 * (r + 1)], m = i[2 * (r + 1) + 1], y = -(p - v), x = d - f, F = Math.sqrt(y * y + x * x), y /= F, x /= F, y *= U, x *= U, b = -(v - m), _ = f - g, F = Math.sqrt(b * b + _ * _), b /= F, _ /= F, b *= U, _ *= U, w = -x + p - (-x + v), S = -y + f - (-y + d), C = (-y + d) * (-x + v) - (-y + f) * (-x + p), M = -_ + m - (-_ + v), A = -b + f - (-b + g), R = (-b + g) * (-_ + v) - (-b + f) * (-_ + m), D = w * A - M * S, Math.abs(D) < .1 ? (D += 10.1, P.push(f - y, v - x, Y, z, X, j), P.push(f + y, v + x, Y, z, X, j)) : (u = (S * R - A * C) / D, c = (M * C - w * R) / D, O = (u - f) * (u - f) + (c - v) + (c - v), O > 19600 ? (T = y - b, E = x - _, F = Math.sqrt(T * T + E * E), T /= F, E /= F, T *= U, E *= U, P.push(f - T, v - E), P.push(Y, z, X, j), P.push(f + T, v + E), P.push(Y, z, X, j), P.push(f - T, v - E), P.push(Y, z, X, j), I++) : (P.push(u, c), P.push(Y, z, X, j), P.push(f - (u - f), v - (c - v)), P.push(Y, z, X, j)));
                    for (d = i[2 * (L - 2)], p = i[2 * (L - 2) + 1], f = i[2 * (L - 1)], v = i[2 * (L - 1) + 1], y = -(p - v), x = d - f, F = Math.sqrt(y * y + x * x), y /= F, x /= F, y *= U, x *= U, P.push(f - y, v - x), P.push(Y, z, X, j), P.push(f + y, v + x), P.push(Y, z, X, j), B.push(N), r = 0; I > r; r++) B.push(N++);
                    B.push(N - 1)
                }
            }, i.prototype.buildComplexPoly = function(t, e) {
                var r = t.points.slice();
                if (!(r.length < 6)) {
                    var i = e.indices;
                    e.points = r, e.alpha = t.fillAlpha, e.color = n.hex2rgb(t.fillColor);
                    for (var o, s, a = 1 / 0, l = -(1 / 0), h = 1 / 0, u = -(1 / 0), c = 0; c < r.length; c += 2) o = r[c], s = r[c + 1], a = a > o ? o : a, l = o > l ? o : l, h = h > s ? s : h, u = s > u ? s : u;
                    r.push(a, h, l, h, l, u, a, u);
                    var d = r.length / 2;
                    for (c = 0; d > c; c++) i.push(c)
                }
            }, i.prototype.buildPoly = function(t, e) {
                var r = t.points;
                if (!(r.length < 6)) {
                    var i = e.points,
                        o = e.indices,
                        s = r.length / 2,
                        a = n.hex2rgb(t.fillColor),
                        l = t.fillAlpha,
                        h = a[0] * l,
                        c = a[1] * l,
                        d = a[2] * l,
                        p = u(r, null, 2);
                    if (!p) return !1;
                    var f = i.length / 6,
                        v = 0;
                    for (v = 0; v < p.length; v += 3) o.push(p[v] + f), o.push(p[v] + f), o.push(p[v + 1] + f), o.push(p[v + 2] + f), o.push(p[v + 2] + f);
                    for (v = 0; s > v; v++) i.push(r[2 * v], r[2 * v + 1], h, c, d, l);
                    return !0
                }
            }
        }, {
            "../../const": 22,
            "../../math": 32,
            "../../renderers/webgl/WebGLRenderer": 48,
            "../../renderers/webgl/utils/ObjectRenderer": 62,
            "../../utils": 76,
            "./WebGLGraphicsData": 28,
            earcut: 10
        }],
        28: [function(t, e, r) {
            function i(t) {
                this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0, this.glPoints = null, this.glIndices = null
            }
            i.prototype.constructor = i, e.exports = i, i.prototype.reset = function() {
                this.points.length = 0, this.indices.length = 0
            }, i.prototype.upload = function() {
                var t = this.gl;
                this.glPoints = new Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndices = new Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndices, t.STATIC_DRAW), this.dirty = !1
            }, i.prototype.destroy = function() {
                this.gl = null, this.color = null, this.points = null, this.indices = null, this.gl.deleteBuffer(this.buffer), this.gl.deleteBuffer(this.indexBuffer), this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
            }
        }, {}],
        29: [function(t, e, r) {
            var i = e.exports = Object.assign(t("./const"), t("./math"), {
                utils: t("./utils"),
                math: t("./math"),
                ticker: t("./ticker"),
                DisplayObject: t("./display/DisplayObject"),
                Container: t("./display/Container"),
                Sprite: t("./sprites/Sprite"),
                ParticleContainer: t("./particles/ParticleContainer"),
                SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
                ParticleRenderer: t("./particles/webgl/ParticleRenderer"),
                Text: t("./text/Text"),
                Graphics: t("./graphics/Graphics"),
                GraphicsData: t("./graphics/GraphicsData"),
                GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
                Texture: t("./textures/Texture"),
                BaseTexture: t("./textures/BaseTexture"),
                RenderTexture: t("./textures/RenderTexture"),
                VideoBaseTexture: t("./textures/VideoBaseTexture"),
                TextureUvs: t("./textures/TextureUvs"),
                CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
                CanvasGraphics: t("./renderers/canvas/utils/CanvasGraphics"),
                CanvasBuffer: t("./renderers/canvas/utils/CanvasBuffer"),
                WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
                ShaderManager: t("./renderers/webgl/managers/ShaderManager"),
                Shader: t("./renderers/webgl/shaders/Shader"),
                ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
                RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
                AbstractFilter: t("./renderers/webgl/filters/AbstractFilter"),
                autoDetectRenderer: function(t, e, r, n) {
                    return t = t || 800, e = e || 600, !n && i.utils.isWebGLSupported() ? new i.WebGLRenderer(t, e, r) : new i.CanvasRenderer(t, e, r)
                }
            })
        }, {
            "./const": 22,
            "./display/Container": 23,
            "./display/DisplayObject": 24,
            "./graphics/Graphics": 25,
            "./graphics/GraphicsData": 26,
            "./graphics/webgl/GraphicsRenderer": 27,
            "./math": 32,
            "./particles/ParticleContainer": 38,
            "./particles/webgl/ParticleRenderer": 40,
            "./renderers/canvas/CanvasRenderer": 43,
            "./renderers/canvas/utils/CanvasBuffer": 44,
            "./renderers/canvas/utils/CanvasGraphics": 45,
            "./renderers/webgl/WebGLRenderer": 48,
            "./renderers/webgl/filters/AbstractFilter": 49,
            "./renderers/webgl/managers/ShaderManager": 55,
            "./renderers/webgl/shaders/Shader": 60,
            "./renderers/webgl/utils/ObjectRenderer": 62,
            "./renderers/webgl/utils/RenderTarget": 64,
            "./sprites/Sprite": 66,
            "./sprites/webgl/SpriteRenderer": 67,
            "./text/Text": 68,
            "./textures/BaseTexture": 69,
            "./textures/RenderTexture": 70,
            "./textures/Texture": 71,
            "./textures/TextureUvs": 72,
            "./textures/VideoBaseTexture": 73,
            "./ticker": 75,
            "./utils": 76
        }],
        30: [function(t, e, r) {
            function i() {
                this.a = 1, this.b = 0, this.c = 0, this.d = 1,
                    this.tx = 0, this.ty = 0
            }
            var n = t("./Point");
            i.prototype.constructor = i, e.exports = i, i.prototype.fromArray = function(t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
            }, i.prototype.toArray = function(t) {
                this.array || (this.array = new Float32Array(9));
                var e = this.array;
                return t ? (e[0] = this.a, e[1] = this.b, e[2] = 0, e[3] = this.c, e[4] = this.d, e[5] = 0, e[6] = this.tx, e[7] = this.ty, e[8] = 1) : (e[0] = this.a, e[1] = this.c, e[2] = this.tx, e[3] = this.b, e[4] = this.d, e[5] = this.ty, e[6] = 0, e[7] = 0, e[8] = 1), e
            }, i.prototype.apply = function(t, e) {
                e = e || new n;
                var r = t.x,
                    i = t.y;
                return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e
            }, i.prototype.applyInverse = function(t, e) {
                e = e || new n;
                var r = 1 / (this.a * this.d + this.c * -this.b),
                    i = t.x,
                    o = t.y;
                return e.x = this.d * r * i + -this.c * r * o + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * o + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e
            }, i.prototype.translate = function(t, e) {
                return this.tx += t, this.ty += e, this
            }, i.prototype.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }, i.prototype.rotate = function(t) {
                var e = Math.cos(t),
                    r = Math.sin(t),
                    i = this.a,
                    n = this.c,
                    o = this.tx;
                return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
            }, i.prototype.append = function(t) {
                var e = this.a,
                    r = this.b,
                    i = this.c,
                    n = this.d;
                return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this
            }, i.prototype.prepend = function(t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var r = this.a,
                        i = this.c;
                    this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
            }, i.prototype.invert = function() {
                var t = this.a,
                    e = this.b,
                    r = this.c,
                    i = this.d,
                    n = this.tx,
                    o = t * i - e * r;
                return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this
            }, i.prototype.identity = function() {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }, i.prototype.clone = function() {
                var t = new i;
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, i.prototype.copy = function(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, i.IDENTITY = new i, i.TEMP_MATRIX = new i
        }, {
            "./Point": 31
        }],
        31: [function(t, e, r) {
            function i(t, e) {
                this.x = t || 0, this.y = e || 0
            }
            i.prototype.constructor = i, e.exports = i, i.prototype.clone = function() {
                return new i(this.x, this.y)
            }, i.prototype.copy = function(t) {
                this.set(t.x, t.y)
            }, i.prototype.equals = function(t) {
                return t.x === this.x && t.y === this.y
            }, i.prototype.set = function(t, e) {
                this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
            }
        }, {}],
        32: [function(t, e, r) {
            e.exports = {
                Point: t("./Point"),
                Matrix: t("./Matrix"),
                Circle: t("./shapes/Circle"),
                Ellipse: t("./shapes/Ellipse"),
                Polygon: t("./shapes/Polygon"),
                Rectangle: t("./shapes/Rectangle"),
                RoundedRectangle: t("./shapes/RoundedRectangle")
            }
        }, {
            "./Matrix": 30,
            "./Point": 31,
            "./shapes/Circle": 33,
            "./shapes/Ellipse": 34,
            "./shapes/Polygon": 35,
            "./shapes/Rectangle": 36,
            "./shapes/RoundedRectangle": 37
        }],
        33: [function(t, e, r) {
            function i(t, e, r) {
                this.x = t || 0, this.y = e || 0, this.radius = r || 0, this.type = o.SHAPES.CIRC
            }
            var n = t("./Rectangle"),
                o = t("../../const");
            i.prototype.constructor = i, e.exports = i, i.prototype.clone = function() {
                return new i(this.x, this.y, this.radius)
            }, i.prototype.contains = function(t, e) {
                if (this.radius <= 0) return !1;
                var r = this.x - t,
                    i = this.y - e,
                    n = this.radius * this.radius;
                return r *= r, i *= i, n >= r + i
            }, i.prototype.getBounds = function() {
                return new n(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            }
        }, {
            "../../const": 22,
            "./Rectangle": 36
        }],
        34: [function(t, e, r) {
            function i(t, e, r, i) {
                this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.type = o.SHAPES.ELIP
            }
            var n = t("./Rectangle"),
                o = t("../../const");
            i.prototype.constructor = i, e.exports = i, i.prototype.clone = function() {
                return new i(this.x, this.y, this.width, this.height)
            }, i.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var r = (t - this.x) / this.width,
                    i = (e - this.y) / this.height;
                return r *= r, i *= i, 1 >= r + i
            }, i.prototype.getBounds = function() {
                return new n(this.x - this.width, this.y - this.height, this.width, this.height)
            }
        }, {
            "../../const": 22,
            "./Rectangle": 36
        }],
        35: [function(t, e, r) {
            function i(t) {
                var e = t;
                if (!Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var r = 0; r < e.length; ++r) e[r] = arguments[r]
                }
                if (e[0] instanceof n) {
                    for (var i = [], s = 0, a = e.length; a > s; s++) i.push(e[s].x, e[s].y);
                    e = i
                }
                this.closed = !0, this.points = e, this.type = o.SHAPES.POLY
            }
            var n = t("../Point"),
                o = t("../../const");
            i.prototype.constructor = i, e.exports = i, i.prototype.clone = function() {
                return new i(this.points.slice())
            }, i.prototype.contains = function(t, e) {
                for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; i > n; o = n++) {
                    var s = this.points[2 * n],
                        a = this.points[2 * n + 1],
                        l = this.points[2 * o],
                        h = this.points[2 * o + 1],
                        u = a > e != h > e && (l - s) * (e - a) / (h - a) + s > t;
                    u && (r = !r)
                }
                return r
            }
        }, {
            "../../const": 22,
            "../Point": 31
        }],
        36: [function(t, e, r) {
            function i(t, e, r, i) {
                this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.type = n.SHAPES.RECT
            }
            var n = t("../../const");
            i.prototype.constructor = i, e.exports = i, i.EMPTY = new i(0, 0, 0, 0), i.prototype.clone = function() {
                return new i(this.x, this.y, this.width, this.height)
            }, i.prototype.contains = function(t, e) {
                return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height ? !0 : !1
            }
        }, {
            "../../const": 22
        }],
        37: [function(t, e, r) {
            function i(t, e, r, i, o) {
                this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.radius = o || 20, this.type = n.SHAPES.RREC
            }
            var n = t("../../const");
            i.prototype.constructor = i, e.exports = i, i.prototype.clone = function() {
                return new i(this.x, this.y, this.width, this.height, this.radius)
            }, i.prototype.contains = function(t, e) {
                return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height ? !0 : !1
            }
        }, {
            "../../const": 22
        }],
        38: [function(t, e, r) {
            function i(t, e) {
                n.call(this), this._properties = [!1, !0, !1, !1, !1], this._size = t || 15e3, this._buffers = null, this._updateStatic = !1, this.interactiveChildren = !1, this.blendMode = o.BLEND_MODES.NORMAL, this.roundPixels = !0, this.setProperties(e)
            }
            var n = t("../display/Container"),
                o = t("../const");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.setProperties = function(t) {
                t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
            }, i.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            }, i.prototype.renderWebGL = function(t) {
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
            }, i.prototype.addChildAt = function(t, e) {
                if (t === this) return t;
                if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this._updateStatic = !0, t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }, i.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e.parent = null, this.children.splice(t, 1), this._updateStatic = !0, e
            }, i.prototype.renderCanvas = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                    var e = t.context,
                        r = this.worldTransform,
                        i = !0,
                        n = 0,
                        o = 0,
                        s = 0,
                        a = 0;
                    e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                    for (var l = 0; l < this.children.length; ++l) {
                        var h = this.children[l];
                        if (h.visible) {
                            var u = h.texture.frame;
                            if (e.globalAlpha = this.worldAlpha * h.alpha, h.rotation % (2 * Math.PI) === 0) i && (e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), i = !1), n = h.anchor.x * -u.width * h.scale.x + h.position.x + .5, o = h.anchor.y * -u.height * h.scale.y + h.position.y + .5, s = u.width * h.scale.x, a = u.height * h.scale.y;
                            else {
                                i || (i = !0), h.displayObjectUpdateTransform();
                                var c = h.worldTransform;
                                t.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, 0 | c.tx, 0 | c.ty) : e.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), n = h.anchor.x * -u.width + .5, o = h.anchor.y * -u.height + .5, s = u.width, a = u.height
                            }
                            e.drawImage(h.texture.baseTexture.source, u.x, u.y, u.width, u.height, n, o, s, a)
                        }
                    }
                }
            }, i.prototype.destroy = function() {
                if (n.prototype.destroy.apply(this, arguments), this._buffers)
                    for (var t = 0; t < this._buffers.length; ++t) this._buffers.destroy();
                this._properties = null, this._buffers = null
            }
        }, {
            "../const": 22,
            "../display/Container": 23
        }],
        39: [function(t, e, r) {
            function i(t, e, r) {
                this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.dynamic ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
            }
            i.prototype.constructor = i, e.exports = i, i.prototype.initBuffers = function() {
                var t, e, r = this.gl,
                    i = 0;
                for (this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], e.offset = i, i += e.size, this.dynamicStride += e.size;
                this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), r.bufferData(r.ARRAY_BUFFER, this.dynamicData, r.DYNAMIC_DRAW);
                var n = 0;
                for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], e.offset = n, n += e.size, this.staticStride += e.size;
                this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), r.bufferData(r.ARRAY_BUFFER, this.staticData, r.DYNAMIC_DRAW)
            }, i.prototype.uploadDynamic = function(t, e, r) {
                for (var i = this.gl, n = 0; n < this.dynamicProperties.length; n++) {
                    var o = this.dynamicProperties[n];
                    o.uploadFunction(t, e, r, this.dynamicData, this.dynamicStride, o.offset)
                }
                i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.dynamicData)
            }, i.prototype.uploadStatic = function(t, e, r) {
                for (var i = this.gl, n = 0; n < this.staticProperties.length; n++) {
                    var o = this.staticProperties[n];
                    o.uploadFunction(t, e, r, this.staticData, this.staticStride, o.offset)
                }
                i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.staticData)
            }, i.prototype.bind = function() {
                var t, e, r = this.gl;
                for (r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], r.vertexAttribPointer(e.attribute, e.size, r.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
                for (r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], r.vertexAttribPointer(e.attribute, e.size, r.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
            }, i.prototype.destroy = function() {
                this.dynamicProperties = null, this.dynamicData = null, this.gl.deleteBuffer(this.dynamicBuffer), this.staticProperties = null, this.staticData = null, this.gl.deleteBuffer(this.staticBuffer)
            }
        }, {}],
        40: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.size = 15e3;
                var e = 6 * this.size;
                this.indices = new Uint16Array(e);
                for (var r = 0, i = 0; e > r; r += 6, i += 4) this.indices[r + 0] = i + 0, this.indices[r + 1] = i + 1, this.indices[r + 2] = i + 2, this.indices[r + 3] = i + 0, this.indices[r + 4] = i + 2, this.indices[r + 5] = i + 3;
                this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new l.Matrix
            }
            var n = t("../../renderers/webgl/utils/ObjectRenderer"),
                o = t("../../renderers/webgl/WebGLRenderer"),
                s = t("./ParticleShader"),
                a = t("./ParticleBuffer"),
                l = t("../../math");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, o.registerPlugin("particle", i), i.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.shader = new s(this.renderer.shaderManager), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.properties = [{
                    attribute: this.shader.attributes.aVertexPosition,
                    dynamic: !1,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aPositionCoord,
                    dynamic: !0,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aRotation,
                    dynamic: !1,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aTextureCoord,
                    dynamic: !1,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aColor,
                    dynamic: !1,
                    size: 1,
                    uploadFunction: this.uploadAlpha,
                    offset: 0
                }]
            }, i.prototype.start = function() {
                var t = this.renderer.gl;
                t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var e = this.shader;
                this.renderer.shaderManager.setShader(e)
            }, i.prototype.render = function(t) {
                var e = t.children,
                    r = e.length,
                    i = t._size;
                if (0 !== r) {
                    r > i && (r = i), t._buffers || (t._buffers = this.generateBuffers(t)), this.renderer.blendModeManager.setBlendMode(t.blendMode);
                    var n = this.renderer.gl,
                        o = t.worldTransform.copy(this.tempMatrix);
                    o.prepend(this.renderer.currentRenderTarget.projectionMatrix), n.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, !1, o.toArray(!0)), n.uniform1f(this.shader.uniforms.uAlpha._location, t.worldAlpha);
                    var s = t._updateStatic,
                        a = e[0]._texture.baseTexture;
                    if (a._glTextures[n.id]) n.bindTexture(n.TEXTURE_2D, a._glTextures[n.id]);
                    else {
                        if (!this.renderer.updateTexture(a)) return;
                        this.properties[0].dynamic && this.properties[3].dynamic || (s = !0)
                    }
                    for (var l = 0, h = 0; r > h; h += this.size) {
                        var u = r - h;
                        u > this.size && (u = this.size);
                        var c = t._buffers[l++];
                        c.uploadDynamic(e, h, u), s && c.uploadStatic(e, h, u), c.bind(this.shader), n.drawElements(n.TRIANGLES, 6 * u, n.UNSIGNED_SHORT, 0), this.renderer.drawCount++
                    }
                    t._updateStatic = !1
                }
            }, i.prototype.generateBuffers = function(t) {
                var e, r = this.renderer.gl,
                    i = [],
                    n = t._size;
                for (e = 0; e < t._properties.length; e++) this.properties[e].dynamic = t._properties[e];
                for (e = 0; n > e; e += this.size) i.push(new a(r, this.properties, this.size, this.shader));
                return i
            }, i.prototype.uploadVertices = function(t, e, r, i, n, o) {
                for (var s, a, l, h, u, c, d, p, f, v = 0; r > v; v++) s = t[e + v], a = s._texture, h = s.scale.x, u = s.scale.y, a.trim ? (l = a.trim, d = l.x - s.anchor.x * l.width, c = d + a.crop.width, f = l.y - s.anchor.y * l.height, p = f + a.crop.height) : (c = a._frame.width * (1 - s.anchor.x), d = a._frame.width * -s.anchor.x, p = a._frame.height * (1 - s.anchor.y), f = a._frame.height * -s.anchor.y), i[o] = d * h, i[o + 1] = f * u, i[o + n] = c * h, i[o + n + 1] = f * u, i[o + 2 * n] = c * h, i[o + 2 * n + 1] = p * u, i[o + 3 * n] = d * h, i[o + 3 * n + 1] = p * u, o += 4 * n
            }, i.prototype.uploadPosition = function(t, e, r, i, n, o) {
                for (var s = 0; r > s; s++) {
                    var a = t[e + s].position;
                    i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n
                }
            }, i.prototype.uploadRotation = function(t, e, r, i, n, o) {
                for (var s = 0; r > s; s++) {
                    var a = t[e + s].rotation;
                    i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
                }
            }, i.prototype.uploadUvs = function(t, e, r, i, n, o) {
                for (var s = 0; r > s; s++) {
                    var a = t[e + s]._texture._uvs;
                    a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n)
                }
            }, i.prototype.uploadAlpha = function(t, e, r, i, n, o) {
                for (var s = 0; r > s; s++) {
                    var a = t[e + s].alpha;
                    i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
                }
            }, i.prototype.destroy = function() {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), n.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
            }
        }, {
            "../../math": 32,
            "../../renderers/webgl/WebGLRenderer": 48,
            "../../renderers/webgl/utils/ObjectRenderer": 62,
            "./ParticleBuffer": 39,
            "./ParticleShader": 41
        }],
        41: [function(t, e, r) {
            function i(t) {
                n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor * uAlpha ;", "}"].join("\n"), {
                    uAlpha: {
                        type: "1f",
                        value: 1
                    }
                }, {
                    aPositionCoord: 0,
                    aRotation: 0
                })
            }
            var n = t("../../renderers/webgl/shaders/TextureShader");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i
        }, {
            "../../renderers/webgl/shaders/TextureShader": 61
        }],
        42: [function(t, e, r) {
            function i(t, e, r, i) {
                if (a.call(this), n.sayHello(t), i)
                    for (var l in s.DEFAULT_RENDER_OPTIONS) "undefined" == typeof i[l] && (i[l] = s.DEFAULT_RENDER_OPTIONS[l]);
                else i = s.DEFAULT_RENDER_OPTIONS;
                this.type = s.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = r || 600, this.view = i.view || document.createElement("canvas"), this.resolution = i.resolution, this.transparent = i.transparent, this.autoResize = i.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = i.preserveDrawingBuffer, this.clearBeforeRender = i.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgb = [0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = i.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = {
                    worldTransform: new o.Matrix,
                    worldAlpha: 1,
                    children: []
                }, this._lastObjectRendered = this._tempDisplayObjectParent
            }
            var n = t("../utils"),
                o = t("../math"),
                s = t("../const"),
                a = t("eventemitter3");
            i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                backgroundColor: {
                    get: function() {
                        return this._backgroundColor
                    },
                    set: function(t) {
                        this._backgroundColor = t, this._backgroundColorString = n.hex2string(t), n.hex2rgb(t, this._backgroundColorRgb)
                    }
                }
            }), i.prototype.resize = function(t, e) {
                this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
            }, i.prototype.destroy = function(t) {
                t && this.view.parent && this.view.parent.removeChild(this.view), this.type = s.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgb = null, this._backgroundColorString = null
            }
        }, {
            "../const": 22,
            "../math": 32,
            "../utils": 76,
            eventemitter3: 11
        }],
        43: [function(t, e, r) {
            function i(t, e, r) {
                n.call(this, "Canvas", t, e, r), this.type = l.RENDERER_TYPE.CANVAS, this.context = this.view.getContext("2d", {
                    alpha: this.transparent
                }), this.refresh = !0, this.maskManager = new o, this.roundPixels = !1, this.currentScaleMode = l.SCALE_MODES.DEFAULT, this.currentBlendMode = l.BLEND_MODES.NORMAL, this.smoothProperty = "imageSmoothingEnabled", this.context.imageSmoothingEnabled || (this.context.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.context.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.context.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.context.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this._mapBlendModes(), this._tempDisplayObjectParent = {
                    worldTransform: new a.Matrix,
                    worldAlpha: 1
                }, this.resize(t, e)
            }
            var n = t("../SystemRenderer"),
                o = t("./utils/CanvasMaskManager"),
                s = t("../../utils"),
                a = t("../../math"),
                l = t("../../const");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, s.pluginTarget.mixin(i), i.prototype.render = function(t) {
                var e = t.parent;
                this._lastObjectRendered = t, t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e, this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.currentBlendMode = l.BLEND_MODES.NORMAL, this.context.globalCompositeOperation = this.blendModes[l.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = this._backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(t, this.context)
            }, i.prototype.destroy = function(t) {
                this.destroyPlugins(), n.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.roundPixels = !1, this.currentScaleMode = 0, this.currentBlendMode = 0, this.smoothProperty = null
            }, i.prototype.renderDisplayObject = function(t, e) {
                var r = this.context;
                this.context = e, t.renderCanvas(this), this.context = r
            }, i.prototype._mapBlendModes = function() {
                this.blendModes || (this.blendModes = {}, s.canUseNewCanvasBlendModes() ? (this.blendModes[l.BLEND_MODES.NORMAL] = "source-over", this.blendModes[l.BLEND_MODES.ADD] = "lighter", this.blendModes[l.BLEND_MODES.MULTIPLY] = "multiply", this.blendModes[l.BLEND_MODES.SCREEN] = "screen", this.blendModes[l.BLEND_MODES.OVERLAY] = "overlay", this.blendModes[l.BLEND_MODES.DARKEN] = "darken", this.blendModes[l.BLEND_MODES.LIGHTEN] = "lighten", this.blendModes[l.BLEND_MODES.COLOR_DODGE] = "color-dodge", this.blendModes[l.BLEND_MODES.COLOR_BURN] = "color-burn", this.blendModes[l.BLEND_MODES.HARD_LIGHT] = "hard-light", this.blendModes[l.BLEND_MODES.SOFT_LIGHT] = "soft-light", this.blendModes[l.BLEND_MODES.DIFFERENCE] = "difference", this.blendModes[l.BLEND_MODES.EXCLUSION] = "exclusion", this.blendModes[l.BLEND_MODES.HUE] = "hue", this.blendModes[l.BLEND_MODES.SATURATION] = "saturate", this.blendModes[l.BLEND_MODES.COLOR] = "color", this.blendModes[l.BLEND_MODES.LUMINOSITY] = "luminosity") : (this.blendModes[l.BLEND_MODES.NORMAL] = "source-over", this.blendModes[l.BLEND_MODES.ADD] = "lighter", this.blendModes[l.BLEND_MODES.MULTIPLY] = "source-over", this.blendModes[l.BLEND_MODES.SCREEN] = "source-over", this.blendModes[l.BLEND_MODES.OVERLAY] = "source-over", this.blendModes[l.BLEND_MODES.DARKEN] = "source-over", this.blendModes[l.BLEND_MODES.LIGHTEN] = "source-over", this.blendModes[l.BLEND_MODES.COLOR_DODGE] = "source-over", this.blendModes[l.BLEND_MODES.COLOR_BURN] = "source-over", this.blendModes[l.BLEND_MODES.HARD_LIGHT] = "source-over", this.blendModes[l.BLEND_MODES.SOFT_LIGHT] = "source-over", this.blendModes[l.BLEND_MODES.DIFFERENCE] = "source-over", this.blendModes[l.BLEND_MODES.EXCLUSION] = "source-over", this.blendModes[l.BLEND_MODES.HUE] = "source-over", this.blendModes[l.BLEND_MODES.SATURATION] = "source-over", this.blendModes[l.BLEND_MODES.COLOR] = "source-over", this.blendModes[l.BLEND_MODES.LUMINOSITY] = "source-over"))
            }
        }, {
            "../../const": 22,
            "../../math": 32,
            "../../utils": 76,
            "../SystemRenderer": 42,
            "./utils/CanvasMaskManager": 46
        }],
        44: [function(t, e, r) {
            function i(t, e) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e
            }
            i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                width: {
                    get: function() {
                        return this.canvas.width
                    },
                    set: function(t) {
                        this.canvas.width = t
                    }
                },
                height: {
                    get: function() {
                        return this.canvas.height
                    },
                    set: function(t) {
                        this.canvas.height = t
                    }
                }
            }), i.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }, i.prototype.resize = function(t, e) {
                this.canvas.width = t, this.canvas.height = e
            }, i.prototype.destroy = function() {
                this.context = null, this.canvas = null
            }
        }, {}],
        45: [function(t, e, r) {
            var i = t("../../../const"),
                n = {};
            e.exports = n, n.renderGraphics = function(t, e) {
                var r = t.worldAlpha;
                t.dirty && (this.updateGraphicsTint(t), t.dirty = !1);
                for (var n = 0; n < t.graphicsData.length; n++) {
                    var o = t.graphicsData[n],
                        s = o.shape,
                        a = o._fillTint,
                        l = o._lineTint;
                    if (e.lineWidth = o.lineWidth, o.type === i.SHAPES.POLY) {
                        e.beginPath();
                        var h = s.points;
                        e.moveTo(h[0], h[1]);
                        for (var u = 1; u < h.length / 2; u++) e.lineTo(h[2 * u], h[2 * u + 1]);
                        s.closed && e.lineTo(h[0], h[1]), h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke())
                    } else if (o.type === i.SHAPES.RECT)(o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fillRect(s.x, s.y, s.width, s.height)), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.strokeRect(s.x, s.y, s.width, s.height));
                    else if (o.type === i.SHAPES.CIRC) e.beginPath(), e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke());
                    else if (o.type === i.SHAPES.ELIP) {
                        var c = 2 * s.width,
                            d = 2 * s.height,
                            p = s.x - c / 2,
                            f = s.y - d / 2;
                        e.beginPath();
                        var v = .5522848,
                            g = c / 2 * v,
                            m = d / 2 * v,
                            y = p + c,
                            x = f + d,
                            b = p + c / 2,
                            _ = f + d / 2;
                        e.moveTo(p, _), e.bezierCurveTo(p, _ - m, b - g, f, b, f), e.bezierCurveTo(b + g, f, y, _ - m, y, _), e.bezierCurveTo(y, _ + m, b + g, x, b, x), e.bezierCurveTo(b - g, x, p, _ + m, p, _), e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke())
                    } else if (o.type === i.SHAPES.RREC) {
                        var T = s.x,
                            E = s.y,
                            w = s.width,
                            S = s.height,
                            C = s.radius,
                            M = Math.min(w, S) / 2 | 0;
                        C = C > M ? M : C, e.beginPath(), e.moveTo(T, E + C), e.lineTo(T, E + S - C), e.quadraticCurveTo(T, E + S, T + C, E + S), e.lineTo(T + w - C, E + S), e.quadraticCurveTo(T + w, E + S, T + w, E + S - C), e.lineTo(T + w, E + C), e.quadraticCurveTo(T + w, E, T + w - C, E), e.lineTo(T + C, E), e.quadraticCurveTo(T, E, T, E + C), e.closePath(), (o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * r, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * r, e.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.stroke())
                    }
                }
            }, n.renderGraphicsMask = function(t, e) {
                var r = t.graphicsData.length;
                if (0 !== r) {
                    e.beginPath();
                    for (var n = 0; r > n; n++) {
                        var o = t.graphicsData[n],
                            s = o.shape;
                        if (o.type === i.SHAPES.POLY) {
                            var a = s.points;
                            e.moveTo(a[0], a[1]);
                            for (var l = 1; l < a.length / 2; l++) e.lineTo(a[2 * l], a[2 * l + 1]);
                            a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
                        } else if (o.type === i.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
                        else if (o.type === i.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
                        else if (o.type === i.SHAPES.ELIP) {
                            var h = 2 * s.width,
                                u = 2 * s.height,
                                c = s.x - h / 2,
                                d = s.y - u / 2,
                                p = .5522848,
                                f = h / 2 * p,
                                v = u / 2 * p,
                                g = c + h,
                                m = d + u,
                                y = c + h / 2,
                                x = d + u / 2;
                            e.moveTo(c, x), e.bezierCurveTo(c, x - v, y - f, d, y, d), e.bezierCurveTo(y + f, d, g, x - v, g, x), e.bezierCurveTo(g, x + v, y + f, m, y, m), e.bezierCurveTo(y - f, m, c, x + v, c, x), e.closePath()
                        } else if (o.type === i.SHAPES.RREC) {
                            var b = s.x,
                                _ = s.y,
                                T = s.width,
                                E = s.height,
                                w = s.radius,
                                S = Math.min(T, E) / 2 | 0;
                            w = w > S ? S : w, e.moveTo(b, _ + w), e.lineTo(b, _ + E - w), e.quadraticCurveTo(b, _ + E, b + w, _ + E), e.lineTo(b + T - w, _ + E), e.quadraticCurveTo(b + T, _ + E, b + T, _ + E - w), e.lineTo(b + T, _ + w), e.quadraticCurveTo(b + T, _, b + T - w, _), e.lineTo(b + w, _), e.quadraticCurveTo(b, _, b, _ + w), e.closePath()
                        }
                    }
                }
            }, n.updateGraphicsTint = function(t) {
                if (16777215 !== t.tint)
                    for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, i = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
                        var o = t.graphicsData[n],
                            s = 0 | o.fillColor,
                            a = 0 | o.lineColor;
                        o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * i * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * i * 255
                    }
            }
        }, {
            "../../../const": 22
        }],
        46: [function(t, e, r) {
            function i() {}
            var n = t("./CanvasGraphics");
            i.prototype.constructor = i, e.exports = i, i.prototype.pushMask = function(t, e) {
                e.context.save();
                var r = t.alpha,
                    i = t.worldTransform,
                    o = e.resolution;
                e.context.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o), t.texture || (n.renderGraphicsMask(t, e.context), e.context.clip()), t.worldAlpha = r
            }, i.prototype.popMask = function(t) {
                t.context.restore()
            }, i.prototype.destroy = function() {}
        }, {
            "./CanvasGraphics": 45
        }],
        47: [function(t, e, r) {
            var i = t("../../../utils"),
                n = {};
            e.exports = n, n.getTintedTexture = function(t, e) {
                var r = t.texture;
                e = n.roundColor(e);
                var i = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                if (r.tintCache = r.tintCache || {}, r.tintCache[i]) return r.tintCache[i];
                var o = n.canvas || document.createElement("canvas");
                if (n.tintMethod(r, e, o), n.convertTintToImage) {
                    var s = new Image;
                    s.src = o.toDataURL(), r.tintCache[i] = s
                } else r.tintCache[i] = o, n.canvas = null;
                return o
            }, n.tintWithMultiply = function(t, e, r) {
                var i = r.getContext("2d"),
                    n = t.crop;
                r.width = n.width, r.height = n.height, i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "multiply", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }, n.tintWithOverlay = function(t, e, r) {
                var i = r.getContext("2d"),
                    n = t.crop;
                r.width = n.width, r.height = n.height, i.globalCompositeOperation = "copy", i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }, n.tintWithPerPixel = function(t, e, r) {
                var n = r.getContext("2d"),
                    o = t.crop;
                r.width = o.width, r.height = o.height, n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
                for (var s = i.hex2rgb(e), a = s[0], l = s[1], h = s[2], u = n.getImageData(0, 0, o.width, o.height), c = u.data, d = 0; d < c.length; d += 4) c[d + 0] *= a, c[d + 1] *= l, c[d + 2] *= h;
                n.putImageData(u, 0, 0)
            }, n.roundColor = function(t) {
                var e = n.cacheStepsPerColorChannel,
                    r = i.hex2rgb(t);
                return r[0] = Math.min(255, r[0] / e * e), r[1] = Math.min(255, r[1] / e * e), r[2] = Math.min(255, r[2] / e * e), i.rgb2hex(r)
            }, n.cacheStepsPerColorChannel = 8, n.convertTintToImage = !1, n.canUseMultiply = i.canUseNewCanvasBlendModes(), n.tintMethod = n.canUseMultiply ? n.tintWithMultiply : n.tintWithPerPixel
        }, {
            "../../../utils": 76
        }],
        48: [function(t, e, r) {
            function i(t, e, r) {
                r = r || {}, n.call(this, "WebGL", t, e, r), this.type = f.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._useFXAA = !!r.forceFXAA && r.antialias, this._FXAAFilter = null, this._contextOptions = {
                    alpha: this.transparent,
                    antialias: r.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: r.preserveDrawingBuffer
                }, this.drawCount = 0, this.shaderManager = new o(this), this.maskManager = new s(this), this.stencilManager = new a(this), this.filterManager = new l(this), this.blendModeManager = new h(this), this.currentRenderTarget = null, this.currentRenderer = new c(this), this.initPlugins(), this._createContext(), this._initContext(), this._mapBlendModes(), this._renderTargetStack = []
            }
            var n = t("../SystemRenderer"),
                o = t("./managers/ShaderManager"),
                s = t("./managers/MaskManager"),
                a = t("./managers/StencilManager"),
                l = t("./managers/FilterManager"),
                h = t("./managers/BlendModeManager"),
                u = t("./utils/RenderTarget"),
                c = t("./utils/ObjectRenderer"),
                d = t("./filters/FXAAFilter"),
                p = t("../../utils"),
                f = t("../../const");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, p.pluginTarget.mixin(i), i.glContextId = 0, i.prototype._createContext = function() {
                var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
                if (this.gl = t, !t) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                this.glContextId = i.glContextId++, t.id = this.glContextId, t.renderer = this
            }, i.prototype._initContext = function() {
                var t = this.gl;
                t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.renderTarget = new u(t, this.width, this.height, null, this.resolution, !0), this.setRenderTarget(this.renderTarget), this.emit("context", t), this.resize(this.width, this.height), this._useFXAA || (this._useFXAA = this._contextOptions.antialias && !t.getContextAttributes().antialias), this._useFXAA && (window.console.warn("FXAA antialiasing being used instead of native antialiasing"),
                    this._FXAAFilter = [new d])
            }, i.prototype.render = function(t) {
                if (!this.gl.isContextLost()) {
                    this.drawCount = 0, this._lastObjectRendered = t, this._useFXAA && (this._FXAAFilter[0].uniforms.resolution.value.x = this.width, this._FXAAFilter[0].uniforms.resolution.value.y = this.height, t.filterArea = this.renderTarget.size, t.filters = this._FXAAFilter);
                    var e = t.parent;
                    t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e;
                    var r = this.gl;
                    this.setRenderTarget(this.renderTarget), this.clearBeforeRender && (this.transparent ? r.clearColor(0, 0, 0, 0) : r.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1), r.clear(r.COLOR_BUFFER_BIT)), this.renderDisplayObject(t, this.renderTarget)
                }
            }, i.prototype.renderDisplayObject = function(t, e, r) {
                this.setRenderTarget(e), r && e.clear(), this.filterManager.setFilterStack(e.filterStack), t.renderWebGL(this), this.currentRenderer.flush()
            }, i.prototype.setObjectRenderer = function(t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
            }, i.prototype.setRenderTarget = function(t) {
                this.currentRenderTarget !== t && (this.currentRenderTarget = t, this.currentRenderTarget.activate(), this.stencilManager.setMaskStack(t.stencilMaskStack))
            }, i.prototype.resize = function(t, e) {
                n.prototype.resize.call(this, t, e), this.filterManager.resize(t, e), this.renderTarget.resize(t, e), this.currentRenderTarget === this.renderTarget && (this.renderTarget.activate(), this.gl.viewport(0, 0, this.width, this.height))
            }, i.prototype.updateTexture = function(t) {
                if (t = t.baseTexture || t, t.hasLoaded) {
                    var e = this.gl;
                    return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture(), t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this)), e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.mipmap && t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST), e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), t._glTextures[e.id]
                }
            }, i.prototype.destroyTexture = function(t) {
                t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.gl.id] && this.gl.deleteTexture(t._glTextures[this.gl.id])
            }, i.prototype.handleContextLost = function(t) {
                t.preventDefault()
            }, i.prototype.handleContextRestored = function() {
                this._initContext();
                for (var t in p.BaseTextureCache) p.BaseTextureCache[t]._glTextures.length = 0
            }, i.prototype.destroy = function(t) {
                this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), n.prototype.destroy.call(this, t), this.uuid = 0, this.shaderManager.destroy(), this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.maskManager = null, this.filterManager = null, this.blendModeManager = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.drawCount = 0, this.gl = null
            }, i.prototype._mapBlendModes = function() {
                var t = this.gl;
                this.blendModes || (this.blendModes = {}, this.blendModes[f.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], this.blendModes[f.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SCREEN] = [t.SRC_ALPHA, t.ONE], this.blendModes[f.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA])
            }
        }, {
            "../../const": 22,
            "../../utils": 76,
            "../SystemRenderer": 42,
            "./filters/FXAAFilter": 50,
            "./managers/BlendModeManager": 52,
            "./managers/FilterManager": 53,
            "./managers/MaskManager": 54,
            "./managers/ShaderManager": 55,
            "./managers/StencilManager": 56,
            "./utils/ObjectRenderer": 62,
            "./utils/RenderTarget": 64
        }],
        49: [function(t, e, r) {
            function i(t, e, r) {
                this.shaders = [], this.padding = 0, this.uniforms = r || {}, this.vertexSrc = t || n.defaultVertexSrc, this.fragmentSrc = e || n.defaultFragmentSrc
            }
            var n = t("../shaders/TextureShader");
            i.prototype.constructor = i, e.exports = i, i.prototype.getShader = function(t) {
                var e = t.gl,
                    r = this.shaders[e.id];
                return r || (r = new n(t.shaderManager, this.vertexSrc, this.fragmentSrc, this.uniforms, this.attributes), this.shaders[e.id] = r), r
            }, i.prototype.applyFilter = function(t, e, r, i) {
                var n = this.getShader(t);
                t.filterManager.applyFilter(n, e, r, i)
            }, i.prototype.syncUniform = function(t) {
                for (var e = 0, r = this.shaders.length; r > e; ++e) this.shaders[e].syncUniform(t)
            }
        }, {
            "../shaders/TextureShader": 61
        }],
        50: [function(t, e, r) {
            function i() {
                n.call(this, "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n', {
                    resolution: {
                        type: "v2",
                        value: {
                            x: 1,
                            y: 1
                        }
                    }
                })
            }
            var n = t("./AbstractFilter");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager,
                    n = this.getShader(t);
                i.applyFilter(n, e, r)
            }
        }, {
            "./AbstractFilter": 49
        }],
        51: [function(t, e, r) {
            function i(t) {
                var e = new o.Matrix;
                n.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n", {
                    mask: {
                        type: "sampler2D",
                        value: t._texture
                    },
                    alpha: {
                        type: "f",
                        value: 1
                    },
                    otherMatrix: {
                        type: "mat3",
                        value: e.toArray(!0)
                    }
                }), this.maskSprite = t, this.maskMatrix = e
            }
            var n = t("./AbstractFilter"),
                o = t("../../../math");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager;
                this.uniforms.mask.value = this.maskSprite._texture, i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.alpha.value = this.maskSprite.worldAlpha;
                var n = this.getShader(t);
                i.applyFilter(n, e, r)
            }, Object.defineProperties(i.prototype, {
                map: {
                    get: function() {
                        return this.uniforms.mask.value
                    },
                    set: function(t) {
                        this.uniforms.mask.value = t
                    }
                },
                offset: {
                    get: function() {
                        return this.uniforms.offset.value
                    },
                    set: function(t) {
                        this.uniforms.offset.value = t
                    }
                }
            })
        }, {
            "../../../math": 32,
            "./AbstractFilter": 49
        }],
        52: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.currentBlendMode = 99999
            }
            var n = t("./WebGLManager");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.setBlendMode = function(t) {
                if (this.currentBlendMode === t) return !1;
                this.currentBlendMode = t;
                var e = this.renderer.blendModes[this.currentBlendMode];
                return this.renderer.gl.blendFunc(e[0], e[1]), !0
            }
        }, {
            "./WebGLManager": 57
        }],
        53: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.filterStack = [], this.filterStack.push({
                    renderTarget: t.currentRenderTarget,
                    filter: [],
                    bounds: null
                }), this.texturePool = [], this.textureSize = new l.Rectangle(0, 0, t.width, t.height), this.currentFrame = null
            }
            var n = t("./WebGLManager"),
                o = t("../utils/RenderTarget"),
                s = t("../../../const"),
                a = t("../utils/Quad"),
                l = t("../../../math");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.onContextChange = function() {
                this.texturePool.length = 0;
                var t = this.renderer.gl;
                this.quad = new a(t)
            }, i.prototype.setFilterStack = function(t) {
                this.filterStack = t
            }, i.prototype.pushFilter = function(t, e) {
                var r = t.filterArea ? t.filterArea.clone() : t.getBounds();
                r.x = 0 | r.x, r.y = 0 | r.y, r.width = 0 | r.width, r.height = 0 | r.height;
                var i = 0 | e[0].padding;
                if (r.x -= i, r.y -= i, r.width += 2 * i, r.height += 2 * i, this.renderer.currentRenderTarget.transform) {
                    var n = this.renderer.currentRenderTarget.transform;
                    r.x += n.tx, r.y += n.ty, this.capFilterArea(r), r.x -= n.tx, r.y -= n.ty
                } else this.capFilterArea(r);
                if (r.width > 0 && r.height > 0) {
                    this.currentFrame = r;
                    var o = this.getRenderTarget();
                    this.renderer.setRenderTarget(o), o.clear(), this.filterStack.push({
                        renderTarget: o,
                        filter: e
                    })
                } else this.filterStack.push({
                    renderTarget: null,
                    filter: e
                })
            }, i.prototype.popFilter = function() {
                var t = this.filterStack.pop(),
                    e = this.filterStack[this.filterStack.length - 1],
                    r = t.renderTarget;
                if (t.renderTarget) {
                    var i = e.renderTarget,
                        n = this.renderer.gl;
                    this.currentFrame = r.frame, this.quad.map(this.textureSize, r.frame), n.bindBuffer(n.ARRAY_BUFFER, this.quad.vertexBuffer), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
                    var o = t.filter;
                    if (n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, n.FLOAT, !1, 0, 0), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, n.FLOAT, !1, 0, 32), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, n.FLOAT, !1, 0, 64), this.renderer.blendModeManager.setBlendMode(s.BLEND_MODES.NORMAL), 1 === o.length) o[0].uniforms.dimensions && (o[0].uniforms.dimensions.value[0] = this.renderer.width, o[0].uniforms.dimensions.value[1] = this.renderer.height, o[0].uniforms.dimensions.value[2] = this.quad.vertices[0], o[0].uniforms.dimensions.value[3] = this.quad.vertices[5]), o[0].applyFilter(this.renderer, r, i), this.returnRenderTarget(r);
                    else {
                        for (var a = r, l = this.getRenderTarget(!0), h = 0; h < o.length - 1; h++) {
                            var u = o[h];
                            u.uniforms.dimensions && (u.uniforms.dimensions.value[0] = this.renderer.width, u.uniforms.dimensions.value[1] = this.renderer.height, u.uniforms.dimensions.value[2] = this.quad.vertices[0], u.uniforms.dimensions.value[3] = this.quad.vertices[5]), u.applyFilter(this.renderer, a, l);
                            var c = a;
                            a = l, l = c
                        }
                        o[o.length - 1].applyFilter(this.renderer, a, i), this.returnRenderTarget(a), this.returnRenderTarget(l)
                    }
                    return t.filter
                }
            }, i.prototype.getRenderTarget = function(t) {
                var e = this.texturePool.pop() || new o(this.renderer.gl, this.textureSize.width, this.textureSize.height, s.SCALE_MODES.LINEAR, this.renderer.resolution * s.FILTER_RESOLUTION);
                return e.frame = this.currentFrame, t && e.clear(!0), e
            }, i.prototype.returnRenderTarget = function(t) {
                this.texturePool.push(t)
            }, i.prototype.applyFilter = function(t, e, r, i) {
                var n = this.renderer.gl;
                this.renderer.setRenderTarget(r), i && r.clear(), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, e.texture), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0)
            }, i.prototype.calculateMappedMatrix = function(t, e, r) {
                var i = e.worldTransform.copy(l.Matrix.TEMP_MATRIX),
                    n = e._texture.baseTexture,
                    o = r.identity(),
                    s = this.textureSize.height / this.textureSize.width;
                o.translate(t.x / this.textureSize.width, t.y / this.textureSize.height), o.scale(1, s);
                var a = this.textureSize.width / n.width,
                    h = this.textureSize.height / n.height;
                return i.tx /= n.width * a, i.ty /= n.width * a, i.invert(), o.prepend(i), o.scale(1, 1 / s), o.scale(a, h), o.translate(e.anchor.x, e.anchor.y), o
            }, i.prototype.capFilterArea = function(t) {
                t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.textureSize.width && (t.width = this.textureSize.width - t.x), t.y + t.height > this.textureSize.height && (t.height = this.textureSize.height - t.y)
            }, i.prototype.resize = function(t, e) {
                this.textureSize.width = t, this.textureSize.height = e;
                for (var r = 0; r < this.texturePool.length; r++) this.texturePool[r].resize(t, e)
            }, i.prototype.destroy = function() {
                this.filterStack = null, this.offsetY = 0;
                for (var t = 0; t < this.texturePool.length; t++) this.texturePool[t].destroy();
                this.texturePool = null
            }
        }, {
            "../../../const": 22,
            "../../../math": 32,
            "../utils/Quad": 63,
            "../utils/RenderTarget": 64,
            "./WebGLManager": 57
        }],
        54: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.stencilStack = [], this.reverse = !0, this.count = 0, this.alphaMaskPool = []
            }
            var n = t("./WebGLManager"),
                o = t("../filters/SpriteMaskFilter");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.pushMask = function(t, e) {
                e.texture ? this.pushSpriteMask(t, e) : this.pushStencilMask(t, e)
            }, i.prototype.popMask = function(t, e) {
                e.texture ? this.popSpriteMask(t, e) : this.popStencilMask(t, e)
            }, i.prototype.pushSpriteMask = function(t, e) {
                var r = this.alphaMaskPool.pop();
                r || (r = [new o(e)]), r[0].maskSprite = e, this.renderer.filterManager.pushFilter(t, r)
            }, i.prototype.popSpriteMask = function() {
                var t = this.renderer.filterManager.popFilter();
                this.alphaMaskPool.push(t)
            }, i.prototype.pushStencilMask = function(t, e) {
                this.renderer.stencilManager.pushMask(e)
            }, i.prototype.popStencilMask = function(t, e) {
                this.renderer.stencilManager.popMask(e)
            }
        }, {
            "../filters/SpriteMaskFilter": 51,
            "./WebGLManager": 57
        }],
        55: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
                for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
                this.stack = [], this._currentId = -1, this.currentShader = null
            }
            var n = t("./WebGLManager"),
                o = t("../shaders/TextureShader"),
                s = t("../shaders/ComplexPrimitiveShader"),
                a = t("../shaders/PrimitiveShader"),
                l = t("../../../utils");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, l.pluginTarget.mixin(i), e.exports = i, i.prototype.onContextChange = function() {
                this.initPlugins();
                var t = this.renderer.gl;
                this.maxAttibs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = [];
                for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
                this.defaultShader = new o(this), this.primitiveShader = new a(this), this.complexPrimitiveShader = new s(this)
            }, i.prototype.setAttribs = function(t) {
                var e;
                for (e = 0; e < this.tempAttribState.length; e++) this.tempAttribState[e] = !1;
                for (var r in t) this.tempAttribState[t[r]] = !0;
                var i = this.renderer.gl;
                for (e = 0; e < this.attribState.length; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.attribState[e] ? i.enableVertexAttribArray(e) : i.disableVertexAttribArray(e))
            }, i.prototype.setShader = function(t) {
                return this._currentId === t.uuid ? !1 : (this._currentId = t.uuid, this.currentShader = t, this.renderer.gl.useProgram(t.program), this.setAttribs(t.attributes), !0)
            }, i.prototype.destroy = function() {
                n.prototype.destroy.call(this), this.destroyPlugins(), this.attribState = null, this.tempAttribState = null
            }
        }, {
            "../../../utils": 76,
            "../shaders/ComplexPrimitiveShader": 58,
            "../shaders/PrimitiveShader": 59,
            "../shaders/TextureShader": 61,
            "./WebGLManager": 57
        }],
        56: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.stencilMaskStack = null
            }
            var n = t("./WebGLManager"),
                o = t("../../../utils");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.setMaskStack = function(t) {
                this.stencilMaskStack = t;
                var e = this.renderer.gl;
                0 === t.stencilStack.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
            }, i.prototype.pushStencil = function(t, e) {
                this.renderer.currentRenderTarget.attachStencilBuffer();
                var r = this.renderer.gl,
                    i = this.stencilMaskStack;
                this.bindGraphics(t, e, this.renderer), 0 === i.stencilStack.length && (r.enable(r.STENCIL_TEST), r.clear(r.STENCIL_BUFFER_BIT), i.reverse = !0, i.count = 0), i.stencilStack.push(e);
                var n = i.count;
                r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), 1 === e.mode ? (r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), i.reverse ? (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), i.reverse ? r.stencilFunc(r.EQUAL, 255 - (n + 1), 255) : r.stencilFunc(r.EQUAL, n + 1, 255), i.reverse = !i.reverse) : (i.reverse ? (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n + 1, 255) : r.stencilFunc(r.EQUAL, 255 - (n + 1), 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), i.count++
            }, i.prototype.bindGraphics = function(t, e) {
                this._currentGraphics = t;
                var r, i = this.renderer.gl;
                1 === e.mode ? (r = this.renderer.shaderManager.complexPrimitiveShader, this.renderer.shaderManager.setShader(r), i.uniformMatrix3fv(r.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(r.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(r.uniforms.tint._location, o.hex2rgb(t.tint)), i.uniform3fv(r.uniforms.color._location, e.color), i.uniform1f(r.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(r.attributes.aVertexPosition, 2, i.FLOAT, !1, 8, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (r = this.renderer.shaderManager.primitiveShader, this.renderer.shaderManager.setShader(r), i.uniformMatrix3fv(r.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(r.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(r.uniforms.tint._location, o.hex2rgb(t.tint)), i.uniform1f(r.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(r.attributes.aVertexPosition, 2, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(r.attributes.aColor, 4, i.FLOAT, !1, 24, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
            }, i.prototype.popStencil = function(t, e) {
                var r = this.renderer.gl,
                    i = this.stencilMaskStack;
                if (i.stencilStack.pop(), i.count--, 0 === i.stencilStack.length) r.disable(r.STENCIL_TEST);
                else {
                    var n = i.count;
                    this.bindGraphics(t, e, this.renderer), r.colorMask(!1, !1, !1, !1), 1 === e.mode ? (i.reverse = !i.reverse, i.reverse ? (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)) : (i.reverse ? (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
                }
            }, i.prototype.destroy = function() {
                n.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
            }, i.prototype.pushMask = function(t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), t.dirty && this.renderer.plugins.graphics.updateGraphics(t, this.renderer.gl), t._webGL[this.renderer.gl.id].data.length && this.pushStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer)
            }, i.prototype.popMask = function(t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.popStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer)
            }
        }, {
            "../../../utils": 76,
            "./WebGLManager": 57
        }],
        57: [function(t, e, r) {
            function i(t) {
                this.renderer = t, this.renderer.on("context", this.onContextChange, this)
            }
            i.prototype.constructor = i, e.exports = i, i.prototype.onContextChange = function() {}, i.prototype.destroy = function() {
                this.renderer.off("context", this.onContextChange, this), this.renderer = null
            }
        }, {}],
        58: [function(t, e, r) {
            function i(t) {
                n.call(this, t, ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
                    tint: {
                        type: "3f",
                        value: [0, 0, 0]
                    },
                    alpha: {
                        type: "1f",
                        value: 0
                    },
                    color: {
                        type: "3f",
                        value: [0, 0, 0]
                    },
                    translationMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    }
                }, {
                    aVertexPosition: 0
                })
            }
            var n = t("./Shader");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i
        }, {
            "./Shader": 60
        }],
        59: [function(t, e, r) {
            function i(t) {
                n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
                    tint: {
                        type: "3f",
                        value: [0, 0, 0]
                    },
                    alpha: {
                        type: "1f",
                        value: 0
                    },
                    translationMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    }
                }, {
                    aVertexPosition: 0,
                    aColor: 0
                })
            }
            var n = t("./Shader");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i
        }, {
            "./Shader": 60
        }],
        60: [function(t, e, r) {
            function i(t, e, r, i, o) {
                if (!e || !r) throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");
                this.uuid = n.uuid(), this.gl = t.renderer.gl, this.shaderManager = t, this.program = null, this.uniforms = i || {}, this.attributes = o || {}, this.textureCount = 1, this.vertexSrc = e, this.fragmentSrc = r, this.init()
            }
            var n = t("../../../utils");
            i.prototype.constructor = i, e.exports = i, i.prototype.init = function() {
                this.compile(), this.gl.useProgram(this.program), this.cacheUniformLocations(Object.keys(this.uniforms)), this.cacheAttributeLocations(Object.keys(this.attributes))
            }, i.prototype.cacheUniformLocations = function(t) {
                for (var e = 0; e < t.length; ++e) this.uniforms[t[e]]._location = this.gl.getUniformLocation(this.program, t[e])
            }, i.prototype.cacheAttributeLocations = function(t) {
                for (var e = 0; e < t.length; ++e) this.attributes[t[e]] = this.gl.getAttribLocation(this.program, t[e])
            }, i.prototype.compile = function() {
                var t = this.gl,
                    e = this._glCompile(t.VERTEX_SHADER, this.vertexSrc),
                    r = this._glCompile(t.FRAGMENT_SHADER, this.fragmentSrc),
                    i = t.createProgram();
                return t.attachShader(i, e), t.attachShader(i, r), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(i, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(i) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(i)), t.deleteProgram(i), i = null), t.deleteShader(e), t.deleteShader(r), this.program = i
            }, i.prototype.syncUniform = function(t) {
                var e, r, i = t._location,
                    o = t.value,
                    s = this.gl;
                switch (t.type) {
                    case "i":
                    case "1i":
                        s.uniform1i(i, o);
                        break;
                    case "f":
                    case "1f":
                        s.uniform1f(i, o);
                        break;
                    case "2f":
                        s.uniform2f(i, o[0], o[1]);
                        break;
                    case "3f":
                        s.uniform3f(i, o[0], o[1], o[2]);
                        break;
                    case "4f":
                        s.uniform4f(i, o[0], o[1], o[2], o[3]);
                        break;
                    case "v2":
                        s.uniform2f(i, o.x, o.y);
                        break;
                    case "v3":
                        s.uniform3f(i, o.x, o.y, o.z);
                        break;
                    case "v4":
                        s.uniform4f(i, o.x, o.y, o.z, o.w);
                        break;
                    case "1iv":
                        s.uniform1iv(i, o);
                        break;
                    case "2iv":
                        s.uniform2iv(i, o);
                        break;
                    case "3iv":
                        s.uniform3iv(i, o);
                        break;
                    case "4iv":
                        s.uniform4iv(i, o);
                        break;
                    case "1fv":
                        s.uniform1fv(i, o);
                        break;
                    case "2fv":
                        s.uniform2fv(i, o);
                        break;
                    case "3fv":
                        s.uniform3fv(i, o);
                        break;
                    case "4fv":
                        s.uniform4fv(i, o);
                        break;
                    case "m2":
                    case "mat2":
                    case "Matrix2fv":
                        s.uniformMatrix2fv(i, t.transpose, o);
                        break;
                    case "m3":
                    case "mat3":
                    case "Matrix3fv":
                        s.uniformMatrix3fv(i, t.transpose, o);
                        break;
                    case "m4":
                    case "mat4":
                    case "Matrix4fv":
                        s.uniformMatrix4fv(i, t.transpose, o);
                        break;
                    case "c":
                        "number" == typeof o && (o = n.hex2rgb(o)), s.uniform3f(i, o[0], o[1], o[2]);
                        break;
                    case "iv1":
                        s.uniform1iv(i, o);
                        break;
                    case "iv":
                        s.uniform3iv(i, o);
                        break;
                    case "fv1":
                        s.uniform1fv(i, o);
                        break;
                    case "fv":
                        s.uniform3fv(i, o);
                        break;
                    case "v2v":
                        for (t._array || (t._array = new Float32Array(2 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[2 * e] = o[e].x, t._array[2 * e + 1] = o[e].y;
                        s.uniform2fv(i, t._array);
                        break;
                    case "v3v":
                        for (t._array || (t._array = new Float32Array(3 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[3 * e] = o[e].x, t._array[3 * e + 1] = o[e].y, t._array[3 * e + 2] = o[e].z;
                        s.uniform3fv(i, t._array);
                        break;
                    case "v4v":
                        for (t._array || (t._array = new Float32Array(4 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[4 * e] = o[e].x, t._array[4 * e + 1] = o[e].y, t._array[4 * e + 2] = o[e].z, t._array[4 * e + 3] = o[e].w;
                        s.uniform4fv(i, t._array);
                        break;
                    case "t":
                    case "sampler2D":
                        if (!t.value || !t.value.baseTexture.hasLoaded) break;
                        s.activeTexture(s["TEXTURE" + this.textureCount]);
                        var a = t.value.baseTexture._glTextures[s.id];
                        a || (this.initSampler2D(t), a = t.value.baseTexture._glTextures[s.id]), s.bindTexture(s.TEXTURE_2D, a), s.uniform1i(t._location, this.textureCount), this.textureCount++;
                        break;
                    default:
                        console.warn("Pixi.js Shader Warning: Unknown uniform type: " + t.type)
                }
            }, i.prototype.syncUniforms = function() {
                this.textureCount = 1;
                for (var t in this.uniforms) this.syncUniform(this.uniforms[t]);
            }, i.prototype.initSampler2D = function(t) {
                var e = this.gl,
                    r = t.value.baseTexture;
                if (r.hasLoaded)
                    if (t.textureData) {
                        var i = t.textureData;
                        r._glTextures[e.id] = e.createTexture(), e.bindTexture(e.TEXTURE_2D, r._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, i.luminance ? e.LUMINANCE : e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, i.magFilter ? i.magFilter : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE)
                    } else this.shaderManager.renderer.updateTexture(r)
            }, i.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.gl = null, this.uniforms = null, this.attributes = null, this.vertexSrc = null, this.fragmentSrc = null
            }, i.prototype._glCompile = function(t, e) {
                var r = this.gl.createShader(t);
                return this.gl.shaderSource(r, e), this.gl.compileShader(r), this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (console.log(this.gl.getShaderInfoLog(r)), null)
            }
        }, {
            "../../../utils": 76
        }],
        61: [function(t, e, r) {
            function i(t, e, r, o, s) {
                var a = {
                    uSampler: {
                        type: "sampler2D",
                        value: 0
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
                    }
                };
                if (o)
                    for (var l in o) a[l] = o[l];
                var h = {
                    aVertexPosition: 0,
                    aTextureCoord: 0,
                    aColor: 0
                };
                if (s)
                    for (var u in s) h[u] = s[u];
                e = e || i.defaultVertexSrc, r = r || i.defaultFragmentSrc, n.call(this, t, e, r, a, h)
            }
            var n = t("./Shader");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.defaultVertexSrc = ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), i.defaultFragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"].join("\n")
        }, {
            "./Shader": 60
        }],
        62: [function(t, e, r) {
            function i(t) {
                n.call(this, t)
            }
            var n = t("../managers/WebGLManager");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.start = function() {}, i.prototype.stop = function() {
                this.flush()
            }, i.prototype.flush = function() {}, i.prototype.render = function(t) {}
        }, {
            "../managers/WebGLManager": 57
        }],
        63: [function(t, e, r) {
            function i(t) {
                this.gl = t, this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]), this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, 128, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.upload()
            }
            i.prototype.constructor = i, i.prototype.map = function(t, e) {
                var r = 0,
                    i = 0;
                this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.upload()
            }, i.prototype.upload = function() {
                var t = this.gl;
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices), t.bufferSubData(t.ARRAY_BUFFER, 32, this.uvs), t.bufferSubData(t.ARRAY_BUFFER, 64, this.colors)
            }, e.exports = i
        }, {}],
        64: [function(t, e, r) {
            var i = t("../../../math"),
                n = t("../../../utils"),
                o = t("../../../const"),
                s = t("./StencilMaskStack"),
                a = function(t, e, r, a, l, h) {
                    if (this.gl = t, this.frameBuffer = null, this.texture = null, this.size = new i.Rectangle(0, 0, 1, 1), this.resolution = l || o.RESOLUTION, this.projectionMatrix = new i.Matrix, this.transform = null, this.frame = null, this.stencilBuffer = null, this.stencilMaskStack = new s, this.filterStack = [{
                            renderTarget: this,
                            filter: [],
                            bounds: this.size
                        }], this.scaleMode = a || o.SCALE_MODES.DEFAULT, this.root = h, !this.root) {
                        this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a === o.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST);
                        var u = n.isPowerOfTwo(e, r);
                        u ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0)
                    }
                    this.resize(e, r)
                };
            a.prototype.constructor = a, e.exports = a, a.prototype.clear = function(t) {
                var e = this.gl;
                t && e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
            }, a.prototype.attachStencilBuffer = function() {
                if (!this.stencilBuffer && !this.root) {
                    var t = this.gl;
                    this.stencilBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencilBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution)
                }
            }, a.prototype.activate = function() {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
                var e = this.frame || this.size;
                this.calculateProjection(e), this.transform && this.projectionMatrix.append(this.transform), t.viewport(0, 0, e.width * this.resolution, e.height * this.resolution)
            }, a.prototype.calculateProjection = function(t) {
                var e = this.projectionMatrix;
                e.identity(), this.root ? (e.a = 1 / t.width * 2, e.d = -1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = 1 - t.y * e.d) : (e.a = 1 / t.width * 2, e.d = 1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = -1 - t.y * e.d)
            }, a.prototype.resize = function(t, e) {
                if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
                    if (this.size.width = t, this.size.height = e, !this.root) {
                        var r = this.gl;
                        r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t * this.resolution, e * this.resolution, 0, r.RGBA, r.UNSIGNED_BYTE, null), this.stencilBuffer && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencilBuffer), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t * this.resolution, e * this.resolution))
                    }
                    var i = this.frame || this.size;
                    this.calculateProjection(i)
                }
            }, a.prototype.destroy = function() {
                var t = this.gl;
                t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
            }
        }, {
            "../../../const": 22,
            "../../../math": 32,
            "../../../utils": 76,
            "./StencilMaskStack": 65
        }],
        65: [function(t, e, r) {
            function i() {
                this.stencilStack = [], this.reverse = !0, this.count = 0
            }
            i.prototype.constructor = i, e.exports = i
        }, {}],
        66: [function(t, e, r) {
            function i(t) {
                s.call(this), this.anchor = new n.Point, this._texture = null, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = h.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || o.EMPTY
            }
            var n = t("../math"),
                o = t("../textures/Texture"),
                s = t("../display/Container"),
                a = t("../renderers/canvas/utils/CanvasTinter"),
                l = t("../utils"),
                h = t("../const"),
                u = new n.Point;
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                width: {
                    get: function() {
                        return this.scale.x * this.texture._frame.width
                    },
                    set: function(t) {
                        this.scale.x = t / this.texture._frame.width, this._width = t
                    }
                },
                height: {
                    get: function() {
                        return this.scale.y * this.texture._frame.height
                    },
                    set: function(t) {
                        this.scale.y = t / this.texture._frame.height, this._height = t
                    }
                },
                texture: {
                    get: function() {
                        return this._texture
                    },
                    set: function(t) {
                        this._texture !== t && (this._texture = t, this.cachedTint = 16777215, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }
            }), i.prototype._onTextureUpdate = function() {
                this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
            }, i.prototype._renderWebGL = function(t) {
                t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this)
            }, i.prototype.getBounds = function(t) {
                if (!this._currentBounds) {
                    var e, r, i, n, o = this._texture._frame.width,
                        s = this._texture._frame.height,
                        a = o * (1 - this.anchor.x),
                        l = o * -this.anchor.x,
                        h = s * (1 - this.anchor.y),
                        u = s * -this.anchor.y,
                        c = t || this.worldTransform,
                        d = c.a,
                        p = c.b,
                        f = c.c,
                        v = c.d,
                        g = c.tx,
                        m = c.ty;
                    if (0 === p && 0 === f) 0 > d && (d *= -1), 0 > v && (v *= -1), e = d * l + g, r = d * a + g, i = v * u + m, n = v * h + m;
                    else {
                        var y = d * l + f * u + g,
                            x = v * u + p * l + m,
                            b = d * a + f * u + g,
                            _ = v * u + p * a + m,
                            T = d * a + f * h + g,
                            E = v * h + p * a + m,
                            w = d * l + f * h + g,
                            S = v * h + p * l + m;
                        e = y, e = e > b ? b : e, e = e > T ? T : e, e = e > w ? w : e, i = x, i = i > _ ? _ : i, i = i > E ? E : i, i = i > S ? S : i, r = y, r = b > r ? b : r, r = T > r ? T : r, r = w > r ? w : r, n = x, n = _ > n ? _ : n, n = E > n ? E : n, n = S > n ? S : n
                    }
                    if (this.children.length) {
                        var C = this.containerGetBounds();
                        a = C.x, l = C.x + C.width, h = C.y, u = C.y + C.height, e = a > e ? e : a, i = h > i ? i : h, r = r > l ? r : l, n = n > u ? n : u
                    }
                    var M = this._bounds;
                    M.x = e, M.width = r - e, M.y = i, M.height = n - i, this._currentBounds = M
                }
                return this._currentBounds
            }, i.prototype.getLocalBounds = function() {
                return this._bounds.x = -this._texture._frame.width * this.anchor.x, this._bounds.y = -this._texture._frame.height * this.anchor.y, this._bounds.width = this._texture._frame.width, this._bounds.height = this._texture._frame.height, this._bounds
            }, i.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, u);
                var e, r = this._texture._frame.width,
                    i = this._texture._frame.height,
                    n = -r * this.anchor.x;
                return u.x > n && u.x < n + r && (e = -i * this.anchor.y, u.y > e && u.y < e + i) ? !0 : !1
            }, i.prototype._renderCanvas = function(t) {
                if (!(this.texture.crop.width <= 0 || this.texture.crop.height <= 0) && (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = t.blendModes[t.currentBlendMode]), this.texture.valid)) {
                    var e, r, i, n, o = this._texture,
                        s = this.worldTransform;
                    if (t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.currentScaleMode !== o.baseTexture.scaleMode && (t.currentScaleMode = o.baseTexture.scaleMode, t.context[t.smoothProperty] = t.currentScaleMode === h.SCALE_MODES.LINEAR), o.rotate) {
                        var l = s.a,
                            u = s.b;
                        s.a = -s.c, s.b = -s.d, s.c = l, s.d = u, i = o.crop.height, n = o.crop.width, e = o.trim ? o.trim.y - this.anchor.y * o.trim.height : this.anchor.y * -o._frame.height, r = o.trim ? o.trim.x - this.anchor.x * o.trim.width : this.anchor.x * -o._frame.width
                    } else i = o.crop.width, n = o.crop.height, e = o.trim ? o.trim.x - this.anchor.x * o.trim.width : this.anchor.x * -o._frame.width, r = o.trim ? o.trim.y - this.anchor.y * o.trim.height : this.anchor.y * -o._frame.height;
                    t.roundPixels ? (t.context.setTransform(s.a, s.b, s.c, s.d, s.tx * t.resolution | 0, s.ty * t.resolution | 0), e = 0 | e, r = 0 | r) : t.context.setTransform(s.a, s.b, s.c, s.d, s.tx * t.resolution, s.ty * t.resolution);
                    var c = o.baseTexture.resolution;
                    16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, i * c, n * c, e * t.resolution, r * t.resolution, i * t.resolution, n * t.resolution)) : t.context.drawImage(o.baseTexture.source, o.crop.x * c, o.crop.y * c, i * c, n * c, e * t.resolution, r * t.resolution, i * t.resolution, n * t.resolution)
                }
            }, i.prototype.destroy = function(t, e) {
                s.prototype.destroy.call(this), this.anchor = null, t && this._texture.destroy(e), this._texture = null, this.shader = null
            }, i.fromFrame = function(t) {
                var e = l.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return new i(e)
            }, i.fromImage = function(t, e, r) {
                return new i(o.fromImage(t, e, r))
            }
        }, {
            "../const": 22,
            "../display/Container": 23,
            "../math": 32,
            "../renderers/canvas/utils/CanvasTinter": 47,
            "../textures/Texture": 71,
            "../utils": 76
        }],
        67: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = s.SPRITE_BATCH_SIZE;
                var e = 4 * this.size * this.vertByteSize,
                    r = 6 * this.size;
                this.vertices = new ArrayBuffer(e), this.positions = new Float32Array(this.vertices), this.colors = new Uint32Array(this.vertices), this.indices = new Uint16Array(r), this.lastIndexCount = 0;
                for (var i = 0, o = 0; r > i; i += 6, o += 4) this.indices[i + 0] = o + 0, this.indices[i + 1] = o + 1, this.indices[i + 2] = o + 2, this.indices[i + 3] = o + 0, this.indices[i + 4] = o + 2, this.indices[i + 5] = o + 3;
                this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.textures = [], this.blendModes = [], this.shaders = [], this.sprites = [], this.shader = null
            }
            var n = t("../../renderers/webgl/utils/ObjectRenderer"),
                o = t("../../renderers/webgl/WebGLRenderer"),
                s = t("../../const");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, o.registerPlugin("sprite", i), i.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.shader = this.renderer.shaderManager.defaultShader, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999
            }, i.prototype.render = function(t) {
                var e = t._texture;
                this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = e.baseTexture);
                var r = e._uvs;
                if (r) {
                    var i, n, o, s, a = t.anchor.x,
                        l = t.anchor.y;
                    if (e.trim) {
                        var h = e.trim;
                        n = h.x - a * h.width, i = n + e.crop.width, s = h.y - l * h.height, o = s + e.crop.height
                    } else i = e._frame.width * (1 - a), n = e._frame.width * -a, o = e._frame.height * (1 - l), s = e._frame.height * -l;
                    var u = this.currentBatchSize * this.vertByteSize,
                        c = t.worldTransform,
                        d = c.a,
                        p = c.b,
                        f = c.c,
                        v = c.d,
                        g = c.tx,
                        m = c.ty,
                        y = this.colors,
                        x = this.positions;
                    this.renderer.roundPixels ? (x[u] = d * n + f * s + g | 0, x[u + 1] = v * s + p * n + m | 0, x[u + 5] = d * i + f * s + g | 0, x[u + 6] = v * s + p * i + m | 0, x[u + 10] = d * i + f * o + g | 0, x[u + 11] = v * o + p * i + m | 0, x[u + 15] = d * n + f * o + g | 0, x[u + 16] = v * o + p * n + m | 0) : (x[u] = d * n + f * s + g, x[u + 1] = v * s + p * n + m, x[u + 5] = d * i + f * s + g, x[u + 6] = v * s + p * i + m, x[u + 10] = d * i + f * o + g, x[u + 11] = v * o + p * i + m, x[u + 15] = d * n + f * o + g, x[u + 16] = v * o + p * n + m), x[u + 2] = r.x0, x[u + 3] = r.y0, x[u + 7] = r.x1, x[u + 8] = r.y1, x[u + 12] = r.x2, x[u + 13] = r.y2, x[u + 17] = r.x3, x[u + 18] = r.y3;
                    var b = t.tint;
                    y[u + 4] = y[u + 9] = y[u + 14] = y[u + 19] = (b >> 16) + (65280 & b) + ((255 & b) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t
                }
            }, i.prototype.flush = function() {
                if (0 !== this.currentBatchSize) {
                    var t, e = this.renderer.gl;
                    if (this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var r = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
                        e.bufferSubData(e.ARRAY_BUFFER, 0, r)
                    }
                    for (var i, n, o, s, a = 0, l = 0, h = null, u = this.renderer.blendModeManager.currentBlendMode, c = null, d = !1, p = !1, f = 0, v = this.currentBatchSize; v > f; f++) s = this.sprites[f], i = s._texture.baseTexture, n = s.blendMode, o = s.shader || this.shader, d = u !== n, p = c !== o, (h !== i || d || p) && (this.renderBatch(h, a, l), l = f, a = 0, h = i, d && (u = n, this.renderer.blendModeManager.setBlendMode(u)), p && (c = o, t = c.shaders ? c.shaders[e.id] : c, t || (t = c.getShader(this.renderer)), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), e.activeTexture(e.TEXTURE0))), a++;
                    this.renderBatch(h, a, l), this.currentBatchSize = 0
                }
            }, i.prototype.renderBatch = function(t, e, r) {
                if (0 !== e) {
                    var i = this.renderer.gl;
                    t._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id]) : this.renderer.updateTexture(t), i.drawElements(i.TRIANGLES, 6 * e, i.UNSIGNED_SHORT, 6 * r * 2), this.renderer.drawCount++
                }
            }, i.prototype.start = function() {
                var t = this.renderer.gl;
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var e = this.vertByteSize;
                t.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, t.FLOAT, !1, e, 0), t.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, t.FLOAT, !1, e, 8), t.vertexAttribPointer(this.shader.attributes.aColor, 4, t.UNSIGNED_BYTE, !0, e, 16)
            }, i.prototype.destroy = function() {
                this.renderer.gl.deleteBuffer(this.vertexBuffer), this.renderer.gl.deleteBuffer(this.indexBuffer), this.shader.destroy(), this.renderer = null, this.vertices = null, this.positions = null, this.colors = null, this.indices = null, this.vertexBuffer = null, this.indexBuffer = null, this.currentBaseTexture = null, this.drawing = !1, this.textures = null, this.blendModes = null, this.shaders = null, this.sprites = null, this.shader = null
            }
        }, {
            "../../const": 22,
            "../../renderers/webgl/WebGLRenderer": 48,
            "../../renderers/webgl/utils/ObjectRenderer": 62
        }],
        68: [function(t, e, r) {
            function i(t, e, r) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || l.RESOLUTION, this._text = null, this._style = null;
                var i = o.fromCanvas(this.canvas);
                i.trim = new s.Rectangle, n.call(this, i), this.text = t, this.style = e
            }
            var n = t("../sprites/Sprite"),
                o = t("../textures/Texture"),
                s = t("../math"),
                a = t("../utils"),
                l = t("../const");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.fontPropertiesCache = {}, i.fontPropertiesCanvas = document.createElement("canvas"), i.fontPropertiesContext = i.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(i.prototype, {
                width: {
                    get: function() {
                        return this.dirty && this.updateText(), this.scale.x * this._texture._frame.width
                    },
                    set: function(t) {
                        this.scale.x = t / this._texture._frame.width, this._width = t
                    }
                },
                height: {
                    get: function() {
                        return this.dirty && this.updateText(), this.scale.y * this._texture._frame.height
                    },
                    set: function(t) {
                        this.scale.y = t / this._texture._frame.height, this._height = t
                    }
                },
                style: {
                    get: function() {
                        return this._style
                    },
                    set: function(t) {
                        t = t || {}, "number" == typeof t.fill && (t.fill = a.hex2string(t.fill)), "number" == typeof t.stroke && (t.stroke = a.hex2string(t.stroke)), "number" == typeof t.dropShadowColor && (t.dropShadowColor = a.hex2string(t.dropShadowColor)), t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowColor = t.dropShadowColor || "#000000", t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 5, t.padding = t.padding || 0, t.textBaseline = t.textBaseline || "alphabetic", t.lineJoin = t.lineJoin || "miter", t.miterLimit = t.miterLimit || 10, this._style = t, this.dirty = !0
                    }
                },
                text: {
                    get: function() {
                        return this._text
                    },
                    set: function(t) {
                        t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }
            }), i.prototype.updateText = function() {
                var t = this._style;
                this.context.font = t.font;
                for (var e = t.wordWrap ? this.wordWrap(this._text) : this._text, r = e.split(/(?:\r\n|\r|\n)/), i = new Array(r.length), n = 0, o = this.determineFontProperties(t.font), s = 0; s < r.length; s++) {
                    var a = this.context.measureText(r[s]).width;
                    i[s] = a, n = Math.max(n, a)
                }
                var l = n + t.strokeThickness;
                t.dropShadow && (l += t.dropShadowDistance), this.canvas.width = (l + this.context.lineWidth) * this.resolution;
                var h = this.style.lineHeight || o.fontSize + t.strokeThickness,
                    u = h * r.length;
                t.dropShadow && (u += t.dropShadowDistance), this.canvas.height = (u + 2 * this._style.padding) * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = t.font, this.context.strokeStyle = t.stroke, this.context.lineWidth = t.strokeThickness, this.context.textBaseline = t.textBaseline, this.context.lineJoin = t.lineJoin, this.context.miterLimit = t.miterLimit;
                var c, d;
                if (t.dropShadow) {
                    this.context.fillStyle = t.dropShadowColor;
                    var p = Math.cos(t.dropShadowAngle) * t.dropShadowDistance,
                        f = Math.sin(t.dropShadowAngle) * t.dropShadowDistance;
                    for (s = 0; s < r.length; s++) c = t.strokeThickness / 2, d = t.strokeThickness / 2 + s * h + o.ascent, "right" === t.align ? c += n - i[s] : "center" === t.align && (c += (n - i[s]) / 2), t.fill && this.context.fillText(r[s], c + p, d + f + this._style.padding)
                }
                for (this.context.fillStyle = t.fill, s = 0; s < r.length; s++) c = t.strokeThickness / 2, d = t.strokeThickness / 2 + s * h + o.ascent, "right" === t.align ? c += n - i[s] : "center" === t.align && (c += (n - i[s]) / 2), t.stroke && t.strokeThickness && this.context.strokeText(r[s], c, d + this._style.padding), t.fill && this.context.fillText(r[s], c, d + this._style.padding);
                this.updateTexture()
            }, i.prototype.updateTexture = function() {
                var t = this._texture;
                t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.crop.width = t._frame.width = this.canvas.width / this.resolution, t.crop.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = 0, t.trim.y = -this._style.padding, t.trim.width = t._frame.width, t.trim.height = t._frame.height - 2 * this._style.padding, this._width = this.canvas.width / this.resolution, this._height = this.canvas.height / this.resolution, t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
            }, i.prototype.renderWebGL = function(t) {
                this.dirty && this.updateText(), n.prototype.renderWebGL.call(this, t)
            }, i.prototype._renderCanvas = function(t) {
                this.dirty && this.updateText(), n.prototype._renderCanvas.call(this, t)
            }, i.prototype.determineFontProperties = function(t) {
                var e = i.fontPropertiesCache[t];
                if (!e) {
                    e = {};
                    var r = i.fontPropertiesCanvas,
                        n = i.fontPropertiesContext;
                    n.font = t;
                    var o = Math.ceil(n.measureText("|MÉq").width),
                        s = Math.ceil(n.measureText("M").width),
                        a = 2 * s;
                    s = 1.4 * s | 0, r.width = o, r.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, o, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÉq", 0, s);
                    var l, h, u = n.getImageData(0, 0, o, a).data,
                        c = u.length,
                        d = 4 * o,
                        p = 0,
                        f = !1;
                    for (l = 0; s > l; l++) {
                        for (h = 0; d > h; h += 4)
                            if (255 !== u[p + h]) {
                                f = !0;
                                break
                            }
                        if (f) break;
                        p += d
                    }
                    for (e.ascent = s - l, p = c - d, f = !1, l = a; l > s; l--) {
                        for (h = 0; d > h; h += 4)
                            if (255 !== u[p + h]) {
                                f = !0;
                                break
                            }
                        if (f) break;
                        p -= d
                    }
                    e.descent = l - s, e.fontSize = e.ascent + e.descent, i.fontPropertiesCache[t] = e
                }
                return e
            }, i.prototype.wordWrap = function(t) {
                for (var e = "", r = t.split("\n"), i = this._style.wordWrapWidth, n = 0; n < r.length; n++) {
                    for (var o = i, s = r[n].split(" "), a = 0; a < s.length; a++) {
                        var l = this.context.measureText(s[a]).width,
                            h = l + this.context.measureText(" ").width;
                        0 === a || h > o ? (a > 0 && (e += "\n"), e += s[a], o = i - l) : (o -= h, e += " " + s[a])
                    }
                    n < r.length - 1 && (e += "\n")
                }
                return e
            }, i.prototype.getBounds = function(t) {
                return this.dirty && this.updateText(), n.prototype.getBounds.call(this, t)
            }, i.prototype.destroy = function(t) {
                this.context = null, this.canvas = null, this._style = null, this._texture.destroy(void 0 === t ? !0 : t)
            }
        }, {
            "../const": 22,
            "../math": 32,
            "../sprites/Sprite": 66,
            "../textures/Texture": 71,
            "../utils": 76
        }],
        69: [function(t, e, r) {
            function i(t, e, r) {
                s.call(this), this.uuid = n.uuid(), this.resolution = r || 1, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || o.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = !1, this._glTextures = [], t && this.loadSource(t)
            }
            var n = t("../utils"),
                o = t("../const"),
                s = t("eventemitter3");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.update = function() {
                this.realWidth = this.source.naturalWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = n.isPowerOfTwo(this.realWidth, this.realHeight), this.emit("update", this)
            }, i.prototype.loadSource = function(t) {
                var e = this.isLoading;
                if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
                else if (!t.getContext) {
                    this.isLoading = !0;
                    var r = this;
                    t.onload = function() {
                        t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r._sourceLoaded(), r.emit("loaded", r))
                    }, t.onerror = function() {
                        t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r.emit("error", r))
                    }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
                }
            }, i.prototype._sourceLoaded = function() {
                this.hasLoaded = !0, this.update()
            }, i.prototype.destroy = function() {
                this.imageUrl ? (delete n.BaseTextureCache[this.imageUrl], delete n.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete n.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
            }, i.prototype.dispose = function() {
                this.emit("dispose", this), this._glTextures.length = 0
            }, i.prototype.updateSourceImage = function(t) {
                this.source.src = t, this.loadSource(this.source)
            }, i.fromImage = function(t, e, r) {
                var o = n.BaseTextureCache[t];
                if (void 0 === e && 0 !== t.indexOf("data:") && (e = !0), !o) {
                    var s = new Image;
                    e && (s.crossOrigin = ""), o = new i(s, r), o.imageUrl = t, s.src = t, n.BaseTextureCache[t] = o, o.resolution = n.getResolutionOfUrl(t)
                }
                return o
            }, i.fromCanvas = function(t, e) {
                t._pixiId || (t._pixiId = "canvas_" + n.uuid());
                var r = n.BaseTextureCache[t._pixiId];
                return r || (r = new i(t, e), n.BaseTextureCache[t._pixiId] = r), r
            }
        }, {
            "../const": 22,
            "../utils": 76,
            eventemitter3: 11
        }],
        70: [function(t, e, r) {
            function i(t, e, r, i, c) {
                if (!t) throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");
                e = e || 100, r = r || 100, c = c || u.RESOLUTION;
                var d = new n;
                if (d.width = e, d.height = r, d.resolution = c, d.scaleMode = i || u.SCALE_MODES.DEFAULT, d.hasLoaded = !0, o.call(this, d, new h.Rectangle(0, 0, e, r)), this.width = e, this.height = r, this.resolution = c, this.render = null, this.renderer = t, this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var p = this.renderer.gl;
                    this.textureBuffer = new s(p, this.width, this.height, d.scaleMode, this.resolution), this.baseTexture._glTextures[p.id] = this.textureBuffer.texture, this.filterManager = new a(this.renderer), this.filterManager.onContextChange(), this.filterManager.resize(e, r), this.render = this.renderWebGL, this.renderer.currentRenderer.start(), this.renderer.currentRenderTarget.activate()
                } else this.render = this.renderCanvas, this.textureBuffer = new l(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
                this.valid = !0, this._updateUvs()
            }
            var n = t("./BaseTexture"),
                o = t("./Texture"),
                s = t("../renderers/webgl/utils/RenderTarget"),
                a = t("../renderers/webgl/managers/FilterManager"),
                l = t("../renderers/canvas/utils/CanvasBuffer"),
                h = t("../math"),
                u = t("../const"),
                c = new h.Matrix;
            i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.resize = function(t, e, r) {
                (t !== this.width || e !== this.height) && (this.valid = t > 0 && e > 0, this.width = this._frame.width = this.crop.width = t, this.height = this._frame.height = this.crop.height = e, r && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.valid && (this.textureBuffer.resize(this.width, this.height), this.filterManager && this.filterManager.resize(this.width, this.height)))
            }, i.prototype.clear = function() {
                this.valid && (this.renderer.type === u.RENDERER_TYPE.WEBGL && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
            }, i.prototype.renderWebGL = function(t, e, r, i) {
                if (this.valid) {
                    if (i = void 0 !== i ? i : !0, this.textureBuffer.transform = e, this.textureBuffer.activate(), t.worldAlpha = t.alpha, i) {
                        t.worldTransform.identity(), t.currentBounds = null;
                        var n, o, s = t.children;
                        for (n = 0, o = s.length; o > n; ++n) s[n].updateTransform()
                    }
                    var a = this.renderer.filterManager;
                    this.renderer.filterManager = this.filterManager, this.renderer.renderDisplayObject(t, this.textureBuffer, r), this.renderer.filterManager = a
                }
            }, i.prototype.renderCanvas = function(t, e, r, i) {
                if (this.valid) {
                    i = !!i;
                    var n = t.worldTransform,
                        o = c;
                    o.identity(), e && o.append(e), t.worldTransform = o, t.worldAlpha = 1;
                    var s, a, l = t.children;
                    for (s = 0, a = l.length; a > s; ++s) l[s].updateTransform();
                    r && this.textureBuffer.clear(), t.worldTransform = n;
                    var h = this.textureBuffer.context,
                        u = this.renderer.resolution;
                    this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, h), this.renderer.resolution = u
                }
            }, i.prototype.destroy = function() {
                o.prototype.destroy.call(this, !0), this.textureBuffer.destroy(), this.filterManager && this.filterManager.destroy(), this.renderer = null
            }, i.prototype.getImage = function() {
                var t = new Image;
                return t.src = this.getBase64(), t
            }, i.prototype.getBase64 = function() {
                return this.getCanvas().toDataURL()
            }, i.prototype.getCanvas = function() {
                if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var t = this.renderer.gl,
                        e = this.textureBuffer.size.width,
                        r = this.textureBuffer.size.height,
                        i = new Uint8Array(4 * e * r);
                    t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, e, r, t.RGBA, t.UNSIGNED_BYTE, i), t.bindFramebuffer(t.FRAMEBUFFER, null);
                    var n = new l(e, r),
                        o = n.context.getImageData(0, 0, e, r);
                    return o.data.set(i), n.context.putImageData(o, 0, 0), n.canvas
                }
                return this.textureBuffer.canvas
            }, i.prototype.getPixels = function() {
                var t, e;
                if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var r = this.renderer.gl;
                    t = this.textureBuffer.size.width, e = this.textureBuffer.size.height;
                    var i = new Uint8Array(4 * t * e);
                    return r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer), r.readPixels(0, 0, t, e, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, null), i
                }
                return t = this.textureBuffer.canvas.width, e = this.textureBuffer.canvas.height, this.textureBuffer.canvas.getContext("2d").getImageData(0, 0, t, e).data
            }, i.prototype.getPixel = function(t, e) {
                if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var r = this.renderer.gl,
                        i = new Uint8Array(4);
                    return r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer), r.readPixels(t, e, 1, 1, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, null), i
                }
                return this.textureBuffer.canvas.getContext("2d").getImageData(t, e, 1, 1).data
            }
        }, {
            "../const": 22,
            "../math": 32,
            "../renderers/canvas/utils/CanvasBuffer": 44,
            "../renderers/webgl/managers/FilterManager": 53,
            "../renderers/webgl/utils/RenderTarget": 64,
            "./BaseTexture": 69,
            "./Texture": 71
        }],
        71: [function(t, e, r) {
            function i(t, e, r, n, o) {
                a.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new l.Rectangle(0, 0, 1, 1)), t instanceof i && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = n, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = r || e, this.rotate = !!o, t.hasLoaded ? (this.noFrame && (e = new l.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this)
            }
            var n = t("./BaseTexture"),
                o = t("./VideoBaseTexture"),
                s = t("./TextureUvs"),
                a = t("eventemitter3"),
                l = t("../math"),
                h = t("../utils");
            i.prototype = Object.create(a.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                frame: {
                    get: function() {
                        return this._frame
                    },
                    set: function(t) {
                        if (this._frame = t, this.noFrame = !1, this.width = t.width, this.height = t.height, !this.trim && !this.rotate && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                        this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim ? (this.width = this.trim.width, this.height = this.trim.height, this._frame.width = this.trim.width, this._frame.height = this.trim.height) : this.crop = t, this.valid && this._updateUvs()
                    }
                }
            }), i.prototype.update = function() {
                this.baseTexture.update()
            }, i.prototype.onBaseTextureLoaded = function(t) {
                this.frame = this.noFrame ? new l.Rectangle(0, 0, t.width, t.height) : this._frame, this.emit("update", this)
            }, i.prototype.onBaseTextureUpdated = function(t) {
                this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
            }, i.prototype.destroy = function(t) {
                this.baseTexture && (t && this.baseTexture.destroy(), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.crop = null, this.valid = !1
            }, i.prototype.clone = function() {
                return new i(this.baseTexture, this.frame, this.crop, this.trim, this.rotate)
            }, i.prototype._updateUvs = function() {
                this._uvs || (this._uvs = new s), this._uvs.set(this.crop, this.baseTexture, this.rotate)
            }, i.fromImage = function(t, e, r) {
                var o = h.TextureCache[t];
                return o || (o = new i(n.fromImage(t, e, r)), h.TextureCache[t] = o), o
            }, i.fromFrame = function(t) {
                var e = h.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return e
            }, i.fromCanvas = function(t, e) {
                return new i(n.fromCanvas(t, e))
            }, i.fromVideo = function(t, e) {
                return "string" == typeof t ? i.fromVideoUrl(t, e) : new i(o.fromVideo(t, e));
            }, i.fromVideoUrl = function(t, e) {
                return new i(o.fromUrl(t, e))
            }, i.addTextureToCache = function(t, e) {
                h.TextureCache[e] = t
            }, i.removeTextureFromCache = function(t) {
                var e = h.TextureCache[t];
                return delete h.TextureCache[t], delete h.BaseTextureCache[t], e
            }, i.EMPTY = new i(new n)
        }, {
            "../math": 32,
            "../utils": 76,
            "./BaseTexture": 69,
            "./TextureUvs": 72,
            "./VideoBaseTexture": 73,
            eventemitter3: 11
        }],
        72: [function(t, e, r) {
            function i() {
                this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1
            }
            e.exports = i, i.prototype.set = function(t, e, r) {
                var i = e.width,
                    n = e.height;
                r ? (this.x0 = (t.x + t.height) / i, this.y0 = t.y / n, this.x1 = (t.x + t.height) / i, this.y1 = (t.y + t.width) / n, this.x2 = t.x / i, this.y2 = (t.y + t.width) / n, this.x3 = t.x / i, this.y3 = t.y / n) : (this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n)
            }
        }, {}],
        73: [function(t, e, r) {
            function i(t, e) {
                if (!t) throw new Error("No video source element specified.");
                (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), o.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
            }

            function n(t, e) {
                e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
                var r = document.createElement("source");
                return r.src = t, r.type = e, r
            }
            var o = t("./BaseTexture"),
                s = t("../utils");
            i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e.exports = i, i.prototype._onUpdate = function() {
                this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
            }, i.prototype._onPlayStart = function() {
                this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
            }, i.prototype._onPlayStop = function() {
                this.autoUpdate = !1
            }, i.prototype._onCanPlay = function() {
                this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
            }, i.prototype.destroy = function() {
                this.source && this.source._pixiId && (delete s.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), o.prototype.destroy.call(this)
            }, i.fromVideo = function(t, e) {
                t._pixiId || (t._pixiId = "video_" + s.uuid());
                var r = s.BaseTextureCache[t._pixiId];
                return r || (r = new i(t, e), s.BaseTextureCache[t._pixiId] = r), r
            }, i.fromUrl = function(t, e) {
                var r = document.createElement("video");
                if (Array.isArray(t))
                    for (var o = 0; o < t.length; ++o) r.appendChild(n(t.src || t, t.mime));
                else r.appendChild(n(t.src || t, t.mime));
                return r.load(), r.play(), i.fromVideo(r, e)
            }, i.fromUrls = i.fromUrl
        }, {
            "../utils": 76,
            "./BaseTexture": 69
        }],
        74: [function(t, e, r) {
            function i() {
                var t = this;
                this._tick = function(e) {
                    t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(s, !0) && (t._requestId = requestAnimationFrame(t._tick)))
                }, this._emitter = new o, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / n.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
            }
            var n = t("../const"),
                o = t("eventemitter3"),
                s = "tick";
            Object.defineProperties(i.prototype, {
                FPS: {
                    get: function() {
                        return 1e3 / this.elapsedMS
                    }
                },
                minFPS: {
                    get: function() {
                        return 1e3 / this._maxElapsedMS
                    },
                    set: function(t) {
                        var e = Math.min(Math.max(0, t) / 1e3, n.TARGET_FPMS);
                        this._maxElapsedMS = 1 / e
                    }
                }
            }), i.prototype._requestIfNeeded = function() {
                null === this._requestId && this._emitter.listeners(s, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
            }, i.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
            }, i.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            }, i.prototype.add = function(t, e) {
                return this._emitter.on(s, t, e), this._startIfPossible(), this
            }, i.prototype.addOnce = function(t, e) {
                return this._emitter.once(s, t, e), this._startIfPossible(), this
            }, i.prototype.remove = function(t, e) {
                return this._emitter.off(s, t, e), this._emitter.listeners(s, !0) || this._cancelIfNeeded(), this
            }, i.prototype.start = function() {
                this.started || (this.started = !0, this._requestIfNeeded())
            }, i.prototype.stop = function() {
                this.started && (this.started = !1, this._cancelIfNeeded())
            }, i.prototype.update = function(t) {
                var e;
                t = t || performance.now(), e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * n.TARGET_FPMS * this.speed, this._emitter.emit(s, this.deltaTime), this.lastTime = t
            }, e.exports = i
        }, {
            "../const": 22,
            eventemitter3: 11
        }],
        75: [function(t, e, r) {
            var i = t("./Ticker"),
                n = new i;
            n.autoStart = !0, e.exports = {
                shared: n,
                Ticker: i
            }
        }, {
            "./Ticker": 74
        }],
        76: [function(t, e, r) {
            var i = t("../const"),
                n = e.exports = {
                    _uid: 0,
                    _saidHello: !1,
                    pluginTarget: t("./pluginTarget"),
                    async: t("async"),
                    uuid: function() {
                        return ++n._uid
                    },
                    hex2rgb: function(t, e) {
                        return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
                    },
                    hex2string: function(t) {
                        return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
                    },
                    rgb2hex: function(t) {
                        return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
                    },
                    canUseNewCanvasBlendModes: function() {
                        if ("undefined" == typeof document) return !1;
                        var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",
                            e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
                            r = new Image;
                        r.src = t + "AP804Oa6" + e;
                        var i = new Image;
                        i.src = t + "/wCKxvRF" + e;
                        var n = document.createElement("canvas");
                        n.width = 6, n.height = 1;
                        var o = n.getContext("2d");
                        o.globalCompositeOperation = "multiply", o.drawImage(r, 0, 0), o.drawImage(i, 2, 0);
                        var s = o.getImageData(2, 0, 1, 1).data;
                        return 255 === s[0] && 0 === s[1] && 0 === s[2]
                    },
                    getNextPowerOfTwo: function(t) {
                        if (t > 0 && 0 === (t & t - 1)) return t;
                        for (var e = 1; t > e;) e <<= 1;
                        return e
                    },
                    isPowerOfTwo: function(t, e) {
                        return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
                    },
                    getResolutionOfUrl: function(t) {
                        var e = i.RETINA_PREFIX.exec(t);
                        return e ? parseFloat(e[1]) : 1
                    },
                    sayHello: function(t) {
                        if (!n._saidHello) {
                            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                var e = ["\n %c %c %c Pixi.js " + i.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                                window.console.log.apply(console, e)
                            } else window.console && window.console.log("Pixi.js " + i.VERSION + " - " + t + " - http://www.pixijs.com/");
                            n._saidHello = !0
                        }
                    },
                    isWebGLSupported: function() {
                        var t = {
                            stencil: !0
                        };
                        try {
                            if (!window.WebGLRenderingContext) return !1;
                            var e = document.createElement("canvas"),
                                r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                            return !(!r || !r.getContextAttributes().stencil)
                        } catch (i) {
                            return !1
                        }
                    },
                    TextureCache: {},
                    BaseTextureCache: {}
                }
        }, {
            "../const": 22,
            "./pluginTarget": 77,
            async: 2
        }],
        77: [function(t, e, r) {
            function i(t) {
                t.__plugins = {}, t.registerPlugin = function(e, r) {
                    t.__plugins[e] = r
                }, t.prototype.initPlugins = function() {
                    this.plugins = this.plugins || {};
                    for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
                }, t.prototype.destroyPlugins = function() {
                    for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                    this.plugins = null
                }
            }
            e.exports = {
                mixin: function(t) {
                    i(t)
                }
            }
        }, {}],
        78: [function(t, e, r) {
            var i = t("./core"),
                n = t("./mesh"),
                o = t("./extras"),
                s = t("./core/utils");
            i.SpriteBatch = function() {
                throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
            }, i.AssetLoader = function() {
                throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
            }, Object.defineProperties(i, {
                Stage: {
                    get: function() {
                        return console.warn("You do not need to use a PIXI Stage any more, you can simply render any container."), i.Container
                    }
                },
                DisplayObjectContainer: {
                    get: function() {
                        return console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."), i.Container
                    }
                },
                Strip: {
                    get: function() {
                        return console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), n.Mesh
                    }
                },
                Rope: {
                    get: function() {
                        return console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), n.Rope
                    }
                },
                MovieClip: {
                    get: function() {
                        return console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), o.MovieClip
                    }
                },
                TilingSprite: {
                    get: function() {
                        return console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), o.TilingSprite
                    }
                },
                BitmapText: {
                    get: function() {
                        return console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), o.BitmapText
                    }
                },
                blendModes: {
                    get: function() {
                        return console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), i.BLEND_MODES
                    }
                },
                scaleModes: {
                    get: function() {
                        return console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), i.SCALE_MODES
                    }
                },
                BaseTextureCache: {
                    get: function() {
                        return console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), s.BaseTextureCache
                    }
                },
                TextureCache: {
                    get: function() {
                        return console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), s.TextureCache
                    }
                }
            }), i.Sprite.prototype.setTexture = function(t) {
                this.texture = t, console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
            }, o.BitmapText.prototype.setText = function(t) {
                this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
            }, i.Text.prototype.setText = function(t) {
                this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
            }, i.Text.prototype.setStyle = function(t) {
                this.style = t, console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
            }, i.Texture.prototype.setFrame = function(t) {
                this.frame = t, console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
            }
        }, {
            "./core": 29,
            "./core/utils": 76,
            "./extras": 85,
            "./mesh": 126
        }],
        79: [function(t, e, r) {
            function i(t, e) {
                n.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
                    tint: void 0 !== e.tint ? e.tint : 16777215,
                    align: e.align || "left",
                    name: null,
                    size: 0
                }, this.font = e.font, this._text = t, this.maxWidth = 0, this.dirty = !1, this.updateText()
            }
            var n = t("../core");
            i.prototype = Object.create(n.Container.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                tint: {
                    get: function() {
                        return this._font.tint
                    },
                    set: function(t) {
                        this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                    }
                },
                align: {
                    get: function() {
                        return this._font.align
                    },
                    set: function(t) {
                        this._font.align = t || "left", this.dirty = !0
                    }
                },
                font: {
                    get: function() {
                        return this._font
                    },
                    set: function(t) {
                        t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : i.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                    }
                },
                text: {
                    get: function() {
                        return this._text
                    },
                    set: function(t) {
                        t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }
            }), i.prototype.updateText = function() {
                for (var t = i.fonts[this._font.name], e = new n.math.Point, r = null, o = [], s = 0, a = 0, l = [], h = 0, u = this._font.size / t.size, c = -1, d = 0; d < this.text.length; d++) {
                    var p = this.text.charCodeAt(d);
                    if (c = /(\s)/.test(this.text.charAt(d)) ? d : c, /(?:\r\n|\r|\n)/.test(this.text.charAt(d))) l.push(s), a = Math.max(a, s), h++, e.x = 0, e.y += t.lineHeight, r = null;
                    else if (-1 !== c && this.maxWidth > 0 && e.x * u > this.maxWidth) o.splice(c, d - c), d = c, c = -1, l.push(s), a = Math.max(a, s), h++, e.x = 0, e.y += t.lineHeight, r = null;
                    else {
                        var f = t.chars[p];
                        f && (r && f.kerning[r] && (e.x += f.kerning[r]), o.push({
                            texture: f.texture,
                            line: h,
                            charCode: p,
                            position: new n.math.Point(e.x + f.xOffset, e.y + f.yOffset)
                        }), s = e.x + (f.texture.width + f.xOffset), e.x += f.xAdvance, r = p)
                    }
                }
                l.push(s), a = Math.max(a, s);
                var v = [];
                for (d = 0; h >= d; d++) {
                    var g = 0;
                    "right" === this._font.align ? g = a - l[d] : "center" === this._font.align && (g = (a - l[d]) / 2), v.push(g)
                }
                var m = o.length,
                    y = this.tint;
                for (d = 0; m > d; d++) {
                    var x = this._glyphs[d];
                    x ? x.texture = o[d].texture : (x = new n.Sprite(o[d].texture), this._glyphs.push(x)), x.position.x = (o[d].position.x + v[o[d].line]) * u, x.position.y = o[d].position.y * u, x.scale.x = x.scale.y = u, x.tint = y, x.parent || this.addChild(x)
                }
                for (d = m; d < this._glyphs.length; ++d) this.removeChild(this._glyphs[d]);
                this.textWidth = a * u, this.textHeight = (e.y + t.lineHeight) * u
            }, i.prototype.updateTransform = function() {
                this.validate(), this.containerUpdateTransform()
            }, i.prototype.getLocalBounds = function() {
                return this.validate(), n.Container.prototype.getLocalBounds.call(this)
            }, i.prototype.validate = function() {
                this.dirty && (this.updateText(), this.dirty = !1)
            }, i.fonts = {}
        }, {
            "../core": 29
        }],
        80: [function(t, e, r) {
            function i(t) {
                n.Sprite.call(this, t[0]), this._textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
            }
            var n = t("../core");
            i.prototype = Object.create(n.Sprite.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                totalFrames: {
                    get: function() {
                        return this._textures.length
                    }
                },
                textures: {
                    get: function() {
                        return this._textures
                    },
                    set: function(t) {
                        this._textures = t, this.texture = this._textures[Math.floor(this._currentTime) % this._textures.length]
                    }
                },
                currentFrame: {
                    get: function() {
                        return Math.floor(this._currentTime) % this._textures.length
                    }
                }
            }), i.prototype.stop = function() {
                this.playing && (this.playing = !1, n.ticker.shared.remove(this.update, this))
            }, i.prototype.play = function() {
                this.playing || (this.playing = !0, n.ticker.shared.add(this.update, this))
            }, i.prototype.gotoAndStop = function(t) {
                this.stop(), this._currentTime = t;
                var e = Math.floor(this._currentTime);
                this._texture = this._textures[e % this._textures.length]
            }, i.prototype.gotoAndPlay = function(t) {
                this._currentTime = t, this.play()
            }, i.prototype.update = function(t) {
                this._currentTime += this.animationSpeed * t;
                var e = Math.floor(this._currentTime);
                0 > e ? this.loop ? this._texture = this._textures[this._textures.length - 1 + e % this._textures.length] : (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this.loop || e < this._textures.length ? this._texture = this._textures[e % this._textures.length] : e >= this._textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
            }, i.prototype.destroy = function() {
                this.stop(), n.Sprite.prototype.destroy.call(this)
            }, i.fromFrames = function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(new n.Texture.fromFrame(t[r]));
                return new i(e)
            }, i.fromImages = function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(new n.Texture.fromImage(t[r]));
                return new i(e)
            }
        }, {
            "../core": 29
        }],
        81: [function(t, e, r) {
            function i(t, e, r) {
                n.Sprite.call(this, t), this.tileScale = new n.math.Point(1, 1), this.tilePosition = new n.math.Point(0, 0), this._width = e || 100, this._height = r || 100, this._uvs = new n.TextureUvs, this._canvasPattern = null, this.shader = new n.AbstractFilter(["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "uniform vec4 uFrame;", "uniform vec4 uTransform;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vec2 coord = aTextureCoord;", "   coord -= uTransform.xy;", "   coord /= uTransform.zw;", "   coord /= uFrame.zw;", "   vTextureCoord = coord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform vec4 uFrame;", "void main(void){", "   vec2 coord = fract(vTextureCoord);", "   coord *= uFrame.zw;", "   coord += uFrame.xy;", "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;", "}"].join("\n"), {
                    uFrame: {
                        type: "4fv",
                        value: [0, 0, 1, 1]
                    },
                    uTransform: {
                        type: "4fv",
                        value: [0, 0, 1, 1]
                    }
                })
            }
            var n = t("../core"),
                o = new n.Point;
            i.prototype = Object.create(n.Sprite.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                width: {
                    get: function() {
                        return this._width
                    },
                    set: function(t) {
                        this._width = t
                    }
                },
                height: {
                    get: function() {
                        return this._height
                    },
                    set: function(t) {
                        this._height = t
                    }
                }
            }), i.prototype._onTextureUpdate = function() {}, i.prototype._renderWebGL = function(t) {
                var e = this._texture;
                if (e && e._uvs) {
                    var r = e._uvs,
                        i = e._frame.width,
                        n = e._frame.height,
                        o = e.baseTexture.width,
                        s = e.baseTexture.height;
                    e._uvs = this._uvs, e._frame.width = this.width, e._frame.height = this.height, this.shader.uniforms.uFrame.value[0] = r.x0, this.shader.uniforms.uFrame.value[1] = r.y0, this.shader.uniforms.uFrame.value[2] = r.x1 - r.x0, this.shader.uniforms.uFrame.value[3] = r.y2 - r.y0, this.shader.uniforms.uTransform.value[0] = this.tilePosition.x % (i * this.tileScale.x) / this._width, this.shader.uniforms.uTransform.value[1] = this.tilePosition.y % (n * this.tileScale.y) / this._height, this.shader.uniforms.uTransform.value[2] = o / this._width * this.tileScale.x, this.shader.uniforms.uTransform.value[3] = s / this._height * this.tileScale.y, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this), e._uvs = r, e._frame.width = i, e._frame.height = n
                }
            }, i.prototype._renderCanvas = function(t) {
                var e = this._texture;
                if (e.baseTexture.hasLoaded) {
                    var r = t.context,
                        i = this.worldTransform,
                        o = t.resolution,
                        s = e.baseTexture,
                        a = this.tilePosition.x % (e._frame.width * this.tileScale.x),
                        l = this.tilePosition.y % (e._frame.height * this.tileScale.y);
                    if (!this._canvasPattern) {
                        var h = new n.CanvasBuffer(e._frame.width, e._frame.height);
                        h.context.drawImage(s.source, -e._frame.x, -e._frame.y), this._canvasPattern = h.context.createPattern(h.canvas, "repeat")
                    }
                    r.globalAlpha = this.worldAlpha, r.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o), r.scale(this.tileScale.x, this.tileScale.y), r.translate(a + this.anchor.x * -this._width, l + this.anchor.y * -this._height), this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, r.globalCompositeOperation = t.blendModes[t.currentBlendMode]), r.fillStyle = this._canvasPattern, r.fillRect(-a, -l, this._width / this.tileScale.x, this._height / this.tileScale.y)
                }
            }, i.prototype.getBounds = function() {
                var t, e, r, i, n = this._width,
                    o = this._height,
                    s = n * (1 - this.anchor.x),
                    a = n * -this.anchor.x,
                    l = o * (1 - this.anchor.y),
                    h = o * -this.anchor.y,
                    u = this.worldTransform,
                    c = u.a,
                    d = u.b,
                    p = u.c,
                    f = u.d,
                    v = u.tx,
                    g = u.ty,
                    m = c * a + p * h + v,
                    y = f * h + d * a + g,
                    x = c * s + p * h + v,
                    b = f * h + d * s + g,
                    _ = c * s + p * l + v,
                    T = f * l + d * s + g,
                    E = c * a + p * l + v,
                    w = f * l + d * a + g;
                t = m, t = t > x ? x : t, t = t > _ ? _ : t, t = t > E ? E : t, r = y, r = r > b ? b : r, r = r > T ? T : r, r = r > w ? w : r, e = m, e = x > e ? x : e, e = _ > e ? _ : e, e = E > e ? E : e, i = y, i = b > i ? b : i, i = T > i ? T : i, i = w > i ? w : i;
                var S = this._bounds;
                return S.x = t, S.width = e - t, S.y = r, S.height = i - r, this._currentBounds = S, S
            }, i.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, o);
                var e, r = this._width,
                    i = this._height,
                    n = -r * this.anchor.x;
                return o.x > n && o.x < n + r && (e = -i * this.anchor.y, o.y > e && o.y < e + i) ? !0 : !1
            }, i.prototype.destroy = function() {
                n.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
            }, i.fromFrame = function(t, e, r) {
                var o = n.utils.TextureCache[t];
                if (!o) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new i(o, e, r)
            }, i.fromImage = function(t, e, r, o, s) {
                return new i(n.Texture.fromImage(t, o, s), e, r)
            }
        }, {
            "../core": 29
        }],
        82: [function(t, e, r) {
            var i = t("../core"),
                n = i.DisplayObject,
                o = new i.Matrix;
            n.prototype._cacheAsBitmap = !1, n.prototype._originalRenderWebGL = null, n.prototype._originalRenderCanvas = null, n.prototype._originalUpdateTransform = null, n.prototype._originalHitTest = null, n.prototype._originalDestroy = null, n.prototype._cachedSprite = null, Object.defineProperties(n.prototype, {
                cacheAsBitmap: {
                    get: function() {
                        return this._cacheAsBitmap
                    },
                    set: function(t) {
                        this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._originalRenderWebGL = this.renderWebGL, this._originalRenderCanvas = this.renderCanvas, this._originalUpdateTransform = this.updateTransform, this._originalGetBounds = this.getBounds, this._originalDestroy = this.destroy, this._originalContainsPoint = this.containsPoint, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (this._cachedSprite && this._destroyCachedDisplayObject(), this.renderWebGL = this._originalRenderWebGL, this.renderCanvas = this._originalRenderCanvas, this.getBounds = this._originalGetBounds, this.destroy = this._originalDestroy, this.updateTransform = this._originalUpdateTransform, this.containsPoint = this._originalContainsPoint))
                    }
                }
            }), n.prototype._renderCachedWebGL = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this._cachedSprite))
            }, n.prototype._initCachedDisplayObject = function(t) {
                if (!this._cachedSprite) {
                    t.currentRenderer.flush();
                    var e = this.getLocalBounds().clone();
                    if (this._filters) {
                        var r = this._filters[0].padding;
                        e.x -= r, e.y -= r, e.width += 2 * r, e.height += 2 * r
                    }
                    var n = t.currentRenderTarget,
                        s = t.filterManager.filterStack,
                        a = new i.RenderTexture(t, 0 | e.width, 0 | e.height),
                        l = o;
                    l.tx = -e.x, l.ty = -e.y, this.renderWebGL = this._originalRenderWebGL, a.render(this, l, !0, !0), t.setRenderTarget(n), t.filterManager.filterStack = s, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new i.Sprite(a), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
                }
            }, n.prototype._renderCachedCanvas = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cachedSprite.worldAlpha = this.worldAlpha, this._cachedSprite.renderCanvas(t))
            }, n.prototype._initCachedDisplayObjectCanvas = function(t) {
                if (!this._cachedSprite) {
                    var e = this.getLocalBounds(),
                        r = t.context,
                        n = new i.RenderTexture(t, 0 | e.width, 0 | e.height),
                        s = o;
                    s.tx = -e.x, s.ty = -e.y, this.renderCanvas = this._originalRenderCanvas, n.render(this, s, !0), t.context = r, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new i.Sprite(n), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
                }
            }, n.prototype._getCachedBounds = function() {
                return this._cachedSprite._currentBounds = null, this._cachedSprite.getBounds()
            }, n.prototype._destroyCachedDisplayObject = function() {
                this._cachedSprite._texture.destroy(), this._cachedSprite = null
            }, n.prototype._cacheAsBitmapDestroy = function() {
                this.cacheAsBitmap = !1, this._originalDestroy()
            }
        }, {
            "../core": 29
        }],
        83: [function(t, e, r) {
            var i = t("../core");
            i.DisplayObject.prototype.name = null, i.Container.prototype.getChildByName = function(t) {
                for (var e = 0; e < this.children.length; e++)
                    if (this.children[e].name === t) return this.children[e];
                return null
            }
        }, {
            "../core": 29
        }],
        84: [function(t, e, r) {
            var i = t("../core");
            i.DisplayObject.prototype.getGlobalPosition = function(t) {
                return t = t || new i.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t
            }
        }, {
            "../core": 29
        }],
        85: [function(t, e, r) {
            t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = {
                MovieClip: t("./MovieClip"),
                TilingSprite: t("./TilingSprite"),
                BitmapText: t("./BitmapText")
            }
        }, {
            "./BitmapText": 79,
            "./MovieClip": 80,
            "./TilingSprite": 81,
            "./cacheAsBitmap": 82,
            "./getChildByName": 83,
            "./getGlobalPosition": 84
        }],
        86: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n", {
                    dimensions: {
                        type: "4fv",
                        value: new Float32Array([0, 0, 0, 0])
                    },
                    pixelSize: {
                        type: "1f",
                        value: 8
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                size: {
                    get: function() {
                        return this.uniforms.pixelSize.value
                    },
                    set: function(t) {
                        this.uniforms.pixelSize.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        87: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this), this.blurXFilter = new o, this.blurYFilter = new s, this.defaultFilter = new n.AbstractFilter
            }
            var n = t("../../core"),
                o = t("../blur/BlurXFilter"),
                s = t("../blur/BlurYFilter");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager.getRenderTarget(!0);
                this.defaultFilter.applyFilter(t, e, r), this.blurXFilter.applyFilter(t, e, i), t.blendModeManager.setBlendMode(n.BLEND_MODES.SCREEN), this.blurYFilter.applyFilter(t, i, r), t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL), t.filterManager.returnRenderTarget(i)
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(t) {
                        this.blurXFilter.blur = this.blurYFilter.blur = t
                    }
                },
                blurX: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(t) {
                        this.blurXFilter.blur = t
                    }
                },
                blurY: {
                    get: function() {
                        return this.blurYFilter.blur
                    },
                    set: function(t) {
                        this.blurYFilter.blur = t
                    }
                }
            })
        }, {
            "../../core": 29,
            "../blur/BlurXFilter": 90,
            "../blur/BlurYFilter": 91
        }],
        88: [function(t, e, r) {
            function i(t, e) {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n", {
                    strength: {
                        type: "1f",
                        value: 1
                    },
                    dirX: {
                        type: "1f",
                        value: t || 0
                    },
                    dirY: {
                        type: "1f",
                        value: e || 0
                    }
                }), this.defaultFilter = new n.AbstractFilter, this.passes = 1, this.dirX = t || 0, this.dirY = e || 0, this.strength = 4
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r, i) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                else {
                    var o = t.filterManager.getRenderTarget(!0);
                    t.filterManager.applyFilter(n, e, o, i);
                    for (var s = 0; s < this.passes - 2; s++) t.filterManager.applyFilter(n, o, o, i);
                    t.filterManager.applyFilter(n, o, r, i), t.filterManager.returnRenderTarget(o)
                }
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.strength
                    },
                    set: function(t) {
                        this.padding = .5 * t, this.strength = t
                    }
                },
                dirX: {
                    get: function() {
                        return this.dirX
                    },
                    set: function(t) {
                        this.uniforms.dirX.value = t
                    }
                },
                dirY: {
                    get: function() {
                        return this.dirY
                    },
                    set: function(t) {
                        this.uniforms.dirY.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        89: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this), this.blurXFilter = new o, this.blurYFilter = new s
            }
            var n = t("../../core"),
                o = t("./BlurXFilter"),
                s = t("./BlurYFilter");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager.getRenderTarget(!0);
                this.blurXFilter.applyFilter(t, e, i), this.blurYFilter.applyFilter(t, i, r), t.filterManager.returnRenderTarget(i)
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(t) {
                        this.padding = .5 * Math.abs(t), this.blurXFilter.blur = this.blurYFilter.blur = t
                    }
                },
                passes: {
                    get: function() {
                        return this.blurXFilter.passes
                    },
                    set: function(t) {
                        this.blurXFilter.passes = this.blurYFilter.passes = t
                    }
                },
                blurX: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(t) {
                        this.blurXFilter.blur = t
                    }
                },
                blurY: {
                    get: function() {
                        return this.blurYFilter.blur
                    },
                    set: function(t) {
                        this.blurYFilter.blur = t
                    }
                }
            })
        }, {
            "../../core": 29,
            "./BlurXFilter": 90,
            "./BlurYFilter": 91
        }],
        90: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", {
                    strength: {
                        type: "1f",
                        value: 1
                    }
                }), this.passes = 1, this.strength = 4
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r, i) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width),
                    1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                else {
                    for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, l = 0; l < this.passes - 1; l++) {
                        t.filterManager.applyFilter(n, s, a, !0);
                        var h = a;
                        a = s, s = h
                    }
                    t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o)
                }
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.strength
                    },
                    set: function(t) {
                        this.padding = .5 * Math.abs(t), this.strength = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        91: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", {
                    strength: {
                        type: "1f",
                        value: 1
                    }
                }), this.passes = 1, this.strength = 4
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r, i) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                else {
                    for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, l = 0; l < this.passes - 1; l++) {
                        t.filterManager.applyFilter(n, s, a, !0);
                        var h = a;
                        a = s, s = h
                    }
                    t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o)
                }
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.strength
                    },
                    set: function(t) {
                        this.padding = .5 * Math.abs(t), this.strength = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        92: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", {
                    delta: {
                        type: "v2",
                        value: {
                            x: .1,
                            y: 0
                        }
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i
        }, {
            "../../core": 29
        }],
        93: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n", {
                    m: {
                        type: "1fv",
                        value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype._loadMatrix = function(t, e) {
                e = !!e;
                var r = t;
                e && (this._multiply(r, this.uniforms.m.value, t), r = this._colorMatrix(r)), this.uniforms.m.value = r
            }, i.prototype._multiply = function(t, e, r) {
                return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19], t
            }, i.prototype._colorMatrix = function(t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, i.prototype.brightness = function(t, e) {
                var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, i.prototype.greyscale = function(t, e) {
                var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, i.prototype.grayscale = i.prototype.greyscale, i.prototype.blackAndWhite = function(t) {
                var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.hue = function(t, e) {
                t = (t || 0) / 180 * Math.PI;
                var r = Math.cos(t),
                    i = Math.sin(t),
                    n = .213,
                    o = .715,
                    s = .072,
                    a = [n + r * (1 - n) + i * -n, o + r * -o + i * -o, s + r * -s + i * (1 - s), 0, 0, n + r * -n + .143 * i, o + r * (1 - o) + .14 * i, s + r * -s + i * -.283, 0, 0, n + r * -n + i * -(1 - n), o + r * -o + i * o, s + r * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(a, e)
            }, i.prototype.contrast = function(t, e) {
                var r = (t || 0) + 1,
                    i = -128 * (r - 1),
                    n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, i.prototype.saturate = function(t, e) {
                var r = 2 * (t || 0) / 3 + 1,
                    i = (r - 1) * -.5,
                    n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, i.prototype.desaturate = function(t) {
                this.saturate(-1)
            }, i.prototype.negative = function(t) {
                var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.sepia = function(t) {
                var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.technicolor = function(t) {
                var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.polaroid = function(t) {
                var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.toBGR = function(t) {
                var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.kodachrome = function(t) {
                var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.browni = function(t) {
                var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.vintage = function(t) {
                var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.colorTone = function(t, e, r, i, n) {
                t = t || .2, e = e || .15, r = r || 16770432, i = i || 3375104;
                var o = (r >> 16 & 255) / 255,
                    s = (r >> 8 & 255) / 255,
                    a = (255 & r) / 255,
                    l = (i >> 16 & 255) / 255,
                    h = (i >> 8 & 255) / 255,
                    u = (255 & i) / 255,
                    c = [.3, .59, .11, 0, 0, o, s, a, t, 0, l, h, u, e, 0, o - l, s - h, a - u, 0, 0];
                this._loadMatrix(c, n)
            }, i.prototype.night = function(t, e) {
                t = t || .1;
                var r = [-2 * t, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, i.prototype.predator = function(t, e) {
                var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, i.prototype.lsd = function(t) {
                var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, i.prototype.reset = function() {
                var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(t, !1)
            }, Object.defineProperties(i.prototype, {
                matrix: {
                    get: function() {
                        return this.uniforms.m.value
                    },
                    set: function(t) {
                        this.uniforms.m.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        94: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n", {
                    step: {
                        type: "1f",
                        value: 5
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                step: {
                    get: function() {
                        return this.uniforms.step.value
                    },
                    set: function(t) {
                        this.uniforms.step.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        95: [function(t, e, r) {
            function i(t, e, r) {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n", {
                    matrix: {
                        type: "1fv",
                        value: new Float32Array(t)
                    },
                    texelSize: {
                        type: "v2",
                        value: {
                            x: 1 / e,
                            y: 1 / r
                        }
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                matrix: {
                    get: function() {
                        return this.uniforms.matrix.value
                    },
                    set: function(t) {
                        this.uniforms.matrix.value = new Float32Array(t)
                    }
                },
                width: {
                    get: function() {
                        return 1 / this.uniforms.texelSize.value.x
                    },
                    set: function(t) {
                        this.uniforms.texelSize.value.x = 1 / t
                    }
                },
                height: {
                    get: function() {
                        return 1 / this.uniforms.texelSize.value.y
                    },
                    set: function(t) {
                        this.uniforms.texelSize.value.y = 1 / t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        96: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i
        }, {
            "../../core": 29
        }],
        97: [function(t, e, r) {
            function i(t) {
                var e = new n.math.Matrix;
                t.renderable = !1, n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n", {
                    mapSampler: {
                        type: "sampler2D",
                        value: t.texture
                    },
                    otherMatrix: {
                        type: "mat3",
                        value: e.toArray(!0)
                    },
                    scale: {
                        type: "v2",
                        value: {
                            x: 1,
                            y: 1
                        }
                    }
                }), this.maskSprite = t, this.maskMatrix = e, this.scale = new n.math.Point(20, 20)
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager;
                i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.scale.value.x = this.scale.x * (1 / e.frame.width), this.uniforms.scale.value.y = this.scale.y * (1 / e.frame.height);
                var n = this.getShader(t);
                i.applyFilter(n, e, r)
            }, Object.defineProperties(i.prototype, {
                map: {
                    get: function() {
                        return this.uniforms.mapSampler.value
                    },
                    set: function(t) {
                        this.uniforms.mapSampler.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        98: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n", {
                    scale: {
                        type: "1f",
                        value: 1
                    },
                    angle: {
                        type: "1f",
                        value: 5
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                scale: {
                    get: function() {
                        return this.uniforms.scale.value
                    },
                    set: function(t) {
                        this.uniforms.scale.value = t
                    }
                },
                angle: {
                    get: function() {
                        return this.uniforms.angle.value
                    },
                    set: function(t) {
                        this.uniforms.angle.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        99: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n", {
                    blur: {
                        type: "1f",
                        value: 1 / 512
                    },
                    color: {
                        type: "c",
                        value: [0, 0, 0]
                    },
                    alpha: {
                        type: "1f",
                        value: .7
                    },
                    offset: {
                        type: "2f",
                        value: [5, 5]
                    },
                    strength: {
                        type: "1f",
                        value: 1
                    }
                }), this.passes = 1, this.strength = 4
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r, i) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                else {
                    for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, l = 0; l < this.passes - 1; l++) {
                        t.filterManager.applyFilter(n, s, a, i);
                        var h = a;
                        a = s, s = h
                    }
                    t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o)
                }
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.strength
                    },
                    set: function(t) {
                        this.padding = .5 * t, this.strength = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        100: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this), this.blurXFilter = new o, this.blurYTintFilter = new s, this.defaultFilter = new n.AbstractFilter, this.padding = 30, this._dirtyPosition = !0, this._angle = 45 * Math.PI / 180, this._distance = 10, this.alpha = .75, this.hideObject = !1, this.blendMode = n.BLEND_MODES.MULTIPLY
            }
            var n = t("../../core"),
                o = t("../blur/BlurXFilter"),
                s = t("./BlurYTintFilter");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager.getRenderTarget(!0);
                this._dirtyPosition && (this._dirtyPosition = !1, this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance, this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance), this.blurXFilter.applyFilter(t, e, i), t.blendModeManager.setBlendMode(this.blendMode), this.blurYTintFilter.applyFilter(t, i, r), t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL), this.hideObject || this.defaultFilter.applyFilter(t, e, r), t.filterManager.returnRenderTarget(i)
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(t) {
                        this.blurXFilter.blur = this.blurYTintFilter.blur = t
                    }
                },
                blurX: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(t) {
                        this.blurXFilter.blur = t
                    }
                },
                blurY: {
                    get: function() {
                        return this.blurYTintFilter.blur
                    },
                    set: function(t) {
                        this.blurYTintFilter.blur = t
                    }
                },
                color: {
                    get: function() {
                        return n.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)
                    },
                    set: function(t) {
                        this.blurYTintFilter.uniforms.color.value = n.utils.hex2rgb(t)
                    }
                },
                alpha: {
                    get: function() {
                        return this.blurYTintFilter.uniforms.alpha.value
                    },
                    set: function(t) {
                        this.blurYTintFilter.uniforms.alpha.value = t
                    }
                },
                distance: {
                    get: function() {
                        return this._distance
                    },
                    set: function(t) {
                        this._dirtyPosition = !0, this._distance = t
                    }
                },
                angle: {
                    get: function() {
                        return this._angle
                    },
                    set: function(t) {
                        this._dirtyPosition = !0, this._angle = t
                    }
                }
            })
        }, {
            "../../core": 29,
            "../blur/BlurXFilter": 90,
            "./BlurYTintFilter": 99
        }],
        101: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n", {
                    gray: {
                        type: "1f",
                        value: 1
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                gray: {
                    get: function() {
                        return this.uniforms.gray.value
                    },
                    set: function(t) {
                        this.uniforms.gray.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        102: [function(t, e, r) {
            e.exports = {
                AbstractFilter: t("../core/renderers/webgl/filters/AbstractFilter"),
                FXAAFilter: t("../core/renderers/webgl/filters/FXAAFilter"),
                SpriteMaskFilter: t("../core/renderers/webgl/filters/SpriteMaskFilter"),
                AsciiFilter: t("./ascii/AsciiFilter"),
                BloomFilter: t("./bloom/BloomFilter"),
                BlurFilter: t("./blur/BlurFilter"),
                BlurXFilter: t("./blur/BlurXFilter"),
                BlurYFilter: t("./blur/BlurYFilter"),
                BlurDirFilter: t("./blur/BlurDirFilter"),
                ColorMatrixFilter: t("./color/ColorMatrixFilter"),
                ColorStepFilter: t("./color/ColorStepFilter"),
                ConvolutionFilter: t("./convolution/ConvolutionFilter"),
                CrossHatchFilter: t("./crosshatch/CrossHatchFilter"),
                DisplacementFilter: t("./displacement/DisplacementFilter"),
                DotScreenFilter: t("./dot/DotScreenFilter"),
                GrayFilter: t("./gray/GrayFilter"),
                DropShadowFilter: t("./dropshadow/DropShadowFilter"),
                InvertFilter: t("./invert/InvertFilter"),
                NoiseFilter: t("./noise/NoiseFilter"),
                NormalMapFilter: t("./normal/NormalMapFilter"),
                PixelateFilter: t("./pixelate/PixelateFilter"),
                RGBSplitFilter: t("./rgb/RGBSplitFilter"),
                ShockwaveFilter: t("./shockwave/ShockwaveFilter"),
                SepiaFilter: t("./sepia/SepiaFilter"),
                SmartBlurFilter: t("./blur/SmartBlurFilter"),
                TiltShiftFilter: t("./tiltshift/TiltShiftFilter"),
                TiltShiftXFilter: t("./tiltshift/TiltShiftXFilter"),
                TiltShiftYFilter: t("./tiltshift/TiltShiftYFilter"),
                TwistFilter: t("./twist/TwistFilter")
            }
        }, {
            "../core/renderers/webgl/filters/AbstractFilter": 49,
            "../core/renderers/webgl/filters/FXAAFilter": 50,
            "../core/renderers/webgl/filters/SpriteMaskFilter": 51,
            "./ascii/AsciiFilter": 86,
            "./bloom/BloomFilter": 87,
            "./blur/BlurDirFilter": 88,
            "./blur/BlurFilter": 89,
            "./blur/BlurXFilter": 90,
            "./blur/BlurYFilter": 91,
            "./blur/SmartBlurFilter": 92,
            "./color/ColorMatrixFilter": 93,
            "./color/ColorStepFilter": 94,
            "./convolution/ConvolutionFilter": 95,
            "./crosshatch/CrossHatchFilter": 96,
            "./displacement/DisplacementFilter": 97,
            "./dot/DotScreenFilter": 98,
            "./dropshadow/DropShadowFilter": 100,
            "./gray/GrayFilter": 101,
            "./invert/InvertFilter": 103,
            "./noise/NoiseFilter": 104,
            "./normal/NormalMapFilter": 105,
            "./pixelate/PixelateFilter": 106,
            "./rgb/RGBSplitFilter": 107,
            "./sepia/SepiaFilter": 108,
            "./shockwave/ShockwaveFilter": 109,
            "./tiltshift/TiltShiftFilter": 111,
            "./tiltshift/TiltShiftXFilter": 112,
            "./tiltshift/TiltShiftYFilter": 113,
            "./twist/TwistFilter": 114
        }],
        103: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n", {
                    invert: {
                        type: "1f",
                        value: 1
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                invert: {
                    get: function() {
                        return this.uniforms.invert.value
                    },
                    set: function(t) {
                        this.uniforms.invert.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        104: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n", {
                    noise: {
                        type: "1f",
                        value: .5
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                noise: {
                    get: function() {
                        return this.uniforms.noise.value
                    },
                    set: function(t) {
                        this.uniforms.noise.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        105: [function(t, e, r) {
            function i(t) {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n", {
                    displacementMap: {
                        type: "sampler2D",
                        value: t
                    },
                    scale: {
                        type: "2f",
                        value: {
                            x: 15,
                            y: 15
                        }
                    },
                    offset: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        }
                    },
                    mapDimensions: {
                        type: "2f",
                        value: {
                            x: 1,
                            y: 1
                        }
                    },
                    dimensions: {
                        type: "4f",
                        value: [0, 0, 0, 0]
                    },
                    LightPos: {
                        type: "3f",
                        value: [0, 1, 0]
                    }
                }), t.baseTexture._powerOf2 = !0, t.baseTexture.hasLoaded ? this.onTextureLoaded() : t.baseTexture.once("loaded", this.onTextureLoaded, this)
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.onTextureLoaded = function() {
                this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height
            }, Object.defineProperties(i.prototype, {
                map: {
                    get: function() {
                        return this.uniforms.displacementMap.value
                    },
                    set: function(t) {
                        this.uniforms.displacementMap.value = t
                    }
                },
                scale: {
                    get: function() {
                        return this.uniforms.scale.value
                    },
                    set: function(t) {
                        this.uniforms.scale.value = t
                    }
                },
                offset: {
                    get: function() {
                        return this.uniforms.offset.value
                    },
                    set: function(t) {
                        this.uniforms.offset.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        106: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n", {
                    dimensions: {
                        type: "4fv",
                        value: new Float32Array([0, 0, 0, 0])
                    },
                    pixelSize: {
                        type: "v2",
                        value: {
                            x: 10,
                            y: 10
                        }
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                size: {
                    get: function() {
                        return this.uniforms.pixelSize.value
                    },
                    set: function(t) {
                        this.uniforms.pixelSize.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        107: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n", {
                    red: {
                        type: "v2",
                        value: {
                            x: 20,
                            y: 20
                        }
                    },
                    green: {
                        type: "v2",
                        value: {
                            x: -20,
                            y: 20
                        }
                    },
                    blue: {
                        type: "v2",
                        value: {
                            x: 20,
                            y: -20
                        }
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                red: {
                    get: function() {
                        return this.uniforms.red.value
                    },
                    set: function(t) {
                        this.uniforms.red.value = t
                    }
                },
                green: {
                    get: function() {
                        return this.uniforms.green.value
                    },
                    set: function(t) {
                        this.uniforms.green.value = t
                    }
                },
                blue: {
                    get: function() {
                        return this.uniforms.blue.value
                    },
                    set: function(t) {
                        this.uniforms.blue.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        108: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n", {
                    sepia: {
                        type: "1f",
                        value: 1
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                sepia: {
                    get: function() {
                        return this.uniforms.sepia.value
                    },
                    set: function(t) {
                        this.uniforms.sepia.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        109: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n", {
                    center: {
                        type: "v2",
                        value: {
                            x: .5,
                            y: .5
                        }
                    },
                    params: {
                        type: "v3",
                        value: {
                            x: 10,
                            y: .8,
                            z: .1
                        }
                    },
                    time: {
                        type: "1f",
                        value: 0
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                center: {
                    get: function() {
                        return this.uniforms.center.value
                    },
                    set: function(t) {
                        this.uniforms.center.value = t
                    }
                },
                params: {
                    get: function() {
                        return this.uniforms.params.value
                    },
                    set: function(t) {
                        this.uniforms.params.value = t
                    }
                },
                time: {
                    get: function() {
                        return this.uniforms.time.value
                    },
                    set: function(t) {
                        this.uniforms.time.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        110: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", {
                    blur: {
                        type: "1f",
                        value: 100
                    },
                    gradientBlur: {
                        type: "1f",
                        value: 600
                    },
                    start: {
                        type: "v2",
                        value: {
                            x: 0,
                            y: window.innerHeight / 2
                        }
                    },
                    end: {
                        type: "v2",
                        value: {
                            x: 600,
                            y: window.innerHeight / 2
                        }
                    },
                    delta: {
                        type: "v2",
                        value: {
                            x: 30,
                            y: 30
                        }
                    },
                    texSize: {
                        type: "v2",
                        value: {
                            x: window.innerWidth,
                            y: window.innerHeight
                        }
                    }
                }), this.updateDelta()
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.updateDelta = function() {
                this.uniforms.delta.value.x = 0, this.uniforms.delta.value.y = 0
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.uniforms.blur.value
                    },
                    set: function(t) {
                        this.uniforms.blur.value = t
                    }
                },
                gradientBlur: {
                    get: function() {
                        return this.uniforms.gradientBlur.value
                    },
                    set: function(t) {
                        this.uniforms.gradientBlur.value = t
                    }
                },
                start: {
                    get: function() {
                        return this.uniforms.start.value
                    },
                    set: function(t) {
                        this.uniforms.start.value = t, this.updateDelta()
                    }
                },
                end: {
                    get: function() {
                        return this.uniforms.end.value
                    },
                    set: function(t) {
                        this.uniforms.end.value = t, this.updateDelta()
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        111: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this), this.tiltShiftXFilter = new o, this.tiltShiftYFilter = new s
            }
            var n = t("../../core"),
                o = t("./TiltShiftXFilter"),
                s = t("./TiltShiftYFilter");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.applyFilter = function(t, e, r) {
                var i = t.filterManager.getRenderTarget(!0);
                this.tiltShiftXFilter.applyFilter(t, e, i), this.tiltShiftYFilter.applyFilter(t, i, r), t.filterManager.returnRenderTarget(i)
            }, Object.defineProperties(i.prototype, {
                blur: {
                    get: function() {
                        return this.tiltShiftXFilter.blur
                    },
                    set: function(t) {
                        this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = t
                    }
                },
                gradientBlur: {
                    get: function() {
                        return this.tiltShiftXFilter.gradientBlur
                    },
                    set: function(t) {
                        this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = t
                    }
                },
                start: {
                    get: function() {
                        return this.tiltShiftXFilter.start
                    },
                    set: function(t) {
                        this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = t
                    }
                },
                end: {
                    get: function() {
                        return this.tiltShiftXFilter.end
                    },
                    set: function(t) {
                        this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = t
                    }
                }
            })
        }, {
            "../../core": 29,
            "./TiltShiftXFilter": 112,
            "./TiltShiftYFilter": 113
        }],
        112: [function(t, e, r) {
            function i() {
                n.call(this)
            }
            var n = t("./TiltShiftAxisFilter");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.updateDelta = function() {
                var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
                    e = this.uniforms.end.value.y - this.uniforms.start.value.y,
                    r = Math.sqrt(t * t + e * e);
                this.uniforms.delta.value.x = t / r, this.uniforms.delta.value.y = e / r
            }
        }, {
            "./TiltShiftAxisFilter": 110
        }],
        113: [function(t, e, r) {
            function i() {
                n.call(this)
            }
            var n = t("./TiltShiftAxisFilter");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.updateDelta = function() {
                var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
                    e = this.uniforms.end.value.y - this.uniforms.start.value.y,
                    r = Math.sqrt(t * t + e * e);
                this.uniforms.delta.value.x = -e / r, this.uniforms.delta.value.y = t / r
            }
        }, {
            "./TiltShiftAxisFilter": 110
        }],
        114: [function(t, e, r) {
            function i() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n", {
                    radius: {
                        type: "1f",
                        value: .5
                    },
                    angle: {
                        type: "1f",
                        value: 5
                    },
                    offset: {
                        type: "v2",
                        value: {
                            x: .5,
                            y: .5
                        }
                    }
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.AbstractFilter.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                offset: {
                    get: function() {
                        return this.uniforms.offset.value
                    },
                    set: function(t) {
                        this.uniforms.offset.value = t
                    }
                },
                radius: {
                    get: function() {
                        return this.uniforms.radius.value
                    },
                    set: function(t) {
                        this.uniforms.radius.value = t
                    }
                },
                angle: {
                    get: function() {
                        return this.uniforms.angle.value
                    },
                    set: function(t) {
                        this.uniforms.angle.value = t
                    }
                }
            })
        }, {
            "../../core": 29
        }],
        115: [function(t, e, r) {
            function i() {
                this.global = new n.Point, this.target = null, this.originalEvent = null
            }
            var n = t("../core");
            i.prototype.constructor = i, e.exports = i, i.prototype.getLocalPosition = function(t, e, r) {
                var i = t.worldTransform,
                    o = r ? r : this.global,
                    s = i.a,
                    a = i.c,
                    l = i.tx,
                    h = i.b,
                    u = i.d,
                    c = i.ty,
                    d = 1 / (s * u + a * -h);
                return e = e || new n.math.Point, e.x = u * d * o.x + -a * d * o.x + (c * a - l * u) * d, e.y = s * d * o.y + -h * d * o.y + (-c * s + l * h) * d, e
            }
        }, {
            "../core": 29
        }],
        116: [function(t, e, r) {
            function i(t, e) {
                e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 !== e.autoPreventDefault ? e.autoPreventDefault : !0, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new o, this.eventData = {
                    stopped: !1,
                    target: null,
                    type: null,
                    data: this.mouse,
                    stopPropagation: function() {
                        this.stopped = !0
                    }
                }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this._tempPoint = new n.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
            }
            var n = t("../core"),
                o = t("./InteractionData");
            Object.assign(n.DisplayObject.prototype, t("./interactiveTarget")), i.prototype.constructor = i, e.exports = i, i.prototype.setTargetElement = function(t, e) {
                this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents()
            }, i.prototype.addEvents = function() {
                this.interactionDOMElement && (n.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
            }, i.prototype.removeEvents = function() {
                this.interactionDOMElement && (n.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
            }, i.prototype.update = function(t) {
                if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                    if (this.didMove) return void(this.didMove = !1);
                    this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                }
            }, i.prototype.dispatchEvent = function(t, e, r) {
                r.stopped || (r.target = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
            }, i.prototype.mapPositionToPoint = function(t, e, r) {
                var i = this.interactionDOMElement.getBoundingClientRect();
                t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) / this.resolution, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) / this.resolution
            }, i.prototype.processInteractive = function(t, e, r, i, n) {
                if (!e.visible) return !1;
                var o = e.children,
                    s = !1;
                if (n = n || e.interactive, e.interactiveChildren)
                    for (var a = o.length - 1; a >= 0; a--) !s && i ? s = this.processInteractive(t, o[a], r, !0, n) : this.processInteractive(t, o[a], r, !1, !1);
                return n && (i && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), s = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (s = e.containsPoint(t))), e.interactive && r(e, s)), s
            }, i.prototype.onMouseDown = function(t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0)
            }, i.prototype.processMouseDown = function(t, e) {
                var r = this.mouse.originalEvent,
                    i = 2 === r.button || 3 === r.which;
                e && (t[i ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, i ? "rightdown" : "mousedown", this.eventData))
            }, i.prototype.onMouseUp = function(t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0)
            }, i.prototype.processMouseUp = function(t, e) {
                var r = this.mouse.originalEvent,
                    i = 2 === r.button || 3 === r.which,
                    n = i ? "_isRightDown" : "_isLeftDown";
                e ? (this.dispatchEvent(t, i ? "rightup" : "mouseup", this.eventData), t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightupoutside" : "mouseupoutside", this.eventData))
            }, i.prototype.onMouseMove = function(t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
            }, i.prototype.processMouseMove = function(t, e) {
                this.dispatchEvent(t, "mousemove", this.eventData), this.processMouseOverOut(t, e)
            }, i.prototype.onMouseOut = function(t) {
                this.mouse.originalEvent = t, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = "inherit", this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1)
            }, i.prototype.processMouseOverOut = function(t, e) {
                e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData))
            }, i.prototype.onTouchStart = function(t) {
                this.autoPreventDefault && t.preventDefault();
                for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
                    var n = e[i],
                        o = this.getTouchData(n);
                    o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.returnTouchData(o)
                }
            }, i.prototype.processTouchStart = function(t, e) {
                e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
            }, i.prototype.onTouchEnd = function(t) {
                this.autoPreventDefault && t.preventDefault();
                for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
                    var n = e[i],
                        o = this.getTouchData(n);
                    o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.returnTouchData(o)
                }
            }, i.prototype.processTouchEnd = function(t, e) {
                e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
            }, i.prototype.onTouchMove = function(t) {
                this.autoPreventDefault && t.preventDefault();
                for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) {
                    var n = e[i],
                        o = this.getTouchData(n);
                    o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchMove, !1), this.returnTouchData(o)
                }
            }, i.prototype.processTouchMove = function(t, e) {
                e = e, this.dispatchEvent(t, "touchmove", this.eventData)
            }, i.prototype.getTouchData = function(t) {
                var e = this.interactiveDataPool.pop();
                return e || (e = new o), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
            }, i.prototype.returnTouchData = function(t) {
                this.interactiveDataPool.push(t)
            }, i.prototype.destroy = function() {
                this.removeEvents(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
            }, n.WebGLRenderer.registerPlugin("interaction", i), n.CanvasRenderer.registerPlugin("interaction", i)
        }, {
            "../core": 29,
            "./InteractionData": 115,
            "./interactiveTarget": 118
        }],
        117: [function(t, e, r) {
            e.exports = {
                InteractionData: t("./InteractionData"),
                InteractionManager: t("./InteractionManager"),
                interactiveTarget: t("./interactiveTarget")
            }
        }, {
            "./InteractionData": 115,
            "./InteractionManager": 116,
            "./interactiveTarget": 118
        }],
        118: [function(t, e, r) {
            var i = {
                interactive: !1,
                buttonMode: !1,
                interactiveChildren: !0,
                defaultCursor: "pointer",
                _over: !1,
                _touchDown: !1
            };
            e.exports = i
        }, {}],
        119: [function(t, e, r) {
            function i(t, e) {
                var r = {},
                    i = t.data.getElementsByTagName("info")[0],
                    n = t.data.getElementsByTagName("common")[0];
                r.font = i.getAttribute("face"), r.size = parseInt(i.getAttribute("size"), 10), r.lineHeight = parseInt(n.getAttribute("lineHeight"), 10), r.chars = {};
                for (var s = t.data.getElementsByTagName("char"), l = 0; l < s.length; l++) {
                    var h = parseInt(s[l].getAttribute("id"), 10),
                        u = new o.math.Rectangle(parseInt(s[l].getAttribute("x"), 10) + e.frame.x, parseInt(s[l].getAttribute("y"), 10) + e.frame.y, parseInt(s[l].getAttribute("width"), 10), parseInt(s[l].getAttribute("height"), 10));
                    r.chars[h] = {
                        xOffset: parseInt(s[l].getAttribute("xoffset"), 10),
                        yOffset: parseInt(s[l].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(s[l].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: new o.Texture(e.baseTexture, u)
                    }
                }
                var c = t.data.getElementsByTagName("kerning");
                for (l = 0; l < c.length; l++) {
                    var d = parseInt(c[l].getAttribute("first"), 10),
                        p = parseInt(c[l].getAttribute("second"), 10),
                        f = parseInt(c[l].getAttribute("amount"), 10);
                    r.chars[p].kerning[d] = f
                }
                t.bitmapFont = r, a.BitmapText.fonts[r.font] = r
            }
            var n = t("resource-loader").Resource,
                o = t("../core"),
                s = t("../core/utils"),
                a = t("../extras"),
                l = t("path");
            e.exports = function() {
                return function(t, e) {
                    if (!t.data || !t.isXml) return e();
                    if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return e();
                    var r = l.dirname(t.url);
                    "." === r && (r = ""), this.baseUrl && r && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/"), r = r.replace(this.baseUrl, "")), r && "/" !== r.charAt(r.length - 1) && (r += "/");
                    var o = r + t.data.getElementsByTagName("page")[0].getAttribute("file");
                    if (s.TextureCache[o]) i(t, s.TextureCache[o]), e();
                    else {
                        var a = {
                            crossOrigin: t.crossOrigin,
                            loadType: n.LOAD_TYPE.IMAGE
                        };
                        this.add(t.name + "_image", o, a, function(r) {
                            i(t, r.texture), e()
                        })
                    }
                }
            }
        }, {
            "../core": 29,
            "../core/utils": 76,
            "../extras": 85,
            path: 3,
            "resource-loader": 18
        }],
        120: [function(t, e, r) {
            e.exports = {
                Loader: t("./loader"),
                bitmapFontParser: t("./bitmapFontParser"),
                spritesheetParser: t("./spritesheetParser"),
                textureParser: t("./textureParser"),
                Resource: t("resource-loader").Resource
            }
        }, {
            "./bitmapFontParser": 119,
            "./loader": 121,
            "./spritesheetParser": 122,
            "./textureParser": 123,
            "resource-loader": 18
        }],
        121: [function(t, e, r) {
            function i(t, e) {
                n.call(this, t, e);
                for (var r = 0; r < i._pixiMiddleware.length; ++r) this.use(i._pixiMiddleware[r]())
            }
            var n = t("resource-loader"),
                o = t("./textureParser"),
                s = t("./spritesheetParser"),
                a = t("./bitmapFontParser");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i._pixiMiddleware = [n.middleware.parsing.blob, o, s, a], i.addPixiMiddleware = function(t) {
                i._pixiMiddleware.push(t)
            };
            var l = n.Resource;
            l.setExtensionXhrType("fnt", l.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {
            "./bitmapFontParser": 119,
            "./spritesheetParser": 122,
            "./textureParser": 123,
            "resource-loader": 18
        }],
        122: [function(t, e, r) {
            var i = t("resource-loader").Resource,
                n = t("path"),
                o = t("../core");
            e.exports = function() {
                return function(t, e) {
                    if (!t.data || !t.isJson || !t.data.frames) return e();
                    var r = {
                            crossOrigin: t.crossOrigin,
                            loadType: i.LOAD_TYPE.IMAGE
                        },
                        s = n.dirname(t.url.replace(this.baseUrl, "")),
                        a = o.utils.getResolutionOfUrl(t.url);
                    this.add(t.name + "_image", s + "/" + t.data.meta.image, r, function(r) {
                        t.textures = {};
                        var i = t.data.frames;
                        for (var n in i) {
                            var s = i[n].frame;
                            if (s) {
                                var l = null,
                                    h = null;
                                if (l = i[n].rotated ? new o.math.Rectangle(s.x, s.y, s.h, s.w) : new o.math.Rectangle(s.x, s.y, s.w, s.h), i[n].trimmed && (h = new o.math.Rectangle(i[n].spriteSourceSize.x / a, i[n].spriteSourceSize.y / a, i[n].sourceSize.w / a, i[n].sourceSize.h / a)), i[n].rotated) {
                                    var u = l.width;
                                    l.width = l.height, l.height = u
                                }
                                l.x /= a, l.y /= a, l.width /= a, l.height /= a, t.textures[n] = new o.Texture(r.texture.baseTexture, l, l.clone(), h, i[n].rotated), o.utils.TextureCache[n] = t.textures[n]
                            }
                        }
                        e()
                    })
                }
            }
        }, {
            "../core": 29,
            path: 3,
            "resource-loader": 18
        }],
        123: [function(t, e, r) {
            var i = t("../core");
            e.exports = function() {
                return function(t, e) {
                    t.data && t.isImage && (t.texture = new i.Texture(new i.BaseTexture(t.data, null, i.utils.getResolutionOfUrl(t.url))), i.utils.TextureCache[t.url] = t.texture), e()
                }
            }
        }, {
            "../core": 29
        }],
        124: [function(t, e, r) {
            function i(t, e, r, o, s) {
                n.Container.call(this), this._texture = null, this.uvs = r || new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = o || new Uint16Array([0, 1, 2, 3]), this.dirty = !0, this.blendMode = n.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = s || i.DRAW_MODES.TRIANGLE_MESH, this.texture = t
            }
            var n = t("../core");
            i.prototype = Object.create(n.Container.prototype), i.prototype.constructor = i, e.exports = i, Object.defineProperties(i.prototype, {
                texture: {
                    get: function() {
                        return this._texture
                    },
                    set: function(t) {
                        this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }
            }), i.prototype._renderWebGL = function(t) {
                t.setObjectRenderer(t.plugins.mesh), t.plugins.mesh.render(this)
            }, i.prototype._renderCanvas = function(t) {
                var e = t.context,
                    r = this.worldTransform;
                t.roundPixels ? e.setTransform(r.a, r.b, r.c, r.d, 0 | r.tx, 0 | r.ty) : e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), this.drawMode === i.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
            }, i.prototype._renderCanvasTriangleMesh = function(t) {
                for (var e = this.vertices, r = this.uvs, i = e.length / 2, n = 0; i - 2 > n; n++) {
                    var o = 2 * n;
                    this._renderCanvasDrawTriangle(t, e, r, o, o + 2, o + 4)
                }
            }, i.prototype._renderCanvasTriangles = function(t) {
                for (var e = this.vertices, r = this.uvs, i = this.indices, n = i.length, o = 0; n > o; o += 3) {
                    var s = 2 * i[o],
                        a = 2 * i[o + 1],
                        l = 2 * i[o + 2];
                    this._renderCanvasDrawTriangle(t, e, r, s, a, l)
                }
            }, i.prototype._renderCanvasDrawTriangle = function(t, e, r, i, n, o) {
                var s = this._texture.baseTexture.source,
                    a = this._texture.baseTexture.width,
                    l = this._texture.baseTexture.height,
                    h = e[i],
                    u = e[n],
                    c = e[o],
                    d = e[i + 1],
                    p = e[n + 1],
                    f = e[o + 1],
                    v = r[i] * a,
                    g = r[n] * a,
                    m = r[o] * a,
                    y = r[i + 1] * l,
                    x = r[n + 1] * l,
                    b = r[o + 1] * l;
                if (this.canvasPadding > 0) {
                    var _ = this.canvasPadding / this.worldTransform.a,
                        T = this.canvasPadding / this.worldTransform.d,
                        E = (h + u + c) / 3,
                        w = (d + p + f) / 3,
                        S = h - E,
                        C = d - w,
                        M = Math.sqrt(S * S + C * C);
                    h = E + S / M * (M + _), d = w + C / M * (M + T), S = u - E, C = p - w, M = Math.sqrt(S * S + C * C), u = E + S / M * (M + _), p = w + C / M * (M + T), S = c - E, C = f - w, M = Math.sqrt(S * S + C * C), c = E + S / M * (M + _), f = w + C / M * (M + T)
                }
                t.save(), t.beginPath(), t.moveTo(h, d), t.lineTo(u, p), t.lineTo(c, f), t.closePath(), t.clip();
                var A = v * x + y * m + g * b - x * m - y * g - v * b,
                    R = h * x + y * c + u * b - x * c - y * u - h * b,
                    D = v * u + h * m + g * c - u * m - h * g - v * c,
                    O = v * x * c + y * u * m + h * g * b - h * x * m - y * g * c - v * u * b,
                    F = d * x + y * f + p * b - x * f - y * p - d * b,
                    P = v * p + d * m + g * f - p * m - d * g - v * f,
                    B = v * x * f + y * p * m + d * g * b - d * x * m - y * g * f - v * p * b;
                t.transform(R / A, F / A, D / A, P / A, O / A, B / A), t.drawImage(s, 0, 0), t.restore()
            }, i.prototype.renderMeshFlat = function(t) {
                var e = this.context,
                    r = t.vertices,
                    i = r.length / 2;
                e.beginPath();
                for (var n = 1; i - 2 > n; n++) {
                    var o = 2 * n,
                        s = r[o],
                        a = r[o + 2],
                        l = r[o + 4],
                        h = r[o + 1],
                        u = r[o + 3],
                        c = r[o + 5];
                    e.moveTo(s, h), e.lineTo(a, u), e.lineTo(l, c)
                }
                e.fillStyle = "#FF0000", e.fill(), e.closePath()
            }, i.prototype._onTextureUpdate = function() {
                this.updateFrame = !0
            }, i.prototype.getBounds = function(t) {
                for (var e = t || this.worldTransform, r = e.a, i = e.b, o = e.c, s = e.d, a = e.tx, l = e.ty, h = -(1 / 0), u = -(1 / 0), c = 1 / 0, d = 1 / 0, p = this.vertices, f = 0, v = p.length; v > f; f += 2) {
                    var g = p[f],
                        m = p[f + 1],
                        y = r * g + o * m + a,
                        x = s * m + i * g + l;
                    c = c > y ? y : c, d = d > x ? x : d, h = y > h ? y : h, u = x > u ? x : u
                }
                if (c === -(1 / 0) || u === 1 / 0) return n.math.Rectangle.EMPTY;
                var b = this._bounds;
                return b.x = c, b.width = h - c, b.y = d, b.height = u - d, this._currentBounds = b, b
            }, i.DRAW_MODES = {
                TRIANGLE_MESH: 0,
                TRIANGLES: 1
            }
        }, {
            "../core": 29
        }],
        125: [function(t, e, r) {
            function i(t, e) {
                n.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh()
            }
            var n = t("./Mesh"),
                o = t("../core");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, i.prototype.refresh = function() {
                var t = this.points;
                if (!(t.length < 1) && this._texture._uvs) {
                    var e = this.uvs,
                        r = this.indices,
                        i = this.colors,
                        n = this._texture._uvs,
                        s = new o.math.Point(n.x0, n.y0),
                        a = new o.math.Point(n.x2 - n.x0, n.y2 - n.y0);
                    e[0] = 0 + s.x, e[1] = 0 + s.y, e[2] = 0 + s.x, e[3] = 1 * a.y + s.y, i[0] = 1, i[1] = 1, r[0] = 0, r[1] = 1;
                    for (var l, h, u, c = t.length, d = 1; c > d; d++) l = t[d], h = 4 * d, u = d / (c - 1), e[h] = u * a.x + s.x, e[h + 1] = 0 + s.y, e[h + 2] = u * a.x + s.x, e[h + 3] = 1 * a.y + s.y, h = 2 * d, i[h] = 1, i[h + 1] = 1, h = 2 * d, r[h] = h, r[h + 1] = h + 1;
                    this.dirty = !0
                }
            }, i.prototype._onTextureUpdate = function() {
                n.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
            }, i.prototype.updateTransform = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    for (var e, r, i, n, o, s, a = t[0], l = 0, h = 0, u = this.vertices, c = t.length, d = 0; c > d; d++) r = t[d], i = 4 * d, e = d < t.length - 1 ? t[d + 1] : r, h = -(e.x - a.x), l = e.y - a.y, n = 10 * (1 - d / (c - 1)), n > 1 && (n = 1), o = Math.sqrt(l * l + h * h), s = this._texture.height / 2, l /= o, h /= o, l *= s, h *= s, u[i] = r.x + l, u[i + 1] = r.y + h, u[i + 2] = r.x - l, u[i + 3] = r.y - h, a = r;
                    this.containerUpdateTransform()
                }
            }
        }, {
            "../core": 29,
            "./Mesh": 124
        }],
        126: [function(t, e, r) {
            e.exports = {
                Mesh: t("./Mesh"),
                Rope: t("./Rope"),
                MeshRenderer: t("./webgl/MeshRenderer"),
                MeshShader: t("./webgl/MeshShader")
            }
        }, {
            "./Mesh": 124,
            "./Rope": 125,
            "./webgl/MeshRenderer": 127,
            "./webgl/MeshShader": 128
        }],
        127: [function(t, e, r) {
            function i(t) {
                n.call(this, t), this.indices = new Uint16Array(15e3);
                for (var e = 0, r = 0; 15e3 > e; e += 6, r += 4) this.indices[e + 0] = r + 0, this.indices[e + 1] = r + 1, this.indices[e + 2] = r + 2, this.indices[e + 3] = r + 0, this.indices[e + 4] = r + 2, this.indices[e + 5] = r + 3
            }
            var n = t("../../core/renderers/webgl/utils/ObjectRenderer"),
                o = t("../../core/renderers/webgl/WebGLRenderer"),
                s = t("../Mesh");
            i.prototype = Object.create(n.prototype), i.prototype.constructor = i, e.exports = i, o.registerPlugin("mesh", i), i.prototype.onContextChange = function() {}, i.prototype.render = function(t) {
                t._vertexBuffer || this._initWebGL(t);
                var e = this.renderer,
                    r = e.gl,
                    i = t._texture.baseTexture,
                    n = e.shaderManager.plugins.meshShader,
                    o = t.drawMode === s.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
                e.blendModeManager.setBlendMode(t.blendMode), r.uniformMatrix3fv(n.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), r.uniformMatrix3fv(n.uniforms.projectionMatrix._location, !1, e.currentRenderTarget.projectionMatrix.toArray(!0)), r.uniform1f(n.uniforms.alpha._location, t.worldAlpha), t.dirty ? (t.dirty = !1, r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer), r.bufferData(r.ARRAY_BUFFER, t.vertices, r.STATIC_DRAW), r.vertexAttribPointer(n.attributes.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer), r.bufferData(r.ARRAY_BUFFER, t.uvs, r.STATIC_DRAW), r.vertexAttribPointer(n.attributes.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.activeTexture(r.TEXTURE0), i._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id]) : this.renderer.updateTexture(i), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer), r.bufferData(r.ELEMENT_ARRAY_BUFFER, t.indices, r.STATIC_DRAW)) : (r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer), r.bufferSubData(r.ARRAY_BUFFER, 0, t.vertices), r.vertexAttribPointer(n.attributes.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer), r.vertexAttribPointer(n.attributes.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.activeTexture(r.TEXTURE0), i._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id]) : this.renderer.updateTexture(i), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer), r.bufferSubData(r.ELEMENT_ARRAY_BUFFER, 0, t.indices)), r.drawElements(o, t.indices.length, r.UNSIGNED_SHORT, 0)
            }, i.prototype._initWebGL = function(t) {
                var e = this.renderer.gl;
                t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.vertices, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), t.colors && (t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
            }, i.prototype.flush = function() {}, i.prototype.start = function() {
                var t = this.renderer.shaderManager.plugins.meshShader;
                this.renderer.shaderManager.setShader(t)
            }, i.prototype.destroy = function() {}
        }, {
            "../../core/renderers/webgl/WebGLRenderer": 48,
            "../../core/renderers/webgl/utils/ObjectRenderer": 62,
            "../Mesh": 124
        }],
        128: [function(t, e, r) {
            function i(t) {
                n.Shader.call(this, t, ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;", "}"].join("\n"), {
                    alpha: {
                        type: "1f",
                        value: 0
                    },
                    translationMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    }
                }, {
                    aVertexPosition: 0,
                    aTextureCoord: 0
                })
            }
            var n = t("../../core");
            i.prototype = Object.create(n.Shader.prototype), i.prototype.constructor = i, e.exports = i, n.ShaderManager.registerPlugin("meshShader", i)
        }, {
            "../../core": 29
        }],
        129: [function(t, e, r) {
            Object.assign || (Object.assign = t("object-assign"))
        }, {
            "object-assign": 12
        }],
        130: [function(t, e, r) {
            t("./Object.assign"), t("./requestAnimationFrame")
        }, {
            "./Object.assign": 129,
            "./requestAnimationFrame": 131
        }],
        131: [function(t, e, r) {
            (function(t) {
                if (Date.now && Date.prototype.getTime || (Date.now = function() {
                        return (new Date).getTime()
                    }), !t.performance || !t.performance.now) {
                    var e = Date.now();
                    t.performance || (t.performance = {}), t.performance.now = function() {
                        return Date.now() - e
                    }
                }
                for (var r = Date.now(), i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
                t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
                    if ("function" != typeof t) throw new TypeError(t + "is not a function");
                    var e = Date.now(),
                        i = 16 + r - e;
                    return 0 > i && (i = 0), r = e, setTimeout(function() {
                        r = Date.now(), t(performance.now())
                    }, i)
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [1])(1)
}), define("activity/5zhounian/shake/util", ["require", "exports"], function(require, exports) {
    exports.angleToRadian = function(t) {
        return t * Math.PI / 180
    }, exports.radianToAngle = function(t) {
        return 180 * t / Math.PI
    }, exports.cookie = function(t, e, r) {
        if (arguments.length > 1 && "[object Object]" !== String(e)) {
            if (null === e || void 0 === e) r.expires = -1;
            if ("number" == typeof r.expires) {
                var i = 24 * r.expires * 60 * 60 * 1e3,
                    n = r.expires = new Date;
                n.setTime(n.getTime() + i)
            }
            return e = String(e), document.cookie = [encodeURIComponent(t), "=", r.raw ? e : encodeURIComponent(e), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
        }
        r = e || {};
        var o = r.raw ? function(t) {
                return t
            } : decodeURIComponent,
            s = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(document.cookie);
        return s ? o(s[1]) : null
    }, exports.scroll = function(t, e) {
        t = t || ($.os.android ? 1 : 0), e = e || 200;
        var r = document.body.scrollTop,
            i = +new Date,
            n = i + e,
            o = function(t, e, r) {
                return t + (e - t) * r
            },
            s = function(t) {
                return -Math.cos(t * Math.PI) / 2 + .5
            },
            a = function() {
                var l = +new Date,
                    h = l > n ? 1 : (l - i) / e;
                window.scrollTo(0, o(r, t, s(h))), l > n || setTimeout(a, 15)
            };
        a()
    }
}), define("assets/js/loader", ["require", "./pixi"], function(require) {
    var t = require("./pixi"),
        e = t.loader;
    return e.add("bg", "/assets/img/bg.jpg"), e.load(), e
}), define("assets/js/global", ["require", "exports", "./loader", "./pixi"], function(require, exports) {
    function t(t, e, r) {
        var i = exports.constants.targetWidth;
        t.scale.x = t.scale.y = e / i
    }
    var e = require("./loader"),
        r = require("./pixi"),
        i = document.documentElement.clientWidth,
        n = document.documentElement.clientHeight;
    exports.loader = {
        loader: e,
        bgContainer: new r.Container,
        loaded: !1,
        loadImage: function(t, e, r) {
            e = e ? e : ".png", r = r ? r : exports.constants.imageBaseUrl;
            var i = [r, t, e].join("");
            this.loader.add(t, i)
        },
        animate: function(t) {
            t.animate = function() {
                if (t.specicAnimate) t.specicAnimate()
            }
        },
        loadCommon: function(t) {
            var e = this.bgContainer,
                i = this;
            if (this.loaded) this.animate(t), t.addChildAt(e, 0);
            else this.loader.on("complete", function(n, o) {
                if (!i.loaded) {
                    var s = new r.Sprite(o.bg.texture);
                    s.x = 0, s.y = 0, e.addChild(s), t.addChildAt(e, 0), i.animate(t), i.loaded = !0
                }
            })
        }
    }, exports.stage = {
        currentStage: {},
        loadNewStage: function(e) {
            if (this.currentStage && this.currentStage.dispose) this.currentStage.dispose();
            t(e, i, n), this.currentStage = e, exports.loader.loadCommon(e)
        }
    }, exports.constants = {
        countKey: "valentineShake",
        totalShakeX: 1e3,
        targetHeight: 1009,
        targetWidth: 640,
        imageBaseUrl: "/assets/img/",
        result: {
            tang: {
                time: {
                    min: 0,
                    max: 1
                },
                position: {
                    x: 36,
                    y: 160
                },
                score: 4
            },
            ning: {
                time: {
                    min: 1.01,
                    max: 1.5
                },
                position: {
                    x: 24,
                    y: -20
                },
                score: 3
            },
            dugu: {
                time: {
                    min: 1.51,
                    max: 4
                },
                position: {
                    x: 28,
                    y: 18
                },
                score: 2
            },
            li: {
                time: {
                    min: 4.01,
                    max: Math.min()
                },
                position: {
                    x: 38,
                    y: 30
                },
                score: 1
            }
        }
    }
}), define("assets/js/result", ["require", "exports", "./pixi", "./global", "./util"], function(require, exports) {
    var t = require("./pixi"),
        e = new t.Container,
        r = require("./global"),
        i = require("./util"),
        n = r.loader,
        o = r.constants;
    return n.loadImage("fetchBtn"),
        function(s, a) {
            function l(e, r, i, n) {
                var o = new t.Text(e, n || {});
                return o.x = r, o.y = i, o
            }

            function h(n, o) {
                function s() {
                    var t = window.CryptoJS.MD5((u[a].score + window.gift).toString()).toString(),
                        e = "/activity/valentine/shakeresult",
                        r = window.location.search;
                    if (r = r.slice(1)) {
                        var i = r.split("&"),
                            n = -1;
                        if (i.forEach(function(t, e) {
                                if (t.indexOf("score") > -1) n = e
                            }), n > -1) i.splice(n);
                        e += "?" + i.join("&") + "&score=" + t
                    } else e += "?score=" + t;
                    window.location = e, setTimeout(function() {}, 200)
                }
                var h = new t.Container;
                h.x = 198, h.y = 935;
                var c = {
                        font: "36px Helvetica bold",
                        fill: "#FFF"
                    },
                    d = {
                        font: "36px Helvetica bold",
                        fill: "#fee438"
                    },
                    p = l("您有", 0, 0, c),
                    f = l("次领取机会", 100, 0, c),
                    v = l("3", 80, 0, d);
                h.addChild(p), h.addChild(f), h.addChild(v);
                var g = i.cookie(r.constants.countKey);
                if (null === g) i.cookie(r.constants.countKey, 3, {
                    expires: 10
                }), v.text = 3;
                else v.text = parseInt(g, 10);
                e.addChild(h);
                var m = new t.Sprite(o[a].texture);
                m.x = u[a].position.x, m.y = u[a].position.y, e.addChild(m);
                var y = new t.Sprite(o.fetchBtn.texture);
                y.x = 49, y.y = 843, e.addChild(y), y.interactive = !0, y.on("touchstart", s)
            }
            n.loadImage(a);
            var u = o.result;
            return n.loader.once("complete", h), e
        }
}), define("assets/js/shake", ["require", "./pixi", "./global", "./result"], function(require) {
    var t, e, r = require("./pixi"),
        i = new r.Container,
        n = require("./global"),
        o = [],
        s = n.loader;
    s.loadImage("fat"), s.loadImage("shakeFatLeft"), s.loadImage("shakeFatRight");
    var a = {
            totalCount: 0,
            avaliableShake: 15,
            time: {
                startTime: 0,
                duration: 0,
                isValid: function() {
                    return this.startTime > 0
                },
                getDuration: function() {
                    return this.duration = ((Date.now() - this.startTime) / 1e3).toFixed(2), this.duration
                }
            }
        },
        l = a.time,
        h = {
            font: "90px Helvetica bold",
            fill: "#fffc00"
        },
        u = {
            font: "60px Helvetica bold",
            fill: "#ffffff"
        },
        c = new r.Text("0.00", h);
    c.x = 229, c.y = 212, i.addChild(c);
    var d = new r.Text("s", u);
    return d.x = 400, d.y = 233, i.addChild(d), n.loader.loader.once("complete", function(s, h) {
        function u(e) {
            if (t !== e) o.forEach(function(t) {
                if (t !== e) t.renderable = !1;
                else t.renderable = !0
            })
        }

        function d(t) {
            var e = Object.keys(n.constants.result),
                r = l.duration;
            if (t > n.constants.totalShakeX || r > 10) e.forEach(function(t) {
                var e = n.constants.result[t];
                if (r > e.time.min && r < e.time.max) {
                    var i = require("./result")(r, t);
                    n.stage.loadNewStage(i)
                }
            })
        }

        function p(t) {
            if (n.stage.currentStage === i) {
                var r = t.accelerationIncludingGravity,
                    o = $.os.iphone ? -1 : 1;
                if (e = r.x * o, Math.abs(r.x) > a.avaliableShake)
                    if (a.totalCount += Math.abs(r.x), !l.isValid()) l.startTime = Date.now()
            }
        }

        function f() {
            window.addEventListener("devicemotion", p, !1), i.interactive = !0
        }
        var v = new r.Sprite(h.fat.texture);
        v.position.x = 63, v.position.y = 339, o.push(v), i.addChild(v);
        var g = new r.Sprite(h.shakeFatLeft.texture);
        g.position.x = 0, g.position.y = 339, i.addChild(g), o.push(g);
        var m = new r.Sprite(h.shakeFatRight.texture);
        m.position.x = 131, m.position.y = 339, o.push(m), i.addChild(m), i.specicAnimate = function() {
            if (l.isValid()) c.text = l.getDuration();
            if (d(a.totalCount), e > -10) u(g);
            else if (-10 > e) u(m);
            else u(v);
            if (!e) u(v)
        }, f(), i.dispose = function() {
            window.removeEventListener("devicemotion", p), i = null
        }
    }), i
}), define("assets/js/ready", ["require", "./pixi", "./global", "./util", "./shake"], function(require) {
    var t = require("./pixi"),
        e = new t.Container,
        r = require("./global"),
        i = require("./util"),
        n = r.loader;
    return n.loadImage("bg1", ".jpg"), n.loadImage("start"), n.loader.once("complete", function(n, o) {
        function s(t) {
            r.stage.loadNewStage(require("./shake"))
        }

        function a(t, e) {
            t.on("touchstart", s, !1)
        }
        var l = new t.Sprite(o.bg1.texture);
        l.x = 0, l.y = 0, e.addChild(l);
        var h = new t.Sprite(o.start.texture);
        h.x = 260, h.y = 830, h.interactive = !0, h.anchor.set(.5, 1), e.addChild(h);
        var u = 0,
            c = 10,
            d = 0;
        e.specicAnimate = function() {
            if ($(document.body).addClass("opa"), 40 > u) d++;
            else d = 0;
            if (d > c) d = c;
            h.rotation = i.angleToRadian(d), u %= 50, u++
        }, a(h, h), e.dispose = function() {
            h.off("touchstart", s), $(document.body).removeClass("opa")
        }
    }), e
}), define("assets/js/portal", ["require", "./pixi", "./global", "./ready"], function(require) {
    var t = require("./pixi"),
        e = new t.Container,
        r = require("./global"),
        i = r.loader;
    i.loadImage("bgPortal", ".jpg"), i.loadImage("title"), i.loadImage("logo"), i.loadImage("begin"), i.loadImage("shoubaiLogo"), i.loadImage("fat1");
    var n = "lightapp" === window._MOVIE.sfromFun || "wise" === window._MOVIE.sfromFun;
    return i.loader.once("complete", function(i, o) {
        function s(t) {
            if (document.body.scrollTop + document.documentElement.clientHeight >= $(document).height()) r.stage.loadNewStage(require("./ready"))
        }

        function a() {
            p.interactive = !0, p.on("touchstart", function() {
                r.stage.loadNewStage(require("./ready"))
            }), $(window).on("touchend", s)
        }
        var l = new t.Sprite(o.bgPortal.texture);
        l.x = 0, l.y = 0, e.addChild(l);
        var h = new t.Sprite(o.title.texture);
        h.x = 0, h.y = 0, e.addChild(h);
        var u = 0;
        if (n) {
            var c = new t.Sprite(o.shoubaiLogo.texture);
            c.x = 24, c.y = 40, e.addChild(c), u = 200
        }
        var d = new t.Sprite(o.logo.texture);
        d.x = u, d.y = 16, e.addChild(d);
        var p = new t.Sprite(o.begin.texture);
        p.x = 315, p.y = 959, e.addChild(p);
        var f = new t.Sprite(o.fat1.texture);
        f.x = 0, f.y = 550, e.addChild(f), a(), e.dispose = function() {
            p.off("touchstart"), $(window).off("touchend", s)
        }
    }), e
}), define("assets/js/shakeFat", ["require", "./pixi", "./util", "./global", "./portal"], function(require) {
    function t() {
        var t = 0,
            e = 0;
        u.view.addEventListener("touchstart", function(e) {
            var r = e.touches[0];
            t = r.pageY
        });
        var r = function() {
            var t = 0;
            return function(e) {
                t = setTimeout(function() {
                    if (e) clearTimeout(t);
                    i.scroll(e, 1)
                }, 200)
            }
        }();
        u.view.addEventListener("touchmove", function(i) {
            var n = i.touches[0];
            e = n.pageY;
            var o = t - e;
            if (0 > o || o > 0 && document.body.scrollTop + document.documentElement.clientHeight < $(document).height()) r(o)
        })
    }

    function e() {
        if (window.requestAnimationFrame(e), d.currentStage.animate) d.currentStage.animate();
        u.render(d.currentStage)
    }
    var r = require("./pixi"),
        i = require("./util"),
        n = require("./global"),
        o = window.innerWidth,
        s = window.innerHeight,
        a = n.constants.targetWidth,
        l = n.constants.targetHeight;
    if (o / s > a / l) s = s * (o / s) / (a / l);
    var h = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio,
        u = r.autoDetectRenderer(o, s, {
            transparent: !0,
            autoResize: !0,
            resolution: h
        });
    u.interactive = !0, document.body.appendChild(u.view);
    var c = $(".loop-audio");
    if (c.length) c[0].play();
    $(u.view).one("touchstart", function() {
        if (c.length && $.os.ios) c[0].play()
    });
    var d = n.stage,
        p = require("./portal");
    d.loadNewStage(p), e(), t()
}), define("assets/js/index", ["require", "../../common/NATransfer", "../../common/NAShare", "../../../common/logger", "./shakeFat"], function(require) {
    require("../../common/NATransfer");
    var t = require("../../common/NAShare"),
        e = require("../../../common/logger");
    require("./shakeFat");
    var r = Box && Box.isBox && Box.version_compare(Box.version, "5.3") >= 0 && ("lightapp" === window._MOVIE.sfromFun || "wise" === window._MOVIE.sfromFun);
    if (r) $(".content").on("click", ".sdk", function(t) {
        var e = $(this),
            r = e.attr("href");
        if (/^\//.test(r)) r = window.location.origin + r;
        return Box.lightapp.invoke({
            appid: "2387396",
            url: r
        }), t.preventDefault(), !1
    });
    return {
        init: function(i) {
        	console.log(i);
            var n = location.href;
            if (-1 !== location.href.indexOf("?")) n += "&";
            else n += "?";
            if (n += "isShare=1", t.init({
                    title: $("title").text() || "百度糯米电影特惠活动",
                    imgUrl: i.NAShareImg || i.shareImg,
                    content: i.NAShareContent || i.shareContent,
                    url: n
                }), r) {
                var o = {
                    successcallback: "",
                    errorcallback: "",
                    options: {
                        type: "url",
                        iconUrl: i.shouBaiShareImg || i.shareImg,
                        imageUrl: i.shouBaiShareImg || i.shareImg,
                        content: i.shouBaiShareContent || i.shareContent,
                        linkUrl: n,
                        mediaType: "all",
                        title: $("title").text() || "百度糯米电影特惠活动"
                    }
                };
                if ("android" === Box.os.name && Box.version_compare(Box.version, "6.5") < 0) delete o.options.imageUrl;
                window.BoxShareData = o
            }
            window._MOVIE.statParam.da_src = i.page, e.init({
                da_src: i.page
            })
        }
    }
});
