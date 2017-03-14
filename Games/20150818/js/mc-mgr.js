/**
 * Created by lipei on 2015/8/7.
 */

//movie manager
var mcMgr;
!function () {
    mcMgr = function(element,imgArr,interval){
        this.interval = interval;  //跳帧
        this.startFrame = 0;  //开始帧
        this.curFrame = 0;  //当前帧
        this.endFrame = imgArr.length-1;  //结束帧
        this.element = $(element);
        this.imgArr = imgArr;
        this.rate = 10;  //每秒帧频
    };
    mcMgr.prototype = {
        init : function () {
            this.element.html("");
            for (var i = 0;i < this.imgArr.length;i = i + this.interval+1){
                if(i == 0){
                    this.element.append("<img src='"+ this.imgArr[i] +"' style='position:absolute;'>");
                }else{
                    this.element.append("<img src='"+ this.imgArr[i] +"' style='position:absolute;display:none;'>");
                }
            }
        },
        play : function (variable) {
            this.process(this.startFrame,this.endFrame,variable.repeat,variable.complete);
        },
        gotoAndPlay : function (variable) {
            this.process(variable.start,this.endFrame,variable.repeat,variable.complete);
        },
        playAndStop : function (variable) {
            this.process(this.startFrame,variable.end,variable.repeat,variable.complete);
        },
        stop : function () {
            clearInterval(this.process_);
        },
        process : function (Start,End,Repeat,Complete) {
            var self = this;
            //console.log(Start,End);
            //this.startFrame = Start;
            //this.endFrame = End;
            this.frameRate = 1000/this.rate*(this.interval+1);

            var startFrame_ = Math.floor(Start/(this.interval+1));
            var endFrame_ = Math.floor(End/(this.interval+1));
            var curFrame_ = startFrame_;
            var times_ = 0;

            this.process_ = setInterval(function(){

                if(curFrame_ == startFrame_){
                    self.element.find("img").eq(endFrame_).hide();
                }
                self.element.find("img").eq(curFrame_).show().prevAll().hide();

                curFrame_ ++;

                if (curFrame_ > endFrame_ && Repeat != 1){
                    curFrame_ = startFrame_;
                    times_++;
                    if(Repeat != -1 && times_ >= Repeat){
                        self.stop();
                        if(Complete)Complete();
                    }

                }else if(curFrame_ > endFrame_ && Repeat == 1){
                    self.stop();
                    if(Complete)Complete();
                }



            },this.frameRate);
        }
    }
}();