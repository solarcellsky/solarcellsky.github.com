function bindEvent() { $(".page2, .page3, .page1").on("touchmove", function(e) { e.preventDefault() }), $(".page2").unbind("touchstart").unbind("touchmove"), $(".page1 .btn").on("touchend", function() { mySwiper.slideNext() }), $(".shareBtn").on("touchend", function(e) { e.stopPropagation(), $(".share").fadeIn() }), $(".share").on("touchend", function(e) { e.stopPropagation(), $(".share").fadeOut() }), $(".againBtn").on("touchend", function(e) { e.stopPropagation(), mySwiper.slideTo(1) }), $(".audio").on("touchend", function() { $(this).toggleClass("pause"), $(this).hasClass("pause") ? (music_bg.pause(), $(".audio").removeClass("rotate")) : (music_bg.play(), $(".audio").addClass("rotate")) }), $(".winBtn").on("touchend", function(e) { e.stopPropagation(), AjaxFunc.getAction(hasChance ? { url: API_URL.addPrize, callback: function(e) { e.success && AjaxFunc.getAction({ url: API_URL.getPrize, alertFalse: "no", callback: function(e) {
                        var n = e.list || [];
                        return n.length ? ($(".card-wrap").show(), hasChance = !1, $(".winBtn").text("查看奖品"), hasPrizeList = n, void initCards(n, function() { mySwiper.slideNext() })) : void $(".card-wrap").hide() } }) } } : { url: API_URL.getPrize, alertFalse: "no", callback: function(e) {
                var n = e.list || [];
                return n.length ? ($(".card-wrap").show(), hasPrizeList = n, void initCards(n, function() { mySwiper.slideNext() })) : void $(".card-wrap").hide() } }) }), $("#clipBtn").on("touchend", function(e) { e.stopPropagation(), $(".te3").hide(), $("#rotateBtn").hide();
        var n = clipCanvas.getResults();
        return n ? ($(".te4").show(), n = n.split("data:image/png;base64,")[1], void $.ajax({ url: "http://jump.word1k.com/pic/youtu/api/detectface", type: "post", data: JSON.stringify({ image: n, app_id: "10023196" }), dataType: "json", contentType: "text/json", beforeSend: function(e) { e.setRequestHeader("Authorization", token) }, success: function(e) {
                return $(".te4").hide(), 0 != e.errorcode ? "SDK_IMAGE_FACEDETECT_FAILED" == e.errormsg ? void X.dialog.tips("没有检测到人脸") : void X.dialog.tips(e.errormsg) : (point = Number(e.face[0].beauty), point >= 99 ? $(".score1").show() : point >= 90 ? $(".score2").show() : point >= 80 ? $(".score3").show() : point >= 70 ? $(".score4").show() : $(".score5").show(), uploadPhoto || (initWeixin2(), uploadPhoto = !0), initWeixin2(point), void mySwiper.slideNext()) } })) : void X.dialog.tips("请先选择照片") }), $(".card-wrap").on("touchend", function() {
        var e = $(this).data("code"),
            n = $(this).data("raw");
        sessionStorage.setItem("info", JSON.stringify(n)), location.href = "code.html?code=" + e }), $("#myBtn").on("touchend", function() {
        var e = hasPrizeList || [];
        return e.length ? void initCards(e, function() { mySwiper.slideTo(3) }) : void X.dialog.tips("您还没有礼品") }), $(".linkBtn").on("touchend", function() { location.href = "http://www.rabbitpre.com/m/QeybEZZvr" }) }

function initCards(e, n) {
    var i = e[0];
    if (i.value = Price_Map[i.level], $(".card-wrapF .money").text(i.value.v), $(".card-wrapF .cill").text(i.value.m), $(".card-wrapF").data("code", i.code).data("raw", i.value), 2 == e.length) { $(".card-wrapF").addClass("card-wrap1"), $(".text").addClass("two");
        var t = e[1];
        t.value = Price_Map[t.level], $(".card-wrapF2 .money").text(t.value.v), $(".card-wrapF2 .cill").text(t.value.m), $(".card-wrapF2").show().data("code", t.code).data("raw", t.value) } else $(".card-wrapF2").hide();
    n && n() }

