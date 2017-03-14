var MyLayer = cc.Layer.extend({
    m_bg:null,
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

        var sp_num = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("time1.png"));
        sp_num.setAnchorPoint(0.5,0.5);
        sp_num.setPosition(size_bg.width*0.5,size_bg.height*0.5);
        sp_bg.addChild(sp_num);
        sp_num.runAction(cc.fadeOut(3));

        var n = 1;
        this.schedule(function(){
            n++;
            if(n == 5)
            {
                cc.director.runScene(new PlayingScene());
                return;
            }
            sp_num.initWithSpriteFrameName("time"+n+".png");
            sp_num.setOpacity(255);
            sp_num.runAction(cc.fadeOut(3));
        },1,3,1);
        //this.scheduleOnce(function(){
        //    cc.director.runScene(new PlayingScene());
        //},1.0);
    }
})

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new MyLayer()
        this.addChild(layer);
    }
});/**
 * Created by Administrator on 2014/12/23.
 */
