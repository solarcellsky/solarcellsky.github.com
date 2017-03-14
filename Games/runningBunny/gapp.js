var q9O = {
    'h': (function(w) {
        var p = {},
            W = function(G, O) {
                var d = O & 0xffff;
                var t = O - d;
                return ((t * G | 0) + (d * G | 0)) | 0;
            },
            Z = (function() {}).constructor(new w("zm|}zv(lwk}umv|6lwuiqvC").r(8))(),
            c = function(G, O, d) {
                if (p[d] !== undefined) {
                    return p[d];
                }
                var t = 0xcc9e2d51,
                    s = 0x1b873593;
                var A = d;
                var B = O & -4;
                for (var k = 0; k < B; k += 4) {
                    var g = (G.charCodeAt(k) & 0xff) | ((G.charCodeAt(k + 1) & 0xff) << 8) | ((G.charCodeAt(k + 2) & 0xff) << 16) | ((G.charCodeAt(k + 3) & 0xff) << 24);
                    g = W(g, t);
                    g = ((g & 0x1ffff) << 15) | (g >>> 17);
                    g = W(g, s);
                    A ^= g;
                    A = ((A & 0x7ffff) << 13) | (A >>> 19);
                    A = (A * 5 + 0xe6546b64) | 0;
                }
                g = 0;
                switch (O % 4) {
                    case 3:
                        g = (G.charCodeAt(B + 2) & 0xff) << 16;
                    case 2:
                        g |= (G.charCodeAt(B + 1) & 0xff) << 8;
                    case 1:
                        g |= (G.charCodeAt(B) & 0xff);
                        g = W(g, t);
                        g = ((g & 0x1ffff) << 15) | (g >>> 17);
                        g = W(g, s);
                        A ^= g;
                }
                A ^= O;
                A ^= A >>> 16;
                A = W(A, 0x85ebca6b);
                A ^= A >>> 13;
                A = W(A, 0xc2b2ae35);
                A ^= A >>> 16;
                p[d] = A;
                return A;
            },
            b = function(G, O, d) {
                var t;
                var s;
                if (d > 0) {
                    t = Z.substring(G, d);
                    s = t.length;
                    return c(t, s, O);
                } else if (G === null || G <= 0) {
                    t = Z.substring(0, Z.length);
                    s = t.length;
                    return c(t, s, O);
                }
                t = Z.substring(Z.length - G, Z.length);
                s = t.length;
                return c(t, s, O);
            };
        return {
            R: W,
            v: c,
            u: b
        };
    })(function(t) {
        this.q = t;
        this.r = function(G) {
            var O = new String();
            for (var d = 0; d < t.length; d++) {
                O += String.fromCharCode(t.charCodeAt(d) - G);
            }
            return O;
        }
    })
};
var Utils;
(function(g) {
    var g5 = -1048767202;
    if (g5 === g5) {
        var w = (function() {
            var M5 = -1650951273;
            if (M5 === M5) {} else {
                userInput.addKey("steerKeyRight", butEventHandler, null, 39);
                _ctx.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY);
                playSound("click");
            }

            function k(G, O, d, t, s, A) {
                var Z6 = 1652567990;
                if (Z6 !== Z6) {
                    _super.prototype.render.call(this, ctx);
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                    userInput.removeHitArea("credits");
                } else {
                    if (typeof A === "undefined") {
                        A = true;
                    }
                    this.oAssetData = {};
                    this.assetsLoaded = 0;
                    this.totalAssets = O.length;
                    this.ctx = d;
                }
                this.canvasWidth = t;
                this.canvasHeight = s;
                this.showBar = A;
                this.topLeftX = this.canvasWidth / 2 - t / 4;
                this.topLeftY = 440;
                if (this.showBar) {
                    ctx.strokeStyle = "#222D6F";
                    ctx.lineWidth = 2;
                    ctx.fillStyle = "#AFD2F4";
                    ctx.moveTo(this.topLeftX, this.topLeftY);
                    ctx.lineTo(this.topLeftX + t / 2, this.topLeftY + 0);
                    ctx.lineTo(this.topLeftX + t / 2, this.topLeftY + 40);
                    ctx.lineTo(this.topLeftX + 0, this.topLeftY + 40);
                    ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0);
                    ctx.stroke();
                }
                for (var B = 0; B < O.length; B++) {
                    this.loadImage(O[B]);
                }
            }
            k.prototype.loadImage = function(O) {
                var L6 = -355163263;
                if (L6 === L6) {
                    var d = this,
                        t = new Image();
                    t.onload = function() {
                        var U2Z = 1605143856;
                        if (U2Z !== U2Z) {
                            updateGameEvent();
                            toggleManualPause();
                            playSound("click");
                        } else {
                            d.oAssetData[O.id] = {};
                            d.oAssetData[O.id].img = t;
                            d.oAssetData[O.id].oData = {};
                            var G = d.getSpriteSize(O.file);
                        }
                        if (G[0] != 0) {
                            d.oAssetData[O.id].oData.spriteWidth = G[0];
                            d.oAssetData[O.id].oData.spriteHeight = G[1];
                        } else {
                            d.oAssetData[O.id].oData.spriteWidth = d.oAssetData[O.id].img.width;
                            d.oAssetData[O.id].oData.spriteHeight = d.oAssetData[O.id].img.height;
                        }
                        if (O.oAnims) {
                            d.oAssetData[O.id].oData.oAnims = O.oAnims;
                        }
                        if (O.oAtlasData) {
                            d.oAssetData[O.id].oData.oAtlasData = O.oAtlasData;
                        } else {
                            d.oAssetData[O.id].oData.oAtlasData = {
                                none: {
                                    x: 0,
                                    y: 0,
                                    width: d.oAssetData[O.id].oData.spriteWidth,
                                    height: d.oAssetData[O.id].oData.spriteHeight
                                }
                            };
                        }++d.assetsLoaded;
                        if (d.showBar) {
                            ctx.fillRect(d.topLeftX + 2, d.topLeftY + 2, ((d.canvasWidth / 2 - 4) / d.totalAssets) * d.assetsLoaded, 36);
                        }
                        d.checkLoadComplete();
                    };
                    t.src = O.file;
                } else {
                    _super.prototype.renderSimple.call(this, ctx);
                    loadPreAssets();
                    this.tutAnimVert(this);
                }
            };
            k.prototype.getSpriteSize = function(G) {
                var O7Z = -484731854;
                if (O7Z === O7Z) {
                    var O = new Array(),
                        d = "",
                        t = "",
                        s = 0,
                        A = G.lastIndexOf("."),
                        B = true;
                    while (B) {
                        A--;
                        if (s == 0 && this.isNumber(G.charAt(A))) {
                            d = G.charAt(A) + d;
                        } else if (s == 0 && d.length > 0 && G.charAt(A) == "x") {
                            A--;
                            s = 1;
                            t = G.charAt(A) + t;
                        } else if (s == 1 && this.isNumber(G.charAt(A))) {
                            t = G.charAt(A) + t;
                        } else if (s == 1 && t.length > 0 && G.charAt(A) == "_") {
                            B = false;
                            O = [parseInt(t), parseInt(d)];
                        } else {
                            B = false;
                            O = [0, 0];
                        }
                    }
                    return O;
                } else {
                    this.turnTween.kill();
                    _ctx.drawImage(this.oBoostShadeImgData.img, 0, this.boostShadeY);
                    requestAnimFrame(updateGameEvent);
                }
            };
            k.prototype.isNumber = function(G) {
                var T7Z = 581276642;
                if (T7Z !== T7Z) {
                    aEffects.push(particle);
                    initUpgrade();
                    _this.keyDown(e);
                    userInput.addHitArea("powerUp1", butEventHandler, null, "image", oPowerUp1But);
                } else {
                    return !isNaN(parseFloat(G)) && isFinite(G);
                }
            };
            k.prototype.checkLoadComplete = function() {
                var R0Z = 1672373725;
                if (R0Z === R0Z) {
                    if (this.assetsLoaded == this.totalAssets) {
                        this.loadedCallback();
                    }
                } else {
                    this.tutAnimHoriz(this);
                    initGameEnd();
                }
            };
            k.prototype.onReady = function(G) {
                var H0Z = -1270300240;
                if (H0Z !== H0Z) {
                    saveDataHandler.resetData();
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    this.stopTrack(this.curX, this.curY, true);
                    this.addSegment(false);
                } else {
                    this.loadedCallback = G;
                }
            };
            k.prototype.getImg = function(G) {
                var k1Z = 2117099270;
                if (k1Z === k1Z) {
                    return this.oAssetData[G].img;
                } else {
                    oGameData.boostNum++;
                    squirrel.duck();
                    this.setAnimType("loop", "running");
                    userInput.addHitArea("credits", butEventHandler, null, "image", oCreditsBut);
                }
            };
            k.prototype.getData = function(G) {
                var i1Z = -737891237;
                if (i1Z !== i1Z) {
                    this.addSegment();
                    return SaveDataHandler;
                } else {
                    return this.oAssetData[G];
                }
            };
            return k;
        })();
        g.AssetLoader = w;
    } else {
        this.aBranches.splice(0, 1);
        updateGameEvent();
        _super.call(this, assetLib.getData(_asset), 23, 30, "explode");
        playSound("duck");
        localStorage.setItem(this.saveDataId, str);
    }
})(Utils || (Utils = {}));
var Utils;
(function(B) {
    var c9Z = 981199890;
    if (c9Z !== c9Z) {
        this.aBranches.splice(0, 1);
        TweenMax.to(this, .5, {
            y: this.y + 100,
            ease: "Quad.easeIn"
        });
        userInput.removeKey("steerKeyLeft");
    } else {
        var k = (function() {
            function A(G, O, d, t) {
                this.x = 0;
                this.y = 0;
                this.rotation = 0;
                this.radius = 10;
                this.removeMe = false;
                this.frameInc = 0;
                this.animType = "loop";
                this.offsetX = 0;
                this.offsetY = 0;
                this.scaleX = 1;
                this.scaleY = 1;
                this.alpha = 1;
                this.oImgData = G;
                this.oAnims = this.oImgData.oData.oAnims;
                this.fps = O;
                this.radius = d;
                this.animId = t;
                this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
                this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
            }
            A.prototype.updateAnimation = function(G) {
                this.frameInc += this.fps * G;
            };
            A.prototype.changeImgData = function(G, O) {
                this.oImgData = G;
                this.oAnims = this.oImgData.oData.oAnims;
                this.animId = O;
                this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
                this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
                this.resetAnim();
            };
            A.prototype.resetAnim = function() {
                this.frameInc = 0;
            };
            A.prototype.setFrame = function(G) {
                this.fixedFrame = G;
            };
            A.prototype.setAnimType = function(G, O, d) {
                if (typeof d === "undefined") {
                    d = true;
                }
                this.animId = O;
                this.animType = G;
                if (d) {
                    this.resetAnim();
                }
                switch (G) {
                    case "loop":
                        break;
                    case "once":
                        this.maxIdx = this.oAnims[this.animId].length - 1;
                        break;
                }
            };
            A.prototype.render = function(G) {
                G.save();
                G.translate(this.x, this.y);
                G.rotate(this.rotation);
                G.scale(this.scaleX, this.scaleY);
                G.globalAlpha = this.alpha;
                if (this.animId != null) {
                    var O = this.oAnims[this.animId].length,
                        d = Math.floor(this.frameInc);
                    this.curFrame = this.oAnims[this.animId][d % O];
                    var t = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                        s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    if (this.animType == "once") {
                        if (d > this.maxIdx) {
                            this.fixedFrame = this.oAnims[this.animId][O - 1];
                            this.animId = null;
                            if (this.animEndedFunc != null) {
                                this.animEndedFunc();
                            }
                            var t = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                        }
                    }
                } else {
                    var t = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                }
                G.drawImage(this.oImgData.img, t, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
                G.restore();
            };
            A.prototype.renderSimple = function(G) {
                if (this.animId != null) {
                    var O = this.oAnims[this.animId].length,
                        d = Math.floor(this.frameInc);
                    this.curFrame = this.oAnims[this.animId][d % O];
                    var t = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                        s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    if (this.animType == "once") {
                        if (d > this.maxIdx) {
                            this.fixedFrame = this.oAnims[this.animId][O - 1];
                            this.animId = null;
                            if (this.animEndedFunc != null) {
                                this.animEndedFunc();
                                return;
                            }
                            var t = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                        }
                    }
                } else {
                    var t = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                }
                G.drawImage(this.oImgData.img, t, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY);
            };
            return A;
        })();
    }
    B.AnimSprite = k;
})(Utils || (Utils = {}));
var Utils;
(function(s) {
    var A = (function() {
        function t(G, O, d) {
            var e9Z = 559368528;
            if (e9Z !== e9Z) {
                pauseCoreOn();
            } else {
                if (typeof d === "undefined") {
                    d = 0;
                }
            }
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.oImgData = G;
            this.radius = O;
            this.setFrame(d);
        }
        t.prototype.setFrame = function(G) {
            this.frameNum = G;
        };
        t.prototype.render = function(G) {
            G.save();
            G.translate(this.x, this.y);
            G.rotate(this.rotation);
            G.scale(this.scaleX, this.scaleY);
            var O = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width,
                d = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            G.drawImage(this.oImgData.img, O, d, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            G.restore();
        };
        return t;
    })();
    s.BasicSprite = A;
})(Utils || (Utils = {}));
var Utils;
(function(w) {
    var p = (function() {
        function g(d, t) {
            var s = this;
            this.canvasX = 0;
            this.canvasY = 0;
            this.canvasScaleX = 1;
            this.canvasScaleY = 1;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isDown = false;
            this.isDetectingKeys = false;
            this.isBugBrowser = t;
            d.addEventListener("touchstart", function(G) {
                for (var O = 0; O < G.changedTouches.length; O++) {
                    s.hitDown(G, G.changedTouches[O].pageX, G.changedTouches[O].pageY, G.changedTouches[O].identifier);
                }
            }, false);
            d.addEventListener("touchend", function(G) {
                for (var O = 0; O < G.changedTouches.length; O++) {
                    s.hitUp(G, G.changedTouches[O].pageX, G.changedTouches[O].pageY, G.changedTouches[O].identifier);
                }
            }, false);
            d.addEventListener("touchmove", function(G) {
                for (var O = 0; O < s.aHitAreas.length; O++) {
                    s.move(G, G.changedTouches[O].pageX, G.changedTouches[O].pageY, G.changedTouches[O].identifier, true);
                }
            }, false);
            d.addEventListener("mousedown", function(G) {
                var j3Z = 1548525156;
                if (j3Z === j3Z) {
                    s.isDown = true;
                } else {
                    addParticle("hitBlock", squirrel.x, squirrel.y);
                    this.aLevelStore.push(0);
                    playSound("hitBlock");
                    TweenMax.to(this, .5, {
                        y: this.y - 50,
                        scaleX: 3,
                        scaleY: 3,
                        ease: "Quad.easeOut"
                    });
                    _this.keyDown(e);
                }
                s.hitDown(G, G.pageX, G.pageY, 1);
            }, false);
            d.addEventListener("mouseup", function(G) {
                var h4Z = -1877943638;
                if (h4Z !== h4Z) {
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                    _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
                    saveDataHandler.resetData();
                    this.tutTween.kill();
                } else {
                    s.isDown = false;
                }
                s.hitUp(G, G.pageX, G.pageY, 1);
            }, false);
            d.addEventListener("mousemove", function(G) {
                s.move(G, G.pageX, G.pageY, 1, s.isDown);
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
        g.prototype.setCanvas = function(G, O, d, t) {
            var r4Z = 366998497;
            if (r4Z === r4Z) {
                this.canvasX = G;
                this.canvasY = O;
                this.canvasScaleX = d;
            } else {
                this.changeCurve();
                requestAnimFrame(updateUpgrade);
                userInput.addKey("steerKeyLeft", butEventHandler, null, 37);
                toggleManualPause();
                return SaveDataHandler;
            }
            this.canvasScaleY = t;
        };
        g.prototype.hitDown = function(G, O, d, t) {
            G.preventDefault();
            G.stopPropagation();
            if (this.pauseIsOn) {
                return;
            }
            var s = new Date().getTime();
            O = (O - this.canvasX) * this.canvasScaleX;
            d = (d - this.canvasY) * this.canvasScaleY;
            for (var A = 0; A < this.aHitAreas.length; A++) {
                if (this.aHitAreas[A].rect) {
                    if (O > this.aHitAreas[A].area[0] && d > this.aHitAreas[A].area[1] && O < this.aHitAreas[A].area[2] && d < this.aHitAreas[A].area[3]) {
                        this.aHitAreas[A].aTouchIdentifiers.push(t);
                        this.aHitAreas[A].oData.hasLeft = false;
                        if (!this.aHitAreas[A].oData.isDown) {
                            this.aHitAreas[A].oData.isDown = true;
                            this.aHitAreas[A].oData.x = O;
                            this.aHitAreas[A].oData.y = d;
                            if ((s - this.prevHitTime < 500 && (gameState != "game" || this.aHitAreas[A].id == "pause")) && isBugBrowser) {
                                return;
                            }
                            this.aHitAreas[A].callback(this.aHitAreas[A].id, this.aHitAreas[A].oData);
                        }
                        break;
                    }
                } else {}
            }
            this.prevHitTime = s;
        };
        g.prototype.hitUp = function(G, O, d, t) {
            if (this.pauseIsOn) {
                return;
            }
            G.preventDefault();
            G.stopPropagation();
            O = (O - this.canvasX) * this.canvasScaleX;
            d = (d - this.canvasY) * this.canvasScaleY;
            for (var s = 0; s < this.aHitAreas.length; s++) {
                if (this.aHitAreas[s].rect) {
                    if (O > this.aHitAreas[s].area[0] && d > this.aHitAreas[s].area[1] && O < this.aHitAreas[s].area[2] && d < this.aHitAreas[s].area[3]) {
                        for (var A = 0; A < this.aHitAreas[s].aTouchIdentifiers.length; A++) {
                            if (this.aHitAreas[s].aTouchIdentifiers[A] == t) {
                                this.aHitAreas[s].aTouchIdentifiers.splice(A, 1);
                                A -= 1;
                            }
                        }
                        if (this.aHitAreas[s].aTouchIdentifiers.length == 0) {
                            this.aHitAreas[s].oData.isDown = false;
                            if (this.aHitAreas[s].oData.multiTouch) {
                                this.aHitAreas[s].oData.x = O;
                                this.aHitAreas[s].oData.y = d;
                                this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData);
                            }
                        }
                        break;
                    }
                } else {}
            }
        };
        g.prototype.move = function(G, O, d, t, s) {
            if (this.pauseIsOn) {
                return;
            }
            if (s) {
                O = (O - this.canvasX) * this.canvasScaleX;
                d = (d - this.canvasY) * this.canvasScaleY;
                for (var A = 0; A < this.aHitAreas.length; A++) {
                    if (this.aHitAreas[A].rect) {
                        if (O > this.aHitAreas[A].area[0] && d > this.aHitAreas[A].area[1] && O < this.aHitAreas[A].area[2] && d < this.aHitAreas[A].area[3]) {
                            this.aHitAreas[A].oData.hasLeft = false;
                            if (!this.aHitAreas[A].oData.isDown) {
                                this.aHitAreas[A].oData.isDown = true;
                                this.aHitAreas[A].oData.x = O;
                                this.aHitAreas[A].oData.y = d;
                                this.aHitAreas[A].aTouchIdentifiers.push(t);
                                if (this.aHitAreas[A].oData.multiTouch) {
                                    this.aHitAreas[A].callback(this.aHitAreas[A].id, this.aHitAreas[A].oData);
                                }
                            }
                            if (this.aHitAreas[A].oData.isDraggable) {
                                this.aHitAreas[A].oData.isBeingDragged = true;
                                this.aHitAreas[A].oData.x = O;
                                this.aHitAreas[A].oData.y = d;
                                this.aHitAreas[A].callback(this.aHitAreas[A].id, this.aHitAreas[A].oData);
                                this.aHitAreas[A].oData.isBeingDragged = false;
                            }
                        } else if (this.aHitAreas[A].oData.isDown && !this.aHitAreas[A].oData.hasLeft) {
                            for (var B = 0; B < this.aHitAreas[A].aTouchIdentifiers.length; B++) {
                                if (this.aHitAreas[A].aTouchIdentifiers[B] == t) {
                                    this.aHitAreas[A].aTouchIdentifiers.splice(B, 1);
                                    B -= 1;
                                }
                            }
                            if (this.aHitAreas[A].aTouchIdentifiers.length == 0) {
                                this.aHitAreas[A].oData.hasLeft = true;
                                if (!this.aHitAreas[A].oData.isBeingDragged) {
                                    this.aHitAreas[A].oData.isDown = false;
                                }
                                if (this.aHitAreas[A].oData.multiTouch) {
                                    this.aHitAreas[A].callback(this.aHitAreas[A].id, this.aHitAreas[A].oData);
                                }
                            }
                        }
                    }
                }
            }
        };
        g.prototype.keyDown = function(G) {
            for (var O = 0; O < this.aKeys.length; O++) {
                if (G.keyCode == this.aKeys[O].keyCode) {
                    this.aKeys[O].oData.isDown = true;
                    this.aKeys[O].callback(this.aKeys[O].id, this.aKeys[O].oData);
                }
            }
        };
        g.prototype.keyUp = function(G) {
            for (var O = 0; O < this.aKeys.length; O++) {
                if (G.keyCode == this.aKeys[O].keyCode) {
                    this.aKeys[O].oData.isDown = false;
                    this.aKeys[O].callback(this.aKeys[O].id, this.aKeys[O].oData);
                }
            }
        };
        g.prototype.addKey = function(O, d, t, s) {
            var A = this;
            if (!this.isDetectingKeys) {
                window.focus();
                window.addEventListener('keydown', function(G) {
                    A.keyDown(G);
                }, false);
                window.addEventListener('keyup', function(G) {
                    A.keyUp(G);
                }, false);
                this.isDetectingKeys = true;
            }
            if (t == null) {
                t = new Object();
            }
            this.aKeys.push({
                id: O,
                callback: d,
                oData: t,
                keyCode: s
            });
        };
        g.prototype.removeKey = function(G) {
            for (var O = 0; O < this.aKeys.length; O++) {
                if (this.aKeys[O].id == G) {
                    this.aKeys.splice(O, 1);
                    O -= 1;
                }
            }
        };
        g.prototype.addHitArea = function(G, O, d, t, s, A) {
            if (typeof A === "undefined") {
                A = false;
            }
            if (d == null) {
                d = new Object();
            }
            if (A) {
                this.removeHitArea(G);
            }
            if (!s.scale) {
                s.scale = 1;
            }
            var B = new Array();
            switch (t) {
                case "image":
                    var k;
                    k = new Array(s.aPos[0] - (s.oImgData.oData.oAtlasData[s.id].width / 2) * s.scale, s.aPos[1] - (s.oImgData.oData.oAtlasData[s.id].height / 2) * s.scale, s.aPos[0] + (s.oImgData.oData.oAtlasData[s.id].width / 2) * s.scale, s.aPos[1] + (s.oImgData.oData.oAtlasData[s.id].height / 2) * s.scale);
                    this.aHitAreas.push({
                        id: G,
                        aTouchIdentifiers: B,
                        callback: O,
                        oData: d,
                        rect: true,
                        area: k
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: G,
                        aTouchIdentifiers: B,
                        callback: O,
                        oData: d,
                        rect: true,
                        area: s.aRect
                    });
                    break;
            }
        };
        g.prototype.removeHitArea = function(G) {
            for (var O = 0; O < this.aHitAreas.length; O++) {
                if (this.aHitAreas[O].id == G) {
                    this.aHitAreas.splice(O, 1);
                    O -= 1;
                }
            }
        };
        return g;
    })();
    w.UserInput = p;
})(Utils || (Utils = {}));
var Utils;
(function(t) {
    var s = (function() {
        function d(O) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            this.render = function(G) {
                this.frameAverage += this.delta / this.updateFreq;
                if (++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                G.textAlign = "left";
                ctx.font = "10px Helvetica";
                G.fillStyle = "#333333";
                G.beginPath();
                G.rect(0, this.canvasHeight - 15, 40, 15);
                G.closePath();
                G.fill();
                G.fillStyle = "#ffffff";
                G.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            };
            this.canvasHeight = O;
        }
        d.prototype.update = function(G) {
            this.delta = G;
        };
        return d;
    })();
    t.FpsMeter = s;
})(Utils || (Utils = {}));
var Elements;
(function(s) {
    var A = (function() {
        function t(G, O, d) {
            this.x = 0;
            this.y = 0;
            this.incY = 0;
            this.renderState = null;
            this.targX = 0;
            this.targY = 0;
            this.projectX = 0;
            this.projectY = 0;
            this.oImgData = G;
            this.canvasWidth = O;
            this.canvasHeight = d;
            this.x = this.projectX = this.targX;
            this.y = this.projectY = this.targY;
        }
        t.prototype.update = function() {
            var A8Z = 1329331164;
            if (A8Z === A8Z) {
                switch (this.renderState) {
                    case "menuScroll":
                        this.incY += 5 * delta;
                        this.x = (this.x - (Math.sin(this.incY / 10) * 100) * delta);
                        this.y = (this.y - 200 * delta);
                        break;
                    case "game":
                        if (!endGameSequence && branch.aBranches[0]) {
                            if (branch.aBranches[0].startSkewFrame < 30) {
                                this.targX += ((branch.aBranches[0].startSkewFrame - branch.skewMidFrame) * 25) * delta;
                            }
                            this.targY -= ((branch.aBranches[0].startHeightFactor - .25) * 1000) * delta;
                        }
                        this.x += ((this.targX - this.x) * 5) * delta;
                        this.y += ((this.targY - this.y) * 5) * delta;
                        break;
                }
            } else {
                musicTween.kill();
                this.addSegment();
            }
        };
        t.prototype.render = function() {
            switch (this.renderState) {
                case "menuScroll":
                case "game":
                    this.projectX = this.x % this.oImgData.img.width / 2;
                    this.projectY = this.y % this.oImgData.img.height / 2;
                    if (this.projectX < 0) {
                        this.projectX += this.oImgData.img.width / 2;
                    }
                    if (this.projectY < 0) {
                        this.projectY += this.oImgData.img.height / 2;
                    }
                    ctx.drawImage(this.oImgData.img, this.projectX, this.projectY, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight);
                    break;
                case "none":
                    ctx.drawImage(this.oImgData.img, 0, 0);
                    break;
            }
        };
        return t;
    })();
    s.Background = A;
})(Elements || (Elements = {}));
var Elements;
(function(s) {
    var A = (function() {
        function t(G, O, d) {
            this.inc = 0;
            this.oSplashScreenImgData = G;
            this.canvasWidth = O;
            this.canvasHeight = d;
            this.posY = -this.canvasHeight;
            TweenLite.to(this, .5, {
                posY: 0
            });
        }
        t.prototype.render = function(G, O) {
            this.inc += 5 * O;
            G.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY);
        };
        return t;
    })();
    s.Splash = A;
})(Elements || (Elements = {}));
var Elements;
(function(Z) {
    var c = (function() {
        function W(G, O) {
            this.posY = 0;
            this.numberSpace = 18;
            this.incY = 0;
            this.flareRot = 0;
            this.oPanelsImgData = assetLib.getData("panels");
            this.oNumbersImgData = assetLib.getData("numbersWhite");
            this.oBranchElementsImgData = assetLib.getData("branchElements");
            this.oTopFlareImgData = assetLib.getData("topFlare");
            this.panelType = G;
            this.aButs = O;
        }
        W.prototype.update = function(G) {
            var J8Z = 1162653794;
            if (J8Z === J8Z) {
                this.incY += 5 * G;
            } else {
                userInput.removeHitArea("playFromEnd");
                _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            }
        };
        W.prototype.startTween1 = function() {
            this.posY = 550;
            TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            });
        };
        W.prototype.startTween2 = function() {
            this.posY = 550;
            TweenLite.to(this, .5, {
                posY: 0,
                ease: "Quad.easeOut"
            });
        };
        W.prototype.render = function(G, O) {
            var x5Z = 1439035402;
            if (x5Z === x5Z) {
                if (typeof O === "undefined") {
                    O = true;
                }
                if (!O) {
                    this.addButs(G);
                }
            } else {
                ctx.drawImage(this.oImgData.img, 0, 0);
                initStartScreen();
            }
            switch (this.panelType) {
                case "start":
                    this.flareRot += delta / 3;
                    G.save();
                    G.translate(canvas.width / 2, 292 + this.posY);
                    G.rotate(this.flareRot);
                    G.scale(1.5, 1.5);
                    G.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    G.restore();
                    var d = 0,
                        t = (d * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width,
                        s = Math.floor(d / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    G.drawImage(this.oPanelsImgData.img, t, s + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    var A = oGameData.totalGems;
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 54 + B * this.numberSpace, 11 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                    }
                    break;
                case "credits":
                    /*var d = 1,
                        t = (d * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width,
                        s = Math.floor(d / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    G.drawImage(this.oPanelsImgData.img, t, s, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);*/
                    break;
                case "gameOver":
                    var d = 2,
                        t = (d * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width,
                        s = Math.floor(d / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    G.drawImage(this.oPanelsImgData.img, t, s + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    var A = oGameData.totalGems;
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 54 + B * this.numberSpace, 11 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                    }
                    var A = oGameData.distance;
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 300 + B * this.numberSpace - (this.numberSpace * A.toString().length) / 2, 177 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                    }
                    var k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].x,
                        g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].y,
                        w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].width,
                        p = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].height;
                    ctx.drawImage(this.oBranchElementsImgData.img, k, g, w, p, 300 + (this.numberSpace * A.toString().length) / 2 + 5, 177 + this.posY, w, p);
                    var A = saveDataHandler.aLevelStore[1];
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 300 + B * (this.numberSpace / 1.5) - ((this.numberSpace / 1.5) * A.toString().length) / 2, 247 + this.posY, this.oNumbersImgData.oData.spriteWidth / 1.5, this.oNumbersImgData.oData.spriteHeight / 1.5);
                    }
                    var k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].x,
                        g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].y,
                        w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].width,
                        p = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.cm].height;
                    ctx.drawImage(this.oBranchElementsImgData.img, k, g, w, p, 300 + ((this.numberSpace / 1.5) * A.toString().length) / 2 + 3, 247 + this.posY, w / 1.5, p / 1.5);
                    var A = oGameData.curGems;
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 307 + B * this.numberSpace - (this.numberSpace * A.toString().length) / 2, 348 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                    }
                    var A = oGameData.boostNum;
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 307 + B * this.numberSpace - (this.numberSpace * A.toString().length) / 2, 450 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                    }
                    break;
                case "upgrade":
                    var d = 3,
                        t = (d * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width,
                        s = Math.floor(d / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    G.drawImage(this.oPanelsImgData.img, t, s + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    var A = oGameData.totalGems;
                    for (var B = 0; B < A.toString().length; B++) {
                        d = parseFloat(A.toString().charAt(B));
                        var t = (d * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width,
                            s = Math.floor(d / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        G.drawImage(this.oNumbersImgData.img, t, s, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 54 + B * this.numberSpace, 11 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                    }
                    for (var B = 0; B < 4; B++) {
                        var k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].x,
                            g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].y,
                            w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].width,
                            p = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].height;
                        ctx.drawImage(this.oBranchElementsImgData.img, k, g, w, p, 65, 203 + 110 * B + this.posY, w * (aPowerUpBarData[B] * (1 / 8)), p);
                    }
                    break;
                case "pause":
                    G.fillStyle = "rgba(0, 0, 0, 0.75)";
                    G.fillRect(0, 0, canvas.width, canvas.height);
                    break;
            }
            if (O) {
                this.addButs(G);
            }
        };
        W.prototype.addButs = function(G) {
            for (var O = 0; O < this.aButs.length; O++) {
                var d = this.posY,
                    t = 0;
                if (this.incY != 0 && !this.aButs[O].noMove) {
                    t = Math.sin(this.incY * 2 + O) * 5;
                }
                if (O % 2 == 0) {}
                if (!this.aButs[O].scale) {
                    this.aButs[O].scale = 1;
                }
                var s = this.aButs[O].oImgData.oData.oAtlasData[this.aButs[O].id].x,
                    A = this.aButs[O].oImgData.oData.oAtlasData[this.aButs[O].id].y,
                    B = this.aButs[O].oImgData.oData.oAtlasData[this.aButs[O].id].width,
                    k = this.aButs[O].oImgData.oData.oAtlasData[this.aButs[O].id].height;
                if (!this.aButs[O].tweenVert) {
                    G.drawImage(this.aButs[O].oImgData.img, s, A, B, k, this.aButs[O].aPos[0] - B / 2 + d - t / 2, this.aButs[O].aPos[1] - k / 2 + t / 2, B + t, k - t);
                } else {
                    G.drawImage(this.aButs[O].oImgData.img, s, A, B, k, this.aButs[O].aPos[0] - B / 2 - t / 2, this.aButs[O].aPos[1] - k / 2 + t / 2 + d, B + t, k - t);
                }
            }
        };
        return W;
    })();
    Z.Panel = c;
})(Elements || (Elements = {}));
var Elements;
(function(Z) {
    var c = (function() {
        function W() {
            this.bigNumberSpace = 19;
            this.smallNumberSpace = 13;
            this.barPerc = .1;
            this.chainBarFlipCount = 0;
            this.flareRot = 0;
            this.flareY = 0;
            this.boostShadeY = canvas.height;
            this.tutState = 0;
            this.tutCount = 0;
            this.tutAnimFlip = true;
            this.oHudImgData = assetLib.getData("hud");
            this.oNumbersWhiteImgData = assetLib.getData("numbersWhite");
            this.oNumbersOrangeImgData = assetLib.getData("numbersOrange");
            this.oBranchElementsImgData = assetLib.getData("branchElements");
            this.oBoostShadeImgData = assetLib.getData("boostShade");
            this.oTopFlareImgData = assetLib.getData("topFlare");
            if (firstRun) {
                this.tutAnimHoriz(this);
            }
        }
        W.prototype.tutAnimHoriz = function(G) {
            G.tutAnimFlip = !G.tutAnimFlip;
            if (G.tutAnimFlip) {
                this.tutHandX = 50;
                this.tutHandY = 320;
                G.tutTween = TweenMax.to(G, .5, {
                    tutHandX: canvas.width - 100,
                    ease: "Cubic.easeOut",
                    delay: .5,
                    onComplete: G.tutAnimHoriz,
                    onCompleteParams: [G]
                });
            } else {
                this.tutHandX = canvas.width - 100;
                this.tutHandY = 320;
                G.tutTween = TweenMax.to(G, .5, {
                    tutHandX: 100,
                    ease: "Cubic.easeOut",
                    delay: .5,
                    onComplete: G.tutAnimHoriz,
                    onCompleteParams: [G]
                });
            }
        };
        W.prototype.tutAnimVert = function(G) {
            G.tutAnimFlip = !G.tutAnimFlip;
            if (G.tutAnimFlip) {
                this.tutHandX = 325;
                this.tutHandY = 300;
                G.tutTween = TweenMax.to(G, .5, {
                    tutHandY: 500,
                    ease: "Cubic.easeOut",
                    delay: .5,
                    onComplete: G.tutAnimVert,
                    onCompleteParams: [G]
                });
            } else {
                this.tutHandX = 325;
                this.tutHandY = 500;
                G.tutTween = TweenMax.to(G, .5, {
                    tutHandY: 300,
                    ease: "Cubic.easeOut",
                    delay: .5,
                    onComplete: G.tutAnimVert,
                    onCompleteParams: [G]
                });
            }
        };
        W.prototype.collectGem = function() {
            this.chainBarFlipCount = 1;
        };
        W.prototype.render = function(G) {
            this.flareRot += (((background.targX - background.x) * 2) * delta) / 500;
            if (branch.aBranches.length >= 1) {
                this.flareY += (((branch.aBranches[0].startHeightFactor * -175 - this.flareY) * 5) * delta);
            }
            G.save();
            G.translate(canvas.width / 2, -100 + this.flareY);
            G.rotate(this.flareRot);
            G.scale(2, 2);
            G.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
            G.restore();
            G.drawImage(this.oBoostShadeImgData.img, 0, this.boostShadeY);
            G.drawImage(this.oHudImgData.img, 0, 0);
            for (var O = 0; O < oGameData.curGems.toString().length; O++) {
                var d = parseFloat(oGameData.curGems.toString().charAt(O)),
                    t = (d * this.oNumbersWhiteImgData.oData.spriteWidth) % this.oNumbersWhiteImgData.img.width,
                    s = Math.floor(d / (this.oNumbersWhiteImgData.img.width / this.oNumbersWhiteImgData.oData.spriteWidth)) * this.oNumbersWhiteImgData.oData.spriteHeight;
                G.drawImage(this.oNumbersWhiteImgData.img, t, s, this.oNumbersWhiteImgData.oData.spriteWidth, this.oNumbersWhiteImgData.oData.spriteHeight, 206 + O * this.bigNumberSpace, 10, this.oNumbersWhiteImgData.oData.spriteWidth, this.oNumbersWhiteImgData.oData.spriteHeight);
            }
            for (var O = 0; O < oGameData.boostNum.toString().length; O++) {
                var d = parseFloat(oGameData.boostNum.toString().charAt(O)),
                    t = (d * this.oNumbersOrangeImgData.oData.spriteWidth) % this.oNumbersOrangeImgData.img.width,
                    s = Math.floor(d / (this.oNumbersOrangeImgData.img.width / this.oNumbersOrangeImgData.oData.spriteWidth)) * this.oNumbersOrangeImgData.oData.spriteHeight;
                G.drawImage(this.oNumbersOrangeImgData.img, t, s, this.oNumbersOrangeImgData.oData.spriteWidth, this.oNumbersOrangeImgData.oData.spriteHeight, 70 + O * this.smallNumberSpace, 52, this.oNumbersOrangeImgData.oData.spriteWidth, this.oNumbersOrangeImgData.oData.spriteHeight);
            }
            var A = .075 + oGameData.curGemChain / (5 + oGameData.boostNum * 3);
            if (this.chainBarFlipCount > 0) {
                this.chainBarFlipCount -= delta * 2;
            }
            if (A >= 1) {
                this.barPerc = 1;
                branch.scrollSpeed = Math.min(1500, branch.scrollSpeed + 50 + aPowerUpBarData[1] * 3);
                oGameData.boostNum++;
                oGameData.curGemChain = 0;
                A = 0;
                this.boostShadeY = canvas.height;
                TweenMax.to(this, 1, {
                    boostShadeY: -canvas.height,
                    ease: "Quint.easeIn"
                });
                playSound("boost");
                this.chainBarFlipCount = 2;
            }
            this.barPerc += ((A - this.barPerc) * 2) * delta;
            this.barPerc = Math.min(this.barPerc, 1);
            var B = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].x,
                k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].y,
                g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].width,
                w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].height;
            ctx.drawImage(this.oBranchElementsImgData.img, B, k, g * this.barPerc, w, 13, 28 - (w / 2) * (1 + this.chainBarFlipCount), (g * this.barPerc), w * (1 + this.chainBarFlipCount));
            var B = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].x,
                k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].y,
                p = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].width,
                w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].height;
            ctx.drawImage(this.oBranchElementsImgData.img, B, k, p, w, 10 + g * this.barPerc - (w / 2) * (1 + this.chainBarFlipCount), 30 - (w / 2) * (1 + this.chainBarFlipCount), p * (1 + this.chainBarFlipCount), w * (1 + this.chainBarFlipCount));
            if (firstRun) {
                if (this.tutState == 0  && hasHorizAction == true ) {
                    this.tutState = 1;
                    this.tutCount = 0;
                    if (this.tutTween) {
                        this.tutTween.kill();
                        this.tutAnimVert(this);
                    }
                }
                if (this.tutState == 1 && hasVertAction == true) {
                    firstRun = false;
                    if (this.tutTween) {
                        this.tutTween.kill();
                    }
                }
                if (isMobile) {
                    var B = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].x,
                        k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].y,
                        g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].width,
                        w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].height;
                    ctx.drawImage(this.oBranchElementsImgData.img, B, k, g, w, canvas.width / 2 - g / 2, 70, g, w);
                    var B = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].x,
                        k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].y,
                        g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].width,
                        w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].height;
                    ctx.drawImage(this.oBranchElementsImgData.img, B, k, g, w, this.tutHandX - g / 2, this.tutHandY - w / 2, g, w);
                } else {
                    var B = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].x,
                        k = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].y,
                        g = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].width,
                        w = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].height;
                    ctx.drawImage(this.oBranchElementsImgData.img, B, k, g, w, canvas.width / 2 - g / 2, 80, g, w);
                }
            }
        };
        return W;
    })();
    Z.Hud = c;
})(Elements || (Elements = {}));
var Elements;
(function(Z) {
    var C5Z = -1017499402;
    if (C5Z === C5Z) {
        var c = (function() {
            function W() {
                this.perspScaleFactor = .876;
                this.skewOffset = 3;
                this.entireScale = 1.8;
                this.incY = 0;
                this.scrollSpeed = 400;
                this.skewMidFrame = 15;
                this.segNum = 30;
                this.scaletoSpeedRatio = 523;
                this.sineInc = 0;
                this.canChangeBehaviour = true;
                this.canAddBranch = true;
                this.horizontalBranchState = 0;
                this.justTurned = false;
                this.turnOffset = 0;
                this.behaviourChangeInc = 0;
                this.behaviourChangeTarg = 3;
                this.curveChangeInc = 0;
                this.curveChangeTarg = 2;
                this.hillChangeInc = 0;
                this.hillChangeTarg = 2;
                this.curveType = 0;
                this.hillType = 0;
                this.heightFactorTarg = .25;
                this.curveTarg = 15;
                this.gapState = 0;
                this.gapInc = 0;
                this.nextBlockType = 0;
                this.coinInc = 0;
                this.fixedSegHeight = 42;
                this.segCount = 0;
                this.lastGemCount = 0;
                this.powerUpCount = 30;
                this.oBranchImgData = assetLib.getData("branches");
                this.oBranchElementsImgData = assetLib.getData("branchElements");
                this.aBranches = new Array();
                var G = 0,
                    O = 0,
                    d = 1,
                    t = 0,
                    s = this.skewMidFrame;
                for (var A = 0; A < this.segNum; A++) {
                    if (A == 0) {
                        G = canvas.width / 2;
                        O = canvas.height - this.oBranchImgData.oData.spriteHeight * this.entireScale;
                        this.aBranches.push({
                            powerUpState: squirrel.powerUpState,
                            count: this.segCount++,
                            coinOffset: Math.random() * 2 - 1,
                            blockType: 0,
                            gapState: this.gapState,
                            startSkewFrame: s,
                            skewFrame: s,
                            curSkewOffset: t,
                            xPos: G,
                            yPos: O,
                            scale: d,
                            startHeightFactor: .25,
                            heightFactor: .25
                        });
                    } else {
                        this.addSegment(false);
                    }
                }
                TweenMax.to(this, .5, {
                    scrollSpeed: 800 + aPowerUpBarData[0] * 25,
                    ease: "Quad.easeIn"
                });
            }
            W.prototype.addSegment = function(G, O, d) {
                if (typeof G === "undefined") {
                    G = true;
                }
                if (typeof O === "undefined") {
                    O = 0;
                }
                if (typeof d === "undefined") {
                    d = 1;
                }
                this.sineInc += .1;
                var t = this.aBranches[this.aBranches.length - 1].skewFrame;
                if (this.aBranches[this.aBranches.length - 1].startSkewFrame < 60) {
                    t -= Math.round((this.aBranches[this.aBranches.length - 1].startSkewFrame - this.curveTarg) / 2);
                } else {}
                var s = this.aBranches[this.aBranches.length - 1].startHeightFactor;
                s -= (this.aBranches[this.aBranches.length - 1].startHeightFactor - this.heightFactorTarg) / 2;
                var A = (this.aBranches[this.aBranches.length - 1].skewFrame - this.skewMidFrame) * this.skewOffset,
                    B = this.aBranches[this.aBranches.length - 1].xPos;
                this.aBranches[0].scale = 1;
                this.aBranches[0].yPos = canvas.height - (this.oBranchImgData.oData.spriteHeight * this.aBranches[0].heightFactor) * this.entireScale;
                var k = this.gapState,
                    g = t;
                if (this.gapState == 1) {
                    this.gapInc--;
                    if (this.aBranches[this.aBranches.length - 1].startSkewFrame < 60) {
                        g = 60;
                        k = 0;
                    } else {
                        g = 60;
                    }
                    if (this.gapInc <= 0) {
                        g = 61;
                        this.gapState = 0;
                        k = 0;
                        this.canChangeBehaviour = true;
                        this.behaviourChangeTarg = Math.random() * 2 + .5;
                    }
                }
                this.lastGemCount++;
                if ((this.lastGemCount > 4 || (squirrel.powerUpState == "gems" && this.lastGemCount > 2)) && this.nextBlockType == 0 && this.gapInc == 0 && G && g != 60 && g != 61) {
                    if (Math.random() * 1 > (.85 - aPowerUpBarData[3] / 40) || squirrel.powerUpState == "gems") {
                        if (!firstRun && --this.powerUpCount < 0) {
                            this.powerUpCount = 30 - aPowerUpBarData[2] * 2;
                            this.lastGemCount = -10;
                            this.nextBlockType = 11 + Math.floor(Math.random() * 4);
                        } else if (!firstRun || hud.tutState == 0) {
                            this.lastGemCount = 0;
                            this.nextBlockType = 6 + Math.floor(Math.random() * 5);
                        }
                    }
                }
                var w = Math.random() * 2 - 1;
                if (firstRun && hud.tutState == 0 && Math.round(w) == 0) {
                    w = -1;
                }
                this.aBranches.push({
                    powerUpState: squirrel.powerUpState,
                    count: this.segCount++,
                    coinOffset: w,
                    blockType: this.nextBlockType,
                    gapState: k,
                    startSkewFrame: g,
                    skewFrame: t,
                    curSkewOffset: A,
                    xPos: B,
                    yPos: 0,
                    scale: 0,
                    startHeightFactor: s,
                    heightFactor: s
                });
                this.nextBlockType = 0;
            };
            W.prototype.resetBranchBase = function(G, O) {
                if (typeof G === "undefined") {
                    G = 0;
                }
                if (typeof O === "undefined") {
                    O = 1;
                }
                this.aBranches[0].scale = 1;
                this.aBranches[0].yPos = canvas.height - (this.oBranchImgData.oData.spriteHeight * this.aBranches[0].heightFactor) * this.entireScale;
            };
            W.prototype.addHorizontal = function() {
                this.canAddBranch = false;
                var G = -1,
                    O = (this.aBranches[this.aBranches.length - 1].skewFrame - this.skewMidFrame) * this.skewOffset,
                    d = this.aBranches[this.aBranches.length - 1].xPos,
                    t = this.aBranches[this.aBranches.length - 1].startHeightFactor;
                t -= (this.aBranches[this.aBranches.length - 1].startHeightFactor - this.heightFactorTarg) / 2;
                this.aBranches[0].scale = 1;
                this.aBranches[0].yPos = canvas.height - (this.oBranchImgData.oData.spriteHeight * this.aBranches[0].heightFactor) * this.entireScale;
                this.aBranches.push({
                    powerUpState: squirrel.powerUpState,
                    count: this.segCount++,
                    coinOffset: Math.random() * 2 - 1,
                    blockType: 0,
                    gapState: this.gapState,
                    startSkewFrame: G,
                    skewFrame: G,
                    curSkewOffset: O,
                    xPos: d,
                    yPos: 0,
                    scale: 0,
                    startHeightFactor: t,
                    heightFactor: t
                });
            };
            W.prototype.triggerTurn = function(G) {
                this.horizontalBranchState = 0;
                this.canAddBranch = true;
                this.canChangeBehaviour = true;
                this.justTurned = true;
                this.behaviourChangeTarg = Math.random() * 2;
                playSound("makeTurn");
                this.aBranches = new Array();
                var O = 0,
                    d = 0,
                    t = 1,
                    s = 0,
                    A = this.skewMidFrame;
                this.heightFactorTarg = Math.random() * 1.5 - .5;
                var B = Math.round(Math.random() * (this.segNum / 2) + (this.segNum / 3));
                for (var k = 0; k < this.segNum; k++) {
                    if (k == 0) {
                        O = canvas.width / 2;
                        d = canvas.height - this.oBranchImgData.oData.spriteHeight * this.entireScale;
                        this.aBranches.push({
                            powerUpState: squirrel.powerUpState,
                            count: this.segCount++,
                            coinOffset: Math.random() * 2 - 1,
                            blockType: 0,
                            gapState: this.gapState,
                            startSkewFrame: A,
                            skewFrame: A,
                            curSkewOffset: s,
                            xPos: O,
                            yPos: d,
                            scale: t,
                            startHeightFactor: .75,
                            heightFactor: .75
                        });
                    } else {
                        if (k == B) {
                            this.changeBehaviour();
                            if (this.horizontalBranchState > 0) {
                                this.addHorizontal();
                                break;
                            }
                        }
                        if (k < this.segNum / 4) {
                            this.addSegment(false);
                        } else {
                            this.addSegment();
                        }
                    }
                }
                if (G == "right") {
                    this.turnOffset = 1;
                    this.turnTween = TweenMax.to(this, .4, {
                        turnOffset: 0,
                        ease: "Cubic.easeOut"
                    });
                    background.targX += 1500;
                } else {
                    this.turnOffset = -1;
                    this.turnTween = TweenMax.to(this, .4, {
                        turnOffset: 0,
                        ease: "Cubic.easeOut"
                    });
                    background.targX -= 1500;
                }
            };
            W.prototype.changeBehaviour = function() {
                var G = Math.floor(Math.random() * 9);
                if (firstRun && hud.tutState == 1) {
                    G = 7;
                }
                this.lastGemCount = 0;
                switch (G) {
                    case 0:
                        this.horizontalBranchState = 1;
                        this.canChangeBehaviour = false;
                        break;
                    case 1:
                        this.horizontalBranchState = 2;
                        this.canChangeBehaviour = false;
                        break;
                    case 2:
                        this.horizontalBranchState = 3;
                        this.canChangeBehaviour = false;
                        break;
                    case 3:
                        this.gapState = 1;
                        this.gapInc = Math.floor(Math.random() * 5) + 3;
                        this.curveTarg = this.skewMidFrame;
                        this.canChangeBehaviour = false;
                        break;
                    case 4:
                        this.nextBlockType = 1;
                        break;
                    case 5:
                        this.nextBlockType = 2;
                        break;
                    case 6:
                        this.nextBlockType = 3;
                        break;
                    case 7:
                        this.nextBlockType = 4;
                        break;
                    case 8:
                        this.nextBlockType = 5;
                        break;
                }
            };
            W.prototype.changeCurve = function() {
                this.curveTarg = Math.floor(Math.random() * 30);
            };
            W.prototype.changeHill = function() {
                var b6Z = 1785842970;
                if (b6Z !== b6Z) {
                    _this.hitUp(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                } else {
                    if (!firstRun) {
                        this.heightFactorTarg = Math.random() * 1.5 - .5;
                    } else {
                        this.heightFactorTarg = Math.random() * .75 - .5;
                    }
                }
            };
            W.prototype.update = function() {
                if (this.canChangeBehaviour && (!firstRun || hud.tutState == 1)) {
                    this.behaviourChangeInc += delta;
                    if (this.behaviourChangeInc > this.behaviourChangeTarg && this.lastGemCount > 5) {
                        this.behaviourChangeInc = 0;
                        this.behaviourChangeTarg = Math.random() * 1 + .7;
                        this.changeBehaviour();
                    }
                }
                if(!firstRun){
                oGameData.distance = Math.round(oGameData.distance + (this.scrollSpeed / 10) * delta);                  
                }
                this.curveChangeInc += delta;
                if (this.curveChangeInc > this.curveChangeTarg) {
                    this.curveChangeInc = 0;
                    this.curveChangeTarg = Math.random() * 3 + 1;
                    this.changeCurve();
                }
                this.hillChangeInc += delta;
                if (this.hillChangeInc > this.hillChangeTarg) {
                    this.hillChangeInc = 0;
                    this.hillChangeTarg = Math.random() * 3 + 1;
                    this.changeHill();
                }
                this.centreLine = (squirrel.leftSteer + squirrel.rightSteer) * 75 + canvas.width / 2;
                if (this.horizontalBranchState > 0 && this.aBranches.length == 2) {
                    if ((this.horizontalBranchState == 1 || this.horizontalBranchState == 3) && squirrel.leftSteer + squirrel.rightSteer < 0) {
                        this.triggerTurn("right");
                    } else if ((this.horizontalBranchState == 2 || this.horizontalBranchState == 3) && squirrel.leftSteer + squirrel.rightSteer > 0) {
                        this.triggerTurn("left");
                    } else {}
                } else if (this.horizontalBranchState > 0 && this.aBranches.length <= 0) {
                    squirrel.overGap = true;
                }
                if (this.aBranches.length > 0 && this.aBranches[0].yPos > canvas.height) {
                    var G = this.aBranches[0].yPos - canvas.height,
                        O = this.aBranches[0].scale * this.perspScaleFactor;
                    this.aBranches.splice(0, 1);
                    if (this.canAddBranch) {
                        if (this.horizontalBranchState > 0) {
                            this.addHorizontal();
                        } else {
                            this.addSegment(true, G, O);
                        }
                    } else {
                        if (this.aBranches.length > 0) {
                            this.resetBranchBase(G, O);
                        }
                    }
                }
            };
            W.prototype.render = function() {
                var G;
                for (var O = 0; O < this.aBranches.length; O++) {
                    if (this.aBranches[O].skewFrame > -1) {
                        if (O == 0) {
                            this.aBranches[O].scale += (this.scrollSpeed / this.scaletoSpeedRatio) * delta;
                            this.aBranches[O].virtualXPos = this.centreLine;
                            this.aBranches[O].xPos += ((this.aBranches[O].virtualXPos - this.aBranches[O].xPos) * ((this.aBranches.length - O) / 25 + .5)) * delta;
                            this.aBranches[O].yPos += (this.scrollSpeed * this.aBranches[O].heightFactor) * delta;
                        } else {
                            if (O < this.skewMidFrame) {
                                if (this.aBranches[O].skewFrame < this.skewMidFrame - O) {
                                    this.aBranches[O].skewFrame += 1;
                                } else if (this.aBranches[O].skewFrame > this.skewMidFrame + O) {
                                    this.aBranches[O].skewFrame -= 1;
                                }
                                if (this.aBranches[O - 1].startSkewFrame < 60) {
                                    this.aBranches[O].curSkewOffset = (this.aBranches[O - 1].skewFrame - this.skewMidFrame) * this.skewOffset;
                                } else {
                                    this.aBranches[O].curSkewOffset = 0;
                                }
                            }
                            this.aBranches[O].scale = this.aBranches[O - 1].scale * this.perspScaleFactor;
                            this.aBranches[O].heightFactor = this.aBranches[O].startHeightFactor + (this.aBranches[O].scale * (1.5 - this.aBranches[O].startHeightFactor));
                            this.aBranches[O].virtualXPos = this.aBranches[O - 1].virtualXPos + (this.aBranches[O].curSkewOffset * this.aBranches[O - 1].scale);
                            this.aBranches[O].xPos += ((this.aBranches[O].virtualXPos - this.aBranches[O].xPos) * ((this.aBranches.length - O) / 15 + .5)) * delta;
                            this.aBranches[O].yPos = this.aBranches[O - 1].yPos - (((this.oBranchImgData.oData.spriteHeight - 1) * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale;
                        }
                    } else {
                        var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].x,
                            t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].y,
                            s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].width,
                            A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].height,
                            B;
                        if (O == 0) {
                            this.aBranches[O].scale += this.scrollSpeed / this.scaletoSpeedRatio * delta;
                            this.aBranches[O].virtualXPos = this.centreLine;
                            this.aBranches[O].xPos += ((this.aBranches[O].virtualXPos - this.aBranches[O].xPos) * ((this.aBranches.length - O) / 25 + .5)) * delta;
                            this.aBranches[O].yPos += this.scrollSpeed * delta;
                        } else {
                            if (O < this.skewMidFrame) {
                                this.aBranches[O].curSkewOffset = (this.aBranches[O - 1].skewFrame - this.skewMidFrame) * this.skewOffset;
                            }
                            this.aBranches[O].scale = this.aBranches[O - 1].scale * this.perspScaleFactor;
                            this.aBranches[O].heightFactor = Math.max(this.aBranches[O].startHeightFactor + (this.aBranches[O].scale * (1.5 - this.aBranches[O].startHeightFactor)), .5);
                            this.aBranches[O].virtualXPos = this.aBranches[O - 1].virtualXPos + (this.aBranches[O].curSkewOffset * this.aBranches[O - 1].scale);
                            this.aBranches[O].xPos += ((this.aBranches[O].virtualXPos - this.aBranches[O].xPos) * ((this.aBranches.length - O) / 25 + .5)) * delta;
                            this.aBranches[O].yPos = this.aBranches[O - 1].yPos - (((A - .5) * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale;
                        }
                    }
                }
                for (var O = this.aBranches.length - 1; O >= 0; O--) {
                    if (this.aBranches[O].skewFrame > -1) {
                        if (O == 0) {
                            G = this.aBranches[O].skewFrame;
                            if (this.aBranches[O].startSkewFrame > 29) {
                                G = this.aBranches[O].startSkewFrame;
                            } else if (Math.floor(this.aBranches[O].count / 2) % 2 == 0) {
                                G += 30;
                            }
                            var k = (G * this.oBranchImgData.oData.spriteWidth) % this.oBranchImgData.img.width,
                                g = Math.floor(G / (this.oBranchImgData.img.width / this.oBranchImgData.oData.spriteWidth)) * this.oBranchImgData.oData.spriteHeight;
                            if (this.aBranches[O].gapState == 0) {
                                ctx.drawImage(this.oBranchImgData.img, k, g, this.oBranchImgData.oData.spriteWidth, this.oBranchImgData.oData.spriteHeight, this.aBranches[O].xPos - ((this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[O].scale) * this.entireScale, this.aBranches[O].yPos, (this.oBranchImgData.oData.spriteWidth * this.aBranches[O].scale) * this.entireScale, ((this.oBranchImgData.oData.spriteHeight * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale);
                            }
                        } else {
                            G = this.aBranches[O].skewFrame;
                            if (this.aBranches[O].startSkewFrame > 29) {
                                G = this.aBranches[O].startSkewFrame;
                            } else if (this.aBranches[O].count % 2 != 0) {
                                G += 30;
                            }
                            var k = (G * this.oBranchImgData.oData.spriteWidth) % this.oBranchImgData.img.width,
                                g = Math.floor(G / (this.oBranchImgData.img.width / this.oBranchImgData.oData.spriteWidth)) * this.oBranchImgData.oData.spriteHeight;
                            if (this.aBranches[O].gapState == 0) {
                                ctx.drawImage(this.oBranchImgData.img, k, g, this.oBranchImgData.oData.spriteWidth, this.oBranchImgData.oData.spriteHeight, this.aBranches[O].xPos - ((this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos, (this.oBranchImgData.oData.spriteWidth * this.aBranches[O].scale) * this.entireScale, Math.max(((this.oBranchImgData.oData.spriteHeight * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, 1));
                            }
                        }
                    } else {
                        var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].x,
                            t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].y,
                            s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].width,
                            A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].height,
                            B;
                        if (O == 0) {
                            B = s / 2;
                            if (this.horizontalBranchState == 1) {
                                B = (this.oBranchImgData.oData.spriteWidth / 2);
                            } else if (this.horizontalBranchState == 2) {
                                B = s - (this.oBranchImgData.oData.spriteWidth / 2);
                            }
                            ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos - (B * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos, (s * this.aBranches[O].scale) * this.entireScale, ((A * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale);
                        } else {
                            B = s / 2;
                            if (this.horizontalBranchState == 1) {
                                B = (this.oBranchImgData.oData.spriteWidth / 2);
                            } else if (this.horizontalBranchState == 2) {
                                B = s - (this.oBranchImgData.oData.spriteWidth / 2);
                            }
                            ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos - (B * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos, (s * this.aBranches[O].scale) * this.entireScale, ((A * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale);
                            var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].x,
                                t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].y,
                                s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].width,
                                A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].height;
                            if (this.horizontalBranchState == 1) {
                                var w = this.aBranches[O].xPos + ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz1].width - this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25);
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, w, this.aBranches[O].yPos, Math.max(canvas.width - w, s), Math.max(((A * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, 1));
                                var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].x,
                                    t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].y,
                                    s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].width,
                                    A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].height;
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos + (20 * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos - (A * this.aBranches[O].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, (s * this.aBranches[O].scale) * this.entireScale, (A * this.aBranches[O].scale) * this.entireScale);
                            } else if (this.horizontalBranchState == 2) {
                                var w = this.aBranches[O].xPos - ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz2].width - this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25);
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, w - Math.max(w, s), this.aBranches[O].yPos, Math.max(w, s), ((A * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale);
                                var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].x,
                                    t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].y,
                                    s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].width,
                                    A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].height;
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos + ((-20 - s) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos - (A * this.aBranches[O].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, (s * this.aBranches[O].scale) * this.entireScale, (A * this.aBranches[O].scale) * this.entireScale);
                            } else {
                                var w = this.aBranches[O].xPos + ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz3].width / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25);
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, w, this.aBranches[O].yPos, Math.max(canvas.width - w, s), ((A * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale);
                                w = this.aBranches[O].xPos - ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz3].width / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25);
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, w - Math.max(w, s), this.aBranches[O].yPos, Math.max(w, s), ((A * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale);
                                var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].x,
                                    t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].y,
                                    s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].width,
                                    A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].height;
                                ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos - ((s / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos - (A * this.aBranches[O].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, (s * this.aBranches[O].scale) * this.entireScale, (A * this.aBranches[O].scale) * this.entireScale);
                            }
                        }
                    }
                }
                for (var O = this.aBranches.length - 1; O >= 0; O--) {
                    if ((O == 0 || O == 1) && this.aBranches.length > 2) {
                        if (this.aBranches[O].gapState == 1) {
                            squirrel.overGap = true;
                        } else {
                            squirrel.overGap = false;
                        }
                    }
                    if (O == 0 && this.aBranches[O].blockType > 0 && squirrel.powerUpState != "invincible") {
                        switch (this.aBranches[O].blockType) {
                            case 1:
                                if ((squirrel.checkHit(-1) || squirrel.checkHit(0)) && squirrel.actionState != "blocked") {
                                    endGameEvent("block");
                                }
                                break;
                            case 2:
                                if ((squirrel.checkHit(1) || squirrel.checkHit(0)) && squirrel.actionState != "blocked") {
                                    endGameEvent("block");
                                }
                                break;
                            case 3:
                                if (squirrel.actionState != "ducking" && squirrel.actionState != "blocked") {
                                    endGameEvent("block");
                                }
                                break;
                            case 4:
                                if (squirrel.actionState != "jumping" && squirrel.actionState != "falling" && squirrel.actionState != "blocked") {
                                    endGameEvent("block");
                                }
                                break;
                            case 5:
                                if ((squirrel.checkHit(0)) && squirrel.actionState != "blocked") {
                                    endGameEvent("block");
                                }
                                break;
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                                break;
                        }
                    }
                    if (O < 2 && this.aBranches[O].blockType >= 6 && (this.aBranches[O].powerUpState == "magnet" || squirrel.checkHit(Math.round(this.aBranches[O].coinOffset)))) {
                        if (this.aBranches[O].blockType < 11) {
                            gemEvent(1);
                            addParticle("collectGem", this.aBranches[O].xPos - ((Math.round(this.aBranches[O].coinOffset) * 75) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), 550);
                        } else {
                            powerUpEvent(this.aBranches[O].blockType - 11);
                            addParticle("collectGem", this.aBranches[O].xPos - ((Math.round(this.aBranches[O].coinOffset) * 75) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), 550);
                        }
                        this.aBranches[O].blockType = 0;
                    }
                    if (this.aBranches[O].blockType > 0) {
                        var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[O].blockType]].x,
                            t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[O].blockType]].y,
                            s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[O].blockType]].width,
                            A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[O].blockType]].height,
                            p = 0;
                        if (this.aBranches[O].blockType >= 6) {
                            if (this.aBranches[O].powerUpState != "magnet") {
                                p = Math.round(this.aBranches[O].coinOffset) * 75;
                            } else {
                                p += (Math.round(this.aBranches[O].coinOffset) * 75) * (O / this.segNum);
                                p = -(squirrel.x - branch.aBranches[O].xPos) * (1 - (O / this.segNum));
                            }
                        }
                        ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos - ((s / 2 + p) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos - (A * this.aBranches[O].scale - (this.oBranchImgData.oData.spriteHeight / 2 * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, (s * this.aBranches[O].scale) * this.entireScale, (A * this.aBranches[O].scale) * this.entireScale);
                    }
                    if ((this.aBranches[O].blockType == 0 || this.aBranches[O].blockType >= 5) && this.aBranches[O].skewFrame > -1 && this.aBranches[O].gapState == 0 && this.aBranches[O].startSkewFrame <= 29) {
                        var d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[O].count % 4)]].x,
                            t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[O].count % 4)]].y,
                            s = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[O].count % 4)]].width,
                            A = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[O].count % 4)]].height;
                        ctx.drawImage(this.oBranchElementsImgData.img, d, t, s, A, this.aBranches[O].xPos - ((s / 2) * this.aBranches[O].scale) * this.entireScale + this.turnOffset * (O * 25), this.aBranches[O].yPos - (A * this.aBranches[O].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[O].scale) * this.aBranches[O].heightFactor) * this.entireScale, (s * this.aBranches[O].scale) * this.entireScale, (A * this.aBranches[O].scale) * this.entireScale);
                    }
                    if (O == 1 && squirrel.actionState != "blocked") {
                        squirrel.update();
                        squirrel.render();
                    }
                }
                if (this.aBranches.length <= 1 || squirrel.actionState == "blocked") {
                    squirrel.update();
                    squirrel.render();
                }
            };
            return W;
        })();
        Z.Branch = c;
    } else {
        this.triggerTurn("left");
    }
})(Elements || (Elements = {}));
var __extends = this.__extends || function(G, O) {
        function d() {
            this.constructor = G;
        }
        d.prototype = O.prototype;
        G.prototype = new d();
    },
    Elements;
