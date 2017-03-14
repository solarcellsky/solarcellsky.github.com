//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function($) {
    function detect(ua) {
        var os = this.os = {}, browser = this.browser = {},
            webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
            android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
            osx = !! ua.match(/\(Macintosh\; Intel /),
            ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
            iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            wp = ua.match(/Windows Phone ([\d.]+)/),
            touchpad = webos && ua.match(/TouchPad/),
            kindle = ua.match(/Kindle\/([\d.]+)/),
            silk = ua.match(/Silk\/([\d._]+)/),
            blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
            bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
            rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
            playbook = ua.match(/PlayBook/),
            chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
            firefox = ua.match(/Firefox\/([\d.]+)/),
            ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
            webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
            safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)
            // Todo: clean this up with a better OS/browser seperation:
            // - discern (more) between multiple browsers on android
            // - decide if kindle fire in silk mode is android or not
            // - Firefox on Android doesn't specify the Android version
            // - possibly devide in os, device and browser hashes
            if (browser.webkit = !! webkit) browser.version = webkit[1]
            if (android) os.android = true, os.version = android[2]
            if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
            if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
            if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
        if (wp) os.wp = true, os.version = wp[1]
        if (webos) os.webos = true, os.version = webos[2]
        if (touchpad) os.touchpad = true
        if (blackberry) os.blackberry = true, os.version = blackberry[2]
        if (bb10) os.bb10 = true, os.version = bb10[2]
        if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
        if (playbook) browser.playbook = true
        if (kindle) os.kindle = true, os.version = kindle[1]
        if (silk) browser.silk = true, browser.version = silk[1]
        if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
        if (chrome) browser.chrome = true, browser.version = chrome[1]
        if (firefox) browser.firefox = true, browser.version = firefox[1]
        if (ie) browser.ie = true, browser.version = ie[1]
        if (safari && (osx || os.ios)) {
            browser.safari = true;
            if (osx) browser.version = safari[1]
        }
        if (webview) browser.webview = true
        os.tablet = !! (ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))
        os.phone = !! (!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))
    }
    detect.call($, navigator.userAgent)
    // make available to unit tests
    $.__detect = detect
})(Zepto);
/**
 * 理财通移动端库文件扩展
 * 对基本方法进行扩展，包括sessionStorage、localStorage、cookie、url操作等
 * @author slarkzhang & taylenxu
 * @date 2014.7.22
 * @version 1.1
 */
