var babySpr = cc.Sprite.extend({
    ctor:function(_res){
        this._super(_res);

        this.initWithFile(_res);

        // this.loadListener();
    },
    addAnimation:function(_canvas){//利用cache缓存
        var texture = cc.textureCache.addImage(_canvas);//添加纹理到缓存
        
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture,cc.rect(100 * 0,0,100,148));
        sprFrames[1] = new cc.SpriteFrame(texture,cc.rect(100 * 1,0,100,148));
        var animation = new cc.Animation(sprFrames,0.3);
        var animate = new cc.animate(animation);
        var repeat = animate.repeatForever();
        this.runAction(animate);
    },
    loadListener : function(){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });
        cc.eventManager.addListener(listener, this);
    },
    onTouchBegan: function (touch, event) {
        var self = this.target;
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
        // 触摸处理
        self.onTouchDispose(touch, event);
    },
    onTouchEnded : function (touch, event) {
        //var self = this.target;
    },
    onTouchDispose : function(touch, event){//处理点击
        var target = event.getCurrentTarget();
        var pos = touch.getLocation();
        target.x = pos.x;
    }
});


var newSpr = cc.Sprite.extend({
    id:null,
    movefuc:null,
    ctor:function(res){
        this._super();
        this.initWithFile(res);
        this.id = res;
        return true;
    },
    reuse:function(res) {
        this.initWithFile(res);
        this.id = res;
    },
    unuse:function() {
        this.id = null;
    }
})