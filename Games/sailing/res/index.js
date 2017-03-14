var g_drawScore = 100;//满足抽奖条件的分值
var g_soundMusic = true;//是否开启背景音乐
var g_soundEffect = false;//是否开启音效
var g_version = '20150914220110';//游戏版本号(YmdHis)
var g_pcDrawURL = '/draw.php';//pc抽奖地址
var g_cdnURL = './';//cdn域名
//var g_cdnURL = './';//测试cdn域名
var hoowuGameClass = function(resRootDir,jsList){
    this.resRootDir = resRootDir;
    this.jsList = [];
    for(var i=0;i<jsList.length;i++)
    {
        this.jsList[i] = resRootDir+'/'+jsList[i];
        this.jsList[i] += (this.jsList[i].indexOf('?') < 0 ? '?' : '&') + 't='+g_version;
    }
    this.init();
};

hoowuGameClass.prototype.init = function() {
    this.gameCanStart = false;
    this.gameStartFunc = null;
    this.gameIsOver = false;
    this.authLock = false;
}

hoowuGameClass.prototype.getUrlParam = function(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return '';
}

hoowuGameClass.prototype.loadJS = function(key){
    if(!key)
    {
        key = 0;
    }
    var jsObj = document.createElement('script');
    jsObj.src = this.jsList[key];
    jsObj.onload = function(){key++;if(key<this.jsList.length){this.loadJS(key);}}.bind(this);
    document.body.appendChild(jsObj);
}

hoowuGameClass.prototype.auth = function(){
    var loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loadingImg"></div><div class="circle"></div>';
    if(this.isMobile())
    {
        try {
            Tida.doAuth({refresh: false}, function (result) {
                if (result.finish) {
                    document.getElementsByClassName("hoowu_start_button")[0].style.display = 'none';
                    document.getElementsByClassName("hoowu_start_button_wave")[0].style.display = 'none';
                    document.getElementsByClassName("hoowu_home")[0].appendChild(loading);
                    this.gameStart();
                } else {
                    //    Ali.toast("你没有授权，无法开始游戏。");
                }
                this.authLock = false;
            }.bind(this));
        }catch(e)
        {
            document.getElementsByClassName("hoowu_start_button")[0].style.display = 'none';
            document.getElementsByClassName("hoowu_start_button_wave")[0].style.WebkitAnimation = 0;
            document.getElementsByClassName("hoowu_home")[0].appendChild(loading);
            this.gameStart();
            this.authLock = false;
        }
    }else{
        if(!this.getCookie('hoowu_auth'))
        {
            location.href='auth.php?seller_nick='+this.getUrlParam('seller_nick')+'&interactId='+this.getUrlParam('interactId')+'&shopId='+this.getUrlParam('shopId')+'&seller_id='+this.getUrlParam('seller_id')+'&shopcjyUrl='+this.getUrlParam('shopcjyUrl');
        }else{
            document.getElementsByClassName("hoowu_start_button")[0].style.display = 'none';
            document.getElementsByClassName("hoowu_start_button_wave")[0].style.WebkitAnimation = 0;
            document.getElementsByClassName("hoowu_home")[0].appendChild(loading);
            this.gameStart();
            this.delCookie('hoowu_auth');
        }
        this.authLock = false;
    }
}