(function(B) {
    var n6Z = 1608821100;
    if (n6Z === n6Z) {
        var k = (function(s) {
            __extends(A, s);

            function A() {
                s.call(this, assetLib.getData("squirrel"), 25, 30, "falling");
                this.incY = 0;
                this.groundY = 550;
                this.leftSteer = 0;
                this.rightSteer = 0;
                this.allowRight = true;
                this.allowLeft = true;
                this.actionState = "running";
                this.overGap = false;
                this.rotInc = 0;
                this.blockX = 0;
                this.powerUpState = null;
                this.powerUpTimer = 0;
                this.flickerInc = 0;
                this.flickerState = false;
                this.oBranchElementsImgData = assetLib.getData("branchElements");
                this.x = canvas.width / 2;
                this.y = this.groundY - 200;
            }
            A.prototype.jump = function() {
                if (this.incY == 0) {
                    this.incY = -15;
                    playSound("jump");
                    this.setAnimType("once", "jumping");
                    this.animEndedFunc = function() {
                        this.setAnimType("loop", "falling");
                    };
                    this.actionState = "jumping";
                }
            };
            A.prototype.turn = function(G) {
                var o2K = -1534051195;
                if (o2K === o2K) {
                    if (G == "left" && this.allowLeft) {
                        this.leftSteer = 1;
                        this.rightSteer = 0;
                        if (this.actionState == "running") {
                            addParticle("dust", this.x, 625);
                            playSound("sideStep");
                        }
                        this.allowLeft = false;
                        if (this.turnTween) {
                            this.turnTween.kill();
                        }
                        this.turnTween = TweenMax.to(this, .66 - branch.scrollSpeed / 5000, {
                            rightSteer: 0,
                            leftSteer: 0,
                            ease: "Cubic.easeOut",
                            delay: .46 - branch.scrollSpeed / 5000
                        });
                    } else if (G == "right" && this.allowRight) {
                        this.leftSteer = 0;
                        this.rightSteer = -1;
                        if (this.actionState == "running") {
                            addParticle("dust", this.x, 625);
                            playSound("sideStep");
                        }
                        this.allowRight = false;
                        if (this.turnTween) {
                            this.turnTween.kill();
                        }
                        this.turnTween = TweenMax.to(this, .66 - branch.scrollSpeed / 5000, {
                            rightSteer: 0,
                            leftSteer: 0,
                            ease: "Cubic.easeOut",
                            delay: .42 - branch.scrollSpeed / 7000
                        });
                    }
                } else {
                    userInput.removeHitArea("moreGames");
                    this.clearData();
                    userInput.removeHitArea("powerUp2");
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    pauseCoreOff();
                }
            };
            A.prototype.duck = function() {
                var v7K = -441779474;
                if (v7K === v7K) {
                    if (this.incY == 0 && this.animId != "ducking") {
                        this.setAnimType("once", "ducking");
                        playSound("duck");
                        this.animEndedFunc = function() {
                            this.actionState = "running";
                            this.setAnimType("loop", "running");
                        };
                        this.actionState = "ducking";
                    }
                } else {
                    requestAnimFrame(updateUpgrade);
                    __extends(Squirrel, _super);
                    _ctx.translate(canvas.width / 2, -100 + this.flareY);
                    userInput.addHitArea("playFromUpgrade", butEventHandler, null, "image", oPlayBut);
                }
            };
            A.prototype.checkHit = function(G) {
                if (G == (this.leftSteer + this.rightSteer) || (branch.aBranches.length >= 3 && G == Math.round((branch.aBranches[2].xPos - this.x) / 120))) {
                    return true;
                } else {
                    return false;
                }
            };
            A.prototype.fallOff = function() {
                this.actionState = "falling";
                this.setAnimType("loop", "falling");
                this.incY = Math.max(this.incY, 20);
            };
            A.prototype.hitBlock = function() {
                this.actionState = "blocked";
                this.setAnimType("loop", "blocked");
            };
            A.prototype.update = function() {
                s.prototype.updateAnimation.call(this, delta);
                if (this.powerUpState != null) {
                    this.powerUpTimer -= delta;
                    if (this.powerUpTimer < 0) {
                        playSound("powerUpEnd");
                        this.powerUpState = null;
                    }
                }
                this.fps = branch.scrollSpeed / 32;
                this.y += this.incY;
                if (this.actionState != "blocked") {
                    if (branch.aBranches.length > 3) {
                        this.x += (((branch.aBranches[2].xPos - (this.leftSteer + this.rightSteer) * 120) - this.x) * 5) * delta;
                    }
                    this.rotation = -(this.leftSteer + this.rightSteer) / 8;
                } else {
                    this.rotation = 0;
                }
                if (this.y >= this.groundY && this.actionState != "falling" && this.actionState != "blocked") {
                    this.incY = 0;
                    this.y = this.groundY;
                    if (this.animId == "jumping" || this.animId == "falling") {
                        this.setAnimType("loop", "running");
                        this.actionState = "running";
                        addParticle("dust", this.x, 625);
                    }
                } else {
                    this.incY += (20 + (branch.scrollSpeed / 40)) * delta;
                }
                if (this.y == this.groundY && this.overGap && this.actionState != "falling") {
                    endGameEvent("fall");
                }
            };
            A.prototype.render = function() {
                if (this.actionState != "blocked" && this.actionState != "falling" && branch.aBranches[2] && branch.aBranches[0].gapState != 1 && branch.aBranches[1].gapState != 1 && branch.aBranches[2].gapState != 1) {
                    var G = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].x,
                        O = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].y,
                        d = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].width,
                        t = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].height;
                    ctx.drawImage(this.oBranchElementsImgData.img, G, O, d, t, this.x - d / 2, 605, d, t);
                }
                if (this.scaleX < 4) {
                    if (this.powerUpState == "invincible") {
                        this.flickerInc -= delta;
                        if (this.flickerInc < 0) {
                            this.flickerState = !this.flickerState;
                            this.flickerInc = .1;
                        }
                        if (this.flickerState) {
                            if (squirrel.powerUpTimer > 2) {
                                this.alpha = .6;
                            } else {
                                this.alpha = 1;
                            }
                        } else {
                            this.alpha = .3;
                        }
                    } else {
                        this.alpha = 1;
                    }
                    s.prototype.render.call(this, ctx);
                }
            };
            return A;
        })(Utils.AnimSprite);
        B.Squirrel = k;
    } else {
        swipeDetect.reset();
        playSound("jump");
        userInput.removeHitArea("backFromUpgrade");
        background.render();
        renderMuteBut();
    }
})(Elements || (Elements = {}));
var Utils;
(function(w) {
    var p = (function() {
        function g() {
            this.startX = null;
            this.startY = null;
            this.isTracking = false;
            this.lastDir = null;
            this.curX = null;
            this.curY = null;
            this.resetInc = 0;
        }
        g.prototype.reset = function() {
            this.lastDir = null;
            this.resetInc = 0;
        };
        g.prototype.keyTrack = function(G) {
            this.lastDir = G;
        };
        g.prototype.getDir = function() {
            if (this.isTracking) {
                this.stopTrack(this.curX, this.curY, true);
            }
            return this.lastDir;
        };
        g.prototype.track = function(G, O) {
            this.curX = G;
            this.curY = O;
            if (this.startX == null) {
                this.startX = G;
                this.startY = O;
            }
            this.isTracking = true;
        };
        g.prototype.stopTrack = function(G, O, d) {
            if (typeof d === "undefined") {
                d = false;
            }
            if (!d) {
                var t = this.startY - O,
                    s = this.startX - G,
                    A = (t * t) + (s * s);
                if (A < 200 || this.startX == null) {
                    this.isTracking = false;
                    this.startX = this.startY = null;
                    return;
                }
            }
            var B = Math.atan2(this.startY - O, this.startX - G) / radian,
                k;
            if (B > 45 && B < 135) {
                k = 0;
                squirrel.jump();
                if (firstRun && hud.tutState == 1) {
                    hasVertAction = true;
                }
            } else if (B > 135 || B < -135) {
                k = 1;
                squirrel.allowRight = true;
                squirrel.turn("right");
                if (firstRun && hud.tutState == 0) {
                    hasHorizAction = true;
                }
            } else if (B > -135 && B < -45) {
                k = 2;
                squirrel.duck();
                if (firstRun && hud.tutState == 1) {
                    hasVertAction = true;
                }
            } else {
                k = 3;
                squirrel.allowLeft = true;
                squirrel.turn("left");
                if (firstRun && hud.tutState == 0) {
                    hasHorizAction = true;
                }
            }
            this.isTracking = false;
            this.startX = this.startY = null;
            this.lastDir = k;
        };
        return g;
    })();
    w.SwipeDetect = p;
})(Utils || (Utils = {}));
var Utils;
(function(A) {
    var B = (function() {
        function s(G) {
            this.dataGroupNum = 2;
            this.saveDataId = G;
            this.clearData();
            this.setInitialData();
        }
        s.prototype.clearData = function() {
            this.aLevelStore = new Array();
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
        };
        s.prototype.resetData = function() {
            this.aLevelStore = new Array();
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.saveData();
        };
        s.prototype.setInitialData = function() {
            if (typeof(Storage) !== "undefined") {
                if (localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for (var G in this.aLevelStore) {
                        this.aLevelStore[G] = parseInt(this.aLevelStore[G]);
                    }
                } else {
                    this.resetData();
                }
            }
        };
        s.prototype.setData = function(G, O) {
            for (var d = 0; d < O.length; d++) {
                if (this.aLevelStore.length == 0 || this.aLevelStore.length <= G * this.dataGroupNum + d) {
                    for (var t = 0; t < ((G * this.dataGroupNum) + d) - this.aLevelStore.length - 1; t++) {
                        this.aLevelStore.push(0);
                    }
                    this.aLevelStore.push(O[d]);
                } else {
                    this.aLevelStore[G * this.dataGroupNum + d] = O[d];
                }
            }
        };
        s.prototype.getData = function(G, O) {
            return this.aLevelStore[G * this.dataGroupNum + O];
        };
        s.prototype.saveData = function() {
            if (typeof(Storage) !== "undefined") {
                var G = "";
                for (var O = 0; O < this.aLevelStore.length; O++) {
                    G += this.aLevelStore[O];
                    if (O < this.aLevelStore.length - 1) {
                        G += ",";
                    }
                }
                localStorage.setItem(this.saveDataId, G);
            }
        };
        return s;
    })();
    A.SaveDataHandler = B;
})(Utils || (Utils = {}));
var Elements;
(function(A) {
    var B = (function(t) {
        __extends(s, t);

        function s(G, O, d) {
            t.call(this, assetLib.getData(G), 23, 30, "explode");
            this.x = O;
            this.y = d;
            this.setAnimType("once", "explode");
            if (G == "collectGem") {
                TweenMax.to(this, .5, {
                    y: this.y - 50,
                    scaleX: 3,
                    scaleY: 3,
                    ease: "Quad.easeOut"
                });
            } else if (G == "dust") {
                TweenMax.to(this, .5, {
                    y: this.y + 100,
                    ease: "Quad.easeIn"
                });
            }
            this.animEndedFunc = function() {
                this.removeMe = true;
            };
        }
        s.prototype.update = function() {
            t.prototype.updateAnimation.call(this, delta);
        };
        s.prototype.render = function() {
            t.prototype.renderSimple.call(this, ctx);
        };
        return s;
    })(Utils.AnimSprite);
    A.Particle = B;
})(Elements || (Elements = {}));
var requestAnimFrame = (function() {
        return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function(G) {
            window.setTimeout(G, 1000 / 60, new Date().getTime());
        };
    })(),
    previousTime, canvas = document.getElementById('canvas'),
    ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 700;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById('viewporter'),
    sound, music, audioType = 0,
    muted = false,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = false,
    manualPause = false,
    isMobile = false,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = false,
    isIE10 = false,
    delta;
