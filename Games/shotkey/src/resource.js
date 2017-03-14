/**
 * Created by Administrator on 2015/8/21.
 */
var res = {
    bg_png:"res/bg.png",
    ui_plist:"res/ui.plist",
    ui_png:"res/ui.png",
    level_json:"data/level.json",

    gameOver_mp3:"res/gameOver.mp3",
    gameWin_mp3:"res/gameWin.mp3",
    levelwin_wav:"res/levelwin.wav",
    shotKey_mp3:"res/shotKey.mp3"
};

var g_resources = [];

for(var i in res){

    g_resources.push(res[i]);
}