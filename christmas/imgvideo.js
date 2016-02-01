//need config.js




//preloader
//@author Joscha Unger (mail[at]joschaunger.de)

var imgCache = [];
var imgCount = 76;
var preloadCount = 35; //90; //imgCount
var bufferCount = 75; //1-imgCount
var imgLoaded = 0;
var imgIndex = 0;
var imgStartIndex = 76;
var time = 0;
var speedFps = 25;
var interval = 1000/speedFps;
var now;
var then = Date.now();
var delta;
var buffering;
var isIE9 = isIE9 || false;
var useCanvas = !isIE9 && isCanvasSupported();
console.log("useCanvas: "+useCanvas);
//var folder = (window.location.hash=="#mobile") ? "/assets/imgVideo_mobile/abspann/" : "/assets/imgVideo/abspann/";
var folder = "./movie/";


function preloadImg(i){
	if(i==preloadCount) {
		//prelaoder complete
		startAnimation();
		stopPreloader();
	}
	if(i>=imgCount) {
		//all image load complete
		return;
	}
	var imgNo = i+imgStartIndex;
	var imgStr = (imgNo<100) ? "0"+imgNo : imgNo;
	imgStr = (imgNo<10) ? "00"+imgNo : imgStr;
	//var fileName = "img/JPG_Sequenz/"+imgStr+".jpg";
	var fileName = folder+"Mercedes_SK_Abspann_00"+imgStr+".jpg";
	var percent = parseInt(100/preloadCount*i);
	if(percent<10) percent = "0"+percent;
	else if(percent>100) percent = "100";
	
	$t = $("#preloaderPercent").html(percent);
	
	
	
	var ref = this;
	var objImg = new Image();
	objImg.id = "img"+i;
	objImg.src = fileName;
	objImg.onload = function(){ 
		ref.preloadImg(i+1); 
	}
	imgCache.push(objImg);
	
	$(objImg).appendTo('#stage_images').hide();
}




//image animation
function startAnimation(){
	time = new Date().getTime();
	imgIndex = 0;
	loopAnimation();
	if(!useCanvas){
		$("#canvas_display").hide();
	}
}

function showImage(i){
	if(i>=imgCount) return;
	
	//show image using jquery
	if(!useCanvas){
		if(i>0) document.getElementById("img"+(i-1)).style.display = "none";
		document.getElementById("img"+i).style.display = "block";
		
	}
	//show image using canvas
	else{
		var objCanvas = document.getElementById("canvas_display");
		var objImg = imgCache[i];
		
		if(!objCanvas.getContext) return;
		var objContext = objCanvas.getContext('2d');
		objContext.drawImage(objImg, 0, 0);	
	}
	
	
		
}


// global frame loop to toggle images and show/hide text
function loopAnimation(){
	if(imgIndex>=imgCount){
		//animation complete
		/*$("#stage").fadeOut(1000, function(){
			if(parent && parent.videoEndHandler) parent.videoEndHandler();
		});*/
		if(parent && parent.videoEndHandler) parent.videoEndHandler();
		return;
	};
	//if(imgIndex>=imgCount) return;	        
	
	//loop
	animate(loopAnimation);
     
    now = Date.now();
    delta = now - then;
     
    if (delta > interval) {
        // update time stuffs
        then = now - (delta % interval);
        
        
        //is img buffering complete?
        var bufferImg = Math.min(imgCount-1, (imgIndex+bufferCount) );
        if(buffering && imgCache[bufferImg]==undefined){
        	//console.log("wait for buffering img: "+bufferImg );
        	return;
        }else buffering = false;
        
        	
        //is img loading complete?
        if(imgCache[imgIndex]==undefined){
        	//console.log("wait for loading img: "+imgIndex);
        	buffering = true;
        	return;
        }
        // ... Code for Drawing the Frame ...
        showImage(imgIndex);
		imgIndex++;
		
    }
}


// global frame loop to rotate the preloader
var prelaoderRotateDeg = 0;
var preloaderRotateIv;
function startPreloader(target){
/*	preloaderRotateIv = window.setInterval(function(){
		prelaoderRotateDeg++;
		$(target).rotate(prelaoderRotateDeg);
	},1);*/
}
function stopPreloader(){
	window.clearInterval(preloaderRotateIv);
	//$("#preloader").remove();
	$("#preloader").fadeOut();
}




// requestAnimationFrame for all browsers
var animate = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            setTimeout(callback, interval); //1000/30
        };
})();

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

$.fn.findClosest = function(selector) {
    return this.is(selector) ? this.filter(selector).first() : this.find(selector).first();
};

$.fn.rotate = function(degrees) {
    this.css({
	  '-webkit-transform' : 'rotate('+degrees+'deg)',
	     '-moz-transform' : 'rotate('+degrees+'deg)',  
	      '-ms-transform' : 'rotate('+degrees+'deg)',  
	       '-o-transform' : 'rotate('+degrees+'deg)',  
	          'transform' : 'rotate('+degrees+'deg)',  
	               'zoom' : 1

    });
};


//init
$(function() {
	startPreloader("#preloaderThrobber");
	preloadImg(0);
});	

