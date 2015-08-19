/**
    *
    *  Base64 encode / decode
    *  http://www.webtoolkit.info/
    *
    **/
var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

};

var AniObj = window.AniObj || function (opt) {
    if (opt) {
        opt.fatherDom && this.bindEvent(opt.fatherDom);
    }
};
AniObj.prototype.createProperty = function (name, changeFun, defaultValue, alwaysFire) {
    var _ = this,
        me = {
            value: defaultValue,
            changeFun: changeFun || function () { }
        };
    Object.defineProperty(_, name, {
        set: function (value) {
            if (me.value != value || alwaysFire) {
                me.value = value;
                me.changeFun.call(_, value)
            }
        },
        get: function () {
            return me.value;
        }
    })
}
AniObj.prototype.bindEvent = function (father) {
    var clicks = document.querySelectorAll(father + " [on-click]"),
        _ = this;
    var isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

    for (var i = 0, len = clicks.length; i < len; i++) {
        (function () {
            var handle = function (e) {
                e.preventDefault();
                with (_) {
                    eval(action);
                }
            },
			action = clicks[i].getAttribute('on-click');
            if (isMobile)
                clicks[i].addEventListener('touchend', handle);
            else
                clicks[i].addEventListener('mouseup', handle);
        })();
    }
}

window.AniObj = AniObj;

AniObj.getMyGaTrackId = function () {
    var visit_code = 0;
    if (window._gaq && window._gaq.push) {
        _gaq.push(function () {
            var tracker = _gat._getTrackers()[0];
            visit_code = tracker._visitCode();
        });
    }
    return visit_code;
}

