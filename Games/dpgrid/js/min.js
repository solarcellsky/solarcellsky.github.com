! function() {
    function e(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }
    var t = "mobile-activity@0.4.15/entries/common/env.js",
        i = "mobile-activity@0.4.15/entries/common/huatuo_extend.js",
        n = "mobile-activity@0.4.15/entries/common/share.js",
        a = "mobile-activity@0.4.15/entries/module/lazyload.js",
        s = "mobile-activity@0.4.15/entries/module/listload.js",
        o = "mobile-activity@0.4.15/entries/module/mobiscroll.js",
        r = "mobile-activity@0.4.15/entries/module/qqapi.js",
        c = "mobile-activity@0.4.15/entries/module/toast.js",
        l = "mobile-activity@0.4.15/entries/module/url.js",
        p = "mobile-activity@0.4.15/entries/page/activity-detail-mobile.js",
        d = "mobile-activity@0.4.15/entries/page/activity-grid-game.js",
        m = "mobile-activity@0.4.15/entries/page/activity-index.js",
        u = "mobile-activity@0.4.15/entries/page/activity-pass.js",
        f = "mobile-activity@0.4.15/entries/page/apply-custom.js",
        g = "mobile-activity@0.4.15/entries/page/apply.js",
        h = "mobile-activity@0.4.15/entries/page/myactivity-list.js",
        v = "mobile-activity@0.4.15/entries/page/mypasscard-list.js",
        y = "mobile-activity@0.4.15/entries/page/myprize-detail.js",
        b = "mobile-activity@0.4.15/entries/page/myprize-list.js",
        x = "mobile-activity@0.4.15/entries/page/myscore-detail.js",
        j = "mobile-activity@0.4.15/entries/page/save.js",
        C = "mobile-activity@0.4.15/entries/page/score-list.js",
        T = "mobile-activity@0.4.15/entries/page/score-share.js",
        _ = "mobile-activity@0.4.15/entries/tpl/detail-response.html.js",
        w = "mobile-activity@0.4.15/entries/tpl/gridgame-result.html.js",
        k = "mobile-activity@0.4.15/entries/tpl/score-list.html.js",
        I = "mobile-promo-app@~0.1.0",
        J = "zepto@^1.2.1",
        A = "dot@~0.1.0",
        S = "util-m-toast@^1.1.0",
        U = "util-m-share@^1.0.13",
        D = "wepp-module-overlay@~0.3.0",
        z = "lazyload-zepto@~0.2.0",
        P = "dpapp@^1.0.2",
        R = "cookie@~0.2.0",
        O = [t, i, n, a, s, o, r, c, l, p, d, m, u, f, g, h, v, y, b, x, j, C, T, _, w, k],
        q = [I],
        $ = {
            "mobile-promo-app": I
        },
        F = $;
    define(d, [J, A, S, U, D, z, w, t], function(e, t, i, n, a) {
        var s = e("zepto"),
            o = e("../common/env"),
            r = e("dot"),
            c = e("../tpl/gridgame-result.html.js"),
            l = e("util-m-toast"),
            p = e("util-m-share"),
            d = e("wepp-module-overlay"),
            m = e("lazyload-zepto");
        t.init = function(e) {
            var t, i = function(e) {
                    e = e || {};
                    var t = this,
                        i = s(".card"),
                        n = s(".J_card");
                    t.isTurning = !1, t.ajaxConfig = {
                        type: e.type || "GET",
                        url: e.url,
                        data: e.data || {},
                        dataType: e.dataType || "json"
                    }, t.$targetCard, t.init = function() {
                        t.isTurning = !0, n.addClass("rolling"), setTimeout(function() {
                            for (var e = 0; e < n.length; e++) i.eq(e).addClass("xipai" + (e + 1))
                        }, 1e3), setTimeout(function() {
                            t.isTurning = !1
                        }, 3e3), n.on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), t.$targetCard = s(this), t._send(t._sendSuccc, t._sendFail)
                        })
                    }, t._sendSuccc = function(i) {
                        n.off("click"), "function" == typeof e.success ? e.success(t.$targetCard, i) : ""
                    }, t._sendFail = function() {
                        "function" == typeof e.failed ? e.failed() : ""
                    }, t._send = function(e, i) {
                        t.isTurning || s.ajax({
                            type: t.ajaxConfig.type,
                            url: t.ajaxConfig.url,
                            data: t.ajaxConfig.data,
                            dataType: t.ajaxConfig.dataType,
                            beforeSend: function() {
                                t.isTurning = !0
                            },
                            success: function(t) {
                                t && t.code && e(t)
                            },
                            error: function() {
                                i(), l.toggle("点小评开小差啦~请稍后再试")
                            },
                            complete: function() {
                                t.isTurning = !1
                            }
                        })
                    }, t.init()
                },
                n = function(i, n) {
                    if (i && i.length)
                        if (200 == n.code && n.msg) {
                            for (var p = n.msg.state, m = parseInt(n.msg.num), u = n.msg.master, f = ["", "score", "pass", "empty", "score-10", "score-20", "score-50"], g = [{
                                    state: 1,
                                    status: f[1]
                                }, {
                                    state: 2,
                                    status: f[2]
                                }, {
                                    state: 3,
                                    status: f[3]
                                }], h = i.find(".J_backy"), v = 0; v < f.length; v++) h.removeClass(f[v]);
                            for (var v = 0; v < g.length; v++)
                                if (parseInt(p) == g[v].state) {
                                    h.addClass(g[v].status), 1 == parseInt(p) && m && h.addClass(g[v].status + "-" + m);
                                    break
                                }
                            i.addClass("rollback"), setTimeout(function() {
                                t = t || new d(200, !0), t.show();
                                var i, o = [],
                                    l = [];
                                u ? 3 == p ? (o.push("哎呀！就差一点点"), o.push("叫小伙伴来帮我翻！"), l.push({
                                    type: "share",
                                    txt: "呼唤小伙伴"
                                })) : (o.push("哇！恭喜您翻中"), 2 == p ? o.push("PASS卡") : o.push(m + "霸气值"), o.push("离霸王餐又近了一点！"), l.push({
                                    type: "redir",
                                    txt: 2 == p ? "查看我的PASS卡" : "查看我的霸气值",
                                    url: 2 == p ? "/mobile/event/mypasscard" : "/mobile/event/arro/myarrogant"
                                }), l.push({
                                    type: "share",
                                    txt: "把喜气分享给小伙伴"
                                })) : (3 == p ? (o.push("哎呀！就差一点点"), o.push("帮自己也翻翻牌吧！")) : (o.push("哇！帮TA翻中"), 2 == p ? o.push("PASS卡") : o.push(m + "霸气值"), l.push({
                                    type: "share",
                                    txt: "叫TA请我吃饭"
                                })), l.push({
                                    type: "redir",
                                    txt: "我也要翻",
                                    url: e.myurl
                                })), n.msg.txtType = o, n.msg.btnsType = l, i = s(r.template(c)(n.msg)).appendTo(s("body")), a(i)
                            }, 2e3)
                        } else 201 == n.code ? l.toggle("哎呀~今天翻过啦，明天再来吧~") : 501 == n.code && n.msg ? o.redirectToLogin(!0, n.msg.url) : l.toggle("点小评开小差啦~请稍后再试")
                },
                a = function(i) {
                    if (i && i.length) {
                        var n = i.find(".J_close"),
                            a = i.find(".J_share");
                        n.on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), i.remove(), t.hide()
                        }), a.length && e.shareConfig && new p({
                            title: e.shareConfig.title,
                            desc: e.shareConfig.desc,
                            url: e.shareConfig.url,
                            image: e.shareConfig.image,
                            content: e.shareConfig.desc,
                            channelDPApp: [0, 1],
                            channelWX: [0, 1]
                        }, {
                            hide: !1,
                            btn: a
                        })
                    }
                },
                u = function() {
                    function e() {
                        o++, c = o * n, t(i, r, c, 500), r = c, o == a ? setTimeout(function() {
                            i.css({
                                "-webkit-transform": "translate3d(0,-" + n + "px,0)",
                                transform: "translate3d(0,-" + n + "px,0)",
                                "-webkit-transition-duration": "0s",
                                "transition-duration": "0s"
                            }), setTimeout(function() {
                                o = 1, r = n, e()
                            }, 1e3)
                        }, 1e3) : setTimeout(function() {
                            e()
                        }, 1500)
                    }

                    function t(e, t, i, n) {
                        var a = Math.floor(n / 16),
                            s = (i - t) / a,
                            o = 0;
                        e.css({
                            "-webkit-transform": "translate3d(0,-" + t + "px,0)",
                            transform: "translate3d(0,-" + t + "px,0)"
                        });
                        var r = setInterval(function() {
                            o++, o == a ? clearInterval(r) : o == a - 1 ? e.css({
                                "-webkit-transform": "translate3d(0,-" + i + "px,0)",
                                transform: "translate3d(0,-" + i + "px,0)"
                            }) : e.css({
                                "-webkit-transform": "translate3d(0,-" + (t + o * s) + "px,0)",
                                transform: "translate3d(0,-" + (t + o * s) + "px,0)"
                            })
                        }, 16)
                    }
                    var i = s(".J_lucky_list"),
                        n = 28,
                        a = i.find("li").length + 1,
                        o = 0,
                        r = 0,
                        c = 0;
                    i.find("li").eq(0).clone().appendTo(i), e()
                };
            s(function() {
                var a = s(".J_rec_box"),
                    o = s(".J_start"),
                    r = s(".J_share"),
                    c = s(".J_rule"),
                    l = s(".J_rule_box");
                o.on("click", function() {
                    a.remove(), new i({
                        url: "/mobile/event/ajax/grid",
                        data: {
                            mid: e.mid,
                            oid: e.oid,
                            eid: e.eid,
                            from: e.from,
                            nickname: e.nickname,
                            avatar: e.avatar
                        },
                        success: n
                    })
                }), c.on("click", function(e) {
                    e.preventDefault(), e.stopPropagation(), t = t || new d(200, !0), t.show(), l.removeClass("Hide")
                }), l.find(".J_close").on("click", function(e) {
                    e.preventDefault(), e.stopPropagation(), l.addClass("Hide"), t.hide()
                }), new p({
                    title: e.shareConfig.title,
                    desc: e.shareConfig.desc,
                    url: e.shareConfig.url,
                    image: e.shareConfig.image,
                    content: e.shareConfig.desc,
                    channelDPApp: [0, 1],
                    channelWX: [0, 1]
                }, {
                    hide: !1,
                    btn: r
                }), u(), m(s("img"))
            })
        }
    }, {
        asyncDeps: q,
        entries: O,
        map: e({
            "../tpl/gridgame-result.html.js": w,
            "../common/env": t
        }, F)
    }), define(w, [], function(e, t, i, n, a) {
        i.exports = '<div class="container"><div class="toast-box"><p class="hd">{{?it.state == 1 && it.num}}<i class="logo score"></i>{{??it.state == 2}}<i class="logo pass"></i>{{??}}<i class="logo empty"></i>{{?}}<a class="close J_close" href="javascript:;"></a></p><div class="con">{{~it.txtType:txt:index}}{{?index%2==0}}<p class="txt-secondary">{{=txt}}</p>{{??}}<p class="txt-highlight">{{=txt}}</p>{{?}}{{~}}</div>{{~it.btnsType:btn:index}}{{?btn.type == \'share\'}}<div class="btn-wrap"><a class="btn btn-bg-secondery J_share" href="javascript:;">{{=btn.txt}}</a></div>{{??btn.type == \'close\'}}<div class="btn-wrap"><a class="btn btn-bg-plain J_close" href="javascript:;">{{=btn.txt}}</a></div>{{??}}<div class="btn-wrap"><a class="btn btn-bg-primary" href="{{=btn.url}}">{{=btn.txt}}</a></div>{{?}}{{~}}</div></div>'
    }, {
        asyncDeps: q,
        entries: O,
        map: F
    }), define(t, [P, R], function(e, t, i, n, a) {
        var s = e("dpapp"),
            o = e("cookie"),
            r = location.protocol;
        i.exports = {
            cache: {},
            getDomain: function() {
                return -1 !== location.href.indexOf(".dianping.com") ? r + "//m.dianping.com" : -1 !== location.href.indexOf(".51ping.com") ? r + "//m.51ping.com" : r + "//m.51ping.com"
            },
            getUserInfo: function(e) {
                var t = this;
                this.cache.user ? e(this.cache.user) : this.isApp() ? s.getUserInfo({
                    success: function(i) {
                        t.cache.user = i, e(i)
                    }
                }) : (t.cache.user = o("dper"), e(t.cache.user))
            },
            isApp: function() {
                var e = s.getUA();
                return !(!e || !e.appVersion)
            },
            redirectToLogin: function(e, t) {
                var i = t || location.href;
                this.isApp() ? s.login({
                    success: function(t) {
                        e ? (i = decodeURIComponent(i), i = -1 == i.indexOf("dianping://") ? "dianping://web?url=" + encodeURIComponent(i) : encodeURIComponent(i), s.jumpToScheme({
                            url: i
                        })) : location.href = i
                    }
                }) : (i = this.getDomain() + "/login?redir=" + encodeURIComponent(i), e ? location.replace(i) : location.href = i)
            },
            redirect: function(e, t, i) {
                var e = e ? decodeURIComponent(e) : location.href,
                    n = [];
                for (var a in i) n.push(a + "=" + i[a]); - 1 == e.indexOf("?") && n.length ? e += "?" + n.join("&") : n.length && (e += "&" + n.join("&")), this.isApp() ? t ? s.jumpToScheme({
                    url: -1 == e.indexOf("dianping://") ? "dianping://web?url=" + encodeURIComponent(e) : encodeURIComponent(e)
                }) : s.openScheme({
                    url: -1 == e.indexOf("dianping://") ? "dianping://web?url=" + encodeURIComponent(e) : encodeURIComponent(e)
                }) : t ? location.replace(e) : location.href = e
            }
        }
    }, {
        asyncDeps: q,
        entries: O,
        map: F
    })
}();
//# sourceMappingURL=entries/page/activity-grid-game.js.map

