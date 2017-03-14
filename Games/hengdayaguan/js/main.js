var IS_IOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
IS_ANDROID = -1 < navigator.userAgent.indexOf("Android");
var USE_NATIVE_SOUND = !1;
var IS_IOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
var IS_NATIVE_ANDROID = IS_ANDROID && -1 < navigator.userAgent.indexOf("Version");
var $$Client = {};
$$Client.contextPath = $('#settings').attr('data-path');
$$Client.gameType = $('#settings').attr('data-type');
	
var W = 640,
H = 1E3,
IS_TOUCH, SCREEN_SHOW_ALL = !0; 
var canvasH ;
var App = (function(app){	

	function layout(){
		var canvas = app.stage.canvas,
        winW = window.innerWidth,
        winH = window.innerHeight;
		/*
        if (SCREEN_SHOW_ALL) {
			winW / winH > W / H ? winW = W * winH / H: winH = H * winW / W,
			canvas.style.marginTop = 0;
		}else {
            var w = W * winH / H;
            winW >= w ? (winW = w, stage.x = 0) : stage.x = (winW - w) / 2;
        }*/
		if(winW > 400){
			winW = 400;		
		}
		if(winH <= 480){
			$('.homeLayerIn').css('top',winW/W*80);
		}else{
			$('.homeLayerIn').css('top',winW/W*140);
		}
       	canvas.width = W;
		canvas.height = W/winW*winH;
		H = W/winW*winH;
		$('.homeLayer').css({'height':winH});
		$('#container').css({'width':winW,'height':winH});
		canvas.style.left = '50%';;
		canvas.style.marginLeft = -(winW/2)+"px";
		canvas.style.width = winW + "px";
		canvas.style.height = winH +'px';
		canvasH = canvas.height;
		$('#container').height(window.innerHeight);
	}
	window.onresize = layout;
	
	app.stage = null;
    app.queueHome = null;
	window.onload = function(){		
		if(bVal == "true"){
			$("#pm").show();
		}else{
			$("#pm").hide();
		}
		var num = 0;
		var cupLeft = -240;
		setInterval(function(){
			/*loading*/
			num++;
			cupLeft+=2;
			if(cupLeft>=-15){cupLeft=-15}
			if(num>=100){num=100;}
			$("#loadingNum").html(num+"%");
			ele("cup").style.marginLeft = cupLeft+"px";
			/*loading*/
		},100);
		
		$('#container').height(window.innerHeight);
		app.stage = new createjs.Stage("game");
        var top = document.body.scrollTop;
		if(top >= 100){
			$('.userlist li img').each(function(){
				$(this).attr('src',$(this).attr('data-url'));
			})	
		}	  
		
        setTimeout(layout, 100);		
		if (IS_TOUCH = createjs.Touch.isSupported()) {
            createjs.Touch.enable(app.stage, !0);
            app.stage.mouseEnabled = !1;           
        }	
						
		//加载首页资源
		app.queueHome = new createjs.LoadQueue(false);
		app.queueHome.on("complete", _cfgHome.startFunc, null, !0);	
		_cfgHome.img && app.queueHome.loadManifest(_cfgHome.img);
		/* ----------------------------重新开始游戏----------------------------- */
       	$('#endClose').on('click',function(e){				
			// App.stage.removeAllChildren();		
			// Game.end = false;
			// setup();
			$('#end').hide();
			$("#main").show();		
		})
		/*$('#btnContinue').on('click',function(e){
			Game.stop = false;
			$('.dialog').hide();
		})*/
						
		$('#btnShowShare').on('click',function(e){
			$('#share2').show();
		})
		$('#share2').on('click',function(){
			$(this).hide();
		})
		$('#btnSahre').on('click',function(){
			$('#share1').hide();
			$('#share2').show();
		})
		$('#btnCancle').on('click',function(){
			App.stage.removeAllChildren();
			$('#share1').add('#share2').add('#dialogEnd').hide();
			$('.homeLayer').show();
			Game.end = false;
		})
		
		var posStart,posEnd;
		
		
		createjs.Ticker.setFPS(30);		
		createjs.Ticker.on("tick", function(){	
			App.stage.update();	
			if(playgame)playgame();
		})
	}
	$(window).on('scroll',function(e){		
		var top = document.body.scrollTop;		
		console.log(e);
		if(top >= 100){
			$('.userlist li img').each(function(){
				$(this).attr('src',$(this).attr('data-url'));
			})	
		}
		
	})	
	function orientationChange() {
		if (window.orientation == 90 || window.orientation == -90) {
			$('#rotate').show();
		}else{
			$('#rotate').hide();
		}
	}
	orientationChange();
	window.onresize = orientationChange;
	return app;
})(App || {})
