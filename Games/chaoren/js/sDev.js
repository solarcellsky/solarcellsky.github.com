var canvas, stage, exportRoot,loader,loading;

var LOAD_PART = 1;
var MAX_PART = 2;

var currPage = 1;
var way = 0;
var prvMc,nextMc;

var loadArray = new Array();

var imgUrl = "images/";
var jsUrl = "js/";
var soundUrl = "sounds/";

//// 是否服务器
var isServer = false;

var isPC = false;

var isAndroid = false;
var isIOS = false;
var bgSound;

var newPart;

var currPage = 1;
var backIndex = 2;
var loadArray = new Array();
var partArray = new Array();

var totalScore = 0;
var isEnd = true;
var startTime;
var TOTLE_TIME = 30;
var gameMc;

var bgArray;

var indexArray;

var endType = 1;

var hardFrame = 20;


function initGame(mc)
{
    closeShare();

    gameMc = mc;

    if(bgArray == null)
    {
        bgArray = new Array();
        for(var i = 1; i <=9; i++)
        {
            gameMc["c_" + i + "_mc"].index = i;
            gameMc["c_" + i + "_mc"].name = "c_" + i + "_mc";
            bgArray.push(gameMc["c_" + i + "_mc"]);
        }
    }

    indexArray = new Array();

    isEnd = false;

    totalScore = 0;

    hardFrame = 20;

    gameMc.score_txt.text = 0;

    var currTime = new Date();
    startTime = currTime.getTime();

    gameMc.time_txt.text = TOTLE_TIME;

    isWin = false;
    winNum = 2;
    codeNum = "";
    isWWW = false;
    isLast = false;


    stage.addEventListener("stagemousedown",onDown);
}

function startMc()
{
    var index = Math.ceil(Math.random()*9);
    if(indexArray.indexOf(index) == -1)
    {
        //console.log(index);
        indexArray.push(index);
        var ranNum = Math.random();
        if(ranNum > 0.4)
        {
            bgArray[index-1].type = 1;
            bgArray[index-1].role_mc.gotoAndStop(11);
        }else{
            bgArray[index-1].type = 0;
            bgArray[index-1].role_mc.gotoAndStop(Math.floor(Math.random()*10));
        }
        bgArray[index-1].isHit = false;
        bgArray[index-1].gotoAndPlay(1);
    }else{
        startMc();
    }

    if(indexArray.length < 5)
    {
        if(Math.random() > 0.5)
        {
            setTimeout(function(){startMc();},50);
        }else if(Math.random() > 0.65)
        {
            setTimeout(function(){startMc();},100);
            setTimeout(function(){startMc();},190);
        }else if(Math.random() > 0.85)
        {
            setTimeout(function(){startMc();},200);
            setTimeout(function(){startMc();},100);
            setTimeout(function(){startMc();},200);
        }
    }
}

function endMc(index)
{
    for(var i =0;i<indexArray.length;i++){
        if(indexArray[i] == index)
        {
            indexArray.splice(i,1);
        }
    }
}



function onDown(e)
{

    for(var i in bgArray)
    {
        var bgMc = bgArray[i];

        if(bgMc.currentFrame == 0 || bgMc.isHit)
        {
            continue;
        }else{
            var point = bgMc.globalToLocal(stage.mouseX, stage.mouseY);
            if(bgMc.hitTest(point.x, point.y))
            {
                // alert(bgMc.name)
                bgMc.isHit = true;
                if(bgMc.type == 0)
                {
                    totalScore += 1;
                    bgMc.score_mc.info_mc.gotoAndStop(1);
                    playSound("yes");
                    playSound("yes");

                    if(winNum == 1)
                    {
                        winNum = 3;
                        isWWW = true;
                        bgMc.li_mc.gotoAndPlay(1);
                    }


                    if(totalScore == 80 && winNum == 2)
                    {
                        winPrize();
                    }

                }else if(bgMc.type == 1)
                {
                    totalScore -= 1;
                    bgMc.score_mc.info_mc.gotoAndStop(2);
                    totalScore = Math.max(0,totalScore);
                    playSound("no");
                }
                bgMc.score_mc.gotoAndPlay(1);
                bgMc.gotoAndPlay("out");
                gameMc.score_txt.text = totalScore;
            }

            gameMc.hit_mc.x = stage.mouseX + 89*2;
            gameMc.hit_mc.y = stage.mouseY + 76*1.5;
            gameMc.hit_mc.gotoAndPlay(1);
        }


    }

}



function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


var runInit = false;

function init() {
    //alert("init");
    runInit = true;

    createjs.MotionGuidePlugin.install();

    canvas = document.getElementById("canvas");
    images = images||{};
    ss = ss||{};
    stage = new createjs.Stage(canvas);

    createjs.Touch.enable(stage);
    stage.enableMouseOver();
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", onTick);
    //stage.y = (window.innerHeight - canvas.height) * .5 ;
    if(isServer)
    {
        imgUrl = "Public/Home/images/";
        jsUrl = "Public/Home/js/";
        soundUrl = "Public/Home/sounds/";
    }

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        isAndroid = true;
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        isIOS = true;
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }else{
        isPC = true;
    }

    createLoading();
}


