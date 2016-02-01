/**
 * Created by Administrator on 2015/6/10.
 */
var const_MoveDownSpeed = 400;                      //下落速度
var const_MoveUpTime1 = 1.0                         //一般上升时间
var const_MoveUpDis1   = 400;                       //一般上升距离
var const_MoveUpTime2 = 1                        //超级跳上升时间
var const_MoveUpDis2   = 2000;                      //超级跳上升距离
var const_MoveRadio = 0.5;                          //移动与滑动的比率
var const_groundMoveDis = 50;                      //地面移动距离
var const_totalTime = 60;                           //游戏时间
var const_disCeng = 100;                            //砖块每层的距离
var const_dis = 60;                                  //砖块间距
var const_spriteHighest = 960*0.8;                 //精灵移动最高位置
var const_radioMoveBg = 0.1;                        //背景移动比率
var const_radioMoveFrame = 0.3;                     //栅栏移动比率
var const_radioScore = 0.2;                         //移动像素与米的比率

var const_difBrick1 = -5000;                         //出现砖块时移动层的位置的位置
var const_difBrick2 = -10000;                         //出现砖块时移动层的位置的位置
var const_difBrick3 = -15000;                         //出现砖块时移动层的位置的位置

var const_doubleCount = 5;                          //超级跳需要达到的次数

var const_disWidthStar = 50;
var const_disHeightStar = 50;


