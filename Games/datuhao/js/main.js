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

//锁定屏幕滑动
var jz=0;
document.addEventListener("touchmove",function(e){
	if(jz==0){
	e.preventDefault();
	e.stopPropagation();
	}
},false);

var num=0;
var score=0;
var money=0;
var time=11;
var style;
var play=false;
var openid;
var self;
var canplay=1;
var music_play=true;

$(function(){
	document.documentElement.style.webkitTouchCallout = "none"; //禁止弹出菜单
    document.documentElement.style.webkitUserSelect = "none";//禁止选中
	//window.ontouchstart = function(e) { e.preventDefault(); };
	// http://suning.xingkecgame.com/share.php?uid=omc5zvxQ1O3BXlE5raQ_v9ZfaY18&type=1
	$.ajax({
		type: "POST", //用POST方式传输
		dataType: "JSON", //数据格式:JSON
		data:{uid:fid},
		async : false,
		url: './ajax/ajaxbase.php', //目标地址
		success:function(msg){
			openid = msg.wecha_id;
			self = msg.self;
			if(msg.self==1){
				if(msg.status=='haveplay'){
					$('.shouye').hide();
					$('.yaoq_wap').show();
					$('.zhuti2').show();
					$('.zhuti2').addClass('bounceIn');
					setTimeout(function(){
						$('.zhuti2').removeClass('bounceIn');
						$('.zhuti2').addClass('pulse');
					},800)
				}
			}else{
				if(msg.status==-1){
					
					$('.shouye').hide();
					$('.shou_txt3').hide();
					$('.shou_txt2').show();
					$('.tishi span').html(msg.name);
					$('.yaoq_wap').show();
					$('.zhuti2').show();
					$('.zhuti2').addClass('bounceIn');
					setTimeout(function(){
						$('.zhuti2').removeClass('bounceIn');
						$('.zhuti2').addClass('pulse');
					},800)
				}else{
					if(msg.status==0){
						canplay=0;
					}
					$('.times').html(msg.status);
					$('.user').html(msg.name);
					$('.hy_come').show();
					$('.start_btn').hide();					
				}
			}
		}
		
	});
	//重构点击事件，转点击事件为touchstart事件，提高优先级，解决因优先级落后导致的点击延迟问题
	 ;(function () {
			var isTouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click', _on = $.fn.on;
			$.fn.on = function () {
				arguments[0] = (arguments[0] === 'click') ? isTouch : arguments[0];
				return _on.apply(this, arguments);
			};
		})(); 
	
	createjs.Sound.registerSound( {src:"./img/papa.mp3", id:"pa"} );
	createjs.Sound.registerSound( {src:"./img/readygo.mp3", id:"go"} );
	var oc_music = 0;
	
	$(".music").on('touchend',function(){
		oc_music++;
		//alert(oc_music);
		if(oc_music%2==1){
			music_play=false;
			$('.music img').attr('src','./img/music_no.png');
		}else{
			music_play=true;
			$('.music img').attr('src','./img/music.png');
		}
		
	})
	
	
	//首页开始按钮
	$('.start_btn,.TA_btn').on('touchstart',function(){
		jz=0;
		if(canplay==0){
			$('.wan_tips').show();
			return;
		}
		$('.game,.game_rule').show();
		$('.shouye,.qian_luo').hide();
	});
	//开始按钮
	$('.kaishi').on('touchstart',function(){
		jz=0;
		$('.game_rule .tc_box').hide();
		$('.ready_tips').show();
		$('.ready_tips').addClass('lightSpeedIn');
		createjs.Sound.play("go");
		setTimeout(function(){
			$('.go_tips').show();
			$('.ready_tips').removeClass('lightSpeedIn');
			$('.go_tips').addClass('bounceIn');
		},600)
		setTimeout(function(){
			$('.game_rule,.pager1,.pager2').hide();
			$('.pager,.jifen,.pager0').show();
			Countdown();
		},1400)
	});
	//点击抽打
	$('.pager,.pager_txt').on('touchstart',function(){
		jz=0;
		gamePlay();
		Monfly();
	});
	//点击提示关闭按钮
	$('.wan_close').on('touchstart',function(){
		$('.wan_tips').hide();
		$('.share_wap').show();
	});
	
	//首页排行榜按钮
	$('.phb_btn').on('touchstart',function(){
		jz=1;
		$.ajax({
			type: "POST", //用POST方式传输
			dataType: "JSON", //数据格式:JSON
			async : false,
			url: 'ajax/ajaxrank.php', //目标地址
			success:function(msg){
				$('.jinbi_zong span').html(msg.score);
				text="";
			
				for(var i=0;i<msg.rank.length;i++){
					if(i<3){
						text+='<li><div class="phb_left"><span class="phb_num"><img src="./img/num'+(i+1)+'.png"/></span><span class="touxiang"><img src="'+msg.rank[i].headimgurl+'"/></span><span class="user_name">'+msg.rank[i].name+'</span></div><div class="phb_right">金币：<span class="jb_num">'+msg.rank[i].score+'</span></div></li>';
					}else{
						text+='<li><div class="phb_left"><span class="phb_num">'+(i+1)+'</span><span class="touxiang"><img src="'+msg.rank[i].headimgurl+'"/></span><span class="user_name">'+msg.rank[i].name+'</span></div><div class="phb_right">金币：<span class="jb_num">'+msg.rank[i].score+'</span></div></li>';
					}
					
				}
				$('.phb_con').html(text);
			}
			
		});
		$('.phb_wap').show();
	});
	//关闭按钮
	$('.phb_close,.close_btn').on('touchstart',function(){
		jz=0;
		$('.phb_wap,.rule_wap').hide();
	});
	//游戏规则
	$('.rule_btn').on('touchstart',function(){
		jz=0;
		$('.rule_wap').show();
	});
	//财富按钮
	$('.caifu_btn,.mymon_btn').on('touchstart',function(){
		jz=0;
		mychange();
		$('.money_wap').show();
		$('.gameOver').hide();
		$('.qian_luo').hide();
	});
	//返回首页
	$('.return_shou').on('touchstart',function(){
		jz=0;
		$('.money_wap').hide();
		$('.shouye').show();
		$('.qian_luo').show();
		chuShi();
	});
	//兑换理财券
	$('.duih_btn').on('touchstart',function(){
		jz=0;
		play=false;
		$.ajax({
			type: "POST", //用POST方式传输
			dataType: "JSON", //数据格式:JSON
			async : false,
			url: 'ajax/ajaxconfig.php', //目标地址
			success:function(msg){
				$('.quan5_bi').html(msg[1].num);
				$('.quan4_bi').html(msg[2].num);
				$('.quan3_bi').html(msg[3].num);
				$('.quan2_bi').html(msg[4].num);
				$('.quan1_bi').html(msg[5].num);
			}
			
		});
		$('.dhq_wap').show();
		setTimeout(function(){
			play=true;
			
		},500)
	});
	//取消
	$('.cancel_btn').on('touchstart',function(){
		jz=0;
		play=false;
		$('.tchuang,.quan1_txt,.quan2_txt,.quan3_txt,.quan4_txt,.quan5_txt').hide();
		setTimeout(function(){
			play=true;
		},500)
	});
	//返回上一页
	$('.return').on('touchstart',function(){
		jz=0;
		mychange();
		$('.dhq_wap').hide();
	});
	//分享
	$('.over_share').on('touchstart',function(){
		jz=0;
		if(play){
			$('.share_wap').show();
		}
	});
	$('.phb_sbtn,.rule_sbtn').on('touchstart',function(){
		//alert(2);
		jz=0;
		$('.share_wap').show();
	});
	$('.share_btn').on('touchstart',function(){
		//alert(2);
		jz=0;
		$('.wan_tips').show();
		$('.wan_txt2').show();
		$('.wan_txt').hide();
	});
	
	
	$('.share_close').on('touchstart',function(){
		jz=0;
		$('.share_wap').hide();
	});
	//再玩一次
	$('.again_btn').on('touchstart',function(){
		jz=0;
		if(play){
			chuShi();
			$('.game_rule,.game').show();
			$('.game_over').hide();
		}
		
	});
	
	//游戏结束确定按钮
	$('.tijiao').on('touchstart',function(){
		$.ajax({
			type: "POST", //用POST方式传输
			dataType: "JSON", //数据格式:JSON
			data:{openid:openid,score:money},
			async : false,
			url: 'ajax/ajaxscore.php', //目标地址
			success:function(msg){
			//alert(play);
				shareUserTitle = '我在“打土豪”游戏中获得了'+money+'分，敢来挑战吗？';
				wx.ready(function () {
				  Games.ConfigShare(shareTitle,shareUserTitle,shareUrl,shareIMG,function(){
					  window.location.href="index.php";
					  //code ...
				  });
				});
		 
			   wx.error(function (res) {
				alert(res.errMsg);
			   })
				$('.shouye').hide();
				$('.yaoq_wap').show();
				$('.zhuti2').show();
				$('.zhuti2').addClass('bounceIn');
				setTimeout(function(){
					$('.zhuti2').removeClass('bounceIn');
					$('.zhuti2').addClass('pulse');
				},800)
			}
			
		});
		if(play){
			$('.gameOver').show();
			$('.result_txt2 span').html(money);
			$('.game,.game_over').hide();
			$('.qian_luo').show();
			if(self==1){
				$('.wan_own').show();
			}else{
				$('.wan_hao').show();
			}
		}
		
	});
	
	//马上打我的土豪
	$('.mine_btn').on('touchstart',function(){
		$('.share_wap').show();
	});
	//兑换确认按钮
	
	$('.confirm_btn').on('touchstart',function(){
		$.ajax({
			type: "POST", //用POST方式传输
			dataType: "JSON", //数据格式:JSON
			data:{type:style},
			async : false,
			url: 'ajax/ajaxchange.php', //目标地址
			success:function(msg){
				play=false;
				if(msg.status!=0){
					alert(msg.error_log);
				}else{
					alert('兑换成功！');
					$('.my_money span').html(msg.score);
				}
				$('.quan'+style+'_txt').hide();
				$('.tchuang').hide();
				setTimeout(function(){
					play=true;
				},500)
			}
			
		});
	});
})
//游戏开始
function gamePlay(){
	num++;
	score++;
	money++;
	$('.score').html(score);
	$('.pager0').hide();
	$('.pager').addClass("wobble");
	if(music_play){
		createjs.Sound.play("pa");
	}
	var scoreStr= money.toString();
	$('.jbshu').empty();
	for(i=0;i<scoreStr.length;i++) {
		//alert("ok");
		$(".jbshu").append('<img src="./img/'+scoreStr.slice(i,i+1)+'.png"/>');
	} 
	var img_num=parseInt(Math.random()*5+1);
	var img_num2=parseInt(Math.random()*4+1);
	if(num%2==0){
		$('.pager1').show();
		$('.pager2').hide();
		$('.pager_txt').append('<img src="./img/text1_'+img_num+'.png"/>');
		
	}else{
		
		$('.pager2').show();
		$('.pager1').hide();
		$('.pager_txt').append('<img src="./img/text2_'+img_num2+'.png"/>');
	}
	setTimeout(function(){
		$('.pager').removeClass("wobble");
	},500);
}
//倒计时
function Countdown(){
	time--;
	if(time <= 0){
		GameOver();
		return null;
	}
	$('.time_txt span').text(time);
	setTimeout(function(){
		Countdown();
	},1000);
}

