/*
 * 全站公共脚本,基于jquery-1.9.1脚本库
 */
$(function() {
//阻止默认行为
	$(document).on("touchstart touchmove mousedown mousemove",function(event){
		var tag = '';
		var thistag = event.target.tagName;
		if ( tag != "A" && tag != "INPUT" && tag != "TEXTAREA" && tag != "SELECT" && thistag != "A" && thistag != "INPUT" && thistag != "TEXTAREA" && thistag != "SELECT"  )
		{
			event.preventDefault();
		}
	})

//微信分辨率纠错
	function is_weixn()
	{
	    var ua = navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i)=="micromessenger") {
	        return true;
	    } else {
	        return false;
	    }
	}
	function isIos()
	{
       var userAgentInfo = navigator.userAgent;
       var Agents = new Array("iPhone");
       var flag = false;
       for (var v = 0; v < Agents.length; v++) {
           if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
       }
       return flag;
	}
	var fullHeight = document.documentElement.clientHeight;
	var fullWidth = $("body").width();
	if ( is_weixn() == true && isIos() == true )
	{

		if ( fullHeight >= 1008 && fullHeight <= 1040 && window.screen.width == 320 )
		{
			fullHeight = 1008;//1008---1008*(640/640)//for ios7.0&&iphone5
		}
		if ( fullHeight >= 1008 && fullHeight < 1020 )
		{
			fullHeight = 1008;//1008---1008*(640/640)
		}
		else if ( fullHeight >= 1020 && fullHeight < 1035 )
		{
			fullHeight = 1029;//1029.12---1206*(640/750)
		}
		else if ( fullHeight >= 1035 )
		{
			fullHeight = 1039;//1038.84058---1344*(640/828)
		}
		else if ( fullHeight < 1008 )
		{
			fullHeight = 832;//832---832*(640/640)
		}
	}
	$("html,body,body>.page").height(fullHeight);

	//初始加载分屏动画
		var page = 0;
		mySwiper = $("#mySwiper").swiper({
			mode:"vertical",
			loop: false,
			noSwiping:true,
			noSwipingNext:true,
			noSwipingPrev:true,
			queueEndCallbacks:true,
			moveStartThreshold:10,
		    onSlideChangeEnd : function(){
		    	if ( page != mySwiper.activeIndex )
		    	{
			    	remove($("#mySwiper>.swiper-wrapper>.swiper-slide:eq("+mySwiper.previousIndex+")"));
			    	page = mySwiper.activeIndex;
					animates($(mySwiper.activeSlide()));
		    	}
		    }
		})
    //设置html
		var html = new Array();
	//移除动画后的效果
		function remove(slide)
		{
			slide.html(html[page]);
		}
	//判断动画类型
		function animates(slide)
		{
			var type = parseInt(slide.attr("data-page"));
			switch ( type )
			{
				case 1:
					page1(slide);
					break;
			}
		}

	$("body").append("<div class='page hidden' id='full'></div>");

	//第一屏动画
		function page1(slide)
		{
			document.getElementById("fa").play();

			var timeid2 = setInterval(function(){
				document.getElementById("fa").play();
			},1500);

			$(".p1-10 img").attr("src","images/uberxzaihkong.gif");
			$(".p1-2").animate({top:parseInt($(".p1-2").css("top")) - 20 +'px', opacity:'1'},300);
			$(".p1-3").delay(1500).animate({top:parseInt($(".p1-3").css("top")) - 20 +'px', opacity:'1'},300);
			$(".p1-4").delay(3000).animate({top:parseInt($(".p1-4").css("top")) - 20 +'px', opacity:'1'},300);
			$(".p1-5").delay(4500).animate({top:parseInt($(".p1-5").css("top")) - 20 +'px', opacity:'1'},300);
			$(".p1-6").delay(6000).animate({top:parseInt($(".p1-6").css("top")) - 20 +'px', opacity:'1'},300);
			$(".p1-7").delay(7500).animate({top:parseInt($(".p1-7").css("top")) - 20 +'px', opacity:'1'},300);
			$(".p1-8").delay(9000).animate({top:parseInt($(".p1-8").css("top")) - 20 +'px', opacity:'1'},300,function(){
				window.clearInterval(timeid2);
			});
			$(".p1-9").delay(10000).fadeIn();

			$(document).on("tap",".p1-9", function(event){
				document.getElementById("bgmusic").play();
				$(".temp1").fadeOut(1);
				$(".p1-10 img").attr("src","images/uberxzaih8-1.gif");
				$(".p1-10").fadeIn(1).delay(4500).animate({top:'1138px'},1000,function(){
					$(".p1-10").css({opacity:'0'});
				});
				$(".y1").delay(4500).animate({top:'350px'},1000);
				$(".y2").delay(4500).animate({top:'0px'},1000);
				$(".y3").delay(4500).animate({top:'80px'},1000);
				$(".y4").delay(4500).animate({top:'0px'},1000);
				$(".y5").delay(4500).animate({top:'400px'},1000);
				$(".temp4").delay(4500).animate({top:'0px'},1000,function(){

					$(".p2-1").animate({width:'516px'},500,function(){
						$(".p2-21").animate({width:'443px'},400).delay(2000).fadeOut(100);
						$(".p2-22").delay(2500).animate({width:'443px'},500).delay(2000).fadeOut(100);
						$(".p2-23").delay(5000).animate({width:'443px'},500).delay(2000).fadeOut(100);
						$(".p2-24").delay(7500).animate({width:'443px'},500).delay(2000).fadeOut(100);
						$(".p2-25").delay(10000).animate({width:'443px'},500).delay(2000).fadeOut(100);
						$(".p2-26").delay(12500).animate({width:'443px'},500).delay(2000).fadeOut(100);
						$(".p2-27").delay(15000).animate({width:'443px'},500).delay(2000).fadeOut(100);
						$(".p2-28").delay(17500).animate({width:'443px'},500).delay(1000).fadeIn(100,function(){
							$(".temp4").delay(1000).animate({top:'-1138px'},1000);
							$(".temp3").delay(1000).animate({top:'0px'},1000);
						});
					});

				});
			});

			$(document).on("tap",".p2-4",function(event){
				ings.pause;
				ings.src = 'images/mp3-uberxzaih-an2.mp3';
				ings.play();
				$(".temp5").css({background:'#ea1b56'});
				$(this).animate({top: parseInt($(this).css("top")) + 10 + 'px'},50);
				$(this).delay(700).animate({top: parseInt($(this).css("top")) - 10 + 'px'},1);
				types = txts1;
				guan = true;
				sdt = 'images/uberxzaihganqing.png';
				$(".temp2").delay(700).fadeOut(10,function(){
					bgmusic.currentTime = 0;
					bgmusic.play();
					$(".temp5").fadeIn(100,function(){
						$(".p3-2").delay(700).animate({height:'549px'},1000,function(){
							showgif(stmp);
						});
					});
				});
			})

			$(document).on("tap",".p2-5",function(event){
				ings.pause;
				ings.src = 'images/mp3-uberxzaih-an2.mp3';
				ings.play();
				$(".temp5").css({background:'#169be0'});
				$(this).animate({top: parseInt($(this).css("top")) + 10 + 'px'},50);
				$(this).delay(700).animate({top: parseInt($(this).css("top")) - 10 + 'px'},1);
				types = txts2;
				guan = true;
				sdt = 'images/uberxzaihzhichang.png';
				$(".temp2").delay(700).fadeOut(10,function(){
					bgmusic.currentTime = 0;
					bgmusic.play();
					$(".temp5").fadeIn(100,function(){
						$(".p3-2").delay(700).animate({height:'549px'},1000,function(){
							showgif(stmp);
						});
					});
				});
			})

			$(document).on("tap",".p2-6",function(event){
				ings.pause;
				ings.src = 'images/mp3-uberxzaih-an2.mp3';
				ings.play();
				$(".temp5").css({background:'#fedd02'});
				$(this).animate({top: parseInt($(this).css("top")) + 10 + 'px'},50);
				$(this).delay(700).animate({top: parseInt($(this).css("top")) - 10 + 'px'},1);
				types = txts3;
				guan = true;
				sdt = 'images/uberxzaihchuangye.png';
				$(".temp2").delay(700).fadeOut(10,function(){
					bgmusic.currentTime = 0;
					bgmusic.play();
					$(".temp5").fadeIn(100,function(){
						$(".p3-2").delay(700).animate({height:'549px'},1000,function(){
							showgif(stmp);
						});
					});
				});
			})

			$(document).on("tap",".p7-4",function(event){
				$(".meng").fadeIn();
			})

			$(document).on("tap",".p7-5",function(event){
				$(".temp10").fadeOut(10);
				$(".temp9").fadeOut(10);
				$(".temp8").fadeOut(10);
				$(".temp7").fadeOut(10);
				$(".temp6").fadeOut(10);
				$(".temp5").fadeOut(10);
				$(".p4-6").fadeOut(10);
				$(".p4-7").fadeOut(10);
				$(".p3-3 img").attr("src","");
				$(".p3-4 img").attr("src","");
				$(".p3-3").css({top:'1040px'});
				$(".p3-4").css({top:'0px'});

				$(".content").html("");
				$(".p3-2").css({height:'15px'});
				$(".p3-3 img").attr("src","");
				stmp = 1;

				$(".jinnang img").attr("src","images/uberxzaihkong.gif");
				$(".shangdi img").attr("src","images/uberxzaihkong.gif");
				//$(".p4-11 img").attr("src","images/kong.png");
				$(".p4-10 img").attr("src","images/uberxzaihkong.gif");
				//$(".shangdi").fadeOut(1);
				//$(".jinnang").fadeOut(1);
				$(".fy").fadeOut(1);
				$(".sdtitle").fadeIn(1);
				$(".ends img").attr("src","");
				$(".ends").fadeOut(1);
				$(".p4-9").css({height:"15px"});
				ishua = false;
				hua2 = false;
				hua3 = false;
				$(".p4-12").fadeOut();
				$(".che1").css({top:'950px', 'transform':'rotate(88deg)', '-webkit-transform':'rotate(88deg)', left:'-255px'});
				$(".che2").css({top:'400px', left:'640px'});

				$(".temp2").fadeIn();
			})

			$(document).on("tap",".meng",function(event){
				$(".meng").fadeOut();
			})

			$(document).on("tap",".p4-7, .p4-6",function(event){

				document.getElementById("bgmusic").pause();
				ings.pause();
				ings.src = 'images/mp3-uberxzaih-ends.mp3';
				ings.play();

				$(".temp10").fadeIn();
				$(".temp7").fadeOut(1);
				$(".p4-10 img").attr("src",types[1].ed);
				$(".p4-11 img").attr("src",'images/uberxzaih23.gif');
				$(".p4-10").fadeIn();
				$(".p4-11").fadeIn();
				$(".s2").fadeIn();
				hua2 = true;
				showendtxt();
			})
		}

		function showendtxt(){
			switch(types[1].lx){
				case '1':
					$(".a1").fadeIn();
					$(".a2").delay(500).fadeIn();
					$(".a3").delay(1000).fadeIn();
					$(".a4").delay(1500).fadeIn();
					break;
				case '2':
					$(".b1").fadeIn();
					$(".b2").delay(500).fadeIn();
					$(".b3").delay(1000).fadeIn();
					$(".b4").delay(1500).fadeIn();
					break;
				case '3':
					$(".c1").fadeIn();
					$(".c2").delay(500).fadeIn();
					$(".c3").delay(1000).fadeIn();
					$(".c4").delay(1500).fadeIn();
					break;
			}
		}

		function showgif(p){
			if(guan){
				guan = false;
				$(".p3-3 img").attr("src",types[p].g);
				$(".p3-4").animate({top:'-1040px'},1000);
				$(".p3-3").animate({top:'0px'},1000,function(){
					$(".p3-4 img").attr("src","");
					$(".p3-4").css({top:'1040px'});
				});
			}else{
				guan = true;
				$(".p3-4 img").attr("src",types[p].g);
				$(".p3-3").animate({top:'-1040px'},1000);
				$(".p3-4").animate({top:'0px'},1000,function(){
					$(".p3-3 img").attr("src","");
					$(".p3-3").css({top:'1040px'});
				});
			}

			var temp_str = types[p].w;
			var newtxt = [];
			newtxt = temp_str.split("");
			var num = 0;
			var timeid = setInterval(function(){

				var tmp = $(".content").html();
				tmp = tmp.replace('|',"");
				if(newtxt[num] == '-'){
					$(".content").html(tmp + "<br>");
				}else{
					$(".content").html(tmp + newtxt[num]);
				}
				num += 1;
				if(num > newtxt.length){

					if(p == types[p].n){
						$(".content").delay(1000).html(tmp  + weiba);
					}else{
						$(".content").html(tmp + biao + "<br><br>");
						$(".guangbiao").fadeOut(1);
						$(".guangbiao:last").fadeIn();
					}
					window.clearInterval(timeid);
					$(".s1").fadeIn(200,function(){
						ishua = true;
					});
				}
			},150);

			stmp += 1;
		}

		document.getElementById("temp5").addEventListener('touchstart',touchstart3);
		document.getElementById("temp5").addEventListener('touchmove',touchmove3);
		document.getElementById("temp5").addEventListener('touchend',function(){
			return false;
		});

		var tx3,ty3,x3,y3;
		function touchstart3(e){
			x3=e.touches[0].pageX;
			y3=e.touches[0].pageY;
		}
		function touchmove3(e){
			var m3=e.touches[0].pageX-x3;
			var n3=e.touches[0].pageY-y3;

			var bu = n3;
				if(ishua){
					ishua = false;
					$(".s1").fadeOut();
					if(stmp >= types.length){
						ends();
					}else{
						showgif(stmp);
					}
				}

		}


		document.getElementById("temp10").addEventListener('touchstart',touchstart);
		document.getElementById("temp10").addEventListener('touchmove',touchmove);
		document.getElementById("temp10").addEventListener('touchend',function(){
			return false;
		});

		var tx,ty,x,y;
		function touchstart(e){
			x=e.touches[0].pageX;
			y=e.touches[0].pageY;
		}
		function touchmove(e){
			var m=e.touches[0].pageX-x;
			var n=e.touches[0].pageY-y;

			if(hua2){
				hua2= false;
				$(".wz").fadeOut(1);
				$(".p4-10").fadeOut(1);
				$(".p4-11 img").attr("src","images/uberxzaihjia1.png");
				$(".fy").fadeIn();
				$(".p4-12").delay(1000).fadeIn(200,function(){
					ings.pause();
					bgmusic.currentTime = 0;
					bgmusic.play();
					hua3 = true;
				});
			}
			if(hua3){
				hua3 = false;
				$(".s2").fadeOut(1);
				$(".s3").fadeIn();
				$(".temp8").fadeIn(100);
				$(".temp7").fadeOut(1);
			}
		}

		document.getElementById("temp8").addEventListener('touchstart',touchstart2);
		document.getElementById("temp8").addEventListener('touchmove',touchmove2);
		document.getElementById("temp8").addEventListener('touchend',function(){
			return false;
		});

		var x2,y2;
		function touchstart2(e){
			x2=e.touches[0].pageX;
			y2=e.touches[0].pageY;
		}
		function touchmove2(e){
			var m2=e.touches[0].pageX-x2
			var n2=e.touches[0].pageY-y2;

			var bu = n2;
				$(".s3").fadeOut(1);
				$(".temp9").fadeIn(500,function(){
					$(".che1").animate({top:'400px',left:'640px'},3000,function(){
						$(".che1").css({'transform':'rotate(0deg)', '-webkit-transform':'rotate(0deg)'});
						$(".che2").animate({top:'30px', left:'400px'},1000);
					});
					$(".temp8").fadeOut(100);
				});
		}

		function setjingyan(){
			switch(types[1].lx){
				case '1':
					var es1 = 'images/uberxzaihan1.png';
					var es2 = 'images/uberxzaihan2.png';
					var es3 = 'images/uberxzaihan3.png';
					break;
				case '2':
					var es1 = 'images/uberxzaihbn1.png';
					var es2 = 'images/uberxzaihbn2.png';
					var es3 = 'images/uberxzaihbn3.png';
					break;
				case '3':
					var es1 = 'images/uberxzaihcn1.png';
					var es2 = 'images/uberxzaihcn2.png';
					var es3 = 'images/uberxzaihcn3.png';
					break;
			}

			$(".es1 img").attr("src",es1);
			$(".es2 img").attr("src",es2);
			$(".es3 img").attr("src",es3);
			$(".es1").fadeIn();
			$(".es2").delay(500).fadeIn();
			$(".es3").delay(1000).fadeIn();
			$(".es4").delay(1500).fadeIn();

			$(".p4-6").delay(2000).fadeIn();
			$(".p4-7").delay(2000).fadeIn();
		}

		function ends(){
			$(".temp5").fadeOut(1);
			$(".temp6").fadeIn(100,function(){
				$(".shangdi img").attr("src","images/uberxzaih9.gif");
				$(".shangdi").fadeIn(1,function(){
					$(".sdtitle img").attr("src",sdt);
					document.getElementById("bgmusic").pause();
					ings.pause();
					setTimeout(function(){
						switch(types[1].lx){
							case '1':
								ings.src= 'audio/mp3-uberxzaih-ganqing2.mp3';
								//document.getElementById("ganqing").play();
								break;
							case '2':
								ings.src= 'audio/mp3-uberxzaih-zhichang2.mp3';
								//document.getElementById("zhichang").play();
								break;
							case '3':
								ings.src= 'audio/mp3-uberxzaih-chuangye2.mp3';
								//document.getElementById("shiye").play();
								break;
						}
						ings.play();
					},1000);
					$(".sdtitle").delay(3800).animate({width:'640px'},500);
					$(".shangdi").delay(5800).fadeIn(1,function(){
						bgmusic.currentTime = 0;
						bgmusic.play();
						$(".sdtitle").css({width:'0px', display:'none'});
						$(".jinnang img").attr("src","images/uberxzaih13.gif");
						$(".jinnang").fadeIn(10,function(){
							$(".temp7").delay(3500).fadeIn(100,function(){
								$(".temp6").fadeOut();
								$(".p4-9").delay(100).animate({height:'549px'},1000,function(){
									setjingyan();
								});
							});
						});
					});
				});
			});
		}

	//加载成功
		window.onload = function()
		{
			var k = 1;
			pai = setInterval(function(){
				$(".pai1").fadeOut(1);
				$(".pai2").fadeOut(1);
				k += 1;
				if(k > 2){
					k = 1;
				}
				$(".pai" + k).fadeIn(1);
			},1500);
			loadImage();
		}

			var downImg = 0;//已下载数量
			var percent = 0;//百分比
			var length = 0;
			function loadImage() {
				var img = $("body").find("img[loadsrc]");//图片数组
				length = img.length;//图片数量
				for ( var i=0;i<length;i++ )
				{
					var imgs = new Image();
					var imgDiv = img.eq(i);
					var imgsrc = imgDiv.attr("loadsrc");
					imgs.src = imgsrc;
					if(imgs.complete)
					{
						imgDiv.attr("src",imgsrc).removeAttr("loadsrc");//有缓存
				    	imgDown();
					}
					else
					{
						imgDiv.attr("src",imgsrc).load(function(){
							$(this).removeAttr("loadsrc");//无缓存
							imgDown();
						})
					}
				}

			}

			function imgDown()
			{
				downImg ++;
				percent = parseInt(100*downImg/length);
				$(".progress").html(percent + '%');
				if ( percent == 90 )
				{
					loadend();
				}
			}
		function loadend(){

			$(".loading-wrapper").remove();
			$("#mySwiper").css({"visibility":"visible",y:fullHeight});
			$("#mySwiper").transition({y:0,complete:function(){
				clearInterval(pai);
				//document.getElementById("bgmusic").play();
				animates($("#mySwiper .swiper-slide:first"));
				//mySwiper.swipeTo(8,600);
			}},100);
		}

		//背景音乐开关
		$(".mc").on("tap",function(){
			if ( $(this).hasClass("play") )
			{
				$(this).removeClass("play");
				document.getElementById("bgmusic").pause();
			}
			else
			{
				$(this).addClass("play");
				document.getElementById("bgmusic").play();
			}
		})

})