var PlayingLayer = cc.Layer.extend({
    m_bg:null,
    m_frame:null,                   //栅栏背景
    m_frame2:null,                  //栅栏背景2
    m_layerMove:null,               //移动层
    m_layerBrick:null,              //砖块层
    m_ground:null,
    m_timeBar:null,                 //时间条
    m_timeSize:null,                //时间条尺寸
    m_listener:null,
    m_sprite:null,                  //游戏角色
    m_isDowning:false,              //是否是下降状态
    m_isGround:true,                //是否拥有地面
    m_groundPosY:0,                 //掉落最低位置
    m_isDirRight:true,              //脸是否朝向右
    m_groundIsDowning:false,        //地面正在下移
    m_isContact:false,               //精灵与地面是否接触
    m_contactPos:null,              //刚接触时地面的位置
    m_lblTime:null,                  //时钟
    m_curTime:const_totalTime,      //当前时间
    m_curBrickCeng:0,               //砖块分布层数
    m_lblJumpDis:null,                //弹跳的高度label
    m_curJumpDis:0,                  //弹跳的高度
    m_preBrickTag:0,                //上一次踩到砖块tag
    m_doubleCount:0,                //连击次数
    m_layerDouble:null,             //连击层
    ctor:function(){
        this._super();
        this.initUI();
        this.initGuide();
    },

    initUI:function(){
        //游戏背景
        var sp_bg = this.m_bg = new cc.Sprite(res.bg_playing_jpg);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        this.addChild(sp_bg,0);

        var sp_frame = this.m_frame = new cc.Sprite(res.bg_frame_png);
        sp_frame.setAnchorPoint(0,0);
        sp_frame.setPosition(0,0);
        this.addChild(sp_frame,1);

        var sp_frame2 = this.m_frame2 = new cc.Sprite(res.bg_frame_png);
        sp_frame2.setAnchorPoint(0,0);
        sp_frame2.setPosition(0,sp_frame.getPositionY() + sp_frame.getContentSize().height);
        this.addChild(sp_frame2,1);

        //移动层
        var layer_Move = this.m_layerMove = new cc.Layer();
        layer_Move.setPosition(0,0);
        this.addChild(layer_Move,2);

        ////左护栏
        //var sp_frameLeft = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.left_png));
        //sp_frameLeft.setAnchorPoint(0,0);
        //sp_frameLeft.setPosition(0,0);
        //layer_Move.addChild(sp_frameLeft,0);
        //
        ////右护栏
        //var sp_frameRight = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.right_png));
        //sp_frameRight.setAnchorPoint(1,0);
        //sp_frameRight.setPosition(cc.winSize.width,0);
        //layer_Move.addChild(sp_frameRight,0);

        //安全地面
        var sp_ground = this.m_ground = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.ground_png));
        sp_ground.setAnchorPoint(0.5,0.5);
        sp_ground.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.06 - const_groundMoveDis);
        layer_Move.addChild(sp_ground,1);
        var size_ground = sp_ground.getContentSize();
        sp_ground.runAction(this.groundUp());

       //精灵主角
        var sp = this.m_sprite = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("sprite3.png"));
        var size_sp = sp.getContentSize();
        sp.setAnchorPoint(0.5,0.5);
        sp.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.06+size_sp.height*0.5 - size_ground.height*0.5);
        layer_Move.addChild(sp,2);
        this.m_groundPosY = sp.getPositionY();
        this.moveUp();                                                      //主角弹跳

        var layer_brick = this.m_layerBrick = new cc.Layer();
        layer_brick.setPosition(0,0);
        layer_Move.addChild(layer_brick,0);
        this.createBrick1();

        //连击层
        var layer_double = this.m_layerDouble = new cc.Layer();
        layer_double.setPosition(0,0);
        this.addChild(layer_double,4);

        //显示层
        var layer_UI = new cc.Layer();
        layer_UI.setPosition(0,0);
        this.addChild(layer_UI,5);

        //时间条背景
        var sp_timeBarBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.bg_timeBar_png));
        sp_timeBarBg.setAnchorPoint(0.5,0);
        sp_timeBarBg.setPosition(cc.winSize.width*0.5,0);
        layer_UI.addChild(sp_timeBarBg,0);
        var size_timeBarBg = sp_timeBarBg.getContentSize();

        //时间条
        var sp_timeBar = this.m_timeBar = new cc.Sprite(res.timeBar_png);
        sp_timeBar.setAnchorPoint(0,0.5);
        sp_timeBar.setPosition(size_timeBarBg.width*0.17,size_timeBarBg.height*0.55);
        sp_timeBarBg.addChild(sp_timeBar,1);
        this.m_timeSize = sp_timeBar.getContentSize();

        //时钟
        var sp_clock = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.clock_png));
        sp_clock.setAnchorPoint(0,0);
        sp_clock.setPosition(0,0);
        sp_timeBarBg.addChild(sp_clock,2);
        var size_clock = sp_clock.getContentSize();

        var lbl_Time = this.m_lblTime = new cc.LabelTTF(""+this.m_curTime,"Arial",40);
        lbl_Time.setColor(cc.color(0,255,0,255));
        lbl_Time.setAnchorPoint(0.5,0.5);
        lbl_Time.setPosition(size_clock.width*0.49,size_clock.height*0.49);
        sp_clock.addChild(lbl_Time);

        var sp_mi = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.mi_png));
        sp_mi.setAnchorPoint(0,0.5);
        sp_mi.setPosition(cc.winSize.width*0.2,cc.winSize.height*0.96);
        layer_UI.addChild(sp_mi,0);

        var lbl_highest = this.m_lblJumpDis = new cc.LabelTTF(0+"","Arial",50);
        lbl_highest.setAnchorPoint(1,0.5);
        lbl_highest.setPosition(sp_mi.getPosition());
        layer_UI.addChild(lbl_highest,0);

        this.addTouch();
 //       this.schedule(this.MyUpdate,0.02,cc.REPEAT_FOREVER,0.02);
        this.scheduleUpdate();
        this.schedule(this.cutTime,1,cc.REPEAT_FOREVER,1);
    },

    //添加指示层
    initGuide:function(){
        var layer_guide = new cc.LayerColor(cc.color(0,0,0,150),cc.winSize.width,cc.winSize.height);
        layer_guide.setPosition(0,0);
        this.addChild(layer_guide,10);

        //箭头
        var sp_point = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.point_png));
        sp_point.setAnchorPoint(0.5,0.5);
        sp_point.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.5);
        layer_guide.addChild(sp_point);

        //“滑”提示
        var sp_hua = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.hua_png));
        sp_hua.setAnchorPoint(0.5,0.5);
        sp_hua.setPosition(cc.winSize.width*0.8,cc.winSize.height*0.7);
        layer_guide.addChild(sp_hua);

        //手指
        var sp_hand = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.hand_png));
        sp_hand.setAnchorPoint(0.5,0.8);
        sp_hand.setPosition(cc.winSize.width*0.4,cc.winSize.height*0.5);
        layer_guide.addChild(sp_hand);

        var move1 = new cc.MoveBy(0.5,cc.winSize.width*0.2,0);
        var move2 = new cc.MoveBy(0.5,-cc.winSize.width*0.2,0);
        sp_hand.runAction(cc.sequence(move1,move2).repeatForever());

        //定时移除指示层
        this.scheduleOnce(function(){
            layer_guide.removeFromParent(true);
        },2.0);
    },

    //初始创建砖块
    createBrick1:function(){
        var n = this.m_curBrickCeng = Math.floor(cc.winSize.height/const_disCeng) + 1;
        for(var i = 2;i <= n;i++){
            var arrayX= [1,2,3,4,5,6,7,8,9];
            var num = Math.floor(Math.random()*3) + 1;
            for(var j = 0;j < num;j++){
                var sp_brick = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("brick1.png"));
                sp_brick.setAnchorPoint(0.5,0.5);
                sp_brick.setTag(1);
                var randN = Math.floor(Math.random()*arrayX.length);
                var randX = arrayX[randN]*const_dis - sp_brick.getContentSize().width*0.5 + 50;
                arrayX.splice(randN,1);
                sp_brick.setPosition(randX,const_disCeng*i);
                this.m_layerBrick.addChild(sp_brick);
            }
        }
    },

    //移动中创建砖块
    createBrick2:function(){
        var Y_layerMove = this.m_layerMove.getPositionY();
        var Y_total = cc.winSize.height - Y_layerMove;
        var n =  Math.floor(Y_total/const_disCeng) + 1;
        if(n > this.m_curBrickCeng){
            //创建不同砖块
            var n_typeBrick = 1;
            if(Y_layerMove > const_difBrick1)
            {
            }
            else if(Y_layerMove > const_difBrick2){
                n_typeBrick = 2;
            }
            else if(Y_layerMove > const_difBrick3){
                n_typeBrick = 3;
            }
            else{
                n_typeBrick = 4;
            };

            for(var i = this.m_curBrickCeng + 1;i <= n;i++ ){
                var arrayX= [1,2,3,4,5,6,7,8,9];
                var num = Math.floor(Math.random()*2) + 1;
                for(var j = 0;j < num;j++){
                    var tag = Math.floor(Math.random()*n_typeBrick) + 1;
                    var sp_brick = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("brick"+tag+".png"));
                    sp_brick.setTag(tag);
                    sp_brick.setAnchorPoint(0.5,0.5);
                    var randN = Math.floor(Math.random()*arrayX.length);
                    var randX = arrayX[randN]*const_dis - sp_brick.getContentSize().width*0.5 + 50;
                    arrayX.splice(randN,1);
                    sp_brick.setPosition(randX,const_disCeng*i);
                    this.m_layerBrick.addChild(sp_brick);
                }
            }

            //if(Y_layerMove < const_difBrick1){
            //    for(var i = this.m_curBrickCeng + 1;i <= n;i++ ){
            //        var arrayX= [1,2,3,4,5,6,7,8,9];
            //        var num = Math.floor(Math.random()*3) + 1;
            //        for(var j = 0;j < num;j++){
            //            var tag = Math.floor(Math.random()*4) + 1;
            //            var sp_brick = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("brick"+tag+".png"));
            //            sp_brick.setTag(tag);
            //            sp_brick.setAnchorPoint(0.5,0.5);
            //            var randN = Math.floor(Math.random()*arrayX.length);
            //            var randX = arrayX[randN]*const_dis - sp_brick.getContentSize().width*0.5 + 50;
            //            arrayX.splice(randN,1);
            //            sp_brick.setPosition(randX,const_disCeng*i);
            //            this.m_layerBrick.addChild(sp_brick);
            //        }
            //    }
            //}
            //else{
            //    //创建相同砖块
            //    for(var i = this.m_curBrickCeng + 1;i <= n;i++ ){
            //        var arrayX= [1,2,3,4,5,6,7,8,9];
            //        var num = Math.floor(Math.random()*3) + 1;
            //        for(var j = 0;j < num;j++){
            //            var sp_brick = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("brick1.png"));
            //            sp_brick.setTag(1);
            //            sp_brick.setAnchorPoint(0.5,0.5);
            //            var randN = Math.floor(Math.random()*arrayX.length);
            //            var randX = arrayX[randN]*const_dis - sp_brick.getContentSize().width*0.5 + 50;
            //            arrayX.splice(randN,1);
            //            sp_brick.setPosition(randX,const_disCeng*i);
            //            this.m_layerBrick.addChild(sp_brick);
            //        }
            //    }
            //}
            this.m_curBrickCeng = n;
        }

    },

    cutTime:function(dt){
        this.m_curTime--;
        this.m_lblTime.setString(""+this.m_curTime);
        this.m_timeBar.setTextureRect(cc.rect(0,0,this.m_curTime/const_totalTime * this.m_timeSize.width,this.m_timeBar.height));
        if(this.m_curTime <= 0){
           this.gameOver();

            var sp_timeIsUp = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.timeIsUp_png));
            sp_timeIsUp.setScale(2);
            sp_timeIsUp.setAnchorPoint(0.5,0.5);
            sp_timeIsUp.setPosition(cc.winSize.width*0.5,cc.winSize.height + sp_timeIsUp.getContentSize().height*0.5);
            this.m_layerDouble.addChild(sp_timeIsUp);
            var moveDown = new cc.MoveBy(2.0,0,-cc.winSize.height*0.5);
            var ease = new cc.EaseElasticOut(moveDown);
            sp_timeIsUp.runAction(cc.sequence(ease,cc.callFunc(function(){
                this.result();
            },this)))
        }
    },

    update:function(dt){
        if(this.m_isDowning)
        {
            this.isLost();

            //精灵下降阶段
            var curPos = this.m_sprite.getPosition();
            var pos = cc.p(curPos.x,curPos.y - const_MoveDownSpeed*dt);

            //接触砖块
            var size_sprite = this.m_sprite.getContentSize();
            var rect_sprite = cc.rect(curPos.x - size_sprite.width*0.5,curPos.y - size_sprite.height*0.5,size_sprite.width,size_sprite.height);

            var arrContact_brick = [];
//            var length = this.m_layerBrick.getChildrenCount();
            for(var i = 0;i < this.m_layerBrick.getChildrenCount();i++ ){
                var sp_brick =  this.m_layerBrick.getChildren()[i];
                var size_brick = sp_brick.getContentSize();
                var pos_brick = sp_brick.getPosition();
                var rect_brick = cc.rect(pos_brick.x - size_brick.width * 0.5, pos_brick.y - size_brick.height * 0.5, size_brick.width, size_brick.height);

                if (this.MyIsContactBrick(rect_sprite, rect_brick)) {
                    //精灵与砖块接触
      //              arrContact_brick.push(sp_brick);

                    var sp_tag = sp_brick.getTag();
                    //第一次跳；没有踩到相同砖块;刚超级跳完成
                    if(0 == this.m_preBrickTag || this.m_preBrickTag != sp_tag || this.m_doubleCount == const_doubleCount)
                    {
                        this.m_preBrickTag = sp_tag;
                        this.m_doubleCount = 1;
                        this.moveUp();
                    }
                    //else if(this.m_doubleCount == const_doubleCount && this.m_preBrickTag == sp_tag ){
                    //    //超级跳完成，再次跳到相同砖块
                    //    this.m_doubleCount = 2;
                    //    this.moveUp();
                    //    this.doubleEffect();
                    //}
                    else{
                        this.m_doubleCount++;
                        //超级跳
                        if(this.m_doubleCount == const_doubleCount){
                            this.superMoveUp();
                        }
                        else{
                            this.moveUp();
                        }
                        this.doubleEffect(sp_tag);
                    }
                    sp_brick.removeFromParent(true);
                    this.brickEffect(pos_brick,sp_tag)
                    return;
  //                  break;
                }
            }

            /*删除碰撞的砖块*/
            //var length_contact = arrContact_brick.length;
            //if(1 == length_contact){
            //    var sp_brick = arrContact_brick[0];
            //    var sp_tag = sp_brick.getTag();
            //
            //    //第一次跳；没有踩到相同砖块;刚超级跳完成
            //    if(0 == this.m_preBrickTag || this.m_preBrickTag != sp_tag || this.m_doubleCount == const_doubleCount)
            //    {
            //        this.m_preBrickTag = sp_tag;
            //        this.m_doubleCount = 1;
            //        this.moveUp();
            //    }
            //    //else if(this.m_doubleCount == const_doubleCount && this.m_preBrickTag == sp_tag ){
            //    //    //超级跳完成，再次跳到相同砖块
            //    //    this.m_doubleCount = 2;
            //    //    this.moveUp();
            //    //    this.doubleEffect();
            //    //}
            //    else{
            //        this.m_doubleCount++;
            //        //超级跳
            //        if(this.m_doubleCount == const_doubleCount){
            //            this.superMoveUp();
            //        }
            //        else{
            //            this.moveUp();
            //        }
            //        this.doubleEffect();
            //    }
            //    sp_brick.removeFromParent(true);
            //    return;
            //}
            //else if(2 == length_contact){
            //    var sp_brick = arrContact_brick[0];
            //    var sp_tag = sp_brick.getTag();
            //    //第一次跳；没有踩到相同砖块;刚超级跳完成
            //    if(0 == this.m_preBrickTag || this.m_preBrickTag != sp_tag || this.m_doubleCount == const_doubleCount)
            //    {
            //        this.m_preBrickTag = sp_tag;
            //        this.m_doubleCount = 1;
            //        this.moveUp();
            //    }
            //
            //    else{
            //        this.m_doubleCount++;
            //        if(this.m_doubleCount == const_doubleCount){
            //            this.superMoveUp();
            //        }
            //        else{
            //            this.moveUp();
            //        }
            //
            //
            //    }
            //
            //    arrContact_brick[0].removeFromParent(true);
            //    arrContact_brick[1].removeFromParent(true);
            //    return;
            //}

 //           for(var i = 0;i < length_contact;i++){
 //               var sp_brick = arrContact_brick[i];
 //               if(this.m_doubleCount == 5)
 //               {
 //                   this.superMoveUp();
 //               }
 //               else{
 //                   this.moveUp();
 //               }
 ////               this.moveUp();
 //               sp_brick.removeFromParent(true);
 //           };

            //if(length_contact != 0){
            //    this.moveUp();
            //    return;
            //}

            //接触地面
            var pos_ground = this.m_ground.getPosition();
            if(this.m_isGround) {                                               //拥有地面
                if (!this.m_isContact&&pos.y >= pos_ground.y) {                //下落过程未接触掉地面
                    this.m_sprite.setPosition(pos);

                    //地面移动
                    if(!this.m_groundIsDowning&&pos.y <= pos_ground.y + const_groundMoveDis){           //刚接触到地面
                        this.m_contactPos = pos_ground.y;                                                 //记录刚接触是地面的位置
                        this.m_groundIsDowning = true;
                        this.m_isContact = true;

                        this.m_ground.runAction(cc.sequence(this.groundDown(),this.groundUp(),cc.callFunc(function(){
                            this.m_groundIsDowning = false;
                        },this)));
                    }
                }
                else if(pos.y >=  this.m_contactPos){                                                      //接触到地面继续往下掉
                    this.m_sprite.setPosition(pos);
                }
                else{                                                                                           //结束掉落开始上升
                    this.m_sprite.setPosition(pos.x,this.m_contactPos);
                    this.moveUp();
                    this.m_isContact = false;
                }
            }
            else{                                           //没有安全地面

                this.m_sprite.setPosition(pos);
            }
        }
        else{
            //精灵上升阶段
            this.moveUpBg();            //背景下移
        }
    },

    //踩到砖块效果
    brickEffect:function(pos,tag){
            for(i = 0;i < 15;i++){
                var star = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("star"+tag+".png"));
                star.setAnchorPoint(0.5,0.5);
                star.setPosition(pos);
                star.setScale(Math.random()*2+0.5);
                this.m_layerMove.addChild(star)

                var r = cc.winSize.width * 0.6;
                var moveDown = new cc.MoveBy(1,0,-r * 0.5);
                var ease = new cc.EaseCircleActionIn(moveDown);
                star.runAction(cc.sequence(ease,cc.callFunc(function(){
                    this.removeFromParent(true);
                },star)));

                var random_X = Math.random() * r * 2  + pos.x - r;
                var isUp = Math.random() < 0.3?true:false;
                var Y = pos.y - r * Math.random();
                if(isUp){
                    random_X *= 0.5;
                    Y =  pos.y + r * 0.25;
                }
                //var random_y = -1 * Math.sqrt(r * r - (pos.x - random_X)*(pos.x - random_X)) + pos.y
                //var moveX = new cc.MoveTo( Math.random() *0.5 + 0.5,random_X,random_y);

                var moveX = new cc.MoveTo( Math.random() *0.8 + 0.4,random_X,Y);
                star.runAction(cc.sequence(cc.spawn(moveX),cc.callFunc(function(){
                    this.removeFromParent(true);
                },star)));
            }
    },

    //连击效果
    doubleEffect:function(tag){
        var sp_doubleBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.bg_double_png));
        sp_doubleBg.setAnchorPoint(0.5,0);
        sp_doubleBg.setPosition(cc.winSize.width*0.5,cc.winSize.height);
        this.m_layerDouble.addChild(sp_doubleBg);
        var size_doubleBg = sp_doubleBg.getContentSize();

        var sp_count = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("double"+this.m_doubleCount+".png"));
        sp_count.setAnchorPoint(0.5,0.5);
        sp_count.setPosition(size_doubleBg.width*0.5,size_doubleBg.height*0.4);
        sp_doubleBg.addChild(sp_count)

        var moveDown = new cc.MoveBy(0.5,0,-size_doubleBg.height);
        sp_doubleBg.runAction(cc.sequence(moveDown,cc.delayTime(0.5),cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_doubleBg)))

        if(this.m_doubleCount == const_doubleCount){
            var sp_superJump = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.CJT_png));
            sp_superJump.setAnchorPoint(0.5,0.5);
            sp_superJump.setPosition(cc.winSize.width*0.5,0);
            sp_superJump.setScale(0.5);
            this.m_layerDouble.addChild(sp_superJump);

            var moveUp1 = new cc.MoveBy(const_MoveUpTime2,0,cc.winSize.height*0.6);
            var moveUp2 = new cc.MoveBy(0.4,0,cc.winSize.height*0.4);
            var scale = new cc.ScaleTo(const_MoveUpTime2,1);
            sp_superJump.runAction(cc.sequence(cc.spawn(moveUp1,scale),cc.callFunc(function(){
                this.addStar(tag);
            },this),moveUp2,cc.callFunc(function(){
                this.removeFromParent(true);
            },sp_superJump)))
        }
    },

    //添加连击后星星的效果
    addStar:function(tag){
        for(var i = 0;i< 50;i++){
            var star = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("star"+tag+".png"));
            star.setAnchorPoint(0.5,0.5);
            star.setScale(Math.random() + 1);
            var random_X = Math.random()*(cc.winSize.width - 100) + 50;
            var random_Y =  Math.random()*cc.winSize.height * 0.4 + cc.winSize.height * 0.6;
            star.setPosition(random_X,random_Y);
            this.m_layerDouble.addChild(star);

            var moveDown = new cc.MoveBy( Math.random() + 0.5,0,-cc.winSize.height*0.4);
            star.runAction(cc.sequence(moveDown,cc.callFunc(function(){
                this.removeFromParent(true);
            },star)));
        }
    },

    //检测精灵与砖块的特殊碰撞
    MyIsContactBrick:function(rect1,rect2){
   //     cc.log("rect1:"+rect2.x+"  "+rect2.y+"  "+rect2.width+"  "+rect2.height+"rect2:"+rect2);
        if((rect1.y > rect2.y + rect2.height*0.5 && rect1.y < rect2.y + rect2.height) && ((rect1.x > rect2.x && rect1.x < rect2.x + rect2.width)||(rect1.x+rect1.width > rect2.x && rect1.x+rect1.width < rect2.x + rect2.width))){
            return true;
        }
        return false;
    },

    //背景移动
    moveUpBg:function(){
        var Y_bg = this.m_layerMove.getPositionY();
        var Y_sprite = this.m_sprite.getPositionY();
        var height = Y_sprite + Y_bg;
        var dis =  const_spriteHighest - height;
        if(height > const_spriteHighest){
            var Y_layerMove = Y_bg + dis;
            this.m_layerMove.setPositionY(Y_layerMove);                                          //砖块层移动
            this.m_curJumpDis = Math.floor(-Y_layerMove * const_radioScore);
            this.m_lblJumpDis.setString(this.m_curJumpDis+"");                                     //修改弹跳高度

            this.moveUpBackground(dis)                                                          //背景层移动
            this.moveUpFrame(dis);                                                              //栅栏层移动
            this.createBrick2();                                                                //移动创建砖块
            this.deleteBrick();                                                                 //删除砖块
        }
    },

    //背景移动
    moveUpBackground:function(dis){
        var tem_Y = this.m_bg.getPositionY()+dis*const_radioMoveBg;
        if(tem_Y > cc.winSize.height - this.m_bg.getContentSize().height)
        {
            this.m_bg.setPositionY(this.m_bg.getPositionY()+dis*const_radioMoveBg);
        }
    },

    //栅栏移动
    moveUpFrame:function(dis){
        var Y1 = this.m_frame.getPositionY();
        var Y2 = this.m_frame2.getPositionY();
        var tem_Y1 = Y1 + dis * const_radioMoveFrame;
        var tem_Y2 = Y2 + dis * const_radioMoveFrame;
        if(tem_Y1 < -this.m_frame.getContentSize().height)
        {
            var tem_frame = this.m_frame;
            this.m_frame = this.m_frame2;
            this.m_frame2 = tem_frame;
            this.m_frame.setPositionY(tem_Y2);
            this.m_frame2.setPositionY(tem_Y2 +  this.m_frame.getContentSize().height);
        }
        else{
            this.m_frame.setPositionY(tem_Y1);
            this.m_frame2.setPositionY(tem_Y2);
        }
    },

    //删除砖块
    deleteBrick:function(){
        var Y_layerMove = this.m_layerMove.getPositionY();
        for(var i = 0;i < this.m_layerBrick.getChildrenCount();i++){
            var sp_brick = this.m_layerBrick.getChildren()[i];
            var Y_brick = sp_brick.getPositionY()
            if(Y_brick < -Y_layerMove - 100){
                sp_brick.removeFromParent(true);
            }
        }
    },

    //是否掉下去
    isLost:function(){
        var Y_layerMove = this.m_layerMove.getPositionY();
        var Y_sprite = this.m_sprite.getPositionY();
        var height_sprite = this.m_sprite.getContentSize().height;
        if(Y_sprite + height_sprite*0.5 < -Y_layerMove){
            this.gameOver();

            var sp_gameOver = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.gameOver_png));
            sp_gameOver.setScale(2);
            sp_gameOver.setAnchorPoint(0.5,0.5);
            sp_gameOver.setPosition(cc.winSize.width*0.5,cc.winSize.height + sp_gameOver.getContentSize().height*0.5);
            this.m_layerDouble.addChild(sp_gameOver);
            var moveDown = new cc.MoveBy(2.0,0,-cc.winSize.height*0.5);
            var ease = new cc.EaseElasticOut(moveDown);
            sp_gameOver.runAction(cc.sequence(ease,cc.callFunc(function(){
                this.result();
            },this)))
        }
    },

    //游戏结束之前准备
    gameOver:function(){
        cc.eventManager.removeListener(this.m_listener);
        this.m_sprite.removeFromParent(true);
        this.unscheduleUpdate();
        this.unschedule(this.cutTime);
    },

    //游戏结束结果
    result:function(){
        if(g_isConnectServer) {
            var self = this;
            self.addLayerUpdate();
            var encrypt_score = RSAUtils.encryptedString(publicKey, this.m_curJumpDis + "");
            try {
                GameService.saveScore(encrypt_score, function (json) {
                    GameService.share(self.m_curJumpDis + "");
                    self.delLayerUpdate();
                    var scoreRand = JSON.parse(json);
                    var bestScore = scoreRand.score;
                    var rank = scoreRand.rank;

                    var bg_result = new cc.Sprite(res.bg_gameOver_jpg);
                    bg_result.setAnchorPoint(0, 0);
                    bg_result.setPosition(0, 0);
                    self.addChild(bg_result, 10);
                    var size_result = bg_result.getContentSize();

                    var lbl_curScore = new cc.LabelTTF(self.m_curJumpDis + "", "Arial", 20);
                    lbl_curScore.setColor(cc.color(255, 0, 0, 255));
                    lbl_curScore.setAnchorPoint(0.5, 0.5);
                    lbl_curScore.setPosition(size_result.width * 0.44, size_result.height * 0.605);
                    bg_result.addChild(lbl_curScore);

                    //             var best = bestScore > self.m_curJumpDis?bestScore:self.m_curJumpDis
                    var lbl_bestScore = new cc.LabelTTF(bestScore + "", "Arial", 20);
                    lbl_bestScore.setColor(cc.color(255, 0, 0, 255));
                    lbl_bestScore.setAnchorPoint(0.5, 0.5);
                    lbl_bestScore.setPosition(size_result.width * 0.44, size_result.height * 0.545);
                    bg_result.addChild(lbl_bestScore);

                    var lbl_rank = new cc.LabelTTF(rank + "", "Arial", 20);
                    lbl_rank.setColor(cc.color(255, 0, 0, 255));
                    lbl_rank.setAnchorPoint(0.5, 0.5);
                    lbl_rank.setPosition(size_result.width * 0.44, size_result.height * 0.485);
                    bg_result.addChild(lbl_rank);

                    //重玩
                    var sp_replayNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_replay_png));
                    var sp_replaySelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_replay_png));
                    sp_replaySelected.setOpacity(150);
                    var btn_replay = new cc.MenuItemSprite(sp_replayNormal, sp_replaySelected, self.replay, self);
                    btn_replay.setAnchorPoint(0.5, 0.5);
                    btn_replay.setPosition(size_result.width * 0.5, size_result.height * 0.39);

                    //晒分
                    var sp_shareNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
                    var sp_shareSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
                    sp_shareSelected.setOpacity(150);
                    var btn_share = new cc.MenuItemSprite(sp_shareNormal, sp_shareSelected, self.share, self);
                    btn_share.setAnchorPoint(0.5, 0.5);
                    btn_share.setPosition(size_result.width * 0.5, size_result.height * 0.27);

                    var menu = new cc.Menu(btn_replay, btn_share);
                    menu.setPosition(0, 0);
                    bg_result.addChild(menu);
                });

            }
            catch(e){
                alert(e);
            }
        }
        else {
            var bg_result = new cc.Sprite(res.bg_gameOver_jpg);
            bg_result.setAnchorPoint(0, 0);
            bg_result.setPosition(0, 0);
            this.addChild(bg_result, 10);
            var size_result = bg_result.getContentSize();

            var lbl_curScore = new cc.LabelTTF(this.m_curJumpDis + "", "Arial", 20);
            lbl_curScore.setColor(cc.color(255, 0, 0, 255));
            lbl_curScore.setAnchorPoint(0.5, 0.5);
            lbl_curScore.setPosition(size_result.width * 0.44, size_result.height * 0.605);
            bg_result.addChild(lbl_curScore);

            var lbl_bestScore = new cc.LabelTTF(9999+"","Arial",20);
            lbl_bestScore.setColor(cc.color(255,0,0,255));
            lbl_bestScore.setAnchorPoint(0.5,0.5);
            lbl_bestScore.setPosition(size_result.width * 0.44,size_result.height * 0.545);
            bg_result.addChild(lbl_bestScore);

            var lbl_rank = new cc.LabelTTF(10+"","Arial",20);
            lbl_rank.setColor(cc.color(255,0,0,255));
            lbl_rank.setAnchorPoint(0.5,0.5);
            lbl_rank.setPosition(size_result.width * 0.44,size_result.height * 0.485);
            bg_result.addChild(lbl_rank);

            //重玩
            var sp_replayNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_replay_png));
            var sp_replaySelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_replay_png));
            sp_replaySelected.setOpacity(150);
            var btn_replay = new cc.MenuItemSprite(sp_replayNormal, sp_replaySelected, this.replay, this);
            btn_replay.setAnchorPoint(0.5, 0.5);
            btn_replay.setPosition(size_result.width * 0.5, size_result.height * 0.39);

            //晒分
            var sp_shareNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
            var sp_shareSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_share_png));
            sp_shareSelected.setOpacity(150);
            var btn_share = new cc.MenuItemSprite(sp_shareNormal, sp_shareSelected, this.share, this);
            btn_share.setAnchorPoint(0.5, 0.5);
            btn_share.setPosition(size_result.width * 0.5, size_result.height * 0.27);

            var menu = new cc.Menu(btn_replay, btn_share);
            menu.setPosition(0, 0);
            bg_result.addChild(menu);
        }
    },

    //重新玩
    replay:function(){
        cc.director.runScene(new PlayingScene());
    },

    //分享
    share:function(){
        var menu = new cc.Menu();
        menu.setPosition(0,0);
        var bg_share = new cc.MenuItemImage(res.bg_share_png,res.bg_share_png,function(){
            menu.removeFromParent(true);
        },this);
        bg_share.setAnchorPoint(0,0);
        bg_share.setPosition(0,0);
        menu.addChild(bg_share);
        this.addChild(menu,11);
    },

    //地面上升动作
    groundUp:function(){
        var moveUp = new cc.MoveBy(0.5,0,const_groundMoveDis);
        return  new cc.EaseCubicActionOut(moveUp);
    },

    //地面下降动作
    groundDown:function(){
        var moveDown = new cc.MoveBy(0.1,0,-const_groundMoveDis);
        return  new cc.EaseCubicActionIn(moveDown);
    },

    //精灵普通跳
    moveUp:function(){
        this.m_isDowning = false;
        //上升时的状态
        if(this.m_isDirRight) {
            this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite3.png"))
        }
        else{
            this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite4.png"))
        }

        var moveUp = new cc.MoveBy(const_MoveUpTime1,0,const_MoveUpDis1);
        var ease =  new cc.EaseCubicActionOut(moveUp);
        this.m_sprite.runAction(cc.sequence(ease,cc.callFunc(function(){
            this.m_isDowning = true;

            //下落时的状态
            if(this.m_isDirRight){
                this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite1.png"));
            }
            else{
                this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite2.png"));
            }
        },this)));
    },

    //精灵超级跳
    superMoveUp:function(){
        this.m_isDowning = false;
        //上升时的状态
        if(this.m_isDirRight) {
            this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite3.png"))
        }
        else{
            this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite4.png"))
        }

        var moveUp = new cc.MoveBy(const_MoveUpTime2,0,const_MoveUpDis2);
        var ease =  new cc.EaseCubicActionOut(moveUp);
        this.m_sprite.runAction(cc.sequence(ease,cc.callFunc(function(){
            this.m_isDowning = true;

            //下落时的状态
            if(this.m_isDirRight){
                this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite1.png"));
            }
            else{
                this.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite2.png"));
            }
        },this)));
    },

    addLayerUpdate:function(str_note){
        var layer = this.m_layerUpdate = new cc.LayerColor(cc.color(0,0,0,200),cc.winSize.width,cc.winSize.height);
        layer.setPosition(0,0);
        this.addChild(layer,100);

        var bg_normal = new cc.Sprite(res.bg_index_jpg);
        bg_normal.setOpacity(0);
        var bg_Selected = new cc.Sprite(res.bg_index_jpg);
        bg_Selected.setOpacity(0);
        var bg = new cc.MenuItemSprite(bg_normal,bg_Selected,function(){},this);
        bg.setAnchorPoint(0,0);
        bg.setPosition(0,0);
        var menu = new cc.Menu(bg);
        menu.setPosition(0,0);
        layer.addChild(menu,1);
        var size_bg = bg.getContentSize();

        var str_note = str_note?str_note:"数据上传中，请耐心等待...";
        var lbl_note = new cc.LabelTTF(str_note+"","Arial",40);
        lbl_note.setAnchorPoint(0.5,0.5);
        lbl_note.setPosition(size_bg.width*0.5,size_bg.height*0.35);
        bg.addChild(lbl_note);

    },

    delLayerUpdate:function(){
        if(this.m_layerUpdate){
            this.m_layerUpdate.removeFromParent(true);
            this.m_layerUpdate = null;
        }
    },

    addTouch:function(){
        var isTouch = false;
        var self = this;
        this.m_listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan:function(touch,event){
                if(!isTouch){
                    isTouch = true;
                    return true;
                }
                else{
                    return false;
                }
            },
            onTouchMoved:function(touch,event){
                var delta = touch.getDelta();
                if(delta.x >= 0)
                {
                    //向右滑动
                    if(!self.m_isDirRight)
                    {
                        //面向左边
                        self.m_isDirRight = true;
                        if(self.m_isDowning){
                            self.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite1.png"));           //下降时改为面向右边
                        }
                        else{
                            self.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite3.png"));           //上升时改为面向右边
                        }
                    }
                    var posX = self.m_sprite.getPositionX() + delta.x * const_MoveRadio;
                    if(posX <= cc.winSize.width*0.9){
                        self.m_sprite.setPositionX(posX);
                    }
                    else{
                        self.m_sprite.setPositionX(cc.winSize.width*0.9);
                    }

                }
                else{
                    //向左滑动
                    if(self.m_isDirRight){
                        self.m_isDirRight = false;
                        if(self.m_isDowning){
                            self.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite2.png"));           //下降时改为面向左边
                        }
                        else{
                            self.m_sprite.initWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame("sprite4.png"));           //上升时改为面向左边
                        }
                    }

                    var posX = self.m_sprite.getPositionX() + delta.x * const_MoveRadio;
                    if(posX >= cc.winSize.width*0.1){
                        self.m_sprite.setPositionX(posX);
                    }
                    else{
                        self.m_sprite.setPositionX(cc.winSize.width*0.1);
                    }
                }
            },
            onTouchEnded:function(touch,event){
                isTouch = false;
            },
            onTouchCanceled:function(touch,event){

            }
        });

        cc.eventManager.addListener(this.m_listener,this);
    }
})

var PlayingScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new PlayingLayer();
        this.addChild(layer);
    }
})