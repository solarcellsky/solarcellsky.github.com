/**
 * Created by Administrator on 2015/7/20.
 */
var JY = JY || {};
JY.roundNum = function(v,num){
    //Math.round((oy * Math.cos(r) - oz * Math.sin(r))*100)/100;
    return Math.round(v * Math.pow(10,num))/Math.pow(10,num)

};
JY.OperationManager = {
    init : function(target,type,func,args){
        switch(type){
            case JY.OperationManager.HALF_CLICK_HORIZONTAL:
                var listener = cc.EventListener.create({
                    event:cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches : true,
                    onTouchBegan: function(touch,event){
                        var target = event.getCurrentTarget();

                        var locationInNode = target.convertToNodeSpace(touch.getLocation());
                        var s = target.getContentSize();
                        var rect = cc.rect(0, 0, s.width, s.height);
                        if (cc.rectContainsPoint(rect, locationInNode)) {

                            var half = target.width/2;
                            if(locationInNode.x < half){

                                func.call(target,JY.OperationManager.CLICK_LEFT,args);
                            }else {
                                func.call(target,JY.OperationManager.CLICK_RIGHT,args);
                            }

                            return true;
                        }
                        return false;
                    }
                });
                cc.eventManager.addListener(listener,target);


                break;
        }
    }
};
JY.OperationManager.HALF_CLICK_HORIZONTAL = 0;
JY.OperationManager.CLICK_LEFT = 1;
JY.OperationManager.CLICK_RIGHT = 2;



JY.LoaderScene = cc.Scene.extend({
    _interval : null,
    _label : null,
    _className:"LoaderScene",
    cb: null,
    target: null,
    init : function(){
        var self = this;
        var logoWidth = 160;
        var logoHeight = 200;
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(60, 56, 74, 255));
        self.addChild(bgLayer, 0);


        fontSize = 14;
        lblHeight = -logoHeight / 2 - 10;
        var label = self._label = new cc.LabelTTF("Loading... 0%", "Arial", fontSize);
        label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, lblHeight)));
        label.setColor(cc.color(180, 180, 180));
        bgLayer.addChild(this._label, 10);
        return true;
    },
    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },
    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 0%";
        this._label.setString(tmpStr);
    },
    initWithResources: function (resources, cb, target) {
        if(cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
        this.target = target;
    },
    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                self._label.setString("Loading... " + percent + "%");
            }, function () {
                if (self.cb)
                    self.cb.call(self.target);
            });
    }
});
JY.LoaderScene.preload = function(resources, cb, target){
    var _jy = JY;
    if(!_jy.loaderScene) {
        _jy.loaderScene = new JY.LoaderScene();
        _jy.loaderScene.init();
    }
    _jy.loaderScene.initWithResources(resources, cb, target);
    cc.director.runScene(_jy.loaderScene);
    return _jy.loaderScene;
};
JY.ScoreNode = cc.Node.extend({
    _spriteBatchNode:null,
    _imageNameMap:null,
    _spriteList:null,
    _size :null,
    _direct:null,

/*{
    image0:"time_0.png",
    image1:"time_1.png",
    image2:"time_2.png",
    image3:"time_3.png",
    image4:"time_4.png",
    image5:"time_5.png",
    image6:"time_6.png",
    image7:"time_7.png",
    image8:"time_8.png",
    image9:"time_9.png"
}*/
    ctor:function(imagePath,imageNameMap,size,direct){
        this._super();
        this._direct = 0;
        this._spriteList = [];
        this._imageNameMap = imageNameMap;
        this._spriteBatchNode = new cc.SpriteBatchNode(imagePath);
        this._size = size;
        this._direct = direct;


    },
    onEnter:function(){
        this._super();
        this.addChild(this._spriteBatchNode);

    },
    showScore:function(num){
        num = num == null?"0":num;
        var baseLength = this._spriteList.length;


        if(num.length > baseLength){




            for(var i = 0, l = num.length - this._spriteList.length; i < l; i ++){
                var sprite = new cc.Sprite();

                if(this._direct == 0){
                    sprite.x = (i+baseLength) * this._size + this._size;
                } else {
                    sprite.x = -(i+baseLength) * this._size - this._size;
                }

                this.addChild(sprite);
                this._spriteList.push(sprite);
            }
        }else if(num.length < this._spriteList.length){
            for(var i = 0, l = this._spriteList.length - num.length; i < l; i ++){
                var sprite = this._spriteList.pop();
                sprite.removeFromParent(true);
            }
        }

        if(this._direct == 2){
            var mid = Math.ceil(num.length /2);
            if(num.length % 2 ==1){
                for(var i = 0,l = this._spriteList.length;i<l;i++){
                    var sprite = this._spriteList[i];
                    sprite.x = (mid-l+i) * (this._size);
                }
            } else {
                for(var i = 0,l = this._spriteList.length;i<l;i++){


                    var sprite = this._spriteList[i];
                    sprite.x = (i - mid + 0.5) * (this._size);
                }
            }
        }




        for(var i = 0, l = num.length ;i < l;i++){
            var numChar = num.charAt(i);

            var spriteFrame = null;
            if(numChar === "-"){
                spriteFrame = cc.spriteFrameCache.getSpriteFrame(this._imageNameMap["imageS"]);

            } else if (numChar === "+"){
                spriteFrame = cc.spriteFrameCache.getSpriteFrame(this._imageNameMap["imageP"]);

            } else {
                spriteFrame = cc.spriteFrameCache.getSpriteFrame(this._imageNameMap["image"+ numChar]);
            }
            var sprite = null;


            if(this._direct == 0 || this._direct ==2){
                sprite =this._spriteList[i];
            } else {
                sprite =this._spriteList[l-i-1];
            }
            sprite.setSpriteFrame(spriteFrame);
        }
    }
});