var customImage = function (customData, evt, cb) {
    if (window.mucard == null) return cb(customData);
    var imageData = [], imgObj = 0;
    for (id in MugedaCard.data) {
        var item = MugedaCard.data[id],
            des = item.formDescription,
            objs = item.obj;
        for (var i = 0 ; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.cardRefParam === 'image' || obj.cardRefParam === 'signature') {
                (function () {
                    imgObj++;
                    var img = new Image();
                    img.src = obj.oriSrc || obj.dom.src;
                    var pushObj = {
                        id: id,
                        name: obj.name,
                        defaultUrl: obj.oriSrc || obj.src,
                        url: null
                    }
                    img.onload = function () {
                        imgObj--;
                        pushObj.width = img.width;
                        pushObj.height = img.height;
                        imageData.push(pushObj);
                        if (imgObj == 0) imgReadyCallback();
                    }
                })();
            }
        }
    };
    if (imgObj == 0) cb(customData);
    else evt.cancel = true;

    var imgReadyCallback = function () {

        if (imageData.length > 0) {

            if (!MugedaCard.picSelectForm) {
                var html =
'    <style>' +
'        body a{ -webkit-tap-highlight-color: transparent;}' +
'        #mpopupForm { font-family: Tahoma,"微软雅黑",Arial, SimHei; }' +
'        #mpopupForm .highlight {color: #d60;}' +
'        #mpopupFormFrame { position: absolute; border-radius: 4px; background-color: rgba(255,255,255, 1); width: 300px; height: 360px; margin: auto; top: 50%; margin-top: -180px; left: 50%; margin-left: -150px; }' +
'        #mpopupFormFrame div.title { text-align: center; border-bottom: 1px solid; padding: 5px 0; }' +
'        #mpopupFormFrame div.mcontent { height: 283px; text-align: center; }' +
'        #mpopupFormFrame div.image-frame { height: 218px; position: absolute; left: 0; right: 0}' +
'        #mpopupFormFrame #img_t {border: 0; position: absolute; top: 100px; left: 140px; display: none;}' +
'        #mpopupFormFrame div.image-name {text-align:left; height: 48px; vertical-align: middle;font-size:12px;padding: 5px 5px; display: inline-block; width: 212px}' +
'        #mpopupFormFrame span.image-btn{ display: inline-block; height: 48px;vertical-align: middle;}' +
'        #mpopupFormFrame div.mcontent #img_n { border: solid 1px black; position: absolute; }' +
'        #mpopupFormFrame .mask { background:black; opacity: 0.75; position: absolute; }' +
'        #mpopupFormFrame .changeBottom {bottom: 50px; position: absolute; width: 100%; }' +
'        #mpopupFormFrame .maskTop { left:0; right:0; top: 0; }' +
'        #mpopupFormFrame .maskLeft { left:0; }' +
'        #mpopupFormFrame .maskRight { right:0; }' +
'        #mpopupFormFrame .maskBottom { left:0; right:0; bottom: 0; }' +
'        #mpopupFormFrame .maskMid { position: absolute; border:1px white solid;}' +
'        #mpopupFormFrame .maskMid .corner { position: absolute; width: 30px; height: 30px;}' +
'        #mpopupFormFrame .maskMid .corner .cornerinner{ position: absolute; width: 30px; height: 30px; left: -15px; top: -15px; background: rgba(255, 255, 255, 0.5); border:1px solid white; -webkit-border-top-left-radius:15px; -webkit-border-top-right-radius:15px; -webkit-border-bottom-right-radius:15px; -webkit-border-bottom-left-radius:15px; background-repeat: no-repeat; background-position: center; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDY5RTQ2OUJBMzcwMTFFM0IwNUM5MTQxNzg4ODg1QzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDY5RTQ2OUNBMzcwMTFFM0IwNUM5MTQxNzg4ODg1QzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NjlFNDY5OUEzNzAxMUUzQjA1QzkxNDE3ODg4ODVDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjlFNDY5QUEzNzAxMUUzQjA1QzkxNDE3ODg4ODVDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PukyTYAAAAF+SURBVHjaYrSxsfnAz8/PyIAF8PLy/nvx4gXb58+fVYHcZ9jUnDlzBkyz/Pr1i3vLli0s2BR1dnb+3LVr1x1chiADJlwSIEN279596uPHj4YMRAAmfIZ8+PDBGcj9TbZBIPD//38hICXIQCRgQXcJiC4vL2d3d3fXLi4u3gf0mhNQ6BXRLjp06BADyDsgDGIbGBgw9Pb2agNjdB9QWoygQVxcXL8uXLjA0NjYeBUYJiEgDGKDxNAMY8Vr0Ldv39gKCwufIHnhFYgN9BbcMDc3NxWgYefxGcZobGzMCaS/Y5ETAybIs3PnzpVRUlKCpylocoDFpBgnJ+ctUFpkwmEICLwCpmjj5OTkJ/fu3QNHAJrLwBYtXLiQH2/04zNMQEBgLyjc+vv7ZaSlpTGjn4BhZ0EaQYYBxcyAyYMdFH4/f/4k2iC4YaB0BXIR1DDiUjapgFgXiYHCBJSmQN4h2yBQ7AANkcFlCCwdETJHCmjQbW5u7j+4FHz9+vUTQIABAKL6w4LVWfrWAAAAAElFTkSuQmCC"); }' +
'        #mpopupFormFrame div.btn-line { border-top: 1px solid; height: 44px; text-align: center; line-height: 40px; }' +
'        #mpopupFormFrame .btn { margin: 0 17px; min-width: 60px; height: 28px; line-height: 28px; border-radius: 4px; border-width: 1px; font-size: 12px; background-color: #EEEEEE; border-color: #DDDDDD; display: inline-block; text-align: center; text-decoration: none; color: black; }' +
'        #mpopupFormFrame .btn.pre { min-width: 32px; margin: 0 8px 0 0}' +
'        #mpopupFormFrame .btn.next{ min-width: 32px; margin: 0 0 0 8px}' +
'        #mpopupFormFrame .btn.ok{ background-color: #989898; color: #ffffff }' +
'        #mpopupFormFrame .btn img { vertical-align: middle; margin-top: -2px;}' +
'        #mpopupFormFrame .btn:hover { -webkit-box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); -moz-box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); }' +
'    </style>' +

'        <div id="mpopupFormFrame">' +
'            <div class="title">定制贺卡图片</div>' +
'            <div class="mcontent">' +
'                <div class="image-frame">' +
'                    <img class="image" id="img_n" src="i/5306dc958a840f6029000209.png" />' +
'                    <img class="image" id="img_t" src="i/loading.gif" />' +
'                    <div class="mask maskTop"></div>' +
'                    <div class="mask maskLeft"></div>' +
'                    <div class="mask maskRight"></div>' +
'                    <div class="mask maskBottom"></div>' +
'                    <div class="maskMid">' +
'                        <!--<div class="corner cornertop"><div class="cornerinner"></div></div>-->' +
'                        <div class="corner cornerbottom" style="bottom: 0; right: 0; -webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -ms-transform: rotate(180deg);"><div class="cornerinner"></div></div>' +
'                    </div>' +
'                </div>' +
'                <div class="changeBottom">' +
'                    <div class="image-name">fsadsafd</div>' +
'                    <span class="image-btn" href="#" on-click="changePic()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAA3NCSVQICAjb4U/gAAAAh1BMVEX///+1tbWtra2lpaWZmZmtra2lpaWZmZmUlJSlpaWZmZmUlJSMjIylpaWZmZmUlJSlpaWZmZmUlJSMjIylpaWZmZmUlJSlpaWZmZmUlJSlpaWUlJSZmZmUlJSZmZmUlJSMjIyZmZmUlJSMjIyZmZmUlJSMjIyZmZmMjIyUlJSMjIyUlJSMjIz80hmnAAAALXRSTlMAERERESIiIiIzMzMzREREVVVVVWZmZnd3d4iImZmqqqq7u7vMzMzd3e7u///F7f0SAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzAzLzE0I/anSwAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAHjSURBVEiJlVZrY4IgFCUtrbYs23KVY5Q2RsT//30D4+XFV+eTxTncB4erCAVY7K53IXH/2S3CVYikIIwLDc7IIRmkZ9iSrQhnvfQ1huwn8LqbXwS7G7Cigz7r2V4HCYuth/hC1HGbH/0O86UiauVTjfGFIL5gMP+OOg5T+ELkhr9g0wRs8UpCCqU+YPsH/z6ejgNyvgIBmHLaaixE6hzBlWmyAQFL/RZxWqnf64pWEHbP3MuIbbo9qbAxCnkWEW23oDHKvrxc8N6zj9mVxk58squZNgp1V6d0fToLGCFzVzSHAvGFblCQKD4nhJm2tQRX9IACtUbSKFpi4QxnBX9IAMFc7lw9vU9kiBQI7oHgTT7qK7yVj1kggCm9y8etNpms5iNICRatrLjXEbjVWsFP0NZY1YBMDQLW8IlWvC1oDhVL20ZNu8KDi6E1Gvcygpv/4TnUc2cTe9K5bZywE88IsLfuzJfpoMw6wwpy5C6Q59Y4J3VNitCtbO6paYp6kVJ/U9MnVvZCzyGegCaPwWQ9eZDZol4dlRNnn9fGp21G0Br3E14QZNbudDQSg0QIYrCOMqCrXvV21zNVC0n3CfKy//NhXQYvd1b2fAdoLA+YuslHcb4cpDeIN+ebnCWP23kTh6v/wm3rjE22m34AAAAASUVORK5CYII="></span>' +
'                </div>' +
'            </div>' +
'            <div class="btn-line">' +
'                <span class="btn pre" href="#" on-click="prePic()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAMAAAAo0TYrAAAAA3NCSVQICAjb4U/gAAAAOVBMVEX///9aWlpSUlJSUlJSUlJKSkpSUlJSUlJSUlJKSkpSUlJKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkqFAFptAAAAE3RSTlMAEREiMzNEVWZ3iIiZqrvM3e7/drsrQAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMy8wMy8xNCP2p0sAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAAaUlEQVQYlW3PRxKAIAxA0VBEVGruf1ghUgya3fvMBACYcwIbh44T0atBX4jZNEli2joDUf9TxcrYd6lElI2aGETjTvTjXhPZ8WdbD2mG5XoA8bzWLCHPQL9l4aoBLQ9+7gQ40Al4jy28AVjhB8s5wRi2AAAAAElFTkSuQmCC"></span>' +
'                <span class="btn ok" href="#" on-click="submit()">完成</span>' +
'                <span class="btn cancel" href="#" on-click="cancel()">取消</span>' +
'                <span class="btn next" href="#" on-click="nextPic()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAMAAAAo0TYrAAAAA3NCSVQICAjb4U/gAAAAPFBMVEX///9ZWVlSUlJZWVlSUlJSUlJKSkpSUlJSUlJSUlJKSkpSUlJKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkqcLCF9AAAAFHRSTlMAEREiIjMzRFVmd4iImaq7zN3u//3tMD0AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDMvMDMvMTQj9qdLAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAGtJREFUGJV9j0kSgCAMBAOCiMqa//9VCMUSDubWXalMBgDgATYO3UKHR1yFyYXRT3EmEnIITSL8CBWriGoISSJNIQIJPWM8iYsvRMMv9gjVEvu97QGTWIWtUcPR2FbCd5bxDMsnLt+wjrALfLwCCEsyPE8bAAAAAElFTkSuQmCC"></span>' +
'            </div>' +
'        </div>';

                var dom = document.createElement('div');
                dom.id = 'mpopupForm';
                dom.innerHTML = html;
                document.body.appendChild(dom);

                var picChangerScope = function () {
                    var PicChanger = MugedaCard.picSelectForm = new AniObj({ fatherDom: '#mpopupForm' }),
                        picData = imageData,
                        maskFrameWidth = document.querySelectorAll('#mpopupFormFrame .image-frame')[0].offsetWidth,
                        maskFrameHeight = document.querySelectorAll('#mpopupFormFrame .image-frame')[0].offsetHeight,
                        maskLeft = document.querySelectorAll('#mpopupFormFrame .maskLeft')[0],
                        maskRight = document.querySelectorAll('#mpopupFormFrame .maskRight')[0],
                        maskTop = document.querySelectorAll('#mpopupFormFrame .maskTop')[0],
                        maskBottom = document.querySelectorAll('#mpopupFormFrame .maskBottom')[0],
                        maskMid = document.querySelectorAll('#mpopupFormFrame .maskMid')[0],
                        imgDom = document.querySelectorAll('#mpopupFormFrame div.mcontent .image')[0],
                        loadingImg = document.querySelector('#mpopupFormFrame div.mcontent #img_t');


                    var setPhyMask = function (top, right, bottom, left) {
                        top = Math.round(top);
                        right = Math.round(right);
                        bottom = Math.round(bottom);
                        left = Math.round(left)
                        maskTop.style.bottom = (maskFrameHeight - top) + 'px';
                        maskBottom.style.top = (bottom) + 'px';
                        maskLeft.style.right = (maskFrameWidth - left) + 'px';
                        maskLeft.style.top = (top) + 'px';
                        maskLeft.style.bottom = (maskFrameHeight - bottom) + 'px';
                        maskRight.style.left = (right) + 'px';
                        maskRight.style.top = (top) + 'px';
                        maskRight.style.bottom = (maskFrameHeight - bottom) + 'px';
                        maskMid.style.top = (top) + 'px';
                        maskMid.style.left = (left) + 'px';
                        maskMid.style.right = (maskFrameWidth - right) + 'px';
                        maskMid.style.bottom = (maskFrameHeight - bottom) + 'px';
                    }
                    setPhyMask(0, maskFrameWidth, maskFrameHeight, 0);

                    var maskData = { l: 0, t: 0, w: maskFrameWidth, h: maskFrameHeight, r: 1 };
                    var setMask = function (imgL, imgT, imgW, imgH, imgS, ratio, maskL, maskT, maskW, maskH) {
                        if (maskL == null) {
                            var maskSize = getMaskSizeInner(imgW * imgS, imgH * imgS, ratio);
                            maskW = maskSize[0], maskH = maskSize[1];
                            maskL = imgL + imgW * imgS / 2 - maskW / 2;
                            maskT = imgT + imgH * imgS / 2 - maskH / 2;
                            maskData.r = ratio;
                            maskData.imgL = imgL;
                            maskData.imgT = imgT;
                            maskData.imgS = imgS;
                            maskData.imgW = imgW * imgS;
                            maskData.imgH = imgH * imgS;
                        }

                        maskData.l = maskL;
                        maskData.t = maskT;
                        maskData.w = maskW;
                        maskData.h = maskH;

                        picData[PicChanger.currentId].clipLeft = Math.round((maskL - maskData.imgL) / maskData.imgS);
                        picData[PicChanger.currentId].clipTop = Math.round((maskT - maskData.imgT) / maskData.imgS);
                        picData[PicChanger.currentId].clipWidth = Math.round(maskW / maskData.imgS);
                        picData[PicChanger.currentId].clipHeight = Math.round(maskH / maskData.imgS);

                        setPhyMask(maskT, maskL + maskW, maskT + maskH, maskL);
                    };

                    var getMaskSize = function (w, h, r) {
                        var ir = h / w, iw, ih;
                        if (r > ir) {
                            iw = w;
                            ih = w * r;
                        }
                        else {
                            iw = h / r;
                            ih = h;
                        }
                        return [iw, ih];
                    };

                    var getMaskSizeInner = function (w, h, r) {
                        var ir = h / w, iw, ih;
                        if (r > ir) {
                            iw = h / r;
                            ih = h;
                        }
                        else {
                            iw = w;
                            ih = w * r;
                        }
                        return [iw, ih];
                    };

                    (function () {
                        var eventOn = false,
                            getPos = function (event) {
                                if (event.touches && event.touches.length) {
                                    return [event.touches[0].clientX, event.touches[0].clientY];
                                }
                                else {
                                    return [event.clientX, event.clientY];
                                }
                            },
                            dragTop = null, move = false;
                        startX = 0, startY = 0, startMask = null;
                        var touchStart = function (event) {
                            if (event.target.className != 'cornerinner' && event.target.className != 'maskMid') return;
                            event.preventDefault();
                            if (eventOn) return;
                            eventOn = true;
                            dragTop = event.target.parentElement.className.indexOf('top') > -1;
                            move = event.target.className.indexOf('maskMid') > -1;
                            var pos = getPos(event);
                            startX = pos[0], startY = pos[1];
                            startMask = { l: maskData.l, t: maskData.t, w: maskData.w, h: maskData.h };

                        }
                        var touchMove = function (event) {
                            if (!eventOn) return;
                            event.preventDefault();
                            var pos = getPos(event), x = pos[0] - startX, y = pos[1] - startY;
                            drag(x, y);
                        }
                        var touchEnd = function (event) {
                            if (!eventOn) return;
                            event.preventDefault();
                            eventOn = false;
                            //var pos = getPos(event), x = pos[0] - startX, y = pos[1] - startY;
                            //drag(x, y);
                        }
                        var drag = function (dx, dy) {
                            if (move) {
                                l = startMask.l + dx;
                                t = startMask.t + dy;
                                w = startMask.w;
                                h = startMask.h;
                                if (l < maskData.imgL) l = maskData.imgL;
                                if (t < maskData.imgT) t = maskData.imgT;
                                if (l + w > maskData.imgL + maskData.imgW) l = maskData.imgL + maskData.imgW - w;
                                if (t + h > maskData.imgT + maskData.imgH) t = maskData.imgT + maskData.imgH - h;
                            }
                            else {
                                if (dragTop) {
                                    var frameW = startMask.w - dx, frameH = startMask.h - dy;
                                    var aimSize = getMaskSize(frameW, frameH, maskData.r);
                                    var l = startMask.l + startMask.w - aimSize[0], t = startMask.t + startMask.h - aimSize[1], w = aimSize[0], h = aimSize[1];

                                    if (l < maskData.imgL) {
                                        var dw = maskData.imgL - l;
                                        w -= dw;
                                        l = maskData.imgL;
                                        t = t + dw * maskData.r;
                                        h -= dw * maskData.r
                                    }
                                    if (t < maskData.imgT) {
                                        var dh = maskData.imgT - t
                                        h -= dh;
                                        t = maskData.imgT;
                                        l = l + dh / maskData.r;
                                        w -= dh / maskData.r;
                                    }
                                    if (w < 30) {
                                        l -= (30 - w);
                                        w = 30
                                    }
                                    if (h < 30) {
                                        t -= (30 - h);
                                        h = 30
                                    }
                                }
                                else {
                                    var frameW = startMask.w + dx, frameH = startMask.h + dy;
                                    var aimSize = getMaskSize(frameW, frameH, maskData.r);
                                    var l = startMask.l, t = startMask.t, w = aimSize[0], h = aimSize[1];
                                    if (l + w > maskData.imgL + maskData.imgW) {
                                        var dw = (l + w) - (maskData.imgL + maskData.imgW);
                                        w -= dw;
                                        h -= dw * maskData.r
                                    }
                                    if (t + h > maskData.imgT + maskData.imgH) {
                                        var dh = (t + h) - (maskData.imgT + maskData.imgH);
                                        h -= dh;
                                        w -= dh / maskData.r;
                                    }
                                    if (w < 30) {
                                        //l -= (30 - w);
                                        w = 30
                                    }
                                    if (h < 30) {
                                        //t -= (30 - h);
                                        h = 30
                                    }
                                }
                            }



                            setMask(null, null, null, null, null, null, l, t, w, h);
                        }

                        var isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

                        if (isMobile) {
                            document.addEventListener('touchstart', touchStart);
                            document.addEventListener('touchmove', touchMove);
                            document.addEventListener('touchend', touchEnd);
                            document.addEventListener('touchcacel', function () {
                                eventOn = false;
                            });
                        }
                        else {
                            document.addEventListener('mousedown', touchStart);
                            document.addEventListener('mousemove', touchMove);
                            document.addEventListener('mouseup', touchEnd);
                        }
                    })();

                    PicChanger.createProperty('visible', function (val) {
                        document.querySelector('#mpopupForm').style.display = val ? 'block' : 'none';
                    }, true);
                    PicChanger.createProperty('imageUrl', function (val) {
                        var _ = document.querySelector('#mpopupForm .image');
                        var src = _.src;
                        _.style.display = 'none';
                        /*
                        _.style.height = '22px';
                        _.style.width = '22px';
                        _.src = 'i/loading.gif'
                        _.style.top = 90 + 'px';
                        _.style.left = 140 + 'px';
						_.style.border = "none";
                        */
                        loadingImg.style.display = 'block';

                        var img = new Image();
                        img.src = val;
                        img.onerror = function () {
                            // Error happened! Restore previous image. 
                            PicChanger.imageUrl = src;
                            if (typeof mucard != 'undefined' && mucard.reportStatus) {
                                mucard.reportStatus({
                                    status: 1,
                                    desc: "Failed to load the specified URL",
                                    value: val
                                });
                            }
                            loadingImg.style.display = 'none';
                            return;
                        }
                        img.onload = function () {
                            loadingImg.style.display = 'none';
                            _.src = val;
                            _.onload = function () {
                                _.style.display = 'block';
                            }
                            _.style.border = "1px solid #000";
                            var scale = 1, ratio = picData[PicChanger.currentId].height / picData[PicChanger.currentId].width;
                            var width0 = img.width, height0 = img.height;
                            var width = width0, height = height0;
                            var maskSize = getMaskSize(width, height, ratio);
                            var maskSizeW = maskSize[0], maskSizeH = maskSize[1];
                            var maskSizeW0 = maskSizeW, maskSizeH0 = maskSizeH;

                            var maxW = 292;
                            var maxH = 212;
                            var targetRatio = (maxH / maxW);
                            var sourceRatio = img.height / img.width;

                            // if (maskSizeW0 > maxW) {
                            if (sourceRatio < targetRatio) {
                                width = maxW;
                                height = width * sourceRatio;
                                scale = width / img.width;
                                // scale = maxW / maskSizeW0;
                                // width = width0 * scale;
                                // height = height0 * scale;
                                maskSize = getMaskSize(width, height, ratio);
                                maskSizeW = maskSize[0], maskSizeH = maskSize[1];
                            }
                                // if (maskSizeH > maxH) {
                            else {
                                height = maxH;
                                width = height / sourceRatio;
                                scale = height / img.height;
                                // scale = maxH / maskSizeH0;
                                // width = width0 * scale;
                                // height = height0 * scale;
                                maskSize = getMaskSize(width, height, ratio);
                                maskSizeW = maskSize[0], maskSizeH = maskSize[1];
                            }
                            var left = (maskFrameWidth - width) / 2;
                            var top = (maskFrameHeight - height) / 2;
                            _.style.left = (left - 1) + 'px';
                            _.style.top = (top - 1) + 'px';
                            _.style.height = height + 'px';
                            _.style.width = width + 'px';
                            setMask(left, top, img.width, img.height, scale, picData[PicChanger.currentId].height / picData[PicChanger.currentId].width, null, null, null, null);
                        }

                    }, null, true);
                    PicChanger.createProperty('imageName', function (val) {
                        document.querySelector('#mpopupForm .image-name').innerHTML = '点击右侧<span class="highlight">相机图标</span>可以更换图片；点击<span class="highlight">完成</span>确认或者跳过图像定制，并预览定制后的贺卡；点击<span class="highlight">取消</span>回到贺卡。';
                    }, null);

                    PicChanger.createProperty('currentId', function (val) {
                        PicChanger.imageUrl = picData[val].url || picData[val].defaultUrl;
                        PicChanger.imageName = picData[val].name;

                        var pre = document.querySelector('#mpopupForm .btn-line .pre');
                        pre.disabled = val > 0 ? false : true;
                        pre.style.opacity = pre.disabled ? 0.3 : 1;
                        pre.style.visibility = pre.disabled ? 'hidden' : 'visible';

                        var next = document.querySelector('#mpopupForm .btn-line .next');
                        next.disabled = val < picData.length - 1 ? false : true;
                        next.style.opacity = next.disabled ? 0.3 : 1;
                        next.style.visibility = next.disabled ? 'hidden' : 'visible';

                        // document.querySelector('#mpopupForm .btn-line .pre').style.visibility = val > 0 ? 'visible' : 'hidden';
                        // document.querySelector('#mpopupForm .btn-line .next').style.visibility = val < picData.length - 1 ? 'visible' : 'hidden';
                    }, null);

                    PicChanger.checkCompelete = function () {
                        var complete = true;
                        for (var i = 0, len = picData.length; i < len; i++) {
                            if (!picData[i].url) {
                                complete = false;
                                break;
                            }
                        }
                        complete = true;
                        document.querySelector('#mpopupForm .btn-line .ok').style.display = complete ? 'inline-block' : 'none';
                    }

                    PicChanger.prePic = function () {
                        var pre = document.querySelector('#mpopupForm .btn-line .pre');
                        if (!pre.disabled)
                            PicChanger.currentId--;
                    }
                    PicChanger.nextPic = function () {
                        var next = document.querySelector('#mpopupForm .btn-line .next');
                        if (!next.disabled)
                            PicChanger.currentId++;
                    }

                    PicChanger.changePic = function () {
                        var url = null;
                        if (typeof mucard != 'undefined' && mucard.useCustomImage) {
                            setTimeout(function () {
                                mucard.useCustomImage(function (imageData) {
                                    if (imageData.status == 0) {
                                        url = imageData.url;
                                        if (url) {
                                            PicChanger.imageUrl = url;
                                            picData[PicChanger.currentId].url = url;
                                            PicChanger.checkCompelete();
                                        }
                                    }
                                    else {
                                        alert('在获取图片数据时出错！错误信息：' + imageData.desc);
                                    }
                                }, {
                                    // 保留options
                                });
                            }, 500);
                        }
                        else {
                            var yes = confirm("由于浏览器的限制，您需要下载安装木疙瘩贺卡应用才能进行图片定制。您的朋友收到贺卡后不需要安装任何应用就可以观看贺卡。您需要现在安装贺卡应用吗？");
                            if (yes) {
                                var ua = navigator.userAgent.toLowerCase();
                                var isAndroid = ua.indexOf("android") > -1;
                                var androidVersion = parseFloat(ua.slice(ua.indexOf('android') + 8));

                                if (isAndroid && androidVersion < 3.0) {
                                    location.href = 'install.html'
                                }
                                else {
                                    window.open('install.html');
                                }
                            }
                            //url = prompt("Please enter image url", 'http://img2.cache.netease.com/ent/2008/9/24/200809242024100dbd2.jpg');
                        }
                        if (url) {
                            PicChanger.imageUrl = url;
                            picData[PicChanger.currentId].url = url;
                            PicChanger.checkCompelete();
                        }

                    }

                    PicChanger.submit = function () {
                        PicChanger.visible = false;
                        var b = customData.split('&');
                        for (var i = 0; i < picData.length; i++) {
                            if (picData[i].url) {
                                b.push(picData[i].id + '=' + JSON.stringify({ u: picData[i].url, l: picData[i].clipLeft, t: picData[i].clipTop, w: picData[i].clipWidth, h: picData[i].clipHeight }));
                            }
                        }
                        customData = b.join('&');
                        cb(customData);
                        evt.callback();
                    }

                    PicChanger.cancel = function () {
                        PicChanger.visible = false;
                    }

                    PicChanger.currentId = 0;
                    PicChanger.checkCompelete();
                }
                picChangerScope();
            }
            else {
                MugedaCard.picSelectForm.visible = true;
            }
        }
        else cb(customData);
    }
}

