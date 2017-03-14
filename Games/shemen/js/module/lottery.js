define(function(require,exports,modules) {
    var App = {};
    var Level = 0;
    //电信抽奖模块
    App.init = function(){
        addEvent();
    }
    function addEvent(){
        //分享
        $('.btnShare').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "好友PK", "click", "", 1]);
            $('#pageShare').addClass('active');
        })
        $('#pageShare').on('click touchend',function(e){
            e.preventDefault();
            $('#pageShare').removeClass('active');
        })
        //关闭弹窗
        $('.icon-dialog-close').add('.icon-btn-close').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            $this.parents('.modal').removeClass('active');
        })
        //返回抽奖
        $('.btnBackLottery').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            _czc.push(["_trackEvent", "返回抽奖", "click", "", 1]);
            $this.parents('.modal').removeClass('active');
        })
        //会员服务条款
        $('.for-rule').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            _czc.push(["_trackEvent", "会员服务条款", "click", "", 1]);
            $('#pageMemberRule').addClass('active');
        })
        //取消
        $('.btnCancle').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            $this.parents('.modal').removeClass('active');
        })
        //话费、流量领取
        $('.btnGetNormalPrize').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this),
                $parent = $this.parents('.page-prize');
            var $phone = $parent.find('.phone');
            var phone = $phone.val().replace(/\s/g,'');
            if(phone==''){
                MZ.alert({content:"请输入手机号码"});
                return;
            }
            if(!/^1\d{10}$/.test(phone)){
                MZ.alert({content:"请输入正确的手机号码"});
                return;
            }
            var $code = $parent.find('.for-code');
            var code = $code.val().replace(/\s/g,'');
            var $codeFront = $this.parents('.page-prize').find('.codeFront');
            var codeFront = $codeFront.html();

            if(code==''){
                MZ.alert({content:"请输入验证码"});
                return;
            }
            if(code!=codeFront){
                MZ.alert({content:"验证码错误"});
                return;
            }
            if(Level==4){
                _czc.push(["_trackEvent", "10M流量确认提交领取", "click", "", 1]);
            }
            if(Level==5){
                _czc.push(["_trackEvent", "30M流量确认提交领取", "click", "", 1]);
            }
            if(Level==6){
                _czc.push(["_trackEvent", "10元三网话费确认提交领取", "click", "", 1]);
            }
            var loading = new MZ.loading({content:'提交请求中...'});
            var data = {prizeLevel:Level,phone:phone,fromWechat:IsWeiXin()};
            Zepto.ajax({
                type: "POST",
                url: apiPrefix+"getPrize",
                data:data,
                cache: false,
                success: function(data){
                     loading.hide();
                     if(data.success){
                        $parent.removeClass('active');
                        showDialog('prizeDialogOk');
                     }else{
                        MZ.alert({content:data.msg});
                     }
                },
                error:function(){
                    loading.hide();
                }
              })
        })
        //点击抽奖
        $("#btnLottery").on("click",function (e){
            if(LotteryNum==0){
                MZ.alert({content:'您的抽奖次数已用完'});
                return;
            }
            var loading = new MZ.loading({content:'抽奖中...'});
            _czc.push(["_trackEvent", "开始抽奖", "click", "", 1]);
            Zepto.ajax({
                type: "POST",
                url: apiPrefix+"lottery",
                data: {},
                cache: false,
                dataType:'json',
                success: function(data){
                    loading.hide();
                    if(data.success){
                        if(data.lotteryFlag==1){
                            Level = data.record.score;
                            lottery(data.record);
                            $('#lotterNum').html(data.lotteryNum);
                        }else{
                            $('#lotterNum').html(data.lotteryNum);
                            $('#pagePrizeNone').addClass('active');
                        }
                        LotteryNum = data.lotteryNum;
                    }else{
                        MZ.alert({content:data.msg});
                    }
                },
                error: function(){
                    loading.hide();
                }
            })
        })
    }
    function lottery(prize){
        /*
            {level: 1, prob: 10000, name: '爱音乐钻石会员'},
            {level: 2, prob: 10000, name: '唯品会'},
            {level: 3, prob: 10000, name: '买一送一券'},
            {level: 4, prob: 25, name: '10M三网流量'},
            {level: 5, prob: 10, name: '30M三网流量'},
            {level: 6, prob: 2, name: '10元话费'},
        */
        switch(Level) {
            case 1:
                //钻石会员
                $('#pagePrize05').addClass('active');
                break;
            case 2:
                //唯品会
                $('#pagePrize06').addClass('active');
                break;
            case 3:
                //买一送一券
                $('#pagePrize09').addClass('active');
                break;
            case 4:
                //10M三网流量
                $('#pagePrize02').find('.codeFront').html(getRandomCode());
                $('#pagePrize02').addClass('active');
                break;
            case 5:
                //30M三网流量
                $('#pagePrize03').find('.codeFront').html(getRandomCode());
                $('#pagePrize03').addClass('active');
                break;
            case 6:
                //10元话费
                $('#pagePrize07').find('.codeFront').html(getRandomCode());
                $('#pagePrize07').addClass('active');
                break;
            case 7:
                //5元话费
                $('#pagePrize01').find('.codeFront').html(getRandomCode());
                $('#pagePrize01').addClass('active');
                break;
            case 8:
                //30元话费
                $('#pagePrize07').find('.codeFront').html(getRandomCode());
                $('#pagePrize07').addClass('active');
                break;
        }
    }
    
    //音乐盒相关业务
    musicbox();
    function musicbox(){
        //音乐盒列表确认订购
        $('#btnToCrebtuser').on('click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "确认订购：音乐盒列表", "click", "", 1]);
            var imusicbox = document.getElementById('imusic');
            imusicbox.pause();
            if(!$('#btnMusic').hasClass('paused')){
                var music = document.getElementById('music');                  
                music.volume = 0.5;
                music.play();
            }
            $('#pagePrize04-1').addClass('active');
        })
        //判断是否开通彩铃
        $('#btnIsCrebtuser').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            var $phone = $this.parents('.page-prize').find('.phone');
            var phone = $phone.val().replace(/\s/g,'');
            if(phone==''){
                MZ.alert({content:"请输入手机号码"});
                return;
            }
            if(!/^(133|153|180|189|181|170|171|173|177|149)\d{8}$/.test(phone)){
                MZ.alert({content:"请输入天翼手机号码"});
                return;
            }
            var $code = $this.parents('.page-prize').find('.for-code');
            var code = $code.val().replace(/\s/g,'');
            if(code==''){
                MZ.alert({content:"请输入验证码"});
                return;
            }

            var loading = new MZ.loading({content:'提交请求中...'});
            $('#btnSubMusicBox').add('#btnCrbtuserOpen').attr({'phone':phone,'code':code});
            _czc.push(["_trackEvent", "判断是否开通彩铃", "click", "", 1]);
            Zepto.ajax({
                type: "POST",
                url: apiPrefix+"iscrbtuser",
                data:{phone:phone},
                cache: false,
                success: function(data){
                    loading.hide();
                    if(data.success){
                        var iscrbtuser = data.iscrbtuser;
                        if(iscrbtuser){
                            //已开通彩铃提示确认订购
                            showDialog('pageDialogMusicboxMakeSure');
                        }else{
                            //未开通彩铃提示是否开通
                            showDialog('prizeDialogCrbtuserNone');
                        }
                    }else{
                        MZ.alert({content:data.msg});
                    }
                },
                error:function(){
                    loading.hide();
                }
              })
        })
        //确认订购
        $('#btnSubMusicBox').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            var phone = $this.attr('phone'),
                code = $this.attr('code');
            _czc.push(["_trackEvent", "确认订购音乐盒", "click", "", 1]);
            var loading = new MZ.loading({content:'提交请求中...'});
            var data = {phone:phone,code:code,fromWechat:IsWeiXin()};
            log(data);
            Zepto.ajax({
                type: "POST",
                url: apiPrefix+"getMusicBox",
                data:data,
                cache: false,
                success: function(data){
                    loading.hide();
                 if(data.success){
                   showDialog('pageDialogMusicbox');
                 }else{
                    MZ.alert({content:data.msg});
                 }
                },
                error: function(){
                    loading.hide();
                }
              })
        })
        //确认开通彩铃业务
        $('#btnCrbtuserOpen').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            var phone = $this.attr('phone'),
                code = $this.attr('code');
            _czc.push(["_trackEvent", "确认开通彩铃业务", "click", "", 1]);
            var loading = new MZ.loading({content:'提交请求中...'});
            var data = {phone:phone,code:code,fromWechat:IsWeiXin()};
            log(data);
            Zepto.ajax({
                type: "POST",
                url: apiPrefix+"openCrbt",
                data:data,
                cache: false,
                success: function(data){
                 loading.hide();
                 if(data.success){
                    showDialog('prizeDialogCrbtuserOk');
                 }else{
                    MZ.alert({content:data.msg});
                 }
                },
                error: function(){
                    loading.hide();
                }
              })
        })
        //开通彩铃业务后确认订购
        $('#btnSubMusicBoxFromOpen').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            var $phone = $this.parents('.prize-dialog').find('.phone');
            var phone = $phone.val().replace(/\s/g,'');
            if(phone==''){
                MZ.alert({content:"请输入手机号码"});
                return;
            }
            if(!/^(133|153|180|189|181|170|171|173|177|149)\d{8}$/.test(phone)){
                MZ.alert({content:"请输入天翼手机号码"});
                return;
            }
            var $code = $this.parents('.prize-dialog').find('.for-code');
            var code = $code.val().replace(/\s/g,'');
            if(code==''){
                MZ.alert({content:"请输入验证码"});
                return;
            }
            _czc.push(["_trackEvent", "开通彩铃业务后确认订购", "click", "", 1]);
            $('#btnSubMusicBox').attr({'phone':phone,'code':code});
            showDialog('pageDialogMusicboxMakeSure');
        })
    }  

    //钻石会员业务相关
    member();
    function member(){
        //钻石会员业务开通
        $('#btnSubMember').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            var $phone = $this.parents('.page-prize').find('.phone');
            var phone = $phone.val().replace(/\s/g,'');
            if(phone==''){
                MZ.alert({content:"请输入手机号码"});
                return;
            }
            if(!/^(133|153|180|189|181|170|171|173|177|149)\d{8}$/.test(phone)){
                MZ.alert({content:"请输入天翼手机号码"});
                return;
            }
            var $code = $this.parents('.page-prize').find('.for-code');
            var code = $code.val().replace(/\s/g,'');
            if(code==''){
                MZ.alert({content:"请输入验证码"});
                return;
            }
            _czc.push(["_trackEvent", "订购钻石会员业务", "click", "", 1]);
            $('#btnSubMemberMakeSure').attr({'phone':phone,'code':code});
            showDialog('pageDialogMemberMakeSure');
        })
        //钻石会员业务确认开通
        $('#btnSubMemberMakeSure').on('click touchend',function(e){
            e.preventDefault();
            var $this = $(this);
            var phone = $this.attr('phone'),
                code = $this.attr('code');
            _czc.push(["_trackEvent", "确认订购钻石会员业务", "click", "", 1]);
            var loading = new MZ.loading({content:'提交请求中...'});
            var data = {phone:phone,code:code,fromWechat:IsWeiXin()};
            log(data);
            Zepto.ajax({
                type: "POST",
                url: apiPrefix+"getMember",
                data:data,
                cache: false,
                success: function(data){
                 loading.hide();
                 if(data.success){
                    showDialog('pageDialogMemberOk');
                 }else{
                    MZ.alert({content:data.msg});
                 }
                },
                error: function(){
                    loading.hide();
                }
              })
            
        })
    }
    
    //服务器验证码
    ServerRandomCode();
    function ServerRandomCode(){
        var Timer;
        $(document).delegate('.btnGtServerCode','touchend',function(e){
            var $this =$(this);
            if($this.hasClass('disable'))return;
            e.preventDefault();
            var $phone = $this.parents('.form-area').find('.phone');
            var phone = $phone.val().replace(/\s/g,'');
            if(phone==''){
                MZ.alert({content:"请输入手机号码"});
                return;
            }
            if(!/^(133|153|180|189|181|170|171|173|177|149)\d{8}$/.test(phone)){
                MZ.alert({content:"请输入天翼手机号码"});
                return;
            }
            Time = 60;
            var urlstr = '';
            if(Level==1){
                //钻石会员验证码
                urlstr = 'memberRandomCode';
                _czc.push(["_trackEvent", "钻石会员验证码", "click", "", 1]);
            }
            if(Level == 2){
                //音乐盒验证码
                urlstr = 'musicRandomCode';
                _czc.push(["_trackEvent", "音乐盒验证码", "click", "", 1]);
            }
            var loading = new MZ.loading({content:'发送中...'});
            Zepto.ajax({
                url: apiPrefix+urlstr,
                type: 'post',
                data: {phone:phone},
                dataType: 'json',
                cache: false,
                success: function(data){
                    loading.hide();
                    if(data.success){
                        $this.text('60秒');
                        $this.addClass('disable');
                        Timer = setInterval(countDown,1000);
                    }else{
                        MZ.alert({content: data.msg});
                    }
                },
                error: function(){
                 loading.hide();
                 MZ.alert({content: '发送出错，请重新尝试'});
                }
            })
        })
        var Time = 60;
        function countDown(){
            if(Time>0){
                Time--;
                $('.btnGtServerCode').text(Time+'秒');
            }else{
                Time = 60;
                clearInterval(Timer);
                $('.btnGtServerCode').text('获取验证码').removeClass('disable');
            }
        }
    }
    
    //显示提示框
    function showDialog(name){
        var $pagePrizeDialog = $('#pagePrizeDialog');
        $pagePrizeDialog.addClass('active');
        $pagePrizeDialog.find('.prize-dialog').hide();
        $('#'+name).show();
    }

    //前端验证码
    function getRandomCode(){
        var num = parseInt(Math.random()*9)+""+parseInt(Math.random()*9)+""+parseInt(Math.random()*9)+""+parseInt(Math.random()*9);
        return num;
    }

    function IsWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }

    //音乐盒列表
    musicboxPlay();
    function musicboxPlay(){
        var imusicbox = document.getElementById('imusic');
        $(document).delegate('.icon-spause','click touchend',function(e){
            e.preventDefault();
            _czc.push(["_trackEvent", "播放曲单歌曲", "click", "", 1]);
            var $this = $(this),
                $parent =  $this.parent('li');
            if($this.hasClass('icon-splay')){
                if(!$('#btnMusic').hasClass('paused')){
                    var music = document.getElementById('music');                  
                    music.volume = 0.5;
                    music.play();
                }
                imusicbox.pause();
            }else{
                imusicbox.src = $parent.attr('data-url');
                setTimeout(function(){
                    $this.parents('ul').find('.icon-splay').removeClass('icon-splay').addClass('icon-spause');
                    $this.removeClass('icon-spause').addClass('icon-splay');
                },200)
                var music = document.getElementById('music');                  
                music.volume = 0.5;
                music.pause();
                imusicbox.play();
            }
        })
        $(document).delegate('.icon-splay','click touchend',function(e){
            _czc.push(["_trackEvent", "暂停播放曲单歌曲", "click", "", 1]);
            e.preventDefault();
            var $this = $(this),
                $parent =  $this.parent('a');
            imusicbox.pause();
            if(!$('#btnMusic').hasClass('paused')){
                var music = document.getElementById('music');                  
                music.volume = 0.5;
                music.play();
            }
            setTimeout(function(){
                $this.removeClass('icon-splay').addClass('icon-spause');
            },200)
        })
    }    
    function getSongs(){
        var loading = new MZ.loading({content:'加载曲单中...'});
        Zepto.ajax({
            type: "POST",
            url: apiPrefix+"songs",
            cache: false,
            success: function(data){
             loading.hide();
             if(data.success){
                /*var songs = [
                    {url:'http://wapst.imuapp.cn/res/V/1013/mp3/00/14/30/1013001430050800.mp3',music:'演员(薛之谦)'},
                    {url:'http://wapst.imuapp.cn/res/V/1688/mp3/50/05/97/1688500597040800.mp3',music:'问明月(青丘狐传说主题曲)(郁可唯)'},
                    {url:'http://wapst.imuapp.cn/res/V/2027/mp3/50/01/14/2027500114040800.mp3',music:'走着走着就散了(庄心妍)'},
                    {url:'http://wapst.imuapp.cn/res/V/2130/mp3/50/82/62/2130508262040800.mp3',music:'恋人心(魏新雨)'},
                    {url:'http://wapst.imuapp.cn/res/V/2130/mp3/50/82/62/2130508262040800.mp3',music:'Always(太阳的后裔插曲)(尹美莱)'}
                ]*/
                var songs = data.data;
                var str='';
                for(var i in songs){
                    var item = songs[i];
                    str+='<li data-url="'+item.url+'"><span class="cicon icon-spause"></span>'+item.song+'</li>'
                }
                $('.musiclist ul').html(str);
             }else{
                MZ.alert({content:data.msg});
             }
            },
            error: function(){
                loading.hide();
            }
          })
    }
    modules.exports = App;
    
});

