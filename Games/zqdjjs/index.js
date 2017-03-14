this.mjcg = this.mjcg || {};

// mjcg.R.IMAGES用のベースURL
mjcg.IMAGE_BASE = "./img/";

document.addEventListener("DOMContentLoaded", function() {
/*
	// スクロールしてアドレスバーを消す
	mjcg.Util.deleteAddressBar();
	window.addEventListener("orientationchange", mjcg.Util.deleteAddressBar, false);
*/
	
	// ゲーム開始
	var game = new mjcg.Game(document.getElementById("container"));
	game.initGame();
}, false);
