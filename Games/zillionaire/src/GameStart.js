/**
 * Created by Will on 2015/3/30.
 */
var GameStart = cc.Scene.extend({              //游戏开始页
    onEnter:function () {
        this._super();
        var layer = new GameStartLayer();
        this.addChild(layer);
        layer.init();
    }
});

var GameStartLayer = cc.Layer.extend({
    size:null,
    init:function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.z_imagesList,res.z_imagesPng);
        this.size = cc.director.getWinSize();
        var indexBg = new cc.Sprite(res.z_indexBG);
        indexBg.setPosition(this.size.width / 2, this.size.height/2);
        this.addChild(indexBg);

        var gameCount = new cc.LabelTTF(g_gameCount+"","微软雅黑",40);
        gameCount.color = cc.color.RED;
        gameCount.setPosition(this.size.width/2,this.size.height*0.31);
        gameCount.strokeStyle = cc.color.RED;
        gameCount.fillStyle = cc.color(0,0,0);
        this.addChild(gameCount);

        var menuStart= new cc.MenuItemImage('#btn_start.png',null,this.onPlay, this);
        menuStart.setPosition(this.size.width / 2, this.size.height*0.52);

        if(g_gameCount <= 0){
            var gameText = new cc.LabelTTF("亲,请明天再来！","微软雅黑",30);
            gameText.setPosition(this.size.width/2,this.size.height*0.25);
            gameText.color = cc.color.RED;
            this.addChild(gameText);

            menuStart.setEnabled(false);
            menuStart.setOpacity = 0;
        }
        var menuRule= new cc.MenuItemImage('#btn_rule.png',null,this.onRule, this);
        menuRule.setPosition(this.size.width / 2, this.size.height*0.41);

        this.menuItem= new cc.MenuItemImage(res.z_rule,null,this.unVisibe, this);
        this.menuItem.setPosition(this.size.width / 2, this.size.height / 2);
        this.menuItem.visible = false;

        this.menuIntro= new cc.MenuItemImage(res.z_introduce,null,this.onStart, this);
        this.menuIntro.setPosition(this.size.width / 2, this.size.height / 2);
        this.menuIntro.visible = false;

        var menu = new cc.Menu(menuRule,menuStart,this.menuItem,this.menuIntro);
        menu.setPosition(0,0);
        this.addChild(menu,1);

    },
    onRule:function (obj){
        console.log('game rule');
        this.menuItem.visible = true;
    },
    onPlay:function (){
        console.log('game start');
            this.menuIntro.visible = true;
    },
    onStart: function () {
        this.goToNextScene();
    },
    unVisibe:function(){
        this.menuItem.visible = false;
    },
    goToNextScene: function () {
        cc.director.runScene(new GameMain());
    }
});