function initSwipe() { $(".swiper-container").show(), $(".preload").hide(), mySwiper = new Swiper(".swiper-container", { direction: "vertical", onInit: function(e) { swiperAnimateCache(e), swiperAnimate(e), $(".leafX1").removeClass("leafT"), $(".leafX2").removeClass("leafB"), setTimeout(function() { $(".leafX1").addClass("leafT"), $(".leafX2").addClass("leafB") }, 5e3) }, onSlideChangeEnd: function(e) { swiperAnimate(e), 1 != e.snapIndex || photoInited ? 2 == e.snapIndex ? (pointW || (pointW = $(".point-wrap").width()), initCircle(point)) : ($(".score").hide(), drawTimer && clearInterval(drawTimer), mackCanvasCTX.clearRect(0, 0, pointW, pointW)) : (photoInited = !0, clipCanvas = new ImgClip({ canvas: "canvas01", fileObj: "file", cutBtn: "clipBtn", resultObj: "hit", cutScale: 1, rotateR: "rotateBtn" })), 1 == e.snapIndex ? ($(".leafPT2").removeClass("leafT"), $(".leafPB2").removeClass("leafB"), setTimeout(function() { $(".leafPT2").addClass("leafT"), $(".leafPB2").addClass("leafB") }, 5e3)) : 2 == e.snapIndex ? ($(".leafPT3").removeClass("leafT"), $(".leafPB3").removeClass("leafB"), setTimeout(function() { $(".leafPT3").addClass("leafT"), $(".leafPB3").addClass("leafB") }, 5e3)) : 3 == e.snapIndex && ($(".leafPT4").removeClass("leafT"), $(".leafPB4").removeClass("leafB"), setTimeout(function() { $(".leafPT4").addClass("leafT"), $(".leafPB4").addClass("leafB") }, 5e3)) }, onTransitionEnd: function(e) { swiperAnimate(e) } }), f && "code" == f && mySwiper.slideTo(3) }

function initCircle(e) {
    function n(e) {
        var n = 0;
        drawTimer = setInterval(function() {
            return t > 100 ? (clearInterval(drawTimer), drawTimer = null, !0) : void(e >= n ? (i(), n += 1, t += 1) : (clearInterval(drawTimer), drawTimer = null)) }, a) }

    function i() { $("#loadedNum").text(t);
        var e = 2 * t / 100 * Math.PI,
            n = pointW,
            i = n / 2;
        mackCanvasCTX.clearRect(0, 0, n, n), mackCanvasCTX.beginPath(), mackCanvasCTX.arc(i, i, i - 1, 0, e, !1), mackCanvasCTX.lineWidth = 2, mackCanvasCTX.strokeStyle = "#ee8a81", mackCanvasCTX.stroke();
        var a = i * Math.sin(e),
            o = i - i * Math.cos(e),
            r = $(".particle:after"),
            s = r.width(),
            c = r.height();
        $(".particle").css({ left: a - s / 2 + 8, top: o - c / 2 }) }
    var t = 0,
        a = 50;
    mackCanvas.setAttribute("width", pointW + "px"), mackCanvas.setAttribute("height", pointW + "px"), n(e) }

function initWeixin() { new WeixinTools({ debug: !1, signatureUrl: API_URL.signatureUrl, apis: ["checkJsApi"] });
    wx.ready(function() { wx.hideOptionMenu() }) }

