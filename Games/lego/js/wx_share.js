/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

    $.ajax({
        url: "http://www.you-partners.com/lego_outh/share_samples.php",
        type: "GET",
        cache: true,
        data: {u: location.href},
        dataType: "jsonp",
        success: function(back) {
           	//alert(location.href);
            wx.config({
                debug: false,
                appId: back.appId,
                timestamp: back.timestamp,
                nonceStr: back.nonceStr,
                signature: back.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ]
            });
        },
        error: function() {
        }
    });
});

