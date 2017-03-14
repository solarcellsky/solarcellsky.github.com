var res = {
    basketYellow_Json: "res/Basket.json",
    basketRed_Json: "res/BasketRed.json",
    basketGreen_Json: "res/Basketgreen.json",
    basketBlue_Json: "res/Basketblue.json",
    basket_plist: "res/basket.plist",
    basket_png: "res/basket.png",
    gm_hyper_fever_bar_png: "res/gm_hyper_fever_bar.png",
    gm_super_fever_bar_png: "res/gm_super_fever_bar.png",
    gm_fever_bar_png: "res/gm_fever_bar.png",
    score_Json: "res/Score.json",
    g_ui_plist: "res/g_ui.plist",
    groove_png: "res/middleLayer2.png",
    BallOON_ogg: "res/sound/BALLOON.MP3",
    E_BASKET_SHOT_ogg: "res/sound/E_BASKET_SHOT.MP3",
    E_BASKET_Good_ogg: "res/sound/E_BASKET_GOOD.MP3",
    E_BASKET_CLEAN_ogg: "res/sound/E_BASKET_CLEAN.MP3",
    Pang_fever: "res/sound/Pang-fever.MP3",
    Pang_fever_02: "res/sound/Pang-fever_02.MP3",
    Pang_fever_03: "res/sound/Pang-fever_03.MP3",
    GameOver_ogg: "res/sound/E_GAMEOVER.MP3",
    GameBG_ogg: "res/sound/B_GAME_NORMAL.MP3",
    role_plist: "res/role.plist",
    upLayer_Json: "res/UpLayerNode.json",
    downLayer_Json: "res/DownLayerNode.json",
    middleLayer_Json: "res/MiddleLayerNode.json",
    downKuang: "res/downKuang.png",
    helpBg: "res/Gameyingdao.png",
    knowBtn: "res/konwbutton.png",
    // lottery_bg_normal: "res/hntv/send_input.png",
    // sureSubmit: "res/hntv/send_okbtn.png",
    // send_over: "res/hntv/send_over.png",
    // lottery_bg_wx: "res/hntv/coujiangbg.png",
    // lottery_sure: "res/hntv/choujiang.png",
    // lottery_cancle: "res/hntv/fangqi.png",
    // lottery_loading: "res/hntv/loading_wx.png",
    // lottery_wx_zhongjiang: "res/hntv/wx_zhongjiang.png",
    // lottery_wx_shibai: "res/hntv/wx_shibai_s.png",
    // lottery_mv: "res/hntv/sp.png",
    // lottery_qd: "res/hntv/wx_qd.png",
    // lottery_Bg: "res/hntv/lotteryBg.png",
    // send_loading: "res/hntv/send_loading.png",
    start_btn: "res/loading/start_btn.png",
    help_btn: "res/loading/help_btn.png",
    loading_bg: "res/loading/loading_bg.jpg",
    loadingbar_bg: "res/loading/loading_bar.png",
    loadingBar: "res/loading/loading.png",
    logo: "res/loading/loadingBar.png",
    kylogo: "res/loading/ky.png",
    again: "res/gameover/again.png",
    bang: "res/gameover/bang.png",
    end: "res/gameover/end.png",
    groove_png: "res/middleLayer2.png",
    invite_icon_png: "res/invite_icon.png"
},
g_resources = "res/all2_0.fnt res/all2_0.png res/all_0.fnt res/all_0.png res/all3_0.fnt res/all3_0.png res/all4_0.fnt res/all4_0.png res/all5_0.fnt res/all5_0.png".split(" ");
for (i in res) g_resources.push(res[i]);
var GameConfig = GameConfig || {};
GameConfig.SCALE_960 = 0;
GameConfig.SCALE_640 = 0;
GameConfig.SCALE_800 = 0;
GameConfig.SCALE_480 = 0;
GameConfig.STAGE_WIDTH = 0;
GameConfig.STAGE_HEIGHT = 0;
GameConfig.isTelephone = function(a) {
    return /^1\d{10}$/.test(a) ? !0 : !1
};

