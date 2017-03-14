/// <reference path="../startup.html" />

var musicFlag = true;
//test();
init();
function init() {   
     alert("活动已结束，敬请期待下一次活动。");
    //规则按钮
    $(".gamerule-bottom-btn").click(function () {
        showWindow("tw-gamerule");
        _czc.push(["_trackEvent", "查看游戏规则", "click", "首页", 1]);
    });
    //音乐开关
    $(".gamemusic-paly").click(function () {
        if (!!musicFlag) {
            musicFlag = false;
            $(".gamemusic-paly").removeClass("music-animate");
            var au1 = document.getElementById('music1919');
            au1.pause();
            console.log("btn.Music STOP!")
        }
        else {
            musicFlag = true;
            $(".gamemusic-paly").addClass("music-animate");
            var au1 = document.getElementById('music1919');
            au1.src = "res/1919gequ.mp3";
            au1.loop = true;
            au1.play();
            console.log("btn.Music PLAY!")
        }
    });
    //帮TA玩游戏，进入TA的游戏
    $(".gamefriend-cards,.gamefriend-finger-btn").click(function () {
        friendTimes = parseInt(friendTimes);
        if (friendTimes > 0) {
            console.log("btn.play game other." + "friendFlag:" + friendFlag);
            showGameMainWindow();
            friendFlag = true;
            StateManager.g_instance.changeState(beginState);
        }
        _czc.push(["_trackEvent", "点击卡片开始游戏按钮", "click", "房间页", 1]);
    });
    //我也要iphone
    $("#gamefriend .gamefriend-btns-right").click(function () {
        friendFlag = false;
        updatewx();//刷新分享链接，自己的房间
        showGameMainWindow("gamestart");
        getUsersData();
        _czc.push(["_trackEvent", "加载首页", "click", "首页", 1]);
        _czc.push(["_trackEvent", "我也要Iphone按钮", "click", "房间页", 1]);
    });
    //分享窗口
    $("#tipwindow .game-share,.tw-close1").click(function () {
        showWindow("");
    });
    //进入房间
    $("#gamestart .btn-palygame").click(function () {
        countLives();
        showGameMainWindow("gamemain");
        _czc.push(["_trackEvent", "加载房间页", "click", "房间页", 1]);
    });
    //去到抽奖页面
    $("#gamemain .gamemain-btns-left").click(function () {
        location.href = "/biz/1919_s01e01/main?cc=" + getQueryString('cc');
        _czc.push(["_trackEvent", "抽奖传送门按钮", "click", "房间页", 1]);
        console.log("btn.去抽奖页。。。");
    })
    //自己房间开始游戏
    $(".gamemain-cards,.gamemain-finger-btn").click(function () {
        myTimes = parseInt(myTimes);
        if (myTimes > 0 && myTimes < 4) {
            console.log("btn.play game myself.");
            showGameMainWindow();
            StateManager.g_instance.changeState(beginState);
        }
        else {
            showWindow("tw-hint-1");
        }
        _czc.push(["_trackEvent", "点击卡片开始游戏按钮", "click", "房间页", 1]);
    });
    //好东西分享
    $("#gamemain .gamemain-btns-right,.tw-ok-btn-share").click(function () {
        clearGameData();
        showWindow("game-share");
        _czc.push(["_trackEvent", "分享按钮", "click", "房间页", 1]);
    });
    //弹出窗口关闭按钮
    $(".tw-close,.tw-ok-btn").click(function () {
        clearGameData();
    });
    //游戏结束弹出窗口
    $(".tw-gameend-close,.tw-gameendfriend-close").click(function () {
        clearGameData();
    });
    //游戏结束页立刻去
    $(".tw-gameend-gobtn").click(function () {
        location.href = "/biz/1919_s01e01/main?cc=" + getQueryString('cc');
        _czc.push(["_trackEvent", "抽奖传送门按钮", "click", "房间页", 1]);
    });
    $(".tw-gameendfriend-gobtn").click(function () {
        clearGameData();
    });
    //游戏结束页，再来一次
    $(".tw-gameend-playagain").click(function () {
        //判断是否还有次数
        if (myTimes > 0 && myTimes < 4) {
            console.log("再玩一次！");
            showWindow("");
            StateManager.g_instance.changeState(beginState);
            _czc.push(["_trackEvent", "再玩一次按钮", "click", "游戏结束页", 1]);
        }
        else {
            showWindow("");
            showWindow("tw-hint-1");
        }
    })

    //music auto play
    var au1 = document.getElementById('music1919');
    au1.src = "res/1919gequ.mp3";
    au1.loop = true;
    au1.play();

    getUsersData();
    countLives();
}
//判断朋友分享进入还是自己进入
function judgeFriendOwn() {
    if (!!friendFlag) {
        showGameMainWindow("gamefriend");
        _czc.push(["_trackEvent", "加载房间页", "click", "房间页", 1]);
    }
    else {
        showGameMainWindow("gamestart");
        _czc.push(["_trackEvent", "加载首页", "click", "首页", 1]);
    }
    if (GetLength(myName) > 8) {
        myName = cutstr(myName, 8);
    }
    if (otherName.length > 8) {
        otherName = cutstr(otherName, 8);
    }
    $("#gamemain .gamemain-player span").html(myName);
    $("#gamefriend .gamefriend-player span").html(otherName);
    //test
    //StateManager.g_instance.pushState(new gameState());
    //StateManager.g_instance.canvas.style.display = "block";

}
function showWindow(name) {
    if (!!name) {
        var a = (name == "tw-hint-1" && 1) || (name == "tw-hint-2" && 2) || (name == "tw-gamerule" && 3) || (name == "tw-gameend" && 4) || (name == "game-share" && 5) || (name == "tw-gameendfriend" && 6) || 0;
        if (!!a) {
            $(".window-hide-page").css("display", "block");
            $("#tipwindow,." + name).show();
        }
    }
    else {
        $(".window-hide-page").css("display", "none");
        $("#tipwindow,.tw-hint-1,.tw-hint-2,.tw-gamerule,.tw-gameend,.tw-gameendfriend,.game-share").hide();
    }
}
function showGameMainWindow(name) {
    if (!!name) {
        var a = (name == "gamestart" && 1) || (name == "gamemain" && 2) || (name == "gamemainfriend" && 3) || (name == "gamefriend" && 4) || 0;
        if (!!a) {
            $("#gamestart,#gamemain,#gamemainfriend,#gamefriend").hide();
            $(".mainpage,#" + name).show();
        }

    }
    else {
        $("#gamestart,#gamemain,#gamemainfriend,.mainpage,#gamefriend").hide();
    }
}
//清楚数据，回到房间
function clearGameData() {
    countLives();
    StateManager.g_instance.changeState(endState);
    StateManager.g_instance.canvas.style.display = "none";
    if (!!friendFlag) {
        showGameMainWindow("gamefriend");
    }
    else {
        showGameMainWindow("gamemain");
    }
    getUsersData();
    showWindow("");
}
//更新各页面生命值显示和分数
function countLives() {
    myTimes = parseInt(myTimes);
    friendTimes = parseInt(friendTimes);
    if (!!friendFlag) {
        if (friendTimes === 0) {
            //$("#gamefriend .gamefriend-live img").attr("src", "res/sm_live1.png");
            $("#gamefriend .gamefriend-live span").html("x0");
        }
        if (friendTimes === 1) {
            //$("#gamefriend .gamefriend-live img").attr("src", "res/sm_live1.png");
            $("#gamefriend .gamefriend-live span").html("x1");
        }
    }
    if (myTimes >= 0) {
        if (myTimes === 0) {
            $("#gamemain .gamemain-live img").attr("src", "res/sm_live1.png");
            $("#gamemain .gamemain-live span").html("x0");
            $(".tw-gameend-bottom-img img").attr("src", "res/go_live1.png");
        }
        if (myTimes === 1) {
            $("#gamemain .gamemain-live img").attr("src", "res/sm_live1.png");
            $("#gamemain .gamemain-live span").html("x1");
            $(".tw-gameend-bottom-img img").attr("src", "res/go_live1.png");
        }
        if (myTimes === 2) {
            $("#gamemain .gamemain-live img").attr("src", "res/sm_live2.png");
            $("#gamemain .gamemain-live span").html("x2");
            $(".tw-gameend-bottom-img img").attr("src", "res/go_live2.png");
        }
        if (myTimes === 3) {
            $("#gamemain .gamemain-live img").attr("src", "res/sm_live3.png");
            $("#gamemain .gamemain-live span").html("x3");
            $(".tw-gameend-bottom-img img").attr("src", "res/go_live3.png");
        }
    }
    else {
        window.location.href = window.location.href;
        console.log("live error, refresh page");
    }
    $(".gamemain-score span").html(myGameScore);
    $(".gamefriend-score span").html(otherGameScore);
}


