function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	// setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(bestScore) {
	var descContent = "超级有趣的休闲小游戏，精美简单的画风，不一样的游戏体验，玩H5游戏就来68微游戏！";
   if(bestScore > 0) {
		shareTitle = "我在#左右脑开车#，得了" + bestScore + "分，你能超越我吗？-68微游戏";
	}
	else{
		shareTitle = "玩#左右脑开车#得高分，称霸朋友圈，挑战所有好友，牛人就是这么任性！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(bestScore) {
	updateShare(bestScore);
}