var ball = cc.Sprite.extend({
    ctor: function(a, b, c, d) {
        this._super("#basket_ball.png");
        this.world = a;
        this.setTag(103);
        this.isThrowOut = 0;
        this.setAnchorPoint(0.5, 0.3);
        this.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.setPosition(d.x, d.y + this.getBoundingBox().height);
        b.addChild(this, c)
    },
    throwBallAction: function(a, b) {
        var c = new cc.JumpTo(0.6,a,b,1)
          , d = new cc.ScaleTo(0.6,0.8 * GameConfig.SCALE_640)
          , c = new cc.spawn(c,d)
          , d = new cc.CallFunc(this.createBody,this,this.getPosition());
        this.runAction(new cc.Sequence(c,d))
    },
    createBody: function(a) {
        this.isThrowOut = 1;
        var b = new b2BodyDef;
        b.type = b2Body.b2_dynamicBody;
        b.position.Set(a.x / PTM_RATIO, a.y / PTM_RATIO);
        a = this.world.CreateBody(b);
        a.SetUserData(this);
        b = new b2Circle;
        b.m_radius = 1 * GameConfig.SCALE_640;
        var c = new b2FixtureDef;
        c.shape = b;
        c.density = 1;
        c.mass = 300;
        c.friction = 0.3;
        a.CreateFixture(c);
        this.body = a
    },
    desBall: function() {
        this.removeFromParent();
        this.world.DestroyBody(this.body)
    }
});
var basketsTopArray = []
  , basketsMiddleArray = []
  , basketsBelowArray = []
  , basketsDelArray = []
  , ballArray = []
  , ballDelArray = []
  , ballDelArray = []
  , SpeedBasketsArray = function(a, b) {
    for (var c = 0; c < a.length; c++)
        a[c] && a[c].SetLinearVelocity(cc.p(b, 0))
}
  , basket = cc.Layer.extend({
    ctor: function(a, b, c, d, e) {
        this._super();
        this.world = a;
        this.setPosition(c);
        b.addChild(this, d);
        playerSprite = new role(this,15);
        this.addChild(playerSprite, 15);
        playerSprite.setAnchorPoint(0.5, 0);
        playerSprite.setPosition(GameConfig.STAGE_WIDTH / 2, e);
        this.createBall(cc.p(320, 230));
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan
        }, this);
        this.createBaskets(basketsBelowArray, basketBelowHeight, basketBelowSpeed, 1);
        this.createBaskets(basketsMiddleArray, basketMiddleHeight, basketMiddleSpeed, 2);
        this.createBaskets(basketsTopArray, basketTopHeight, basketTopSpeed, 3)
    },
    throwAnimation: function() {},
    onTouchBegan: function(a, b) {
        if (1 == catIsCanThrowBall && 1 == catHasBall) {
            var c = b.getCurrentTarget()
              , d = a.getLocation();
            c.assureThrowBallPoint(c, d)
        }
        return !1
    },
    assureThrowBallPoint: function(a, b) {
        if (b.y < basketBelowHeight + 100 * GameConfig.SCALE_640) {
            var c = cc.p(b.x, basketBelowHeight + 80 * GameConfig.SCALE_640)
              , d = cc.p(GameConfig.STAGE_WIDTH / 2, 0.25 * GameConfig.STAGE_HEIGHT)
              , d = c.y - d.y - 120 * GameConfig.SCALE_640;
            this.ThrowBall(c, d)
        } else
            b.y < basketMiddleHeight + 140 * GameConfig.SCALE_640 ? (c = cc.p(b.x, basketMiddleHeight + 80 * GameConfig.SCALE_640),
            d = cc.p(GameConfig.STAGE_WIDTH / 2, 0.25 * GameConfig.STAGE_HEIGHT),
            d = c.y - d.y - 200 * GameConfig.SCALE_640,
            this.ThrowBall(c, d)) : b.y < basketTopHeight + 200 * GameConfig.SCALE_640 && (c = cc.p(b.x, basketTopHeight + 80 * GameConfig.SCALE_640),
            d = cc.p(GameConfig.STAGE_WIDTH / 2, 0.25 * GameConfig.STAGE_HEIGHT),
            d = c.y - d.y - 300 * GameConfig.SCALE_640,
            this.ThrowBall(c, d))
    },
    ThrowBall: function(a, b) {
        if (1 == catHasBall && 0 < ballArray.length) {
            var c = ballArray.shift();
            ballDelArray.push(c);
            c.throwBallAction(a, b);
            playerSprite && playerSprite.throwAniamtion();
            catHasBall = 0;
            var d = cc.p(GameConfig.STAGE_WIDTH / 2, 0.25 * GameConfig.STAGE_HEIGHT);
            this.scheduleOnce(function() {
                this.createBall(d)
            }, 0.5);
            catIsCanThrowBall = 0;
            this.scheduleOnce(function() {
                catIsCanThrowBall = 1
            }, 1)
        }
    },
    createBall: function(a) {
        0 == catHasBall && (a = new ball(physicsWorld,this,3,playerSprite),
        a.throwInBasketNum = 0,
        a.ballBasket = 0,
        ballArray.push(a),
        catHasBall = 1)
    },
    createBasketTypeRandom: function(a) {
        switch (a) {
        case 1:
            return this.createRandom(0.7, 0.8, 0.9, 10);
        case 2:
            return this.createRandom(0.5, 0.75, 0.85, 1);
        case 3:
            return this.createRandom(0.5, 0.75, 0.85, 1)
        }
    },
    createRandom: function(a, b, c, d) {
        var e = Math.random();
        if (e < a)
            return 1;
        if (e < b)
            return 2;
        if (e < c)
            return 3;
        if (e < d)
            return 4
    },
    createBaskets: function(a, b, c, d) {
        switch (d) {
        case 1:
            this.createOneBasket(a, 0.8 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            this.createOneBasket(a, 0.5 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            this.createOneBasket(a, 0.2 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            this.createOneBasket(a, 0.1 * -GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            break;
        case 2:
            this.createOneBasket(a, 0.05 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            this.createOneBasket(a, 0.35 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            this.createOneBasket(a, 0.65 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            this.createOneBasket(a, 0.95 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d));
            break;
        case 3:
            this.createOneBasket(a, 0.8 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d)),
            this.createOneBasket(a, 0.5 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d)),
            this.createOneBasket(a, 0.2 * GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d)),
            this.createOneBasket(a, 0.1 * -GameConfig.STAGE_WIDTH, b, c, this.createBasketTypeRandom(d))
        }
        this.scheduleUpdate()
    },
    createOneBasket: function(a, b, c, d, e) {
        b = this.createBody(cc.p(b, c), b2Body.b2_kinematicBody, d, e);
        a.push(b)
    },
    destroyBody: function() {
        if (0 < basketsDelArray.length && (basketsDelArray[0].GetUserData().getPositionX() > 1.4 * GameConfig.STAGE_WIDTH || basketsDelArray[0].GetUserData().getPositionX() < -GameConfig.STAGE_WIDTH / 4)) {
            var a = basketsDelArray.shift();
            a.GetUserData().removeFromParent();
            this.world.DestroyBody(a)
        }
    },
    update: function(a) {
        if (basketsBelowArray[0] && basketsBelowArray[0].GetUserData() && basketsBelowArray[0].GetUserData().getPositionX() - 60 > 1 * GameConfig.STAGE_WIDTH) {
            a = basketsBelowArray.shift();
            var b = a.GetUserData()
              , b = basketsBelowArray[basketsBelowArray.length - 1].GetUserData().getPositionX() - 0.3 * GameConfig.STAGE_WIDTH;
            basketsDelArray.push(a);
            this.createOneBasket(basketsBelowArray, b, basketBelowHeight, basketBelowSpeed, this.createBasketTypeRandom(1))
        }
        basketsMiddleArray[0] && basketsMiddleArray[0].GetUserData() && 0 > basketsMiddleArray[0].GetUserData().getPositionX() && (a = basketsMiddleArray.shift(),
        a.GetUserData(),
        b = basketsMiddleArray[basketsMiddleArray.length - 1].GetUserData().getPositionX() + 0.3 * GameConfig.STAGE_WIDTH,
        basketsDelArray.push(a),
        this.createOneBasket(basketsMiddleArray, b, basketMiddleHeight, basketMiddleSpeed, this.createBasketTypeRandom(2)));
        basketsTopArray[0] && basketsTopArray[0].GetUserData() && basketsTopArray[0].GetUserData().getPositionX() > 1 * GameConfig.STAGE_WIDTH && (a = basketsTopArray.shift(),
        a.GetUserData(),
        b = basketsTopArray[basketsTopArray.length - 1].GetUserData().getPositionX() - 0.3 * GameConfig.STAGE_WIDTH,
        basketsDelArray.push(a),
        this.createOneBasket(basketsTopArray, b, basketTopHeight, basketTopSpeed, this.createBasketTypeRandom(3)));
        this.judgePassBallIn();
        if (ballDelArray[0] && (50 > ballDelArray[0].getPositionY() || 0 > ballDelArray[0].getPositionX() || ballDelArray[0].getPositionX() > 1 * GameConfig.STAGE_WIDTH)) {
            a = ballDelArray.shift();
            switch (a.throwInBasketNum) {
            case 2:
                this.dtEffect("#basket_double.png", cc.p(200, 500));
                getScore += oneBaseGoal * twoGoalsMultiple;
                getFever += oneBaseFever * twoGoalsMultiple;
                break;
            case 3:
                this.dtEffect("#basket_triple.png", cc.p(200, 500)),
                getScore += oneBaseGoal * threeGoalsMultiple,
                getFever += oneBaseFever * threeGoalsMultiple
            }
            a.desBall()
        }
        0 < basketsDelArray.length && (basketsDelArray[0].GetUserData().getPositionX() > 1.4 * GameConfig.STAGE_WIDTH || basketsDelArray[0].GetUserData().getPositionX() < -GameConfig.STAGE_WIDTH / 4) && (a = basketsDelArray.shift(),
        b = a.GetUserData(),
        b.removeFromParent(),
        this.world.DestroyBody(a))
    },
    dtEffect: function(a, b) {
        var c = new cc.Sprite(a);
        c.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        c.setPosition(b.x * GameConfig.SCALE_640, b.y * GameConfig.SCALE_640);
        this.addChild(c, 3);
        var d = new cc.fadeIn(0.2)
          , d = new cc.spawn(d,cc.scaleTo(0.2 * GameConfig.SCALE_640, 1.5 * GameConfig.SCALE_640))
          , e = new cc.fadeOut(0.2)
          , f = new cc.CallFunc(this.removeMultipleSprite,c)
          , d = new cc.Sequence(d,e,f);
        c.runAction(d)
    },
    removeMultipleSprite: function(a) {
        a.removeFromParentAndCleanup()
    },
    judgePassBallIn: function() {
        for (var a = 0; a < ballDelArray.length; a++)
            ballDelArray[a] && 1 == ballDelArray[a].isThrowOut && (this.judgeIsThrowIn(ballDelArray[a], basketTopHeight, 960 * GameConfig.SCALE_640, basketsTopArray),
            this.judgeIsThrowIn(ballDelArray[a], basketMiddleHeight, basketTopHeight, basketsMiddleArray),
            this.judgeIsThrowIn(ballDelArray[a], basketBelowHeight, basketMiddleHeight, basketsBelowArray))
    },
    judgeIsThrowIn: function(a, b, c, d) {
        var e = a.getPosition();
        if (e.y > b && e.y < c)
            for (b = 0; b < d.length; b++)
                !d[b] || 1 == d[b].GetUserData().IsThrowInSelf && 1 == a.ballBasket || (c = d[b].GetUserData().getPosition(),
                c = cc.rect(c.x - GameConfig.SCALE_640 / 1.2 * 17, c.y - GameConfig.SCALE_640 / 1.2 * 16, GameConfig.SCALE_640 / 1.2 * 32, GameConfig.SCALE_640 / 1.2 * 38),
                cc.rectContainsPoint(c, e) && (d[b].GetUserData().IsThrowInSelf = 1,
                a.ballBasket = 1,
                4 != d[b].GetUserData().type && a.throwInBasketNum++,
                a.setLocalZOrder(1),
                a.scheduleOnce(function() {
                    a.setLocalZOrder(3)
                }, 0.2),
                d[b].GetUserData().basketEffect()))
    },
    slowEffect: function(a) {
        console.log("slowEffect");
        a = a.getPositionY();
        a <= basketBelowHeight + 50 && (console.log("basketBelowHeight"),
        0 == IsSlowBelow && (IsSlowBelow = 1,
        basketBelowSpeed /= 2,
        this.chooseBasketsArray(basketsBelowArray, basketBelowSpeed, 0, IsSlowBelow)));
        basketBelowHeight + 85 <= a && a <= basketMiddleHeight + 50 && (console.log("basketMiddleHeight"),
        0 == IsSlowMiddle && (IsSlowMiddle = 1,
        basketMiddleSpeed /= 2,
        this.chooseBasketsArray(basketsMiddleArray, basketMiddleSpeed, 1, IsSlowMiddle)));
        basketMiddleHeight + 85 <= a && a <= basketTopHeight + 50 && (console.log("basketTopHeight"),
        0 == IsSlowTop && (IsSlowTop = 1,
        basketTopSpeed /= 2,
        this.chooseBasketsArray(basketsTopArray, basketTopSpeed, 2, IsSlowTop)))
    },
    chooseBasketsArray: function(a, b, c, d) {
        for (d = 0; d < a.length; d++)
            a[d] && a[d].SetLinearVelocity(cc.p(b, 0));
        this.scheduleOnce(function() {
            switch (c) {
            case 0:
                basketBelowSpeed *= 2;
                for (var b = IsSlowBelow = 0; b < a.length; b++)
                    a[b] && a[b].SetLinearVelocity(cc.p(basketBelowSpeed, 0));
                break;
            case 1:
                basketMiddleSpeed *= 2;
                for (b = IsSlowMiddle = 0; b < a.length; b++)
                    a[b] && a[b].SetLinearVelocity(cc.p(basketMiddleSpeed, 0));
                break;
            case 2:
                for (basketTopSpeed *= 2,
                b = IsSlowTop = 0; b < a.length; b++)
                    a[b] && a[b].SetLinearVelocity(cc.p(basketTopSpeed, 0))
            }
        }, retainTime)
    },
    createBody: function(a, b, c, d) {
        switch (d) {
        case 1:
            var e = ccs.load(res.basketYellow_Json).node;
            e.setTag(101);
            e.basketEffect = function() {
                this.TextAction(2);
                var a = new cc.scaleBy(0.2,1,1.2)
                  , b = new cc.scaleBy(0.1,1,0.9)
                  , a = new cc.Sequence(a,b);
                this.getChildByName("basketNet").runAction(a);
                PlayMusic(res.E_BASKET_SHOT_ogg, !1, 0.3)
            }
            ;
            break;
        case 2:
            e = ccs.load(res.basketBlue_Json).node;
            e.setTag(101);
            e.basketEffect = function() {
                this.TextAction(1);
                this.getParent().slowEffect(this);
                var a = new cc.scaleBy(0.2,1,1.2)
                  , b = new cc.scaleBy(0.1,1,0.9)
                  , a = new cc.Sequence(a,b);
                this.getChildByName("basketNet").runAction(a);
                PlayMusic(res.E_BASKET_SHOT_ogg, !1, 0.3)
            }
            ;
            break;
        case 3:
            e = ccs.load(res.basketGreen_Json).node;
            e.setTag(101);
            e.basketEffect = function() {
                this.TextAction(2);
                var a = new cc.scaleBy(0.2,1,1.2)
                  , b = new cc.scaleBy(0.1,1,0.9)
                  , a = new cc.Sequence(a,b);
                this.getChildByName("basketNet").runAction(a);
                PlayMusic(res.E_BASKET_Good_ogg, !1, 0.3)
            }
            ;
            break;
        case 4:
            e = ccs.load(res.basketRed_Json).node,
            e.setTag(101),
            e.basketEffect = function() {
                playerSprite.throwErrorAniamtion();
                PlayMusic(res.E_BASKET_CLEAN_ogg, !1, 0.3);
                0 != getFever && (Bar = 0,
                hyperBar = superBar = 1,
                finalBar = getFever = 0);
                var a = new cc.scaleBy(0.2,1,1.2)
                  , b = new cc.scaleBy(0.1,1,0.9)
                  , a = new cc.Sequence(a,b);
                this.getChildByName("basketNet").runAction(a)
            }
        }
        e.setPosition(a);
        e.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        e.IsThrowInSelf = 0;
        e.type = d;
        this.addChild(e, 2);
        e.TextAction = function(a) {
            var b = ccs.load(res.score_Json).node;
            b.setPosition(e.getPositionX() + 10, e.getPositionY() - 100);
            b.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
            this.getParent().addChild(b, 4);
            var c = ccui.helper.seekWidgetByName(b, "Text_score")
              , d = ccui.helper.seekWidgetByName(b, "Text_Peishu")
              , f = 1
              , p = 0;
            getFever += oneBaseFever;
            switch (parseInt(getFever / 1E3)) {
            case 0:
                f = 1;
                p = getFever;
                break;
            case 1:
            case 2:
                f = 6;
                p = getFever;
                break;
            default:
                f = 8,
                p = 3E3
            }
            getScore += getFever * f * a;
            c.setString(p);
            d.setString(f);
            a = new cc.FadeIn(0.3);
            c = new cc.FadeOut(0.3);
            d = new cc.CallFunc(this.removeTextNode,this,b);
            b.runAction(cc.sequence(a, c, d))
        }
        ;
        e.removeTextNode = function(a) {
            a.removeFromParent()
        }
        ;
        d = new b2BodyDef;
        d.type = b;
        d.position.Set(a.x / PTM_RATIO, a.y / PTM_RATIO);
        a = this.world.CreateBody(d);
        a.SetUserData(e);
        b = new b2FixtureDef;
        b.shape = f;
        b.density = 1;
        b.friction = 0.3;
        b.restitution = 0.5;
        var f = new b2PolygonShape;
        f.SetAsOrientedBox(GameConfig.SCALE_640 / 1.2 * 0.1, GameConfig.SCALE_640 / 1.2 * 0.3, new b2Vec2(GameConfig.SCALE_640 / 1.2 * -1.5,0), 0);
        b.shape = f;
        a.CreateFixture(b);
        f = new b2PolygonShape;
        f.SetAsOrientedBox(GameConfig.SCALE_640 / 1.2 * 0.1, GameConfig.SCALE_640 / 1.2 * 0.3, new b2Vec2(GameConfig.SCALE_640 / 1.2 * 1.5,0), 0);
        b.shape = f;
        a.CreateFixture(b);
        a.SetLinearVelocity(cc.p(c, 0));
        return a
    }
});
var role = cc.Sprite.extend({
    ctor: function(a, b) {
        this._super("#1.png");
        this.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.runAction(cc.repeatForever(this.normalAniamtion()))
    },
    normalAniamtion: function() {
        this.stopAllActions();
        for (var a = new cc.Animation, b = 1; 5 > b; b++) {
            var c = cc.spriteFrameCache.getSpriteFrame(b + ".png");
            a.addSpriteFrame(c)
        }
        a.setDelayPerUnit(0.15);
        a.setRestoreOriginalFrame(!0);
        return cc.animate(a)
    },
    throwAniamtion: function() {
        this.stopAllActions();
        var a = new cc.Animation
          , b = cc.spriteFrameCache.getSpriteFrame("5.png");
        a.addSpriteFrame(b);
        a.setDelayPerUnit(0.05);
        a.setRestoreOriginalFrame(!0);
        var a = cc.animate(a)
          , c = new cc.RepeatForever(this.normalAniamtion());
        this.runAction(a);
        this.scheduleOnce(function() {
            this.runAction(cc.sequence(c))
        }, 0.05)
    },
    throwErrorAniamtion: function() {
        this.stopAllActions();
        var a = new cc.Animation
          , b = cc.spriteFrameCache.getSpriteFrame("c5.png");
        a.addSpriteFrame(b);
        a.setDelayPerUnit(0.3);
        a.setRestoreOriginalFrame(!0);
        var a = cc.animate(a)
          , c = new cc.RepeatForever(this.normalAniamtion());
        this.runAction(a);
        this.scheduleOnce(function() {
            this.runAction(cc.sequence(c))
        }, 0.5)
    }
});
var PTM_RATIO = 32, b2Vec2 = Box2D.Common.Math.b2Vec2, b2BodyDef = Box2D.Dynamics.b2BodyDef, b2Body = Box2D.Dynamics.b2Body, b2FixtureDef = Box2D.Dynamics.b2FixtureDef, b2World = Box2D.Dynamics.b2World, b2Circle = Box2D.Collision.Shapes.b2CircleShape, b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape, b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape, b2DebugDraw = Box2D.Dynamics.b2DebugDraw, b2ContactListener = Box2D.Dynamics.b2ContactListener, b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef, physicsWorld, size, Bar, superBar, hyperBar, finalBar, retainTime, totalTime, getScore, getFever, oneBaseFever, oneBaseGoal, twoGoalsMultiple, threeGoalsMultiple, playerSprite, basketBelowSpeed, basketMiddleSpeed, basketTopSpeed, increaseSpeed, catHasBall, catIsCanThrowBall, IsSlowBelow, IsSlowMiddle, IsSlowTop;
basketBelowHeight = 0.35 * GameConfig.STAGE_HEIGHT;
basketMiddleHeight = 0.55 * GameConfig.STAGE_HEIGHT;
basketTopHeight = 0.75 * GameConfig.STAGE_HEIGHT;
var init = function() {
    physicsWorld;
    size;
    superBar = Bar = 1;
    finalBar = 0;
    basketsTopArray = [];
    basketsMiddleArray = [];
    basketsBelowArray = [];
    basketsDelArray = [];
    ballArray = [];
    ballDelArray = [];
    basketBelowHeight = 0.35 * GameConfig.STAGE_HEIGHT;
    basketMiddleHeight = 0.55 * GameConfig.STAGE_HEIGHT;
    basketTopHeight = 0.75 * GameConfig.STAGE_HEIGHT;
    basketBelowSpeed = 6;
    basketMiddleSpeed = -6;
    basketTopSpeed = 6;
    increaseSpeed = 1;
    catHasBall = 0;
    catIsCanThrowBall = 1;
    IsSlowTop = IsSlowMiddle = IsSlowBelow = 0;
    totalTime = 10; //游戏时间
    getFever = getScore = 0;
    oneBaseGoal = oneBaseFever = 100;
    twoGoalsMultiple = 4;
    threeGoalsMultiple = 6;
    retainTime = 2
}, HelloWorldLayer = cc.Layer.extend({
    world: null ,
    ctor: function() {
        this._super();
        this.initPhysics();
        this.scheduleUpdate();
        return !0
    },
    setDebugDraw: function() {
        null == this._dbgDraw && (this._dbgDraw = new b2DebugDraw);
        null == this._drawSprite && (this._drawSprite = new cc.Sprite);
        this._dbgDraw.m_sprite = this._drawSprite;
        this._dbgDraw.m_drawScale = 30;
        this._dbgDraw.m_drawFlags = b2DebugDraw.e_jointBit | b2DebugDraw.e_shapeBit | b2DebugDraw.e_aabbBit;
        this._dbgDraw.m_fillAlpha = 0.3;
        this._dbgDraw.m_lineThickness = 2;
        physicsWorld.SetDebugDraw(this._dbgDraw);
        this.addChild(this._drawSprite)
    },
    initPhysics: function() {
        cc.director.getWinSize();
        this.world = new b2World(new b2Vec2(0,-50),!0);
        this.world.SetContinuousPhysics(!0);
        physicsWorld = this.world;
        var a = new b2ContactListener;
        a.EndContact = function(a) {
            var c = a.GetFixtureA().GetBody();
            a = a.GetFixtureB().GetBody();
            var d = c.GetUserData(), e = a.GetUserData(), f, g;
            if (null != d && null != e) {
                101 == d.getTag() ? (f = d,
                g = c) : (f = e,
                g = a);
                var h = 1;
                1 == h && (h = 0,
                PlayMusic(res.BallOON_ogg, !1, 0.2),
                g.SetLinearVelocity(cc.p(g.GetLinearVelocity().x, -2)),
                f.scheduleOnce(function() {
                    g.SetLinearVelocity(cc.p(g.GetLinearVelocity().x, 2));
                    f.scheduleOnce(function() {
                        g.SetLinearVelocity(cc.p(g.GetLinearVelocity().x, 0));
                        h = 1
                    }, 0.02)
                }, 0.02))
            }
        }
        ;
        this.world.SetContactListener(a)
    },
    animate: function() {
        this.world.Step(1 / 60, 8, 1);
        this.world.ClearForces();
        this.world.DrawDebugData();
        setTimeout(this.animate, 1 / 60)
    },
    update: function(a) {
        this.world.Step(a, 8, 1);
        for (a = this.world.GetBodyList(); a; a = a.GetNext())
            if (null != a.GetUserData()) {
                var b = a.GetUserData();
                b.x = a.GetPosition().x * PTM_RATIO;
                b.y = a.GetPosition().y * PTM_RATIO;
                b.rotation = -1 * cc.radiansToDegrees(a.GetAngle())
            }
    }
}), uiLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var a = ccs.load(res.middleLayer_Json).node;
        this.addChild(a);
        var b = ccui.helper.seekWidgetByName(a, "middlePanel");
        b.setAnchorPoint(0.5, 0.5);
        b.setPosition(GameConfig.STAGE_WIDTH / 2, GameConfig.STAGE_HEIGHT / 2);
        a = Math.max(GameConfig.STAGE_WIDTH / 480, GameConfig.STAGE_HEIGHT / 628);
        b.setScale(a, a);
        b = new cc.Sprite(res.groove_png);
        b.attr({
            x: GameConfig.STAGE_WIDTH / 2,
            y: basketTopHeight,
            anchorX: 0.5,
            anchorY: 0.5
        });
        b.setScale(a, a);
        this.addChild(b);
        b = new cc.Sprite(res.groove_png);
        b.attr({
            x: GameConfig.STAGE_WIDTH / 2,
            y: basketMiddleHeight,
            anchorX: 0.5,
            anchorY: 0.5
        });
        b.setScale(a, a);
        this.addChild(b);
        b = new cc.Sprite(res.groove_png);
        b.attr({
            x: GameConfig.STAGE_WIDTH / 2,
            y: basketBelowHeight,
            anchorX: 0.5,
            anchorY: 0.5
        });
        b.setScale(a, a);
        this.addChild(b);
        a = ccs.load(res.upLayer_Json).node;
        this.addChild(a);
        a = ccui.helper.seekWidgetByName(a, "upBar_1");
        a.setAnchorPoint(0, 1);
        a.setPosition(0, GameConfig.STAGE_HEIGHT);
        b = ccs.load(res.downLayer_Json).node;
        this.addChild(b, 12);
        b = ccui.helper.seekWidgetByName(b, "downKuang_7");
        b.setPosition(0, 0);
        GameConfig.STAGE_WIDTH > GameConfig.STAGE_HEIGHT ? (a.setScale(GameConfig.SCALE_960, GameConfig.SCALE_960),
        b.setScale(GameConfig.SCALE_960, GameConfig.SCALE_960)) : (a.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640),
        b.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640));
        new basket(physicsWorld,this,cc.p(0, 0),3,b.getBoundingBox().height);
        this.playerTime = totalTime;
        this.timeProgress = ccui.helper.seekWidgetByName(a, "LoadingBar_1");
        this.timeProgress.setPercent(100);
        this.scoreLabel = ccui.helper.seekWidgetByName(a, "Text_2");
        this.scoreLabel.setString(getScore);
        this.timeLabel = ccui.helper.seekWidgetByName(a, "Text_3");
        this.timeLabel.setString(this.playerTime);
        this.FeverLabel = ccui.helper.seekWidgetByName(b, "FeverLabel");
        this.FeverLabel.setString("FEVER");
        this.feverLoadingBar = ccui.helper.seekWidgetByName(b, "LoadingBar_Fever");
        this.feverLoadingBar.setPercent(0);
        this.schedule(function() {
            this.updateProgress()
        }, 1)
    },
    shakeEdgeAction: function(a, b, c, d, e, f) {
        a.stopAllActions();
        b = new cc.Blink(b,c);
        d = new cc.tintTo(0.5,d,e,f);
        e = new cc.FadeOut(0.5);
        d = new cc.sequence(d,b,e);
        a.runAction(d)
    },
    buttonClickEvent: function(a) {
        "Button_Pause" == a.getName() && (GameLayer.onExit(),
        new GamePause(GameLayer.getParent(),3))
    },
    updateProgress: function() {
        this.scoreLabel.setString(getScore);
        0 < this.playerTime && (this.playerTime--,
        this.timeLabel && this.timeLabel.setString(this.playerTime),
        this.timeProgress.setPercent(this.playerTime / totalTime * 100));
        if (0 == this.playerTime) {
            GameLayer.onExit();
            var a = cc.sys.localStorage.getItem("bestScore");
            null == a || "" == a ? (cc.sys.localStorage.setItem("bestScore", getScore),
            a = getScore) : a < getScore && cc.sys.localStorage.setItem("bestScore", getScore);
            cc.log(a);
            a = new GameOverScene(getScore,a);
            GameLayer.getParent().addChild(a, 8)
        }
        a = 0;
        if (1E3 > getFever) {
            var b = res.gm_fever_bar_png;
            0 == Bar && (this.feverLoadingBar.loadTexture(b),
            a = 0,
            this.FeverLabel.setString("FEVER"),
            this.feverLoadingBar.setPercent(a),
            Bar = 1);
            a = getFever / 1E3 * 100;
            this.feverLoadingBar.setPercent(a)
        } else
            2E3 > getFever ? (b = res.gm_super_fever_bar_png,
            1 == superBar && (PlayMusic(res.Pang_fever, !1, 0.3),
            this.FeverLabel.setString("SUPER FEVER"),
            a = 0,
            this.feverLoadingBar.loadTexture(b),
            this.feverLoadingBar.setPercent(a),
            superBar = 0,
            basketBelowSpeed += increaseSpeed,
            basketMiddleSpeed -= increaseSpeed,
            basketTopSpeed += increaseSpeed,
            SpeedBasketsArray(basketsBelowArray, basketBelowSpeed),
            SpeedBasketsArray(basketsMiddleArray, basketMiddleSpeed),
            SpeedBasketsArray(basketsTopArray, basketTopSpeed)),
            a = (getFever - 1E3) / 1E3 * 100,
            this.feverLoadingBar.setPercent(a)) : 3E3 > getFever ? (b = res.gm_hyper_fever_bar_png,
            1 == hyperBar && (PlayMusic(res.Pang_fever_02, !1, 0.3),
            this.FeverLabel.setString("HYPER\u3000FEVER"),
            a = 0,
            this.feverLoadingBar.loadTexture(b),
            this.feverLoadingBar.setPercent(a),
            hyperBar = 0,
            basketBelowSpeed += increaseSpeed,
            basketMiddleSpeed -= increaseSpeed,
            basketTopSpeed += increaseSpeed,
            SpeedBasketsArray(basketsBelowArray, basketBelowSpeed),
            SpeedBasketsArray(basketsMiddleArray, basketMiddleSpeed),
            SpeedBasketsArray(basketsTopArray, basketTopSpeed)),
            a = (getFever - 2E3) / 1E3 * 100,
            this.feverLoadingBar.setPercent(a)) : (this.feverLoadingBar.setPercent(100),
            0 == finalBar && (PlayMusic(res.Pang_fever_03, !1, 0.3),
            finalBar = 1,
            basketBelowSpeed += increaseSpeed,
            basketMiddleSpeed -= increaseSpeed,
            basketTopSpeed += increaseSpeed,
            SpeedBasketsArray(basketsBelowArray, basketBelowSpeed),
            SpeedBasketsArray(basketsMiddleArray, basketMiddleSpeed),
            SpeedBasketsArray(basketsTopArray, basketTopSpeed)))
    }
}), PlayMusic = function(a, b, c) {
    cc.audioEngine.playEffect(a, b);
    cc.audioEngine.setEffectsVolume(c)
}, GameLayer, basketballScene = cc.Scene.extend({
    onEnter: function() {
        init();
        this._super();
        size = cc.director.getWinSize();
        cc.spriteFrameCache.addSpriteFrames(res.basket_plist);
        cc.spriteFrameCache.addSpriteFrames(res.role_plist);
        cc.spriteFrameCache.addSpriteFrames(res.g_ui_plist);
        GameLayer = new cc.Layer;
        GameLayer.setPosition(0, 0);
        this.addChild(GameLayer);
        var a = new HelloWorldLayer;
        GameLayer.addChild(a, 1);
        a = new uiLayer;
        GameLayer.addChild(a);
        a = cc.sys.localStorage.getItem("playNum", 1);
        if (null == a || "" == a)
            GameLayer.onExit(),
            cc.sys.localStorage.setItem("playNum", 1),
            a = new HelpScene,
            this.addChild(a)
    },
    onEnterTransitionDidFinish: function() {
        cc.audioEngine.playMusic(res.GameBG_ogg, !0);
        cc.audioEngine.setMusicVolume(0.2)
    },
    onExit: function() {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.stopMusic();
        cc.eventManager.removeAllListeners()
    }
});
var LotteryNWXLayer = cc.Layer.extend({
    isSuccess: null ,
    bg: null ,
    lotteryFrame: null ,
    userName: null ,
    phoneNumber: null ,
    submitSuccess: null ,
    promptBoxName: null ,
    promptBoxPhone: null ,
    submitLoading: null ,
    mv: null ,
    ctor: function() {
        this._super();
        this.isSuccess = 0;
        this.initTouch()
    },
    initTouch: function() {
        var a = cc.rect(this.lotteryFrame.x + 0.2 * this.lotteryFrame.getBoundingBox().width, this.lotteryFrame.y + 0.3 * this.lotteryFrame.getBoundingBox().height, GameConfig.STAGE_WIDTH, GameConfig.STAGE_HEIGHT)
          , b = cc.rect(this.lotteryFrame.x - 0.5 * this.lotteryFrame.getBoundingBox().width, this.lotteryFrame.y - 0.34 * this.lotteryFrame.getBoundingBox().height, this.lotteryFrame.x + 0.5 * this.lotteryFrame.getBoundingBox().width, 0.5 * this.lotteryFrame.getBoundingBox().height)
          , c = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: !0,
            onTouchBegan: function(c, e) {
                var f = c.getLocation();
                console.log(f);
                var g = e.getCurrentTarget();
                g.isSuccess ? cc.rectContainsPoint(b, f) && (cc.log("is submit"),
                g.getParent().removeChild(g)) : cc.rectContainsPoint(a, f) && (cc.log("is show"),
                g.getParent().removeChild(g));
                return !0
            },
            onTouchMoved: function(a, b) {},
            onTouchEnded: function(a, b) {}
        });
        cc.eventManager.addListener(c, this)
    },
    showSuccess: function() {
        
    },
    check: function() {
        var a = 0;
        this.promptBoxPhone.visible = !1;
        this.promptBoxName.visible = !1;
        GameConfig.isTelephone(parseInt(this.phoneNumber.getString())) || (this.promptBoxPhone.visible = !0,
        a++);
        "" == this.userName.getString() && (this.promptBoxName.visible = !0,
        a++);
        cc.log(a);
        return 0 < a ? !1 : !0
    }
})
  , LotteryNWXScene = cc.Scene.extend({
    ctor: function() {
        this._super();
        var a = new LotteryNWXLayer;
        this.addChild(a)
    }
});
var LotteryWXLayer = cc.Layer.extend({
    bg: null ,
    haveBg: null ,
    sureLottery: null ,
    cancleLottery: null ,
    lotteryBg: null ,
    successLottery: null ,
    failLottery: null ,
    loading: null ,
    time: null ,
    getCount: null ,
    userName: null ,
    phoneNumber: null ,
    address: null ,
    promptBoxName: null ,
    promptBoxPhone: null ,
    promptBoxAddress: null ,
    isSuccess: null ,
    successScene: null ,
    mv: null ,
    ctor: function() {
        this._super();
        this.isSuccess = this.getCount = this.time = 0
    },
    initTouch: function() {
        var a = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: !0,
            onTouchBegan: function(a, c) {
                var d = a.getLocation()
                  , e = c.getCurrentTarget()
                  , f = e.isSuccess ? cc.rect(this.successScene.x - 0.5 * this.successScene.getBoundingBox().width, this.successScene.y - 0.3 * this.successScene.getBoundingBox().height, this.successScene.x + 0.5 * this.successScene.getBoundingBox().width, this.successScene.y - 0.5 * this.successScene.getBoundingBox().height) : cc.rect(this.lotteryBg.x + 0.2 * this.lotteryBg.getBoundingBox().width, this.lotteryBg.y + 0.3 * this.lotteryBg.getBoundingBox().height, this.lotteryBg.x + 0.5 * this.lotteryBg.getBoundingBox().width, this.lotteryBg.y + 0.5 * this.lotteryBg.getBoundingBox().height);
                cc.rectContainsPoint(f, d) && e.getParent().removeChild(e);
                return !0
            }
            .bind(this),
            onTouchMoved: function(a, c) {},
            onTouchEnded: function(a, c) {}
        });
        cc.eventManager.addListener(a, this)
    },
    sendRequest: function() {
        GameConfig.weixin.getLottery_id();
        this.schedule(this.checkResponseTime1, 0.1)
    },
    checkResponseTime1: function() {
        GameConfig.weixin.getLotteryIdChange && (GameConfig.weixin.getLotteryIdChange = 0,
        this.unschedule(this.checkResponseTime1),
        GameConfig.weixin.is_getLottery_id ? (GameConfig.weixin.isZhongjiang(),
        this.schedule(this.checkResponseTime2, 0.1)) : (this.showFail(),
        this.initTouch()))
    },
    checkResponseTime2: function() {
        this.time++;
        0 == this.time % 10 && (this.getCount++,
        GameConfig.weixin.getZhongjiangChange && (GameConfig.weixin.getZhongjiangChange = 0,
        console.log(GameConfig.weixin.is_zhongjiang + ",,is"),
        2 == GameConfig.weixin.is_zhongjiang ? (console.log(this.getCount),
        3 <= this.getCount && (this.showFail(),
        this.initTouch(),
        this.unschedule(this.checkResponseTime2),
        this.unschedule(this.updateLoad),
        this.loading.getParent().removeChild(this.loading)),
        GameConfig.weixin.isZhongjiang()) : (1 == GameConfig.weixin.is_zhongjiang ? this.showSuccess() : this.showFail(),
        this.initTouch(),
        this.unschedule(this.checkResponseTime2),
        this.unschedule(this.updateLoad),
        this.loading.getParent().removeChild(this.loading))))
    },
    updateLoad: function() {
        this.loading.rotation += 15
    },
    showSuccess: function() {
        this.lotteryBg = new cc.Sprite(res.lottery_wx_zhongjiang);
        this.lotteryBg.setPosition(GameConfig.STAGE_WIDTH / 2, GameConfig.STAGE_HEIGHT / 2);
        this.lotteryBg.setScale(4 * GameConfig.SCALE_640 / 3, 1.2 * GameConfig.SCALE_640);
        this.addChild(this.lotteryBg);
        this.userName = new cc.EditBox(cc.size(295, 60),new cc.Scale9Sprite("res/inputBg.png"),new cc.Scale9Sprite("res/inputBg.png"));
        this.userName.anchorX = this.userName.anchorY = 0;
        this.userName.setString("");
        this.userName.x = 127;
        this.userName.y = 535;
        this.userName.setFontColor(cc.color(0, 0, 0, 0));
        this.userName.setDelegate(this);
        this.userName.setFontSize(28);
        this.lotteryBg.addChild(this.userName);
        this.promptBoxName = new cc.LabelTTF("**\u540d\u5b57\u4e3a\u7a7a","Arial",14);
        this.promptBoxName.setColor(cc.color(0, 0, 0, 0));
        this.lotteryBg.addChild(this.promptBoxName);
        this.promptBoxName.x = 160;
        this.promptBoxName.y = 535;
        this.promptBoxName.visible = !1;
        this.promptBoxName.setColor(cc.color(255, 0, 0));
        this.phoneNumber = new cc.EditBox(cc.size(295, 60),new cc.Scale9Sprite("res/inputBg.png"),new cc.Scale9Sprite("res/inputBg.png"));
        this.phoneNumber.anchorX = this.phoneNumber.anchorY = 0;
        this.phoneNumber.setString("");
        this.phoneNumber.x = 127;
        this.phoneNumber.y = 472;
        this.phoneNumber.setFontColor(cc.color(0, 0, 0, 0));
        this.phoneNumber.setDelegate(this);
        this.phoneNumber.setFontSize(28);
        this.lotteryBg.addChild(this.phoneNumber);
        this.promptBoxPhone = new cc.LabelTTF("**\u7535\u8bdd\u53f7\u7801\u4e3a\u7a7a\u6216\u683c\u5f0f\u9519\u8bef","Arial",14);
        this.promptBoxPhone.setColor(cc.color(0, 0, 0, 0));
        this.lotteryBg.addChild(this.promptBoxPhone);
        this.promptBoxPhone.x = 210;
        this.promptBoxPhone.y = 473;
        this.promptBoxPhone.visible = !1;
        this.promptBoxPhone.setColor(cc.color(255, 0, 0));
        this.address = new cc.EditBox(cc.size(295, 60),new cc.Scale9Sprite("res/inputBg.png"),new cc.Scale9Sprite("res/inputBg.png"));
        this.address.anchorX = this.phoneNumber.anchorY = 0;
        this.address.setString("");
        this.address.x = 127;
        this.address.y = 447;
        this.address.setFontColor(cc.color(0, 0, 0, 0));
        this.address.setDelegate(this);
        this.address.setFontSize(28);
        this.lotteryBg.addChild(this.address);
        this.promptBoxAddress = new cc.LabelTTF("**\u5730\u5740\u4e3a\u7a7a","Arial",14);
        this.promptBoxAddress.setColor(cc.color(0, 0, 0, 0));
        this.lotteryBg.addChild(this.promptBoxAddress);
        this.promptBoxAddress.x = 160;
        this.promptBoxAddress.y = 360;
        this.promptBoxAddress.visible = !1;
        this.promptBoxAddress.setColor(cc.color(255, 0, 0))
    },
    showFail: function() {
        this.lotteryBg = new cc.Sprite(res.lottery_wx_shibai);
        this.lotteryBg.setPosition(GameConfig.STAGE_WIDTH / 2, GameConfig.STAGE_HEIGHT / 2);
        this.lotteryBg.setScale(4 * GameConfig.SCALE_640 / 3, 1.25 * GameConfig.SCALE_640);
        this.addChild(this.lotteryBg);
        var a = new cc.MenuItemImage(res.lottery_qd,res.lottery_qd,function() {
            this.getParent().removeChild(this)
        }
        ,this);
        a.x = GameConfig.STAGE_WIDTH / 2;
        a.y = GameConfig.STAGE_HEIGHT / 2 - 120;
        a = new cc.Menu(a);
        this.addChild(a, 10);
        a.setScale(1.25 * GameConfig.SCALE_640, 1.25 * GameConfig.SCALE_640);
        a.x = 0;
        a.y = 0
    },
    submitSuccess: function() {
        // this.successScene = new cc.Sprite(res.send_over);
        // this.addChild(this.successScene);
        // this.successScene.setScale(1.25 * GameConfig.SCALE_640, 1.25 * GameConfig.SCALE_640);
        // this.successScene.setPosition(GameConfig.STAGE_WIDTH / 2, GameConfig.STAGE_HEIGHT / 2);
        // this.successLottery.visible = !1;
    },
    check: function() {
        var a = 0;
        this.promptBoxAddress.visible = !1;
        this.promptBoxPhone.visible = !1;
        this.promptBoxName.visible = !1;
        GameConfig.isTelephone(parseInt(this.phoneNumber.getString())) || (this.promptBoxPhone.visible = !0,
        a++);
        "" == this.userName.getString() && (this.promptBoxName.visible = !0,
        a++);
        "" == this.address.getString() && (this.promptBoxAddress.visible = !0,
        a++);
        cc.log(a);
        return 0 < a ? !1 : !0
    }
})
  , LotteryWXScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var a = new LotteryWXLayer;
        this.addChild(a)
    }
});
var GameOverLayer = cc.Layer.extend({
    bg: null ,
    lotteryFrame: null ,
    end: null ,
    lmask: null,
    againBtn: null ,
    bangBtn: null ,
    currentScoreText: null ,
    highestScoreText: null ,
    percent: null ,
    rank: null ,
    game_id: null ,
    minScore: null ,
    ctor: function(a, b) {
        this._super();
        this.game_id = 12;
        this.minScore = 1E3;
        GameConfig.score = a;
        this.initLotteryByType(a, b);
        inviteIcon = cc.Sprite.create(res.invite_icon_png);
        inviteIcon.setPosition(cc.winSize.width - inviteIcon.width / 2 - 10, cc.winSize.height - inviteIcon.height / 2 - 10);
        this.addChild(inviteIcon)
    },
    initLotteryByType: function(a, b) {
        this.lmask = new cc.LayerColor(cc.color(0,0,0,160), 750, 1280);
        this.addChild(this.lmask);
        this.end = new cc.Sprite(res.end);
        this.addChild(this.end);
        this.end.setAnchorPoint(0.5, 0.5);
        this.end.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.end.x = GameConfig.STAGE_WIDTH / 2;
        this.end.y = GameConfig.STAGE_HEIGHT / 2;
        var c = new cc.MenuItemImage(res.again,res.again,function() {
            this.getParent().removeFromParent();
            cc.director.runScene(new basketballScene)
        }
        ,this);
        c.x = GameConfig.STAGE_WIDTH / 2 - 100;
        c.y = GameConfig.STAGE_HEIGHT / 2 - 220;
        this.againBtn = new cc.Menu(c);
        this.addChild(this.againBtn, 10);
        this.againBtn.setScale(GameConfig.SCALE_800, GameConfig.SCALE_800);
        this.againBtn.x = 0;
        this.againBtn.y = 0;
        
        // 排行榜按钮
        var bb = new cc.MenuItemImage(res.bang,res.bang,function() {
            alert('msg');
        }
        ,this);
        bb.x = GameConfig.STAGE_WIDTH / 2 + 100;
        bb.y = GameConfig.STAGE_HEIGHT / 2 - 220;
        this.bangBtn = new cc.Menu(bb);
        this.addChild(this.bangBtn, 10);
        this.bangBtn.setScale(GameConfig.SCALE_800, GameConfig.SCALE_800);
        this.bangBtn.x = 0;
        this.bangBtn.y = 0;

        this.currentScoreText = new cc.LabelBMFont(0,"res/all4_0.fnt");
        this.currentScoreText.setString(a);
        this.end.addChild(this.currentScoreText, 2);
        this.currentScoreText.setScale(0.8);
        this.currentScoreText.x = 238;
        this.currentScoreText.y = 385;
        var cs = this.currentScoreText._string;
        this.highestScoreText = new cc.LabelBMFont(0,"res/all4_0.fnt");
        this.highestScoreText.setString(b);
        this.end.addChild(this.highestScoreText, 2);
        this.highestScoreText.setScale(0.8);
        this.highestScoreText.x = 238;
        this.highestScoreText.y = 300;
        var hs = this.highestScoreText._string;
        console.log(cs);
        console.log(hs);
    },
    checkChoujiangStatus1: function() {
        if (GameConfig.weixin.getChoujiangChange)
            if (GameConfig.weixin.getChoujiangChange = 0,
            GameConfig.weixin.is_have_choujiang)
                console.log("wx chou guo");
            else {
                console.log("wx mei chou guo");
                var a = new LotteryWXScene;
                this.getParent().addChild(a);
                this.unschedule(this.checkChoujiangStatus1)
            }
    },
    checkChoujiangStatus2: function() {
        if (GameConfig.weixin.getChoujiangChange)
            if (GameConfig.weixin.getChoujiangChange = 0,
            GameConfig.weixin.is_have_choujiang)
                console.log("nwx chou guo");
            else {
                console.log("nwx mei chou guo");
                var a = new LotteryNWXScene;
                this.getParent().addChild(a);
                this.unschedule(this.checkChoujiangStatus2)
            }
    },
    onRank: function(a, b) {
        var c;
        try {
            c = JSON.parse(a)
        } catch (d) {
            return
        }
        var e = Math.floor(parseFloat(c.beatCounts) / (parseFloat(c.beatCounts) + parseFloat(c.rank)) * 100);
        this.percent.setString(e + "%");
        this.rank.setString(parseInt(c.rank));
        parseInt(this.currentScoreText.getString()) >= this.minScore && (console.log("\u663e\u793a\u62bd\u5956"),
        // GameConfig.weixin.iswx() ? (console.log("shi wei xin"),
        GameConfig.weixin.isHaveChoujiang(),
        // this.schedule(this.checkChoujiangStatus1, 0.1)) : (console.log("bu shi wei xin"),
        GameConfig.weixin.isHaveChoujiangOther(),
        this.schedule(this.checkChoujiangStatus2, 0.1))
    }
})
  , GameOverScene = cc.Scene.extend({
    ctor: function(a, b) {
        this._super();
        var c = new GameOverLayer(a,b);
        this.addChild(c);
        // setShare("\u6211\u5c04\u8fdb" + a + "\u5206\uff0c\u4e0d\u670d\u6765\u6218")
    }
});
var HelpLayerOnFirstEnter = cc.Layer.extend({
    layerBg: null ,
    helpBg: null ,
    knowBtn: null ,
    ctor: function() {
        this._super();
        this.initLayerBg();
        this.initUI()
    },
    initLayerBg: function() {
        this.layerBg = new cc.Sprite(res.lottery_Bg);
        this.layerBg.x = GameConfig.STAGE_WIDTH / 2;
        this.layerBg.y = GameConfig.STAGE_HEIGHT / 2;
        console.log(GameConfig.SCALE_960, GameConfig.SCALE_640);
        this.layerBg.setScale(GameConfig.SCALE_960, GameConfig.SCALE_960);
        this.addChild(this.layerBg)
    },
    initUI: function() {
        this.hmask = new cc.LayerColor(cc.color(0,0,0,200), 750, 1280);
        this.addChild(this.hmask);
        this.helpBg = new cc.Sprite(res.helpBg);
        this.addChild(this.helpBg);
        this.knowBtn = new cc.Sprite(res.knowBtn);
        this.addChild(this.knowBtn);
        this.helpBg.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.knowBtn.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.helpBg.setAnchorPoint(0.5, 0.5);
        this.helpBg.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.knowBtn.setAnchorPoint(0.5, 0);
        this.knowBtn.x = cc.winSize.width / 2;
        this.knowBtn.y = 0.07 * this.helpBg.getBoundingBox().height;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: !0,
            onTouchBegan: function(a, b) {
                cc.log("begin");
                return !0
            },
            onTouchMoved: function(a, b) {},
            onTouchEnded: function(a, b) {
                b.getCurrentTarget().getParent().removeFromParent();
                GameLayer.onEnter();
                cc.log("end")
            }
        }, this.knowBtn)
    }
}),
HelpScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var a = new HelpLayerOnFirstEnter;
        this.addChild(a)
    }
});