var GetLength = function (str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};
function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length < len) {
        return str;
    }
}


//获取用户信息
function getUsersData() {
    var id = "";
    if (!!friendFlag) {
        id = otherID;
    }
    else {
        id = myID;
    }
    $.ajax({
        type: 'get',
        url: '/biz/1919_s01e01/teamSupport',
        data: {
            instance: id,
            _csrf: _csrf
        },
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            if (data.success) {
                if (data.data.length > 0) {
                    //朋友
                    if (!!friendFlag) {
                        $(".gamefriend-info ul").html("");
                        var a = "";
                        for (var i = 0; i < data.data.length; i++) {
                            if (otherID === data.data[i].instance) {
                                a += '<li><div class="gamefriend-info-list"><div class="gamefriend-info-ico"><img src="' + data.data[i].headUrl + '"></div><div class="gamefriend-info-content">' + cutstr(data.data[i].name, 10) + '收藏了' + data.data[i].count + '张小卡片！</div></div></li>';
                            }
                            else {
                                a += '<li><div class="gamefriend-info-list"><div class="gamefriend-info-ico"><img src="' + data.data[i].headUrl + '"></div><div class="gamefriend-info-content">' + cutstr(data.data[i].name, 10) + '帮TA收藏了' + data.data[i].count + '张小卡片！</div></div></li>';
                            }
                        }
                        $(".gamefriend-info ul").html(a);
                    }
                    else {
                        //个人
                        $(".gamemain-info ul").html("");
                        var a = "";
                        for (var i = 0; i < data.data.length; i++) {
                            if (myID === data.data[i].instance) {
                                a += '<li><div class="gamemain-info-list"><div class="gamemain-info-ico"><img src="' + data.data[i].headUrl + '"></div><div class="gamemain-info-content">你收藏了' + data.data[i].count + '张小卡片！</div></div></li>';
                            }
                            else {
                                a += '<li><div class="gamemain-info-list"><div class="gamemain-info-ico"><img src="' + data.data[i].headUrl + '"></div><div class="gamemain-info-content">' + cutstr(data.data[i].name, 10) + '帮你收藏了' + data.data[i].count + '张小卡片！</div></div></li>';
                            }
                        }
                        $(".gamemain-info ul").html(a);
                    }
                }


            }
            else {
            }
        },
        error: function (error) {
            console.log("获取信息出错！");
        }
    });


}
//发送分数
function gameOverView(num, nowScore, flag) {
    countLives();
    if (!!flag) {
        var reNum = parseInt(nowScore);
        //if ((parseInt(nowScore) + parseInt(otherGameScore)) > 99) {
        //    reNum = 99 - parseInt(otherGameScore);
        //}
        $.ajax({
            type: 'post',
            url: '/biz/1919_s01e01/score',
            data: JSON.stringify({
                score: reNum,
                instance: otherID,
                _csrf: _csrf
            }),
            contentType: "application/json",
            dataType: 'json',
            beforeSend: function () { },
            success: function (data) {
                if (data.success) {
                    otherGameScore = otherGameScore + reNum;
                    if (otherGameScore > 99) {
                        otherGameScore = 99;
                    }
                    friendTimes = 0;
                    countLives();
                    showWindow("tw-gameendfriend");
                    $(".tw-gameendfriend .tw-gameendfriend-title span").html(nowScore);
                }
                else {
                    showWindow("tw-gameendfriend");
                    $(".tw-gameendfriend .tw-gameendfriend-title span").html(nowScore);
                    //clearGameData();
                    console.log("帮朋友更新分数失败！");
                }

            },
            error: function (error) {
                console.log("帮朋友更新分数出错！");
            }
        });
    }
    else {
        //自己加分
        var reNum = parseInt(nowScore);
        //if ((parseInt(nowScore) + parseInt(myGameScore)) > 99) {
        //    reNum = 99 - parseInt(otherGameScore);
        //}
        $.ajax({
            type: 'post',
            url: '/biz/1919_s01e01/myScore',
            data: JSON.stringify({
                score: reNum,
                _csrf: _csrf
            }),
            contentType: "application/json",
            dataType: 'json',
            beforeSend: function () { },
            success: function (data) {
                if (data.success) {
                    myGameScore = reNum + myGameScore;
                    if (myGameScore > 99) {
                        myGameScore = 99;
                    }
                    myTimes -= 1;
                    countLives();
                    showWindow("tw-gameend");
                    $(".tw-gameend .tw-gameend-title span").html(nowScore);
                }
                else {
                    showWindow("tw-gameend");
                    $(".tw-gameend .tw-gameend-title span").html(nowScore);
                    //clearGameData();
                    console.log("更新分数失败！");
                }
            },
            error: function (error) {
                console.log("更新分数出错！");
            }
        });

    }
}


function test(str) {
    if (!str) {


        $("#testid").html("B:" + myID + "|A:" + otherID + "|friendFlag:" + friendFlag + "||||");
        $("#testid").append(window.location.href + "|");
    } else {
        $("#testid").append("|" + str);
    }
}