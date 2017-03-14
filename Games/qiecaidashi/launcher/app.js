var mySound = {
    //url属性变量
    fuck: "./resource/assets/sound/painful.mp3",
    bSrc: "./resource/assets/sound/pass.mp3",
    init: function () {
        this.playFormat.playFormat();
        this.register.registering();
    },
    stopSound: function () {
        instance = createjs.Sound.play(this.fuck);
        instance = createjs.Sound.stop(this.fuck);
        instance = createjs.Sound.play(this.bSrc);
        instance = createjs.Sound.stop(this.bSrc);
    },
    playPainSound: function () {
        createjs.Sound.play(this.fuck);
    },
    playPassSound: function () {
        createjs.Sound.play(this.bSrc);
    }
};
mySound.playFormat = {
    playFormat: function () {
        createjs.Sound.alternateExtensions = ['mp3'];
    }
};
mySound.register = {
    registering: function () {
        createjs.Sound.registerSound(mySound.fuck);
        createjs.Sound.registerSound(mySound.bSrc);
    }
};
mySound.init();
