
var beginState = function(e){
    function t() {
        e.call(this);
        this.initiliazed = false;


        this.learnBg = new createjs.Bitmap(StateManager.g_instance.getResult("learnBg"));
        this.addChild( this.learnBg);

        this.mainBg = new createjs.Bitmap(StateManager.g_instance.getResult("beginBg"));
        this.addChild( this.mainBg);

        this.SugarGuy1 = BitmapFactory("BigSugar02",20,360,.4,.4);
        this.addChild( this.SugarGuy1);

        this.SugarGuy2 = BitmapFactory("BigSugar02",70,400,.6,.6);
        this.addChild( this.SugarGuy2);

        this.SugarGuy3 = BitmapFactory("BigSugar02",-30,450,.7,.7);
        this.addChild( this.SugarGuy3);

        this.car = BitmapFactory("car",300,250,.8,.8);
        this.addChild( this.car);

        createjs.Tween.get(this.car,{loop:true}).to({y:240},100).to({y:250},100);

         var beginBut = new createjs.Bitmap(StateManager.g_instance.getResult("beginBut"));
        this.addChild(beginBut);
        beginBut.x = 120;
        beginBut.y = 870;

        this.learrned = false;

        this.fingerss = new createjs.SpriteSheet({
            "animations":
            {
                "touch": [0, 1, "touch",0.1]
            },
            "images": [StateManager.g_instance.getResult("finger")],
            "frames":
            {
                "height": 102,
                "width":96,
                "regX": 0,
                "regY": 0,
                "count": 64
            }
        });

        var n = this;

        var leftfinger = SpriteFactory(this.fingerss,"touch",380,500);
        this.addChild(leftfinger)
        leftfinger.visible = false;

        beginBut.addEventListener("click",function(){

            if(n.learrned){
                //createjs.Sound.play("music",{volume:0.8});

                _czc.push(﻿["_trackEvent","进入游戏","点击","进入游戏","",""]);
                StateManager.g_instance.changeState(gameState);
            }else{

                _czc.push(﻿["_trackEvent","进入教程页","点击","进入教程页","",""]);
                createjs.Tween.get(n.SugarGuy3).to({x:300,y:380},200).call(function(){
                    n.SugarGuy3.visible = false
                  //  createjs.Sound.play("effect",{volume:0.8});
                });
                createjs.Tween.get(n.SugarGuy2).wait(200).to({x:300,y:380},200).call(function(){
                    n.SugarGuy2.visible = false
                 //   createjs.Sound.play("effect",{volume:0.8});
                });
                createjs.Tween.get(n.SugarGuy1).wait(400).to({x:300,y:380},200).call(function(){
                    n.mainBg.visible = false;
                    n.learrned = true;
                    n.car.visible = false;
                    n.SugarGuy1.visible = false
                    leftfinger.visible = true;
                });

            }

        })
    }
    __extends(t, e);
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    return t;
}(createjs.Container);

var endState = function(e){
    function t() {
        e.call(this);
        this.endBg = BitmapFactory("endBg");
        this.addChild( this.endBg);

        this.endRainBow = BitmapFactory("endRainBow",0,-1000,1.5,1.5);
        this.addChild( this.endRainBow);

        this.word2 = BitmapFactory("word2",-1000,50,1,1);
        this.addChild( this.word2);
        this.word1 = BitmapFactory("word1",1000,170,1,1);
        this.addChild( this.word1);

        this.endBigSugar = BitmapFactory("endBigSugar",320,705,0,0,196,365);
        this.addChild( this.endBigSugar);


     //   createjs.Sound.play("music2",{volume:0.8});

        createjs.Tween.get(this.endRainBow).to({y:-150},500,createjs.Ease.backInOut);
        createjs.Tween.get(this.word2).wait(500).to({x:100},500,createjs.Ease.backInOut);
        createjs.Tween.get(this.word1).wait(1000).to({x:190},500,createjs.Ease.backInOut);
        createjs.Tween.get(this.endBigSugar).wait(1500).to({scaleX:1.5,scaleY:1.5},350,createjs.Ease.backInOut).to({scaleX:.8,scaleY:.8},250,createjs.Ease.backInOut).wait(1200).call(function(){

            $(".loginMsg").show();
            $(".main").show();
        });
    }
    __extends(t, e);
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    return t;
}(createjs.Container);

