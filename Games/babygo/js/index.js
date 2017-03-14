var storage = window.localStorage;
var user_name = null;
var user_km = 0;
var user_num = 0;

var user_km_temp0 = 0;
var user_km_temp1 = 0;

var touchGet = false;//判断是否有点击获取保险按钮

var globalOrderId = 0;

var getFreeLevel = [5000,10000,20000];


var globalScoreScore = 0;

var titleArr = ['再接再厉吧~','宝宝初长成~','宝宝会走啦~','上幼儿园啦~','厉害！'];
var showEnd = function(level,km){
	// console.log(level)
    if(!touchGet){
        touchGet = true;
        sendFreeInfo(km);//传输信息
        // console.log("...")
    }

	$('#gameEnd').show();

    // document.getElementById('gameEnd').style.display = 'block';
	var title = $('#main_end_title');
    //换头像
    var imgId = document.getElementById('babyImgSrc');
    var imgId1 = document.getElementById('gameEndImg');
    
	switch(level){
		case 1:{
			title.html(''+titleArr[0]+'');
			imgId.src = './res/babyEnd.png';
			imgId1.src = './res/end.png';
		};break;
		case 2:{
			title.html(''+titleArr[1]+'');
			imgId.src = './res/babyEnd1.png';
			imgId1.src = './res/end1.png';
		};break;
		case 3:{
			title.html(''+titleArr[2]+'');
			imgId.src = './res/babyEnd2.png';
			imgId1.src = './res/end2.png';
		};break;
		case 4:{
			title.html(''+titleArr[3]+'');
			imgId.src = './res/babyEnd3.png';
			imgId1.src = './res/end3.png';
		};break;
		case 5:{
			title.html(''+titleArr[4]+'');
			imgId.src = './res/babyEnd4.png';
			imgId1.src = './res/end4.png';
		};break;
	}

	$('#num1').html(''+km+'m');

	var s = storage.getItem('howlong');
	if(s == null){
		$('#num2').html('0');	
	}else{
		$('#num2').html(''+s+'m');
	}
	
	Zepto.ajax({
        type : 'get',
        url : "/biz/common/getRank?settingId=11&score="+s,
        data :"",
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
        	if(data.success){
        		$('#num3').html(''+data.data.rank+'');
                //用于微信分享
                window.localStorage.setItem('shareRank',''+(data.data.rank)+'');
        	}
        },
        error : function (xhr, errorType, error) {
        }
    })

    //用于微信分享
    window.localStorage.setItem('shareKM',''+km+'');
}

// 有缓存：/biz/common/updateRecordByName
// 无缓存：/biz/common/addRecordByName
//旧 /biz/common/submitRecord

var pageNum = 0;//起始页
var cnum = 18;//每页的数量

var scrollt = false;

var sendMessHave = function(_name,_km,_num){
    // console.log('有')
    pageNum = 0;
    scrollt = true;
    
    Zepto.ajax({
        type : 'post',
        url : '/biz/common/updateRecordByName',
        data : JSON.stringify({
        	_csrf:_csrf,
            settingId:"11",
            remarks:''+_num+'',
            score : ''+_km+'',
            name:_name
        }),
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            console.log(data)
            Zepto.ajax({
                type : 'get',
                url : '/biz/common/getTopRecord?settingId=11&pageNo='+pageNum+'&pageSize=18',
                data :"",
                contentType : "application/json",
                dataType : 'json',
                beforeSend : function () {
                },
                success : function (data, status, xhr) {
                    console.log(data)
                	if(data.data.length==undefined)return;
                    // console.log(data.data.length)
                	$('#main_phb').html(" ");
                    for(var i=0;i<=data.data.length-1;i++){
                    	var list = "";
                        // console.log("success")
                        list += "<li id=\"main_phb_li\"><div>";
                        list += "<span id=\"info_1\">"+(i+1)+"</span>";
                        list += "<span id=\"info_2\">"+data.data[i].name+"</span>";
                        list += "<span id=\"info_3\">"+data.data[i].score+"</span>";
                        list += "</div>";
                        list += "</li>";
                        $('#main_phb').append(list);
                    }
                    scrollt = false;
                },
                error : function (xhr, errorType, error) {
                	console.log('fail')
                }
            })
        },
        error : function (xhr, errorType, error) {
            console.log('have fail')
        }
    });
}

