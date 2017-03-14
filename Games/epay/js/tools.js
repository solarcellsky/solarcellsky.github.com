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


$("img").bind(click,function(e){
	if($(this).hasClass("back_ewm") || $(this).hasClass("back_ewm2")) return;
//	alert(1);	
	e.preventDefault();
});
