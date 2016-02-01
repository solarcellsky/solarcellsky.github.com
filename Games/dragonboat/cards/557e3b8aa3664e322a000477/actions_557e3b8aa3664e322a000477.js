Mugeda.script.push(function (mugeda) {
window.hit_kasiling = function(){
  
    location.href = 'http://mp.weixin.qq.com/s?__biz=MzA3MzMwMTgwNQ==&mid=201265173&idx=1&sn=8a370252d80d26320ba08d3ba114bc6b#rd';
}

var crid = "557e3b8aa3664e322a000477";
(function (window) {
    var AudioPlayer = function (url, tim) {
        this.dom = document.createElement('audio');
        this.dom.src = url;
        this.dom.preload = 'auto';
        this.tim = tim;
        this.loadStatus = 'notload';
        this.curName = null;
    }
    AudioPlayer.prototype.play = function (name, force) {
        if (name == this.curName && !force) return;
        this.curName = name;
        if (name == -1) {
            this.dom.pause();
            return;
        }

        if (this.loadStatus == 'notload') {
            this.dom.src = this.dom.src;
            this.dom.load();
        }

        this.curMin = this.tim[name].tim[0];
        this.curMax = this.tim[name].tim[1];
        this.curLoop = this.tim[name].loop;

        if (this.loadStatus == 'loaded') {
            this.dom.pause();
            this.dom.currentTime = this.curMin;
            this.dom.play();
        }


        if (this.loadStatus == 'notload') {
            this.loadStatus = 'loading';
            var _ = this;
            this.dom.addEventListener('timeupdate', function () {
                var now = this.currentTime
                if (now < _.curMin) {
                    // impossble
                }
                else if (now >= _.curMax) {
                    if (_.curLoop) {
                        this.pause();
                        this.currentTime = _.curMin;
                        this.play();
                    }
                    else {
                        this.pause();
                        _.curName = -1;
                    }
                }
            })
            this.dom.addEventListener('canplaythrough', function () {
                _.loadStatus = 'loaded';
                this.currentTime = _.curMin;
                this.play();
            })
        }
    }
    window.AudioPlayer = AudioPlayer;
})(window)

var audioPlayer = new AudioPlayer('media/jiayou3.mp3', {
    back: { tim: [0, 31], loop: true },
    noise: { tim: [32, 75], loop: true }
});

window.startBtn = function () {
    audioPlayer.play('back');
}

var formatDetection = document.getElementById("format-detection");
if (formatDetection == null) {
    formatDetection = document.createElement("format-detection");
}
formatDetection.content = "telephone=no";

var viewport = document.getElementById("viewport");
if (viewport == null) {
    viewport = document.createElement("viewport");
}
viewport.content = "scale=0";


var timeValue = 0;
var minTimeValue = 15;
var game = null;
var islist = false;

window.lockAndMake = function () {debugger
    make(true);
}

window.noLockAndMake = function () {
    make(false);
}

function make(lock) {
    makeRequest('https://weika.mugeda.com/card/invite.php/send', 'GET', {
        //id: '6fabadc7',//在本地测试打开
        crid: crid,
        lock: lock ? 1 : 0,
        rank_type: 1,
        rank_length: 6,
        customization: 1,
        back: location.href.replace(location.search, '').replace(location.hash, '')
    });
}

var getParam = function (name) {
    var url = window.location.search;
    var reg = new RegExp('(\\?|&)' + name + '=([^&?]*)', 'i');
    var arr = url.match(reg);
    if (arr) return arr[2];
}


if (getParam('hash')) {
    window.cardHash = getParam('hash');
    window.lock = getParam('lock');
    //alert(window.cardHash);
    //alert(window.lock);
}
if (getParam('submit')) {
    window.submit = getParam('submit');
}
if (getParam('customization')) {
    window.customization = getParam('customization');
}
if (getParam('error')) {
    window.error = getParam('error');
}

var doWeixin = function () {
    /*var url = "";
    if (window.lock == "1" || (window.lock == "0" && window.customization)) {
        url = location.href.replace(location.search, '') + '?crid=' + getParam('crid') + '&lock=' + window.lock + '&hash=' + window.cardHash;
    }
    else {
        url = location.href.replace(location.search, '') + '?crid=' + getParam('crid');
    }

    // 删除submit, 避免转发后收卡人打开时跳转：
    url = url.replace(/(\&submit=\d*\&*$|submit=\d*\&*)/gi, "");
*/
    var param = [];
    if (scoreEngine.getParam('id')) {
        param.push('id=' + scoreEngine.getParam('id'));
    }
    if (scoreEngine.getParam('crid')) {
        param.push('crid=' + scoreEngine.getParam('crid'));
    }
    if (window.customization) {
        param.push('customization=' + window.customization);
    }
    if (window.lock) 
    {
        param.push('lock=' + window.lock);
    }
    if (window.cardHash) {
        param.push('hash=' + window.cardHash);
    }
    var url = location.href.replace(location.search, '').replace(location.hash, '') + '?' + param.join('&');
    var des = '端午节最火爆的赛龙舟比赛，简直停不下来！你也赶紧来试试吧！';
    var title = '过端午，赛龙舟，乐悠悠！';

    defineWechatParameters({
        "img_url": "http://mucard.mugeda.com/weixin/card/cards/5382c6a6a3664ebb7f000b4c/54afa270a3664e6b310004fc.png",//"http://mucard.mugeda.com/weixin/card/cards/" + crid +"/thumbnail_128.jpg",
        "img_width": 128,
        "img_height": 128,
        "desc": des,
        "title": title,
        "success_share_callback": function(){
            //scoreEngine.sendSuccess();
        },
        "url_callback": function(){
            return url;
        }
    });
    
    /*WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        if (timeValue > 1)
            des = '我在端午节最火爆的赛龙舟比赛中取得了' + timeValue + '秒的成绩。你要比试比试吗？';

        WeixinJSBridge.invoke('sendAppMessage', {
            "appid": "",
            "img_url": 'http://cdn-cn.mugeda.com/weixin/card/cards/5382c6a6a3664ebb7f000b4c/longzhou_128.png',
            "img_width": 128,
            "img_height": 128,
            "link": url,
            "desc": des,
            "title": title
        });

    });

    WeixinJSBridge.on('menu:share:timeline', function (argv) {
        if (timeValue > 1)
            des = '我在端午节最火爆的赛龙舟比赛中取得了' + timeValue + '秒的成绩。你要比试比试吗？';

        WeixinJSBridge.invoke('shareTimeline', {
            "appid": "",
            "img_url": 'http://cdn-cn.mugeda.com/weixin/card/cards/5382c6a6a3664ebb7f000b4c/longzhou_128.png',
            "img_width": 128,
            "img_height": 128,
            "link": url,
            "desc": title,
            "title": des
        });
    });

    WeixinJSBridge.call('showOptionMenu');*/
};

if(window.error == "1")
{
    //alert("用户取消了提交成绩！");
}

//alert(location.href);

// 发送get或者post请求
function makeRequest(url, method, data) {
    var form = document.createElement('form');
    form.action = url;
    form.method = method;
    for (var name in (data || {})) {
        var ipt = document.createElement('input');
        ipt.type = 'hidden';
        ipt.name = name;
        ipt.value = data[name];
        form.appendChild(ipt);
    }
    form.submit();
}
/*
// 发送ajax请求
function ajax(url, type, data, callback) {
    window.loadAjax.left = 90;
    var query = [];
    for (item in data) query.push(item + '=' + data[item]);
    query = query.join('&');

    var xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            xhr.onreadystatechange = null;
            window.loadAjax.left = -1000;
            clearTimeout(abortTimeout);
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                var result = xhr.responseText;
                try {
                    callback(null, JSON.parse(result));
                }
                catch (e) {
                    alert('加载失败');
                    callback(e, null);
                }
            }
            else{
                alert('加载失败');
            }
        }
        else{
           //console.log(xhr.readyState);
           //window.loadAjax.left = -1000;
        }
    }
    xhr.open(type, url + (type.toLowerCase() == 'get' ? '?' + query : ''), true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var abortTimeout = setTimeout(function () {
        xhr.onreadystatechange = null;
        xhr.abort();
    }, 10 * 1000);
    xhr.send((type.toLowerCase() == 'post' ? query : null));
}

window.sumbitScore = function () {
    var data = {
        id: '6fabadc7',
        crid: '5382c6a6a3664ebb7f000b4c',
        overall: 1,//
        score: 100,
        multiple: 1,
        sort: 1,
        rank_type: 1,
        rank_length: 6,
        unique: 1,
        back: location.href.replace(location.search, '').replace(location.hash, '')
    };

    if (window.cardHash) {
        data.overall = 0;
        data.hash = window.cardHash;
    }
    if (window.lock) {
        data.lock = window.lock;
    }
    if (window.customization) {
        data.customization = window.customization;
    }
    data.score = timeValue * 1000;
    makeRequest('https://weika.mugeda.com/card/score.php/submit', 'GET', data);
}

window.listScore = function () {
    var now = new Date();
    var time = '' + now.getTime();
    var data = {
        'crid': '5382c6a6a3664ebb7f000b4c',
        'time': time
    };
    if (window.cardHash) {
        delete data.crid;
        data.hash = window.cardHash;
    }
    ajax('https://weika.mugeda.com/card/score.php/overall', 'get', data, function (err, data) {
        if (!err) {
            if (data.status === 0) {//alert(JSON.stringify(data));
                game.list(data.data);
            }
        }
    });
}
*/

var o = (function () {
        var list = [];
        return function (param) {
            if (list[param]) return list[param];
            var obj = mugeda.scene.getObjectByName(param);
            list[param] = obj;
            return obj;
        }
    })();
var scoreEngine = {
    requestList: function () {
        //scoreEngine.list(JSON.parse('{"status":0,"desc":"OK","data":[{"score":30876,"name":"\u5218","avatar":"http:\/\/wx.qlogo.cn\/mmopen\/WgKEQTGxLYdHg8NLqSXjVtzn6ULibahbMnTlygPtgIdBDsIicj6A6dHq6VH7ibzG04Wm4MKdRgBiaN7omdyE2RBz4b9sTWqlxnfX\/0"}]}').data);
        o('loading').alpha = 1;
        var data = {
            'crid': crid,
            'timestamp': Math.random()
        };
        if (window.cardHash) {
           // delete data.crid;
            data.hash = window.cardHash;
        }
        scoreEngine.makeRequest('https://weika.mugeda.com/card/score.php/overall', 'get', data, false, function (err, data) {
            o('loading').alpha = 0;
            //console.log(data.data);
            if (data == null) {
                alert('排行榜加载失败');
            }
            else if (data.status === 0) {//alert(JSON.stringify(data));
                scoreEngine.list(data.data);
            }
            else {
                alert('排行榜加载失败');
            }
        });
    },
    list: function (data) {
        data = data.splice(0, 6);

        for (var i = 0; i < data.length && i < 6; i++) {
            o('name' + i).text = data[i].name;
            o('score' + i).text = data[i].score / 1000 + 's';
            //o('phone' + i).text = data[i].phone;
            o('avatar' + i).dom.src = data[i].avatar || 'http://mucard.mugeda.com/weixin/card/cards/538ec126a3664e0158000290/5385c6fda3664ec50e000487.png';
            o('name' + i).alpha = 1;
            o('score' + i).alpha = 1;
            o('avatar' + i).alpha = 1;
            o('number' + i).alpha = 1;
            o('bg' + i).alpha = 1;
        }
        for (var i = data.length; i < 6; i++) {
            o('name' + i).alpha = 0;
            o('score' + i).alpha = 0;
            o('avatar' + i).alpha = 0;
            o('number' + i).alpha = 0;
            o('bg' + i).alpha = 0;
        }
    },
    makeRequest: function (url, method, data, rediect, callback) {
        if (rediect) {
            var form = document.createElement('form');
            form.action = url;
            form.method = method;
            for (var name in (data || {})) {
                var ipt = document.createElement('input');
                ipt.type = 'hidden';
                ipt.name = name;
                ipt.value = data[name];
                form.appendChild(ipt);
            }
            form.submit();
        }
        else {
            var query = [];
            for (item in data) query.push(item + '=' + data[item]);
            query = query.join('&');

            var xhr = new window.XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    xhr.onreadystatechange = null;
                    //window.loadAjax.left = -1000;
                    clearTimeout(abortTimeout);
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        var result = xhr.responseText;
                        try {
                            callback(null, JSON.parse(result));
                        }
                        catch (e) {
                            //alert('加载失败');
                            callback(e, null);
                        }
                    }
                    else {
                        callback('err', null);
                        //alert('加载失败');
                    }
                }
                else {
                    //console.log(xhr.readyState);
                    //window.loadAjax.left = -1000;
                }
            }
            xhr.open(method, url + (method.toLowerCase() == 'get' ? '?' + query : ''), true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            var abortTimeout = setTimeout(function () {
                xhr.onreadystatechange = null;
                xhr.abort();
            }, 10 * 1000);
            xhr.send((method.toLowerCase() == 'post' ? query : null));
        }
    },
    getGuid: function () {
        if (scoreEngine.guid == null) {
            var c = ~~Math.random() * 10000;
            var d = new Date(),
                m = d.getMilliseconds() + "",
                u = ++d + m + c;
            scoreEngine.guid = u;
        }
        return scoreEngine.guid;

    },
    makeData: function (action, opts) {
        var data = {
            crid: crid,//mugeda.aniData.crid,
            sessId: scoreEngine.getGuid(),
            val: opts.val || '', 
            data: JSON.stringify({'action': action})
        };
        scoreEngine.makeRequest('https://weika.mugeda.com/card/game_record.php/add', 'post', data, false, function () { });
    },
    start: function () {
        scoreEngine.guid = null;
        scoreEngine.makeData('begin', {val: 0});
    },
    mid: function (score) {
        scoreEngine.makeData('mid', {val: score});
    },
    end: function (score) {
        scoreEngine.makeData('end', {val: score});
        window.A13 = score;
    },
    getParam: function (name) {
        var url = window.location.search;
        var reg = new RegExp('(\\?|&)' + name + '=([^&?]*)', 'i');
        var arr = url.match(reg);
        if (arr) return arr[2];
    },
    submitScore: function (score) {
        var data = {
            crid: crid,//mugeda.aniData.crid,
            overall: 1,
            score: score,
            multiple: 1,
            sort: 1,
            rank_type: 1,
            rank_length: 20,
            unique: 1,
            sessId: scoreEngine.getGuid(),
            gamename: 'dragonboatrace',
            //third: 1,
            //data: DEBUG ? JSON.stringify({nickname:'nickname', avatar: 'avatar', openid:'openid',phone:mobileNum}) : JSON.stringify({nickname: scoreEngine.getParam('nickname'), avatar: scoreEngine.getParam('avatar'), openid: scoreEngine.getParam('openid'),phone:mobileNum}),
            back: location.href.replace(location.search, '').replace(location.hash, '')
        };
        if (scoreEngine.getParam('id')) {
            data.id = scoreEngine.getParam('id')
        }

        if (window.cardHash) {
            data.overall = 0;
            data.hash = window.cardHash;
        }
        if (window.lock) {
            data.lock = window.lock;
        }
        if (window.customization) {
            data.customization = window.customization;
        }
        console.log(""+data);//https://weika.mugeda.com/card/score.php/submit
        scoreEngine.makeRequest('https://weika.mugeda.com/card/score.php/submit', 'get', data, true);
    },
   /* sendSuccess: function () {
        scoreEngine.times += 3;
        localStorage.setItem('dragonboatracetimes', scoreEngine.times);
        scoreEngine.makeData('end', { data: 'share' });
        o('lefttimes').text = scoreEngine.times;
        o('lefttimes2').text = scoreEngine.times;
        //o('lefttime3').text = scoreEngine.times;
        //alert(mugeda.scene.currentId);
        if (mugeda.scene && mugeda.scene.currentId && mugeda.scene.currentId == 7) {
            mugeda.scene.gotoAndPlay(0);
        }
    },
    eatTimes: function () {
        scoreEngine.times--;
        localStorage.setItem('dragonboatracetimes', scoreEngine.times);
        o('lefttimes').text = scoreEngine.times;
        o('lefttimes2').text = scoreEngine.times;
        //o('lefttimes3').text = scoreEngine.times;
        if(scoreEngine.times < 0 && audioPlayer)
        {
            audioPlayer.pause();
        }
    },
    initTimes: function () {
        if (window.localStorage) {
            var times = localStorage.getItem('dragonboatracetimes');

            var day = localStorage.getItem('dragonboatraceday');
            var currentDay = new Date().getDate();

            //currentDay = 4;

            if (day == null) {
                localStorage.setItem('dragonboatraceday', currentDay);
                day = currentDay;
            }
            else day = parseInt(day);

            if (times == null) {
                localStorage.setItem('dragonboatracetimes', 5);
                times = 5;
            }
            else {
                times = parseInt(times);
            }

            if (currentDay != day) {
                times += 5;
                localStorage.setItem('dragonboatracetimes', times);
                localStorage.setItem('dragonboatraceday', currentDay);
            }

            scoreEngine.times = times;
        }
        else {
            scoreEngine.times = 5;
        }

    }*/
}
scoreEngine.guid = scoreEngine.getGuid();
//scoreEngine.initTimes();
//if (typeof (WeixinJSBridge) != "undefined") {
    doWeixin();
