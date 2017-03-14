/**
 * 提示层组件
 * @author slarkzhang
 * @date 2014.8.6
*/

define('mod/box', ['mod/mask'], function(require, exports, module){
    // var HTML_TEXT =['<div class="pop-warn pop-warn-mask hide" id="mod_box_pop">',
    //                     '<div class="pop-warn-cnt">', 
    //                         '<div class="pop-main-tips" id="mod_box_pop_title"></div>',
    //                         '<div class="pop-minor-tips">',
    //                             '<div class="pop-minor-tips-txt" id="mod_box_pop_text"></div>',
    //                             '<div class="pop-minor-tips-input" id="mod_box_pop_input"></div>',
    //                         '</div>',        
    //                         '<div class="pop-operate-multi" id="mod_box_pop_btns"></div>',
    //                     '</div>',
    //                 '</div>'].join("");

    var HTML_TEXT = ['<div class="pop-set hide" style="display:none" id="mod_box_pop">',
                        '<div class="pop-set-wrap">',
                            '<div class="pop-set-title f-bold" id="mod_box_pop_title">提示</div>',
                            '<div class="pop-set-cnt">',
                                '<p id="mod_box_pop_text"></p>',
                            '</div>',
                            '<div class="pop-operate muti-operate" id="mod_box_pop_btns">',

                            '</div>',
                        '</div>',
                    '</div>'].join("");

    var BUTTON_TEXT = '<a href="javascript:;" class="js-mod-box-pop-button">${text}</a>';

    var CSS_TEXT = ['<style type="text/css" id="mod_box_css">',
                    '.pop-set{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%;position:fixed;top:0;left:0;z-index:999;background-color:rgba(0,0,0,0.7);padding:0 5%;color:#000000;}',
                    '.pop-set-wrap{position:relative;margin-top:-64px;background-color: #fafafa;border-radius:6px;color: #000;}',
                    '.pop-set-close{position: absolute;right:7px;top:7px;width: 24px;height: 24px;background: url(/weixin/v3/img/pop_set_close.png) no-repeat;background-size: 100% auto}',
                    '.pop-set-title{padding-top:2.2rem;text-align:center;font-size: 1.6rem}',
                    '.pop-set-cnt{padding:2rem 1.8rem 1rem;font-size: 1.4rem;line-height: 1.4}',
                    '.pop-set-title + .pop-set-cnt{padding-top: 1.2rem}',
                    '.pop-set-cnt p{padding-bottom: 10px}',
                    '.pop-operate{height:47px;line-height:47px;background-color:#fff;border-top:1px solid rgba(178,178,178,.9);border-radius:0 0 6px 6px;text-align:center;}',
                    '.pop-operate a{display:inline-block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size: 1.6rem;color:#007aff;}',
                    '.muti-operate a{width:50%;}',
                    '.muti-operate a:first-child{border-right:1px solid rgba(178,178,178,.9);}',
                    '.pop-set-top{padding: 20px 15px 10px;border-bottom:1px solid rgba(178,178,178,.9);font-size: 14px}',
                    '/* for IE */',
                    '.pop-set-cnt{position:relative\9;top:40%\9;}',
                    '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { ',
                    '.pop-set-cnt{top:auto;} ',
                    '}',
                    '</style>'].join("");


    // var BUTTON_TEXT = '<button type="button" class="pop-btn">${text}</button>';

    var mask = require('mod/mask');

    /**
     * 检查页面是否已经插入了样式和HTML结构
     * @method checkDomExist     
     */
    var _checkDomExist = function(){
        var htmlNode = $("#mod_box_pop");
        if(htmlNode.length == 0){
            $("body").append($(HTML_TEXT));
        }
    }

    var _checkCssExist = function(){
        var cssNode = $('#mod_box_css');
        if(cssNode.length == 0){
            $('body').append($(CSS_TEXT))
        }
    }

    _checkDomExist();
    _checkCssExist();

    /**
     * 显示弹出层
     *  {
     *      "title" : "提示",
     *      "text"  : "",
     *      "btns": [
     *          ["确&nbsp;定",_hideBox,[],null]   //二维数组：text、handler、args、context
     *      ]
     *  }
     */
    var _showBox = function(text, title, btns){
        if(title){
            $('#mod_box_pop_title').addClass('pop-set-title').html(title);
        }else{
            $('#mod_box_pop_title').removeClass('pop-set-title').addClass('hide').css('display', 'none');
        }
        
        $('#mod_box_pop_text').html(text || '');

        var btnsNode = $('#mod_box_pop_btns');
        btnsNode.html('');

        btns = btns || [["确&nbsp;定", _hideBox, [], null]];
        $.each(btns, function(index, btn){
            var text = btn[0];
            var callback = btn[1];
            var args = btn[2];
            var context = btn[3];

            var buttonNode = $(BUTTON_TEXT.replace(/\${text}/, text));
            btnsNode.append(buttonNode);

            buttonNode.on('tap', function(e){
                e.preventDefault();
                callback && callback.apply(context, args);
            })
        })

        if(btns.length > 1){
            btnsNode.addClass('muti-operate');
        }else{
            btnsNode.removeClass('muti-operate');
        }

        $('#mod_box_pop').removeClass("hide").css('display', '');

        /*todo ios5以下window.scroll(0,0)*/

        $(document).on('touchmove', function(e){
            e.preventDefault();
            e.stopPropagation();
        })
    };

    /**
     * 关闭弹出层，关闭操作只是对容器节点进行了隐藏操作
     */
    function _hideBox(){
        $('#mod_box_pop').addClass("hide").css('display', 'none');
        $(document).off('touchmove');
        /*设置遮盖层*/
        mask.showMask();
        setTimeout(function(){
            mask.hideMask();
        }, 300)
    };

    function _isBoxShow(){
        return !$('#mod_box_pop').hasClass('hide');
    };
    return {
        hideBox: _hideBox,
        showBox: _showBox,
        isBoxShow: _isBoxShow
    }
})

