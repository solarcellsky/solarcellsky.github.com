var MZ = (function(obj){
  
  return obj;
})(MZ || {})
var log = console.log.bind(console);
;MZ.browser = {
  isIos: navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
  isAndroid: -1 < navigator.userAgent.indexOf("Android"),
  isMobile: /AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))
}
document.body.addEventListener('touchstart',function(){},false);
;MZ.utils = {

  getQueryString : function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return r[2]; return null;
  },
  ajaxSetup: function(mz_jwt){
    (function($){

        var _ajax=$.ajax;          
        $.ajax=function(opt){
         
            var fn = {
                error:function(XMLHttpRequest, textStatus, errorThrown){},
                success:function(data, textStatus){}
            }
            if(opt.error){
                fn.error=opt.error;
            }
            if(opt.success){
                fn.success=opt.success;
            }
            //扩展增强处理
            var _opt = $.extend(opt,{
                error:function(XMLHttpRequest, textStatus, errorThrown){
                    fn.error(XMLHttpRequest, textStatus, errorThrown);
                    onCallback();
                },
                success:function(data, textStatus){
                    fn.success(data, textStatus);
                    onCallback();
                },
                beforeSend:function(XHR){
                    XHR.setRequestHeader("Authorization","Bearer "+mz_jwt);
                },
                complete:function(XHR, TS){
                    onCallback();
                }
            });
            _ajax(_opt);
            function onCallback(){
             
            }
        };
    })(Zepto);
  }
    
};
MZ.confirm = function(config){
  var content = config.content ? config.content : '',
      title = config.title ? config.title : '确认提示',
      cancleFunc = config.cancle,
      theme = config.theme ? config.theme : '';
      callback = config.callback;
  var timestamp = new Date().getTime();
  var str = '<div class="weui_dialog_confirm" id="dialog'+timestamp+'">'+
             ' <div class="weui_mask"></div>'+
             ' <div class="weui_dialog '+theme+'">'+
             '     <div class="weui_dialog_hd"><strong class="weui_dialog_title">'+title+'</strong></div>'+
             '     <div class="weui_dialog_bd">'+content+'</div>'+
             '     <div class="weui_dialog_ft">'+
             '         <a href="javascript:;" class="weui_btn_dialog default jsCancle">取消</a>'+
             '         <a href="javascript:;" class="weui_btn_dialog primary jsOk">确定</a>'+
             '     </div>'+
             ' </div>'+
          '</div>';
  $('body').append(str);
  var $dialog = $('#dialog'+timestamp);
  setTimeout(function(){
   $dialog.find('.weui_dialog').addClass('active');
  },50) 
  $dialog.find('.jsCancle').on('touchend',function(e){
      $dialog.remove();
      cancleFunc && cancleFunc();
      e.preventDefault();
  })
  $dialog.find('.jsOk').on('touchend',function(e){
      callback && callback(e);
      $dialog.remove();
      e.preventDefault();
  })
  this.hide = function(){
      $dialog.remove();
  }
  return 'dialog'+timestamp;
}
MZ.alert = function(config){
  var content = config.content ? config.content : '',
      title = config.title ? config.title : '',
      cancleFunc = config.cancle,
      theme = config.theme ? config.theme : '',
      footer = config.footer ? 'display:none;':'',
      callback = config.callback;
  var timestamp = new Date().getTime();
  var str = '<div class="weui_dialog_confirm" id="alert'+timestamp+'">'+
             ' <div class="weui_mask"></div>'+
             ' <div class="weui_dialog '+theme+'">'+
             '     <div class="weui_dialog_bd" style="padding:.4rem;padding-top:2rem;padding-bottom:1rem;">'+content+'</div>'+
             '     <div class="weui_dialog_fter" style="'+footer+'">'+
             '         <a class="cicon icon-btn-ok jsOk">确定</a>'+
             '     </div>'+
             ' </div>'+
          '</div>';
  $('body').append(str);
  var $dialog = $('#alert'+timestamp);
  setTimeout(function(){
   $dialog.find('.weui_dialog').addClass('active');
  },50) 
  $dialog.find('.jsOk').on('click touchend',function(e){
      callback && callback(e);
      $dialog.remove();
      e.preventDefault();
  })
  $dialog.find('.icon-btn-close').on('click touchend',function(e){
      callback && callback(e);
      $dialog.remove();
      e.preventDefault();
  })
  return 'alert'+timestamp;
}
MZ.loading = function(config){
  var content = arguments[0] ? config.content : '数据加载中';
  var timestamp = new Date().getTime();
  this.id = 'toast'+timestamp;
  var str = '<div id="'+this.id+'" class="weui_loading_toast" style="">'+
            '  <div class="weui_mask_transparent"></div>'+
            '  <div class="weui_toast">'+
            '      <div class="weui_loading">'+
            '          <div class="weui_loading_leaf weui_loading_leaf_0"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_1"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_2"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_3"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_4"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_5"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_6"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_7"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_8"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_9"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_10"></div>'+
            '          <div class="weui_loading_leaf weui_loading_leaf_11"></div>'+
            '      </div>'+
            '      <p class="weui_toast_content">'+content+'</p>'+
            '  </div>'+
          '</div>';
    $('body').append(str);
    this.$container = $('#'+this.id);
}
MZ.loading.prototype = {
  finish: function(content){
    var _this = this;
    var content = arguments[0] ? content : '已完成';
    _this.$container.find('.weui_toast_content').html(content);
    _this.$container.find('.weui_loading').replaceWith('<i class="icon icon-check"></i>')
    setTimeout(function(){
      _this.$container.remove();
    },1000)
  },
  hide: function(){
    this.$container.remove();
  }
}
;MZ.wechat = {
  /**
   * 初始化微信分享配置
   */
   /*MZ.wechat.init({
    title: 'title',//不可为空
    desc: 'desc',//不可为空
    link: 'link',//不可为空
    imgUrl: 'imgUrl',//不可为空
    trigger: function(){},//可为空
    success: function(){},//可为空
    cancel: function(){},//可为空
    fail: function(){}//可为空
   })*/
  init: function(config){
    _czc = _czc || [];
    wx.ready(function () {
            //分享给朋友
            wx.onMenuShareAppMessage({
              title: config.title,
              desc: config.desc,
              link: ''+config.link+'',
              imgUrl: ''+config.imgUrl+'',
              trigger: function (res) {
                _czc.push(["_trackEvent", "点击弹出分享给朋友", "click", 'startup', 1]);
                config.trigger && config.trigger();
              },
              success: function (res) {
                _czc.push(["_trackEvent", "分享给朋友", "click", 'startup', 1]);
                config.success && config.success();
                $('#pageShare').removeClass('active');
                $('#btnShare').css({'margin-left':65/64+'rem','-webkit-animation':'"" 1s linear infinite .3s'});
                $('.icon-msg2').on('webkitTransitionEnd',function(){
                    $(this).css('-webkit-animation','"" 1s linear infinite .3s');
                });
                $('.msgLast').addClass('animatein');
              },
              cancel: function (res) {
                _czc.push(["_trackEvent", "取消分享给朋友", "click", 'startup', 1]);
                config.cancel && config.cancel();
              },
              fail: function (res) {
                _czc.push(["_trackEvent", "分享到朋友失败", "click", 'startup', 1]);
                config.fail && config.fail();
              }
            });
            //分享到朋友圈
            wx.onMenuShareTimeline({
              title: config.desc,
              desc: config.desc,
              link: ''+config.link+'',
              imgUrl: ''+config.imgUrl+'',
              trigger: function (res) {
                _czc.push(["_trackEvent", "点击弹出分享到朋友圈", "click", 'startup', 1]);
                config.trigger && config.trigger();
              },
              success: function (res) {
                _czc.push(["_trackEvent", "成功分享到朋友圈", "click", 'startup', 1]);
          config.success && config.success();
                $('#pageShare').removeClass('active');
                $('#btnShare').css({'margin-left':65/64+'rem','-webkit-animation':'"" 1s linear infinite .3s'});
                $('.icon-msg2').on('webkitTransitionEnd',function(){
                    $(this).css('-webkit-animation','"" 1s linear infinite .3s');
                });
                $('.msgLast').addClass('animatein');
              },
              cancel: function (res) {
                _czc.push(["_trackEvent", "取消分享到朋友圈", "click", 'startup', 1]);
                config.cancel && config.cancel();
              },
              fail: function (res) {
                _czc.push(["_trackEvent", "分享到朋友圈失败", "click", 'startup', 1]);
                config.fail && config.fail();
              }
            });
        })
        wx.error(function (res) {
          alert(res.errMsg);
        });
  }

}
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.echo = factory(root);
  }
})(this, function (root) {

  'use strict';

  var echo = {};

  var callback = function () {};

  var offset, poll, delay, useDebounce, unload;

  var isHidden = function (element) {
    return (element.offsetParent === null);
  };
  
  var inView = function (element, view) {
    if (isHidden(element)) {
      return false;
    }

    var box = element.getBoundingClientRect();
    return (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b);
  };

  var debounceOrThrottle = function () {
    if(!useDebounce && !!poll) {
      return;
    }
    clearTimeout(poll);
    poll = setTimeout(function(){
      echo.render();
      poll = null;
    }, delay);
  };

  echo.init = function (opts) {
    opts = opts || {};
    var offsetAll = opts.offset || 0;
    var offsetVertical = opts.offsetVertical || offsetAll;
    var offsetHorizontal = opts.offsetHorizontal || offsetAll;
    var optionToInt = function (opt, fallback) {
      return parseInt(opt || fallback, 10);
    };
    offset = {
      t: optionToInt(opts.offsetTop, offsetVertical),
      b: optionToInt(opts.offsetBottom, offsetVertical),
      l: optionToInt(opts.offsetLeft, offsetHorizontal),
      r: optionToInt(opts.offsetRight, offsetHorizontal)
    };
    delay = optionToInt(opts.throttle, 250);
    useDebounce = opts.debounce !== false;
    unload = !!opts.unload;
    callback = opts.callback || callback;
    echo.render();
    if (document.addEventListener) {
      root.addEventListener('scroll', debounceOrThrottle, false);
      root.addEventListener('load', debounceOrThrottle, false);
    } else {
      root.attachEvent('onscroll', debounceOrThrottle);
      root.attachEvent('onload', debounceOrThrottle);
    }
  };

  echo.render = function () {
    var nodes = document.querySelectorAll('img[data-echo], [data-echo-background]');
    var length = nodes.length;
    var src, elem;
    var view = {
      l: 0 - offset.l,
      t: 0 - offset.t,
      b: (root.innerHeight || document.documentElement.clientHeight) + offset.b,
      r: (root.innerWidth || document.documentElement.clientWidth) + offset.r
    };
    for (var i = 0; i < length; i++) {
      elem = nodes[i];
      if (inView(elem, view)) {

        if (unload) {
          elem.setAttribute('data-echo-placeholder', elem.src);
        }

        if (elem.getAttribute('data-echo-background') !== null) {
          elem.style.backgroundImage = "url(" + elem.getAttribute('data-echo-background') + ")";
        }
        else {
          elem.src = elem.getAttribute('data-echo');
        }

        if (!unload) {
          elem.removeAttribute('data-echo');
          elem.removeAttribute('data-echo-background');
        }

        callback(elem, 'load');
      }
      else if (unload && !!(src = elem.getAttribute('data-echo-placeholder'))) {

        if (elem.getAttribute('data-echo-background') !== null) {
          elem.style.backgroundImage = "url(" + src + ")";
        }
        else {
          elem.src = src;
        }

        elem.removeAttribute('data-echo-placeholder');
        callback(elem, 'unload');
      }
    }
    if (!length) {
      echo.detach();
    }
  };

  echo.detach = function () {
    if (document.removeEventListener) {
      root.removeEventListener('scroll', debounceOrThrottle);
    } else {
      root.detachEvent('onscroll', debounceOrThrottle);
    }
    clearTimeout(poll);
  };

  return echo;

});
document.body.addEventListener('touchstart',function(){},false);