/*}
else {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        doWeixin();
        // if (weiParam.defined) bindWeiEvent();
    });
}*/
window.sumbitScore = function () {
    scoreEngine.submitScore(timeValue * 1000);
}

window.listScore = function () {
    scoreEngine.requestList();
}

var mugeda = Mugeda.getMugedaObject();
mugeda.addEventListener("renderReady", function () {
    var scene = mugeda.scene;
    var restart = true;
    var gameFrame = 90;
    var endFrame = 160;

    var time = scene.getObjectByName("time");
    var starting = scene.getObjectByName("starting");
    var endline = scene.getObjectByName("endline");
    var referenceBoat = scene.getObjectByName("referenceBoat");
    var boat = scene.getObjectByName("boat");
    var space = scene.getObjectByName("space");
    var resoult = scene.getObjectByName("resoult");
    var hashText = scene.getObjectByName("hashText");
    var notice = scene.getObjectByName("notice");
    notice.text = "本游戏卡被转发后，收到你转发的卡的用户，其分数将计入一个全局排行榜。如果你想要采用你自己的排行榜（例如：仅对某个群里用户共用的微排行榜），请在游戏首页菜单选择“定制游戏”。";
	var makeText = scene.getObjectByName("makeText");
    var startMake = scene.getObjectByName("startMake");
    makeText.alpha = 0;
    startMake.alpha = 1;
    
    window.loadAjax = scene.getObjectByName("loading");
    window.loadAjax.left = -1000;

    function crc32(str) {
        //  discuss at: http://phpjs.org/functions/crc32/
        // original by: Webtoolkit.info (http://www.webtoolkit.info/)
        // improved by: T0bsn
        //  depends on: utf8_encode
        //   example 1: crc32('Kevin van Zonneveld');
        //   returns 1: 1249991249

        var table =
          '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';

        var crc = 0;
        var x = 0;
        var y = 0;

        crc = crc ^ (-1);
        for (var i = 0, iTop = str.length; i < iTop; i++) {
            y = (crc ^ str.charCodeAt(i)) & 0xFF;
            x = '0x' + table.substr(y * 9, 8);
            crc = (crc >>> 8) ^ x;
        }

        // >>> 0 forces unsigned operation
        return (crc ^ (-1)) >>> 0;
    }

    if (window.cardHash) {
        var crc = crc32(window.cardHash);
        hashText.text = "游戏定制ID：" + crc + (parseInt(window.lock) ? ', 采用锁定的微排行榜' : ', 采用非锁定的微排行榜');
        if (window.lock == "1") {
            makeText.alpha = 1;
            startMake.alpha = 0;
            notice.text = "本游戏卡已被定制，采用了经过锁定的微排行榜。收到你转发的卡的用户，其分数将计入同一个排行榜。如果你想要采用你自己的排行榜（例如：仅对某个群里用户共用的微排行榜），请在游戏首页菜单选择“定制游戏”。";
        }
    }
    else {
        hashText.text = "非定制游戏，采用全局排行榜";
        //hashText.alpha = 0;
    }

    var mileage = scene.getObjectByName("mileage");
    mileage.scene.setSegment("normal", 0, 49, false);
    mileage.scene.setSegment("stop", 0, 0, false);
    mileage.scene.playSegment("stop");
    var mileageValue = mileage.scene.getObjectByName("mileageValue");
    var preMileageValue = 0;
    var startingPos = 278;
    var referenceBoatPos = 61;
    var spaceValue = 0;
    var reducePower = 0;
    var powerLineMaxFrame = 60;
    var minRedFrame = 40;
    var gameOver = false;
    var retreatTime = 0;
    var advanceTime = 0;
    var startTime;
    space.text = 0;
    time.text = 0;
    var gameData =
    {
        maxBranchSpeed: 5,
        referenceSpeedCoefficient: 0.3,
        middleCoefficient: 0.55,
        minCoefficient: 0.1,
        distance: 4000,
        initpower: 60,
        addpower: 6,
        minReduce: 1,
        maxReduce: 1.5,
        delay: 3,
        referenceWidthCoefficient: 0.8,
        relativeSpeed: 8
    };

    // 电脑龙舟目标位置
    var targetReferenceLeft;

    var maxReferenceBoatLeft = boat.left + boat.width * gameData.referenceWidthCoefficient;
    var minReferenceBoatLeft = boat.left - boat.width * gameData.referenceWidthCoefficient;
    var middleSpeed = gameData.maxBranchSpeed * 3 * gameData.middleCoefficient;
    var minSpeed = gameData.maxBranchSpeed * 3 * gameData.minCoefficient;
    var minPower = gameData.initpower * gameData.minCoefficient;
    var referenceSpeed = gameData.maxBranchSpeed * 3 * gameData.referenceSpeedCoefficient;
    var speed = gameData.maxBranchSpeed * 3;
    var drum = [3];
    var power = [3];
    var powerLine = [3];
    var person = [3];
    var referencePerson = [3];
    var prePowerLineFrame = [3];
    var control = [3];
    var delay = [3];
    var burst = [3];
    var spindrift = [4];
    for (var i = 0; i < 3; i++) {
        drum[i] = scene.getObjectByName("drum" + i);
        drum[i].scene.setSegment("static", 0, 0, false);
        drum[i].scene.setSegment("run", 1, 2, false);
        drum[i].scene.playSegment("static");
        power[i] = gameData.initpower;
        powerLine[i] = scene.getObjectByName("powerLine" + i);
        for (var j = 0; j < 61; j++) {
            powerLine[i].scene.setSegment("" + j, j, j, false);
        }
        var powerLineFrame = powerLineMaxFrame - power[i];
        powerLine[i].scene.playSegment("" + powerLineFrame);
        person[i] = scene.getObjectByName("person" + i);
        person[i].scene.setSegment("normal", 0, 9, true);
        person[i].scene.setSegment("happy", 10, 20, false);
        person[i].scene.setSegment("sad", 21, 31, false);
        //person[i].scene.setSegment("tire", 31, 41, true);
        person[i].scene.setSegment("stop", 0, 0, false);
        person[i].scene.playSegment("stop");
        prePowerLineFrame[i] = 0;

        referencePerson[i] = scene.getObjectByName("referencePerson" + i);
        referencePerson[i].scene.setSegment("normal", 0, 9, true);
        referencePerson[i].scene.setSegment("stop", 0, 0, false);
        referencePerson[i].scene.playSegment("stop");
        control[i] = scene.getObjectByName("control" + i);
        control[i].addEventListener("inputstart", hitDrum);
        delay[i] = 0;
        burst[i] = scene.getObjectByName("burst" + i);
        burst[i].scene.setSegment("normal", 0, 13, false);
        burst[i].scene.setSegment("stop", 13, 13, false);
        burst[i].scene.playSegment("stop");
        spindrift[i] = scene.getObjectByName("spindrift" + i);
        spindrift[i].scene.setSegment("normal", 0, 4, true);
        spindrift[i].scene.setSegment("stop", 5, 5, false);
        spindrift[i].scene.playSegment("stop");
    }
    spindrift[3] = scene.getObjectByName("spindrift3");
    spindrift[3].scene.setSegment("normal", 0, 4, true);
    spindrift[3].scene.setSegment("stop", 5, 5, false);
    spindrift[3].scene.playSegment("stop");
    var name = [6];
    var score = [6];
    var avatar = [6];
    var number = [6];
    var bg = [6];
    for (var i = 0; i < 6; i++) {
        name[i] = scene.getObjectByName("name" + i);
        score[i] = scene.getObjectByName("score" + i);
        avatar[i] = scene.getObjectByName("avatar" + i);
        number[i] = scene.getObjectByName("number" + i);
        bg[i] = scene.getObjectByName("bg" + i);
        name[i].alpha = 0;
        score[i].alpha = 0;
        avatar[i].alpha = 0;
        number[i].alpha = 0;
        bg[i].alpha = 0;
    }
    function hitDrum(event) {
        var index = 0;
        if (event.inputX < 120) {
            index = 0;
        }
        else if (event.inputX > 193) {
            index = 2;
        }
        else {
            index = 1;
        }

        if (gameOver) {
            return;
        }
        if (power[index] < gameData.initpower) {
            power[index] += gameData.addpower;
            if (power[index] > gameData.initpower) {
                power[index] = minPower;
                burst[index].scene.playSegment("normal");
                //power[index] = gameData.initpower;
            }
        }
        else {
            power[index] = minPower;
        }
        speed = (power[0] + power[1] + power[2]) * gameData.maxBranchSpeed / gameData.initpower;

        drum[index].scene.playSegment("run");
        var powerLineFrame = powerLineMaxFrame - Math.round(power[index]);

        powerLine[index].scene.playSegment("" + powerLineFrame);
        prePowerLineFrame[index] = powerLineFrame;
        delay[index] = gameData.delay;
    }
    Game = function () {
        var Game = this;
        main = function () {
            if (spaceValue >= gameData.distance) {
                gameOver = true;
                audioPlayer.play('back');
                for (var i = 0; i < 3; i++) {
                    powerLine[i].scene.playSegment("0");
                    if (referenceBoat.left <= referenceBoatPos) {
                        person[i].scene.playSegment("happy");
                    }
                    else {
                        person[i].scene.playSegment("sad");
                    }
                    referencePerson[i].scene.playSegment("stop");
                    spindrift[i].scene.playSegment("stop");
                }
                spindrift[3].scene.playSegment("stop");
                resoult.text = timeValue + "s";
                if (typeof (Storage) !== "undefined")
                    localStorage.setItem("dragonboat_score", timeValue);

                scoreEngine.end(Math.round(timeValue * 1000));
                
                scene.setFrameout(36, function () {
                    scene.play();
                });

            }
            else {
                var date = new Date();
                timeValue = (date.getTime() - startTime) / 1000;
                time.text = timeValue + "s";
            }
        };
        Game.init = function () {
            var myDate = new Date();
            startTime = myDate.getTime();
            gameOver = false;

            starting.left = startingPos;
            endline.left = starting.left + gameData.distance - 250;
            referenceBoat.left = referenceBoatPos;

            speed = gameData.maxBranchSpeed * 3;
            referenceSpeed = gameData.maxBranchSpeed * 3 * gameData.referenceSpeedCoefficient;
            spaceValue = 0;
            space.text = spaceValue;
            preMileageValue = 0;
            mileageValue.text = spaceValue + "m";
            //mileage.scene.playSegment("normal");
            for (var i = 0; i < 3; i++) {
                person[i].scene.playSegment("normal");
                referencePerson[i].scene.playSegment("normal");
                delay[i] = 0;
                power[i] = gameData.initpower;
                prePowerLineFrame[i] = 0;
                spindrift[i].scene.playSegment("normal");
            }
            spindrift[3].scene.playSegment("normal");
        };
        Game.checkrun = function () {
            if (gameOver) {
                return;
            }

            starting.left -= speed;
            endline.left -= speed;

            spaceValue += speed;
            var realSpace = Math.round(spaceValue / 10);
            space.text = realSpace;
            if (realSpace - preMileageValue > 100 && realSpace < gameData.distance / 10) {
                preMileageValue = Math.round(realSpace / 100) * 100;
                mileageValue.text = preMileageValue + "m";
                mileage.scene.playSegment("normal");
                if(Math.round(realSpace / 100) === 2)
                {
                    scoreEngine.mid(Math.round(timeValue * 1000));
                }
            }
            reducePower = gameData.minReduce + (gameData.maxReduce - gameData.minReduce) * (spaceValue) / gameData.distance;
            for (var i = 0; i < 3; i++) {
                if (delay[i] <= 0) {
                    if (power[i] > minPower) {
                        power[i] -= reducePower;
                    }
                    else {
                        power[i] = minPower;
                    }
                    //power[i] = Math.round(power[i]);
                    var powerLineFrame = powerLineMaxFrame - Math.round(power[i]);
                    powerLine[i].scene.playSegment("" + powerLineFrame);
                    prePowerLineFrame[i] = powerLineFrame;
                }
                delay[i]--;
            }

            var ratio = (power[0] + power[1] + power[2]) / (3 * gameData.initpower);
            speed = ratio * 3 * gameData.maxBranchSpeed;

            var scale = (ratio - gameData.middleCoefficient) / (1 - gameData.middleCoefficient);
            targetReferenceLeft = boat.left - boat.width * gameData.referenceWidthCoefficient * scale;

            referenceSpeed = Math.abs(gameData.relativeSpeed * scale);
            referenceSpeed = Math.min(referenceSpeed, Math.abs(referenceBoat.left - targetReferenceLeft));
            if (referenceBoat.left > targetReferenceLeft)
                referenceBoat.left -= referenceSpeed;
            else
                referenceBoat.left += referenceSpeed;

            main();
        }
        Game.end = function () {
            space.text = 0;
            time.text = 0;
            for (var i = 0; i < 3; i++) {
                person[i].scene.playSegment("stop");
                referencePerson[i].scene.playSegment("stop");
                burst[i].scene.playSegment("stop");
                spindrift[i].scene.playSegment("stop");
            }
            spindrift[3].scene.playSegment("stop");
        }
        /*Game.list = function (data) {
            data = data.sort(function(a,b){
                return a.score - b.score;
            });
            
            for (var i = 0; i < data.length && i < 6; i++) {
                name[i].text = data[i].name;
                score[i].text = data[i].score / 1000 + 's';
                avatar[i].dom.src = data[i].avatar;
                name[i].alpha = 1;
                score[i].alpha = 1;
                avatar[i].alpha = 1;
                number[i].alpha = 1;
                bg[i].alpha = 1;
            }
        }
        */
    };

    if (typeof (Storage) !== "undefined") {
        if (window.submit) {
            var value = parseFloat(localStorage.getItem("dragonboat_score"));
            timeValue = value > minTimeValue ? value : timeValue;
        }
        else {
            localStorage.removeItem("dragonboat_score");
        }
    }

    game = new Game();
    scene.addEventListener("enterframe", function () {
        var fid = this.currentId;
        if (fid === 0 && window.submit && !islist) {
            window.listScore();
            scene.gotoAndPlay(20);
            islist = true;
        }

        if (fid == gameFrame - 1) {
            scoreEngine.start();
            game.init();
            audioPlayer.play('noise');
        }
        if (fid == gameFrame) {
            game.checkrun();
        }
        if (fid == endFrame) {
            game.end();
        }
    });
});
});