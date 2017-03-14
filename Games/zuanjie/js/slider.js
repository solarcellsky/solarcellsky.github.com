/**
 * Created by lipei on 15/9/12.
 */

var slider;
!function(){
    slider = function (element,imgArr,width) {
        this.element = element;
        this.imglist = imgArr;
        this.imgwidth = width;
    };

    slider.prototype = {
        init : function () {
            var self = this;
            this.element.append("<ul style='width:"+this.imglist.length*100+"%'></ul>");
            for(var i=0;i<this.imglist.length;i++){
                this.element.find("ul").append("<li style='float:left;width:"+this.imgwidth+"px'><img src='"+ this.imglist[i] +"'></li>");
            }
        }
    }
}();