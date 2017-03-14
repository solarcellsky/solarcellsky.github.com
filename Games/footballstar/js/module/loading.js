define(function(require, exports,modules) {

    var res = require('./resources'),
        ProgressBar = require('./progress');
    var Loading = {};
        Loading.queue = {};
    Loading.hide = function(){
        
    }
    Loading.init = function(stage,successCallBack){
        //$('body').append('<div class="loading-logo"></div>');
        Loading.queue = new createjs.LoadQueue();
        Loading.queue.setMaxConnections(20);
        var progress = new ProgressBar(800, 1200, '分利宝');           
        stage.addChild(progress);
        Loading.queue.on("complete",successCallBack, null, !0);
        res.img && Loading.queue.loadManifest(res.img, !1);
        progress.forQueue(Loading.queue);
        Loading.queue.load();   
        
    };

    Loading.getResult = function(resName){
        return Loading.queue.getResult(resName);
    };
    //加载游戏图片资源
    Loading.loadImg = function ($$Img,$obj,complete) {
        var imgSources =[];
        for(var o in $$Img.res){
            imgSources.push($$Img.path+$$Img.res[o]);       
        }
        for (var i = 0; i < imgSources.length; i++) {
            imgSources[i] = (imgSources[i]);
        };
        var loadImage = function (path, callback) {
            var img = new Image();
            img.onload = function () {
                img.onload = null;
                callback(path);
            }
            img.src = path;
        }
        var imgLoader = function (imgs, callback) {
            var len = imgs.length, i = 0;
            while (imgs.length) {
                loadImage(imgs.shift(), function (path) {
                    callback(path, ++i, len);
                })
            }
        }
        var percent = 0;
        imgLoader(imgSources, function (path, curNum, total) {
            percent = curNum / total;
            $obj.html(Math.floor(percent * 100)+"%");
            //console.log("加载："+Math.floor(percent * 100) + '%')
            if (percent == 1) {
                setTimeout(function () {
                    complete();
                    console.log('ok');
                }, 500);
            }
        });
    };
    modules.exports = Loading;
});
