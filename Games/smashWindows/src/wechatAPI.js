var openURL = "http://mp.weixin.qq.com/s?__biz=MjM5MDYwODAyNQ==&mid=200680654&idx=1&sn=60b15e215f2a97170640864559086a8a#rd";
window.shareData = {
    "imgUrl" : "http://219.234.5.130/smashWindows/images/windowBong.png",
    "timeLineLink" :"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6b188f507885bddc&redirect_uri=http%3A%2F%2F219.234.5.130%2FsmashWindows%2FoauthServlet.action&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",
    "tTitle" : "万圣节我砸了0个窗户，赢得了国贸广场万圣节礼物",
    "tContent" : "邀您参加!"
};

window.appMessage = {
    "imgUrl" : "http://219.234.5.130/smashWindows/images/windowBong.png",
    "timeLineLink" :"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6b188f507885bddc&redirect_uri=http%3A%2F%2F219.234.5.130%2FsmashWindows%2FoauthServlet.action&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",
    "tTitle" : "万圣节我砸了0个窗户，赢得了国贸广场万圣节礼物",
    "tContent" : "邀您参加!"
};
document.addEventListener('WeixinJSBridgeReady',
    function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url" : window.appMessage.imgUrl,
                "link" : window.appMessage.timeLineLink,
                "desc" : window.appMessage.tContent,
                "title" : window.appMessage.tTitle
	            }, function(res) {
	                $.post("shareAction.action",function(data){
	                	document.location.href = openURL;
	            	});
	            }
            );
        });

        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url" : window.shareData.imgUrl,
                "img_width" : "640",
                "img_height" : "640",
                "link" : window.shareData.timeLineLink,
                "desc" : window.shareData.tContent,
                "title" : window.shareData.tTitle
            }, function(res) {
                $.post("shareAction.action",function(data){
                	document.location.href = openURL;
                });
            });
        });
    }, false);