(function() {
    /**
     * 本地存储的特性检测
     * @method checkStorage
     * @private
     * @param  {Object} o 检测的存储类型
     * @return {Boolean} 是否支持该种类型的缓存
     */
    var checkStorage = function(o) {
        var key = "STOARGE_TEST",
            value;
        try {
            o.setItem(key, 1);
            value = o.getItem(key);
            o.removeItem(key);
            return value == 1;
        } catch (e) {
            return false;
        }
    };
    /**
     * 判断当前宿主是否支持sessionStorage、localStorage
     * @property $.isSessionAble
     * @property $.isLocalAble
     * @type Boolean
     */
    try { //兼容IOS7 中禁用cookie的情况：出现localStorage或者sessionStorage就会异常
        $.isSessionAble = checkStorage(window.sessionStorage);
        $.isLocalAble = checkStorage(window.localStorage);
    } catch (e) {
        $.isSessionAble = false;
        $.isLocalAble = false;
    }
    /**
     * 本地存储操作接口
     */
    var storage = function() {
        var MAX_TRY = 20; //最大尝试写入次数 如果超过这个次数，依然发生异常则抛出错误提示
        var count = MAX_TRY;
        /**
         * 读取本地存储的数据
         * @param {String} key 存储的键值
         * @param {String} value 存储的值信息
         * @param {Boolean} [persistence:false] 是否持久化，也就是使用localStorage进行存储
         */
        var _setItem = function(key, value, persistence) {
            var cache = {
                "v": value,
                "t": +new Date
            }, o;
            //数据格式不正确转换可能导致发生异常
            try {
                o = JSON.stringify(cache);
            } catch (e) {
                throw new Error("JSON数据格式异常：" + e.message);
            }
            try {
                if (persistence) {
                    $.isLocalAble && window.localStorage.setItem(key, o);
                } else {
                    $.isSessionAble && window.sessionStorage.setItem(key, o);
                }
            } catch (e) { //如果发生写入缓存异常则去除旧的数据后重新尝试写入
                // count--;
                // if (count >= 0) {
                //     _shiftByTime(persistence);
                //     arguments.callee(key, value, persistence);
                // } else {
                throw new Error("写入缓存异常：" + e.message);
                // }
            }
        };
        /**
         * 获取本地存储的值信息
         * @param {String} key 获取缓存的键值
         * @param {Boolean} [persistence:false] 是否从localStorage中读取数据
         * @return {Object|String} 本地存储指定的键值的数据
         */
        var _getItem = function(key, persistence) {
            var o, v;
            if (persistence) {
                o = window.localStorage.getItem(key);
            } else {
                o = window.sessionStorage.getItem(key);
            }
            o = $.parseJSON(o);
            v = o && o.v;
            return $.isPlainObject(v) ? $.extend(true, {}, v) : $.isArray(v) ? $.extend(true, [], v) : v;
        };
        /**
         * 移除本地存储中指定键值的数据
         * @param {String} key 移除缓存的键值
         * @param {Boolean} [persistence:false] 是否从localStorage中移除缓存
         */
        var _removeItem = function(key, persistence) {
            count = MAX_TRY; //复位
            if (persistence) {
                window.localStorage.removeItem(key);
            } else {
                window.sessionStorage.removeItem(key);
            }
        };
        /**
         * 根据时间排除旧的数据
         * @method _shiftByTime
         * @private
         * @param {Boolean} [persistence:false] session 还是 local
         */
        var _shiftByTime = function(persistence) {
            var tar = persistence ? window.localStorage : window.sessionStorage;
            var old, key;
            for (var k in tar) {
                var temp = $.parseJSON(tar.k);
                if (key) {
                    old = old.t > temp.t ? temp : old;
                    key = old.t > temp.t ? k : key;
                } else {
                    old = temp;
                    key = k;
                }
            }
            if (key) {
                _removeItem(key, persistence);
            }
        }
        //外露接口
        return {
            setItem: _setItem,
            getItem: _getItem,
            removeItem: _removeItem
        }
    }();
    /**
     * 默认将缓存写入到sessionStorage，如果不支持该特性则写入window.name/兼容各个平台下可能出现的sessionStorage或者cookie不能写入的情况
     *   建议不要存储过大的数据，防止可能会超出window.name的长度限制，控制在65K以下
     *   页面JS中请不要对window.name进行赋值操作
     *   如果缓存的内容需要跨域读写，请添加force参数为true
     */
    var sessionStorage = {
        /**
         * 获取window.name中数据
         *
         * @method getWindow
         * @private
         * @return {Object} window.name转换后的对象
         */
        getWindow: function() {
            try {
                return $.parseJSON(window.name || "{}");
            } catch (e) {
                return {};
            }
        },
        /**
         * 设置window.name的数据
         * @private
         * @param {Object} data 需要写入到window.name中的缓存数据
         */
        setWindow: function(data) {
            data && (window.name = JSON.stringify(data));
        },
        /**
         * 根据key获取session级的缓存
         * @param  {String} key 获取的缓存键值名
         * @param  {Boolean} [force:false] 是否强制使用window.name
         */
        getItem: function(key, force) {
            if ($.isSessionAble && !force) {
                return storage.getItem(key, false);
            } else {
                var data = this.getWindow();
                if ($.isPlainObject(data)) {
                    return data[key];
                }
            }
        },
        /**
         * 设置session级的缓存
         * @param {String} key   存储的键值
         * @param {String} value 存储的值
         * @param {Boolean} merge 是否进行合并
         * @param {Boolean} [force:false] 是否强制使用window.name
         */
        setItem: function(key, value, merge, force) {
            if (merge && $.isPlainObject(value) && $.isPlainObject(this.getItem(key))) {
                value = $.extend(this.getItem(key), value);
            }
            if ($.isSessionAble && !force) {
                storage.setItem(key, value, false);
            } else {
                var data = this.getWindow();
                if (!$.isPlainObject(data)) {
                    data = {};
                }
                data[key] = value;
                this.setWindow(data);
            }
        },
        /**
         * 删除指定的session缓存
         *
         * @method $.sessionStorage.removeItem
         * @param  {String} key 删除的键值
         * @param  {Boolean} [force:false] 是否强制使用window.name
         */
        removeItem: function(key, force) {
            if ($.isSessionAble && !force) {
                storage.removeItem(key, false);
            } else {
                var data = this.getWindow();
                if ($.isPlainObject(data)) {
                    delete data[key];
                    this.setWindow(data);
                }
            }
        }
    };
    //localStorage检测
    var localStorage = {
        getItem: function(key) {
            return storage.getItem(key, true);
        },
        setItem: function(key, value) {
            storage.setItem(key, value, true);
        },
        removeItem: function(key) {
            storage.removeItem(key, true);
        }
    };
    // 扩展到zepto上
    $.extend($, {
        /**
         * 模板替换
         * @param {String} tlp 格式化的模板字符创
         * @param {Object} metaData 变量替换的元数据对象
         * @param {RegExp} reg 查询正则 - 可选，默认：/^\$\{(\w+)\}$/g
         * @return {[type]}          [description]
         */
        format: function(tpl, metaData, reg) {
            var reg = reg || /\$\{(\w+)\}/g;
            if (!tpl || !metaData || !$.isPlainObject(metaData)) {
                return "";
            } else {
                return tpl.replace(reg, function(m, n, o) {
                    return typeof metaData[n] === undefined ? "" : metaData[n];
                });
            }
        },
        /**
         * 将字符串转换为JSON格式，如果参数为对象则直接返回
         * @method $.parseJSON
         * @param {String|Object} data 需要进行格式转换的数据
         * @return {Object} 转换后的JSON数据
         */
        parseJSON: function(data) {
            if (!data || typeof(data) != "string") {
                return data;
            }
            data = $.trim(data);
            try {
                data = JSON.parse(data);
            } catch (e) {
                data = (new Function("return " + data))();
            }
            return data;
        },
        /**
         * 获取cookie信息
         *
         * @method $.getCookie
         * @param {String} name 获取的cookie的键值
         * @return {String} 获取的cookie值
         */
        getCookie: function(name) {
            var re = new RegExp('(?:^|;+|\\s+)' + name + '=([^;]*)');
            var result = document.cookie.match(re);
            return (!result ? '' : result[1]);
        },
        /**
         * 设置cookie信息(基础方法，建议保持完整性)
         *
         * @method $.setCookie
         * @param {String} name 设置cookie的键值
         * @param {String} value 设置的cookie的值
         * @param {String} [domain:tenpay.com] 设置cookie的域名，默认在财付通的根域
         * @param {String} [path:/] cookie存放的路径
         * @param {Number} minuts 设置的cookie的有效期
         */
        setCookie: function(name, value, domain, path, minute) {
            if (minute) {
                var now = new Date(),
                    expire = new Date();
                expire.setTime(parseFloat(+now) + 60 * 1000 * minute);
            }
            document.cookie = name + '=' + value + '; ' + (minute ? ('expires=' + expire.toUTCString() + '; ') : '') + ('path=' + (path || '/') + '; domain=' + (domain || 'tenpay.com') + ';');
        },
        /**
         * 删除cookie信息(基础方法，建议保持完整性)
         *
         * @method $.removeCookie
         * @param {String} name 被删除cookie的键值
         * @param {String} [domain:tenpay.com] 被删除cookie所在的域名
         * @param {String} [path:/] 被删除cookie存放的路径
         */
        removeCookie: function(name, domain, path) {
            document.cookie = name + '=; expires=Mon, 2 Mar 2009 19:00:00 UTC; path=' + (path || '/') + '; domain=' + (domain || 'tenpay.com') + ';';
        },
        /**
         * 获取url或者自定义的hash字符串中的参数信息
         *
         * @method $.getParameter
         * @param {String} name 不传name则直接返回整个参数对象
         * @param {String} param 转成对象的hash字符串
         * @return {String|Object} 获取到的参数值或者由所有参数组成完整对象
         */
        getParameter: function(name, param) {
            var obj = {},
                tmp,
                str = $.type(param) == "string" ? param : location.search.substring(1);
            var arr = str.split("&");
            if (arr.length > 0) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    try {
                        if (/(.*?)=(.*)/.test(arr[i])) {
                            var k = RegExp.$1;
                            var v = RegExp.$2;
                            obj[k] = this.filterScript(v);
                        }
                    } catch (e) {}
                }
            }
            return name ? obj[name] : obj;
        },
        /**
         * 过滤XSS的非法字符
         *
         * @method $.filterScript
         * @param {String} str 需要进行过滤的字符串
         */
        filterScript: function(str) {
            var text = document.createTextNode(str),
                parser = document.createElement("div"),
                value = "";
            parser.appendChild(text);
            value = parser.innerHTML;
            text = null;
            parser = null;
            return value;
        },
        sessionStorage: sessionStorage,
        localStorage: localStorage
    });
    /**
     * 判断当前宿主是否支持cookie
     * @property $.isCookieAble
     * @type Boolean
     */
    $.isCookieAble = function() {
        var key = "cookie_test",
            v;
        $.setCookie(key, "1");
        v = $.getCookie(key);
        $.removeCookie(key);
        return (v == "1" && navigator.cookieEnabled);
    }
    ();
    /*模块加载控制*/
    seajs.config({
        base: "js/"
    });
    // 模块加载控制
    if (window.DEV_MODE == 'ONLINE') {
        seajs.on("fetch", function(data) {
            var param = (window.MODS || []).join('&');
            var fileName = data.uri.replace(/(?:.*\/)(.*)\.js(\?.*)?/, '$1');
            if (param.indexOf(fileName + '-min.js') > 0) {
                data.requestUri = '/mergefile?' + param;
            } else {
                data.requestUri = data.uri;
            }
        });
    } else {
        seajs.on("fetch", function(data) {
            if (data.uri.indexOf("soundjs.js") >= 0) {
                data.requestUri =  "https://qian.tenpay.com/weixin/action/money150713/js/soundjs.js?v=" + (+new Date);
            }
            if (data.uri.indexOf("v=") >= 0) {
                return;
            }
            data.requestUri = data.uri + "?v=" + (+new Date);
        });
    }
})();