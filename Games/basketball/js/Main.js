
window.onload = function(){
    cc.game.onStart = function(){
        //适配模式
        var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.EXACT_FIT : cc.sys.isMobile ? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;

        cc.view.setDesignResolutionSize(640,1040,mode);
        cc.view.resizeWithBrowserSize(true);
        //load resources
        MyLoaderScene.preLoad(g_preRes, g_resources, function () {
            cc.director.runScene(new IndexScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};

/*
window.onload = function(){
    document.addEventListener('WeixinJSBridgeReady',
        function onBridgeReady() {
            cc.game.onStart = function(){

                var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.EXACT_FIT : cc.sys.isMobile ? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;

                cc.view.setDesignResolutionSize(640,1040,mode);
                cc.view.resizeWithBrowserSize(true);
                //load resources
                MyLoaderScene.preLoad(g_preRes, g_resources, function () {
                    cc.director.runScene(new IndexScene());
                }, this);
            };
            cc.game.run("gameCanvas");
        }
    );
};
 */