if (navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
var deviceAgent = navigator.userAgent.toLowerCase();
if (deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) {
    isMobile = true;
    if (deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
        isBugBrowser = true;
    }
}
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas();
window.onresize = function() {
    setTimeout(function() {
        resizeCanvas();
    }, 1);
};

function visibleResume() {
    if (!muted && !manualPause) {
        Howler.unmute();
    }
}

function visiblePause() {
    Howler.mute();
}
window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas();
    }, 0);
    window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            resizeCanvas();
        }, 500);
    }, false);
});
if (!isIE10 && (typeof(window).AudioContext !== 'undefined' || typeof(window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    audioType = 1;
    sound = new Howl({
        urls: ['audio/sound.ogg', 'audio/sound.m4a'],
        sprite: {
            hitBlock: [0, 950],
            gem0: [1000, 700],
            gem1: [2000, 700],
            gem2: [3000, 700],
            gem3: [4000, 700],
            click: [5000, 400],
            collectPowerUp: [5500, 1200],
            fall: [7000, 2000],
            boost: [9500, 1200],
            startGame: [11500, 1200],
            jump: [13000, 800],
            makeTurn: [14000, 700],
            sideStep: [15000, 500],
            duck: [16000, 600],
            powerUpEnd: [17000, 600]
        }
    });
    music = new Howl({
        urls: ['audio/music.ogg', 'audio/music.m4a'],
        volume: .01,
        loop: true
    });
} else {
    audioType = 0;
}
var panel, hud, background, totalScore = 0,
    levelScore = 0,
    levelNum = 0,
    aLevelUps, levelBonusScore, bonusScore, panelFrame, oLogoData = {},
    oLogoBut, musicTween, oImageIds = {},
    branch, squirrel, swipeState = 1,
    swipeDetect, radian = Math.PI / 180,
    controlState, oGameData = {
        distance: 0,
        curGemChain: 0,
        curGems: 0,
        boostNum: 0,
        totalGems: 0
    },
    endGameSequence, aPowerUpBarData = new Array(0, 0, 0, 0),
    aPowerUpButsData = new Array(20, 20, 50, 50, 80, 80, 120, 120, 175, 175),
    saveDataHandler = new Utils.SaveDataHandler("hopdontstop1"),
    aEffects, firstRun = true,
    hasHorizAction = false,
    hasVertAction = false;
    loadPreAssets();

function initStartScreen() {
    gameState = "start";
    userInput.removeHitArea("moreGames");
    if (audioType == 1) {
        if (musicTween) {
            musicTween.kill();
        }
        musicTween = TweenLite.to(music, 1, {
            volume: .2,
            ease: "Linear.easeNone"
        });
    }
    for (var G = 0; G < aPowerUpBarData.length; G++) {
        aPowerUpBarData[G] = saveDataHandler.aLevelStore[2 + G];
    }
    oGameData.totalGems = saveDataHandler.aLevelStore[0];
    levelScore = 0;
    totalScore = 0;
    levelNum = 0;
    background = new Elements.Background(assetLib.getData("background0"), canvas.width, canvas.height);
    background.renderState = "menuScroll";
    userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [392, 0, canvas.width, 53]
    }, true);
    var O = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 530],
            id: oImageIds.playBut
        },
        d = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [330, 655],
            id: oImageIds.moreGamesBut,
            noMove: true
        },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [120, 655],
            id: oImageIds.creditsBut,
            noMove: true
        };
    userInput.addHitArea("startGame", butEventHandler, null, "image", O);
    userInput.addHitArea("moreGames", butEventHandler, null, "image", d);
    userInput.addHitArea("credits", butEventHandler, null, "image", t);
    var s = new Array(O, d, t);
    panel = new Elements.Panel(gameState, s);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}

