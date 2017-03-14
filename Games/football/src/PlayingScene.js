/**
 * Created by Administrator on 2015/6/10.
 */

var const_length = 60;
var const_dis1 = 10;
var const_dis2 = 45;
var const_sanJiaoLength = 40;
var const_length2 = 150;

var const_lightDis = 7;                     //灯的间隔像素
var const_gold = 1000;
var const_playerDisTime = 0.4;              //球员动作间隔时间
var const_footballTime = 0.5;               //足球运动时间
var const_totalCount = 10;

var PlayingLayer = cc.Layer.extend({
    m_bg:null,
    m_layerUpdate:null,
    m_drawNode:null,
    m_listener:null,
    m_rectFoot:null,
    m_point0:null,
    m_point1:null,
    m_point2:null,
    m_arrayAct:[],
    m_btnPreLight:null,
    m_lblGold:null,
    m_curGold:const_gold,
    m_curCount:const_totalCount,
    m_keeper:null,              //守门员
    m_shooter:null,             //射手
    m_football:null,            //足球
    m_chooseIndex:0,
    m_arrayGold:[100,200,500,1000],
    m_layerPlayer:null,
    m_layerPlayer2:null,
    ctor:function(){
        this._super();
        this.initUI();
    },

    initUI:function(){
        var sp_bg = this.m_bg = new cc.Sprite(res.bg_playing_jpg);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        this.addChild(sp_bg,0);
        var size_bg = sp_bg.getContentSize();

        //顶部增加金币背景
        var sp_topBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.topGoldBg_png));
        sp_topBg.setAnchorPoint(0.5,1);
        sp_topBg.setPosition(size_bg.width*0.5,size_bg.height);
        sp_bg.addChild(sp_topBg,10);
        var size_topBg = sp_topBg.getContentSize();

        var sp_addS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_addGold_png));
        var sp_addN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_addGold_png));
        sp_addN.setOpacity(150);
        var btn_add = new cc.MenuItemSprite(sp_addS,sp_addN,this.addGold,this);
        btn_add.setAnchorPoint(0.5,1);
        btn_add.setPosition(size_topBg.width*0.67,size_topBg.height);

        var lbl_gold = this.m_lblGold = new cc.LabelTTF(this.m_curGold+"","Arial",40);
        lbl_gold.setColor(cc.color(0,0,0,255))
        lbl_gold.setAnchorPoint(0.5,0.5);
        lbl_gold.setPosition(size_topBg.width*0.5,size_topBg.height*0.5);
        sp_topBg.addChild(lbl_gold);

        var menu_top = new cc.Menu(btn_add);
        menu_top.setPosition(0,0);
        sp_topBg.addChild(menu_top);

        //底部赌注背景
        var sp_bottomBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.bottomBg_png));
        sp_bottomBg.setAnchorPoint(0.5,0);
        sp_bottomBg.setPosition(size_bg.width*0.5,0);
        sp_bg.addChild(sp_bottomBg,10);
        var size_bottomBg = sp_bottomBg.getContentSize();

        var menu_bottom = new cc.Menu();
        menu_bottom.setPosition(0,0);
        sp_bottomBg.addChild(menu_bottom);

        for(var i = 1;i < 6 ;i++)
        {
            var sp_lightN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("light"+i+"_1.png"));
            var sp_lightS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("light"+i+"_2.png"));
            var sp_lightD = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("light"+i+"_2.png"));

            var btn_light = new cc.MenuItemSprite(sp_lightN,sp_lightS,sp_lightD,this.light,this);
            btn_light.setAnchorPoint(0.5,0.5);

            btn_light.setTag(i);

            var leftDis = (size_bottomBg.width - 5 * btn_light.getContentSize().width - 4 * const_lightDis)*0.5;
            btn_light.setPosition(leftDis + btn_light.getContentSize().width*0.5+ (i-1)*(btn_light.getContentSize().width + const_lightDis),size_bottomBg.height*0.5);
            menu_bottom.addChild(btn_light);

            if(i == 1)
            {
                this.m_btnPreLight = btn_light;
                btn_light.setEnabled(false);
                this.m_chooseIndex = 1;
            }
        }

        //球门
        var sp_footballDoor = new cc.Sprite(res.footballDoor_png);
        sp_footballDoor.setAnchorPoint(0.5,0.5);
        sp_footballDoor.setPosition(size_bg.width*0.52,size_bg.height*0.75);
        sp_bg.addChild(sp_footballDoor);
        var size_foot = sp_footballDoor.getContentSize();
        var pos_foot = sp_footballDoor.getPosition();
        this.m_rectFoot = cc.rect(pos_foot.x - size_foot.width*0.5,pos_foot.y - size_foot.height*0.5,size_foot.width*0.95,size_foot.height);

        this.m_point0 = cc.p(cc.winSize.width*0.5,cc.winSize.height*0.3);
        this.m_point1 = cc.p(cc.winSize.width*0.5 - const_dis2,cc.winSize.height*0.3);
        this.m_point2 = cc.p(cc.winSize.width*0.5 + const_dis2,cc.winSize.height*0.3);

        //      var lbl_foot = new cc.LabelTTF("射门","Arial",50);
        var sp_footN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_shoot_png));
        var sp_footS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_shoot_2_png));
        var btn_foot = new cc.MenuItemSprite(sp_footN,sp_footS,this.shoot,this);
        btn_foot.setAnchorPoint(0.5,0.5);
        btn_foot.setPosition(size_bg.width*0.85,size_bg.height*0.22);
        var menu = new cc.Menu(btn_foot);
        menu.setPosition(0,0);
        sp_bg.addChild(menu);


