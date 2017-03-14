define(function(require, exports){
  require('jQueryRotate');
  var oriHeight ;
  var downCountInterval ;
  var downCountBehavior = function(){
    $(document).ready(function(){
      initTimeDownCount();
      var last = $(".count-num").last();
      downCountInterval = setInterval(function(){
        countDown(last);
      },60000);
    });
  };

  var countDown = function(target){
    if(timeup()) {
      clearInterval(downCountInterval);
      $("#time-status").slideUp(function(){
        window.location.reload();
      });
      return ;
    }
    target.addClass("trans");
    setTimeout(function(){
      var max = target.attr("data-max");
      var numCur = parseInt(target.find("i").text());
      var numNext = numCur == 0 ? max : numCur - 1;
      var numNextAfter = numNext == 0 ? max : numNext - 1;
      target.removeClass("trans").find("i").text(numNext);
      target.find(".next").text(numNextAfter);
      if(numCur == 0){
        var prev = target.prevAll(".count-num").first();
        var next = target.nextAll(".count-num").first();
        if(prev.find("i").text() == 0){
          $(this).attr("data-max",3);
        }
        countDown(prev);
      }
    },300);
  };

  var timeup = function(){
    var countNum = $(".count-num");
    var flag = true ;
    countNum.each(function(){
      if($(this).find("i").text() != 0) {
        flag = false ;
        return false;
      }
    });
    return flag ;
  };

  var initTimeDownCount = function(){
    var countObj = $(".time-count");
    var remain = parseInt(countObj.attr("data-remain"));
    var days = parseInt(remain/86400000);
    var hours = parseInt((remain-days*86400000)/3600000);
    var minutes = parseInt((remain-days*86400000-hours*3600000)/60000);
    var daysVal = days.toString();
    var hoursVal = hours.toString();
    var minutesVal = minutes.toString();
    var html = '<span class="time">活动在';
    for(var i=0; i< daysVal.length; i++){
      html += formatDownCountCell(daysVal[i],9);
    }
    html += '<em>天</em>';
    if(hoursVal.length == 1) {
      hoursVal = '0'+hoursVal ;
    }
    for(var i=0; i< hoursVal.length; i++){
      var max = 9;
      if(i == 0) {
        max = 2;
      }
      if(i == 1 && hoursVal[0] == 0){
        max = 3;
      }
      var isDecade = i == 1 ;
      html += formatDownCountCell(hoursVal[i],max,isDecade);
    }
    html += '<em>时</em>';
    if(minutesVal.length == 1) {
      minutesVal = '0'+minutesVal ;
    }
    for(var i=0; i< minutesVal.length; i++){
      var max = i == 0 ?  5 : 9;
      html += formatDownCountCell(minutesVal[i],max);
    }
    html += '<em>分</em></span>后开始';
    $("#time-status").html(html);
  };

  var formatDownCountCell = function(val,max,isDecade){
    var next = val == 0 ? max : parseInt(val) - 1;
    var decade = isDecade ? 'hour-decade' : '';
    var html = '<span class="count-num '+decade+'" data-max="'+max+'">' +
          '<i>'+val+'</i>' +
          '<span class="next">'+next+'</span>' +
          '</span>';
    return html ;
  };

  var judgeBehavior = function(){
    $(document).on("click",".view-lucky",function(){
      $("#sheet").removeClass("lucky");
      $("#my-prizes").click();
    });
  };

  var beforeY,curY ;
  var wheelBehavior = function(){
    $(document).on('touchstart touchmove touchcancel','body.ing',function(ev){
      ev.preventDefault();
    });
    $(document).ready(function(){
      oriHeight = parseInt($("body").height());
    });
    $(document).on("click","#sheet .start-button",function(){
      if($(this).hasClass("preview")){
        return ;
      }
      if($(this).hasClass('disabled')) {
        var text = $(this).attr("data-alert");
        $(".alert-popup h3").text(text);
        $(".alert-popup").removeClass("hidden");
        $(".pop-cover").removeClass("hidden");
        return ;
      }
      if(!judgeActToken) {
        return ;
      }
      if($(this).attr("data-is-score")==1){
        var valid = $(this).attr("data-score-valid") == 1;
        var score = $(this).attr("data-score");
        var scoreCost = $(this).attr("data-score-cost");
        if(!valid) {
          var text = "每次抽取将消耗<em>"+scoreCost+"</em>积分<br />当前剩余<em>"+score+"</em>积分";
          $(".alert-popup .score-cancel-act").removeClass("hidden");
        } else {
          var text = "每次抽取将消耗<em>"+scoreCost+"</em>积分<br />当前剩余<em>"+score+"</em>积分";
          $(".alert-popup .score-confirm-act").removeClass("hidden");
        }
        $(".alert-popup h3").html(text);
        $(".alert-popup").removeClass("hidden");
        $(".alert-popup .alert-act").addClass("hidden");
        $(".pop-cover").removeClass("hidden");
        return ;
      }
      judgeActToken = false;
      $(this).addClass("disabled");
      var countRemain = $(this).find("i span");
      var newCount = parseInt(countRemain.text()) - 1;
      countRemain.text(newCount <= 0 ? 0 : newCount);
      wheelRunAct();
    });
    $(document).on("click","#sheet .continue-judge",function(){
      window.location.reload();
    });
    initWheelAct();
  };

  var initWheelAct = function(){
    var wheel = $("#wheel");
    var width = wheel.width();
    wheel.height(width);

    var slices = wheel.find(".slice");
    var sCount = slices.length ;
    var deg = 360/sCount;
    slices.each(function(n){
      var degRotate = deg * (n+1);
      var degSkew = 90 - deg ;
      var transformStyle = 'rotate(-'+degRotate+'deg) skew('+degSkew+'deg)';
      var width = $(this).width();
      $(this).height(width);
      $(this).css('-webkit-transform', transformStyle);
      $(this).css('-moz-transform', transformStyle);
      $(this).css('-ms-transform', transformStyle);
      $(this).css('-o-transform', transformStyle);
      $(this).css('transform', transformStyle);

      var prize = $(this).find(".prize");
      var prizeTransformStyle = 'rotate(0) skew(-'+degSkew+'deg)';
      var floatLeft = '-'+prize.width()/2/Math.tan((2*Math.PI/360) * (90-degSkew))+'px';
      prize.css('-webkit-transform', prizeTransformStyle);
      prize.css('-moz-transform', prizeTransformStyle);
      prize.css('-ms-transform', prizeTransformStyle);
      prize.css('-o-transform', prizeTransformStyle);
      prize.css('transform', prizeTransformStyle);
      prize.css('left', floatLeft);

      var prizeEm = prize.find("em");
      var prop = $(this).attr("data-level") == -1 ? 0.35 : 0.4;
      var distance = parseInt(prize.width()) * prop;
      var emLeft = distance * Math.cos((2*Math.PI/360)*(90-degSkew)/2);
      var emTop = distance * Math.sin((2*Math.PI/360)*(90-degSkew)/2);
      var prizeEmTransformStyle = 'rotate('+(90-degSkew)/2+'deg)';
      prizeEm.css('-webkit-transform', prizeEmTransformStyle);
      prizeEm.css('-moz-transform', prizeEmTransformStyle);
      prizeEm.css('-ms-transform', prizeEmTransformStyle);
      prizeEm.css('-o-transform', prizeEmTransformStyle);
      prizeEm.css('transform', prizeEmTransformStyle);
      prizeEm.css('left', floatLeft);
      prizeEm.css('left',emLeft).css('top',emTop);
    });

    var startButton = $("#sheet .start-button");
    var width = wheel.width();
    var size = width*0.28;
    startButton.height(size).width(size)
      .css("marginLeft",0-size/2)
      .css("marginTop",0-width/2-size/2);

    $("#sheet").addClass("show");
  };

  var initSlotsBehavior = function(){
    var slots = $(".slot");
    slots.each(function(){
      var pic = $(this).find(".prize img");
      var width = pic.width();
      pic.height(width);
    });
    var startButton = $("#sheet .slot-start");
    var slotHeight = $(".slot:visible").first().height();
    startButton.height(slotHeight*0.92).addClass("show");
    //restore image width
    $('.slot .prize img').css({width: 'auto'});
    $("#sheet").addClass("show");
  };

  var prizeBehavior = function(){
    $("#my-prizes").click(function() {
      if($(this).find(".entry .count").attr("data-has-prize") == 1) {
        $(".award-box.ops h3").html("温馨提示：请及时兑奖");
        $(".result.with-prize").removeClass("hidden");
        stretchHeight(100);
      } else {
        $(".result.empty").removeClass("hidden");
      }
      adjustPopHeight();
    });
    $(document).on("click","#sheet .result .close",function(){
      if($("#my-prizes .count").is(":visible")) {
        window.location.reload();
        return ;
      }
      $(".result").addClass("hidden");
      stretchHeight(false);
    });
  };

  var slotInterval = 0 ;
  var slotRunInterval ;
  var slotBehavior = function(){
    $(document).on("click",".slot-start",function(){
      if($(this).hasClass('disabled')) {
        var text = $(this).attr("data-alert");
        $(".alert-popup h3").text(text);
        $(".alert-popup").removeClass("hidden");
        $(".pop-cover").removeClass("hidden");
        return ;
      }
      if($(this).attr("data-is-score")==1){
        var valid = $(this).attr("data-score-valid") == 1;
        var score = $(this).attr("data-score");
        var scoreCost = $(this).attr("data-score-cost");
        if(!valid) {
          var text = "每次抽取将消耗<em>"+scoreCost+"</em>积分<br />当前剩余<em>"+score+"</em>积分";
          $(".alert-popup .score-cancel-act").removeClass("hidden");
        } else {
          var text = "每次抽取将消耗<em>"+scoreCost+"</em>积分<br />当前剩余<em>"+score+"</em>积分";
          $(".alert-popup .score-confirm-act").removeClass("hidden");
        }
        $(".alert-popup h3").html(text);
        $(".alert-popup").removeClass("hidden");
        $(".alert-popup .alert-act").addClass("hidden");
        $(".pop-cover").removeClass("hidden");
        return ;
      }
      judgeActToken = false;
      $(this).addClass("disabled");
      var countRemain = $(this).find("i");
      var newCount = parseInt(countRemain.text()) - 1;
      countRemain.text(newCount <= 0 ? 0 : newCount);
      slotInterval = 50 ;
      runSlots();
      slotRunAct();
    });
    initSlotsBehavior();
  };

  var slotRunAct = function() {
    judgeActToken = false ;
    judgeAct();
  };

  var slotCursor = 0;
  var slotDirection = 1;
  var slotToken = true;
  var runSlots = function(mod) {
    var slots = $("#slots .slot");
    if(!slotToken) {
      return ;
    }
    clearInterval(slotRunInterval);
    if(mod == 'slow') {
      slotSlowToken = true;
    } else {
      slotSlowToken = false;
    }
    slotRunInterval = setInterval(function(){
      var currentSlot = slots.eq(slotCursor);
      slots.removeClass("highlight")
        .eq(slotCursor).addClass("highlight");
      if(mod == 'judge') {
        slotInterval = 250;
        var prizeLevel = $.trim(currentSlot.attr("data-level"));
        if( prizeLevel == _hook.prizeLevel) {
          clearInterval(slotRunInterval);
          slotToken = false;
          setTimeout(function(){
            if(prizeLevel == -1) {
              $("#sheet").addClass("pity");
            } else {
              showLucky();
            }
            judgeActToken = true;
            $("body").removeClass("ing");
          },500);
          return ;
        }
      }
      slotCursor = slotCursor + slotDirection * 1;
      if(slotCursor == 4) {
        slotCursor = 5;
      } else if(slotCursor == 6) {
        slotCursor = slotDirection == 1 ? 9 : 6;
        slotDirection = -1;
      } else if(slotCursor == 5) {
        slotCursor = 4;
      } else if(slotCursor == 3 && slotDirection == -1){
        slotCursor = 0;
        slotDirection = 1;
      }
      slotCursor = slotCursor > 9 ? 0 : slotCursor;
      if(slotSlowToken) {
        if(slotInterval > 200) {
          clearInterval(slotRunInterval);
          runSlots('judge');
          return ;
        } else {
          slotInterval += 5;
        }
        runSlots('slow');
        return ;
      }
    },slotInterval);
  };

  var wheelInterval = 0;
  var wheelSlowToken = false ;
  var slotSlowToken = false ;
  var runToken = true;
  var wheelRunInterval ;
  var wheelRunDeg = 10;
  var deg = 0;
  var count = 0;

  var renderTimeDownCount = function(){

  };

  var wheelRunAct = function(){
    judgeActToken = false ;
    judgeAct();
  };

  var judgeActToken = true;
  var judgeAct = function(){
    $("body").addClass('ing');
    clearInterval(luckyBoxInterval);
    $.post("/wheel/judge?special="+_hook.domain,{
      "id":_hook.id
    },function(data) {
      if("success" != data['status']) {
        alert("系统异常，请刷新重试！");
      }
      _hook.prizeInfo = data['result'];
      _hook.prizeLevel = data['result'] == -1 ? -1 : data['result']['grade'];
      slowDown(_hook.prizeLevel);
      reduceChance();
      _hook.prize = data['result'];
    });
  };

  var addPrizeWon = function() {
    var prizeNum = $("#my-prizes .entry .count");
    var num = parseInt(prizeNum.text()) + 1;
    var prizeLevel = _hook.prizeLevel;
    var prize = $("#prize-box .prizes li").eq(parseInt(prizeLevel)-1);
    var prizePic = prize.find(".image-aside img").attr("src");
    var prizeName = prize.find(".prize-info dd").text();
    var success = $(".award-box.success");
    var ops = $(".award-box.ops");
    var isOffline = $(".result .award-box").length > 0;
    var done = false;
    prizeNum.text(num).removeClass("hidden");
    $(".result .prize-list li").each(function(n){
      var level = $(this).attr("data-level");
      if(level==prizeLevel && ($(this).find(".awarded").length < 1 || !isOffline)) {
        var count = $(this).find(".count");
        count.text(parseInt(count.text())+1);
        done = true;
      }
    });
    if(!done) {
      var html = '';
      html += '<li class="fn-clear" data-level="'+prizeLevel+'">';
      if(typeof prizePic != 'undefined') {
        html += '  <span class="picture fn-left"><img src="'+prizePic+'" /></span>';
      }
      var prizeTypeText = _hook.prizeInfo.prizeType === undefined ? "custom-prize" : "";
      var label = isOffline ? ' <span class="not-awarded '+ prizeTypeText +' ">未兑换</span>' : '';
      html += '  <span class="prize fn-left">'+prizeName+label+'<br />';
      html += '    数量：<em class="count">1</em>';
      html += '  </span>';
      html += '</li>';
    }
    $(".result .prize-list").append(html);
    if(!success.hasClass("hidden") && isOffline){
      success.addClass("hidden");
      if($(".postage-box").length < 1) {
        ops.removeClass("hidden");
      }
    }
    if(_hook.prizeInfo.prizeType === undefined) {
      $('.postage-fill-box').removeClass('hidden');
      $('.offline-postage-box.hidden').removeClass('hidden');
      if($('.offline-postage-box').length == 0) {
        $('.detail-box').removeClass('hidden');
        $('.award-box.ops').removeClass('hidden');
      }
    }
    $("#my-prizes").removeClass("hidden").find(".count").attr("data-has-prize",1);
  };

  var adjustPopHeight = function(){
    var popBox = $(".result:visible .pop");
    var height = parseInt(popBox.height());
    var winHeight = parseInt($(window).height());
    var top = Math.abs(winHeight - height)/2;
    if(height < 400) {
      popBox.css({marginTop:top+"px"});
    } else {
      popBox.addClass("hang");
    }
  };

  var reduceChance = function(){

  };

  var slowDown = function(level){
    if($("#wheel").is(":visible")) {
      wheelSlowDownAct(level);
    } else {
      slotSlowDownAct();
    }
  };

  var slotSlowDownAct = function(){
    setTimeout(function(){
      runSlots('slow');
    },2000);
  };

  var wheelSlowDownAct = function(level){
    var deg = 2160+getWheelCurrentPrizeAngel(level);
    var wheel = $("#wheel");
    wheel.css('-webkit-transition-duration','4s');
    wheel.css('-webkit-transition-timing-function','ease-out');
    wheel.css('-webkit-transform','rotate('+deg+'deg)');
    setTimeout(function(){
      if(level == -1) {
        $("#sheet").addClass("pity");
      } else {
        showLucky();
      }
      judgeActToken = true;
      $("body").removeClass("ing");
    },4500);
  };

  var postageSubmitToken = true;
  var awardBehavior = function(){
    $(".word-trigger").click(function(){
      var confirm = $(".word-confirm");
      if(confirm.hasClass("hidden")) {
        confirm.removeClass("hidden");
      } else {
        confirm.addClass("hidden");
      }
      stretchHeight(80);
    });
    $(".postage-submit").click(function(){
      var container = $(".postage-box");
      var name = container.find("[name=name]");
      var mobile = container.find("[name=mobile]");
      var remark = container.find("[name=remark]");
      var nameVal = $.trim(name.val());
      var mobileVal = $.trim(mobile.val());
      var params = {};
      if(!postageSubmitToken) {
        return ;
      }
      postageSubmitToken = false ;
      if(name.length > 0 && nameVal == '') {
        alert("请输入真实姓名");
        return ;
      }
      var regx = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
      if(mobile.length > 0 && !regx.test(mobileVal)) {
        alert("请输入正确的手机号码");
        return ;
      }
      if(remark.length > 0) {
        params['remark'] = $.trim(remark.val());
      }
      params['name'] = nameVal;
      params['phone'] = $.trim(mobile.val());
      params['id'] = _hook.id;
      params['type'] = 2;
      $.post('/wheel/submit-postage?special='+_hook.domain, params ,function(data) {
        var jsonData = data;
        if("success"==jsonData['status']) {
          afterPostageSubmit(container);
        }else {
          alert("提交失败，请重试");
        }
      }).done(function(){
        postageSubmitToken = true;
      });
    });
    var wordAwardAct = true ;
    $(".word-award-act").click(function(){
      var word = $.trim($(".word-input:visible").val());
      var _self = $(this);
      var detailBox = $(".result .detail-box");
      var notAwarded = $(".result .not-awarded.custom-prize");
      if(!wordAwardAct) {
        return ;
      }
      if(word === '' || isNaN(word)) {
        alert("请输入正确的兑奖口令");
        return ;
      }
      _self.text("兑奖..");
      wordAwardAct = false ;
      $.post("/wheel/award-word-act?special="+_hook.domain,{
        "word":word,
        "id":_hook.id
      },function(data){
        var jsonData = data;
        if(jsonData.status == 'success') {
          var ops = $(".award-box.ops");
          var success = $(".award-box.success");
          ops.addClass("hidden");
          success.removeClass("hidden");
          notAwarded.text("已兑奖").removeClass("not-awarded").addClass("awarded");
          detailBox.addClass("hidden");
          $(".detail-box").remove();
          stretchHeight(100);
        } else {
          alert("您输入的口令不正确或兑奖失败");
        }
        _self.text("兑奖");
        wordAwardAct = true ;
      });
    });
  };

  var stretchHeight = function(extraHeight){
    var boxHeight = parseInt($(".result:visible .pop").height());
    if(extraHeight !== false) {
      var height = boxHeight + extraHeight > oriHeight ? boxHeight + extraHeight : oriHeight;
      $(".footer").css('marginBottom',height-oriHeight);
    } else {
      $(".footer").css('marginBottom',0);
    }
  };

  var afterPostageSubmit = function(postageBox){
    var awardBox = $(".award-box.ops");
    var detailBox = $(".detail-box");
    if(awardBox.length > 0) {
      postageBox.addClass("hidden");
      awardBox.removeClass("hidden");
      detailBox.removeClass("hidden");
    }
  };

  var getWheelCurrentPrizeLevel = function(deg){
    var sliceNum = $(".slices .slice").length ;
    var deg = Math.abs(deg)%360;
    var current = Math.ceil(deg/(360/sliceNum));
    current = current == sliceNum ? 0 : current ;
    return $(".slice").eq(current).attr("data-level") ;
  };

  var getWheelCurrentPrizeAngel = function(level){
    var slices = $(".slices .slice");
    var deg = 0;
    var len = slices.length;
    var degCell = 360/len;
    deg -= (2+(len-6)/4) * degCell;
    $(".slices .slice").each(function(n){
      deg += degCell ;
      if($(this).attr("data-level") == level){
        return false;
      }
    });
    return deg ;
  };

  var showLucky = function(){
    $("#sheet").addClass("lucky");
    var lucky = $("#sheet .lucky-result .lucky");
    var detail = $.parseJSON(_hook.prizeInfo.prizeDetail || "{}");
    switch(_hook.prizeInfo.prizeType) {
    case 1:
      var html = $('#redpack-pop-tpl').html();
      lucky.html(html);
      lucky.find('.luck-money-amount span.amount-text').text((detail.amount / 100).toFixed(2));
      lucky.find("#join-ids-input").val(_hook.prizeInfo.joinId);
      break;
    default:
      var imgHeight = lucky.find("img").height();
      var pic = $("#sheet #prize-box .prizes li").eq(parseInt(_hook.prizeInfo.grade)-1).find(".image-aside img").attr("src");
      lucky.find(".prize-info").css("marginTop",'-'+imgHeight * 0.42+'px');
      lucky.find(".prize-info dd img").attr("src",pic);
      lucky.find(".prize-info dt").text(_hook.prizeInfo.prize);
      addPrizeWon();
      break;
    }
  };

  var copyBehaviour = function() {
    var grid = $('.blur-wrap');
    var alertPop = $('.alert-pop');
    var alertBox = $('.alert-box');
    var alertInput = $('.weixin-nick');
    $(document).on('click', '#follow a.trigger', function() {
      var winHeight = $(window).height();
      alertPop.css({
        'height': winHeight
      }).show();
      var inputWidth = $('.input-trigger').width();
      alertInput.css({
        'width': inputWidth+'px'
      });
      var boxHeight = alertBox[0].offsetHeight;
      alertBox.css({
        'margin-top': -(boxHeight/2)+'px',
        'opacity': 1
      });
      grid.addClass('cover');
    });
    $(document).on('click', '.alert-box .close a', function() {
      alertPop.hide();
      grid.removeClass('cover');
    });
    $(document).on('click', '.qrcode-follow-trigger', function(event) {
      var qrcodePop = $(".qrcode-pop");
      var qrcodeBox = qrcodePop.find(".qrcode-box");
      qrcodePop.addClass("show");
      var height = parseInt(qrcodePop.find(".qrcode-box").height());
      qrcodeBox.css({marginTop:'-'+(height/2+10)+'px'});
    });
    $(document).on("click",".qrcode-cover",function(){
      $(".qrcode-pop").removeClass("show");
    });
  };

  var luckyBoxInterval ;
  var luckyBoxBebavior = function(){
    $(document).ready(function(){
      var mt = 0;
      var cursor = 0;
      var ul = $("#lucky-box .box-show ul");
      if(ul.find("li").length < 4) {
        return ;
      }
      luckyBoxInterval = setInterval(function(){
        mt -= 30;
        ul.find("li").eq(cursor).clone().appendTo(ul);
        ul.animate({marginTop:mt+"px"},1000);
        cursor = cursor+1;
      },3000);
    });
  };

  window.alertPopConfirm = function(){
    $(".alert-popup").addClass("hidden");
    $(".pop-cover").addClass("hidden");
  };

  var acquireRedpackBehavior = function() {
    $(document).on('click', '.receive-redpack-trigger', function() {
      var r = validateRedpackPostage();
      if(r) {
        $(this).closest('form').submit();
      }
    });
    $(document).on('click', '.acquire-multi-trigger', function() {
      $('div.result').addClass('hidden');
      var dataLi = $(this).closest('li.prize-li');
      var amount = parseInt(dataLi.data('amount'));
      var joinIds = dataLi.data('joinIds');
      $("#sheet").addClass("lucky");
      var lucky = $("#sheet .lucky-result .lucky");
      var html = $("#redpack-pop-tpl").html();
      lucky.html(html);
      lucky.find('.luck-money-amount span.amount-text').text(amount / 100);
      lucky.find('#join-ids-input').val(joinIds);
    });
  };

  var validateRedpackPostage = function() {
    if($("#redpack-name-input").is(":visible")) {
      if($("#redpack-name-input").val().trim() === "") {
        alert("请输入真实姓名");
        return false;
      }
    }
    if($("#redpack-mobile-input").is(":visible")) {
      var mobile = $("#redpack-mobile-input").val();
      var regx = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
      if(!regx.test(mobile)) {
        alert("请输入正确的手机号码");
        return false;
      }
    }
    return true;
  };

  var judgeWithScoreToken = true;
  window.confirmJudgeWithScore = function(){
    var url = '/wheel/score-cost?special='+_hook.domain + '&id='+_hook.id;
    if(!judgeWithScoreToken) {
      return ;
    }
    alertPopConfirm();
    judgeWithScoreToken = false;
    $.post(url,function(data){
      if("success" != data['status']) {
        alert("系统异常，请刷新重试！");
        return ;
      }
      _hook.prizeInfo = data['result'];
      _hook.prizeLevel = data['result'] == -1 ? -1 : data['result']['grade'];
      if($('#slots').is(':visible')) {
        slotInterval = 50 ;
        runSlots();
      }
      slowDown(_hook.prizeLevel);
      reduceChance();
      _hook.prize = data['result'];
    }).done(function(){
      judgeWithScoreToken = true;
    });
  }

  exports.init = function(){
    downCountBehavior();
    wheelBehavior();
    slotBehavior();
    prizeBehavior();
    awardBehavior();
    judgeBehavior();
    copyBehaviour();
    luckyBoxBebavior();
    acquireRedpackBehavior();
  };
});
