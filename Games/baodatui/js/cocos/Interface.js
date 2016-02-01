/**
 * Created by Administrator on 2015/8/4.
 */
//是否提交过手机号
var g_bSubPhone= CustomerInfo.phone;

//开始游戏
function StartGame(){
    StartGame_Callback();
}

//再玩一次
function Replay(){
    GameService.restart();
}

//关注
function Focus(){
    window.location.href= "http://mp.weixin.qq.com/s?__biz=MzA5NTIyODMwNg==&mid=207597502&idx=1&sn=a4b31b37d9f8986d827296cdec2dcc7e#rd";
}

//游戏结束
function GameOver(mile){
    var iMile= Math.floor(mile);
	if(iMile>= 10){
		GameService.setShareData(iMile, g_iMoney);
	}
    GameService.updateScore(iMile.toString(), GameOver_Callback);
}
//提交
function onSubmit(){
    var name= $("#name").val();
    var phone= $("#phone").val();
    var submit= $("#btn_submit");
    submit.css("display","none");
    if(GameService.formSub()){
        GameService.updateInfo(phone, name, SubSuccess);
    }else{
        submit.css("display","block");
    }
}