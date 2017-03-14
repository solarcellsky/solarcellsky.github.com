var jiang = '';
var scoreShow = '';
var cli = false;
(function (e) {
    function t() {
        function t() {
            var e = R.createImage("static/images/lu.png"),
                t = e.width,
                n = e.height;
            s.drawImage(e, 0, 0, t, n)
        }

        function n() {
            e("#guidePanel").hide(),
                b.init(),
                b.start()
        }

        t(), R.loadImage(h.gameImg, function () {
            e("#gamePanel").on("touchstart", function () {
                n(), n = function () {
                }
            })
        })
    }

    function n() {
        function n() {
            var t = e(window).width(),
                n = e(window).height();
            c = n < 576 ? n : 576,
                l = t < 320 ? t : 320,
                e(i).attr({height: c, width: l})
        }

        R.loadImage(h.loadImg, t), n();
        var r = e(i).parent();
        e(window).on("resize", n)
    }

    var r = {},
        i = document.getElementById("stage"),
        s = i.getContext("2d"),
        o = document.getElementById("score"),
        u = e(window).width(),
        a = e(window).height(),
        f = "ontouchend"in document,
        l, c, h = {
            loadImg: [
                "static/images/lu.png",
                "static/images/zhishi.png"
            ],
            gameImg: [
                "static/images/biaoche.png",
                "static/images/biaoche2.png",
                "static/images/zhen.png",
                "static/images/jia.png",
                "static/images/shuliang.png",
                "static/images/xin.png"
            ]
        },

        p = function () {
            function t() {
                var t = Math.random(),
                    n = Math.random(),
                    r = Math.random(),
                    i = (new Date).getTime();
//md5.js                return e.md5(i + "" + t * n * r);
            }

            function n() {
                var n;
                try {
                    return n = e.cookie.get(s),
                        n ? (r(n, !1, !0, !0), n) : (n = localStorage.getItem(i),
                            n ? (r(n, !0, !1, !0), n) : (n = sessionStorage.getItem(i),
                                n ? (r(n, !0, !0, !1), n) : (n = t(), r(n, !0, !0, !0), n)))
                } catch (o) {
                    return n = t(),
                        r(n, !0, !0, !0), n
                }
            }

            function r(t, n, r, o) {
//cookie.js                n && e.cookie.set(s, t, {expires: 31536e6}),
                    r && localStorage.setItem(i, t),
                    o && sessionStorage.setItem(i, t)
            }

            var i = "carmeizi/user",
                s = "carmeizi";
            return n()
        }(),
        d = function () {
            function e(e, t) {
                n.lastX = n.x,
                    n.lastY = n.y,
                    n.x = e - n.width / 2,
                    n.y = t - n.height / 2,
                    n.x = n.x > l - n.width ? l - n.width : n.x,
                    n.x = n.x < 0 ? 0 : n.x,
                    n.y = n.y > c - n.height ? c - n.height : n.y,
                    n.y = n.y < 0 ? 0 : n.y
            }

            function t(e) {
                if (!n.status)return;
                s.drawImage(
                        b.time % 20 > 15 ? n.model : n.model2, n.x, n.y, n.width, n.height)
            }

            var n = {};
            return n.init = function () {
                n.x,
                    n.y,
                    n.lastX,
                    n.lastY,
                    n.status = !0,
                    n.model = R.createImage("static/images/biaoche.png"),
                    n.model2 = R.createImage("static/images/biaoche2.png"),
                    n.width = l / 480 * n.model.width,
                    n.height = n.width / n.model.width * n.model.height
            },
                n.move = e, n.moving = t, n
        }(), v = function () {
            function e(e) {
                this.type = e,
                    this.height = 0,
                    this.width = 0,
                    this.maxSpeed = 0,
                    this.status = !0;
                switch (e) {
                    case 1:
                        this.score = 1,
                            this.maxSpeed = 15;
                        break;
                    case 2:
                        this.score = 0,
                            this.maxSpeed = 25
                }
                var t = ["static/images/zhen.png", "static/images/jia.png"];
                this.modelImg = t[this.type - 1],
                    this.model = R.createImage(this.modelImg),
                    this.width = l / 480 * this.model.width,
                    this.height = this.width / this.model.width * this.model.height,
                    this.x = Math.random() * (l - this.width),
                    this.y = -this.height;
                var n = b.time / 800 > 100 ? 100 : b.time / 800;
                this.speed = Math.random() * (n - 1) + 5,
                    this.speed = this.speed < .5 ? Math.random() * .5 + .5 : this.speed,
                    this.speed = this.speed > this.maxSpeed ? this.maxSpeed : this.speed
            }

            function t(t) {
                return new e(t)
            }

            var n = {},
                r = n.planes = [],
                i = n.planesNum = 0;
            n.planes, e.prototype.show = function () {
                s.drawImage(this.model, this.x, this.y, this.width, this.height)
            }, e.prototype.die = function () {
                var e = this.type;
                b.score += this.score, this.status = !1
            };
            var o = n.addSome = function () {
                if (b.time % 30 != 0)return;
                i == 36 && (i = 0), i++;
                switch (!0) {
                    case i % Math.floor(Math.random() * 3) == 0:
                        n.planes.push(t(2));
                        break;
                    default:
                        n.planes.push(t(1))
                }
            };
            return n.scrolling = function () {
                function e(e) {
                    var t = [e.x, e.y],
                        n = [e.x + e.width, e.y + e.height],
                        r = [d.x + 16, d.y + 10],
                        i = [d.x + d.width - 16, d.y + d.height - 26],
                        s = [Math.max(t[0], r[0]), Math.max(t[1], r[1])],
                        o = [Math.min(n[0], i[0]), Math.min(n[1], i[1])];
                    return s[0] < o[0] && s[1] < o[1] ? !0 : !1
                }

                o();
                var t = n.planes.length;
                for (var r = t; r--;) {
                    var i = n.planes[r];
                    if (i.y > c || i.status == 0) {
                        n.planes.splice(r, 1);
                        continue
                    }
                    i.show(), e(i) && (i.type == "1" ? m.showheart() : b.stop(), i.die()), i.y = i.y + i.speed
                }
            }, n
        }(), m = function () {
            var t = {};
            return t.format = function (e) {
                return function (t, n) {
                    return n = n || 5, 0 >= (n -= t.toString().length) ? t : (e[n] || (e[n] = Array(n + 1).join(0))) + t
                }
            }([]), t.showheart = function () {
                var coins = new Audio();
                coins.src = "static/js/coin.mp3";
                coins.play();
                e(".heart").removeClass("hearthot").addClass("hearthot"), setTimeout(function () {
                    e(".heart").removeClass("hearthot")
                }, 200)
            }, t.show = function () {
                e(".score-wrap").show()
            }, t
        }(), g = function () {
            var t = e("#resultPanel"), n = function () {
                var n = "click";
                f && (n = "touchstart"), t.find(".replay").on(n, function () {
                	cli = false;
                    b.init(), b.start()
                }), 
                t.find(".share").on(n, function () {
                    t.find(".weixin-share").show().one(n, function () {
                        e(this).hide()
                    }),
                        gConfig.wxData.desc = e(this).data("desc").replace(/\{x\}/ig, b.score);
                    
                    
                    
                }),
                    t.find(".lottery").on(n, function () {
                    	/** ********************************************************************* */
                    	var count = $("#count").val();		// 个数
//                    	if (count <20) {
//                    		alert("20");
//                    	}else if (count <40 && count >= 20) {
//                    		alert("20-40");
//                    		n.find(".display_2").show();
//						}else if(count <80 && count >=40){
//							n.find(".display_2").show();
//						}else if(count <160 && count >=80){
//							n.find(".display_3").show();
//						}else if(count <240 && count >=160){
//							n.find(".display_4").show();
//						}else if(count >=240){
//							n.find(".display_5").show();
//						}
                    	

                    	if(!cli){
                    		cli = true;
                    		$.ajax({
                      		  type: 'POST',
                      		  url: 'isWin.do',
                      		  data: {'COUNT':count},
                      		  dataType:"json",
                      		  async:false,
                      		  success: function(result){
              	    				if (result.MSG == "没次数") {
              	    					alert("您今天的抽奖次数用光了！");
              	    				} else {
              	    					if (result.DES == "没有中奖") {	
              	        					jiang = ".display_6";
              	        				} else if (result.DES == "一等奖") {
              	    						jiang = ".display_5";
              	    					} else if (result.DES == "二等奖") {
              	    						jiang = ".display_4";
              	    					} else if (result.DES == "三等奖") {
              	    						jiang = ".display_3";
              	    					}else if (result.DES == "四等奖") {
              	    						jiang = ".display_2";
              	    					}else if (result.DES == "五等奖") {
              	    						jiang = ".display_1";
              	    					}
              	    					 y.open();
                  	    				 $("#lqjp").attr("href","lqjp.do?WINGIFT_ID="+result.WINGIFT_ID);
              	    				}
              	    				
                      		  }
                      		  
                      		});
                    	}
                    
                    })
            }, r = {show: function () {
                t.show(), r.showScore()
            }, hide: function () {
                t.hide()
//                    gConfig.wxData.desc = ""
            }, showScore: function () {
                var e = 1,
                    n = b.score;
                n === 0 ? e = 1 : n < 20 ? e = 2 : e = 3;  //收集10个抽奖
                $("#count").val(n);
                shareTitle = "奔跑吧VIP，向钱冲！我抓到了"+n+"个福袋，你行吗？我保证不虐你！";
                wx.ready(function() {
            		wx.onMenuShareTimeline({
            			title : shareTitle, // 分享标题
            			desc : desc, // 分享描述
            			link : lineLink,
            			imgUrl : imgUrl,
            			type : 'link', // 分享类型,music、video或link，不填默认为link
            			success : function() {
            				// 用户确认分享后执行的回调函数
            			},
            			cancel : function() {
            				// 用户取消分享后执行的回调函数
            			}
            		});

            		wx.onMenuShareAppMessage({
            			title : shareTitle, // 分享标题
            			desc : desc, // 分享描述
            			link : lineLink, // 分享链接
            			imgUrl : imgUrl, // 分享图标
            			type : 'link', // 分享类型,music、video或link，不填默认为link
            			dataUrl : '', // 如果type是music或video，则要提供数据链接，默认为空
            			success : function() {
            				// 用户确认分享后执行的回调函数
            			},
            			cancel : function() {
            				// 用户取消分享后执行的回调函数
            			}
            		});
            		wx.onMenuShareQQ({
            			title : shareTitle, // 分享标题
            			desc : desc, // 分享描述
            			link : lineLink, // 分享链接
            			imgUrl : imgUrl, // 分享图标
            			success : function() {
            				// 用户确认分享后执行的回调函数
            			},
            			cancel : function() {
            				// 用户取消分享后执行的回调函数
            			}
            		});
            	});
                
                
                var r = t.find("#scoreBoard").show().find(".score-" + e);
                
                y.hide(),
                    t.find("#scoreBoard .score-result").hide(),
                    r.show(),
                        e < 3 ? t.find("#scoreBoard .rank").show() : (t.find("#scoreBoard .rank").hide(), y.preLoad()),
                    r.find(".tips span").html(n);  //收集的个数
                        
                    	if (n <20) {
                    		t.find(".score-0").show();
                    	}else if (n <40 && n >= 20) {
                    		t.find(".score-0").show();
						}else if(n <80 && n >=40){
							t.find(".score-4").show();
						}else if(n <160 && n >=80){
							t.find(".score-5").show();
						}else if(n <240 && n >=160){
							t.find(".score-6").show();
						}else if(n >=240){
							t.find(".score-7").show();
						}
                        
            }, wxHide: function () {
                t.find(".weixin-share").hide()
            }};
            return n(), r
        }(),
        y = function () {
            var t = null,
                n = e("#prize"),
                r, i = {preLoad: function () {
                    e.ajax({type: "GET", url: gConfig.sApi, timeout: 2e4, dataType: "jsonp", jsonp: "jscallback", data: {mid: p, active: gConfig.activeId}, success: function (e) {
                        t = e.data || {}
                    }, error: function () {
                        t = {}
                    }})
                },
                    open: function () {
                        var e = 100, n = setInterval(function () {
                            if (t || !e) {
                                e--, clearInterval(n);
                                try {
                                    t.drawtype && t.info1 ? i.showPrize(t.drawtype, t.info1) : i.showDefault(parseInt(Math.random() * 1002, 10) % 2 + 1)
                                }
                                catch (r) {
                                    i.showDefault(parseInt(Math.random() * 1002, 10) % 2 + 1)
                                }
                            }
                        }, 10)
                    },
                    hide: function () {
                        n.hide()
                    },

                    showDefault: function (t) {
                        var r = ["static/images/jiang1.png", "static/images/jiang2.png", "static/images/jiang3.png", "static/images/weizhongjiang.png"], i;  //奖品图片
                        t %= r.length,
                            e("#prizeResult").hide(),
                            n.show().find(".prize-default").show().find(".random-prize").hide();
                        	n.find(jiang).show();
                            if(jiang==".display_6"){
                            	n.find(".prize-default .lingqu").hide();
  	    						n.find(".prize-default .fenxiang").show();
                            }
                            	
                            	 
                            
//                            n.find(".display_1").show(),  //5元代金券
//                        n.find(".display_2").show(),  //10元代金券
//                        n.find(".display_3").show(),  //20元代金券
//                        n.find(".display_4").show(),  //50元代金券
//                        n.find(".display_5").show(),  //100元代金券
//                        n.find(".display_6").show(),n.find(".prize-default .lingqu").hide(),n.find(".prize-default .fenxiang").show()  //未中奖

                            i = n.find(".prize-default .lingqu").attr("data-desc").split("|"),
                            n.find(".prize-default .lingqu").data("desc", i[t % i.length])
                    }
                };
            return i
        }();
    window.prize = y;
    var b = new Best.Game({FPS: 60, score: 0, time: 0, bgImg: R.createImage("static/images/lu.png"), bgScrollTime: 0, initGraphicContext: function () {
        this.canvas = document.getElementById("stage"), this.context = this.canvas.getContext("2d")
    }, onInit: function () {
        d.init()
    }, onStart: function () {
        this.scene = this.getScene(0), this.scene.init(this), this.scene.enter()
    }, getScene: function (e) {
        var t = w[e];
        return t
    }, bgScroll: function () {

        var e = this.bgImg.height, t = this.bgImg.width;
        this.bgScrollTime += 12 + ((this.time + this.time * .9) / 1e3 > 20 ? 20 : (this.time + this.time * .9) / 1e3), this.bgScrollTime > e && (this.bgScrollTime = 0), s.drawImage(this.bgImg, 0, this.bgScrollTime - e, t, e), s.drawImage(this.bgImg, 0, this.bgScrollTime, t, e)
    }, onStop: function () {
        var crash = new Audio();
        crash.src = "static/js/crash.mp3";
        crash.play();
        e("#gameoverPanel").show(), setTimeout(function () {
            g.show(), e("#gameoverPanel").hide()
        }, 1e3)
    }}), w = {};
    (function () {
        var t = new Best.Scene({id: 0, init: function (t) {
            this.game = t, e(i).addClass("playing"), m.show(), this.initEvent()
        }, initEvent: function () {
            this.clear(), d.move(e(i).width() / 2, e(i).height()), i = e(i);
            if (f) {
                var t = function (e) {
                    e.preventDefault();
                    var t = e.targetTouches[0], n = t.pageX - i.offset().left, r = t.pageY - i.offset().top;
                    d.move(n, r)
                };
                i.get(0).removeEventListener("touchmove", t), i.get(0).addEventListener("touchmove", t, !1)
            } else i.off("mousemove").on("mousemove", function (e) {
                var t = e.clientX - i.offset().left, n = e.clientY - i.offset().top;
                d.move(t, n)
            })
        }, clear: function () {
            this.game.time = 0,
                this.game.score = 0,
                this.game.bgScrollTime = 0,
                d.status = !0,
                v.planes = [],
                v.planesNum = 0,
                o.innerHTML = m.format(this.game.score),
                g.hide()
        }, enter: function () {
        }, update: function () {
            this.game.time++, this.game.bgScroll(), v.scrolling(), d.moving(this.game.time), o.innerHTML = m.format(this.game.score)
        }, handleInput: function () {
        }, render: function () {
        }});
        w[t.id] = t
    })(), n()
    //微信api.js
//        WeixinApi.ready(function (e) {
//        var t = {ready: function () {
//            gConfig.wxData.desc || (gConfig.wxData.desc = gConfig.wxDesc)
//        }, cancel: function (e) {
//            g.wxHide()
//        }, fail: function (e) {
//            g.wxHide()
//        }, confirm: function (e) {
//            g.wxHide()
//        }, all: function (e) {
//            g.wxHide()
//        }};
//        e.shareToFriend(gConfig.wxData, t), e.shareToTimeline(gConfig.wxData, t), e.shareToWeibo(gConfig.wxData, t)
//    })
    

})(jQuery);