! function() {
    var i = "mobile-activity@0.4.15/entries/common/env.js",
        e = "mobile-activity@0.4.15/entries/common/huatuo_extend.js",
        t = "mobile-activity@0.4.15/entries/common/share.js",
        s = "mobile-activity@0.4.15/entries/module/lazyload.js",
        a = "mobile-activity@0.4.15/entries/module/listload.js",
        l = "mobile-activity@0.4.15/entries/module/mobiscroll.js",
        o = "mobile-activity@0.4.15/entries/module/qqapi.js",
        m = "mobile-activity@0.4.15/entries/module/toast.js",
        c = "mobile-activity@0.4.15/entries/module/url.js",
        r = "mobile-activity@0.4.15/entries/page/activity-detail-mobile.js",
        n = "mobile-activity@0.4.15/entries/page/activity-grid-game.js",
        y = "mobile-activity@0.4.15/entries/page/activity-index.js",
        p = "mobile-activity@0.4.15/entries/page/activity-pass.js",
        v = "mobile-activity@0.4.15/entries/page/apply-custom.js",
        b = "mobile-activity@0.4.15/entries/page/apply.js",
        j = "mobile-activity@0.4.15/entries/page/myactivity-list.js",
        d = "mobile-activity@0.4.15/entries/page/mypasscard-list.js",
        g = "mobile-activity@0.4.15/entries/page/myprize-detail.js",
        u = "mobile-activity@0.4.15/entries/page/myprize-list.js",
        h = "mobile-activity@0.4.15/entries/page/myscore-detail.js",
        f = "mobile-activity@0.4.15/entries/page/save.js",
        x = "mobile-activity@0.4.15/entries/page/score-list.js",
        z = "mobile-activity@0.4.15/entries/page/score-share.js",
        q = "mobile-activity@0.4.15/entries/tpl/detail-response.html.js",
        D = "mobile-activity@0.4.15/entries/tpl/gridgame-result.html.js",
        _ = "mobile-activity@0.4.15/entries/tpl/score-list.html.js",
        k = "mobile-promo-app@~0.1.0",
        w = "mobile-activity@0.4.15/index.js",
        A = [i, e, t, s, a, l, o, m, c, r, n, y, p, v, b, j, d, g, u, h, f, x, z, q, D, _],
        B = [k],
        C = {
            "mobile-promo-app": k
        },
        E = C;
    define(w, [], function(i, e, t, s, a) {}, {
        asyncDeps: B,
        entries: A,
        main: !0,
        map: E
    })
}();
//# sourceMappingURL=mobile-activity.js.map
