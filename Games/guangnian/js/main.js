// JavaScript Document
////////////////////


	
	
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);
////////////////////
var percent = 0;
var height1;
var height2;
var height3;
var xingH;
var aa;
var bb;
var cc;
var time =5;
var click=false;
var H_num=0;
var X_num=0;
var jiangpin=0; //获得的奖品
var status=0; //是否领取奖品
var jiang=0;
var first = true;
var yidengjiang=0; //一等奖
//锁定屏幕滑动
var jz=0;
	document.addEventListener("touchmove",function(e){
	if(jz==0){
	e.preventDefault();
	e.stopPropagation();
	}
},false);
$(function(){
	//返回星球
	$('.return_btn').click(function(){
		window.location.href="index.php";
	})

	//活动规则
	$('.rule_btn').click(function(){
		jz=1;
		$('.rule').show();
		$('.rule_out').addClass('zoomIn');
	})
	//活动规则关闭按钮
	$('.close_btn').click(function(){
		jz=0;
		$('.rule').hide();
		$('.rule_out').removeClass('zoomIn');
	})
	//开始游戏
	$('.start_btn').click(function(){
		gamePlay();return;
		$.ajax({  
			type: "POST", 
			dataType: "JSON", 
			data:{gametime:1},
			async:false,
			url: '/', 
				success:function(msg){
					if( msg==0 ){
						alert('活动已结束。');
						return;
					}else{
						gamePlay();
					}
				}
		});		
		
		
	})
	//点击发射
	$('.fasheqi').on('touchstart',function(){
		if(click){
			if(first){
				$('.fasheqi').addClass('shake_fei');
				first = false;
			}
			percent+=2;
			if(percent >= 100) {
				percent=100;
				$('.tiao_con').css('width','100%');
			}else{
				$('.tiao_con').css({'width':percent+'%',});
			}
			
		}
		
		
	})
	//再飞一次
	$('.again_btn').click(function(){
		cc = setInterval("huanTu()",150);
		first = true;
		$('.jiang_wap').hide();
		$('.jiang_wap').removeClass('bounceInDown');
		$('.jiang_box .tit').hide();
		$('.jiang_box .txt').hide();
		$('.jiang_box .tit').removeClass('tada');
		$('.jiang_box .txt').removeClass('bounceIn');
		//初始化
		percent=0;
		H_num=0;
		X_num=0;
		time=5;
		$('.tiao_con').css('width','0');
		
		$('.beijing').css('bottom','0');
		$('.fasheqi2_box').hide();
		$('.fasheqi,.tiao_box,.dianji_tips,.dianji_txt').show();
		$('.fasheqi2_box').removeClass('fadeInUp');
		
		gamePlay();

		
	})
	//造福人类
	$('.share_btn').click(function(){
		$('.share').show();
	})
	$('.share').click(function(){
		$('.share').hide();
	})
	//关于型科
	$('.about_btn').click(function(){
		$('.swiper-container').show().siblings().hide();
	})
	//瞧我的礼
	$('.libao_btn,.jiang1').click(function(){
		$.ajax({  
			type: "POST", 
			dataType: "JSON", 
			data:{jiang:1},
			async:false,
			url: 'ajax/ajaxjiang.php', 
				success:function(msg){
						jiang=msg.jiang;
						if( msg.status==1 ){
							status=msg.status;
							
							if( msg.jiang==1 ){
								$('.ling_Over .libao1').show();
							}else if( msg.jiang==2 ){
								$('.ling_Over .libao2').show();
							}else{
								$('.ling_Over .libao3').show();
							}
							
							$('.ling_Over').show();
						}else{
							if( msg.jiang==1 ){
								$('.libao_wap .libao1').show();
							}else if( msg.jiang==2 ){
								$('.libao_wap .libao2').show();
							}else{
								$('.libao_wap .libao3').show();
							}
								$('.libao_wap').show();
						}
				}
		});
		// if( status==1 ){
			// $('.lingqu_btn').hide(); //如果已经获得奖品再玩，隐藏领取图片
		// }
		// if(yidengjiang==0){
			// if(jiang==2 || jiangpin==2){
				// $('.libao1').hide();
				// $('.libao3').hide();
				// $('.libao2').show();
			// }else if(jiang==3 || jiangpin==3){
				// $('.libao1').hide();
				// $('.libao2').hide();
				// $('.libao3').show();
			// }
		// }else if(yidengjiang==1){
			// $('.libao1').show();
			// $('.libao2').hide();
			// $('.libao3').hide();
		// }
		// $('.libao_wap').show();
	})
	$('.libao_close').click(function(){
		$('.libao_wap').hide();
	})
	//领取
	$('.lingqu_btn').click(function(){
		jz=1;
		$('.mess_wap').show();
	})
	$('.mess_close').click(function(){
		$('.mess_wap').hide();
	})
	$('.confirm_btn').click(function(){
		var username = $('#name').val();
		var tel =$('#tel').val();
		var comm =$('#comm').val();
		if(username==''){
			alert('请输入姓名');
		}else if(!tel.match(/^(\d{11})$/)){
			alert('请输入手机号码');
		}else if(comm==''){
			alert('请输入公司名称');
		}else{
				$.ajax({  
					type: "POST", 
					dataType: "JSON", 
					data:{username:username,telphone:tel,comm:comm},
					async:false,
					url: '/', 
						success:function(msg){
								if( msg=='phone' ){
									alert('手机格式错误。');
									return;
								}else if( msg=='404'){
									alert('手机已存在。');
									return;
								}else if( msg=='error'){
									alert('插入失败，请重试');
								}else{
									alert('提交成功。');
									if( jiang==1 ){
										$('.ling_Over .libao1').show();
									}else if( jiang==2 ){
										$('.ling_Over .libao2').show();
									}else{
										$('.ling_Over .libao3').show();
									}
									
									$('.ling_Over').show();
									
									$('.game').hide();
									$('.jiang_wap').hide();
									$('.jiang_wap').removeClass('bounceInDown');
									$('.mess_wap').hide();
									$('.libao_wap').hide();
										
								}
						}
				});
		}
		
	})
	
	//领奖后页面的关闭按钮
	$('.ling_close').click(function(){
		$('.ling_Over').hide();
			$('.jiang_wap').show();
			$('.jiang_wap').addClass('bounceInDown');
			if( jiang==1 ){
				$('.jiang1').show();
			}else if( jiang==2 ){
				$('.jiang2').show();
			}else{
				$('.jiang3').show();
			}
			
		$('.shouye').show();
	})
	
})
function timimg(){
	//alert(time);
	time=time-1 ;
	if(time<=0){

		click=false;
		$('.fasheqi').removeClass('shake_fei');
		goflash();

		clearInterval(bb);
		clearInterval(cc);
	}
}
function goflash(){
	
	jiangpin=3;
	if(percent>33){
		jiangpin=2;
	}
	// $.ajax({  
	// 	type: "POST", 
	// 	dataType: "JSON", 
	// 	data:{data:percent,jiangpin:jiangpin},
	// 	async:false,
	// 	url: '/', 
	// 		success:function(msg){
	// 			status=msg.status;//获奖后是否领取
	// 			if( msg.nd_realid==1 ){//获奖一等奖
	// 				yidengjiang=1;
	// 			}
	// 			if( msg.yidengjiang==1 ){ //获奖一等奖
	// 				yidengjiang=msg.yidengjiang;
	// 			}
	// 			if( msg.ztai==1 ){
	// 			//percent=msg.height;
	// 			//alert(percent);
	// 			jiang=msg.nd_realid;
	// 			}
	// 		}
	// });	
	height1=parseInt($('.beijing').height()*0.75-$('body').height());
	height2=parseInt($('.beijing').height()*0.89-$('body').height());
	height3=parseInt($('.beijing').height()-$('body').height());
	//percent=100;
	console.log(percent);
	if(jiang==0){
		if( yidengjiang==0 ){
		if(percent>0&&percent<=33){
			$('.jishi1,.dianji_txt,.tiao_box,.dianji_tips,.fasheqi').hide();
			$('.fasheqi2_box').show();
			$('.fasheqi2_box').addClass('fadeInUp');
			
			xingH=parseInt(height1/33*percent)-300;
			X_num=parseInt(xingH/(percent*150)*100/2);

			delay=percent*150+1000;
			$(".beijing").animate({bottom:'-'+xingH+'px'},percent*150,function(){
				clearInterval(aa);
			});
			setTimeout(function(){
				showJiang(3);
			},delay)
			
		}else if(percent>33&&percent<=66){
			$('.jishi1,.dianji_txt,.tiao_box,.dianji_tips,.fasheqi').hide();
			$('.fasheqi2_box').show();
			$('.fasheqi2_box').addClass('fadeInUp');
			
			xingH=(height2-height1)/33*(percent-33)+height1-200;
			X_num=parseInt(xingH/((percent-33)*100+5150)*100/2);
			xingH2=height1-300;
			delay=(percent-33)*100+6150;
			$(".beijing").animate({bottom:'-'+xingH2+'px'},4950,function(){
				clearInterval(aa);
				setTimeout(function(){
					aa=setInterval("juLi()",100);
					$(".beijing").animate({bottom:'-'+xingH+'px'},(percent-33)*100,function(){
						clearInterval(aa);
					});
				},200)
			});
			
			setTimeout(function(){
				showJiang(2);
				
			},delay)
		}else if(percent>66){
			xingQiu3();
			setTimeout(function(){
				showJiang(2);
			},delay)
		}
	}
	else if(yidengjiang==1){
		xingQiu3();
		setTimeout(function(){
			showJiang(1);
		},delay)
		
	}
	
	aa=setInterval("juLi()",100);
	
	}else{
	
		if(percent>0&&percent<=33){
			$('.jishi1,.dianji_txt,.tiao_box,.dianji_tips,.fasheqi').hide();
			$('.fasheqi2_box').show();
			$('.fasheqi2_box').addClass('fadeInUp');
			
			xingH=parseInt(height1/33*percent)-300;
			X_num=parseInt(xingH/(percent*150)*100/2);

			delay=percent*150+1000;
			$(".beijing").animate({bottom:'-'+xingH+'px'},percent*150,function(){
				clearInterval(aa);
			});
			
			
		}else if(percent>33&&percent<=66){
			$('.jishi1,.dianji_txt,.tiao_box,.dianji_tips,.fasheqi').hide();
			$('.fasheqi2_box').show();
			$('.fasheqi2_box').addClass('fadeInUp');
			
			xingH=(height2-height1)/33*(percent-33)+height1-200;
			X_num=parseInt(xingH/((percent-33)*100+5150)*100/2);
			xingH2=height1-300;
			delay=(percent-33)*100+6150;
			$(".beijing").animate({bottom:'-'+xingH2+'px'},4950,function(){
				clearInterval(aa);
				setTimeout(function(){
					aa=setInterval("juLi()",100);
					$(".beijing").animate({bottom:'-'+xingH+'px'},(percent-33)*100,function(){
						clearInterval(aa);
					});
				},200)
			});
			
			
		}else if(percent>66){
			xingQiu3();
			
		}
	

		if(jiang==3){
			delay=percent*150+1000;
			setTimeout(function(){
				showJiang(3);
			},delay)
		}else if(jiang==2){
			delay=(percent-33)*100+6150;
			setTimeout(function(){
				showJiang(2);	
			},delay)
		}else if(jiang==1){
			delay=(percent-66)*100+8650;
			setTimeout(function(){
				showJiang(1);
			},delay)
		}
			
	
	aa=setInterval("juLi()",100);
	
	}
	
}

	function showJiang(jiang){
		var xingTxt;
		if(jiang==1){xingTxt='脉冲行星'}else if(jiang==2){xingTxt='刍蒿变星'}else if(jiang==3){xingTxt='亚褐矮星'}
		$('.jiang_wap').show();
		$('.jiang_wap').addClass('bounceInDown');
		$('.jiang_box .tit').hide();
		$('.jiang_box .txt').hide();
		$('.jiang'+jiang).show();
		$('.juli').html(H_num);
		$('.xing_name').html(xingTxt);
		setTimeout(function(){
			$('.jiang_box .tit').show().addClass('tada');
			$('.jiang_box .txt').show().addClass('bounceIn');
		},500)
		
		
	}

