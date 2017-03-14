cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.EXACT_FIT);
	cc.view.resizeWithBrowserSize(true);
    //load resources
    MyLoaderScene.preload(g_resources, function () {
        cc.director.runScene(new playScene());
    }, this);
};
cc.game.run();