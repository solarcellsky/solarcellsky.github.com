/**
 * Created by Administrator on 2015/9/17.
 */
var ResultLayer = cc.Layer.extend({

    layerColor:null,
    shareBtn:null,
    againBtn:null,
    chooseBtn:null,
    resultBg:null,
    textLabel:null,



    ctor:function(resultStr){
        this._super();

        this.layerColor = new cc.LayerColor(cc.color(0,0,0,100),GAME.width,GAME.height);

        this.shareBtn = new ccui.Button("shareBtn.png",null,null,ccui.Widget.PLIST_TEXTURE);
        this.shareBtn.x = GAME.width/2;
        this.shareBtn.y = GAME.height/2 + 0;

        this.againBtn = new ccui.Button("againBtn.png",null,null,ccui.Widget.PLIST_TEXTURE);
        this.againBtn.x = GAME.width/2;
        this.againBtn.y = GAME.height/2 + -150;

        this.chooseBtn = new ccui.Button("chooseBtn.png",null,null,ccui.Widget.PLIST_TEXTURE);
        this.chooseBtn.x = GAME.width/2;
        this.chooseBtn.setTitleText("更多游戏");
        this.chooseBtn.setTitleFontSize(42);
        this.chooseBtn.setTitleColor(cc.color(150,150,0));
        this.chooseBtn.setTitleFontName("SimHei");
        this.chooseBtn.y = GAME.height/2 -300;

        this.resultBg = new cc.Sprite("#resultBg.png");
        this.resultBg.x = GAME.width/2;
        this.resultBg.y = GAME.height/2 + 300;

        this.textLabel = new cc.LabelTTF(resultStr,"SimHei",28);
        this.textLabel.x = GAME.width/2;
        this.textLabel.y = GAME.height/2 + 300;

        this.shareBtn.addTouchEventListener(this.shareBtnListener,this);
        this.againBtn.addTouchEventListener(this.againBtnListener,this);
        this.chooseBtn.addTouchEventListener(this.chooseBtnListener,this);


    },
    shareBtnListener:function(selector,type){
        switch(type){
            case ccui.Widget.TOUCH_ENDED:
                dp_share();

                break;
        }
    },
    againBtnListener:function(selector,type){
        switch(type){
            case ccui.Widget.TOUCH_ENDED:

                cc.director.getRunningScene().playLayer.replayGame();

                break;
        }
    },
    chooseBtnListener:function(selector,type){
        switch(type){
            case ccui.Widget.TOUCH_ENDED:
				clickMore();

                break;
        }

    },
    onEnter:function(){
        this._super();
        this.addChild(this.layerColor);
        this.addChild(this.resultBg);
        this.addChild(this.textLabel);
        this.addChild(this.shareBtn);
        this.addChild(this.againBtn);
        this.addChild(this.chooseBtn);

    }


});