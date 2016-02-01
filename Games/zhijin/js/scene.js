// JavaScript Document
var $text_css = {'font-size': '24px', 'font-family': 'Arial', 'color': 'white', 'text-align': 'center'}
var entify={};
var timeId={};
var yuwangup;
//return;
// Game Scene
Crafty.scene("Loading",function(){
	timeId["Loading"]=[];
	var txt=Crafty.e('2D, DOM,Text')
		.text('Loading...')
		.attr({ x: 0, y: Crafty.viewport.height/2 - 24, w: Crafty.viewport.width,h:32})
		.css($text_css);
	//var loadarray=Game.assets.images.model1.concat(Game.assets.mp3.model1);
	Crafty.load(Game.assets.images.model1, function(){
		Crafty.sprite(199,249,"./img/wang.png",{"Wang":[0,0]});
		Crafty.sprite(199,249,"./img/wangup.png",{"Wangup":[0,0]});
		//Crafty.sprite(55,55,"./asset/images/btn5.png",{"ControllBar":[0,0]});
		//Crafty.scene('Loaded');
		//Game.createBg();
		//Game.createWater();//中间部分的水
		//Game.createBg2();//下半部分的游戏背景
		
		//Crafty.scene("Begin");
	},function(data){
		//progress
		txt.text(parseInt(data.percent)+'% Loading...')
	},function(){
		//loading error
	});
		
});
//Loading 结束  初始化背景
Crafty.scene("Loaded",function(){
	timeId["Loaded"]=[];
	
	//Crafty.scene("Stage3"); //测试
},function(){
	var timeArray=timeId["Loaded"];
	for(var i=0;i<timeArray.length;i++){
		clearTimeout(timeArray[i]);
	}
});

