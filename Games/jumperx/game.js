function enableMobile() { blnMobile = true }

function getBgColor(e) {
    if (e < arrBgs.length) {
        return arrBgs[e] }
    return arrBgs[0] }

function pauseSound(e) {
    return;
    if (e == "jump") { sndWoosh.pause() } else if (e == "open") { sndOpen.pause() } else if (e == "bg") { sndBg.pause() } }

function playSound(e) {
    return;
    if (e == "jump") { sndWoosh.play() } else if (e == "open") { sndOpen.play() } else if (e == "bg") { sndBg.play() } }

function loadGameResources() {
    var e = Array("images/bar.png", "images/jumper_face.png", "images/options.png", "images/menu.jpg", "images/title.png", "images/jumper1.png", "images/jumper2.png", "images/jumper3.png", "images/jumper4.png", "images/jumperx.png", "images/signal.png", "images/cloud.png", "images/eyes.png", "images/stage1.png", "images/m0.png", "images/m1.png", "images/m2.png", "images/m3.png", "images/jolie.jpg", "images/mazhar.jpg", "images/pit.jpg", "images/tom.jpg");
    game = new Game(320, 480, 1e3 / FPS, progressUpdate, init, speedUpdate, draw);
    game.setUpdateFPS(10);
    game.init("gcanvas", e);
    $("gcanvas").addEventListener("mouseup", function(e) {
        var t = getMousePos(this, e);
        mouseEvent(t.x, t.y) }) }

function getMousePos(e, t) {
    var n = e.getBoundingClientRect();
    return { x: t.clientX - n.left, y: t.clientY - n.top } }

function progressUpdate(e, t, n, r) { e.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    echo(e, "Loading " + t + "/" + n, 150, 150) }

function init() { stage = new GameStage;
    menu = new Menu;
    jumpers = new Array;
    jumpers.push(new Jumper("images/jumper1.png", "Mazhar", 170, true));
    jumpers.push(new Jumper("images/jumper2.png", "Jolie", 80, false));
    jumpers.push(new Jumper("images/jumper3.png", "Pit", 5, false));
    jumpers.push(new Jumper("images/jumper4.png", "Tom", 250, false));
    signal = new Sprite("images/signal.png", 135, 150, 3, 1);
    font = new Text("images/font.png");
    dlgFrame = new Frames("images/title.png");
    note = new FrameNotificationList;
    engine_initIO() }

function updateStats() { jumpers.forEach(function(e) { $("m_" + e.name.toLowerCase()).innerHTML = getMedals(e.medals) }) }

function getMedals(e) {
    var t = "";
    for (i = 0; i < e.length; i++) { t += "<img src='images/m" + e[i] + ".png'>" }
    return t }

function speedUpdate() {
    if (game_state != STATE_PLAY) {
        return }
    if (trackerJumper != null) { stage.vy = trackerJumper.vy } else { stage.vy = 0 }
    if (jumpers[0].power <= 0 && stage.xplode == 0 && stage.isExplosion == false) { stage.explosion() }
    if (stage.distance > 1450 && stage.distance < 1500) { Toast = "deploy" }
    if (!jumpers[0].isActive && !jumpers[1].isActive && !jumpers[2].isActive && !jumpers[3].isActive) {
        if (jumpers[0].power > 0 && jumpers[0].position == 1 && Toast != "ready") { countFirstPosition++;
            if (countFirstPosition >= 3) { intScore += 300;
                note.add(dlgFrame, "b+300", 180, 300, -.8);
                if (jumpers[0].power + 30 > 100) { jumpers[0].power = 100 } else { jumpers[0].power += 30 }
                dlgState = 1 }
            if (jumpers[0].power == lastPower) { intScore += 25;
                note.add(dlgFrame, "b+25", 180, 270, -.8) }
            var e = jumpers[0].medal == 3 ? 100 : jumpers[0].medal == 2 ? 75 : jumpers[0].medal == 1 ? 25 : 0;
            intScore += e;
            note.add(dlgFrame, "+" + e, 180, 300, -2) }
        Toast = "ready";
        if (!blnRaceEnd) { updateStats() }
        blnRaceEnd = true;
        if (jumpers[0].power <= 0 && game_state != STATE_OVER) { $("gcanvas").style.background = getBgColor(1);
            game_state = STATE_OVER } }
    if (jumpers[0].isActive == false) { trackerJumper = null;
        jumpers.forEach(function(e) {
            if (e.isHero == false && (trackerJumper == null || e.distance >= trackerJumper.distance)) { trackerJumper = e } }) } }

