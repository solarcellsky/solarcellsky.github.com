var preload, siteResources, $ltxt = $('.l-txt'),
    enabledScroll = false;
$.getJSON('js/resources.json', function(json) {
    siteResources = json;
    loadEvent({
        queue: siteResources.site,
        complete: function(e) {
            loadMain();

        },
        progress: function(e) {
            $ltxt.text(parseInt(e.progress * 99) + '%');
        }
    });
});

function loadMain() {
    $.get('main.html', function(data) {
        $('#slider-wrap').html(data);
        setvar();
        lovarv.init();
        $('.loading').fadeOut('300', function() {
            $(this).remove();
        });
    });

}

function loadEvent(obj) {
    preload = new createjs.LoadQueue();
    preload.on("complete", obj.complete, this);
    preload.on("progress", obj.progress, this);
    preload.loadManifest(obj.queue);
}

function setvar() {
    $guideLayer = $('.game-guide');
    $guide = $guideLayer.children('.guide');
    $gameBoxPage = $('#game').children('.page');
    $gamebox = $('#gamebox');
    $result = $('.result');
    $gameContainer = $('#game-container');
    $gameLoad = $('.game-load');
    $gameLoadlt = $gameLoad.find('.lt');
    $gameCountText = $('.game-count').find('span');
    $gameCountImg = $('.game-count').find('sub').children('img');
    $share = $('.share-guide');
    $gameInfoPage = $('.game-info');
    $addpage = $('.add-page');
    $gameRnakPage = $('.game-rank');
    $gameCountdownPage = $('.game-countdown');
    $gameCountdownText = $('.game-countdown p');
    $rankList = $('.rank-list .items');
    $unlocked = $('.unlocked');
    $bgm = $('#bgm');
    $sfx = $('#sfx');
    $leftBtn = $('.left-layer');
    $rightBtn = $('.right-layer');
    $touchLayer = $('.touch-layer');
    gameEn = ['A', 'B', 'C'];
    hylink.setTestdriveClickEvent("Mobile端-乐风RV童真游戏H5-奔赴现场-提交试驾", "奔赴现场", "点击", "提交试驾"); //如果不定义，不会tracking Event
    hylink.setTestdriveSuccessPV("Mobile端-乐风RV童真游戏H5-奔赴现场-提交试驾成功"); //如果不定义，不会tracking 此PV，一般只用定义mz的pv值，ga默认PV定义为/testdrive-success
}



lovarv = window.lovarv || {};
lovarv.game = 1;
lovarv.openGame = 4; //开放游戏的数量
lovarv.currGame = 0;
lovarv.$slider = $('#slider-wrap');
lovarv.canvasWith = 640;
lovarv.canvasHeight = 1008;
lovarv.score = 0;

lovarv.init = function() {
    // lovarv.sliderPage(2);
    lovarv.setSwiper();
    lovarv.bindEvent();
    lovarv.setGameStage();
    
    $('body').on('touchmove', function(event) {
        if (!enabledScroll) {
            event.preventDefault();
        };
    });
    hylink.trackPV('Mobile端-乐风RV童真游戏H5-home', '/home');
  
    // lovarv.game = 3;
    // lovarv.sliderPage(2);
    // lovarv.showGameBox();
    // lovarv.loadResources();

};


lovarv.sliderPage = function(n, callback) {
    var y = (n - 1) * -10 + '%';
    var speed = 1000;
    // lovarv.$slider.animate({
    //     translateY: y
    // }, speed, 'ease', function() {
    //     if (callback) callback();
    // });
    // 
    lovarv.$slider.one('webkitTransitionEnd', function(event) {
        if (callback) {
            callback();
        }
    }).css('-webkit-transform', 'translateY(' + y + ')');

};





