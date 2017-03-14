define("assets/js/global", ["require", "exports", "./loader", "./pixi"], function(require, exports) {
    function e(e, t, n) {
        var i = exports.constants.targetWidth;
        e.scale.x = e.scale.y = t / i
    }
    var t = require("./loader"),
        n = require("./pixi"),
        i = document.documentElement.clientWidth,
        a = document.documentElement.clientHeight;
    exports.loader = {
        loader: t,
        bgContainer: new n.Container,
        loaded: !1,
        loadImage: function(e, t, n) {
            t = t ? t : ".png", n = n ? n : exports.constants.imageBaseUrl;
            var i = [n, e, t].join("");
            this.loader.add(e, i)
        },
        animate: function(e) {
            e.animate = function() {
                if (e.specicAnimate) e.specicAnimate()
            }
        },
        loadCommon: function(e) {
            var t = this.bgContainer,
                i = this;
            if (this.loaded) this.animate(e), e.addChildAt(t, 0);
            else this.loader.on("complete", function(a, o) {
                if (!i.loaded) {
                    var r = new n.Sprite(o.bg.texture);
                    r.x = 0, r.y = 0, t.addChild(r), e.addChildAt(t, 0), i.animate(e), i.loaded = !0
                }
            })
        }
    }, exports.stage = {
        currentStage: {},
        loadNewStage: function(t) {
            if (this.currentStage && this.currentStage.dispose) this.currentStage.dispose();
            e(t, i, a), this.currentStage = t, exports.loader.loadCommon(t)
        }
    }, exports.constants = {
        countKey: "valentineShake",
        totalShakeX: 1e3,
        targetHeight: 1009,
        targetWidth: 640,
        imageBaseUrl: "assets/img/",
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
});
