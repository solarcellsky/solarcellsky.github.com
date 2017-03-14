function loadImg(imgData,callBack) {
	//alert("loadImg");
	var l = imgData.length;
	var jd = 0;
	$.each(imgData, function(i) {
		var newImg = new Image();
		newImg.onload = newImg.onerror = function() {
			jd += 100 / l;
			$('#loading_number').html(parseInt(jd)+"%");
			if (jd > 99) {
				$("#loading_number").html('100%');
				callBack(1);					
			}
		};
		newImg.src = imgData[i].src;
	})
}

var click = typeof(window.ontouchstart) != 'undefined'?"touchstart":"mousedown";
var move = typeof(window.ontouchstart) != 'undefined'?"touchmove":"mousemove";
var clickEnd = typeof(window.ontouchstart) != 'undefined'?"touchend":"mouseup";


$("img").live(click,function(e){
	e.preventDefault();
});


function recalcY(y){
	return window_h/hip*y;
}
function recalcX(x){
	return window_w/wip*x;
}
function getRand(min,max){
	var n = Math.random()*(max-min) + min;
	return Math.floor(n);
}