var finalizeCustomParameters = function (customData, evt) {
    customImage(customData, evt, function (customData, otherParam) {
        otherParam = otherParam || {};
        var encoded = encodeURIComponent(Base64.encode(decodeURIComponent(customData)));
        var search = window.location.search;
        if (search)
            search = search.substr(1);
        var params = search.split('&');
        var newparam = '';
        for (var i = params.length - 1; i >= 0; i--) {
            var pos = params[i].toLowerCase().indexOf('custom=');
            if (pos === 0) {
                params.splice(i, 1);
            }
            else if (otherParam.receiptCard && params[i].toLowerCase().indexOf('hash=') == 0) {
                params.splice(i, 1);
            }
            else
                newparam += ((newparam.length > 0) ? '&' : '') + params[i];
        }

        var sep = "";
        if (newparam) {
            sep = "&";
        }
        var urlsplit = window.location.href.split("?");
        var newurl = urlsplit[0] + "?" + newparam + sep + "custom=" + encoded;
        if (otherParam.receiptCard) {
            //var redirect = encodeURIComponent(newurl + '&customInvite=1');
            var redirect = encodeURIComponent(newurl);
            var isPublic = otherParam['public'];
            MugedaCard.makeRequest('http://weika.mugeda.com/card/invite_card.php/custom', 'GET', { 'redirect': redirect, 'public': isPublic ? 0 : 1, crid: gup('crid') }, true);
        }
        else window.open(newurl, '_self');
    });
};


var data = {};


