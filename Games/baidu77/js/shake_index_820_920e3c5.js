function getQueryString(e){var a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(a);return null!=i?unescape(i[2]):null}function formatDate(e){var a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return a+"."+i+"."+n}function shakeFail(e){statistics({page:'"shake_'+APPCONF.terminal+'"',area:'"again"'});var a="";if(e)try{a=e.data.prize}catch(i){a="人品+1！赶快再摇一摇"}else a="人品+1！赶快再摇一摇";$(".loading").removeClass("fadeIn").addClass("hide"),$(".miss .nohit").html(a),$(".miss").removeClass("hide").addClass("fadeInDown5"),oValue.flag=!0}function GetRandomNum(e,a){var i=a-e,n=Math.random();return e+Math.round(n*i)}function statistics(e){var a=new Image;a.src="http://m.nuomi.com/s.gif?channel=&channel_content=&target_city=&client_type=WEBAPP_ACTIVITY&real_refer=&page="+e.page+'&href=javascript:void(0);&da_src={"page":'+e.page+',"area":'+e.area+',"element":'+e.element+"}&_="+(new Date).getTime()}!function(){function e(){document.documentElement.style.fontSize=(document.documentElement.clientWidth||document.body.clientWidth)+"px",document.body.style.fontSize="16px"}e(),window.addEventListener("resize",e,!1);try{window.addEventListener("orientationchange",e,!1)}catch(a){}}();var oValue={cuid:getQueryString("cuid"),actid:getQueryString("actid"),channel:getQueryString("channel"),location:getQueryString("location")||"",cityid:getQueryString("cityid")||"",loccityid:getQueryString("loccityid")||"",key:getQueryString("key"),music:"weixin"==APPCONF.terminal?!0:!1,time:null,flag:!0},num=0,tempArr=APPCONF.dynamic.split(","),sum=tempArr.length;setInterval(function(){num=GetRandomNum(0,sum-1),$("footer .note").html(tempArr[num])},3e3),function(){function e(e){var a=(document.createElement("audio"),"");if(oValue.music)if(navigator.appVersion.match("OS 8_3")&&navigator.appVersion.match("BDNuomiAppIOS")){var i=new _mu.Player({baseDir:"http://mu7.bdstatic.com/cms/app/muplayer/0_9_1/",mode:"list"});"audio1"==e?a="/static/event-wap/shake_duang_150407/img/yao.mp3":"audio2"==e&&(a="/static/event-wap/shake_duang_150407/img/zhong.mp3"),i.reset().add(a).play()}else{var n=null;"audio1"==e?n=document.getElementById("clickSound"):"audio2"==e&&(n=document.getElementById("clickSound2")),n.play()}}function a(){var a={};oValue.flag&&(e("audio1"),oValue.time=null,$(".cartoon .titlea").addClass("fadeOutUp"),$(".loading").removeClass("hide").addClass("fadeIn"),a.actid=oValue.actid,a.channel=oValue.channel,a.cuid=oValue.cuid,"na"===APPCONF.terminal&&(a.location=oValue.location,a.cityid=oValue.cityid,a.loccityid=oValue.loccityid),$.ajax({url:"/actcenter/oneshake/shakeduang",timeout:5e3,type:"POST",dataType:"json",cache:!1,data:a,success:function(e){i(e)},error:function(e){shakeFail(e)},complete:function(){}}),oValue.flag=!1,$(".result").each(function(){$(this).hasClass("hide")||$(this).addClass("fadeOutDown")}))}function i(a){if(!a||0!=a.errno)return void shakeFail(a);if(0==a.data.isHit)return void shakeFail(a);var i=a.data,n="",t="",o="";if(oValue.isLogin=i.isLogin,oValue.pricenum=i.price,oValue.r=i.r?i.r:"",oValue.t=i.t?i.t:"",oValue.s=i.s?i.s:"",oValue.track_id=i.track_id,oValue.pricenum&&$(".pricenum").text(oValue.pricenum),oValue.isLogin){if(i.phone&&/^(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])\d{8}$/.test(i.phone)?(oValue.phone=i.phone,t=/^(\d{3})(.*?)(\d{4})$/.exec(oValue.phone),t="手机号"+t[1]+"****"+t[3]+"的"):t="您的",i.tips?$(".succ .decr").text(i.tips).removeClass("hide"):i.startTime&&i.expireTime&&(n=formatDate(new Date(i.startTime))+"-"+formatDate(new Date(i.expireTime)),$(".succ .decr").text(n).removeClass("hide")),i.shareinfo&&""==APPCONF.shareinfo&&(APPCONF.shareinfo=i.shareinfo,Share(),"na"===APPCONF.terminal)){var s=$("#sharenm").attr("href"),l=s.split("&platform");s=l[0]+encodeURIComponent("&from_share=1&shareinfo="+APPCONF.shareinfo)+"&platform"+l[1],$("#sharenm").attr("href",s)}if(i.deal&&i.deal.deal_id){var d=i.deal,r=getQueryString("tsmcid")||"",c="";oValue.deal_id=d.deal_id,c=d.reason?'<li class="info multi-line">'+d.reason+"</li>":'<li class="info multi-line">'+d.medium_title+"</li>",o='<div class="inner clearfix"><div class="monadlist"><a href="'+d.deal_url+"&tsmcid="+r+"||2015_820_yaoyiyao_"+d.deal_id+'_na" ><div class="img-wrapper food-exp"><img class="scrollLoading"  src="'+d.tiny_image+'" /><span class="reservation">精选推荐</span></div><ul><li class="title"><span class="item-name">'+d.min_title+'</span></li><li class="evaluate evaluate-right"><span>'+d.distance+'</span></li><li class="price contrast"><ins>'+d.current_price+"</ins></li>"+c+'</ul></a></div><div class="morelist"><a href="'+d.morelink+'" mon="area=recommend_more&element=more"></a></div></div>',$(".succ .monad").html(o).removeClass("hide")}else $(".succ .monad").addClass("hide");return $(".phone").text(t),/UCBrowser/.test(window.navigator.userAgent)||e("audio2"),$(".loading").addClass("hide").removeClass("fadeIn"),$(".succ").removeClass("hide").addClass("fadeInDown"),void statistics({page:'"shake_'+APPCONF.terminal+'"',area:'"get"'})}/UCBrowser/.test(window.navigator.userAgent)||e("audio2"),i.tips&&$(".winning .decr").text(i.tips).removeClass("hide"),$(".loading").addClass("hide").removeClass("fadeIn"),$(".pass-msg-generalMsgWrapper").removeClass("pass-msg-generalError").text(""),$('input[name="mobilenum"]').val(""),$('input[name="password"]').val(""),$(".winning").removeClass("hide").addClass("fadeInDown"),statistics({page:'"shake_'+APPCONF.terminal+'"',area:'"win"'})}var n=new Shake({threshold:8,timeout:1500});n.start(),window.DeviceMotionEvent?window.addEventListener("shake",function(){a(),statistics({page:'"shake_'+APPCONF.terminal+'"',area:'"shake"'})},!1):($(".index").addClass("hide"),$(".old").removeClass("hide")),$(".miss").get(0).addEventListener("webkitAnimationEnd",function(e){$(this).removeClass(e.animationName),"fadeInDown5"==e.animationName&&(oValue.time=setTimeout(function(){$(".miss").addClass("fadeOutDown")},1e3))}),$(".miss").get(0).addEventListener("animationend",function(e){$(this).removeClass(e.animationName),"fadeInDown5"==e.animationName&&(oValue.time=setTimeout(function(){$(".miss").addClass("fadeOutDown")},1e3))}),$("#music").click(function(){$(this).hasClass("on")?($(this).removeClass("on"),oValue.music=!1):(oValue.music=!0,e("audio1"),/UCBrowser/.test(window.navigator.userAgent)||e("audio2"),$(this).addClass("on"))}),$(".cartoon .titlea").get(0).addEventListener("animationend",function(){$(".cartoon .titlea").removeClass("fadeOutUp").addClass("hide")}),$(".cartoon .titlea").get(0).addEventListener("webkitAnimationEnd",function(){$(".cartoon .titlea").removeClass("fadeOutUp").addClass("hide")}),$(".result").each(function(){var e=this;e.addEventListener("webkitAnimationEnd",function(a){$(e).removeClass(a.animationName),"fadeOutDown"==a.animationName&&$(e).addClass("hide")}),e.addEventListener("animationend",function(a){$(e).removeClass(a.animationName),"fadeOutDown"==a.animationName&&$(e).addClass("hide")})}),$(".touying").each(function(){var e=this;e.addEventListener("webkitAnimationEnd",function(a){$(e).removeClass(a.animationName)}),e.addEventListener("animationend",function(a){$(e).removeClass(a.animationName)})}),$(document).ready(function(){$("#szlink").click(function(){try{window.appStateCallback=function(e,a){"0"==a||"1"==a||"2"==a?window.location.href="appclient:download?sname=%E7%99%BE%E5%BA%A6%E7%B3%AF%E7%B1%B3&packagename=com.nuomi&versioncode=133&versionname=5.10.0&downurl=http%3A%2F%2Fgdown.baidu.com%2Fdata%2Fwisegame%2Fb0102a049578e164%2Fbaidunuomi_133.apk&iconurl=http%3A%2F%2Fh.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fb9b44aed2e738bd48496f4f6a48b87d6267ff946.jpg&signmd5=2676734601&type=soft&tj=soft_7825304_3053204381_%E7%99%BE%E5%BA%A6%E7%B3%AF%E7%B1%B3":"3"==a||"5"==a?window.location.href="appclient:install?packagename=com.nuomi&versioncode=133&signmd5=2676734601":("6"==a||"4"==a)&&(window.location.href="appclient:launch?packagename=com.nuomi")};var e={packagename:"com.nuomi",versioncode:"133"};window.appclient.softRegister(JSON.stringify(e),"window.appStateCallback")}catch(a){}}),$(".monadlist").delegate("a","click",function(){statistics({page:'"2015_820_yaoyiyao_wap"',area:'"goodlist"',element:'"'+oValue.deal_id+'"'})}),$(".huodong").click(function(){$("#explain").addClass("explain-show"),$("#bg_color").removeClass("hide"),oValue.flag=!1}),$(".close, #bg_color").click(function(){$("#explain").removeClass("explain-show"),$("#bg_color").addClass("hide"),$(".miss").hasClass("hide")&&$(".winning").hasClass("hide")&&$(".succ").hasClass("hide")&&(oValue.flag=!0)}),$(".result .pass-button").click(function(){$("body,html").animate({scrollTop:1},50),$("#bg").removeClass("hide").addClass("pulse")}),$(window).resize(function(){$(document).trigger("touchmove")}),$("#bg").click(function(){$("#bg").addClass("hide")}),$(".result .pass-text-input").click(function(){$("body,html").animate({scrollTop:1e3},500)}),$("#sharenm").click(function(){$(this).hasClass("weixin")&&($("body,html").animate({scrollTop:1},50),$("#bg").removeClass("hide").addClass("pulse"));try{var e={title:"8.22百度糯米约惠趴，商家让利全民整点火爆开抢！999元大奖先摇先得！猛戳开启摇大奖！",content:"百度糯米七夕摇一摇",imageUri:"http://s0.nuomi.bdimg.com/zt/shakeduang/img/nuomiicon.png",linkUrl:window.location.protocol+"//"+window.location.host+window.location.pathname+"?actid="+oValue.actid+"&cuid="+oValue.cuid+"&channel="+oValue.channel};window.shareinterface.setShareData(JSON.stringify(e))}catch(a){}}),$(".result .close_2").click(function(){$(this).parents(".result").addClass("hide"),oValue.flag=!0}),navigator.userAgent.indexOf("iPhone OS")>0&&$(document).bind("touchmove",function(e){e.preventDefault()})})}();