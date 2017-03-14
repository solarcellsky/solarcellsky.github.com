
var Animate = {1:{up:{out:"pt-page-moveToTop","IN":"pt-page-moveFromBottom"},down:{out:"pt-page-moveToBottom","IN":"pt-page-moveFromTop"},left:{out:"pt-page-moveToLeft","IN":"pt-page-moveFromRight"},right:{out:"pt-page-moveToRight","IN":"pt-page-moveFromLeft"}},2:{up:{out:"pt-page-rotatePushTop","IN":"pt-page-moveFromBottom"},down:{out:"pt-page-rotatePushBottom","IN":"pt-page-moveFromTop"},left:{out:"pt-page-rotatePushLeft","IN":"pt-page-moveFromRight"},right:{out:"pt-page-rotatePushRight","IN":"pt-page-moveFromLeft"}},3:{up:{out:"pt-page-rotatePushTop","IN":"pt-page-rotatePullBottom pt-page-delay180"},down:{out:"pt-page-rotatePushBottom","IN":"pt-page-rotatePullTop pt-page-delay180"},left:{out:"pt-page-rotatePushLeft","IN":"pt-page-rotatePullRight pt-page-delay180"},right:{out:"pt-page-rotatePushRight","IN":"pt-page-rotatePullLeft pt-page-delay180"}},4:{up:{out:"pt-page-rotateBottomSideFirst","IN":"pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"},down:{out:"pt-page-rotateTopSideFirst","IN":"pt-page-moveFromTop pt-page-delay200 pt-page-ontop"},left:{out:"pt-page-rotateRightSideFirst","IN":"pt-page-moveFromRight pt-page-delay200 pt-page-ontop"},right:{out:"pt-page-rotateLeftSideFirst","IN":"pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"}},5:{up:{out:"pt-page-flipOutTop","IN":"pt-page-flipInBottom pt-page-delay500"},down:{out:"pt-page-flipOutBottom","IN":"pt-page-flipInTop pt-page-delay500"},left:{out:"pt-page-flipOutRight","IN":"pt-page-flipInLeft pt-page-delay500"},right:{out:"pt-page-flipOutLeft","IN":"pt-page-flipInRight pt-page-delay500"}},6:{up:{out:"pt-page-rotateFall pt-page-ontop","IN":"pt-page-scaleUp"},down:{out:"pt-page-rotateFalltoright pt-page-ontop","IN":"pt-page-scaleUp"},left:{out:"pt-page-rotateFall pt-page-ontop","IN":"pt-page-scaleUp"},right:{out:"pt-page-rotateFalltoright pt-page-ontop","IN":"pt-page-scaleUp"}},7:{up:{out:"pt-page-rotateFoldTop","IN":"pt-page-moveFromBottomFade"},down:{out:"pt-page-rotateFoldBottom","IN":"pt-page-moveFromTopFade"},left:{out:"pt-page-rotateFoldLeft","IN":"pt-page-moveFromRightFade"},right:{out:"pt-page-rotateFoldRight","IN":"pt-page-moveFromLeftFade"}},8:{up:{out:"pt-page-moveToTopFade","IN":"pt-page-rotateUnfoldBottom"},down:{out:"pt-page-moveToBottomFade","IN":"pt-page-rotateUnfoldTop"},left:{out:"pt-page-moveToLeftFade","IN":"pt-page-rotateUnfoldRight"},right:{out:"pt-page-moveToRightFade","IN":"pt-page-rotateUnfoldLeft"}},9:{up:{out:"pt-page-rotateCubeTopOut pt-page-ontop","IN":"pt-page-rotateCubeTopIn"},down:{out:"pt-page-rotateCubeBottomOut pt-page-ontop","IN":"pt-page-rotateCubeBottomIn"},left:{out:"pt-page-rotateCubeLeftOut pt-page-ontop","IN":"pt-page-rotateCubeLeftIn"},right:{out:"pt-page-rotateCubeRightOut pt-page-ontop","IN":"pt-page-rotateCubeRightIn"}},10:{up:{out:"pt-page-rotateCarouselTopOut pt-page-ontop","IN":"pt-page-rotateCarouselTopIn"},down:{out:"pt-page-rotateCarouselBottomOut pt-page-ontop","IN":"pt-page-rotateCarouselBottomIn"},left:{out:"pt-page-rotateCarouselLeftOut pt-page-ontop","IN":"pt-page-rotateCarouselLeftIn"},right:{out:"pt-page-rotateCarouselRightOut pt-page-ontop","IN":"pt-page-rotateCarouselRightIn"}},11:{up:{out:"pt-page-fad","IN":"pt-page-moveFromBottom pt-page-ontop"},down:{out:"pt-page-fade","IN":"pt-page-moveFromTop pt-page-ontop"},left:{out:"pt-page-fade","IN":"pt-page-moveFromRight pt-page-ontop"},right:{out:"pt-page-fade","IN":"pt-page-moveFromLeft pt-page-ontop"}},12:{up:{out:"pt-page-moveToTopFade","IN":"pt-page-moveFromBottomFade"},down:{out:"pt-page-moveToBottomFade","IN":"pt-page-moveFromTopFade"},left:{out:"pt-page-moveToLeftFade","IN":"pt-page-moveFromRightFade"},right:{out:"pt-page-moveToRightFade","IN":"pt-page-moveFromLeftFade"}},13:{up:{out:"pt-page-moveToTopEasing pt-page-ontop","IN":"pt-page-moveFromBottom"},down:{out:"pt-page-moveToBottomEasing pt-page-ontop","IN":"pt-page-moveFromTop"},left:{out:"pt-page-moveToLeftEasing pt-page-ontop","IN":"pt-page-moveFromRight"},right:{out:"pt-page-moveToRightEasing pt-page-ontop","IN":"pt-page-moveFromLeft"}},14:{up:{out:"pt-page-scaleDown","IN":"pt-page-moveFromBottom pt-page-ontop"},down:{out:"pt-page-scaleDown","IN":"pt-page-moveFromTop pt-page-ontop"},left:{out:"pt-page-scaleDown","IN":"pt-page-moveFromRight pt-page-ontop"},right:{out:"pt-page-scaleDown","IN":"pt-page-moveFromLeft pt-page-ontop"}},15:{up:{out:"pt-page-scaleDownUp","IN":"pt-page-scaleUp pt-page-delay300"},down:{out:"pt-page-scaleDown","IN":"pt-page-scaleUpDown pt-page-delay300"},left:{out:"pt-page-scaleDownUp","IN":"pt-page-scaleUp pt-page-delay300"},right:{out:"pt-page-scaleDown","IN":"pt-page-scaleUpDown pt-page-delay300"}},16:{up:{out:"pt-page-moveToTop pt-page-ontop","IN":"pt-page-scaleUp"},down:{out:"pt-page-moveToBottom pt-page-ontop","IN":"pt-page-scaleUp"},left:{out:"pt-page-moveToLeft pt-page-ontop","IN":"pt-page-scaleUp"},right:{out:"pt-page-moveToRight pt-page-ontop","IN":"pt-page-scaleUp"}},17:{up:{out:"rotateSlideOuttotop","IN":"rotateSlideIntotop"},down:{out:"rotateSlideOuttobottom","IN":"rotateSlideIntobottom"},left:{out:"pt-page-rotateSlideOut","IN":"pt-page-rotateSlideIn"},right:{out:"rotateSlideOuttoright","IN":"rotateSlideIntoright"}}};







