function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "热血足球";
	if(score > 0)
		shareTitle = "我玩了" + score + "分，据说全世界能玩到350分的人不会超过1%";
	else
		shareTitle = "据说全世界能玩到350分的人不会超过1%";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}
function updateShareScore(score) {
	updateShare(score);
}