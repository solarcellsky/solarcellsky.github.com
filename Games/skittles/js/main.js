/**
 * Created by Administrator on 2014/12/16.
 */

var $$Client = {};
$$Client.shareData = {
    /*分享调用图片*/
    "imgUrl" : 'http://game.m.muzhibuluo.com/resources/sanguo/res/weixintou.jpg',
    /*分享调用图片*/
    "link" : window.location.href,
    /*分享标题*/
    "title" : '三国无双——拇指部落',
    /*分享描述*/
    "desc" : "超过3000万人都玩过的游戏"
}

function init(n) {
    new StateManager(Constants);

}

var StateManager = function(){
    function e(t){
        var n = this;
        this.lastTime = 0;
        this.score = 0;
        this.canvas = t.canvas;
        this.stage = new createjs.Stage(this.canvas);
        this.stage.autoClear = true;
        createjs.Touch.enable(this.stage);
        this.timeDevider = 1;
        this.stage.enableMouseOver(5);
        this.loader = new createjs.LoadQueue();
        this.states = new Array();
        this.loadingFunc();

        createjs.Ticker.setFPS(40);
        createjs.Ticker.on("tick", function(e){
            return n.update(e)
        });
        e.g_instance = this;
    }
    e.prototype.update = function (e) {
        try {

            if (this.states.length != 0) {
                var t = this.states[this.states.length - 1];
                if (!t.isInitiliazed()) {
                    t.init()
                }
                var n = createjs.Ticker.getTime();
                var r = n - this.lastTime;
                this.lastTime = n;

                t.update(n)
            }
        } catch (i) {
           // console.log(i, "statemanager::update")
        }
        try {
            this.stage.update()
        } catch (i) {}
    };
    e.prototype.loadingFunc = function(){
        var n = this;
        this.loader.loadManifest({src:"res/loadingpage.jpg",id:"loading"},{src:"res/loadingBar.jpg",id:"loadingBar"});
        this.loader.loadManifest({src:"res/BigSugar03.png",id:"BigSugar03"});

        this.loadingbg = new createjs.Bitmap("res/loadingpage.jpg");
        this.stage.addChild( this.loadingbg);

        this.loadingBar = new createjs.Bitmap("res/loadingBar.png");
        this.stage.addChild( this.loadingBar);
        this.loadingBar.y = 600;
        this.loadingBar.x = 80;

        this.BigSugarLoading = new createjs.Bitmap("res/BigSugar03.png");
        this.stage.addChild( this.BigSugarLoading);
        this.BigSugarLoading.y = 100;
        this.BigSugarLoading.x = 80;

        this.loadingmask = new createjs.Shape();
        this.loadingmask.graphics.beginFill('#000').drawRect(80, 600, 514, 65);
        this.loadingBar.mask = this.loadingmask;
        this.loadingmask.x = -514

        //createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
        //this.loader.installPlugin(createjs.Sound);

        this.loader.loadManifest(manifest);
        this.loader.on("progress",function(){
            n.handleProgress(n);
        });
        this.loader.on("complete", function(){
            n.handleComplete(n)
        });

        this.messageField = new createjs.Text("loading...", "bold 24px Arial", "#FFF");
        this.messageField.textAlign = "center";
        this.messageField.maxWidth = 790;
        this.messageField.x = this.canvas.width / 2;
        this.messageField.y = this.canvas.height / 2+200;
        this.stage.addChild(this.messageField);
    }
    e.prototype.handleProgress = function(e){
        e.messageField.text = "loading..." + (e.loader.progress*100|0) + "%"
        this.loadingmask.x = -514+e.loader.progress*514|0
        e.stage.update();
    }
    e.prototype.handleComplete = function(e){
        this.stage.removeChild(e.loadingbg);
        this.stage.removeChild(e.messageField);
        e.pushState(new beginState());
    }
    e.prototype.getResult = function (e) {
        return this.loader.getResult(e)
    };

    e.prototype.changeState = function (e) {
        while (this.states.length != 0) {
            this.popState()
        }
        this.pushState(new e())
    };
    e.prototype.pushState = function (e) {
        this.states.push(e);
        this.stage.addChild(e)
    };
    e.prototype.popState = function () {
        if (this.states.length != 0) {
            this.states[this.states.length - 1].cleanup();
            this.stage.removeChild(this.states[this.states.length - 1]);
            this.states.pop();
            if (this.states.length != 0) {
                this.states[this.states.length - 1].resume()
            }
        }
    };
    return e;
}();

var Constants = function () {
    function e() {}
    var W = 640, H = 1000,
        IS_TOUCH, SCREEN_SHOW_ALL = !0;

    var u = navigator.userAgent;
    if (u.indexOf('iPhone') > -1) {//苹果手机
        if(window.innerWidth==320&&window.innerHeight<=480){
            $(".priseDiv").css("backgroud","url(./res/priseBg1.jpg) no-repeat");
            $(".priseDiv").css("background-size","100% 100%");
          //  H = 900;
        }
    }

    var thisismobile = true;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        thisismobile = true;

    }else{
        thisismobile = false;
    }


    var canvas = document.getElementById("Canvas");
    winW = window.innerWidth,
        winH = window.innerHeight;
    if (SCREEN_SHOW_ALL) {
        winW / winH > W / H ? winW = W * winH / H: winH = H * winW / W,
            canvas.style.marginTop = 0;
    }else {
        var w = W * winH / H;
        winW >= w ? (winW = w, stage.x = 0) : stage.x = (winW - w) / 2;
    }
    canvas.width = W;
    canvas.height = H;
    canvas.style.left = '50%';
    canvas.style.marginLeft = -(document.body.clientWidth/2)+"px";

    if(!thisismobile){
        canvas.style.width = winW + "px";
        canvas.style.height = winH + "px";

        canvas.style.marginLeft = -(winW/2)+"px";

    }

    e.canvas = canvas;
    e.thisismobile = thisismobile;

    return e
}();

