/**
 * 点击流统计模块
 *
 * <pre>
 * 1、默认在head里面添加 &lt;meta name="pgv" content="" /&gt; 即可统计当前页面的pv，如果缺省index.shtml，会自动添加统计到index.shtml
 * 2、如果需要自定义统计添加 &lt;meta name="pgv" content="action.tenpay.com;/hybrid/test.shtml" /&gt; content属性用;分割，前面是域名，后面是需要统计的路径
 * 3、自定义缺省也可以添加 &lt;meta name="pgv" content=";/hybrid/test.shtml" /&gt;
 * </pre>
 *
 * @class stat
 * @module global
 * @author chauvetxiao 
 * @date 20130905
*/
define('mod/stat', ['mod/detect'], function(require,exports,module){
    require('mod/detect');
    var _domain = ($("meta[name='pgv']").attr("content")||"").split(";")[0]||location.hostname,
        _path   = location.pathname,
        _loaded = false,
        _waitQueue = [],
        _stat_path = "/weixin/lib/ping_tcss_https.3.1.0.js";
    
    /**
     * 点击流脚本加载完毕后执行的回调
     * 
     * @method onSuccess 
     * @private
     */
    var onSuccess = function(){
        _loaded = true;
        _pgv();
        _sys();
        _bind();
        _delayedReq();
    };
    
    /**
     * 点击流脚本加载异常时执行的回调
     * 
     * @method onError     
     * @private
     */
    var onError = function(){
        _loaded = false;
        console.log("load ping_tcss_https.3.1.0.js error","error");
    };
    
    /**
     * 绑定页面点击流的监听 
     * 
     * @method bind          
     * @param {Selector} parent 父节点选择器 
     */
    var _bind = function(parent){        
		var eventType = $(document).tap ? "tap" : "click";
        if(parent){
			$(parent+' [data-adtag]').add(parent+' [data-stat]').on(eventType,_sendADTAG);
		}else{
			$(document).on(eventType,'[data-adtag]',_sendADTAG);
			$(document).on(eventType,'[data-stat]',_sendADTAG);
		}     
    };

    /**
     * 点击流脚本加载完毕依次执行队列中的方法
     * 
     * @method _delayedReq     
     * @private
     */
    var _delayedReq = function(){
        $.each(_waitQueue,function(k,v){
            _makeStat.apply(this,v);
        });
        
        _waitQueue = [];
    };
            
   /**
     * 统计用户的版本等信息
     * @method _sys
     * @private     
    */  
    var _sys = function(){
        var os = $.os;
        var name = "other";       
        var version = os.version||0;
        var result = ((os.android && (name = "android"))||
                      (os.ios && (name = "ios"))||
                      (os.webos && (name = "webos")));       
        
        _sendPGV(_domain + ";/os/" + name + "/" + version);
    };

    /**
     * 延迟加载的方法，只要发起请求都是通过这个方法先存入到执行队列里面
     * @method _requestDefer
     * @private     
    */  
    var _requestDefer = function(){
        if(_loaded){
            _makeStat.apply(this,arguments);
        }else{
            _waitQueue.push(arguments);
        }
    };
    
    /**
     * 对发起的统计请求做分流处理
     * @method _makeStat
     * @private     
    */  
    var _makeStat = function(){
        var len = arguments.length;
        
        if(len == 3){
            if(typeof(pgvSendClick) == "function"){
                pgvSendClick({
                    "hottag" : arguments[0],
                    "virtualDomain" : arguments[1],
                    "virtualURL" : _path
                });
            }
        }else if(len == 2){
            if(typeof(pgvMain) == "function"){
                pgvMain({
                    "virtualDomain" : arguments[0],
                    "virtualURL" : arguments[1],
                    "repeatApplay" : "true"
                });
            }
        }
    };
    
    /**
     * 发送PV/UV统计的请求
     * @method _sendPGV
     * @private
     * @param {String} content 发送的PGV统计字符串
    */  
    var _sendPGV = function(content){
        var items = (content||"").split(";");
        
        _requestDefer(items[0]||_domain,items[1]||_path);
    }

    /**
     * 发送统计的请求
     * @method _sendADTAG
     * @private
     * @param {Event} e 点击事件或者tab事件
    */  
    var _sendADTAG = function(e){
        var adtag = $(e.target).data("adtag")||$(e.target).data("stat");
        
        if(!adtag){
            adtag  = $(e.currentTarget).data("adtag")||$(e.currentTarget).data("stat");
        }
        adtag && _clickStat(adtag);
    };
    
    /**
     * 统计页面的PV
     * @method pgv
     * @param {String} [path:location.href] 统计的地址
    */  
    var _pgv = function(path){
        var t = $("meta[name='pgv']");
        
        _path = location.pathname;
        if(!/\.(s?)html$/.test(_path)){
            _path += (/\/$/.test(_path) ? "" : "/") + "index.shtml";
        }

        if(path){
            _sendPGV(path);
        }else if(t.length){
            _sendPGV(t.attr("content"));
        }        
    };

    /**
     * 动态拉取script脚本
     * @param o
     * @private
     */
    var _getScript = function(o){
        var n = $(document.createElement("script"));

        n.attr({
            "src"     : o.url,
            "charset" : o.charset||"utf-8"
        });

        n.on("load",function(e){o.success && o.success()});
        n.on("error",function(e){o.error && o.error();});

        $("head").append(n);
    }

    /**
     * 发起点击流统计
     * @method clickStat
     * @param {String} adtag 统计的字符串
     * @param {String} [domain:document.domain] 点击流被统计的域名
    */ 
    var _clickStat = function(adtag,domain){
        adtag && _requestDefer(adtag,domain||_domain,1);
    };

    if(typeof(pgvSendClick) == "undefined"){
        _getScript({
            "url"     : _stat_path,
            "charset" : "gb2312",
            "success" : onSuccess,
            "error"   : onError
        });
    }    

    return {           
        pgv  : _pgv,   
        bind: _bind,
        clickStat: _clickStat
    }
});