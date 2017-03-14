var BigSugarContainer = function(e){
    function t() {
        e.call(this);

        this.deviant = 0;
        this.BigSugarBit01 = BitmapFactory("BigSugar01",320,700,1,1,231.5,442);
        this.BigSugarBit02 = BitmapFactory("BigSugar02",320,700,1,1,231.5,442);
        this.BigSugarBit03 = BitmapFactory("BigSugar03",320,700,1,1,231.5,442);
        this.BigSugarBit04 = BitmapFactory("BigSugar04",320,700,1,1,231.5,442);

        this.addChild( this.BigSugarBit01);
        this.addChild( this.BigSugarBit02);
        this.addChild( this.BigSugarBit03);
        this.addChild( this.BigSugarBit04);

        this.BigSugarBit02.visible = false;
        this.BigSugarBit03.visible = false;
        this.BigSugarBit04.visible = false;

        this.BigSugarBit = this.BigSugarBit01;

        this.BigSugarBit.rotation = 0;

        this.mGap = 0;



        this.bAge = 0;
        this.amgap= 2;

        this.yAdd = false;

        this.downed = false;
    }
    __extends(t, e);
    t.prototype.update = function(){
        if(this.downed)return;

        if(!this.yAdd){
            if(this.y==-10){
                this.yAdd=true
            }
            this.y-=2
        }else{
            if(this.y==0)this.yAdd=false
            this.y+=2
        }

        this.bAge++;

        switch(this.rState){
            case 1:{
                this.mGap-=this.amgap;
                break;
            }
            case 2:{
                this.mGap+=this.amgap;
                break;
            }
        }
        this.x = this.deviant+this.mGap;
        //this.checkFace();

        if(this.mGap<-200||this.mGap>200){
            this.BigSugarDown();
        }
    }
    t.prototype.leftState = function(){
        this.allCannotWatch();
        this.BigSugarBit.visible = true;
        this.BigSugarBit.rotation = -7;
       // this.BigSugarBit.regX = 0;
       // this.deviant = -231.5;
        this.x = this.deviant+this.mGap;
        this.state=1;
    }
    t.prototype.righState = function(){
        this.allCannotWatch();
        this.BigSugarBit.visible = true;
        //this.BigSugarBit.regX = 463;
        //this.deviant = 231.5;
        this.BigSugarBit.rotation = 7;
        this.x = this.deviant+this.mGap;
        this.state=2
    }
    t.prototype.middleState = function(){
        this.allCannotWatch();
        this.BigSugarBit.rotation = 0;
        this.BigSugarBit.visible = true;
    }
    t.prototype.checkFace = function(){

        if(this.mGap>=1){
            if(this.state==1){
                this.righState();
            }
        }else{
            if(this.state==2){
                this.leftState();
            }
        }

    }
    t.prototype.allCannotWatch = function(){
        this.BigSugarBit01.visible = false;
        this.BigSugarBit02.visible = false;
        this.BigSugarBit03.visible = false;
        this.BigSugarBit04.visible = false;
    }
    t.prototype.setRstate = function(sta){

        if(this.downed)return;

        this.rState = sta;

        var faceturn = false;
        this.allCannotWatch();

        switch(this.bAge){
            case 200:{
                this.amgap = 3;
                break;
            }
            case 400:{
                this.amgap = 4;
                break;
            }
            case 600:{
                this.amgap = 5;
                break;
            }
            case 800:{
                this.amgap = 6;
                break;
            }
            case 1000:{
                this.amgap = 8;
                break;
            }
            case 1200:{
                this.amgap = 14;
                break;
            }
        }

        switch(GetRandomNum(0,3)){
            case  0:{
                this.BigSugarBit = this.BigSugarBit01;
                faceturn = true;
                break;
            }
            case 1:{
                this.BigSugarBit = this.BigSugarBit02;
                faceturn = true;
                break;
            }
            case 2:{
                this.BigSugarBit = this.BigSugarBit03;
                faceturn = true;
                break;
            }
            case 3:{
                this.BigSugarBit = this.BigSugarBit04;
                faceturn = true;
                break;
            }
        }

        this.BigSugarBit.visible = true;



                if(this.rState ==2){
                    this.righState();
                }
                if(this.rState ==1){
                    this.leftState();
                }

    }

    t.prototype.BigSugarDown = function(){

        this.parent.canone = true;

        var downRotation = 100;
        if(this.mGap>=1){
            downRotation = 100;
        }else{
            downRotation= -100;
        }
        var n = this;
        //createjs.Tween.get(this.BigSugarBit).to({rotation:downRotation},200).wait(100).call(function(){
        //    n.parent.gameOver();
        //});
        n.parent.gameOver();
        this.downed = true;

    }
    return t;
}(createjs.Container);

