var ele = function(id){
    return document.getElementById(''+id+'');
}
var addListener = function(id,callfun){
    ele(''+id+'').addEventListener("touchend",callfun,true);
}

// window.onload = function(){
// 	var num = 0;
// 	var cupLeft = -240;

// 	setInterval(function(){
		/*loading*/
		// num++;
		// cupLeft+=2;
		// if(cupLeft>=-15){cupLeft=-15}
		// if(num>=100){num=100;}
		// $("#loadingNum").html(num+"%");
		// ele("cup").style.marginLeft = cupLeft+"px";
		/*loading*/
	// },100);
	// var removeNum = parseInt(Math.random()*2500+2500);
	// setTimeout(function(){
	// 	$("#loading").hide();
	// 	$("#main").show();
	// },500);
// }

var globalScore = 0;
var storage = window.localStorage;

//音乐按钮
ele('voBtn').addEventListener("touchstart",audioFun,true);
ele('voBtn').addEventListener("touchend",audioFunUp,true);
var audionCheck = true;
function audioFun(e){
    if(audionCheck){
        ele('voBtnImg').src = './res/vedioBtn1.png';
        audionCheck = false;

        var au = document.getElementById('audio');
        au.pause();
    }else{
        ele('voBtnImg').src = './res/vedioBtn.png';
        audionCheck = true;

        var au = document.getElementById('audio');
        au.play();
    }
}
function audioFunUp(e){

}

/*恒通声明*/
addListener("cautionBtn",cautionBtnFun);
function cautionBtnFun(){
    $("#guizeDiv").hide();
    $("#txtDiv").show();
}
/*恒通声明返回*/
addListener("txtDivBack",txtDivBackFun);
function txtDivBackFun(){
    $("#txtDiv").hide();
    $("#guizeDiv").show();
}

/*帮助*/
addListener("help",helpFun);
function helpFun(){
    $("#main").hide();
    $("#guizeDiv").show();

    // _czc.push(["_trackEvent", "首页帮助", "click", 'startup', 1]);
    // _hmt.push(['_trackEvent', "首页帮助", "click", 'startup', 1]);
}

/*开始游戏*/
addListener("beginBtn",beginBtnFun);
function beginBtnFun(){
	console.log("beginBtn")
	// _czc.push(["_trackEvent", "开始游戏", "click", 'startup', 1]);
 //    _hmt.push(['_trackEvent', "开始游戏", "click", 'startup', 1]);
}

/*结束页关闭按钮*/
addListener("endClose",endCloseFun);
function endCloseFun(){
	console.log("endCloseFun")
	// _czc.push(["_trackEvent", "结束页关闭按钮", "click", 'startup', 1]);
 //    _hmt.push(['_trackEvent', "结束页关闭按钮", "click", 'startup', 1]);
}

/*结束页呼叫朋友按钮*/
addListener("share",shareBtnFun);
function shareBtnFun(){
	$("#shareDiv").show();
	// _czc.push(["_trackEvent", "组队", "click", 'startup', 1]);
 //    _hmt.push(['_trackEvent', "组队", "click", 'startup', 1]);
}

/*分享页*/
addListener("shareDiv",shareDivFun);
function shareDivFun(){
    $("#shareDiv").hide();
}

// /*结束页返回游戏按钮*/
// addListener("playAgain1",playAgainFun);
// function playAgainFun(){
// 	console.log("playAgainFun")
// 	_czc.push(["_trackEvent", "结束页返回游戏按钮", "click", 'startup', 1]);
//     _hmt.push(['_trackEvent', "结束页返回游戏按钮", "click", 'startup', 1]);
// }

