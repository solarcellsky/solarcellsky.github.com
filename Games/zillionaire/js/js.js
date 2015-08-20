 //JavaScript Document
 
//排行榜	
$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
	document.getElementById("jp").style.top= img_h*0.28+ 'px';
	
	document.getElementById("bg_tjxx").style.top= img_h*0.0+ 'px'; 
	document.getElementById("bg_tjxx").style.marginLeft= w1*0+ 'px';
	
	
	document.getElementById("name").style.top= img_h*0.431+ 'px';
	document.getElementById("name").style.height= img_h*0.03+ 'px';
	
	document.getElementById("phone").style.top= img_h*0.485+ 'px';
	document.getElementById("phone").style.height= img_h*0.03+ 'px';
	
});
$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
	document.getElementById("error").style.top= img_h*0.537+ 'px';
		
});

$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
		
	document.getElementById("btn_tj").style.top= img_h*0.60+ 'px';
	
});

 
//游戏结束输入手机号	
$(function(){
	var w1=document.documentElement.clientWidth;
	var h1=document.documentElement.clientHeight;
	var img_h=1040*(w1/640);
	document.getElementById("bg_tjcg").style.top= img_h*0.0+ 'px'; 
	document.getElementById("bg_tjcg").style.marginLeft= w1*0+ 'px';
		
	document.getElementById("btn_share").style.top= img_h*0.58+ 'px';
});


