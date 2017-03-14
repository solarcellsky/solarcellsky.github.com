/**
 * Created by Will on 2014/10/16.
 */
/*
    func:
        资源加载场景
    interface:
        1、修改Resources.js文件, 加载场景所需要的资源数组:
             //Loading页面所需要的资源
             var preRes = {
                loadBgLogo_png:"res/loadBgLogo.png",
                loadProcessUp_png:"res/loadProcessUp.png",
                loadProcessDown_png:"res/loadProcessDown.png"
             };

             var g_preRes = [];

             for(var i in preRes){
                g_preRes.push(preRes[i]);
             }
        2、Main.js中,接口调用:
            MyLoaderScene.preLoad(g_preRes, g_resources, function () {
                cc.director.runScene(new GameScene());
            }, this);
*/
var MyLoaderScene = cc.Scene.extend({
    _length : 0,//要加载的资源的数量
    _count : 0,//成功加载资源的数量
    bgLayer:null,
    ProcessBarUp:null,
    onEnter: function () {
        var self=this;
        cc.Node.prototype.onEnter.call(self);
    },

    onExit: function () {
        var self=this;
        cc.Node.prototype.onExit.call(self);
    },
    init : function(){
        var self=this;
        self.initLayer();
        self.initBg();
        self.initProcessBar();
        self.startLoading();
        return true;
    },
    /*
        func:
            添加cc.LayerColor
        reason:
            如果直接在cc.Scene中，添加除cc.Layer之外的子节点,
            不同时机,可能会出现闪屏现象。因此需要添加一个cc.LayerColor
    */
    initLayer:function(){
        var self=this;
        // layer
        var bgLayer = cc.LayerColor.create(cc.color(255, 255, 255));
        bgLayer.setPosition(cc.visibleRect.bottomLeft);
        self.addChild(bgLayer, 0);

        self.bgLayer= bgLayer;
    },
    /*
        func:
            加载页面的背景图
    */
    initBg:function(){
        var self= this;
        //Bg
        var bg = new cc.Sprite(preRes.loadBgLogo_jpg);
        bg.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2
        });
        self.bgLayer.addChild(bg, 1);
    },
    /*
        func:
            进度条【前景和后景】
        principle:
            锚点:从左到右【cc.p(0, 0.5)】
            位置:获取后景的尺寸(如果加载成功了以后,获取真实尺寸。否则获取的尺寸为cc.size(0, 0))
    */
    initProcessBar:function(){
        var self= this;
        var ProcessBarDown = new cc.Sprite(preRes.loadProcessDown_png);
        ProcessBarDown.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2
        });
        self.bgLayer.addChild(ProcessBarDown, 10);

        var bgSize= ProcessBarDown.getContentSize();

        self.ProcessBarUp= cc.ProgressTimer.create(cc.Sprite.create(preRes.loadProcessUp_png));
        self.ProcessBarUp.setType(cc.ProgressTimer.TYPE_BAR);
        self.ProcessBarUp.setBarChangeRate(cc.p(1, 0));
        self.ProcessBarUp.setMidpoint(cc.p(0, 1));
        self.ProcessBarUp.setPercentage(0);
        self.ProcessBarUp.setPosition(bgSize.width* 0.5, bgSize.height* 0.5);
        ProcessBarDown.addChild(self.ProcessBarUp, 11);
    },
    initWithResources: function (resources, cb) {
        var self= this;
        if(typeof resources == "string") resources = [resources];
        self.resources = resources || [];
        self._length= self.resources.length;
        self.cb = cb;
    },
    preLoading:function(preRes, resources, cb){
        var self= this;
        if(typeof preRes == "string") preRes = [preRes];
        cc.loader.load(preRes, function(){
            self.initWithResources(resources, cb);
            self.init();
        });
    },
    startLoading: function () {
        var self = this;
        var res = self.resources;
        self._count = 0;
        cc.loader.load(res, function(result, count){
            self._count++;
            self.updatePercent();
        }, function(){
            if(self.cb){
               self.cb();
            }
        });
    },

    updatePercent: function () {
        var self = this;
        var count = self._count;
        var length = self._length;
        var percent = (count / length * 100) | 0;
        percent = Math.min(percent, 100);
        self.ProcessBarUp.setPercentage(percent);
    }
});

/*
    func:
        预加载资源接口
*/
MyLoaderScene.preLoad = function(preRes, resources, cb){
    var myLoaderScene = new MyLoaderScene();
    myLoaderScene.preLoading(preRes, resources, cb);
    cc.director.runScene(myLoaderScene);
    return myLoaderScene;
};
