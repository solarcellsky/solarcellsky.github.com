/**
 * Created by lipei on 2015/8/4.
 */

var loading_arr = [
    ["img/page_0/bg.jpg", "img/page_0/face.png", "img/page_0/btn_find.jpg", "img/page_0/line.png"],
    ["img/page_1/phone_ui.png"],
    ["img/page_2/negx.jpg", "img/page_2/negy.jpg", "img/page_2/negz.jpg", "img/page_2/posx.jpg", "img/page_2/posy.jpg", "img/page_2/posz.jpg", "img/page_2/chuang.png", "img/page_2/close.png", "img/page_2/cover_chuang_0.png", "img/page_2/cover_chuang_1.png", "img/page_2/cover_chuang_2.png", "img/page_2/cover_chuang_3.png", "img/page_2/cover_chuang_circle.png", "img/page_2/cover_chuang_line.png", "img/page_2/cover_chuang_time_1.png", "img/page_2/cover_chuang_time_2.png", "img/page_2/cover_chuang_time_3.png", "img/page_2/cover_chuang_time_4.png", "img/page_2/cover_chuang_time_5.png", "img/page_2/cover_gouwo_0.png", "img/page_2/cover_gouwo_1.png", "img/page_2/cover_gouwo_2.png", "img/page_2/cover_gouwo_3.png", "img/page_2/cover_gouwo_line.png", "img/page_2/cover_huace_0.png", "img/page_2/cover_huace_1.png", "img/page_2/cover_huace_2.png", "img/page_2/cover_huace_3.png", "img/page_2/cover_huace_line.png", "img/page_2/cover_qiuxie_0.png", "img/page_2/cover_qiuxie_1.png", "img/page_2/cover_qiuxie_2.png", "img/page_2/cover_qiuxie_3.png", "img/page_2/cover_qiuxie_line.png", "img/page_2/cover_shu_0.png", "img/page_2/cover_shu_1.png", "img/page_2/cover_shu_2.png", "img/page_2/cover_shu_3.png", "img/page_2/cover_shu_line.png", "img/page_2/erji.png", "img/page_2/gouwo.png", "img/page_2/huace.png", "img/page_2/qiuxie.png", "img/page_2/shu.png", "img/page_2/tips.png", "img/page_2/cover_gouwo_text.png", "img/page_2/cover_gouwo_btn.png", "img/page_2/360.jpg"],
    ["img/page_3/bg.jpg", "img/page_3/btn_back.png", "img/page_3/btn_share.png", "img/page_3/share_0.png", "img/page_3/share_1.png", "img/page_3/share_2.png", "img/page_3/download.png", "img/page_3/line.png", "img/page_3/h1.png", "img/page_3/h2.png", "img/page_3/people.png"]
];

var mc = [];

var loading_all = [];

! function() {
    var i;

    for (i = 0; i < 22; i++) {
        mc.push("img/page_0/loading/" + i + ".png")
    }

    loading_arr[0] = loading_arr[0].concat(mc);

    for (i = 0; i < 4; i++) {
        loading_all = loading_all.concat(loading_arr[i]);
    }

    console.log(loading_arr);

}();