function draw(e) { e.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    if (game_state != STATE_PLAY) { pauseSound("bg") }
    if (game_state == STATE_MENU) { showMenu(e) } else if (game_state == STATE_PAUSE) {} else if (game_state == STATE_HOW) { showHow(e) } else if (game_state == STATE_PLAY) { showGame(e);
        if (dlgState > 0) { showAchivement(e, dlgState) } } else if (game_state == STATE_CREDITS) { showCredits(e) } else if (game_state == STATE_OVER) { showGameOver(e) } }

function forceRedraw() { game.invalidate() }

function echo(e, t, n, r, i) {
    if (!i) { i = "#FFFFFF" }
    e.font = "bold 14px Verdana";
    e.fillStyle = i;
    e.fillText(t, n, r) }

function echoi(e, t, n, r, i) {
    if (!i) { i = "#FFFFFF" }
    e.font = "bold 10px Verdana";
    e.fillStyle = i;
    e.fillText(t, n, r) }

function echoh1(e, t, n, r, i) {
    if (!i) { i = "#FFFFFF" }
    e.font = "bold 28px Arial";
    e.fillStyle = i;
    e.fillText(t, n, r) }

function getAchivement(e) {
    if (e == 1) {
        return base64_encode("achivement_hattrick_" + intScore).replace("/", "alXeXla") } }

function postAchivements(e) { submitAchivements(getAchivement(e)) }

function showAchivement(e, t) {
    if (t == 1) { dlgAchivement(e, "hattrick") } }

function dlgAchivement(e, t) {
    var n = 20;
    var r = 20;
    e.beginPath();
    e.rect(n, r, 280, 300);
    e.fillStyle = "#2F7348";
    e.fill();
    e.lineWidth = 7;
    e.strokeStyle = "#BF8D39";
    e.stroke();
    var i = "Achivement";
    var s = "";
    if (t == "hattrick") { s = "Hattrick" }
    echoh1(e, i, n + 61, r + 36, "#043617");
    echoh1(e, i, n + 60, r + 35);
    echo(e, "" + s, n + 25, r + 85, "#DACC51");
    dlgFrame.draw(e, n + 90, r + 65, "s*");
    dlgFrame.draw(e, n + 120, r + 65, "s*");
    dlgFrame.draw(e, n + 150, r + 65, "s*");
    echo(e, "Score: " + intScore, n + 25, r + 120);
    echo(e, "Share:", n + 25, r + 190);
    e.drawImage(fbicon, 0, 0, 34, 34, n + 50, r + 200, 34, 34);
    echoi(e, "facebook.com", n + 90, r + 220, "#000000");
    echo(e, "[Close]", 235, 305) }

function showGame(e) { stage.draw(e);
    if (intRand == 100) { signal.currentFrame = 1 } else if (intRand <= -60) { signal.isVisible = false } else if (intRand <= 0) { Toast = "";
        signal.currentFrame = 2 }
    intRand--;
    jumpers.forEach(function(t) { t.draw(e) });
    signal.draw(e);
    showText(e);
    note.draw(e);
    e.fillStyle = "#000000";
    e.globalAlpha = .5;
    e.fillRect(0, 0, GAME_WIDTH, 40);
    e.globalAlpha = 1;
    e.font = "normal 18px Arial";
    e.fillStyle = "#FFFFFF";
    e.fillText("Stage:" + intStage + " Round:" + intRound, 180, 25);
    e.font = "normal 12px Arial";
    dlgFrame.powerbar(e, 5, 5, jumpers[0].power);
    dlgFrame.drawDigits(e, 110, 10, intScore + "");
    update() }

function update() {
    if (game_state == STATE_PLAY) { stage.performAction();
        if (stage.stoped == true) { jumpers[0].blnMove = true }
        jumpers.forEach(function(e) { e.performAction(stage.distance, intRand) });
        note.cleanup() } }

function resetJumpers(e) { jumpers.forEach(function(e) { e.restJumper() }) }

