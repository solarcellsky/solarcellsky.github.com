
var shareData = {
    messageTitle: messageTitle,
    shareTitle:shareTitle,
    desc: desc,
    link:link,
    imgUrl: imgUrl,
    success: successFun
};

var shopUrl = "http://www.chinazhouheiya.com/WeixinService/Index";
//"http://zhy.zimayun.com/WeixinService/index";

document.addEventListener('WeixinJSBridgeReady',
    function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url" : shareData.imgUrl,
                "link" : shareData.link,
                "desc" : shareData.desc,
                "title" : shareData.shareTitle
	            }, function(res) {
	            	doPost();
	            }
            );
        });

        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url" : shareData.imgUrl,
                "img_width" : "640",
                "img_height" : "640",
                "link" : shareData.link,
                "desc" : shareData.desc,
                "title" : shareData.title
            }, function(res) {
            		doPost();
            });
        });
    }, false);

function doPost(){
	$.post("shareAction.action",{"shareFlag":0},function(data){
		if(data.msg == 0){
			location.href = "http://game.91yixun.cn/aigo/jsp/last.html";
		}
	});
}


