var clickEvent = "click";
var successListText = ["{self}把{opponent}撕光了，大过年让TA磕头拜年，快来围观。","{self}用粗壮的右手把{opponent}撕光了，爷，出手来一发？"];
var failedListText = ["{self}被{opponent}撕光了，大冷天的，快来为我报仇啊！","{self}被{opponent}撕惨了，叔能忍，婶不能忍！还不快来帮忙！"]
window.hasLoadPKStatList = false;
var CheckIdCard={  
    //Wi 加权因子 Xi 余数0~10对应的校验码 Pi省份代码  
    Wi:[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],  
    Xi:[1,0,"X",9,8,7,6,5,4,3,2],  
    Pi:[11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82,91],  
   
        //检验18位身份证号码出生日期是否有效  
    //parseFloat过滤前导零，年份必需大于等于1900且小于等于当前年份，用Date()对象判断日期是否有效。  
    brithday18:function(sIdCard){  
        var year=parseFloat(sIdCard.substr(6,4));  
        var month=parseFloat(sIdCard.substr(10,2));  
        var day=parseFloat(sIdCard.substr(12,2));  
        var checkDay=new Date(year,month-1,day);  
        var nowDay=new Date();  
        if (1900<=year && year<=nowDay.getFullYear() && month==(checkDay.getMonth()+1) && day==checkDay.getDate()) {  
            return true;  
        };  
    },  
   
    //检验15位身份证号码出生日期是否有效  
    brithday15:function(sIdCard){  
        var year=parseFloat(sIdCard.substr(6,2));  
        var month=parseFloat(sIdCard.substr(8,2));  
        var day=parseFloat(sIdCard.substr(10,2));  
        var checkDay=new Date(year,month-1,day);  
        if (month==(checkDay.getMonth()+1) && day==checkDay.getDate()) {  
            return true;  
        };  
    },  
   
    //检验校验码是否有效  
    validate:function(sIdCard){  
        var aIdCard=sIdCard.split("");  
        var sum=0;  
        for (var i = 0; i < CheckIdCard.Wi.length; i++) {  
            sum+=CheckIdCard.Wi[i]*aIdCard[i]; //线性加权求和  
        };  
        var index=sum%11;//求模，可能为0~10,可求对应的校验码是否于身份证的校验码匹配  
            if (CheckIdCard.Xi[index]==aIdCard[17].toUpperCase()) {  
                return true;  
            };  
        },  
   
    //检验输入的省份编码是否有效  
    province:function(sIdCard){  
        var p2=sIdCard.substr(0,2);  
        for (var i = 0; i < CheckIdCard.Pi.length; i++) {  
            if(CheckIdCard.Pi[i]==p2){  
                return true;  
            };  
        };  
    }  
};  
   
