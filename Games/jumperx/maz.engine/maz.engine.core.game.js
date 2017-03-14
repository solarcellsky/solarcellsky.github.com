function dBug(e) { console.log(e) }

// var $canvas = jQuery('#gcanvas');
// var canvas = $canvas.get(0);
// var ctx = canvas.getContext('2d');
// var devicePixelRatio = window.devicePixelRatio || 1;
// var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
//                     ctx.mozBackingStorePixelRatio ||
//                     ctx.msBackingStorePixelRatio ||
//                     ctx.oBackingStorePixelRatio ||
//                     ctx.backingStorePixelRatio || 1;
// var scaleRatio = devicePixelRatio / backingStoreRatio;
// var realWidth = $canvas.width();
// var realHeight = $canvas.height();
// var width = realWidth * scaleRatio;
// var height = realHeight * scaleRatio;
// canvas.width = width;
// canvas.height = height;
// canvas.style.width = realWidth.toString() + "px";
// canvas.style.height = realHeight.toString() + "px";

function Game(e, t, n, r, i, s, o) {
	this.canvas = null;
    GAME_WIDTH = e;
    GAME_HEIGHT = t;
    this.fnProgress = r;
    this.fnInit = i;
    this.fnUpdate = s;
    this.fnDraw = o;
    this.fpsDraw = n;
    this.fpsUpdate = n 
}

function $(e) {
    return document.getElementById(e) 
}

function dd(e) { $("dbug").innerHTML += "<br>" + e }

function Sprite(e, t, n, r, i) {
    if (!e) return;
    this.img = new Image;
    this.img.src = e;
    var s = this;
    this.img.onload = function() { s.width = s.img.width / r;
        s.height = s.img.height / i };
    this.cols = r;
    this.rows = i;
    this.x = t;
    this.y = n;
    this.isActive = true;
    this.speed = 1;
    this.BOUND_WIDTH = 400;
    this.BOUND_HEIGHT = 400;
    this.actionCallBackFunction = null;
    this.type = "sprite";
    this.currentFrame = 0;
    this.isVisible = true }

function onKeyup(e) {
    if (!e) { e = window.event }
    var t = e.keyCode;
    processMyKeys(t, false) }

function onKeydown(e) {
    if (!e) { e = window.event }
    var t = e.keyCode;
    processMyKeys(t, true) }

function processMyKeys(e, t) {
    if (onKeyEvent) { onKeyEvent(e, t ? KEY_BUTTON_DOWN : KEY_BUTTON_UP) } }

function engine_initIO() { window.onkeydown = onKeydown;
    window.onkeyup = onKeyup }

function Text(e) { Sprite.call(this, e, 0, 0, 8, 18) }

function Frames(e) { this.img = new Image;
    this.img.src = e }

function FrameNotification(e, t, n, r, i, s, o) { this.resetNotification(e, t, n, r, i, s, o) }

function FrameNotificationList() { this.list = new Array }
var GAME_WIDTH = 0;
var GAME_HEIGHT = 0;
Game.prototype.fpsDraw = null;
Game.prototype.fpsUpdate = null;
Game.prototype.canvas = null;
Game.prototype.arrResources = null;
Game.prototype.fnProgress = null;
Game.prototype.fnInit = null;
Game.prototype.fnUpdate = null;
Game.prototype.fnDraw = null;
Game.prototype.setUpdateFPS = function(e) { this.fpsUpdate = e };
Game.prototype.init = function(e, t) {
    if (e == "") { alert("canvas id not provided");
        return }
    this.arrResources = new Array;
    this.canvas = document.getElementById(e).getContext("2d");
    this.canvas.fillStyle = "#000000";
    this.loadResources(t) };
Game.prototype.getCanvas = function() {
    return this.canvas };
