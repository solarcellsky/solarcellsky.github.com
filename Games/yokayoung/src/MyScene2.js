var last_update = 0;
var frequency = 100;
var const_disappearTime = 0.15;

var const_dis = 50;

var MyLayer = cc.Layer.extend({
    m_bg:undefined,
    m_coverMenu:undefined,
    m_btnStart:undefined,
    m_spRules:undefined,
    m_spjiang:undefined,
    m_listener:undefined,
    m_listener1:undefined,
    m_spHand:undefined,
    m_beganPos:undefined,
    m_preTouchPos1:undefined,
    m_preTouchPos2:undefined,
    ctor:function(){
        this._super();
        this.initUI();
    },

    initUI:function(){
        var self = this;

        var sp_bg = self.m_bg = new cc.Sprite(res.bg_index_jpg);
        sp_bg.setAnchorPoint(0,0);
        sp_bg.setPosition(0,0);
        self.addChild(sp_bg);
        var size_bg = sp_bg.getContentSize();

        var btn_start = self.m_btnStart = new cc.Sprite(res.btn_start_png);
        btn_start.setAnchorPoint(0.5,0.5);
        btn_start.setPosition(size_bg.width*0.5,size_bg.height*0.45);
        sp_bg.addChild(btn_start,0);
        var size_start = btn_start.getContentSize();

        var sp_dao = new cc.Sprite(res.dao2_png);
        sp_dao.setAnchorPoint(0.5,0.5);
        sp_dao.setPosition(size_start.width*0.5,size_start.height*0.5);
        btn_start.addChild(sp_dao,1);

        var sp_hand = self.m_spHand = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.hand_png));
        sp_hand.setAnchorPoint(0.5,0.5);
        sp_hand.setPosition(size_bg.width*0.42,size_bg.height*0.48);
        sp_bg.addChild(sp_hand,2);

        var sp_rules = self.m_spRules = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_rules_png));
        sp_rules.setAnchorPoint(0.5,0.5);
        sp_rules.setPosition(size_bg.width*0.5,size_bg.height*0.15);
        sp_bg.addChild(sp_rules,3);

        var sp_jiang = self.m_spjiang = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_jiang_png));
        sp_jiang.setAnchorPoint(0.5,0.5);
        sp_jiang.setPosition(size_bg.width*0.5,size_bg.height*0.08);
        sp_bg.addChild(sp_jiang,4);

        var moveBy1 = new cc.MoveBy(1.5,size_bg.width*0.35,size_bg.height*0.14);
        sp_hand.runAction(cc.repeatForever(cc.sequence(moveBy1,cc.callFunc(function(){
            sp_hand.setPosition(size_bg.width*0.42,size_bg.height*0.48);
        },self))));

        ////我的红包
        //var sp_redBagNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_packet_png));
        //var sp_redBagSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_packet_png));
        //sp_redBagSelected.setOpacity(150);
        //var sp_redBagDisabled = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_packet_png));
        //sp_redBagDisabled.setOpacity(150);
        //var btn_redBag = new cc.MenuItemSprite(sp_redBagNormal,sp_redBagSelected,self.redBag,self);
        //btn_redBag.setAnchorPoint(0.5,0.5);
        //btn_redBag.setPosition(size_bg.width*0.5,size_bg.height*0.36);
        //
        ////排行榜
        //var sp_orderNormal = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(res_name.btn_order_png));
        //var sp_orderSelected = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(res_name.btn_order_png));
        //sp_orderSelected.setOpacity(150);
        //var sp_orderDisabled= cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(res_name.btn_order_png));
        //sp_orderDisabled.setOpacity(150);
        //var btn_order = new cc.MenuItemSprite(sp_orderNormal,sp_orderSelected,sp_orderDisabled,self.order,self);
        //btn_order.setAnchorPoint(0.5,0.5);
        //btn_order.setPosition(size_bg.width*0.5,size_bg.height*0.29);

        ////游戏礼品
        //var sp_presentNormal = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(res_name.btn_present_png));
        //var sp_presentSelected = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(res_name.btn_present_png));
        //sp_presentSelected.setOpacity(150);
        //var btn_rule = new cc.MenuItemSprite(sp_presentNormal,sp_presentSelected,self.present,self);
        //btn_rule.setAnchorPoint(0.5,0.5);
        //btn_rule.setPosition(size_bg.width*0.5,size_bg.height*0.22);

        //var menu = new cc.Menu(btn_redBag,btn_order);
        //menu.setPosition(0,0);
        //sp_bg.addChild(menu,0);
        self.addTouch();
    },

    cutStartGame:function(){
        cc.audioEngine.playEffect(res.qie_mp3);

        var self = this;
        var sp_coverNormal = new cc.Sprite(res.bg_index_jpg);

        sp_coverNormal.setOpacity(0);
        var sp_coverSelected = new cc.Sprite(res.bg_index_jpg);
        sp_coverSelected.setOpacity(0);

        var btn_cover = new cc.MenuItemSprite(sp_coverNormal,sp_coverSelected,function(){},this);
        btn_cover.setAnchorPoint(0,0);
        btn_cover.setPosition(0,0);

        var menu = new cc.Menu(btn_cover);
        menu.setPosition(0,0);
        self.m_bg.addChild(menu,10);

        var pos = self.m_btnStart.getPosition();
        self.m_btnStart.removeFromParent(true);
        self.m_spHand.removeFromParent(true);
        self.m_spRules.removeFromParent(true);
        self.sp_spjiang.removeFromParent(true);

        var sp_start1 = new cc.Sprite(res.btn_start_png);
        var size_start = sp_start1.getContentSize();
        sp_start1.setTextureRect(cc.rect(0,0,size_start.width*0.5,size_start.height));
        sp_start1.setAnchorPoint(0.5,0.5);
        sp_start1.setPosition(pos.x-size_start.width*0.25,pos.y);
        self.m_bg.addChild(sp_start1,2);

        var sp_start2 = new cc.Sprite(res.btn_start_png);
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
            self.trueStartGame();
        },sp_start1)));
        sp_start2.runAction(cc.sequence(cc.spawn(move2,ang2),cc.callFunc(function(){
            this.removeFromParent(true);
        },sp_start2)));
    },

    trueStartGame:function(pSender){
//        pSender.setEnabled(false);
        cc.audioEngine.playEffect(res.btn_effect_mp3);
 //       global_audio.src = res.btn_effect_mp3;
 //       global_audio.play();
 //       cc.audioEngine.playEffect(res.qie_mp3,false);
//        cc.director.runScene(new PlayingScene());

//        cc.director.runScene(new PlayingScene());
  //      g_startGame(function(){
            cc.director.runScene(new PlayingScene());
  //      });
    },

    addCover:function(){
        var btn_cover = new cc.MenuItemImage(res.null_png,res.null_png,function(){},this);
        btn_cover.setAnchorPoint(0,0);
        btn_cover.setPosition(0,0);

        this.m_coverMenu = new cc.Menu(btn_cover);
        this.m_coverMenu.setPosition(0,0);
        this.m_bg.addChild(this.m_coverMenu,10);
    },

    //我的红包
    redBag:function(pSender){
        g_myRedBag(function(){
        })
    },

    //排行榜
    order:function(pSender){
        var self = this;
  //      self.addCover();
        g_gameRanking(function(){
   //         cc.container.style.display = "none";
            //$("#phb").css("display","block");
            //
            //$("#btn_return")[0].onclick = function(){
            //    cc.container.style.display = "block";
            //    $("#phb").css("display","none");
            //    self.m_coverMenu.removeFromParent(true);
            //};
        })
    },

    //游戏礼品
    present:function(pSender){
        var btn_presentBg = new cc.MenuItemImage(res.bg_present_jpg,res.bg_present_jpg,function(){},this);
        btn_presentBg.setAnchorPoint(0,0);
        btn_presentBg.setPosition(0,0);
        var size_bg = btn_presentBg.getContentSize();

        var menu1 = new cc.Menu(btn_presentBg);
        menu1.setPosition(0,0);
        this.addChild(menu1,1);

        var sp_returnNormal = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        var sp_returnSelected = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(res_name.btn_return_png));
        sp_returnSelected.setOpacity(150);
        var btn_return = new cc.MenuItemSprite(sp_returnNormal,sp_returnSelected,function(){
            menu1.removeFromParent(true);
        },this);
        btn_return.setAnchorPoint(0.5,0.5);
        btn_return.setPosition(size_bg.width*0.5,size_bg.height*0.11);

        var menu2 = new cc.Menu(btn_return);
        menu2.setPosition(0,0);
        btn_presentBg.addChild(menu2);
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

    addTouch:function(){
        var self = this;
        var is_oneTouch = false;
        var firstPos = undefined;
        var isStartGame = false;

        self.m_listener = new cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan:function(touch,event){
                if(!is_oneTouch) {
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
            onTouchMoved:function(touch,event){
                var pos = touch.getLocation();
 //               var pos_target = self.m_btnStart.convertToNodeSpace(pos);

                //划线
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

                if(self.m_btnStart) {
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
                            if(!isStartGame) {
                                isStartGame = true;
                                self.cutStartGame();
                            }
       //                     self.locus(self.m_beganPos, pos);
                            //                  return;
                        }
                    }
                }


            },
            onTouchEnded:function(touch,event){

                var pos = touch.getLocation();
                self.m_preTouchPos1 = undefined;
                self.m_preTouchPos2 = undefined;
                //画轨迹
                var beganPos = self.m_beganPos;
                self.locus(beganPos,pos);

                is_oneTouch = false;
                firstPos = undefined;

                if(self.m_spRules && !isStartGame) {
                    (function show() {
                        $('.gamerules').fadeIn();
                        $('.gamerules').on('click', function () {
                            $(this).fadeOut()
                        });
                        show = null;
                    })()
                }

                if(self.m_spjiang && !isStartGame) {
                    alert('jiang')
                }

            },
            onTouchCanceled:function(touch,event){

            }

        });
        cc.eventManager.addListener(self.m_listener,self);
    }
    
})

var MyScene = cc.Scene.extend({

    ctor:function () {
        this._super();

        var layer = new MyLayer()
        this.addChild(layer);
    }
});/**
 * Created by Administrator on 2014/12/23.
 */
