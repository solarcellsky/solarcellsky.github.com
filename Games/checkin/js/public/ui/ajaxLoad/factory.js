define(function(require, exports) {
  var juicer = require("juicer");
  require("ajaxLoadCss");

  var defaultQuery = {
    page:1,
    size:8
  };
  var pageNavHtml =  '<div class="{@if pages == 1}one-page{@/if}">'
  pageNavHtml     += '<select class="select-page">';
  pageNavHtml     +=  '{@each os as o,k}';
  pageNavHtml     +=    '<option value="${k}" {@if page == k} selected="true"{@/if}>${o}</option>';
  pageNavHtml     +=  '{@/each}';
  pageNavHtml     += '</select>';
  pageNavHtml     += '<div class="page-navigate fn-clear">';
  pageNavHtml     +=   '<a href="javascript:void(0);" class="prev ${prev}"></a>';
  pageNavHtml     +=   '<a href="javascript:void(0);" class="next ${next}"></a>';
  pageNavHtml     += '</div>';
  pageNavHtml     += '</div>';
  var waterfall = function(url,box,query,render){
    var w = {
      init:function(url,box,query,render){
        this.token = false;
        this.url = url;
        this.box = box;
        if(query){
          this.query = query;
        }else{
          this.query = defaultQuery;
        }
        this.render = render?render:this.render;
        this.control();
        this.getData();
      },
      control:function(){
        box.on("scroll",function(){
          if(box.hasClass("waterfall-noMore")) return;
          var height = box.height();
          var scrollHeight = box[0].scrollHeight;
          var scrollTop = box[0].scrollTop;
          // console.log("height:"+height);
          // console.log("scrollHeight:"+scrollHeight);
          // console.log("scrollTop:"+scrollTop);
          if(scrollTop == scrollHeight-height){
            if(w.token) return;
            w.saveCache();
            w.query.page++;
            w.getData();
          }
        });
      },
      getData:function(){
        w.token = true;
        box.addClass("waterfall-loading");
        $.post(w.url,w.query).success(function(rs){
          w.token = false;
          rs = $.parseJSON(rs);
          w.renderBox();
          if(rs.status == "success"){
            w.pages = Math.ceil(parseInt(rs.result['count'])/w.query.size);
            w.render(rs.result['data']);
          }else{
            w.query.page = w.cachePage;
            w.render([]);
          }
        }).fail(function(err){
          token = false;
          w.query.page = w.cachePage;
          w.renderBox();
          alert("连接失败");
        });
      },
      saveCache:function(){
        w.cachePage = w.query.page;
      },
      renderBox:function(){
        box.removeClass("waterfall-loading");
        if(w.pages == w.query.page){
          box.addClass("waterfall-noMore");
        }
      }
    };
    w.init(url,box,query,render);
    return w;
  };
  var pageNav = function(url,box,query,render,wait){
    var p = {
      init:function(url,box,query,render,wait){
        this.url = url;
        this.box = box;
        this.pages = 0;
        if(query){
          this.query = query;
        }else{
          this.query = defaultQuery;
        }
        this.cachePage = query.page;
        this.tpl = pageNavHtml;
        this.token = false;
        this.render = render;
        this.control();
        if(!wait) this.getData();
      },
      control:function(){
        p.box.on("click",".prev:not(.disabled)",function(){
          if(p.token) return;
          p.saveCache();
          p.query.page--;
          p.getData();
        });

        p.box.on("click",".next:not(.disabled)",function(){
          if(p.token) return;
          p.saveCache();
          p.query.page++;
          p.getData();
        });

        p.box.on("change",".select-page",function(){
          if(p.token) return;
          p.saveCache();
          p.query.page = $(this).val();
          p.getData();
        });
      },
      saveCache:function(){
        p.cachePage = p.query.page;
      },
      getData:function(){
        p.token = true;
        if(p.cachePage != p.query.page){
          try {
            notify("加载中..");
          } catch (e) {
            console.log("请加载ui.js");
          }
        }


        $.post(p.url,p.query).success(function(rs){
          p.token = false;
          rs = $.parseJSON(rs);
          if(rs.status == "success"){
            p.pages = Math.ceil(parseInt(rs.result['count'])/p.query.size);
            p.renderPageNav();
            p.render(rs.result['data']);
          }else{
            p.query.page = p.cachePage;
            p.render([]);
          }
        }).fail(function(err){
          token = false;
          p.query.page = p.cachePage;
          try {
            notify("连接失败","alarm");
          } catch (e) {
            console.log("请加载ui.js");
            alert("连接失败");
          }

        });
      },
      reload:function(){
        this.query.page = 1;
        this.getData();
      },
      renderPageNav:function(){
        var pages = p.pages;
        var page = p.query.page;
        var options = {};
        var prev = next = "";
        for (var i = 1; i <= pages; i++) {
          options[i] = i+"/"+pages;
        };
        if(page == 1){
          prev = "disabled";
        }
        if(page == pages){
          next = "disabled";
        }
        var data = {
          page:page,
          pages:pages,
          os:options,
          prev:prev,
          next:next
        };
        var html = juicer(p.tpl,data);
        p.box.html(html);
      }
    };
    p.init(url,box,query,render,wait);
    return p;
  };

  return {
    waterfall:waterfall,
    pageNav:pageNav
  };

});
