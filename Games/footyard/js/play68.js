function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { Play68.shareFriend(); }, 1000)
}
function updateShare(bestScore) {
	var descContent = "龙鲤足球";
   if(bestScore > 0) {
		shareTitle = "我在#龙鲤足球#踢球闯了" + bestScore + "关，我有踢世界杯潜力！";
	}
	else{
		shareTitle = "我在#龙鲤足球#踢足球，世界杯在我脚下！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(bestScore) {
	updateShare(bestScore);
}