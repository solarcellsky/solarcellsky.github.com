/**
 * Created by changcz on 2014/9/20.
 */

/**
 * 用Math.random()函数生成0~1之间的随机数与0.5比较，返回i或j
 * @returns {number}
 */
function randomOr(i,j) {
    var ran =Math.random();
    return ran>.5 ? i : j;
}


/**
 * 用Math.random()函数生成0~1之间的随机数与0.5比较，返回true或false
 * @returns {number}
 */
function randomBool() {
    var ran =Math.random();
    return ran >.5;
}

/**
 * create a random integer between min and max
 * @param min
 * @param max
 * @returns {int}
 */
function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}

function random_x_axis(){
    return random(0,cc.director.getWinSize().width);
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
};