/**
 * 微信支付、分享相关
 *
 * @class weixin
 * @module global
 * @author: slarkzhang & taylenxu
 */
define('mod/weixin', ['mod/detect'], function(require, exports, module) {
    require('mod/detect');
    // WP 5.0.1+支持马上设置版本号
    // IE下调用其他COM+接口时,typeof window.external.notify会返回unknown;不能用$.type,会有运行时错误
    // http://stackoverflow.com/questions/10982739/typeof-returning-unknown-in-ie
    try { //压缩模式在wp下执行异常
        if ($.os.wp && typeof window.external != 'undefined' && typeof window.external.notify == 'unknown') {
            // WP 5.0.1+下设置后可以马上获取版本号,行为跟android、ios类似，但是获取出来的版本号依然是5.0
            window.external.notify('wechat:version');
        }
    } catch (e) {}
    // 预判断WeixinJSBridge是否已加载,防止WeixinJSBridge于WeixinJSBridgeReady定义前已加载完毕
    var _isReady = (typeof WeixinJSBridge != 'undefined');
    var _callback = [];
    // 绑定WeixinJSBridgeReady回调
    $(document).on('WeixinJSBridgeReady', function() {
        _isReady = true;
        $.each(_callback, function(index, obj) {
            var fn = obj['fn'];
            var context = obj['context'] || window;
            var args = obj['args'] || [];
            fn.apply(context, args);
        });
        _callback = [];
    });
    /**
     * 分发事件回调的执行
     *
     * @method _fire
     * @private
     */
    var _fire = function() {
        $.each(_callback, function(k, v) {
            if ($.type(v['fn']) == 'function') {
                var fn = v['fn'];
                var context = v['context'] || window;
                var args = v['args'] || [];
                fn.apply(context, args);
            }
        });
        _callback = [];
    }
    /**
     * -2表示版本号获取中(WP), -1表示非微信中调用
     * @private
     */
    var _getVersion = function() {
        var reg = /MicroMessenger\/([\d.]+)/i;
        // WP系统不允许应用程序设置windows.navigator.userAgent字段
        // 所以需要页面改为检测navigator.wxuserAgent 这个字段，而WP微信客户端通过注入JS修改navigator.wxuserAgent字段的方式来设置微信版本。
        var match = (navigator.wxuserAgent || navigator.userAgent).match(reg);
        if (match) {
            return match[1];
        }
        if ($.os.wp && !navigator.wxuserAgent) {
            return -2;
        }
        return -1;
    };
    /**
     * 显示菜单栏
     * @private
     */
    var _showMenuButton = function() {
        if (_isReady) {
            WeixinJSBridge.call('showOptionMenu');
        } else {
            _callback.push({
                fn: arguments.callee
            });
        }
    };
    /**
     * 隐藏菜单栏
     * @private
     */
    var _hideMenuButton = function() {
        if (_isReady) {
            WeixinJSBridge.call('hideOptionMenu');
        } else {
            _callback.push({
                fn: arguments.callee
            });
        }
    };
    /**
     * 获取网络类型
     * weixin.getNetworkType(function(state,type){
          //state: fail：获取失败  success: 获取成功
          //type : 1: wifi 2:非wifi
       });
     * @private
     */
    var _getNetworkType = function(fn) {
        //获取到网络类型后的回调
        function wx_cb(e) {
            var data = e.err_msg.split(":");
            if (data.length == 2) {
                if (data[1] == "fail") {
                    fn && fn("fail");
                } else {
                    fn && fn("success", data[1] == "wifi" ? 1 : 2);
                }
            } else {
                fn && fn("fail");
            }
        }
        if (_isReady) {
            WeixinJSBridge.call('getNetworkType', {}, wx_cb);
        } else {
            _callback.push({
                fn: arguments.callee
            });
        }
    };
    /**
     * 微信分享
     * @private
     */
    var _share = function(type, data, sucFn) {
        if (_isReady) {
            if (type == 'weibo') { /*分享微博*/
                WeixinJSBridge.on("menu:share:weibo", function(argv) {
                    WeixinJSBridge.invoke('shareWeibo', data, function(res) {});
                });
            } else if (type == 'timeline') { /*分享朋友圈*/
                WeixinJSBridge.on('menu:share:timeline', function(argv) {
                    WeixinJSBridge.invoke("shareTimeline", data, function(res) {
                        if (res.err_msg.indexOf('cancel') === -1 && sucFn) {
                            sucFn();
                        }
                    });
                });
            } else if (type == 'appmessage') { /*分享好友*/
                WeixinJSBridge.on("menu:share:appmessage", function(argv) {
                    /*收藏也会调用*/
                    WeixinJSBridge.invoke('sendAppMessage', data, function(res) {
                        if (res.err_msg.indexOf('cancel') === -1 && argv.scene == 'friend' && sucFn) {
                            sucFn();
                        }
                    });
                });
            }
        } else {
            _callback.push({
                fn: arguments.callee,
                args: arguments
            });
        }
    };
    /**
     * 微信支付
     * @param option
     * @private
     */
    var _doPay = function(options) {
        // 微信5.0以下版本也会存在WeixinJSBridge,取版本号判断
        var version = _getVersion();
        if (version < 5 && version != -2) {
            options.unsupport && options.unsupport();
            return;
        }
        if (!_isReady) {
            options.unready && options.unready();
            return;
        }
        WeixinJSBridge.invoke('getBrandWCPayRequest', options.data, function(res) {
            // get_brand_wcpay_request:cancel 支付过程中用户取消
            // get_brand_wcpay_request:fail 支付失败
            // get_brand_wcpay_request:ok 支付成功
            var msg = res.err_msg;
            if (msg == 'get_brand_wcpay_request:ok') {
                options.success && options.success();
            } else if (msg == 'get_brand_wcpay_request:cancel') {
                options.cancel && options.cancel(msg);
            } else {
                options.error && options.error(msg);
            }
        });
    };
    /**
     * WeixinJSBridgeReady回调
     *
     * @method onJSBridgeReady
     * @param {Function} fn 微信webview初始化完毕时执行的回调
     */
    var _onJSBridgeReady = function(fn) {
        _callback.push({
            fn: fn
        });
        // 非微信调用时不触发
        _isReady && _fire();
    };
    return {
        getVersion: _getVersion,
        getNetworkType: _getNetworkType,
        showMenuButton: _showMenuButton,
        hideMenuButton: _hideMenuButton,
        onJSBridgeReady: _onJSBridgeReady,
        doPay: _doPay,
        share: _share
    };
});