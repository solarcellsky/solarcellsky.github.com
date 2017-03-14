/**
 * Created by Administrator on 2015/5/26.
 */
var const_minLengthRadio = 0.22;
var const_maxLengthRadio = 1;

var const_minRopeRadio = 0.4;
var const_maxRopeRadio = 0.8;

var PlayLayer = cc.Layer.extend({
    m_bg:null,
    m_rope:null,
    m_ropeSize:null,
    m_btnCow:null,
    m_layerCow:null,
    m_lblScore:null,
    m_curScore:0,
    m_lblTime:null,
    m_curTime:g_gameTime,
    m_isMusic:false,
//    m_point:null,
    m_pointDown:null,
    ctor:function(){
        this._super();
//        cc.audioEngine.playMusic(res.bg_music_mp3,true);

        this.initUI();
    },

    initUI:function(){

        var sp_bg = this.m_bg = new cc.Sprite(res.bg_index_jpg);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        this.addChild(sp_bg,0);

        var size_bg = sp_bg.getContentSize();
        var sp_logo = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.logo_png));
        sp_logo.setAnchorPoint(0.5,0.5);
        sp_logo.setPosition(size_bg.width*0.18,size_bg.height*0.94);
        sp_bg.addChild(sp_logo,0);

        var sp_scoreBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.scoreBg_png));
        sp_scoreBg.setAnchorPoint(0.5,0.5);
        sp_scoreBg.setPosition(size_bg.width*0.5,size_bg.height*0.94);
        sp_bg.addChild(sp_scoreBg,0);
        var size_scoreBg = sp_scoreBg.getContentSize();

        var lbl_score = this.m_lblScore = new cc.LabelTTF("0","Arial",45);
        lbl_score.setAnchorPoint(0.5,0.5);
        lbl_score.setPosition(size_scoreBg.width*0.71,size_scoreBg.height*0.5);
        sp_scoreBg.addChild(lbl_score)

        var sp_timeBg = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.timeBg_png));
        sp_timeBg.setAnchorPoint(0.5,0.5);
        sp_timeBg.setPosition(size_bg.width*0.82,size_bg.height*0.94);
        sp_bg.addChild(sp_timeBg,0);
        var size_timeBg = sp_timeBg.getContentSize();

        var lbl_time = this.m_lblTime = new cc.LabelTTF(""+this.m_curTime,"Arial",45);
        lbl_time.setAnchorPoint(0.5,0.5);
        lbl_time.setPosition(size_timeBg.width*0.71,size_timeBg.height*0.5);
        sp_timeBg.addChild(lbl_time)

        var sp_rope = this.m_rope = new cc.Sprite(res.rope_png);
        this.m_ropeSize = sp_rope.getContentSize();
        sp_rope.setTextureRect(cc.rect(0,0,this.m_ropeSize.width,this.m_ropeSize.height*const_minLengthRadio));
        sp_rope.setAnchorPoint(0.5,0);
        sp_rope.setPosition(size_bg.width*0.5,size_bg.height*0.15);
        sp_bg.addChild(sp_rope,1);

        //var sp_point = this.m_point = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.point_png));
        //sp_point.setAnchorPoint(0.5,0.5);
        //sp_point.setPosition(size_bg.width*0.5,size_bg.height*0.3);
        //sp_bg.addChild(sp_point,0);

        sp_rope.setRotation(-5);
        var rotaRight = new cc.RotateTo(0.5,5);
        var rotaLeft = new cc.RotateTo(0.5,-5);
        sp_rope.runAction(cc.sequence(rotaRight,rotaLeft).repeatForever());

        var sp_cowNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_cow_png));
        var sp_cowSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_cowSelected_png));
        var sp_cowDisabled = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_cow_png));
        var btn_cow = this.m_btnCow = new cc.MenuItemSprite(sp_cowNormal,sp_cowSelected,sp_cowDisabled,this.cow,this);
        btn_cow.setAnchorPoint(0.5,0.5);
        btn_cow.setPosition(size_bg.width*0.5,size_bg.height*0.1);
        btn_cow.setEnabled(false);

        var menu = new cc.Menu(btn_cow);
        menu.setPosition(0,0);
        sp_bg.addChild(menu,2);

        this.m_layerCow = new cc.Layer();
        this.m_layerCow.setPosition(0,0);
        sp_bg.addChild(this.m_layerCow,0);

        this.countDown();
        //this.schedule(this.createCow,g_createCowTime,cc.REPEAT_FOREVER,0.01);
        //this.schedule(this.cutTime,1);
    },

    countDown:function(){
        var bg_null = new cc.Sprite(res.nullBg_png);
        bg_null.setAnchorPoint(0,0);
        bg_null.setPosition(0,0);
        var size_bg = bg_null.getContentSize();
        this.addChild(bg_null,10);

        var lbl_note  = new cc.LabelTTF("演示版","Arial",100);
        lbl_note.setColor(cc.color(253,227,15,255));
        lbl_note.setAnchorPoint(0.5,0.5);
        lbl_note.setPosition(size_bg.width*0.5,size_bg.height*0.78);
        bg_null.addChild(lbl_note);

        var sp_note = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.note_png));
        sp_note.setAnchorPoint(0.5,0.5);
        sp_note.setPosition(size_bg.width*0.5,size_bg.height*0.3);
        bg_null.addChild(sp_note);

        var sp_pointRight = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.pointRight_png));
        sp_pointRight.setAnchorPoint(0.5,0.5);
        sp_pointRight.setPosition(size_bg.width*0.3,size_bg.height*0.1);
        bg_null.addChild(sp_pointRight);
        var pos_pointRight = sp_pointRight.getPosition();

        var sp_pointLeft = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.pointLeft_png));
        sp_pointLeft.setAnchorPoint(0.5,0.5);
        sp_pointLeft.setPosition(size_bg.width*0.7,size_bg.height*0.1);
        bg_null.addChild(sp_pointLeft);
        var pos_pointLeft = sp_pointLeft.getPosition();

        var moveRight = new cc.MoveBy(0.4,50,0);
        var moveLeft = new cc.MoveBy(0.4,-50,0);
        sp_pointRight.runAction(cc.repeatForever(cc.sequence(moveRight,cc.callFunc(function(){
            sp_pointRight.setPosition(pos_pointRight)
        },this))));

        sp_pointLeft.runAction(cc.repeatForever(cc.sequence(moveLeft,cc.callFunc(function(){
            sp_pointLeft.setPosition(pos_pointLeft)
        },this))));

        var sp_num = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("time1.png"));
        sp_num.setAnchorPoint(0.5,0.5);
        sp_num.setPosition(size_bg.width*0.5,size_bg.height*0.5);
        bg_null.addChild(sp_num);
        sp_num.runAction(cc.fadeOut(3));

        var n = 1;
        this.schedule(function(){
            n++;
            if(n == 5)
            {
                bg_null.removeFromParent(true);

                this.m_btnCow.setEnabled(true);
                this.schedule(this.createCow,g_createCowTime,cc.REPEAT_FOREVER,0.01);
                this.schedule(this.cutTime,1);
                return;
            }
            sp_num.initWithSpriteFrameName("time"+n+".png");
            sp_num.setOpacity(255);
            sp_num.runAction(cc.fadeOut(3));
        },1,3,1);
    },

    cow:function(pSender){
        if(!this.m_isMusic)
        {
            this.m_isMusic = true;
            cc.audioEngine.playMusic(res.bg_music_mp3,true);
        }

        pSender.setEnabled(false);

        var isThrowRope = true;
        var curRadio = const_minLengthRadio;
        var trowRope = function(dt){
            if(isThrowRope) {
                curRadio += 0.1;
                if(curRadio>const_maxLengthRadio){
                    curRadio = const_maxLengthRadio
                    isThrowRope = false;

                    var tag = this.isSetIn();
                    if(tag){
                        this.m_rope.setTextureRect(cc.rect(0,0,this.m_ropeSize.width,this.m_ropeSize.height*const_minLengthRadio));
                        this.m_rope.setOpacity(0);
                        this.unschedule(trowRope);
                        this.senInProgress(tag);
                        return;
                    }
                }
            }
            else{
                curRadio -= 0.1;
                if(curRadio<const_minLengthRadio){
                    curRadio = const_minLengthRadio;
                    this.unschedule(trowRope);
                    pSender.setEnabled(true);
                }
            }
            this.m_rope.setTextureRect(cc.rect(0,0,this.m_ropeSize.width,this.m_ropeSize.height*curRadio))
        };
        this.schedule(trowRope,g_rope);
    },

    cutTime:function(dt){
        this.m_curTime--;
        this.m_lblTime.setString(""+this.m_curTime);
        if(this.m_curTime <= 0){
            this.unschedule(this.cutTime);
            var self = this;
            cc.director.pause();
            g_update(self.m_curScore,function(){
                self.gameOver();
            });
        }
    },

    gameOver:function(){
        var bg_score = new cc.Sprite(res.nullBg_png);
        bg_score.setAnchorPoint(0,0);
        bg_score.setPosition(0,0);
        this.addChild(bg_score,2);
        var size_bg = bg_score.getContentSize();

        var sp_note = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.note_score_png));
        sp_note.setAnchorPoint(0.5,0.5);
        sp_note.setPosition(size_bg.width*0.5,size_bg.height*0.65);
        bg_score.addChild(sp_note);
        var size_note = sp_note.getContentSize();

        var lbl_score = new cc.LabelTTF(this.m_curScore+"","Arial",60);
        lbl_score.setColor(cc.color(255,0,0,255));
        lbl_score.setAnchorPoint(0.5,0.5);
        lbl_score.setPosition(size_note.width*0.74,size_note.height*0.52);
        sp_note.addChild(lbl_score);

        var sp_againNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        var sp_againSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_again_png));
        sp_againSelected.setOpacity(150);
        var btn_again = new cc.MenuItemSprite(sp_againNormal,sp_againSelected,function(){
            window.location.href = "";
        },this);
        btn_again.setAnchorPoint(0.5,0.5);
        btn_again.setPosition(size_bg.width*0.5,size_bg.height*0.2);

        var menu = new cc.Menu(btn_again);
        menu.setPosition(0,0);
        bg_score.addChild(menu);

        console.log(this.m_curScore);
    },

    addScore:function(score){
        var temScore = parseInt(score);
        this.m_curScore += temScore;
        this.m_lblScore.setString(this.m_curScore+"");

        var lbl_temScore = new cc.LabelTTF("+"+score,"Arial",80);
        lbl_temScore.setColor(cc.color(0,255,0,255));
        lbl_temScore.setAnchorPoint(0.5,0.5);
        lbl_temScore.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.3);
        this.m_bg.addChild(lbl_temScore,3);

        var moveUp = new cc.MoveBy(1,0,150);
        var fadeOut = new cc.FadeOut(1);
        lbl_temScore.runAction(cc.sequence(cc.spawn(moveUp,fadeOut),cc.callFunc(function(){
            this.removeFromParent(true);
        },lbl_temScore)))
    },

    senInProgress:function(tag){
        var sp_ropeCow = new cc.Sprite("res/ropeCow"+tag+".png");
        sp_ropeCow.setAnchorPoint(0.5,0);
        sp_ropeCow.setPosition(this.m_rope.getPosition());
        var size_ropeCow = sp_ropeCow.getContentSize();
        sp_ropeCow.setTextureRect(cc.rect(0,0,size_ropeCow.width,size_ropeCow.height*const_maxRopeRadio));
        this.m_bg.addChild(sp_ropeCow,1);

        sp_ropeCow.setRotation(-5);
        var rotaRight = new cc.RotateTo(0.1,5);
        var rotaLeft = new cc.RotateTo(0.1,-5);
        sp_ropeCow.runAction(cc.sequence(rotaRight,rotaLeft).repeatForever());

  //      this.m_point.initWithSpriteFrameName(res_name.pointDown_png);

        var curRadio = const_maxRopeRadio;
        var trowRopeCow = function(dt){
            curRadio -= 0.1;
            if(curRadio < const_minRopeRadio)
            {
    //            this.m_point.initWithSpriteFrameName(res_name.point_png);
                var score = g_cowScore1;
                switch (tag){
                    case 1:
                    {
                        score = g_cowScore1;
                    }
                        break;
                    case 2:
                    {
                        score = g_cowScore2;
                    }
                        break;
                    case 3:
                    {
                        score = g_cowScore3;
                    }
                        break;
                    default :
                    {

                    }
                }
                this.addScore(score);

                sp_ropeCow.removeFromParent(true);
                this.unschedule(trowRopeCow);
                this.m_rope.setOpacity(255);
                this.m_btnCow.setEnabled(true);
                return;
            }
            sp_ropeCow.setTextureRect(cc.rect(0,0,size_ropeCow.width,size_ropeCow.height*curRadio)) ;
        }
        this.schedule(trowRopeCow,g_ropeCow);
    },

    isSetIn:function(){
        var size = this.m_layerCow.getChildrenCount();
        for(var i = 0;i < size;i++)
        {
            var sp_cow = this.m_layerCow.getChildren()[i];
            if(sp_cow){
                var pos_cow = sp_cow.getPosition();
                var head_x = pos_cow.x - 106.5;
                if(cc.winSize.width/2 - g_precision <head_x&&head_x < cc.winSize.width/2 + g_precision)
                {
                    sp_cow.removeFromParent(true);
                    return sp_cow.getTag();
                }
            }
        }

        return false;
    },

    createCow:function(dt){
        var tag = Math.floor(Math.random()*3)+1;
        var sp_cow = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("cow"+tag+"_1.png"));
        sp_cow.setTag(tag);
        sp_cow.setAnchorPoint(0.5,0.5);
        var size_cow = sp_cow.getContentSize();
        sp_cow.setPosition(cc.winSize.width+size_cow.width/2,cc.winSize.height/2);
        this.m_layerCow.addChild(sp_cow);

        g_changeCowSpeed();
        var dis = cc.winSize.width+size_cow.width;
        var speed = g_cowSpeed1;
        switch (tag){
            case 1:
            {
                speed = g_cowSpeed1;
            }
                break;
            case 2:
            {
                speed = g_cowSpeed2;
            }
                break;
            case 3:
            {
                speed = g_cowSpeed3;
            }
                break;
            default :
            {}
        }
        var time = dis/speed;
        var moveLeft = new cc.MoveBy(time,-dis,0);
        sp_cow.runAction(cc.sequence(moveLeft,cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_cow)))

        var array_frame = [];
        for(var i = 1;i < 5;i++){
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame("cow"+tag+"_"+i+".png");
            array_frame.push(spriteFrame);
        }

        var time_one = 100/speed*0.3
        var ani = new cc.Animation(array_frame,time_one,1);
        sp_cow.runAction(cc.repeatForever(new cc.Animate(ani)));
    }
})

var PlayingScene = cc.Scene.extend({
    ctor:function(){
        this._super();

        var layer = new PlayLayer();
        this.addChild(layer,0);
    }
})

                                                