var pingziFlag = true;
var g_isBegin = false;//判断是否开始摇动
var shakeingInterval = 100; //摇动最快间隔
var shakeingFlag = true; //摇动间隔锁
var beginState = function (e) {
    function t() {
        e.call(this);
        this.initiliazed = false;
        this.init();
        StateManager.g_instance.canvas.style.display = "block";
    }
    __extends(t, e);
    t.prototype.cleanup = function () {
        console.log('cleanup');
    };
    t.prototype.resume = function () {
        console.log('resume')
    };
    t.prototype.init = function () {
        this.initiliazed = true;
        this.bg = new BitmapFactory(this, 'mainBg');
        this.addChild(this.bg);
        this.cardNums = new BitmapFactory(this, 'yishouji', 450, 870);
        this.addChild(this.cardNums);
        this.scoreTxt = new createjs.Text("x 0", "2.2em Arial", "#fff");
        this.scoreTxt.x = 550;
        this.scoreTxt.y = 935;
        this.addChild(this.scoreTxt);
        /*时间*/
        var timeBar = BitmapFactory(this, "timebar", 50, 950);
        this.timeLoading = BitmapFactory(this, "timeloading", 52, 953);
        var mask = new createjs.Shape();
        mask.graphics.beginFill('#000').drawRoundRect(52, 953, 249, 25, 12.5);
        this.timeLoading.mask = mask;
        this.addChild(timeBar);
        this.addChild(this.timeLoading);
        this.timeIco = BitmapFactory(this, "timeico", 20, 940);
        this.addChild(this.timeIco);
        this.timeText = new createjs.Text("10:00", "2em Arial", "#fff");
        this.timeText.x = 313;
        this.timeText.y = 950;
        this.addChild(this.timeText);
        this._cardbk = new card(this);
        this._card = new card(this);
        /*酒*/
        this._wine = new wine(this);
        this._wine.stop();
        /*瓶子*/
        this._bottonBottom = BitmapFactory(this, "pingziBottom", 270, 879, .8, .8);
        this.addChild(this._bottonBottom);
        this._bottle = new bottle(this);
        this.bg = new BitmapFactory(this, 'beginBg');

        this.beginBtn = new BitmapFactory(this, 'beginBtn', 40, 840, .9, .9);
        createjs.Tween.get(this.beginBtn, { loop: true }).to({ alpha: 1, scaleX: .8, scaleY: .8 }, 500).to({ alpha: 1, scaleX: .9, scaleY: .9 }, 500);
        this.beginBtn.addEventListener("click", function () {
            pingziFlag = true;
            shakeingFlag = true;
            g_isBegin = false;
            console.log("btn.start game!");
            StateManager.g_instance.changeState(gameState);
            _czc.push(["_trackEvent", "教程进入游戏", "click", "按钮", 1]);
            _czc.push(["_trackEvent", "进行游戏", "click", "游戏页", 1]);
        });
        this.addChild(this.bg);
        this.addChild(this.beginBtn);
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed;
    };
    return t;
}(createjs.Container);

