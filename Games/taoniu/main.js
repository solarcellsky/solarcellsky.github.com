/**
 * Created by Administrator on 2014/12/26.
 */
window.onload = function(){
    cc.game.onStart = function(){
        var mode = cc.sys.isMobile? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;
        cc.view.setDesignResolutionSize(640,960,mode);
        cc.view.resizeWithBrowserSize(true);
        cc.view.enableAutoFullScreen(true);
        MyLoaderScene.preload(g_resources, function () {
            cc.spriteFrameCache.addSpriteFrames(res.allPicPlist_plist,res.allPicPlist_png);
            cc.spriteFrameCache.addSpriteFrames(res.cowPlist_plist,res.cowPlist_png);
            cc.director.runScene(new PlayingScene());
        }, this);
    };
    
    cc.game.run("gameCanvas");
};