hoowuGameClass.prototype.main = function(){
    var self = this;
    if(this.isAndroid())
    {
    	g_soundMusic = false;
    }
    document.getElementsByClassName("hoowu_start_button")[0].addEventListener("click", function(event) {
    		// if(!self.authLock)
    		// {
      //   	self.auth();
      //   	self.authLock = true;
      //   }
      self.gameStart();
    });
    document.getElementsByClassName("hoowu_award_button")[0].addEventListener("click", function(event) {
        Tida.showGameAward(function () {
        });
    });
    document.getElementsByClassName("hoowu_rule_button")[0].addEventListener("click", function(event) {
        Tida.showRule(
            "<p>按住屏幕控制天猫左右移动，避开各种障碍物，安全通过终点即为胜利。</p>" +
            "<p>注意：触碰到障碍物则游戏失败！</p>"
        );
    });
    if(!this.isMobile() && this.getCookie('hoowu_auth'))
    {
        this.gameStart();
        this.delCookie('hoowu_auth');
    }
    if(document.getElementsByClassName("hoowu_home_logo")[0])
    {
    		var logoScale = 0.8;
    		if(!this.isMobile())
    		{
    			logoScale = 0.5;
    		}
        var logoWidth = document.getElementsByClassName("hoowu_main")[0].clientWidth*logoScale;
        var scale = logoWidth/document.getElementsByClassName("hoowu_home_logo")[0].clientWidth;
        var logoHeight = document.getElementsByClassName("hoowu_home_logo")[0].clientHeight*scale;
        document.getElementsByClassName("hoowu_home_logo")[0].style.width = logoWidth+'px';
        document.getElementsByClassName("hoowu_home_logo")[0].style.height = logoHeight+'px';
        document.getElementsByClassName("hoowu_home_logo")[0].style.marginLeft = (-logoWidth/2).toString()+'px';
        document.getElementsByClassName("hoowu_home_logo")[0].style.marginTop = (-logoHeight/2).toString()+'px';
    }
    
    this.shareIcon = './res/TB2E8GggpXXXXbUXpXXXXXXXXXX_!!2368122767-0-tae.jpg';
}

hoowuGameClass.prototype.gameLoadFinished = function(cb)
{
    this.gameCanStart = true;
    this.gameIsOver = false;
    this.gameStartFunc = cb;
}

hoowuGameClass.prototype.gameStart = function()
{
		var loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loadingImg"></div><div class="circle"></div>';
		document.getElementsByClassName("hoowu_home")[0].appendChild(loading);
    this.loadJS();
    var self = this;
    var gameStartTimeID = setInterval(function(){
        if(self.gameCanStart)
        {
        		document.getElementsByClassName('gameCanvasBg')[0].style.visibility = 'inherit';
            document.getElementsByClassName('hoowu_home')[0].style.display = 'none';
            if(typeof(self.gameStartFunc)=='function')
            {
                clearInterval(gameStartTimeID);
                self.gameStartFunc();
            }
        }
    },100);
}

hoowuGameClass.prototype.gameOver = function(result,cb)
{
		this.gameIsOver = true;
    var score;
    var isPass;
    if(typeof(result)=='object')
    {
        score = result.score;
        isPass = result.isPass;
    }else{
        score = result;
    }
    if(!score)
    {
        score = '';
    }
    var gameOver;
    if(!document.getElementsByClassName('hoowu_gameover')[0])
    {
        gameOver = document.createElement('div');
        gameOver.className = 'hoowu_gameover';
        //gameOver.innerHTML = '再玩一次';
        gameOver.style.color = '#fff';
        gameOver.style.position = 'absolute';
        gameOver.style.top = '0';
        gameOver.style.left = '0';
        gameOver.style.fontSize = '1.0em';
        //gameOver.addEventListener('click',function(){document.getElementsByClassName('hoowu_gameover')[0].style.display='none';cb();});
        document.body.appendChild(gameOver);
        //gameOver.style.marginTop = (-gameOver.clientHeight/2)+'px';
        //gameOver.style.marginLeft = (-gameOver.clientWidth/2)+'px';
        gameOver.style.width = '100%';
        gameOver.style.height = '100%';
    }else{
        gameOver = document.getElementsByClassName('hoowu_gameover')[0];
        gameOver.style.display = 'block';
    }
    //console.log(g_drawScore)
    if((g_drawScore && score>=g_drawScore) || isPass)
    {
    		if(this.isMobile())
    		{
    			this.draw(score,cb);
    		}else{
    			var getDrawParamResult = Tida.getDrawParam();
        	//console.log(getDrawParamResult);
        	this.httpPost(g_pcDrawURL,{'biz_param':getDrawParamResult.bizParam,'biz_type':getDrawParamResult.bizType,'ua':getDrawParamResult.ua,'umid':getDrawParamResult.umid},function(data){
        		//console.log(data);
        		this.showDraw(score,data,cb);
        	}.bind(this));
    		}
    }else{
        this.showDraw(score,[],cb);
    }
}

