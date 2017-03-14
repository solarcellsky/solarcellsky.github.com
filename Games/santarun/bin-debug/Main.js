//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var DisplayObject = egret.DisplayObject;
var Ease = egret.Ease;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.track = 1; //赛道
        this.clicknumber = 1; //点击次数
        this.LeftOrRight = ""; //点击左边还是右边
        this.placing = 0; //名次
        this.hadinitroom = 0; //是否初始化房间
        this.stageW = 0;
        this.stageH = 0;
        this.name = ""; //本人名字
        this.imgurl = ""; //本人头像
        this._csrf = "";
        this.openid = "";
        this.headImgUrl = ""; //本人头像
        this.roomId = "";
        this.nickname = "";
        //人物头像
        this.personArry = new Array();
        this.i = 1;
        this.isgetprice = 0;
        this.jpname = "jpmpic";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main;p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onGetSignComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    p.onGetSignComplete = function (event) {
    };
    p.getState = function () {
        this.stateLoader = new egret.URLLoader();
        this.stateLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        this.stateLoader.addEventListener(egret.Event.COMPLETE, this.onStateComplete, this);
        var urlReq = new egret.URLRequest();
        urlReq.method = egret.URLRequestMethod.GET;
        urlReq.url = "/biz/szyx_s02e01/state";
        this.stateLoader.load(urlReq);
    };
    p.onStateComplete = function () {
        //var data = null;
        //try {
        //    data = JSON.parse(this.stateLoader.data);
        //} catch (error) {
        //    alert(error);
        //    return;
        //}
        //var self = (<Main><any>this);
        //if (data["success"] && data["data"]) {
        //    if (data["data"]["canPlay"]) {
        //        self.restartGameFunc && self.restartGameFunc();
        //    } else {
        //        alert("分享获得游戏机会");
        //    }
        //} else {
        //    alert("网络错误(state)，请重试");
        //}
    };
    p.onShareSuccess = function () {
        this.shareLoader = new egret.URLLoader();
        this.shareLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        this.shareLoader.addEventListener(egret.Event.COMPLETE, this.onShareComplete, this);
        var urlReq = new egret.URLRequest();
        urlReq.method = egret.URLRequestMethod.GET;
        urlReq.url = "/biz/szyx_s02e01/share";
        this.shareLoader.load(urlReq);
    };
    p.onShareComplete = function () {
        var data = null;
        try {
            data = JSON.parse(this.shareLoader.data);
        }
        catch (error) {
            //  alert(error);
            return;
        }
        if (data["success"]) {
            this.getState();
        }
        else {
        }
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错

     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    p.createGameScene = function () {
        //var sky:egret.Bitmap = this.createBitmapByName("bgImage");
        //this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        //sky.width = stageW;
        //sky.height = stageH;
        this.addBgShape(stageW, stageH);
        this.runarc(stageH, stageW);
        this.initpersondata();
        //删除画布上的所有元素 再添加画布
        //   this.GameStart(stageW,stageH);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        //var socket = io.connect('http://115.29.34.64:3000');
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    p.startAnimation = function (result) {
        var self = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = [];
        for (var i = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }
        var textfield = self.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];
            self.changeDescription(textfield, lineArr);
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, self);
        };
        change();
    };
    /**
     * 切换描述内容
     * Switch to described content
     */
    p.changeDescription = function (textfield, textFlow) {
        textfield.textFlow = textFlow;
    };
    p.initpersondata = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("init", egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    p.onGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        var data = JSON.parse(request.response);
        // alert(request.response);
        this.ShareFriend(request.response);
        if (data.data.name != null) {
            //this.playname=data.data.name;
            this.nickname = data.data.name;
        }
        if (data.data.headImgUrl != null) {
            //this.playimg=data.data.headImgUrl;
            this.headImgUrl = '.' + data.data.headImgUrl;
        }
        if (data.data._csrf != null) {
            this._csrf = data.data._csrf;
        }
        if (data.data.openId != null) {
            this.openid = data.data.openId;
        }
        if (this.getQueryString("roomId") != null) {
            this.roomId = this.getQueryString("roomId");
        }
        //var responseLabel = new egret.TextField();
        //responseLabel.size = 18;
        //responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        //this.addChild(responseLabel);
        //responseLabel.x = 50;
        //responseLabel.y = 70;
    };
    p.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return r[2];
        return null;
    };
    p.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    p.onGetProgress = function (event) {
        // alert("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    //添加首页背景场景
    p.addBgShape = function (stageW, stageH) {
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0xFFFFFF, 1);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        topMask.width = stageW;
        topMask.height = stageH;
        this.addChild(topMask);
    };
    //初始化首页背景
    p.runarc = function (stageH, stageW) {
        var self = this;
        this.socket = io.connect('http://115.29.34.64:3000/xmas_s01e01');
        //this.socket = io.connect('http://115.29.34.64:8081/xmas_s01e01');
        //this.socket = io.connect('http://192.168.22.244:3000/xmas_s01e01');
        //this.addBgShape(stageH,stageW);
        //
        //var bg_gamebg:egret.Bitmap = this.createBitmapByName("gamebg");
        //this.addChild(bg_gamebg);
        //bg_gamebg.x = 0;
        //bg_gamebg.y =0;
        //bg_gamebg.width=stageW;
        //bg_gamebg.height=stageH;
        //var black_bg=this.zhezhao();
        //this.addChild(black_bg);
        var bg_dingbu = this.createBitmapByName("dingbu");
        this.addChild(bg_dingbu);
        bg_dingbu.x = 0;
        bg_dingbu.y = -bg_dingbu.height;
        bg_dingbu.width = stageW;
        bg_dingbu.height = stageH * 2 / 5;
        bg_dingbu.name = "bg_dingbu";
        var bg_xue = this.createBitmapByName("xue");
        this.addChild(bg_xue);
        //bg_xue.scaleX = 0.55;
        //bg_xue.scaleY = 0.55;
        //bg_xue.anchorOffsetX = bg_xue.width / 2;
        //bg_xue.anchorOffsetY = bg_xue.height / 2;
        bg_xue.x = 0;
        bg_xue.width = stageW;
        bg_xue.height = stageH * 2 / 5;
        bg_xue.name = "bg_xue";
        //bg_xue.y = stageH / 2 - 60;
        //
        var bg_biaoti = this.createBitmapByName("biaoti");
        this.addChild(bg_biaoti);
        bg_biaoti.x = stageW / 28;
        bg_biaoti.y = (stageH) / 50;
        bg_biaoti.width = (stageW * 9) / 10;
        bg_biaoti.height = stageH * 1 / 5;
        bg_biaoti.alpha = 0;
        bg_biaoti.name = "bg_biaoti";
        //icon.y = stageH / 2 - 60;
        //
        var bg_baoguo = this.createBitmapByName("baoguo");
        this.addChild(bg_baoguo);
        bg_baoguo.x = stageW * 12 / 100;
        //bg_baoguo.y=(stageH*19)/100;
        //bg_baoguo.x =20-bg_baoguo.width*0.05;
        bg_baoguo.y = stageH - bg_baoguo.height * 0.05;
        bg_baoguo.width = stageW * 83 / 100;
        bg_baoguo.height = (stageH * 40) / 100;
        bg_baoguo.scaleX = .1;
        bg_baoguo.scaleY = .1;
        bg_baoguo.rotation = 30;
        bg_baoguo.name = "bg_baoguo";
        var bg_yundonghui = this.createBitmapByName("yundonghui");
        this.addChild(bg_yundonghui);
        bg_yundonghui.x = (stageW * 44) / 100;
        bg_yundonghui.y = (stageH) / 8;
        bg_yundonghui.width = stageW / 3;
        bg_yundonghui.height = (stageH) / 9;
        bg_yundonghui.alpha = 0;
        bg_yundonghui.name = "bg_yundonghui";
        //icon.y = stageH / 2 - 60;
        //
        var bg_dibu = this.createBitmapByName("dibu");
        this.addChild(bg_dibu);
        bg_dibu.x = 0;
        bg_dibu.y = (stageH * 81) / 100;
        bg_dibu.width = stageW;
        bg_dibu.height = (stageH * 19) / 100;
        bg_dibu.name = "bg_dibu";
        //icon.y = stageH / 2 - 60;
        var bg_feiting = this.createBitmapByName("feiting");
        this.addChild(bg_feiting);
        //bg_feiting.x =stageW*40/100;
        //bg_feiting.y=(stageH*60)/100;
        bg_feiting.x = 20;
        bg_feiting.y = stageH - 20;
        bg_feiting.width = stageW * 47 / 100;
        bg_feiting.height = (stageH * 12) / 100;
        bg_feiting.scaleX = .1;
        bg_feiting.scaleY = .1;
        bg_feiting.rotation = 180;
        bg_feiting.anchorOffsetX = bg_feiting.width / 2;
        bg_feiting.name = "bg_feiting";
        var bg_lu = this.createBitmapByName("lu");
        this.addChild(bg_lu);
        bg_lu.x = stageW * 10 / 100;
        //bg_lu.y=(stageH*21)/100;
        //bg_lu.x =20-bg_lu.width*0.05;
        bg_lu.y = stageH - bg_lu.height * 0.05;
        bg_lu.width = stageW * 50 / 100;
        bg_lu.height = (stageH * 60) / 100;
        bg_lu.scaleX = .1;
        bg_lu.scaleY = .1;
        bg_lu.rotation = 30;
        bg_lu.name = "bg_lu";
        var bg_laoren = this.createBitmapByName("laoren");
        this.addChild(bg_laoren);
        bg_laoren.x = stageW * 12 / 100;
        //bg_laoren.y=(stageH*19)/100;
        //bg_laoren.x=20-bg_laoren.width*0.05;
        bg_laoren.y = stageH - bg_laoren.height * 0.05;
        bg_laoren.width = stageW * 83 / 100;
        bg_laoren.height = (stageH * 40) / 100;
        bg_laoren.scaleX = .1;
        bg_laoren.scaleY = .1;
        bg_laoren.rotation = 30;
        bg_laoren.name = "bg_laoren";
        //bg_dibu.width=stageW;
        //bg_dibu.height=(stageH*19)/100;
        //
        var bg_Huankouzi = this.createBitmapByName("feikouzi");
        this.addChild(bg_Huankouzi);
        bg_Huankouzi.x = stageW * 80 / 100;
        //bg_laoren.y=(stageH*19)/100;
        //bg_laoren.x=20-bg_laoren.width*0.05;
        bg_Huankouzi.y = stageH * 0.5;
        bg_Huankouzi.width = stageW * 23 / 100;
        bg_Huankouzi.height = (stageH * 15) / 100;
        bg_Huankouzi.scaleX = .1;
        bg_Huankouzi.scaleY = .1;
        bg_Huankouzi.name = "bg_Huankouzi";
        //bg_Huankouzi.rotation=30;
        var bg_Hongkouzi = this.createBitmapByName("feikou");
        this.addChild(bg_Hongkouzi);
        bg_Hongkouzi.x = stageW * 15 / 100;
        //bg_laoren.y=(stageH*19)/100;
        //bg_laoren.x=20-bg_laoren.width*0.05;
        bg_Hongkouzi.y = stageH * 0.68;
        bg_Hongkouzi.width = stageW * 20 / 100;
        bg_Hongkouzi.height = (stageH * 10) / 100;
        bg_Hongkouzi.scaleX = .1;
        bg_Hongkouzi.scaleY = .1;
        bg_Hongkouzi.name = "bg_Hongkouzi";
        var bg_btn_left = this.createBitmapByName("btn_left");
        this.addChild(bg_btn_left);
        bg_btn_left.x = stageW * 5 / 100 + 0.35 * stageW;
        bg_btn_left.y = (stageH * 85) / 100; //+bg_btn_left.height*0.3;
        // bg_btn_left.width=stageW*35/100;
        bg_btn_left.width = 0;
        bg_btn_left.height = (stageH * 5) / 100;
        bg_btn_left.alpha = 0;
        bg_btn_left.name = "bg_btn_left";
        //bg_btn_left.anchorOffsetX=bg_btn_left.width;
        //bg_btn_left.anchorOffsetY=bg_btn_left.height;
        //bg_btn_left.scaleX=.35;
        //bg_btn_left.scaleY=.35;
        //
        var bg_btn_right = this.createBitmapByName("btn_right");
        this.addChild(bg_btn_right);
        bg_btn_right.x = stageW * 60 / 100;
        bg_btn_right.y = (stageH * 85) / 100;
        bg_btn_right.width = 0; //stageW*35/100;
        bg_btn_right.height = (stageH * 5) / 100;
        bg_btn_right.alpha = 0;
        bg_btn_right.name = "bg_btn_right";
        //bg_btn_right.scaleX=.35;
        //bg_btn_right.scaleY=.35;
        //
        var bg_btn_middle = this.createBitmapByName("btn_middle");
        this.addChild(bg_btn_middle);
        bg_btn_middle.x = stageW / 2; //stageW*38/100+stageW*25/200;
        bg_btn_middle.y = (stageH * 82) / 100 + (stageH * 12) / 200;
        bg_btn_middle.scaleX = .15;
        bg_btn_middle.scaleY = .15;
        bg_btn_middle.anchorOffsetX = bg_btn_middle.width / 2;
        bg_btn_middle.anchorOffsetY = bg_btn_middle.height / 2;
        bg_btn_middle.alpha = 0;
        bg_btn_middle.name = "bg_btn_middle";
        //bg_btn_middle.width=stageW*0.29;
        //bg_btn_middle.height=stageH*0.156;
        var bg_m_start = this.createBitmapByName("m_start");
        this.addChild(bg_m_start);
        bg_m_start.x = stageW * 90 / 100;
        bg_m_start.y = (stageH * 2) / 100;
        bg_m_start.width = stageW * 7 / 100;
        bg_m_start.height = (stageH * 4.3) / 100;
        bg_m_start.name = "startmusic";
        this.sound = RES.getRes("bgMusic");
        this.channel = this.sound.play(0, 1);
        ////////////////////////////////////////////////事件
        bg_m_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.MusicStop, this);
        bg_m_start.touchEnabled = true;
        console.log(bg_m_start.hasEventListener(egret.TouchEvent.TOUCH_TAP).toString());
        bg_btn_middle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.GameStart, this);
        bg_btn_middle.touchEnabled = true;
        bg_btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.inguize();
            var bg_gamebg = this.createBitmapByName("gamebg");
            this.addChild(bg_gamebg);
            bg_gamebg.x = 0;
            bg_gamebg.y = 0;
            bg_gamebg.width = stageW;
            bg_gamebg.height = stageH;
            bg_gamebg.alpha = 0;
            egret.Tween.get(bg_gamebg).to({ alpha: 1 }, 800, egret.Ease.sineIn);
            setTimeout(function () {
                self.guize();
            }, 600);
        }, this);
        bg_btn_right.touchEnabled = true;
        bg_btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //this.inguize();
            //var bg_gamebg:egret.Bitmap = this.createBitmapByName("gamebg");
            //this.addChild(bg_gamebg);
            //bg_gamebg.x = 0;
            //bg_gamebg.y =0;
            //bg_gamebg.width=stageW;
            //bg_gamebg.height=stageH;
            //bg_gamebg.alpha=0;
            //egret.Tween.get(bg_gamebg).to({alpha:1},800,egret.Ease.sineIn);
            //setTimeout(function(){n.guize();},600)
            self.jiaocheng();
        }, this);
        bg_btn_left.touchEnabled = true;
        ////////////////////////////////////////////// 行为动画
        //顶部
        egret.Tween.get(bg_dingbu).to({ x: 0, y: -bg_dingbu.height * 1 / 4 }, 2000, egret.Ease.circIn).to({
            x: 0,
            y: 0
        }, 500, egret.Ease.sineIn); //.to({height:stageH*2/6},500, egret.Ease.circIn).to({height:stageH*2/5},100, egret.Ease.circIn);
        ////标题透明显现
        egret.Tween.get(bg_biaoti).to({ alpha: 0 }, 2000, egret.Ease.sineIn).to({ alpha: 1 }, 1000, egret.Ease.circIn);
        egret.Tween.get(bg_yundonghui).to({ alpha: 0 }, 2000, egret.Ease.sineIn).to({ alpha: 1 }, 1000, egret.Ease.circIn);
        //开始按钮
        egret.Tween.get(bg_btn_middle).wait(2000).to({ alpha: 1 }, 10, egret.Ease.sineIn).to({ rotation: 3630 }, 2000, egret.Ease.circOut).to({ rotation: 3600 }, 600, egret.Ease.circOut);
        egret.Tween.get(bg_btn_middle).wait(2000).to({ alpha: 1 }, 10, egret.Ease.sineIn).to({
            scaleX: .4,
            scaleY: .4
        }, 1000, egret.Ease.circIn);
        bg_btn_middle.scaleX = .4;
        bg_btn_middle.scaleY = .4;
        egret.Tween.get(bg_btn_middle, { loop: true }).to({
            scaleX: .45,
            scaleY: .45
        }, 900, egret.Ease.sineIn).to({ scaleX: .4, scaleY: .4 }, 900, egret.Ease.sineIn);
        //按钮左
        egret.Tween.get(bg_btn_left).wait(2000).to({ alpha: 1 }, 1000, egret.Ease.sineIn).to({ x: stageW * 5 / 100 }, 300, egret.Ease.circIn);
        egret.Tween.get(bg_btn_left).wait(2600).to({ width: stageW * 35 / 100 }, 900, egret.Ease.sineIn);
        //按钮右
        egret.Tween.get(bg_btn_right).wait(2000).to({ alpha: 1 }, 1000, egret.Ease.sineIn).to({ width: stageW * 35 / 100 }, 300, egret.Ease.circIn);
        //feiting轨迹
        var feitingscale = egret.Tween.get(bg_feiting).to({
            scaleX: .65,
            scaleY: .65
        }, 2000, egret.Ease.sineIn).to({ scaleX: .8, scaleY: .8 }, 2000, egret.Ease.circIn); //to( { width:stageW*60/100, height:(stageH*12)/100 }, 1000, egret.Ease.circIn );
        egret.Tween.get(bg_feiting).to({ rotation: 140 }, 2000, egret.Ease.sineIn).to({ rotation: 20 }, 500, egret.Ease.sineIn);
        egret.Tween.get(bg_feiting).to({
            x: stageW - 20 + bg_feiting.width / 2,
            y: stageH - 150
        }, 2000, egret.Ease.sineIn).to({
            x: stageW * 60 / 100 + bg_feiting.width / 2,
            y: (stageH * 0.4 - 150) / 3 + 0.7 * stageH
        }, 1000, egret.Ease.circIn).to({
            x: stageW * 45 / 100 + bg_feiting.width / 2,
            y: (stageH * 72) / 100
        }, 1000, egret.Ease.circIn);
        //feiting复位上下浮动
        bg_feiting.x = stageW * 45 / 100 + bg_feiting.width / 2;
        bg_feiting.y = (stageH * 72) / 100;
        egret.Tween.get(bg_feiting, { loop: true }).to({
            x: stageW * 45 / 100 + bg_feiting.width / 2,
            y: (stageH * 72) / 100 + 20
        }, 1600, egret.Ease.sineIn).to({
            x: stageW * 45 / 100 + bg_feiting.width / 2,
            y: (stageH * 72) / 100
        }, 1600, egret.Ease.sineIn);
        //人物
        //圣诞老人
        //egret.Tween.get(bg_laoren).to( { width:stageW*83/100, height:(stageH*40)/100 }, 2000, egret.Ease.circIn );
        egret.Tween.get(bg_laoren).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.circIn); //.to( { scaleX:.5, scaleY:.5 }, 1000, egret.Ease.sineIn )
        egret.Tween.get(bg_laoren).to({
            x: stageW * 12 / 100 - (bg_laoren.x / bg_laoren.y) * 50,
            y: (stageH * 19) / 100 + 50
        }, 500, egret.Ease.sineIn).to({ x: stageW * 12 / 100, y: (stageH * 19) / 100 }, 3000, egret.Ease.sineIn); //.to({x:stageW-10-bg_laoren.width*0.5,y:stageH-80-bg_laoren.height*0.5 }, 1000, egret.Ease.sineIn)
        egret.Tween.get(bg_laoren).to({ rotation: 0 }, 500, egret.Ease.sineIn);
        //老人复位 上下浮动
        bg_laoren.x = stageW * 12 / 100;
        bg_laoren.y = (stageH * 19) / 100;
        egret.Tween.get(bg_laoren, { loop: true }).to({
            x: stageW * 12 / 100,
            y: (stageH * 19) / 100 + 20
        }, 1800, egret.Ease.sineIn).to({ x: stageW * 12 / 100, y: (stageH * 19) / 100 }, 1800, egret.Ease.sineIn);
        //包裹
        egret.Tween.get(bg_baoguo).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.circIn); //.to( { scaleX:.5, scaleY:.5 }, 1000, egret.Ease.sineIn ).
        egret.Tween.get(bg_baoguo).to({
            x: stageW * 12 / 100 - (bg_laoren.x / bg_laoren.y) * 50,
            y: (stageH * 19) / 100 + 50
        }, 500, egret.Ease.sineIn).to({ x: stageW * 12 / 100, y: (stageH * 19) / 100 }, 3000, egret.Ease.sineIn); //.to({x:stageW-10-bg_laoren.width*0.5,y:stageH-80-bg_laoren.height*0.5 }, 1000, egret.Ease.sineIn)
        egret.Tween.get(bg_baoguo).to({ rotation: 0 }, 500, egret.Ease.sineIn);
        //包裹复位上下浮动
        bg_baoguo.x = stageW * 12 / 100;
        bg_baoguo.y = (stageH * 19) / 100;
        egret.Tween.get(bg_baoguo, { loop: true }).to({
            x: stageW * 12 / 100,
            y: (stageH * 19) / 100 + 20
        }, 1800, egret.Ease.sineIn).to({ x: stageW * 12 / 100, y: (stageH * 19) / 100 }, 1800, egret.Ease.sineIn);
        //鹿
        //egret.Tween.get(bg_lu).wait(2000);
        egret.Tween.get(bg_lu).wait(500).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.circIn); //.to( { scaleX:.5, scaleY:.5 }, 1000, egret.Ease.sineIn )
        egret.Tween.get(bg_lu).wait(500).to({
            x: stageW * 3 / 100 - (bg_lu.x / bg_lu.y) * 50,
            y: (stageH * 21) / 100
        }, 500, egret.Ease.sineIn).to({ x: stageW * 3 / 100, y: (stageH * 21) / 100 }, 2000, egret.Ease.sineIn); //.to({x:stageW-10-bg_lu.width*0.5,y:stageH-80-bg_lu.height*0.5 }, 1000, egret.Ease.sineIn)
        // egret.Tween.get(bg_lu).wait(2000).to( {x:stageW*3/100,y:(stageH*21)/100}, 2000, egret.Ease.sineIn );
        egret.Tween.get(bg_lu).wait(500).to({ rotation: 0 }, 500, egret.Ease.sineIn);
        //鹿复位上下浮动
        bg_lu.x = stageW * 3 / 100;
        bg_lu.y = (stageH * 21) / 100;
        egret.Tween.get(bg_lu, { loop: true }).to({
            x: stageW * 3 / 100,
            y: (stageH * 21) / 100 + 20
        }, 1900, egret.Ease.sineIn).to({ x: stageW * 3 / 100, y: (stageH * 21) / 100 }, 1900, egret.Ease.sineIn);
        //扣子
        egret.Tween.get(bg_Huankouzi, { loop: false }).wait(2000).to({
            x: stageW * 0.87,
            y: stageH * 0.5,
            scaleX: 0.6,
            scaleY: 0.6
        }, 300, egret.Ease.circOut);
        egret.Tween.get(bg_Hongkouzi, { loop: false }).wait(2500).to({
            x: -10,
            y: stageH * 0.7,
            scaleX: 1,
            scaleY: 1
        }, 300, egret.Ease.circOut);
    };
    //游戏准备场景创建
    p.GameStart = function (event) {
        var self = this;
        // var leadsharebm:egret.Bitmap;
        //this.socket.emit("enter room",self.tp);
        this.personal = {
            nickname: self.nickname,
            headImgUrl: '.' + self.headImgUrl,
            openId: self.openid,
            roomId: self.roomId
        };
        //控制音乐
        this.channel.stop();
        this.sound = RES.getRes("playMusic");
        this.channel = this.sound.play(0, 2);
        //创建房间
        this.socket.on('create room', function (data) {
            //console.log('create room', data)
            //document.getElementById('roomId').value = data.roomId;
            self.roomId = data.roomId;
            var shareObj = {
                title: self.nickname + '邀你参加圣诞跑PK，点击进入立即开赛',
                desc: '领走你的一份圣诞礼物',
                link: window.location.href,
                imgUrl: "http://" + window.location.hostname + "/biz/xmas_s01e01/resource/images/share_icon.png" // 分享图标
            };
            //此处为添加roomId  分享链接
            //alert(data.roomId);
            console.log(data.roomId);
            var bodyMenuShareTimeline = new BodyMenuShareTimeline();
            bodyMenuShareTimeline.title = shareObj.title;
            bodyMenuShareTimeline.link = shareObj.link;
            bodyMenuShareTimeline.imgUrl = shareObj.imgUrl;

            wx.onMenuShareTimeline(bodyMenuShareTimeline);
            var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
            bodyMenuShareAppMessage.title = shareObj.title;
            bodyMenuShareAppMessage.desc = shareObj.desc;
            bodyMenuShareAppMessage.link = shareObj.link;
            bodyMenuShareAppMessage.imgUrl = shareObj.imgUrl;

            wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
            var bodyMenuShareQQ = new BodyMenuShareQQ();
            bodyMenuShareQQ.title = shareObj.title;
            bodyMenuShareQQ.desc = shareObj.desc;
            bodyMenuShareQQ.link = shareObj.link;
            bodyMenuShareQQ.imgUrl = shareObj.imgUrl;

            wx.onMenuShareQQ(bodyMenuShareQQ);
            var bodyMenuShareWeibo = new BodyMenuShareWeibo();
            bodyMenuShareWeibo.title = shareObj.title;
            bodyMenuShareWeibo.desc = shareObj.desc;
            bodyMenuShareWeibo.link = shareObj.link;
            bodyMenuShareWeibo.imgUrl = shareObj.imgUrl;

            wx.onMenuShareWeibo(bodyMenuShareWeibo);
        });
        //观看房间
        this.socket.on('watch game', function (data) {
            console.log('watch game', data);
            //window.location.href="biz/xmas_s01e01.starup";
            //var bg:egret.Bitmap=self.createBitmapByName("")
        });
        //初始化进入房间
        this.socket.on("enter room", function (data) {
            if (self.hadinitroom == 0) {
                console.log('enter room', data);
                // document.getElementById('roomId').value = data.roomId;
                //alert(JSON.stringify(data));
                //for (var i = 0; i <= data.players.length-1; i++) {
                //    if (data.players[i].openId == self.openid) {
                //        this.track = data.players[i].runway;
                //    }
                //}
                //self.PersonImg(0.07*stageW,0.6*stageH,0.3*stageW,0.14*stageH,data.players[0].headImgUrl);
                //
                //if(data.players.length>1)
                //    self.PersonImg(0.07*stageW,0.6*stageH,0.3*stageW,0.14*stageH,data.players[1].headImgUrl);
                //
                //if(data.players.length>2)
                //    self.PersonImg(0.07*stageW,0.6*stageH,0.3*stageW,0.14*stageH,data.players[2].headImgUrl);
                this.playname = data.players[0].nickname;
                //if(data.players.length>1)
                //  this.playname1=data.players[1].nickname;
                // if(data.players.length>2)
                // this.playname2=data.players[2].nickname;
                //alert(data.players.length);
                switch (data.players.length) {
                    case 1:
                        {
                            playernum = 1;
                            self.track = 0;
                            self.playimg = '.' + data.players[0].headImgUrl;
                            self.bh = self.PersonImg(0.08 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[0].headImgUrl);
                            self.wl = self.WaitLight(-0.05 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws = self.WaitShadow(-0.05 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj = self.WaitJoin(0.07 * stageW, 0.75 * stageH); //wj.text=self.nickname;
                            self.wj.text = data.players[0].nickname;
                            self.readylogo = self.Readylogo(0.07 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, "readyex");
                            self.indexReadyLogo = self.readylogo;
                            self.readylogo.alpha = 0.01;
                            //this.wxtouxiang(this.playimg1);
                            self.readylogo.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                                self.readylogo.texture = RES.getRes("readyed");
                                self.socket.emit('ready', { runway: 0 });
                            }, this);
                            break;
                        }
                        ;
                    case 2:
                        {
                            var status = "";
                            self.track = 1;
                            //leadsharebm.texture=RES.getRes("leadshare1")
                            self.playimg = '.' + data.players[0].headImgUrl;
                            self.playimg1 = '.' + data.players[1].headImgUrl;
                            self.bh = self.PersonImg(0.08 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[0].headImgUrl);
                            self.wl = self.WaitLight(-0.05 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws = self.WaitShadow(-0.05 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj = self.WaitJoin(0.07 * stageW, 0.75 * stageH); //wj.text=self.nickname;
                            self.wj.text = data.players[0].nickname;
                            if (data.players[0].status == "未准备") {
                                status = "readying";
                            }
                            else {
                                status = "readyed";
                            }
                            self.readylogo = self.Readylogo(0.07 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, status);
                            self.readylogo.alpha = 0.01;
                            //this.wxtouxiang(this.playimg);
                            // alert("readylogo2_ex");
                            self.bh1 = self.PersonImg(0.39 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[1].headImgUrl);
                            self.wl1 = self.WaitLight(0.26 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws1 = self.WaitShadow(0.26 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj1 = self.WaitJoin(0.39 * stageW, 0.75 * stageH); // wj1.text=self.playname1;
                            self.wj1.text = data.players[1].nickname;
                            self.readylogo1 = self.Readylogo(0.38 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, "readyex");
                            self.readylogo1.alpha = 0.01;
                            //this.wxtouxiang1(this.playimg1);
                            self.readylogo1.touchEnabled = true;
                            self.readylogo1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                                self.readylogo1.texture = RES.getRes("readyed");
                                self.socket.emit('ready', { runway: 1 });
                            }, this);
                            self.indexReadyLogo = self.readylogo1;
                            //self.readylogo1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
                            //    alert("14423");
                            //    self.readylogo1.texture=RES.getRes("readyed");
                            //    self.socket.emit('ready',{runway:1});
                            //},self);
                            break;
                        }
                        ;
                    case 3:
                        {
                            self.track = 2;
                            var status = "";
                            self.playimg = '.' + data.players[0].headImgUrl;
                            self.playimg1 = '.' + data.players[1].headImgUrl;
                            self.playimg2 = '.' + data.players[2].headImgUrl;
                            self.bh = self.PersonImg(0.08 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[0].headImgUrl);
                            self.wl = self.WaitLight(-0.05 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws = self.WaitShadow(-0.05 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj = self.WaitJoin(0.07 * stageW, 0.75 * stageH); //
                            self.wj.text = data.players[0].nickname;
                            if (data.players[0].status == "未准备") {
                                status = "readying";
                            }
                            else {
                                status = "readyed";
                            }
                            self.readylogo = self.Readylogo(0.07 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, status);
                            self.readylogo.alpha = 0.01;
                            self.bh1 = self.PersonImg(0.39 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[1].headImgUrl);
                            self.wl1 = self.WaitLight(0.26 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws1 = self.WaitShadow(0.26 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj1 = self.WaitJoin(0.39 * stageW, 0.75 * stageH);
                            self.wj1.text = data.players[1].nickname;
                            if (data.players[1].status == "未准备") {
                                status = "readying";
                            }
                            else {
                                status = "readyed";
                            }
                            self.readylogo1 = self.Readylogo(0.38 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, status);
                            self.readylogo1.alpha = 0.01;
                            self.bh2 = self.PersonImg(0.73 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[2].headImgUrl);
                            self.wl2 = self.WaitLight(0.6 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws2 = self.WaitShadow(0.6 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj2 = self.WaitJoin(0.76 * stageW, 0.75 * stageH);
                            self.wj2.text = data.players[2].nickname;
                            self.readylogo2 = self.Readylogo(0.72 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, "readyex");
                            self.readylogo2.alpha = 0.01;
                            self.readylogo2.touchEnabled = true;
                            self.readylogo2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                                self.readylogo2.texture = RES.getRes("readyed");
                                self.socket.emit('ready', { runway: 2 });
                            }, self);
                            self.indexReadyLogo = self.readylogo2;
                            break;
                        }
                        ;
                }
                self.hadinitroom = 1;
            }
            else if (self.hadinitroom == 1) {
                // alert("socket 1")
                switch (data.players.length) {
                    case 2:
                        {
                            // alert("socket 12")
                            console.log("add1");
                            // leadsharebm.texture=RES.getRes("leadshare1")
                            self.playimg1 = '.' + data.players[1].headImgUrl;
                            self.bh1 = self.PersonImg(0.39 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[1].headImgUrl);
                            self.wl1 = self.WaitLight(0.26 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws1 = self.WaitShadow(0.26 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj1 = self.WaitJoin(0.39 * stageW, 0.75 * stageH);
                            self.wj1.text = data.players[1].nickname;
                            self.readylogo1 = self.Readylogo(0.39 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, "readying");
                            self.readylogo1.alpha = 0.01;
                            self.playname1 = data.players[1].nickname;
                            self.removeChild(self.wl1cb);
                            self.removeChild(self.ws1bc);
                            self.removeChild(self.wj1bc);
                        }
                        ;
                        break;
                    case 3:
                        {
                            self.playimg2 = '.' + data.players[2].headImgUrl;
                            // self.removeChild(self.zhez);
                            //self.removeChild(leadsharebm);
                            self.jiaocheng();
                            self.bh2 = self.PersonImg(0.73 * stageW, 0.62 * stageH, 0.2 * stageW, 0.5 * stageH, '.' + data.players[2].headImgUrl);
                            self.wl2 = self.WaitLight(0.6 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
                            self.ws2 = self.WaitShadow(0.6 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
                            self.wj2 = self.WaitJoin(0.76 * stageW, 0.75 * stageH);
                            self.wj2.text = data.players[2].nickname;
                            self.readylogo2 = self.Readylogo(0.72 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH, "readying");
                            self.playname2 = data.players[2].nickname;
                            self.readylogo2.touchEnabled = true;
                            self.readylogo2.alpha = 0.01;
                            //self.readylogo2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
                            //    // alert("123");
                            //    self.readylogo2.texture=RES.getRes("readyed");
                            //    self.socket.emit('ready',{runway:2});
                            //},self);
                            self.removeChild(self.wl2bc);
                            self.removeChild(self.ws2bc);
                            self.removeChild(self.wj2bc);
                        }
                        ;
                        break;
                }
            }
            //self.setChildIndex( self.bh, self.getChildIndex( self.readylogo ) );
            //self.setChildIndex( self.bh1, self.getChildIndex( self.readylogo1 ) );
            //self.setChildIndex( self.bh2, self.getChildIndex( self.readylogo2) );
        });
        //监听其他人是否进入房间
        this.socket.on("enter room", function (data) {
            console.log('enter room', data);
        });
        this.socket.on("new message", function (data) {
            // for (var i = 0; i <= data.count; i++) {
            var suijishu = [0.1 * stageH - 0.035 * stageH, 0.12 * stageH, 0.1 * stageH + 0.075 * stageH];
            var a = suijishu[parseInt(Math.random() * 3)];
            var msg = new egret.TextField();
            self.addChild(msg);
            msg.text = data.message;
            msg.textColor = 0x000000;
            msg.textAlign = "center";
            msg.size = 20;
            // msg.x = x;
            msg.y = a;
            var runNum = 1;
            egret.Tween.get(msg, { loop: true }).to({ x: stageW }, 3000);
            var interval = egret.setInterval(function () {
                if (runNum == 1) {
                    self.removeChild(msg);
                    clearInterval(interval);
                }
                runNum++;
            }, this, 8900);
            //}
        });
        this.socket.on('room full', function (data) {
            //console.log('room full', data)
            //console.log('all ready', data);
            //alert("123")
            //    self.removeChild(self.readylogo2);
            //    self.removeChild(self.readylogo1);
            //    self.removeChild(self.readylogo);
            //    self.removeChild(self.wj2);
            //    self.removeChild(self.wj1);
            //    self.removeChild(self.wj);
            //    self.removeChild(self.ws2);
            //    self.removeChild(self.ws1);
            //    self.removeChild(self.ws);
            //    self.removeChild(self.wl2);
            //    self.removeChild(self.wl1);
            //    self.removeChild(self.wl);
            //    self.removeChild(self.bh1);
            //    self.removeChild(self.bh2);
            //    self.removeChild(self.bh);
            //    var indexplayer= self.addplayer(0);
            //    var indexplayer1= self.addplayer(1);
            //    var indexplayer2= self.addplayer(2);
            //
            //if(self.track==0){
            //    self.indexplayer=self.player
            //}
            //
            //if(self.track==1){
            //    self.indexplayer=self.player1
            //}
            //
            //if(self.track==2){
            //    self.indexplayer=self.player2
            //}
            //
            //self.DaoShu();
            //    var left_crus:egret.Bitmap = self.createBitmapByName("left");
            //    self.addChild(left_crus);
            //    left_crus.x =0.01;
            //    left_crus.y=0.6*stageH;
            //    left_crus.width=stageW*0.35;
            //    left_crus.height=stageW*0.35;
            //    //left_crus.y=stageH-left_crus.height;
            //    //left_crus.width=stageW*10/100;
            //    //left_crus.height=(stageH*6)/100;
            //    left_crus.name="left_crus";
            //
            //    left_crus.touchEnabled=true;
            //
            //    var right_crus:egret.Bitmap = self.createBitmapByName("right");
            //    self.addChild(right_crus);
            //    //right_crus.x =stageW-right_crus.width;
            //    //right_crus.y=stageH-right_crus.height;
            //    right_crus.x=stageW*0.7;
            //    right_crus.y=0.6*stageH;
            //    right_crus.width=stageW*0.35;
            //    right_crus.height=stageW*0.35;
            //    //right_crus.width=stageW*10/100;
            //    //right_crus.height=(stageH*6)/100;
            //    right_crus.name="right_crus";
            //    right_crus.touchEnabled=true;
            //
            //    left_crus.addEventListener(egret.TouchEvent.TOUCH_TAP,self.Leftplaygame,self);
            //    right_crus.addEventListener(egret.TouchEvent.TOUCH_TAP,self.Rightplaygame,self);
            //
            //    var runNum:number=1;
            //    var interval:number=egret.setInterval(function () {
            //        if(runNum==1){
            //            self.socket.emit("game status",self.indexplayer.y/stageH*100);
            //            clearInterval(interval);}
            //        runNum++;
            //    },self,6000);
            //
            //    var runNum1:number=1;
            //    var interval1:number=egret.setInterval(function () {
            //        if(runNum1==1) {
            //            if (self.indexplayer != self.player && self.player.y <= 0.98 * stageH) {
            //                // self.player.y = self.player.y + 0.03 * stageH;
            //                if(self.placing==2||self.placing==3)
            //                    egret.Tween.get(self.player).to({y: 1.03 * stageH, x:0.35*stageW,scaleX:1,scaleY:1}, 4000);
            //            }
            //            if (self.indexplayer != self.player1 && self.player1.y <= 0.98 * stageH) {
            //                // self.player1.y = self.player1.y + 0.03 * stageH;
            //                if(self.placing==1||self.placing==3)
            //                    egret.Tween.get(self.player).to({y: 0.98 * stageH, x:0.735*stageW,scaleX:1,scaleY:1}, 4000);
            //            }
            //            if (self.indexplayer != self.player2 && self.player2.y <= 0.98 * stageH) {
            //                //  self.player2.y = self.player2.y + 0.03 * stageH;
            //                if(self.placing==1||self.placing==2)
            //                    egret.Tween.get(self.player).to({y: 0.98 * stageH, x:1.1*stageW,scaleX:1,scaleY:1}, 4000);
            //            }
            //        }
            //        if(runNum1==10){
            //            clearInterval(interval1);
            //        }
            //    },self,6000);
            ////window.location.href="";
        });
        this.socket.on('ready', function (data) {
            switch (data.runway) {
                case 0:
                    self.readylogo.texture = RES.getRes("readyed");
                    break;
                case 1:
                    self.readylogo1.texture = RES.getRes("readyed");
                    break;
                case 2:
                    self.readylogo2.texture = RES.getRes("readyed");
                    break;
            }
        });
        this.socket.on('all ready', function (data) {
            console.log('all ready', data);
            self.removeChild(self.readylogo2);
            self.removeChild(self.readylogo1);
            self.removeChild(self.readylogo);
            self.removeChild(self.wj2);
            self.removeChild(self.wj1);
            self.removeChild(self.wj);
            self.removeChild(self.ws2);
            self.removeChild(self.ws1);
            self.removeChild(self.ws);
            self.removeChild(self.wl2);
            self.removeChild(self.wl1);
            self.removeChild(self.wl);
            //self.removeChild(self.bh1);
            //self.removeChild(self.bh2);
            //self.removeChild(self.bh);
            var indexplayer = self.addplayer(0);
            var indexplayer1 = self.addplayer(1);
            var indexplayer2 = self.addplayer(2);
            if (self.track == 0) {
                self.indexplayer = self.player;
            }
            if (self.track == 1) {
                self.indexplayer = self.player1;
            }
            if (self.track == 2) {
                self.indexplayer = self.player2;
            }
            self.DaoShu();
            var left_crus = self.createBitmapByName("left");
            self.addChild(left_crus);
            left_crus.x = 0.01;
            left_crus.y = 0.6 * stageH;
            left_crus.width = stageW * 0.35;
            left_crus.height = stageW * 0.35;
            //left_crus.y=stageH-left_crus.height;
            //left_crus.width=stageW*10/100;
            //left_crus.height=(stageH*6)/100;
            left_crus.name = "left_crus";
            left_crus.touchEnabled = true;
            var right_crus = self.createBitmapByName("right");
            self.addChild(right_crus);
            //right_crus.x =stageW-right_crus.width;
            //right_crus.y=stageH-right_crus.height;
            right_crus.x = stageW * 0.7;
            right_crus.y = 0.6 * stageH;
            right_crus.width = stageW * 0.35;
            right_crus.height = stageW * 0.35;
            //right_crus.width=stageW*10/100;
            //right_crus.height=(stageH*6)/100;
            right_crus.name = "right_crus";
            right_crus.touchEnabled = true;
            left_crus.addEventListener(egret.TouchEvent.TOUCH_TAP, self.Leftplaygame, self);
            right_crus.addEventListener(egret.TouchEvent.TOUCH_TAP, self.Rightplaygame, self);
            //var runNum:number=1;
            //var interval:number=egret.setInterval(function () {
            //    if(runNum==1){
            //        self.socket.emit("game status",self.indexplayer.y/stageH*100);
            //        clearInterval(interval);}
            //    runNum++;
            //},self,6000);
            var runNum1 = 1;
            var interval1 = egret.setInterval(function () {
                if (runNum1 == 1) {
                }
                if (runNum1 == 10) {
                    clearInterval(interval1);
                }
            }, self, 6000);
        });
        this.socket.on('game over', function (data) {
            console.log('game over', data);
            //self.first:egret.Bitmap;
            //self.second:egret.Bitmap;
            //self.third:egret.Bitmap;
            if (data[0] >= data[1]) {
                if (data[0] >= data[2]) {
                    self.first = self.player;
                    if (data[1] < data[2]) {
                        self.second = self.player2;
                        self.third = self.player1;
                    }
                    else {
                        self.second = self.player1;
                        self.third = self.player2;
                    }
                }
                else {
                    self.second = self.player;
                    self.first = self.player2;
                    self.third = self.player1;
                }
            }
            else {
                self.first = self.player1;
                if (data[0] >= data[2]) {
                    self.second = self.player;
                    self.third = self.player2;
                }
                else {
                    self.third = self.player;
                    self.second = self.player2;
                }
            }
            self.threeminusAfter(self.first, self.second, self.third);
            switch (self.indexplayer) {
                case self.first:
                    self.placing = 1;
                    break;
                case self.second:
                    self.placing = 2;
                    break;
                case self.third:
                    self.placing = 3;
                    break;
                    other: break;
            }
        });
        this.socket.on('user left', function (data) {
            console.log('user left', data);
        });
        this.socket.emit("enter room", this.personal);
        var stageW = this.stage.stageWidth;
        self.stageW = stageW;
        var stageH = this.stage.stageHeight;
        self.stageH = stageH;
        var playernum = 0;
        this.removeChildren();
        this.addBgShape(stageW, stageH);
        var bg_gamebg = this.createBitmapByName("gamebg");
        this.addChild(bg_gamebg);
        bg_gamebg.x = 0;
        bg_gamebg.y = 0;
        bg_gamebg.width = stageW;
        bg_gamebg.height = stageH;
        var bg_xue = this.createBitmapByName("xue");
        this.addChild(bg_xue);
        bg_xue.x = 0;
        bg_xue.width = stageW;
        bg_xue.height = stageH * 2 / 5;
        var bg_xuedi = this.createBitmapByName("xuedi");
        this.addChild(bg_xuedi);
        bg_xuedi.x = 0;
        bg_xuedi.width = stageW;
        bg_xuedi.height = stageH * 2 / 5;
        var bg_m_start = this.createBitmapByName("m_start");
        this.addChild(bg_m_start);
        bg_m_start.x = stageW * 90 / 100;
        bg_m_start.y = (stageH * 2) / 100;
        bg_m_start.width = stageW * 7 / 100;
        bg_m_start.height = (stageH * 4.3) / 100;
        bg_m_start.name = "startmusic";
        bg_m_start.touchEnabled = true;
        var game_xuedi = this.createBitmapByName("gamexuedi");
        this.addChild(game_xuedi);
        game_xuedi.width = stageW;
        game_xuedi.height = 0.39 * stageH;
        game_xuedi.x = 0;
        game_xuedi.y = stageH - game_xuedi.height;
        game_xuedi.name = "game_xuedi";
        var gamesendbtn = this.createBitmapByName("gamesendbtn");
        this.addChild(gamesendbtn);
        gamesendbtn.width = stageW * 0.3;
        gamesendbtn.height = 0.08 * stageH;
        gamesendbtn.x = 0.7 * stageW;
        gamesendbtn.y = stageH - gamesendbtn.height - 0.01 * stageH;
        gamesendbtn.name = "gamesendbtn";
        gamesendbtn.touchEnabled = true;
        gamesendbtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            gamesendbtn.texture = RES.getRes("gamesendbtn1");
        }, this);
        gamesendbtn.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            gamesendbtn.texture = RES.getRes("gamesendbtn");
            if (!!txtinput.text) {
                this.socket.emit("new message", txtinput.text);
                var suijishu = [0.1 * stageH - 0.035 * stageH, 0.12 * stageH, 0.1 * stageH + 0.075 * stageH];
                var a = suijishu[parseInt(Math.random() * 3)];
                var msg = new egret.TextField();
                self.addChild(msg);
                msg.text = txtinput.text;
                msg.textColor = 0x000000;
                msg.textAlign = "center";
                msg.size = 20;
                // msg.x = x;
                msg.y = a;
                var runNum = 1;
                egret.Tween.get(msg, { loop: true }).to({ x: stageW }, 3000);
                var interval = egret.setInterval(function () {
                    if (runNum == 1) {
                        self.removeChild(msg);
                        clearInterval(interval);
                    }
                    runNum++;
                }, this, 8900);
                txtinput.text = "";
            }
        }, this);
        var txtinput = this.TextInput();
        var game_xuedi = this.createBitmapByName("gamexuedi");
        this.addChild(game_xuedi);
        game_xuedi.width = stageW;
        game_xuedi.height = 0.39 * stageH;
        game_xuedi.x = 0;
        game_xuedi.y = stageH - game_xuedi.height;
        game_xuedi.name = "game_xuedi";
        // var bh = this.BeginHeadImg(0.08 * stageW, 0.22 * stageH, 0.2 * stageW, 0.5 * stageH);
        //var bh1= this.BeginHeadImg(0.39*stageW,0.22*stageH,0.2*stageW,0.5*stageH);
        //var bh2= this.BeginHeadImg(0.73*stageW,0.22*stageH,0.2*stageW,0.5*stageH);
        // self.wlbc = self.WaitLight(-0.05 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
        self.wl1cb = self.WaitLight(0.26 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
        self.wl2bc = self.WaitLight(0.6 * stageW, 0.62 * stageH, 0.4 * stageW, 0.12 * stageH);
        // self.wsbc= self.WaitShadow(-0.05 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
        self.ws1bc = self.WaitShadow(0.26 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
        self.ws2bc = self.WaitShadow(0.6 * stageW, 0.68 * stageH, 0.4 * stageW, 0.07 * stageH);
        self.wjbc = self.WaitJoin(0.07 * stageW, 0.75 * stageH);
        self.wjbc.text = "";
        self.wj1bc = self.WaitJoin(0.39 * stageW, 0.75 * stageH);
        self.wj2bc = self.WaitJoin(0.76 * stageW, 0.75 * stageH);
        //var readylogo:egret.Bitmap = this.readylogo(0.07 * stageW, 0.6 * stageH, 0.3 * stageW, 0.14 * stageH);
        //readylogo.touchEnabled = true;
        //readylogo.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        //    readylogo.texture = RES.getRes("readying");
        //}, this);
        //self.jiaocheng();
        // leadsharebm=self.LeadShare();
        //事件
        bg_m_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.MusicStop, this);
        //监听对象状态
        //socket.on(){function (){
        // if  ()
        //}}
        //private shangchu duixiang准备开始(){}
        //socket.on(){function (){
        //    if(){
        // }
        //}}
        self.socket.emit("add robot");
    };
    ////dengdai 对象
    //    private bmp:egret.Bitmap;
    //    private bmp1:egret.Bitmap;
    //    private bmp2:egret.Bitmap;
    //    private wxtouxiang(headimgurl:string):void{
    //        //var imgLoader:egret.ImageLoader = new egret.ImageLoader;
    //        //imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
    //        //imgLoader.load(headimgurl);
    //        var stageW:number = this.stage.stageWidth;
    //        var stageH:number = this.stage.stageHeight;
    //        var personimg:egret.Bitmap = this.createBitmapByName("gamexuedi");
    //        this.addChild(personimg);
    //        personimg.texture=RES.getResByUrl(headimgurl,function(){},this,RES.ResourceItem.TYPE_IMAGE);
    //        personimg.width = stageW;
    //        personimg.height = 0.39 * stageH;
    //        personimg.x = 0;
    //        personimg.y = stageH - personimg.height;
    //        personimg.name = "game_xuedi";
    //    }
    //    private wxtouxiang1(headimgurl:string):void{
    //        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
    //        imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
    //        imgLoader.load(headimgurl);
    //    }
    //    private wxtouxiang2(headimgurl:string):void{
    //        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
    //        imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
    //        imgLoader.load(headimgurl);
    //    }
    //    imgLoadHandler(evt:egret.Event):void{
    //        var stageW:number = this.stage.stageWidth;
    //        var stageH:number = this.stage.stageHeight;
    //        var loader:egret.ImageLoader = evt.currentTarget;
    //        var bmd:egret.BitmapData = loader.data;
    //        var bmp:egret.Bitmap = new egret.Bitmap( bmd );
    //        this.addChild(bmp);
    //        bmp.x=0.08*stageW;
    //        bmp.y=0.22*stageH;
    //        bmp.width=0.2*stageW;
    //        bmp.height=0.5*stageH;
    //        this.bmp1=bmp;
    //    }
    //    imgLoadHandler1(evt:egret.Event):void{
    //        var stageW:number = this.stage.stageWidth;
    //        var stageH:number = this.stage.stageHeight;
    //        var loader:egret.ImageLoader = evt.currentTarget;
    //        var bmd:egret.BitmapData = loader.data;
    //        var bmp:egret.Bitmap = new egret.Bitmap( bmd );
    //        this.addChild(bmp);
    //        bmp.x=0.39*stageW;
    //        bmp.y=0.22*stageH;
    //        bmp.width=0.2*stageW;
    //        bmp.height=0.5*stageH;
    //        this.bmp2=bmp;
    //    }
    //    imgLoadHandler2(evt:egret.Event):void{
    //        var stageW:number = this.stage.stageWidth;
    //        var stageH:number = this.stage.stageHeight;
    //        var stageW:number = this.stage.stageWidth;
    //        var stageH:number = this.stage.stageHeight;
    //        var loader:egret.ImageLoader = evt.currentTarget;
    //        var bmd:egret.BitmapData = loader.data;
    //        var bmp:egret.Bitmap = new egret.Bitmap( bmd );
    //        this.addChild(bmp);
    //        bmp.x=0.73*stageW;
    //        bmp.y=0.22*stageH;
    //        bmp.width=0.2*stageW;
    //        bmp.height=0.5*stageH;
    //        this.bmp=bmp;
    //    }
    p.WaitLight = function (x, y, width, height) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var waitlight = this.createBitmapByName("waitlight");
        this.addChild(waitlight);
        waitlight.width = width;
        waitlight.height = height;
        waitlight.x = x;
        waitlight.y = y;
        waitlight.name = "waitlight";
        egret.Tween.get(waitlight, { loop: true }).to({ alpha: 0.5 }, 1000).to({ alpha: 1 }, 1000);
        return waitlight;
    };
    p.WaitShadow = function (x, y, width, height) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var waitshadow = this.createBitmapByName("waitshadow");
        this.addChild(waitshadow);
        waitshadow.width = width;
        waitshadow.height = height;
        waitshadow.x = x;
        waitshadow.y = y;
        waitshadow.name = "waitshadow";
        return waitshadow;
    };
    p.WaitJoin = function (x, y) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var backwards = new egret.TextField();
        this.addChild(backwards);
        backwards.text = "等待加入...";
        backwards.textColor = 0x000000;
        backwards.textAlign = "center";
        backwards.size = 20;
        backwards.x = x;
        backwards.y = y;
        //egret.Tween.get(backwards).to( { text:"2" }, 1000, egret.Ease.sineIn ).to( { text:"1" }, 1000, egret.Ease.sineIn ).to( { alpha:0 }, 1000, egret.Ease.sineIn );
        //this.addChild(this.zhezhao());
        return backwards;
    };
    p.PersonImg = function (x, y, width, height, url) {
        var self = this;
        var img;
        RES.getResByUrl(url, function (data, url) {
            var result = new egret.Bitmap();
            result.texture = data;
            result.width = 64;
            result.height = 64;
            result.x = x;
            result.y = y;
            self.addChild(result);
            img = result;
            self.personArry.push(result);
        }, this, "image");
        return img;
    };
    p.BeginHeadImg = function (x, y, width, height) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var wmaozi = this.createBitmapByName("w_maozi");
        this.addChild(wmaozi);
        wmaozi.width = width;
        wmaozi.height = height;
        wmaozi.x = x;
        wmaozi.y = y;
        wmaozi.name = "wmaozi";
        return wmaozi;
    };
    p.ReadyHeadImg = function (x, y, width, height) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var zmaozi = this.createBitmapByName("z_maozi");
        this.addChild(zmaozi);
        zmaozi.width = width;
        zmaozi.height = height;
        zmaozi.x = x;
        zmaozi.y = y;
        zmaozi.name = "waitlight";
        return zmaozi;
    };
    //准备logo
    p.Readylogo = function (x, y, width, height, img) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var readylogo = this.createBitmapByName(img);
        this.addChild(readylogo);
        readylogo.width = width;
        readylogo.height = height;
        readylogo.x = x;
        readylogo.y = y;
        readylogo.name = img;
        readylogo.touchEnabled = true;
        //readylogo.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
        //    readylogo.texture=RES.getRes("readyed");
        //},this);
        return readylogo;
    };
    p.changimg = function (img, imgname) {
        img.texture = RES.getRes(imgname);
    };
    p.DaoShu = function () {
        var self = this;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var backwards = new egret.TextField();
        this.addChild(backwards);
        backwards.text = "3";
        backwards.textColor = 0xffffff;
        backwards.textAlign = "center";
        backwards.size = 230;
        backwards.x = stageW - backwards.width >> 1;
        backwards.y = (stageH - backwards.height >> 1) - 150;
        egret.Tween.get(backwards).to({ text: "2" }, 1000, egret.Ease.sineIn).to({ text: "1" }, 1000, egret.Ease.sineIn).to({ alpha: 0 }, 1000, egret.Ease.sineIn);
        setTimeout(function () {
            self.socket.emit('game status', self.indexplayer.y / stageH * 100);
        }, 6000);
        //this.addChild(this.zhezhao());
        //var runNum2=1;
        //var interval2:number=egret.setInterval(function () {
        //    if(runNum2>=2&&runNum2<=8) {
        self.autorun();
        //    }
        //    //if(runNum2=11){
        //    //    clearInterval(interval);}
        //    runNum2++;
        //},self,1000);
        var runNum = 1;
        var interval = egret.setInterval(function () {
            if (runNum == 9) {
                self.TakePicture(self.placing);
                clearInterval(interval);
            }
            runNum++;
        }, this, 1000);
        return backwards;
    };
    //开始音乐和结束音乐
    p.MusicStop = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.removeChild(this.getChildByName("startmusic"));
        var bg_m_stop = this.createBitmapByName("m_stop");
        this.addChild(bg_m_stop);
        bg_m_stop.x = stageW * 90 / 100;
        bg_m_stop.y = (stageH * 2) / 100;
        bg_m_stop.width = stageW * 7 / 100;
        bg_m_stop.height = (stageH * 4.3) / 100;
        bg_m_stop.name = "stopmusic";
        this.channel.stop();
        bg_m_stop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.MusicPlay, this);
        bg_m_stop.touchEnabled = true;
    };
    p.MusicPlay = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.removeChild(this.getChildByName("stopmusic"));
        var bg_m_start = this.createBitmapByName("m_start");
        this.addChild(bg_m_start);
        bg_m_start.x = stageW * 90 / 100;
        bg_m_start.y = (stageH * 2) / 100;
        bg_m_start.width = stageW * 7 / 100;
        bg_m_start.height = (stageH * 4.3) / 100;
        bg_m_start.name = "startmusic";
        this.channel = this.sound.play(0, 1);
        bg_m_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.MusicStop, this);
        bg_m_start.touchEnabled = true;
    };
    p.BeginGame = function () {
    };
    p.laorenChange = function (event) {
        this.i++;
        var laoren = this.getChildByName("sdlr")(egret.Bitmap);
        laoren.texture = RES.getRes("laoren" + this.i.toString());
    };
    //按不同赛道创建玩家
    p.addplayer = function (track) {
        var player;
        switch (track) {
            case 0:
                {
                    this.player = this.playerSpirit(0.525);
                    return;
                    break;
                }
            case 1:
                {
                    this.player1 = this.playerSpirit(0.568);
                    break;
                }
            case 2:
                {
                    this.player2 = this.playerSpirit(0.6);
                    break;
                }
                other: break;
        }
    };
    //玩家对象创建
    p.playerSpirit = function (x) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var laoren = this.createBitmapByName("gamebg");
        this.addChild(laoren);
        //laoren.width=stageW;
        //laoren.height=stageH;
        laoren.anchorOffsetX = laoren.width / 2;
        laoren.anchorOffsetY = laoren.height / 2;
        laoren.scaleX = 0.07;
        laoren.scaleY = 0.07;
        laoren.x = stageW * x;
        laoren.y = stageH * 0.12; //-laoren.height*laoren.scaleY*0.5;
        laoren.texture = RES.getRes("laoren1");
        laoren.name = "sdlr1";
        //this.playhabition= egret.Tween.get(laoren,{loop:true}).to( {texture:RES.getRes("laoren2") }, 100, egret.Ease.sineIn ).to( {texture:RES.getRes("laoren3") }, 100, egret.Ease.sineIn ).to( {texture:RES.getRes("laoren4") }, 100, egret.Ease.sineIn ).to( {texture:RES.getRes("laoren5") }, 100, egret.Ease.sineIn ).to( {texture:RES.getRes("laoren1") }, 100, egret.Ease.sineIn );
        this.timer = new egret.Timer(100, -1);
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            this.i++;
            laoren.texture = RES.getRes("laoren" + this.i.toString());
            if (this.i == 5) {
                this.i = 0;
            }
        }, this);
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
        //    if(laoren.scaleX<0.3)
        //    {
        //        laoren.scaleX=laoren.scaleX+0.01;
        //        laoren.scaleY=laoren.scaleY+0.01;
        //    }
        //    if(laoren.x>=0.35*stageW)
        //    {
        //        laoren.x=laoren.x-stageW*0.004533;
        //    }
        //    if(laoren.y<=1.03*stageH)
        //    {
        //        laoren.y=laoren.y+stageH*0.03033;
        //    }
        //    //laoren.texture=RES.getRes("laoren"+this.i.toString())
        //    //console.log("laoren"+this.i.toString());
        //},this);
        //laoren.addEventListener(egret.TouchEvent.TOUCH_TAP,this.laorenChange,this);
        laoren.touchEnabled = true;
        return laoren;
    };
    p.Leftplaygame = function (event) {
        var self = this;
        var stageW = self.stage.stageWidth;
        var stageH = self.stage.stageHeight;
        switch (self.track) {
            case 0:
                self.indexplayer = self.player;
                break;
            case 1:
                self.indexplayer = self.player1;
                break;
            case 2:
                self.indexplayer = self.player2;
                break;
        }
        if (self.clicknumber >= 0 && self.clicknumber % 2 == 0 && self.LeftOrRight == "right") {
            switch (self.track + 1) {
                case 1:
                    {
                        if (self.indexplayer.scaleX < 0.3) {
                            self.indexplayer.scaleX = self.indexplayer.scaleX + 0.01;
                            self.indexplayer.scaleY = self.indexplayer.scaleY + 0.01;
                        }
                        if (self.indexplayer.x >= 0.35 * stageW) {
                            self.indexplayer.x = self.indexplayer.x - stageW * 0.004533;
                        }
                        if (self.indexplayer.y <= 1.03 * stageH) {
                            self.indexplayer.y = self.indexplayer.y + stageH * 0.03033;
                        }
                        self.clicknumber++;
                        self.LeftOrRight = "left";
                        break;
                    }
                case 2:
                    {
                        if (self.indexplayer.scaleX < 0.3) {
                            self.indexplayer.scaleX = self.player.scaleX + 0.01;
                            self.indexplayer.scaleY = self.player.scaleY + 0.01;
                        }
                        if (self.indexplayer.x <= 0.735 * stageW) {
                            self.indexplayer.x = self.player.x + stageW * 0.007533;
                        }
                        if (self.indexplayer.y <= 1.03 * stageH) {
                            self.indexplayer.y = self.indexplayer.y + stageH * 0.03033;
                        }
                        self.clicknumber++;
                        self.LeftOrRight = "left";
                        break;
                    }
                case 3:
                    {
                        if (self.indexplayer.scaleX < 0.3) {
                            self.indexplayer.scaleX = self.indexplayer.scaleX + 0.01;
                            self.indexplayer.scaleY = self.indexplayer.scaleY + 0.01;
                        }
                        if (self.indexplayer.x <= 1.1 * stageW) {
                            self.indexplayer.x = self.indexplayer.x + stageW * 0.020033;
                        }
                        if (self.indexplayer.y <= 1.03 * stageH) {
                            self.indexplayer.y = self.indexplayer.y + stageH * 0.03033;
                        }
                        ;
                        self.clicknumber++;
                        self.LeftOrRight = "left";
                        break;
                    }
                    other: break;
            }
        }
        else {
            if (self.LeftOrRight == "left") {
                if (!!self.player)
                    self.indexplayer.texture = RES.getRes("laoren_pj");
            }
            self.clicknumber++;
            self.LeftOrRight = "left";
        }
    };
    p.Rightplaygame = function (event) {
        var self = this;
        var stageW = self.stage.stageWidth;
        var stageH = self.stage.stageHeight; //this.stageH;
        if (self.clicknumber >= 0 && self.clicknumber % 2 == 0 && self.LeftOrRight == "left") {
            switch (self.track + 1) {
                case 1:
                    {
                        if (self.indexplayer.scaleX < 0.3) {
                            self.indexplayer.scaleX = self.indexplayer.scaleX + 0.01;
                            self.indexplayer.scaleY = self.indexplayer.scaleY + 0.01;
                        }
                        if (self.indexplayer.x >= 0.35 * stageW) {
                            self.indexplayer.x = self.indexplayer.x - stageW * 0.004533;
                        }
                        if (self.indexplayer.y <= 1.03 * stageH) {
                            self.indexplayer.y = self.indexplayer.y + stageH * 0.03033;
                        }
                        self.clicknumber++;
                        self.LeftOrRight = "right";
                        break;
                    }
                case 2:
                    {
                        if (self.indexplayer.scaleX < 0.3) {
                            self.indexplayer.scaleX = self.indexplayer.scaleX + 0.01;
                            self.indexplayer.scaleY = self.indexplayer.scaleY + 0.01;
                        }
                        if (self.indexplayer.x <= 0.735 * stageW) {
                            self.indexplayer.x = self.indexplayer.x + stageW * 0.007533;
                        }
                        if (self.indexplayer.y <= 1.03 * stageH) {
                            self.indexplayer.y = self.indexplayer.y + stageH * 0.03033;
                        }
                        self.clicknumber++;
                        self.LeftOrRight = "right";
                        break;
                    }
                case 3:
                    {
                        if (self.indexplayer.scaleX < 0.3) {
                            self.indexplayer.scaleX = self.indexplayer.scaleX + 0.01;
                            self.indexplayer.scaleY = self.indexplayer.scaleY + 0.01;
                        }
                        if (self.indexplayer.x <= 1.1 * stageW) {
                            self.indexplayer.x = self.indexplayer.x + stageW * 0.020033;
                        }
                        if (self.indexplayer.y <= 1.03 * stageH) {
                            self.indexplayer.y = self.indexplayer.y + stageH * 0.03033;
                        }
                        ;
                        self.clicknumber++;
                        self.LeftOrRight = "right";
                        break;
                    }
                    other: break;
            }
        }
        else {
            if (self.LeftOrRight == "right") {
                if (!!self.player)
                    self.indexplayer.texture = RES.getRes("laoren_pj");
            }
            self.clicknumber++;
            self.LeftOrRight = "right";
        }
    };
    p.autorun = function () {
        var self = this;
        var stageW = self.stage.stageWidth;
        var stageH = self.stage.stageHeight; //this.stageH;0.35  0.735  1.1   0.004533  0.007533  0.020033
        if (self.track == 0) {
            //if (self.player1.scaleX < 0.3) {
            //    self.player1.scaleX = self.player1.scaleX + 0.01;
            //    self.player1.scaleY = self.player1.scaleY + 0.01;
            //}
            //if (self.player1.x >= 0.735 * stageW) {
            //    self.player1.x = self.player1.x + stageW * 0.01;
            //}
            //if (self.player1.y <= 1.03 * stageH) {
            //    self.player1.y = self.player1.y + stageH * 0.03033;
            //}
            self.player1.scaleX = 0.07;
            self.player1.scaleY = 0.07;
            //self.player1.x=this.player1.x+0.12*stageW;
            egret.Tween.get(this.player1).wait(3000).to({ y: stageH, x: stageW * 0.695, scaleX: 0.25, scaleY: 0.25 }, 9500);
            //if(self.player2.scaleX<0.3)
            //{
            //    self.player2.scaleX=self.player2.scaleX+0.01;
            //    self.player2.scaleY=self.player2.scaleY+0.01;
            //}
            //if(self.player2.x<=1.1*stageW)
            //{
            //    self.player2.x=self.player1.x+stageW*0.025033;
            //}
            //if(self.player2.y<=1.03*stageH)
            //{
            //    self.player2.y=self.player1.y+stageH*0.03033;
            //}
            self.player2.scaleX = 0.07;
            self.player2.scaleY = 0.07;
            //self.player2.x=this.player2.x+0.12*stageW;
            egret.Tween.get(this.player2).wait(3000).to({ y: stageH, x: stageW * 1, scaleX: 0.25, scaleY: 0.25 }, 9500);
        }
        else if (self.track == 1) {
            //if (self.player.scaleX < 0.3) {
            //    self.player.scaleX = self.player1.scaleX + 0.01;
            //    self.player.scaleY = self.player1.scaleY + 0.01;
            //}
            //if (self.player.x >= 0.35 * stageW) {
            //    self.player.x = self.player1.x - stageW * 0.004533;
            //}
            //if (self.player.y <= 1.03 * stageH) {
            //    self.player.y = self.player1.y + stageH * 0.03033;
            //}
            self.player.scaleX = 0.07;
            self.player.scaleY = 0.07;
            //self.player2.x=this.player2.x+0.12*stageW;
            egret.Tween.get(this.player).wait(3000).to({ y: stageH, x: stageW * 0.30, scaleX: 0.25, scaleY: 0.25 }, 9500);
            //if(self.player2.scaleX<0.3)
            //{
            //    self.player2.scaleX=self.player2.scaleX+0.01;
            //    self.player2.scaleY=self.player2.scaleY+0.01;
            //}
            //if(self.player2.x<=1.1*stageW)
            //{
            //    self.player2.x=self.player1.x+stageW*0.020033;
            //}
            //if(self.player2.y<=1.03*stageH)
            //{
            //    self.player2.y=self.player1.y+stageH*0.03033;
            //}
            self.player2.scaleX = 0.07;
            self.player2.scaleY = 0.07;
            //self.player2.x=this.player2.x+0.12*stageW;
            egret.Tween.get(this.player2).wait(3000).to({ y: stageH, x: stageW * 1, scaleX: 0.25, scaleY: 0.25 }, 9500);
        }
        else {
            //if (self.player.scaleX < 0.3) {
            //    self.player.scaleX = self.player.scaleX + 0.01;
            //    self.player.scaleY = self.player.scaleY + 0.01;
            //}
            //if (self.player.x >= 0.35 * stageW) {
            //    self.player.x = self.player.x - stageW * 0.004533;
            //}
            //if (self.player.y <= 1.03 * stageH) {
            //    self.player.y = self.player.y + stageH * 0.03033;
            //}
            self.player.scaleX = 0.07;
            self.player.scaleY = 0.07;
            //self.player2.x=this.player2.x+0.12*stageW;
            egret.Tween.get(this.player).wait(3000).to({ y: 0.98 * stageH, x: stageW * 0.305, scaleX: 0.25, scaleY: 0.25 }, 9500);
            //if(self.player1.scaleX<0.3)
            //{
            //    self.player1.scaleX=self.player2.scaleX+0.01;
            //    self.player1.scaleY=self.player2.scaleY+0.01;
            //}
            //if(self.player1.x<=0.75*stageW)
            //{
            //    self.player1.x=self.player1.x+stageW*0.007533;
            //}
            //if(self.player1.y<=1.03*stageH)
            //{
            //    self.player1.y=self.player1.y+stageH*0.03033;
            //}
            self.player1.scaleX = 0.07;
            self.player1.scaleY = 0.07;
            //self.player1.x=this.player1.x+0.12*stageW;
            egret.Tween.get(this.player1).wait(3000).to({ y: 0.97 * stageH, x: stageW * 0.703, scaleX: 0.25, scaleY: 0.25 }, 9500);
        }
    };
    //输入框 和 输入框背景
    p.TextInput = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var txInput = new egret.TextField;
        txInput.type = egret.TextFieldType.INPUT;
        txInput.width = 0.75 * stageW;
        txInput.height = 0.08 * stageH;
        txInput.x = 0.01 * stageW;
        txInput.y = stageH - txInput.height - 0.01 * stageH;
        txInput.textColor = 0x000000;
        //txInput.textAlign="lest";
        txInput.verticalAlign = egret.VerticalAlign.MIDDLE;
        txInput.fontFamily = "Microsoft YaHei!";
        txInput.touchEnabled = true;
        var input_bg;
        input_bg = this.layTxBg(txInput);
        txInput.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            input_bg.texture = RES.getRes("inputbg");
            //this.getChildByName("inputbg").alpha=0;
        }, this);
        /// 注意_container是事先建立好的一个显示容器，即 egret.Sprite，并且已经添加到显示列表中
        this.addChild(txInput);
        //this.layTxBg(txInput);
        return txInput;
    };
    p.layTxBg = function (tx) {
        //var shp:egret.Shape = new egret.Shape;
        //shp.graphics.beginFill(0xffffff);
        //shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        //shp.graphics.drawRoundRect(tx.x, tx.y, tx.width, tx.height,15,15)
        //shp.graphics.endFill();
        //shp.alpha=1;
        //this.addChild(shp);
        var input_bg = this.createBitmapByName("inputpic");
        this.addChild(input_bg);
        input_bg.x = tx.x;
        input_bg.y = tx.y;
        input_bg.width = tx.width;
        input_bg.height = tx.height;
        input_bg.name = "inputbg";
        return input_bg;
    };
    //遮罩
    p.zhezhao = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var z_zhao = new egret.Shape;
        z_zhao.graphics.beginFill(0x000000);
        z_zhao.graphics.drawRect(0, 0, stageW, stageH);
        z_zhao.graphics.endFill();
        z_zhao.alpha = 0.8;
        return z_zhao;
    };
    //规则
    p.guize = function () {
        var self = this;
        //黑色半透明背景
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var bg_gamebg = this.createBitmapByName("gamebg");
        this.addChild(bg_gamebg);
        bg_gamebg.x = 0;
        bg_gamebg.y = 0;
        bg_gamebg.width = stageW;
        bg_gamebg.height = stageH;
        var black_bg = this.zhezhao();
        this.addChild(black_bg);
        var gz_guanbi = this.createBitmapByName("guanbi");
        this.addChild(gz_guanbi);
        gz_guanbi.x = stageW * 0.85;
        gz_guanbi.y = stageH * 0.05;
        gz_guanbi.width = stageW * 0.08;
        gz_guanbi.height = stageH * 0.052;
        gz_guanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            this.removeChildren();
            self.channel.stop();
            self.createGameScene();
        }, this);
        gz_guanbi.touchEnabled = true;
        var z_zhaokuang = this.createBitmapByName("gzkuang");
        this.addChild(z_zhaokuang);
        z_zhaokuang.x = stageW * 1 / 10 - 15;
        z_zhaokuang.y = stageH * 0.15 - 40;
        z_zhaokuang.width = stageW * 0.8 + 30;
        z_zhaokuang.height = stageH * 0.8 + 40;
        z_zhaokuang.touchEnabled = true;
        //边框遮罩
        var z_zhao = new egret.Shape;
        z_zhao.graphics.beginFill(0x000000);
        z_zhao.graphics.drawRect(stageW * 1 / 10, stageH * 0.15, stageW * 0.8, stageH * 0.8 - 10);
        z_zhao.graphics.endFill();
        z_zhao.graphics.lineStyle(20, 0x000000);
        this.addChild(z_zhao);
        z_zhao.touchEnabled = true;
        //底层规则页
        var huodongguize = this.createBitmapByName("huodongguize");
        this.addChild(huodongguize);
        huodongguize.x = stageW * 1 / 10;
        huodongguize.y = stageH * 0.15 + 20;
        huodongguize.width = stageW * 0.8;
        huodongguize.height = stageH + stageH * 0.65;
        huodongguize.mask = z_zhao;
        huodongguize.touchEnabled = true;
        var start_y = 0;
        var end_y = 0;
        var move_y = 0;
        huodongguize.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            start_y = e.stageY;
        }, this);
        huodongguize.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            end_y = e.stageY;
            huodongguize.y = huodongguize.y + (move_y - start_y);
            if (huodongguize.y > stageH * 0.15) {
                huodongguize.y = stageH * 0.15 + 15;
            }
            if (huodongguize.y + huodongguize.height - stageH * 0.15 < stageH * 0.8 - 40) {
                huodongguize.y = -(huodongguize.height - 0.9 * stageH + 40);
            }
            console.log(huodongguize.y);
        }, this);
        huodongguize.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            move_y = e.stageY;
        }, this);
    };
    //进入规则或者操作动画
    p.inguize = function () {
        var mark = 50;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        0;
        var timer = new egret.Timer(100, 5);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            this.getChildByName("bg_dingbu").y = this.getChildByName("bg_dingbu").y - 50;
            this.getChildByName("bg_xue").y = this.getChildByName("bg_xue").y - 50;
            this.getChildByName("bg_biaoti").y = this.getChildByName("bg_biaoti").y - 50;
            this.getChildByName("bg_yundonghui").y = this.getChildByName("bg_yundonghui").y - 50;
            this.getChildByName("bg_baoguo").alpha = 0;
            this.getChildByName("bg_laoren").alpha = 0;
            this.getChildByName("bg_lu").alpha = 0;
            this.getChildByName("bg_feiting").alpha = 0;
            this.getChildByName("bg_Huankouzi").x = this.getChildByName("bg_Huankouzi").x + 50;
            this.getChildByName("bg_Hongkouzi").x = this.getChildByName("bg_Hongkouzi").x - 50;
            //this.getChildByName("bg_m_start").y=this.getChildByName("startmusic").y-50;
            this.getChildByName("bg_btn_middle").y = this.getChildByName("bg_btn_middle").y + 50;
            this.getChildByName("bg_btn_left").y = this.getChildByName("bg_btn_left").y + 50;
            this.getChildByName("bg_btn_right").y = this.getChildByName("bg_btn_right").y + 50;
            this.getChildByName("bg_dibu").y = this.getChildByName("bg_dibu").y + 50;
            mark = mark + 50;
        }, this);
        //this.removeChildren();
    };
    //教程
    p.jiaocheng = function () {
        //黑色半透明背景
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var bg_gamebg = this.createBitmapByName("gamebg");
        this.addChild(bg_gamebg);
        bg_gamebg.x = 0;
        bg_gamebg.y = 0;
        bg_gamebg.width = stageW;
        bg_gamebg.height = stageH;
        //var black_bg=this.zhezhao();
        //this.addChild(black_bg);
        var jc_bg = this.createBitmapByName("jiaochengbg");
        this.addChild(jc_bg);
        jc_bg.x = 0;
        jc_bg.y = 0;
        jc_bg.width = stageW;
        jc_bg.height = stageH;
        jc_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            //this.removeChildren();
            //this.channel.stop();
            //this.createGameScene();
        }, this);
        jc_bg.touchEnabled = true;
        var clickleft = this.createBitmapByName("clickleft");
        this.addChild(clickleft);
        clickleft.x = stageW * 0.17;
        clickleft.y = stageH * 0.2;
        clickleft.width = stageW * 0.2;
        clickleft.height = stageH * 0.04;
        var clickright = this.createBitmapByName("clickright");
        this.addChild(clickright);
        clickright.x = stageW * 0.62;
        clickright.y = stageH * 0.2;
        clickright.width = stageW * 0.2;
        clickright.height = stageH * 0.04;
        clickright.alpha = 0;
        var clickarc = this.createBitmapByName("clickarc");
        this.addChild(clickarc);
        clickarc.width = stageW * 0.3;
        clickarc.height = stageH * 0.17;
        clickarc.x = 0.1 * stageW + clickarc.width / 2;
        clickarc.y = 0.28 * stageH + clickarc.height / 2;
        clickarc.anchorOffsetX = clickarc.width / 2;
        clickarc.anchorOffsetY = clickarc.height / 2;
        clickarc.scaleX = 0;
        clickarc.scaleY = 0;
        var clickarc_r = this.createBitmapByName("clickarc");
        this.addChild(clickarc_r);
        clickarc_r.width = stageW * 0.3;
        clickarc_r.height = stageH * 0.17;
        clickarc_r.x = 0.68 * stageW;
        clickarc_r.y = 0.28 * stageH + clickarc_r.height / 2;
        clickarc_r.anchorOffsetX = clickarc_r.width / 2;
        clickarc_r.anchorOffsetY = clickarc_r.height / 2;
        clickarc_r.scaleX = 0;
        clickarc_r.scaleY = 0;
        var leadhand = this.createBitmapByName("leadhand1");
        this.addChild(leadhand);
        leadhand.x = stageW * 0.2;
        leadhand.y = stageH * 0.31;
        leadhand.width = stageW * 0.3;
        leadhand.height = stageH * 0.18;
        var jiaocheng_jt = this.createBitmapByName("jiaochengjt");
        this.addChild(jiaocheng_jt);
        jiaocheng_jt.width = stageW * 0.05;
        jiaocheng_jt.height = stageH * 0.05;
        jiaocheng_jt.x = stageW * 0.5 - stageW * 0.05 / 2;
        jiaocheng_jt.y = stageH * 0.6;
        var clickout = this.createBitmapByName("clickout");
        this.addChild(clickout);
        clickout.width = stageW * 0.28;
        clickout.height = stageH * 0.08;
        clickout.x = stageW - clickout.width - 20;
        clickout.y = 0.05 * stageH;
        clickout.touchEnabled = true;
        clickout.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //this.removeChildren();
            //this.channel.stop();
            //this.createGameScene();
            this.removeChild(bg_gamebg);
            this.removeChild(jc_bg);
            this.removeChild(clickleft);
            this.removeChild(clickright);
            this.removeChild(clickarc);
            this.removeChild(clickarc_r);
            this.removeChild(leadhand);
            this.removeChild(jiaocheng_jt);
            this.removeChild(jiaochengtxt);
            this.removeChild(jiaochengbtn);
            this.removeChild(clickout);
            this.player1 = new egret.Bitmap;
            this.indexReadyLogo.texture = RES.getRes("readyed");
            this.socket.emit('ready', this.track);
        }, this);
        //动画
        egret.Tween.get(jiaocheng_jt, { loop: true }).to({ y: 0.7 * stageH, alpha: 0 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(clickleft, { loop: true }).to({ alpha: 1 }, 1000).to({ alpha: 0 }, 500).wait(1400);
        egret.Tween.get(clickright, { loop: true }).wait(1500).to({ alpha: 1 }, 900).to({ alpha: 0 }, 500);
        egret.Tween.get(leadhand, { loop: true }).to({ texture: RES.getRes("leadhand2") }, 500, egret.Ease.sineIn).to({ texture: RES.getRes("leadhand1") }, 500, egret.Ease.sineIn).to({ x: 0.65 * stageW }, 500).to({ texture: RES.getRes("leadhand2") }, 500, egret.Ease.sineIn).to({ texture: RES.getRes("leadhand1") }, 400, egret.Ease.sineIn).wait(500);
        egret.Tween.get(clickarc, { loop: true }).wait(500).to({ scaleX: 1, scaleY: 1, alpha: 0 }, 500, egret.Ease.sineIn).wait(1000).to({ scaleX: 1, scaleY: 1, alpha: 0 }, 400, egret.Ease.sineIn).wait(500);
        egret.Tween.get(clickarc_r, { loop: true }).wait(2000).to({ scaleX: 1, scaleY: 1, alpha: 0 }, 400, egret.Ease.sineIn).wait(500);
        this.addplayer(1);
        this.player1.scaleX = 0.2;
        this.player1.scaleY = 0.2;
        this.player1.x = this.player1.x + 0.12 * stageW;
        egret.Tween.get(this.player1).to({ y: stageH, alpha: 0 }, 6000);
        var jiaochengtxt = this.createBitmapByName("jctxt");
        this.addChild(jiaochengtxt);
        jiaochengtxt.width = stageW * 0.6;
        jiaochengtxt.height = stageH * 0.13;
        jiaochengtxt.x = 0.5 * stageW; //+jiaochengtxt.width/2;
        jiaochengtxt.y = 0.78 * stageH; //+jiaochengtxt.height/2;
        jiaochengtxt.anchorOffsetX = jiaochengtxt.width / 2;
        jiaochengtxt.anchorOffsetY = jiaochengtxt.height / 2;
        jiaochengtxt.alpha = 0;
        egret.Tween.get(jiaochengtxt).wait(2800).to({ alpha: 1 }, 500);
        var jiaochengbtn = this.createBitmapByName("jcbtn");
        this.addChild(jiaochengbtn);
        jiaochengbtn.width = stageW * 0.3;
        jiaochengbtn.height = stageH * 0.05;
        jiaochengbtn.x = 0.5 * stageW;
        jiaochengbtn.y = 0.885 * stageH;
        jiaochengbtn.anchorOffsetX = jiaochengbtn.width / 2;
        jiaochengbtn.anchorOffsetY = jiaochengbtn.height / 2;
        jiaochengbtn.touchEnabled = true;
        jiaochengbtn.alpha = 0;
        egret.Tween.get(jiaochengbtn).wait(3500).to({ alpha: 1 }, 500);
        jiaochengbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //this.removeChildren();
            //this.channel.stop();
            //this.createGameScene();
            this.removeChild(bg_gamebg);
            this.removeChild(jc_bg);
            this.removeChild(clickleft);
            this.removeChild(clickright);
            this.removeChild(clickarc);
            this.removeChild(clickarc_r);
            this.removeChild(leadhand);
            this.removeChild(jiaocheng_jt);
            this.removeChild(jiaochengtxt);
            this.removeChild(jiaochengbtn);
            this.removeChild(clickout);
            this.player1 = new egret.Bitmap;
            this.indexReadyLogo.texture = RES.getRes("readyed");
            this.socket.emit('ready', this.track);
        }, this);
    };
    //游戏结束获奖
    p.gameover = function () {
        var n = this;
        var shareObj = {
            title: '圣诞跑PK我跑完全程，赢得了超级礼券',
            desc: 'you can you up',
            link: window.location.href,
            imgUrl: "http://" + window.location.hostname + "/biz/xmas_s01e01/resource/images/share_icon.png" // 分享图标
        };
        //此处为添加roomId  分享链接
        var bodyMenuShareTimeline = new BodyMenuShareTimeline();
        bodyMenuShareTimeline.title = shareObj.title;
        bodyMenuShareTimeline.link = shareObj.link;
        bodyMenuShareTimeline.imgUrl = shareObj.imgUrl;
        bodyMenuShareTimeline.success = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享朋友圈成功", "share", "分享", 1]);
            n.onShareSuccess();
        };
        bodyMenuShareTimeline.cancel = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享朋友圈取消", "share", "分享", 1]);
        };
        bodyMenuShareTimeline.fail = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享朋友圈失败", "share", "分享", 1]);
        };
        wx.onMenuShareTimeline(bodyMenuShareTimeline);
        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        bodyMenuShareAppMessage.title = shareObj.title;
        bodyMenuShareAppMessage.desc = shareObj.desc;
        bodyMenuShareAppMessage.link = shareObj.link;
        bodyMenuShareAppMessage.imgUrl = shareObj.imgUrl;
        bodyMenuShareAppMessage.success = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享给朋友成功", "share", "分享", 1]);
            n.onShareSuccess();
        };
        bodyMenuShareAppMessage.cancel = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享给朋友取消", "share", "分享", 1]);
        };
        bodyMenuShareAppMessage.fail = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享给朋友失败", "share", "分享", 1]);
        };
        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
        var bodyMenuShareQQ = new BodyMenuShareQQ();
        bodyMenuShareQQ.title = shareObj.title;
        bodyMenuShareQQ.desc = shareObj.desc;
        bodyMenuShareQQ.link = shareObj.link;
        bodyMenuShareQQ.imgUrl = shareObj.imgUrl;
        bodyMenuShareQQ.success = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享到QQ成功", "share", "分享", 1]);
            n.onShareSuccess();
        };
        bodyMenuShareQQ.cancel = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享到QQ取消", "share", "分享", 1]);
        };
        bodyMenuShareQQ.fail = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享到QQ失败", "share", "分享", 1]);
        };
        wx.onMenuShareQQ(bodyMenuShareQQ);
        var bodyMenuShareWeibo = new BodyMenuShareWeibo();
        bodyMenuShareWeibo.title = shareObj.title;
        bodyMenuShareWeibo.desc = shareObj.desc;
        bodyMenuShareWeibo.link = shareObj.link;
        bodyMenuShareWeibo.imgUrl = shareObj.imgUrl;
        bodyMenuShareWeibo.success = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享到微博成功", "share", "分享", 1]);
            n.onShareSuccess();
        };
        bodyMenuShareWeibo.cancel = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享到微博取消", "share", "分享", 1]);
        };
        bodyMenuShareWeibo.fail = function () {
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "分享到微博失败", "share", "分享", 1]);
        };
        wx.onMenuShareWeibo(bodyMenuShareWeibo);
        //黑色半透明背景
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var bg_gamebg = this.createBitmapByName("gamebg");
        this.addChild(bg_gamebg);
        bg_gamebg.x = 0;
        bg_gamebg.y = 0;
        bg_gamebg.width = stageW;
        bg_gamebg.height = stageH;
        var black_bg = this.zhezhao();
        this.addChild(black_bg);
        var wintxt = this.createBitmapByName("wintxt1");
        this.addChild(wintxt);
        wintxt.x = 0.275 * stageW;
        wintxt.y = 0.02 * stageH;
        wintxt.width = stageW * 0.45;
        wintxt.height = stageH * 0.11;
        var wineggbg = this.createBitmapByName("egg_bg1");
        this.addChild(wineggbg);
        wineggbg.width = stageW * 0.7;
        wineggbg.height = stageH * 0.55;
        wineggbg.anchorOffsetX = wineggbg.width / 2;
        wineggbg.anchorOffsetY = wineggbg.height / 2;
        wineggbg.x = 0.12 * stageW + wineggbg.width / 2;
        wineggbg.y = wineggbg.height / 2;
        wineggbg.alpha = 0.5;
        var plac1;
        var plac2;
        var plac3;
        //var p1= this.PersonImg(0.45*stageW,0.4*stageH,0.2*stageW,0.5*stageH,this.playimg);
        //
        // var p2= this.PersonImg(0.2*stageW,0.475*stageH,0.2*stageW,0.5*stageH,this.playimg1);
        //
        // var p3= this.PersonImg(0.68*stageW,0.475*stageH,0.2*stageW,0.5*stageH,this.playimg2);
        switch (this.player) {
            case this.first:
                plac1 = this.PersonImg(0.45 * stageW, 0.4 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg);
                break;
            case this.second:
                plac2 = this.PersonImg(0.2 * stageW, 0.475 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg);
                break;
            case this.third:
                plac3 = this.PersonImg(0.68 * stageW, 0.475 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg);
                break;
                other: break;
        }
        switch (this.player1) {
            case this.first:
                plac1 = this.PersonImg(0.45 * stageW, 0.4 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg1);
                break;
            case this.second:
                plac2 = this.PersonImg(0.2 * stageW, 0.475 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg1);
                break;
            case this.third:
                plac3 = this.PersonImg(0.68 * stageW, 0.475 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg1);
                break;
                other: break;
        }
        switch (this.player2) {
            case this.first:
                plac1 = this.PersonImg(0.45 * stageW, 0.4 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg2);
                break;
            case this.second:
                plac2 = this.PersonImg(0.2 * stageW, 0.475 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg2);
                break;
            case this.third:
                plac3 = this.PersonImg(0.68 * stageW, 0.475 * stageH, 0.2 * stageW, 0.5 * stageH, this.playimg2);
                break;
                other: break;
        }
        var winegg = this.createBitmapByName("egg1");
        this.addChild(winegg);
        winegg.width = stageW * 0.7;
        winegg.height = stageH * 0.55;
        winegg.anchorOffsetX = winegg.width / 2;
        winegg.anchorOffsetY = winegg.height / 2;
        winegg.x = 0.12 * stageW + winegg.width / 2;
        winegg.y = winegg.height / 2;
        winegg.touchEnabled = true;
        var jiangtai = this.createBitmapByName("gamejiangtai1");
        this.addChild(jiangtai);
        jiangtai.x = 0.15 * stageW;
        jiangtai.y = 0.5 * stageH;
        jiangtai.width = stageW * 0.7;
        jiangtai.height = stageH * 0.15;
        //this.placing=2;
        if (this.placing > 0) {
            switch (this.placing) {
                case 1:
                    {
                        wintxt.texture = RES.getRes("wintxt1");
                        winegg.texture = RES.getRes("egg1");
                        jiangtai.texture = RES.getRes("gamejiangtai1");
                        wineggbg.texture = RES.getRes("egg_bg1");
                    }
                    ;
                    break;
                case 2:
                    {
                        wintxt.texture = RES.getRes("wintxt2");
                        winegg.texture = RES.getRes("egg2");
                        jiangtai.texture = RES.getRes("gamejiangtai2");
                        wineggbg.texture = RES.getRes("egg_bg1");
                    }
                    ;
                    break;
                case 3:
                    {
                        wintxt.texture = RES.getRes("wintxt3");
                        winegg.texture = RES.getRes("egg3");
                        jiangtai.texture = RES.getRes("gamejiangtai3");
                        wineggbg.texture = RES.getRes("egg_bg1");
                    }
                    ;
                    break;
            }
        }
        var gamesharebtn = this.createBitmapByName("gamesharebtn");
        this.addChild(gamesharebtn);
        gamesharebtn.x = 0.275 * stageW;
        gamesharebtn.y = 0.85 * stageH;
        gamesharebtn.width = stageW * 0.45;
        gamesharebtn.height = stageH * 0.07;
        gamesharebtn.touchEnabled = true;
        gamesharebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.addChild(n.sharedonghua());
            var _czc = window["_czc"];
            _czc && _czc.push(["_trackEvent", "炫耀神迹", "click", "炫耀按钮", 1]);
        }, this);
        //var gamepabtn:egret.Bitmap = this.createBitmapByName("gamepabtn");
        //this.addChild(gamepabtn);
        //gamepabtn.x = 0.275*stageW;
        //gamepabtn.y =0.85*stageH;
        //gamepabtn.width=stageW*0.45;
        //gamepabtn.height=stageH*0.07;
        //gamepabtn.touchEnabled=true;
        //gamepabtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
        //    this.removeChildren();
        //    n.channel.stop();
        //    n.createGameScene();
        //    this.player1=new egret.Bitmap;
        //    this.player2=new egret.Bitmap;
        //    this.player3=new egret.Bitmap;
        //   window.location.href = "biz/xmas_s01e01/startup?cc="+this.ge; // 分享链接
        //},this);
        //动画
        var eggbgtimer = new egret.Timer(10, -1);
        eggbgtimer.start();
        eggbgtimer.addEventListener(egret.TimerEvent.TIMER, function () {
            egret.Tween.get(wineggbg).to({ alpha: 1 }, 1000).to({ alpha: 0.5 }, 1000);
        }, this);
        egret.Tween.get(wineggbg).to({ scaleX: 1.7, scaleY: 1.7, y: wineggbg.y + 0.04 * stageH }, 1000);
        egret.Tween.get(winegg).to({ scaleX: 1.5, scaleY: 1.5, y: wineggbg.y + 0.07 * stageH }, 600);
        //事件
        winegg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            eggbgtimer.stop();
            egret.Tween.get(winegg).to({ scaleX: 5, scaleY: 5, y: wineggbg.y + 0.2 * stageH, alpha: 0 }, 1000);
            this.removeChild(wineggbg);
            jiangtai.alpha = 0;
            wintxt.alpha = 0;
            n.lottery();
            // n.Progressive(n.isgetprice,n.jpname);
            // plac1.alpha=0;
            // plac2.alpha=0;
            // plac3.alpha=0;
            // n.removeChild(plac1);
            // n.removeChild(plac2);
            // n.removeChild(plac3);
            for (i = 0; i <= 5; i++) {
                if (n.personArry[i].x == 0.45 * stageW)
                    n.personArry[i].alpha = 0.1;
                n.removeChild(n.personArry[i]);
            }
        }, this);
    };
    p.lottery = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("lottery", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //var params = "_csrf=this._csrf";
        var params = "_csrf=" + this._csrf;
        request.send(params);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    p.onPostComplete = function (event) {
        var n = this;
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        var data = JSON.parse(request.response);
        if (data.data != null) {
            this.isgetprice = 1;
            this.jpname = data.data;
            this.Progressive(1, data.data);
        }
        else {
            this.Progressive(0, "jpm");
        }
        var _czc = window["_czc"];
        _czc && _czc.push(["_trackEvent", "抽奖", "click", "抽奖页", 1]);
    };
    //奖池
    p.Progressive = function (getwin, jiangpin1) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var jpname = "";
        jpname = jiangpin1.toString();
        var huojiangtxt = this.createBitmapByName("jptxty");
        this.addChild(huojiangtxt);
        huojiangtxt.x = 0.275 * stageW;
        huojiangtxt.y = 0.07 * stageH;
        huojiangtxt.width = stageW * 0.45;
        huojiangtxt.height = stageH * 0.14;
        //alert("")
        var jiangpin = this.createBitmapByName(jiangpin1 + "pic");
        this.addChild(jiangpin);
        jiangpin.width = stageW * 0.95;
        jiangpin.height = stageH * 0.25;
        jiangpin.x = 0.025 * stageW;
        jiangpin.y = 0.3 * stageH;
        jiangpin.touchEnabled = true;
        jiangpin.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            switch (jpname) {
                case "jp1919100":
                    window.location.href = "http://wx.1919.cn/wx1919/couponController.do?goCouponBefore";
                    break;
                case "jpdd100":
                    window.location.href = "http://gsactivity.diditaxi.com.cn/gulfstream/activity/v2/giftpackage/index?channel=e03f195d8dac3d7d9053a27b73b61ec3&from=groupmessage&isappinstalled=0";
                    break;
                case "jpdz10":
                    window.location.href = "http://evt.dianping.com/event/mmbonus/new/newlanding.html?source=mzbl";
                    break;
                case "jptc128":
                    window.location.href = "http://wx.17u.cn/pub/ajax/christmas";
                    break;
                case "jptc1000":
                    window.location.href = "http://wx.17u.cn/pub/ajax/christmas";
                    break;
                case "jpm":
                    window.location.href;
                    break;
                    //case "jp1919100":document.getElementById("#ifram").setAttribute("src","http://wx.1919.cn/wx1919/couponController.do?goCouponBefore");document.getElementById("#ifram").setAttribute("display","block");break;
                    //case "jpdd100": document.getElementById("#ifram").setAttribute("src","http://gsactivity.diditaxi.com.cn/gulfstream/activity/v2/giftpackage/index?channel=e03f195d8dac3d7d9053a27b73b61ec3&from=groupmessage&isappinstalled=0");document.getElementById("#ifram").setAttribute("display","block");break;
                    //case "jpdz10":document.getElementById("#ifram").setAttribute("src","http://evt.dianping.com/event/mmbonus/new/newlanding.html?source=mzbl");document.getElementById("#ifram").setAttribute("display","block");break;
                    //case "jptc128":document.getElementById("#ifram").setAttribute("src","http://wx.17u.cn/pub/ajax/christmas");document.getElementById("#ifram").setAttribute("display","block");break;
                    //case "jptc1000":document.getElementById("#ifram").setAttribute("src","http://wx.17u.cn/pub/ajax/christmas");document.getElementById("#ifram").setAttribute("display","block");break;
                    other: window.location.href;
                    break;
            }
        }, this);
        var jpbreaklight = this.createBitmapByName("jpbreaklight");
        this.addChild(jpbreaklight);
        jpbreaklight.width = stageW * 0.95;
        jpbreaklight.height = stageH * 0.25;
        jpbreaklight.x = 0.025 * stageW;
        jpbreaklight.y = 0.3 * stageH;
        //var breakegg:egret.Bitmap = this.createBitmapByName("jpmpic");
        //this.addChild(breakegg);
        //breakegg.width=stageW*0.95;
        //breakegg.height=stageH*0.07;
        //breakegg.x = 0.15*stageW;
        //breakegg.y =0.3*stageH;
        var jpbreakegg = this.createBitmapByName("jpbreakegg1");
        this.addChild(jpbreakegg);
        jpbreakegg.width = stageW * 0.95;
        jpbreakegg.height = stageH * 0.25;
        jpbreakegg.x = 0.025 * stageW;
        jpbreakegg.y = 0.3 * stageH;
        var jieshao = jiangpin1.toString();
        var jiangpinjieshao = this.createBitmapByName(jieshao);
        this.addChild(jiangpinjieshao);
        jiangpinjieshao.width = stageW * 0.8;
        jiangpinjieshao.height = stageH * 0.4;
        jiangpinjieshao.x = 0.1 * stageW;
        jiangpinjieshao.y = 0.4 * stageH;
        jiangpinjieshao.alpha = 0;
        //动画
        egret.Tween.get(jpbreaklight, { loop: true }).to({ alpha: 0.5 }, 1000).to({ alpha: 1 }, 1000);
        if (getwin == 1) {
            egret.Tween.get(jpbreakegg).to({ y: 0.12 * stageH }, 1000);
            egret.Tween.get(jpbreaklight).to({ y: 0.12 * stageH }, 1000);
            egret.Tween.get(jiangpin).to({ y: 0.12 * stageH }, 1000);
            egret.Tween.get(jiangpinjieshao).wait(1000).to({ alpha: 1 }, 1);
        }
        else {
            //alert("win=0")
            huojiangtxt.texture = RES.getRes("jptxtm");
        }
    };
    //paizhao
    p.TakePicture = function (placing) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var bg_gamebg = this.createBitmapByName("gamebg");
        this.addChild(bg_gamebg);
        bg_gamebg.x = 0;
        bg_gamebg.y = 0;
        bg_gamebg.width = stageW;
        bg_gamebg.height = stageH;
        var black_bg = this.zhezhao();
        this.addChild(black_bg);
        var picture = this.createBitmapByName("picture");
        this.addChild(picture);
        picture.x = stageW;
        picture.y = stageH;
        picture.width = stageW * 1.1;
        picture.height = stageH;
        picture.anchorOffsetX = picture.width / 2;
        picture.anchorOffsetY = picture.height / 2;
        picture.rotation = 360;
        picture.scaleX = 0.02;
        picture.scaleY = 0.02;
        picture.touchEnabled = true;
        picture.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.gameover();
        }, this);
        var pictxt = this.createBitmapByName("pictxt" + placing.toString()); //+this.placing.toString());
        this.addChild(pictxt);
        pictxt.x = stageW;
        pictxt.y = stageH * 0.7;
        pictxt.width = stageW * 0.8;
        pictxt.height = stageH * 0.2;
        var pickaca = this.createBitmapByName("pickaca");
        this.addChild(pickaca);
        pickaca.x = stageW * 0.8;
        pickaca.y = stageH * 0.8;
        pickaca.width = stageW * 0.3;
        pickaca.height = stageW * 0.3;
        //动画
        egret.Tween.get(pictxt).wait(2000).to({ x: stageW * 0.13 }, 1000, egret.Ease.circIn);
        egret.Tween.get(picture).to({ x: picture.width / 2, y: picture.height / 2, scaleX: 1, scaleY: 1, rotation: -720 }, 2000, egret.Ease.circIn);
    };
    //socket
    //
    //private SocketBuild():void{
    //    this.webSocket=new egret.WebSocket();
    //    this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
    //    this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
    //    this.webSocket.connect("http://115.29.34.64:3000", 80);
    //}
    //private onSocketOpen():void {
    //    var cmd = "Hello Egret WebSocket";
    //    console.log("连接成功，发送数据：" + cmd);
    //    this.webSocket.writeUTF(cmd);
    //}
    //private onReceiveMessage(e:egret.Event):void {
    //    var msg = this.webSocket.readUTF();
    //    console.log("收到数据：" + msg);
    //}
    //弹幕
    p.danmu = function () {
    };
    //分享朋友圈
    p.ShareFriend = function (webchat) {
        var data = null;
        var webchatdata = webchat;
        try {
            data = JSON.parse(webchatdata);
        }
        catch (error) {
            //  alert(error);
            return;
        }
        var self = this;
        console.log(webchat);
        if (data["success"] && data["data"]) {
            if (data["data"]["wechatSign"] != null) {
                var self = this;
                var bodyConfig = new BodyConfig();
                bodyConfig.appId = data["data"]["wechatSign"]["appId"];
                bodyConfig.timestamp = data["data"]["wechatSign"]["timestamp"];
                bodyConfig.nonceStr = data["data"]["wechatSign"]["nonceStr"];
                bodyConfig.signature = data["data"]["wechatSign"]["signature"];
                bodyConfig.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"];
                bodyConfig.debug = false;
                if (wx) {
                    wx.config(bodyConfig);
                    wx.ready(function () {
                        var shareObj = {
                            title: '圣诞跑PK我跑完全程，赢得了超值礼券',
                            desc: 'you can you up',
                            link: window.location.href,
                            imgUrl: "http://" + window.location.hostname + "/biz/xmas_s01e01/resource/images/share_icon.png" // 分享图标
                        };
                        var bodyMenuShareTimeline = new BodyMenuShareTimeline();
                        bodyMenuShareTimeline.title = shareObj.title;
                        bodyMenuShareTimeline.link = shareObj.link;
                        bodyMenuShareTimeline.imgUrl = shareObj.imgUrl;
                        bodyMenuShareTimeline.success = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享朋友圈成功", "share", "分享", 1]);
                            self.onShareSuccess();
                        };
                        bodyMenuShareTimeline.cancel = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享朋友圈取消", "share", "分享", 1]);
                        };
                        bodyMenuShareTimeline.fail = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享朋友圈失败", "share", "分享", 1]);
                        };
                        wx.onMenuShareTimeline(bodyMenuShareTimeline);
                        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
                        bodyMenuShareAppMessage.title = shareObj.title;
                        bodyMenuShareAppMessage.desc = shareObj.desc;
                        bodyMenuShareAppMessage.link = shareObj.link;
                        bodyMenuShareAppMessage.imgUrl = shareObj.imgUrl;
                        bodyMenuShareAppMessage.success = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享给朋友成功", "share", "分享", 1]);
                            self.onShareSuccess();
                        };
                        bodyMenuShareAppMessage.cancel = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享给朋友取消", "share", "分享", 1]);
                        };
                        bodyMenuShareAppMessage.fail = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享给朋友失败", "share", "分享", 1]);
                        };
                        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
                        var bodyMenuShareQQ = new BodyMenuShareQQ();
                        bodyMenuShareQQ.title = shareObj.title;
                        bodyMenuShareQQ.desc = shareObj.desc;
                        bodyMenuShareQQ.link = shareObj.link;
                        bodyMenuShareQQ.imgUrl = shareObj.imgUrl;
                        bodyMenuShareQQ.success = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享到QQ成功", "share", "分享", 1]);
                            self.onShareSuccess();
                        };
                        bodyMenuShareQQ.cancel = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享到QQ取消", "share", "分享", 1]);
                        };
                        bodyMenuShareQQ.fail = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享到QQ失败", "share", "分享", 1]);
                        };
                        wx.onMenuShareQQ(bodyMenuShareQQ);
                        var bodyMenuShareWeibo = new BodyMenuShareWeibo();
                        bodyMenuShareWeibo.title = shareObj.title;
                        bodyMenuShareWeibo.desc = shareObj.desc;
                        bodyMenuShareWeibo.link = shareObj.link;
                        bodyMenuShareWeibo.imgUrl = shareObj.imgUrl;
                        bodyMenuShareWeibo.success = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享到微博成功", "share", "分享", 1]);
                            self.onShareSuccess();
                        };
                        bodyMenuShareWeibo.cancel = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享到微博取消", "share", "分享", 1]);
                        };
                        bodyMenuShareWeibo.fail = function () {
                            var _czc = window["_czc"];
                            _czc && _czc.push(["_trackEvent", "分享到微博失败", "share", "分享", 1]);
                        };
                        wx.onMenuShareWeibo(bodyMenuShareWeibo);
                    });
                }
            }
            else {
                alert("网络错误: getWechatSign");
            }
        }
    };
    //}
    //分享手指动画
    p.sharedonghua = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var sharehand = this.createBitmapByName("sharehand");
        sharehand.x = 0.85 * stageW;
        sharehand.y = 0.05 * stageH;
        sharehand.width = 0.15 * stageW;
        sharehand.height = 0.15 * stageH;
        egret.Tween.get(sharehand, { loop: true }).to({ y: 0.15 * stageH }, 1000).to({ y: 0.05 * stageH }, 1000);
        return sharehand;
    };
    //重新设置 三个玩家的前后位置，同时 缓慢向下移动
    p.threeminusAfter = function (first, second, third) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        //first.y=0.78*stageH;
        //first.scaleX=0.25
        //first.scaleY=0.25
        //
        //second.y=0.75*stageH;
        //first.scaleX=0.25
        //first.scaleY=0.25
        //
        //third.y=0.68*stageH;
        //first.scaleX=0.25
        //first.scaleY=0.25
        //setInterval(function(){
        //    if(second.y<stageH*0.9)
        //    first.y=first.y+0.03*stageH;
        //    second.y=second.y+0.02*stageH;
        //    third.y=third.y+0.013*stageH;
        //},200);
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,"Main");
//
