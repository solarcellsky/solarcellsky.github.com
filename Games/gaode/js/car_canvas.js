! function() {
    "use strict";
    var t = location.href.indexOf("demo/") > -1 ? "../" : "",
        e = createjs.WebAudioPlugin.isSupported(),
        a = navigator.userAgent,
        i = /Android 5.*/.test(a);
    "widget.car".sReg(function(a) {
        var n = new function() {
            function n() {
                if (e) createjs.Sound.play("init"), createjs.Sound.stop("init");
                else {
                    var t = $("#audioEngine").get(0),
                        a = $("#audioWholecar").get(0);
                    t.muted = !0, t.play(), t.pause(), t.muted = !1, a.muted = !0, a.play(), a.pause(), a.muted = !1
                }
                document.documentElement.removeEventListener("touchstart", n, !1)
            }

            function s() {
                for (var t = $("<div>").addClass("car-back").css({
                        width: m + "px",
                        height: g + "px"
                    }), e = 0; 20 > e; e++) o.append(t.clone())
            }

            function r(t, e) {
                if (e && e.length > 0) {
                    e.sort(function() {
                        return Math.random() - .5
                    });
                    for (var a = 0; a < e.length; a++) E.push(new j(e[a] - 11, 20, !0))
                }
                if (t && t.length > 0) {
                    t.sort(function() {
                        return Math.random() - .5
                    });
                    for (var a = 0; a < t.length; a++) E.push(new j(t[a] - 11, a, !1))
                }
                19 === E.length && o.addClass("left-one"), d()
            }

            function d() {
                u.width = u.width;
                for (var t = !0, a = 0, i = E.length; i > a; a++) t = E[a].draw() && t;
                if (h.width = h.width, c.drawImage(u, 0, 0), c.font = "30px 宋体", t) {
                    if (20 == E.length) {
                        var n = 98 / 290 * f;
                        o.append('<img class="fireworks fireworks-0" src="http://h5.amap.com/activity/digger/img/star-d426dfeb.png" width="' + n + '" /><img class="fireworks fireworks-1" src="http://h5.amap.com/activity/digger/img/star-d426dfeb.png" width="' + n + '" /><img class="fireworks fireworks-2" src="http://h5.amap.com/activity/digger/img/star-d426dfeb.png" width="' + n + '" /><div class="car-no-bg"></div>'), setTimeout(function() {
                            if (o.addClass("win"), e) createjs.Sound.play("wholecar");
                            else {
                                var t = $("#audioWholecar").get(0);
                                t && t.play()
                            }
                        }, 1500)
                    }
                    19 == E.length && 0 != b && (o.append('<div class="car-banner" style="width: ' + (f + 10) + 'px"><div class="car-banner-before"></div><div class="car-banner-after"></div><div class="car-banner-main"><p class="car-banner-p0">' + b + '</p><p class="car-banner-p1">来高德地图 搜索“挖宝”寻最终碎片！</p></div></div>'), setTimeout(function() {
                        o.addClass("lastOne")
                    }, 1100))
                } else {
                    var s = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
                    s ? s(d) : setTimeout(d, 50)
                }
            }
            var o, h, c, l, u, p, m, g, f, v, w, y, b, S = -500,
                M = 500,
                x = 400,
                T = 20,
                C = 2 * M,
                E = [],
                j = a.Class.extend({
                    id: void 0,
                    index: void 0,
                    startTime: void 0,
                    delay: void 0,
                    _delay: S,
                    left: 0,
                    top: 0,
                    startLeft: 0,
                    startTop: 0,
                    startScale: 0,
                    end: !1,
                    getPos: function() {
                        this.startTime || (this.startTime = new Date);
                        var t = new Date - this.startTime - this.delay;
                        if (t = Math.min(t, x), 0 > t) return null;
                        var e = t / x;
                        return e > 1 && (e = 1), {
                            left: this.startLeft - (this.startLeft - this.left) * e,
                            top: this.startTop - (this.startTop - this.top) * e,
                            scale: this.startScale - (this.startScale - 1) * e,
                            end: t >= x
                        }
                    },
                    draw: function() {
                        if (this["static"]) return p.drawImage(l, this.left * w, this.top * y, m * w, g * y, this.left, this.top, m, g), this.end = !0, !0;
                        var t = this.getPos();
                        return t ? (p.drawImage(l, this.left * w, this.top * y, m * w, g * y, t.left, t.top, m * t.scale, g * t.scale), !this.end && t.end && (setTimeout(function() {
                            var t, e = document.body.className,
                                i = e.replace(/.*shave(\d).*/, "$1");
                            do t = a.random(1, 4); while (t == i)
                        }, 400), k(), this.end = t.end), t.end) : !1
                    },
                    init: function(t, e, i) {
                        this.id = t, this.index = e, this.left = m * (t % 5) + 1 * (t % 5), this.top = g * Math.floor(t / 5) + 1 * Math.floor(t / 5);
                        var n = a.random(30, 50) / 180 * Math.PI,
                            s = 130 * a.random(50, 70) / 20;
                        this.startLeft = s * Math.cos(n), this.startTop = s * Math.sin(n), this.startScale = a.random(100, 140) / 15, this.constructor.prototype._delay = this._delay + Math.max(C / 2 * Math.pow(e / T - 1, 2), 60), this.delay = this._delay, this["static"] = i
                    }
                });
            i && a.inGod || (e && ("android" !== a.os || i) ? (createjs.Sound.registerSounds([{
                src: t + "sound/engine.mp3",
                data: {
                    audioSprite: [{
                        id: "init",
                        startTime: 0,
                        duration: 1
                    }]
                }
            }]), createjs.Sound.registerSound({
                src: t + "sound/engine.mp3",
                id: "fly"
            }), createjs.Sound.registerSound({
                src: t + "sound/wholecar.mp3",
                id: "wholecar"
            })) : $("body").append('<audio id="audioEngine" src="sound/engine.mp3" preload="auto"></audio><audio id="audioWholecar" src="sound/wholecar.mp3" preload="auto"></audio>'), document.documentElement.addEventListener("touchstart", n, !1)), this.init = function(t, e, a, i) {
                a && "0" != a ? (a = new Date(1e3 * a), i = new Date(1e3 * i), b = a.getMonth() + 1 + "月" + a.getDate() + "日 " + a.getHours() + ":" + a.getMinutes().preFull() + "-" + i.getHours() + ":" + i.getMinutes().preFull()) : b = 0, E.length = 0, j.prototype._delay = S, o = $(t).empty().removeClass("win"), l = e;
                var n = (o.attr("data-margin") || 34, (o.parent().width() || $(document).width()) - 2 * (o.attr("data-margin") || 34)),
                    r = parseInt(n / 290 * 154);
                m = Math.round((n - 5) / 5), g = Math.round((r - 3) / 4), f = 5 * m + 5, v = 4 * g + 3, o.css({
                    width: f + "px",
                    height: v + "px"
                }), w = l.naturalWidth / f, y = l.naturalHeight / v, h = document.createElement("canvas"), h.width = 1 * f, h.height = 1 * v, o.append(h), c = h.getContext("2d"), u = document.createElement("canvas"), u.width = 1 * f, u.height = 1 * v, p = u.getContext("2d"), s(), o.css("visibility", "visible"), $("body").addClass("android")
            };
            this.flyIn = r;
            var k = function() {
                if (e) createjs.Sound.play("fly");
                else {
                    var t = $("#audioEngine").get(0);
                    t && t.play()
                }
            }.throttle(200, !0)
        };
        return n
    })
}();
