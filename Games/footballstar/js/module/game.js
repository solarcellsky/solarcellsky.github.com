define(function(require, exports,modules) {
    var Loading = require('./loading');
    var Stage = {},
        W, H;
    var W = 640,
        H = window.innerHeight,
        IS_TOUCH;
    function layout(){
        var canvas = JCGame.stage.canvas,
        winW = window.innerWidth,
        winH = window.innerHeight;
        //winW / winH > W / H ? winW = W * winH / H: winH = H * winW / W;
        canvas.width = W;
        canvas.height = winH;
        canvas.style.position = 'absolute';
        canvas.style.display = 'block';
        canvas.style.left = '50%';
        canvas.style.bottom = '0';
        canvas.style.marginLeft = "-5rem";
        canvas.style.width =  "10rem";
        canvas.style.height = H/64+"rem";
        //canvas.style.background = "rgba(255,255,255,0.3)";
        //canvas.style.top = (window.innerHeight-winH)/2+"px";
    }
    var JCGame = (function(obj){
        obj.score = 0;
        obj.isOver = false;
        obj.canPlay = false;
        obj.getResult = function(a) {
            return Loading.getResult(a)
        };
        obj.init = function(){
            var $$Img = {
                path: '',
                res : {
                    gamebg: "images/gamebg.jpg",
                    manWhite: "images/man-white.png",
                    man1: "images/man1.png",
                    man2: "images/man2.png",
                    man3: "images/man3.png",
                    man4: "images/man4.png",
                    sprite1: "images/sprite1.png",
                    sprite2: "images/sprite2.png",
                    sprite3: "images/sprite3.png",
                    sprite4: "images/sprite4.png",
                    round: "images/round.png",
                    bottomBar: "images/bottom-bar.png",
                    coffee: "images/coffee.png",
                    footerball: "images/footerball.png",
                    imusic: "images/imusic.png",
                    person2: "images/person1.png",
                    person2: "images/person2.png",
                    person2: "images/person3.png",
                    person2: "images/person4.png",
                    win: "images/win.png",
                    pcoffee: "images/pcoffee.png",
                    pimusic: "images/pimusic.png",
                    round: "images/round.png"
                }
            }
            obj.stage = new createjs.Stage("game");
            createjs.Ticker.on("tick", function(){
                obj.stage.update();
            });
            //给舞台对象初始化加载界面并加载资源，成功加载后执行回调函数
            Loading.init(obj.stage,function(){
                /*obj.playGame();
                obj.setPlay(true,1);*/
                HasLoadRes = true;
            });
            if (IS_TOUCH = createjs.Touch.isSupported()) {
                createjs.Touch.enable(obj.stage, !0);
                obj.stage.mouseEnabled = !1;
            }
            Loading.loadImg($$Img,$('#progressNum'),function(){
                $('#pageIndex').addClass('animatein');
                $('.loading').fadeOut();
                $('#btnMusic').add('#page-logo').fadeIn(); 
                var music = document.getElementById('music');                  
                music.volume = 0.5;
                if(/micromessenger/i.test(navigator.userAgent.toLowerCase())){
                  wx.ready(function(){
                    music.play();
                  })
                }else{
                  music.play();
                }
            })
            setTimeout(layout, 100);
            Stage = obj.stage;
            W = 640;
            H = window.innerHeight;
        }
        obj.setPlay = function(play,person){
            obj.canPlay = play;
            obj.person = person;
            $('.icon-arrow').fadeIn();
            setTimeout(function(){
                $('.icon-arrow').fadeOut();
            },3000)
            obj.vPlayer = new JCStage.vPlayer;
            obj.vPersonImg = new JCStage.vPersonImg;
            obj.vWin = new JCStage.vWin;           
            Stage.addChild(obj.vPlayer,obj.vPersonImg,obj.vWin);

            obj.paopao1 = new JCStage.vPaoPao('imusic'); 
            obj.paopao2 = new JCStage.vPaoPao('coffee'); 
            var r1 = Math.random()*1>0.5?-1:1;
            obj.paopao1.x = Math.random()*300*r1;
            var r2 = Math.random()*1>0.5?-1:1;
            obj.paopao1.y = -(H-800)+Math.random()*100*r2;
            var r3 = Math.random()*1>0.5?-1:1;
            obj.paopao2.x = Math.random()*300*r3;
            var r4 = Math.random()*1>0.5?-1:1;
            obj.paopao2.y = -(H-500)+Math.random()*100*r4;
            Stage.addChild(obj.paopao1,obj.paopao2);
        }
        //开始游戏
        obj.playGame = function(replay) {
            obj.score = 0;
            obj.vBg = new JCStage.vBg; 
            Stage.addChild(obj.vBg);
        };
        //开始新一轮进球
        obj.restart = function(){
            obj.score = 0;
            obj.isOver = false;  
            JCGame.paopao1.reset();
            JCGame.paopao2.reset();
            var r1 = Math.random()*1>0.5?-1:1;
            JCGame.paopao1.x = Math.random()*300*r1;
            var r2 = Math.random()*1>0.5?-1:1;
            JCGame.paopao1.y = -(H-800)+Math.random()*100*r2;
            var r3 = Math.random()*1>0.5?-1:1;
            JCGame.paopao2.x = Math.random()*300*r3;
            var r4 = Math.random()*1>0.5?-1:1;
            JCGame.paopao2.y = -(H-500)+Math.random()*100*r4;          
            obj.vPlayer.x = obj.vPlayer.y = 0;
        }
        //游戏结束
        obj.gameover = function() {
            $('#score').html(obj.score);
            if(obj.score<3){
                $('#resultText').html('拿出你真正的水平吧！骚年！');
            }else if(JCGame.score==3){
                $('#resultText').html('帽子戏法你都会！潜力无限啊！！');
            }else if(obj.score>3){
                $('#resultText').html('球场巨星非你莫属！');
            }
            MZ.wechat.init({
             title: TITLE,
             desc: '我在球赛中踢入'+obj.score+'个球！有如神来之力，不愧为冉冉升起的足球之星！不服来战啊啊啊~~~',
             link: LINKSTR,
             imgUrl: ICONSTR
          })
            $('#pageGameover').addClass('active');
        };
        return obj;
    })(JCGame || {})

    var JCStage = (function(obj){
        //游戏首页视图
        obj.vStart = function(){
            this.initialize();
            this.x = this.y = 0;
        };
        //游戏背景
        obj.vBg = function(){

            var background = new createjs.Bitmap(JCGame.getResult('gamebg'));
                background.y = 0;
            background.x = (W - background.getBounds().width)/2;
            var round = new createjs.Bitmap(JCGame.getResult('round'));
                round.y = H - 150;
            round.x = (W - round.getBounds().width)/2;
            var bottomBar = new createjs.Bitmap(JCGame.getResult('bottomBar'));
                bottomBar.y = H - 105;
            bottomBar.x = (W - bottomBar.getBounds().width)/2;
            var man1 = new obj.vEnermy;
                man1.x = -200;
                man1.y = -(H-332);
            var man2 = new obj.vEnermy;
                man2.x = 200;
                man2.y = -(H-332);
            var man3 = new obj.vEnermy;
                man3.x = 0;
                man3.y = -(H-532);
            var man4 = new obj.vEnermy;
                man4.x = -200;
                man4.y = -(H-752);
            var man5 = new obj.vEnermy;
                man5.x = 200;
                man5.y = -(H-752);
            this.addChild(background,round,bottomBar,man1,man2,man3,man4,man5);

            var score1 = new createjs.Text('0',' 80px Arial','#FFF100');
            score1.x = 145;
            score1.y = H - 87;
            var score2 = new createjs.Text('0',' 80px Arial','#FFF100');
            score2.x = 455;
            score2.y = H - 87;
            this.addChild(score1,score2);
            //this.addChild(background,round,man1,man2,man3,man4,man5);
            this.on('tick',function(){
                score1.text = JCGame.score;
            })
        }
        obj.vEnermy = function(){
            this.initialize();
            var man = new createjs.Bitmap(JCGame.getResult('manWhite'));
                man.y = H - 200;
            man.x = (W - man.getBounds().width)/2;
            this.addChild(man);
            var _this = this;
            var X,Y,hasSet =false;
            var lasttime = new Date().getTime();
            this.on('tick',function(){
                if(JCGame.isOver)return;
                if(!JCGame.canPlay)return;
                if(!hasSet){
                   X = _this.x;
                   Y = _this.y; 
                   hasSet = true;
                }
                if(new Date().getTime()-lasttime>1000){
                    lasttime = new Date().getTime();
                    var x = parseInt(Math.random()*120);
                    var y= parseInt(Math.random()*120);
                    x = Math.random()>0.5?-x:x;
                    y = Math.random()>0.5?-y:y;
                    createjs.Tween.get(_this).to({x:X+x,y:Y+y},1000);
                }
                var player = JCGame.vPlayer;
                var x1 = player.x ==0 ? 1:player.x;
                var y1 = player.y ==0 ? 1:player.y;
                var x2 = _this.x ==0 ? 1:_this.x;
                var y2 = _this.y ==0 ? 1:_this.y+60;
                var calX = x2 - x1;        
                var calY = y2 - y1;
                var r = Math.pow((calX * calX + calY * calY), 0.5);  
                //$('#log').html(r).show();
                if(r<40){
                    JCGame.isOver = true;
                    JCGame.gameover();
                }
            })
        }
        obj.vPaoPao = function(paoImg){
            this.initialize();
            var random = Math.random()*1;
            var paopao = new createjs.Bitmap(JCGame.getResult("p"+paoImg));
                paopao.y = H - 200;
            paopao.x = (W - paopao.getBounds().width)/2;
            this.type = paoImg;
            this.paopao = paopao;
            this.addChild(paopao);
            var paoTips = new createjs.Bitmap(JCGame.getResult(paoImg));
                paoTips.y = H - 300;
            paoTips.alpha = 0;
            paoTips.x = (W - paoTips.getBounds().width)/2;
            this.addChild(paoTips);
            var _this = this;
            var X,Y,hasSet=false;
            this.reset = function(){
                paopao.alpha = 1;
                paoTips.alpha = 0;
                _this.alpha = 1;
            }
            this.on('tick',function(){
                if(JCGame.isOver)return;
                if(!JCGame.canPlay)return;
                if(!hasSet){
                   X = _this.x;
                   Y = _this.y; 
                   hasSet = true;
                }
                createjs.Tween.get(_this,{loop:true}).to({y:Y+20},1000).to({y:Y},1000);
                var player = JCGame.vPlayer;
                var x1 = player.x ==0 ? 1:player.x;
                var y1 = player.y ==0 ? 1:player.y;
                var x2 = _this.x ==0 ? 1:_this.x;
                var y2 = _this.y ==0 ? 1:_this.y+60;
                var calX = x2 - x1;        
                var calY = y2 - y1;
                var r = Math.pow((calX * calX + calY * calY), 0.5);  
                //$('#log').html("x1:"+parseInt(x1)+"-x2:"+parseInt(x2)+"..."+"y1:"+parseInt(y1)+"-"+"y2:"+parseInt(y2)).show();
                if(x1+80>x2 && x1<x2+60 && y1<y2+70 && y1>y2-140){
                   paopao.alpha = 0;
                    createjs.Tween.get(paoTips).to({alpha:1},700).to({alpha:0},100).call(function(){
                        _this.alpha = 0;
                    })
                }
            })
        }
        obj.vPersonImg = function(){
            this.initialize();
            var person = new createjs.Bitmap(JCGame.getResult('person'+JCGame.person));
                person.y = H - 105;
                person.x = 10;
            this.addChild(person);
        }
        //玩家
        obj.vPlayer = function(){
            this.initialize();
            var man = new createjs.Bitmap(JCGame.getResult('man'+JCGame.person));
                man.y = H - 260;
            man.x = (W - man.getBounds().width)/2;
            var footerball = new createjs.Bitmap(JCGame.getResult('footerball'));
                footerball.y = H - 130;
            footerball.scaleX = footerball.scaleY = 0.85;
            footerball.x = (W - footerball.getBounds().width)/2+40;
            this.addChild(footerball,man);
            this.man = man;

            var ssW = 110,ssH = 173;
            var data = new createjs.SpriteSheet({
                "images": ["images/sprite"+JCGame.person+".png"],
                "frames": {"regX": 0, "regY": 0, "height": ssH, "width": ssW, "count": 2},      
                "animations": {"run": [0, 1,'run', 0.2],"stand":[0]}
            });
            var _this = this;
            _this.manRun = new createjs.Sprite(data);
            _this.manRun.x = 300;
            _this.manRun.y = H - 173;    
            _this.manRun.regX = 30;
            _this.manRun.regY = 88;
            _this.manRun.alpha = 0;
            _this.addChild(_this.manRun);
            _this.manRun.gotoAndPlay('run');   
            var gravity = { x: 0, y: 1 };
            function move(){
                if(!JCGame.canPlay) return;
                if(JCGame.isOver) return;
                var gx = parseInt(gravity.x),
                    gy = parseInt(gravity.y);
                var x = parseInt(gravity.x),
                    y = parseInt(gravity.y);
                if(MZ.browser.isIos){
                    var posX = 5,
                        posY = 5;
                }else{
                    var posX = 10,
                        posY = 10;
                }
                if(x!=1){
                    _this.manRun.alpha = 1;
                }
                if(x > 0 && x != 1){
                    if(_this.x<270){
                        man.alpha = footerball.alpha = 0;
                        _this.x += posX;
                    }
                }else if(x<0){
                    if(_this.x>-290){
                        man.alpha = footerball.alpha = 0;
                        _this.x -= posX;
                    }
                }
                if(y > 0){
                    if(_this.y<0){
                        man.alpha = footerball.alpha = 0;
                        _this.y += posY;
                    }
                }else if(y<0){
                    if(_this.y>-(H-312)){
                        man.alpha = footerball.alpha = 0;
                        _this.y -= posY;
                    }
                }
                if(_this.y <= -(H-312) && (_this.x>-141 && _this.x < 100)){
                   JCGame.score++;
                   JCGame.isOver = true;
                   _this.manRun.alpha = 0;
                   man.alpha = footerball.alpha = 1;
                   JCGame.vWin.show();
                   setTimeout(function(){
                        JCGame.vWin.hide();
                        JCGame.isOver = false;
                        _this.manRun.alpha = 1;
                        man.alpha = footerball.alpha = 0;
                        JCGame.vPlayer.x = JCGame.vPlayer.y = 0;

                        JCGame.paopao1.reset();
                        JCGame.paopao2.reset();
                        var r1 = Math.random()*1>0.5?-1:1;
                        JCGame.paopao1.x = Math.random()*300*r1;
                        var r2 = Math.random()*1>0.5?-1:1;
                        JCGame.paopao1.y = -(H-800)+Math.random()*100*r2;
                        var r3 = Math.random()*1>0.5?-1:1;
                        JCGame.paopao2.x = Math.random()*300*r3;
                        var r4 = Math.random()*1>0.5?-1:1;
                        JCGame.paopao2.y = -(H-500)+Math.random()*100*r4;
                   },2000)
                }
                
            }
            setTimeout(function(){
                if (window.DeviceOrientationEvent){
                    window.addEventListener("deviceorientation", function(event){
                        gravity.x = (Math.sin( event.gamma * Math.PI / 180 )*50).toFixed(0);
                        var gx = (Math.sin(event.beta * Math.PI / 180 )*50).toFixed(0);                    
                        if(gx<-15){
                            gravity.y = -15;
                        }else{
                            gravity.y = gx;
                        }
                        move();
                    }, false);
                }
            },1000)
            
            
        }
        obj.vWin = function(){
            this.initialize();
            var win = new createjs.Bitmap(JCGame.getResult('win'));
                win.y = 190;
            win.regX = 141;
            win.regY = 165;
            win.x = (W - win.getBounds().width)/2+132;
            win.scaleX = win.scaleY = 0;
            this.addChild(win);
            _this = this;
            this.show = function(){
                createjs.Tween.get(win)
                    .to({scaleX:1.2,scaleY:1.2},300)
                    .to({scaleX:0.8,scaleY:0.8},100)
                    .to({scaleX:1,scaleY:1},100);
            }
            this.hide = function(){
                win.scaleX = win.scaleY = 0;
            }
        }
        obj.vWin.prototype      =  new createjs.Container;
        obj.vBg.prototype      =  new createjs.Container;
        obj.vPersonImg.prototype      =  new createjs.Container;
        obj.vEnermy.prototype      =  new createjs.Container;
        obj.vPaoPao.prototype      =  new createjs.Container;
        obj.vPlayer.prototype      =  new createjs.Container;
        createjs.DisplayObject.prototype.onClick = function(a){
            this.on("click",function(event) {
                createjs.Touch.isSupported() && event.nativeEvent.constructor == MouseEvent || a(event);
            })
        }

        return obj;
    })(JCStage || {})

    Array.prototype.indexOf = function(a) {
        for (var b = 0; b < this.length; b++) {
            if (this[b] == a) return b;
        }
        return -1
    };
    Array.prototype.remove = function(a) {
        a = this.indexOf(a);
        a > -1 && this.splice(a, 1)
    };
    Math.randomInt = function(a) {
        return parseInt(Math.random() * a);
    }

    modules.exports = JCGame;

});
