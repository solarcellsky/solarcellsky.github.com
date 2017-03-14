var Main = function() {};
Main.prototype = {
    constructor: "Main",
    init: function() {
        this.data = [{
            question: 1,
            title: "奥特曼王子",
            answer: [1, 2]
        }, {
            question: 2,
            title: "雍正的老婆",
            answer: [5, 6, 7, 8]
        }, {
            question: 3,
            title: "外星人",
            answer: [3, 4, 5, 6, 7, 8]
        }, {
            question: 4,
            title: "腾讯公司的LOGO",
            answer: [5, 6, 7, 8]
        }, {
            question: 5,
            title: "苹果历史LOGO",
            answer: [2, 3, 4, 5, 6, 7, 8]
        }, {
            question: 6,
            title: "侏罗纪恐龙",
            answer: [5, 6, 7, 8]
        }, {
            question: 7,
            title: "直男",
            answer: [7, 8]
        }, {
            question: 8,
            title: "哺乳动物",
            answer: [5, 6, 7, 8]
        }, {
            question: 9,
            title: "C罩杯",
            answer: [6, 7, 8]
        }, {
            question: 10,
            title: "海底生物",
            answer: [3, 4, 5, 6, 7]
        }, {
            question: 11,
            title: "葫芦娃",
            answer: [1, 2, 3, 4, 5, 6, 7]
        }, {
            question: 12,
            title: "属于化学元素周期表的",
            answer: [6, 7]
        }, {
            question: 13,
            title: "快递小哥",
            answer: [1, 2]
        }, {
            question: 14,
            title: "辣条",
            answer: [1, 2, 7]
        }, {
            question: 15,
            title: "莫比乌斯环",
            answer: [1, 3, 4]
        }, {
            question: 16,
            title: "PSP游戏",
            answer: [1, 2, 4, 8]
        }, {
            question: 17,
            title: "周杰伦专辑",
            answer: [1, 2, 8]
        }, {
            question: 18,
            title: "达利的画",
            answer: [1, 4]
        }, {
            question: 19,
            title: "黄牛",
            answer: [1, 2]
        }, {
            question: 20,
            title: "载货车",
            answer: [8]
        }], this.share1 = ["12306的验证码太无敌了！智商不足的我一张票都没有抢到！", "12306的验证码已打败全国99%的用户！黄牛笑了，没买到票的我哭了！", "12306的验证码，已经击败了全国99%的用户！我也没能幸免！"], this.total = 10, this.domain = "./", this.ques = this.getQuestions(this.data, this.total), this.index = 0, this.rightNum = 0, this.setQues(), this.handle()
    },
    handle: function() {
        var t = this;
        $("#J_List").delegate("li", "touchstart", function(i) {
            t.choose(i)
        }), $("#J_Sub").on("tap", function() {
            t.submitInfo()
        }), $("#J_Alert").delegate(".J_Share", "tap", function() {
            $("#J_ShareTip").show().one("tap", function() {
                $(this).hide()
            })
        })
    },
    getQuestions: function(t, i) {
        for (var e = [], s = 0; i > s; s++) {
            var n = Math.floor(Math.random() * t.length);
            n == t.length && n--, e.push(t[n]), t.splice(n, 1)
        }
        return e
    },
    setQues: function() {
        for (var t = this.ques[this.index], i = "", e = 1; 8 >= e; e++) i += '<li><img src="' + this.domain + "images/q/" + t.question + "/" + e + '.jpg" /></li>';
        var s = $("<h4>请点击下图中<span>所有的</span><b>" + t.title + '</b></h4><ul class="clearFix">' + i + "</ul>");
        $("#J_List").html(s)
    },
    choose: function(t) {
        var i = $(t.currentTarget);
        i.hasClass("active") ? i.removeClass("active") : i.addClass("active")
    },
    submitInfo: function() {
        var t = [];
        $.each($("#J_List li.active"), function(i, e) {
            t.push($(e).index() + 1)
        });
        var i = t.join(",");
        if (!i) return this.alert("请选择验证码"), !1;
        if (i == this.ques[this.index].answer.join(",") ? (this.tips("你成功抢到了一张火车票"), this.rightNum++) : this.tips("验证码错误"), this.index == this.total - 1) {
            var e = Math.floor(Math.random() * this.share1.length);
            e = e === this.share1.length ? e - 1 : e;
            var s = this.share1[e];
            if (this.alert("你抢到了" + this.rightNum + "张票,<br/>快看看告诉小伙伴时的惊(无)喜(奈)吧", "快喊小伙伴来抢票", function() {
                    _hmt.push(["_trackEvent", "share", "click"])
                }), $("#J_Alert .b").addClass("J_Share"), this.rightNum > 0) {
                var t = Math.floor(10 * Math.random()) + 10 * this.rightNum;
                s = "我在12306的奇葩验证码抢票大赛中打败了全国" + t + "%的用户，成功抢到了" + this.rightNum + "张火车票"
            }
            return _hmt.push(["_trackEvent", "last", "click"]), _wx_share.setAppMessageOptions({
                desc: s
            }), _wx_share.setTimeLineOptions({
                title: s
            }), !1
        }
        this.index++, this.setQues()
    },
    alert: function(t, i, e) {
        $("#J_Alert .c").html(t), $("#J_Alert").css("display", "-webkit-box"), i && $("#J_Alert .b").text(i), $("#J_Alert .b").one("tap", function() {
            e ? e() : ($("#J_Alert .c").html(""), $("#J_Alert").hide())
        })
    },
    tips: function(t) {
        $("#J_Tips span").html(t), $("#J_Tips").show(), setTimeout(function() {
            $("#J_Tips").animate({
                opacity: 0
            }, function() {
                $("#J_Tips").hide(), $("#J_Tips span").text("")
            })
        }, 600)
    }
};
var main = (new Main).init();
