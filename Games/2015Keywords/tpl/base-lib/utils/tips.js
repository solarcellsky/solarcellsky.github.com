/* 
 *  提示组件模块：tips
 * ----------------------------------
 *  作者：Charles
 *  时间：2014-04-26
 *  准则：CMD 规范
 *  联系：16295853（qq）
 ************************************************************/

define(function(require, exports, module){

	//引用相关模块
	var $ = window.Zepto;

	function Tips() {
		this._$tipsTemplate = $('<div class="u-miniTips"><i></i><p>{content}</p></div>');
		this._$body = $('.liveApp');
	}

	//显示提示
	Tips.prototype.show = function(msg, timeout, type) {
		msg = msg ? msg : '这是一个提示信息！';
		timeout = timeout ? timeout : 2000;
		type = type ? type : 'info';

		//克隆一个消息框
		var $tips = this._$tipsTemplate.clone().addClass('z-' + type);
		//填充提示信息
		$tips.children('p').text(msg);
		//显示提示框并校正位置
		this._$body.append($tips);
		$tips.css({
			'margin-left': $tips.width() / -2,
			'left': '50%'
		});
		//延迟关闭
		setTimeout(function () {
			$tips.remove();
		}, timeout);
	};

	//隐藏所有提示信息
	Tips.prototype.hide = function() {
		this._$body.find('.u-miniTips').hide();
	};

	//显示提示信息
	Tips.prototype.info = function(msg, timeout) {
		this.show(msg, timeout, 'info');
	};

	//显示成功信息
	Tips.prototype.success = function(msg, timeout) {
		this.show(msg, timeout, 'success');
	};

	//显示错误信息
	Tips.prototype.error = function(msg, timeout) {
		this.show(msg, timeout, 'error');
	};

	//显示警告信息
	Tips.prototype.warning = function(msg, timeout) {
		this.show(msg, timeout, 'warning');
	};

	//显示加载信息
	Tips.prototype.loading = function(msg, timeout) {
		this.show(msg, timeout, 'loading');
	};

	//实例化Tips对象
	var tips = new Tips();

	//输出模块接口
	module.exports = tips;	
});