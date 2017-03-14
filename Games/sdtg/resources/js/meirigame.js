

//每日排行
function meiri_paihang(){

   showLoading();

    var str=""; 
    $.ajax({
        url : "?r=play/ranking/gameid/"+GAMEID+"/leixing/2",
        dataType : 'json',
        async:false,
        success : function(data){
        	
        var leng = data.length;
     
        if(leng > 100){
          leng = 100;
        }
        for(var i=0;i<leng;i++){
        str+=" <div class='content1' onclick=getuserplaceinfo("+data[i].gameid+","+data[i].userid+")>";
       
        if( i == 0){
         str+="<div class='content1_a'>";
         str+="<img src='/resources/images/paix/bg_jinhuizhang.png' width='56' height='88'>";
        }else if(i == 1){
         str+="<div class='content1_a'>";
         str+="<img src='/resources/images/paix/bg_yinhuizhang.png' width='56' height='88'>";
        }else if(i == 2){
         str+="<div class='content1_a'>";
         str+="<img src='/resources/images/paix/bg_tonghuizhang.png' width='56' height='88'>";
        }else{
          str+="<div class='content1_a shuzi'  ><span class='yuanjiao'>";
          str+=i+1;
          str+="</span>";
        }
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
        if(getBytesCount(data[i].nickname)>18){data[i].nickname= data[i].nickname.substr(0,8)+'...';}                                                                                 
        str+="<p class='mingc '>"+data[i].nickname+span+"</p>";
        }else{
        str+="<p class='mingc '>68微游戏玩家"+span+"</p>";  
        }     
       
        str+="</p>";
        str+="<p class='guangshu'>"+data[i].score+"</p>";
        str+="</div>";
        str+="<p class='clear'></p>";
        str+="</div>";
        str+="<p class='clear'></p>";
        str+="</div>";
       }
        $("#meirigame").html(str);

        meirigame_mypaihang(data,2);
        hideLoading();
        }
      });

   loadingmuscle(); //加载体力
   meiri_check_muscle();  //加载体力时间
  
 $("#meiri_kaishi").html("<img src='/resources/images/meiribisai/game.png' width='606' height='70' onclick='kaishibisai()'>");
     var yuanjiao_width= $(".meiripaix .paix .yuanjiao").innerWidth();
    $(".meiripaix .paix .yuanjiao").innerHeight(yuanjiao_width);
     
     $(window).resize(function() {
       var yuanjiao_width= $(".meiripaix .paix .yuanjiao").innerWidth();
    $(".meiripaix .paix .yuanjiao").innerHeight(yuanjiao_width);
     
        });
     musclemail();
     gettilizongshu();
}

//加载体力
function loadingmuscle(){
 
  $.ajax({
      type:'post',
        url :'/?r=Everydaygame/getmuscle/gameid/'+GAMEID,
        async:false,
        success : function (ret) {
        	
           var str = "";
            if(ret == 0){

              for(var i=0;i<5;i++){
                str+="<span><img src='/resources/images/meiribisai/power-off.png' width='44' height='37'></span>";
              }
              $("#muscle_icon").html(str);
               $("#daojishi").css("display","block");
               $("#meiri_tili").css("display","none");
            }
           if(ret > 0){
         
              for(var i=0;i<ret;i++){
                str+="<span><img src='/resources/images/meiribisai/power.png' width='44' height='37' class='power_xin'></span>";
              }
              if(ret < 5){
                var power_off=5-ret;
                for(var y=0;y<power_off;y++){
                   str+="<span><img src='/resources/images/meiribisai/power-off.png' width='44' height='37'></span>";
                }
                 $("#meiri_tili").css("display","none");
                $("#daojishi").css("display","block");

              }
              $("#muscle_icon").html(str);
           
               
              if(ret == 5){

                  $("#daojishi").css("display","none");
                  $("#meiri_tili").css("display","block");
              }
            }
        }
      });
}

//查看体力信封总条数
function musclemail(){
  $.ajax({
   type: "POST",
   url: "?r=Everydaygame/musclemail",
   success: function(msg){
   	  if(msg > 0){
   	     $("#mail_mess").css("display","block");
   	     $("#mail_mess").html(msg);
   	  }
    
   }
});
}


