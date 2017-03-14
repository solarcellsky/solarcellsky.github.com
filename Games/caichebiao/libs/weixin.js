function linkShare() {
    connectDidiJSBridge(function(e) {
        "undefined" != typeof e && e.callHandler("invoke_entrance", null)
    })
}

function isInDidi() {
    return window.DidiJSBridge || void 0 != window.KDShare && void 0 != window.KDShare.share || navigator.userAgent.indexOf("kd.passenger") > -1 ? !0 : !1
}

function getData(e, c) {
    console.log(e, c), 0 == e && (e = 1);
    var n = 10 * (e - 1) + parseInt((30 - c) / 3);
    return changeShare(n), n
}

function changeShare(e) {
    didi.setShare({
        title: "我击败了全国" + e + "%的人",
        url: "http://car.xiaojukeji.com/static/web/scc/index.html",
        icon: "http://car.xiaojukeji.com/static/web/scc/resource/assets/share.jpg",
        content: "这些车标99.9%的人都认不全",
        success: function() {}
    })
}

function jiance(e) {
    var c = e;
    switch (c) {
        case "a":
            _czc.push(["_trackEvent", "按钮", "开始游戏", "开始游戏", 0, "btn1"]), console.log(c);
            break;
        case "b":
            _czc.push(["_trackEvent", "按钮", "再测一次", "再测一次", 0, "btn2"]), console.log(c);
            break;
        case "c":
            _czc.push(["_trackEvent", "按钮", "立即分享", "立即分享", 0, "btn3"]), console.log(c);
            break;
        case "d":
            _czc.push(["_trackEvent", "按钮", "领取红包", "领取红包", 0, "btn4"]), console.log(c);
            break;
        case "e":
            _czc.push(["_trackEvent", "按钮", "车型预览", "车型预览", 0, "btn5"]), console.log(c);
            break;
        case "f":
            _czc.push(["_trackEvent", "按钮", "打开音乐", "打开音乐", 0, "btn6"]), console.log(c)
    }
}

function getPick() {
    _czc.push(["_trackEvent", "按钮", "领取红包", "领取红包", 0, "btn4"]), setTimeout("window.location.href='http://dwz.cn/2etDyV'", 500)
}
didi.setShare({
    title: "这些车标99.9%的人都认不全",
    url: "http://car.xiaojukeji.com/static/web/scc/index.html",
    icon: "http://car.xiaojukeji.com/static/web/scc/resource/assets/share.jpg",
    content: "这些车标99.9%的人都认不全",
    success: function() {}
});
var connectDidiJSBridge = function(e) {
    window.DidiJSBridge ? e(DidiJSBridge) : document.addEventListener("DidiJSBridgeReady", function() {
        alert("这是DIDIJSBridge" + DidiJSBridge), e(DidiJSBridge)
    }, !1)
};
jiance("f");
