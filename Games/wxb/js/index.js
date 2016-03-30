/*
*created by zy;
*
*本文件中需要修改的：
*
*1,替换正式上线的跳转链接
*
*/

//微信数据监测
var wa = new WxMoment.Analytics({
	//项目别名
	projeatName: " 20160120shenzhouzhuanche"
});

//横屏提示，禁止横屏
new WxMoment.OrientationTip();

//初始化分享插件
var share = new WxMoment.Share();


$(function() {
	// $(document).on("touchstart touchmove mousedown mousemove", function(event) { //阻止默认事件
	// 	var thistag = event.target.tagName;
	// 	var tagid = event.target.id;
	// 	if (thistag != "INPUT") { //排除input标签
	// 		event.preventDefault();
	// 		$('input').blur();
	// 	}
	// }); //阻止默认事件
	$('body').height($(window).height()); //固定内容高度

	/*mySwiper初始化*/
	window.mySwiper = new Swiper('.swiper-container', {//mySwiper初始化
		direction: 'vertical',
		noSwiping : true,
		mousewheelControl: true,
		watchSlidesProgress: true,
		resistanceRatio : 0,
		onInit: function(swiper) {
			swiper.myactive = 0;
			var slides=swiper.slides;
			for (var i=0;i<slides.length;i++) {
				pagedom[i]=$(slides[i]).html();
			}
			swiper._slideTo=swiper.slideTo;
			swiper.slideTo=function(i){
				this.unlockSwipes();
				this._slideTo(i);
			}
			swiper._slidePrev=swiper.slidePrev;
			swiper.slidePrev=function(i){
				this.unlockSwipes();
				this._slidePrev(i);
			}
			swiper._slideNext=swiper.slideNext;
			swiper.slideNext=function(i){
				this.unlockSwipes();
				this._slideNext(i);
			}
		},
		onProgress: function(swiper) {
			// for (var i = 0; i < swiper.slides.length; i++) {
			// 	var slide = swiper.slides[i];
			// 	var progress = slide.progress;
			// 	var translate, boxShadow;
			// 	translate = progress * swiper.height * 0.8;
			// 	scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
			// 	boxShadowOpacity = 0;
			// 	slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
			// 	if (i == swiper.myactive) {
			// 		es = slide.style;
			// 		es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
			// 		es.zIndex = 0;
			// 	} else {
			// 		es = slide.style;
			// 		es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';
			// 		es.zIndex = 1;
			// 	}
			// }
		},
		onTransitionEnd: function(swiper, speed) {
			swiper.myactive = swiper.activeIndex;
			/*执行对应页面事件*/
			var pagenow=swiper.activeIndex;
			page(pagenow+1);
		},
		onSetTransition: function(swiper, speed) {
			for (var i = 0; i < swiper.slides.length; i++) {
				es = swiper.slides[i].style;
				es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
			}
		}
	});

	//判断移动端类型
	var u = navigator.userAgent;
	isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	isIphone4 = window.screen.height<500 ? true : false ;

	video1 = document.getElementById("myVideo1");
	//video1 = document.getElementById("videoIndex1");
	//监听视频播放完成
	video1.addEventListener('ended',function(){
		console.log("end");
		if(isAndroid || isIphone4){
			$(".show_pic").show();
			$(".show_move img").css({"top": "0px","left": "0px"});
		}
		//移除视频显示图层
		$('.video').fadeOut(200);
		$('.show').fadeIn(200);
	});

	//点击播放事件
	$('.index .startBtn').off().on('click',function(){
		//微信统计,视频播放次数
		wa.sendEvent('click','videoPlay');

		var $that = $(this);
		$that.fadeOut(200);
		video1.play();
		if(isAndroid || isIphone4){
			$('.video').css({"top":"0px"});
			return;
		}
		// setCan();
		// $('.canvas').show();
	});

	//点击跳转事件
	$('.index .pointer').click(function(){
		//微信统计，链接跳转次数
		wa.sendEvent('jump','linkSkip');

		var time1 = setTimeout(function(){
			//此链接应该更换成正式上线的链接
			window.location.href = "form.html?WT.mc_mk=201401357&tdaz=hEtE5c";
		},200);
	});
});
//canvas绘画
function setCan(){
	//用canvas代替视频播放
	var v=document.getElementById("myVideo1");
	var c=document.getElementById("myCanvas");
	// clinW =window.screen.availWidth; 
	// clinH =window.screen.availHeight;
	clinW = $("#myVideo1").width();
	clinH = $("#myVideo1").height();
	c.width = clinW;
	c.height = clinH;
	ctx = c.getContext('2d');
	//先进行封面绘画
	// var img = document.getElementById("drawImg");
	// ctx.drawImage(img,0,0,clinW,clinH);
	ctx.drawImage(v,0,0,clinW,clinH);

	v.addEventListener('play',function() {
		timer2=window.setInterval(function() {
			ctx.drawImage(v,0,0,clinW,clinH);
		},10);
	},false);
	v.addEventListener('pause',function() {
		window.clearInterval(timer2);
	},false);
	v.addEventListener('ended',function() {
		clearInterval(timer2);
	},false);
}
//清除对应页面动画方法
var pagedom=[];
function cleanpage(p){//传入页面数字用以恢复到动画执行前
	var slide=mySwiper.slides[p-1];
	$(slide).html(pagedom[p-1]);
}
//添加禁止滑动类
(function(){
	$(document).on('touchstart touchend',function(){
		var pagenow=mySwiper.activeIndex;
		var slide=mySwiper.slides[pagenow];
		if($(slide).hasClass('stop-next')){
			mySwiper.lockSwipeToNext();
		}else{
			mySwiper.unlockSwipeToNext();
		}
		if($(slide).hasClass('stop-prev')){
			mySwiper.lockSwipeToPrev();
		}else{
			mySwiper.unlockSwipeToPrev();
		}
	});
})();
/*加载进度条*/
(function() {
	// Pace.options = { //pace配置
	// 	ajax: false,
	// 	restartOnPushState: false,
	// }
	Pace.on('done', function() { //加载完成
		console.log('done');
		$('#swiper-container').removeClass('hidden');
		page(1);
	});
})();

/*loading页面效果*/
function page(p){
	if(p == 1){
		//添加loading动画
		$('.loading .move_text img').addClass('ts');
		$('.loading .load_move').addClass('carm');

		//模拟Loading事件
		var num = 0;
		var loadTime = setInterval(function(){
			if(num == 100) {
				//移除loading动画
				$('.loading .move_text img').removeClass('ts');
				$('.loading .load_move').removeClass('carm');

				//loading下一页
				clearInterval(loadTime);
				mySwiper.slideNext();

				//解决苹果黑一下的问题
				if(isAndroid || isIphone4){
					$('.index .startBtn').css({'background':'url(../img/pic_start.jpg)no-repeat','background-size':'100% 100%'});
				} else {
					console.log("ios终端");
					setCan();
					$('.canvas').show();
				}
			} else {
				num ++;
			}
			$('.loading .loading_text span').html(num + "%");
		},40);
	}
}




