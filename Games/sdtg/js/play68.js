function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { Play68.shareFriend(); }, 600 )
}
function updateShare(bestScore) {
	var descContent = "圣诞脱光";
	var myPlayren = Math.floor(20 * Math.random() + 2 * bestScore);
   if(bestScore > 0) {
		shareTitle = "圣诞快乐！我帮助圣诞老人裸奔了" + bestScore + "秒!打败全国" + myPlayren + "%的脱光狂人！";
	}
	else{
		shareTitle = "#圣诞脱光#圣诞节快乐，圣诞狂欢夜，一起做脱光狂人！！！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

function updateShareScore(bestScore) {
	updateShare(bestScore);
}