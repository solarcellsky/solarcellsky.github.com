var ww,hh,LLDH,S=this,canvas,stage,exportRoot=[],ldMc,paging,isMove;
var	onPage=1,totalPage=3;
var BGM,CC,android

function inIt()
{
	mathPhone() 
	resizeF()
	$(window).resize(resizeF)
	//
	canvas = document.getElementById("canv");
	stage = new createjs.Stage(canvas);
	stage.enableDOMEvents(false);
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stage);
	//
	window.addEventListener('orientationchange', checkHV);
	LLDH=new luoeeLoaderHelper()
	//addScorllEvent()
	BGM=new addBgm()
}
function checkHV()
{
	if( window.orientation == 180 || window.orientation==0 ) 
	{
		$("#HVTip").css({"display":"none"})
		$("#canv").css({"display":"block"})
	}
    if( window.orientation == 90 || window.orientation == -90 ) 
	{
		$("#HVTip").css({"width":ww,"height":hh,"display":"block","visibility":"visible"});
		$("#canv").css("display","none");
	}
}
function resizeF()
{
	ww=$(window).width();
	hh=$(window).height();
	
	$("#canv").css({"top":(hh-1040)*.5})
	$(".wh").css({"width":ww,"height":hh})
	
	if(!android)
	{
		$("#custom").css("top",(hh-1040)*.5+444)
		$("#nick").css("top",(hh-1040)*.5+796)
	}
	else
	{
		$("#custom").css("top",(hh-1040)*.5+464)
		$("#nick").css("top",(hh-1040)*.5+816)
	}	
	window.scroll(0,0);
}




function luoeeLoaderHelper()
{
	var _s=this;
	_s.readyState=[];
	_s.autoId;
	
	var _ldId	
	var ld=new createjs.LoadQueue(false);
	ld.installPlugin(createjs.Sound);
	ld.addEventListener("fileload", _loaded);
	ld.addEventListener("complete", _loadComplete);
	//--------------------
	_s.loadPage=function(_id)
	{
		console.log(_id)
		_s.readyState[_id]=["ing"]
		ld.removeAll();
		//
		_ldId=_id;
		_ldId==onPage?stage.addChild(ldMc):null;
		if(S["lib"+_ldId].properties.manifest.length>0)
		{
			$["img"+_ldId] = $["img"+_ldId]||{};
			ld.loadManifest(S["lib"+_ldId].properties.manifest);
		}
		else
		{ 
			_loadComplete() 
		}
	}	
	//------------------
	function _loaded(e)
	{
		if (e.item.type == "image") { S["img"+_ldId][e.item.id] = e.result; }
		//lding
		_ldId==onPage?stage.addChild(ldMc):null;
		if(ldMc)
		{
			var _per=Math.floor((ld._numItemsLoaded/ld._numItems)*100);
			//ldMc.gotoAndStop(_per);
			//ldMc.txt.text=_per+"%";
			_per=String("0"+_per).substr(-2,2)
			ldMc.s.gotoAndStop(Number(_per.substr(0,1)));
			ldMc.g.gotoAndStop(Number(_per.substr(1,1)));
		}
	}
	function _loadComplete(e)
	{
		_s.readyState[_ldId]=["ed"]
		//exportRoot[ldingPage] = new S["lib"+ldingPage]["s"+ldingPage]();//s+ldingPage是fla名字
		if(_ldId==0){ ldMc = new lib0.s0().ldMc;  };
		if(_ldId==1&&BGM){ /*$("#auBtn").css("display","block");*/ BGM.mp3PP();}
		if(_ldId==onPage||_ldId==_s.autoId){_s.autoId=null ; stage.removeChild(ldMc) ; changeScene(_ldId,"next")}
		//
		_ldId++;
		if(_ldId<totalPage)
		{	
			_s.loadPage(_ldId);
		}
		else
		{	
			ld=null;
			console.log("Load finish!")	
		}
	}
	return _s
}
function changeScene(_page,_arrow,_time)
{
	console.log("onPage:"+onPage,"_arrow:"+_arrow,"_page:"+_page,"_teim:"+_time,"paging:"+paging,totalPage)
	if(paging||_page==0||_page==totalPage){return}; //正在运动  //首页  //尾页
	if(LLDH.readyState[_page]=='ing'){LLDH.autoId=_page; stage.addChild(ldMc)}
	if(LLDH.readyState[_page]!="ed"){return}//还没加载好,停在当前页加载
	//
	paging=true;
	_time=="undefined"?_time=.5:_time;	
	inScene(_page,_arrow,_time)
	onPage!=_page?outScene(onPage,_arrow,_time):null;
	onPage=_page;
}
function inScene(_page,_arrow,_time)
{	
	//!exportRoot[_page]?exportRoot[_page] = new S["lib"+_page]["s"+_page]():null;
	exportRoot[_page] = new S["lib"+_page]["s"+_page]()
	stage.addChildAt(exportRoot[_page],0)
	exportRoot[_page].gotoAndStop(1)
	TweenMax.set(exportRoot[_page],{y:_arrow=="next"?1040:-1040})
	TweenMax.to(exportRoot[_page],_time,{y:0,ease:Cubic.easeOut,onComplete:function()
		{
			paging=false	
		}
	})
	//ggTrack("page_"+_page)
}
function outScene(_page,_arrow,_time)
{	
	TweenMax.to(exportRoot[_page],_time,{y:_arrow=="next"?-1040:1040,ease:Cubic.easeOut,onComplete:function()
		{
			stage.removeChild(exportRoot[_page])
			exportRoot[_page]=null	
		}
	})		
}


function playSound(id, loop) {	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);  }
function stopSound(id)       {	createjs.Sound.stop(id); }

function addScorllEvent()
{
	var sy,ey
	function _checkIt()
	{
		if(!isMove){return;}
		//
		if(sy-ey<-50)
		{
			changeScene(onPage-1,"prev")	
		}
		else if(sy-ey>50)
		{
			//if(arrPass[onPage]!=1){return}
			changeScene(onPage+1,"next")			
		}
		isMove=false;	
	}
	//
	$("#canv").on("touchstart",function(e)
	{
		sy=e.originalEvent.targetTouches[0].pageY;
	})
	$("#canv").on("touchmove",function(e)
	{
		isMove=true
	})
	$("#canv").on("touchend",function(e)
	{
		ey=e.originalEvent.changedTouches[0].pageY;
		_checkIt();
	})
}

function addBgm()
{
	var _S=this
	_S.au=document.getElementById("bgm");
	$("#auBtn").on("touchstart",function(e)
	{
		BGM.mp3PP();
		ggTrack("bgmOnOff")
	})
	_S.mp3PP=function()
	{
		if(!_S.au.paused)
		{
			_S.au.pause()
			$("#auBtn").css("background-position","-55px 0px")
		}
		else
		{
			_S.au.play();
			$("#auBtn").css("background-position","0px 0px")
		}
	}
	return _S
}

function mathPhone() 
{
	var ua = navigator.userAgent.toLowerCase();
 	android = ua.match(/android/i) == "android";
}




$(document).ready(inIt);
window.onload=function()
{
	
	LLDH.loadPage(0)
}