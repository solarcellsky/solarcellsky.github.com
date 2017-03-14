/**
 * Created by Administrator on 2016/3/16.
 */
var GameOver= cc.LayerColor.extend({
    ctor:function() {
        this._super(cc.color(32, 32, 32));
        this.setOpacity(128);
        this.init();
    },
    init:function()
    {
        this.initPopup();
        this.initMsg();
        this.initMenu();
    },
    initPopup:function()
    {
        var popup= cc.Sprite.create(res.popup_png);
        popup.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        this.addChild(popup, 1, 1);
    },
    initMsg:function(){
        var path= "#end_1.png";
        switch (g_GameStatus)
        {
            case g_GameStatusTag.Over_Success:
                path= "#end_2.png";
                break;
            case g_GameStatusTag.Over_Fail:
                path="#end_3.png";
                break;
        }
        var msg= cc.Sprite.create(path);
        msg.setPosition(cc.p(cc.winSize.width* 0.5,cc.winSize.height* 0.5));
        this.addChild(msg, 1, 2);

        if(g_GameStatus!= g_GameStatusTag.Over_Zero){
            var size= msg.getContentSize();
            var number= cc.LabelTTF.create(g_iCurGold, "微软雅黑", 30);
            number.setColor(cc.color(255, 255, 0));
            number.setPosition(cc.p(size.width* 0.45, size.height* 0.73));
            msg.addChild(number, 1, 1);
        }
    },
    initMenu:function()
    {
        var menu= cc.Menu.create();
        menu.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.15));
        this.addChild(menu, 1, 3);

        var btn_restart= cc.MenuItemImage.create("#btn_restart.png", null, this.onRestart, this);
        btn_restart.setPosition(cc.p(cc.winSize.width* (-0.25), 0));
        menu.addChild(btn_restart);

        var btn_share= cc.MenuItemImage.create("#btn_share.png", null, this.onShare, this);
        btn_share.setPosition(cc.p(cc.winSize.width* (0.25), 0));
        menu.addChild(btn_share);
    },
    //再玩一次
    onRestart:function(pSender)
    {
        pSender.getParent().setEnabled(false);
        g_iCurGold= 1000;
        g_iWeights= 0;
        g_iBasketBallNumber= 10;
        g_GameStatus= g_GameStatusTag.Playing_Init;
        cc.director.runScene(new GameScene());
    },
    //分享好友
    onShare:function(pSender)
    {
        var menu= pSender.getParent();
        menu.setEnabled(false);

        var Menu= cc.Menu.create();
        Menu.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        this.addChild(Menu, 10, 10);

        var btn_share= cc.MenuItemImage.create(res.bg_share_png, null, function(pSender){
            menu.setEnabled(true);
            pSender.removeFromParent(true);
        }, this);
        Menu.addChild(btn_share);
    }
});