/**
 * Created by Lixin on 15/6/9.
 * <script src="http://yaotv.qq.com/shake_tv/include/js/jsapi.js"></script>
 */
var apicode = "";
var g_video;

//获取cde
function getcode(callback) {
    shaketv.authorize("wx43123d34422c7bc9", "base", function (d) {
        console.log(d.errorCode + ":" + d.errorMsg + " code:" + d.code);
        apicode = d.code;
        callback(d.code);
    });
}
function playvideo(){
    showVideo();
}

//video
function videoEnd()
{
    g_video.webkitExitFullScreen();
}
function showVideo()
{
    if(!g_video)
    {
        g_video = document.createElement('video');
        g_video.preload = "preload";
        g_video.style.position = 'absolute';
        g_video.style.zIndex= -1;
        g_video.width = "600";
        g_video.height = "370";
        g_video.width = "0";
        g_video.height = "0";
        var source = document.createElement('source');
        source.src = 'http://hunantv.wanh5.com/womendouaixiao5/video.mp4';
        source.type = 'video/mp4';
        g_video.appendChild(source);
        g_video.addEventListener('ended', videoEnd, false);
        document.body.appendChild(g_video);
    }

    setTimeout(function(){
        g_video.play();
        g_video.webkitEnterFullScreen();
    },500);
}