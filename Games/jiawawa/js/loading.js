(function($){
$(function(){
	var resources = [
	                 "images/conveyor_belt.png",
	                 "images/bg.png",
	           ];
	           var imgArray = $("img");
	           var lindex = 0;
	           for(var i = 0; i < imgArray.length; i++){
	           	resources.push($(imgArray[i]).attr("src"));
	           }
	           for(var i = 0; i < resources.length;i++){
	           	 var img = new Image();
	           	 img.src = resources[i];
	           	 img.onload = function(){
	           	 	 lindex++;
	                  		 console.log((lindex/resources.length*100).toFixed(2));
	                 		 $("#loading-html").html((lindex/resources.length*100).toFixed(2)+"%<!--<br/>正在努力加载中......-->");
	                  		 if(lindex == resources.length){
	           			    $("#loading-html").html("100.00%<!--<br/>正在努力加载中......-->");
	                  			 loadEnd();
	                  		 }
	           	 };
	           	 img.onerror = function(){
	           	 		 lindex++;
	           	 		 $("#loading-html").html((lindex/resources.length*100).toFixed(2)+"%<br/><!--正在努力加载中......-->");
	           		     if(lindex == resources.length){
	           		    	 $("#loading-html").html("100.00%<br/><!--正在努力加载中......-->");
	           	      		  loadEnd();
	           	      }
	           	 };
	           }
});
})(jQuery);