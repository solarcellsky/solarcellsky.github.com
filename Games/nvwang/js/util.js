var current_page=null; 
var GO_TO_ATTEND_WEBSITE=0;
var select_lucky_type = 0;
 
var loadData = function(_url,param,other,callback,callbackparam){
	if(param == null)
		param = {};  
	if(other==null)
		_url =_url; 
	if(callbackparam['info']== null)
		jQuery("#loadtxt").html("正在加载中...");
	else
		jQuery("#loadtxt").html(callbackparam['info']);
	jQuery("#loadimg").show();
	if(callbackparam != null)
		jQuery(".loadingdiv").fadeIn(500);
	htmlobj=$.ajax({url:_url,async:true, dataType:"json",data:param,type:"POST",success:function(data){
		var jsonobj = data;
		if(jsonobj.result==201){ 
			alert('请关闭页面，重新进入！');
		}else{
			jQuery(".loadingdiv").fadeOut(500);
			callback(jsonobj,callbackparam);
		}
	}});  
}

var clickEventStat = function(category,clicktype,name){
	_hmt.push(['_trackEvent', category,clicktype,name]);	
}

var loadWxShare = function(obj,callback){
				wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: 'wx6c92533f29ed0766', // 必填，公众号的唯一标识
				timestamp:obj.timestamp , // 必填，生成签名的时间戳
				nonceStr: obj.noncestr, // 必填，生成签名的随机串
				signature: obj.signature,// 必填，签名，见附录1
				jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','hideOptionMenu','showOptionMenu','startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice','translateVoice','chooseImage','previewImage','uploadImage','downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			}); 
			
			wx.ready(function(){
				wx.onMenuShareAppMessage({
						title: shareTitle, // 分享标题
						desc: descContent, // 分享描述
						link: lineLink, // 分享链接
						imgUrl: imgUrl2, // 分享图标
						type: '', // 分享类型,music、video或link，不填默认为link
						dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						success: function () { 
							// 用户确认分享后执行的回调函数
							statTraceEvent('index','fenxiangpengyouquan');
						},
						cancel: function () {
							// 用户取消分享后执行的回调函数
						},
						trigger:function(){
							this.link=lineLink;
							this.desc=descContent;
						}
					});
					
					wx.onMenuShareTimeline({
					title: shareTitle, // 分享标题
						desc: descContent, // 分享描述
						link: lineLink, // 分享链接
						imgUrl: imgUrl2, // 分享图标
						success: function () { 
							// 用户确认分享后执行的回调函数
							statTraceEvent('index','fasonghaoyou');
						},
						cancel: function () { 
							// 用户取消分享后执行的回调函数
						},
						trigger:function(){
							this.link=lineLink;
							this.desc=descContent;
							this.title=descContent;
						}
					});
				});
		}