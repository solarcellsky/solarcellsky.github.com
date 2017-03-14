/**
 * @author calvinzhong
 * @version 1.4.40
 * @createTime 2014-12-22
 */

;(function(exports) {
    var appId = "wx47031447c8352579",
        code = getUrlParam("code"),
        openId = getUrlParam('openId');

    var ua = navigator.userAgent,
        is_ios = /(iPhone|iPad|iPod|iOS)/i.test(ua),
        is_android = /(Android)/i.test(ua);

    function getWeixinVersion(){
        var reg = /MicroMessenger\/([\d\.]+)/i,
            ret = ua.match(reg);

        if (ret && ret[1]){
            return ret[1];
        }
        return false;
    }

    function $setCookie(name, value, expires, path, domain, secure) {
        //写入COOKIES
        var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + escape(value) + ( expires ? ';expires=' + exp.toGMTString() : '') + ( path ? ';path=' + path : '') + ( domain ? ';domain=' + domain : '') + ( secure ? ';secure' : '');
    }
    function $getCookie(name) {
        //读取COOKIE
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"), val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]) : "") : null;
    }

    function getUrlParam(name,url){
        var u  = arguments[1] || window.location.search,
            reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?")+1).match(reg);
        return r!=null?r[2]:"";
    }

    function loadScript(o, func) {
        o.element = o.element || 'script';
        var el = document.createElement(o.element);
        el.charset = o.charset || 'utf-8';
        o.onBeforeSend && o.onBeforeSend(el);
        el.onload = el.onreadystatechange = function() {
            func && func();
            if (/loaded|complete/i.test(this.readyState) || navigator.userAgent.toLowerCase().indexOf("msie") == -1) {
                o.onLoad && o.onLoad();
                clear();
            }
        };
        el.onerror = function() {
            clear();
        };
        el.src = o.url;
        document.getElementsByTagName('head')[0].appendChild(el);
        function clear() {
            if (!el) {
                return;
            }
            el.onload = el.onreadystatechange = el.onerror = null;
            el.parentNode && (el.parentNode.removeChild(el));
            el = null;
        }
    }

    function getCardData(batchId, callback){
        if(!getUrlParam('code')  && (!$getCookie(appId+'_token') || !$getCookie(appId+'_uin') || !$getCookie(appId+'_skey') || !$getCookie(appId+'_openId'))) {
            return location.href = location.protocol + '//open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + encodeURIComponent(location.href) + '&response_type=code&scope=snsapi_base&state=qqchongzhi#wechat_redirect';
        }
        window.insertCoupon_getCardCouponCardList = function(res){
             if(res.retCode == 0){
                openId = $getCookie(appId+'_openId');
                callback(res.data);
            }
            else {
                callback();
            }
        };
        loadScript({
            url: "http://chong.qq.com/tws/card/getcouponcardlist?wechat_card_js=1&appId=" + appId + "&lwxx=1&virWx=1&preKey=" + batchId + "&code="+code+"&t=" + Date.parse(new Date())+"&callback=insertCoupon_getCardCouponCardList",
        });
    }

    function checkLoginStatus() {
        if(!getWeixinVersion()) {
            return;
        }
        if(!code && (!$getCookie('wx47031447c8352579_token') || !$getCookie('wx47031447c8352579_uin') || !$getCookie('wx47031447c8352579_skey') || !$getCookie('wx47031447c8352579_openId'))) {
            location.href = location.protocol + '//open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + encodeURIComponent(location.href) + '&response_type=code&scope=snsapi_base&state=qqchongzhi#wechat_redirect';
        }
    }
    
    checkLoginStatus();

    var insertCoupon = {
        getData: getCardData,
        run: function(batchId, callback){
            callback = callback instanceof Function? callback : function(){};
            getCardData(batchId, function(cardData) {
                var mmversion = getWeixinVersion();
                if(!mmversion){ return; }
                mmversion = mmversion.split(".");

                var data = [];

                if(cardData && cardData.length){
                    for (var i = 0,length = cardData.length; i < length; i++){
                        if(!cardData[i]['nonceStr']) {
                            data.push({
                                "card_id": cardData[i]["cardId"],
                                "card_ext": "{\"code\":\"" + cardData[i]["cardCode"] + "\",\"openid\":\"" + openId + "\",\"timestamp\":\"" + cardData[i]["timestamp"] + "\",\"signature\":\"" + cardData[i]["sha1Sign"] + "\"}"
                            });
                        }
                        else {
                            data.push({
                                "card_id": cardData[i]["cardId"],
                                "card_ext": "{\"code\":\"" + cardData[i]["cardCode"] + "\",\"openid\":\"" + openId + "\",\"timestamp\":\"" + cardData[i]["timestamp"] + "\",\"signature\":\"" + cardData[i]["sha1Sign"] + "\",\"nonce_str\":\"" + cardData[i]["nonceStr"] + "\"}"
                            });
                        }
                    }
                }
                else{
                    return callback('NONE'); //没有要插入的卡
                }

                if(mmversion[0] >= 6){
                    WeixinJSBridge.invoke(
                        'batchAddCard', { "card_list": data },
                        function(res) {
                            if(res.err_msg == "batch_add_card:ok"){
                                callback('OK');
                            }
                            else {
                                callback('ERROR');
                            }
                        }
                    );
                }
                else if(mmversion[0] >= 5 && mmversion[1] >= 4){
                    WeixinJSBridge.invoke(
                        'openCardDetail', data[cardData.length - 1],
                        function(res) {
                            if(res.err_msg == "batch_add_card:ok"){
                                callback('OK');
                            }
                            else {
                                callback('ERROR');
                            }
                        }
                    );
                }
                else{
                    alert("请升级您的微信！");
                }
            });
        }
    }

    exports.insertCoupon = insertCoupon;

})(window);

/*  |xGv00|14784018f51a1a59e0f23d11bdfcf991 */