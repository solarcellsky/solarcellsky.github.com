function Ticket(type, code, date, con)
{
	this.type = type;
	this.code = code;
	this.usedate = date;
	this.container = con;
	this.codebase = "http://2016mcd.angrybirds.nimads.com/qrcode.php?code=";
}

Ticket.prototype = {
	show:function (){
		
		if (this.type == 1){
			var img = new Image();
	        img.src = 'img/big_ice_ticket.png';
	        img.onload = function (){
	        		$(img).css({left:(640 - img.width)/2, top:(1040 - img.height)/2});
	        }
	        this.container.append(img);
		    
		    var img_code = new Image();
	        img_code.src = this.codebase + this.code;
	        	img_code.width = img_code.height = 215;
	        	$(img_code).css({left:212.5, top:370});
	        this.container.append(img_code);
		    
		    var txt_default = document.createElement("input");
		    txt_default.readOnly = true;
			txt_default.value = "兑换时效";
			$(txt_default).css({left:170, top:668});
			this.container.append(txt_default);
			this.container.fadeIn();
			
		    var txt = document.createElement("input");
		    txt.readOnly = true;
			txt.value = this.usedate;
			$(txt).css({left:175, top:688});
			this.container.append(txt);
			this.container.fadeIn();
			
			if (this.usedate.match(/2016.04.19/i) == '2016.04.19'){
				var txt_1 = document.createElement("input");
				txt_1.readOnly = true;
				txt_1.value = "仅限甜品站兑换";
				$(txt_1).css({left:175, top:705});
				this.container.append(txt_1);
				this.container.fadeIn();
				
				var txt_2 = document.createElement("input");
				txt_2.readOnly = true;
				txt_2.value = "部分甜品站不参加 以门店公示为准";
				$(txt_2).css({left:175, top:725});
				this.container.append(txt_2);
				this.container.fadeIn();
			}else {
				var txt_3 = document.createElement("input");
				txt_3.readOnly = true;
				txt_3.value = "部分门店不参加 以门店公示为准";
				$(txt_3).css({left:175, top:725});
				this.container.append(txt_3);
				this.container.fadeIn();
			}
		}
		
		$("#show_ticket_con").fadeIn();
	},
	destory:function (){
		this.container.children().remove();
	},
	click:function (){
		
	}
}