lovarv.setSwiper = function() {
    lovarv.swiper = new Swiper('.game-list .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        initialSlide: 1,
        coverflow: {
            rotate: 0,
            stretch: 105,
            depth: 300,
            modifier: 1,
            slideShadows: false
        }
    });
    lovarv.swiperEvent();


};
lovarv.swiperEvent = function() {
    var $dates = $unlocked.find('.date');

    $('.swiper-slide').on('click', function(event) {
        var i = parseInt($(this).data('index'));
        if (i > lovarv.openGame) {
            $unlocked.fadeIn(300);
            $dates.hide();
            $dates.eq(i - 2).show();
        } else {
            lovarv.game = i;
            lovarv.showGuide();
        };
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-选择-游戏' + gameEn[i - 1], '选择', '点击', '游戏' + gameEn[i - 1]);
    });

};
lovarv.showGuide = function() {
    lovarv.hide($gameBoxPage.eq(0));
    $guide.removeClass('show-guide');
    lovarv.show($guideLayer);
    $guide.eq(lovarv.game - 1).addClass('show-guide');
    hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn(), 'game' + lovarv.getGameEn());
    $share.attr('class', 'share-guide share-guide-' + lovarv.game);

};
lovarv.showGameBox = function() {
    lovarv.hide($gameBoxPage);
    lovarv.show($gameLoad);
    lovarv.show($gamebox);
};

lovarv.reselect = function() {
    var index;
    lovarv.hide($gameBoxPage);
    lovarv.show($gameBoxPage.eq(0));
    lovarv.swiper.update(true);
    if (lovarv.game == 1) {
        index = 0;
    } else if (lovarv.game == 2) {
        index = 2;
    } else {
        index = 1;
    };
    lovarv.swiper.slideTo(index, 0, false);


};
lovarv.hide = function(o) {
    o.css('display', 'none');
};
lovarv.show = function(o) {
    o.css('display', 'block');
};

lovarv.setGameStage = function() {
    lovarv.Gstage = new createjs.Stage("gameStage");
    // createjs.Touch.enable(lovarv.Gstage);

};
lovarv.updateStage = function() {
    lovarv.Gstage.update();
    tm.tickerEvent();


};
lovarv.ticker = function() {
    // createjs.Ticker.FPS = 10;
    createjs.Ticker.addEventListener("tick", lovarv.updateStage);
};
lovarv.stopTicker = function() {
    createjs.Ticker.removeEventListener("tick", lovarv.updateStage);
};

lovarv.destroyGmae = function() {
    lovarv.Gstage.removeAllChildren();
    lovarv.Gstage.update();
};
lovarv.loadResources = function() {

    var resources = null;
    lovarv.show($gameLoad);
    switch (lovarv.game) {
        case 1:
            resources = siteResources.GameAqueue;
            break;
        case 2:
            resources = siteResources.GameBqueue;
            break;
        case 3:
            resources = siteResources.GameCqueue;
            break;
    };
    loadEvent({
        queue: resources,
        complete: function(e) {
            lovarv.initGame();
            lovarv.hide($gameLoad);
            lovarv.show($gameCountdownPage);
            if (lovarv.game == 1) {
                shake.startShake();
            } else {
                lovarv.setCountdown();
            }
        },
        progress: function(e) {
            $gameLoadlt.text(parseInt(e.progress * 99) + '%');
        }
    });
    lovarv.showCountdown();
};
lovarv.showCountdown = function() {
    $gameBoxPage.removeClass('game-count-2 game-count-3');
    if (lovarv.game == 1) {
        $gameCountdownPage.addClass('game-countdown-mode-tip');
    } else {
        $gameCountdownPage.removeClass('game-countdown-mode-tip');
        $gameCountdownText.text(3);
        $gameBoxPage.addClass('game-count-' + lovarv.game);

    };
    lovarv.show($gameCountdownPage);
    $gameCountText.text(0);
};

