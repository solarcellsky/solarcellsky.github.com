
var MyLayer = cc.Layer.extend({
    m_bg: null,
    m_layerUpdate: null,
    m_drawNode: null,
    m_listener: null,
    m_rectFoot: null,
    m_point0: null,
    m_point1: null,
    m_point2: null,
    m_arrayAct: [],
    ctor: function () {
        this._super();
        this.initUI();
    },

    initUI: function () {
        var sp_bg = this.m_bg = new cc.Sprite(res.bg_index_jpg);
        sp_bg.setAnchorPoint(0, 0);
        sp_bg.setPosition(0, 0);
        this.addChild(sp_bg, 0);
        var size_bg = sp_bg.getContentSize();

        var menu = new cc.Menu();
        menu.setPosition(0, 0);
        sp_bg.addChild(menu, 0);

        //摇一摇按钮
        var sp_startN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_start_png));
        var sp_startS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_start_png));
        sp_startS.setOpacity(150);
        var btn_shake = new cc.MenuItemSprite(sp_startN, sp_startS, this.start, this);
        btn_shake.setAnchorPoint(0.5, 0.5);
        btn_shake.setPosition(size_bg.width * 0.5, size_bg.height * 0.6);
        menu.addChild(btn_shake);

        //游戏规则按钮
        var sp_ruleN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
        var sp_ruleS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
        sp_ruleS.setOpacity(150);
        var btn_rule = new cc.MenuItemSprite(sp_ruleN, sp_ruleS, this.rule, this);
        btn_rule.setAnchorPoint(0.5, 0.5);
        btn_rule.setPosition(size_bg.width * 0.5, size_bg.height * 0.5);
        menu.addChild(btn_rule);

  //      this.addLayerUpdate();
    },

    //开始游戏
    start: function () {
        hideDiv();
        
        var sp_bg = this.m_bg;
        sp_bg.removeAllChildren(true);
        sp_bg.initWithFile(res.bg_guide_jpg);
        sp_bg.setAnchorPoint(0,0);
        var size_bg = sp_bg.getContentSize();

        var menu = new cc.Menu();
        menu.setPosition(0, 0);
        sp_bg.addChild(menu);

        var sp_knowN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_know_png));
        var sp_knowS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_know_png));
        sp_knowS.setOpacity(150);
        var btn_know = new cc.MenuItemSprite(sp_knowN, sp_knowS, function () {
            cc.director.runScene(new PlayingScene());
        }, this);
        btn_know.setAnchorPoint(0.5, 0.5);
        btn_know.setPosition(size_bg.width * 0.5, size_bg.height * 0.08);
        menu.addChild(btn_know, 1);

    },

    //我的奖品
    award: function () {
        var menu = new cc.Menu();
        menu.setPosition(0, 0);
        this.addChild(menu, 10);

        var bg_award = new cc.MenuItemImage(res.bg_award_jpg, res.bg_award_jpg, function () {
        }, this);
        bg_award.setAnchorPoint(0, 0);
        bg_award.setPosition(0, 0);
        menu.addChild(bg_award, 0);

        var sp_returnN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        var sp_returnS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        sp_returnS.setOpacity(150);
        var btn_return = new cc.MenuItemSprite(sp_returnN, sp_returnS, function () {
            menu.removeFromParent(true);
        }, this);
        btn_return.setAnchorPoint(0.5, 0.5);
        btn_return.setPosition(cc.winSize.width * 0.5, cc.winSize.height * 0.08);
        menu.addChild(btn_return, 1);
    },

    //游戏规则
    rule: function () {
        var menu = new cc.Menu();
        menu.setPosition(0, 0);
        this.addChild(menu, 10);

        var bg_award = new cc.MenuItemImage(res.bg_rule_jpg, res.bg_rule_jpg, function () {
        }, this);
        bg_award.setAnchorPoint(0, 0);
        bg_award.setPosition(0, 0);
        menu.addChild(bg_award, 0);

        var sp_returnN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        var sp_returnS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        sp_returnS.setOpacity(150);
        var btn_return = new cc.MenuItemSprite(sp_returnN, sp_returnS, function () {
            menu.removeFromParent(true);
        }, this);
        btn_return.setAnchorPoint(0.5, 0.5);
        btn_return.setPosition(cc.winSize.width * 0.5, cc.winSize.height * 0.08);
        menu.addChild(btn_return, 1);
    },

    addLayerUpdate: function (str_note) {
        var layer = this.m_layerUpdate = new cc.LayerColor(cc.color(0, 0, 0, 150), cc.winSize.width, cc.winSize.height);
        layer.setPosition(0, 0);
        this.addChild(layer, 100);
        var size_bgLayer = layer.getContentSize();

        var bg_normal = new cc.Sprite(res.bg_index_jpg);
        bg_normal.setOpacity(0);
        var bg_Selected = new cc.Sprite(res.bg_index_jpg);
        bg_Selected.setOpacity(0);
        var bg = new cc.MenuItemSprite(bg_normal, bg_Selected, function () {
        }, this);
        bg.setAnchorPoint(0, 0);
        bg.setPosition(0, 0);
        var menu = new cc.Menu(bg);
        menu.setPosition(0, 0);
        layer.addChild(menu, 1);
        var size_bg = bg.getContentSize();

        //var str_note = str_note?str_note:"数据上传中，请耐心等待...";
        //var lbl_note = new cc.LabelTTF(str_note+"","Arial",40);
        //lbl_note.setAnchorPoint(0.5,0.5);
        //lbl_note.setPosition(size_bg.width*0.5,size_bg.height*0.4);
        //bg.addChild(lbl_note,0);

    },


    delLayerUpdate: function () {
        if (this.m_layerUpdate) {
            this.m_layerUpdate.removeFromParent(true);
            this.m_layerUpdate = null;
        }
    }
});

var MyScene = cc.Scene.extend({

    ctor:function () {
        this._super();

        var layer = new MyLayer()
        this.addChild(layer);
    }
});/**
 * Created by Administrator on 2014/12/23.
 */