JY.ScoreNode.ALIGNMENT_LEFT = 0;
JY.ScoreNode.ALIGNMENT_RIGHT = 1;
JY.ScoreNode.ALIGNMENT_CENTER = 2;
JY.TimeKeeper = cc.Node.extend({
    _spriteBatchNode:null,

    _sprite0:null,
    _sprite1:null,
    _sprite2:null,
    _sprite3:null,
    _spriteDot0:null,
    _spriteDot1:null,
    _imageNameMap:null,
    _second:0,
    _func:null,

    /*
       {
             imageDot:"time_dot.png",
             image0:"time_0.png",
             image1:"time_1.png",
             image2:"time_2.png",
             image3:"time_3.png",
             image4:"time_4.png",
             image5:"time_5.png",
             image6:"time_6.png",
             image7:"time_7.png",
             image8:"time_8.png",
             image9:"time_9.png"
       }
     */

    ctor:function(imagePath,imageNameMap,func){
       this._super();

        this._func = func;
        //this._funcTarget = target;
        this._spriteBatchNode = new cc.SpriteBatchNode(imagePath);
        this._imageNameMap = imageNameMap;


        this._sprite0 = new cc.Sprite();
        this._sprite1 = new cc.Sprite();
        this._sprite2 = new cc.Sprite();
        this._sprite3 = new cc.Sprite();
        this._sprite0.x = -80;
        this._sprite1.x = -40;
        this._sprite2.x = 40;
        this._sprite3.x = 80;

        this._spriteDot0 = new cc.Sprite("#"+ this._imageNameMap["imageDot"]);
        this._spriteDot1 = new cc.Sprite("#"+ this._imageNameMap["imageDot"]);

        this._spriteDot0.x = 0;
        this._spriteDot0.y = 15;

        this._spriteDot1.x = 0;
        this._spriteDot1.y = -15;


    },
    onEnter:function(){
        this._super();
        this.addChild(this._spriteBatchNode);
        this._spriteBatchNode.addChild(this._sprite0);
        this._spriteBatchNode.addChild(this._sprite1);
        this._spriteBatchNode.addChild(this._sprite2);
        this._spriteBatchNode.addChild(this._sprite3);
        this._spriteBatchNode.addChild(this._spriteDot0);
        this._spriteBatchNode.addChild(this._spriteDot1);
        this._updateTimerShow();
    },
    setBaseSecond:function(second){
        this._second = second
        this._updateTimerShow();
    },
    startTimer:function(){
        this.schedule(function(){

            this._second --;
            this._updateTimerShow();

            if(this._second === 0){

                this.unschedule("timer_key");
                this._func();
            }


        },1,cc.REPEAT_FOREVER,0,"timer_key");


    },
    _updateTimerShow:function(){
        var sStr = (this._second % 60).toString();
        sStr = sStr.length ==1?"0"+ sStr : sStr;

        var mStr = Math.floor(this._second / 60).toString();
        mStr = mStr.length ==1?"0"+ mStr : mStr;

        for(var i = 0; i<2;i++){
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(this._imageNameMap["image"+mStr.charAt(i)]);
            this["_sprite"+ i].setSpriteFrame(spriteFrame);
        }

        for(var i = 0; i<2;i++){
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(this._imageNameMap["image"+sStr.charAt(i)]);
            this["_sprite"+ (i+2).toString()].setSpriteFrame(spriteFrame);
        }


    }
});
JY.Button = cc.Sprite.extend({

    _name : "button",
    _clickMode: null,
    _title:null,
    _delayTime:null,

    ctor:function(image){
        this._super();

        this.initWithSpriteFrameName(image);

    },

    init:function(){
        this._super();

    },
    onEnter:function(){
        this._super();
    },
    setDelayTime:function(delayTime){
        this._delayTime = delayTime;
    },
    //点击按钮效果类型
    setClickMode:function(mode){
        this._clickMode = mode;
    },
    //按钮上的文字
    setTitleTxt:function(str){
        if(this._title != null){
            this._title.removeFromParent(true);
        }
        this._title = new cc.LabelTTF(str);
        this._title.x = this.width/2;
        this._title.y = this.height/2;
        this.addChild(this._title);
    },
    setTitleFontName:function(font){
        if(this._title != null){
            this._title.setFontName(font);
        }
    },
    setTitleFontSize:function(size){
        if(this._title != null){
            this._title.setFontSize(size);
        }
    },
    setTitleDimensions:function(dim,height){
        if(this._title != null){
            this._title.setDimensions(dim,height);
        }
    },
    setTitleStroke:function(strokeColor,strokeSize){
        if(this._title != null){
            this._title.enableStroke(strokeColor,strokeSize);
        }
    },

    addTouchEventListener:function(func,t){
        var me = this;
        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan: function(touch,event){
                var target = event.getCurrentTarget();

                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {        //
                    /*      cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                     target.opacity = 180;*/
                    //func(target,JY.Button.TOUCH_BEGAN);

                    if(me._delayTime != null){
                        me.runAction(cc.sequence(cc.delayTime(me._delayTime), cc.callFunc(function(){
                            func.call(t,me,JY.Button.TOUCH_BEGAN);
                        },this)));

                    } else {
                        func.call(t,me,JY.Button.TOUCH_BEGAN);
                    }
                    me._clickBeganAction();

                    return true;
                }
                return false;
            },
            onTouchEnded:function(touch,event){

                var target = event.getCurrentTarget();
                func.call(t,me,JY.Button.TOUCH_ENDED);
                me._clickEndedAction();

            }
        });
        cc.eventManager.addListener(listener,this);
    },
    _clickBeganAction:function(){
        switch(this._clickMode){
            case JY.Button.CLICK_MODE_WATER_DROP:
                this.runAction(cc.sequence(cc.scaleTo(0.1,1.2,0.8),cc.scaleTo(0.1,0.8,1.2),cc.scaleTo(0.1,1.1,0.9),cc.scaleTo(0.1,0.95,1.05),cc.scaleTo(0.1,1.05,0.95),cc.scaleTo(0.1,1,1)));
                break;




        }


    },
    _clickEndedAction:function(){



    }
});
JY.Button.TOUCH_BEGAN = 1;
JY.Button.TOUCH_ENDED = 2;
//按钮点击水滴样式
JY.Button.CLICK_MODE_WATER_DROP = 11;


