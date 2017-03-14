var wxDefault = {
    title: '滴滴疯狂出租车，都市狂奔ing……',
    desc: '看看你的疯狂基因会带你去哪儿？',
    link:"http://dd252.hecoe.com/crazytaxi",
    imgUrl:"http://dd252.hecoe.com/crazytaxi/shareimg/share0.jpg",
    success: function () {
    }
};
wxShare();

$(function(){
    var pageUrl = location.href;
    $.ajax({
        url:"http://api.hecoe.com/wx/index.php?w=jssdk",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        data:{url:encodeURIComponent(pageUrl)},
        success:function(data){
            data.debug = false;
            wx.config(data);
            wx.ready(function(){
                wxShare();
            });
        }
    })
});

function wxShare(data){
    if(typeof(wx) == "undefined"){
        return;
    }
    var newData = $.extend({},wxDefault, data);
    wx.onMenuShareAppMessage(newData);
    wx.onMenuShareQQ(newData);
    wx.onMenuShareWeibo(newData);
    wx.onMenuShareTimeline({
        title:newData.title,
        imgUrl:newData.imgUrl,
        link:newData.link,
        success: newData.success
    });
}

var share_title = [
    '万圣夜我被滴滴出租车送到B612星球！',
    '万圣夜我被滴滴出租车送到哈里波特魔法学院！',
    '万圣夜我被滴滴出租车送回到自习室！',
    '万圣夜我被滴滴出租车送到日本富士急鬼屋！',
    '万圣夜我被滴滴出租车送到欢乐谷！',
    '万圣夜我被滴滴出租车送到南瓜地！',
    '万圣夜我被滴滴出租车送到蛮荒！',
    '万圣夜我被滴滴出租车送回办公室！',
    '万圣夜我被滴滴出租车送到开普勒452b！',
    '万圣夜我被滴滴出租车送到糖果屋！',
    '万圣夜我被滴滴出租车送到体重秤上！',
    '万圣夜我被滴滴出租车送来看广场舞！',
    '万圣夜我打滴滴出租车回到了家！',
    '万圣夜滴滴出租车带我找到了葫芦兄弟！',
    '万圣夜滴滴出租车带我找到了张起灵！'
];
            
var share_desc = [
    '万圣夜我被滴滴出租车送到B612星球，这里有小王子和他的玫瑰花！',
    '万圣夜我被滴滴出租车送到哈里波特魔法学院，打败了伏地魔！',
    '万圣夜我被滴滴出租车送回到自习室，浓浓的怨念可以驱散恶灵！',
    '万圣夜我被滴滴出租车送到日本，挑战全球最恐怖的富士急鬼屋！',
    '万圣夜我被滴滴出租车送到欢乐谷，狂欢party我要相亲！',
    '万圣夜我被滴滴出租车送到南瓜地，我要刻100个杰克灯照亮世界！',
    '万圣夜我被滴滴出租车送到蛮荒，已经控制不住体内的洪荒之力！',
    '万圣夜我被滴滴出租车送回办公室，已嫁给工作不约！',
    '万圣夜我被滴滴出租车送到开普勒452b，再见了，地球人！',
    '万圣夜我被滴滴出租车送到糖果屋，不给糖就捣蛋！',
    '万圣夜我被滴滴出租车送到体重秤上，一阵阴风冷冷袭来！',
    '万圣夜我被滴滴出租车送来看广场舞，国际范儿的大妈魅力四射！',
    '万圣夜我打滴滴出租车回到了家，卸了妆，天天都是万圣节！',
    '万圣夜滴滴出租车带我找到了葫芦兄弟，像我这么屌的还有6个！',
    '万圣夜滴滴出租车带我找到了张起灵，好巧，小哥也来盗墓！'
];

function changeShare(a){

    var m=parseInt(a);

    /*//端内分享
    var share_data = {
        share_url: "http://dd252.hecoe.com/crazytaxi/",   //分享出去后落地页的链接
        share_icon_url: "http://dd252.hecoe.com/crazytaxi/shareimg/share"+c+".jpg",  //分享出去时的ICON 180*180的尺寸
        share_img_url: "http://dd252.hecoe.com/crazytaxi/shareimg/share"+c+".jpg",   //这个同上
        share_title: share_title[m-1],   //分享出去时文案标题
        share_content: share_desc[m-1],   //分享出去时文案描述
        share_from: "滴滴出行"
    };
    didi.initShare(share_data);  //端内分享
    weixin.initShare(share_data);  //微信分享*/

    wxDefault = {
        title: share_title[m-1],
        desc: share_desc[m-1],
        link:"http://dd252.hecoe.com/crazytaxi/",
        imgUrl:"http://dd252.hecoe.com/crazytaxi/shareimg/share"+m+".jpg",
        success: function () {
            
        }
    };
    wxShare();
}