if(Zhu._weixin && Zhu._Android)
{
	
};




/*if(Zhu._IsPC) $(window).resize(resize) , resize(); 
function resize(){
	if($(window).width() > $(window).height()) {
		$("#horizontal").show();
	}else
	{
		$("#horizontal").hide();	
	}
};
*/



document.addEventListener('touchmove' , function (ev){
	ev.preventDefault();
	return false;
} , false)





var Animate_Index = 0;
var Animate_lastIndex = Animate_Index;
var Animate_isSwipe = true;
var Animate_css = Animate[15];
var Animate_Bstop = true;

$('.box-step').eq(Animate_lastIndex).show();
			
					
function AnimateTween(){
		var TIME = .5;
		$('.fudong').removeClass('fudong');
		clearTimeout(window.TIMER);
  		if( Animate_Index == 1 ||  Animate_Index == 2 )
		{
			window.TIMER = setTimeout( function (){
				swipeUpFn();	
			} , 20000)	
		};

		switch(Animate_Index)
		{
			
			case 0:
			
			    clearTimeout(window.TIMER4);
			    $('.s1-3 ,.s1-4 ,.s1-5 ,.s1-6').css({opacity:1, transform:1});
				$(' .zhuquan1 .up-ico').hide();
				 
			    $('.s1-2').from({ opacity : 0 , delay : 2} ,1.5);
				$('.s1-3 img').each( function ( i ){
						$(this).from({ transform : 'scale(1.3)' , opacity : 0 , delay : 3 + i * .2} ,TIME); 
				});
				
				$('.s1-4').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 5} ,TIME ,function (){
					window.TIMER = setTimeout( function (){
						$(".s1-3 ,.s1-4").to({ opacity : 0})
						$('.s1-7').show().from({transform : 'translate(0 , 50px)' , opacity : 0 }, .7 , function (){
						//swipeUpFn()
						$('.zhuquan1 .up-ico').show();
					    if( Animate_Index == 0 && $('.zhuquan1 .UP_ico').is(":visible"))
						{
							window.TIMER = setTimeout( function (){
								swipeUpFn();	
							} , 10000)	
						};
				});
				
					} , 30000)
					
					$('.zhuquan1 .up-ico').show();
					
				 });
				 
				 /*$('.s1-5 img').each(function(i) {
                      $(this).from({transform : 'translate(0 , 50px)' , opacity : 0 , delay: 7.8 + i * .2},TIME);
                 });

				 $('.s1-6').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 8.2} ,TIME ,function (){
					window.TIMER3 = setTimeout( function (){
						$(".s1-5 ,.s1-6").to({ transform : 'scale(1.2)' , opacity : 0})
					} , 2000)
				 });*/
				
				
				
				
				 
			break;
			
			case 1:
			
	         /*  $('.s2-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME , function (){
					 
			   });
			   */
			   
			break;
			
			case 2:
	         /*  $('.s3-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME,function (){
					 
			   });*/
			break;
			
			case 3:
	         /*  $('.s4-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME,function (){
					 
			   });*/
			break;
			
			case 4:
	        /*   $('.s5-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME,function (){
					  
			   });*/
			break;
			
			case 5:
	         /*  $('.s6-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME,function (){
					 
			   });*/
			break;
			
			case 6:
	          /* $('.s7-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME,function (){
					  
			   });*/
			break;
			
			case 7:
	          /* $('.s8-1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME,function (){
					 
			   });*/
			break;
			
			case 8:
	            $(".s9-1").from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME);
				$(".s9-2").from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1} ,TIME , function(){
					$(".s9-2").addClass("fudong");
				});
			break;
			
			case 9:
	            $(".s10-1").from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,TIME);
				$(".s10-2").from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1} ,TIME ,function(){
					$(".s10-2 img").eq(0).addClass("fudong");
				});
				
			break;
		}
		
		
};


