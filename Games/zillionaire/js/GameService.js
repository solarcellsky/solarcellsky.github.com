/**
 * Created by Administrator on 14-12-9.
 */


var GameService = {
	//开始游戏
	strartGame:function(){
		 $.post("ajaxPost!startGame.action",function(data){
	    });
	},
	
	//判断玩游戏时长
	getPlayDuration:function(callback){
		$.post("ajaxPost!acquirePlayDuration.action",function(data){
			callback(data.msg)
	    });
	},
	
	//更新成绩
	updateScore:function(score,callback){
	    $.post("ajaxPost!updateScore.action",{scoreInput:score},function(data){
	    	callback(data.msg);
	    });
	},
	
	//更新手机
	updatePhone:function(phone,callback){
	    $.post("ajaxPost!updatePhone.action",{phoneInput:phone},function(data){
	    	callback(data.msg);
	    });
	},
	
	//根据分数获取本人排名
	getMyRank:function(score,callback){
	    $.post("ajaxPost!acquireMyRanking.action",{scoreInput:score},function(data){
	    	callback(data.msg);
	    });
	},
	
	//重新开始游戏
	restart:function(){
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6b188f507885bddc&redirect_uri=http%3A%2F%2Fgames.91yixun.cn%2FgameMS%2Fgames%2Fbenefit%2Fmascara%2FoauthAction.action&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
	},
	
	//引导关注
	focus:function(){
		window.location.href = "";
	},
	
	//获取排名列表
	getListRank:function(callback){
	    $.post("ajaxPost!listRank.action",function(data){
	    	callback(JSON.parse(data.msg));
	    });
	}
}