JY.setDesignResolutionSize =function (width, height, resolutionPolicy) {
    if( !(width > 0 || height > 0) ){
        cc.log(cc._LogInfos.EGLView_setDesignResolutionSize);
        return;
    }
    cc.view.setResolutionPolicy(resolutionPolicy);
    var policy = cc.view._resolutionPolicy;
    if (!policy){
        cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2);
        return;
    }
    policy.preApply(cc.view);
    if(cc.sys.isMobile)
        cc.view._setViewPortMeta();
    cc.view._initFrameSize();
    var bakWidth = cc.view._frameSize.width;
    var bakHeight = cc.view._frameSize.height;
    cc.view._frameSize.width = bakHeight;
    cc.view._frameSize.height = bakWidth;

    cc.view._originalDesignResolutionSize.width = cc.view._designResolutionSize.width = width;
    cc.view._originalDesignResolutionSize.height = cc.view._designResolutionSize.height = height;
    var result = policy.apply(cc.view, cc.view._designResolutionSize);
    if(result.scale && result.scale.length === 2){
        cc.view._scaleX = result.scale[0];
        cc.view._scaleY = result.scale[1];
    }
    if(result.viewport){
        var vp = cc.view._viewPortRect,
            vb = cc.view._visibleRect,
            rv = result.viewport;
        console.log(vp);
        console.log(vb);
        console.log(rv);
        vp.x = rv.x;
        vp.y = rv.y;
        vp.width = rv.width;
        vp.height = rv.height;
        vb.x = -vp.x / cc.view._scaleX;
        vb.y = -vp.y / cc.view._scaleY;
        vb.width = cc._canvas.width / cc.view._scaleX;
        vb.height = cc._canvas.height / cc.view._scaleY;
        cc._renderContext.setOffset && cc._renderContext.setOffset(vp.x, -vp.y)
    }
    var director = cc.director;
    director._winSizeInPoints.width = cc.view._designResolutionSize.width;
    director._winSizeInPoints.height = cc.view._designResolutionSize.height;
    policy.postApply(cc.view);
    cc.winSize.width = director._winSizeInPoints.width;
    cc.winSize.height = director._winSizeInPoints.height;
    if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
        director._createStatsLabel();
        director.setGLDefaultValues();
    }
    cc.view._originalScaleX = cc.view._scaleX;
    cc.view._originalScaleY = cc.view._scaleY;
    if (cc.DOM)
        cc.DOM._resetEGLViewDiv();
    console.log(cc.view._scaleX);
    console.log(cc.view._scaleY);
    console.log(cc.view._visibleRect);
    cc.visibleRect && cc.visibleRect.init(cc.view._visibleRect);
};