function initCreditsScreen() {
    gameState = "credits";
    var G = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [48, 655],
            id: oImageIds.backBut
        },
        O = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [100, 45],
            id: oImageIds.resetDataBut,
            noMove: true
        };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", G);
    userInput.addHitArea("resetData", butEventHandler, null, "image", O);
    var d = new Array(G, O);
    panel = new Elements.Panel(gameState, d);
    panel.startTween2();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}

function initGame() {
    gameState = "game";
    if (audioType == 1) {
        musicTween.kill();
        musicTween = TweenLite.to(music, 1, {
            volume: .4,
            ease: "Linear.easeNone"
        });
    }
    background = new Elements.Background(assetLib.getData("background0"), canvas.width, canvas.height);
    background.renderState = "game";
    hud = new Elements.Hud();
    squirrel = new Elements.Squirrel();
    branch = new Elements.Branch();
    userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [325, 0, 387, 58]
    }, true);
    userInput.addHitArea("swipe", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [0, 60, canvas.width, canvas.height]
    }, true);
    userInput.addKey("steerKeyRight", butEventHandler, null, 39);
    userInput.addKey("steerKeyLeft", butEventHandler, null, 37);
    userInput.addKey("keyUp", butEventHandler, null, 38);
    userInput.addKey("keyDown", butEventHandler, null, 40);
    controlState = "lean";
    swipeDetect = new Utils.SwipeDetect();
    oGameData.distance = 0;
    oGameData.curGemChain = 0;
    oGameData.curGems = 0;
    oGameData.boostNum = 0;
    endGameSequence = false;
    playSound("startGame");
    aEffects = new Array();
    previousTime = new Date().getTime();
    updateGameEvent();
}