lovarv.setCountdown = function() {
    var n = 3;
    var countdown = setInterval(function() {
        n -= 1;
        $gameCountdownText.text(n);
        if (n < 0) {
            clearInterval(countdown);
            lovarv.hide($gameCountdownPage);
            if (lovarv.game == 2) {
                game_th.play();
                hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第一页', '/game' + lovarv.getGameEn() + '-no1');
            } else {
                tm.startGame();
                hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第一页', '/game' + lovarv.getGameEn() + '-no1');
            };
            lovarv.sound($bgm, 'music-game');
        };

    }, 1000);

};

lovarv.setGmae = function() {
    if (lovarv.game != lovarv.currGame) {
        lovarv.destroyGmae();
    };
    lovarv.loadResources();
};
lovarv.initGame = function() {
    if (lovarv.game == lovarv.currGame) {
        lovarv.resetGmae();
    } else {
        lovarv.selectGame();
    }
    lovarv.currGame = lovarv.game;

};

lovarv.selectGame = function() {
    if (lovarv.game == 1) {
        tl.init();
    } else if (lovarv.game == 2) {
        game_th.init();
    } else if (lovarv.game == 3) {
        tm.init();
    };
    lovarv.ticker();
};

lovarv.resetGmae = function() {
    if (lovarv.game == 1) {
        tl.resetGame();
    } else if (lovarv.game == 2) {
        lovarv.destroyGmae();
        game_th.init();
    } else if (lovarv.game == 3) {
        tm.resetGame();
    };
};
lovarv.showResult = function() {
    var result = $result.eq(lovarv.game - 1);
    setTimeout(function() {
        lovarv.hide($gameBoxPage);
        lovarv.show($gameBoxPage.eq(2));
        lovarv.show($gameBoxPage.eq(5));
        $result.removeClass('show-result');
        result.addClass('show-result');
        lovarv.stopTicker();
        // result.find('.show-info-btn,.btn-box').hide();
        // if (lovarv.game == lovarv.openGame) {
        //     result.find('.show-info-btn').show();
        // } else {
        //     result.find('.btn-box').show();
        // }
        hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第二页', '/game' + lovarv.getGameEn() + '-no2');
    }, 900);

    $bgm[0].pause();
    lovarv.sound($sfx, 'gameover', function() {
        lovarv.sound($bgm, 'music-bg');
    });
    result.find('.title h3 b').text(parseInt(lovarv.score));
};

lovarv.showRank = function(data) {
    lovarv.setRank(data.data)
    lovarv.hide($gameInfoPage);
    lovarv.show($gameRnakPage);
    enabledScroll = false;
    hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '玩成榜单', '/game' + lovarv.getGameEn() + '-ranking-list');

    // lovarv.hide($gamebox);


};
lovarv.setRank = function(data) {
    var str = '',
        max = data.length - 1;
    last = data[max];
    unit = ['圈', '米', '个'];
    for (var i = 0; i < max; i++) {
        str += '<div class="item"><span>' + data[i].rank + '</span><span>' + data[i].mobile + '</span><span>' + parseInt(data[i].points) + unit[lovarv.game - 1] + '</span></div>'
    };
    $rankList.html(str);
    if (last.rank > max) {
        $rankList.append('<div class="item bg-item"><span>' + last.rank + '</span><span>' + last.mobile + '</span><span>' + parseInt(last.points) + unit[lovarv.game - 1] + '</span></div>');
    } else {
        $rankList.children('.item').eq(last.rank - 1).addClass('bg-item')
    }


};
lovarv.aginEvent = function() {
    lovarv.reselect();

};
lovarv.getGameEn = function() {
    var game = gameEn[lovarv.game - 1];
    return game;

};


