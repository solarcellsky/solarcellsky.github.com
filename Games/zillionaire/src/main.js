cc.game.onStart = function(){
    var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.EXACT_FIT : cc.sys.isMobile ? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;

    cc.view.setDesignResolutionSize(640,960,mode);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    MyLoaderScene.preload(g_resources, function () {
//        cc.director.runScene(new PlayScene());
        cc.director.runScene(new GameStart());
    }, this);
};
cc.game.run("gameCanvas");