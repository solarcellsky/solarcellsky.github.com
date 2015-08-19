/**
 * Created by Administrator on 2014/12/23.
 */

var g_createCowTime = 2.0;         //出现牛的时间间隔
var g_precision = 50;               //套牛精确度（越小越精确，牛头在屏幕中间位置的偏离像素）
var g_rope = 0.05;                  //扔绳子的速度控制率（数值越小，绳子扔出去，收回来越快）
var g_ropeCow = 0.1;               //拽牛的速度控制率 （数值越小，拽的越快）

var g_gameTime = 30;                //游戏时间

var g_cowScore1 = 8;               //奶牛分数
var g_cowScore2 = 5;               //黄牛分数
var g_cowScore3 = 3;               //黑牛分数

var g_cowSpeed1 = 400;            //奶牛移动速度(每秒移动的像素)
var g_cowSpeed2 = 350;            //黄牛移动速度
var g_cowSpeed3 = 300;            //黑牛移动速度

//每头牛出现时会调用此函数一次 （这里可以调整牛的速度，比如对牛的速度随机产生,如果是固定值可以直接调上面的变量）
function g_changeCowSpeed(){
    //例如：
    //g_cowSpeed1 = Math.random()*150+300*0.75;
};

//上传分数（参数score：上传的分数   参数callback：分数上传之后的回调函数）
function g_update(score,callback){

    callback()                //需要将callback放到上传分数之后
};

