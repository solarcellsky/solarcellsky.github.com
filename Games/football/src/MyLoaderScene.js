/**
 * Created by Will on 2014/10/16.
 */

var MyLoaderScene = cc.Scene.extend({
    loadingBarWidth:0,
    loadingBarHeight:0,

    init : function() {
        var self = this;
        // bg
        var bgLayer = self._bgLayer = cc.LayerColor.create(cc.color(255,255,255,255), cc.winSize.width, cc.winSize.height);
        bgLayer.setPosition(cc.visibleRect.bottomLeft);
        self.addChild(bgLayer, 0);

        var resLoading = [];
        for (var i in res_loading) {
            resLoading.push(res_loading[i]);
        }

        //预加载（加载中）的资源
        cc.loader.load(resLoading,
            function (result, count, loadedCount) {

            },
            function () {
                self.initUI();
            });
    },

    initUI:function(){
        var self = this;
        var img = self._img = new cc.Sprite(res_loading.bg_loading_jpg);
        img.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        self._bgLayer.addChild(this._img, 1);

        var ProcessBarDown = self.ProcessBarDown = new cc.Sprite(res_loading.loadingBarBg_png);
        ProcessBarDown.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height * 0.11,
            anchorX: 0.5,
            anchorY: 0.5
        });
        self._bgLayer.addChild(this.ProcessBarDown, 2);

        var ProcessBarUp = self.ProcessBarUp = new cc.Sprite(res_loading.loadingBar_png);
        ProcessBarUp.attr({
            x:4,
            y:3,
            anchorX:0,
            anchorY:0,
            scaleX:1,
            scaleY:1
        });

        var size_loadingBar = self.ProcessBarUp.getContentSize()
        self.loadingBarWidth = size_loadingBar.width;
        self.loadingBarHeight = size_loadingBar.height;

        self.ProcessBarUp.setTextureRect(cc.rect(0,0,0,self.loadingBarHeight));
        self.ProcessBarDown.addChild(self.ProcessBarUp, 2);
        self.schedule(self._startLoading, 0.3);
    },

    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
    },

    onExit: function () {
        cc.Node.prototype.onExit.call(this);
    },

    /**
     * init with resources
     * @param {Array} resources
     * @param {Function|String} cb
     */
    initWithResources: function (resources, cb) {
        if(typeof resources == "string") resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;

        cc.loader.load(res,
            function (result, count, loadedCount) {
                var loadedCount1 = 1+loadedCount;
                var percent = loadedCount1 / count;
                self.ProcessBarUp.setTextureRect(cc.rect(0,0,self.loadingBarWidth*percent,self.loadingBarHeight));
            }, function () {
                if (self.cb) {
                    //加载完后停滞一会在进入游戏;
                    self.scheduleOnce(self.cb,0.2);
                }
            });
    }
});

MyLoaderScene.preload = function(resources, cb){
    var _myLoaderScene = new MyLoaderScene();
    _myLoaderScene.init();
    _myLoaderScene.initWithResources(resources, cb);

    cc.director.runScene(_myLoaderScene);
    return _myLoaderScene;
};
