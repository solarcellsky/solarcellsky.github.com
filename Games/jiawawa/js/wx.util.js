(function($){
$(function(){
	$.ajax({
		url:"/rhsurvey/wx.api.jsp?url="+encodeURIComponent(location.href),
		dataType:"json",
		success:function(config){
			//config.debug = true;
			config.jsApiList = [
			    "onMenuShareTimeline",
			    "onMenuShareAppMessage"
			];
			//alert(JSON.stringify(config));
			//alert(wx);
			wx.config(config);
			wx.error(function(res){
				//alert(JSON.stringify(res));
			});
			wx.ready(function(){
				//alert(JSON.stringify(config));
				/*
				wx.onMenuShareTimeline({
				    title:share.title, // 分享标题
				    link:share.link, // 分享链接
				    imgUrl:share.imgUrl, // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    	//alert("分享成功");
				    	share.success();
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    	//alert("分享失败");
				    	share.cancel();
				    }
				});
				*/
				wx.onMenuShareAppMessage(share);
				wx.onMenuShareTimeline(share);
			});
		}
	});
	
});
	//兼容老版本的微信分享
	var shareFriend = function(r,fn){
		WeixinJSBridge.invoke('sendAppMessage',{
			"img_url":r.imgUrl,
			"img_width":"200",
			"img_height":"200",
			"link":r.link,
			"desc":r.desc,
			"title":r.title
			},function(res){
				setTimeout(fn, 1);
			}
			);
		};
		var shareTimeline = function(r,fn){
		WeixinJSBridge.invoke('shareTimeline',{
			"img_url":r.imgUrl,
			"img_width":"200",
			"img_height":"200",
			"link":r.link,
			"desc":r.title,
			"title":r.title
		},function(res){
			setTimeout(fn, 1);
		});
		};
	document.addEventListener('WeixinJSBridgeReady',function(){
		WeixinJSBridge.on('menu:share:appmessage',function(argv){
			shareFriend(share,share.success);
		});
		WeixinJSBridge.on('menu:share:timeline',function(argv){
			shareTimeline(share,share.success);
		});
		
	    WeixinJSBridge.call('showOptionMenu');
	},false);
})(jQuery);