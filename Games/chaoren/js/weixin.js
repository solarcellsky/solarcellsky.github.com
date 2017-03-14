
var dataForWeixin={
		   appId:"",
		   MsgImg:"",
		   TLImg:"",
		   url:"",
		   title:"",
		   desc:"",
		   fakeid:"",
		   callback:function(e){
			   
		   }
		};
		var imgUrl2 = "http://activity.ccead.cn/xinjiaguan/Public/Home/logo_share.jpg";
		var lineLink = "http://activity.ccead.cn/xinjiaguan/papa38/index.html";
		var descContent = '我已成功调教男人 荣升三月女王，你呢？ ';
		var shareTitle = " 女王,再打我一次!";

		
	 
	 	var url="../index.php?s=Wxshare/index";
		var param = {};
		param['url']=window.location.href;
		
		loadData(url,param,null,function(rst,param){
			if(rst.result ==200){
				loadWxShare(rst.obj,null);	
			}	
		},param);
		
		
// baidu statistics code 

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?4b90fec81c917283055072f10b5ca6e8";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var statTraceEvent = function (category,action){ 
	  //百度统计事件
	  _hmt.push(['_trackEvent', category,action,'']);
}