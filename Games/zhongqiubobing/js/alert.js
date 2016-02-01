var myAlert = document.createElement("div");
    myAlert.id = "myAlert";
    myAlert.style.display = "none";
    myAlert.innerHTML='<div style="position:fixed;top:50%;left:0;z-index:100000;width:90%;max-height:180px;color:#666;margin:-90px 5% 0;border-radius:3px;font:14px/30px \'黑体\';padding:30px 0;text-align:center;background:#fff;">\
	<p style="margin:0px 10px 30px;max-height:60px;overflow:hidden;" id="alerttext"></p>\
	<a onclick="document.getElementById(\'myAlert\').style.display=\'none\'" style="display:block;width:90px;height:30px;color:#fff;margin:0 auto;border-radius:3px;font:14px/30px \'黑体\';background:#e60012;">确定</a>\
</div>\
<div style="position:fixed;left:0;top:0;z-index:99999;width:100%;height:100%;background:rgba(0,0,0,.5);"></div>';
document.body.appendChild(myAlert);
function alert(str){
	document.getElementById('myAlert').style.display='block';
	document.getElementById('alerttext').innerHTML=str;
}