var BeginScene = cc.Scene.extend({
    beginAni10:null,
    beginAni11:null,
    beginAni20:null,
    beginAni21:null,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var size = cc.director.getWinSize();
        var beginBg  = new cc.Sprite(res.beginBg);
        beginBg.x = GC.w2;
        beginBg.y = GC.h2;
        this.addChild(beginBg,0);

        var logo = new cc.Sprite(res.logo);
        logo.x = GC.w2;
        logo.y = GC.h;
        this.addChild(logo,1);
        logo.opacity = 0;
        var fade = cc.fadeIn(0.8);
        var delay = cc.delayTime(0.2);
        var mt = cc.moveTo(0.5,cc.p(GC.w2,GC.h - 230));
        // var trace = cc.callFunc(this.onTrace, this);
        logo.runAction(cc.spawn(fade,delay,mt));

        this.beginAni10 = new Background1(res.beginAni);
        this.addChild(this.beginAni10,1);
        this.beginAni10.attr({
          x:0,
          y:GC.h2 - 100,
          anchorX:0,
          anchorY:0
        });

        this.beginAni11 = new Background1(res.beginAni);
        this.addChild(this.beginAni11,1);
        this.beginAni11.xx = -GC.w;
        this.beginAni11.attr({
          x:GC.w,
          y:GC.h2 - 100,
          anchorX:0,
          anchorY:0
        });

        this.beginAni20 = new Background1(res.beginAni1);
        this.addChild(this.beginAni20,0);
        this.beginAni20.attr({
          x:0,
          y:GC.h2 - 100,
          anchorX:0,
          anchorY:0
        });

        this.beginAni21 = new Background1(res.beginAni1);
        this.addChild(this.beginAni21,0);
        this.beginAni21.xx = -GC.w;
        this.beginAni21.attr({
          x:GC.w,
          y:GC.h2 - 100,
          anchorX:0,
          anchorY:0
        });

        var carBY = cc.moveBy(.3, cc.p(0,3));
        var seq = cc.sequence(carBY,carBY.reverse());
        var action = seq.repeatForever();

        var car = new cc.Sprite(res.car);
        car.attr({
            x:GC.w2,
            y:GC.h2 - 61,
        });
        this.addChild(car,10);
        car.runAction(action);


        var menuItem = new cc.MenuItemSprite(new cc.Sprite(res.beginBtn),new cc.Sprite(res.beginBtn),function(){
            var au1 = document.getElementById('audio1');

            au1.pause()
            
            var au2 = document.getElementById('audio2');

            au2.src="vo/2.mp3";

            au2.loop = true;

            au2.play();
            
            cc.director.runScene(new CourseScene());

            // _czc.push(["_trackEvent", "点击进入教程", "click", 'startup', 1]);
            // _hmt.push(['_trackEvent', "点击进入教程", "click", 'startup', 1]);
            

            // var s = window.localStorage;
            // var t = s.getItem('touch');
            // console.log(t)
            // if(t === 1){
            //     cc.director.runScene(new CourseScene());
            //     globalTouch = 2;
            //     s.setItem("touch",2); 

            //     au1.pause();
            //     au2.addEventListener('end',function(){
            //         console.log('end');
            //     });
            //     au2.play();
            //     au2.loop = true;
            // }else{
            //     cc.director.runScene(new gameScene());
            //     au1.pause();
            //     au2.addEventListener('end',function(){
            //         console.log('end');
            //     });
            //     au2.play();
            //     au2.loop = true;
            // }
        },this);
        var menu = new cc.Menu(menuItem);
        menu.x = GC.w2;
        menu.y = GC.h2 - 190;
        this.addChild(menu,3);

        var menuItem1 = new cc.MenuItemSprite(new cc.Sprite(res.phbBtn),new cc.Sprite(res.phbBtn),function(){
            // $('#ip').css('display','block');
            // console.log('phb')
            showPhb();

            _czc.push(["_trackEvent", "进入排行榜", "click", 'startup', 1]);
            _hmt.push(['_trackEvent', "进入排行榜", "click", 'startup', 1]);
        },this);
        var menu1 = new cc.Menu(menuItem1);
        menu1.x = GC.w2;
        menu1.y = GC.h2 - 320;
        this.addChild(menu1,3);



        this.scheduleUpdate();
    },onExit:function(){
        this.removeAllChildrenWithCleanup(true);
    },
    update:function(){
        this.beginAni10.update(GC.h2 - 100,GC.w,0,5);
        this.beginAni11.update(GC.h2 - 100,0,-GC.w,5);
        this.beginAni20.update(GC.h2 - 100,GC.w,0,2);
        this.beginAni21.update(GC.h2 - 100,0,-GC.w,2);
    }
});

