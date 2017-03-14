// 支付

function pay(itemid, itemname, price, count, spec){
	var data = {itemid:itemid, itemname:itemname, price:price, count:count, spec:spec};
	if(parseFloat(data.price) > 0){
		data.price = parseFloat(data.price);
    	pay68(data, true);
	}else{
	    LoginUi.setFlowTips("支付金额必须大于0！");
	}
	
}

function pay68(data,isInternal){
	if( window.Play68app){ // 68app
		if(window.Play68app.pay) {
			data.price = parseFloat(data.price);
			window.Play68app.pay(GAMEID, 1, data.itemid, data.itemname, data.price, data.count);
		}
		else{
			LoginUi.setFlowTips("请重启应用更新后才能支付");
		}
	}
	// 手机
	else if(/ios|iphone|android/i.test(navigator.userAgent)){
		if(isInternal){
			var gameid = 0;
		}
		else{
			var gameid = GAMEID;
		}
		var spec = data.spec ? data.spec : '';
		var url = "/?r=site/pay&gameid="+gameid+"&serverid=1&itemid="
			+ data.itemid + "&itemname=" + data.itemname
			+ "&price=" + data.price + "&count=" + data.count + "&spec=" + spec
			+ "&backurl=" + encodeURIComponent(window.location.href);

		payUI(url);
	}
	else{
		LoginUi.setFlowTips("请在手机中进行游戏支付");
	}
}

function payUI(url) {
	var pay = document.getElementsByClassName('pay')[0];
	if(pay){
		document.body.removeChild(pay);
	}
	var h=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	pay = document.createElement("div");
	pay.className = 'pay';
	pay.style.position = 'absolute';
	pay.style.top = '0px';
	pay.style.width = '100%';
	pay.style.minHeight = h+'px';
	pay.style.backgroundColor = 'rgba(0,0,0,0.75);';
	pay.style.zIndex = 88888888;

	var pay1 = document.createElement("div");
	pay1.className = 'pay1';
	pay1.style.position = 'relative';
	pay1.style.top = '0px';
	pay1.style.minHeight = '320px';
	pay1.style.maxWidth = '640px';
	pay1.style.width = '100%';
	pay1.style.margin = 'auto';
	pay1.style.zIndex = 9;

	var pay2 = document.createElement('div');
	pay2.className = 'pay2';
	pay2.style.position = 'relative';
	pay2.style.margin = 'auto';
	pay2.style.minWidth = '320px'; 
	pay2.style.maxHeight = '640px';
	pay2.style.width = '100%';

	var payFrame = document.createElement('iframe');
	payFrame.className = 'pay3';
	payFrame.style.minHeight = h+'px';
	payFrame.style.minWidth = '320px';
	payFrame.style.maxWidth = '640px';
	payFrame.style.width = '100%';
	payFrame.style.border = '0 solid #eee';
	payFrame.src = url;

	pay.appendChild(pay1);
	pay1.appendChild(pay2);
	pay2.appendChild(payFrame);

	document.body.appendChild(pay);
}

function paysucc(data){
	console.log('======= paysucc =======');
	console.log(data);
	LoginUi.setFlowTips("支付成功");
	$(".pay").hide();
    $(".pay iframe").attr('src', '');
    // 内部支付
    if(data.gameid == 0){
    	if(data.itemid == "1000001"){
    		set_flower();
    	}
    	return;
    }
    else{
	    var GameFrame_2 = document.getElementById('game_window');
		if(GameFrame_2 && typeof GameFrame_2.contentWindow.postMessage === 'function'){
			GameFrame_2.contentWindow.postMessage({op_type:'fn', value:{fn:'paysucc', args:[]}},'*');
		}
	}
}

function paycencel(){
	var pay = document.getElementsByClassName('pay')[0];
	if(pay){
		document.body.removeChild(pay);
	}
}

// 绑定事件
function addEvent( elm, evType, fn, useCapture ) {
    if ( elm.addEventListener ) {
        elm.addEventListener( evType, fn, useCapture );//DOM2.0
    }
    else if ( elm.attachEvent ) {
        elm.attachEvent( 'on' + evType, fn );//IE5+
    }
    else {
        elm['on' + evType] = fn;//DOM 0
    }
}

// 接受sdk回调
function onmessage(e) {
    var _fns = {
     	'pay' : function(args) { pay68(args); },
    	'paycencel' : function(args) { paycencel(args); },
    	'alipaysucc' : function(args) { paysucc(args); },
    	'alipaycencel' : function(args) { paycencel(args); },
    	'goldpaysucc' : function(args) { paysucc(args); },
    	'weixinpaysucc' : function(args) { paysucc(args); },
    	'weixinpaycencel' : function(args) { paycencel(args); }
    };
    console.log('pay event');
    switch( e.data.op_type ) {
    case 'fn':
    	try{
        	(_fns[e.data.value.fn]).apply(window, e.data.value.args);
    	}
    	catch(ex) {
    		console.log(ex);
    	}
        break;
    default:
        console.log(e);
    }
}


addEvent( window, 'message', onmessage, false);