var endState = function (e) {
    function t() {
        e.call(this);
        this.initiliazed = false;
        var n = this;
    }
    __extends(t, e);
    t.prototype.cleanup = function () { };
    t.prototype.resume = function () { };
    t.prototype.init = function () {
        this.initiliazed = true;
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    return t;
}(createjs.Container);

var gameState = function (e) {
    function t() {
        e.call(this);
        this.gameFlag = true;
        this.collectNum = 0;
        var _this = this;
        this.bg = new BitmapFactory(this, 'mainBg');
        this.addChild(this.bg);
        //摇晃次数
        this.checkAniNum = 0;
        //时间bar
        this.totalTime = 600;//1800;
        this.curTime = this.totalTime;
        this.userNowScorce = 0;

        this.maxScorce = 99;
        this.initiliazed = true;
        /*收集卡牌*/
        this.cardNums = new BitmapFactory(this, 'yishouji', 450, 870);
        this.addChild(this.cardNums);
        this.scoreTxt = new createjs.Text("x " + this.userNowScorce, "2.2em Arial", "#fff");
        this.scoreTxt.x = 550;
        this.scoreTxt.y = 935;
        this.addChild(this.scoreTxt);
        /*时间*/
        var timeBar = BitmapFactory(this, "timebar", 50, 950);
        this.timeLoading = BitmapFactory(this, "timeloading", 52, 953);
        var mask = new createjs.Shape();
        mask.graphics.beginFill('#000').drawRoundRect(52, 953, 249, 25, 12.5);
        this.timeLoading.mask = mask;
        this.addChild(timeBar);
        this.addChild(this.timeLoading);
        this.timeIco = BitmapFactory(this, "timeico", 20, 940);
        this.addChild(this.timeIco);
        this.timeText = new createjs.Text("30:00", "2em Arial", "#fff");
        this.timeText.x = 313;
        this.timeText.y = 950;
        this.addChild(this.timeText);
        /*卡片*/
        this._cardbk = new card(this);
        this._card = new card(this);
        /*酒*/
        this._wine = new wine(this);
        this._wine.stop();
        /*瓶子*/
        this._bottonBottom = BitmapFactory(this, "pingziBottom", 270, 879, .8, .8);
        this.addChild(this._bottonBottom);
        this._bottle = new bottle(this);


        /*教程*/
        this.firstTeachFlag = true;
        this.teachFig = new BitmapFactory(this, 'shouzhi', 310, 750, .9, .9);
        createjs.Tween.get(this.teachFig, { loop: true }).to({ alpha: 1, scaleX: .8, scaleY: .8 }, 500).to({ alpha: 1, scaleX: .9, scaleY: .9 }, 500);
        this.teachFig.visible = false;
        this.addChild(this.teachFig);
        //瓶子 充满 点击事件
        this._bottle.sprite.addEventListener("click", function (ev) {
            if (!!pingziFlag) {
                if (!!fullFlag) {
                    if (ev.target.parent.firstTeachFlag) {
                        ev.target.parent.firstTeachFlag = false;//关闭教程
                        ev.target.parent.teachFig.visible = false;
                    }
                    ev.target.parent._bottle.change("0");
                    ev.target.parent._wine.play();
                    var _this = ev;
                    ev.target.parent.userNowScorce += 1;
                    ev.target.parent.collectNum += 1;
                    setTimeout(function (event) {
                        _this.target.parent._card.openCard();
                        console.log("x:" + _this.target.parent._card.x + "|y:" + _this.target.parent._card.y);
                        _this.target.parent._card.x = 0;
                        _this.target.parent._card.y = 0;
                        createjs.Tween.get(
                            _this.target.parent._card, { loop: false })
                            .to({ alpha: 1, scaleX: 1, scaleY: 1 }, 0)
                            .to({ alpha: 1, scaleX: 1, scaleY: 1 }, 400)
                            .to({ alpha: .2, scaleX: .1, scaleY: .1, x: 450, y: 900 }, 400)
                            .to({ alpha: 0, scaleX: 0, scaleY: 0, x: 450, y: 850 }, 0)
                            .call(_this.target.parent.addScore);
                    }, 200);
                }
            }
        });
        this._wine.sprite.addEventListener("animationend", function (ev) {
            if (!!ev.next) {
                if (ev.next === "full") {
                    ev.target.parent.parent._wine.stop();
                }
            }
        });
        this._bottle.sprite.addEventListener("animationend", function (ev) {
            if (!!ev.next) {
                if (ev.next === "percent100") {
                    fullFlag = true;
                }
                if (ev.next === "percent0") {
                    g_isBegin = false;
                    fullFlag = false;
                }
            }
            pingziFlag = true;

        });


        if (window.DeviceMotionEvent) {
            var speed = 10;
            var x = y = z = lastX = lastY = lastZ = 0;
            window.addEventListener('devicemotion', function () {
                var acceleration = event.accelerationIncludingGravity;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                if (!!shakeingFlag && _this.curTime > 0) {
                    if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
                        if (!g_isBegin) {

                            shakeingFlag = false;
                            setTimeout(function () { shakeingFlag = true; }, shakeingInterval);
                            _this.checkAniNum += 1;
                            switch (_this.checkAniNum) {
                                case 1: _this._bottle.change(20); break;
                                case 2: _this._bottle.change(40); break;
                                case 3: _this._bottle.change(60); break;
                                case 4: _this._bottle.change(80); break;
                                case 5:
                                    if (_this.firstTeachFlag) {
                                        _this.teachFig.visible = true;
                                    } else {
                                        _this.teachFig.visible = false;
                                    };
                                    _this._bottle.change(100);
                                    _this.checkAniNum = 0;
                                    g_isBegin = true;
                                    break;
                            }
                        }
                    }
                }
            }, false);
        } else {
            alert("not support!");
        }
        this.initiliazed = false;
        this.init();
    }
    __extends(t, e);
    t.prototype.cleanup = function () { };
    t.prototype.resume = function () { };
    t.prototype.init = function () {



    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed;
    };

    t.prototype.update = function (n) {
        if (this.gameFlag) {
            if (this.curTime <= 0) {
                this.gameFlag = false;
                if (this.userNowScorce >= 0) {
                    if (!!friendFlag) {
                        console.log("friend play game.");
                        gameOverView(this.collectNum, this.userNowScorce, friendFlag);
                    }
                    else {
                        console.log("paly game myself.")
                        gameOverView(this.collectNum, this.userNowScorce, friendFlag);
                    }
                    console.log("Game Over.");
                }
            }
            if (parseInt(this.curTime) > 0) {
                this.timeLoading.x = 50 + this.curTime * (254 / this.totalTime) - 254;
                this.curTime -= 1;
                this.timeText.text = TimeCount(this.curTime);
            }
        }
    };
    t.prototype.addScore = function () {
        if (parseInt(this.parent.userNowScorce) >= 0) {
            this.parent.scoreTxt.text = "x " + this.parent.userNowScorce;
        }
        //if (this.parent.curTime <= 0) {
        //    if (!!friendFlag) {

        //        console.log("friend play game.");
        //        gameOverView(this.parent.collectNum, this.parent.userNowScorce, friendFlag);
        //    }
        //    else {

        //        console.log("paly game myself.")
        //        gameOverView(this.parent.collectNum, this.parent.userNowScorce, friendFlag);
        //    }
        //    console.log("Game Over.");
        //}

    }

    return t;
}(createjs.Container);
