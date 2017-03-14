/**
 * Created by Administrator on 2015/9/14.
 */
var GameScene = cc.Scene.extend({

    backGroundLayer:null,
    playLayer:null,
    startLayer:null,
    operationLayer:null,

    resultLayer:null,

    ctor:function(){
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.ui_plist);

        this.backGroundLayer = new BackGroundLayer();

        //this.playLayer = new PlayLayer();
        this.startLayer = new StartLayer();


    },
    onEnter:function(){
        this._super();
        this.addChild(this.backGroundLayer);
        this.addChild(this.startLayer);

    }

});