var defineCustomParameters = function (scene, dic) {
    MugedaCard.data = data = {};
    for (var t = 0; t < dic.length; t++) {
        var item = dic[t],
            name = item.formName || ((new Date).getTime()) + '' + MugedaCard.sum++,
            des = item.formDescription,
            bind = item.mugedaObj,
            userUndefined = item.userUndefined;

        var d = data[name] = {
            des: des,
            userUndefined: userUndefined,
            obj: (data[name] ? data[name].obj : []) || []
        }
        for (var i = 0; i < bind.length; i++) {
            var objName = bind[i].name,
                type = bind[i].attribute;
            if (type == 'receipt') {
                d.type = type;
            }
            else if (type != 'data') {
                var nameList = objName.split('/'),
                    obj = { scene: scene };
                for (var j = 0; j < nameList.length; j++) {
                    if (obj.scene) {
                        obj = obj.scene.getObjectByName(nameList[j])
                    }
                    else {
                        throw ('getObjectByName error!');
                    }
                }
                if (obj) {
                    obj.cardRefParam = type
                    d.obj.push(obj);
                }
            }
        }

    }
    if (Mugeda.getMugedaObject().evt) {
        Mugeda.getMugedaObject().evt.stopLoad = true;
    }
    activateCustomParameters();
}

var activateCustomParameters = function () {
    var urltemp = window.location.href;
    var spliturl = urltemp.split("?");

    var clearAllImage = function () {
        for (var name in MugedaCard.data) {
            var item = MugedaCard.data[name];
            if (!item.handled && item.userUndefined) {
                item.userUndefined();
            }
        }
    }
    if(location.search.indexOf('&custom=') == -1 && window.mucard == null) clearAllImage();
    if (spliturl.length > 1 && spliturl[1]) {
        var params = spliturl[1].split('&');
        var waitLoadObjNum = 0;
        for (var i = 0; i < params.length; i++) {
            var paramtemp = params[i].split('=');
            if (paramtemp.length > 1 && paramtemp[0].toLowerCase() == "custom") {
                if (!paramtemp[1]) { clearAllImage(); break;}
                var value = Base64.decode(decodeURIComponent(paramtemp[1]));
                var params = value.split('&');
                var param = {};
                for (var i = 0; i < params.length; i++) {
                    var splittemp = params[i].split('=');
                    if (splittemp.length == 2) {
                        param[splittemp[0]] = splittemp[1];
                    }
                }
                for (name in param) {
					if(name[0]==='_') continue;
                    var ref = MugedaCard.data[name];
					if(!ref) continue;
                    ref.handled = true;
                    if (ref) {
                        ref.value = param[name];
                        for (var _i = 0; _i < ref.obj.length; _i++) {
                            var obj = ref.obj[_i];
                            if (obj.cardRefParam == 'image' || obj.cardRefParam == 'signature') {
                                waitLoadObjNum++;
                                (function () {
                                    var img = new Image(),
                                        aniObj = obj;
									var valObj;
									try{
										valObj = JSON.parse(param[name]);
									}
                                    catch(e){
                                        setTimeout(function () { throw ('error when parse card custom param: ' + encodeURIComponent(location.href)) });
                                        return;
									}
                                    img.src = valObj.u;
                                    //alert(valObj.u)

                                    img.onload = function () {
                                        var oImg = new Image();
                                        oImg.src = aniObj.src;
                                        oImg.onload = function () {

                                            var _dom = aniObj.dom,
                                                orw = oImg.width,
                                                orh = oImg.height,
                                                ow = aniObj.width,
                                                oh = aniObj.height,
                                                nrw = img.width,
                                                nrh = img.height;/*,
                                                nw = nrw / orw * ow,
                                                nh = nrh / orh * oh, paddingTop, paddingLeft;
                                            var w = ow, h = ow / nw * nh;
                                            if (h <= oh) {
                                                padingTop = (oh - h) / 2;
                                            }
                                            else {
                                                h = oh;
                                                w = oh / nh * nw;
                                                paddingLeft = (ow - w) / 2;
                                            }
                                            */

                                            var nrcw = valObj.w,
                                                nrch = valObj.h;
                                            var sx = ow / nrcw,
                                                sy = oh / nrch
                                            var w = nrw * sx,
                                                h = nrh * sy;
                                            var clipLeft = valObj.l * sx,
                                                clipTop = valObj.t * sy;


                                            var newDom = document.createElement('div');
                                            aniObj.dom.parentElement.replaceChild(newDom, aniObj.dom)
                                            aniObj.oriSrc = aniObj.src;
                                            newDom.className = _dom.className;
                                            newDom.style.cssText = _dom.style.cssText;
                                            if (obj.cardRefParam == 'image') {
                                                newDom.appendChild(_dom);
                                                _dom.setAttribute('style', null);
                                                _dom.className = '';
                                                _dom.style.width = w + 'px';
                                                _dom.style.height = h + 'px';
                                                _dom.style.clip = 'rect(' + clipTop + 'px ' + (clipLeft + nrcw * sx) + 'px ' + (clipTop + nrch * sy) + 'px ' + clipLeft + 'px)'
                                                _dom.style.position = 'absolute';
                                                _dom.style.marginLeft = (-clipLeft) + 'px';
                                                _dom.style.marginTop = (-clipTop) + 'px';
                                                aniObj.src = img.src;
                                            }
                                            else if (obj.cardRefParam == 'signature') {
                                                newDom.style.cssText += 'background-image: url(' + img.src + ');'
                                                        + 'background-size:' + w + 'px ' + h + 'px;'
                                                        + 'background-position: ' + (-clipLeft) + 'px ' + (-clipTop) + 'px;';
                                                /*
                                                Object.defineProperty(aniObj, 'src', {
                                                    get: function () { return aniObj.userParam.src },
                                                    set: function (value) {
                                                        aniObj.userParam.src = value;
                                                        aniObj.dom.style.backgroundImage =  "url(" + value + ")";
                                                    }
                                                });
                                                */
                                            }
                                            aniObj.dom = newDom;
                                            if (--waitLoadObjNum == 0) {
                                                if (Mugeda.getMugedaObject().evt) {
                                                    Mugeda.getMugedaObject().evt.goOnLoad();
                                                }
                                            }
                                        }
                                    }
                                    img.onerror = function () {
                                        if (--waitLoadObjNum == 0) Mugeda.getMugedaObject().evt.goOnLoad();
                                    }
                                })();
                            }
                            else {
                                obj[obj.cardRefParam] = param[name];
                            }
                        }

                    }
                }
                clearAllImage();
                break;
            }
        }
        
        if (Mugeda.getMugedaObject().evt) {
            if (waitLoadObjNum == 0) Mugeda.getMugedaObject().evt.goOnLoad();
        }
    }
    else {
        if (Mugeda.getMugedaObject().evt) {
            Mugeda.getMugedaObject().evt.goOnLoad();
        }
    }

    var lastPerson = gup('t');
    lastPerson = gup('t') || 0;

    
    var fireOpen = function () {
        if (!window.MugedaTracker) return setTimeout(fireOpen, 1000);
        MugedaTracker.fireEvent({
            category: "微卡",
            action: "打开",
            label: 'f=' + lastPerson + '&i=' + AniObj.getMyGaTrackId() + '&in=' + AniObj.envir.getEnvirName() + '&t=' + new Date().getTime(),
            value: 0
        });
    }
    fireOpen();
    
    

}

AniObj.envir = (function(){
    var exports = {};
    var ua = navigator.userAgent.toLowerCase();
    exports.isWeixin = function(){
        return ua.match(/MicroMessenger/i) == "micromessenger";
    };
    exports.isApp1 = function(){
        return window.mucard != null
    };
    exports.isApp2 = function(){
        return ua.indexOf('mugedacardandroidwebview_v1.5') > -1;
    };
    exports.getEnvirName = function () {
        if (exports.isWeixin()) return 'weixin';
        if (exports.isApp1()) return 'app1';
        if (exports.isApp2()) return 'app2';
        return 'other';
    };
    return exports;
})();

var prevFormHolder = null;
var updateForm = function () {
    var formDiv = document.querySelectorAll('.popupForm');
    if (formDiv && formDiv[0] && prevFormHolder != formDiv[0]) {
        prevFormHolder = formDiv[0];

        formDiv[0].style.position = "absolute";

        var forms = document.querySelectorAll('form');
        if (forms) {
            for (name in data) {
                var d = data[name],
                    des = d.des,
                    val = d.value,
                    objId = "_mcp_" + escape(des || ''),
                    dom = document.getElementById(objId);
                if (dom && val != undefined) {
                    dom.value = val;
                }

            }
        }
    }
    setTimeout(updateForm, 1000);
}
updateForm();

function audioPack(url) {
    this.url = url;
    this.audioObj = undefined;
    var t = this;
    Object.defineProperty(this, "loop", {
        set: function (e) {
            t.audioLoop = e, t.audioObj && (t.audioObj.loop = e)
        }, get: function () {
            return 1 == t.audioLoop
        }
    })
};

audioPack.prototype.cacheAudio = function (cb) {
    this.createAudioObject();
    this.cb = cb;
    if (this.loadStatus == 0) {
        this.audioObj.load();
        this.loadStatus == 1;
    }
    else if (this.loadStatus == 2) {
        if (this.cb) this.cb();
    }
}

audioPack.prototype.play = function () {
    this.createAudioObject();
    if (2 == this.loadStatus) {
        this.audioObj.play();
    }
    else {
        var _ = this;
        var t = function () {
            _.audioObj.play();
            _.audioObj.removeEventListener("canplay", t)
        };
        if (this.loadStatus == 0) {
            this.audioObj.load();
            this.audioObj.addEventListener("canplay", function () {
                t();
            });
        }
    }
    setTimeout(function () {
        _.pause();
    }, 1 * 90 * 1000);
}

audioPack.prototype.pause = function () {
    this.audioObj.pause();
}

audioPack.prototype.createAudioObject = function () {
    if (!this.audioObj) {
        this.audioObj = new Audio();
        this.audioObj.preload = 'none';
        this.audioObj.loop = 1 == this.audioLoop;
    }
    var e = this;
    this.audioObj.addEventListener("canplay", function () {
        e.loadStatus = 2;
        if (e.cb) { e.cb() }
    });
    if (-1 == this.audioObj.src.indexOf(this.url)) {
        this.audioObj.src = this.url;
        this.loadStatus = 0;
    }
}

audioPack.prototype.cacheAudio = function (cb) {
    this.createAudioObject();
    if (this.loadStatus == 0) {
        this.audioObj.load();
        this.loadStatus = 1;

    }
    if (cb) {
        this.cb = cb;
    }
}

