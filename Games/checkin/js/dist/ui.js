define(function(require, exports) {
  var fancybox = require("fancybox");
  var scrollbar = require("scrollbar");
  var easing = require("easing");
  var buttonSelectBehavior = function(){
    $(document).on("click",".ui-button-select",function(event){
      event.stopPropagation();
      if(!$(this).hasClass("unfold")){
        $(this).addClass("unfold");
      }else{
        $(this).removeClass("unfold");
      }
    });
    $(document).on("click","body",function(){
      $(".ui-button-select").removeClass("unfold");
    });
  };
  window.switchToken = true;
  window.switchLoaded = false ;
  var switchBehavior = function(){
    //ui.js可能被多次引入，填坑
    if(switchLoaded) {
      return ;
    }
    switchLoaded = true ;
    $(document).on("click",".ui-switch",function(){
      if(!switchToken){
        return ;
      }
      if($(this).hasClass("on")){
        $(this).next(".switch-status").text("已关闭");
        $(this).removeClass("on");
      }else{
        $(this).next(".switch-status").text("已开启");
        $(this).addClass("on");
      }
    });
  };
  //多选框
  var checkBoxBehavior = function(){
    $(document).on("click",".ui-checkbox",function(){
      if($(this).hasClass("disabled") || $(this).hasClass("special")){
        return;
      }
      if($(this).hasClass("checked")){
        $(this).removeClass("checked");
      }else{
        $(this).addClass("checked");
      }
    });
  };
  //下拉框
  var selectBoxBehavior = function(){
    $(document).on("click",".ui-select",function(){
      if(!$(this).hasClass("show")&&!$(this).hasClass("lock")){
        $(this).addClass("show");
      }
    });
    $(document).on("click",".ui-select-box",function(){
      if(!$(this).hasClass("show")&&!$(this).hasClass("lock")){
        $(this).addClass("show");
        $(this).find(".select-list").mCustomScrollbar("update");
      }
    });
    $(document).on("click",".ui-select-box .select-list li:not(.disabled)",function(event){
      event.stopPropagation();
      var text = $(this).html();
      var val = $(this).attr("data-val");
      var selectBox = $(this).parents(".ui-select-box");
      selectBox.find(".select-current").html(text);
      selectBox.removeClass("show").attr("data-val",val);
      if(val!==''){
        selectBox.removeClass("alert");
        selectBox.addClass("selected");
      }else{
        selectBox.removeClass("selected");
      }
    });
    $(document).on("click",".ui-select-tiny .select-current",function(){
      $(this).parents(".ui-select-tiny").addClass("show");
    });
    $(document).on("click",".ui-select-tiny .select-list li",function(){
      var val = $(this).attr("data-val");
      var text = $(this).text();
      var container = $(this).parents(".ui-select-tiny");
      var items = $(this).parents(".select-list").find("li");
      var currentSelected = container.find(".select-current span");
      items.removeClass("selected");
      currentSelected.attr("data-val",val).text(text);
      $(this).addClass("selected");
    });
    refreshUiSelect();
  };
  window.refreshUiSelect = function(){
    $(".ui-select-box .select-list").each(function(){
      if(!$(this).hasClass("mCustomScrollbar")){
        $(this).mCustomScrollbar({
          scrollButtons:{
            enable:false
          },
          scrollInertia:150
        });
      }
    });
  };
  //列表
  var tableBehavior = function(){
    $(document).on("click",".ui-th .ui-checkbox",function(){
      if($(this).hasClass("checked")){
        $(this).parents(".ui-table").find(".ui-checkbox").addClass("checked")
          .parents(".ui-table").find(".ui-tr").addClass("selected");
      }else{
        $(this).parents(".ui-table").find(".ui-checkbox").removeClass("checked")
          .parents(".ui-table").find(".ui-tr").removeClass("selected");
      }
    });
    $(document).on("click",".act",function(){
      if($(this).parents(".ui-tr").hasClass("unfold")){
        $(this).parents(".ui-tr").removeClass("unfold").next(".ui-tr-extend").hide();
      }else{
        $(this).parents(".ui-tr").addClass("unfold").next(".ui-tr-extend").show();
      }
    });
    $(document).on("click",".row-checkbox",function(){
      if($(this).hasClass("checked")){
        $(this).parents(".ui-tr").addClass("selected");
      }else{
        $(this).parents(".ui-tr").removeClass("selected");
      }
    });
  };
  //撤销操作
  var bodyBehavior = function(){
    $("body").click(function(event){
      $(".ui-select").not(".modal").removeClass("show");
      $(".ui-select-box").removeClass("show");
      $(".ui-select-tiny").removeClass("show");
    });
  };
  window.fancyClose = false;
  //弹窗
  window.popWin = function(id,conf){
    var winPopTrigger ;
    var config = $.extend({},{
      "title":"提示",
      "type":"alert",
      "contentHtml":"",
      "size":"small",
      "initClass": "",
      "yesTxt":"确定",
      "yesAct":function(){
        $.fancybox.close();
      },
      "noTxt":"取消",
      "noHide": false,
      "noAct":function(){
        $.fancybox.close();
      },
      "closeAct":function(){}
    },conf);
    if($("#wp-"+id).length>0){
      $("#wp-"+id).remove();
    }
    var win = getWinTpl(id);
    win.addClass(config.initClass);
    var winWrap = $('<div class="display:none;"></div>');
    var head = win.find(".pop-hd");
    var body = win.find(".pop-bd");
    var foot = win.find(".pop-ft");
    var yesBtn = $('<a href="javascript:void(0);"></a>');
    var noBtn = $('<a href="javascript:void(0);"></a>');
    var closeBtn = $('<a class="pop-close" href="javascript:$.fancybox.close();"><em></em></a>');
    yesBtn.addClass("ui-button-gold act-yes").html(config.yesTxt);
    noBtn.addClass("ui-button-gray act-no").html(config.noTxt);
    yesBtn.bind("click",config.yesAct);
    noBtn.bind("click",function(){
      config.noAct();
      if(typeof conf.noAct == 'undefined') {
        config.closeAct();
      }
    });
    closeBtn.bind("click",config.closeAct);
    head.find("h3").html(config.title);
    body.find(".pop-bd-wrap").html(config.contentHtml);
    if(config.size=="large"){
      win.addClass("ui-win-large");
    }
    if(config.type!="naked"){
      foot.find(".pop-action").append(yesBtn);
    }
    if(config.type=='confirm' && ! config.noHide){
      foot.find(".pop-action").append(noBtn);
    }
    if(config.type!='alert'){
      head.append(closeBtn);
    }
    if(config.type=='naked'){
      foot.addClass("hidden");
    }
    win.find(".win-pop-wrap").append(head).append(body).append(foot);
    if($("#wpt-"+id).length>0){
      winPopTrigger = $("#wpt-"+id);
    }else{
      winPopTrigger = $('<a href="javascript:void(0);"></a>');
      winPopTrigger.attr("id","wpt-"+id)
        .attr("href","#wp-"+id)
        .addClass("ui-pop-custom");
      $("body").append(winPopTrigger);
    }
    winWrap.append(win);
    $("body").append(winWrap);
    // keydownCapture(function(){
    //   $("#wp-"+id+" .act-yes").click();
    // });
    winPopTrigger.click();
    window.fancyClose = false;
    $("body").attr("onmousewheel","return false;");
  };
  var getWinTpl = function(id){
    var winTpl = '<div class="ui-win-pop" id="wp-'+id+'">';
    winTpl +=               '<div class="win-pop-wrap">';
    winTpl +=                       '<div class="pop-hd">';
    winTpl +=                               '<h3></h3>';
    winTpl +=                               '<a class="close" href="javascript:void(0);"></a>';
    winTpl +=                       '</div>';
    winTpl +=                       '<div class="pop-bd">';
    winTpl +=                               '<div class="pop-bd-wrap">';
    winTpl +=                               '</div>';
    winTpl +=                       '</div>';
    winTpl +=                       '<div class="pop-ft">';
    winTpl +=                               '<div class="pop-ft-wrap">';
    winTpl +=                                       '<div class="pop-action"></div>';
    winTpl +=                               '</div>';
    winTpl +=                       '</div>';
    winTpl +=               '</div>';
    winTpl +=        '</div>';
    return $(winTpl);
  };
  var channelBehavior = function(){
    $("#nav a").click(function(){
      $("#nav a").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".col-sub .menu li").click(function(){
      $(".col-sub .menu").removeClass().addClass("menu");
      $(".col-sub .menu").find("li").removeClass("selected");
      $(this).addClass("selected");
    });
  };
  //按键事件捕捉
  window.keydownCapture = function(act){
    $(document).unbind('keypress');
    $(document).bind('keypress',function(event){
      if(13==event.charCode){
        act();
      }
    });
  };
  window.smallTipsTrigger = function(config){
    var obj = config['trigger'];
    var contextHtml = config['contextHtml'];
    var mode = config['mode'];
    var maskContainer = config['maskContainer'];
    var smallTips = $('<div class="ui-small-tips"></div>');
    var smallTipsBody = $('<div class="tips-body">'+contextHtml+'</div>');
    var smallTipsFoot = $('<div class="tips-foot"></div>');
    var smallTipsAct = $('<div class="tips-act"></div>');
    var smallTipsMask = $('<div class="ui-small-tips-mask _mask"></div>');
    var tipsYes = '<a class="ui-button-gold-small yes" href="javascript:void(0);">确定</a> ';
    var tipsNo = '<a class="ui-button-gray-small no" href="javascript:void(0);">取消</a>';
    var dismissAuto = typeof config['dismissAuto'] == 'undefined'
          ? true : config['dismissAuto'];
    var callback = typeof config['callback'] == 'undefined'
          ? function(){}
        : config['callback'];
    var cancel = typeof config['callback'] == 'undefined'
          ? function(){}
        : config['cancel'];
    smallTipsAct.append(tipsYes);
    if('confirm'==mode){
      smallTipsAct.append(tipsNo);
    }
    smallTipsAct.find(".yes").bind("click",function(event){
      event.stopPropagation();
      if(dismissAuto){
        smallTipsRemove();
      }
      callback();
    });
    smallTipsAct.find(".no").bind("click",function(event){
      event.stopPropagation();
      if(dismissAuto){
        smallTipsRemove();
      }
      cancel();
    });
    smallTipsFoot.append(smallTipsAct);
    smallTips.append(smallTipsBody).append(smallTipsFoot);
    if(typeof maskContainer == 'undefined'){
      obj.append(smallTipsMask);
    }else{
      maskContainer.append(smallTipsMask);
    }
    obj.append(smallTips);
  };
  window.smallTipsRemove = function(){
    $(".ui-small-tips").remove();
    $(".ui-small-tips-mask").remove();
  };

  //通知
  window.notifyStart = function(text,type,isAutoHide){
    var notify = $('#notify');
    notify.text(text);

    var ml = parseInt($("#notify").width())/2
    notify.text(text).css('marginLeft','-' + ml + 'px');

    if(type == 'alarm'){
      notify.addClass("alarm");
    }else{
      notify.removeClass();
    }
    notify.show();
  };
  window.notifyOver = function(){
    $("#notify").slideUp(200);
  };
  window.notify = function(text,type){
    notifyStart(text,type);
    setTimeout(function(){
      notifyOver();
    },1000);
  };

  //漂浮提示
  window.floatTips = function(type,text,container,isMask,isDismiss){
    var tipHtml = '<div class="ui-float-tips tip-'+type+'">';
    tipHtml += '<div class="tips-wrap">';
    if(type=='wait'){
      tipHtml += '<img src="http://static.drip.im/img/common/single/loading-mini.gif" /> '+text;
    }else{
      tipHtml += '<em></em> '+text;
    }
    tipHtml += '</div>';
    tipHtml += '</div>';
    if(isMask){
      tipHtml += '<div class="ui-float-tips-mask"></div>';
    }
    container = typeof container == 'string'?$(container):container;
    container.css({position:"relative"});
    container.append(tipHtml).find(".ui-float-tips").animate({marginTop:"-30px",display:"block"},300);
    if(isDismiss!==false){
      setTimeout(function(){
      container.find(".ui-float-tips").remove();
      container.find(".ui-float-tips-mask").remove();
      },800);
    }
  };

  exports.init = function() {
    buttonSelectBehavior();
    selectBoxBehavior();
    checkBoxBehavior();
    switchBehavior();
    channelBehavior();
    tableBehavior();
    bodyBehavior();
  };
});
