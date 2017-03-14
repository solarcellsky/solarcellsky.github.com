/**
 * Created by Administrator on 14-12-9.
 */

var GameLayer = cc.Layer.extend({
    GameManager:null,//游戏管理器
    ctor:function(){
        var self= this;
        self._super();
        self.init();
    },
    init:function(){
        var self= this;
        self.initBg();
        self.initGameManager();
        self.initMenu();
        self.initStatus();
        if(g_GameStatusTag.Playing_Continue== g_GameStatus){
            g_GameStatus= g_GameStatusTag.Playing_Init;
            self.GameManager.addHand();
            self.GameManager.addListener();
        }
    },
    //添加游戏背景
    initBg:function()
    {
        var self= this;

        var bg= cc.Sprite.create(res.bg_main_jpg);
        bg.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        self.addChild(bg, 0, 0);
    },
    //游戏管理器
    initGameManager:function()
    {
        var self= this;
        var GameManager= new GameManage();
        self.addChild(GameManager, 1, 1);

        self.GameManager= GameManager;
    },
    //添加状态栏-剩余筹码显示
    initStatus:function()
    {
        var self= this;
        var label_weights= cc.LabelTTF.create(((g_iCurGold<= 0)?"0":g_iCurGold), "微软雅黑", 45);
        label_weights.setPosition(cc.p(cc.winSize.width* 0.6, cc.winSize.height* 0.96));
        label_weights.setColor(cc.color(255, 255, 0));
        self.addChild(label_weights, 1, 3);
    },
    //添加砝码按钮
    initMenu:function()
    {
        var self= this;
        var menu= cc.Menu.create();
        menu.setPosition(cc.p(0, cc.winSize.height* 0.06));
        self.addChild(menu, 1, 2);

        //几个砝码
        for(var i=0; i< g_arrWeights.length; ++i)
        {
            var n_path= g_arrWeights[i][g_NormalPicID];
            var s_path= g_arrWeights[i][g_SelectPicID];
            if(i== 0){
                n_path= g_arrWeights[i][g_SelectPicID];
                s_path= g_arrWeights[i][g_NormalPicID];
            }
            var item= cc.MenuItemImage.create(
                n_path,
                s_path,
                null,
                self.onSelected, self);
            var size= item.getContentSize();
            item.setPosition(cc.p(cc.winSize.width* 0.02+ size.width* (0.5+ i), 0));
            menu.addChild(item, 1, (i+ 1));
        }
        g_iWeights= 100;
        if(g_GameStatusTag.Playing_Init== g_GameStatus){
            menu.setEnabled(false);
            self.initGuide();
        }
    },
    //添加游戏引导
    initGuide:function()
    {
        var self= this;
        var guide= cc.Sprite.create(res.GameGuide_png);
        guide.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        self.addChild(guide, 4);

        var size= guide.getContentSize();

        //菜单
        var menu= cc.Menu.create();
        menu.setPosition(cc.p(size.width* 0.5, size.height* 0.05));
        guide.addChild(menu, 1, 1);

        var btn_know= cc.MenuItemImage.create("#btn_know.png", null, self.onKnow, self);
        menu.addChild(btn_know);
    },
    onKnow:function(pSender)
    {
        if(g_GameStatusTag.Playing_Init!= g_GameStatus) return;
        var self= this;
        var guide= pSender.getParent().getParent();
        guide.removeFromParent(true);
        this.getChildByTag(2).setEnabled(true);

        self.GameManager.addHand();
        self.GameManager.addListener();
    },
    //砝码
    onSelected:function(pSender)
    {
        var self= this;
        if((g_GameStatusTag.Playing_Init!= g_GameStatus)&&(g_GameStatusTag.Playing_Continue!= g_GameStatus)) return;
        if(self.judge(g_arrWeights[pSender.tag- 1][g_valueID])){
            //是否为更换筹码
            var bChange= ((g_iWeights== 0)?false:true);
            //更新筹码
            if(pSender.tag== g_arrWeights.length){//Max
                g_iWeights= g_iCurGold;
            }else{
                g_iWeights= g_arrWeights[pSender.tag- 1][g_valueID];
            }

            if(!bChange){
                //开始颠球
                self.GameManager.addHand();
                self.GameManager.addListener();
            }else{
                //还原所有筹码状态
                self.initWeights(pSender.getParent());
            }
            //设置某个被选中的筹码状态
            self.setItemSelected(pSender);
            g_GameStatus= g_GameStatusTag.Playing_Init;
        }
    },
    //判断能否选择这个筹码
    judge:function(gold)
    {
        if(g_iCurGold< gold)
        {
            alert("您的金币数不足！");
            return false;
        }
        return true;
    },
    //将所有砝码初始化
    initWeights:function(menu)
    {
        for(var i=0; i< g_arrWeights.length; ++i)
        {
            var item= menu.getChildByTag((i+1));
            item.setNormalSpriteFrame(g_arrWeights[i][g_NormalPicID]);
            item.setSelectedSpriteFrame(g_arrWeights[i][g_SelectPicID]);
        }
    },
    //设置某一个按钮为选中状态
    setItemSelected:function(pSender)
    {
        pSender.setNormalSpriteFrame(g_arrWeights[pSender.tag- 1][g_SelectPicID]);
        pSender.setSelectedSpriteFrame(g_arrWeights[pSender.tag- 1][g_NormalPicID]);
    },
    updateScore:function(times, tag)
    {
        var self= this;
        if(tag== 1){//入蓝
            g_iCurGold+= Math.floor(times* g_iWeights);
            g_iWeights*= times;
        }else{
            g_iCurGold-= (g_iWeights);
        }
        self.getChildByTag(3).setString(g_iCurGold);
    },
    //游戏结束
    GameOver:function()
    {
        if(g_iBasketBallNumber== 0){
            if(g_iCurGold>= 1000){
                g_GameStatus= g_GameStatusTag.Over_Success;
            }else{
                g_GameStatus= g_GameStatusTag.Over_Fail;
            }
            var gameScene= cc.director.getRunningScene();
            gameScene.addChild(new GameOver(), 2, 2);
        }else{
            if(g_iCurGold== 0){
                g_GameStatus= g_GameStatusTag.ZERO;
                var gameScene= cc.director.getRunningScene();
                gameScene.addChild(new GameOver(), 2, 2);
            }else{
                g_iWeights= 0;
                g_GameStatus= g_GameStatusTag.Playing_Continue;
                cc.director.runScene(new GameScene());
            }
        }

    }
});

var GameScene = cc.Scene.extend({
    onEnter:function(){
        var self= this;
        self._super();
        self.addChild(new GameLayer(), 1, 1);
    }
});