define(function(require, exports) {
    var numHelper = require('base-lib/utils/numberHelper');

    function isMobile() {
        var sUserAgent= navigator.userAgent.toLowerCase(),
            bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
            bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
            bIsMidp= sUserAgent.match(/midp/i) == "midp",
            bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
            bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
            bIsAndroid= sUserAgent.match(/android/i) == "android",
            bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
            bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile",
            bIsWebview = sUserAgent.match(/webview/i) == "webview";
        return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsWebview);
    };

    /**
     * 判断是否为手机
     */
    exports.isMobile = isMobile;


    /**
     * 是否安卓
     * @returns {boolean}
     */
    exports.isAndroid = function() {
        var sUserAgent= navigator.userAgent.toLowerCase();
        return bIsAndroid= sUserAgent.match(/android/i) == "android";
    };

    /**
     * 是否Ios
     * @returns {boolean}
     */
    exports.isIos = function() {
        var sUserAgent= navigator.userAgent.toLowerCase();
        return bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    };

    exports.isWeixin = function isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    };

    /**
     * 简单模板引擎，用于拼合数据和模板
     * 只支持插值表达式
     *
     * @param {Object} data 数据
     * @param {String} [tpl] 模板
     */
    exports.simpleTemplate = function simpleTemplate(data, tpl) {
        return tpl.replace(/\{\{(\w*)\}\}/gi, function($0, $1) {
            return data[$1] && data[$1] != 'undefined' ?  data[$1] : '';
        });

    };

    /**
     * 图片居中适配
     * @param {Object} o 当前组件的数据对象
     * @param {Object} x 当前组件的vm
     */
    exports.centerFixed = function centerFixed(o, x) {
        /* 组件编辑区必须实现vmInit方法，以便外部传入vm对组件进行集成*/
        var warpHeight = +numHelper.downSize(o.attrs.height);
        var warpWidth = +numHelper.downSize(o.attrs.width);
        var warpRatio = numHelper.div(warpWidth, warpHeight);
        var imgRatio = 1;

        _.each(x.imgList, function (it) {
            imgRatio = numHelper.div(it.width, it.height);
            if (imgRatio < warpRatio) {
                it.cssWidth = '100%';
                it.cssHeight = 'auto';
                setOffset(it, 'y');
            } else {
                it.cssWidth = 'auto';
                it.cssHeight = '100%';
                setOffset(it, 'x');
            }
        });

        x.updateChange();

        function setOffset(it, d) {
            if (d === 'y') {
                it.top = -numHelper.div((numHelper.mul(numHelper.div(warpWidth, it.width), it.height) - warpHeight), 2);
                it.mobile_top = numHelper.upSize(it.top);
                it.left = 0;
                it.mobile_left = 0;
            } else {
                it.left = -numHelper.div((numHelper.mul(numHelper.div(warpHeight, it.height), it.width) - warpWidth), 2);
                it.mobile_left = numHelper.upSize(it.left);
                it.top = 0;
                it.mobile_top = 0;
            }
        }
    };

    /**
     * 图片,针对通用div居中适配
     * @param {Object} o 当前组件的数据对象 {
     *                                      {Number | String} warpHeight: 外部包裹高度
     *                                      {Number | String} warpWidth: 外部包裹宽度
     *                                      {Boolean} isNeedResize: 代表是否进行缩放，pc端可能使用到
     *                                      {Number | String} height: 当前图片的高度
     *                                      {Number | String} width: 当前图片的宽度
     *                                     }
     * @param {String} url 【可选】当前需要配置的url
     */
    exports.comCenterFixed = function comCenterFixed(o, url) {
        /* 组件编辑区必须实现vmInit方法，以便外部传入vm对组件进行集成*/
        var warpHeight = o.isNeedResize ? +numHelper.downSize(o.warpHeight) : o.warpHeight;
        var warpWidth = o.isNeedResize ? +numHelper.downSize(o.attrs.width) : o.warpWidth;

        var warpRatio = numHelper.div(warpWidth, warpHeight);

        var imgRatio = numHelper.div(o.width, o.height);
        var res = {};

        if (imgRatio < warpRatio) {
            res.width = '100%';
            res.height = 'auto';
            setOffset(res, 'y');
        } else {
            res.width = 'auto';
            res.height = '100%';
            setOffset(res, 'x');
        }

        return res;

        function setOffset(obj, d) {
            if (d === 'y') {
                obj.top = -numHelper.div(numHelper.sub(numHelper.mul(numHelper.div(warpWidth, o.width), o.height), warpHeight), 2) + 'px';
                obj.left = 0;
            } else {
                obj.left = -numHelper.div(numHelper.sub(numHelper.mul(numHelper.div(warpHeight, o.height), o.width), warpWidth), 2) + 'px';
                obj.top = 0;
            }
        }
    };

    /**
     * 图片作为背景自动适应容器对象，不压缩，但是也铺满
     * @param obj
     * @returns {*|a}
     */
    exports.automaticFit = function automaticFit(obj) {
        // 容器宽
        var cWidth = parseFloat(obj.cWidth);
        // 容器高
        var cHeight = parseFloat(obj.cHeight);
        // 图片宽
        var imgWidth = parseFloat(obj.imgWidth);
        // 图片高
        var imgHeight = parseFloat(obj.imgHeight);

        var widthRatio = numHelper.div(cWidth, imgWidth);
        var heightRatio = numHelper.div(cHeight, imgHeight);
        var ratio = Math.max(widthRatio, heightRatio);

        var bgWidth = numHelper.mul(imgWidth, ratio);
        var bgHeight = numHelper.mul(imgHeight, ratio);

        var res = {};
        res.backgroundSize = bgWidth + 'px ' + bgHeight + 'px';
        res.backgroundPosition = (numHelper.div(numHelper.sub(bgWidth, cWidth), 2) * -1) + 'px ' + (numHelper.div(numHelper.sub(bgHeight, cHeight), 2) * -1) + 'px';

        return res;
    };

    /**
     * 设置cookie
     * @param {String} name 保存的key
     * @param {String} value 值
     */
    exports.setCookie = function setCookie(name,value) {
        var Days = 1; //此 cookie 将被保存 30 天
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + '; path=/';
    };

    /**
     * 读取cookies
     * @param {String} name 所要读取的key
     */
    exports.getCookie = function getCookie(name) {
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        var arr = document.cookie.match(reg);

        return arr && arr.length >= 3 ? arr[2] : null;
    };

    /**
     * 是否支持cookie（手机的有时候会禁用或者不支持）
     * @private
     */
    exports._isSupportCookie = function _isSupportCookie(){
        // 手机浏览器是否启用了cookie
        if(!navigator.cookieEnabled) return false;

        this.setCookie('_support', '1');
        if(this.getCookie('_support') != '1') return false;

        return;
    };

    /**
     * 设置值到cookie或者存储到localstorage
     * @param name {String} name 保存的key
     * @param value {String} value 值
     */
    exports.setCookieOrStorage = function setCookie(name,value) {
        if(this._isSupportCookie()){
            this.setCookie(name, value);
        } else {
            localStorage.setItem(name, value);
        }
    };

    /**
     * 从cookie或者localstorage获取值
     * @param name {String} name 所要读取的key
     */
    exports.getCookieOrStorage = function setCookie(name) {
        return this.getCookie(name) || localStorage.getItem(name);
    };

    /**
     * 通过url解析出传递的参数
     *
     * @returns {IEElementStyle}
     */
    exports.getUrlParams = function getUrlParams() {
        var search = decodeURI(location.search).slice(1);
        var params = search.split('&');
        var res = {};

        for(var i = 0, p; p = params[i++]; ) {
            var temp = p.split('=');
            res[temp[0]] = temp[1];
        }

        return res;
    };

    /**
     * 简单模板引擎
     */
    exports.simpleTplEng = function simpleTplEng(obj, tpl) {
        return tpl.replace(/({{(\w*)}})/gi, function($0, $1, $2) {
            return obj[$2];
        });
    };

    /**
     * 获取当前字符串的transform属性,同时去掉原src上的数据
     * @param str
     */
    exports.getTransfrom = function addWebkitPerfix(str) {
        if(str) {
            var tf = 0;

            str = str.replace(/transform:\s?rotate\((\S+)\);/, function($0, $1) {
                tf = $1;
                return '';
            });
        }

        return {
            str: str,
            tf: tf
        };
    };

    /**
     * 给dom设置transfrom
     */
    exports.setTransfrom = function setTransfrom(dom, trs) {
        if(dom.style.cssText.indexOf('-webkit-transform') >= 0) return;

        dom.style.cssText += ' -webkit-transform: rotate('+ trs +');transform: rotate('+ trs +');'
    };

    /**
     * 在链接上记录下当前页数的HASH
     */
    exports.setPageHash = function(num){
        window.location.hash = "#page=" + num;
    };
    /**
     * 获取当前HASH
     */
    exports.getPageHash = function(){
        var pageNum = 0;
        var hash = window.location.hash;
        if (hash) {
            var str = hash.match(/page=(\d*)/i);
            pageNum = (str && str[1]) ? str[1] : pageNum;
        }
        return pageNum;
    }

    //创建一个GUID
    exports.createGuid = function () {
        //定义guid
        var guid = '';
        //创建guid
        do{
            guid += Math.random().toString(16).replace('0.','');
        }while(guid.length < 32)
        guid = [guid.substr(0, 8), guid.substr(8, 4), guid.substr(12, 4), guid.substr(16, 4), guid.substr(20, 12)].join('-');
        //返回guid
        return guid.toUpperCase();
    };
    exports.getCUID = function(){
        // 从Cookie获取uid
        var cuid = this.getCookie('COOKIE_CUID');
        // 如没有则创建uid
        if(!cuid){
            cuid = this.createGuid();
            var date = new Date();
            date.setFullYear(date.getFullYear() + 60);
            this.setCookie('COOKIE_CUID', cuid, date);
        }
        //返回uid
        return cuid;
    };

});