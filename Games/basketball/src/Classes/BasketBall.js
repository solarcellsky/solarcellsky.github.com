/**
 * Created by Administrator on 2016/3/3.
 */

if(typeof BallData== "undefined"){
    var BallData= {
        initPosY:0.25,//初始高度
        initScale:1,//初始缩放比例系数
        minScale:0.5,//最小是的比例系数
        highScale:0.45,//缩放到最小时的高度
        rotateTime:2,//转动时长
        rotation:3,//转动步幅
        speed:500,//运动速度
        distance:0.5//超过多长距离时,能投到最高
    }
}
var BasketBall= cc.Node.extend({
    basketSprite:null,
    rotateTime:0,//旋转时间
    callback:null,//回调函数
    angle:0,//篮球运动角度(0-360)
    repeatTimes:0,//循环次数
    speed:BallData.speed,//篮球的速度
    coff:0,//阻力
    ctor:function(angle)
    {
        var self= this;
        self._super();
        self.angle= ((angle== undefined)?90:angle);
        self.init();
    },
    init:function()
    {
        var self= this;
        self.initBasketBall();
    },
    //初始化篮球
    initBasketBall:function()
    {
        var self= this;
        //球下面的阴影
        var shadow= cc.Sprite.create("#shadow.png");
        shadow.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* (BallData.initPosY- 0.075)));
        shadow.setScale(0.75);
        self.addChild(shadow, 1, 0);

        var basketball= cc.Sprite.create("#basketball.png");
        basketball.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* BallData.initPosY));
        self.addChild(basketball, 1, 1);

        //圆不变形
        basketball.setScale(1, 1* cc.view.getScaleX()/ cc.view.getScaleY());
        self.basketSprite= basketball;
    },
    //获取篮球运行角度
    getAngle:function()
    {
        return this.angle;
    },
    //重新设置篮球的运行角度
    setAngle:function(angle){
        var self= this;
        self.angle= ((angle== undefined)?90:angle);
    },
    //获取篮球运行角度
    getCoff:function()
    {
        return this.coff;
    },
    //重新设置篮球的运行角度
    setCoff:function(coff){
        var self= this;
        self.coff= ((coff== undefined)?0:coff);
    },
    //获取篮球的速度
    getSpeed:function()
    {
        return this.speed;
    },
    //设置篮球的速度
    setSpeed:function(speed)
    {
        this.speed= ((speed== undefined)?BallData.speed:speed)
    },
    //获取篮球精灵
    getBasketBall:function()
    {
        var self= this;
        return self.basketSprite;
    },
    //设置篮球的缩放比例系数
    setBallScale:function(scale)
    {
        var self= this;
        self.basketSprite.setScale((scale== undefined)?0.5:scale);
    },
    //投篮
    shoot:function(callback)
    {
        var self= this;
        self.rotateTime= 0;
        g_iBasketBallNumber--;
        self.callback= ((callback== undefined)?null:callback);
        //原地旋转2s后，投篮【开启定时器，运动(根据距离的远近，缩小对象)】
        //self.scheduleUpdate();
        //下落上升几次的同时，缩小放大
        var moveDown= cc.moveBy(0.3, cc.p(0, cc.winSize.height* 0.05* (-1)));
        var moveUp= cc.moveBy(0.3, cc.p(0, cc.winSize.height* 0.05));

        var scaleSmall= cc.scaleTo(0.3, 0.8);
        var scaleBig=cc.scaleTo(0.3, 1);

        var spawn1= cc.spawn(moveDown, scaleSmall);
        var spawn2= cc.spawn(moveUp, scaleBig);

        var seq= cc.sequence(spawn1, spawn2);
        self.basketSprite.runAction(seq.repeat(5));
        //球旋转
        var rotateBy= cc.rotateBy(0.01, BallData.rotation);
        self.basketSprite.runAction(rotateBy.repeatForever());

        //阴影配合着放大缩小，同时，配合致位置移动
        var moveDown_1= cc.moveBy(0.3, cc.p(0, cc.winSize.height* 0.025* (-1)));
        var moveUp_1= cc.moveBy(0.3, cc.p(0, cc.winSize.height* 0.025));

        var scaleSmall_1= cc.scaleTo(0.3, 1);
        var scaleBig_1=cc.scaleTo(0.3, 0.75);

        var spawn1_1= cc.spawn(moveDown_1, scaleSmall_1);
        var spawn2_1= cc.spawn(moveUp_1, scaleBig_1);

        var seq_1= cc.sequence(spawn1_1, spawn2_1, cc.callFunc(function(pSender){
            cc.audioEngine.playEffect(res.hit_mp3);
            self.repeatTimes++;
            if(self.repeatTimes== 5){
                pSender.stopAllActions();
                pSender.removeFromParent(true);
                self.callback(self);
            }
        }));
        self.repeatTimes= 0;
        self.getChildByTag(0).runAction(seq_1.repeat(5));
    },
    update:function(delta)
    {
        var self= this;
        self.rotateTime+=delta;
        if(self.rotateTime>= BallData.rotateTime){
            self.callback(self);
            self.unscheduleUpdate();
            return;
        }
        self.basketSprite.setRotation(self.basketSprite.getRotation()+ BallData.rotation);
    }
});