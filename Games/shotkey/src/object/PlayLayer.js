/**
 * Created by Administrator on 2015/9/14.
 */
var PlayLayer = cc.Layer.extend({

    levelConfig:null,
    currentLvConfig:null,
    objList:null,
    keyList:null,
    keyList2:null,

    box :null,
    keyNum:null,
    keyNumLabel:null,
    ball:null,
    runNode:null,
    coin:null,
    light:null,
    levelLabel:null,



    ctor:function(){
        this._super();
        this.levelConfig = cc.loader.getRes(res.level_json);

        GAME.maxLevel = this.levelConfig["level"].length;
        this.objList = [];
        this.keyList = [];
        this.keyList2 = [];

    },
    onEnter:function(){
        this._super();
        var me = this;

        if(GAME.isNew){

            //cc.director.getRunningScene().operationLayer.pause();
            var layerColor = new cc.LayerColor(cc.color(0,0,0,100),GAME.width,GAME.height);

            var detailSprite = new cc.Sprite("#detail.png");
            detailSprite.x = GAME.width/2;
            detailSprite.y = GAME.height/2;

            var closeBtn = new JY.Button("close.png");
            closeBtn.x = GAME.width/2 + 245;
            closeBtn.y = GAME.height/2 + 334;

            layerColor.addChild(detailSprite);
            layerColor.addChild(closeBtn);
            this.addChild(layerColor);

            closeBtn.addTouchEventListener(function(selector,type){
                switch(type){
                    case JY.Button.TOUCH_BEGAN:

                        layerColor.removeFromParent();
                        var scene = cc.director.getRunningScene();
                        scene.operationLayer = new OperationLayer();
                        scene.addChild(scene.operationLayer);
                        me.startGame();
                        break;
                }
            },this);
            GAME.isNew = false;
            cc.sys.localStorage.setItem("douf_game_buybuybuy_isnew",0);
        } else {
            var scene = cc.director.getRunningScene();
            scene.operationLayer = new OperationLayer();
            scene.addChild(scene.operationLayer);
            me.startGame();
        }


    },
    startGame:function(){

        this.changeLevel();


    },
    replayGame:function(){
        GAME.isDead = false;
        GAME.level = 0;
        GAME.coinCount = 0;
        cc.director.getRunningScene().resultLayer.removeFromParent(true);
        cc.director.getRunningScene().resultLayer = null;
        if(this.coin != null){
            this.coin.removeFromParent();
        }
        if(this.light != null){
            this.light.stopAllActions();
            this.light.removeFromParent();
        }




        this.changeLevel();
        this.runAction(cc.sequence(cc.delayTime(0.5),cc.callFunc(function(){
            cc.director.getRunningScene().operationLayer.resume();
        },this)));

    },
    changeLevel:function(){

        if(this.box != null){
            this.box.removeFromParent(true);
        }
        if(this.ball != null){
            this.ball.removeFromParent(true);
        }

        if(this.levelLabel == null){
            this.levelLabel = new cc.LabelTTF("LEVEL "+ (GAME.level+1).toString(),"SimHei",50);

            this.levelLabel.x = GAME.width /2;
            this.levelLabel.y = GAME.height/2 + 400;
            this.addChild(this.levelLabel);
        } else {
            this.levelLabel.setString("LEVEL "+ (GAME.level+1).toString());
        }



        this.box = new cc.Sprite("#box.png");
        this.box.x = GAME.width/2;
        this.box.y = GAME.height/2 + 150;

        this.ball = new cc.Sprite("#ball.png");
        this.ball.x = GAME.width/2;
        this.ball.y = GAME.height/2+150;

        this.runNode = new cc.Node();
        this.runNode.x = GAME.width/2;
        this.runNode.y = GAME.height/2+150;
        this.addChild(this.runNode);
        this.addChild(this.ball);
        this.addChild(this.box);





        this.currentLvConfig = this.levelConfig["level"][GAME.level];
        this.createBird();
        this.createKey();

        this.keyNumLabel = new cc.LabelTTF(this.keyNum.toString(),"SimHei",30);
        this.keyNumLabel.x = this.box.width/2;
        this.keyNumLabel.y = this.box.height/2 -30;

        this.box.addChild(this.keyNumLabel);

        this.runNode.stopAllActions();
        this.ball.stopAllActions();
        if(this.currentLvConfig["direct"]){
            this.runNode.runAction(cc.repeatForever(cc.rotateBy(1,this.currentLvConfig["speed"],0)));
            this.ball.runAction(cc.repeatForever(cc.rotateBy(1,this.currentLvConfig["speed"],0)));
        } else {
            this.runNode.runAction(cc.repeatForever(cc.rotateBy(1,-this.currentLvConfig["speed"],0)));
            this.ball.runAction(cc.repeatForever(cc.rotateBy(1,-this.currentLvConfig["speed"],0)));
        }
    },

//{"direct":true,"speed":72,"bird":2,"key":12,"minGold":15,"maxGold":18,"buyStr":"烟钱"}
    createBird:function(){
        this.cleanObj();
        var rInterval =360/ this.currentLvConfig["bird"];
        for(var i = 0,l = this.currentLvConfig["bird"];i < l;i++){
            var bird = new cc.Sprite("#bird.png");

            if(this.currentLvConfig["direct"]){
                bird.setFlippedX(true);
            } else {
                bird.setFlippedX(false);
            }
            bird.x = 0;
            bird.y = 0;

            bird.anchorY = 8;
            bird.setRotation(rInterval * i);

            this.objList.push(bird);
            this.runNode.addChild(bird);

        }
    },

    //创建钥匙
    createKey:function(){

        this.cleanKey();
        this.keyNum = this.currentLvConfig["key"];
        for(var i = 0,l = this.currentLvConfig["key"];i < l;i++){
            var key = new cc.Sprite("#key.png");
            key.x = GAME.width/2;
            key.y = GAME.height/2 -80- (l - i) * 20;
            key.anchorY = 2.1;
            this.addChild(key,i+1);
            this.keyList.push(key);
        }

    },
    cleanKey:function(){
        for(var i = 0,l = this.keyList.length;i<l;i++){
            var key = this.keyList.pop();

            key.removeFromParent(true);
        }
        for(var i = 0,l = this.keyList2.length;i<l;i++){
            var key = this.keyList2.pop();

            key.removeFromParent(true);
        }
    },
    //清理对象
    cleanObj:function(){

        for(var i = 0,l = this.objList.length;i<l;i++){
            var obj = this.objList.pop();

            obj.removeFromParent(true);
        }
    },
    shotKey:function(){
        //发射钥匙
        var currKey = this.keyList.pop();


        currKey.runAction(cc.sequence(cc.moveTo(0.1,cc.p(GAME.width/2,GAME.height/2 +150)),cc.callFunc(function(){

            //cc.audioEngine.playEffect(res.shotKey_mp3);
            //cc.audioEngine.stopMusic();
            cc.audioEngine.playMusic(res.shotKey_mp3);
            var rotate = this.runNode.rotation;
            currKey.rotation = -rotate;
            this.checkTouch(currKey);
            this.keyList2.push(currKey);
            this.keyNum --;
            this.keyNumLabel.setString(this.keyNum.toString());
            if(this.keyNum == 0){
                this.winGame();

            }
            currKey.removeFromParent();
            currKey.setPosition(cc.p(0,0));
            this.runNode.addChild(currKey);




        },this)));
        this.sortKey();
    },
            //检测是否插入成功
    checkTouch:function(currKey){
        var r = 0;//  360 +currKey.rotation % 360;
        if(!this.currentLvConfig["direct"]){
            r =  currKey.rotation % 360;
        } else {
            r =  360 +currKey.rotation % 360;
        }



        for(var i = 0, l = this.objList.length;i<l;i++){
            var obj = this.objList[i];
            var objR = obj.rotation % 360;

            if(objR > 355){
                if((r > objR -5 && r < 360) || (r >=0 && r < objR - 360+ 5)){
                    this.gameDead(currKey,obj);
                    break;
                }
            } else if(objR < 5){
                if((r  >= 0 && r< objR + 5) || (r > 360 - objR -5 && r < 360)){
                    this.gameDead(currKey,obj);
                    break;
                }
            } else {
                if(r > objR - 5 && r < objR + 5){
                    this.gameDead(currKey,obj);
                    break;
                }
            }
        }
        for(var i = 0, l = this.keyList2.length;i<l;i++){
            var key = this.keyList2[i];
            var keyR = key.rotation % 360;
           if(this.currentLvConfig["direct"]){
                keyR = 360  + keyR;
            }
            if(keyR > 355){
                if((r > keyR -5 && r < 360) || (r >=0 && r < keyR - 360+ 5)){
                    this.gameDead(currKey,key);
                    break;
                }
            } else if(keyR < 5){
                if((r  >= 0 && r< keyR + 5) || (r > 360 - keyR -5 && r < 360)){
                    this.gameDead(currKey,key);
                    break;
                }
            } else {

                if(r > keyR - 5 && r < keyR + 5){
                    this.gameDead(currKey,key);
                    break;
                }

            }
        }


    },
    gameDead:function(curr,tag){
        if(GAME.isDead){
           return;
        }
        cc.audioEngine.playMusic(res.gameOver_mp3);
        GAME.isDead = true;

        this.ball.stopAllActions();
        this.runNode.stopAllActions();
        cc.director.getRunningScene().operationLayer.pause();
        curr.setColor(cc.color(255,0,0));
        tag.setColor(cc.color(255,0,0));

        this.runAction(cc.sequence(cc.delayTime(1),cc.callFunc(function(){
            var resultStr = "";
            //var resultCoin = Math.floor(Math.random() * (this.currentLvConfig["maxGold"] - this.currentLvConfig["minGold"]) + this.currentLvConfig["minGold"]);
            resultStr = this.currentLvConfig["resultStr1"] + GAME.coinCount + this.currentLvConfig["resultStr2"];

            //this.uploadScore(resultStr);
            var scene = cc.director.getRunningScene();
            scene.resultLayer = new ResultLayer(resultStr);
            scene.addChild(scene.resultLayer);
			dp_submitScore(GAME.coinCount,resultStr);
        },this)));
    },
    uploadScore:function(){

      

    },
    sortKey:function(){
        for(var i = 0, l = this.keyList.length;i<l;i++){

            var key = this.keyList[i];
            key.runAction(cc.moveBy(0.05,cc.p(0,20)));

        }
    },
    winGame:function(){
        if(GAME.isDead){
            return;
        }
        this.ball.stopAllActions();
        this.runNode.stopAllActions();
        cc.director.getRunningScene().operationLayer.pause();

        if(this.light == null){
            this.light = new cc.Sprite("#light.png");
            this.light.x = this.box.width/2;
            this.light.y = this.box.height/2;
        }
        if(this.coin == null){
            this.coin = new cc.Sprite("#coin.png");
            this.coin.x = this.box.width/2;
            this.coin.y = this.box.height/2;
        }

        this.light.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.05),cc.fadeIn(0.05),cc.delayTime(0.05))));
        this.box.addChild(this.light);
        this.coin.sale = 0.3;
        cc.audioEngine.playMusic(res.levelwin_wav);
        var resultCoin = Math.floor(Math.random() * (this.currentLvConfig["maxGold"] - this.currentLvConfig["minGold"]) + this.currentLvConfig["minGold"]);
        var plus = new cc.LabelTTF("+" +resultCoin +"元的"+this.currentLvConfig["buyStr"]  ,"SimHei",34);
        //console.log(plus);

        plus.setFontFillColor(cc.color(247,225,2));
        plus.x = GAME.width/2;
        plus.y = GAME.height/2 + 220;
        this.addChild(plus);
        plus.runAction(cc.spawn(cc.moveBy(1.5,cc.p(0,50)),cc.sequence(cc.fadeOut(1.5),cc.callFunc(function(){
            plus.removeFromParent(true);
        },this))));
        GAME.coinCount += resultCoin;
        var shareStr =  this.currentLvConfig["resultStr1"] + GAME.coinCount + this.currentLvConfig["resultStr2"];
		this.shareStr(shareStr);
		this.uploadScore();
        this.coin.runAction(cc.sequence(cc.scaleTo(0.06,1.25,1.25),cc.scaleTo(0.1,1,1),cc.delayTime(1.5), cc.callFunc(function(){

            this.nextLevel();
        },this)));



        this.box.addChild(this.coin);

    },
    shareStr:function(resultStr){
	
       

    },

    nextLevel:function(){

        this.coin.removeFromParent();
        this.light.stopAllActions();
        this.light.removeFromParent();
        GAME.level ++ ;
        if(GAME.level == GAME.maxLevel){
            cc.audioEngine.playMusic(res.gameWin_mp3);
            var resultStr = "";
            var resultCoin = Math.floor(Math.random() * (this.currentLvConfig["maxGold"] - this.currentLvConfig["minGold"]) + this.currentLvConfig["minGold"]);
            resultStr = this.currentLvConfig["resultStr1"] + resultCoin + this.currentLvConfig["resultStr2"];

            var scene = cc.director.getRunningScene();
            scene.resultLayer = new ResultLayer(resultStr);
            scene.addChild(scene.resultLayer);
			dp_submitScore(GAME.coinCount,resultStr);
        } else {
            cc.director.getRunningScene().operationLayer.resume();

            this.changeLevel();
        }
    }
});