function showDialog(value, callback, timeout) {
	$("#dialog p").html(value);
	$("#dialog").show();
	$("#dialog [tag='close']").off().on(clickEvent, function() {
		$("#dialog").hide();
		callback && callback();
	});
	if (timeout) {
		setTimeout(function() {
			$("#dialog").hide();
			callback && callback();
		}, 1000);
	}
}
function getCrazyRecordList(more){
	var submitData = {
		action:"getCrazyRecordList",
		crazyId:window.crazyId
	};
	if(more){
		submitData.start = $(".recordList ul[tag='joindetail'] li.record").size();
	}
	if(window.actorOpenId){
		submitData.actorOpenId = window.actorOpenId;
	}
	// $.ajax({
	// 	type : "POST",
	// 	url : "/m/crazyit/crazy",
	// 	data : submitData,
	// 	dataType : "json",
	// 	contentType: "application/x-www-form-urlencoded; charset=utf-8",
	// 	success : function(data){
	// 		if(data.success == true){
	// 			window.CrazyRecordList = data.CrazyRecordList.results;
	// 			renderCrazyRecordList(more);
	// 			$(window).resize();
	// 		} else if(data.errorMsg) {
	// 			showDialog(data.errorMsg);
	// 		}
	// 		if(more){
	// 			$("#t_loading").hide();
	// 		} else {
	// 			$("#t_loading").hide();
	// 		}
	// 	},
	// 	error:function(){
	// 		showDialog("网络不稳定，请稍后再试");
	// 	}
	// });
}
function getMyCrazyRaidRecords(){
	$("#t_loading").show();
	var submitData = {
		action:"getMyCrazyRaidRecords",
		crazyId:window.crazyId
	};
	// $.ajax({
	// 	type : "POST",
	// 	url : "/m/crazyit/crazy",
	// 	data : submitData,
	// 	dataType : "json",
	// 	contentType: "application/x-www-form-urlencoded; charset=utf-8",
	// 	success : function(data){
	// 		if(data.success == true){
	// 			window.CrazyRaidRecordList = data.CrazyRaidRecordList;
	// 			renderCrazyRaidRecordList();
	// 			$(window).resize();
	// 			$(".rank_title .r_title").text("谁偷袭了我");
	// 			$(".rank_type_link").text("我的战绩榜>>>");
	// 		} else {
	// 			showDialog(data.errorMsg);
	// 		}
	// 		$("#t_loading").hide();
	// 	},
	// 	error:function(){
	// 		showDialog("网络不稳定，请稍后再试");
	// 	}
	// });
}
function submitUserInfo(){
	var submitData = {
		action:"submitUserInfo",
		crazyId:window.crazyId
	};
	submitData.username = $("input[name='username']").val();
	submitData.phone = $("input[name='phone']").val();
	submitData.address = $("input[name='address']").val();
	submitData.idcard = $("input[name='idcard']").val();
	submitData.prizeid = $("input[name='prizeid']").val();
	// submitData.prizeType = window.prizeType;
	$.fn.cookie("cmb_crazy_user_username",submitData.username,{expires:30,path:'/'});
	$.fn.cookie("cmb_crazy_user_phone",submitData.phone,{expires:30,path:'/'});
	$.fn.cookie("cmb_crazy_user_address",submitData.address,{expires:30,path:'/'});
	$.fn.cookie("cmb_crazy_user_idcard",submitData.idcard,{expires:30,path:'/'});
	// $.ajax({
	// 	type : "POST",
	// 	url : "/m/crazyit/crazy",
	// 	data : submitData,
	// 	dataType : "json",
	// 	contentType: "application/x-www-form-urlencoded; charset=utf-8",
	// 	success : function(data){
	// 		if(data.code != "A00006"){
	// 			showDialog("兑换失败："+data.msg);
	// 		} else {
	// 			showDialog("奖品已经策马奔腾向你飞奔而来，请坐等收货哈！",function(){
	// 				window.location.href="/apps/crazyit/detail.jsp?crazyId="+window.crazyId;
	// 			});
	// 		}
	// 		// window.location.reload();
	// 		$("#t_loading").hide();
	// 	},
	// 	error:function(){
	// 		showDialog("网络不稳定，请稍后再试");
	// 	}
	// });
}
function exchange(prizeType){
	var submitData = {
		action:"exchange",
		crazyId:window.crazyId
	};
	$("#t_loading").show();
	submitData.prizeType = prizeType;
	// $.ajax({
	// 	type : "POST",
	// 	url : "/m/crazyit/crazy",
	// 	data : submitData,
	// 	dataType : "json",
	// 	contentType: "application/x-www-form-urlencoded; charset=utf-8",
	// 	success : function(data){
	// 		if(data.result == 0){
	// 			showDialog("你距大奖仅有0.1秒的距离！礼品被抢兑一空，明天早点来！",function(){
	// 				window.location.reload();
	// 			});
	// 		} else if(data.result == 1){
	// 			window.location.href="/apps/crazyit/userinfo.jsp?crazyId="+window.crazyId+"&prizeType="+prizeType;
	// 			return;
	// 		} else if(data.result == 2){
	// 			showDialog("你今天已经满载而归，留点机会给其他人吧，明天再来哈！ ",function(){
	// 				window.location.reload();
	// 			});
	// 		} else if(data.result == 3){
	// 			showDialog("余额不足",function(){
	// 				window.location.reload();
	// 			});
	// 		} else if(data.result == 4){
	// 			showDialog("你已拥有此奖品，换个花样，试试其他奖品吧！",function(){
	// 				window.location.reload();
	// 			});
	// 		} else if(data.result == 5) {
	// 			showDialog("对不起，你晚了一步，奖品已被抢完",function(){
	// 				window.location.reload();
	// 			});
	// 		} else if(data.result == 6){
	// 			showDialog("请先关注公众号",function(){
	// 				// window.location.href="http://mp.weixin.qq.com/s?__biz=MjM5MDU4Njg5Mw==&mid=397718170&idx=1&sn=590a9e072344801968ccfc9c5f513bbf#rd";
	// 			});
	// 		}
			
	// 		$("#t_loading").hide();
	// 	},
	// 	error:function(){
	// 		showDialog("网络不稳定，请稍后再试");
	// 	}
	// });
}
function shared_callback(){
	var submitData = {
		action:"shared",
		crazyId:window.crazyId
	};
	$("#t_loading").show();
	// $.ajax({
	// 	type : "POST",
	// 	url : "/m/crazyit/crazy",
	// 	data : submitData,
	// 	dataType : "json",
	// 	contentType: "application/x-www-form-urlencoded; charset=utf-8",
	// 	success : function(data){
	// 		window.my.shareStatus = 1;
	// 		$("#t_loading").hide();
	// 	},
	// 	error:function(){
	// 		showDialog("网络不稳定，请稍后再试");
	// 	}
	// });
}
function renderCrazyRecordList(more){
	var len = window.CrazyRecordList.length;
	var selfHtml = "";
	selfHtml += '<li>';
	selfHtml += '<a href="/apps/crazyit/detail.jsp?crazyId='+window.crazyId+'">';
	selfHtml += '<img src="' + window.my.head + '" width="70" height="70" />';
	selfHtml += '<span class="pk_balance"><span class="nickname">'+self.nickname+'</span>的余额：'+window.my.balance+'<em>'+window.my.pointname+'</em>，去兑奖>></span>';
	selfHtml += '</a></li>';
	
	var html = '';
	if(window.actorOpenId && len == 0 && !more){
		html += selfHtml;
	}
	for(var i=0;i<len;i++){
		var pk = window.CrazyRecordList[i];
		if(pk.head.indexOf("http://") == -1){
			pk.head = "http://wx.qlogo.cn/mmopen/" + pk.head;
		}
		var headLength = pk.head.length;
		if(pk.head.substring(headLength-2,headLength) == "/0"){
			pk.head = pk.head.substring(0,headLength-2)+"/96";
		}
		if(window.actorOpenId){
			if(i==0 && !more && window.self.openid != pk.opponentOpenId){
				html += selfHtml;
			}
			// html += '<li class="record opponent_record'+(window.self.openid == pk.opponentOpenId?" opponent_record_self":"")+'">';
			html += '<li class="record">';
		}else{
			html += '<li class="record">';
		}
		html += '<a href="/apps/crazyit/opponent.jsp?crazyId='+window.crazyId+'&openId='+pk.opponentOpenId+'">';
		
		var headImg = '';
		var pkDetail = '';
		headImg = '<img src="'+pk.head+'" width="70" height="70" />';
		pkDetail = '<p><strong>{nick}</strong></p>';
		html += headImg;
		html += pkDetail.replace("{nick}",$.htmlEncode(pk.nickname)).replace("{value}",pk.money);
		if(window.actorOpenId){
			if(window.self.openid == pk.opponentOpenId){
				// html += '<span class="pk_balance"><span class="nickname">'+self.nickname+'</span>的余  额：'+window.my.balance+'<em>'+window.my.pointname+'</em>，去兑奖>></span>';
			}else{
				html += '<span class="pk_again">撕Ta</span>';
			}
		}else{
			html += '<span class="pk_stat">'+pk.successTotal+'胜/'+pk.failureTotal+'败</span>';
			html += '<span class="pk_again">撕Ta</span>';
			html += '<span class="pk_result">'+(pk.goldCount>0?"+":"")+pk.goldCount+'<em>币</em></span>';
		}
		html += '</a></li>';
	}
	var $joinDetail = $(".recordList ul[tag='joindetail']");
	if(more){
		$joinDetail.append(html);
		if(len < 10){
			$(".get-more").hide();			
		}
	} else {
		$joinDetail.append(html);
		if(len >= 10){
			$joinDetail.after($("<p class='get-more'><a href='javascript:;'>查看更多</a></p>"));			
		}
	}
}
function renderCrazyRaidRecordList(more){
	var len = window.CrazyRaidRecordList.length;
	var html = '';
	if(len == 0){
		html += '<li class="record">';
		html += '<a href="javascript:;" tag="gotoJoin">';
		html += '<span class="raid_empty">现在还没有好友偷袭你，马上分享朋友圈邀请挑战吧>>></span>';
		html += '</a></li>';
	}
	for(var i=0;i<len;i++){
		var pk = window.CrazyRaidRecordList[i];
		if(pk.head.indexOf("http://") == -1){
			pk.head = "http://wx.qlogo.cn/mmopen/" + pk.head;
		}
		var headLength = pk.head.length;
		if(pk.head.substring(headLength-2,headLength) == "/0"){
			pk.head = pk.head.substring(0,headLength-2)+"/96";
		}
		html += '<li class="record">';
		html += '<a href="/apps/crazyit/opponent.jsp?crazyId='+window.crazyId+'&openId='+pk.opponentOpenId+'">';
		var headImg = '';
		var pkDetail = '';
		headImg = '<img src="'+pk.head+'" width="70" height="70" />';
		pkDetail = '<p><strong>{nick}</strong></p>';
		html += headImg;
		html += pkDetail.replace("{nick}",$.htmlEncode(pk.nickname)).replace("{value}",pk.money);
		html += '<span class="pk_raid">'+pk.createTime+'</span>';
		html += '<span class="pk_again">回撕</span>';
		html += '<span class="pk_result">'+(pk.gold>0?"+":"")+pk.gold+'<em>币</em></span>';
		html += '</a></li>';
	}
	$(".recordList").hide();
	$(".raidList").show().attr("data-get","1");
	var $joinDetail = $(".raidList ul[tag='joindetail']");
	$joinDetail.append(html);
}
function finishLoading() {
	$("#t_loading").hide();
	document.body.scrollTop = 0;
	setTimeout(function() {
		$("#container [isusing=yes]").css("opacity", "0").show().animate({
			opacity: 1
		}, 300, 'ease-in-out');
	}, 0);
	loadedPercent(100);
}