var HelpLayer = cc.Layer.extend({
    layerBg: null ,
    helpBg: null ,
    hmask: null,
    knowBtn: null ,
    ctor: function() {
        this._super();
        this.initUI()
    },
    initUI: function() {
        this.hmask = new cc.LayerColor(cc.color(0,0,0,200), 750, 1280);
        this.addChild(this.hmask);
        this.helpBg = new cc.Sprite(res.helpBg);
        this.addChild(this.helpBg);
        this.knowBtn = new cc.Sprite(res.knowBtn);
        this.addChild(this.knowBtn);
        this.helpBg.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.knowBtn.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.helpBg.setAnchorPoint(0.5, 0.5);
        this.helpBg.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.knowBtn.setAnchorPoint(0.5, 0);
        this.knowBtn.x = cc.winSize.width / 2;
        this.knowBtn.y = 0.07 * this.helpBg.getBoundingBox().height;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: !0,
            onTouchBegan: function(a, b) {
                cc.log("begin");
                return !0
            },
            onTouchMoved: function(a, b) {},
            onTouchEnded: function(a, b) {
                b.getCurrentTarget().getParent().removeFromParent();
            }
        }, this.knowBtn)
    }
});
var loadingImg = "";
Loading = cc.Scene.extend({
    _interval: null ,
    _label: null ,
    _className: "LoaderScene",
    cb: null ,
    target: null ,
    loadbarBg: null ,
    loadbarBar: null ,
    btnItem1: null ,
    btnItem2: null ,
    starBtn: null ,
    helpBtn: null ,
    bg: null ,
    logo: null ,
    kylogo: null ,
    init: function() {
        var a = this
          , b = a._bgLayer = new cc.LayerColor(cc.color(0, 0, 0, 255));
        a.addChild(b, 0);
        GameConfig.STAGE_HEIGHT = cc.winSize.height;
        GameConfig.STAGE_WIDTH = cc.winSize.width;
        GameConfig.SCALE_960 = Math.max(GameConfig.STAGE_HEIGHT / 960, GameConfig.STAGE_WIDTH / 640);
        GameConfig.SCALE_640 = Math.min(GameConfig.STAGE_HEIGHT / 960, GameConfig.STAGE_WIDTH / 640);
        GameConfig.SCALE_800 = Math.max(GameConfig.STAGE_HEIGHT / 800, GameConfig.STAGE_WIDTH / 480);
        GameConfig.SCALE_480 = Math.min(GameConfig.STAGE_HEIGHT / 800, GameConfig.STAGE_WIDTH / 480);
        loadingImg && cc.loader.loadImg(ccj._loaderImage, {
            isCrossOrigin: !1
        }, function(b, c) {
            a._initStage(c, cc.visibleRect.center)
        });
        a.bg = new cc.Sprite(res.loading_bg);
        a.bg.setAnchorPoint(0.5, 0.5);
        b.addChild(a.bg);
        a.bg.setScale(GameConfig.SCALE_800, GameConfig.SCALE_800);
        a.bg.x = GameConfig.STAGE_WIDTH / 2;
        a.bg.y = GameConfig.STAGE_HEIGHT / 2;
        a.logo = new cc.Sprite(res.logo);
        b.addChild(a.logo);
        a.logo.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        a.logo.x = GameConfig.STAGE_WIDTH / 2;
        a.logo.y = 0.6 * GameConfig.STAGE_HEIGHT;
        var c = new cc.Sprite(res.start_btn)
          , d = new cc.Sprite(res.start_btn);
        c.setScale(1);
        d.setScale(1.02);
        a.btnItem1 = new cc.MenuItemSprite(c,d,a.btn1Click,a);
        this.starBtn = new cc.Menu(this.btnItem1);
        this.starBtn.setAnchorPoint(0, 0);
        this.starBtn.setPosition(GameConfig.STAGE_WIDTH / 2 + 110, 0.25 * GameConfig.STAGE_HEIGHT);
        this.starBtn.setScale(GameConfig.SCALE_800, GameConfig.SCALE_800);
        b.addChild(this.starBtn, 5);
        this.starBtn.visible = !1;
        var e = new cc.Sprite(res.help_btn)
          , f = new cc.Sprite(res.help_btn);
        e.setScale(1);
        f.setScale(1.02);
        a.btnItem2 = new cc.MenuItemSprite(e,f,a.btn2Click,a);
        this.helpBtn = new cc.Menu(this.btnItem2);
        this.helpBtn.setAnchorPoint(0, 0);
        this.helpBtn.setPosition(GameConfig.STAGE_WIDTH / 2 - 110, 0.25 * GameConfig.STAGE_HEIGHT);
        this.helpBtn.setScale(GameConfig.SCALE_800, GameConfig.SCALE_800);
        b.addChild(this.helpBtn, 5);
        this.helpBtn.visible = !1;
        this.loadbarBg = new cc.Sprite(res.loadingbar_bg);
        this.loadbarBar = new ccui.LoadingBar(res.loadingBar);
        this.loadbarBar.setPercent(0);
        b.addChild(this.loadbarBg, 6);
        b.addChild(this.loadbarBar, 7);
        this.loadbarBg.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.loadbarBar.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        this.loadbarBg.x = this.loadbarBar.x = GameConfig.STAGE_WIDTH / 2;
        this.loadbarBg.y = this.loadbarBar.y = 0.35 * GameConfig.STAGE_HEIGHT;
        c = a._label = new cc.LabelTTF("0%","Arial",24);
        c.setPosition(GameConfig.STAGE_WIDTH / 2, 0.3 * GameConfig.STAGE_HEIGHT);
        c.setColor(cc.color(255, 255, 255));
        c.setScale(GameConfig.SCALE_640, GameConfig.SCALE_640);
        b.addChild(this._label, 5);
        this.kylogo = new cc.Sprite(res.kylogo);
        b.addChild(a.kylogo);
        a.kylogo.setScale(GameConfig.SCALE_960, GameConfig.SCALE_960);
        a.kylogo.x = GameConfig.STAGE_WIDTH / 2;
        a.kylogo.y = 0.07 * GameConfig.STAGE_HEIGHT;
        return !0
    },
    btn1Click: function() {
        cc.director.runScene(new basketballScene)
    },
    btn2Click: function() {
        var a = new HelpLayer;
        this.addChild(a)
    },
    _initStage: function(a, b) {
        var c = this._texture2d = new cc.Texture2D;
        c.initWithElement(a);
        c.handleLoadedTexture();
        c = this._logo = new cc.Sprite(c);
        c.setScale(cc.contentScaleFactor());
        c.x = b.x;
        c.y = b.y;
        this._bgLayer.addChild(c, 0)
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this);
        this.schedule(this._startLoading, 0.3)
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this);
        this._label.setString("0%")
    },
    initWithResources: function(a, b, c) {
        cc.isString(a) && (a = [a]);
        this.resources = a || [];
        this.cb = b;
        this.target = c
    },
    _startLoading: function() {
        var a = this;
        a.unschedule(a._startLoading);
        cc.loader.load(a.resources, function(b, c, d) {
            b = Math.min(d / c * 100 | 0, 100);
            a._label.setString("" + b + "%");
            a.loadbarBar.setPercent(b)
        }, function() {
            a.loadbarBg.visible = !1;
            a.loadbarBar.visible = !1;
            a._label.visible = !1;
            a.starBtn.visible = !0;
            a.helpBtn.visible = !0
        })
    }
});
Loading.preload = function(a, b, c) {
    this.loaderScene || (this.loaderScene = new Loading,
    this.loaderScene.init());
    this.loaderScene.initWithResources(a, b, c);
    cc.director.runScene(this.loaderScene);
    return this.loaderScene
}
;
cc.game.onStart = function() {
    !cc.sys.isNative && document.getElementById("cocosLoading") && document.body.removeChild(document.getElementById("cocosLoading"));
    cc.view.enableAutoFullScreen(!1);
    cc.view.enableRetina(!1);
    cc.view.adjustViewPort(!0);
    cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.FIXED_WIDTH);
    cc.view.resizeWithBrowserSize(!1);
    Loading.preload(g_resources, function() {
        var a = new StartScene;
        cc.director.runScene(a);
        console.log("is over")
    }, this)
}
;
cc.game.run();