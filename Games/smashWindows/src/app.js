var playLayer = cc.Layer.extend({
    //Field Detail
    _brick:null,
    _targetWindowIndex:-1,
    _bong:null,
    enum_state:{off:0,light:1,broken:2},
    _dolls:[],
    _brickSpeed:0.25,
    _windowsRollSpeed:0.9,
    _windowsRowNo:5,//include a reserve row
    _windowsColNo:3,
    _windowsCount:15,//include 3 reserve window
    _house_top:692,
    _house_bottom:69,
    _windowHeight:95,
    _topWindowY:531,
    _bottomWindowY:-49,
    _windowGap:59,
    _accelerate:0.02,
    //Method Detail
    ctor : function(){
        //1. call super class's ctor function
        this._super();
    },

    init:function(){
        this._super();
        this.createSprite();
        this.scheduleUpdate();
        this.schedule(this.onTimer,this._windowsRollSpeed,200,0);
        this.schedule(this.onAccelerate,1,200,0);
    },
    onAccelerate:function(){
        this._windowsRollSpeed = this._windowsRollSpeed-this._accelerate;
        this.schedule(this.onTimer,this._windowsRollSpeed,200,0);
    },
    createSprite:function(){
        this.createHouse();
    },

    createHouse:function(){
        var house_top = new cc.Sprite(res.house_top_png);
        house_top.attr({ x:0,y:this._house_top,anchorX:0,anchorY:0});
        this.addChild(house_top,5);

        var house_bottom = new cc.Sprite(res.house_bottom_png);
        house_bottom.attr({ x:0,y:0,anchorX:0,anchorY:0});
        this.addChild(house_bottom,5);

        var menu =new cc.Menu;
        menu.attr({ anchorX:0,anchorY:0,x:0,y:0 });
        for(var row=0,z= 0,pos;row < this._windowsRowNo;row++){ //row
            for (var col = 0;col < this._windowsColNo;col++,z++){ //col
                pos = this.getBlockPos(z);
                menu.addChild(this.createWindows(z,pos));
                this.createBong(z,pos);
            }
        }
        this.addChild(menu,2);
    },
    createWindows: function (z,pos) {
        var spriteIndex = this.getARandomWindow();
        g_windows[z].sprite = cc.MenuItemSprite.create(
            this.getWindowSprite(spriteIndex),null,null,this.getClickEven(),this);
        g_windows[z].sprite.attr({
            anchorX:0,anchorY:0,x:parseInt(pos.x),y:parseInt(pos.y) });
        g_windows[z].sprite.tag = z;
        g_windows[z].state = this.assertWindowState(spriteIndex);
        g_windows[z].coinType =this.getWindowCoinType(spriteIndex);
        return g_windows[z].sprite;
    },
    getWindowCoinType:function(spriteIndex){
        return spriteIndex %g_coinTypeCount;
    },
    getARandomWindow:function(){
        return random(0,5);
    },
    assertWindowState: function (spriteIndex) {
        if(spriteIndex<3) return 1;
        else return 0;
    },

    getBlockPos :function(z){
        var position={};
        var s_site = g_windows[z].site;
        position.x = s_site.split(",")[0];
        position.y = s_site.split(",")[1];
        return position;
    },

    createBong: function (z,pos) {
        g_windows[z].bong = cc.Sprite.create(res.windowBong_png);
        g_windows[z].bong.attr({visible:false,x:pos.x-20,y:pos.y-20,anchorX:0,anchorY:0 });
        g_windows[z].bong.tag = z;
        this.addChild(g_windows[z].bong,4);
        cc.log( "Y="+g_windows[z].bong.y);
    },

    getWindowSprite:function(index){
        return new cc.Sprite(windowsRes[index]);
    },

    getClickEven:function(){
        return this.onClick;
    },

    onTimer:function(){
        if(gameState=="running") {
            for (var i = 0; i < this._windowsCount; i++) {
                if (g_windows[i].sprite.y > this._house_top - 20) {
                    this.setAsReserveWindow(i)
                }
                var moveBy = cc.moveBy(this._windowsRollSpeed, cc.p(0, this._windowHeight + this._windowGap));
                g_windows[i].sprite.runAction(moveBy);
                g_windows[i].bong.runAction(moveBy.clone());
//                cc.log("g_windows[i].bong.y" +g_windows[i].bong.y)
            }
        }
    },

    setAsReserveWindow:function(i){
        g_windows[i].sprite.attr({x:g_windows[i].sprite.x,y:this._bottomWindowY+20});
        g_windows[i].bong.attr({x:g_windows[i].bong.x,y:this._bottomWindowY });
        g_windows[i].bong.visible = false;
        var spriteIndex = this.getARandomWindow();
        g_windows[i].sprite.setNormalImage(this.getWindowSprite(spriteIndex));
        g_windows[i].state = this.assertWindowState(spriteIndex);
    },

    dollSlideDown:function(windowX,windowY){
        var doll = new cc.Sprite(dollsRes[random(0,dollsRes.length)]);
        doll.attr({
            x:windowX+20,y:windowY,visible:true,anchorX:0.5,anchorY:0.5});
        var moveTo = cc.moveTo(1, cc.p(random(windowX-20,windowX+20),40));
        var rotateBy = cc.rotateBy(1,randomOr(-1,1)*90);
        var scaleBy = cc.scaleBy(0.2, 1.5);//0.1 second and 1.5 times

        doll.runAction(cc.sequence(scaleBy));
        doll.runAction(moveTo);
        doll.runAction(rotateBy);
        this.addChild(doll,5);
    },

    coinFly:function(windowX,windowY,coinType){
        var coinIndex = coinType;
        cc.log("coinIndex="+coinIndex);
        var coinImg = coinRes[coinIndex].coinType;
        var coin = new cc.Sprite(coinImg);
        coin.attr({
            x:windowX,
            y:windowY,
            visible:true,anchorX:0.5,anchorY:0.5});
        var moveTo = cc.moveTo(0.5,cc.p(g_score_site.x,g_score_site.y));
        var removeSelf = cc.removeSelf(true);
        coin.runAction(cc.sequence(moveTo,removeSelf));
        coin.runAction(cc.fadeOut(0.8));
        this.addChild(coin,5);
    },

    onClick:function(pSender){
        if(gameState=="running") {
                if (g_windows[pSender.tag].state == this.enum_state.light) {
                    var brickSprite = new cc.Sprite(res.brick_png);
                    this.addChild(brickSprite,5);
                    brickSprite.attr({x: random_x_axis(), y: 0});
                    var moveTo = cc.moveTo(this._brickSpeed, cc.p(pSender.x, pSender.y));
                    var rotateBy = cc.rotateBy(this._brickSpeed, 720);
                    var removeSelf = cc.removeSelf(true);
                    brickSprite.runAction(cc.sequence(moveTo,removeSelf));
                    brickSprite.runAction(rotateBy);

                    g_windows[pSender.tag].bong.visible = true;
                    cc.log("g_windows[pSender.tag].bong.x = ;"+g_windows[pSender.tag].bong.x+"  y="+g_windows[pSender.tag].bong.y);
                    g_windows[pSender.tag].state = this.enum_state.broken;
                    this.dollSlideDown(pSender.x,pSender.y);
                    this.coinFly(pSender.x,pSender.y,g_windows[pSender.tag].coinType);
                    g_score++;
                }
        }
    }

});

var playScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new BackgroundLayer());
        var layer = new playLayer();
        layer.init();
        this.addChild(layer);
        this.addChild(new StatusLayer());
        cc.audioEngine.playMusic(res.background_mp3,true);
    }
});
