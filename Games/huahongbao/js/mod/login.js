/**
 * 微信登录组件
 * @author: slarkzhang
 * @date 2014.8.6
 */

define('mod/login', [], function(require, exports, module) {
    /**
     * 检查是否登录状态，无登陆态肯url中有code，执行登陆
     */
    var _checkLogin = function(sp_name, callback){
        var urlParam = $.getParameter();
        var code = urlParam['code'];
        var state = urlParam['state'];
        if(!_isLogin() && code){
            var cfg = {
                url : '/app/v1.0/wx_communitylogin.cgi',
                data : {
                    'code' : code,
                    'state' : state,
                    'sp_name' : sp_name,
                    'OutPutType' : 'JSON'
                },
                timeout : 30000,
                success : function(data){
                    var retcode = parseInt(data.retcode || -1, 10);
                    switch (retcode){
                        case 0:
                            $.sessionStorage.setItem('qluin', data['qluin']);
                            $.sessionStorage.setItem('qlskey', data['qlskey']);
                            $.sessionStorage.setItem('qlappid', data['qlappid']);
                            $.sessionStorage.setItem('wx_session_time', new Date().getTime());
                            callback && callback();
                            break;
                        case 51055204: //code失效
                            $.sessionStorage.removeItem('qluin');
                            $.sessionStorage.removeItem('qlskey');
                            $.sessionStorage.removeItem("relogin");
                            $.sessionStorage.removeItem('oauth_jump');
                            window.jumpOauth && window.jumpOauth();
                            break;
                        default:
                            alert("[" + retcode + "]网络出了点小问题，请稍后再试");
                    }
                }
            }
            $.ajax(cfg);
        }else{
            callback && callback();
        }
    }

    /**
     * 判断用户是否已经转换了微信登录态
     */
    var _isLogin = function(){
        var qluin = $.sessionStorage.getItem('qluin') || $.getCookie('qluin');
        var qlskey = $.sessionStorage.getItem('qlskey') || $.getCookie('qlskey');
        return qluin && qlskey;
    }

    /**
     * 获取用户转换微信登录态后的信息
    */
    var _getLoginInfo = function(){
        var qluin = $.sessionStorage.getItem('qluin') || $.getCookie('qluin');
        var qlskey = $.sessionStorage.getItem('qlskey') || $.getCookie('qlskey');
        return {
            qluin : qluin,
            qlskey : qlskey
        }
    }

    return {
        "isLogin"        : _isLogin,
        "checkLogin"     : _checkLogin,
        "getLoginInfo"   : _getLoginInfo
    }
});