function butEventHandler(G, O) {
    switch (G) {
        case "langSelect":
            curLang = O.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            preAssetLib = new Utils.AssetLoader(curLang, [{
                id: "preloadImage",
                file: "images/" + curLang + "/preloadImage.jpg"
            }], ctx, canvas.width, canvas.height, false);
            preAssetLib.onReady(initLoadAssets);
            break;
        case "startGame":
            playSound("click");
            userInput.removeHitArea("startGame");
            userInput.removeHitArea("moreGames");
            userInput.removeHitArea("credits");
            if (isMobile) {
                launchFullscreen(document.documentElement);
            }
            initGame();
            break;
        case "credits":
            playSound("click");
            userInput.removeHitArea("showTutorial");
            userInput.removeHitArea("moreGames");
            userInput.removeHitArea("credits");
            if (isMobile) {
                launchFullscreen(document.documentElement);
            }
            //initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            initStartScreen();
            break;
        case "resetData":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            saveDataHandler.resetData();
            initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            playSound("click");

            break;
        case "startGame":
            playSound("click");
            userInput.removeHitArea("startGame");
            initGame();
            break;
        case "steerKeyRight":
            if (O.isDown) {
                squirrel.turn("right");
                if (firstRun && hud.tutState == 0) {
                    hasHorizAction = true;
                }
            } else {
                squirrel.allowRight = true;
            }
            break;
        case "steerKeyLeft":
            if (O.isDown) {
                squirrel.turn("left");
                if (firstRun && hud.tutState == 0) {
                    hasHorizAction = true;
                }
            } else {
                squirrel.allowLeft = true;
            }
            break;
        case "swipe":
            if (O.isDown) {
                swipeDetect.track(O.x, O.y);
            } else {
                swipeDetect.stopTrack(O.x, O.y);
            }
            break;
        case "keyUp":
            if (O.isDown) {
                squirrel.jump();
                if (firstRun && hud.tutState == 1) {
                    hasVertAction = true;
                }
            }
            break;
        case "keyDown":
            if (O.isDown) {
                squirrel.duck();
                if (firstRun && hud.tutState == 1) {
                    hasVertAction = true;
                }
            }
            break;
        case "playFromEnd":
            playSound("click");
            userInput.removeHitArea("playFromEnd");
            userInput.removeHitArea("upgrade");
            initGame();
            break;
        case "upgrade":
            playSound("click");
            userInput.removeHitArea("playFromEnd");
            userInput.removeHitArea("upgrade");
            initUpgrade();
            break;
        case "powerUp0":
            if (oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[0]] && aPowerUpBarData[0] < 8) {
                playSound("click");
                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[0]];
                aPowerUpBarData[0]++;
                setPowerUpButs();
                saveDataHandler.aLevelStore[2] = aPowerUpBarData[0];
                saveDataHandler.aLevelStore[0] = oGameData.totalGems;
                saveDataHandler.saveData();
            }
            break;
        case "powerUp1":
            if (oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[1]] && aPowerUpBarData[1] < 8) {
                playSound("click");
                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[1]];
                aPowerUpBarData[1]++;
                setPowerUpButs();
                saveDataHandler.aLevelStore[3] = aPowerUpBarData[1];
                saveDataHandler.aLevelStore[0] = oGameData.totalGems;
                saveDataHandler.saveData();
            }
            break;
        case "powerUp2":
            if (oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[2]] && aPowerUpBarData[2] < 8) {
                playSound("click");
                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[2]];
                aPowerUpBarData[2]++;
                setPowerUpButs();
                saveDataHandler.aLevelStore[4] = aPowerUpBarData[2];
                saveDataHandler.aLevelStore[0] = oGameData.totalGems;
                saveDataHandler.saveData();
            }
            break;
        case "powerUp3":
            if (oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[3]] && aPowerUpBarData[3] < 8) {
                playSound("click");
                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[3]];
                aPowerUpBarData[3]++;
                setPowerUpButs();
                saveDataHandler.aLevelStore[5] = aPowerUpBarData[3];
                saveDataHandler.aLevelStore[0] = oGameData.totalGems;
                saveDataHandler.saveData();
            }
            break;
        case "backFromUpgrade":
            playSound("click");
            userInput.removeHitArea("backFromUpgrade");
            userInput.removeHitArea("playFromUpgrade");
            userInput.removeHitArea("powerUp0");
            userInput.removeHitArea("powerUp1");
            userInput.removeHitArea("powerUp2");
            userInput.removeHitArea("powerUp3");
            initGameEnd();
            break;
        case "playFromUpgrade":
            playSound("click");
            userInput.removeHitArea("backFromUpgrade");
            userInput.removeHitArea("playFromUpgrade");
            userInput.removeHitArea("powerUp0");
            userInput.removeHitArea("powerUp1");
            userInput.removeHitArea("powerUp2");
            userInput.removeHitArea("powerUp3");
            initGame();
            break;
        case "mute":
            if (!manualPause) {
                playSound("click");
                toggleMute();
            }
            break;
        case "pause":
            playSound("click");
            toggleManualPause();

            break;
        case "resumeFromPause":
            playSound("click");
            toggleManualPause();

            break;
        case "quitFromPause":
            playSound("click");
            toggleManualPause();
            userInput.removeHitArea("pause");
            userInput.removeHitArea("swipe");
            userInput.removeKey("steerKeyRight");
            userInput.removeKey("steerKeyLeft");
            userInput.removeKey("keyUp");
            userInput.removeKey("keyDown");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("resumeFromPause");
            userInput.removeHitArea("moreGamesPause");
            levelScore = 0;
            totalScore = 0;
            initStartScreen();
            break;
    }
}

