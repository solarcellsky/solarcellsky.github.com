/*! Copyright (c) ZUIKU.COM */
define(function(require, exports, module) {
    function a() {
        cc.game.onStart = function() {
            cc.view.adjustViewPort(!0), n ? cc.view.setDesignResolutionSize(640, 1008, cc.ResolutionPolicy.EXACT_FIT) : cc.view.setDesignResolutionSize(640, 1008, cc.ResolutionPolicy.SHOW_ALL), cc.view.resizeWithBrowserSize(!0), m.preload(l, function() {
                cc.director.runScene(new k)
            }, this)
        }, cc.game.run("gameCanvas")
    }
    var b = require("mod/se/cmd"),
        c = require("mod/se/util"),
        d = require("mod/se/stat"),
        e = require(""),
        f = b.ResponseTypes,
        g = function(a) {
            var b = new Image;
            b.src = a
        };
    $.dataConf = {
        score: 0,
        percent: 0
    };
    var h = function(a) {
            if (1 == a) {
                var b = 0;
                return b = Math.floor(3 * Math.random()), titleArr[b]
            }
            var c = 3;
            return c = Math.floor(2 * Math.random()) + 3, titleArr[c]
        },
        i = $.weixin = function() {
            _au.play();
            var a = navigator.userAgent.toLowerCase();
            if (-1 == a.indexOf("micromessenger")) return d.send("pv"), 0;
            var i = e.MetaData,
                j = (i.shareTitle, i.descContent, i.lineLink),
                k = i.imgUrl,
                l = {
                    imgUrl: k,
                    link: j,
                    title: h(1),
                    desc: h(2),
                    success: function() {
                        i.shareClick && g(i.shareClick), i.shareRedirectUrl && (location.href = i.shareRedirectUrl), d.send("share")
                    }
                },
                m = {
                    weixin: {
                        bin: {
                            sign: {
                                url: "/service/share/weixinsign",
                                data: "url=${url}",
                                method: "POST",
                                cross: !1,
                                spa: !1,
                                replace: !1,
                                cache: "auto",
                                append: "auto",
                                dataType: f.J
                            }
                        }
                    }
                };
            b.injectCommands(m);
            var n = location.href,
                o = encodeURIComponent(n.replace(/(#[\w\W]*)/, "")),
                p = {
                    url: o
                };
            b.exec("weixin.bin.sign", p, {
                context: {
                    showLoading: !1,
                    allow: "" + i.allow == "1"
                },
                success: function(a) {
                    var b = String(a.code),
                        c = (a.msg, this.allow);
                    "10" === b && e.configure({
                        debug: !1,
                        appId: a.appId,
                        timestamp: a.timestamp,
                        nonceStr: a.nonceStr,
                        signature: a.signature,
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "chooseWXPay", "showOptionMenu", "hideOptionMenu", "getNetworkType", "onMenuShareQZone"]
                    }).error({
                        callback: function() {
                            d.send("pv")
                        }
                    }).success({
                        getNetworkType: {
                            callback: function(a) {
                                var b = {
                                    success: function(a) {
                                        var b = a.networkType;
                                        d.setNetwork(b), d.send("pv")
                                    }
                                };
                                this.invoke(a, b)
                            },
                            args: [],
                            context: e
                        },
                        showOptionMenu: {
                            callback: function(a, b, c) {
                                !0 === c && this.invoke(a, b)
                            },
                            args: [{}, c],
                            context: e
                        },
                        hideOptionMenu: {
                            callback: function(a, b, c) {
                                !0 !== c && this.invoke(a, b)
                            },
                            args: [{}, c],
                            context: e
                        },
                        onMenuShareTimeline: {
                            callback: function(a, b) {
                                this.invoke(a, b)
                            },
                            args: [l],
                            context: e
                        },
                        onMenuShareAppMessage: {
                            callback: function(a, b) {
                                this.invoke(a, b)
                            },
                            args: [l],
                            context: e
                        },
                        onMenuShareQQ: {
                            callback: function(a, b) {
                                this.invoke(a, b)
                            },
                            args: [l],
                            context: e
                        },
                        onMenuShareWeibo: {
                            callback: function(a, b) {
                                this.invoke(a, b)
                            },
                            args: [l],
                            context: e
                        },
                        onMenuShareQZone: {
                            callback: function(a, b) {
                                this.invoke(a, b)
                            },
                            args: [l],
                            context: e
                        }
                    })
                },
                error: function(a, b) {
                    c.RequestStatus[b]
                }
            })
        },
        j = require("logic/qiangpiao/game1"),
        k = j.beginScene,
        l = (j.gameScene1, j.gameScene2, j.gameScene3, j.loadingSprite, []),
        m = cc.Scene.extend({
            _interval: null,
            _length: 0,
            _count: 0,
            _label: null,
            _className: "MyLoaderScene",
            init: function() {
                var a = this,
                    b = a._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
                b.setPosition(cc.visibleRect.bottomLeft), a.addChild(b, 0);
                var c = cc.director.getWinSize(),
                    d = cc.Sprite.create(res.loadingpage);
                d.setPosition(c.width / 2, c.height / 2), b.addChild(d, 0);
                var e = cc.sequence(cc.progressTo(15, 100)),
                    f = (cc.sequence(cc.progressTo(2, 100), cc.progressTo(0, 0)), new cc.ProgressTimer(new cc.Sprite(res.loading)));
                f.type = cc.ProgressTimer.TYPE_BAR, f.midPoint = cc.p(0, 0), f.barChangeRate = cc.p(1, 0), this.addChild(f), f.x = 30, f.y = 510, f.runAction(e);
                var g = a._label = cc.LabelTTF.create("0%", "Arial", 90);
                return g.setPosition(c.width / 2 + 70, c.height / 2 - 62), g.setColor(cc.color(0, 0, 0)), a._label.visible = !1, b.addChild(this._label, 10), !0
            },
            _initStage: function(a, b) {
                var c = this,
                    d = c._texture2d = new cc.Texture2D;
                d.initWithElement(a), d.handleLoadedTexture();
                var e = c._logo = cc.Sprite.create(d);
                e.setScale(cc.contentScaleFactor()), e.x = b.x, e.y = b.y, c._bgLayer.addChild(e, 10)
            },
            onEnter: function() {
                var a = this;
                cc.Node.prototype.onEnter.call(a), a.schedule(a._startLoading, .3), a.schedule(a._updatePercent, .3)
            },
            onExit: function() {
                cc.Node.prototype.onExit.call(this);
                var a = "100%";
                this._label.setString(a)
            },
            initWithResources: function(a, b) {
                "string" == typeof a && (a = [a]), this.resources = a || [], this.cb = b
            },
            _startLoading: function() {
                var a = this;
                a.unschedule(a._startLoading);
                var b = a.resources;
                cc.loader.load(b, function(b, c, d) {
                    var e = d / c * 100 | 0;
                    e = Math.min(e, 100), a._label.setString("" + e + "%")
                }, function() {
                    a.cb && a.cb()
                })
            },
            _updatePercent: function() {
                var a = this,
                    b = a._count,
                    c = a._length,
                    d = b / c * 100 | 0;
                d = Math.min(d, 100), a._label.setString("" + d + "%"), b >= c && a.unschedule(a._updatePercent)
            }
        });
    m.preload = function(a, b) {
        var c = null;
        return c || (c = new m, c.init()), c.initWithResources(a, b), cc.director.runScene(c), c
    };
    var n = !1;
    n = /AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent) ? !0 : !1, i(), module.exports = {
        setResource: function(b) {
            l = b, a()
        }
    }
});
