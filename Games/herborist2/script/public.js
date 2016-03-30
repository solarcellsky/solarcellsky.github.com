var xxEvents = ('ontouchstart' in window) ? { start: 'touchstart', move: 'touchmove', end: 'touchend'} : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };
var _xx = _xx || {
	sound:{}
};
_xx.bgMp3 = function () {
    //背景音乐
    var btn = $('#js_musicBtn'),
    	oMedia = $('#media')[0];
    btn.on(xxEvents.start, function (e) {
        if (oMedia.paused) {
            oMedia.play();
        } else {
            oMedia.pause();
        }
        e.preventDefault();
    });
    oMedia.load();
    oMedia.play();
    if (oMedia.paused) {
        $('.wrapper').one(xxEvents.start, function (e) {
            oMedia.play();
            e.preventDefault();
        });
    };
    $(oMedia).on('canplay', function () {
        _xx.sound=new Sound();
    });
    $(oMedia).on('play', function () {
        btn.addClass('musicPlay');
    });
    $(oMedia).on('pause', function () {
        btn.removeClass('musicPlay');
    });
}
;(function ($) {
    var defaults = {
        classIn: 'moveIn',
        classOut: 'moveOut',
        onClass:'page-on',
        complete: function () { }
        // CALLBACKS
    };
    $.fn.moveIn = function (options) {
        var options = $.extend({},defaults, options);
        this.addClass(options.classIn).show();
        this.one('webkitAnimationEnd', function () {
            $(this).removeClass(options.classIn).addClass(options.onClass);
            options.complete();
        });
        return this;
    }
    $.fn.moveOut = function (options) {
        var options = $.extend({},defaults, options);
        this.addClass(options.classOut).show();
        this.one('webkitAnimationEnd', function () {
            $(this).removeClass(options.classOut+' '+options.onClass).hide();
            options.complete();
        });
        return this;
    }
})(jQuery);
_xx.hint=function(text){
    //提示层
    var box=$('#js_hint');
    box.html(text).moveIn();
    if(box[0].timer) {
        clearTimeout(box[0].timer);
    }
    box[0].timer=setTimeout(function(){
        box.moveOut();
    },2000);
}
function Page(){
	//页面跳转控制
	var _this=this;
	var pNow=null,pLast=null,z=2;
	_this.to=function(toPage,complete){
		pLast=pNow;
		pNow=toPage;
		if(pNow==pLast) return;
		z++;
		$(pNow).css('zIndex',z).moveIn({
			complete:function(){
				if(complete) complete();
				$(pLast).hide().removeClass('page-on');
			}
		});
	}
	_this.init=function(toPage,complete){
		pLast=pNow;
		pNow=toPage;
		$(pNow).css('zIndex',z).show();
		setTimeout(function(){
			if(complete) complete();
			$(pNow).addClass('page-on');
		},50);
	}
}
function Sound(){
    //添加音效
    var _this=this;
    var soundNum=2;
    _this.sound_add=[];
    _this.sound_cut=[];
    for(var i=0;i<soundNum;i++){
        _this.sound_add[i]=new Audio();
        _this.sound_add[i].src="sound/add.mp3";
        _this.sound_add[i].load();
    }
    for(var k=0;k<soundNum;k++){
        _this.sound_cut[k]=new Audio();
        _this.sound_cut[k].src="sound/cut.mp3";
        _this.sound_cut[k].load();
    }
    _this.play=function(Type){
        var audio;
        if(Type=='add') audio=_this.sound_add;
        if(Type=='cut') audio=_this.sound_cut;
        for(var i=0;i<soundNum;i++){
            if(audio[i].paused){
                audio[i].play();
                break;
            }
        }
    }
}
function Game(){
    var _this=this;
    var oCanvas=$('#canvas')[0];
    var w=640,h=1020;

    var stage=new createjs.Stage(oCanvas);
    createjs.Touch.enable(stage);
    stage.preventSelection=false;
    canvas.width=w;
    canvas.height=h;

    //###绘制场景及元素####
    var $time_p=$('#tm-progress')[0],
        $time=$('#tm-time'),
        $score_p=$('#sc-progress')[0],
        $score=$('#sc-score'),
        $part=$('#part img'),
        $winBox=$('#win>div'),
        $gMsg=$('#g_msg');
    var box=[],//容器,
    	boxOk=[],//可添加的容器
        boxNum=6;//容器个数
    //容器1
    var container=new createjs.Container();
    container.y=210;
    //门
    var doorSheet = new createjs.SpriteSheet({
        images:[$('#g_door')[0]],
        frames: {width:280, height:214, count:2},
        animations:{
            colse:0,
            open:1
        }
    });
    var door=new createjs.Sprite(doorSheet,'colse');
    door.name='door';
    //角色
    var roleSheet = new createjs.SpriteSheet({
        images:[$('#g_role')[0]],
        frames: {width:210, height:210, count:8},
        animations:{
            hs:0,
            hh:1,
            lf:2,
            sf:3,
            hs_d:4,
            hh_d:5,
            lf_d:6,
            sf_d:7,
        }
    });
    var role=new createjs.Sprite(roleSheet);
    role.set({x:140,y:182,opacity:0,scaleX:0.5,scaleY:0.5,regX:105,regY:210,name:'role'});

    //得分
    var scoreSheet= new createjs.SpriteSheet({
        images:[$('#g_score')[0]],
        frames: {width:130, height:120, count:3},
        animations:{
            add1:0,
            add3:1,
            minus1:2,
        }
    });
    var eScore=new createjs.Sprite(scoreSheet);
    eScore.set({regX:65,regY:60,x:230,y:40,opacity:0,scaleX:0.5,scaleY:0.5,name:'score'});

    var eClick=new createjs.Bitmap($('#g_click')[0]);
    eClick.set({regX:45,regY:40,x:120,y:170,opacity:0,scaleX:2,scaleY:2,name:'click'});

    for(var i=0;i<boxNum;i++){
        box[i]=new createjs.Container();
        box[i].x=40+i%2*280;
        box[i].y=40+parseInt(i/2)*214;

        box[i].addChild(door.clone());
        container.addChild(box[i]);
        box[i].on('click',detection);

        boxOk.push(i);
    };
    stage.addChild(container);
    //游戏关卡,总时间,初始时间,时间定时器,清除tick的定时器,分数,最高分数,tick添加角色标示,添加角色间隔
    var part=1,time,iTime,timer,tickTimeout,score,maxScore,tickMark,tickGap;
    _this.init=function(p){
        //@p游戏关卡
        if(p) part=p;
        $part.hide();
        $winBox.hide();
        if(part==1){
            $part.eq(0).show();
            $winBox.eq(0).show();
            maxScore=50;
            time=iTime=45;
            $gMsg.html('<h2>第一关</h2><p>闯关时间:'+iTime+'秒</p>');
        }else if(part==2){
            $part.eq(1).show();
            $winBox.eq(1).show();
            maxScore=50;
            time=iTime=30;
            $gMsg.html('<h2>第二关</h2><p>闯关时间:'+iTime+'秒</p>');
        }
        score=0;
        tickGap=0;
        $time.html(time);
        $score.html(score);
        $time_p.style.webkitTransform='translate(100%,0)';
        $score_p.style.webkitTransform='translate(0%,0)';
        $('#startBtn span').html(maxScore);
        $('#start-box').show();
    }
    //计算得分比例
    function countRatio(){
        var ret={};
        var k=Math.round(Math.random()*100);
        var a,b,c;

        //第一次玩 得分比例 皇上:皇后:丽妃:淑妃=10:30:30:30
        a=10,b=40,c=70;

        if(part==2){
        	//第二次玩 得分比例 皇上:皇后:丽妃:淑妃=30:10:30:30
        	a=30,b=40,c=70;
        }

        if(k<a){
            ret.score=-1;
            ret.name='hs';
        }else if(k<b){
            ret.score=3;
            ret.name='hh';
        }else if(k<c){
            ret.score=1;
            ret.name='lf';
        }else{
            ret.score=1;
            ret.name='sf';
        }
        return ret;
    }
    //创建定时器
    function createTimer(){
        clearInterval(timer);
        timer=setInterval(runTimer,1000);
    }
    function runTimer(){
        time--;
        if(time<0){
            _this.gameOver();
            if(part==1){
            	$('#alert-t1,#alert-t2').hide();
                $('#alert-t1').show();
            }
            if(part==2){
            	$('#alert-t1,#alert-t2').hide();
                $('#alert-t2').show();
            }
            $('#alert').show();
            return;
        };
        $time_p.style.webkitTransform='translate('+time/iTime*100+'%,0)';
        $time.html(time);
    }
    //开门
    function openDoor(){
        var ind=Math.floor(Math.random()*boxOk.length);
        var nowDoor=boxOk[ind];
        if(!nowDoor&&nowDoor!=0) return;
        boxOk.splice(ind,1);

        var oDoor=box[nowDoor].getChildByName('door');
        oDoor.gotoAndPlay('open');
        addRole(nowDoor);
    }
    //关门
    function closeDoor(n){
        var oDoor=box[n].getChildByName('door');
        oDoor.gotoAndPlay('colse');
        boxOk.push(n);
    } 
    //添加角色
    function addRole(n){
        var crRet=countRatio(),
            adRole=role.clone();
        adRole.gotoAndPlay(crRet.name);
        adRole.score=crRet.score;
        //wait()角色出来后停留的时间
        adRole.Move=createjs.Tween.get(adRole,{override: true})
            .to({alpha:1,scaleX:1,scaleY:1}, 200,createjs.Ease.cubicOut)
            .wait(400)
            .to({alpha:0,scaleX:0.5,scaleY:0.5}, 200,createjs.Ease.cubicIn)
            .call(function(){
                box[n].removeChild(adRole);
                closeDoor(n);
            });
        box[n].addChild(adRole);
    }
    //点击检测
    function detection(a){
        var deBox=a.currentTarget;
        var deRole=deBox.getChildByName('role');
        if(!deRole) return;
        deRole.name=null;
        deRole.Move.setPaused(true);
        deRole.gotoAndPlay(deRole.currentAnimation+'_d');
        var de_addScore=deRole.score;

        //添加动画
        var deScore=eScore.clone(),
            deClick=eClick.clone();
        switch(de_addScore){
            case 1:
                //加分
                deScore.gotoAndPlay('add1');
                _xx.sound.play('add');
                break;
            case 3:
                //加分
                deScore.gotoAndPlay('add3');
                _xx.sound.play('add');
                break;
            case -1:
                //减分
                deScore.gotoAndPlay('minus1');
                _xx.sound.play('cut');
                break;
        }
        createjs.Tween.get(deScore)
            .to({alpha:1,scaleX:1,scaleY:1}, 200,createjs.Ease.cubicOut)
            .wait(300)
            .to({alpha:0,scaleX:0.5,scaleY:0.5}, 200,createjs.Ease.cubicIn)
            .call(function(){
                deBox.removeChild(deScore);
            });
        createjs.Tween.get(deClick)
            .to({alpha:1,scaleX:1,scaleY:1}, 200,createjs.Ease.cubicOut)
            .to({alpha:0}, 200,createjs.Ease.cubicIn)
            .call(function(){
                deBox.removeChild(deClick);
            });
        deBox.addChild(deScore,deClick);
        
        score+=de_addScore;
        var score_p=score/maxScore*100;
        if(score_p>100) score_p=100;
        $score_p.style.webkitTransform='translate('+score_p+'%,0)';
        $score.html(score);
        if(score>=maxScore){
            //过关
            _this.gameOver();
            $('#win').moveIn();
            localStorage.setItem('scene','two');
        }
        //setTimeout点击后停留的时间
        setTimeout(function(){
            deRole.Move.setPaused(false);
        },400);

    }

    _this.start=function(){
        $('#start-box').hide();
        clearTimeout(tickTimeout);
        createTimer();
        tickMark=true;
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", tick);

        if(part==1){
            _smq.push(['custom','index1','开始游戏1']);
        }
        if(part==2){
            _smq.push(['custom','index2','开始游戏2']);
        }
    }
    _this.gameOver=function(){
        tickMark=false;
        clearInterval(timer);
        tickTimeout=setTimeout(function(){
            createjs.Ticker.removeEventListener("tick", tick);
        },2000);
    }
    function tick(e){
    	//每500ms添加一次角色
        if(e.timeStamp-tickGap>500&&tickMark){
            openDoor();
            tickGap=e.timeStamp;
        }        
        stage.update();
    }
    stage.update();
    //####添加事件
    //游戏开始
    $('#startBtn').on(xxEvents.start,function(e){
        _this.start();
        e.preventDefault();
    });
    $('#bslj').on(xxEvents.start,function(e){
        //不玩了领奖
        _xx.userCheck();
        _smq.push(['custom','index1','不玩了']);
        e.preventDefault();
    });
    $('#g_complete').on(xxEvents.start,function(e){
        //通关领奖
        _xx.userCheck();
        _smq.push(['custom','index','领奖品']);
        e.preventDefault();
    });
    $('#colse').on(xxEvents.start,function(){
        //关闭领奖 重新开始游戏
        $('#p_form,#p_complete,#prize').hide();
        if(part==1){
            $('#win').show();
        }
        if(part==2){
        	_this.init();	
        }
    });
    $('#continue').on(xxEvents.start,function(e){
        //继续第二关
        _this.init(2);
        $('#win').moveOut();
        _smq.push(['custom','index1','下一关']);
        e.preventDefault();
    });
    $('#al_btn li:eq(0)').on(xxEvents.start,function(e){
    	$('#alert').hide();
    	if(part==1){
    		_xx.page.to('#index');
    	}
    	if(part==2){
    		_this.init();
    	}
    	e.preventDefault();
    });
    $('#al_btn li:eq(1)').on(xxEvents.start,function(e){
    	$('#alert').hide();
    	if(part==1){
    		_this.init();
    	}
    	if(part==2){
    		_xx.userCheck();
    	}
    	e.preventDefault();
    });
}
_xx.f_complete=function(msg){
    var $con=$('#p_complete .pb-con');
    $con.hide();
    if(msg.RandomPrize && msg.CommonPrize){//随机奖品、固定奖品
        $con.show();
        $con.eq(0).find('.pr-prize').html(msg.CommonPrize);
        $con.eq(1).find('.pr-prize').html(msg.RandomPrize);
    }else if(msg.CommonPrize){//固定奖品
        $con.eq(0).show();
        $con.eq(0).find('.pr-prize').html(msg.CommonPrize);
    }else if(msg.RandomPrize){//随机奖品
        $con.eq(1).show();
        $con.eq(1).find('.pr-prize').html(msg.RandomPrize);
    }else {
        _xx.hint("奖品都已经被抢完了！");
    }
    $('#p_form').hide();
    $('#p_complete').show();
    _share_prizeMark=true;
}
_xx.userCheck=function() {
    //信息核对
    $('#p_complete').hide();
    $('#p_form').show();
    $('#win').hide();
    $('#prize').moveIn();
    return;
    //不用每次都填写信息
    $.ajax({
        type: "POST",
        url: "Common/Lottery.aspx",
        dataType: "json",
        beforeSend: function () {
            $('#loading').moveIn();
        },
        success: function (msg) {
            $('#p_form,#p_complete').hide();
            if(msg.status==1){
                //已填写信息 直接显示结果
                _xx.f_complete(msg);
                $('#win').hide();
                $('#prize').moveIn();
            }else if(msg.status==0){
                //未填写信息
                $('#p_complete').hide();
                $('#p_form').show();
                $('#win').hide();
                $('#prize').moveIn();
            }else{
                _xx.hint('数据错误！');
            }
        },
        complete: function () {
            $('#loading').moveOut();
        }
    });
}
_xx.pageFn=function(){
    //页面功能
    function submit(){
        var name=$('#name').val(),
            tel=$('#tel').val();
        if(!name){
            _xx.hint('请输入姓名!');
            return;
        }
        if(!tel){
            _xx.hint('请输入手机号码!');
            return;
        }
        if(!/^1[3|4|5|7|8]\d{9}$/.test(tel)){
            _xx.hint('手机号码格式不正确!');
            return;
        }
        $.ajax({
            type: "POST",
            url: "Common/Lottery.aspx",
            data: {name:name,tel:tel},
            dataType: "json",
            beforeSend: function () {
                $('#loading').moveIn();
            },
            success: function (msg) {
                if(msg.status==1){
                    //成功
                    $('#fxwc').attr("data-uaddress",msg.uAddress);
                    _xx.f_complete(msg);
                }else if(msg.status==-3){
                    alert('对不起，您已经领取过了');
                }else{
                    _xx.hint('数据错误！');
                }
            },
            complete: function () {
                $('#loading').moveOut();
            }
        });
    }
    $('#submit').on(xxEvents.start,function(e){
        submit();
        e.preventDefault();
    });
}
_xx.imgLoad2Mark=true;
_xx.imgLoad2 = function () {
    //图片预加载2
    if(!_xx.imgLoad2Mark) return;
    _xx.imgLoad2Mark=false;
    var aImg = $('img[_src2]');
    var _length = aImg.length;
    for (var i = 0; i < _length; i++) {
        aImg[i].src = aImg.eq(i).attr('_src2');
    }
}
_xx.imgLoad = function () {
    var aImg = $('img[_src]'),
        loadPor = $('#loadPor');
    var _length = aImg.length;
    var progress = 0;
    for (var i = 0; i < _length; i++) {
        aImg[i].src = aImg.eq(i).attr('_src');
    }
    aImg.on('load', function () {
        progress++;
        loadPor.html(Math.ceil(progress / _length * 100));
        if (progress == _length) {
            setTimeout(function () {
                main();
                $('#page_loading').moveOut();
            }, 500);
            _xx.map3=_xx.bgMp3();          
        }
    });
}
function main(){
    _xx.page=new Page();//创建page对象
    _xx.page.init('#index');
    _xx.game=new Game();
    _xx.pageFn();

    $('#p2_btn').on(xxEvents.start,function(e){
        _xx.game.init();
        _xx.page.to('#game');
        _smq.push(['custom','scene','娘娘我来了']);
        e.preventDefault();
    });
    $('#rule_btn').on(xxEvents.start,function(e){
        $('#rule').moveIn();
        _smq.push(['custom','scene','活动规则']);
        e.preventDefault();
    });
    $('#rule').on(xxEvents.start,function(e){
        $(this).moveOut();
        e.preventDefault();
    });
    $('#shareBtn').on(xxEvents.start,function(e){
        $('#share').moveIn();
        _smq.push(['custom','share','邀请好友']);
        e.preventDefault();
    });
    $('#share').on(xxEvents.start,function(e){
        $(this).moveOut();
        e.preventDefault();
    });
    $('#in-btn').on(xxEvents.start,function(e){
        _xx.page.to('#p2');
        _xx.imgLoad2();
        _smq.push(['custom','scene','下一页']);
        e.preventDefault();
    });
    $('#fxwc a').on('click',function(e){
        //……ajax 统计次数
        var uAddress=$('#fxwc').data("uaddress");
        if (uAddress) {
                $.ajax({
                type: "POST",
                url: "Common/Lottery.aspx",
                data: {uAddress:uAddress},
                dataType: "json",
                beforeSend: function () {
                    $('#loading').moveIn();
                },
                success: function (msg) {
                    if(msg.status==1 || msg.status==-3){
                        //已填写信息 直接显示结果
                        window.location.href="http://b.wepiao.com/hongbao/index.html?pid=%02%3C%FAY%19%EEH-&channelid=3&chid=100";
                        e.preventDefault();
                    }else{
                        _xx.hint('数据错误！')
                    }
                },
                complete: function () {
                    $('#loading').moveOut();
                }
            });
        }
    });
}