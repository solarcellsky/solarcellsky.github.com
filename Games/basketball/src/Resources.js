/**
 * Created by Administrator on 14-12-9.
 */
//Loading页面所需要的资源
var preRes = {
    loadBgLogo_jpg:"preRes/bg_index.jpg",
    loadProcessUp_png:"preRes/loadProcessUp.png",
    loadProcessDown_png:"preRes/loadProcessDown.png"
};

var g_preRes = [];

for(var i in preRes){
    g_preRes.push(preRes[i]);
}

//游戏中正式用到的资源
var res = {
    bg_index_jpg:"res/bg_index.jpg",
    bg_main_jpg:"res/bg_game.jpg",
    bg_rules_jpg:"res/bg_rules.jpg",
    basketball_plist:"res/basketball.plist",
    basketball_png:"res/basketball.png",
    GameGuide_png:"res/GameGuide.png",
    popup_png:"res/popup.png",
    bg_share_png:"res/bg_share.png",
    hit_mp3:"res/audio/hit.mp3",
    fail_mp3:"res/audio/fail.mp3",
    cheer_mp3:"res/audio/cheer.mp3",
    shoot_mp3:"res/audio/shoot.mp3"
};

var g_resources = [];

for(var i in res){
    g_resources.push(res[i]);
}