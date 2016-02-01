var last_update = 0;
var frequency = 100;
var const_disappearTime = 0.15;

var const_dis = 50;

var MyLayer = cc.Layer.extend({
    m_bg:undefined,
    m_index:2,
    m_spKuang:null,

    m_coverMenu:undefined,
    m_btnStart:undefined,
    m_listener:undefined,
    m_spHand:undefined,
    m_beganPos:undefined,
    m_preTouchPos1:undefined,
    m_preTouchPos2:undefined,
    ctor:function(){
        this._super();

        cc.audioEngine.playMusic(res.music_mp3,true);
        this.initUI();
    },

    initUI:function(){
        var self = this;
        var src = res.indexBg_jpg;
        if(global_isIPad)
        {
            src = res.indexBg_iPad_jpg
        }

        var sp_bg = self.m_bg = new cc.Sprite(src);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        self.addChild(sp_bg,0);
        var size_bg = sp_bg.getContentSize();

        //var sp_startNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_start_png));
        //var sp_startSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_startSelected_png));
        //var btn_start = new cc.MenuItemSprite(sp_startNormal,sp_startSelected,self.start,self);
        //btn_start.setAnchorPoint(0.5,0.5);
        //btn_start.setPosition(size_bg.width*0.5,size_bg.height*0.45);
        var sp_start = self.m_btnStart = new cc.Sprite(res.sp_start_png);
        sp_start.setAnchorPoint(0.5,0.5);
        sp_start.setPosition(size_bg.width*0.5,size_bg.height*0.45);
        sp_bg.addChild(sp_start,1);
  //      var pos_start = sp_start.getPosition();
        var size_start = sp_start.getContentSize();

        var sp_slide = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.slideStart_png));
        sp_slide.setAnchorPoint(0.5,0.5);
        sp_slide.setPosition(size_start.width*0.5,size_start.height*0.5);
        sp_start.addChild(sp_slide,0);

        var sp_hand = self.m_spHand = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.hand_png));
        sp_hand.setAnchorPoint(0.5,0.5);
        sp_hand.setPosition(size_start.width*0.3,-50);
        sp_start.addChild(sp_hand,1);
        var moveTo = new cc.MoveTo(1.6,size_start.width*1.2,size_start.height+20);
        sp_hand.runAction(cc.sequence(moveTo,cc.callFunc(function(){sp_hand.setPosition(size_start.width*0.3,-50);},this)).repeatForever())

        var sp_orderNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_order_png));
        var sp_orderSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_order_png));
        sp_orderSelected.setOpacity(150);
        var btn_order = new cc.MenuItemSprite(sp_orderNormal,sp_orderSelected,self.order,self);
        btn_order.setAnchorPoint(0.5,0.5);
        btn_order.setPosition(size_bg.width*0.5,size_bg.height*0.35);

        var sp_ruleNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
        var sp_ruleSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rule_png));
        sp_ruleSelected.setOpacity(150);
        var btn_rule = new cc.MenuItemSprite(sp_ruleNormal,sp_ruleSelected,self.rule,self);
        btn_rule.setAnchorPoint(0.5,0.5);
        btn_rule.setPosition(size_bg.width*0.5,size_bg.height*0.25);

        var menu = new cc.Menu(btn_order,btn_rule);
        menu.setPosition(0,0);
        sp_bg.addChild(menu,0);

        self.addTouch();
    },

    startGame:function(pSender){
        var self = this;

        self.m_bg.removeFromParent(true);
        var src = res.bg_choseScene_jpg;
        if(global_isIPad)
        {
            src = res.bg_choseScene_iPad_jpg;
        }

        var sp_bg = self.m_bg = new cc.Sprite(src);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        self.addChild(sp_bg,0);
        var size_bg = sp_bg.getContentSize();

        var sp_scene1Normal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_scene1_png));
        var sp_scene1Selected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_scene1_png));
        var btn_scene1 = new cc.MenuItemSprite(sp_scene1Normal,sp_scene1Selected,self.choseScene,self);
        btn_scene1.setTag(1);
        btn_scene1.setAnchorPoint(0.5,0.5);
        btn_scene1.setPosition(size_bg.width*0.5,size_bg.height*0.31);

        var sp_scene2Normal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_scene2_png));
        var sp_scene2Selected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_scene2_png));
        var btn_scene2 = new cc.MenuItemSprite(sp_scene2Normal,sp_scene2Selected,self.choseScene,self);
        btn_scene2.setTag(2);
        btn_scene2.setAnchorPoint(0.5,0.5);
        btn_scene2.setPosition(size_bg.width*0.5,size_bg.height*0.67);

        var sp_kuang = self.m_spKuang = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_choseKuang_png));
        sp_kuang.setAnchorPoint(0.5,0.5);
        sp_kuang.setPosition(btn_scene2.getPosition());
        sp_bg.addChild(sp_kuang,1);

        var sp_goNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_go_png));
        var sp_goSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_goSelected_png));
        var btn_go = new cc.MenuItemSprite(sp_goNormal,sp_goSelected,self.go,self);
        btn_go.setAnchorPoint(0.5,0.5);
        btn_go.setPosition(size_bg.width*0.5,size_bg.height*0.08);

        var menu = new cc.Menu(btn_scene1,btn_scene2,btn_go);
        menu.setPosition(0,0);
        sp_bg.addChild(menu);
    },

    order:function(pSender){
        try {
            if (0 != CustomerInfo.phone) {
                GameControler.myRanking();
                GameControler.rankList();

                $("#gameCanvas").css("display", "none");
                $("#phb").css("display", "block");

                $("#btn_return").click(function () {
                    GameService.restart();
                });
            }
            else {
                var lbl_note = new cc.LabelTTF("提交手机号之后，查看排行榜", "Arial", 40);
                lbl_note.setColor(cc.color(255, 0, 0, 255));
                lbl_note.setAnchorPoint(0.5, 0.5);
                lbl_note.setPosition(cc.winSize.width * 0.5, cc.winSize.height * 0.15);
                this.m_bg.addChild(lbl_note)

                this.scheduleOnce(function () {
                    lbl_note.removeFromParent(true);
                }, 0.5);
            }
        }
        catch (e){
            alert(e);
        }
    },

    rule:function(pSender){
        var menu = new cc.Menu();
        menu.setPosition(0,0);

        var src = res.bg_rule_jpg;
        //if(global_isIPad)
        //{
        //    src = res.bg_rule_iPad_jpg;
        //}
        var btn_bg = new cc.MenuItemImage(src,src,function(){},this);
        btn_bg.setAnchorPoint(0,0);
        btn_bg.setPosition(0,0);
        var size_bg = btn_bg.getContentSize();
        if(global_isIPad)
        {
            btn_bg.setScale(cc.winSize.width/size_bg.width,cc.winSize.height/size_bg.height);
        }

        var sp_reNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        var sp_reSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        sp_reSelected.setOpacity(150);
        var btn_return = new cc.MenuItemSprite(sp_reNormal,sp_reSelected,function(){
            menu.removeFromParent(true);
        },this);
        btn_return.setAnchorPoint(0.5,0.5);
        btn_return.setPosition(cc.winSize.width*0.5,cc.winSize.height*0.05);

        menu.addChild(btn_bg,0);
        menu.addChild(btn_return,1);
        this.addChild(menu,2);
    },

    choseScene:function(pSender){
        var tag = pSender.getTag();
        if(this.m_index != tag) {
            this.m_index = tag;
            this.m_spKuang.setPosition(pSender.getPosition());
        }
    },

    go:function(pSender){
        cc.audioEngine.playMusic(res.music_mp3,true);
        this.m_bg.removeFromParent(true);

        var src = "res/guide_"+this.m_index+".jpg";
        if(global_isIPad)
        {
            src = "res/guide_iPad"+this.m_index+".jpg";
        }

        var sp_bg = this.m_bg = new cc.Sprite(src);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);

        //if(global_isIPad)
        //{
        //    sp_bg.setScale(cc.winSize.width/size_bg.width,cc.winSize.height/size_bg.height);
        //}
        this.addChild(sp_bg,0)

        var sp_goNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_go_png));
        var sp_goSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_goSelected_png));
        var btn_go = new cc.MenuItemSprite(sp_goNormal,sp_goSelected,this.go2,this);
        btn_go.setAnchorPoint(0.5,0.5);
        btn_go.setPosition(cc.winSize.width/2,cc.winSize.height*0.15);

        var menu = new cc.Menu(btn_go);
        menu.setPosition(0,0);
        this.addChild(menu,1);
    },

    go2:function(pSender){
        if(this.m_index == 1) {
            cc.director.runScene(new PlayingScene());
        }
        else {
            cc.director.runScene(new PlayingScene2());
        }
    },

    cutStartGame:function(){
        var self = this;
        var sp_coverNormal = new cc.Sprite(res.indexBg_jpg);
        sp_coverNormal.setOpacity(0);
        var sp_coverSelected = new cc.Sprite(res.indexBg_jpg);
        sp_coverSelected.setOpacity(0);

        var btn_cover = new cc.MenuItemSprite(sp_coverNormal,sp_coverSelected,function(){},this);
        btn_cover.setAnchorPoint(0,0);
        btn_cover.setPosition(0,0);
        var menu = new cc.Menu(btn_cover);
        menu.setPosition(0,0);
        self.m_bg.addChild(menu,10);

        var pos = self.m_btnStart.getPosition();
        self.m_btnStart.removeFromParent(true);
//        self.m_spHand.removeFromParent(true);

        var sp_start1 = new cc.Sprite(res.sp_start_png);
        var size_start = sp_start1.getContentSize();
        sp_start1.setTextureRect(cc.rect(0,0,size_start.width*0.5,size_start.height));
        sp_start1.setAnchorPoint(0.5,0.5);
        sp_start1.setPosition(pos.x-size_start.width*0.25,pos.y);
        self.m_bg.addChild(sp_start1,2);

        var sp_start2 = new cc.Sprite(res.sp_start_png);
        sp_start2.setTextureRect(cc.rect(size_start.width*0.5,0,size_start.width*0.5,size_start.height));
        sp_start2.setAnchorPoint(0.5,0.5);
        sp_start2.setPosition(pos.x+size_start.width*0.25,pos.y);
        self.m_bg.addChild(sp_start2,2);

        var move1 = new cc.MoveBy(0.5,-200,-200);
        var move2 = new cc.MoveBy(0.5,200,-200);
        var ang1 = new cc.rotateBy(0.5,-360);
        var ang2 = new cc.rotateBy(0.5,360);

        sp_start1.runAction(cc.sequence(cc.spawn(move1,ang1),cc.callFunc(function(){
            this.removeFromParent(true);
            cc.eventManager.removeListener(self.m_listener);
            self.startGame();
        },sp_start1)));
        sp_start2.runAction(cc.sequence(cc.spawn(move2,ang2),cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_start2)));
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

        var angel = Math.atan((endedPos.y-beganPos.y)/(endedPos.x-beganPos.x));
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


    addTouch:function() {
        var self = this;
        var is_oneTouch = false;
        var firstPos = undefined;
        var isStartGame = false;

        self.m_listener = new cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                if (!is_oneTouch) {
                    is_oneTouch = true;
                    var pos = touch.getLocation();
                    self.m_beganPos = pos;
                    self.m_preTouchPos1 = pos;

                    var myData = new Date();
                    last_update = myData.getSeconds() * 1000 + myData.getMilliseconds();
                    return true;
                }

                return false;
            },
            onTouchMoved: function (touch, event) {
                var pos = touch.getLocation();
                //               var pos_target = self.m_btnStart.convertToNodeSpace(pos);

                //划线
                var preTouchPos2 = self.m_preTouchPos2;
                if (preTouchPos2) {
                    var preTouchPos1 = self.m_preTouchPos1;
                    if ((preTouchPos2.x - preTouchPos1.x >= 0 && pos.x - preTouchPos2.x <= 0)
                        || (preTouchPos2.x - preTouchPos1.x <= 0 && pos.x - preTouchPos2.x >= 0)
                        || (preTouchPos2.y - preTouchPos1.y >= 0 && pos.y - preTouchPos2.y <= 0) ||
                        (preTouchPos2.y - preTouchPos1.y <= 0 && pos.y - preTouchPos2.y >= 0)) {
                        //cc.audioEngine.playEffect(res.qie_mp3);
                        self.locus(self.m_beganPos, preTouchPos2);
                        self.m_beganPos = pos;
                        self.m_preTouchPos1 = pos;
                        self.m_preTouchPos2 = undefined;

                        var myData = new Date();
                        last_update = myData.getSeconds() * 1000 + myData.getMilliseconds();
                    }
                    else {
                        var myData = new Date();
                        var curTime = myData.getSeconds() * 1000 + myData.getMilliseconds();
                        if (curTime - last_update > frequency) {
                            last_update = curTime;
                            self.locus(self.m_beganPos, pos);
                            self.m_beganPos = pos;
                            self.m_preTouchPos1 = pos;
                            self.m_preTouchPos2 = undefined;
                        }
                        else {
                            self.m_preTouchPos1 = self.m_preTouchPos2;
                            self.m_preTouchPos2 = pos;
                        }
                    }
                }
                else {
                    self.m_preTouchPos2 = pos;
                }

                if (self.m_btnStart) {
                    if (!firstPos) {
                        //没有第一次触摸开始按钮

                        var pos_target = self.m_btnStart.convertToNodeSpace(pos);
                        var size_target = self.m_btnStart.getContentSize();
                        var rect_target = cc.rect(0, 0, size_target.width, size_target.height);
                        if (cc.rectContainsPoint(rect_target, pos_target)) {
                            //第一次触摸开始按钮
                            firstPos = pos;
                        }
                    } else {
                        //已经触摸过第一按钮
                        var dis = Math.sqrt((firstPos.x - pos.x) * (firstPos.x - pos.x) + (firstPos.y - pos.y) * (firstPos.y - pos.y));
                        if (dis > const_dis) {
                            //                     cc.eventManager.removeListener(self.m_listener);
                            if (!isStartGame) {
                                isStartGame = true;
                                self.cutStartGame();
                            }
                            //                     self.locus(self.m_beganPos, pos);
                            //                  return;
                        }
                    }
                }


            },
            onTouchEnded: function (touch, event) {

                var pos = touch.getLocation();
                self.m_preTouchPos1 = undefined;
                self.m_preTouchPos2 = undefined;
                //画轨迹
                var beganPos = self.m_beganPos;
                self.locus(beganPos, pos);

                is_oneTouch = false;
                firstPos = undefined;
            },
            onTouchCanceled: function (touch, event) {

            }
        });
        cc.eventManager.addListener(self.m_listener, self);
    }

})

var MyScene = cc.Scene.extend({

    ctor:function () {
        this._super();
        this.addChild(new MyLayer());
    }
});/**
 * Created by Administrator on 2014/12/23.
 */