//游戏结束
function GameOver(){
	$('.jifen,.pager,.pager_txt').hide();
	$('.over_pager,.game_over').show();
	$('.gameover_txt2 span').html(money);
	
	setTimeout(function(){
		play=true;
	},500)

	
 } 
//初始化
function chuShi(){
	num=0;
	score=0;
	money=0;
	time=10; 
	play=false;
	$('.score').html('0');
	//$('.jbshu').empty();
	$('.jbshu').html('<img src="./img/0.png"/>');
	$('.result_txt2 span').html('');
	$('.pager,.ready_tips,.go_tips,.jifen,.over_pager').hide();
	$('.game_rule .tc_box,.pager_txt').show();
	$('.go_tips').removeClass('bounceIn');
	$('.pager_txt img').attr('src','');

}
//点击兑换理财券
function duiHuan(a){
 style=a;
 if(play){
	$('.tchuang').show();
	$('.quan'+style+'_txt').show(); 
 }	
}
//抽打是钱币掉下来
function Monfly(){
	var num=parseInt(Math.random()*10)+1;
	$('.jinbi'+num).removeClass('fadeInUp');
	$('.jinbi'+num).fadeIn();
	$('.jinbi'+num).addClass('fadeInUp');
}
function mychange(){
	$.ajax({
		type: "POST", //用POST方式传输
		dataType: "JSON", //数据格式:JSON
		async : false,
		url: 'ajax/ajaxmy.php', //目标地址
		success:function(msg){
			$('.my_money span').html(msg.score);
			text="";
			type = ['','2元','5元','10元','20元','100元'];
			for(var i=0;i<msg.juan.length;i++){
				text+='<li><span class="jine_num">'+type[msg.juan[i].gift_id]+'</span><span class="dhm_num">'+msg.juan[i].code+'</span><a ontouchstart="window.location.href=\'https://licai.suning.com/bof/app/myCoupons.htm?navigationType=LinkClicked&redeemCode='+msg.juan[i].code+'\'"><span class="shiyong_btn"><img src="http://fabu.dota.weibohe.com.cn/suningJinrong/img/shiyong_btn.png"/></span></a></li>'
			}
			$('.quan_scroll').html(text);
		}
		
	});
	
}