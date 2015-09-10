	//trim
    function trim(d){
	    while(d.indexOf(" ")!=-1){
	    	d=d.replace(" ","");
		}
	   	 return d;
	}
	//testPhone
	function testPhoneNo(phoneInput){
		var patrn=/^(13[0-9]|15[0-9]|18[0-9]|177)\d{8}$/; 
		if (!patrn.exec(phoneInput)) return false
		return true;
	}
	
	function getMarkPhoneNo(phoneNo){
		var markNo = phoneNo.substring(0,3) + "****" + phoneNo.substr(7,4);
		return markNo;
	}
	
	//乘法函数  
	function accMul(arg1, arg2){
		    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
		    try {  
		        m += s1.split(".")[1].length;  
		    }  
		    catch (e) {  
		    }  
		    try {  
		        m += s2.split(".")[1].length;  
		    }  
		    catch (e) {  
		    }  
		    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);  
	}
	
	//自定义alert	
	var exfastWindow ={
			alert:function(message){
				$('[func=alertWindow]').css('display','block');
				$('[func=alertMessage]').html(message);
				$('[func=alertOk]').click(function(){
					$('[func=alertWindow]').css('display','none');
				});
			}
	}