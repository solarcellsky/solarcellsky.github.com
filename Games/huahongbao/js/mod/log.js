/**
 * 错误上报的模块，由于移动window.onerror不一定可以工作，所以建议window.onerror和主流程的try{}catch(){..}都加上统计
 * <pre>
 *
 *  var Log = require("../../../../mod/global/log");
 *  var ins = new Log("weixin/aareceive");
 *
 * ins.attr({
 *    "retcode": "90019011",  //900[1](1:window.onerror 2:业务型错误)9(移动端固定)[01](项目编号)1(项目错误码)
 *    "retmsg" : encodeURIComponent(document.cookie)
 * });
 *       
 * ins.attr("url",location.href);
 * ins.attr("errmsg",e.message);  //属性的设置可以用对象或者单独传参的方式
 *
 * ins.send();
 * 
 * //打点 
 * l.setPoint("start")   
 * l.setPoint("end");  //记录了开始和结束两个时间点 在send的时候会发送所有时间点的时间差
 *  
 *
 * <a href="http://tid.oa.com/wiki/index.php?doc-view-114">http://tid.oa.com/wiki/index.php?doc-view-114</a>
 * 
 * AAAXYZZZ
 * AAA - 900
 * X -1:系统级错误（oerror监听）  2：业务级错误
 * Y -9:移动端字段
 * ZZZ：业务级字段  前两位为项目编号  最后一位为项目的错误码 每个项目最多10个错误码
 * </pre>
 * @class log
 * @module global
 * @constructor
 * @author chauvetxiao 
 * @date 20131113 
 * 
*/
define('mod/log', [], function(require,exports,module){                   
    
    var _cgi_path = "https://www.tenpay.com/app/v1.0/";
    var _separate = "/";

    /**
     * 错误上报模块的构造器
     * @method Logger
     * @param {Object} action 错误上报配置的对象
    */
    function Logger(action){
        this.attrs = {   
            "ua" : encodeURIComponent(window.navigator.userAgent.replace(/\s/g, "_")),         
            "action" : action,  //流程标识（唯一标识）
            "op" : "",          //操作流程，建议将start和end固定在首尾表示开始和结束，
                                //格式：start/step1/tep2/step3/.../stepN/end
            "time" : "0",       //每一环节的耗时（毫秒），格式：num1/num2/num3/.../numN
            "cost" : 0,         //总耗时
            "attach" : "",      //附加数据，格式：V1/V2/V3/.../Vn
            "retcode" : "-1",   //返回码
            "retmsg" : "",      //返回信息
            "line"   : "",      //错误所在的行号
            "errmsg" : "",      //错误描述
            "url"    : ""       //发生的错误的页面地址
        };
        //时间点
        this.timepoints = [];
        //流程点
        this.flowpoints = [];
    }

    var pro = {
         /**
          * 设置或者获取属性的值
          * @method attr
          * @param {String} key 设置属性的键值
          * @param {String} [value] 如果不传入value参数则表示获取该属性
          * @return {Boolean} true/false
         */
        attr: function(key,value){
            if($.isPlainObject(key)){
                var o = {};   //过滤掉无用的参数

                $.each(this.attrs,function(k,v){
                    if(k in key){
                        o[k] = key[k];
                    }
                });

                this.attrs = $.extend(this.attrs,o);
            }else{
                if(typeof(value) == "undefined"){
                    return this.attrs[key];
                }else if(key in this.attrs){
                    this.attrs[key] = value;
                }   
            }
        }, 
        /**
         * 格式化时间点，格式： 0/0/0/0
         * @method computePoints
         * @return String str
         */
        computePoints: function(){
            var p = [];

            $.each(this.timepoints,$.proxy(function(k,v){               
                p.push(v - this.timepoints[0]);
            },this));

            if(p.length > 0 ){
                this.attr("cost",p[p.length - 1]);
            }
            return p.join(_separate);
        }, 
        /**
         * 格式化流程节点
         * @method computeFlow
         */  
        computeFlow: function(){
            return this.flowpoints.join(_separate);
        },  
        /**
         * 计算时间和操作的类型
         * @method fixPoints
         */   
        fixPoints: function(){
            this.attr({
                "time" : this.computePoints(),
                "op"   : this.computeFlow()
            });
        },
        /**
         * 进行打点操作
         * @method setPoint
         * @param {String} flow 打点的流程名称
         */
        setPoint: function(flow){
            this.flowpoints.push(flow);
            this.timepoints.push(+new Date);
        },
        /**
         * 重置打点数据
         * @method resetPoints         
         */
        resetPoints: function(){
            this.flowpoints = [];
            this.timepoints = [];
        },
        /**
         * 设置attach信息
         * @method setAttach
         * @param {String} key 设置的attach的键值
         * @param {String} value 设置的attach的值
         */
        setAttach:function(key,value){
            this.attach = this.attach||{};

            if($.isPlainObject(key)){                
                this.attach = $.extend($.attach,key);
            }else{
                this.attach[key] = value||"";
            }
        },
        /**
         * 设置retmsg信息
         * @method setRetmsg
         */
        setRetmsg: function(){
            this.attr.apply(this,arguments);
        },
        /**
         * 设置状态码
         * @method setRetcode          
         */
        setRetcode: function(){
            this.attr.apply(this,arguments);
        },
        /**
         * 发送已打点信息
         * @method send
         * @param  {Boolean} debug 是否发送给debug模式的cgi          
         */
        send: function(debug){
            this.fixPoints();
            this.attr("attach", decodeURIComponent($.param(this.attach||{})).replace(/&/,";"));

            var img = new Image();
            img.src = _cgi_path + (debug ? "test_" : "" + "logger4js.cgi") + "?" + decodeURIComponent($.param(this.attrs));
            this.resetPoints();
        }
    }

    Logger.prototype = pro;

    return Logger;
});