function restNextJump() {
    if (jumpers[0].power > 0) { intRound++;
        if (intRound > 3) {
            if (jumpers[0].totalMedals > jumpers[1].totalMedals && jumpers[0].totalMedals > jumpers[2].totalMedals && jumpers[0].totalMedals > jumpers[3].totalMedals) { intStage++ } else {}
            resetJumpers();
            countFirstPosition = 0;
            intRound = 1;
            jumpers.forEach(function(e) { e.totalMedals = 0 }) } } else { intStage = 1;
        intRound = 1;
        resetJumpers();
        jumpers.forEach(function(e) { e.power = 100 });
        intScore = 0;
        countFirstPosition = 0 }
    Toast = "w8";
    blnRaceEnd = false;
    intRand = null;
    JumperList = new Array;
    jumpers.forEach(function(e) { e.prepareNextJump();
        e.level = intStage });
    stage.resetStage();
    signal.currentFrame = 0;
    signal.isVisible = true;
    intRand = Math.round(100 + Math.random() * 200);
    trackerJumper = jumpers[0];
    lastPower = jumpers[0].power;
    updateStats();
    $("gcanvas").style.background = getBgColor(intStage) }

function showGameOver(e) { showMenu(e, true);
    echoh1(e, "Game Over", 80, 50, "#A80707");
    dlgScore(e);
    echo(e, "[BACK]", 245, 320, "#0000FF") }

function dlgScore(e) {
    var t = 20;
    var n = 200;
    e.beginPath();
    e.rect(t, n, 280, 100);
    e.fillStyle = "#2F7348";
    e.fill();
    e.lineWidth = 7;
    e.strokeStyle = "#BF8D39";
    e.stroke();
    echo(e, "Score : " + intScore, t + 9, n + 25);
    echo(e, "Share your on", t + 9, n + 55);
    e.drawImage(fbicon, 0, 0, 34, 34, t + 175, n + 60, 34, 34);
    echoi(e, "facebook", t + 210, n + 80, "#000000") }

function showMenu(e, t) { menu.draw(e, t);
    menu.performAction();    
}

function showHow(e) { echo(e, "HELP", 40, 50, "#000000");
    echo(e, "When Green light:", 40, 80);
    echo(e, "Press space to jump", 40, 100);
    echo(e, "Inorder to open parachute:", 40, 140);
    echo(e, "Press space to deploy", 40, 160);
    echo(e, "Every tournment has 3 matches", 40, 200);
    echo(e, "Be first in 2 matches to win.", 40, 220);
    echo(e, "[BACK]", 100, 260, "#0000FF") }

function showCredits(e) { echo(e, "Credits", 40, 50, "#000000");
    echo(e, "Graphics by", 40, 80);
    echo(e, "M.Mazhar Hassan", 40, 100);
    echo(e, "Developed by", 40, 200);
    echo(e, "M.Mazhar Hassan", 40, 220);
    echo(e, "[BACK]", 100, 260, "#0000FF") }

function showText(e) {
    if (Toast == "w8") { echo(e, "Wait for green light", 80, 260, "#000000");
        if (blnMobile) { echo(e, "TAP to Jump", 110, 280, "#FFFF00") } else { echo(e, "Click to Jump", 100, 280, "#FFFF00") } } else if (Toast == "space") {
        if (blnMobile) { echo(e, "Tap when ready", 65, 260, "#0000FF") } else { dlgFrame.draw(e, 65, 260, "space") } } else if (Toast == "ready") {
        if (blnMobile) { echo(e, "TAP WHEN READY", 80, 150, "#0000FF") } else { echo(e, "Click WHEN READY", 70, 150, "#0000FF") }
        dlgFrame.draw(e, 110, 160, jumpers[0].medal > 0 ? "s*" : "s#");
        dlgFrame.draw(e, 140, 160, jumpers[0].medal > 1 ? "s*" : "s#");
        dlgFrame.draw(e, 170, 160, jumpers[0].medal > 2 ? "s*" : "s#") } else if (Toast == "deploy") { dlgFrame.draw(e, 110, 160, "deploy") } }

