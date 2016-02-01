// JavaScript Document
var Game={
	width:function(){
		return 640;//window.innerWidth>640?640:window.innerWidth;//
	},
	height:function(){
		return window.innerHeight<800?800:window.innerHeight;
	},
	globleScale:function(){
		return (window.innerWidth>640?640:window.innerWidth)/640;
	},
	assets:{
		images:{
			model1:[
				'./asset/images/title.png',
				'./asset/images/game_bg.png',
				'./img/pan.png',
				"./img/wang.png",
				"./img/wangup.png",
				
				"./asset/images/coins/time_bg.png",
				"./asset/images/coins/time_now.png",
				"./asset/images/pao1.png",
				"./asset/images/pao2.png",
				"./asset/images/pao3.png",
				"./asset/images/pao4.png",
				"./asset/images/c2.png",
				"./asset/images/c3.png",
				"./asset/images/j5.png",
				"./asset/images/stage1/f_0.png",
				"./asset/images/stage1/f_1.png",
				"./asset/images/stage1/f_6.png",
				"./asset/images/stage1/f_7.png",
				"./asset/images/stage1/wuzi.png",
				"./asset/images/stage1/shazi.png",
				"./asset/images/stage1/cao1.png",
				"./asset/images/stage1/cao2.png",
				"./asset/images/stage1/cao3.png",
				"./asset/images/stage1/cao4.png",
				"./asset/images/stage1/f_2.png",
				"./asset/images/stage1/f_3.png",
				"./asset/images/stage1/f_4.png",
				"./asset/images/stage1/f_5.png"
			]
		},
		mp3:{
			model1:[
				"./asset/sound/bg.mp3"
			]
		},
		video:{
			model1:[
				
			]
		}
	},
	config:{    
		time:35,						//每关 时间
		isPause:false,					//暂停状态
		coins:[0,0,0],					//每关得分 以及起始分
		winScore:[150,200,250], 		//每关过关分数线
		dragging:false,					//渔网 拖动状态
		freshTime:[2000,2000,2000],		//每关刷怪 间隔时间
		qipaoItemNum:[1,2,3],			//每关 每次刷新气泡 总数
		fishItemNum:[8,7,10],			//每关 每次刷怪总数 ---鱼
		monstersItemNum:[2,2,2],		//每关 每次刷怪总数 ---水草
										//注意： 刷怪总数设置 太大 会出现卡顿现象
		fishType:[						// 每关 鱼类设置
			[
				{img:"./asset/images/stage1/f_4.png",spos:"left-bottom",mysorce:-5},
				{img:"./asset/images/stage1/f_5.png",spos:"right-bottom",mysorce:-5},
				{img:"./asset/images/stage1/f_0.png",spos:"left",mysorce:3},
				{img:"./asset/images/stage1/f_1.png",spos:"bottom",mysorce:3},
				{img:"./asset/images/stage1/f_2.png",spos:"left",mysorce:2},
				{img:"./asset/images/stage1/f_3.png",spos:"right",mysorce:2},
				{img:"./asset/images/stage1/f_4.png",spos:"left",mysorce:-5},
				{img:"./asset/images/stage1/f_5.png",spos:"right",mysorce:-5},
				{img:"./asset/images/stage1/f_6.png",spos:"right-top",mysorce:2},
				{img:"./asset/images/stage1/f_7.png",spos:"left-top",mysorce:2},
				{img:"./asset/images/stage1/f_4.png",spos:"left",mysorce:-5},
				{img:"./asset/images/stage1/f_5.png",spos:"right",mysorce:-5},
				{img:"./asset/images/stage1/f_4.png",spos:"left",mysorce:-5},
				{img:"./asset/images/stage1/f_5.png",spos:"right",mysorce:-5}

			]

		]								
	},
	dragDate:{x:0,y:0},
	loadimg:function(){
	},
	getScoreImg:function(index){
		var temp=null;
		switch(index){
			case 2:
				temp="./asset/images/c2.png";
				break;
			case 3:
				temp="./asset/images/c3.png";
				break;
			case -5:
				temp="./asset/images/j5.png";
				break;
			default:
				break;
		}
		return temp;
	},
		
		//checkletgo:function(this,num1,1){
		//Game.onHitEventHandle(this,num1,1);
		//},

	onHitEventHandle:function(hitobj,numobj,stage){

		if(!Game.config.dragging){
		return;
		}
		var s=hitobj.mysorce;
		var img=Game.getScoreImg(s);
		//hitobj.stop();
		hitobj.attr({z:5}); //停止运动
		var dx=hitobj.x,dy=hitobj.y;
		//捕获动画
		Crafty.e("2D,DOM,Image,Delay,Tween")
		.attr({
				x:dx,
				y:dy,
				w:Crafty.assets[img].width,
				h:Crafty.assets[img].height,
				alpha:1
			})
		.image(img).tween({y:dy-100,alpha:0},500,function(){
			this.destroy();
		});
		
		
//var text2 = Crafty.e("2D,DOM,Text")
//	.text(s)
//	.attr({
//			x:20,
//			y:400,
//			w:50,
//			h:50,
//			alpha:1
//		})
//	.text(s).animateTo({y:300,alpha:0},500,function(){
//		this.destroy();
//	});
		
		
		//左边鱼盘的加分显示
		var leftfen = s;
		if(leftfen>0){leftfen='+'+leftfen;}
		$('.panfen').html(leftfen);
		$('.panfen').show();
		$('.panfen').animate({top:'55%',opacity:'0'},500,function(){
		$('.panfen').hide();
		$('.panfen').css('top','60%');
		$('.panfen').css('opacity','1');
		});
		
		
		//加分
		if(!Game.config.coins[stage-1]){Game.config.coins[stage-1]=0;}
		Game.config.coins[stage-1]+=s;
		var score_now=$('.score font').text();
		//alert(score_now);
		score_now=parseInt(score_now)+parseInt(s);
		if(score_now<0)score_now=0;
		//alert(score_now);
		$('.score font').text(score_now);
		//计分器更新
		numobj.update(Game.config.coins[stage-1]);
		hitobj.destroy();
		letok=0;
		Game.config.dragging=false;
	},

	createBg:function(){
		return Crafty.e("2D,Canvas,Image,Persist")
			.attr({
					x:0,
					y:0,
					w:Crafty.viewport.width,
					h:Crafty.viewport.height
				})
			
			.image(Game.assets.images.model1[1]);
				//alert(.attr.w)
	},
	createSlider:function(yuwang){
		var cover=Crafty.e("2D,Canvas,Color,Mouse")
			.attr({x:0,y:280,z:7,w:Crafty.viewport.width,h:Crafty.viewport.height-68-280}).color("transparent")
			.bind("MouseDown",function(e){
				var tx=e.realX,ty=e.realY;
				var cx=yuwang.x,cy=yuwang.y;
				//yuwang.moveToTarget({x:tx,y:ty},100);
				var ox=yuwang.x,oy=yuwang.y;
//				console.log(tx+";"+ty+";;;"+ox+";"+oy);
//				if((ox+81)<tx){yuwang.flip("X").attr({x:tx-81-238,y:ty-50});}
//				else {yuwang.unflip("X").attr({x:tx-81,y:ty-50});}
				yuwang.attr({x:tx-81,y:ty-120});
				yuwang.startDrag();
				Game.config.dragging=false;
				Game.dragDate.x=tx;
				Game.dragDate.y=ty;
				yuwangup.attr({alpha:0});
				//yuwang.attr({alpha:0});
			});
			cover.bind("MouseUp",function(e){
				yuwang.stopDrag();
				Game.config.dragging=true;
				setTimeout(function(){
				Game.config.dragging=false;
	
				},100)
				//Game.onHitEventHandle();
				//alert(letgo)
				//Crafty.sprite(199,249,"./asset/images/sprite/wang2_up.png",{"Wang":[0,0]});
				//yuwang.attr({alpha:1});
				//Crafty.e("FishingNetup");	
				yuwangup.attr({alpha:1});
			});
			yuwang.bind("Dragging",function(e){

			});
		return cover;
	},
	start:function(){
		Crafty.init(Game.width(),Game.height());
		Crafty.background('#000');
		//Crafty.border('0');
		Crafty.support.audio= true;
		Crafty.scene('Loading');
		
		//页面事件绑定

		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){
			if(window.orientation==90||window.orientation==-90){
				Game.renderInfoWin("shupin");
				//alert('横屏')
			}else if(window.orientation==180||window.orientation==0){
				Game.closeInfoWin("shupin");
				//alert('竖屏')
			}
		}, false);

		var phone=Game.gc("phonenum");
		if(phone){
			document.getElementById("phone1").value=phone;
			document.getElementById("phone2").value=phone;
			document.getElementById("phone3").value=phone;
		}
	},
	//HTML 事件代码
	gc:function (objName){
		var arrStr = document.cookie.split("; ");
		for(var i = 0;i < arrStr.length;i ++){
			var temp = arrStr[i].split("=");
			if(temp[0] == objName) return unescape(temp[1]);
		}
	},
	sc:function(objName,objValue,objHours){
		var str = objName + "=" + escape(objValue);
		!(objHours==undefined)&&(objHours=24);
		if(objHours > 0){
			var date = new Date();
			var ms = objHours*3600*1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString();
		}
		document.cookie = str;
	},
	addClass:function(obj,classname){
		var _class=obj.className,classArray=[];
		if(!!_class){
			classArray=String(_class).split(" ");
			for(var i=0;i<classArray.length;i++){
				if(classname==classArray[i]){return obj;}
			}
		}
		classArray.push(classname);
		obj.className=classArray.join(" ");
		return obj;
	},
	removeClass:function(obj,classname){
		var _class=obj.className,classArray=[];
		if(!!_class){
			classArray=String(_class).split(" ");

		}
		for(var i=0;i<classArray.length;i++){
			if(classname==classArray[i]){
				classArray.splice(i,1);
			}
		}
		obj.className=classArray.join(" ");
		return obj;
	},
	getDomByClass:function(dom,clasaName,tagName){
		tagName = !!tagName?tagName:"*";
		dom=!!dom?dom:document;
		if(dom.getElementsByClassName){
			return dom.getElementsByClassName(clasaName);
		}else{
			var node=dom.getElementsByTagName(tagName),ret=[];
			for(var i=0;i<node.length;i++){
				if(hasClass(node[i],clasaName)){
					ret.push(node[i]);
				}
			}
			return ret;
		}
	},
	hasClass:function(tag,className){
		var strArr=tag.className.split(/\s+/);//Class Name 数组
		for(var i=0;i<strArr.length;i++){
			if(strArr[i]==className){
				return true;
			}
		}
		return false;
	},
	btnObj:null,
	renderInfoWin:function(id){
		var dom=document.getElementById(id);
		//var tar=Game.getDomByClass(dom,"content","div")[0];
		dom.style["display"]="block";
		//Game.addClass(tar,"animate");
	},
	closeInfoWin:function(id){
		var dom=document.getElementById(id);
		//var tar=Game.getDomByClass(dom,"content","div")[0];
		dom.style["display"]="none";
		//Game.removeClass(tar,"animate");
		//if(Game.config.isPause){
		//	Crafty.pause();
		//	Game.config.isPause=false;
		//	if(Game.btnObj){
		//		Game.btnObj.reel("fm1").attr({x:Crafty.viewport.width-160});
		//	}
		//}
	},
	//ajax
	getajaxHttp:function getajaxHttp() {
    	var xmlHttp;
    	try {
        // Firefox, Opera 8.0+, Safari
        	xmlHttp = new XMLHttpRequest();
        }catch (e) {
            // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
				try {
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					alert("您的浏览器不支持AJAX！");
					return false;
				}
			}
		}
		return xmlHttp;
	},
	/**
	 * 发送ajax请求
	 * url--url
	 * methodtype(post/get)
	 * con (true(异步)|false(同步))
	 * parameter(参数)
	 * functionName(回调方法名，不需要引号,这里只有成功的时候才调用)
	 * (注意：这方法有二个参数，一个就是xmlhttp,一个就是要处理的对象)
	 * obj需要到回调方法中处理的对象
	 */
	ajaxrequest:function(url,methodtype,con,parameter,functionName){
    	var xmlhttp=Game.getajaxHttp();
    	xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status == 200){
				//HTTP响应已经完全接收才调用
				functionName(xmlhttp,xmlhttp.responseText);
			}
		};
		xmlhttp.open(methodtype,url,con);
		xmlhttp.send(parameter);
	},
	sendInfo:function(){
		var dom=document.getElementById("p_form");
		var name=Game.getDomByClass(dom,"username","input").item(0).value,
			phone=Game.getDomByClass(dom,"phone","input").item(0).value,
			mail=Game.getDomByClass(dom,"email","input").item(0).value;
		var requestJson={"u_name":name,"u_phone":phone,"u_email":mail}
		Game.ajaxrequest("http://go.163.com/2014/0422/vinda/post_user.php","GET",true,requestJson,Game.responsExec);
	},
	responsExec:function(xmlhttp,respons){
		console.log(respons);
	}
};

