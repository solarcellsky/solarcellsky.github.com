/**
 * Created by Administrator on 2016/3/3.
 */
var GameManage= cc.Node.extend({
    basketBallNode:null,//篮球
    centerPos:cc.p(0,0),//球网的中心点位置
    row:0,//球网的横排数
    col:0,//球网的列排数
    arrNets:[],//球网数组
    bOver:false,//篮球是否已超过一半高度
    prePos:cc.p(0,0),//开始触摸时的位置
    ctor:function(row, col)
    {
        var self= this;
        self._super();
        self.row= ((row== undefined)?3:row);
        self.col= ((col== undefined)?3:col);
        self.bOver= false;
        g_iRow= self.row;
        self.init();
    },
    init:function()
    {
        var self= this;
        self.initNets();
        self.initBasketBall();
    },
    //篮球
    initBasketBall:function()
    {
        var self= this;
        var basketBall= new BasketBall();
        basketBall.setBallScale(BallData.initScale);
        self.addChild(basketBall, 2, 1);

        self.basketBallNode= basketBall;
    },
    initNets:function()
    {
        var self= this;
        self.arrNets= new Array(0);
        for(var i= 0;i< self.row; ++i)
        {
            for(var j= 0; j<self.col; ++j)
            {
                var startPos= cc.p(cc.winSize.width* g_arrNets[i][0].x, cc.winSize.height* g_arrNets[i][0].y);
                var net= new Net(cc.p(0, 0), i* self.col+ j, g_arrNets[i][1]);
                net.getNetSprite().setPosition(cc.pAdd(startPos, cc.p(j* net.getNetSprite().getContentSize().width* g_arrNets[i][2], 0)));
                self.addChild(net, 1, i* self.col+ j);
                self.arrNets.push(net);
            }
        }
    },
    //添加手势
    addHand:function()
    {
        var self= this;
        var arrow= cc.Sprite.create("#arrow.png");
        var desPos1= cc.pAdd(self.basketBallNode.getBasketBall().getPosition(), cc.p(0, self.basketBallNode.getBasketBall().getContentSize().height* 1.2));
        arrow.setPosition(desPos1);
        self.addChild(arrow, 2, 21);

        //手势
        var hand= cc.Sprite.create("#hand.png");
        var desPos2= cc.pAdd(self.basketBallNode.getBasketBall().getPosition(), cc.p(self.basketBallNode.getBasketBall().getContentSize().width* 0.65, self.basketBallNode.getBasketBall().getContentSize().height* (0.1)));
        hand.setPosition(desPos2);
        self.addChild(hand, 2, 22);

        //箭头【由明到暗,逐渐移动】
        var fadeOut= cc.fadeOut(1);
        var moveBy1= cc.moveBy(1, cc.p(0, 20));
        var spawn1= cc.spawn(fadeOut, moveBy1);
        var seq1=cc.sequence(spawn1, cc.callFunc(function(pSender){
            pSender.setPosition(desPos1);
            pSender.setOpacity(255);
        }));
        //arrow.runAction(seq1.repeatForever());

        var seq2=cc.sequence(spawn1.clone(), cc.callFunc(function(pSender){
            pSender.setPosition(desPos2);
            pSender.setOpacity(255);
        }));
        hand.runAction(seq2.repeatForever());
    },
    //添加监听机制
    addListener:function(){
        var self= this;
        var listener= cc.EventListener.create({
            swallowTouches:true,
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan:self.onTouchBegan,
            onTouchMoved:self.onTouchMoved,
            onTouchEnded:self.onTouchEnded
        });
        cc.eventManager.addListener(listener, self);
    },
    onTouchBegan:function(touch, event){
        var self= event.getCurrentTarget();
        if(g_GameStatusTag.Playing_Init!= g_GameStatus) return false;
        g_GameStatus= g_GameStatusTag.Playing_Continue;
        self.prePos= touch.getLocation();
        return true;
    },
    onTouchMoved:function(touch, event){
        var self= event.getCurrentTarget();
        if(g_GameStatusTag.Playing_Continue!= g_GameStatus) return;
        var curPos= touch.getLocation();
        var angle= Math.floor(Math.acos((curPos.x- self.prePos.x)/cc.pDistance(self.prePos, curPos))/　3.1415926* 180);
        if((curPos.x- self.prePos.x)< 0){//二三象限
            if((curPos.y- self.prePos.y)< 0){//三
                angle= 90+ angle;
            }else{
                angle-= (90);
                angle*= (-1);
            }
        }else{//一四
            if((curPos.y- self.prePos.y)< 0)
            {
                angle= 90+ angle;
            }else{
                angle= (90- angle);
            }
        }
        self.getChildByTag(21).setRotation(angle);
    },
    onTouchEnded:function(touch, event){
        var self= event.getCurrentTarget();
        if(g_GameStatusTag.Playing_Continue!= g_GameStatus) return;
        if(cc.pointEqualToPoint(self.prePos, cc.p(0, 0))) return;
        g_GameStatus= g_GameStatusTag.Ready;
        var curPos= touch.getLocation();

        var distance= cc.pDistance(self.prePos, curPos);
        var percent= (distance>= BallData.distance* cc.winSize.height)?0:(1- distance/(BallData.distance* cc.winSize.height));
        self.basketBallNode.setCoff(180+ percent* 180);
        var angle= Math.floor(Math.acos((curPos.x- self.prePos.x)/cc.pDistance(self.prePos, curPos))/　3.1415926* 180);
        //判断在在第几象限
        if((curPos.x- self.prePos.x)< 0){//二三象限
            if((curPos.y- self.prePos.y)< 0){//三
                angle= 360-angle;
            }
        }else{//一四
            if((curPos.y- self.prePos.y)< 0)
            {
                angle= 360-angle;
            }
        }

        //移除对应的精灵
        self.getChildByTag(21).removeFromParent(true);
        self.getChildByTag(22).removeFromParent(true);
        //计算篮球要进的角度
        self.basketBallNode.setAngle(angle);
        //开始投篮
        self.basketBallNode.shoot(self.startTimer);
    },
    //开启定时器
    startTimer:function(pSender){
        var self= pSender.getParent();
        self.scheduleUpdate();
    },
    //球移动&&缩小
    update:function(delta)
    {
        var self= this;
        var basketBall= self.basketBallNode.getBasketBall();
        //获取要移动的速度
        self.calculateSpeed(delta);
        //X方向上的偏移量
        var rad= self.basketBallNode.getAngle()/180* Math.PI;
        var stepX= Math.cos(rad)* delta* self.basketBallNode.getSpeed();
        var stepY= Math.sin(rad)* delta* self.basketBallNode.getSpeed();
        var targetPosX= basketBall.getPositionX()+ stepX;
        var targetPosY= basketBall.getPositionY()+ stepY;

        //移动位置
        basketBall.setPosition(cc.p(targetPosX, targetPosY));
        //移动的同时，旋转&&缩小
        basketBall.setRotation(basketBall.getRotation()+ BallData.rotation);
        //设置缩放系数
        basketBall.setScale(self.calculateBallScale(targetPosY));
        //篮球和四周墙壁的碰撞检测
        self.detectionWall();
        //篮球与网子碰撞
        self.collisionDetection();
    },
    calculateSpeed:function(delta)
    {
        var self= this;
        var speed= self.basketBallNode.getSpeed();
        var angle= self.basketBallNode.getAngle();

        if((angle>180)&&(angle<360)){
            g_iCoff= 100;
            speed+= (delta* g_iCoff);
        }else if((angle>45)&&(angle<135)){
            g_iCoff= self.basketBallNode.getCoff();
            speed-= (delta* g_iCoff);
        }else{
            g_iCoff= 180;
            speed-= (delta* g_iCoff);
        }
        if(speed< 1){
            self.basketBallNode.setSpeed(speed);
            self.basketBallNode.setAngle(270);
        }else{
            self.basketBallNode.setSpeed(speed);
        }
    },
    //计算当前位置时，应该缩小的比例【Y轴方向】
    calculateBallScale:function(posY)
    {
        //当球达到(cc.winSize.height* 0.45的高度时，缩放到最小)
        var scale= BallData.minScale;
        if(posY<= cc.winSize.height* BallData.highScale){
            //球还有队员的距离到达highScale
            var percent= (BallData.highScale* cc.winSize.height- posY)/((BallData.highScale- BallData.initPosY)* cc.winSize.height);
            var stepScale= percent* (BallData.initScale- BallData.minScale);
            scale+= stepScale;
        }
        return scale;
    },
    detectionWall:function()
    {
        var self= this;
        var basketBallNode= self.basketBallNode;
        var basketBall= basketBallNode.getBasketBall();
        ////球的尺寸
        //var ballSize= cc.size(basketBall.getContentSize().width* basketBall.getScaleX(), basketBall.getContentSize().height* basketBall.getScaleY());
        ////内圈
        //var leftLimitX= ballSize.width* 0.5;//左边
        //var rightLimitX= cc.winSize.width- ballSize.width* 0.5;//右边
        //var topLimitY= cc.winSize.height - ballSize.height* 0.5;//上边
        //var bottomLimitY= ballSize.height* 0.5;//下边
        //var angle= basketBallNode.getAngle();
        //
        //if((0<= angle)&& (angle< 90)){
        //    //右边||上边
        //    if(basketBall.getPositionX()>= rightLimitX){
        //        basketBallNode.setAngle(180- angle);
        //    }else if(basketBall.getPositionY()>= topLimitY){
        //        basketBallNode.setAngle(360- angle);
        //    }
        //}else if((angle>= 90)&&(angle< 180)){
        //    //左边||上边
        //    if((basketBall.getPositionX()<= leftLimitX)){
        //        basketBallNode.setAngle(180- angle);
        //    }else if((basketBall.getPositionY()>= topLimitY)){
        //        basketBallNode.setAngle(360- angle);
        //    }
        //}else if((angle>= 180)&&(angle< 270)){
        //    //左边||下边
        //    if((basketBall.getPositionX()<= leftLimitX)){
        //        basketBallNode.setAngle(540- angle);
        //    }else if(basketBall.getPositionY()<= bottomLimitY){
        //        basketBallNode.setAngle(360- angle);
        //    }
        //}else{
        //    //右边||下边
        //    if((basketBall.getPositionX()>= rightLimitX)){
        //        basketBallNode.setAngle(540- angle);
        //    }else if((basketBall.getPositionY()<= bottomLimitY)){
        //        basketBallNode.setAngle(360- angle);
        //    }
        //}
        if((basketBall.getPositionX()<= 0)||
            (basketBall.getPositionX()>= cc.winSize.width)||
            (basketBall.getPositionY()<= 0)||
            (basketBall.getPositionY()>= cc.winSize.height))
        {
            self.gameOver();
        }
    },
    gameOver:function(){
        var self= this;

        self.unscheduleUpdate();
        //投篮结束
        var gameLayer= cc.director.getRunningScene().getChildByTag(1);
        cc.audioEngine.playEffect(res.fail_mp3);
        gameLayer.updateScore(1, 0);
        gameLayer.GameOver();
    },
    //
    //球网和篮球的碰撞检测
    collisionDetection:function()
    {
        var self= this;
        var basketBallNode= self.basketBallNode;
        var basketBall= basketBallNode.getBasketBall();
        if(basketBall.getPositionY()<= cc.winSize.height* 0.4){
            if(self.bOver||((basketBallNode.getSpeed()< 2))){//下降到一半高度以下
                self.unscheduleUpdate();
                //投篮结束
                var gameLayer= cc.director.getRunningScene().getChildByTag(1);
                cc.audioEngine.playEffect(res.fail_mp3);
                gameLayer.updateScore(1, 0);
                gameLayer.GameOver();
            }
            return;
        }
        self.bOver= true;
        //篮球的碰撞区域
        var basketSize= basketBall.getContentSize();
        //缩放后的尺寸
        basketSize= cc.size(basketSize.width* basketBall.getScaleX(), basketSize.height* basketBall.getScaleY());
        var collisionRect= cc.rect(basketSize.width* (-0.5)+ basketBall.getPositionX(), basketSize.height* (-0.5)+ basketBall.getPositionY(), basketSize.width, basketSize.height);

        self.getEffectRow();
        if(g_iRow== self.row) return;
        for(var i= g_iRow* self.col; i< (g_iRow* self.col+ self.col); ++i)
        {
            var net= self.arrNets[i].getNetSprite();
            var size= net.getContentSize();
            //缩放比例后的尺寸
            size= cc.size(size.width* net.getScaleX(), size.height* net.getScaleY());
            var netRect= cc.rect(size.width* (-0.5)+ net.getPositionX(), size.height* 0.4+ net.getPositionY(), size.width, size.height* 0.1);
            if(cc.rectIntersectsRect(collisionRect, netRect))
            {
                cc.audioEngine.playEffect(res.shoot_mp3);
                //如果篮球和球网的碰撞点 在居中的0.8范围内，并且，入蓝角度为(180, 360)判定进球成功，不再反弹
                netRect= cc.rect(size.width* (-0.5+ 0.4)+ net.getPositionX(), size.height* 0.4+ net.getPositionY(), size.width* 0.2, size.height* 0.1);
                if(cc.rectIntersectsRect(collisionRect, netRect)&&(basketBallNode.getAngle()> 180)&&(basketBallNode.getAngle()< 360)){
                    //篮球的上边沿，高于篮框
                    var basketTop= basketBall.getPositionY()+ basketSize.height* 0.5;
                    var netTop= net.getPositionY()+ size.height* 0.5;
                    if(basketTop> netTop){
                        cc.audioEngine.playEffect(res.cheer_mp3);
                        self.unscheduleUpdate();
                        self.runVote(net);
                    }else{
                        //反弹
                        net.getParent().detectionNet(basketBallNode, basketSize, net.getPosition());
                    }
                }else{
                    //反弹
                    net.getParent().detectionNet(basketBallNode, basketSize, net.getPosition());
                }
            }
        }
    },
    //获取有效地区域
    getEffectRow:function(){
        var self= this;
        var basketBallNode= self.basketBallNode;
        var basketBall= basketBallNode.getBasketBall();
        //篮球的碰撞区域
        var basketSize= basketBall.getContentSize();
        //缩放后的尺寸
        basketSize= cc.size(basketSize.width* basketBall.getScaleX(), basketSize.height* basketBall.getScaleY());
        //判断篮球的有效行数
        var bottomPosY= (basketBall.getPositionY()- basketSize.height* 0.5);
        if((basketBallNode.getAngle()>0)&&(basketBallNode.getAngle()< 180)){
            for(var i= self.row- 1;(i>= 0); i--) {
                var net = self.arrNets[i * self.col].getNetSprite();
                var size = net.getContentSize();
                //缩放比例后的尺寸
                size = cc.size(size.width * net.getScaleX(), size.height * net.getScaleY());
                var topY= (net.getPositionY()+ size.height* 0.5);
                if(bottomPosY>= topY){g_iRow= i;}
            }
        }
    },
    //执行入蓝效果
    runVote:function(net)
    {
        var self= this;
        var basketBallNode= self.basketBallNode;
        var basketBall= basketBallNode.getBasketBall();
        net.getParent().setLocalZOrder(2);
        basketBallNode.setLocalZOrder(1);
        //入蓝动作
        var moveTo= cc.moveTo(0.3, net.getPosition());
        var seq= cc.sequence(moveTo, cc.callFunc(function(pSender){
            ////投成功之后，有一个提示返回提示
            var gameLayer= cc.director.getRunningScene().getChildByTag(1);
            gameLayer.updateScore(net.getParent().getScore(), 1);
            ////投篮结束
            gameLayer.GameOver();
        }));
        basketBall.runAction(seq);
    }
});