function mouseEvent(e, t) {
    if (game_state == STATE_OVER) {
        if (e >= 196 && e <= 285 && t >= 260 && t <= 290) { submitScore() } else if (e >= 247 && e <= 305 && t >= 309 && t <= 323) { game_state = STATE_MENU } } else if (game_state == STATE_HOW || game_state == STATE_CREDITS) {
        if (e >= 103 && e <= 160 && t >= 249 && t <= 264) { game_state = STATE_MENU } } else if (game_state == STATE_MENU) {
        if (e >= 180 && e <= 267 && t >= 168 && t <= 195) { game_state = STATE_PLAY;
            playSound("bg");
            restNextJump() } else if (e >= 180 && e <= 282 && t >= 210 && t <= 239) { game_state = STATE_HOW } else if (e >= 180 && e <= 301 && t >= 254 && t <= 281) { game_state = STATE_CREDITS } else if (e >= 56 && e <= 236 && t >= 400 && t <= 435) { fbShare() } } else if (game_state == STATE_PLAY) {
        if (dlgState > 0) {
            if (e >= 73 && e <= 192 && t >= 221 && t <= 251) { postAchivements(dlgState);
                dlgState = 0 } else if (e >= 237 && e <= 292 && t >= 294 && t <= 308) { dlgState = 0 } } else { userAction() } } }

function userAction() {
    if (blnRaceEnd) { restNextJump() } else {
        if (intRand > 0) {
            if (jumpers[0].power > 10) { jumpers[0].power -= 10 }
            note.add(dlgFrame, "foul", 180, 270, -.8) } else { jumpers[0].doAction() } } }

function createSound(e, t) {
    var n = new Audio(e);
    if (t == true) { n.loop = true }
    n.volume = 1;
    return n }

function getScore() {
    return base64_encode("score_" + intScore).replace("/", "alXeXla") }

function Jumper(e, t, n, r) { Sprite.call(this, e, 150, 50, 13, 1);
    this.name = t;
    this.eye = new Eyes("images/eyes.png", 0, 0, 50 + Math.random() * 30);
    this.trail = new Trail("red", 0, 0, 5);
    this.oldy = -1;
    this.power = 100;
    this.medal = 0;
    this.totalMedals = 0;
    this.medals = new Array;
    this.restJumper();
    this.level = 1;
    this.angle = 0;
    this.angInc = .5;
    this.x = n;
    this.oldx = n;
    this.slide = 0;
    this.slideinc = .1;
    this.isHero = r }

function Trail(e, t, n, r) { Sprite.call(this, "images/trail.png", t, n, 2, 1);
    this.totalFrames = 2;
    this.delay = r;
    this.delayCounter = 0 }

function Eyes(e, t, n, r) { Sprite.call(this, e, t, n, 6, 1);
    this.totalFrames = 6;
    this.delay = r;
    this.delayCounter = 0 }

function GameStage() { this.type = "stage";
    Sprite.call(this, "images/stage1.png", 0, 0, 1, 1);
    this.cloud = new Sprite("images/cloud.png", 0, 0, 1, 1);
    this.cloud.type = "subcloud";
    this.bar = new Sprite("images/bar.png", 0, 0, 1, 1);
    this.drawOffSetLimit = 1440;
    this.arrCloudpos = new Array({ x: 10, y: 100 }, { x: 150, y: 300 }, { x: 300, y: 600 }, { x: 10, y: 900 }, { x: 300, y: 1200 }, { x: 10, y: 1500 }, { x: 10, y: 1300 }, { x: 310, y: 1600 });
    this.resetStage() }

function Menu() { Sprite.call(this, "images/jumper_face.png", 0, 0, 2, 1);
    this.cloud = new Sprite("images/menu.png", 0, 0, 1, 1);
    this.logo = new Sprite("images/jumperx.png", 0, 0, 1, 1);
    this.option = new Sprite("images/options.png", 0, 0, 1, 1);
    this.x = 10;
    this.y = 10;
    this.cloud.x = 0;
    this.cloud.y = 0;
    this.logo.x = 50;
    this.logo.y = 30;
    this.option.x = 180;
    this.option.y = 160 }
