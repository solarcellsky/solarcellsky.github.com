function play68_init() {
	updateShare(0);
}


function play68_submitScore(score) {
	updateShare(score);
	setTimeout( function() { Play68.shareFriend(); },300 )
}

function updateShare(bestScore) {
	var descContent = "夜深人静之时，一大波僵尸袭击人类，英雄快用足球拯救世界吧！";
   if(bestScore==0 ) {
		shareTitle = "前面的僵尸看过来...看我冲力射球!";
	}else if(bestScore <=1500){
		shareTitle = "我在#足球大战僵尸#得了" + bestScore + "分，我协助僵尸消灭了人类~";
	}else if(bestScore <=3500){
		shareTitle = "我在#足球大战僵尸#得了" + bestScore + "分，我和僵尸是朋友，欢迎过来串门~";
	}else if(bestScore <=55000){
		shareTitle = "我在#足球大战僵尸#得了" + bestScore + "分，出于人道主义精神我放走了一批僵尸~";
	}else if(bestScore <=75000){
		shareTitle = "我在#足球大战僵尸#得了" + bestScore + "分，僵尸几乎一网打尽了，几个漏网之鱼请忽视~";
	}else{
		shareTitle = "我在#足球大战僵尸#得了" + bestScore + "分，小宇宙爆发僵尸被我华丽丽团灭了~";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