var CourseScene = cc.Scene.extend({
    age:0,
    baby:null,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this.initBgAndBtn();
    },
    initBgAndBtn:function(){
        var course  = new cc.Sprite(res.course);
        course.x = GC.w2;
        course.y = GC.h2;
        this.addChild(course,0);

        this.DistanceLabel = new cc.LabelTTF(''+0+'M','Arial',36);
        this.DistanceLabel.x = GC.w2;
        this.DistanceLabel.y = GC.h - 60;
        this.addChild(this.DistanceLabel,1000);

        var babyGo = new cc.MenuItemSprite(new cc.Sprite(res.babyGo),new cc.Sprite(res.babyGo),function(){
            cc.director.runScene(new gameScene());
            centerX = 320;

            _czc.push(["_trackEvent", "进入游戏界面", "click", 'startup', 1]);
            _hmt.push(['_trackEvent', "进入游戏界面", "click", 'startup', 1]);
        },this);
        var babyMenu = new cc.Menu(babyGo);
        babyMenu.x = GC.w2;
        babyMenu.y = 400;
        this.addChild(babyMenu,10);
        babyMenu.visible = false;

        var tip  = new cc.Sprite(res.tip);
        tip.x = GC.w2;
        tip.y = tip.getContentSize().height / 2;
        this.addChild(tip,6);


        //1
        var a = GC.w2 - 100;
        var b = GC.h - 150;
        var spr1  = new cc.Sprite(down1[0]);
        spr1.x = a ;
        spr1.y = b;
        spr1.setScale(0.6);
        this.addChild(spr1,0);

        var a1 = GC.w2;
        var b1 = GC.h - 185;
        var spr2  = new cc.Sprite(down1[1]);
        spr2.x = a1;
        spr2.y = b1;
        spr2.setScale(0.6);
        this.addChild(spr2,0);
        spr2.visible = false;

        var a2 = GC.w2  + 125;
        var b2 = GC.h - 165;
        var spr3  = new cc.Sprite(down1[2]);
        spr3.x = a2;
        spr3.y = b2;
        spr3.setScale(0.6);
        this.addChild(spr3,0);
        spr3.visible = false;

        var actionMove1 = cc.MoveTo.create(1 ,cc.p(a1,b1 - 450));
        var actionMoveDone1 = cc.CallFunc.create(function(){
            spr2.visible = false;
            cc.audioEngine.playEffect(res.effect);
        },this);

        var actionMove2 = cc.MoveTo.create(0.75,cc.p(a2,b2 - 460));
        var actionMoveDone2 = cc.CallFunc.create(function(){
            spr3.visible = false;
            spr2.visible = true;
            spr2.runAction(cc.Sequence.create(actionMove1,actionMoveDone1));
            cc.audioEngine.playEffect(res.effect);
        },this);

        var actionMove = cc.MoveTo.create(1 ,cc.p(a,b - 460));
        var actionMoveDone = cc.CallFunc.create(function(){
            spr1.visible = false;
            spr3.visible = true;
            spr3.runAction(cc.Sequence.create(actionMove2,actionMoveDone2));
            cc.audioEngine.playEffect(res.effect);
        },this);
        spr1.runAction(cc.Sequence.create(actionMove,actionMoveDone));


        var phoneYY = 222;
        var phoneX1 = GC.w2 - 100;
        var phoneX2 = GC.w2;
        var phoneX3 = GC.w2 + 125;
        phone = new babySpr(res.phone);
        phone.x = GC.w2;
        phone.y = phoneYY;
        this.addChild(phone,10);

        var phonemt1 = new cc.MoveTo(1,cc.p(phoneX1,phoneYY));
        var phonedlay1 = new cc.delayTime(0.05);
        var phonemt2 = new cc.MoveTo(0.5,cc.p(phoneX3,phoneYY));
        var phonedlay2 = new cc.delayTime(0.05);
        var phonemt3 = new cc.MoveTo(1.3,cc.p(phoneX2,phoneYY));

        var phonemt11 = new cc.MoveTo(1,cc.p(phoneX1,phoneYY));
        var phonedlay11 = new cc.delayTime(0.05);
        var phonemt21 = new cc.MoveTo(0.5,cc.p(phoneX3,phoneYY));
        var phonedlay21 = new cc.delayTime(0.05);
        var phonemt31 = new cc.MoveTo(1.3,cc.p(phoneX2,phoneYY));

        phone.runAction(cc.Sequence.create(phonemt1,phonedlay1,phonemt2,phonedlay2,phonemt3,phonemt11,phonedlay11,phonemt21,phonedlay21,phonemt31));



        var a3 = GC.w2;
        var b3 = GC.h2 - 120;
        this.baby = new babySpr(res.ani1);
        this.baby.x = a3;
        this.baby.y = b3;
        this.addChild(this.baby);
        this.baby.addAnimation(res.ani);

        var self = this;
        var mt1 = new cc.MoveTo(1,cc.p(a,b3));
        var dlay1 = new cc.delayTime(0.05);
        var mt2 = new cc.MoveTo(0.5,cc.p(a2,b3));
        var dlay2 = new cc.delayTime(0.05);
        var mt3 = new cc.MoveTo(1.3,cc.p(a1,b3));
        var call = new cc.CallFunc(function(){
            self.unscheduleUpdate();
            self.baby.stopAllActions();
            self.baby.initWithFile(res.ani11);
            self.baby.addAnimation(res.ani10);

            var a = GC.w2 - 100;
            var b = GC.h - 150;
            var spr1  = new cc.Sprite(down2[0]);
            spr1.x = a ;
            spr1.y = b;
            spr1.setScale(0.6);
            self.addChild(spr1,0);

            var a1 = GC.w2;
            var b1 = GC.h - 185;
            var spr2  = new cc.Sprite(down2[1]);
            spr2.x = a1;
            spr2.y = b1;
            spr2.setScale(0.6);
            self.addChild(spr2,0);
            spr2.visible = false;

            var a2 = GC.w2  + 125;
            var b2 = GC.h - 165;
            var spr3  = new cc.Sprite(down2[2]);
            spr3.x = a2;
            spr3.y = b2;
            spr3.setScale(0.6);
            self.addChild(spr3,0);
            spr3.visible = false;

            var actionMove1 = cc.MoveTo.create(1 ,cc.p(a1,b1 - 450));
            var actionMoveDone1 = cc.CallFunc.create(function(){
                spr2.visible = false;
                cc.audioEngine.playEffect(res.effect);
            },this);

            var actionMove2 = cc.MoveTo.create(0.75,cc.p(a2,b2 - 460));
            var actionMoveDone2 = cc.CallFunc.create(function(){
                spr3.visible = false;
                spr2.visible = true;
                spr2.runAction(cc.Sequence.create(actionMove1,actionMoveDone1));
                cc.audioEngine.playEffect(res.effect);
            },this);

            var actionMove = cc.MoveTo.create(1 ,cc.p(a,b - 460));
            var actionMoveDone = cc.CallFunc.create(function(){
                spr1.visible = false;
                spr3.visible = true;
                spr3.runAction(cc.Sequence.create(actionMove2,actionMoveDone2));
                cc.audioEngine.playEffect(res.effect);
            },this);
            spr1.runAction(cc.Sequence.create(actionMove,actionMoveDone));

            // var a3 = GC.w2;
            // var b3 = GC.h2 - 120;
            // this.baby = new babySpr(res.ani2);
            // this.baby.x = a3;
            // this.baby.y = b3;
            // this.addChild(this.baby);
            // this.baby.addAnimation(res.ani20);

            var mt1 = new cc.MoveTo(1,cc.p(a,b3));
            var dlay1 = new cc.delayTime(0.05);
            var mt2 = new cc.MoveTo(0.5,cc.p(a2,b3));
            var dlay2 = new cc.delayTime(0.05);
            var mt3 = new cc.MoveTo(1.3,cc.p(a1,b3));
            var mt4 = new cc.MoveTo(0.5,cc.p(a3,GC.h2 + 10));
            var call = new cc.CallFunc(function(){
                babyMenu.visible = true;
                self.unscheduleUpdate();
                // self.baby.stopAllActions();
            })
            self.baby.runAction(cc.Sequence.create(mt1,dlay1,mt2,dlay2,mt3,mt4,call));
        })
        this.baby.runAction(cc.Sequence.create(mt1,dlay1,mt2,dlay2,mt3,call));

        

        var zhezhao = new cc.Sprite(res.zhezhao);
        zhezhao.x = GC.w2;
        zhezhao.y = 168;
        this.addChild(zhezhao,5);

        this.scheduleUpdate();
    },
    update:function(){
        this.age++;
        this.DistanceLabel.setString(''+this.age+'m')
    },
    onExit:function(){
        this.removeAllChildrenWithCleanup(true);
    }
})