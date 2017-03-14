var Background = cc.Sprite.extend({
    yy:0,//3.0以上版本属性用.x,.y可以设置位置，此处在设对象属性 x,y会冲突。谨记！
    xx:0,
    ctor:function(res){
        this._super();
        this.initWithFile(res);//赋予图片元素
    },
    update: function (a,b,c) {
        this.xx=a;
        this.yy-=8;
        if(this.yy<b){
            this.yy=c;
        }
        this.setPosition(this.xx,this.yy);
    }
}); 

var Background1 = cc.Sprite.extend({
    yy:0,
    xx:0,
    ctor:function(res){
        this._super();
        this.initWithFile(res);//赋予图片元素
    },
    update: function (a,b,c,xv) {
        this.xx+=xv;
        this.yy=a;
        if(this.xx>b){
            this.xx=c;
        }
        this.setPosition(this.xx,this.yy);
    }
});            