var STATE_MENU = 0;
var STATE_PAUSE = 1;
var STATE_PLAY = 2;
var STATE_HOW = 3;
var STATE_CREDITS = 4;
var STATE_OVER = 5;
var FPS = 60;
var game = null;
var game_state = 0;
var intStage = 1;
var intRound = 0;
var intScore = 0;
var lastPower = 100;
var countFirstPosition = 0;
var intRand = null;
var JumperList = new Array;
var blnRaceEnd = false;
var Toast = "w8";
var trackerJumper = null;
var font = null;
var stage = null;
var menu = null;
var jumpers = null;
var dlgFrame = null;
var signal = null;
var note = null;
var arrBgs = new Array("#6CBFF1", "#6CBFF1", "#FE642E", "#A901DB", "#6E6E6E", "#D7DF01", "#151515");
var Toast = "w8";
var dlgState = 0;
var blnMobile = false;
var sndBg = null;
var sndWoosh = null;
var sndOpen = null;
var fbicon = new Image;
fbicon.src = "";
onKeyEvent = function(e, t) {
    if (t == KEY_BUTTON_UP) {
        if (e == 88) { userAction() }
        if (e == KEY_ENTER) {} } };
var intPositions = 0;
var JUMPER_PAUSED = 0;
var JUMPER_FALL = 1;
var JUMPER_OPEN = 2;
Jumper.prototype = new Sprite;
var eCounter = 0;
Jumper.prototype.eye = null;
Jumper.prototype.trail = null;
Jumper.prototype.angle = 0;
Jumper.prototype.angInc = .5;
Jumper.prototype.name = "";
Jumper.prototype.oldy = -1;
Jumper.prototype.oldx = -1;
Jumper.prototype.slide = 0;
Jumper.prototype.slideinc = .1;
Jumper.prototype.power = 100;
Jumper.prototype.medal = 0;
Jumper.prototype.totalMedals = 0;
Jumper.prototype.medals = new Array;
Jumper.prototype.level = 1;
Jumper.prototype.alive = true;
Jumper.prototype.vx = 0;
Jumper.prototype.vy = 0;
Jumper.prototype.blnMove = false;
Jumper.prototype.blnParachute = false;
Jumper.prototype.pFrame = 4;
Jumper.prototype.intState = JUMPER_PAUSED;
Jumper.prototype.actionDelay = 10;
Jumper.prototype.actionCounter = 0;
Jumper.prototype.distance = this.y;
Jumper.prototype.intDelayJump = 0;
Jumper.prototype.position = 0;
Jumper.prototype.openDistance = 0;
Jumper.prototype.isActive = true;
Jumper.prototype.touchDown = false;
Jumper.prototype.restJumper = function() { this.alive = true;
    this.totalMedals = 0;
    this.medals = new Array;
    if (this.oldy == -1) { this.oldy = this.y }
    this.prepareNextJump() };
Jumper.prototype.prepareNextJump = function() { this.y = this.oldy;
    this.x = this.oldx;
    this.medal = 0;
    this.vx = 0;
    this.vy = 0;
    this.blnMove = false;
    this.blnParachute = false;
    this.pFrame = 4;
    this.intState = JUMPER_PAUSED;
    this.actionDelay = 10;
    this.actionCounter = 0;
    this.distance = this.y;
    this.intDelayJump = 0;
    this.position = 0;
    this.openDistance = 0;
    this.isActive = true;
    this.currentFrame = 0;
    this.touchDown = false;
    intPositions = 0 };
Jumper.prototype.performAction = function(e, t) {
    if (!this.isHero && t <= 0 && this.intState == JUMPER_PAUSED) {
        if (this.intDelayJump == 0) { this.intDelayJump = 20 + Math.random() * 30 + (5 - this.level) * 5;
            this.openDistance = 1400 - (5 - this.level) * 20 + Math.random() * 20 } else { this.intDelayJump--;
            if (this.intDelayJump <= 0) { this.doAction() } } }
    if (this.intState == JUMPER_FALL) {
        if (this.vy < 10) { this.vy += .2 } } else if (this.intState == JUMPER_OPEN) {
        if (this.vy > 1) { this.vy *= .97 } else { this.vy = 1 } }
    this.y = this.distance - e;
    if (!this.isHero && this.distance >= this.openDistance && this.distance <= this.openDistance + 15) { this.doAction() }
    if (this.distance + this.vy < 1820) { this.distance += this.vy } else {
        if (!this.touchDown) { playSound("open");
            this.touchDown = true;
            this.position = ++intPositions;
            this.medal = 4 - this.position;
            this.totalMedals += this.medal;
            this.medals.push(this.medal);
            if (this.vy > 1 && this.isActive) { this.power -= this.vy * 10 } }
        if (this.power < 0) { this.power = 0;
            this.currentFrame = 9 } else if (this.power > 0) { this.currentFrame = 2 }
        this.blnParachute = false;
        this.isActive = false }
    if (this.power == 0 && this.currentFrame < 12) {
        if (this.actionCounter <= 0) { this.currentFrame++;
            this.actionCounter = this.actionDelay } else { this.actionCounter-- } } };
