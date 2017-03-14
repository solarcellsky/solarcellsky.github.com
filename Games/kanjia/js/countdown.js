var Countdown = function () {
    var klass = function f() { };


    var options = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    /// <summary>
    /// <param name='serverTime' type='Number' >服务器时间(转化为整形)</param>
    /// <param name='endTime' type='Number' >倒计时结束时间(转化为整形)</param>
    /// <param name='callback' type='function' >每跳动1秒回调函数</param>
    /// <param name='endCallback' type='function' >倒计时结束回调函数</param>
    /// </summary>
    klass.start = function (serverTime, endTime, callback, endCallback, interval) {
        if (!interval) {
            interval = 1000;
        }
        var servTimeDiff = serverTime - new Date().getTime();
        var clientTime = new Date().getTime(); //毫秒            
        clientTime = clientTime + servTimeDiff;
        var diff = endTime - clientTime;//计算倒讲时的毫秒数
        if (diff <= 0) {
            clearInterval(oInterval);
            endCallback();
            return;
        }
        options = getOptions(diff);
        callback(padLeft(options.days, '0'), padLeft(options.hours, '0'), padLeft(options.minutes, '0'), padLeft(options.seconds, '0'));

        var oInterval = setInterval(function () {
            clientTime = new Date().getTime(); //毫秒            
            clientTime = clientTime + servTimeDiff;
            diff = endTime - clientTime;
            if (diff <= 0) {
                clearInterval(oInterval);
                endCallback();
                return;
            }
            options = getOptions(diff);
            callback(padLeft(options.days, '0'), padLeft(options.hours, '0'), padLeft(options.minutes, '0'), padLeft(options.seconds, '0'));
        }, interval);
    }

    getOptions = function (diff) {
        var sec = parseInt(diff / 1000);
        var d = Math.floor(sec / (60 * 60 * 24));
        var h = Math.floor((sec - d * 24 * 60 * 60) / 3600);
        var m = Math.floor((sec - d * 24 * 60 * 60 - h * 3600) / 60);
        var s = Math.floor(sec - d * 24 * 60 * 60 - h * 3600 - m * 60);
        var o = new Object();
        o.days = d;
        o.hours = h;
        o.minutes = m;
        o.seconds = s;
        return o;
    }

    padLeft = function (h, s) {
        h += '';
        return h.length > 1 ? h : s + h;
    }

    return klass;
}


















































function e(j, h, i, k) {
    return function (o) {
        var p, m, l, q, n;
        p = new Date().getTime() + j;
        diff = h - p;
        if (diff <= 0) {
            clearTimeout(o);
            k && k();
            return
        }
        m = Math.floor(diff / (24 * 60 * 60 * 1000));
        l = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        q = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        n = d(Math.floor(diff / 1000 - m * 24 * 60 * 60 - l * 60 * 60 - q * 60));
        q = d(q);
        l = d(l);
        i(m, l, q, n);
        return
    }
}