define(function(require,exports,modules) {

    var MZGame  = require('module/game');
    var Lottery  = require('module/lottery');
    var App = {};
    Lottery.init();
    MZGame.init();
    //初始化游戏入口
    App.init = function(){
        window.onload = function(){
            function orientationChange() {
                if (window.orientation == 90 || window.orientation == -90) {
                    $('#pageRotate').show();
                } else {
                    $('#pageRotate').hide();
                }
            }
            orientationChange();
            window.onresize = orientationChange;

        }
        addEvent();
    }
    function addEvent(){
        $(document).on('touchmove',function(e){
            if(!$('#pageMemberRule').hasClass('active') && !$('#pageRule').hasClass('active')){
                e.preventDefault();
            }
        })
        //广告链接
        $('#btnAd').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "结束页广告链接", "click", 'startup', 1]);
            setTimeout(function(){
                location.href = 'http://m.118100.cn/imapp/1577';
            },200)
        })
        //活动规则
        $('.btnLinkRule').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "活动规则", "click", 'startup', 1]);
            $('#pageRule').addClass('active');
        });
        $('.lastOpacity').on('webkitAnimationEnd',function(e){
            $(this).css('opacity',1);
        });
        //点击弹出选择人物
        $('#btnStartSelect').on('click touchend',function(e){
            e.preventDefault();
            $('#pageIndex').fadeOut();
            $('#pageGame').fadeIn();
            MZGame.playGame();
            _czc.push(["_trackEvent", "首页开始按钮", "click", 'startup', 1]);
            $('#pageSelectPerson').addClass('active');
        })
        //关闭引导页
        $('.gift').add('.round').add('.icon-hand').on('touchend',function(e){
            e.preventDefault();
            $('.round').add('.icon-hand').hide();
            $('.gift').addClass('down');
            setTimeout(function(){
                $('#pageGameLeadin').fadeOut();
            },800)
        })
        var Page = 0;
        //选择人物
        $('#btnLeft').on('click touchend',function(e){
            e.preventDefault();
            if(Page<=0){
                Page = 3;
                $('.select-list').css({'-webkit-transform':'translateX(-30rem)'});
            }else{
                Page--;
                $('.select-list').css({'-webkit-transform':'translateX(-'+Page*10+'rem)'});
            }
        })
        $('#btnRight').on('click touchend',function(e){
            e.preventDefault();
            if(Page>=3){
                Page = 0;
                $('.select-list').css({'-webkit-transform':'translateX(0rem)'});
            }else{
                Page++;
                $('.select-list').css({'-webkit-transform':'translateX(-'+Page*10+'rem)'});
            }
        })
        var StartX = 0,
            EndX = 0;
        $('.select-list').on({
            touchstart: function(e) {
               StartX = e.touches[0].clientX;
               EndX = 0;
               e.preventDefault();
            },
            touchmove: function(e) {
                EndX = e.touches[0].clientX;
                e.preventDefault();
            },
            touchend: function(e) {
               if(EndX==0)return;
               if(StartX-EndX>40){
                if(Page>=3){
                    Page = 0;
                    $('.select-list').css({'-webkit-transform':'translateX(0rem)'});
                }else{
                    Page++;
                    $('.select-list').css({'-webkit-transform':'translateX(-'+Page*10+'rem)'});
                }
               }
               if(StartX-EndX<40){
                if(Page<=0){
                    Page = 3;
                    $('.select-list').css({'-webkit-transform':'translateX(-30rem)'});
                }else{
                    Page--;
                    $('.select-list').css({'-webkit-transform':'translateX(-'+Page*10+'rem)'});
                }
               }
           }
        })
        //歌单链接
        $('#btnLinkMusic').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "歌单链接", "click", 'startup', 1]);
            setTimeout(function(){
                location.href = 'http://iting.music.189.cn:9103/shareweb/shareweb.html?sid=240143847&resId=102340246&protocolCode=2.0&resType=34&type=3';
            },500)
        })
        //选择球员进场
        $('#btnStartPlay').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "进入球场", "click", 'startup', 1]);
            $('#pageSelectPerson').removeClass('active');
            $('#pageGameLeadin').addClass('active');
        })
        $('#pageGameLeadin').on('click touchend',function(e){
            e.preventDefault();
            $('#pageGameLeadin').removeClass('active');
            MZGame.setPlay(true,Page+1);
        })
        //不服再战
        $('.btnReplay').on('click touchend',function(e){
            e.preventDefault();
            $('.page-prize').removeClass('active');
            $(this).parents('.modal').removeClass('active');
            _czc.push(["_trackEvent", "不服再战", "click", 'startup', 1]);
            MZGame.restart();
            $('.icon-arrow').fadeIn();
            setTimeout(function(){
                $('.icon-arrow').fadeOut();
            },3000)
        })
        //领礼物        
        $('#btnToGetPrize').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "领礼物", "click", 'startup', 1]);
            $('#pageLottery').addClass('active');
        })
        //音乐控制
        var music = document.getElementById('music');
        $('#btnMusic').on('touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            if($this.hasClass('paused')){
                $this.removeClass('paused');
                _czc.push(["_trackEvent", "播放音乐", "click", 'startup', 1]);
               music.play();
            }else{
                $this.addClass('paused');
                _czc.push(["_trackEvent", "关闭音乐", "click", 'startup', 1]);
               music.pause();
            }
        })
    }
    
    modules.exports = App;
    
});