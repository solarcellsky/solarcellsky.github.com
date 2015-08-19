/**
 * Created by Administrator on 15-7-7.
 */
var GameService = {
	/*更新手机
	 * 返回值:
	 * 		1."repeat"手机号重复；
	 * 		2."false"表示网络异常，没有收到前端传值；
	 * 		3."传入的手机号",保存成功；
	 */
	updateInfo:function(phone, name, callback){
		var publicKey = RSAUtils.getKeyPair(exponent, '', modulus);
	    var encrypt = RSAUtils.encryptedString(publicKey, phone);
		   $.post("ajaxPost!updateInfo.action",{"phoneInput":encrypt,"nameInput":name},
		    function(data){
			    if(callback !=null )
			    callback(data.msg);
		    });
		},

		//开始游戏 返回值为当前剩余游戏次数 
		startGame:function(callback){
			   $.post("ajaxPost!startGame.action",function(data){
				   	GameInfo.tim = data.timOutput;
				   	console.info("tim = " + GameInfo.tim);
				   		
			    	if(callback !=null )
			    		callback(data.msg);
			    });
			},

	//更新分数 
	updateScore:function(score,callback){
		var result = score +"&"+ GameInfo.tim;
		var publicKey = RSAUtils.getKeyPair(exponent, '', modulus);
	    var encrypt = RSAUtils.encryptedString(publicKey, result);
	      $.post("ajaxPost!updateScore.action",{"scoreInput":encrypt},function(data){
	    	if(callback !=null )
	    	callback(data.msg);
	    });
	},
    /*
	//我的排行
	myRanking:function(callback){	
	    $.post("ajaxPost!myRanking.action",function(data){
	    	if(callback !=null )
	    	callback(data.msg);
	    });
	},
	//获取排行榜
	rankList:function(callback){
		$.post("ajaxPost!rankList.action",function(data){
			console.info(data.msg);
			if(callback !=null)
	    	callback(data.msg);
	    });
	},
	*/
	
	
	//重新开始游戏  
	restart:function(){
		window.location.href = "http://t.cn/RLYA6ds";
	},

    //清除空格
    rid:function (d){
        while(d.indexOf(" ")!=-1){
            d=d.replace(" ","");
        }
        return d;
    },

    //表单验证
    formSub:function (){
        var self= this;
        var data=true;
        //获取输入框的数据
        var name= self.rid($("#name").val());
        var phone= self.rid($("#phone").val());
        var tip= $("#tip");
        //清除提示文本信息
        tip.html();
        if(!name.trim()){
            tip.html("姓名不能为空！");
            data=false;
        }
        if(!/^(13[\d]{9}|15[\d]{9}|17[\d]{9}|18[\d]{9})$/.test(phone)){
            tip.html("手机号不合法!");
            data=false;
        }
        return data;
    },
	
	//设置分享成绩
	setShareData:function(score, money){
		title = "我抱大腿飞了"+score+"米，拿到 "+money+"万投资！不服来战！";
		shareData.title = title;
		wx.onMenuShareAppMessage(shareData);
		wx.onMenuShareTimeline(shareData);
	}
};

