function play68_init() {
	updateShare(0);
}
function play68_submitscore(score) {
	updateSharescore(score);
	setTimeout( function() { Play68.shareFriend(); }, 300)
}
function updateShare(score) {
	var descContent = "圣诞芭比！";
   if(score > 0) {
		shareTitle = "圣诞芭比在我家的烟囱里降落了"+score+"米！\求超越！";
	}
	else{
		shareTitle = "#圣诞芭比#陪你过,圣诞不寂寞! ";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

function updateSharescore(score) {
	updateShare(score);
}