var sendMessNone = function(_name,_km,_num){
    console.log('没有缓存')
    Zepto.ajax({
        type : 'post',
        url : '/biz/common/addRecordByName',
        data : JSON.stringify({
            _csrf:_csrf,
            settingId:"11",
            remarks:''+_num+'',
            score : ''+_km+'',
            name:_name
        }),
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            if(!data.success){
                alert('名字已存在');
                $('#ip').show();
                return;
            }else{
                var _val = $('#ipName').val();
                if(window.localStorage.getItem('userName') == null){
                    user_name = _val;
                    window.localStorage.setItem('userName',''+user_name+'');
                }else{
                    user_name = window.localStorage.getItem('userName');
                    console.log(user_name)
                }
                $('#ip').css('display','none');
                $('#gamePhb').css('display','block');
            }
            Zepto.ajax({
                type : 'get',
                url : '/biz/common/getTopRecord?settingId=11&pageNo='+pageNum+'&pageSize=18',
                data :"",
                contentType : "application/json",
                dataType : 'json',
                beforeSend : function () {
                },
                success : function (data, status, xhr) {
                    if(data.data.length==undefined)return;
                    // $('#main_phb').html(" ");
                    for(var i=0;i<=data.data.length-1;i++){
                        var list = "";
                        list += "<li id=\"main_phb_li\"><div>";
                        list += "<span id=\"info_1\">"+(i+1)+"</span>";
                        list += "<span id=\"info_2\">"+data.data[i].name+"</span>";
                        list += "<span id=\"info_3\">"+data.data[i].score+"</span>";
                        list += "</div>";
                        list += "</li>";
                        $('#main_phb').append(list);
                    }
                    // var _val = $('#ipName').val();
                    // var Newlist = "";
                    // Newlist += "<li id=\"main_phb_li\"><div>";
                    // Newlist += "<span id=\"info_1\">"+(data.data.length)+"</span>";
                    // Newlist += "<span id=\"info_2\">"+_val+"</span>";
                    // Newlist += "<span id=\"info_3\">"+0+"</span>";
                    // Newlist += "</div>";
                    // Newlist += "</li>";
                    // $('#main_phb').append(Newlist);

                },
                error : function (xhr, errorType, error) {
                    console.log('fail')
                }
            })
        },
        error : function (xhr, errorType, error) {
            console.log('none fail')
        }
    });
}

$("#main_phb").scroll(function(){
    
    var nDivHight = $("#main_phb").height();
    var nScrollHight = $(this)[0].scrollHeight;
    var nScrollTop = $(this)[0].scrollTop;
    if(nScrollTop + nDivHight >= nScrollHight){
        if(scrollt)return;
        console.log(cnum)
        pageNum++;
        Zepto.ajax({
            type : 'get',
            url : '/biz/common/getTopRecord?settingId=11&pageNo='+pageNum+'&pageSize=18',
            data :"",
            contentType : "application/json",
            dataType : 'json',
            beforeSend : function () {
            },
            success : function (data, status, xhr) {
            	// if(data.msg = '没有数据')return;
            	// $('#main_phb').html(" ");
                if(data.data==undefined)return;
                for(var i=0;i<=data.data.length-1;i++){
                	cnum++;
                	var list = "";
                    list += "<li id=\"main_phb_li\"><div>";
                    list += "<span id=\"info_1\">"+cnum+"</span>";
                    list += "<span id=\"info_2\">"+data.data[i].name+"</span>";
                    list += "<span id=\"info_3\">"+data.data[i].score+"</span>";
                    list += "</div>";
                    list += "</li>";
                    $('#main_phb').append(list);
                }
                // var _val = $('#ipName').val();
                // var Newlist = "";
                // Newlist += "<li id=\"main_phb_li\"><div>";
                // Newlist += "<span id=\"info_1\">"+(data.data.length)+"</span>";
                // Newlist += "<span id=\"info_2\">"+_val+"</span>";
                // Newlist += "<span id=\"info_3\">"+0+"</span>";
                // Newlist += "</div>";
                // Newlist += "</li>";
                // $('#main_phb').append(Newlist);
            },
            error : function (xhr, errorType, error) {
            	console.log('fail')
            }
        })
    }
});

//确认
var TJ = function(){
    _czc.push(["_trackEvent", "点击提交资料", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "点击提交资料", "click", 'startup', 1]);



	var _val = $('#ipName').val();
	if(_val == ''){
		alert('不能为空！')
	}else{
		
		
        if(storage.getItem('howlong') != null){
            user_km = storage.getItem('howlong');
        }else{
            user_km = 0;
        }
		sendMessNone(_val,user_km,user_num);
	}
}
//返回
var goback = function(){
	$('#ip').css('display','none');
	cc.director.runScene(new BeginScene());
	console.log('back')

    _czc.push(["_trackEvent", "点击返回", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "点击返回", "click", 'startup', 1]);
}


var sendFreeInfo = function(_km){
    Zepto.ajax({
        type : 'post',
        url : "/biz/minsheng_s01e01/createOrder",
        data : JSON.stringify({
            _csrf:,
            settingId:"11",
            score : ''+_km+''
        }),
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            // console.log('orderId....'+data.orderId)
            globalOrderId = data.orderId;
        },
        error : function (xhr, errorType, error) {
            console.log('fail')
        }
    })
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return null;
}
var free = function(){

    _czc.push(["_trackEvent", "点击获取免费保险", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "点击获取免费保险", "click", 'startup', 1]);


    touchGet = false;

	// $('#gameEnd').css('display','none');
    var s = storage.getItem('howlong');
    console.log(s);
    var _status = 1;
    if(globalScoreScore<getFreeLevel[0]){
        _status = 1;
    }else if(globalScoreScore<getFreeLevel[1]){
        _status = 2;
    }else if(globalScoreScore<getFreeLevel[2]){
        _status = 3;
    }
	// console.log(_status);

    window.location.href = 'http://m.minshenglife.com/wm/WxHuShenFu/gethsfOpenIdCode.do?status='+_status+'&orderId='+globalOrderId+'&cc='+getQueryString('cc');
}

