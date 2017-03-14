function play68_init() {
	updateShare(0);
}
function updateShare(score) {
	var descContent = "极速飙车";
	
		if(score > 0)
			shareTitle = "我玩了" + score + "分，老司机快上车，是时候飙车了！";
		else
			shareTitle = "老司机快上车，是时候飙车了！";

	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}