lovarv.bindEvent = function() {
    $('.deft').on('click', function(event) {
        lovarv.sliderPage(2, function() {
            $bgm[0].play();
            $('#main').empty();
            hylink.trackPV('Mobile端-乐风RV童真游戏H5-选择', '/choice');
        });
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-home-别怀疑', 'home', '点击', '别怀疑');
    });
    $unlocked.on('click', function(event) {
        $(this).fadeOut('300');

    });
    $guide.find('.btn1').on('click', function(event) {
        lovarv.reselect();
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '-回去重选', '游戏' + lovarv.getGameEn(), '点击', '回去重选');

    });

    $guide.find('.btn2').on('click', function(event) {
        lovarv.showGameBox();
        lovarv.setGmae();
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '-出手', '游戏' + lovarv.getGameEn(), '点击', '出手');
    });
    $guide.find('.btn3').on('click', function() {
        lovarv.showTotalRank();        
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '-查看榜单', '游戏' + lovarv.getGameEn(), '点击', '查看榜单');
 
    });

    $('.total-rank .start-game-btn').on('click', function(event) {
        lovarv.showGameBox();
        lovarv.setGmae();
        lovarv.sound($sfx);
        lovarv.hide($('.total-rank'));
        // hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '-出手', '游戏' + lovarv.getGameEn(), '点击', '出手');
    });

    /*add page */
    $('.show-page-add').on('click', function(event) {
        lovarv.hide($('.game-result'));
        lovarv.show($addpage);
        lovarv.sound($sfx, 'btn');
         /*enabledScroll = true;
          */

        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第二页-争当小玩主', '游戏' + lovarv.getGameEn() + '第二页', '点击', '争当小玩主');
        setTimeout(function() {
            hylink.trackPV('MoCile端-乐风RV童真游戏H5-活动页面', '/activity');
        }, 100)

        // lovarv.reselect();
    });
    $('.show-page-add_tow').on('click', function(event) {
        lovarv.hide($gameRnakPage);
        lovarv.show($addpage);
        lovarv.sound($sfx, 'btn');
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '玩成榜单-争当小玩主', '游戏' + lovarv.getGameEn() + '玩成榜单', '点击', '争当小玩主');
        setTimeout(function() {
            hylink.trackPV('MoCile端-乐风RV童真游戏H5-活动页面', '/activity');
        }, 100)
        /*enabledScroll = true;
         lovarv.sound($sfx, 'btn');

        */

        // lovarv.reselect();
    });



    $('.show-info-btn').on('click', function(event) {
        lovarv.hide($('.game-result'));
        lovarv.show($gameInfoPage);
        enabledScroll = true;
        lovarv.sound($sfx, 'btn');
        //Mobile端-乐风RV童真游戏H5-游戏A第二页-参加榜单
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第二页-参加榜单', '游戏' + lovarv.getGameEn() + '第二页', '点击', '参加榜单');
        setTimeout(function() {
            hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第三页', '/game' + lovarv.getGameEn() + '-no3');
        }, 100)

        // lovarv.reselect();
    });
    $('.agin-btn').on('click', function(event) {
        lovarv.reselect();
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '玩成榜单-我不服', '游戏' + lovarv.getGameEn() + '玩成榜单', '点击', '我不服');
    });

    $('#testdrive .back-btn').on('click', function(event) {
        lovarv.sliderPage(2);
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-奔赴现场-返回', '奔赴现场', '点击', '返回');

    });
    $('.show-testderive').on('click', function(event) {
        lovarv.sliderPage(3, function() {
            hylink.trackPV('Mobile端-乐风RV童真游戏H5-奔赴现场', '/testdrive');
        });
        lovarv.hide($gamebox);
        lovarv.sound($sfx, 'btn');
        hylink.trackEvent('MoCile端-乐风RV童真游戏H5-活动页面-奔赴现场', '活动页面', '点击', '奔赴现场');


    });
    $('.show-share-guide').on('click', function(event) {
        $share.fadeIn(300, function() {
            hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '分享', 'game' + lovarv.getGameEn() + '-share');
        });
        lovarv.sound($sfx, 'btn');
        hylink.trackEvent('MoCile端-乐风RV童真游戏H5-活动页面-通知小伙伴', '活动页面', '点击', '通知小伙伴');
    });

    $share.on('click', function(event) {
        $(this).fadeOut(300);
    });
    $('.show-rank-btn').on('click', function(event) {
        var _this = $(this);
        if (_this.hasClass('active')) return;
        var tel = $('#infotel').val();
        if (!hylink.checkMobile(tel)) {
            alert('请输入正确的手机号码');
        } else {
            _this.addClass('active');
            $.post('game_getrank.aspx', {
                type: lovarv.game,
                mobile: tel,
                point: lovarv.score
            }, function(data) {
                if (data.status == 'suc') {
                    $('#infotel').val('');
                    lovarv.showRank(data);
                } else {

                };
                _this.removeClass('active')
            }, 'json');
        }
        lovarv.sound($sfx);
        hylink.trackEvent('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第三页-查看排名', '游戏' + lovarv.getGameEn() + '第三页', '点击', '查看排名');

    });


    $('#submit').on('submit', function(event) {
        event.preventDefault();
        var _this = $(this);
        if (_this.hasClass('active')) return;
        var inputs = _this.find('input');
        var realName = inputs.eq(0).val();
        var mobile = inputs.eq(1).val();
        if (realName == '') {
            alert('请输入真实姓名');
        } else if (!hylink.checkMobile(mobile)) {
            alert('请输入正确的手机号码');
        } else {
            _this.addClass('active');
            hylink.testdrive(function(obj) {
                if (obj.status == "suc") { //status的值有"suc", "fal", "err"三种
                    alert('提交成功');
                    inputs.val('');
                } else {
                    // console.log("申请试驾失败, 原因: " + obj.msg);
                }
                _this.removeClass('active');
                return false; //也可以不用写return. 如果返回true, 则中止默认tracking。
            }, realName, mobile, "乐风");
        };
        lovarv.sound($sfx);
    });
};

