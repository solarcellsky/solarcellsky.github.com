/**
 * Created by Administrator on 2014/12/26.
 */
window.onload = function(){
    // document.addEventListener('WeixinJSBridgeReady',
    //         function onBridgeReady() {
    //             cc.game.onStart = function(){
    //                 var mode = cc.sys.isMobile?cc.ResolutionPolicy.EXACT_FIT:cc.ResolutionPolicy.SHOW_ALL;
    //                 cc.view.setDesignResolutionSize(640,1040,mode);
    //                 cc.view.resizeWithBrowserSize(true);
    //                 //           cc.view.enableAutoFullScreen(true);

    //                 //load resources
    //                 MyLoaderScene.preload(g_resources, function () {
    //                     cc.spriteFrameCache.addSpriteFrames(res.allPicPlist_plist,res.allPicPlist_png);
    //                     cc.spriteFrameCache.addSpriteFrames(res.playerPlist_plist,res.playerPlist_png);
    //                     cc.director.runScene(new MyScene());
    //                 }, this);
    //             };
    //             cc.game.run("gameCanvas");
    //         }
    //     );
   cc.game.onStart = function(){
       var mode = cc.sys.isMobile?cc.ResolutionPolicy.EXACT_FIT:cc.ResolutionPolicy.SHOW_ALL;
       cc.view.setDesignResolutionSize(640,1040,mode);
       cc.view.resizeWithBrowserSize(true);
       //           cc.view.enableAutoFullScreen(true);

       //load resources
       MyLoaderScene.preload(g_resources, function () {
           cc.spriteFrameCache.addSpriteFrames(res.allPicPlist_plist,res.allPicPlist_png);
           cc.spriteFrameCache.addSpriteFrames(res.playerPlist_plist,res.playerPlist_png);
           cc.director.runScene(new MyScene());
       }, this);
   };
   cc.game.run("gameCanvas");
};