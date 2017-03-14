function play68_init() {
	updateShare(0);
}
function play68_submitscore(score) {
	updateSharescore(score);
	Play68.shareFriend(); 
}
function updateShare(level,score) {
	var descContent = "香蕉你个不辣——不呐呐~~";
   if(score > 0) {
		shareTitle = "我玩了"+score+"分，全世界只有4%的人可以玩到32分！"
	}
	else{
		shareTitle = "全世界只有4%的人可以玩到32分！这是一个关于“不呐呐”的游戏...";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

function updateSharescore(score) {
	updateShare(score);
}