lovarv.showTotalRank = function() {
    $.post('game_getrank.aspx', {
    //$.post('http://mobiletest.chevrolet.com.cn/act/lovarv/2015game/game_getrank.aspx', {
        action: 'onlyrank',
        type: lovarv.game
    }, function(data) {
        if (data.status == 'suc') {
            var str = '',
                datas = data.data,
                max = datas.length,
            unit = ['圈', '米', '个'];
            for (var i = 0; i < max; i++) {
                str += '<div class="item"><span>' + datas[i].rank + '</span><span>' + datas[i].mobile + '</span><span>' + parseInt(datas[i].points) + unit[lovarv.game - 1] + '</span></div>'
            };
            $('.total-rank-list .items').html(str);
            lovarv.show($('.total-rank'));
        } else {

        };
    }, 'json');

};



lovarv.sound = function(o, audio, callback) {
    if (audio) o.attr('src', 'sound/' + audio + '.mp3');
    if (callback) {
        o.one('ended', function() {
            callback();
        });
    };
    o[0].play();
};


var tl = window.tl || {};
tl.mc = null;
tl.toufa = null;
tl.shijuan = null;
tl.isRender = false;
tl.data = null;
tl.spriteSheet = null;
tl.max = 0;
tl.count = 0;
tl.init = function() {
    $('#gameStage').attr({
        'width': '640',
        'height': '1008'
    });
    tl.initContainer();
    $gameCountImg.attr('src', preload.getResult('images/tuoluo/quan.png').src);

};
tl.initContainer = function() {
    lovarv.Gcontainer = new createjs.Container();
    var bg = new createjs.Bitmap(preload.getResult('images/tuoluo/bg.jpg'));
    tl.tf = new createjs.Bitmap(preload.getResult('images/tuoluo/toufa.png'));
    tl.sj = new createjs.Bitmap(preload.getResult('images/tuoluo/shijuan.png'));
    tl.tf.x = 59;
    tl.tf.y = 203;
    tl.sj.regX = 95;
    tl.sj.regY = 92;
    tl.sj.rotation = -450;
    tl.sj.x = -189;
    tl.sj.y = -200;
    lovarv.Gcontainer.addChild(bg);
    lovarv.Gcontainer.addChild(tl.tf);
    lovarv.Gcontainer.addChild(tl.sj);
    tl.getGyroData();
    lovarv.Gstage.addChild(lovarv.Gcontainer);

};
tl.sjIn = function() {
    createjs.Tween.get(tl.sj).to({
        x: 580,
        y: 270,
        rotation: 0
    }, 800).wait(800).to({
        x: 900,
        y: -100,
        rotation: -200
    }, 500);
};
tl.tfOut = function() {
    createjs.Tween.get(tl.tf).to({
        x: -148,
        y: 100,
        rotation: -320
    }, 800);
};

