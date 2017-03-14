/**
 * Created by Administrator on 2015/9/14.
 */
var BackGroundLayer = cc.Layer.extend({

    ctor:function(){
        this._super();

    },
    onEnter:function(){
        this._super();

        var sprite = new cc.Sprite(res.bg_png);
        sprite.x = GAME.width/2;
        sprite.y = GAME.height/2;
        this.addChild(sprite);
        var ad = new cc.Sprite(res.ad_png);
        ad.anchorY = 0;
        ad.x = GAME.width/2;
        ad.y = 0;
        this.addChild(ad);
    }


});