var loadAudio = function (url, options) {
    options = options || {};
    options.cache = false;
    options.callback = options.callback || function () { };

    var ap = new audioPack(url);
    options.callback(ap);
    return ap;
}

var weiParam = {};
if(window._mrmcp){
	weiParam = {
		'img_url': _mrmcp['thumb'],
		'title': _mrmcp['title'],
		'desc': _mrmcp['description']
	};
}

defineWechatParameters = function (param) {
    for (item in param) {
        weiParam[item] = param[item];
    }
    weiParam['success_share_callback_report'] = function (type) {
        if (window.rpWX) {
            window.rpWX('share', type);
        }
        (weiParam['success_share_callback'] || function () { })(type);
    }
    weiParam.defined = true;
    try {
        bindWeiEvent()
    } catch (ex) { }

    if (typeof mucard != 'undefined' && mucard.share) {
        var imgUrl = weiParam['img_url'] || 'http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg';
        var desc = weiParam['desc'] || '请定义贺卡描述';
        var title = weiParam['title'] || '木疙瘩贺卡';
        mucard.share(title, desc, imgUrl);
    }

}

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    if (weiParam.defined) bindWeiEvent();
});

function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

var bindWeiEvent = function () {   
    function generatateUrl() {
        if (location.href.indexOf('preview_css3.html') > -1) {
            return location.href.substr(0, location.href.length - location.search.length) + '?custom=' + gup('custom') + '&id=' + gup('id') + '&audio=' + gup('audio');
        }
        else {
            return location.href.substr(0, location.href.length - location.search.length) + '?t=' + AniObj.getMyGaTrackId() + '&custom=' + gup('custom') + '&crid=' + gup('crid') + (gup('audio') ? '&audio=' + gup('audio') : '') + (gup('hash') ? '&hash=' + gup('hash') : '') + (gup('s') ? '&s=' + (parseInt(gup('s')) + 1) : '&s=1');
        }
    }
    //转发给好友事件
    if (typeof WeixinJSBridge == 'undefined') throw ('I cannot find WeixinJSBridge');
    WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
            "appid": "",
            "img_url": weiParam['img_url'] || 'http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg',
            "img_width": weiParam['img_width'] || 128,
            "img_height": weiParam['img_height'] || 128,
            "link": (typeof weiParam['url_callback'] == 'function' ? weiParam['url_callback']() : generatateUrl()),
            "desc": weiParam['fdesc'] || weiParam['desc'] || '请定义贺卡描述',
            "title": weiParam['ftitle'] || weiParam['title'] || '木疙瘩贺卡'
        }, function (resp) {
            if (resp.err_msg == 'send_app_msg:confirm' || resp.err_msg == 'send_app_msg:ok') {
                (weiParam['success_share_callback_report'] || function () { })('send');
                MugedaTracker.fireEvent({
                    category: "微卡",
                    action: "转发",
                    label: 'i=' + AniObj.getMyGaTrackId() + '&t=' + new Date().getTime(),
                    value: 0
                });
            }
        });
    });

    //分享到朋友圈事件			
    WeixinJSBridge.on('menu:share:timeline', function (argv) {
        WeixinJSBridge.invoke('shareTimeline', {
            "appid": "",
            "img_url": weiParam['img_url'] || 'http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg',
            "img_width": weiParam['img_width'] || 128,
            "img_height": weiParam['img_height'] || 128,
            "link": (typeof weiParam['url_callback'] == 'function' ? weiParam['url_callback']() : generatateUrl()),
            "desc": weiParam['fsdesc'] || weiParam['desc'] || '请定义贺卡描述',
            "title": weiParam['fstitle'] || weiParam['title'] || '木疙瘩贺卡'
        }, function (resp) {
            if (resp.err_msg == 'share_timeline:confirm' || resp.err_msg == 'share_timeline:ok') {
                (weiParam['success_share_callback_report'] || function () { })('share');
                MugedaTracker.fireEvent({
                    category: "微卡",
                    action: "分享",
                    label: 'i=' + AniObj.getMyGaTrackId() + '&t=' + new Date().getTime(),
                    value: 0
                });
            }
        });
    });
    if (weiParam.binded) return;
    weiParam.binded = true;
}

window.MugedaCard = {};
MugedaCard.finalizeCustomParameters = finalizeCustomParameters;
MugedaCard.defineCustomParameters = defineCustomParameters;
MugedaCard.defineWechatParameters = defineWechatParameters;
MugedaCard.data = data;
MugedaCard.sum = 0;

MugedaCard.MugedaUrl = function (url) {
    var _fields = {
        'Username': 4,
        'Password': 5,
        'Port': 7,
        'Protocol': 2,
        'Host': 6,
        'Pathname': 8,
        'URL': 0,
        'Querystring': 9,
        'Fragment': 10
    };
    var _regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
    var obj = {};
    var _values = {};

    var _makeGetter = function (field) {
        return function () {
            return _values[field];
        }
    };

    for (var f in _fields) {
        _values[f] = '';
        obj['get' + f] = _makeGetter(f);
    }
    var r = _regex.exec(url);
    if (r) {
        for (var f in _fields) {
            if (typeof r[_fields[f]] != 'undefined') {
                _values[f] = r[_fields[f]];
            }
        }
    }

    var sp = _values['Querystring'].split('&');
    var o = {};
    for (var i = 0; i < sp.length; i++) {
        var sp2 = sp[i].split('=');
        if (sp2.length == 2) {
            o[sp2[0]] = sp2[1];
        }
    }

    obj.getQueryObj = function () {
        return o;
    };

    obj.getQuerystring = function () {
        var str = [];
        for (var key in o) {
            str.push(key + '=' + o[key]);
        }
        return str.join('&');
    };

    obj.setFragment = function(val){
        _values['Fragment'] = val;
    };

    obj.getURL = function () {
        var str = '';
        if (_values['Protocol']) str += _values['Protocol'] + '://';
        if (_values['Username'] || _values['Username']) str += (_values['Username'] + ':' + _values['Password'] + '@');
        if (_values['Host']) str += (_values['Host']);
        if (_values['Port']) str += (':' + _values['Port']);
        if (_values['Pathname']) str += (_values['Pathname']);
        if (obj.getQuerystring()) str += ('?' + obj.getQuerystring());
        if (_values['Fragment']) str += ('#' + _values['Fragment']);
        return str;
    };
    return obj;
};
MugedaCard.MugedaUrl.current = new MugedaCard.MugedaUrl(location.href);

MugedaCard.makeRequest = function (url, method, data, rediect, callback) {
    if (rediect) {
        var form = document.createElement('form');
        form.action = url;
        form.method = method;
        for (var name in (data || {})) {
            var ipt = document.createElement('input');
            ipt.type = 'hidden';
            ipt.name = name;
            ipt.value = data[name];
            form.appendChild(ipt);
        }
        form.submit();
    }
    else {
        var query = [];
        for (item in data) query.push(item + '=' + data[item]);
        query = query.join('&');

        var xhr = new window.XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = null;
                //window.loadAjax.left = -1000;
                clearTimeout(abortTimeout);
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    var result = xhr.responseText;
                    try {
                        callback(null, JSON.parse(result));
                    }
                    catch (e) {
                        //alert('加载失败');
                        callback(e, null);
                    }
                }
                else {
                    callback('err', null);
                    //alert('加载失败');
                }
            }
            else {
                //console.log(xhr.readyState);
                //window.loadAjax.left = -1000;
            }
        }
        xhr.open(method, url + (method.toLowerCase() == 'get' ? '?' + query : ''), true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var abortTimeout = setTimeout(function () {
            xhr.onreadystatechange = null;
            xhr.abort();
        }, 10 * 1000);
        xhr.send((method.toLowerCase() == 'post' ? query : null));
    }
}

