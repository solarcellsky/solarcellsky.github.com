/**
 * Created by Administrator on 2015/5/20.
 */
var MySprite = cc.Sprite.extend({
    m_isTouch:false,
    ctor:function(fileName,rect){
        this._super();
        this.initWithFile(fileName,rect);
    }
})