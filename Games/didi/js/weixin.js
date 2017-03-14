var iniUrl = window.location.href.substring(0,location.href.lastIndexOf('/'));
var wxDefault = {
    title: '老滴哥带你玩',
    desc: '玩游戏赢大奖，吃货、文青、跑男、玩咖们，考验你的时刻到了！',
    link: iniUrl+"/index.html",
    imgUrl:iniUrl+"/images/share.jpg",
    success: function () {
        _czc.push(["_trackEvent", "事件", "分享回调", "分享回调", 0, "event"]);
    }
};

//判断滴滴端内外
function isInDidi(){
    if(window.DidiJSBridge || (window.KDShare != undefined && window.KDShare.share != undefined) || (navigator.userAgent.indexOf('kd.passenger') > -1 )){
        return true;
    }else{
        return false;
    }
}
//拉起端内分享
function shareInDidi(){
	didi.bridge("invoke_entrance");
    console.log('拉起分享');
}

$(function(){	
	didi.setShare({
		url: wxDefault.link, // 分享地址
		icon: wxDefault.imgUrl, // 分享图标
		title: wxDefault.title, // 分享标题
		content: wxDefault.desc, // 分享文案
		success: wxDefault.success,
		sina_weibo:false,
		weixin_timeline_title: wxDefault.desc,
		weixin_appmsg_desc: "玩游戏赢大奖，吃货、文青、跑男、玩咖们，考验你的时刻到了！"
	});
});