var gameState = function(e){
    function t() {
        e.call(this);

        this.canone = false;
        //时间bar
        this.timeage=0;
        this.rotationState = 1;
        this.pauseNow = true;

        this.mainBg =new BackGroundContainer();
        this.addChild( this.mainBg);

        this.BSContainer = new BigSugarContainer();
        this.addChild( this.BSContainer);

        this.timebar = BitmapFactory("timebar",-1,70);
        this.addChild( this.timebar);

        this.front = BitmapFactory("front",0,620);
        this.addChild( this.front);

        this.BLContainer = new BalanceContainer();
        this.addChild( this.BLContainer);

        this.NBContainer1 = new NumberContainer();
        this.addChild( this.NBContainer1);
        this.NBContainer1.x = 15;
        this.NBContainer1.y = 20;

        this.NBContainer2 = new NumberContainer();
        this.addChild( this.NBContainer2);
        this.NBContainer2.x = 125;
        this.NBContainer2.y = 40;

        this.NBContainer3 = new NumberContainer();
        this.addChild( this.NBContainer3);
        this.NBContainer3.x = 235;
        this.NBContainer3.y = 70;
        this.NBContainer3.scaleX = 0.6;
        this.NBContainer3.scaleY = 0.6;

        this.NBContainer4 = new NumberContainer();
        this.addChild( this.NBContainer4);
        this.NBContainer4.x = 300;
        this.NBContainer4.y = 80;
        this.NBContainer4.scaleX = 0.6;
        this.NBContainer4.scaleY = 0.6;

        var readyword = BitmapFactory("ready",320,500,0,0,304,98);
        this.addChild(readyword);

        var goword = BitmapFactory("go",320,500,0,0,140.5,85.5);
        this.addChild(goword);


        createjs.Tween.get(readyword).to({scaleX:1,scaleY:1},800).call(function(){
            n.removeChild(readyword);
        });
        createjs.Tween.get(goword).wait(800).to({scaleX:1,scaleY:1},800).wait(300).call(function(){
            n.removeChild(goword);
            n.pauseNow = false;
        });

        this.leftBut = BitmapFactory("leftbut",20,800);
        this.addChild( this.leftBut);

        this.rightBut = BitmapFactory("rightbut",340,800);
        this.addChild( this.rightBut);

        var n = this;

        this.leftBut.addEventListener("click",function(){
            if(n.canone)return
            n.BSContainer.mGap-=18;
        //    createjs.Sound.play("effect",{volume:0.8});
        });

        this.rightBut.addEventListener("click",function(){
            if(n.canone)return
            n.BSContainer.mGap+=18;
          //  createjs.Sound.play("effect",{volume:0.8});
        });

        this.replayBut = BitmapFactory("replay",450,40);
       // this.addChild( this.replayBut);


        this.gameScore = 0;

        this.miniSecond = 0;
        this.mminiSecond = 0;
        this.unitSecond = 0;
        this.desiousSecond = 0;



        this.replayBut.addEventListener("click",function(){
         //   createjs.Sound.stop("music");
          //  createjs.Sound.play("music",{volume:0.8});
            _czc.push(﻿["_trackEvent","再玩一次","点击","","",""]);
            StateManager.g_instance.changeState(gameState);
        });

    }
    __extends(t, e);

    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };

    t.prototype.update = function (n) {

        if(this.pauseNow)return;

        if(this.timeage%100==0){
            this.rotationState = GetRandomNum(1,2);
            this.BSContainer.setRstate(this.rotationState);
            this.mainBg.setRstate(this.rotationState);
        }

        this.miniSecond+=2;
        if( this.miniSecond == 10){
            this.mminiSecond++;
            if(this.mminiSecond == 10){
                this.mminiSecond = 0
            }
            this.NBContainer3.setNumber(this.mminiSecond);
            this.miniSecond=0;
        }
        this.NBContainer4.setNumber(this.miniSecond);
        if(this.timeage%40==0&&this.timeage!=0){
            this.unitSecond++;
            if(this.unitSecond==10){
                this.desiousSecond++;
                this.NBContainer1.setNumber(this.desiousSecond);
                this.unitSecond=0;
            }
            this.NBContainer2.setNumber(this.unitSecond);
        }

        this.BSContainer.update();

        this.BLContainer.setTriangle(this.BSContainer.mGap);
        this.timeage++;
    };

    t.prototype.gameOver = function(){

      //  createjs.Sound.stop("music");


        StateManager.g_instance.changeState(endState);

        var gamescore = this.desiousSecond*1000+this.unitSecond*100+this.mminiSecond*10+this.miniSecond;

        var storage = window.localStorage;
        storage.setItem("GameScore",gamescore+"");


        if(this.unitSecond<8){
            $(".sabcde").css("background","url(./res/e.png) no-repeat  center");
        }
        if(this.unitSecond>=8){
            $(".sabcde").css("background","url(./res/d.png) no-repeat  center");
        }


        if(this.desiousSecond>=1){
            if(this.unitSecond==0){
                $(".sabcde").css("background","url(./res/c.png) no-repeat  center");
            }
             if(this.unitSecond>=4){
                $(".sabcde").css("background","url(./res/b.png) no-repeat  center");
            }if(this.unitSecond>=8){
                $(".sabcde").css("background","url(./res/a.png) no-repeat  center");
            }
        }
        if(this.desiousSecond>=2){
            $(".sabcde").css("background","url(./res/s.png) no-repeat  center");
        }
        $(".sabcde").css("background-size","90% 90%");
        var endScoreStr = this.desiousSecond+''+this.unitSecond+'"'+this.mminiSecond+''+this.miniSecond+'';
        $("#endScore").html(endScoreStr);

        var wendScoreStr = this.desiousSecond+''+this.unitSecond+'"'+this.mminiSecond+''+this.miniSecond+'';
        if(this.desiousSecond==0){
            wendScoreStr = this.unitSecond+'"'+this.mminiSecond+''+this.miniSecond+'';
        }

        Zepto.ajax({
            type : 'get',
            url : "/biz/common/getRank?settingId=7&score="+gamescore,
            data :"",
            contentType : "application/json",
            dataType : 'json',
            beforeSend : function () {
            },
            success : function (data, status, xhr) {
                var present = (((data.data.total - data.data.rank)/data.data.total)*100|0)+"";

                if(data.data.rank>data.data.total){
                    present = "0";
                }
                if(data.data.rank==1){
                    present = "100";
                }

                $("#mainWordBoxRanking").html(data.data.rank);
                $("#mainWordBoxPresent").html(present+"%");
                console.log(present);

                if(data.success){
                    wx.ready(function () {
                        //分享给朋友
                        wx.onMenuShareAppMessage({
                            title: "直立吧！彩虹君等你来挑战！",
                            desc: "我的彩虹糖坚持了"+wendScoreStr+"秒不倒，打败了"+present+"%的人，你够我持久吗？！",
                            link: 'http://m.muzhibuluo.com/biz/skittles_s01e01/startup',
                            imgUrl: 'http://m.muzhibuluo.com/biz/skittles_s01e01/res/logo.jpg',
                            trigger: function (res) {
                            },
                            success: function (res) {
                                _czc.push(﻿["_trackEvent","分享给朋友","成功","游戏结束时","",""]);
                            },
                            cancel: function (res) {
                                _czc.push(﻿["_trackEvent","分享给朋友","取消分享","游戏结束时","",""]);
                            },
                            fail: function (res) {
                            }
                        });
                        //分享到朋友圈
                        wx.onMenuShareTimeline({
                            title: "我的彩虹糖坚持了"+wendScoreStr+"秒不倒，打败了"+present+"%的人，你够我持久吗？！",
                            link: 'http://m.muzhibuluo.com/biz/skittles_s01e01/startup',
                            imgUrl: 'http://m.muzhibuluo.com/biz/skittles_s01e01/res/logo.jpg',
                            trigger: function (res) {
                            },
                            success: function (res) {
                                _czc.push(﻿["_trackEvent","分享到朋友圈","成功","游戏结束时","",""]);
                            },
                            cancel: function (res) {
                                _czc.push(﻿["_trackEvent","分享到朋友圈","取消分享","游戏结束时","",""]);
                            },
                            fail: function (res) {
                            }
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


    return t;
}(createjs.Container);
