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
	   	 $(this).addClass("fadeIn");
	   },
	   fadeOut:function(){
	   	 $(this).addClass("fadeOut");
	   }
	});
	
	var imgurl = [ 	
				{src: "img/back.png"},
				{src: "img/p1-back.png"},
				{src: "img/p1-btn1.png"},
				{src: "img/p1-bnt2.png"},
				{src: "img/p1-btn3.png"},
				{src: "img/p1-btn4.png"},
		{src: "img/p1-title.png"},
		{src: "img/p1-title2.png"},
		{src: "img/p2-back.jpg"},
		{src: "img/p2-back.png"},
		{src: "img/p2-btn1.png"},
		{src: "img/p2-btn2.png"},
		{src: "img/p2-btn3.png"},
		{src: "img/p3-back.jpg"},
		{src: "img/p3-btn1.png"},
		{src: "img/p3-btn2.png"},
		{src: "img/p4-back.png"},
		{src: "img/p4-btn1.png"},
		{src: "img/p5-back.png"},
		{src: "img/pop.png"},
		{src: "img/s_1.png"},
		{src: "img/s_2.png"},
		{src: "img/s_3.png"},
		{src: "img/s_4.png"},
		{src: "img/s_5.png"},
		{src: "img/s_6.png"},
		{src: "img/img/s_1.png"},
		{src: "img/img/s_2.png"},
		{src: "img/img/s_3.png"},
		{src: "img/img/s_4.png"},
		{src: "img/img/s_5.png"},
		{src: "img/img/s_6.png"},
		{src: "img/title_txt.png"},
		{src: "img/wan.png"},
		{src: "img/wb.png"},
		{src: "img/0.png"},
		{src: "img/1.png"},
		{src: "img/2.png"},
		{src: "img/3.png"},
		{src: "img/4.png"},
		{src: "img/5.png"},
		{src: "img/6.png"},
		{src: "img/7.png"},
		{src: "img/8.png"},
		{src: "img/9.png"},
		{src: "img/10.png"},
		{src: "img/11.png"},
		{src: "img/kami.png"},
	];
	
	
	function sendData() {
	 //  $("#showLayer").show();
	   var	tel = $("#tel").val();
	   var name = $("#name").val();
	
	   if(name == ""){
	   	 alert("请填写姓名");
		 return;
	   }
	   if(tel == ""){
	   	 alert("请填写电话");
		 return;
	   }
			
		
        if(/^(133{9})|(153{9})|(18[09]{9})$/.test(tel) == false)
        {
            alert("只有电信号码能参与活动");
          //  tel.focus();
            return;
        }
		
       $.ajax({
            url: './server.php',
            type: 'POST',
            data:{"openId":openId,"name":name,"tel":tel},
            dataType: 'HTML',
            timeout: 10000,
            complete: function(result){
	            alert("提交成功!");
				showPage(2);
            }
        }); 
    }
	
	function upScore(){
		var gameScore = getGameScore();
		showPage(3);
		$.ajax({
            url: './upScore.php',
            type: 'POST',
            data:{"openId":openId,"score":gameScore},
            dataType: 'HTML',
            timeout: 10000,
            success: function(result){
	            gameTime = parseInt(result);
				upTime();
            }
        }); 
	}
	
	function upTime(){
		if(gameTime>0) {
			$("#time").setPosition(155,211).text(gameTime);
		}
		else{
			$("#time").hide();
			$(".page2 .title").attr("src", "img/p1-title2.png");
		}
	}
	
	function getGameScore(){
		var num = [0,0,0,0,0,0,0];
		for(var i=0;i<6;i++){
			num[score[i]]++;
		}
		if(num[4] == 4 && num[1]==2) {
				$(".page3 .pic").attr("src", "img/11.png");
			return 30;
		}
		if(num[4] == 6) {
			$(".page3 .pic").attr("src", "img/10.png");
			return 20;
		}
		if(num[1] == 6) {
			$(".page3 .pic").attr("src", "img/9.png");
			return 18;
		}
		if(num[4] ==5 && num[1] == 1) {
			$(".page3 .pic").attr("src", "img/8.png");
			return 16;
		}
		if(num[2] == 5) {
			$(".page3 .pic").attr("src", "img/7.png");
			return 14;
		}
		if(num[4] == 4) {
			$(".page3 .pic").attr("src", "img/6.png");
			return 12;
		}
		if(num[1] == 1 && num[2] ==1 && num[3] ==1 && num[4]==1 && num[5]==1) {
			$(".page3 .pic").attr("src", "img/5.png");
			return 8;
		}
		if(num[4] == 3) {
			$(".page3 .pic").attr("src", "img/4.png");
			return 6;
		}
		if(num[2] == 4) {
			$(".page3 .pic").attr("src", "img/3.png");
			return 4;
		}
		if(num[4] == 2) {
			$(".page3 .pic").attr("src", "img/2.png");
			return 2;
		}
		if(num[4] == 1) {
			$(".page3 .pic").attr("src", "img/1.png");
			return 1;
		}
		$(".page3 .pic").attr("src", "img/0.png");
		return 0;
	}
	
	function getRank(){
		$("#table2 table").html("");
		 $.ajax({
          url: './rank.php',
          type: 'POST',
          data:{"method":"rank","openId":openId},
          dataType: 'json',
          timeout: 10000,
          success: function(result){
		  			$("#myscore").setPosition(144,385).text(result['myscore']);
					$("#myrank").setPosition(227,385).text(result['myrank']);
					
					result = result['data'];
	         		if(result){
						for(var i=0;i<result.length;i++){
							var tr = $("<tr></tr>");
							tr.append($("<td><div id='rank'>"+result[i].rank+"</div></td>"));
							tr.append($("<td><div id='name'>"+result[i].name+"</div></td>"));
							tr.append($("<td><div id='score'>"+result[i].score+"</div></td>"));
							
							
							$("#table2 table").append(tr);
						}
						
					}
	          }
	      }); 
	}
	
	function getLog(){
		$("#table1 table").html("");
		$("#table3 table").html("");
		 $.ajax({
          url: './userlog.php',
          type: 'POST',
          data:{"openId":openId},
          dataType: 'json',
          timeout: 10000,
          success: function(result){
		  		
	         		if(result){
						for(var i=0;i<result.length;i++){
							var tr = $("<tr></tr>");
							var tr2 =  $("<tr></tr>");
							tr.append($("<td><div class='t1 td'>"+(result[i].score>=12?"五元话费":"0元")+"</div></td>"));
							tr.append($("<td><div class='t2 td'>"+result[i].score+"</div></td>"));
							tr.append($("<td><div class='t3 td'>"+(result[i].score>=0?"<img class='kami' src='img/ka.png'/>":"无")+"</div></td>"));
							
							tr2.append($("<td><div class='t2 td'>"+result[i].key+"</div></td>"));
							$("#table1 table").append(tr);
							if(result[i].key != null)
							$("#table3 table").append(tr2);
						}
						$(".td").setHeight(23).setWidth(40);
						$("#table3").setPosition(110,230);
					}
	          }
	      }); 
	}
	
	var slow = true;
	var interval;
	function deviceMotionHandler(){
		//alert(11);
		if(gameTime <=0) return;
		$("#bgaudio")[0].pause();
		slow = false;
		$("#audio")[0].play();
		clearTimeout(interval);
		interval = setTimeout(function(){
			slow = true;
			$("#bgaudio")[0].play();
			 for(var i=0;i<6;i++) {
                                                var index = i+1;
                                         
                                                $(".page2 .s"+index).attr("src", "img/img/s_"+score[i]+".png").removeClass("a"+index);
                                        }
			setTimeout(function(){
				upScore();
			},1000);
		},4000);
	}
	
	//create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15,
		timeout: 50
    });
    // start listening to device motion
    myShakeEvent.start();
	$("#bgaudio")[0].play();
	
	var score = [1,2,3,4,5,6];
	
	
	$(".kami").live(click,function(){
		showPage(7);
	});
	
	
	function showPage(num){
		window.removeEventListener('shake', deviceMotionHandler, false);
		switch (num) {
			case 1:
				$(".hide").hide();
				$(".page1").show();
				
				$(".page1 .back").attr("src", "img/back.png").setWidth(320).setHeight(560);
				setTimeout(function(){
					showPage(2);
				},3000);
				break;
			case 2:
				$(".hide").hide();
				$(".page2").show();
				
				$(".page2 .back").attr("src", "img/p1-back.png").setWidth(320).setHeight(560);
				$(".page2 .txt").attr("src", "img/title_txt.png").setWidth(320).setHeight(45).setPosition(0,250).unbind(click);
				$(".page2 .btn1").attr("src", "img/p1-btn1.png").setWidth(59).setHeight(24).setPosition(22,180).unbind(click);
				$(".page2 .btn2").attr("src", "img/p1-btn2.png").setWidth(59).setHeight(24).setPosition(92,180).unbind(click);
				$(".page2 .btn3").attr("src", "img/p1-btn3.png").setWidth(59).setHeight(24).setPosition(163,180).unbind(click);
				$(".page2 .btn4").attr("src", "img/p1-btn4.png").setWidth(59).setHeight(24).setPosition(232,180).unbind(click);
				$(".page2 .title").attr("src", "img/p1-title.png").setWidth(320).setHeight(44).setPosition(0,205);
				$("#time").setPosition(155,211).text(gameTime);
				upTime();
				
				$(".page2 .wb").attr("src", "img/wb.png").setWidth(320).setHeight(167).setPosition(0,290);
				$(".page2 .wan").attr("src", "img/wan.png").setWidth(320).setHeight(167).setPosition(0,290);
				$(".page2 .s1").attr("src", "img/img/s_1.png").setWidth(45).setHeight(45).setPosition(115,328);
				$(".page2 .s2").attr("src", "img/img/s_6.png").setWidth(45).setHeight(45).setPosition(70,328);
				$(".page2 .s3").attr("src", "img/img/s_1.png").setWidth(45).setHeight(45).setPosition(180,328);
				$(".page2 .s4").attr("src", "img/img/s_4.png").setWidth(45).setHeight(45).setPosition(90,343);
				$(".page2 .s5").attr("src", "img/img/s_2.png").setWidth(45).setHeight(45).setPosition(150,338);
				$(".page2 .s6").attr("src", "img/img/s_3.png").setWidth(45).setHeight(45).setPosition(125,343);
				
				$(".page2 .btn1").bind(click,function(){
					showPage(5);
				});
			
				$(".page2 .btn2").bind(click,function(){
					$("#share").show();
				});

					$("#share").bind(click,function(){
					$("#share").hide();
				});
				$(".page2 .btn3").bind(click,function(){
					getRank();
					$(".rank").show();
				});
				$(".page2 .btn4").bind(click,function(){
					showPage(4);
				});
				$(".page2 .txt").bind(click,function(){
					location.href = "http://mp.weixin.qq.com/s?__biz=MjM5NjY0MDg2Mw==&mid=208386449&idx=1&sn=73f1b40aa4d415cc8d0f08cb6cb1349d#rd";
				});
				
				$(".page2 .r-back").attr("src", "img/p5-back.jpg").setWidth(320).setHeight(560);	
				$(".page2 .btn6").attr("src", "img/p2-btn2.png").setWidth(65).setHeight(27).setPosition(92,480).unbind(click);
				
				$(".page2 .r-btn1").attr("src", "img/p4-btn1.png").setWidth(31).setHeight(32).setPosition(270,5).unbind(click);
				$("#table2").setPosition(80,193).setWidth(170).setHeight(170);
			
				$(".page2 .r-btn1").bind(click,function(){
					
					$(".rank").hide();
				});
				$(".page2 .btn6").bind(click,function(){
					$("#share").show();
				});
					$("#share").bind(click,function(){
					$("#share").hide();
				});
				window.removeEventListener('shake', deviceMotionHandler, false);
				window.addEventListener('shake', deviceMotionHandler, false);
				
				setInterval(function(){
					if(slow) {
						return;
					}
					for(var i=0;i<6;i++) {
						var index = i+1;
						score[i] = Math.ceil( Math.random()*6);
						$(".page2 .s"+index).attr("src", "img/s_"+score[i]+".png").addClass("a"+index);
					}
					
				},100);
				break;
				
			case 3:
				$(".hide").hide();
				$(".page3").show();
				
				$(".page3 .back").attr("src", "img/p2-back.jpg").setWidth(320).setHeight(560);
				$(".page3 .back_ewm").attr("src", "img/ewm.gif").setWidth(100).setHeight(100).setPosition(60,345);
				$(".page3 .back_ewm2").attr("src", "img/ewm2.gif").setWidth(100).setHeight(100).setPosition(168,345);
				$(".page3 .btn1_g").attr("src", "img/gz_001.png").setWidth(46).setHeight(18).setPosition(175,255).unbind(click);
				$(".page3 .btn1").attr("src", "img/p2-btn1.png").setWidth(46).setHeight(18).setPosition(105,255).unbind(click);
				$(".page3 .btn2").attr("src", "img/p2-btn2.png").setWidth(65).setHeight(27).setPosition(92,480).unbind(click);
				$(".page3 .btn3").attr("src", "img/p2-btn3.png").setWidth(65).setHeight(27).setPosition(165,480).unbind(click);
				$("#name").setWidth(100).setHeight(12).setPosition(108,168);
				$("#tel").setWidth(100).setHeight(12).setPosition(108,209);
				$(".page3 .pic").setWidth(150).setHeight(54).setPosition(88,85);
				$(".page3 .popTip").attr("src", "img/tip.png").setWidth(129).setHeight(62).setPosition(102,165).hide();
				
				$("#name").one(click,function(){
					$(".page3 .popTip").show();
					return;
				});
				$(".page3 .popTip").bind(click,function(){
					$(".page3 .popTip").hide();
				});
				
				$(".page3 .btn2").bind(click,function(){
					$("#share").show();
				});
					$("#share").bind(click,function(){
					$("#share").hide();
				});
					
					
				
				$(".page3 .btn1").bind(click,function(){
					sendData();
				});
				
				$(".page3 .btn2").bind(click,function(){
					
				});
				$(".page3 .btn1_g").bind(click,function(){
					showPage(6);
				});
				$(".page3 .btn3").bind(click,function(){
					showPage(2);
				});
			
				break;
				
			case 4:
				$(".hide").hide();
				$(".page4").show();
				
				$(".page4 .back").attr("src", "img/p3-back.jpg").setWidth(320).setHeight(560);	
				$(".page4 .btn1").attr("src", "img/p3-btn1.png").setWidth(93).setHeight(40).setPosition(65,480).unbind(click);
				$(".page4 .btn2").attr("src", "img/p3-btn2.png").setWidth(93).setHeight(40).setPosition(172,480).unbind(click);
				$("#table1").setPosition(85,242).setWidth(195).setHeight(300);
			
				getLog();
				$(".page4 .btn1").bind(click,function(){
					showPage(2);
				});
				$(".page4 .btn2").bind(click,function(){
					location.href= "http://mp.weixin.qq.com/s?__biz=MjM5NjY0MDg2Mw==&mid=208445028&idx=1&sn=4200cac15cf312a961d8a86ecdcfef57#rd";
				});
				break;
				
			case 5:
				$(".hide").hide();
				$(".page5").show();
				
				$(".page5 .back").attr("src", "img/p4-back.png").setWidth(320).setHeight(560);	
				$(".page5 .back_txt").setWidth(140).setHeight(290).setPosition(95,165);	
				$(".page5 .btn1").attr("src", "img/p4-btn1.png").setWidth(31).setHeight(32).setPosition(275,10).unbind(click);
				
			
				$(".page5 .btn1").bind(click,function(){
					showPage(2);
				});
				
				break;
			case 6:
				$(".hide").hide();
				$(".page6").show();
				
				$(".page6 .back").attr("src", "img/p4-back2.jpg").setWidth(320).setHeight(560);	
				$(".page6 .btn1").attr("src", "img/p4-btn1.png").setWidth(31).setHeight(32).setPosition(275,10).unbind(click);
				
			
				$(".page6 .btn1").bind(click,function(){
					showPage(2);
				});
				
				break;
			case 7:
				$(".hide").hide();
				$(".page7").show();

				$(".page7 .back").attr("src", "img/kami.png").setWidth(320).setHeight(560);	
				$(".page7 .btn1").attr("src", "img/p4-btn1.png").setWidth(31).setHeight(32).setPosition(275,10).unbind(click);
				
			
				$(".page7 .btn1").bind(click,function(){
					showPage(4);
				});
				
				break;
			
		}	
		$("#loading").hide();
	}
	

	loadImg(imgurl,showPage);

	
});
