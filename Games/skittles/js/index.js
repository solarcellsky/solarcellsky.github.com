
$(".replayBut").on("click",function(){
    $(".main").hide();
    $(".rankmain").hide();

    _czc.push(﻿["_trackEvent","再玩一次","点击","","","#btnShowShare"]);
   // createjs.Sound.play("music",{volume:0.8});
    StateManager.g_instance.changeState(gameState);
});
$(".shareBut").on("click",function(){
    $(".shareDiv").show();
    _czc.push(﻿["_trackEvent","炫耀一下","点击","","",""]);
});
$(".shareDiv").on("click",function(){
    $(".shareDiv").hide();
});
$(".priseDiv").on("click",function(){
    $(".priseDiv").hide();
});
$(".priseBut").on("click",function(){
    $(".priseDiv").show();
    _czc.push(﻿["_trackEvent","礼品展示","点击","","",""]);
});

var rankingNum = 0;
var panmum = 1;
var bpa = 0;

$(".rankingBut").on("click",function(){
    rankingNum = 0;
    panmum = 1;
    bpa = 0;
    $(".rankingNamesBox").empty();

    //$(".main").hide();
    //$(".rankmain").show();

    _czc.push(﻿["_trackEvent","排行榜","点击","","",""]);
    var storage = window.localStorage;
    if(!storage.getItem("logined")){
        $(".loginMain").show();
    }else{

        var newscore = window.localStorage.getItem("GameScore");
        var name = window.localStorage.getItem("name")
        var address = window.localStorage.getItem("address")
        var phone = window.localStorage.getItem("phone")
        var remarks = window.localStorage.getItem("remarks")



        var posStr = JSON.stringify({
            settingId:"7",
            score : newscore,
            phone : phone,
            address : address,
            name:name,
            remarks : remarks
        })

        Zepto.ajax({
            type : 'post',
            url : '/biz/skittles/submitRecord',
            data : posStr,
            contentType : "application/json",
            dataType : 'json',
            beforeSend : function () {
            },
            success : function (data, status, xhr) {
               console.log(data);
                    $(".rankmain").show();


                    $(".rankingNamesBox").empty();
                    rankingNum = 0;
                    panmum = 1;
                    bpa = 0;
                    ShowRanking();
                    return;

            },
            error : function (xhr, errorType, error) {
            }
        });
    }

});



$(".rankingNamesBox").scroll(function(){

    var nDivHight = $(".rankingNamesBox").height();

    var nScrollHight = $(this)[0].scrollHeight;
    var nScrollTop = $(this)[0].scrollTop;
    if(nScrollTop + nDivHight >= nScrollHight){
        ShowRanking();
    }

});

function ShowRanking(){

    if(bpa == panmum){return}
    bpa = panmum;

    Zepto.ajax({
        type : 'get',
        url : '/biz/common/getTopRecord?settingId=7&pageNo='+panmum+'&pageSize=10',
        data :"",
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            if(data.success){
                if(data.data!=undefined){
                    panmum++;
                    for(var i = 0;i<=data.data.length-1;i++){
                        rankingNum++
                        var scoreStrArr = (data.data[i].score+"").split("")
                        var scorestr = "";
                        if(scoreStrArr.length==3){
                            scorestr = scoreStrArr[0]+'"'+scoreStrArr[1]+scoreStrArr[2];
                        }else if(scoreStrArr.length==4){
                            scorestr = scoreStrArr[0]+scoreStrArr[1]+'"'+scoreStrArr[2]+scoreStrArr[3];
                        }else if(scoreStrArr.length==5){
                            scorestr = scoreStrArr[0]+scoreStrArr[1]+scoreStrArr[2]+'"'+scoreStrArr[3]+scoreStrArr[4];
                        }
                        $(".rankingNamesBox").append( '<div class="rankingName"><div class="rankingMsg">'+rankingNum+'</div><div class="rankNameMsgBox"><p>'+data.data[i].name+'</p><p>'+data.data[i].address+'</p></div><div class="rankNameSecond"><p>'+scorestr+'</p></div></div>');
                    }
                    $(".main").hide();
                    $(".rankmain").show()
                }
            }

        },
        error : function (xhr, errorType, error) {
        }
    })
}

$(".loginMsg").on("click",function(){
    $(".rankmain").hide();
    $(".loginMain").show()
});

$(".loginX").on("click",function(){
    $(".loginMain").hide();
    //$(".rankmain").show()
});

$(".loginCenter").on("click",function(){

    var storage = window.localStorage;
    var name = $('#name').val();
    var address = $('#address').val();
    var phone = $('#phone').val().replace(/\s/g, '');
    var remarks = $('#remarks').val().replace(/\s/g, '');



    if (!/^1\d{10}$/i.test(phone)) {
        alert('手机号码格式不正确');
        return;
    }
    rankingNum = 0;
    panmum = 1;

    storage.setItem("name",name);
    storage.setItem("address",address);
    storage.setItem("phone",phone);
    storage.setItem("remarks",remarks);


    var posStr = JSON.stringify({
        settingId:"7",
        score : window.localStorage.getItem("GameScore"),
        phone : phone,
        address : address,
        name:name,
        remarks : remarks
    })

    Zepto.ajax({
        type : 'post',
        url : '/biz/skittles/submitRecord',
        data : posStr,
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            if(data.success){
                $(".rankmain").show();
                $(".loginMain").hide();
                $(".loginMsg").hide();

                storage.setItem("logined",true);

                _czc.push(﻿["_trackEvent","登记数据","点击","","",""]);
                $(".rankingNamesBox").empty();
                rankingNum = 0;
                panmum = 1;
                bpa = 0;
                ShowRanking();
                return;
            }
        },
        error : function (xhr, errorType, error) {
        }
    });
});


