function play68_init() {
	updateShare(0);
}
function updateShare(score) {
	var descContent = "极速飞镖";
	
		if(score > 0)
			shareTitle = "我玩了" + score + "分，全世界只有3个人能打出54环";
		else
			shareTitle = "全世界只有3个人能打出54环";

	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}