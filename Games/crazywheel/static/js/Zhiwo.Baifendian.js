function console_log(val) {
    var isIE = !!document.all;
    var debug = (window.location.href).match(new RegExp("[\?\&]debug=true(\&?)","i"));
    if (!isIE && debug) {
        console.log(val);
    }
}

window["_BFD"] = window["_BFD"] || {};

// 首页
if (RUN_CONTROL == "Group" && RUN_ACTION == "show") {
    _BFD.BFD_INFO = {
        "user_id" : zhiwoUID,
        "page_type" : "homepage"
    };

    _BFD.showHp = function(data,bid,req_id){
        bfd_show_hp(data, req_id);
        _BFD.bind(data,"hp_",bid,req_id);
    }
}
// 团购商品详情页
else if (RUN_CONTROL == "Group" && RUN_ACTION == "view") {
    _BFD.BFD_INFO = {
        "id" : goods_id,
        "name" : goods_name,
        "item_link" : item_link,
        "image_link" : mall_image_link,
        "scprice" : scprice,//原价
        "tprice" : tprice,//折扣价
        "discount" : discount,
        "category" : category,
        "brand": brand,
        "sale_num": sale_num,
        "onsale" : onsale,
        "user_id" : zhiwoUID,
        "page_type" : "detail"
    };

    _BFD.showDt = function(data,bid,req_id){
        bfd_show_dt(data, req_id);
        _BFD.bind(data,"dt_",bid,req_id);
    }
}
// 购物车页
else if (RUN_CONTROL == "Cart" && RUN_ACTION == "show") {
    if (typeof cart_items == 'undefined') cart_items = [];
    _BFD.BFD_INFO = {
        "cart_items" : cart_items,
        "user_id" : zhiwoUID,
        "page_type" : "shopcart"
    };
}
// 订单结算页
else if (RUN_CONTROL == "Order" && RUN_ACTION == "pay") {
    _BFD.BFD_INFO = {
        "order_id" : [order_id],
        "order_items" : order_items,
        "total" : total,
        "payment" : payment,
        "express" : express,
        "user_id" : zhiwoUID,
        "page_type" : "order"
    };

    _BFD.showPm = function(data,bid,req_id){
        bfd_show_pm(data, req_id);
        _BFD.bind(data,"pm_",bid,req_id);
    }
}
// 付款完成页
else if (RUN_CONTROL == "Order" && RUN_ACTION == "complete") {
    _BFD.BFD_INFO = {
        "order_id" : [order_id],
        "order_items" : order_items,
        "total" : total,
        "payment" : payment,
        "express" : express,
        "user_id" : zhiwoUID,
        "page_type" : "order"
    };

    _BFD.showPm = function(data,bid,req_id){
        bfd_show_pm(data, req_id);
        _BFD.bind(data,"pm_",bid,req_id);
    }
}
//支付宝付款完成页
else if (RUN_CONTROL == "Pay" && RUN_ACTION == "callback") {
    _BFD.BFD_INFO = {
        "order_id" : [order_id],
        "order_items" : order_items,
        "total" : total,
        "payment" : payment,
        "express" : express,
        "user_id" : zhiwoUID,
        "page_type" : "order"
    };

    _BFD.showPm = function(data,bid,req_id){
        bfd_show_pm(data, req_id);
        _BFD.bind(data,"pm_",bid,req_id);
    }
}
// 会员中心页
else if (RUN_CONTROL == "User" && (RUN_ACTION == "show" || RUN_ACTION == "list" || RUN_ACTION == "Coupon")) {
    _BFD.BFD_INFO = {
        "user_id" : zhiwoUID,
        "page_type" : "account"
    };
}
//微店
else if (RUN_CONTROL == "Vdian" && RUN_ACTION == "view") {
    _BFD.BFD_INFO = {
        "user_id" : zhiwoUID,
        "page_type" : "channel"
    };

    _BFD.showVd = function(data, bid, req_id) {
        bfd_show_vd(data, req_id);
        _BFD.bind(data, "vd_", bid, req_id);
    }
}
//活动
else if (RUN_CONTROL == "Acitvity") {
    _BFD.BFD_INFO = {
        "user_id" : zhiwoUID,
        "page_type" : "campaign"
    };

    _BFD.Activity = function(data, bid, req_id) {
        bfd_show_activity(data, req_id);
        _BFD.showActivity(data, bid, req_id);
    }
}
// 404页或其他错误页
else if (RUN_CONTROL == "Error" && RUN_ACTION == "view") {
    _BFD.BFD_INFO = {
        // "id" : "123456",   //下架商品id号
        "user_id" : zhiwoUID,
        "page_type" : "wrong"
    };

    _BFD.showWrong = function(data,bid,req_id){
        _BFD.bind(data,"wrong_",bid,req_id);
    }
}
//搜索结果页 xinxuemin 2015-12-2
else if (RUN_CONTROL == "Site" && RUN_ACTION == "search") {
    var search = searchPages.total;
    var search_sum = 0;
    if(search>0){ search_sum = 1;}
    var search_keyword = searchData.keyword;
    var search_id = searchPages.bfd_search_id;

    _BFD.BFD_INFO = {
        "search_word" : search_keyword,   //搜索词
        "search_result" : search_sum,   //搜索有无结果，1表示有结果，0表示无结果
        "search_id" : search_id,   //搜索的前3个结果
        "user_id" : zhiwoUID, //网站当前用户id，如果未登录就为0或空字符串
        "page_type" : "search" //当前页面全称，请勿修改
    };
    _BFD.zhiwo_ser = function(data,bid,req_id){
        bfd_show_search(data, req_id);
        _BFD.bind(data,"zhiwo_ser",bid,req_id);//'此处是推荐返回时百分点绑定事件的方法，请不要修改。
    }
}
else {
    _BFD.BFD_INFO = {
        "user_id" : zhiwoUID,
        "page_type" : "others"
    };
}