var currFrame = 0 ;
var currFrame2 = 0;
var isLast = false;
function onTick(e)
{
    stage.update();
    if(isEnd)
    {
        return;
    }



    var currTime = new Date();
    var leftTime = TOTLE_TIME - Math.floor((currTime.getTime() - startTime)/1000);

    hardFrame = 20 - Math.floor((60 - leftTime)/7);

    //console.log("hardFrame",hardFrame);
    currFrame++;
    if(currFrame >= hardFrame)
    {
        currFrame = 0;
        startMc();

    }

    if(leftTime == 20)
    {
        isLast = true;
    }

    //console.log(leftTime);

    gameMc.time_txt.text = leftTime;

    if(leftTime == 0) {
        isEnd = true;


        if(totalScore >= 25)
        {
            endType = 2;
        }else{
            endType = 3;
        }

        shareTxt(totalScore);

        if(isWWW)
        {
            endType = 4;
        }

        gameMc.end_mc.gotoAndPlay(1);

        stage.removeEventListener("stagemousedown",onDown);
    }


}

var winNum = 2;
var isWin = false;
var codeNum = "";
var isWWW = false;
function winPrize()
{
    if(isWin)
    {
        return;
    }
    //alert("领取红包");
    $.ajax({
        type: "POST",
        url: "http://activity.ccead.cn/diaopaidishu/index.php?s=Terminal/libao",
        data: {},
        dataType: "json",
        success: function(data){
            isWin = true;
            winNum = Math.floor(data['res']);
            if(winNum == 1)
            {
                codeNum = data['code'];
                console.log("data['res']: " + codeNum);
            }


            console.log("data['res']: " + winNum);

        },error: function(XMLHttpRequest, textStatus, errorThrown) {
            //alert("重新提交数据");
            winPrize();
        }
    });
}


function createLoading()
{
    loader = new createjs.LoadQueue(false);
    loader.loadFile({src:imgUrl + "loading_atlas_.json", type:"spritesheet", id:"loading_atlas_"}, true);
    loader.addEventListener("complete", handleCompleteLoading);
}
function handleCompleteLoading(evt) {
    var queue = evt.target;
    ss["loading_atlas_"] = queue.getResult("loading_atlas_");
    exportRoot = new lib.loading();
    loading = exportRoot.loading_mc;
    //exportRoot.arr_mc.visible = false;
    //exportRoot.y = (window.innerHeight - canvas.height) * .5 ;
    newPart = new createjs.Container();

    exportRoot.addChild(newPart,exportRoot.loading_mc);

    stage.addChild(exportRoot);

    //stage.y = (window.innerHeight - canvas.height) * .5 ;


    stage.update();
    //createjs.Sound.alternateExtensions = ["mp3"];
    //createjs.Sound.registerSound(soundUrl + "wa.mp3", "wa");
    //loadSound();
    loadPage(1);

}


var showBackLoading = false;
function loadPage(num)
{
    currPage = num;


    if(currPage == MAX_PART)
    {
        //exportRoot.arr_mc.visible = false;
    }else{
        //exportRoot.arr_mc.visible = true;
    }



    if(loadArray.indexOf(currPage) == -1) {

        loading.visible = true;
        loading.alpha = 0;
        createjs.Tween.get(loading)
            .to({alpha: 1}, 1000, createjs.Ease.quintOut);
        //.call(handleComplete);


        //loading.gotoAndStop(0);

        stage.addChild(loading);

        if(currPage == backIndex)
        {
            loading.man_mc.num_mc.num_txt.text = backPer + "%";
            loading.man_mc.gotoAndStop(backPer);
            showBackLoading = true;

            return;
        }


        showBackLoading = false;

        //alert("load");
        loader = new createjs.LoadQueue(true);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", onPageLoad);


        loader.loadFile({src:soundUrl + "yes.mp3", id:"yes"}, true);
        loader.loadFile({src:soundUrl + "no.mp3", id:"no"}, true);
        loader.loadFile({src:imgUrl + "p" + currPage + "_atlas_.json", type:"spritesheet", id:"p" + currPage + "_atlas_"}, true);
        loader.loadFile({id:"js" + currPage, src:jsUrl + "p" + currPage + ".js", type:"javascript"},true);

        if(currPage == 1)
        {

            //loader.loadFile({src:imgUrl + "p1.jpg", type:"image", id:"p1.jpg"}, true);
        }else if(currPage == 2)
        {

            loader.loadFile({src:imgUrl + "p2.jpg", type:"image"}, true);
        }



        loader.addEventListener('progress', onPreloadProgress);
        loadArray.push(currPage);



    }else{
        loading.visible = false;
        if(newPart.numChildren != 0)
        {
            newPart.removeChildAt(0);
        }

        newPart.addChild(partArray[currPage]);

        if(currPage != 1)
        {
            partArray[currPage].getChildAt(0).gotoAndPlay(1);
        }

    }
}

