/**
 * Created by Administrator on 14-12-9.
 */
var GameService = {
	/*更新手机
	 * 返回值:
	 * 		1."repeat"手机号重复；
	 * 		2."error"表示网络异常，没有收到前端传值；
	 * 		3."传入的手机号",保存成功；
	 */
	updateInfo:function(phone,callback){
	    $.post("ajaxPost!updateInfo.action",{"phoneInput":phone},function(data){
	    	if(callback !=null )
	    	callback(data.msg);
	    });
	},
	
	/*更新成绩
	 * 返回值为输入值score,用于检验传值是否正确
	 */
	updateScore:function(score,callback){
		var publicKey = RSAUtils.getKeyPair(exponent, '', modulus);
        var point = accMul(score,1);
    	var encrypt = RSAUtils.encryptedString(publicKey, point+"");
	    $.post("ajaxPost!updateScore.action",{encrypt:encrypt},function(data){
	    	if(callback !=null )
	    	callback(data.msg);
	    });

	},
	
	/*
	 * 返回值为客户最好成绩的排名
	 * 备注：本函数要在updateScore函数后调用，这样就考虑的本次成绩为最好成绩的情况了
	 */
	myRanking:function(callback){
		$.post("ajaxPost!myRanking.action",function(data){
	    	if(callback !=null )
	    		callback(data.msg);
	    });
	},
	
	/**
	 * 显示页面的排行榜
	 */
	rankList:function(callback){
		$.post("ajaxPost!rankList.action",function(data){
	    	if(callback !=null )
	    		callback(data.msg);
	    });
	},
	//重新开始游戏
	restart:function(){
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd4449d53894b6ba0&redirect_uri=http%3A%2F%2Fgame.91yixun.cn%2FGameMS%2Fgames%2Feco%2FhomeGuard%2FoauthAction.action&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
	},
	
	/*
	 * 返回值:"0"未中奖，"1:中奖编码"表示中奖
	 * 需要先考虑异常情况
	 */
	drawAward:function(callback){
		$.post("ajaxPost!drawAward.action",function(data){
	    	if(callback !=null )
	    		callback(data.msg);
	    });
	},
	
	
	//引导关注
	focus:function(){
		window.location.href = "http://mp.weixin.qq.com/s?__biz=MjM5Mzc2NTcxNA==&mid=209899387&idx=1&sn=a38ef1a6ea6f14d021443ba14fa2e9ce&scene=18#rd";
	},
	
	/*
	setShareData:function(score){
		title = "盆友们快帮忙点击，奖金增至每天8000元，i老虎哟！";
		shareData.title = title;
		wx.onMenuShareAppMessage(shareData);
		wx.onMenuShareTimeline(shareData);
	},*/
	
	
}
