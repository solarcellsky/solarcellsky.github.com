/**
 * Created by lipei on 2015/8/4.
 */

var loading_arr = [
    [[],[],[],[],[],[]],
    [[],[],[],[],[]]
];

!function(){

    var i;
    for (i = 0;i<20; i++){
        loading_arr[0][0].push("img/page_1/0/"+i+".png");
    }

    for (i = 20;i<77; i++){
        loading_arr[0][1].push("img/page_1/1/"+i+".png");
    }

    for (i = 0;i<86; i++){
        loading_arr[0][2].push("img/page_1/2/"+i+".png");
    }

    for (i = 0;i<62; i++){
        loading_arr[0][3].push("img/page_1/3/"+i+".png");
    }

    for (i = 0;i<76; i++){
        loading_arr[0][4].push("img/page_1/4/"+i+".png");
    }

    for (i = 0;i<12; i++){
        loading_arr[0][5].push("img/page_1/5/"+i+".png");
    }



    for (i = 0;i<28; i++){
        loading_arr[1][0].push("img/page_2/0/"+i+".png");
    }

    for (i = 0;i<86; i++){
        loading_arr[1][1].push("img/page_2/1/"+i+".png");
    }

    for (i = 0;i<62; i++){
        loading_arr[1][2].push("img/page_2/2/"+i+".png");
    }

    for (i = 0;i<64; i++){
        loading_arr[1][3].push("img/page_2/3/"+i+".png");
    }

    for (i = 0;i<12; i++){
        loading_arr[1][4].push("img/page_2/4/"+i+".png");
    }
}();

var common_loading = ["img/title.png","img/music.png","img/logo.png","img/loading.png","img/bg.jpg","img/phone.png","img/car.png","img/share_btn.png"];
var page_1_loading = ["img/page_1_leaf.png","img/page_3_bg.jpg","img/page_1_h3.png"].concat(common_loading).concat(loading_arr[0][0]).concat(loading_arr[0][1]).concat(loading_arr[0][2]).concat(loading_arr[0][3]);
var page_2_loading = ["img/page_2_leaf.png","img/page_4_bg.jpg","img/page_2_h3.png"].concat(common_loading).concat(loading_arr[1][0]).concat(loading_arr[1][1]).concat(loading_arr[1][2]);

console.log(loading_arr);
