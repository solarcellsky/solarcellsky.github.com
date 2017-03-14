var audio = new Audio();
var soundmp3 = "./resource/assets/sound/bgm.mp3";
var soundogg = "./resource/assets/sound/bgm.ogg";
if (audio.canPlayType("audio/mp3")) {
    var audio = new Audio(soundmp3);
}else if(audio.canPlayType("audio/ogg")) {
    var audio = new Audio(soundogg);
}
audio.load();
var gameMusic = function() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsWeiXin = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    if (bIsIphoneOs || bIsIpad && bIsWeiXin) {
        // document.addEventListener("WeixinJSBridgeReady", function () { 
            audio.play();
        // }, false); 
    } else {
        audio.play();
    }

    $("#sound").show();
    $('#sound').removeClass('off');
    $("#sound").on('click', function() {
        if (audio.paused) {
            $(this).removeClass("off");
            audio.play(); 
            // audio.currentTime = 0.0; 
        } else {
            $(this).addClass("off");
            audio.pause();
        }
    });
};
var egret; (function(c) {
    c.egret_string_code = {};
    c.egret_string_code[ - 1] = "\u4e0d\u5b58\u5728\u7684stringId:{0}";
    c.egret_string_code[1E3] = "Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
    c.egret_string_code[1001] = "\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7";
    c.egret_string_code[1002] = "egret.Ticker\u662f\u6846\u67b6\u5185\u90e8\u4f7f\u7528\u7684\u5355\u4f8b\uff0c\u4e0d\u5141\u8bb8\u5728\u5916\u90e8\u5b9e\u4f8b\u5316\uff0c\u8ba1\u65f6\u5668\u8bf7\u4f7f\u7528egret.Timer\u7c7b\uff01";
    c.egret_string_code[1003] = "Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout";
    c.egret_string_code[1004] = "ExternalInterface\u8c03\u7528\u4e86js\u6ca1\u6709\u6ce8\u518c\u7684\u65b9\u6cd5: {0}";
    c.egret_string_code[1005] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684blendMode: {0}";
    c.egret_string_code[1006] = "child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185";
    c.egret_string_code[1007] = "\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4";
    c.egret_string_code[1008] = "child\u672a\u88abaddChild\u5230\u8be5parent";
    c.egret_string_code[1009] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684\u9002\u914d\u6a21\u5f0f:{0}";
    c.egret_string_code[1010] = "addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a";
    c.egret_string_code[1011] = 'BitmapText\u627e\u4e0d\u5230\u6587\u5b57\u6240\u5bf9\u5e94\u7684\u7eb9\u7406:"{0}"';
    c.egret_string_code[1012] = "egret.BitmapTextSpriteSheet\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.BitmapFont\u4ee3\u66ff\u3002";
    c.egret_string_code[1013] = "TextField.setFocus \u6ca1\u6709\u5b9e\u73b0";
    c.egret_string_code[1014] = "Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316";
    c.egret_string_code[1015] = "xml not found!";
    c.egret_string_code[1016] = "{0}\u5df2\u7ecf\u5e9f\u5f03";
    c.egret_string_code[1017] = "JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: {0}\ndata: {1}";
    c.egret_string_code[1018] = "egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key={0}&value={1}";
    c.egret_string_code[1019] = "\u7f51\u7edc\u5f02\u5e38:{0}";
    c.egret_string_code[1020] = "\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668";
    c.egret_string_code[1021] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl";
    c.egret_string_code[1022] = "{0} ArgumentError";
    c.egret_string_code[1023] = "\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!";
    c.egret_string_code[1024] = "\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode";
    c.egret_string_code[1025] = "\u9047\u5230\u6587\u4ef6\u5c3e";
    c.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
    c.egret_string_code[1027] = "DecodingError";
    c.egret_string_code[1028] = "\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:{0}\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002";
    c.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
    c.egret_string_code[1030] = "\u8be5API\u5df2\u5e9f\u5f03";
    c.egret_string_code[1031] = "setVolume\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528this.volume = value\u4ee3\u66ff";
    c.egret_string_code[1032] = "getVolume\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528this.volume\u4ee3\u66ff";
    c.egret_string_code[2E3] = "RES.createGroup()\u4f20\u5165\u4e86\u914d\u7f6e\u4e2d\u4e0d\u5b58\u5728\u7684\u952e\u503c: {0}";
    c.egret_string_code[2001] = 'RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4:"{0}"';
    c.egret_string_code[3E3] = "\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25: {0}";
    c.egret_string_code[3001] = "\u627e\u4e0d\u5230\u4e3b\u9898\u4e2d\u6240\u914d\u7f6e\u7684\u76ae\u80a4\u7c7b\u540d: {0}";
    c.egret_string_code[3002] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u96c6\u5408\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
    c.egret_string_code[3003] = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
    c.egret_string_code[3004] = "addChild(){0}addElement()\u4ee3\u66ff";
    c.egret_string_code[3005] = "addChildAt(){0}addElementAt()\u4ee3\u66ff";
    c.egret_string_code[3006] = "removeChild(){0}removeElement()\u4ee3\u66ff";
    c.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()\u4ee3\u66ff";
    c.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()\u4ee3\u66ff";
    c.egret_string_code[3009] = "swapChildren(){0}swapElements()\u4ee3\u66ff";
    c.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()\u4ee3\u66ff";
    c.egret_string_code[3011] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
    c.egret_string_code[3012] = "\u6b64\u65b9\u6cd5\u5728Scroller\u7ec4\u4ef6\u5185\u4e0d\u53ef\u7528!";
    c.egret_string_code[3013] = "UIStage\u662fGUI\u6839\u5bb9\u5668\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u6b64\u5b9e\u4f8b\u5728\u663e\u793a\u5217\u8868\u4e2d\uff01";
    c.egret_string_code[3014] = "propNotPropOrStyle";
    c.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
    c.egret_string_code[4001] = "Abstract class can not be instantiated!";
    c.egret_string_code[4002] = "Unnamed data!";
    c.egret_string_code[4003] = "Nonsupport version!";
    c.egret_string_code[4004] = "Abstract method needs to be implemented in subclass!";
    c.egret_string_code[3100] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301WebSocket";
    c.egret_string_code[3101] = "\u8bf7\u5148\u8fde\u63a5WebSocket";
    c.egret_string_code[3102] = "\u8bf7\u5148\u8bbe\u7f6etype\u4e3a\u4e8c\u8fdb\u5236\u7c7b\u578b"
})(egret || (egret = {})); (function(c) {
    c.egret_string_code = {};
    c.egret_string_code[ - 1] = "\u4e0d\u5b58\u5728\u7684stringId:{0}";
    c.egret_string_code[1E3] = "Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
    c.egret_string_code[1001] = "\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7";
    c.egret_string_code[1002] = "egret.Ticker\u662f\u6846\u67b6\u5185\u90e8\u4f7f\u7528\u7684\u5355\u4f8b\uff0c\u4e0d\u5141\u8bb8\u5728\u5916\u90e8\u5b9e\u4f8b\u5316\uff0c\u8ba1\u65f6\u5668\u8bf7\u4f7f\u7528egret.Timer\u7c7b\uff01";
    c.egret_string_code[1003] = "Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout";
    c.egret_string_code[1004] = "ExternalInterface\u8c03\u7528\u4e86js\u6ca1\u6709\u6ce8\u518c\u7684\u65b9\u6cd5: {0}";
    c.egret_string_code[1005] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684blendMode: {0}";
    c.egret_string_code[1006] = "child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185";
    c.egret_string_code[1007] = "\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4";
    c.egret_string_code[1008] = "child\u672a\u88abaddChild\u5230\u8be5parent";
    c.egret_string_code[1009] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684\u9002\u914d\u6a21\u5f0f:{0}";
    c.egret_string_code[1010] = "addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a";
    c.egret_string_code[1011] = 'BitmapText\u627e\u4e0d\u5230\u6587\u5b57\u6240\u5bf9\u5e94\u7684\u7eb9\u7406:"{0}"';
    c.egret_string_code[1012] = "egret.BitmapTextSpriteSheet\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.BitmapFont\u4ee3\u66ff\u3002";
    c.egret_string_code[1013] = "TextField.setFocus \u6ca1\u6709\u5b9e\u73b0";
    c.egret_string_code[1014] = "Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316";
    c.egret_string_code[1015] = "xml not found!";
    c.egret_string_code[1016] = "{0}\u5df2\u7ecf\u5e9f\u5f03";
    c.egret_string_code[1017] = "JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: {0}\ndata: {1}";
    c.egret_string_code[1018] = "egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key={0}&value={1}";
    c.egret_string_code[1019] = "\u7f51\u7edc\u5f02\u5e38:{0}";
    c.egret_string_code[1020] = "\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668";
    c.egret_string_code[1021] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl";
    c.egret_string_code[1022] = "{0} ArgumentError";
    c.egret_string_code[1023] = "\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!";
    c.egret_string_code[1024] = "\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode";
    c.egret_string_code[1025] = "\u9047\u5230\u6587\u4ef6\u5c3e";
    c.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
    c.egret_string_code[1027] = "DecodingError";
    c.egret_string_code[1028] = "\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:{0}\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002";
    c.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
    c.egret_string_code[1030] = "\u8be5API\u5df2\u5e9f\u5f03";
    c.egret_string_code[1031] = "setVolume\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528this.volume = value\u4ee3\u66ff";
    c.egret_string_code[1032] = "getVolume\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528this.volume\u4ee3\u66ff";
    c.egret_string_code[2E3] = "RES.createGroup()\u4f20\u5165\u4e86\u914d\u7f6e\u4e2d\u4e0d\u5b58\u5728\u7684\u952e\u503c: {0}";
    c.egret_string_code[2001] = 'RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4:"{0}"';
    c.egret_string_code[3E3] = "\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25: {0}";
    c.egret_string_code[3001] = "\u627e\u4e0d\u5230\u4e3b\u9898\u4e2d\u6240\u914d\u7f6e\u7684\u76ae\u80a4\u7c7b\u540d: {0}";
    c.egret_string_code[3002] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u96c6\u5408\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
    c.egret_string_code[3003] = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
    c.egret_string_code[3004] = "addChild(){0}addElement()\u4ee3\u66ff";
    c.egret_string_code[3005] = "addChildAt(){0}addElementAt()\u4ee3\u66ff";
    c.egret_string_code[3006] = "removeChild(){0}removeElement()\u4ee3\u66ff";
    c.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()\u4ee3\u66ff";
    c.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()\u4ee3\u66ff";
    c.egret_string_code[3009] = "swapChildren(){0}swapElements()\u4ee3\u66ff";
    c.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()\u4ee3\u66ff";
    c.egret_string_code[3011] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
    c.egret_string_code[3012] = "\u6b64\u65b9\u6cd5\u5728Scroller\u7ec4\u4ef6\u5185\u4e0d\u53ef\u7528!";
    c.egret_string_code[3013] = "UIStage\u662fGUI\u6839\u5bb9\u5668\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u6b64\u5b9e\u4f8b\u5728\u663e\u793a\u5217\u8868\u4e2d\uff01";
    c.egret_string_code[3014] = "propNotPropOrStyle";
    c.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
    c.egret_string_code[4001] = "Abstract class can not be instantiated!";
    c.egret_string_code[4002] = "Unnamed data!";
    c.egret_string_code[4003] = "Nonsupport version!";
    c.egret_string_code[4004] = "Abstract method needs to be implemented in subclass!";
    c.egret_string_code[3100] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301WebSocket";
    c.egret_string_code[3101] = "\u8bf7\u5148\u8fde\u63a5WebSocket";
    c.egret_string_code[3102] = "\u8bf7\u5148\u8bbe\u7f6etype\u4e3a\u4e8c\u8fdb\u5236\u7c7b\u578b"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(c, f) {
    function e() {
        this.constructor = c
    }
    for (var d in f) f.hasOwnProperty(d) && (c[d] = f[d]);
    e.prototype = f.prototype;
    c.prototype = new e
}; (function(c) {
    function f(d) {
        for (var b = [], a = 1; a < arguments.length; a++) b[a - 1] = arguments[a];
        if (a = c.egret_string_code[d]) for (var g = b.length,
        u = 0; u < g; u++) a = a.replace("{" + u + "}", b[u]);
        return a
    }
    var e = function() {
        function d() {}
        d.openLogByType = function(b) {
            null == d.logFuncs && (d.logFuncs = {
                error: console.error,
                debug: console.debug,
                warn: console.warn,
                info: console.info,
                log: console.log
            });
            switch (b) {
            case d.OFF:
                console.error = function() {};
            case d.ERROR:
                console.warn = function() {};
            case d.WARN:
                console.info = function() {},
                console.log = function() {};
            case d.INFO:
                console.debug = function() {}
            }
            switch (b) {
            case d.ALL:
                console.debug = d.logFuncs.debug;
            case d.INFO:
                console.log = d.logFuncs.log,
                console.info = d.logFuncs.info;
            case d.WARN:
                console.warn = d.logFuncs.warn;
            case d.ERROR:
                console.error = d.logFuncs.error
            }
        };
        d.fatal = function(b, a) {
            void 0 === a && (a = null);
            throw Error(c.Logger.getTraceCode("Fatal", b, a));
        };
        d.info = function(b, a) {
            void 0 === a && (a = null);
            c.Logger.traceToConsole("Info", b, a)
        };
        d.warning = function(b, a) {
            void 0 === a && (a = null);
            c.Logger.traceToConsole("Warning", b, a)
        };
        d.traceToConsole = function(b, a, g) {
            console.log(c.Logger.getTraceCode(b, a, g))
        };
        d.getTraceCode = function(b, a, g) {
            return "[" + b + "]" + a + (null == g ? "": ":" + g)
        };
        d.ALL = "all";
        d.DEBUG = "debug";
        d.INFO = "info";
        d.WARN = "warn";
        d.ERROR = "error";
        d.OFF = "off";
        return d
    } ();
    c.Logger = e;
    e.prototype.__class__ = "egret.Logger";
    c.getString = f;
    c.$error = function(c) {
        for (var b = [], a = 1; a < arguments.length; a++) b[a - 1] = arguments[a];
        b.unshift(c); (b = f.apply(null, b)) ? e.fatal(b) : e.fatal(f( - 1, c))
    };
    c.$warn = function(c) {
        for (var b = [], a = 1; a < arguments.length; a++) b[a - 1] = arguments[a];
        b.unshift(c); (b = f.apply(null, b)) ? e.warning(b) : e.warning(f( - 1, c))
    }
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {
            this._hashCode = c.hashCount++
        }
        Object.defineProperty(c.prototype, "hashCode", {
            get: function() {
                return this._hashCode
            },
            enumerable: !0,
            configurable: !0
        });
        c.hashCount = 1;
        return c
    } ();
    c.HashObject = f;
    f.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(a) {
            void 0 === a && (a = 300);
            c.call(this);
            this.objectPool = [];
            this._length = 0;
            1 > a && (a = 1);
            this.autoDisposeTime = a;
            this.frameCount = 0
        }
        __extends(d, c);
        var b = d.prototype;
        b._checkFrame = function() {
            this.frameCount--;
            0 >= this.frameCount && this.dispose()
        };
        Object.defineProperty(b, "length", {
            get: function() {
                return this._length
            },
            enumerable: !0,
            configurable: !0
        });
        b.push = function(a) {
            var g = this.objectPool; - 1 == g.indexOf(a) && (g.push(a), a.__recycle && a.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, d._callBackList.push(this)))
        };
        b.pop = function() {
            if (0 == this._length) return null;
            this._length--;
            return this.objectPool.pop()
        };
        b.dispose = function() {
            0 < this._length && (this.objectPool = [], this._length = 0);
            this.frameCount = 0;
            var a = d._callBackList,
            g = a.indexOf(this); - 1 != g && a.splice(g, 1)
        };
        d._callBackList = [];
        return d
    } (c.HashObject);
    c.Recycler = f;
    f.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {})); (function(c) {
    c.__START_TIME;
    c.getTimer = function() {
        return Date.now() - c.__START_TIME
    }
})(egret || (egret = {})); (function(c) {
    c.__callLaterFunctionList = [];
    c.__callLaterThisList = [];
    c.__callLaterArgsList = [];
    c.callLater = function(f, e) {
        for (var d = [], b = 2; b < arguments.length; b++) d[b - 2] = arguments[b];
        c.__callLaterFunctionList.push(f);
        c.__callLaterThisList.push(e);
        c.__callLaterArgsList.push(d)
    };
    c.__callAsyncFunctionList = [];
    c.__callAsyncThisList = [];
    c.__callAsyncArgsList = [];
    c.__callAsync = function(f, e) {
        for (var d = [], b = 2; b < arguments.length; b++) d[b - 2] = arguments[b];
        c.__callAsyncFunctionList.push(f);
        c.__callAsyncThisList.push(e);
        c.__callAsyncArgsList.push(d)
    }
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {}
        var d = e.prototype;
        d.call = function(b) {
            this.callback && this.callback.call(this.thisObject, b)
        };
        d.dispose = function() {
            this.thisObject = this.callback = null;
            e.__freeList.push(this)
        };
        e.push = function(b, a) {
            var g;
            g = e.__freeList.length ? e.__freeList.pop() : new c.RenderCommand;
            g.callback = b;
            g.thisObject = a;
            c.MainContext.__DRAW_COMMAND_LIST.push(g)
        };
        e.__freeList = [];
        return e
    } ();
    c.RenderCommand = f;
    f.prototype.__class__ = "egret.RenderCommand"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g, b) {
            void 0 === g && (g = !1);
            void 0 === b && (b = !1);
            e.call(this);
            this.data = null;
            this._type = "";
            this._cancelable = this._bubbles = !1;
            this._eventPhase = 2;
            this._target = this._currentTarget = null;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = a;
            this._bubbles = g;
            this._cancelable = b
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "type", {
            get: function() {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "bubbles", {
            get: function() {
                return this._bubbles
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "cancelable", {
            get: function() {
                return this._cancelable
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "eventPhase", {
            get: function() {
                return this._eventPhase
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "currentTarget", {
            get: function() {
                return this._currentTarget
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "target", {
            get: function() {
                return this._target
            },
            enumerable: !0,
            configurable: !0
        });
        b.isDefaultPrevented = function() {
            return this._isDefaultPrevented
        };
        b.preventDefault = function() {
            this._cancelable && (this._isDefaultPrevented = !0)
        };
        b.stopPropagation = function() {
            this._bubbles && (this._isPropagationStopped = !0)
        };
        b.stopImmediatePropagation = function() {
            this._bubbles && (this._isPropagationImmediateStopped = !0)
        };
        b._reset = function() {
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
        };
        b.__recycle = function() {
            this.data = this._target = this._currentTarget = null
        };
        d._dispatchByTarget = function(a, g, b, d, e, k) {
            void 0 === e && (e = !1);
            void 0 === k && (k = !1);
            var f = a.eventRecycler;
            f || (f = a.eventRecycler = new c.Recycler);
            var l = f.pop();
            l ? l._type = b: l = new a(b);
            l._bubbles = e;
            l._cancelable = k;
            if (d) for (var m in d) l[m] = d[m],
            null !== l[m] && (d[m] = null);
            a = g.dispatchEvent(l);
            f.push(l);
            return a
        };
        d._getPropertyData = function(a) {
            var g = a._props;
            g || (g = a._props = {});
            return g
        };
        d.dispatchEvent = function(a, g, b, c) {
            void 0 === b && (b = !1);
            var e = d._getPropertyData(d);
            void 0 != c && (e.data = c);
            d._dispatchByTarget(d, a, g, e, b)
        };
        d.ADDED_TO_STAGE = "addedToStage";
        d.REMOVED_FROM_STAGE = "removedFromStage";
        d.ADDED = "added";
        d.REMOVED = "removed";
        d.COMPLETE = "complete";
        d.LOOP_COMPLETE = "loopcomplete";
        d.ENTER_FRAME = "enterFrame";
        d.RENDER = "render";
        d.FINISH_RENDER = "finishRender";
        d.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
        d.LEAVE_STAGE = "leaveStage";
        d.RESIZE = "resize";
        d.CHANGE = "change";
        d.ACTIVATE = "activate";
        d.DEACTIVATE = "deactivate";
        d.CLOSE = "close";
        d.CONNECT = "connect";
        return d
    } (c.HashObject);
    c.Event = f;
    f.prototype.__class__ = "egret.Event"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b, a, g) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            c.call(this, b, a, g);
            this._status = 0
        }
        __extends(d, c);
        Object.defineProperty(d.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !0,
            configurable: !0
        });
        d.dispatchHTTPStatusEvent = function(b, a) {
            null == d.httpStatusEvent && (d.httpStatusEvent = new d(d.HTTP_STATUS));
            d.httpStatusEvent._status = a;
            b.dispatchEvent(d.httpStatusEvent)
        };
        d.HTTP_STATUS = "httpStatus";
        d.httpStatusEvent = null;
        return d
    } (c.Event);
    c.HTTPStatusEvent = f;
    f.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b, a, g) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            c.call(this, b, a, g)
        }
        __extends(d, c);
        d.SOUND_COMPLETE = "soundComplete";
        return d
    } (c.Event);
    c.SoundEvent = f;
    f.prototype.__class__ = "egret.SoundEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b, a, g) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            c.call(this, b, a, g)
        }
        __extends(d, c);
        d.FOCUS_IN = "focusIn";
        d.FOCUS_OUT = "focusOut";
        return d
    } (c.Event);
    c.FocusEvent = f;
    f.prototype.__class__ = "egret.FocusEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(b, a, g) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            e.call(this, b, a, g)
        }
        __extends(d, e);
        d.dispatchIOErrorEvent = function(b) {
            c.Event._dispatchByTarget(d, b, d.IO_ERROR)
        };
        d.IO_ERROR = "ioError";
        return d
    } (c.Event);
    c.IOErrorEvent = f;
    f.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g, b, c, d, k, f, l, m, n) {
            void 0 === g && (g = !0);
            void 0 === b && (b = !0);
            void 0 === c && (c = 0);
            void 0 === d && (d = 0);
            void 0 === k && (k = 0);
            void 0 === f && (f = !1);
            void 0 === l && (l = !1);
            void 0 === n && (n = !1);
            e.call(this, a, g, b);
            this._stageY = this._stageX = 0;
            this.touchPointID = NaN;
            this.touchDown = this.altKey = this.shiftKey = this.ctrlKey = !1;
            this.touchPointID = c;
            this._stageX = d;
            this._stageY = k;
            this.ctrlKey = f;
            this.altKey = l;
            this.touchDown = n
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "stageX", {
            get: function() {
                return this._stageX
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "stageY", {
            get: function() {
                return this._stageY
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "localX", {
            get: function() {
                return this._currentTarget.globalToLocal(this._stageX, this._stageY, c.Point.identity).x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "localY", {
            get: function() {
                return this._currentTarget.globalToLocal(this._stageX, this._stageY, c.Point.identity).y
            },
            enumerable: !0,
            configurable: !0
        });
        d.dispatchTouchEvent = function(a, g, b, s, e, k, f, l, m) {
            void 0 === b && (b = 0);
            void 0 === s && (s = 0);
            void 0 === e && (e = 0);
            void 0 === k && (k = !1);
            void 0 === f && (f = !1);
            void 0 === l && (l = !1);
            void 0 === m && (m = !1);
            var n = c.Event._getPropertyData(d);
            n.touchPointID = b;
            n._stageX = s;
            n._stageY = e;
            n.ctrlKey = k;
            n.altKey = f;
            n.shiftKey = l;
            n.touchDown = m;
            c.Event._dispatchByTarget(d, a, g, n, !0, !0)
        };
        d.TOUCH_TAP = "touchTap";
        d.TOUCH_MOVE = "touchMove";
        d.TOUCH_BEGIN = "touchBegin";
        d.TOUCH_END = "touchEnd";
        d.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
        d.TOUCH_ROLL_OUT = "touchRollOut";
        d.TOUCH_ROLL_OVER = "touchRollOver";
        d.TOUCH_OUT = "touchOut";
        d.TOUCH_OVER = "touchOver";
        return d
    } (c.Event);
    c.TouchEvent = f;
    f.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(b, a, g) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            e.call(this, b, a, g)
        }
        __extends(d, e);
        d.dispatchTimerEvent = function(b, a) {
            c.Event._dispatchByTarget(d, b, a)
        };
        d.TIMER = "timer";
        d.TIMER_COMPLETE = "timerComplete";
        return d
    } (c.Event);
    c.TimerEvent = f;
    f.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(b, a, g, u) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            void 0 === u && (u = "");
            e.call(this, b, a, g);
            this.text = u
        }
        __extends(d, e);
        d.dispatchTextEvent = function(b, a, g) {
            var u = c.Event._getPropertyData(d);
            u.text = g;
            c.Event._dispatchByTarget(d, b, a, u)
        };
        d.LINK = "link";
        return d
    } (c.Event);
    c.TextEvent = f;
    f.prototype.__class__ = "egret.TextEvent"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(b, a, g, u, c) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            void 0 === u && (u = 0);
            void 0 === c && (c = 0);
            e.call(this, b, a, g);
            this.bytesTotal = this.bytesLoaded = 0;
            this.bytesLoaded = u;
            this.bytesTotal = c
        }
        __extends(d, e);
        d.dispatchProgressEvent = function(b, a, g, u) {
            void 0 === g && (g = 0);
            void 0 === u && (u = 0);
            c.Event._dispatchByTarget(d, b, a, {
                bytesLoaded: g,
                bytesTotal: u
            })
        };
        d.PROGRESS = "progress";
        d.SOCKET_DATA = "socketData";
        return d
    } (c.Event);
    c.ProgressEvent = f;
    f.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.CAPTURING_PHASE = 1;
        c.AT_TARGET = 2;
        c.BUBBLING_PHASE = 3;
        return c
    } ();
    c.EventPhase = f;
    f.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            void 0 === a && (a = null);
            e.call(this);
            this._captureEventsMap = this._eventsMap = this._eventTarget = null;
            this._eventTarget = a ? a: this
        }
        __extends(d, e);
        var b = d.prototype;
        b.addEventListener = function(a, g, b, d, e) {
            void 0 === d && (d = !1);
            void 0 === e && (e = 0);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof e && (e = 0);
            g || c.$error(1010);
            d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
            var k = d[a];
            k || (k = d[a] = []);
            this._insertEventBin(k, g, b, e)
        };
        b._insertEventBin = function(a, g, b, c, d) {
            void 0 === d && (d = void 0);
            for (var e = -1,
            f = a.length,
            l = 0; l < f; l++) {
                var m = a[l];
                if (m.listener == g && m.thisObject == b && m.display == d) return ! 1; - 1 == e && m.priority < c && (e = l)
            }
            g = {
                listener: g,
                thisObject: b,
                priority: c
            };
            d && (g.display = d); - 1 != e ? a.splice(e, 0, g) : a.push(g);
            return ! 0
        };
        b.removeEventListener = function(a, g, b, c) {
            void 0 === c && (c = !1);
            if (c = c ? this._captureEventsMap: this._eventsMap) {
                var d = c[a];
                d && (this._removeEventBin(d, g, b), 0 == d.length && delete c[a])
            }
        };
        b._removeEventBin = function(a, g, b, c, d) {
            void 0 === c && (c = void 0);
            void 0 === d && (d = 0);
            for (var e = a.length; d < e; d++) {
                var f = a[d];
                if (f.listener == g && f.thisObject == b && f.display == c) return a.splice(d, 1),
                !0
            }
            return ! 1
        };
        b.hasEventListener = function(a) {
            return !! (this._eventsMap && this._eventsMap[a] || this._captureEventsMap && this._captureEventsMap[a])
        };
        b.willTrigger = function(a) {
            return this.hasEventListener(a)
        };
        b.dispatchEvent = function(a) {
            a._reset();
            a._target = this._eventTarget;
            a._currentTarget = this._eventTarget;
            return this._notifyListener(a)
        };
        b._notifyListener = function(a) {
            var g = 1 == a._eventPhase ? this._captureEventsMap: this._eventsMap;
            if (!g) return ! 0;
            g = g[a._type];
            if (!g) return ! 0;
            var b = g.length;
            if (0 == b) return ! 0;
            for (var g = g.concat(), c = 0; c < b; c++) {
                var d = g[c];
                d.listener.call(d.thisObject, a);
                if (a._isPropagationImmediateStopped) break
            }
            return ! a._isDefaultPrevented
        };
        b.dispatchEventWith = function(a, g, b) {
            void 0 === g && (g = !1);
            c.Event.dispatchEvent(this, a, g, b)
        };
        return d
    } (c.HashObject);
    c.EventDispatcher = f;
    f.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.stage = this.deviceContext = this.netContext = this.touchContext = this.rendererContext = null;
            this.reuseEvent = new c.Event("")
        }
        __extends(d, e);
        var b = d.prototype;
        b.run = function() {
            c.Ticker.getInstance().run();
            c.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            c.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run();
            this._profileInstance = c.Profiler.getInstance()
        };
        b.renderLoop = function(a) {
            if (0 < c.__callLaterFunctionList.length) {
                var g = c.__callLaterFunctionList;
                c.__callLaterFunctionList = [];
                var b = c.__callLaterThisList;
                c.__callLaterThisList = [];
                var s = c.__callLaterArgsList;
                c.__callLaterArgsList = []
            }
            a = this.stage;
            var e = d.cachedEvent;
            e._type = c.Event.RENDER;
            this.dispatchEvent(e);
            c.Stage._invalidateRenderFlag && (this.broadcastRender(), c.Stage._invalidateRenderFlag = !1);
            g && this.doCallLaterList(g, b, s);
            0 < c.__callAsyncFunctionList.length && this.doCallAsyncList();
            g = this.rendererContext;
            g.onRenderStart();
            g.clearScreen();
            d.__DRAW_COMMAND_LIST = [];
            d._renderLoopPhase = "updateTransform";
            a._updateTransform();
            d._renderLoopPhase = "draw";
            e._type = c.Event.FINISH_UPDATE_TRANSFORM;
            this.dispatchEvent(e);
            d.__use_new_draw ? this._draw(g) : a._draw(g);
            e._type = c.Event.FINISH_RENDER;
            this.dispatchEvent(e);
            this._profileInstance._isRunning && this._profileInstance._drawProfiler(g);
            g.onRenderFinish()
        };
        b._draw = function(a) {
            for (var g = d.__DRAW_COMMAND_LIST,
            b = g.length,
            c = 0; c < b; c++) {
                var e = g[c];
                e.call(a);
                e.dispose()
            }
        };
        b.broadcastEnterFrame = function(a) {
            a = this.reuseEvent;
            a._type = c.Event.ENTER_FRAME;
            this.dispatchEvent(a);
            for (var g = c.DisplayObject._enterFrameCallBackList.concat(), b = g.length, d = 0; d < b; d++) {
                var e = g[d];
                a._target = e.display;
                a._currentTarget = e.display;
                e.listener.call(e.thisObject, a)
            }
            g = c.Recycler._callBackList;
            for (d = g.length - 1; 0 <= d; d--) g[d]._checkFrame()
        };
        b.broadcastRender = function() {
            var a = this.reuseEvent;
            a._type = c.Event.RENDER;
            for (var g = c.DisplayObject._renderCallBackList.concat(), b = g.length, d = 0; d < b; d++) {
                var e = g[d],
                k = e.display;
                a._target = k;
                a._currentTarget = k;
                e.listener.call(e.thisObject, a)
            }
        };
        b.doCallLaterList = function(a, g, b) {
            for (var c = a.length,
            d = 0; d < c; d++) {
                var e = a[d];
                null != e && e.apply(g[d], b[d])
            }
        };
        b.doCallAsyncList = function() {
            var a = c.__callAsyncFunctionList.concat(),
            g = c.__callAsyncThisList.concat(),
            b = c.__callAsyncArgsList.concat();
            c.__callAsyncFunctionList.length = 0;
            c.__callAsyncThisList.length = 0;
            for (var d = c.__callAsyncArgsList.length = 0; d < a.length; d++) {
                var e = a[d];
                null != e && e.apply(g[d], b[d])
            }
        };
        d.deviceType = null;
        d.DEVICE_PC = "web";
        d.DEVICE_MOBILE = "native";
        d.RUNTIME_HTML5 = "runtimeHtml5";
        d.RUNTIME_NATIVE = "runtimeNative";
        d.__DRAW_COMMAND_LIST = [];
        d.__use_new_draw = !0;
        d.cachedEvent = new c.Event("");
        return d
    } (c.EventDispatcher);
    c.MainContext = f;
    f.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator) return ! 0;
    var c = navigator.userAgent.toLowerCase();
    return - 1 != c.indexOf("mobile") || -1 != c.indexOf("android")
},
testRuntimeType = function() {
    return this.navigator ? !0 : !1
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5: egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType; (function(c) {
    var f = function() {
        function e() {
            this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
            this._calculatePreDrawCount = !0;
            this._txt = null;
            this._tick = 0;
            this._maxDeltaTime = 500;
            this._totalDeltaTime = 0;
            this._isRunning = !1
        }
        var d = e.prototype;
        e.getInstance = function() {
            null == e.instance && (e.instance = new e);
            return e.instance
        };
        d.stop = function() {
            if (this._isRunning) {
                this._isRunning = !1;
                c.Ticker.getInstance().unregister(this.update, this);
                var b = c.MainContext.instance;
                b.removeEventListener(c.Event.ENTER_FRAME, this.onEnterFrame, this);
                b.removeEventListener(c.Event.RENDER, this.onStartRender, this);
                b.removeEventListener(c.Event.FINISH_RENDER, this.onFinishRender, this);
                b.removeEventListener(c.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
            }
        };
        d.run = function() {
            null == this._txt && (this._txt = new c.TextField, this._txt.size = 28, this._txt.multiline = !0, this._txt._DO_Props_._parent = new c.DisplayObjectContainer);
            if (!this._isRunning) {
                this._isRunning = !0;
                c.Ticker.getInstance().register(this.update, this);
                var b = c.MainContext.instance;
                b.addEventListener(c.Event.ENTER_FRAME, this.onEnterFrame, this);
                b.addEventListener(c.Event.RENDER, this.onStartRender, this);
                b.addEventListener(c.Event.FINISH_RENDER, this.onFinishRender, this);
                b.addEventListener(c.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
            }
        };
        d._drawProfiler = function(b) {
            "_drawWebGL" in b && b._drawWebGL();
            this._calculatePreDrawCount = !1;
            this._txt._updateTransform();
            this._txt._draw(b)
        };
        d._setTxtFontSize = function(b) {
            this._txt.size = b
        };
        d.onEnterFrame = function(b) {
            this._lastTime = c.getTimer()
        };
        d.onStartRender = function(b) {
            b = c.getTimer();
            this._logicPerformanceCost = b - this._lastTime;
            this._lastTime = b
        };
        d.onFinishUpdateTransform = function(b) {
            b = c.getTimer();
            this._updateTransformPerformanceCost = b - this._lastTime;
            this._lastTime = b
        };
        d.onFinishRender = function(b) {
            b = c.getTimer();
            this._renderPerformanceCost = b - this._lastTime;
            this._lastTime = b
        };
        d.update = function(b) {
            this._tick++;
            this._totalDeltaTime += b;
            if (this._totalDeltaTime >= this._maxDeltaTime) {
                b = this._preDrawCount.toString();
                var a = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(c.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + b + "\ncost:" + a + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0;
            this._calculatePreDrawCount = !0
        };
        d.onDrawImage = function() {
            this._calculatePreDrawCount && this._preDrawCount++
        };
        return e
    } ();
    c.Profiler = f;
    f.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._timeScale = 1;
            this._paused = !1;
            this._callIndex = -1;
            this.callBackList = [];
            null != d.instance && c.$error(1002)
        }
        __extends(d, e);
        var b = d.prototype;
        b.run = function() {
            c.__START_TIME = (new Date).getTime();
            c.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        };
        b.update = function(a) {
            if (!this._paused) {
                a *= this._timeScale;
                this._callList = this.callBackList.concat();
                for (this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
                    var g = this._callList[this._callIndex];
                    g.listener.call(g.thisObject, a)
                }
                this._callIndex = -1;
                this._callList = null
            }
        };
        b.register = function(a, g, b) {
            void 0 === b && (b = 0);
            this._insertEventBin(this.callBackList, a, g, b)
        };
        b.unregister = function(a, g) {
            this._removeEventBin(this.callBackList, a, g);
            this._callList && -1 < this._callIndex && this._removeEventBin(this._callList, a, g, null, this._callIndex + 1)
        };
        b.setTimeout = function(a, g, b) {
            for (var d = [], e = 3; e < arguments.length; e++) d[e - 3] = arguments[e];
            c.$warn(1003);
            c.setTimeout.apply(null, [a, g, b].concat(d))
        };
        b.setTimeScale = function(a) {
            this._timeScale = a
        };
        b.getTimeScale = function() {
            return this._timeScale
        };
        b.pause = function() {
            this._paused = !0
        };
        b.resume = function() {
            this._paused = !1
        };
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        return d
    } (c.EventDispatcher);
    c.Ticker = f;
    f.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.LEFT = "left";
        c.RIGHT = "right";
        c.CENTER = "center";
        c.JUSTIFY = "justify";
        c.CONTENT_JUSTIFY = "contentJustify";
        return c
    } ();
    c.HorizontalAlign = f;
    f.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.TOP = "top";
        c.BOTTOM = "bottom";
        c.MIDDLE = "middle";
        c.JUSTIFY = "justify";
        c.CONTENT_JUSTIFY = "contentJustify";
        return c
    } ();
    c.VerticalAlign = f;
    f.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g) {
            void 0 === g && (g = 0);
            e.call(this);
            this._currentCount = 0;
            this._running = !1;
            this.lastTime = 0;
            this.delay = a;
            this.repeatCount = g
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "currentCount", {
            get: function() {
                return this._currentCount
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "running", {
            get: function() {
                return this._running
            },
            enumerable: !0,
            configurable: !0
        });
        b.reset = function() {
            this.stop();
            this._currentCount = 0
        };
        b.start = function() {
            this._running || (this.lastTime = c.getTimer(), c.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
        };
        b.stop = function() {
            this._running && (c.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
        };
        b.onEnterFrame = function(a) {
            a = c.getTimer();
            a - this.lastTime > this.delay && (this.lastTime = a, this._currentCount++, c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER_COMPLETE)))
        };
        return d
    } (c.EventDispatcher);
    c.Timer = f;
    f.prototype.__class__ = "egret.Timer"
})(egret || (egret = {})); (function(c) {
    function f(c) {
        c = c.prototype ? c.prototype: Object.getPrototypeOf(c);
        if (c.hasOwnProperty("__class__")) return c.__class__;
        var d = c.constructor.toString(),
        b = d.indexOf("("),
        d = d.substring(9, b);
        Object.defineProperty(c, "__class__", {
            value: d,
            enumerable: !1,
            writable: !0
        });
        return d
    }
    c.getQualifiedClassName = f;
    c.getQualifiedSuperclassName = function(c) {
        c = c.prototype ? c.prototype: Object.getPrototypeOf(c);
        if (c.hasOwnProperty("__superclass__")) return c.__superclass__;
        var d = Object.getPrototypeOf(c);
        if (null == d) return null;
        d = f(d.constructor);
        if (!d) return null;
        Object.defineProperty(c, "__superclass__", {
            value: d,
            enumerable: !1,
            writable: !0
        });
        return d
    }
})(egret || (egret = {})); (function(c) {
    var f = {};
    c.getDefinitionByName = function(c) {
        if (!c) return null;
        var d = f[c];
        if (d) return d;
        for (var b = c.split("."), a = b.length, d = __global, g = 0; g < a; g++) if (d = d[b[g]], !d) return null;
        return f[c] = d
    }
})(egret || (egret = {}));
var __global = __global || this; (function(c) {
    function f(b) {
        for (var a in e) {
            var g = e[a];
            g.delay -= b;
            0 >= g.delay && (g.listener.apply(g.thisObject, g.params), delete e[a])
        }
    }
    var e = {},
    d = 0;
    c.setTimeout = function(b, a, g) {
        for (var u = [], s = 3; s < arguments.length; s++) u[s - 3] = arguments[s];
        u = {
            listener: b,
            thisObject: a,
            delay: g,
            params: u
        };
        0 == d && c.Ticker.getInstance().register(f, null);
        d++;
        e[d] = u;
        return d
    };
    c.clearTimeout = function(b) {
        delete e[b]
    }
})(egret || (egret = {})); (function(c) {
    function f(b) {
        for (var a in e) {
            var g = e[a];
            g.delay -= b;
            0 >= g.delay && (g.delay = g.originDelay, g.listener.apply(g.thisObject, g.params))
        }
    }
    var e = {},
    d = 0;
    c.setInterval = function(b, a, g) {
        for (var u = [], s = 3; s < arguments.length; s++) u[s - 3] = arguments[s];
        u = {
            listener: b,
            thisObject: a,
            delay: g,
            originDelay: g,
            params: u
        };
        0 == d && c.Ticker.getInstance().register(f, null);
        d++;
        e[d] = u;
        return d
    };
    c.clearInterval = function(b) {
        delete e[b]
    }
})(egret || (egret = {})); (function(c) {
    c.hasDefinition = function(f) {
        return c.getDefinitionByName(f) ? !0 : !1
    }
})(egret || (egret = {})); (function(c) {
    c.toColorString = function(c) {
        if (isNaN(c) || 0 > c) c = 0;
        16777215 < c && (c = 16777215);
        for (c = c.toString(16).toUpperCase(); 6 > c.length;) c = "0" + c;
        return "#" + c
    }
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g, b, c, d, k) {
            void 0 === a && (a = 1);
            void 0 === g && (g = 0);
            void 0 === b && (b = 0);
            void 0 === c && (c = 1);
            void 0 === d && (d = 0);
            void 0 === k && (k = 0);
            e.call(this);
            this.a = a;
            this.b = g;
            this.c = b;
            this.d = c;
            this.tx = d;
            this.ty = k
        }
        __extends(d, e);
        var b = d.prototype;
        b.prepend = function(a, g, b, c, d, e) {
            var f = this.tx;
            if (1 != a || 0 != g || 0 != b || 1 != c) {
                var l = this.a,
                m = this.c;
                this.a = l * a + this.b * b;
                this.b = l * g + this.b * c;
                this.c = m * a + this.d * b;
                this.d = m * g + this.d * c
            }
            this.tx = f * a + this.ty * b + d;
            this.ty = f * g + this.ty * c + e;
            return this
        };
        b.append = function(a, g, b, c, d, e) {
            var f = this.a,
            l = this.b,
            m = this.c,
            n = this.d;
            if (1 != a || 0 != g || 0 != b || 1 != c) this.a = a * f + g * m,
            this.b = a * l + g * n,
            this.c = b * f + c * m,
            this.d = b * l + c * n;
            this.tx = d * f + e * m + this.tx;
            this.ty = d * l + e * n + this.ty;
            return this
        };
        b.prependTransform = function(a, g, b, d, e, k, f, l, m) {
            if (e % 360) {
                var n = c.NumberUtils.cos(e);
                e = c.NumberUtils.sin(e)
            } else n = 1,
            e = 0;
            if (l || m) this.tx -= l,
            this.ty -= m;
            k || f ? (this.prepend(n * b, e * b, -e * d, n * d, 0, 0), this.prepend(c.NumberUtils.cos(f), c.NumberUtils.sin(f), -c.NumberUtils.sin(k), c.NumberUtils.cos(k), a, g)) : this.prepend(n * b, e * b, -e * d, n * d, a, g);
            return this
        };
        b.appendTransform = function(a, g, b, d, e, k, f, l, m) {
            if (e % 360) {
                var n = c.NumberUtils.cos(e);
                e = c.NumberUtils.sin(e)
            } else n = 1,
            e = 0;
            k || f ? (this.append(c.NumberUtils.cos(f), c.NumberUtils.sin(f), -c.NumberUtils.sin(k), c.NumberUtils.cos(k), a, g), this.append(n * b, e * b, -e * d, n * d, 0, 0)) : this.append(n * b, e * b, -e * d, n * d, a, g);
            if (l || m) this.tx -= l * this.a + m * this.c,
            this.ty -= l * this.b + m * this.d;
            return this
        };
        b.rotate = function(a) {
            var g = Math.cos(a);
            a = Math.sin(a);
            var b = this.a,
            c = this.c,
            d = this.tx;
            this.a = b * g - this.b * a;
            this.b = b * a + this.b * g;
            this.c = c * g - this.d * a;
            this.d = c * a + this.d * g;
            this.tx = d * g - this.ty * a;
            this.ty = d * a + this.ty * g;
            return this
        };
        b.skew = function(a, g) {
            this.append(c.NumberUtils.cos(g), c.NumberUtils.sin(g), -c.NumberUtils.sin(a), c.NumberUtils.cos(a), 0, 0);
            return this
        };
        b.scale = function(a, g) {
            this.a *= a;
            this.d *= g;
            this.c *= a;
            this.b *= g;
            this.tx *= a;
            this.ty *= g;
            return this
        };
        b.translate = function(a, g) {
            this.tx += a;
            this.ty += g;
            return this
        };
        b.identity = function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this
        };
        b.identityMatrix = function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.tx = a.tx;
            this.ty = a.ty;
            return this
        };
        b.invert = function() {
            var a = this.a,
            g = this.b,
            b = this.c,
            c = this.d,
            d = this.tx,
            e = a * c - g * b;
            this.a = c / e;
            this.b = -g / e;
            this.c = -b / e;
            this.d = a / e;
            this.tx = (b * this.ty - c * d) / e;
            this.ty = -(a * this.ty - g * d) / e;
            return this
        };
        d.transformCoords = function(a, g, b) {
            var d = c.Point.identity;
            d.x = a.a * g + a.c * b + a.tx;
            d.y = a.d * b + a.b * g + a.ty;
            return d
        };
        b.toArray = function(a) {
            this.array || (this.array = new Float32Array(9));
            a ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
            this.array[8] = 1;
            return this.array
        };
        b.setTo = function(a, g, b, c, d, e) {
            this.a = a;
            this.b = g;
            this.c = b;
            this.d = c;
            this.tx = d;
            this.ty = e
        };
        b.copyFrom = function(a) {
            this.identityMatrix(a)
        };
        b.clone = function() {
            return new d(this.a, this.b, this.c, this.d, this.tx, this.ty)
        };
        b.concat = function(a) {
            var g = this.a,
            b = this.b,
            c = this.c,
            d = this.d,
            e = this.tx,
            f = this.ty,
            l = a.a,
            m = a.b,
            n = a.c,
            p = a.d,
            r = g * l,
            q = 0,
            x = 0,
            z = d * p,
            w = e * l + a.tx;
            a = f * p + a.ty;
            if (0 != b || 0 != c || 0 != m || 0 != n) r += b * n,
            z += c * m,
            q += g * m + b * p,
            x += c * l + d * n,
            w += f * n,
            a += e * m;
            this.a = r;
            this.b = q;
            this.c = x;
            this.d = z;
            this.tx = w;
            this.ty = a
        };
        b.deltaTransformPoint = function(a) {
            return new c.Point(this.a * a.x + this.c * a.y, this.b * a.x + this.d * a.y)
        };
        b.transformPoint = function(a) {
            return new c.Point(this.a * a.x + this.c * a.y + this.tx, this.b * a.x + this.d * a.y + this.ty)
        };
        b.toString = function() {
            return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
        };
        b.createBox = function(a, g, b, d, e) {
            void 0 === b && (b = 0);
            void 0 === d && (d = 0);
            void 0 === e && (e = 0);
            if (0 !== b) {
                b /= c.Matrix.DEG_TO_RAD;
                var k = c.NumberUtils.cos(b);
                b = c.NumberUtils.sin(b);
                this.a = k * a;
                this.b = b * g;
                this.c = -b * a;
                this.d = k * g
            } else this.a = a,
            this.c = this.b = 0,
            this.d = g;
            this.tx = d;
            this.ty = e
        };
        b.createGradientBox = function(a, g, b, c, d) {
            void 0 === b && (b = 0);
            void 0 === c && (c = 0);
            void 0 === d && (d = 0);
            this.createBox(a / 1638.4, g / 1638.4, b, c + a / 2, d + g / 2)
        };
        d.identity = new d;
        d.DEG_TO_RAD = Math.PI / 180;
        return d
    } (c.HashObject);
    c.Matrix = f;
    f.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g) {
            void 0 === a && (a = 0);
            void 0 === g && (g = 0);
            e.call(this);
            this.x = a;
            this.y = g
        }
        __extends(d, e);
        var b = d.prototype;
        b.clone = function() {
            return new d(this.x, this.y)
        };
        b.equals = function(a) {
            return this.x == a.x && this.y == a.y
        };
        d.distance = function(a, g) {
            return Math.sqrt((a.x - g.x) * (a.x - g.x) + (a.y - g.y) * (a.y - g.y))
        };
        b.setTo = function(a, g) {
            this.x = a;
            this.y = g
        };
        b.copyFrom = function(a) {
            this.x = a.x;
            this.y = a.y
        };
        Object.defineProperty(b, "length", {
            get: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            enumerable: !0,
            configurable: !0
        });
        b.add = function(a) {
            return new d(this.x + a.x, this.y + a.y)
        };
        d.interpolate = function(a, g, b) {
            var c = 1 - b;
            return new d(a.x * b + g.x * c, a.y * b + g.y * c)
        };
        b.normalize = function(a) {
            if (0 != this.x || 0 != this.y) a /= this.length,
            this.x *= a,
            this.y *= a
        };
        b.offset = function(a, g) {
            this.x += a;
            this.y += g
        };
        d.polar = function(a, g) {
            return new d(a * c.NumberUtils.cos(g / c.Matrix.DEG_TO_RAD), a * c.NumberUtils.sin(g / c.Matrix.DEG_TO_RAD))
        };
        b.subtract = function(a) {
            return new d(this.x - a.x, this.y - a.y)
        };
        b.toString = function() {
            return "(x=" + this.x + ", y=" + this.y + ")"
        };
        d.identity = new d(0, 0);
        return d
    } (c.HashObject);
    c.Point = f;
    f.prototype.__class__ = "egret.Point"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g, b, c) {
            void 0 === a && (a = 0);
            void 0 === g && (g = 0);
            void 0 === b && (b = 0);
            void 0 === c && (c = 0);
            e.call(this);
            this.x = a;
            this.y = g;
            this.width = b;
            this.height = c
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "left", {
            get: function() {
                return this.x
            },
            set: function(a) {
                this.width += this.x - a;
                this.x = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "right", {
            get: function() {
                return this.x + this.width
            },
            set: function(a) {
                this.width = a - this.x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "top", {
            get: function() {
                return this.y
            },
            set: function(a) {
                this.height += this.y - a;
                this.y = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "bottom", {
            get: function() {
                return this.y + this.height
            },
            set: function(a) {
                this.height = a - this.y
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "topLeft", {
            get: function() {
                return new c.Point(this.left, this.top)
            },
            set: function(a) {
                this.top = a.y;
                this.left = a.x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "bottomRight", {
            get: function() {
                return new c.Point(this.right, this.bottom)
            },
            set: function(a) {
                this.bottom = a.y;
                this.right = a.x
            },
            enumerable: !0,
            configurable: !0
        });
        b.initialize = function(a, g, b, c) {
            this.x = a;
            this.y = g;
            this.width = b;
            this.height = c;
            return this
        };
        b.contains = function(a, g) {
            return this.x <= a && this.x + this.width >= a && this.y <= g && this.y + this.height >= g
        };
        b.intersects = function(a) {
            return Math.max(this.x, a.x) <= Math.min(this.right, a.right) && Math.max(this.y, a.y) <= Math.min(this.bottom, a.bottom)
        };
        b.setEmpty = function() {
            this.height = this.width = this.y = this.x = 0
        };
        b.clone = function() {
            return new d(this.x, this.y, this.width, this.height)
        };
        b.containsPoint = function(a) {
            return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
        };
        b.setTo = function(a, g, b, c) {
            this.initialize(a, g, b, c)
        };
        b.copyFrom = function(a) {
            this.x = a.x;
            this.y = a.y;
            this.width = a.width;
            this.height = a.height
        };
        b.inflate = function(a, g) {
            this.x -= a;
            this.width += 2 * a;
            this.y -= g;
            this.height += 2 * g
        };
        b.isEmpty = function() {
            return 0 == this.width || 0 == this.height
        };
        b.containsRect = function(a) {
            var g = a.x + a.width,
            b = a.y + a.height,
            c = this.x + this.width,
            d = this.y + this.height;
            return a.x >= this.x && a.x < c && a.y >= this.y && a.y < d && g > this.x && g <= c && b > this.y && b <= d
        };
        b.equals = function(a) {
            return this === a ? !0 : this.x === a.x && this.y === a.y && this.width === a.width && this.height === a.height
        };
        b.inflatePoint = function(a) {
            this.inflate(a.x, a.y)
        };
        b.intersection = function(a) {
            var g = this.clone(),
            b = g.x,
            c = g.y,
            d = a.x,
            e = a.y,
            f = Math.max(b, d),
            b = Math.min(b + g.width, d + a.width);
            if (f <= b && (d = Math.max(c, e), a = Math.min(c + g.height, e + a.height), d <= a)) return g.setTo(f, d, b - f, a - d),
            g;
            g.setEmpty();
            return g
        };
        b.offset = function(a, g) {
            this.x += a;
            this.y += g
        };
        b.offsetPoint = function(a) {
            this.offset(a.x, a.y)
        };
        b.toString = function() {
            return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
        };
        b.union = function(a) {
            var g = this.clone();
            if (a.isEmpty()) return g;
            if (g.isEmpty()) return g.copyFrom(a),
            g;
            var b = Math.min(g.x, a.x),
            c = Math.min(g.y, a.y);
            g.setTo(b, c, Math.max(g.right, a.right) - b, Math.max(g.bottom, a.bottom) - c);
            return g
        };
        d.identity = new d(0, 0, 0, 0);
        return d
    } (c.HashObject);
    c.Rectangle = f;
    f.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(a, g, b, d, t, f, h, l) {
            void 0 === a && (a = 1);
            void 0 === g && (g = 1);
            void 0 === b && (b = 1);
            void 0 === d && (d = 1);
            void 0 === t && (t = 0);
            void 0 === f && (f = 0);
            void 0 === h && (h = 0);
            void 0 === l && (l = 0);
            c.call(this);
            this._redMultiplier = a;
            this._greenMultiplier = g;
            this._blueMultiplier = b;
            this._alphaMultiplier = d;
            this._redOffset = t;
            this._greenOffset = f;
            this._blueOffset = h;
            this._alphaOffset = l
        }
        __extends(d, c);
        var b = d.prototype;
        Object.defineProperty(b, "alphaMultiplier", {
            get: function() {
                return this._alphaMultiplier
            },
            set: function(a) {
                this._alphaMultiplier = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "alphaOffset", {
            get: function() {
                return this._alphaOffset
            },
            set: function(a) {
                this._alphaOffset = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "blueMultiplier", {
            get: function() {
                return this._blueMultiplier
            },
            set: function(a) {
                this._blueMultiplier = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "blueOffset", {
            get: function() {
                return this._blueOffset
            },
            set: function(a) {
                this._blueOffset = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "greenMultiplier", {
            get: function() {
                return this._greenMultiplier
            },
            set: function(a) {
                this._greenMultiplier = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "greenOffset", {
            get: function() {
                return this._greenOffset
            },
            set: function(a) {
                this._greenOffset = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "redMultiplier", {
            get: function() {
                return this._redMultiplier
            },
            set: function(a) {
                this._redMultiplier = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "redOffset", {
            get: function() {
                return this._redOffset
            },
            set: function(a) {
                this._redOffset = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "color", {
            get: function() {
                return this._redOffset << 16 + this._greenOffset << 8 + this._blueOffset
            },
            enumerable: !0,
            configurable: !0
        });
        b.identityColorTransform = function(a) {
            this._alphaMultiplier = a._alphaMultiplier;
            this._alphaOffset = a._alphaOffset;
            this._redMultiplier = a._redMultiplier;
            this._redOffset = a._redOffset;
            this._greenMultiplier = a._greenMultiplier;
            this._greenOffset = a._greenOffset;
            this._blueMultiplier = a._blueMultiplier;
            this._blueOffset = a._blueOffset
        };
        b.concat = function(a) {
            this._redMultiplier *= a._redMultiplier;
            this._greenMultiplier *= a._greenMultiplier;
            this._blueMultiplier *= a._blueMultiplier;
            this._alphaMultiplier *= a._alphaMultiplier;
            this._redOffset += a._redOffset;
            this._greenOffset += a._greenOffset;
            this._blueOffset += a._blueOffset;
            this._alphaOffset += a._alphaOffset
        };
        b.toString = function() {
            return "(redMultiplier=" + this._redMultiplier + ", greenMultiplier=" + this._greenMultiplier + ", blueMultiplier=" + this._blueMultiplier + ", alphaMultiplier=" + this._alphaMultiplier + ", redOffset=" + this._redOffset + ", greenOffset=" + this._greenOffset + ", blueOffset=" + this._blueOffset + ", alphaOffset=" + this._alphaOffset + ")"
        };
        return d
    } (c.HashObject);
    c.ColorTransform = f;
    f.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            e.call(this);
            this._matrix = new c.Matrix;
            this._matrix2 = new c.Matrix;
            this._colorTransform = new c.ColorTransform;
            this._colorTransform2 = new c.ColorTransform;
            this._display = a
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "matrix", {
            get: function() {
                this._matrix2.identityMatrix(this._matrix);
                return this._matrix2
            },
            set: function(a) {
                this._setMatrix(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setMatrix = function(a) {
            this._display.__hack_local_matrix || (this._display.__hack_local_matrix = new c.Matrix);
            this._display.__hack_local_matrix.identityMatrix(a);
            this._matrix.identityMatrix(a)
        };
        Object.defineProperty(b, "colorTransform", {
            get: function() {
                this._colorTransform2.identityColorTransform(this._colorTransform);
                return this._colorTransform2
            },
            set: function(a) {
                this._setColorTransform(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setColorTransform = function(a) {
            this._colorTransform.identityColorTransform(a)
        };
        return d
    } (c.HashObject);
    c.Transform = f;
    f.prototype.__class__ = "egret.Transform"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._isSupportDOMParser = this._xmlDict = this._parser = null;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }
        __extends(d, e);
        var b = d.prototype;
        d.getInstance = function() {
            d._instance || (d._instance = new d);
            return d._instance
        };
        b.parserXML = function(a) {
            for (var g = 0;
            "\n" == a.charAt(g) || "\t" == a.charAt(g) || "\r" == a.charAt(g) || " " == a.charAt(g);) g++;
            0 != g && (a = a.substring(g, a.length));
            this._isSupportDOMParser ? g = this._parser.parseFromString(a, "text/xml") : (g = new ActiveXObject("Microsoft.XMLDOM"), g.async = "false", g.loadXML(a));
            null == g && c.$warn(1015);
            return g
        };
        d._instance = null;
        return d
    } (c.HashObject);
    c.SAXParser = f;
    f.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {})); (function(c) {
    var f = function(a) {
        function b() {
            a.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            this._stageHeight = this._stageWidth = this._offSetY = 0
        }
        __extends(b, a);
        var s = b.prototype;
        b.getInstance = function() {
            null == b.instance && (d.initialize(), b.instance = new b);
            return b.instance
        };
        s.setDesignSize = function(a, g, b) {
            this._designWidth = a;
            this._designHeight = g;
            b && (c.$warn(1001), this._setResolutionPolicy(b))
        };
        s._setResolutionPolicy = function(a) {
            this._resolutionPolicy = a;
            a.init(this);
            a._apply(this, this._designWidth, this._designHeight)
        };
        s.getScaleX = function() {
            return this._scaleX
        };
        s.getScaleY = function() {
            return this._scaleY
        };
        s.getOffSetY = function() {
            return this._offSetY
        };
        b.canvas_name = "egretCanvas";
        b.egret_root_div = "gameDiv";
        b.canvas_div_name = "canvasDiv";
        return b
    } (c.HashObject);
    c.StageDelegate = f;
    f.prototype.__class__ = "egret.StageDelegate";
    var e = function() {
        function a(g, b) {
            this._containerStrategy = g;
            this._contentStrategy = b
        }
        var b = a.prototype;
        b.init = function(a) {
            this._containerStrategy.init(a);
            this._contentStrategy.init(a)
        };
        b._apply = function(a, g, b) {
            this._containerStrategy._apply(a, g, b);
            this._contentStrategy._apply(a, g, b)
        };
        return a
    } ();
    c.ResolutionPolicy = e;
    e.prototype.__class__ = "egret.ResolutionPolicy";
    var d = function() {
        function a() {}
        var c = a.prototype;
        a.initialize = function() {
            a.EQUAL_TO_FRAME = new b
        };
        c.init = function(a) {};
        c._apply = function(a, g, b) {};
        c._setupContainer = function() {
            var a = document.body,
            g;
            a && (g = a.style) && (g.paddingTop = g.paddingTop || "0px", g.paddingRight = g.paddingRight || "0px", g.paddingBottom = g.paddingBottom || "0px", g.paddingLeft = g.paddingLeft || "0px", g.borderTop = g.borderTop || "0px", g.borderRight = g.borderRight || "0px", g.borderBottom = g.borderBottom || "0px", g.borderLeft = g.borderLeft || "0px", g.marginTop = g.marginTop || "0px", g.marginRight = g.marginRight || "0px", g.marginBottom = g.marginBottom || "0px", g.marginLeft = g.marginLeft || "0px")
        };
        return a
    } ();
    c.ContainerStrategy = d;
    d.prototype.__class__ = "egret.ContainerStrategy";
    var b = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        __extends(b, a);
        b.prototype._apply = function(a) {
            this._setupContainer()
        };
        return b
    } (d);
    c.EqualToFrame = b;
    b.prototype.__class__ = "egret.EqualToFrame";
    e = function() {
        function a() {}
        var b = a.prototype;
        b.init = function(a) {};
        b._apply = function(a, g, b) {};
        b.setEgretSize = function(a, g, b, d, u, e) {
            void 0 === e && (e = 0);
            c.StageDelegate.getInstance()._stageWidth = Math.round(a);
            c.StageDelegate.getInstance()._stageHeight = Math.round(g);
            a = document.getElementById(f.canvas_div_name);
            g = document.getElementById(f.egret_root_div);
            a || (a = c.Browser.getInstance().$new("div"), a.id = f.canvas_div_name, g.appendChild(a));
            a.style.width = b + "px";
            a.style.height = d + "px";
            g.style.width = b + "px";
            g.style.height = d + "px";
            g.style.top = e + "px"
        };
        b._getClientWidth = function() {
            return document.documentElement.clientWidth
        };
        b._getClientHeight = function() {
            return document.documentElement.clientHeight
        };
        return a
    } ();
    c.ContentStrategy = e;
    e.prototype.__class__ = "egret.ContentStrategy";
    var a = function(a) {
        function b(c) {
            void 0 === c && (c = 0);
            a.call(this);
            this.minWidth = NaN;
            this.minWidth = c
        }
        __extends(b, a);
        b.prototype._apply = function(a, g, b) {
            g = this._getClientWidth();
            var c = this._getClientHeight(),
            d = c / b,
            u = g / d,
            e = 1;
            0 != this.minWidth && (e = Math.min(1, u / this.minWidth));
            this.setEgretSize(u / e, b, g, c * e);
            a._scaleX = d * e;
            a._scaleY = d * e
        };
        return b
    } (e);
    c.FixedHeight = a;
    a.prototype.__class__ = "egret.FixedHeight";
    a = function(a) {
        function b(c) {
            void 0 === c && (c = 0);
            a.call(this);
            this.minHeight = NaN;
            this.minHeight = c
        }
        __extends(b, a);
        b.prototype._apply = function(a, g, b) {
            b = this._getClientWidth();
            var c = this._getClientHeight(),
            d = b / g,
            u = c / d,
            e = 1;
            0 != this.minHeight && (e = Math.min(1, u / this.minHeight));
            this.setEgretSize(g, u / e, b * e, c, b * (1 - e) / 2);
            a._scaleX = d * e;
            a._scaleY = d * e
        };
        return b
    } (e);
    c.FixedWidth = a;
    a.prototype.__class__ = "egret.FixedWidth";
    a = function(a) {
        function b(c, d) {
            a.call(this);
            this.width = c;
            this.height = d
        }
        __extends(b, a);
        b.prototype._apply = function(a, g, b) {
            b = this.width;
            var c = this.height,
            d = b / g;
            this.setEgretSize(g, c / d, b, c);
            a._scaleX = d;
            a._scaleY = d
        };
        return b
    } (e);
    c.FixedSize = a;
    a.prototype.__class__ = "egret.FixedSize";
    a = function(a) {
        function b() {
            a.call(this)
        }
        __extends(b, a);
        b.prototype._apply = function(a, g, b) {
            this.setEgretSize(g, b, g, b, Math.floor((g - g) / 2));
            a._scaleX = 1;
            a._scaleY = 1
        };
        return b
    } (e);
    c.NoScale = a;
    a.prototype.__class__ = "egret.NoScale";
    a = function(a) {
        function b() {
            a.call(this)
        }
        __extends(b, a);
        b.prototype._apply = function(a, g, b) {
            var c = this._getClientWidth(),
            d = this._getClientHeight(),
            u = c,
            e = d,
            f = u / g < e / b ? u / g: e / b,
            u = g * f,
            e = b * f,
            c = Math.floor((c - u) / 2);
            a._offSetY = Math.floor((d - e) / 2);
            this.setEgretSize(g, b / 1, 1 * u, e, c, a._offSetY);
            a._scaleX = 1 * f;
            a._scaleY = 1 * f
        };
        return b
    } (e);
    c.ShowAll = a;
    a.prototype.__class__ = "egret.ShowAll";
    e = function(a) {
        function b() {
            a.call(this)
        }
        __extends(b, a);
        b.prototype._apply = function(a, g, b) {
            var c = this._getClientWidth(),
            d = this._getClientHeight(),
            c = c / g,
            d = d / b;
            this.setEgretSize(g, b, g * c, b * d);
            a._scaleX = c;
            a._scaleY = d
        };
        return b
    } (e);
    c.FullScreen = e;
    e.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._originalData = {};
            this._drawAreaList = []
        }
        __extends(d, e);
        var b = d.prototype;
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        b.addDrawArea = function(a) {
            this._drawAreaList.push(a)
        };
        b.clearDrawArea = function() {
            this._drawAreaList = []
        };
        b.drawImage = function(a, g, b, s, e, f, h, l, m, n, p) {
            void 0 === p && (p = void 0);
            h = h || 0;
            l = l || 0;
            var r = g._texture_to_render;
            if (null != r && 0 != f && 0 != e && 0 != m && 0 != n) {
                var q = c.MainContext.instance.rendererContext._texture_scale_factor;
                e /= q;
                f /= q;
                if (0 != this._drawAreaList.length && c.MainContext.instance.rendererContext._cacheCanvasContext) {
                    q = c.DisplayObject.getTransformBounds(g._getSize(d.identityRectangle), g._worldTransform);
                    g._worldBounds.initialize(q.x, q.y, q.width, q.height);
                    q = this._originalData;
                    q.sourceX = b;
                    q.sourceY = s;
                    q.sourceWidth = e;
                    q.sourceHeight = f;
                    q.destX = h;
                    q.destY = l;
                    q.destWidth = m;
                    q.destHeight = n;
                    for (var x = this.getDrawAreaList(), z = 0; z < x.length; z++) if (!this.ignoreRender(g, x[z], q.destX, q.destY)) {
                        a.drawImage(r, b, s, e, f, h, l, m, n, p);
                        break
                    }
                } else a.drawImage(r, b, s, e, f, h, l, m, n, p)
            }
        };
        b.ignoreRender = function(a, g, b, c) {
            var d = a._worldBounds;
            b *= a._worldTransform.a;
            c *= a._worldTransform.d;
            return d.x + d.width + b <= g.x || d.x + b >= g.x + g.width || d.y + d.height + c <= g.y || d.y + c >= g.y + g.height ? !0 : !1
        };
        b.getDrawAreaList = function() {
            var a;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new c.Rectangle(0, 0, c.MainContext.instance.stage.stageWidth, c.MainContext.instance.stage.stageHeight)], c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this)), a = this._defaultDrawAreaList) : a = this._drawAreaList;
            return a
        };
        b.onResize = function() {
            c.MainContext.instance.stage.removeEventListener(c.Event.RESIZE, this.onResize, this);
            this._defaultDrawAreaList = null
        };
        d.identityRectangle = new c.Rectangle;
        return d
    } (c.HashObject);
    c.RenderFilter = f;
    f.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {}
        e.mapClass = function(c, b, a) {
            void 0 === a && (a = "");
            c = this.getKey(c) + "#" + a;
            this.mapClassDic[c] = b
        };
        e.getKey = function(d) {
            return "string" == typeof d ? d: c.getQualifiedClassName(d)
        };
        e.mapValue = function(c, b, a) {
            void 0 === a && (a = "");
            c = this.getKey(c) + "#" + a;
            this.mapValueDic[c] = b
        };
        e.hasMapRule = function(c, b) {
            void 0 === b && (b = "");
            var a = this.getKey(c) + "#" + b;
            return this.mapValueDic[a] || this.mapClassDic[a] ? !0 : !1
        };
        e.getInstance = function(d, b) {
            void 0 === b && (b = "");
            var a = this.getKey(d) + "#" + b;
            if (this.mapValueDic[a]) return this.mapValueDic[a];
            var g = this.mapClassDic[a];
            if (g) return g = new g,
            this.mapValueDic[a] = g,
            delete this.mapClassDic[a],
            g;
            c.$error(1028, a)
        };
        e.mapClassDic = {};
        e.mapValueDic = {};
        return e
    } ();
    c.Injector = f;
    f.prototype.__class__ = "egret.Injector"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.apply(this, arguments);
            this.type = null
        }
        __extends(d, c);
        return d
    } (c.HashObject);
    c.Filter = f;
    f.prototype.__class__ = "egret.Filter"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b, a) {
            c.call(this);
            this.blurX = b;
            this.blurY = a;
            this.type = "blur"
        }
        __extends(d, c);
        return d
    } (c.Filter);
    c.BlurFilter = f;
    f.prototype.__class__ = "egret.BlurFilter"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(a) {
            void 0 === a && (a = null);
            c.call(this);
            this._matrix = [];
            this._matrix2 = [];
            this.type = "colorTransform";
            this._setMatrix(a)
        }
        __extends(d, c);
        var b = d.prototype;
        Object.defineProperty(b, "matrix", {
            get: function() {
                for (var a = 0; 20 > a; a++) this._matrix2[a] = this._matrix[a];
                return this._matrix2
            },
            set: function(a) {
                this._setMatrix(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setMatrix = function(a) {
            for (var g = 0; 20 > g; g++) this._matrix[g] = a && a[g] || 0
        };
        return d
    } (c.Filter);
    c.ColorMatrixFilter = f;
    f.prototype.__class__ = "egret.ColorMatrixFilter"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b, a, g, d, s, t, f, h) {
            void 0 === b && (b = 16711680);
            void 0 === a && (a = 1);
            void 0 === g && (g = 6);
            void 0 === d && (d = 6);
            void 0 === s && (s = 2);
            void 0 === t && (t = 1);
            void 0 === f && (f = !1);
            void 0 === h && (h = !1);
            c.call(this);
            this.color = b;
            this.alpha = a;
            this.blurX = g;
            this.blurY = d;
            this.strength = s;
            this.quality = t;
            this.inner = f;
            this.knockout = h;
            this.type = "glow";
            this._blue = b & 255;
            this._green = (b & 65280) >> 8;
            this._red = b >> 16
        }
        __extends(d, c);
        return d
    } (c.Filter);
    c.GlowFilter = f;
    f.prototype.__class__ = "egret.GlowFilter"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b, a, g, d, s, t, f, h, l, m, n) {
            void 0 === b && (b = 4);
            void 0 === a && (a = 45);
            void 0 === g && (g = 0);
            void 0 === d && (d = 1);
            void 0 === s && (s = 4);
            void 0 === t && (t = 4);
            void 0 === f && (f = 1);
            void 0 === h && (h = 1);
            void 0 === l && (l = !1);
            void 0 === m && (m = !1);
            c.call(this, g, d, s, t, f, h, l, m);
            this.distance = b;
            this.angle = a
        }
        __extends(d, c);
        return d
    } (c.GlowFilter);
    c.DropShadowFilter = f;
    f.prototype.__class__ = "egret.DropShadowFilter"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.NORMAL = "normal";
        c.ADD = "add";
        c.ERASE = "erase";
        c.ERASE_REVERSE = "eraseReverse";
        return c
    } ();
    c.BlendMode = f;
    f.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {
            this._name = null;
            this._explicitHeight = this._explicitWidth = NaN;
            this._y = this._x = 0;
            this._scaleY = this._scaleX = 1;
            this._rotation = this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
            this._alpha = 1;
            this._skewY = this._skewX = 0;
            this._blendMode = null;
            this._touchEnabled = c.defaultTouchEnabled;
            this._visible = !0;
            this._worldAlpha = 1;
            this._scrollRect = null;
            this._cacheAsBitmap = !1;
            this._stage = this._parent = null;
            this._needDraw = !1;
            this._filters = null;
            this._hasHeightSet = this._hasWidthSet = !1;
            this._sizeDirty = this._normalDirty = !0;
            this._isContainer = !1
        }
        c.defaultTouchEnabled = !1;
        return c
    } ();
    c.DisplayObjectProperties = f;
    f.prototype.__class__ = "egret.DisplayObjectProperties"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        return function() {
            this._hitTestPointTexture = null;
            this._rectH = this._rectW = 0;
            this._cacheDirty = !1
        }
    } ();
    c.DisplayObjectPrivateProperties = f;
    f.prototype.__class__ = "egret.DisplayObjectPrivateProperties"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.renderTexture = this.mask = this._sizeChangeCallTarget = this._sizeChangeCallBack = this.__hack_local_matrix = this._worldBounds = this._texture_to_render = null;
            this._DO_Props_ = new c.DisplayObjectProperties;
            this._DO_Privs_ = new c.DisplayObjectPrivateProperties;
            this._worldTransform = new c.Matrix;
            this._worldBounds = new c.Rectangle(0, 0, 0, 0);
            this._DO_Privs_._cacheBounds = new c.Rectangle(0, 0, 0, 0)
        }
        __extends(d, e);
        var b = d.prototype;
        b._setDirty = function() {
            this._DO_Props_._normalDirty = !0
        };
        b.getDirty = function() {
            return this._DO_Props_._normalDirty || this._DO_Props_._sizeDirty
        };
        b._setParentSizeDirty = function() {
            var a = this._DO_Props_._parent;
            a && (a._DO_Props_._hasWidthSet || a._DO_Props_._hasHeightSet ? a._setCacheDirty() : a._setSizeDirty())
        };
        b._setSizeDirty = function() {
            var a = this._DO_Props_;
            a._sizeDirty || (a._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty(), null != this._sizeChangeCallBack && (this._sizeChangeCallTarget == a._parent ? this._sizeChangeCallBack.call(this._sizeChangeCallTarget) : this._sizeChangeCallTarget = this._sizeChangeCallBack = null))
        };
        b._clearDirty = function() {
            this._DO_Props_._normalDirty = !1
        };
        b._clearSizeDirty = function() {
            this._DO_Props_._sizeDirty = !1
        };
        Object.defineProperty(b, "name", {
            get: function() {
                return this._DO_Props_._name
            },
            set: function(a) {
                this._DO_Props_._name = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "parent", {
            get: function() {
                return this._DO_Props_._parent
            },
            enumerable: !0,
            configurable: !0
        });
        b._parentChanged = function(a) {
            this._DO_Props_._parent = a
        };
        Object.defineProperty(b, "x", {
            get: function() {
                return this._DO_Props_._x
            },
            set: function(a) {
                this._setX(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setX = function(a) {
            c.NumberUtils.isNumber(a) && this._DO_Props_._x != a && (this._DO_Props_._x = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b, "y", {
            get: function() {
                return this._DO_Props_._y
            },
            set: function(a) {
                this._setY(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setY = function(a) {
            c.NumberUtils.isNumber(a) && this._DO_Props_._y != a && (this._DO_Props_._y = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b, "scaleX", {
            get: function() {
                return this._DO_Props_._scaleX
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._scaleX != a && (this._DO_Props_._scaleX = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "scaleY", {
            get: function() {
                return this._DO_Props_._scaleY
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._scaleY != a && (this._DO_Props_._scaleY = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "anchorOffsetX", {
            get: function() {
                return this._DO_Props_._anchorOffsetX
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._anchorOffsetX != a && (this._DO_Props_._anchorOffsetX = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "anchorOffsetY", {
            get: function() {
                return this._DO_Props_._anchorOffsetY
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._anchorOffsetY != a && (this._DO_Props_._anchorOffsetY = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "anchorX", {
            get: function() {
                return this._DO_Props_._anchorX
            },
            set: function(a) {
                this._setAnchorX(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setAnchorX = function(a) {
            c.NumberUtils.isNumber(a) && this._DO_Props_._anchorX != a && (this._DO_Props_._anchorX = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b, "anchorY", {
            get: function() {
                return this._DO_Props_._anchorY
            },
            set: function(a) {
                this._setAnchorY(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setAnchorY = function(a) {
            c.NumberUtils.isNumber(a) && this._DO_Props_._anchorY != a && (this._DO_Props_._anchorY = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b, "visible", {
            get: function() {
                return this._DO_Props_._visible
            },
            set: function(a) {
                this._setVisible(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setVisible = function(a) {
            this._DO_Props_._visible != a && (this._DO_Props_._visible = a, this._setSizeDirty())
        };
        Object.defineProperty(b, "rotation", {
            get: function() {
                return this._DO_Props_._rotation
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._rotation != a && (this._DO_Props_._rotation = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "alpha", {
            get: function() {
                return this._DO_Props_._alpha
            },
            set: function(a) {
                this._setAlpha(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setAlpha = function(a) {
            c.NumberUtils.isNumber(a) && this._DO_Props_._alpha != a && (this._DO_Props_._alpha = a, this._setDirty(), this._setCacheDirty())
        };
        Object.defineProperty(b, "skewX", {
            get: function() {
                return this._DO_Props_._skewX
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._skewX != a && (this._DO_Props_._skewX = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "skewY", {
            get: function() {
                return this._DO_Props_._skewY
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._DO_Props_._skewY != a && (this._DO_Props_._skewY = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "touchEnabled", {
            get: function() {
                return this._DO_Props_._touchEnabled
            },
            set: function(a) {
                this._setTouchEnabled(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setTouchEnabled = function(a) {
            this._DO_Props_._touchEnabled = a
        };
        Object.defineProperty(b, "blendMode", {
            get: function() {
                return this._DO_Props_._blendMode
            },
            set: function(a) {
                this._DO_Props_._blendMode = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "scrollRect", {
            get: function() {
                return this._DO_Props_._scrollRect
            },
            set: function(a) {
                this._setScrollRect(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setScrollRect = function(a) {
            this._DO_Props_._scrollRect = a;
            this._setSizeDirty()
        };
        Object.defineProperty(b, "measuredWidth", {
            get: function() {
                return this._measureBounds().width
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "measuredHeight", {
            get: function() {
                return this._measureBounds().height
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "explicitWidth", {
            get: function() {
                return this._DO_Props_._explicitWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "explicitHeight", {
            get: function() {
                return this._DO_Props_._explicitHeight
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "width", {
            get: function() {
                return this._getWidth()
            },
            set: function(a) {
                this._setWidth(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._getWidth = function() {
            return this._getSize(c.Rectangle.identity).width
        };
        Object.defineProperty(b, "height", {
            get: function() {
                return this._getHeight()
            },
            set: function(a) {
                this._setHeight(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._getHeight = function() {
            return this._getSize(c.Rectangle.identity).height
        };
        b._setWidth = function(a) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._DO_Props_._explicitWidth = a;
            this._DO_Props_._hasWidthSet = c.NumberUtils.isNumber(a)
        };
        b._setHeight = function(a) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._DO_Props_._explicitHeight = a;
            this._DO_Props_._hasHeightSet = c.NumberUtils.isNumber(a)
        };
        Object.defineProperty(b, "worldAlpha", {
            get: function() {
                return this._DO_Props_._worldAlpha
            },
            set: function(a) {
                this._DO_Props_._worldAlpha = a
            },
            enumerable: !0,
            configurable: !0
        });
        b._draw = function(a) {
            if (this._DO_Props_._visible && !this.drawCacheTexture(a)) {
                var g = c.MainContext.__use_new_draw && this._DO_Props_._isContainer;
                this._hasFilters() && !g && this._setGlobalFilters(a);
                a.setAlpha(this.worldAlpha, this.blendMode);
                a.setTransform(this._worldTransform);
                var b = this.mask || this._DO_Props_._scrollRect;
                b && !g && a.pushMask(b);
                this._render(a);
                b && !g && a.popMask();
                this._hasFilters() && !g && this._removeGlobalFilters(a)
            }
            this.destroyCacheBounds()
        };
        b._setGlobalFilters = function(a) {
            var g;
            g = this._DO_Props_._filters ? this._DO_Props_._filters.concat() : [];
            if (this._transform) {
                var b = this._transform._colorTransform,
                c = d.color;
                c[0] = b._redMultiplier;
                c[4] = b._redOffset;
                c[6] = b._greenMultiplier;
                c[9] = b._greenOffset;
                c[12] = b._blueMultiplier;
                c[14] = b._blueOffset;
                c[18] = b._alphaMultiplier;
                c[19] = b._alphaOffset;
                d.colorMatrixFilter._matrix = c;
                g.push(d.colorMatrixFilter)
            }
            a.setGlobalFilters(g)
        };
        b._removeGlobalFilters = function(a) {
            a.setGlobalFilters(null)
        };
        b._hasFilters = function() {
            var a = this._DO_Props_._filters && 0 < this._DO_Props_._filters.length;
            if (this._transform) {
                var g = this._transform._colorTransform;
                if (1 != g._redMultiplier || 0 != g._redOffset || 1 != g._greenMultiplier || 0 != g._greenOffset || 1 != g._blueMultiplier || 0 != g._blueOffset || 1 != g._alphaMultiplier || 0 != g._alphaOffset) a = !0
            }
            return a
        };
        b._pushMask = function(a) {
            a.setTransform(this._worldTransform);
            var g = this.mask || this._DO_Props_._scrollRect;
            g && a.pushMask(g)
        };
        b._popMask = function(a) {
            a.popMask()
        };
        b.drawCacheTexture = function(a) {
            if (!1 == this._DO_Props_._cacheAsBitmap) return ! 1;
            var g = this.getBounds(c.Rectangle.identity);
            if (this._DO_Privs_._cacheDirty || null == this._texture_to_render || 1 <= Math.round(g.width) - this._texture_to_render._textureWidth || 1 <= Math.round(g.height) - this._texture_to_render._textureHeight) g = this._makeBitmapCache(),
            this._DO_Privs_._cacheDirty = !g;
            if (null == this._texture_to_render) return ! 1;
            var b = this._texture_to_render,
            g = b._offsetX,
            d = b._offsetY,
            e = b._textureWidth,
            b = b._textureHeight;
            this._updateTransform();
            a.setAlpha(this.worldAlpha, this.blendMode);
            a.setTransform(this._worldTransform);
            c.RenderFilter.getInstance().drawImage(a, this, 0, 0, e, b, g, d, e, b);
            return ! 0
        };
        Object.defineProperty(b, "needDraw", {
            get: function() {
                return this._DO_Props_._needDraw
            },
            set: function(a) {
                this._DO_Props_._needDraw = a
            },
            enumerable: !0,
            configurable: !0
        });
        b._updateTransform = function() {
            var a = this._DO_Props_;
            a._visible && (this._calculateWorldTransform(), "updateTransform" == c.MainContext._renderLoopPhase && (this.needDraw || this._texture_to_render || a._cacheAsBitmap) && c.RenderCommand.push(this._draw, this))
        };
        b._calculateWorldTransform = function() {
            var a = this._DO_Props_,
            g = this._worldTransform,
            b = a._parent;
            g.identityMatrix(b._worldTransform);
            this._getMatrix(g);
            var c = a._scrollRect;
            c && g.append(1, 0, 0, 1, -c.x, -c.y);
            this.worldAlpha = b.worldAlpha * a._alpha
        };
        b._render = function(a) {};
        b.getBounds = function(a, g) {
            void 0 === g && (g = !0);
            var b = this._DO_Props_,
            d = this._DO_Privs_,
            e = this._measureBounds(),
            f = b._hasWidthSet ? b._explicitWidth: e.width,
            h = b._hasHeightSet ? b._explicitHeight: e.height;
            d._rectW = e.width;
            d._rectH = e.height;
            this._clearSizeDirty();
            var l = e.x,
            e = e.y,
            m = 0,
            n = 0;
            g && (0 != b._anchorX || 0 != b._anchorY ? (m = f * b._anchorX, n = h * b._anchorY) : (m = b._anchorOffsetX, n = b._anchorOffsetY));
            d._cacheBounds.initialize(l - m, e - n, f, h);
            b = d._cacheBounds;
            a || (a = new c.Rectangle);
            return a.initialize(b.x, b.y, b.width, b.height)
        };
        b.destroyCacheBounds = function() {
            var a = this._DO_Privs_;
            a._cacheBounds.x = 0;
            a._cacheBounds.y = 0;
            a._cacheBounds.width = 0;
            a._cacheBounds.height = 0
        };
        b._getConcatenatedMatrix = function() {
            for (var a = d.identityMatrixForGetConcatenated.identity(), g = this; null != g;) {
                var b = g._DO_Props_;
                0 != b._anchorX || 0 != b._anchorY ? (g = g._getSize(c.Rectangle.identity), a.prependTransform(b._x, b._y, b._scaleX, b._scaleY, b._rotation, b._skewX, b._skewY, g.width * b._anchorX, g.height * b._anchorY)) : a.prependTransform(b._x, b._y, b._scaleX, b._scaleY, b._rotation, b._skewX, b._skewY, b._anchorOffsetX, b._anchorOffsetY);
                b._scrollRect && a.prepend(1, 0, 0, 1, -b._scrollRect.x, -b._scrollRect.y);
                g = b._parent
            }
            return a
        };
        b.localToGlobal = function(a, g, b) {
            void 0 === a && (a = 0);
            void 0 === g && (g = 0);
            var d = this._getConcatenatedMatrix();
            d.append(1, 0, 0, 1, a, g);
            b || (b = new c.Point);
            b.x = d.tx;
            b.y = d.ty;
            return b
        };
        b.globalToLocal = function(a, g, b) {
            void 0 === a && (a = 0);
            void 0 === g && (g = 0);
            var d = this._getConcatenatedMatrix();
            d.invert();
            d.append(1, 0, 0, 1, a, g);
            b || (b = new c.Point);
            b.x = d.tx;
            b.y = d.ty;
            return b
        };
        b.hitTest = function(a, g, b) {
            void 0 === b && (b = !1);
            var d = this._DO_Props_;
            if (!d._visible || !b && !d._touchEnabled) return null;
            b = this.getBounds(c.Rectangle.identity, !1);
            a -= b.x;
            g -= b.y;
            return 0 <= a && a < b.width && 0 <= g && g < b.height ? this.mask || d._scrollRect ? d._scrollRect && a > d._scrollRect.x && g > d._scrollRect.y && a < d._scrollRect.x + d._scrollRect.width && g < d._scrollRect.y + d._scrollRect.height || this.mask && this.mask.x <= a && a < this.mask.x + this.mask.width && this.mask.y <= g && g < this.mask.y + this.mask.height ? this: null: this: null
        };
        b.hitTestPoint = function(a, g, b) {
            var d = this._DO_Privs_;
            a = this.globalToLocal(a, g);
            return b ? (d._hitTestPointTexture || (d._hitTestPointTexture = new c.RenderTexture), b = d._hitTestPointTexture, b.drawToTexture(this), 0 != b.getPixel32(a.x - d._hitTestPointTexture._offsetX, a.y - d._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(a.x, a.y, !0)
        };
        b._getMatrix = function(a) {
            a || (a = c.Matrix.identity.identity());
            var g = this._DO_Props_,
            b, d;
            d = this._getOffsetPoint();
            b = d.x;
            d = d.y;
            var e = this.__hack_local_matrix;
            e ? (a.append(e.a, e.b, e.c, e.d, e.tx, e.ty), a.append(1, 0, 0, 1, -b, -d)) : a.appendTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, b, d);
            return a
        };
        b._getSize = function(a) {
            var g = this._DO_Props_;
            if (g._hasHeightSet && g._hasWidthSet) return this._clearSizeDirty(),
            a.initialize(0, 0, g._explicitWidth, g._explicitHeight);
            this._measureSize(a);
            g._hasWidthSet && (a.width = g._explicitWidth);
            g._hasHeightSet && (a.height = g._explicitHeight);
            return a
        };
        b._measureSize = function(a) {
            var g = this._DO_Privs_;
            this._DO_Props_._sizeDirty ? (a = this._measureBounds(), g._rectW = a.width, g._rectH = a.height, this._clearSizeDirty()) : (a.width = g._rectW, a.height = g._rectH);
            a.x = 0;
            a.y = 0;
            return a
        };
        b._measureBounds = function() {
            return c.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        b._getOffsetPoint = function() {
            var a = this._DO_Props_,
            g = a._anchorOffsetX,
            b = a._anchorOffsetY;
            if (0 != a._anchorX || 0 != a._anchorY) b = this._getSize(c.Rectangle.identity),
            g = a._anchorX * b.width,
            b = a._anchorY * b.height;
            a = c.Point.identity;
            a.x = g;
            a.y = b;
            return a
        };
        b._onAddToStage = function() {
            this._DO_Props_._stage = c.MainContext.instance.stage;
            c.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        };
        b._onRemoveFromStage = function() {
            c.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
        };
        Object.defineProperty(b, "stage", {
            get: function() {
                return this._DO_Props_._stage
            },
            enumerable: !0,
            configurable: !0
        });
        b.addEventListener = function(a, g, b, s, f) {
            void 0 === s && (s = !1);
            void 0 === f && (f = 0);
            e.prototype.addEventListener.call(this, a, g, b, s, f); ((s = a == c.Event.ENTER_FRAME) || a == c.Event.RENDER) && this._insertEventBin(s ? d._enterFrameCallBackList: d._renderCallBackList, g, b, f, this)
        };
        b.removeEventListener = function(a, g, b, s) {
            void 0 === s && (s = !1);
            e.prototype.removeEventListener.call(this, a, g, b, s); ((s = a == c.Event.ENTER_FRAME) || a == c.Event.RENDER) && this._removeEventBin(s ? d._enterFrameCallBackList: d._renderCallBackList, g, b, this)
        };
        b.dispatchEvent = function(a) {
            if (!a._bubbles) return e.prototype.dispatchEvent.call(this, a);
            for (var g = [], b = this; b;) g.push(b),
            b = b._DO_Props_._parent;
            a._reset();
            this._dispatchPropagationEvent(a, g);
            return ! a._isDefaultPrevented
        };
        b._dispatchPropagationEvent = function(a, g, b) {
            b = g.length;
            for (var c = 1,
            d = b - 1; 0 <= d; d--) {
                var e = g[d];
                a._currentTarget = e;
                a._target = this;
                a._eventPhase = c;
                e._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped) return
            }
            e = g[0];
            a._currentTarget = e;
            a._target = this;
            a._eventPhase = 2;
            e._notifyListener(a);
            if (!a._isPropagationStopped && !a._isPropagationImmediateStopped) for (c = 3, d = 1; d < b && (e = g[d], a._currentTarget = e, a._target = this, a._eventPhase = c, e._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); d++);
        };
        b.willTrigger = function(a) {
            for (var g = this; g;) {
                if (g.hasEventListener(a)) return ! 0;
                g = g._DO_Props_._parent
            }
            return ! 1
        };
        Object.defineProperty(b, "cacheAsBitmap", {
            get: function() {
                return this._DO_Props_._cacheAsBitmap
            },
            set: function(a) { (this._DO_Props_._cacheAsBitmap = a) ? c.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        b._makeBitmapCache = function() {
            this.renderTexture || (this.renderTexture = new c.RenderTexture);
            var a = this.renderTexture.drawToTexture(this);
            this._texture_to_render = a ? this.renderTexture: null;
            return a
        };
        b._setCacheDirty = function(a) {
            void 0 === a && (a = !0);
            this._DO_Privs_._cacheDirty = a
        };
        d.getTransformBounds = function(a, g) {
            var b = a.x,
            c = a.y,
            d = a.width,
            e = a.height; (b || c) && g.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -c);
            var f = d * g.a,
            d = d * g.b,
            l = e * g.c,
            e = e * g.d,
            m = g.tx,
            n = g.ty,
            p = m,
            r = m,
            q = n,
            x = n; (b = f + m) < p ? p = b: b > r && (r = b); (b = f + l + m) < p ? p = b: b > r && (r = b); (b = l + m) < p ? p = b: b > r && (r = b); (c = d + n) < q ? q = c: c > x && (x = c); (c = d + e + n) < q ? q = c: c > x && (x = c); (c = e + n) < q ? q = c: c > x && (x = c);
            return a.initialize(p, q, r - p, x - q)
        };
        Object.defineProperty(b, "filters", {
            get: function() {
                return this._DO_Props_._filters
            },
            set: function(a) {
                this._DO_Props_._filters = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "transform", {
            get: function() {
                this._transform || (this._transform = new c.Transform(this));
                return this._transform
            },
            enumerable: !0,
            configurable: !0
        });
        d.color = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        d.colorMatrixFilter = new c.ColorMatrixFilter;
        d.identityMatrixForGetConcatenated = new c.Matrix;
        d._enterFrameCallBackList = [];
        d._renderCallBackList = [];
        return d
    } (c.EventDispatcher);
    c.DisplayObject = f;
    f.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._touchChildren = !0;
            this._children = [];
            this._DO_Props_._isContainer = !0
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "touchChildren", {
            get: function() {
                return this._touchChildren
            },
            set: function(a) {
                this._touchChildren = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "numChildren", {
            get: function() {
                return this._children.length
            },
            enumerable: !0,
            configurable: !0
        });
        b.setChildIndex = function(a, g) {
            this.doSetChildIndex(a, g)
        };
        b.doSetChildIndex = function(a, g) {
            var b = this._children.indexOf(a);
            0 > b && c.$error(1006);
            this._children.splice(b, 1);
            0 > g || this._children.length <= g ? this._children.push(a) : this._children.splice(g, 0, a)
        };
        b.addChild = function(a) {
            var g = this._children.length;
            a.parent == this && g--;
            return this._doAddChild(a, g)
        };
        b.addChildAt = function(a, g) {
            return this._doAddChild(a, g)
        };
        b._doAddChild = function(a, g, b) {
            void 0 === b && (b = !0);
            if (a == this) return a;
            if (0 > g || g > this._children.length) return c.$error(1007),
            a;
            var e = a.parent;
            if (e == this) return this.doSetChildIndex(a, g),
            a;
            if (e) {
                var f = e._children.indexOf(a);
                0 <= f && e._doRemoveChild(f)
            }
            this._children.splice(g, 0, a);
            a._parentChanged(this);
            b && a.dispatchEventWith(c.Event.ADDED, !0);
            if (this._DO_Props_._stage) for (a._onAddToStage(), g = d.__EVENT__ADD_TO_STAGE_LIST; 0 < g.length;) e = g.shift(),
            b && e.dispatchEventWith(c.Event.ADDED_TO_STAGE);
            a._setDirty();
            this._setSizeDirty();
            return a
        };
        b.removeChild = function(a) {
            a = this._children.indexOf(a);
            if (0 <= a) return this._doRemoveChild(a);
            c.$error(1008);
            return null
        };
        b.removeChildAt = function(a) {
            if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
            c.$error(1007);
            return null
        };
        b._doRemoveChild = function(a, g) {
            void 0 === g && (g = !0);
            var b = this._children,
            e = b[a];
            g && e.dispatchEventWith(c.Event.REMOVED, !0);
            if (this._DO_Props_._stage) {
                e._onRemoveFromStage();
                for (var f = d.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) {
                    var k = f.shift();
                    g && k.dispatchEventWith(c.Event.REMOVED_FROM_STAGE);
                    k._DO_Props_._stage = null
                }
            }
            e._parentChanged(null);
            b.splice(a, 1);
            this._setSizeDirty();
            return e
        };
        b.getChildAt = function(a) {
            if (0 <= a && a < this._children.length) return this._children[a];
            c.$error(1007);
            return null
        };
        b.contains = function(a) {
            for (; a;) {
                if (a == this) return ! 0;
                a = a.parent
            }
            return ! 1
        };
        b.swapChildrenAt = function(a, g) {
            0 <= a && a < this._children.length && 0 <= g && g < this._children.length ? this._swapChildrenAt(a, g) : c.$error(1007)
        };
        b.swapChildren = function(a, g) {
            var b = this._children.indexOf(a),
            d = this._children.indexOf(g); - 1 == b || -1 == d ? c.$error(1008) : this._swapChildrenAt(b, d)
        };
        b._swapChildrenAt = function(a, g) {
            if (a != g) {
                var b = this._children,
                c = b[a];
                b[a] = b[g];
                b[g] = c
            }
        };
        b.getChildIndex = function(a) {
            return this._children.indexOf(a)
        };
        b.removeChildren = function() {
            for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
        };
        b._updateTransform = function() {
            if (this._DO_Props_._visible) {
                this._hasFilters() && c.RenderCommand.push(this._setGlobalFilters, this);
                var a = this.mask || this._DO_Props_._scrollRect;
                a && c.RenderCommand.push(this._pushMask, this);
                e.prototype._updateTransform.call(this);
                if (!this._DO_Props_._cacheAsBitmap || !this._texture_to_render) for (var g = 0,
                b = this._children,
                d = b.length; g < d; g++) b[g]._updateTransform();
                a && c.RenderCommand.push(this._popMask, this);
                this._hasFilters() && c.RenderCommand.push(this._removeGlobalFilters, this)
            }
        };
        b._render = function(a) {
            if (!c.MainContext.__use_new_draw) for (var g = 0,
            b = this._children,
            d = b.length; g < d; g++) b[g]._draw(a)
        };
        b._measureBounds = function() {
            for (var a = 0,
            g = 0,
            b = 0,
            d = 0,
            e = this._children,
            f = e.length,
            h = 0; h < f; h++) {
                var l = e[h];
                if (l.visible) {
                    var m = l.getBounds(c.Rectangle.identity, !1),
                    n = m.x,
                    p = m.y,
                    r = m.width,
                    m = m.height,
                    l = l._getMatrix(),
                    l = c.DisplayObject.getTransformBounds(c.Rectangle.identity.initialize(n, p, r, m), l),
                    n = l.x,
                    p = l.y,
                    r = l.width + l.x,
                    l = l.height + l.y;
                    if (n < a || 0 == h) a = n;
                    if (r > g || 0 == h) g = r;
                    if (p < b || 0 == h) b = p;
                    if (l > d || 0 == h) d = l
                }
            }
            return c.Rectangle.identity.initialize(a, b, g - a, d - b)
        };
        b.hitTest = function(a, g, b) {
            void 0 === b && (b = !1);
            var d;
            if (!this._DO_Props_._visible) return null;
            if (this._DO_Props_._scrollRect) {
                if (a < this._DO_Props_._scrollRect.x || g < this._DO_Props_._scrollRect.y || a > this._DO_Props_._scrollRect.x + this._DO_Props_._scrollRect.width || g > this._DO_Props_._scrollRect.y + this._DO_Props_._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > g || g > this.mask.y + this.mask.height)) return null;
            for (var f = this._children,
            k = this._touchChildren,
            h = f.length - 1; 0 <= h; h--) {
                var l = f[h],
                m = l._getMatrix(),
                n = l.scrollRect;
                n && m.append(1, 0, 0, 1, -n.x, -n.y);
                m.invert();
                m = c.Matrix.transformCoords(m, a, g);
                if (l = l.hitTest(m.x, m.y, !0)) {
                    if (!k) return this;
                    if (l._DO_Props_._touchEnabled && k) return l;
                    d = this
                }
            }
            return d ? d: this._texture_to_render ? e.prototype.hitTest.call(this, a, g, b) : null
        };
        b._onAddToStage = function() {
            e.prototype._onAddToStage.call(this);
            for (var a = this._children.length,
            g = 0; g < a; g++) this._children[g]._onAddToStage()
        };
        b._onRemoveFromStage = function() {
            e.prototype._onRemoveFromStage.call(this);
            for (var a = this._children,
            g = a.length,
            b = 0; b < g; b++) a[b]._onRemoveFromStage()
        };
        b.getChildByName = function(a) {
            for (var g = this._children,
            b = g.length,
            c, d = 0; d < b; d++) if (c = g[d], c.name == a) return c;
            return null
        };
        d.__EVENT__ADD_TO_STAGE_LIST = [];
        d.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return d
    } (c.DisplayObject);
    c.DisplayObjectContainer = f;
    f.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.NO_BORDER = "noBorder";
        c.NO_SCALE = "noScale";
        c.SHOW_ALL = "showAll";
        c.EXACT_FIT = "exactFit";
        return c
    } ();
    c.StageScaleMode = f;
    f.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, g) {
            void 0 === a && (a = 480);
            void 0 === g && (g = 800);
            e.call(this);
            this._changeSizeDispatchFlag = !0;
            this._scaleMode = "";
            this._stageHeight = this._stageWidth = NaN;
            this._frameRate = 60;
            this.touchEnabled = !0;
            this._DO_Props_._stage = this;
            this._stageWidth = a;
            this._stageHeight = g
        }
        __extends(d, e);
        var b = d.prototype;
        b.invalidate = function() {
            d._invalidateRenderFlag = !0
        };
        Object.defineProperty(b, "scaleMode", {
            get: function() {
                return this._scaleMode
            },
            set: function(a) {
                this._scaleMode != a && (this._scaleMode = a, this.setResolutionPolicy())
            },
            enumerable: !0,
            configurable: !0
        });
        b.changeSize = function() {
            this._changeSizeDispatchFlag && (this.setResolutionPolicy(), this.dispatchEventWith(c.Event.RESIZE))
        };
        b.setResolutionPolicy = function() {
            var a = d.SCALE_MODE_ENUM[this._scaleMode];
            a || c.$error(1024);
            var g = new c.EqualToFrame,
            a = new c.ResolutionPolicy(g, a);
            c.StageDelegate.getInstance()._setResolutionPolicy(a);
            this._stageWidth = c.StageDelegate.getInstance()._stageWidth;
            this._stageHeight = c.StageDelegate.getInstance()._stageHeight
        };
        Object.defineProperty(b, "stageWidth", {
            get: function() {
                return this._stageWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "stageHeight", {
            get: function() {
                return this._stageHeight
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "frameRate", {
            get: function() {
                return this._frameRate
            },
            set: function(a) {
                this._frameRate = a;
                c.MainContext.instance.deviceContext.setFrameRate(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.hitTest = function(a, g, b) {
            if (!this._DO_Props_._touchEnabled) return null;
            var d;
            if (!this._touchChildren) return this;
            b = this._children;
            for (var e = b.length - 1; 0 <= e; e--) {
                d = b[e];
                var f = d._getMatrix(),
                h = d.scrollRect;
                h && f.append(1, 0, 0, 1, -h.x, -h.y);
                f.invert();
                f = c.Matrix.transformCoords(f, a, g);
                if ((d = d.hitTest(f.x, f.y, !0)) && d.touchEnabled) return d
            }
            return this
        };
        b.getBounds = function(a) {
            a || (a = new c.Rectangle);
            return a.initialize(0, 0, this._stageWidth, this._stageHeight)
        };
        b._updateTransform = function() {
            for (var a = 0,
            g = this._children.length; a < g; a++) this._children[a]._updateTransform()
        };
        Object.defineProperty(b, "focus", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        });
        d.registerScaleMode = function(a, g, b) {
            d.SCALE_MODE_ENUM[a] && !b ? c.$warn(1009, a) : d.SCALE_MODE_ENUM[a] = g
        };
        d._invalidateRenderFlag = !1;
        d.SCALE_MODE_ENUM = {};
        return d
    } (c.DisplayObjectContainer);
    c.Stage = f;
    f.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_SCALE] = new egret.NoScale;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.SHOW_ALL] = new egret.ShowAll;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_BORDER] = new egret.FixedWidth;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.EXACT_FIT] = new egret.FullScreen; (function(c) {
    var f = function() {
        return function() {
            this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
            this._scrollTop = this._scrollLeft = 0;
            this._vCanScroll = this._hCanScroll = !1;
            this._lastTouchPosition = new c.Point(0, 0);
            this._touchStartPosition = new c.Point(0, 0);
            this._scrollStarted = !1;
            this._lastTouchTime = 0;
            this._lastTouchEvent = null;
            this._velocitys = [];
            this._isVTweenPlaying = this._isHTweenPlaying = !1;
            this._vScrollTween = this._hScrollTween = null
        }
    } ();
    c.ScrollViewProperties = f;
    f.prototype.__class__ = "egret.ScrollViewProperties"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            void 0 === a && (a = null);
            e.call(this);
            this.scrollBeginThreshold = 10;
            this.scrollSpeed = 1;
            this.touchBeginTimer = this.delayTouchBeginEvent = this._content = null;
            this.touchEnabled = !0;
            this._ScrV_Props_ = new c.ScrollViewProperties;
            a && this.setContent(a)
        }
        __extends(d, e);
        var b = d.prototype;
        b.setContent = function(a) {
            this._content !== a && (this.removeContent(), a && (this._content = a, e.prototype.addChild.call(this, a), this._addEvents()))
        };
        b.removeContent = function() {
            this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0));
            this._content = null
        };
        Object.defineProperty(b, "verticalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._verticalScrollPolicy
            },
            set: function(a) {
                a != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "horizontalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._horizontalScrollPolicy
            },
            set: function(a) {
                a != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "scrollLeft", {
            get: function() {
                return this._ScrV_Props_._scrollLeft
            },
            set: function(a) {
                a != this._ScrV_Props_._scrollLeft && (this._ScrV_Props_._scrollLeft = a, this._validatePosition(!1, !0), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "scrollTop", {
            get: function() {
                return this._ScrV_Props_._scrollTop
            },
            set: function(a) {
                a != this._ScrV_Props_._scrollTop && (this._ScrV_Props_._scrollTop = a, this._validatePosition(!0, !1), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        b.setScrollPosition = function(a, g, b) {
            void 0 === b && (b = !1);
            if (!b || 0 != a || 0 != g) if (b || this._ScrV_Props_._scrollTop != a || this._ScrV_Props_._scrollLeft != g) {
                if (b) {
                    b = this._isOnTheEdge(!0);
                    var c = this._isOnTheEdge(!1);
                    this._ScrV_Props_._scrollTop += b ? a / 2 : a;
                    this._ScrV_Props_._scrollLeft += c ? g / 2 : g
                } else this._ScrV_Props_._scrollTop = a,
                this._ScrV_Props_._scrollLeft = g;
                this._validatePosition(!0, !0);
                this._updateContentPosition()
            }
        };
        b._isOnTheEdge = function(a) {
            void 0 === a && (a = !0);
            var g = this._ScrV_Props_._scrollTop,
            b = this._ScrV_Props_._scrollLeft;
            return a ? 0 > g || g > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
        };
        b._validatePosition = function(a, g) {
            void 0 === a && (a = !1);
            void 0 === g && (g = !1);
            if (a) {
                var b = this.height,
                c = this._getContentHeight();
                this._ScrV_Props_._scrollTop = Math.max(this._ScrV_Props_._scrollTop, (0 - b) / 2);
                this._ScrV_Props_._scrollTop = Math.min(this._ScrV_Props_._scrollTop, c > b ? c - b / 2 : b / 2)
            }
            g && (b = this.width, c = this._getContentWidth(), this._ScrV_Props_._scrollLeft = Math.max(this._ScrV_Props_._scrollLeft, (0 - b) / 2), this._ScrV_Props_._scrollLeft = Math.min(this._ScrV_Props_._scrollLeft, c > b ? c - b / 2 : b / 2))
        };
        b._setWidth = function(a) {
            this._DO_Props_._explicitWidth != a && (e.prototype._setWidth.call(this, a), this._updateContentPosition())
        };
        b._setHeight = function(a) {
            this._DO_Props_._explicitHeight != a && (e.prototype._setHeight.call(this, a), this._updateContentPosition())
        };
        b._updateContentPosition = function() {
            var a = this.getBounds(c.Rectangle.identity),
            g = a.height,
            a = a.width;
            this.scrollRect = new c.Rectangle(Math.round(this._ScrV_Props_._scrollLeft), Math.round(this._ScrV_Props_._scrollTop), a, g);
            this.dispatchEvent(new c.Event(c.Event.CHANGE))
        };
        b._checkScrollPolicy = function() {
            var a = this.__checkScrollPolicy(this._ScrV_Props_._horizontalScrollPolicy, this._getContentWidth(), this.width);
            this._ScrV_Props_._hCanScroll = a;
            var g = this.__checkScrollPolicy(this._ScrV_Props_._verticalScrollPolicy, this._getContentHeight(), this.height);
            this._ScrV_Props_._vCanScroll = g;
            return a || g
        };
        b.__checkScrollPolicy = function(a, g, b) {
            return "on" == a ? !0 : "off" == a ? !1 : g > b
        };
        b._addEvents = function() {
            this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.addEventListener(c.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        b._removeEvents = function() {
            this.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.removeEventListener(c.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        b._onTouchBegin = function(a) { ! a._isDefaultPrevented && this._checkScrollPolicy() && (this._ScrV_Props_._touchStartPosition.x = a.stageX, this._ScrV_Props_._touchStartPosition.y = a.stageY, (this._ScrV_Props_._isHTweenPlaying || this._ScrV_Props_._isVTweenPlaying) && this._onScrollFinished(), this.stage.addEventListener(c.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(c.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(c.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(c.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(a), a.preventDefault())
        };
        b._onTouchBeginCapture = function(a) {
            var g = this._checkScrollPolicy();
            if (g) {
                for (var b = a.target; b != this;) {
                    if ("_checkScrollPolicy" in b && (g = b._checkScrollPolicy())) return;
                    b = b.parent
                }
                a.stopPropagation();
                this.delayTouchBeginEvent = this.cloneTouchEvent(a);
                this.touchBeginTimer || (this.touchBeginTimer = new c.Timer(100, 1), this.touchBeginTimer.addEventListener(c.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
                this.touchBeginTimer.start();
                this._onTouchBegin(a)
            }
        };
        b._onTouchEndCapture = function(a) {
            this.delayTouchBeginEvent && this._onTouchBeginTimer()
        };
        b._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var a = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null;
            this.stage && this.dispatchPropagationEvent(a)
        };
        b.dispatchPropagationEvent = function(a) {
            for (var g = [], b = a._target, c = 0; b;) b == this && (c = g.length),
            g.push(b),
            b = b.parent;
            b = g.slice(0, c);
            b = b.reverse();
            g = b.concat(g);
            this._dispatchPropagationEvent(a, g, c)
        };
        b._dispatchPropagationEvent = function(a, g, b) {
            for (var c = g.length,
            d = 0; d < c; d++) {
                var e = g[d];
                a._currentTarget = e;
                a._eventPhase = d < b ? 1 : d == b ? 2 : 3;
                e._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
            }
        };
        b._onTouchMove = function(a) {
            if (this._ScrV_Props_._lastTouchPosition.x != a.stageX || this._ScrV_Props_._lastTouchPosition.y != a.stageY) {
                if (!this._ScrV_Props_._scrollStarted) {
                    var g = a.stageX - this._ScrV_Props_._touchStartPosition.x,
                    b = a.stageY - this._ScrV_Props_._touchStartPosition.y;
                    if (Math.sqrt(g * g + b * b) < this.scrollBeginThreshold) {
                        this._logTouchEvent(a);
                        return
                    }
                }
                this._ScrV_Props_._scrollStarted = !0;
                this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
                this.touchChildren = !1;
                g = this._getPointChange(a);
                this.setScrollPosition(g.y, g.x, !0);
                this._calcVelocitys(a);
                this._logTouchEvent(a)
            }
        };
        b._onTouchEnd = function(a) {
            this.touchChildren = !0;
            this._ScrV_Props_._scrollStarted = !1;
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
            this.removeEventListener(c.Event.ENTER_FRAME, this._onEnterFrame, this);
            this._moveAfterTouchEnd()
        };
        b._onEnterFrame = function(a) {
            a = c.getTimer();
            100 < a - this._ScrV_Props_._lastTouchTime && 300 > a - this._ScrV_Props_._lastTouchTime && this._calcVelocitys(this._ScrV_Props_._lastTouchEvent)
        };
        b._logTouchEvent = function(a) {
            this._ScrV_Props_._lastTouchPosition.x = a.stageX;
            this._ScrV_Props_._lastTouchPosition.y = a.stageY;
            this._ScrV_Props_._lastTouchEvent = this.cloneTouchEvent(a);
            this._ScrV_Props_._lastTouchTime = c.getTimer()
        };
        b._getPointChange = function(a) {
            return {
                x: !1 === this._ScrV_Props_._hCanScroll ? 0 : this._ScrV_Props_._lastTouchPosition.x - a.stageX,
                y: !1 === this._ScrV_Props_._vCanScroll ? 0 : this._ScrV_Props_._lastTouchPosition.y - a.stageY
            }
        };
        b._calcVelocitys = function(a) {
            var g = c.getTimer();
            if (0 == this._ScrV_Props_._lastTouchTime) this._ScrV_Props_._lastTouchTime = g;
            else {
                var b = this._getPointChange(a),
                g = g - this._ScrV_Props_._lastTouchTime;
                b.x /= g;
                b.y /= g;
                this._ScrV_Props_._velocitys.push(b);
                5 < this._ScrV_Props_._velocitys.length && this._ScrV_Props_._velocitys.shift();
                this._ScrV_Props_._lastTouchPosition.x = a.stageX;
                this._ScrV_Props_._lastTouchPosition.y = a.stageY
            }
        };
        b._getContentWidth = function() {
            return this._content.explicitWidth || this._content.width
        };
        b._getContentHeight = function() {
            return this._content.explicitHeight || this._content.height
        };
        b.getMaxScrollLeft = function() {
            var a = this._getContentWidth() - this.width;
            return Math.max(0, a)
        };
        b.getMaxScrollTop = function() {
            var a = this._getContentHeight() - this.height;
            return Math.max(0, a)
        };
        b._moveAfterTouchEnd = function() {
            if (0 != this._ScrV_Props_._velocitys.length) {
                for (var a = 0,
                g = 0,
                b = 0,
                c = 0; c < this._ScrV_Props_._velocitys.length; c++) var e = this._ScrV_Props_._velocitys[c],
                f = d.weight[c],
                a = a + e.x * f,
                g = g + e.y * f,
                b = b + f;
                this._ScrV_Props_._velocitys.length = 0;
                0 >= this.scrollSpeed && (this.scrollSpeed = 1);
                a = a / b * this.scrollSpeed;
                g = g / b * this.scrollSpeed;
                e = Math.abs(a);
                b = Math.abs(g);
                f = this.getMaxScrollLeft();
                c = this.getMaxScrollTop();
                a = 0.02 < e ? this.getAnimationDatas(a, this._ScrV_Props_._scrollLeft, f) : {
                    position: this._ScrV_Props_._scrollLeft,
                    duration: 1
                };
                g = 0.02 < b ? this.getAnimationDatas(g, this._ScrV_Props_._scrollTop, c) : {
                    position: this._ScrV_Props_._scrollTop,
                    duration: 1
                };
                this.setScrollLeft(a.position, a.duration);
                this.setScrollTop(g.position, g.duration)
            }
        };
        b._onTweenFinished = function(a) {
            a == this._ScrV_Props_._vScrollTween && (this._ScrV_Props_._isVTweenPlaying = !1);
            a == this._ScrV_Props_._hScrollTween && (this._ScrV_Props_._isHTweenPlaying = !1); ! 1 == this._ScrV_Props_._isHTweenPlaying && !1 == this._ScrV_Props_._isVTweenPlaying && this._onScrollFinished()
        };
        b._onScrollStarted = function() {};
        b._onScrollFinished = function() {
            c.Tween.removeTweens(this);
            this._ScrV_Props_._hScrollTween = null;
            this._ScrV_Props_._vScrollTween = null;
            this._ScrV_Props_._isHTweenPlaying = !1;
            this._ScrV_Props_._isVTweenPlaying = !1;
            this.dispatchEvent(new c.Event(c.Event.COMPLETE))
        };
        b.setScrollTop = function(a, g) {
            void 0 === g && (g = 0);
            var b = Math.min(this.getMaxScrollTop(), Math.max(a, 0));
            if (0 == g) return this.scrollTop = b,
            null;
            var d = c.Tween.get(this).to({
                scrollTop: a
            },
            g, c.Ease.quartOut);
            b != a && d.to({
                scrollTop: b
            },
            300, c.Ease.quintOut);
            this._ScrV_Props_._isVTweenPlaying = !0;
            this._ScrV_Props_._vScrollTween = d;
            d.call(this._onTweenFinished, this, [d]);
            this._ScrV_Props_._isHTweenPlaying || this._onScrollStarted();
            return d
        };
        b.setScrollLeft = function(a, g) {
            void 0 === g && (g = 0);
            var b = Math.min(this.getMaxScrollLeft(), Math.max(a, 0));
            if (0 == g) return this.scrollLeft = b,
            null;
            var d = c.Tween.get(this).to({
                scrollLeft: a
            },
            g, c.Ease.quartOut);
            b != a && d.to({
                scrollLeft: b
            },
            300, c.Ease.quintOut);
            this._ScrV_Props_._isHTweenPlaying = !0;
            this._ScrV_Props_._hScrollTween = d;
            d.call(this._onTweenFinished, this, [d]);
            this._ScrV_Props_._isVTweenPlaying || this._onScrollStarted();
            return d
        };
        b.getAnimationDatas = function(a, g, b) {
            var c = Math.abs(a),
            d = 0,
            e = g + 500 * a;
            if (0 > e || e > b) for (e = g; Infinity != Math.abs(a) && 0.02 < Math.abs(a);) e += a,
            a = 0 > e || e > b ? 0.998 * a * 0.95 : 0.998 * a,
            d++;
            else d = 500 * -Math.log(0.02 / c);
            return {
                position: Math.min(b + 50, Math.max(e, -50)),
                duration: d
            }
        };
        b.cloneTouchEvent = function(a) {
            var g = new c.TouchEvent(a._type, a._bubbles, a.cancelable);
            g.touchPointID = a.touchPointID;
            g._stageX = a._stageX;
            g._stageY = a._stageY;
            g.ctrlKey = a.ctrlKey;
            g.altKey = a.altKey;
            g.shiftKey = a.shiftKey;
            g.touchDown = a.touchDown;
            g._isDefaultPrevented = !1;
            g._target = a._target;
            return g
        };
        b.throwNotSupportedError = function() {
            c.$error(1023)
        };
        b.addChild = function(a) {
            this.throwNotSupportedError();
            return null
        };
        b.addChildAt = function(a, g) {
            this.throwNotSupportedError();
            return null
        };
        b.removeChild = function(a) {
            this.throwNotSupportedError();
            return null
        };
        b.removeChildAt = function(a) {
            this.throwNotSupportedError();
            return null
        };
        b.setChildIndex = function(a, g) {
            this.throwNotSupportedError()
        };
        b.swapChildren = function(a, g) {
            this.throwNotSupportedError()
        };
        b.swapChildrenAt = function(a, g) {
            this.throwNotSupportedError()
        };
        b.hitTest = function(a, g, b) {
            void 0 === b && (b = !1);
            var d = e.prototype.hitTest.call(this, a, g, b);
            return d ? d: c.DisplayObject.prototype.hitTest.call(this, a, g, b)
        };
        d.weight = [1, 1.33, 1.66, 2, 2.33];
        return d
    } (c.DisplayObjectContainer);
    c.ScrollView = f;
    f.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.REPEAT = "repeat";
        c.SCALE = "scale";
        return c
    } ();
    c.BitmapFillMode = f;
    f.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            e.call(this);
            this.scale9Grid = this._texture = null;
            this.fillMode = "scale";
            a && (this._texture = a, this._setSizeDirty());
            this.needDraw = !0
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "texture", {
            get: function() {
                return this._texture
            },
            set: function(a) {
                a != this._texture && (this._setSizeDirty(), this._texture = a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._render = function(a) {
            var g = this._texture;
            g ? (this._texture_to_render = g, d._drawBitmap(a, this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: g._textureWidth, this._DO_Props_._hasHeightSet ? this._DO_Props_._explicitHeight: g._textureHeight, this)) : this._texture_to_render = null
        };
        d._drawBitmap = function(a, g, b, c) {
            var e = c._texture_to_render;
            if (e) {
                var f = e._textureWidth,
                h = e._textureHeight;
                if ("scale" == c.fillMode) {
                    var l = c.scale9Grid || e.scale9Grid;
                    if (l && f - l.width < g && h - l.height < b) d.drawScale9GridImage(a, c, l, g, b);
                    else {
                        var l = e._offsetX,
                        m = e._offsetY,
                        n = e._bitmapWidth || f,
                        p = e._bitmapHeight || h;
                        g /= f;
                        l = Math.round(l * g);
                        g = Math.round(n * g);
                        b /= h;
                        m = Math.round(m * b);
                        b = Math.round(p * b);
                        d.renderFilter.drawImage(a, c, e._bitmapX, e._bitmapY, n, p, l, m, g, b)
                    }
                } else d.drawRepeatImage(a, c, g, b, c.fillMode)
            }
        };
        d.drawRepeatImage = function(a, g, b, d, e) {
            var f = g._texture_to_render;
            if (f) {
                var h = f._textureWidth,
                l = f._textureHeight,
                m = f._bitmapX,
                n = f._bitmapY,
                h = f._bitmapWidth || h,
                l = f._bitmapHeight || l,
                p = f._offsetX,
                f = f._offsetY;
                c.RenderFilter.getInstance().drawImage(a, g, m, n, h, l, p, f, b, d, e)
            }
        };
        d.drawScale9GridImage = function(a, g, b, d, e) {
            var f = c.MainContext.instance.rendererContext._texture_scale_factor,
            h = g._texture_to_render;
            if (h && b) {
                var l = h._textureWidth,
                m = h._textureHeight,
                n = h._bitmapX,
                p = h._bitmapY,
                r = h._bitmapWidth || l,
                q = h._bitmapHeight || m;
                d -= l - r;
                e -= m - q;
                if (!a.drawImageScale9(h, n, p, r, q, h._offsetX, h._offsetY, d, e, b)) {
                    l = h._offsetX / f;
                    m = h._offsetY / f;
                    h = c.RenderFilter.getInstance();
                    b = c.Rectangle.identity.initialize(b.x - Math.round(l), b.y - Math.round(l), b.width, b.height);
                    l = Math.round(l);
                    m = Math.round(m);
                    b.y == b.bottom && (b.bottom < q ? b.bottom++:b.y--);
                    b.x == b.right && (b.right < r ? b.right++:b.x--);
                    var x = n + b.x / f,
                    z = n + b.right / f,
                    w = r - b.right,
                    y = p + b.y / f,
                    f = p + b.bottom / f,
                    v = q - b.bottom,
                    C = l + b.x,
                    A = m + b.y,
                    q = e - (q - b.bottom),
                    r = d - (r - b.right);
                    h.drawImage(a, g, n, p, b.x, b.y, l, m, b.x, b.y);
                    h.drawImage(a, g, x, p, b.width, b.y, C, m, r - b.x, b.y);
                    h.drawImage(a, g, z, p, w, b.y, l + r, m, d - r, b.y);
                    h.drawImage(a, g, n, y, b.x, b.height, l, A, b.x, q - b.y);
                    h.drawImage(a, g, x, y, b.width, b.height, C, A, r - b.x, q - b.y);
                    h.drawImage(a, g, z, y, w, b.height, l + r, A, d - r, q - b.y);
                    h.drawImage(a, g, n, f, b.x, v, l, m + q, b.x, e - q);
                    h.drawImage(a, g, x, f, b.width, v, C, m + q, r - b.x, e - q);
                    h.drawImage(a, g, z, f, w, v, l + r, m + q, d - r, e - q)
                }
            }
        };
        b._measureBounds = function() {
            var a = this._texture;
            return a ? c.Rectangle.identity.initialize(0, 0, a._textureWidth, a._textureHeight) : e.prototype._measureBounds.call(this)
        };
        d.renderFilter = c.RenderFilter.getInstance();
        return d
    } (c.DisplayObject);
    c.Bitmap = f;
    f.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._text = "";
            this._textChanged = !1;
            this._font = null;
            this._fontChanged = !1;
            this._textOffsetY = this._textOffsetX = this._textHeight = this._textWidth = this._lineSpacing = this._letterSpacing = 0;
            this.textLinesChange = !0;
            this._lineHeights = [];
            this.needDraw = this.cacheAsBitmap = !0
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this.$setText(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.$setText = function(a) {
            this._text != a && (this._textChanged = !0, this._text = a, this._setSizeDirty())
        };
        Object.defineProperty(b, "font", {
            get: function() {
                return this._font
            },
            set: function(a) {
                this.$setFont(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.$setFont = function(a) {
            this._font != a && (this._font = a, this._fontChanged = !0, this._setSizeDirty())
        };
        Object.defineProperty(b, "letterSpacing", {
            get: function() {
                return this._letterSpacing
            },
            set: function(a) {
                this._setLetterSpacing(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setLetterSpacing = function(a) {
            this._letterSpacing = a;
            this._setSizeDirty()
        };
        Object.defineProperty(b, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(a) {
                this._setLineSpacing(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setLineSpacing = function(a) {
            this._lineSpacing = a
        };
        b._setSizeDirty = function() {
            e.prototype._setSizeDirty.call(this);
            this.textLinesChange = !0
        };
        b._render = function(a) {
            var b = this._getTextLines(),
            u = b.length;
            if (0 != u) {
                for (var e = this._font,
                f = e._getFirstCharHeight(), f = Math.ceil(f * d.EMPTY_FACTOR), k = 0, h = this._DO_Props_._hasHeightSet ? this._DO_Props_._explicitHeight: Number.POSITIVE_INFINITY, l = this._lineHeights, m = 0; m < u; m++) {
                    var n = l[m];
                    if (0 < m && k + n > h) break;
                    for (var p = b[m], r = p.length, q = 0, x = 0; x < r; x++) {
                        var z = p.charAt(x),
                        w = e.getTexture(z);
                        if (w) {
                            var z = w._bitmapWidth || w._textureWidth,
                            y = w._bitmapHeight || w._textureHeight;
                            this._texture_to_render = w;
                            c.RenderFilter.getInstance().drawImage(a, this, w._bitmapX, w._bitmapY, z, y, q + w._offsetX, k + w._offsetY, z, y);
                            q += w._textureWidth + this._letterSpacing
                        } else " " == z ? q += f: c.$warn(1011, z)
                    }
                    k += n + this._lineSpacing
                }
                this._texture_to_render = null
            }
        };
        b._measureBounds = function() {
            var a = this._getTextLines();
            return 0 == a.length ? c.Rectangle.identity.initialize(0, 0, 0, 0) : c.Rectangle.identity.initialize(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX, this._textHeight - this._textOffsetY + (a.length - 1) * this._lineSpacing)
        };
        b._getTextLines = function() {
            if (!this.textLinesChange) return this._textLines;
            var a = [];
            this._textLines = a;
            this.textLinesChange = !1;
            var b = [];
            this._lineHeights = b;
            if (!this._text || !this._font) return a;
            for (var u = 0,
            e = 0,
            f = 0,
            k = 0,
            h = this._DO_Props_._hasWidthSet,
            l = this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: Number.POSITIVE_INFINITY, m = this._font, n = m._getFirstCharHeight(), p = Math.ceil(n * d.EMPTY_FACTOR), r = this._text.split(/(?:\r\n|\r|\n)/), q = r.length, x = !0, z = 0; z < q; z++) {
                for (var w = r[z], y = w.length, v = 0, C = 0, A = !0, B = 0; B < y; B++) {
                    A || (C += this._letterSpacing);
                    var D = w.charAt(B),
                    E,
                    G = 0,
                    H = 0,
                    F = m.getTexture(D);
                    if (F) D = F._textureWidth,
                    E = F._textureHeight,
                    G = F._offsetX,
                    H = F._offsetY;
                    else if (" " == D) D = p,
                    E = n;
                    else {
                        c.$warn(1011, D);
                        A && (A = !1);
                        continue
                    }
                    A && (A = !1, f = Math.min(G, f));
                    x && (k = Math.min(H, k));
                    h && 0 < B && C + D > l ? (a.push(w.substring(0, B)), b.push(v), e += v, u = Math.max(C, u), w = w.substring(B), y = w.length, B = 0, C = D, v = E) : (C += D, v = Math.max(E, v))
                }
                x && (x = !1);
                a.push(w);
                b.push(v);
                e += v;
                u = Math.max(C, u)
            }
            this._textWidth = u;
            this._textHeight = e;
            this._textOffsetX = f;
            this._textOffsetY = k;
            return a
        };
        d.EMPTY_FACTOR = 0.33;
        return d
    } (c.DisplayObject);
    c.BitmapText = f;
    f.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.LINEAR = "linear";
        c.RADIAL = "radial";
        return c
    } ();
    c.GradientType = f;
    f.prototype.__class__ = "egret.GradientType"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function d() {
            this.fillStyle = this.strokeStyle = this.commandQueue = this._renderContext = null;
            this._dirty = !1;
            this.lineY = this.lineX = 0;
            this._firstCheck = !0;
            this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
            this.commandQueue = []
        }
        var b = d.prototype;
        b.beginFill = function(a, b) {
            void 0 === b && (b = 1);
            this.fillStyle = this._parseColor(a, b);
            this._pushCommand(new e(this._setStyle, this, [this.fillStyle]))
        };
        b._parseColor = function(a, b) {
            return "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + b + ")"
        };
        b._setStyle = function(a) {
            c.Graphics._currentFillStyle = a;
            this._renderContext.fillStyle = a;
            this._renderContext.beginPath()
        };
        b.beginGradientFill = function(a, b, c, d, f) {
            void 0 === f && (f = null);
            this.fillStyle = a = this.getGradient(a, b, c, d, f);
            this._pushCommand(new e(this._setStyle, this, [a]))
        };
        b.getGradient = function(a, b, d, e, f) {
            var k = c.MainContext.instance.rendererContext,
            h = new c.Matrix;
            f ? (h.a = 819.2 * f.a, h.b = 819.2 * f.b, h.c = 819.2 * f.c, h.d = 819.2 * f.d, h.tx = f.tx, h.ty = f.ty) : (h.a = 100, h.d = 100);
            a = a == c.GradientType.LINEAR ? k.createLinearGradient( - 1, 0, 1, 0) : k.createRadialGradient(0, 0, 0, 0, 0, 1);
            f = b.length;
            for (k = 0; k < f; k++) a.addColorStop(e[k] / 255, this._parseColor(b[k], d[k]));
            a.matrix = h;
            return a
        };
        b.drawRect = function(a, b, c, d) {
            this._pushCommand(new e(function(a, b, g, c) {
                this._renderContext.beginPath();
                this._renderContext.rect(a, b, g, c);
                this._renderContext.closePath()
            },
            this, [a, b, c, d]));
            this._checkRect(a, b, c, d)
        };
        b.drawCircle = function(a, b, c) {
            this._pushCommand(new e(function(a, b, g) {
                this._renderContext.beginPath();
                this._renderContext.arc(a, b, g, 0, 2 * Math.PI);
                this._renderContext.closePath()
            },
            this, [a, b, c]));
            this._checkRect(a - c, b - c, 2 * c, 2 * c)
        };
        b.drawRoundRect = function(a, b, c, d, f, k) {
            this._pushCommand(new e(function(a, b, g, c, d, u) {
                d /= 2;
                u = u ? u / 2 : d;
                g = a + g;
                c = b + c;
                var e = c - u;
                this._renderContext.beginPath();
                this._renderContext.moveTo(g, e);
                this._renderContext.quadraticCurveTo(g, c, g - d, c);
                this._renderContext.lineTo(a + d, c);
                this._renderContext.quadraticCurveTo(a, c, a, c - u);
                this._renderContext.lineTo(a, b + u);
                this._renderContext.quadraticCurveTo(a, b, a + d, b);
                this._renderContext.lineTo(g - d, b);
                this._renderContext.quadraticCurveTo(g, b, g, b + u);
                this._renderContext.lineTo(g, e);
                this._renderContext.closePath()
            },
            this, [a, b, c, d, f, k]));
            this._checkRect(a, b, c, d)
        };
        b.drawEllipse = function(a, b, c, d) {
            this._pushCommand(new e(function(a, b, g, c) {
                a += g / 2;
                b += c / 2;
                var d = g > c ? g: c;
                g /= d;
                c /= d;
                d /= 2;
                this._renderContext.scale(g, c);
                this._renderContext.beginPath();
                this._renderContext.arc(a / g, b / c, d, 0, 2 * Math.PI);
                this._renderContext.closePath();
                this._renderContext.scale(1 / g, 1 / c)
            },
            this, [a, b, c, d]));
            this._checkRect(a, b, c, d)
        };
        b.lineStyle = function(a, b, c, d, f, k, h, l) {
            void 0 === a && (a = NaN);
            void 0 === b && (b = 0);
            void 0 === c && (c = 1);
            void 0 === d && (d = !1);
            void 0 === f && (f = "normal");
            void 0 === k && (k = null);
            void 0 === h && (h = null);
            void 0 === l && (l = 3);
            this.strokeStyle && (this._createEndLineCommand(), this._pushCommand(this._endLineCommand));
            this.strokeStyle = this._parseColor(b, c);
            this._pushCommand(new e(function(a, b) {
                this._renderContext.lineWidth = a;
                this._renderContext.strokeStyle = b;
                this._renderContext.beginPath()
            },
            this, [a, this.strokeStyle]));
            this.moveTo(this.lineX, this.lineY)
        };
        b.lineTo = function(a, b) {
            this._pushCommand(new e(function(a, b) {
                this._renderContext.lineTo(a, b)
            },
            this, [a, b]));
            this._checkPoint(this.lineX, this.lineY);
            this.lineX = a;
            this.lineY = b;
            this._checkPoint(a, b)
        };
        b.curveTo = function(a, b, c, d) {
            this._pushCommand(new e(function(a, b, g, c) {
                this._renderContext.quadraticCurveTo(a, b, g, c)
            },
            this, [a, b, c, d]));
            this._checkPoint(this.lineX, this.lineY);
            this.lineX = c;
            this.lineY = d;
            this._checkPoint(a, b);
            this._checkPoint(c, d)
        };
        b.cubicCurveTo = function(a, b, c, d, f, k) {
            this._pushCommand(new e(function(a, b, g, c, d, u) {
                this._renderContext.bezierCurveTo(a, b, g, c, d, u)
            },
            this, [a, b, c, d, f, k]));
            this._checkPoint(this.lineX, this.lineY);
            this.lineX = f;
            this.lineY = k;
            this._checkPoint(a, b);
            this._checkPoint(c, d);
            this._checkPoint(f, k)
        };
        b.moveTo = function(a, b) {
            this._pushCommand(new e(function(a, b) {
                this._renderContext.moveTo(a, b)
            },
            this, [a, b]));
            this.lineX = a;
            this.lineY = b
        };
        b.clear = function() {
            this.lineY = this.lineX = this.commandQueue.length = 0;
            this.fillStyle = this.strokeStyle = null;
            this._maxY = this._maxX = this._minY = this._minX = 0;
            this._dirty = this._firstCheck = !0
        };
        b.endFill = function() {
            null != this.fillStyle && (this._fill(), this.fillStyle = null)
        };
        b._beginDraw = function(a) {};
        b._endDraw = function(a) {};
        b._draw = function(a) {
            var b = this.commandQueue.length;
            if (0 != b) {
                this._beginDraw(a);
                for (var c = 0; c < b; c++) {
                    var d = this.commandQueue[c];
                    d.method.apply(d.thisObject, d.args)
                }
                this.fillStyle && (this._createEndFillCommand(), d = this._endFillCommand, d.method.apply(d.thisObject, d.args));
                this.strokeStyle && (this._createEndLineCommand(), d = this._endLineCommand, d.method.apply(d.thisObject, d.args));
                this._endDraw(a);
                this._dirty = !1
            }
        };
        b._checkRect = function(a, b, c, d) {
            this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = b, this._maxX = a + c, this._maxY = b + d) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, b), this._maxX = Math.max(this._maxX, a + c), this._maxY = Math.max(this._maxY, b + d));
            this._dirty = !0
        };
        b._checkPoint = function(a, b) {
            this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = b, this._maxX = a, this._maxY = b) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, b), this._maxX = Math.max(this._maxX, a), this._maxY = Math.max(this._maxY, b));
            this._lastX = a;
            this._lastY = b;
            this._dirty = !0
        };
        b._measureBounds = function() {
            return c.Rectangle.identity.initialize(this._minX, this._minY, this._maxX - this._minX, this._maxY - this._minY)
        };
        b._createEndFillCommand = function() {
            this._endFillCommand || (this._endFillCommand = new e(function() {
                this._renderContext.fill();
                this._renderContext.closePath()
            },
            this, null))
        };
        b._fill = function() {
            this.fillStyle && (this._createEndFillCommand(), this._pushCommand(this._endFillCommand));
            this.strokeStyle && (this._createEndLineCommand(), this._pushCommand(this._endLineCommand))
        };
        b._createEndLineCommand = function() {
            this._endLineCommand || (this._endLineCommand = new e(function() {
                this._renderContext.stroke();
                this._renderContext.closePath()
            },
            this, null))
        };
        b._pushCommand = function(a) {
            this.commandQueue.push(a);
            this._dirty = !0
        };
        return d
    } ();
    c.Graphics = f;
    f.prototype.__class__ = "egret.Graphics";
    var e = function() {
        return function(c, b, a) {
            this.method = c;
            this.thisObject = b;
            this.args = a
        }
    } ();
    e.prototype.__class__ = "egret.Command"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._graphics = null
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new c.Graphics, this.needDraw = !0);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        b._draw = function(a) {
            this._graphics && this._graphics._dirty && this._setCacheDirty();
            e.prototype._draw.call(this, a)
        };
        b._render = function(a) {
            this._graphics && this._graphics._draw(a)
        };
        b._measureBounds = function() {
            var a = this._graphics;
            return a ? a._measureBounds() : e.prototype._measureBounds.call(this)
        };
        return d
    } (c.DisplayObject);
    c.Shape = f;
    f.prototype.__class__ = "egret.Shape"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._graphics = null
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new c.Graphics, this.needDraw = !0);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        b._draw = function(a) {
            this._graphics && this._graphics._dirty && this._setCacheDirty();
            e.prototype._draw.call(this, a)
        };
        b._render = function(a) {
            this._graphics && this._graphics._draw(a);
            e.prototype._render.call(this, a)
        };
        b._measureBounds = function() {
            for (var a = 0,
            b = 0,
            d = 0,
            e = 0,
            f = this._children.length,
            k = 0; k < f; k++) {
                var h = this._children[k];
                if (h.visible) {
                    var l = h.getBounds(c.Rectangle.identity, !1),
                    m = l.x,
                    n = l.y,
                    p = l.width,
                    l = l.height,
                    h = h._getMatrix(),
                    h = c.DisplayObject.getTransformBounds(c.Rectangle.identity.initialize(m, n, p, l), h),
                    m = h.x,
                    n = h.y,
                    p = h.width + h.x,
                    h = h.height + h.y;
                    if (m < a || 0 == k) a = m;
                    if (p > b || 0 == k) b = p;
                    if (n < d || 0 == k) d = n;
                    if (h > e || 0 == k) e = h
                }
            }
            if (this._graphics) {
                f = this._graphics._measureBounds();
                m = f.x;
                n = f.y;
                p = f.width + f.x;
                h = f.height + f.y;
                if (m < a || 0 == k) a = m;
                if (p > b || 0 == k) b = p;
                if (n < d || 0 == k) d = n;
                if (h > e || 0 == k) e = h
            }
            return c.Rectangle.identity.initialize(a, d, b - a, e - d)
        };
        b.hitTest = function(a, b, d) {
            void 0 === d && (d = !1);
            var s = e.prototype.hitTest.call(this, a, b, d);
            return s ? s: this._graphics ? c.DisplayObject.prototype.hitTest.call(this, a, b, d) : null
        };
        return d
    } (c.DisplayObjectContainer);
    c.Sprite = f;
    f.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {}
        e._getStartLine = function(c) {
            var b = e._getTextHeight(c),
            a = 0;
            c._DO_Props_._hasHeightSet && (!(b < c._DO_Props_._explicitHeight) && b > c._DO_Props_._explicitHeight && (a = Math.max(c._TF_Props_._scrollV - 1, 0), a = Math.min(c._TF_Props_._numLines - 1, a)), c._TF_Props_._multiline || (a = Math.max(c._TF_Props_._scrollV - 1, 0), a = Math.min(c._TF_Props_._numLines - 1, a)));
            return a
        };
        e._getHalign = function(d) {
            var b = d._getLinesArr(),
            a = 0;
            d._TF_Props_._textAlign == c.HorizontalAlign.CENTER ? a = 0.5 : d._TF_Props_._textAlign == c.HorizontalAlign.RIGHT && (a = 1);
            d._TF_Props_._type == c.TextFieldType.INPUT && !d._TF_Props_._multiline && 1 < b.length && (a = 0);
            return a
        };
        e._getTextHeight = function(d) {
            return c.TextFieldType.INPUT != d._TF_Props_._type || d._TF_Props_._multiline ? d._TF_Props_._textMaxHeight + (d._TF_Props_._numLines - 1) * d._TF_Props_._lineSpacing: d._TF_Props_._size
        };
        e._getValign = function(d) {
            var b = e._getTextHeight(d);
            return d._TF_Props_._type == c.TextFieldType.INPUT ? d._TF_Props_._multiline ? 0 : 0.5 : d._DO_Props_._hasHeightSet && b < d._DO_Props_._explicitHeight ? (b = 0, d._TF_Props_._verticalAlign == c.VerticalAlign.MIDDLE ? b = 0.5 : d._TF_Props_._verticalAlign == c.VerticalAlign.BOTTOM && (b = 1), b) : 0
        };
        e._getTextElement = function(c, b, a) {
            b = e._getHit(c, b, a);
            c = c._getLinesArr();
            return b && c[b.lineIndex] && c[b.lineIndex].elements[b.textElementIndex] ? c[b.lineIndex].elements[b.textElementIndex] : null
        };
        e._getHit = function(c, b, a) {
            var g = c._getLinesArr();
            if (0 == c._TF_Props_._textMaxWidth) return null;
            var u = 0,
            s = e._getTextHeight(c),
            f = 0;
            c._DO_Props_._hasHeightSet && c._DO_Props_._explicitHeight > s && (f = e._getValign(c) * (c._DO_Props_._explicitHeight - s), 0 != f && (a -= f));
            f = 0;
            for (s = e._getStartLine(c); s < g.length; s++) {
                var k = g[s];
                if (f + k.height >= a) {
                    u = s + 1;
                    break
                } else f += k.height;
                if (f + c._TF_Props_._lineSpacing > a) return null;
                f += c._TF_Props_._lineSpacing
            }
            if (0 === u) return null;
            c = g[u - 1];
            for (s = a = 0; s < c.elements.length; s++) if (g = c.elements[s], a + g.width < b) a += g.width;
            else return {
                lineIndex: u - 1,
                textElementIndex: s
            };
            return null
        };
        e._getScrollNum = function(c) {
            var b = 1;
            if (c._TF_Props_._multiline) {
                var a = c.height,
                g = c.size;
                c = c.lineSpacing;
                b = Math.floor(a / (g + c));
                a - (g + c) * b > g / 2 && b++
            }
            return b
        };
        return e
    } ();
    c.TextFieldUtils = f;
    f.prototype.__class__ = "egret.TextFieldUtils"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        return function() {
            this._text = this._type = "";
            this._displayAsPassword = !1;
            this._fontFamily = c.TextField.default_fontFamily;
            this._size = 30;
            this._bold = this._italic = !1;
            this._textColorString = "#FFFFFF";
            this._textColor = 16777215;
            this._strokeColorString = "#000000";
            this._stroke = this._strokeColor = 0;
            this._border = !1;
            this._borderColor = 0;
            this._background = !1;
            this._backgroundColor = 16777215;
            this._textAlign = "left";
            this._verticalAlign = "top";
            this._maxChars = this._textMaxHeight = this._textMaxWidth = 0;
            this._scrollV = -1;
            this._numLines = this._lineSpacing = 0;
            this._wordWrap = this._multiline = !1
        }
    } ();
    c.TextFieldProperties = f;
    f.prototype.__class__ = "egret.TextFieldProperties"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._inputEnabled = !1;
            this._bgGraphics = this._inputUtils = null;
            this._isFlow = !1;
            this._textArr = [];
            this._isArrayChanged = !1;
            this._linesArr = [];
            this._isTyping = !1;
            this.needDraw = !0;
            this._TF_Props_ = new c.TextFieldProperties
        }
        __extends(d, e);
        var b = d.prototype;
        b.isInput = function() {
            return this._TF_Props_._type == c.TextFieldType.INPUT
        };
        b._setTouchEnabled = function(a) {
            e.prototype._setTouchEnabled.call(this, a);
            this.isInput() && (this._inputEnabled = !0)
        };
        Object.defineProperty(b, "type", {
            get: function() {
                return this._TF_Props_._type
            },
            set: function(a) {
                this._setType(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setType = function(a) {
            var b = this._TF_Props_;
            b._type != a && (b._type = a, b._type == c.TextFieldType.INPUT ? (this._DO_Props_._hasWidthSet || this._setWidth(100), this._DO_Props_._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new c.InputController), this._inputUtils.init(this), this._setDirty(), this._DO_Props_._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
        };
        Object.defineProperty(b, "text", {
            get: function() {
                return this._getText()
            },
            set: function(a) {
                this._setText(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._getText = function() {
            return this._TF_Props_._type == c.TextFieldType.INPUT ? this._inputUtils._getText() : this._TF_Props_._text
        };
        b._setSizeDirty = function() {
            e.prototype._setSizeDirty.call(this);
            this._isArrayChanged = !0
        };
        b._setTextDirty = function() {
            this._setSizeDirty()
        };
        b._setBaseText = function(a) {
            null == a && (a = "");
            var b = this._TF_Props_;
            this._isFlow = !1;
            b._text != a && (this._setTextDirty(), b._text = a, a = "", a = b._displayAsPassword ? this.changeToPassText(b._text) : b._text, this.setMiddleStyle([{
                text: a
            }]))
        };
        b._setText = function(a) {
            null == a && (a = "");
            this._setBaseText(a);
            this._inputUtils && this._inputUtils._setText(this._TF_Props_._text)
        };
        Object.defineProperty(b, "displayAsPassword", {
            get: function() {
                return this._TF_Props_._displayAsPassword
            },
            set: function(a) {
                this._setDisplayAsPassword(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setDisplayAsPassword = function(a) {
            var b = this._TF_Props_;
            b._displayAsPassword != a && (b._displayAsPassword = a, this._setTextDirty(), a = "", a = b._displayAsPassword ? this.changeToPassText(b._text) : b._text, this.setMiddleStyle([{
                text: a
            }]))
        };
        Object.defineProperty(b, "fontFamily", {
            get: function() {
                return this._TF_Props_._fontFamily
            },
            set: function(a) {
                this._setFontFamily(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setFontFamily = function(a) {
            this._TF_Props_._fontFamily != a && (this._setTextDirty(), this._TF_Props_._fontFamily = a)
        };
        Object.defineProperty(b, "size", {
            get: function() {
                return this._TF_Props_._size
            },
            set: function(a) {
                this._setSize(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setSize = function(a) {
            this._TF_Props_._size != a && (this._setTextDirty(), this._TF_Props_._size = a)
        };
        Object.defineProperty(b, "italic", {
            get: function() {
                return this._TF_Props_._italic
            },
            set: function(a) {
                this._setItalic(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setItalic = function(a) {
            this._TF_Props_._italic != a && (this._setTextDirty(), this._TF_Props_._italic = a)
        };
        Object.defineProperty(b, "bold", {
            get: function() {
                return this._TF_Props_._bold
            },
            set: function(a) {
                this._setBold(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setBold = function(a) {
            this._TF_Props_._bold != a && (this._setTextDirty(), this._TF_Props_._bold = a)
        };
        Object.defineProperty(b, "textColor", {
            get: function() {
                return this._TF_Props_._textColor
            },
            set: function(a) {
                this._setTextColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setTextColor = function(a) {
            this._TF_Props_._textColor != a && (this._setTextDirty(), this._TF_Props_._textColor = a, this._TF_Props_._textColorString = c.toColorString(a))
        };
        Object.defineProperty(b, "strokeColor", {
            get: function() {
                return this._TF_Props_._strokeColor
            },
            set: function(a) {
                this._setStrokeColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setStrokeColor = function(a) {
            this._TF_Props_._strokeColor != a && (this._setTextDirty(), this._TF_Props_._strokeColor = a, this._TF_Props_._strokeColorString = c.toColorString(a))
        };
        Object.defineProperty(b, "stroke", {
            get: function() {
                return this._TF_Props_._stroke
            },
            set: function(a) {
                this._setStroke(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setStroke = function(a) {
            this._TF_Props_._stroke != a && (this._setTextDirty(), this._TF_Props_._stroke = a)
        };
        Object.defineProperty(b, "textAlign", {
            get: function() {
                return this._TF_Props_._textAlign
            },
            set: function(a) {
                this._setTextAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setTextAlign = function(a) {
            this._TF_Props_._textAlign != a && (this._setTextDirty(), this._TF_Props_._textAlign = a)
        };
        Object.defineProperty(b, "verticalAlign", {
            get: function() {
                return this._TF_Props_._verticalAlign
            },
            set: function(a) {
                this._setVerticalAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setVerticalAlign = function(a) {
            this._TF_Props_._verticalAlign != a && (this._setTextDirty(), this._TF_Props_._verticalAlign = a)
        };
        Object.defineProperty(b, "maxChars", {
            get: function() {
                return this._TF_Props_._maxChars
            },
            set: function(a) {
                this._setMaxChars(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setMaxChars = function(a) {
            this._TF_Props_._maxChars != a && (this._TF_Props_._maxChars = a)
        };
        Object.defineProperty(b, "scrollV", {
            get: function() {
                return Math.min(Math.max(this._TF_Props_._scrollV, 1), this.maxScrollV)
            },
            set: function(a) {
                this._TF_Props_._scrollV = Math.max(a, 1);
                this._setDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "maxScrollV", {
            get: function() {
                this._getLinesArr();
                return Math.max(this._TF_Props_._numLines - c.TextFieldUtils._getScrollNum(this) + 1, 1)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "selectionBeginIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "selectionEndIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "caretIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        b._setSelection = function(a, b) {};
        Object.defineProperty(b, "lineSpacing", {
            get: function() {
                return this._TF_Props_._lineSpacing
            },
            set: function(a) {
                this._setLineSpacing(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setLineSpacing = function(a) {
            this._TF_Props_._lineSpacing != a && (this._setTextDirty(), this._TF_Props_._lineSpacing = a)
        };
        b._getLineHeight = function() {
            return this._TF_Props_._lineSpacing + this._TF_Props_._size
        };
        Object.defineProperty(b, "numLines", {
            get: function() {
                return this._TF_Props_._numLines
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "multiline", {
            get: function() {
                return this._TF_Props_._multiline
            },
            set: function(a) {
                this._setMultiline(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setMultiline = function(a) {
            this._TF_Props_._multiline = a;
            this._setDirty()
        };
        b._setWidth = function(a) {
            e.prototype._setWidth.call(this, a);
            this.fillBackground()
        };
        b._setHeight = function(a) {
            e.prototype._setHeight.call(this, a);
            this.fillBackground()
        };
        Object.defineProperty(b, "border", {
            get: function() {
                return this._TF_Props_._border
            },
            set: function(a) {
                this._TF_Props_._border = a;
                this.fillBackground()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "borderColor", {
            get: function() {
                return this._TF_Props_._borderColor
            },
            set: function(a) {
                this._TF_Props_._borderColor = a;
                this.fillBackground()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "background", {
            get: function() {
                return this._TF_Props_._background
            },
            set: function(a) {
                this._TF_Props_._background = a;
                this.fillBackground()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "backgroundColor", {
            get: function() {
                return this._TF_Props_._backgroundColor
            },
            set: function(a) {
                this._TF_Props_._backgroundColor = a;
                this.fillBackground()
            },
            enumerable: !0,
            configurable: !0
        });
        b.fillBackground = function() {
            var a = this._bgGraphics,
            b = this._TF_Props_;
            a && a.clear();
            if (b._background || b._border) null == a && (a = this._bgGraphics = new c.Graphics),
            b._background && a.beginFill(b._backgroundColor, 1),
            b._border && a.lineStyle(1, b._borderColor),
            a.drawRect(0, 0, this._getWidth(), this._getHeight()),
            a.endFill()
        };
        b.setFocus = function() {
            c.$warn(1013)
        };
        b._onRemoveFromStage = function() {
            e.prototype._onRemoveFromStage.call(this);
            this._removeEvent();
            this._TF_Props_._type == c.TextFieldType.INPUT && this._inputUtils._removeStageText()
        };
        b._onAddToStage = function() {
            e.prototype._onAddToStage.call(this);
            this._addEvent();
            this._TF_Props_._type == c.TextFieldType.INPUT && this._inputUtils._addStageText()
        };
        b._updateBaseTransform = function() {
            this._getLinesArr();
            0 == this._TF_Props_._textMaxWidth && this._TF_Props_._type != c.TextFieldType.INPUT || e.prototype._updateTransform.call(this)
        };
        b._updateTransform = function() {
            this._TF_Props_._type == c.TextFieldType.INPUT ? this._DO_Props_._normalDirty ? this._inputUtils._updateProperties() : this._inputUtils._updateTransform() : this._updateBaseTransform()
        };
        b._draw = function(a) {
            var b = this._TF_Props_;
            if (b._type == c.TextFieldType.INPUT) {
                if (this._isTyping) return
            } else if (0 == b._textMaxWidth) return;
            e.prototype._draw.call(this, a)
        };
        b._render = function(a) {
            this._bgGraphics && this._bgGraphics._draw(a);
            this.drawText(a);
            this._clearDirty()
        };
        b._measureBounds = function() {
            var a = this._TF_Props_;
            this._getLinesArr();
            return 0 == a._textMaxWidth ? c.Rectangle.identity.initialize(0, 0, 0, 0) : c.Rectangle.identity.initialize(0, 0, a._textMaxWidth, c.TextFieldUtils._getTextHeight(this))
        };
        Object.defineProperty(b, "textFlow", {
            get: function() {
                return this._textArr
            },
            set: function(a) {
                var b = this._TF_Props_;
                this._isFlow = !0;
                var c = "";
                null == a && (a = []);
                for (var d = 0; d < a.length; d++) c += a[d].text;
                b._displayAsPassword ? this._setBaseText(c) : (b._text = c, this.setMiddleStyle(a))
            },
            enumerable: !0,
            configurable: !0
        });
        b.changeToPassText = function(a) {
            if (this._TF_Props_._displayAsPassword) {
                for (var b = "",
                c = 0,
                d = a.length; c < d; c++) switch (a.charAt(c)) {
                case "\n":
                    b += "\n";
                    break;
                case "\r":
                    break;
                default:
                    b += "*"
                }
                return b
            }
            return a
        };
        b.setMiddleStyle = function(a) {
            this._isArrayChanged = !0;
            this._textArr = a;
            this._setSizeDirty()
        };
        Object.defineProperty(b, "textWidth", {
            get: function() {
                return this._TF_Props_._textMaxWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "textHeight", {
            get: function() {
                return c.TextFieldUtils._getTextHeight(this)
            },
            enumerable: !0,
            configurable: !0
        });
        b.appendText = function(a) {
            this.appendElement({
                text: a
            })
        };
        b.appendElement = function(a) {
            var b = this._TF_Props_,
            c = b._text + a.text;
            b._displayAsPassword ? this._setBaseText(c) : (b._text = c, this._textArr.push(a), this.setMiddleStyle(this._textArr))
        };
        b._getLinesArr = function() {
            var a = this._TF_Props_;
            if (!this._isArrayChanged) return this._linesArr;
            this._isArrayChanged = !1;
            var b = this._textArr,
            d = c.MainContext.instance.rendererContext;
            this._linesArr.length = 0;
            a._textMaxHeight = 0;
            a._textMaxWidth = 0;
            if (this._DO_Props_._hasWidthSet && 0 == this._DO_Props_._explicitWidth) return a._numLines = 0,
            [{
                width: 0,
                height: 0,
                charNum: 0,
                elements: [],
                hasNextLine: !1
            }];
            this._isFlow || d.setupFont(this);
            for (var e = this._linesArr,
            f = 0,
            k = 0,
            h = 0,
            l = 0,
            m, n = 0,
            p = b.length; n < p; n++) {
                var r = b[n];
                r.style = r.style || {};
                for (var q = r.text.toString().split(/(?:\r\n|\r|\n)/), x = 0, z = q.length; x < z; x++) {
                    null == e[l] && (m = {
                        width: 0,
                        height: 0,
                        elements: [],
                        charNum: 0,
                        hasNextLine: !1
                    },
                    e[l] = m, k = h = f = 0);
                    var h = a._type == c.TextFieldType.INPUT ? a._size: Math.max(h, r.style.size || a._size),
                    w = !0;
                    if ("" == q[x]) x == z - 1 && (w = !1);
                    else {
                        this._isFlow && d.setupFont(this, r.style);
                        var y = d.measureText(q[x]);
                        if (this._DO_Props_._hasWidthSet) if (f + y <= this._DO_Props_._explicitWidth) m.elements.push({
                            width: y,
                            text: q[x],
                            style: r.style
                        }),
                        f += y,
                        k += q[x].length,
                        x == z - 1 && (w = !1);
                        else {
                            for (var v = 0,
                            C = 0,
                            A = q[x], B = this._TF_Props_._wordWrap ? A.split(/\b/) : A.match(/./g), D = B.length, E = 0; v < D; v++) {
                                y = d.measureText(B[v]);
                                if (0 != f && f + y > this._DO_Props_._explicitWidth && 0 != f + v) break;
                                E += B[v].length;
                                C += y;
                                f += y;
                                k += E
                            }
                            if (0 < v) {
                                m.elements.push({
                                    width: C,
                                    text: A.substring(0, E),
                                    style: r.style
                                });
                                y = A.substring(E);
                                v = 0;
                                for (C = y.length; v < C && " " == y.charAt(v); v++);
                                q[x] = y.substring(v)
                            }
                            "" != q[x] && (x--, w = !1)
                        } else f += y,
                        k += q[x].length,
                        m.elements.push({
                            width: y,
                            text: q[x],
                            style: r.style
                        }),
                        x == z - 1 && (w = !1)
                    }
                    w && (k++, m.hasNextLine = !0);
                    x < q.length - 1 && (m.width = f, m.height = h, m.charNum = k, a._textMaxWidth = Math.max(a._textMaxWidth, f), a._textMaxHeight += h, l++)
                }
                n == b.length - 1 && m && (m.width = f, m.height = h, m.charNum = k, a._textMaxWidth = Math.max(a._textMaxWidth, f), a._textMaxHeight += h)
            }
            a._numLines = e.length;
            return e
        };
        Object.defineProperty(b, "wordWrap", {
            get: function() {
                return this._TF_Props_._wordWrap
            },
            set: function(a) {
                this._TF_Props_._wordWrap = a
            },
            enumerable: !0,
            configurable: !0
        });
        b.drawText = function(a) {
            var b = this._TF_Props_,
            d = this._getLinesArr();
            if (0 != b._textMaxWidth) {
                var e = this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: b._textMaxWidth,
                f = c.TextFieldUtils._getTextHeight(this),
                k = 0,
                h = c.TextFieldUtils._getStartLine(this);
                if (this._DO_Props_._hasHeightSet && this._DO_Props_._explicitHeight > f) var l = c.TextFieldUtils._getValign(this),
                k = k + l * (this._DO_Props_._explicitHeight - f);
                for (var k = Math.round(k), f = c.TextFieldUtils._getHalign(this), l = 0, m = h, n = b._numLines; m < n; m++) {
                    var p = d[m],
                    r = p.height,
                    k = k + r / 2;
                    if (m != h) {
                        if (b._type == c.TextFieldType.INPUT && !b._multiline) break;
                        if (this._DO_Props_._hasHeightSet && k > this._DO_Props_._explicitHeight) break
                    }
                    for (var l = Math.round((e - p.width) * f), q = 0, x = p.elements.length; q < x; q++) {
                        var z = p.elements[q];
                        a.drawText(this, z.text, l, k + (r - (z.style.size || b._size)) / 2, z.width, z.style);
                        l += z.width
                    }
                    k += r / 2 + b._lineSpacing
                }
            }
        };
        b._addEvent = function() {
            this.addEventListener(c.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
        };
        b._removeEvent = function() {
            this.removeEventListener(c.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
        };
        b.onTapHandler = function(a) {
            if (this._TF_Props_._type != c.TextFieldType.INPUT && (a = c.TextFieldUtils._getTextElement(this, a.localX, a.localY), null != a && (a = a.style) && a.href && a.href.match(/^event:/))) {
                var b = a.href.match(/^event:/)[0];
                c.TextEvent.dispatchTextEvent(this, c.TextEvent.LINK, a.href.substring(b.length))
            }
        };
        d.default_fontFamily = "Arial";
        return d
    } (c.DisplayObject);
    c.TextField = f;
    f.prototype.__class__ = "egret.TextField"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {
            this._replaceArr = [];
            this.resutlArr = [];
            this.initReplaceArr()
        }
        var d = c.prototype;
        d.initReplaceArr = function() {
            this._replaceArr = [];
            this._replaceArr.push([/&lt;/g, "<"]);
            this._replaceArr.push([/&gt;/g, ">"]);
            this._replaceArr.push([/&amp;/g, "&"]);
            this._replaceArr.push([/&quot;/g, '"']);
            this._replaceArr.push([/&apos;/g, "'"])
        };
        d.replaceSpecial = function(b) {
            for (var a = 0; a < this._replaceArr.length; a++) b = b.replace(this._replaceArr[a][0], this._replaceArr[a][1]);
            return b
        };
        d.parser = function(b) {
            this.stackArray = [];
            this.resutlArr = [];
            for (var a = 0,
            g = b.length; a < g;) {
                var c = b.indexOf("<", a);
                0 > c ? (this.addToResultArr(b.substring(a)), a = g) : (this.addToResultArr(b.substring(a, c)), a = b.indexOf(">", c), "/" == b.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(b.substring(c + 1, a)), a += 1)
            }
            return this.resutlArr
        };
        d.addToResultArr = function(b) {
            "" != b && (b = this.replaceSpecial(b), 0 < this.stackArray.length ? this.resutlArr.push({
                text: b,
                style: this.stackArray[this.stackArray.length - 1]
            }) : this.resutlArr.push({
                text: b
            }))
        };
        d.changeStringToObject = function(b) {
            b = b.trim();
            var a = {},
            g = [];
            if ("i" == b.charAt(0) || "b" == b.charAt(0)) this.addProperty(a, b, "true");
            else if (g = b.match(/^(font|a)\s/)) for (b = b.substring(g[0].length).trim(), g = 0; g = b.match(this.getHeadReg());) {
                var c = g[0],
                d = "";
                b = b.substring(c.length).trim();
                '"' == b.charAt(0) ? (g = b.indexOf('"', 1), d = b.substring(1, g), g += 1) : "'" == b.charAt(0) ? (g = b.indexOf("'", 1), d = b.substring(1, g), g += 1) : (d = b.match(/(\S)+/)[0], g = d.length);
                this.addProperty(a, c.substring(0, c.length - 1).trim(), d.trim());
                b = b.substring(g).trim()
            }
            return a
        };
        d.getHeadReg = function() {
            return /^(color|textcolor|strokecolor|stroke|b|bold|i|italic|size|fontfamily|href)(\s)*=/
        };
        d.addProperty = function(b, a, g) {
            switch (a.toLowerCase()) {
            case "color":
            case "textcolor":
                g = g.replace(/#/, "0x");
                b.textColor = parseInt(g);
                break;
            case "strokecolor":
                g = g.replace(/#/, "0x");
                b.strokeColor = parseInt(g);
                break;
            case "stroke":
                b.stroke = parseInt(g);
                break;
            case "b":
            case "bold":
                b.bold = "true" == g;
                break;
            case "i":
            case "italic":
                b.italic = "true" == g;
                break;
            case "size":
                b.size = parseInt(g);
                break;
            case "fontfamily":
                b.fontFamily = g;
                break;
            case "href":
                b.href = this.replaceSpecial(g)
            }
        };
        d.addToArray = function(b) {
            b = this.changeStringToObject(b);
            if (0 != this.stackArray.length) {
                var a = this.stackArray[this.stackArray.length - 1],
                g;
                for (g in a) null == b[g] && (b[g] = a[g])
            }
            this.stackArray.push(b)
        };
        return c
    } ();
    c.HtmlTextParser = f;
    f.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.DYNAMIC = "dynamic";
        c.INPUT = "input";
        return c
    } ();
    c.TextFieldType = f;
    f.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            e.call(this);
            this._bitmapY = this._bitmapX = this._sourceHeight = this._sourceWidth = 0;
            this._textureMap = {};
            this.texture = a;
            this._sourceWidth = a._sourceWidth;
            this._sourceHeight = a._sourceHeight;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(d, e);
        var b = d.prototype;
        b.getTexture = function(a) {
            return this._textureMap[a]
        };
        b.createTexture = function(a, b, d, e, f, k, h, l, m) {
            void 0 === k && (k = 0);
            void 0 === h && (h = 0);
            "undefined" === typeof l && (l = k + e);
            "undefined" === typeof m && (m = h + f);
            var n = this.texture._clone(),
            p = c.MainContext.instance.rendererContext._texture_scale_factor;
            n._bitmapX = this._bitmapX + b;
            n._bitmapY = this._bitmapY + d;
            n._bitmapWidth = e * p;
            n._bitmapHeight = f * p;
            n._offsetX = k;
            n._offsetY = h;
            n._textureWidth = l * p;
            n._textureHeight = m * p;
            n._sourceWidth = this._sourceWidth;
            n._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = n
        };
        b.dispose = function() {
            this.texture && this.texture.dispose()
        };
        return d
    } (c.HashObject);
    c.SpriteSheet = f;
    f.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._text = null;
            this._isFocus = !1
        }
        __extends(d, e);
        var b = d.prototype;
        b.init = function(a) {
            this._text = a;
            this.stageText = c.StageText.create();
            this.stageText._setTextField(this._text)
        };
        b._addStageText = function() {
            this._text._inputEnabled || (this._text._DO_Props_._touchEnabled = !0);
            this.stageText._add();
            this.stageText._addListeners();
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            c.MainContext.instance.stage.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
            this.stageText.addEventListener("blur", this.blurHandler, this);
            this.stageText.addEventListener("focus", this.focusHandler, this)
        };
        b._removeStageText = function() {
            this._text._inputEnabled || (this._text._DO_Props_._touchEnabled = !1);
            this.stageText._remove();
            this.stageText._removeListeners();
            this.stageText._removeInput();
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
            this.stageText.removeEventListener("blur", this.blurHandler, this);
            this.stageText.removeEventListener("focus", this.focusHandler, this)
        };
        b._getText = function() {
            return this.stageText._getText()
        };
        b._setText = function(a) {
            this.stageText._setText(a)
        };
        b.focusHandler = function(a) {
            this._isFocus = !0;
            this._text._isTyping = !0;
            this._text.dispatchEvent(new c.FocusEvent(c.FocusEvent.FOCUS_IN))
        };
        b.blurHandler = function(a) {
            this._isFocus = !1;
            this._text._isTyping = !1;
            this._text.dispatchEvent(new c.FocusEvent(c.FocusEvent.FOCUS_OUT))
        };
        b.onMouseDownHandler = function(a) {
            a.stopPropagation();
            this._text._DO_Props_._visible && !this._isFocus && (this._isFocus = !0, this.stageText._show(this._text._TF_Props_._multiline, this._text.size, this._text.width, this._text.height), a = this._text.localToGlobal(), this.stageText._initElement(a.x, a.y, this._text._worldTransform.a, this._text._worldTransform.d))
        };
        b.onStageDownHandler = function(a) {
            this.stageText._hide()
        };
        b.updateTextHandler = function(a) {
            this.resetText();
            this._text.dispatchEvent(new c.Event(c.Event.CHANGE))
        };
        b.resetText = function() {
            this._text._setBaseText(this.stageText._getText())
        };
        b._hideInput = function() {
            this.stageText._removeInput()
        };
        b._updateTransform = function() {
            this._text._updateBaseTransform(); ! this._text._DO_Props_._visible && this.stageText && this._hideInput()
        };
        b._updateProperties = function() {
            if (!this._isFocus) {
                var a = this._text._DO_Props_._stage;
                if (null == a) this.stageText._setVisible(!1);
                else {
                    for (var b = this._text,
                    c = b._DO_Props_._visible; c;) {
                        b = b.parent;
                        if (b == a) break;
                        c = b._DO_Props_._visible
                    }
                    this.stageText._setVisible(c)
                }
                this.stageText._setMultiline(this._text._TF_Props_._multiline);
                this.stageText._setTextType(this._text._TF_Props_._displayAsPassword ? "password": "text");
                this.stageText._setText(this._text._TF_Props_._text);
                this.stageText._resetStageText()
            }
            this._updateTransform()
        };
        return d
    } (c.HashObject);
    c.InputController = f;
    f.prototype.__class__ = "egret.InputController"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(a, b) {
            c.call(this, a);
            this.firstCharHeight = 0;
            "string" == typeof b ? this.charList = this.parseConfig(b) : b && b.hasOwnProperty("frames") ? this.charList = b.frames: this.charList = {}
        }
        __extends(d, c);
        var b = d.prototype;
        b.getTexture = function(a) {
            var b = this._textureMap[a];
            if (!b) {
                b = this.charList[a];
                if (!b) return null;
                b = this.createTexture(a, b.x, b.y, b.w, b.h, b.offX, b.offY, b.sourceW, b.sourceH);
                this._textureMap[a] = b
            }
            return b
        };
        b._getFirstCharHeight = function() {
            if (0 == this.firstCharHeight) for (var a in this.charList) {
                var b = this.charList[a];
                if (b) {
                    var c = b.sourceH;
                    void 0 === c && (c = b.h, void 0 === c && (c = 0), b = b.offY, void 0 === b && (b = 0), c += b);
                    if (! (0 >= c)) {
                        this.firstCharHeight = c;
                        break
                    }
                }
            }
            return this.firstCharHeight
        };
        b.parseConfig = function(a) {
            a = a.split("\r\n").join("\n");
            a = a.split("\n");
            for (var b = this.getConfigByKey(a[3], "count"), c = {},
            d = 4; d < 4 + b; d++) {
                var e = a[d],
                f = String.fromCharCode(this.getConfigByKey(e, "id")),
                h = {};
                c[f] = h;
                h.x = this.getConfigByKey(e, "x");
                h.y = this.getConfigByKey(e, "y");
                h.w = this.getConfigByKey(e, "width");
                h.h = this.getConfigByKey(e, "height");
                h.offX = this.getConfigByKey(e, "xoffset");
                h.offY = this.getConfigByKey(e, "yoffset")
            }
            return c
        };
        b.getConfigByKey = function(a, b) {
            for (var c = a.split(" "), d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (b == f.substring(0, b.length)) return c = f.substring(b.length + 1),
                parseInt(c)
            }
            return 0
        };
        return d
    } (c.SpriteSheet);
    c.BitmapFont = f;
    f.prototype.__class__ = "egret.BitmapFont"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            e.call(this);
            this._isAddedToStage = !1;
            this._frames = this._movieClipData = this._textureToRender = null;
            this._totalFrames = 0;
            this._frameLabels = null;
            this._frameIntervalTime = 0;
            this._eventPool = null;
            this._isPlaying = !1;
            this._isStopped = !0;
            this._passedTime = this._displayedKeyFrameNum = this._nextFrameNum = this._currentFrameNum = this._playTimes = 0;
            this._setMovieClipData(a);
            this.needDraw = !0
        }
        __extends(d, e);
        var b = d.prototype;
        b._init = function() {
            this._reset();
            var a = this._movieClipData;
            a && a._isDataValid() && (this._frames = a.frames, this._totalFrames = a.numFrames, this._frameLabels = a.labels, this._frameIntervalTime = 1E3 / a.frameRate, this._initFrame())
        };
        b._reset = function() {
            this._frames = null;
            this._playTimes = 0;
            this._isPlaying = !1;
            this.setIsStopped(!0);
            this._currentFrameNum = 0;
            this._nextFrameNum = 1;
            this._passedTime = this._displayedKeyFrameNum = 0;
            this._eventPool = []
        };
        b._initFrame = function() {
            this._movieClipData._isTextureValid() && (this._advanceFrame(), this._constructFrame())
        };
        b._render = function(a) {
            var b = this._textureToRender;
            if (this._texture_to_render = b) {
                var c = Math.round(b._offsetX),
                e = Math.round(b._offsetY),
                f = b._bitmapWidth || b._textureWidth,
                k = b._bitmapHeight || b._textureHeight,
                h = Math.round(f),
                l = Math.round(k);
                d.renderFilter.drawImage(a, this, b._bitmapX, b._bitmapY, f, k, c, e, h, l)
            }
        };
        b._measureBounds = function() {
            var a = this._textureToRender;
            return a ? c.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : e.prototype._measureBounds.call(this)
        };
        b._onAddToStage = function() {
            e.prototype._onAddToStage.call(this);
            this._isAddedToStage = !0;
            this._isPlaying && 1 < this._totalFrames && this.setIsStopped(!1)
        };
        b._onRemoveFromStage = function() {
            e.prototype._onRemoveFromStage.call(this);
            this._isAddedToStage = !1;
            this.setIsStopped(!0)
        };
        b._getFrameLabelByName = function(a, b) {
            void 0 === b && (b = !1);
            b && (a = a.toLowerCase());
            var c = this._frameLabels;
            if (c) for (var d = null,
            e = 0; e < c.length; e++) if (d = c[e], b ? d.name.toLowerCase() === a: d.name === a) return d;
            return null
        };
        b._getFrameLabelByFrame = function(a) {
            var b = this._frameLabels;
            if (b) for (var c = null,
            d = 0; d < b.length; d++) if (c = b[d], c.frame === a) return c;
            return null
        };
        b._getFrameLabelForFrame = function(a) {
            var b = null,
            c = null,
            d = this._frameLabels;
            if (d) for (var e = 0; e < d.length; e++) {
                c = d[e];
                if (c.frame > a) break;
                b = c
            }
            return b
        };
        b.play = function(a) {
            void 0 === a && (a = 0);
            this._isPlaying = !0;
            this.setPlayTimes(a);
            1 < this._totalFrames && this._isAddedToStage && this.setIsStopped(!1)
        };
        b.stop = function() {
            this._isPlaying = !1;
            this.setIsStopped(!0)
        };
        b.prevFrame = function() {
            this.gotoAndStop(this._currentFrameNum - 1)
        };
        b.nextFrame = function() {
            this.gotoAndStop(this._currentFrameNum + 1)
        };
        b.gotoAndPlay = function(a, b) {
            void 0 === b && (b = 0); (0 === arguments.length || 2 < arguments.length) && c.$error(1022, "MovieClip.gotoAndPlay()");
            this.play(b);
            this._gotoFrame(a)
        };
        b.gotoAndStop = function(a) {
            1 != arguments.length && c.$error(1022, "MovieClip.gotoAndStop()");
            this.stop();
            this._gotoFrame(a)
        };
        b._gotoFrame = function(a) {
            var b;
            "string" === typeof a ? b = this._getFrameLabelByName(a).frame: (b = parseInt(a + "", 10), b != a && c.$error(1022, "Frame Label Not Found"));
            1 > b ? b = 1 : b > this._totalFrames && (b = this._totalFrames);
            b !== this._nextFrameNum && (this._nextFrameNum = b, this._advanceFrame(), this._constructFrame(), this._handlePendingEvent())
        };
        b._advanceTime = function(a) {
            var b = this._frameIntervalTime;
            a = this._passedTime + a;
            this._passedTime = a % b;
            b = a / b;
            if (! (1 > b)) {
                for (; 1 <= b;) {
                    b--;
                    this._nextFrameNum++;
                    if (this._nextFrameNum > this._totalFrames) if ( - 1 == this._playTimes) this._eventPool.push(c.Event.LOOP_COMPLETE),
                    this._nextFrameNum = 1;
                    else if (this._playTimes--, 0 < this._playTimes) this._eventPool.push(c.Event.LOOP_COMPLETE),
                    this._nextFrameNum = 1;
                    else {
                        this._nextFrameNum = this._totalFrames;
                        this._eventPool.push(c.Event.COMPLETE);
                        this.stop();
                        break
                    }
                    this._advanceFrame()
                }
                this._constructFrame();
                this._handlePendingEvent();
                this._setDirty()
            }
        };
        b._advanceFrame = function() {
            this._currentFrameNum = this._nextFrameNum
        };
        b._constructFrame = function() {
            var a = this._currentFrameNum;
            this._displayedKeyFrameNum != a && (this._textureToRender = this._movieClipData.getTextureByFrame(a), this._DO_Props_._sizeDirty = !0, this._displayedKeyFrameNum = a)
        };
        b._handlePendingEvent = function() {
            if (0 != this._eventPool.length) {
                this._eventPool.reverse();
                for (var a = this._eventPool,
                b = a.length,
                d = !1,
                e = !1,
                f = 0; f < b; f++) {
                    var k = a.pop();
                    k == c.Event.LOOP_COMPLETE ? e = !0 : k == c.Event.COMPLETE ? d = !0 : this.dispatchEventWith(k)
                }
                e && this.dispatchEventWith(c.Event.LOOP_COMPLETE);
                d && this.dispatchEventWith(c.Event.COMPLETE)
            }
        };
        Object.defineProperty(b, "totalFrames", {
            get: function() {
                return this._totalFrames
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "currentFrame", {
            get: function() {
                return this._currentFrameNum
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "currentFrameLabel", {
            get: function() {
                var a = this._getFrameLabelByFrame(this._currentFrameNum);
                return a && a.name
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "currentLabel", {
            get: function() {
                var a = this._getFrameLabelForFrame(this._currentFrameNum);
                return a ? a.name: null
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "frameRate", {
            get: function() {
                return this.movieClipData.frameRate
            },
            set: function(a) {
                a != this._movieClipData.frameRate && (this._movieClipData.frameRate = a, this._frameIntervalTime = 1E3 / this._movieClipData.frameRate)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "isPlaying", {
            get: function() {
                return this._isPlaying
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "movieClipData", {
            get: function() {
                return this._movieClipData
            },
            set: function(a) {
                this._setMovieClipData(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setMovieClipData = function(a) {
            this._movieClipData != a && (this._movieClipData = a, this._init())
        };
        b.setPlayTimes = function(a) {
            if (0 > a || 1 <= a) this._playTimes = 0 > a ? -1 : Math.floor(a)
        };
        b.setIsStopped = function(a) {
            this._isStopped != a && ((this._isStopped = a) ? (this._playTimes = 0, c.Ticker.getInstance().unregister(this._advanceTime, this)) : (this._playTimes = 0 == this._playTimes ? 1 : this._playTimes, c.Ticker.getInstance().register(this._advanceTime, this)))
        };
        d.renderFilter = c.RenderFilter.getInstance();
        return d
    } (c.DisplayObject);
    c.MovieClip = f;
    f.prototype.__class__ = "egret.MovieClip"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(a, b) {
            c.call(this);
            this._name = a;
            this._frame = b | 0
        }
        __extends(d, c);
        var b = d.prototype;
        Object.defineProperty(b, "name", {
            get: function() {
                return this._name
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "frame", {
            get: function() {
                return this._frame
            },
            enumerable: !0,
            configurable: !0
        });
        b.clone = function() {
            return new d(this._name, this._frame)
        };
        return d
    } (c.EventDispatcher);
    c.FrameLabel = f;
    f.prototype.__class__ = "egret.FrameLabel"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._mcData = null;
            this.numFrames = 1;
            this.frames = [];
            this.labels = null;
            this.frameRate = 0;
            this.spriteSheet = this.textureData = null
        }
        __extends(d, e);
        var b = d.prototype;
        b._init = function(a, b, c) {
            this.textureData = b;
            this.spriteSheet = c;
            this._setMCData(a)
        };
        b.getKeyFrameData = function(a) {
            a = this.frames[a - 1];
            a.frame && (a = this.frames[a.frame - 1]);
            return a
        };
        b.getTextureByFrame = function(a) {
            a = this.getKeyFrameData(a);
            if (a.res) {
                var b = this.getTextureByResName(a.res);
                b._offsetX = a.x | 0;
                b._offsetY = a.y | 0;
                return b
            }
            return null
        };
        b.getTextureByResName = function(a) {
            var b = this.spriteSheet.getTexture(a);
            b || (b = this.textureData[a], b = this.spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return b
        };
        b._isDataValid = function() {
            return 0 < this.frames.length
        };
        b._isTextureValid = function() {
            return null != this.textureData && null != this.spriteSheet
        };
        b._fillMCData = function(a) {
            this.frameRate = a.frameRate || 24;
            this._fillFramesData(a.frames);
            this._fillFrameLabelsData(a.labels)
        };
        b._fillFramesData = function(a) {
            for (var b = this.frames,
            c = a ? a.length: 0, d, e = 0; e < c; e++) if (d = a[e], b.push(d), d.duration) {
                var f = parseInt(d.duration);
                if (1 < f) {
                    d = b.length;
                    for (var h = 1; h < f; h++) b.push({
                        frame: d
                    })
                }
            }
            this.numFrames = b.length
        };
        b._fillFrameLabelsData = function(a) {
            if (a) {
                var b = a.length;
                if (0 < b) {
                    this.labels = [];
                    for (var d = 0; d < b; d++) {
                        var e = a[d];
                        this.labels.push(new c.FrameLabel(e.name, e.frame))
                    }
                }
            }
        };
        Object.defineProperty(b, "mcData", {
            get: function() {
                return this._mcData
            },
            set: function(a) {
                this._setMCData(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setMCData = function(a) {
            this._mcData != a && (this._mcData = a) && this._fillMCData(a)
        };
        return d
    } (c.HashObject);
    c.MovieClipData = f;
    f.prototype.__class__ = "egret.MovieClipData"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, b) {
            e.call(this);
            this.enableCache = !0;
            this._mcDataCache = {};
            this._mcDataSet = a;
            this.setTexture(b)
        }
        __extends(d, e);
        var b = d.prototype;
        b.clearCache = function() {
            this._mcDataCache = {}
        };
        b.generateMovieClipData = function(a) {
            void 0 === a && (a = "");
            if ("" == a && this._mcDataSet) for (a in this._mcDataSet.mc) break;
            if ("" == a) return null;
            var b = this._findFromCache(a, this._mcDataCache);
            b || (b = new c.MovieClipData, this._fillData(a, b, this._mcDataCache));
            return b
        };
        b._findFromCache = function(a, b) {
            return this.enableCache && b[a] ? b[a] : null
        };
        b._fillData = function(a, b, c) {
            if (this._mcDataSet) {
                var d = this._mcDataSet.mc[a];
                d && (b._init(d, this._mcDataSet.res, this._spriteSheet), this.enableCache && (c[a] = b))
            }
        };
        Object.defineProperty(b, "mcDataSet", {
            get: function() {
                return this._mcDataSet
            },
            set: function(a) {
                this._mcDataSet = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "texture", {
            set: function(a) {
                this.setTexture(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "spriteSheet", {
            get: function() {
                return this._spriteSheet
            },
            enumerable: !0,
            configurable: !0
        });
        b.setTexture = function(a) {
            this._spriteSheet = a ? new c.SpriteSheet(a) : null
        };
        return d
    } (c.EventDispatcher);
    c.MovieClipDataFactory = f;
    f.prototype.__class__ = "egret.MovieClipDataFactory"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this._scaleY = this._scaleX = 1;
            this._size = 30;
            this._color = "#FFFFFF";
            this._fontFamily = "Arial";
            this._italic = this._bold = !1;
            this._textAlign = "left";
            this._verticalAlign = "top";
            this._visible = !1;
            this._height = this._width = 0;
            this._multiline = !1;
            this._maxChars = 0
        }
        __extends(d, c);
        var b = d.prototype;
        b._setTextField = function(a) {
            this._textfield = a
        };
        b._getText = function() {
            return null
        };
        b._setText = function(a) {};
        b._setTextType = function(a) {};
        b._getTextType = function() {
            return null
        };
        b._show = function(a, b, c, d) {};
        b._add = function() {};
        b._remove = function() {};
        b._hide = function() {};
        b._addListeners = function() {};
        b._removeListeners = function() {};
        b._setScale = function(a, b) {
            this._scaleX = a;
            this._scaleY = b
        };
        b.changePosition = function(a, b) {};
        b._setSize = function(a) {
            this._size = a
        };
        b._setTextColor = function(a) {
            this._color = a
        };
        b._setTextFontFamily = function(a) {
            this._fontFamily = a
        };
        b._setBold = function(a) {
            this._bold = a
        };
        b._setItalic = function(a) {
            this._italic = a
        };
        b._setTextAlign = function(a) {
            this._textAlign = a
        };
        b._setVerticalAlign = function(a) {
            this._verticalAlign = a
        };
        b._setVisible = function(a) {
            this._visible = a
        };
        b._setWidth = function(a) {
            this._width = a
        };
        b._setHeight = function(a) {
            this._height = a
        };
        b._setMultiline = function(a) {
            this._multiline = a
        };
        b._setMaxChars = function(a) {
            this._maxChars = a
        };
        b._resetStageText = function() {};
        b._initElement = function(a, b, c, d) {};
        b._removeInput = function() {};
        d.create = function() {
            return null
        };
        return d
    } (c.EventDispatcher);
    c.StageText = f;
    f.prototype.__class__ = "egret.StageText"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.GET = "get";
        c.POST = "post";
        return c
    } ();
    c.URLRequestMethod = f;
    f.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.BINARY = "binary";
        c.TEXT = "text";
        c.VARIABLES = "variables";
        c.TEXTURE = "texture";
        c.SOUND = "sound";
        return c
    } ();
    c.URLLoaderDataFormat = f;
    f.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(a) {
            void 0 === a && (a = null);
            c.call(this);
            this.variables = null;
            null !== a && this.decode(a)
        }
        __extends(d, c);
        var b = d.prototype;
        b.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, c = /[?&]?([^=]+)=([^&]*)/g; b = c.exec(a);) {
                var d = decodeURIComponent(b[1]);
                b = decodeURIComponent(b[2]);
                if (!1 == d in this.variables) this.variables[d] = b;
                else {
                    var e = this.variables[d];
                    e instanceof Array ? e.push(b) : this.variables[d] = [e, b]
                }
            }
        };
        b.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
            b = [],
            c;
            for (c in a) b.push(this.encodeValue(c, a[c]));
            return b.join("&")
        };
        b.encodeValue = function(a, b) {
            return b instanceof Array ? this.encodeArray(a, b) : encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        b.encodeArray = function(a, b) {
            return a ? 0 == b.length ? encodeURIComponent(a) + "=": b.map(function(b) {
                return encodeURIComponent(a) + "=" + encodeURIComponent(b)
            }).join("&") : ""
        };
        return d
    } (c.HashObject);
    c.URLVariables = f;
    f.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        return function(c, d) {
            this.value = this.name = "";
            this.name = c;
            this.value = d
        }
    } ();
    c.URLRequestHeader = f;
    f.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(b) {
            void 0 === b && (b = null);
            e.call(this);
            this.data = null;
            this.method = c.URLRequestMethod.GET;
            this.url = "";
            this.url = b
        }
        __extends(d, e);
        return d
    } (c.HashObject);
    c.URLRequest = f;
    f.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            void 0 === a && (a = null);
            e.call(this);
            this.dataFormat = c.URLLoaderDataFormat.TEXT;
            this._request = this.data = null;
            this._status = -1;
            a && this.load(a)
        }
        __extends(d, e);
        var b = d.prototype;
        b.load = function(a) {
            this._request = a;
            this.data = null;
            c.MainContext.instance.netContext.proceed(this)
        };
        b.__recycle = function() {
            this.data = this._request = null
        };
        return d
    } (c.EventDispatcher);
    c.URLLoader = f;
    f.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._sourceHeight = this._sourceWidth = this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0;
            this._bitmapData = null
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "textureWidth", {
            get: function() {
                return this._textureWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "textureHeight", {
            get: function() {
                return this._textureHeight
            },
            enumerable: !0,
            configurable: !0
        });
        b._setBitmapData = function(a) {
            var b = c.MainContext.instance.rendererContext._texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * b;
            this._textureHeight = this._sourceHeight * b;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
        };
        b.getPixel32 = function(a, b) {
            return this._bitmapData.getContext("2d").getImageData(a, b, 1, 1).data
        };
        b.dispose = function() {
            var a = this._bitmapData;
            a.dispose && a.dispose()
        };
        b._clone = function() {
            var a = new d;
            a._bitmapData = this._bitmapData;
            return a
        };
        b.draw = function(a, b, c, d, e, f, h, l, m, n) {};
        b._drawForCanvas = function(a, b, c, d, e, f, h, l, m, n) {
            var p = this._bitmapData;
            p && p.avaliable && (void 0 != n ? this._drawRepeatImageForCanvas(a, b, c, d, e, f, h, l, m, n) : a.drawImage(p, b, c, d, e, f, h, l, m))
        };
        b._drawForNative = function(a, b, c, d, e, f, h, l, m, n) {
            var p = this._bitmapData;
            p && p.avaliable && (void 0 !== n ? this._drawRepeatImageForNative(a, b, c, d, e, f, h, l, m, n) : a.drawImage(p, b, c, d, e, f, h, l, m))
        };
        b._drawRepeatImageForNative = function(a, b, d, e, f, k, h, l, m, n) {
            n = c.MainContext.instance.rendererContext._texture_scale_factor;
            e *= n;
            for (f *= n; k < l; k += e) for (var p = h; p < m; p += f) {
                var r = Math.min(e, l - k),
                q = Math.min(f, m - p);
                this._drawForNative(a, b, d, r / n, q / n, k, p, r, q, void 0)
            }
        };
        b._drawRepeatImageForCanvas = function(a, b, d, e, f, k, h, l, m, n) {
            if (void 0 === this.pattern) {
                var p = c.MainContext.instance.rendererContext._texture_scale_factor,
                r = this._bitmapData,
                q = r;
                if (r.width != e || r.height != f || 1 != p) q = document.createElement("canvas"),
                q.width = e * p,
                q.height = f * p,
                q.getContext("2d").drawImage(r, b, d, e, f, 0, 0, e * p, f * p);
                this.pattern = a.createPattern(q, n)
            }
            a.fillStyle = this.pattern;
            a.translate(k, h);
            a.fillRect(0, 0, l, m);
            a.translate( - k, -h)
        };
        b._disposeForCanvas = function() {
            d.deleteWebGLTexture(this);
            var a = this._bitmapData;
            a.onload = null;
            a.onerror = null;
            a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAATSURBVHjaYvj//z8DAAAA//8DAAj8Av7TpXVhAAAAAElFTkSuQmCC";
            a.avaliable = !1;
            console.log("_disposeForCanvas")
        };
        b._disposeForNative = function() {
            var a = this._bitmapData;
            a.dispose();
            a.avaliable = !1;
            console.log("_disposeForNative")
        };
        d.deleteWebGLTexture = function(a) {
            if (a = a._bitmapData) {
                var b = a.webGLTexture;
                if (b) for (var c in b) {
                    var d = b[c];
                    d.glContext.deleteTexture(d)
                }
                a.webGLTexture = null
            }
        };
        d.createBitmapData = function(a, b) {};
        d._createBitmapDataForCanvasAndWebGl = function(a, b) {
            var e = d._bitmapDataFactory[a];
            e || (e = document.createElement("img"), e.setAttribute("bitmapSrc", a), d._bitmapDataFactory[a] = e);
            if (e.avaliable) b(0, e);
            else {
                e.crossOrigin = d.crossOrigin;
                var f = window.URL || window.webkitURL;
                if (null == d._bitmapCallbackMap[a]) if (d._addToCallbackList(a, b), 0 != a.indexOf("data:") && 0 != a.indexOf("http:") && 0 != a.indexOf("https:") && c.Browser.getInstance().isIOS() && 7 <= parseInt(c.Browser.getInstance().getIOSVersion().charAt(0)) && f) {
                    var t = new XMLHttpRequest;
                    t.open("get", a, !0);
                    t.responseType = "blob";
                    t.onload = function() {
                        if (200 == this.status) {
                            var c = this.response;
                            e.onload = function() {
                                f.revokeObjectURL(e.src);
                                d._onLoad(a, e)
                            };
                            e.onerror = function() {
                                d._onError(a, e)
                            };
                            e.src = f.createObjectURL(c)
                        } else b(1, null)
                    };
                    t.send()
                } else e.onload = function() {
                    d._onLoad(a, e)
                },
                e.onerror = function() {
                    d._onError(a, e)
                },
                e.src = a;
                else d._addToCallbackList(a, b)
            }
        };
        d._onLoad = function(a, b) {
            b.avaliable = !0;
            b.onload && (b.onload = null);
            b.onerror && (b.onerror = null);
            var c = d._bitmapCallbackMap[a];
            if (c && c.length) {
                delete d._bitmapCallbackMap[a];
                for (var e = c.length,
                f = 0; f < e; f++)(0, c[f])(0, b)
            }
        };
        d._onError = function(a, b) {
            var c = d._bitmapCallbackMap[a];
            if (c && c.length) {
                delete d._bitmapCallbackMap[a];
                for (var e = c.length,
                f = 0; f < e; f++)(0, c[f])(1, b)
            }
        };
        d._createBitmapDataForNative = function(a, b) {
            console.log("_createBitmapDataForNative:" + a);
            var e = d._bitmapDataFactory[a];
            e ? (e.avaliable || (console.log("reload"), e.reload(), e.avaliable = !0), b(0, e)) : c.NativeNetContext.__use_asyn ? d._bitmapCallbackMap[a] ? d._addToCallbackList(a, b) : (d._addToCallbackList(a, b), e = new c.PromiseObject, e.onSuccessFunc = function(b) {
                d._bitmapDataFactory[a] = b;
                d._onLoad(a, b)
            },
            e.onErrorFunc = function() {
                d._onError(a, null)
            },
            console.log("addTextureAsyn"), egret_native.Texture.addTextureAsyn(a, e)) : (console.log("addTexture"), e = egret_native.Texture.addTexture(a), d._bitmapDataFactory[a] = e, e.avaliable = !0, b(0, e))
        };
        d._addToCallbackList = function(a, b) {
            var c = d._bitmapCallbackMap[a];
            c || (c = []);
            c.push(b);
            d._bitmapCallbackMap[a] = c
        };
        d.crossOrigin = null;
        d._bitmapDataFactory = {};
        d._bitmapCallbackMap = {};
        return d
    } (c.HashObject);
    c.Texture = f;
    f.prototype.__class__ = "egret.Texture"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this)
        }
        __extends(d, e);
        var b = d.prototype;
        b.init = function() {
            this._bitmapData = document.createElement("canvas");
            this._bitmapData.avaliable = !0;
            this.renderContext = c.RendererContext.createRendererContext(this._bitmapData)
        };
        b.drawToTexture = function(a, b, e) {
            var f = b || a.getBounds(c.Rectangle.identity);
            if (0 == f.width || 0 == f.height) return ! 1;
            this._bitmapData || this.init();
            var t = f.x,
            k = f.y,
            h = f.width,
            f = f.height,
            l, m, n = c.MainContext.instance.rendererContext._texture_scale_factor;
            l = h / n;
            m = f / n;
            l = Math.round(l);
            m = Math.round(m);
            this.setSize(l, m);
            this.begin();
            a._worldTransform.identity();
            a._worldTransform.a = 1 / n;
            a._worldTransform.d = 1 / n;
            e && (a._worldTransform.a *= e, a._worldTransform.d *= e);
            e = a._DO_Props_._anchorOffsetX;
            n = a._DO_Props_._anchorOffsetY;
            if (0 != a._DO_Props_._anchorX || 0 != a._DO_Props_._anchorY) e = a._DO_Props_._anchorX * l,
            n = a._DO_Props_._anchorY * m;
            this._offsetX = t + e;
            this._offsetY = k + n;
            a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
            b && (this._offsetX -= t, this._offsetY -= k);
            a.worldAlpha = 1;
            if (a instanceof c.DisplayObjectContainer) for (b = a._children, t = 0, k = b.length; t < k; t++) b[t]._updateTransform();
            this.renderContext.setTransform(a._worldTransform);
            b = c.RenderFilter.getInstance();
            t = b._drawAreaList.concat();
            b._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.renderContext.onRenderStart();
            c.Texture.deleteWebGLTexture(this);
            a._hasFilters() && a._setGlobalFilters(this.renderContext); (k = a.mask || a._DO_Props_._scrollRect) && this.renderContext.pushMask(k);
            e = c.MainContext.__use_new_draw;
            c.MainContext.__use_new_draw = !1;
            a._render(this.renderContext);
            c.MainContext.__use_new_draw = e;
            k && this.renderContext.popMask();
            a._hasFilters() && a._removeGlobalFilters(this.renderContext);
            d.identityRectangle.width = l;
            d.identityRectangle.height = m;
            b.addDrawArea(d.identityRectangle);
            this.renderContext.onRenderFinish();
            b._drawAreaList = t;
            this._sourceWidth = l;
            this._sourceHeight = m;
            this._textureWidth = Math.round(h);
            this._textureHeight = Math.round(f);
            this.end();
            return ! 0
        };
        b.setSize = function(a, b) {
            var c = this._bitmapData;
            c.width = a;
            c.height = b;
            c.style.width = a + "px";
            c.style.height = b + "px";
            this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a, this.renderContext._cacheCanvas.height = b)
        };
        b.begin = function() {};
        b.end = function() {};
        b.dispose = function() {
            this._bitmapData && (this.renderContext = this._bitmapData = null)
        };
        d.create = function() {
            return d._pool.length ? d._pool.pop() : new d
        };
        d.release = function(a) {
            d._pool.push(a)
        };
        d.identityRectangle = new c.Rectangle;
        d._pool = [];
        return d
    } (c.Texture);
    c.RenderTexture = f;
    f.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.renderCost = 0;
            this._texture_scale_factor = 1;
            this.profiler = c.Profiler.getInstance();
            d.blendModesForGL || d.initBlendMode()
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "texture_scale_factor", {
            get: function() {
                return this._texture_scale_factor
            },
            set: function(a) {
                this._setTextureScaleFactor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b._setTextureScaleFactor = function(a) {
            this._texture_scale_factor = a
        };
        b.clearScreen = function() {};
        b.clearRect = function(a, b, c, d) {};
        b.drawImage = function(a, b, c, d, e, f, h, l, m, n) {
            this.profiler.onDrawImage()
        };
        b.drawImageScale9 = function(a, b, c, d, e, f, h, l, m, n) {
            return ! 1
        };
        b._addOneDraw = function() {
            this.profiler.onDrawImage()
        };
        b.setTransform = function(a) {};
        b.setAlpha = function(a, b) {};
        b.setupFont = function(a, b) {};
        b.measureText = function(a) {
            return 0
        };
        b.drawText = function(a, b, c, d, e, f) {
            this.profiler.onDrawImage()
        };
        b.strokeRect = function(a, b, c, d, e) {};
        b.pushMask = function(a) {};
        b.popMask = function() {};
        b.onRenderStart = function() {};
        b.onRenderFinish = function() {};
        b.createLinearGradient = function(a, b, c, d) {
            return null
        };
        b.createRadialGradient = function(a, b, c, d, e, f) {
            return null
        };
        b.setGlobalFilters = function(a) {};
        b.drawCursor = function(a, b, c, d) {};
        d.createRendererContext = function(a) {
            return null
        };
        d.initBlendMode = function() {
            d.blendModesForGL = {};
            d.blendModesForGL[c.BlendMode.NORMAL] = [1, 771];
            d.blendModesForGL[c.BlendMode.ADD] = [770, 1];
            d.blendModesForGL[c.BlendMode.ERASE] = [0, 771];
            d.blendModesForGL[c.BlendMode.ERASE_REVERSE] = [0, 770]
        };
        d.registerBlendModeForGL = function(a, b, e, f) {
            d.blendModesForGL[a] && !f ? c.$warn(1005, a) : d.blendModesForGL[a] = [b, e]
        };
        d.imageSmoothingEnabled = !0;
        d.blendModesForGL = null;
        return d
    } (c.HashObject);
    c.RendererContext = f;
    f.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.MOUSE = "mouse";
        c.TOUCH = "touch";
        c.mode = "touch";
        return c
    } ();
    c.InteractionMode = f;
    f.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._currentTouchTarget = {};
            this.maxTouches = 2;
            this.touchDownTarget = {};
            this.touchingIdentifiers = [];
            this.lastTouchY = this.lastTouchX = -1
        }
        __extends(d, e);
        var b = d.prototype;
        b.run = function() {};
        b.getTouchData = function(a, b, c) {
            var d = this._currentTouchTarget[a];
            null == d && (d = {},
            this._currentTouchTarget[a] = d);
            d.stageX = b;
            d.stageY = c;
            d.identifier = a;
            return d
        };
        b.dispatchEvent = function(a, b) {
            c.TouchEvent.dispatchTouchEvent(b.target, a, b.identifier, b.stageX, b.stageY, !1, !1, !1, !0 == this.touchDownTarget[b.identifier])
        };
        b.onTouchBegan = function(a, b, d) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                this.lastTouchX = a;
                this.lastTouchY = b;
                var e = c.MainContext.instance.stage.hitTest(a, b);
                e && (a = this.getTouchData(d, a, b), this.touchDownTarget[d] = !0, a.target = e, a.beginTarget = e, this.dispatchEvent(c.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(d)
            }
        };
        b.onTouchMove = function(a, b, d) {
            if ( - 1 != this.touchingIdentifiers.indexOf(d) && (a != this.lastTouchX || b != this.lastTouchY)) {
                this.lastTouchX = a;
                this.lastTouchY = b;
                var e = c.MainContext.instance.stage.hitTest(a, b);
                e && (a = this.getTouchData(d, a, b), a.target = e, this.dispatchEvent(c.TouchEvent.TOUCH_MOVE, a))
            }
        };
        b.onTouchEnd = function(a, b, d) {
            var e = this.touchingIdentifiers.indexOf(d); - 1 != e && (this.touchingIdentifiers.splice(e, 1), e = c.MainContext.instance.stage.hitTest(a, b)) && (a = this.getTouchData(d, a, b), delete this.touchDownTarget[d], d = a.beginTarget, a.target = e, this.dispatchEvent(c.TouchEvent.TOUCH_END, a), d == e ? this.dispatchEvent(c.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(c.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
        };
        return d
    } (c.HashObject);
    c.TouchContext = f;
    f.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this)
        }
        __extends(d, e);
        var b = d.prototype;
        b.proceed = function(a) {};
        d._getUrl = function(a) {
            var b = a.url; - 1 == b.indexOf("?") && a.method == c.URLRequestMethod.GET && a.data && a.data instanceof c.URLVariables && (b = b + "?" + a.data.toString());
            return b
        };
        b.getChangeList = function() {
            return []
        };
        return d
    } (c.HashObject);
    c.NetContext = f;
    f.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this)
        }
        __extends(d, c);
        var b = d.prototype;
        b.executeMainLoop = function(a, b) {};
        b.setFrameRate = function(a) {};
        return d
    } (c.HashObject);
    c.DeviceContext = f;
    f.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.call = function(c, b) {};
        c.addCallback = function(c, b) {};
        return c
    } ();
    c.ExternalInterface = f;
    f.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.header = this.trans = null;
            this.ua = navigator.userAgent.toLowerCase();
            this.trans = this.getTrans("transform")
        }
        __extends(d, e);
        var b = d.prototype;
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        Object.defineProperty(b, "isMobile", {
            get: function() {
                c.$warn(1E3);
                return c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE
            },
            enumerable: !0,
            configurable: !0
        });
        b.isIOS = function() {
            return 0 > this.ua.indexOf("windows") && (0 <= this.ua.indexOf("iphone") || 0 <= this.ua.indexOf("ipad") || 0 <= this.ua.indexOf("ipod"))
        };
        b.getIOSVersion = function() {
            return this.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0].match(/\d(_\d)*/)[0]
        };
        b.getUserAgent = function() {
            return this.ua
        };
        b.getTrans = function(a, b) {
            void 0 === b && (b = !1);
            var c = "";
            b ? c = this.getHeader(a) : (null == this.header && (this.header = this.getHeader("transform")), c = this.header);
            return "" == c ? a: c + a.charAt(0).toUpperCase() + a.substring(1, a.length)
        };
        b.getHeader = function(a) {
            var b = document.createElement("div").style;
            if (a in b) return "";
            a = a.charAt(0).toUpperCase() + a.substring(1, a.length);
            for (var c = ["webkit", "ms", "Moz", "O"], d = 0; d < c.length; d++) if (c[d] + a in b) return c[d];
            return ""
        };
        b.$new = function(a) {
            return this.$(document.createElement(a))
        };
        b.$ = function(a) {
            var b = document;
            if (a = a instanceof HTMLElement ? a: b.querySelector(a)) a.find = a.find || this.$,
            a.hasClass = a.hasClass ||
            function(a) {
                return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
            },
            a.addClass = a.addClass ||
            function(a) {
                this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
                return this
            },
            a.removeClass = a.removeClass ||
            function(a) {
                this.hasClass(a) && (this.className = this.className.replace(a, ""));
                return this
            },
            a.remove = a.remove ||
            function() {},
            a.appendTo = a.appendTo ||
            function(a) {
                a.appendChild(this);
                return this
            },
            a.prependTo = a.prependTo ||
            function(a) {
                a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                return this
            },
            a.transforms = a.transforms ||
            function() {
                this.style[d.getInstance().trans] = d.getInstance().translate(this.position) + d.getInstance().rotate(this.rotation) + d.getInstance().scale(this.scale) + d.getInstance().skew(this.skew);
                return this
            },
            a.position = a.position || {
                x: 0,
                y: 0
            },
            a.rotation = a.rotation || 0,
            a.scale = a.scale || {
                x: 1,
                y: 1
            },
            a.skew = a.skew || {
                x: 0,
                y: 0
            },
            a.translates = function(a, b) {
                this.position.x = a;
                this.position.y = b - c.MainContext.instance.stage.stageHeight;
                this.transforms();
                return this
            },
            a.rotate = function(a) {
                this.rotation = a;
                this.transforms();
                return this
            },
            a.resize = function(a, b) {
                this.scale.x = a;
                this.scale.y = b;
                this.transforms();
                return this
            },
            a.setSkew = function(a, b) {
                this.skew.x = a;
                this.skew.y = b;
                this.transforms();
                return this
            };
            return a
        };
        b.translate = function(a) {
            return "translate(" + a.x + "px, " + a.y + "px) "
        };
        b.rotate = function(a) {
            return "rotate(" + a + "deg) "
        };
        b.scale = function(a) {
            return "scale(" + a.x + ", " + a.y + ") "
        };
        b.skew = function(a) {
            return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
        };
        return d
    } (c.HashObject);
    c.Browser = f;
    f.prototype.__class__ = "egret.Browser"
})(egret || (egret = {})); (function(c) { (function(c) {
        c.getItem = function(c) {
            return null
        };
        c.setItem = function(c, d) {
            return ! 1
        };
        c.removeItem = function(c) {};
        c.clear = function() {}
    })(c.localStorage || (c.localStorage = {}))
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {}
        e.parse = function(d) {
            d = c.SAXParser.getInstance().parserXML(d);
            if (!d || !d.childNodes) return null;
            for (var b = d.childNodes.length,
            a = !1,
            g = 0; g < b; g++) {
                var f = d.childNodes[g];
                if (1 == f.nodeType) {
                    a = !0;
                    break
                }
            }
            return a ? e.parseNode(f) : null
        };
        e.parseNode = function(c) {
            if (!c || 1 != c.nodeType) return null;
            var b = {};
            b.localName = c.localName;
            b.name = c.nodeName;
            c.namespaceURI && (b.namespace = c.namespaceURI);
            c.prefix && (b.prefix = c.prefix);
            for (var a = c.attributes,
            g = a.length,
            f = 0; f < g; f++) {
                var s = a[f],
                t = s.name;
                0 != t.indexOf("xmlns:") && (b["$" + t] = s.value)
            }
            a = c.childNodes;
            g = a.length;
            for (f = 0; f < g; f++) if (s = e.parseNode(a[f])) b.children || (b.children = []),
            s.parent = b,
            b.children.push(s); ! b.children && (c = c.textContent.trim()) && (b.text = c);
            return b
        };
        e.findChildren = function(c, b, a) {
            a ? a.length = 0 : a = [];
            e.findByPath(c, b, a);
            return a
        };
        e.findByPath = function(c, b, a) {
            var g = b.indexOf("."),
            f; - 1 == g ? (f = b, g = !0) : (f = b.substring(0, g), b = b.substring(g + 1), g = !1);
            if (c = c.children) for (var s = c.length,
            t = 0; t < s; t++) {
                var k = c[t];
                k.localName == f && (g ? a.push(k) : e.findByPath(k, b, a))
            }
        };
        e.getAttributes = function(c, b) {
            b ? b.length = 0 : b = [];
            for (var a in c)"$" == a.charAt(0) && b.push(a.substring(1));
            return b
        };
        return e
    } ();
    c.XML = f;
    f.prototype.__class__ = "egret.XML"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.LITTLE_ENDIAN = "littleEndian";
        c.BIG_ENDIAN = "bigEndian";
        return c
    } ();
    c.Endian = f;
    f.prototype.__class__ = "egret.Endian";
    var e = function() {
        function d(a) {
            this.BUFFER_EXT_SIZE = 0;
            this.EOF_code_point = this.EOF_byte = -1;
            this._setArrayBuffer(a || new ArrayBuffer(this.BUFFER_EXT_SIZE));
            this.endian = f.BIG_ENDIAN
        }
        var b = d.prototype;
        b._setArrayBuffer = function(a) {
            this.write_position = a.byteLength;
            this.data = new DataView(a);
            this._position = 0
        };
        Object.defineProperty(b, "buffer", {
            get: function() {
                return this.data.buffer
            },
            set: function(a) {
                this.data = new DataView(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "dataView", {
            get: function() {
                return this.data
            },
            set: function(a) {
                this.data = a;
                this.write_position = a.byteLength
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "bufferOffset", {
            get: function() {
                return this.data.byteOffset
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "position", {
            get: function() {
                return this._position
            },
            set: function(a) {
                this._position < a && !this.validate(a - this._position) || (this._position = a, this.write_position = a > this.write_position ? a: this.write_position)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "length", {
            get: function() {
                return this.write_position
            },
            set: function(a) {
                this.validateBuffer(a, !0)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "bytesAvailable", {
            get: function() {
                return this.data.byteLength - this._position
            },
            enumerable: !0,
            configurable: !0
        });
        b.clear = function() {
            this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
        };
        b.readBoolean = function() {
            return this.validate(d.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
        };
        b.readByte = function() {
            return this.validate(d.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
        };
        b.readBytes = function(a, b, c) {
            void 0 === b && (b = 0);
            void 0 === c && (c = 0);
            if (0 == c) c = this.bytesAvailable;
            else if (!this.validate(c)) return null;
            a ? a.validateBuffer(c) : a = new d(new ArrayBuffer(c));
            for (var e = 0; e < c; e++) a.data.setUint8(e + b, this.data.getUint8(this.position++))
        };
        b.readDouble = function() {
            if (!this.validate(d.SIZE_OF_FLOAT64)) return null;
            var a = this.data.getFloat64(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_FLOAT64;
            return a
        };
        b.readFloat = function() {
            if (!this.validate(d.SIZE_OF_FLOAT32)) return null;
            var a = this.data.getFloat32(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_FLOAT32;
            return a
        };
        b.readInt = function() {
            if (!this.validate(d.SIZE_OF_INT32)) return null;
            var a = this.data.getInt32(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_INT32;
            return a
        };
        b.readShort = function() {
            if (!this.validate(d.SIZE_OF_INT16)) return null;
            var a = this.data.getInt16(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_INT16;
            return a
        };
        b.readUnsignedByte = function() {
            return this.validate(d.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
        };
        b.readUnsignedInt = function() {
            if (!this.validate(d.SIZE_OF_UINT32)) return null;
            var a = this.data.getUint32(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_UINT32;
            return a
        };
        b.readUnsignedShort = function() {
            if (!this.validate(d.SIZE_OF_UINT16)) return null;
            var a = this.data.getUint16(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_UINT16;
            return a
        };
        b.readUTF = function() {
            if (!this.validate(d.SIZE_OF_UINT16)) return null;
            var a = this.data.getUint16(this.position, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_UINT16;
            return 0 < a ? this.readUTFBytes(a) : ""
        };
        b.readUTFBytes = function(a) {
            if (!this.validate(a)) return null;
            var b = new Uint8Array(this.buffer, this.bufferOffset + this.position, a);
            this.position += a;
            return this.decodeUTF8(b)
        };
        b.writeBoolean = function(a) {
            this.validateBuffer(d.SIZE_OF_BOOLEAN);
            this.data.setUint8(this.position++, a ? 1 : 0)
        };
        b.writeByte = function(a) {
            this.validateBuffer(d.SIZE_OF_INT8);
            this.data.setInt8(this.position++, a)
        };
        b.writeBytes = function(a, b, c) {
            void 0 === b && (b = 0);
            void 0 === c && (c = 0);
            if (! (0 > b || 0 > c) && (c = 0 == c ? a.length - b: Math.min(a.length - b, c), 0 < c)) {
                this.validateBuffer(c);
                a = new DataView(a.buffer);
                for (var d = b; d < c + b; d++) this.data.setUint8(this.position++, a.getUint8(d))
            }
        };
        b.writeDouble = function(a) {
            this.validateBuffer(d.SIZE_OF_FLOAT64);
            this.data.setFloat64(this.position, a, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_FLOAT64
        };
        b.writeFloat = function(a) {
            this.validateBuffer(d.SIZE_OF_FLOAT32);
            this.data.setFloat32(this.position, a, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_FLOAT32
        };
        b.writeInt = function(a) {
            this.validateBuffer(d.SIZE_OF_INT32);
            this.data.setInt32(this.position, a, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_INT32
        };
        b.writeShort = function(a) {
            this.validateBuffer(d.SIZE_OF_INT16);
            this.data.setInt16(this.position, a, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_INT16
        };
        b.writeUnsignedInt = function(a) {
            this.validateBuffer(d.SIZE_OF_UINT32);
            this.data.setUint32(this.position, a, this.endian == f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_UINT32
        };
        b.writeUTF = function(a) {
            a = this.encodeUTF8(a);
            var b = a.length;
            this.validateBuffer(d.SIZE_OF_UINT16 + b);
            this.data.setUint16(this.position, b, this.endian === f.LITTLE_ENDIAN);
            this.position += d.SIZE_OF_UINT16;
            this._writeUint8Array(a, !1)
        };
        b.writeUTFBytes = function(a) {
            this._writeUint8Array(this.encodeUTF8(a))
        };
        b.toString = function() {
            return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
        };
        b._writeUint8Array = function(a, b) {
            void 0 === b && (b = !0);
            b && this.validateBuffer(this.position + a.length);
            for (var c = 0; c < a.length; c++) this.data.setUint8(this.position++, a[c])
        };
        b.validate = function(a) {
            if (0 < this.data.byteLength && this._position + a <= this.data.byteLength) return ! 0;
            c.$error(1025)
        };
        b.validateBuffer = function(a, b) {
            void 0 === b && (b = !1);
            this.write_position = a > this.write_position ? a: this.write_position;
            a += this._position;
            if (this.data.byteLength < a || b) {
                var c = new Uint8Array(new ArrayBuffer(a + this.BUFFER_EXT_SIZE)),
                d = Math.min(this.data.buffer.byteLength, a + this.BUFFER_EXT_SIZE);
                c.set(new Uint8Array(this.data.buffer, 0, d));
                this.buffer = c.buffer
            }
        };
        b.encodeUTF8 = function(a) {
            var b = 0;
            a = this.stringToCodePoints(a);
            for (var c = []; a.length > b;) {
                var d = a[b++];
                if (this.inRange(d, 55296, 57343)) this.encoderError(d);
                else if (this.inRange(d, 0, 127)) c.push(d);
                else {
                    var e, f;
                    this.inRange(d, 128, 2047) ? (e = 1, f = 192) : this.inRange(d, 2048, 65535) ? (e = 2, f = 224) : this.inRange(d, 65536, 1114111) && (e = 3, f = 240);
                    for (c.push(this.div(d, Math.pow(64, e)) + f); 0 < e;) {
                        var h = this.div(d, Math.pow(64, e - 1));
                        c.push(128 + h % 64);
                        e -= 1
                    }
                }
            }
            return new Uint8Array(c)
        };
        b.decodeUTF8 = function(a) {
            for (var b = 0,
            c = "",
            d, e = 0,
            f = 0,
            h = 0,
            l = 0; a.length > b;) {
                d = a[b++];
                if (d === this.EOF_byte) d = 0 !== f ? this.decoderError(!1) : this.EOF_code_point;
                else if (0 === f) this.inRange(d, 0, 127) || (this.inRange(d, 194, 223) ? (f = 1, l = 128, e = d - 192) : this.inRange(d, 224, 239) ? (f = 2, l = 2048, e = d - 224) : this.inRange(d, 240, 244) ? (f = 3, l = 65536, e = d - 240) : this.decoderError(!1), e *= Math.pow(64, f), d = null);
                else if (this.inRange(d, 128, 191)) if (h += 1, e += (d - 128) * Math.pow(64, f - h), h !== f) d = null;
                else {
                    var m = e,
                    n = l,
                    l = h = f = e = 0;
                    d = this.inRange(m, n, 1114111) && !this.inRange(m, 55296, 57343) ? m: this.decoderError(!1, d)
                } else l = h = f = e = 0,
                b--,
                d = this.decoderError(!1, d);
                null !== d && d !== this.EOF_code_point && (65535 >= d ? 0 < d && (c += String.fromCharCode(d)) : (d -= 65536, c += String.fromCharCode(55296 + (d >> 10 & 1023)), c += String.fromCharCode(56320 + (d & 1023))))
            }
            return c
        };
        b.encoderError = function(a) {
            c.$error(1026, a)
        };
        b.decoderError = function(a, b) {
            a && c.$error(1027);
            return b || 65533
        };
        b.inRange = function(a, b, c) {
            return b <= a && a <= c
        };
        b.div = function(a, b) {
            return Math.floor(a / b)
        };
        b.stringToCodePoints = function(a) {
            for (var b = [], c = 0, d = a.length; c < a.length;) {
                var e = a.charCodeAt(c);
                if (this.inRange(e, 55296, 57343)) if (this.inRange(e, 56320, 57343)) b.push(65533);
                else if (c === d - 1) b.push(65533);
                else {
                    var f = a.charCodeAt(c + 1);
                    this.inRange(f, 56320, 57343) ? (e &= 1023, f &= 1023, c += 1, b.push(65536 + (e << 10) + f)) : b.push(65533)
                } else b.push(e);
                c += 1
            }
            return b
        };
        d.SIZE_OF_BOOLEAN = 1;
        d.SIZE_OF_INT8 = 1;
        d.SIZE_OF_INT16 = 2;
        d.SIZE_OF_INT32 = 4;
        d.SIZE_OF_UINT8 = 1;
        d.SIZE_OF_UINT16 = 2;
        d.SIZE_OF_UINT32 = 4;
        d.SIZE_OF_FLOAT32 = 4;
        d.SIZE_OF_FLOAT64 = 8;
        return d
    } ();
    c.ByteArray = e;
    e.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {})); (function(c) {
    c.getOption = function(c) {
        if (window.hasOwnProperty("location")) {
            var e = location.search;
            if ("" == e) return "";
            for (var e = e.slice(1), e = e.split("&"), d = e.length, b = 0; b < d; b++) {
                var a = e[b].split("=");
                if (a[0] == c) return a[1]
            }
        }
        return ""
    }
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a, b, c) {
            e.call(this);
            this._target = null;
            this.loop = this.ignoreGlobalPause = this._useTicks = !1;
            this._actions = this._steps = this.pluginData = null;
            this.paused = !1;
            this.duration = 0;
            this._prevPos = -1;
            this.position = null;
            this._stepPosition = this._prevPosition = 0;
            this.passive = !1;
            this.initialize(a, b, c)
        }
        __extends(d, e);
        var b = d.prototype;
        d.get = function(a, b, c, e) {
            void 0 === b && (b = null);
            void 0 === c && (c = null);
            void 0 === e && (e = !1);
            e && d.removeTweens(a);
            return new d(a, b, c)
        };
        d.removeTweens = function(a) {
            if (a.tween_count) {
                for (var b = d._tweens,
                c = b.length - 1; 0 <= c; c--) b[c]._target == a && (b[c].paused = !0, b.splice(c, 1));
                a.tween_count = 0
            }
        };
        d.pauseTweens = function(a) {
            if (a.tween_count) for (var b = c.Tween._tweens,
            d = b.length - 1; 0 <= d; d--) b[d]._target == a && (b[d].paused = !0)
        };
        d.resumeTweens = function(a) {
            if (a.tween_count) for (var b = c.Tween._tweens,
            d = b.length - 1; 0 <= d; d--) b[d]._target == a && (b[d].paused = !1)
        };
        d.tick = function(a, b) {
            void 0 === b && (b = !1);
            for (var c = d._tweens.concat(), e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                b && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 1 : a)
            }
        };
        d._register = function(a, b) {
            var e = a._target,
            f = d._tweens;
            if (b) e && (e.tween_count = 0 < e.tween_count ? e.tween_count + 1 : 1),
            f.push(a),
            d._inited || (c.Ticker.getInstance().register(d.tick, null), d._inited = !0);
            else for (e && e.tween_count--, e = f.length; e--;) if (f[e] == a) {
                f.splice(e, 1);
                break
            }
        };
        d.removeAllTweens = function() {
            for (var a = d._tweens,
            b = 0,
            c = a.length; b < c; b++) {
                var e = a[b];
                e.paused = !0;
                e._target.tweenjs_count = 0
            }
            a.length = 0
        };
        b.initialize = function(a, b, c) {
            this._target = a;
            b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && d.removeTweens(a));
            this.pluginData = c || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            this._actions = [];
            b && b.paused ? this.paused = !0 : d._register(this, !0);
            b && null != b.position && this.setPosition(b.position, d.NONE)
        };
        b.setPosition = function(a, b) {
            void 0 === b && (b = 1);
            0 > a && (a = 0);
            var c = a,
            d = !1;
            c >= this.duration && (this.loop ? c %= this.duration: (c = this.duration, d = !0));
            if (c == this._prevPos) return d;
            var e = this._prevPos;
            this.position = this._prevPos = c;
            this._prevPosition = a;
            if (this._target) if (d) this._updateTargetProps(null, 1);
            else if (0 < this._steps.length) {
                for (var f = 0,
                h = this._steps.length; f < h && !(this._steps[f].t > c); f++);
                f = this._steps[f - 1];
                this._updateTargetProps(f, (this._stepPosition = c - f.t) / f.d)
            }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && c < e ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c));
            d && this.setPaused(!0);
            this.dispatchEventWith("change");
            return d
        };
        b._runActions = function(a, b, c) {
            void 0 === c && (c = !1);
            var d = a,
            e = b,
            f = -1,
            h = this._actions.length,
            l = 1;
            a > b && (d = b, e = a, f = h, h = l = -1);
            for (; (f += l) != h;) {
                b = this._actions[f];
                var m = b.t; (m == e || m > d && m < e || c && m == a) && b.f.apply(b.o, b.p)
            }
        };
        b._updateTargetProps = function(a, b) {
            var c, e, f, k;
            if (a || 1 != b) {
                if (this.passive = !!a.v) return;
                a.e && (b = a.e(b, 0, 1, 1));
                c = a.p0;
                e = a.p1
            } else this.passive = !1,
            c = e = this._curQueueProps;
            for (var h in this._initQueueProps) {
                null == (f = c[h]) && (c[h] = f = this._initQueueProps[h]);
                null == (k = e[h]) && (e[h] = k = f);
                f = f == k || 0 == b || 1 == b || "number" != typeof f ? 1 == b ? k: f: f + (k - f) * b;
                var l = !1;
                if (k = d._plugins[h]) for (var m = 0,
                n = k.length; m < n; m++) {
                    var p = k[m].tween(this, h, f, c, e, b, !!a && c == e, !a);
                    p == d.IGNORE ? l = !0 : f = p
                }
                l || (this._target[h] = f)
            }
        };
        b.setPaused = function(a) {
            this.paused = a;
            d._register(this, !a);
            return this
        };
        b._cloneProps = function(a) {
            var b = {},
            c;
            for (c in a) b[c] = a[c];
            return b
        };
        b._addStep = function(a) {
            0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
            return this
        };
        b._appendQueueProps = function(a) {
            var b, c, e, f, k, h;
            for (h in a) if (void 0 === this._initQueueProps[h]) {
                c = this._target[h];
                if (b = d._plugins[h]) for (e = 0, f = b.length; e < f; e++) c = b[e].init(this, h, c);
                this._initQueueProps[h] = this._curQueueProps[h] = void 0 === c ? null: c
            }
            for (h in a) {
                c = this._curQueueProps[h];
                if (b = d._plugins[h]) for (k = k || {},
                e = 0, f = b.length; e < f; e++) b[e].step && b[e].step(this, h, c, a[h], k);
                this._curQueueProps[h] = a[h]
            }
            k && this._appendQueueProps(k);
            return this._curQueueProps
        };
        b._addAction = function(a) {
            a.t = this.duration;
            this._actions.push(a);
            return this
        };
        b._set = function(a, b) {
            for (var c in a) b[c] = a[c]
        };
        b.wait = function(a, b) {
            if (null == a || 0 >= a) return this;
            var c = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: a,
                p0: c,
                p1: c,
                v: b
            })
        };
        b.to = function(a, b, c) {
            void 0 === c && (c = void 0);
            if (isNaN(b) || 0 > b) b = 0;
            return this._addStep({
                d: b || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: c,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        };
        b.call = function(a, b, c) {
            void 0 === b && (b = void 0);
            void 0 === c && (c = void 0);
            return this._addAction({
                f: a,
                p: c ? c: [],
                o: b ? b: this._target
            })
        };
        b.set = function(a, b) {
            void 0 === b && (b = null);
            return this._addAction({
                f: this._set,
                o: this,
                p: [a, b ? b: this._target]
            })
        };
        b.play = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!1])
        };
        b.pause = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!0])
        };
        b.tick = function(a) {
            this.paused || this.setPosition(this._prevPosition + a)
        };
        d.NONE = 0;
        d.LOOP = 1;
        d.REVERSE = 2;
        d._tweens = [];
        d.IGNORE = {};
        d._plugins = {};
        d._inited = !1;
        return d
    } (c.EventDispatcher);
    c.Tween = f;
    f.prototype.__class__ = "egret.Tween"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {
            c.$error(1014)
        }
        e.get = function(c) { - 1 > c && (c = -1);
            1 < c && (c = 1);
            return function(b) {
                return 0 == c ? b: 0 > c ? b * (b * -c + 1 + c) : b * ((2 - b) * c + (1 - c))
            }
        };
        e.getPowIn = function(c) {
            return function(b) {
                return Math.pow(b, c)
            }
        };
        e.getPowOut = function(c) {
            return function(b) {
                return 1 - Math.pow(1 - b, c)
            }
        };
        e.getPowInOut = function(c) {
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, c) : 1 - 0.5 * Math.abs(Math.pow(2 - b, c))
            }
        };
        e.sineIn = function(c) {
            return 1 - Math.cos(c * Math.PI / 2)
        };
        e.sineOut = function(c) {
            return Math.sin(c * Math.PI / 2)
        };
        e.sineInOut = function(c) {
            return - 0.5 * (Math.cos(Math.PI * c) - 1)
        };
        e.getBackIn = function(c) {
            return function(b) {
                return b * b * ((c + 1) * b - c)
            }
        };
        e.getBackOut = function(c) {
            return function(b) {
                return--b * b * ((c + 1) * b + c) + 1
            }
        };
        e.getBackInOut = function(c) {
            c *= 1.525;
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((c + 1) * b - c) : 0.5 * ((b -= 2) * b * ((c + 1) * b + c) + 2)
            }
        };
        e.circIn = function(c) {
            return - (Math.sqrt(1 - c * c) - 1)
        };
        e.circOut = function(c) {
            return Math.sqrt(1 - --c * c)
        };
        e.circInOut = function(c) {
            return 1 > (c *= 2) ? -0.5 * (Math.sqrt(1 - c * c) - 1) : 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1)
        };
        e.bounceIn = function(c) {
            return 1 - e.bounceOut(1 - c)
        };
        e.bounceOut = function(c) {
            return c < 1 / 2.75 ? 7.5625 * c * c: c < 2 / 2.75 ? 7.5625 * (c -= 1.5 / 2.75) * c + 0.75 : c < 2.5 / 2.75 ? 7.5625 * (c -= 2.25 / 2.75) * c + 0.9375 : 7.5625 * (c -= 2.625 / 2.75) * c + 0.984375
        };
        e.bounceInOut = function(c) {
            return 0.5 > c ? 0.5 * e.bounceIn(2 * c) : 0.5 * e.bounceOut(2 * c - 1) + 0.5
        };
        e.getElasticIn = function(c, b) {
            var a = 2 * Math.PI;
            return function(g) {
                if (0 == g || 1 == g) return g;
                var e = b / a * Math.asin(1 / c);
                return - (c * Math.pow(2, 10 * (g -= 1)) * Math.sin((g - e) * a / b))
            }
        };
        e.getElasticOut = function(c, b) {
            var a = 2 * Math.PI;
            return function(g) {
                if (0 == g || 1 == g) return g;
                var e = b / a * Math.asin(1 / c);
                return c * Math.pow(2, -10 * g) * Math.sin((g - e) * a / b) + 1
            }
        };
        e.getElasticInOut = function(c, b) {
            var a = 2 * Math.PI;
            return function(g) {
                var e = b / a * Math.asin(1 / c);
                return 1 > (g *= 2) ? -0.5 * c * Math.pow(2, 10 * (g -= 1)) * Math.sin((g - e) * a / b) : c * Math.pow(2, -10 * (g -= 1)) * Math.sin((g - e) * a / b) * 0.5 + 1
            }
        };
        e.quadIn = e.getPowIn(2);
        e.quadOut = e.getPowOut(2);
        e.quadInOut = e.getPowInOut(2);
        e.cubicIn = e.getPowIn(3);
        e.cubicOut = e.getPowOut(3);
        e.cubicInOut = e.getPowInOut(3);
        e.quartIn = e.getPowIn(4);
        e.quartOut = e.getPowOut(4);
        e.quartInOut = e.getPowInOut(4);
        e.quintIn = e.getPowIn(5);
        e.quintOut = e.getPowOut(5);
        e.quintInOut = e.getPowInOut(5);
        e.backIn = e.getBackIn(1.7);
        e.backOut = e.getBackOut(1.7);
        e.backInOut = e.getBackInOut(1.7);
        e.elasticIn = e.getElasticIn(1, 0.3);
        e.elasticOut = e.getElasticOut(1, 0.3);
        e.elasticInOut = e.getElasticInOut(1, 0.3 * 1.5);
        return e
    } ();
    c.Ease = f;
    f.prototype.__class__ = "egret.Ease"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.path = "";
            this.audio = null;
            this.type = d.EFFECT;
            this._pauseTime = 0;
            this._listeners = []
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "position", {
            get: function() {
                return this.audio ? Math.floor(1E3 * this.audio._getCurrentTime()) : 0
            },
            enumerable: !0,
            configurable: !0
        });
        b.play = function(a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = 0);
            var c = this.audio;
            c && (c._setCurrentTime(b / 1E3), c._setLoop(a), c._play(this.type))
        };
        b.stop = function() {
            var a = this.audio;
            a && (this._pauseTime = 0, a._setCurrentTime(0), a._pause())
        };
        b.pause = function() {
            var a = this.audio;
            a && (this._pauseTime = a._getCurrentTime(), a._pause())
        };
        b.resume = function() {
            var a = this.audio;
            a && (a._setCurrentTime(this._pauseTime), this._pauseTime = 0, a._play(this.type))
        };
        b.load = function() {
            var a = this.audio;
            a && a._load()
        };
        b.addEventListener = function(a, b, d) {
            e.prototype.addEventListener.call(this, a, b, d);
            var f = this;
            this.audio && 1 == this._eventsMap[a].length && (b = a == c.SoundEvent.SOUND_COMPLETE ?
            function(a) {
                c.Event._dispatchByTarget(c.SoundEvent, f, c.SoundEvent.SOUND_COMPLETE)
            }: function(a) {
                c.Event._dispatchByTarget(c.Event, f, a.type)
            },
            this._listeners.push({
                type: a,
                func: b
            }), a = f.getVirtualType(a), this.audio._addEventListener(a, b, !1))
        };
        b.removeEventListener = function(a, b, c) {
            e.prototype.removeEventListener.call(this, a, b, c);
            if (this.audio && (!this._eventsMap || !this._eventsMap[a] || 0 == this._eventsMap[a].length)) for (c = 0; c < this._listeners.length; c++) if (b = this._listeners[c], b.type == a) {
                this._listeners.splice(c, 1);
                a = this.getVirtualType(a);
                this.audio._removeEventListener(a, b.func, !1);
                break
            }
        };
        b.getVirtualType = function(a) {
            switch (a) {
            case c.SoundEvent.SOUND_COMPLETE:
                return "ended";
            default:
                return a
            }
        };
        Object.defineProperty(b, "volume", {
            get: function() {
                return this.audio ? this.audio._getVolume() : 0
            },
            set: function(a) {
                var b = this.audio;
                b && b._setVolume(Math.max(0, Math.min(a, 1)))
            },
            enumerable: !0,
            configurable: !0
        });
        b.setVolume = function(a) {
            c.$warn(1031);
            this.volume = a
        };
        b.getVolume = function() {
            c.$warn(1032);
            return this.volume
        };
        b.preload = function(a, b, c) {
            void 0 === b && (b = null);
            void 0 === c && (c = null);
            this.type = a;
            this.audio._preload(a, b, c)
        };
        b._setAudio = function(a) {
            this.audio = a
        };
        b.destroy = function() {
            this.audio._destroy()
        };
        d.MUSIC = "music";
        d.EFFECT = "effect";
        return d
    } (c.EventDispatcher);
    c.Sound = f;
    f.prototype.__class__ = "egret.Sound"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function c() {}
        c.isNumber = function(c) {
            return "number" === typeof c && !isNaN(c)
        };
        c.sin = function(d) {
            var b = Math.floor(d),
            a = b + 1,
            g = c.sinInt(b),
            f = c.sinInt(a);
            return (d - b) * f + (a - d) * g
        };
        c.sinInt = function(c) {
            c %= 360;
            0 > c && (c += 360);
            return 90 > c ? egret_sin_map[c] : 180 > c ? egret_cos_map[c - 90] : 270 > c ? -egret_sin_map[c - 180] : -egret_cos_map[c - 270]
        };
        c.cos = function(d) {
            var b = Math.floor(d),
            a = b + 1,
            g = c.cosInt(b),
            f = c.cosInt(a);
            return (d - b) * f + (a - d) * g
        };
        c.cosInt = function(c) {
            c %= 360;
            0 > c && (c += 360);
            return 90 > c ? egret_cos_map[c] : 180 > c ? -egret_sin_map[c - 90] : 270 > c ? -egret_cos_map[c - 180] : egret_sin_map[c - 270]
        };
        return c
    } ();
    c.NumberUtils = f;
    f.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
for (var egret_sin_map = {},
egret_cos_map = {},
NumberUtils_i = 0; 90 >= NumberUtils_i; NumberUtils_i++) egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * egret.Matrix.DEG_TO_RAD),
egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(c) {
    "function" !== typeof this && egret.$error(1029);
    var f = Array.prototype.slice.call(arguments, 1),
    e = this,
    d = function() {},
    b = function() {
        return e.apply(this instanceof d && c ? this: c, f.concat(Array.prototype.slice.call(arguments)))
    };
    d.prototype = this.prototype;
    b.prototype = new d;
    return b
}); (function(c) {
    var f = function() {
        function e() {
            this.downloadingSizeThisObject = this.downloadingSizeFunc = this.onErrorThisObject = this.onErrorFunc = this.onSuccessThisObject = this.onSuccessFunc = null
        }
        var d = e.prototype;
        e.create = function() {
            return e.promiseObjectList.length ? e.promiseObjectList.pop() : new c.PromiseObject
        };
        d.onSuccess = function() {
            for (var b = [], a = 0; a < arguments.length; a++) b[a - 0] = arguments[a];
            this.onSuccessFunc && this.onSuccessFunc.apply(this.onSuccessThisObject, b);
            this.destroy()
        };
        d.onError = function() {
            for (var b = [], a = 0; a < arguments.length; a++) b[a - 0] = arguments[a];
            this.onErrorFunc && this.onErrorFunc.apply(this.onErrorThisObject, b);
            this.destroy()
        };
        d.downloadingSize = function() {
            for (var b = [], a = 0; a < arguments.length; a++) b[a - 0] = arguments[a];
            this.downloadingSizeFunc && this.downloadingSizeFunc.apply(this.downloadingSizeThisObject, b)
        };
        d.destroy = function() {
            this.downloadingSizeThisObject = this.downloadingSizeFunc = this.onErrorThisObject = this.onErrorFunc = this.onSuccessThisObject = this.onSuccessFunc = void 0;
            e.promiseObjectList.push(this)
        };
        e.promiseObjectList = [];
        return e
    } ();
    c.PromiseObject = f;
    f.prototype.__class__ = "egret.PromiseObject"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            void 0 === a && (a = 60);
            e.call(this);
            this.frameRate = a;
            this._time = 0;
            this._requestAnimationId = NaN;
            this._isActivate = !0;
            d.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            d.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame;
            d.requestAnimationFrame || (d.requestAnimationFrame = function(b) {
                return window.setTimeout(b, 1E3 / a)
            });
            d.cancelAnimationFrame || (d.cancelAnimationFrame = function(a) {
                return window.clearTimeout(a)
            });
            d.instance = this;
            this.registerListener()
        }
        __extends(d, e);
        var b = d.prototype;
        b.setFrameRate = function(a) {
            0 == 60 % a && (d.countTime = 60 / a - 1)
        };
        b.enterFrame = function() {
            var a = d.instance,
            b = d._thisObject,
            e = d._callback,
            f = c.getTimer(),
            t = f - a._time;
            a._requestAnimationId = d.requestAnimationFrame.call(window, d.prototype.enterFrame);
            d.count < d.countTime ? d.count++:(d.count = 0, e.call(b, t), a._time = f)
        };
        b.executeMainLoop = function(a, b) {
            d._callback = a;
            d._thisObject = b;
            this.enterFrame()
        };
        b.reset = function() {
            var a = d.instance;
            a._requestAnimationId && (a._time = c.getTimer(), d.cancelAnimationFrame.call(window, a._requestAnimationId), a.enterFrame())
        };
        b.registerListener = function() {
            var a = this,
            b = function() {
                a._isActivate && (a._isActivate = !1, c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.DEACTIVATE)))
            },
            e = function() {
                a._isActivate || (a._isActivate = !0, d.instance.reset(), c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.ACTIVATE)))
            },
            f = function() {
                document[t] ? b() : e()
            };
            window.addEventListener("focus", e, !1);
            window.addEventListener("blur", b, !1);
            var t, k;
            "undefined" !== typeof document.hidden ? (t = "hidden", k = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (t = "mozHidden", k = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (t = "msHidden", k = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (t = "webkitHidden", k = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (t = "oHidden", k = "ovisibilitychange");
            "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", b, !1));
            t && k && document.addEventListener(k, f, !1);
            f = navigator.userAgent;
            k = /micromessenger/gi.test(f);
            var h = /mqq/ig.test(f);
            if (/mobile.*qq/gi.test(f) || k) h = !1;
            h && (f = window.browser || {},
            f.execWebFn = f.execWebFn || {},
            f.execWebFn.postX5GamePlayerMessage = function(a) {
                a = a.type;
                "app_enter_background" == a ? b() : "app_enter_foreground" == a && e()
            },
            window.browser = f)
        };
        d.instance = null;
        d.countTime = 0;
        d.requestAnimationFrame = null;
        d.cancelAnimationFrame = null;
        d._thisObject = null;
        d._callback = null;
        d.count = 0;
        return d
    } (c.DeviceContext);
    c.HTML5DeviceContext = f;
    f.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage; (function(c) {
    c.getItem = function(c) {
        return window.localStorage.getItem(c)
    };
    c.setItem = function(c, e) {
        try {
            return window.localStorage.setItem(c, e),
            !0
        } catch(d) {
            return egret.$warn(1018, c, e),
            !1
        }
    };
    c.removeItem = function(c) {
        window.localStorage.removeItem(c)
    };
    c.clear = function() {
        window.localStorage.clear()
    };
    c.init = function() {
        for (var f in c) egret.localStorage[f] = c[f]
    }
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init(); (function(c) {
    var f = function(e) {
        function d(a, b) {
            void 0 === b && (b = !0);
            e.call(this);
            this.useCacheCanvas = b;
            c.Texture.prototype.draw = c.Texture.prototype._drawForCanvas;
            c.Texture.prototype.dispose = c.Texture.prototype._disposeForCanvas;
            this.canvas = a || this.createCanvas();
            this.canvasContext = this.canvas.getContext("2d");
            b ? (this._cacheCanvas = document.createElement("canvas"), this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height, this.drawCanvasContext = this._cacheCanvasContext = this._cacheCanvas.getContext("2d")) : this.drawCanvasContext = this.canvasContext;
            var d = this.drawCanvasContext;
            if (void 0 == d.imageSmoothingEnabled) {
                for (var f = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"], t = 0; t < f.length; t++) {
                    var k = f[t];
                    if (void 0 != d[k]) break
                }
                Object.defineProperty(d, "imageSmoothingEnabled", {
                    get: function() {
                        return this[k]
                    },
                    set: function(a) {
                        this[k] = a
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
            this.onResize();
            var h = this.drawCanvasContext.setTransform,
            l = this;
            this.drawCanvasContext.setTransform = function(a, b, c, d, g, e) {
                l._matrixA = a;
                l._matrixB = b;
                l._matrixC = c;
                l._matrixD = d;
                l._matrixTx = g;
                l._matrixTy = e;
                h.call(l.drawCanvasContext, a, b, c, d, g, e)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            this.initBlendMode()
        }
        __extends(d, e);
        var b = d.prototype;
        b.createCanvas = function() {
            var a = c.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var b = document.getElementById(c.StageDelegate.canvas_div_name),
                a = c.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                b.appendChild(a)
            }
            c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this);
            return a
        };
        b.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(c.StageDelegate.canvas_div_name);
                this.canvas.width = c.MainContext.instance.stage.stageWidth;
                this.canvas.height = c.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this.useCacheCanvas && (this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height);
                this.drawCanvasContext.imageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled
            }
        };
        b.clearScreen = function() {
            for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = a.length; b < d; b++) {
                var e = a[b];
                this.clearRect(e.x, e.y, e.width, e.height)
            }
            a = c.MainContext.instance.stage;
            this.useCacheCanvas && this._cacheCanvasContext.clearRect(0, 0, a.stageWidth, a.stageHeight);
            this.renderCost = 0
        };
        b.clearRect = function(a, b, c, d) {
            this.canvasContext.clearRect(a, b, c, d)
        };
        b.drawImage = function(a, b, d, f, t, k, h, l, m, n) {
            void 0 === n && (n = void 0);
            k += this._transformTx;
            h += this._transformTy;
            var p = c.getTimer();
            a.draw(this.drawCanvasContext, b, d, f, t, k, h, l, m, n);
            e.prototype.drawImage.call(this, a, b, d, f, t, k, h, l, m, n);
            this.renderCost += c.getTimer() - p
        };
        b.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.drawCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        b.setAlpha = function(a, b) {
            this.drawCanvasContext.globalAlpha = a;
            b ? (this.blendValue = this.blendModes[b], this.drawCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != c.BlendMode.NORMAL && (this.blendValue = this.blendModes[c.BlendMode.NORMAL], this.drawCanvasContext.globalCompositeOperation = this.blendValue)
        };
        b.initBlendMode = function() {
            this.blendModes = {};
            this.blendModes[c.BlendMode.NORMAL] = "source-over";
            this.blendModes[c.BlendMode.ADD] = "lighter";
            this.blendModes[c.BlendMode.ERASE] = "destination-out";
            this.blendModes[c.BlendMode.ERASE_REVERSE] = "destination-in"
        };
        b.setupFont = function(a, b) {
            void 0 === b && (b = null);
            b = b || {};
            var c = a._TF_Props_,
            d = null == b.size ? c._size: b.size,
            e = null == b.fontFamily ? c._fontFamily: b.fontFamily,
            f = this.drawCanvasContext,
            h = (null == b.italic ? c._italic: b.italic) ? "italic ": "normal ",
            h = h + ((null == b.bold ? c._bold: b.bold) ? "bold ": "normal ");
            f.font = h + (d + "px " + e);
            f.textAlign = "left";
            f.textBaseline = "middle"
        };
        b.measureText = function(a) {
            return this.drawCanvasContext.measureText(a).width
        };
        b.drawText = function(a, b, d, f, t, k) {
            void 0 === k && (k = null);
            this.setupFont(a, k);
            k = k || {};
            var h = a._TF_Props_,
            l;
            l = null != k.textColor ? c.toColorString(k.textColor) : h._textColorString;
            var m;
            m = null != k.strokeColor ? c.toColorString(k.strokeColor) : h._strokeColorString;
            var h = null != k.stroke ? k.stroke: h._stroke,
            n = this.drawCanvasContext;
            n.fillStyle = l;
            n.strokeStyle = m;
            h && (n.lineWidth = 2 * h, n.strokeText(b, d + this._transformTx, f + this._transformTy, t || 65535));
            n.fillText(b, d + this._transformTx, f + this._transformTy, t || 65535);
            e.prototype.drawText.call(this, a, b, d, f, t, k)
        };
        b.strokeRect = function(a, b, c, d, e) {
            this.drawCanvasContext.strokeStyle = e;
            this.drawCanvasContext.strokeRect(a, b, c, d)
        };
        b.pushMask = function(a) {
            this.drawCanvasContext.save();
            this.drawCanvasContext.beginPath();
            this.drawCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this.drawCanvasContext.clip();
            this.drawCanvasContext.closePath()
        };
        b.popMask = function() {
            this.drawCanvasContext.restore();
            this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        b.onRenderStart = function() {
            this.drawCanvasContext.save()
        };
        b.onRenderFinish = function() {
            this.drawCanvasContext.restore();
            this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
            if (this.useCacheCanvas) for (var a = this._cacheCanvas.width,
            b = this._cacheCanvas.height,
            d = c.RenderFilter.getInstance().getDrawAreaList(), e = 0, f = d.length; e < f; e++) {
                var k = d[e],
                h = k.x,
                l = k.y,
                m = k.width,
                k = k.height;
                h + m > a && (m = a - h);
                l + k > b && (k = b - l);
                0 < m && 0 < k && this.canvasContext.drawImage(this._cacheCanvas, h, l, m, k, h, l, m, k)
            }
        };
        b.drawCursor = function(a, b, c, d) {
            this.drawCanvasContext.strokeStyle = "#40a5ff";
            this.drawCanvasContext.lineWidth = 2;
            this.drawCanvasContext.beginPath();
            this.drawCanvasContext.moveTo(Math.round(a + this._transformTx), Math.round(b + this._transformTy));
            this.drawCanvasContext.lineTo(Math.round(c + this._transformTx), Math.round(d + this._transformTy));
            this.drawCanvasContext.closePath();
            this.drawCanvasContext.stroke()
        };
        b.createLinearGradient = function(a, b, c, d) {
            return this.drawCanvasContext.createLinearGradient(a, b, c, d)
        };
        b.createRadialGradient = function(a, b, c, d, e, f) {
            return this.drawCanvasContext.createRadialGradient(a, b, c, d, e, f)
        };
        return d
    } (c.RendererContext);
    c.HTML5CanvasRenderer = f;
    f.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
egret.RendererContext.createRendererContext = function(c) {
    return new egret.HTML5CanvasRenderer(c, !1)
};
egret.Graphics.prototype._beginDraw = function(c) {
    this._renderContext = c.drawCanvasContext;
    var f = c._transformTx;
    c = c._transformTy;
    0 == f && 0 == c || this._renderContext.translate(f, c)
};
egret.Graphics.prototype._endDraw = function(c) {
    this._renderContext = c.drawCanvasContext;
    var f = c._transformTx;
    c = c._transformTy;
    0 == f && 0 == c || this._renderContext.translate( - f, -c)
};
var originCanvas2DFill = CanvasRenderingContext2D.prototype.fill;
CanvasRenderingContext2D.prototype.fill = function() {
    var c = this.fillStyle;
    "string" != typeof c ? (c = c.matrix) ? (this.transform(c.a, c.b, c.c, c.d, c.tx, c.ty), originCanvas2DFill.call(this), c = egret.MainContext.instance.rendererContext, c._transformTx = c._transformTy = 0, this.setTransform(c._matrixA, c._matrixB, c._matrixC, c._matrixD, c._matrixTx, c._matrixTy)) : originCanvas2DFill.call(this) : originCanvas2DFill.call(this)
}; (function(c) {
    var f = function(e) {
        function d(a) {
            e.call(this);
            this.glID = this.gl = this.canvas = null;
            this.size = 2E3;
            this.vertices = null;
            this.vertSize = 5;
            this.indices = null;
            this.projectionY = this.projectionX = NaN;
            this.shaderManager = null;
            this.contextLost = !1;
            this.glContextId = 0;
            this.currentBlendMode = "";
            this.currentBaseTexture = null;
            this.currentBatchSize = 0;
            this.worldTransform = null;
            this.worldAlpha = 1;
            this.maskList = [];
            this.maskDataFreeList = [];
            this.graphicsIndexBuffer = this.graphicsBuffer = this.graphicsIndices = this.graphicsPoints = this.filterType = this.colorTransformMatrix = null;
            this.graphicsStyle = {};
            c.Texture.prototype.dispose = c.Texture.prototype._disposeForCanvas;
            this.canvas = a || this.createCanvas();
            this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
            this.html5Canvas = document.createElement("canvas");
            this.canvasContext = new c.HTML5CanvasRenderer(this.html5Canvas);
            this.onResize();
            this.projectionX = this.canvas.width / 2;
            this.projectionY = -this.canvas.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var b = 0,
            d = 0; b < a; b += 6, d += 4) this.indices[b + 0] = d + 0,
            this.indices[b + 1] = d + 1,
            this.indices[b + 2] = d + 2,
            this.indices[b + 3] = d + 0,
            this.indices[b + 4] = d + 2,
            this.indices[b + 5] = d + 3;
            this.initWebGL();
            this.shaderManager = new c.WebGLShaderManager(this.gl);
            this.worldTransform = new c.Matrix;
            this.initAll()
        }
        __extends(d, e);
        var b = d.prototype;
        b.onRenderFinish = function() {
            this._drawWebGL()
        };
        d.initWebGLCanvas = function() {
            c.RenderTexture.WebGLCanvas || (c.RenderTexture.WebGLCanvas = document.createElement("canvas"), c.RenderTexture.WebGLCanvas.avaliable = !0, c.RenderTexture.WebGLRenderer = new c.WebGLRenderer(c.RenderTexture.WebGLCanvas), c.RenderTexture.WebGLRenderer.setAlpha(1))
        };
        b.initAll = function() {
            d.isInit || (d.isInit = !0, egret_webgl_graphics.init(), c.TextField.prototype._makeBitmapCache = function() {
                this.renderTexture || (this.renderTexture = new c.RenderTexture);
                var a = this.getBounds(c.Rectangle.identity);
                if (0 == a.width || 0 == a.height) return this._texture_to_render = null,
                !1;
                this._bitmapData || (this._bitmapData = document.createElement("canvas"), this._bitmapData.avaliable = !0, this.renderContext = c.RendererContext.createRendererContext(this._bitmapData));
                var b = this._bitmapData,
                d = a.width,
                a = a.height,
                e, f, k = c.MainContext.instance.rendererContext._texture_scale_factor;
                e = d / k;
                f = a / k;
                e = Math.round(e);
                f = Math.round(f);
                b.width = e;
                b.height = f;
                b.style.width = e + "px";
                b.style.height = f + "px";
                this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = e, this.renderContext._cacheCanvas.height = f);
                this._worldTransform.identity();
                this._worldTransform.a = 1 / k;
                this._worldTransform.d = 1 / k;
                this.renderContext.setTransform(this._worldTransform);
                this.worldAlpha = 1;
                b = c.RenderFilter.getInstance();
                k = b._drawAreaList.concat();
                b._drawAreaList.length = 0;
                this.renderContext.clearScreen();
                this.renderContext.onRenderStart();
                c.Texture.deleteWebGLTexture(this.renderTexture);
                this.renderTexture.dispose();
                this._hasFilters() && this._setGlobalFilters(this.renderContext);
                var h = this.mask || this._DO_Props_._scrollRect;
                h && this.renderContext.pushMask(h);
                this._render(this.renderContext);
                h && this.renderContext.popMask();
                this._hasFilters() && this._removeGlobalFilters(this.renderContext);
                c.RenderTexture.identityRectangle.width = e;
                c.RenderTexture.identityRectangle.height = f;
                b.addDrawArea(c.RenderTexture.identityRectangle);
                this.renderContext.onRenderFinish();
                b._drawAreaList = k;
                this.renderTexture._bitmapData = this._bitmapData;
                this.renderTexture._sourceWidth = e;
                this.renderTexture._sourceHeight = f;
                this.renderTexture._textureWidth = d;
                this.renderTexture._textureHeight = a;
                this._texture_to_render = this.renderTexture;
                return ! 0
            },
            c.TextField.prototype._draw = function(a) {
                this._TF_Props_._type == c.TextFieldType.INPUT && this._isTyping || (this.getDirty() && (this._texture_to_render = this.renderTexture, this._DO_Props_._cacheAsBitmap = !0), c.DisplayObject.prototype._draw.call(this, a))
            },
            c.RenderTexture.prototype.init = function() {
                this._bitmapData = document.createElement("canvas");
                this._bitmapData.avaliable = !0;
                this.canvasContext = this._bitmapData.getContext("2d");
                d.initWebGLCanvas();
                this._webglBitmapData = c.RenderTexture.WebGLCanvas;
                this.renderContext = c.RenderTexture.WebGLRenderer
            },
            c.RenderTexture.prototype.setSize = function(a, b) {
                this._webglBitmapData && this.renderContext.setSize(a, b);
                if (this._bitmapData) {
                    var c = this._bitmapData;
                    c.width = a;
                    c.height = b;
                    c.style.width = a + "px";
                    c.style.height = b + "px"
                }
            },
            c.RenderTexture.prototype.end = function() {},
            c.RenderTexture.prototype.drawToTexture = function(a, b, d) {
                var e = b || a.getBounds(c.Rectangle.identity);
                if (0 == e.width || 0 == e.height) return ! 1;
                "undefined" == typeof d && (d = 1);
                this._bitmapData || this.init();
                var f = e.x,
                k = e.y,
                h = e.width,
                e = e.height,
                e = e / d,
                l = c.MainContext.instance.rendererContext._texture_scale_factor,
                h = Math.round(h / d),
                e = Math.round(e);
                this.setSize(h, e);
                var m = this._bitmapData,
                n = h / l * d,
                p = e / l * d;
                m.width = n;
                m.height = p;
                m.style.width = n + "px";
                m.style.height = p + "px";
                this.begin();
                a._worldTransform.identity();
                m = a._DO_Props_._anchorOffsetX;
                n = a._DO_Props_._anchorOffsetY;
                if (0 != a._DO_Props_._anchorX || 0 != a._DO_Props_._anchorY) m = a._DO_Props_._anchorX * h,
                n = a._DO_Props_._anchorY * e;
                this._offsetX = f + m;
                this._offsetY = k + n;
                a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
                b && (this._offsetX -= f, this._offsetY -= k);
                a.worldAlpha = 1;
                b = c.MainContext.__use_new_draw;
                c.MainContext.__use_new_draw = !1;
                if (a instanceof c.DisplayObjectContainer) for (f = a._children, k = 0, m = f.length; k < m; k++) f[k]._updateTransform();
                this.renderContext.setTransform(a._worldTransform);
                f = c.RenderFilter.getInstance();
                k = f._drawAreaList.concat();
                f._drawAreaList.length = 0;
                m = this.renderContext.gl;
                m.viewport(0, 0, h, e);
                m.bindFramebuffer(m.FRAMEBUFFER, null);
                m.clearColor(0, 0, 0, 0);
                m.clear(m.COLOR_BUFFER_BIT);
                this.renderContext.onRenderStart();
                c.Texture.deleteWebGLTexture(this);
                a._hasFilters() && a._setGlobalFilters(this.renderContext); (m = a.mask || a._DO_Props_._scrollRect) && this.renderContext.pushMask(m);
                a._render(this.renderContext);
                this.renderContext._drawWebGL();
                c.MainContext.__use_new_draw = b;
                m && this.renderContext.popMask();
                a._hasFilters() && a._removeGlobalFilters(this.renderContext);
                c.RenderTexture.identityRectangle.width = h;
                c.RenderTexture.identityRectangle.height = e;
                f.addDrawArea(c.RenderTexture.identityRectangle);
                this.renderContext.onRenderFinish();
                f._drawAreaList = k;
                this._sourceWidth = h / l * d;
                this._sourceHeight = e / l * d;
                this._textureWidth = h * d;
                this._textureHeight = e * d;
                this.canvasContext.drawImage(this._webglBitmapData, 0, 0, h, e, 0, 0, this._sourceWidth, this._sourceHeight);
                return ! 0
            })
        };
        b.createCanvas = function() {
            var a = c.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var b = document.getElementById(c.StageDelegate.canvas_div_name),
                a = c.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                b.appendChild(a)
            }
            c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this);
            return a
        };
        b.onResize = function() {
            this.setSize(c.MainContext.instance.stage.stageWidth, c.MainContext.instance.stage.stageHeight)
        };
        b.setSize = function(a, b) {
            var d = document.getElementById(c.StageDelegate.canvas_div_name);
            this.canvas && (this.canvas.width = a, this.canvas.height = b, this.canvas.style.width = d.style.width, this.canvas.style.height = d.style.height, this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2);
            this.html5Canvas && (this.html5Canvas.width = a, this.html5Canvas.height = b, this.html5Canvas.style.width = d.style.width, this.html5Canvas.style.height = d.style.height);
            this.width = a;
            this.height = b
        };
        b.handleContextLost = function() {
            this.contextLost = !0
        };
        b.handleContextRestored = function() {
            this.initWebGL();
            this.shaderManager.setContext(this.gl);
            this.contextLost = !1
        };
        b.initWebGL = function() {
            for (var a = {},
            b, e = ["experimental-webgl", "webgl"], f = 0; f < e.length; f++) {
                try {
                    b = this.canvas.getContext(e[f], a)
                } catch(t) {}
                if (b) break
            }
            b || c.$error(1021);
            d.glID++;
            this.glID = d.glID;
            this.setContext(b)
        };
        b.setContext = function(a) {
            this.gl = a;
            a.id = this.glContextId++;
            this.vertexBuffer = a.createBuffer();
            this.indexBuffer = a.createBuffer();
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
            a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
            a.disable(a.DEPTH_TEST);
            a.disable(a.CULL_FACE);
            a.enable(a.BLEND);
            a.colorMask(!0, !0, !0, !0)
        };
        b.start = function() {
            if (!this.contextLost) {
                var a = this.gl;
                a.activeTexture(a.TEXTURE0);
                a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var b;
                b = "colorTransform" == this.filterType ? this.shaderManager.colorTransformShader: "blur" == this.filterType ? this.shaderManager.blurShader: this.shaderManager.defaultShader;
                this.shaderManager.activateShader(b);
                b.syncUniforms();
                a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                var c = 4 * this.vertSize;
                a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
                a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
            }
        };
        b.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var b = c.RenderFilter.getInstance().getDrawAreaList(), d = 0, e = b.length; d < e; d++) {
                var f = b[d];
                a.viewport(f.x, f.y, f.width, f.height);
                a.bindFramebuffer(a.FRAMEBUFFER, null);
                a.clearColor(0, 0, 0, 0);
                a.clear(a.COLOR_BUFFER_BIT)
            }
            a.viewport(0, 0, this.width, this.height);
            this.renderCost = 0
        };
        b.setBlendMode = function(a) {
            a || (a = c.BlendMode.NORMAL);
            if (this.currentBlendMode != a) {
                var b = c.RendererContext.blendModesForGL[a];
                b && (this._drawWebGL(), this.gl.blendFunc(b[0], b[1]), this.currentBlendMode = a)
            }
        };
        b.drawRepeatImage = function(a, b, d, e, f, k, h, l, m, n) {
            n = c.MainContext.instance.rendererContext._texture_scale_factor;
            e *= n;
            for (f *= n; k < l; k += e) for (var p = h; p < m; p += f) {
                var r = Math.min(e, l - k),
                q = Math.min(f, m - p);
                this.drawImage(a, b, d, r / n, q / n, k, p, r, q)
            }
        };
        b.drawImage = function(a, b, c, d, e, f, h, l, m, n) {
            void 0 === n && (n = void 0);
            if (!this.contextLost) {
                var p = a._bitmapData;
                if (p && p.avaliable) if (void 0 !== n) this.drawRepeatImage(a, b, c, d, e, f, h, l, m, n);
                else {
                    if (this.filters) for (n = 0; 1 > n; n++) if ("glow" == this.filters[0].type) {
                        this.useGlow(a, b, c, d, e, f, h, l, m);
                        return
                    }
                    this._drawImage(a, b, c, d, e, f, h, l, m)
                }
            }
        };
        b._drawImage = function(a, b, c, d, e, f, h, l, m) {
            this.createWebGLTexture(a);
            var n = a._bitmapData.webGLTexture[this.glID];
            if (n !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._drawWebGL(),
            this.currentBaseTexture = n;
            var p = this.worldTransform,
            r = p.a,
            q = p.b,
            x = p.c,
            z = p.d,
            w = p.tx,
            y = p.ty;
            0 == f && 0 == h || p.append(1, 0, 0, 1, f, h);
            1 == d / l && 1 == e / m || p.append(l / d, 0, 0, m / e, 0, 0);
            f = p.a;
            h = p.b;
            l = p.c;
            m = p.d;
            var n = p.tx,
            v = p.ty;
            p.a = r;
            p.b = q;
            p.c = x;
            p.d = z;
            p.tx = w;
            p.ty = y;
            r = a._sourceWidth;
            q = a._sourceHeight;
            a = d;
            p = e;
            b /= r;
            c /= q;
            d /= r;
            e /= q;
            r = this.vertices;
            q = 4 * this.currentBatchSize * this.vertSize;
            x = this.worldAlpha;
            r[q++] = n;
            r[q++] = v;
            r[q++] = b;
            r[q++] = c;
            r[q++] = x;
            r[q++] = f * a + n;
            r[q++] = h * a + v;
            r[q++] = d + b;
            r[q++] = c;
            r[q++] = x;
            r[q++] = f * a + l * p + n;
            r[q++] = m * p + h * a + v;
            r[q++] = d + b;
            r[q++] = e + c;
            r[q++] = x;
            r[q++] = l * p + n;
            r[q++] = m * p + v;
            r[q++] = b;
            r[q++] = e + c;
            r[q++] = x;
            this.currentBatchSize++
        };
        b.useGlow = function(a, b, e, f, t, k, h, l, m) {
            var n = this.filters[0],
            p = n.distance || 0,
            r = n.angle || 0,
            q = 0,
            x = 0;
            0 != p && 0 != r && (q = Math.ceil(p * c.NumberUtils.cos(r)), x = Math.ceil(p * c.NumberUtils.sin(r)));
            var p = n.quality,
            r = n.blurX / 10,
            z = n.blurY / 10,
            w = l + 2 * r + 20 + Math.abs(q),
            y = m + 2 * z + 20 + Math.abs(x);
            d.initWebGLCanvas();
            var v = c.RenderTexture.WebGLRenderer,
            C = c.RenderTexture.WebGLCanvas,
            A = c.RenderTexture.create();
            A._bitmapData || A.init();
            A.setSize(w, y);
            A._sourceWidth = w;
            A._sourceHeight = y;
            var B = c.RenderTexture.create();
            B._bitmapData || B.init();
            B.setSize(w, y);
            B._sourceWidth = w;
            B._sourceHeight = y;
            v.clearScreen();
            v.filterType = "colorTransform";
            v.setGlobalColorTransform([0, 0, 0, 0, n._red, 0, 0, 0, 0, n._green, 0, 0, 0, 0, n._blue, 0, 0, 0, 0, 255 * n.alpha]);
            v.setAlpha(1, c.BlendMode.NORMAL);
            v.setTransform(new c.Matrix(1, 0, 0, 1, 0, 0));
            v.drawImage(a, b, e, f, t, r + 10, z + 10, l, m);
            v._drawWebGL();
            v.filterType = null;
            A.canvasContext.clearRect(0, 0, w, y);
            A.canvasContext.drawImage(C, 0, 0, w, y, 0, 0, w, y);
            v.clearScreen();
            v.setAlpha(1, c.BlendMode.NORMAL);
            v.setTransform(new c.Matrix(1, 0, 0, 1, 0, 0));
            v.filterType = "blur";
            v.setBlurData(r, 0);
            c.Texture.deleteWebGLTexture(A);
            v.drawImage(A, r, z, w - 2 * r, y - 2 * z, r, z, w - 2 * r, y - 2 * z);
            v._drawWebGL();
            v.filterType = null;
            B.canvasContext.clearRect(0, 0, w, y);
            B.canvasContext.drawImage(C, 0, 0, w, y, 0, 0, w, y);
            v.clearScreen();
            v.setAlpha(1, c.BlendMode.NORMAL);
            v.setTransform(new c.Matrix(1, 0, 0, 1, 0, 0));
            v.filterType = "blur";
            v.setBlurData(0, z);
            c.Texture.deleteWebGLTexture(B);
            v.drawImage(B, 0, z, w, y - 2 * z, 0, z + 5, w, y - 2 * z);
            v._drawWebGL();
            v.filterType = null;
            A.canvasContext.clearRect(0, 0, w, y);
            A.canvasContext.drawImage(C, 0, 0, w, y, 0, 0, w, y);
            v.clearScreen();
            v.setAlpha(1, c.BlendMode.NORMAL);
            v.setTransform(new c.Matrix(1, 0, 0, 1, 0, 0));
            c.Texture.deleteWebGLTexture(A);
            for (n = 0; n < p; n++) v.drawImage(A, 0, 0, w, y, q, x, w, y);
            v._drawWebGL();
            v.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            v.currentBlendMode = null;
            v.drawImage(a, b, e, f, t, k + r + 10, h + z + 15, l, m);
            v._drawWebGL();
            B.canvasContext.clearRect(0, 0, w, y);
            B.canvasContext.drawImage(C, 0, 0, w, y, 0, 0, w, y);
            c.Texture.deleteWebGLTexture(B);
            this._drawImage(B, 0, 0, w, y, k - r - 10, h - z - 15, w, y);
            this._drawWebGL();
            c.RenderTexture.release(A);
            c.RenderTexture.release(B)
        };
        b._drawWebGL = function() {
            if (0 != this.currentBatchSize && !this.contextLost) {
                var a = c.getTimer();
                this.start();
                var b = this.gl;
                b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
                var d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                b.bufferSubData(b.ARRAY_BUFFER, 0, d);
                b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
                this.currentBatchSize = 0;
                this.renderCost += c.getTimer() - a;
                c.Profiler.getInstance().onDrawImage()
            }
        };
        b.setTransform = function(a) {
            var b = this.worldTransform;
            b.a = a.a;
            b.b = a.b;
            b.c = a.c;
            b.d = a.d;
            b.tx = a.tx;
            b.ty = a.ty
        };
        b.setAlpha = function(a, b) {
            this.worldAlpha = a;
            this.setBlendMode(b)
        };
        b.createWebGLTexture = function(a) {
            a = a._bitmapData;
            a.webGLTexture || (a.webGLTexture = {});
            if (!a.webGLTexture[this.glID]) {
                var b = this.gl;
                a.webGLTexture[this.glID] = b.createTexture();
                a.webGLTexture[this.glID].glContext = b;
                b.bindTexture(b.TEXTURE_2D, a.webGLTexture[this.glID]);
                b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                b.bindTexture(b.TEXTURE_2D, null)
            }
        };
        b.pushMask = function(a) {
            this._drawWebGL();
            var b = this.gl;
            0 == this.maskList.length && b.enable(b.SCISSOR_TEST);
            a = this.getScissorRect(a);
            this.maskList.push(a);
            this.scissor(a.x, a.y, a.width, a.height)
        };
        b.getScissorRect = function(a) {
            var b = this.maskList[this.maskList.length - 1],
            d,
            e,
            f;
            b ? b.intersects(b) ? (d = Math.max(a.x + this.worldTransform.tx, b.x), e = Math.max(a.y + this.worldTransform.ty, b.y), f = Math.min(a.x + this.worldTransform.tx + a.width, b.x + b.width) - d, a = Math.min(a.y + this.worldTransform.ty + a.height, b.y + b.height) - e) : a = f = e = d = 0 : (d = a.x + this.worldTransform.tx, e = a.y + this.worldTransform.ty, f = a.width, a = a.height); (b = this.maskDataFreeList.pop()) ? (b.x = d, b.y = e, b.width = f, b.height = a) : b = new c.Rectangle(d, e, f, a);
            return b
        };
        b.popMask = function() {
            this._drawWebGL();
            var a = this.gl,
            b = this.maskList.pop();
            this.maskDataFreeList.push(b);
            b = this.maskList.length;
            0 != b ? (b = this.maskList[b - 1], (0 < b.width || 0 < b.height) && this.scissor(b.x, b.y, b.width, b.height)) : a.disable(a.SCISSOR_TEST)
        };
        b.scissor = function(a, b, d, e) {
            var f = this.gl;
            0 > d && (d = 0);
            0 > e && (e = 0);
            f.scissor(a, -b + c.MainContext.instance.stage.stageHeight - e, d, e)
        };
        b.setGlobalColorTransform = function(a) {
            if (this.colorTransformMatrix != a && (this._drawWebGL(), this.colorTransformMatrix = a)) {
                a = a.concat();
                var b = this.shaderManager.colorTransformShader;
                b.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255;
                b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
                b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
                b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
                b.uniforms.matrix.value = a
            }
        };
        b.setBlurData = function(a, b) {
            var c = this.shaderManager.blurShader;
            c.uniforms.blur.value.x = a;
            c.uniforms.blur.value.y = b
        };
        b.setGlobalFilters = function(a) {
            this._drawWebGL();
            this.setFilterProperties(a)
        };
        b.setFilterProperties = function(a) {
            if ((this.filters = a) && a.length) for (var b = 0; 1 > b; b++) {
                var c = a[b];
                this.filterType = c.type;
                switch (c.type) {
                case "blur":
                    this.setBlurData(c.blurX, c.blurY);
                    break;
                case "colorTransform":
                    this.setGlobalColorTransform(c._matrix)
                }
            } else this.filterType = null
        };
        b.setupFont = function(a, b) {
            void 0 === b && (b = null);
            this.canvasContext.setupFont(a, b)
        };
        b.measureText = function(a) {
            return this.canvasContext.measureText(a)
        };
        b.renderGraphics = function(a) {
            this._drawWebGL();
            var b = this.gl,
            c = this.shaderManager.primitiveShader;
            this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
            this.updateGraphics(a);
            this.shaderManager.activateShader(c);
            b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
            b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0));
            b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY);
            b.uniform2f(c.offsetVector, 0, 0);
            b.uniform3fv(c.tintColor, [1, 1, 1]);
            b.uniform1f(c.alpha, this.worldAlpha);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
            b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
            this.shaderManager.activateShader(this.shaderManager.defaultShader)
        };
        b.updateGraphics = function(a) {
            var b = this.gl;
            this.buildRectangle(a);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
        };
        b.buildRectangle = function(a) {
            var b = a.x,
            c = a.y,
            d = a.w;
            a = a.h;
            var e = this.graphicsStyle.a,
            f = this.graphicsStyle.r * e,
            h = this.graphicsStyle.g * e,
            l = this.graphicsStyle.b * e,
            m = this.graphicsPoints,
            n = this.graphicsIndices,
            p = m.length / 6;
            m.push(b, c);
            m.push(f, h, l, e);
            m.push(b + d, c);
            m.push(f, h, l, e);
            m.push(b, c + a);
            m.push(f, h, l, e);
            m.push(b + d, c + a);
            m.push(f, h, l, e);
            n.push(p, p, p + 1, p + 2, p + 3, p + 3)
        };
        b.setGraphicsStyle = function(a, b, c, d) {
            this.graphicsStyle.r = a;
            this.graphicsStyle.g = b;
            this.graphicsStyle.b = c;
            this.graphicsStyle.a = d
        };
        d.glID = 0;
        d.isInit = !1;
        return d
    } (c.RendererContext);
    c.WebGLRenderer = f;
    f.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
var egret_webgl_graphics; (function(c) {
    c.beginFill = function(c, d) {
        void 0 === d && (d = 1);
        this._pushCommand(new f(this._setStyle, this, [(c >> 16) / 255, ((c & 65280) >> 8) / 255, (c & 255) / 255, d]))
    };
    c.beginGradientFill = function(c, d, b, a, g) {};
    c.drawRect = function(c, d, b, a) {
        this._pushCommand(new f(function(a) {
            this.renderContext.renderGraphics(a)
        },
        this, [{
            x: c,
            y: d,
            w: b,
            h: a
        }]));
        this._checkRect(c, d, b, a)
    };
    c.drawCircle = function(c, d, b) {};
    c.drawRoundRect = function(c, d, b, a, g, f) {};
    c.drawEllipse = function(c, d, b, a) {};
    c.lineStyle = function(c, d, b, a, g, f, s, t) {};
    c.lineTo = function(c, d) {};
    c.curveTo = function(c, d, b, a) {};
    c.cubicCurveTo = function(c, d, b, a, g, f) {};
    c.moveTo = function(c, d) {};
    c.clear = function() {
        this._maxY = this._maxX = this._minY = this._minX = this.commandQueue.length = 0
    };
    c.endFill = function() {};
    c._pushCommand = function(c) {
        this.commandQueue.push(c)
    };
    c._draw = function(c) {
        var d = this.commandQueue.length;
        if (0 != d) for (this.renderContext = c, c = 0; c < d; c++) {
            var b = this.commandQueue[c];
            b.method.apply(b.thisObject, b.args)
        }
    };
    var f = function() {
        return function(c, d, b) {
            this.method = c;
            this.thisObject = d;
            this.args = b
        }
    } ();
    f.prototype.__class__ = "egret_webgl_graphics.Command";
    c._setStyle = function(c, d, b, a) {
        this.renderContext.setGraphicsStyle(c, d, b, a)
    };
    c.init = function() {
        for (var e in c) egret.Graphics.prototype[e] = c[e]
    }
})(egret_webgl_graphics || (egret_webgl_graphics = {})); (function(c) {
    var f = function() {
        function e() {}
        e.compileProgram = function(d, b, a) {
            a = e.compileFragmentShader(d, a);
            b = e.compileVertexShader(d, b);
            var g = d.createProgram();
            d.attachShader(g, b);
            d.attachShader(g, a);
            d.linkProgram(g);
            d.getProgramParameter(g, d.LINK_STATUS) || c.$warn(1020);
            return g
        };
        e.compileFragmentShader = function(c, b) {
            return e._compileShader(c, b, c.FRAGMENT_SHADER)
        };
        e.compileVertexShader = function(c, b) {
            return e._compileShader(c, b, c.VERTEX_SHADER)
        };
        e._compileShader = function(d, b, a) {
            a = d.createShader(a);
            d.shaderSource(a, b);
            d.compileShader(a);
            return d.getShaderParameter(a, d.COMPILE_STATUS) ? a: (c.Logger.info(d.getShaderInfoLog(a)), null)
        };
        e.checkCanUseWebGL = function() {
            if (void 0 == e.canUseWebGL) try {
                var c = document.createElement("canvas");
                e.canUseWebGL = !!window.WebGLRenderingContext && !(!c.getContext("webgl") && !c.getContext("experimental-webgl"))
            } catch(b) {
                e.canUseWebGL = !1
            }
            return e.canUseWebGL
        };
        return e
    } ();
    c.WebGLUtils = f;
    f.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e(b) {
            this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            this.program = this.gl = null;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.uniforms = null;
            this.gl = b;
            this.init()
        }
        var d = e.prototype;
        d.init = function() {
            var b = this.gl,
            a = c.WebGLUtils.compileProgram(b, this.defaultVertexSrc, this.fragmentSrc);
            b.useProgram(a);
            this.uSampler = b.getUniformLocation(a, "uSampler");
            this.projectionVector = b.getUniformLocation(a, "projectionVector");
            this.offsetVector = b.getUniformLocation(a, "offsetVector");
            this.dimensions = b.getUniformLocation(a, "dimensions");
            this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition");
            this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord");
            this.colorAttribute = b.getAttribLocation(a, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var d in this.uniforms) this.uniforms[d].uniformLocation = b.getUniformLocation(a, d);
            this.initUniforms();
            this.program = a
        };
        d.initUniforms = function() {
            if (this.uniforms) {
                var b = this.gl,
                a, c;
                for (c in this.uniforms) {
                    a = this.uniforms[c];
                    var d = a.type;
                    "mat2" === d || "mat3" === d || "mat4" === d ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === d ? a.glFunc = b.uniformMatrix2fv: "mat3" === d ? a.glFunc = b.uniformMatrix3fv: "mat4" === d && (a.glFunc = b.uniformMatrix4fv)) : (a.glFunc = b["uniform" + d], a.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
                }
            }
        };
        d.syncUniforms = function() {
            if (this.uniforms) {
                var b, a = this.gl,
                c;
                for (c in this.uniforms) b = this.uniforms[c],
                1 === b.glValueLength ? !0 === b.glMatrix ? b.glFunc.call(a, b.uniformLocation, b.transpose, b.value) : b.glFunc.call(a, b.uniformLocation, b.value) : 2 === b.glValueLength ? b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y) : 3 === b.glValueLength ? b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y, b.value.z) : 4 === b.glValueLength && b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y, b.value.z, b.value.w)
            }
        };
        return e
    } ();
    c.EgretShader = f;
    f.prototype.__class__ = "egret.EgretShader"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b) {
            c.call(this, b);
            this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 texColor = texture2D(uSampler, vTextureCoord);\nvec4 locColor = texColor * matrix;\nif(texColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = vColor*vec4(locColor.rgb*locColor.a,locColor.a);\n}";
            this.uniforms = {
                matrix: {
                    type: "mat4",
                    value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                },
                colorAdd: {
                    type: "4f",
                    value: {
                        x: 0,
                        y: 0,
                        z: 0,
                        w: 0
                    }
                }
            };
            this.init()
        }
        __extends(d, c);
        return d
    } (c.EgretShader);
    c.ColorTransformShader = f;
    f.prototype.__class__ = "egret.ColorTransformShader"
})(egret || (egret = {})); (function(c) {
    var f = function(c) {
        function d(b) {
            c.call(this, b);
            this.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){gl_FragColor = vec4(0.0);gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;}";
            this.uniforms = {
                blur: {
                    type: "2f",
                    value: {
                        x: 2,
                        y: 2
                    }
                }
            };
            this.init()
        }
        __extends(d, c);
        return d
    } (c.EgretShader);
    c.BlurShader = f;
    f.prototype.__class__ = "egret.BlurShader"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e(c) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = this.gl = null;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = c;
            this.init()
        }
        e.prototype.init = function() {
            var d = this.gl,
            b = c.WebGLUtils.compileProgram(d, this.vertexSrc, this.fragmentSrc);
            d.useProgram(b);
            this.projectionVector = d.getUniformLocation(b, "projectionVector");
            this.offsetVector = d.getUniformLocation(b, "offsetVector");
            this.tintColor = d.getUniformLocation(b, "tint");
            this.aVertexPosition = d.getAttribLocation(b, "aVertexPosition");
            this.colorAttribute = d.getAttribLocation(b, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = d.getUniformLocation(b, "translationMatrix");
            this.alpha = d.getUniformLocation(b, "alpha");
            this.program = b
        };
        return e
    } ();
    c.PrimitiveShader = f;
    f.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e(b) {
            this.gl = null;
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            this.blurShader = this.colorTransformShader = this.primitiveShader = this.defaultShader = this.currentShader = null;
            for (var a = 0; a < this.maxAttibs; a++) this.attribState[a] = !1;
            this.setContext(b)
        }
        var d = e.prototype;
        d.setContext = function(b) {
            this.gl = b;
            this.primitiveShader = new c.PrimitiveShader(b);
            this.defaultShader = new c.EgretShader(b);
            this.colorTransformShader = new c.ColorTransformShader(b);
            this.blurShader = new c.BlurShader(b);
            this.activateShader(this.defaultShader)
        };
        d.activateShader = function(b) {
            this.currentShader != b && (this.gl.useProgram(b.program), this.setAttribs(b.attributes), this.currentShader = b)
        };
        d.setAttribs = function(b) {
            var a, c;
            c = this.tempAttribState.length;
            for (a = 0; a < c; a++) this.tempAttribState[a] = !1;
            c = b.length;
            for (a = 0; a < c; a++) this.tempAttribState[b[a]] = !0;
            b = this.gl;
            c = this.attribState.length;
            for (a = 0; a < c; a++) this.attribState[a] !== this.tempAttribState[a] && (this.attribState[a] = this.tempAttribState[a], this.tempAttribState[a] ? b.enableVertexAttribArray(a) : b.disableVertexAttribArray(a))
        };
        return e
    } ();
    c.WebGLShaderManager = f;
    f.prototype.__class__ = "egret.WebGLShaderManager"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            c.Texture.createBitmapData = c.Texture._createBitmapDataForCanvasAndWebGl
        }
        __extends(d, e);
        var b = d.prototype;
        b.initVersion = function(a) {
            this._versionCtr = a
        };
        b.proceed = function(a) {
            function b() {
                if (4 == e.readyState) if (e.status != a._status && (a._status = e.status, c.HTTPStatusEvent.dispatchHTTPStatusEvent(a, e.status)), 400 <= e.status || 0 == e.status) c.IOErrorEvent.dispatchIOErrorEvent(a);
                else {
                    switch (a.dataFormat) {
                    case c.URLLoaderDataFormat.TEXT:
                        a.data = e.responseText;
                        break;
                    case c.URLLoaderDataFormat.VARIABLES:
                        a.data = new c.URLVariables(e.responseText);
                        break;
                    case c.URLLoaderDataFormat.BINARY:
                        a.data = e.response;
                        break;
                    default:
                        a.data = e.responseText
                    }
                    c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
                }
            }
            if (a.dataFormat == c.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == c.URLLoaderDataFormat.SOUND) c.Html5Capatibility._audioType == c.AudioType.WEB_AUDIO ? this.loadWebAudio(a) : c.Html5Capatibility._audioType == c.AudioType.QQ_AUDIO ? this.loadQQAudio(a) : this.loadSound(a);
            else {
                var d = a._request,
                e = this.getXHR();
                e.onreadystatechange = b;
                var f = this.getVirtualUrl(c.NetContext._getUrl(d));
                e.open(d.method, f, !0);
                this.setResponseType(e, a.dataFormat);
                d.method != c.URLRequestMethod.GET && d.data ? d.data instanceof c.URLVariables ? (e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(d.data.toString())) : (e.setRequestHeader("Content-Type", "multipart/form-data"), e.send(d.data)) : e.send()
            }
        };
        b.loadSound = function(a) {
            function b(e) {
                c.clearTimeout(f.__timeoutId);
                f.removeEventListener("canplaythrough", b, !1);
                f.removeEventListener("error", d, !1);
                e = new c.Html5Audio;
                e._setAudio(f);
                var h = new c.Sound;
                h._setAudio(e);
                a.data = h;
                c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
            }
            function d(e) {
                c.clearTimeout(f.__timeoutId);
                f.removeEventListener("canplaythrough", b, !1);
                f.removeEventListener("error", d, !1);
                c.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var e = this.getVirtualUrl(a._request.url),
            f = new Audio(e);
            f.__timeoutId = c.setTimeout(b, this, 100);
            f.addEventListener("canplaythrough", b, !1);
            f.addEventListener("error", d, !1);
            f.load()
        };
        b.loadQQAudio = function(a) {
            var b = c.Html5Capatibility._QQRootPath + this.getVirtualUrl(a._request.url);
            console.log("loadQQAudio");
            QZAppExternal.preloadSound(function(d) {
                if (0 == d.code) {
                    d = new c.QQAudio;
                    d._setPath(b);
                    var e = new c.Sound;
                    e._setAudio(d);
                    a.data = e;
                    c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
                } else c.IOErrorEvent.dispatchIOErrorEvent(a)
            },
            {
                bid: -1,
                url: b,
                refresh: 1
            })
        };
        b.loadWebAudio = function(a) {
            var b = this.getVirtualUrl(a._request.url),
            d = new XMLHttpRequest;
            d.open("GET", b, !0);
            d.responseType = "arraybuffer";
            console.log("loadWebAudio");
            d.onload = function() {
                var b = new c.WebAudio;
                b._setArrayBuffer(d.response,
                function() {
                    var d = new c.Sound;
                    d._setAudio(b);
                    a.data = d;
                    c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
                })
            };
            d.send()
        };
        b.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
        };
        b.setResponseType = function(a, b) {
            switch (b) {
            case c.URLLoaderDataFormat.TEXT:
            case c.URLLoaderDataFormat.VARIABLES:
                a.responseType = c.URLLoaderDataFormat.TEXT;
                break;
            case c.URLLoaderDataFormat.BINARY:
                a.responseType = "arraybuffer";
                break;
            default:
                a.responseType = b
            }
        };
        b.loadTexture = function(a) {
            var b = this.getVirtualUrl(a._request.url);
            c.Texture.createBitmapData(b,
            function(b, d) {
                if (0 != b) c.IOErrorEvent.dispatchIOErrorEvent(a);
                else {
                    var g = new c.Texture;
                    g._setBitmapData(d);
                    a.data = g;
                    c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
                }
            })
        };
        b.getVirtualUrl = function(a) {
            return this._versionCtr ? this._versionCtr.getVirtualUrl(a) : a
        };
        return d
    } (c.NetContext);
    c.HTML5NetContext = f;
    f.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this._isTouchDown = !1;
            this.rootDiv = null;
            this.rootDiv = document.getElementById(c.StageDelegate.canvas_div_name);
            if (!this.rootDiv) {
                var a = document.getElementById(c.StageDelegate.egret_root_div);
                this.rootDiv = c.Browser.getInstance().$new("div");
                this.rootDiv.id = c.StageDelegate.canvas_div_name;
                a.appendChild(this.rootDiv)
            }
        }
        __extends(d, e);
        var b = d.prototype;
        b.prevent = function(a) {
            a.stopPropagation(); ! 0 == a.isScroll || c.HTMLInput.getInstance().isInputOn() || a.preventDefault()
        };
        b.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown",
            function(b) {
                a._onTouchBegin(b);
                a.prevent(b)
            },
            !1), this.rootDiv.addEventListener("MSPointerMove",
            function(b) {
                a._onTouchMove(b);
                a.prevent(b)
            },
            !1), this.rootDiv.addEventListener("MSPointerUp",
            function(b) {
                a._onTouchEnd(b);
                a.prevent(b)
            },
            !1)) : c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE ? this.addTouchListener() : c.MainContext.deviceType == c.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown",
            function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup",
            function(b) {
                a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
                a._isTouchDown = !1
            })
        };
        b.addMouseListener = function() {
            var a = this;
            this.rootDiv.addEventListener("mousedown",
            function(b) {
                a._onTouchBegin(b)
            });
            this.rootDiv.addEventListener("mousemove",
            function(b) {
                a._onTouchMove(b)
            });
            this.rootDiv.addEventListener("mouseup",
            function(b) {
                a._onTouchEnd(b)
            })
        };
        b.addTouchListener = function() {
            var a = this;
            this.rootDiv.addEventListener("touchstart",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
                a.prevent(b)
            },
            !1);
            this.rootDiv.addEventListener("touchmove",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
                a.prevent(b)
            },
            !1);
            this.rootDiv.addEventListener("touchend",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                a.prevent(b)
            },
            !1);
            this.rootDiv.addEventListener("touchcancel",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                a.prevent(b)
            },
            !1)
        };
        b.inOutOfCanvas = function(a) {
            var b = this.getLocation(this.rootDiv, a);
            a = b.x;
            var b = b.y,
            d = c.MainContext.instance.stage;
            return 0 > a || 0 > b || a > d.stageWidth || b > d.stageHeight ? !0 : !1
        };
        b.dispatchLeaveStageEvent = function() {
            this.touchingIdentifiers.length = 0;
            c.MainContext.instance.stage.dispatchEventWith(c.Event.LEAVE_STAGE)
        };
        b._onTouchBegin = function(a) {
            var b = this.getLocation(this.rootDiv, a),
            c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchBegan(b.x, b.y, c)
        };
        b._onTouchMove = function(a) {
            var b = this.getLocation(this.rootDiv, a),
            c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchMove(b.x, b.y, c)
        };
        b._onTouchEnd = function(a) {
            var b = this.getLocation(this.rootDiv, a),
            c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchEnd(b.x, b.y, c)
        };
        b.getLocation = function(a, b) {
            var d = document.documentElement,
            e = window,
            f, k;
            "function" === typeof a.getBoundingClientRect ? (k = a.getBoundingClientRect(), f = k.left, k = k.top) : k = f = 0;
            f += e.pageXOffset - d.clientLeft;
            k += e.pageYOffset - d.clientTop;
            null != b.pageX ? (d = b.pageX, e = b.pageY) : (f -= document.body.scrollLeft, k -= document.body.scrollTop, d = b.clientX, e = b.clientY);
            var h = c.Point.identity;
            h.x = (d - f) / c.StageDelegate.getInstance().getScaleX();
            h.y = (e - k) / c.StageDelegate.getInstance().getScaleY();
            return h
        };
        return d
    } (c.TouchContext);
    c.HTML5TouchContext = f;
    f.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {})); (function(c) {
    var f = function(d) {
        function b() {
            d.call(this);
            this._isNeedShow = !1;
            this.inputDiv = this.inputElement = null;
            this._gscaleY = this._gscaleX = 0;
            this._isNeesHide = !1;
            this.textValue = "";
            this._styleInfoes = {};
            e.getInstance()
        }
        __extends(b, d);
        var a = b.prototype;
        a._initElement = function(a, b, d, e) {
            var f = c.StageDelegate.getInstance().getScaleX(),
            h = c.StageDelegate.getInstance().getScaleY();
            this.inputDiv.style.left = a * f + "px";
            this.inputDiv.style.top = b * h + "px";
            this._gscaleX = f * d;
            this._gscaleY = h * e
        };
        a._show = function(a, b, c, d) {
            this._multiline = a;
            e.getInstance().isCurrentStageText(this) ? this.inputElement.onblur = null: (this.inputElement = e.getInstance().getInputElement(this), this.inputDiv = e.getInstance()._inputDIV);
            this._isNeedShow = e.getInstance()._needShow = !0
        };
        a.onBlurHandler = function() {
            e.getInstance().clearInputElement();
            window.scrollTo(0, 0)
        };
        a.executeShow = function() {
            this.inputElement.value = this._getText();
            null == this.inputElement.onblur && (this.inputElement.onblur = this.onBlurHandler);
            this._resetStageText();
            0 < this._textfield._TF_Props_._maxChars ? this.inputElement.setAttribute("maxlength", this._textfield._TF_Props_._maxChars) : this.inputElement.removeAttribute("maxlength");
            this.inputElement.selectionStart = this.inputElement.value.length;
            this.inputElement.selectionEnd = this.inputElement.value.length;
            this.inputElement.focus()
        };
        a._hide = function() {
            this._isNeesHide = !0;
            0 <= c.Browser.getInstance().getUserAgent().indexOf("ios") && e.getInstance().disconnectStageText(this)
        };
        a._getText = function() {
            this.textValue || (this.textValue = "");
            return this.textValue
        };
        a._setText = function(a) {
            this.textValue = a;
            this.resetText()
        };
        a.resetText = function() {
            this.inputElement && (this.inputElement.value = this.textValue)
        };
        a._onInput = function() {
            this.textValue = this.inputElement.value;
            c.Event.dispatchEvent(this, "updateText", !1)
        };
        a._onClickHandler = function(a) {
            this._isNeedShow && (a.stopImmediatePropagation(), this._isNeedShow = !1, this.executeShow(), this.dispatchEvent(new c.Event("focus")))
        };
        a._onDisconnect = function() {
            this.inputElement = null;
            this.dispatchEvent(new c.Event("blur"))
        };
        a.setElementStyle = function(a, b) {
            this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b)
        };
        a._removeInput = function() {
            this.inputElement && e.getInstance().disconnectStageText(this)
        };
        a._resetStageText = function() {
            if (this.inputElement) {
                var a = this._textfield,
                b = a._TF_Props_;
                this.setElementStyle("fontFamily", b._fontFamily);
                this.setElementStyle("fontStyle", b._italic ? "italic": "normal");
                this.setElementStyle("fontWeight", b._bold ? "bold": "normal");
                this.setElementStyle("textAlign", b._textAlign);
                this.setElementStyle("fontSize", b._size * this._gscaleY + "px");
                this.setElementStyle("lineHeight", b._size * this._gscaleY + "px");
                this.setElementStyle("color", b._textColorString);
                this.setElementStyle("width", a._getSize(c.Rectangle.identity).width * this._gscaleX + "px");
                this.setElementStyle("height", a._getSize(c.Rectangle.identity).height * this._gscaleY + "px");
                this.setElementStyle("verticalAlign", b._verticalAlign)
            }
        };
        return b
    } (c.StageText);
    c.HTML5StageText = f;
    f.prototype.__class__ = "egret.HTML5StageText";
    var e = function() {
        function d() {
            this._needShow = !1
        }
        var b = d.prototype;
        b.isInputOn = function() {
            return null != this._stageText
        };
        b.isCurrentStageText = function(a) {
            return this._stageText == a
        };
        b.initValue = function(a) {
            a.style.position = "absolute";
            a.style.left = "0px";
            a.style.top = "0px";
            a.style.border = "none";
            a.style.padding = "0"
        };
        b._initStageDelegateDiv = function() {
            var a = this,
            b = c.Browser.getInstance().$("#StageDelegateDiv");
            b || (b = c.Browser.getInstance().$new("div"), b.id = "StageDelegateDiv", document.getElementById(c.StageDelegate.egret_root_div).appendChild(b), a.initValue(b), b.style.width = "0px", b.style.height = "0px", a._inputDIV = c.Browser.getInstance().$new("div"), a.initValue(a._inputDIV), a._inputDIV.style.width = "0px", a._inputDIV.style.height = "0px", a._inputDIV.style.left = "0px", a._inputDIV.style.top = "-100px", a._inputDIV.style[c.Browser.getInstance().getTrans("transformOrigin")] = "0% 0% 0px", b.appendChild(a._inputDIV), document.getElementById(c.StageDelegate.canvas_div_name).addEventListener("click",
            function(b) {
                a._needShow ? (a._needShow = !1, c.MainContext.instance.stage._changeSizeDispatchFlag = !1, a._stageText._onClickHandler(b), d.getInstance().show()) : a._inputElement && (a.clearInputElement(), a._inputElement.blur(), a._inputElement = null)
            }), a.initInputElement(!0), a.initInputElement(!1))
        };
        b.initInputElement = function(a) {
            var b = this;
            a ? (a = document.createElement("textarea"), a.style.resize = "none", b._multiElement = a, a.id = "egretTextarea") : (a = document.createElement("input"), b._simpleElement = a, a.id = "egretInput");
            a.type = "text";
            b._inputDIV.appendChild(a);
            a.setAttribute("tabindex", "-1");
            a.style.width = "1px";
            a.style.height = "12px";
            b.initValue(a);
            a.style.outline = "thin";
            a.style.background = "none";
            a.style.overflow = "hidden";
            a.style.wordBreak = "break-all";
            a.style.opacity = 0;
            a.oninput = function() {
                b._stageText && b._stageText._onInput()
            }
        };
        b.show = function() {
            var a = this._inputElement;
            c.__callAsync(function() {
                a.style.opacity = 1
            },
            this)
        };
        b.disconnectStageText = function(a) {
            if (null == this._stageText || this._stageText == a) this.clearInputElement(),
            this._inputElement && this._inputElement.blur()
        };
        b.clearInputElement = function() {
            this._inputElement && (this._inputElement.value = "", this._inputElement.onblur = null, this._inputElement.style.width = "1px", this._inputElement.style.height = "12px", this._inputElement.style.left = "0px", this._inputElement.style.top = "0px", this._inputElement.style.opacity = 0, (this._simpleElement == this._inputElement ? this._multiElement: this._simpleElement).style.display = "block", this._inputDIV.style.left = "0px", this._inputDIV.style.top = "-100px");
            this._stageText && (this._stageText._onDisconnect(), this._stageText = null);
            c.MainContext.instance.stage._changeSizeDispatchFlag = !0
        };
        b.getInputElement = function(a) {
            this.clearInputElement();
            this._stageText = a;
            this._inputElement = this._stageText._multiline ? this._multiElement: this._simpleElement; (this._simpleElement == this._inputElement ? this._multiElement: this._simpleElement).style.display = "none";
            return this._inputElement
        };
        d.getInstance = function() {
            null == d._instance && (d._instance = new c.HTMLInput);
            return d._instance
        };
        return d
    } ();
    c.HTMLInput = e;
    e.prototype.__class__ = "egret.HTMLInput"
})(egret || (egret = {}));
egret.StageText.create = function() {
    egret.HTMLInput.getInstance()._initStageDelegateDiv();
    return new egret.HTML5StageText
}; (function(c) {
    var f = function() {
        function e() {
            this._loop = !1;
            this.paused = !0;
            this._listeners = [];
            this._onEndedCall = null;
            this._volume = 1;
            this._startTime = 0
        }
        var d = e.prototype;
        d._play = function(b) {
            this.removeListeners();
            c.Html5Capatibility._audioMustLoad && this._audio.load();
            this.paused = !1;
            this._audio.autoplay = !0;
            this._audio.volume = this._volume;
            var a = this,
            d = function(b) {
                a._audio.removeEventListener("ended", d);
                a._onEndedCall && a._onEndedCall.call(null, b);
                a.clear()
            };
            this._audio.addEventListener("ended", d);
            this.initStart();
            try {
                this._audio.currentTime = this._startTime
            } catch(e) {} finally {
                this._audio.play()
            }
        };
        d.clear = function() {
            try {
                this._audio.pause()
            } catch(b) {} finally {
                this.removeListeners(),
                this._loop && !this.paused && this._play()
            }
        };
        d._pause = function() {
            this.paused = !0;
            this._audio.pause()
        };
        d._load = function() {
            this._audio.load()
        };
        d._setAudio = function(b) {
            this._audio = b
        };
        d.initStart = function() {
            for (var b = 0; b < this._listeners.length; b++) {
                var a = this._listeners[b];
                this._audio.addEventListener(a.type, a.listener, a.useCapture)
            }
        };
        d._addEventListener = function(b, a, c) {
            void 0 === c && (c = !1);
            "ended" == b ? this._onEndedCall = a: (this._listeners.push({
                type: b,
                listener: a,
                useCapture: c
            }), this._audio && this._audio.addEventListener(b, a, c))
        };
        d.removeListeners = function() {
            for (var b = 0; b < this._listeners.length; b++) {
                var a = this._listeners[b];
                this._audio && this._audio.removeEventListener(a.type, a.listener, a.useCapture)
            }
        };
        d._removeEventListener = function(b, a, c) {
            void 0 === c && (c = !1);
            if ("ended" == b) this._onEndedCall = null;
            else for (var d = 0; d < this._listeners.length; d++) {
                var e = this._listeners[d];
                if (e.listener == a && e.useCapture == c && e.type == b) {
                    this._listeners.splice(d, 1);
                    this._audio && this._audio.removeEventListener(b, a, c);
                    break
                }
            }
        };
        d._preload = function(b, a, d) {
            void 0 === a && (a = null);
            void 0 === d && (d = null);
            c.callLater(a, d)
        };
        d._destroy = function() {};
        d._getVolume = function() {
            return this._volume
        };
        d._setVolume = function(b) {
            this._volume = Math.max(0, Math.min(b, 1));
            this._audio.volume = this._volume
        };
        d._setLoop = function(b) {
            this._loop = b
        };
        d._getCurrentTime = function() {
            return this._audio.currentTime
        };
        d._setCurrentTime = function(b) {
            this._startTime = b
        };
        return e
    } ();
    c.Html5Audio = f;
    f.prototype.__class__ = "egret.Html5Audio"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {
            this.context = e.ctx;
            this.bufferSource = null;
            this.paused = !0;
            this._loop = !1;
            this._listeners = [];
            this._onEndedCall = null;
            this._volume = 1;
            this._currentTime = this._startTime = 0;
            this.gain = e.ctx.createGain ? e.ctx.createGain() : e.ctx.createGainNode()
        }
        var d = e.prototype;
        e.decodeAudios = function() {
            if (! (0 >= e.decodeArr.length || e.isDecoding)) {
                e.isDecoding = !0;
                var b = e.decodeArr.shift();
                e.ctx.decodeAudioData(b.buffer,
                function(a) {
                    b.self.audioBuffer = a;
                    b.callback && b.callback();
                    e.isDecoding = !1;
                    e.decodeAudios()
                })
            }
        };
        d._play = function(b) {
            var a = this;
            this.bufferSource && (this.bufferSource.onended = null, this.removeListeners(), this.bufferSource = null);
            b = this.context;
            var c = this.gain,
            d = b.createBufferSource();
            this.bufferSource = d;
            this.addListeners();
            d.buffer = this.audioBuffer;
            d.connect(c);
            c.connect(b.destination);
            d.onended = function(b) {
                a.clear();
                a._onEndedCall && a._onEndedCall.call(null, b);
                a._loop && !a.paused && a._play()
            };
            this.paused = !1;
            this._startTime = Date.now();
            this.gain.gain.value = this._volume;
            d.start(0, this._currentTime);
            this._currentTime = 0
        };
        d.clear = function() {
            if (this.bufferSource) {
                this.removeListeners();
                var b = this.bufferSource;
                b.stop ? b.stop(0) : b.noteOff(0);
                this.bufferSource.disconnect();
                this.bufferSource = null
            }
        };
        d.addListeners = function() {
            for (var b = 0; b < this._listeners.length; b++) {
                var a = this._listeners[b];
                this.bufferSource.addEventListener(a.type, a.listener, a.useCapture)
            }
        };
        d.removeListeners = function() {
            for (var b = 0; b < this._listeners.length; b++) {
                var a = this._listeners[b];
                this.bufferSource.removeEventListener(a.type, a.listener, a.useCapture)
            }
        };
        d._pause = function() {
            this.paused = !0;
            this.clear()
        };
        d._addEventListener = function(b, a, c) {
            void 0 === c && (c = !1);
            "ended" == b ? this._onEndedCall = a: (this._listeners.push({
                type: b,
                listener: a,
                useCapture: c
            }), this.bufferSource && this.bufferSource.addEventListener(b, a, c))
        };
        d._removeEventListener = function(b, a, c) {
            void 0 === c && (c = !1);
            if ("ended" == b) this._onEndedCall = null;
            else for (var d = 0; d < this._listeners.length; d++) {
                var e = this._listeners[d];
                if (e.listener == a && e.useCapture == c && e.type == b) {
                    this._listeners.splice(d, 1);
                    this.bufferSource && this.bufferSource.removeEventListener(b, a, c);
                    break
                }
            }
        };
        d._load = function() {
            this._setArrayBuffer(this._arrayBuffer, null)
        };
        d._setArrayBuffer = function(b, a) {
            this._arrayBuffer = b;
            e.decodeArr.push({
                buffer: b,
                callback: a,
                self: this
            });
            e.decodeAudios()
        };
        d._preload = function(b, a, d) {
            void 0 === a && (a = null);
            void 0 === d && (d = null);
            c.callLater(a, d)
        };
        d._getVolume = function() {
            return this._volume
        };
        d._setVolume = function(b) {
            this._volume = b;
            this.gain.gain.value = b
        };
        d._setLoop = function(b) {
            this._loop = b
        };
        d._getCurrentTime = function() {
            return this.bufferSource ? (Date.now() - this._startTime) / 1E3: 0
        };
        d._setCurrentTime = function(b) {
            this._currentTime = b
        };
        d._destroy = function() {};
        e.canUseWebAudio = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
        e.ctx = e.canUseWebAudio ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext) : void 0;
        e.decodeArr = [];
        e.isDecoding = !1;
        return e
    } ();
    c.WebAudio = f;
    f.prototype.__class__ = "egret.WebAudio"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function e() {
            this._loop = !1;
            this._currentTime = 0
        }
        var d = e.prototype;
        d._play = function(b) {
            this._type = b;
            b == c.Sound.EFFECT ? QZAppExternal.playLocalSound(function(a) {
                alert(JSON.stringify(a))
            },
            {
                bid: -1,
                url: this._path,
                loop: this._loop ? -1 : 0
            }) : QZAppExternal.playLocalBackSound({
                bid: -1,
                url: this._path,
                loop: this._loop ? -1 : 0
            })
        };
        d._pause = function() {
            this._type == c.Sound.EFFECT ? QZAppExternal.stopSound() : QZAppExternal.stopBackSound()
        };
        d._addEventListener = function(b, a, c) {};
        d._removeEventListener = function(b, a, c) {};
        d._load = function() {};
        d._preload = function(b, a, d) {
            void 0 === a && (a = null);
            void 0 === d && (d = null);
            c.callLater(a, d)
        };
        d._setPath = function(b) {
            this._path = b
        };
        d._getVolume = function() {
            return 1
        };
        d._setVolume = function(b) {};
        d._setLoop = function(b) {
            this._loop = b
        };
        d._getCurrentTime = function() {
            return 0
        };
        d._setCurrentTime = function(b) {
            this._currentTime = b
        };
        d._destroy = function() {};
        return e
    } ();
    c.QQAudio = f;
    f.prototype.__class__ = "egret.QQAudio"
})(egret || (egret = {})); (function(c) {
    var f = function() {
        function b() {}
        b.QQ_AUDIO = 1;
        b.WEB_AUDIO = 2;
        b.HTML5_AUDIO = 3;
        return b
    } ();
    c.AudioType = f;
    f.prototype.__class__ = "egret.AudioType";
    var e = function() {
        function b() {}
        b.WPHONE = 1;
        b.IOS = 2;
        b.ADNROID = 3;
        return b
    } ();
    c.SystemOSType = e;
    e.prototype.__class__ = "egret.SystemOSType";
    var d = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a._init = function() {
            var b = navigator.userAgent.toLowerCase();
            a.ua = b;
            a._canUseBlob = !1;
            a._audioType = f.HTML5_AUDIO;
            a._AudioClass = c.Html5Audio;
            a._audioMustLoad = !0;
            if (0 <= b.indexOf("windows phone")) a._System_OS = e.WPHONE,
            a._audioMustLoad = !1;
            else if (0 <= b.indexOf("android")) a._System_OS = e.ADNROID,
            0 <= b.indexOf("ucbrowser") && (a._audioMustLoad = !1),
            window.hasOwnProperty("QZAppExternal") && 0 <= b.indexOf("qzone") && (a._AudioClass = c.QQAudio, a._audioType = f.QQ_AUDIO, (b = document.getElementsByTagName("base")) && 0 < b.length ? a._QQRootPath = b[0].baseURI: (b = window.location.href.indexOf("?"), -1 == b && (b = window.location.href.length), b = window.location.href.substring(0, b), b = b.substring(0, b.lastIndexOf("/")), a._QQRootPath = b + "/"));
            else if (0 <= b.indexOf("iphone") || 0 <= b.indexOf("ipad") || 0 <= b.indexOf("ipod")) a._System_OS = e.IOS,
            7 <= a.getIOSVersion() && (a._canUseBlob = !0, a._AudioClass = c.WebAudio, a._audioType = f.WEB_AUDIO);
            window.URL || window.webkitURL || (a._canUseBlob = !1);
            window.AudioContext || window.webkitAudioContext || window.mozAudioContext || a._audioType != f.WEB_AUDIO || (a._audioType = f.HTML5_AUDIO, a._AudioClass = c.Html5Audio)
        };
        a.getIOSVersion = function() {
            var b = a.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
            return parseInt(b.match(/\d(_\d)*/)[0]) || 0
        };
        a._canUseBlob = !1;
        a._audioType = 0;
        a._audioMustLoad = !1;
        a._QQRootPath = "";
        a._System_OS = 0;
        a.ua = "";
        return a
    } (c.HashObject);
    c.Html5Capatibility = d;
    d.prototype.__class__ = "egret.Html5Capatibility";
    d._init()
})(egret || (egret = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.localVersionDataPath = "localVersion.manifest";
            this.localVersionData = null;
            this.changeVersionDataPath = "version.manifest";
            this.changeVersionData = null;
            this.baseVersionDataPath = "base.manifest";
            this.baseVersionData = null;
            this.localVersionCodePath = "localCode.manifest";
            this.serverVersionCodePath = "code.manifest";
            this._call = this._load = null
        }
        __extends(d, e);
        var b = d.prototype;
        b.fetchVersion = function() {
            this._load = new c.NativeResourceLoader;
            this._load.addEventListener(c.IOErrorEvent.IO_ERROR, this.loadError, this);
            this._load.addEventListener(c.Event.COMPLETE, this.fileLoadComplete, this);
            this.initLocalVersionData()
        };
        b.initLocalVersionData = function() {
            var a = this.getData("appVersion.manifest", !0);
            if (a) {
                if (1 == a.debug) {
                    this.baseVersionData = null;
                    if (a = this.getData(this.localVersionDataPath, !1)) for (var b in a) this.deleteFile(b);
                    this.deleteFile(this.localVersionDataPath);
                    this.deleteFile(this.localVersionCodePath);
                    this.loadOver();
                    return
                }
                var c = this.getData("appVersion.manifest", !1);
                if (null == c || c.version != a.version) {
                    this.localVersionData = this.getData(this.localVersionDataPath, !0);
                    null == this.localVersionData && (this.localVersionData = {});
                    this.deleteFile(this.localVersionCodePath);
                    this.save("appVersion.manifest", JSON.stringify(a));
                    if (a = this.getData(this.localVersionCodePath, !1)) for (b in a) a[b] != this.localVersionData[b] && this.deleteFile(b);
                    else a = {};
                    for (b in this.localVersionData) a[b] != this.localVersionData[b] && this.deleteFile(b);
                    this.save(this.localVersionDataPath, JSON.stringify(this.localVersionData));
                    this.loadCodeVersion();
                    return
                }
            }
            this.localVersionData = this.getLocalData(this.localVersionDataPath);
            null == this.localVersionData && (this.localVersionData = this.getLocalData(this.baseVersionDataPath), null == this.localVersionData && (this.localVersionData = {}), this.save(this.localVersionDataPath, JSON.stringify(this.localVersionData)));
            this.loadCodeVersion()
        };
        b.deleteFile = function(a) {
            egret_native.deleteUpdateFile && egret_native.deleteUpdateFile(a)
        };
        b.loadCodeVersion = function() {
            var a = 1;
            this.newCode = 1;
            var b = this.getLocalData(this.localVersionCodePath);
            null != b && (a = b.code);
            b = this.getLocalData(this.serverVersionCodePath);
            null != b && (this.newCode = b.code);
            this.loadBaseVersion(a != this.newCode)
        };
        b.loadBaseVersion = function(a) {
            this.baseVersionData = this.getLocalData(this.baseVersionDataPath);
            this.changeVersionData = this.getLocalData(this.changeVersionDataPath);
            var b = this;
            null == b.baseVersionData || a ? b.loadFile(b.baseVersionDataPath,
            function() {
                b.baseVersionData = b.getLocalData(b.baseVersionDataPath);
                b.loadBaseOver()
            }) : b.loadBaseOver()
        };
        b.loadBaseOver = function() {
            this.save(this.localVersionCodePath, JSON.stringify({
                code: this.newCode
            }));
            this.loadOver()
        };
        b.loadFile = function(a, b) {
            void 0 === b && (b = null);
            this._call = b;
            this._load.load(a, 1E3)
        };
        b.fileLoadComplete = function(a) {
            this._call && this._call()
        };
        b.loadError = function(a) {
            this._load.removeEventListener(c.IOErrorEvent.IO_ERROR, this.loadError, this);
            this._load.removeEventListener(c.Event.COMPLETE, this.fileLoadComplete, this);
            this.dispatchEvent(a)
        };
        b.loadOver = function() {
            this._load.removeEventListener(c.IOErrorEvent.IO_ERROR, this.loadError, this);
            this._load.removeEventListener(c.Event.COMPLETE, this.fileLoadComplete, this);
            this.dispatchEvent(new c.Event(c.Event.COMPLETE))
        };
        b.save = function(a, b) {
            egret_native.writeFileSync ? egret_native.writeFileSync(a, b) : egret_native.saveRecord && egret_native.saveRecord(a, b)
        };
        b.getData = function(a, b) {
            if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                var c = b ? egret_native.readResourceFileSync(a) : egret_native.readUpdateFileSync(a);
                return null != c ? JSON.parse(c) : null
            }
            return this.getLocalDataByOld(a)
        };
        b.getLocalData = function(a) {
            if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                var b = egret_native.readUpdateFileSync(a);
                if (null != b) return JSON.parse(b);
                b = egret_native.readResourceFileSync(a);
                return null != b ? JSON.parse(b) : null
            }
            return this.getLocalDataByOld(a)
        };
        b.getLocalDataByOld = function(a) {
            var b = null;
            egret_native.isRecordExists(a) ? (a = egret_native.loadRecord(a), b = JSON.parse(a)) : egret_native.isFileExists(a) && (a = egret_native.readFileSync(a), b = JSON.parse(a));
            return b
        };
        b.getChangeList = function() {
            if (!this.baseVersionData) return [];
            var a = {},
            b;
            for (b in this.changeVersionData) 1 == this.changeVersionData[b].d ? delete this.baseVersionData[b] : this.baseVersionData[b] = this.changeVersionData[b];
            for (b in this.baseVersionData) null != this.localVersionData[b] && this.compareVersion(this.localVersionData, this.baseVersionData, b) || (a[b] = {
                url: b,
                size: this.baseVersionData[b].s
            });
            var c = [];
            for (b in a) c.push(a[b]);
            return c
        };
        b.compareVersion = function(a, b, c) {
            return null == a[c] || null == b[c] ? !1 : a[c].v == b[c].v
        };
        b.checkIsNewVersion = function(a) {
            return this.baseVersionData ? null != this.changeVersionData[a] ? this.compareVersion(this.changeVersionData, this.localVersionData, a) : null != this.baseVersionData[a] ? this.compareVersion(this.baseVersionData, this.localVersionData, a) : !0 : !0
        };
        b.saveVersion = function(a) {
            if (this.baseVersionData) {
                var b = !1;
                null != this.changeVersionData[a] ? this.compareVersion(this.changeVersionData, this.localVersionData, a) || (b = !0, this.localVersionData[a] = this.changeVersionData[a]) : null == this.baseVersionData[a] || this.compareVersion(this.baseVersionData, this.localVersionData, a) || (b = !0, this.localVersionData[a] = this.baseVersionData[a]);
                b && this.save(this.localVersionDataPath, JSON.stringify(this.localVersionData))
            }
        };
        b.getVirtualUrl = function(a) {
            return a
        };
        return d
    } (c.EventDispatcher);
    c.NativeVersionController = f;
    f.prototype.__class__ = "egret.NativeVersionController"
})(egret || (egret = {}));
var RES; (function(c) {
    var f = function(c) {
        function d(b, a, d) {
            void 0 === a && (a = !1);
            void 0 === d && (d = !1);
            c.call(this, b, a, d);
            this.itemsTotal = this.itemsLoaded = 0;
            this.groupName = "";
            this.resItem = null
        }
        __extends(d, c);
        d.dispatchResourceEvent = function(b, a, c, e, f, t) {
            void 0 === c && (c = "");
            void 0 === e && (e = null);
            void 0 === f && (f = 0);
            void 0 === t && (t = 0);
            var k = egret.Event._getPropertyData(d);
            k.groupName = c;
            k.resItem = e;
            k.itemsLoaded = f;
            k.itemsTotal = t;
            egret.Event._dispatchByTarget(d, b, a, k)
        };
        d.ITEM_LOAD_ERROR = "itemLoadError";
        d.CONFIG_COMPLETE = "configComplete";
        d.CONFIG_LOAD_ERROR = "configLoadError";
        d.GROUP_PROGRESS = "groupProgress";
        d.GROUP_COMPLETE = "groupComplete";
        d.GROUP_LOAD_ERROR = "groupLoadError";
        return d
    } (egret.Event);
    c.ResourceEvent = f;
    f.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {})); (function(c) {
    var f = function() {
        function c(b, a, d) {
            this.groupName = "";
            this.data = null;
            this._loaded = !1;
            this.name = b;
            this.url = a;
            this.type = d
        }
        var d = c.prototype;
        Object.defineProperty(d, "loaded", {
            get: function() {
                return this.data ? this.data.loaded: this._loaded
            },
            set: function(b) {
                this.data && (this.data.loaded = b);
                this._loaded = b
            },
            enumerable: !0,
            configurable: !0
        });
        d.toString = function() {
            return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
        };
        c.TYPE_XML = "xml";
        c.TYPE_IMAGE = "image";
        c.TYPE_BIN = "bin";
        c.TYPE_TEXT = "text";
        c.TYPE_JSON = "json";
        c.TYPE_SHEET = "sheet";
        c.TYPE_FONT = "font";
        c.TYPE_SOUND = "sound";
        return c
    } ();
    c.ResourceItem = f;
    f.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {})); (function(c) {
    var f = function() {
        function e() {
            this.keyMap = {};
            this.groupDic = {};
            c.configInstance = this
        }
        var d = e.prototype;
        d.getGroupByName = function(b) {
            var a = [];
            if (!this.groupDic[b]) return a;
            b = this.groupDic[b];
            for (var c = b.length,
            d = 0; d < c; d++) a.push(this.parseResourceItem(b[d]));
            return a
        };
        d.getRawGroupByName = function(b) {
            return this.groupDic[b] ? this.groupDic[b] : []
        };
        d.createGroup = function(b, a, c) {
            void 0 === c && (c = !1);
            if (!c && this.groupDic[b] || !a || 0 == a.length) return ! 1;
            c = this.groupDic;
            for (var d = [], e = a.length, f = 0; f < e; f++) {
                var k = a[f],
                h = c[k];
                if (h) for (var k = h.length,
                l = 0; l < k; l++) {
                    var m = h[l]; - 1 == d.indexOf(m) && d.push(m)
                } else(m = this.keyMap[k]) ? -1 == d.indexOf(m) && d.push(m) : egret.$warn(2E3, k)
            }
            if (0 == d.length) return ! 1;
            this.groupDic[b] = d;
            return ! 0
        };
        d.parseConfig = function(b, a) {
            if (b) {
                var c = b.resources;
                if (c) for (var d = c.length,
                e = 0; e < d; e++) {
                    var f = c[e],
                    k = f.url;
                    k && -1 == k.indexOf("://") && (f.url = a + k);
                    this.addItemToKeyMap(f)
                }
                if (c = b.groups) for (d = c.length, e = 0; e < d; e++) {
                    for (var k = c[e], h = [], l = k.keys.split(","), m = l.length, n = 0; n < m; n++) f = l[n].trim(),
                    (f = this.keyMap[f]) && -1 == h.indexOf(f) && h.push(f);
                    this.groupDic[k.name] = h
                }
            }
        };
        d.addSubkey = function(b, a) {
            var c = this.keyMap[a];
            c && !this.keyMap[b] && (this.keyMap[b] = c)
        };
        d.addItemToKeyMap = function(b) {
            this.keyMap[b.name] || (this.keyMap[b.name] = b);
            if (b.hasOwnProperty("subkeys")) {
                var a = b.subkeys.split(",");
                b.subkeys = a;
                for (var c = a.length,
                d = 0; d < c; d++) {
                    var e = a[d];
                    null == this.keyMap[e] && (this.keyMap[e] = b)
                }
            }
        };
        d.getName = function(b) {
            return (b = this.keyMap[b]) ? b.name: ""
        };
        d.getType = function(b) {
            return (b = this.keyMap[b]) ? b.type: ""
        };
        d.getRawResourceItem = function(b) {
            return this.keyMap[b]
        };
        d.getResourceItem = function(b) {
            return (b = this.keyMap[b]) ? this.parseResourceItem(b) : null
        };
        d.parseResourceItem = function(b) {
            var a = new c.ResourceItem(b.name, b.url, b.type);
            a.data = b;
            return a
        };
        return e
    } ();
    c.ResourceConfig = f;
    f.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.thread = 2;
            this.loadingCount = 0;
            this.resInstance = this.callBack = null;
            this.groupTotalDic = {};
            this.numLoadedDic = {};
            this.itemListDic = {};
            this.groupErrorDic = {};
            this.retryTimesDic = {};
            this.maxRetryTimes = 3;
            this.failedList = [];
            this.priorityQueue = {};
            this.lazyLoadList = [];
            this.analyzerDic = {};
            this.queueIndex = 0
        }
        __extends(d, e);
        var b = d.prototype;
        b.isGroupInLoading = function(a) {
            return void 0 !== this.itemListDic[a]
        };
        b.loadGroup = function(a, b, d) {
            void 0 === d && (d = 0);
            if (!this.itemListDic[b] && b) if (a && 0 != a.length) {
                this.priorityQueue[d] ? this.priorityQueue[d].push(b) : this.priorityQueue[d] = [b];
                this.itemListDic[b] = a;
                d = a.length;
                for (var e = 0; e < d; e++) a[e].groupName = b;
                this.groupTotalDic[b] = a.length;
                this.numLoadedDic[b] = 0;
                this.next()
            } else egret.$warn(2001, b),
            a = new c.ResourceEvent(c.ResourceEvent.GROUP_LOAD_ERROR),
            a.groupName = b,
            this.dispatchEvent(a)
        };
        b.loadItem = function(a) {
            this.lazyLoadList.push(a);
            a.groupName = "";
            this.next()
        };
        b.next = function() {
            for (; this.loadingCount < this.thread;) {
                var a = this.getOneResourceItem();
                if (!a) break;
                this.loadingCount++;
                if (a.loaded) this.onItemComplete(a);
                else {
                    var b = this.analyzerDic[a.type];
                    b || (b = this.analyzerDic[a.type] = egret.Injector.getInstance(c.AnalyzerBase, a.type));
                    b.loadFile(a, this.onItemComplete, this)
                }
            }
        };
        b.getOneResourceItem = function() {
            if (0 < this.failedList.length) return this.failedList.shift();
            var a = Number.NEGATIVE_INFINITY,
            b;
            for (b in this.priorityQueue) a = Math.max(a, b);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
            b = a.length;
            for (var c, d = 0; d < b; d++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                c = this.itemListDic[a[this.queueIndex]];
                if (0 < c.length) break;
                this.queueIndex++
            }
            return 0 == c.length ? null: c.shift()
        };
        b.onItemComplete = function(a) {
            this.loadingCount--;
            var b = a.groupName;
            if (!a.loaded) {
                var d = this.retryTimesDic[a.name] || 1;
                if (d > this.maxRetryTimes) delete this.retryTimesDic[a.name],
                c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.ITEM_LOAD_ERROR, b, a);
                else {
                    this.retryTimesDic[a.name] = d + 1;
                    this.failedList.push(a);
                    this.next();
                    return
                }
            }
            if (b) {
                this.numLoadedDic[b]++;
                var d = this.numLoadedDic[b],
                e = this.groupTotalDic[b];
                a.loaded || (this.groupErrorDic[b] = !0);
                c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.GROUP_PROGRESS, b, a, d, e);
                d == e && (a = this.groupErrorDic[b], this.removeGroupName(b), delete this.groupTotalDic[b], delete this.numLoadedDic[b], delete this.itemListDic[b], delete this.groupErrorDic[b], a ? c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_LOAD_ERROR, b) : c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_COMPLETE, b))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        b.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var c = this.priorityQueue[b], d = c.length, e = 0, f = !1, d = c.length, h = 0; h < d; h++) {
                    if (c[h] == a) {
                        c.splice(e, 1);
                        f = !0;
                        break
                    }
                    e++
                }
                if (f) {
                    0 == c.length && delete this.priorityQueue[b];
                    break
                }
            }
        };
        return d
    } (egret.EventDispatcher);
    c.ResourceLoader = f;
    f.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.resourceConfig = null;
            this.resourceConfig = c.configInstance
        }
        __extends(d, e);
        var b = d.prototype;
        b.addSubkey = function(a, b) {
            this.resourceConfig.addSubkey(a, b)
        };
        b.loadFile = function(a, b, c) {};
        b.getRes = function(a) {};
        b.destroyRes = function(a) {
            return ! 1
        };
        d.getStringPrefix = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(0, b) : ""
        };
        d.getStringTail = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(b + 1) : ""
        };
        return d
    } (egret.HashObject);
    c.AnalyzerBase = f;
    f.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this.fileDic = {};
            this.resItemDic = [];
            this._dataFormat = egret.URLLoaderDataFormat.BINARY;
            this.recycler = new egret.Recycler
        }
        __extends(d, c);
        var b = d.prototype;
        b.loadFile = function(a, b, c) {
            if (this.fileDic[a.name]) b.call(c, a);
            else {
                var d = this.getLoader();
                this.resItemDic[d.hashCode] = {
                    item: a,
                    func: b,
                    thisObject: c
                };
                d.load(new egret.URLRequest(a.url))
            }
        };
        b.getLoader = function() {
            var a = this.recycler.pop();
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        };
        b.onLoadFinish = function(a) {
            var b = a.target,
            c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            var d = c.item,
            e = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            this.recycler.push(b);
            e.call(c.thisObject, d)
        };
        b.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b)
        };
        b.getRes = function(a) {
            return this.fileDic[a]
        };
        b.hasRes = function(a) {
            return null != this.getRes(a)
        };
        b.destroyRes = function(a) {
            return this.fileDic[a] ? (this.onResourceDestroy(this.fileDic[a]), delete this.fileDic[a], !0) : !1
        };
        b.onResourceDestroy = function(a) {};
        return d
    } (c.AnalyzerBase);
    c.BinAnalyzer = f;
    f.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(d, c);
        var b = d.prototype;
        b.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
        };
        b.onResourceDestroy = function(a) {
            a.dispose()
        };
        return d
    } (c.BinAnalyzer);
    c.ImageAnalyzer = f;
    f.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(d, c);
        d.prototype.analyzeData = function(b, a) {
            var c = b.name;
            if (!this.fileDic[c] && a) try {
                this.fileDic[c] = JSON.parse(a)
            } catch(d) {
                egret.$warn(1017, b.url, a)
            }
        };
        return d
    } (c.BinAnalyzer);
    c.JsonAnalyzer = f;
    f.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(d, c);
        return d
    } (c.BinAnalyzer);
    c.TextAnalyzer = f;
    f.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(e) {
        function d() {
            e.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(d, e);
        var b = d.prototype;
        b.getRes = function(a) {
            var b = this.fileDic[a];
            b || (b = this.textureMap[a]); ! b && (b = c.AnalyzerBase.getStringPrefix(a), b = this.fileDic[b]) && (a = c.AnalyzerBase.getStringTail(a), b = b.getTexture(a));
            return b
        };
        b.onLoadFinish = function(a) {
            var b = a.target,
            c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            var d = c.item,
            e = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            if (d.loaded) if ("string" == typeof b.data) {
                if (d.loaded = !1, a = this.analyzeConfig(d, b.data)) {
                    b = d.url;
                    d.url = a;
                    this._dataFormat = egret.URLLoaderDataFormat.TEXTURE;
                    this.loadFile(d, e, c.thisObject);
                    this._dataFormat = egret.URLLoaderDataFormat.TEXT;
                    d.url = b;
                    return
                }
            } else this.analyzeBitmap(d, b.data);
            this.recycler.push(b);
            e.call(c.thisObject, d)
        };
        b.analyzeConfig = function(a, b) {
            var c = a.name,
            d, e = "";
            try {
                d = JSON.parse(b)
            } catch(f) {
                egret.$warn(1017, a.url, b)
            }
            d && (this.sheetMap[c] = d, e = this.getRelativePath(a.url, d.file));
            return e
        };
        b.analyzeBitmap = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) {
                var d = this.sheetMap[c];
                delete this.sheetMap[c];
                d = this.parseSpriteSheet(b, d, a.data && a.data.subkeys ? "": c);
                this.fileDic[c] = d
            }
        };
        b.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var c = a.lastIndexOf("/");
            return a = -1 != c ? a.substring(0, c + 1) + b: b
        };
        b.parseSpriteSheet = function(a, b, c) {
            b = b.frames;
            if (!b) return null;
            var d = new egret.SpriteSheet(a),
            e = this.textureMap,
            f;
            for (f in b) {
                var h = b[f];
                a = d.createTexture(f, h.x, h.y, h.w, h.h, h.offX, h.offY, h.sourceW, h.sourceH);
                h.scale9grid && (h = h.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3])));
                null == e[f] && (e[f] = a, c && this.addSubkey(f, c))
            }
            return d
        };
        b.destroyRes = function(a) {
            var b = this.fileDic[a];
            if (b) {
                delete this.fileDic[a];
                for (var c in b._textureMap) this.textureMap[c] && delete this.textureMap[c];
                this.onResourceDestroy(b);
                return ! 0
            }
            return ! 1
        };
        b.onResourceDestroy = function(a) {
            a.dispose()
        };
        return d
    } (c.BinAnalyzer);
    c.SheetAnalyzer = f;
    f.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this)
        }
        __extends(d, c);
        var b = d.prototype;
        b.analyzeConfig = function(a, b) {
            var c = a.name,
            d, e = "";
            try {
                d = JSON.parse(b)
            } catch(f) {}
            d ? e = this.getRelativePath(a.url, d.file) : (d = b, e = this.getTexturePath(a.url, d));
            this.sheetMap[c] = d;
            return e
        };
        b.analyzeBitmap = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) {
                var d = this.sheetMap[c];
                delete this.sheetMap[c];
                d = new egret.BitmapFont(b, d);
                this.fileDic[c] = d
            }
        };
        b.getTexturePath = function(a, b) {
            var c = "",
            d = b.split("\n")[2],
            e = d.indexOf('file="'); - 1 != e && (d = d.substring(e + 6), e = d.indexOf('"'), c = d.substring(0, e));
            a = a.split("\\").join("/");
            e = a.lastIndexOf("/");
            return a = -1 != e ? a.substring(0, e + 1) + c: c
        };
        b.onResourceDestroy = function(a) {
            a.dispose()
        };
        return d
    } (c.SheetAnalyzer);
    c.FontAnalyzer = f;
    f.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(d, c);
        d.prototype.analyzeData = function(b, a) {
            var c = b.name; ! this.fileDic[c] && a && (this.fileDic[c] = a, (c = b.data) && c.soundType ? a.preload(c.soundType) : a.preload(egret.Sound.EFFECT))
        };
        return d
    } (c.BinAnalyzer);
    c.SoundAnalyzer = f;
    f.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(d, c);
        d.prototype.analyzeData = function(b, a) {
            var c = b.name;
            if (!this.fileDic[c] && a) try {
                var d = egret.XML.parse(a);
                this.fileDic[c] = d
            } catch(e) {}
        };
        return d
    } (c.BinAnalyzer);
    c.XMLAnalyzer = f;
    f.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {})); (function(c) {
    c.loadConfig = function(c, b, a) {
        void 0 === b && (b = "");
        void 0 === a && (a = "json");
        e.loadConfig(c, b, a)
    };
    c.loadGroup = function(c, b) {
        void 0 === b && (b = 0);
        e.loadGroup(c, b)
    };
    c.isGroupLoaded = function(c) {
        return e.isGroupLoaded(c)
    };
    c.getGroupByName = function(c) {
        return e.getGroupByName(c)
    };
    c.createGroup = function(c, b, a) {
        void 0 === a && (a = !1);
        return e.createGroup(c, b, a)
    };
    c.hasRes = function(c) {
        return e.hasRes(c)
    };
    c.parseConfig = function(c, b) {
        void 0 === b && (b = "");
        e.parseConfig(c, b)
    };
    c.getRes = function(c) {
        return e.getRes(c)
    };
    c.getResAsync = function(c, b, a) {
        e.getResAsync(c, b, a)
    };
    c.getResByUrl = function(c, b, a, g) {
        void 0 === g && (g = "");
        e.getResByUrl(c, b, a, g)
    };
    c.destroyRes = function(c, b) {
        return e.destroyRes(c, b)
    };
    c.setMaxLoadingThread = function(c) {
        e.setMaxLoadingThread(c)
    };
    c.setMaxRetryTimes = function(c) {
        e.setMaxRetryTimes(c)
    };
    c.addEventListener = function(c, b, a, g, f) {
        void 0 === g && (g = !1);
        void 0 === f && (f = 0);
        e.addEventListener(c, b, a, g, f)
    };
    c.removeEventListener = function(c, b, a, g) {
        void 0 === g && (g = !1);
        e.removeEventListener(c, b, a, g)
    };
    var f = function(d) {
        function b() {
            d.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(b, d);
        var a = b.prototype;
        a.getAnalyzerByType = function(a) {
            var b = this.analyzerDic[a];
            b || (b = this.analyzerDic[a] = egret.Injector.getInstance(c.AnalyzerBase, a));
            return b
        };
        a.init = function() {
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(c.AnalyzerBase, c.BinAnalyzer, c.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(c.AnalyzerBase, c.ImageAnalyzer, c.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(c.AnalyzerBase, c.TextAnalyzer, c.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(c.AnalyzerBase, c.JsonAnalyzer, c.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(c.AnalyzerBase, c.SheetAnalyzer, c.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(c.AnalyzerBase, c.FontAnalyzer, c.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(c.AnalyzerBase, c.SoundAnalyzer, c.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_XML) || egret.Injector.mapClass(c.AnalyzerBase, c.XMLAnalyzer, c.ResourceItem.TYPE_XML);
            this.resConfig = new c.ResourceConfig;
            this.resLoader = new c.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(c.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
            this.resLoader.addEventListener(c.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
        };
        a.loadConfig = function(a, b, c) {
            void 0 === c && (c = "json");
            this.configItemList.push({
                url: a,
                resourceRoot: b,
                type: c
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        };
        a.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var a = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = a;
            for (var d = a.length,
            e = [], f = 0; f < d; f++) {
                var k = a[f],
                k = new c.ResourceItem(k.url, k.url, k.type);
                e.push(k)
            }
            this.resLoader.loadGroup(e, b.GROUP_CONFIG, Number.MAX_VALUE)
        };
        a.isGroupLoaded = function(a) {
            return - 1 != this.loadedGroups.indexOf(a)
        };
        a.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        a.loadGroup = function(a, b) {
            void 0 === b && (b = 0);
            if ( - 1 != this.loadedGroups.indexOf(a)) c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_COMPLETE, a);
            else if (!this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
                var d = this.resConfig.getGroupByName(a);
                this.resLoader.loadGroup(d, a, b)
            } else this.groupNameList.push({
                name: a,
                priority: b
            })
        };
        a.createGroup = function(a, b, c) {
            void 0 === c && (c = !1);
            if (c) {
                var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
            }
            return this.resConfig.createGroup(a, b, c)
        };
        a.onGroupComp = function(a) {
            if (a.groupName == b.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var d = 0; d < a; d++) {
                    var e = this.loadingConfigList[d],
                    f = this.getAnalyzerByType(e.type),
                    k = f.getRes(e.url);
                    f.destroyRes(e.url);
                    this.resConfig.parseConfig(k, e.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList = null;
                c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_COMPLETE);
                this.loadDelayGroups()
            } else this.loadedGroups.push(a.groupName),
            this.dispatchEvent(a)
        };
        a.loadDelayGroups = function() {
            var a = this.groupNameList;
            this.groupNameList = [];
            for (var b = a.length,
            c = 0; c < b; c++) {
                var d = a[c];
                this.loadGroup(d.name, d.priority)
            }
        };
        a.onGroupError = function(a) {
            a.groupName == b.GROUP_CONFIG ? (this.loadingConfigList = null, c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
        };
        a.hasRes = function(a) {
            var b = this.resConfig.getType(a);
            return "" == b && (a = c.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(a), "" == b) ? !1 : !0
        };
        a.parseConfig = function(a, b) {
            this.resConfig.parseConfig(a, b);
            this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
        };
        a.getRes = function(a) {
            var b = this.resConfig.getType(a);
            return "" == b && (b = c.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(b), "" == b) ? null: this.getAnalyzerByType(b).getRes(a)
        };
        a.getResAsync = function(a, b, d) {
            var e = this.resConfig.getType(a),
            f = this.resConfig.getName(a);
            if ("" == e && (f = c.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(f), "" == e)) {
                b.call(d, null);
                return
            } (e = this.getAnalyzerByType(e).getRes(a)) ? b.call(d, e) : (a = {
                key: a,
                compFunc: b,
                thisObject: d
            },
            this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
        };
        a.getResByUrl = function(a, b, d, e) {
            void 0 === e && (e = "");
            if (a) {
                e || (e = this.getTypeByUrl(a));
                var f = this.getAnalyzerByType(e).getRes(a);
                f ? b.call(d, f) : (b = {
                    key: a,
                    compFunc: b,
                    thisObject: d
                },
                this.asyncDic[a] ? this.asyncDic[a].push(b) : (this.asyncDic[a] = [b], a = new c.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
            } else b.call(d, null)
        };
        a.getTypeByUrl = function(a) { (a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
            switch (a) {
            case c.ResourceItem.TYPE_XML:
            case c.ResourceItem.TYPE_JSON:
            case c.ResourceItem.TYPE_SHEET:
                break;
            case "png":
            case "jpg":
            case "gif":
            case "jpeg":
            case "bmp":
                a = c.ResourceItem.TYPE_IMAGE;
                break;
            case "fnt":
                a = c.ResourceItem.TYPE_FONT;
                break;
            case "txt":
                a = c.ResourceItem.TYPE_TEXT;
                break;
            case "mp3":
            case "ogg":
            case "mpeg":
            case "wav":
            case "m4a":
            case "mp4":
            case "aiff":
            case "wma":
            case "mid":
                a = c.ResourceItem.TYPE_SOUND;
                break;
            default:
                a = c.ResourceItem.TYPE_BIN
            }
            return a
        };
        a.onResourceItemComp = function(a) {
            var b = this.asyncDic[a.name];
            delete this.asyncDic[a.name];
            a = this.getAnalyzerByType(a.type);
            for (var c = b.length,
            d = 0; d < c; d++) {
                var e = b[d],
                f = a.getRes(e.key);
                e.compFunc.call(e.thisObject, f, e.key)
            }
        };
        a.destroyRes = function(a, b) {
            void 0 === b && (b = !0);
            var c = this.resConfig.getRawGroupByName(a);
            if (c && 0 < c.length) {
                var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1);
                for (var e = c.length,
                f = 0; f < e; f++) if (d = c[f], b || !this.isResInLoadedGroup(d.name)) {
                    d.loaded = !1;
                    var l = this.getAnalyzerByType(d.type);
                    l.destroyRes(d.name);
                    this.removeLoadedGroupsByItemName(d.name)
                }
                return ! 0
            }
            c = this.resConfig.getType(a);
            if ("" == c) return ! 1;
            d = this.resConfig.getRawResourceItem(a);
            d.loaded = !1;
            l = this.getAnalyzerByType(c);
            c = l.destroyRes(a);
            this.removeLoadedGroupsByItemName(d.name);
            return c
        };
        a.removeLoadedGroupsByItemName = function(a) {
            for (var b = this.loadedGroups,
            c = b.length,
            d = 0; d < c; d++) for (var e = this.resConfig.getRawGroupByName(b[d]), f = e.length, l = 0; l < f; l++) if (e[l].name == a) {
                b.splice(d, 1);
                d--;
                c = b.length;
                break
            }
        };
        a.isResInLoadedGroup = function(a) {
            for (var b = this.loadedGroups,
            c = b.length,
            d = 0; d < c; d++) for (var e = this.resConfig.getRawGroupByName(b[d]), f = e.length, l = 0; l < f; l++) if (e[l].name == a) return ! 0;
            return ! 1
        };
        a.setMaxLoadingThread = function(a) {
            1 > a && (a = 1);
            this.resLoader.thread = a
        };
        a.setMaxRetryTimes = function(a) {
            a = Math.max(a, 0);
            this.resLoader.maxRetryTimes = a
        };
        b.GROUP_CONFIG = "RES__CONFIG";
        return b
    } (egret.EventDispatcher);
    f.prototype.__class__ = "RES.Resource";
    var e = new f
})(RES || (RES = {}));
var neoges; (function(c) {
    var f = function(e) {
        function d(a) {
            void 0 === a && (a = null);
            e.call(this);
            this._useMultiPoints = !1;
            this._stats = -1;
            this._location = new egret.Point;
            this._target = a;
            null != this._target && this.addHostToManager()
        }
        __extends(d, e);
        var b = d.prototype;
        Object.defineProperty(b, "target", {
            get: function() {
                return this._target
            },
            set: function(a) {
                this._target != a && (this._stats = -1, null != this._target && this.removeHostFromManager(), this._target = a, null != this._target && this.addHostToManager())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b, "location", {
            get: function() {
                return this._location.clone()
            },
            enumerable: !0,
            configurable: !0
        });
        b.addHostToManager = function() {
            c.GestureManager.addHost(this)
        };
        b.removeHostFromManager = function() {
            c.GestureManager.removeHost(this)
        };
        b.onTouch = function(a) {};
        b.gestureBegan = function() {
            this._stats = 1;
            var a = new c.GestureEvent(c.GestureEvent.BEGAN);
            a.host = this._target;
            this.dispatchEvent(a)
        };
        b.gestureUpdate = function() {
            this._stats = 2;
            var a = new c.GestureEvent(c.GestureEvent.UPDATE);
            a.host = this._target;
            this.dispatchEvent(a)
        };
        b.gestureEnded = function() {
            this._stats = 3;
            var a = new c.GestureEvent(c.GestureEvent.ENDED);
            a.host = this._target;
            this.dispatchEvent(a);
            this._stats = -1
        };
        b.gestureFailed = function() {
            var a = new c.GestureEvent(c.GestureEvent.FAILED);
            a.host = this._target;
            this.dispatchEvent(a);
            this._stats = -1
        };
        b.subtract = function(a, b) {
            var c = new egret.Point;
            c.x = a.x - b.x;
            c.y = a.y - b.y;
            return c
        };
        b.getPointLength = function(a) {
            var b = 0,
            b = new egret.Point(0, 0);
            return b = egret.Point.distance(a, b)
        };
        b.dispose = function() {
            this._stats = -1;
            c.GestureManager.removeHost(this);
            this._target = null
        };
        return d
    } (egret.EventDispatcher);
    c.AbstractGesture = f;
    f.prototype.__class__ = "neoges.AbstractGesture"
})(neoges || (neoges = {}));
var Main = function(c) {
    function f() {
        c.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        window.home = this.shit;
        window.home_context = this
    }
    __extends(f, c);
    var e = f.prototype;
    e.onAddToStage = function(c) {
        this.loadingView = new LoadingUI;
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        /iPhone/i.test(navigator.userAgent) ? (RES.loadConfig("resource/assets/640_sprite/resource.json", window.meiriq_game.resourceCDN + "resource/assets/640_sprite/"), f.sFactor = 1) : (RES.loadConfig("resource/assets/320_sprite/resource.json", window.meiriq_game.resourceCDN + "resource/assets/320_sprite/"), f.sFactor = 0.5);
        new ultil.GameProfiler(this)
    };
    e.onConfigComplete = function(c) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload")
    };
    e.onResourceLoadComplete = function(c) {
        "preload" == c.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene())
    };
    e.onResourceProgress = function(c) {
        "preload" == c.groupName && this.loadingView.setProgress(c.itemsLoaded, c.itemsTotal)
    };
    e.createGameScene = function() {
        var c = new createGame;
        this.addChild(c)
    };
    e.createBitmapByName = function(c) {
        var b = new egret.Bitmap;
        c = RES.getRes(c);
        b.texture = c;
        return b
    };
    e.startAnimation = function(c) {
        var b = this.textContainer,
        a = -1,
        e = this,
        f = function() {
            a++;
            a >= c.length && (a = 0);
            e.changeDescription(b, c[a]);
            var s = egret.Tween.get(b);
            s.to({
                alpha: 1
            },
            200);
            s.wait(2E3);
            s.to({
                alpha: 0
            },
            200);
            s.call(f, this)
        };
        f()
    };
    e.changeDescription = function(c, b) {
        c.removeChildren();
        for (var a = 0,
        e = 0; e < b.length; e++) {
            var f = b[e],
            s = new egret.TextField;
            s.x = a;
            s.anchorX = s.anchorY = 0;
            s.textColor = parseInt(f.textColor);
            s.text = f.text;
            s.size = 40;
            c.addChild(s);
            a += s.width
        }
    };
    e.shit = function() {
        this.removeChildren();
        this.createGameScene()
    };
    return f
} (egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main"; (function(c) {
    var f = function() {
        function c() {
            this._collection = []
        }
        var d = c.prototype;
        d.clone = function(b) {
            var a = this._collection.pop();
            null == a && (a = new egret.TouchEvent(b.type));
            for (var c in b) a[c] = b[c];
            return a
        };
        d.setProperties = function(b, a) {
            for (var c in b) a[c] = b[c];
            return a
        };
        d.reclaim = function(b) { - 1 == this._collection.indexOf(b) && this._collection.push(b)
        };
        d.reclaimAll = function(b) {
            for (; 0 < b.length;) this.reclaim(b[0]),
            b.shift()
        };
        return c
    } ();
    c.EventPool = f;
    f.prototype.__class__ = "neoges.EventPool"
})(neoges || (neoges = {}));
var ultil; (function(c) {
    var f = function() {
        function c() {}
        c.SCORE = 0;
        c.FOOD = ["cake", "pizza", "shoujuan", "Spinach", "sushi"];
        c.WUDI = !1;
        c.FIRST = !1;
        c.SPEED = 1;
        c.BIGMOMSPEED = 1;
        c.FIRSTTIME = !1;
        c.CANMOVE = !1;
        return c
    } ();
    c.status = f;
    f.prototype.__class__ = "ultil.status";
    c.getStr = function() {
        return c.status.FOOD[Math.floor(Math.random() * (c.status.FOOD.length + 1))]
    }
})(ultil || (ultil = {})); (function(c) {
    var f = function() {
        return function() {}
    } ();
    c.util = f;
    f.prototype.__class__ = "ultil.util";
    c.hitTest = function(c, d) {
        var b = c.getBounds(),
        a = d.getBounds();
        b.x = c.x;
        b.y = c.y;
        a.x = d.x;
        a.y = d.y;
        return b.intersects(a)
    };
    c.createBitmapByName = function(c) {
        var d = new egret.Bitmap;
        c = RES.getRes(c);
        d.texture = c;
        return d
    };
    c.createRandomBack = function() {
        var c = new egret.Bitmap,
        d = RES.getRes(["game-bg1", "game-bg2", "game-bg3"][Math.floor(3 * Math.random())]);
        c.texture = d;
        return c
    };
    c.stageWidth = function(c) {
        void 0 === c && (c = 1);
        return egret.MainContext.instance.stage.stageWidth * c
    };
    c.stageHeight = function(c) {
        void 0 === c && (c = 1);
        return egret.MainContext.instance.stage.stageHeight * c
    };
    c.transParent = function(c) {
        var d;
        this.parent && (this.parent.removeChild(this), d = this.parent.localToGlobal(this.x, this.y));
        c.addChild(this);
        d && (c = c.globalToLocal(d.x, d.y), this.x = c.x, this.y = c.y)
    }
})(ultil || (ultil = {})); (function(c) {
    var f = function() {
        function e() {}
        e.addHost = function(d) {
            var b = c.GestureManager.hostCollection; - 1 != b.indexOf(d) ? console.warn("\u4e0d\u8981\u91cd\u590d\u6dfb\u52a0\u624b\u52bf\u5b9e\u4f8b") : (c.GestureManager.registerEvent(d.target), b.push(d), c.GestureManager.eventDict[d.target.hashCode] = [])
        };
        e.removeHost = function(d) {
            var b = c.GestureManager.hostCollection,
            a = b.indexOf(d); - 1 == a ? console.warn("\u4e0d\u5b58\u5728\u8fd9\u4e2a\u5b9e\u4f8b") : (b.slice(a, 1), c.GestureManager.removeEvent(d.target), c.GestureManager.eventDict[d.target.hashCode] = null)
        };
        e.registerEvent = function(d) {
            d.addEventListener(egret.TouchEvent.TOUCH_BEGIN, c.GestureManager.touchedHandler, d)
        };
        e.removeEvent = function(d) {
            d.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, c.GestureManager.touchedHandler, d)
        };
        e.touchedHandler = function(d) {
            var b, a = egret.MainContext.instance.stage;
            d.type == egret.TouchEvent.TOUCH_BEGIN ? (b = d.currentTarget, c.GestureManager.currentTouchObject = b, a.removeEventListener(egret.TouchEvent.TOUCH_MOVE, c.GestureManager.touchedHandler, a), a.addEventListener(egret.TouchEvent.TOUCH_MOVE, c.GestureManager.touchedHandler, a), a.removeEventListener(egret.TouchEvent.TOUCH_END, c.GestureManager.touchedHandler, a), a.addEventListener(egret.TouchEvent.TOUCH_END, c.GestureManager.touchedHandler, a), a.removeEventListener(egret.Event.LEAVE_STAGE, c.GestureManager.leaveStageHandler, a), a.addEventListener(egret.Event.LEAVE_STAGE, c.GestureManager.leaveStageHandler, a)) : b = c.GestureManager.currentTouchObject;
            null == c.GestureManager.eventDict[b.hashCode] && (c.GestureManager.eventDict[b.hashCode] = []);
            var a = c.GestureManager.eventDict[b.hashCode],
            e;
            c.GestureManager.hasTouchEvent(d) ? (e = c.GestureManager.getTouchEventByID(d.touchPointID, b), c.GestureManager.evtPool.setProperties(d, e)) : (e = c.GestureManager.evtPool.clone(d), a.push(e));
            d = c.GestureManager.hostCollection;
            for (var f, s = 0; s < d.length; s++) if (f = d[s], f.target == b) f.onTouch(a);
            e.type == egret.TouchEvent.TOUCH_END && c.GestureManager.removeAllEvent();
            c.GestureManager.showTouchPoint && c.GestureManager.drawTouchPoint()
        };
        e.hasTouchEvent = function(d) {
            for (var b = c.GestureManager.eventDict[c.GestureManager.currentTouchObject.hashCode], a = 0; a < b.length; a++) if (b[a].touchPointID == d.touchPointID) return ! 0;
            return ! 1
        };
        e.getTouchEventByID = function(d, b) {
            for (var a = c.GestureManager.eventDict[b.hashCode], e = 0; e < a.length; e++) if (a[e].touchPointID == d) return a[e];
            return null
        };
        e.leaveStageHandler = function(d) {
            c.GestureManager.removeAllEvent()
        };
        e.removeAllEvent = function() {
            var d = egret.MainContext.instance.stage,
            b;
            for (b in c.GestureManager.eventDict) {
                var a = c.GestureManager.eventDict[b];
                null != a && c.GestureManager.evtPool.reclaimAll(a)
            }
            d.removeEventListener(egret.TouchEvent.TOUCH_MOVE, c.GestureManager.touchedHandler, d);
            d.removeEventListener(egret.TouchEvent.TOUCH_END, c.GestureManager.touchedHandler, d);
            d.removeEventListener(egret.Event.LEAVE_STAGE, c.GestureManager.leaveStageHandler, d);
            c.GestureManager.drawTouchPoint()
        };
        e.drawTouchPoint = function() {
            if (null != c.GestureManager.currentTouchObject) {
                var d = c.GestureManager.drawLayer,
                b = egret.MainContext.instance.stage;
                null == d.stage && b.addChild(d);
                d = d.graphics;
                d.clear();
                d.beginFill(0, 0.4);
                for (var a in c.GestureManager.eventDict) if (c.GestureManager.currentTouchObject.hashCode == a) {
                    var e = c.GestureManager.eventDict[a];
                    if (null != e && 0 < e.length) for (var f = 0; f < e.length; f++) b = e[f],
                    d.drawCircle(b.stageX, b.stageY, 10)
                }
                e = c.GestureManager.simulatePoints;
                for (f = 0; f < e.length; f++) b = e[f],
                d.drawCircle(b.stageX, b.stageY, 10);
                d.endFill()
            }
        };
        e.showTouchPoint = !1;
        e.simulateMultitouch = !1;
        e.simulatePoints = [];
        e.hostCollection = [];
        e.eventDict = {};
        e.evtPool = new c.EventPool;
        e.drawLayer = new egret.Sprite;
        return e
    } ();
    c.GestureManager = f;
    f.prototype.__class__ = "neoges.GestureManager"
})(neoges || (neoges = {})); (function(c) {
    var f = function(c) {
        function d(b) {
            c.call(this, b)
        }
        __extends(d, c);
        d.BEGAN = "began";
        d.UPDATE = "update";
        d.ENDED = "ended";
        d.FAILED = "failed";
        return d
    } (egret.Event);
    c.GestureEvent = f;
    f.prototype.__class__ = "neoges.GestureEvent"
})(neoges || (neoges = {}));
var prop; (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this.score = new egret.BitmapText;
            this.score.font = RES.getRes("scoreNumber_fnt");
            this.anchorX = this.anchorY = 0.5;
            this.x = ultil.stageWidth() / 2;
            this.y = 80 * Main.sFactor;
            this.score.text = "" + ultil.status.SCORE;
            0.5 == Main.sFactor && (this.score.scaleX = this.score.scaleY = 0.5);
            this.addChild(this.score)
        }
        __extends(d, c);
        d.prototype.upDateScore = function(b) {
            ultil.status.SCORE += b;
            this.score.text = "" + ultil.status.SCORE
        };
        return d
    } (egret.DisplayObjectContainer);
    c.score = f;
    f.prototype.__class__ = "prop.score"
})(prop || (prop = {})); (function(c) {
    var f = function() {
        function c() {}
        Object.defineProperty(c, "$60", {
            get: function() {
                return e.s_fps.toFixed(0)
            },
            enumerable: !0,
            configurable: !0
        });
        c.rateoffest = function(b) {
            void 0 === b && (b = 60);
            return b / c.$60
        };
        Object.defineProperty(c, "counttime", {
            get: function() {
                return e.s_time
            },
            enumerable: !0,
            configurable: !0
        });
        return c
    } ();
    c.FPS = f;
    f.prototype.__class__ = "ultil.FPS";
    var e = function() {
        function c(a) {
            this._countTime = this._lastTime = this._fps = 0;
            this.run(a)
        }
        var b = c.prototype;
        b.run = function(a) {
            a.addEventListener(egret.Event.ENTER_FRAME, this.calculateFPS, this)
        };
        b.calculateFPS = function() {
            var a = egret.getTimer(),
            b = a - this._lastTime;
            this._countTime += b;
            1E3 <= this._countTime && (this._countTime = 0, c.s_time++);
            this._fps = 1E3 / b;
            this._lastTime = a;
            c.s_fps = this._fps
        };
        c.s_time = 0;
        c.s_fps = 0;
        return c
    } ();
    c.GameProfiler = e;
    e.prototype.__class__ = "ultil.GameProfiler"
})(ultil || (ultil = {})); (function(c) {
    var f = function(e) {
        function d(a) {
            void 0 === a && (a = null);
            e.call(this, a);
            this._useMultiPoints = !1
        }
        __extends(d, e);
        var b = d.prototype;
        b.onTouch = function(a) {
            1 < a.length || c.GestureManager.simulateMultitouch || (a = a[0], a.type == egret.TouchEvent.TOUCH_BEGIN ? (this.gestureBegan(), this._startPoint = new egret.Point(a.stageX, a.stageY)) : a.type == egret.TouchEvent.TOUCH_MOVE ? (this._endPoint = new egret.Point(a.stageX, a.stageY), this.gestureUpdate()) : a.type == egret.TouchEvent.TOUCH_END && this.gestureEnded())
        };
        b.gestureUpdate = function() {
            this._stats = 2;
            var a = new c.GestureEvent(c.GestureEvent.UPDATE);
            a.host = this.target;
            a.offsetX = this._endPoint.x - this._startPoint.x;
            a.offsetY = this._endPoint.y - this._startPoint.y;
            this.dispatchEvent(a)
        };
        return d
    } (c.AbstractGesture);
    c.PanGesture = f;
    f.prototype.__class__ = "neoges.PanGesture"
})(neoges || (neoges = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            this.vy = 16;
            this.vx = 6;
            var a = RES.getRes("animate"),
            b = RES.getRes("animation"),
            a = new egret.MovieClipDataFactory(a, b);
            this.bigmom = new egret.MovieClip(a.generateMovieClipData("aunt"));
            this.bigmom.frameRate = 10;
            this.bigmom.play( - 1);
            this.addChild(this.bigmom);
            this.x = Math.random() * ultil.stageWidth() - 100 * Main.sFactor;
            this.y = -this.height - 600
        }
        __extends(d, c);
        var b = d.prototype;
        b.move = function() {
            this.y += this.vy * ultil.status.SPEED * ultil.status.BIGMOMSPEED * ultil.FPS.rateoffest() * Main.sFactor;
            this.y > ultil.stageHeight() && (this.y = -this.width - 300 * Math.random() * Main.sFactor, this.x = Math.random() * ultil.stageWidth() - 100 * Main.sFactor);
            Math.abs(this.y - ultil.status.PY) < 700 * Main.sFactor && Math.abs(this.y - ultil.status.PY) > 50 * Main.sFactor && Math.abs(this.x - ultil.status.PX) > 100 * Main.sFactor && (this.x = 0 < this.x - ultil.status.PX ? this.x - this.vx * ultil.FPS.rateoffest() * Main.sFactor: this.x + this.vx * ultil.FPS.rateoffest() * Main.sFactor)
        };
        b.collision = function() {
            return this.x + 15 * Main.sFactor < ultil.status.CXR && this.y + this.height - 15 * Main.sFactor > ultil.status.CYU && this.x + this.width - 15 * Main.sFactor > ultil.status.CXL && this.y + 15 * Main.sFactor < ultil.status.CYD ? !0 : !1
        };
        return d
    } (egret.DisplayObjectContainer);
    c.bigmom = f;
    f.prototype.__class__ = "prop.bigmom"
})(prop || (prop = {})); (function(c) {
    var f = function(e) {
        function d(b) {
            e.call(this);
            this.chew = new egret.Bitmap(b);
            this.addChild(this.chew)
        }
        __extends(d, e);
        d.produce = function(b) {
            null == c.chewingum.cacheDict[b] && (c.chewingum.cacheDict[b] = []);
            var a = c.chewingum.cacheDict[b],
            a = 0 < a.length ? a.pop() : new c.chewingum(RES.getRes(b));
            a.text = b;
            return a
        };
        d.reclaim = function(b, a) {
            null == c.chewingum.cacheDict[a] && (c.chewingum.cacheDict[a] = []);
            var d = c.chewingum.cacheDict[a]; - 1 == d.indexOf(b) && d.push(b)
        };
        d.cacheDict = {};
        return d
    } (egret.DisplayObjectContainer);
    c.chewingum = f;
    f.prototype.__class__ = "prop.chewingum"
})(prop || (prop = {})); (function(c) {
    var f = function(c) {
        function d() {
            c.call(this);
            var a = RES.getRes("animate"),
            b = RES.getRes("animation");
            this.mcf = new egret.MovieClipDataFactory(a, b);
            this.superm = new egret.MovieClip(this.mcf.generateMovieClipData("gogo"));
            this.superm.play( - 1);
            this.superm.frameRate = 8;
            this.addChild(this.superm);
            this.anchorX = this.anchorY = 0.5
        }
        __extends(d, c);
        var b = d.prototype;
        b.changeState = function(a) {
            this.superm.movieClipData = this.mcf.generateMovieClipData(a);
            this.superm.play( - 1)
        };
        b.bianshen = function() {
            this.superm.movieClipData = this.mcf.generateMovieClipData("bianshen");
            this.superm.play( - 1)
        };
        b.bianshencomplete = function() {
            this.superm.movieClipData = this.mcf.generateMovieClipData("superman");
            this.superm.play( - 1)
        };
        b.nomalC = function() {
            this.superm.movieClipData = this.mcf.generateMovieClipData("gogo");
            this.superm.play( - 1)
        };
        b.bianshenend = function() {
            this.superm.movieClipData = this.mcf.generateMovieClipData("supermanstop");
            this.superm.play( - 1)
        };
        return d
    } (egret.DisplayObjectContainer);
    c.superman = f;
    f.prototype.__class__ = "prop.superman"
})(prop || (prop = {})); (function(c) {
    var f = function(e) {
        function d(b) {
            e.call(this);
            this.v0 = 5.5;
            this.bmp = new egret.Bitmap(b);
            this.anchorX = this.anchorY = 0.5;
            this.addChild(this.bmp);
            switch (this.text) {
            case "cake":
                this.st = "+8";
                this.score = 8;
                break;
            case "pizza":
                this.st = "+6";
                this.score = 6;
                break;
            case "shoujuan":
                this.st = "+4";
                this.score = 4;
                break;
            case "Spinach":
                this.st = "+2";
                this.score = 2;
                break;
            case "sushi":
                this.st = "+2",
                this.score = 2
            }
        }
        __extends(d, e);
        d.produce = function(b) {
            null == c.vegetable.cacheDict[b] && (c.vegetable.cacheDict[b] = []);
            var a = c.vegetable.cacheDict[b],
            a = 0 < a.length ? a.pop() : new c.vegetable(RES.getRes(b));
            a.text = b;
            return a
        };
        d.reclaim = function(b, a) {
            null == c.vegetable.cacheDict[a] && (c.vegetable.cacheDict[a] = []);
            var d = c.vegetable.cacheDict[a]; - 1 == d.indexOf(b) && d.push(b)
        };
        d.cacheDict = {};
        return d
    } (egret.DisplayObjectContainer);
    c.vegetable = f;
    f.prototype.__class__ = "prop.vegetable"
})(prop || (prop = {}));
var LoadingUI = function(c) {
    function f() {
        c.call(this);
        this.createView()
    }
    __extends(f, c);
    var e = f.prototype;
    e.createView = function() {
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 640;
        this.textField.height = 100;
        this.textField.textAlign = "center"
    };
    e.setProgress = function(c, b) {
        this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + c + "/" + b
    };
    return f
} (egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var createGame = function(c) {
    function f() {
        c.call(this);
        this.speed = 10;
        this.vets = [];
        this.gums = [];
        this.lastOffsetX = 0;
        this.first = !1;
        window.pause = this.allPause;
        window.resume = this.allResume;
        window.pause_context = this;
        window.resume_context = this;
        this.resit();
        var d = ultil.createBitmapByName("bgc");
        RES.getRes("bgc");
        this.textureHeight = d.height - 5;
        this.rowCount = Math.ceil(ultil.stageHeight() / this.textureHeight) + 1;
        this.bmpArr = [];
        for (d = 0; d < this.rowCount; d++) {
            var b = ultil.createBitmapByName("bgc");
            b.width = ultil.stageWidth();
            b.height = ultil.stageHeight();
            b.y = this.textureHeight * d - (this.textureHeight * this.rowCount - ultil.stageHeight());
            this.bmpArr.push(b);
            this.addChildAt(b, 0)
        }

        this.title = ultil.createBitmapByName("title");
        this.title.anchorX = this.title.anchorY = 0.5;
        this.addChild(this.title);
        this.title.x = ultil.stageWidth() / 2;
        this.title.y = -this.title.height;

        this.help = ultil.createBitmapByName("help");
        this.help.anchorX = this.help.anchorY = 0.5;
        this.addChild(this.help);
        this.help.x = ultil.stageWidth() / 2;
        this.help.y = ultil.stageHeight() + 150;
        this.help.touchEnabled = !0;
        this.help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameHelp, this);

        this.begin = ultil.createBitmapByName("begin");
        this.addChild(this.begin);
        this.begin.x = ultil.stageWidth() / 2;
        this.begin.y = 733 * Main.sFactor;
        this.begin.touchEnabled = !0;
        this.begin.anchorX = this.begin.anchorY = 0.5;
        this.begin.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onGameBegin, this);

        egret.Tween.get(this.begin, {
            loop: !0
        }).to({
            scaleX: 1.1,
            scaleY: 1.1
        },
        400).to({
            scaleX: 1,
            scaleY: 1
        },
        400);
        egret.Tween.get(this.title).to({
            y: 310 * Main.sFactor
        },
        500, egret.Ease.bounceOut).to({
            rotation: 20
        },
        100).to({
            rotation: 0
        },
        100).to({
            rotation: 20
        },
        100).to({
            rotation: 0
        },
        100);
        egret.Tween.get(this.help).to({
            y: ultil.stageHeight() - this.help.height
        },
        500, egret.Ease.bounceOut).to({
            rotation: 20
        },
        100).to({
            rotation: 0
        },
        100).to({
            rotation: -20
        },
        100).to({
            rotation: 0
        },
        100);
    }
    __extends(f, c);
    var e = f.prototype;
    e.onGameBegin = function() {
        try {
            ih5game.start()
        } catch(c) {}
        gameMusic();
        this.removeChild(this.begin);
        this.removeChild(this.title);
        this.removeChild(this.help);
        this.spman = new prop.superman;
        this.spman.x = ultil.stageWidth() / 2 - this.spman.width / 2;
        this.spman.y = ultil.stageHeight() - 310 * Main.sFactor;
        this.spman.touchEnabled = !0;
        this.addChild(this.spman);
        ultil.status.FIRSTTIME || (this.tips = ultil.createBitmapByName("introduction"), this.addChild(this.tips), this.tips.anchorX = this.tips.anchorY = 0.5, this.tips.x = ultil.stageWidth() / 2, this.tips.y = ultil.stageHeight() / 2 - 150 * Main.sFactor, this.hand = ultil.createBitmapByName("hand"), this.addChild(this.hand), this.hand.anchorX = this.hand.anchorY = 0.5, this.hand.x = this.spman.x + 30, this.hand.y = this.spman.y, ultil.status.FIRSTTIME = !0, egret.Tween.get(this.hand, {
            loop: !0
        }).to({
            scaleX: 1.3,
            scaleY: 1.3
        },
        500));
        this.vetsTimer = new egret.Timer(500);
        this.gumsTimer = new egret.Timer(5E3);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.vetsTimer.addEventListener(egret.TimerEvent.TIMER, this.onCreateVegetable, this);
        this.vetsTimer.start();
        this.gumsTimer.addEventListener(egret.TimerEvent.TIMER, this.onCreateChewingum, this);
        this.gumsTimer.start();
        this.superTime = new egret.Timer(6E3, 1);
        this.superTime.addEventListener(egret.TimerEvent.TIMER, this.onSuperTime, this);
        this.superTime.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onSuperTimeComplete, this);
        this.score = new prop.score;
        this.addChild(this.score);
        this.bmom = new prop.bigmom;
        this.addChild(this.bmom);
        this.tap = new neoges.PanGesture(this.spman);
        this.tap.addEventListener(neoges.GestureEvent.BEGAN, this.onPanBegan, this);
        this.tap.addEventListener(neoges.GestureEvent.UPDATE, this.onPanUpdate, this);
        this.tap.addEventListener(neoges.GestureEvent.ENDED, this.onPanEnd, this)
    };
    e.onGameHelp = function () {
        $('#gameRules').show();
        $('#gameRules').on('click', function() {
            $(this).hide()
        });
    };
    e.onPanBegan = function(c) {
        this.startPoint = new egret.Point(c.host.x, c.host.y);
        if (!ultil.status.CANMOVE) {
            try {
                this.removeChild(this.hand),
                this.removeChild(this.tips)
            } catch(b) {}
            ultil.status.CANMOVE = !0
        }
    };
    e.onPanUpdate = function(c) {
        this.spman.rotation = this.lastOffsetX - c.offsetX > 20 * Main.sFactor ? -35 : this.lastOffsetX - c.offsetX < -20 * Main.sFactor ? 35 : 0;
        c.host.x = this.startPoint.x + c.offsetX;
        c.host.y = this.startPoint.y + c.offsetY;
        this.lastOffsetX = c.offsetX
    };
    e.onPanEnd = function(c) {
        egret.Tween.get(this.spman).to({
            rotation: 0
        },
        200)
    };
    e.onEnterFrame = function(c) {
        var b = [];
        for (c = 0; c < this.rowCount; c++) b = this.bmpArr[c],
        b.y += this.speed * ultil.status.SPEED * ultil.FPS.rateoffest() * Main.sFactor,
        b.y > ultil.stageHeight() && (b.y = this.bmpArr[0].y - this.textureHeight, this.bmpArr.pop(), this.bmpArr.unshift(b));
        var b = [],
        a,
        e = this.vets.length;
        for (c = 0; c < e; c++) a = this.vets[c],
        a.y += 14 * ultil.status.SPEED * ultil.FPS.rateoffest() * Main.sFactor,
        a.y > ultil.stageHeight() + a.width && b.push(a);
        for (c = 0; c < b.length; c++) a = b[c],
        this.removeChild(a),
        prop.vegetable.reclaim(a, a.text),
        this.vets.splice(this.vets.indexOf(a), 1);
        b = [];
        e = this.gums.length;
        for (c = 0; c < e; c++) a = this.gums[c],
        a.y += 14 * ultil.status.SPEED * ultil.FPS.rateoffest() * Main.sFactor,
        a.y > ultil.stageHeight() + a.width && b.push(a);
        for (c = 0; c < b.length; c++) a = b[c],
        this.removeChild(a),
        prop.chewingum.reclaim(a, a.text),
        this.gums.splice(this.gums.indexOf(a), 1);
        b = [];
        ultil.status.PX = this.spman.x;
        ultil.status.PY = this.spman.y;
        ultil.status.CXR = this.spman.x + this.spman.width / 3;
        ultil.status.CYD = this.spman.y;
        ultil.status.CXL = this.spman.x - this.spman.width / 3;
        ultil.status.CYU = this.spman.y - this.spman.height / 3;
        this.bmom.move();
        this.gameHitTest();
        this.bmom.collision() && !ultil.status.WUDI && (this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this), this.tap.removeEventListener(neoges.GestureEvent.BEGAN, this.onPanBegan, this), this.tap.removeEventListener(neoges.GestureEvent.UPDATE, this.onPanUpdate, this), this.tap.removeEventListener(neoges.GestureEvent.ENDED, this.onPanEnd, this), this.superTime.removeEventListener(egret.TimerEvent.TIMER, this.onSuperTime, this), this.superTime.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onSuperTimeComplete, this), this.gumsTimer.removeEventListener(egret.TimerEvent.TIMER, this.onCreateChewingum, this), this.vetsTimer.removeEventListener(egret.TimerEvent.TIMER, this.onCreateVegetable, this), this.spman.rotation = 0, this.spman.touchEnabled = !1, this.spman.changeState("touch"), c = egret.Tween.get(this.spman), c.to({
            scaleX: 1.2,
            scaleY: 1.2
        },
        800).to({
            scaleX: 1,
            scaleY: 1
        },
        800).call(function() {
            this.parent.spman.changeState("die");
            var a = egret.Tween.get(this.parent.spman);
            a.to({
                x: ultil.stageWidth() / 2,
                y: ultil.stageHeight() / 2 - 300 * Main.sFactor
            },
            1E3);
            a.to({
                scaleX: 1.1,
                scaleY: 1.1
            },
            500).to({
                scaleX: 1,
                scaleY: 1
            },
            500).call(function() {
                $('#sound').addClass('off');
                audio.pause();
                audio.currentTime = 0;
                window.meiriq_game.cb_gameover(ultil.status.SCORE);
                try {
                    ih5game.stop({
                        score: ultil.status.SCORE
                    })
                } catch(a) {}
            })
        }));
        this.bmom.collision() && ultil.status.WUDI && !ultil.status.FIRST && (c = egret.Tween.get(this.bmom), c.to({
            y: this.bmom.y - 200 * Main.sFactor
        },
        100).call(function() {
            this.parent.bmom.y = -this.parent.bmom.width;
            this.parent.bmom.x = Math.random() * ultil.stageWidth() - 100 * Main.sFactor;
            this.parent.bmom.rotation = 0
        }));
        50 < ultil.status.SCORE && 100 > ultil.status.SCORE && (ultil.status.BIGMOMSPEED = 1.1);
        100 < ultil.status.SCORE && 150 > ultil.status.SCORE && (ultil.status.BIGMOMSPEED = 1.2);
        150 < ultil.status.SCORE && 200 > ultil.status.SCORE && (ultil.status.BIGMOMSPEED = 1.4);
        200 < ultil.status.SCORE && (ultil.status.BIGMOMSPEED = 1.5)
    };
    e.onCreateVegetable = function(c) {
        c = prop.vegetable.produce(ultil.getStr());
        c.x = Math.random() * (ultil.stageWidth() - c.width);
        c.y = -c.height - 300 * Math.random() * Main.sFactor;
        this.addChild(c);
        this.vets.push(c)
    };
    e.onCreateChewingum = function(c) {
        70 < 100 * Math.random() && (c = prop.chewingum.produce("chewing gum"), c.x = Math.random() * (ultil.stageWidth() - c.width), c.y = -c.height - 300 * Math.random() * Main.sFactor, this.addChild(c), this.gums.push(c))
    };
    e.gameHitTest = function() {
        var c, b, a = this.vets.length,
        e = [],
        f = this.gums.length,
        s = [],
        t = 0;
        for (c = 0; c < a; c++) {
            b = this.vets[c];
            switch (b.text) {
            case "cake":
                t = 8;
                break;
            case "pizza":
                t = 6;
                break;
            case "shoujuan":
                t = 4;
                break;
            case "Spinach":
                t = 2;
                break;
            case "sushi":
                t = 2
            }
            ultil.hitTest(this.spman, b) && (this.popScore(b), this.score.upDateScore(t), -1 == e.indexOf(b) && e.push(b))
        }
        for (; 0 < e.length;) b = e.pop(),
        this.removeChild(b),
        this.vets.splice(this.vets.indexOf(b), 1),
        prop.vegetable.reclaim(b, b.text);
        for (c = 0; c < f; c++) b = this.gums[c],
        ultil.hitTest(this.spman, b) && (ultil.status.WUDI || (ultil.status.WUDI = !0, ultil.status.SPEED = 3, this.superTime.start(), this.stopEnterFrame(), this.spman.bianshen(), egret.Tween.get(this.spman).to({
            x: this.spman.x - 100 * Main.sFactor
        },
        300).to({
            x: this.spman.x + 100 * Main.sFactor
        },
        300).call(function() {
            this.parent.spman.bianshencomplete();
            this.parent.startEnterFrame()
        })), -1 == s.indexOf(b) && s.push(b));
        for (; 0 < s.length;) b = s.pop(),
        this.removeChild(b),
        this.gums.splice(this.gums.indexOf(b), 1),
        prop.chewingum.reclaim(b, b.text)
    };
    e.popScore = function(c) {
        var b, a = ultil.createBitmapByName(c.text);
        switch (c.text) {
        case "cake":
            b = "+8";
            break;
        case "pizza":
            b = "+6";
            break;
        case "shoujuan":
            b = "+4";
            break;
        case "Spinach":
            b = "+2";
            break;
        case "sushi":
            b = "+2"
        }
        var e = ultil.createBitmapByName(b);
        this.addChild(a);
        this.addChild(e);
        e.x = c.x + 25 * Main.sFactor;
        e.y = c.y;
        a.x = c.x;
        a.y = c.y;
        e.alpha = 1;
        a.alpha = 1;
        egret.Tween.get(a).to({
            scaleX: 1.3,
            scaleY: 1.3
        },
        300).to({
            alpha: 0
        },
        600).call(function() {
            this.parent.removeChild(a)
        });
        egret.Tween.get(e).to({
            scaleX: 1.3,
            scaleY: 1.3
        },
        300).to({
            alpha: 0
        },
        300).call(function() {
            this.parent.removeChild(e)
        })
    };
    e.startEnterFrame = function() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
    };
    e.stopEnterFrame = function() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
    };
    e.onSuperTime = function(c) {
        console.log(1)
    };
    e.onSuperTimeComplete = function(c) {
        this.spman.bianshenend();
        ultil.status.SPEED = 1.2;
        egret.Tween.get(this.spman).to({
            scaleX: 1,
            scaleY: 1
        },
        1E3).call(function() {
            this.parent.spman.nomalC();
            ultil.status.SPEED = 1
        }).wait(1100).call(function() {
            this.parent.spman.nomalC();
            ultil.status.WUDI = !1;
            ultil.status.SPEED = 1
        })
    };
    e.alert = function() {
        window.meiriq_game.cb_gameover(ultil.status.SCORE)
    };
    e.onAgain = function(c) {};
    e.resit = function() {
        ultil.status.BIGMOMSPEED = 1;
        ultil.status.FIRST = !1;
        ultil.status.SCORE = 0;
        ultil.status.WUDI = !1;
        ultil.status.SPEED = 1
    };
    e.allPause = function() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.gumsTimer.stop();
        this.vetsTimer.stop()
    };
    e.allResume = function() {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.gumsTimer.start();
        this.vetsTimer.start()
    };
    return f
} (egret.DisplayObjectContainer);
createGame.prototype.__class__ = "createGame";