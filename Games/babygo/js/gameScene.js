var gameScene = cc.Scene.extend({
    Distance:0,
    DistanceLabel:null,
    BB:null,

    item:null,
    itemNum:null,
    age:0,

    dirction:0,
    speed:0,

    gameLevel:1,

    _targets:[],
    _targets1:[],

    tickNum:45,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this.initBgAndBB();
        this.initDistance();
        this.scheduleUpdate();
        this.garvity();
    },
    garvity:function(){

        var sprite = this.BB;
        if( 'accelerometer' in cc.sys.capabilities ) {
            // 开始重力加速度

            cc.inputManager.setAccelerometerEnabled(true);
            // 设置迭代间隔
            cc.inputManager.setAccelerometerInterval(1/60);

            var listener = cc.EventListener.create({
                event       : cc.EventListener.ACCELERATION,
                callback    : this.onListenerAccelerometer
            });
            cc.eventManager.addListener(listener, sprite);

        }
    },
    onListenerAccelerometer : function(acc, event){
        // 备注：acc.x 和 acc.y 取值范围 (-1 到 1). 不含-1和1
        var self = this;
        var speedX = 0;
        var browser = {
            versions: function() {
            var u = navigator.userAgent, app = navigator.appVersion;
                return {
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1//android终端或者uc浏览器
                };
            }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            }
             
        if (browser.versions.ios) {
            speedX = 30;
        }
        else if (browser.versions.android) {
            speedX = -40;
        }

        self.speed = acc.x * speedX;

        var aa = GC.w - 100 * 3 / 2;
        var bb = 100 * 3 / 2;

        var target = event.getCurrentTarget();

        target.x += this.speed;
        if(target.x > aa){
            target.x = aa;
        }else if(target.x <  bb){
            target.x = bb;
        }
    },
    addItem:function(){
        var actualDuration = 2.7;

        var downSprRes = res.item0;
        var downnum = parseInt(Math.random()*5);

        var browser = {
            versions: function() {
            var u = navigator.userAgent, app = navigator.appVersion;
                return {
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1//android终端或者uc浏览器
                };
            }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            }
             
        if (browser.versions.ios) {
            if(this.Distance<500){
                downSprRes = down1[downnum];
                actualDuration = 2.6;
                // console.log('1')
            }else if(this.Distance<1000){
                downSprRes = down2[downnum];
                actualDuration = 2.4;
                console.log('2')
            }else if(this.Distance<2000){
                downSprRes = down3[downnum];
                actualDuration = 2.2;
                console.log('3')
            }else if(this.Distance<3000){
                downSprRes = down4[downnum];
                actualDuration = 2.0;
                console.log('4')
            }else if(this.Distance<4500){
                downSprRes = down5[downnum];
                actualDuration = 1.8;
                console.log('5')
            }else if(this.Distance<100000){
                downSprRes = down5[downnum];
                actualDuration = 1.6;
            }
        }
        else if (browser.versions.android) {
            if(this.Distance<500){
                downSprRes = down1[downnum];
                actualDuration = 2.5;
                console.log('1')
            }else if(this.Distance<1000){
                downSprRes = down2[downnum];
                actualDuration = 2.4;
                console.log('2')
            }else if(this.Distance<2000){
                downSprRes = down3[downnum];
                actualDuration = 2.2;
                console.log('3')
            }else if(this.Distance<3000){
                downSprRes = down4[downnum];
                actualDuration = 2.0;
                console.log('4')
            }else if(this.Distance<4500){
                downSprRes = down5[downnum];
                actualDuration = 1.8;
                console.log('5')
            }else if(this.Distance<100000){
                downSprRes = down5[downnum];
                actualDuration = 1.6;
            }
        }
        

        var target;
        if(cc.pool.hasObject(newSpr)){
            if(this.Distance<500){
                downSprRes = down1[downnum];
            }else if(this.Distance<1000){
                downSprRes = down2[downnum];
            }else if(this.Distance<2000){
                downSprRes = down3[downnum];
            }else if(this.Distance<3000){
                downSprRes = down4[downnum];
            }else if(this.Distance<4500){
                downSprRes = down5[downnum];
            }else if(this.Distance<100000){
                downSprRes = down5[downnum];
            }
            target = cc.pool.getFromPool(newSpr,downSprRes);
            // console.log('success1')
        }else{
            target = new newSpr(downSprRes);
            
            // console.log('success2')
        }

        target.setTag(1);
        target.scale = 0.7;
 
        // 设置随机出现的X轴的值
        var minX = target.getContentSize().width + 35;
        var maxX = GC.w - target.getContentSize().width - 35;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;

        target.setPosition(cc.p(actualX, GC.h + target.getContentSize().height/2));
 
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - target.getContentSize().height));
        var actionMoveDone = cc.CallFunc.create(this.spriteMoveFinished,this);
 
        target.runAction(cc.Sequence.create(actionMove,actionMoveDone));
 
        this.addChild(target,10);
        this._targets.push(target);
    },
    initBgAndBB:function(){
        this.bg = new Background(res.gameBg);
        this.bg.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg,0);

        this.bg1 = new Background(res.gameBg);
        this.bg1.yy = GC.h;//此处添加时为了解决两个背景相接处出现黑边
        this.bg1.attr({
          x:0,
          y:-1136,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg1,0);

        var bgSpr = new cc.Sprite(res.gameBgBg);
        bgSpr.x =GC.w2;
        bgSpr.y = GC.h2;
        this.addChild(bgSpr);

        this.BB = new babySpr(res.ani1);
        this.BB.x = GC.w2;
        this.BB.y = 150;
        // this.BB.scale = 0.5;
        this.addChild(this.BB,100,999);
        this.BB.addAnimation(res.ani);
    },
    loopBg:function(){
        this.bg.update(0,-GC.h,0);
        this.bg1.update(0,0,GC.h);
    },
    initDistance:function(){
        var scorebg = new cc.Sprite(res.scoreBg);
        scorebg.x = GC.w2;
        scorebg.y = GC.h - 48;
        this.addChild(scorebg,1000);

        this.DistanceLabel = new cc.LabelTTF(''+this.Distance+'M','Arial',36);
        this.DistanceLabel.x = GC.w2;
        this.DistanceLabel.y = GC.h - 53;
        this.addChild(this.DistanceLabel,1000);
    },
    update:function(){
        var self = this;
        var speedX = 1;

        this.age = this.age + 1;
        // console.log(this.age)

        var browser = {
            versions: function() {
            var u = navigator.userAgent, app = navigator.appVersion;
                return {
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1//android终端或者uc浏览器
                };
            }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            }
             
        if (browser.versions.ios) {
            speedX = 2.2;

            switch(this.Distance){
                case 500:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani10);
                    self.gameLevel = 2;
                    self.tickNum = 35;
                    console.log('500');
                    self.age = 0;
                };break;
                case 1500:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani10);
                    self.gameLevel = 2;
                    self.tickNum = 25;
                    console.log('800')
                    self.age = 0;
                };break;
                case 2000:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani20);
                    self.gameLevel = 3;
                    self.tickNum = 21;
                    console.log('1500');
                    self.age = 0;
                };break;
                case 3000:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani30);
                    self.gameLevel = 4;
                    self.tickNum = 17;
                    console.log('2800')
                    self.age = 0;
                };break;
                case 4500:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani40);
                    self.gameLevel = 5;
                    self.tickNum = 12;
                    console.log('3100')
                    self.age = 0;
                };break;
                case 5000:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani40);
                    self.gameLevel = 5;
                    self.tickNum = 10;
                    console.log('3100')
                    self.age = 0;
                };break;
            }
        }
        else if (browser.versions.android) {
            speedX = 2.6;

            switch(this.Distance){
                case 500:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani10);
                    self.gameLevel = 2;
                    self.tickNum = 38;
                    console.log('500');
                    self.age = 0;
                };break;
                case 1500:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani10);
                    self.gameLevel = 2;
                    self.tickNum = 25;
                    console.log('800')
                    self.age = 0;
                };break;
                case 2000:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani20);
                    self.gameLevel = 3;
                    self.tickNum = 21;
                    console.log('1500');
                    self.age = 0;
                };break;
                case 3000:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani30);
                    self.gameLevel = 4;
                    self.tickNum = 17;
                    console.log('2800')
                    self.age = 0;
                };break;
                case 4500:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani40);
                    self.gameLevel = 5;
                    self.tickNum = 15;
                    console.log('3100')
                    self.age = 0;
                };break;
                case 5000:{
                    self.BB.stopAllActions();
                    self.BB.addAnimation(res.ani40);
                    self.gameLevel = 5;
                    self.tickNum = 12;
                    console.log('3100')
                    self.age = 0;
                };break;
            }
        }
        
        this.Distance += 1;

        this.checkHit();

        this.loopBg();

        
        // console.log(this.tickNum)
        if(this.age == this.tickNum){
            this.addItem();
            this.age = 0;
        }

        // if (window.DeviceMotionEvent) {
        //     window.addEventListener("deviceorientation", function(evt){
        //         self.speed = evt.gamma * speedX;
        //     }, false);
        // }

        

        this.DistanceLabel.setString(''+this.Distance+'M');
    },
    updateMetero:function(){
        
    },
    spriteMoveFinished:function(sprite){
        this.removeChild(sprite,true);
        if(sprite.getTag()==1){
            // 把目标从数组中移除
            var index = this._targets.indexOf(sprite);
            if (index > -1) {
                this._targets.splice(index, 1);
            }
            //gameover

            //showEnd(1,this.Distance);

            this.unscheduleUpdate();
            
            showEnd(this.gameLevel,this.Distance);
            // console.log('success........')
            console.log(this._targets.length)
            for(var i=0;i<this._targets.length;i++){
                var target = this._targets[i];
                target.stopAllActions();
            }

            shareFunc(this.gameLevel,this.Distance);

            var localItem = storage.getItem('howlong');
            if(localItem == null){
                storage.setItem("howlong",""+this.Distance+"");
            }else{
                if(localItem < this.Distance){
                    storage.setItem("howlong",""+this.Distance+"");
                }
            }

            globalScoreScore = this.Distance;

            var au2 = document.getElementById('audio2');

            au2.pause();

            //gameover
        }else if(sprite.getTag()==2){
            // 把子弹从数组中移除
            var index = this._targets1.indexOf(sprite);
            if (index > -1) {
                this._targets1.splice(index, 1);
            }
        }
    },
    checkHit:function(){
        var targets2Delete = [];
 
        var i ;
        //遍历屏幕上的每个敌机
        for( i in this._targets ){
            var target = this._targets[ i ];
            
            var targetRect = target.getBoundingBox();
            var myPlane = this.BB.getBoundingBox();

            var targetHit = [];
            if(cc.rectIntersectsRect(myPlane, targetRect)){
                targetHit.push(target);
                this.itemNum++;
                user_num = this.itemNum;//总共接到的玩具个数

                // var au3 = document.getElementById('audio3');
                // au3.src="vo/3.mp3";
                // au3.play();

                cc.audioEngine.playEffect(res.effect);
            }

            if(targetHit.length > 0){
                targets2Delete.push(target);
            }
        }

        for( i in targets2Delete){
            var target = targets2Delete[ i ];
 
            var index = this._targets.indexOf(target);
            if (index > -1) {
                this._targets.splice(index, 1);
            }
 
            this.removeChild(target);
            target = null;
        }
 
        targets2Delete = null;
    }
})