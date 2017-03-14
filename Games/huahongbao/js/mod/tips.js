/**
 * Tips提示信息显示模块
 * @author slarkzhang
 * @date 2014.8.6
*/

define('mod/tips', ['mod/fx'], function(require, exports, module){
    require('mod/fx');

    var tpl = '<div class="error-tips" id="mod_tips_pop"><span>${tips}</span></div>',  //插入页面的tips的提示信息内容
        timer;

    //动态插入的样式信息
    var css_text = ".error-tips{width:100%;left:0;position:fixed;top:50px;z-index:201;text-align:center;}" +
                   ".error-tips span{background-color:rgba(0,0,0,0.8);padding:8px;display:inline-block;margin:0 auto;color:#FFFFFF;border-radius:4px;font-size:14px;}";

    /**
     * 显示Tips的提示
     * @method showTips
     * @param {String} text 显示的tips的内容信息
     * @param {Number} [last:2s] 多少秒后消失，单位秒
     * @param {Number} [duration:1s] 如果为0，则在时间到后立即隐藏，否则渐变隐藏
    */
    var _showTips = function(text, last, duration, style){
        last = last || 2000;
        duration = duration || 1000;
        $("#mod_tips_pop").remove();
        $("body").append($( tpl.replace(/\${tips}/, text || '') ));

        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        var node = $("#mod_tips_pop");
        
        var nodeCss = style;
        if(!nodeCss){
            nodeCss = {
                top : (15 + window.scrollY) + "px"
            }
        }
        node.css(nodeCss);

        if(last > 0){  //last为0 表示一直显示
            timer = setTimeout(function(){
                if(duration > 0){
                    node.animate({
                        "opacity" : 0                    
                    },{
                        "duration": duration,
                        "complete": function(){
                            node.remove();                       
                        }
                    });
                }else{
                    node.remove();
                }
            }, last);
        }        
    };
    
    /**
     * 立刻隐藏Tips的提示
     * @method hideTips
    */
    var _hideTips = function(){
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        $("#mod_tips_pop").remove();
    }

    return {
        showTips: _showTips,
        hideTips: _hideTips
    }
})

