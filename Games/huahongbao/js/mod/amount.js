/**
 * 金额处理
 * @author slarkzhang
 * @date 2014.9.8
*/  
define('mod/amount', [], function(require, exports, module){
    var _fen2Yuan = function(value){
        var re = /^[\+|-]?[0-9]+$/;
        if (typeof(value) != "string") {
            value = value.toString()
        }
        return (re.test(value)) ? (parseFloat(value) / 100).toFixed(2) : "0.00"
    };

    var _yuan2Fen = function(value){
        var re = /^[\+|-]?\d+(\.\d+)?$/;
        if (typeof(value) != "string") {
            value = value.toString()
        }
        return (re.test(value)) ? (parseFloat(value) * 100).toFixed(0) : "0"
    };

    return {
        fen2Yuan : _fen2Yuan,
        yuan2Fen : _yuan2Fen
    }
});