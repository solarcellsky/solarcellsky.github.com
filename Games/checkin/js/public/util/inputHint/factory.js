/**
 * inputHint-v2
 * 输入框提醒插件
 * @author
 */
define(function(require, exports) {

	var decorateFunc = function(obj,config) {

		var tipText = config.text || '',
			  initialClass = config.initialClass || '',
			  hitType = config.type || '';

		obj = obj.bind === undefined ? $(obj) : obj ;

		if(obj !== undefined) {
			if(hitType === 'password') {
				obj.attr('type', 'text');
			}
			obj.addClass(initialClass).val(tipText);
		} else {
			return ;
		}

		obj.bind("focus",function() {
			if(hitType === 'password') {
				$(this).attr('type', 'password');
			}
			if($(this).val() === tipText) {
				$(this).val("").removeClass(initialClass);
			}
		});

		obj.bind("blur",function() {
			if(hitType === 'password' && $(this).val() === "") {
				$(this).attr('type', 'text');
			}
			if($(this).val() === "") {
				$(this).val(tipText).addClass(initialClass);
			}
		});

	}

	return {
		decorate : decorateFunc
	}

});

