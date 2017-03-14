/// <reference path="../libs/easeljs-0.7.1.min.js" />
/// <reference path="../libs/preloadjs-0.4.1.min.js" />
/// <reference path="../libs/soundjs-0.5.2.min.js" />
/// <reference path="../libs/tweenjs-0.5.1.min.js" />
/// <reference path="tools.js" />
/// <reference path="sprite.js" />
/// <reference path="main.js" />
/// <reference path="state.js" />
/// <reference path="config.js" />
var fullFlag = false;
var FishRound = function (e) {
    function t() {
        e.call(this);
    }
    __extends(t, e);
    return t;
}(createjs.Container)

var wine = function (e) {
    function t(self) {
        e.call(this);
        this._paopao = new createjs.Bitmap()
        this._wine = new createjs.SpriteSheet({
            images: [StateManager.g_instance.getResult('penshui')],
            frames: { width: 640, height: 685, count: 20, regX: 0, regY: 0 },
            animations: {
                full: 19,
                belch: [0, 19, "full", 1.8],
            }
        });
        this.sprite = new createjs.Sprite(this._wine);
        this.sprite.setTransform(0, 0, 1, 1);
        this.addChild(this.sprite);
        this.sprite.visible = false;
        self.addChild(this);
    };
    __extends(t, e);
    t.prototype.play = function () {
        var sprite = this.sprite;
        sprite.alpha = 1;
        sprite.visible = true;
        sprite.gotoAndPlay("belch");

    };
    t.prototype.stop = function () {
        var sprite = this.sprite;
        createjs.Tween.get(this.sprite, { loop: false }).to({ alpha :0},0); 
    };
    return t;
}(createjs.Container)

//瓶子
var bottle = function (e) {
    function t(self) {
        e.call(this);
        this._bottle = new createjs.SpriteSheet({
            images: [StateManager.g_instance.getResult('pingzi')],
            frames: { width: 128, height: 378, count: 16, regX: 0, regY: 0 },
            animations: {
                percent0: 0,
                percent20: 2,
                percent40: 5,
                percent60: 8,
                percent80: 11,
                percent100: 15,
                state20: [0, 2, "percent20", .2],
                state40: [3, 5, "percent40", .2],
                state60: [6, 8, "percent60", .2],
                state80: [9, 11, "percent80", .2],
                state100: [12, 15, "percent100", .2],
                consume: { frames: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], next: "percent0", speed: .8 },
                load100: [0, 15, "percent100",.8]

            }
        });
        this.sprite = new createjs.Sprite(this._bottle, "percent0");
        this.sprite.setTransform(270, 600, .8, .8);
        
        self.addChild(this.sprite);
    }
    __extends(t, e);
    t.prototype.update = function () {

    }

    t.prototype.change = function (num) {//切换动画
        num = parseInt(num);
        pingziFlag = false;
        switch (num) {
            case 0:
                this.sprite.gotoAndPlay("consume");
                break;
            case 20:
                this.sprite.gotoAndPlay("state20");
                break;
            case 40:
                this.sprite.gotoAndPlay("state40");
                break;
            case 60:
                this.sprite.gotoAndPlay("state60");
                break;
            case 80:
                this.sprite.gotoAndPlay("state80");
                break;
            case 100:
                this.sprite.gotoAndPlay("state100");
                break;
            case 200:
                this.sprite.gotoAndPlay("load100");
                break;
        };

    };
    t.prototype.handleComplete = function (e) {

    }

    return t;
}(createjs.Container)

//瓶子 加载页动画
var loadBottle = function (e) {
    function t(self) {
        e.call(this);
        this._bottle = new createjs.SpriteSheet({
            images: ["res/lodingpingzi.png"],
            frames: { width: 175, height: 363, count: 10, regX: 0, regY: 0 },
            animations: {
                percent0: 0,
                percent20: 1,
                percent40: 3,
                percent60: 5,
                percent80: 7,
                percent100: 9,
                state20: [0, 1, "percent20", .5],
                state40: [2, 3, "percent40", .5],
                state60: [4, 5, "percent60", .5],
                state80: [6, 7, "percent80", .5],
                state100: [8, 9, "percent100", .5]

            }
        });
        this.sprite = new createjs.Sprite(this._bottle, "percent0");
        this.sprite.setTransform(260, 420, 1, 1);

        self.stage.addChild(this.sprite);//不同处
    }
    __extends(t, e);
    t.prototype.update = function () {

    }

    t.prototype.change = function (num) {//切换动画
        num = parseInt(num);
        switch (num) {
            case 20:
                this.sprite.gotoAndPlay("state20");
                break;
            case 40:
                this.sprite.gotoAndPlay("state40");
                break;
            case 60:
                this.sprite.gotoAndPlay("state60");
                break;
            case 80:
                this.sprite.gotoAndPlay("state80");
                break;
            case 100:
                this.sprite.gotoAndPlay("state100");
                break;
        };

    };
    t.prototype.handleComplete = function (e) {

    }

    return t;
}(createjs.Container)

//卡片
var card = function (e) {
    function t(self) {
        e.call(this);
        this._cardOpen;
        this._card = new BitmapFactory(self, 'kabei', 160, 20, .9, .9);
        this.addChild(this._card);
        self.addChild(this);
    };
    __extends(t, e);
    t.prototype.openCard = function () {
        var cardName = "kapian" + Math.floor(Math.random() * 6);
        this._cardOpen = new BitmapFactory(self, cardName, 160, 44, .9, .9);
        this.removeChild(this._card);
        this.addChild(this._cardOpen);
        console.log("打开卡片！");
    };
    t.prototype.closeCard = function () {
        this.removeChild(this._cardOpen);
        this.addChild(this._card);
        console.log("关闭卡片！");
    };

    return t;
}(createjs.Container)
