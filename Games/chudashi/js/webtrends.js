function mDcsMultiTrack(){var WTmc_mk="",fromParam=ucar.uitls.getUrlParam("WT.mc_mk");fromParam&&fromParam.length>0?(WTmc_mk=fromParam,fromParam="mc_mk"+fromParam):(fromParam=ucar.uitls.getUrlParam("WT.mc_qr"),fromParam&&fromParam.length>0?fromParam="mc_qr"+fromParam:(fromParam=$("#fromParam").val(),fromParam||(fromParam=""))),$(".android").click(function(){var key1="/WTwap"+fromParam+"zhuancheappxiazai",key2="wap端"+fromParam+"专车app下载",key3="wap"+fromParam+"zhuancheappxiazai";isIos()?(key1+="iPhone",key2+="苹果",key3+="iPhone"):(key1+="android",key2+="安卓",key3+="android"),dcsMultiTrack("DCS.dcsuri",key1,"WT.ti",key2,"WT.click",key3,"WT.download","xiazai","WT_si_n","appxiazai")}),$(".xiazai").click(function(){var key1="/WTwap"+fromParam+"zhuancheappxiazai",key2="wap端"+fromParam+"专车app下载",key3="wap"+fromParam+"zhuancheappxiazai";dcsMultiTrack("DCS.dcsuri",key1,"WT.ti",key2,"WT.click",key3,"WT.download","xiazai","WT_si_n","appxiazai"),setTimeout(function(){var locationhref="/html5/2015/download/index.html";("201400697"==WTmc_mk||"201400699"==WTmc_mk)&&(locationhref+="?WT.mc_mk="+WTmc_mk),window.location.href=locationhref},800)})}var isIos=function(){var userAgent=navigator.userAgent;return userAgent.match(/iPhone|iPad|iPod|iTouch/)?!0:!1};