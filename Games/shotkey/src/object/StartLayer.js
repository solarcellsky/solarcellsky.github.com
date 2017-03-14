/**
 * Created by Administrator on 2015/9/14.
 */
var StartLayer = cc.Layer.extend({

    title:null,
    startBtn:null,
    maxText:null,
    ctor:function(){
        this._super();

        this.title = new cc.Sprite("#title.png");
        this.title.x = GAME.width/2;
        this.title.y = GAME.height/2 + 200;

        /*this.maxText = new cc.LabelTTF("目前最高获得0元,快来挑战","SimHei",24);
        this.maxText.x = GAME.width/2 -80;
        this.maxText.y = GAME.height/2 + 355;*/


        this.startBtn = new JY.Button("startBtn.png");
        this.startBtn.setClickMode(JY.Button.CLICK_MODE_WATER_DROP);

        this.startBtn.x = GAME.width/2;
        this.startBtn.y = GAME.height/2 -100;
        this.startBtn.setDelayTime(1);

        this.startBtn.addTouchEventListener(this.startBtnListener,this);
		this.updateMax();

    },
	updateMax:function(){
		
		
	
	},
    onEnter:function(){
        this._super();

        this.addChild(this.title);
       // this.addChild(this.maxText);
        this.addChild(this.startBtn);
    },
    startBtnListener:function(selector,type){
        switch(type){
            case JY.Button.TOUCH_BEGAN:

                var scene = cc.director.getRunningScene();
                scene.playLayer = new PlayLayer();

                scene.addChild(scene.playLayer);

                this.removeFromParent();




                break;

        }

    }

});

