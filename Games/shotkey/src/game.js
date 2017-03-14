/**
 * Created by Administrator on 2015/8/21.
 */
var GAME = {

    isMusic:true,
    isNew:true,
    level:0,
    maxLevel:0,
    isDead:false,
    tag:{
        bird:0,
        key:1
    },
    coinCount:0,

    initGame:function(){

        //this.loadLevel();
        this.initMusic();
        this.initIsNew();


    },
    loadLevel:function(){
        var levelStr = cc.sys.localStorage.getItem("douf_game_buybuybuy_level");
        if(levelStr == null || levelStr == undefined){
            this.level = 0;
        } else {
            this.level = parseInt(levelStr);


        }
    },
    initIsNew:function(){
        var isNewStr = cc.sys.localStorage.getItem("douf_game_buybuybuy_isnew");
        if(isNewStr == null || isNewStr == undefined){
            GAME.isNew = true;
        } else {
            GAME.isNew = !!parseInt(isNewStr);
        }
    },
    initMusic:function(){
        var isMusicStr = cc.sys.localStorage.getItem("douf_game_buybuybuy_ismusic");

        if(isMusicStr == null || isMusicStr == undefined){
            GAME.isMusic = true;
        } else {
            GAME.isMusic = !!parseInt(isMusicStr);
        }

    },
    //«–ªª…˘“Ù
    changeMusic:function(){

        if(this.isMusic){
            this.isMusic = false;
            cc.audioEngine.stopMusic(res.gameback_wav);
        } else {
            this.isMusic = true;
            cc.audioEngine.playMusic(res.gameback_wav,true);
        }
        cc.sys.localStorage.setItem("douf_game_suoyaota_ismusic",this.isMusic?1:0);

    }
};