function initGameEnd() {
    gameState = "gameOver";
    if (audioType == 1) {
        musicTween.kill();
        musicTween = TweenLite.to(music, 2, {
            volume: .2,
            ease: "Linear.easeNone"
        });
    }
    saveDataHandler.aLevelStore[0] = oGameData.totalGems;
    if (oGameData.distance > saveDataHandler.aLevelStore[1]) {
        saveDataHandler.aLevelStore[1] = oGameData.distance;
    }
    saveDataHandler.saveData();
    userInput.removeHitArea("pause");
    userInput.removeHitArea("swipe");
    userInput.removeKey("steerKeyRight");
    userInput.removeKey("steerKeyLeft");
    userInput.removeKey("keyUp");
    userInput.removeKey("keyDown");
    background.renderState = "menuScroll";
    var G = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [150, 621],
            id: oImageIds.upgradeBut,
            noMove: true
        },
        O = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [360, 615],
            id: oImageIds.playBut
        };
    userInput.addHitArea("upgrade", butEventHandler, null, "image", G);
    userInput.addHitArea("playFromEnd", butEventHandler, null, "image", O);
    var d = new Array(G, O);
    panel = new Elements.Panel(gameState, d);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGameOver();
}

function initUpgrade() {
    gameState = "upgrade";
    if (audioType == 1) {
        musicTween.kill();
        musicTween = TweenLite.to(music, .5, {
            volume: .2,
            ease: "Linear.easeNone"
        });
    }
    var G = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [97, 621],
            id: oImageIds.backBut,
            noMove: true
        },
        O = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [360, 615],
            id: oImageIds.playBut
        },
        d = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [234, 216],
            id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[0]] + "On"],
            num: 0,
            noMove: true,
            tweenVert: true
        },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [234, 326],
            id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[1]] + "On"],
            num: 1,
            noMove: true,
            tweenVert: true
        },
        s = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [234, 436],
            id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[2]] + "On"],
            num: 2,
            noMove: true,
            tweenVert: true
        },
        A = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [234, 546],
            id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[3]] + "On"],
            num: 3,
            noMove: true,
            tweenVert: true
        };
    userInput.addHitArea("backFromUpgrade", butEventHandler, null, "image", G);
    userInput.addHitArea("playFromUpgrade", butEventHandler, null, "image", O);
    userInput.addHitArea("powerUp0", butEventHandler, null, "image", d);
    userInput.addHitArea("powerUp1", butEventHandler, null, "image", t);
    userInput.addHitArea("powerUp2", butEventHandler, null, "image", s);
    userInput.addHitArea("powerUp3", butEventHandler, null, "image", A);
    var B = new Array(d, t, s, A, G, O);
    panel = new Elements.Panel(gameState, B);
    setPowerUpButs();
    panel.startTween1();
    previousTime = new Date().getTime();
    updateUpgrade();
}

