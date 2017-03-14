if (!window.WebSocket && window.MozWebSocket)
    window.WebSocket = window.MozWebSocket;
if (!window.WebSocket) {
    alert("WebSocket not supported by this browser");
}

var _ws = new WebSocket("ws://www.pupuxing.com:843/", 'echo-protocol');
console.log(_ws)
function initws(uid) {
    var reg = /[\?&]uuid=([A-Za-z0-9_-]*$)/g;
    var rvs = reg.exec(location.search);

    var conn = null;
    if (rvs) {
        console.log(rvs)
        console.log(rvs[1])
        window.roomid = rvs[1];
        conn = new WebSocket('ws://www.pupuxing.com:843/PPXGame/BaseData/Game/crossscreen/join.php?roomid='+window.roomid+'&uid=' + uid, 'echo-protocol');
    } else { 
        conn = new WebSocket('ws://www.pupuxing.com:843/PPXGame/BaseData/Game/crossscreen/create.php?game=1&uid=' + uid, 'echo-protocol');
    }
    
    function process_ws_msg(event) {
        console.log(event.data);
        // {"type":1,"data":{"type":"create","room":235232}}
        var o = jQuery.parseJSON(event.data);
        if (o.type == 1 && o.data.type == 'create') {// room created
            window.roomid = o.data.room;
            return;
        }
        if (o.type == 2) {// user joined
            return;
        }
        if (o.type != 100) return;
        if (o.data == 1) {
            $('.page_1').trigger('roomjoined');
        } else if (o.data == 2) {
            if (rvs) Page.pageList[2].myshake();
            else Page.pageList[1].myshake();
        }
    }
    function reconnect(event) {
        conn = new WebSocket('ws://www.pupuxing.com:843/PPXGame/BaseData/Game/crossscreen/join.php?roomid='+window.roomid+'&uid=' + uid, 'echo-protocol');
        conn.onmessage = process_ws_msg;
        window.wsconn = conn;
    }
    conn.onmessage = process_ws_msg;
    conn.onerror = reconnect;
    conn.onclose = reconnect;
    window.wsconn = conn;
}

$.ajax({
    url : 'getuid.php',
    dataType : 'json',
    success : function(uid) {
        window.uid = uid;
        console.log('uid: ' + uid);
        initws(uid);
    },
    error : function(xhr, t, e) {
        console.log(t, e);
    }
});