function meirigame_mypaihang(data,n){

  var userid=USERID || 0; 
 
  var str = "";
   for(var y=0;y<data.length;y++){

     if(data[y].userid==userid){
        var s = y + 1;
        s = s >= 100 ? ">100" : s;
        str+="<div onclick=getuserplaceinfo("+data[y].gameid+","+data[y].userid+")>";
        str+="<div class='content1_a shuzi'>";
        str+=s;                                                                                              
        str+="</div>";                                                                                       
        str+="<div class='content1_b'>";                                                                                        
         if(data[y].headimg != null && data[y].headimg != ''){
          if(!/^http|^[/]/i.test(data[y].headimg)){
          data[y].headimg=data[y].headimg.replace(/^/,'/');
              }
                str+="<li><img src='"+data[y].headimg+"' width='92' height='92'></li>";
                }else{                                                           
                str+="<li><img src='/resources/images/paix/bg_touxiang.png' width='92' height='92'></li>";
                }                             
        str+="<div class='content1_b_1'>";                                                                                               
        if(data[y].nickname != null && data[y].nickname != ''){
        //排行名称截取字符串
               if(getBytesCount(data[y].nickname)>18){data[y].nickname= data[y].nickname.substr(0,8)+'...';}                                     
                str+="<p class='mingc'>"+data[y].nickname+"</p>";
                }else{
                str+="<p class='mingc'>68微游戏玩家</p>";  
                }                                                                                                         
        str+="<p class='guangshu'>"+data[y].score+"</p>";                                                                                                     
        str+="</div>";                                                                                                     
        str+="<p class='clear'></p>";                                                                                               
        str+="</div>";                                                                                                
        str+="<p class='clear'></p>";                                                                                        
        str+="</div>";

        $("#meiri_mypai").html(str);
       
     }
  }                                                                                        
                                                                                          
}

function kaishibisai(){
 
  $.ajax({
      type:'post',
        url :'/?r=Everydaygame/koumuscle/gameid/'+GAMEID,
        async:false,
        success : function (ret) {
  			 if(ret == 1){
                $(".meiripaix2").remove();
               
             }else if(ret == 0){
               //alert("已经没有体力了，赶快叫朋友来赠送体力吧！除此之外也可以通过分享给朋友获得体力哦！");
               alert("没有体力不能玩该游戏！");
             }else if(ret == 2){
              $(".meiripaix2").remove();
             }
        }
      });
}

//统计好友送的体力条数
function gettilizongshu(){
  $.ajax({
      type:'post',
        url :'/?r=Everydaygame/gettilizongshu/gameid/'+GAMEID,
        async:false,
        success : function (ret) {
        	
           $("#qita_tili").html(ret);
        }
      });
}


function checkmeirigame(){
	$.ajax({
   		type: "POST",
   		url: "/?r=Everydaygame/checkmeirigame",
   		async:false,
   		data: "gameid="+GAMEID,
   		success: function(msg){
    	 	
   		}
	});
}
//var dingshi = null;
//daoshu();
//function daoshu(){


function updatemuscle(){
	var f=0;
	$.ajax({
   		type: "POST",
   		url: "/?r=Everydaygame/Updatemuscle",
   		async:false,
   		success: function(msg){

    	 	if(msg == 0){
    	 	
    	 		
    	 			clearInterval(dingshi);
    	 			f=1; //体力已满
    	 		
    	 	}
   		}
	});
	return f;
}



//////////////////////////////
var meiri_jishi;
function meiri_kaishi(min,sec){
  if(min != 0 && sec != 0){ 
    localStorage.removeItem("meiri_min");
    localStorage.setItem("meiri_min",min);
    localStorage.removeItem("meiri_second");
    localStorage.setItem("meiri_second",sec);
  }
  clearInterval(meiri_jishi);
  meiri_jishi=setInterval("meiri_daoji()",1000);
}