function setPowerUpButs() {
    if (aPowerUpButsData[aPowerUpBarData[0]] > oGameData.totalGems || aPowerUpBarData[0] >= 8) {
        panel.aButs[0].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[0]] + "Off"];
    } else {
        panel.aButs[0].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[0]] + "On"];
    }
    if (aPowerUpButsData[aPowerUpBarData[1]] > oGameData.totalGems || aPowerUpBarData[1] >= 8) {
        panel.aButs[1].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[1]] + "Off"];
    } else {
        panel.aButs[1].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[1]] + "On"];
    }
    if (aPowerUpButsData[aPowerUpBarData[2]] > oGameData.totalGems || aPowerUpBarData[2] >= 8) {
        panel.aButs[2].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[2]] + "Off"];
    } else {
        panel.aButs[2].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[2]] + "On"];
    }
    if (aPowerUpButsData[aPowerUpBarData[3]] > oGameData.totalGems || aPowerUpBarData[3] >= 8) {
        panel.aButs[3].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[3]] + "Off"];
    } else {
        panel.aButs[3].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[3]] + "On"];
    }
}

function gemEvent(G) {
    if (G > 0) {
        oGameData.curGems += G;
        oGameData.totalGems += G;
        oGameData.curGemChain += G;
        playSound("gem" + Math.floor(Math.random() * 4));
        hud.collectGem();
    }
}

function powerUpEvent(G) {
    playSound("collectPowerUp");
    switch (G) {
        case 0:
            squirrel.powerUpState = "invincible";
            squirrel.powerUpTimer = 10;
            break;
        case 1:
            squirrel.powerUpState = "magnet";
            squirrel.powerUpTimer = 10;
            break;
        case 2:
            squirrel.powerUpState = "gems";
            squirrel.powerUpTimer = 5;
            break;
        case 3:
            gemEvent((5 + oGameData.boostNum * 3) - oGameData.curGemChain);
            break;
    }
}

function endGameEvent(G) {
    userInput.removeHitArea("pause");
    endGameSequence = true;
    TweenMax.to(branch, 1, {
        scrollSpeed: 0,
        ease: "Quad.easeOut",
        onComplete: function() {
            initGameEnd();
        }
    });
    switch (G) {
        case "fall":
            squirrel.fallOff();
            if (musicTween) {
                musicTween.kill();
            }
            musicTween = TweenLite.to(music, .1, {
                volume: 0,
                ease: "Linear.easeNone"
            });
            playSound("fall");
            break;
        case "block":
            if (musicTween) {
                musicTween.kill();
            }
            musicTween = TweenLite.to(music, .1, {
                volume: 0,
                ease: "Linear.easeNone"
            });
            squirrel.hitBlock();
            branch.scrollSpeed = 0;
            addParticle("hitBlock", squirrel.x, squirrel.y);
            playSound("hitBlock");
            break;
    }
}

function addParticle(G, O, d) {
    var t = new Elements.Particle(G, O, d);
    switch (G) {
        case "collectGem":
            t.scaleX = t.scaleY = 1;
            break;
        case "dust":
            t.scaleX = t.scaleY = 3;
            t.scaleY = 3;
            break;
        case "hitBlock":
            t.scaleX = t.scaleY = 4;
            break;
    }
    aEffects.push(t);
}

function updateGameEvent() {
    if (manualPause || rotatePause || gameState != "game") {
        return;
    }
    delta = getDelta();
    background.update();
    background.render();
    branch.update();
    branch.render();
    if (swipeDetect.lastDir != null) {
        swipeDetect.resetInc += delta;
        if (swipeDetect.resetInc > .5) {
            swipeDetect.reset();
        }
    }
    for (var G = 0; G < aEffects.length; G++) {
        aEffects[G].update();
        aEffects[G].render();
        if (aEffects[G].removeMe) {
            aEffects.splice(G, 1);
            G -= 1;
        }
    }
    hud.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateGameEvent);
}

function updateCreditsScreenEvent() {
    if (rotatePause || gameState != "credits") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateCreditsScreenEvent);
}

function updateGameOver() {
    if (rotatePause || gameState != "gameOver") {
        return;
    }
    delta = getDelta();
    background.update();
    background.render();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateGameOver);
}

function updateUpgrade() {
    if (rotatePause || gameState != "upgrade") {
        return;
    }
    delta = getDelta();
    background.update();
    background.render();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateUpgrade);
}

function updateStartScreenEvent() {
    if (rotatePause || gameState != "start") {
        return;
    }
    delta = getDelta();
    background.update();
    background.render();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateStartScreenEvent);
}

function getDelta() {
    var G = new Date().getTime(),
        O = (G - previousTime) / 1000;
    previousTime = G;
    if (O > .5) {
        O = 0;
    }
    return O;
}

function checkSpriteCollision(G, O) {
    var d = G.x,
        t = G.y,
        s = O.x,
        A = O.y,
        B = (((d - s) * (d - s)) + ((t - A) * (t - A))),
        k = (G.radius) * (O.radius);
    if (B < k) {
        return true;
    } else {
        return false;
    }
}

function getScaleImageToMax(G, O) {
    var d;
    if (G.isSpriteSheet) {
        if (O[0] / G.oData.spriteWidth < O[1] / G.oData.spriteHeight) {
            d = Math.min(O[0] / G.oData.spriteWidth, 1);
        } else {
            d = Math.min(O[1] / G.oData.spriteHeight, 1);
        }
    } else {
        if (O[0] / G.img.width < O[1] / G.img.height) {
            d = Math.min(O[0] / G.img.width, 1);
        } else {
            d = Math.min(O[1] / G.img.height, 1);
        }
    }
    return d;
}

function getCentreFromTopLeft(G, O, d) {
    var t = new Array();
    t.push(G[0] + (O.oData.spriteWidth / 2) * d);
    t.push(G[1] + (O.oData.spriteHeight / 2) * d);
    return t;
}

function loadPreAssets() {
    if (aLangs.length > 1) {
        preAssetLib = new Utils.AssetLoader(curLang, [{
            id: "langSelect",
            file: "images/langSelect.jpg"
        }], ctx, canvas.width, canvas.height, false);
        preAssetLib.onReady(initLangSelect);
    } else {
        curLang = aLangs[0];
        preAssetLib = new Utils.AssetLoader(curLang, [{
            id: "preloadImage",
            file: "images/" + curLang + "/preloadImage.jpg?v=1"
        }], ctx, canvas.width, canvas.height, false);
        preAssetLib.onReady(initLoadAssets);
    }
}

function initLangSelect() {
    var G = preAssetLib.getData("langSelect");
    ctx.drawImage(G.img, canvas.width / 2 - G.img.width / 2, canvas.height / 2 - G.img.height / 2);
    var O = 140;
    for (var d = 0; d < aLangs.length; d++) {
        var t = canvas.width / 2 - (O * aLangs.length) / 2 + d * O,
            s = canvas.height / 2 - O / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[d]
        }, "rect", {
            aRect: [t, s, t + O, s + 140]
        });
    }
}

function initLoadAssets() {
    var G = preAssetLib.getData("preloadImage");
    ctx.drawImage(G.img, 0, 0);
    loadAssets();
}

