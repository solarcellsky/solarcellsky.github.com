function checkTel(){var tel=$.trim($("#mobile").val());return null===tel||""===tel||0===tel.length||"请输入11位手机号"===tel?(ucar.uitls.show("亲，填写手机号，<br>才能领券哦！"),!1):mobileValidate(tel)?!0:(ucar.uitls.show("亲，填错啦，<br>重新输入试试！"),!1)}$(".btn-go").click(function(){var mobile=$("#mobile").val(),paperfrom=ucar.uitls.getUrlParam("paperfrom"),mc_mk=ucar.uitls.getUrlParam("WT.mc_mk");checkTel()&&$.ajax({url:"/newspaper/get.do",type:"post",data:{paperfrom:paperfrom,mobile:mobile},dataType:"json",cache:!1,success:function(data,textStatus){var fromhb=mc_mk,result=data;if(result)if(result=data.status,mobile&&(mobile=mobile.substr(0,3)+"****"+mobile.substr(7,4)),1==result){var key1="/Wt"+fromhb+"hongbao.event",key3=fromhb+"红包";dcsMultiTrack("DCS.dcsuri",key1,"WT.ti_event",key3),$(".pic-get").hide(),$(".input-con").hide(),$(".btn-go").hide(),$(".ns-intro").hide(),$("#phone").html(mobile),$(".ns-title").show(),$(".get-word").show(),$(".btns").show()}else 2==result?ucar.uitls.show("亲！您已经领过了！"):3==result?ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>"):4==result?ucar.uitls.show("曾经有一张代金券，你已错过。关注神州专车官方微信，周周都有好礼送！<br><br>"):5==result?ucar.uitls.show("不要心急，活动马上开始。一起期待吧！"):6==result?ucar.uitls.show("曾经有一张代金券，你已错过。关注神州专车官方微信，周周都有好礼送！<br><br>"):7==result?ucar.uitls.show("未找到配置信息！"):8==result?ucar.uitls.show("您已领取过本次活动其它的500元礼包！"):9==result?ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>"):10==result?ucar.uitls.show("手机号填写错误！"):ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>")}})});