MugedaCard.showAudioControl = function (scene, audioName, isTurnOnAudioHidden) {
    var audio = scene.getObjectByName(audioName);
    if (audio.src) {
        var src = audio.src;
        var play = audio.play;
        audio.play = function () {
            //audio.currentTime = 0;
            audio.muted = false;
            play.call(audio);
            setAudioState('load');
            setTimeout(function () {
                if (audioStatus == 'load') {
                    setAudioState('stop');
                }
            }, 3000);

            //if (parseInt(audio.readyState) > 0 || audio.weixinPlayCalled) setAudioState('load');
            audio._playing = true;
            //alert(audio.readyState)
        }

        //audio.addEventListener('loadedmetadata', function () {
        //    alert(audio.currentTime)
        //})
        var pause = audio.pause;
        audio.pause = function () {
            audio._playing = false;
            audio.muted = true;
            pause.call(audio);
            //alert(1)
            //audio.currentTime = audio.duration;
            //setTimeout(function(){audio.src = '';},0);
        }



        var getImageObj = function (w, h, src, realSrc) {
            var obj = new MugedaCss3.aObject({
                "guid": Mugeda.guidGen(),
                "type": 2005,
                "param": {
                    "imageSrc": src || "",
                    "rawWidth": w || 32,
                    "rawHeight": h || 25,
                    "left": 0,
                    "right": w,
                    "top": 0,
                    "bottom": h,
                    "scaleX": 1,
                    "scaleY": 1,
                    "rotate": 0,
                    "lineWidth": 1,
                    "alpha": 1,
                    "width": w,
                    "height": h
                }
            });
            scene.appendChild(obj);
            obj.width = w;
            obj.height = h;
            obj.top = -80;
            obj.left = 275;
            return obj;
        }
        /*
        var audioFlag = getImageObj(32, 25, "close_button.png");
        audioFlag.left = 275;
       
        audioFlag.dom.addEventListener('load', function () {
            if (!audioFlag.setSrc) {
                audioFlag.setSrc = true;
                audioFlag.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAYAAABQDyyRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUVGQTVBMzA5QzlFMTFFM0JCMEJDNTdDMTc3Q0Q3NzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUVGQTVBMzE5QzlFMTFFM0JCMEJDNTdDMTc3Q0Q3NzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRUZBNUEyRTlDOUUxMUUzQkIwQkM1N0MxNzdDRDc3NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRUZBNUEyRjlDOUUxMUUzQkIwQkM1N0MxNzdDRDc3NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu3FsY4AAAJ4SURBVHjaYvz//z/DQAImhgEGLDAGKCT+/PmD6UImJgZmZmYUsQ8fPjDw8PAwsLCwUO4CkMUgfPr0aQZFRUUMXF1dDVfz4MEDBm9vb4bS0lL3L1++LAWKhcPkyMVwxsGDB7E6MCkpCSz/6NEjBhkZGSZzc/OcT58+ff8PAZ+AWIwSBzAhBzU2ICAgwPDu3TsGOzs7BnFx8Yzt27f38PLyckClWYGYh6aJ8N69ewyOjo4gh6Tu3LmzR1BQkB1J+h8UU54GDh8+jFONurp63IsXLz7/xwRfv3//rvDmzRvKowAlawBTN9CnnPz8/DyGhoYxe/funQQMfqxB/f79e8br169Tng1hQFJSUmnjxo29SkpKesBsyQTMblLc3NxsuAxgZ2f/D0on1HKAvImJSZOpqWkAsQYICQmBMbUSocq/f//UB7IoZh7ouuA/FI+cyogJSxZkHFAH3Lp168fXr1/pXx1DwQNgoXLC1tb2h66uLhewHGDX1tYWraqqkqOZC9CKYlCIyAKxARDrAbE/EC+qrKx88B87+AoshhUuXrxIdlGMHgKgiuUxFIPAVSD+3d7ezgoEjI2NjRgh8evXL8bPnz/TtDICVbm+QLyipaXlMVoIfPvx44cCsD6gvEGCywGhoaEMLi4uoLogEIhX9/X1PUVywG8glqdKiwiXA8rKyhiAVS6DpqYmqBESAsRrenp6nv/8+fP/48eP1wP1slHFAYcOHcLqABEREQZ7e3tQcwzEBTkCVFF1AWvLDD4+Pm5g5cWwf/9+yhMhsMoF+RLDAb9//wa3ijg4OEDyP4BCW4AaDwFD4JOYmNifV69eMXz79o3sNAgQYACAkb5gdXYKCQAAAABJRU5ErkJggg==";
            }
            else {
                audioFlag.top = 8;
                audioFlag.dom.style.cssText += 'position: absolute; left:0; top: 0';
                if (audioStatus) setAudioState(audioStatus);
            }
        });
        */

        var audioOff = getImageObj(36, 22, "close_button.png");
        //audioOff.left = 292;

        audioOff.dom.addEventListener('load', function () {
            if (!audioOff.setSrc) {
                audioOff.setSrc = true;
                //audioOff.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAZCAYAAADuWXTMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZEMUYzMzU5QzlFMTFFMzk3NTk5MkU4RDEwQjUxRUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZEMUYzMzY5QzlFMTFFMzk3NTk5MkU4RDEwQjUxRUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRkQxRjMzMzlDOUUxMUUzOTc1OTkyRThEMTBCNTFFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRkQxRjMzNDlDOUUxMUUzOTc1OTkyRThEMTBCNTFFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pskr3tcAAAO4SURBVHjaxFRfTFNnFD/3X0t7b1oqVCsloJE/JitUsmIcRQXEEPXBGHXRh80l02p0Dy7RECTERBcfpk5E7QYjISY+TCCgiWh4YMNIBSMYoAQoF9SCSENaVta7Yltuv323YEt51Ied5OSee87vd8+f+52PQAjBpwoJnyH/H5le7aipqQGPx6OurKz8XiaT9TU1NT212WxAkiRUVFSAVquNgaWBfdSOjg7JlVpcUnIDLcl8eXl5/kfs8NhYHB7+np6GgYEBEAQhsa6hQQkEYVyj0z20vXjhldgLCDn2FRWpMnDm8Z4eCC8uxshZej2Tlpa21RcK8e8HB19WZ2ffqFcqnW2pqf4piwUJbW3oQ3f3TyN6PcycPw+h2dkYGcsXSSkpv41eu4bebNiAxnAn41hHl9WOdcJsFvjNm79cTZam7Snw+dgP586hgNMJ6mPHYPDgwavfAHxXRdOv/lEoRL/NxuJYM8bqcFuxgV06cSKxJzl5qB9nsJ05I0h9vuL5P0AmowoJ4n4vRYlS9gGpom3bakIuV6zsherqb3mCQHcBXKWlpd3hpSlPN5hMp/oAhAm5HL07fRoNKZVoiOPeBycnE6Nle+z2fBIbgwCdz+12pw+h8EJ7u66I53+VAbCPcnOn1t65E1YYDCAKwlrR612/8oQxkrEI4A7K5V73vXswefgwGZqfh9sAv9fRtB0DSFIuB1woAaIYbZqk163rD2HDBLB979xcuv/4cZL0+eA1w/xYC3BLo9GwMDUF//b1Ac1xc1Ry8myUrMjOfsBoNM4cgNxLgrCbZhhIunCh/6laXY3j6q1GY5Lv+nUI+v2gMBqfUBznjpJFrdbVm55+BZcUxj1QCfn5MM+yz7xut66MIPbvaW3dNH3zJsho2sNs3HhZxFVFZW9xMSg5bkvn0aOucZUKDS8djBB+zi3baDQnJzxsMh14s3MnBFacb0n0GVlZv0R+EM+jrsLCR50qVe9jhpkd37ULeWtr0cuurnZrZia8O3QIgm/fxpGNFElaLRbLn6fOnj2pTUkBLiEh7fLFi0+WN2vx6yNHvkrAQIfdDigcjpHxNJXYvwVr5hqNRvqYqqik5OdlIqqvr78SSYGPpYPn41dyZmYGmpubI7tstVol2A6DwfAXz/O+xsbGuwwWyUlRFDgcjnjyypeWlhYJl4H1B6z78/Ly6LKysuhwR0ZG4vB0VVVVNBgIBMBsNk/gQJ0oikFMjvgKCgoimVmWjbuyCCkY/en4tqBpOu6KIlau4Cr5T4ABAI10DuM5R4uCAAAAAElFTkSuQmCC";
                audioOff.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQxQjlEMkZBMzc0MTFFM0E3NEI4OTcyREFGRTI1QUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQxQjlEMzBBMzc0MTFFM0E3NEI4OTcyREFGRTI1QUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDFCOUQyREEzNzQxMUUzQTc0Qjg5NzJEQUZFMjVBRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDFCOUQyRUEzNzQxMUUzQTc0Qjg5NzJEQUZFMjVBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvx6Om4AAASDSURBVHjazFZ/SFtXFD4v5uWHUZfGH5k2plZni40JiXMJOusPlK5GXXXTLXSiTnG1rBQZKEREKCrYIUr1j41SWlhXHK6bMhGF0daxdVhZlQ1di1rXGLRuJDqfiTE2yd151konCnuVlh348l7evffxve+c+91DEULg/xS86Oho2I76+vqtCRaLBXJzc6G2tvYtp9N5DR+9/9JZlpeXA6vc7OwsKBQKnsFgOMMwjIs8CQYRxo6/CPB2IiSVSmFxcRFSU1NBLpdXDQwMtAYGBoo2h2lEwEtVKD8/HzQaDWi12kqbzbZK/h1ORJRUKISKTSXVWi1ERESkoIpjPkL6KsrKJMdTUiAnPX0De1aot7cX3G53yeDgYFtwcLB4+/ja2trGlXpaiCIRzM/P5w7dvavFZ7lFpaVNS04nsLNcHg8nMfhbN3w+YFrEPp/PDws7v6+vrwPTtWNqlpaWKPwcnoOQIvz7SbVafXN8ePh176lTYDeZ4JjJVBWand3nunXrphiV4hzh4eHRIyMjPZieBwsLC384HA432T2cdrs9CpfFHcvM7Geqq4lVJCL3KYoZBli+A+C5r1CQeb1+6E+jUcQ0NnJKGRsH8vLyviT/PZ7U0L59kY1C4Z05iiKOwkLy+/nz/WqpNOMowHc/A5BfEVM6XYetvZ3HtYZewzQd5qrq12Vlke+53fE/SSRuy7lz67G1tfFhev1DlG5ZTlHAw6JfGRv7kC+XGzgZI8LveXZiltdrwnIVtjgc339z794sFqPyUkDA1RaAYk9Ojie8vR18aA9r09NHuRIim+AU9pmZGBfAX+MAP1htthXS1QWBAwNv9gJMf67X/xZcXLzxpR67XcaV0POFTDYjxN8MPv+wrLOTdpw8CdMuV38DwNkZn4+B0VF4zLpoWJiNMyHc8hRXPiKNpltM06Te4yk+MTFxiGRnLw8pFGftfn6Tb/D5+1cuXGB9yiGMibnNmdDk5OQaHpycCD3w+X78JTT0Uhhye1UiEbh1uql1gUD8ttdbknTx4sFHPT0QpFJdWR0ZGebyXlaZWMRHOp1Oq1ar/T0ej1ClUoXW1dUpd1mzilAJaNqSkZT08fXExE4vOjszNweO9XUGC1kiVCr9BLGxo+iymeKoqL8DL18GripFIrQIDeIE4guz2fxwNx9CA2WNUVNgMt1eYBjftzU1VxspqqYjIGB4wWwmzPg4udbc/MEguvSN0lLOxrg92M1hRHQ1NDRYdiKE59ZBmqY1/iJRS0ll5ZlDBgNbiPRn3d2D7ISJqakbxwsK+O+ePg3vVFTsmdDTFiMP8VVTU5N1G6FVPFyjsEVhlRVIZTLYr1TSISEhnewgkp1NTk6OiTtyBOLV6g3smVBRURFkZWUJ8LaANeW2tra5Zwg9RhwICgp6dskriOb09PQrRqNRu/19eyaE7Sq4XC6Ii4tjm7JCxPXW1tZH2JIQq9XagwsF/v7+IJFIICEhAXAz8BDBrIOgUiDEYwNTuoU9E2JfmpaWxravG5bD9myIT7EtqUJlJImJifCiWth/BBgAGnzh/Lti8S4AAAAASUVORK5CYII=";
            }
            else {
                audioOff.top = 8;
                audioOff.dom.style.cssText += 'position: absolute; left:0; top: 0';
                audioOff.dom.setAttribute('data-audio-icon', 1);
                if (audioStatus) setAudioState(audioStatus);
            }
        });

        //var audioOn = getImageObj(15, 25, "close_button.png");
        //audioOn.left = 292;
        var audioOn = getImageObj(36, 22, "close_button.png");

        audioOn.dom.addEventListener('load', function () {
            if (!audioOn.setSrc) {
                audioOn.setSrc = true;
                //audioOn.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAZCAYAAADuWXTMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzJGODVCRDM5QzlGMTFFM0JENjRDMEU4MTlENDNBMTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzJGODVCRDQ5QzlGMTFFM0JENjRDMEU4MTlENDNBMTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MkY4NUJEMTlDOUYxMUUzQkQ2NEMwRTgxOUQ0M0ExMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MkY4NUJEMjlDOUYxMUUzQkQ2NEMwRTgxOUQ0M0ExMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvMHQo0AAAMJSURBVHjaxFRbSJNhGP52FDZoLU8dbIQ5kHLahrNytkAvdrkb8SovohhdBHYnIiIU5E0H8WKiWBCKgfPACJpdWAQNxlyJgYdp4ZjDw3LCcuqOruf9c+bf8qYueuHd/+/5nuf9vu89/IJ0Os3+1oTsH+z/icW/A11dXSwUCilaW1tvSaXSjzab7b3T6WRCoZC1tLSw/Pz8X2RKWMYnJiYIKqqtrX2a/mnh5uZmfYY7NzfH47NwOMymp6dZJBI53tPTIwPnSl5e3rjL5fpO6u3tba9OpztGYq/XyxeXlpZKVCrVZZC+BINBj16v14B3r7i42Lm2thajAGNjYw9IPD8/zxfDLhYUFPQuLS3tEdHn873Kzc09B/yxxWJZICyRSIQMBsOpqampLLEKft9oNH7a3d1NEbm9vd0M7LpcLncgaJSw/v7+2x6Phy9uaGigADr48+7u7hUizs7O2iUSyQlgT5B9DpuZmXkJnC+OxWKspqaGSmbB07O3x51+A0FPA7tpNps/E7C8vOwOBAICnph+7HY77W4oLCx8vbm5ydVoYGCgAti1qqqqD/tl88Hlh8Vch1VWVjKZTLYRjUa3kskklwiNRiPBYwsnSRxqKFFWe4LARcLOUoVCQVAMHiQygnIcZDwCj2aJ3W43Q6aVdXV1RWhJlkqlFiYnJ1ewpECDUOIYSuiHx3li2rGzs1OIsuiampouELi+vm4bGRmh859HwooI8/v9rp2dHf4gYJGhLNrBwUEuqyB86+vrOykWixXl5eXP4vE4wanGxkY9TpPVJGfUanVmENIdHR03SkpKCDc5HI4AYej9Nzk5OYKsOsMqMG5WtOLbOzAcn7CzbW1t4/vxkvX19Vf/OBhKpZIm6RJcjXfiKDCSjzInwRUeCgQCbp6zxKurq2x4eJibZavVSmJjWVnZu8XFxa2hoaEXyAfVm4lEomzx4T+jo6PEowvfpVxqtVqxyWRiR30MxLjbwSL1OUbvKxZ6Ues4xBxWXV3N7byfjwMT0OJB0XEvlIj3iaL7HmU/BBgAPAoySNX4HgUAAAAASUVORK5CYII=";
                audioOn.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCNkFBMzBBMzc0MTFFMzk4NzRENEEwRUIxQjUzN0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCNkFBMzFBMzc0MTFFMzk4NzRENEEwRUIxQjUzN0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREI2QUEyRUEzNzQxMUUzOTg3NEQ0QTBFQjFCNTM3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREI2QUEyRkEzNzQxMUUzOTg3NEQ0QTBFQjFCNTM3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt3X9zcAAAP1SURBVHjazFZZSFtZGD5JTDSLa7TimLaOZdwNURRH3FuhjAs6qDMg0YIiVGgt+CAIKiIKZer41AffiqHFSgsVClUQX4TU0bFYHAaKQce4JOLGRE1icLn9/lstrVTaXKL0h+/ee8659/Dd7/ybiOM49j2ZODIykp1GS0vLxxfMZjMrKipiTU1NN+12+xNM/X7hLGtqahgpt7i4yDQajTgtLe3O9va2k/tg28AlWj8PiL9EKCAggG1tbbHs7GwWGhp6e2hoqNvX19fneFkKqC5UodLSUqbVaplOp6vb2NhwcJ+bHYgICgpitbW1/F8lJCSw8PDwDKg4jfHL6upqZWJiIktOTvaMQoODg8zlclUPDw/3qNVq+en1vb09/i4Sifi7l5eXbGVlRT81NaXDsKisrKxzZ2fn47ogw6YsMDBQ7u/vr0pKStIvLy//z33Z7BaL5UcoJNbr9ZUY/9vR0XGLiMTExLwGMXrH1djYeD06OtpthXgLCwuLnJycfIHjmVtdXf1vd3fXxZ1t9s3NzQj8fWJeXt4IlOQODw+tOOafsVVtfX29mV4aGxt7FhcXJ4jQ1eLi4sfctxvvQ/juCvBna2urhSaNRuNDkIxSqVQD+ClufX3dYjAYooUQulFYWPi3u4RCQkKYQqFIxv2VyWSi+Y309PR47Hevt7d3F6pxs7OzvwlxaokQn6OUEBUV9RZKGEdHRx2YUldVVZFyMxMTExaxWMxAVuO2LwPcMdyy6elp5nA4jvD4zmq1EiFFVlZWEIJjwWaz7RznswAhhATZ/Pz8yeM+IpOPbz8/P5tMJjuUSqX8+OjoyElKuVXLjkPe7YQBf6HoZCDwQ2pqKilxMDMzYwIJZXx8fDB8iLK91e3iShc43x4Kp1sf+vj4sIODAwUiND8zM5P8cKS9vd2EpBlTUlKiwXHaxsfH/xGi/k/AAyTDEaR8Y2Vl5VRXV5f5a1GGo5CkpKTUQQV+cmBg4BfaLCcnx0BjZO2xjIwMkZCwJ5UuA5T2tUAJYGhubl44ixASKEWTtry8/K+1tTWur6/vAfyGyeXy6yDCM2xoaKiizQVl6lNG8hcA/W1tbeazSgcIaEHgPlS9i5LBJBJJeH9//xt6YW5ubhTFVeIpQictRjHwtLOzc+kUIQf8JAIRTcrKKLJR6aXIOQ9pEWQXkaOuoY8ikp4hVFFRwfLz82V4/BV41tPTs/IJoX3gKkL800/8ga7c3NxHBQUFupNJRKBnCKFdZU6nk8XGxlJTVg487+7utlIhXVpaeoEPZSgbTKlU8j0PjkcMqCmDBAcHM29vb0Y+RfAIIdoU0ULtKx/h1LMBf6Dfvg1llIgudl4t7HsBBgCzULCMcQhmvwAAAABJRU5ErkJggg==";
            }
            else {
                audioOn.top = 8;
                audioOn.dom.style.cssText += 'position: absolute; left:0; top: 0';
                audioOn.dom.setAttribute('data-audio-icon', 1);
                if (audioStatus) setAudioState(audioStatus);
            }
        });

        //var audioLoad = getImageObj(20, 20, "close_button.png");
        //audioLoad.left = 292;
        var audioLoad = getImageObj(36, 22, "close_button.png");

        audioLoad.dom.addEventListener('load', function () {
            if (!audioLoad.setSrc) {
                audioLoad.setSrc = true;
                //audioLoad.src = "data:image/gif;base64,R0lGODlhFAAUALMIAPh2AP+TMsZiALlcAKNOAOp4ANVqAP+PFv///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAIACwAAAAAFAAUAAAEUxDJSau9iBDMtebTMEjehgTBJYqkiaLWOlZvGs8WDO6UIPCHw8TnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItWyuiUJB4s2AxmWxGg9bl6YQtl0cAACH5BAUKAAgALAEAAQASABIAAAROEMkpx6A4W5upENUmEQT2feFIltMJYivbvhnZ3Z1h4FMQIDodz+cL7nDEn5CH8DGZhcLtcMBEoxkqlXKVIgAAibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkphaA4W5upMdUmDQP2feFIltMJYivbvhnZ3V1R4BNBIDodz+cL7nDEn5CH8DGZAMAtEMBEoxkqlXKVIg4HibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpjaE4W5tpKdUmCQL2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8ONQMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpS6E4W5spANUmGQb2feFIltMJYivbvhnZ3d1x4JMgIDodz+cL7nDEn5CH8DGZgcBtMMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmFQX2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZBMJNIMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpz6E4W5tpCNUmAQD2feFIltMJYivbvhnZ3R1B4FNRIDodz+cL7nDEn5CH8DGZg8HNYMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAkKAAgALAEAAQASABIAAAROEMkpQ6A4W5spIdUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZAsGtUMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IADs=";
                audioLoad.src = "data:image/gif;base64,R0lGODlhJAAWAMQfAFhYWPz8/HJycrS0tPn5+e7u7rq6upaWloqKiuHh4a+vr9ra2unp6fT09Kqqqv+TMqNOALlcAOp4APh2AMZiANVqAP+PFvf398/Pz2hoaKWlpXt7e9HR0fLy8v///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QURCRkU2MzNBMzczMTFFM0I3REQ4NTYxMUE2QjEzMzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QURCRkU2MzRBMzczMTFFM0I3REQ4NTYxMUE2QjEzMzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBREJGRTYzMUEzNzMxMUUzQjdERDg1NjExQTZCMTMzOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBREJGRTYzMkEzNzMxMUUzQjdERDg1NjExQTZCMTMzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUKAB8ALAAAAAAkABYAAAXI4CeOZGmeaPothKe+auB0Xv1CEFw6RW2nOJxOpOj5XKVIRBTMfR4PlYJx/I2USqYTCjVdGgNqNZDEmrjRUWJRYDSqNXIZ1VUj4PAhyiDAV0kUFDAWFiJ8fkcjgYEqhIQfh4hWi4IpjoWRkoCVjYWQfZJIeiUGAG+aJRUVKBMTJAsCGQgbB36pqqslra0jAQkYHAoAd2O3qiISEiK7riYBA8PFt8jJyh+8KATQtYkp1dYwAcLcVijJowQOAAcEPaNDFwoCGg3vJiEAIfkEBQoAHwAsEQACABIAEgAABVLgJ45iFJFoapopSVHlKkIQ+r7xTNfjDaM7Xu+XorWOrUoFOXo8Pkol0+mMLpHUp5T5cXK5EsnRYkGFwykymXQWfyYTkbrMdsPhcvrxHv+K8C0hACH5BAUKAB8ALBEAAgASABIAAAVS4CeOIkWRaGqaKVlV5SpGEfq+8UzX4w2jO17vl6K1ji2JBDmCQD5KJdPpjC6R1KeU+XFyuZPJ8fFAhcMpMpl0Fn8sFpG6zHbD4XL68R7/ivAtIQAh+QQFCgAfACwRAAIAEgASAAAFUuAnjmJVkWhqmikpSeUqUhT6vvFM1+MNozte75eitY6tyQQ5ikQ+SiXT6YwukdSnlPlxcrkWyxECQYXDKTKZdBZ/Hg+Rusx2w+Fy+vEe/4rwLSEAIfkEBQoAHwAsEQACABIAEgAABVLgJ46iJJFoapopOU3lKlYV+r7xTNfjDaM7Xu+XorWOLYsFOaJQPkol0+mMLpHUp5T5cXK5j8cxEkGFwykymXQWfyAQkbrMdsPhcvrxHv+K8C0hACH5BAUKAB8ALBEAAgASABIAAAVS4CeO4jSRaGqaKWlZ5SpKEvq+8UzX4w2jO17vl6K1jq3HAzmqVD5KJdPpjC6R1KeU+XFyuRDIkUJBhcMpMpl0Fn8iEZG6zHbD4XL68R7/ivAtIQAh+QQFCgAfACwRAAIAEgASAAAFUuAnjqJlkWhqmin5POUqThP6vvFM1+MNozte75eitY4tCAQ5kkg+SiXT6YwukdSnlPlxcrmRyLFSQYXDKTKZdBZ/KBSRusx2w+Fy+vEe/4rwLSEAIfkECQoAHwAsEQACABIAEgAABVLgJ47i85BoapopCUHlKloW+r7xTNfjDaM7Xu+XorWOrUgEOZpMPkol0+mMLpHUp5T5cXK5FMpRIkGFwykymXQWfyoVkbrMdsPhcvrxHv+K8C0hADs=";
            }
            else {
                //audioLoad.top = 12;
                audioLoad.top = 8;
                audioLoad.dom.style.cssText += 'position: absolute; left:0; top: 0';
                audioLoad.dom.setAttribute('data-audio-icon', 1);
                if (audioStatus) setAudioState(audioStatus);
            }
        });

        var audioStatus = null;
        var setAudioState = function (status) {
            switch (status) {
                case 'stop':
                    if (isTurnOnAudioHidden) {
                        audioOn.visible = false;
                        audioOff.visible = false;
                        audioLoad.visible = false;
                        //audioFlag.visible = false;
                    }
                    else {
                        audioOn.visible = false;
                        audioOff.visible = true;
                        audioLoad.visible = false;
                        //audioFlag.visible = true;
                    }
                    break;
                case 'play':
                    audioOn.visible = true;
                    audioOff.visible = false;
                    audioLoad.visible = false;
                    //audioFlag.visible = true;
                    if (audioStatus != status) {
                        if (audio.playTimeout) {
                            clearTimeout(audio.playTimeout);
                        }
                        audio.playTimeout = setTimeout(function () {
                            audio.pause();
                        }, 90 * 1000);
                    }
                    break;
                case 'load':
                    audioOn.visible = false;
                    audioOff.visible = false;
                    audioLoad.visible = true;
                    //audioFlag.visible = true;
            }
            audioStatus = status;

        }

        var handlePause = function () {
            if (audioLoad.visible) return;
            if (audioOff.visible) {
                //audio.src = src;
                audio.play();
            }
            else {
                audio.pause();
                //setTimeout(function(){audio.src = null;},0);
            }
        };
        //audioFlag.addEventListener('inputend', handlePause);
        audioOff.addEventListener('inputend', handlePause);
        audioOn.addEventListener('inputend', handlePause);

        setAudioState('stop');

        var waitTimeChange = function () {
            var playTime = audio.currentTime,
                checkTime = function () {
                    //Mugeda.log(audio.currentTime)
                    if (audio.currentTime != playTime) {
                        start();
                    }
                    else {
                        setTimeout(checkTime, 100);
                    }
                };
            setTimeout(checkTime, 10);
            var start = function () {
                setAudioState('play');
                audio._playing = true;
                //audio.removeEventListener('progress', start);
            }
        }


        audio.addEventListener('playing', function () {
            waitTimeChange();
        });

        if (audio.autoplay) {
            waitTimeChange();
        }

        //audio.addEventListener('progress', start);

        audio.addEventListener('pause', function () {
            setAudioState('stop');
        })
    }
}

