/**
 * Created by lipei on 15/8/4.
 */

var slider;
!function(){
    slider = function() {
        this.container = "#slider";
        this.content = ".box";
        this.left_btn = ".left_btn";
        this.right_btn = ".right_btn";
        this.switcher = ".dot";
        this.mode = "fade";
        this.loop = false;
    };
    slider.prototype = {
        init : function () {
            var self = this;
            this.curindex = 0;
            this.total = $(this.container).find(this.content).find("li").size();

            $(this.container).find(this.switcher).find("a").on("touchend",function(){
                self.curindex = $(this).index();
                self.goto(self.curindex);
            });

            $(this.container).find(this.right_btn).on("touchend",function(){
                self.next();
            });

            $(this.container).find(this.left_btn).on("touchend",function(){
                self.prev();
            });
        },
        next : function () {
            $(this.left_btn).show();

            if(this.loop){
                ga('send', 'event', 'product', 'product_swipe_action', this.curindex);
            }else{
                ga('send', 'event', 'configure', 'configure_R_btn');
            }

            this.curindex++;

            if(this.loop){
                if(this.curindex == this.total){
                    this.curindex = 0;
                }
                this.goto(this.curindex,"left");
            }else{
                if(this.curindex == this.total){
                    this.curindex--;
                }else if(this.curindex == this.total-1){
                    $(this.right_btn).hide();
                    this.goto(this.curindex);
                }else{
                    this.goto(this.curindex);
                }
            }
            //console.log(this.curindex);
        },
        prev : function () {

            $(this.right_btn).show();

            if(this.loop){
                ga('send', 'event', 'product', 'product_swipe_action', this.curindex);
            }else{
                ga('send', 'event', 'configure', 'configure_L_btn');
            }

            this.curindex--;

            if(this.loop){
                if(this.curindex == -1){
                    this.curindex = this.total-1;
                }
                this.goto(this.curindex,"right");
            }else{
                if(this.curindex == -1){
                    this.curindex++;
                    $(this.left_btn).hide();
                }else if(this.curindex == 0){
                    $(this.left_btn).hide();
                    this.goto(this.curindex);
                }else{
                    this.goto(this.curindex);
                }
            }

        },
        goto : function (id,direction) {
            var self = this;
            if (this.mode == "fade"){
                if(direction){
                    switch (direction){
                        case "left" :
                            TweenMax.to($(this.container).find(this.content).find("li").eq(id).siblings(),0.3,{x:-100,opacity:0,onComplete:function(){
                                TweenMax.set($(self.container).find(self.content).find("li").eq(id).siblings(),{x:0,opacity:1,display:"none"})
                            }});
                            $(this.container).find(this.content).find("li").eq(id).fadeIn(300);
                            break;
                        case "right" :
                            TweenMax.to($(this.container).find(this.content).find("li").eq(id).siblings(),0.3,{x:100,opacity:0,onComplete:function(){
                                TweenMax.set($(self.container).find(self.content).find("li").eq(id).siblings(),{x:0,opacity:1,display:"none"})
                            }});
                            $(this.container).find(this.content).find("li").eq(id).fadeIn(300);
                            break;
                    }
                }else{
                    $(this.container).find(this.content).find("li").eq(id).fadeIn(300).siblings().fadeOut(300);
                }
                //监测代码开始
                switch (id){
                    case 0 :
                        _smq.push(['custom', '戴尔游匣7000产品页面', '热血影像', '图一']);
                        break;
                    case 1 :
                        _smq.push(['custom', '戴尔游匣7000产品页面', '热血影像', '图二']);
                        break;
                    case 2 :
                        _smq.push(['custom', '戴尔游匣7000产品页面', '热血影像', '图三']);
                        break;
                    case 3 :
                        _smq.push(['custom', '戴尔游匣7000产品页面', '热血影像', '图四']);
                        break;
                    case 4 :
                        _smq.push(['custom', '戴尔游匣7000产品页面', '热血影像', '图五']);
                        break;
                }

                //监测代码结束
            }
            if (this.mode == "move")TweenMax.to($(this.container).find(this.content),0.3,{x:-496*id,z:0});

            $(this.container).find(this.switcher).find("a").eq(id).addClass("cur").siblings().removeClass("cur");
        }
    }
}();