var playAgain = function(){
    _czc.push(["_trackEvent", "点击再玩一次", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "点击再玩一次", "click", 'startup', 1]);


	$('#gameEnd').css('display','none');
	cc.director.runScene(new gameScene());

    var au2 = document.getElementById('audio2');

    // au2.src="vo/2.mp3";
    au2.currentTime = 0;

    au2.loop = true;

    au2.play();
}

var showPhb = function(){
    // console.log(pageNum)
    pageNum = 0;
    cnum = 18;
    // console.log(pageNum)
    _czc.push(["_trackEvent", "点击查看排行版", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "点击查看排行版", "click", 'startup', 1]);

    // console.log(window.localStorage.getItem('userName'))
	$('#gameEnd').css('display','none');
	if(window.localStorage.getItem('userName') == null){
		$('#ip').css('display','block');
        // console.log('1')
	}else{
        if($('#main_phb').html() != null){
            $('#main_phb').html(" ")
        }
		$('#gamePhb').css('display','block');
        // console.log('2')
        sendMessHave(window.localStorage.getItem('userName'),storage.getItem('howlong'),user_num);
	}
}

var phbPlayagain = function(){
    _czc.push(["_trackEvent", "排行榜页再玩一次", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "排行榜页再玩一次", "click", 'startup', 1]);


	$('#gamePhb').css('display','none');
	cc.director.runScene(new BeginScene());
}



var shareTitle = ['我的萌宝爬行了','萌宝初长成~我的大宝爬行了','宝宝会走啦！我帮萌宝步行了','娃上幼儿园啦！我的萌娃行走了','娃上学啦！我的萌娃奔跑了'];
var shareImgUrl = ['http://m.muzhibuluo.com/biz/minsheng_s01e01/res/share/shareIcon.jpg','http://m.muzhibuluo.com/biz/minsheng_s01e01/res/share/shareIcon1.jpg','http://m.muzhibuluo.com/biz/minsheng_s01e01/res/share/shareIcon2.jpg','http://m.muzhibuluo.com/biz/minsheng_s01e01/res/share/shareIcon3.jpg','http://m.muzhibuluo.com/biz/minsheng_s01e01/res/share/shareIcon4.jpg'];
		
//微信分享
function shareFunc(level,distance) {
	var descTemp = shareTitle[0];
	var imgUrlTemp = shareImgUrl[0];
	switch(level){
		case 1:{
			descTemp = shareTitle[0];
			imgUrlTemp = shareImgUrl[0];
		};break;
		case 2:{
			descTemp = shareTitle[1];
			imgUrlTemp = shareImgUrl[1];
		};break;
		case 3:{
			descTemp = shareTitle[2];
			imgUrlTemp = shareImgUrl[2];
		};break;
		case 4:{
			descTemp = shareTitle[3];
			imgUrlTemp = shareImgUrl[3];
		};break;
		case 5:{
			descTemp = shareTitle[4];
			imgUrlTemp = shareImgUrl[4];
		};break;
	}
	Zepto.ajax({
        type : 'get',
        url : "/biz/common/getRank?settingId=11&score="+distance,
        data :"",
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
        	if(data.success){
        		wx.ready(function () {
        		//desc : '我帮助宝宝走了'+distance+'M,排名'+data.data.rank+',快来挑战我~赢少儿保险~',
				//分享给朋友
				wx.onMenuShareAppMessage({
					title : "快来帮助宝宝奔跑起来~集齐五个萌娃还可以召唤神龙，赢大奖~",
					desc : ''+descTemp+''+distance+'M,快来挑战我~赢少儿保险~',
                    link: 'http://m.muzhibuluo.com/biz/minsheng_s01e01/startup?cc='+getQueryString('cc'),
		            imgUrl: ''+imgUrlTemp+'',
					trigger : function (res) {},
					success : function (res) {
						//$('#getSuccess').css('display','block');
					},
					cancel : function (res) {
					},
					fail : function (res) {}
				});
				//分享到朋友圈
				wx.onMenuShareTimeline({
					title : "快来帮助宝宝奔跑起来~集齐五个萌娃还可以召唤神龙，赢大奖~",
					desc : ''+descTemp+''+distance+'M,快来挑战我~赢少儿保险~',
					link: 'http://m.muzhibuluo.com/biz/minsheng_s01e01/startup?cc='+getQueryString('cc'),
		            imgUrl: ''+imgUrlTemp+'',
					trigger : function (res) {},
					success : function (res) {
						//$('#getSuccess').css('display','block');
					},
					cancel : function (res) {
					},
					fail : function (res) {}
					});
				})

				wx.error(function (res) {
					console.log(res.errMsg);
				});
        	}
        },
        error : function (xhr, errorType, error) {
        }
    })
}
