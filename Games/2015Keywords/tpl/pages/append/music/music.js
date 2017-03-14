define(function (require, exports, module) {
    var lib = require('phoneutils/comUtils');
    var comUtils = require('phoneutils/comUtils');
    var coffee = require('base-lib/zepto-plugin/coffee1');
    var musicIns = {};
    var hasBeenTap = false;

    // 引入touch模块，为支持tap事件
    require('base-lib/zepto-plugin/touch');
    var GlobalAudio1 = function ($item) {
        //定义属性
        this._$globalAudio = $item;                         //容器对象
        this.audio = this._$globalAudio.find('audio')[0];   //获取音频控件
        this.isAllowManually = false;                       //是否允许手动操作
        this.playState = 'ready';                           //当前播放状态

        //定义临时变量
        var theClass = this;

        // 音符飘逸
        this._$globalAudio.coffee({
            steams : ['<img src="./tpl/img/globalAudio.png"/>'
                ,'<img src="./tpl/img/globalAudio.png"/>'
                ,'<img src="./tpl/img/globalAudio.png"/>'
                ,'<img src="./tpl/img/globalAudio.png"/>'
                ,'<img src="./tpl/img/globalAudio.png"/>'
                ,'<img src="./tpl/img/globalAudio.png"/>'],
            steamHeight : 100,
            steamWidth : 50
        });

        //加载完成时自动播放
        if(this.audio.autoplay){
            theClass.isAllowManually = true;
            theClass.play();
        }

        //播放控制
        this._$globalAudio.on(comUtils.isMobile() ? 'tap': 'click', function (e) {
            e.preventDefault();
            hasBeenTap = !hasBeenTap;
            if(theClass.isAllowManually){
                theClass._$globalAudio.hasClass('z-play') ? theClass.pause() : theClass.play();
            }
        });

        //修复ios/android 4.4下音频不播放的问题
        $(document).one('touchstart', function (e) {
            theClass.audio.play();
        });
    };

    // 播放
    GlobalAudio1.prototype.play = function() {
        this.audio.play();
        this._$globalAudio.removeClass('z-pause').addClass('z-play');
        this._$globalAudio.find('.u-globalAudio-0').addClass('u-globalAudio-1');
        this.playState = 'playing';
        $.fn.coffee.start();
    };

    // 暂停
    GlobalAudio1.prototype.pause = function() {
        this.audio.pause();
        this._$globalAudio.removeClass('z-play').addClass('z-pause');
        this._$globalAudio.find('.u-globalAudio-0').removeClass('u-globalAudio-1');
        this.playState = 'pause';
        $.fn.coffee.stop();
    };

    // 音频样式2
    var GlobalAudio2 = function ($item) {
        //定义属性
        this.audio = $item.find('audio')[0];
        this.isAllowManually = false;
        this.audoWrap = $item;
        this.playState = 'raady';
        var mediaEle = $item;
        var media = this;

        if(this.audio.autoplay){
            media.isAllowManually = true;
            media.play();
        }
        //播放控制
        $item.on(comUtils.isMobile() ? 'tap': 'click', function (e) {
            e.preventDefault();
            hasBeenTap = !hasBeenTap;
            if(media.isAllowManually) {
                mediaEle.hasClass('z-show') ? media.pause() : media.play();
            }
        });

    };

    GlobalAudio2.prototype = {
        play: function() {
            this.audio.play();
            this.audoWrap.addClass('z-show');
            this.playState = 'playing';
        },
        pause: function() {
            this.audio.pause();
            this.audoWrap.removeClass('z-show');
            this.playState = 'pause';
        }
    };

    // 音频样式3
    var GlobalAudio3 = function($item) {
        this.isAllowManually = false;
        this.audio = $item.find('audio')[0];
        this.init($item);
        this.playState = 'ready';
    };

    GlobalAudio3.prototype = {
        init: function(item) {
            var $this = this;
            var $item = item;
            //加载完成时自动播放
            if(this.audio.autoplay){
                $this.isAllowManually = true;
                $this.play();
            }
            $('.music-icon').addClass('animing');
            document.querySelector('.music-icon').addEventListener('webkitAnimationIteration', function() {
                $this.musicNoteAnim();
            }, false);
            //播放控制
            $item.on(comUtils.isMobile() ? 'tap': 'click', function (e) {
                e.preventDefault();
                hasBeenTap = !hasBeenTap;
                if($this.isAllowManually) {
                    $item.find('.music-icon').hasClass('animing') ? $this.pause() : $this.play();
                }
            });
        },
        musicNoteAnim: function() {
            var $circle1 = $('.circle-1');
            var $circle2 = $('.circle-2');
            var $circle3 = $('.circle-3');
            $circle1.show();
            setTimeout(function() {
                $circle2.show();
            }, 200);
            setTimeout(function() {
                $circle3.show();
            }, 300);
            setTimeout(function() {
                $circle1.hide();
            }, 400);
            setTimeout(function() {
                $circle2.hide();
            }, 500);
            setTimeout(function() {
                $circle3.hide();
            }, 650);
        },
        play: function() {
            $('.music-wrap').find('i.circle').hide();
            $('.music-icon').addClass('animing');
            this.musicNoteAnim();
            this.audio.play();
            this.playState = 'playing';
        },
        pause: function() {
            $('.music-icon').removeClass('animing');
            setTimeout(function() {
                $('.music-wrap').find('i.circle').show();
            }, 500);
            setTimeout(function() {
                $('.music-wrap').find('i.circle').show();
            }, 650);
            setTimeout(function() {
                $('.music-wrap').find('i.circle').show();
            }, 760);
            this.audio.pause();
            this.playState = 'pause';
        }
    };

	// 添加music类
	var Music = function () {};

	Music.prototype = {
		// 加载音频结构
		componentLoad: function() {
            if(!window.caseData && !window.liveApp.caseData) return;
            // 当不存在音频时退出
            var caseData = window.caseData || window.liveApp.caseData;
            if(!caseData || !caseData.music || caseData.music.length < 3) return;

            var t = caseData.musicStyle || 0;

            var params = {
                case_id: liveApp.caseData.id
            };

            $.get('./tpl/pages/append/music/music' + t + '.css', params, function(data){
                var cssText = data;
                var style = document.createElement('style');
                style.innerHTML = cssText;
                document.querySelector('head').appendChild(style);
            });
            $.get('/tpl/pages/append/music/music' + t + '.html', params, function(res){
                var html = res;
                var rlSide = isNaN(parseFloat(window.rlSide)) ? 0 : parseFloat(window.rlSide);//屏幕适配代码
                var pos = ['right: ' + (20 + rlSide) + 'px; top: 20px;', 'right: ' + (20 + rlSide) + 'px; bottom: 20px;'
                    , 'left: ' + (20 + rlSide) + 'px; top: 20px;', 'left: ' + (20 + rlSide) + 'px; bottom: 20px;'];
                var posWarp = ['right: 0; top: 0;', 'right: 0; bottom: 0;', 'left: 0; top: 0;', 'left: 0; bottom: 0'];
                var data = {
                    posWarp: posWarp[caseData.musicPosition],
                    music: caseData.music,
                    pos: pos[caseData.musicPosition]
                };
                var div = document.createElement('div');
                div.style.position = 'relative';
                div.style.zIndex = '9399';
                div.innerHTML = lib.simpleTemplate(data, html);

                document.querySelector('.liveApp').appendChild(div);

                //获取全局音频容器
                var $globalAudio = $('.u-globalAudio');
                var tempMusic = {};

                if($globalAudio.length){
                    //初始化全局音频对象
                    switch(caseData.musicStyle) {
                        case "1" :
                            tempMusic = new GlobalAudio2($globalAudio);
                        break;
                        case "2" :
                            tempMusic = new GlobalAudio3($globalAudio);
                        break;
                        default :
                            tempMusic = new GlobalAudio1($globalAudio);
                        break;
                    }
                    // 方法暴露出来
                    Music.prototype.play = function() {
                        tempMusic.play.call(tempMusic);
                    };

                    Music.prototype.pause = function() {
                        tempMusic.pause.call(tempMusic);
                    };
                }

                // 如果当前音乐没有音频和留言墙，则自动播放
                $(document.body).delegate('.page', 'over', function (e) {
                    // 当滑动到第一张的时候需要重置
                    if($(this).index() === 0) hasBeenTap = false;
                    if($(this).find('audio').length > 0 || hasBeenTap === true) {
                        musicIns.pause && musicIns.pause();

                        return;
                    }

                    musicIns.play && musicIns.play();
                });
            });
		},

		init: function () {
            this.componentLoad();
		}
	};

	return musicIns = new Music();
});