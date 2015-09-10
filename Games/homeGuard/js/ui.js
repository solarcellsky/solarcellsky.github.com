 //JavaScript Document
  
//游戏结束输入手机号	
$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
	
	document.getElementById("bg_tjxx").style.top= img_h*0.0+ 'px'; 
	document.getElementById("bg_tjxx").style.marginLeft= w1*0+ 'px';
	
	document.getElementById("score").style.top= img_h*0.294+ 'px';
	
	document.getElementById("phone").style.top= img_h*0.49+ 'px';
	document.getElementById("phone").style.height= img_h*0.048+ 'px';
	
	document.getElementById("phone_tip").style.top= img_h*0.55+ 'px';
	
	document.getElementById("btn_qd").style.top= img_h*0.684+ 'px';
	
});

//$(function(){
//	$('#btn_share2').click(function(){
//		$('.share_popup').css('display','block');
//	});
//	$('.share_popup').click(function(){
//		$(this).css('display','none');
//	});
//});
//

//排行榜	
$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
	document.getElementById("list").style.top= img_h*0.19+ 'px';
	document.getElementById("list").style.height= img_h*0.44+ 'px';
	
	document.getElementById("list2").style.top= img_h*0.694+ 'px';
		
	document.getElementById("btn_return").style.top= img_h*0.9+ 'px';
});



