var fenxiangtxt='吃货、文青、跑男、玩咖们，考验你的时刻到了！';

AudioMgr.load([
    {name: "bgmusic", src: "images/bg.mp3", autoplay: true, loop: true},
    {name: "bmg", src: "images/car.mp3"}
], function() {

    });


$(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";
    var tap = mobile ? "tap" : "click";
    var isH=false;
    var stageW;
    var stageH;
    var canvas, stage;
    var exportLoading,game_exportRoot;
    var mainSpr;
    var endarrow
    var didibuilding;
    var loader;
    var allowDrag=false;
    var roadbgmoveX=520;
    var moveNumMax=0;
    var TweenmoveNumMax;
    var maskShape;
    var carX;
    var mudiMinX;
    var mudiMaxX;
    var mudiX;
    var jianju=150;
    var zhongdianjianju=200;
    var allowXuli=true;
    var popoX;
    var shareTxtNum;
    var selectName;
    var finalArray=[];
    var isMusicPlaying=true;
    var addressArray=['wenqing_1','wenqing_2','wenqing_3','paonan_1','paonan_2','paonan_3','wanka_1','wanka_2','wanka_3','chihuo_1','chihuo_2','chihuo_3'];
    var addressNameArray=['北京五道营胡同','上海绍兴路咖啡街','广州红砖厂','北京奥林匹克森林公园','上海徐汇滨江','广州大学城','北京三里屯','上海新天地酒吧街','广州塔 ','北京簋街','上海南京西路美食街','广州西关美食街'];
    var daodaTxtArray=[
        '有故事的文青不去798，到这儿感受最正宗的老北京胡同文化。比南锣鼓巷更清净。一溜由老外、海归开的情调咖啡馆、饰品店。',
        '遮日的法国梧桐，百年洋房，是上海最文艺的一条街。这里有哥哥张国荣出没的汉源书店，也有方大同小时候穿梭过的弄堂。',
        '广州著名的创意文艺园区，既时尚又能给予无限灵感的创意空间，散发着辉煌的城市文化历史和无与伦比的艺术气息。',
        '奥森曾经是北京奥运会的“后花园”，现在是北京著名的“跑步圣地”，最大的城市公园。共有大圈10公里，小圈5公里共两个跑道。',
        '上海跑友公认的最美跑步圣地，\n依附在黄浦江畔塑胶跑道，24小时免费开放。自动售卖机、厕所、免费寄存处一应俱全。',
        '广州跑友最常跑的路线：车流稀少，空气清新，途经几大高校环境优美。大学城内环一圈约4.5公里适合初跑者，中环10公里左右，外环16.5公里。',
        '京城夜色符号，酒吧文化鼻祖。三里屯酒吧街是京城潮人扎堆的地方，也是北京夜生活最“繁华”的娱乐街。',
        '上海很有名气的酒吧街，欧式风情酒吧群，“海派”风格浓郁。露天的酒吧、咖啡吧最受年轻一族和老外们的欢迎。',
        '俗称“小蛮腰”，广州地标建筑。塔身顶部450~454米处设有摩天轮，是世界最高摩天轮，也是世界最高跳楼机。',
        '京城第一美食街，24小时不歇业，代表了北京吃货的夜生活。推荐美食：麻辣小龙虾 馋嘴蛙 重庆烤鱼 卤煮火烧 爆肚 羊蝎子',
        '“中华商业第一街”，不仅是沪上最高档的购物场所，也是上海当之无愧的时尚美食新地标。吃货们表示，绝对是个卧虎藏龙的好地方。',
        '食在广州，味在西关，这里汇聚了传统粤菜的名家老字号。推荐美食：南信双皮奶 荔湾名食家 西关人家 银记肠粉'
    ]

    /*var shareTxtArray=[
        '我打车去了五道营胡同，感受了胡同文化！',
        '我打车去了绍兴路咖啡街，我是有腔调的文青！',
        '我打车去了红砖厂，游走在艺术的时光长廊！',
        '我打车去了奥森，跑了十公里！',
        '我打车去了徐汇滨江，绕着黄浦江夜跑十公里！',
        '我打车去了广州大学城，绕着外环路跑完全程16.5公里！',
        '我打车去了三里屯，刷夜一晚！',
        '我打车去了上海新天地，喝了一杯82年的拉菲！',
        '我打车去了小蛮腰广州塔，高空自由落体已吓尿！',
        '我打车去了簋街，吃了好一顿麻小！',
        '我打车去了南京西路，胃已撑爆！',
        '我打车去了西关美食街，吃了一桌正宗粤菜！'
    ]*/
    var shareTxtArray=['我成功击败了','%的','，捍卫了','的尊严。想挑战我的快来吧！']

    var shareWeidaodaTxt=[['我没能捍卫'],['的尊严，这个艰巨的重任只能交给你来完成了！']];


    $('html,body').on(touchmove,function(e){
        e.preventDefault()
    })


    if(isH){
        stageW=$(window).width();
        stageH=$(window).height();
    }else{
        stageW=$(window).height();
        stageH=$(window).width();
    }

    init();
    function init() {
        canvas = document.getElementById("canvas");
        $('canvas').attr('width',$(window).width());
        $('canvas').attr('height',$(window).height());
        images = images||{};
        ss = ss||{};
        loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.setMaxConnections(5);
        loader.loadFile({src:"images/loading_atlas_.json", type:"spritesheet", id:"loading_atlas_"}, true);
        loader.loadFile({src:"images/didi.png", type:"image", id:"didibuilding"}, true);
        //loader.loadFile({src:"images/car.mp3", type:"sound", id:"carsound"}, true);
        loader.loadFile({src:"images/end.png", type:"image", id:"endarrow"}, true);
        loader.loadManifest(lib.properties.manifest);
    }

    function handleFileLoad(evt) {
        var queue = evt.target;
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }

        if(evt.item.id=='loading_atlas_'){
            ss["loading_atlas_"] = queue.getResult("loading_atlas_");
            exportLoading = new lib_loading.loading();
            if(isH){
                exportLoading.x=(stageW-1040)/2;
            }else{

                exportLoading.x=640;
                exportLoading.y=(stageW-1040)/2;
                exportLoading.rotation=90;
                //exportLoading.y=(stageW-1040)/2+1040;
            }

            stage = new createjs.Stage(canvas);

            if (createjs.Touch.isSupported() ) {
                createjs.Touch.enable(stage);
            }

            stage.addChild(exportLoading);

            stage.update();
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", stage);
            queue.addEventListener("progress", handleOverallProgress);
        }
    }

    function handleOverallProgress(event){
        exportLoading.loadingtxt.text=Math.ceil(event.loaded*100)+"%";
    }

    function handleComplete(evt) {
        stage.removeChildAt(0);
        exportLoading = null;

        mainSpr = new createjs.Container();
        if(isH){
            //mainSpr.x=(stageW-1040)/2;
            mainSpr.x=0
        }else{
            mainSpr.x=640;
            //mainSpr.y=(stageW-1040)/2;
            mainSpr.y=0
            mainSpr.rotation=90;
        }

        game_exportRoot = new lib.game();
        //game_exportRoot.fuceng1.visible=false;
        game_exportRoot.fuceng2.visible=false;
        game_exportRoot.fuceng3.visible=false;
        game_exportRoot.fuceng4.visible=false;
        game_exportRoot.fuceng5.visible=false;
        game_exportRoot.fuceng6.visible=false;
        game_exportRoot.energy.visible=false;
        game_exportRoot.car.visible=false;
        game_exportRoot.movenote.visible=false;
        game_exportRoot.popomc.visible=false;
        game_exportRoot.sharepop.visible=false;

        game_exportRoot.sharepop.on('mousedown',function(){
            game_exportRoot.sharepop.visible=false;
        })

        carX=game_exportRoot.car.x;
        popoX=game_exportRoot.popomc.x;
        game_exportRoot.fuceng1.x-=(1040-stageW)*2/3;



        game_exportRoot.fuceng1.fuceng1bg.on('mousedown',function(){})
        game_exportRoot.fuceng1.gamestart.on('mousedown',function(){
            game_exportRoot.fuceng1.visible=false;
            game_exportRoot.fuceng3.visible=true;
            didibuilding.visible=true;
            if(isMusicPlaying) {
                game_exportRoot.musicicon.gotoAndStop(0)
                AudioMgr.play('bgmusic');
            }

        })

        game_exportRoot.fuceng3.fuceng3bg.on('mousedown',function(){})
        game_exportRoot.fuceng3.wenqing_btn.on('mousedown',fuceng3_tap)
        game_exportRoot.fuceng3.paonan_btn.on('mousedown',fuceng3_tap)
        game_exportRoot.fuceng3.wanka_btn.on('mousedown',fuceng3_tap)
        game_exportRoot.fuceng3.chihuo_btn.on('mousedown',fuceng3_tap)
        game_exportRoot.fuceng3.wenqing_btn.name='wenqing';
        game_exportRoot.fuceng3.paonan_btn.name='paonan';
        game_exportRoot.fuceng3.wanka_btn.name='wanka';
        game_exportRoot.fuceng3.chihuo_btn.name='chihuo';


        mainSpr.addChild(game_exportRoot);
        stage.addChild(mainSpr);


        didibuilding=new createjs.Bitmap(loader.getResult('didibuilding'));

        game_exportRoot.roadbg.addChild(didibuilding);
        didibuilding.x=313;
        didibuilding.y=200;
        didibuilding.visible=false;

        endarrow=new createjs.Bitmap(loader.getResult('endarrow'));


        game_exportRoot.roadbg.mouseChildren=false;
        game_exportRoot.roadbg.addEventListener("mousedown", roadbg_down);
        game_exportRoot.roadbg.addEventListener("pressup", roadbg_up);

        //音乐
        game_exportRoot.musicicon.x-=(1040-stageW)

        game_exportRoot.musicicon.on('mousedown',function(){
            isMusicPlaying=!isMusicPlaying;
            if(isMusicPlaying){
                game_exportRoot.musicicon.gotoAndStop(0)
                AudioMgr.play('bgmusic');
            }else{
                game_exportRoot.musicicon.gotoAndStop(1)
                AudioMgr.stop('bgmusic');
            }
        })

        //排行榜
        game_exportRoot.fuceng6.close.on('mousedown',function(){
            game_exportRoot.fuceng6.visible=false;
        })

        game_exportRoot.fuceng6.fuceng6bg.on('mousedown',function(){})
        game_exportRoot.scorebtn.x-=(1040-stageW)
        game_exportRoot.scorebtn.on('mousedown',function(){
            game_exportRoot.fuceng6.visible=true;
        })

        //游戏说明
        game_exportRoot.notebtn.x-=(1040-stageW)
        game_exportRoot.notebtn.on('mousedown',function(){
            game_exportRoot.fuceng2.visible=true;
        })
        game_exportRoot.fuceng2.close.on('mousedown',function(){
            game_exportRoot.fuceng2.visible=false;
        })
        game_exportRoot.fuceng2.fuceng2bg.on('mousedown',function(){})

        //能量条
        game_exportRoot.energy.xulibtn.on('mousedown',xuli_down)
        game_exportRoot.energy.xulibtn.on('pressup',xuli_up)


        maskShape = new createjs.Shape();
        maskShape.graphics.beginFill("#000000").drawRect(0, 0, game_exportRoot.energy.nengliang.getBounds().width, game_exportRoot.energy.nengliang.getBounds().height);
        maskShape.regY = game_exportRoot.energy.nengliang.getBounds().height;
        maskShape.y = game_exportRoot.energy.nengliang.getBounds().height+game_exportRoot.energy.nengliang.y-game_exportRoot.energy.nengliang.getBounds().height/2;
        maskShape.x=game_exportRoot.energy.nengliang.x-game_exportRoot.energy.nengliang.getBounds().width/2;
        maskShape.scaleY = 0;
        game_exportRoot.energy.nengliang.mask = maskShape;


        //未到达
        game_exportRoot.fuceng4.restartbtn.on('mousedown',function(){
            game_exportRoot.fuceng4.visible=false;
            didibuilding.visible=false;
            initdaoda();
        })
        game_exportRoot.fuceng4.sharebtn.on('mousedown',function(){
            //分享
			var tempIsDidi = isInDidi();
			if(tempIsDidi)
			{//端内
				shareInDidi();
			}
			else
			{//端外
				game_exportRoot.sharepop.visible=true;
			}
			
			
        })
        game_exportRoot.fuceng4.chongxuanbtn.on('mousedown',function(){
            game_exportRoot.fuceng4.visible=false;
            game_exportRoot.popomc.visible=true;
            initWeidaoda();
        })
        game_exportRoot.fuceng4.fuceng4bg.on('mousedown',function(){})

        //已到达
        game_exportRoot.fuceng5.restartbtn.on('mousedown',function(){
            game_exportRoot.fuceng5.visible=false;
            didibuilding.visible=false;
            initdaoda();
        })
        game_exportRoot.fuceng5.sharebtn.on('mousedown',function(){
            //分享
			var tempIsDidi = isInDidi();
			if(tempIsDidi)
			{//端内
				shareInDidi();
			}
			else
			{//端外
				game_exportRoot.sharepop.visible=true;
			}
			
			
            
        })
        game_exportRoot.fuceng5.chongxuanbtn.on('mousedown',function(){
            game_exportRoot.fuceng5.visible=false;
            game_exportRoot.popomc.visible=true;
            initWeidaoda();
        })

        game_exportRoot.fuceng5.fuceng5bg.on('mousedown',function(){})

    }

    //能量条事件
    function xuli_down(e){
        if(allowXuli){
            game_exportRoot.movenote.visible=false;
            maskShape.scaleY=0;
            TweenMax.to(maskShape,0.8,{scaleY:1,repeat:-1,yoyo:true,ease:Linear.easeNone});
            game_exportRoot.roadbg.x=roadbgmoveX;
            game_exportRoot.car.x=carX;
            game_exportRoot.popomc.x=popoX;
            game_exportRoot.popomc.visible=false;
            allowDrag=false;
            game_exportRoot.energy.xulibtn.scaleX=1.1;
            game_exportRoot.energy.xulibtn.scaleY=1.1;
        }

    }
    function xuli_up(e){
        if(allowXuli){
            TweenMax.killTweensOf(maskShape);
            TweenMax.to(game_exportRoot.roadbg,5,{x:-TweenmoveNumMax*maskShape.scaleY,ease:Cubic.easeInOut,onComplete:function(){
                if(game_exportRoot.roadbg.x>=mudiMaxX && game_exportRoot.roadbg.x<=mudiMinX){
                    game_exportRoot.fuceng5.visible=true;
					
                    fenxiangtxt=shareTxtArray[0]+Math.floor(Math.random()*(15)+85)+shareTxtArray[1]+selectName+shareTxtArray[2]+selectName+shareTxtArray[3];
                }else{
                    game_exportRoot.fuceng4.visible=true;
                    if(game_exportRoot.roadbg.x<mudiMaxX){
                        game_exportRoot.fuceng4.title.text="过犹不及，您加油太多！";
                        //分享文案
                    }else{
                        game_exportRoot.fuceng4.title.text="加油太少，未达到目的地！";
                    }
                    fenxiangtxt=shareWeidaodaTxt[0]+selectName+shareWeidaodaTxt[1];
                    var mubiaoName=0;
                    var ccc=Math.abs(game_exportRoot.roadbg.getChildByName(finalArray[0]).localToGlobal(0,0).y-carX);
                    for(var i=0;i<10;i++){
                        var temp=Math.abs(game_exportRoot.roadbg.getChildByName(finalArray[i]).localToGlobal(0,0).y-carX);
                        if(temp<ccc){
                            mubiaoName=i;
                            ccc=temp;
                        }
                    }

                    var nearMinX=game_exportRoot.roadbg.getChildByName(finalArray[mubiaoName]).localToGlobal(0,0).y;
                    var nearMaxX=game_exportRoot.roadbg.getChildByName(finalArray[mubiaoName]).localToGlobal(0,0).y+game_exportRoot.roadbg.getChildByName(finalArray[mubiaoName]).getBounds().width;
                    if(carX>=nearMinX && carX<=nearMaxX){
                        console.log(finalArray[mubiaoName])
                        jumpweidaodaTxt(finalArray[mubiaoName]);
                        //console.log(finalArray[mubiaoName])
                    }else{
                        //console.log('什么都没有')
                        jumpweidaodaTxt1();
                    }


                }

				
				wxDefault.desc = fenxiangtxt;
				didi.setShare({
					url: wxDefault.link, // 分享地址
					icon: wxDefault.imgUrl, // 分享图标
					title: wxDefault.title, // 分享标题
					content: wxDefault.desc, // 分享文案
					success: wxDefault.success,
					sina_weibo:false,
					weixin_timeline_title: wxDefault.desc,
					weixin_appmsg_desc: "玩游戏赢大奖，吃货、文青、跑男、玩咖们，考验你的时刻到了！"
				});
				
				var scoreNum=Math.abs(game_exportRoot.roadbg.x-mudiX);
				//saveresult(scoreNum);
                allowXuli=true;
            }});
            allowXuli=false;
            AudioMgr.play('bmg');
            game_exportRoot.energy.xulibtn.scaleX=1;
            game_exportRoot.energy.xulibtn.scaleY=1;
        }

    }



    function roadbg_down(e){
        if(allowDrag){
            if(isH){
                e.currentTarget.offsetX = e.currentTarget.x - e.stageX;
            }else{
                e.currentTarget.offsetX = e.currentTarget.x - e.stageY;
            }
            game_exportRoot.roadbg.addEventListener("pressmove", roadbg_move);
            game_exportRoot.movenote.visible=false;
        }

    }

    function roadbg_up(e){
        game_exportRoot.roadbg.removeEventListener("pressmove", roadbg_move);
    }

    function roadbg_move(e){
        if(isH){
            e.currentTarget.x = e.stageX + e.currentTarget.offsetX;
        }else{
            e.currentTarget.x = e.stageY + e.currentTarget.offsetX;
        }
        if(e.currentTarget.x>roadbgmoveX){
            e.currentTarget.x=roadbgmoveX;
        }
        if(e.currentTarget.x<-(moveNumMax-stageW)){
            e.currentTarget.x=-(moveNumMax-stageW);
        }
        game_exportRoot.car.x=carX+(e.currentTarget.x-roadbgmoveX);
        game_exportRoot.popomc.x=popoX+(e.currentTarget.x-roadbgmoveX);
    }

    function fuceng3_tap(e){
        //didibuilding.x=0;
        TweenMax.killTweensOf(endarrow)
        var tempArray=randomOrder(addressArray);
        finalArray=[];
        for(var i=0;i<tempArray.length;i++){
            if(tempArray[i].indexOf(this.name)==-1){
                finalArray.push(tempArray[i]);
            }
        }
        var insertNameRandomNum=Math.ceil(Math.random()*3);
        var insertPosRandomNum=Math.ceil(Math.random()*4+5);
        finalArray.splice(insertPosRandomNum,0,this.name+'_'+insertNameRandomNum);

        jumpMudiIcon(this.name+'_'+insertNameRandomNum);

        for(var i=0;i<finalArray.length;i++){
            var buildingBmp=new createjs.Bitmap(loader.getResult(finalArray[i]));
            buildingBmp.name=finalArray[i];
            game_exportRoot.roadbg.addChild(buildingBmp);
            var chushix=0
            if(i==0){
                chushix=stageW-(game_exportRoot.roadbg.getChildAt(1+i).x+game_exportRoot.roadbg.getChildAt(1+i).image.width);
            }
            buildingBmp.x=chushix+game_exportRoot.roadbg.getChildAt(1+i).x+game_exportRoot.roadbg.getChildAt(1+i).image.width+jianju;
            buildingBmp.y=stageH-buildingBmp.image.height-194;
            if(i==(finalArray.length-1)){
                moveNumMax=buildingBmp.x+buildingBmp.image.width-roadbgmoveX+zhongdianjianju;
            }

            if(i==insertPosRandomNum){
                mudiMinX=-buildingBmp.x+520+carX;
                mudiMaxX=-buildingBmp.x-buildingBmp.image.width+520+carX;
                mudiX=-buildingBmp.x-buildingBmp.image.width/2+520+carX;
                endarrow.x=buildingBmp.x+buildingBmp.getBounds().width/2- endarrow.getBounds().width/2;
                endarrow.y=buildingBmp.y-endarrow.getBounds().height-15;
                TweenMax.to(endarrow,0.5,{repeat:-1,yoyo:true,y:endarrow.y+15,ease:Linear.easeNone})

            }
        }

        game_exportRoot.roadbg.addChild(endarrow);

        var roadBgNum=Math.ceil(game_exportRoot.roadbg.getBounds().width/1040);

        for(var i=1;i<roadBgNum+1;i++){
            var roadbgBmp=new createjs.Bitmap(loader.getResult('roadbg'));
            game_exportRoot.roadbg.addChildAt(roadbgBmp,2);
            roadbgBmp.x=1040*i;
        }

        TweenmoveNumMax=1040*roadBgNum-stageW;

        game_exportRoot.car.visible=true;
        game_exportRoot.energy.visible=true;
        game_exportRoot.fuceng3.visible=false;

        allowDrag=true;
        game_exportRoot.movenote.visible=true;
        game_exportRoot.popomc.visible=true;
    }

    function initWeidaoda(){
        game_exportRoot.roadbg.x=roadbgmoveX;
        maskShape.scaleY=0;
        allowDrag=true;
        //didibuilding.visible=true;
    }

    function initdaoda(){
        game_exportRoot.roadbg.x=roadbgmoveX;
        maskShape.scaleY=0;
        allowDrag=true;
        var sum=game_exportRoot.roadbg.numChildren;
        for(var i=2; i<sum;i++){
            game_exportRoot.roadbg.removeChildAt(2);
        }

        didibuilding.x=313;
        didibuilding.y=212;

        game_exportRoot.energy.visible=false;

        game_exportRoot.fuceng1.visible=true;
        //didibuilding.visible=true;
    }

    function jumpweidaodaTxt(iconname){
        var num;
        if(iconname.indexOf('wenqing')!=-1){
            num=0;
            game_exportRoot.fuceng4.content.text="您没能捍卫"+selectName+"的尊严\n"+"误入了文青的地盘：\n"
        }else if(iconname.indexOf('paonan')!=-1){
            num=3;
            game_exportRoot.fuceng4.content.text="您没能捍卫"+selectName+"的尊严\n"+"误入了跑男的地盘：\n"
        }else if(iconname.indexOf('wanka')!=-1){
            num=6;
            game_exportRoot.fuceng4.content.text="您没能捍卫"+selectName+"的尊严\n"+"误入了玩咖的地盘：\n"
        }else if(iconname.indexOf('chihuo')!=-1){
            num=9;
            game_exportRoot.fuceng4.content.text="您没能捍卫"+selectName+"的尊严\n"+"误入了吃货的地盘：\n"
        }
        var iconNum=parseInt(iconname.substring(iconname.length-1))-1;

        //game_exportRoot.fuceng4.content.text+=daodaTxtArray[num+iconNum];
        game_exportRoot.fuceng4.content.text+=addressNameArray[num+iconNum];
    }

    function jumpweidaodaTxt1(){
        game_exportRoot.fuceng4.content.text="您没能捍卫"+selectName+"的尊严"
    }

    function jumpMudiIcon(iconname){
        var num;
        if(iconname.indexOf('wenqing')!=-1){
            num=0;
            game_exportRoot.fuceng4.head.gotoAndStop(0);
            //game_exportRoot.fuceng4.content.text="没能到达老滴哥推荐的文青目的地 您没能捍卫文青的颜面"
            game_exportRoot.fuceng5.title.text="恭喜您到达了文青的目的地";
            selectName='文青';
        }else if(iconname.indexOf('paonan')!=-1){
            num=3
            game_exportRoot.fuceng4.head.gotoAndStop(1)
            //game_exportRoot.fuceng4.content.text="没能到达老滴哥推荐的跑男目的地 您没能捍卫跑男的颜面"
            game_exportRoot.fuceng5.title.text="恭喜您到达了跑男的目的地"
            selectName='跑男';
        }else if(iconname.indexOf('wanka')!=-1){
            num=6
            game_exportRoot.fuceng4.head.gotoAndStop(2)
            //game_exportRoot.fuceng4.content.text="没能到达老滴哥推荐的玩咖目的地 您没能捍卫玩咖的颜面"
            game_exportRoot.fuceng5.title.text="恭喜您到达了玩咖的目的地"
            selectName='玩咖';
        }else if(iconname.indexOf('chihuo')!=-1){
            num=9
            game_exportRoot.fuceng4.head.gotoAndStop(3)
            //game_exportRoot.fuceng4.content.text="没能到达老滴哥推荐的吃货目的地 您没能捍卫吃货的颜面"
            game_exportRoot.fuceng5.title.text="恭喜您到达了吃货的目的地"
            selectName='吃货';
        }

        var iconNum=parseInt(iconname.substring(iconname.length-1))-1;
        game_exportRoot.fuceng5.jianzhu.gotoAndStop(num+iconNum)
        game_exportRoot.fuceng5.mudi.text=addressNameArray[num+iconNum];
        game_exportRoot.fuceng5.content.text=daodaTxtArray[num+iconNum];

        game_exportRoot.popomc.jianzhu.gotoAndStop(num+iconNum)
        game_exportRoot.popomc.title.text='目的地：'+addressNameArray[num+iconNum]
        shareTxtNum=num+iconNum;
    }




    function randomOrder(targetArray) {
        var arrayLength = targetArray.length
        //
        //先创建一个正常顺序的数组
        var tempArray1 = new Array();

        for (var i = 0; i < arrayLength; i ++)
        {
            tempArray1 [i] = i
        }
        //
        //再根据上一个数组创建一个随机乱序的数组
        var tempArray2 = new Array();

        for (var i = 0; i < arrayLength; i ++)
        {
            //从正常顺序数组中随机抽出元素
            tempArray2 [i] = tempArray1.splice (Math.floor (Math.random () * tempArray1.length) , 1)
        }
        //
        //最后创建一个临时数组存储 根据上一个乱序的数组从targetArray中取得数据
        var tempArray3 = new Array();

        for (var i = 0; i < arrayLength; i ++)
        {
            tempArray3 [i] = targetArray [tempArray2 [i]]
        }
        //
        //返回最后得出的数组
        return tempArray3
    }

})
