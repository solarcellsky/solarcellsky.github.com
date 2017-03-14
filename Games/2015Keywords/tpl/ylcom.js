/**
 * 组件接口
 *
 * NOTICE：由于是入口文件,不能依赖库
 */
define(function(require, exports) {
    'use strict';

    var ID_MAP = {
        '1' : 'singleimage'
    };

    return {
        /**
         * 通过传入的组件列表获取组件地址
         *
         * @param {Array} ids
         */
        getComponentsById: function getComponentsById(ids) {
            var res = {};

            try {
                for(var i = 0; i < ids.length; i++) {
                    if(ids[i]) res[ids[i]] = ID_MAP[ids[i]];
                }
            } catch (e) {
                console.error('获取组件地址列表失败！')
            }

            // 增加一个公共js
            //res['0'] = 'components/common.js';

            return res;
        },

        /**
         * 获取组件库seajs配置
         */
        getComsLibSeajsConf: function getComsLibSeajsConf(webpath) {
            // 每天刷新一次
            webpath = webpath || '';

            return {
                paths: {
                    'lib': webpath + '../tpl//',
                    'coms': webpath + 'components',
                    'pages': webpath + 'pages',
                    'phoneutils': webpath + 'base-lib/utils'
                },
                map: [
                    [/(.*)\.(css|js|html)$/,
                        function(url) {
                            if(window.statichost && url.indexOf(statichost) < 0 && location.host.indexOf('u.') === 0) {
                                url = url.replace(/http:\/\//, '');
                                url = url.replace(location.host, statichost);
                            }

                            return url;
                        }
                    ]
                ],

                debug: true
            }
        }
    }
});