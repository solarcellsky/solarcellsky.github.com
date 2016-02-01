/**
 * Created by Administrator on 14-12-9.
 * 
 */
var GameService = {
	//开始游戏 
	startGame:function(callback){
		console.log("name")
	    // $.post("ajaxPost!startGame.action",function(data){
	    // 	if(callback !=null )
	    // 	callback(data.msg);
	    // });
	},

	//我的分数 返回我的分数
	saveScore:function(score,callback){
		$.post("ajaxPost!saveScore.action",{"scores":score},function(data){
			console.info(data.msg);
			if(callback !=null)
				callback(data.msg);
		});
	},
	

	//排行榜  (ajaxPost!myRank.action我的排行榜)
	rank:function(callback){//alert("排行榜");

		var isFinish1 = false;			//post1是否完成
		var isFinish2 = false;			//post2是否完成
		$.post("ajaxPost!rank.action",function(data){//alert(data.msg);
			console.info(data.msg);
			$.each(JSON.parse(data.msg), function(i, user){
				$("#content").append(
					"<li class='li_first'>"+
					"<ul><li class='li1'>"+(i+1)+"</li>"+
					"<li class='li2'>"+
					"<img class='img_touxiang' src="+user.headimgurl+" />"+
					"<p class='name'>"+user.nickname+"</p></li>"+
					"<li class='li3'>"+user.score+"</li>"+
					"</ul></li>"
				);
//				if(i<=3){
//					$("#1").css("visibility","visible");
//					$("#2").css("visibility","visible");
//					$("#3").css("visibility","visible");
//				}
				isFinish1 = true;
				if(isFinish1 && isFinish2 && callback !=null){
					callback();
				}
			});
		});
		$.post("ajaxPost!myRank.action",function(data){//alert(data.msg);
			var user = JSON.parse(data.msg);
			$("#mc").html(user.rank);
			$("#tx").attr("src",user.headimgurl);
			$("#nc").html(user.nickname);
			$("#fs").html(user.score);

			isFinish2 = true;
			if(isFinish1 && isFinish2 && callback !=null){
				callback();
			}
		});
	},
	
	//分享
	share:function(score){
		shareData1.title = "我要跳跳跳！勇敢跳到"+score+"米！求挑战！";
		shareData.title = "我要跳跳跳！勇敢跳到"+score+"米！求挑战！";
		wx.onMenuShareAppMessage(shareData);
	    wx.onMenuShareTimeline(shareData1);
	},
	
	//清除空格
	rid:function (d){
	    while(d.indexOf(" ")!=-1){
	    	d=d.replace(" ","");
		}
	   	 return d;
	},
	
	//表单验证
	formsub:function (data){
		data=true;
		//获取输入框的数据
		var name=this.rid($("#name").val());
		var phone=this.rid($("#phone").val());
		//清除提示文本信息
		$("#tip1").html();
		$("#tip2").html();
		if(name=="" ||name==" "){
			$("#tip1").html("×");
			data=false;
		}
		if(!/^(13[\d]{9}|15[\d]{9}|17[\d]{9}|18[\d]{9})$/.test(phone)){
			$("#tip2").html("×");
			data=false;
		}
		return data;
    },
	
}
