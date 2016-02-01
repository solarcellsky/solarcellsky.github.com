	//trim
    function trim(d){
	    while(d.indexOf(" ")!=-1){
	    	d=d.replace(" ","");
		}
	   	 return d;
	}
	//testPhone
	function testPhoneNo(phoneInput){
		return /^1\d{10}$/.test(trim(phoneInput));
	}
	
	function getMarkPhoneNo(phoneNo){
		var markNo = phoneNo.substring(0,3) + "****" + phoneNo.substr(7,4);
		return markNo;
	}