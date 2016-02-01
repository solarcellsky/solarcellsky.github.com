/**
 * Created by Will on 2015/3/30.
 */
var GameEnd = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var mainLayer = new GameEndLayer();
        this.addChild(mainLayer);
    }
});

var GameEndLayer = cc.LayerColor.extend({
    ctor:function () {
        this._super(cc.color(30,30,30,180));
        this.init();
    },
    init: function () {
        if(prize == 4){
            var gameOverPng = new cc.Sprite(res.z_gameOver);
            gameOverPng.setPosition(cc.winSize.width/2,cc.winSize.height*0.57);
            this.addChild(gameOverPng);

            var menuReplay= new cc.MenuItemImage('#Playagain-but.png',null,this.onReplay, this);
            menuReplay.setPosition(cc.winSize.width * 0.3, cc.winSize.height*0.2);

            var menuShare= new cc.MenuItemImage('#share-but.png',null,this.onShare, this);
            menuShare.setPosition(cc.winSize.width * 0.7, cc.winSize.height*0.2);

            sharePng = new cc.MenuItemImage('res/share.png',null,this.disShow, this);
            sharePng.setPosition(cc.winSize.width*0.5, cc.winSize.height *0.5);
            sharePng.visible = false;

            var menu = new cc.Menu(menuReplay,menuShare,sharePng);
            menu.setPosition(0,0);
            this.addChild(menu,1);
        }else{
            GameControler.gameOver();
        }
    },
    onReplay: function () {
        if(g_gameCount>0){
            cc.director.runScene(new GameMain());
        }else{
            if(typeof noCount == "undefined"){
                noCount = new cc.MenuItemImage('res/yindao2.png',null,this.onCount, this);
                noCount.setPosition(cc.winSize.width*0.5, cc.winSize.height *0.5);

                var menu = new cc.Menu(noCount);
                menu.setPosition(0,0);
                this.addChild(menu,1);
            }else{
                noCount.visible = true;
            }
        }
    },
    onShare: function () {
        sharePng.visible = true;
    },
    disShow: function () {
        sharePng.visible = false;
    },
    onCount: function () {
        noCount.visible = false;
    }
});