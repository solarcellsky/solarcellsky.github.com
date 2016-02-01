 //JavaScript Document
 //提交手机号码页面
$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
	document.getElementById("img_results_1_1").style.top= img_h*0.166+ 'px';
	document.getElementById("img_results_1_2").style.top= img_h*0.173+ 'px';
	
	document.getElementById("mile").style.top= img_h*0.231+ 'px';
	document.getElementById("mile").style.height= img_h*0.0365+ 'px';
	document.getElementById("mile").style.lineHeight= img_h*0.0365+ 'px';
	
	document.getElementById("moneynum1").style.top= img_h*0.2884+ 'px';
	document.getElementById("moneynum1").style.height= img_h*0.0365+ 'px';
	document.getElementById("moneynum1").style.lineHeight= img_h*0.0365+ 'px';
	
	document.getElementById("moneynum").style.top= img_h*0.3156+ 'px';
	document.getElementById("moneynum").style.height= img_h*0.0365+ 'px';
	document.getElementById("moneynum").style.lineHeight= img_h*0.0365+ 'px';
	
	document.getElementById("img_name").style.top= img_h*0.453+ 'px';
	document.getElementById("img_phone").style.top= img_h*0.509+ 'px';
	
	document.getElementById("name").style.top= img_h*0.453+ 'px';
	document.getElementById("name").style.height= img_h*0.0365+ 'px';
	document.getElementById("name").style.lineHeight= img_h*0.0365+ 'px';
	
	document.getElementById("phone").style.top= img_h*0.509+ 'px';
	document.getElementById("phone").style.height= img_h*0.0365+ 'px';
	document.getElementById("phone").style.lineHeight= img_h*0.0365+ 'px';

	document.getElementById("tip").style.top= img_h*0.5623+ 'px';
	
	document.getElementById("btn_submit").style.top= img_h*0.6433+ 'px';
	document.getElementById("btn_again").style.top= img_h*0.6433+ 'px';
	
	
});

//提交成功页面分享按钮
$(function(){
    $('#btn_share').click(function(){
        $('.share_popup').css('display','block');
    });
    $('.share_popup').click(function(){
        $(this).css('display','none');
    });
});
