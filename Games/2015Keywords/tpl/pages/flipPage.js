define(function (require) {
	var tips = require('base-lib/utils/tips');
	var comUtils = require('../base-lib/utils/comUtils');

	/**
	 * 场景应用翻页类
	 *
	 * @param {Object} options 参数选项
	 */
	function FlipPage (options) {
		var _this = this;
		//event 参数中有 data 属性，就是父窗口发送过来的数据
		window.addEventListener("message", function( event ) {
			if(event.data === 'up') _this.prev();
			if(event.data === 'down') _this.next();
		}, false );

		//初始化设置选项
		options = $.extend({
			boxSelector: '.pages',	//容器选择器
			pageSelector: '.page'	//页选择器
		}, options);

		//私有属性
		var self = this.__private__ = {
			boxSelector: options.boxSelector,	//容器选择器
			pageSelector: options.pageSelector,	//页选择器

			$box: null,				//容器元素
			$pages: null,			//页元素列表
			$currentPage: null,		//当前页元素
			$prevPage: null,		//上一页元素
			$nextPage: null,		//下一页元素
			$outPage: null,			//出场页元素

			isLoop: true,			//是否循环
			isAutoPlay: false,		//是否自动播放
			isDisable: false,		//是否禁用

			isFistLoop: true		//当前是否为第一次循环
		};

		//公共属性
		Object.defineProperties(this, {
			//当前页索引
			currentPageIndex: {
				get: function () {
					return FlipPage._getPageIndex.call(this, self.$currentPage);
				},
				set: function (newValue) {
					//跳转到指定页
					if(!isNaN(newValue)) {
						var newIndex = parseInt(newValue);
						this.go(newIndex);
					}
				}
			},

			//是否循环
			isLoop: {
				get: function () {
					return self.isLoop;
				},
				set: function (newValue) {
					self.isLoop = !!newValue;
				}
			},

			//是否自动播放
			isAutoPlay: {
				get: function () {
					return self.isAutoPlay;
				},
				set: function (newValue) {
					if(self.isAutoPlay != !!newValue) {
						self.isAutoPlay = !!newValue;
						//更新播放状态
						FlipPage._updatePlayState.call(this);
					}
				}
			},

			//是否禁用
			isDisable: {
				get: function () {
					return self.isDisable;
				},
				set: function (newValue) {
					self.isDisable = !!newValue;
				}
			}
		});

		//初始化
		FlipPage._init.call(this, options);
	}

	/**
	 * 入场/出场方向常量
	 * @type {Object}
	 */
	FlipPage.directionFrom = {
		TOP: 'top',			//从上面进/出
		BOTTOM: 'bottom',	//从下面进/出
		LEFT: 'left',		//从左面进/出
		RIGHT: 'right'		//从右面进/出
	};

	/**
	 * 翻页事件类型
	 * @type {Object}
	 */
	FlipPage.flipEventType = {
		flipUp: 'flipUp',
		flipDown: 'flipDown',
		flipLeft: 'flipLeft',
		flipRight: 'flipRight'
	};



	/**
	 * 入场动画常量
	 * @type {Array}
	 */
	FlipPage.animationInTypes = [
		'slideZoom',		//滑动缩放
		'overlay',			//叠加
		'slide',			//滑动
		'slideZoom',				//缩放
		// 先改掉，防止bug
		'slideZoom',				//3D旋转
		'flip',				//翻页
		'fadeIn',			//淡入
		'rotate',			//旋转
		'xSlide'			// 横向滑动
	];

	/**
	 * 出场动画常量
	 * @type {Array}
	 */
	FlipPage.animationOutTypes = [
		'slideZoom',		//滑动缩放
		'overlay',			//叠加
		'slide',			//滑动
		'slideZoom',				//缩放和滑动缩放效果重合，兼容老数据，保留常量
		'slideZoom',				//3D旋转
		'flip',				//翻页
		'fadeOut',			//淡出
		'rotate',			//旋转
		'xSlide'			// 横向滑动
	];

	// 是否展示出场动画
	FlipPage.isShowOutSideList = [];

	// 横向滑动
	FlipPage._XDirList = ['xSlide'];

	// 是否手指联系

	/**
	 * 初始化方法
	 */
	FlipPage._init = function (options) {
		// 构建的时候给出修补脚本, android 使用display比visible性能好很多
		var cssText = '.pages .page.z-move{visibility: inherit; display: block;} .pages .page.z-current{visibility: inherit; display: block;} .pages .page {visibility: inherit; display: none;}';
		if(comUtils.isAndroid() && !document.getElementById('androidPageFixCss')) {
			var style = document.createElement('style');
			style.type = 'text/css';
			style.id = 'androidPageFixCss';
			style.styleSheet ? style.styleSheet.cssText = cssText : style.appendChild(document.createTextNode(cssText));
			document.head.appendChild(style);
		}

		//获取公开对象和私有对象
		var that = this;
		var self = this.__private__;

		//初始化设置
		self.$box = $(options.boxSelector);

		//更新页集合
		that.refresh();

		//初始化$box的翻页自定义事件
		FlipPage._initFlipEvent.call(this, self.$box);

		//目标页
		var $targetPage;

		//监听相关手势事件
		self.$box.on('mousedown touchstart', function (e) {
			//停止自动播放
			if(that.isAutoPlay) that.stopPlay();
		}).on('flipUp flipLeft', function (e) {
			// 滑动时，清除提示,防止本页影响到其他页面
			tips.hide();

			// 当锁定滑动时，本页不进行滑动
			if(self.$currentPage && self.$currentPage.length >= 0 && $(self.$currentPage[0]).attr('islockpageflip') === 'true'
				&& +$(self.$currentPage[0]).attr('pageindex') !== self.$pages.length - 1) {
				return;
			}

			//获取下一页
			$targetPage = self.$currentPage ? self.$currentPage.next() : $();

			//判断是否超出了最后一页
			if($targetPage.length === 0) {
				//判断是否可循环观看
				if(that.isLoop) {
					//设置为第一页
					$targetPage = self.$pages.first();
					//设置isFirstLoop（是否第一轮循环）为false
					self.isFistLoop = false;
				} else {
					//还原当前页
					pageIndex = self.$currentPage;
				}
			}

			//将目标页设置为当前页, BOTTOM和RIGHT一样
			FlipPage._setCurrentPage.call(that, $targetPage, e.type === 'flipUp' ? FlipPage.directionFrom.BOTTOM : FlipPage.directionFrom.RIGHT);
		}).on('flipDown flipRight', function (e) {
			// 滑动时，清除提示,防止本页影响到其他页面
			tips.hide();

			// 当锁定滑动时，本页不进行滑动
			if(self.$currentPage && self.$currentPage.length >= 0 && $(self.$currentPage[0]).attr('islockpageflip') === 'true') {
				return;
			}

			//获取上一页
			$targetPage = self.$currentPage ? self.$currentPage.prev() : $();


			//判断是否超出了第一页
			if($targetPage.length === 0) {
				//判断是否可循环观看，并且当前不是第一轮循环
				if(that.isLoop && !self.isFistLoop) {
					//设置为最后一页
					$targetPage = self.$pages.last();
				} else {
					//还原当前页
					$targetPage = self.$currentPage;
				}
			}

			//将目标页设置为当前页, TOP和LEFT一样
			FlipPage._setCurrentPage.call(that, $targetPage, e.type === 'flipDown' ? FlipPage.directionFrom.TOP : FlipPage.directionFrom.LEFT);
		});

		//监听键盘事件
		$(window).on('keydown', function(e){
			//停止自动播放
			if(that.isAutoPlay) that.stopPlay();
		}).on('keyup', function(e){
			//判断keyCode
			switch(e.keyCode){
				//上一页
				case 38:
					that.prev();
					break;
				//上一页
				case 40:
					that.next();
					break;
			}
		});


		//注册翻页动画结束事件
		var $tempPage;
		self.$box.delegate(self.pageSelector + '.z-current', 'webkitAnimationEnd animationEnd', function (e) {
			console.log('翻页动画执行完成时间' + (Date.now() - window.at) + 'ms');
			//获取页
			$tempPage = $(e.target);

			self.$pages.removeClass('z-move');
			//判断是否为页动画
			if($tempPage.is(self.pageSelector)) {
				//触发自定义事件
				$tempPage.trigger('over');
				//是否自动触发动画
				if(!$tempPage.is('[stop-anime]')) {
					$tempPage.trigger('showComsAnime');
				}

				self.$box.removeClass('z-moveing');
			}

			self.isDisable = false;
		});
	};

	/**
	 * 当前页是否横向滑动
	 *
	 * @param {Zepto} $tar 目标页的zepto对象
	 */
	FlipPage.isXDir = function($tar) {
		var outAnimeType = $tar.attr('animation-in');
		outAnimeType = FlipPage.animationInTypes[outAnimeType ? outAnimeType : 0];

		return FlipPage._XDirList.indexOf(outAnimeType) >= 0;
	};
	/**
	 * 初始化容器的翻页自定义事件
	 *
	 * @param  {Object} $box 容器
	 */
	FlipPage._initFlipEvent = function ($box) {
		//定义变量及常量
		var startX = 0, startY = 0,
			moveDistanceX = 0, moveDistanceY = 0, abs_moveDistanceX = 0, abs_moveDistanceY = 0,
			swipeFloag = false, isMoveing = false;
		var MOVEING_BORDER = 5, FLIPPAGE_BORDER = 65,
			MOVEING_CLASS = 'z-moveing';
		var moveDirCache = 'Y';
		var self = this.__private__;

		//监听相关事件
		$box.on('mousedown touchstart', function (e) {
			window.st = Date.now();
			//获取起始点坐标值
			if(e.touches){
				startX = e.touches[0].pageX;
				startY = e.touches[0].pageY;
			} else {
				startX = e.pageX;
				startY = e.pageY;
			}
			//复原相关变量
			moveDistanceX = 0;
			moveDistanceY = 0;
			swipeFloag = true;
			isMoveing = true;
			// 缓存下移动方向
			moveDirCache = FlipPage.getFlipDir(self.$currentPage);
		}).on('mousemove touchmove', function (e) {

			if(!swipeFloag) return;
			//计算移动距离
			if(e.touches){
				moveDistanceX = e.touches[0].pageX - startX;
				moveDistanceY = e.touches[0].pageY - startY;
			} else {
				moveDistanceX = e.pageX - startX;
				moveDistanceY = e.pageY - startY;
			}

			abs_moveDistanceX = Math.abs(moveDistanceX);
			abs_moveDistanceY = Math.abs(moveDistanceY);

			if(isMoveing && abs_moveDistanceY > MOVEING_BORDER) {
				$box.addClass(MOVEING_CLASS);
				isMoveing = false;
			}

			//如果Y移动的距离大于65，并且大于X移动的距离，则进行翻页操作,且移动方向为纵向
			if(abs_moveDistanceY > FLIPPAGE_BORDER && abs_moveDistanceY > abs_moveDistanceX && moveDirCache === 'Y') {
				//判断用户是向上还是向下拉
				if(moveDistanceY > 0) {
					//触发自定义事件 flipDown
					$box.trigger(FlipPage.flipEventType.flipDown);
				} else {
					//触发自定义事件 flipUp
					$box.trigger(FlipPage.flipEventType.flipUp);
				}

				swipeFloag = false;
			}

			//如果Y移动的距离大于65，并且大于X移动的距离，则进行翻页操作,且移动方向为纵向
			if(abs_moveDistanceX > FLIPPAGE_BORDER && abs_moveDistanceX > abs_moveDistanceY && moveDirCache === 'X') {
				//判断用户是向上还是向下拉
				if(moveDistanceX > 0) {
					//触发自定义事件 flipRight
					$box.trigger(FlipPage.flipEventType.flipRight);
				} else {
					//触发自定义事件 flipLeft
					$box.trigger(FlipPage.flipEventType.flipLeft);
				}

				swipeFloag = false;
			}


		}).on('mouseup touchend touchcancel', function (e) {
			//恢复
			if(!isMoveing && swipeFloag) {
				$box.removeClass(MOVEING_CLASS);
			}
			swipeFloag = false;
			isMoveing = false;
		});
	};

	/**
	 * 获取页索引
	 *
	 * @return {Number} 页索引
	 */
	FlipPage._getPageIndex = function ($page) {
		//参数验证
		if(!$page || $page.length === 0) return -1;

		//获取公开对象和私有对象
		var that = this;
		var self = this.__private__;

		//返回索引
		for(var i = 0, l = self.$pages.length ; i < l ; i++){
			if( self.$pages[i] == $page.get(0)) return i;
		}
		return -1;
	};

	/**
	 * 获取页入场动画的class
	 *
	 * @param {Object} $in 入场页zepto对象
	 * @param {String} dIn 入场方向
	 * @param {Object} $out 出场页zepto对象
	 *
	 * @return {String} 入场动画class
	 */
	FlipPage._pageAnimationIn = function ($in, dIn, $out) {
		//参数验证
		if(!$in || $in.length === 0) return;

		//获取出场动画类型
		var outAnimeType = $out.attr('animation-in');
		outAnimeType = FlipPage.animationInTypes[outAnimeType ? outAnimeType : 0];
		// 判断当前翻页是否需要出场
		var isNeedOut = FlipPage.isShowOutSideList.indexOf(outAnimeType) >= 0;
		if(isNeedOut) {
			var dOut = FlipPage.directionFrom.BOTTOM;

			// 横纵变换
			if(FlipPage.getFlipDir($out) === 'Y') {
				if(dIn === FlipPage.directionFrom.RIGHT || dIn === FlipPage.directionFrom.LEFT) {
					dOut = dIn === FlipPage.directionFrom.RIGHT ? FlipPage.directionFrom.BOTTOM : FlipPage.directionFrom.TOP;
				} else {
					dOut = dIn === FlipPage.directionFrom.TOP ? FlipPage.directionFrom.BOTTOM : FlipPage.directionFrom.TOP;;
				}
			} else {
				if(dIn === FlipPage.directionFrom.TOP || dIn === FlipPage.directionFrom.BOTTOM) {
					dOut = dIn === FlipPage.directionFrom.TOP ? FlipPage.directionFrom.LEFT : FlipPage.directionFrom.RIGHT;
				} else {
					dOut = dIn === FlipPage.directionFrom.LEFT ? FlipPage.directionFrom.RIGHT : FlipPage.directionFrom.LEFT;;
				}
			}

			//获取方向
			dOut = [dOut, 'Out'].join('');

			$out.css('-webkit-animation', ['a_', outAnimeType, '_', dOut, ' .7s', ' ease'].join(''));
		}

		// 入场class生成
		//获取入场动画类型
		var inAnimeType = $in.attr('animation-in');
		inAnimeType = FlipPage.animationInTypes[inAnimeType ? inAnimeType : 0];
		// 横纵变换
		if(FlipPage.getFlipDir($in) === 'Y' && (dIn === FlipPage.directionFrom.RIGHT || dIn === FlipPage.directionFrom.LEFT)) {
			dIn = dIn === FlipPage.directionFrom.RIGHT ? FlipPage.directionFrom.BOTTOM : FlipPage.directionFrom.TOP;
		} else if(FlipPage.getFlipDir($in) === 'X' && (dIn === FlipPage.directionFrom.TOP || dIn === FlipPage.directionFrom.BOTTOM)) {
			dIn = dIn === FlipPage.directionFrom.TOP ? FlipPage.directionFrom.LEFT : FlipPage.directionFrom.RIGHT;
		}

		//获取方向
		dIn = [dIn, 'In'].join('');

		$in.css('-webkit-animation', ['a_', inAnimeType, '_', dIn, ' .7s', ' ease'].join(''));

		// 触发出场页离场事件
		$out.trigger('out');
	};

	/**
	 * 设置当前页
	 *
	 * @param {Object} $targetPage 目标页面
	 * @param {Object} directionFrom 入场/出场方向
	 *
	 * @return {Object} 新的当前页
	 */
	FlipPage._setCurrentPage = function ($targetPage, directionFrom, isShowAnimation) {
		//判断是否已经禁用翻页
		if(this.isDisable) return;

		//获取私有对象
		var self = this.__private__;

		//参数验证
		if(!$targetPage || !$targetPage.length) return self.$currentPage;
		directionFrom = directionFrom || FlipPage.directionFrom.BOTTOM;
		isShowAnimation = isShowAnimation === undefined ? true : !!isShowAnimation;

		// 判断是否为非第一次翻页
		if(self.$currentPage) {
			//获取目标页索引
			var pageIndex = FlipPage._getPageIndex.call(this, $targetPage);
			//验证是否已经为当前页
			if(pageIndex === this.currentPageIndex) return self.$currentPage;
		}

		//保存出场页
		self.$outPage = self.$currentPage;
		//更新当前页
		self.$currentPage = $targetPage;

		//判断是否显示动画，设置入场/出场动画
		if(isShowAnimation && self.$outPage) {
			window.at = Date.now();
			// 阻止翻页，直到动画执行完成
			self.isDisable = true;
			// 确保动画刷新
			self.$currentPage.css('-webkit-animation', 'none');
			self.$outPage.css('-webkit-animation', 'none');

			//设置当前页和出场页的入场/出场动画css
			FlipPage._pageAnimationIn(self.$currentPage, directionFrom, self.$outPage);
			//操作class，并触发自定义事件
			self.$outPage.removeClass('z-current').addClass('z-move').trigger('move');
			// 播放动画
			self.$currentPage.addClass('z-current z-move').trigger('move').trigger('active');

		} else {
			//操作样式/class，并触发自定义事件
			self.$currentPage.css('-webkit-animation', 'none').addClass('z-current').trigger('active').trigger('over');
			self.$outPage && self.$outPage.css('-webkit-animation', 'none').removeClass('z-current').trigger('out');

			//是否自动触发动画
			if(!self.$currentPage.is('[stop-anime]')) {
				self.$currentPage.trigger('showComsAnime');
			}
		}

		//返回新的当前页
		return self.$currentPage;
	};

	/**
	 * 上一页
	 *
	 * @return {Boolean} 是否翻页成功
	 */
	FlipPage.prototype.prev = function() {
		//获取私有对象
		var self = this.__private__;

		//触发flipDown事件翻上一页
		if(!FlipPage.isXDir(self.$currentPage)) {
			self.$box.trigger(FlipPage.flipEventType.flipDown);
		} else {
			self.$box.trigger(FlipPage.flipEventType.flipRight);
		}


		//返回是否翻页成功
		return !this.isDisable;
	};

	/**
	 * 下一页
	 *
	 * @return {Boolean} 是否翻页成功
	 */
	FlipPage.prototype.next = function() {
		//获取私有对象
		var self = this.__private__;

		//触发flipUp事件翻下一页
		if(!FlipPage.isXDir(self.$currentPage)) {
			self.$box.trigger(FlipPage.flipEventType.flipUp);
		} else {
			self.$box.trigger(FlipPage.flipEventType.flipLeft);
		}

		//返回是否翻页成功
		return !this.isDisable;
	};

	/**
	 * 根据索引跳转到指定页
	 *
	 * @param  {Number} indexOrPageObj 页索引/页元素对象
	 * @param  {Boolean} isShowAnimation 跳转时是否启用动画
	 * @return {Boolean} 是否跳转成功
	 */
	FlipPage.prototype.go = function(indexOrPageEle, isShowAnimation) {
		//获取私有对象
		var self = this.__private__;

		//获取跳转的页
		var $targetPage = isNaN(indexOrPageEle) ? $(indexOrPageEle) : self.$pages.eq(indexOrPageEle);
		if($targetPage.length) {
			//获取索引
			var index = FlipPage._getPageIndex.call(this, $targetPage);

			//设置当前页
			if(!self.$currentPage || !FlipPage.isXDir(self.$currentPage)) {
				FlipPage._setCurrentPage.call(this, $targetPage, (index - this.currentPageIndex >= 0) ? FlipPage.directionFrom.BOTTOM : FlipPage.directionFrom.TOP, isShowAnimation);
			} else {
				FlipPage._setCurrentPage.call(this, $targetPage, (index - this.currentPageIndex >= 0) ? FlipPage.directionFrom.RIGHT : FlipPage.directionFrom.LEFT, isShowAnimation);
			}
		}

		//返回是否跳转成功
		return !this.isDisable;
	};

	/**
	 * 跳转到首页
	 *
	 * @return {Boolean} 是否跳转成功
	 */
	FlipPage.prototype.toFirst = function() {
		//调用跳转方法
		return this.go(0);
	};

	/**
	 * 跳转到尾页
	 *
	 * @return {Boolean} 是否跳转成功
	 */
	FlipPage.prototype.toLast = function() {
		//获取私有对象
		var self = this.__private__;

		//调用跳转方法
		return this.go(self.$pages.length - 1);
	};

	/**
	 * 启用翻页
	 */
	FlipPage.prototype.enable = function() {
		//设置是否禁用为 false
		this.isDisable = false;
	};

	/**
	 * 禁用翻页
	 */
	FlipPage.prototype.disable = function() {
		//设置是否禁用为 true
		this.isDisable = true;
	};

	/**
	 * 设置翻页动画
	 *
	 * @param {Object or String or Number} animation 动画设置
	 * @param {Number} index   要设置的页的索引
	 */
	FlipPage.prototype.setAnimation = function(animation, index) {
		//参数检测
		if(animation == undefined) return;

		//获取私有对象
		var self = this.__private__;

		//获取要设置的页
		var $pages = index == undefined ? self.$pages : self.$pages.eq(index);
		//设置动画
		$pages.attr('animation-in', animation.in || 0);
		$pages.attr('animation-out', animation.out || 0);
	};

	/**
	 * 刷新
	 */
	FlipPage.prototype.refresh = function() {
		//获取私有对象
		var self = this.__private__;

		// 刷新pages列表
		self.$pages = self.$box.find(self.pageSelector);

		//如果当前没有显示的页，则默认显示第0页
		if(this.currentPageIndex < 0 && self.$pages.length > 0) {
			this.go(0, false);
		}
	};

	/**
	 * 演示指定页
	 */
	FlipPage.prototype.demonstrate = function(index) {
		//获取公开对象和私有对象
		var that = this;
		var self = this.__private__;

		//参数验证
		index = index === undefined ? 0 : index;

		//准备演示环境
		that.enable();
		that.stopPlay();

		//获取要演示的页面
		var $targetPage = self.$pages.eq(index);
		if($targetPage.length === 0) return;

		//在要演示的页前插入临时页面
		var $tempPage = $targetPage.clone().html('').attr({'id': 'page-temp', 'class': 'page page-temp'}).removeAttr('style');
		$targetPage.before($tempPage);

		//注册over和out事件
		$tempPage.on('over', function () {
			that.next();
		}).on('out', function () {
			$tempPage.remove();
			that.refresh();
		});

		//跳转至要演示的页，不带跳转动画
		that.go($targetPage, false);

		//隔1秒后开始动画演示
		setTimeout(function () {
			that.prev();
		}, 500)
	};

	/**
	 * 更新播放状态
	 */
	FlipPage._updatePlayState = function () {
		//获取公开对象和私有对象
		var that = this;
		var self = this.__private__;

		//判断是否为自动播放
		if(this.isAutoPlay && self.$pages.length > 1) {
			//开始播放
			self.autoPlayInterval = setInterval(function () {
				that.next();
			}, 1500);
		} else {
			//停止播放
			clearInterval(self.autoPlayInterval);
		}
	};

	/**
	 * 自动播放
	 */
	FlipPage.prototype.startPlay = function() {
		//设置自动播放属性为 true
		this.isAutoPlay = true;

		//返回是否自动播放成功
		return !this.isDisable;
	};

	/**
	 * 停止自动播放
	 */
	FlipPage.prototype.stopPlay = function() {
		//设置自动播放属性为 false
		this.isAutoPlay = false;
	};

	/**
	 * 手动播放动画
	 */
	FlipPage.prototype.showComsAnime = function () {
		var self = this.__private__;
		self.$currentPage.trigger('showComsAnime', true);
	};

	/**
	 * 删除当前页阻止动画的属性
	 */
	FlipPage.prototype.removeStopAnimeAttr = function (index) {
		var self = this.__private__;

		index = index == undefined ? 0 : index;
		self.$pages.eq(index).removeAttr('stop-anime');
	};

	/**
	 * 获取页面滑动方向
	 */
	FlipPage.prototype.getFlipDir = FlipPage.getFlipDir = function($page) {
		//参数验证
		if(!$page || $page.length === 0) $page = this.__private__.$currentPage;

		//获取入场动画类型
		var animationType = $page.attr('animation-in');
		animationType = FlipPage.animationInTypes[animationType ? animationType : 0];

		return FlipPage._XDirList.indexOf(animationType) >= 0 ? 'X': 'Y';
	};

	//返回模块接口
	return FlipPage;

});