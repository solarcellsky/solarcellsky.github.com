/**
 * Created by Administrator on 15-6-2.
 */
window.onload = function(){
    cc.game.onStart = function(){
        //适配模式
        var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.EXACT_FIT : cc.sys.isMobile ? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;

        cc.view.setDesignResolutionSize(640,960,mode);
        cc.view.resizeWithBrowserSize(true);
        //load resources
        MyLoaderScene.preLoad(g_preRes, g_resources, function () {
            cc.director.runScene(new IndexScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};