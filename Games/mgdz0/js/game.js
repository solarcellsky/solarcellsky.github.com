var stage,bglayer,gamelayer,dog,cat,fight,pointtxt,signNum,falllayer,startlayer;
var issubmit=false;
var imglist = {};
var imgData = new Array(
    { name: "gamebg", path: "./img/bg.jpg" },
    { name: "rule", path: "./img/rule.png" },
    { name: "dog", path: "./img/dog.png" },
    { name: "fight", path: "./img/fight.png" },
    { name: "cat", path: "./img/cat.png" },
    { name: "icons", path: "./img/icons.png" },
    { name: "ppx", path: "./img/ppx.png" }
)

var gameData = {}
var myMusic = new Audio();
    myMusic.src = "./img/bg.mp3";
    myMusic.loop = "loop";

function resetgameData(){
    gameData.point = 0;
    gameData.touchstate = "end";
    gameData.moveSpeed = 6;
    gameData.fallSpeed = 3;
    gameData.isfight = false;
    gameData.pointindex = 0;
    gameData.addIndex = 0;
}

function playKiss() {
    var Kiss = new Audio();
    Kiss.src = "./img/kiss.mp3";
    Kiss.play();
}

function playMusic() {
    myMusic.play();
}

function stopMusic() {
    myMusic.pause();
}

function main(){
    var _w_ = $(window).width();
    var _h_ = $(window).height();
    LGlobal.setDebug(true);
    LGlobal.preventDefault = false;
    //全屏操作
    LGlobal.align = LStageAlign.TOP_MIDDLE;
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
    LSystem.screen(LStage.FULL_SCREEN);

    //添加舞台
    stage = new LSprite();
    addChild(stage);
    $('#stage_canvas').css({
     'width': _w_,
     'height': _h_
    });
    var _w = $('#stage_canvas').width();
    var _h = $('#stage_canvas').height();
    $('._loadCover').css({
     'width': _w,
     'height': _h
    });

    LLoadManage.load(
        imgData,
        function(progress){
            // loadinglayer.setProgress(progress);
        },
        function(result){
            imglist = result;
            bgInit();
            gamelayer = new LSprite();
            gamelayer.graphics.drawRect(0,"#000",[0,0,640,960]);
            stage.addChild(gamelayer);
            startInit();
        }
    );
    
}

//背景
function bgInit(){
    bglayer = new LSprite();
    stage.addChild(bglayer);

    var bgpic = new LBitmap(new LBitmapData(imglist["gamebg"]));
    bglayer.addChild(bgpic);

    var cloud1 = new LBitmap(new LBitmapData(imglist["icons"],469,4,204,64));
    cloud1.x = 0;
    cloud1.y = 30;
    bglayer.addChild(cloud1);
    LTweenLite.to(cloud1,3,{x:50,loop:true,ease:LEasing.None.easeIn}).to(cloud1,3,{x:0,ease:LEasing.None.easeIn});

    var cloud2 = new LBitmap(new LBitmapData(imglist["icons"],492,75,100,30));
    cloud2.x = 320;
    cloud2.y = 20;
    bglayer.addChild(cloud2);
    LTweenLite.to(cloud2,5,{x:280,loop:true,ease:LEasing.None.easeIn}).to(cloud2,5,{x:320,ease:LEasing.None.easeIn});

    var cloud3 = new LBitmap(new LBitmapData(imglist["icons"],308,80,170,35));
    cloud3.x = 410;
    cloud3.y = 120;
    bglayer.addChild(cloud3);
    LTweenLite.to(cloud3,4,{x:450,loop:true,ease:LEasing.None.easeIn}).to(cloud3,4,{x:410,ease:LEasing.None.easeIn});

    var car1 = new LSprite();
    car1.pic = new LBitmap(new LBitmapData(imglist["icons"],0,0,298,115));
    car1.addChild(car1.pic);
    car1.ad = new LBitmap(new LBitmapData(imglist["ad"]));
    car1.ad.x = 17;
    car1.ad.y = 12;
    car1.addChild(car1.ad);
    car1.x = -300;
    car1.y = 700;
    bglayer.addChild(car1);
    LTweenLite.to(car1,12,{x:960,loop:true,ease:LEasing.None.easeIn,onComplete:function(){
        car1.scaleX = -1;
    }}).to(car1,12,{x:-300,loop:true,ease:LEasing.None.easeIn,onComplete:function(){
        car1.scaleX = 1;
    }})

    var car2 = new LBitmap(new LBitmapData(imglist["icons"],308,0,156,67));
    car2.x = -160;
    car2.y = 800;
    bglayer.addChild(car2);
    LTweenLite.to(car2,6,{x:1500,loop:true,ease:LEasing.None.easeIn,onComplete:function(){
        car2.scaleX = -1;
    }}).to(car2,6,{x:-400,loop:true,ease:LEasing.None.easeIn,onComplete:function(){
        car2.scaleX = 1;
    }})
}

function startInit(){
    
    startlayer = new LSprite();
    stage.addChild(startlayer);

    var title = new LBitmap(new LBitmapData(imglist["icons"],2,135,393,271));
    title.x = 124;
    title.y = 50;
    startlayer.addChild(title);

    var startbt = new LButton(new LBitmap(new LBitmapData(imglist["icons"],402,129,514,100)));
    startbt.x = 63;
    startbt.y = 700;
    startlayer.addChild(startbt);
    startbt.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        rule.visible = true;
        startbt2.visible = true;
    })

    var rule = new LBitmap(new LBitmapData(imglist["rule"]));
    rule.visible = false;
    startlayer.addChild(rule);

    var startbt2 = new LSprite();
    startbt2.graphics.drawRect(0,"#000",[0,0,580,660],true,"rgba(0,0,0,0)");
    startbt2.x = 40;
    startbt2.y = 150;
    startbt2.visible = false;
    startlayer.addChild(startbt2);
    startbt2.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        rule.visible = false;
        startbt2.visible = false;
        startlayer.visible = false;
        gameInit();
    })
}

