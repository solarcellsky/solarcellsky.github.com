var itemIdMap = new Map();
var t_cateId = 0;
var off = true;
$(document).ready(function() {
    eveDayZeroRefresh();
    $(window).scroll(function() {
        var a = getTabCategoryCookie();
        if (!!a) {
            a[t_cateId] = window.pageYOffset;
            a = JSON.stringify(a);
            addCookie("tabCategory", a)
        }
    })
});

function pageOffsetHandle() {
    if (!!getCookie("tabCategory")) {
        var a = JSON.parse(unescape(getCookie("tabCategory")));
        if (off) {
            if (typeof(a[t_cateId]) != "undefined") {
                document.documentElement.scrollTop = document.body.scrollTop = a[t_cateId];
                off = false
            }
        }
        if (!!a) {
            a.today_currTabCategory = t_cateId;
            a.currentTabView = 1;
            a = JSON.stringify(a);
            addCookie("tabCategory", a)
        }
    } else {
        var b = {};
        b.today_currTabCategory = t_cateId;
        b.currentTabView = 1;
        b = JSON.stringify(b);
        addCookie("tabCategory", b)
    }
}

function getAllSalePassportAjax(d) {
    var b = $(".index-tab").offset().top;
    var e = $("#defaultCate").val();
    var a = rootPath + "/allSaleJsonp.htm";
    if (!d) {
        var c = getTabCategoryCookie();
        if (!!c && !!c.today_currTabCategory) {
            e = c.today_currTabCategory
        }
        if (!e) {
            $("#productList").html("");
            return
        } else {
            d = e
        }
    }
    t_cateId = d;
    $.ajax({
        url: a,
        data: {
            cateId: d
        },
        type: "GET",
        cache: false,
        async: true,
        beforeSend: function() {
            $("#loadmore").css("display", "block")
        },
        success: function(h) {
            $("#loadmore").hide();
            $("#failLoad").hide();
            if (!h) {
                $("#productList").html("");
                return
            }
            var f = h.auctItemDetailListDTO;
            if (!!f) {
                $("#productList").html("");
                var g = Mustache.to_html($("#today").html(), f).replace(/^\s*/mg, "");
                $("#productList").append(g);
                $("#productList").fadeIn(500);
                var i = document.documentElement.scrollTop || document.body.scrollTop;
                if (i > b) {
                    document.documentElement.scrollTop = document.body.scrollTop = b;
                    setStaticMenu()
                }
                currentServerTime = parseInt(f.serverTime);
                initPage();
                initTodayTimeDown();
                lazyLoad("#productList");
                pageOffsetHandle()
            } else {
                $("#productList").html("")
            }
        },
        error: function(g, f, h) {
            $("#productList").html("");
            $("#loadmore").hide();
            $("#failLoad").show()
        }
    })
}

function todayImgIcon(g) {
    var c = "hot";
    var a = "over";
    var d = "see";
    var e = $("#pageStatus_" + g).val();
    var b = $("#status_" + g).val();
    var f = $("#itemStartTime_" + g).val() - 2000;
    if (parseInt(currentServerTime / 1000) < parseInt(f / 1000)) {
        $("#imgIcon_" + g).attr("class", d)
    } else {
        if (b == 3) {
            $("#imgIcon_" + g).attr("class", a)
        } else {
            if (e == 1) {
                $("#imgIcon_" + g).attr("class", d)
            } else {
                if (e == 3) {
                    $("#imgIcon_" + g).attr("class", c)
                } else {
                    $("#imgIcon_" + g).attr("class", d)
                }
            }
        }
    }
}

function initPage() {
    var h = getItemIdsArry();
    for (var c = 0; c < h.length; c++) {
        var g = h[c];
        todayImgIcon(g);
        var f = $("#pageStatus_" + g).val();
        var b = $("#status_" + g).val();
        if (b == 3) {
            $("#timeControlEnd_" + g).html("已结束")
        } else {
            if (f == "1") {
                $("#dangqianjiaLable_" + g).html("起拍价：");
                $("#timeControlEnd_" + g).css("display", "none");
                $("#timeControlDiv_" + g).css("display", "block")
            } else {
                if (f == "3") {
                    $("#dangqianjiaLable_" + g).html("当前价：");
                    $("#timeControlEnd_" + g).css("display", "none");
                    $("#timeControlDiv_" + g).css("display", "block")
                } else {
                    if (f == "5") {
                        $("#dangqianjiaLable_" + g).html("成交价：");
                        $("#timeControlDiv_" + g).css("display", "none");
                        $("#timeControlEnd_" + g).html("即将开拍");
                        $("#timeControlEnd_" + g).css("display", "block")
                    } else {
                        if (f == "6") {
                            $("#dangqianjiaLable_" + g).html("当前价：");
                            $("#timeControlDiv_" + g).css("display", "none");
                            $("#timeControlEnd_" + g).html("即将开拍");
                            $("#timeControlEnd_" + g).css("display", "block")
                        }
                    }
                }
            }
        }
        var d = $("#productId_" + g).val();
        var a = getProductImageUrl(d, "1", "200x200");
        $("#itemPicUrl_" + g).attr("data-src", a);
        var e = $("#productPrice_" + g).val();
        if (!e || e == 0) {
            $("#cankaojia_" + g).html("暂无报价")
        } else {
            $("#cankaojia_" + g).html("￥" + e)
        }
    }
}

