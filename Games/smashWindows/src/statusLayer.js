var StatusLayer = cc.Layer.extend({
    _labelCoin:null,
    _labelStart:null,
    _labelEnd:null,
    _coins:0,
    _endMenu:null,
    _labelTime:null,
    _startTime:8,
    _winSize:null,
    _gameRuler:"游戏规则:\n点击开灯的黄色窗户\n\n",
    _leftMenuItemOffsetX:-200,
    _rightMenuItemOffsetX:-10,
    _MenuItemOffsetY:-280,
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        this._winSize = cc.director.getWinSize();
        g_score_site.x = this._winSize.width/2+20;
        g_score_site.y =  this._winSize.height - 40;
        this._labelCoin = cc.LabelTTF.create("0分", "Helvetica", 30);
        this._labelCoin.setColor(cc.color(255,0,0));//black color
        this._labelCoin.setPosition(g_score_site.x,g_score_site.y);
        this.addChild(this._labelCoin);

        this._labelTime = cc.LabelTTF.create("时间："+g_time+"秒", "Helvetica", 30);
        this._labelTime.setColor(cc.color(255,0,0));//black color
        this._labelTime.setPosition(cc.p(this._winSize.width/4-30, this._winSize.height - 35));
        this.addChild(this._labelTime);

        this._labelStart = cc.LabelTTF.create(this._gameRuler+this._startTime, "Helvetica", 40);
        this._labelStart.setColor(cc.color(255,0,0));//black color
        this._labelStart.setPosition(cc.p(this._winSize.width/2+10,this._winSize.height/2));
        this._labelStart.textAlign=cc.TEXT_ALIGNMENT_CENTER;
        this.addChild(this._labelStart,3);

        var shareItem = new cc.MenuItemSprite(new cc.Sprite(res.share_png),null, null,this.shareClick,this);
        shareItem.attr({x:this._winSize.width/2+this._rightMenuItemOffsetX ,
            y:this._winSize.height/2+this._MenuItemOffsetY,anchorX:0,anchorY:0,visible:false});

        var restartItem = cc.MenuItemSprite.create(
            cc.Sprite.create(res.replay_png),null, null,this.restartClick,this);
        restartItem.attr({x:this._winSize.width/2 +this._leftMenuItemOffsetX,
            y:this._winSize.height/2+this._MenuItemOffsetY,anchorX:0,anchorY:0,visible:false});

        var awardItem = new cc.MenuItemSprite(new cc.Sprite(res.award_png),null, null,this.awardClick,this);
        awardItem.attr({x:this._winSize.width/2+this._leftMenuItemOffsetX ,
            y:this._winSize.height/2+this._MenuItemOffsetY,anchorX:0,anchorY:0,visible:false});

        var shareGuide =  new cc.MenuItemSprite(new cc.Sprite(res.share_guide_png),null, null,this.shareGuideClick,this);
        shareGuide.attr({x:0 ,y:0,anchorX:0,anchorY:0,visible:false});

        this._endMenu = new cc.Menu(shareItem,restartItem,awardItem,shareGuide);
        this._endMenu.attr({x:0,y:0,anchorX:0,anchorY:0});
        this._endMenu.visible =false;
        this.addChild(this._endMenu,4);

        this.scheduleUpdate();
        this.schedule(this.onTime,1,200,0);
    },
    shareGuideClick:function(){
        this._endMenu.children[3].visible = false;
    },
    shareClick:function(){
        this._endMenu.children[3].visible = true;
    },
    restartClick:function(){
        window.location.href="game.html";
    },
    awardClick:function(){
        //window.location.href="show.jsp?score="+g_score;
        alert("活动已经结束，感谢关注贵阳国贸！！");
    },
    onTime:function(){
        if(gameState =="ready"){
           if(this._startTime > 0){
               this._labelStart.string = this._gameRuler + this._startTime.toString();
               this._startTime--;
           }else{
                this._labelStart.visible = false;
                gameState = "running";
           }
        }
        else if(gameState=="running"){
            g_time = g_time-1;
            this._labelTime.string = "时间"+g_time+"秒";
        }
        else if(gameState=="end"){
            var endPG = cc.Sprite.create(res.endPG_png);
            endPG.attr({x:this._winSize.width/2,y:this._winSize.height/2});
            this.addChild(endPG,1);
            this._labelStart.fontSize = 38;
            if(g_score< g_awardLine){
                this._labelStart.string = "真厉害\n您砸坏了"+(g_awardLine-g_score)+"个窗户！";
                this._endMenu.children[0].visible = true;
                this._endMenu.children[1].visible = true;
            }else {
                this._endMenu.children[0].visible = true;
                this._endMenu.children[2].visible = true;
                this._labelStart.string ="真厉害\n您砸坏了"+(g_awardLine-g_score)+"个窗户！";
            }
            this._endMenu.visible = true;
            this._labelStart.visible = true;
        }
    },
    update :function(){
        if(gameState=="running"){
            this._labelCoin.string = g_score+"分";
            if(g_time==0){
                gameState="end";
            }
        }else if(gameState=="end"){
            window.shareData.tTitle = "万圣节我砸了"+g_score+"个窗户，赢得了国贸广场大奖";
            window.appMessage.tTitle ="万圣节我砸了"+g_score+"个窗户，赢得了国贸广场大奖";

        }
    }
});
