var MGEvent = (function () {
    function MGEvent(type) {
        this.data = null;
        this.type = type;
    }
    var __egretProto__ = MGEvent.prototype;
    MGEvent.LOAD_START = "LOAD_START";
    MGEvent.LOAD_PROGRESS = "LOAD_PROGRESS";
    MGEvent.LOAD_COMPLETE = "LOAD_COMPLETE";
    MGEvent.LOAD_ERROR = "LOAD_ERROR";
    MGEvent.START_GAME = "START_GAME";
    MGEvent.PAUSE_GAME = "PAUSE_GAME";
    MGEvent.WIN_GAME = "WIN_GAME";
    MGEvent.LOSE_GAME = "LOSE_GAME";
    MGEvent.ENTER_GAME = "ENTER_GAME";
    MGEvent.ADDED_TO_STAGE = "ADDED_TO_STAGE";
    MGEvent.FRAMEWORK_INFO_REQUEST = "FRAMEWORK_INFO_REQUEST";
    MGEvent.FRAMEWORK_INFO_RESPONSE = "FRAMEWORK_INFO_RESPONSE";
    MGEvent.CLICK_MORE = "CLICK_MORE";
    MGEvent.CLICK_MINILOGO = "CLICK_MINILOGO";
    MGEvent.OPEN_URL = "OPEN_URL";
    MGEvent.OPEN_EMAIL = "OPEN_EMAIL";
    MGEvent.SHARE = "SHARE";
    MGEvent.CLICK_CREDITS = "CLICK_CREDITS";
    MGEvent.SHOW_WIN = "SHOW_WIN";
    MGEvent.SHOW_LOSE = "SHOW_LOSE";
    MGEvent.SCREENSHOT = "SCREENSHOT";
    MGEvent.DOWNLOAD_APP = "DOWNLOAD_APP";
    return MGEvent;
})();
MGEvent.prototype.__class__ = "MGEvent";
var MGDelegate = (function () {
    function MGDelegate() {}
    var __egretProto__ = MGDelegate.prototype;
    MGDelegate.getListenerIndex = function (type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return -1;
        }
        for (var i = 0; i < MGDelegate._eventMap[type].length; i++) {
            var itm = MGDelegate._eventMap[type][i];
            if (itm[0] == listener && itm[1] == thisObject) {
                return i;
            }
        }
        return -1;
    };
    MGDelegate.addEventListener = function (type, listener, thisObject) {
        if (MGDelegate.isApp) {
            egret.ExternalInterface.addCallback(type, listener);
            return;
        }
        if (!MGDelegate._eventMap[type]) {
            MGDelegate._eventMap[type] = [];
        }
        if (MGDelegate.getListenerIndex(type, listener, thisObject) == -1) {
            MGDelegate._eventMap[type].push([listener, thisObject]);
        }
    };
    MGDelegate.removeEventListener = function (type, listener, thisObject) {
        if (MGDelegate.isApp) {
            return;
        }
        if (!MGDelegate._eventMap[type]) {
            return;
        }
        var index = MGDelegate.getListenerIndex(type, listener, thisObject);
        if (index == -1) {
            MGDelegate._eventMap[type].splice(index, 1);
        }
        if (MGDelegate._eventMap[type].length == 0) {
            delete MGDelegate._eventMap[type];
        }
    };
    MGDelegate.dispatcherEvent = function (event) {
        if (MGDelegate.isApp) {
            egret.ExternalInterface.call(event.type, JSON.stringify(event.data));
            return;
        }
        var type = event.type;
        if (!MGDelegate._eventMap[type]) {
            return;
        }
        var jobs = MGDelegate._eventMap[type];
        for (var i = 0; i < MGDelegate._eventMap[type].length; i++) {
            var itm = MGDelegate._eventMap[type][i];
            var func = itm[0];
            var thisObj = itm[1];
            func.call(thisObj, event);
        }
    };
    MGDelegate._eventMap = {};
    MGDelegate.isApp = false;
    return MGDelegate;
})();
MGDelegate.prototype.__class__ = "MGDelegate";
var $;
var MGFramework = (function () {
    function MGFramework(hosts) {
        this.restartCount = 0;
        this.creditsUrl = "http://miagame.com";
        this.style = "#_root{position:fixed;left:0;top:0;width:100%;height:100%;z-index:1000}#_bgImg{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}#_loadingRoot{position:absolute;left:0;top:0;width:100%;height:100%}#_logoContainer{position:absolute;top:45%;left:50%}#_logoImg{position:relative;opacity:0}#_playContainer{position:absolute;top:75%;left:50%;opacity:0;display:none}#_progressContainer{position:absolute;width:70%;height:20px;max-width:300px;top:70%;left:50%;display:none}#_progressBg{position:relative;border-color:#6ff;border-style:solid;background-color:#00354f;width:100%;height:100%;border-radius:20px;padding:2px;margin-left:-50%;box-shadow:0 5px 15px #003}#_progressBar{background-color:#c3be30;background:linear-gradient(#a0ec9e,#c3be30,#fc0,#b89c0d,#73620a);border-radius:10px;width:10%;height:100%;box-shadow:inset-10px 0 10px #003,inset 10px 0 10px #003}#_miniLogoContainer{position:absolute}#_miniLogoImg{position:relative;display:none}.scaleImg1{transform:scale(0.95,0.95);transition-duration:1s;transition-timing-function:linear}.scaleImg2{transform:scale(1,1);transition-duration:1s;transition-timing-function:linear}.TL{top:0;left:0}.TM{top:0;left:50%}.TR{top:0;right:0}.BL{bottom:0;left:0}.BM{bottom:0;left:50px}.BR{bottom:0;right:50px}.MM{top:50%;left:50%}";
        this.logoUrl = "/logo_wr_w_220x100.png";
        this.playUrl = "./images/play.png";
        this.bgUrl = "./images/bg.png";
        this.miniLogoUrl = "./images/minilogo.png";
        MGFramework.instance = this;
       
    }
    var __egretProto__ = MGFramework.prototype;
    __egretProto__.onClickMiniLogo = function (event) {
        MGFramework.ClickMiniLogo();
    };
    __egretProto__.onScreenshotHandler = function (event) {
       
    };
    __egretProto__.onShareHandler = function (event) {
       
    };
    __egretProto__.onGameStartHandler = function (event) {
        this.restartCount++;
        console.log("OnGameStart(" + MGFramework.nameid + "," + this.restartCount + ")");
        try {
            var func = eval("OnGameStart");
            if (func) {
                func.call(this, MGFramework.nameid, this.restartCount);
            }
        } catch (e) {
            console.log("Can not found function [OnGameStart].");
        }
        ih5game.start();
    };
    __egretProto__.onGamePauseHandler = function (event) {
        console.log("OnGamePause(" + MGFramework.nameid + "," + this.restartCount + ")");
        try {
            var func = eval("OnGamePause");
            if (func) {
                func.call(this, MGFramework.nameid, this.restartCount);
            }
        } catch (e) {
            console.log("Can not found function [OnGamePause].");
        }
    };
    __egretProto__.onFrameworkInfoRequest = function (event) {
        var evt = new MGEvent(MGEvent.FRAMEWORK_INFO_RESPONSE);
        evt.data = {
            debug: MGFramework.debug,
            gamename: MGFramework.gamename,
            nameid: MGFramework.nameid,
            miniLogoUrl: this.miniLogoUrl,
            showmsgs: MGFramework.showmsgs,
            sharemsgs: MGFramework.sharemsgs,
            language: MGFramework.language,
            HasScreenshot: MGFramework.HasScreenshot
        };
        MGDelegate.dispatcherEvent(evt);
    };
    __egretProto__.onClickMoreHandler = function (event) {
        MGFramework.ClickMore();
    };
    __egretProto__.enterGame = function () {
        window.removeEventListener("resize", this.doResize);
        $("#_root")[0].onclick = null;
        $("#_root").remove();
        MGDelegate.dispatcherEvent(new MGEvent(MGEvent.ENTER_GAME));
    };
    __egretProto__.showPlay = function () {
        $("#_logoContainer").animate({
            top: "40%"
        }, 1000, function () {
            MGFramework.instance.zoomOut("#_playImg");
        });
        $("#_playContainer")[0].style.display = "inline";
        $("#_playContainer").animate({
            opacity: 1,
            top: "75%"
        }, 1000);
    };
    __egretProto__.hidePlay = function () {
        $("#_playContainer").animate({
            opacity: 0,
            top: "70%"
        }, 1000, function () {
            if ($("#_playContainer")[0]) {
                $("#_playContainer")[0].style.display = "none";
            }
        });
    };
    __egretProto__.clickPlay = function () {
        $("#_playContainer")[0].onclick = null;
        $("#_logoContainer")[0].onclick = null;
        MGFramework.instance.zoomOut("#_logoImg");
        MGFramework.instance.hidePlay();
        $("#_logoContainer")[0].onclick = null;
        setTimeout(function () {
            $("#_root")[0].onclick = function () {
                MGFramework.ClickLoadingSplash();
            };
        }, 30);
        setTimeout(function () {
            $("#_root")[0].onclick = null;
            MGFramework.instance.enterGame();
        }, MGFramework.debug ? 50 : 500);
    };
    __egretProto__.zoomOut = function (id) {
        var thisObj = this;
        if ($(id).hasClass("scaleImg2")) {
            $(id).removeClass("scaleImg2");
        }
        $(id).addClass("scaleImg1");
        setTimeout(function () {
            MGFramework.instance.zoomIn(id);
        }, 1000);
    };
    __egretProto__.zoomIn = function (id) {
        if ($(id).hasClass("scaleImg1")) {
            $(id).removeClass("scaleImg1");
        }
        $(id).addClass("scaleImg2");
        setTimeout(function () {
            MGFramework.instance.zoomOut(id);
        }, 1000);
    };
    __egretProto__.onLoadProgressHandler = function (evt) {
        MGFramework.instance.setProgress(evt.data.percent);
    };
    __egretProto__.setProgress = function (per) {
        per = per < 10 ? 10 : per > 100 ? 100 : per;
        $("#_progressBar")[0].style.width = per + "%";
    };
    __egretProto__.onLoadCompleteHandler = function (event) {
        $("#_progressContainer").animate({
            opacity: 0
        }, 1000, MGFramework.instance.showPlay);
    };
    __egretProto__.onLoadErrorHandler = function (event) {};
    __egretProto__.onAddedToStageHandler = function (event) {};
    __egretProto__.onLoadStartHandler = function (event) {};
    __egretProto__.onShowWinHandler = function (event) {
        console.log("OnGameLevelWin(" + MGFramework.nameid + ")");
        try {
            var func = eval("OnGameLevelWin");
            if (func) {
                func.call(this, MGFramework.nameid);
            }
        } catch (e) {
            console.log("Can not found function [OnGameLevelWin].");
        }
    };
    __egretProto__.onShowLoseHandler = function (event) {
        console.log("OnGameLevelFail(" + MGFramework.nameid + ")");
        try {
            var func = eval("OnGameLevelFail");
            if (func) {
                func.call(this, MGFramework.nameid);
            }
        } catch (e) {
            console.log("Can not found function [OnGameLevelFail].");
        }
    };
    __egretProto__.onOpenUrlHandler = function (event) {
        MGFramework.OpenWebsite(event.data.url, event.data.target);
    };
    __egretProto__.onOpenEmailHandler = function (event) {
        MGFramework.OpenWebsite("mailto:" + event.data.email, "_self");
    };
    __egretProto__.onDownloadAppHandler = function (event) {
        MGFramework.SendAnaly(MGFramework.nameid, MGFramework.state, event.data.platform);
    };
    __egretProto__.onClickCreditsHandler = function (event) {};
    __egretProto__.startup = function (gamename, gameid, debug) {
        this.init(gamename, gameid, debug);
        var support = [].map && document.createElement("canvas").getContext;
        if (support) {
            var isCocos = false;
            try {
                eval("cc");
                isCocos = true;
            } catch (e) {}
            if (isCocos) {
                eval("cc").game.run();
            } else {
                if (MGFramework.debug) {
                    eval("egret_h5").preloadScript(eval("egret_file_list"), "libs/");
                    eval("egret_h5").preloadScript(eval("game_file_list"), "bin-debug/src/");
                    eval("egret_h5").startLoading();
                } else {
                    eval("egret_h5").startGame();
                }
            }
        } else {
            alert("Please change your browser to play the game.");
        }
    };
    __egretProto__.doResize = function (event) {
        var dw = $(window).width();
        var dh = $(window).height();
        var landscape = false;
        var scale = 1;
        if (dh < dw) {
            landscape = true;
        }
        if (landscape) {
            scale = dh / 480;
        } else {
            scale = dw / 480;
        }
        if (scale > 1) {
            scale = 1;
        }
        $("#_loadingRoot")[0].style.zoom = scale;
    };
    __egretProto__.init = function (gamename, nameid, debug) {
        MGFramework.gamename = gamename;
        MGFramework.nameid = nameid;
        MGFramework.debug = debug ? true : false;
        var styleElement = document.createElement("style");
        document.body.appendChild(styleElement);
        styleElement.innerHTML = this.style;
        var rootNode = document.createElement("div");
        rootNode.id = "_root";
        rootNode.innerHTML = "<div id=\"_loadingRoot\"><img id=\"_bgImg\"/><div id=\"_logoContainer\"><img id=\"_logoImg\"/></div><div id=\"_progressContainer\"><div id=\"_progressBg\"><div id=\"_progressBar\"></div></div></div><div id=\"_playContainer\"><img id=\"_playImg\"/></div></div>";
        document.body.appendChild(rootNode);
        $("#_logoImg")[0].src = this.logoUrl;
        $("#_playImg")[0].src = this.playUrl;
        $("#_bgImg")[0].src = this.bgUrl;
        this.miniLogoUrl = this.miniLogoUrl;
        $("#_playContainer")[0].onclick = function () {
            if ($("#_playContainer").opacity < 1) {
                return;
            }
            MGFramework.instance.clickPlay();
        };
        $("#_logoContainer")[0].onclick = function () {
            MGFramework.ClickLoadingLogo();
        };
        $("#_root img").each(function (index, element) {
            element.onload = function (e) {
                var img = e.currentTarget;
                if (img.id != "_bgImg") {
                    img.style['margin-left'] = -img.width / 2 + "px";
                    img.style['margin-top'] = -img.height / 2 + "px";
                }
                img.style.display = "inline";
                if (img.id == "_logoImg") {
                    $(img).animate({
                        opacity: 1
                    }, 300);
                    $("#_progressContainer")[0].style.display = "inline";
                }
                if (img.id == "_bgImg") {
                    img.style.opacity = 0;
                    $(img).animate({
                        opacity: 1
                    }, 500);
                }
            };
        });
        window.addEventListener("resize", this.doResize);
        this.doResize(null);
        MGDelegate.addEventListener(MGEvent.LOAD_START, this.onLoadStartHandler, this);
        MGDelegate.addEventListener(MGEvent.LOAD_PROGRESS, this.onLoadProgressHandler, this);
        MGDelegate.addEventListener(MGEvent.LOAD_COMPLETE, this.onLoadCompleteHandler, this);
        MGDelegate.addEventListener(MGEvent.LOAD_ERROR, this.onLoadErrorHandler, this);
        MGDelegate.addEventListener(MGEvent.START_GAME, this.onGameStartHandler, this);
        MGDelegate.addEventListener(MGEvent.PAUSE_GAME, this.onGamePauseHandler, this);
        MGDelegate.addEventListener(MGEvent.SHOW_WIN, this.onShowWinHandler, this);
        MGDelegate.addEventListener(MGEvent.SHOW_LOSE, this.onShowLoseHandler, this);
        MGDelegate.addEventListener(MGEvent.ADDED_TO_STAGE, this.onAddedToStageHandler, this);
        MGDelegate.addEventListener(MGEvent.FRAMEWORK_INFO_REQUEST, this.onFrameworkInfoRequest, this);
        MGDelegate.addEventListener(MGEvent.CLICK_MORE, this.onClickMoreHandler, this);
        MGDelegate.addEventListener(MGEvent.CLICK_MINILOGO, this.onClickMiniLogo, this);
        MGDelegate.addEventListener(MGEvent.OPEN_URL, this.onOpenUrlHandler, this);
        MGDelegate.addEventListener(MGEvent.OPEN_EMAIL, this.onOpenEmailHandler, this);
        MGDelegate.addEventListener(MGEvent.SHARE, this.onShareHandler, this);
        MGDelegate.addEventListener(MGEvent.DOWNLOAD_APP, this.onDownloadAppHandler, this);
        MGDelegate.addEventListener(MGEvent.CLICK_CREDITS, this.onClickCreditsHandler, this);
        MGDelegate.addEventListener(MGEvent.SCREENSHOT, this.onScreenshotHandler, this);
    };
    MGFramework.SendAnaly = function (nameid, p2, p3) {
        console.log("SendAnaly(" + nameid + "," + p2 + "," + p3 + ")");
        try {
            var func = eval("CreateLinksInGame");
            if (func) {
                func.call(this, nameid, p2, p3);
            }
        } catch (e) {
            console.log("Can not found function [CreateLinksInGame].");
        }
    };
    MGFramework.ClickLoadingLogo = function () {
      //  MGFramework.SendAnaly(MGFramework.nameid, "loading", "logo");
    };
    MGFramework.ClickLoadingSplash = function () {
      //  MGFramework.SendAnaly(MGFramework.nameid, "splash", "logo");
    };
    MGFramework.ClickMiniLogo = function () {
      
    };
    MGFramework.ClickMore = function () {
        ih5game.more();
    };
    MGFramework.OpenWebsite = function (url, target) {
       
    };
    MGFramework.debug = false;
    MGFramework.version = "2.0.5";
    MGFramework.sharemsgs = {};
    MGFramework.showmsgs = {};
    MGFramework.language = "en-US";
    MGFramework.PREGAME = "pregame";
    MGFramework.INGAME = "ingame";
    MGFramework.state = MGFramework.PREGAME;
    MGFramework.HasScreenshot = true;
    MGFramework.nameid = "-1";
    MGFramework.gamename = "-1";
    return MGFramework;
})();
MGFramework.prototype.__class__ = "MGFramework";
MGFramework.instance = new MGFramework("yiv.com");
var MGF = MGFramework;