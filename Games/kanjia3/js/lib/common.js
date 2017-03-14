
var com = {
	/*
	 * ajax封装
	 */
	ajax : function(type,url,param,dataType,jsonp,callback,error,name){
		if (!url) return false;
		if(!name) var name="";
		
		name = $.ajax({
			type : type || 'post',
			url : url,
			traditional : true,
			data : param || '',
			dataType : dataType || 'json',
			jsonp : jsonp,
			cache: true,
			success : callback,
			error : error
		});
	},
	/*
	 * 获取URL参数
	 */
	queryString : function(key){
		return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || [ '', null ])[1];
	},
	/*
	 * 设置Cookie时间
	 * time分钟
	 */
	setCookieTime : function(time){
		var date = new Date();
		date.setTime(date.getTime() + (time * 60 * 1000));
		return date;
	},
	/*
	 * 判断移动设备
	 */
	isMobile : function(){
		var u = navigator.userAgent;

		return {
			mobile : !!u.match(/AppleWebKit.*Mobile.*/),
			ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android : u.indexOf('Android') > -1,
			iPhone : u.indexOf('iPhone') > -1,
			iPad : u.indexOf('iPad') > -1,
			mac : u.indexOf('Mac OS X')>0
		};
	},
	/*
	 * 判断android版本号
	 */
	androidVer : function(){
		var u = window.navigator.userAgent,ver=u.substr(u.indexOf('Android') + 8,3);
		
		return ver;
	},
	/*
	 * 随机数
	 */
	getRandom : function() {
		var Min = 10000,Max = 99999,Range = Max - Min,Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	},
	getRandomNum : function(min,max){
		return (Math.random()*(max-min)+min) | 0;
	},
	/*
	 * 百度统计
	 */
	loadBaidu : function(){
		$.ajax({
			type : "GET",
			url : "http://hm.baidu.com/h.js?7f65ea8c38ac9004a5e3ce6515716b8a",
			dataType : "script",
			cache:true,
			success : function() {}
		});
	},
	/*
	 * 百度统计事件
	 */
	baiduCountEvent : function(name,action,opt_label,opt_value){
		try{
			_hmt.push(['_trackEvent',name,action,opt_label,opt_value]);
        }
        catch(e){}
	},
	/*
	 * 判断COOKIE是否为空
	 */
	isCookie : function(key){
		return (typeof(key)=="undefined" || key==null || key=="undefined" || key=="null" || !$.trim(key))?false:true;
	},
	/*
	 * 判断名称
	 */
	isName : function(va) {
		var patten = new RegExp("^[\u4e00-\u9fa5A-Za-z0-9-_]*$");
		return patten.test(va);
	},
	/*
	 * 判断手机号
	 */
	isTel : function(ta) {
		var patten = new RegExp("^1[2|3|4|5|7|8][0-9]\\d{8,8}$");
		return patten.test(ta);
	}
};