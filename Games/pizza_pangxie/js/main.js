var st,sf;
$().ready(function(e) {
	//console.log("md5"+$.md5('5000'));
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	} 
	$(window).load(function(){
		//loading
		var si=0,sf;
		sf = setInterval(function(){
			if(si>=99){
				clearInterval(sf);
				$(".load").hide(0);
				$(".cover").hide(0);
			}
			$(".load strong").text(si);
			si++;
		},60);
		
		
		
		
		$("#stu").html('<audio controls="controls" loop="loop" id="bg"><source src="js/mp3.mp3?v=2" type="audio/mpeg"></audio>');	
		$("#bg")[0].play();
		musicAC();
		
	});
	var wh = $(window).height();
	$(".cover").height(wh);
	function musicAC(){
		st =0;
		sf = setInterval(function(){
			if(st==2)st=0;
			$("#mu").attr("src","img/mu"+st+".png");
			st++;
		},300);
	}
	$(".music").bind("click",function(){
		if($(".music").hasClass("on")){
			$(".music").removeClass("on");
			$("#bg")[0].pause();
			clearInterval(sf);
			$("#mu").attr("src","img/music_off.png");
		}else{
			$(".music").addClass("on");
			$("#bg")[0].play();
			musicAC();
			//$("#music").attr("src","img/logo_02.png");
		}
	});
	
	$(".butt-1").bind("click",function(){
		$(".share-pop").show(0);
		if (window._tag) { 
		_tag.dcsMultiTrack('wt.event','nb1_pizza_showoff'); 
		} 

	});
	$(".shar-bg").bind("click",function(){
		$(".share-pop").hide(0);
	});
	$(".butt-2").bind("click",function(){
		if (window._tag) { 
		_tag.dcsMultiTrack('wt.event','nb1_pizza_recatch'); 
		} 
		setTimeout(function(){
			location.href="index.html";
		},200);
		
	});
});
function isMobile(phone){
	var ab=/^(1[0-9])\d{9}$/;
	if(ab.test(phone) == false){
		return false;
	}else{
		return true;
	}
}
function isEmail(str){
   var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
   return reg.test(str);
}