$(function(){
	$(".link-rule").on(clickEvent,function(){
		document.body.scrollTop=0;
		$("div[isusing='yes']").hide();
		setTimeout(function(){
			$("#rule_panel").css("opacity","0").show().animate({opacity:1},300,'ease-in-out');
		},0);
	});
	$("#rule_panel .close").on(clickEvent,function(){
		$("#rule_panel").hide();
		setTimeout(function(){
			$("div[isusing='yes']").css("opacity","0").show().animate({opacity:1},300,'ease-in-out');
		},0);
	});
	$("a[tag='gotoJoin']").live(clickEvent,function(){
		$("#shareMask").show();
	});
	$(".bao_sharetips").on(clickEvent,function(event){
		$(this).hide();
		event.stopPropagation();
		event.preventDefault();
		return false;
	});
	$(".rank_tab_cont .rank_tab>li").on(clickEvent,function(event){
		var $li = $(this);
		if($li.hasClass("selected")) return;
		$(".rank_tab_cont li.selected").removeClass("selected");
		var index = $li.addClass("selected").index();
		$(".rank_tab_cont .tab_cont").hide().eq(index).show();
		if(index == 1 && !window.hasLoadPKStatList){
			$("#t_loading").show();
			getPKStatList(false);
		}
	});
	$(".recordList .get-more a").live("click",function(){
		$("#t_loading").show();
		getCrazyRecordList(true);
	});
	$(".PKStatList .get-more a").live("click",function(){
		$("#t_loading").show();
		getPKStatList(true);
	});
	$(".link-rule").on("click",function(){
		document.body.scrollTop=0;
		$("div[isusing='yes']").hide();
		$("body").addClass("rule-page");
		setTimeout(function(){
			$("#rule_panel").css("opacity","0").show().animate({opacity:1},300,'ease-in-out');
		},0);
	});
	$("#rule_panel .close").on("click",function(){
		$("body").removeClass("rule-page");
		$("#rule_panel").hide();
		setTimeout(function(){
			$("div[isusing='yes']").css("opacity","0").show().animate({opacity:1},300,'ease-in-out');
		},0);
	});
	loadedPercent(70);
	finishLoading();
	if($(".recordList").size() > 0){
		$("#t_loading").show();
		getCrazyRecordList(false);
	}
	$("#btn_submit_address").on("click",function(){
		var $username = $("input[name='username']");
		var $phone = $("input[name='phone']");
		var $address = $("input[name='address']");
			if(!handleField($username)){
			$username.focus();
			return false;
		}
		if(!handleField($phone)){
			$phone.focus();
			return false;
		}
		if(!handleField($address)){
			$address.focus();
			return false;
		}
		$("#t_loading").show();
		submitUserInfo();
	});
	$("#btn_submit_idcard").on("click",function(){
		var $username = $("input[name='username']");
		var $phone = $("input[name='phone']");
		var $idcard = $("input[name='idcard']");
		if(!handleField($username)){
			$username.focus();
			return false;
		}
		if(!handleField($idcard)){
			$idcard.focus();
			return false;
		}
		if(!handleField($phone)){
			$phone.focus();
			return false;
		}
		/*
		if(!$(".check").hasClass("check2")){
			showDialog("请勾选阅读条款");
			return false;
		}*/
		$("#t_loading").show();
		submitUserInfo();
	});
	function handleField(field){
		var $label = field.closest(".field_group").find("label");
		if(field.attr("name") == "phone"){
			if(field.val() == ""){
				$label.animate({"color":"#f00"},200);
				return false;
			} else {
				var regu =/^[0-9]{8,20}$/;
				var re = new RegExp(regu); 
				if(!re.test(field.val())){
					$label.animate({"color":"#f00"},200);
					return false;
				}
				$label.animate({"color":"#666"},200);
				return true;
			}
		} else if(field.attr("name") == "idcard"){
			var sIdCard = field.val(); 
			if(sIdCard.match(/^\d{14,17}(\d|X)$/gi)==null){
				$label.animate({"color":"#f00"},200);
				return false;
			} else if (sIdCard.length==18) {  
	            if (CheckIdCard.province(sIdCard)&&CheckIdCard.brithday18(sIdCard)&&CheckIdCard.validate(sIdCard)) {  
					$label.animate({"color":"#666"},200);
					return true;
	            } else{  
					$label.animate({"color":"#f00"},200);
					return false; 
	            };  
	        }  
	        else if (sIdCard.length==15) {  
	            if (CheckIdCard.province(sIdCard)&&CheckIdCard.brithday15(sIdCard)) {  
					$label.animate({"color":"#666"},200);
					return true;
	            } else{  
					$label.animate({"color":"#f00"},200);
					return false;
	            };  
	        };  
		} else {
			if(field.val() == ""){
				$label.animate({"color":"#f00"},200);
				return false;
			} else {
				$label.animate({"color":"#666"},200);
				return true;
			}
		}
	}
	$(".userinfo_cont input,.userinfo_cont textarea").on("blur",function(){
		handleField($(this));
	});
	$("a[tag='gotoPk']").on("click",function(){
		if(window.my.shareStatus == 0 &&  window.my.pkTotal >=3){
			$(".sharelimit_tips").show();
		} else {
			var page = $(this).attr("data-href");
			window.location.href=page;
		}
	});
	$("a[tag='return']").on("click",function(){
		window.history.go(-1);
	});
	$(".userinfo_cont .check").on("click",function(){
		$(this).toggleClass("check2");
	});
	$(".prize_detail_tab li").on("click",function(){
		var $li = $(this);
		if($li.hasClass("selected")) return;
		$(".prize_detail_tab li.selected").removeClass("selected");
		$li.addClass("selected");
		$(".tab_cont").hide();
		$(".tab_cont").eq($li.index()).show();
	});
	$(".btn_exchange").live("click",function(){
		exchange(window.prizeType);		
	});
	$(".rank_type_link").on("click",function(){
		if($(".recordList").height() == 0){
			$(".recordList").show();
			$(".raidList").hide();
			$(".rank_title .r_title").text("我的战绩榜");
			$(".rank_type_link").text("谁偷袭了我>>>");
		} else{
			if($(".raidList").attr("data-get")==1){
				$(".raidList").show();
				$(".recordList").hide();
				$(".rank_title .r_title").text("谁偷袭了我");
				$(".rank_type_link").text("我的战绩榜>>>");
			}else{
				getMyCrazyRaidRecords();
			}
		}
		$(window).resize();
	});
});