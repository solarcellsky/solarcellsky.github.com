/**
 * Created by Administrator on 2014/12/23.
 */
var g_isConnectServer = true;               //是否连接服务器

var MY_GLOBAL = {

    //去除字符串两边空格
    trim:function(mystr) {
        while ((mystr.indexOf(" ") == 0) && (mystr.length > 1)) {
            mystr = mystr.substring(1, mystr.length);
        }//去除前面空格

        while ((mystr.lastIndexOf(" ") == mystr.length - 1) && (mystr.length > 1)) {
            mystr = mystr.substring(0, mystr.length - 1);
        }//去除后面空格

        if (mystr == " ") {
            mystr = "";
        }
        return mystr;
    },

    //身份证检测
    isCardNo:function(card) {
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(card) === false) {
 //           TINY.box.show({html: '亲，身份证输入不合法!', animate: false, close: false, boxid: 'error', autohide: 2, top: 200});
            return false;
        }
        return true;
    },

    //手机号检测
    isPhotoNo:function(value){
        var regMobile = /[1][3|4|5|8]\d{9}$/;
        var regMobile2 = /[1][7][7]\d{8}$/;
        var mflag = regMobile.test(value);
        var mflag2 = regMobile2.test(value);
        if (mflag || mflag2) {
            return true;
        }
        return false;
    }
}