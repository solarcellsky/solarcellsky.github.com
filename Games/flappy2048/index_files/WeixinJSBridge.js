document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	window.shareData = {
		"imgUrl": "http://bbs.y3.cn/wechat/website/games/images/flappy2048.jpg",
		//可以是页面的头像，也可以是自己定义的一张图片不变，每个页面可以有这个JS
		"timeLineLink": "http://www.91jiao.com/flappy2048/",
		"sendFriendLink": "http://www.91jiao.com/flappy2048/",
		"weiboLink": "http://www.91jiao.com/flappy2048/",
		//发送朋友圈
		"tTitle": "比2048和Flappy Bird还要虐心的游戏我已经在玩啦！速度来挑战我！",
		"tContent": "史上最好玩的益智游戏，怎么都停不下来的对战体验！",
		//发送给朋友
		"fTitle": "比2048和Flappy Bird还要虐心的游戏我已经在玩啦！速度来挑战我！",
		"fContent": "史上最好玩的益智游戏，怎么都停不下来的对战体验！",
		"wContent": "比2048和Flappy Bird还要虐心的游戏我已经在玩啦！速度来挑战我！"
	};
	// 发送给好友
	WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		WeixinJSBridge.invoke('sendAppMessage', {
			"img_url": window.shareData.imgUrl,
			// "img_width": "640",
			// "img_height": "640",
			"link": window.shareData.sendFriendLink,
			"desc": window.shareData.fContent,
			"title": window.shareData.fTitle
		}, function(res) {
			_report('send_msg', res.err_msg);
		})
	});

	// 分享到朋友圈
	WeixinJSBridge.on('menu:share:timeline', function(argv) {
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url": window.shareData.imgUrl,
			"img_width": "640",
			"img_height": "640",
			"link": window.shareData.timeLineLink,
			"desc": window.shareData.tContent,
			"title": window.shareData.tTitle
		}, function(res) {
			_report('timeline', res.err_msg);
		});
	});

	// 分享到微博
	WeixinJSBridge.on('menu:share:weibo', function(argv) {
		WeixinJSBridge.invoke('shareWeibo', {
			"content": window.shareData.wContent,
			"url": window.shareData.weiboLink,
		}, function(res) {
			_report('weibo', res.err_msg);
		});
	});

}, false)