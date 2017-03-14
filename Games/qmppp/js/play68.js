function play68_init() {
	updateShare(0);
}


function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	 // setTimeout( function() { Play68.shareFriend(); }, 1000 )
}

function updateShare(score) {
	var descContent = "全民跑跑跑";
	if (score > 0) {
		shareTitle = '我坚持了'+ score +'秒！奔跑吧！兄弟！';
    } else {
    	shareTitle = '奔跑吧！兄弟！';
    }
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
    document.title = shareTitle;
}

function updateShareScore(bestScore) {
  updateShare(bestScore); 
}