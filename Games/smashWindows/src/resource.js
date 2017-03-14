var res = {
    house_bottom_png: "images/house-bottom.png",
    house_top_png: "images/house-top.png",
    house_middle_png: "images/house-middle.png",
    windowBong_png:"images/windowBong.png",
    brick_png:"images/brick.png",
    replay_png:"images/replay.png",
    award_png:"images/award.png",
    endPG_png:"images/endPG.png",
    loading_png:"images/loading.png",
    share_png:"images/share.png",
    share_guide_png:"images/guide.png",
    background_mp3 : "res/background.mp3"
};

var windowsRes =[
    "images/chuang_1.png",
    "images/chuang_2.png",
    "images/chuang_3.png",
    "images/chuang_1_g.png",
    "images/chuang_2_g.png",
    "images/chuang_3_g.png"
];

var coinRes=[
    {coinType:"images/coin1.png",coinValue:3},
    {coinType:"images/coin2.png",coinValue:2},
    {coinType:"images/coin3.png",coinValue:1}
];
var dollsRes =[
    "images/p1.png",
    "images/p2.png",
    "images/p3.png",
    "images/p4.png",
    "images/p5.png",
    "images/p6.png",
    "images/p7.png",
    "images/p8.png",
    "images/p9.png",
    "images/p10.png",
    "images/p11.png",
    "images/p12.png"
];
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
for (var j in windowsRes) {
    g_resources.push(windowsRes[j]);
}
for (var z in dollsRes) {
    g_resources.push(dollsRes[z]);
}

for (var a in coinRes) {
    g_resources.push(coinRes[a].coinType);
    cc.log("-----coinRes--");
}