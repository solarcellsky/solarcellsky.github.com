//发送体力
function send_muscle(){
	showLoading();
	var fri_num = 0;
	var str="";
	//str+=" <div class='content_xinxi'>";
    //str+="<span class='left'>共<span id='fri_num'>0</span>个好友</span>";
    //str+="</div>";                   
	$.ajax({
    type: "POST",
    url : "?r=Everydaygame/getfriendinfo/gameid/"+GAMEID,
   dataType : 'json',
   async:false,
   success: function(data){
   	
    fri_num=data.length;
    for(var i=0;i<data.length;i++){	                                                                          
    str+="<div class='content1' id='songtili_"+data[i].id+"' >";                                                                                         
    str+="<div class='content1_a shuzi'>";
    num=i+1;   
    str+="<span class='yuanjiao'> "+num+" </span>";                                                                                                                
    str+="</div>";                                                                                                          
    str+="<div class='content1_b'>";
     if(data[i].headimg != null && data[i].headimg != ''){
            if(!/^http|^[/]/i.test(data[i].headimg)){
             data[i].headimg=data[i].headimg.replace(/^/,'/');
            }
           str+="<li><img src='"+data[i].headimg+"' width='92' height='92'></li>";
         }else{                                                                                                         
            str+="<li><img src='/resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";
         }                                                                                                                    
    //str+="<li><img src='/resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";                                                                                                                 
    str+="<div class='content1_b_1'>"; 
     var span = '';
        if (data[i].sex == 1) {
          span = '<span><img src="/resources/images/meiribisai/boy.png" width="32" height="31"></span>';
        } else if (data[i].sex == 2) {
          span = '<span><img src="/resources/images/meiribisai/girl.png" width="32" height="31"></span>';
        } else {
          span = '<span><img src="/resources/images/meiribisai/nannu.png" width="32" height="31"></span>';
        }
         if(data[i].nickname != null && data[i].nickname != ''){             
        //排行名称截取字符串
        if(getBytesCount(data[i].nickname)>18){data[i].nickname= data[i].nickname.substr(0,9)+'...';}                                                                                 
        str+="<p class='mingc '>"+data[i].nickname+span+"</p>";
        }else{
        str+="<p class='mingc '>68微游戏玩家"+span+"</p>";  
        }     
       
    //str+="<p class='mingc'>火爆浪子</p>";                                                                                                                       
    //str+="<p class='guangshu'>送你一个体力(剩3天)</p>";                                                                                                           
    str+="</div>";                                                                     
    str+="<p class='clear'></p>";                                                                                                            
    str+="</div>";                                                                                                          
    str+="<div class='content1_c'>";
    if(data[i].is_songtili == 1){                                                                                                           
    str+="<img src='/resources/images/meiribisai/sent-power2.png' width='117' height='54' onclick='songtili("+data[i].id+")' id='songtili_icon_"+data[i].id+"'>";   
    }                                                    
    str+="</div>";                                                          
    str+="<p class='clear'></p>";                                                                                                          
    str+="</div>";
	 }
   }
  });
	
	
	
	
   $("#meirigame").html(str);
   $("#content_xinxi").html("<span class='left'>共<span id='fri_num'>"+fri_num+"</span>个好友</span><span class='right'><img src='/resources/images/meiribisai/friend.png' width='56' height='41' onclick='show_share()'> </span>");
   $("#meiri_kaishi").html("<img src='/resources/images/meiribisai/BACK.png' width='606' height='70' onclick='fanhuibisai()'>");
   hideLoading();
    var yuanjiao_width= $(".meiripaix .paix .yuanjiao").innerWidth();
    $(".meiripaix .paix .yuanjiao").innerHeight(yuanjiao_width);
     
     $(window).resize(function() {
       var yuanjiao_width= $(".meiripaix .paix .yuanjiao").innerWidth();
    $(".meiripaix .paix .yuanjiao").innerHeight(yuanjiao_width);
     
        });
}

//返回比赛
 function fanhuibisai(){
 	$("#content_xinxi").html("");
 	meiri_paihang();
}

//送体力
function songtili(id){
	$("#songtili_icon_"+id).remove();
	
	$.ajax({
   type: "POST",
   url: "?r=Everydaygame/jilumuscle",
   data: "id="+id+"&gameid="+GAMEID,
   success: function(msg){
   		
   }
});
	 gettilizongshu();
}

