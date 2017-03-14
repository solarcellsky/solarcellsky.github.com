define(function(require, exports) {
 
	var timeSetup = function(obj){
		var timeSelect = $("<div></div>");
		timeSelect.addClass("time-piece");
		timeSelect.append('<ul></ul>');
		var timeSelectListContainer = timeSelect.find("ul");
		timeSelectListContainer.append('<li><a href="javascript:void(0);">00:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">00:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">01:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">01:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">02:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">02:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">03:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">03:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">04:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">04:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">05:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">05:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">06:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">06:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">07:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">07:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">08:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">08:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">09:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">09:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">10:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">10:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">11:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">11:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">12:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">12:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">13:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">13:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">14:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">14:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">15:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">15:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">16:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">16:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">17:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">17:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">18:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">18:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">19:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">19:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">20:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">20:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">21:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">21:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">22:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">22:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">23:00</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">23:30</a></li>');
		timeSelectListContainer.append('<li><a href="javascript:void(0);">24:00</a></li>');

		$(obj).parent().css({position:"relative"}).append(timeSelect).find(".time-piece").css({left:"-99999px"});
		
		var scrollbar = require("scrollbar");

		scrollbar.setup(".time-piece",{
	      scrollButtons:{
	         enable:true,
	      },
	      scrollInertia:150
	    });
	    $(obj).focus(function(){
	    	$(obj).parent().find(".time-piece").css({left:0});
	    });
	    $(obj).parent().find(".time-piece").find("li").click(function(){
	    	var value = $(this).find("a").html();
	    	$(obj).val(value);
	    	$(obj).parent().find(".time-piece").css({left:"-99999px"});
	    }); 
	}


	require("timeCss");

	return {
		setup:timeSetup
	};
	
});