define(function(require, exports) {

  var _current = null;

  var Captcha = {
    _trigger: null,
    _input: null,
    _scene: null,
    _hasTriggered: false,
    _triggered: function() {},
    _afterCodeVerify: function() {},
    config: function(conf) {
      this._trigger = conf.trigger;
      this._input = conf.input;
      this._scene = conf.scene;
      this._init();
      this._trigger.addClass('ui-captcha');
      if(typeof conf.triggered == 'function') {
        this._triggered = conf.triggered;
      }
      if(typeof conf.afterCodeVerify == 'function') {
        this._afterCodeVerify = conf.afterCodeVerify;
      }
    },
    _init: function() {
      this._changeStat('invalid');
      this._bindInput();
      this._bindTrigger();
      this._bindCodeVerify();
    },
    _changeStat: function(stat, sec) {
      var claAll = 'invalid ready wait ip-verify';
      switch(stat) {
        case 'invalid': {
          this._trigger.html('发送验证码').removeClass(claAll)
            .addClass('invalid');
          break;
        }
        case 'ready': {
          var text = this._hasTriggered ? '重发验证码' : '发送验证码';
          this._trigger.html(text).removeClass(claAll)
            .addClass('ready');
          break;
        }
        case 'ip-verify': {
          var text = this._hasTriggered ? '重发验证码' : '发送验证码';
          this._trigger.html(text).removeClass(claAll)
            .addClass('ready ip-verify');
          break;
        }
        case 'down-count': {
          this._trigger.html('验证码已发送（<em>'+sec+'</em>）').removeClass(claAll)
            .addClass('wait');
          this._doDownCount(sec);
          this._triggered();
          this._hasTriggered = true;
          break;
        }
        default:;
      }
    },
    _bindInput: function() {
      var _this = this ;
      this._input.bind('change keyup input', function(){
        if(_this._validateMobile()) {
          _this._ready();
        } else {
          _this._changeStat('invalid');
        }
      });
    },
    _bindTrigger: function() {
      var _this = this ;
      this._trigger.bind('click',function(){
        _current = $(this);
        if(! $(this).hasClass('ready')) {
          return ;
        } else if($(this).hasClass('ip-verify')) {
          //验证码验证
          _this._doCaptchaVerify();
        } else {
          _this._doSendSmsCode();
        }
      });
    },
    _validateMobile: function() {
      var val = this._input.val();
      var regx = /^1\d{10}$/;
      return regx.test(val);
    },
    _ready: function() {
      var _this = this ;
      var mobile = this._input.val();
      this._doCheckMobileStatus(mobile,function(data){
        if(data.success) {
          if(data.msg) {
            _this._changeStat('down-count', data.msg);
          } else {
            _this._changeStat('ready');
          }
        } else {
          if(data.errcode == 1001) {
            _this._changeStat('ip-verify');
          }
        }
      });
    },
    _doCheckMobileStatus: function(mobile, callbk){
      $.post('/member/sms-verify/check-status',{
        mobile: mobile,
        _token_: _hook._token_
      }, function(data) {
        callbk(data);
      });
    },
    _doCaptchaVerify: function() {
      var _this = this ;
      var contentHtml = rendToTpl('doVerifyCodeTpl');
      popWin('fy-code',{
				'type':'confirm',
				'title':'提示',
				'contentHtml':contentHtml,
				'yesAct':function(){
          _this._doVerifyCodeAct();
				}
			});
      $(document).unbind('keypress');
    },
    _bindCodeVerify: function() {
      $(document).on('click', '#do-verify-code a', function(){
        var img = $(this).closest('#do-verify-code').find('img');
        var src = img.attr('src');
        img.attr('src', src);
      });
    },
    _doVerifyCodeAct: function() {
      var _this = this;
      var code = $('#do-verify-code input').val();
      $.post('/member/sms-verify/check-verify-code',{
        code: code,
        _token_: _hook._token_
      }, function(data){
        if(data.success) {
          $.fancybox.close();
          _current.removeClass('ip-verify')
            .click();
          _this._afterCodeVerify();
        } else {
          notify(data.msg, 'alarm');
          $('#do-verify-code a').click();
        }
      });
    },
    _doSendSmsCode: function() {
      var _this = this ;
      var mobile = this._input.val();
      $.post('/member/sms-verify/send-sms-code',{
        mobile: mobile,
        scene: _this._scene,
        _token_: _hook._token_
      },function(data) {
        if(!data.success) {
          notify(data.msg, 'alarm');
        } else {
          _this._changeStat('down-count', 60);
        }
      });
    },
    _dcInterval: null,
    _doDownCount: function(sec) {
      var _this = this;
      var c = this._trigger.find('em');
      this._dcInterval = setInterval(function(){
        var sec = parseInt(c.text());
        if(sec <= 1) {
          clearInterval(_this._dcInterval);
          _this._ready();
        } else {
          c.text(sec - 1);
        }
      },1000);
    }
  }

  return Captcha;
});