console_log(_BFD.BFD_INFO);

//首页
function bfd_show_hp(datas, req_id) {
    var containerID = $('#bfd_show_hp');
    if (containerID.length) {
        var url = '/baifendian/ajax/recommend';
        var params = build_query(datas, req_id);
        params.size = 16;
        var respHandle = function(data) {
            console_log(data);
            containerID.html(build_ul(data));
        };

        $.post(url, params, respHandle);
    }
}

//商品详情页
function bfd_show_dt(datas, req_id) {
    var containerID = $('#bfd_show_dt');
    if (containerID.length) {
        var url = '/baifendian/ajax/recommend';
        var params = build_query(datas, req_id);
        params.size = 6;
        var respHandle = function(data) {
            console_log(data);
            containerID.html(build_ul(data));
        };

        $.post(url, params, respHandle);
    }
}

// 付款完成页
function bfd_show_pm(datas, req_id) {
    var containerID = $('#bfd_show_pm');
    if (containerID.length) {
        var url = '/baifendian/ajax/recommend';
        var params = build_query(datas, req_id);
        params.size = 6;
        var respHandle = function(data) {
            console_log(data);
            containerID.html(build_recommend(data));
        };

        $.post(url, params, respHandle);
    }
}

//微店
function bfd_show_vd(datas, req_id) {
    var containerID = $('#bfd_show_vd');
    if (containerID.length) {
        var url = '/baifendian/ajax/recommend';
        var params = build_query(datas, req_id);
        params.size = 6;
        var respHandle = function(data) {
            console_log(data);

            var string = "";
            string += '<ul class="clearfix">';
            for (var i in data) {
                string += '<li class="prosale_end">';
                string += '<a href="' + data[i].url + '">';
                string += '<div class="rlist_goodsimg"><img src="' + data[i].big_pic + '"></div>';
                string += '<div class="rlist_goodsinfo">';
                string += '<p class="info_name">' + data[i].name + '</p>';
                string += '<p class="info_price"><i>￥</i><span>' + data[i].price + '</span><em>￥</em><del>' + data[i].market_price + '</del></p>';
                string += '</div>';
                string += '</a>';
                // string += '<div class="pro_saleout">';
                // string += '<div class="sale_end">售罄</div>';
                // string += '</div>';
                string += '</li>';
            }

            string += '</ul>';
            containerID.html(string);
        };

        $.ajax({
            type: "POST",
            url: url,
            data: params,
            success: respHandle,
            complete: function() {
                vDianColumnPosition();
            }
        });
    }
}

