/**
 * Created by Administrator on 2015/9/15.
 *
 * 游戏操作控制层
 */
var OperationLayer = cc.Layer.extend({



    ctor:function(){
        this._super();
    },
    onEnter:function(){
        this._super();

        //绑定点击屏幕事件
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this)
        },this);
        this.scheduleUpdate();
    },
    onTouchBegan:function(touch,event){


        var target = event.getCurrentTarget();
        var location = touch.getLocation();
        var parent = target.getParent();



        parent.playLayer.shotKey();

        //parent.playerLayer.playerJump();


        return true;
    },
    onTouchEnded:function(touch,event){

        this.isTouching = false;
    },
    //退出  清除触摸屏幕事件
    onExit:function(){
        cc.eventManager.removeListener(cc.EventListener.TOUCH_ONE_BY_ONE);
    }


});