/**
 * Created by lipei on 2015/5/20.
 */


var windowMgr;
!function(doc, win){
    windowMgr = {
        init : function () {
            this._isAndroid();
            this._rotate(doc,win);
            this._isWeixin();
        },
        _isAndroid : function () {
            var u = navigator.userAgent;
            if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
                this.isAndroid = true;
            }else{
                this.isAndroid = false;
            }
        },
        _isWeixin : function () {
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                this.isWeixin = true;
            }else{
                this.isWeixin = false;
            }
        },
        _rotate : function (doc,win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function (e) {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / e) + 'px';
                };

                rotate = function (e){

                    if($(window).width()>$(window).height()){
                        recalc(1136);
                    }else{
                        recalc(640);
                    }
                    return false;
                };

            rotate();

            if (!doc.addEventListener) return;
            //win.addEventListener(resizeEvt, recalc, false);
            win.addEventListener('orientationchange', rotate, false);
            win.addEventListener('resize', rotate, false);
        },
        getImageWidth : function(url,callback){
            var img = new Image();
            img.src = url;

            // 如果图片被缓存，则直接返回缓存数据
            if(img.complete){
                callback(img.width, img.height);
            }else {
                // 完全加载完毕的事件
                img.onload = function () {
                    callback(img.width, img.height);
                }
            }
        },
        pad : function(num, n) {
            var len = num.toString().length;
            while(len < n) {
                num = "0" + num;
                len++;
            }
            return num;
        },
        randomInt : function (min,max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

}
}(document, window);

var video_Mgr = {
    init : function () {
        this.video_0 = $("#video_0").get(0);
        this.video_small_0 = $("#video_small_0").get(0);
        this.video_small_1 = $("#video_small_1").get(0);
        this.video_small_2 = $("#video_small_2").get(0);
        this.video_small_3 = $("#video_small_3").get(0);
    }
};

var page_0_Mgr = new PageMgr(".page_0","page_0.html");
!function(){
    page_0_Mgr.extend({
        onLeave : function () {
            var self = this;
        },
        beforeEnter : function () {
            var self = this;
        },
        onEnter : function () {
            var self = this;

            video_Mgr.init();

            this.mc = new mcMgr(self.element.find(".heart"),mc);
            this.mc.init();
            this.mc.fps = 15;
            this.mc.play({repeat:-1,yoyo:false});

            loadingMgr.loadImages({
                loadArr : loading_all,
                process : function (e) {
                    self.element.find(".percent").html(e);
                },
                complete : function () {

                    function initvideo_0(){
                        if(video_Mgr.video_0.currentTime>21 && Page.curPage == 0){
                            $(".video_0").fadeOut(500,function(){video_Mgr.video_0.pause()});
                            self.element.find(".btn_find").show().off().one("touchend",function(){
                                video_Mgr.video_0.play();
                                Page.gotoPage(1,{mode:"none"});
                            });
                        }else if(video_Mgr.video_0.currentTime>37 && Page.curPage == 1){
                            $(".video_0").fadeOut(500,function(){video_Mgr.video_0.pause()});
                            Page.gotoPage(2,{mode:"none"});
                            if(!windowMgr.isAndroid){
                                $(".video_small_3").show();
                            }
                        }
                    }

                    video_Mgr.video_0.addEventListener("timeupdate", initvideo_0, false);

                    self.element.find(".percent").fadeOut(300,function(){

                        if(windowMgr.isAndroid || !windowMgr.isWeixin){
                            self.element.find(".enter").fadeIn(300).off().one("touchend",function(){

                                $(".video_0").fadeIn(300,function(){
                                    self.mc.stop();
                                });
                                video_Mgr.video_0.play();

                            });

                        }else{

                            setTimeout(function(){
                                $(".video_0").fadeIn(300,function(){
                                    self.mc.stop();
                                });
                                video_Mgr.video_0.play();
                            },2000)

                        }

                    });


                    for(var i=0;i<4;i++){
                        Page.pageList[i].loadingFinish = true;
                    }

                }

            });

        }
    },true);
}();

