//摇手机开始
function init(){
　　if (window.DeviceMotionEvent) {
　　　　window.addEventListener('devicemotion', deviceMotionHandler, false);
　　　　$(".view").show();
　　} else{
　　　　$("#tip").show();
　　} 
}
// 首先，定义一个摇动的阀值
var SHAKE_THRESHOLD = 1000;
// 定义一个变量保存上次更新的时间
var last_update = 0;
// 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;
// 增加一个计数器
var count = 0;
function deviceMotionHandler(eventData) {
　　// 获取含重力的加速度
　　var acceleration = eventData.accelerationIncludingGravity; 
　　// 获取当前时间
　　var curTime = new Date().getTime(); 
　　var diffTime = curTime -last_update;
　　// 10毫秒进行一次位置判断
　　if (diffTime > 100) {
　　　　last_update = curTime; 
　　　　x = acceleration.x; 
　　　　y = acceleration.y; 
　　　　z = acceleration.z; 
　　　　var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;		
　　　　if (speed > SHAKE_THRESHOLD) { 
　　　　　　// TODO:在此处可以实现摇一摇之后所要进行的数据逻辑操作
			count++;
			$(".score").html(count);
			$(".result-num span").html(count);
			if(count<=10){
				$(".info").html("你右手弱爆了，送张券安慰下你");
			}else if(10<count<=20){
				$(".info").html("杨过转世，送你张券奖励你的右手");
			}else if(20<count<=30){
				$(".info").html("你右手好有力，领券也要用右手哦");
			}else if(count>30){
				$(".info").html("真牛！好厉害！快领你的奖励哦");
			}
		
　　　　}

　　　　last_x = x; 
　　　　last_y = y; 
　　　　last_z = z; 
　　} 
};
// 设置多少秒
var s=5;
var time=s*10;
function daojishi(){	
	time--;	
	$(".hand").addClass("hand-shake");
	if (time==0) {	
	$(".ms").html(time%10);	
		outit();
		$(".hand").removeClass("hand-shake");
		$("#score-part").removeClass("hide");
		$("#shake-part").addClass("hide");
	}else{
		setTimeout("daojishi()",100);
		$(".s").html(parseInt(time/10));
		$(".ms").html(time%10);
	};
}
//关闭摇手机
function outit(){
　　window.removeEventListener('devicemotion', deviceMotionHandler, false);
}