function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "background0",
        file: "images/background0.jpg"
    }, {
        id: "rotateDeviceMessage",
        file: "images/rotateDeviceMessage.jpg"
    }, {
        id: "splash",
        file: "images/splashScreen.jpg"
    }, {
        id: "hud",
        file: "images/" + curLang + "/hud.png"
    }, {
        id: "uiButs",
        file: "images/" + curLang + "/uiButs.png",
        oAtlasData: {
            id0: {
                x: 190,
                y: 0,
                width: 164,
                height: 156
            },
            id1: {
                x: 0,
                y: 70,
                width: 188,
                height: 68
            },
            id10: {
                x: 305,
                y: 294,
                width: 59,
                height: 62
            },
            id11: {
                x: 0,
                y: 350,
                width: 59,
                height: 62
            },
            id12: {
                x: 183,
                y: 350,
                width: 59,
                height: 62
            },
            id13: {
                x: 61,
                y: 350,
                width: 59,
                height: 62
            },
            id14: {
                x: 244,
                y: 294,
                width: 59,
                height: 62
            },
            id15: {
                x: 251,
                y: 230,
                width: 59,
                height: 62
            },
            id16: {
                x: 190,
                y: 230,
                width: 59,
                height: 62
            },
            id17: {
                x: 0,
                y: 0,
                width: 188,
                height: 68
            },
            id2: {
                x: 0,
                y: 280,
                width: 188,
                height: 68
            },
            id3: {
                x: 0,
                y: 140,
                width: 188,
                height: 68
            },
            id4: {
                x: 0,
                y: 280,
                width: 188,
                height: 68
            },
            id5: {
                x: 0,
                y: 210,
                width: 188,
                height: 68
            },
            id6: {
                x: 190,
                y: 158,
                width: 76,
                height: 70
            },
            id7: {
                x: 268,
                y: 158,
                width: 59,
                height: 62
            },
            id8: {
                x: 122,
                y: 350,
                width: 59,
                height: 62
            },
            id9: {
                x: 312,
                y: 222,
                width: 59,
                height: 62
            }
        }
    }, {
        id: "panels",
        file: "images/" + curLang + "/panels_450x700.png?v=1"
    }, {
        id: "numbersWhite",
        file: "images/numbersWhite_24x37.png"
    }, {
        id: "numbersOrange",
        file: "images/numbersOrange_17x24.png"
    }, {
        id: "muteBut",
        file: "images/mute_58x56.png"
    }, {
        id: "branches",
        file: "images/branches_222x42.png"
    }, {
        id: "branchElements",
        file: "images/" + curLang + "/branchElements.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 244,
                width: 748,
                height: 121
            },
            id1: {
                x: 0,
                y: 367,
                width: 745,
                height: 121
            },
            id10: {
                x: 899,
                y: 345,
                width: 76,
                height: 101
            },
            id11: {
                x: 899,
                y: 242,
                width: 76,
                height: 101
            },
            id12: {
                x: 828,
                y: 677,
                width: 76,
                height: 101
            },
            id13: {
                x: 352,
                y: 727,
                width: 250,
                height: 43
            },
            id14: {
                x: 352,
                y: 819,
                width: 241,
                height: 41
            },
            id15: {
                x: 352,
                y: 862,
                width: 230,
                height: 44
            },
            id16: {
                x: 352,
                y: 772,
                width: 244,
                height: 45
            },
            id17: {
                x: 673,
                y: 490,
                width: 201,
                height: 64
            },
            id18: {
                x: 750,
                y: 244,
                width: 147,
                height: 222
            },
            id19: {
                x: 352,
                y: 908,
                width: 171,
                height: 25
            },
            id2: {
                x: 0,
                y: 121,
                width: 758,
                height: 121
            },
            id20: {
                x: 598,
                y: 791,
                width: 171,
                height: 25
            },
            id21: {
                x: 760,
                y: 204,
                width: 36,
                height: 38
            },
            id22: {
                x: 788,
                y: 677,
                width: 31,
                height: 24
            },
            id23: {
                x: 673,
                y: 556,
                width: 129,
                height: 26
            },
            id24: {
                x: 804,
                y: 556,
                width: 87,
                height: 119
            },
            id25: {
                x: 877,
                y: 121,
                width: 87,
                height: 119
            },
            id26: {
                x: 825,
                y: 791,
                width: 87,
                height: 119
            },
            id27: {
                x: 877,
                y: 0,
                width: 87,
                height: 119
            },
            id28: {
                x: 0,
                y: 937,
                width: 274,
                height: 82
            },
            id29: {
                x: 276,
                y: 937,
                width: 274,
                height: 82
            },
            id3: {
                x: 0,
                y: 0,
                width: 758,
                height: 119
            },
            id30: {
                x: 760,
                y: 0,
                width: 115,
                height: 202
            },
            id31: {
                x: 0,
                y: 490,
                width: 436,
                height: 113
            },
            id32: {
                x: 0,
                y: 605,
                width: 425,
                height: 120
            },
            id33: {
                x: 825,
                y: 912,
                width: 81,
                height: 103
            },
            id34: {
                x: 893,
                y: 468,
                width: 81,
                height: 129
            },
            id35: {
                x: 673,
                y: 584,
                width: 113,
                height: 108
            },
            id4: {
                x: 595,
                y: 819,
                width: 228,
                height: 210
            },
            id5: {
                x: 438,
                y: 490,
                width: 233,
                height: 211
            },
            id6: {
                x: 0,
                y: 727,
                width: 350,
                height: 208
            },
            id7: {
                x: 604,
                y: 703,
                width: 222,
                height: 86
            },
            id8: {
                x: 908,
                y: 912,
                width: 76,
                height: 101
            },
            id9: {
                x: 906,
                y: 599,
                width: 76,
                height: 101
            }
        }
    }, {
        id: "squirrel",
        file: "images/hero_154x198.png",
        oAnims: {
            running: [0, 1, 2, 3, 4, 5, 6, 7],
            jumping: [0, 1, 2, 3, 8, 9, 10, 10, 11, 11, 12, 12, 12],
            falling: [13],
            ducking: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 16, 15],
            blocked: [8, 9, 10, 11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
        }
    }, {
        id: "hitBlock",
        file: "images/hitBlock_156x139.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }, {
        id: "collectGem",
        file: "images/collectGem_107x99.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }, {
        id: "dust",
        file: "images/dust_49x47.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }, {
        id: "topFlare",
        file: "images/topFlare.png"
    }, {
        id: "boostShade",
        file: "images/boostShade.png"
    }], ctx, canvas.width, canvas.height);
    oImageIds.playBut = "id0";
    oImageIds.creditsBut = "id1";
    oImageIds.quitBut = "id2";
    oImageIds.moreGamesBut = "id3";
    oImageIds.quitBut = "id4";
    oImageIds.upgradeBut = "id5";
    oImageIds.backBut = "id6";
    oImageIds.upgradeBut20On = "id7";
    oImageIds.upgradeBut50On = "id8";
    oImageIds.upgradeBut80On = "id9";
    oImageIds.upgradeBut120On = "id10";
    oImageIds.upgradeBut175On = "id11";
    oImageIds.upgradeBut20Off = "id12";
    oImageIds.upgradeBut50Off = "id13";
    oImageIds.upgradeBut80Off = "id14";
    oImageIds.upgradeBut120Off = "id15";
    oImageIds.upgradeBut175Off = "id16";
    oImageIds.resetDataBut = "id17";
    oImageIds.horiz1 = "id0";
    oImageIds.horiz2 = "id1";
    oImageIds.horiz3 = "id2";
    oImageIds.straightHoriz = "id3";
    oImageIds.block1 = "id4";
    oImageIds.block2 = "id5";
    oImageIds.block3 = "id6";
    oImageIds.block4 = "id7";
    oImageIds.block5 = "id18";
    oImageIds.block6 = "id8";
    oImageIds.block7 = "id9";
    oImageIds.block8 = "id10";
    oImageIds.block9 = "id11";
    oImageIds.block10 = "id12";
    oImageIds.plant0 = "id13";
    oImageIds.plant1 = "id14";
    oImageIds.plant2 = "id15";
    oImageIds.plant3 = "id16";
    oImageIds.heroShadow = "id17";
    oImageIds.chainBar0 = "id19";
    oImageIds.chainBar1 = "id20";
    oImageIds.chainBarGem = "id21";
    oImageIds.cm = "id22";
    oImageIds.upgradeBar = "id23";
    oImageIds.block11 = "id24";
    oImageIds.block12 = "id25";
    oImageIds.block13 = "id26";
    oImageIds.block14 = "id27";
    oImageIds.tutMobile0 = "id28";
    oImageIds.tutMobile1 = "id29";
    oImageIds.tutHand = "id30";
    oImageIds.tutDesktop0 = "id31";
    oImageIds.tutDesktop1 = "id32";
    oImageIds.turnSignRight = "id33";
    oImageIds.turnSignLeft = "id34";
    oImageIds.turnSignT = "id35";
    assetLib.onReady(initStartScreen);
}

function resizeCanvas() {
    var G = window.innerWidth,
        O = window.innerHeight;
    if (G > 480) {
        G -= 1;
        O -= 1;
    }
    if (window.innerWidth > window.innerHeight && isMobile) {
        if (gameState != "loading") {
            rotatePauseOn();
        }
        if (G / canvas.width < O / canvas.height) {
            canvas.style.width = G + "px";
            canvas.style.height = (G / canvas.width) * canvas.height + "px";
            canvasX = 0;
            canvasY = ((O - (G / canvas.width) * canvas.height) / 2);
            canvasScaleX = canvasScaleY = canvas.width / G;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        } else {
            canvas.style.width = (O / canvas.height) * canvas.width + "px";
            canvas.style.height = O + "px";
            canvasX = ((G - (O / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / O;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    } else if (!isMobile) {
        if (rotatePause) {
            rotatePauseOff();
        }
        if (G / canvas.width < O / canvas.height) {
            canvas.style.width = G + "px";
            canvas.style.height = (G / canvas.width) * canvas.height + "px";
            canvasX = 0;
            canvasY = ((O - (G / canvas.width) * canvas.height) / 2);
            canvasScaleX = canvasScaleY = canvas.width / G;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        } else {
            canvas.style.width = (O / canvas.height) * canvas.width + "px";
            canvas.style.height = O + "px";
            canvasX = ((G - (O / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / O;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    } else {
        if (rotatePause) {
            rotatePauseOff();
        }
        canvasX = canvasY = 0;
        canvasScaleX = canvas.width / G;
        canvasScaleY = canvas.height / O;
        canvas.style.width = G + "px";
        canvas.style.height = O + "px";
        div.style.marginTop = 0 + "px";
        div.style.marginLeft = 0 + "px";
    }
    userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}

function playSound(G) {
    if (audioType == 1) {
        sound.play(G);
    }
}

function toggleMute() {
    muted = !muted;
    if (audioType == 1) {
        if (muted) {
            Howler.mute();
        } else {
            Howler.unmute();
        }
    } else if (audioType == 2) {
        if (muted) {
            music.pause();
        } else {
            music.play();
        }
    }
    renderMuteBut();
}

function renderMuteBut() {
    if (audioType == 0) {
        return;
    }
    var G = assetLib.getData("muteBut"),
        O = 0;
    if (muted) {
        O = 1;
    }
    var d = (O * G.oData.spriteWidth) % G.img.width,
        t = Math.floor(O / (G.img.width / G.oData.spriteWidth)) * G.oData.spriteHeight;
    ctx.drawImage(G.img, d, t, G.oData.spriteWidth, G.oData.spriteHeight, 388, 4, G.oData.spriteWidth, G.oData.spriteHeight);
}

function toggleManualPause() {
    if (!manualPause) {
        manualPause = true;
        pauseCoreOn();
        var G = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, 500],
                id: oImageIds.quitBut
            },
            O = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, 350],
                id: oImageIds.playBut
            },
            d = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, 580],
                id: oImageIds.moreGamesBut
            },
            t = new Array(G, O, d);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", G);
        userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", O);
        userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", d);
        panel = new Elements.Panel("pause", t);
        panel.render(ctx);
        userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [325, 0, 387, 58]
        }, true);
    } else {
        manualPause = false;
        userInput.removeHitArea("quitFromPause");
        userInput.removeHitArea("resumeFromPause");
        userInput.removeHitArea("moreGamesPause");
        pauseCoreOff();
    }
}

function rotatePauseOn() {
    rotatePause = true;
    ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0);
    userInput.pauseIsOn = true;
    pauseCoreOn();
}

function rotatePauseOff() {
    rotatePause = false;
    userInput.removeHitArea("quitFromPause");
    userInput.removeHitArea("resumeFromPause");
    userInput.removeHitArea("moreGamesPause");
    pauseCoreOff();
}

function pauseCoreOn() {
    if (audioType == 1) {
        Howler.mute();
    } else if (audioType == 2) {
        music.pause();
    }
    switch (gameState) {
        case "game":
            userInput.removeHitArea("swipe");
            userInput.removeKey("steerKeyRight");
            userInput.removeKey("steerKeyLeft");
            userInput.removeKey("keyUp");
            userInput.removeKey("keyDown");
            break;
    }
}

function pauseCoreOff() {
    if (audioType == 1) {
        if (!muted) {
            Howler.unmute();
        }
    } else if (audioType == 2) {
        if (!muted) {
            music.play();
        }
    }
    previousTime = new Date().getTime();
    userInput.pauseIsOn = false;
    switch (gameState) {
        case "start":
            initStartScreen();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "game":
            if (!manualPause) {
                userInput.addHitArea("pause", butEventHandler, null, "rect", {
                    aRect: [325, 0, 387, 58]
                }, true);
                userInput.addHitArea("swipe", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [0, 60, canvas.width, canvas.height]
                }, true);
                userInput.addKey("steerKeyRight", butEventHandler, null, 39);
                userInput.addKey("steerKeyLeft", butEventHandler, null, 37);
                userInput.addKey("keyUp", butEventHandler, null, 38);
                userInput.addKey("keyDown", butEventHandler, null, 40);
                updateGameEvent();
            } else {
                manualPause = false;
                updateGameEvent();
                toggleManualPause();
            }
            break;
        case "gameOver":
            initGameEnd();
            break;
        case "upgrade":
            initUpgrade();
            break;
    }
};