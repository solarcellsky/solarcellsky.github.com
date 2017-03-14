/// <reference path="jquery-2.1.4.min.js" />
var WeiXinShare = {
    option: {
        title: '',
        link: '',
        imgUrl: '',
        desc: ''
    },
    init: function (jsApiConfigUrl, option) {
        this.option.title = option.title || this.option.title || '';
        this.option.link = option.link || this.option.link || '';
        this.option.imgUrl = option.imgUrl || this.option.imgUrl || '';
        this.option.desc = option.desc || this.option.desc || '';
        $.ajax({
            type: 'post',
            dataType: 'jsonp',
            url: jsApiConfigUrl,
            data: { url: this.encode(window.location.href) },
            success: function (data) {
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                      'checkJsApi',
                      'onMenuShareTimeline',
                      'onMenuShareAppMessage',
                      'onMenuShareQQ',
                      'onMenuShareWeibo',
                      'hideMenuItems',
                      'showMenuItems',
                      'hideAllNonBaseMenuItem',
                      'showAllNonBaseMenuItem'
                    ]
                });
            }
        });
    }, encode: function (text) {
        return typeof encodeURIComponent == "function" ? encodeURIComponent(text) : escape(text);
    }, decode: function (text) {
        return typeof decodeURIComponent == "function" ? decodeURIComponent(text) : unescape(text);
    }
};

wx.ready(function () {
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        //alert(res.errMsg);
    });
    var title = WeiXinShare.option.title;
    var link = WeiXinShare.option.link;
    var imgUrl = WeiXinShare.option.imgUrl;
    var desc = WeiXinShare.option.desc;

    //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    //获取“分享给朋友”按钮点击状态及自定义分享内容接口
    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    //获取“分享到QQ”按钮点击状态及自定义分享内容接口
    wx.onMenuShareQQ({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
    wx.onMenuShareWeibo({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
});