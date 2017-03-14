/**
 * Created by lipei on 2015/5/20.
 */

var page_0_Mgr = new PageMgr(".page_0","page_0.html");
!function(){
    page_0_Mgr.extend({
        onLeave : function () {
            var self = this;
        },
        onEnter : function () {
            var self = this;

            if(!this.GetQueryString("id")){
                $(".page_1").show();
                loadingMgr.loadImages({
                    loadArr : page_1_loading,
                    process : function (e) {
                        self.element.find(".percent").html("Loading "+e);
                    },
                    complete : function () {
                        Page.pageList[0].loadingFinish = true;
                        Page.pageList[1].loadingFinish = true;
                        self.element.fadeOut(300);
                        Page.gotoPage(1,{mode:"none"});
                    }
                });
            }else{
                $(".page_2").show();
                loadingMgr.loadImages({
                    loadArr : page_2_loading,
                    process : function (e) {
                        self.element.find(".percent").html("Loading "+e);
                    },
                    complete : function () {
                    	var tryloop = window.setInterval(function(){
                    		if (wsconn.OPEN == 1) {
                        		wsconn.send('{"type": 100, "data": 1}');
                        		window.clearInterval(tryloop);
                        	}
                    	}, 100);
                        Page.pageList[2].loadingFinish = true;
                        self.element.fadeOut(300);
                        Page.gotoPage(2,{mode:"none"});
                    }
                });
            }

            $(self.element_).on("touchstart",function(e){
                e.preventDefault();
            });

        },
        GetQueryString : function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return (r[2]); return null;
        }
    },true);
}();

var page_1_Mgr = new PageMgr(".page_1","page_1.html");
!function(){
    page_1_Mgr.extend({
        //loadImg : ink_arr[1],
        onLeave : function () {
            var self = this;
        },
        onEnter : function () {
            var self = this;

            self.audio = setInterval(function(){
                AudioMgr.play("before");
            },4000);


            loadingMgr.loadImages({
                loadArr : loading_arr[0][4].concat(loading_arr[0][5]),
                process : function (e) {
                    self.element.find(".percent").html("Loading "+e);
                },
                complete : function () {
                    Page.pageList[3].loadingFinish = true;
                    console.log("page_3 loading finish!");
                }
            });
            var qrcode_loop = window.setInterval(function(){
            	if (!window.roomid) return;
                console.log( window.location.href+"&uuid="+window.roomid)
            	self.element.find(".qrcode").qrcode({
     				text : window.location.href+"&uuid="+window.roomid,
     				size : 310,
     				color : "#fff",
     				background: "#fff"
     			});
            	window.clearInterval(qrcode_loop);
            }, 100);


            self.element.off().one("roomjoined",function(){
                $(this).find(".box").fadeOut(200);
                $(this).find(".shake").fadeIn(200);

                self.shake =  new Shake({
                    threshold: 15, // optional shake strength threshold
                    timeout: 1000 // optional, determines the frequency of event generation
                });
                self.shake.start();
                //添加监听事件
                window.addEventListener('shake', shakeEventDidOccur, false);
                function shakeEventDidOccur () {
                    //put your own code here etc.
                    //摇晃后移除监听
                    window.removeEventListener('shake', shakeEventDidOccur, false);
                    self.shake.stop();
                    wsconn.send('{"type": 101, "data": 1}');// shake+1
                    //摇晃后执行的代码开始
                    //self.myshake();
                    //摇晃后执行的代码结束
                }
            });

            this.mc = new mcMgr(self.element.find(".bird"),loading_arr[0][0].concat(loading_arr[0][1]),0);
            this.mc.init();
            this.mc.playAndStop({end:19,repeat:-1});

            $(self.element_).on("touchstart",function(e){
                e.preventDefault();
            });

        },
        myshake : function () {
            var self = this;

            clearInterval(self.audio);

            AudioMgr.stop("before");
            AudioMgr.play("after");
            AudioMgr.play("bg");

            self.element.find(".shake").fadeOut(200);
            self.element.find(".leaf").fadeOut(200);
            TweenMax.to(self.element.find(".bg"),4,{bottom:-590});
            self.mc.stop();
            self.mc.rate = 20;
            self.mc.gotoAndPlay({start:20,repeat:1,complete:function(){

                setTimeout(function(){
                    self.mc = new mcMgr(self.element.find(".bird"),loading_arr[0][2],0);
                    self.mc.init();
                    self.mc.play({repeat:1,complete:function(){

                    }});

                    setTimeout(function(){
                        self.mcA = new mcMgr(self.element.find(".bridge"),loading_arr[0][3],0);
                        self.mcA.init();
                        self.mcA.play({repeat:1,complete:function(){

                            self.element.find(".car").addClass("move");

                            setTimeout(function(){
                                self.element.find("h3").fadeIn(500);
                            },1500);

                            setTimeout(function(){
                                $(".page_3").show();
                                Page.gotoPage(3,{mode:"none"});
                                self.element.fadeOut(1000);
                            },12000);

                        }});
                    },4000)

                },1000/10*loading_arr[1][0].length)

            }})
        }
    },true);
}();