function meiri_daoji(){
  
  meiri_init_min_second();
  meiri_daoshu_sec();
    var min=localStorage.getItem("meiri_min");
    var second=localStorage.getItem("meiri_second");
  

    if(min == null && second == null){
      clearInterval(meiri_jishi);
      //当倒计时为0:0时这里执行逻辑代码
      
      addOneMuscle();
      }else{
        if(min == null){
          min = 0;
        }
        if(second == null){
          second = 0;
        }
      second=second.toString();
      if(second.length==1){
        second='0'+second;
      }
      var str=min+':'+second;
      $("#daojishi").html(str);
    }
}

//初始化执行检查分和秒
function meiri_init_min_second(){
  var all_min = 10;
  --all_min;
  var all_second = 60;
  var min=localStorage.getItem("meiri_min");
  var second=localStorage.getItem("meiri_second");
  if(min == null){
    localStorage.removeItem("meiri_min");
    localStorage.setItem("meiri_min",all_min);
  }
  if(second == null){
    localStorage.removeItem("meiri_second");
    localStorage.setItem("meiri_second",all_second);
  }
}

//倒数秒数,秒数为0时删除秒数
function meiri_daoshu_sec(){
  var second=localStorage.getItem("meiri_second");
  
    --second;
    localStorage.removeItem("meiri_second");
    localStorage.setItem("meiri_second",second);
    if(second == 0){
      meiri_daoshu_min();
      var min=localStorage.getItem("meiri_min");
      if(min != null){ //统计分钟数，通知后端
      ++min;
      }else{
        min=0;
      }
       

    localStorage.removeItem("meiri_second");
  } 
}



//倒数分钟数
function meiri_daoshu_min(){
  var min=localStorage.getItem("meiri_min");
  --min;
  localStorage.removeItem("meiri_min");
  localStorage.setItem("meiri_min",min);
  if(min < 0){
    localStorage.removeItem("meiri_min"); 
  }
}
/////////////////////////////////////////////
//检查还有多少体力点,体力不满的加载倒计时
function meiri_check_muscle(){

  var muscle_num=$(".power_xin").length;

  if(muscle_num == 5){

     $("#jieri_daojishi").css("display","none");
     $("#meiri_tili").css("display","block");
  }else{
       $.ajax({
      type: "POST",
      url: "/?r=Everydaygame/check_surplus/gameid/"+GAMEID,
      dataType:'json',
      async:false,
      success: function(msg){
      
         if(msg == 1){
          setallmuscle(); //显示满体力状态
           $("#jieri_daojishi").css("display","none");
           $("#meiri_tili").css("display","block");

         }else{
          dellocalStorageinfo();
          var m=parseInt(msg.surplus_min);
          var s=parseInt(msg.surplus_sec);
        
          meiri_kaishi(m,s);
         }
      }
  });
  }
}

//显示满体力的状态
function setallmuscle(){
  var str='';
  for(var i=0;i<5;i++){
        str+="<span><img src='/resources/images/meiribisai/power.png' width='44' height='37' class='power_xin'></span>";
  }
  $("#muscle_icon").html(str);
}

//删除localStorage
function dellocalStorageinfo(){
  localStorage.removeItem("jieri_min");
  localStorage.removeItem("jieri_second");
}

//添加一个体力
function addOneMuscle(){
   $.ajax({
      type: "POST",
      url: "/?r=Everydaygame/Updatemuscle/gameid/"+GAMEID,
      async:false,
      success: function(msg){
        if(msg == 0){  //返回0的话说明体力已经满
           loadingmuscle();
            $("#daojishi").css("display","none");
            $("#meiri_tili").css("display","block");
            dellocalStorageinfo();      
        }else{

            meiri_kaishi(0,0);
            loadingmuscle();
        }
      }
  });
}

//弹出规则页
function guize(){
	$.ajax({
 
   url: "?r=Everydaygame/meiri_guize/gameid/"+GAMEID,
   dataType: "html",
   success: function(msg){
   
    $(".nav").before(msg);
   }
});
}

//微信分享后
function meiri_weixin_share(){
  $.ajax({
      type:'post',
        url :'/?r=Everydaygame/addmuscle',
        data:'gameid='+GAMEID,
        async:false,
        success : function (ret) {
         
        if(ret == 1){
          loadingmuscle();
        }else if(ret ==2){
          gettilizongshu();
        }
              
        }
       });
  
  alert("分享成功，获得1点体力");
}





