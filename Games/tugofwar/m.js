$(function() {

    //  init socket
    var socket; {
        socket = io('ws://' + _conf.host + ':' + _conf.port + '/' + _conf.ninjaSocket);
        socket.on('connect', function() {
            // join room
            socket.emit('joinRoom', {
                rid: _rid,
                gid: _gid,
                team: _team,
                avt:_avt
            });

            initSocketEvent();
        });
    }

    var _data = {},_isStart = false;

    function initSocketEvent() {
        // 拿到队伍排序
        socket.on('teamNo', function(data) {
            console.log('socket==>teamNo:', data);
            _data.tno = data.no;
        });

        // 开始
        socket.on('start',function(data) {
            console.log('socket===>start');
            _isStart = true;
            $("#logo").hide();
            $("#phone").show();
            sendData();
        });

        // 房间错误信息
        socket.on('roomErr', function(data) {
            console.log('socket==>roomErr', data);
            alert('房间信息错误：',data.msg);
        });

        socket.on('gameover',function(data) {
            _isStart = false;
            if (data.winner == _team) {
                alert('臂力惊人啊，骚年');
            }else{
                alert('臂力不够啊，骚年');
            }
        });
    }

    var pos={},power = 0;
    // var $nice = $("niceNo");

    function getD(p) {
        return parseInt(Math.sqrt(Math.pow(p.x - (pos.x||0), 2) + Math.pow(p.y - (pos.y||0), 2) + Math.pow(p.z - (pos.z||0), 2)));
    }

    function sendData () {
        if (!_isStart) return;
        power > 0 && socket.emit('shake', { power : power , tno : _data.tno });
        power = 0;
        setTimeout(sendData,_conf.gameRate);
    }

    function motionHandler(event) {
        // alert(event.acceleration.x);
        power += getD(event.accelerationIncludingGravity);
        pos = event.accelerationIncludingGravity;
    }

    window.addEventListener("devicemotion", motionHandler, false);

});