/**
 * Created by Administrator on 2014/12/23.
 */
var is_success = 1;            //是否关注
var global_germCount = 0;
var global_isIPad = false;

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
    }
}