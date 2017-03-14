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

        var img = self._img = new cc.Sprite(res.bg_index_jpg);
        img.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });
        bgLayer.addChild(this._img, 1);

        var ProcessBarDown = self.ProcessBarDown = new cc.Sprite(res.loadingBarBg_png);
        ProcessBarDown.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height * 0.5,
            anchorX: 0.5,
            anchorY: 0.5
        });
        bgLayer.addChild(this.ProcessBarDown, 2);

        var resLoadingBar = [];
        resLoadingBar.push(res.loadingBar_png);
        cc.loader.load(resLoadingBar,
            function (result, count, loadedCount) {
            }, function () {

                var ProcessBarUp = self.ProcessBarUp = new cc.Sprite(res.loadingBar_png);
                ProcessBarUp.attr({
                    x:7,
                    y:7,
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
                return true;

            });
    },

//    _initStage: function (img, centerPos) {
//        var self = this;
//        var texture2d = self._texture2d = new cc.Texture2D();
//        texture2d.initWithElement(img);
//        texture2d.handleLoadedTexture();
//        var logo = self._logo = cc.Sprite.create(texture2d);
//        logo.setScale(cc.contentScaleFactor());
//        logo.x = centerPos.x;
//        logo.y = centerPos.y;
//        self._bgLayer.addChild(logo, 10);
//    },

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
                if (self.cb)
                self.schedule(self.cb,0,0,0.2);
            });
    }
});

MyLoaderScene.preload = function(resources, cb){
    var _myLoaderScene = null;
    if(!_myLoaderScene) {
        _myLoaderScene = new MyLoaderScene();
        _myLoaderScene.init();
    }
    _myLoaderScene.initWithResources(resources, cb);

    cc.director.runScene(_myLoaderScene);
    return _myLoaderScene;
};