Game.prototype.loadResources = function(e) {
    var t = 0;
    var n;
    if (e != null && e.length > 0) {
        var r = this;
        for (var i in e) { n = new Image;
            n.src = e[i];
            n.onload = function() { t++;
                if (t >= e.length) { r.fnProgress(r.canvas, t, e.length, true);
                    r.initGame() } else { r.fnProgress(r.canvas, t, e.length, false) } };
            this.arrResources.push(n) } } else { this.initGame() } };
Game.prototype.getResource = function(e) {
    if (this.arrResources[e]) {
        return this.arrResources[e] }
    return null };
Game.prototype.timer1 = 0;
Game.prototype.timer2 = 0;
Game.prototype.initGame = function() { this.fnInit();
    var e = this;
    this.timer1 = setInterval(function() { e.fnUpdate() }, this.fpsUpdate);
    this.timer2 = setInterval(function() { e.fnDraw(e.canvas) }, this.fpsDraw) };
Game.prototype.release = function() { clearInterval(this.timer1);
    clearInterval(this.timer2);
    if (this.arrResources != null && this.arrResources.length > 0) {
        for (i = 0; i < this.arrResources.length; i++) { delete this.arrResources[i] }
        delete this.arrResources } };
Game.prototype.removeResource = function() {
    if (this.arrResources != null && this.arrResources.length > 0) {
        for (i = 0; i < this.arrResources.length; i++) {} } };
Game.prototype.addResource = function(e, t) {
    if (this.arrResources == null) { this.arrResources = new Array }
    var n = this;
    var r = this.arrResources.length + 1;
    var i = new Image;
    i.src = e;
    i.onload = function() {
        if (t != null) { t(n.canvas, r, r, true) } };
    this.arrResources.push(i) };
Game.prototype.invalidate = function() { this.fnDraw(this.canvas) };
Sprite.prototype.msg = "";
Sprite.prototype.currentFrame = 0;
Sprite.prototype.type = "sprite";
Sprite.prototype.speed = 0;
Sprite.prototype.x = 0;
Sprite.prototype.y = 0;
Sprite.prototype.cols = 0;
Sprite.prototype.rows = 0;
Sprite.prototype.width = 0;
Sprite.prototype.height = 0;
Sprite.prototype.isActive = true;
Sprite.prototype.img = null;
Sprite.prototype.BOUND_WIDTH = 0;
Sprite.prototype.BOUND_HEIGHT = 0;
Sprite.prototype.actionCallBackFunction = null;
Sprite.prototype.setBoundArea = function(e, t) { this.BOUND_WIDTH = e;
    this.BOUND_HEIGHT = t };
Sprite.prototype.draw = function(e) {
    if (!this.isVisible) return;
    if (this.type == "parachute") {}
    var t = 0,
        n = 0;
    if (this.currentFrame >= this.cols) { t = this.currentFrame % this.cols } else { t = this.currentFrame }
    n = Math.floor(this.currentFrame / this.cols);
    e.drawImage(this.img, t * this.width, n * this.height, this.width, this.height, this.x, this.y, this.width, this.height) };
Sprite.prototype.draw2 = function(e, t, n) {
    if (!this.isVisible) return;
    e.drawImage(this.img, t, n, this.width, this.height, this.x, this.y, this.width, this.height) };
Sprite.prototype.draw3 = function(e, t, n, r, i) {
    if (!this.isVisible) return;
    try { e.drawImage(this.img, t, n, r, i, this.x, this.y, r, i) } catch (s) { dBug("Excep0098901") } };
Sprite.prototype.getCenter = function() {
    return { x: this.x + this.width / 2, y: this.y + this.height / 2 } };
Sprite.prototype.setAction = function(e) { this.actionCallBackFunction = e };
Sprite.prototype.updateState = function() {
    if (this.isActive) { this.performAction();
        this.isActive = this.isActive && this.inBoundArea();
        if (!this.isActive) { this.afterInactive() } } };
Sprite.prototype.performAction = function() {
    if (this.actionCallBackFunction != null) { this.actionCallBackFunction(this) } };