function oneInitPage(c) {
    todayImgIcon(c);
    var b = $("#pageStatus_" + c).val();
    var a = $("#status_" + c).val();
    if (a == 3) {
        $("#timeControlEnd_" + c).html("已结束");
        $("#timeControlEnd_" + c).css("display", "block")
    } else {
        $("#timeControlEnd_" + c).html("即将开拍");
        if (b == "1") {
            $("#dangqianjiaLable_" + c).html("起拍价：");
            $("#timeControlEnd_" + c).css("display", "none");
            $("#timeControlDiv_" + c).css("display", "block")
        } else {
            if (b == "3") {
                $("#dangqianjiaLable_" + c).html("当前价：");
                $("#timeControlEnd_" + c).css("display", "none");
                $("#timeControlDiv_" + c).css("display", "block")
            } else {
                if (b == "5") {
                    $("#dangqianjiaLable_" + c).html("成交价：");
                    $("#timeControlDiv_" + c).css("display", "none");
                    $("#timeControlEnd_" + c).css("display", "block")
                } else {
                    if (b == "6") {
                        $("#dangqianjiaLable_" + c).html("当前价：");
                        $("#timeControlDiv_" + c).css("display", "none");
                        $("#timeControlEnd_" + c).css("display", "block")
                    }
                }
            }
        }
    }
}

function resetTimeDownList() {
    var a = getItemIdsArry();
    for (var b = 0; b < a.length; b++) {
        var c = $("#isTurn_" + a[b]).val();
        if (c == 0) {
            resetTimeDown(a[b])
        }
    }
}

function initTodayTimeDown() {
    var a = getItemIdsArry();
    for (var b = 0; b < a.length; b++) {
        initTimeDown(a[b], function(i) {
            var f = $("#pageStatus_" + i).val();
            var d = $("#endTime_" + i).val();
            var e = $("#chujiacishu_" + i).html();
            var h = f;
            if (f == 1) {
                var g = getTimeDiffNew(d);
                countDown_simpleFn(i, g);
                h = 3
            } else {
                if (f == 3) {
                    if (!!e && parseInt(e) > 0) {
                        h = 5
                    } else {
                        h = 6
                    }
                } else {
                    if (f == 5 || f == 6) {}
                }
            }
            $("#pageStatus_" + i).val(h);
            oneInitPage(i);
            if (h == 5 || h == 6) {
                var c = $("#status_" + i).val();
                if (c == 2) {
                    itemIdMap.put(i, true);
                    setTimeout(execMap, auctOffset)
                }
            }
        })
    }
}

function brushPrices() {
    pushData(function(d) {
        if (!!d) {
            if (d.m1) {
                try {
                    currentServerTime = parseInt(d.m1);
                    paramMap.remove("m1")
                } catch (g) {}
            }
            if (d.m5 && d.m5.length > 0) {
                try {
                    var l = d.m5,
                        k = new Array();
                    for (var m in l) {
                        k = paramMap.data.m5;
                        for (var h in k) {
                            if (l[m].i == k[h]) {
                                k.splice(h, 1);
                                break
                            }
                        }
                    }
                    initNextAuctionNew(d.m5, function(e) {
                        serverPushGetNext(e)
                    }, false)
                } catch (g) {}
            }
            if (d.m2 && d.m2.length > 0) {
                try {
                    serverPushCurrentPrice(d.m2)
                } catch (g) {}
            }
            if (d.m6) {
                try {
                    if (d.m6.u == authId) {
                        serverPushBidReminder(d.m6.l);
                        paramMap.remove("m6")
                    }
                } catch (g) {}
            }
            if (d.m10 && d.m10.length > 0) {
                try {
                    for (var f = 0; f < d.m10.length; f++) {
                        var c = d.m10[f];
                        if (c.w >= 0) {
                            $("#watchNum_" + c.i).html(c.w)
                        }
                    }
                } catch (g) {}
            }
            if (d.m7 && d.m7.length > 0) {
                try {
                    var a = getItemIdsArry();
                    for (var f = 0; f < d.m7.length; f++) {
                        var c = d.m7[f];
                        for (var b = 0; b < a.length; b++) {
                            if (c.i == a[b]) {
                                serverPushProperty(c);
                                break
                            }
                        }
                    }
                } catch (g) {}
            }
        }
    })
}