function initWeixin2(e) {
    var n = new WeixinTools({ debug: !1, signatureUrl: API_URL.signatureUrl, apis: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage"] }),
        i = { title: "逆天！颜值还能当钱花？快来看看你的颜值是多少吧！", desc: " 颜值有礼，杭州大厦春季美妆节测颜值送好礼，快来测测自己的颜值有多少！", imgUrl: "http://jump.word1k.com/hzds/images/ds.jpg", link: "http://jump.word1k.com/r/cwm/urlRedirect?id=25" };
    e = e || 0, e >= 99 ? i.title = "我的颜值" + e + "分，这张脸打99分，少一分是怕我骄傲！你也来试试吧！" : e >= 90 ? i.title = "我的颜值" + e + "分，我离奥斯卡只差一座小金人了！你也来试试吧！" : e >= 80 ? i.title = "我的颜值" + e + "分，靠脸吃饭，买化妆品不需要花钱！你也来试试吧！" : e >= 70 ? i.title = "我的颜值" + e + "分，哇塞！快来围观，这里有个美人！你也来试试吧！" : e >= 60 && (i.title = "我的颜值" + e + "分，哎呦！这么迷人，快到碗里来！你也来试试吧！"), wx.ready(function() { wx.showOptionMenu(), n.shareAppMessage(i), n.shareTimeline(i), wx.checkJsApi({ jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"], success: function() {} }), wx.onMenuShareAppMessage({ title: i.title, desc: i.desc, link: i.link, imgUrl: i.imgUrl, success: function() { shareHandler(1) }, cancel: function() {} }), wx.onMenuShareTimeline({ title: i.title, link: i.link, imgUrl: i.imgUrl, success: function() { shareHandler(2) }, cancel: function() {} }) }) }

function shareHandler(e) { AjaxFunc.getAction({ url: API_URL.shareFromWeixin, data: { type: e, activityName: ActivityName }, callback: function() {} }) }! function(e, n) { "function" == typeof define && (define.amd || define.cmd) ? define(function() {
        return n(e) }) : n(e, !0) }(this, function(e, n) {
    function i(n, i, t) { e.WeixinJSBridge ? WeixinJSBridge.invoke(n, a(i), function(e) { r(n, e, t) }) : d(n, t) }

    function t(n, i, t) { e.WeixinJSBridge ? WeixinJSBridge.on(n, function(e) { t && t.trigger && t.trigger(e), r(n, e, i) }) : t ? d(n, t) : d(n, i) }

    function a(e) {
        return e = e || {}, e.appId = P.appId, e.verifyAppId = P.appId, e.verifySignType = "sha1", e.verifyTimestamp = P.timestamp + "", e.verifyNonceStr = P.nonceStr, e.verifySignature = P.signature, e }

    function o(e) {
        return { timeStamp: e.timestamp + "", nonceStr: e.nonceStr, "package": e.package, paySign: e.paySign, signType: e.signType || "SHA1" } }

    function r(e, n, i) {
        var t, a, o;
        switch (delete n.err_code, delete n.err_desc, delete n.err_detail, t = n.errMsg, t || (t = n.err_msg, delete n.err_msg, t = s(e, t), n.errMsg = t), i = i || {}, i._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", P.debug && !i.isInnerInvoke && alert(JSON.stringify(n)), a = t.indexOf(":"), o = t.substring(a + 1)) {
            case "ok":
                i.success && i.success(n);
                break;
            case "cancel":
                i.cancel && i.cancel(n);
                break;
            default:
                i.fail && i.fail(n) }
        i.complete && i.complete(n) }

    function s(e, n) {
        var i, t, a = e,
            o = g[a];
        return o && (a = o), i = "ok", n && (t = n.indexOf(":"), i = n.substring(t + 1), "confirm" == i && (i = "ok"), "failed" == i && (i = "fail"), -1 != i.indexOf("failed_") && (i = i.substring(7)), -1 != i.indexOf("fail_") && (i = i.substring(5)), i = i.replace(/_/g, " "), i = i.toLowerCase(), ("access denied" == i || "no permission to execute" == i) && (i = "permission denied"), "config" == a && "function not exist" == i && (i = "ok"), "" == i && (i = "fail")), n = a + ":" + i }

    function c(e) {
        var n, i, t, a;
        if (e) {
            for (n = 0, i = e.length; i > n; ++n) t = e[n], a = f[t], a && (e[n] = a);
            return e } }

    function d(e, n) {
        if (!(!P.debug || n && n.isInnerInvoke)) {
            var i = g[e];
            i && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "") } }

    function l() { 0 != A.preVerifyState && (T || y || P.debug || "6.0.2" > k || A.systemType < 0 || $ || ($ = !0, A.appId = P.appId, A.initTime = b.initEndTime - b.initStartTime, A.preVerifyTime = b.preVerifyEndTime - b.preVerifyStartTime, L.getNetworkType({ isInnerInvoke: !0, success: function(e) {
                var n, i;
                A.networkType = e.networkType, n = "http://open.weixin.qq.com/sdk/report?v=" + A.version + "&o=" + A.preVerifyState + "&s=" + A.systemType + "&c=" + A.clientVersion + "&a=" + A.appId + "&n=" + A.networkType + "&i=" + A.initTime + "&p=" + A.preVerifyTime + "&u=" + A.url, i = new Image, i.src = n } }))) }

    function u() {
        return (new Date).getTime() }

    function p(n) { S && (e.WeixinJSBridge ? n() : h.addEventListener && h.addEventListener("WeixinJSBridgeReady", n, !1)) }

    function m() { L.invoke || (L.invoke = function(n, i, t) { e.WeixinJSBridge && WeixinJSBridge.invoke(n, a(i), t) }, L.on = function(n, i) { e.WeixinJSBridge && WeixinJSBridge.on(n, i) }) }
    var f, g, h, v, w, _, T, y, S, x, I, k, $, C, b, A, P, M, B, L;
    return e.jWeixin ? void 0 : (f = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest" }, g = function() {
        var e, n = {};
        for (e in f) n[f[e]] = e;
        return n }(), h = e.document, v = h.title, w = navigator.userAgent.toLowerCase(), _ = navigator.platform.toLowerCase(), T = !(!_.match("mac") && !_.match("win")), y = -1 != w.indexOf("wxdebugger"), S = -1 != w.indexOf("micromessenger"), x = -1 != w.indexOf("android"), I = -1 != w.indexOf("iphone") || -1 != w.indexOf("ipad"), k = function() {
        var e = w.match(/micromessenger\/(\d+\.\d+\.\d+)/) || w.match(/micromessenger\/(\d+\.\d+)/);
        return e ? e[1] : "" }(), $ = !1, C = !1, b = { initStartTime: u(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 }, A = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", preVerifyState: 1, systemType: I ? 1 : x ? 2 : -1, clientVersion: k, url: encodeURIComponent(location.href) }, P = {}, M = { _completes: [] }, B = { state: 0, data: {} }, p(function() { b.initEndTime = u() }), L = { config: function(e) { P = e, d("config", e);
            var n = P.check === !1 ? !1 : !0;
            p(function() {
                var e, t, a;
                if (n) i(f.config, { verifyJsApiList: c(P.jsApiList) }, function() { M._complete = function(e) { b.preVerifyEndTime = u(), B.state = 1, B.data = e }, M.success = function() { A.preVerifyState = 0 }, M.fail = function(e) { M._fail ? M._fail(e) : B.state = -1 };
                    var e = M._completes;
                    return e.push(function() { l() }), M.complete = function() {
                        for (var n = 0, i = e.length; i > n; ++n) e[n]();
                        M._completes = [] }, M }()), b.preVerifyStartTime = u();
                else {
                    for (B.state = 1, e = M._completes, t = 0, a = e.length; a > t; ++t) e[t]();
                    M._completes = [] } }), P.beta && m() }, ready: function(e) { 0 != B.state ? e() : (M._completes.push(e), !S && P.debug && e()) }, error: function(e) { "6.0.2" > k || C || (C = !0, -1 == B.state ? e(B.data) : M._fail = e) }, checkJsApi: function(e) {
            var n = function(e) {
                var n, i, t = e.checkResult;
                for (n in t) i = g[n], i && (t[i] = t[n], delete t[n]);
                return e };
            i("checkJsApi", { jsApiList: c(e.jsApiList) }, function() {
                return e._complete = function(e) {
                    if (x) {
                        var i = e.checkResult;
                        i && (e.checkResult = JSON.parse(i)) }
                    e = n(e) }, e }()) }, onMenuShareTimeline: function(e) { t(f.onMenuShareTimeline, { complete: function() { i("shareTimeline", { title: e.title || v, desc: e.title || v, img_url: e.imgUrl || "", link: e.link || location.href, type: e.type || "link", data_url: e.dataUrl || "" }, e) } }, e) }, onMenuShareAppMessage: function(e) { t(f.onMenuShareAppMessage, { complete: function() { i("sendAppMessage", { title: e.title || v, desc: e.desc || "", link: e.link || location.href, img_url: e.imgUrl || "", type: e.type || "link", data_url: e.dataUrl || "" }, e) } }, e) }, onMenuShareQQ: function(e) { t(f.onMenuShareQQ, { complete: function() { i("shareQQ", { title: e.title || v, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e) } }, e) }, onMenuShareWeibo: function(e) { t(f.onMenuShareWeibo, { complete: function() { i("shareWeiboApp", { title: e.title || v, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e) } }, e) }, onMenuShareQZone: function(e) { t(f.onMenuShareQZone, { complete: function() { i("shareQZone", { title: e.title || v, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e) } }, e) }, startRecord: function(e) { i("startRecord", {}, e) }, stopRecord: function(e) { i("stopRecord", {}, e) }, onVoiceRecordEnd: function(e) { t("onVoiceRecordEnd", e) }, playVoice: function(e) { i("playVoice", { localId: e.localId }, e) }, pauseVoice: function(e) { i("pauseVoice", { localId: e.localId }, e) }, stopVoice: function(e) { i("stopVoice", { localId: e.localId }, e) }, onVoicePlayEnd: function(e) { t("onVoicePlayEnd", e) }, uploadVoice: function(e) { i("uploadVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e) }, downloadVoice: function(e) { i("downloadVoice", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e) }, translateVoice: function(e) { i("translateVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e) }, chooseImage: function(e) { i("chooseImage", { scene: "1|2", count: e.count || 9, sizeType: e.sizeType || ["original", "compressed"], sourceType: e.sourceType || ["album", "camera"] }, function() {
                return e._complete = function(e) {
                    if (x) {
                        var n = e.localIds;
                        n && (e.localIds = JSON.parse(n)) } }, e }()) }, previewImage: function(e) { i(f.previewImage, { current: e.current, urls: e.urls }, e) }, uploadImage: function(e) { i("uploadImage", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e) }, downloadImage: function(e) { i("downloadImage", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e) }, getNetworkType: function(e) {
            var n = function(e) {
                var n, i, t, a = e.errMsg;
                if (e.errMsg = "getNetworkType:ok", n = e.subtype, delete e.subtype, n) e.networkType = n;
                else switch (i = a.indexOf(":"), t = a.substring(i + 1)) {
                    case "wifi":
                    case "edge":
                    case "wwan":
                        e.networkType = t;
                        break;
                    default:
                        e.errMsg = "getNetworkType:fail" }
                return e };
            i("getNetworkType", {}, function() {
                return e._complete = function(e) { e = n(e) }, e }()) }, openLocation: function(e) { i("openLocation", { latitude: e.latitude, longitude: e.longitude, name: e.name || "", address: e.address || "", scale: e.scale || 28, infoUrl: e.infoUrl || "" }, e) }, getLocation: function(e) { e = e || {}, i(f.getLocation, { type: e.type || "wgs84" }, function() {
                return e._complete = function(e) { delete e.type }, e }()) }, hideOptionMenu: function(e) { i("hideOptionMenu", {}, e) }, showOptionMenu: function(e) { i("showOptionMenu", {}, e) }, closeWindow: function(e) { e = e || {}, i("closeWindow", {}, e) }, hideMenuItems: function(e) { i("hideMenuItems", { menuList: e.menuList }, e) }, showMenuItems: function(e) { i("showMenuItems", { menuList: e.menuList }, e) }, hideAllNonBaseMenuItem: function(e) { i("hideAllNonBaseMenuItem", {}, e) }, showAllNonBaseMenuItem: function(e) { i("showAllNonBaseMenuItem", {}, e) }, scanQRCode: function(e) { e = e || {}, i("scanQRCode", { needResult: e.needResult || 0, scanType: e.scanType || ["qrCode", "barCode"] }, function() {
                return e._complete = function(e) {
                    var n, i;
                    I && (n = e.resultStr, n && (i = JSON.parse(n), e.resultStr = i && i.scan_code && i.scan_code.scan_result)) }, e }()) }, openProductSpecificView: function(e) { i(f.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e) }, addCard: function(e) {
            var n, t, a, o, r = e.cardList,
                s = [];
            for (n = 0, t = r.length; t > n; ++n) a = r[n], o = { card_id: a.cardId, card_ext: a.cardExt }, s.push(o);
            i(f.addCard, { card_list: s }, function() {
                return e._complete = function(e) {
                    var n, i, t, a = e.card_list;
                    if (a) {
                        for (a = JSON.parse(a), n = 0, i = a.length; i > n; ++n) t = a[n], t.cardId = t.card_id, t.cardExt = t.card_ext, t.isSuccess = t.is_succ ? !0 : !1, delete t.card_id, delete t.card_ext, delete t.is_succ;
                        e.cardList = a, delete e.card_list } }, e }()) }, chooseCard: function(e) { i("chooseCard", { app_id: P.appId, location_id: e.shopId || "", sign_type: e.signType || "SHA1", card_id: e.cardId || "", card_type: e.cardType || "", card_sign: e.cardSign, time_stamp: e.timestamp + "", nonce_str: e.nonceStr }, function() {
                return e._complete = function(e) { e.cardList = e.choose_card_info, delete e.choose_card_info }, e }()) }, openCard: function(e) {
            var n, t, a, o, r = e.cardList,
                s = [];
            for (n = 0, t = r.length; t > n; ++n) a = r[n], o = { card_id: a.cardId, code: a.code }, s.push(o);
            i(f.openCard, { card_list: s }, e) }, chooseWXPay: function(e) { i(f.chooseWXPay, o(e), e) } }, n && (e.wx = e.jWeixin = L), L) });
var UtilFunc = { getQueryString: function() {
            for (var e = location.search.match(new RegExp("[?&][^?&]+=[^?&]+", "g")), n = 0; n < e.length; n++) e[n] = e[n].substring(1);
            return e }, getQueryStringByName: function(e) {
            var n = location.search.match(new RegExp("[?&]" + e + "=([^&]+)", "i"));
            return null == n || n.length < 1 ? "" : n[1] }, setCookie: function(e, n, i, t, a, o) {
            var r = new Date,
                i = arguments[2] ? arguments[2] : 604800;
            r.setTime(r.getTime() + 1e3 * i), document.cookie = escape(e) + "=" + escape(n) + (r ? ";expires=" + r.toGMTString() : "") + (t ? ";path=" + t : "/") + (a ? ";domain=" + a : "") + (o ? ";secure" : "") }, getCookie: function(e) {
            var n = document.cookie.indexOf(e),
                i = document.cookie.indexOf(";", n);
            return -1 == n ? "" : unescape(document.cookie.substring(n + e.length + 1, i > n ? i : document.cookie.length)) }, delCookie: function(e, n) {
            var n = arguments[1] ? arguments[1] : null,
                i = new Date;
            i.setTime(i.getTime() - 1);
            var t = this.getCookie(e);
            null != t && (document.cookie = e + "=" + n + ";expires=" + i.toGMTString()) }, isIE: function(e) {
            var n = document.createElement("b");
            return n.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === n.getElementsByTagName("i").length }, is_weixin: function() {
            var e = navigator.userAgent.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i) ? !0 : !1 }, initApiUrl: function(e) {
            if (!UtilFunc.is_weixin())
                for (var n in e) e[n].indexOf("?") < 0 && (e[n] += "?_dt=" + Math.random()), e[n] = e[n] + "&openid=" + Base.openid + "&password=" + Base.password }, initSize: function(e) { e = e || 20,
                function(n, i) {
                    var t = n.documentElement,
                        a = "orientationchange" in window ? "orientationchange" : "resize",
                        o = function() {
                            var n = t.clientWidth;
                            n && (t.style.fontSize = e * (n / 320) + "px") };
                    o(), n.addEventListener && (i.addEventListener(a, o, !1), n.addEventListener("DOMContentLoaded", o, !1)) }(document, window) } },
    mobile, mySwiper, ActivityName = "杭州大厦春季美妆节",
    music_bg, f = UtilFunc.getQueryStringByName("from"),
    PreLoad = function(e) {
        function n() { this.traceDebug = !1, this.TYPE_IMAGE = "image", this.TYPE_JS = "js", this.TYPE_SOUND = "sound" }
        return n.prototype = { load: function(e, n, i) {
                var t = this;
                return e && 0 != e.length ? (t.list = e, t.onupdate = n, t.oncomplete = i, t.loader = t, t.index = 0, t.loadIndex = 0, t.result = [], t.lresult = [], void t.loadInit()) : void i([]) }, loadInit: function() {
                var e = this;
                e.index >= e.list.length || (e.loadIndex = 0, e.loadStart()) }, loadStart: function() {
                var n, i = this;
                i.loadIndex >= i.list.length || (n = i.list[i.loadIndex], e.ajax({ url: i.url(n.path), success: function() { i.loadComplete() } }), i.loadIndex++, i.loadStart()) }, loadComplete: function() {
                var e = this;
                if (e.index++, e.onupdate && e.onupdate(Math.floor(100 * e.index / e.list.length)), e.index >= e.list.length) { e.loader = null;
                    var n = e.result;
                    e.oncomplete(n) } }, url: function(e) {
                return n.traceDebug ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "t=" + (new Date).getTime() : e } }, n.load = function(e, i, t) {
            var a = new n;
            a.load(e, i, t) }, n }($);
! function(e, n, i, t) { WeixinTools = function(n) { this.options = e.extend({}, { debug: !0 }, n), this.options.signatureUrl && this.options.apis && this.init() }, WeixinTools.prototype = { init: function() {
            var i = this;
            e.get(i.options.signatureUrl, { url: encodeURIComponent(n.location.href) }, function(e) { "string" == typeof e && (e = JSON.parse(e)), e.success && t.config({ debug: i.options.debug, appId: e.value.appId, timestamp: e.value.timestamp, nonceStr: e.value.noncestr, signature: e.value.signature, jsApiList: i.options.apis }) }) }, shareAppMessage: function(e) { t.onMenuShareAppMessage({ title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl, cancel: function() { e.cancelFn && e.cancelFn() }, success: function() { e.successFn && e.successFn(1) } }) }, shareTimeline: function(e) { t.onMenuShareTimeline({ title: e.desc, link: e.link, imgUrl: e.imgUrl, success: function() { e.successFn && e.successFn(2) }, cancel: function() { e.cancelFn && e.cancelFn() } }) } } }($, window, document, wx);
var Base = { openid: "openid1", password: "csj150kg" },
    API_BASE = "r/",
    AjaxFunc = { getAction: function(e) {
            if (e.data)
                for (var n in e.data) e.url += "&" + n + "=" + e.data[n];
            e.alertFalse = e.alertFalse || "yes";
            var i = { url: e.url, type: "GET", contentType: "application/json", dataType: "json", success: function(n) { n && (n.success || n.message && "yes" == e.alertFalse && X.dialog.tips(n.message), e.callback && e.callback(n)) } };
            $.ajax(i) }, saveAction: function(e) { e.alertFalse = e.alertFalse || "yes";
            var n = { url: e.url, type: e.method || "POST", data: JSON.stringify(e.data), contentType: "application/json", dataType: "json", success: function(n) { n && (n.success || n.message && "yes" == e.alertFalse && X.dialog.tips(n.message), e.callback && e.callback(n)) } };
            $.ajax(n) } },
    X = {};
X.dialog = { dbs: [], open: function(e, n) { n = $.init(n, { topic: "", width: 280, notify: null });
        var i = this,
            t = n.width,
            a = X.zi(),
            o = X.zi(),
            r = [o, t],
            s = X.ps(),
            c = s.width,
            d = s.height,
            l = $.round((c - t) / 2),
            u = -60,
            p = new Text;
        10 > l && (l = 10), e && p._($.replace(e, "#di#", o)), r[3] = $.ce("div"), r[3].addClass("db-bg"), r[3].css("zIndex", a), r[3].attr("id", "dialog-bg-" + o), r[4] = $.ce("div"), r[4].addClass("db-wrap"), r[4].css("zIndex", o), r[4].css("width", t + "px"), r[4].css("left", l + "px"), r[4].attr("id", "dialog-" + o), r[4].html(p.ts()), r[5] = n.notify, X.body.append(r[3], r[4]), r[2] = r[4].height(), u = $.round((d - r[2]) / 2 + u), 10 > u && (u = 10), r[4].css("top", u + "px"), r[4].show(), i.dbs.push(r) }, alert: function(e, n) { n = $.init(n, { title: "", msg: e, width: 280, btn: "确定" }), n.width < 180 && (n.width = 180);
        var i = this,
            t = new Text;
        n.title && t._('<div class="db-title">')._(n.title)._("</div>"), t._('<div class="db-content">')._(e)._("</div>"), t._('<div class="db-foot">'), n.cfm && i.addBtn(t, n.btn1, 2), n.ensure ? i.addBtn(t, n.btn, 1) : i.addBtn(t, n.btn, 0), t._("</div>"), i.open(t.ts(), n) }, confirm: function(e, n) { n = $.init(n, { ensure: !0, msg: e, btn1: "取消" }), n.cfm = !0, this.alert(e, n) }, tips: function(e, n) { clearTimeout(window.tipsTimer);
        var i = $('<div class="db-tip">' + e + "</div>");
        $("body").append(i), window.tipsTimer = setTimeout(function() { $(".db-tip").remove(), n && n() }, 2e3) }, addBtn: function(e, n, i) { this.addButton(e, { id: "dialog-btn-#di#", name: n, click: "X.dialog.close(#di#," + i + ");" }) }, addButton: function(e, n) { e._("<p"), n.id && e._(' id="')._(n.id)._('"'), n.css && e._(' class="')._(n.css)._('"'), n.style && e._(' style="')._(n.style)._('"'), n.click && e._(' onclick="')._(n.click)._('"'), e._(">" + n.name + "</p>") }, notify: function(e, n) {
        var i = this.get(e);
        i[5] && i[5]($.no(n) ? 0 : n) }, close: function(e, n) {
        var i, t = this;
        if ($.no(n) && (n = 0), !$.no(e)) {
            if (i = t.get(e), !i) return;
            $.isN(e) && (i[5] ? 0 != n ? (i[5](n), t.get(e, !0), i[4].remove(), i[3].remove()) : i[5](n, function() { t.get(e, !0), i[4].remove(), i[3].remove() }) : (t.get(e, !0), i[4].remove(), i[3].remove())) } }, get: function(e, n) {
        for (var i, t = this, a = t.dbs, o = 0; o < a.length; o++)
            if (a[o][0] == e) { i = a[o], n && a.splice(o, 1);
                break }
        return i } }, X.valid = { isMobile: function(e) {
        return e && /^1[3|5|8|7][0-9]\d{8}$/.test(e) }, isEmail: function(e) {
        return e && /^[0-9a-zA-Z_\-]+@[0-9a-zA-Z_\-]+\.\w{1,5}(\.\w{1,5})?$/.test(e) }, isBankCard: function(e) {
        return e && /^\d{16,30}$/.test(e) } };
var API_URL = { addPhoneNum: API_BASE + "cwm/laofengxiang/addPhoneNum?_dt=" + Math.random(), shareFromWeixin: API_BASE + "shared.json?_dt=" + Math.random(), signatureUrl: API_BASE + "wxconfig.json?_dt=" + Math.random(), addPrize: API_BASE + "addPrize.json?_dt=" + Math.random(), chance: API_BASE + "isHaveChance.json?_dt=" + Math.random(), getToken: API_BASE + "getToken.json?_dt=" + Math.random(), getPrize: API_BASE + "getPrize.json?_dt=" + Math.random() },
    drawTimer = null,
    pointW = 0,
    mackCanvas = document.getElementById("loadingProgress"),
    mackCanvasCTX = mackCanvas.getContext("2d"),
    clipCanvas, photoInited = !1,
    token = null,
    hasChance = !0,
    uploadPhoto = !1,
    point, hasPrize = !1,
    hasPrizeList = [],
    Price_Map = { 1: { v: 100, m: 1e3 }, 2: { v: 20, m: 200 }, 3: { v: 10, m: 100 } };
$(".swiper-container") && $(".swiper-container").hide();
var loadData = [{ name: "img1", path: "./images/bottle_03.png" }, { name: "img2", path: "./images/btn_03.png" }, { name: "img3", path: "./images/flower_03.png" }, { name: "img4", path: "./images/icon-02.png" }, { name: "img6", path: "./images/icon-04.png" }, { name: "img7", path: "./images/icon-05.png" }, { name: "img8", path: "./images/level_lr_02.png" }, { name: "img9", path: "./images/level_lt_01.png" }, { name: "img10", path: "./images/level_rb_03.png" }, { name: "img15", path: "./images/level_rt_02.png" }, { name: "img11", path: "./images/p2-02.png" }, { name: "img12", path: "./images/p2-03.png" }, { name: "img13", path: "./images/ttt1.png" }, { name: "img14", path: "./images/tttt2.png" }, { name: "img155", path: "./images/ds.jpg" }, { name: "img15", path: "./images/share-02.png" }, { name: "img16", path: "./images/p2t_01.png" }, { name: "img17", path: "./images/pel-02.png" }, { name: "img18", path: "./images/ccc_03.png" }, { name: "img19", path: "./images/card-02.png" }];
PreLoad.load(loadData, function() {}, function() { UtilFunc.initApiUrl(API_URL), UtilFunc.initSize(100), $(".fakeloader").fadeOut(), bindEvent(), initSwipe(), $(".audio").show(), music_bg = $("#audio1")[0], music_bg.play(), initWeixin2(), AjaxFunc.getAction({ url: API_URL.getToken, alertFalse: "no", callback: function(e) { e.value && (token = e.value) } }), AjaxFunc.getAction({ url: API_URL.chance, alertFalse: "no", callback: function(e) { e.value ? (hasChance = !0, $(".winBtn").text("获得一次抽奖机会")) : (hasChance = !1, $(".winBtn").text("查看奖品")) } }), AjaxFunc.getAction({ url: API_URL.getPrize, callback: function(e) {
            var n = e.list || [];
            return n.length ? ($(".card-wrap").show(), hasPrizeList = n, hasPrize = !0, $("#clipBtn").hide(), $("#myBtn").show(), void initCards(n)) : (hasPrize = !1, $("#myBtn").hide(), $("#clipBtn").show(), void $(".card-wrap").hide()) } }) });
