this.gameCore = this.gameCore || {};
this.gameCore.isMute = true;
this.gameCore.SOUND = null;
this.gameCore.isAndroid = function() {
    return (/Android/i.test(navigator.userAgent))
};
this.gameCore.playSound = function(c, a) {
    if (gameCore.SOUND && c == "song") {
        while (gameCore.SOUND) {
            gameCore.SOUND.stop();
            gameCore.SOUND = null
        }
    }
    if (c == "song") {
        a = 40
    }
    if (gameCore.isMute) {
        return
    }
    var b = createjs.Sound.play(c, createjs.Sound.INTERRUPT_EARLY, 0, 0, a);
    return b
}; (function() {
    function u() {}
    var j = {};
    var v = {
        H: "h",
        V: "v"
    };
    j.STAGE_INIT = "stage_ini";
    j.STAGE_BLUR = "stage_blur";
    j.STAGE_FOCUSE = "stage_focus";
    j.STAGE_RESIZE = "stage_resize";
    j.STAGE_ORIEN = "stage_orien";
    u._interfac = null;
    u.getInstance = function() {
        return u._interfac == null ? u._interfac = new u() : u._interfac
    };
    var n = createjs.extend(u, createjs.EventDispatcher);
    var m = null;
    var s = 0;
    var a = 0;
    var o = 0;
    var k = 0;
    var d = "H";
    var x = 0;
    var c = 0;
    var g = null;
    var q = 0;
    var t = 0;
    var l = 0;
    var r = 0;
    var h = null;
    var b = {
        width: 0,
        height: 0
    };
    var f = "";
    var w = function() {
        var y = {
            "user-scalable": "no",
            "maximum-scale": "1.0",
            "initial-scale": "1.0"
        },
        A = document.getElementsByName("viewport"),
        B,
        D;
        if (A.length == 0) {
            B = document.createElement("meta");
            B.name = "viewport";
            B.content = "";
            document.head.appendChild(B)
        } else {
            B = A[0]
        }
        var C = window,
        p = C.navigator;
        var z = p.userAgent.toLowerCase();
        var F = z.indexOf("mobile") != -1 || z.indexOf("android") != -1;
        if (F) {
            B.content = "initial-scale:1";
            return
        }
        D = B.content;
        for (var G in y) {
            var E = new RegExp(G);
            if (!E.test(D)) {
                D += (D == "" ? "": ",") + G + "=" + y[G]
            }
        }
        D = "user-scalable=no,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0";
        B.content = D
    };
    var e = function() {
        var p = "V";
        switch (window.orientation) {
        case 0:
            p = "V";
            break;
        case - 90 : p = "H";
            break;
        case 90:
            p = "H";
            break;
        case 180:
            p = "V";
            break
        }
        if (f != p) {
            u._interfac.stageType = f = p;
            u._interfac.dispatchEvent(j.STAGE_ORIEN)
        }
    };
    var i = function() {
        window.onresize = createjs.proxy(n.resize, n);
        window.onblur = createjs.proxy(n.onBlur, n);
        window.onfocus = createjs.proxy(n.onFocus, n);
        window.orientationChange = createjs.proxy(e, n);
        u._interfac.dispatchEvent(new Event(j.STAGE_INIT))
    };
    n.setViewport = w;
    Object.defineProperty(n, "rect", {
        get: function() {
            return {
                top: q,
                left: t,
                right: l,
                bottom: r,
                width: b.width,
                height: b.height
            }
        }
    });
    Object.defineProperty(n, "root", {
        get: function() {
            return g
        }
    });
    Object.defineProperty(n, "stageWidth", {
        get: function() {
            return o
        }
    });
    Object.defineProperty(n, "stageHeight", {
        get: function() {
            return k
        }
    });
    Object.defineProperty(n, "stage", {
        get: function() {
            return h
        }
    });
    Object.defineProperty(n, "canvas", {
        set: function(y) {
            if (typeof(y) == "string") {
                this.canvas = document.getElementById(y)
            } else {
                m = y
            }
            var z = g = new gameCore.RootScene();
            z.nominalBounds = new createjs.Rectangle(0, 0, s, a);
            var p = new createjs.Stage(this.canvas);
            h = p;
            p.addChild(z);
            p.enableMouseOver(10);
            createjs.Ticker.addEventListener("tick", p);
            createjs.Touch.enable(p);
            createjs.Ticker.setFPS(30);
            e();
            this.resize()
        },
        get: function() {
            return m
        }
    });
    n.onBlur = function() {
        createjs.Ticker.removeEventListener("tick", h);
        while (gameCore.SOUND) {
            gameCore.SOUND.stop();
            gameCore.SOUND = null
        }
        u._interfac.dispatchEvent(j.STAGE_BLUR)
    };
    n.onFocus = function() {
        if (!gameCore.SOUND && !gameCore.isMute) {
            gameCore.SOUND = gameCore.playSound("song")
        }
        createjs.Ticker.addEventListener("tick", h);
        u._interfac.dispatchEvent(j.STAGE_FOCUSE)
    };
    n.setStageType = function(p) {
        d = p;
        if (d == undefined) {
            d = v.V
        }
        f = d;
        x = s / a;
        this.resize();
        return this
    };
    n.setRect = function(y, p) {
        s = y;
        a = p;
        this.setStageType(d);
        return this
    };
    n.initialize = function() {
        i();
        return this
    };
    n.resize = function() {
        o = window.innerWidth;
        k = window.innerHeight;
        if (this.canvas) {
            this.canvas.width = o;
            this.canvas.height = k
        }
        if (x > (o / k)) {
            c = o / s
        } else {
            c = k / a
        }
        if (g) {
            g.x = (o - s * c) / 2;
            g.y = (k - a * c) / 2;
            var y = g.x / c;
            var p = g.y / c;
            q = -p;
            t = -y;
            l = s - t;
            r = a - q;
            g.scaleX = g.scaleY = c;
            b.width = l - t;
            b.height = r - q
        }
        u._interfac.dispatchEvent(j.STAGE_RESIZE);
        e.apply(this);
        return this
    };
    gameCore.StageManager = u;
    gameCore.StageManagerEvent = j;
    gameCore.StageManagerType = v
})(); (function() {
    function c() {
        this.initialize()
    }
    var d = createjs.extend(c, createjs.Container);
    var a = function() {
        for (var e = 0; e < this.numChildren; e++) {
            var f = this.getChildAt(e);
            if (f && f.resize) {
                f.resize(gameCore.StageManager.getInstance().rect.width, gameCore.StageManager.getInstance().rect.height)
            }
        }
    };
    var b = function() {};
    d.initialize = function() {
        this.Container_initialize();
        gameCore.StageManager.getInstance().addEventListener(gameCore.StageManagerEvent.STAGE_ORIEN, createjs.proxy(b, this));
        gameCore.StageManager.getInstance().addEventListener(gameCore.StageManagerEvent.STAGE_RESIZE, createjs.proxy(a, this))
    };
    d.addChild = function(e) {
        var f = this.Container_addChild(e);
        gameCore.StageManager.getInstance().resize();
        gameCore.StageManager._interfac.dispatchEvent(gameCore.StageManagerEvent.STAGE_ORIEN);
        return f
    };
    createjs.promote(c, "Container");
    d.resize = function(e) {};
    gameCore.RootScene = c
})();