function serverPushCurrentPrice(b) {
    if (!!b && b.length > 0) {
        for (var a = 0; a < b.length; a++) {
            var e = $("input[auctkey='" + b[a].d + "']").attr("itemkey");
            $("#dangqianjia_" + e).html("￥" + parseFloat(b[a].a));
            $("#chujiacishu_" + e).html(b[a].f);
            if (parseInt($("#endTime_" + e).val()) < parseInt(b[a].e)) {
                var c = $("#pageStatus_" + e).val();
                if (c == "5" || c == "6") {
                    var d = $("#oldPageStatus_" + e).val();
                    $("#pageStatus_" + e).val(d);
                    oneInitPage(e)
                }
                $("#endTime_" + e).val(b[a].e);
                countDown_simpleFn(e, getTimeDiffNew(b[a].e))
            }
        }
    }
}

function serverPushGetNext(j) {
    for (var e = 0; e < j.length; e++) {
        var d = j[e];
        var g = d.itemId;
        var c = $("#pageStatus_" + g).val();
        if (c == "5" || c == "6") {
            var b = $("#isTurn_" + g).val();
            if (b == "0") {
                $("#isTurn_" + g).val(1);
                var a = $("input[itemkey='" + g + "']").attr("auctkey");
                if (d.auctId != a) {
                    $("#status_" + g).val(2);
                    setTurnData(d);
                    $("#nextSaleTemp_" + g).val(0)
                } else {
                    $("#isTurn_" + g).val(0);
                    var f = $("#nextSaleTemp_" + g).val();
                    if (f < ajaxNum) {
                        itemIdMap.put(g, true);
                        setTimeout(execMap, repeatOffset);
                        $("#nextSaleTemp_" + g).val(parseInt(f) + 1)
                    } else {
                        var h = $("#pageStatus_" + g).val();
                        if (h == "5" || h == "6") {
                            $("#status_" + g).val(3);
                            oneInitPage(g)
                        }
                    }
                }
            }
        }
    }
}

function serverPushProperty(a) {
    var b = a.i;
    if (a.n != undefined && a.n != "") {
        $("#name_detailUrl_" + b).html(a.n);
        $("#name_detailUrl_" + b).attr("title", a.n);
        $("#itemPicUrl_" + b).attr("title", a.n);
        $("#itemPicUrl_" + b).attr("alt", a.n)
    }
    if (a.p != undefined) {
        if (a.p != 0) {
            $("#cankaojia_" + b).html("￥" + a.p)
        } else {
            $("#cankaojia_" + b).html("暂无报价")
        }
    }
    if (a.u != undefined) {
        $("#upsetPrice_" + b).val(parseFloat(a.u));
        $("#dangqianjia_" + b).html("￥" + parseFloat(a.u))
    }
}

function setTurnData(b) {
    var g = b.itemId;
    try {
        $("#pageStatus_" + g).val(b.pageStatus);
        $("input[itemkey='" + g + "']").attr("auctkey", b.auctId);
        $("#auctId_" + g).val(b.auctId);
        $("#startTime_" + g).val(b.auctStartDate);
        $("#endTime_" + g).val(b.auctEndDate);
        var c = $("#upsetPrice_" + g).val();
        $("#dangqianjia_" + g).html("￥" + parseFloat(c));
        $("#chujiacishu_" + g).html(0);
        $("#round_" + g).html(b.round);
        oneInitPage(g);
        var a = b.pageStatus;
        if (a == 1) {
            var f = getTimeDiffNew(b.auctStartDate);
            countDown_simpleFn(g, f)
        } else {
            if (a == 3) {
                var f = getTimeDiffNew(b.auctEndDate);
                countDown_simpleFn(g, f)
            }
        }
        $("#isTurn_" + g).val(0)
    } catch (d) {
        $("#isTurn_" + g).val(0)
    }
}

function execMap() {
    if (itemIdMap && itemIdMap.size() > 0) {
        var c = new Array();
        var b = itemIdMap.keys;
        for (var a in b) {
            c.push(b[a])
        }
        paramMap.put("m5", c);
        for (var a in c) {
            itemIdMap.remove(c[a])
        }
        c = null
    }
}

function eveDayZeroRefresh() {
    var a = new Date();
    var e = a.getHours();
    var d = a.getMinutes();
    var c = CurentTimeYmdFn(a);
    if (e == 0 && d < 10) {
        var b = window.location.search;
        if (!b) {
            window.location.href = rootPath + "/index.htm?d=" + c
        }
    }
}

function CurentTimeYmdFn(d) {
    var c = d.getFullYear();
    var e = d.getMonth() + 1;
    var a = d.getDate();
    var b = c;
    if (e < 10) {
        b += "0"
    }
    b += e;
    if (a < 10) {
        b += "0"
    }
    b += a;
    return b
};
