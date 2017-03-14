seajs.use(["widget/tips", "widget/form", "sale/res/js/mod/share.js"], function(t, i, e) {
    var n = "hide",
        a = {
            blue: "http://cres.fenqile.com/res/sale/2015092904/img/szb{num}.png",
            pink: "http://cres.fenqile.com/res/sale/2015092904/img/szp{num}.png"
        },
        s = {
            switchSection: function(t) {
                $(".js-section").addClass(n), $(t).removeClass(n)
            },
            playBargainAudio: function() {
                var t = $("#bargain_audio").get(0),
                    i = $("#bg_audio").get(0);
                try {
                    i.pause(), t.currentTime = 0, t.play(), setTimeout(function() {
                        i.play()
                    }, 2e3)
                } catch (e) {}
            },
            launchBargin: function(t) {
                var i = this;
                $.post("/event/2015092904/launch_bargain.json", t, function(t) {
                    var e = +t.retcode,
                        n = t.retmsg;
                    switch (e) {
                        case 0:
                            i.playBargainAudio(), i.switchSection("#bargain_section"), setTimeout(function() {
                                location.replace("/event/2015092904/bargain.html")
                            }, 4e3);
                            break;
                        default:
                            $.Tips.showError(e, n)
                    }
                    $("#imgcode_img").trigger($.CLICK)
                }, "json", "#submit_btn")
            },
            numSplit2Img: function(t, i) {
                i = i || "blue";
                var e = [],
                    n = a[i];
                t = t.toString(), t = t.split("");
                for (var s = 0; s < t.length; s++) e.push(n.replace(/\{num\}/, t[s]));
                return e
            },
            imgList2HTML: function(t) {
                for (var i = "", e = 0; e < t.length; e++) i += '<img src="{src}">'.replace(/\{src\}/i, t[e]);
                return i
            },
            setSelectProduct: function(t) {
                var i = this;
                $("#sku_id").val(t), $("#product_img").prop("src", G_PRODUCT_DATA[t].imgurl || "http://cres.fenqile.com/res/sale/2015092904/img/pro2.png"), $("#product_name").html(G_PRODUCT_DATA[t].sku_name);
                var e = i.numSplit2Img(G_PRODUCT_DATA[t].original_amount, "blue"),
                    n = i.numSplit2Img(G_PRODUCT_DATA[t].activity_amount, "pink");
                $("#original_price_warp").html(this.imgList2HTML(e)), $("#active_price_warp").html(this.imgList2HTML(n)), i.playBargainAudio()
            },
            bindEvent: function() {
                var t = this;
                $(".js-product-item").on($.CLICK, function(i) {
                    i.preventDefault();
                    var e = $(this).data("sku"),
                        n = parseInt($(this).data("stock") || 0, 10);
                    1 > n || (t.setSelectProduct(e), t.switchSection("#form_section"), $.Stat.clickStat("link_product_" + e))
                }), $("#change_product").on($.CLICK, function(t) {
                    t.preventDefault();
                    var i = $(".js-product-list").filter(function(t) {
                        return !$(this).hasClass(n)
                    }).data("index");
                    i = parseInt(i, 10), $(".js-product-list").addClass(n), $("#product_list_" + (i + 1) % 3).removeClass(n)
                }), $("#submit_btn").on($.CLICK, function(e) {
                    e.preventDefault();
                    var n = new i("#bargain_form");
                    n.check() && t.launchBargin(n.serializeObject())
                }), $("#imgcode_img").on($.CLICK, function(t) {
                    t.preventDefault();
                    var i = "http://m.fenqile.com/getimage?v=" + (new Date).getTime();
                    $(this).prop("src", i)
                }), $(".js-bg-audio-btn").on($.CLICK, function(t) {
                    t.preventDefault();
                    var i = $(this);
                    try {
                        var e = $("#bg_audio").get(0);
                        e.paused ? (e.play(), i.addClass("m-stop")) : (e.pause(), i.removeClass("m-stop"))
                    } catch (t) {}
                })
            },
            initParam: function() {
                e.init({
                    title: "分期乐二周年疯狂砍价进行时，价格低到你想不到！",
                    link: "http://sale.fenqile.com/2015092904/index.html",
                    imgUrl: "http://cres.fenqile.com/res/sale/2015092904/img/logo.jpg",
                    content: "分期乐二周年，邀请千万大学生来砍价，价格低到难以置信。",
                    success: function(t) {
                        $.Stat.clickStat("btn_share_success")
                    }
                })
            },
            init: function() {
                this.initParam(), this.bindEvent()
            }
        };
    s.init()
});
//# sourceMappingURL=http://sale.fenqile.com/res/2015092904/js/launch.js.map
