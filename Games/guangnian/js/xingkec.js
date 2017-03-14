/*! xingkec jquery jsV1.0.0 xingkec.com | xingkec/license */

var Xingkec = {
    //游戏基本对象
        game:null,



        /**
         * 设置当前游戏基本对象
         * @param {[type]} gameTarget [description]
         */
        setGame: function(gameTarget){
          game = gameTarget;
        },

        /**
         * 获取当前地址参数值
         * @param  {[type]} para [description]
         * @return {[type]}      [description]
         */
        getQueryString: function(name){
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]); return null;
        },
        checkMobile:function(str) {
            var re = /^1\d{10}$/
            if (re.test(str)) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * 获取游戏的基本信息
         * @return {[type]} [description]
         */
        getBase: function(fail_function,success_function,userid){

              $.ajax({
              type: "POST", //用POST方式传输
              dataType: "JSON", //数据格式:JSON
              url: 'ajax/ajaxbase.php', //目标地址
              data: {uid:userid},
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                  fail_function;
              },
              success: function (data){
                  
                  success_function(data);
              }
          });
        },
        /**
         * 获取游戏的基本信息
         * @return {[type]} [description]
         */
        getBang: function(fail_function,success_function,userid){

              $.ajax({
              type: "POST", //用POST方式传输
              dataType: "JSON", //数据格式:JSON
              url: 'ajax/ajaxbang.php', //目标地址
              data: {uid:userid},
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                  fail_function;
              },
              success: function (data){
                  
                  success_function(data);
              }
          });
        },

        /**
         * 提交用户分数
         */
        PostScore:function(fail_function,success_function,fen){
            $.ajax({
                type: "POST", //用POST方式传输
                dataType: "JSON", //数据格式:JSON
                url: 'ajax/ajaxscore.php', //目标地址
                data: {score:fen},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    fail_function;
                },
                success: function (data){
                    success_function(data);
                }
            });
        },

        PostTelno:function(fail_function,success_function,telno,username,cityname){
            $.ajax({
                type: "POST", //用POST方式传输
                dataType: "JSON", //数据格式:JSON
                url: 'ajax/ajaxuser.php', //目标地址
                data: {telphone:telno,username:username,cityname:cityname},
                error: function (XMLHttpRequest, textStatus, errorThrown){
                    fail_function;
                },
                success: function (data){
                    success_function(data);
                }
            });
        },



        /**
         * 分享好友
         */
        ShareUser:function(fail_function,success_function){
            $.ajax({
                type: "POST", //用POST方式传输
                dataType: "JSON", //数据格式:JSON
                url: 'ajax/ajaxshare.php', //目标地址
                data: {fen:'2'},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    fail_function;
                },
                success: function (data){
                    success_function(data);
                }
            });
        },
        /**
         * 分享朋友圈
         */
        ShareTimeLine:function(fail_function,success_function){
            $.ajax({
                type: "POST", //用POST方式传输
                dataType: "JSON", //数据格式:JSON
                url: 'ajax/ajaxshare.php', //目标地址
                data: {fen:'1'},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    fail_function;
                },
                success: function (data){
                    success_function(data);
                }
            });
        }
};



/**
 * 项目基本框架
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
var Games = {
    CloudNum:0,//云朵数量
    ShareUserID:0,//当前用户ID
    GIFT_NUM:19,//获得点积分就可以得奖，暂设为2，测试，需求为20
    UserID:0,//当前用户ID    

    ConfigShare: function(shareTitle,shareUserTitle,shareUrl,shareIMG,success_function){

        //alert("test:"+shareUrl);

          wx.onMenuShareAppMessage({
            title: shareUserTitle,
            desc: shareTitle,
            link: shareUrl+'&type=1',
            imgUrl: shareIMG,
            trigger: function (res) {
              //alert('用户点击发送给朋友');
            },
            success: function (res) {
                    //统计分享给好友
                    Xingkec.ShareUser(function(){

                    },function(){

                    });
                    success_function(res);
            },
            cancel: function (res) {
             // alert('已取消');
            },
            fail: function (res) {
              //alert(JSON.stringify(res));
            }
          });


        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
          wx.onMenuShareTimeline({
            title: shareQuanTitle,
            link: shareUrl+'&type=2',
            imgUrl: shareIMG,
            trigger: function (res) {
             // alert('用户点击分享到朋友圈');
            },
            success: function (res) {
                  Xingkec.ShareTimeLine(function(){

                    },function(){

                    });
                  success_function(res);
            },
            cancel: function (res) {
            //  alert('已取消');
            },
            fail: function (res) {
            //  alert(JSON.stringify(res));
            }
          });
    },
};
