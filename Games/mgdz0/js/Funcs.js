/**
 * Created by going on 2015/8/4.
 */
function Dog(){
    base(this,LSprite,[]);
    var self = this;
    var list = LGlobal.divideCoordinate(430,82,1,5);
    var data = new LBitmapData(imglist["dog"],0,0,86,82);
    self.anime = new LAnimation(self,data,[
        [list[0][0],list[0][1],list[0][2],list[0][3],list[0][4]]
    ])
    self.movedirec = "right";
    self.moveindex = 0;
    self.addShape(LShape.VERTICES,[[31,8],[54,6],[82,11],[61,79],[18,78]]);
    //self.anime.setAction(1,0,1);
}
Dog.prototype.onframe = function(){
    var self = this;
    if(self.moveindex --< 0){
        self.moveindex = 5;
        self.anime.onframe();
    }
}

function Cat(){
    base(this,LSprite,[]);
    var self = this;
    var list = LGlobal.divideCoordinate(344,82,1,4);
    var data = new LBitmapData(imglist["cat"],0,0,86,82);
    self.anime = new LAnimation(self,data,[
        [list[0][0],list[0][1],list[0][2],list[0][3]]
    ])
    self.movedirec = "right";
    self.moveindex = 0;
    self.addShape(LShape.VERTICES,[[46,1],[54,11],[53,52],[79,53],[79,79],[26,78],[26,50],[6,45],[3,21],[12,28],[27,24]]);
    //self.anime.setAction(1,0,1);
}
Cat.prototype.onframe = function(){
    var self = this;
    if(self.moveindex --< 0){
        self.moveindex = 4;
        self.anime.onframe();
    }
}

function Fight(){
    base(this,LSprite,[]);
    var self = this;
    var list = LGlobal.divideCoordinate(516,94,1,3);
    var data = new LBitmapData(imglist["fight"],0,0,172,94);
    self.pic = new LAnimationTimeline(data,list);
    self.addChild(self.pic);
    self.pic.speed = 5;
    self.visible = false;
}

function Falls(type,movetype){
    base(this,LSprite,[]);
    var self = this;
    self.pos = 0;
    self.movetype = movetype;
    self.type = type;
    self.y = -100;
    self.setView();
}
Falls.prototype.setView = function(){
    var self = this;
    if(self.movetype == "slow"){
        if(self.type == 0){
            self.pic = new LBitmap(new LBitmapData(imglist["icons"],813,0,76,58));//唯品会
            self.addShape(LShape.RECT,[-38,0,76,58]);
        }else if(self.type == 1){
            self.pic = new LBitmap(new LBitmapData(imglist["icons"],681,63,58,58));//当当
            self.addShape(LShape.RECT,[-29,0,58,58]);
        }else if(self.type == 2){
            self.pic = new LBitmap(new LBitmapData(imglist["icons"],742,0,58,58));//国美
            self.addShape(LShape.RECT,[-29,0,58,58]);
        }
        self.speed = gameData.fallSpeed;
    }else{
        if(self.type == 0){
            self.pic = new LBitmap(new LBitmapData(imglist["icons"],681,2,58,58));//苏宁
            self.addShape(LShape.RECT,[-29,0,58,58]);
        }else if(self.type == 1){
            self.pic = new LBitmap(new LBitmapData(imglist["icons"],742,62,68,63));//亚马逊
            self.addShape(LShape.RECT,[-34,0,68,63]);
        }else if(self.type == 2){
            self.pic = new LBitmap(new LBitmapData(imglist["icons"],819,64,58,58));//1号
            self.addShape(LShape.RECT,[-29,0,58,58]);
        }
        self.speed = gameData.fallSpeed+2;
    }
    self.pic.x = -self.pic.getWidth()/2;
    self.addChild(self.pic);
}
Falls.prototype.onframe = function(){
    var self = this;
    self.y += self.speed;
}