define("singleaudio", ["coms/frontbase", "phoneutils/comUtils", "base-lib/zepto-plugin/touch", "base-lib/zepto-plugin/selector", "pages/append/music/music"], function(i) {
    "use strict";

    function t(i, t, a) {
        this.data = i, this.page = a, this.audioEl = e(t).find(".singleAudioPlayerTag"), this.audioBtn = e(t).find(".audio-icon"), this.scaleDom = e(t).find(".c-singleaudio-scale"), this.setDefaultIcon(), this.dispathAudioEvent(i, t), this.bindPageEvent(a, t)
    }
    var a = i("coms/frontbase"),
        e = (i("phoneutils/comUtils"), i("base-lib/zepto-plugin/touch")),
        e = i("base-lib/zepto-plugin/selector"),
        o = i("pages/append/music/music"),
        n = "ontouchend" in window ? "touchend" : "click",
        s = [];
    return t.prototype = {
        setDefaultIcon: function() {
            this.setBackground(this.data.player.stopSelect.icon, this.data.player.stopSelect.align)
        },
        setStopIcon: function() {
            this.setBackground(this.data.player.playSelect.icon, this.data.player.playSelect.align)
        },
        setBackground: function(i, t) {
            this.audioBtn.css({
                backgroundImage: 'url("' + i + '")',
                backgroundSize: t
            })
        },
        bindPageEvent: function(i) {
            var t = this,
                a = this.audioEl,
                o = a.attr("trigger");
            this.audioEl.bind("ended", function() {
                t.data.bgImage && t.scaleDom && t.scaleDom.hide(), 0 == o ? t.playAudio() : (t.setDefaultIcon(), t.playGloablAudio())
            }), e(i.dom).on("out", function() {
                a[0] && a[0].pause(), t.setDefaultIcon(), t.pauseGloablAudio()
            }).on("over", function() {
                var i = a.attr("trigger");
                0 == i ? t.playAudio() : t.playGloablAudio()
            })
        },
        dispathAudioEvent: function(i, t) {
            var a = this,
                o = this.audioEl,
                s = o.attr("trigger"),
                u = this.page._pageData ? this.page._pageData.pageIndex : -1;
            0 == s ? 0 == u && a.playAudio() : (o.attr("isFirst", !0), 2 == s ? a.bindAudioMotion() : a.bindAudioClick(t)), e("#globalAudioWarp").bind(n, function() {
                a.stopAllAudio(), o[0] && o[0].pause(), a.setDefaultIcon()
            })
        },
        playAudio: function() {
            var i = this,
                t = this.audioEl;
            i.data.bgImage && "hideSelect" != i.data.player.currentType && i.scaleDom && i.scaleDom.show(), this.getWXPlay(function() {
                i.stopAllAudio(), i.pauseGloablAudio(), t[0] && t[0].play(), i.setStopIcon()
            })
        },
        pauseAudio: function() {
            var i = this,
                t = this.audioEl;
            i.data.bgImage && i.scaleDom && i.scaleDom.hide(), this.getWXPlay(function() {
                i.stopAllAudio(), t[0] && t[0].pause(), i.setDefaultIcon(), i.playGloablAudio()
            })
        },
        getWXPlay: function(i) {
            "undefined" != typeof WeixinJSBridge ? WeixinJSBridge.invoke("getNetworkType", {}, function() {
                i && i()
            }) : i && i()
        },
        pauseGloablAudio: function() {
            var i = e("#globalAudioPlayer");
            i.length && o.pause()
        },
        playGloablAudio: function() {
            var i = e("#globalAudioPlayer");
            i.length && o.play()
        },
        bindAudioClick: function(i) {
            var t = this,
                a = this.audioEl;
            e(i).bind(n, function() {
                a.attr("isFirst") || a[0].paused ? (t.playAudio(), a.removeAttr("isFirst")) : t.pauseAudio()
            })
        },
        stopAllAudio: function() {
            e.each(s, function(i, t) {
                t.audioEl[0].pause(), t.setDefaultIcon()
            })
        },
        bindAudioMotion: function() {
            var i, t, a, o, n = this,
                s = this.page,
                u = this.audioEl,
                l = 1e3,
                d = 0,
                c = 0;
            window.addEventListener("devicemotion", function(p) {
                var r = p.accelerationIncludingGravity,
                    g = (new Date).getTime();
                if (g - d > 100 && e(s.dom).is(":visible")) {
                    var h = g - d;
                    d = g, i = r.x, t = r.y;
                    var f = Math.abs(i + t - a - o) / h * 1e4;
                    f > l && (new Date).getTime() - c > 800 && (u.attr("isFirst") || u[0].paused ? (n.playAudio(), u.removeAttr("isFirst")) : n.pauseAudio(), c = (new Date).getTime()), a = i, o = t
                }
            }, !1)
        }
    }, {
        init: function(i, e, o) {
            var n = new a(i.attrs, e);
            n.init(i);
            var u = new t(i.data, n.curDom, o);
            return s.push(u), n
        }
    }
});
