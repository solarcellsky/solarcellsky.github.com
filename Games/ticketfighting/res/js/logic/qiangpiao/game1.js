/*! Copyright (c) ZUIKU.COM */
define(function(require, exports, module) {
    function a(a, b) {
        var c = b - a,
            d = Math.random();
        return a + Math.round(d * c)
    }
    var b = {
            width: 640,
            height: 1e3
        },
        c = ([res.lives0, res.lives1, res.lives2, res.lives3, res.lives4, res.lives5], [{
            x: 151,
            y: 820
        }, {
            x: 186,
            y: 676
        }, {
            x: 128,
            y: 480
        }, {
            x: 124,
            y: 334
        }, {
            x: 263,
            y: 233
        }, {
            x: 549,
            y: 791
        }, {
            x: 558,
            y: 623
        }, {
            x: 556,
            y: 455
        }, {
            x: 554,
            y: 289
        }, {
            x: 357,
            y: 577
        }, {
            x: 343,
            y: 420
        }]),
        d = [{
            res: res.spr1,
            type: 1
        }, {
            res: res.spr2,
            type: 2
        }],
        e = [{
            x: 128,
            y: 908
        }, {
            x: 165,
            y: 762
        }, {
            x: 103,
            y: 567
        }, {
            x: 102,
            y: 421
        }, {
            x: 240,
            y: 320
        }, {
            x: 528,
            y: 878
        }, {
            x: 537,
            y: 709
        }, {
            x: 533,
            y: 543
        }, {
            x: 533,
            y: 377
        }, {
            x: 334,
            y: 664
        }, {
            x: 322,
            y: 504
        }],
        f = [],
        g = [res.tip1, res.tip2, res.tip3, res.tip4, res.tip5, res.tip6],
        h = [res.tip7, res.tip8, res.tip9],
        i = !1,
        j = !1,
        k = !1,
        l = !0,
        m = !1,
        n = !1,
        o = !1,
        p = [{
            x1: -150,
            y1: b.height - 200,
            x2: 170,
            y2: 350
        }, {
            x1: b.width + 140,
            y1: b.height - 200,
            x2: b.width - 160,
            y2: 350
        }],
        q = null,
        r = cc.Scene.extend({
            y1: 0,
            y2: 0,
            ctor: function() {
                this._super(), this.init()
            },
            init: function() {
                var a = cc.director.getWinSize(),
                    b = new cc.Sprite(res.beginBg);
                b.x = a.width / 2, b.y = a.height / 2, this.addChild(b, 0);
                var c = new cc.MenuItemImage(res.beginBtn, res.beginBtn, this.beginBtnCall, this);
                this.beginMenu = new cc.Menu(c), this.addChild(this.beginMenu), this.beginMenu.x = a.width / 2, this.beginMenu.y = a.height / 2 - 330, this.wz_1 = new cc.Sprite(res.wenzi1), this.wz_1.x = a.width / 2, this.wz_1.y = a.height / 2, this.addChild(this.wz_1, 10), this.loadListener()
            },
            beginBtnCall: function() {
                cc.director.runScene(new s)
            },
            onExit: function() {
                this.removeAllChildrenWithCleanup(!0)
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = a.getLocation(),
                    d = b.convertToNodeSpace(a.getLocation()),
                    e = b.getContentSize(),
                    f = cc.rect(0, 0, e.width, e.height);
                return cc.rectContainsPoint(f, d) ? (b.y1 = c.y, !0) : !1
            },
            onTouchMoved: function() {
                this.target
            },
            onTouchEnded: function(a) {
                var b = this.target,
                    c = a.getLocation();
                b.y2 = c.y, b.removeChild(b.wz_1), b.removeChild(b.wzLayer)
            }
        }),
        s = cc.Scene.extend({
            tick: 0,
            checkNum: 4,
            beginReduce: !1,
            ctor: function() {
                this._super();
                var a = new cc.Sprite(res.begin);
                a.x = b.width / 2, a.y = b.height / 2, this.addChild(a, 0), this.wz_2 = new cc.Sprite(res.guize), this.wz_2.x = b.width / 2, this.wz_2.y = b.height / 2, this.scheduleUpdate()
            },
            Call: function() {
                cc.director.runScene(new t)
            },
            update: function() {
                var a = this;
                this.tick++, this.tick % 300 != 0 || this.beginReduce || (a.addChild(this.wz_2, 10), a.loadListener(), a.beginReduce = !0)
            },
            onExit: function() {
                this.removeAllChildrenWithCleanup(!0)
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                return cc.rectContainsPoint(e, c) ? (b.Call(), !0) : !1
            },
            onTouchMoved: function() {},
            onTouchEnded: function() {}
        }),
        t = cc.Scene.extend({
            scoreLabel: null,
            scoreNum: 0,
            timeNum: 10,
            loadNum: 100,
            tick: 0,
            tick1: 0,
            tick1Num: 3,
            hitPerson: !1,
            hitPersonNum: 0,
            gameBegin: !1,
            hitHuangniuNum: 0,
            ctor: function() {
                this._super(), this.initBasic(), this.initDong(), this.scheduleUpdate()
            },
            update: function() {
                if (this.gameBegin) {
                    if (this.tick++, this.tick % 60 == 0 && (this.timeNum--, this.timeNum <= 0)) return this.unscheduleUpdate(), void this.overCall();
                    if (this.tick % 6 == 0 && (this.loadNum--, this.timeLoadingBar.setPrecent(this.loadNum)), this.tick % 30 == 0) {
                        var b = a(0, 9);
                        f[b].visible = !0;
                        var c = cc.scaleTo(.8, 1),
                            d = cc.delayTime(.15),
                            e = cc.callFunc(function() {
                                this.reSet(this)
                            }, f[b]),
                            g = cc.sequence(c, d, e);
                        f[b].runAction(g)
                    }
                } else this.tick1++, this.tick1 % 60 == 0 && (this.tick1Num--, 2 == this.tick1Num ? this.daoshu.initWithFile(res.GO2) : 1 == this.tick1Num ? this.daoshu.initWithFile(res.GO1) : 0 == this.tick1Num ? this.daoshu.initWithFile(res.GO0) : -1 == this.tick1Num && (this.gameBegin = !0, this.removeChild(this.daoshu)))
            },
            overCall: function() {
                this.addChild(this.endTip1, 102), this.addChild(this.endNum, 102);
                var b = a(1e4, 5e4);
                this.endNum.setString("" + b), this.loadListener()
            },
            Call: function() {
                cc.director.runScene(new w(res.endBg1, res.wz_tip1, this.scoreNum, 1))
            },
            initBasic: function() {
                var a = new cc.Sprite(res.main1);
                a.x = b.width / 2, a.y = b.height / 2, this.addChild(a, 0), this.tipImg = new cc.Sprite, this.tipImg.anchorX = 0, this.tipImg.x = 65, this.tipImg.y = 130, this.addChild(this.tipImg, 0), this.daoshu = new cc.Sprite(res.GO3), this.daoshu.x = b.width / 2, this.daoshu.y = b.height - 100, this.addChild(this.daoshu, 100), this.timeLoadingBar = new y(113, 48, 100, res.timeloading), this.timeLoadingBar.setPrecent(100), this.addChild(this.timeLoadingBar, 10), this.endTip1 = new cc.Sprite(res.endTip1), this.endTip1.x = b.width / 2, this.endTip1.y = b.height / 2, this.endNum = new cc.LabelTTF("", "Arial", 48), this.endNum.x = b.width / 2 - 28, this.endNum.y = b.height - 310, this.endNum.fillStyle = cc.color(255, 255, 255)
            },
            initDong: function() {
                for (var a = 0; a < c.length; a++) {
                    var b = new cc.Sprite(res.hole);
                    b.x = c[a].x, b.y = c[a].y, this.addChild(b)
                }
                for (var a = 0; a < e.length; a++) f[a] = new z(this, e[a].x, e[a].y), f[a].visible = !1, this.addChild(f[a])
            },
            onExit: function() {
                this.removeAllChildrenWithCleanup(!0)
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                return cc.rectContainsPoint(e, c) ? (b.Call(), !0) : !1
            },
            onTouchMoved: function() {},
            onTouchEnded: function() {}
        }),
        u = cc.Scene.extend({
            scoreLabel: null,
            scoreNum: 20,
            timeLabel: null,
            timeNum: 10,
            hitNum: 0,
            tick: 0,
            tick1: 0,
            tick1Num: 3,
            mainPerson: null,
            left: null,
            right: null,
            loadNum: 100,
            gameBegin: !1,
            ctor: function() {
                this._super(), this.initBasic(), this.scheduleUpdate()
            },
            initBasic: function() {
                var a = new cc.Sprite(res.main2);
                a.x = b.width / 2, a.y = b.height / 2, this.addChild(a, 0), this.tipImg = new cc.Sprite, this.tipImg.anchorX = 0, this.tipImg.x = 65, this.tipImg.y = 130, this.addChild(this.tipImg, 0), this.mainPerson = new A(this, res.normal), this.addChild(this.mainPerson, 10), this.mainPerson.x = b.width / 2, this.mainPerson.y = b.height / 2, this.daoshu = new cc.Sprite(res.GO3), this.daoshu.x = b.width / 2, this.daoshu.y = b.height - 100, this.addChild(this.daoshu, 100), this.timeLoadingBar = new y(113, 48, 100, res.timeloading), this.timeLoadingBar.setPrecent(100), this.addChild(this.timeLoadingBar, 100);
                var c = cc.moveTo(.3, cc.p(p[0].x2, p[0].y2)),
                    d = cc.callFunc(function() {
                        this.left.x = p[0].x1, this.left.y = p[0].y1, this.check()
                    }, this);
                this.L_seq = cc.sequence(c, d);
                var e = cc.moveTo(.3, cc.p(p[1].x2, p[1].y2)),
                    f = cc.callFunc(function() {
                        this.right.x = p[1].x1, this.right.y = p[1].y1, this.check()
                    }, this);
                this.R_seq = cc.sequence(e, f), this.left = new cc.Sprite(res.left), this.left.x = p[0].x1, this.left.y = p[0].y1, this.left.scale = 1.5, this.addChild(this.left), this.right = new cc.Sprite(res.right), this.right.x = p[1].x1, this.right.y = p[1].y1, this.right.scale = 1.5, this.addChild(this.right), this.endTip2 = new cc.Sprite(res.endTip2), this.endTip2.x = b.width / 2, this.endTip2.y = b.height / 2, this.addChild(this.endTip2, 105), this.endTip2.visible = !1
            },
            update: function() {
                if (this.gameBegin) {
                    if (this.tick++, this.tick % 60 == 0) {
                        if (this.timeNum <= 0) return this.unscheduleUpdate(), void this.overCall();
                        this.timeNum--
                    }
                    if (this.hitNum >= 3) return this.unscheduleUpdate(), void this.overCall();
                    if (this.tick % 6 == 0 && (this.loadNum--, this.timeLoadingBar.setPrecent(this.loadNum)), this.tick % 100 == 0) {
                        var b = a(1, 2);
                        1 == b ? (this.left.runAction(this.L_seq), q = "L_foot") : (this.right.runAction(this.R_seq), q = "R_foot")
                    }
                } else this.tick1++, this.tick1 % 60 == 0 && (this.tick1Num--, 2 == this.tick1Num ? this.daoshu.initWithFile(res.GO2) : 1 == this.tick1Num ? this.daoshu.initWithFile(res.GO1) : 0 == this.tick1Num ? this.daoshu.initWithFile(res.GO0) : -1 == this.tick1Num && (this.gameBegin = !0, this.removeChild(this.daoshu), n = !0))
            },
            check: function() {
                var a = this;
                "L_foot" == q ? this.mainPerson.x <= 330 && (console.log("l_hit"), this.mainPerson.stopAllActions(), this.mainPerson.addAnimation(res.ani1), setTimeout(function() {
                    a.mainPerson.stopAllActions(), a.mainPerson.initWithFile(res.normal)
                }, 1e3), this.hitNum++, this.scoreNum -= 5, l && (l = !1, this.doOut()), _au2.play()) : this.mainPerson.x >= 290 && (console.log("r_hit"), this.mainPerson.stopAllActions(), this.mainPerson.addAnimation(res.ani2), setTimeout(function() {
                    a.mainPerson.stopAllActions(), a.mainPerson.initWithFile(res.normal)
                }, 1e3), this.hitNum++, this.scoreNum -= 5, l && (l = !1, this.doOut()), _au2.play())
            },
            overCall: function() {
                this.endTip2.visible = !0, this.loadListener(), n = !1, this.tipImg.stopAllActions()
            },
            Call: function() {
                cc.director.runScene(new w(res.endBg2, res.wz_tip2, this.scoreNum, 2))
            },
            doOut: function() {
                var b = this,
                    c = a(0, 2);
                b.tipImg.initWithFile(h[c]), b.tipImg.anchorX = 0;
                var d = cc.fadeIn(.01),
                    e = cc.delayTime(5),
                    f = cc.fadeOut(.01),
                    g = cc.callFunc(function() {
                        l = !0
                    }, this),
                    i = cc.sequence(d, e, f, g);
                b.tipImg.runAction(i)
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                return cc.rectContainsPoint(e, c) ? (b.Call(), !0) : !1
            },
            onTouchMoved: function() {},
            onTouchEnded: function() {}
        }),
        v = cc.Scene.extend({
            tick: 0,
            tick1: 0,
            tick1Num: 3,
            scoreNum: 0,
            scoreLabel: null,
            timeLabel: null,
            timeNum: 10,
            loadNum: 300,
            gameBegin: !1,
            addTip: !0,
            ctor: function() {
                this._super(), this.initBasic(), this.scheduleUpdate()
            },
            initBasic: function() {
                var a = new cc.Sprite(res.main3);
                a.x = b.width / 2, a.y = b.height / 2, this.addChild(a, 0), this.upTip = new cc.Sprite(res.upTip), this.upTip.x = b.width - 180, this.upTip.y = b.height - 100, this.downTip = new cc.Sprite(res.downTip), this.downTip.x = 130, this.downTip.y = 150, this.daoshu = new cc.Sprite(res.GO3), this.daoshu.x = b.width / 2, this.daoshu.y = b.height - 100, this.addChild(this.daoshu, 100);
                var c = parseInt(1e4 * Math.random() + 1e4);
                this.tipLabel = new cc.LabelTTF("" + c, "Arial", 40), this.tipLabel.x = b.width / 2 + 90, this.tipLabel.y = b.height - 100, this.tipLabel.fillStyle = cc.color(255, 0, 0, 255), this.card = new cc.Sprite(res.card), this.card.x = b.width / 2, this.card.y = b.height / 2, this.addChild(this.card), this.up = new cc.Sprite(res.up), this.up.x = b.width / 2, this.up.y = b.height - 130, this.addChild(this.up), this.down = new B(this), this.down.x = b.width / 2, this.down.y = 150, this.addChild(this.down, 100), this.moveDown = new cc.Sprite(res.moveDown), this.moveDown.x = b.width - 50, this.moveDown.y = 150, this.addChild(this.moveDown, 10); {
                    var d = cc.moveTo(1, cc.p(b.width - 50, 100)),
                        e = cc.callFunc(function() {
                            this.moveDown.x = b.width - 50, this.moveDown.y = 150
                        }, this);
                    cc.sequence(d, e)
                }
                this.mRepeat = cc.sequence(d, e).repeat(100), this.endTip3 = new cc.Sprite(res.endTip3), this.endTip3.x = b.width / 2, this.endTip3.y = b.height / 2, this.addChild(this.endTip3, 1e3), this.endTip3.visible = !1
            },
            update: function() {
                if (this.gameBegin) {
                    if (this.tick++, this.timeNum <= 0) return this.unscheduleUpdate(), console.log("time out!"), this.moveDown.stopAllActions(), void this.overCall();
                    this.tick % 60 == 0 && this.timeNum--, m && (this.down.y >= 180 && (m = !1), this.down.y += 1.8, this.up.y += 1.8, this.card.y += 1.8), this.tick % 120 == 0 && this.addTip && (this.addTip = !1, this.addChild(this.upTip, 1e3), this.addChild(this.downTip, 1e3), this.addChild(this.tipLabel, 1e5)), this.tick % 480 == 0 && (this.removeChild(this.upTip), this.removeChild(this.downTip), this.removeChild(this.tipLabel))
                } else this.tick1++, this.tick1 % 60 == 0 && (this.tick1Num--, 2 == this.tick1Num ? this.daoshu.initWithFile(res.GO2) : 1 == this.tick1Num ? this.daoshu.initWithFile(res.GO1) : 0 == this.tick1Num ? this.daoshu.initWithFile(res.GO0) : -1 == this.tick1Num && (this.gameBegin = !0, this.removeChild(this.daoshu), o = !0, this.moveDown.runAction(this.mRepeat)))
            },
            onExit: function() {
                this.removeAllChildrenWithCleanup(!0)
            },
            overCall: function() {
                this.endTip3.visible = !0, o = !1, this.down.changeRes(), _au3.pause(), this.loadListener()
            },
            Call: function() {
                cc.director.runScene(new x)
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                return cc.rectContainsPoint(e, c) ? (b.Call(), !0) : !1
            },
            onTouchMoved: function() {},
            onTouchEnded: function() {}
        }),
        w = cc.Scene.extend({
            callNum: 0,
            tick: 0,
            ctor: function(a, c, d, e) {
                this._super(), this.callNum = e;
                var f = new cc.Sprite(a);
                f.x = b.width / 2, f.y = b.height / 2, this.addChild(f, 0), this.wz_tip = new cc.Sprite(c), this.wz_tip.x = b.width / 2, this.wz_tip.y = b.height / 2, this.addChild(this.wz_tip, 101), this.wz_tip.visible = !1, this.scheduleUpdate()
            },
            Call: function() {
                1 == this.callNum ? cc.director.runScene(new u) : 2 == this.callNum ? cc.director.runScene(new v) : window.location.href = g_link
            },
            onExit: function() {
                this.removeAllChildrenWithCleanup()
            },
            update: function() {
                this.tick++, this.tick % 300 == 0 && (this.callNum <= 2 && (this.wz_tip.visible = !0, this.beginReduce = !0), this.loadListener())
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                return cc.rectContainsPoint(e, c) ? (b.Call(), !0) : !1
            },
            onTouchMoved: function() {},
            onTouchEnded: function() {}
        }),
        x = cc.Scene.extend({
            ctor: function() {
                this._super();
                var a = new cc.Sprite(res.endBg31);
                a.x = b.width / 2, a.y = b.height / 2, this.addChild(a, 0), this.loadListener()
            },
            onExit: function() {
                this.removeAllChildrenWithCleanup()
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height / 2),
                    f = cc.rect(0, d.height / 2, d.width, d.height);
                return cc.rectContainsPoint(e, c) && (window.location.href = g_link), cc.rectContainsPoint(f, c) && cc.director.runScene(new r), !0
            },
            onTouchMoved: function() {},
            onTouchEnded: function() {}
        }),
        y = cc.Sprite.extend({
            textureWidth: null,
            textureHeight: null,
            basic: 0,
            ctor: function(a, b, c, d) {
                this._super(), this.basic = c, this.init(a, b, d)
            },
            init: function(a, b, c) {
                this.initWithFile(c), this.textureWidth = this.getContentSize().width, this.textureHeight = this.getContentSize().height, this.setPosition(a, b), this.setAnchorPoint(0, .5)
            },
            setPrecent: function(a) {
                var b = this.getTextureRect(),
                    c = a / this.basic;
                this.setTextureRect(cc.rect(b.x, b.y, this.textureWidth * c, this.textureHeight))
            }
        }),
        z = cc.Sprite.extend({
            type: 0,
            initScale: .5,
            layer: null,
            ctor: function(b, c, e) {
                this._super();
                var f = a(1, 10);
                8 > f ? (this.initWithFile(d[0].res), this.type = d[0].type) : (this.initWithFile(d[1].res), this.type = d[1].type), this.x = c, this.y = e, this.layer = b, this.scale = this.initScale, this.loadListener()
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                return cc.rectContainsPoint(e, c) ? !0 : !1
            },
            onTouchMoved: function() {
                this.target
            },
            onTouchEnded: function(b, c) {
                var d = this.target,
                    e = c.getCurrentTarget(),
                    f = 0;
                if (1 == e.type ? (e.initWithFile(res.spr11), d.layer.hitHuangniuNum++, k || (i = !0), _au1.play()) : (e.initWithFile(res.spr22), k || (j = !0)), i) {
                    i = !1, k = !0, f = a(0, 2), d.layer.tipImg.initWithFile(g[f]), d.layer.tipImg.anchorX = 0;
                    var h = cc.fadeIn(.01),
                        l = cc.delayTime(5),
                        m = cc.fadeOut(.01),
                        n = cc.callFunc(function() {
                            i = !0, k = !1
                        }, this),
                        o = cc.sequence(h, l, m, n);
                    d.layer.tipImg.runAction(o)
                }
                if (j) {
                    j = !1, k = !0, f = a(3, 5), d.layer.tipImg.initWithFile(g[f]), d.layer.tipImg.anchorX = 0;
                    var h = cc.fadeIn(.01),
                        l = cc.delayTime(5),
                        m = cc.fadeOut(.01),
                        n = cc.callFunc(function() {
                            j = !0, k = !1
                        }, this),
                        o = cc.sequence(h, l, m, n);
                    d.layer.tipImg.runAction(o)
                }
                setTimeout(function() {
                    d.reSet(d)
                }, 100)
            },
            reSet: function(b) {
                b.visible = !1;
                var c = a(0, 1);
                b.type = d[c].type, b.initWithFile(d[c].res), b.scale = b.initScale
            }
        }),
        A = cc.Sprite.extend({
            tick: 0,
            reduceFlag: !1,
            x1: 0,
            x2: 0,
            layer: null,
            ctor: function(a, b) {
                this._super(), this.layer = a, this.initWithFile(b), this.loadListener()
            },
            addAnimation: function(a) {
                var b = cc.textureCache.addImage(a),
                    c = [];
                c[0] = new cc.SpriteFrame(b, cc.rect(0, 0, 331, 584)), c[1] = new cc.SpriteFrame(b, cc.rect(331, 0, 331, 584)), c[2] = new cc.SpriteFrame(b, cc.rect(662, 0, 331, 584)), c[3] = new cc.SpriteFrame(b, cc.rect(993, 0, 331, 584)); {
                    var d = new cc.Animation(c, .25),
                        e = new cc.animate(d);
                    e.repeatForever()
                }
                this.runAction(e)
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = b.convertToNodeSpace(a.getLocation()),
                    d = b.getContentSize(),
                    e = cc.rect(0, 0, d.width, d.height);
                if (!cc.rectContainsPoint(e, c)) return !1;
                var f = a.getLocation();
                return b.x1 = f.x, !0
            },
            onTouchMoved: function(a, b) {
                var c = this.target,
                    d = b.getCurrentTarget(),
                    e = a.getLocation();
                n && (c.onTouchDispose(a, b), c.x2 = e.x, c.x2 < c.x1 ? (d.stopAllActions(), d.initWithFile(res.move_right), setTimeout(function() {
                    d.initWithFile(res.normal)
                }, 350)) : (d.stopAllActions(), d.initWithFile(res.move_left), setTimeout(function() {
                    d.initWithFile(res.normal)
                }, 350)))
            },
            onTouchEnded: function(a, b) {
                this.target, b.getCurrentTarget(), a.getLocation()
            },
            onTouchDispose: function(a, b) {
                var c = b.getCurrentTarget(),
                    d = a.getLocation();
                c.x = d.x
            }
        }),
        B = cc.Sprite.extend({
            y1: 0,
            y2: 0,
            layer: null,
            ctor: function(a) {
                this._super(a), this.layer = a, this.initWithFile(res.down1), this.loadListener()
            },
            loadListener: function() {
                var a = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    target: this,
                    swallowTouches: !0,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                });
                cc.eventManager.addListener(a, this)
            },
            onTouchBegan: function(a) {
                var b = this.target,
                    c = a.getLocation(),
                    d = b.convertToNodeSpace(a.getLocation()),
                    e = b.getContentSize(),
                    f = cc.rect(0, 0, e.width, e.height);
                return cc.rectContainsPoint(f, d) ? (b.y1 = c.y, !0) : !1
            },
            onTouchMoved: function(a, b) {
                var c = this.target,
                    d = a.getLocation(),
                    e = b.getCurrentTarget();
                if (c.layer.upTip.visible = !0, c.layer.downTip.visible = !0, c.layer.tipLabel.visible = !0, o) {
                    if (c.onTouchDispose(a, b), c.y2 = d.y, e.y <= 70) return e.y = 70, void(m = !0);
                    c.y2 < c.y1 ? (e.y -= 1.8, c.layer.up.y -= 1.8, c.layer.card.y -= 1.8) : (e.y += 1.8, c.layer.up.y += 1.8, c.layer.card.y += 1.8), _au3.play()
                }
            },
            onTouchEnded: function(a, b) {
                this.target, b.getCurrentTarget()
            },
            onTouchDispose: function(a, b) {
                b.getCurrentTarget(), a.getLocation()
            },
            changeRes: function() {
                this.initWithFile(res.down)
            }
        });
    module.exports = {
        beginScene: r,
        gameScene1: t,
        gameScene2: u,
        gameScene3: v,
        loadingSprite: y
    }
});