hoowuGameClass.prototype.isMobile = function()
{
		return false;
    var ua = window.navigator.userAgent.toLowerCase();
    var isMobile = ua.indexOf('mobile') !== -1 || ua.indexOf('android') !== -1;
    return isMobile;
}

hoowuGameClass.prototype.isAndroid = function()
{
	var ua = window.navigator.userAgent.toLowerCase();
	var nav = window.navigator;
	return ua.match(/android/i) || nav.platform.match(/android/i) ? true : false;
}

hoowuGameClass.prototype.draw = function(score,restartCallback)
{
		var self = this;
    Tida.draw(function(result){
        //if(result && result.data && result.data.is_win)
			  //{
			      self.showDraw(score,[result],restartCallback);
			  //}
    });
}

hoowuGameClass.prototype.showDraw = function(score,drawResultList,restartCallback)
{
  Tida.showDrawResult({
      score: {
          currPoint: score,
          isBest: false
      },
      awards: drawResultList,
      shareData:{image:this.shareIcon}
  },function(result)
  {
      if(result.actionType=='replay')
      {
          if(document.getElementsByClassName('hoowu_gameover')[0])
          {
              document.getElementsByClassName('hoowu_gameover')[0].style.display='none';
          }
          restartCallback();
      }else if(result.actionType=='close')
    	{
    		this.delCookie('hoowu_auth');
    		location.reload();
    	}
  }.bind(this));
}

hoowuGameClass.prototype.getCookie = function(name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return "";
}

hoowuGameClass.prototype.delCookie = function(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=this.getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

hoowuGameClass.prototype.httpPost = function(url,data,callback)
{
	var xhr = new XMLHttpRequest();
	xhr.open("post", url);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4)
		{
			if(typeof(callback)!='undefined')
			{
				callback.bind(this).call(this,xhr.responseText);
			}
		}
	}
	var dataStr = '';
	for(i in data)
	{
		dataStr += (dataStr ? '&' : '')+i+'='+encodeURIComponent(data[i]);
	}
	xhr.send(dataStr);
}

var hoowuGame = new hoowuGameClass(g_cdnURL,['project.js','game.min.js']);
try{
Tida.ready({
    interactId: hoowuGame.getUrlParam("interactId"),
    sellerId:hoowuGame.getUrlParam("sellerId"),
    seller_nick:hoowuGame.getUrlParam("seller_nick"),
    shopId:hoowuGame.getUrlParam("shopId"),
    module:['draw','widget']
}, hoowuGame.main.bind(hoowuGame));
}catch(e)
{
	hoowuGame.main();
}

if(!hoowuGame.isMobile())
{
    var rootWidth = document.body.clientWidth;
		var rootHeight = document.body.clientHeight;
		var canvasHeight = rootHeight;
		var canvasWidth = 640/960*canvasHeight;
    document.getElementsByClassName('gameCanvas')[0].style.width = canvasWidth.toString()+'px';
    document.getElementsByClassName('gameCanvas')[0].style.height = canvasHeight.toString()+'px';
    document.getElementsByClassName('hoowu_home_bottom')[0].style.background = "url('"+g_cdnURL+"/res/bg_pc.jpg?t="+g_version+"') no-repeat center top";
    document.getElementsByClassName('hoowu_home_bottom')[0].style.backgroundSize = "100% 100%";
    document.getElementsByClassName('gameCanvasBg')[0].style.background = "url('"+g_cdnURL+"/res/game_bg_pc.jpg?t="+g_version+"') no-repeat center 0px";
    document.getElementsByClassName('gameCanvasBg')[0].style.backgroundSize = rootWidth.toString()+'px '+rootHeight.toString()+'px';
}

if(typeof(console)=='undefined')
{
	var console = {};
	console.log = function(){};
}