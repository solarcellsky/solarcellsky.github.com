/**
 * Created by Administrator on 2014/12/23.
 */
var g_redBagIndex = 0;
var g_awardId = 0;
//游戏开始（返回红包）
// 例如
// 3： 没红包；
// 1： 有红包没钱
// 2： 5元红包1个
// 0:  50元红包1个
function g_startGame(callback){
//alert("开始游戏");
    //g_redBagIndex = 0;
	
	$.post("startServlet.action",function(data){
		if(parseInt(data.msg)<=0){//没有红包
			g_redBagIndex = 3; //alert("g_redBagIndex1"+g_redBagIndex);
            callback();
		}else{//有红包
			$.post("selectPrizeServlet.action",function(data){//alert(data);
				
				g_redBagIndex = parseInt(data.msg);
				g_awardId = parseInt(data.awardId);
				//alert("g_awardId="+data.awardId);
				//alert("g_redBagIndex="+g_redBagIndex);
				cc.log("g_awardId1"+g_awardId);
                callback();
			});
		}
	});
	
    
};

//再次游戏
function g_againGame(){
	//alert("再来一次");
     window.location.href= shareData.link;
};

//上传游戏获得红包
// index = 5: 5元红包
// index = 50: 50元红包
function g_updateRedBag(callback){
	//alert("红包");
	cc.log("g_awardId2"+g_awardId);
	var data = RSAUtils.encryptedString(publicKey,g_awardId+"");
	$.post("savePrizeInfoServlet.action",{"award_id":data},function(data){//alert(data);
		g_redBagIndex = parseInt(data.msg); //alert("data.msg="+data.msg);
		callback();
	});
    
};

//上传分数（需要返回是否提交过手机号、本次排名、最佳成绩、最佳排名）
function g_updateScore(score,callback){
	//alert("游戏结束");
    //score 游戏分数
	var data = RSAUtils.encryptedString(publicKey,score+"");
	$.post("saveScoreServlet.action",{"scores":data},function(data){
		var list= eval('(' + data + ')');
		$.post("tjsjServlet.action",function(data){//alert("是否提交手机号"+data.msg);
			if(data.msg=="0"){
				//alert("已提交且已分享");
				$("#gameCanvas").css("display","none");
				$("#game_over").css("display","block");
				$("#cj").html(score);
//				$("#pm2").html(parseInt(list.myrankings)+1);
				$("#best_cj").html(list.oldScore);
				$("#best_pm").html(parseInt(list.myrank));
			}else if(data.msg=="1"){
				//alert("已提交未分享");
				$("#gameCanvas").css("display","none");
				$("#share").css("display","block");
			}else if(data.msg=="2"){
				//alert("未提交(或未/已分享)");
				$("#gameCanvas").css("display","none");
				$("#tjxx").css("display","block");
				$("#score").html(score);
//				$("#pm").html(parseInt(list.myrankings)+1);
			}
		});
		shareData.title = "我刚撕了"+score+"张名牌，谁敢与我争夺Iwatch？";
		wx.onMenuShareAppMessage(shareData);
		wx.onMenuShareTimeline(shareData);
		callback();
	}); 
};



//-------------------------------div页面
//我的红包
function g_myRedBag(callback)
{
	//alert("1");
	$.post("ishjServlet.action",function(data){
		if(data.msg=="error"){
			alert("您暂时未获得奖品");
		}else if(data.msg=="success"){
			window.location.href="myPrizeServlet.action";
		}
	});
	
//    $.post("myPrizeServlet.action",function(data){alert(data);
//		var list= eval('(' + data + ')');
//		var name=(list.name);
//		var code = (list.code);
//		var mima =(list.password);
//		window.location.href="red_packet.jsp?a="+name+"&b="+code+"&c="+mima+"";
//		callback();
//	})
	
		//alert("2");
		//$("#gameCanvas").css("display","none");
		//$("#red_packet").css("display","block");
};

//游戏排名
function g_gameRanking(callback)
{//alert("排行榜");
$.post("tjsjServlet.action",function(data){
	if(data.msg=="1"){
		$("#gameCanvas").css("display","none");
		$("#tip").css("display","block");
	}else if(data.msg=="2"){
		$("#gameCanvas").css("display","none");
		$("#tip2").css("display","block");
	}else if(data.msg=="0"){
		$.post("rankServlet.action",function(data){//alert(data);
			var list= eval('(' + data + ')'); 
			for(var i=0;i<list.length;i++){
				$(".phb1").append(
				"<li class=li_first id=li_phb2>"+
				"<ul><li class=li1><smap class=s1 tyle='display:block;' >"+(i+1)+"</smap></li>"+
				"<li class=li2 style='text-overflow:ellipsis; '>"+list[i].phone+"</li>"+
				"<li class=li3>"+list[i].score+"</li>"+
				"</ul></li>"
				);
			}
			$.post("myrankServlet.action",function(data){
				var user= eval('(' + data + ')'); 
				$("#li1").html(parseInt(user.myrank));
				$("#li2").html(user.phone);
				$("#li3").html(user.score);
			});
			callback();
		});
		$("#gameCanvas").css("display","none");
		$("#phb").css("display","block");
	}
});
    

    
};


var MY_GLOBAL = {
    trim:function(mystr) {
        while ((mystr.indexOf(" ") == 0) && (mystr.length > 1)) {
            mystr = mystr.substring(1, mystr.length);
        }//去除前面空格

        while ((mystr.lastIndexOf(" ") == mystr.length - 1) && (mystr.length > 1)) {
            mystr = mystr.substring(0, mystr.length - 1);
        }//去除后面空格

        if (mystr == " ") {
            mystr = "";
        }
        return mystr;
    }
};