function preDefineCustomParameters() {
    if (!Mugeda || !Mugeda.getMugedaObject()) return;
    var mugeda = Mugeda.getMugedaObject();
    if (mugeda) {
        var aniData = mugeda.aniData;
        mugeda.addEventListener("imageReady", function () {
            var formData = getFormObj(aniData, mugeda);
            if (formData) {
                var items = formData.items;
                var dic = [];
                for (var i = 0, l = items.length; i < l; i++) {
                    var item = items[i];
                    var obj = {};
                    obj.formName = item.id;
                    obj.formDescription = item.description;
                    var mugedaObj = {};
                    mugedaObj.name = item.id;
                    var type = '';
                    switch (item.type) {
                        default:
                            type = 'text';
                            break;
                    }
                    mugedaObj.attribute = type;
                    obj.mugedaObj = [mugedaObj];
                    dic.push(obj);
                }

                if (aniData.customInfo) {
                    var cdata = aniData.customInfo;
                    var audio = cdata.audio;
                    var images = cdata.images;
                    if (window.cardFrame) {
                        window.cardFrame.setOfficialCustom(!!cdata.isOfficialCustom);
                    }
                    if (audio) {
                        var currentAudioDom = mugeda.scene.getObjectByName(audio);
                        if (currentAudioDom && currentAudioDom.play) {
                            MugedaCard.showAudioControl(mugeda.scene, audio, false);
                        }
                    }
                    function setRadius(scene, name) {
                        var dom = scene.getObjectByName(name).dom;
                        if (dom) {
                            var width = parseInt(getComputedStyle(dom)["width"]) / 2 + "px";
                            var height = parseInt(getComputedStyle(dom)["height"]) / 2 + "px";
                            var aValue = [width, height].join(" ");
                            dom.style.borderTopLeftRadius = aValue;
                            dom.style.borderTopRightRadius = aValue;
                            dom.style.borderBottomLeftRadius = aValue;
                            dom.style.borderBottomRightRadius = aValue;
                            dom.style.overflow = "hidden";
                        }
                    }
                    function setAllRadius(arr, scene) {
                        for (var i = 0, l = arr.length; i < l; i++) {
                            var item = arr[i];
                            if (item.name && item.type === 'signature') {
                                setRadius(scene, item.name);
                            }
                        }
                    }
                    if (images && images.length) {
                        for (var i = 0, l = images.length; i < l; i++) {
                            var image = images[i];
                            var name = image.name;
                            var type = image.type;
                            var group = image.group;
                            if (name && type) {
                                var iObj = {
                                    'name': name,
                                    'attribute': type
                                }
                                var mugedaObj = [iObj];
                                var tObj = {
                                    'formName': name,
                                    'formDescription': '',
                                    'userUndefined': function () {
                                        if (group) {
                                            var frame = mugeda.scene.getObjectByName(group);
                                            if (frame) {
                                                frame.visible = false;
                                            }
                                        }
                                    },
                                    'mugedaObj': mugedaObj
                                }
                                dic.push(tObj);
                            }
                        }
                    }
                    if (images) {
                        var arr = [];
                        for (var i = 0, il = images.length; i < il; i++) {
                            var img = images[i];
                            var name = img.name;
                            if (name && mugeda.scene.getObjectByName(name)) {
                                arr.push(img);
                            }
                        }
                        setAllRadius(arr, mugeda.scene);
                    }
                }
                defineCustomParameters(mugeda.scene, dic);
            }
        });
    }
}