//查看体力信封内容
function muscle_mail(){
 	showLoading();
	var fri_num = 0;
	var mess="<span class='left'>共0条信息</span>";
	$("#content_xinxi").html(mess);
	var str="";
               
	$.ajax({
    type: "POST",
    url : "?r=Everydaygame/getmusclemailinfo/gameid/"+GAMEID,
   dataType : 'json',
   async:false,
   success: function(data){
    fri_num=data.length;
    for(var i=0;i<data.length;i++){	                                                                          
    str+="<div class='content1' id='shoutili_"+data[i].id+"' >";                                                                                         
    str+="<div class='content1_a shuzi'>";
    num=i+1;   
    str+="<span class='yuanjiao'> "+num+" </span>";                                                                                                                
    str+="</div>";                                                                                                          
    str+="<div class='content1_b'>";
     if(data[i].headimg != null && data[i].headimg != ''){
            if(!/^http|^[/]/i.test(data[i].headimg)){
             data[i].headimg=data[i].headimg.replace(/^/,'/');
            }
           str+="<li><img src='"+data[i].headimg+"' width='92' height='92'></li>";
         }else{                                                                                                         
            str+="<li><img src='/resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";
         }                                                                                                                    
    //str+="<li><img src='/resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";                                                                                                                 
    str+="<div class='content1_b_1'>"; 
     var span = '';
        if (data[i].sex == 1) {
          span = '<span><img src="/resources/images/meiribisai/boy.png" width="32" height="31"></span>';
        } else if (data[i].sex == 2) {
          span = '<span><img src="/resources/images/meiribisai/girl.png" width="32" height="31"></span>';
        } else {
          span = '<span><img src="/resources/images/meiribisai/nannu.png" width="32" height="31"></span>';
        }
         if(data[i].nickname != null && data[i].nickname != ''){             
        //排行名称截取字符串
        if(getBytesCount(data[i].nickname)>18){data[i].nickname= data[i].nickname.substr(0,9)+'...';}                                                                                 
        str+="<p class='mingc '>"+data[i].nickname+span+"</p>";
        }else{
        str+="<p class='mingc '>68微游戏玩家"+span+"</p>";  
        }     
       
    //str+="<p class='mingc'>火爆浪子</p>";                                                                                                                       
    str+="<p class='guangshu'>送给你一个体力(剩"+data[i].muscle_time+"天)</p>";                                                                                                           
    str+="</div>";                                                                     
    str+="<p class='clear'></p>";                                                                                                            
    str+="</div>";                                                                                                          
    str+="<div class='content1_c'>";                                                                                                           
    str+="<img src='/resources/images/meiribisai/sent-power3.png' width='117' height='54' onclick='shoutili("+data[i].id+","+data[i].muscle_create_time+")'>";                                                       
    str+="</div>";                                                          
    str+="<p class='clear'></p>";                                                                                                          
    str+="</div>";
	 }
   }
  });
	
	
	
	
   $("#meirigame").html(str);
   $("#content_xinxi").html("<span class='left'>共<span id='tili_num'>"+fri_num+"</span>条信息</span>");
   $("#meiri_kaishi").html("<img src='/resources/images/meiribisai/BACK.png' width='606' height='70' onclick='fanhuibisai()'>");
   hideLoading();
    var yuanjiao_width= $(".meiripaix .paix .yuanjiao").innerWidth();
    $(".meiripaix .paix .yuanjiao").innerHeight(yuanjiao_width);
     
     $(window).resize(function() {
       var yuanjiao_width= $(".meiripaix .paix .yuanjiao").innerWidth();
    $(".meiripaix .paix .yuanjiao").innerHeight(yuanjiao_width);
     
        });
     musclemail();
}

//收体力
function shoutili(id,muscle_create_time){
   
	$("#shoutili_"+id).remove();
	var tili_num=$("#tili_num").html();
	tili_num = parseInt(tili_num)-1;
	$("#tili_num").html(tili_num);
	var mail_mess=$("#mail_mess").html();
	mail_mess=parseInt(mail_mess)-1;
	if(mail_mess == 0){
		$("#mail_mess").css("display","none");
	}else{
	$("#mail_mess").html(mail_mess);
	}
	$.ajax({
   type: "POST",
    url : "?r=Everydaygame/getfriendmuscle/gameid/"+GAMEID+"&fri_id="+id+"&muscle_create_time="+muscle_create_time,

   success: function(msg){
     loadingmuscle();
     if(msg == 1){
     	if(getCookie('meirigame')){

     		delCookie('meirigame');
     		clearInterval(dingshi);
     		$("#daojishi").css("display","none");
		$("#meiri_tili").css("display","block");
     	}
     }
   }
});
 gettilizongshu();
}
//弹出添加好友层
function show_share(){
	$.ajax({
				url:"/?r=Everydaygame/show_share/gameid/"+GAMEID,
				dataType: "html",
			    async:false,
				success: function(data){
					
					$(".nav").before(data);

					
				}
			});
}


















