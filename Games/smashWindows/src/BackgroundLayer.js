var BackgroundLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        //create the background image and position it at the center of screen
        var spriteBG = new cc.Sprite(res.house_middle_png,cc.rect(0,0,640,960));
        spriteBG.anchorX=0;
        spriteBG.anchorY=0;
        this.addChild(spriteBG);
    }
});
