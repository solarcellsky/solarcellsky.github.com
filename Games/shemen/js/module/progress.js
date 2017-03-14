define(function(require, exports,modules) {
    var barW = 640,
        barH = 58;
    function ProgressBar(w, h, title) {
        this.initialize();
        this.w = w;
        this.h = h;
        this.lastCount = 0;
        var l = h / 2;
        this.progress = new createjs.Shape;
        var f = this.progress.graphics;
        f.setStrokeStyle(1);
        f.beginStroke("#EF7A09");
        f.rect((w-barW)/2, l - 4, barW, barH);
        f.endStroke();
        this.addChild(this.progress);
        this.progressText = new createjs.Text("0%", "bold 32px Arial", "#FFF");
        this.progressText.x = w / 2;
        this.progressText.y = l + 24;
        this.progressText.textAlign = "center";
        this.progressText.textBaseline = "middle";
        this.addChild(this.progressText);
        var status = new createjs.Text("加载游戏资源中，请稍候...", "normal 30px Microsoft Yahei", "#FFF");
        status.x = w / 2;
        status.y = l-60;
        status.textAlign = "center";
        this.addChild(status);
    }
    ProgressBar.prototype = new createjs.Container;
    ProgressBar.prototype.completeCallback = function(a) {
        this.parent.removeChild(this);
        //$('.loading-logo').hide();
    };
    ProgressBar.prototype.progressCallback = function(a) {
        var bar = this.progress.graphics;
        bar.setStrokeStyle(0);
        bar.beginStroke("#EF7A09");
        bar.beginFill("#EF7A09");
        bar.rect((this.w-barW)/2+5, this.h / 2+1, barW * a.progress-10, barH-10);
        bar.endFill();
        bar.endStroke();
        this.progressText.text = "" + parseInt(100 * a.progress) + "%"
    };
    ProgressBar.prototype.forQueue = function(a) {
        this.errorList = [];
        a.on("complete", this.completeCallback, this, !0);
        a.on("progress", this.progressCallback, this);
        a.on("error",
        function(a) {
            alert("部分资源加载失败!")
        },
        null, !0);
        a.on("error",
        function(a) {
            this.errorList.push(a.item.src)
        },
        this)
    };
    modules.exports = ProgressBar;

});
