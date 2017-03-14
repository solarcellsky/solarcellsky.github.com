/**
 * Created by Administrator on 2016/3/3.
 */
var Net= cc.Node.extend({
    net:null,//网子精灵
    score:0,//网子的得分
    ctor:function(pos, tag, scale)
    {
        var self= this;
        self._super();
        self.init(pos, tag, scale);
    },
    init:function(pos, tag, scale)
    {
        var self= this;
        //网子
        var net= cc.Sprite.create("#nets.png");
        net.setPosition(pos);
        self.addChild(net, 1);
        net.setScale(((scale== undefined)?0.5:scale));
        self.net= net;

        if(tag!= undefined)
        {
            var size= cc.size(net.getContentSize().width* net.getScale(), net.getContentSize().height* net.getScale());
            var number= cc.Sprite.create(g_arrNetsInI[tag][0]);
            number.setPosition(cc.pAdd(pos, cc.p(size.width* (g_arrNetsInI[tag][2].x), size.height* g_arrNetsInI[tag][2].y)));
            number.setScale(1/ net.scale);
            self.net.addChild(number, 1, 1);
            self.score= g_arrNetsInI[tag][1];
        }
    },
    getNetSprite:function()
    {
        return this.net;
    },
    //检测篮球和球框上部的碰撞
    detectionNet:function(basketBallNode, size, pos)
    {
        var basketBall= basketBallNode.getBasketBall();
        //篮球的碰撞区域
        var basketSize= basketBall.getContentSize();
        //缩放后的尺寸
        basketSize= cc.size(basketSize.width* basketBall.getScaleX(), basketSize.height* basketBall.getScaleY());

        //根据球网的位置，获取球网上半部分矩形的位置(假设球框占总尺寸的0.1)
        var topY= pos.y+ size.height* 0.5+ basketSize.height* 0.5;//上
        var bottomY= pos.y- size.height* 0.5- basketSize.height* 0.5;//下
        var leftX= pos.x- size.width* 0.5- basketSize.width* 0.5;
        var rightX= pos.x+ size.width* 0.5+ basketSize.width* 0.5;

        var angle= basketBallNode.getAngle();

        if((0<= angle)&& (angle< 90)){
            //左边||下边
            if((basketBall.getPositionX()<= leftX)){
                basketBallNode.setAngle(180- angle);
            }/*else if((basketBall.getPositionY()>= bottomY)){
                basketBallNode.setAngle(360- angle);
            }*/
        }else if((angle>= 90)&&(angle< 180)){
            //右边||下边
            if((basketBall.getPositionX()>= rightX)){
                basketBallNode.setAngle(180- angle);
            }/*else if((basketBall.getPositionY()>= bottomY)){
                basketBallNode.setAngle(360- angle);
            }*/
        }else if((angle>= 180)&&(angle< 270)){
            //右边||上边
            if((basketBall.getPositionX()>= rightX)){
                basketBallNode.setAngle(540- angle);
            }else if((basketBall.getPositionY()>= topY)){
                basketBallNode.setAngle(360- angle);
            }
        }else{
            //左边||上边
            if((basketBall.getPositionX()<= leftX)){
                basketBallNode.setAngle(540- angle);
            }else if((basketBall.getPositionY()>= topY)){
                basketBallNode.setAngle(360- angle);
            }
        }
        if(basketBallNode.getSpeed()< 1){
            //获取球框在球网的哪个方向[左还是右]
            if(basketBall.getPositionX()> this.net.getPositionX()){
                basketBall.setPosition(cc.pAdd(basketBall.getPosition(), cc.p(2, 0)));
            }else{
                basketBall.setPosition(cc.pAdd(basketBall.getPosition(), cc.p(-2, 0)));
            }

        }
    },
    getScore:function()
    {
        return this.score;
    }
});