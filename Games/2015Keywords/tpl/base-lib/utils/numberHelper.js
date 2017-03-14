define(function(require, exports) {

    var adaptHelper = require("base-lib/utils/adaptHelper");

    /**
     * 精确加法
     *
     * @param {String | Number} arg1
     * @param {String | Number} arg2
     *
     * @returns {number} arg1 + arg2
     */
    exports.add = function add(arg1, arg2) {
        // 数字化
        var num1 = parseFloat(arg1);
        var num2 = parseFloat(arg2);

        var r1, r2, m;
        try {
            r1 = num1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }

        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }

        m = Math.pow(10, Math.max(r1, r2));

        return (num1 * m + num2 * m) / m;
    };

    /**
     * 精确减法
     *
     * @param {Number | String} arg1
     * @param {Number | String} arg2
     *
     * @returns {number} arg1 - arg2
     */
    exports.sub = function sub(arg1, arg2) {
        // 数字化
        var num1 = parseFloat(arg1);
        var num2 = parseFloat(arg2);

        var r1, r2, m, n;
        try {
            r1 = num1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }

        m = Math.pow(10, Math.max(r1, r2));

        return ((num1 * m - num2 * m) / m);
    };

    /**
     * 精确乘法
     *
     * @param {Number | String} arg1
     * @param {Number | String} arg2
     * @returns {number} arg1 * arg2s
     */
    exports.mul = function mul(arg1, arg2) {
        // 数字化
        var num1 = parseFloat(arg1);
        var num2 = parseFloat(arg2);

        var m = 0, s1 = num1.toString(), s2 = num2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length;
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };


    /**
     * 精确除法
     *
     * @param {Number | String} arg1
     * @param {Number | String} arg2
     * @returns {number}
     */
    exports.div = function div(arg1, arg2) {
        // 数字化
        var num1 = parseFloat(arg1);
        var num2 = parseFloat(arg2);

        var t1 = 0, t2 = 0, r1, r2;

        try {
            t1 = num1.toString().split(".")[1].length;
        } catch (e) {
        }

        try {
            t2 = num2.toString().split(".")[1].length;
        } catch (e) {
        }

        r1 = Number(num1.toString().replace(".", ""));
        r2 = Number(num2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    };


    /**
     * 按照设定比例放大数值
     *
     * @param val
     * @returns {string}
     */
    exports.upSize = function upSize(val) {
        var v = parseFloat(val);
        var temp = this.div(v , adaptHelper.getEditorRatio);

        return v < 0 ? parseInt(temp) : temp.toFixed(0);

    };

    /**
     * 按照设定比例缩小数值
     *
     * @param val
     * @returns {string}
     */
    exports.downSize = function downSize(val) {
        return this.mul(+parseFloat(val), adaptHelper.getEditorRatio).toFixed(0);
    };

    /**
     * 获取缩放比例值
     *
     * @returns {number}
     */
    exports.getRatio = function getRatio(val) {
        return adaptHelper.getEditorRatio;
    };    
});