/*提交中奖信息提交按钮*/
addListener("infoSubmit",infoSubmitFun);
function infoSubmitFun(){
	var _phone = ele("personPhone").value;
	var _TeamName = ele("personName").value;
	var phoneReg = /^[0-9]*[1-9][0-9]*$/;

	var check1 = false;
	var check2 = false;
    if (_phone.length != 11 || !phoneReg.test(_phone)) {
        alert('请输入正确的手机号码');
    }else{
    	check1 = true;
    }
    if(_TeamName.length != 0){
    	check2 = true;
    }else{
    	alert("请输入球队名字")
    }
    if(check1&&check2){
        sendInfo(_phone,_TeamName,globalScore); 

        $("#PrizeGetInfo").hide();
        $("#endScoreNum").html(Game.score)
        $('#end').show();
        var _example = parseInt(Math.random()*30+70);
        $("#endExampleNum").html(_example+"%");
        
        $("#bbbb").html("true");

        shareFun(Game.score,_example)

        storage.setItem("_example",""+_example+"");
        storage.setItem("_score",""+Game.score+"");

        // _czc.push(["_trackEvent", "提交中奖信息提交按钮", "click", 'startup', 1]);
        // _hmt.push(['_trackEvent', "提交中奖信息提交按钮", "click", 'startup', 1]);
    }
}

var sendInfo = function(phoneNum,teamName,score){//发送信息
    Zepto.ajax({
        type : 'post',
        url : '/biz/Evergrande_s02e01/information',
        data : JSON.stringify({
            _csrf:_csrf,
            instance:aVal,
            teamName:teamName,
            phone:phoneNum
        }),
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
        	var ppp = ele("personPhone").value;
			sendScore(score,ppp);
        },
        error : function (xhr, errorType, error) {
            console.log('have fail');
        }
    });
}

/*规则页返回按钮*/
addListener("guizeBack",guizeBackFun);
function guizeBackFun(){
	$("#main").show();
    $("#guizeDiv").hide();
	_czc.push(["_trackEvent", "规则页返回按钮", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "规则页返回按钮", "click", 'startup', 1]);
}

function endFun(s,p){
	sendScore(s,p);
	$("#endScoreNum").html(s)
	$('#end').show();
	var _example = parseInt(Math.random()*30+70);
	$("#endExampleNum").html(_example+"%");

    storage.setItem("_example",""+_example+"");
    storage.setItem("_score",""+s+"");

    shareFun(s,_example)
}

var sendScore = function(score,_phone){//发送分数
    Zepto.ajax({
        type : 'post',
        url : '/biz/Evergrande_s02e01/addScore',
        data : JSON.stringify({
            _csrf:_csrf,
            instance:aVal,
            score:score,
            phone:_phone
        }),
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            console.log(data.msg)
        },
        error : function (xhr, errorType, error) {
            console.log('have fail')
        }
    });
}

function shareFun(_s,_e){
    $(function(){
        wx.ready(function () {
            //分享给朋友
            wx.onMenuShareAppMessage({
              title: "恒大冰泉邀你看亚冠",
              desc: "我带球穿越了"+_s+"米.超越了"+_e+"%人，恒大球衣，亚冠门票即将到手！加入我一起去看恒大",
              link: ''+linkstr+'',
              imgUrl: ''+iconstr+'',
              trigger: function (res) {
              },
              success: function (res) {
                // $("#shareSuccess").show();
                _czc.push(["_trackEvent", "分享给朋友", "click", 'startup', 1]);
                _hmt.push(['_trackEvent', "分享给朋友", "click", 'startup', 1]);

                _czc.push(["_trackEvent", "分享", "click", 'startup', 1]);
                _hmt.push(['_trackEvent', "分享", "click", 'startup', 1]);
              },
              cancel: function (res) {
              },
              fail: function (res) {
              }
            });
            //分享到朋友圈
            wx.onMenuShareTimeline({
              title: "恒大冰泉邀你看亚冠",
              desc: "我带球穿越了"+_s+"米.超越了"+_e+"%人，恒大球衣，亚冠门票即将到手！加入我一起去看恒大",
              link: ''+linkstr+'',
              imgUrl: ''+iconstr+'',
              trigger: function (res) {
              },
              success: function (res) {
                // $("#shareSuccess").show();
                _czc.push(["_trackEvent", "分享到朋友圈", "click", 'startup', 1]);
                _hmt.push(['_trackEvent', "分享到朋友圈", "click", 'startup', 1]);

                _czc.push(["_trackEvent", "分享", "click", 'startup', 1]);
                _hmt.push(['_trackEvent', "分享", "click", 'startup', 1]);
              },
              cancel: function (res) {
              },
              fail: function (res) {
              }
            });
        })
        wx.error(function (res) {
          console.log(res.errMsg);
        });
    })
}