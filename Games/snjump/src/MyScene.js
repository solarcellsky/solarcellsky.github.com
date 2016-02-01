var MyLayer = cc.Layer.extend({
    m_bg:null,
    m_layerUpdate:null,
    ctor:function(){
        this._super();
        this.initUI();
    },

    initUI:function(){
        var sp_bg = this.m_bg = new cc.Sprite(res.bg_index_jpg);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        this.addChild(sp_bg,0);
        var size_bg = sp_bg.getContentSize();

        //开始游戏
        var sp_startNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_start_png));
        var sp_startSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_start_png));
        sp_startSelected.setOpacity(150);
        var btn_start = new cc.MenuItemSprite(sp_startNormal,sp_startSelected,this.start,this);
        btn_start.setAnchorPoint(0.5,0.5);
        btn_start.setPosition(size_bg.width*0.3,size_bg.height*0.3);

        //排行榜
        var sp_scoreListNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_scoreList_png));
        var sp_scoreListSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_scoreList_png));
        sp_scoreListSelected.setOpacity(150);
        var btn_scoreList = new cc.MenuItemSprite(sp_scoreListNormal,sp_scoreListSelected,this.scoreList,this);
        btn_scoreList.setAnchorPoint(0.5,0.5);
        btn_scoreList.setPosition(size_bg.width*0.3,size_bg.height*0.2);

        //游戏规则
        var sp_ruleNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
        var sp_ruleSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
        sp_ruleSelected.setOpacity(150);
        var btn_rule = new cc.MenuItemSprite(sp_ruleNormal,sp_ruleSelected,this.rule,this);
        btn_rule.setAnchorPoint(0.5,0.5);
        btn_rule.setPosition(size_bg.width*0.3,size_bg.height*0.1);

        var menu = new cc.Menu(btn_start,btn_scoreList,btn_rule);
        menu.setPosition(0,0);
        sp_bg.addChild(menu);
    },

    //排行榜
    scoreList:function(){
        if(g_isConnectServer) {
        //连接服务器
            var self = this;
            self.addLayerUpdate();
            GameService.rank(function () {
                self.delLayerUpdate();
                cc.container.style.display = "none";
                $("#phb").css("display", "block");
            })
        }
        else{
            //未连接服务器
            cc.container.style.display = "none";
            $("#phb").css("display", "block");
        }

        $("#btn_close").click(function(){
            $(".li_first").remove();
            
            cc.container.style.display = "block";
            $("#phb").css("display","none");
        })
    },

    //游戏规则
    rule:function(){
        var menu = new cc.Menu();
        menu.setPosition(0,0);

        //游戏规则背景
        var bg_rule = new cc.MenuItemImage(res.bg_rule_jpg,res.bg_rule_jpg,function(){},this);
        bg_rule.setAnchorPoint(0,0);
        bg_rule.setPosition(0,0);
        var size_bg = bg_rule.getContentSize();

        //关闭按钮
        var sp_closeNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_close_png));
        var sp_closeSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_close_png));
        sp_closeSelected.setOpacity(150);
        var btn_close = new cc.MenuItemSprite(sp_closeNormal,sp_closeSelected,function(){
            menu.removeFromParent(true);
        },this);
        btn_close.setAnchorPoint(0.5,0.5);
        btn_close.setPosition(size_bg.width*0.85,size_bg.height*0.785);

        menu.addChild(bg_rule,0);
        menu.addChild(btn_close,1);
        this.addChild(menu,10);
    },

    start:function(pSender){
        if(g_isConnectServer){
            var self = this;
            self.addLayerUpdate();
            GameService.startGame(function(){
                self.delLayerUpdate();
                cc.director.runScene(new PlayingScene());
            })
        }
        else{
            cc.director.runScene(new PlayingScene());
        }
    },

    addLayerUpdate:function(str_note){
        var layer = this.m_layerUpdate = new cc.LayerColor(cc.color(0,0,0,200),cc.winSize.width,cc.winSize.height);
        layer.setPosition(0,0);
        this.addChild(layer,100);

        var bg_normal = new cc.Sprite(res.bg_index_jpg);
        bg_normal.setOpacity(0);
        var bg_Selected = new cc.Sprite(res.bg_index_jpg);
        bg_Selected.setOpacity(0);
        var bg = new cc.MenuItemSprite(bg_normal,bg_Selected,function(){},this);
        bg.setAnchorPoint(0,0);
        bg.setPosition(0,0);
        var menu = new cc.Menu(bg);
        menu.setPosition(0,0);
        layer.addChild(menu,1);
        var size_bg = bg.getContentSize();

        var str_note = str_note?str_note:"数据上传中，请耐心等待...";
        var lbl_note = new cc.LabelTTF(str_note+"","Arial",40);
        lbl_note.setAnchorPoint(0.5,0.5);
        lbl_note.setPosition(size_bg.width*0.5,size_bg.height*0.35);
        bg.addChild(lbl_note);

    },

    delLayerUpdate:function(){
        if(this.m_layerUpdate){
            this.m_layerUpdate.removeFromParent(true);
            this.m_layerUpdate = null;
        }
    }
})

var MyScene = cc.Scene.extend({
    ctor:function () {
        this._super();

        var layer = new MyLayer()
        this.addChild(layer);
    }
});/**
 * Created by Administrator on 2014/12/23.
 */
