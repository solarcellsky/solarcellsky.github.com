var thisismobile = true;
if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
	thisismobile = true;
}else{
	thisismobile = false;
}
var playgame,vMap,rman;
var startH = 200;
var Game = (function(Game){
	//游戏分数
	Game.score = 0;
	
	//是否已经完成游戏主要素材加载
	Game.hasLoadResource = false;
	//用户是否点击了开始游戏按钮
	Game.hasClickStart = false;
	//关卡
	Game.level = 0;
	//出现列数
	Game.col = 0;
	//出现行数
	Game.row = 0;
	//表情数组
	Game.moodsArr = [];
	//冻结
	Game.wait = false;
	//游戏定时器
	Game.interval = null;
	//游戏是否暂停
	Game.end = false;
	//关卡列表
	Game.list = [];
	Game.bonus = null;
	Game.time = 40;
	Game.enemyList = [];
	Game.waterFirst = 0;
	Game.enemyFirst = 0;
	Game.getHomeResult = function(a) {
        return App.queueHome.getResult(a);
    };
	Game.getResult = function(a) {
        return App.queueGame.getResult(a);
    };
	//游戏结束
	Game.gameover = function(){
		
	}	
	return Game;
})(Game || {})

var Stage = (function(obj){
	
	//游戏首页
	obj.vHome = function(){
		this.initialize();
		this.x = this.y = 0;		
		//开始游戏按钮
		var btnStart = new BtnStart(0,570,110);		
		var _this = this;
	}	
	//游戏主体
	obj.vGame = function(){		
		this.initialize();
		this.x = this.y = 0;		
		Game.score = 0;
		Game.vHome.removeAllChildren();
		this.removeAllChildren();
		//游戏主体内容容器背景	
		Game.vCountDown = new obj.vCountDown;		
		//显示引导页
		Game.vCountDown.ready();
		var _this = this;
		$('.step').on('click',function(){
			$(this).hide();
			Game.vCountDown.ready();
		})
		this.play = function(){
			Game.time = 0;
		}
		var gameBg = new createjs.Bitmap(Game.getResult("gameBg"));
		var liveLine = new createjs.Text('体力值：100%','bold 20px Arial','#FFF');
		liveLine.x = 485;
		liveLine.y = 8;
		liveLine.outline = 5;
		//liveLine.shadow = new createjs.Shadow("#6F9119", 0, 1, 0);
		var live = new createjs.Text('体力值：100%','bold 20px Arial','#f36600');
		live.x = 485;
		live.y = 8;

		/* 分数 */
		var scoreBg = new createjs.Bitmap(Game.getResult("score"));
		scoreBg.x = 166;
		scoreBg.y = 0;
		var score = new createjs.Text('0','40px Arial','#FFF');
		score.textAlign = "center";
		score.x = 360;

		/* 进度条 */
		var timeBar = new createjs.Bitmap(Game.getResult('timeBar'));
		timeBar.x = 470;
		timeBar.y = 40;
		var timeBarBg = new createjs.Shape();
        timeBarBg.graphics.beginFill('#FFF').drawRoundRect(465, 37, 170, 20, 8);
		var mask = new createjs.Shape();
        mask.graphics.beginFill('#f36600').drawRoundRect(470, 40, 160, 15, 5);
		timeBar.mask = mask;
		var maskBg = new createjs.Shape();
        maskBg.graphics.beginFill('#f36600').drawRoundRect(470, 40, 160, 15, 5);
		vMap = new obj.vMap();
		vMap.init();


		/* 初始化玩家 */
		rman = new obj.Rman();
		/* 初始化关卡图 */
		this.addChild(gameBg,vMap,scoreBg,liveLine,live,score,timeBarBg,maskBg,timeBar,rman);
		this.catch = function(){		
			var level = Game.list[Game.level];	
			if(level.enemy==1){
				var enemy = Game.enemyList[level.enemyIndex];
				if(Math.abs(rman.man.x - enemy.man.x)<= 32 ){
					/* 游戏结束 */
					Game.end = true;
					if(Game.score<500){
						document.getElementById("endMain").style.backgroundImage = "url(./res/endBg_1.png)";
					}else if(Game.score < 1000){
						document.getElementById("endMain").style.backgroundImage = "url(./res/endBg_2.png)";
					}else{
						document.getElementById("endMain").style.backgroundImage = "url(./res/endBg_3.png)";
					}
					var _infoFlag = $("#bbbb").html();
		            if(PAGE == 1){
		              if(_infoFlag == "false"){
		                $("#PrizeGetInfo").show();
		                globalScore = Game.score;
		                endInput = true;
		                $("#bbbb").html("true");
		              }else{
		                var pppp = $("#cccc").html();
		                endFun(Game.score,aVal,pppp);
		              }
		            }else{
		              if(_infoFlag == "false"){
		                $("#PrizeGetInfo").show();
		                globalScore = Game.score;
		                $("#bbbb").html("true");
		              }else{
		                var pppp = $("#cccc").html();
		                endFun(Game.score,aVal,pppp)
		              }
		            }
		            App.stage.removeAllChildren();
				}
			}
		}
		
		this.on("tick",function(event) {
			if(!Game.end){
				_this.catch();
			}
			Game.score = Game.level*10+parseInt(((vMap.y-(Game.level)*150)/150)*10)+1;	
			if(Game.score <= 99){
				score.font = '50px Arial';
			}else if(Game.score > 99 && Game.score <= 999){
				score.font = '40px Arial';
				score.y = 5;
			}else if(Game.score > 999){
				score.font = '35px Arial';
				score.y = 8;
			}
			score.text = Game.score;
			createjs.Tween.get(timeBar,{override:true}).to({x:timeBar.x--},10);

        })
        Game.interval = null;
		Game.interval = setInterval(function(){
			/* ----------------------------游戏结束----------------------------- */
			if(Game.time == 0) {				
				if(Game.score<500){
					document.getElementById("endMain").style.backgroundImage = "url(./res/endBg_1.png)";
				}else if(Game.score < 1000){
					document.getElementById("endMain").style.backgroundImage = "url(./res/endBg_2.png)";
				}else{
					document.getElementById("endMain").style.backgroundImage = "url(./res/endBg_3.png)";
				}
				var _infoFlag = $("#bbbb").html();
	            if(PAGE == 1){
	              if(_infoFlag == "false"){
	                $("#PrizeGetInfo").show();
	                globalScore = Game.score;
	                endInput = true;
	                $("#bbbb").html("true");
	              }else{
	                var pppp = $("#cccc").html();
	                endFun(Game.score,aVal,pppp);
	              }
	            }else{
	              if(_infoFlag == "false"){
	                $("#PrizeGetInfo").show();
	                globalScore = Game.score;
	                $("#bbbb").html("true");
	              }else{
	                var pppp = $("#cccc").html();
	                endFun(Game.score,aVal,pppp)
	              }
	            }
				// $("#endScoreNum").html(Game.score)
				// $('#end').show();
				// var _example = parseInt(Math.random()*30+70);
				// $("#endExampleNum").html(_example+"%");
				App.stage.removeAllChildren();
			}
			Game.time--;
			if(Game.time>=40){
				Game.time = 40;
				timeBar.x = 470;
			}else{
				timeBar.x = 470+160-Game.time*4;
			}
			liveLine.text = live.text = "体力值："+parseInt(Game.time/40*100)+"%";
		},1000)
		playgame = function(){
			if(Game.end){	
				return;				
			}
		};
		
	}
	//玩家
	obj.Rman = function(){
		this.initialize();
		var ssW = 61,ssH = 102;
		var data = new createjs.SpriteSheet({
			"images": ["images/rman.png"],
			"frames": {"regX": 0, "regY": 0, "height": ssH, "width": ssW, "count": 5},		
			"animations": {"run": [0, 3,'run', 0.2],"stand":[0]}
		});
		_this = this;
		_this.man = new createjs.Sprite(data);
		_this.man.x = 320;
		_this.man.y = canvasH - 50 - startH;	
		_this.man.regX = 30;
		_this.man.regY = 51;

		this.addChild(_this.man);
		_this.man.gotoAndPlay('run');	
		var _this = this;
		var gravity = { x: 0, y: 1 };

		var isbegin = false;
		var fa = 0;
		if (window.DeviceOrientationEvent){
			window.addEventListener("deviceorientation", function(event){
				if(!isbegin){
					fa = event.beta * Math.PI;
					isbegin = true;
				}
				gravity.x = (Math.sin( event.gamma * Math.PI / 180 )*50).toFixed(0);
				var gx = (Math.sin(event.beta * Math.PI / 180 )*50).toFixed(0)-20;

				if(gx<-15){

					gravity.y = -15

				}else{
					gravity.y = gx
				}

				_this.move();
			}, false);
		} else {
			console.log="wrong";
		}
		//转动
		this.move = function(){

			var gx = parseInt(gravity.x),
				gy = parseInt(gravity.y);
			var x = parseInt(_this.man.x) + parseInt(gravity.x)+10,
				y = parseInt(vMap.y) - parseInt(gravity.y)+10;
			var position = y - Game.level*150;
			setTimeout(function(){
				if(localStorage.getItem('first') == null)	{
					if(gx != 0 || gy != 0){
						$('#leadin').hide();
						localStorage.setItem('first','false')
					}
				}
			},2000)
			//向上移动
			if(gy != 0){
				var count = Game.list[Game.level].pos.length;
				if( position >= 60 && position <= 150){
					var canMoveX = true;
					for(var c=0;c<count;c++){
						var posStart = Game.list[Game.level].pos[c][0],
							posEnd = Game.list[Game.level].pos[c][1];
						if(_this.man.x>=posStart-30 && _this.man.x<=posEnd+30){
							canMoveX = false;
							break;
						}
					}
					if(Game.list[Game.level+1].prev.hasOwnProperty('left')){
						var posStart = Game.list[Game.level+1].prev.left,
							posEnd = Game.list[Game.level].prev.left+25;
						if(_this.man.x>=posStart-30 && _this.man.x<=posEnd+30){
							canMoveX = false;
						}
					}
					if(canMoveX){
						if(x<=30){
							_this.man.x = 30;
						}else if(x>=640-31){
							_this.man.x = 640-31;
						}else{
							_this.man.x = x;
						}
					}
					vMap.y = y;
				}
				if(position > 150 && position <= 210){
					Game.level++;					
					vMap.y = y;
					if(Game.level > Game.list.length-5){
						vMap.addLevel();
					}
					_this.move();
				}
				if(position>=0 && position<60){
				var canMoveY = true;
				var canMoveX = true;
				for(var c=0;c<count;c++){
					var posStart = Game.list[Game.level].pos[c][0],
						posEnd = Game.list[Game.level].pos[c][1];
					if(_this.man.x>=posStart-30 && _this.man.x<=posEnd+30){
						canMoveY = false;
						break;
					}
				}
				var level = Game.list[Game.level];
				var posStart=0,posEnd=640;
				if(level.hasOwnProperty('prev')){
					if(level.prev.hasOwnProperty('left')){
						posStart = level.prev.left,
						posEnd = level.prev.left+25;
					}
					
				}
				if(posStart==0){
					if(x<=30){
						_this.man.x = 30;
					}else if(x>=640-31){
						_this.man.x = 640-31;
					}else{
						_this.man.x = x;
					}
				}else{
					if(_this.man.x < posStart && _this.man.x>=0){
						if(x<=30){
							_this.man.x = 30;
						}else if(x>= posStart-31){
							_this.man.x = posStart-31;
						}else{
							_this.man.x = x;
						}
					}
					if(_this.man.x > posEnd && _this.man.x<=640){
						if(x<=posEnd+30){
							_this.man.x = posEnd+30;
						}else if(x>=640-31){
							_this.man.x = 640-31;
						}else{
							_this.man.x = x;
						}
					}
				}
				
				if(canMoveY){
					vMap.y = y;					
				}
				}
			}	
			
			
			if(gravity.y > 0) {
				//_this.man.rotation = 180;
			}else if(gravity.y == 0) {
				_this.man.rotation = 0;
			}else{
				_this.man.rotation = 0;
			}
		}
		
		this.clear = function(){
			_this.parent.removeAllChildren();
		}	
	}
	//冰泉
	obj.Water = function(x,index){
		this.initialize();
		this.x = x;
		this.y = 20;		
		this.index = index;	
		var _this = this;
		var ssW = 130,ssH = 130;
		this.water = new createjs.Bitmap(Game.getResult("water"));
		createjs.Tween.get(_this.water,{loop:true})
			.to({y:_this.water.y+7,},500).to({y:_this.water.y},1000);
		this.water.disable = false;
		this.addChild(_this.water);
		var txt = new createjs.Text();
			txt.font = "40px Arial";
			txt.color = "red";								
			txt.text = "体力+3";
		if(localStorage.getItem('firstObs') == null){
			if(Game.waterFirst == 0){
				_this.txt1 = new createjs.Text();
				_this.txt1.font = "25px Arial";
				_this.txt1.color = "red";								
				_this.txt1.text = "喝冰泉增肌体力";
				_this.txt1.y = -10;
				createjs.Tween.get(_this.txt1,{loop:true})
					.to({y:_this.txt1.y+7,},500).to({y:_this.txt1.y},1000);
					
				this.addChild(_this.txt1);
				Game.waterFirst=1;
				localStorage.setItem('firstObs',1);
			}
		}
		this.drink = function(){
			if(Game.level == index){
				if(rman.man.x >= _this.x && rman.man.x <this.x+130 ){
					_this.addChild(txt);
					Game.time += 3;
					this.water.disable = true;
		            createjs.Tween.get(txt).to({
		                y: txt.y - 70,
		                alpha: 0
		            },
		            600).call(function() {
		                txt.parent.removeChild(txt);		                
		            }) 
		            createjs.Sound.play(Game.bonus, !0);
		            _this.disappear();
		            //_this.removeEventListener("tick",addTime); 
				}
			}
		}
		this.disappear = function() {	
            _this.removeChild(_this.water);
            _this.removeChild(_this.txt1);
        };
		this.on('tick',function(){
			if(this.water.disable==false){
				_this.drink();
			}
		})
		this.clear = function(){
			_this.parent.removeAllChildren();
		}	
	}
	//敌人
	obj.Enemy = function(x1,x2,direction,index){
		this.initialize();
		var ssW = 64,ssH = 76;
		var data = new createjs.SpriteSheet({
			"images": ["images/yman.png"],
			"frames": {"regX": 0, "regY": 0, "height": ssH, "width": ssW, "count": 6},		
			"animations": {"run": [0, 5,'run', 0.2],"stand":[0]}
		});
		_this = this;
		_this.man = new createjs.Sprite(data);
		_this.man.y=90;
		_this.man.regX = 32;
		_this.man.regY = 38;
		_this.index = index;
		this.addChild(_this.man);
		var duration = parseInt(Math.random()*2000)+2000;
		_this.txt1 = new createjs.Text();
		if(localStorage.getItem('firstObsEnemy') == null){
			if(Game.enemyFirst == 0){
				
				_this.txt1.font = "20px Arial";
				_this.txt1.color = "red";								
				_this.txt1.text = "被他抓住游戏结束";
				_this.txt1.y = 0;
				this.addChild(_this.txt1);
				Game.enemyFirst=1;
				localStorage.setItem('firstObsEnemy',1);
			}
		}
		if(direction=='left'){
			_this.man.rotation = 90;			
			_this.man.x = x1+32;
			createjs.Tween.get(_this.man,{loop:true})
				.to({x:x2-32},duration).to({rotation:-90},20).to({x:x1+32},duration).to({rotation:90});
			createjs.Tween.get(_this.txt1,{loop:true})
				.to({x:x2-32},duration).to({x:x1+32},duration);
		}else{
			_this.man.rotation = -90;
			_this.man.x = x2-32;
			createjs.Tween.get(_this.man,{loop:true})
				.to({x:x1+32},duration).to({rotation:90},20).to({x:x2-32},duration).to({rotation:-90});
			createjs.Tween.get(_this.txt1,{loop:true})
				.to({x:x1+32},duration).to({x:x2-32},duration);
		}
		
		_this.man.gotoAndPlay('run');	
		Game.enemyList.push(this);
		
	}
	//倒数
	obj.vCountDown = function () {
		this.initialize();
		this.x = this.y = 0;							
		this.ready = function (b) {	
			$('.homeLayer').add('.footerLayer').hide();
			console.log('ready');
		};
	};
	//关卡图
	obj.vMap = function () {
		this.initialize();
		this.x = this.y = 0;							
		var startBg = new createjs.Bitmap(Game.getResult('start'));
		startBg.x = 0;
		startBg.y = canvasH-startH;
		var len = parseInt(canvasH/140)+2;
		var easylist = [0,1,2,3,4,5,6,7,8,17,18]
    	var highLevel = [[0,11,19,5],[1,18,10,2],[18,10,9,4],[4,15,14,3],[6,11,19,5],
    					 [8,13,10,0],[4,10,12,20],[0,19,14,6],[2,12,14,3],[6,19,15,1],
    					 [5,11,13,12,6],[0,10,14,15,19],[18,14,10,15,19],[0,19,10,14,7],[17,14,11,15,6],
    					 [0,11,10,19,5],[1,18,12,11,2],[2,20,15,19,4],[4,15,19,14,17],[6,11,13,10,0],
    					 [1,11,13,12,0],[3,5,10,15,4],[18,10,15,14,6],[0,10,19,14,8],[18,14,15,11,4],
    					];
		var _this = this;
	    this.init = function(){	    	
	    	var random = parseInt(Math.random()*3)
	    	Game.list.push({type:random,prev:{}});
	    	//Game.list.push({type:4,prev:{},enemy:1});
	    	
	    	for(var i=0; i<4; i++){
	    		var r = parseInt(Math.random()*8);
	    		var o = {type:easylist[r],prev:{}};
	    		var r = parseInt(Math.random()*3);
	    		if(r==1){
	    			o.water = 1;
	    		}else{
	    			o.water = 0;
	    		}
	    		Game.list.push(o);
	    	}
	    	var rLevel1 = parseInt(Math.random()*25);
	    	for(var j=0;j<highLevel[rLevel1].length;j++){
	    		var o = {type:highLevel[rLevel1][j],prev:{}};
	    		var r = parseInt(Math.random()*3);
	    		if(r==1){
	    			o.water = 1;
	    		}else{
	    			o.water = 0;
	    		}
	    		Game.list.push(o);
	    	}
	    	
	    	//Game.list.push({type:3,pos:[],prev:[]});
	    	// list = [{type:0,pos:[],prev:[]}]
	    	for(var k=0;k<Game.list.length;k++){
	    		var vlevel = new obj.vLevel(Game.list[k],k);
	    		_this.addChild(vlevel);
	    	}

	    }
	    this.addLevel = function(){
	    	var rLevel1 = parseInt(Math.random()*25);
	    	var len = Game.list.length;
	    	for(var j=0;j<highLevel[rLevel1].length;j++){
	    		var o = {type:highLevel[rLevel1][j],prev:{}};
	    		Game.list.push(o);
	    		var range = 5;
	    		if(Game.level>15 && Game.level <30){
					range = 7
	    		}
	    		if(Game.level>=30){
					range = 9
	    		}
	    		var r = parseInt(Math.random()*range);
	    		if(r==2){
	    			o.water = 1;
	    		}else{
	    			o.water = 0;
	    		}
	    		var range1 = 5;
	    		if(Game.level>15 && Game.level <30){
					range1 = 7
	    		}
	    		if(Game.level>=30 && Game.level>45){
					range1 = 5
	    		}
	    		if(Game.level>=45){
					range1 = 3
	    		}
	    		var r = parseInt(Math.random()*range1);
	    		if(r==1){
	    			o.enemy = 1;
        			o.enemyIndex = Game.enemyList.length;
	    		}else{
	    			o.enemy = 0;
	    		}
	    		var vlevel = new obj.vLevel(Game.list[len+j],len+j);
	    		_this.addChild(vlevel);
	    	}
	    }
		this.addChild(startBg);
	};
	/* 关卡  */
	obj.vLevel = function(level,index) {
		this.initialize();
		this.x = 0;
		this.y = canvasH - 150*(index+1)-startH;
        switch(level.type) {
        	case 0:
        		level.pos = [[0,98],[220,504]];
        		level.cross = [[98,220],[504,640]];
        		var r1 = new obj.vRail('line1',0,98);
        		var r2 = new obj.vRail('line6',220,284);
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 1: 
        		level.pos = [[130,321],[322,519]];
        		level.cross = [[0,130],[519,640]];
        		var r1 = new obj.vRail('line4',130,191);
        		var r2 = new obj.vRail('line5',322,197);
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
				if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 2: 
        		level.pos = [[205,640]];
        		level.cross = [[0,205]];
        		var r1 = new obj.vRail('line7',205,431);
        		this.addChild(r1);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 3: 
        		level.pos = [[0,284],[410,508]];
        		level.cross = [[284,410],[508,640]];
        		var r1 = new obj.vRail('line4',0,284);
        		var r2 = new obj.vRail('line1',410,98);
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 4: 
        		level.pos = [[130,321],[321,510]];
        		level.cross = [[0,130],[510,640]];
        		var r1 = new obj.vRail('line4',130,191);
        		var r2 = new obj.vRail('line2',321,189);
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 5: 
        		level.pos = [[150,347]];
        		level.cross = [[0,150],[347,640]];
        		var r1 = new obj.vRail('line5',150,197);
        		this.addChild(r1);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 6: 
        		level.pos = [[0,197],[356,640]];
        		level.cross = [[197,356]];
        		var r1 = new obj.vRail('line5',0,197);
        		var r2 = new obj.vRail('line6',356,285);
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 7: 
        		level.pos = [[0,451]];
        		level.cross = [[451,640]];
        		var r1 = new obj.vRail('line7',20,431);
        		this.addChild(r1);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 8: 
        		level.pos = [[150,480]];
        		level.cross = [[0,150]];
        		var r1 = new obj.vRail('line3',150,330);
        		this.addChild(r1);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 9: 
        		level.pos = [[150,341]];
        		var r1 = new obj.vRail('line3',150,191);
        		level.prev = {left:500}
        		var r2 = new obj.vRailSub('sline1',500);
        		level.cross = [[0,150],[341,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*200);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,500,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 10: 
        		level.pos = [[0,197],[356,500]];
        		var r1 = new obj.vRail('line5',0,197);
        		var r2 = new obj.vRail('line6',356,134);
        		level.prev = {left:356}
        		var r3 = new obj.vRailSub('sline2',356);
        		level.cross = [[197,356]];
        		this.addChild(r1,r2,r3);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*100);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,350,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 11: 
        		level.pos = [[130,321],[322,519]];
        		var r1 = new obj.vRail('line4',130,191);
        		var r2 = new obj.vRail('line5',322,197);
        		level.prev = {left:316}
        		var r3 = new obj.vRailSub('sline2',316);
        		level.cross = [[0,130],[519,640]];
        		this.addChild(r1,r2,r3);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*100);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(340,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 12: 
        		level.pos = [[100,400]];
        		var r1 = new obj.vRail('line7',100,300);
        		level.prev = {left:380}
        		var r2 = new obj.vRailSub('sline1',380);
        		level.cross = [[0,100],[300,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*100);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,380,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 13:
        		level.pos = [[380,478]];
        		var r1 = new obj.vRail('line1',380,98);
        		level.prev = {left:216}
        		var r2 = new obj.vRailSub('sline2',216);
        		level.cross = [[0,380],[478,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*300)+200;
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(250,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 14:
        		level.pos = [[120,318]];
        		var r1 = new obj.vRail('line1',120,198);
        		level.prev = {left:450}
        		var r2 = new obj.vRailSub('sline2',450);
        		level.cross = [[0,120],[318,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*100);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,440,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 15: 
        		level.pos = [[109,500]];
        		var r1 = new obj.vRail('line7',109,400);
        		level.prev = {left:109}
        		var r2 = new obj.vRailSub('sline1',109);
        		level.cross = [[0,109],[500,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*300)+200;
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(140,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 16: 
        		level.prev = {left:300}
        		var r1 = new obj.vRailSub('sline2',300);
        		this.addChild(r1);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*200)+300;
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(340,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 17: 
        		level.pos = [[0,197],[356,640]];
        		var r1 = new obj.vRail('line5',0,197);
        		var r2 = new obj.vRail('line3',356,285);
        		level.cross = [[197,356]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"right",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 18:
        		level.pos = [[0,234],[360,498]];
        		var r1 = new obj.vRail('line6',0,234);
        		var r2 = new obj.vRail('line1',360,98);
        		level.cross = [[234,380],[498,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*500);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,640,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 19: 
        		level.pos = [[0,197],[356,510]];
        		var r1 = new obj.vRail('line5',0,197);
        		var r2 = new obj.vRail('line6',356,145);
        		level.prev = {left:356}
        		var r3 = new obj.vRailSub('sline2',356);
        		level.cross = [[197,356],[510,640]];
        		this.addChild(r1,r2,r3);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*100);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,350,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        	case 20: 
        		level.pos = [[300,500]];
        		var r1 = new obj.vRail('line7',300,200);
        		level.prev = {left:500}
        		var r2 = new obj.vRailSub('sline1',300);
        		level.cross = [[0,300],[500,640]];
        		this.addChild(r1,r2);
        		if(level.water == 1){
        			var x = parseInt(Math.random()*100);
        			var w = new obj.Water(x,index);
        			this.addChild(w);
        		}
        		if(level.enemy==1){
        			var enemy = new obj.Enemy(0,290,"left",index);
        			this.addChild(enemy);
        		}
        		break;
        }
	}
	/* 栏杆 */
	obj.vRail = function(line,x,w){
		this.initialize();
		this.x = this.y = 0;		
		var rail = new createjs.Shape();
            rail.graphics.beginBitmapFill(Game.getResult(line)).drawRect(0, 0, w, 40);
            rail.x = x;
		this.addChild(rail);
	}
	obj.vRailSub = function(line,x){
		this.initialize();
		this.x = this.y = 0;		
		var rail = new createjs.Shape();
            rail.graphics.beginBitmapFill(Game.getResult(line)).drawRect(0, 0, 25, 100);
            rail.x = x;
            rail.y = 38;
		this.addChild(rail);
	}
	obj.vGame.prototype  	   =   new createjs.Container;
	obj.Rman.prototype  	   =   new createjs.Container;
	obj.Enemy.prototype  	   =   new createjs.Container;
	obj.Water.prototype  	   =   new createjs.Container;
	obj.vCountDown.prototype   =   new createjs.Container;
	obj.vMap.prototype   =   new createjs.Container;
	obj.vRail.prototype   =   new createjs.Container;
	obj.vRailSub.prototype   =   new createjs.Container;
	obj.vLevel.prototype   =   new createjs.Container;
	obj.vHome.prototype  	   =   new createjs.Container;
	createjs.DisplayObject.prototype.onClick = function(a){
        this.on("click",function(event) {
            createjs.Touch.isSupported() && event.nativeEvent.constructor == MouseEvent || a(event);
        })
    }
	return obj;
})(Stage || {})

function setup(){		
	Game.level = 0;
	Game.time = 40;
	Game.list=[];
	Game.vGame = new Stage.vGame;
	Game.interval = null;
	Game.enemyList = [];
	App.stage.addChild(Game.vGame);	
	createjs.Ticker.setPaused(false);	

	
}
function init(){	
	Game.vHome = new Stage.vHome;
	App.stage.addChild(Game.vHome);
	var progressTxt = new createjs.Text('0%','40px Arial','#FFF');
	progressTxt.x = W/2;	
	progressTxt.y = 570-50;
	progressTxt.textAlign = "center";	
	progressTxt.name = "progress";
	progressTxt.alpha = 0;
	Game.vHome.addChild(progressTxt);
	//加载游戏主要资源
	App.queueGame = new createjs.LoadQueue(false);
	App.queueGame.on("complete", startGame , null, !0);	
	App.queueGame.on("progress", loadingProgress, null);
	_cfgGame.img && App.queueGame.loadManifest(_cfgGame.img);
	App.queueGame.load();
	App.queueGame.installPlugin(createjs.Sound);
	createjs.Sound.alternateExtensions = ["wav"];
	createjs.Sound.addEventListener("fileload", playSound);
	Game.bonus = "audio/bonus.wav";
	createjs.Sound.registerSound(Game.bonus);
	function playSound(event) {
	}
	//App.queueGame.installPlugin(createjs.Sound);
	
	//createjs.Sound.alternateExtensions = ["mp3"];
	//createjs.Sound.addEventListener("fileload", playSound);
	//createjs.Sound.registerSound(Game.right, true);
	//createjs.Sound.registerSound(Game.wrong, true);
}
//游戏资源加载完成回调
function startGame(){
	Game.hasLoadResource = true;
	//USE_NATIVE_SOUND || (IS_NATIVE_ANDROID ? (createjs.Sound.registMySound("flip", 0), createjs.Sound.registMySound("bonus", 2), createjs.Sound.registMySound("silenttail", 4)) : (createjs.Sound.alternateExtensions = ["ogg"], App.queueGame.installPlugin(createjs.Sound)));				
	if(Game.hasClickStart == true){
		_cfgGame.startFunc();
	}
}
//加载进度回调
function loadingProgress(a){
	Game.vHome.getChildByName('progress').text = parseInt(100 * a.progress) + "%";	
	console.log('游戏已加载'+parseInt(100 * a.progress) + "%");
	// ele("cup").style.marginLeft = (parseInt(100 * a.progress)/100)*240+"px";
	// $("#loadingNum").html(parseInt(100 * a.progress)+"%");
	if(parseInt(100 * a.progress)==100){
		$('#loading').hide();
		$("#main").show();  
	} 
	if(Game.hasClickStart == true){			
		Game.vHome.getChildByName('progress').alpha =1;		
	}	
}
(function() {
    Array.prototype.indexOf = function(a) {
        for (var b = 0; b < this.length; b++) {
			if (this[b] == a) return b;
		}
        return - 1
    };
    Array.prototype.remove = function(a) {
        a = this.indexOf(a); 	
		a > -1 && this.splice(a, 1)
    };
    Math.randomInt = function(a) {
        return parseInt(Math.random() * a);
    }
})();

var _cfgHome = {
    startFunc: init,
    img: {
        manifest: []
    }
};
var _cfgGame = {
    startFunc: setup,
    img: {
        manifest: [{
			src : 'images/bg.png',
			id : 'gameBg'
		},{
			src : 'images/score.png',
			id : 'score'
		},{
			src : 'images/rman.png',
			id : 'rman'
		},{
			src : 'images/water.png',
			id : 'water'
		},{
			src : 'images/time-bar1.png',
			id : 'timeBar'
		},{
			src : 'images/line1.png',
			id : 'line1'
		},{
			src : 'images/line2.png',
			id : 'line2'
		},{
			src : 'images/line3.png',
			id : 'line3'
		},{
			src : 'images/line4.png',
			id : 'line4'
		},{
			src : 'images/line5.png',
			id : 'line5'
		},{
			src : 'images/line6.png',
			id : 'line6'
		},{
			src : 'images/line7.png',
			id : 'line7'
		},{
			src : 'images/sline1.png',
			id : 'sline1'
		},{
			src : 'images/sline1.png',
			id : 'sline2'
		},{
			src : 'images/start.png',
			id : 'start'
		}]
    }
};

function BtnStart(x,y,r){
	this.initialize();
	this.x = this.y = 0;
	this.hasLoading = false;		
	var _this = this;	
	/*---------------------------------开始游戏---------------------------------*/
	$('#beginBtn').on('click',function(){	
		if(localStorage.getItem('first') == null)	{
			$('#leadin').show();
		}
		if(Game.hasLoadResource){
			//已经加载好资源，开始游戏
			_this.removeAllChildren();
			_cfgGame.startFunc();
			$('#main').hide();
		}else{
			Game.hasClickStart = true;
			if(_this.hasLoading)return;
			_this.hasLoading = true;						
			createjs.Tween.get(_this).to({alpha:0.2},200).call(function(){
				_this.removeAllChildren();																						
			})
		}
					
})		
		
}

BtnStart.prototype = new createjs.Container;
