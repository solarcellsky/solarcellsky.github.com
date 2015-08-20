
$(function(){
	GameControler.bindFuncEven();
	GameControler.initDisplay();
});

var GameControler = {
	bindFuncEven:function(){
		$('[func=restartGame]').click(GameControler.restartGame);
		$('[func=updatePhone]').click(GameControler.formsub);
		$('[func=showRank]').click(GameControler.showRank);
	},
	
	initDisplay:function(){
		/*if(CustomerInfo.phone!="0")
			$('[func=phoneInput]').attr("value",CustomerInfo.phone);*/
	},
	
	startGame:function (){
		 GameService.strartGame();
	},
	
	restartGame:function(){
		GameService.restart();
	},
	
	showRank:function(){
		GameControler.getListRank();
	},
	
	getListRank:function(){
		GameService.getListRank(EventDisposer.onGetListRank);
	},
	
	gameOver:function(){
	    var game = $("#gameCanvas");
	    game.css("display","none");
	    EventDisposer.onGameOver(prize);
	},
	
	updatePhone:function(){
		if(testPhoneNo($('[func=phoneInput]').attr("value"))==true){
			GameService.updatePhone($('[func=phoneInput]').attr("value"),EventDisposer.onUpdatePhone);
		}else
			alert("请输入有效的11位手机号码！");
	},
	
	 formsub:function(){
        var phone = $.trim($("#phone").val());
        var name = $.trim($("#name").val());
        
        if(name == ""){
            $("#error").html("请输入您的姓名!");
            return false;
        }
        if(phone == ""){
            $("#error").html("请输入您的手机号!");
            return false;
        }
        if(!isMobil(phone)){
            $("#error").html("请输入正确格式的手机号");
            return false;
        }
        $("#error").html("");
        $.post("ajaxPost!updatePhone.action",{"phone":phone,"name":name,"address":"CN"},function(data){
            if(data.msg == "true"){
            	$("#tjcg").css('display','block');
            	$("#tjxx").css('display','none');
            }else{
                $("#error").html(data.msg);
            }
        });
        return false;
	},
	
	//设置分享成绩
	setShareData:function(score,rate){
		title = "我在'奔跑吧发财羊'中成功抢到"+score+"元红包。超过了"+rate+"%的人，不服来战！!";;
		shareData.title = title;
		wx.onMenuShareAppMessage(shareData);
		wx.onMenuShareTimeline(shareData);
	}
};

var EventDisposer = {
		onGameOver:function(prize){
			if(prize == 1){
				$("#jp").html("Apple Watch一部");
			}else if(prize == 2){
				$("#jp").html("100元话费");
			}else if(prize == 3){
				$("#jp").html("20元话费");
			}else{
				$("#jp").html("20元话费*2");
			}
			$("#tjxx").css('display','block');
		},
		onUpdataScore:function(score){
		    $('[func=score]').html(score);
		},
		
		onUpdatePhone:function(phone){
			if(phone == $('[func=phoneInput]').attr("value")){
				$('#look').show();
				$("#report").hide();
			}
		},
		
		onGetMyRank:function(rank){
			$('[func=rank]').html(rank);
		},
		
		onGetPlayDuration:function(duration){
			if(duration < 40){
				$("#report").show();
			}else 
				$("#yc").show();
		},
		
		onGetListRank:function(arraylistRank){
			console.info(arraylistRank);
			$.each(arraylistRank, function(i, customer){
				i++;
				var classStyle = "class= 'black'"
				if(i<=5) classStyle = "class= 'red'";
					
				$('[func=rankList]').append("<ul "+classStyle+" >"+
						"<li class='li1' >"+i+"</li>"+
						"<li class='li2' >"+getMarkPhoneNo(customer.phone)+"</li>" +
						"<li class='li3' >"+customer.score+"</li>" +
						"</ul>")
				if(customer.openID == CustomerInfo.openID){
					$('[func=customerRank]').html(i);
					$('[func=customerPhone]').html(customer.phone);
					$('[func=customerScore]').html(customer.score);
					
				}
			});
			$('#look').hide();
			$('[func=rankListDiv]').show();
			//$('[func=rankList] ul:first-child').clone(true).appendTo($('[func=rankList]'));
		},

}

	//校验手机号码：必须以数字开头，除数字外，可含有“-”
	function isMobil(s){
		var patrn=/^(13[0-9]|15[0-9]|18[0-9]|177)\d{8}$/; 
		if (!patrn.exec(s)) return false
		return true;
	}