var page_2_Mgr = new PageMgr(".page_2","page_2.html");
!function(){
    page_2_Mgr.extend({
        //loadImg : ink_arr[2],
        onLeave : function () {
            var self = this;

        },
        onEnter : function () {
            var self = this;

            self.audio = setInterval(function(){
                AudioMgr.play("before");
            },4000);

            loadingMgr.loadImages({
                loadArr : loading_arr[1][3].concat(loading_arr[1][4]),
                process : function (e) {
                    //self.element.find(".percent").html("Loading "+e);
                },
                complete : function () {
                    Page.pageList[4].loadingFinish = true;
                    console.log("page_4 loading finish!");
                }
            });

            self.shake =  new Shake({
                threshold: 15, // optional shake strength threshold
                timeout: 1000 // optional, determines the frequency of event generation
            });
            self.shake.start();
            //添加监听事件
            window.addEventListener('shake', shakeEventDidOccur, false);
            function shakeEventDidOccur () {
                //put your own code here etc.
                //摇晃后移除监听
            	window.removeEventListener('shake', shakeEventDidOccur, false);
                self.shake.stop();
                wsconn.send('{"type": 101, "data": 1}');// shake+1
                //self.myshake();
                //摇晃后执行的代码结束
            }

            this.mc = new mcMgr(self.element.find(".bird"),loading_arr[1][0],0);

            $(self.element_).on("touchstart",function(e){
                e.preventDefault();
            });

        },
        myshake : function () {
            var self = this;

            clearInterval(self.audio);

            AudioMgr.stop("before");
            AudioMgr.play("after");
            AudioMgr.play("bg");

            self.element.find(".shake").fadeOut(200);
            self.element.find(".leaf").fadeOut(200);
            TweenMax.to(self.element.find(".bg"),4,{bottom:-590});

            setTimeout(function(){
                self.mc.init();
                self.mc.play({repeat:1,complete:function(){

                    self.mc = new mcMgr(self.element.find(".bird"),loading_arr[1][1],0);
                    self.mc.init();
                    self.mc.play({repeat:1,complete:function(){

                    }});

                    setTimeout(function(){
                        self.mcA = new mcMgr(self.element.find(".bridge"),loading_arr[1][2],0);
                        self.mcA.init();
                        self.mcA.play({repeat:1,complete:function(){
                            setTimeout(function(){
                                self.element.find(".car").addClass("move");

                                setTimeout(function(){
                                    self.element.find("h3").fadeIn(500);
                                },1500);
                            },4500);

                            setTimeout(function(){
                                $(".page_4").show();
                                Page.gotoPage(4,{mode:"none"});
                                self.element.fadeOut(1000);
                            },12000);
                        }})
                    },4000)

                }})
            },1000/20*loading_arr[0][1].length);
        }
    },true);
}();

var page_3_Mgr = new PageMgr(".page_3","page_3.html");
!function(){
    page_3_Mgr.extend({
        //loadImg : ink_arr[2],
        onLeave : function () {
            var self = this;

        },
        onEnter : function () {
            var self = this;

            self.element.find(".share_btn").off().on("touchend",function(){
                $(".share_cover").fadeIn(300);
            });

            this.mc = new mcMgr(self.element.find(".petal"),loading_arr[0][4],0);
            this.mc.init();
            this.mc.rate = 20;
            this.mc.play({repeat:1});

            setTimeout(function(){
                self.mclight = new mcMgr(self.element.find(".light"),loading_arr[0][5],0);
                self.mclight.init();
                self.mclight.playAndStop({end:6,repeat:1,complete:function(){
                    setTimeout(function(){
                        self.mclight.playAndStop({end:6,repeat:1,complete:function(){
                            self.mclight.gotoAndPlay({start:7,repeat:1,complete:function(){

                            }})
                        }})
                    },600)
                }});
            },6000);

            $(self.element_).on("touchstart",function(e){
                e.preventDefault();
            });

        }
    },true);
}();

var page_4_Mgr = new PageMgr(".page_4","page_4.html");
!function(){
    page_4_Mgr.extend({
        //loadImg : ink_arr[2],
        onLeave : function () {
            var self = this;

        },
        onEnter : function () {
            var self = this;

            self.element.find(".share_btn").off().on("touchend",function(){
                $(".share_cover").fadeIn(300);
            });

            setTimeout(function(){
                self.mc = new mcMgr(self.element.find(".petal"),loading_arr[1][3],0);
                self.mc.init();
                self.mc.rate = 20;
                self.mc.play({repeat:1});
            },1000/20*40);

            setTimeout(function(){
                self.mclight = new mcMgr(self.element.find(".light"),loading_arr[1][4],0);
                self.mclight.init();
                self.mclight.playAndStop({end:6,repeat:1,complete:function(){
                    setTimeout(function(){
                        self.mclight.playAndStop({end:6,repeat:1,complete:function(){
                            self.mclight.gotoAndPlay({start:7,repeat:1,complete:function(){

                            }})
                        }})
                    },600)
                }});
            },6000);

            $(self.element_).on("touchstart",function(e){
                e.preventDefault();
            });

        }
    },true);
}();


$(document).ready(function(){
    Page.work();

    AudioMgr.load([
        {name: "bg", src: "music/bg.mp3", autoplay: false,loop:true},
        {name: "before", src: "music/before.mp3" ,autoplay: false,loop:false},
        {name: "after", src: "music/after.mp3"}
    ], function() {
        //AudioMgr.play("0",function(){
        //    AudioMgr.play("1")
        //});
    });

    $(".music").on("touchend",function(){
        if($(this).hasClass("off")){
            $(this).removeClass("off");
            AudioMgr.play("bg");
        }else{
            $(this).addClass("off");
            AudioMgr.stop("bg");
        }
    });

    $(".share_cover").on("touchend",function(){
        $(this).fadeOut(300);
    })
});