var isSound = true;
function playSound(id, loop) {

    if(!isSound)
    {
        return;
    }

    if(isAndroid)
    {
        return;
    }
    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}



var backLoader;
function backLoading()
{

    if(loadArray.indexOf(backIndex) > 0) {
        backIndex ++;
        if(backIndex == MAX_PART)
        {
            backIndex = 1;
        }
        return;
    }

    if(backIndex >= MAX_PART)
    {
        // backIndex = 1;
    }

    console.log("backIndex",backIndex);
    backLoader = new createjs.LoadQueue(false);
    backLoader.addEventListener("fileload", handleFileLoad);
    backLoader.addEventListener("complete", onBackLoad);
    backLoader.addEventListener('progress', onPreloadProgress2);

    if(backIndex == 1)
    {
       // backLoader.loadFile({src:imgUrl + "p" + backIndex + ".jpg", type:"image", id:"p" + backIndex + ".jpg"}, true);
    }else if(backIndex == 2)
    {
        backLoader.loadFile({src:imgUrl + "p2.jpg", type:"image"}, true);
    }

    backLoader.loadFile({src: imgUrl + "p" + backIndex + "_atlas_.json", type:"spritesheet", id:"p" + backIndex + "_atlas_"}, true);

    backLoader.loadFile({id:"js", src: jsUrl + "p" + backIndex + ".js", type:"javascript"},true);

    //loader.loadManifest(lib.properties.manifest);

}

function onBackLoad(evt)
{
    var queue = evt.target;
    ss["p" + backIndex +  "_atlas_"] = queue.getResult("p" + backIndex +  "_atlas_");
    partArray[backIndex] = new lib["p" + backIndex]();

    if(loadArray.indexOf(backIndex) == -1) {
        loadArray.push(backIndex);
    }

    if(showBackLoading)
    {
        createjs.Tween.get(loading)
            .to({alpha:0},100,createjs.Ease.quintOut)
            .call(handleComplete);

        function handleComplete() {
            //Tween complete
            loading.visible = false;
        }

        loadPage(backIndex);
        showBackLoading = false;
    }


    backIndex ++;
    // backLoading();
    console.log("backIndex",backIndex)

    if(backIndex > MAX_PART)
    {
        //backIndex = 2;
        return;
    }


    if(loadArray.length != MAX_PART)
    {
        backLoading();
    }
}



function onPreloadProgress(e) {
    loading.man_mc.num_mc.num_txt.text =  Math.floor(e.progress * 100) + "%";
    //loading.num_mc.gotoAndStop(Math.floor(e.progress * 33));
    loading.man_mc.gotoAndStop(Math.floor(e.progress * 100));
    console.log( Math.floor(e.progress * 100)  + "%");
    stage.update();
}

var backPer;
function onPreloadProgress2(e) {

    if(showBackLoading)
    {
        loading.man_mc.num_mc.num_txt.text =  Math.floor(e.progress * 100) + "%";
        loading.man_mc.gotoAndStop(Math.floor(e.progress * 100));
        stage.update();
    }else{
        backPer = Math.floor(e.progress * 100);
    }
}



function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

var isFirst = true;
function onPageLoad(evt)
{
    createjs.Tween.get(loading)
        .to({alpha:0},100,createjs.Ease.quintOut)
        .call(handleComplete);

    function handleComplete() {
        //Tween complete
        loading.visible = false;

    }


    if(loadArray.indexOf(currPage) == -1) {
        loadArray.push(currPage);
    }

    var queue = evt.target;
    ss["p" + currPage +  "_atlas_"] = queue.getResult("p" + currPage +  "_atlas_");

    partArray[currPage] = new lib["p" + currPage]();

    if(newPart.numChildren != 0)
    {
        newPart.removeChildAt(0);
    }

    if(isFirst)
    {
        backLoading();
    }
    isFirst = false;
    newPart.addChild(partArray[currPage]);
    stage.update();

}

function loadPic(mc,url)
{

    var bg = new createjs.Bitmap(imgUrl + url);

    mc.addChild(bg);
}


function showShare()
{
    //$(".img").style.display = "none";
    document.getElementById("tb").style.display = "none";
    //exportRoot.share_mc.gotoAndPlay(1);
    //document.getElementById("ewm").style.display = "block";
}

function closeShare()
{
    document.getElementById("tb").style.display = "block";
    //document.getElementById("ewm").style.display = "none";
}



function resizeMc(mc)
{
    console.log(mc.y);
    mc.y = 568;
    mc.y = 568 + (window.innerHeight - canvas.height) * .5 ;
}


function toBtm(mc,addY)
{
    mc.y = window.innerHeight - addY ;
}


