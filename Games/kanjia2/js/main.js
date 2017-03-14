$(document).ready(function(e) {
	$(".padding_top").css("width",window_w).css("height",window_h);
	
	$.fn.extend({
	   setPosition:function(x,y){
	   	$(this).css('top',window_h/hip*y).css("left",window_w/wip*x);
		return $(this);
	   },
	   setHeight:function(height){
	   	$(this).css("height",window_h/hip*height);//.css("width",wip/window_h*height);
	   	return $(this);
	   },
	   setWidth:function(width){
	   	$(this).css("width",window_w/wip*width);
	   	return $(this);
	   },
	   fadeIn:function(){
	   	 $(this).css("opacity",0.2);
	   	 $(this).show();
	   	 $(this).animate(
		 	{
				opacity:1
			},
			1000
		 );
	   },
	   fadeOut:function(){
	   	$(this).removeClass("fadeIn");
	   	 $(this).addClass("fadeOut");
	   }
	});
	
	var imgurl = [ 	
		{src: "img/cut.png"},
		{src: "img/p1-1.png"},
		{src: "img/p1-2.png"},
		{src: "img/p2-1.png"},
		{src: "img/p2-2.png"},
		{src: "img/p3-1.png"},
		{src: "img/p3-2.png"},
		{src: "img/p3-3.png"},
		{src: "img/p3-4.png"},
		{src: "img/p3-5.png"},
		{src: "img/p3-6.png"},
		{src: "img/p4-1.png"},
		{src: "img/p4-2.png"},
		{src: "img/p4-3.png"},
		{src: "img/p4-4.png"},
		{src: "img/p4-5.png"},
		{src: "img/p5-1.png"},
		{src: "img/p5-2.png"},
		{src: "img/p5-3.png"},
		{src: "img/p5-4.png"},
		{src: "img/p6-1.png"},
		{src: "img/share.png"},
	];
	if(fPic != "") {
		imgurl.push({src:fPic});
	}
	
	$("#loading").setWidth(320).setHeight(540).setPosition(0,0);
	$(".load").setWidth(320).setHeight(540).setPosition(0,0);
	$("#loading_number").setPosition(130,290);

	
	function upScore(){

		$.ajax({
            url: './upScore.php',
            type: 'POST',
            data:{"openId":openId,"friendId":friendId},
            dataType: 'json',
            timeout: 10000,
            success: function(result){
				hNum = result.num;
				can = 0;
            }
        }); 
	}

	function getKey(){

		$.ajax({
            url: './server.php',
            type: 'POST',
            data:{"openId":openId},
            dataType: 'HTML',
            timeout: 10000,
            success: function(result){
				$(".page4 .key").text(result);
            }
        }); 
	}
	
	function getRank(){
		
		 $.ajax({
          url: './rank.php',
          type: 'POST',
          data:{"method":"rank"},
          dataType: 'json',
          timeout: 10000,
          success: function(result){
		  			$("tbody").html("");
	         		if(result){
						for(var i=0;i<result.length;i++){
							var tr = $("<tr></tr>");
							tr.append($("<td>"+result[i].name+"</td>"));
							tr.append($("<td>"+result[i].score+"</td>"));
							tr.append($("<td>"+result[i].rank+"</td>"));
							
							$("tbody").append(tr);
						}
						
					}
	          }
	      }); 
	}
	
	function dealPrice(){
		var ret = [];
		var score = price;
		if(hNum >= 200) {
			score -= 200;
			$(".page4 .score").text(200);
		}
		else if(hNum >= 100){
			score -= 150;
			$(".page4 .score").text(150);
		}
		else if(hNum >= 50) {
			score -= 100;
			$(".page4 .score").text(100);
		}
		else if(hNum >= 20) {
			score -= 50;
			$(".page4 .score").text(50);
		}
		ret[0] = Math.floor(score/1000);
		ret[1] = Math.floor((score%1000)/100);
		ret[2] = Math.floor((score%100)/10);
		ret[3] = Math.floor(score%10);
		return ret;
	}
	
	function showPage(num){
		switch (num) {
			case 1:
				if(friendId !="" && friendId!= openId){
					showPage(5);
					return;
				}
				if(first != 1) {
					showPage(6);
					return;
				}
				$(".hide").hide();
				$(".page1").fadeIn();
				
				$(".page1 .back").attr("src", "img/p1-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page1 .p1").attr("src", "img/p1-2.png").setWidth(178).setHeight(26).setPosition(70,440).unbind(click);

				$(".page1 .p1").bind(click,function(){
					showPage(2);
				});
				break;
			case 2:
				$(".hide").hide();
				$(".page2").fadeIn();
				
				$(".page2 .back").attr("src", "img/p2-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page2 .p1").attr("src", "img/p2-2.png").setWidth(178).setHeight(26).setPosition(70,405).unbind(click);

				$(".page2 .p1").bind(click,function(){
					showPage(3);
				});
				
				break;
				
			case 3:
				if(first != 1) {
					showPage(6);
					return;
				}
				$(".hide").hide();
				$(".page3").fadeIn();
				
				$(".page3 .back").attr("src", "img/p3-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page3 .p1").attr("src", "img/p3-2.png").setWidth(260).setHeight(51).setPosition(33,290);
				$(".page3 .p2").attr("src", "img/p3-3.png").setWidth(171).setHeight(26).setPosition(75,360);
				$(".page3 .p3").attr("src", "img/p3-4.png").setWidth(171).setHeight(26).setPosition(75,415);
				$(".page3 .p4").attr("src", "img/p3-5.png").setWidth(42).setHeight(49).setPosition(140,450);
				$(".page3 .p5").attr("src", "img/p3-6.png").setWidth(170).setHeight(52).setPosition(70,200);
				$(".page3 .score").setPosition(75,319).setWidth(30).text(hNum);
				var arr = dealPrice();
				$(".page3 .qian").setPosition(104,195).text(arr[0]);
				$(".page3 .bai").setPosition(132,195).text(arr[1]);
				$(".page3 .shi").setPosition(157,195).text(arr[2]);
				$(".page3 .ge").setPosition(185,195).text(arr[3]);
				
				$(".page3 .p3").bind(click,function(){
					showPage(4);
				});
				
				$(".page3 .p4").bind(click,function(){
					showPage(2);
				});
				
				$(".page3 .p2").bind(click,function(){
					$("#share").show();
				});
				$("#share").bind(click,function(){
					$("#share").hide();
				});
				break;	
				
			case 4:
				$(".hide").hide();
				$(".page4").fadeIn();
				
				if(hNum >= 20) {
					getKey();
				}
				
				
				$(".page4 .back").attr("src", "img/p4-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page4 .p1").attr("src", "img/p4-2.png").setWidth(273).setHeight(38).setPosition(20,290).unbind(click);
				$(".page4 .p2").attr("src", "img/p4-3.png").setWidth(35).setHeight(30).setPosition(15,15).unbind(click);
				$(".page4 .p3").attr("src", "img/p4-4.png").setWidth(190).setHeight(25).setPosition(63,250).unbind(click);
				$(".page4 .p4").attr("src", "img/p4-5.png").setWidth(171).setHeight(26).setPosition(75,360).unbind(click);
				$(".page4 .p5").attr("src", "img/p3-6.png").setWidth(170).setHeight(52).setPosition(70,170).unbind(click);
				$(".page4 .score").setPosition(122,251).setWidth(40).text(0);
				$(".page4 .key").setPosition(20,296).setWidth(270).text("");
				var arr = dealPrice();
				$(".page4 .qian").setPosition(104,166).text(arr[0]);
				$(".page4 .bai").setPosition(132,166).text(arr[1]);
				$(".page4 .shi").setPosition(157,166).text(arr[2]);
				$(".page4 .ge").setPosition(185,166).text(arr[3]);
				
				$(".page4 .p2").bind(click,function(){
					if(first == 1){
						showPage(6);
					}
					else
					showPage(3);
				});
				$(".page4 .p4").bind(click,function(){
					location.href = "http://www.10010.com/02i4Q";
				});
				break;	
			case 5:
				$(".hide").hide();
				$(".page5").fadeIn();

				$(".page5 .back").attr("src", "img/p5-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page5 .p1").attr("src", "img/p5-3.png").setWidth(260).setHeight(51).setPosition(33,260).unbind(click);
				$(".page5 .p2").attr("src", "img/p5-2.png").setWidth(171).setHeight(26).setPosition(75,340).unbind(click);
				$(".page5 .p3").attr("src", "img/p5-4.png").setWidth(171).setHeight(26).setPosition(75,400).unbind(click);
				$(".page5 .p4").attr("src", "img/p3-5.png").setWidth(42).setHeight(46).setPosition(140,450).unbind(click);
				$(".page5 .p5").attr("src", "img/p3-6.png").setWidth(170).setHeight(52).setPosition(70,170).unbind(click);
				$(".page5 .head").attr("src", fPic).setWidth(30).setHeight(30).setPosition(35,260).unbind(click);
			    var arr = dealPrice();
				$(".page5 .score").setPosition(80,285).setWidth(33).text(hNum);
				$(".page5 .qian").setPosition(104,166).text(arr[0]);
				$(".page5 .bai").setPosition(132,166).text(arr[1]);
				$(".page5 .shi").setPosition(157,166).text(arr[2]);
				$(".page5 .ge").setPosition(185,166).text(arr[3]);
				
				$(".page5 .p2").bind(click,function(){
					if(can != 1) {
						alert("你已经帮砍过了!!");
						return;
					}
					upScore();
					$(".page5 .score").text(hNum);
					$("#cut").show();
				});
				
				$("#cut").bind(click,function(){
					$("#cut").hide();
				});
				$(".page5 .p4").bind(click,function(){
					showPage(7);
				});
				
				$(".page5 .p3").bind(click,function(){
					location.href = "http://www.1ceyou.com/web/6s/code/index.php?uid=own";
					return;
					friendId = "";
					hNum = myNum;
					showPage(1);
				});
				break;	
			case 6:
				$(".hide").hide();
				$(".page6").fadeIn();
				
				$(".page6 .back").attr("src", "img/p6-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page6 .p1").attr("src", "img/p3-2.png").setWidth(260).setHeight(51).setPosition(33,270).unbind(click);
				$(".page6 .p2").attr("src", "img/p3-3.png").setWidth(171).setHeight(26).setPosition(75,360).unbind(click);
				$(".page6 .p3").attr("src", "img/p3-4.png").setWidth(171).setHeight(26).setPosition(75,415).unbind(click);
				$(".page6 .p4").attr("src", "img/p3-5.png").setWidth(42).setHeight(46).setPosition(140,450).unbind(click);
				$(".page6 .p5").attr("src", "img/p3-6.png").setWidth(170).setHeight(52).setPosition(70,170).unbind(click);
				$(".page6 .score").setPosition(85,296).text(hNum);
				var arr = dealPrice();
				$(".page6 .qian").setPosition(104,166).text(arr[0]);
				$(".page6 .bai").setPosition(132,166).text(arr[1]);
				$(".page6 .shi").setPosition(157,166).text(arr[2]);
				$(".page6 .ge").setPosition(185,166).text(arr[3]);
				
				$(".page6 .p3").bind(click,function(){
					showPage(4);
				});
				
				$(".page6 .p4").bind(click,function(){
					showPage(2);
				});
				
				$(".page6 .p2").bind(click,function(){
					$("#share").show();
				});
				$("#share").bind(click,function(){
					$("#share").hide();
				});
				
				break;
			case 7:
				$(".hide").hide();
				$(".page7").fadeIn();
				
				$(".page7 .back").attr("src", "img/p2-1.png").setWidth(320).setHeight(540).setPosition(0,0);
				$(".page7 .p1").attr("src", "img/p2-2.png").setWidth(178).setHeight(26).setPosition(70,405).unbind(click);

				$(".page7 .p1").bind(click,function(){
					showPage(5);
				});
				
				break;
		
		}	
		$("#loading").hide();
	}
	

	var newImg = new Image();
	newImg.src = "img/loading.gif";
	$(".load").attr("src","img/loading.gif");
	newImg.onload = function(){
		loadImg(imgurl, showPage);
	}

	
});
