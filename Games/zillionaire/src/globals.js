
var g_time = 30;               //游戏时间
var g_score = 0;               //游戏得分
var g_stand = 100;                //最好成绩
var g_gameStatus = 1;         //游戏关卡
var g_target = '';
var g_gameCount = GameInfo.gameCount;       //后台获得
//var g_subscribe = subscribe;       //后台获取

//var g_gameCount = 3;
//var g_subscribe = 1;

if(typeof TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.start = 0;
    TagOfLayer.game = 1;
};

// collision type for chipmunk
if(typeof SpriteTag == "undefined") {
    var SpriteTag = {};
    SpriteTag.target = 0;
    SpriteTag.logo1 = 1;
    SpriteTag.logo2 = 2;
    SpriteTag.logo3 = 3;
    SpriteTag.reduce = 5;
};