//第一关
Crafty.scene("Stage1",function(){

	$('.timebg').show();
	//$('.timein').width(timew);
	timeId["Stage1"]=[];
	//清除得分
	Game.config.coins[0]=0;
	//底部 工具
	//Game.createBottomLine().attr({z:9});
	//Game.btnObj=Game.createBtn2().attr({z:9}).animateTo({x:Crafty.viewport.width-160},500);

	
	//游戏界面右下角的按钮
	//Game.createBtn3(function(){
	//	//游戏说明
	//	if(!Game.config.isPause){
	//		if(Game.btnObj){
	//			Game.btnObj.reel("fm2").attr({x:Crafty.viewport.width-160});
	//		}
	//		Crafty.pause();
	//		Game.config.isPause=true;
	//	}
	//	Game.renderInfoWin("info");
	//}).attr({z:9}).animateTo({x:Crafty.viewport.width-70},500);
	//Game.createBtn4(function(e){
	//	Crafty.scene("GameStart");
	//}).attr({x:100,z:9});
	//标题
	//Game.createTitle().attr({y:20});
	//底部 沙子 水草
	//Game.createStage1Bg();
	//alert(Game.width());
	//Game.createpan().attr({x:0,y:Game.height()*0.5,w:Game.width()*0.3});
	//计分器
	var num1=Crafty.e("Coins");
			//.setPos({x:35,y:180,w:201,h:58})
			//.buildBg()
			//.build(0);
	//计时器
	var timeline=Crafty.e("TimeLine")
			//.setPos({x:15,y:0,w:380,h:56})
			//.buildBg()
			//.build(Game.config.time)
			.begin(function(obj){
				//计时结束
				//移除点击事件
				cover.destroy();
				//赛制判断
				//Game.createAlphaBg().attr({z:7});
				//Game.checkWinner(1,function(){
				//	//弹窗提示
				//	Game.createGameOver(1,function(){
				//		//按钮点击
				//		//Crafty.scene("Stage2");
				//		//游戏结束
				//	});
				//});
				
				
				//Game.renderInfoWin("p_err2");
				
				Game.config.dragging=false;
				gameover();
				
			});
	//气泡
	var qipao=Crafty.e("Qipao")
				.setFreshTime(10000)
				.build()
				.randomBegin(Game.config.qipaoItemNum[0]);
	//渔网
	var yuwang=Crafty.e("FishingNet")
					.buildKuang();
	//var yuwang=Crafty.e("FishingNet")
				//.buildBgup();//.animateTo({x:100},1000);
	//var yuwangup=Crafty.e("FishingNetup")
	 yuwangup = yuwang.buildBgup();
			
	var cover=Game.createSlider(yuwang);
	//var coverup=Game.createSlider(yuwangup);
	//鱼
	var fish=Crafty.e("Fish")
				//.setItem(Game.config.fishType[0])
				.setItem(Game.config.fishType[0])
				.setFreshTime(Game.config.freshTime[0])
				.randomBegin(function(){
					if(Game.config.dragging){
					
	//	document.addEventListener("touchstart", touchStart, false);
	//	document.addEventListener("touchend", touchend, false);
	//	function touchStart(){
	//	letgo = 0;
	//	}
	//	function touchend(){
	//	letgo = 1;
	//	}
		
		//alert(letgo);
						
							//Game.checkletgo(this,num1,1);
							Game.onHitEventHandle(this,num1,1);
					
					
						//alert('碰到');
					}
				},Game.config.fishItemNum[0]);
	
},function(){
	var timeArray=timeId["Stage1"];
	for(var i=0;i<timeArray.length;i++){
		clearTimeout(timeArray[i]);
	}
});


          //游戏开始
     function start(){
	
	checkCanPlay();
	 		if(canPlay!==1){
			alert('今天的次数用完了，明天继续加油吧！');
			return ;
			}
		
	 $('.gamebg').show();
        $('.yx_wap').hide();
        $('.menu_btn').hide();
        $('.pan').show();
     
		Crafty.audio.stop("bgmp3");
		Crafty.audio.play("bgmp3",-1);
		//检测是否暂停 音乐：
		setInterval(function(e){
			if(Game.config.isPause){
				Crafty.audio.pause("bgmp3");
			}else{
				Crafty.audio.unpause("bgmp3");
			}
		},500);
		//Crafty.scene("Begin");
		//Crafty.scene("Intro");
		//Crafty.scene("GameStart");
		$('.timein').width(timew);
		Crafty.scene("Stage1");
		$('.score font').text('0');
		$('.score').show();
     }

	function checkCanPlay(){
	  $.ajax({
            type: "POST", //用POST方式传输
            dataType: "JSON", //数据格式:JSON
            url: 'ajaxbase.php', //目标地址
            data: {openid:'1'},
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                return false;
            },
            success: function (data){
			  canPlay = data.canPlay;
			}
			
			})
			
	}
	 

//游戏结束
function gameover(){

$('.gamebg').hide();
$('.timebg').hide();
$('.succ_wap').hide();
$('.fale_wap').hide();
$('.pan').hide();
$(".first").show();
$(".last").hide();
$('.gameover').show();
$('.score').hide();
scorenow=$('.score font').text();
postScore();
allscore=parseInt(allscore)+parseInt(scorenow);
$('.fale_text02 span').text(scorenow);
$('.fale_text01 span').text(allscore);

$('.score_all').text(allscore);

if(scorenow>=30){
$('.succ_wap').show();
}else{
$('.fale_wap').show();
}

 $('.menu_btn').show();

}
//再玩一次
function play_again(){

$('.menu_listbg').slideUp();
$('.menu_btn').hide()

checkCanPlay();
			if(canPlay!==1){
			alert('今天的次数用完了，明天继续加油吧！');
			return ;
			}
$('.gamebg').show();
$('.menu_btn').hide();
$('.gameover').hide();
$('.pan').show();
$('.score').show();
$('.score font').text('0');
Crafty.scene("Stage1");
$('.timein').width(timew);

}

function postScore(){
 $.ajax({
                type: "POST", //用POST方式传输
                dataType: "JSON", //数据格式:JSON
                url: 'ajaxscore.php', //目标地址
                data: {score:scorenow},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    return false;
                },
                success: function (data){
				
                    return true;
                }
            });
}
