function configWxshare(e, i, t, o, n) {
    window.wx && (wx.onMenuShareTimeline({
        title: i,
        link: t,
        imgUrl: o,
        success: function() {
            _hmt.push(["_trackEvent", "share", "Timeline", "分享到朋友圈"]), n && n()
        },
        cancel: function() {}
    }), wx.onMenuShareAppMessage({
        title: e,
        desc: i,
        link: t,
        imgUrl: o,
        type: "",
        dataUrl: "",
        success: function() {
            _hmt.push(["_trackEvent", "share", "AppMessage", "分享给好友"]), n && n()
        },
        cancel: function() {}
    }))
}
window.MomoShare = function() {
        function e(e, i) {
            if (i)
                for (var t in i) e[t] = i[t];
            return e
        }

        function i(i) {
            window.mm && (p = e(p, i), i && i.text && (p.configs.momo_feed.resource.desc = i.text), mm.invoke("init", {
                enable: {
                    back: 0,
                    forward: 0,
                    refresh: 0,
                    share: 0,
                    scrollbar: 1,
                    ui_btn: 1
                },
                share: p,
                ui_btn: {
                    title: "",
                    dropdown: 0,
                    buttons: [{
                        text: "分享",
                        action: 1,
                        param: p
                    }]
                }
            }))
        }

        function t() {
            window.mm && mm.invoke("callShare", p, function(e) {})
        }

        function o() {
            window.mm && $.ajax({
                url: "http://w.benbun.com/api/momoshare/",
                data: {
                    url: window.location.href
                },
                dataType: "jsonp"
            }).success(function(e) {
                if ("ok" == e.status) {
                    var t = e;
                    t.error = "mm.configError", mm.invoke("initConfig", t, function(e) {
                        i()
                    })
                }
            })
        }

        function n() {
            i(), o()
        }
        var a = "陌陌不孤独饭局",
            s = "这个深夜食堂，只对没人陪的人开放",
            r = "http://w.benbun.com/momo/shaibingxiang/",
            c = "http://w.benbun.com/momo/shaibingxiang/images/share-img.png",
            p = {
                title: a,
                text: s,
                url: r,
                pic: c,
                apps: ["qq", "weixin", "weixin_friend", "qzone", "sina", "momo_feed", "momo_contacts"],
                configs: {
                    momo_feed: {
                        title: "feed",
                        text: a,
                        url: r,
                        pic: c,
                        resource: {
                            title: a,
                            desc: s,
                            icon: c,
                            ignore_pic: 1,
                            link: r,
                            actions: {
                                name: "name",
                                "goto": "url",
                                goto_param: r,
                                source_id: "momo_gudu_momo_feed"
                            }
                        }
                    }
                }
            };
        return n(), {
            config: i,
            share: t
        }
    }(), $(document).ready(function() {
        $.ajax({
            url: "http://bdaladdin.duapp.com/wxshare/api/",
            data: {
                url: window.location.href
            },
            dataType: "jsonp"
        }).success(function(e) {
            "ok" == e.status && (wx.config({
                appId: e.appId,
                timestamp: e.timestamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
            }), wx.ready(function() {
                var e = "http://w.benbun.com/momo/shaibingxiang/",
                    i = "陌陌不孤独饭局",
                    t = "这个深夜食堂，只对没人陪的人开放",
                    o = e,
                    n = "http://7xnvb2.com2.z0.glb.qiniucdn.com/images/share-img.png";
                configWxshare(i, t, o, n, null)
            }))
        })
    }),
    function() {
        function e(e, i) {
            if (!e) return this;
            var t = this;
            t.elmt = e, t.classOrigin = i.classOrigin, t.classAni = i.classAni || null, t.frameLastTime = i.frameLastTime || 40, t.totalFrame = i.totalFrame || 1, t.loop = i.loop || !1, t.step = i.step || 1, t.direction = i.direction || 1, t.currentFrame = i.currentFrame || 1, t.stopCallback = i.stopCallback || null, t.finishCallback = i.finishCallback || null, t.revertCallback = i.revertCallback || null, t.playing = !1, t.interval = null, t.play = function(i, o, n) {
                i = i || t.frameLastTime, o = o || t.currentFrame, t.currentFrame = o, t.interval = setInterval(function() {
                    t.direction ? (t.currentFrame += t.step, t.currentFrame = t.currentFrame >= t.totalFrame ? t.totalFrame : t.currentFrame, n = n || null) : (t.currentFrame -= t.step, t.currentFrame = t.currentFrame < 1 ? 1 : t.currentFrame, n = n || null), t.loop && t.currentFrame == t.totalFrame && (t.currentFrame = 1), t.currentFrame == n && t.stop(), $(e).attr("class", t.classOrigin + " " + t.classAni + t.currentFrame)
                }, i)
            }, t.stop = function() {
                clearInterval(t.interval), t.stopCallback && t.stopCallback()
            }, t.revert = function() {
                t.direction = 0
            }, t.resume = function() {
                t.totalFrame = i.totalFrame || 1, t.currentFrame = i.currentFrame || 1
            }, t.speedUp = function(e, i) {
                t.frameLastTime = e || t.frameLastTime - 5, t.frameLastTime < 20 && (t.step = i, t.frameLastTime = 20), t.stop(), t.play(t.frameLastTime)
            }, t.speedDown = function(e) {
                20 == t.frameLastTime && 1 != t.step ? t.step = t.step - 1 : t.frameLastTime = e || t.frameLastTime + 30, t.stop(), t.play(t.frameLastTime)
            }
        }
        window.MovieSprites = e
    }(), $(function() {
        function e(e) {
            var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                t = window.location.search.substr(1).match(i);
            return null != t ? unescape(t[2]) : null
        }

        function i() {
            function e() {
                var e = new createjs.LoadQueue,
                    o = $(".p0 img"),
                    n = [];
                n.push(ROOT + "images/loading.gif");
                for (var a = 0; a < o.length; a++) n.push(o[a].src);
                e.loadManifest(n), e.on("complete", function(e) {
                    $(".p0").show(), $(".hungry-shed").addClass("move-left"), t(), i()
                })
            }

            function i() {
                var e = $("img"),
                    i = [],
                    t = new createjs.LoadQueue;
                t.installPlugin(createjs.Sound), i.push({
                    id: "momo",
                    src: ROOT + "music/momo.mp3"
                }), i.push({
                    id: "mail",
                    src: ROOT + "music/mail.mp3"
                }), i.push({
                    id: "open",
                    src: ROOT + "music/open.mp3"
                }), i.push({
                    id: "get",
                    src: ROOT + "music/get.mp3"
                }), i.push({
                    id: "put",
                    src: ROOT + "music/put.mp3"
                }), i.push({
                    id: "close",
                    src: ROOT + "music/close.mp3"
                }), i.push({
                    id: "replay",
                    src: ROOT + "music/replay.mp3"
                }), i.push(ROOT + "images/msg-bg.png"), i.push(ROOT + "images/momo-bg.png"), i.push(ROOT + "images/beer.jpg"), i.push(ROOT + "images/sauce.jpg"), i.push(ROOT + "images/rice.jpg"), i.push(ROOT + "images/bingxiang1.jpg"), i.push(ROOT + "images/bingxiang2.jpg"), i.push(ROOT + "images/bingxiang3.jpg");
                for (var a = 0; a < e.length; ++a) i.push(e[a].src);
                i.push(ROOT + "images/floor1-head.gif"), i.push(ROOT + "images/floor2-head.gif"), i.push(ROOT + "images/floor3-head.png"), i.push(ROOT + "images/floor5-head.gif"), i.push(ROOT + "images/floor6-head.gif"), i.push(ROOT + "images/rice-text.png"), i.push(ROOT + "images/beer-text.png"), i.push(ROOT + "images/f-pic1.jpg"), i.push(ROOT + "images/f-pic2.jpg"), i.push(ROOT + "images/f-pic3.jpg"), i.push(ROOT + "images/f-pic4.jpg"), i.push(ROOT + "images/f-pic5.jpg"), i.push(ROOT + "images/f-pic6.jpg"), i.push(ROOT + "images/f-pic7.jpg"), i.push(ROOT + "images/f-pic8.jpg"), i.push(ROOT + "images/f-pic9.jpg"), i.push(ROOT + "images/f-pic10.jpg"), i.push(ROOT + "images/f-pic11.jpg"), i.push(ROOT + "images/f-pic12.jpg"), t.loadManifest(i), t.on("fileload", function(e) {}), t.on("error", function(e) {}), t.on("progress", function(e) {
                    var i = e.progress;
                    n(i)
                }), t.on("complete", function(e) {
                    o()
                })
            }

            function o() {}

            function n(e) {
                if (e >= .5 && 1 == _) {
                    $(".p1").fadeIn(500, r), $(".hungry-shed").removeClass("move-left"), s(), _ = 0; {
                        setTimeout(function() {}, 700)
                    }
                }
                $("#svgForStroke1").css({
                    "stroke-dasharray": 250 * e * 2 + "% 250%"
                })
            }
            e()
        }

        function t() {
            $(".p2-donghua").css({
                opacity: "1"
            });
            for (var e = [goToFridge, getSauce, getBeer, getRice], i = 0; 4 > i; i++) ! function(i) {
                e[i].stopCallback = function() {
                    3 == i ? ($(".p2-donghua").appendTo(".donghua-box"), getRice.stopCallback = u) : 2 == i ? (getRice.play(120, 1, 5), getBeer.stopCallback = m) : 1 == i ? (getBeer.play(120, 1, 5), getSauce.stopCallback = l) : (getSauce.play(120, 1, 5), goToFridge.stopCallback = a)
                }
            }(i);
            goToFridge.play(30, 1, 71)
        }

        function o(e) {
            for (var i, t, o = e.length; 0 !== o;) t = Math.floor(Math.random() * o), o -= 1, i = e[o], e[o] = e[t], e[t] = i;
            return e
        }

        function n() {
            var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                i = [" 我的冰箱里有蛋糕、水果、饼干、沙拉、果汁••• •••就算胖也要拉个人和我一起胖。", " 他们说蛋白粉可以增肌，我离8块腹肌还差7块了.", " 我的冰箱有个蛋用！", " 孤独是深夜冰箱里的这一盘剩菜，可以两碗饭，两人对坐。也可以做成盖饭，一人独食，不知第一个做出盖饭的人，是出于省事，还是因为寂寞。", " 打副本时候在指挥麦里咳嗽得上不来气还是坚持打完了，转天有快递送来了冰箱里这些东西。虽然和队友们都没见过，其实啊打游戏是因为寂寞，也是为了不寂寞。", " 囤了很多绝版胶卷，想给她拍照的。她走了，胶卷留下了，之前她不准我吃宵夜说会胖，而现在我想找个人陪我吃点什么都找不到了。", " 一个职业铲屎官的冰箱，我吃不吃不重要，主子吃好主子吃好。", " 我妈说要多吃青菜，我说好呀，然后吃得我肠子都青了。", " 生活和米饭一样寡淡，给自己买了十种拌饭酱，也并没有尝到更多滋味。", " 纵使孤独，我也不是美食家。", " 人前星巴克，人后啃馒头！", " 大家跟我一起念“黄飞鸿“”房飞冯“哈哈哈哈哈哈哈"];
            o(e);
            for (var t = 1; 8 > t; t++) 3 == t || ($(".theme-content" + t).html(i[e[t] - 1]), $(".pic-f" + t).attr("src", "images/f-pic" + e[t] + ".jpg"), $(".show-pic" + t).attr("src", "images/f-pic" + e[t] + ".jpg"))
        }

        function a() {
            1 == R ? ($(".p2-btn").show(), hintBeer.play(O, 1), hintRice.play(O, 1), hintSauce.play(O, 1), skipTo.play(O, 1), R = 0) : 0 === R ? ($(".p2-choice").show(), R = -1) : -1 == R ? (goToFridge.play(50, 34, 1), R = -2) : ($(".p2").hide(), $(".p1").show(), c())
        }

        function s() {
            _hmt.push(["_trackEvent", "p1", "进入第一页", "进入第一页"]), $(".p3").addClass("p3-start");
            var e = .08 * b / 150;
            $(".p2-btn").css({
                "-webkit-transform-origin": "0 100%",
                "-webkit-transform": "scale(" + e + ")"
            });
            setTimeout(function() {
                w = $(".p1-msg.msg1").height(), msg2Height = $(".p1-msg.msg2").height(), momoHeight = $(".p1-msg.p1-momo").height()
            }, 0)
        }

        function r() {
            setTimeout(function() {
                $(".p0").hide(), $(".msg1").show(), $(".msg1").animate({
                    height: w
                }, 500, "linear"), S.play(), x = 1
            }, 2300), setTimeout(function() {
                $(".msg2").show(), $(".msg2").animate({
                    height: msg2Height
                }, 500, "linear"), C.play()
            }, 1300), setTimeout(function() {
                createjs.Sound.play("momo", {
                    volume: 1,
                    loop: 0
                }), $(".msg2").css("height", "0"), $(".msg1").css("height", "0"), $(".p1-momo").fadeIn(200)
            }, 300)
        }

        function c() {
            var e = setTimeout(function() {
                $(".p1-momo").addClass("shake"), j.play(), clearTimeout(e)
            }, 100);
            $(".p1-momo").on("touchstart", function() {
                _hmt.push(["_trackEvent", "p3", "进入第三页", "进入第三页"]);
                setTimeout(function() {
                    $(".p3").show(), $(".p3").addClass("p3-scale");
                    var e = setTimeout(function() {
                        $(".banner-top").show(), $(".p1").hide(), clearTimeout(e), $(".p3").removeClass("p3-scale"), $(".p3").removeClass("p3-start")
                    }, 600)
                }, 200)
            })
        }

        function p() {
            _hmt.push(["_trackEvent", "p2", "进入第二页", "进入第二页"]);
            var e = b / 300,
                i = .4 * b / 300,
                t = .1 * b / 300,
                o = 121 * b * 100 / (499 * T);
            $(".p3-banner-space").css("height", o + "%"), n(), $(".p2-donghua").removeClass("sprite-rice-5"), $(".p2-donghua").addClass("sprite-bingxiang-1"), $(".p2-donghua").css({
                "-webkit-transform-origin": "0 0",
                "-webkit-transform": "scale(" + e + ")translate(-50%,-50%)"
            }), $(".p2-goOn").css({
                "-webkit-transform-origin": "0 100%",
                "-webkit-transform": "scale(" + i + ")"
            }), $(".text-close").css({
                "-webkit-transform-origin": "0 100%",
                "-webkit-transform": "scale(" + t + ")"
            })
        }

        function u() {
            1 == y ? ($(".p2-rice-story").show(), $(".p2-text").show(), $(".p2-words").hide(), $(".rice-text").show(), y = 0) : h()
        }

        function m() {
            k ? ($(".p2-beer-story").show(), $(".p2-text").show(), $(".p2-words").hide(), $(".beer-text").show(), k = 0) : h()
        }

        function l() {
            v ? ($(".p2-sauce-story").show(), $(".p2-words").hide(), $(".sauce-text").show(), $(".p2-text").show(), v = 0) : h()
        }

        function h() {
            v || y || k ? (v && y && k || $(".p2-goOn").show(), $(".p2-btn").show(), v || ($(".p2-sauce").hide(), hintSauce.stop()), y || ($(".p2-rice").hide(), hintRice.stop()), k || ($(".p2-beer").hide(), hintBeer.stop())) : (goToFridge.play(O, 58, 71), E.play())
        }

        function g(e) {
            $(".show-box").fadeIn(300), $(".p3-show").hide(), $(".show-pic" + e).show()
        }

        function f() {
            $(".p2-donghua").on("touchstart", function() {
                return !1
            }), $(".p1").on("touchstart", function() {
                1 == x && ($(".p1").hide(), $(".p2").show(), p(), goToFridge.play(O, 1, 58), A.play(), x = 0)
            }), $(".p2-goOn").click(function() {
                _hmt.push(["_trackEvent", "跳过", "跳过故事", "跳过故事"]), skipTo.stop(), $(".p2-btn").hide(), $(".p2-goOn").hide(), goToFridge.play(O, 58, 71), E.play()
            }), $(".p2-beer").click(function() {
                _hmt.push(["_trackEvent", "啤酒", "取啤酒", "取啤酒"]), d = "beer", $(".p2-btn").hide(), $(".p2-goOn").hide(), getBeer.play(O, 1, 8), L.play()
            }), $(".p2-sauce").click(function() {
                _hmt.push(["_trackEvent", "辣酱", "取辣酱", "取辣酱"]), d = "sauce", $(".p2-btn").hide(), $(".p2-goOn").hide(), getSauce.play(O, 1, 8), L.play()
            }), $(".p2-rice").click(function() {
                _hmt.push(["_trackEvent", "米饭", "取米饭", "取米饭"]), d = "rice", $(".p2-btn").hide(), $(".p2-goOn").hide(), getRice.play(O, 1, 11), L.play()
            }), $(".p2-text").click(function() {
                "rice" == d ? (M.play(), getRice.play(O, 11, 19), $(".p2-text").hide(), $(".p2-rice-story").hide()) : "beer" == d ? (M.play(), getBeer.play(O, 8, 16), $(".p2-text").hide(), $(".p2-beer-story").hide()) : "sauce" == d && (M.play(), getSauce.play(O, 9, 17), $(".p2-text").hide(), $(".p2-sauce-story").hide())
            }), $(".p2-sauce-story").click(function() {
                M.play(), getSauce.play(O, 9, 17), $(".p2-text").hide(), $(".p2-sauce-story").hide()
            }), $(".p2-beer-story").click(function() {
                M.play(), getBeer.play(O, 8, 16), $(".p2-text").hide(), $(".p2-beer-story").hide()
            }), $(".p2-rice-story").click(function() {
                M.play(), getRice.play(O, 11, 19), $(".p2-text").hide(), $(".p2-rice-story").hide()
            }), $(".choice-close").click(function() {
                _hmt.push(["_trackEvent", "重来", "重来按钮点击", "重来按钮点击"]), goToFridge.revert(), $(".choice-close").hide(), $(".choice-close-on").show();
                setTimeout(function() {
                    goToFridge.play(90, 47, 34), B.play(), $(".p2-choice").hide()
                }, 300)
            }), $(".go-share").click(function() {
                _hmt.push(["_trackEvent", "分享", "提示分享按钮", "提示分享按钮"]), $(".go-share").hide(), $(".go-share-on").show();
                setTimeout(function() {
                    $(".share-hint-box").show(), $(".hint-box").animate({
                        height: "100%"
                    }, 500, "swing")
                }, 200)
            }), $(".share-hint-box").click(function() {
                $(".share-hint-box").hide(), $(".hint-box").css("height", "6%"), $(".go-share").show(), $(".go-share-on").hide()
            }), $(".pic-f1").click(function() {
                g(1)
            }), $(".pic-f2").click(function() {
                g(2)
            }), $(".pic-f4").click(function() {
                g(4)
            }), $(".pic-f5").click(function() {
                g(5)
            }), $(".pic-f6").click(function() {
                g(6)
            }), $(".pic-f7").click(function() {
                g(7)
            }), $(".show-box").click(function() {
                $(".show-box").hide()
            })
        } {
            var d, w, O = 144,
                b = $(window).width(),
                T = $(window).height(),
                k = 1,
                v = 1,
                y = 1,
                R = 1,
                x = -1,
                _ = 1,
                F = "undefined" != typeof navigator ? navigator.userAgent : "";
            ({
                android: /Android/i.test(F),
                ios: /iPhone|iPad|iPod/i.test(F),
                blackberry: /BlackBerry/i.test(F),
                windows: /IEMobile/i.test(F)
            })
        }
        $(".join").click(/momoWebView/.test(window.navigator.userAgent) ? function() {
            _hmt.push(["_trackEvent", "参加", "点击参加按钮", "点击参加按钮"]), $(".join").hide(), $(".join-on").show();
            setTimeout(function() {
                mm.invoke("directGoto", {
                    param: "[|goto_topiclist|10240952]"
                }), $(".join").show(), $(".join-on").hide()
            }, 500)
        } : /iPhone|iPad|iPod/i.test(F) ? function() {
            _hmt.push(["_trackEvent", "参加", "点击参加按钮", "点击参加按钮"]), $(".join").hide(), $(".join-on").show();
            setTimeout(function() {
                window.location.href = "http://www.immomo.com/download/ios/?d=&v=&mark=&market=&b=iOS_appstore", $(".join").show(), $(".join-on").hide()
            }, 500)
        } : function() {
            _hmt.push(["_trackEvent", "参加", "点击参加按钮", "点击参加按钮"]), $(".join").hide(), $(".join-on").show();
            setTimeout(function() {
                window.location.href = "http://www.immomo.com/download/momo_apk?d=&v=&mark=&market=&b=android_apk", $(".join").show(), $(".join-on").hide()
            }, 500)
        }), goToFridge = new MovieSprites($(".p2-donghua")[0], {
            classAni: "sprite-bingxiang-",
            classOrigin: "p2-donghua",
            frameLastTime: O,
            totalFrame: 71,
            loop: !1,
            stopCallback: a,
            revertCallback: null,
            finishCallback: null
        }), getSauce = new MovieSprites($(".p2-donghua")[0], {
            classAni: "sprite-sauce-",
            classOrigin: "p2-donghua",
            frameLastTime: O,
            totalFrame: 17,
            loop: !1,
            stopCallback: l,
            revertCallback: null,
            finishCallback: null
        }), getBeer = new MovieSprites($(".p2-donghua")[0], {
            classAni: "sprite-beer-",
            classOrigin: "p2-donghua",
            frameLastTime: O,
            totalFrame: 16,
            loop: !1,
            stopCallback: m,
            revertCallback: null,
            finishCallback: null
        }), getRice = new MovieSprites($(".p2-donghua")[0], {
            classAni: "sprite-rice-",
            classOrigin: "p2-donghua",
            frameLastTime: O,
            totalFrame: 19,
            loop: !1,
            stopCallback: u,
            revertCallback: null,
            finishCallback: null
        }), skipTo = new MovieSprites($(".p2-goOn")[0], {
            classAni: "sprite-jump-",
            classOrigin: "p2-goOn",
            frameLastTime: O,
            totalFrame: 4,
            loop: !0
        }), hintBeer = new MovieSprites($(".p2-beer")[0], {
            classAni: "sprite-get-hint-",
            classOrigin: "p2-btn p2-beer",
            frameLastTime: O,
            totalFrame: 4,
            loop: !0
        }), hintRice = new MovieSprites($(".p2-rice")[0], {
            classAni: "sprite-get-hint-",
            classOrigin: "p2-btn p2-rice",
            frameLastTime: O,
            totalFrame: 4,
            loop: !0
        }), hintSauce = new MovieSprites($(".p2-sauce")[0], {
            classAni: "sprite-get-hint-",
            classOrigin: "p2-btn p2-sauce",
            frameLastTime: O,
            totalFrame: 4,
            loop: !0
        }), f(), i(), e("from"), _hmt.push(["_trackEvent", "来源", "来自" + e("from"), "来自" + e("from")]);
        var j = new Audio;
        j.src = ROOT + "music/momo.mp3";
        var C = new Audio;
        C.src = ROOT + "music/mail.mp3";
        var S = new Audio;
        S.src = ROOT + "music/mail.mp3";
        var A = new Audio;
        A.src = ROOT + "music/open.mp3";
        var L = new Audio;
        L.src = ROOT + "music/get.mp3";
        var M = new Audio;
        M.src = ROOT + "music/put.mp3";
        var E = new Audio;
        E.src = ROOT + "music/close.mp3";
        var B = new Audio;
        B.src = ROOT + "music/replay.mp3"
    });