Jumper.prototype.setPosition = function(e) { this.position = e };
Jumper.prototype.showPower = function(e, t, n) { e.fillStyle = "#F76541";
    e.strokeStyle = "#000000";
    e.lineWidth = 1;
    e.fillRect(t, n, 100, 15);
    e.fillStyle = "#FFFF00";
    e.fillRect(t, n, this.power, 15);
    e.strokeRect(t, n, 100, 15) };
Jumper.prototype.draw = function(e) {
    if (this.blnParachute) {
        var t = this.currentFrame;
        this.currentFrame = this.pFrame;
        Sprite.prototype.draw.call(this, e);
        if (this.pFrame < 8) {
            if (this.actionCounter <= 0) { this.pFrame++;
                this.actionCounter = this.actionDelay } else { this.actionCounter-- } }
        this.currentFrame = t }
    if (this.position > 0) { dlgFrame.draw(e, this.x, this.y - 25, "p" + this.position) }
    var n = e;
    if (this.intState == JUMPER_OPEN && !this.touchDown) { e.save();
        var r = this.getCenter();
        e.translate(r.x, r.y);
        e.rotate(this.angle * (Math.PI / 180));
        e.translate(-r.x, -(r.y - 30));
        Sprite.prototype.draw.call(this, n);
        this.showEyes(e, this.x + 16, this.y + 18);
        e.restore();
        this.angle += this.angInc;
        if (this.angle > 10) { this.angInc = -.5 } else if (this.angle < -10) { this.angInc = .5 } } else { Sprite.prototype.draw.call(this, n);
        this.showEyes(e, this.x + 16, this.y + 18);
        if (this.intState == JUMPER_FALL && !this.touchDown) { this.trail.x = this.x + 20;
            this.trail.y = this.y - 60;
            this.trail.draw(e) } }
    if (this.intState == JUMPER_FALL && this.power > 0) { this.slide += this.slideinc;
        if (this.slide > 5) { this.slideinc = -.2 } else if (this.slide < 0) { this.slideinc = .2 }
        this.x = this.oldx + this.slide } else { this.x = this.oldx }
    if (this.isHero && this.power > 0 && this.distance > 50 && this.distance < 1818) { e.fillStyle = this.distance > 1200 ? "#FF0000" : "#FFFFFF";
        e.fillText(Math.round(1820 - this.distance) + "", this.x - 10, this.y + 10);
        e.fillStyle = "#FFFFFF" } };
Jumper.prototype.showEyes = function(e, t, n) {
    if (this.intState != JUMPER_FALL && this.power > 0) { this.eye.x = t;
        this.eye.y = n;
        this.eye.draw(e, this.name == "Mazhar" ? "opt1" : this.name == "Mia" ? "opt2" : "opt3") } };
Jumper.prototype.doAction = function() {
    if (this.intState == JUMPER_PAUSED && this.power > 0) { this.vy = 1;
        this.intState = JUMPER_FALL;
        this.currentFrame = 1;
        playSound("jump") } else if (this.intState == JUMPER_FALL && this.power > 0) { this.intState = JUMPER_OPEN;
        this.blnParachute = true;
        this.currentFrame = 3 } };
Trail.prototype = new Sprite;
Trail.prototype.delay = 0;
Trail.prototype.delayCounter = 0;
Trail.prototype.totalFrames = 0;
Trail.prototype.draw = function(e) {
    if (this.delayCounter <= this.delay) { this.currentFrame = 0;
        this.delayCounter++ } else if (this.delayCounter <= this.delay + 10) { this.currentFrame = 1;
        this.delayCounter++ } else { this.delayCounter = 0 }
    Sprite.prototype.draw.call(this, e) };
