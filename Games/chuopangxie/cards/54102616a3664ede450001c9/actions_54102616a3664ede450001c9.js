Mugeda.script.push(function (mugeda) {
var DEBUG = 0;//1测试服务器，0正式服务器
var serverUrl = DEBUG ? "http://huwence.mugeda.com/server/" : "http://wslb.mugeda.com/server/";
var gameName = "fishcrab";
var isPlayforme = false;
//var crid = "53f9b0d6a3664ef42800053a";
var crid = "54102616a3664ede450001c9";
var gameData = {
    speed:8,
    initCrabNum:14,//20
    maxAngle:Math.PI / 10,
    handCount:24,
    playCount:48,
    stopCount:4,
    totalTime:30,
    midCount:12
}
var mugeda = Mugeda.getMugedaObject();
var interval;
var gameFrame = 51;
var indexArray = [];
var overArray = [];
var gameStart = false;
var mileage = 0;
var handHurt = false;
var crabCount = 0;
var remainTime = gameData.totalTime;
var startTime = 0;
var handTextArray = ['想吃我没门儿！','你被河蟹啦！','为了捉我，你也蛮拼的！','不作死就不会死！','你逊爆了！','菜鸟上路再努力！','夹人的小妖精！','夹得我快醉了！','给跪了，痛！'];
//var successArray = ['快到碗里来！','我是神戳手！','看我五指杀！','感觉棒棒哒！','好腻害！','大侠好身手！','为你点个赞！','入手一只！','干得漂亮！'];

var o = (function () {
        var list = [];
        return function (param) {
            if (list[param]) return list[param];
            var obj = mugeda.scene.getObjectByName(param);
            list[param] = obj;
            return obj;
        }
    })();
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
        this.mid = this.tim[name].mid;
        this.jump = this.tim[name].jump;
       // Mugeda.log('me');

        if (this.loadStatus == 'loaded') {
            this.dom.pause();
            this.dom.currentTime = this.curMin;
            //console.log(this.dom.currentTime)
            this.dom.play();
        }

        if (this.loadStatus == 'notload') {
            this.loadStatus = 'loading';
            var _ = this;
            this.dom.addEventListener('timeupdate', function () {
                var now = this.currentTime;
               // Mugeda.log(now + ',' + _.curMax + ',' + this.duration);
                if (now < _.curMin) {
                    // impossble
                }
                else if (now >= _.curMax) {
                    if (_.curLoop) {
                        this.pause();
                        this.currentTime = _.mid || _.curMin;
                        console.log(this.currentTime);
                        this.play();
                    }
                    else
                    {
                        this.pause();
                        _.curName = -1;
                    }
                }
            })
            this.dom.addEventListener('canplaythrough', function () {
                _.loadStatus = 'loaded';
                this.currentTime = _.mid || _.curMin;
                //console.log(this.currentTime);
                this.play();
            })
        }
    }
    window.AudioPlayer = AudioPlayer;
})(window);


var islist = false;
var mobileNum = "";

var o = (function () {
        var list = [];
        return function (param) {
            if (list[param]) return list[param];
            var obj = mugeda.scene.getObjectByName(param);
            list[param] = obj;
            return obj;
        }
    })();

var setRankRowStyle = function (rowObj) {
    rowObj.dom.style.tableLayout = "fixed";
    rowObj.dom.style.overflow = "hidden";
    rowObj.dom.style.whiteSpace = "nowrap";
    rowObj.alpha = 1;
}

var setRankRowVal = function (rowObj, value, isImage) {
    setRankRowStyle(rowObj);

    if (isImage) {
        rowObj.dom.src = value || 'http://mucard.mugeda.com/weixin/card/cards/538ec126a3664e0158000290/5385c6fda3664ec50e000487.png';
    } else {
        rowObj.text = value;
    }
}

var emptyRank = function () {
    for (var i = 0, l = 10; i < l; i ++) {
        setRankRowVal(o('name' + i), '');
        setRankRowVal(o('phone' + i), '');
        setRankRowVal(o('sc' + i), '');
        o('avatar' + i).alpha = 0;
    }
}

