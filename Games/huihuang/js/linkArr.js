var data1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
var data2 = {1:"\u4f60\u9760\u4ec0\u4e48\u957f\u8fd9\u4e48\u5927\uff1f",2:"\u4f60\u7684\u6c14\u8d28\u9002\u5408\u5f00\u4ec0\u4e48\u8f66\uff1f",3:"\u4f60\u7684\u6c14\u8d28\u9002\u5408\u4e3b\u6f14\uff1f",4:"\u4f60\u662f\u897f\u6e38\u8bb0\u91cc\u9762\u7684\u8c01\uff1f",5:"\u4f60\u7684\u7075\u9b42\u5f62\u8c61\uff1f",6:"\u4f60\u7684\u8001\u5a46\u4f1a\u662f\u54ea\u4e00\u578b\uff1f",7:"\u4f60\u662f\u91d1\u5eb8\u5c0f\u8bf4\u4e2d\u7684\u8c01\uff1f",8:"\u4f60\u7a7f\u8d8a\u5230\u53e4\u4ee3\u4f1a\u662f\uff1f",9:"\u4f60\u5728\u6297\u6218\u4e2d\u80fd\u5f53\u4ec0\u4e48\u5175\uff1f",10:"\u4f60\u4e3a\u4ec0\u4e48\u4e0d\u4e70iPhone6S\uff1f",11:"\u4f60\u662f\u514b\u62c9\u604b\u4eba\u91cc\u7684\u8c01\uff1f",12:"\u4f60\u662f\u82b1\u5343\u9aa8\u4e2d\u7684\u8c01\uff1f",13:"\u4f60\u8fd9\u8f88\u5b50\u4f1a\u8d5a\u591a\u5c11\u94b1\uff1f",14:"\u4f60\u7684\u957f\u76f8\u5bb9\u6613\u8ba9\u4eba...\uff1f",15:"\u4f60\u548c\u8c01\u649e\u8138\u649e\u6c14\u8d28\u4e86\uff1f",16:"\u4f60\u548c\u8c01\u649e\u8138\u649e\u6c14\u8d28\u4e86?",17:"\u4f60\u7684\u8001\u516c\u4f1a\u662f\u54ea\u4e00\u578b\uff1f",18:"\u4f60\u7684\u6e05\u7eaf\u5ea6\u8fd8\u6709\u591a\u5c11\uff1f",19:"\u4f60\u7684\u5fc3\u91cc\u4f4f\u7740\u795e\u9a6c\u9b3c\uff1f",20:"\u4f60\u8fd8\u5355\u8eab\u7684\u539f\u56e0\u662f\uff1f",21:"\u4f60\u4e0a\u8f88\u5b50\u662f\u600e\u4e48\u6b7b\u7684\uff1f",22:"\u4f60\u9760\u4ec0\u4e48\u5438\u5f15\u5f02\u6027\uff1f",23:"20\u5e74\u540e\u4f60\u5728\u5e72\u4ec0\u4e48\uff1f",24:"\u4f60\u6700\u9002\u5408\u54ea\u9996\u5c0f\u60c5\u6b4c\uff1f",25:"\u4f60\u6700\u50cf\u300a\u7405\u740a\u699c\u300b\u91cc\u7684\u54ea\u4e2a\u4eba\u7269\uff1f",26:"\u8fd9\u8f88\u5b50\u4f60\u80fd\u8d5a\u591a\u5c11\u94b1\uff1f",27:"\u4f60\u7684\u8273\u9047\u6765\u81ea\u54ea\u91cc\uff1f",29:"\u4f60\u77e5\u9053\u81ea\u5df1\u6700\u81f4\u547d\u7684\u5f31\u70b9\u662f\u4ec0\u4e48\u5417\uff1f",30:"\u5982\u6b64\u7279\u522b\u7684\u4f60\uff0c\u505a\u4e8b\u98ce\u683c\u3001\u6027\u683c\u7279\u70b9\u4f1a\u7ed9\u4eba\u600e\u6837\u7684\u5473\u9053\u611f\u53d7\u5462\uff1f",32:"\u4f60\u6700\u7f8e\u7684\u5730\u65b9\u662f\u5728\uff1f",33:"\u4f60\u77e5\u9053\u81ea\u5df1\u547d\u91cc\u7f3a\u4ec0\u4e48\u5417\uff1f",34:"\u4f60\u6700\u9002\u5408\u5f00\u4ec0\u4e48\u5e97\uff1f",35:"\u4f60\u9760\u4ec0\u4e48\u5403\u996d\uff1f",36:"\u4f60\u4e00\u751f\u4e2d\u6700\u8f89\u714c\u7684\u9636\u6bb5\u5728\u4ec0\u4e48\u5e74\u9f84\u5462\uff1f",37:"\u6d4b\u6d4b\u4f60\u5929\u751f\u662f\u4ec0\u4e48\u547d\uff1f",38:"\u4f60\u5728\u53e4\u4ee3\u662f\u4f4f\u964b\u5ba4\u8fd8\u662f\u8c6a\u5b85\uff1f",39:"\u4e16\u754c\u4e0d\u662f\u53ea\u6709\u5317\u4e0a\u5e7f\uff0c\u4f60\u66f4\u9002\u5408\u53bb\u54ea\u513f\u53d1\u5c55\uff1f",40:"\u4f60\u9760\u4ec0\u4e48\u627e\u5230\u53e6\u4e00\u534a\uff1f",41:"\u6d4b\u6d4b\u4f60\u7684\u82b1\u5fc3\u6307\u6570",42:"\u4e0b\u534a\u5e74\u4f60\u7684\u610f\u5916\u4e4b\u559c\u662f...?",43:"\u4f60\u53d7\u9a97\u6307\u6570\u6709\u591a\u9ad8\uff1f",44:"\u4f60\u88ab\u7231\u7684\u4e94\u4e2a\u7406\u7531\u662f\uff1f",45:"\u4f60\u7684\u547d\u8fd0\u662f\uff1f",46:"\u6d4b\u6d4b\u591a\u4e45\u540e\u6211\u624d\u80fd\u8131\u5355(\u2565\u256f^\u2570\u2565)",47:"\u6d4b\u6d4b\u4f60\u7684\u51fa\u8f68\u6307\u6570\uff1f",48:"\u4f60\u5728\u670b\u53cb\u773c\u4e2d\u662f\u4ec0\u4e48\u4eba\uff1f",49:"\u6d4b\u6d4b\u4f60\u672a\u6765\u7684\u8eab\u4ef7",50:"\u4f60\u6bd5\u4e1a\u540e\u6700\u9002\u5408\u505a\u4ec0\u4e48\uff1f"};
function getRandom() {
	var resStrs = "";
    var old_arry = data1,
        range = 3;
    range = range > old_arry.length?old_arry.length:range;
    var newArray = [].concat(old_arry),
        valArray = [];
    for (var n = 0; n < range; n++) {
        var r = Math.floor(Math.random() * (newArray.length));
        valArray.push(newArray[r]);
        newArray.splice(r, 1);
    }
	for(var key in valArray){
		resStrs = resStrs+"<a href='../../game/"+valArray[key]+"/result.html?username="+userName+"' style='color:#FF5C61;margin-top:20px;display:block;'>"+data2[valArray[key]]+"</a>";
	}
    document.write(resStrs);
}