function juLi(){
	H_num=H_num+X_num;
	$('.fasheqi2_txt2 span').html(H_num);
}
function gamePlay(){
	jz=0;
	$('.game').show();
	$('.dianji_txt').show();
	$('.dianji_txt').addClass('fadeInLeft');
	$('.dianji_tips').show();
	$('.shouye').hide();
	setTimeout(function(){
		$('.jishi3').show();
		$('.jishi3').addClass('bounceIn');
		$('.dianji_txt').removeClass('fadeInLeft');
	},800)
	setTimeout(function(){
		$('.jishi2').show();
		$('.jishi3').hide();	
	},1800)
	setTimeout(function(){
		$('.jishi1').show();
		$('.jishi2').hide();	
	},2800)
	setTimeout(function(){
		$('.jishi1').hide();
		$('.jishi_go').show();
	},3800)
	setTimeout(function(){
		$('.jishi_go').hide();
		click=true;	
		$('.fasheqi').removeClass('shake_fei');
		$('.dianji_tips').hide();
		bb= setInterval("timimg()",1000)
	},4800)
}
function xingQiu3(){
	$('.jishi1,.dianji_txt,.tiao_box,.dianji_tips,.fasheqi').hide();
		$('.fasheqi2_box').show();
		$('.fasheqi2_box').addClass('fadeInUp');
		
		xingH=(height3-height2)/34*(percent-66)+height2;
		xingH2=height1-300;
		xingH3=height2-200;
		delay=(percent-66)*100+8650;
		X_num=parseInt(xingH/((percent-66)*100+8650)*100/2);
		$(".beijing").animate({bottom:'-'+xingH2+'px'},4950,function(){
			clearInterval(aa);
			setTimeout(function(){
				aa=setInterval("juLi()",100);
				$(".beijing").animate({bottom:'-'+xingH3+'px'},3300,function(){
					clearInterval(aa);
					setTimeout(function(){
						aa=setInterval("juLi()",100);
						$(".beijing").animate({bottom:'-'+xingH+'px'},(percent-66)*100,function(){
							clearInterval(aa);
						});
					},200)
				});
			},200)
		});
			
}
var img_num=1;
function huanTu(){
	//$('.fasheqi img').attr('src','http://fabu.dota.weibohe.com.cn/xingkeznq/img/fei'+img_num+'.png');
	$('.huojianNew').hide();;
	$('.huojian'+img_num).show();;
	img_num++;
	if(img_num==3){
		img_num=1;
	}
}