function gameInit(){
    playMusic();
    resetgameData();
    LGlobal.preventDefault = true;

    dog = new Dog();
    dog.x = 0;
    dog.y = 600;
    gamelayer.addChild(dog);

    cat = new Cat();
    cat.x = 554;
    cat.y = 600;
    gamelayer.addChild(cat);

    fight = new Fight();
    fight.x = 234;
    fight.y = 600;
    gamelayer.addChild(fight);

    pointtxt = new LTextField();
    pointtxt.text = gameData.point+"次";
    pointtxt.font = "微软雅黑";
    pointtxt.color = "#000";
    pointtxt.size = 36;
    pointtxt.textAlign = "right";
    pointtxt.x = 610;
    pointtxt.y = 15;
    gamelayer.addChild(pointtxt);

    var ppx = new LButton(new LBitmap(new LBitmapData(imglist["ppx"],0,0,719,111)));
    ppx.x = 0;
    ppx.y = 850;
    gamelayer.addChild(ppx);
    ppx.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        alert('OK')
    })

    signNum = new LBitmap(new LBitmapData(imglist["icons"],608,80,51,32));
    signNum.x = 290;
    signNum.y = 580;
    signNum.alpha = 0;
    gamelayer.addChild(signNum);

    falllayer = new LSprite();
    gamelayer.addChild(falllayer);

    gamelayer.addEventListener(LEvent.ENTER_FRAME,onframe);

    gamelayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        gameData.touchstate = "start"; 
    })
    gamelayer.addEventListener(LMouseEvent.MOUSE_UP,function(){
        gameData.touchstate = "end";
    })
}
function onframe(){
    if(gameData.addIndex --< 0){
        gameData.addIndex = 90;
        global.addfalls();
    }

    dog.onframe();
    cat.onframe();

    if(gameData.touchstate == "end"){
        dog.x -= gameData.moveSpeed;
        cat.x += gameData.moveSpeed;
        if(dog.x <= 0){
            dog.x = 0;
        }
        if(cat.x >= 554){
            cat.x = 554;
        }
        gameData.isfight = false;
    }else if(gameData.touchstate == "start"){
        dog.x += gameData.moveSpeed;
        cat.x -= gameData.moveSpeed;
        if(dog.x >= 234){
            dog.x = 234;
            gameData.isfight = true;
        }
        if(cat.x <= 320){
            cat.x = 320;
        }
    }

    if(gameData.isfight){
        if(!fight.visible){
            //fight.addShape(LShape.VERTICES,[[48,6],[86,2],[102,4],[138,22],[166,46],[162,92],[4,91],[4,67]]);
        }
        fight.visible = true;
        dog.visible = false;
        cat.visible = false;

        if(gameData.pointindex --< 0){
            playKiss();
            gameData.pointindex = 50;
            gameData.point ++;
            pointtxt.text = gameData.point+"次";
            global.signmove();
        }
    }else{
        fight.visible = false;
        dog.visible = true;
        cat.visible = true;
        fight.clearShape();
    }

    for(var key = falllayer.childList.length-1;key >= 0; key--){
        var _child = falllayer.childList[key];
        if(_child.y > 1000){
            falllayer.removeChild(_child);
            continue;
        }
        if(_child.hitTestObject(dog) || _child.hitTestObject(cat)){
            global.gameOver();
        }
        _child.onframe();
    }
}

var global = {
    signmove:function(){
        signNum.alpha = 1;
        LTweenLite.to(signNum,0.2,{y:540,alpha:0,ease:LEasing.None.easeIn,onComplete:function(){
            signNum.alpha = 0;
            signNum.y = 580;
        }})
    },
    addfalls:function(){
        var type = Math.floor(Math.random()*3);
        var pos = Math.floor(Math.random()*3);
        var movetype = Math.random()>0.2?"slow":"fast";
        var newfall1 = new Falls(type,movetype);
        falllayer.addChild(newfall1);
        var newfall2 = new Falls(type,movetype);
        falllayer.addChild(newfall2);
        if(pos == 0){
            newfall1.x = 273;
            newfall2.x = 364;
        }else if(pos == 1){
            newfall1.x = 182;
            newfall2.x = 455;
        }else if(pos == 2){
            newfall1.x = 91;
            newfall2.x = 546;
        }
    },
    gameOver:function(){
        var _w = $('#stage_canvas').width();
        var _h = $('#stage_canvas').height();
        $('.cover').css({
            'width': _w,
            'height': _h
        });
            
        stopMusic();
        LGlobal.preventDefault = false;
        gamelayer.removeAllEventListener();
        var result = "";
        if(gameData.point <= 10){
            result = "挑逗渣渣";
        }else if(gameData.point <= 20 && gameData.point > 10){
            result = "挑逗喽啰";
        }else if(gameData.point <= 30 && gameData.point > 20){
            result = "挑逗精英";
        }else if(gameData.point <= 40 && gameData.point > 30){
            result = "挑逗大师";
        }else if(gameData.point <= 50 && gameData.point > 40){
            result = "挑逗狂魔";
        }else if(gameData.point > 50){
            result = "挑逗之神";
        }
        $("#result").html(result);
        $("#point").html(gameData.point);
        $("#over").fadeIn(500);
        if(!issubmit){
            issubmit=true;
            dp_submitScore(gameData.point);
        }
    }
}