var page_1_Mgr = new PageMgr(".page_1","page_1.html");
!function(){
    page_1_Mgr.extend({
        onLeave : function () {
            var self = this;
        },
        beforeEnter : function () {
            var self = this;
        },
        onEnter : function () {
            var self = this;

            self.element.css("z-index","11").fadeIn(300).siblings("section").css("z-index","1").fadeOut(300,function(){
                $(".video_0").show();
            });

            var phone_time = 0;
            var times = setInterval(function(){
                phone_time++;
                self.element.find(".time").find("span").html(phone_time);
                if(phone_time>1){
                    clearInterval(times);
                    self.element.find(".bg").fadeOut(300);
                    self.element.find(".time").fadeOut(300);
                }
            },1000);

        }
    },true);
}();

var page_2_Mgr = new PageMgr(".page_2","page_2.html");
!function(){
    page_2_Mgr.extend({
        onLeave : function () {
            var self = this;
        },
        beforeEnter : function () {
            var self = this;
            self.element.find(".step_0").css({"width":0});
            self.element.find(".step_1").css({"width":0});
            self.element.find(".step_2").css({"width":0});
            self.element.find(".step_3").hide();
            self.element.find(".chuang_cover").find(".text").hide();
            self.element.find(".shu_cover").find(".text").hide();
            self.element.find(".qiuxie_cover").find(".text").hide();
            self.element.find(".huace_cover").find(".text").hide();
            self.element.find(".gouwo_cover").find(".text").hide();
            self.element.find(".gouwo_btn").hide();
        },
        onEnter : function () {
            var self = this;

            self.element.css("z-index","11").fadeIn(300).siblings("section").css("z-index","1").fadeOut(300);

            setTimeout(function(){
                self.element.find(".tips").fadeOut(300);
            },4000);

            if(!windowMgr.isAndroid){
                video_Mgr.video_small_3.play();

                video_Mgr.video_small_3.addEventListener("ended",function(evt) {
                    video_Mgr.video_small_3.currentTime=0;
                    video_Mgr.video_small_3.play();
                });
            }

            self._step = 0;

            if(windowMgr.isAndroid){
                var lihtml = self.element.find(".quanjing").html();
                self.element.find(".quanjing").show().append(lihtml);
                window.addEventListener( 'deviceorientation', orientationHandler, false );
                self.element.find(".quanjing").after("<div style='font-size:0.3rem;color:#000;position:absolute;left:0;top:0;'></div>");
                function orientationHandler(event){
                    //var angle = self.element.find(".quanjing").width()/2/360;
                    //var left_value = parseInt(angle*event.webkitCompassHeading*100)/100;
                    var speed = event.gamma/2;
                    self.element.find(".quanjing").animate({left:"-="+speed+"px"},0);

                    if(parseInt(self.element.find(".quanjing").css("left"))<-self.element.find(".quanjing").width()/2){
                        self.element.find(".quanjing").css("left","0px");
                    }

                    if(parseInt(self.element.find(".quanjing").css("left"))>0){
                        self.element.find(".quanjing").css("left",-self.element.find(".quanjing").width()/2+"px");
                    }

                    //self.element.find(".quanjing").next().html(self.element.find(".quanjing").css("left")+"  "+-self.element.find(".quanjing").width()/2 );

                }
            }else{
                self.view();

                //AudioMgr.play("bg");

                var style;
                for(var i = 0;i<6;i++){
                    style = self.element.find("img").eq(i).attr("style");
                    //style = style.replace(/512/, "500");
                    self.element.find("img").eq(i).after("<div class='btn_box btn_"+ i +"' style='"+ style +"'></div>");
                    self.element.find(".btn_"+i).css({"background":"url('"+ self.element.find("img").eq(i).attr("src") +"')"})
                }

                self.element.find(".btn_0").append("<div class='shu'><div class='point'></div></div>");
                self.element.find(".btn_0").append("<div class='gouwo'></div>");
                self.element.find(".btn_1").append("<div class='huace'></div>");
                self.element.find(".btn_4").append("<div class='chuang'><div class='yes'></div><div class='no'></div></div>");
                self.element.find(".btn_5").append("<div class='qiuxie'></div>");
                self.element.find(".btn_5").append("<div class='erji'></div>");
            }

            self.step();

            self.element.find(".qiuxie").off().on("touchend",function(){
                if(!windowMgr.isAndroid){
                    AudioMgr.play("audio_0");
                    video_Mgr.video_small_3.pause();
                    video_Mgr.video_small_2.currentTime=0;
                    video_Mgr.video_small_2.play();
                    $(".video_small_2").show();

                    video_Mgr.video_small_2.addEventListener("ended",function(evt) {
                        $(".video_small_2").hide();
                        video_Mgr.video_small_3.play();
                        //self.element.find(".qiuxie_cover").show();
                        //self.element.find(".cover").fadeIn(300,function(){
                        //    self.myanimate($(".qiuxie_cover"),0.45,1.15,4.41);
                        //});
                        //self._step = 1;
                    });

                }else{
                    AudioMgr.play("qiuxie",function(){
                        //self.element.find(".qiuxie_cover").show();
                        //self.element.find(".cover").fadeIn(300,function(){
                        //    self.myanimate($(".qiuxie_cover"),0.45,1.15,4.41);
                        //});
                        //self._step = 1;
                    });
                }

                setTimeout(function(){
                    self.element.find(".qiuxie_cover").show();
                    self.element.find(".cover").fadeIn(300,function(){
                        self.myanimate($(".qiuxie_cover"),0.45,1.15,4.41);
                    });
                    self._step = 1;
                },1000);
            });

            self.element.find(".huace").off().on("touchend",function(){
                if(!windowMgr.isAndroid){
                    AudioMgr.play("audio_0");
                    video_Mgr.video_small_3.pause();
                    video_Mgr.video_small_0.currentTime=0;
                    video_Mgr.video_small_0.play();
                    $(".video_small_0").show();

                    video_Mgr.video_small_0.addEventListener("ended",function(evt) {
                        $(".video_small_0").hide();
                        video_Mgr.video_small_3.play();
                    });

                }else{
                    AudioMgr.play("huace");
                }
                self.element.find(".huace_cover").show();
                self.element.find(".cover").fadeIn(300,function(){
                    self.myanimate($(".huace_cover"),0.57,1.9,5.13);
                });
                self._step = 2;
            });

            self.element.find(".chuang").find(".no").off().on("touchend",function(){
                if(!windowMgr.isAndroid){
                    AudioMgr.play("audio_0");
                }
                self.element.find(".chuang_cover").show();
                self.element.find(".cover").fadeIn(300,function(){
                    self.myanimate($(".chuang_cover"),0.6,1.31,4.78);
                });
                self._step = 3;
            });

            self.element.find(".chuang").find(".yes").off().on("touchend",function(){
                if(!windowMgr.isAndroid){
                    AudioMgr.play("audio_0");
                    $(".video_small_3").fadeOut(300);
                }
                self.element.find(".sleep").show();
                self.element.find(".cover").fadeIn(300,function(){
                    AudioMgr.play("audio_1");
                });
                var time = 5;
                var timer = setInterval(function(){
                    time--;
                    if(time<1){
                        clearInterval(timer);
                        self.element.find(".cover").fadeOut(300,function(){
                            if(!windowMgr.isAndroid){
                                $(".video_small_3").fadeIn(300);
                            }
                            self.element.find(".sleep").hide();
                            self.element.find(".sleep").find(".text").html("5");
                            self.element.find(".sleep").find(".face").find("i").eq(4).show().siblings().hide();
                        })
                    }
                    self.element.find(".sleep").find(".text").html(time);
                    self.element.find(".sleep").find(".face").find("i").eq(time-1).show().siblings().hide();
                },1000)
            });

            self.element.find(".shu").off().on("touchend",function(){
                if(!windowMgr.isAndroid){
                    AudioMgr.play("audio_0");
                    $(".video_small_1").show();
                    video_Mgr.video_small_3.pause();
                    video_Mgr.video_small_1.currentTime=0;
                    video_Mgr.video_small_1.play();

                    video_Mgr.video_small_1.addEventListener("ended",function(evt) {
                        $(".video_small_1").hide();
                        video_Mgr.video_small_3.play();
                        //self.element.find(".shu_cover").show();
                        //self.element.find(".cover").fadeIn(300,function(){
                        //    self.myanimate($(".shu_cover"),1.07,1.49,4.8);
                        //});
                        //self._step = 4;
                    });

                }else{
                    AudioMgr.play("shu",function(){
                        //self.element.find(".shu_cover").show();
                        //self.element.find(".cover").fadeIn(300,function(){
                        //    self.myanimate($(".shu_cover"),1.07,1.49,4.8);
                        //});
                        //self._step = 4;
                    });
                }

                setTimeout(function(){
                    self.element.find(".shu_cover").show();
                    self.element.find(".cover").fadeIn(300,function(){
                        self.myanimate($(".shu_cover"),1.07,1.49,4.8);
                    });
                    self._step = 4;
                },1000);
            });

            self.element.find(".gouwo").off().on("touchend",function(){
                if(!windowMgr.isAndroid){
                    AudioMgr.play("audio_0");
                }
                self.element.find(".gouwo_cover").show();
                self.element.find(".cover").fadeIn(300,function(){
                    self.myanimate($(".gouwo_cover"),0.37,1.37,4.76);
                    setTimeout(function(){AudioMgr.play("audio_2");},600)
                });
                self._step = 5;
            });

            self.element.find(".gouwo_btn").off().on("touchend",function(){
                $(".video_0").show();
                $(".video_small_3").hide();
                self.element.fadeOut(300);
                video_Mgr.video_0.play();
                video_Mgr.video_0.addEventListener("ended",function(evt) {
                    Page.gotoPage(3,{mode:"none"});
                });
            });

            self.element.find(".cover").find(".box").off().on("touchend",function(){
                self.element.find(".cover").fadeOut(300,function(){
                    self.element.find(".qiuxie_cover").hide();
                    self.element.find(".huace_cover").hide();
                    self.element.find(".chuang_cover").hide();
                    self.element.find(".shu_cover").hide();
                    self.element.find(".gouwo_cover").hide();
                    self.element.find(".bg").remove();
                    self.beforeEnter();
                    self.step();
                });
            })

        },
        myanimate : function (element,num_0,num_1,num_2) {
            var self = this;
            element.find(".step_0").animate({width:num_0+"rem"},300,"linear",function(){
                element.find(".step_1").animate({width:num_1+"rem"},300,"linear",function(){
                    element.find(".step_2").animate({width:num_2+"rem"},300,"linear",function(){
                        element.find(".step_3").fadeIn(300,function(){
                            setTimeout(function(){element.find(".text").fadeIn(300);element.find(".gouwo_btn").fadeIn(300);},600);
                            element.find(".box").before("<div class='bg animate'></div>");
                        })
                    })
                })
            });

        },
        step : function () {
            var self = this;
            switch (self._step){
                case 0 :
                    self.element.find(".qiuxie").fadeIn();
                    break;
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                    self.element.find(".huace").fadeIn();
                    self.element.find(".chuang").fadeIn();
                    self.element.find(".shu").fadeIn();
                    self.element.find(".gouwo").fadeIn();
                    break;
                case 5 :
                    break;
            }

        },
        view : function () {
            var self = this;
            var camera, scene, renderer, controls;

            // Setup
            function init() {

                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

                // Render three.js world

                scene = new THREE.Scene();

                var cube = generateCubeMap(512);
                scene.add( cube );

                renderer = new THREE.CSS3DRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                self.element.find(".cover").before( renderer.domElement );

                // Add DeviceOrientation Controls
                controls = new DeviceOrientationController( camera, renderer.domElement );
                controls.connect();

                setupControllerEventHandlers( controls );

                window.addEventListener( 'resize', onWindowResize, false );

            }

            // Render loop
            function animate() {

                controls.update();

                renderer.render( scene, camera );

                requestAnimationFrame( animate );

            }

            // Demonstration of some DeviceOrientationController event handling
            function setupControllerEventHandlers( controls ) {

                var controllerEl = document.querySelector( '#controllername' );
                var controllerDefaultText = controllerEl.textContent;
                var controllerSelectorEl = document.querySelector( '#controllertype' );

                var compassCalibrationPopupEl = document.querySelector( '#calibrate-compass-popup' );
                var compassCalibratedEl = compassCalibrationPopupEl.querySelector( 'button' );

                // Listen for manual interaction (zoom OR rotate)

                controls.addEventListener( 'userinteractionstart', function () {
                    renderer.domElement.style.cursor = 'move';
                    controllerSelectorEl.style.display = 'none';
                });

                controls.addEventListener( 'userinteractionend', function () {
                    renderer.domElement.style.cursor = 'default';
                    controllerSelectorEl.style.display = 'inline-block';
                });

                // Listen for manual rotate interaction

                controls.addEventListener( 'rotatestart', function () {
                    controllerEl.innerText = 'Manual Rotate';
                });

                controls.addEventListener( 'rotateend', function () {
                    controllerEl.innerText = controllerDefaultText;
                });

                // Listen for manual zoom interaction

                controls.addEventListener( 'zoomstart', function () {
                    controllerEl.innerText = 'Manual Zoom';
                });

                controls.addEventListener( 'zoomend', function () {
                    controllerEl.innerText = controllerDefaultText;
                });

                //

                // Show a simple 'canvas calibration required' dialog to user
                controls.addEventListener( 'compassneedscalibration', function () {
                    compassCalibrationPopupEl.style.visibility = 'visible';

                    compassCalibratedEl.addEventListener( 'click', function () {

                        compassCalibrationPopupEl.style.visibility = 'hidden';

                    });
                });

                // Allow advanced switching between 'Quaternions' and 'Rotation Matrix' calculations
                controllerSelectorEl.addEventListener( 'click', function ( event ) {
                    event.preventDefault();

                    if ( controls.useQuaternions === true ) {
                        controllerSelectorEl.textContent = 'Rotation Matrix';
                        controls.useQuaternions = false;
                    } else {
                        controllerSelectorEl.textContent = 'Quaternions';
                        controls.useQuaternions = true;
                    }
                }, false);
            }

            function generateCubeMap(tileWidth ) {

                var flipAngle  = Math.PI;       // 180 degrees
                var rightAngle = flipAngle / 2; //  90 degrees

                tileWidth = tileWidth || 512;

                var sides = [
                    {
                        url: 'img/page_2/posx.jpg',
                        position: [ - tileWidth, 0, 0 ],
                        rotation: [ 0, rightAngle, 0 ]
                    },
                    {
                        url: 'img/page_2/negx.jpg',
                        position: [ tileWidth, 0, 0 ],
                        rotation: [ 0, - rightAngle, 0 ]
                    },
                    {
                        url: 'img/page_2/posy.jpg',
                        position: [ 0, tileWidth, 0 ],
                        rotation: [ rightAngle, 0, flipAngle ]
                    },
                    {
                        url: 'img/page_2/negy.jpg',
                        position: [ 0, - tileWidth, 0 ],
                        rotation: [ - rightAngle, 0, flipAngle ]
                    },
                    {
                        url: 'img/page_2/posz.jpg',
                        position: [ 0, 0, tileWidth ],
                        rotation: [ 0, flipAngle, 0 ]
                    },
                    {
                        url: 'img/page_2/negz.jpg',
                        position: [ 0, 0, - tileWidth ],
                        rotation: [ 0, 0, 0 ]
                    }
                ];

                var cube = new THREE.Object3D();

                for ( var i = 0; i < sides.length; i ++ ) {

                    var side = sides[ i ];

                    var element = document.createElement( 'img' );
                    element.width = tileWidth * 2 + 2; // 2 pixels extra to close the gap.
                    element.src = side.url;

                    var object = new THREE.CSS3DObject( element );
                    object.position.fromArray( side.position );
                    object.rotation.fromArray( side.rotation );
                    cube.add( object );

                }

                return cube;

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;

                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            init();
            animate();
        }
    },true);
}();

var page_3_Mgr = new PageMgr(".page_3","page_3.html");
!function(){
    page_3_Mgr.extend({
        onLeave : function () {
            var self = this;
        },
        beforeEnter : function () {
            var self = this;

            TweenMax.set(self.element.find(".people"),{top:"1rem",opacity:0});
            TweenMax.set(self.element.find(".btn_share"),{left:"0.06rem",opacity:0});
            TweenMax.set(self.element.find(".btn_back"),{right:"-0.27rem",opacity:0});
            TweenMax.set(self.element.find(".share").find("div"),{width:0});

        },
        onEnter : function () {
            var self = this;

            self.element.css("z-index","11").fadeIn(300).siblings("section").css("z-index","1").fadeOut(300,function(){

                $(".video_0").hide();
                //video_Mgr.video_0.addEventListener("canplay",function() { video_Mgr.video_0.currentTime = 22});
                video_Mgr.video_0.currentTime = 22;

                TweenMax.to(self.element.find(".people"),1,{top:"0.5rem",opacity:1,onComplete:function(){

                    self.element.find("h1").addClass("animate");
                    setTimeout(function(){self.element.find("h2").addClass("animate");},600);
                    setTimeout(function(){self.element.find(".line").addClass("animate");},1200);
                    setTimeout(function(){
                        TweenMax.to(self.element.find(".btn_share"),0.4,{left:"0.56rem",opacity:1});
                        TweenMax.to(self.element.find(".btn_back"),0.4,{right:"0.37rem",opacity:1});
                    },1800);
                    setTimeout(function(){
                        self.element.find(".download").fadeIn(300);
                    },2400);

                }});

            });

            self.element.find(".btn_share").off().on("touchend",function(){
                self.element.find(".share_cover").fadeIn(300,function(){
                    page_2_Mgr.myanimate(self.element.find(".share"),0.43,0.61,2.41);
                });
            });

            self.element.find(".btn_back").off().on("touchend",function(){
                window.location.reload();
                //Page.gotoPage(1,{mode:"none"});
            });

            self.element.find(".share_cover").off().on("touchend",function(){
                $(this).fadeOut(300,function(){
                    TweenMax.set(self.element.find(".share").find("div"),{width:0});
                });
            });

            self.element.find(".download").off().on("touchend",function(){
                window.location.href = "http://d.toutiao.com/RsSM/"
            });

        }
    },true);
}();

$(document).ready(function(){
    AudioMgr.load([
        //{name: "bg", src: "http://img.wmy-ad.com/baidu/20150926/music/bg.mp3",loop: true}
        {name: "audio_0", src: "music/0.mp3"},
        {name: "audio_1", src: "music/1.mp3"},
        {name: "audio_2", src: "music/2.mp3"},
        {name: "shu", src: "music/shu.mp3"},
        {name: "huace", src: "music/huace.mp3"},
        {name: "qiuxie", src: "music/qiuxie.mp3"}
        //{name: "bg", src: "music/bg.mp3"}

    ], function() {

    });

    $(document).on("touchstart touchmove mousedown mousemove",function(event){
        var tag = $(event.target).parents()[0].tagName;
        var tagclass = $(event.target).parents(".page_18").size();
        var thistag = event.target.tagName;
        if ( tag != "A" && tag != "INPUT" && tag != "TEXTAREA" && tag != "SELECT" && thistag != "A" && thistag != "INPUT" && thistag != "TEXTAREA" && thistag != "SELECT" && tagclass == 0  )
        {
            event.preventDefault();
        }
    });

    windowMgr.init();
    Page.work();
});