preDefineCustomParameters();

function preMucardAutomation() {
    if (!Mugeda || !Mugeda.getMugedaObject()) return;
    var mugeda = Mugeda.getMugedaObject();
    if (mugeda) {
        mugeda.addEventListener("imageReady", function () {
            var aniData = mugeda.aniData;
            var metadata = aniData.metadata;
            var formData = getFormObj(aniData, mugeda);
            if (metadata && formData) {
                var crid = aniData.crid || '';
                var mtitle = metadata.weixinTitle || '';
                var mdesc = metadata.weixinDesc || '';
                for (var key in window.data) {
                    var obj = mugeda.scene.getObjectByName(key);
                    var orgValue = obj ? obj.text : '';
                    var value = window.data[key].value || orgValue;
                    if (value) {
                        var reg = new RegExp('\\{\\{' + key + '\\}\\}', 'g');
                        mtitle = mtitle.replace(reg, value);
                        mdesc = mdesc.replace(reg, value);
                    }
                }

                function removePreQute(str) {
                    var quteStr = ' 　，。／；‘」、｀,.;[]`';
                    for (var i = 0, l = str.length; i < l; i++) {
                        var v = str[i];
                        if (quteStr.indexOf(v) === -1) break;
                    }
                    return str.substr(i);
                }

                mtitle = mtitle.replace(/\{\{[a-zA-Z0-9]+\}\}/g, '');
                mdesc = mdesc.replace(/\{\{[a-zA-Z0-9]+\}\}/g, '');
                mtitle = removePreQute(mtitle);
                mdesc = removePreQute(mdesc);
                var host = location.origin;
                var thumb = Mugeda.previewMode ? (host + metadata.thumb) : (host + '/weixin/card/cards/' + crid + "/" + metadata.thumb);
                defineWechatParameters({
                    img_url: thumb,
                    img_width: 128,
                    img_height: 128,
                    desc: mdesc,
                    title: mtitle
                });
            }
        });
    }
}

preMucardAutomation();

function getFormObj(aniData, mugeda) {
    if (!aniData || !aniData.customInfo) return;
    var customInfo = aniData.customInfo;
    if (!customInfo.flag || !customInfo.object_id) return;
    var object_id = customInfo.object_id;
    if (mugeda && mugeda.scene && object_id) {
        var objectHash = mugeda.scene.objectHash;
        var obj = objectHash[object_id];
        if (obj) {
            var objData = obj.data;
            if (objData && objData.param && objData.param.form) {
                return JSON.parse(objData.param.form);
            }
        }
    }
}
