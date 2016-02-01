/**
 * Created by Administrator on 2014/12/26.
 */

window.onload = function(){
    cc.game.onStart = function(){

        var u = navigator.userAgent;
        var mode = cc.sys.isMobile? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;
        if(u.indexOf('iPad') > -1 )
        {
            global_isIPad = true;
            mode = cc.ResolutionPolicy.SHOW_ALL;
            cc.view.setDesignResolutionSize(768,960,mode);
        }
        else
        {
            global_isIPad = false;
            cc.view.setDesignResolutionSize(640,960,mode);
        }

        //var mode = cc.sys.isMobile?cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;

        cc.view.resizeWithBrowserSize(true);
        cc.view.enableAutoFullScreen(true);
        //cc.view.setResizeCallback(function(){
        //    if(window.orientation==90||window.orientation==-90){
        //        alert("横屏中");
        //    }
        //    else{
        //        alert("竖屏中")
        //    }
        //});

        //load resources
        MyLoaderScene.preload(g_resources, function () {
            cc.spriteFrameCache.addSpriteFrames(res.allPicPlist2_plist,res.allPicPlist2_png);
            cc.spriteFrameCache.addSpriteFrames(res.allPicPlist_plist,res.allPicPlist_png);
            cc.spriteFrameCache.addSpriteFrames(res.explosion_plist,res.explosion_png);
            cc.director.runScene(new MyScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};