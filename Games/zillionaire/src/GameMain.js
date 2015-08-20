/**
 * Created by Will on 2015/3/30.
 */
var GameMain = cc.Scene.extend({
    onEnter:function () {
        this._super();
        mainLayer = new GameMainLayer();
        this.addChild(mainLayer);
        mainLayer.init();
    }
});

var GameMainLayer = cc.Layer.extend({
    init:function () {
        this._super();
        _size = cc.director.getWinSize();
        numberArray = [[1,1],[1,2],[1,3,2,2],[1,4,2,3],[1,5,2,4,3,3],[1,6,2,5,3,4],[2,6,3,5,4,4],[3,6,4,5],[4,6,5,5],[5,6],[6,6]]
        tiles_stay = ["#start.png","#thanks.png","#thanks.png","#finish.png"];
        tiles_prize = ["#20yuan.png","#20yuan.png","#20yuan.png","#20yuan.png","#100yuan.png","#Apple.png"];
        tiles_noprize = ["#thanks.png","#thanks.png","#thanks.png","#thanks.png","#thanks.png"];
        dices = [res.z_one,res.z_two,res.z_three,res.z_four,res.z_five,res.z_six];
        scheduleNum = {t1:0.25,s1:13,t2:0.25,s2:13}
        prizeArray = [];
        playFlag = true;
        diceIndex = 0;
        prize = 4;


        var layerbg = new cc.Sprite(res.z_gameBG);
        layerbg.setPosition(_size.width/2,_size.height/2);
        this.addChild(layerbg,0);

        this.createTiles();
        this.scheduleUpdate();

        monkey = new cc.Sprite("#monkey.png");
        monkey.setPosition(_size.width*0.5,_size.height*0.7);
        this.addChild(monkey,2);

        leverage = new cc.Sprite("#leverage.png");
        leverage.setPosition(_size.width*0.5,_size.height*0.7);
        this.addChild(leverage,1);
        leverage.visible = false;

        dice1 = new cc.Sprite(res.z_one);
        dice1.setPosition(_size.width*0.38,_size.height*0.48);
        this.addChild(dice1);

        dice2 = new cc.Sprite(res.z_six);
        dice2.setPosition(_size.width*0.63,_size.height*0.48);
        this.addChild(dice2);

        var menuPlay= new cc.MenuItemImage('#btn_play.png',null,this.onPlay, this);
        menuPlay.setPosition(_size.width / 2, _size.height*0.35);
        menu = new cc.Menu(menuPlay);
        menu.setPosition(0,0);
        this.addChild(menu);

    },
    onPlay:function(){
        if(playFlag){
            var self = this;
            $.post("ajaxPost!randomPrize.action",function(data){
                prize = parseInt(data.msg);
                //prize = 5;
                self.getLocat(prize);  //获取奖品信息====》骰子点数
                playFlag = false;
                g_gameCount --;
                GameControler.startGame();
                self.schedule(self.dice1Action,scheduleNum.t1,scheduleNum.s1);
                self.schedule(self.dice2Action,scheduleNum.t2,scheduleNum.s2);
            });
            monkey.runAction(cc.moveTo(1,cc.p(prizeArray[0].x,prizeArray[0].y+30)));
        }
    },
    dice1Action:function(){
        var i = Math.floor(Math.random()*6);
        dice1.runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)));
        dice1.texture = dices[i];
        diceIndex++;
    },
    dice2Action:function(){
        var i = Math.floor(Math.random()*6);
        dice2.runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)));
        dice2.texture = dices[i];
        diceIndex++;
    },
    dice1ActionOnce:function(){
        dice1.runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)));
        dice1.texture = dices[index1-1];
    },
    dice2ActionOnce:function(){
        dice2.runAction(cc.sequence(cc.scaleTo(0.1,1.1),cc.scaleTo(0.1,1)));
        dice2.texture = dices[index2-1];
    },
    update:function(){
        if(diceIndex == (scheduleNum.s1+scheduleNum.s2)){
            diceIndex = 0;
            this.scheduleOnce(this.dice1ActionOnce,0.7);
            this.scheduleOnce(this.dice2ActionOnce,0.9);
            this.scheduleOnce(this.moveAction,1);
        }
    },
    getLocat:function(p) {
        index1 = 0;
        index2 = 0;
        var locationArray = [];
        for (var i = 0; i < prizeArray.length; i++) {
            switch (p) {
                case 1:     //一等奖
                    if (prizeArray[i].tag == 88) {
                        console.log(i);
                        locationArray.push(i);
                    }
                    break;
                case 2:     //二等奖
                    if (prizeArray[i].tag == 100) {
                        locationArray.push(i);
                    }
                    break;
                case 3:     //三等奖
                case 5:     //杠杆
                    if (prizeArray[i].tag == 20) {
                        locationArray.push(i);
                    }
                    break;
                case 4:     //未中奖
                    if (prizeArray[i].tag == 4) {
                        locationArray.push(i);
                    }
                    break;
                default :
            }
        }
        var tempLocat = Math.floor(Math.random() * locationArray.length);
        console.log("tempLocat====" + locationArray[tempLocat]);
        var tempArray = numberArray[locationArray[tempLocat] - 2];

        var j = Math.floor(Math.random() * (tempArray.length/2))*2;
        index1 = tempArray[j];
        index2 = tempArray[j+1];
        if(Math.random()>0.5){
            index1 = tempArray[j+1];
            index2 = tempArray[j];
        }
    },
    moveAction: function () {
        var action = [];
        var location = index1+index2+1;
        for(var i =0; i<location;i++){
            action.push(cc.moveTo(0.5,cc.p(prizeArray[i].x,prizeArray[i].y+30)));
            action.push(cc.delayTime(0.2));
        }
        action.push(cc.delayTime(0.5));
        action.push(cc.callFunc(function(){
            menu.setEnabled(false);
            if(prize == 5){
                leverage.scale = 0.1;
                leverage.visible = true;
                var moveAction = cc.moveTo(1,cc.p(prizeArray[location-1].x,prizeArray[location-1].y+30));
                var scaleAction1 = cc.scaleTo(0.1,1.3);
                var scaleAction2 = cc.scaleTo(0.9,0.3);
                leverage.runAction(cc.sequence(scaleAction1,cc.spawn(cc.delayTime(1),cc.sequence(cc.scaleTo(0.2,1.4),cc.scaleTo(0.2,1.2),cc.scaleTo(0.2,1.4),cc.scaleTo(0.2,1.2),cc.scaleTo(0.2,1.4))),cc.spawn(moveAction,scaleAction2),cc.delayTime(0.8),cc.callFunc(function(){
                    mainLayer.addChild(new GameEndLayer(),10);
                    playFlag = true;
                })));
            }else{
                mainLayer.addChild(new GameEndLayer(),10);
                playFlag = true;
            }

        }));
        monkey.runAction(cc.sequence(action));
    },
    createTiles: function () {
        tiles_prize = shuffle(tiles_prize);
        tiles_noprize = shuffle(tiles_noprize);
        var tempArray = [];
        for(var i = 0; i < 6; i++){
            tempArray.push(tiles_prize[i]);
            if(i < 5){
                tempArray.push(tiles_noprize[i]);
            }
        }
        if(Math.random()>0.5){
            tempArray.reverse();
        }
        for(var i = 0; i < 15; i++){
            //sprites
            if(i == 0){
                tile = new cc.Sprite(tiles_stay[0]);
            }else if(i == 1){
                tile = new cc.Sprite(tiles_stay[1]);
            }else if(i == 13){
                tile = new cc.Sprite(tiles_stay[2]);
            }else if(i == 14){
                tile = new cc.Sprite(tiles_stay[3]);
            }else{
                tile = new cc.Sprite(tempArray[i-2]);
                if(tempArray[i-2].indexOf("thanks") > -1){
                    tile.tag = 4;
                }else if(tempArray[i-2].indexOf("20") > -1){
                    tile.tag = 20;
                }else if(tempArray[i-2].indexOf("100") > -1){
                    tile.tag = 100;
                }else if(tempArray[i-2].indexOf("Apple") > -1){
                    tile.tag = 88;
                }
            }
            //positions
            if(i<6){
                tile.setPosition(cc.winSize.width*0.14,cc.winSize.height*(0.118*i)+cc.winSize.height*0.3);
            }else if(i<10){
                tile.setPosition(cc.winSize.width*(0.18*(i-5))+cc.winSize.width*0.14,cc.winSize.height*0.89);
            }else{
                tile.setPosition(cc.winSize.width*0.86,cc.winSize.height*0.89-cc.winSize.height*((i-9)*0.118));
            }
            prizeArray.push(tile);
            this.addChild(tile);
        }
    }
});


shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

var sendRequest = function(url, params, isPost, callback, errorcallback){
    if(url == null || url == '')
        return;

    var xhr = cc.loader.getXMLHttpRequest();
    if(isPost){
        xhr.open("POST",url);
    }else{
        xhr.open("GET",url);
    }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            var response = xhr.responseText;
            if(callback)
                callback(response);
        }else if(xhr.readyState == 4 && xhr.status != 200){
            var response = xhr.responseText;
            if(errorcallback)
                errorcallback(response);
        }
    };

    if(params == null || params == ""){
        xhr.send();
    }else{
        xhr.send(params);
    }
};

var listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: this.callOnTouchBegan,
    onTouchMoved: this.callOnTouchMoved,


    callOnTouchBegan:function(touch, event){       //实现 onTouchBegan 事件处理回调函数
        var target = event.getCurrentTarget();      // 获取事件所绑定的 target, 通常是cc.Node及其子类
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);
        if (cc.rectContainsPoint(rect, locationInNode) && target.tag == SpriteTag.target) {       // 判断触摸点是否在按钮范围内
//                    target.opacity = 180;
            return true;
        }
    },
    callOnTouchMoved:function(touch, event){       //实现onTouchMoved事件处理回调函数, 触摸移动时触发
        var target = event.getCurrentTarget();      // 移动当前按钮精灵的坐标位置
        var delta = touch.getDelta();               //获取事件数据: delta
    }
});
