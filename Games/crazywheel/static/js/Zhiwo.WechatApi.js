if (!window.Zhiwo) {
	window.Zhiwo = new Object()
};

/**
 * 微信Api，微信JS-SDK改版后，最新Api
 * @author Song Huan
 */
Zhiwo.WechatJsApi = {
	/**
	 * @return string 缺省的分享链接
	 */
	defaultShareLink: gWebsite,

	/**
	 * @return string 缺省的分享标题
	 */
	defaultShareTitle: "知我药妆-微信商城",

	/**
	 * @return string 缺省的分享描述
	 */
	defaultShareDesc: "",

	/**
	 * @return string 缺省的分享图标
	 */
	defaultShareImgUrl: gWebsite + "/static/images/ico/bshare.jpg",

	/**
	 * @return string 缺省的分享类型
	 */
	defaultShareType: "link",

	/**
	 * 初始化分享数据
	 * @return void
	 */
	init: function() {
		Zhiwo.WechatJsApi.wxConfig();
		Zhiwo.WechatJsApi.wxReady();
		Zhiwo.WechatJsApi.wxError();
	},

	/**
	 * 设置微信配置
	 * @return void
	 */
	wxConfig: function() {
		wx.config({
			debug: (gWxCfgDebug == "true") ? true : false,
			// debug: false,
			appId: gWxCfgAppId,
			timestamp: gWxCfgTimestamp,
			nonceStr: gWxCfgNonceStr,
			signature: gWxCfgSignature,
			jsApiList: [
				"checkJsApi",
				"onMenuShareTimeline",
				"onMenuShareAppMessage",
				"onMenuShareQQ",
				"onMenuShareWeibo",
				"getNetworkType",
				"hideOptionMenu",
				"showOptionMenu",
				"hideMenuItems",
				"showMenuItems",
				"hideAllNonBaseMenuItem",
				"showAllNonBaseMenuItem",
				"closeWindow"
			]
		});
	},

	/**
	 * 微信配置成功后回调代码
	 * @return void
	 */
	wxReady: function() {
		wx.ready(function() {
			if (typeof(gShareParams) != "object") { gShareParams = {}; }
			Zhiwo.WechatJsApi.onMenuShare(gShareParams);
		});
	},

	/**
	 * 微信配置失败后回调代码
	 * @return void
	 */
	wxError: function() {
		wx.error(function(res) {
			console.log("wx.error");
			console.log(res);
		});
	},

	/**
	 * 发送给朋友
	 * @param json {link: '', title: '', desc: '', imgUrl: '', type: '', dataUrl: '', success: function() {}, cancel: function() {}});
	 * @return void
	 */
	onMenuShareAppMessage: function(p) {
		wx.onMenuShareAppMessage(p);
	},

	/**
	 * 分享到朋友圈
	 * @param json {link: '', title: '', imgUrl: '', success: function() {}, cancel: function() {}});
	 * @return void
	 */
	onMenuShareTimeline: function(p) {
		wx.onMenuShareTimeline(p);
	},

	/**
	 * 微信分享
	 * @param json {link: '', title: '', desc: '', imgUrl: '', type: '', dataUrl: '', success: function() {}, cancel: function() {}});
	 * @return void
	 */
	onMenuShare: function(p) {
		var link    = Zhiwo.WechatJsApi.defaultShareLink;
		var title   = Zhiwo.WechatJsApi.defaultShareTitle;
		var desc    = Zhiwo.WechatJsApi.defaultShareDesc;
		var imgUrl  = Zhiwo.WechatJsApi.defaultShareImgUrl;
		var type    = Zhiwo.WechatJsApi.defaultShareType;
		var success = function() {};
		var cancel  = function() {};

		if (p.link)    { link    = p.link;    }
		if (p.title)   { title   = p.title;   }
		if (p.desc)    { desc    = p.desc;    }
		if (p.imgUrl)  { imgUrl  = p.imgUrl;  }
		if (p.type)    { type    = p.type;    }
		if (p.success) { success = p.success; }
		if (p.cancel)  { cancel  = p.cancel;  }

		var jsonAppMessage = {
			"link"    : link,
			"title"   : title,
			"desc"    : desc,
			"imgUrl"  : imgUrl,
			"success" : success,
			"cancel"  : cancel
		};

		var jsonTimeline = {
			"link"    : link,
			"title"   : title,
			"imgUrl"  : imgUrl,
			"success" : success,
			"cancel"  : cancel
		};

		Zhiwo.WechatJsApi.onMenuShareAppMessage(jsonAppMessage);
		Zhiwo.WechatJsApi.onMenuShareTimeline(jsonTimeline);

		if ((window.location.href).indexOf("debug=true") > 0) {
			console.log(jsonAppMessage);
			console.log(jsonTimeline);
		}
	}
};

Zhiwo.WechatJsApi.init();
