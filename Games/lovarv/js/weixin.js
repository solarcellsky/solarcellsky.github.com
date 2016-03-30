var wl = window.location;
var pathUrl = 'http://'+wl.host+wl.pathname;
var wxdata = {};
var wximg = pathUrl.replace(/\w+\.html$/,'')+'images/wxshare.jpg';
wxdata = {
	signUrl : wl.href.split('#')[0],
	link : pathUrl,
	img :wximg,
	title : '重拾童心 无乐不作',//分享给好友
	desc : '乐风RV带你玩成小时候未玩成的遗憾，玩出童年好礼',//分享给好友
	timeLineTitle : '乐风RV带你玩成小时候未玩成的遗憾，玩出童年好礼',//分享到朋友圈
	timeLineImg : wximg
}

$.post('http://www.chevrolet.com.cn/chevy-api/getsign.aspx',{signurl:wxdata.signUrl},function(data){
	if (data.status == 0) {
		setWxConfig(data);
	} else {
		console.log('签名错误');
	}

},'json');	


function setWxConfig(data){
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: data.appid, // 必填，公众号的唯一标识
		timestamp: data.timestamp, // 必填，生成签名的时间戳
		nonceStr:  data.nonceStr, // 必填，生成签名的随机串
		signature: data.signature, // 必填，签名，见附录1
		jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	setWxData();
}; 

function setWxData() {
	wx.ready(function(){

			wx.onMenuShareTimeline({
				title: wxdata.timeLineTitle, // 分享标题
				link: wxdata.link, // 分享链接
				imgUrl: wxdata.timeLineImg, // 分享图标
				success: function() {

				},
				cancel: function() {

				}
			});

			wx.onMenuShareAppMessage({
				title: wxdata.title, // 分享标题
				desc: wxdata.desc, // 分享描述
				link: wxdata.link, // 分享链接 
				imgUrl: wxdata.img, // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function() {

				},
				cancel: function() {

				}
			});
	});



};
