tl.getGyroData = function() {
    if (tl.data == null) {
        $.getJSON('js/tl.json', function(json) {
            tl.data = json;
            tl.setGyro();
        });
    } else {
        tl.setGyro();
    }
};
tl.setGyro = function() {
    tl.data.images[0] = preload.getResult('images/tuoluo/tl.png').src;
    var spriteSheet = new createjs.SpriteSheet(tl.data);
    tl.spriteSheet = new createjs.Sprite(spriteSheet, 'intro');
    tl.spriteSheet.y = lovarv.canvasHeight - 601;
    tl.spriteSheet.x = (lovarv.canvasWith - 576) * 0.5;

    tl.spriteSheet.stop(0);

    tl.spriteSheet.addEventListener('animationend', function(e) {
        if (tl.count == tl.max) {
            tl.stopGame();
            if (e.next == 'stop') {
                tl.spriteSheet.gotoAndStop(0);
            }
        } else {
            tl.count += 1;
            $gameCountText.text(tl.count);
            if (tl.count == parseInt(lovarv.score / 1.5)) {
                tl.tfOut();
            } else if (tl.count == parseInt(lovarv.score / 5)) {
                tl.sjIn();
            }

        }
    });
    lovarv.Gcontainer.addChild(tl.spriteSheet);
}
tl.stopGame = function() {
    tl.spriteSheet.gotoAndPlay('stop');
    lovarv.showResult();

};
tl.resetGame = function() {
    $gameCountText.text(0);
    lovarv.Gcontainer.removeChild(tl.spriteSheet);
    tl.setGyro();
    tl.count = 0;
    tl.tf.x = 59;
    tl.tf.y = 203;
    tl.tf.rotation = 0;
    tl.sj.rotation = -450;
    tl.sj.x = -189;
    tl.sj.y = -200;
    lovarv.ticker();
};




tl.startGame = function(round) {
    tl.max = lovarv.score = round;
    tl.spriteSheet.play();
    lovarv.hide($gameCountdownPage);
    lovarv.sound($bgm, 'music-game');
    hylink.trackPV('Mobile端-乐风RV童真游戏H5-游戏' + lovarv.getGameEn() + '第一页', '/game' + lovarv.getGameEn() + '-no1');

};


var tm = window.tm || {};
tm.cloudMaxPos = [-166, -90, -166];
tm.cloudInitPos = [650, 1000, 1500];
tm.isplay = false;
tm.moveSpeed = 4;
tm.isJump = false;
tm.getPoint = false;
tm.speed = [6,8];

