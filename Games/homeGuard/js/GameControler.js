
$(function(){
	GameControler.bindFuncEven();
	GameControler.initDisplay();
	/*GameService.updateScore(10701,function(msg){
		console.log("GameService.updateScore msg = " + msg);
	});*/
});

var GameControler = {
	bindFuncEven:function(){
		$('[func=focus]').click(GameService.focus);
	},
	
	initDisplay:function(){
	},
	
	rankList:function(){
		GameService.rankList(EventDisposer.onRankList);
	},
	
	myRanking:function(){
		GameService.myRanking(EventDisposer.onMyRanking);
	},
	
};

var EventDisposer = {	
		onRankList:function(arraylistRank){
			console.info(arraylistRank);
			$.each(JSON.parse(arraylistRank), function(i, customer){	
				console.info(customer)
				$('[func=rankList]').append(" <li class='li_first'>  <ul>"+
						"<li class='li1' >"+(i+1)+"</li>"+
						"<li class='li2' >"+getMarkPhoneNo(customer.phone)+"</li>" +
						"<li class='li3' >"+customer.score+"</li>" +
						"</ul> </li>")
			});
		},

		onMyRanking:function(ranking){
			$('[func=customerRank]').html(ranking);
			$('[func=customerPhone]').html(CustomerInfo.phone);
			$('[func=customerScore]').html(CustomerInfo.score+"分");
		},

}

