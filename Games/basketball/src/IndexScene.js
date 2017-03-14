/**
 * Created by Administrator on 2016/3/15.
 */
var IndexScene= cc.Scene.extend({
    onEnter:function()
    {
        var self= this;
        self._super();
        cc.spriteFrameCache.addSpriteFrames(res.basketball_plist, res.basketball_png);
        g_GameStatus= g_GameStatusTag.Ready;
        self.addChild(new IndexLayer(), 1, 1);
    }
});

var IndexLayer= cc.Layer.extend({
    ctor:function()
    {
        var self= this;
        self._super();
        self.init();
    },
    init:function()
    {
        var self= this;
        self.initBg();
        self.initMenu();
    },
    //背景
    initBg:function()
    {
        var self= this;
        var bg= cc.Sprite.create(res.bg_index_jpg);
        bg.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        self.addChild(bg, 1, 1);
    },
    //菜单
    initMenu:function()
    {
        var self= this;
        var menu= cc.Menu.create();
        menu.setPosition(cc.p(0, 0));
        self.addChild(menu, 2, 2);

        //开始游戏
        var btn_start= cc.MenuItemImage.create("#btn_start.png", null, self.onStartGame, self);
        btn_start.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        menu.addChild(btn_start, 1, 1);

        //游戏规则
        var btn_rules= cc.MenuItemImage.create("#btn_rules.png", null, self.onRules, self);
        btn_rules.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.35));
        menu.addChild(btn_rules, 1, 2);
    },
    //开始游戏
    onStartGame:function(pSender)
    {
        pSender.setEnabled(false);
        g_GameStatus= g_GameStatusTag.Playing_Init;
        cc.director.runScene(new GameScene());
    },
    //游戏规则
    onRules:function(pSender)
    {
        pSender.getParent().setEnabled(false);
        var self= this;
        self.addRules();
    },
    //添加游戏规则
    addRules:function()
    {
        var self= this;
        var rules= cc.Sprite.create(res.bg_rules_jpg);
        rules.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        self.addChild(rules, 3);

        //返回按钮
        var menu= cc.Menu.create();
        menu.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.1));
        rules.addChild(menu, 1, 1);

        var btn_return= cc.MenuItemImage.create("#btn_return.png", null, self.onReturn, self);
        menu.addChild(btn_return);
    },
    //游戏规则-返回首页
    onReturn:function(pSender)
    {
        var scene= cc.director.getRunningScene();
        scene.removeAllChildren();
        scene.addChild(new IndexLayer(), 1, 1);
    }
});