//        var sp_point_3 = new cc.Sprite(res.point_3_png);
//        sp_point_3.setAnchorPoint(0.5,0);
//        sp_point_3.setPosition(size_bg.width*0.5,size_bg.height*0.1);
//        sp_bg.addChild(sp_point_3);
//
//        var skewX = 0;
//        var const_maxSkewX = 30;
//        window.setInterval(function(){
//            skewX++;
//            if(skewX >=const_maxSkewX)
//            {
//                skewX = -const_maxSkewX;
//            }
//            sp_point_3.setSkewX(skewX);
//
//        },50);
//
//        var sp_point_2 = new cc.Sprite(res.point_2_png);
//        sp_point_2.setAnchorPoint(0.5,1);
//        sp_point_2.setPosition(size_bg.width*0.5,size_bg.height*0.75);
//        sp_bg.addChild(sp_point_2);



//        var layerColor = new cc.LayerColor(cc.color(255,255,0,255),cc.winSize.width,cc.winSize.height);
//        layerColor.setPosition(0,0);
//
//        var clipper = new cc.ClippingNode();
//        clipper.inverted = false;
//        clipper.setAlphaThreshold(1);
//        clipper.width = cc.winSize.width;
//        clipper.height = cc.winSize.height;
//        clipper.setAnchorPoint(0,0);
//        clipper.setPosition(0,0);
//        sp_bg.addChild(clipper);
//
//        clipper.stencil = drawNode;
//        clipper.addChild(layerColor);

        this.initPlayer();

        //添加画Node
        var drawNode  = this.m_drawNode = new cc.DrawNode();
        drawNode.setPosition(0,0);
        sp_bg.addChild(drawNode,3);
        this.drawBezier(this.m_drawNode,cc.p(this.m_rectFoot.x + const_sanJiaoLength * 0.5,this.m_rectFoot.y + this.m_rectFoot.height *0.8));

        this.addTouch();
        //  drawNode.drawSegment(cc.p(0, 0), cc.p(cc.winSize.width, cc.winSize.height), 1, cc.color(255, 0, 0, 255));
        //    draw.drawQuadBezier(cc.p(0, winSize.height), cc.p(centerPos.x, centerPos.y), cc.p(winSize.width, winSize.height), 50, 2, cc.color(255, 0, 255, 255));
