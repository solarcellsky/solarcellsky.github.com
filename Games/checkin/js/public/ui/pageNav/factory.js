define(function(require, exports) {
  var pageNavSetup = function(obj,conf){
    var pageNavIndex = $(".ui-page-navigate").length + 1;
    var defaultConf = {
      total : 1,
      current : 1,
      count:10,
      direction :'down',
      mode:'window',
      callback:function(){}
    };
    var object = typeof obj == 'string' ? $(obj) : obj;
    var total = typeof conf['total'] != 'undefined' ? conf['total'] : defaultConf['total'];
    var count = typeof conf['count'] != 'undefined' ? conf['count'] : defaultConf['count'];
    var current = typeof conf['current'] != 'undefined' ? conf['current'] : defaultConf['current'];
    var pageTotal = Math.ceil(total/count);
    var direction = typeof conf['direction'] != 'undefined' ? conf['direction'] : defaultConf['direction'];
    var mode = typeof conf['mode'] != 'undefined' ? conf['mode'] : defaultConf['mode'];
    var callback = typeof conf['callback'] != 'undefined' ? conf['callback'] : defaultConf['callback'];
    var pageDiv = $('<div id="page-nav'+pageNavIndex+'" class="ui-page-navigate fn-clear"></div>');
    var pageDivSelect = $('<div class="page-navigate-select"><div class="page-navigate-current">'+current+'/'+Math.ceil(total/count)+' <span class="page-navigate-arrow"></span></div></div>');
    var pageDivList = $('<div class="page-navigate-list-select-list"><ul></ul></div>');
    if(current == 1) {
      var cursorPrev = '<a class="page-navigate-prev prev-disabled"><em></em></a>';
    }else{
      var cursorPrev = '<a class="page-navigate-prev"><em></em></a>';
    }
    if(total <= current * count) {
      var cursorNext = '<a class="page-navigate-next next-disabled"><em></em></a>';
    }else{
      var cursorNext = '<a class="page-navigate-next"><em></em></a>';
    }
    if(parseInt(total) <= parseInt(count)) {
      pageDiv.css({display:"none"});
    }
    var pageDivCursor = $('<div class="page-navigate-cursor fn-clear">'+cursorPrev+cursorNext+'</div>');

    object.append(pageDiv).find("#page-nav"+pageNavIndex).append(pageDivSelect).append(pageDivCursor);

    if(pageTotal <= 100) {
      var pageDivItem = '';
      for(var i=0;i<Math.ceil(total/count);i++){
        pageDivItem += '<li><a href="javascript:void(0);" data-page="'+(i+1)+'">'+(i+1)+'/'+Math.ceil(total/count)+'</a></li>';
      }
      object.find(".page-navigate-select").append(pageDivList).find("ul").append(pageDivItem);
    }

    if(pageTotal > 100) {
      var jumpDiv = $('<span class="page-jump"></span>');
      var jumpInput = '<input type="text" class="jump-input" name="jumpinput" />';
      var jumpBtn = '<a href="javascript:void(0);" class="jump-button">跳转</a>';
      jumpDiv.append(jumpInput).append(jumpBtn);
      object.addClass("overload").find(".ui-page-navigate").append(jumpDiv);
    }

    setListPos(object,direction,false);

    if(!object.hasClass("ui-page-nav")){
      object.addClass("ui-page-nav");
    }

    require.async('scrollbar', function(scrollbar) {
      scrollbar.setup("#page-nav"+pageNavIndex+" .page-navigate-list-select-list",{
        scrollButtons:{
          enable: true
        },
        scrollInertia:150
      });
      object.focus(function(){
        setListPos(object,direction,true);
      });
      object.find(".page-navigate-current").click(function(event){
        event.stopPropagation();
        object.find(".page-navigate-current").addClass("selected");
        setListPos(object,direction,true);
      });
    });

    require.async('uri', function(urlUtil) {
      $(obj).find(".page-navigate-list-select-list li a").click(function(){
        var html = $(this).html();
        var newPage = $(this).attr("data-page");
        setListPos(object,direction,false);
        object.find(".page-navigate-current").removeClass("selected");
        var href = urlUtil.URI(window.location.href).search(function(data){
          data.page = newPage;
        });
        if(mode == 'ajax'){
          callback(href);
        }else{
          window.location.href = href;
        }
      });
      $(obj).find(".page-navigate-prev").not(".prev-disabled").click(function(){
        if(!$(this).hasClass("page-disabled")){
          var prevPage = parseInt(current) - 1 <= 0 ? 1 : parseInt(current)-1;
          var href = urlUtil.URI(window.location.href).search(function(data){
            data.page = prevPage;
          });
          if(mode == 'ajax'){
            callback(href);
          }else{
            window.location.href = href;
          }
        }
      });
      $(obj).find(".page-navigate-next").not(".next-disabled").click(function(){
        if(!$(this).hasClass("page-disabled")){
          var nextPage = parseInt(current) + 1;
          var href = urlUtil.URI(window.location.href).search(function(data){
            data.page = nextPage;
          });
          if(mode == 'ajax'){
            callback(href);
            return;
          }else{
            window.location.href = href;
            return;
          }
        }
      });
      $(obj).find(".page-jump .jump-button").click(function(){
        var container = $(this).parents(".page-jump");
        var val = $.trim(container.find(".jump-input").val());
        if(isNaN(val) || val == '' ) {
          alert("请输入正确的页码");
          return ;
        }
        if(val <= 0 || val > pageTotal) {
          alert("输入的页码超出范围");
          return ;
        }
        var page = parseInt(val);
        var href = urlUtil.URI(window.location.href).search(function(data){
          data.page = page;
        });
        if(mode == 'ajax'){
          callback(href);
          return;
        }else{
          window.location.href = href;
          return;
        }
      });
      $("body").click(function(){
        setListPos(object,direction,false);
      });
      $(obj).find(".mCSB_scrollTools").on("click",function(event){
        event.stopPropagation();
      });
    });
  };

  var setListPos = function(object,direction,status){
    if(status == true) {
      if(direction == 'up') {
        object.find(".page-navigate-list-select-list").css({left:0,top:"auto",bottom:"35px"});
      }else{
        object.find(".page-navigate-list-select-list").css({left:0,top:"35px"});
      }
    }else {
      object.find(".page-navigate-list-select-list").css({left:"-99999px",top:"-99999px"});
    }
  };

  require("pageNavCss");

  var pageNavRefresh = function(){
    if($(".ui-page-nav").length >0){
      $(".ui-page-nav").each(function(n){
        var t = typeof $(this).attr("data-total") == 'undefined' ? 1 : $(this).attr("data-total");
        var c = typeof $(this).attr("data-current") == 'undefined' ? 1 : $(this).attr("data-current");
        var n = typeof $(this).attr("data-count") == 'undefined' ? 10 : $(this).attr("data-count");
        var d = typeof $(this).attr("data-direction") == 'undefined' ? 'down' : $(this).attr("data-direction");
        var m = typeof $(this).attr("data-mode") == 'undefined' ? 'window' : $(this).attr("data-mode");
        var b = typeof $(this).attr("data-callback") == 'undefined' ? function(){} : eval($(this).attr("data-callback"));
        pageNavSetup($(this),{
          current:c,
          total:t,
          count:n,
          direction:d,
          mode:m,
          callback:b
        });
      });
    }
  };

  pageNavRefresh();

  /**
   * 用新params查询之后页面区域(selector)替换当前页面区域(selector)
   */
  jQuery.refreshRegion = function(selector, params, callback) {
    var url = window.location.pathname;
    var queryString = $.param(params);
    var temp = $("<div></div>");
    $(temp).load(url + '?' + queryString + " " + selector + ">*", function() {
      $(selector).html($(temp).children());
      callback();
    });
  };
  /**
   * 全新的分页组件
   *  readParams -- function读取查询参数
   *  标签data属性
   *    data-refresh-selector，
   *      要刷新的区域,比如要刷新一个id为data-list的table，则填#data-list
   *    data-count
   *      每页条数
   *    data-total
   *      总条数
   */
  jQuery.fn.makeNav = function(config) {
    config = config || {};
    var readParams = function() { return {};};
    var reloadCallback = function() {};
    if($.isFunction(config)) {
      readParams = config;
    }
    if($.isFunction(config.readParams)){
      readParams = config.readParams;
    }
    if($.isFunction(config.reloadCallback)) {
      reloadCallback = config.reloadCallback;
    }
    var div = this;
    var count = $(div).attr('data-count');
    var total = $(div).attr('data-total');
    var extraQueries = $(div).data('query') || {};
    if(!total) {
      return;
    }
    var refreshSelector = $(div).attr('data-refresh-selector');
    var currentPage = $(div).attr('data-current') || 1;
    readParams = readParams || function() {return {};};
    //refresh content inside selector with new query params

    //load page
    var loadPage = function (page, callback) {
      var query = $.extend(extraQueries, readParams());
      query.page = page;
      jQuery.refreshRegion(refreshSelector, query, callback);
    };
    // make nav
    var makeNav = function(currentPage) {
      $(div).html("").removeClass("ui-page-nav")
        .addClass("ui-page-nav").attr('data-current', currentPage);
      pageNavSetup($(div), {
        current:  currentPage,
        total: total,
        count: count,
        direction: "up",
        mode: "ajax",
        callback: function(href) {
          var page = 1;
          if(href && href._parts && href._parts.query) {
            var q = href._parts.query;
            var matched = /page\=(\d+)/.exec(q);
            page = matched ? matched[1] : 1;
          }
          loadPage(page, function() {
            makeNav(page);
            reloadCallback();
          });
        }
      });
    };
    makeNav(1);
  };


  return {
    setup:pageNavSetup,
    refresh:pageNavRefresh
  };

});
