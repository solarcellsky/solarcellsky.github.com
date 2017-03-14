! function() {
    "use strict";
    var t = location.href.indexOf("demo/") > -1 ? "../" : "";
    "widget.car".sReg(function(e) {
        var n = new function() {
            function n() {
                createjs.Sound.play("init"), createjs.Sound.stop("init"), document.documentElement.removeEventListener("touchend", n, !1)
            }

            function a() {
                for (var t = $("<div>").addClass("car-back").css({
                        width: d + "px",
                        height: c + "px"
                    }), e = 0; 20 > e; e++) o.append(t.clone())
            }

            function i(t, e) {
                var n = e && e.length || 0;
                if (t && t.length > 0) {
                    v = h, t.sort(function() {
                        return Math.random() - .5
                    }), n += t.length;
                    for (var a = 0; a < t.length; a++) setTimeout(s.bindArg(t[a] - 11, a === t.length - 1 && 20 === n, a === t.length - 1 && 19 === n, !1), r(a))
                }
                if (e && e.length > 0) {
                    v = h, e.sort(function() {
                        return Math.random() - .5
                    });
                    for (var i = e.length, a = 0; i > a; a++) setTimeout(s.bindArg(e[a] - 11, a === i - 1 && 20 === i, a === i - 1 && 19 === i, !0), 0)
                }
                19 === n && o.addClass("left-one"), setTimeout(function() {
                    o.parent().css("overflowX", "visible")
                }, v + 50)
            }

            function r(t) {
                var e = Math.max(g / 2 * Math.pow(t / f - 1, 2), 60),
                    n = v += e;
                return n
            }

            function s(t, n, a, i) {
                function r() {
                    s[0].style.webkitTransform = "", setTimeout(function() {
                        var t, i = document.body.className,
                            r = i.replace(/.*shave(\d).*/, "$1");
                        do t = e.random(1, 4); while (t == r);
                        if (n) {
                            var s = 98 / 290 * l;
                            o.append('<img class="fireworks fireworks-0" src="http://h5.amap.com/activity/digger/img/star-d426dfeb.png" width="' + s + '" /><img class="fireworks fireworks-1" src="http://h5.amap.com/activity/digger/img/star-d426dfeb.png" width="' + s + '" /><img class="fireworks fireworks-2" src="http://h5.amap.com/activity/digger/img/star-d426dfeb.png" width="' + s + '" /><div class="car-no-bg"></div>'), setTimeout(function() {
                                o.addClass("win"), createjs.Sound.play("wholecar")
                            }, 1100)
                        }
                        a && 0 != p && (o.append('<div class="car-banner" style="width: ' + (l + 10) + 'px"><div class="car-banner-before"></div><div class="car-banner-after"></div><div class="car-banner-main"><p class="car-banner-p0">' + p + '</p><p class="car-banner-p1">来高德地图 搜索“挖宝”寻最终碎片！</p></div></div>'), setTimeout(function() {
                            o.addClass("lastOne")
                        }, 1100))
                    }, 400), i || w()
                }
                var s = $("<div>").addClass("flyer").appendTo(o),
                    h = (d + 1) * (t % 5),
                    m = (c + 1) * Math.floor(t / 5);
                s.css({
                    left: h + "px",
                    top: m + "px",
                    width: d + "px",
                    height: c + "px",
                    backgroundSize: l + "px " + u + "px",
                    backgroundPosition: -h + "px -" + m + "px"
                });
                var f = e.random(30, 50) / 180 * Math.PI,
                    g = 200 * e.random(50, 70) / 20,
                    v = g * Math.cos(f) - h,
                    b = g * Math.sin(f) - m,
                    x = e.random(100, 140) / 15;
                i || (s.css("transition", "all linear 0s"), "ios" == e.os && (s[0].style.webkitTransform = " translate3d(" + v + "px," + b + "px,0px) scale3d(" + x + "," + x + "," + x + ")"), s.css("transition", "")), i ? r() : setTimeout(r, 20)
            }
            var o, d, c, l, u, p, h = -500,
                m = 500,
                f = 20,
                g = 2 * m;
            createjs.Sound.registerSounds([{
                src: t + "sound/engine-869d79ab.mp3",
                data: {
                    audioSprite: [{
                        id: "init",
                        startTime: 0,
                        duration: 1
                    }]
                }
            }]), document.documentElement.addEventListener("touchend", n, !1), createjs.Sound.registerSound({
                src: t + "sound/engine-869d79ab.mp3",
                id: "fly"
            }), createjs.Sound.registerSound({
                src: t + "sound/wholecar-734a98c1.mp3",
                id: "wholecar"
            }), this.init = function(t, e, n, i) {
                n && "0" != n ? (n = new Date(1e3 * n), i = new Date(1e3 * i), p = n.getMonth() + 1 + "月" + n.getDate() + "日 " + n.getHours() + ":" + n.getMinutes().preFull() + "-" + i.getHours() + ":" + i.getMinutes().preFull()) : p = 0, o = $(t).empty().removeClass("win");
                var r = (o.attr("data-margin") || 34, (o.parent().width() || $(document).width()) - 2 * (o.attr("data-margin") || 34)),
                    s = parseInt(r / 290 * 154);
                d = Math.round((r - 5) / 5), c = Math.round((s - 3) / 4), l = 5 * d + 5, u = 4 * c + 3, o.css({
                    width: l + "px",
                    height: u + "px"
                }), a(), o.css("visibility", "visible"), o.parent().css("overflowX", "hidden"), $("body").addClass("ios")
            }, this.flyIn = i;
            var v = h,
                w = function() {
                    createjs.Sound.play("fly")
                }.throttle(200, !0)
        };
        return n
    })
}();
