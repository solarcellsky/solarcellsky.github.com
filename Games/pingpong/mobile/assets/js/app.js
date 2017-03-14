(function() {

	var socket;
	var playerNo;

	var $el = {
		player : $("#player"),
		index : $("#index"),
		game : $("#game"),
		result : $("#result"),
		resultImg : $("#resultImg")
	}

	var debug = false;


	function initSoc() {
		var ws = debug ? "http://192.168.1.114:3300/mobile" : 'http://123.56.85.220:3006/mobile'
		socket = io(ws);
		socket.on('connect', function() {
			console.log('SOC : connect');
			socket.emit('login',{userInfo : userInfo, rid : rid},function(data){
				console.log(data);
				if (data.bSuccess) {
					console.log(data.playerNo+1);
					$el.player.attr('src','assets/img/p'+(data.playerNo+1)+'.png').show();
					playerNo = data.playerNo;
					initEvent();
				}
			});
		});

		socket.on('gameStart',function() {
			$el.index.hide();
			$el.game.show();
		});

		socket.on('gameOver',function(data){
			// alert(isWin ? "胜利" : "失败");
			var url = data.isWin ? "assets/img/win.png" : "assets/img/lost.png";
			$el.resultImg.attr('src',url);
			$el.game.hide();
			$el.result.show();

		});
	}

	function initEvent() {

		var isHold = false;
		var sy;
		var t = 1000/30;
		var isHold = false;
		var dy = 0 , lastDy=0;

		var timer = setInterval(function(){
			if (!isHold || lastDy === dy) return;
			var sendTime = Date.now();
			socket.emit('move',{
				dy : dy,
				sendTime : sendTime
			});
			lastDy = dy;
		},t);

		$(window).on('touchstart',function(e) {
			isHold = true;
			var pos = e.originalEvent.changedTouches[0];
			sy = pos.pageY;
			e.stopPropagation();
		});

		$(window).on('touchmove',function(e) {
			if(!isHold) return;
			dy = e.originalEvent.changedTouches[0].pageY - sy;
			sy = e.originalEvent.changedTouches[0].pageY;
			e.stopPropagation();
			return false;
		});

		$(window).on('touchend',function(e) {
			isHold = false;
			e.stopPropagation();
		});

	}

	function init() {
		// getLocation();
		initSoc();
	}

	init();

})();
