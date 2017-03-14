<?php
require_once "../api/api.php";
$jssdk = new JSSDK("wx8a0bc64a7f8b1870", "4c52d50d79dd70d4082840226dcea691");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>天天飞长安</title>
    <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="full-screen" content="true" />
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-fullscreen" content="true" />
    <meta name="360-fullscreen" content="true" />
    <style>
    body {
        text-align: center;
        background: #000000;
        padding: 0;
        border: 0;
        margin: 0;
        height: 100%;
    }
    
    html {
        -ms-touch-action: none;
        /* Direct all pointer events to JavaScript code. */
        overflow: hidden;
    }
    
    canvas {
        display: block;
        position: absolute;
        margin: 0 auto;
        padding: 0;
        border: 0;
    }
    #gameRules {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(./resource/assets/rules.png) no-repeat center center;
        background-size: 100% 100%;
        z-index: 999;
    }

    #sound {
        display: none;
        background: url(./resource/assets/m1.png) no-repeat center center;
        background-size: 100% auto;
        width: 36px;
        height: 36px;
        position: absolute;
        z-index: 99;
        right: 20px;
        top: 20px;
    }

    #sound.off {
        background: url(./resource/assets/m2.png) no-repeat center center;
        background-size: 100% auto;
        -webkit-animation: none;
        -moz-animation: none;
        -o-animation: none;
        animation: none;
    }
    </style>
</head>

<body>
    <div id="gameRules"></div>
    <div id="sound"></div>
    <div style="position:relative;" id="gameDiv"></div>
    <script>
    var document_class = "Main";
    </script>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="launcher/jquery.min.js"></script>
    <script src="launcher/egret_require.js"></script>
    <script src="launcher/egret_loader.js"></script>
    <script src="launcher/game-min.js"></script>
    <script src="launcher/games.js"></script>
    <script>
        var meiriq_game = new Meiriq_game("damingxiaoming", "score");
        window["meiriq_game"].permitStart = 1; //这里需要自己修改参数测试一下 如果是1允许开始 0则不允许开始游戏
    </script>
    <script>
    var support = [].map && document.createElement("canvas").getContext;
    if (support) {
        egret_h5.startGame();
    } else {
        alert("Egret 不支持您当前的浏览器")
    }
    </script>
    <script>
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [ //需要使用的网页服务接口
            'checkJsApi', //判断当前客户端版本是否支持指定JS接口
            'onMenuShareTimeline', //分享给好友
            'onMenuShareAppMessage', //分享到朋友圈
            'onMenuShareQQ', //分享到QQ
            'onMenuShareWeibo' //分享到微博
        ]
    });
    wx.ready(function() {
        wx.onMenuShareTimeline({ //例如分享到朋友圈的API  
            title: '天天飞长安', // 分享标题
            desc: '天天翱九霄，免费赢机票', // 分享描述
            link: 'http://demo.hengsha.com.cn/tiantian/', // 分享链接
            imgUrl: 'http://demo.hengsha.com.cn/tiantian/resource/assets/icon.jpg', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: '天天飞长安', // 分享标题
            desc: '天天翱九霄，免费赢机票', // 分享描述
            link: 'http://demo.hengsha.com.cn/tiantian/', // 分享链接
            imgUrl: 'http://demo.hengsha.com.cn/tiantian/resource/assets/icon.jpg', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
    });
    wx.error(function(res) {
        alert(res.errMsg); //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
    });
    </script>
</body>

</html>
