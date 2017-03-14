define(function(require, exports){
  var scoreBehavior = function(){
    var score = $(".score-display i");
    var scoreVal  = parseInt(score.attr("data-score"));
    var scoreB = 0;
    var scoreInterval ;
    var seq = Math.ceil(scoreVal/8);
    scoreInterval = setInterval(function(){
      scoreB = scoreB + seq;
      scoreB = scoreB > scoreVal ? scoreVal : scoreB;
      if(scoreB == scoreVal) {
        clearInterval(scoreInterval);
      }
      score.text(scoreB);
    },50);
    $(document).on("touchstart",".touch-redirect",function(event){
      // event.preventDefault();
      // var href = $(this).attr("href");
      // if($(this).hasClass("to-score-index")) {
      //   $.post("/score/index-guarded").done(function(){
      //     window.location.href = href ;
      //   });
      //   return ;
      // }
      // if($(this).hasClass('record') && $(this).hasClass('new')) {
      //   $.post("/score/update-detail-latest").done(function(){
      //     window.location.href = href ;
      //   });
      //   return ;
      // }
      // if($(this).hasClass('prize') && $(this).hasClass('new')) {
      //   $.post("/score/update-win-latest").done(function(){
      //     window.location.href = href ;
      //   });
      //   return ;
      // }
      // window.location.href = href ;
    });
  }
  var qrcodePopBehavior = function(){
    $(document).on("touchstart","#score-qrcode",function(event){
      event.preventDefault();
      var container = $("#score-qrcode");
      container.find(".box").removeClass("show shake");
      container.hide();
    });
    $(document).on("touchstart",".entries .qrcode",function(event){
      event.preventDefault();
      event.stopPropagation();
      var container = $("#score-qrcode");
      var box = container.find(".box");
      container.removeClass("hidden").show();
      refreshBoxPos(box);
      box.removeClass("fade-out").addClass("show");
    });
  }
  var awardBehavior = function(){
    $(document).on("touchstart",".score-award-box .box-close",function(event){
      event.preventDefault();
      var container = $(this).parents(".score-award-box");
      container.find(".box").removeClass("show shake").addClass("fade-out");
      container.fadeOut(300);
    });
    $(document).on("touchstart",".prize-item .award-box-trigger",function(event){
      event.preventDefault();
      triggerAwardBox($(this));
    });
    $(document).on("click",".score-award-box .submit-postage-trigger",function(event){
      event.preventDefault();
      var source = $(this).attr("data-source");
      var box = $(this).parents(".postage-box");
      var id = $(this).attr("data-id");
      var rs = validateExchangePostage(box);
      if(rs === false) {
         box.find(".box").removeClass("show shake").addClass("shake");
        return ;
      }
      if(source == 'wheel') {
        var url = '/score/postage-wheel';
      } else if(source == 'co_check') {
        var url = '/score/postage-check';
      }
      rs['id'] = id;
      $.post(url,rs,function(data){
        if(data['status'] == 'success') {
          box.parents(".score-award-box").addClass("success");
        } else {
          alert("提交失败，请重试");
        }
      });
    });
  }
  var expectedScore ;
  var exchangeBehavior = function(){
    $(document).on("click",".score-exchange-box .confirm-exchange-trigger",function(){
      var id = $(this).attr("data-id");
      var container = $(this).parents(".score-exchange-box");
      var postageBox = container.find(".postage-box");
      var params = {};
      if(postageBox.find(".postage-form").length > 0) {
        var rs = validateExchangePostage(postageBox);
        if(rs === false) {
          container.find(".box").removeClass("show shake").addClass("shake");
          return ;
        }
        params = rs;
      }
      params['id'] = id;
      $.post("/score/exchange-act",params,function(data){
        if(data['status'] == 'success') {
          container.addClass("success");
          var qimg = container.find('.qrcode .picture img');
          var src = qimg.attr('data-src');
          qimg.attr('src',src+'&id='+data['result']);
          refreshScoreVals();
        } else {
          alert("兑换失败，请重试！");
        }
      });
    });
    $(document).on("touchstart",".score-exchange-box .box-close",function(event){
      event.preventDefault();
      var container = $(this).parents(".score-exchange-box");
      container.find(".box").removeClass("show shake").addClass("fade-out");
      container.fadeOut(300);
    });
    $(document).on("click",".exchange-trigger",function(event){
      event.preventDefault();
      var container = $(this).parents("li");
      var exchangeBox = container.find(".score-exchange-box");
      var currentScore = parseInt($(this).attr("data-score"));
      var box = exchangeBox.find(".box");
      var score = parseInt(container.find(".prize-info .score").text());
      if(currentScore < score) {
        $("#score-lack").show();
        setTimeout(function(){
          $("#score-lack").fadeOut();
        },500);
        return ;
      }
      expectedScore = currentScore - score ;
      exchangeBox.removeClass("hidden success").show();
      refreshBoxPos(box);
      box.removeClass("fade-out").addClass("show");
    });
  }
  var triggerAwardBox = function(obj){
    var container = obj.parents(".prize-item").find(".score-award-box");
    var box = container.find(".box");
    container.removeClass("hidden").show();
    refreshBoxPos(box);
    box.removeClass("fade-out").addClass("show");
  }
  var validateExchangePostage = function(box){
    var name = box.find("[name=name]");
    var mobile = box.find("[name=mobile]");
    var address = box.find("[name=address]");
    var remark = box.find("[name=remark]");
    var params = {};

    if(name.is(":visible")){
      var nameVal = $.trim(name.val());
      if(nameVal == '') {
        name.addClass("alert");
        return false ;
      } else {
        name.removeClass("alert");
        params['name'] = nameVal;
      }
    }
    if(mobile.is(":visible")) {
      var phone = /^\+?[0-9\-]+$/;
      var mobileVal = $.trim(mobile.val());
      if(mobileVal == '' || !phone.test(mobileVal)) {
        mobile.addClass("alert");
        return false ;
      } else {
        mobile.removeClass("alert");
        params['mobile'] = mobileVal;
      }
    }
    if(address.is(":visible")) {
      var addressVal = $.trim(address.val());
      if(addressVal == '') {
        address.addClass("alert");
        return false ;
      } else {
        address.removeClass("alert");
        params['address'] = addressVal;
      }
    }
    if(remark.is(":visible")){
      var remarkVal = $.trim(remark.val());
      if(remarkVal == '') {
        remark.addClass("alert");
        return false ;
      } else {
        remark.removeClass("alert");
        params['remark'] = remarkVal;
      }
    }
    return params ;
  }
  var ctrlParams = {};
  var controlBehavior = function(){
    $(document).on("touchstart","#member-box #tabs a",function(event){
      event.preventDefault();
      var container = $(this).parents("#member-box");
      $(this).addClass("selected").siblings("a").removeClass("selected");
      if($(this).hasClass("add")) {
        container.find(".add-box").removeClass("hidden").siblings(".minus-box").addClass("hidden");
      } else {
        container.find(".add-box").addClass("hidden").siblings(".minus-box").removeClass("hidden");
      }
    });
    $(document).on("touchstart","#control-confirm .pop-hd .close",function(event){
      event.preventDefault();
      $(this).parents("#control-confirm").addClass("hidden");
    });
    $(document).on("touchstart","#control-confirm .control-act-trigger",function(event){
      event.preventDefault();

    });
    $(document).on("touchstart",".control-act-trigger",function(event){
      event.preventDefault();
      var container = $(".change-box:visible");
      var delta = $.trim(container.find("[name=delta]").val());
      var ruleType = container.find("[name=ruletype]:visible:checked").val();
      var ruleTypeText = container.find("[name=ruletype]:checked").next(".type-text").text();
      var remark = $.trim(container.find("[name=remark]").val());
      var mutateType = $("#tabs a.selected").hasClass("add") ? 1 : -1 ;
      var openid = $(this).attr("data-openid");
      var scoreCur = $(this).attr('data-score');
      if(delta == '' || isNaN(delta)){
        alert("请填写正确的积分数量");
        return ;
      }
      if(ruleType == undefined || ruleType == '') {
        alert("请选择原因");
        return ;
      }
      if(mutateType == -1 && parseInt(delta) > parseInt(scoreCur)) {
        alert('积分不足');
        return ;
      }
      ctrlParams = {
        "rule_type": parseInt(ruleType),
        "remark": remark,
        "delta": parseInt(delta),
        "mutate_type": parseInt(mutateType),
        "openid": openid
      };
      popControlConfirm(mutateType,ruleTypeText,delta,remark);
    });
    $(document).on('touchstart','.control-submit-trigger',function(event){
      event.preventDefault();
      var container = $('#control-confirm');
      var domain = $(this).attr('data-domain');
      var loading = container.find('.alert-loading');
      var success = container.find('.alert-success');
      var invalid = container.find('.alert-invalid');
      container.find('.alert-box-pop').addClass('hidden');
      container.find('.alert-loading').removeClass('hidden');
      $.post('/score/control-act?special='+domain,ctrlParams,function(data){
        loading.addClass('hidden');
        if(data['status'] == 'success'){
          success.removeClass('hidden');
          var mutateStr = ctrlParams['mutate_type'] == -1 ? '-' : '';
          var url = 'http://'+domain+'.weixin.drip.im/score/control-success';
          url += '?score=' + mutateStr + ctrlParams['delta'] + '&openid=' + ctrlParams['openid'];
          window.location.href = url ;
        } else {
          invalid.removeClass('hidden');
        }
      }).done(function(){
        setTimeout(function(){
          success.addClass('hidden');
          invalid.addClass('hidden');
          container.addClass('hidden');
        },1500);
      });
    });
    $(document).on('touchstart','#member-box .content',function(event){
      event.preventDefault();
      var input = $(this).find('input');
      if(input.length > 0) {
        if(input.attr('type') == 'radio') {
          input.prop('checked',true);
        } else {
          input.focus();
        }
      }
    });
  }
  var popControlConfirm = function(mutateType,ruleTypeText,delta,remark){
    var confirm = $("#control-confirm");
    confirm.removeClass("hidden");
    var alertPop = confirm.find(".alert-box-pop");
    var height = parseInt(alertPop.height());
    alertPop.css("marginTop","-"+height/2+"px");

    var mutateText = mutateType == 1 ? '增加' : '减少';
    alertPop.find(".mutate-text").text(mutateText);
    alertPop.find(".score").text(delta);
    alertPop.find(".remark").text(remark)
    alertPop.find(".reason").text(ruleTypeText);

    if(remark == '') {
      alertPop.find(".remarks").hide();
    } else {
      alertPop.find(".remarks").show();
    }
  }
  var checkBehavior = function(){
    if($("#check-box").length > 0 && $(".award-box-trigger").length > 0) {
      var obj = $(".award-box-trigger");
      setTimeout(function(){
        triggerAwardBox(obj);
      },1000);
    }
  }
  var qrcodeBehavior = function(){
    $(document).on('click', '.qrcode-follow-trigger', function(event) {
      var qrcodePop = $(".qrcode-pop");
      var qrcodeBox = qrcodePop.find(".qrcode-box");
      qrcodePop.addClass("show");
      var height = parseInt(qrcodeBox.height());
      qrcodeBox.css({marginTop:'-'+(height/2+10)+'px'});
    });
    $(document).on("click",".qrcode-cover",function(){
      $(".qrcode-pop").removeClass("show");
    });
  }
  var refreshScoreVals = function(){
    $(".refresh-score").text(expectedScore);
    $(".exchange-trigger").attr("data-score",expectedScore);

    var box = $(".score-exchange-box:visible .box");
    refreshBoxPos(box);
  }
  var refreshBoxPos = function(box){
    var height = 0 - box.height()/2 + parseInt($(window).scrollTop()) + "px";
    box.css("marginTop",height);
  }
  exports.init = function(){
    scoreBehavior();
    qrcodePopBehavior();
    qrcodeBehavior();
    awardBehavior();
    exchangeBehavior();
    controlBehavior();
    checkBehavior();
  }
});
