
var _conf = {
	// host : "192.168.1.100",
	winLine:9000,
	delay:8000,
	gameRate:500,
	host : "node.ekche.com",
	port:9528,
	userSokcet :"user",
	boardSocket:"board",
	debug:false
}

_conf.uri = "http://"+_conf.host+"/tugofwar/client/user/?";

if ( typeof module === "object" && typeof module.exports === "object" ) {
	module.exports = _conf;
}