tm.init = function() {

    tm.boyData = {
        "images": [preload.getResult('images/tiaoma/boy.png').src],
        "frames": [
            [1, 1, 127, 186, 0, -12, 0],
            [130, 1, 147, 181, 0, 0, -5],
            [279, 1, 120, 172, 0, -19, 0],
            [401, 1, 138, 168, 0, -2, -4],
            [541, 1, 144, 165, 0, -14, -6]
        ],
        "animations": {
            "run":{
                "frames": [0, 1, 2, 3],
                "speed":0.1
            },
            "run2":{
                "frames": [0, 1, 2, 3],
                "speed":0.2
            },
            "run3":{
                "frames": [0, 1, 2, 3],
                "speed":0.3
            },

            "jump":{
                "frames": [4],
            }
        }
    };
    $gameCountImg.attr('src', preload.getResult('images/tiaoma/ge.png').src);
    tm.initContainer();
    $('#gameStage').attr({
        'width': '640',
        'height': '1008'
    });
};
tm.initContainer = function() {
    lovarv.Gcontainer = new createjs.Container();
    tm.bgCon = new createjs.Container();
    var bg = new createjs.Bitmap(preload.getResult('images/tiaoma/bg.jpg'));
    var bg2 = new createjs.Bitmap(preload.getResult('images/tiaoma/bg.jpg'));
    bg2.x = 640;

    var title = new createjs.Bitmap(preload.getResult('images/tiaoma/title.png'));
    title.x = 255;
    title.y = 39;

    var graphics = new createjs.Graphics().beginFill("#f55353").drawRect(0, 596, 640, 412);
    var shape = new createjs.Shape(graphics);
    lovarv.Gcontainer.addChild(shape);

    graphics = new createjs.Graphics().beginFill("#f88787").drawRect(0, 596, 640, 2);
    var line = new createjs.Shape(graphics);
    lovarv.Gcontainer.addChild(line);
    graphics = new createjs.Graphics().beginFill("#f88787").drawRect(0, 666, 640, 2);
    line = new createjs.Shape(graphics);
    lovarv.Gcontainer.addChild(line);

    tm.cloud1 = new createjs.Bitmap(preload.getResult('images/tiaoma/yun-1.png'));
    tm.cloud2 = new createjs.Bitmap(preload.getResult('images/tiaoma/yun-2.png'));
    tm.cloud3 = new createjs.Bitmap(preload.getResult('images/tiaoma/yun-3.png'));
    tm.cloud1.x = tm.cloudInitPos[0];
    tm.cloud2.x = tm.cloudInitPos[1];
    tm.cloud3.x = tm.cloudInitPos[2];
    tm.bgCon.addChild(bg);
    tm.bgCon.addChild(bg2);
    lovarv.Gcontainer.addChild(tm.bgCon);
    lovarv.Gcontainer.addChild(tm.cloud1);
    lovarv.Gcontainer.addChild(tm.cloud2);
    lovarv.Gcontainer.addChild(tm.cloud3);
    lovarv.Gcontainer.addChild(title);

    tm.setJumpBtn();
    tm.setBoy();

    lovarv.Gstage.addChild(lovarv.Gcontainer);

};
tm.setCloudsPos = function(n) {
    // var x = parseInt(Math.random() * 300*n) + 640;
    var y = parseInt(Math.random() * 150) + 30;
    tm['cloud' + n].x = tm.cloudInitPos[n - 1];
    tm['cloud' + n].y = y;
};
tm.setBoy = function() {
    var spriteSheet = new createjs.SpriteSheet(tm.boyData);
    tm.boy = new createjs.Sprite(spriteSheet, 'run');
    tm.boy.x = 170;
    tm.boy.y = 470;
    for (var i = 1; i < 4; i++) {
        tm.setCloudsPos(i);
    };
    tm.boy2 = new createjs.Bitmap(preload.getResult('images/tiaoma/boy2.png'));
    tm.boy2.y = 530;
    tm.setBoyPos();
    tm.boy.stop();
    lovarv.Gcontainer.addChild(tm.boy2);
    lovarv.Gcontainer.addChild(tm.boy);

};

tm.setBoyPos = function(){
    var x = parseInt(Math.random() * 1000) + 640;
    tm.boy2.x = x;
};

