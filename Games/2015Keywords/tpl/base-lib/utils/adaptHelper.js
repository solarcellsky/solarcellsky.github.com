define(function(require, exports) {
    'use strict';

    var CONS = {
        EDITOR: {
            MAX_HEIGHT: 1040,
            MAX_HEIGHT_RANGE: 1050,
            MAX_WIDTH: 640,
            MAX_WIDTH_RANGE: 650,
            RANGE: 10,
            // 放大倍率
            RATIO: 0.6,
            // 最小倍率
            MIN_RATIO: 0.15,
            // 空白高度
            EXPAND_HEIGHT: 100,
            // 顶部导航高度
            NAV_HEIGHT: 60,
            // 自动吸附范围
            ABSORB_RANGE: 5
        }
    };

    /**
     * 获取画布缩放率
     *
     * @return Number
     */
    exports.getEditorRatio = (function () {
        var contentHeight = document.documentElement.clientHeight;
        var navHeight = CONS.EDITOR.NAV_HEIGHT;
        var editorHeight = CONS.EDITOR.MAX_HEIGHT * CONS.EDITOR.RATIO;

        if (contentHeight - navHeight - editorHeight < CONS.EDITOR.EXPAND_HEIGHT) {
            var newHeight = contentHeight - navHeight - CONS.EDITOR.EXPAND_HEIGHT;
            var ratio = Math.abs(newHeight / CONS.EDITOR.MAX_HEIGHT);
                return ratio < CONS.EDITOR.MIN_RATIO ? CONS.EDITOR.MIN_RATIO : ratio;
        } else {
            return CONS.EDITOR.RATIO;
        }
    })();

});