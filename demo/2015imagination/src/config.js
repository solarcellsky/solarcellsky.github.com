this.gameCore = this.gameCore || {};
this.gameCore.PATH = ""; (function() {
    var b = function() {
        var c = navigator.userAgent.toLowerCase();
        return {
            ipad: /ipad/.test(c),
            iphone: /iphone/.test(c),
            android: /android/.test(c),
            qqnews: /qqnews/.test(c),
            weixin: /micromessenger/.test(c)
        }
    };
    function a() {}
    a.core = [];
    a.loading = [];
    a.stageSize = {
        width: 640,
        height: 960
    };
    a.stageType = "V";
    a.contentLib = [];
    a.canvas = null;
    a.start = function() {
        new gameCore.LoaderManager().loadCore(a.core,
        function() {
            gameCore.StageManager.getInstance().initialize().setRect(a.stageSize.width, a.stageSize.height).setStageType(a.stageType).canvas = a.canvas;
            new gameCore.LoaderManager().loadCore(a.loading,
            function() {
                var c = new gameCore.Loading();
                c.isMore = true;
                var d = new gameCore.LoaderManager();
                d.loadCore(a.contentLib,
                function() {
                    if (b().weixin || b().android) {
                        gameCore.StageManager.getInstance().setViewport()
                    }
                    gameCore.StageManager.getInstance().canvas.style.backgroundColor = "#000000";
                    c.removeAllEventListeners();
                    gameCore.StageManager.getInstance().root.addChild(new gameCore.MainView())
                });
                var f = 0;
                var e = 0;
                c.on("tick",
                function() {
                    e++;
                    f++;
                    if (f > 49) {
                        f = 49
                    }
                });
                d.on("progress",
                function(g) {
                    if (g.currentTarget.progress * 100 < 50) {
                        onProgress(f / 100)
                    } else {
                        onProgress(g.currentTarget.progress)
                    }
                })
            })
        })
    };
    gameCore.Config = a
})();