var BackGroundContainer = function(e){
    function t() {
        e.call(this);

        this.mainBg = BitmapFactory("mainBg",320,950,.9,.9,995.5,1200);
        this.addChild( this.mainBg);

        createjs.Tween.get(this,{loop:true}).to({y:-10},200).to({y:0},200);

        this.mainBg.rotation = 0
        this.bAge = 0;
    }
    __extends(t, e);
    t.prototype.update = function(){
        this.bAge++;

    }
    t.prototype.setRstate = function(sta) {

       switch(sta){
           case 1:{
               this.mainBg.rotation = -8
               break;
           }
           case 2:{
               this.mainBg.rotation = 8
               break;
           }
       }

    }

        return t;
}(createjs.Container);

var NumberContainer = function(e){
    function t() {
        e.call(this);

        this.n1 = BitmapFactory("1");
        this.n2 = BitmapFactory("2");
        this.n3 = BitmapFactory("3");
        this.n4 = BitmapFactory("4");
        this.n5 = BitmapFactory("5");
        this.n6 = BitmapFactory("6");
        this.n7 = BitmapFactory("7");
        this.n8 = BitmapFactory("8");
        this.n9 = BitmapFactory("9");
        this.n0 = BitmapFactory("0");
        this.addChild( this.n1);
        this.addChild( this.n2);
        this.addChild( this.n3);
        this.addChild( this.n4);
        this.addChild( this.n5);
        this.addChild( this.n6);
        this.addChild( this.n7);
        this.addChild( this.n8);
        this.addChild( this.n9);
        this.addChild( this.n0);

        this.n1.visible = false;
        this.n2.visible = false;
        this.n3.visible = false;
        this.n4.visible = false;
        this.n5.visible = false;
        this.n6.visible = false;
        this.n7.visible = false;
        this.n8.visible = false;
        this.n9.visible = false;


        this.rotation = 10

        this.selfnum = 0;

        this.nAge = 0;
    }
    __extends(t, e);
    t.prototype.update = function(){
        this.nAge++;

    }
    t.prototype.setNumber = function(num){

        this.n1.visible = false;
        this.n2.visible = false;
        this.n3.visible = false;
        this.n4.visible = false;
        this.n5.visible = false;
        this.n6.visible = false;
        this.n7.visible = false;
        this.n8.visible = false;
        this.n9.visible = false;
        this.n0.visible = false;

        switch(num){
            case 0:{
                this.n0.visible = true;
                break;
            }
            case 1:{
                this.n1.visible = true;
                break;
            }
            case 2:{
                this.n2.visible = true;
                break;
            }
            case 3:{
                this.n3.visible = true;
                break;
            }
            case 4:{
                this.n4.visible = true;
                break;
            }
            case 5:{
                this.n5.visible = true;
                break;
            }
            case 6:{
                this.n6.visible = true;
                break;
            }
            case 7:{
                this.n7.visible = true;
                break;
            }
            case 8:{
                this.n8.visible = true;
                break;
            }
            case 9:{
                this.n9.visible = true;
                break;
            }


        }

    }
    t.prototype.addSelf = function(){
        this.selfnum++;

        if(this.selfnum==10)this.selfnum=0;

        this.setNumber(this.selfnum);
    }

    return t;
}(createjs.Container);

var BalanceContainer = function(e){
    function t() {
        e.call(this);

        this.bar = BitmapFactory("balanceBar",320,730,1,1,192.5);
        this.addChild( this.bar);

        this.triangle = BitmapFactory("triangle",320,700,1,1,30.5);
        this.addChild( this.triangle);

        this.tgap = 370/400;

    }
    __extends(t, e);
    t.prototype.update = function(){
        this.bAge++;

    }

    t.prototype.setTriangle = function(pos){
        this.triangle.x = 320+pos*this.tgap;

    }

    return t;
}(createjs.Container);