var textMgr;
!function(){
    textMgr = function (element,txt) {
        this.element = $(element);
        this.text = txt;
        this.textArr = [];
        this.randomtxt = text;
    };
    textMgr.prototype = {
        init : function () {
            var self = this;
            var tempA_ = [];
            var tempB_ = [];
            var tempC_ = [];
            var curnum = 0;
            var html_ = "";
            self.textArr = this.text.split("<br/>");

            tempA_ = self.text.replace(/<br\/>/g,"").split("");

            for (var i=0;i<tempA_.length;i++){
                tempB_.push("");
            }

            var process = setInterval(function(){
                for(var m=0;m<=curnum;m++){
                    var random = Math.ceil(Math.random()*(self.randomtxt.length));

                    if (random<self.randomtxt.length/20){
                        tempB_[m] = tempA_[m];
                    }

                    if(tempB_[m] != tempA_[m]){
                        tempB_[m] = self.randomtxt.substr(random,1);
                    }
                }

                html_ = tempB_.join("");

                var startlen = 0;

                for (var n=0;n<self.textArr.length;n++){
                    tempC_[n] = html_.substr(startlen,self.textArr[n].length);
                    startlen += self.textArr[n].length;
                }

                html_ = tempC_.join("<br/>");

                //console.log(tempA_,tempB_,tempC_);

                self.element.html(html_);

                if(curnum < tempB_.length-1){curnum++}

            },10);

            setTimeout(function(){
                clearInterval(process);
                self.element.html(self.text);
            },2000);
        }
    };

}();

var mcMgr;
!function(){
    mcMgr = function (element,imgArr,interval) {
        this.interval = interval;  //跳帧
        this.startFrame = 0;  //开始帧
        this.curFrame = 0;  //当前帧
        this.endFrame = imgArr.length-1;  //结束帧
        this.element = $(element);
        this.frameRate = 1000/10*(this.interval+1);
        this.imgArr = [];

        for (var i=0;i<imgArr.length;i=i+(this.interval+1)){
            this.imgArr.push(imgArr[i]);
        }

    };
    mcMgr.prototype = {
        init : function (Callback) {
            var self = this;

            var images = {};
            var imgNum = this.imgArr.length;

            for (var src in this.imgArr) {
                var path = src;
                images[path] = new Image();
                images[path].src = this.imgArr[path];
            }

            self.element.append("<canvas width='640' height='1136'></canvas>");
            self.ctx = self.element.find("canvas").get(0).getContext("2d");
            self.imgObj = images;
            Callback();

            //loadingMgr.loadImages(this.imgArr,function(e){
            //    self.element.append("<canvas width='640' height='1136'></canvas>");
            //    self.ctx = self.element.find("canvas").get(0).getContext("2d");
            //    self.imgObj = e;
            //    Callback();
            //})
        },
        play : function (repeat,Callback) {
            this.process(this.startFrame,this.endFrame,repeat,Callback);
        },
        playAndStop : function () {

        },
        gotoAndPlay : function (num,repeat,Callback) {
            this.process(num,this.endFrame,repeat,Callback);
        },
        process : function (startNum,endNum,repeat,Callback) {

            this.startFrame = startNum;
            this.endFrame = endNum;

            var self = this;
            var startFrame_ = Math.floor(startNum/(this.interval+1));
            var endFrame_ = Math.floor(endNum/(this.interval+1));
            var curFrame_ = startFrame_;

            this.process_ = setInterval(function(){
                //console.log(curFrame_,endFrame_);
                self.ctx.clearRect(0,0,self.element.width(),self.element.height());
                self.ctx.drawImage(self.imgObj[curFrame_++], 0, 0);
                if(repeat && curFrame_ > endFrame_){
                    curFrame_ = startFrame_;
                }else if(!repeat && curFrame_ > endFrame_){
                    self.stop();
                    if(Callback)Callback();
                }
            },this.frameRate);
        },
        stop : function () {
            clearInterval(this.process_);
        }
    }
}();