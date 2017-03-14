var shareData = {
    img_url		: "http://419qu.socialfishface.com/img/shareImg.jpg",
    site_link	: 'http://419qu.socialfishface.com/',
    messageDesc	: '万万没想到，我的手竟然可以这样玩？！',
	circleDesc	: '万万没想到，我的手竟然可以这样玩？！',
    title		: '特别的手势给特别的你',
	backFun		: '',
	cancelFun	: ''
};
function successF(_type)
{
	//分享成功 _type: timeline / message
	if(shareData.backFun!='')
	{
		setTimeout(shareData.backFun,1);
	}
	ggTrack("shareSuccess")
}
function cancelF(_type)
{
	//取消分享 _type: timeline / message
	if(shareData.cancelFun!='')
	{
		setTimeout(shareData.cancelFun,1);
	}
	ggTrack("shareCancel")
}
function setShareData()
{
	//朋友圈
	wx.onMenuShareTimeline(
	{
		title	: shareData.circleDesc,
		link	: shareData.site_link,
		imgUrl	: shareData.img_url,
		success	: function () 
		{ 
		 	successF("timeline")   
		},
		cancel	: function ()
		{ 
			cancelF("timeline")
		}
	});
	//好友
	wx.onMenuShareAppMessage(
	{
		title	: shareData.title,
		desc	: shareData.messageDesc, 
		link	: shareData.site_link, 
		imgUrl	: shareData.img_url,
		type	: '', // 分享类型,music、video或link，不填默认为link
		dataUrl	: '', // 如果type是music或video，则要提供数据链接，默认为空
		success	: function () 
		{ 
		 	successF("message")   
		},
		cancel	: function ()
		{ 
			cancelF("message")
		}
	});
}

wx.ready(function()
{
	setShareData()
});


$.ajax({
	type	: "post",
	url		: 'http://share.socialfishface.com/api.aspx?r='+Math.random(),
	dataType: "text",
	data	:{
				type	: "signature",
				url		: window.location.href.split("#")[0],
			},
	async	:false,
	cache	:false,
	success	:function(result)
			{
				result=$.parseJSON(result)
				wx.config(
				{
					debug		: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，
					appId		: 'wx57d868563df1919a', // 必填，公众号的唯一标识
					timestamp	: result.timestamp, // 必填，生成签名的时间戳
					nonceStr	: result.nonceStr, // 必填，生成签名的随机串
					signature	: result.signature,// 必填，签名，见附录1
					jsApiList	: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
			},
	fail	:function(e){}
});