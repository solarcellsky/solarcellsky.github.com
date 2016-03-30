//###base###
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
var _share_prizeMark=false;//分享获奖标记
//微信分享
window.wxShareData = {
    title: '太医送丹  等你接招', // 分享标题
    desc: '这个游戏我给100分，还能领取微信电影票红包！', // 分享描述
    link: 'http://herborist2.lzsmedia.com/index.html', // 分享链接
    imgUrl: 'http://herborist2.lzsmedia.com/images/share.jpg', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        //分户分享成功
        if(_share_prizeMark){
            $('#fxwc').show();
        }
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
}
window.wxShareData2 = $.extend({}, window.wxShareData);
window.wxShareData2.title = window.wxShareData.desc;

//微信授权
function _cookies() {
    window.Imperial_OpenId = getCookie('Imperial_OpenId');
    if (!window.Imperial_OpenId) {
        window.location.href = "index.aspx";
    } else {
        return 1;
    }
}
wxMain(false);
function wxMain(accredit) {
    //@accredit=true 需要授权
    if (accredit) {
        if (_cookies() != 1)//微信授权
            return;
    }
    $.ajax({
        url: 'Common/Default.aspx',
        type: 'POST',
        data: { "urls": window.location.href },
        datatype: '',
        success: function (msg) {
            wxShare(msg);
        }
    });
}
function wxShare(msg) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxcc1a6b7968788ab9', // 必填，公众号的唯一标识
        timestamp: 1422031957, // 必填，生成签名的时间戳
        nonceStr: '9sN1Z2TLuiU5KrQO', // 必填，生成签名的随机串
        signature: msg, // 必填，签名，见附录1
        jsApiList: [
          'onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'startRecord', 'stopRecord', 'playVoice', 'uploadVoice', 'downloadVoice'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
        //分享给朋友
        wx.onMenuShareAppMessage(wxShareData);
        //分享到朋友圈
        wx.onMenuShareTimeline(wxShareData2);
        //分享到QQ
        wx.onMenuShareQQ(wxShareData);
        //分享到腾讯微博
        wx.onMenuShareWeibo(wxShareData);
    });
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
}