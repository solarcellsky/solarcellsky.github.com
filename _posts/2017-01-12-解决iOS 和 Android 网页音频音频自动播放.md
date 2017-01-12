---
layout: post
category : lessons
tagline: ""
tags : [Web,javascript,css,developer]
---
{% include JB/setup %}

##HTML

在页面中写入HTML标签用来保存音频文件的url。

    <div id="sound" data-soundmp3="./assets/sounds/ambient.mp3" data-soundogg="./assets/sounds/ambient.ogg"></div>

##JS

    $(window).load(function() {
        var audio = new Audio();
        audio.loop = true;
        var soundmp3 = $('#sound').data('soundmp3');
        var soundogg = $('#sound').data('soundogg');
        if (audio.canPlayType("audio/mp3")) {
            var audio = new Audio(soundmp3);
        }else if(audio.canPlayType("audio/ogg")) {
            var audio = new Audio(soundogg);
        }
        audio.load();
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        if (bIsIphoneOs || bIsIpad) {
            document.addEventListener("WeixinJSBridgeReady", function () { 
                audio.play();
            }, false);
            // 需引入 <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
            // 只在微信中有效
        } else {
            audio.play();
        }

        $("#sound").on('click', function() {
            if (audio.paused) {
                $("#sound .bar").removeClass("noAnim");
                audio.play(); 
                // audio.currentTime = 0.0; 
            } else {
                $("#sound .bar").addClass("noAnim");
                audio.pause();
            }
        });
    });
    
##总结

由于 iOS 系统的限制，以上代码仅在微信中有效。播放停止状态可通过 CSS 来控制实现。