//活动
function bfd_show_activity(datas, req_id) {
    var containerID = $('#bfd_show_activity');
    if (containerID.length) {
        var url = '/baifendian/ajax/recommend';
        var params = build_query(datas, req_id);
        params.size = 16;
        var respHandle = function(data) {
            console_log(data);
            containerID.html(build_ul(data));
        };

        $.post(url, params, respHandle);
    }
}

function bfd_show_search(datas, req_id) {
    var containerID = $('#search_favorite_lists');
    if (containerID.length) {
        var url = "/baifendian/ajax/recommend?tpl=1";
        var params = build_query(datas, req_id);
        params.size = 16;
        var respHandle = function(data) {
            console_log(data);
            if(data != ''){
                containerID.html('<ul>'+data.content+'</ul>');
                $("img.lazy").lazyload();
            }
        };

        $.post(url, params, respHandle);
    }
}
//search end
function build_recommend(data) {
    var string = "";

    string += "<h2>知我推荐</h2>";
    string += '<div class="tab_cont cbox">';
    string += '<div class="tab1 tab_show">';

    string += build_ul(data);

    string += '</div>';
    string += '</div>';

    return string;
}

function build_ul(data) {
    var string = "";

    string += "<ul>";
    for (var i in data) {
        string += build_li(data[i]);
    }

    string += "</ul>";
    return string;
}

function build_li(goods) {
    var string = "";

    string += "<li>";
    string += '<a href="' + goods.url + '">';
    string += '<div class="goods_img">';
    string += '<p class="g_img_show"><img src="' + goods.img + '" /></p>';
    string += '<p class="g_img_ico"><img src="/static/images/ico/timer.png"></p>';
    string += '</div>';
    string += '<div class="goods_infor">';
    if (goods.newly == 1) {
        string += '<p class="g_infor_ico">';
        string += '<img src="/static/images/ico/new_ico.png">';
        string += '</p>';
    }

    string += '<p class="g_infor_name">' + goods.name + '</p>';
    string += '<p class="g_infor_price"><span>团购价：</span><strong><i>￥</i><span class="price_day">' + goods.price + '</span></strong></p>';
    string += '<p class="his_price"><i class="i2">原价：￥</i><del>' + goods.market_price + '</del><em>' + goods.discount + '折</em></p>';
    string += '<div class="g_infor_detail clearfix">';
    string += '<p class="buy_person"><strong>' + goods.group_virtual_buy_num + '</strong><span>人购买</span></p>';
    string += '<p><strong class="group_goods_time" diff="' + goods.left_time + '"></strong></p>';
    string += '</div></div></a></li>';

    return string;
}

/**
 [{"iid":"1112490","type":"shang"},
 {"iid":"1115333","type":"shang"},
 {"iid":"1108280","type":"tuan"},
 {"iid":"1113526","type":"tuan"},
 {"iid":"1111070","type":"shang"}]
 */
function build_query(datas, req_id) {
    console_log(datas);

    var goods_id = [], types = [];
    for (var i in datas) {
        goods_id.push(datas[i].iid);
        types.push("tuan");
    }

    var params = {'goods_id': goods_id, 'types': types, 'req_id': req_id};

    console_log(params);
    return params;
}