var scoreEngine = {
    //请求排行榜
    requestList: function () {
        emptyRank();
        o('loading').alpha = 1;
        var JSONP = document.createElement("script")

        JSONP.type = "text/javascript";
        JSONP.src = "http://mucard.mugeda.com/rank/" + crid + ".json?t=" + +new Date();
        JSONP.onerror = function () {
            alert('排行榜单加载失败，请稍后重试！');
        }

        document.getElementsByTagName("head")[0].appendChild(JSONP);
        //显示排行榜结果
        window.Mucard_rank_callback = function(result) {
            o('loading').alpha = 0;
            var len = result.ranks.length,  
                i = 0,
                ranks = result.ranks,
                rowName, rowPhone, rowScore;

            for (var i = 0; i < len; i ++) {
                setRankRowVal(o('name' + i), ranks[i].name); //nickname
                setRankRowVal(o('phone' + i), ranks[i].phone); //phone
                setRankRowVal(o('sc' + i), ranks[i].score); //sc
                setRankRowVal(o('avatar' + i), ranks[i].avatar, 1); //avatar
                o('avatar' + i).alpha = 1;
            }
            var countN = result.count;
            if(parseInt(countN) > 0)
            {
                o('awardNum').text = countN;
                o('help0').text = "一天内抓够100只即可换取由【乐生活】网站提供价值198元的太湖大闸蟹券一张，大闸蟹还剩" + countN + "盒！赶快叫你朋友帮你抓！朋友抓到的螃蟹都会计入你的账号。";
                o('help1').text = o('help0').text;
            }
            else
            {
                o('help1').text = "很遗憾，由【乐生活】网站提供价值198元的太湖大闸蟹券已经被领完了。你可以明天10点继续来挑战，也可以继续呼唤好友来帮忙挑战每天螃蟹最多的Madison Wine红葡萄佳酿奖，红酒螃蟹才是绝配。";
                o('awardNum').alpha = 0;
                o('awardNum0').alpha = 0;
                o('awardNum1').alpha = 0;
                o('help0').text = "每天抓住螃蟹最多的前十名可以获得由Madison Wine提供的价值800元的纳帕2011年份Slom Cellars红葡萄佳酿。\n赶快叫你朋友帮你抓！朋友抓到的螃蟹都会计入你的账号。";
            }
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
    getParam: function (name) {
        var url = window.location.search;
        var reg = new RegExp('(\\?|&)' + name + '=([^&?]*)', 'i');
        var arr = url.match(reg);
        if (arr) return arr[2];
    },
    //提交分数
    submitScore: function (score) {
        var data = {
            crid: '_'+crid,
            score: score,
            sessId: scoreEngine.getGuid(),
            gamename: gameName,
            phone: mobileNum,
            back: location.href.replace(location.search, '').replace(location.hash, '')//"https://cn.mugeda.com/client/preview_css3.html?id=487770b8&crid=_53c88f06a3664ef3070006f6"//
        };
        if (scoreEngine.getParam('id')) {
            data.id = scoreEngine.getParam('id')
        }
        if (scoreEngine.getParam('pt')) {
            data.pt = scoreEngine.getParam('pt')
        }
        if (window.nickname) {
            data.nickname = window.nickname;
        }
        if (window.avatar) {
            data.avatar = window.avatar;
        }
        if (window.openid) {
            data.openid = window.openid;
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
        if(window.custom)
        {
            data.custom =  window.custom;
        }
        if(window.src && !isPlayforme)
        {
            data.src = window.src;
        }
        if(scoreEngine.getParam('third') === '2' || scoreEngine.getParam('third') === '3')
            data.third = scoreEngine.getParam('third');
        else
            data.third = 1;
        scoreEngine.makeRequest(serverUrl + 'score.php/submit/0', 'get', data, true);
    },
    awardResult: function () {
        var data = {
            crid: '_'+crid,
            sessId: scoreEngine.getGuid(),
            gamename: gameName,
            target:1,
            back: location.href.replace(location.search, '').replace(location.hash, '')
        };
        if (scoreEngine.getParam('id')) {
            data.id = scoreEngine.getParam('id')
        }
        if (scoreEngine.getParam('pt')) {
            data.pt = scoreEngine.getParam('pt')
        }
        if(scoreEngine.getParam('third') === '2' || scoreEngine.getParam('third') === '3')
            data.third = scoreEngine.getParam('third');
        else
            data.third = 1;
        //console.log(""+data);http://huwence.mugeda.com/server/score.php/submit
        scoreEngine.makeRequest(serverUrl + 'score.php/submit/0', 'get', data, true);
    },
    sendSuccess: function () {
        //scoreEngine.times += 5;
        //localStorage.setItem(gameName + 'times', scoreEngine.times);
        //o('lefttimes').text = scoreEngine.times;
        //o('lefttimes2').text = scoreEngine.times;
        if (mugeda.scene && mugeda.scene.currentId && mugeda.scene.currentId == 64) {
            mugeda.scene.gotoAndPlay(0);
        }
    }
}
scoreEngine.guid = scoreEngine.getGuid();
//scoreEngine.initTimes();
if (scoreEngine.getParam('pt')) {
    window.pt = scoreEngine.getParam('pt');
}
if (scoreEngine.getParam('hash')) {
    window.cardHash = scoreEngine.getParam('hash');
    window.lock = scoreEngine.getParam('lock');
}
if (scoreEngine.getParam('submit')) {
    window.submit = scoreEngine.getParam('submit');
}
if (scoreEngine.getParam('customization')) {
    window.customization = scoreEngine.getParam('customization');
}
if (scoreEngine.getParam('error')) {
    window.error = scoreEngine.getParam('error');
}
if (scoreEngine.getParam('nickname')) {
    window.nickname = decodeURIComponent(scoreEngine.getParam('nickname'));
}
if (scoreEngine.getParam('openid')) {
    window.openid = decodeURIComponent(scoreEngine.getParam('openid'));
}
if (scoreEngine.getParam('avatar')) {
    window.avatar = decodeURIComponent(scoreEngine.getParam('avatar'));
}
if (scoreEngine.getParam('srcavatar')) {
    window.srcavatar = scoreEngine.getParam('srcavatar');
}
if (scoreEngine.getParam('srcname')) {
    window.srcname = scoreEngine.getParam('srcname');
}
if (scoreEngine.getParam('src') != 0)
{
    window.src = scoreEngine.getParam('src');
}
//if(scoreEngine.getParam('selfname'))
//    window.selfname = scoreEngine.getParam('selfname');
//if(scoreEngine.getParam('selfavatar'))
//    window.selfavatar = scoreEngine.getParam('selfavatar');
if(scoreEngine.getParam('selfscore'))
    window.selfscore = scoreEngine.getParam('selfscore');
if(scoreEngine.getParam('seekhelp'))
    window.seekhelp = scoreEngine.getParam('seekhelp');
if(scoreEngine.getParam('award'))
    window.award = scoreEngine.getParam('award');
if(scoreEngine.getParam('score_all'))
    window.score_all = scoreEngine.getParam('score_all');
//if(scoreEngine.getParam('third'))
//    window.third = scoreEngine.getParam('third');

var isTel = function (mobile) {
    if (mobile === "")
    { 
      alert("请填写手机号码！");
      return false; 
    } 
    if(isNaN(mobile)||(mobile.length!=11))
    { 
        alert("手机号码为11位数字！请正确填写！");
        return false; 
    } 
    var reg =/^(1[3-8])[0-9]{9}/; 
    if(!reg.test(mobile)) 
    { 
        alert("您的手机号码不正确，请重新输入！");
        return false; 
    } 
    return true; 
};
window.playforme = function()
{
    mugeda.scene.gotoAndPlay(0);
    isPlayforme = true;
}
window.awardResult = function()
{
    mugeda.scene.gotoAndPause(59);
    return;
    scoreEngine.awardResult();
}
window.submitScore = function () {
    mugeda.scene.gotoAndPause(59);
    return;
    var date = new Date();
    var currentDay = ''+ date.getFullYear() + date.getMonth() + date.getDate();// + date.getHours() + Math.floor(date.getMinutes()/10);
    //alert(currentDay);
    if (window.src && !isPlayforme) 
    {
        var isSubmit = localStorage.getItem(gameName + currentDay + window.src);
        if(isSubmit)
        {
            mugeda.scene.gotoAndPlay(54);
        }
        else
        {
            localStorage.setItem(gameName + currentDay + window.src, 1);
            scoreEngine.submitScore(window.score);
        }
    }
    else
    {
        var isSubmit = localStorage.getItem(gameName + currentDay);
        if(isSubmit)
        {
            alert('每人每天只能为自己上传一次分数，你今天已经为自己上传过一次了!')
        }
        else
        {
            var mobile = document.getElementById('inputMobile');
        	if(mobile){
                var telOk = isTel(mobile.value);
        		if(telOk){
        			mobileNum = mobile.value;
        			localStorage.setItem(gameName + 'phone', mobileNum);
        			scoreEngine.submitScore(window.score);
                    localStorage.setItem(gameName + currentDay, 1);
        		}
        	}
        }
    }
}
//请求排行榜
window.listScore = function (submit) {
    mugeda.scene.gotoAndPause(59);
    return;
    scoreEngine.requestList();//暂时注释，调服务器接口时打开
    
    if(submit === true)
    {
        if(window.src)
            mugeda.scene.gotoAndPlay(2);
        else
            mugeda.scene.gotoAndPlay(3);
    }
    else
    {
        mugeda.scene.gotoAndPlay(4);
    }
}
//微信分享转发
function doWeixin(title){
    var desc = "快帮我戳一下！每天75盒大闸蟹、10瓶高档红酒免费拿，拼人品的时候到了!";
    var param = [];
    if (scoreEngine.getParam('id')) {
        param.push('id=' + scoreEngine.getParam('id'))
    }
    if (scoreEngine.getParam('crid')) {
        param.push('crid=_' + crid);
    }
    if (scoreEngine.getParam('pt')) {
        param.push('pt=' + pt);
    }
    if(window.custom)
    {
        param.push('custom=' + window.custom);
    }
    if (window.cardHash) {
        param.push('hash=' + window.cardHash);
    }
    var localSrc = localStorage.getItem(gameName + "src");
    //alert('localSrc='+localSrc); 
    if(localSrc)
    {
        param.push('src=' + localSrc);
        param.push('seekhelp=1');
        var localSrcname = localStorage.getItem(gameName + "srcname");
        var localSrcavatar = localStorage.getItem(gameName + "srcavatar");
        if(localSrcname)
            param.push('srcname=' + localSrcname);
        if(localSrcavatar)
            param.push('srcavatar=' + localSrcavatar);
    }
    else if (window.submit === '1') {
        if(window.src)
        {
            param.push('src=' + window.src);
            param.push('seekhelp=1');
        }
        if(window.srcname)
            param.push('srcname=' + window.srcname);
        if(window.srcavatar)
            param.push('srcavatar=' + window.srcavatar);
    }
    if(scoreEngine.getParam('third') === '2' || scoreEngine.getParam('third') === '3')
        param.push('third=' + scoreEngine.getParam('third'));
    else
        param.push('third=1');
    param.push('gamename=' + gameName);
    //分享转发地址
    var url = location.href.replace(location.search, '').replace(location.hash, '') + '?' + param.join('&');
    defineWechatParameters({
        "img_url": "https://cn.mugeda.com/c/user/data/516ce6ece8ad7eea65000013/540965bca3664ead74000546.jpg",//"http://mucard.mugeda.com/weixin/card/cards/" + crid +"/thumbnail_128.jpg",
        "img_width": 128,
        "img_height": 128,
        "desc": desc,
        "title": title,
        "success_share_callback": function(){
            scoreEngine.sendSuccess();
        },
        "url_callback": function(){
            return url;
        }
    });
}

//var tScore  = localStorage.getItem(gameName + 'score');
//if (tScore > 1)
//    doWeixin("我抓了" + crabCount + "只螃蟹，快来玩吧！");

function getRandom(n, m) 
{
    var k = 0;
    for (var i = 0; i < n; i++) 
    {
        var b = Math.floor((1 + Math.random()) * 100000000);
        if (b % (n - i) < m) 
        {
            indexArray[k] = i;
            k++;
            m--;
        }
    }
}

mugeda.addEventListener("renderReady",function(){
    var scene = this.scene;
    var share = scene.getObjectByName('share');
    share.left = -500;
    
    var mobileHolder = scene.getObjectByName('mobileHolder');
	if(mobileHolder){
		mobileHolder.dom.innerHTML = '<input id="inputMobile" type="tel" style="text-align:center;font-size:14px;width:100%;height:100%;border:1px solid #aaa;" placeholder="请输入手机号便于获奖后联系"></input>';//font-size:24px
	}
	o("groupFrame").dom.style.overflow = "auto";
	o("groupFrame").dom.style.height = "290px";
	
    var prevObj = null;
    var startScroll = function () {
        if (prevObj) {
            prevObj.scrollTop = 0;
        }
        prevObj = o("groupFrame").dom;//.childNodes[0];
        prevObj.scrollTop = 0;
    };
    startScroll();
    
	window.gameInfo = function(){
	    scene.gotoAndPlay(58);
	    prevObj.scrollTop = 0;
        if(interval)
        {
            clearInterval(interval);
        }
        setTimeout(function(){
            if(scene.currentId === 58)
            {
                interval = setInterval(function () {
                    if (prevObj) {
                        prevObj.scrollTop += 1;
                        if (prevObj.scrollTop >= prevObj.scrollHeight - 280) {
                            prevObj.scrollTop = prevObj.scrollHeight;
                        }
                    }
                }, 100);
            }
        },2000);
	};
	window.offInfo = function(){
	    prevObj.scrollTop = 0;
	    scene.gotoAndPause(0);
	};
	var contentDom =o('help2').dom.children[0];
	contentDom.innerHTML = contentDom.innerHTML.replace('www.lelife.com', '<a href="http://www.lelife.com" style="text-decoration:underline;color: #FFFFFF">www.lelife.com</a>');
	var contentDom2 = o('help3').dom.children[0];
	contentDom2.innerHTML = contentDom2.innerHTML.replace('关注Madison Wine公众号了解更多','<a href="http://mp.weixin.qq.com/s?__biz=MjM5MjU3NzMxMw==&mid=200468979&idx=1&sn=96d8122b7fc6200ce7970d02ed260deb&scene=1&from=singlemessage&isappinstalled=0#rd" style="text-decoration:underline;color: #FFFFFF">关注Madison Wine公众号了解更多</a>');
	
    var score = []
    for(var i = 0;i < 11;i++)
    {
        score[i] = scene.getObjectByName("score" + i);
        if(i>4)
            score[i] = scene.getObjectByName("ss" + (i - 5));
        for(var j = 0;j < 10; j++)
        {
            score[i].scene.setSegment(j,j,j,false);
        }
    }
    //alert(o('score5').left + ';'+o('score5').top);
    var audioPlayer = new AudioPlayer(o('bg').src, {
        one: { tim: [0, 0.7], loop: false},
        two: { tim: [1, 25.82], loop: true},
        three: { tim: [27.0, 28.15], loop: false}
    });
    score[0].scene.playSegment(0);
    score[1].scene.playSegment(0);
    score[2].scene.playSegment(0);
    score[3].scene.playSegment(Math.floor(gameData.totalTime / 10));
    score[4].scene.playSegment(Math.floor(gameData.totalTime % 10));
    var crab = scene.getObjectByName("crab");
    var overText = scene.getObjectByName("overText"); 
    //var success = scene.getObjectByName("success");
    //success.scene.setSegment("normal",0,0,false);
    //success.scene.setSegment("ok",0,29,false);
    //success.scene.playSegment("normal");
    //var successText = success.scene.getObjectByName("successText");
    var hand = scene.getObjectByName("hand");
    var handText = hand.scene.getObjectByName("handText");
    hand.count = 0
    hand.scene.addEventListener("enterframe",function(){
        if(hand.count < gameData.handCount)
            hand.count++;
        else
        {
            if(hand.left > 0)
                audioPlayer.play('two');
            hand.count = 0;
            hand.left = -500;
            handHurt = false;
        }
    });
    var crabs = [];
    var row = Math.floor((320 * 2)/crab.width);
    var row2 = Math.floor((320)/crab.width);
    var column = Math.floor((304 - crab.height)/crab.height);
    window.startBtnClick = function () {
        audioPlayer.play('one');
        scene.gotoAndPlay(1);
        if (window.src && window.seekhelp && window.srcname && !isPlayforme)
        {
            o('inviteText').alpha = 1;
            o('inviteName').alpha = 1;
            o('inviteAvatar').alpha = 1;
            o('inviteText1').alpha = 0;
        }
        else
        {
            o('inviteText').alpha = 0;
            o('inviteName').alpha = 0;
            o('inviteAvatar').alpha = 0;
            o('inviteText1').alpha = 1;
        }
    }
    window.challenge = function () {
        audioPlayer.play('two');
        scene.gotoAndPlay(7);
    }
    var overArrayPush = function(obj)
    {
        overArray.push(obj);
    }
    var crabInputHandle = function(e){
        e.preventDefault();
        if(handHurt)
            return;
        if(this.scene.currentId < 3)
        {
            crabCount++;
            var s0 = Math.floor(crabCount / 100);
            var s1 = Math.floor((crabCount - s0*100) / 10);
            var s2 = crabCount % 10;
            score[0].scene.playSegment(s0);
            score[1].scene.playSegment(s1);
            score[2].scene.playSegment(s2);
            this.scene.playSegment("over");
            this.isover = true;
            var theObj = this;
            setTimeout(function(){
                theObj.left = 500;
                overArrayPush(theObj);    
            },1000);
            //var index = Math.floor(Math.random()*100000000) % successArray.length;
            //successText.text = successArray[index];
            //success.scene.playSegment("ok");
        }
        else if(this.scene.currentId > 5)
        {
            audioPlayer.play('three');
            hand.count = 0;
            handHurt = true;
            var index = Math.floor(Math.random()*100000000) % handTextArray.length;
            handText.text = handTextArray[index];
            hand.left = 80;//this.left;
            hand.top = 120;//this.top;
        }
    }
    var crabEnterFrameHandle = function(){
        if(!gameStart)
            return;
        if(this.object.left <= -this.object.width && !this.object.isover)
        {
            overArrayPush(this.object);
            this.object.isover = true;
        }
        if(!this.object.isover)
        {
            if(this.object.top < 128 || this.object.top > 400)
                this.object.direction *= -1;
            if(this.object.playStatus)
            {
                this.object.left -= this.object.speed * Math.cos(this.object.direction);
                this.object.top += this.object.speed * Math.sin(this.object.direction);
            }
            
            if(this.object.playCount >= gameData.stopCount && !this.object.playStatus)
            {
                this.object.playStatus = true;
                this.object.playCount = 0;
                if(this.currentId < 3)
                    this.playSegment("attack");
                else
                    this.playSegment("normal");
            }
            else if(this.object.playCount >= gameData.playCount || this.object.playCount >= gameData.playCount/3 && this.currentId >= 6)
            {
                this.pause();
                this.object.playStatus = false;
                this.object.playCount = 0;
            }
            else
                this.object.playCount++;
        }
    }
    for(var i = 0;i <gameData.initCrabNum;i++)
    {
        var instance = crab.clone();
        scene.appendChild(instance,hand);
        instance.scene.setSegment("normal",0,2,true);
        instance.scene.setSegment("over",3,5,true);
        instance.scene.setSegment("attack",6,8,true);
        instance.scene.playSegment("normal");
        instance.addEventListener("inputstart",crabInputHandle);
        instance.scene.addEventListener("enterframe",crabEnterFrameHandle);
        crabs[i] = instance;
    }
    window.moreGame = function()
    {
        var url = 'http://mp.weixin.qq.com/s?__biz=MzA3MzMwMTgwNQ==&mid=201265173&idx=1&sn=8a370252d80d26320ba08d3ba114bc6b#rd';
        if(scoreEngine.getParam('third') === '2')
            url = 'http://mp.weixin.qq.com/s?__biz=MzAxMTAyMDI2OA==&mid=200778467&idx=1&sn=2d69433d8f091ade1cb09fb36c857f60#rd';
        else if(scoreEngine.getParam('third') === '3')
            url = 'http://mp.weixin.qq.com/s?__biz=MjM5MjU3NzMxMw==&mid=200468979&idx=1&sn=96d8122b7fc6200ce7970d02ed260deb&scene=1&from=singlemessage&isappinstalled=0#rd';
            
        window.open(url, '_self');
    };
    window.doShare= function()
	{
        share.left = 0;
	};
	window.shareBack= function()
	{
        share.left = -500;
	}
	window.uploadScore = function () 
    {
        if (window.src)
        {
            scene.gotoAndPlay(57);
        }
        else
        {
            scene.play();
            mobileNum = localStorage.getItem(gameName + 'phone');
            if(typeof(mobileNum) === "string" && isTel(mobileNum))
            {
                var mobile = document.getElementById('inputMobile');
                mobile.value = mobileNum;
            }
        }
    }
    var Game = function(){
        Game = this;
        
        Game.init = function()
        {
            overArray = [];
            var myDate = new Date();
            startTime = myDate.getTime();
            crabCount = 0;
            handHurt = false;
            mileage = 0;
            gameStart = true;
            getRandom(row * column,gameData.initCrabNum)
            for(var i = 0;i <gameData.initCrabNum;i++)
            {
                var instance = crabs[i];
                if(Math.random() >= 0.5)
                    instance.scene.playSegment("normal");
                else
                    instance.scene.playSegment("attack");
                instance.left = 320 + (indexArray[i] % row) * instance.width;
                instance.top = Math.floor(indexArray[i] / row) * instance.height + 200;
                instance.isover = false;
                instance.playCount = Math.random() * gameData.playCount;
                instance.playStatus = true;
                instance.speed = gameData.speed / 2 + gameData.speed / 2 * Math.random();
                if(Math.random() >= 0.5)
                    instance.direction = gameData.maxAngle * Math.random();
                else
                {
                    instance.direction = -1 * gameData.maxAngle * Math.random();
                   // if(instance.top <= 200)
                    {
                      //  instance.direction /= 2;
                    }
                }
            }
        }
        Game.end = function()
        {
            for(var i = 0;i < gameData.initCrabNum;i++)
            {
                crabs[i].left = -500;
            }
            score[0].scene.playSegment(0);
            score[1].scene.playSegment(0);
            score[2].scene.playSegment(0);
            score[3].scene.playSegment(Math.floor(gameData.totalTime / 10));
            score[4].scene.playSegment(Math.floor(gameData.totalTime % 10));
            
            hand.left = -500;
            handHurt = false;
            
            var s0 = Math.floor(crabCount / 100);
            var s1 = Math.floor((crabCount - s0*100) / 10);
            var s2 = crabCount % 10;
            score[5].scene.playSegment(s1);
            score[6].scene.playSegment(s2);
            score[7].scene.playSegment(s1);
            score[8].scene.playSegment(s2);
            //localStorage.setItem(gameName + 'score',crabCount);
           // doWeixin("我抓了" + crabCount + "只螃蟹，快来玩吧！");
            if(crabCount > gameData.midCount)
            {
                overText.text = "高档红酒 肥腴秋蟹  在这里 求你包养！";
            }
            else
            {
                overText.text = "想承包所有的螃蟹 还需再接再厉！";
            }
            window.score = crabCount;//debug
        }
    }
    var game = new Game();
    main = function () {
        var date = new Date();
        remainTime = (gameData.totalTime - (date.getTime() - startTime) / 1000);
        var s3 = Math.floor(remainTime / 10);
        //var s1 = Math.floor((crabCount - s0*100) / 10);
        var s4 = Math.floor(remainTime % 10);
        score[3].scene.playSegment(s3);
        score[4].scene.playSegment(s4);
        if(remainTime < 0)
        {
            game.end();

            if (!window.src || window.src && window.submit || isPlayforme)// || (window.submit && !window.src))
            {
                scene.gotoAndPlay(52);
                mobileNum = localStorage.getItem(gameName + 'phone');
                if(typeof(mobileNum) === "string" && isTel(mobileNum))
                {
                    var mobile = document.getElementById('inputMobile');
                    mobile.value = mobileNum;
                }
            }
            else
            {
                scene.gotoAndPlay(53);
            }
        }
    };
    window.goHome = function()
    {
        game.end();
        scene.gotoAndPlay(0);
    }
    if (window.submit === '1') {
        if (window.error == "9") {
            alert('抱歉，此次提交的成绩无效，一天只能提交一次哦！');
        } else if (window.error == "2") {
            alert('抱歉，此次提交的成绩失败');
        }
        else if (window.error == "10") {
            var date = new Date();
            var currentDay = ''+ date.getFullYear() + date.getMonth() + date.getDate();
            localStorage.removeItem(gameName + currentDay);
            scene.gotoAndPlay(60);
        }
        else
            window.listScore(true);
        //alert('window.src='+window.src);    
        if(window.src)
            localStorage.setItem(gameName + 'src', window.src);
        if(window.srcname)
            localStorage.setItem(gameName + 'srcname', window.srcname);
        if(window.srcavatar)
            localStorage.setItem(gameName + 'srcavatar', window.srcavatar);
    }
    if (window.src && window.seekhelp && window.srcname)
    {
        o('inviteText1').alpha = 0;
        o('inviteText').alpha = 1;
        o('inviteName').alpha = 1;
        o('inviteAvatar').alpha = 1;
        if(scoreEngine.getParam('srcavatar'))
        {
            o('inviteAvatar').dom.src = decodeURIComponent(window.srcavatar);
        }
        o('inviteName').text = decodeURIComponent(window.srcname);
        scene.gotoAndPlay(1);
    }
    
    //if(window.selfname)
    //    o('selfname').text = decodeURIComponent(window.selfname);
    //else
    //    o('selfname').alpha = 0;
    //if(window.selfavatar)
    //    o('selfavatar').dom.src = decodeURIComponent(window.selfavatar);
    //else
    //    o('selfavatar').alpha = 0;
    if(window.selfscore)
    {
        var text1 = window.selfscore;
        //o('selfscore').text = text1;
        o('selfcrabnum').text = text1;
        var cCount = parseInt(text1)
        var s0 = Math.floor(cCount / 100);
        var s1 = Math.floor((cCount - s0*100) / 10);
        var s2 = cCount % 10;
        score[9].scene.playSegment(s1);
        score[10].scene.playSegment(s2);
        
    }
    else
    {
        //o('selfscore').alpha = 0;
        score[9].scene.playSegment(0);
        score[10].scene.playSegment(0);
    }
    if(window.award == "1")
    {
        scene.gotoAndPlay(5);
    }
    else if(window.score_all)
    {
        scene.gotoAndPlay(6);
        o('selfcrabnum1').text = window.score_all;
    }
    if(scoreEngine.getParam('number'))
    {
        o('number').text = scoreEngine.getParam('number');
    }
    scoreEngine.requestList(); 
    doWeixin("那谁，快帮我戳一下！");
    scene.addEventListener("enterframe",function(){

        if(gameFrame -1 === this.currentId)
        {
            game.init();
        }
        if(gameFrame === this.currentId)
        {
            main();
            mileage += gameData.speed * Math.cos(gameData.maxAngle);
            if(mileage >= 320)
            {
                mileage -= 320;
                indexArray = [];
                getRandom(row2 * column,overArray.length);
                var len = overArray.length;
                for(var i = 0;i < len;i++)
                {
                    var instance = overArray[i];
                    instance.scene.playSegment("normal");
                    instance.left = 320 + (indexArray[i] % row2) * instance.width;
                    instance.top = Math.floor(indexArray[i] / row2) * instance.height + 200;
                    instance.isover = false;
                }
                overArray = [];
            }
        }

    });
});
});