(function(d, a, c) {
    var b;
    d.properties = {
        width: 550,
        height: 400,
        fps: 30,
        color: "#FFFFFF",
        manifest: [{
            src: gameCore.PATH + "images/scene.png",
            id: "scene"
        }]
    }
})(loaderLib = loaderLib || {},
loaderImages = loaderImages || {},
createjs = createjs || {});
var loaderLib, loaderImages, createjs; (function() {
    function a() {}
    var b = createjs.extend(a, createjs.Container);
    b.resize = function(c, d) {};
    gameCore.Component = a
})(); (function() {
    function a() {
        this.initialize();
        this.initUI()
    }
    var b = createjs.extend(a, gameCore.Component);
    b.initUI = function() {
        var d = new createjs.Sprite();
        var c = new createjs.SpriteSheet()
    };
    b.resize = function(c, d) {};
    b.start = function() {
        new createjs.ButtonHelper(this);
        this.on("click",
        function() {
            gameCore.playSound("song");
            this.removeAllEventListeners();
            gameCore.StageManager.getInstance().root.removeChild(this);
            gameCore.StageManager.getInstance().root.addChild(new gameCore.MainView())
        })
    };
    b.setScale = function(c) {};
    gameCore.Loading = a
})();