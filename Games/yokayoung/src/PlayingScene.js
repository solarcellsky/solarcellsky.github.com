/**
 * Created by Administrator on 2015/4/3.
 */
var PTM_RATIO = 32;
var velocityIterations = 8;
var positionIterations = 1;

var last_update = 0;
var frequency = 100;
var const_disappearTime = 0.15;

var const_createDropTime = 0.5;
var const_disDropTime = 0.0014;

var const_createBombTime = 2.6;
var const_createRedBagTime = 5;

var const_bombTag = 99;

var const_redBagTag0 = 100;
var const_redBagTag5 = 105;
var const_redBagTag50 = 150;

//var const_totalCount = 0;

var PlayingLayer = cc.Layer.extend({
    m_world:undefined,
    m_bg:undefined,
    m_listener:undefined,
    m_lblTime:undefined,
    m_curTime:5, //游戏时间
    m_lblScore:undefined,
    m_curScore:0,
    m_beganPos:undefined,
    m_dropLayer:undefined,
    m_bombLayer:undefined,
    m_redBagLayer:undefined,
    m_preTouchPos1:undefined,
    m_preTouchPos2:undefined,
    m_createDrop:undefined,
    m_createBomb:undefined,
    m_createRedBag:undefined,
    m_isGetAward:true,
    m_curCreateDropTime:const_createDropTime,
    ctor:function(){
        this._super();
        this.initUI();
    },

    initUI:function() {
        var self = this;
        var sp_bg = self.m_bg = new cc.Sprite(res.bg_game_jpg);
        sp_bg.setAnchorPoint(0, 0);
        sp_bg.setPosition(0, 0);
        self.addChild(sp_bg);
        var size_bg = sp_bg.getContentSize();

        //时间背景
        var sp_time = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.time_png));
        sp_time.setAnchorPoint(0, 1);
        sp_time.setPosition(size_bg.width * 0.02, size_bg.height * 0.99);
        sp_bg.addChild(sp_time);
        var size_timeBg = sp_time.getContentSize();

        var lbl_time = self.m_lblTime = new cc.LabelTTF(self.m_curTime + "", "Arial", 28);
        lbl_time.enableStroke(cc.color(72,38,10,255), 2);
        //lbl_time._shadowEnabled = true;
        //lbl_time._enableShadow(cc.color(0,0,0,255));
        lbl_time.setAnchorPoint(0.5, 0.5);
        lbl_time.setPosition(size_timeBg.width * 0.55, size_timeBg.height * 0.4);
        sp_time.addChild(lbl_time);

        //得分背景
        var sp_scoreBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.score_png));
        sp_scoreBg.setAnchorPoint(1, 1);
        sp_scoreBg.setPosition(size_bg.width * 0.98, size_bg.height * 0.98);
        sp_bg.addChild(sp_scoreBg);
        var size_scoreBg = sp_scoreBg.getContentSize();

        var lbl_score = self.m_lblScore = new cc.LabelTTF(self.m_curScore + "", "Arial", 28);
        lbl_score.enableStroke(cc.color(72,38,10,255), 2);
        lbl_score.setAnchorPoint(0.5, 0);
   //     lbl_score.setColor(cc.color(251, 253, 4, 255));
        lbl_score.setPosition(size_scoreBg.width * 0.67, size_scoreBg.height * 0.1);
        sp_scoreBg.addChild(lbl_score);

        var dropLayer = self.m_dropLayer = new cc.Layer();
        dropLayer.setPosition(0, 0);
        sp_bg.addChild(dropLayer, 1);

        var bombLayer = self.m_bombLayer = new cc.Layer();
        bombLayer.setPosition(0, 0);
        sp_bg.addChild(bombLayer, 1);

        var redBagLayer = self.m_redBagLayer = new cc.Layer();
        redBagLayer.setPosition(0, 0);
        sp_bg.addChild(redBagLayer, 1);

        //创建世界
        var b2Vec2 = Box2D.Common.Math.b2Vec2
            , b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2World = Box2D.Dynamics.b2World
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape



        var world = self.m_world = new b2World(new b2Vec2(0.0, -60), true);           //创建物理世界

        //      world.SetDebugDraw(draw);
        var bodyDef_drop = new b2BodyDef;                                               //刚体定义
        bodyDef_drop.type = b2Body.b2_dynamicBody;                                    //动态刚体定义
        var fixDef_drop = new b2FixtureDef;                                             //夹具定义
        fixDef_drop.density = 1.0;
        fixDef_drop.friction = 0.0;
        fixDef_drop.restitution = 0.0;
        fixDef_drop.filter.groupIndex = -8;

        //创建吊牌
        self.m_createDrop = function () {
            if(self.m_curTime > 1) {
 //               const_totalCount++;
                var picTag = parseInt(Math.random() * 5) + 1;
                var sp_drop = new cc.Sprite("res/dropCard" + picTag + ".png");
                sp_drop.setTag(picTag);
                sp_drop.setAnchorPoint(0.5, 0.5);
                var randX = Math.random() * cc.winSize.width;
                var disX = randX - cc.winSize.width / 2;
                sp_drop.setPosition(randX, 0);
                self.m_dropLayer.addChild(sp_drop);

                var size_drop = sp_drop.getContentSize();
                var pos_drop = sp_drop.getPosition();

                bodyDef_drop.position.Set(pos_drop.x / PTM_RATIO, pos_drop.y / PTM_RATIO);
                bodyDef_drop.userData = sp_drop;
                var shape = new b2PolygonShape;
                shape.SetAsBox(size_drop.width * 0.6 / PTM_RATIO, size_drop.height * 0.6 / PTM_RATIO);
                fixDef_drop.shape = shape;
                var body = world.CreateBody(bodyDef_drop);

                var randAngle = (Math.random() * (Math.PI * 0.5) + Math.PI * 0.8) * (parseInt(Math.random() * 2) == 0 ? 1 : -1);
                body.SetAngularVelocity(randAngle);
                body.SetLinearVelocity(new b2Vec2((-disX / (cc.winSize.width / 2)) * 300.0 / PTM_RATIO, 1800.0 / PTM_RATIO));
                body.CreateFixture(fixDef_drop);

                self.schedule(self.m_createDrop, self.m_curCreateDropTime);
            }
        };
        self.schedule(self.m_createDrop, self.m_curCreateDropTime);           //创建吊牌定时器

        //创建炸弹
        var n_bomb = 0;
        var first_bomb = parseInt(Math.random()*5)+2;
        var second_bomb = parseInt(Math.random()*5)+8;
        var n_count = 1;
        self.m_createBomb = function () {
            n_bomb++;
            if(n_bomb == first_bomb||n_bomb == second_bomb) {
                n_count = 2;
            }
            else {
                n_count = 1;
            }
            for(var i = 0;i < n_count;i++) {
                var sp_bomb = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.bomb_png));
                sp_bomb.setTag(const_bombTag);
                var randX = Math.random() * cc.winSize.width;
                var disX = randX - cc.winSize.width / 2;
                sp_bomb.setAnchorPoint(0.5, 0.5);
                sp_bomb.setPosition(randX, 0);
                self.m_bombLayer.addChild(sp_bomb);
                var size_bomb = sp_bomb.getContentSize();
                var pos_bomb = sp_bomb.getPosition();

                bodyDef_drop.position.Set(pos_bomb.x / PTM_RATIO, pos_bomb.y / PTM_RATIO);
                bodyDef_drop.userData = sp_bomb;
                var shape = new b2PolygonShape;
                shape.SetAsBox(size_bomb.width * 0.5 / PTM_RATIO, size_bomb.height * 0.5 / PTM_RATIO);
                fixDef_drop.shape = shape;
                var body = world.CreateBody(bodyDef_drop);

                var randAngle = (Math.random() * (Math.PI * 0.5) + Math.PI * 0.8) * (parseInt(Math.random() * 2) == 0 ? 1 : -1);
                body.SetAngularVelocity(randAngle);
                body.SetLinearVelocity(new b2Vec2((-disX / (cc.winSize.width / 2)) * 300.0 / PTM_RATIO, 1800.0 / PTM_RATIO));
                body.CreateFixture(fixDef_drop);
            }
        };

        //       var n_redBag = 1;
        var redBagTag = const_redBagTag0;
        if (2 == g_redBagIndex) {
            redBagTag = const_redBagTag5;
            self.m_isGetAward = false;

        }
        else if (1 == g_redBagIndex) {
            redBagTag = const_redBagTag50;
            self.m_isGetAward = false;
        }

        self.m_createRedBag = function () {
            var sp_redBag = new cc.Sprite(res.redBag_png);
            if (!self.m_isGetAward) {
                sp_redBag.setTag(redBagTag);
            }
            else {
                sp_redBag.setTag(const_redBagTag0);
            }
            //          n_redBag++;

            var randX = Math.random() * cc.winSize.width;
            var disX = randX - cc.winSize.width / 2;
            sp_redBag.setAnchorPoint(0.5, 0.5);
            sp_redBag.setPosition(randX, 0);
            self.m_bombLayer.addChild(sp_redBag);
            var size_redBag = sp_redBag.getContentSize();
            var pos_redBag = sp_redBag.getPosition();

            bodyDef_drop.position.Set(pos_redBag.x / PTM_RATIO, pos_redBag.y / PTM_RATIO);
            bodyDef_drop.userData = sp_redBag;
            var shape = new b2PolygonShape;
            shape.SetAsBox(size_redBag.width * 0.7 / PTM_RATIO, size_redBag.height * 0.7 / PTM_RATIO);
            fixDef_drop.shape = shape;
            var body = world.CreateBody(bodyDef_drop);

            var randAngle = (Math.random() * (Math.PI * 0.5) + Math.PI * 0.8) * (parseInt(Math.random() * 2) == 0 ? 1 : -1);
            body.SetAngularVelocity(randAngle);
            body.SetLinearVelocity(new b2Vec2((-disX / (cc.winSize.width / 2)) * 300.0 / PTM_RATIO, 1800.0 / PTM_RATIO));
            body.CreateFixture(fixDef_drop);
        };
        self.schedule(self.m_createBomb, const_createBombTime, cc.REPEAT_FOREVER, const_createBombTime);           //创建炸弹定时器

        if (g_redBagIndex != 3) {
            self.schedule(self.m_createRedBag, const_createRedBagTime, 4, const_createRedBagTime);                       //创建红包
        }

        self.scheduleUpdate();
        self.schedule(self.MyUpdate,0.1,cc.REPEAT_FOREVER,0.1);
        self.schedule(self.cutTime, 1, cc.REPEAT_FOREVER, 1);
        self.addTouch();
    },

    MyUpdate:function(){
        //this.m_curCreateDropTime = this.m_curCreateDropTime - const_disDropTime;
        var rand_dis = Math.random()*const_disDropTime+const_disDropTime*0.5;
 //       var rand_dis = const_disDropTime*0.5+const_disDropTime*0.5;
        this.m_curCreateDropTime -= rand_dis;
        //if(window.orientation==90||window.orientation==-90){
        //    alert("请竖屏玩耍...");
        //}

    },
    update:function(dt)
    {
        this.m_world.Step(dt, velocityIterations, positionIterations);
 //       var b2Vec2 = Box2D.Common.Math.b2Vec2;
        var node = this.m_world.GetBodyList();
        while(node)
        {
            var b = node;
            node = node.GetNext();

            if (b.GetUserData()) {
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var sp_drop = b.GetUserData();
                var pos_b = b.GetPosition();
                var size_drop = sp_drop.getContentSize();
                if (pos_b.y * PTM_RATIO < -size_drop.height / 2) {
                    sp_drop.removeFromParent(true);
                    this.m_world.DestroyBody(b);
                    continue;
                }

                var angle_b = b.GetAngle();
                sp_drop.setPosition(pos_b.x * PTM_RATIO, pos_b.y * PTM_RATIO);
                sp_drop.setRotation(-angle_b * (180 / Math.PI));
                //var pos_drop = sp_drop.getPosition();
                //b.SetPosition(new b2Vec2(pos_drop.x/PTM_RATIO,pos_drop.y/PTM_RATIO))
            }
        }
    },

    //切中吊牌音效
    // playCutDropEffect:function(){
    //     global_audio.src = res.qie_mp3;
    //     global_audio.play();
    // },

    playCutBombEffect:function(){
        var global_audio = new Audio()
        global_audio.src = res.yanhua_mp3;
        global_audio.play();
        console.log('bbbb');
    },
    //倒计时
    cutTime:function(dt){
        this.m_curTime--;
        this.m_lblTime.setString(this.m_curTime+"");
        if(this.m_curTime <= 0)
        {
   //         alert("总数量"+const_totalCount);
            this.unschedule(this.cutTime);
            this.timeOver();
        }
    },

    //时间结束
    timeOver:function(){
        var self = this;
        self.gameOver()
//        g_updateScore(self.m_curScore,function(){
   //         cc.container.style.display = "none";
            //var isUpdateTel = false;
            //if(isUpdateTel) {
                var sp_gameOver = new cc.Sprite(res.bg_gameOver_jpg);
                sp_gameOver.setAnchorPoint(0, 0);
                sp_gameOver.setPosition(0, 0);
                self.addChild(sp_gameOver, 1);
                var size_bg = sp_gameOver.getContentSize();

                var lbl_curScore = new cc.LabelTTF(self.m_curScore, "Arial", 30);
                lbl_curScore.setColor(cc.color(255, 255, 255, 255));
                lbl_curScore.enableStroke(cc.color(72,38,10,255), 2);
                lbl_curScore.setAnchorPoint(0.5, 0.5);
                lbl_curScore.setPosition(size_bg.width * 0.65, size_bg.height * 0.685);
                sp_gameOver.addChild(lbl_curScore);

                var lbl_curRand = new cc.LabelTTF("...", "Arial", 30);
                lbl_curRand.setColor(cc.color(255, 255, 255, 255));
                lbl_curRand.enableStroke(cc.color(72,38,10,255), 2);
                lbl_curRand.setAnchorPoint(0.5, 0.5);
                lbl_curRand.setPosition(size_bg.width * 0.65, size_bg.height * 0.575);
                sp_gameOver.addChild(lbl_curRand);

                var lbl_bestScore = new cc.LabelTTF("...", "Arial", 30);
                lbl_bestScore.setColor(cc.color(255, 255, 255, 255));
                lbl_bestScore.enableStroke(cc.color(72,38,10,255), 2);
                lbl_bestScore.setAnchorPoint(0.5, 0.5);
                lbl_bestScore.setPosition(size_bg.width * 0.65, size_bg.height * 0.455);
                sp_gameOver.addChild(lbl_bestScore);

                var lbl_bestRand = new cc.LabelTTF("...", "Arial", 30);
                lbl_bestRand.setColor(cc.color(255, 255, 255, 255));
                lbl_bestRand.enableStroke(cc.color(72,38,10,255), 2);
                lbl_bestRand.setAnchorPoint(0.5, 0.5);
                lbl_bestRand.setPosition(size_bg.width * 0.65, size_bg.height * 0.335);
                sp_gameOver.addChild(lbl_bestRand);

                //时间到"再来一次"
                var sp_againNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
                var sp_againSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
                sp_againSelected.setOpacity(150);
                var btn_again = new cc.MenuItemSprite(sp_againNormal, sp_againSelected, self.gameAgain, self);
                btn_again.setAnchorPoint(0.5, 0.5);
                btn_again.setPosition(size_bg.width * 0.695, size_bg.height * 0.22);

                var sp_duijiangNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_duijiang_png));
                var sp_duijiangSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_duijiang_png));
                sp_duijiangSelected.setOpacity(150);
                var btn_duijiang = new cc.MenuItemSprite(sp_duijiangNormal, sp_duijiangSelected, self.getAward, self);
                btn_duijiang.setAnchorPoint(0.5, 0.5);
                btn_duijiang.setPosition(size_bg.width * 0.315, size_bg.height * 0.22);

                var sp_shareNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
                var sp_shareSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
                sp_shareSelected.setOpacity(150);
                var btn_share = new cc.MenuItemSprite(sp_shareNormal, sp_shareSelected, self.share, self);
                btn_share.setAnchorPoint(0.5, 0.5);
                btn_share.setPosition(size_bg.width * 0.5, size_bg.height * 0.15);

                //var sp_focusNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_gz_png));
                //var sp_focusSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_gz_png));
                //sp_focusSelected.setOpacity(150);
                //var btn_focus = new cc.MenuItemSprite(sp_focusNormal, sp_focusSelected, self.focus, self);
                //btn_focus.setAnchorPoint(0.5, 0.5);
                //btn_focus.setPosition(size_bg.width * 0.5, -size_bg.height * 0.5);

                var menu = new cc.Menu(btn_again,btn_duijiang,btn_share);
                menu.setPosition(0, 0);
                sp_gameOver.addChild(menu);
            //}
            //else{
            //    cc.container.style.display = "none";
            //    $("#tjxx").css("display","block");
            //
            //    var isClick = false;
            //    $("#btn_submit")[0].onclick = function(){
            //        if(!isClick) {
            //            isClick = true;
            //            var temTel = $("#phone")[0].value;
            //            var telValue = MY_GLOBAL.trim(temTel);      //去掉字符串两端空格
            //            var regMobile = /[1][3|4|5|8]\d{9}$/;
            //            var regMobile2 = /[1][7][7]\d{8}$/;
            //            var mflag = regMobile.test(telValue);
            //            var mflag2 = regMobile2.test(telValue);
            //            if (mflag || mflag2) {
            //                g_updateTelNum(telValue, function () {
            //                    var msg = "";
            //                    if ("repeat" == msg) {
            //                        //手机输入重复
            //                        alert("此手机号已经用过");
            //                        isClick = false;
            //                    }
            //                    else {
            //                        //手机输入正确
            //                        //显示cocos，隐藏输入手机号码div
            //                        cc.container.style.display = "block";
            //                        $("#tjxx").css("display", "none");
            //                        self.updateTelFinish();
            //                    }
            //                });
            //            }
            //            else {
            //                    alert("请输入11位有效的手机号码");
            //                    isClick = false;
            //            }
            //        }
            //    };
            //}
 //       });
    },

    //提交手机之后
    updateTelFinish:function(){
        var self = this;
        var sp_gameOver = new cc.Sprite(res.tk_tip_png);
        sp_gameOver.setAnchorPoint(0.5, 0.5);
        sp_gameOver.setPosition(cc.winSize.width * 0.5, cc.winSize.height * 0.7);
        self.addChild(sp_gameOver, 1);
        var size_bg = sp_gameOver.getContentSize();

        var sp_shareNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
        var sp_shareSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
        sp_shareSelected.setOpacity(150);
        var btn_share = new cc.MenuItemSprite(sp_shareNormal, sp_shareSelected, self.share, self);
        btn_share.setAnchorPoint(0.5, 0.5);
        btn_share.setPosition(size_bg.width * 0.3, -size_bg.height * 0.2);

        var sp_againNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        var sp_againSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        sp_againSelected.setOpacity(150);
        var sp_againDisable = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        sp_againDisable.setOpacity(150);
        var btn_again = new cc.MenuItemSprite(sp_againNormal, sp_againSelected,sp_againDisable, self.gameAgain, self);
        btn_again.setAnchorPoint(0.5, 0.5);
        btn_again.setPosition(size_bg.width * 0.7, -size_bg.height * 0.2);

        var sp_focusNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_gz_png));
        var sp_focusSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_gz_png));
        sp_focusSelected.setOpacity(150);
        var btn_focus = new cc.MenuItemSprite(sp_focusNormal, sp_focusSelected, self.focus, self);
        btn_focus.setAnchorPoint(0.5, 0.5);
        btn_focus.setPosition(size_bg.width * 0.5, -size_bg.height * 0.5);

        var menu = new cc.Menu(btn_share, btn_focus,btn_again);
        menu.setPosition(0, 0);
        sp_gameOver.addChild(menu);
    },

    addScore:function(){
        this.m_curScore++;
        this.m_lblScore.setString(this.m_curScore+"");
    },

    //创建吊牌
    //createDrop:function(){
    //    var self = this;
    //
    //    var sp_drop = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.dropCard_png));
    //    sp_drop.setAnchorPoint(0.5,0.5);
    //    var size_drop = sp_drop.getContentSize();
    //    var randX = Math.random()*cc.winSize.width;
    //    sp_drop.setPosition(randX,cc.winSize.height+size_drop.height/2);
    //    self.m_dropLayer.addChild(sp_drop);
    //
    //    var moveDrop = new cc.MoveBy(const_dropTime,0,-cc.winSize.height-size_drop.height);
    //
    //    sp_drop.runAction(cc.sequence(moveDrop,cc.callFunc(function(){
    //        sp_drop.removeFromParent(true);
    //    },self)));
    //},


    //创建炸弹
    //createBomb:function(){
    //    var self = this;
    //    var sp_bomb = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.bomb_png));
    //    sp_bomb.setAnchorPoint(0,0);
    //
    //    var size_bomb = sp_bomb.getContentSize();
    //    var randX = Math.random()*(cc.winSize.width-size_bomb.width);
    //    sp_bomb.setPosition(randX,cc.winSize.height);
    //    self.m_bombLayer.addChild(sp_bomb);
    //
    //    var moveDrop = new cc.MoveBy(const_dropTime,0,-cc.winSize.height-size_bomb.height);
    //    sp_bomb.runAction(cc.sequence(moveDrop,cc.callFunc(function(){
    //        sp_bomb.removeFromParent(true);
    //    },self)));
    //},

    //切中炸弹
    cutBomb:function(){
        var self = this;
        var sp_bombBg = new cc.Sprite(res.tk_zhadan_png);
        sp_bombBg.setAnchorPoint(0,0);
        sp_bombBg.setPosition(0,0);
        self.addChild(sp_bombBg,1);
        var size_bg = sp_bombBg.getContentSize();

        var sp_againNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        var sp_againSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        sp_againSelected.setOpacity(150);
        var sp_againDisabled = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        sp_againDisabled.setOpacity(150);
        var btn_again = new cc.MenuItemSprite(sp_againNormal,sp_againSelected,sp_againDisabled,self.gameAgain,self);
        btn_again.setAnchorPoint(0.5,0.5);
        btn_again.setPosition(size_bg.width*0.5,size_bg.height*0.18);

        //var sp_shareNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
        //var sp_shareSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
        //sp_shareSelected.setOpacity(150);
        //var btn_share = new cc.MenuItemSprite(sp_shareNormal,sp_shareSelected,self.share,self);
        //btn_share.setAnchorPoint(0.5,0.5);
        //btn_share.setPosition(size_bg.width*0.68,size_bg.height*0.28);
        //
        //var sp_focusNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_gz_png));
        //var sp_focusSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_gz_png));
        //sp_focusSelected.setOpacity(150);
        //var btn_focus = new cc.MenuItemSprite(sp_focusNormal,sp_focusSelected,self.focus,self);
        //btn_focus.setAnchorPoint(0.5,0.5);
        //btn_focus.setPosition(size_bg.width*0.5,size_bg.height*0.1);

        var menu = new cc.Menu(btn_again);
        menu.setPosition(0,0);

        sp_bombBg.addChild(menu);
    },

    cutRedBag:function(RMB){
        var sp_zj = new cc.Sprite(res.tk_zj_png);
        sp_zj.setAnchorPoint(0,0);
        sp_zj.setAnchorPoint(0,0);
        this.addChild(sp_zj,2);
        var size_bg = sp_zj.getContentSize();

        var lbl_RMB1 = new cc.LabelTTF(RMB+"","Arial",100);
        lbl_RMB1.setColor(cc.color(255,252,0,255));
        lbl_RMB1.setAnchorPoint(0,0.5);
        lbl_RMB1.setPosition(size_bg.width*0.465,size_bg.height*0.51);
        sp_zj.addChild(lbl_RMB1);

        var lbl_RMB2 = new cc.LabelTTF(RMB+"","Arial",30);
        lbl_RMB2.setColor(cc.color(255,252,0,255));
        lbl_RMB2.setAnchorPoint(0.5,0.5);
        lbl_RMB2.setPosition(size_bg.width*0.265,size_bg.height*0.412);
        sp_zj.addChild(lbl_RMB2);

        var sp_goOnNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_goOn_png));
        var sp_goOnSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_goOn_png));
        sp_goOnSelected.setOpacity(150);
        var btn_goOn = new cc.MenuItemSprite(sp_goOnNormal,sp_goOnSelected,function(){
            sp_zj.removeFromParent(true);
            cc.director.resume();
            this.addTouch();
        },this);
        btn_goOn.setAnchorPoint(0.5,0.5);
        btn_goOn.setPosition(size_bg.width*0.5,size_bg.height*0.22);

        var menu = new cc.Menu(btn_goOn);
        menu.setPosition(0,0);
        sp_zj.addChild(menu);
    },

    //再来一次
    gameAgain:function(pSender)
    {
        pSender.setEnabled(false);
        cc.director.runScene(new MyScene());
        //g_againGame(function(){
        //});
    },

    // 兑奖
    getAward:function(pSender)
    {
        alert('Award');
    },

    getShare:function(pSender)
    {
        $('.sharetips').fadeIn();
        $('.sharetips').on('click', function() {
            $(this).fadeOut()
        });
    },

    //分享
    share:function(pSender){
        var menu = new cc.Menu();
        menu.setPosition(0,0);
        var btn_guide = new cc.MenuItemImage(res.guide_png,res.guide_png,function(){
            menu.removeFromParent(true);
        },this);
        btn_guide.setAnchorPoint(0,0);
        btn_guide.setPosition(0,0);
        menu.addChild(btn_guide);
        this.addChild(menu,10);
    },

    //关注
    focus:function(pSender){

        //太平鸟男装旗舰店
        var a="http://mp.weixin.qq.com/s?__biz=MjM5NzI3ODI0Mg==&mid=206976990&idx=1&sn=0042244a3db085295298616f496951d1#rd";
//太平鸟官方旗舰店
        var b="http://mp.weixin.qq.com/s?__biz=MzAwMDE2MDE1Nw==&mid=205759791&idx=1&sn=1ae175a008c6518044602db71aec79ed#rd";
//乐町旗舰店
        var c="http://mp.weixin.qq.com/s?__biz=MzA3NzY4NzAxMw==&mid=214356007&idx=1&sn=ae234859f264e4813cd9f6c0e01d4dfd#rd";
//MG旗舰店
        var d="http://mp.weixin.qq.com/s?__biz=MjM5OTIwODk4Mw==&mid=208988548&idx=1&sn=962eca671bfe875b4acbd00863fa1845#rd";
//Minipeace旗舰店
        var e="http://mp.weixin.qq.com/s?__biz=MzAwODQxMjMxMg==&mid=205452580&idx=1&sn=46f6df7614ea39b64e9d2e112e9c4a20#rd";

        if(stateID=="A"){
            window.location.href = a;
        }else if(stateID=="B"){
            window.location.href = b;
        }else if(stateID=="C"){
            window.location.href = c;
        }else if(stateID=="D"){
            window.location.href = d;
        }else if(stateID=="E"){
            window.location.href = e;
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
        self.m_bg.addChild(sp_slideTrack,10);

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

    //游戏结束后
    gameOver:function(){
        cc.eventManager.removeListener(this.m_listener);        //移除触摸监听
        this.unscheduleUpdate();                                    //停止每帧定时器
        this.unschedule(this.m_createBomb);                     //停止创建炸弹定时器
        this.unschedule(this.m_createDrop);                     //停止创建吊牌定时器
        this.unschedule(this.MyUpdate);                     //停止创建吊牌定时器
        if(this.m_createRedBag) {
            this.unschedule(this.m_createRedBag);                     //停止创建红包定时器
        }
        this.unschedule(this.cutTime);                              //停止倒计时定时器
//                        self.unscheduleAllCallbacks();
        this.m_bombLayer.removeFromParent(true);
        this.m_dropLayer.removeFromParent(true);
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

            var sp_drop = b.GetUserData();
            if(sp_drop) {
  //              var sp_drop = b.GetUserData();
                var size_drop = sp_drop.getContentSize();
                var pos_drop = sp_drop.getPosition();

                var shape = b.GetFixtureList().GetShape();
                var trans = new MyB2Transform;
                trans.SetIdentity();

                var pos2 = new b2Vec2(pos.x / PTM_RATIO, pos.y / PTM_RATIO);
                var tran_pos = b.GetLocalPoint(pos2);
                var body_pos = b.GetPosition();
                //var tran_pos = new b2Vec2(pos.x / PTM_RATIO - body_pos.x, pos.y / PTM_RATIO - body_pos.y);
                var hit = shape.TestPoint(trans, tran_pos);
                if (hit) {
                    var tag = sp_drop.getTag();
                    if(tag  < const_bombTag) {
                        cc.audioEngine.playEffect(res.qie_mp3)
                        //self.playCutDropEffect()
                        //加分
                        self.addScore();

                        sp_drop.removeFromParent(true);
                        self.m_world.DestroyBody(b);

                        // var sp_drop1 = new cc.Sprite("res/dropCard"+tag+".png");
                        // var size_drop1 = sp_drop1.getContentSize();
                        // sp_drop1.setTextureRect(cc.rect(0, 0, size_drop1.width * 0.6, size_drop1.height));
                        // sp_drop1.setAnchorPoint(0.5, 0.5);
                        // sp_drop1.setPosition(pos_drop.x - size_drop1.width*0.6*0.5, pos_drop.y);
                        // sp_drop1.setRotation(-90);

                        // var sp_drop2 = new cc.Sprite("res/dropCard"+tag+".png");
                        // sp_drop2.setTextureRect(cc.rect(size_drop1.width *0.6, 0, size_drop1.width *0.4, size_drop1.height));
                        // sp_drop2.setAnchorPoint(0.5, 0.5);
                        // sp_drop2.setPosition(pos_drop.x + size_drop1.width * 0.4*0.5, pos_drop.y);
                        // sp_drop2.setRotation(-90);

                        // self.addChild(sp_drop1, 1);
                        // self.addChild(sp_drop2, 1);

                        console.log('fuck');

                        // var rota1 = new cc.RotateBy(0.5, -360);
                        // var rota2 = new cc.RotateBy(0.5, 360);
                        // var move1 = new cc.MoveBy(0.5, -100, -300);
                        // var move2 = new cc.MoveBy(0.5, 100, -300);
                        // sp_drop1.runAction(cc.sequence(cc.spawn(rota1, move1), cc.callFunc(function () {
                        //     this.removeFromParent(true);
                        // }, sp_drop1)));

                        // sp_drop2.runAction(cc.sequence(cc.spawn(rota2, move2), cc.callFunc(function () {
                        //     this.removeFromParent(true);
                        // }, sp_drop2)));
                        
                        var sp_blossom = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("blossom1.png"));
                        sp_blossom.setScale(1.5);
                        sp_blossom.setAnchorPoint(0.5,0.5);
                        sp_blossom.setPosition(pos_drop);
                        self.m_bg.addChild(sp_blossom);

                        //花瓣效果
                        var arr_frame = [];
                        for(var i = 1;i < 5;i++)
                        {
                            var frame = cc.spriteFrameCache.getSpriteFrame("blossom"+i+".png");
                            arr_frame.push(frame);
                        }
                        var an = cc.Animation.create(arr_frame,0.3,1);
                        sp_blossom.runAction(cc.sequence(new cc.animate(an),cc.callFunc(function(){
                            sp_blossom.removeFromParent(true);
                            // self.cutBomb();
                        },self)))

                    }
                    else if(tag  == const_bombTag)
                    {
                        cc.audioEngine.playEffect(res.yanhua_mp3);
                        self.playCutBombEffect();
                        //切中炸弹
                        self.gameOver();

                        var node =  self.m_world.GetBodyList();
                        while(node)
                        {
                            b = node;
                            node = node.GetNext();
                            self.m_world.DestroyBody(b);
                        }
 //                       self.m_world.Destroy()
                        var sp_explorer = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("explosion1.png"));
                        sp_explorer.setScale(1.2);
                        sp_explorer.setAnchorPoint(0.5,0.5);
                        sp_explorer.setPosition(pos_drop);
                        self.m_bg.addChild(sp_explorer);

                        //爆炸效果
                        var arr_frame = [];
                        for(var i = 1;i < 5;i++)
                        {
                            var frame = cc.spriteFrameCache.getSpriteFrame("explosion"+i+".png");
                            arr_frame.push(frame);
                        }
                        var an = cc.Animation.create(arr_frame,0.3,1);
                        sp_explorer.runAction(cc.sequence(new cc.animate(an),cc.callFunc(function(){
                            sp_explorer.removeFromParent(true);
                            self.cutBomb();
                        },self)))
                    }
                    else{
                        sp_drop.removeFromParent(true);
                        self.m_world.DestroyBody(b);

                        var sp_drop1 = new cc.Sprite(res.redBag_png);
                        var size_drop1 = sp_drop1.getContentSize();
                        sp_drop1.setTextureRect(cc.rect(0, 0, size_drop1.width * 0.5, size_drop1.height));
                        sp_drop1.setAnchorPoint(0.5, 0.5);
                        sp_drop1.setPosition(pos_drop.x - size_drop1.width *0.5*0.5, pos_drop.y);
                        sp_drop1.setRotation(-90);

                        //                       var sp_drop2 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("res/dropCard"+tag+".png"));
                        var sp_drop2 = new cc.Sprite(res.redBag_png);
                        sp_drop2.setTextureRect(cc.rect(size_drop1.width *0.5, 0, size_drop1.width *0.5, size_drop1.height));
                        sp_drop2.setAnchorPoint(0.5, 0.5);
                        sp_drop2.setPosition(pos_drop.x + size_drop1.width *0.5*0.5, pos_drop.y);
                        sp_drop2.setRotation(-90);
                        self.addChild(sp_drop1, 1);
                        self.addChild(sp_drop2, 1);

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

                        var RMB = tag - 100;
                        if(RMB > 0) {
                            cc.director.pause();
                            cc.eventManager.removeListener(self.m_listener);
                            self.m_isGetAward = true;
                            self.cutRedBag(RMB);
                            //g_updateRedBag(function(){
                            //    if(g_redBagIndex != 0)
                            //    {
                            //        if(g_redBagIndex == 1)
                            //        {
                            //            RMB = 50;
                            //        }
                            //        else
                            //        {
                            //            RMB = 5;
                            //        }
                            //        self.cutRedBag(RMB);
                            //    }
                            //    else
                            //    {
                            //        cc.director.resume();
                            //        self.addTouch();
                            //    }
                            //});
                        }
                    }
                }
            }
        }
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

                    self.touchBody(pos);

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
                        //cc.audioEngine.playEffect(res.qie_mp3);
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
                self.touchBody(pos);
                //for(var i = 0;i < self.m_dropLayer.getChildrenCount(); i++)
                //{
                //    var sp_drop = self.m_dropLayer.getChildren()[i];
                //    var rect_drop = sp_drop.getBoundingBox();
                //    if(cc.rectContainsPoint(rect_drop,pos))
                //    {
                //        sp_drop.removeFromParent(true);
                //        var sp_drop1 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.dropCard_png))
                //        sp_drop1.setAnchorPoint(0.5,0);
                //        sp_drop1.setPosition(rect_drop.x+rect_drop.width/2,rect_drop.y+rect_drop.height/2);
                //        var size_drop1 = sp_drop1.getContentSize();
                //        sp_drop1.setTextureRect(cc.rect(0,0,size_drop1.width,size_drop1.height/2));
                //        self.m_bg.addChild(sp_drop1);
                //        var moveUp = new cc.MoveBy(0.2,0,cc.winSize.height*0.1);
                //        sp_drop1.runAction(cc.sequence(moveUp,cc.callFunc(function(){
                //            sp_drop1.removeFromParent(true);
                //        },self)));
                //
                //        var sp_drop2 = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.dropCard_png))
                //        sp_drop2.setAnchorPoint(0.5,1);
                //        sp_drop2.setPosition(rect_drop.x+rect_drop.width/2,rect_drop.y+rect_drop.height/2);
                //        var size_drop2 = sp_drop2.getContentSize();
                //        sp_drop2.setTextureRect(cc.rect(0,size_drop2.height/2,size_drop2.width,size_drop2.height/2));
                //        self.m_bg.addChild(sp_drop2);
                //        var moveDown = new cc.MoveBy(0.2,0,-cc.winSize.height*0.1);
                //        sp_drop2.runAction(cc.sequence(moveDown,cc.callFunc(function(){
                //            sp_drop2.removeFromParent(true);
                //        },self)));
                //    }
                //}
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
                alert("Canceled");
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