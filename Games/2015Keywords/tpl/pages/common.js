define(function (require) {

    var comUtils = require('../base-lib/utils/comUtils');
    var CONS = require('pages/constants');
    
    /**
     * 页类
     * @param {Object} pageData 页数据
     * @param {Object} filpPage 滑页对象
     */
    var Page = function(pageData, filpPage) {
        // 页的ID
        this.id = ['page-', pageData.page_id].join('');

        // 页的组件列表和JS列表
        this.comList = pageData.comList || [];
        this.comJsList = pageData.comJsList || [];

        // 页的dom结构
        this.dom = Page._createDOM.call(this, pageData);

        // 是否加载完成
        this.isComplete = false;
        // 保存页对象
        this._pageData = pageData;
        // 保存当前滑页对象
        this._filpPage = filpPage;
    };

    /**
     * 计算组件动画总时间
     */
    Page._calcAnimationTime = function(comList) {
        var time = 0;
        _.each(comList, function(o) {
            var inTime = 0;
            var outTime = 0;  
            var count = 0;          
            var inAnime = o.attrs.inAnime;
            var outAnime = o.attrs.outAnime;

            if(inAnime) {
                count = inAnime.isInfinite ? 1 : inAnime.count;
                inTime = inAnime.delay + (inAnime.duration * count);
            }
            if(outAnime) {
                count = outAnime.isInfinite ? 1 : outAnime.count;
                outTime = outAnime.delay + (outAnime.duration * count);
            }

            time = (inTime + outTime) > time ? (inTime + outTime) : time;            
        });

        return time;
    };

    /**
     * 创建Dom
     *
     * @param  {[type]} pageData 页数据
     * @return {[Object]} DOM
     */
    Page._createDOM = function (pageData, filpPage) {
        // 如果图片没有宽高, 需要读取图片的长宽
        var loadBgImg = function() {
            bgImg.onload = function () {
                // 调用居中适配代码
                _.extend(bgImg.style, comUtils.comCenterFixed({
                    warpHeight: comUtils.isMobile() ? getComputedStyle(window.document.body).height : section.style.height || getComputedStyle(document.querySelector('.liveApp')).height,
                    warpWidth: comUtils.isMobile() ? getComputedStyle(window.document.body).width : section.style.width || getComputedStyle(document.querySelector('.liveApp')).width,
                    height: this.naturalHeight,
                    width: this.naturalWidth
                }));
            };
        };

        // 构建背景色div
        var createBgColor = function(bgColor, bgImage) {
            var div = document.createElement('div');

            // 现阶段只有高度适配，此处需要暂时只做高度适配
            if(comUtils.isMobile() && window.pageRatio) {
                div.style.cssText = 'position: absolute; height: 100%; width: 100%; z-index: -10000; background-color: ' + bgColor + '; ';
                if(bgImage && bgImage !== 'none') {
                    if(bgImage.indexOf('url') === 0) {
                        div.style.cssText =  div.style.cssText + ' background-image: ' + bgImage + '; ';
                    } else {
                        div.style.cssText =  div.style.cssText + ' background-image: url(' + bgImage + '); ';
                    }
                }

                return div;
            }
        };

        //创建section
        var section = document.createElement('section');
        var data = pageData.data;

        // 设置class
        section.className = 'page';

        // 设置id
        section.setAttribute('id', 'page-' + pageData.page_id);
        
        // 设置当前页的pageList page_order增加到dom上
        section.setAttribute('index', pageData.pageIndex);

        //设置翻页动画
        pageData.inAnime = pageData.inAnime || {type: 0};
        pageData.outAnime = pageData.outAnime || {type: 0};

        // 设置入场/出场动画
        section.setAttribute('animation-in', pageData.inAnime.type);
        section.setAttribute('animation-out', pageData.outAnime.type);
        section.setAttribute('bg-layout', pageData.bgLayout);
        section.setAttribute('pageIndex', pageData.pageIndex);

        if(pageData.data) {
            // 锁定翻页
            section.setAttribute('isLockPageFlip', pageData.data.isLockPageFlip || '');
            // 自动翻页
            section.setAttribute('isAutoPageFlip', pageData.data.isAutoPageFlip || '');
            // 翻页时间
            section.setAttribute('autoPageFlipTime', (pageData.data.autoPageFlipTime * 1000) || 0);
            // 动画时间
            section.setAttribute('comsTotalTime', Page._calcAnimationTime(pageData.comList));
        }
        // 屏幕适配处理
        if(window.pageRatio && comUtils.isMobile()) section.style.height = (100 / window.pageRatio) + '%';


        // 设置样式属性
        _.each(pageData, function(value, key) {
            // 对象不处理
            if(typeof value === 'object') return;
            if(value == undefined) return console.log(o + ' is not exist!!!');

            // 处理缩写
            if(/^bg/.test(key)) {
                key = key.replace(/^bg/, 'background');
            }

            // 赋值
            section.style[key] = value;
        });

        // 兼容场景秀bgType默认值问题
        if(liveApp.caseData && +liveApp.caseData.create_by === 2) {
            if(pageData.bgImage && pageData.bgType == CONS.BACKGROUND_TYPE.NULL) {
                section.style['backgroundType'] = pageData.bgType = CONS.BACKGROUND_TYPE.ALL;
            }
        }

        // pc端依然需要，背景居中时的适配样式
        if(!comUtils.isMobile() && pageData.bgLayout === 'center' && section.style['backgroundImage'] && section.style['backgroundImage'] != 'none'
             && (section.style['backgroundType'] === CONS.BACKGROUND_TYPE.IMAGE || section.style['backgroundType'] === CONS.BACKGROUND_TYPE.ALL)) {
            var bgImg = document.createElement('img');
            bgImg.src = pageData.bgImage.replace(/url\(/, '').replace(/\)/, '');
            bgImg.style.position = 'absolute';

            //iOS默认图片加载后显示
            if(!comUtils.isAndroid()) {
                loadBgImg();
            }else{
                if(data && data.bgImageObj && data.bgImageObj.width && data.bgImageObj.height) {
                    // 调用居中适配代码
                    _.extend(bgImg.style, comUtils.comCenterFixed({
                        warpHeight: comUtils.isMobile() ? getComputedStyle(window.document.body).height : section.style.height || getComputedStyle(document.querySelector('.liveApp')).height,
                        warpWidth: comUtils.isMobile() ? getComputedStyle(window.document.body).width : section.style.width || getComputedStyle(document.querySelector('.liveApp')).width,
                        height: data.bgImageObj.height,
                        width: data.bgImageObj.width
                    }));
                } else {
                    loadBgImg();
                }
            }

            // 置空外部
            section.style['backgroundImage'] = '';
            section.appendChild(bgImg);
        }

        // 样式特殊处理，无论是all还是color都必须要加入背景色的div
        var bgColorDiv = createBgColor(pageData.bgColor, pageData.bgImage);
        if(section.style['backgroundType'] === CONS.BACKGROUND_TYPE.COLOR) {
            section.style['backgroundImage'] = '';
            if(bgColorDiv) section.appendChild(bgColorDiv);
        } else if(section.style['backgroundType'] === CONS.BACKGROUND_TYPE.NULL) {
            section.style['backgroundColor'] = '';
            section.style['backgroundImage'] = '';
        } else if(comUtils.isMobile() && (section.style['backgroundType'] === CONS.BACKGROUND_TYPE.ALL || section.style['backgroundType'] === CONS.BACKGROUND_TYPE.IMAGE)) {
            if(bgColorDiv) section.appendChild(bgColorDiv);
        }

        // 返回section
        return section;
    };

    /**
     * 初始化效果函数
     * @private
     */
    Page.prototype.initEffect = function(pageData, pageDom, filpPage, page, pagesMask) {
        var NO_EFFECT = 0;
        if(!pageData.effect || +pageData.effect.type === NO_EFFECT) return;

        var type = CONS.EFFECT_TYPE[pageData.effect.type];

        //TODO: 指定需要阻止组件动画的页特效
        if(type === 'eraser' || type === 'finger' || type === 'gravity'){
            //特效页默认隐藏
            page.setPageVisible('hidden');            
            // 阻止组件动画
            if(type != 'gravity'){
                pageDom.setAttribute('stop-anime', true);
            }else{
                //隐藏全局页面遮罩
                pagesMask.hide();
            }
        }else{
            //其他特效页默认显示
            page.setPageVisible('visibility');
            //隐藏全局页面遮罩
            pagesMask.hide();
        }

        //加载组件动画文件
        type && seajs.use('/tpl/pages/effect/' + type + '/front/' + type, function(o) {
            o.init(pageData, filpPage, pageDom, page, pagesMask);
        });
    };


    /**
     * 设置页面隐藏标记
     * @param  {[Boolean]} state 显示状态
     */
    Page.prototype.setPageVisible = function(state){
        if(comUtils.isAndroid() || !comUtils.isMobile()) {
            this.dom.style.visibility = state;
        }
    };

    return {
        init: function(obj, target, filpPage, pagesMask) {
            // 实例化页
            var p = new Page(obj, filpPage);

            // 页组件初始化
            var comList = [];
            for(var i= 0, it; it = p.comList[i++];) {
                if(it.isDeleted && (it.isDeleted === true || it.isDeleted === 'true')) continue;

                comList.push(it);
            }
            var loadJsList = [];
            var cssList = [];
            var cssTypeList = window.liveApp.cssTypeList = window.liveApp.cssTypeList || [];

            // 加载准备
            var cssStr = '';
            _.each(comList, function(o) {
                var type = o.type;
                if(cssTypeList.indexOf(o.type) < 0) {
                    cssTypeList.push(o.type);
                    var cssPath = window.isDebug === '0' || !window.isDebug ? o.jsPath.replace('/tpl/components/', '') : o.jsPath;
                    // 构建csslist
                    cssList.push(cssPath + '/front/' + o.type + '.css');
                }
                // js path 去掉尾部的‘/’
                o.jsPath = o.jsPath.replace(/\/$/, '');

                if(window.isDebug === '0' || !window.isDebug) o.jsPath = o.jsPath.replace('/tpl/', '/tpl/dist/');

                loadJsList.push(o.jsPath + '/front/' + o.type);
            });

            // 动态追加组件css
            if(cssList.length > 0) {
                cssList = _.uniq(cssList);
                if(window.isDebug === '0' || !window.isDebug) {
                    $.ajax({
                        url: '/tpl/components/??' + cssList.join(','),
                        type: 'GET',
                        success: function(cssStr) {
                            var style = document.createElement('style');
                            style.type = 'text/css';
                            style.id = 'allComsCss';
                            style.styleSheet ? style.styleSheet.cssText = cssStr : style.appendChild(document.createTextNode(cssStr));
                            document.head.appendChild(style);
                        }
                    });
                } else {
                    seajs.use(cssList);
                }
            }

            //加载完成的组件数量
            var loadedComsCount = 0;
            // 判断是否存在组件js
            if(loadJsList.length) {
                // 加载组件js
                _.each(loadJsList, function(o, ins) {
                    seajs.use(o, function(js) {
                        if(js && js.init){
                            // 获取组件实例
                            var tc;
                            if(comList[ins]) {
                                //初始化组件
                                tc = js.init(comList[ins], ins, p);
                            } else {
                                return console.log('this coms attrs is empty');
                            }
                            p.comJsList.push(tc);
                            if(tc && tc.curDom) p.dom.appendChild(tc.curDom);
                        }

                        //如果组件全部加载完成，则将完成标识置为true，以便外部使用
                        if(++loadedComsCount === loadJsList.length) {
                            p.isComplete = true;
                        }
                    });
                });
            } else {
                //如果没有要加载的组件js，则将完成标识置为true，以便外部使用
                p.isComplete = true;
            }

            //初始化功能页效果
            if(p._pageData.effect && p._pageData.effect.type > 0){
                p.initEffect(p._pageData, p.dom, p._filpPage, p, pagesMask);
            }else{
                pagesMask.hide();
            }

            //将页的dom追加到页容器
            target ? target.appendChild(p.dom) : document.body.appendChild(p.dom);
            
            //返回页实例
            return p;
        }
    }
});