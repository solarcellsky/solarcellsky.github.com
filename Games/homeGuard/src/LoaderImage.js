/**
 * Created by Administrator on 2015/4/22.
 */
var bg_img = new Image();
bg_img.src = "res/bg_index.jpg";
var bg_img_iPad = new Image();
bg_img_iPad.src = "res/bg_index_iPad.jpg";
var loadingBg_img = new Image();
loadingBg_img.src = "res/loadingBarBg.png";
var loading_img = new Image();
loading_img.src = "res/loadingBar.png";


function orientationChange(){
    switch(window.orientation) {
        case 0: // Portrait
        case 180: // Upside-down Portrait
// Javascript to setup Portrait view
            break;
        case -90: // Landscape: turned 90 degrees counter-clockwise
        case 90: // Landscape: turned 90 degrees clockwise
        {alert("请竖屏玩耍...")}
            break;
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
