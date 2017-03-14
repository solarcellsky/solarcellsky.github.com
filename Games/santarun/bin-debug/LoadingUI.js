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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.i = 1;
        this.createView();
    }
    var d = __define,c=LoadingUI;p=c.prototype;
    p.createView = function () {
        var stageW = 480;
        var stageH = 800;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0xFFFFFF, 1);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        topMask.width = stageW;
        topMask.height = stageH;
        this.addChild(topMask);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 100;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.text = "loading";
        this.textField.textColor = 0x000000;
        var logo = new egret.TextField();
        this.addChild(logo);
        logo.y = 660;
        logo.width = 480;
        logo.height = 200;
        logo.textAlign = "center";
        logo.text = "";
        logo.size = 20;
        logo.textColor = 0x000000;
        this.loading = this.createBitmapByName("loading1");
        this.addChild(this.loading);
        this.loading.width = 480;
        this.loading.height = 200;
        //this.loading.x =240;
        //bg_laoren.y=(stageH*19)/100;
        //bg_laoren.x=20-bg_laoren.width*0.05;
        this.loading.y = 240;
        this.loading.name = "loading";
        this.timer = new egret.Timer(100, -1);
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            this.i++;
            this.loading.texture = RES.getRes("loading" + this.i.toString());
            if (this.i == 5) {
                this.i = 0;
            }
        }, this);
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.setProgress = function (current, total) {
        var num = (current / total).toFixed(2);
        var comfur = num.substring(0, 3);
        if (num.length = 3) {
            this.textField.text = "Loading..." + comfur * 100 + "%";
        }
    };
    return LoadingUI;
})(egret.Sprite);
egret.registerClass(LoadingUI,"LoadingUI");