tm.setJumpBtn = function() {
    var data = {
        images: [preload.getResult('images/tiaoma/jump.png').src],
        frames: {
            width: 131,
            height: 223
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    tm.jump = new createjs.Sprite(spriteSheet);
    tm.jump.y = 710;
    tm.jump.x = 257;
    lovarv.Gcontainer.addChild(tm.jump);
    $('.jump-btn').on('touchstart', function() {
        if(tm.isJump || !tm.isplay) return;
        tm.jump.gotoAndStop(1);
        tm.jumpBoy();
    }).on('touchend', function() {
        tm.jump.gotoAndStop(0);
    });

};
tm.jumpBoy = function() {
    tm.isJump = true;
    tm.boy.gotoAndStop('jump');
    tm.boy.tween = createjs.Tween.get(tm.boy).to({
        y: 300
    }, (1500 / tm.moveSpeed)).wait(1800 / tm.moveSpeed).to({
        y: 470
    }, (1000 / tm.moveSpeed)).call(function() {
        if (tm.moveSpeed == 4) {
            tm.boy.gotoAndPlay('run');
        } else if (tm.moveSpeed == tm.speed[0]) {
            tm.boy.gotoAndPlay('run2');

        } else if (tm.moveSpeed == tm.speed[1]) {
            tm.boy.gotoAndPlay('run3');
        }
        tm.isJump = false;
        if(tm.getPoint){
            lovarv.score +=1;
            $gameCountText.text(lovarv.score);
            tm.getPoint = false;
            if (lovarv.score == 5) {
                tm.setSpeed(tm.speed[0])
            }else if(lovarv.score == 10){
                tm.setSpeed(tm.speed[1]);
            }
        }
    });
    lovarv.sound($sfx);

};

tm.cloudMove = function() {
    var max = 4,
        x;
    for (var i = 1; i < max; i++) {
        x = tm['cloud' + i].x;
        if (x <= tm.cloudMaxPos[i - 1]) {
            tm.setCloudsPos(i);
        };
        tm['cloud' + i].x -= 0.5;
    };
};
tm.boyMove = function(){
    var x = tm.boy2.x;
    x -= tm.moveSpeed*1.4;
    if(x <= -134){
        tm.setBoyPos();
    }else{
        tm.boy2.x = x;
    }

};
tm.bgMove = function() {
    var x = tm.bgCon.x;
    x -= tm.moveSpeed;
    if(x <= -640){
        x = 0;
    };
    tm.bgCon.x = x;

};
tm.tickerEvent = function() {
    if (!tm.isplay) return;
    tm.cloudMove();
    tm.bgMove();
    tm.boyMove();
    tm.checkFail();
};

tm.setSpeed = function(speed) {
    if(speed == tm.speed[0]){
        tm.boy.gotoAndPlay('run2');
    }else if(speed == tm.speed[1]){
        tm.boy.gotoAndPlay('run3');
    }
    tm.moveSpeed = speed;


};
tm.checkFail = function() {
    var x = tm.boy2.x;
    var y = tm.boy.y;
    if ((x < 250 && x > 70)) {
        if (y > 400) {
            tm.stopGmae();

        } else {
            tm.getPoint = true;
            // console.log('sucess')
        };
    };
};


tm.startGame = function() {
    lovarv.score = 0;
    createjs.Ticker.setFPS(60)
    tm.isplay = true;
    tm.boy.gotoAndPlay('run');
    $sfx.attr('src', 'sound/jump.mp3');
    // tm.bgMove();

};
tm.stopGmae = function() {
    tm.isplay = false;
    if(tm.boy.tween){
         tm.boy.tween.setPaused(true);
    }
    tm.boy.gotoAndStop(0);
    createjs.Ticker.setFPS(24);
    lovarv.showResult();

};
tm.resetGame = function() {
    tm.bgCon.x = 0;
    tm.setBoyPos();
    tm.boy.y = 470;
    for (var i = 1; i < 4; i++) {
        tm.setCloudsPos(i)
    };
    tm.moveSpeed = 4;
    tm.isJump = false;
    lovarv.ticker();

};