function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
} 

function swipeUpFn ( index ){
	if( index && index == Animate_Index) return;
	if(!Animate_Bstop) return;
	Animate_Bstop = false;
	
	var NowStep = $('.box-content .box-step').eq(Animate_lastIndex);
	var NextStep = $('.box-content .box-step').eq(index ? index : ++ Animate_Index);
	
	
	if( !NextStep.size() ) {
		Animate_Index -- ;
		Animate_Bstop = true;
		return;	
	}
	if(index) Animate_Index = index;
	NowStep.cssHide(Animate_css.up.out , function (){
		Animate_Bstop = true;	
	})
	//NextStep.cssShow(Animate_css.up.IN);
	NextStep.fadeIn( 800 );
	Animate_lastIndex = Animate_Index;
	setTimeout( AnimateTween , 100)
};
function swipeDownFn ( index ){
	if(Animate_lastIndex == 0) return;
	if( index && index == Animate_Index) return;
	if(!Animate_Bstop) return;
	Animate_Bstop = false;
	
	
	var NowStep = $('.box-content .box-step').eq(Animate_lastIndex);
	var NextStep = $('.box-content .box-step').eq(index ? index : -- Animate_Index);
	
	if(index) Animate_Index = index;
	
	
	NowStep.cssHide(Animate_css.down.out , function (){
		Animate_Bstop = true;	
	})
	//NextStep.cssShow(Animate_css.down.IN)
	
	NextStep.fadeIn( 800 );
	Animate_lastIndex = Animate_Index;
	setTimeout( AnimateTween , 100)

	
};
		
  

