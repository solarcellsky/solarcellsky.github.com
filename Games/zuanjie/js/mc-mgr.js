/**
 * Created by lipei on 2015/8/7.
 */

//movie manager
var mcMgr;
!function () {
    mcMgr = function(element,imgArr){
        this.startFrame = 0;  //开始帧
        this.curFrame = 0;  //当前帧
        this.endFrame = imgArr.length-1;  //结束帧
        this.element = $(element);
        this.imgArr = imgArr;
        this.fps = 10;  //每秒帧频
    };
    mcMgr.prototype = {
        init : function () {
            this.element.html("");
            for (var i = 0;i < this.imgArr.length;i++){
                if(i == 0){
                    this.element.append("<img src='"+ this.imgArr[i] +"' style='position:absolute;'>");
                }else{
                    this.element.append("<img src='"+ this.imgArr[i] +"' style='position:absolute;display:none;'>");
                }
            }
        },
        play : function (variable) {
            this.process(this.startFrame,this.endFrame,variable.repeat,variable.yoyo,variable.complete);
        },
        gotoAndPlay : function (variable) {
            this.process(variable.start,this.endFrame,variable.repeat,variable.yoyo,variable.complete);
        },
        playAndStop : function (variable) {
            this.process(this.startFrame,variable.end,variable.repeat,variable.yoyo,variable.complete);
        },
        stop : function () {
            clearInterval(this.process_);
        },
        process : function (Start,End,Repeat,yoyo,Complete) {
            var self = this;
            //console.log(Start,End);
            //this.startFrame = Start;
            //this.endFrame = End;
            this.frameRate = 1000/this.fps;

            var startFrame_ = Start;
            var endFrame_ = End;
            var curFrame_ = startFrame_;
            var times_ = 0;

            this.process_ = setInterval(function(){

                //console.log(yoyo,startFrame_,curFrame_,endFrame_);

                self.element.find("img").eq(curFrame_).show().siblings().hide();

                times_%2 == 0 || yoyo == false?curFrame_ ++:curFrame_ --;

                if (curFrame_ > endFrame_){

                    if(yoyo){
                        curFrame_ = endFrame_ - 1;
                    }else{
                        curFrame_ = startFrame_;
                    }

                    times_++;
                    if(Repeat != -1 && times_ >= Repeat){
                        self.stop();
                        if(Complete)Complete();
                    }

                }

                if (curFrame_ < startFrame_){

                    curFrame_ = startFrame_;

                    times_++;
                    if(Repeat != -1 && times_ >= Repeat){
                        self.stop();
                        if(Complete)Complete();
                    }
                }



            },this.frameRate);
        }
    }
}();