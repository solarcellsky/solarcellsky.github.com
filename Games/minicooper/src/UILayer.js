var S5j00 = {
    'U20': function(b, a) {
        return b / a;
    },
    'C20': function(b, a) {
        return b / a;
    },
    'A10': function(b, a) {
        return b / a;
    },
    'G10': function(b, a) {
        return b / a;
    },
    'E31': true,
    'q20': function(b, a) {
        return b / a;
    },
    'b20': function(b, a) {
        return b / a;
    },
    'G21': "",
    'P10': function(b, a) {
        return b / a;
    },
    'm30': function(b, a) {
        return b / a;
    },
    'l40': function(b, a) {
        return b == a;
    },
    'u40': function(b, a) {
        return b >= a;
    },
    'B30': function(b, a) {
        return b / a;
    },
    'e20': function(b, a) {
        return b / a;
    },
    'o40': function(b, a) {
        return b == a;
    },
    'Z00': function(b, a) {
        return b - a;
    },
    'x10': function(b, a) {
        return b / a;
    },
    'z20': function(b, a) {
        return b / a;
    },
    'h31': 0,
    'G31': "ui_plist",
    'W30': function(b, a) {
        return b / a;
    },
    'S10': function(b, a) {
        return b / a;
    },
    'F20': function(b, a) {
        return b / a;
    },
    'Z30': function(b, a) {
        return b - a;
    },
    'c40': function(b, a) {
        return b / a;
    },
    'L20': function(b, a) {
        return b == a;
    },
    'd30': function(b, a) {
        return b / a;
    },
    'Q21': "soundOn.png",
    'O20': function(b, a) {
        return b == a;
    },
    'D10': function(b, a) {
        return b - a;
    },
    'H30': function(b, a) {
        return b / a;
    },
    'T30': function(b, a) {
        return b / a;
    },
    'S21': "2Ways.sound",
    'I20': function(b, a) {
        return b == a;
    },
    'M10': function(b, a) {
        return b / a;
    },
    'N30': function(b, a) {
        return b / a;
    },
    'y30': function(b, a) {
        return b / a;
    },
    'a30': function(b, a) {
        return b / a;
    },
    'f40': function(b, a) {
        return b == a;
    },
    'W00': function(b, a) {
        return b - a;
    },
    't20': function(b, a) {
        return b / a;
    },
    'T00': function(b, a) {
        return b - a;
    },
    'Y10': function(b, a) {
        return b / a;
    },
    'j30': function(b, a) {
        return b / a;
    },
    'v30': function(b, a) {
        return b / a;
    },
    'f10': function(b, a) {
        return b / a;
    },
    'w20': function(b, a) {
        return b / a;
    },
    'v31': "2Ways.tutorial",
    'o10': function(b, a) {
        return b / a;
    },
    's30': function(b, a) {
        return b / a;
    },
    'X21': ":",
    'r10': function(b, a) {
        return b / a;
    },
    'E30': function(b, a) {
        return b / a;
    },
    'r40': function(b, a) {
        return b == a;
    },
    'Q00': function(b, a) {
        return b / a;
    },
    'V10': function(b, a) {
        return b / a;
    },
    'k20': function(b, a) {
        return b / a;
    },
    'L31': "start_level",
    'T21': 1.2,
    'J10': function(b, a) {
        return b / a;
    },
    'Q30': function(b, a) {
        return b / a;
    },
    'u10': function(b, a) {
        return b / a;
    },
    'i10': function(b, a) {
        return b / a;
    },
    'r31': 11,
    'e31': 2,
    'K21': 0.5,
    'i40': function(b, a) {
        return b == a;
    },
    'X20': function(b, a) {
        return b / a;
    },
    'x31': null,
    'n20': function(b, a) {
        return b / a;
    },
    'h20': function(b, a) {
        return b / a;
    },
    'p30': function(b, a) {
        return b / a;
    },
    'l10': function(b, a) {
        return b - a;
    },
    'R20': function(b, a) {
        return b / a;
    },
    'P21': false,
    'K30': function(b, a) {
        return b / a;
    },
    'c10': function(b, a) {
        return b / a;
    },
    'g30': function(b, a) {
        return b / a;
    }
};
var UILayer = cc.Layer.extend({
    ctor: function() {
        var b = "lockPause",
        a = "update_score",
        c = "game_over",
        d = "#gameOver.png",
        e = "buttonMore.png",
        m = "buttonTest.png",
        r = "buttonRule.png",
        f = "buttonPlay.png",
        h = "#Score.png",
        l = "buttonPause.png";
        this._super();
        this.lastScore = S5j00.h31;
        var g = cc.winSize;
        cc.spriteFrameCache.addSpriteFrames(res[S5j00.G31], res.ui_png);
        this.buttonPause = new ccui.Button();
        this.buttonPause.setTouchEnabled(S5j00.E31);
        this.buttonPause.loadTextures(l, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
        this.buttonPause.addTouchEventListener(this.pause, this);
        this.buttonPause.setPositionX(S5j00.Q00(this.buttonPause.width, 1.5));
        this.buttonPause.setPositionY(S5j00.T00(g.height, this.buttonPause.height / 1.5));
        this.buttonPause.visible = S5j00.P21;
        this.addChild(this.buttonPause);
        this.buttonSound = new ccui.Button();
        this.buttonSound.setTouchEnabled(S5j00.E31);
        this.buttonSound.loadTextures(S5j00.Q21, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
        this.buttonSound.addTouchEventListener(this.switchSound, this);
        this.buttonSound.setPositionX(S5j00.W00(g.width, this.buttonSound.width / 1.5));
        this.buttonSound.setPositionY(S5j00.Z00(g.height, this.buttonSound.height / 1.5));
        this.buttonSound.visible = S5j00.P21;
        this.addChild(this.buttonSound);
        this.adjustSoundButton();
        this.backScore = new cc.Sprite(h);
        this.backScore.attr({
            x: S5j00.c10(g.width, 2),
            y: g.height + 4,
            anchorX: 0.5,
            anchorY: 1
        });
        this.addChild(this.backScore);
        this.labelScore = new cc.LabelTTF("0", "Arial", S5j00.f10(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_RIGHT);
        this.labelScore.attr({
            x: S5j00.i10(g.width, 2),
            y: S5j00.l10(g.height, this.buttonPause.width / 1.5),
            anchorY: 0.5,
            anchorX: 0.5,
            color: cc.color(255, 255, 255)
        });
        this.addChild(this.labelScore);
        this.back = new cc.LayerColor(cc.color(0, 0, 0, 180), g.width, g.height);
        this.addChild(this.back);
        this.logo = new cc.Sprite(res.logo_png);
        this.logo.attr({
            x: S5j00.o10(g.width, 2),
            y: S5j00.r10(g.height, 1.5)
        });
        this.addChild(this.logo);
        this.buttonPlay = new ccui.Button();
        this.buttonPlay.setTouchEnabled(S5j00.E31);
        this.buttonPlay.loadTextures(f, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
        this.buttonPlay.addTouchEventListener(this.play, this);
        this.buttonPlay.setPositionX(S5j00.u10(g.width, 3.2) + S5j00.x10(this.buttonPlay.width, 1.8));
        this.buttonPlay.setPositionY(S5j00.A10(g.height, 3.4));
        this.addChild(this.buttonPlay);
        this.buttonMore = new ccui.Button();
        this.buttonMore.setTouchEnabled(S5j00.E31);
        this.buttonMore.loadTextures(e, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
        this.buttonMore.addTouchEventListener(this.site, this);
        this.buttonMore.setPositionX(S5j00.D10(g.width / 2.6, this.buttonPlay.width / 1.8));
        this.buttonMore.setPositionY(S5j00.G10(g.height, 3.4));
        this.addChild(this.buttonMore);
        this.buttonTest = new ccui.Button();
        this.buttonTest.setTouchEnabled(S5j00.E31);
        this.buttonTest.loadTextures(m, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
        this.buttonTest.addTouchEventListener(this.testDrive, this);
        this.buttonTest.setPositionX(S5j00.D10(g.width / 1, this.buttonPlay.width / 1.8));
        this.buttonTest.setPositionY(S5j00.G10(g.height, 3.4));
        this.addChild(this.buttonTest);
        this.buttonRule = new ccui.Button();
        this.buttonRule.setTouchEnabled(S5j00.E31);
        this.buttonRule.loadTextures(r, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
        this.buttonRule.addTouchEventListener(this.showRule, this);
        this.buttonRule.setPositionX(S5j00.D10(g.width / 1.45, this.buttonPlay.width / 1.8));
        this.buttonRule.setPositionY(S5j00.G10(g.height, 10));
        this.addChild(this.buttonRule);
        this.overBack = new cc.Sprite(d);
        this.overBack.attr({
            x: S5j00.J10(g.width, 2),
            y: S5j00.M10(g.height, 1.6),
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.addChild(this.overBack);
        this.labelGameOver = new cc.LabelTTF(Texts[lang][9], "Arial", S5j00.P10(this.buttonPause.width, 1.4), null, cc.TEXT_ALIGNMENT_CENTER);
        this.labelGameOver.attr({
            x: S5j00.S10(g.width, 2),
            y: S5j00.V10(g.height, 1.4),
            anchorY: 0.5,
            anchorX: 0.5,
            color: cc.color(255, 255, 255),
            rotation: -6
        });
        this.addChild(this.labelGameOver);
        this.labelResult = new cc.LabelTTF(Texts[lang][10] + ":", "Arial", S5j00.Y10(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_RIGHT);
        this.labelResult.attr({
            x: S5j00.b20(g.width, 2),
            y: S5j00.e20(g.height, 1.72),
            anchorY: 0.5,
            anchorX: 1,
            color: cc.color("#ea544e")
        });
        this.addChild(this.labelResult);
        this.labelResultValue = new cc.LabelTTF("0", "Arial", S5j00.h20(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_LEFT);
        this.labelResultValue.attr({
            x: S5j00.k20(g.width, 2),
            y: S5j00.n20(g.height, 1.72),
            anchorY: 0.5,
            anchorX: 0,
            color: cc.color("#ea544e")
        });
        this.addChild(this.labelResultValue);
        this.labelRecord = new cc.LabelTTF(Texts[lang][11] + ":", "Arial", S5j00.q20(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_RIGHT);
        this.labelRecord.attr({
            x: S5j00.t20(g.width, 2),
            y: S5j00.w20(g.height, 2.12),
            anchorY: 0.5,
            anchorX: 1,
            color: cc.color("#ea544e")
        });
        this.addChild(this.labelRecord);
        this.labelRecordValue = new cc.LabelTTF("0", "Arial", S5j00.z20(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_LEFT);
        this.labelRecordValue.attr({
            x: S5j00.C20(g.width, 2),
            y: S5j00.F20(g.height, 2.12),
            anchorY: 0.5,
            anchorX: 0,
            color: cc.color("#ea544e")
        });
        this.addChild(this.labelRecordValue);
        this.overBack.visible = S5j00.P21;
        this.labelGameOver.visible = S5j00.P21;
        this.labelRecord.visible = S5j00.P21;
        this.labelResult.visible = S5j00.P21;
        this.labelRecordValue.visible = S5j00.P21;
        this.labelResultValue.visible = S5j00.P21;
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: c,
            callback: this.gameOver
        }), this.buttonMore);
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: a,
            callback: this.updateScore
        }), this.buttonMore);
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: b,
            callback: this.lockPause
        }), this.buttonMore);
    },
    switchSound: function(b, a) {
        if (S5j00.I20(a, S5j00.e31)) {
            var c = !JSON.parse(cc.sys.localStorage.getItem(S5j00.S21));
            cc.sys.localStorage.setItem(S5j00.S21, c);
            this.adjustSoundButton();
        }
    },
    adjustSoundButton: function() {
        var b = "buttonOff.png";
        cc.spriteFrameCache.addSpriteFrames(res[S5j00.G31], res.ui_png);
        if (JSON.parse(cc.sys.localStorage.getItem(S5j00.S21))) {
            this.buttonSound.loadTextures(S5j00.Q21, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
            Howler.unmute();
        } else {
            this.buttonSound.loadTextures(b, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
            Howler.mute();
        }
    },
    updateScore: function(b) {
        var a = b.getCurrentTarget().parent,
        c = b.getUserData();
        a.setScore(c);
    },
    setScore: function(b) {
        this.labelScore.setString(b);
    },
    site: function(b, a) {
        SG.redirectToPortal();
    },
    testDrive: function(b, a) {
        SG.testDrive();
    },
    showRule: function(b, a) {
    	SG.showRule();
    },
    play: function(b, a) {
        if (S5j00.O20(a, S5j00.e31)) {
            this.logo.visible = S5j00.P21;
            this.buttonPlay.visible = S5j00.P21;
            this.buttonMore.visible = S5j00.P21;
            this.buttonTest.visible = S5j00.P21;
            this.buttonRule.visible = S5j00.P21;
            this.back.visible = S5j00.P21;
            this.buttonPause.visible = S5j00.E31;
            this.buttonSound.visible = S5j00.E31;
            // if (!JSON.parse(cc.sys.localStorage.getItem(S5j00.v31))) {
                var c = new cc.EventCustom(S5j00.L31);
                cc.eventManager.dispatchEvent(c);
            // } else {
            //     this.showTutorial();
            // }
        }
    },
    // showTutorial: function() {
    //     var b = "TutorialClose.png",
    //     a = "#TutorialBack.png",
    //     c = cc.winSize;
    //     this.back.visible = S5j00.E31;
    //     this.tutorialBack = new cc.Sprite(a);
    //     this.tutorialBack.attr({
    //         x: S5j00.R20(c.width, 2),
    //         y: S5j00.U20(c.height, 3.2)
    //     });
    //     this.addChild(this.tutorialBack);
    //     this.labelHowTo = new cc.LabelTTF(Texts[lang][0], "Arial", S5j00.X20(this.buttonPause.width, 1.4), null, cc.TEXT_ALIGNMENT_CENTER);
    //     this.labelHowTo.attr({
    //         x: S5j00.a30(c.width, 2),
    //         y: S5j00.d30(c.height, 1.2),
    //         anchorY: 0.5,
    //         anchorX: 0.5,
    //         color: cc.color("#ffb200")
    //     });
    //     this.addChild(this.labelHowTo);
    //     this.labelTutorial_1 = new cc.LabelTTF(Texts[lang][1], "Arial", S5j00.g30(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_CENTER);
    //     this.labelTutorial_1.attr({
    //         x: S5j00.j30(c.width, 2),
    //         y: S5j00.m30(c.height, 1.37),
    //         anchorY: 0.5,
    //         anchorX: 0.5,
    //         color: cc.color("#ffffff")
    //     });
    //     this.addChild(this.labelTutorial_1);
    //     this.labelTutorial_2 = new cc.LabelTTF(Texts[lang][2], "Arial", S5j00.p30(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_CENTER);
    //     this.labelTutorial_2.attr({
    //         x: S5j00.s30(c.width, 2),
    //         y: S5j00.v30(c.height, 1.50),
    //         anchorY: 0.5,
    //         anchorX: 0.5,
    //         color: cc.color("#ffffff")
    //     });
    //     this.addChild(this.labelTutorial_2);
    //     this.labelTutorial_3 = new cc.LabelTTF(Texts[lang][3], "Arial", S5j00.y30(this.buttonPause.width, 2), null, cc.TEXT_ALIGNMENT_CENTER);
    //     this.labelTutorial_3.attr({
    //         x: S5j00.B30(c.width, 2),
    //         y: S5j00.E30(c.height, 1.65),
    //         anchorY: 0.5,
    //         anchorX: 0.5,
    //         color: cc.color("#ffffff")
    //     });
    //     this.addChild(this.labelTutorial_3);
    //     this.labelTapLeft = new cc.LabelTTF(getPlatformAction(cc.sys.isMobile, lang), "Arial", S5j00.H30(this.buttonPause.width, 2.5), null, cc.TEXT_ALIGNMENT_LEFT);
    //     this.labelTapLeft.attr({
    //         x: S5j00.K30(c.width, 3.8),
    //         y: S5j00.N30(c.height, 2.7),
    //         anchorY: 0.5,
    //         anchorX: 0,
    //         color: cc.color("#000000")
    //     });
    //     this.addChild(this.labelTapLeft);
    //     this.labelTapRight = new cc.LabelTTF(getPlatformAction(cc.sys.isMobile, lang), "Arial", S5j00.Q30(this.buttonPause.width, 2.5), null, cc.TEXT_ALIGNMENT_RIGHT);
    //     this.labelTapRight.attr({
    //         x: S5j00.T30(c.width, 1.32),
    //         y: S5j00.W30(c.height, 3.2),
    //         anchorY: 0.5,
    //         anchorX: 1,
    //         color: cc.color("#000000")
    //     });
    //     this.addChild(this.labelTapRight);
    //     this.buttonClose = new ccui.Button();
    //     this.buttonClose.setTouchEnabled(S5j00.E31);
    //     this.buttonClose.loadTextures(b, S5j00.G21, S5j00.G21, ccui.Widget.PLIST_TEXTURE);
    //     this.buttonClose.addTouchEventListener(this.closeTutorial, this);
    //     this.buttonClose.setPositionX(S5j00.Z30(c.width, this.buttonClose.width / 1.45));
    //     this.buttonClose.setPositionY(S5j00.c40(c.height, 1.1));
    //     this.addChild(this.buttonClose);
    // },
    // closeTutorial: function(b, a) {
    //     if (S5j00.f40(a, S5j00.e31)) {
    //         this.back.visible = S5j00.P21;
    //         this.tutorialBack.removeFromParent();
    //         this.buttonClose.removeFromParent();
    //         this.labelTutorial_1.removeFromParent();
    //         this.labelTutorial_2.removeFromParent();
    //         this.labelTutorial_3.removeFromParent();
    //         this.labelHowTo.removeFromParent();
    //         this.labelTapLeft.removeFromParent();
    //         this.labelTapRight.removeFromParent();
    //         this.tutorialBack = S5j00.x31;
    //         this.buttonClose = S5j00.x31;
    //         this.labelTutorial_1 = S5j00.x31;
    //         this.labelTutorial_2 = S5j00.x31;
    //         this.labelTutorial_3 = S5j00.x31;
    //         this.labelHowTo = S5j00.x31;
    //         this.labelTapLeft = S5j00.x31;
    //         this.labelTapRight = S5j00.x31;
    //         var c = new cc.EventCustom(S5j00.L31);
    //         cc.eventManager.dispatchEvent(c);
    //         cc.sys.localStorage.setItem(S5j00.v31, S5j00.P21);
    //     }
    // },
    resume: function(b, a) {
        var c = "resume_level";
        if (S5j00.i40(a, S5j00.e31)) {
            var d = new cc.EventCustom(c);
            cc.eventManager.dispatchEvent(d);
            this.buttonPlay.visible = S5j00.P21;
            this.buttonMore.visible = S5j00.P21;
            this.buttonTest.visible = S5j00.P21;
            this.buttonRule.visible = S5j00.P21;
            this.back.visible = S5j00.P21;
            this.buttonPause.touchEnabled = S5j00.E31;
            this.buttonSound.touchEnabled = S5j00.E31;
            this.logo.visible = S5j00.P21;
        }
    },
    home: function(b, a) {
        if (S5j00.l40(a, S5j00.e31)) {
            cc.eventManager.removeAllListeners();
            var c = new MainScene();
            cc.director.runScene(new cc.TransitionFade(S5j00.T21, c));
        }
    },
    pause: function(b, a) {
        var c = "pause_game";
        if (S5j00.o40(a, S5j00.e31)) {
            var d = new cc.EventCustom(c);
            cc.eventManager.dispatchEvent(d);
            this.buttonPause.touchEnabled = S5j00.P21;
            this.buttonSound.touchEnabled = S5j00.P21;
            this.back.visible = S5j00.E31;
            this.logo.visible = S5j00.E31;
            this.buttonPlay.visible = S5j00.E31;
            this.buttonMore.visible = S5j00.E31;
            this.buttonTest.visible = S5j00.E31;
            this.buttonPlay.addTouchEventListener(this.resume, this);
        }
    },
    again: function(b, a) {
        var c = "lets_try_again";
        if (S5j00.r40(a, S5j00.e31)) {
            var d = new cc.EventCustom(c);
            cc.eventManager.dispatchEvent(d);
            this.buttonPause.touchEnabled = S5j00.E31;
            this.buttonSound.touchEnabled = S5j00.E31;
            this.back.visible = S5j00.P21;
            this.overBack.visible = S5j00.P21;
            this.buttonPlay.visible = S5j00.P21;
            this.buttonMore.visible = S5j00.P21;
            this.buttonTest.visible = S5j00.P21;
            this.buttonRule.visible = S5j00.P21;
            this.overBack.visible = S5j00.P21;
            this.labelGameOver.visible = S5j00.P21;
            this.labelRecord.visible = S5j00.P21;
            this.labelResult.visible = S5j00.P21;
            this.labelRecordValue.visible = S5j00.P21;
            this.labelResultValue.visible = S5j00.P21;
        }
    },
    lockPause: function(b) {
        var a = b.getCurrentTarget().parent;
        a.buttonPause.setTouchEnabled(S5j00.P21);
        a.buttonSound.setTouchEnabled(S5j00.P21);
    },
    gameOver: function(a) {
        var c = (0xA8 <= (0xD, 0x8F) ? (1.413E3, 108.) : (19, 0xA4) <= 0x11B ? (10, 12) : (0x72, 108.80E1)),
        d = '',
        e = "2Ways.record",
        f = function(b) {
            n.back.visible = b;
        },
        h = function(b) {
            n.labelResultValue.visible = b;
        },
        l = function(b) {
            n.labelResult.visible = b;
        },
        g = function(b) {
            n.labelGameOver.visible = b;
        },
        m = function(b) {
            n.labelRecord.visible = b;
        },
        u = function(b) {
            n.buttonMore.visible = b;
        },
        x = function(b) {
            n.buttonTest.visible = b;
        },
        q = function(b) {
            n.buttonPlay.visible = b;
        },
        o = function(b) {
            n.buttonPause.touchEnabled = b;
        },
        s = function(b) {
            n.labelRecordValue.visible = b;
        },
        t = function(b) {
            n.overBack.visible = b;
        },
        v = function(b) {
            n.buttonSound.touchEnabled = b;
        },
        k = function(b) {
            n.overBack.visible = b;
        },
        n = a.getCurrentTarget().parent,
        C = a.getUserData();
        t(S5j00.E31);
        o(S5j00.P21);
        v(S5j00.P21);
        f(S5j00.E31);
        q(S5j00.E31);
        u(S5j00.E31);
        x(S5j00.E31);
        n.buttonPlay.addTouchEventListener(n.again, n);
        k(S5j00.E31);
        g(S5j00.E31);
        m(S5j00.E31);
        l(S5j00.E31);
        s(S5j00.E31);
        h(S5j00.E31);
        n.labelResultValue.setString(C);
        var z = JSON.parse(cc.sys.localStorage.getItem(e)),
        r = parseInt(C);
        if (S5j00.u40(z, r)) {
            var w = function(b) {
                n.labelRecordValue.textAlign = b.TEXT_ALIGNMENT_LEFT;
            },
            D = function(b) {
                n.labelRecordValue.anchorX = b;
            };
            n.labelRecordValue.setString(z + d);
            n.labelRecord.setString(Texts[lang][S5j00.r31] + S5j00.X21);
            w(cc);
            D(S5j00.h31);
        } else {
            var G = function(b) {
                n.labelRecordValue.anchorX = b;
            },
            H = function(b) {
                n.labelRecordValue.textAlign = b.TEXT_ALIGNMENT_CENTER;
            };
            n.labelRecordValue.setString(Texts[lang][c]);
            H(cc);
            G(S5j00.K21);
            n.labelRecord.setString(d);
            cc.sys.localStorage.setItem(e, r);
        }
    }
});