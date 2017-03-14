var itemIdMap = new Map();
var m_cateId = 0;

function tomorrowPageOffsetHandle() {
    $(window).scroll(function() {
        var b = getTabCategoryCookie();
        if (!!b) {
            b[m_cateId] = window.pageYOffset;
            b = JSON.stringify(b);
            addCookie("tabCategory", b)
        }
    });
    if (!!getCookie("tabCategory")) {
        var a = JSON.parse(unescape(getCookie("tabCategory")));
        if (off) {
            if (typeof(a[m_cateId]) != "undefined") {
                document.documentElement.scrollTop = document.body.scrollTop = a[m_cateId];
                off = false
            }
        }
        if (!!a) {
            a.tomorrow_currTabCategory = m_cateId;
            a.currentTabView = 2;
            a = JSON.stringify(a);
            addCookie("tabCategory", a)
        }
    }
}

function tomorrowGetAllSaleAjax(e) {
    var d = $(".index-tab").offset().top;
    var c = $("#tomorrowInfo").find(".timesquare");
    if (c.length <= 0) {
        $("#productList").html("");
        return
    }
    var a = $("#tomorrowInfo").find(".timesquare").eq(0).attr("tomorrowCateId");
    var b = rootPath + "/tomorrowAallSaleJsonp.htm";
    if (!e) {
        e = a
    }
    m_cateId = e;
    $.ajax({
        url: b,
        data: {
            cateId: e
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
            var f = h.tomorrowAuctItemDetailList;
            if (!!f) {
                $("#productList").html("");
                var g = Mustache.to_html($("#tomorrow").html(), f).replace(/^\s*/mg, "");
                $("#productList").append(g);
                $("#productList").fadeIn(500);
                var i = document.documentElement.scrollTop || document.body.scrollTop;
                if (i > d) {
                    document.documentElement.scrollTop = document.body.scrollTop = d;
                    setStaticMenu()
                }
                tomorrowInitPage();
                tomorrowPageOffsetHandle();
                lazyLoad("#productList")
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

function getTomorrowItemIdsArry() {
    var a = $("#productList input[id^='tomorrowItemId_']");
    var c = [];
    for (var b = 0; b < a.length; b++) {
        c.push($(a[b]).val())
    }
    return c
}

function tomorrowInitPage() {
    var h = getTomorrowItemIdsArry();
    for (var c = 0; c < h.length; c++) {
        var g = h[c];
        var e = $("#tomorrowProductId_" + g).val();
        var a = getProductImageUrl(e, "1", "200x200");
        $("#tomorrowItemPicUrl_" + g).attr("data-src", a);
        var f = $("#tomorrowStartTime_" + g).val();
        var d = millsOrStrToDate(parseInt(f));
        $("#tomorrowAuctTime_" + g).html(d);
        var b = $("#tomorrowProductPrice_" + g).val();
        if (!b || b == 0) {
            $("#tomorrowCankaojia_" + g).html("暂无报价")
        } else {
            $("#tomorrowCankaojia_" + g).html("￥" + parseFloat(b))
        }
    }
}

function brushWatch() {
    pushData(function(d) {
        if (!!d) {
            if (d.m6) {
                try {
                    if (d.m6.u == authId) {
                        serverPushBidReminder(d.m6.l);
                        paramMap.remove("m6")
                    }
                } catch (g) {}
            }
            if (d.m7 && d.m7.length > 0) {
                try {
                    var a = getTomorrowItemIdsArry();
                    for (var c = 0; c < d.m7.length; c++) {
                        var f = d.m7[c];
                        for (var b = 0; b < a.length; b++) {
                            if (f.i == a[b]) {
                                tomorrowServerPushProperty(f);
                                break
                            }
                        }
                    }
                } catch (g) {}
            }
            if (d.m10 && d.m10.length > 0) {
                try {
                    for (var c = 0; c < d.m10.length; c++) {
                        var f = d.m10[c];
                        if (f.w > 0) {
                            $("#tomorrowWatchNum_" + f.i).html(f.w)
                        }
                    }
                } catch (g) {}
            }
        }
    })
}

function tomorrowServerPushProperty(a) {
    var b = a.i;
    if (a.n != undefined && a.n != "") {
        $("#tomorrowName_detailUrl_" + b).attr("title", a.n);
        $("#tomorrowName_detailUrl_" + b).html(a.n);
        $("#tomorrowItemPicUrl_" + b).attr("title", a.n);
        $("#tomorrowItemPicUrl_" + b).attr("alt", a.n)
    }
    if (a.p != undefined) {
        if (a.p != 0) {
            $("#tomorrowCankaojia_" + b).html("￥" + a.p)
        } else {
            $("#tomorrowCankaojia_" + b).html("暂无报价")
        }
    }
    if (a.u != undefined) {
        $("#tomorrowUpsetPrice_" + b).html("￥" + parseFloat(a.u))
    }
};
