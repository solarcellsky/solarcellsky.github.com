function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(bestScore) {
	var descContent = "分享信息内容！";
   if(bestScore > 0) {
		shareTitle = "靠，我让圣诞母鸡生了" + bestScore + "个蛋,Ta没体力了，快来帮我一下！";
	}
	else{
		shareTitle = "我在玩#圣诞母鸡#祝大家圣诞节快乐，老母鸡过'生蛋'了！";
	}
	appid = '';
	// Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(bestScore) {
	updateShare(bestScore);
}