////
//        var menu = new cc.Menu();
//        menu.setPosition(0,0);
//        sp_bg.addChild(menu,0);
//
//        //摇一摇按钮
//        var sp_shakeN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_shake_png));
//        var sp_shakeS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_shake_png));
//        sp_shakeS.setOpacity(150);
//        var btn_shake = new cc.MenuItemSprite(sp_shakeN,sp_shakeS,this.start,this);
//        btn_shake.setAnchorPoint(0.5,0.5);
//        btn_shake.setPosition(size_bg.width*0.5,size_bg.height*0.45);
//        menu.addChild(btn_shake);
//
//        //我的奖品按钮
//        var sp_awardN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_award_png));
//        var sp_awardS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_award_png));
//        sp_awardS.setOpacity(150);
//        var btn_award = new cc.MenuItemSprite(sp_awardN,sp_awardS,this.award,this);
//        btn_award.setAnchorPoint(0.5,0.5);
//        btn_award.setPosition(size_bg.width*0.2,size_bg.height*0.08);
//        menu.addChild(btn_award);
//
//        //游戏规则按钮
//        var sp_ruleN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
//        var sp_ruleS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
//        sp_ruleS.setOpacity(150);
//        var btn_rule = new cc.MenuItemSprite(sp_ruleN,sp_ruleS,this.rule,this);
//        btn_rule.setAnchorPoint(0.5,0.5);
//        btn_rule.setPosition(size_bg.width*0.8,size_bg.height*0.08);
//        menu.addChild(btn_rule);
        //   this.addLayerUpdate();


    },

    initPlayer:function(){
        var size_bg = this.m_bg.getContentSize();
        var layer_player = this.m_layerPlayer =new cc.Layer();
        layer_player.setPosition(0,0);
        this.m_bg.addChild(layer_player,2);

        //守门员
        var sp_keeper = this.m_keeper = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("keeper_1.png"));
        sp_keeper.setAnchorPoint(0.5,0);
        sp_keeper.setPosition(size_bg.width*0.5,size_bg.height*0.61);
        layer_player.addChild(sp_keeper,1);

        var frame_keepers = [cc.spriteFrameCache.getSpriteFrame("keeper_1.png"),cc.spriteFrameCache.getSpriteFrame("keeper_2.png"),cc.spriteFrameCache.getSpriteFrame("keeper_3.png")];
        var ani_keepers = new cc.Animation(frame_keepers);
        ani_keepers.setDelayPerUnit(const_playerDisTime);
        sp_keeper.runAction(new cc.Animate(ani_keepers).repeatForever());

        //挡球员
        for(var i = 1;i < 4;i++)
        {
            var sp_player = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("QY"+i+"_1.png"));
            sp_player.setAnchorPoint(0.5,0);
            sp_player.setPosition(size_bg.width*0.45 + (i - 1) * sp_keeper.getContentSize().width * 1.12,size_bg.height*0.45);
            layer_player.addChild(sp_player,3);
            sp_player.setTag(i);

            sp_player.scheduleOnce(function(){
                var tag = this.getTag();
                var frame_player = [cc.spriteFrameCache.getSpriteFrame("QY"+tag+"_1.png"),cc.spriteFrameCache.getSpriteFrame("QY"+tag+"_2.png"),cc.spriteFrameCache.getSpriteFrame("QY"+tag+"_3.png")];
                var ani_player = new cc.Animation(frame_player);
                ani_player.setDelayPerUnit(const_playerDisTime);
                this.runAction(new cc.Animate(ani_player).repeatForever());
            },Math.random()*0.5)
        }

        var layer_player2 = this.m_layerPlayer2 =new cc.Layer();
        layer_player2.setPosition(0,0);
        this.m_bg.addChild(layer_player2,4);

        var sp_football = this.m_football = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.football_png));
        sp_football.setAnchorPoint(0.5,0.5);
        sp_football.setPosition(this.m_point0);
        layer_player2.addChild(sp_football,5);

        //射门员
        var sp_shooter = this.m_shooter = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("player_1.png"));
        sp_shooter.setAnchorPoint(0.5,0.5);
        sp_shooter.setPosition(size_bg.width*0.2,size_bg.height*0.2);
        layer_player2.addChild(sp_shooter,6);

        this.shooterAnc();
    },

    shooterAnc:function(){
        var frame_shooter = [cc.spriteFrameCache.getSpriteFrame("player_1.png"),cc.spriteFrameCache.getSpriteFrame("player_2.png"),cc.spriteFrameCache.getSpriteFrame("player_3.png")];
        var ani_shooter = new cc.Animation(frame_shooter);
        ani_shooter.setDelayPerUnit(const_playerDisTime);
        this.m_shooter.runAction(new cc.Animate(ani_shooter).repeatForever());
    },


    //守门员动作
    keeper:function(pos){
        var prePos = pos;
        var self = this;
        var rectFoot = this.m_rectFoot;
        var radio1 = 0.2;
        var radio2 = 0.6;
        var radio3 = 0.15;
        var rect_1 = cc.rect(rectFoot.x + rectFoot.width*radio1,rectFoot.y,rectFoot.width*(1 - radio1 * 2),rectFoot.height*radio2);

        var rect_2 = cc.rect(rectFoot.x,rectFoot.y,rectFoot.width*radio1,rectFoot.height*radio3);
        var rect_2_1 = cc.rect(rectFoot.x,rectFoot.y + rectFoot.height *radio3,rectFoot.width*radio1,rectFoot.height*(radio2 - radio3));

        var rect_3 = cc.rect(rectFoot.x +  rectFoot.width*(1 - radio1),rectFoot.y,rectFoot.width*radio1,rectFoot.height*radio3);
        var rect_3_1 = cc.rect(rectFoot.x +  rectFoot.width*(1 - radio1),rectFoot.y + rectFoot.height *radio3,rectFoot.width*radio1,rectFoot.height*(radio2 - radio3));

        var rect_4 = cc.rect(rectFoot.x,rectFoot.y + rectFoot.height*radio2,rectFoot.width*0.5,rectFoot.height*(1 - radio2));
        var rect_5 = cc.rect(rectFoot.x + rectFoot.width*0.5,rectFoot.y + rectFoot.height*radio2,rectFoot.width*0.5,rectFoot.height*(1 - radio2));

//        var draw_node = new cc.DrawNode();
//        this.addChild(draw_node,100);
//        draw_node.drawRect(cc.p(rect_1.x,rect_1.y), cc.p(rect_1.x + rect_1.width,rect_1.y+rect_1.height), cc.color(255,0,0,100), 2, cc.color(255,0,255,255));
//        draw_node.drawRect(cc.p(rect_2.x,rect_2.y), cc.p(rect_2.x + rect_2.width,rect_2.y+rect_2.height), cc.color(0,255,0,100), 2, cc.color(255,0,255,255));
//        draw_node.drawRect(cc.p(rect_3.x,rect_3.y), cc.p(rect_3.x + rect_3.width,rect_3.y+rect_3.height), cc.color(0,0,255,100), 2, cc.color(255,0,255,255));
//        draw_node.drawRect(cc.p(rect_4.x,rect_4.y), cc.p(rect_4.x + rect_4.width,rect_4.y+rect_4.height), cc.color(255,255,0,100), 2, cc.color(255,0,255,255));
//        draw_node.drawRect(cc.p(rect_5.x,rect_5.y), cc.p(rect_5.x + rect_5.width,rect_5.y+rect_5.height), cc.color(255,0,255,100), 2, cc.color(255,0,255,255));
//
//        draw_node.drawRect(cc.p(rect_2_1.x,rect_2_1.y), cc.p(rect_2_1.x + rect_2_1.width,rect_2_1.y+rect_2_1.height), cc.color(0,255,255,100), 2, cc.color(255,0,255,255));
//        draw_node.drawRect(cc.p(rect_3_1.x,rect_3_1.y), cc.p(rect_3_1.x + rect_3_1.width,rect_3_1.y+rect_3_1.height), cc.color(255,255,255,100), 2, cc.color(255,0,255,255));
        var pos_keeper = this.m_keeper.getPosition();
        this.m_keeper.stopAllActions();

        var isSuccess = false;
        if(Math.random() < 0.4)
        {
            isSuccess = true;
            //球射入门中
            var randomX = Math.random() *  this.m_rectFoot.width * radio1;
            var randomY = Math.random() *  this.m_rectFoot.height + this.m_rectFoot.y;
            if(pos.x <= this.m_rectFoot.x + this.m_rectFoot.width*0.5)
            {
                randomX += this.m_rectFoot.x + this.m_rectFoot.width * (1 - radio1);
            }
            else
            {
                randomX += this.m_rectFoot.x
            }

            pos = cc.p(randomX,randomY);
        }

        //根据是否成功改变金币
        var myChangeGold = function(){
            var gold = self.m_curGold;
            if(self.m_chooseIndex <= self.m_arrayGold.length)
            {
                gold = self.m_arrayGold[self.m_chooseIndex - 1];
            }

            if(isSuccess)
            {
                cc.audioEngine.playEffect(res.effect_cheer_mp3);
                self.changeGold(gold);
            }
            else
            {
                cc.audioEngine.playEffect(res.effect_xu_mp3);
                self.changeGold(-gold);
            }

            self.result();
        };

//        var keeperAnc1 = function(){
//
//            var anchor = self.m_keeper.getAnchorPoint();
//
//            };

        setTimeout(function(){
       //     var const_footballTime = const_footballTime * 0.5;
            var footballTime = const_footballTime * 0.4;
            if(cc.rectContainsPoint(rect_1,pos))
            {
                //投射在中间已下
                var moveBy = new cc.MoveBy(footballTime,pos.x - pos_keeper.x,0);

                var frame_keepers = [cc.spriteFrameCache.getSpriteFrame("keeperAct_1.png"),cc.spriteFrameCache.getSpriteFrame("keeperAct_2.png")];
                var ani_keepers = new cc.Animation(frame_keepers);
                ani_keepers.setDelayPerUnit(footballTime/frame_keepers.length);
                var animate = new cc.Animate(ani_keepers);

                self.m_keeper.runAction(cc.sequence(cc.spawn(moveBy,animate),cc.callFunc(function(){
                    myChangeGold();

                    isSuccess = true;
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }
            else if(cc.rectContainsPoint(rect_4,pos))
            {
                //投射在左上角
                var size_keeper = self.m_keeper.getContentSize();
                self.m_keeper.setAnchorPoint(0,0.85);
                self.m_keeper.setPosition(pos_keeper.x - size_keeper.width *0.5,pos_keeper.y + size_keeper.height*0.85);

                var moveTo = new cc.MoveTo(footballTime,pos);
                var frame_keepers = [cc.spriteFrameCache.getSpriteFrame("keeperAct_3.png"),cc.spriteFrameCache.getSpriteFrame("keeperAct_4.png")];
                var ani_keepers = new cc.Animation(frame_keepers);
                ani_keepers.setDelayPerUnit(footballTime/frame_keepers.length);
                var animate = new cc.Animate(ani_keepers);

                self.m_keeper.runAction(cc.sequence(cc.spawn(moveTo,animate),cc.callFunc(function(){
                    myChangeGold();
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }
            else if(cc.rectContainsPoint(rect_5,pos)){
                //投射在右上角
                var size_keeper = self.m_keeper.getContentSize();
                self.m_keeper.setScaleX(-1);
                self.m_keeper.setAnchorPoint(0,0.85);
                self.m_keeper.setPosition(pos_keeper.x + size_keeper.width *0.5,pos_keeper.y + size_keeper.height*0.85);

                var moveTo = new cc.MoveTo(footballTime,pos);
                var frame_keepers = [cc.spriteFrameCache.getSpriteFrame("keeperAct_3.png"),cc.spriteFrameCache.getSpriteFrame("keeperAct_4.png")];
                var ani_keepers = new cc.Animation(frame_keepers);
                ani_keepers.setDelayPerUnit(footballTime/frame_keepers.length);
                var animate = new cc.Animate(ani_keepers);

                self.m_keeper.runAction(cc.sequence(cc.spawn(moveTo,animate),cc.callFunc(function(){
                    myChangeGold();
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }

            else if(cc.rectContainsPoint(rect_2,pos))
            {
                //投射在左下角
                var size_keeper = self.m_keeper.getContentSize();
                //    self.m_keeper.setScaleX(-1);
                self.m_keeper.setAnchorPoint(0,0.85);

                var pos0 = cc.p(pos_keeper.x - size_keeper.width *0.5,pos_keeper.y + size_keeper.height*0.85);
                self.m_keeper.setPosition(pos0);

                var i = 3;
                self.m_keeper.schedule(function(){
                    this.initWithSpriteFrameName("keeperAct_"+i+".png");

                    if(i < 5) {
                        this.setAnchorPoint(0, 0.85);
                    }
                    else if(i == 5)
                    {
                        this.setAnchorPoint(0,0.7);
                    }
                    else if(i == 6)
                    {
                        this.setAnchorPoint(0,0.5);
                    }
                    else
                    {
                        this.setAnchorPoint(0.1,0.15);
                    }
                    i++
                },footballTime/7,6,footballTime/7);


                var moveTo = new cc.MoveTo(footballTime,pos);
//            var arrPos = [cc.p(pos.x,pos0.y),pos,pos]
//            var bezierTo = new cc.BezierTo(footballTime,arrPos);
                self.m_keeper.runAction(cc.sequence(moveTo,cc.callFunc(function(){
                    myChangeGold();
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }
            else if(cc.rectContainsPoint(rect_3,pos))
            {
                //投射在右下角
                var size_keeper = self.m_keeper.getContentSize();
                self.m_keeper.setScaleX(-1);
                self.m_keeper.setAnchorPoint(0,0.85);
                var pos0 = cc.p(pos_keeper.x + size_keeper.width *0.5,pos_keeper.y + size_keeper.height*0.85);
                self.m_keeper.setPosition(pos0);

                var i = 3;
                self.m_keeper.schedule(function(){
                    this.initWithSpriteFrameName("keeperAct_"+i+".png");

                    if(i < 5) {
                        this.setAnchorPoint(0, 0.85);
                    }
                    else if(i == 5)
                    {
                        this.setAnchorPoint(0,0.7);
                    }
                    else if(i == 6)
                    {
                        this.setAnchorPoint(0,0.5);
                    }
                    else
                    {
                        this.setAnchorPoint(0.1,0.15);
                    }
                    i++
                },footballTime/7,6,footballTime/7);

                var moveTo = new cc.MoveTo(footballTime,pos);
      //          var moveBy2 = new cc.MoveBy(0.2,40,0);
                self.m_keeper.runAction(cc.sequence(moveTo,cc.callFunc(function(){
                    myChangeGold();
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }
            else if(cc.rectContainsPoint(rect_2_1,pos))
            {
                //投射在左中
                var size_keeper = self.m_keeper.getContentSize();
                //    self.m_keeper.setScaleX(-1);
                self.m_keeper.setAnchorPoint(0,0.85);
                self.m_keeper.setPosition(pos_keeper.x - size_keeper.width *0.5,pos_keeper.y + size_keeper.height*0.85);

                var i = 3;
                self.m_keeper.schedule(function(){
                    this.initWithSpriteFrameName("keeperAct_"+i+".png");
                    if(i < 5) {
                        this.setAnchorPoint(0, 0.85);
                    }
                    else {
                        this.setAnchorPoint(0, 0.7);
                    }
                    i++
                },footballTime/3,2,footballTime/3);

                var moveTo = new cc.MoveTo(footballTime,pos);
                self.m_keeper.runAction(cc.sequence(moveTo,cc.callFunc(function(){
                    myChangeGold();
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }
            else if(cc.rectContainsPoint(rect_3_1,pos))
            {
                //投射在左中
                var size_keeper = self.m_keeper.getContentSize();
                self.m_keeper.setScaleX(-1);
                self.m_keeper.setAnchorPoint(0,0.85);
                self.m_keeper.setPosition(pos_keeper.x + size_keeper.width *0.5,pos_keeper.y + size_keeper.height*0.85);

                var i = 3;
                self.m_keeper.schedule(function(){
                    this.initWithSpriteFrameName("keeperAct_"+i+".png");

                    if(i < 5) {
                        this.setAnchorPoint(0, 0.85);
                    }
                    else
                    {
                        this.setAnchorPoint(0,0.7);
                    }
                    i++
                },footballTime/3,2,footballTime/3);

                var moveTo = new cc.MoveTo(footballTime,pos);
                self.m_keeper.runAction(cc.sequence(moveTo,cc.callFunc(function(){
                    myChangeGold();
                    self.footballDrop(isSuccess,prePos);
                },self)));
            }
        },const_footballTime*600)
    },

    //足球落地效果
    footballDrop:function(isSuccess,pos){
        if(isSuccess)
        {
            //射球成功
            var speed = 140;
            var Y = pos.y;
            var dis = Y - this.m_rectFoot.y;
            var moveDrop = new cc.MoveBy(dis/speed,0,-dis);
            var ease = new cc.EaseBounceOut(moveDrop);
            this.m_football.runAction(ease);


        }
        else
        {
            //射球失败
            //相对位置
            var pos0 = cc.p(this.m_rectFoot.x + this.m_rectFoot.width*0.5,this.m_rectFoot.y);
            var pos1 = cc.p(pos.x - pos0.x,pos.y - pos0.y);
            var pos2 = cc.p(pos1.x * 5,pos1.y * 5);
            var pos3 = cc.p(pos2.x + pos0.x , pos2.y + pos0.y);
            var moveTo = new cc.MoveTo(1,pos3)

            this.m_football.runAction(moveTo);
//            var speed = 140;
//            var Y = this.m_football.getPositionY();
//            var dis = Y - this.m_rectFoot.y;
//            var moveDrop = new cc.MoveBy(dis/speed,0,-dis);
//            var ease = new cc.EaseBounceOut(moveDrop);
//            this.m_football.runAction(cc.spawn(ease,moveTo));
        }

        this.scheduleOnce(function(){
            var sp_keeper = this.m_keeper;
            sp_keeper.initWithSpriteFrameName("keeper_1.png");
            sp_keeper.setAnchorPoint(0.5,0);
            sp_keeper.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.61);

            var frame_keepers = [cc.spriteFrameCache.getSpriteFrame("keeper_1.png"),cc.spriteFrameCache.getSpriteFrame("keeper_2.png"),cc.spriteFrameCache.getSpriteFrame("keeper_3.png")];
            var ani_keepers = new cc.Animation(frame_keepers);
            ani_keepers.setDelayPerUnit(const_playerDisTime);
            sp_keeper.runAction(new cc.Animate(ani_keepers).repeatForever());
        },0.5)


    },

    //增加金币
    addGold:function(pSender){

    },

    //射门
    shoot:function(pSender){
        if(this.m_chooseIndex == 0)
        {
            alert("请选择游戏币...");
        }
        else if(this.m_arrayAct.length <= 0)
        {
            alert("请选择射门的方向...");
        }
        else if(this.m_chooseIndex <= this.m_arrayGold.length && this.m_curGold < this.m_arrayGold[this.m_chooseIndex - 1])
        {
            alert("您没有足够的金币");
        }

        //       if(this.m_arrayAct.length>0 && this.m_chooseIndex != 0){
        else{
            cc.audioEngine.playEffect(res.effect_shoot_mp3);

            this.m_curCount--;          //游戏次数减一


            var self = this;
            self.addLayerUpdate();

            var size_bg = this.m_bg.getContentSize();
            this.m_shooter.stopAllActions();
            this.m_shooter.setPosition(size_bg.width*0.4,size_bg.height*0.35);

            var frame_shooters = [cc.spriteFrameCache.getSpriteFrame("shoot_1.png"),cc.spriteFrameCache.getSpriteFrame("shoot_2.png"),cc.spriteFrameCache.getSpriteFrame("shoot_3.png"),cc.spriteFrameCache.getSpriteFrame("shoot_4.png")];
            var ani_shooters = new cc.Animation(frame_shooters);
            ani_shooters.setDelayPerUnit(0.08);
            ani_shooters.setLoops(1);
            var target = new cc.TargetedAction(this.m_shooter,new cc.Animate(ani_shooters));

            var bezier = new cc.BezierTo(const_footballTime,this.m_arrayAct);
            var ease1 = new cc.EaseCircleActionOut(bezier);
            var scale = new cc.ScaleTo(const_footballTime,0.4);
            this.m_football.runAction(cc.sequence(target,cc.callFunc(function(){
                self.shooterAnc();
                self.keeper(self.m_arrayAct[2]);
            },this.m_shooter),cc.spawn(ease1,scale),cc.callFunc(function(){
                //         self.delLayerUpdate();
                this.removeFromParent(false);
                self.m_layerPlayer.addChild(this,2);
            },this.m_football)));
        }
    },


    //改变金币
    changeGold:function(goldCount){
        var tem = this.m_curGold + goldCount;
        if(tem >= 0)
        {
            this.m_curGold = tem;
            this.m_lblGold.setString(tem + "");
        }
        else
        {
            alert("金币不足...");
        }
    },

    //结果
    result:function(){
        this.scheduleOnce(function(){
            var result_index = 1;
            if(this.m_curCount > 0)
            {
                //还有游戏次数
                if(this.m_curGold > 0)
                {
                    //还有金币
                    this.m_layerPlayer.removeFromParent(true);
                    this.m_layerPlayer2.removeFromParent(true);
                    this.initPlayer();
                    this.delLayerUpdate();
                    return;
                }
                else{
                    //没有金币
                    result_index = 1;
                }
            }
            else
            {
                //没有游戏次数
                if(this.m_curGold > const_gold)
                {
                    //赢得筹码
                    result_index = 2;
                }
                else
                {
                    //输了筹码
                    result_index = 3;
                }
            }

            this.delLayerUpdate();

            var bg_layer = new cc.LayerColor(cc.color(0,0,0,150),cc.winSize.width,cc.winSize.height);
            bg_layer.setPosition(0,0);
            this.addChild(bg_layer,10);

            var bg_normal = new cc.Sprite(res.bg_index_jpg);
            bg_normal.setOpacity(0);
            var bg_Selected = new cc.Sprite(res.bg_index_jpg);
            bg_Selected.setOpacity(0);
            var bg = new cc.MenuItemSprite(bg_normal, bg_Selected, function () {
            }, this);
            bg.setAnchorPoint(0, 0);
            bg.setPosition(0, 0);

            var menu = new cc.Menu(bg);
            menu.setPosition(0, 0);
            bg_layer.addChild(menu, 1);

            var sp_box = new cc.Sprite(res.bg_overBox_png);
            sp_box.setAnchorPoint(0.5,0.5);
            sp_box.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.65);
            bg_layer.addChild(sp_box);
            var size_box = sp_box.getContentSize();

            var sp_result = new cc.Sprite(res["T_"+result_index+"_png"]);
            sp_result.setAnchorPoint(0.5,0.5);
            sp_result.setPosition(size_box.width*0.5,size_box.height*0.5);
            sp_box.addChild(sp_result);
            var size_result = sp_result.getContentSize();

            if(result_index != 1)
            {
                var gold = 0;
                if(result_index == 2)
                {
                    gold = this.m_curGold - const_gold;
                }
                else
                {
                    gold = this.m_curGold;
                }

                var lbl_gold = new cc.LabelTTF(gold+"","Arial",30);
                lbl_gold.setAnchorPoint(0.5,0.5);
                lbl_gold.setPosition(size_result.width*0.5,size_result.height * 0.72);
                sp_result.addChild(lbl_gold);
            }

            var menu2 = new cc.Menu();
            menu2.setPosition(0,0);
            bg_layer.addChild(menu2,3);

            var sp_againN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
            var sp_againS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
            sp_againS.setOpacity(150);
            var btn_again = new cc.MenuItemSprite(sp_againN,sp_againS,this.again,this);
            btn_again.setAnchorPoint(0.5,0.5);
            btn_again.setPosition(cc.winSize.width*0.25,cc.winSize.height*0.28);
            menu2.addChild(btn_again);

            var sp_shareN = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
            var sp_shareS = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
            sp_shareS.setOpacity(150);
            var btn_share = new cc.MenuItemSprite(sp_shareN,sp_shareS,this.share,this);
            btn_share.setAnchorPoint(0.5,0.5);
            btn_share.setPosition(cc.winSize.width*0.75,cc.winSize.height*0.28);
            menu2.addChild(btn_share);
        },1);
    },

    again:function(pSender){
        cc.director.runScene(new PlayingScene());
    },

    share:function(pSender){
        var menu = new cc.Menu();
        menu.setPosition(0,0);
        this.addChild(menu,20);

        var bg_share = new cc.MenuItemImage(res.bg_share_png,res.bg_share_png,function(){
            menu.removeFromParent();
        },this);
        bg_share.setAnchorPoint(0,0);
        bg_share.setPosition(0,0);
        menu.addChild(bg_share);
    },

    light:function(pSender)
    {
        if(this.m_curGold <= 0)
        {
            alert("您没有足够的金币");
            return;
        }

        var tag = pSender.getTag();
        if(tag <= this.m_arrayGold.length)
        {
            if(this.m_curGold < this.m_arrayGold[tag - 1])
            {
                alert("您没有足够的金币");
                return;
            }
        }

        pSender.setEnabled(false);
        this.m_chooseIndex = tag;
        if(this.m_btnPreLight)
        {
            this.m_btnPreLight.setEnabled(true);
        }

        this.m_btnPreLight = pSender;
    },

    drawBezier:function(drawNode,pos) {
        //       if(pos.x > this.m_point0.x)
        {
            drawNode.clear();
            //      drawNode.drawSegment(cc.p(cc.winSize.width*0.5, cc.winSize.height*0.2), pos, 2, cc.color(255, 0, 0, 255));
            var vertes = [pos, cc.p(pos.x - const_sanJiaoLength * 0.5, pos.y - const_sanJiaoLength), cc.p(pos.x + const_sanJiaoLength * 0.5, pos.y - const_sanJiaoLength)]
            drawNode.drawPoly(vertes, cc.color(255, 255, 0, 150), 2, cc.color(255, 255, 0, 150))

            var pos_Y0 = pos.y - 1.5 * (pos.y - this.m_rectFoot.y) - const_length2;
            var newPos = cc.p(pos.x, (this.m_rectFoot.y + pos.y) * 0.5);
            var arf = Math.atan((newPos.x - this.m_point0.x) / (newPos.y - this.m_point0.y));
            var newArf = 2.5 * arf;
            var disX = const_length * Math.sin(newArf);
            var disY = const_length * Math.cos(newArf);
            var newPos2 = cc.p(this.m_point0.x + disX, this.m_point0.y + disY);

            var pos0 = this.m_point0;
            var pos1 = newPos2;
            var pos2 = cc.p(pos.x, pos_Y0);
            var pos4 = pos;
            //           drawNode.drawCubicBezier(pos0, pos1, pos2, pos4,50, 5, cc.color(0, 0, 255, 255));
            //        this.m_arrayAct[0] = pos0;
            this.m_arrayAct[0] = pos1;
            this.m_arrayAct[1] = pos2;
            this.m_arrayAct[2] = pos4;


            pos = cc.p(pos.x, pos.y - const_sanJiaoLength);
            var pos_Y = pos.y - 1.5 * (pos.y - ( this.m_rectFoot.y - const_sanJiaoLength)) - const_length2;

            var newPos_1 = cc.p(pos.x - const_dis1, (this.m_rectFoot.y - const_sanJiaoLength + pos.y) * 0.5);
            var arf_1 = Math.atan((newPos_1.x - this.m_point1.x) / (newPos_1.y - this.m_point1.y));
            var newArf_1 = 2.5 * arf_1;
            var disX_1 = const_length * Math.sin(newArf_1);
            var disY_1 = const_length * Math.cos(newArf_1);
            var newPos2_1 = cc.p(this.m_point1.x + disX_1, this.m_point1.y + disY_1);
            drawNode.drawCubicBezier(this.m_point1, newPos2_1, cc.p(pos.x - const_dis1, pos_Y), cc.p(pos.x - const_dis1, pos.y), 50, 5, cc.color(255, 255, 0, 150));

            var newPos_2 = cc.p(pos.x + const_dis1, this.m_rectFoot.y - const_sanJiaoLength);
            var arf_2 = Math.atan((newPos_2.x - this.m_point2.x) / (newPos_2.y - this.m_point2.y));
            var newArf_2 = 2.5 * arf_2;
            var disX_2 = const_length * Math.sin(newArf_2);
            var disY_2 = const_length * Math.cos(newArf_2);
            var newPos2_2 = cc.p(this.m_point2.x + disX_2, this.m_point2.y + disY_2);
            drawNode.drawCubicBezier(this.m_point2, newPos2_2, cc.p(pos.x + const_dis1, pos_Y), cc.p(pos.x + const_dis1, pos.y), 50, 5, cc.color(255, 255, 0, 150));


            drawNode.drawCubicBezier(this.m_point1, newPos2_1, newPos2_2, this.m_point2, 50, 5, cc.color(255, 255, 0, 150));


            //  drawNode.drawSegment(this.m_point1, this.m_point2, 4, cc.color(255, 0, 255, 255));
            //          drawNode.drawSegment(cc.p(pos.x - const_dis1,pos.y), cc.p(pos.x + const_dis1,pos.y), 4, cc.color(255, 0, 255, 255));
        }


    },

    addTouch:function() {
        var self = this;
        var pointPos = null;
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, target) {
                var pos = touch.getLocation();
                if (pos.x >= self.m_rectFoot.x + const_sanJiaoLength * 0.5 && pos.x <= self.m_rectFoot.x + self.m_rectFoot.width - const_sanJiaoLength * 0.5 && pos.y >= self.m_rectFoot.y && pos.y <= self.m_rectFoot.y + self.m_rectFoot.height) {
                    var drawNode = target.getCurrentTarget();
                    self.drawBezier(drawNode, pos)

                    pointPos = pos;
                }
                return true;

            },
            onTouchMoved: function (touch, target) {
                //       var pos = touch.getLocation();
                var delta = touch.getDelta();
                if (pointPos) {
                    var pos = cc.p(pointPos.x + delta.x, pointPos.y + delta.y);

                    if (pos.x >= self.m_rectFoot.x + const_sanJiaoLength * 0.5 && pos.x <= self.m_rectFoot.x + self.m_rectFoot.width - const_sanJiaoLength * 0.5 && pos.y >= self.m_rectFoot.y && pos.y <= self.m_rectFoot.y + self.m_rectFoot.height) {
                        var drawNode = target.getCurrentTarget();
                        self.drawBezier(drawNode, pos)

                        pointPos = pos;
                    }
                }
            },
            onTouchEnded: function (touch, target) {

            },
            onTouchCanceled: function (touch, target) {
            }
        })

        cc.eventManager.addListener(listener, this.m_drawNode);
    },

    addLayerUpdate: function (str_note) {
        var layer = this.m_layerUpdate = new cc.LayerColor(cc.color(0, 0, 0, 0), cc.winSize.width, cc.winSize.height);
        layer.setPosition(0, 0);
        this.addChild(layer, 100);
        var size_bgLayer = layer.getContentSize();

        var bg_normal = new cc.Sprite(res.bg_index_jpg);
        bg_normal.setOpacity(0);
        var bg_Selected = new cc.Sprite(res.bg_index_jpg);
        bg_Selected.setOpacity(0);
        var bg = new cc.MenuItemSprite(bg_normal, bg_Selected, function () {
        }, this);
        bg.setAnchorPoint(0, 0);
        bg.setPosition(0, 0);
        var menu = new cc.Menu(bg);
        menu.setPosition(0, 0);
        layer.addChild(menu, 1);
        var size_bg = bg.getContentSize();

        //var str_note = str_note?str_note:"数据上传中，请耐心等待...";
        //var lbl_note = new cc.LabelTTF(str_note+"","Arial",40);
        //lbl_note.setAnchorPoint(0.5,0.5);
        //lbl_note.setPosition(size_bg.width*0.5,size_bg.height*0.4);
        //bg.addChild(lbl_note,0);

    },

    delLayerUpdate: function () {
        if (this.m_layerUpdate) {
            this.m_layerUpdate.removeFromParent(true);
            this.m_layerUpdate = null;
        }
    }
})

var PlayingScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new PlayingLayer();
        this.addChild(layer);
    }
})