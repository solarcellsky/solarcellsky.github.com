/**
 * Created by Administrator on 2015/4/3.
 */

var PTM_RATIO = 32;
var velocityIterations = 8;
var positionIterations = 1;

var last_update = 0;
var frequency = 100;
var const_disappearTime = 0.1;
var const_totalTime = 60;

var const_moveTime = 6;
var const_moveBombTime = 9;

var const_createGermTime = 0.8;
var const_createBomb = 4;
//var const_totalGerm = 0;

var PlayingLayer = cc.Layer.extend({
    m_bg:null,
    m_layerGerm:null,
    m_createGerm:null,
    m_layerBomb:null,
    m_createBomb:null,
    m_world:null,
    m_index:1,
    m_beganPos:null,
    m_preTouchPos1:null,
    m_preTouchPos2:null,
    m_layerAirCleaner:null,
    m_lblCurScore:null,
    m_curScore:0,
    m_curTime:const_totalTime,
    m_spTimeBar:null,
    m_timeBarSize:null,
    isClick:false,
    m_MyRank:1,
    m_curCreateGermTime:const_createGermTime,                       //当前产生细菌的时
    m_curMoveTime:const_moveTime,                                     //细菌移动速度
    m_curBombMoveTime:const_moveBombTime,                           //炸弹移动速度
    m_arrayCleaner:[1,2,3,1,2,3],
    ctor:function(index){
        this._super();
        this.m_index = index;
        this.initUI();
    },

    initUI:function(){
        var self = this;

        var src = res.bg_airCleaner_jpg;
        if(global_isIPad)
        {
            src = res.bg_airCleaner_iPad_jpg;
        }
        var sp_bg = self.m_bg = new cc.Sprite(src);
  //      var sp_bg = self.m_bg = new cc.Sprite(res.bg_airCleaner_jpg);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        self.addChild(sp_bg,0);
        var size_bg = sp_bg.getContentSize();

        var sp_score = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.scoreBg_png));
        sp_score.setAnchorPoint(1,1);
        sp_score.setPosition(size_bg.width*0.98,size_bg.height*0.99);
        this.addChild(sp_score,1);
        var size_score = sp_score.getContentSize();

        var lbl_curScore = self.m_lblCurScore = new cc.LabelTTF(self.m_curScore+"","Arial",40);
        lbl_curScore.setAnchorPoint(0.5,0.5);
        lbl_curScore.setPosition(size_score.width*0.65,size_score.height*0.45);
        sp_score.addChild(lbl_curScore);

        var sp_timeBarBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.timeBarBg_png));
        sp_timeBarBg.setAnchorPoint(0,1);
        sp_timeBarBg.setPosition(size_bg.width*0.02,size_bg.height*0.99);
        this.addChild(sp_timeBarBg,1);
        var size_timeBarBg = sp_timeBarBg.getContentSize();

        var sp_timeBar = self.m_spTimeBar = new cc.Sprite(res.timeBar_png);
        sp_timeBar.setAnchorPoint(0,0.5);
        sp_timeBar.setPosition(size_timeBarBg.width*0.18,size_timeBarBg.height*0.245);
        sp_timeBarBg.addChild(sp_timeBar);
        self.m_timeBarSize = sp_timeBar.getContentSize();

        self.m_layerAirCleaner = new cc.Layer();
        this.addChild(self.m_layerAirCleaner,1);

        ////创建世界
        //var b2Vec2 = Box2D.Common.Math.b2Vec2
        //    , b2BodyDef = Box2D.Dynamics.b2BodyDef
        //    , b2Body = Box2D.Dynamics.b2Body
        //    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        //    , b2World = Box2D.Dynamics.b2World
        //    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        //    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
        //
        //var world = self.m_world = new b2World(new b2Vec2(0.0, -20), true);           //创建物理世界
        //var bodyDef_drop = new b2BodyDef;                                               //刚体定义
        //bodyDef_drop.type = b2Body.b2_dynamicBody;                                    //动态刚体定义
        //var fixDef_drop = new b2FixtureDef;                                             //夹具定义
        //fixDef_drop.density = 1.0;
        //fixDef_drop.friction = 0.0;
        //fixDef_drop.restitution = 0.0;
        //fixDef_drop.filter.groupIndex = -8;

        //细菌层
        self.m_layerGerm = new cc.Layer();
        this.addChild(self.m_layerGerm,0);

        self.m_createGerm = function(dt){
            var picTag = parseInt(Math.random() * 7) + 1;
            var sp_germ = new cc.Sprite("res/germ1_" + picTag + ".png");
            var size_germ = sp_germ.getContentSize();
            sp_germ.setTag(picTag);
            sp_germ.setAnchorPoint(0.5, 0.5);

            var rot = Math.random()*30+10;
            var dir_random = Math.floor(Math.random()*2);
            var dir = dir_random == 0?1:-1;
            var rotateBy = new cc.RotateBy(0.5,dir*rot);
            sp_germ.runAction(rotateBy.repeatForever());

            var stir = Math.floor(Math.random()*3)+1;
            switch (stir){
                case 1:
                {
                    var length = Math.random()*size_bg.width;
                    sp_germ.setPosition(length,-size_germ.height/2);
                    if(length<size_bg.width/2) {
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(size_bg.width * 2, -size_germ.height/2),
                            cc.p(-size_bg.width, size_bg.height+size_germ.height/2),
                            cc.p(lengthX, size_bg.height+size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                        sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));
                    }
                    else{
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(-size_bg.width ,-size_germ.height/2),
                            cc.p(size_bg.width*2, size_bg.height+size_germ.height/2),
                            cc.p(lengthX, size_bg.height+size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                        sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));
                    }
                }
                    break;
                case 2:
                {
                    var length = Math.random()*size_bg.height;
                    sp_germ.setPosition(size_bg.width+size_germ.width/2,length);
                    if(length<size_bg.height/2) {
    //                    var lengthY = size_bg.height - length;
                        var controlPoints1 = [cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                            cc.p(size_germ.width,-size_bg.height),
                            cc.p(size_germ.width,length)];
                        var bezierTo1 = cc.bezierTo(self.m_curMoveTime, controlPoints1);

                        var controlPoints2 = [cc.p(size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,length)];
                        var bezierTo2 = cc.bezierTo(self.m_curMoveTime, controlPoints2);

                        sp_germ.runAction(cc.sequence(bezierTo1,bezierTo2,cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));
                    }
                    else{
 //                       var lengthY = size_bg.height - length;
                        var controlPoints1 = [cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                            cc.p(size_germ.width,size_bg.height * 2),
                            cc.p(size_germ.width,length)];
                        var bezierTo1 = cc.bezierTo(self.m_curMoveTime, controlPoints1);

                        var controlPoints2 = [cc.p(size_bg.width,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,length)];
                        var bezierTo2 = cc.bezierTo(self.m_curMoveTime, controlPoints2);

                        sp_germ.runAction(cc.sequence(bezierTo1,bezierTo2, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));

                    }

                    //var length = Math.random()*size_bg.height;
                    //sp_germ.setPosition(size_bg.width+size_germ.width/2,length);
                    //if(length<size_bg.height/2) {
                    //    var lengthY = size_bg.height - length;
                    //    var controlPoints = [cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                    //        cc.p(-size_germ.width/2,-size_bg.height),
                    //        cc.p(-size_germ.width/2,lengthY)];
                    //    var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                    //
                    //    sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                    //        this.removeFromParent(true)
                    //    }, sp_germ)));
                    //}
                    //else{
                    //    var lengthY = size_bg.height - length;
                    //    var controlPoints = [cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                    //        cc.p(-size_germ.width/2,size_bg.height * 2),
                    //        cc.p(-size_germ.width/2,lengthY)];
                    //    var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                    //    sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                    //        this.removeFromParent(true)
                    //    }, sp_germ)));
                    //
                    //}
                }
                    break;
                case 3:
                {
                    var length = Math.random()*size_bg.width;
                    sp_germ.setPosition(length,size_bg.height+size_germ.height/2);
                    if(length<size_bg.width/2) {
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(size_bg.width * 2, size_bg.height+size_germ.height/2),
                            cc.p(-size_bg.width, -size_germ.height/2),
                            cc.p(lengthX, -size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                        sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));
                    }
                    else{
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(-size_bg.width ,size_bg.height+size_germ.height/2),
                            cc.p(size_bg.width*2, -size_germ.height/2),
                            cc.p(lengthX, -size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                        sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));
                    }
                }
                    break;
                case 4:
                {
                    var length = Math.random()*size_bg.height;
                    sp_germ.setPosition(-size_germ.width/2,length);
                    if(length<size_bg.height/2) {
                        var lengthY = size_bg.height - length;
                        var controlPoints = [cc.p(-size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,lengthY)];
                        var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                        sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));
                    }
                    else{
                        var lengthY = size_bg.height - length;
                        var controlPoints = [cc.p(-size_germ.width/2,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,lengthY)];
                        var bezierTo = cc.bezierTo(self.m_curMoveTime, controlPoints);
                        sp_germ.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_germ)));

                    }
                }
                    break;
                default :
                {}
            }
 //           const_totalGerm++;
            self.m_layerGerm.addChild(sp_germ);
            self.schedule(self.m_createGerm, self.m_curCreateGermTime);

        };

        //炸弹层
        self.m_layerBomb = new cc.Layer();
        this.addChild(self.m_layerBomb,0);

        self.m_createBomb = function(dt){
            var sp_bomb = new cc.Sprite("res/bomb.png");
            var size_germ = sp_bomb.getContentSize();
            sp_bomb.setAnchorPoint(0.5, 0.5);

            var rot = Math.random()*30+10;
            var dir_random = Math.floor(Math.random()*2);
            var dir = dir_random == 0?1:-1;
            var rotateBy = new cc.RotateBy(0.5,dir*rot);
            sp_bomb.runAction(rotateBy.repeatForever());

            var stir = Math.floor(Math.random()*3)+1;
            switch (stir){
                case 1:
                {
                    var length = Math.random()*size_bg.width;
                    sp_bomb.setPosition(length,-size_germ.height/2);
                    if(length<size_bg.width/2) {
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(size_bg.width * 2, -size_germ.height/2),
                            cc.p(-size_bg.width, size_bg.height+size_germ.height/2),
                            cc.p(lengthX, size_bg.height+size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));
                    }
                    else{
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(-size_bg.width ,-size_germ.height/2),
                            cc.p(size_bg.width*2, size_bg.height+size_germ.height/2),
                            cc.p(lengthX, size_bg.height+size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));
                    }
                }
                    break;
                case 2:
                {
                    var length = Math.random()*size_bg.height;
                    sp_bomb.setPosition(size_bg.width+size_germ.width/2,length);
                    if(length<size_bg.height/2){
                  //      var lengthY = size_bg.height - length;

                        var controlPoints1 = [cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                            cc.p(size_germ.width,-size_bg.height),
                            cc.p(size_germ.width,length)];
                        var bezierTo1 = cc.bezierTo(self.m_curBombMoveTime, controlPoints1);

                        var controlPoints2 = [cc.p(size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,length)];
                        var bezierTo2 = cc.bezierTo(self.m_curBombMoveTime, controlPoints2);

                        sp_bomb.runAction(cc.sequence(bezierTo1,bezierTo2, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));

                        //var controlPoints = [cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                        //    cc.p(-size_germ.width/2,-size_bg.height),
                        //    cc.p(-size_germ.width/2,lengthY)];
                        //var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        //sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                        //    this.removeFromParent(true)
                        //}, sp_bomb)));
                    }
                    else{
                        var controlPoints1 = [cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                            cc.p(size_germ.width,size_bg.height * 2),
                            cc.p(size_germ.width,length)];
                        var bezierTo1 = cc.bezierTo(self.m_curBombMoveTime, controlPoints1);

                        var controlPoints2 = [cc.p(size_bg.width,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,length)];
                        var bezierTo2 = cc.bezierTo(self.m_curBombMoveTime, controlPoints2);
                        sp_bomb.runAction(cc.sequence(bezierTo1,bezierTo2, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));

                        //var lengthY = size_bg.height - length;
                        //var controlPoints = [cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                        //    cc.p(-size_germ.width/2,size_bg.height * 2),
                        //    cc.p(-size_germ.width/2,lengthY)];
                        //var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        //sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                        //    this.removeFromParent(true)
                        //}, sp_bomb)));
                    }
                }
                    break;
                case 3:
                {
                    var length = Math.random()*size_bg.width;
                    sp_bomb.setPosition(length,size_bg.height+size_germ.height/2);
                    if(length<size_bg.width/2) {
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(size_bg.width * 2, size_bg.height+size_germ.height/2),
                            cc.p(-size_bg.width, -size_germ.height/2),
                            cc.p(lengthX, -size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));
                    }
                    else{
                        var lengthX = size_bg.width - length;
                        var controlPoints = [cc.p(-size_bg.width ,size_bg.height+size_germ.height/2),
                            cc.p(size_bg.width*2, -size_germ.height/2),
                            cc.p(lengthX, -size_germ.height/2)];
                        var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));
                    }
                }
                    break;
                case 4:
                {
                    var length = Math.random()*size_bg.height;
                    sp_bomb.setPosition(-size_germ.width/2,length);
                    if(length<size_bg.height/2) {
                        var lengthY = size_bg.height - length;
                        var controlPoints = [cc.p(-size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,lengthY)];
                        var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));
                    }
                    else{
                        var lengthY = size_bg.height - length;
                        var controlPoints = [cc.p(-size_germ.width/2,-size_bg.height),
                            cc.p(size_bg.width+size_germ.width/2,size_bg.height * 2),
                            cc.p(size_bg.width+size_germ.width/2,lengthY)];
                        var bezierTo = cc.bezierTo(self.m_curBombMoveTime, controlPoints);
                        sp_bomb.runAction(cc.sequence(bezierTo, cc.callFunc(function () {
                            this.removeFromParent(true)
                        }, sp_bomb)));

                    }
                }
                    break;
                default :
                {}
            }
            self.m_layerBomb.addChild(sp_bomb);

        };

        self.schedule(self.createAirCleaner,9.0);
        self.addTouch();
        self.schedule(self.m_createGerm, self.m_curCreateGermTime);           //注册创建细菌定时器
        self.schedule(self.m_createBomb, const_createBomb);                 //注册创建炸弹定时器
        self.schedule(self.cutTime, 1.0);                                       //倒计时定时器

        self.schedule(self.MyUpdate,0.1);
        //self.scheduleOnce(function(){
        //    this.m_curMoveTime -= 1.5;
        //    this.m_curBombMoveTime -= 4.0;
        //    self.schedule(self.m_createBomb, 1);                 //注册创建炸弹定时器
        //},40);
    },

    MyUpdate:function(dt){
        //this.m_curCreateGermTime -= 0.0012;
        //this.m_curMoveTime -= 0.01;
        this.m_curCreateGermTime -= 0.0006;
        this.m_curMoveTime -= 0.007;
        this.m_curBombMoveTime -= 0.007
    },

    cutTime:function(dt) {
        this.m_curTime--;

//        alert("当前时间："+this.m_curTime +"   比值"+this.m_curTime/const_totalTime+"   "+const_totalTime);

        this.m_spTimeBar.setTextureRect(cc.rect(0,0,this.m_timeBarSize.width*(this.m_curTime/const_totalTime),this.m_timeBarSize.height));
        if (this.m_curTime == 0)
        {
            this.gameOver();
  //          alert ("游戏结束");
        }
    },

    addScore:function(score,pos){
        var showScore = score;
        this.m_curScore += score;
        if(this.m_curScore < 0)
        {
            showScore = score - this.m_curScore;
            this.m_curScore = 0;
        }
        this.m_lblCurScore.setString(this.m_curScore+"");


        var lbl_addScore = new cc.LabelTTF("","Arial",50);
        if(showScore > 0){
            lbl_addScore.setString("+"+showScore);
            lbl_addScore.setColor(cc.color(0,255,0,255));
        }
        else {
            lbl_addScore.setString(""+showScore);
            lbl_addScore.setColor(cc.color(255,0,0,255));
        }
        lbl_addScore.setAnchorPoint(0.5,0);
        lbl_addScore.setPosition(pos);
        this.addChild(lbl_addScore,4);
        var moveUp = new cc.MoveBy(0.8,0,100);
        var fadeOut = new cc.FadeOut(1.2);
        lbl_addScore.runAction(cc.sequence(cc.spawn(moveUp,fadeOut),cc.callFunc(function(){
            this.removeFromParent(true);
        },lbl_addScore)));
    },

    createAirCleaner:function(dt){
        var n0 = parseInt(Math.random()*this.m_arrayCleaner.length);
        var n = this.m_arrayCleaner[n0];
        this.m_arrayCleaner.splice(n0,1);
        if(n) {
            var sp_airCleaner = new MySprite("res/airCleaner" + n + ".png");
            sp_airCleaner.setTag(n);
//        var sp_airCleaner = new cc.Sprite("res/airCleaner1.png");
            var size_airCleaner = sp_airCleaner.getContentSize();
            sp_airCleaner.setAnchorPoint(0.5, 0);
            var randomX = Math.random() * (cc.winSize.width - size_airCleaner.width*2) + size_airCleaner.width;
            var randomY = Math.random() * (cc.winSize.width * 0.2);
            sp_airCleaner.setPosition(randomX, randomY);
            sp_airCleaner.setTextureRect(cc.rect(0, 0, size_airCleaner.width, 0));
            sp_airCleaner.setRotation(-5);
            this.m_layerAirCleaner.addChild(sp_airCleaner);

            var right = new cc.RotateBy(0.05, 10);
            var left = new cc.RotateBy(0.05, -10);
            sp_airCleaner.runAction(cc.sequence(right, left).repeatForever());

            var percent = 0;
            var appear = function (dt) {
                percent++;
                sp_airCleaner.setTextureRect(cc.rect(0, 0, size_airCleaner.width, size_airCleaner.height * (percent / 20)));
                if (20 == percent) {
                    sp_airCleaner.setRotation(0);
                    sp_airCleaner.unschedule(appear);
                    sp_airCleaner.stopAllActions();

                    sp_airCleaner.m_isTouch = true;
                    var blink = cc.Blink.create(3.0, 10);
                    sp_airCleaner.runAction(cc.sequence(blink, cc.callFunc(function () {
                        this.removeFromParent(true)
                    }, sp_airCleaner)));
                }
            };
            sp_airCleaner.schedule(appear, 0.05, cc.REPEAT_FOREVER, 0.05);

        }
        //var n = parseInt(Math.random()*3)+1;
        //var sp_waterCleaner = new cc.Sprite("res/waterCleaner"+n+".png");
        //sp_waterCleaner.setTag(n);
        //var size_waterCleaner = sp_waterCleaner.getContentSize();
        //sp_waterCleaner.setAnchorPoint(0,0.5);
        //
        //
        //sp_waterCleaner.setPosition(cc.winSize.width*0.2,cc.winSize.height*0.5);
        //sp_waterCleaner.setTextureRect(cc.rect(0,0,size_airCleaner.width,0));
        //sp_waterCleaner.setRotation(-5);
        //this.m_layerWaterCleaner.addChild(sp_waterCleaner);
        //
        //var right = new cc.RotateBy(0.05,10);
        //var left = new cc.RotateBy(0.05,-10);
        //sp_waterCleaner.runAction(cc.sequence(right,left).repeatForever());
        //
        //var percent = 0;
        //var appear = function(dt){
        //    percent++;
        //    sp_waterCleaner.setTextureRect(cc.rect(size_waterCleaner*(1- percent/20),0,size_waterCleaner.width,size_waterCleaner.height));
        //    if(20 == percent)
        //    {
        //        sp_waterCleaner.setRotation(0);
        //        sp_waterCleaner.unschedule(appear);
        //        sp_waterCleaner.stopAllActions();
        //
        //        var blink = cc.Blink.create(1.0,5);
        //        sp_waterCleaner.runAction(cc.sequence(blink,cc.callFunc(function(){this.removeFromParent(true)},sp_airCleaner)));
        //    }
        //};
        //sp_waterCleaner.schedule(appear,0.05,cc.REPEAT_FOREVER,0.05);

    },

    update:function(dt){
        this.m_world.Step(dt, velocityIterations, positionIterations);
        //       var b2Vec2 = Box2D.Common.Math.b2Vec2;
        var node = this.m_world.GetBodyList();
        while(node)
        {
            var b = node;
            node = node.GetNext();

            if (b.GetUserData()) {
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var sp = b.GetUserData();
                var pos_b = b.GetPosition();
                var size_drop = sp.getContentSize();
                if (pos_b.y * PTM_RATIO < -size_drop.height / 2) {
                    sp.removeFromParent(true);
                    this.m_world.DestroyBody(b);
                    continue;
                }

                var angle_b = b.GetAngle();
                sp.setPosition(pos_b.x * PTM_RATIO, pos_b.y * PTM_RATIO);
                sp.setRotation(-angle_b * (180 / Math.PI));
            }
        }
    },

    //滑动轨迹
    locus:function(beganPos,endedPos){
        var self = this;
        var midPos = cc.p((beganPos.x + endedPos.x)/2,(beganPos.y + endedPos.y)/2);
        var dis = Math.sqrt((beganPos.x - endedPos.x)*(beganPos.x - endedPos.x) + (beganPos.y - endedPos.y)*(beganPos.y - endedPos.y));
        var sp_slideTrack = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(res_name.slideTrack_png));
        sp_slideTrack.setAnchorPoint(0.5,0.5);
        sp_slideTrack.setPosition(midPos);
        var size_slideTrack = sp_slideTrack.getContentSize();
        sp_slideTrack.setScale(dis/size_slideTrack.width,1);
        this.addChild(sp_slideTrack,10);

        var angel = 0;
        if(endedPos.x-beganPos.x != 0) {
            angel = Math.atan((endedPos.y - beganPos.y) / (endedPos.x - beganPos.x));
        }
        else if(endedPos.y>beganPos.y){
            angel = Math.PI/2;
        }else
        {
            angel = -Math.PI/2;
        }

        var jiaoAngel = 0;
        if(endedPos.x>= beganPos.x)
        {
            jiaoAngel = -angel*(180/Math.PI);
        }
        else
        {
            jiaoAngel = (Math.PI-angel)*(180/Math.PI);
        }
        sp_slideTrack.setRotation(jiaoAngel);

        self.schedule(function () {
            sp_slideTrack.removeFromParent(true);
        },0,0,const_disappearTime);
    },

    touchGerm:function(pos){
        var size = this.m_layerGerm.getChildrenCount();
        for(var i = 0;i < size;i++)
        {
            var sp_germ = this.m_layerGerm.getChildren()[i];
            var pos_germ = sp_germ.getPosition()
            var size_germ = sp_germ.getContentSize()
            var dis = Math.sqrt((pos.x-pos_germ.x)*(pos.x-pos_germ.x)+(pos.y-pos_germ.y)*(pos.y-pos_germ.y));
            if(dis < size_germ.width)
            {
                var tag = sp_germ.getTag();
                var sp_drop1 = new cc.Sprite("res/germ1_" + tag + ".png");
                sp_drop1.setTextureRect(cc.rect(0, 0, size_germ.width * 0.5, size_germ.height));
                sp_drop1.setAnchorPoint(0.5, 0.5);
                sp_drop1.setPosition(pos_germ.x - size_germ.width * 0.5 * 0.5, pos_germ.y);
                sp_drop1.setRotation(-90);

                //                       var sp_drop2 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("res/dropCard"+tag+".png"));
                var sp_drop2 = new cc.Sprite("res/germ1_" + tag + ".png");
                sp_drop2.setTextureRect(cc.rect(size_germ.width * 0.5, 0, size_germ.width * 0.5, size_germ.height));
                sp_drop2.setAnchorPoint(0.5, 0.5);
                sp_drop2.setPosition(pos_germ.x + size_germ.width * 0.5 * 0.5, pos_germ.y);
                sp_drop2.setRotation(-90);

                this.addChild(sp_drop1, 1);
                this.addChild(sp_drop2, 1);
                //
                var rota1 = new cc.RotateBy(0.5, -360);
                var rota2 = new cc.RotateBy(0.5, 360);
                var move1 = new cc.MoveBy(0.5, -100, -300);
                var move2 = new cc.MoveBy(0.5, 100, -300);
                sp_drop1.runAction(cc.sequence(cc.spawn(rota1, move1), cc.callFunc(function () {
                    this.removeFromParent(true);
                }, sp_drop1)));

                sp_drop2.runAction(cc.sequence(cc.spawn(rota2, move2), cc.callFunc(function () {
                    this.removeFromParent(true);
                }, sp_drop2)));


                this.addScore(100,pos_germ);
                sp_germ.removeFromParent(true);
                size--;
            }
        }
    },

    touchBomb:function(pos){
        var size = this.m_layerBomb.getChildrenCount();
        for(var i = 0;i < size;i++)
        {
            var sp_bomb = this.m_layerBomb.getChildren()[i];
            var pos_bomb= sp_bomb.getPosition()
            var size_bomb = sp_bomb.getContentSize()
            var dis = Math.sqrt((pos.x-pos_bomb.x)*(pos.x-pos_bomb.x)+(pos.y-pos_bomb.y)*(pos.y-pos_bomb.y));
            if(dis < size_bomb.width)
            {
                this.touchBombEffect(pos_bomb);
                this.addScore(-300,pos_bomb);
                sp_bomb.removeFromParent(true);
                size--;
            }
        }
    },

    //检测是否触摸到刚体
    touchBody:function(pos){
        var self = this;
        var MyB2Transform = Box2D.Common.Math.b2Transform;
        var b2Vec2 = Box2D.Common.Math.b2Vec2;
        var node = self.m_world.GetBodyList();
        while(node)
        {
            var b = node;
            node = node.GetNext();

            var sp = b.GetUserData();
            if(sp) {
                var shape = b.GetFixtureList().GetShape();
                var trans = new MyB2Transform;
                trans.SetIdentity();

                var pos2 = new b2Vec2(pos.x / PTM_RATIO, pos.y / PTM_RATIO);
                var tran_pos = b.GetLocalPoint(pos2);
                var body_pos = b.GetPosition();
        //        //var tran_pos = new b2Vec2(pos.x / PTM_RATIO - body_pos.x, pos.y / PTM_RATIO - body_pos.y);
                var hit = shape.TestPoint(trans, tran_pos);
                if (hit) {
                    var size_sp = sp.getContentSize();
                    var pos_sp = sp.getPosition();
                    var tag = sp.getTag();
                    sp.removeFromParent(true);
                    self.m_world.DestroyBody(b);

                    if (tag > 0) {
                        var sp_drop1 = new cc.Sprite("res/germ1_" + tag + ".png");
                        sp_drop1.setTextureRect(cc.rect(0, 0, size_sp.width * 0.5, size_sp.height));
                        sp_drop1.setAnchorPoint(0.5, 0.5);
                        sp_drop1.setPosition(pos_sp.x - size_sp.width * 0.5 * 0.5, pos_sp.y);
                        sp_drop1.setRotation(-90);

                        //                       var sp_drop2 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("res/dropCard"+tag+".png"));
                        var sp_drop2 = new cc.Sprite("res/germ1_" + tag + ".png");
                        sp_drop2.setTextureRect(cc.rect(size_sp.width * 0.5, 0, size_sp.width * 0.5, size_sp.height));
                        sp_drop2.setAnchorPoint(0.5, 0.5);
                        sp_drop2.setPosition(pos_sp.x + size_sp.width * 0.5 * 0.5, pos_sp.y);
                        sp_drop2.setRotation(-90);

                        self.addChild(sp_drop1, 1);
                        self.addChild(sp_drop2, 1);
                        //
                        var rota1 = new cc.RotateBy(0.5, -360);
                        var rota2 = new cc.RotateBy(0.5, 360);
                        var move1 = new cc.MoveBy(0.5, -100, -300);
                        var move2 = new cc.MoveBy(0.5, 100, -300);
                        sp_drop1.runAction(cc.sequence(cc.spawn(rota1, move1), cc.callFunc(function () {
                            this.removeFromParent(true);
                        }, sp_drop1)));

                        sp_drop2.runAction(cc.sequence(cc.spawn(rota2, move2), cc.callFunc(function () {
                            this.removeFromParent(true);
                        }, sp_drop2)));

                        tag = 100;
                    }
                    else{
                        self.touchBombEffect(pos_sp);
                    }

                    //加分；
                    self.addScore(tag,pos_sp);
                }
            }
        }
    },

    touchAirCleaner:function(pos){
        var size = this.m_layerAirCleaner.getChildrenCount();
        for(var i = 0;i < size;i++){
            var sp = this.m_layerAirCleaner.getChildren()[i];
            if(sp&&sp.m_isTouch) {
                var size_sp = sp.getContentSize();
                var pos_sp = sp.getPosition();
                var rect_sp = cc.rect(pos_sp.x - size_sp.width / 2, pos_sp.y, size_sp.width, size_sp.height);
                if (cc.rectContainsPoint(rect_sp, pos)) {
                    var tag = sp.getTag();
                    var pos_score = cc.p(pos_sp.x, pos_sp.y + size_sp.height * 0.5);
                    var score = 300;
                    switch (tag) {
                        case 1:
                        {
                            score = 500;
                            //                       this.addScore(400,pos_score);
                        }
                            break;
                        case 2:
                        {
                            score = 450;
                            //                       this.addScore(300,pos_score);
                        }
                            break;
                        case 3:
                        {
                            score = 350;
                            //                       this.addScore(250,pos_score);
                        }
                            break;
                        default :
                        {
                        }

                    }
                    sp.removeFromParent(true);
                    size--;

                    this.addScore(score, pos_sp);
                    this.touchAirCleanerEffect(pos_score, tag);
                }
            }
        }
    },

    touchBombEffect:function(pos){
        this.m_bg.stopAllActions();

        this.m_bg.setScale(1.1);
        var moveUp = new cc.MoveBy(0.05,20,0);
        var moveDown = new cc.MoveBy(0.05,-20,0);
        var moveRight = new cc.MoveBy(0.1,0,20);
        var moveLeft = new cc.MoveBy(0.1,0,-20);
        var repeat1 = cc.repeatForever(cc.sequence(moveDown,moveUp));
        var repeat2 = cc.repeatForever(cc.sequence(moveLeft,moveRight))
        this.m_bg.runAction(repeat1);
        this.m_bg.runAction(repeat2);
        var self = this;

        var layerColor = new cc.LayerColor(cc.color(255,255,255,255),cc.winSize.width,cc.winSize.height);
        layerColor.setPosition(0,0);
        layerColor.setOpacity(0);
        this.addChild(layerColor,11);
        layerColor.runAction(cc.sequence(cc.fadeIn(0.3),cc.delayTime(0.5),cc.fadeOut(0.6),cc.callFunc(function(){
            this.removeFromParent(true);
            self.m_bg.setScale(1);
            self.m_bg.stopAction(repeat1);
            self.m_bg.stopAction(repeat2);

            self.m_bg.setPosition(0,0);
        },layerColor)));

        var sp_explorer = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("explosion1.png"));
        sp_explorer.setAnchorPoint(0.5,0.5);
        sp_explorer.setScale(1.5);
        sp_explorer.setPosition(pos);
        var array_frame = [];
        for(var i = 1;i < 5;i++)
        {
            array_frame.push(cc.spriteFrameCache.getSpriteFrame("explosion"+i+".png"));
        }
        var ani = new cc.Animation(array_frame,0.2,1);
        sp_explorer.runAction(cc.sequence(new cc.Animate(ani),cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_explorer)));
        this.addChild(sp_explorer,2);
    },

    //空气净化器效果
    touchAirCleanerEffect:function(pos,tag){
        var sp_guang = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.guang_png));
        sp_guang.setAnchorPoint(0.5,0.5);
        sp_guang.setScale(1.8);
        sp_guang.setPosition(pos);
        sp_guang.setOpacity(0);
        this.addChild(sp_guang,2);

        var sp_cleaner = new cc.Sprite("res/airCleaner"+tag+".png");
        sp_cleaner.setAnchorPoint(0.5,0.5);
        sp_cleaner.setPosition(sp_guang.getPosition());
   //     sp_cleaner.setPosition(sp_guang.getContentSize().width/2,sp_guang.getContentSize().height/2);
        this.addChild(sp_cleaner,3);


        var fadeIn = new cc.FadeIn(0.2);
        var fadeOut = new cc.FadeOut(1.0);
        sp_guang.runAction(cc.sequence(fadeIn,fadeOut,cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_guang)));

        var fadeIn2 = fadeIn.clone();
        var fadeOut2 = fadeOut.clone();
        sp_cleaner.runAction(cc.sequence(fadeIn2,fadeOut2,cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_cleaner)));

        var lbl_name = new cc.LabelTTF("","Arial",30);
        lbl_name.setColor(cc.color(255,255,255,255));
        lbl_name.setAnchorPoint(0.5,0.5);
        lbl_name.setPosition(pos.x,pos.y + sp_cleaner.getContentSize().height/2);
        lbl_name.enableStroke(cc.color(0,0,0,255),3);
        this.addChild(lbl_name,4);
        switch (tag)
        {
            case 1:
                lbl_name.setString("Intelligence 4000\n智享甲醛专用型");
                break;
            case 2:
                lbl_name.setString("Intelligence 3500\n智享清新增强型");
                break;
            case 3:
                lbl_name.setString("Intelligence 2500\n智享清新标准型");
                break;
            default :
            {

            }
        }

        var scaleToBig = new cc.ScaleTo(0.2,1.5);
        var scaleToSmall = new cc.ScaleTo(1,1);
        lbl_name.runAction(cc.sequence(scaleToBig,scaleToSmall,cc.callFunc(function(){
            this.removeFromParent(true);
        },lbl_name)));
    },

    //游戏结束
    gameOver:function(){
//        alert("细菌数量"+const_totalGerm)
        cc.eventManager.removeListener(this.m_listener);
        this.unscheduleAllCallbacks();
        this.m_layerGerm.removeFromParent(true);
        this.m_layerBomb.removeFromParent(true);
        this.m_layerAirCleaner.removeFromParent(true);

        this.updateScore();
    },

    updateScore:function(){
        var self = this;
        GameService.updateScore(this.m_curScore,function(result){
            if("error" == result) {
                //上传不成功
                self.updateScore();
            }
            else{
                //result  排名
                self.m_MyRank = result;
                //分数上传成功
                if(CustomerInfo.phone == 0) {
                    //未提交手机号
                    self.updatePhoto();
                }
                else {
                    //提交过手机号
                    self.gameOverShow();
                }
            }
        });
    },

    updatePhoto:function(){
        var self = this;

        $("#gameCanvas").css("display","none");
        $("#tjxx").css("display","block");

        $("#score").text(self.m_curScore);
        $("#phone")[0].maxLength = 11;

        $("#btn_qd").click(function(){
            if(!self.isClick) {
                self.isClick = true;
                var temTel = $("#phone")[0].value;
                var telValue = MY_GLOBAL.trim(temTel);      //去掉字符串两端空格
                var regMobile = /[1][3|4|5|8]\d{9}$/;
                var regMobile2 = /[1][7][7]\d{8}$/;
                var mflag = regMobile.test(telValue);
                var mflag2 = regMobile2.test(telValue);
                if (mflag || mflag2) {
                    self.updateInfo(telValue);
                }
                else {
                    $("#phone_tip").text("请输入11位有效的手机号");
                    $("#phone_tip").css("display", "block");

                    self.scheduleOnce(function(){
                        $("#phone_tip").css("display","none");
                        self.isClick = false;
                    }, 1.0);
                }
            }
        });
    },

    updateInfo:function(telValue){

        var self = this;
        GameService.updateInfo(telValue, function (msg) {
            if ("repeat" == msg) {
                //手机输入重复
                $("#phone_tip").text("此手机号已经用过");
                $("#phone_tip").css("display", "block");

                self.scheduleOnce(function(){
                    $("#phone_tip").css("display","none");
                    self.isClick = false;
                }, 1.0);

            }
            else if ("error" == msg) {
                self.updateInfo(telValue);
            }
            else {
                //手机输入正确
                //显示cocos，隐藏输入手机号码div
                $("#tjxx").css("display", "none");
                $("#gameCanvas").css("display","block");
                self.gameOverShow();
            }

        });
    },

    gameOverShow:function(){
        var bestScore =  CustomerInfo.score>this.m_curScore? CustomerInfo.score:this.m_curScore;

        var layer = new cc.Layer();
        layer.setPosition(0,0);
        this.addChild(layer,20);

        var note_over = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.note_score_png));
        note_over.setAnchorPoint(0.5,0.5);
        note_over.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.62);
        layer.addChild(note_over);
        var size_note = note_over.getContentSize();

        var lbl_curScore = new cc.LabelTTF(this.m_curScore+"","Arial",40);
        lbl_curScore.setColor(cc.color(255,0,0,255));
        lbl_curScore.setAnchorPoint(0.5,0.5);
        lbl_curScore.setPosition(size_note.width*0.7,size_note.height*0.6);
        note_over.addChild(lbl_curScore);

        var lbl_bestScore = new cc.LabelTTF(bestScore+"","Arial",40);
        lbl_bestScore.setColor(cc.color(255,0,0,255));
        lbl_bestScore.setAnchorPoint(0.5,0.5);
        lbl_bestScore.setPosition(size_note.width*0.75,size_note.height*0.48);
        note_over.addChild(lbl_bestScore);

        var lbl_MyRank = new cc.LabelTTF(this.m_MyRank+"","Arial",40);
        lbl_MyRank.setColor(cc.color(255,0,0,255));
        lbl_MyRank.setAnchorPoint(0.5,0.5);
        lbl_MyRank.setPosition(size_note.width*0.65,size_note.height*0.38);
        note_over.addChild(lbl_MyRank);

        var sp_againNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        var sp_againSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        sp_againSelected.setOpacity(150);
        var btn_again = new cc.MenuItemSprite(sp_againNormal,sp_againSelected,function(){
            GameService.restart();
        },this);
        btn_again.setAnchorPoint(0.5,0.5);
        btn_again.setPosition(cc.winSize.width*0.25,cc.winSize.height*0.2);

        var sp_shareNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
        var sp_shareSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
        sp_shareSelected.setOpacity(150);
        var btn_share = new cc.MenuItemSprite(sp_shareNormal,sp_shareSelected,this.share,this);
        btn_share.setAnchorPoint(0.5,0.5);
        btn_share.setPosition(cc.winSize.width*0.75,cc.winSize.height*0.2);

        var menu = new cc.Menu(btn_again,btn_share);
        menu.setPosition(0,0);
        layer.addChild(menu);
    },

    share:function(pSender){
        var menu = new cc.Menu();
        menu.setPosition(0,0);
        this.addChild(menu,21);

        var bg_share = new cc.MenuItemImage(res.guide_png,res.guide_png,function(){
            menu.removeFromParent(true);
        },this);
        bg_share.setAnchorPoint(0,0);
        bg_share.setPosition(0,0);
        var size_share = bg_share.getContentSize();
        bg_share.setScale(cc.winSize.width/size_share.width,cc.winSize.height/size_share.height);
        menu.addChild(bg_share);
    },

    addTouch:function(){
        var self = this;
        var is_oneTouch = false;

        self.m_listener = new cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan:function(touch,event){
                if(!is_oneTouch) {
                    is_oneTouch = true;
                    var pos = touch.getLocation();
                    self.m_beganPos = pos;
                    self.m_preTouchPos1 = pos;

  //                  self.touchBody(pos);
  //                  self.touchGerm(pos);
  //                  self.touchBomb(pos);
  //                  self.touchAirCleaner(pos);

                    var myData = new Date();
                    last_update = myData.getSeconds() * 1000 + myData.getMilliseconds();
                    return true;
                }
                return false;
            },
            onTouchMoved:function(touch,event){
                var pos = touch.getLocation();

                var preTouchPos2 = self.m_preTouchPos2;
                if(preTouchPos2)
                {
                    var preTouchPos1 = self.m_preTouchPos1;
                    if((preTouchPos2.x - preTouchPos1.x >= 0&&pos.x - preTouchPos2.x <= 0)
                        ||(preTouchPos2.x - preTouchPos1.x <= 0&&pos.x - preTouchPos2.x >= 0)
                        ||(preTouchPos2.y - preTouchPos1.y >= 0&&pos.y - preTouchPos2.y <= 0)||
                        (preTouchPos2.y - preTouchPos1.y <= 0&&pos.y - preTouchPos2.y >= 0))
                    {
                        self.locus(self.m_beganPos,preTouchPos2);
                        self.m_beganPos = pos;
                        self.m_preTouchPos1 = pos;
                        self.m_preTouchPos2 = undefined;

                        var myData = new Date();
                        last_update =  myData.getSeconds() * 1000 + myData.getMilliseconds();
                    }
                    else
                    {
                        var myData = new Date();
                        var curTime = myData.getSeconds() * 1000 + myData.getMilliseconds();
                        if(curTime - last_update >frequency)
                        {
                            last_update = curTime;
                            self.locus(self.m_beganPos,pos);
                            self.m_beganPos = pos;
                            self.m_preTouchPos1 = pos;
                            self.m_preTouchPos2 = undefined;
                        }
                        else
                        {
                            self.m_preTouchPos1 =  self.m_preTouchPos2;
                            self.m_preTouchPos2 = pos;
                        }
                    }
                }
                else
                {
                    self.m_preTouchPos2 = pos;
                }
 //               self.touchBody(pos);
                self.touchGerm(pos);
                self.touchBomb(pos);
                self.touchAirCleaner(pos);

            },
            onTouchEnded:function(touch,event){
                //cc.audioEngine.playEffect(res.qie_mp3);
                var pos = touch.getLocation();
                self.m_preTouchPos1 = undefined;
                self.m_preTouchPos2 = undefined;
                //画轨迹
                var beganPos = self.m_beganPos;
                self.locus(beganPos,pos);
                is_oneTouch = false;
            },
            onTouchCanceled:function(touch,event){
                //cc.audioEngine.playEffect(res.qie_mp3);
                var pos = touch.getLocation();
                self.m_preTouchPos1 = undefined;
                self.m_preTouchPos2 = undefined;
                //画轨迹
                var beganPos = self.m_beganPos;
                self.locus(beganPos,pos);
                is_oneTouch = false;
            }
        });
        cc.eventManager.addListener(self.m_listener,self);
    }
})

var PlayingScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new PlayingLayer();
        this.addChild(layer);
    }
})