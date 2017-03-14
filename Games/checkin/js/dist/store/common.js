define(function(require, exports) {
  //购物车实时显示
  jQuery.cartStatus = function() {
    $.post('/store/cart/check-status?special=' + domain, {}, function(rs) {
      $('.ui-cart').remove();
      rs = $.parseJSON(rs);
      if(rs.status == 'success'){
        var html = rendToTpl('cart-win-tpl');
        $('body').append(html);
      }
    });
  };
  //加减组件
  $(document).on('click', '.num-picker a.increase, .num-picker a.decrease', function() {
    var actionType = $(this).attr('class');
    var numVal = parseInt($(this).siblings('.pop-quantity').val());
    var _this = $(this);
    updown(_this, actionType, numVal);
  });
  var updown = function(selector, type, num) {
    if(type.indexOf('increase') >= 0) {
      num++;
      updownValidate(selector, num);
    }
    if(type.indexOf('decrease') >= 0) {
      num--;
      updownValidate(selector, num);
    }
  };
  var updownValidate = function(selector, num) {
    _this = $(selector).parents('.num-picker-parent');
    var stockVal = parseInt(_this.find('#pop-sku-stock').text());
    // stockVal = stockVal ? stockVal : 1;
    if(num <= 1) {
      _this.find('.num-picker a').removeClass('locked');
      _this.find('.num-picker a.decrease').addClass('locked');
      _this.find('.pop-quantity').val(1);
    }else if(num >= stockVal) {
      _this.find('.num-picker a').removeClass('locked');
      _this.find('.num-picker a.increase').addClass('locked');
      _this.find('.pop-quantity').val(stockVal);
    }else {
      _this.find('.num-picker a').removeClass('locked');
      _this.find('.pop-quantity').val(num);
    }
  };
  //input监控组件
  jQuery.inputWatch = function(_this) {
    var updateToken = true;
    var inputVal = parseInt(_this.val());
    var stockVal = parseInt(_this.parent().siblings('.pop-sku-stock').text());
    if(!stockVal) {
      return;
    }
    if(isNaN(inputVal)){
      alert('输入的必须是一个整数！');
      _this.val(1);
      updateToken = !updateToken;
    }
    if(inputVal > stockVal){
      alert('超出库存总数！');
      _this.val(stockVal);
      inputVal = stockVal;
      updateToken = !updateToken;
    }
    return updateToken;
  };
  //Radio组件
  $(document).on('click', '.ui-radio', function(){
    $(this).siblings('.ui-radio').removeClass('selected');
    $(this).addClass('selected');
    $('.pop-quantity').val(1);
    $('.num-picker a').removeClass('locked');
  });
  //delete/cancel组件
  var editToken = true;
  $(document).on('click', '.ui-list .ui-checkbox-edit', function() {
    var _this = $(this);
    $.editActions(_this, editToken);
    editToken = !editToken;
  });
  jQuery.editActions = function(_this, token) {
    if(token) {
      var appendHtml  = '<div class="dc-action hidden">';
          appendHtml +=   '<a href="javascript:void(0);" class="delete">删除</a>';
          appendHtml +=   '<a href="javascript:void(0);" class="cancel">取消</a>';
          appendHtml += '</div>';
      _this.parents('li').append(appendHtml);
      var newThis = _this.parents('li');
      var fixVal = parseInt(newThis.outerHeight(true) + 1);
      newThis.find('.dc-action a').css({
        'width': fixVal + 'px',
        'height': fixVal + 'px',
        'lineHeight': fixVal + 'px'
      });
      newThis.find('.dc-action').css({'right': - (fixVal * 2) + 'px'}).removeClass('hidden').animate({
        'right': 0
      }, 300);
    } else {
      var newThis = _this.parents('li').find('.dc-action');
      var fixVal = parseInt(newThis.outerHeight(true) + 1);
      newThis.animate({
        'right': - (fixVal * 2) + 'px'
      }, 300, function() {
        newThis.remove();
      });
    }
  };
  //价格格式化组件
  jQuery.formatPrice  = function(price) {
    var leadingZeros = "00";
    var centsPart = price % 100 + '';
    return parseInt(price / 100) + '.' + leadingZeros.substring(0, leadingZeros.length - centsPart.length) + centsPart;
  };
  //Pop组件
  jQuery.popup = function(html){
    var container = "<div id='pop-up-container'></div>";
    $('body').append(container);
    container = $('#pop-up-container');
    $(container).html(html);
    $(container).find('.pop-wrap').show();
    $('body').css({overflow: 'hidden'});
    $(container).find('.pop').animate({
      bottom: "0"
    }, 300);
    $(container).find('.action-close').click(function(){
      $(container).find('.pop').animate({bottom: "-100%"}, 300, function() {
        $('body').css({overflow: ''});
        jQuery.popupClose();
      });
    });
  };

  jQuery.popupClose = function() {
    $('#pop-up-container').remove();
  };
});
