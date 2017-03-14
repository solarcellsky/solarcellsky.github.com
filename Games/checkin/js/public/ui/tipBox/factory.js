/**
 * 提醒框组件
 * @author Yison
 */
 
define(function(require, exports) {
	var tipBox = function(config) {
		var defaultConfig = {
			"direction":"left-up",
			"action":"hover",
			"trigger":".ui-tip-item",
			"element":".ui-tip-pop",
			"arrowPos":"15",
			"style":"white",
			"singleRow":false
		}
		var innerHTML;
		var element;
		var C = $.extend({},defaultConfig,config);
		if($(C['element']).length<1) {
			if(typeof $(C['trigger']).attr("data-tips-content") != 'undefined'){
				if($(C['trigger']).attr("data-tips-content") == ''){
					return ;
				}
				element = $("<div class='ui-tips-item' style='display:none;'></div>");
				innerHTML = $(C['trigger']).attr("data-tips-content");
				element.html(innerHTML);
				element.append("<em class='tips-arrow'></em>");
			}else{
				if($(C['trigger']).find(".ui-tips-item").length >0) {
					element = $(C['trigger']).find(".ui-tips-item");
				}else{
					return;
				}
			}
		}else{
			element = $(C['element']);
			if(element.find(".tips-arrow").length<1){
				element.append("<em class='tips-arrow'></em>");
			}
		}
		var uiStyle = C['style'] == 'yellow' ? 'ui-tips-box-yellow' : 'ui-tips-box-white';
		var posStyle = C['direction'] == '' ? 'ui-tips-left-up' : 'ui-tips-'+C['direction'];
		element.addClass(uiStyle).addClass(posStyle).addClass("ui-tips-item-pop");
		if(C['singleRow'] == true){ 
			element.addClass("single-row");
		}
		trigger = typeof C['trigger'] == "object" ? C['trigger'] : $(C['trigger']);
		trigger.css({position:"relative"});
		if(typeof C['arrowPos'] != undefined){
			
		}
		if(trigger.length>0){
			var triggerTimeout ;
			var showTimeout;
			trigger.append(element);
			if(C['action'] == 'click') {
				trigger.click(function(event){
					var pops = $(".ui-tips-item-pop");
					event.stopPropagation();
					//element.fadeIn();
					pops.hide();
					element.show();
					clearTimeout(triggerTimeout);
				});
				$("body").click(function(){
					element.hide();
				});
				element.click(function(event){
					event.stopPropagation();
				});
			}else{
				trigger.hover(function(){
					showTimeout = setTimeout(function(){
						var pops = $(".ui-tips-item-pop");
						pops.hide();
						element.show();
					},400);
					clearTimeout(triggerTimeout);
				},function(){
					clearTimeout(showTimeout);
					triggerTimeout = setTimeout(function(){
						element.hide();
					},100);
				});
			}
		}
	}

	var decorate = function(){
		if($(".ui-tip-item").length>0){
			$(".ui-tip-item").each(function(n){
				var _self = $(this);
				if($(this).attr("data-tip-conf")!=''){
					var confStr = $(this).attr("data-tip-conf").split(",");
					var confs = {};
					for(var j in confStr){
						confStr[j] = confStr[j].split(":");
						confs[confStr[j][0]] = confStr[j][1];
					}
					var _direction = typeof confs['direction'] != undefined ? confs['direction'] : 'left-up';
					var _element = typeof confs['element'] != undefined ? confs['element'] : '';
					var _arrowPos = typeof confs['arrowPos'] != undefined ? confs['arrowPos'] : 15;
					var _style = typeof confs['style'] != undefined ? confs['style'] : 'white';
					var _action = typeof confs['action'] != undefined ? confs['action'] : 'hover';
					tipBox({
						"direction" : _direction,
						"trigger" : _self,
						"element" : _element,
						"arrowPos" : _arrowPos,
						"style" : _style,
						"action" : _action
					})
				}
			});
		}
	}
	decorate();

	require('tipBoxCss');
	
	return {
		setup:tipBox,
		refresh:decorate
	};

});
  
 