Sprite.prototype.inBoundArea = function() {
    return this.x >= 0 && this.x <= this.BOUND_WIDTH && this.y >= 0 && this.y <= this.BOUND_HEIGHT };
Sprite.prototype.isCollision = function(e) {
    return e.x < this.x + this.width && e.x + e.width > this.x && e.y < this.y + this.height && e.y + e.height > this.y };
Sprite.prototype.hit = function(e) { this.beforeInactive();
    this.isActive = false;
    this.afterInactive() };
Sprite.prototype.afterInactive = function() {};
Sprite.prototype.beforeInactive = function() {};
Sprite.prototype.__toString = function() {
    return "Sprite[x =" + this.x + " , y = " + this.y + ", isActive = " + this.isActive + ", inbound=" + this.inBoundArea() + "] <br>" + this.x + ">=0 && " + this.x + "<=" + this.BOUND_WIDTH + " &&" + this.y + ">=0 && " + this.y + " <= " + this.BOUND_HEIGHT };
var KEY_BUTTON_UP = 1;
var KEY_BUTTON_DOWN = 2;
var KEY_SPACE = 32;
var KEY_ENTER = 13;
var KEY_RIGHT = 39;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_DOWN = 40;
var onKeyEvent = null;
Text.prototype = new Sprite;
Text.prototype.draw = function(e, t, n, r, s) {
    var o = 0,
        u = 0,
        a = 0;
    this.width = 17.77777;
    this.height = 27;
    $("dbug4").innerHTML = t.length;
    for (i = 0; i < t.length; i++) { u = t.charCodeAt(i);
        if (u == 32) { o = 16;
            a = 2 } else if (u >= 48 && u <= 57) { o = u - 48;
            a = 0 } else if (u >= 65 && u <= 81) { o = u - 65;
            a = 1 } else if (u >= 82 && u <= 90) { o = u - 82;
            a = 2 } else if (u >= 97 && u <= 113) { o = u - 97;
            a = 3 } else if (u >= 114 && u <= 122) { o = u - 114;
            a = 4 } else if (t[i] == "-") { o = 9;
            a = 2 } else if (t[i] == "+") { o = 10;
            a = 2 } else if (t[i] == "/") { o = 11;
            a = 2 } else if (t[i] == ".") { o = 10;
            a = 0 } else if (t[i] == "%") { o = 11;
            a = 0 } else if (t[i] == "$") { o = 12;
            a = 0 } else if (t[i] == "pound sign") { o = 13;
            a = 0 } else if (t[i] == "?") { o = 14;
            a = 0 } else if (t[i] == ":") { o = 15;
            a = 0 } else if (t[i] == '"') { o = 16;
            a = 0 } else if (t[i] == ",") { o = 17;
            a = 0 }
        e.drawImage(this.img, o * this.width, a * this.height, this.width, this.height, n + i * this.width, r, this.width, this.height);
        $("dbug4").innerHTML = u + ") img{" + this.img + ",c=" + o + ",r=" + a + ",w=" + this.width + ",h=" + this.height + "}" } };
Frames.prototype.img = null;
Frames.prototype.drawDigits = function(e, t, n, r) {
    var i = 0;
    for (var i = 0; i < r.length; i++) { this.draw(e, t + i * 13, n, r[i] + "") } };
Frames.prototype.powerbar = function(e, t, n, r) { this.drawFrame(e, 143, 97, 100, 30, t, n);
    if (r < 0) {} else { this.drawFrame(e, 245, 97, r, 30, t + 2, n) } };
