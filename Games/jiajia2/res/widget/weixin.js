define("widget/weixin", ["widget/tips", "widget/wx"], function(require, e, i) {
    var n = require("widget/wx");
    require("widget/tips");
    var t = {
        wx: n,
        version: "",
        isReady: "undefined" != typeof WeixinJSBridge,
        getVersion: function() {
            var e = /MicroMessenger\/([\d.]+)/i,
                i = (navigator.wxuserAgent || navigator.userAgent).match(e),
                n = "";
            n = i ? i[1] : navigator.wxuserAgent ? -1 : -2, this.version = n
        },
        ready: function(e) {
            var i = this;
            this.wx.ready(function() {
                i.isReady = !0, i.getVersion(), $.isFunction(e) && e()
            })
        },
        init: function(e) {
            var i = this,
                n = {},
                t = {
                    sale: "./auth/get_wx_signpackage.json",
                    zhaopin: "./auth/get_wx_signpackage.json",
                    mobile: "./getwxsignpackage.json"
                };
            e.site = e.site ? e.site : "mobile";
            var s = t[e.site];
            return s ? (n.page_url = location.href.split("#")[0], void $.post(s, n, function(n) {
                var t = parseInt(n.retcode, 10),
                    s = n.retmsg;
                0 == t ? (e.appId = n.appId, e.timestamp = n.timestamp, e.nonceStr = n.nonceStr, e.signature = n.signature, i.config(e)) : $.Tips.showError(t, s)
            }, "json")) : ($.Tips.showError(-1, "站点未定义获取微信配置参数的url"), !1)
        },
        config: function(e) {
            this.wx.config(e)
        },
        showOptionMenu: function() {
            this.wx.showOptionMenu()
        },
        onMenuShareTimeline: function(e) {
            this.wx.onMenuShareTimeline(e)
        },
        onMenuShareAppMessage: function(e) {
            this.wx.onMenuShareAppMessage(e)
        }
    };
    i.exports = t
});
//# sourceMappingURL=http://m.fenqile.com/res/mod/widget/weixin.js.map
