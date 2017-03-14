function APPplay68(){
	return navigator.userAgent.match(/Play68/i);
}
$(function(){
	        
		    var w= document.documentElement.clientWidth;
            var h= document.documentElement.clientHeight;
			var h_paix_w = ($(".h_paix").width());
			
			var h_paix_1_w = $(".h_paix_1").width();
			window.time=300;
			 if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){   
	            $(".ul").height(h);
				$(".h_paix_2").width(480);
				$(".h_paix_2 .moban1").width(480);
				$(".empty_paix .content1").removeClass("center");
				$(".h_paix_3").removeClass("center_box").css("padding-top","100px");
             }
			function resize(){
						var w=document.documentElement.clientWidth;
						var h=document.documentElement.clientHeight;
						$(".h_paix").width(w).height(h);
						$(".h_paix_2").height(h);
						$(".h_paix").css("left",-w+'px');
						
						var  h_paix_1_h = $(".h_paix_1").width();
						
						if(w>960||w>h) {
					
						//$(".footer").css("left","9.375%");
						$(".footer").css("left",-w+h_paix_1_h);
						}else{
							
						//$(".footer").css("left",0);
						$(".footer").css("left","-100%");	
							
						}
			}
			
			resize();
			$(window).resize(function() {
					//resize();
				setTimeout(function(){
					orient3();
					}, time);
					
				
			});
			
			function orient2() {
				   if($(".h_paix").attr('s') == '1') {//$(".h_paix").attr('s') == '1'为1的时候是移动出来的 ，没有1的时候是移动回去的 ，出来的时候的位置重新初始化
							if(Math.abs(window.orientation) == 90) {
									setTimeout(function(){
									 var h_paix_1_w=$(".h_paix_1").width();
									$(".h_paix").css('left',(0));
									$(".footer").css('left',h_paix_1_w);
									}, 1000)
								
							}
							else{
									setTimeout(function(){
									//var ww = window.innerWidth; 
									$(".h_paix").css('left',(0));
									$(".footer").css('left',0);
									}, 1000)
							}
				   }else{
					 
					   
						   if(Math.abs(window.orientation) == 90) {//移动回去的 ，出来的时候的位置重新初始化
										setTimeout(function(){
										var w= document.documentElement.clientWidth;
										 var h= document.documentElement.clientHeight;
										 var h_paix_1_w=$(".h_paix_1").width();
										$(".h_paix").width(w).height(h);
										$(".h_paix").css('left',(-w));
										$(".footer").css('left',-w+h_paix_1_w);
										}, 1000)
										
									}else{
										 
											setTimeout(function(){
											var w=document.documentElement.clientWidth;
											 var h= document.documentElement.clientHeight;
											//var ww = window.innerWidth; 
											//alert(w)
											$(".h_paix").width(w).height(h);
											$(".h_paix").css('left',(-w));
											$(".footer").css('left',-w);
											}, 1000)
									}
						   
						   
						   }
			}
			
			/* 在用户变化屏幕显示方向的时候调用*/
			$(window).bind( 'orientationchange', function(e){
				
				orient2();
			});
			
		
		
		  
		  
		  window.out = function() {
			  $(".h_paix").css("z-index","999");
						if(Math.abs(window.orientation) == 90) {
							//第一次加载点击的时候调用 
							 //  alert(1);
									
								$(".h_paix").animate({ 
										  //'left':'100%'
										  'left' : 0+'px'
								 }, time ).attr('s','1');
								 
								 $(".footer").animate({ 
										  'left':'9.375%',
								 }, time ); 
								 
								 
					    }else if(Math.abs(window.orientation) == 0|| Math.abs(window.orientation)==180){
							
						        $(".h_paix").animate({ 
										  //'left':'0%'
										  'left':'0px'
								 }, time ).attr('s','1');	
								 
								  $(".footer").animate({ 
										  'left':'0%',
								  }, time );
							    
						} else if(w>h) { 
						
						     var h_paix_1_w=$(".h_paix_1").width();
							 
								  $(".h_paix").animate({ 
												  //'left':'100%''left' : (w-960)/2
												  'left' : (w-h_paix_w)/2
										 }, time ).attr('s','1');
										 
										 $(".footer").animate({ 
										       //'left' : (w-960)/2
												  'left': h_paix_1_w+(w-h_paix_w)/2
										 }, time ); 
						
						}else { 
						
						     var h_paix_1_w=$(".h_paix_1").width();
							 
								  $(".h_paix").animate({ 
												  //'left':'100%'
												  'left' : 0+'px'
										 }, time ).attr('s','1');
										 
										 $(".footer").animate({ 
												  'left': 0
										 }, time ); 
						
						}
		  
		  }
		  window.app_out = function() {
			  
			  $(".h_paix").animate({ 
							 //'left':'100%'
							 'left' : 0+'px'
				}, time ).attr('s','1');
				 
			   $(".footer").animate({ 
				   'left':'9.375%',
				 }, time ); 
							 
		 };
		  
		  $(".h_paix_3").click(function(){
						back();
						$('#s0').css('visibility','visible');
						$('#horizontalMenu').css('visibility','hidden');
						setTimeout(function(){
							var w=document.documentElement.clientWidth;
							var h=document.documentElement.clientHeight;
							$(".h_paix").width(w).height(h);
							$(".h_paix_2").height(h);
						}, 300);
		  })
		  
		  function back() {
		  	var ww = window.innerWidth;
						$(".h_paix").animate({ 
										  'left' : (-ww)+'px'
								 }, time ).attr('s','undefined');
								 
						
						if(window.orientation == 90) {	

							 $(".footer").animate({ 
										  'left':'-90.625%',
							 }, time );
							 
							}else{
							
							 $(".footer").animate({ 
										  'left':'-100%',
							 }, time );
							 
		                 	}
		  
		  }	
    	//横屏菜单，获取好友排行榜
    	window.horizontalMenuForFriend = function() {
            if (ISLOADING) return;
            showLoading();
    		$.ajax({
    			url: '/index.php?r=play/HtmlRanking',
    			type:'POST',
    			data: {gameid:GAMEID,leixing:1,flag:1},
    			success: function(data) {
    				hideLoading();
					$('.empty').html(data);
					if ($('#footer_content').length > 0) {
						var html = $('#footer_content').html();
						if ($(html).eq(0).find('img').length > 0) {
							html = html.replace('<img src="/resources/images/paix/bg_jinhuizhang.png" width="56" height="88">','1');
							html = html.replace('<img src="/resources/images/paix/bg_yinhuizhang.png" width="56" height="88">','2');
							html = html.replace('<img src="/resources/images/paix/bg_tonghuizhang.png" width="56" height="88">','3');
						}
						$('.footer .content1').attr('onclick',$('#footer_content').attr('onclick'));
						$('.footer .content1').html(html);
						$(".footer .content1").show();
					} else {
						$(".footer .content1").hide();
					}
					if (IS_HORIZONTAL && APPplay68()) {
						app_out();
					} else {
						out();
					}
					
					$('#s0').css('visibility','hidden');
					$('#horizontalMenu').css('visibility','visible');
    				 
    			},
        		complete: function() {
           			hideLoading();
           		}
    		  });
        }
    	//横屏菜单，获取全球排行榜
    	window.horizontalMenuForWorld = function() {
            if (ISLOADING) return;
            showLoading();
    		$.ajax({
    			url: '/index.php?r=play/HtmlRanking',
    			type:'POST',
    			data: {gameid:GAMEID,leixing:2,flag:1},
    			success: function(data) {
    				hideLoading();
					$('.empty').html(data);
					if ($('#footer_content').length > 0) {
						var html = $('#footer_content').html();
						if ($(html).eq(0).find('img').length > 0) {
							html = html.replace('<img src="/resources/images/paix/bg_jinhuizhang.png" width="56" height="88">','1');
							html = html.replace('<img src="/resources/images/paix/bg_yinhuizhang.png" width="56" height="88">','2');
							html = html.replace('<img src="/resources/images/paix/bg_tonghuizhang.png" width="56" height="88">','3');
						} else if ($('#footer_content').index() > 100) {
							$('#footer_content').css('display','none');
						}
						$('.footer .content1').attr('onclick',$('#footer_content').attr('onclick'));
						$('.footer .content1').html(html);
						$(".footer .content1").show();
					} else {
						$(".footer .content1").hide();
					}
					if (IS_HORIZONTAL && APPplay68()) {
						app_out();
					} else {
						out();
					}
					$('#s0').css('visibility','hidden');
					$('#horizontalMenu').css('visibility','visible');
    				 
    			},
        		complete: function() {
           			hideLoading();
           		}
    		  });
        }
    	//横屏菜单，获取社区列表
    	window.horizontalMenuForCommentList = function() {
            if (ISLOADING) return;
    	 	showLoading();
       		$.ajax({
       			url: '/index.php?r=play/GetCommentList',
       			type:'POST',
       			data: {},
       			success: function(data) {
       				hideLoading();
					$('.empty').html(data);
					$(".footer .content1").hide();
					$('#horizontalMenu').css('visibility','visible');
       			 },
       			complete: function() {
       				hideLoading();
       			}
       		  });
      }
    	//横屏菜单，获取信息列表
    	$(document).off('click','.myxinxi');
		 $(document).on('click','.myxinxi',function(event){
			 horizontalMenuForMessageList();
		})
		 //点击排行榜
		 $(document).off('click','.mypaix');
		 $(document).on('click','.mypaix',function(event){
			  event.stopPropagation();
			if (isWeixin()) {
				horizontalMenuForFriend();
			}  else {
				horizontalMenuForWorld();
			}
		 });
		  //点击社区
		  $(document).off('click','.myshequ');
		  $(document).on('click','.myshequ',function(event){
			  event.stopPropagation();
			  horizontalMenuForCommentList();	 
		  });
		  //横屏菜单，载入更多回复
		  window.horizontalMenuForLoadReply = function(that,id) {
			   id = id || 0;
			   showLoading();
			   $.ajax({
		   			url: '/index.php?r=play/GetReplyList',
		   			type:'POST',
		   			data: {id:id},
		   			success: function(data) {
		   				hideLoading();
			   			$(that).parent().siblings('.contenta_5').remove();
		   				$(that).parent().before(data);
		   				$(that).parent().remove();
		   			 }
		   		  });
		   }
		  //横屏菜单，点赞
		  window.horizontalMenuForShowZan = function(that,id) {
			   id = id || 0;
			   showLoading();
			   $.ajax({
		   			url: '/index.php?r=play/IsZan',
		   			type:'POST',
		   			data: {id:id},
		   			success: function(data) {
		   				hideLoading();
		   				$(that).siblings('.shuzi').html(data);
		   				$(that).removeAttr('onclick');
		   			 }
		   		  });
		   }
		  //点击评论
		  $(document).off('click','#horizontalMenu .mypinglun');
		  $(document).on('click','#horizontalMenu .mypinglun',function(event){
		    event.stopPropagation();
		    horizontalMenuForComment();
		});
	   //横屏菜单，信息列表
	   window.horizontalMenuForMessageList = function() {
		    if (ISLOADING) return;
		 	showLoading();
	   		$.ajax({
	   			url: '/index.php?r=Mymessage/MessageList',
	   			type:'POST',
	   			data: {},
	   			success: function(data) {
	   				hideLoading();
	   				$('.empty').html(data);
					$(".footer .content1").hide();
					$(".xinxi").attr('data-a','jiazai');
					$('#horizontalMenu').css('visibility','visible');
	   			 },
	    		complete: function() {
	       				hideLoading();
	       		}
	   		  });
	  }
	   //横屏菜单，评论
	  window.horizontalMenuForComment = function() {
		   showLoading();
	   		$.ajax({
	   			url: '/index.php?r=play/Reply',
	   			type:'GET',
	   			data: {},
	   			success: function(data) {
	   				hideLoading();
	   				$('.empty').html(data);
					$(".footer .content1").hide();
					$('#horizontalMenu').css('visibility','visible');
	   			 },
	    		complete: function() {
	       				hideLoading();
	       		}
	   		  });
	   }
	  //横屏菜单，回复
	  window.horizontalMenuForReply = function(that,reply_id) {
		   reply_id = reply_id || 0;
		   showLoading();
	   		$.ajax({
	   			url: '/index.php?r=play/Reply',
	   			type:'GET',
	   			data: {reply_id:reply_id},
	   			success: function(data) {
	   				hideLoading();
	   				$('.empty').html(data);
					$(".footer .content1").hide();
					$('#horizontalMenu').css('visibility','visible');
	   			 },
	    		complete: function() {
	       				hideLoading();
	       		}
	   		  });
	   }
	
	 window.orient3 =  function () {
		   
		   if($(".h_paix").attr('s') == '1') {
			   
			   var w= document.documentElement.clientWidth;
		       var h= document.documentElement.clientHeight;
			   $(".h_paix").width(w).height(h);
				$(".h_paix_2").height(h);
			    var h_paix_w = ($(".h_paix").width());
            	var h_paix_1_w = $(".h_paix_1").width();
		        var h_paix_1_w=$(".h_paix_1").width();
				
				  setTimeout(function(){
							$(".h_paix").css('left',(w-h_paix_w)/2);
							$(".footer").css('left',(w-h_paix_w)/2+h_paix_1_w);
							}, 30)
				if(w<h){
					
				  setTimeout(function(){
							$(".h_paix").css('left',(w-h_paix_w)/2);
							$(".footer").css({'left':(w-h_paix_w)/2});
							}, 30)
						
					
					}	
					
		   }
	}
	  //横屏菜单，红点
	  window.horizontalMenuForRedPoint = function () {
		  $.ajax({
			   type: "POST",
			   url: "/index.php?r=Mymessage/check_mess",
			   data: "",
			   success: function(msg){
			    if(msg == 1){
				  $("#horizontalMenu .myxinxi .hongdian1").css('display','block');
			     } else {
			    	 $("#horizontalMenu .myxinxi .hongdian1").css('display','none');
			     }
			   }
			 });
	  }
	  //横屏菜单，旋转
	  window.turn = function (flag) {
		if(APPplay68()){  
		  
		}else{ 
			var f = flag || false;
			if (f == true &&( Math.abs(window.orientation) == 0|| Math.abs(window.orientation)==180) ) {
				$("#s0").css('top',0).css('right','30px').css('left','auto').css('bottom','auto').css({"-webkit-transform":"rotate(90deg)" } );
			}else if(f == true){
				$("#s0").css('top',50).css('left',0).css('right','auto').css('bottom','auto').css({"-webkit-transform":"rotate(0deg)" }) ;
			}
		}
	}
});