$( function (){
	$$('.box-content').bind('swipeUp' , function (){
		
		
					clearInterval(window.TIMER)

					if(Animate_Index == 0 && !$('.zhuquan1 .UP_ico:visible').size()) return;
					
					
					
				
					if(Animate_Index == 0 && !$('.zhuquan1 .s1-7:visible').size())
					{	
					
						$(".s1-3 ,.s1-4").to({ opacity : 0})
						$('.s1-7').show().from({transform : 'translate(0 , 50px)' , opacity : 0 }, .7 , function (){
						//swipeUpFn()
						$('.zhuquan1 .up-ico').show();
					    if( Animate_Index == 0 && $('.zhuquan1 .UP_ico').is(":visible"))
						{
							window.TIMER = setTimeout( function (){
								swipeUpFn();	
							} , 10000)	
						};
				});
				
						return;
					}
					

					
					//if($('.zhuquan1').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					swipeUpFn();
					
	}).bind('swipeDown' , function (){
					//if($('.zhuquan2').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					swipeDownFn();
					
	});
	
	
	
	
	
				 
				 
				 
	
	$('a[href="#"]').attr('href' , 'javascript:;');
});


function LoadFn ( arr , fn , fn2){
		var loader = new PxLoader();
		for( var i = 0 ; i < arr.length; i ++)
		{
			loader.addImage(arr[i]);
		};
		
		loader.addProgressListener(function(e) {
				var percent = Math.round( e.completedCount / e.totalCount * 100 );
				if(fn2) fn2(percent)
		});	
		
		
		loader.addCompletionListener( function(){
			if(fn) fn();	
		});
		loader.start();	
}


var LoadingImg = [];

$('img').each( function (){
	
	if(!$(this).attr('src')) return;
	LoadingImg.push($(this).attr('src'));
		
});




/*var allTags = $('*') ;	
for ( var i=0, j = allTags.length; i<j ; i++ ) {
	var str = $( allTags[i] ).css('backgroundImage');
	if ( str && str != 'none') {
		if ( /http:|https:/gi.test( str ) ) {
			str=str.replace('url(\"',"").replace('\")',"");	
		} else {
			if ( str.indexOf('images/') != -1  ) 
			str = 'images/'+str.split('images/')[1].replace('\")',"");	
		}
		LoadingImg.push (str);			
	}
};
	*/

LoadingImg.push('../img/1-3.png');
LoadingImg.push('../img/1-2.png');
LoadingImg.push('../img/1-1.png');
LoadingImg.push('../img/3.png');
LoadingImg.push('../img/4.png');
LoadingImg.push('../img/gg.png');
LoadingImg.push('../img/1.gif');
LoadingImg.push('../media/2.mp4');
LoadingImg.push('../media/mp3.mp3');


function HTMLStart(){
   AnimateTween();
}


/*window.onload = function (){
	$('#loading').fadeOut();
	
	
	var tracker = new _liuLiang.gravitySensor ();


tracker.listenShake ( function () {
		AWARD_FN();
		tracker.stopListenShake ();
} , 230);			
}
*/
LoadFn(LoadingImg , function (){
	
	setTimeout( function (){
		$('#loading').fadeOut();	
		var tracker = new _liuLiang.gravitySensor ();


			tracker.listenShake ( function () {
					AWARD_FN();
					tracker.stopListenShake ();
			} , 230);	
	} ,500)
	//HTMLStart ();
	//swipeUpFn (8);

} , function ( p ){
	//$('#loading p').html( p + '%')
});










