function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "戳爆他们";
		if(score>0)
			shareTitle = "我在#戳爆他们#玩了"+score+"分，你也快来戳一戳吧！"
		else
		 	shareTitle = "戳一下就爆，但这游戏不用上10只手指都玩不过来！";
	document.title = shareTitle;  
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(score) {
	updateShare(score);
}
function play68_goHome(){
	parent.location.href="http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0"
}