Frames.prototype.draw = function(e, t, n, r) {
    if (r == "1") { this.drawFrame(e, 0, 278, 5, 20, t, n) } else if (r == "2") { this.drawFrame(e, 6, 278, 13, 20, t, n) } else if (r == "3") { this.drawFrame(e, 20, 278, 14, 20, t, n) } else if (r == "4") { this.drawFrame(e, 34, 278, 11, 20, t, n) } else if (r == "5") { this.drawFrame(e, 45, 278, 12, 20, t, n) } else if (r == "6") { this.drawFrame(e, 57, 278, 12, 20, t, n) } else if (r == "7") { this.drawFrame(e, 69, 278, 11, 20, t, n) } else if (r == "8") { this.drawFrame(e, 80, 278, 11, 20, t, n) } else if (r == "9") { this.drawFrame(e, 91, 278, 11, 20, t, n) } else if (r == "0") { this.drawFrame(e, 103, 278, 11, 20, t, n) } else if (r == "p1") { this.drawFrame(e, 99, 242, 11, 30, t, n) } else if (r == "p2") { this.drawFrame(e, 111, 238, 18, 40, t, n) } else if (r == "p3") { this.drawFrame(e, 129, 238, 17, 40, t, n) } else if (r == "p4") { this.drawFrame(e, 147, 238, 19, 40, t, n) } else if (r == "score") { this.drawFrame(e, 184, 272, 150, 50, t, n) } else if (r == "b+500") { this.drawFrame(e, 0, 0, 175, 30, t, n) } else if (r == "b+25") { this.drawFrame(e, 0, 31, 175, 30, t, n) } else if (r == "jump") { this.drawFrame(e, 0, 175, 250, 30, t, n) } else if (r == "b+300") { this.drawFrame(e, 0, 61, 175, 30, t, n) } else if (r == "+100") { this.drawFrame(e, 0, 91, 60, 30, t, n) } else if (r == "+75") { this.drawFrame(e, 0, 121, 50, 30, t, n) } else if (r == "+25") { this.drawFrame(e, 0, 151, 50, 30, t, n) } else if (r == "w8") { this.drawFrame(e, 60, 170, 270, 33, t, n) } else if (r == "ready") { this.drawFrame(e, 0, 205, 345, 36, t, n) } else if (r == "space") { this.drawFrame(e, 0, 211, 165, 29, t, n) } else if (r == "s*") { this.drawFrame(e, 0, 301, 25, 29, t, n) } else if (r == "s#") { this.drawFrame(e, 26, 301, 50, 29, t, n) } else if (r == "foul") { this.drawFrame(e, 192, 0, 50, 29, t, n) } else if (r == "deploy") { this.drawFrame(e, 191, 61, 67, 28, t, n) } };
Frames.prototype.drawFrame = function(e, t, n, r, i, s, o) { e.drawImage(this.img, t, n, r, i, s, o, r, i) };
FrameNotification.prototype.objFrame = "";
FrameNotification.prototype.option = "";
FrameNotification.prototype.sx = 0;
FrameNotification.prototype.sy = 0;
FrameNotification.prototype.xinc = 0;
FrameNotification.prototype.yinc = 0;
FrameNotification.prototype.counter = 0;
FrameNotification.prototype.resetNotification = function(e, t, n, r, i, s, o) { this.objFrame = e;
    this.option = t;
    this.sx = n;
    this.sy = r;
    this.xinc = i;
    this.yinc = s;
    this.counter = o };
FrameNotification.prototype.draw = function(e) {
    if (this.counter > 0) { e.globalAlpha = this.counter / 50;
        this.objFrame.draw(e, this.sx, this.sy, this.option);
        e.globalAlpha = 1;
        this.sx += this.xinc;
        this.sy += this.yinc;
        this.counter-- } };
FrameNotificationList.prototype.list = null;
FrameNotificationList.prototype.add = function(e, t, n, r, i) {
    var s = new FrameNotification(e, t, n, r, 0, i, 80);
    this.list.push(s) };
FrameNotificationList.prototype.draw = function(e) { this.list.forEach(function(t) { t.draw(e) }) };
FrameNotificationList.prototype.cleanup = function() { this.list = this.list.filter(function(e) {
        return e.counter > 0 ? true : false }) }
