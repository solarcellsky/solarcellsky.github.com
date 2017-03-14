/// <reference path="jquery-2.1.4.min.js" />

var dialog = {
    showMax3: function () {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot count-3">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <a href="javascript:voi(0)" class="bargain-mask-btn">确定</a>';
        html += '</div>';
        $($div).append(html);
        $(document.body).append($div);
        $('.bargain-mask-btn,.bargain-mask-close').click(function () {
            $div.remove();
        });
    },
    showAmount0: function () {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot no-get">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <a href="javascript:voi(0)" class="bargain-mask-btn">确定</a>';
        html += '</div>';
        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-btn,.bargain-mask-close').click(function () {
            $div.remove();
        });
    },
    showSucc: function (isLogined, amount, loginUrl, closeCallback, fixedCouponId) {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot cutted">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <div class="bargain-cut-quan"><strong>' + amount + '</strong>元优惠券</div>';
        if (isLogined == '1') {
            if (fixedCouponId && fixedCouponId > 0) {
                html += '   <p>您已获得<strong>100</strong>元买车优惠券，该优惠券可用于您在惠买车购买任意品牌汽车使用。</p>';
            } else {
                html += '   <p style="height:15px"></p>';
            }
            html += '   <a href="http://www.huimaiche.com/app" class="bargain-mask-btn" data-hmclog="{pageid:33, eventid: 137}">立刻下载惠买车客户端</a>';
        } else {
            html += '   <p>您将可获得<strong>100</strong>元买车优惠券，该优惠券可用于您在惠买车购买任意品牌汽车使用。</p>';
            html += '   <a href="' + loginUrl + '" class="bargain-mask-btn" data-hmclog="{pageid:33, eventid: 136}">立即注册登录领取优惠券</a>';
        }
        html += '</div>';

        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-close').click(function () {
            if (typeof closeCallback === 'function') {
                closeCallback();
            } else {
                $div.remove();
            }
        });
    },
    showReceiveSucc: function (closeCallback) {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot getted">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <p><strong>100</strong>元</p>';
        html += '   <a href="http://www.huimaiche.com/app" class="bargain-mask-btn" data-hmclog="{pageid:33, eventid: 137}">立刻下载惠买车客户端</a>';
        html += '</div>';

        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-close').click(function () {
            if (typeof closeCallback === 'function') {
                closeCallback();
            } else {
                $div.remove();
            }
        });
    },
    showShare: function () {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-share-arrow"></div>';
        html += '<div class="bargain-mask-cot share"><a href="javascript:void(0)" class="bargain-mask-btn">确定</a></div>';
        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-btn').click(function () {
            $div.remove();
        });
    },
    showCAEnd: function () {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot ended">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <a href="javascript:voi(0)" class="bargain-mask-btn">确定</a>';
        html += '</div>';
        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-btn,.bargain-mask-close').click(function () {
            $div.remove();
        });
    },
    showYicheApiFail: function () {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot using">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <a href="javascript:voi(0)" class="bargain-mask-btn">确定</a>';
        html += '</div>';
        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-btn,.bargain-mask-close').click(function () {
            $div.remove();
        });
    },
    showOpenInWeixin: function () {
        var $div = $('<div class="bargain-mask">');
        var html = '';
        html += '<div class="bargain-mask-cot copyed">';
        html += '   <div class="bargain-mask-close"></div>';
        html += '   <a href="javascript:voi(0)" class="bargain-mask-btn">确定</a>';
        html += '</div>';
        $div.append(html);
        $(document.body).append($div);
        $('.bargain-mask-btn,.bargain-mask-close').click(function () {
            $div.remove();
        });
    },
    showSendCodeTips: function (mobile) {
        var $div = $('<div class="mask">');
        var html = '';
        html += '<div class="maskcontent">';
        html += '   <div class="mask-cot">';
        html += '       <div class="default-txt">确认码已经发送到你的' + mobile + '手机<p class="small">收不到短信，请拔打400-810-0053收听确认码</p></div>';
        html += '   </div>';
        html += '   <div class="mask-btns">';
        html += '       <a href="javascript:void(0)" id="aClose">关闭</a>';
        html += '       <a href="tel://400-810-0053">立即拨打</a>';
        html += '   </div>';
        html += '</div>';
        $div.append(html);
        $(document.body).append($div);
        $('#aClose').click(function () {
            $div.remove();
        });
    }
};