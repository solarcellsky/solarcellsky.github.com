//红包随机出现
/*var hongbao=document.getElementById("hong");
var hongbaoimg=['<img src="images/1.jpg">','<img src="images/2.jpg">','<img src="images/3.jpg">','<img src="images/4.jpg">','<img src="images/5.jpg">'];
	a=Math.floor(Math.random(hongbaoimg)*5);
hongbao.innerHTML=hongbaoimg[a];*/
//音乐开关按钮
var musicbtn = document.getElementById('musicbtn');
var musiconbtn = document.getElementById('on');
musicbtn.onclick = function() {
    game.audioobj.pause();
    musiconbtn.style.display = "block";
    musicbtn.style.display = "none";
};
musiconbtn.onclick = function() {
    game.audioobj.play();
    musiconbtn.style.display = "none";
    musicbtn.style.display = "block";
};
//分享
var share = document.getElementById('share');
share.onclick = function() {
    share.style.display = "none";
}

/* function codefans(){
        var box=document.getElementById("texiao");
        box.style.display="none";
		
    }
    setTimeout("codefans()",18000);//3秒
var looder=document.getElementById("looder");
function loder(){
	 looder.style.display="none";
	}
	
var ready=document.createElement('div')
	ready1=document.createElement('div')
	ready_3=document.createElement('div')//3
	ready_2=document.createElement('div')//2
	ready_1=document.createElement('div')//1
	ready_3.id='a'
	ready_2.id='b'
	ready_1.id='c'
    ready.id='r_1';
	ready1.id='r_2';
	
looder.appendChild(ready);
	looder.appendChild(ready_3);
	looder.appendChild(ready_2);
	looder.appendChild(ready_1);
	looder.appendChild(ready1);
	

function e(){
	document.getElementById("r_1").style.display="none";
	$("#a").css("display","block");
	
	}
function e1(){
	$("#a").css("display","none");
	$("#b").css("display","block")	
}
	function e2(){
	$("#b").css("display","none");
	$("#c").css("display","block");	
	}
		function e3(){
	$("#c").css("display","none");
	$("#r_2").css("display","block");	
	}
	 //setTimeout("e()",2000);//3秒
function f(){
	//document.getElementById("r_2").style.display="none";
	$("#r_2").css("display","none");	
	}
	// setTimeout("f()",1000);//3秒
	function bigan1(){
		document.getElementById("r_1").style.display="block";
		$("#a").css("display","none");
		$("#b").css("display","none");
		$("#c").css("display","none");
		$("#r_2").css("display","none");	
		};
function bigan(){
	 setTimeout("loder()",4500);//3秒
				 setTimeout("e()",1000);//2秒
				  setTimeout("e1()",2000);//2秒
				   setTimeout("e2()",3000);//2秒
				    setTimeout("e3()",4000);//2秒
					 setTimeout("f()",1000);//1秒
	}
*/
