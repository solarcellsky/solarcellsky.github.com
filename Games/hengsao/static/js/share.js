$(function(){
	var nonceStr = 'Wm3WZYTPz0wzccnW';

	var timestamp = (new Date()).getTime();
	var url = location.href.split('#')[0];
	var str1 = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonceStr
			+ '&timestamp=' + timestamp + '&url=' + url;
	var signature = "" + CryptoJS.SHA1(str1, {
		asString : true
	});
	 
	wx.config({
		debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId : 'wxffc773f88c7891ed', // 必填，公众号的唯一标识
		timestamp : timestamp, // 必填，生成签名的时间戳
		nonceStr : nonceStr, // 必填，生成签名的随机串
		signature : signature,// 必填，签名，见附录1
		jsApiList : [ 'onMenuShareTimeline', 'onMenuShareAppMessage',
				'onMenuShareQQ' ]
	// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
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
});
