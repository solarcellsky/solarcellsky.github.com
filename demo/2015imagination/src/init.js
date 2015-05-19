var PP;
var gts = function(o) {
    return document.getElementById(o);
};
var init = function() {
    gameCore.Config.core = ["libs/easeljs-0.8.0.min.js", "libs/soundjs-0.6.0.min.js",
        "libs/tweenjs-0.6.0.min.js", "libs/movieclip-0.8.0.min.js", "src/StageManager.js"
    ];
    gameCore.Config.loading = [{
        src: "src/loader.js",
        lib: "loaderLib",
        image: "loaderImages"
    }];
    gameCore.Config.contentLib = [{
        src: "src/game.js",
        lib: "SceneLib",
        image: "SceneImages"
    }]
    gameCore.Config.stageSize = {
        width: 640,
        height: 960
    };
    gameCore.Config.stageType = "V";
    gameCore.Config.canvas = "canvas"
    gameCore.Config.start();
};
//预加载
var isANDROID = (/Android/i.test(navigator.userAgent));
if (isANDROID) {
    gts('LoadNUM').style.fontSize = '2rem'
}
var setLoad = 0;
var pti = setInterval(onProgress, 300, setLoad)

function onProgress(value) {
    if (value <= .49) {
        if (setLoad < 50) {
            setLoad++;
        }
        value = setLoad / 100
    } else {
        if (pti != -1) {
            clearInterval(pti)
            pti = -1
        }
    }
    gts('LoadNUM').innerHTML = parseInt(value * 100) + '%';
    if (value == 1) {
        if (pti != -1) {
            clearInterval(pti)
            pti = -1
        }
        gts('loading').className = "loadhid";
        //pgvSendClick({hottag:'imagination.loading.after'});

    }
}
// 跳转
function onBottonClick() {
    //最后点击三角的按钮事件
    window.location.href = "#";
}
    //分享
var onBridgecallback = function() {
        //pgvSendClick({hottag:'imagination.relay.btn'});
    },
    onBridgeReady = function() {
        //转发朋友圈 SharePoint
        WeixinJSBridge.on("menu:share:timeline", function(e) {
            WeixinJSBridge.invoke("shareTimeline", {
                img_url: "http://up.qq.com/2015/imagination/images/sharelogo3.jpg",
                img_width: "120",
                img_height: "120",
                link: 'http://up.qq.com/2015/imagination/',
                desc: '想象力，总能带我们抵达更美好的地方。',
                title: '生命之下，想象之上'
            }, function(res) {
                (callback)(res);
            });
            pgvSendClick({
                hottag: 'imagination.relay.quan'
            });
        });
        //分享给朋友
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke("sendAppMessage", {
                img_url: "http://up.qq.com/2015/imagination/images/sharelogo3.jpg",
                img_width: "120",
                img_height: "120",
                link: 'http://up.qq.com/2015/imagination/',
                desc: '想象力，总能带我们抵达更美好的地方。',
                title: '生命之下，想象之上'
            }, function(res) {
                (callback)(res);
            });
            pgvSendClick({
                hottag: 'imagination.relay.friend'
            });
        });
    };
try {
    document.addEventListener('WeixinJSBridgeReady', function() {
        onBridgeReady();
    });
} catch (e) {};
//点击流
if (typeof(pgvMain) == 'function') pgvMain();