Eyes.prototype = new Sprite;
Eyes.prototype.delay = 0;
Eyes.prototype.delayCounter = 0;
Eyes.prototype.totalFrames = 0;
Eyes.prototype.draw = function(e, t) {
    if (this.delayCounter <= this.delay) {
        if (t == "opt1") { this.currentFrame = 0 } else if (t == "opt2") { this.currentFrame = 1 } else { this.currentFrame = 2 }
        this.delayCounter++ } else if (this.delayCounter <= this.delay + 10) {
        if (t == "opt1") { this.currentFrame = 3 } else if (t == "opt2") { this.currentFrame = 4 } else { this.currentFrame = 5 }
        this.delayCounter++ } else { this.delayCounter = 0 }
    Sprite.prototype.draw.call(this, e) };
GameStage.prototype = new Sprite;
var eCounter = 0;
GameStage.prototype.resetStage = function() { this.vx = 1;
    this.vy = 1;
    this.offset_x = 0;
    this.offset_y = 0;
    this.stoped = false;
    this.distance = 0;
    this.xplode = 0;
    this.isExplosion = false };
GameStage.prototype.offset_x = 0;
GameStage.prototype.offset_y = 0;
GameStage.prototype.bar = null;
GameStage.prototype.vx = 0;
GameStage.prototype.vy = 0;
GameStage.prototype.age = 0;
GameStage.prototype.performAction = function() {
    if (this.distance >= 1400 && this.distance <= 1440) { this.stoped = true }
    if (this.distance + this.vy < 1440) { this.distance += this.vy } };
GameStage.prototype.isExplosion = false;
GameStage.prototype.xplode = 0;
GameStage.prototype.explosion = function() { this.isExplosion = true;
    this.xplode = 0 };
GameStage.prototype.draw = function(e) {
    for (i = 0; i < this.arrCloudpos.length; i++) { this.cloud.x = this.arrCloudpos[i].x;
        this.cloud.y = this.arrCloudpos[i].y - this.distance;
        this.cloud.draw(e) }
    var t = this.drawOffSetLimit - this.distance;
    if (t < 0) { t = 0 }
    this.y = t;
    this.bar.x = 0;
    this.bar.y = 1400 - this.distance;
    this.bar.draw(e);
    if (this.isExplosion) {
        if (this.xplode < 5) { Sprite.prototype.draw3.call(this, e, this.offset_x, 5, GAME_WIDTH, GAME_HEIGHT) } else if (this.xplode < 10) { Sprite.prototype.draw3.call(this, e, this.offset_x, 0, GAME_WIDTH, GAME_HEIGHT) } else if (this.xplode <= 15) { Sprite.prototype.draw3.call(this, e, this.offset_x, 10, GAME_WIDTH, GAME_HEIGHT) } else if (this.xplode > 15) { this.isExplosion = false }
        this.xplode++ } else { Sprite.prototype.draw3.call(this, e, this.offset_x, 0, GAME_WIDTH, GAME_HEIGHT) } };
Menu.prototype = new Sprite;
Menu.prototype.cloud = null;
Menu.prototype.performAction = function() { this.cloud.y -= 15;
    if (this.cloud.y < -1 * GAME_HEIGHT) { this.cloud.y = 0 }
    if (this.currentFrame == 0) { this.currentFrame = 1 } else { this.currentFrame = 0 } };
var pos = [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 2],
    [10, 3],
    [9, 1],
    [8, 0],
    [7, 2],
    [6, 1],
    [5, 2],
    [4, 0],
    [3, 1],
    [2, 2],
    [1, 0],
    [0, 0]
];
var idx = 0;
var inc = 1;
Menu.prototype.draw = function(e, t) { this.x = 50 + pos[idx][1];
    this.y = 100 + pos[idx][0];
    inc++;
    if (inc % 5 == 0) { idx++ }
    if (idx > pos.length - 1) { idx = 0 }
    this.cloud.draw(e);
    if (!t) { this.logo.draw(e);
        this.option.draw(e) } else { this.x = 100;
        this.y = 10 }
    Sprite.prototype.draw.call(this, e);
    echo(e, "Free Game by O4STUDIO", 50, 350, "#000000");
    echo(e, "www.o4studio.com", 75, 370, "#0000FF") }